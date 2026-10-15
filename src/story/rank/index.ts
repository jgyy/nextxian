import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Condition, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildDoorScenarios, buildReport10, buildRoad10, RANK_WAYSIDE_BASE, rankDoneFlag, rankDonePrefix, synthesize, type RoadContext10 } from "./build";
import { RUNGS, type Rung } from "./lexicon-rank";
import type { RankSpec } from "./spec";
import { rankSpecs1 } from "./specs-1";
import { rankSpecs2 } from "./specs-2";
import { rankSpecs3 } from "./specs-3";
import { rankSpecs4 } from "./specs-4";

export interface Wayside10 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the roads here ask: the rung of the wayside is the rung of this realm. */
  realm: number;
  rung: Rung;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/**
 * The eight Rank Roads, in the order of the realms. Each wayside belongs to one rung of the sect, from the roll of mortal hands to the last column of the
 * Ledger, and holds four roads, one for each of four keepers: a woman who reads a stranger’s rank before their sex, a man who does, a woman who reads their
 * sex before their rank and a man who does.
 */
export const WAYSIDES10: Wayside10[] = [
  {
    id: "wayside_rank_roll",
    title: "Rank Roads: The Roll-Yard",
    paragraphs: [
      "Behind the scroll-room a service passage runs past the lodge to a flagged yard where the sect keeps its hands: a roll-desk, a sleeve-gate, a well-court and a load-yard, each under its own slate roof.",
      "Four keepers count them, two women and two men, and each has heard that a stranger was seen in the Law Hall with a scroll in the sleeve. Each would like to know whether you are a hand, a sleeve or neither.",
    ],
    back: "You slip back into the scroll-room with the yard’s lamp-oil on your sleeve. The lantern is still passing, the scroll is still warm, and the roll behind you has closed over the place where you stood.",
    origin: "scroll_theft",
    label: "Slip out by the service passage behind the scroll-room to the roll-yard, where four keepers count the sect’s mortal hands by water, load, sleeve and sex.",
    realm: 0,
    rung: "roll",
    flavour: "mountain",
    remark: "The roll-yard. I stood in that queue once, before anyone had written me down as anything. Four keepers have counted you. Which column did you let them put you in?",
  },
  {
    id: "wayside_rank_novices",
    title: "Rank Roads: The Novices’ Halls",
    paragraphs: [
      "Below the courtyard wall, across beaten earth, two low halls face each other with a covered passage between them. In the grey dawn the first novices are already on their porches.",
      "Four keepers tend them, two women and two men. They noticed the grey cloak on Ren Qiao’s arm, a novice’s colour, and each would like to know which hall you would have slept in.",
    ],
    back: "You climb back to the wall with a bell’s hum in your ears. Ren Qiao is where you left him, with the cloak, and the halls below have gone back to their benches.",
    origin: "archive_dawn",
    label: "Cross the courtyard in the grey light to the novices’ halls, where four keepers ring, roll, bathe and lamp the sect’s first sleeves.",
    realm: 1,
    rung: "novices",
    flavour: "mountain",
    remark: "The novices’ halls. I was benched in the white hall once, and bowed to by a grey boy two hundred days my junior. I have not forgotten the bow. Four keepers have benched you. Which hall did they say you came from?",
  },
  {
    id: "wayside_rank_pairing",
    title: "Rank Roads: The Pairing Board",
    paragraphs: [
      "Beyond the terrace wall of the tribunal a great black frame leans on the stone, ruled in columns and slick with chalk. About it stand a fee-desk, a scoring gallery and a yard behind the kitchen.",
      "Four keepers work them, two women and two men. The disciples have not stopped talking about the sealing orders, and each keeper would like to know whom you would be paired against.",
    ],
    back: "You come back to the terrace with chalk-dust on your cuffs. The crowd is still roaring, the orders are still in Lin Yuan’s hands, and the board behind you has chalked another pair.",
    origin: "tribunal_crowd_2",
    label: "Slip down from the terrace to the pairing board, where four keepers chalk, score, charge and secretly host the bouts of the Foundation builders.",
    realm: 2,
    rung: "pairing",
    flavour: "mountain",
    remark: "The pairing board. I have been chalked against a man twice my size and against a woman twice my age, and the second bout was the harder. Four keepers have paired you. Whom did you ask for?",
  },
  {
    id: "wayside_rank_seats",
    title: "Rank Roads: The Ring of the Guesthouse",
    paragraphs: [
      "At the end of the guesthouse corridor a panelled room holds the ring where the Censors’ audit sat: twelve chairs in a circle, a stove at one end and a great door at the other. The chairs have been left as they were.",
      "Four keepers tend it, two women and two men, and they watched the Censors go. Each would like to know which chair a Core cultivator of your sort would have been given.",
    ],
    back: "You come back to the Law Hall’s held breath with the guesthouse’s woodsmoke in your sleeves. The mountain is still saying what it will of you, and the ring behind you has cooled.",
    origin: "censors_close",
    label: "Cross to the guesthouse’s panelled room, where four keepers key, steward, warm and minute the twelve chairs of the ring.",
    realm: 3,
    rung: "seats",
    flavour: "mountain",
    remark: "The ring in the guesthouse. I have sat at the hearth and been unheard, and at the door and been over-heard. Four keepers have given you a chair. Did you stay in it?",
  },
  {
    id: "wayside_rank_portraits",
    title: "Rank Roads: The Painters’ Sheds of the Tidewall",
    paragraphs: [
      "Along the foot of the Wall of Names a row of salt-whitened sheds hangs the portraits of the coast’s Nascent masters, each a soul in a lamp-lit blur. The painters sit in them from noon to dusk with the north light on their sable.",
      "Four keepers rule the row, two women and two men, and they have seen Mei Qiu on the sea steps. Each would like to know whether you are the sort of person who sits for a portrait.",
    ],
    back: "You climb back to the sea steps with linseed on your fingers. Mei Qiu has not moved, the gulls have come back, and the Wall stands in the glare with its mile of names.",
    origin: "harbour_close",
    label: "Go down the sea steps to the painters’ sheds beneath the Wall, where four keepers sit, hang, dress and store the souls of the coast’s Nascent masters.",
    realm: 4,
    rung: "portraits",
    flavour: "road",
    remark: "The painters’ sheds. A soul has no sex, and I was painted with a braid anyway. Four keepers have measured your light. Which robe did you let them reach for?",
  },
  {
    id: "wayside_rank_severing",
    title: "Rank Roads: The Severing Hall of Fort Ruo",
    paragraphs: [
      "Beside the school at Fort Ruo a low grey hall stands apart from the barracks, paved in flag, where the Concord posts a sage to cut the cords of those who will not go home. The soldiers go round it, and then, one by one, in.",
      "Four keepers work it, two women and two men, and the boy with the tooth has told them all about you. Each would like to know which cord you would cut first.",
    ],
    back: "You come back across the yard with a grey thread on your cuff. Yue Zhaoning is still on the steps with the boy, and the hall behind you has settled into its stone quiet.",
    origin: "vigil_close",
    label: "Cross the yard to the low grey hall beside the school, where four keepers cut, hold, sort and write for the sages of the sixth realm.",
    realm: 5,
    rung: "severing",
    flavour: "road",
    remark: "The severing hall. I have cut three cords in my life and kept the fourth. Four keepers have held the thread for you. Which did you cut, and which did you keep?",
  },
  {
    id: "wayside_rank_table",
    title: "Rank Roads: The Companions’ Table",
    paragraphs: [
      "Beside the great doors of the Hall of the Ninth Night a low cedar room keeps the table where Dao Seekers choose, or refuse, a companion before the Ceremony. It has a bright end, a soft end, a stool at the head and a wall of tablets.",
      "Four keepers tend it, two women and two men. Hao Lan has counted nine tiers, and each keeper would like to count which seat you would take.",
    ],
    back: "You come back to the parapet with the table-room’s orange and jasmine on your breath. Hao Lan is writing in her notebook, the wind off the Hall is cold, and the voices inside have not changed pitch.",
    origin: "tiers_close",
    label: "Slip into the cedar room beside the Hall’s great doors, where four keepers read, seat, pour and keep the pot at the companions’ table.",
    realm: 6,
    rung: "table",
    flavour: "road",
    remark: "The companions’ table. The Dao has no side, and the table has two, and I took neither. Four keepers have offered you a seat. Which did you sit in?",
  },
  {
    id: "wayside_rank_column",
    title: "Rank Roads: The Copyists of the Last Column",
    paragraphs: [
      "Behind the Archive’s black door, in the long hall of slate that the ward guarded, the copyists have laid out their desks, row on row. At its far end a pane like glass holds the last page of the Ledger, copied from a copy.",
      "Four keepers keep it, two women and two men, and they stood when the ward went out. Each would like to know which column a hero who has come this far would be written in.",
    ],
    back: "You come back to the Archive step with vellum-dust on your sleeves. Lin Yuan is still on it with his ring, the cloud is still gold, and the hall behind you has gone back to its ruling.",
    origin: "archive_close",
    label: "Go in through the black door to the hall of the page, where four keepers copy, clear, tend and ink the last page of the Ledger.",
    realm: 7,
    rung: "column",
    flavour: "mountain",
    remark: "The last column. I was written once in the margin, in a hand too small to read. Four keepers have asked where you would be written. What did you say?",
  },
];

