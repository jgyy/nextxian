import { ROAD_TOP } from "@/engine/realms";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene } from "@/engine/types";
import { REALMS, REACHED_PREFIX, reachedFlag } from "@/engine/cultivation";
import { CULTIVATION_DONE_ANY, CUSP, EARLY, PRACTICES, practicePrefix, type Practice, type Stretch } from "@/engine/practice";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, doneFlag3, pricesFor, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { FRESH_READ, METHOD_READ, PRACTICE_HINT, PRACTICE_LABEL, PROGRESS_READ, RETURN_PRACTICE, SPEED_READ } from "./lexicon";
import { PRACTICE_LINES, PRACTICE_MEMORY, PRACTICE_TAIL, REPORT_PRACTICE } from "./lexicon-elder";

/**
 * What one Cultivation Road needs from its author: everything a Fortune Road needs, plus the ground where the work of the road is
 * done. The keeper there is a teacher. They read how far through its realm the hero has come, how fast the hero cultivates, whether
 * they broke through only lately, and what their beginning taught them; and the hero can practise in four ways, each of which makes
 * the Elder answer at once.
 */
export interface RoadSpec6 extends RoadSpec3 {
  /** Where the work of the road is done, with its article: “the sitting mat”. */
  ground: string;
}

export type RoadContext6 = RoadContext3;

/** The Cultivation Roads count their finished roads by wayside number, three hundred above the Fortune Roads’. */
export const CULTIVATION_WAYSIDE_BASE = 300;
export { CULTIVATION_DONE_ANY };
export const cultivationDoneFlag = (wayside: number, id: string) => `cr_done_w${wayside}_${id}`;
export const cultivationDonePrefix = (wayside: number) => `cr_done_w${wayside}_`;
/** The flag a practice sets for the whole story, so the Elder and the keepers can count how often the hero did it. */
export const practiceFlag = (practice: Practice, id: string) => `cr_${practice}_${id}`;
export const practiceScenarioId = (practice: Practice, id: string) => `CULTIVATION_${practice.toUpperCase()}_${id.toUpperCase()}`;
/** The flag that says a hero sat the night at a wayside’s retreat. */
export const retreatFlag = (wayside: number) => `cr_retreat_w${wayside}`;
const local = (id: string, name: string) => `${id}_${name}`;
/** The local flag each practice sets on its own road. */
const LOCAL_FLAG: Record<Practice, string> = { circulate: "circulated", temper: "tempered", comprehend: "comprehended", push: "pushed" };

/** How far each practice moves the Elder. */
export const PRACTICE_DELTA: Record<Practice, NpcScenario["delta"]> = {
  circulate: { respect: 1 },
  temper: { respect: 1, fear: 1 },
  comprehend: { trust: 1, suspicion: -1 },
  push: { respect: 2, fear: 1 },
};

const slotsOf = (spec: RoadSpec6, focus: string): Record<string, string> => ({
  place: spec.place,
  kname: spec.kname,
  keeper: spec.keeper,
  ground: spec.ground,
  focus,
});

/** Which stretch of its realm the hero is in: three bands of progress, in one group. */
function stretchGroup(seed: number, slots: Record<string, string>): Extra[] {
  const bands: [Stretch, { min?: number; max?: number }][] = [
    ["early", { max: EARLY - 1 }],
    ["middle", { min: EARLY, max: CUSP - 1 }],
    ["cusp", { min: CUSP }],
  ];
  return bands.map(([band, bounds]) => ({
    when: [{ kind: "progress" as const, ...bounds }],
    paragraphs: [fill(pick(PROGRESS_READ[band], seed), slots)],
    group: "stretch",
  }));
}

/** How fast the hero cultivates, against the plain rate: quick at 130 and above, slow at 85 and below. */
function speedGroup(seed: number, slots: Record<string, string>): Extra[] {
  return [
    { when: [{ kind: "speed", min: 130 }], paragraphs: [fill(pick(SPEED_READ.quick, seed), slots)], group: "speed" },
    { when: [{ kind: "speed", max: 85 }], paragraphs: [fill(pick(SPEED_READ.slow, seed), slots)], group: "speed" },
  ];
}

/** A hero who broke into the road’s own realm only a few decisions ago. */
function freshGroup(realm: number, seed: number, slots: Record<string, string>): Extra[] {
  return [
    {
      when: [{ kind: "since", flag: reachedFlag(realm), max: 10 }, { kind: "realm", min: realm, max: realm }],
      paragraphs: [fill(pick(FRESH_READ, seed), slots)],
      group: "fresh",
    },
  ];
}

/** What the six newer beginnings taught the hero’s method. One extra per method flag, in one group, so a hero who made a choice in their prologue meets it again here. */
function methodGroup(seed: number, slots: Record<string, string>): Extra[] {
  return Object.entries(METHOD_READ).map(([flag, variants]) => ({
    when: [{ kind: "flag" as const, flag }],
    paragraphs: [fill(pick(variants, seed), slots)],
    group: "method",
  }));
}

