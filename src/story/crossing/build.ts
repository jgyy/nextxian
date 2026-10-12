import { affinityOf, attuneFlag, DAO_NAME, type Element } from "@/engine/path";
import { GENDERS, type Gender } from "@/engine/hero";
import { REALMS } from "@/engine/cultivation";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, pricesFor, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import { CRAFT_BEATS, CRAFT_WORK, type Craft } from "./lexicon-craft";
import { ELEMENT_BEATS, ELEMENT_DEEP } from "./lexicon-element";
import { CRAFT_DEEP } from "./lexicon-deep";
import { GENDER_CRAFT, GENDER_DOOR, GENDER_ELEMENT, GENDER_LABEL, GENDER_PICKS, GENDER_TITLE, KEEPER_GENDER, type GenderPick } from "./lexicon-gender";
import { ROOT_CRAFT, ROOT_DOOR, ROOT_LABEL, ROOT_SCENE, ROOT_TITLE, type RootKind, type RootPick } from "./lexicon-root";
import { SKILL_DOOR, SKILL_ELEMENT, SKILL_LABEL, SKILL_SCENE, SKILL_TITLE, type SkillKind, type SkillPick } from "./lexicon-skill";
import { GENDER_GREET, OPEN_GREET, OTHER_GREET, OWN_GREET, ROOT_GREET } from "./lexicon-greet";
import { FORK_REPORT, FORK_TIER, GENDER_MEMORY, ROOT_MEMORY, SKILL_MEMORY, type Fork } from "./lexicon-elder";
import { HERO_DAO_NOTE } from "./lexicon-note";
import type { CrossingSpec } from "./spec";

export type RoadContext7 = RoadContext3;

/** The Crossing Roads count their finished roads by wayside number, four hundred above the Fortune Roads’. */
export const PATH_WAYSIDE_BASE = 400;
export const PATH_DONE_ANY = "pr_done_";
export const pathDoneFlag = (wayside: number, id: string) => `pr_done_w${wayside}_${id}`;
export const pathDonePrefix = (wayside: number) => `pr_done_w${wayside}_`;

/** The flag that says a hero went through one of a road’s three doors, and the prefix that counts them over the whole story. */
export const FORK_PREFIX: Record<Fork, string> = { gender: "pr_fork_g_", root: "pr_fork_r_", skill: "pr_fork_c_" };
export const forkFlag = (fork: Fork, id: string) => `${FORK_PREFIX[fork]}${id}`;
const FORK_LETTER: Record<Fork, string> = { gender: "g", root: "r", skill: "c" };
/** The flag that says which pick a hero made behind a door. Two doors can offer a pick of the same name (“ask”, “borrow”), so the flag names the door. */
export const pickFlag = (fork: Fork, id: string, pickId: string) => `pr_pick_${FORK_LETTER[fork]}_${pickId}_${id}`;
export const pickPrefix = (fork: Fork, pickId: string) => `pr_pick_${FORK_LETTER[fork]}_${pickId}_`;
export const forkScenarioId = (fork: Fork, id: string) => `PATH_${fork.toUpperCase()}_${id.toUpperCase()}`;

const PRONOUN: Record<CrossingSpec["kgender"], { kthey: string; kthem: string; ktheir: string }> = {
  woman: { kthey: "she", kthem: "her", ktheir: "her" },
  man: { kthey: "he", kthem: "him", ktheir: "his" },
};

/** The slots every line of a Crossing Road is filled with. */
export function slotsOf(spec: CrossingSpec, focus: string): Record<string, string> {
  return {
    place: spec.place,
    kname: spec.kname,
    keeper: spec.keeper,
    relic: spec.relic,
    focus,
    element: spec.element,
    dao: DAO_NAME[spec.dao],
    trade: CRAFT_WORK[spec.dao].trade,
    ...PRONOUN[spec.kgender],
  };
}

/**
 * Turns a road’s hand-written parts into the spec a Fortune Road builder takes. The first scene of every approach is the keeper’s own opening.
 * The sixteen that follow are a beat of the keeper’s craft and a beat of the road’s element, in turn, and the hidden room is the craft’s secret in
 * the element’s air.
 */
