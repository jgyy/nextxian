import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { AGE_WAYSIDE_BASE, ageDoneFlag, ageDonePrefix, buildDoorScenario, buildReport8, buildRoad8, synthesize, type RoadContext8 } from "./build";
import type { AgeSpec } from "./spec";
import { ageSpecs1 } from "./specs-1";
import { ageSpecs2 } from "./specs-2";
import { ageSpecs3 } from "./specs-3";
import { ageSpecs4 } from "./specs-4";

export interface Wayside8 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the five roads here ask. */
  realm: number;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all five of the roads here. */
  remark: string;
}

/** The eight Age Roads waysides, one for each realm, in the order of the story. Each has five roads, one for each age of keeper. */
export const WAYSIDES8: Wayside8[] = [
  {
    id: "wayside_age_almshouse",
    title: "Age Roads: The Almshouse Row",
    paragraphs: [
      "Below the gate stair a row of low buildings has stood since before the sect. Nobody there has gathered qi. Everybody there is counting, to the day, a span of seventy-six years.",
      "Five doors stand open along the row, and each keeper reads your years before you have said a word.",
    ],
    back: "You come back up from the almshouse row with the smell of tallow and barley in your sleeves. The gate stair is where you left it, and the light is a little older than it was.",
    origin: "gate_gossip",
    label: "Go down to the almshouse row below the gate, where mortals keep the hours of a short life, and each keeper counts your years.",
    realm: 0,
    flavour: "mountain",
    remark: "The almshouse row. I was carried there as a child with a fever and told I had seventy-six years. Five keepers have read your age. Which was right?",
  },
  {
    id: "wayside_age_cloister",
    title: "Age Roads: The Cold Thread Cloister",
    paragraphs: [
      "Behind the archive a cold cloister keeps the first thread of qi. The people there treat a hundred and ten years as a sum they have only just been lent.",
      "Five keepers wait along the gallery, and each holds the thread in a way that depends on how long they have had to practise.",
    ],
    back: "You climb out of the cloister with a thread of cold bright qi still humming in your teeth. The archive is quiet, the shelves are exactly as they were, and you are a little more exact yourself.",
    origin: "archive_rest",
    label: "Cross to the cold cloister behind the archive, where five keepers of five ages teach a condenser to hold the first thread.",
    realm: 1,
    flavour: "mountain",
    remark: "The cold cloister. I dropped my first thread there twice. Five keepers have taught you to hold yours. If you are older than they are, I hope you were gentle.",
  },
  {
    id: "wayside_age_floors",
    title: "Age Roads: The Level Floors",
    paragraphs: [
      "Off the confession wing a range of halls is kept for those who have laid a foundation and must learn whether it holds. Every stone is measured against a span of a hundred and sixty years.",
      "Five keepers stand among the plumb-lines, and each remembers precisely how old they were when their own foundation settled.",
    ],
    back: "You step back out of the halls with the ring of a tapped floor in your ears. The confession wing is where you left it, and the ground feels, for a moment, as if it were somebody else’s work.",
    origin: "jade_eye_confession",
    label: "Go through the halls behind the confession wing, where five keepers of five ages tap, set and level the foundations of builders.",
    realm: 2,
    flavour: "mountain",
    remark: "The level floors. I laid mine at thirty and have checked it ever since. Five keepers have tested yours. Has it begun to lean?",
  },
  {
    id: "wayside_age_gold",
    title: "Age Roads: The Gold Hours",
    paragraphs: [
      "Where the river road bends, a quiet range of halls keeps the cores of those who have formed one. Two hundred and fifty years is a long time to be alive.",
      "Five keepers receive you in the evening light, each holding a core that has had a different number of years to settle.",
    ],
    back: "You leave the Gold Hours with a slow warmth in your chest, as if something had been turned over and set back down. The river road is cool, and the sound of the water is very clear.",
    origin: "still_hub_b2_road",
    label: "Turn off the river road to the Gold Hours, where five keepers of five ages weigh, gild, bind and keep the cores of cultivators.",
    realm: 3,
    flavour: "road",
    remark: "The Gold Hours. I have an empty box in the case room. Five keepers have weighed your core. I trust none has dusted a box for you yet.",
  },
  {
    id: "wayside_age_rooms",
    title: "Age Roads: The Quiet Rooms",
    paragraphs: [
      "On the steppe road a low white building keeps the cradles, the pool and the wall of names. Nascent souls are raised here for four hundred years, and nobody speaks above a murmur.",
      "Five keepers wait in the quiet, each watching a soul grow, and each of a different age.",
    ],
    back: "You come out of the Quiet Rooms with a small clear presence settling behind your eyes. The steppe wind is loud, and you find yourself speaking more gently than you meant to.",
    origin: "still_hub_b4_c",
    label: "Walk to the low white building on the steppe road, where five keepers of five ages raise, mend and watch the nascent souls of cultivators.",
    realm: 4,
    flavour: "road",
    remark: "The Quiet Rooms. I was asked to lower my voice there. Five keepers have raised a soul beside you. If it is a child, be patient. If an elder, hope it is kind.",
  },
  {
    id: "wayside_age_table",
    title: "Age Roads: The Unwritten Table",
    paragraphs: [
      "In the shadow of the Glass Sea’s great feast a long table stands in an empty hall, laid for guests who have all died. The severed gather there to cut the cords of old names.",
      "Five keepers rise from the places they have laid, each lighter in a different way.",
    ],
    back: "You leave the long table lighter than you came, though you cannot say what was set down. The feast is loud and bright, and you find that you look at it a little as if from a window.",
    origin: "festival_close",
    label: "Slip away from the feast to the long table in the empty hall, where five keepers of five ages cut the cords that tie a spirit to its old names.",
    realm: 5,
    flavour: "road",
    remark: "The unwritten table. I have a place laid there already, and so, I suspect, have you. Five keepers have set it. I am afraid to ask whose name.",
  },
  {
    id: "wayside_age_house",
    title: "Age Roads: The Leaning House",
    paragraphs: [
      "On the Ash Bridge’s far bank a long house stands whose floor tilts, very gently, toward something. The Seekers there carry their own faint silver, and do not light lamps.",
      "Five keepers stand along the tilted hall. Each has leaned a lifetime, and each leans at a different angle.",
    ],
    back: "You leave the Leaning House with the ground sloping oddly under your feet. The bridge is level, and you cannot quite trust it.",
    origin: "bridge_close",
    label: "Cross to the house on the far bank, where five keepers of five ages lean toward the Dao on a floor that tilts to meet them.",
    realm: 6,
    flavour: "road",
    remark: "The Leaning House. I fell over on its floor. Five keepers have taught you to lean. If you can no longer stand upright, I shall take it as a good sign.",
  },
  {
    id: "wayside_age_sill",
    title: "Age Roads: The Open Sill",
    paragraphs: [
      "On the eve of the last sealing a plain stone threshold stands on a bare floor, with a warm draught coming through. The sky above it is no longer a ceiling.",
      "Five keepers stand about the sill. Each has an excuse to stay, and each is old, or young, in a manner of their own.",
    ],
    back: "You step back from the sill with a warm draught on your face. The last sealing is still ahead, as it has always been, and you have the feeling that the door will be there when you want it.",
    origin: "lastseal_entry",
    label: "Climb to the open sill before the last sealing, where five keepers of five ages stand at a door that is already open.",
    realm: 7,
    flavour: "road",
    remark: "The open sill. I stood at it once and did not cross, and regret neither. Five keepers have shown you the door. Notice how warm it is.",
  },
];

