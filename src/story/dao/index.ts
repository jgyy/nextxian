import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { holdingAsset, reportedFlag3, wareItem } from "../fortune/build";
import { buildReport4, buildRoad4, daoDoneFlag, daoDonePrefix, type RoadContext4, type RoadSpec4 } from "./build";
import { HUB_RANK } from "./lexicon";
import { daoSpecs1 } from "./specs-1";
import { daoSpecs2 } from "./specs-2";
import { daoSpecs3 } from "./specs-3";
import { daoSpecs4 } from "./specs-4";
import { daoSpecs5 } from "./specs-5";

export interface Wayside4 {
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
  /** The rank in a Dao a hero needs to be shown a master’s inner room here. */
  rank: number;
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/** The ten Dao Roads, in the order of the story. */
export const WAYSIDES4: Wayside4[] = [
  {
    id: "wayside_dao_annexes",
    title: "Dao Roads: The Archive Annexes",
    paragraphs: [
      "Along the outer wall of the Ash Archive the sect has let a row of sheds grow up against the stone. Each is lent to a craftsman who works for the archive and is paid in the right to stay. They are called the annexes, and they are where the sect keeps the trades it cannot do without and does not like to be seen needing.",
      "Four of the sheds have a lamp lit for you. Each belongs to a master of a different craft, and each asks the same question in a different voice: what do you make, and who taught you?",
    ],
    back: "You climb out of the annexes’ smoke into the archive yard. The front doors are where you left them, and the ash on the steps has not been disturbed since you went down.",
    origin: "archive_front",
    label: "Go down the side stair to the annexes along the archive wall, where the sect keeps the trades it cannot do without.",
    realm: 1,
    rank: 1,
    flavour: "mountain",
    remark: "Four sheds against the archive wall, and you have worked in each. I have walked past them for twelve years and thought them part of the wall. I begin to see that the wall was never the point.",
  },
  {
    id: "wayside_dao_terraces",
    title: "Dao Roads: The Pilgrim Terraces",
    paragraphs: [
      "Below the sutra door the pilgrims who came to read the inscriptions have cut terraces into the cliff, and on each terrace a hut. In each hut lives somebody who practises a living Dao and sells what it gives to those who climbed too far to turn back.",
      "Four of the huts have their doors open. They keep the old rule of the terraces: a guest is fed first and asked afterwards, and the question is always the same, which is what you can do.",
    ],
    back: "You climb back to the foot of the inscriptions with the small fires of the terraces below you. The characters on the wall have not changed, but you read them with different eyes.",
    origin: "sutra_inscriptions",
    label: "Turn aside at the pilgrim terraces below the inscriptions, where living trades are cut into the cliff.",
    realm: 1,
    rank: 1,
    flavour: "mountain",
    remark: "The terraces under the inscriptions. I have forbidden pilgrims to build there four times, and each time they built a little higher. You have eaten at four doors. I will not ask what you were asked.",
  },
  {
    id: "wayside_dao_cloister",
    title: "Dao Roads: The Cloister of Borrowed Hands",
    paragraphs: [
      "Behind the sutra hall a cloister of eight cells holds the craftsmen the sect borrows when a rite needs a hand it does not own. Each cell is warm and each is locked from the inside, and each opens to anyone who can show its master that they know what they are asking for.",
      "Four of the cells have been left ajar for you. The masters inside have all asked the sect for the same thing over the years, which is to be left to their work, and all have been refused.",
    ],
    back: "You come out of the cloister into the sutra hall’s cold light. The air smells of ink and metal and something sweeter, and the hall’s doors have not moved.",
    origin: "sutra_temptation",
    label: "Slip behind the sutra hall to the cloister of borrowed hands, where eight masters keep their cells.",
    realm: 2,
    rank: 1,
    flavour: "mountain",
    remark: "The borrowed hands. I signed for them every season and never once went in. You have been in four cells. I begin to think the sect has been borrowing the wrong things.",
  },
  {
    id: "wayside_dao_yards",
    title: "Dao Roads: The Tribunal Yards",
    paragraphs: [
      "While the masters sit in judgment, the courtyards fill with those who have come to watch: families, witnesses, hangers-on, and the craft-folk who feed and mend them. They have built a market of lean-tos against the tribunal wall, and every lean-to belongs to a master of something.",
      "Four of the lean-tos are quieter than the rest. They belong to people who have seen the tribunal before, and each has made a trade of what the waiting does to a body and a mind.",
    ],
    back: "You come back to the tribunal’s steps with the yards’ noise fading behind you. The bell has not yet rung, and the line of witnesses has not moved.",
    origin: "tribunal_masters",
    label: "Step out into the tribunal yards, where those who wait for the judgment have built a market against the wall.",
    realm: 2,
    rank: 1,
    flavour: "mountain",
    remark: "The yards at the tribunal. I have never found a day when they were empty, and never asked why. You have dealt with four of the masters in them. I would like to hear what they said about me.",
  },
  {
    id: "wayside_dao_mistedge",
    title: "Dao Roads: The Mist-Edge Camps",
    paragraphs: [
      "At the lip of the abyss path the mist thins to a haze, and in the haze small camps have been pitched by people who live off what comes up from the dark. They keep lamps, they mend ropes, they sell what the mist gives back, and they are the only people on the mountain who are not afraid of it.",
      "Four of the camps hang a lantern at their door for you. Each belongs to someone who has worked the mist long enough to know the trade it has taught them, and who will tell you the price of learning it.",
    ],
    back: "You climb back up from the mist’s edge with the camps’ lanterns small and yellow below you. The abyss path is where you left it, and the haze has not lifted.",
    origin: "descent_mist",
    label: "Turn aside at the mist-edge camps, where those who live off the abyss keep their lamps lit.",
    realm: 2,
    rank: 2,
    flavour: "mountain",
    remark: "The camps at the lip of the abyss. I thought them squatters and had them counted every spring. You have eaten at four of their fires. I withdraw the count.",
  },
  {
    id: "wayside_dao_guilds",
    title: "Dao Roads: The Guilds of Qinglian Ford",
    paragraphs: [
      "Past the customs quay the river town keeps a single street where the guilds of Qinglian Ford hold their halls. Each guild has a sign, a lamp, a master and a rule, and the street is quiet at noon because nobody on it has ever needed to shout.",
      "Four of the halls have sent a boy to the quay to bring you in. Each guild has heard that a cultivator of your kind has come to the ford, and each would like to know whether you work for anyone.",
    ],
    back: "You come back to the quay with the guild bells ringing the hour behind you. The river is the colour of old tin, and the barge is where you left it.",
    origin: "b2_gate",
    label: "Walk up from the quay to Guild Row, where the crafts of Qinglian Ford keep their halls.",
    realm: 3,
    rank: 2,
    flavour: "road",
    remark: "Guild Row at the ford, and four of its halls know your name. The Concord’s clerks spend their lives trying to be known in that street. You managed it in an afternoon, and I do not know whether to be proud or afraid.",
  },
  {
    id: "wayside_dao_workyards",
    title: "Dao Roads: The Tidewall Workyards",
    paragraphs: [
      "Behind the wall of carved names the harbour town keeps its workyards: long sheds, drying racks, slips and tanks where the coast’s crafts are practised in the open air. The wall’s shadow falls across them every afternoon, and nobody has ever complained.",
      "Four of the yards have a hand raised to you. Each belongs to a master who learned the trade from a parent, and who has never taught it to a stranger, and who looks at you as though that might change.",
    ],
    back: "You come back through the Tidewall’s shadow with the yards’ smells in your coat. The harbour is as busy as you left it, and the gulls have not moved from the mast.",
    origin: "tide_arrive",
    label: "Turn into the workyards behind the wall of carved names, where the coast’s crafts are practised in the open air.",
    realm: 3,
    rank: 2,
    flavour: "road",
    remark: "The workyards behind the Tidewall. I am told that the coast’s masters teach no one outside their family. You have been taught by four. I shall not ask what they asked in return.",
  },
  {
    id: "wayside_dao_felts",
    title: "Dao Roads: The Felt-Tent Crafts",
    paragraphs: [
      "On the grass beyond the caravan ground the clans keep their crafts in felt tents of their own: a smith’s, a healer’s, a tamer’s, a reader of bones. They are not for sale. They are for those the clan has decided to trust.",
      "Four tents have their flaps tied back. The grass has been watching you for a day, and these four have decided that you may come in.",
    ],
    back: "You ride back across the trampled grass with the tents’ smoke behind you. The column is where you left it, and the Listeners are, as ever, pretending not to have been watching.",
    origin: "caravan_entry",
    label: "Ride out to the felt tents beyond the caravan ground, where the clans keep their crafts for those they trust.",
    realm: 4,
    rank: 2,
    flavour: "road",
    remark: "The felt-tent crafts. The Listeners do not teach them to outsiders, and they have taught you in four tents. I shall ask you, in a year, what they heard in your silence.",
  },
  {
    id: "wayside_dao_kilns",
    title: "Dao Roads: The Kiln Terraces of the Glass Sea",
    paragraphs: [
      "On the bluff above the first plates of the Glass Sea the skiff-wrights have cut kiln terraces into the rock, and the heat of them wavers the air for a mile. Every craft that needs fire or light has a terrace here, and each terrace has a master who has outlived three apprentices.",
      "Four of the terraces have lit their kilns for you. The glass is bright enough to hurt, and the masters of these four have learned to work with their eyes shut.",
    ],
    back: "You come down from the terraces with the glare still in your eyes. The skiff track is a grey thread across the plates, and the kilns’ roar is a hum behind you.",
    origin: "skiff_entry",
    label: "Climb the bluff to the kiln terraces above the first plates, where every craft that wants fire has a terrace.",
    realm: 5,
    rank: 3,
    flavour: "road",
    remark: "The kiln terraces. I have never stood in front of a glass kiln, and I am told it is a fine way to lose your eyebrows. You seem to have kept yours. I assume you were taught something.",
  },
  {
    id: "wayside_dao_workrooms",
    title: "Dao Roads: The Last Workrooms",
    paragraphs: [
      "Under the Ash Archive, past the eight keys and before the ninth, there is a corridor of rooms that were old when the sect was founded. The masters who work there were sealed in with the first ward, and they have been waiting fifteen years for someone who is not afraid of them.",
      "Four of the rooms have opened their doors for you. They have been closed since the Sealing Night, and the masters inside do not know that the Law has changed. They only know a cultivator has come, and what that asks of them.",
    ],
    back: "You climb back out of the corridor with the workrooms’ lamps dimming behind you. The archive above is quiet, the eight keys are where you left them, and the ninth is still to be found.",
    origin: "archive_entry",
    label: "Go down the archive’s long corridor to the last workrooms, where masters have waited since the Sealing Night.",
    realm: 6,
    rank: 3,
    flavour: "road",
    remark: "The last workrooms, and four masters who had not seen a living face in fifteen years. I do not know what to say, except that I am glad one of them was you.",
  },
];

const SPECS4: RoadSpec4[] = [...daoSpecs1, ...daoSpecs2, ...daoSpecs3, ...daoSpecs4, ...daoSpecs5];
const PER_WAYSIDE = 4;
/** Fortune Roads use indices 0 to 39 to pick wording; the Dao Roads start after them so no road repeats another’s choices. */
const INDEX_BASE = 40;
export const BACK4 = (origin: string) => `back4_${origin}`;

/** The wayside scenes whose four roads are all written. */
const built = WAYSIDES4.filter((_, n) => SPECS4.length >= (n + 1) * PER_WAYSIDE);

const withContext = built.flatMap((w, n) =>
  SPECS4.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot): { spec: RoadSpec4; ctx: RoadContext4 } => ({
    spec,
    ctx: { index: INDEX_BASE + n * PER_WAYSIDE + slot, wayside: 100 + n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour, rank: w.rank },
  })),
);