export function synthesize(spec: CrossingSpec): RoadSpec3 {
  const beat = (a: number, s: number): string => {
    const slots = slotsOf(spec, spec.focus[a]);
    if (s === 0) return fill(spec.openers[a], slots);
    const i = a * 4 + (s - 1);
    const craft = fill(CRAFT_BEATS[spec.dao][i], slots);
    const element = fill(ELEMENT_BEATS[spec.element][i], slots);
    return i % 2 === 0 ? `${craft} ${element}` : `${element} ${craft}`;
  };
  const row = (a: number): [string, string, string, string, string] => [beat(a, 0), beat(a, 1), beat(a, 2), beat(a, 3), beat(a, 4)];
  const deepSlots = slotsOf(spec, spec.focus[2]);
  const deep = [0, 1, 2].map((n) => fill(`${CRAFT_DEEP[spec.dao][n]} ${ELEMENT_DEEP[spec.element][n]}`, deepSlots)) as [string, string, string];
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

const heroIs = (field: "gender" | "dao" | "talent", ...values: string[]): Condition => ({ kind: "hero", field, is: values });
const heroNot = (field: "dao", ...values: string[]): Condition => ({ kind: "hero", field, not: values });

/** Which kind of root scene a talent earns on this element. */
export const rootKindOf = (talent: Parameters<typeof affinityOf>[0]["talent"], element: Element): RootKind => {
  const a = affinityOf({ talent }, element);
  return a === 2 ? "kin" : a === 1 ? "partial" : "far";
};

/** The requirement a root scene’s door has, by kind and element. */
function rootCondition(kind: RootKind, element: Element): Condition[] {
  return kind === "kin" ? [{ kind: "affinity", element, min: 2 }] : kind === "partial" ? [{ kind: "affinity", element, min: 1, max: 1 }] : [{ kind: "affinity", element, max: 0 }];
}

/** The requirement a craft scene’s door has, by kind. */
function skillCondition(kind: SkillKind, dao: Craft): Condition[] {
  return kind === "own" ? [heroIs("dao", dao)] : kind === "other" ? [heroNot("dao", "none", dao)] : [heroIs("dao", "none")];
}

const GENDER_SUFFIX: Record<Gender, string> = { woman: "gw", man: "gm", unspoken: "gu" };
const ROOT_SUFFIX: Record<RootKind, string> = { kin: "rk", partial: "rp", far: "rf" };
const SKILL_SUFFIX: Record<SkillKind, string> = { own: "so", other: "sx", open: "sn" };
export const GENDER_KINDS: Gender[] = GENDERS.map((g) => g.value);
export const ROOT_KINDS: RootKind[] = ["kin", "partial", "far"];
export const SKILL_KINDS: SkillKind[] = ["own", "other", "open"];

/** The insight a hero needs to argue a door open: six, and two more for every realm the road asks. */
export const argueInsight = (realm: number, base: number) => base + 2 * realm;

/** Mastery rank a hero needs to be shown a master’s piece: Adept. */
export const MASTER_RANK = 2;

interface PickDef {
  tone: ChoiceTone;
  requires?: Condition[];
  hint?: string;
  effects: Effect[];
}

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });
const cult = (amount: number): Effect => ({ kind: "addCultivation", amount });
const dao = (amount: number): Effect => ({ kind: "addDao", amount });

