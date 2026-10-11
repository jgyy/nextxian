import { affinityOf, DAO_CRAFT, DAO_NAME, type Element } from "@/engine/path";
import { DAOS, ORIGINS, TALENTS, type Dao, type Talent } from "@/engine/hero";
import type { Choice, Condition, Effect, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildReport3, buildRoad3, type RoadContext3, type RoadSpec3 } from "../fortune/build";
import {
  DAO_KIN,
  DAO_MEET,
  MASTERS_DOOR,
  MASTERY_READ,
  ORIGIN_MEET,
  PRACTISE_CRAFT,
  PRACTISE_KIN,
  REPORT_MEMORY4,
  RESONATE,
  RETURN_KIN,
  RETURN_MASTERS,
  RETURN_PRACTISED,
  RETURN_RESONATED,
  ROOT_FAR,
  ROOT_KIN_CRISIS,
  ROOT_KIN_OPEN,
  ROOT_PARTIAL,
} from "./lexicon";

/** What one Dao Road needs from its author: everything a Fortune Road needs, plus the Dao its keeper practises and the element it works. */
export interface RoadSpec4 extends RoadSpec3 {
  dao: Exclude<Dao, "none">;
  element: Element;
}

export interface RoadContext4 extends RoadContext3 {
  /** The mastery rank a hero needs to be shown the inner room. */
  rank: number;
}

/** Fortune Roads count their finished roads by wayside number; the Dao Roads use their own, a hundred higher. */
export const DAO_WAYSIDE_BASE = 100;
export const daoDoneFlag = (wayside: number, id: string) => `fr_done_w${DAO_WAYSIDE_BASE + wayside}_${id}`;
export const daoDonePrefix = (wayside: number) => `fr_done_w${DAO_WAYSIDE_BASE + wayside}_`;
const flag = (id: string, name: string) => `${id}_${name}`;

const slotsOf = (spec: RoadSpec4, focus: string): Record<string, string> => ({
  place: spec.place,
  kname: spec.kname,
  keeper: spec.keeper,
  focus,
  craft: DAO_CRAFT[spec.dao],
  dao: DAO_NAME[spec.dao],
  element: spec.element,
});

const heroCond = (field: "dao" | "talent" | "origin", is: string): Condition => ({ kind: "hero", field, is: [is] });

/** What the keeper says to a hero of each Dao: the road’s own Dao is met as kin. One extra per Dao, in one group. */
function daoMeetGroup(spec: RoadSpec4, seed: number, slots: Record<string, string>): Extra[] {
  return DAOS.map((o) => ({
    when: [heroCond("dao", o.value)],
    paragraphs: [fill(o.value === spec.dao ? pick(DAO_KIN[spec.dao], seed) : pick(DAO_MEET[o.value], seed), slots)],
    group: "dao",
  }));
}

function originGroup(seed: number, slots: Record<string, string>): Extra[] {
  return ORIGINS.map((o) => ({ when: [heroCond("origin", o.value)], paragraphs: [fill(pick(ORIGIN_MEET[o.value], seed), slots)], group: "origin" }));
}

/** How each talent meets the road’s element: kindred roots answer, partial roots half-answer, the rest have nothing to say. */
function rootGroup(spec: RoadSpec4, which: "open" | "crisis", seed: number, slots: Record<string, string>): Extra[] {
  const kin = which === "open" ? ROOT_KIN_OPEN : ROOT_KIN_CRISIS;
  return TALENTS.map((t) => {
    const talent = t.value as Talent;
    const strength = affinityOf({ talent }, spec.element);
    const line =
      strength === 2
        ? pick(kin[spec.element], seed)
        : strength === 1
          ? pick(ROOT_PARTIAL[talent as "mixed" | "heaven" | "late"], seed + (which === "open" ? 0 : 2))
          : pick(ROOT_FAR[talent as Exclude<Talent, "mixed">], seed + (which === "open" ? 0 : 2));
    return { when: [heroCond("talent", talent)], paragraphs: [fill(line, slots)], group: "root" };
  });
}

/** The keeper reads the hero’s rank in their Dao. A hero with no Dao has none to read. */
function masteryGroup(seed: number, slots: Record<string, string>): Extra[] {
  return [0, 1, 2, 3, 4].map((rank) => ({
    when: [{ kind: "hero" as const, field: "dao" as const, not: ["none"] }, { kind: "mastery" as const, min: rank, max: rank }],
    paragraphs: [fill(pick(MASTERY_READ[rank], seed), slots)],
    group: "rank",
  }));
}

