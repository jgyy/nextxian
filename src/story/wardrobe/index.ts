import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildReport12, buildRoad12, synthesize, WARD_WAYSIDE_BASE, wardDoneFlag, wardDonePrefix, type RoadContext12 } from "./build";
import type { CraftId } from "./lexicon-craft";
import { CRAFT_IDS } from "./lexicon-craft";
import type { WardSpec } from "./spec";
import { wardSpecs1 } from "./specs-1";
import { wardSpecs2 } from "./specs-2";
import { wardSpecs3 } from "./specs-3";
import { wardSpecs4 } from "./specs-4";

export interface Wayside12 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the craft stands at the top of. */
  realm: number;
  craft: CraftId;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/**
 * The eight Wardrobe Roads, in the order of the realms. Each wayside belongs to one craft of dress, from the hemp of the washing-stair to the cloth with no
 * seam, and holds four roads, one for each of four keepers: an appraiser who prices the cloth, a warden of the sumptuary rules, a masker who lends faces and
 * a mender who keeps what cloth remembers. Each keeper reads the dress the hero has on, and a counter at the back of every road lets a hero change it.
 */
export const WAYSIDES12: Wayside12[] = [
  {
    id: "wayside_ward_hemp",
    title: "Wardrobe Roads: The Washing Stair",
    paragraphs: [
      "Below the Archive a stair of nineteen worn steps drops to the river, and on its landings a counter, a rack, a lender’s hut and a bench keep the hemp of the mountain beaten, hung and turned. Everything smells of wet fibre and lye.",
      "Four keepers tend them, two women and two men, and each has seen how you came up the mountain dressed. Each would like to know what you will put on next.",
    ],
    back: "You climb back to the archive window with hemp-lint on your sleeves. The footsteps overhead are still pausing, the night is as you left it, and the stair below has gone back to its washing.",
    origin: "archive_rest_2",
    label: "Slip down the river stair to the washing-landings, where four keepers price, rule, lend and mend the hemp of the mountain.",
    realm: 0,
    craft: "hemp",
    flavour: "mountain",
    remark: "The washing stair. I wore hemp on it for four winters and never once felt dressed. Four keepers have looked at your sleeves. What did they see?",
  },
  {
    id: "wayside_ward_oilcloth",
    title: "Wardrobe Roads: The Cloak-Sheds",
    paragraphs: [
      "Where the Sutra Road leaves the mountain a row of low sheds stands under one long thatch: a weighing shed, a toll-shed, a hood-loft and a repair-bench, all smelling of linseed and wax. The cloaks hang from the rafters like sleeping bats.",
      "Four keepers tend them, two men and two women, and they have all watched your cloak or its absence. Each would like to know what road you mean to take it down.",
    ],
    back: "You come back to the sutra pages with wax on your cuffs. The book is open where you left it, the night is quiet, and the sheds below have gone back to their proofing.",
    origin: "sutra_pages",
    label: "Take the side track to the cloak-sheds, where four keepers weigh, licence, hood and mend the oilcloth that keeps the Sutra Road dry.",
    realm: 1,
    craft: "oilcloth",
    flavour: "mountain",
    remark: "The cloak-sheds. I was licensed there once, as a stranger. Four keepers have fitted you for the road. Which of them knew the weather you were bringing?",
  },
  {
    id: "wayside_ward_cotton",
    title: "Wardrobe Roads: The Dye-House on the River",
    paragraphs: [
      "Beside the tribunal river a dye-house runs three storeys down the bank: a sizing-room, a hall of nine stone vats, an ink-closet and a long shelf of folded sleeves. The water below it runs three colours before the bend.",
      "Four keepers tend them, two women and two men, and each has measured a sleeve of yours in passing. Each would like to know how much of the ink is yours.",
    ],
    back: "You come back to the masters with indigo under your nails. The question hangs where it was, the hall has not moved, and the dye-house below has gone back to its vats.",
    origin: "tribunal_masters_2",
    label: "Follow the river path to the dye-house, where four keepers size, rule, forge and mend the cotton that dresses the readers of the mountain.",
    realm: 2,
    craft: "cotton",
    flavour: "mountain",
    remark: "The dye-house. I have been stained blue twice and cleaned once. Four keepers have read your cuffs. What did the ink say?",
  },
  {
    id: "wayside_ward_silk",
    title: "Wardrobe Roads: The Embroiderers’ Court",
    paragraphs: [
      "Above the Salt Stair a court of glass cases, curtained closets, an antechamber of mirrors and a long room of embroidery frames keeps the silk of the Salt Works. The light is soft and the thread is very fine.",
      "Four keepers tend them, two men and two women, and each has heard what you wore down the stair. Each would like to know what you will be seen in.",
    ],
    back: "You come back down the Salt Stair with gold dust on your sleeve. The stair is as long as you left it, the lamps are lit, and the court above has gone back to its stitching.",
    origin: "mender_close",
    label: "Climb to the court above the stair, where four keepers price, measure, dress and mend the silk that the Salt Works wears to its own funerals.",
    realm: 3,
    craft: "silk",
    flavour: "road",
    remark: "The court. I was measured there once and sent home to be taken in. Four keepers have dressed you for an audience. Did you enjoy it?",
  },
  {
    id: "wayside_ward_scale",
    title: "Wardrobe Roads: The Lacing Yard",
    paragraphs: [
      "At the end of the Steppe road a yard rings all day with the sound of rain on a tin roof: a proving-counter, a blade-rack, a row of black stalls and a shed for the relacing of the dead. The air smells of hot lacquer.",
      "Four keepers tend them, two women and two men, and they all saw you ride in. Each would like to know what you are armoured against.",
    ],
    back: "You come back to the Orchard with lacquer dust on your cuffs. The glass is as bright as you left it, the wind is the same, and the yard behind you has gone back to its hammering.",
    origin: "glass_close",
    label: "Turn aside to the lacing yard, where four keepers prove, ward, paint and relace the scale armour of the Steppe.",
    realm: 4,
    craft: "scale",
    flavour: "road",
    remark: "The lacing yard. I bought a jerkin there and never wore it. Four keepers have fitted you for a blow. Which did you keep from them?",
  },
  {
    id: "wayside_ward_office",
    title: "Wardrobe Roads: The Robing Hall of the Weighing",
    paragraphs: [
      "Behind the brass balance a hall of cedar presses, dressing-rooms, long mirrors and a counter with a scale keeps the robes of the Law. The light is white and the sleeves are measured.",
      "Four keepers tend them, two men and two women, and they have all seen who the balance raised. Each would like to know what you will wear to be weighed.",
    ],
    back: "You come back to the Glass with camphor in your hair. The mirage is still shining, the eleven thousand are still counted, and the robing hall behind you has gone back to its measures.",
    origin: "mirage_close",
    label: "Go through the side door behind the balance to the robing hall, where four keepers assess, rule, dress and mend the robes of office.",
    realm: 5,
    craft: "office",
    flavour: "road",
    remark: "The robing hall. I was measured for my robe at nineteen and have never fitted it since. Four keepers have dressed you for the Law. Did it fit?",
  },
  {
    id: "wayside_ward_dust",
    title: "Wardrobe Roads: The Pilgrims’ Hostel",
    paragraphs: [
      "On the road up to the Hall of the Ninth Night a hostel of jars, benches, pegs and a sandal-bench stands round a well. Every cloak on its walls is the colour of another province.",
      "Four keepers tend them, two women and two men, and they have all watched you come up the road. Each would like to know what it did to your clothes.",
    ],
    back: "You come back to the furnaces with road-dust on your shoulders. The last shore is as bright as it was, the heat is the same, and the hostel behind you has gone back to its jars.",
    origin: "furnace_close",
    label: "Turn into the hostel on the pilgrims’ road, where four keepers weigh, warden, lend and mend the dust-cloths of the Ninth Night.",
    realm: 6,
    craft: "dust",
    flavour: "road",
    remark: "The hostel. I slept there one night in a borrowed cloth and woke in my own. Four keepers have shaken your dust. Whose road was it?",
  },
  {
    id: "wayside_ward_seamless",
    title: "Wardrobe Roads: The Seamless Hall",
    paragraphs: [
      "In the valley beneath the Bridge a hall of white stands apart: a weigher’s beam, a closed door, a room of blank faces and a loom with no shuttle. No cloth in it is dyed, and no stitch in it shows.",
      "Four keepers tend them, two men and two women, and none of them has said how long they have waited. Each would like to know what you will put on last.",
    ],
    back: "You climb back to the outer courtyard with the quiet still on your sleeves. The bridge is as long as it was, the stones are as grey, and the white hall behind you has gone back to its weaving.",
    origin: "bridge_close2",
    label: "Walk down into the valley to the Seamless Hall, where four keepers weigh, guard, mask and weave the one robe that nobody is ever fitted for.",
    realm: 7,
    craft: "seamless",
    flavour: "road",
    remark: "The Seamless Hall. I have not been, and I have not wished to, and I have wished it every night. Four keepers have looked at what you wear. What was left?",
  },
];

