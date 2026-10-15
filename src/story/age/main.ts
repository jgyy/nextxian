import type { Choice, Condition, NpcScenario, Scene, Tier } from "@/engine/types";
import { parseRemarks } from "@/engine/markup";

/**
 * The years in the main line. At seven turning points of the story, a hero whose years are far from the ordinary is offered a way of meeting the scene
 * that only their age allows: a youth trusts the quickness of the body, someone seasoned leans on what they have learned, an elder spends the
 * years with care. The way costs qi or pays in insight, adds to cultivation, and is answered at once by the Elder. It is hidden from everyone else.
 */

export type Turn = "quick" | "seasoned" | "slow";

interface Scene7 {
  id: string;
  labels: Record<Turn, string>;
  /** What the Elder adds about the scene, in her own words, after her answer to the age. */
  tail: string;
}

export const TURNS: Scene7[] = [
  {
    id: "gate",
    labels: {
      quick: "Take the last steps at a run, with the rain in your face, and give your name before you have caught your breath.",
      seasoned: "Give your name slowly, in the voice of someone who has said it in many halls, and wait to be believed.",
      slow: "Lean on the lintel, give your name, and ask the disciple to forgive the pace.",
    },
    tail: "The gate remembers who came up it quickly and who came up it slow.",
  },
  {
    id: "law_hall",
    labels: {
      quick: "Answer her before she has finished asking, and let your voice carry the quickness of your years.",
      seasoned: "Answer her after a pause, in the manner of someone who has seen a hall like this one before.",
      slow: "Answer her slowly, as one speaks who has little time and does not intend to waste any of it.",
    },
    tail: "The Law Hall hears the years in an answer before it hears the answer.",
  },
  {
    id: "abyss_entry",
    labels: {
      quick: "Trust the speed of your body on the narrow ledge, and move before the mist can close.",
      seasoned: "Use the years you have spent on edges like this one to place each foot where it will hold.",
      slow: "Go along the ledge one step at a time with a hand on the rock, and let the mist wait.",
    },
    tail: "The ledge is the same width for the young and for the old, and does not care which.",
  },
  {
    id: "archive_gate",
    labels: {
      quick: "Take the long way round at a half run, and read the order aloud as you go, for the pleasure of the sound.",
      seasoned: "Read the order twice, silently, and take the shortest of the three ways round.",
      slow: "Walk the long way slowly, and let the order be read by the soot on the walls instead.",
    },
    tail: "The archive has seen every age of clerk and has opinions on all of them.",
  },
  {
    id: "sutra_door",
    labels: {
      quick: "Put your whole weight against the lacquer, and let the heat of your years push at the door.",
      seasoned: "Lay your palm on the lotus keyhole and wait, since you have waited at doors before.",
      slow: "Sit on the threshold with your back to the lacquer, and let the door get used to you.",
    },
    tail: "A door that does not open for the young may open for the old, and the reverse, and the Law has never found the rule.",
  },
  {
    id: "descent_return",
    labels: {
      quick: "Accept the task quickly, before the Elder can change her mind, and tell her you will be down and back by morning.",
      seasoned: "Accept the task after asking what the Law will do if you are late, since you are not the age to be early.",
      slow: "Accept the task and ask for a mat by the stair, since the descent will be slow and you will want to rest.",
    },
    tail: "She has sent the young down this stair and the old, and keeps no record of which came back sooner.",
  },
  {
    id: "sealing_night",
    labels: {
      quick: "Step into the glow before it spreads, and let the old voices see how young you are.",
      seasoned: "Hold the order up and wait, as someone does who knows how little the dark can be hurried.",
      slow: "Lower yourself to the floor in the frost-light, since the voices are older than you and you would rather be sitting.",
    },
    tail: "On the sealing night even the young are made to feel their years.",
  },
];

const BANDS: Record<Turn, Condition[]> = {
  quick: [{ kind: "age", max: 19 }, { kind: "stat", stat: "qi", min: 8 }],
  seasoned: [{ kind: "age", min: 32, max: 62 }],
  slow: [{ kind: "age", min: 63 }],
};

export const TURN_PREFIX = "ag_main_";
export const turnFlag = (turn: Turn, id: string) => `${TURN_PREFIX}${turn}_${id}`;
export const turnScenarioId = (turn: Turn, id: string) => `AGE_TURN_${turn.toUpperCase()}_${id.toUpperCase()}`;

const TONE = { quick: "force", seasoned: "inquiry", slow: "quiet" } as const;

