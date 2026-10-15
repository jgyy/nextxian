import { REALMS } from "@/engine/cultivation";
import { tribDoneFlag } from "@/engine/tribulation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildReport11, buildRoad11, buildTrialScenarios, synthesize, TRIB_WAYSIDE_BASE, tribulationDonePrefix, type RoadContext11 } from "./build";
import type { TribId } from "./lexicon-trib";
import { TRIB_IDS } from "./lexicon-trib";
import type { TribSpec } from "./spec";
import { tribSpecs1 } from "./specs-1";
import { tribSpecs2 } from "./specs-2";
import { tribSpecs3 } from "./specs-3";
import { tribSpecs4 } from "./specs-4";

export interface Wayside11 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the tribulation stands at the top of. */
  realm: number;
  trib: TribId;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/**
 * The eight Tribulation Roads, in the order of the realms. Each wayside belongs to one tribulation, from the cold thread a mortal must feel to the silence
 * after the last gate, and holds four roads, one for each of four keepers: a warden who bows by the register, a witness who bows to what a hero has
 * survived, a rival who bows when it hurts, and a pilgrim who is awed by anyone who has climbed.
 */
export const WAYSIDES11: Wayside11[] = [
  {
    id: "wayside_trib_thread",
    title: "Tribulation Roads: The Fasting Sheds",
    paragraphs: [
      "Below the Eastern Peak a row of low sheds shelters the mortals who wait for the cold thread: a fasting hall, a frost-well, a pair of mats and a single stone step.",
      "Four keepers tend them, two women and two men, and each has heard that a stranger came down with a mirror’s cold on the sleeve. Each would like to know whether you have felt the thread.",
    ],
    back: "You climb back to the hermit’s mirror with frost on your cuffs. The water is still, the breath on its face is still yours, and the sheds below have gone back to their waiting.",
    origin: "hermit_mirror",
    label: "Go down by the cut steps to the fasting sheds, where four keepers count, watch, share and wait for the mortals who would feel the cold thread.",
    realm: 0,
    trib: "thread",
    flavour: "mountain",
    remark: "The fasting sheds. I lay on a mat in that hall three winters before I felt it. Four keepers have counted your nights. Which of them did you let see you shiver?",
  },
  {
    id: "wayside_trib_breath",
    title: "Tribulation Roads: The Roof of the Sutra Hall",
    paragraphs: [
      "Above the sutra hall a stair behind the attic leads out onto the ridge, where a plank of grey tile runs between two parapets. A chart room, a lamp-mender’s loft and a sleepers’ bench lie under the eaves.",
      "Four keepers tend them, two women and two men, and they watched you at the trance. Each would like to know whether your breath has turned yet, and whether you let it.",
    ],
    back: "You climb back down to the trance with tile-dust on your knees. The stars are as you left them, the breath is quiet in you, and the ridge above has gone back to its candles.",
    origin: "sutra_trance",
    label: "Climb the attic stair to the roof of the sutra hall, where four keepers walk, mend, chart and watch the Condensers who sit the wayward breath.",
    realm: 1,
    trib: "breath",
    flavour: "mountain",
    remark: "The roof. Mine turned on the ninth night, and I have not had a steady left hand since. Four keepers have watched your breath. Did you let it go round?",
  },
  {
    id: "wayside_trib_bells",
    title: "Tribulation Roads: The Bell-Tower of the Tribunal",
    paragraphs: [
      "Beside the tribunal a square tower of nine landings stands against the sky, and behind it a roofless smithy, a pair of stone cisterns and a ringers’ loft keep the hours the bells are not rung.",
      "Four keepers work them, two women and two men, and the whole yard has heard the tribunal’s bells. Each would like to know whether you would stand under nine strokes of the real thing.",
    ],
    back: "You come back to the tribunal with bronze-dust on your sleeves. The bell rule is still being read, the benches are still full, and the tower behind you has gone back to its silence.",
    origin: "tribunal_bell_rule",
    label: "Slip out by the tower door to the bell-yard, where four keepers climb, forge, measure and sweep for the Foundation Builders who stand under the nine bells.",
    realm: 2,
    trib: "bells",
    flavour: "mountain",
    remark: "The tower. I have stood under three strokes and run from the fourth. Four keepers have watched you under the beam. Which stroke did you hear before it fell?",
  },
  {
    id: "wayside_trib_fire",
    title: "Tribulation Roads: The Works of the Salt Lamp",
    paragraphs: [
      "At the foot of the salt lamp a cellar of oil, a yard of cinders, a wick-room and a spiral signal stair keep the great flame alive. The lamp’s light is on everything, and on nothing without a shadow.",
      "Four keepers tend them, two men and two women, and the keeper of the lamp has told them all what you did. Each would like to know what the soul-fire would find in a Core of your sort.",
    ],
    back: "You come back up to the lamp with soot on your cuffs. The keeper is where you left them, the light is steady, and the works below have gone back to their tending.",
    origin: "lamp_close",
    label: "Go down by the lamp-works stair to the oil-store and the cinder-yard, where four keepers measure, rake, trim and signal for the Cores who sit the soul-fire.",
    realm: 3,
    trib: "fire",
    flavour: "road",
    remark: "The lamp-works. I sat in the cinder-yard nine days and have never since told a lie I did not mean. Four keepers have read your fire. What did it find?",
  },
  {
    id: "wayside_trib_gale",
    title: "Tribulation Roads: The Wind-Camp",
    paragraphs: [
      "On the plain below the cairn a grey felt tent, a hill of cut rope, a long yard of drying felt and a cord-seller’s counter stand in the wind. Nothing is staked down that was not staked by someone who knew how it would fail.",
      "Four keepers tend them, two women and two men, and they watched the dust-storm pass. Each would like to know which cord a Nascent Soul of your sort would give first.",
    ],
    back: "You come back to the scoured plain with felt-fluff on your sleeves. The road is where you left it, the dust is gone, and the wind-camp behind you has gone back to its stakes.",
    origin: "storm_close",
    label: "Cross the scoured plain to the wind-camp, where four keepers record, bind, weave and sell the cords the Nascent Souls give up to the gale.",
    realm: 4,
    trib: "gale",
    flavour: "road",
    remark: "The wind-camp. I gave the gale a cord I thought I could spare. Four keepers have held yours. Which did you let them cut?",
  },
  {
    id: "wayside_trib_audit",
    title: "Tribulation Roads: The Audit Hall of the Weighing",
    paragraphs: [
      "Behind the brass balance of the Weighing a long hall holds a single desk, a lectern, a room of pigeon-holes and a sealing-wax stall by the south door. The light is white and casts no shadow.",
      "Four keepers tend them, two men and two women, and they have heard the balance settle. Each would like to know what the Ledger would read aloud of a sage of your sort.",
    ],
    back: "You come back to the balance with wax on your fingers. The scales are quiet, the weighing is over, and the hall behind you has gone back to its reading.",
    origin: "ladder_close",
    label: "Go through the south door behind the balance to the audit hall, where four keepers read, correct, record and seal the page of every sage who sits the Ledger’s audit.",
    realm: 5,
    trib: "audit",
    flavour: "road",
    remark: "The audit hall. I asked for one line to be struck, and it was, and it has cost me ever since. Four keepers have heard your page. Which line did you leave?",
  },
  {
    id: "wayside_trib_gates",
    title: "Tribulation Roads: The Nine Doorframes",
    paragraphs: [
      "Beside the great doors of the Hall of the Ninth Night a stair of nine flights, a court of unfinished frames, a hall of dark wood and a lantern-lit porch run back into the stone. The doors that hung in them are long gone.",
      "Four keepers tend them, two women and two men, and they have counted the Masters out. Each would like to know which of the nine gates a Dao Seeker of your sort would stop at.",
    ],
    back: "You come back to the Hall’s step with stone-dust in your hair. The masters are still talking inside, the ninth door is still open, and the frames behind you have gone back to their waiting.",
    origin: "summit_close",
    label: "Slip along the Hall’s wall to the nine doorframes, where four keepers key, carve, polish and watch for the Dao Seekers who pass the gates.",
    realm: 6,
    trib: "gates",
    flavour: "road",
    remark: "The nine frames. I stopped at the fourth and stood a year. Four keepers have asked you their question. Which did you answer without looking for the way through?",
  },
  {
    id: "wayside_trib_silence",
    title: "Tribulation Roads: The Valley of the Quiet House",
    paragraphs: [
      "In the valley beneath the mountain a grey house with no windows, a bell without a clapper, a ferry-stage and a tea-house with open doors stand apart, each with its own stillness.",
      "Four keepers tend them, two men and two women, and none of them has said a word since you arrived. Each would like to know whether an Ascendant of your sort can bear the quiet.",
    ],
    back: "You climb back from the valley with the quiet still in your ears. The mountain behind you is exactly as large as before, and the road down is no longer than it was.",
    origin: "descent_close",
    label: "Walk down into the valley beneath the mountain, where four keepers guard, polish, ferry and pour for the one hero who has nothing left to be tried by.",
    realm: 7,
    trib: "silence",
    flavour: "road",
    remark: "The valley. I have not been there, and I have not been invited, and I have wished for neither. Four keepers have been quiet with you. Was it a kindness?",
  },
];

