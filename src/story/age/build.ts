import { AGE_MID, gapBounds, gapsFor, WANING_YEARS, type Gap } from "@/engine/age";
import { REALMS } from "@/engine/cultivation";
import type { Age } from "@/engine/hero";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { AGE_BEATS, AGE_DEEP } from "./lexicon-age";
import { GAP_DOOR, GAP_KEEPER, GAP_PICKS, GAP_SCENE, GAP_TITLE, PICK_LABEL, type Pick12 } from "./lexicon-door";
import { DOOR_TIER, GAP_GREET, GAP_MEMORY, REPORT_AGE, WANING_MEMORY, YEARS_READ } from "./lexicon-read";
import { REALM_BEATS, REALM_DEEP } from "./lexicon-realm";
import type { AgeSpec } from "./spec";

export type RoadContext8 = RoadContext3;

/** The Age Roads count their finished roads by wayside number, five hundred above the Fortune Roads’. */
export const AGE_WAYSIDE_BASE = 500;
export const AGE_DONE_ANY = "ag_done_";
export const ageDoneFlag = (wayside: number, id: string) => `ag_done_w${wayside}_${id}`;
export const ageDonePrefix = (wayside: number) => `ag_done_w${wayside}_`;

/** The flag that says a hero went through a road’s door of years, and the prefix that counts them over the whole story. */
export const DOOR_PREFIX = "ag_door_";
export const doorFlag = (id: string) => `${DOOR_PREFIX}${id}`;
/** The flag that says which pick a hero made behind the door. */
export const pickFlag = (pickId: string, id: string) => `ag_pick_${pickId}_${id}`;
export const pickPrefix = (pickId: string) => `ag_pick_${pickId}_`;
export const doorScenarioId = (id: string) => `AGE_DOOR_${id.toUpperCase()}`;
/** The scene behind the door for one gap. */
export const doorSceneId = (id: string, gap: Gap) => `${id}_ag_${gap}`;

const PRONOUN: Record<AgeSpec["kgender"], { kthey: string; kthem: string; ktheir: string }> = {
  woman: { kthey: "she", kthem: "her", ktheir: "her" },
  man: { kthey: "he", kthem: "him", ktheir: "his" },
};

/** The slots every line of an Age Road is filled with. */
export function slotsOf(spec: AgeSpec, focus: string): Record<string, string> {
  return { place: spec.place, kname: spec.kname, keeper: spec.keeper, relic: spec.relic, focus, ...PRONOUN[spec.kgender] };
}

/**
 * Turns a road’s hand-written parts into the spec a Fortune Road builder takes. The first scene of every approach is the keeper’s own opening.
 * The sixteen that follow are a beat of the keeper’s years and a beat of the road’s realm, in turn, and the hidden room is the realm’s secret
 * told through the keeper’s age.
 */
export function synthesize(spec: AgeSpec, realm: number): RoadSpec3 {
  const beat = (a: number, s: number): string => {
    const slots = slotsOf(spec, spec.focus[a]);
    if (s === 0) return fill(spec.openers[a], slots);
    const i = a * 4 + (s - 1);
    const age = fill(AGE_BEATS[spec.age][i], slots);
    const stage = fill(REALM_BEATS[realm][i], slots);
    return i % 2 === 0 ? `${age} ${stage}` : `${stage} ${age}`;
  };
  const row = (a: number): [string, string, string, string, string] => [beat(a, 0), beat(a, 1), beat(a, 2), beat(a, 3), beat(a, 4)];
  const deepSlots = slotsOf(spec, spec.focus[2]);
  const deep = [0, 1, 2].map((n) => {
    const keeper = fill(AGE_DEEP[spec.age][n], deepSlots);
    const stage = fill(REALM_DEEP[realm][n], deepSlots);
    return n < 2 ? `${stage} ${keeper}` : `${keeper} ${stage}`;
  }) as [string, string, string];
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

/** The condition that a hero’s years stand in a gap to the keeper’s. */
export const gapCondition = (gap: Gap, keeper: Age): Condition => ({ kind: "age", ...gapBounds(gap, keeper) });

/** The insight a hero needs to understand what the road says of years. */
export const GAP_QI = 12;
/** A hero must have this few years or fewer left to be given more. A hero with years to spare is told to come back. */
export const YEARS_NEEDED = 20;

interface PickDef {
  tone: ChoiceTone;
  requires?: Condition[];
  hint?: string;
  effects: Effect[];
}

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });
const dao = (amount: number): Effect => ({ kind: "addDao", amount });

/** The years a road gives a hero who is short of them: two, and one more for every realm the road asks. */
export const yearsGiven = (realm: number) => realm + 2;