/** What each gendered pick asks and gives. The custom a hero walks into is different, so the price of defying it is too. */
function genderPick(p: GenderPick, R: number): PickDef {
  switch (p) {
    case "sisters":
      return { tone: "mercy", effects: [stat("karma", 2), stat("qi", 3), cult(3 + 2 * R)] };
    case "barred":
      return {
        tone: "force",
        requires: [{ kind: "stat", stat: "insight", min: argueInsight(R, 8) }],
        hint: `A door the custom bars is argued open, not pushed. You need Insight ${argueInsight(R, 8)}.`,
        effects: [stat("karma", -1), cult(5 + 3 * R), dao(3)],
      };
    case "ask":
      return { tone: "inquiry", effects: [stat("insight", 2), cult(2 + R)] };
    case "quiet":
      return { tone: "quiet", effects: [stat("qi", 2), cult(2 + R)] };
    case "brothers":
      return {
        tone: "truth",
        requires: [{ kind: "stat", stat: "karma", min: -5 }],
        hint: "The men’s hall takes only a clean name. Your karma must be −5 or better.",
        effects: [stat("karma", 1), cult(3 + 2 * R), stat("qi", 1)],
      };
    case "prove":
      return {
        tone: "force",
        requires: [{ kind: "stat", stat: "qi", min: 10 }],
        hint: "The yard’s test is paid for in qi. You need 10.",
        effects: [stat("qi", -6), stat("karma", -1), cult(5 + 3 * R), dao(2)],
      };
    case "yield":
      return { tone: "mercy", effects: [stat("karma", 2), stat("insight", 1), cult(2 + R)] };
    case "middle":
      return {
        tone: "truth",
        requires: [{ kind: "stat", stat: "insight", min: argueInsight(R, 6) }],
        hint: `The middle seat asks you to explain yourself. You need Insight ${argueInsight(R, 6)}.`,
        effects: [stat("insight", 2), stat("karma", 1), cult(3 + 2 * R)],
      };
    case "either":
      return { tone: "deceit", effects: [stat("karma", -1), stat("insight", 1), stat("qi", 2), cult(2 + R)] };
    case "refuse":
      return { tone: "force", effects: [stat("qi", 1), cult(4 + 2 * R)] };
  }
}

/** What each pick behind the root door asks and gives. A kindred root attunes the hero fully, a half-root half as much, and a deaf root can be taught to by understanding. */
function rootPick(p: RootPick, kind: RootKind, element: Element, R: number): PickDef {
  switch (p) {
    case "attune":
      return { tone: "truth", effects: [{ kind: "setFlag", flag: attuneFlag(element, kind === "kin" ? 2 : 1) }, stat("qi", kind === "kin" ? 3 : 2), stat("karma", 1), cult(kind === "kin" ? 6 + 3 * R : 4 + 2 * R)] };
    case "bind":
      return {
        tone: "inquiry",
        requires: [{ kind: "hero", field: "dao", not: ["none"] }],
        hint: "You follow no Dao to bind it to.",
        effects: [dao(kind === "kin" ? 3 : 2), stat("insight", 1), cult(3 + R)],
      };
    case "pour":
      return {
        tone: "force",
        requires: [{ kind: "stat", stat: "qi", min: kind === "kin" ? 12 : 14 }],
        hint: `Pouring costs qi. You need ${kind === "kin" ? 12 : 14}.`,
        effects: [stat("qi", -10), stat("karma", -1), cult(kind === "kin" ? 8 + 4 * R : 6 + 3 * R)],
      };
    case "listen":
      return { tone: "quiet", effects: [stat("qi", 2), cult(3 + R)] };
    case "force":
      return {
        tone: "force",
        requires: [{ kind: "stat", stat: "qi", min: 10 }],
        hint: "Forcing an answer from a deaf root costs qi. You need 10.",
        effects: [stat("qi", -8), stat("karma", -1), cult(3 + R)],
      };
    case "borrow":
      return { tone: "deceit", effects: [stat("karma", -2), stat("insight", 1), cult(2 + R)] };
    case "study":
      return { tone: "inquiry", effects: [stat("insight", 3), dao(2)] };
    case "accept":
      return {
        tone: "truth",
        requires: [{ kind: "stat", stat: "insight", min: argueInsight(R, 10) }],
        hint: `To work an element your roots cannot hear, you must understand it. You need Insight ${argueInsight(R, 10)}.`,
        effects: [{ kind: "setFlag", flag: attuneFlag(element, 1) }, stat("karma", 1), cult(4 + 2 * R)],
      };
  }
}