const SPECS10: RankSpec[] = [...rankSpecs1, ...rankSpecs2, ...rankSpecs3, ...rankSpecs4];
const PER_WAYSIDE = 4;
/** Every earlier wave uses indices 0 to 279 to pick wording; the Rank Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 280;
export const BACK10 = (origin: string) => `back10_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES10.filter((_, n) => SPECS10.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS10.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: RankSpec; ctx: RoadContext10 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: RANK_WAYSIDE_BASE + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour },
  })),
);

type HubMood = "furious" | "afraid" | "suspicious" | "tender";
/** The Elder’s short word at the hub when her face is not stern, by the face and the rung of the wayside. Fourteen words or fewer each. */
const HUB_MOOD: Record<HubMood, Record<Rung, string>> = {
  furious: {
    roll: "Wet rope and lamp-oil. I know that yard. Say nothing of your column.",
    novices: "I can hear the bell on you. Say nothing of which hall.",
    pairing: "Chalk on your cuffs. Whoever paired you has my full contempt.",
    seats: "Woodsmoke and cold tea. I have sat in that ring. Be brief.",
    portraits: "You smell of linseed. I will not be painted again. Speak.",
    severing: "Grey thread. I have cut enough. Whatever you cut, keep it.",
    table: "Orange peel and jasmine. I have refused that table twice. Do not ask.",
    column: "Vellum-dust. I know whose hand wrote the margin. Not a word.",
  },
  afraid: {
    roll: "The roll-yard knows what everyone was before. Please do not ask it about me.",
    novices: "The halls keep a bench for the girl I was. I avoid it.",
    pairing: "That board has paired me with worse than you. I fear it will again.",
    seats: "The ring remembers who sat where. I am afraid it remembers me.",
    portraits: "The painters can see a soul. I would sooner they could not.",
    severing: "I fear the thread, and what it holds once it is cut.",
    table: "That table asks for a choice, and I have only ever refused one.",
    column: "The page has a line I fear to read. Say it is not mine.",
  },
  suspicious: {
    roll: "Four keepers, and you came back uncounted. How did you do that?",
    novices: "Four keepers of benches, and you came back unbenched. Explain.",
    pairing: "Four keepers of pairs, and you came back unpaired. How?",
    seats: "Four keepers of chairs, and you came back standing. I take note.",
    portraits: "Four painters, and not one portrait. What did you hide?",
    severing: "Four keepers of cords, and you came back uncut. Whom are you keeping?",
    table: "Four stewards, four seats, and you sat in none. Wisdom, or art?",
    column: "Four copyists, and you were written nowhere. I wonder what that cost.",
  },
  tender: {
    roll: "Come and sit. Nobody is counting anything in this room tonight.",
    novices: "Sit down. There is no bench here, only the one by the fire.",
    pairing: "Sit with me. Nobody has to be paired against anyone in this room.",
    seats: "Take the chair by the fire. It has no side.",
    portraits: "Sit here. I shall not paint you, or ask what you are.",
    severing: "Come in. I have cut nothing tonight, and shall not ask you to.",
    table: "Come and sit. The table is empty, and I do not mind which end.",
    column: "Sit. I have one name to write tonight, and it is only my own.",
  },
};