/** What each pick behind the door asks and gives. A pick that lengthens a life or hastens a realm asks the realm of the road. */
function pickDef(p: Pick12, R: number, need: string): PickDef {
  switch (p) {
    case "sit":
      return { tone: "quiet", effects: [stat("qi", 3), cult(3 + 2 * R)] };
    case "trade":
      return { tone: "inquiry", effects: [stat("insight", 2), dao(2), cult(2 + R)] };
    case "race":
      return {
        tone: "force",
        requires: [{ kind: "stat", stat: "qi", min: GAP_QI }],
        hint: `A trial of qi is paid for in qi. You need ${GAP_QI}.`,
        effects: [stat("qi", -8), stat("karma", -1), cult(5 + 3 * R)],
      };
    case "teach":
      return { tone: "mercy", effects: [stat("karma", 2), stat("insight", 1), cult(2 + R)] };
    case "pose":
      return { tone: "deceit", effects: [stat("karma", -2), stat("insight", 1), cult(2 + R)] };
    case "outlast":
      return {
        tone: "force",
        requires: [{ kind: "realm", min: R }],
        hint: `Outlasting a keeper at ${need} asks ${need}. You are not there yet.`,
        effects: [stat("qi", -6), cult(6 + 3 * R)],
      };
    case "learn":
      return { tone: "inquiry", effects: [stat("insight", 3), dao(3), cult(1 + R)] };
    case "bow":
      return { tone: "mercy", effects: [stat("karma", 2), cult(2 + R)] };
    case "hasten":
      return {
        tone: "force",
        requires: [{ kind: "stat", stat: "qi", min: GAP_QI + 2 }],
        hint: `Hurrying a lesson costs qi. You need ${GAP_QI + 2}.`,
        effects: [stat("qi", -10), stat("karma", -1), cult(6 + 3 * R)],
      };
    case "mentor":
      return { tone: "mercy", effects: [stat("karma", 3), cult(2 + R)] };
    case "remember":
      return { tone: "inquiry", effects: [stat("insight", 2), cult(3 + 2 * R)] };
    case "years":
      return {
        tone: "truth",
        requires: [
          { kind: "years", max: YEARS_NEEDED },
          { kind: "realm", min: Math.max(0, R - 1) },
          { kind: "stat", stat: "qi", min: 15 },
        ],
        hint: `A road gives years only to a hero with ${YEARS_NEEDED} or fewer left, a realm near ${need}, and 15 qi to spend.`,
        effects: [{ kind: "addYears", amount: yearsGiven(R) }, stat("qi", -12), stat("karma", 1), cult(3 + R)],
      };
  }
}

/** The flag of the lesser way a hero below a road’s realm may ask for. At the Mortal wayside nobody is below the realm, so nothing sets it. */
const isHumbled = (c: Condition) => c.kind === "flag" && c.flag.endsWith("_humbled");

const GAP_TONE: Record<Gap, ChoiceTone> = { kin: "quiet", older: "mercy", younger: "inquiry", farOlder: "truth", farYounger: "mercy" };

/** The keeper’s reading of a hero whose years are running out. Three bands in one group. */
function yearsGroup(seed: number, slots: Record<string, string>): Extra[] {
  const bands: [keyof typeof YEARS_READ, { min?: number; max?: number }][] = [
    ["past", { max: 0 }],
    ["short", { min: 1, max: WANING_YEARS }],
    ["near", { min: WANING_YEARS + 1, max: 10 }],
  ];
  return bands.map(([band, bounds]) => ({
    when: [{ kind: "years" as const, ...bounds }],
    paragraphs: [fill(pick(YEARS_READ[band], seed), slots)],
    group: "years",
  }));
}

/**
 * Builds the scenes of one Age Road: the 25 of a Fortune Road, with the keeper’s years and the road’s realm in every beat, and a door of years in
 * the middle of the second approach that opens to a hero by how far their years stand from the keeper’s. A hero sees one scene behind the door and
 * never the other two. Behind it four picks, each of which the Elder answers at once, and one of which gives years back to a hero who is running short
 * of them, if the hero has the realm for it. The keeper also reads the hero’s age on arrival and the years the hero has left.
 */
