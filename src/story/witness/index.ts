import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildDeedScenario, buildReport5, buildRoad5, WITNESS_WAYSIDE_BASE, witnessDoneFlag, witnessDonePrefix, type RoadContext5, type RoadSpec5 } from "./build";
import { DEEDS, HUB_MOOD, type HubMood } from "./lexicon";
import { witnessSpecs1 } from "./specs-1";
import { witnessSpecs2 } from "./specs-2";
import { witnessSpecs3 } from "./specs-3";
import { witnessSpecs4 } from "./specs-4";
import { witnessSpecs5 } from "./specs-5";

export interface Wayside5 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the roads here ask. */
  realm: number;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/** The ten Witness Roads, in the order of the story. */
export const WAYSIDES5: Wayside5[] = [
  {
    id: "wayside_witness_bench",
    title: "Witness Roads: The Petitioners’ Bench",
    paragraphs: [
      "Under the eaves of the Law Hall a long bench runs the length of the wall, and everyone who has waited for the Elder has waited on it. The people who tend it have waited longest, and kept a record of every one.",
      "Four of them look up as you pass. Each keeps a different book about the same hall, and each has noticed that you were not sent for.",
    ],
    back: "You come back into the Law Hall’s cold lamplight with the bench’s murmur behind you. The Elder has not moved, and the folded ledger on her knee has not been opened.",
    origin: "law_hall",
    label: "Step out under the eaves to the petitioners’ bench, where those who wait on the Elder keep their books.",
    realm: 1,
    flavour: "mountain",
    remark: "The petitioners’ bench. I have sat before it twelve years and never read what is written behind my back. Tell me one thing in your four books that is untrue.",
  },
  {
    id: "wayside_witness_rim",
    title: "Witness Roads: The Rim Huts",
    paragraphs: [
      "Along the ledge above the abyss the sect keeps four huts, one at each turn of the path. Their watchers stare into the mist for a living, and none sleeps through a night.",
      "Four doors stand ajar. The watchers saw you climb, and each has a book that wants one more line.",
    ],
    back: "You come back along the ledge with the huts’ lamps small behind you. Gu Hanzhen is where you left him, and the mist at his knees has not decided whether to come closer.",
    origin: "abyss_truth",
    label: "Follow the ledge to the rim huts, where the sect’s watchers log whatever the abyss sends up.",
    realm: 1,
    flavour: "mountain",
    remark: "The rim huts. I have signed their pay twelve years and never walked out to them. Four of their books now carry your name, and I will have them read to me.",
  },
  {
    id: "wayside_witness_gallery",
    title: "Witness Roads: The Copyists’ Gallery",
    paragraphs: [
      "Above the stacks of the Ash Archive a gallery runs under the roof, where copyists sit in rows making second copies of what the sect decides to keep. A copy is a witness: it says what the original said, and sometimes what it did not.",
      "Four desks have a lamp lit for you.",
    ],
    back: "You climb down from the gallery into the stacks, where the ash still holds your footprints. The pulled scroll leans where you left it, and the lamp has not been righted.",
    origin: "archive_stacks",
    label: "Climb the ladder to the copyists’ gallery above the stacks, where the archive makes its second copies.",
    realm: 2,
    flavour: "mountain",
    remark: "The copyists’ gallery. Lin Yuan says no outsider has been admitted since the Sealing Night. You were admitted to four desks. I wonder who has been copying whom.",
  },
  {
    id: "wayside_witness_landings",
    title: "Witness Roads: The Pilgrim Landings",
    paragraphs: [
      "Every sixty steps the sutra stair widens into a landing, and on each a keeper has made a small trade of remembering who climbed. They cast footprints, count petals, mend flags and wind the water-clock.",
      "Four of them look down at you from the edge. They saw you come up, and are waiting to say so.",
    ],
    back: "You step back onto the lotus stair with the landings’ small noises behind you. The stone bells hang where you left them, and the water in the petals runs on.",
    origin: "sutra_stair",
    label: "Stop at the pilgrim landings along the sutra stair, where keepers have made a trade of remembering who climbed.",
    realm: 2,
    flavour: "mountain",
    remark: "The landings on the stair. I climbed it once, at night, and did not stop. You stopped at four. I am told that is the difference between a pilgrim and a witness.",
  },
  {
    id: "wayside_witness_benches",
    title: "Witness Roads: The Tribunal Benches",
    paragraphs: [
      "At the edge of the white terrace the Tribunal of Bells keeps low benches for witnesses called and not yet heard. A trade has grown among them in what the waiting need to say, to remember, or to forget.",
      "Four keepers have watched you since the crowd turned, and each has written a line about this morning.",
    ],
    back: "You come back to the front of the terrace with the benches’ whispers behind you. Lin Yuan still kneels with his papers held high, and nobody has noticed that you were away.",
    origin: "tribunal_crowd",
    label: "Slip along the white terrace to the tribunal benches, where the waiting witnesses are tended and written down.",
    realm: 2,
    flavour: "mountain",
    remark: "The tribunal benches. Hu Jingyan would give his right hand to know what is written there. Four keepers have told you. Do not tell him.",
  },
  {
    id: "wayside_witness_lanterns",
    title: "Witness Roads: The Parting Lanterns",
    paragraphs: [
      "On the last night before the barge, those who are leaving hang paper lanterns along the lowest wall, one for each year lived on the mountain. Four people read them, because a lantern is a kind of ledger.",
      "They have lit one for you. The paper is blank, and they are waiting to see whom you write on it.",
    ],
    back: "You come back from the lantern wall with the paper glow still in your eyes. The mountain is quieter than you left it, and the barge has not yet come up the river.",
    origin: "departure_entry",
    label: "Walk down to the lantern wall on the last night, where four readers keep the lanterns of those who leave.",
    realm: 2,
    flavour: "mountain",
    remark: "The lantern wall. I wrote nothing on mine in twelve years, so they hung it blank. Four of them read you before you left. I hope the paper was kind.",
  },
  {
    id: "wayside_witness_registry",
    title: "Witness Roads: The Harbour Registry",
    paragraphs: [
      "Behind the customs quay the Salt Coast keeps its Registry: narrow offices where every boat, cargo, net and name that enters the harbour is written once, and sometimes twice. The clerks are witnesses who happen to be paid.",
      "Four stand at their doors. Each has heard of you from a boat, a rumour or a forged chit.",
    ],
    back: "You come back to the quay with the Registry’s ink on your cuffs. The fleet is gone, the bunting is still up, and the tide has not yet turned.",
    origin: "b3_close",
    label: "Go up from the quay to the harbour registry, where the coast writes down everything that comes in on the tide.",
    realm: 3,
    flavour: "road",
    remark: "The Registry. The Concord would hang a clerk for keeping half of what those four keep, and you are entered in all of them. I would very much like to see the page.",
  },
  {
    id: "wayside_witness_fires",
    title: "Witness Roads: The Remembering Fires",
    paragraphs: [
      "At the edge of the grass the Listeners keep four fires that are never allowed to go out, and at each a keeper remembers something different: knots, brands, songs, the names of the dead. Nothing is written. What the fire does not keep, the keeper does.",
      "Four keepers have turned toward you. The grass has said your name for a week.",
    ],
    back: "You come back from the fires with the smoke in your coat. The column is where you left it, and the grass is as quiet as it ever is when it is listening.",
    origin: "b4_close",
    label: "Walk out to the remembering fires at the edge of the grass, where the Listeners keep what is never written.",
    realm: 4,
    flavour: "road",
    remark: "The remembering fires. Tamar would not tell me what is kept there, and four of her keepers told you. I will ask you in a year, when it has stopped mattering.",
  },
  {
    id: "wayside_witness_landings9",
    title: "Witness Roads: The Landing Sentences",
    paragraphs: [
      "On each of the Nine Tiers a sentence is cut into the glass that the founders would not say anywhere else, and on each landing a copyist is paid to keep it clean. They know what it costs to climb past.",
      "Four keepers have put down their cloths to watch the climber who stopped.",
    ],
    back: "You come back to the stair with the sentences’ cold behind you. The pilgrims climb in their white thread, and the glass answers each tread with the note it has been waiting to sound.",
    origin: "tiers_entry",
    label: "Stop on a landing of the Nine Tiers, where the keepers of the cut sentences wipe the glass and watch who climbs.",
    realm: 5,
    flavour: "road",
    remark: "The landing sentences. I have read them in the founders’ record and never dared stand before them. You have stood before four. Keep what they said, and tell me when you can bear to.",
  },
  {
    id: "wayside_witness_doors",
    title: "Witness Roads: The Doors Before the Ninth",
    paragraphs: [
      "Between the cellar under the Law Hall and the ninth door the stair passes alcoves where the sect kept its last witnesses: people sent to watch the doors and never recalled. They have had fifteen years to read what the doors say.",
      "Four alcoves hold a lamp lit for you.",
    ],
    back: "You climb back to the stair with the alcoves’ small lights behind you. The nine doors stand where you left them, and the cold that breathes up the stair has not changed its rhythm.",
    origin: "depths_entry",
    label: "Turn aside at the alcoves on the stair to the nine doors, where the last of the sect’s witnesses keep their lamps.",
    realm: 6,
    flavour: "road",
    remark: "The alcoves under the Hall. I sent them down. I signed every name and never went to see them. Tell me their names, and I will write them in the second ledger.",
  },
];