/** The four practices, each tied to the approach of the same number. */
const PRACTICE_OF: Practice[] = ["circulate", "temper", "comprehend", "push"];
const PRACTICE_TONE: Record<Practice, ChoiceTone> = { circulate: "quiet", temper: "force", comprehend: "inquiry", push: "truth" };

/** The qi a hero must have to throw at a gate, and the qi the push takes. */
export const PUSH_QI = 12;

/** The insight a hero needs to comprehend a ground: eight, and two more for every realm the road asks. */
export const insightFor = (realm: number) => 8 + 2 * realm;

/**
 * Builds the 25 scenes of one Cultivation Road. The road is a Fortune Road underneath: the same twenty situations, the same prices and
 * the same reactions to the purse and the realm. On top of that the keeper reads how far through its realm the hero has come and how
 * fast they cultivate, remembers a hero who broke through only lately and a hero who made a method in their beginning, and the hero can
 * circulate, temper, comprehend or push at the gate. The ground gives what the road’s realm sets, and only to a hero who is fit for
 * it; a push asks that the hero be near the threshold. Each makes the Elder answer at once.
 */
export function buildRoad6(spec: RoadSpec6, ctx: RoadContext6): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const need = REALMS[Math.max(0, R - 1)].name;
  const scenes = buildRoad3(spec, ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Cultivation Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === `${id}_${suffix}`);
    if (index < 0) throw new Error(`Cultivation Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const seed = ctx.index;
  const fortuneDone = doneFlag3(ctx.wayside, id);
  const done = cultivationDoneFlag(ctx.wayside - CULTIVATION_WAYSIDE_BASE, id);
  put("return", (s) => ({
    ...s,
    choices: s.choices.map((c) => ({ ...c, effects: (c.effects ?? []).map((e): Effect => (e.kind === "setFlag" && e.flag === fortuneDone ? { ...e, flag: done } : e)) })),
  }));
  const slots = (n: number) => slotsOf(spec, spec.focus[n % 4]);
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));

  // The keeper’s reading of the hero’s cultivation: the stretch of the realm, the pace, a recent breakthrough, a beginning’s method.
  add("entry", stretchGroup(seed, slots(0)));
  add("a0s1", speedGroup(seed, slots(0)));
  add("a1s1", stretchGroup(seed + 1, slots(1)));
  add("a2s1", speedGroup(seed + 1, slots(2)));
  add("a3s1", methodGroup(seed + 3, slots(3)));
  add("a0s3", methodGroup(seed, slots(0)));
  add("a2s3", stretchGroup(seed + 2, slots(2)));
  add("a1s3", freshGroup(R, seed + 1, slots(1)));
  add("a3s3", speedGroup(seed + 2, slots(3)));

  // The four practices. Each is a choice at the start of one approach, so a hero who walks one approach meets one practice.
  const practiceChoice = (practice: Practice, a: number): Choice => {
    const s = slotsOf(spec, spec.focus[a]);
    const flags: Effect[] = [{ kind: "setFlag", flag: local(id, LOCAL_FLAG[practice]) }, { kind: "setFlag", flag: practiceFlag(practice, id) }];
    const base = { id: practice, label: fill(pick(PRACTICE_LABEL[practice], seed + a), s), tone: PRACTICE_TONE[practice], next: `${id}_a${a}s1`, npcScenario: practiceScenarioId(practice, id) };
    const onceOnly: Condition = { kind: "flag", flag: local(id, LOCAL_FLAG[practice]), is: false };
    const hint = (text: string) => fill(text.replace("{need}", need).replace("{insight}", String(insightFor(R))), s);
    switch (practice) {
      case "circulate":
        return {
          ...base,
          requires: [{ kind: "realm", min: Math.max(0, R - 1), max: R + 2 }, onceOnly],
          lockedHint: hint(PRACTICE_HINT.circulate),
          effects: [...flags, { kind: "addCultivation", amount: 3 + 2 * R }, { kind: "addStat", stat: "qi", amount: 2 }],
        };
      case "temper":
        return {
          ...base,
          requires: [{ kind: "stat", stat: "qi", min: 10 }, { kind: "realm", max: R + 2 }, onceOnly],
          lockedHint: hint(PRACTICE_HINT.temper),
          effects: [...flags, { kind: "addCultivation", amount: 4 + 2 * R }, { kind: "addStat", stat: "qi", amount: -6 }],
        };
      case "comprehend":
        return {
          ...base,
          requires: [{ kind: "stat", stat: "insight", min: insightFor(R) }, onceOnly],
          lockedHint: hint(PRACTICE_HINT.comprehend),
          effects: [...flags, { kind: "addDao", amount: 3 }, { kind: "addStat", stat: "insight", amount: 1 }, { kind: "addCultivation", amount: 2 + R }],
        };
      case "push":
        return {
          ...base,
          requires: [{ kind: "progress", min: CUSP }, { kind: "stat", stat: "qi", min: PUSH_QI }, { kind: "realm", min: Math.max(0, R - 1) }, onceOnly],
          lockedHint: hint(PRACTICE_HINT.push),
          effects: [...flags, { kind: "addCultivation", amount: 6 + 3 * R }, { kind: "reachGate" }, { kind: "addStat", stat: "qi", amount: -PUSH_QI }],
        };
    }
  };
  PRACTICE_OF.forEach((practice, a) => put(`a${a}s0`, (s) => ({ ...s, choices: [...s.choices, practiceChoice(practice, a)] })));

  // The way back: the keeper says what they will remember of the work the hero did.
  const back = scenes.find((s) => s.id === `${id}_return`)!;
  const order: Practice[] = ["push", "comprehend", "temper", "circulate"];
  put("return", () => ({
    ...back,
    extras: [
      ...(back.extras ?? []),
      ...order.map((practice) => ({
        when: [{ kind: "flag" as const, flag: local(id, LOCAL_FLAG[practice]) }],
        paragraphs: [fill(pick(RETURN_PRACTICE[practice], seed), slotsOf(spec, spec.focus[3]))],
        group: "practice",
      })),
    ],
  }));
  return scenes;
}

/** The Elder’s answer to one practice on one road. Five lines by her trust, and a memory for each thing she may be remembering. */
export function buildPracticeScenario(practice: Practice, spec: RoadSpec6, ctx: RoadContext6): NpcScenario {
  const R = ctx.realm;
  const slots = slotsOf(spec, spec.focus[0]);
  const tail = (kind: keyof typeof PRACTICE_TAIL, n: number) => pick(PRACTICE_TAIL[kind], ctx.index + n);
  const line = (tier: keyof (typeof PRACTICE_LINES)["circulate"]) =>
    fill(`${pick(PRACTICE_LINES[practice][tier], ctx.index + tier.length)} ${tail(tier === "hostile" || tier === "wary" ? "cold" : "warm", tier.length)}`, slots);
  const table: Record<Practice, Condition[][]> = {
    circulate: [
      [{ kind: "progress", min: CUSP }],
      [{ kind: "speed", max: 85 }],
      [{ kind: "count", prefix: practicePrefix("circulate"), min: 3 }],
      [{ kind: "realm", min: R + 2 }],
    ],
    temper: [
      [{ kind: "stat", stat: "qi", min: 60 }],
      [{ kind: "tone", tone: "force", min: 3, within: 8 }],
      [{ kind: "count", prefix: practicePrefix("temper"), min: 3 }],
      [{ kind: "unfed" }],
    ],
    comprehend: [
      [{ kind: "hero", field: "dao", not: ["none"] }, { kind: "mastery", min: 2 }],
      [{ kind: "stat", stat: "insight", min: 40 }],
      [{ kind: "count", prefix: practicePrefix("comprehend"), min: 3 }],
      [{ kind: "hero", field: "dao", is: ["none"] }, { kind: "count", prefix: practicePrefix("comprehend"), min: 2 }],
    ],
    push: [
      [{ kind: "stat", stat: "karma", max: -20 }],
      [{ kind: "progress", min: 95 }],
      [{ kind: "count", prefix: practicePrefix("push"), min: 2 }],
      [{ kind: "realm", min: R + 1 }],
    ],
  };
  const summary: Record<Practice, string> = {
    circulate: "circulates qi",
    temper: "tempers the body",
    comprehend: "studies the working",
    push: "pushes at the gate of the next realm",
  };
  return {
    id: practiceScenarioId(practice, spec.id),
    summary: `The player ${summary[practice]} at ${spec.place}.`,
    delta: PRACTICE_DELTA[practice],
    lines: { hostile: line("hostile"), wary: line("wary"), neutral: line("neutral"), warm: line("warm"), devoted: line("devoted") },
    // A memory for a hero two realms above the last realm is no one's, so a road at the top asks nothing of it.
    memory: PRACTICE_MEMORY[practice]
      .map((variants, n) => ({ when: table[practice][n], line: fill(`${pick(variants, ctx.index + n)} ${tail("memory", n)}`, slots) }))
      .filter((m) => !m.when.some((c) => c.kind === "realm" && (c.min ?? 0) > ROAD_TOP)),
  };
}

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for each practice the hero did here. */
export function buildReport6(spec: RoadSpec6, ctx: RoadContext6): NpcScenario {
  const report = buildReport3(spec, ctx);
  const slots = slotsOf(spec, spec.focus[0]);
  const order: Practice[] = ["push", "comprehend", "temper", "circulate"];
  return {
    ...report,
    memory: [
      ...order.map((practice) => ({ when: [{ kind: "flag" as const, flag: local(spec.id, LOCAL_FLAG[practice]) }], line: fill(pick(REPORT_PRACTICE[practice], ctx.index), slots) })),
      ...(report.memory ?? []),
    ],
  };
}

export { PRACTICES, REACHED_PREFIX, pricesFor };