const SPECS11: TribSpec[] = [...tribSpecs1, ...tribSpecs2, ...tribSpecs3, ...tribSpecs4];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 311 to pick wording; the Tribulation Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 320;
export const BACK11 = (origin: string) => `back11_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES11.filter((_, n) => SPECS11.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS11.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: TribSpec; ctx: RoadContext11 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: TRIB_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

type HubMood = "furious" | "afraid" | "suspicious" | "tender";
/** The Elder’s short word at the hub when her face is not stern, by the face and the tribulation of the wayside. Fourteen words or fewer each. */
const HUB_MOOD: Record<HubMood, Record<TribId, string>> = {
  furious: {
    thread: "Cold millet and snuffed wicks. I know that hall. Say nothing of your nights.",
    breath: "Hot tile and lamp-oil. I have a hand that still remembers. Be brief.",
    bells: "Wet bronze. I have heard those bells too often. Do not ask me to hear them again.",
    fire: "Whale-oil and ash. I have burned enough. Whatever you hid, keep it.",
    gale: "Horse-felt and smoke. I cut a cord once. I will not discuss it.",
    audit: "Dry ink. I know whose hand wrote the margin. Not one word.",
    gates: "Oiled hinges. I stopped at the fourth. Do not ask me why.",
    silence: "Felt and cold tea. I will not be spoken of in that house. Go.",
  },
  afraid: {
    thread: "The thread comes to the unafraid. I have never been unafraid. Please say it is not coming.",
    breath: "My breath turned once. I fear it remembers the way. Tell me yours stayed.",
    bells: "I count the strokes in my sleep. Say they were fewer for you.",
    fire: "The fire finds the oldest thing first. I fear mine is old.",
    gale: "I fear the cords I did not choose. Say the gale was kind.",
    audit: "A page I cannot unread. Please do not read it to me.",
    gates: "Nine questions, and I know only the first. I am afraid of the second.",
    silence: "I have never been alone. I am afraid it is what rises.",
  },
  suspicious: {
    thread: "Four keepers, and you came back warm. Who fed you?",
    breath: "Four keepers of breath, and yours is level. What did you do?",
    bells: "Nine strokes, and you came back unrung. How?",
    fire: "Four keepers of fire, and not a singe on you. What did you hide?",
    gale: "Four keepers of cord, and you came back uncut. Whom are you keeping?",
    audit: "Four readers, and nobody read you. I take note.",
    gates: "Nine gates, and you came back unasked. Wisdom, or art?",
    silence: "Four keepers of quiet, and not one spoke. What did you say to them?",
  },
  tender: {
    thread: "Come and sit. There is no cold in this room tonight, only the fire.",
    breath: "Sit down. Breathe whichever way you like. Nobody is watching.",
    bells: "Sit with me. No bell in this hall will be rung until morning.",
    fire: "Come in and sit. I shall not ask what the fire found.",
    gale: "Sit by me. I have cut nothing tonight, and shall cut nothing.",
    audit: "Sit. I have one line to read tonight, and it is only my own.",
    gates: "Come and sit. The ninth door is open, and I do not mind the draught.",
    silence: "Sit. We need not speak. It is the kindest thing I know to offer.",
  },
};

function waysideScene11(w: Wayside11, n: number, roads: { spec: TribSpec; index: number }[]): Scene {
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
    requires: [{ kind: "flag", flag: tribDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their tribulations and go back to where you left the road.", tone: "quiet", next: BACK11(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: tribDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...face.map(([mood, when]) => ({ when: [when], line: HUB_MOOD[mood][w.trib] })),
      { when: [{ kind: "count", prefix: tribulationDonePrefix(n + 1), min: PER_WAYSIDE } as Condition], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack11(w: Wayside11, origin: Scene): Scene {
  return {
    id: BACK11(w.origin),
    title: `Back from ${w.title.replace(/^Tribulation Roads: The /, "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the scenes of its four roads. */
export const tribulationGroups: { name: string; wayside: Wayside11; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene11(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad11(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s report on every Tribulation Road, and her answer to each thing a hero can do at its rehearsal. */
export const tribulationScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => [buildReport11(spec, ctx), ...buildTrialScenarios(spec)].map((scenario) => [scenario.id, scenario] as const)),
);

/** The goods and holdings of every Tribulation Road. */
export const tribulationItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(synthesize(spec), ctx).id, wareItem(synthesize(spec), ctx)]));
export const tribulationAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(synthesize(spec), ctx).id, holdingAsset(synthesize(spec), ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const tribulationEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const tribulationRoadRealms = WAYSIDES11.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, trib: w.trib }));
export { SPECS11, TRIB_IDS };
