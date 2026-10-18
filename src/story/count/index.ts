import { REALMS } from "@/engine/cultivation";
import { layerName, levelOf } from "@/engine/stages";
import type { Choice, Condition, NpcScenario, Scene } from "@/engine/types";
import { BACK16, BEATS_PER_ROAD, beatFlag, buildBeat, buildScenarios, doneFlag, hubId, sceneId } from "./build";
import type { Road } from "./spec";
import { road0 } from "./road-0";
import { road1 } from "./road-1";
import { road2 } from "./road-2";
import { road3 } from "./road-3";
import { road4 } from "./road-4";
import { road5 } from "./road-5";
import { road6 } from "./road-6";
import { road7 } from "./road-7";
import { road8 } from "./road-8";
import { road9 } from "./road-9";

export { BACK16, BEATS_PER_ROAD, hubId };

/** The ten Long Count roads, one for each major realm, lowest first. */
export const ROADS: Road[] = [road0, road1, road2, road3, road4, road5, road6, road7, road8, road9];

const TALLY = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "all ten"];

/** A road’s hub. Its ten choices are the ten units of the realm’s time, and a unit opens once the hero has reached the layer it stands on. */
function hubScene(road: Road): Scene {
  const r = road.realm;
  const first = levelOf(r, 0);
  const choices: Choice[] = road.beats.map((beat, k) => ({
    id: `go_${k}`,
    label: `Go to ${beat.name} (${road.cost}).`,
    tone: "inquiry",
    next: sceneId(r, k, "a"),
    // A unit is spent after the one before it: the leaves of a beat count the ones behind it, and the keeper and the apprentice have grown by them.
    requires: [{ kind: "level", min: first + k }, ...(k > 0 ? [{ kind: "flag", flag: beatFlag(r, k - 1) } as Condition] : [])],
    lockedHint: k === 0 ? `You have not yet come to the ${layerName(first)}.` : `Not yet open: it asks the ${layerName(first + k)}, and ${road.beats[k - 1].name} spent before it.`,
  }));
  choices.push({ id: "back_to_road", label: "Leave the count and go back to where you left the road.", tone: "quiet", next: BACK16(road.hub.origin) });
  const prefix = `cnb${r}_`;
  return {
    id: hubId(r),
    title: road.hub.title,
    paragraphs: road.hub.paragraphs,
    extras: [
      ...(r > 0 ? [{ when: [{ kind: "realm", max: r - 1 } as Condition], paragraphs: ["This road lies above you. Its beats open only as far as the layers you have reached."], group: "here" }] : []),
      ...Array.from({ length: BEATS_PER_ROAD }, (_, n) => ({
        when: [{ kind: "count", prefix, min: n + 1, max: n + 1 } as Condition],
        paragraphs: [n + 1 === BEATS_PER_ROAD ? `Every ${road.unit} of the count has gone by in you. The road keeps all ten.` : `You have spent ${TALLY[n + 1]} of the ten ${road.unit}s on this road.`],
        group: "tally",
      })),
      ...(r < REALMS.length - 1 ? [{ when: [{ kind: "realm", min: r + 1 } as Condition], paragraphs: ["You have gone beyond this road, and read its count from above."], group: "here" }] : []),
    ],
    interjections: [{ when: [{ kind: "flag", flag: doneFlag(r) }], line: road.hub.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a road, so the opening of the origin is not read twice. */
export function waysideBack16(road: Road, origin: Scene): Scene {
  return {
    id: BACK16(road.hub.origin),
    title: `Back from ${road.short.replace(/^The /, "the ")}`,
    paragraphs: [road.hub.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per road: the hub scene and the hundred scenes of its ten units. */
export const countGroups: { name: string; wayside: { origin: string }; road: Road; scenes: Scene[] }[] = ROADS.map((road) => ({
  name: road.hub.title,
  wayside: { origin: road.hub.origin },
  road,
  scenes: [hubScene(road), ...Array.from({ length: BEATS_PER_ROAD }, (_, k) => buildBeat(road, k)).flat()],
}));

/** The Elder’s two replies on every road. */
export const countScenarios: Record<string, NpcScenario> = Object.fromEntries(ROADS.flatMap(buildScenarios).map((s) => [s.id, s] as const));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const countEntrances: Record<string, Choice> = Object.fromEntries(
  ROADS.map((road) => [road.hub.origin, { id: hubId(road.realm), label: road.hub.label, tone: "inquiry", next: hubId(road.realm) } satisfies Choice] as const),
);

export { beatFlag, doneFlag };