function waysideScene10(w: Wayside10, n: number, roads: { spec: RankSpec; index: number }[]): Scene {
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
    requires: [{ kind: "flag", flag: rankDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already worked here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the keepers to their rungs and go back to where you left the road.", tone: "quiet", next: BACK10(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: roads.flatMap(({ spec }) => {
      const slots = { place: spec.place, kname: spec.kname };
      return [
        { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: rankDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
          group: spec.id,
        },
      ];
    }),
    interjections: [
      ...face.map(([mood, when]) => ({ when: [when], line: HUB_MOOD[mood][w.rung] })),
      { when: [{ kind: "count", prefix: rankDonePrefix(n + 1), min: PER_WAYSIDE } as Condition], line: w.remark },
    ],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack10(w: Wayside10, origin: Scene): Scene {
  return {
    id: BACK10(w.origin),
    title: `Back from ${w.title.replace(/^Rank Roads: The /, "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the scenes of its four roads. */
export const rankGroups: { name: string; wayside: Wayside10; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene10(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad10(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s report on every Rank Road, and her answer to each thing a hero can do at its doors. */
export const rankScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.flatMap(({ spec, ctx }) => [buildReport10(spec, ctx), ...buildDoorScenarios(spec)].map((scenario) => [scenario.id, scenario] as const)),
);

/** The goods and holdings of every Rank Road. */
export const rankItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(synthesize(spec), ctx).id, wareItem(synthesize(spec), ctx)]));
export const rankAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(synthesize(spec), ctx).id, holdingAsset(synthesize(spec), ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const rankEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const rankRoadRealms = WAYSIDES10.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, rung: w.rung }));
export { SPECS10, RUNGS };
