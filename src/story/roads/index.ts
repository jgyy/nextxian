import { REALMS } from "@/engine/cultivation";
import type { Choice, NpcScenario, Scene } from "@/engine/types";
import { approachModes, buildReport, buildRoad, doneFlag, fill, reportedFlag, type RoadSpec } from "./build";
import { WAYSIDE_AFTER } from "./lexicon";
import { roadsOne } from "./specs-1";
import { roadsTwo } from "./specs-2";

interface Wayside {
  id: string;
  title: string;
  paragraphs: string[];
  /** The main-line scene the wayside branches from, and returns to. */
  origin: string;
  /** The chapter the wayside belongs to, used to place its group in reading order. */
  chapter: number;
  /** The choice added to the origin scene. */
  label: string;
  /** The realm the cultivator’s way on this wayside’s roads needs. */
  realm: number;
  /** What the Elder says on returning here once the player has finished this many roads. */
  remark: { roads: number; line: string };
}

const WAYSIDES: Wayside[] = [
  {
    id: "wayside_pilgrims",
    title: "Waysides: The Pilgrims’ Road",
    paragraphs: [
      "Below the sect gate a muddy track splits from the stair and winds down through the rain. Pilgrims in straw capes trudge along it, and every few hundred paces a lean-to or a shrine offers shelter and a story.",
      "Four of those stories are worth the walk. You could take any of them and still be back before the gate disciple notices you have gone.",
    ],
    origin: "gate",
    chapter: 1,
    label: "Turn aside before the gate and follow the pilgrims’ road down into the rain.",
    realm: 1,
    remark: { roads: 1, line: "You came back from a road I did not send you down. I find I am not angry, and I find that worth noting." },
  },
  {
    id: "wayside_terrace",
    title: "Waysides: The Terrace Road",
    paragraphs: [
      "Along the rim of the abyss path runs a terrace road that the wardens’ maps leave out. Smugglers, hermits and the occasional lost disciple use it. It smells of sea air, though the sea is two hundred leagues away.",
      "Every few turns, a shrine or a hut leans over the drop. Each has a story, and all of them have something to hide.",
    ],
    origin: "abyss_entry",
    chapter: 2,
    label: "Step off the abyss path onto the terrace road the wardens do not patrol.",
    realm: 1,
    remark: { roads: 3, line: "Three roads, give or take. The people down there have begun to ask who you are. I told them you were a guest, and found I could say it without lying." },
  },
  {
    id: "wayside_scribes",
    title: "Waysides: The Scribes’ Lane",
    paragraphs: [
      "Behind the archive, a lane of ink-stained cottages climbs toward the stacks. The scribes who live here copy for the sect and gossip for themselves, and the lane goes a little too quiet when you mention the sutra.",
      "At the lane’s end four doors stand open. Behind each, someone is working late.",
    ],
    origin: "archive_gate",
    chapter: 3,
    label: "Leave the archive gate and wander down the lane where the scribes live.",
    realm: 1,
    remark: { roads: 5, line: "You are learning the shape of my sect’s borders better than my wardens have. I would be insulted, if I were not so grateful." },
  },
  {
    id: "wayside_lamps",
    title: "Waysides: The Lamp-Sellers’ Row",
    paragraphs: [
      "A narrow row of stalls leads away from the sutra door, each selling something to light the dark: oil, wicks, candles, glass. The sellers hush when a stranger passes, and watch to see which lamp you look at.",
      "Four stalls have their curtains drawn back, and a hand at each beckons you in.",
    ],
    origin: "sutra_door",
    chapter: 4,
    label: "Slip away from the sutra door into the lamp-sellers’ row.",
    realm: 2,
    remark: { roads: 7, line: "The lamp-sellers say you ask good questions and buy nothing. That is the most flattering thing they have ever said of a stranger." },
  },
  {
    id: "wayside_tower",
    title: "Waysides: The Bell Tower Steps",
    paragraphs: [
      "A spiral of stone steps winds around the outside of the bell tower, with a landing at every turn. Apprentices sleep, work and quarrel on the landings, and the whole tower hums when the wind is from the abyss.",
      "Four of the landings have doors, and each door has someone standing behind it.",
    ],
    origin: "sutra_hall",
    chapter: 5,
    label: "Climb the outer steps of the bell tower instead of entering the sutra hall.",
    realm: 2,
    remark: { roads: 10, line: "Ten roads. At this rate you will know my sect better than I do, and I will have to ask you for directions in my own hall." },
  },
  {
    id: "wayside_terraces",
    title: "Waysides: The Orchard Terraces",
    paragraphs: [
      "Past the Jade Eye the hill is stepped into terraces of fruit and honey. The air is warm and thick with ripeness, which is strange this high up, in this season, in this rain.",
      "Four paths lead between the rows. Each has a gate, and each gate is open just wide enough for one person.",
    ],
    origin: "jade_eye_return",
    chapter: 6,
    label: "Wander down into the orchard terraces while the trial waits.",
    realm: 2,
    remark: { roads: 13, line: "You are wearing a track into the map, Wanderer. I hope it leads somewhere, because I have started to depend on it." },
  },
  {
    id: "wayside_gallery",
    title: "Waysides: The Rain Gallery",
    paragraphs: [
      "A covered gallery hangs along the cliff outside the Tribunal, its slate roof chiming under the rain. Clerks, makers and idlers shelter here and talk, and there is nothing they will not trade for news.",
      "Four conversations are going on at once, and each one stops when you look at it.",
    ],
    origin: "tribunal_summons",
    chapter: 7,
    label: "Wait out the summons in the gallery that hangs on the cliff outside the Tribunal.",
    realm: 2,
    remark: { roads: 16, line: "The gallery clerks call you the Law’s wanderer. They do not mean it kindly, and they do not mean it as an insult either." },
  },
  {
    id: "wayside_ash",
    title: "Waysides: The Ash Road",
    paragraphs: [
      "Where the second descent begins, a grey road forks away through fields burned black. Smoke stands on the horizon in pillars, and the road is lined with travellers who say they are going home and walk in the wrong direction.",
      "Four tracks lead off it into the ash. Each has a signpost, and none of the signposts agree.",
    ],
    origin: "descent_return",
    chapter: 8,
    label: "Take the grey fork before the second descent and follow the ash road.",
    realm: 3,
    remark: { roads: 20, line: "Twenty roads. I would give a great deal to have had a wanderer like you thirty years ago, and more to know what you walk toward." },
  },
  {
    id: "wayside_landing",
    title: "Waysides: The Ferry Landing",
    paragraphs: [
      "A path from the mist leads down to a landing of black planks and drifting lanterns. Boats rock on the dark water without a hand to tie them, and a crowd stands on the shore as if waiting for a signal.",
      "Four lanes lead away from the water. Each one smells of something the mist should have taken.",
    ],
    origin: "mist_remembers",
    chapter: 9,
    label: "Follow the lantern light down to the landing before the mist closes in.",
    realm: 3,
    remark: { roads: 25, line: "The Azure Cloud Sect has a long memory, and you have given it a great deal to remember. I hope you will be gentle with what it keeps." },
  },
  {
    id: "wayside_lanterns",
    title: "Waysides: The Last Lanterns",
    paragraphs: [
      "On the way to the sealing altar, a stair of lanterns winds up a side hill toward buildings that keep their own hours. The sect does not mention them, and the lamps along the stair are lit for someone.",
      "There are four doors at the top. You have time for one of them, or for all four, and you cannot be sure which is wiser.",
    ],
    origin: "sealing_night",
    chapter: 10,
    label: "Take the stair of lanterns that winds off the road to the sealing altar.",
    realm: 3,
    remark: { roads: 30, line: "Thirty roads and still you come back up the stair. I do not know whether that makes you loyal or only stubborn. I find I do not mind which." },
  },
];

