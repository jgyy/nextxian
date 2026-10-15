import { GENDERS, type Gender } from "@/engine/hero";
import { bandCondition, bandsAt, RANK_WAYS, rankPickPrefix, type RankBand, type RankWay } from "@/engine/rank";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { RUNG_BEATS, RUNG_DEEP, stanceGender, stanceReadsRank } from "./lexicon-rank";
import { STANCE_BEATS, STANCE_DEEP, type Reading } from "./lexicon-stance";
import { DOOR_LABEL, DOOR_SCENE, DOOR_TITLE, INTERJECT, PICK_LABEL, STANCE_DOOR } from "./lexicon-door";
import { BAND_LINE, CLASH_MEMORY, COST, EASE_MEMORY, GLANCE, GREET, NOTE, REPORT_RANK, RETURN_WORD, SENDOFF, WORD, WORD_OF, type WordState } from "./lexicon-read";
import { DOOR_REPLY } from "./lexicon-reply";
import type { RankSpec } from "./spec";

export type RoadContext10 = RoadContext3;

/** The Rank Roads count their finished roads by wayside number, seven hundred above the Fortune Roads’. */
export const RANK_WAYSIDE_BASE = 700;
export const rankDoneFlag = (wayside: number, id: string) => `rk_done_w${wayside}_${id}`;
export const rankDonePrefix = (wayside: number) => `rk_done_w${wayside}_`;

/** The flag that says a hero went through a road’s door of rank, and the one that says what they did behind it. */
export const doorFlag = (id: string) => `rk_door_${id}`;
export const pickFlag = (way: RankWay, id: string) => `${rankPickPrefix(way)}${id}`;
/** The flag that says a hero set their rank against a keeper who reads sex first, and the one that says they kept low before a keeper who reads rank first. */
export const clashFlag = (id: string) => `rk_clash_${id}`;
export const easeFlag = (id: string) => `rk_ease_${id}`;
/** The Elder’s answer to one thing a hero of one gender did behind the door of one road. */
export const doorScenarioId = (id: string, gender: Gender, way: RankWay) => `RANK_DOOR_${SUFFIX[gender].toUpperCase()}_${way.toUpperCase()}_${id.toUpperCase()}`;

const SUFFIX: Record<Gender, string> = { woman: "w", man: "m", unspoken: "u" };
/** The scene behind the door at one approach of one road, for one gender. */
export const doorSceneId = (id: string, approach: number, gender: Gender) => `${id}_d${approach}${SUFFIX[gender]}`;
export const GENDER_KINDS: Gender[] = GENDERS.map((g) => g.value);

const PRONOUN: Record<"woman" | "man", { kthey: string; kthem: string; ktheir: string }> = {
  woman: { kthey: "she", kthem: "her", ktheir: "her" },
  man: { kthey: "he", kthem: "him", ktheir: "his" },
};

export const readingOf = (spec: RankSpec): Reading => (stanceReadsRank(spec.stance) ? "rank" : "sex");

/** The slots every line of a Rank Road is filled with. */
export function slotsOf(spec: RankSpec, focus: string): Record<string, string> {
  return { place: spec.place, kname: spec.kname, keeper: spec.keeper, relic: spec.relic, focus, ...PRONOUN[stanceGender(spec.stance)] };
}

/**
 * Turns a road’s hand-written parts into the spec a Fortune Road builder takes. The first scene of every approach is the keeper’s own opening. The
 * sixteen that follow are a beat of the rung and a beat of the keeper’s reading of it, in turn, and the hidden room is the rung’s secret told through the keeper.
 */