/** The first way on that anyone may take: the age choices lead the same place the scene already leads. */
const nextOf = (scene: Scene): string => scene.choices.find((c) => !c.requires && !c.id.startsWith("wayside_"))!.next;

/** The hidden choices an age-gated scene gains. */
export function turnChoices(scene: Scene): Choice[] {
  const t = TURNS.find((x) => x.id === scene.id);
  if (!t) return [];
  return (Object.keys(BANDS) as Turn[]).map((turn): Choice => ({
    id: `age_${turn}`,
    label: t.labels[turn],
    tone: TONE[turn],
    next: nextOf(scene),
    requires: [...BANDS[turn], { kind: "flag", flag: turnFlag(turn, scene.id), is: false }],
    hideLocked: true,
    effects: [
      { kind: "setFlag", flag: turnFlag(turn, scene.id) },
      ...(turn === "quick"
        ? [{ kind: "addStat" as const, stat: "qi" as const, amount: -5 }, { kind: "addCultivation" as const, amount: 5 }]
        : turn === "seasoned"
          ? [{ kind: "addStat" as const, stat: "insight" as const, amount: 3 }, { kind: "addCultivation" as const, amount: 3 }]
          : [{ kind: "addStat" as const, stat: "karma" as const, amount: 2 }, { kind: "addCultivation" as const, amount: 4 }]),
    ],
    npcScenario: turnScenarioId(turn, scene.id),
  }));
}

const LINES: Record<Turn, Record<Tier, string>> = {
  quick: {
    hostile: "You are young and you are in a hurry, and the two together make a weapon you do not know how to hold. I have buried the last three who did.",
    wary: "A quick answer from a quick body. Speed is a gift, and it is also an alibi, and I am not sure yet which you are using.",
    neutral: "You move like the young: first, and then to think. I do not say it as a fault. I say it as a warning about the second half.",
    warm: "You have the quickness of your years and the sense to know it is borrowed. Spend it well. It is the one thing I cannot give back.",
    devoted: "I wish I could tell you the speed will last. I can tell you only that I am glad to see it, and that I will be watching the stairs.",
  },
  seasoned: {
    hostile: "You have been in halls like this before, and you think it makes you safe in this one. Experience is a map. It is not the ground.",
    wary: "You answer like someone who has seen the trick done and has learned to do it. I should like to know where you learned.",
    neutral: "The years in you do the work the qi does not yet. It is a fair trade, and it will not last past the next realm.",
    warm: "You wait the way only the seasoned wait, as if the waiting were a skill. It is. I wish I could teach it to my wardens.",
    devoted: "You carry your years so lightly that I forget to count them. It is the highest courtesy a cultivator can pay an Elder, and I am grateful.",
  },
  slow: {
    hostile: "You are old, and slow, and you ask the mountain to wait. The mountain has never once waited for anyone. Hurry.",
    wary: "A slow answer from an old throat. It tells me you have counted the cost, and I should like to know what the cost came to.",
    neutral: "You take your years at the pace they allow. It is not weakness. It is arithmetic, and I respect a hero who does {their} sums.",
    warm: "You go slowly, and you arrive. I have noticed that the two are not quite so far apart as the young suppose.",
    devoted: "I will wait for you at every turning. I have all the patience of a woman who also has fewer years than she would like.",
  },
};

export function turnScenarios(): Record<string, NpcScenario> {
  const out: Record<string, NpcScenario> = {};
  for (const t of TURNS) {
    for (const turn of Object.keys(BANDS) as Turn[]) {
      const id = turnScenarioId(turn, t.id);
      const lines = Object.fromEntries((Object.keys(LINES[turn]) as Tier[]).map((tier) => [tier, `${LINES[turn][tier]} ${t.tail}`])) as Record<Tier, string>;
      out[id] = { id, summary: `The player meets ${t.id.replace(/_/g, " ")} in the way their ${turn === "quick" ? "youth" : turn === "seasoned" ? "years" : "age"} allows.`, delta: { respect: 1, trust: 1 }, lines };
    }
  }
  return out;
}

const SOURCE = String.raw`
% su_ag_turns_3 | count:ag_main_>=3 | elder | Three times the mountain has let your years choose how you meet it. It does not offer that to everyone, and I should like to know why it offers it to you.
% su_ag_turns_6 | count:ag_main_>=6 | elder | Six turnings of the road, and each time you answered as your years required. You are the first hero in a long while to be the age you are, and not ashamed of it.
`;
export const parsedTurnRemarks = () => parseRemarks(SOURCE, "age/main");
