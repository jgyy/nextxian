import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, Effect, ItemDef, ItemKind, NpcScenario, Scene } from "@/engine/types";
import { ATTIRES, BACKGROUNDS, GENDERS, LOOKS, STATUSES } from "@/engine/hero";
import { ALLIES, APPROACH_LABEL, CHOICE_LABEL, MODE_BEAT, OBSTACLES, STAGE_TITLE } from "../roads/lexicon";
import { approachModes, fill, roadFlag, walkBase } from "../roads/build";
import { BEAT_EXTRA, CHOICE_EXTRA, spread } from "../roads/lexicon-extra";
import { focusKind, pickFit } from "../roads/kinds";
import { BIRTH, bandBounds, DRESS, FACE, MANNER, SEND_OFF, TRADE } from "../roads2/hero-lex";
import { BANDS, DEEP_READ, heroGroup, labelSlots, pick, realmGroup, sceneTones, TONE_EFFECTS, type Extra } from "../roads2/build";
import {
  APPROACH_LABEL2,
  CHOICE_LABEL2,
  HIDDEN_TITLE2,
  MODE_BEAT2,
  REPORT_MEMORY2,
  RETURN_FOUND_SECRET2,
  RETURN_HUMBLED,
  RETURN_PULLED_RANK,
  RETURN_REACHED,
  RETURN_USED_QI2,
} from "../roads2/lexicon";
import {
  BRIBE,
  BUY,
  HAGGLE,
  IN_KIND,
  INVEST,
  LEASE,
  LEASE_SHARE,
  PURSE_REACT,
  RETURN_BRIBED,
  RETURN_CHOICES3,
  RETURN_EARNED,
  RETURN_INVESTED,
  RETURN_LEASED,
  RETURN_SPENT,
  RETURN_USED_WARE,
  REPORT_MEMORY3,
  RISKY,
  SELL_WARE,
  SETTLE,
  USE_WARE,
  WARE_REACT,
  WORK,
  type PurseBand,
} from "./lexicon";
import { REPORT_LINES3, RETURN_APPROACH3, RETURN_CHOICES_BASE, RETURN_OPEN3 } from "./lexicon-return";

/** The goods a road sells. The name has no article: the text says “the Grey Flag Tally”. */
export interface WareSpec {
  name: string;
  kind: ItemKind;
  blurb: string;
}

/** The holding a road leases out. */
export interface HoldingSpec {
  name: string;
  blurb: string;
}

type Five = [string, string, string, string, string];

/**
 * What one Fortune Road needs from its author: twenty situations, three hidden scenes, an introduction and a close, the
 * goods it sells and the holding it leases. The builder prices them by the road’s realm, adds the choices that spend and
 * earn, and writes the reactions to the purse, the pack, the lease and the realm.
 */
export interface RoadSpec3 {
  id: string;
  title: string;
  place: string;
  keeper: string;
  kname: string;
  relic: string;
  omen: string;
  secret: string;
  intro: string;
  focus: [string, string, string, string];
  beats: [Five, Five, Five, Five];
  deep: [string, string, string];
  close: string;
  ware: WareSpec;
  holding: HoldingSpec;
}

export interface RoadContext3 {
  /** Position among all Fortune Roads, 0-based. */
  index: number;
  /** The wayside’s number, 1 to 10. */
  wayside: number;
  waysideId: string;
  /** Position within the wayside, 0 to 3. */
  slot: number;
  /** The realm this road asks for. */
  realm: number;
  /** Book One waysides use the mountain’s wording; the later ones use the road’s. */
  flavour: "mountain" | "road";
}

export const FORTUNE_DONE = "fr_done_";
export const doneFlag3 = (wayside: number, id: string) => `${FORTUNE_DONE}w${wayside}_${id}`;
export const reportedFlag3 = (id: string) => roadFlag(id, "reported");
export const reportId3 = (id: string) => `REPORT_FORTUNE_${id.toUpperCase()}`;
export const wareId = (id: string) => `${id}_ware`;
export const holdingId = (id: string) => `${id}_hold`;