const SPECS12: WardSpec[] = [...wardSpecs1, ...wardSpecs2, ...wardSpecs3, ...wardSpecs4];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 351 to pick wording; the Wardrobe Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 360;
export const BACK12 = (origin: string) => `back12_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES12.filter((_, n) => SPECS12.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS12.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: WardSpec; ctx: RoadContext12 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: WARD_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

type HubMood = "furious" | "afraid" | "suspicious" | "tender";
/** The Elder’s short word at the hub when her face is not stern, by the face and the craft of the wayside. Fourteen words or fewer each. */
const HUB_MOOD: Record<HubMood, Record<CraftId, string>> = {
  furious: {
    hemp: "Wet hemp and lye. I wore it once. Say nothing of what you saw.",
    oilcloth: "Wax and rain. I was licensed there. Do not ask what for.",
    cotton: "Indigo and lime. I know that stain. Keep your cuffs to yourself.",
    silk: "Gold thread and camphor. I was measured there. Not one word.",
    scale: "Hot lacquer. I buried a jerkin from that yard. Go on, then.",
    office: "Cedar and ink. I know whose robe that was. Do not ask.",
    dust: "Road dust and rice. I walked in a borrowed cloth. Be brief.",
    seamless: "White linen and nothing. I will not be spoken of in that house.",
  },
  afraid: {
    hemp: "Hemp does not hide. Tell me nobody there looked at my sleeves.",
    oilcloth: "The rain gets in at the seam. Tell me yours held.",
    cotton: "Ink never leaves. Please do not tell me whose cuffs you read.",
    silk: "Silk shows every mark. Say there was no tea on mine.",
    scale: "I fear the dent I cannot see. Tell me the jerkin held.",
    office: "A robe that does not fit. I fear it still. Do not measure me.",
    dust: "Dust follows. Tell me you shook it off before you came home.",
    seamless: "I am afraid of a robe nobody has to mend. Say it is a kindness.",
  },
  suspicious: {
    hemp: "Four keepers, and your hem is clean. Who mended it?",
    oilcloth: "Four keepers of cloaks, and you came back dry. How?",
    cotton: "Four keepers of ink, and your cuffs are blue. Whose ink?",
    silk: "Four keepers of silk, and you are not in it. Why not?",
    scale: "Four keepers of armour, and not a scratch on you. Who paid?",
    office: "Four keepers of robes, and nobody sent you home. What did you say?",
    dust: "Four keepers of pilgrims, and your cloth is new. Whose road was it?",
    seamless: "Four keepers of white, and you are not in white. Why not?",
  },
  tender: {
    hemp: "Come in and sit. I will turn your hem myself.",
    oilcloth: "Sit by me. The rain can wait outside with the cloaks.",
    cotton: "Come and sit. I shall not read your cuffs. Only tell me the colour.",
    silk: "Sit with me. I shall not measure your sleeve tonight.",
    scale: "Come and sit. Take the jerkin off. Nobody here will strike you.",
    office: "Sit, and take off the robe. It is only cloth, and so are we.",
    dust: "Sit with me. Your cloth may rest on the peg tonight.",
    seamless: "Sit. We need not speak. Nobody has ever been dressed for this.",
  },
};

function waysideScene12(w: Wayside12, n: number, roads: { spec: WardSpec; index: number }[]): Scene {
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
    requires: [{ kind: "flag", flag: wardDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their cloth and go back to where you left the road.", tone: "quiet", next: BACK12(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: wardDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...face.map(([mood, when]) => ({ when: [when], line: HUB_MOOD[mood][w.craft] })),
      { when: [{ kind: "count", prefix: wardDonePrefix(n + 1), min: PER_WAYSIDE } as Condition], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack12(w: Wayside12, origin: Scene): Scene {
  return {
    id: BACK12(w.origin),
    title: `Back from ${w.title.replace(/^Wardrobe Roads: The /, "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the scenes of its four roads. */
export const wardrobeGroups: { name: string; wayside: Wayside12; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene12(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad12(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s report on every Wardrobe Road. */
export const wardrobeReports: Record<string, NpcScenario> = Object.fromEntries(withContext.map(({ spec, ctx }) => [buildReport12(spec, ctx).id, buildReport12(spec, ctx)] as const));

/** The goods and holdings of every Wardrobe Road. */
export const wardrobeItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(synthesize(spec), ctx).id, wareItem(synthesize(spec), ctx)]));
export const wardrobeAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(synthesize(spec), ctx).id, holdingAsset(synthesize(spec), ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const wardrobeEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const wardrobeRoadRealms = WAYSIDES12.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, craft: w.craft }));
export { SPECS12, CRAFT_IDS };