/** What each pick behind the craft door asks and gives. Mastery and a Dao are what open them. */
function skillPick(p: SkillPick, wage: number, R: number, once: Condition): PickDef {
  switch (p) {
    case "beside":
      return { tone: "truth", effects: [dao(4), cult(3 + 2 * R)] };
    case "masterwork":
      return {
        tone: "force",
        requires: [{ kind: "mastery", min: MASTER_RANK }],
        hint: "The master’s piece is shown only to an Adept of the craft. You need mastery of Adept or better.",
        effects: [dao(6), cult(6 + 3 * R), stat("qi", -3)],
      };
    case "trade":
      return { tone: "inquiry", effects: [dao(2), stat("insight", 2)] };
    case "watch":
      return { tone: "quiet", effects: [dao(1), stat("qi", 2)] };
    case "compare":
      return { tone: "inquiry", effects: [dao(2), stat("insight", 2)] };
    case "borrow":
      return { tone: "deceit", effects: [dao(1), stat("insight", 1), stat("karma", -1)] };
    case "quarrel":
      return {
        tone: "force",
        requires: [{ kind: "mastery", min: 1 }],
        hint: "To contest a craft you must hold your own. You need mastery of Apprentice or better.",
        effects: [dao(3), stat("karma", -1), cult(4 + 2 * R)],
      };
    case "defer":
      return { tone: "mercy", effects: [stat("karma", 2), dao(1), cult(3 + R)] };
    case "apprentice":
      return { tone: "truth", effects: [stat("insight", 2), cult(3 + 2 * R)] };
    case "labour":
      return { tone: "quiet", requires: [once], hint: "You have already been paid for a day here.", effects: [stat("qi", 2), cult(2 + R), { kind: "addWealth", amount: wage }] };
    case "ask":
      return { tone: "inquiry", effects: [stat("insight", 2), cult(2 + R)] };
    case "carry":
      return { tone: "mercy", effects: [stat("karma", 2), cult(2 + R)] };
  }
}

const SKILL_PICKS: Record<SkillKind, [SkillPick, SkillPick, SkillPick, SkillPick]> = {
  own: ["beside", "masterwork", "trade", "watch"],
  other: ["compare", "borrow", "quarrel", "defer"],
  open: ["apprentice", "labour", "ask", "carry"],
};
const ROOT_PICKS: Record<RootKind, [RootPick, RootPick, RootPick, RootPick]> = {
  kin: ["attune", "bind", "pour", "listen"],
  partial: ["attune", "bind", "pour", "listen"],
  far: ["force", "borrow", "study", "accept"],
};

/**
 * Builds the scenes of one Crossing Road: the 25 of a Fortune Road, with the keeper’s craft and the road’s element in every beat, and three doors that
 * open to who the hero is. The gender door at the middle of the first approach opens one of three scenes, to a woman, a man or someone who gives no answer;
 * the root door at the middle of the second opens one of three, to a kindred root, a partial one or a deaf one; the craft door at the middle of the third
 * opens one of three, to a colleague, a practitioner of another Dao or an open hand. A hero sees one scene behind each door and never the other two.
 * Each door is a fork the Elder answers at once.
 */
