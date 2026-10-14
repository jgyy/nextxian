import { GENDERS, type Gender } from "@/engine/hero";
import { CUSTOM_WAYS, customPickPrefix, type CustomWay } from "@/engine/custom";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { CUSTOM_BEATS, CUSTOM_DEEP, stanceGender, stanceHolds } from "./lexicon-custom";
import { STANCE_BEATS, STANCE_DEEP } from "./lexicon-stance";
import { DOOR_LABEL, DOOR_SCENE, DOOR_TITLE, PICK_LABEL, STANCE_DOOR } from "./lexicon-door";
import { CLASH_MEMORY, EASE_MEMORY, GLANCE, GREET, LINE_A, LINE_B, NOTE, REPORT_CUSTOM, RETURN_WORD, SENDOFF, WORD, type WordState } from "./lexicon-read";
import { DOOR_REPLY } from "./lexicon-reply";
import type { CustomSpec } from "./spec";

export type RoadContext9 = RoadContext3;

/** The Custom Roads count their finished roads by wayside number, six hundred above the Fortune Roads’. */
export const CUSTOM_WAYSIDE_BASE = 600;
export const customDoneFlag = (wayside: number, id: string) => `cs_done_w${wayside}_${id}`;
export const customDonePrefix = (wayside: number) => `cs_done_w${wayside}_`;

/** The flag that says a hero went through a road’s door of custom, and the one that says what they did behind it. */
export const doorFlag = (id: string) => `cs_door_${id}`;
export const pickFlag = (way: CustomWay, id: string) => `${customPickPrefix(way)}${id}`;
/** The flag that says a hero pressed the custom in front of a keeper who holds it, and the one that says they kept it before a keeper who bends it. */
export const clashFlag = (id: string) => `cs_clash_${id}`;
export const easeFlag = (id: string) => `cs_ease_${id}`;
/** The Elder’s answer to one thing a hero of one gender did behind the door of one road. */
export const doorScenarioId = (id: string, gender: Gender, way: CustomWay) => `CUSTOM_DOOR_${SUFFIX[gender].toUpperCase()}_${way.toUpperCase()}_${id.toUpperCase()}`;

const SUFFIX: Record<Gender, string> = { woman: "w", man: "m", unspoken: "u" };
/** The scene behind the door at one approach of one road, for one gender. */
export const doorSceneId = (id: string, approach: number, gender: Gender) => `${id}_d${approach}${SUFFIX[gender]}`;
export const GENDER_KINDS: Gender[] = GENDERS.map((g) => g.value);

const PRONOUN: Record<"woman" | "man", { kthey: string; kthem: string; ktheir: string }> = {
  woman: { kthey: "she", kthem: "her", ktheir: "her" },
  man: { kthey: "he", kthem: "him", ktheir: "his" },
};

/** The slots every line of a Custom Road is filled with. */
export function slotsOf(spec: CustomSpec, focus: string): Record<string, string> {
  return { place: spec.place, kname: spec.kname, keeper: spec.keeper, relic: spec.relic, focus, ...PRONOUN[stanceGender(spec.stance)] };
}

/**
 * Turns a road’s hand-written parts into the spec a Fortune Road builder takes. The first scene of every approach is the keeper’s own opening. The
 * sixteen that follow are a beat of the custom and a beat of the keeper’s stance to it, in turn, and the hidden room is the custom’s secret told
 * through the keeper.
 */
