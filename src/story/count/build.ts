import { layerName, levelOf } from "@/engine/stages";
import { unitOf } from "@/engine/time";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene } from "@/engine/types";
import type { Beat, Four, Road } from "./spec";

/** The scenes of the Long Count Roads: ten roads, a unit of the realm’s own time spent ten times on each, and ten scenes to a unit. */
export const hubId = (realm: number) => `wayside_cn_${realm}`;
export const sceneId = (realm: number, beat: number, role: string) => `cn${realm}_${beat}_${role}`;
export const BACK16 = (origin: string) => `back16_${origin}`;
export const beatFlag = (realm: number, beat: number) => `cnb${realm}_${beat}`;
/** How the unit was last spent, and how its turn was last met. Four flags to a road, set one at a time: choosing a way clears the other three. */
export const wayFlag = (realm: number, way: number) => `cnw${realm}_${way}`;
export const turnFlag = (realm: number, answer: number) => `cnt${realm}_${answer}`;
const only = (flagOf: (i: number) => string, on: number): Effect[] => [0, 1, 2, 3].map((i) => ({ kind: "setFlag", flag: flagOf(i), value: i === on }));
export const doneFlag = (realm: number) => `cnd${realm}`;
export const BEATS_PER_ROAD = 10;
export const scenarioId = (kind: "SPEND" | "ASK", realm: number) => `CN_${kind}_${realm}`;

const WAY_ANSWER_TONES: Four<ChoiceTone> = ["quiet", "inquiry", "mercy", "force"];

/** The small drift of the stats that goes with a tone, as the compact markup gives it to a choice. */
const DRIFT: Record<ChoiceTone, Effect[]> = {
  truth: [{ kind: "addStat", stat: "insight", amount: 1 }, { kind: "addStat", stat: "karma", amount: 1 }],
  mercy: [{ kind: "addStat", stat: "karma", amount: 2 }],
  inquiry: [{ kind: "addStat", stat: "insight", amount: 2 }],
  deceit: [{ kind: "addStat", stat: "karma", amount: -2 }],
  force: [{ kind: "addStat", stat: "qi", amount: 1 }, { kind: "addStat", stat: "karma", amount: -1 }],
  quiet: [{ kind: "addStat", stat: "qi", amount: 2 }],
};

const pick = <T,>(list: readonly T[], i: number): T => list[((i % list.length) + list.length) % list.length];
const flag = (name: string, is = true): Condition => ({ kind: "flag", flag: name, is });
const go = (id: string, label: string, tone: ChoiceTone, next: string, rest: Partial<Choice> = {}): Choice => ({ id, label, tone, next, ...rest });

/** The days one unit takes, from the calendar’s own voice for the realm. */
export const unitDays = (realm: number): number => unitOf(realm).days;

/** The years a hero must have left to spend one unit: none for a unit shorter than a year, and a year to spare for the rest. */
export const yearsNeeded = (realm: number): number => (unitDays(realm) >= 365 ? Math.ceil(unitDays(realm) / 365) + 1 : 0);