const SPECS: RoadSpec[] = [...roadsOne, ...roadsTwo];
const PER_WAYSIDE = 4;

function waysideScene(w: Wayside, roads: { spec: RoadSpec; index: number }[]): Scene {
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Take the road to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: doneFlag(spec.id), is: false }],
    lockedHint: "You have already walked this road.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the wayside and return to the road you left.", tone: "quiet", next: w.origin });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    // Once a road is done the wayside remembers whether the Elder was told, one alternative per road.
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag(spec.id) }], paragraphs: [fill(WAYSIDE_AFTER.reported, slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: doneFlag(spec.id) }, { kind: "flag" as const, flag: reportedFlag(spec.id), is: false }],
          paragraphs: [fill(WAYSIDE_AFTER.silent, slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [{ when: [{ kind: "roads", min: w.remark.roads }], line: w.remark.line }],
    choices,
  };
}

/** One group per wayside: the wayside scene and the 100 scenes of its four roads. */
export const roadGroups: { name: string; chapter: number; scenes: Scene[] }[] = WAYSIDES.map((w, n) => {
  const roads = SPECS.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, i) => ({ spec, index: n * PER_WAYSIDE + i }));
  const scenes = [
    waysideScene(w, roads),
    ...roads.flatMap(({ spec, index }) => buildRoad(spec, { index, wayside: w.id, realm: w.realm })),
  ];
  return { name: w.title.replace("Waysides:", "Side Roads:"), chapter: w.chapter, scenes };
});

/** The Elder’s reports on every road. */
export const roadScenarios: Record<string, NpcScenario> = Object.fromEntries(
  WAYSIDES.flatMap((w, n) =>
    SPECS.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, i) => {
      const scenario = buildReport(spec, { index: n * PER_WAYSIDE + i, wayside: w.id, realm: w.realm });
      return [scenario.id, scenario] as const;
    }),
  ),
);

/** The choice each main-line origin scene gains, keyed by the origin scene’s id. */
export const waysideEntrances: Record<string, Choice> = Object.fromEntries(
  WAYSIDES.map((w) => [w.origin, { id: w.id, label: w.label, tone: "quiet", next: w.id } satisfies Choice] as const),
);

/** The realm a wayside’s roads ask for, for tests and docs. */
export const waysideRealms = WAYSIDES.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