export function buildRoad8(spec: AgeSpec, ctx: RoadContext8): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const need = REALMS[R].name;
  const own = (suffix: string) => `${id}_${suffix}`;
  const scenes = buildRoad3(synthesize(spec, R), ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Age Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    if (index < 0) throw new Error(`Age Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));
  const seed = ctx.index;
  const slots = (a: number) => slotsOf(spec, spec.focus[a]);
  const done = ageDoneFlag(ctx.wayside - AGE_WAYSIDE_BASE, id);
  const fortuneDone = `fr_done_w${ctx.wayside}_${id}`;
  put("return", (s) => ({
    ...s,
    choices: s.choices.map((c) => ({ ...c, effects: (c.effects ?? []).map((e): Effect => (e.kind === "setFlag" && e.flag === fortuneDone ? { ...e, flag: done } : e)) })),
  }));
  // A road at the Mortal wayside has no lesser way to ask for: nobody is below Mortal.
  if (R === 0) {
    put("entry", (s) => ({ ...s, choices: s.choices.filter((c) => c.id !== "humble") }));
    put("return", (s) => ({ ...s, extras: (s.extras ?? []).filter((x) => !x.when.some(isHumbled)) }));
  }

  const gaps = gapsFor(spec.age);

  // What the keeper makes of the hero’s years the moment they arrive (on the entry), and of the years the hero has left (on two later scenes).
  add("entry", gaps.map((gap) => ({ when: [gapCondition(gap, spec.age)], paragraphs: [fill(pick(GAP_GREET[gap], seed), slots(0))], group: "gap" })));
  add("a0s3", yearsGroup(seed, slots(0)));
  add("a2s3", yearsGroup(seed + 1, slots(2)));

  // The door of years, at the middle of the second approach.
  put("a1s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      ...gaps.map((gap, n): Choice => ({
        id: `door_${gap}`,
        label: fill(pick(GAP_DOOR[gap], seed + n), slots(1)),
        tone: GAP_TONE[gap],
        next: doorSceneId(id, gap),
        requires: [gapCondition(gap, spec.age), { kind: "flag", flag: doorFlag(id), is: false }],
        hideLocked: true,
      })),
    ],
  }));

  for (const gap of gaps) {
    const picks = GAP_PICKS[gap].map((p, n) => ({ pickId: p, label: pick(PICK_LABEL[p], seed + n), def: pickDef(p, R, need) }));
    const s1 = slots(1);
    scenes.push({
      id: doorSceneId(id, gap),
      title: `${spec.title}: ${pick(GAP_TITLE[gap], seed)}`,
      paragraphs: [fill(GAP_SCENE[gap][R], s1), fill(GAP_KEEPER[spec.age][gap] ?? "", s1)].filter(Boolean),
      extras: yearsGroup(seed + 2, s1),
      choices: picks.map(({ pickId, label, def }): Choice => ({
        id: pickId,
        label: fill(label, s1),
        tone: def.tone,
        next: own("a1s3"),
        ...(def.requires ? { requires: def.requires, lockedHint: def.hint } : {}),
        effects: [{ kind: "setFlag", flag: doorFlag(id) }, { kind: "setFlag", flag: pickFlag(pickId, id) }, ...def.effects],
        npcScenario: doorScenarioId(id),
      })),
    });
  }
  return scenes;
}

// ───────────── the Elder

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

/** The Elder’s answer to the door of years on one road. Five lines by her trust, and memories for the years a hero has left and the gap they stood in. */
export function buildDoorScenario(spec: AgeSpec, ctx: RoadContext8): NpcScenario {
  const s = slotsOf(spec, spec.focus[1]);
  const lines = Object.fromEntries(TIERS.map((t) => [t, fill(pick(DOOR_TIER[t], ctx.index + t.length), s)])) as Record<Tier, string>;
  const memory: NonNullable<NpcScenario["memory"]> = [{ when: [{ kind: "years", max: WANING_YEARS }], line: fill(pick(WANING_MEMORY, ctx.index), s) }];
  gapsFor(spec.age).forEach((gap, n) => memory.push({ when: [gapCondition(gap, spec.age), { kind: "hero", field: "age", not: ["young"] }], line: fill(pick(GAP_MEMORY[gap], ctx.index + n), s) }));
  return {
    id: doorScenarioId(spec.id),
    summary: `The player sits with their own years at ${spec.place}, where the road reads them against the keeper’s.`,
    delta: { respect: 1, trust: 1 },
    lines,
    memory,
  };
}

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for the door of years, if the hero went through it. */
export function buildReport8(spec: AgeSpec, ctx: RoadContext8): NpcScenario {
  const report = buildReport3(synthesize(spec, ctx.realm), ctx);
  const s = slotsOf(spec, spec.focus[0]);
  const kept = (report.memory ?? []).filter((m) => ctx.realm > 0 || !m.when.some(isHumbled));
  return {
    ...report,
    memory: [{ when: [{ kind: "flag" as const, flag: doorFlag(spec.id) }], line: fill(pick(REPORT_AGE, ctx.index), s) }, ...kept],
  };
}

export { AGE_MID };