export function buildRoad7(spec: CrossingSpec, ctx: RoadContext7): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const own = (suffix: string) => `${id}_${suffix}`;
  const scenes = buildRoad3(synthesize(spec), ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Crossing Road:") }));
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    if (index < 0) throw new Error(`Crossing Road "${id}" has no scene "${suffix}"`);
    scenes[index] = patch(scenes[index]);
  };
  const add = (suffix: string, extras: Extra[]) => put(suffix, (s) => ({ ...s, extras: [...(s.extras ?? []), ...extras] }));
  const seed = ctx.index;
  const wage = pricesFor(R, ctx.slot, spec.ware.kind).wage;
  const slots = (a: number) => slotsOf(spec, spec.focus[a]);
  const done = pathDoneFlag(ctx.wayside - PATH_WAYSIDE_BASE, id);
  const fortuneDone = `fr_done_w${ctx.wayside}_${id}`;
  put("return", (s) => ({
    ...s,
    choices: s.choices.map((c) => ({ ...c, effects: (c.effects ?? []).map((e): Effect => (e.kind === "setFlag" && e.flag === fortuneDone ? { ...e, flag: done } : e)) })),
  }));

  // What the keeper makes of the hero’s craft (on the entry), roots (on the first approach) and gender (on the second).
  add("entry", [
    { when: [heroIs("dao", spec.dao)], paragraphs: [fill(OWN_GREET[spec.dao], slots(0))], group: "craft" },
    ...(Object.keys(OTHER_GREET) as Craft[])
      .filter((d) => d !== spec.dao)
      .map((d) => ({ when: [heroIs("dao", d)], paragraphs: [fill(OTHER_GREET[d], slots(0))], group: "craft" })),
    { when: [heroIs("dao", "none")], paragraphs: [fill(pick(OPEN_GREET, seed), slots(0))], group: "craft" },
  ]);
  add("a0s0", ROOT_KINDS.map((kind) => ({ when: rootCondition(kind, spec.element), paragraphs: [fill(pick(ROOT_GREET[spec.element][kind], seed), slots(0))], group: "root" })));
  add(
    "a1s0",
    GENDER_KINDS.map((g) => ({ when: [heroIs("gender", g)], paragraphs: [fill(pick(GENDER_GREET[g], seed), slots(1))], group: "gender" })),
  );

  const door = (fork: Fork, label: string, tone: ChoiceTone, next: string, requires: Condition[], choiceId: string): Choice => ({
    id: choiceId,
    label,
    tone,
    next,
    requires: [...requires, { kind: "flag", flag: forkFlag(fork, id), is: false }],
    hideLocked: true,
  });

  // ── The gender door, at the middle of the first approach.
  put("a0s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      ...GENDER_KINDS.map((g, n) => door("gender", fill(pick(GENDER_DOOR[g], seed + n), slots(0)), g === "woman" ? "mercy" : g === "man" ? "truth" : "inquiry", own(GENDER_SUFFIX[g]), [heroIs("gender", g)], `door_${GENDER_SUFFIX[g]}`)),
    ],
  }));
  // ── The root door, at the middle of the second.
  put("a1s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      ...ROOT_KINDS.map((kind, n) => door("root", fill(pick(ROOT_DOOR[kind], seed + n), slots(1)), kind === "far" ? "inquiry" : "quiet", own(ROOT_SUFFIX[kind]), rootCondition(kind, spec.element), `door_${ROOT_SUFFIX[kind]}`)),
    ],
  }));
  // ── The craft door, at the middle of the third.
  put("a2s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      ...SKILL_KINDS.map((kind, n) => door("skill", fill(pick(SKILL_DOOR[kind], seed + n), slots(2)), kind === "own" ? "truth" : kind === "other" ? "inquiry" : "mercy", own(SKILL_SUFFIX[kind]), skillCondition(kind, spec.dao), `door_${SKILL_SUFFIX[kind]}`)),
    ],
  }));

  /** A scene behind a door: its paragraphs, and four picks that each set the fork flag, the pick flag, and the effects of the pick. */
  const branch = (suffix: string, fork: Fork, title: string, paragraphs: string[], picks: { pickId: string; label: string; def: PickDef }[], next: string, focusIndex: number, extras?: Extra[]): Scene => ({
    id: own(suffix),
    title: `${spec.title}: ${title}`,
    paragraphs: paragraphs.map((p) => fill(p, slots(focusIndex))),
    ...(extras ? { extras } : {}),
    choices: picks.map(({ pickId, label, def }): Choice => ({
      id: pickId,
      label: fill(label, slots(focusIndex)),
      tone: def.tone,
      next,
      ...(def.requires ? { requires: def.requires, lockedHint: def.hint } : {}),
      effects: [{ kind: "setFlag", flag: forkFlag(fork, id) }, { kind: "setFlag", flag: pickFlag(fork, id, pickId) }, ...def.effects],
      npcScenario: forkScenarioId(fork, id),
    })),
  });

  for (const g of GENDER_KINDS) {
    const picks = GENDER_PICKS[g].map((p, n) => ({ pickId: p, label: pick(GENDER_LABEL[p], seed + n), def: genderPick(p, R) }));
    scenes.push(branch(GENDER_SUFFIX[g], "gender", pick(GENDER_TITLE[g], seed), [GENDER_CRAFT[g][spec.dao], GENDER_ELEMENT[g][spec.element], KEEPER_GENDER[spec.kgender][g]], picks, own("a0s3"), 0));
  }
  for (const kind of ROOT_KINDS) {
    const picks = ROOT_PICKS[kind].map((p, n) => ({ pickId: p, label: pick(ROOT_LABEL[p], seed + n), def: rootPick(p, kind, spec.element, R) }));
    scenes.push(branch(ROOT_SUFFIX[kind], "root", pick(ROOT_TITLE[kind], seed), [ROOT_SCENE[kind][spec.element], ROOT_CRAFT[kind][spec.dao]], picks, own("a1s3"), 1));
  }
  for (const kind of SKILL_KINDS) {
    const picks = SKILL_PICKS[kind].map((p, n) => ({ pickId: p, label: pick(SKILL_LABEL[p], seed + n), def: skillPick(p, wage, R, { kind: "flag", flag: pickFlag("skill", id, p), is: false }) }));
    const noted: Extra[] | undefined =
      kind === "other"
        ? (Object.keys(HERO_DAO_NOTE) as Craft[]).filter((d) => d !== spec.dao).map((d) => ({ when: [heroIs("dao", d)], paragraphs: [fill(HERO_DAO_NOTE[d], slots(2))], group: "hdao" }))
        : undefined;
    scenes.push(branch(SKILL_SUFFIX[kind], "skill", pick(SKILL_TITLE[kind], seed), [SKILL_SCENE[kind][spec.dao], SKILL_ELEMENT[kind][spec.element]], picks, own("a2s3"), 2, noted));
  }
  return scenes;
}