export function synthesize(spec: CustomSpec): RoadSpec3 {
  const beat = (a: number, s: number): string => {
    const slots = slotsOf(spec, spec.focus[a]);
    if (s === 0) return fill(spec.openers[a], slots);
    const i = a * 4 + (s - 1);
    const custom = fill(CUSTOM_BEATS[spec.custom][i], slots);
    const stance = fill(STANCE_BEATS[spec.stance][i], slots);
    return i % 2 === 0 ? `${custom} ${stance}` : `${stance} ${custom}`;
  };
  const row = (a: number): [string, string, string, string, string] => [beat(a, 0), beat(a, 1), beat(a, 2), beat(a, 3), beat(a, 4)];
  const deepSlots = slotsOf(spec, spec.focus[2]);
  // The way down comes before what is found at the bottom, so the first two scenes lead with the custom’s stair and room and the last with the keeper’s word.
  const deep = [0, 1, 2].map((n) => {
    const custom = fill(CUSTOM_DEEP[spec.custom][n], deepSlots);
    const stance = fill(STANCE_DEEP[spec.stance][n], deepSlots);
    return n < 2 ? `${custom} ${stance}` : `${stance} ${custom}`;
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

/** The insight a hero needs to argue a door open: six, and two more for every realm the road asks. */
export const argueInsight = (realm: number, base: number) => base + 2 * realm;

/** The way each gender’s pick is toned. A pick’s tone says what it is, and the Elder answers by tone as she is asked. */
export const WAY_TONE: Record<Gender, Record<CustomWay, ChoiceTone>> = {
  woman: { keep: "quiet", bend: "inquiry", break: "force", stand: "mercy" },
  man: { keep: "quiet", bend: "mercy", break: "force", stand: "truth" },
  unspoken: { keep: "quiet", bend: "inquiry", break: "force", stand: "mercy" },
};

interface PickDef {
  tone: ChoiceTone;
  requires?: Condition[];
  hint?: string;
  effects: Effect[];
}

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });
const dao = (amount: number): Effect => ({ kind: "addDao", amount });

/**
 * What each pick behind the door asks and gives. The custom is not the same price for everyone who meets it: a woman argues a barred door open with
 * Insight, a man pays for turning down his place in qi and needs a clean name for his word to stand for anyone, and someone who gives no answer pays
 * in qi for staying in the middle of the room. A keeper who holds the custom is pleased to be kept, and a keeper who bends it teaches whoever breaks it.
 */
export function pickDef(g: Gender, way: CustomWay, R: number, holds: boolean): PickDef {
  const tone = WAY_TONE[g][way];
  const bonus: Effect[] = way === "keep" && holds ? [stat("karma", 1)] : (way === "break" || way === "bend") && !holds ? [way === "break" ? dao(1) : stat("insight", 1)] : [];
  switch (`${g}:${way}`) {
    case "woman:keep":
      return { tone, effects: [stat("qi", 3), cult(3 + 2 * R), ...bonus] };
    case "woman:bend":
      return { tone, effects: [stat("insight", 2), dao(1), cult(2 + R), ...bonus] };
    case "woman:break":
      return {
        tone,
        requires: [{ kind: "stat", stat: "insight", min: argueInsight(R, 8) }],
        hint: `A door the custom bars is argued open, not pushed. You need Insight ${argueInsight(R, 8)}.`,
        effects: [stat("karma", -1), cult(5 + 3 * R), dao(3), ...bonus],
      };
    case "woman:stand":
      return { tone, effects: [stat("karma", 2), stat("insight", 1), cult(2 + R)] };
    case "man:keep":
      return { tone, effects: [stat("qi", 2), cult(3 + 2 * R), ...bonus] };
    case "man:bend":
      return { tone, effects: [stat("karma", 2), cult(2 + R), ...bonus] };
    case "man:break":
      return {
        tone,
        requires: [{ kind: "stat", stat: "qi", min: 10 }],
        hint: "Turning down a man’s place is paid for in the brothers’ scorn, and the scorn is paid in qi. You need 10.",
        effects: [stat("qi", -6), stat("insight", 1), cult(5 + 3 * R), dao(2), ...bonus],
      };
    case "man:stand":
      return {
        tone,
        requires: [{ kind: "stat", stat: "karma", min: -5 }],
        hint: "A man’s word stands for another only if his own name is clean. Your karma must be −5 or better.",
        effects: [stat("karma", 1), stat("insight", 1), cult(3 + 2 * R)],
      };
    case "unspoken:keep":
      return { tone, effects: [stat("qi", 2), stat("insight", 1), cult(2 + R), ...bonus] };
    case "unspoken:bend":
      return { tone, effects: [stat("insight", 3), cult(2 + R), ...bonus] };
    case "unspoken:break":
      return {
        tone,
        requires: [{ kind: "stat", stat: "qi", min: 8 }],
        hint: "Staying in the middle of a room that has no place for you is paid for in qi. You need 8.",
        effects: [stat("qi", -4), stat("insight", 1), cult(5 + 2 * R), ...bonus],
      };
    default:
      return { tone, effects: [stat("karma", 2), stat("qi", 1), cult(2 + R)] };
  }
}

const isHumbled = (c: Condition) => c.kind === "flag" && c.flag.endsWith("_humbled");

/** The keeper’s reading of what a hero has done on earlier roads, once the pattern is clear. One group, the strongest first. */
function wordGroup(holds: boolean, slots: Record<string, string>): Extra[] {
  const order: [WordState, CustomWay][] = [["broke", "break"], ["stood", "stand"], ["bent", "bend"], ["kept", "keep"]];
  return order.map(([state, way]) => ({
    when: [{ kind: "count" as const, prefix: customPickPrefix(way), min: 2 }],
    paragraphs: [fill(WORD[holds ? "holds" : "bends"][state], slots)],
    group: "cword",
  }));
}

/**
 * Builds the scenes of one Custom Road: the 25 of a Fortune Road, with the custom and the keeper’s stance in every beat, and a door of custom in the
 * middle of every approach. The door opens one of three scenes, to a woman, a man or someone who gives no answer, and a hero sees one scene behind a
 * door and never the other two. Behind it, four picks: keep the custom, bend it, break it in the open, or stand for someone it passes over. Each pick
 * has its own price by gender, and the Elder answers each at once. Along the way the keeper reads the hero’s gender at the door, in the greeting, in
 * the custom’s cost twice, and in the goodbye, and reads what the hero did on earlier roads.
 */
export function buildRoad9(spec: CustomSpec, ctx: RoadContext9): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const holds = stanceHolds(spec.stance);
  const own = (suffix: string) => `${id}_${suffix}`;
  const scenes = buildRoad3(synthesize(spec), ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Custom Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    if (index < 0) throw new Error(`Custom Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));
  const seed = ctx.index;
  const slots = (a: number) => slotsOf(spec, spec.focus[a]);
  const done = customDoneFlag(ctx.wayside - CUSTOM_WAYSIDE_BASE, id);
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

  // What the keeper makes of the hero's gender: a glance on the entry, a greeting at the start of an approach, what the custom costs them twice, a goodbye.
  const byGender = (text: (g: Gender) => string, group: string): Extra[] => GENDER_KINDS.map((g) => ({ when: [heroIs(g)], paragraphs: [text(g)], group }));
  add("entry", byGender((g) => fill(GLANCE[spec.stance][g], slots(0)), "cglance"));
  for (let a = 0; a < 4; a++) {
    add(`a${a}s0`, byGender((g) => fill(pick(GREET[spec.stance][g], seed + a), slots(a)), "cgreet"));
    add(`a${a}s1`, byGender((g) => fill(NOTE[spec.custom][g], slots(a)), "cnote"));
    add(`a${a}s2`, byGender((g) => fill(LINE_A[spec.custom][g], slots(a)), "ccost"));
    add(`a${a}s3`, byGender((g) => fill(LINE_B[spec.custom][g], slots(a)), "ccost"));
    // The keeper’s last word is about what the hero did behind the door, if they went through it, and the goodbye of the road otherwise.
    add(`a${a}s4`, [
      ...CUSTOM_WAYS.map((way) => ({ when: [{ kind: "flag" as const, flag: pickFlag(way, id) }], paragraphs: [fill(RETURN_WORD[holds ? "holds" : "bends"][way], slots(a))], group: "cbye" })),
      ...byGender((g) => fill(pick(SENDOFF[spec.stance][g], seed + a), slots(a)), "cbye"),
    ]);
  }
  add("a1s4", wordGroup(holds, slots(1)));
  add("a3s4", wordGroup(holds, slots(3)));

  // The door of custom, in the middle of every approach. It is hidden from every hero but the one it opens to.
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
      const picks = CUSTOM_WAYS.map((way, n) => ({ way, label: pick(PICK_LABEL[g][way], seed + a + n), def: pickDef(g, way, R, holds) }));
      scenes.push({
        id: doorSceneId(id, a, g),
        title: `${spec.title}: ${pick(DOOR_TITLE[g], seed + a)}`,
        paragraphs: [fill(DOOR_SCENE[spec.custom][g][a % 2], s), fill(STANCE_DOOR[spec.stance][g][a], s)],
        choices: picks.map(({ way, label, def }): Choice => ({
          id: way,
          label: fill(label, s),
          tone: def.tone,
          next: own(`a${a}s3`),
          ...(def.requires ? { requires: def.requires, lockedHint: def.hint } : {}),
          effects: [
            { kind: "setFlag", flag: doorFlag(id) },
            { kind: "setFlag", flag: pickFlag(way, id) },
            ...(holds && (way === "bend" || way === "break") ? [{ kind: "setFlag" as const, flag: clashFlag(id) }] : []),
            ...(!holds && way === "keep" ? [{ kind: "setFlag" as const, flag: easeFlag(id) }] : []),
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

/** The Elder’s answers to the door of custom on one road: five lines by her trust for each of the twelve things a hero can do behind it. */
export function buildDoorScenarios(spec: CustomSpec): NpcScenario[] {
  const s = slotsOf(spec, spec.focus[0]);
  return GENDER_KINDS.flatMap((g) =>
    CUSTOM_WAYS.map((way): NpcScenario => ({
      id: doorScenarioId(spec.id, g, way),
      summary: `The player, ${g === "unspoken" ? "who gives no answer" : `a ${g}`}, ${WAY_SUMMARY[way]} at the door of custom at ${spec.place}.`,
      delta: { respect: 1, trust: 1 },
      lines: Object.fromEntries(TIERS.map((t) => [t, fill(DOOR_REPLY[g][way][t], s)])) as Record<Tier, string>,
    })),
  );
}

const WAY_SUMMARY: Record<CustomWay, string> = { keep: "keeps the custom", bend: "bends the custom", break: "breaks the custom in the open", stand: "stands for someone the custom passes over" };

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for a custom pressed before a keeper who holds it, one kept before a keeper who bends it, and the door itself. */
export function buildReport9(spec: CustomSpec, ctx: RoadContext9): NpcScenario {
  const report = buildReport3(synthesize(spec), ctx);
  const s = slotsOf(spec, spec.focus[0]);
  const kept = (report.memory ?? []).filter((m) => ctx.realm > 0 || !m.when.some(isHumbled));
  const flag = (f: string): Condition[] => [{ kind: "flag", flag: f }];
  return {
    ...report,
    memory: [
      stanceHolds(spec.stance)
        ? { when: flag(clashFlag(spec.id)), line: fill(pick(CLASH_MEMORY, ctx.index), s) }
        : { when: flag(easeFlag(spec.id)), line: fill(pick(EASE_MEMORY, ctx.index), s) },
      { when: flag(doorFlag(spec.id)), line: fill(pick(REPORT_CUSTOM, ctx.index), s) },
      ...kept,
    ],
  };
}