function waysideScene4(w: Wayside4, n: number, roads: { spec: RoadSpec4; index: number }[]): Scene {
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: daoDoneFlag(n + 1, spec.id), is: false }],
    lockedHint: "You have already dealt here.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the masters to their work and go back to where you left the road.", tone: "quiet", next: BACK4(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: [
      ...roads.flatMap(({ spec }) => {
        const slots = { place: spec.place, kname: spec.kname };
        return [
          { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
          {
            when: [{ kind: "flag" as const, flag: daoDoneFlag(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
            paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
            group: spec.id,
          },
        ];
      }),
      ...[0, 1, 2, 3, 4].map((rank) => ({
        when: [{ kind: "hero" as const, field: "dao" as const, not: ["none"] }, { kind: "mastery" as const, min: rank, max: rank }],
        paragraphs: [HUB_RANK[rank]],
        group: "rank",
      })),
    ],
    interjections: [{ when: [{ kind: "count", prefix: daoDonePrefix(n + 1), min: PER_WAYSIDE }], line: w.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack4(w: Wayside4, origin: Scene): Scene {
  return {
    id: BACK4(w.origin),
    title: `Back from ${w.title.replace("Dao Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the 100 scenes of its four roads. */
export const daoGroups: { name: string; wayside: Wayside4; scenes: Scene[] }[] = built.map((w, n) => {
  const here = withContext.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE);
  const scenes = [waysideScene4(w, n, here.map(({ spec, ctx }) => ({ spec, index: ctx.index }))), ...here.flatMap(({ spec, ctx }) => buildRoad4(spec, ctx))];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s reports on every Dao Road. */
export const daoScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.map(({ spec, ctx }) => {
    const scenario = buildReport4(spec, ctx);
    return [scenario.id, scenario] as const;
  }),
);

/** The goods and holdings of every Dao Road. */
export const daoItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(spec, ctx).id, wareItem(spec, ctx)]));
export const daoAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(spec, ctx).id, holdingAsset(spec, ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const daoEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const daoRoadRealms = WAYSIDES4.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, rank: w.rank }));
export { SPECS4 };