/** What a road charges and pays, from its realm and its place in the wayside. The numbers are the road’s whole economy. */
export interface Prices {
  /** The base price of a good: the wage of two days. */
  base: number;
  /** What the road’s goods cost. A pill costs twice the base; a lot of material or a token, seven tenths. */
  ware: number;
  /** The price after the flaw has been found. */
  cheap: number;
  /** A day’s wage. */
  wage: number;
  /** The wage of the job a mortal cannot do. */
  big: number;
  /** What it costs to settle a matter, or to bribe it away. */
  settle: number;
  /** The lease on the holding. */
  lease: number;
  /** The lease for a share-holder. */
  discount: number;
  /** What a buyer pays for the goods or takes for the lease. */
  value: number;
  leaseValue: number;
  /** What a share in the books costs. */
  invest: number;
}

export function pricesFor(realm: number, slot: number, kind: ItemKind): Prices {
  const base = 6 + 4 * realm + slot;
  const ware = kind === "pill" ? 2 * base : kind === "material" || kind === "token" ? Math.round(base * 0.7) : base;
  const lease = 4 * base;
  return {
    base,
    ware,
    cheap: Math.round(ware * 0.7),
    wage: 3 + 2 * realm,
    big: 3 * (3 + 2 * realm),
    settle: Math.round(base / 2),
    lease,
    discount: Math.round(base * 2.5),
    value: Math.round(ware * 0.6),
    leaseValue: Math.round(lease * 0.6),
    invest: base,
  };
}

/** Percentage points of cultivation speed an item adds while carried, by kind. A pill adds none: it breaks a realm open. */
export const KIND_SPEED: Record<ItemKind, number> = { pill: 0, tool: 6, relic: 5, scripture: 7, material: 3, token: 2 };

export function wareItem(spec: RoadSpec3, ctx: RoadContext3): ItemDef {
  const p = pricesFor(ctx.realm, ctx.slot, spec.ware.kind);
  const speed = KIND_SPEED[spec.ware.kind];
  return {
    id: wareId(spec.id),
    name: spec.ware.name,
    kind: spec.ware.kind,
    blurb: spec.ware.blurb,
    value: p.value,
    ...(spec.ware.kind === "pill" ? { aid: Math.min(ctx.realm + 1, REALMS.length - 1) } : { speed, needsRealm: Math.max(0, ctx.realm - 1) }),
  };
}

export function holdingAsset(spec: RoadSpec3, ctx: RoadContext3): AssetDef {
  const p = pricesFor(ctx.realm, ctx.slot, spec.ware.kind);
  const income = Math.ceil(p.base / 5);
  return {
    id: holdingId(spec.id),
    name: spec.holding.name,
    blurb: spec.holding.blurb,
    income,
    upkeep: Math.ceil(income / 3),
    speed: 2 + Math.floor(ctx.realm / 2),
    needsRealm: ctx.realm,
  };
}

/** The purse against the road’s base price: four bands, in one group. */
function purseGroup(base: number, seed: number, slots: Record<string, string>): Extra[] {
  const bands: [PurseBand, { min?: number; max?: number }][] = [
    ["broke", { max: Math.floor(base / 3) }],
    ["thin", { min: Math.floor(base / 3) + 1, max: base - 1 }],
    ["fair", { min: base, max: base * 3 - 1 }],
    ["rich", { min: base * 3 }],
  ];
  return bands.map(([band, bounds]) => ({
    when: [{ kind: "wealth" as const, ...bounds }],
    paragraphs: [fill(pick(PURSE_REACT[band], seed), slots)],
    group: "purse",
  }));
}

const money = (n: number) => `${n} spirit stone${n === 1 ? "" : "s"}`;

