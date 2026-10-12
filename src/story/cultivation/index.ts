import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { PRACTICES } from "@/engine/practice";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import {
  buildPracticeScenario,
  buildReport6,
  buildRoad6,
  CULTIVATION_WAYSIDE_BASE,
  cultivationDoneFlag,
  cultivationDonePrefix,
  retreatFlag,
  type RoadContext6,
  type RoadSpec6,
} from "./build";
import { HUB_MOOD, type HubMood } from "./lexicon";
import { cultivationSpecs1 } from "./specs-1";
import { cultivationSpecs2 } from "./specs-2";
import { cultivationSpecs3 } from "./specs-3";
import { cultivationSpecs4 } from "./specs-4";
import { cultivationSpecs5 } from "./specs-5";

export interface Wayside6 {
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

/** The ten Cultivation Roads, in the order of the story. */
export const WAYSIDES6: Wayside6[] = [
  {
    id: "wayside_cultivation_roof",
    title: "Cultivation Roads: The Roof-Sitters",
    paragraphs: [
      "Along the ridge of the Ash Archive’s roof the sect has worn four sitting-places into the tiles. They are tended by people who have sat on this roof so long that the rain no longer wets them.",
      "Four of them look down as you stand on the ridge. They saw you set your palms on the tiles.",
    ],
    back: "You climb down from the ridge with the wet of the tiles in your sleeves. The archive’s roof is quiet behind you, and the rain has not stopped for you, nor for anyone.",
    origin: "archive_roof",
    label: "Climb to the sitting-places along the ridge, where the sect’s oldest cultivators breathe against the rain.",
    realm: 1,
    flavour: "mountain",
    remark: "The archive roof. I sat on it once, as a girl, and was found at dawn with blue lips. Four of its sitters have your name now. I hope they were kinder than the tiles.",
  },
  {
    id: "wayside_cultivation_terraces",
    title: "Cultivation Roads: The Eastern Terraces",
    paragraphs: [
      "Below the old master’s hut the eastern peak has been cut into four terraces, each a step of the same slow lesson. A recluse keeps each one, and none of them speaks to the others. They all speak to anyone who sits.",
      "Four mats are laid out in the light. Each recluse has noticed that you listened to the old master, and each would like to hear what you made of it.",
    ],
    back: "You come back to the old master’s hut with the terraces’ stillness in your bones. The tea has gone cold in the cup, and the lesson he gave you is still waiting where you left it.",
    origin: "hermit_lesson",
    label: "Follow the path down the eastern peak to the four terraces, where the old master’s neighbours keep their separate lessons.",
    realm: 1,
    flavour: "mountain",
    remark: "The eastern terraces. I climbed so far to be told so little, and understood later that the little mattered. Four recluses have sat you down. What did they leave unsaid?",
  },
  {
    id: "wayside_cultivation_mirrors",
    title: "Cultivation Roads: The Mirror Cells",
    paragraphs: [
      "Behind the jade mirror in the sutra hall, four cells run back into the rock, each with a looking-glass of polished stone set in the wall. Disciples go in to see their own dantian. Some come out able to describe it.",
      "Four attendants wait in the cells’ doorways. They watched you stare into the mirror in the hall, and they know what you were looking for.",
    ],
    back: "You come back into the hall with your own face still in your eyes. The jade mirror lies where you left it, and the lamps have not moved, and you are, in some small way, a person who has looked.",
    origin: "sutra_hall_2",
    label: "Go round behind the jade mirror to the four cells, where disciples go to look at their own dantian.",
    realm: 2,
    flavour: "mountain",
    remark: "The mirror cells. I looked once, at nineteen, and have never been able to describe what I saw. Four attendants have kept your face in the glass. I am afraid to ask what it shows.",
  },
  {
    id: "wayside_cultivation_court",
    title: "Cultivation Roads: The Tempering Courts",
    paragraphs: [
      "Off the main sparring court the sect keeps four smaller yards where nobody spars. They are for tempering: the slow, hard, private work of making a body fit for the qi that will be poured into it. The work is done at dawn and no one talks about it.",
      "Four yards stand open. The masters who keep them watched the bout you saw, and they think you have not yet seen what the courts are for.",
    ],
    back: "You walk back into the sparring court with your muscles still humming. The bouts go on without you, loud and bright, and none of the fighters know what the quiet yards are for.",
    origin: "court_watch",
    label: "Slip behind the sparring court to the four tempering yards, where the body is made ready for the qi.",
    realm: 2,
    flavour: "mountain",
    remark: "The tempering yards. They are the one part of this mountain I have never made a rule about. Four masters have worked you at dawn. Can you still lift a cup?",
  },
  {
    id: "wayside_cultivation_seats",
    title: "Cultivation Roads: The Rented Hours",
    paragraphs: [
      "Qinglian Ford sells everything by the hour, and the quiet rooms where qi lies thick are no exception. A street of seat-houses runs behind the Water Gate, each with a bell and a price chalked on a slate.",
      "Four doors are open. The proprietors saw the barge come in, and know what you will pay for the right chair.",
    ],
    back: "You step back into the din of the ford with the seat-houses’ hush still in your head. The barge-horns sound again, and a vendor shouts the price of eels, and the city is as loud as if nothing had been rented.",
    origin: "qing_arrive",
    label: "Turn into the street of seat-houses behind the Water Gate, where Qinglian Ford rents out hours of thick qi by the chair.",
    realm: 2,
    flavour: "road",
    remark: "The seat-houses. The Concord taxes them, and I have been to two, in disguise, on the Law’s account. Four houses have you down for an hour. I hope you were overcharged. It builds character.",
  },
  {
    id: "wayside_cultivation_tide",
    title: "Cultivation Roads: The Tide Retreats",
    paragraphs: [
      "Where the sea-steps of Tidewall go down to the water, four huts have been built for those who sit through a full turn of the tide. The sea will not wait for you to be ready.",
      "Four doors are propped open to the wind. The keepers watched you sit on the steps, and have each been counting your breaths against the sea’s.",
    ],
    back: "You climb back up the sea-steps with the tide in your ears. The wall is where you left it, and the names cut in it have not changed, and the ebb goes on without you.",
    origin: "still_hub_b3_coast",
    label: "Walk down the sea-steps to the four huts at the water’s edge, where cultivators sit out a whole turn of the tide.",
    realm: 3,
    flavour: "road",
    remark: "The tide retreats. I do not like the sea, and four of its keepers have taught you to breathe by it. I should like it not to be explained in any detail.",
  },
  {
    id: "wayside_cultivation_hush",
    title: "Cultivation Roads: The Hush Retreats",
    paragraphs: [
      "At noon the Garrison bell tolls and the Hush falls, and the wind goes deaf until dusk. The Listeners have built four shelters in the grass where cultivators learn to work through it, to find what is left of a person when the world stops answering.",
      "Four shelters stand open. The keepers watched you sit through a Hush before, and each has chosen a different way to teach you.",
    ],
    back: "You walk back from the shelters as the Hush lifts, and the wind returns all at once like a crowd. The column is where you left it, and the grass is as loud as it has ever been.",
    origin: "still_hub_b4_b",
    label: "Walk out into the grass to the four shelters of the Hush, where Listeners teach cultivators to work while the wind is deaf.",
    realm: 4,
    flavour: "road",
    remark: "The Hush retreats. The Listeners would not tell me what they teach there, and four of them have taught you. I will not ask. Can it be unlearned?",
  },
  {
    id: "wayside_cultivation_plates",
    title: "Cultivation Roads: The Annealing Plates",
    paragraphs: [
      "On the Glass Sea the old plates are never wholly cold. In the lee, four have been worn smooth by people who lie down on them and let the slow heat of the glass go into the body. They call it annealing.",
      "Four plates lie warm in the light. Their tenders looked up when you anchored, and each has a place for you.",
    ],
    back: "You climb back aboard with the plates’ warmth in your spine. The skiffs rock in the lee, and the Sea hums its great low note, and the glass under your feet is just glass again.",
    origin: "still_hub_b5_a",
    label: "Step off the skiff onto the four warm plates in the lee, where cultivators lie down to be annealed by the Glass Sea.",
    realm: 5,
    flavour: "road",
    remark: "The annealing plates. I am told they are the one gentle place on the Sea. Four keepers have laid you out on them. I cannot tell whether to envy you or the plates.",
  },
  {
    id: "wayside_cultivation_landing",
    title: "Cultivation Roads: The Tribulation Landing",
    paragraphs: [
      "Between the sixth tier and the seventh, the Stair widens into a landing where those who mean to go higher come to be examined by the people who keep the gates. It is not a gate yet. It is where the Stair asks, quietly, whether you intend to try.",
      "Four examiners rise from their benches as you reach the landing. They have each waited a long time for someone who sat down there on purpose.",
    ],
    back: "You step back onto the Stair with the landing’s hard questions still ringing. The glass treads sound their notes under the pilgrims’ feet, and the next tier is exactly as far above you as it was.",
    origin: "still_hub_b5_c",
    label: "Stop on the landing between the sixth tier and the seventh, where the keepers of the Stair examine those who mean to go higher.",
    realm: 5,
    flavour: "road",
    remark: "The tribulation landing. I have sat below it and heard the questions asked. Four examiners have asked them of you. Tell me which you could not answer.",
  },
  {
    id: "wayside_cultivation_thresholds",
    title: "Cultivation Roads: The Terrace Thresholds",
    paragraphs: [
      "In the tea-terraces below the mountain four stone thresholds have been laid in the hillside, attached to no wall. Cultivators come in the last year before a crossing, and are taught how to stand in a doorway.",
      "Four keepers wait at four doors that lead nowhere. They watched you come up from the Sea, and expected someone who would ask the right question.",
    ],
    back: "You come back to the terraces’ tea-rows with the thresholds’ quiet behind you. The mountain breathes down on the road, and the thing that waits at the top is no nearer than it was, and no farther.",
    origin: "still_hub_b6",
    label: "Walk up between the tea-rows to the four stone thresholds, where cultivators learn how to stand in a doorway before they cross.",
    realm: 6,
    flavour: "road",
    remark: "The terrace thresholds. I walked past them as a girl and thought them a garden. Four keepers have taught you what they are. Do not tell me what stands beyond.",
  },
];

const SPECS6: RoadSpec6[] = [...cultivationSpecs1, ...cultivationSpecs2, ...cultivationSpecs3, ...cultivationSpecs4, ...cultivationSpecs5];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 119 to pick wording; the Cultivation Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 120;
export const BACK6 = (origin: string) => `back6_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES6.filter((_, n) => SPECS6.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS6.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: RoadSpec6; ctx: RoadContext6 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: CULTIVATION_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
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

/** What a night in a wayside’s retreat gives: eight points and four for every realm the roads ask, once. */
export const retreatGain = (realm: number) => 8 + 4 * realm;

function waysideScene6(w: Wayside6, n: number, roads: { spec: RoadSpec6; index: number }[]): Scene {
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: cultivationDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({
    id: "retreat",
    label: "Sit the night out in the retreat-hut by the grounds, and let the day’s work settle into the qi.",
    tone: "quiet",
    next: w.id,
    requires: [{ kind: "count", prefix: cultivationDonePrefix(n + 1), min: 1 }, { kind: "flag", flag: retreatFlag(n + 1), is: false }],
    lockedHint: "Work one of the grounds first. A night in the hut is for settling what you have done. You may sit only one night here.",
    effects: [{ kind: "setFlag", flag: retreatFlag(n + 1) }, { kind: "addCultivation", amount: retreatGain(w.realm) }, { kind: "addStat", stat: "qi", amount: 4 }],
  });
  choices.push({ id: "back_to_road", label: "Leave the keepers to their grounds and go back to where you left the road.", tone: "quiet", next: BACK6(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: cultivationDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...HUB_FACE.map(([mood, when]) => ({ when: [when], line: hubLine(mood, n) })),
      { when: [{ kind: "count", prefix: cultivationDonePrefix(n + 1), min: PER_WAYSIDE }], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack6(w: Wayside6, origin: Scene): Scene {
  return {
    id: BACK6(w.origin),
    title: `Back from ${w.title.replace("Cultivation Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the 100 scenes of its four roads. */
export const cultivationGroups: { name: string; wayside: Wayside6; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene6(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad6(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s reports on every Cultivation Road, and her answer to each of the four practices on each. */
export const cultivationScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => {
    const report = buildReport6(spec, ctx);
    return [[report.id, report] as const, ...PRACTICES.map((practice) => {
      const scenario = buildPracticeScenario(practice, spec, ctx);
      return [scenario.id, scenario] as const;
    })];
  }),
);

/** The goods and holdings of every Cultivation Road. */
export const cultivationItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(spec, ctx).id, wareItem(spec, ctx)]));
export const cultivationAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(spec, ctx).id, holdingAsset(spec, ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const cultivationEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const cultivationRoadRealms = WAYSIDES6.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
export { SPECS6 };