const SPECS8: AgeSpec[] = [...ageSpecs1, ...ageSpecs2, ...ageSpecs3, ...ageSpecs4];
const PER_WAYSIDE = 5;
/** Every earlier wave uses indices 0 to 199 to pick wording; the Age Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 200;
export const BACK8 = (origin: string) => `back8_${origin}`;

/** The wayside scenes whose five roads are all written. */
const built = WAYSIDES8.filter((_, n) => SPECS8.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS8.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: AgeSpec; ctx: RoadContext8 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: AGE_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

type HubMood = "furious" | "afraid" | "suspicious" | "tender";
/** The Elder’s short word at the hub when her face is not stern, by the face and the realm of the wayside. Eighteen words or fewer each. */
const HUB_MOOD: Record<HubMood, string[]> = {
  furious: [
    "Smell of rice on you, and cold feet. I do not care to hear about the almshouse.",
    "You are carrying a thread of qi the way a child carries a knife. Put it down.",
    "Chalk on your boots, and the Law Hall’s floor under them. Wipe them.",
    "There is gold dust on your sleeve. I am in no humour to be told whose.",
    "Something small and bright is watching me over your shoulder. Make it stop.",
    "You smell of old incense. I have sat at that table. Do not tell me about it.",
    "The floor is tilting under me. If that is your doing, I will not forgive it.",
    "The air has changed. If you have opened something, I wish you to close it.",
  ],
  afraid: [
    "I do not like how short the almshouse’s numbers are. Please do not read them to me.",
    "The cold in that cloister is the cold of a thing that was never warm. Stay away from it.",
    "Floors that ring when they are tapped. I would rather not know what is under mine.",
    "I have a box in the case room, and I should not have told you so. Forget it.",
    "The small bright things are listening. I would sooner you did not wake any.",
    "Do not tell me which place is laid. I have counted. I would sooner be wrong.",
    "The house leans. I feel it from here, and I do not like where it points.",
    "The door is open. Please do not go through it until I have said what I wanted to say.",
  ],
  suspicious: [
    "Five keepers, and every one of them asked your age. What did you tell them?",
    "Five keepers of a cold thread, and you came out with all your fingers. Explain.",
    "Five keepers, and not one of them has complained of you. That is suspicious in itself.",
    "Five keepers have weighed you, and the scale did not tip. I should like to see the scale.",
    "Five keepers of the quiet, and you came back loud. Why?",
    "Five keepers of the long table, and not a dish out of place. What did you say?",
    "Five keepers who lean, and you stand straight. I wonder what you have been told.",
    "Five keepers at the threshold, and you are not on the other side. I find that more telling than if you were.",
  ],
  tender: [
    "Sit down. Eat something. The almshouse barley is plain, and it is the best thing I know.",
    "Sit by the lamp. The cold will pass. It always does, after the first night.",
    "Come in, and sit. The floors can wait, and so, tonight, can the rest of the Law.",
    "Sit by me. The evening is long, and I would be glad of company for it.",
    "Sit, and speak softly. There is a great deal of listening in this room.",
    "Sit down. The table is laid, and not for you. Not tonight.",
    "Sit. The floor tilts, but the chair does not. I have checked.",
    "Sit with me a while. The door will keep, and the draught is kind.",
  ],
};

const HUB_FACE: [HubMood, Condition][] = [
  ["furious", { kind: "mood", is: "furious" }],
  ["afraid", { kind: "mood", is: "afraid" }],
  ["suspicious", { kind: "mood", is: "suspicious" }],
  ["tender", { kind: "mood", is: "tender" }],
];

function waysideScene8(w: Wayside8, n: number, roads: { spec: AgeSpec; index: number }[]): Scene {
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: ageDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their years and go back to where you left the road.", tone: "quiet", next: BACK8(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: ageDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...HUB_FACE.map(([mood, when]) => ({ when: [when], line: HUB_MOOD[mood][n % HUB_MOOD[mood].length] })),
      { when: [{ kind: "count", prefix: ageDonePrefix(n + 1), min: PER_WAYSIDE } as Condition], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack8(w: Wayside8, origin: Scene): Scene {
  return {
    id: BACK8(w.origin),
    title: `Back from ${w.title.replace("Age Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the scenes of its five roads. */
export const ageGroups: { name: string; wayside: Wayside8; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene8(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad8(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s report on every Age Road, and her answer to its door of years. */
export const ageScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => {
    const report = buildReport8(spec, ctx);
    const door = buildDoorScenario(spec, ctx);
    return [[report.id, report] as const, [door.id, door] as const];
  }),
);

/** The goods and holdings of every Age Road. */
export const ageItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(synthesize(spec, ctx.realm), ctx).id, wareItem(synthesize(spec, ctx.realm), ctx)]));
export const ageAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(synthesize(spec, ctx.realm), ctx).id, holdingAsset(synthesize(spec, ctx.realm), ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const ageEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const ageRoadRealms = WAYSIDES8.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
export { SPECS8, PER_WAYSIDE };