/** The ten scenes of one beat. */
export function buildBeat(road: Road, k: number): Scene[] {
  const r = road.realm;
  const beat: Beat = road.beats[k];
  const first = levelOf(r, 0);
  const hub = hubId(r);
  const id = (role: string) => sceneId(r, k, role);
  const head = `${road.short}: ${beat.name}`;
  const needed = yearsNeeded(r);
  const spendRequires: Condition[] = [...(r > 0 ? [{ kind: "realm", min: r } as Condition] : []), ...(needed > 0 ? [{ kind: "years", min: needed } as Condition] : [])];
  const spendHint = `You have not the years to spend ${road.cost} here. Break through, or find years on a road.`;
  const last = k === BEATS_PER_ROAD - 1;

  const entry: Scene = {
    id: id("a"),
    title: head,
    paragraphs: [beat.open],
    extras: [{ when: [flag(beatFlag(r, k))], paragraphs: [`You have spent this ${road.unit} already. The road lets you walk it again and charges the same for it.`], group: "spent" }],
    choices: [
      ...beat.ways.map((label, i) =>
        go(`way_${i}`, `${label.replace(/\.$/, "")} (${road.cost}).`, road.tones[i], id(`m${i}`), {
          requires: spendRequires,
          lockedHint: spendHint,
          npcScenario: scenarioId("SPEND", r),
          effects: [{ kind: "setFlag", flag: beatFlag(r, k) }, ...only((j) => wayFlag(r, j), i), { kind: "passTime", days: unitDays(r) }, ...DRIFT[road.tones[i]]],
        }),
      ),
      go("leave", `Leave ${beat.name} and go back to the road.`, "quiet", hub),
    ],
  };

  const ways: Scene[] = beat.does.map((text, i) => ({
    id: id(`m${i}`),
    title: `${head}: ${road.wayNames[i]}`,
    paragraphs: [text],
    choices: road.onward.map((label, j) => go(`on_${j}`, label, WAY_ANSWER_TONES[j], id("t"))),
  }));

  const turn: Scene = {
    id: id("t"),
    title: `${head}: The Turn`,
    paragraphs: [beat.turn],
    extras: road.wayTurn.map((text, i) => ({ when: [flag(wayFlag(r, i))], paragraphs: [text], group: "way" })),
    choices: road.answers.map((variants, j) =>
      go(`meet_${j}`, pick(variants, k + j), WAY_ANSWER_TONES[j], id("f"), { effects: [...only((a) => turnFlag(r, a), j), ...DRIFT[WAY_ANSWER_TONES[j]]] }),
    ),
  };

  const after: Scene = {
    id: id("f"),
    title: `${head}: What Is Left`,
    paragraphs: [beat.after],
    extras: road.wayAfter.map((text, i) => ({ when: [flag(wayFlag(r, i))], paragraphs: [text], group: "way" })),
    choices: [
      go("to_keeper", pick(road.toKeeper, k), "inquiry", id("k")),
      go("to_elder", pick(road.toElder, k), "truth", id("e")),
      go("to_leaves", pick(road.toLeaves, k), "quiet", id("l")),
      go("leave", pick(road.closing, k), "quiet", hub),
    ],
  };

  const keeper: Scene = {
    id: id("k"),
    title: `${head}: ${road.keeper.charAt(0).toUpperCase()}${road.keeper.slice(1)}`,
    paragraphs: [beat.keeper],
    choices: [
      go("to_elder", pick(road.toElder, k + 1), "inquiry", id("e")),
      go("stay", pick(road.toLeaves, k + 1), "mercy", id("l")),
      go("go_on", pick(road.toLeaves, k + 2), "quiet", id("l")),
      go("leave", pick(road.closing, k + 1), "truth", hub),
    ],
  };

  const elder: Scene = {
    id: id("e"),
    title: `${head}: The Elder`,
    paragraphs: [beat.elderBody],
    interjections: [{ when: [], line: beat.elderLine }],
    choices: [
      go("press", pick(road.press, k), "inquiry", id("l"), { npcScenario: scenarioId("ASK", r) }),
      go("thank", pick(road.toLeaves, k + 3), "mercy", id("l")),
      go("quiet", pick(road.toLeaves, k), "quiet", id("l")),
      go("leave", pick(road.closing, k + 2), "truth", hub),
    ],
  };

  const next = last ? hub : sceneId(r, k + 1, "a");
  const leaves: Scene = {
    id: id("l"),
    title: `${head}: What It Leaves`,
    paragraphs: [beat.leaves],
    extras: road.answerLeaves.map((text, j) => ({ when: [flag(turnFlag(r, j))], paragraphs: [text], group: "met" })),
    choices: [
      ...(last
        ? [go("finish", pick(road.closing, k + 3), "quiet", hub, { effects: [{ kind: "setFlag", flag: doneFlag(r) }] as Effect[] })]
        : [
            go("next", `Go on to ${road.beats[k + 1].name}.`, "quiet", next, {
              requires: [{ kind: "level", min: first + k + 1 }],
              lockedHint: `The next ${road.unit} is not yours yet: you have not come to the ${layerName(first + k + 1)}.`,
            }),
          ]),
      go("rest", pick(road.closing, k), "mercy", hub),
      go("ask", pick(road.closing, k + 1), "truth", hub),
      go("leave", pick(road.closing, k + 2), "quiet", hub),
    ],
  };

  return [entry, ...ways, turn, after, keeper, elder, leaves];
}

/** The Elder’s two replies to a road: the hero spending the realm’s unit, and the hero asking her about it. */
export function buildScenarios(road: Road): NpcScenario[] {
  const r = road.realm;
  return [
    { id: scenarioId("SPEND", r), summary: `The hero spends ${road.cost} on the ${road.short}.`, delta: { trust: 1 }, lines: road.lines.spend },
    { id: scenarioId("ASK", r), summary: `The hero asks the Elder what she would have done with the ${road.short}.`, delta: { trust: 1, respect: 1 }, lines: road.lines.ask },
  ];
}
