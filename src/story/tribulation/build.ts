import { bandCondition, bandsAt, type RankBand } from "@/engine/rank";
import { tribDoneFlag, tribFledFlag, tribLostFlag, tribScarPrefix, tribWonFlag, trialCost, trialInsight, trialKarma, trialQi } from "@/engine/tribulation";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { BAND_LINE, FAREWELL, GLANCE, GREET } from "./lexicon-bow";
import { TRIAL_MEMORY, TRIAL_REPLY, type TrialResult } from "./lexicon-reply";
import { STANCE_BEATS, STANCE_DEEP } from "./lexicon-stance";
import { BLOW_LABEL, GATE, GATE_BAND, LOST_KEEPER, LOST_LABEL, LOST_SKY, PREP_LABEL, WAVES, WON_KEEPER, WON_LABEL, WON_SKY } from "./lexicon-trial";
import { TRIB_BEATS, TRIB_BLOW, TRIB_DEEP, TRIB_IDS, TRIB_NAME } from "./lexicon-trib";
import type { TribSpec } from "./spec";

export type RoadContext11 = RoadContext3;

/** The Tribulation Roads count their finished roads by wayside number, eight hundred above the Fortune Roads’. */
export const TRIB_WAYSIDE_BASE = 800;
export const tribulationDonePrefix = (wayside: number) => `tb_done_w${wayside}_`;

const PRONOUN: Record<"woman" | "man", { kthey: string; kthem: string; ktheir: string }> = {
  woman: { kthey: "she", kthem: "her", ktheir: "her" },
  man: { kthey: "he", kthem: "him", ktheir: "his" },
};

/** The slots every line of a Tribulation Road is filled with. */
export function slotsOf(spec: TribSpec, focus: string): Record<string, string> {
  return {
    place: spec.place,
    kname: spec.kname,
    keeper: spec.keeper,
    relic: spec.relic,
    focus,
    trib: TRIB_NAME[spec.trib],
    blow: TRIB_BLOW[spec.trib],
    ...PRONOUN[spec.gender],
  };
}

/** The tribulation’s own index, which is the realm of the wayside. */
export const realmOfTrib = (spec: TribSpec) => TRIB_IDS.indexOf(spec.trib);

/**
 * Turns a road’s hand-written parts into the spec a Fortune Road builder takes. The first scene of every approach is the keeper’s own opening. The
 * sixteen that follow are a beat of the tribulation and a beat of the keeper’s way with it, in turn, and the hidden room is the keeper’s own cellar.
 */
export function synthesize(spec: TribSpec): RoadSpec3 {
  const beat = (a: number, s: number): string => {
    const slots = slotsOf(spec, spec.focus[a]);
    if (s === 0) return fill(spec.openers[a], slots);
    const i = a * 4 + (s - 1);
    const trib = fill(TRIB_BEATS[spec.trib][i], slots);
    const stance = fill(STANCE_BEATS[spec.stance][i], slots);
    return i % 2 === 0 ? `${trib} ${stance}` : `${stance} ${trib}`;
  };
  const row = (a: number): [string, string, string, string, string] => [beat(a, 0), beat(a, 1), beat(a, 2), beat(a, 3), beat(a, 4)];
  const deepSlots = slotsOf(spec, spec.focus[2]);
  // The way down is the tribulation’s own room, then the keeper arriving to speak of it, then what the keeper keeps in the wall.
  const deep: [string, string, string] = [
    `${fill(TRIB_DEEP[spec.trib][0], deepSlots)} ${fill(TRIB_DEEP[spec.trib][1], deepSlots)}`,
    fill(TRIB_DEEP[spec.trib][2], deepSlots),
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

export const trialSceneId = (id: string, step: "t0" | "t1" | "t2" | "t3" | "tw" | "tl") => `${id}_${step}`;
export const trialScenarioId = (id: string, result: TrialResult) => `TRIAL_${result.toUpperCase()}_${id.toUpperCase()}`;

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });
const dao = (amount: number): Effect => ({ kind: "addDao", amount });
const isHumbled = (c: Condition) => c.kind === "flag" && c.flag.endsWith("_humbled");

/** One extra for every realm a hero can be, in one group: the keeper reads the realm exactly, and the bow rises with it. */
function byRealm(text: (realm: number) => string, group: string): Extra[] {
  return Array.from({ length: 8 }, (_, k) => ({ when: [{ kind: "realm" as const, min: k, max: k }], paragraphs: [text(k)], group }));
}

/** One extra for every band a hero can be in at a road. */
function byBand(R: number, text: (band: RankBand) => string, group: string): Extra[] {
  return bandsAt(R).map((band) => ({ when: [bandCondition(band, R)], paragraphs: [text(band)], group }));
}

/**
 * Builds the scenes of one Tribulation Road: the 25 of a Fortune Road, with the tribulation and the keeper’s way of bowing in every beat, and a rehearsal of
 * the trial itself, six scenes more. The keeper reads the hero’s realm exactly, at the entry, at the start of every approach and at its end, and the bow
 * rises with the realm. The rehearsal is a gate, three blows and a verdict. A hero meets each blow by standing in it, reading it or being sheltered by what
 * they have done, and a hero who gives way twice has nothing left to meet the last with.
 */
