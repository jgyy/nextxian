import type { ChoiceTone, Choice, Condition, Effect, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, doneFlag3, pricesFor, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import {
  COUNT_READ,
  DEEDS,
  DEED_LABEL,
  DEED_LINES,
  DEED_MEMORY,
  DEED_TAIL,
  ELDER_WORD,
  LEDGER_READ,
  MANNER_READ,
  REPORT_DEED,
  REPUTE,
  RETURN_DEED,
  type Count,
  type ElderWord,
} from "./lexicon";
import { deedPrefix, REPUTE_DARK, REPUTE_KIND, WITNESS_DONE_ANY, type Deed, type Repute } from "@/engine/witness";

/**
 * What one Witness Road needs from its author: everything a Fortune Road needs, plus the thing its keeper writes in. The keeper
 * is a witness. They read the hero’s karma, manner, the Elder’s standing and the number of roads walked, and the hero can
 * answer in four ways, each of which the Elder hears of and answers on the spot.
 */
export interface RoadSpec5 extends RoadSpec3 {
  /** What the keeper writes in, with its article: “the bench-book”. */
  ledger: string;
}

export type RoadContext5 = RoadContext3;

/** The Witness Roads count their finished roads by wayside number, two hundred above the Fortune Roads’. */
export const WITNESS_WAYSIDE_BASE = 200;
export { WITNESS_DONE_ANY };
export const witnessDoneFlag = (wayside: number, id: string) => `wr_done_w${wayside}_${id}`;
export const witnessDonePrefix = (wayside: number) => `wr_done_w${wayside}_`;
/** The flag a deed sets for the whole story, so the Elder and the keepers can count how often the hero did it. */
export const deedFlag = (deed: Deed, id: string) => `wr_${deed}_${id}`;
export const deedScenarioId = (deed: Deed, id: string) => `WITNESS_${deed.toUpperCase()}_${id.toUpperCase()}`;
const flag = (id: string, name: string) => `${id}_${name}`;

const slotsOf = (spec: RoadSpec5, focus: string): Record<string, string> => ({
  place: spec.place,
  kname: spec.kname,
  keeper: spec.keeper,
  ledger: spec.ledger,
  focus,
});

const gets = (id: string, name: string): Condition[] => [{ kind: "flag", flag: flag(id, name) }];

/** The deed’s change in the Elder’s feeling. What each means is in the lexicon; the sizes are here. */
export const DEED_DELTA: Record<Deed, NpcScenario["delta"]> = {
  vouch: { trust: 1, respect: -1 },
  confess: { trust: 2, suspicion: -2, respect: 1 },
  conceal: { trust: -1, suspicion: 3 },
  ask: { respect: 1, suspicion: -1 },
};

/** How the keeper meets the hero’s karma: three bands, in one group. */
function reputeGroup(seed: number, slots: Record<string, string>): Extra[] {
  const bands: [Repute, { min?: number; max?: number }][] = [
    ["dark", { max: REPUTE_DARK }],
    ["kind", { min: REPUTE_KIND }],
    ["grey", { min: REPUTE_DARK + 1, max: REPUTE_KIND - 1 }],
  ];
  return bands.map(([band, bounds]) => ({
    when: [{ kind: "stat" as const, stat: "karma" as const, ...bounds }],
    paragraphs: [fill(pick(REPUTE[band], seed), slots)],
    group: "repute",
  }));
}

/** What word of the Elder has reached the keeper. The first band that holds wins, and a hero whom the Elder neither fears nor doubts nor much regards is told nothing. */
function elderGroup(seed: number, slots: Record<string, string>): Extra[] {
  const bands: [ElderWord, Condition[]][] = [
    ["afraid", [{ kind: "npc", metric: "fear", min: 35 }]],
    ["suspicious", [{ kind: "npc", metric: "suspicion", min: 45 }]],
    ["cold", [{ kind: "npc", metric: "trust", max: -10 }]],
    ["honoured", [{ kind: "npc", metric: "trust", min: 70 }, { kind: "npc", metric: "respect", min: 40 }]],
    ["warm", [{ kind: "npc", metric: "trust", min: 40 }]],
  ];
  return bands.map(([band, when]) => ({ when, paragraphs: [fill(pick(ELDER_WORD[band], seed), slots)], group: "elder" }));
}

/** The keeper names the hero’s manner when three of the last eight decisions share a tone. */
function mannerGroup(seed: number, slots: Record<string, string>): Extra[] {
  const tones: ChoiceTone[] = ["deceit", "force", "mercy", "truth", "inquiry", "quiet"];
  return tones.map((tone) => ({
    when: [{ kind: "tone" as const, tone, min: 4, within: 8 }],
    paragraphs: [fill(pick(MANNER_READ[tone], seed), slots)],
    group: "tonal",
  }));
}

/** How many Witness Roads the hero has finished already, counted across every wayside. */
function countGroup(seed: number, slots: Record<string, string>): Extra[] {
  const bands: [Count, number, number | undefined][] = [
    ["most", 12, undefined],
    ["many", 6, 11],
    ["some", 1, 5],
  ];
  return bands.map(([band, min, max]) => ({
    when: [{ kind: "count" as const, prefix: WITNESS_DONE_ANY, min, ...(max !== undefined ? { max } : {}) }],
    paragraphs: [fill(pick(COUNT_READ[band], seed), slots)],
    group: "count",
  }));
}

/** What the keeper reads aloud from the page, once the hero has asked: the tone that dominates the hero’s last eight decisions, or a blank. */
function readGroup(id: string, seed: number, slots: Record<string, string>): Extra[] {
  const asked = { kind: "flag" as const, flag: flag(id, "asked") };
  const tones: ChoiceTone[] = ["deceit", "force", "mercy", "truth", "inquiry", "quiet"];
  return [
    ...tones.map((tone) => ({
      when: [asked, { kind: "tone" as const, tone, min: 3, within: 8 }],
      paragraphs: [fill(pick(LEDGER_READ[tone], seed), slots)],
      group: "read",
    })),
    { when: [asked], paragraphs: [fill(pick(LEDGER_READ.blank, seed), slots)], group: "read" },
  ];
}

/**
 * Builds the 25 scenes of one Witness Road. The road is a Fortune Road underneath: the same twenty situations, the same prices and
 * the same reactions to the purse and the realm. On top of that the keeper reads the hero’s karma, manner and the Elder’s standing,
 * counts the roads the hero has walked, and the hero can vouch with the Elder’s name, confess, ask the keeper to forget, or ask
 * what the page says. Each of those makes the Elder answer at once, not only at the report.
 */
export function buildRoad5(spec: RoadSpec5, ctx: RoadContext5): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const price = pricesFor(R, ctx.slot, spec.ware.kind);
  const own = (suffix: string) => `${id}_${suffix}`;
  const scenes = buildRoad3(spec, ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Witness Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    if (index < 0) throw new Error(`Witness Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const seed = ctx.index;
  // The road counts itself finished under the Witness Roads’ own flag, so the hub and the keepers can count them apart from the Fortune Roads.
  const fortuneDone = doneFlag3(ctx.wayside, id);
  const done = witnessDoneFlag(ctx.wayside - WITNESS_WAYSIDE_BASE, id);
  put("return", (s) => ({
    ...s,
    choices: s.choices.map((c) => ({ ...c, effects: (c.effects ?? []).map((e): Effect => (e.kind === "setFlag" && e.flag === fortuneDone ? { ...e, flag: done } : e)) })),
  }));
  const label = (deed: Deed, focus: string) => fill(pick(DEED_LABEL[deed], seed), slotsOf(spec, focus));

  // The keeper’s reading of who the hero is: karma at the door, the Elder’s name in the middle, the manner, the number of roads.
  put("entry", (s) => ({ ...s, extras: [...(s.extras ?? []), ...reputeGroup(seed, slotsOf(spec, spec.focus[0]))] }));
  put("a0s2", (s) => ({ ...s, extras: [...(s.extras ?? []), ...elderGroup(seed, slotsOf(spec, spec.focus[0]))] }));
  put("a1s2", (s) => ({ ...s, extras: [...(s.extras ?? []), ...mannerGroup(seed + 1, slotsOf(spec, spec.focus[1]))] }));
  put("a2s2", (s) => ({ ...s, extras: [...(s.extras ?? []), ...countGroup(seed + 2, slotsOf(spec, spec.focus[2]))] }));
  put("a3s1", (s) => ({ ...s, extras: [...(s.extras ?? []), ...readGroup(id, seed + 3, slotsOf(spec, spec.focus[3]))] }));
  // A second look from the other side: a hero walking the other approaches meets the Elder’s word and the manner again, in different scenes.
  put("a2s1", (s) => ({ ...s, extras: [...(s.extras ?? []), ...elderGroup(seed + 1, slotsOf(spec, spec.focus[2]))] }));
  put("a3s2", (s) => ({ ...s, extras: [...(s.extras ?? []), ...mannerGroup(seed + 2, slotsOf(spec, spec.focus[3]))] }));
  put("a0s1", (s) => ({ ...s, extras: [...(s.extras ?? []), ...countGroup(seed, slotsOf(spec, spec.focus[0]))] }));
  put("a1s3", (s) => ({ ...s, extras: [...(s.extras ?? []), ...reputeGroup(seed + 1, slotsOf(spec, spec.focus[1]))] }));

  // The four deeds. Each is a choice at the start of one approach, and the Elder answers at once.
  const deedChoice = (deed: Deed, focus: string, stage: number): Choice => {
    const base: Omit<Choice, "label" | "tone" | "requires" | "lockedHint" | "effects"> = { id: deed, next: `${id}_a${DEEDS.indexOf(deed)}s${stage + 1}`, npcScenario: deedScenarioId(deed, id) };
    const mark: Effect[] = [{ kind: "setFlag", flag: flag(id, deed === "vouch" ? "vouched" : deed === "confess" ? "confessed" : deed === "conceal" ? "concealed" : "asked") }, { kind: "setFlag", flag: deedFlag(deed, id) }];
    switch (deed) {
      case "vouch":
        return {
          ...base,
          label: label(deed, focus),
          tone: "truth",
          requires: [{ kind: "flag", flag: flag(id, "vouched"), is: false }],
          lockedHint: `You have already given Elder Su’s name to ${spec.kname}.`,
          effects: [...mark, { kind: "addCultivation", amount: 2 + R }, { kind: "addStat", stat: "insight", amount: 1 }],
        };
      case "confess":
        return {
          ...base,
          label: label(deed, focus),
          tone: "truth",
          requires: [{ kind: "stat", stat: "karma", max: 0 }, { kind: "flag", flag: flag(id, "confessed"), is: false }],
          lockedHint: "You have nothing on your conscience to confess. Your karma is above zero.",
          effects: [...mark, { kind: "addStat", stat: "karma", amount: 3 }, { kind: "addCultivation", amount: 2 + R }],
        };
      case "conceal":
        return {
          ...base,
          label: label(deed, focus),
          tone: "deceit",
          requires: [{ kind: "wealth", min: price.settle }, { kind: "flag", flag: flag(id, "concealed"), is: false }],
          lockedHint: `You need ${price.settle} spirit stone${price.settle === 1 ? "" : "s"}. A forgetting is paid for.`,
          effects: [...mark, { kind: "addWealth", amount: -price.settle }, { kind: "addStat", stat: "karma", amount: -2 }, { kind: "addStat", stat: "insight", amount: 1 }],
        };
      case "ask":
        return {
          ...base,
          label: label(deed, focus),
          tone: "inquiry",
          requires: [{ kind: "decisions", min: 6 }, { kind: "flag", flag: flag(id, "asked"), is: false }],
          lockedHint: "You have not walked far enough for the page to say anything yet.",
          effects: [...mark, { kind: "addStat", stat: "insight", amount: 2 }, { kind: "addCultivation", amount: 2 + R }],
        };
    }
  };
  // Each approach has a deed at its first scene, so a hero who walks one approach meets one deed and the other three wait on the other roads.
  DEEDS.forEach((deed, a) => {
    put(`a${a}s0`, (s) => ({ ...s, choices: [...s.choices, deedChoice(deed, spec.focus[a], 0)] }));
  });

  // The way back: the keeper says what they will tell the next traveller about what the hero did.
  const back = scenes.find((s) => s.id === own("return"))!;
  const slots = slotsOf(spec, spec.focus[3]);
  const deedFlags: [Deed, string][] = [["conceal", "concealed"], ["vouch", "vouched"], ["confess", "confessed"], ["ask", "asked"]];
  put("return", () => ({
    ...back,
    extras: [...(back.extras ?? []), ...deedFlags.map(([deed, name]) => ({ when: gets(id, name), paragraphs: [fill(pick(RETURN_DEED[deed], seed), slots)], group: "word" }))],
  }));
  return scenes;
}

/** The Elder’s answer to one deed on one road. Five lines by her trust, and a memory for each thing she may be remembering. */
export function buildDeedScenario(deed: Deed, spec: RoadSpec5, ctx: RoadContext5): NpcScenario {
  const slots = slotsOf(spec, spec.focus[0]);
  const tail = (kind: keyof typeof DEED_TAIL, n: number) => pick(DEED_TAIL[kind], ctx.index + n);
  const line = (tier: keyof (typeof DEED_LINES)["vouch"]) =>
    fill(`${pick(DEED_LINES[deed][tier], ctx.index + tier.length)} ${tail(tier === "hostile" || tier === "wary" ? "cold" : "warm", tier.length)}`, slots);
  const memories = DEED_MEMORY[deed];
  const table: Record<Deed, Condition[][]> = {
    vouch: [
      [{ kind: "npc", metric: "suspicion", min: 50 }],
      [{ kind: "stat", stat: "karma", max: -15 }],
      [{ kind: "count", prefix: deedPrefix("conceal"), min: 1 }],
      [{ kind: "npc", metric: "trust", min: 60 }],
    ],
    confess: [
      [{ kind: "tone", tone: "deceit", min: 3, within: 8 }],
      [{ kind: "stat", stat: "karma", max: -20 }],
      [{ kind: "count", prefix: deedPrefix("conceal"), min: 1 }],
      [{ kind: "npc", metric: "trust", min: 60 }],
    ],
    conceal: [
      [{ kind: "count", prefix: deedPrefix("vouch"), min: 1 }],
      [{ kind: "stat", stat: "karma", min: 15 }],
      [{ kind: "npc", metric: "suspicion", min: 50 }],
      [{ kind: "unfed" }],
    ],
    ask: [
      [{ kind: "stat", stat: "karma", max: -15 }],
      [{ kind: "tone", tone: "force", min: 3, within: 8 }],
      [{ kind: "count", prefix: WITNESS_DONE_ANY, min: 8 }],
      [{ kind: "npc", metric: "trust", min: 60 }],
    ],
  };
  const conditions = table[deed];
  return {
    id: deedScenarioId(deed, spec.id),
    summary: `The player ${deed === "vouch" ? "gives the Elder’s name as surety" : deed === "confess" ? "confesses" : deed === "conceal" ? "asks a keeper to forget them" : "asks to hear their own page"} at ${spec.place}.`,
    delta: DEED_DELTA[deed],
    lines: { hostile: line("hostile"), wary: line("wary"), neutral: line("neutral"), warm: line("warm"), devoted: line("devoted") },
    memory: memories.map((variants, n) => ({ when: conditions[n], line: fill(`${pick(variants, ctx.index)} ${tail("memory", n)}`, slots) })),
  };
}

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for each deed the hero did here. */
export function buildReport5(spec: RoadSpec5, ctx: RoadContext5): NpcScenario {
  const report = buildReport3(spec, ctx);
  const slots = slotsOf(spec, spec.focus[0]);
  const deedFlags: [Deed, string][] = [["conceal", "concealed"], ["vouch", "vouched"], ["confess", "confessed"], ["ask", "asked"]];
  return {
    ...report,
    memory: [...deedFlags.map(([deed, name]) => ({ when: gets(spec.id, name), line: fill(pick(REPORT_DEED[deed], ctx.index), slots) })), ...(report.memory ?? [])],
  };
}