/** Builds the 25 scenes of one Fortune Road: entry, four approaches of five scenes, a hidden route of three, and a return. */
export function buildRoad3(spec: RoadSpec3, ctx: RoadContext3): Scene[] {
  const { id } = spec;
  const R = ctx.realm;
  const mountain = ctx.flavour === "mountain";
  const modes = approachModes(ctx.index);
  const done = doneFlag3(ctx.wayside, id);
  const price = pricesFor(R, ctx.slot, spec.ware.kind);
  const isPill = spec.ware.kind === "pill";
  const ware = wareId(id);
  const hold = holdingId(id);
  const need = REALMS[R].name;
  const base: Record<string, string> = {
    place: spec.place,
    keeper: spec.keeper,
    kname: spec.kname,
    relic: spec.relic,
    omen: spec.omen,
    secret: spec.secret,
    ware: `the ${spec.ware.name}`,
    holding: `the ${spec.holding.name}`,
    price: String(price.ware),
    cheap: String(price.cheap),
    wage: String(price.wage),
    big: String(price.big),
    settle: String(price.settle),
    lease: String(price.lease),
    discount: String(price.discount),
    value: String(price.value),
  };
  const modeBeat = mountain ? MODE_BEAT : MODE_BEAT2;
  const approachLabel = mountain ? APPROACH_LABEL : APPROACH_LABEL2;
  const choiceLabel = mountain ? CHOICE_LABEL : CHOICE_LABEL2;
  const obstacles = OBSTACLES;
  const allies = ALLIES;
  const flag = (name: string) => roadFlag(id, name);
  const scenes: Scene[] = [];

  // What each money choice needs, shown beside it when it is locked.
  const hasStones = (n: number): Condition[] => [{ kind: "wealth", min: n }];
  const stonesHint = (n: number) => `You need ${money(n)}.`;

  // ── The entry.
  scenes.push({
    id: `${id}_entry`,
    title: `Fortune Road: ${spec.title}`,
    paragraphs: [fill(spec.intro, base)],
    extras: [
      ...heroGroup("attire", ATTIRES, DRESS, "dress", ctx.index, base),
      ...heroGroup("status", STATUSES, BIRTH, "birth", ctx.index + 1, base),
      ...realmGroup("entry", R, ctx.index, base, "realm"),
    ],
    choices: [
      ...modes.map((mode, a): Choice => {
        const choice: Choice = {
          id: `approach_${a}`,
          label: fill(pickFit(approachLabel[mode], ctx.index + a, spec.focus[a]), { ...base, focus: spec.focus[a] }),
          tone: mode,
          next: `${id}_a${a}s0`,
          effects: [{ kind: "setFlag", flag: flag(`approach_${a}`) }],
        };
        if (a === 2) choice.needsRealm = R;
        if (a === 3) {
          choice.requires = [{ kind: "realm", min: R }];
          choice.lockedHint = `The deep door at ${spec.focus[a]} opens only to ${need} or above.`;
        }
        return choice;
      }),
      {
        id: "humble",
        label: fill("Tell {kname} you are not equal to {place}, and ask what a lesser traveller may do.", base),
        tone: "mercy",
        next: `${id}_a0s0`,
        requires: [{ kind: "realm", max: R - 1 }],
        lockedHint: `Only a traveller below ${need} can ask for the lesser way.`,
        effects: [{ kind: "setFlag", flag: flag("humbled") }, { kind: "addStat", stat: "karma", amount: 1 }, { kind: "setFlag", flag: flag("approach_0") }],
      },
    ],
  });

  // ── Four approaches of five scenes.
  modes.forEach((mode, a) => {
    for (let stage = 0; stage < 5; stage++) {
      const seed = ctx.index * 7 + a * 3 + stage * 5;
      const slots = { ...base, focus: spec.focus[a], obstacle: pick(obstacles[mode], seed + 1), ally: pick(allies[mode], seed + 2) };
      const next = stage < 4 ? `${id}_a${a}s${stage + 1}` : `${id}_return`;
      const choices: Choice[] = sceneTones(mode, stage, a).map((tone, c) => {
        const effects: Effect[] = [...TONE_EFFECTS[tone]];
        const labels = [...choiceLabel[tone], ...CHOICE_EXTRA[tone]];
        return { id: tone, label: fill(pickFit(labels, walkBase(ctx.index, a, tone) + stage, slots.focus), labelSlots(slots, tone, seed + c)), tone, next, effects };
      });
      const extras: Extra[] = [];
      const eco = (c: Choice) => choices.push(c);

      if (stage === 0) {
        extras.push(...realmGroup("open", R, seed, slots, "realm"), ...purseGroup(price.base, seed, slots));
      }
      if (stage === 1) {
        extras.push(...heroGroup("background", BACKGROUNDS, TRADE, "trade", seed, slots), ...heroGroup("looks", LOOKS, FACE, "face", seed + 1, slots));
        // A hero of standing makes the road yield to their name.
        choices.push({
          id: "rank",
          label: fill(
            focusKind(slots.focus) === "place"
              ? "Let your name and bearing speak for you at {focus}, and wait for the door to open."
              : "Let your name and bearing speak for you here, and wait for {focus} to yield.",
            slots,
          ),
          tone: "force",
          next,
          requires: [{ kind: "standing", min: 2 * R + 1 }],
          lockedHint: `Your standing is not high enough here. Birth, dress and realm all count, and ${spec.kname} wants ${2 * R + 1}.`,
          effects: [{ kind: "setFlag", flag: flag("pulled_rank") }, { kind: "addStat", stat: "karma", amount: -1 }, { kind: "addCultivation", amount: 2 + R }],
        });
        if (a === 0) {
          // The offer: buy the goods at the keeper’s price, or find the flaw and pay less. A pill is sold only to a hero of the road’s realm, the one just below the realm it opens.
          const sellable: Condition[] = isPill ? [{ kind: "realm", min: R }] : [];
          const hint = (n: number) => (isPill ? `${stonesHint(n)} ${spec.kname} sells this only to ${need} or above.` : stonesHint(n));
          eco({
            id: "buy",
            label: fill(pick(BUY, seed), slots),
            tone: "truth",
            next,
            requires: [...hasStones(price.ware), ...sellable, { kind: "item", item: ware, max: 0 }],
            lockedHint: hint(price.ware),
            effects: [{ kind: "addWealth", amount: -price.ware }, { kind: "giveItem", item: ware }, { kind: "setFlag", flag: flag("bought") }],
          });
          eco({
            id: "haggle",
            label: fill(pick(HAGGLE, seed + 1), slots),
            tone: "inquiry",
            next,
            requires: [...hasStones(price.cheap), ...sellable, { kind: "stat", stat: "insight", min: 14 }, { kind: "item", item: ware, max: 0 }],
            lockedHint: `${stonesHint(price.cheap)} Finding the flaw needs Insight 14.`,
            effects: [{ kind: "addWealth", amount: -price.cheap }, { kind: "giveItem", item: ware }, { kind: "setFlag", flag: flag("bought") }, { kind: "addStat", stat: "insight", amount: 1 }],
          });
        }
        if (a === 1) {
          eco({
            id: "work",
            label: fill(pick(WORK, seed), slots),
            tone: "quiet",
            next,
            requires: [{ kind: "flag", flag: flag("worked"), is: false }],
            lockedHint: "You have already been paid for a day here.",
            effects: [{ kind: "addWealth", amount: price.wage }, { kind: "setFlag", flag: flag("worked") }],
          });
        }
        if (a === 3) {
          eco({
            id: "invest",
            label: fill(pick(INVEST, seed), slots),
            tone: "inquiry",
            next,
            requires: [...hasStones(price.invest), { kind: "flag", flag: flag("invested"), is: false }],
            lockedHint: `${stonesHint(price.invest)} Or you have a share already.`,
            effects: [{ kind: "addWealth", amount: -price.invest }, { kind: "setFlag", flag: flag("invested") }, { kind: "addStat", stat: "insight", amount: 1 }],
          });
        }
      }
      if (stage === 2) {
        extras.push(...heroGroup("gender", GENDERS, MANNER, "manner", seed, slots));
        if (a === 2) {
          eco({
            id: "bribe",
            label: fill(pick(BRIBE, seed), slots),
            tone: "deceit",
            next,
            requires: [...hasStones(price.settle), { kind: "flag", flag: flag("bribed"), is: false }],
            lockedHint: stonesHint(price.settle),
            effects: [{ kind: "addWealth", amount: -price.settle }, { kind: "setFlag", flag: flag("bribed") }, { kind: "addStat", stat: "karma", amount: -2 }, { kind: "addStat", stat: "insight", amount: 2 }],
          });
        }
        if (a === 0 || a === 1) {
          // Goods bought or taken elsewhere can be sold here.
          eco({
            id: "sell",
            label: fill(pick(SELL_WARE, seed), slots),
            tone: "truth",
            next,
            requires: [{ kind: "item", item: ware }],
            lockedHint: `You carry no ${spec.ware.name} to sell.`,
            effects: [{ kind: "takeItem", item: ware }, { kind: "addWealth", amount: price.value }],
          });
        }
      }
      if (stage === 3) {
        extras.push(...realmGroup("crisis", R, seed, slots, "realm"));
        eco({
          id: "draw_qi",
          label: fill("Draw on your cultivation and let your qi settle over {place} before you answer.", slots),
          tone: "quiet",
          next,
          requires: [{ kind: "realm", min: R }],
          lockedHint: `Needs ${need} cultivation or higher.`,
          effects: [
            { kind: "addCultivation", amount: 4 + R * 2 },
            { kind: "addStat", stat: "qi", amount: 3 },
            { kind: "setFlag", flag: flag("used_qi") },
          ],
        });
        eco({
          id: "reach",
          label: fill(
            focusKind(slots.focus) === "person"
              ? "Reach beyond what you are and let your qi meet {focus} until it answers."
              : "Reach beyond what you are and push your qi into {focus} until it answers.",
            slots,
          ),
          tone: "force",
          next,
          needsRealm: Math.min(R + 1, REALMS.length - 1),
          effects: [{ kind: "addCultivation", amount: 6 + R * 2 }, { kind: "setFlag", flag: flag("reached") }],
        });
        eco({
          id: "settle",
          label: fill(pick(SETTLE, seed), slots),
          tone: "mercy",
          next,
          requires: [...hasStones(price.settle), { kind: "flag", flag: flag("settled"), is: false }],
          lockedHint: stonesHint(price.settle),
          effects: [
            { kind: "addWealth", amount: -price.settle },
            { kind: "setFlag", flag: flag("settled") },
            { kind: "addStat", stat: "karma", amount: 2 },
          ],
        });
        eco({
          id: "show_ware",
          label: fill(pick(USE_WARE, seed), slots),
          tone: "quiet",
          next,
          requires: [{ kind: "item", item: ware }],
          lockedHint: `You carry no ${spec.ware.name} to show.`,
          effects: [{ kind: "setFlag", flag: flag("used_ware") }, { kind: "addStat", stat: "insight", amount: 1 }, { kind: "addCultivation", amount: 2 + R }],
        });
        if (a === 1) {
          // The job a mortal cannot do. It pays three days at once, and asks the road’s realm; a hero below it pays in strain.
          eco({
            id: "risky",
            label: fill(pick(RISKY, seed), slots),
            tone: "force",
            next,
            needsRealm: R,
            requires: [{ kind: "flag", flag: flag("risky"), is: false }],
            lockedHint: "You have already taken that job.",
            effects: [{ kind: "addWealth", amount: price.big }, { kind: "setFlag", flag: flag("risky") }],
          });
        }
      }
      if (stage === 4) {
        extras.push(...heroGroup("attire", ATTIRES, SEND_OFF, "sendoff", seed, slots));
        if (a === 1) {
          eco({
            id: "in_kind",
            label: fill(pick(IN_KIND, seed), slots),
            tone: "mercy",
            next,
            requires: [{ kind: "flag", flag: flag("worked") }, { kind: "item", item: ware, max: 0 }],
            lockedHint: `You were not paid in work here, or you carry ${spec.ware.name} already.`,
            effects: [{ kind: "giveItem", item: ware }, { kind: "setFlag", flag: flag("in_kind") }],
          });
        }
        if (a === 3) {
          // The lease. A heroes’ realm decides whether the ward on the holding answers to them; a share-holder pays less.
          const unlocked: Condition[] = [{ kind: "asset", asset: hold, is: false }, { kind: "realm", min: R }];
          eco({
            id: "lease",
            label: fill(pick(LEASE, seed), slots),
            tone: "inquiry",
            next,
            requires: [...hasStones(price.lease), ...unlocked, { kind: "flag", flag: flag("invested"), is: false }],
            lockedHint: `${stonesHint(price.lease)} ${spec.kname} will lease it only to ${need} or above, and not twice.`,
            effects: [{ kind: "addWealth", amount: -price.lease }, { kind: "grantAsset", asset: hold }, { kind: "setFlag", flag: flag("leased") }],
          });
          eco({
            id: "lease_share",
            label: fill(pick(LEASE_SHARE, seed), slots),
            tone: "truth",
            next,
            requires: [...hasStones(price.discount), ...unlocked, { kind: "flag", flag: flag("invested") }],
            lockedHint: `${stonesHint(price.discount)} You must hold a share, bought at the first sign of the books, and ${need} or above.`,
            effects: [{ kind: "addWealth", amount: -price.discount }, { kind: "grantAsset", asset: hold }, { kind: "setFlag", flag: flag("leased") }],
          });
        }
        if (a === 2) {
          choices.push({
            id: "hidden_stair",
            label: fill(
              focusKind(slots.focus) === "thing"
                ? "Notice the loose board beneath {focus} that you walked past, and lift it."
                : "Notice the way behind {focus} that you walked past, and go down.",
              slots,
            ),
            tone: "inquiry",
            next: `${id}_h0`,
            requires: [{ kind: "stat", stat: "insight", min: 12 }],
            lockedHint: "You have not read this place closely enough yet. Insight 12 is needed.",
            effects: [{ kind: "addStat", stat: "insight", amount: 1 }],
          });
        }
      }
      scenes.push({
        id: `${id}_a${a}s${stage}`,
        title: `${spec.title}: ${STAGE_TITLE[mode][stage]}`,
        paragraphs: [fill(spec.beats[a][stage], slots), fill(spread([...modeBeat[mode], ...BEAT_EXTRA[mode]], walkBase(ctx.index, a, mode), stage), slots)],
        ...(extras.length ? { extras } : {}),
        choices,
      });
    }
  });

  // ── The hidden route: three scenes the road wrote for itself. The last gives the goods, free.
  HIDDEN_TITLE2.forEach((title, n) => {
    const slots = { ...base, focus: spec.focus[2], obstacle: pick(obstacles[modes[2]], ctx.index), ally: pick(allies[modes[2]], ctx.index) };
    const next = n < 2 ? `${id}_h${n + 1}` : `${id}_return`;
    const last = n === 2;
    const final: Effect[] = last
      ? [
          { kind: "setFlag", flag: flag("found_secret") },
          { kind: "addCultivation", amount: 5 + R * 2 },
          { kind: "giveItem", item: ware },
          { kind: "setFlag", flag: flag("found_ware") },
        ]
      : [];
    scenes.push({
      id: `${id}_h${n}`,
      title: `${spec.title}: ${title}`,
      paragraphs: [fill(spec.deep[n], slots)],
      ...(last ? { extras: BANDS.map((band) => ({ when: [{ kind: "realm" as const, ...bandBounds(band, R) }], paragraphs: [fill(DEEP_READ[band], slots)], group: "read" })) } : {}),
      choices: sceneTones(modes[2], n, 2).map((tone, c) => ({
        id: tone,
        label: fill(pickFit([...choiceLabel[tone], ...CHOICE_EXTRA[tone]], walkBase(ctx.index, 2, tone) + 5 + n, slots.focus), labelSlots(slots, tone, ctx.index + n + c)),
        tone,
        next,
        effects: [...TONE_EFFECTS[tone], ...final],
      })),
    });
  });

  // ── The way back.
  const doneEffect: Effect = { kind: "setFlag", flag: done };
  const flagIs = (name: string): Condition[] => [{ kind: "flag", flag: flag(name) }];
  scenes.push({
    id: `${id}_return`,
    title: `${spec.title}: The Way Back`,
    paragraphs: [fill(pick(RETURN_OPEN3, ctx.index), base), fill(spec.close, base)],
    extras: [
      ...modes.map((mode, a) => ({
        when: flagIs(`approach_${a}`),
        paragraphs: [fill(pickFit(RETURN_APPROACH3[mode], ctx.index, spec.focus[a]), { ...base, focus: spec.focus[a] })],
        group: "approach",
      })),
      { when: flagIs("found_secret"), paragraphs: [fill(RETURN_FOUND_SECRET2, base)], group: "manner" },
      { when: flagIs("pulled_rank"), paragraphs: [fill(RETURN_PULLED_RANK, base)], group: "manner" },
      { when: flagIs("humbled"), paragraphs: [fill(RETURN_HUMBLED, base)], group: "manner" },
      { when: flagIs("reached"), paragraphs: [fill(RETURN_REACHED, base)], group: "manner" },
      { when: flagIs("used_qi"), paragraphs: [fill(RETURN_USED_QI2, base)], group: "manner" },
      { when: flagIs("used_ware"), paragraphs: [fill(RETURN_USED_WARE, base)], group: "manner" },
      // What the hero did with money, in the order that matters most. Only one shows.
      { when: flagIs("leased"), paragraphs: [fill(RETURN_LEASED, base)], group: "money" },
      { when: [{ kind: "item", item: ware }], paragraphs: [fill(pick(WARE_REACT[spec.ware.kind], ctx.index), base)], group: "money" },
      { when: flagIs("invested"), paragraphs: [fill(RETURN_INVESTED, base)], group: "money" },
      { when: flagIs("settled"), paragraphs: [fill(RETURN_SPENT, base)], group: "money" },
      { when: flagIs("bribed"), paragraphs: [fill(RETURN_BRIBED, base)], group: "money" },
      { when: flagIs("worked"), paragraphs: [fill(RETURN_EARNED, base)], group: "money" },
    ],
    choices: [
      { id: "report", label: fill(RETURN_CHOICES_BASE.report, base), tone: "truth", next: ctx.waysideId, npcScenario: reportId3(id), effects: [doneEffect] },
      { id: "silent", label: fill(RETURN_CHOICES_BASE.silent, base), tone: "deceit", next: ctx.waysideId, effects: [doneEffect, { kind: "addStat", stat: "karma", amount: -1 }] },
      { id: "rest", label: fill(RETURN_CHOICES_BASE.rest, base), tone: "quiet", next: ctx.waysideId, effects: [doneEffect, { kind: "addCultivation", amount: 3 + R }] },
      {
        id: "keep",
        label: fill(RETURN_CHOICES_BASE.keep, base),
        tone: "inquiry",
        next: ctx.waysideId,
        effects: [doneEffect, { kind: "setFlag", flag: flag("kept_relic") }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "sell_ware",
        label: fill(RETURN_CHOICES3.sellWare, base),
        tone: "truth",
        next: ctx.waysideId,
        requires: [{ kind: "item", item: ware }],
        lockedHint: `You carry no ${spec.ware.name} to sell.`,
        effects: [doneEffect, { kind: "takeItem", item: ware }, { kind: "addWealth", amount: price.value }],
      },
      {
        id: "sell_holding",
        label: fill(RETURN_CHOICES3.sellHolding, base),
        tone: "deceit",
        next: ctx.waysideId,
        requires: [{ kind: "asset", asset: hold }],
        lockedHint: `You hold no lease on ${spec.holding.name}.`,
        effects: [doneEffect, { kind: "loseAsset", asset: hold }, { kind: "addWealth", amount: price.leaseValue }],
      },
    ],
  });

  scenes[scenes.length - 1].extras!.push(...realmGroup("close", R, ctx.index, base, "realm"));
  return scenes;
}

const REPORT_DELTAS = [
  { trust: 2, respect: 2 },
  { trust: 3, suspicion: -2 },
  { respect: 3, trust: 1 },
  { trust: 1, fear: -1, respect: 2 },
];

/** The Elder’s reaction to a report. Her memory lines read what the hero did, what they carry and how far above or below the road they stood. */
export function buildReport3(spec: RoadSpec3, ctx: RoadContext3): NpcScenario {
  const id = spec.id;
  const R = ctx.realm;
  const slots = {
    place: spec.place,
    kname: spec.kname,
    keeper: spec.keeper,
    relic: spec.relic,
    omen: spec.omen,
    secret: spec.secret,
    ware: `the ${spec.ware.name}`,
    holding: `the ${spec.holding.name}`,
  };
  const line = (tier: keyof typeof REPORT_LINES3) => fill(pick(REPORT_LINES3[tier], ctx.index + tier.length), slots);
  const flag = (name: string): Condition[] => [{ kind: "flag", flag: roadFlag(id, name) }];
  return {
    id: reportId3(id),
    summary: `The player reports on ${spec.place}.`,
    delta: pick(REPORT_DELTAS, ctx.index),
    lines: { hostile: line("hostile"), wary: line("wary"), neutral: line("neutral"), warm: line("warm"), devoted: line("devoted") },
    memory: [
      { when: flag("humbled"), line: fill(REPORT_MEMORY2.humble, slots) },
      { when: flag("leased"), line: fill(REPORT_MEMORY3.leased, slots) },
      { when: flag("found_secret"), line: fill(REPORT_MEMORY2.secret, slots) },
      { when: flag("pulled_rank"), line: fill(REPORT_MEMORY2.rank, slots) },
      { when: flag("bribed"), line: fill(REPORT_MEMORY3.bribed, slots) },
      { when: flag("settled"), line: fill(REPORT_MEMORY3.spent, slots) },
      { when: flag("kept_relic"), line: fill(REPORT_MEMORY2.relic, slots) },
      { when: flag("found_ware"), line: fill(REPORT_MEMORY3.found, slots) },
      { when: flag("in_kind"), line: fill(REPORT_MEMORY3.kind, slots) },
      { when: flag("bought"), line: fill(REPORT_MEMORY3.bought, slots) },
      { when: [{ kind: "item", item: wareId(id) }], line: fill(REPORT_MEMORY3.ware, slots) },
      { when: [{ kind: "wealth", max: 2 }, { kind: "realm", min: 2 }], line: fill(REPORT_MEMORY3.broke, slots) },
      { when: [{ kind: "wealth", min: 120 }], line: fill(REPORT_MEMORY3.rich, slots) },
      { when: [{ kind: "tone", tone: "deceit", min: 3, within: 6 }], line: fill(REPORT_MEMORY2.deceit, slots) },
      { when: [{ kind: "realm", min: R + 2 }], line: fill(REPORT_MEMORY2.over, slots) },
      ...(R >= 3 ? [{ when: [{ kind: "realm" as const, min: 1, max: R - 2 }], line: fill(REPORT_MEMORY2.under, slots) }] : []),
    ],
    remember: [reportedFlag3(id)],
  };
}