export function synthesize(spec: RankSpec): RoadSpec3 {
  const reading = readingOf(spec);
  const beat = (a: number, s: number): string => {
    const slots = slotsOf(spec, spec.focus[a]);
    if (s === 0) return fill(spec.openers[a], slots);
    const i = a * 4 + (s - 1);
    const rung = fill(RUNG_BEATS[spec.rung][i], slots);
    const stance = fill(STANCE_BEATS[reading][i], slots);
    return i % 2 === 0 ? `${rung} ${stance}` : `${stance} ${rung}`;
  };
  const row = (a: number): [string, string, string, string, string] => [beat(a, 0), beat(a, 1), beat(a, 2), beat(a, 3), beat(a, 4)];
  const deepSlots = slotsOf(spec, spec.focus[2]);
  // The way down comes before what is found at the bottom, so the first two scenes lead with the rung’s stair and room and the last with the keeper’s word.
  const deep = [0, 1, 2].map((n) => {
    const rung = fill(RUNG_DEEP[spec.rung][n], deepSlots);
    const stance = fill(STANCE_DEEP[reading][n], deepSlots);
    return n < 2 ? `${rung} ${stance}` : `${stance} ${rung}`;
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

const heroIs = (g: Gender): Condition => ({ kind: "hero", field: "gender", is: [g] });

/** The insight a hero needs to argue a rung against a room: eight, and two more for every realm the road asks. */
export const argueInsight = (realm: number) => 8 + 2 * realm;

/** The way each gender’s pick is toned. A pick’s tone says what it is, and the Elder answers by tone as she is asked. */
export const WAY_TONE: Record<Gender, Record<RankWay, ChoiceTone>> = {
  woman: { yield: "quiet", claim: "force", veil: "deceit", lift: "mercy" },
  man: { yield: "quiet", claim: "force", veil: "deceit", lift: "truth" },
  unspoken: { yield: "quiet", claim: "inquiry", veil: "deceit", lift: "mercy" },
};

interface PickDef {
  tone: ChoiceTone;
  requires?: Condition[];
  hint?: string;
  /** The realm the pick asks of whoever tries it: a hero below it pays in cultivation, qi and the Elder’s respect, and one two realms above it gains mastery. */
  needsRealm?: number;
  effects: Effect[];
}

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });
const dao = (amount: number): Effect => ({ kind: "addDao", amount });

/**
 * What each pick behind the door asks and gives. A rung is not the same price for everyone who meets it: to claim it a hero must hold it (the realm of the
 * road), and then a woman argues it with Insight, a man pays for the quiet he breaks in qi, and someone who gives no answer pays in qi for being read by
 * the rung alone. To lift another a hero spends their rung, so one below the road pays strain for it and one well above it gains mastery. A keeper who reads
 * rank first is pleased to be claimed to, and one who reads sex first is made anxious by it.
 */
export function pickDef(g: Gender, way: RankWay, R: number, reading: Reading): PickDef {
  const tone = WAY_TONE[g][way];
  const bonus: Effect[] = way === "claim" && reading === "rank" ? [stat("karma", 1)] : way === "lift" && reading === "sex" ? [dao(1)] : [];
  switch (`${g}:${way}`) {
    case "woman:yield":
      return { tone, effects: [stat("qi", 3), cult(3 + 2 * R)] };
    case "woman:claim":
      return {
        tone,
        requires: [{ kind: "realm", min: R }, { kind: "stat", stat: "insight", min: argueInsight(R) }],
        hint: `A rung named against a room is argued, not announced. You need the realm of the road and Insight ${argueInsight(R)}.`,
        needsRealm: R,
        effects: [stat("karma", -1), cult(5 + 3 * R), dao(3), ...bonus],
      };
    case "woman:veil":
      return { tone, effects: [stat("karma", -2), stat("insight", 1), cult(2 + R)] };
    case "woman:lift":
      return { tone, needsRealm: R, effects: [stat("karma", 2), stat("insight", 1), cult(2 + R), ...bonus] };
    case "man:yield":
      return { tone, effects: [stat("qi", 2), cult(3 + 2 * R)] };
    case "man:claim":
      return {
        tone,
        requires: [{ kind: "realm", min: R }, { kind: "stat", stat: "qi", min: 10 }],
        hint: "A man who sets his rung against a room pays for the quiet he breaks, and the quiet is paid in qi. You need the realm of the road and 10.",
        needsRealm: R,
        effects: [stat("qi", -6), stat("insight", 1), cult(5 + 3 * R), dao(2), ...bonus],
      };
    case "man:veil":
      return { tone, effects: [stat("karma", -2), cult(2 + R)] };
    case "man:lift":
      return {
        tone,
        requires: [{ kind: "stat", stat: "karma", min: -5 }],
        hint: "A man’s rung lends its weight to another only if his own name is clean. Your karma must be −5 or better.",
        needsRealm: R,
        effects: [stat("karma", 1), stat("insight", 1), cult(3 + 2 * R), ...bonus],
      };
    case "unspoken:yield":
      return { tone, effects: [stat("qi", 2), stat("insight", 1), cult(2 + R)] };
    case "unspoken:claim":
      return {
        tone,
        requires: [{ kind: "realm", min: R }, { kind: "stat", stat: "qi", min: 8 }],
        hint: "Being read by the rung alone, with the other question left standing, is paid for in qi. You need the realm of the road and 8.",
        needsRealm: R,
        effects: [stat("qi", -4), stat("insight", 1), cult(5 + 2 * R), ...bonus],
      };
    case "unspoken:veil":
      return { tone, effects: [stat("karma", -2), stat("insight", 2), cult(2 + R)] };
    default:
      return { tone, needsRealm: R, effects: [stat("karma", 2), stat("qi", 1), cult(2 + R), ...bonus] };
  }
}

const isHumbled = (c: Condition) => c.kind === "flag" && c.flag.endsWith("_humbled");

/** The keeper’s reading of what a hero has done on earlier roads, once the pattern is clear. One group, the strongest first. */
function wordGroup(reading: Reading, slots: Record<string, string>): Extra[] {
  const order: [WordState, RankWay][] = [["lifted", "lift"], ["claimed", "claim"], ["veiled", "veil"], ["yielded", "yield"]];
  return order.map(([state, way]) => ({
    when: [{ kind: "count" as const, prefix: rankPickPrefix(way), min: 2 }],
    paragraphs: [fill(WORD[reading][state], slots)],
    group: "rword",
  }));
}

/** One extra for every band a hero can be in at a road, and every gender, in one group. */
function byBand(R: number, text: (band: RankBand) => string, group: string): Extra[] {
  return bandsAt(R).map((band) => ({ when: [bandCondition(band, R)], paragraphs: [text(band)], group }));
}

/**
 * Builds the scenes of one Rank Road: the 25 of a Fortune Road, with the rung and the keeper’s reading in every beat, and a door of rank in the middle of
 * every approach. The door opens one of three scenes, to a woman, a man or someone who gives no answer, and a hero sees one scene behind a door and never
 * the other two. How the keeper meets them there depends on where their realm stands against the road’s. Behind it, four picks: yield to the place the rung
 * gives, claim the rung held, veil it, or lift another with it. Each pick has its own price by gender and by realm, and the Elder answers each at once.
 */
export function buildRoad10(spec: RankSpec, ctx: RoadContext10): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const reading = readingOf(spec);
  const own = (suffix: string) => `${id}_${suffix}`;
  const scenes = buildRoad3(synthesize(spec), ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Rank Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    if (index < 0) throw new Error(`Rank Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));
  const seed = ctx.index;
  const slots = (a: number) => slotsOf(spec, spec.focus[a]);
  const done = rankDoneFlag(ctx.wayside - RANK_WAYSIDE_BASE, id);
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

  // What the keeper makes of the hero's rung and gender: a glance on the entry, a greeting by rung at the start of an approach, what the rung does to their
  // gender and what it costs them, what it makes of their realm, a goodbye.
  const byGender = (text: (g: Gender) => string, group: string): Extra[] => GENDER_KINDS.map((g) => ({ when: [heroIs(g)], paragraphs: [text(g)], group }));
  add(
    "entry",
    bandsAt(R).flatMap((band) =>
      GENDER_KINDS.map((g) => ({ when: [bandCondition(band, R), heroIs(g)], paragraphs: [fill(GLANCE[reading][band][g], slots(0))], group: "rglance" })),
    ),
  );
  for (let a = 0; a < 4; a++) {
    add(`a${a}s0`, byBand(R, (band) => fill(pick(GREET[reading][band], seed + a), slots(a)), "rgreet"));
    add(`a${a}s1`, byGender((g) => fill(NOTE[spec.rung][g], slots(a)), "rnote"));
    add(`a${a}s2`, byGender((g) => fill(COST[spec.rung][g], slots(a)), "rcost"));
    add(`a${a}s3`, byBand(R, (band) => fill(BAND_LINE[spec.rung][band], slots(a)), "rband"));
    // The keeper’s last word is about what the hero did behind the door, if they went through it, and the goodbye of the road otherwise.
    add(`a${a}s4`, [
      ...RANK_WAYS.map((way) => ({ when: [{ kind: "flag" as const, flag: pickFlag(way, id) }], paragraphs: [fill(RETURN_WORD[reading][way], slots(a))], group: "rbye" })),
      ...byGender((g) => fill(pick(SENDOFF[reading][g], seed + a), slots(a)), "rbye"),
    ]);
  }
  add("a1s4", wordGroup(reading, slots(1)));
  add("a3s4", wordGroup(reading, slots(3)));

  // The door of rank, in the middle of every approach. It is hidden from every hero but the one it opens to.
  for (let a = 0; a < 4; a++) {
    put(`a${a}s2`, (s) => ({
      ...s,
      choices: [
        ...s.choices,
        ...GENDER_KINDS.map((g): Choice => ({
          id: `door_${SUFFIX[g]}`,
          label: fill(DOOR_LABEL[g][a], slots(a)),
          tone: g === "woman" ? "mercy" : g === "man" ? "truth" : "inquiry",
          next: doorSceneId(id, a, g),
          requires: [heroIs(g), { kind: "flag", flag: doorFlag(id), is: false }],
          hideLocked: true,
        })),
      ],
    }));
  }

  for (let a = 0; a < 4; a++) {
    for (const g of GENDER_KINDS) {
      const s = slots(a);
      const picks = RANK_WAYS.map((way, n) => ({ way, label: pick(PICK_LABEL[g][way], seed + a + n), def: pickDef(g, way, R, reading) }));
      scenes.push({
        id: doorSceneId(id, a, g),
        title: `${spec.title}: ${pick(DOOR_TITLE[g], seed + a)}`,
        paragraphs: [fill(DOOR_SCENE[spec.rung][g][a % 2], s)],
        extras: byBand(R, (band) => fill(STANCE_DOOR[reading][band][g][a % 2], s), "rdoor"),
        interjections: bandsAt(R).map((band) => ({ when: [bandCondition(band, R)], line: pick(INTERJECT[band][g], seed + a) })),
        choices: picks.map(({ way, label, def }): Choice => ({
          id: way,
          label: fill(label, s),
          tone: def.tone,
          next: own(`a${a}s3`),
          ...(def.requires ? { requires: def.requires, lockedHint: def.hint } : {}),
          ...(def.needsRealm !== undefined ? { needsRealm: def.needsRealm } : {}),
          effects: [
            { kind: "setFlag", flag: doorFlag(id) },
            { kind: "setFlag", flag: pickFlag(way, id) },
            ...(reading === "sex" && (way === "claim" || way === "lift") ? [{ kind: "setFlag" as const, flag: clashFlag(id) }] : []),
            ...(reading === "rank" && way === "yield" ? [{ kind: "setFlag" as const, flag: easeFlag(id) }] : []),
            ...def.effects,
          ],
          npcScenario: doorScenarioId(id, g, way),
        })),
      });
    }
  }
  return scenes;
}

// ───────────── the Elder

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

/** The Elder’s answers to the door of rank on one road: five lines by her trust for each of the twelve things a hero can do behind it. */
export function buildDoorScenarios(spec: RankSpec): NpcScenario[] {
  const s = slotsOf(spec, spec.focus[0]);
  return GENDER_KINDS.flatMap((g) =>
    RANK_WAYS.map((way): NpcScenario => ({
      id: doorScenarioId(spec.id, g, way),
      summary: `The player, ${g === "unspoken" ? "who gives no answer" : `a ${g}`}, ${WAY_SUMMARY[way]} at the door of rank at ${spec.place}.`,
      delta: { respect: 1, trust: 1 },
      lines: Object.fromEntries(TIERS.map((t) => [t, fill(DOOR_REPLY[g][way][t], s)])) as Record<Tier, string>,
    })),
  );
}

const WAY_SUMMARY: Record<RankWay, string> = {
  yield: "takes the place the rung gives them",
  claim: "claims the rung they hold against the room",
  veil: "wears the face the rung expects and keeps their rung back",
  lift: "spends their rung to bring in someone the place passes over",
};

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for a rung pressed before a keeper who reads sex first, a place kept before a keeper who reads rank first, and the door itself. */
export function buildReport10(spec: RankSpec, ctx: RoadContext10): NpcScenario {
  const report = buildReport3(synthesize(spec), ctx);
  const s = slotsOf(spec, spec.focus[0]);
  const kept = (report.memory ?? []).filter((m) => ctx.realm > 0 || !m.when.some(isHumbled));
  const flag = (f: string): Condition[] => [{ kind: "flag", flag: f }];
  return {
    ...report,
    memory: [
      readingOf(spec) === "sex"
        ? { when: flag(clashFlag(spec.id)), line: fill(pick(CLASH_MEMORY, ctx.index), s) }
        : { when: flag(easeFlag(spec.id)), line: fill(pick(EASE_MEMORY, ctx.index), s) },
      { when: flag(doorFlag(spec.id)), line: fill(pick(REPORT_RANK, ctx.index), s) },
      ...kept,
    ],
  };
}

export { WORD_OF };