export function buildRoad11(spec: TribSpec, ctx: RoadContext11): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const own = (suffix: string) => `${id}_${suffix}`;
  const wayside = ctx.wayside - TRIB_WAYSIDE_BASE;
  const scenes = buildRoad3(synthesize(spec), ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Tribulation Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    if (index < 0) throw new Error(`Tribulation Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));
  const slots = (a: number) => slotsOf(spec, spec.focus[a]);
  const trialSlots = slotsOf(spec, spec.place);
  const done = tribDoneFlag(wayside, id);
  const won = tribWonFlag(wayside, id);
  const lost = tribLostFlag(wayside, id);
  const fled = tribFledFlag(wayside, id);
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

  // The keeper reads the hero’s realm exactly: a glance on the entry, a greeting at the start of each approach, what the trial is to a hero at their height, a goodbye.
  add("entry", byRealm((k) => fill(GLANCE[spec.stance][k], slots(0)), "tglance"));
  for (let a = 0; a < 4; a++) {
    add(`a${a}s0`, byRealm((k) => fill(GREET[spec.stance][k], slots(a)), "tgreet"));
    add(`a${a}s3`, byBand(R, (band) => fill(BAND_LINE[spec.trib][band], slots(a)), "tband"));
    add(`a${a}s4`, byRealm((k) => fill(FAREWELL[spec.stance][k], slots(a)), "tbye"));
  }
  // The way into the rehearsal: a choice at the entry, shut once the hero has sat it, or turned back from it.
  put("entry", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      {
        id: "trial",
        label: fill("Ask {kname} to let you sit {trib} here, in rehearsal, and see what it asks.", trialSlots),
        tone: "force",
        next: trialSceneId(id, "t0"),
        requires: [{ kind: "flag", flag: won, is: false }, { kind: "flag", flag: lost, is: false }, { kind: "flag", flag: fled, is: false }],
        lockedHint: "You have already come to the gate of this trial.",
      },
    ],
  }));

  const needQi = trialQi(R);
  const needInsight = trialInsight(R);
  const needKarma = trialKarma(R);
  const cost = trialCost(R);
  const prep: [keyof typeof PREP_LABEL, ChoiceTone, Effect[]][] = [
    ["fast", "quiet", [stat("qi", 4)]],
    ["study", "inquiry", [stat("insight", 1)]],
    ["accounts", "mercy", [stat("karma", 1)]],
    ["asis", "force", []],
  ];
  scenes.push({
    id: trialSceneId(id, "t0"),
    title: `${spec.title}: The Rehearsal`,
    paragraphs: [fill(GATE[spec.trib], trialSlots)],
    extras: byBand(R, (band) => fill(GATE_BAND[band], trialSlots), "tgate"),
    choices: [
      ...prep.map(([key, tone, effects]): Choice => ({ id: key, label: fill(PREP_LABEL[key], trialSlots), tone, next: trialSceneId(id, "t1"), effects })),
      {
        id: "turn",
        label: fill(PREP_LABEL.turn, trialSlots),
        tone: "truth",
        next: own("return"),
        effects: [{ kind: "setFlag", flag: fled }],
        npcScenario: trialScenarioId(id, "fled"),
      },
    ],
  });

  // Three blows. A hero below the realm of the trial pays strain for standing in them; two yields shut the last to everything but another yield.
  const steps = ["t1", "t2", "t3"] as const;
  steps.forEach((step, n) => {
    const last = n === 2;
    const waveText = WAVES[spec.trib][ctx.slot][n];
    const afterStand = last ? trialSceneId(id, "tw") : trialSceneId(id, steps[n + 1]);
    const label = (key: keyof typeof BLOW_LABEL) => fill(BLOW_LABEL[key][n], trialSlots);
    const footing: Condition[] = last ? [{ kind: "count", prefix: tribScarPrefix(id), max: 1 }] : [];
    const footingHint = last ? ` And you must not have given way twice already.` : "";
    const passed: Effect[] = last ? [{ kind: "setFlag", flag: won }] : [];
    scenes.push({
      id: trialSceneId(id, step),
      title: `${spec.title}: ${["The First Blow", "The Second Blow", "The Last Blow"][n]}`,
      paragraphs: [fill(waveText, trialSlots)],
      choices: [
        {
          id: "stand",
          label: label("stand"),
          tone: "force",
          next: afterStand,
          requires: [{ kind: "stat", stat: "qi", min: needQi }, ...footing],
          lockedHint: `Standing in a blow takes qi ${needQi}.${footingHint}`,
          needsRealm: R,
          effects: [stat("qi", -cost), cult(2 + R), ...(n === 0 ? [dao(1)] : []), ...passed],
        },
        {
          id: "read",
          label: label("read"),
          tone: "inquiry",
          next: afterStand,
          requires: [{ kind: "stat", stat: "insight", min: needInsight }, ...footing],
          lockedHint: `Reading a blow takes Insight ${needInsight}.${footingHint}`,
          effects: [stat("insight", 1), cult(1 + R), ...passed],
        },
        {
          id: "shelter",
          label: label("shelter"),
          tone: "mercy",
          next: afterStand,
          requires: [{ kind: "stat", stat: "karma", min: needKarma }, ...footing],
          lockedHint: `Being sheltered by what you have done takes karma ${needKarma}.${footingHint}`,
          effects: [stat("karma", 1), cult(1 + R), ...passed],
        },
        {
          id: "yield",
          label: label("yield"),
          tone: "quiet",
          next: last ? trialSceneId(id, "tl") : trialSceneId(id, steps[n + 1]),
          effects: last
            ? [{ kind: "setFlag", flag: lost }, stat("qi", -(2 + R)), { kind: "addNpc", metric: "respect", amount: -1 }]
            : [{ kind: "setFlag", flag: `${tribScarPrefix(id)}${n + 1}` }],
        },
      ],
    });
  });

  scenes.push({
    id: trialSceneId(id, "tw"),
    title: `${spec.title}: Weathered`,
    paragraphs: [fill(WON_SKY[spec.trib], trialSlots), fill(WON_KEEPER[spec.stance], trialSlots)],
    choices: (
      [
        ["truth", [cult(6 + 3 * R), dao(2)]],
        ["mercy", [stat("karma", 2), cult(4 + 2 * R)]],
        ["quiet", [stat("insight", 1), cult(4 + 2 * R)]],
        ["inquiry", [stat("insight", 2), cult(3 + R)]],
      ] as [ChoiceTone, Effect[]][]
    ).map(([tone, effects], n): Choice => ({
      id: ["accept", "share", "silent", "ask"][n],
      label: fill(WON_LABEL[n], trialSlots),
      tone,
      next: own("return"),
      effects,
      npcScenario: trialScenarioId(id, "won"),
    })),
  });

  scenes.push({
    id: trialSceneId(id, "tl"),
    title: `${spec.title}: Scorched`,
    paragraphs: [fill(LOST_SKY[spec.trib], trialSlots), fill(LOST_KEEPER[spec.stance], trialSlots)],
    choices: (
      [
        ["mercy", [stat("qi", 4)]],
        ["quiet", []],
        ["truth", [stat("insight", 1)]],
        ["deceit", [stat("karma", -1)]],
      ] as [ChoiceTone, Effect[]][]
    ).map(([tone, effects], n): Choice => ({
      id: ["dress", "leave", "swear", "blame"][n],
      label: fill(LOST_LABEL[n], trialSlots),
      tone,
      next: own("return"),
      effects,
      npcScenario: trialScenarioId(id, "lost"),
    })),
  });
  return scenes;
}

// ───────────── the Elder

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
const RESULT_SUMMARY: Record<TrialResult, string> = {
  won: "weathers the rehearsal of",
  lost: "is scorched by the rehearsal of",
  fled: "turns back from the gate of",
};
const RESULT_DELTA: Record<TrialResult, NpcScenario["delta"]> = {
  won: { respect: 3, trust: 1 },
  lost: { respect: 1, trust: 1 },
  fled: { trust: 1 },
};

/** The Elder’s answers to the rehearsal on one road: five lines by her trust for each of the three things a hero can do at it. */
export function buildTrialScenarios(spec: TribSpec): NpcScenario[] {
  const s = slotsOf(spec, spec.place);
  return (["won", "lost", "fled"] as TrialResult[]).map((result): NpcScenario => ({
    id: trialScenarioId(spec.id, result),
    summary: `The player ${RESULT_SUMMARY[result]} ${TRIB_NAME[spec.trib]} at ${spec.place}.`,
    delta: RESULT_DELTA[result],
    lines: Object.fromEntries(TIERS.map((t) => [t, fill(TRIAL_REPLY[result][t], s)])) as Record<Tier, string>,
  }));
}

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for the rehearsal, read against the realm the hero sat it at. */
export function buildReport11(spec: TribSpec, ctx: RoadContext11): NpcScenario {
  const report = buildReport3(synthesize(spec), ctx);
  const R = ctx.realm;
  const wayside = ctx.wayside - TRIB_WAYSIDE_BASE;
  const s = slotsOf(spec, spec.place);
  const kept = (report.memory ?? []).filter((m) => R > 0 || !m.when.some(isHumbled));
  const flag = (f: string): Condition[] => [{ kind: "flag", flag: f }];
  const outcome: [string, "won" | "lost"][] = [
    [tribWonFlag(wayside, spec.id), "won"],
    [tribLostFlag(wayside, spec.id), "lost"],
  ];
  const memories = outcome.flatMap(([f, result]) =>
    bandsAt(R).map((band) => ({ when: [...flag(f), bandCondition(band, R)], line: fill(TRIAL_MEMORY[result][band], s) })),
  );
  return {
    ...report,
    memory: [
      ...memories,
      { when: flag(tribFledFlag(wayside, spec.id)), line: fill("You went to the gate of {trib} at {place} and turned away, and told me. It is not a thing most people report. I have noted that you did.", s) },
      ...kept,
    ],
  };
}

export { pick };
