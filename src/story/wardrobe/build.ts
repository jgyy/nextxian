import { ATTIRES, type Attire } from "@/engine/hero";
import { garmentName, garmentPrice, GARMENTS, pawnValue } from "@/engine/wardrobe";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, pricesFor, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { CRAFT_BEATS, CRAFT_DEEP, CRAFT_FIT, CRAFT_GARB } from "./lexicon-craft";
import { COUNTER, ELDER_MIRROR, FIT_LABEL, MIRROR, PAWN, RACK, VERDICT, WORK } from "./lexicon-fitting";
import { FAREWELL, GLANCE, GREET } from "./lexicon-regard";
import { STANCE_BEATS, STANCE_DEEP } from "./lexicon-stance";
import type { WardSpec } from "./spec";

export type RoadContext12 = RoadContext3;

/** The Wardrobe Roads count their finished roads by wayside number, nine hundred above the Fortune Roads’. */
export const WARD_WAYSIDE_BASE = 900;
export const WARD_DONE_PREFIX = "wd_done_";
export const wardDonePrefix = (wayside: number) => `${WARD_DONE_PREFIX}w${wayside}_`;
export const wardDoneFlag = (wayside: number, id: string) => `${wardDonePrefix(wayside)}${id}`;

/** The flags the fitting sets, by road. */
export const fitFlag = (id: string, name: string) => `${id}_fit_${name}`;
export const fitId = (id: string, n: number) => `${id}_f${n}`;

const PRONOUN: Record<"woman" | "man", { kthey: string; kthem: string; ktheir: string }> = {
  woman: { kthey: "she", kthem: "her", ktheir: "her" },
  man: { kthey: "he", kthem: "him", ktheir: "his" },
};

/** The slots every line of a Wardrobe Road is filled with. */
export function slotsOf(spec: WardSpec, focus: string): Record<string, string> {
  return {
    place: spec.place,
    kname: spec.kname,
    keeper: spec.keeper,
    relic: spec.relic,
    focus,
    garb: CRAFT_GARB[spec.craft],
    ...PRONOUN[spec.gender],
  };
}

/** The craft’s own index, which is the realm of the wayside. */
export const realmOfCraft = (spec: WardSpec, crafts: readonly string[]) => crafts.indexOf(spec.craft);

/**
 * Turns a road’s hand-written parts into the spec a Fortune Road builder takes. The first scene of every approach is the keeper’s own opening. The sixteen
 * that follow are a beat of the craft and a beat of the keeper’s way with dress, in turn, and the hidden room is the craft’s own cellar.
 */
export function synthesize(spec: WardSpec): RoadSpec3 {
  const beat = (a: number, s: number): string => {
    const slots = slotsOf(spec, spec.focus[a]);
    if (s === 0) return fill(spec.openers[a], slots);
    const i = a * 4 + (s - 1);
    const craft = fill(CRAFT_BEATS[spec.craft][i], slots);
    const stance = fill(STANCE_BEATS[spec.stance][i], slots);
    return i % 2 === 0 ? `${craft} ${stance}` : `${stance} ${craft}`;
  };
  const row = (a: number): [string, string, string, string, string] => [beat(a, 0), beat(a, 1), beat(a, 2), beat(a, 3), beat(a, 4)];
  const deepSlots = slotsOf(spec, spec.focus[2]);
  // The way down is the craft’s own room, then the keeper arriving to speak of it, then what the keeper keeps in the wall.
  const deep: [string, string, string] = [
    `${fill(CRAFT_DEEP[spec.craft][0], deepSlots)} ${fill(CRAFT_DEEP[spec.craft][1], deepSlots)}`,
    fill(CRAFT_DEEP[spec.craft][2], deepSlots),
    STANCE_DEEP[spec.stance].map((t) => fill(t, deepSlots)).join(" "),
  ];
  return {
    id: spec.id,
    title: spec.title,
    place: spec.place,
    keeper: spec.keeper,
    kname: spec.kname,
    relic: spec.relic,
    omen: spec.omen,
    secret: spec.secret,
    intro: spec.intro,
    focus: spec.focus,
    beats: [row(0), row(1), row(2), row(3)],
    deep,
    close: spec.close,
    ware: spec.ware,
    holding: spec.holding,
  };
}

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });
const money = (n: number) => `${n} spirit stone${n === 1 ? "" : "s"}`;

/** One extra for every dress a hero can have on, in one group: the keeper reads the clothes exactly. */
function byAttire(text: (attire: Attire) => string, group: string): Extra[] {
  return ATTIRES.map((o) => ({ when: [{ kind: "hero" as const, field: "attire" as const, is: [o.value] }], paragraphs: [text(o.value)], group }));
}