/**
 * Builds the 25 scenes of one Dao Road. The road is a Fortune Road underneath: the same twenty situations, the same prices and the
 * same reactions to the purse and the realm. On top of that the keeper reads the hero’s Dao, roots, origin and mastery, a hero of the
 * road’s own Dao can practise beside them, anyone can learn a little, a root that answers the element can resonate, and a hero of
 * enough mastery is shown the inner room.
 */
export function buildRoad4(spec: RoadSpec4, ctx: RoadContext4): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const own = (suffix: string) => `${id}_${suffix}`;
  const scenes = buildRoad3(spec, ctx).map((scene) => ({ ...scene, title: scene.title.replace(/^Fortune Road:/, "Dao Road:") }));
  const at = (suffix: string): Scene => {
    const found = scenes.find((s) => s.id === own(suffix));
    if (!found) throw new Error(`Dao Road "${id}" has no scene "${suffix}"`);
    return found;
  };
  const put = (suffix: string, patch: (s: Scene) => Scene) => {
    const index = scenes.findIndex((s) => s.id === own(suffix));
    scenes[index] = patch(scenes[index]);
  };
  const seed = ctx.index;
  const kinOnly: Condition[] = [heroCond("dao", spec.dao), { kind: "flag", flag: flag(id, "kin"), is: false }];
  const need = DAOS.find((d) => d.value === spec.dao)?.label ?? DAO_NAME[spec.dao];

  put("entry", (s) => ({ ...s, extras: [...(s.extras ?? []), ...daoMeetGroup(spec, seed, slotsOf(spec, spec.focus[0]))] }));
  put("a0s0", (s) => ({ ...s, extras: [...(s.extras ?? []), ...rootGroup(spec, "open", seed, slotsOf(spec, spec.focus[0]))] }));
  put("a1s0", (s) => ({ ...s, extras: [...(s.extras ?? []), ...rootGroup(spec, "open", seed + 1, slotsOf(spec, spec.focus[1]))] }));
  put("a2s0", (s) => ({ ...s, extras: [...(s.extras ?? []), ...rootGroup(spec, "open", seed + 2, slotsOf(spec, spec.focus[2]))] }));
  put("a3s0", (s) => ({ ...s, extras: [...(s.extras ?? []), ...rootGroup(spec, "open", seed + 3, slotsOf(spec, spec.focus[3]))] }));

  for (let a = 0; a < 4; a++) {
    const slots = slotsOf(spec, spec.focus[a]);
    put(`a${a}s2`, (s) => ({ ...s, extras: [...(s.extras ?? []), ...originGroup(seed + a, slots)] }));
    put(`a${a}s3`, (s) => ({ ...s, extras: [...(s.extras ?? []), ...rootGroup(spec, "crisis", seed + a + 1, slots)] }));
    put(`a${a}s4`, (s) => ({ ...s, extras: [...(s.extras ?? []), ...masteryGroup(seed + a, slots)] }));
  }

  // The kin choice: a hero of the road’s own Dao works beside the keeper.
  put("a0s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      {
        id: "practise_kin",
        label: fill(pick(PRACTISE_KIN, seed), slotsOf(spec, spec.focus[0])),
        tone: "truth",
        next: s.choices[0].next,
        requires: kinOnly,
        lockedHint: `Only a hero of the ${DAO_NAME[spec.dao]} can work beside ${spec.kname} as one of the trade.`,
        effects: [
          { kind: "addDao", amount: 6 },
          { kind: "addCultivation", amount: 4 + 2 * R },
          { kind: "addStat", stat: "insight", amount: 2 },
          { kind: "setFlag", flag: flag(id, "kin") },
        ] satisfies Effect[],
      },
    ],
  }));

  // Anyone may learn a little at another trade.
  put("a1s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      {
        id: "practise_craft",
        label: fill(pick(PRACTISE_CRAFT, seed), slotsOf(spec, spec.focus[1])),
        tone: "inquiry",
        next: s.choices[0].next,
        requires: [{ kind: "flag", flag: flag(id, "practised"), is: false }],
        lockedHint: "You have already learned what this craft will give you today.",
        effects: [
          { kind: "addDao", amount: 2 },
          { kind: "addCultivation", amount: 2 + R },
          { kind: "addStat", stat: "insight", amount: 1 },
          { kind: "setFlag", flag: flag(id, "practised") },
        ] satisfies Effect[],
      },
    ],
  }));

  // A root that answers the element resonates with it.
  put("a3s2", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      {
        id: "resonate",
        label: fill(pick(RESONATE, seed), slotsOf(spec, spec.focus[3])),
        tone: "quiet",
        next: s.choices[0].next,
        requires: [{ kind: "affinity", element: spec.element, min: 1 }, { kind: "flag", flag: flag(id, "resonated"), is: false }],
        lockedHint: `Your roots have no ear for ${spec.element} qi, and nothing here will answer them.`,
        effects: [
          { kind: "addCultivation", amount: 3 + 2 * R },
          { kind: "addStat", stat: "qi", amount: 2 },
          { kind: "setFlag", flag: flag(id, "resonated") },
        ] satisfies Effect[],
      },
    ],
  }));

  // The inner room, for a hero whose Dao has risen high enough.
  put("a3s4", (s) => ({
    ...s,
    choices: [
      ...s.choices,
      {
        id: "masters_door",
        label: fill(pick(MASTERS_DOOR, seed), slotsOf(spec, spec.focus[3])),
        tone: "truth",
        next: own("h0"),
        requires: [{ kind: "hero", field: "dao", not: ["none"] }, { kind: "mastery", min: ctx.rank }],
        lockedHint: `${spec.kname} shows the inner room only to a hero of at least rank ${ctx.rank} in a Dao of their own. ${need} is the craft here, but any Dao will do.`,
        effects: [{ kind: "addDao", amount: 3 }, { kind: "setFlag", flag: flag(id, "masters_door") }] satisfies Effect[],
      },
    ],
  }));

  // A little Dao from drawing on qi, showing the goods, and finding the secret.
  for (const scene of scenes) {
    scene.choices = scene.choices.map((c): Choice => {
      if (/_a\ds3$/.test(scene.id) && (c.id === "draw_qi" || c.id === "show_ware")) return { ...c, effects: [...(c.effects ?? []), { kind: "addDao", amount: 1 }] };
      if (scene.id === own("h2")) return { ...c, effects: [...(c.effects ?? []), { kind: "addDao", amount: 3 }] };
      return c;
    });
  }

  // The way back reads what the hero did with their craft.
  const back = at("return");
  const slots = slotsOf(spec, spec.focus[3]);
  const gets = (name: string): Condition[] => [{ kind: "flag", flag: flag(id, name) }];
  put("return", () => ({
    ...back,
    extras: [
      ...(back.extras ?? []),
      { when: gets("masters_door"), paragraphs: [fill(pick(RETURN_MASTERS, seed), slots)], group: "craft" },
      { when: gets("kin"), paragraphs: [fill(pick(RETURN_KIN, seed), slots)], group: "craft" },
      { when: gets("resonated"), paragraphs: [fill(pick(RETURN_RESONATED, seed), slots)], group: "craft" },
      { when: gets("practised"), paragraphs: [fill(pick(RETURN_PRACTISED, seed), slots)], group: "craft" },
    ],
  }));
  return scenes;
}

/** The Elder’s report: the Fortune Road’s, with a memory for each thing the hero did with their craft, ahead of the rest. */
export function buildReport4(spec: RoadSpec4, ctx: RoadContext4): NpcScenario {
  const report = buildReport3(spec, ctx);
  const slots = slotsOf(spec, spec.focus[0]);
  const gets = (name: string): Condition[] => [{ kind: "flag", flag: flag(spec.id, name) }];
  return {
    ...report,
    summary: `The player reports on ${spec.place}.`,
    memory: [
      { when: gets("masters_door"), line: fill(REPORT_MEMORY4.masters, slots) },
      { when: gets("kin"), line: fill(REPORT_MEMORY4.kin, slots) },
      { when: gets("resonated"), line: fill(REPORT_MEMORY4.resonated, slots) },
      { when: gets("practised"), line: fill(REPORT_MEMORY4.practised, slots) },
      ...(report.memory ?? []),
    ],
  };
}

