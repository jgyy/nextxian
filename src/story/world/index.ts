import { REALMS } from "@/engine/cultivation";
import { doneFlag, heardFlag, PARTS, PER_REACH, type Course } from "@/engine/world";
import type { Choice, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick } from "../roads2/build";
import { affairs1 } from "./affairs-1";
import { affairs2 } from "./affairs-2";
import { affairs3 } from "./affairs-3";
import { affairs4 } from "./affairs-4";
import { affairs5 } from "./affairs-5";
import { buildAffair, buildReport, slotsOf, tokenItem, tokenId, type AffairContext } from "./build";
import { HUB_LABELS } from "./lexicon-text";
import { REACH_SPECS } from "./reaches";
import type { AffairSpec, ReachSpec } from "./spec";

export { REACH_SPECS };
/** The forty affairs, four to a reach, in the order of the story. */
export const AFFAIRS: AffairSpec[] = [...affairs1, ...affairs2, ...affairs3, ...affairs4, ...affairs5];
export const BACK15 = (origin: string) => `back15_${origin}`;

export const contexts: AffairContext[] = AFFAIRS.map((_, index) => {
  const n = Math.floor(index / PER_REACH);
  return { index, reach: n + 1, reachId: REACH_SPECS[n].id, realm: REACH_SPECS[n].realm };
});

/** The first decision count at which the second and the third season of a reach are told. */
export const SEASONS = [150, 400];

function reachScene(w: ReachSpec, n: number, here: { spec: AffairSpec; ctx: AffairContext }[]): Scene {
  const choices: Choice[] = here.map(({ spec, ctx }, slot) => ({
    id: `go_${spec.id}`,
    label: fill(pick(HUB_LABELS, ctx.index + slot), slotsOf(spec)),
    tone: (["inquiry", "mercy", "truth", "force"] as const)[(ctx.index + slot) % 4],
    next: `wo_${spec.id}_sighting`,
    requires: [{ kind: "flag", flag: doneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already seen this one through.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the world to get on with itself, and go back to where you left the road.", tone: "quiet", next: BACK15(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: [
      { when: [{ kind: "decisions", max: SEASONS[0] - 1 }], paragraphs: [w.seasons[0]], group: "season" },
      { when: [{ kind: "decisions", min: SEASONS[0], max: SEASONS[1] - 1 }], paragraphs: [w.seasons[1]], group: "season" },
      { when: [{ kind: "decisions", min: SEASONS[1] }], paragraphs: [w.seasons[2]], group: "season" },
      ...here.flatMap(({ spec }) => [
        { when: [{ kind: "flag" as const, flag: heardFlag(n + 1, spec.id) }], paragraphs: [`Elder Su has heard of “${spec.title}.”`], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: doneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: heardFlag(n + 1, spec.id), is: false }],
          paragraphs: [`Elder Su has not heard of “${spec.title}.”`],
          group: spec.id,
        },
      ]),
    ],
    interjections: [{ when: [{ kind: "count", prefix: `wo_done_r${n + 1}_`, min: PER_REACH }], line: w.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a reach, so the opening of the origin is not read twice. */
export function waysideBack15(w: ReachSpec, origin: Scene): Scene {
  return {
    id: BACK15(w.origin),
    title: `Back from ${w.title.replace("World Roads: ", "")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per reach: the hub scene and the hundred scenes of its four affairs. */
export const worldGroups: { name: string; wayside: ReachSpec; scenes: Scene[] }[] = REACH_SPECS.map((w, n) => {
  const here = AFFAIRS.slice(n * PER_REACH, (n + 1) * PER_REACH).map((spec, slot) => ({ spec, ctx: contexts[n * PER_REACH + slot] }));
  return { name: w.title, wayside: w, scenes: [reachScene(w, n, here), ...here.flatMap(({ spec, ctx }) => buildAffair(spec, ctx))] };
});

/** The Elder’s report on every affair. */
export const worldScenarios: Record<string, NpcScenario> = Object.fromEntries(
  AFFAIRS.map((spec, i) => {
    const scenario = buildReport(spec, contexts[i]);
    return [scenario.id, scenario] as const;
  }),
);

/** What every affair leaves the hero who takes a part in it. */
export const worldItems: Record<string, ItemDef> = Object.fromEntries(AFFAIRS.map((spec) => [tokenId(spec.id), tokenItem(spec)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const worldEntrances: Record<string, Choice> = Object.fromEntries(
  REACH_SPECS.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const worldRoadRealms = REACH_SPECS.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));

/** The affair a scene belongs to, if the hero is standing in one. */
export function affairAt(sceneId: string): { spec: AffairSpec; ctx: AffairContext } | undefined {
  const i = AFFAIRS.findIndex((a) => sceneId.startsWith(`wo_${a.id}_`));
  return i < 0 ? undefined : { spec: AFFAIRS[i], ctx: contexts[i] };
}

/** What the world would do with each affair if no hand were laid on it, and what it is now, by the flags. */
export function worldLedger(flags: Record<string, boolean>): { reach: number; short: string; title: string; rows: { spec: AffairSpec; course: Course; part?: (typeof PARTS)[number]; touched: boolean; done: boolean }[] }[] {
  return REACH_SPECS.map((w, n) => ({
    reach: n + 1,
    short: w.title.replace("World Roads: The ", "").replace(/^(Neighbour Sects of the |Foot of the )/, "").split(" ")[0],
    title: w.title.replace("World Roads: ", ""),
    rows: AFFAIRS.slice(n * PER_REACH, (n + 1) * PER_REACH).map((spec) => {
      const part = PARTS.find((p) => flags[`wo_part_r${n + 1}_${spec.id}_${p}`]);
      const course = (["mended", "ground", "broke"] as const).find((c) => flags[`wo_out_r${n + 1}_${spec.id}_${c}`]);
      return { spec, course: course ?? spec.fate, part, touched: course !== undefined, done: flags[doneFlag(n + 1, spec.id)] === true };
    }),
  }));
}

