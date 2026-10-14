import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildDoorScenarios, buildReport9, buildRoad9, CUSTOM_WAYSIDE_BASE, customDoneFlag, customDonePrefix, synthesize, type RoadContext9 } from "./build";
import { CUSTOMS, type Custom } from "./lexicon-custom";
import type { CustomSpec } from "./spec";
import { customSpecs1 } from "./specs-1";
import { customSpecs2 } from "./specs-2";
import { customSpecs3 } from "./specs-3";
import { customSpecs4 } from "./specs-4";
import { customSpecs5 } from "./specs-5";

export interface Wayside9 {
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
  /** The custom all four roads here work. */
  custom: Custom;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/**
 * The ten Custom Roads, in the order of the story. Each wayside belongs to one custom of the sect that sorts people by gender, and holds four roads,
 * one for each of four keepers: a woman who holds the custom as it was handed down, a man who does, a woman who bends it and a man who does.
 */
export const WAYSIDES9: Wayside9[] = [
  {
    id: "wayside_custom_lineage",
    title: "Custom Roads: The Tablet Rooms",
    paragraphs: [
      "Behind the Memorial Hall the sect keeps its names on shelves of cedar: a room of columns, a room of margins, a desk of brushes, a bench for mending what has cracked.",
      "Four keepers tend them, two women and two men, and each saw you kneel in front of the tablets. Each would like to know, quietly, which side of the shelf you were looking from.",
    ],
    back: "You come back to the memorial with cedar-dust on your sleeves. The altar is still cracked and the tablets still glow, and the rooms behind the wall have closed on their dry, sweet silence.",
    origin: "memorial",
    label: "Slip through the side door of the memorial hall into the tablet rooms, where four keepers write, dust, mend and rule the names of the sect.",
    realm: 0,
    custom: "lineage",
    flavour: "mountain",
    remark: "The tablet rooms. Every family on the mountain has a column and a margin, and I know which of mine is which. Four keepers have shown you where your name would go. Did you let them write it?",
  },
  {
    id: "wayside_custom_mats",
    title: "Custom Roads: The Practice Courts",
    paragraphs: [
      "Below the hermit’s hut the cut steps end on a ridge where the sect lays its mats: the west row, the east row, a night room beneath them, and a single narrow mat in the doorway between.",
      "Four masters teach on them, and keep their own opinions of who should stand where. The wind that carried you up the steps has told them all that you were asked to set down something at the door.",
    ],
    back: "You climb back to the hut with matting-dust on your knees. The pool in the black basin still holds two roofs, and the old man has not turned from his cup.",
    origin: "hermit_hut",
    label: "Go down the cut steps from the hermit’s hut to the practice courts on the ridge, where four masters teach the forms on four sorts of mat.",
    realm: 1,
    custom: "mats",
    flavour: "mountain",
    remark: "The practice courts. I was corrected on those mats until I learned to correct myself. Four masters have placed you. Where did you stand when no one was looking?",
  },
  {
    id: "wayside_custom_ledgers",
    title: "Custom Roads: The Counting-Rooms",
    paragraphs: [
      "Behind the Index of the Departed a corridor of small bright rooms runs off toward the sutra stair. Each holds a desk, a lamp and a stack of the households’ books, kept on the sect’s behalf.",
      "Four keepers sit at them, and look up from their columns as you pass. They keep the sums that the sect lives on, and each has an opinion of whose hand should close them.",
    ],
    back: "You come back to the bronze drawers with chalk-dust on your fingers. The card in its drawer is as you left it, and the corridor behind you has gone back to its adding.",
    origin: "archive_index",
    label: "Leave the bronze drawers for the corridor of counting-rooms behind the Index, where four keepers add, sign, lend and audit the households’ books.",
    realm: 1,
    custom: "ledgers",
    flavour: "mountain",
    remark: "The counting-rooms. Half the sect is paid by them and the other half is kept by them. Four keepers have shown you whose hand closes the book. Was it yours?",
  },
  {
    id: "wayside_custom_names",
    title: "Custom Roads: The Seal-Cutters’ Lane",
    paragraphs: [
      "Below the sutra stair a lane of narrow shops runs down to the first terrace: a loft of paper patterns, a bench of deep-cut stone, a stall of plain seals, a desk of titles.",
      "Four keepers work the lane, and every one of them has been taught to read a stranger’s name before the stranger has said it. They saw you stop at the struck-through line on the lintel, and wondered what you were reading.",
    ],
    back: "You climb back to the lintel with soapstone dust on your cuffs. The struck-through name has not changed, and the lane behind you has gone back to cutting what people are called.",
    origin: "sutra_inscriptions_2",
    label: "Go down from the carved lintel into the seal-cutters’ lane, where four keepers cut robes, stone, blank seals and the forms of address.",
    realm: 2,
    custom: "names",
    flavour: "mountain",
    remark: "The seal-cutters’ lane. I have been called four different things on it and answered to all of them. Four keepers have asked you what you are called. What did you say?",
  },
  {
    id: "wayside_custom_matches",
    title: "Custom Roads: The Letter Lane",
    paragraphs: [
      "Below the Law Hall the matchmakers have their parlours in a lane of red doors: a parlour with a paper screen, a stall of letter-writers, a low room hung with leaves, a table where gifts are weighed.",
      "Four keepers sit at them. The lane has heard that a letter was carried to the Elder this week by a stranger, and every keeper in it would like to know whom the letter was for.",
    ],
    back: "You come back to the Elder’s side with jasmine and wax on your sleeves. The letter is where she left it, and the lane below has gone back to arranging what other people will want.",
    origin: "jade_eye_letter",
    label: "Slip out of the Law Hall by the side stair to the lane of red doors, where four keepers write, weigh, witness and match the sect’s vows.",
    realm: 2,
    custom: "matches",
    flavour: "mountain",
    remark: "The letter lane. I have read more letters of asking than I have ever answered, and refused the lot. Four keepers have asked who is to ask whom. What did you answer?",
  },
  {
    id: "wayside_custom_council",
    title: "Custom Roads: The Side Rooms of the Round Hall",
    paragraphs: [
      "Behind the dais of the Round Hall the Assembly of Nine keeps four small rooms: a bench for the pourers of tea, a ring of speaking stones, a lamp-lit room for the minutes, and a stool nobody sits on.",
      "Four keepers wait in them. The Assembly is in recess, and each of them has heard that the Azure Cloud’s witness is walking the side rooms, and has put the kettle on.",
    ],
    back: "You slip back to the bench with tea on your breath. The candle has been changed, the clerks have not yet returned, and the hall has no idea where you have been.",
    origin: "asm_hub_back",
    label: "Use the recess to slip behind the dais, where four keepers pour, rub, minute and hold the Assembly’s places.",
    realm: 3,
    custom: "council",
    flavour: "road",
    remark: "The side rooms of the Round Hall. Everything the Assembly decides is carried through them on a tray. Four keepers have told you who speaks. Did anyone tell you who is heard?",
  },
  {
    id: "wayside_custom_mourning",
    title: "Custom Roads: The Mourners of Bell Lane",
    paragraphs: [
      "Below Ash and Daughters the lane gives onto four yards where the coast’s dead are seen out: a row of keeners in white, a rank of bearers in grey, a table of lanterns, a loft where the dirges are sung.",
      "Four keepers lead them. The whole lane has learnt that the funeral-maker’s guest walked out with her black ribbon, and each has set out an extra cup.",
    ],
    back: "You come back to the corner with the lane’s cry still in your ears. Bao Er is where you left her, humming, and the paper figures in the window stand in their row, one still blank.",
    origin: "mourning_close",
    label: "Leave Bao Er humming at the corner and go down the lane to the four yards where the coast keens, carries, lights and sings its dead.",
    realm: 3,
    custom: "mourning",
    flavour: "road",
    remark: "Bell Lane. I have stood in the second row of a good many funerals, and been complimented on my composure. Four keepers have told you where to stand. Where did you stand?",
  },
  {
    id: "wayside_custom_hands",
    title: "Custom Roads: The Three Doors of Cooper Lane",
    paragraphs: [
      "At the far end of Cooper Lane, past the dye-works, a physic-house stands behind three doors: a red one, a grey one, and a plain one between them with no handle.",
      "Four keepers work behind them. The queue of women with baskets has told them the Ward has a new pair of hands, and they would each like to know which door those hands are for.",
    ],
    back: "You walk back along the lane with vinegar on your hands. The Ward is where you left it, the queue has barely moved, and the three doors are shut behind you.",
    origin: "ward_entry",
    label: "Leave the Ward for the physic-house at the lane’s end, where four keepers work behind a red door, a grey door, a night ward and a loft of herbs.",
    realm: 3,
    custom: "hands",
    flavour: "road",
    remark: "The three doors of Cooper Lane. I have been treated behind two of them and thanked at neither. Four keepers have shown you which door your hands are for. Did you believe them?",
  },
  {
    id: "wayside_custom_arms",
    title: "Custom Roads: The Racks of the Tidewall",
    paragraphs: [
      "Under and along the Tidewall four rooms keep the harbour’s arms: an oiling room that sweats with the tide, a long rack in the lee of the lighthouse, a wharf where children throw, a drill deck on the barracks roof.",
      "Four keepers look after them, and they stood on the quay to watch the Elder come ashore. Each is quietly curious which rack the stranger will walk to.",
    ],
    back: "You come back to the quay with whale-oil on your fingers. The Elder is where you left her, looking up at the cold tower, and the racks behind you are as quiet as stones.",
    origin: "coast_close",
    label: "Leave the quay for the sea-wall, where four keepers oil, rack, teach and drill the arms of the Tidewall.",
    realm: 4,
    custom: "arms",
    flavour: "road",
    remark: "The racks of the Tidewall. I have never drawn a blade in anger and have polished more than most who have. Four keepers have handed you one. What did you do with it?",
  },
  {
    id: "wayside_custom_kin",
    title: "Custom Roads: The Tents of the Stair Camp",
    paragraphs: [
      "Among the Ten Thousand Tents four stand apart, each marked with a different cloth: a hearth tent where a pot never goes cold, a dark felt tent with a bell, a lean-to of washed cups, and a desk under a striped awning.",
      "Four keepers sit in them. The queue says the stranger in tent Five was given nine bedrolls, and each keeper has wondered whom the nine are to one another.",
    ],
    back: "You come back to the tent of nine with the camp’s smoke in your clothes. The Elder is at the door with her lamp, and the slip of paper on the pole still says only a number.",
    origin: "pilgrims_close",
    label: "Walk out from the tent of nine to the four small tents where the camp swears its kin: a hearth, an oath, a lean-to of cups and a clerk’s desk.",
    realm: 5,
    custom: "kin",
    flavour: "road",
    remark: "The tents of the Stair camp. I have always been told what I am to people. Four keepers have asked what you are to one another. What did you say?",
  },
];

const SPECS9: CustomSpec[] = [...customSpecs1, ...customSpecs2, ...customSpecs3, ...customSpecs4, ...customSpecs5];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 239 to pick wording; the Custom Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 240;
export const BACK9 = (origin: string) => `back9_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES9.filter((_, n) => SPECS9.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS9.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: CustomSpec; ctx: RoadContext9 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: CUSTOM_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

type HubMood = "furious" | "afraid" | "suspicious" | "tender";
/** The Elder’s short word at the hub when her face is not stern, by the face and the custom of the wayside. Fourteen words or fewer each. */
const HUB_MOOD: Record<HubMood, Record<Custom, string>> = {
  furious: {
    lineage: "You have cedar-dust on you, and a margin in your face. Say nothing.",
    mats: "I can tell which row you stood on by how you are standing. Do not.",
    ledgers: "Whose hand closed those books? Do not tell me. I am in no mood for sums.",
    names: "I have been called three things this morning and answered to none. Be brief.",
    matches: "I smell jasmine and sealing-wax. I have been asked to marry my own past.",
    council: "I have heard enough of who speaks. Keep your tea and your opinions.",
    mourning: "Bell Lane has kept me up all night. Do not hum.",
    hands: "Vinegar. I would rather be anywhere than in a room that smells of vinegar.",
    arms: "Whale-oil. If you have brought me a blade, I shall be most unhappy.",
    kin: "Kin. I will not be told what I am to anyone. Speak, or go.",
  },
  afraid: {
    lineage: "Whatever the tablets say of me, please do not read it aloud.",
    mats: "Those rows have a way of sorting people, and I am afraid of how well.",
    ledgers: "The books down there are very quiet. I find I do not want them opened.",
    names: "The lane knows what I was called before I was Elder. Please do not ask it.",
    matches: "Those letters were written about people who did not agree to them. I know one.",
    council: "The side rooms hear everything. I would sooner they did not hear me.",
    mourning: "The dead of Bell Lane are patient. That is what frightens me.",
    hands: "I do not like doors, and that physic-house has three. Be quick.",
    arms: "Blades are only polite until they are not. Forgive me if I stand by the door.",
    kin: "I have so few I can call kin. Please do not make me count them again.",
  },
  suspicious: {
    lineage: "Four keepers of tablets, and you came back with clean sleeves. Why?",
    mats: "Four masters, four mats, and you slept through none of them. Explain.",
    ledgers: "Four rooms of sums, and you balanced yourself. I should like to see how.",
    names: "Four cutters and not one name changed. How very careful of you.",
    matches: "Four parlours, and you stayed unmatched. I wonder what that cost someone.",
    council: "Four side rooms, and you were heard in none. That is either wisdom or art.",
    mourning: "Four yards of mourning, and your eyes are dry. I take note.",
    hands: "Three doors and a ward, and you walked out unscathed. Which door lied?",
    arms: "Four racks, and you carry nothing. Where did the blade go?",
    kin: "Four tents of kin, and you came back unsworn. What are you keeping?",
  },
  tender: {
    lineage: "Come in and sit. The tablets will keep, and so will I.",
    mats: "Sit down a moment. The mats are empty, and so, tonight, am I.",
    ledgers: "Sit. The sums will wait. I should like to hear how you did.",
    names: "Come in. I have a name for you tonight, and it is only your own.",
    matches: "Sit with me a while. Nobody has been asked anything in this room.",
    council: "Here, drink. It is only tea, and nobody here will repeat what you say.",
    mourning: "Sit. The lane has sung enough for one night, and I would like quiet.",
    hands: "Give me your hands. I will not read them. I only want to hold them.",
    arms: "Put it down, whatever you were given. You are safe on this side of the wall.",
    kin: "Come and sit. I find I have more kin than I had counted, and one of them is you.",
  },
};

function waysideScene9(w: Wayside9, n: number, roads: { spec: CustomSpec; index: number }[]): Scene {
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
    requires: [{ kind: "flag", flag: customDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their customs and go back to where you left the road.", tone: "quiet", next: BACK9(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: customDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...face.map(([mood, when]) => ({ when: [when], line: HUB_MOOD[mood][w.custom] })),
      { when: [{ kind: "count", prefix: customDonePrefix(n + 1), min: PER_WAYSIDE } as Condition], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack9(w: Wayside9, origin: Scene): Scene {
  return {
    id: BACK9(w.origin),
    title: `Back from ${w.title.replace(/^Custom Roads: The /, "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the scenes of its four roads. */
export const customGroups: { name: string; wayside: Wayside9; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene9(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad9(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s report on every Custom Road, and her answer to each thing a hero can do at its doors. */
export const customScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => [buildReport9(spec, ctx), ...buildDoorScenarios(spec)].map((scenario) => [scenario.id, scenario] as const)),
);

/** The goods and holdings of every Custom Road. */
export const customItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(synthesize(spec), ctx).id, wareItem(synthesize(spec), ctx)]));
export const customAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(synthesize(spec), ctx).id, holdingAsset(synthesize(spec), ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const customEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const customRoadRealms = WAYSIDES9.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, custom: w.custom }));
export { SPECS9, CUSTOMS };
