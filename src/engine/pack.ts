import { applyEffects, react, settle } from "./game";
import { PAYDAY_EVERY, takeItem } from "./economy";
import { canChange, marketRate, putOn } from "./wardrobe";
import type { Attire } from "./hero";
import type { Effect, GameState, ItemDef, ItemKind, ItemUse, NpcScenario, Story } from "./types";

/**
 * What the hero can do with what they carry. Every item can be used from the pack, sold to whoever is buying, or given to the Elder. What using it does
 * is the item’s own `use`, or, when it has none, what its kind does at its height: a pill steadies the qi and quickens the cultivation, a tool is worked
 * until it hums, a scripture is read, a relic is sat with, a material is ground into a tonic, a token is called in. Tools, relics and scriptures are not
 * used up, and rest for a payday between uses; the rest are.
 */

/** Decisions a gift must wait: the Elder takes one only now and then, or it is a bribe. */
export const GIFT_EVERY = PAYDAY_EVERY;
export const GIFT_KEY = "gift";

/** How high an item stands: the realm it pays off at, or the realm its pill opens. */
export const tierOf = (item: ItemDef): number => item.needsRealm ?? (item.aid !== undefined ? Math.max(0, item.aid - 1) : 0);

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });

/** What an item does when used, from its kind and its height. */
export function effectOf(item: ItemDef): ItemUse {
  if (item.use) return item.use;
  const t = tierOf(item);
  const kinds: Record<ItemKind, ItemUse> = {
    pill: { verb: "Swallow", line: "settles in your meridians. Your qi steadies and your cultivation quickens, though a pill kept for a threshold would have done more", effects: [stat("qi", 6 + t), cult(4 + 2 * t)], consume: true },
    tool: { verb: "Work", line: "hums in your hands, and your qi runs clean through it", effects: [stat("qi", 4 + t), { kind: "addDao", amount: 1 }], cooldown: PAYDAY_EVERY },
    relic: { verb: "Sit with", line: "is quiet, and then not quiet. You rise from it a little wiser and a little kinder", effects: [stat("insight", 1), stat("karma", 1), cult(1 + t)], cooldown: PAYDAY_EVERY },
    scripture: { verb: "Read", line: "opens where it has opened for others, and you read a page you could not read before", effects: [stat("insight", 2), cult(2 + 2 * t)], cooldown: PAYDAY_EVERY },
    material: { verb: "Grind into a tonic", line: "goes into the bowl and comes out as a bitter tonic. You drink it, and your qi refills", effects: [stat("qi", 5 + t)], consume: true },
    token: { verb: "Call in", line: "is shown to the right person, and a favour is done. Somewhere on the mountain, a doubt eases", effects: [{ kind: "addNpc", metric: "trust", amount: 1 }, { kind: "addNpc", metric: "suspicion", amount: -1 }], consume: true },
  };
  return kinds[item.kind];
}

/** Why an item cannot be used now, or null when it can. */
export function applyBlock(story: Story, state: GameState, id: string): string | null {
  const item = story.items?.[id];
  if (!item || (state.items[id] ?? 0) <= 0) return "You do not carry it.";
  const use = effectOf(item);
  const wait = (use.cooldown ?? 0) - (state.decisions - (state.usedAt?.[id] ?? -Infinity));
  if (use.cooldown && wait > 0) return `It needs ${wait} more decision${wait === 1 ? "" : "s"} to rest.`;
  return null;
}

/** Uses an item from the pack. The effects land at the hero’s own cultivation speed. Throws when it cannot be used. */
export function applyItem(story: Story, state: GameState, id: string): GameState {
  const block = applyBlock(story, state, id);
  if (block) throw new Error(block);
  const item = story.items![id];
  const use = effectOf(item);
  let next: GameState = applyEffects({ ...state, usedAt: { ...(state.usedAt ?? {}), [id]: state.decisions } }, [...use.effects, { kind: "setFlag", flag: "pack_used" }], state.speed);
  if (use.consume) next = { ...next, items: takeItem(next.items, id) };
  next = { ...next, log: [...next.log, { kind: "ledger", text: `You ${use.verb.toLowerCase()} the ${item.name}. It ${use.line}.` }] };
  return settle(story, next);
}

/** What a buyer gives for one of an item, for a seller in the hero’s dress. Never less than one stone for anything worth anything. */
export function sellPrice(item: ItemDef, state: Pick<GameState, "hero">): number {
  return item.value <= 0 ? 0 : Math.max(1, Math.round(item.value * marketRate(state.hero.attire)));
}

/** Sells one of an item to whoever is buying. */
export function sellBlock(story: Story, state: GameState, id: string): string | null {
  const item = story.items?.[id];
  if (!item || (state.items[id] ?? 0) <= 0) return "You do not carry it.";
  if (item.keepsake) return "It is a keepsake of your own story, and no buyer is offered it.";
  return item.value <= 0 ? "It is worth nothing to a buyer." : null;
}

export function sellItem(story: Story, state: GameState, id: string): GameState {
  const block = sellBlock(story, state, id);
  if (block) throw new Error(block);
  const item = story.items![id];
  const price = sellPrice(item, state);
  const next: GameState = {
    ...state,
    flags: { ...state.flags, pack_sold: true },
    flagAt: state.flags.pack_sold ? state.flagAt : { ...state.flagAt, pack_sold: state.decisions },
    items: takeItem(state.items, id),
    wealth: state.wealth + price,
    log: [...state.log, { kind: "ledger", text: `You sell the ${item.name} for ${price} spirit stone${price === 1 ? "" : "s"}.` }],
  };
  return settle(story, next);
}

/** What the Elder answers to a gift of each kind. A kind with no scenario of its own cannot be given. */
export const giftScenarioId = (kind: ItemKind) => `GIFT_${kind.toUpperCase()}`;

export function giftBlock(story: Story, state: GameState, id: string): string | null {
  const item = story.items?.[id];
  if (!item || (state.items[id] ?? 0) <= 0) return "You do not carry it.";
  if (item.keepsake) return "It is a keepsake of your own story, and the Elder would not take it.";
  if (!story.scenarios[giftScenarioId(item.kind)]) return "The Elder takes no gifts of this kind.";
  const wait = GIFT_EVERY - (state.decisions - (state.usedAt?.[GIFT_KEY] ?? -Infinity));
  if (wait > 0) return `She takes one gift in a payday: ${wait} more decision${wait === 1 ? "" : "s"}.`;
  return null;
}

/** Gives one of an item to the Elder. She answers in her own words, and her feeling moves by the kind of gift. */
export function giftItem(story: Story, state: GameState, id: string): GameState {
  const block = giftBlock(story, state, id);
  if (block) throw new Error(block);
  const item = story.items![id];
  const scenario: NpcScenario = story.scenarios[giftScenarioId(item.kind)];
  const given: GameState = {
    ...state,
    flags: { ...state.flags, pack_gifted: true },
    flagAt: state.flags.pack_gifted ? state.flagAt : { ...state.flagAt, pack_gifted: state.decisions },
    items: takeItem(state.items, id),
    usedAt: { ...(state.usedAt ?? {}), [GIFT_KEY]: state.decisions },
    log: [...state.log, { kind: "ledger", text: `You give the ${item.name} to ${story.npc.name}.` }],
  };
  return settle(story, react(story, given, scenario));
}

/** Changes into a garment the hero owns. It takes no decision, but the world reads the new dress at the next door. Throws when the hero does not own it. */
export function changeDress(story: Story, state: GameState, attire: Attire): GameState {
  if (!canChange(state, attire)) throw new Error("You cannot change into that.");
  return settle(story, putOn(state, attire));
}