// ───────────── the Elder

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
const FORK_DELTA: Record<Fork, NpcScenario["delta"]> = { gender: { respect: 1 }, root: { respect: 1, suspicion: -1 }, skill: { trust: 1 } };
const FORK_SUMMARY: Record<Fork, string> = {
  gender: "meets the custom of the trade behind the gender door",
  root: "puts the hero’s roots to the road’s element",
  skill: "shows the hero’s craft to the keeper",
};

const justNow = (tone: ChoiceTone): Condition => ({ kind: "tone", tone, min: 1, within: 1 });

/** The Elder’s answer to one door of one road. Five lines by her trust, and memories for what the hero is and what they chose behind it. */
export function buildForkScenario(fork: Fork, spec: CrossingSpec, ctx: RoadContext7): NpcScenario {
  const s = slotsOf(spec, spec.focus[0]);
  const line = (tier: Tier) => fill(pick(FORK_TIER[fork][tier], ctx.index + tier.length), s);
  const lines = Object.fromEntries(TIERS.map((t) => [t, line(t)])) as Record<Tier, string>;
  const memory: NonNullable<NpcScenario["memory"]> = [];
  if (fork === "gender") {
    for (const g of GENDER_KINDS) {
      for (const p of GENDER_PICKS[g]) {
        const tone = genderPick(p, ctx.realm).tone;
        memory.push({ when: [heroIs("gender", g), justNow(tone)], line: fill(pick(GENDER_MEMORY[g][tone], ctx.index), s) });
      }
    }
  } else if (fork === "root") {
    for (const kind of ROOT_KINDS) {
      // A mixed root answers every element a little, and the Elder says nothing special of it; a heaven-marked or late-blooming one she does.
      const when = kind === "partial" ? [...rootCondition(kind, spec.element), heroIs("talent", "heaven", "late")] : rootCondition(kind, spec.element);
      memory.push({ when, line: fill(pick(ROOT_MEMORY[kind], ctx.index), s) });
    }
  } else {
    for (const kind of SKILL_KINDS.filter((kind): kind is "own" | "other" => kind !== "open")) memory.push({ when: skillCondition(kind, spec.dao), line: fill(pick(SKILL_MEMORY[kind], ctx.index), s) });
  }
  return {
    id: forkScenarioId(fork, spec.id),
    summary: `The player ${FORK_SUMMARY[fork]} at ${spec.place}.`,
    delta: FORK_DELTA[fork],
    lines,
    memory,
  };
}

/** The Elder’s report: the Fortune Road’s, with a memory ahead of the rest for each door the hero went through. */
export function buildReport7(spec: CrossingSpec, ctx: RoadContext7): NpcScenario {
  const report = buildReport3(synthesize(spec), ctx);
  const s = slotsOf(spec, spec.focus[0]);
  const forks: Fork[] = ["skill", "root", "gender"];
  return {
    ...report,
    memory: [...forks.map((fork) => ({ when: [{ kind: "flag" as const, flag: forkFlag(fork, spec.id) }], line: fill(pick(FORK_REPORT[fork], ctx.index), s) })), ...(report.memory ?? [])],
  };
}

export { pricesFor, REALMS };
