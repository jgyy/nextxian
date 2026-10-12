import { REALMS } from "@/engine/cultivation";
import type { Element } from "@/engine/path";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildForkScenario, buildReport7, buildRoad7, PATH_DONE_ANY, PATH_WAYSIDE_BASE, pathDoneFlag, pathDonePrefix, synthesize, type RoadContext7 } from "./build";
import type { Fork } from "./lexicon-elder";
import type { CrossingSpec } from "./spec";
import { crossingSpecs1 } from "./specs-1";
import { crossingSpecs2 } from "./specs-2";
import { crossingSpecs3 } from "./specs-3";
import { crossingSpecs4 } from "./specs-4";
import { crossingSpecs5 } from "./specs-5";

export interface Wayside7 {
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
  /** The element all four roads here work. */
  element: Element;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/**
 * The ten Crossing Roads, in the order of the story. Each wayside belongs to one element, and holds four roads, one for each of four crafts: the making
 * crafts (pill, forge, talisman, array) in the first five, the walking ones (beast, sword, healing, fate) in the last five.
 */
export const WAYSIDES7: Wayside7[] = [
  {
    id: "wayside_crossing_wood_a",
    title: "Crossing Roads: The Greenhouses Behind the Archive",
    paragraphs: [
      "Behind the Ash Archive’s kitchens the sect grows what the making crafts need: mulberry for pills, ash for hafts, pulp for talismans, hedge for the outer array.",
      "Four keepers work the green at their own trades. The archive has bought their paper and kindling for three generations, and each would like to show you where wood meets craft.",
    ],
    back: "You come back to the keeper’s passage with sap on your sleeves. The archive’s dust is as dry as ever behind you, and the green has not stopped growing in your absence.",
    origin: "archive_clerk",
    label: "Slip out of the keeper’s passage to the greenhouses behind the archive, where four keepers grow the wood their crafts are made of.",
    realm: 1,
    element: "wood",
    flavour: "mountain",
    remark: "The greenhouses. I buy my tea from the first of them and my silence from the last. Four keepers have shown you what wood is for. Which of them knew what you were?",
  },
  {
    id: "wayside_crossing_fire_a",
    title: "Crossing Roads: The Vault Furnaces",
    paragraphs: [
      "Below the cellar vault, the sect keeps its fires: a cauldron, a bloomery, a press, a beacon. They are the hottest rooms on the mountain, and the least visited.",
      "Four keepers tend them and share a dislike of company. They watched you come down the cellar stair, and have each decided to be interested.",
    ],
    back: "You climb back up the cellar stair with the furnaces’ heat in your face. The vault is cold and quiet again, and its door has swung shut on all four fires.",
    origin: "archive_vault",
    label: "Go down past the cellar vault to the furnaces, where four keepers work fire into pill, iron, seal and signal.",
    realm: 1,
    element: "fire",
    flavour: "mountain",
    remark: "The vault furnaces. I have never been down there without losing an eyebrow. Four keepers have burnt your hands to teach you. Show me what they left.",
  },
  {
    id: "wayside_crossing_earth_a",
    title: "Crossing Roads: The Clay Courts",
    paragraphs: [
      "Below the sutra door the sect has dug four yards into the hillside: a kiln, an ore-hall, a carvers’ yard, a ring of stakes. Each one is a lesson that earth teaches.",
      "Four keepers wait in the yards, stained to the elbow with the hill. They heard that you stood a while in Gu Hanzhen’s cell, and that earth is patient.",
    ],
    back: "You climb back to Gu’s lamplight with clay under your nails. The cell is as you left it, and the hill below is quiet, and heavier than it was.",
    origin: "sutra_gu_cell",
    label: "Go down the slope below the sutra door to the four clay yards, where earth is baked, sorted, carved and staked.",
    realm: 2,
    element: "earth",
    flavour: "mountain",
    remark: "The clay courts. I laid a stake there once, as a girl, and am told it still holds. Four keepers have put their hands to you. Did anything settle?",
  },
  {
    id: "wayside_crossing_metal_a",
    title: "Crossing Roads: The Bright Yards",
    paragraphs: [
      "Behind the memorial hall a lane of narrow shops rings with small, exact sounds: an alembic, a needle-smith’s hammers, a beater of foil, a hum of silver wire.",
      "Four keepers look up as you pass. They keep the memorial’s metal bright, and each of them has heard what was scraped from the tablet.",
    ],
    back: "You come back to the tablet with a ringing in your ears. The hollow in the paint still waits where you left it, and the lane behind you has not stopped its tiny music.",
    origin: "jade_eye_tablets",
    label: "Walk round behind the memorial hall to the lane of bright yards, where four keepers draw, beat and tune metal.",
    realm: 2,
    element: "metal",
    flavour: "mountain",
    remark: "The bright yards. I do not enter them without taking out my earrings. Four keepers have heard you ring. What note was it?",
  },
  {
    id: "wayside_crossing_water_a",
    title: "Crossing Roads: The Wash-Houses",
    paragraphs: [
      "Behind the Hall of Bells its roof drains into a yard of cisterns, troughs, vats and sluices. It is the only part of the tribunal where anything is washed.",
      "Four keepers work the water at their trades. They stood at the back of the terrace when the testimony began, and each has an opinion of how it will end.",
    ],
    back: "You come back to the terrace with your sleeves damp. The silent bell hangs where you left it, and the water in the yard runs on, and does not take sides.",
    origin: "tribunal_testimony",
    label: "Slip out the back of the tribunal to the wash-houses, where four keepers brew, quench, steep and sluice with the roof’s own water.",
    realm: 2,
    element: "water",
    flavour: "mountain",
    remark: "The wash-houses. I have heard more truth there than in the hall, from people with their arms in a trough. Four keepers have washed you. Were you clean?",
  },
  {
    id: "wayside_crossing_wood_b",
    title: "Crossing Roads: The Willow Yards",
    paragraphs: [
      "In the ledger-city the canal banks are lined with willow, and under the willows four yards keep what walks: herons, a bamboo ring, a bark ward, a casting grove.",
      "Four keepers stand in the green shade. They saw you come in on a night of stillness, and have each guessed what you walked in with.",
    ],
    back: "You come back to the city’s lamps with willow in your hair. The canal is where you left it, and the ledgers in the houses behind you have not been told where you went.",
    origin: "still_hub_b2_city",
    label: "Walk along the canal under the willows to the four yards, where the city keeps its herons, swords, healers and casters of yarrow.",
    realm: 3,
    element: "wood",
    flavour: "road",
    remark: "The willow yards. I would not live among them, and would not live without them. Four keepers have shown you what walks under the green. Which followed you home?",
  },
  {
    id: "wayside_crossing_fire_b",
    title: "Crossing Roads: The Salt Hearths",
    paragraphs: [
      "Beyond the drowned coast’s salt-pans, four fires burn in the dunes: a kennel of red hounds, a ring of burning swords, a house of smoke, a hut of cracked shell.",
      "Four keepers sit by them. Mother Tiao has told the whole shore that the company is choosing a road home, and each keeper would like the traveller to take something of the coast along.",
    ],
    back: "You come back to the Ferryman’s Rest with smoke in your clothes. Hao Lan has not finished the map, Madam Ash has not moved, and the tide is coming in over the places where the fires were.",
    origin: "b3_close3",
    label: "Leave Hao Lan to her map and cross the dunes beyond the salt-pans to the four hearths, where the coast keeps hounds, brand-dancers, burners of mugwort and readers of cracks.",
    realm: 3,
    element: "fire",
    flavour: "road",
    remark: "The salt hearths. I have a scar from the third and a debt to the first. Four keepers have lit you. Do you still smell of smoke?",
  },
  {
    id: "wayside_crossing_earth_b",
    title: "Crossing Roads: The Camps of the Steppe",
    paragraphs: [
      "On the Ash Steppe the camps keep four trades of earth: horses, stance, bone and ground. Each is a tent or a yard, and none is hard to find.",
      "Four keepers wait at their doors. The wind brought word that someone walked into the camp from the south, and they have each been curious since.",
    ],
    back: "You ride back to the camp’s edge with dust to the knee. The wind has dropped, and the grass lies low to the sky, and the tents behind you are as quiet as stones.",
    origin: "still_hub_b4_a",
    label: "Walk out across the grass to the four tents and yards, where the steppe keeps its horses, stances, bones and maps of the ground.",
    realm: 4,
    element: "earth",
    flavour: "road",
    remark: "The camps of the steppe. I rode there once, badly. Four keepers have put you in the saddle, on your feet and under the sky. Where did you land?",
  },
  {
    id: "wayside_crossing_metal_b",
    title: "Crossing Roads: The Bright Rim",
    paragraphs: [
      "On the glass rim beside the camp four halls ring in the wind: a mews of iron hawks, a yard of whetstones, a house of needles, a hall of bells.",
      "Four keepers stand in their doors. They watched you carry your mat out of the camp’s roar, and each has already guessed whether you can be taught.",
    ],
    back: "You come back to your mat with the shore’s ringing in your teeth. The camp roars on around you, and the glass is just glass again, and very bright.",
    origin: "still_hub_b5_b",
    label: "Leave the camp’s roar for the bright halls along the rim, where four keepers fly hawks, sharpen edges, set needles and strike bells.",
    realm: 5,
    element: "metal",
    flavour: "road",
    remark: "The bright rim. I am told the bells there ring a note no one can name. Four keepers have heard yours. What did they call it?",
  },
  {
    id: "wayside_crossing_water_b",
    title: "Crossing Roads: The Pools Below the Ledge",
    paragraphs: [
      "In a cleft below the ledge the rock opens into pools: a deep for the old beasts, a run for the sword, a spring for the grieving, a terrace of still basins.",
      "Four keepers wait by the water. They have each been told that someone is coming down from the ledge on purpose, and each has laid out a cup.",
    ],
    back: "You climb away from the pools with the cold of the water in your hands. The Elder has not moved from the edge, the comb turns on its thread, and the sound of the springs follows you up to the camp.",
    origin: "depths_close",
    label: "Climb down from the camp to the pools in the cleft below the ledge, where four keepers tend the old beasts, the running sword, the mourning spring and the basins of dusk.",
    realm: 6,
    element: "water",
    flavour: "road",
    remark: "The pools below the ledge. I drank from the spring once and slept for two days. Four keepers have given you water. Which of them gave you the last of it?",
  },
];

const SPECS7: CrossingSpec[] = [...crossingSpecs1, ...crossingSpecs2, ...crossingSpecs3, ...crossingSpecs4, ...crossingSpecs5];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 159 to pick wording; the Crossing Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 160;
export const BACK7 = (origin: string) => `back7_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES7.filter((_, n) => SPECS7.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS7.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: CrossingSpec; ctx: RoadContext7 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: PATH_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

type HubMood = "furious" | "afraid" | "suspicious" | "tender";
/** The Elder’s short word at the hub when her face is not stern, by the face and the element of the wayside. Fourteen words or fewer each. */
const HUB_MOOD: Record<HubMood, Record<Element, string>> = {
  furious: {
    wood: "Do not bring the greenhouse’s dirt on to my carpet. Or your opinions of it.",
    fire: "I smell smoke on you, and I am in no mood for an explanation.",
    earth: "Clay on the stair, and a face like a closed door. Say what you want.",
    metal: "Something rings when you move. I would prefer that you did not.",
    water: "You are dripping on the floor. I am in no state to forgive that.",
  },
  afraid: {
    wood: "Whatever grows down there, please do not tell me what it wants.",
    fire: "Those furnaces do not like to be left alone. I find I do not either.",
    earth: "The ground is heavier tonight. I would sooner you did not go down.",
    metal: "I hear the wires from here. I should rather not know what they say.",
    water: "The water down there is very still. I do not like how still.",
  },
  suspicious: {
    wood: "Four keepers of green things, and you stood in the middle. Why?",
    fire: "Four fires, and not one of them has burned you. How very careful.",
    earth: "Four yards of clay, and you came back with clean boots. Explain.",
    metal: "Four shops of bright things, and you chose none by accident. Which?",
    water: "Four wet corners, and you stayed dry. I should like to know how.",
  },
  tender: {
    wood: "Come in and sit. The green will keep, and so will I.",
    fire: "Warm yourself. The furnaces are kinder from a chair.",
    earth: "Sit down a moment. The hill is patient, and so, tonight, am I.",
    metal: "Listen with me a moment. It is quietest just after the ringing stops.",
    water: "Here, drink. The water is only water, and you look thirsty.",
  },
};

function waysideScene7(w: Wayside7, n: number, roads: { spec: CrossingSpec; index: number }[]): Scene {
  const face: [HubMood, Condition][] = [
    ["furious", { kind: "mood", is: "furious" }],
    ["afraid", { kind: "mood", is: "afraid" }],
    ["suspicious", { kind: "mood", is: "suspicious" }],
    ["tender", { kind: "mood", is: "tender" }],
  ];
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: pathDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their trades and go back to where you left the road.", tone: "quiet", next: BACK7(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: pathDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...face.map(([mood, when]) => ({ when: [when], line: HUB_MOOD[mood][w.element] })),
      { when: [{ kind: "count", prefix: pathDonePrefix(n + 1), min: PER_WAYSIDE } as Condition], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack7(w: Wayside7, origin: Scene): Scene {
  return {
    id: BACK7(w.origin),
    title: `Back from ${w.title.replace("Crossing Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the scenes of its four roads. */
export const crossingGroups: { name: string; wayside: Wayside7; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene7(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad7(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

const FORKS: Fork[] = ["gender", "root", "skill"];

/** The Elder’s report on every Crossing Road, and her answer to each of its three doors. */
export const crossingScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => {
    const report = buildReport7(spec, ctx);
    return [[report.id, report] as const, ...FORKS.map((fork) => {
      const scenario = buildForkScenario(fork, spec, ctx);
      return [scenario.id, scenario] as const;
    })];
  }),
);

/** The goods and holdings of every Crossing Road. */
export const crossingItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(synthesize(spec), ctx).id, wareItem(synthesize(spec), ctx)]));
export const crossingAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(synthesize(spec), ctx).id, holdingAsset(synthesize(spec), ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const crossingEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const crossingRoadRealms = WAYSIDES7.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, element: w.element }));
export { SPECS7, PATH_DONE_ANY };