const SPECS5: RoadSpec5[] = [...witnessSpecs1, ...witnessSpecs2, ...witnessSpecs3, ...witnessSpecs4, ...witnessSpecs5];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 79 to pick wording; the Witness Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 80;
export const BACK5 = (origin: string) => `back5_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES5.filter((_, n) => SPECS5.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS5.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: RoadSpec5; ctx: RoadContext5 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: WITNESS_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

/** The face the Elder shows decides which of four short lines she says when the hero stops at the hub. */
const HUB_FACE: [HubMood, Condition][] = [
  ["furious", { kind: "mood", is: "furious" }],
  ["afraid", { kind: "mood", is: "afraid" }],
  ["suspicious", { kind: "mood", is: "suspicious" }],
  ["tender", { kind: "mood", is: "tender" }],
];

/** Each wayside takes the line of its own number from each pool, so the ten hubs do not say the same thing. */
function hubLine(mood: HubMood, n: number): string {
  return HUB_MOOD[mood][n % HUB_MOOD[mood].length];
}

function waysideScene5(w: Wayside5, n: number, roads: { spec: RoadSpec5; index: number }[]): Scene {
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: witnessDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already been written down here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their books and go back to where you left the road.", tone: "quiet", next: BACK5(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: witnessDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...HUB_FACE.map(([mood, when]) => ({ when: [when], line: hubLine(mood, n) })),
      { when: [{ kind: "count", prefix: witnessDonePrefix(n + 1), min: PER_WAYSIDE }], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack5(w: Wayside5, origin: Scene): Scene {
  return {
    id: BACK5(w.origin),
    title: `Back from ${w.title.replace("Witness Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the 100 scenes of its four roads. */
export const witnessGroups: { name: string; wayside: Wayside5; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene5(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad5(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s reports on every Witness Road, and her answer to each of the four deeds on each. */
export const witnessScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => {
    const report = buildReport5(spec, ctx);
    return [[report.id, report] as const, ...DEEDS.map((deed) => {
      const scenario = buildDeedScenario(deed, spec, ctx);
      return [scenario.id, scenario] as const;
    })];
  }),
);

/** The goods and holdings of every Witness Road. */
export const witnessItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(spec, ctx).id, wareItem(spec, ctx)]));
export const witnessAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(spec, ctx).id, holdingAsset(spec, ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const witnessEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const witnessRoadRealms = WAYSIDES5.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
export { SPECS5 };