/** What the fitting asks of a tipper: a sixth of the garment’s price. */
export const tipFor = (price: number) => Math.max(1, Math.ceil(price / 6));

const BUY_TONE: Record<Attire, ChoiceTone> = { rags: "mercy", traveller: "quiet", scholar: "inquiry", silk: "truth", armour: "force" };
const DRESS_CLASS: Attire[] = ["silk", "armour", "scholar"];
const ROAD_CLASS: Attire[] = ["rags", "traveller"];

/**
 * Builds the scenes of one Wardrobe Road: the 25 of a Fortune Road, with the craft and the keeper’s way with dress in every beat, and a fitting, six scenes
 * more. The keeper reads the dress the hero has on exactly, at the entry, at the start of every approach and at its end. The fitting is a counter where a hero
 * may buy a garment and put it on, earn a wage that is better in the right dress, or pawn a garment they do not wear; each ends in the keeper’s mirror.
 */
export function buildRoad12(spec: WardSpec, ctx: RoadContext12): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const wayside = ctx.wayside - WARD_WAYSIDE_BASE;
  const scenes = buildRoad3(synthesize(spec), ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Wardrobe Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === `${id}_${suffix}`);
    if (index < 0) throw new Error(`Wardrobe Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));
  const slots = (a: number) => slotsOf(spec, spec.focus[a]);
  const base = slotsOf(spec, spec.place);
  const done = wardDoneFlag(wayside, id);
  const fortuneDone = `fr_done_w${ctx.wayside}_${id}`;
  put("return", (s) => ({
    ...s,
    choices: s.choices.map((c) => ({ ...c, effects: (c.effects ?? []).map((e): Effect => (e.kind === "setFlag" && e.flag === fortuneDone ? { ...e, flag: done } : e)) })),
  }));

  // A road at the Mortal wayside has no lesser way to ask for: nobody is below Mortal.
  const isHumbled = (c: Condition) => c.kind === "flag" && c.flag.endsWith("_humbled");
  if (R === 0) {
    put("entry", (s) => ({ ...s, choices: s.choices.filter((c) => c.id !== "humble") }));
    put("return", (s) => ({ ...s, extras: (s.extras ?? []).filter((x) => !x.when.some(isHumbled)) }));
  }

  // The keeper reads the dress the hero has on: a glance on the entry, a greeting at the start of each approach, a parting at its end.
  add("entry", byAttire((a) => fill(GLANCE[spec.stance][a], slots(0)), "wglance"));
  for (let a = 0; a < 4; a++) {
    add(`a${a}s0`, byAttire((d) => fill(GREET[spec.stance][d], slots(a)), "wgreet"));
    add(`a${a}s4`, byAttire((d) => fill(FAREWELL[spec.stance][d], slots(a)), "wbye"));
  }
  put("entry", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      {
        id: "fitting",
        label: fill("Ask {kname} whether the counter at {place} has anything for a hero in the dress they are wearing, to buy, to earn or to sell.", base),
        tone: "inquiry",
        next: fitId(id, 0),
      },
    ],
  }));

  const price = pricesFor(R, ctx.slot, "token");
  const wage = price.wage;
  const fit = (n: number) => fitId(id, n);
  const flag = (name: string) => fitFlag(id, name);
  /** The flags the Elder’s remarks read across every road: a hero who has bought, pawned, worked or forged at any counter. */
  const global = (name: string): Effect => ({ kind: "setFlag", flag: `wdx_${name}` });
  const label = (key: keyof typeof FIT_LABEL) => fill(FIT_LABEL[key], base);

  // f0 — the counter.
  scenes.push({
    id: fit(0),
    title: `${spec.title}: The Counter`,
    paragraphs: [fill(COUNTER[spec.craft], base)],
    choices: [
      { id: "browse", label: label("browse"), tone: "inquiry", next: fit(1) },
      { id: "commission", label: label("commission"), tone: "quiet", next: fit(3) },
      {
        id: "pawn",
        label: label("pawn"),
        tone: "truth",
        next: fit(4),
        requires: [{ kind: "garments", min: 2 }],
        lockedHint: "You own no garment but the one you wear, and the hatch will not take the coat off your back.",
      },
      { id: "glass", label: label("glass"), tone: "mercy", next: fit(5) },
    ],
  });

  // f1 — the rack: five garments, each a price.
  scenes.push({
    id: fit(1),
    title: `${spec.title}: The Rack`,
    paragraphs: [fill(RACK[spec.craft], base)],
    choices: [
      ...ATTIRES.map(({ value: a }): Choice => {
        const cost = garmentPrice(a, R);
        return {
          id: `buy_${a}`,
          label: `Buy the ${garmentName(a)}, pay the keeper, and put it on at once.`,
          tone: BUY_TONE[a],
          next: fit(2),
          requires: [{ kind: "wealth", min: cost }, { kind: "wardrobe", attire: a, is: false }],
          lockedHint: `You need ${money(cost)}, and you must not own the ${garmentName(a)} already.`,
          effects: [{ kind: "addWealth", amount: -cost }, { kind: "wear", attire: a }, { kind: "setFlag", flag: flag("bought") }, global("bought")],
        };
      }),
      { id: "look", label: label("look"), tone: "inquiry", next: fit(5) },
    ],
  });

  // f2 — the fitting: the keeper’s verdict on what the hero has put on.
  const tip = tipFor(garmentPrice("traveller", R));
  scenes.push({
    id: fit(2),
    title: `${spec.title}: The Fitting`,
    paragraphs: [fill("{Kname} lets you stand a moment in the new dress before saying a word, as a keeper does who knows that the first look is the truest.", base)],
    extras: byAttire((a) => fill(VERDICT[spec.stance][a], base), "wverdict"),
    choices: [
      { id: "thank", label: label("thank"), tone: "truth", next: fit(5), effects: [stat("karma", 1)] },
      { id: "ask", label: label("ask"), tone: "inquiry", next: fit(5), effects: [stat("insight", 2)] },
      {
        id: "tip",
        label: label("tip"),
        tone: "mercy",
        next: fit(5),
        requires: [{ kind: "wealth", min: tip }, { kind: "flag", flag: flag("tipped"), is: false }],
        lockedHint: `You need ${money(tip)}.`,
        effects: [{ kind: "addWealth", amount: -tip }, stat("karma", 2), { kind: "setFlag", flag: flag("tipped") }],
      },
      { id: "slip", label: label("slip"), tone: "deceit", next: fit(5), effects: [stat("karma", -2), { kind: "setFlag", flag: flag("slipped") }] },
    ],
  });

  // f3 — the commission: the wage is better in the right dress.
  const fit3: Attire = CRAFT_FIT[spec.craft];
  const paid: Condition = { kind: "flag", flag: flag("worked"), is: false };
  scenes.push({
    id: fit(3),
    title: `${spec.title}: The Commission`,
    paragraphs: [fill(WORK[spec.craft], base), fill("The plain rate is {wage} spirit stones. In {fitName}, which is what the work was cut for, {kname} pays three times that; in the dress of the house, twice.", { ...base, wage: String(wage), fitName: garmentName(fit3) })],
    choices: [
      { id: "piece", label: label("piece"), tone: "quiet", next: fit(5), requires: [paid], lockedHint: "You have been paid here already.", effects: [{ kind: "addWealth", amount: wage }, { kind: "setFlag", flag: flag("worked") }, global("worked")] },
      {
        id: "deliver",
        label: label("deliver"),
        tone: "truth",
        next: fit(5),
        requires: [paid, { kind: "hero", field: "attire", is: [fit3] }],
        lockedHint: `Only a hero in the ${garmentName(fit3)} is trusted with this delivery.`,
        effects: [{ kind: "addWealth", amount: 3 * wage }, { kind: "setFlag", flag: flag("worked") }, global("worked"), { kind: "setFlag", flag: flag("delivered") }],
      },
      {
        id: "model",
        label: label("model"),
        tone: "force",
        next: fit(5),
        requires: [paid, { kind: "hero", field: "attire", is: DRESS_CLASS }],
        lockedHint: "The window wants a hero in silk, a scale jerkin or a scholar’s robe.",
        effects: [{ kind: "addWealth", amount: 2 * wage }, { kind: "setFlag", flag: flag("worked") }, global("worked"), cult(1 + R)],
      },
      {
        id: "beg",
        label: label("beg"),
        tone: "mercy",
        next: fit(5),
        requires: [paid, { kind: "hero", field: "attire", is: ROAD_CLASS }],
        lockedHint: "The street trusts a face in patched hemp or an oiled cloak.",
        effects: [{ kind: "addWealth", amount: 2 * wage }, { kind: "setFlag", flag: flag("worked") }, global("worked"), stat("karma", 1)],
      },
      {
        id: "forge",
        label: label("forge"),
        tone: "deceit",
        next: fit(5),
        requires: [paid, { kind: "stat", stat: "insight", min: 14 }],
        lockedHint: "Copying the house’s pattern unseen needs Insight 14.",
        effects: [{ kind: "addWealth", amount: 3 * wage }, stat("karma", -3), { kind: "setFlag", flag: flag("worked") }, global("worked"), { kind: "setFlag", flag: flag("forged") }, global("forged")],
      },
    ],
  });

  // f4 — the pawn: any garment the hero owns and does not wear.
  scenes.push({
    id: fit(4),
    title: `${spec.title}: The Hatch`,
    paragraphs: [fill(PAWN[spec.craft], base)],
    choices: [
      ...ATTIRES.map(({ value: a }): Choice => {
        const value = pawnValue(a, R);
        return {
          id: `pawn_${a}`,
          label: `Pass the ${garmentName(a)} through the hatch for ${money(value)}.`,
          tone: "truth",
          next: fit(5),
          requires: [{ kind: "flag", flag: flag("pawned"), is: false }, { kind: "wardrobe", attire: a }, { kind: "hero", field: "attire", not: [a] }],
          lockedHint: `You do not own a ${garmentName(a)} to spare, or it is the one you wear.`,
          effects: [{ kind: "loseAttire", attire: a }, { kind: "addWealth", amount: value }, { kind: "setFlag", flag: flag("pawned") }, global("pawned")],
        };
      }),
      { id: "keep", label: label("keep"), tone: "quiet", next: fit(5) },
    ],
  });

  // f5 — the mirror: the dress the hero leaves in, and what the world will make of it.
  scenes.push({
    id: fit(5),
    title: `${spec.title}: The Mirror`,
    paragraphs: [fill("At the door of {place} {kname} turns a long glass to the light and lets you see what the road will see.", base)],
    extras: byAttire((a) => fill(MIRROR[spec.stance][a], base), "wmirror"),
    interjections: ATTIRES.map((o) => ({ when: [{ kind: "hero" as const, field: "attire" as const, is: [o.value] }], line: ELDER_MIRROR[o.value] })),
    choices: [
      { id: "mirror_thank", label: label("mirror_thank"), tone: "truth", next: `${id}_return`, npcScenario: "WARDROBE_MIRROR" },
      { id: "mirror_ask", label: label("mirror_ask"), tone: "inquiry", next: `${id}_return`, effects: [stat("insight", 1)] },
      { id: "mirror_quiet", label: label("mirror_quiet"), tone: "quiet", next: `${id}_return`, effects: [cult(1 + R)] },
      { id: "mirror_go", label: label("mirror_go"), tone: "mercy", next: `${id}_return` },
    ],
  });
  return scenes;
}

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
void TIERS;

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for what the hero did at the counter. */
export function buildReport12(spec: WardSpec, ctx: RoadContext12): NpcScenario {
  const report = buildReport3(synthesize(spec), ctx);
  const R = ctx.realm;
  const s = slotsOf(spec, spec.place);
  const f = (name: string): Condition[] => [{ kind: "flag", flag: fitFlag(spec.id, name) }];
  const isHumbled = (c: Condition) => c.kind === "flag" && c.flag.endsWith("_humbled");
  const kept = (report.memory ?? []).filter((m) => R > 0 || !m.when.some(isHumbled));
  return {
    ...report,
    memory: [
      { when: f("worked"), line: fill("You took a wage at {place} and told me what it was for. A hero who can earn a stone in honest work is a hero who will not be bought by the first stranger with two, and I take comfort in it.", s) },
      { when: f("forged"), line: fill("You copied the pattern at {place} without leave, and then you came and told me. I am not pleased with the first, and I have noted the second. The two do not cancel.", s) },
      { when: f("slipped"), line: fill("You went out of {place} by the side door without a word for {kname}. I heard it from {kname}. {Kthey} did not complain. It was the not complaining that I minded.", s) },
      { when: f("pawned"), line: fill("You sold a garment at {place} and kept the stones. A hero should not own more clothes than a road requires, and I do not hold the sale against you. Tell me you did not need it.", s) },
      { when: f("delivered"), line: fill("You carried the delivery at {place} in the dress it was cut for, and were paid the three-fold rate. It is the dress I would have chosen, and I should like to know why you did.", s) },
      { when: f("bought"), line: fill("You bought a new dress at {place} and put it on in the keeper’s presence. A change of clothes is a small act, and I have never known a small act that did not tell me something.", s) },
      ...kept,
    ],
  };
}

export { pick, GARMENTS };
