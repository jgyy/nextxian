import { GENDERS, type Gender } from "@/engine/hero";
import type { Choice, ChoiceTone, NpcScenario, Scene, Tier } from "@/engine/types";
import { parseRemarks } from "@/engine/markup";

/**
 * Gender in the main line. At seven turning points of the story, a woman, a man and someone who gives no answer are each offered a way of meeting the
 * scene that only their own allows: how a name is given at a gate, how a hall is answered, how a ledge is taken, how a warden is told, how
 * testimony is borne, how a task is accepted, how a sealing is read. The way adds a little to cultivation and a stat, is hidden from everyone it is
 * not for, and is answered at once by the Elder, who says what it is to be that hero in that room.
 */

interface Turn {
  id: string;
  labels: Record<Gender, string>;
  /** What the Elder adds about the scene, in her own words, after her answer to the hero. */
  tail: string;
}

export const TURNS: Turn[] = [
  {
    id: "gate",
    labels: {
      woman: "Give the gate disciple your name as a woman gives it to a stranger who has already decided what to call her, and let the disciple hear that you know.",
      man: "Give the gate disciple your name in the plain voice a man is allowed at a gate, and notice how readily the disciple nods.",
      unspoken: "Give the gate disciple your name and nothing else, and let the disciple fill the silence with whatever title is least frightening.",
    },
    tail: "The gate has a name for everyone who comes up it, and is the last to learn the right one.",
  },
  {
    id: "law_hall",
    labels: {
      woman: "Answer the Elder as one woman answers another in a hall built by men, plainly, and without the softening you were taught to add.",
      man: "Answer the Elder in the voice you were taught, and then, because she is watching, say the second sentence you were taught to keep back.",
      unspoken: "Answer the Elder as yourself, and let her notice that she has no honorific ready for you.",
    },
    tail: "The Law Hall hears who is speaking before it hears what is said.",
  },
  {
    id: "abyss_entry",
    labels: {
      woman: "Take the ledge as the girls of the river were taught to take a bank in flood: low, slow, and with your weight kept behind you.",
      man: "Take the ledge as the boys of the river were taught to take a bank in flood: fast, upright, and daring the mist to say a word.",
      unspoken: "Take the ledge in a way nobody taught you, and see whether the mist has a word for it.",
    },
    tail: "The ledge is the same width for every body, and does not care which.",
  },
  {
    id: "archive_gate",
    labels: {
      woman: "Give the warden the answer a woman is expected to give a warden, and watch whether he believes it or only likes it.",
      man: "Give the warden the answer one soldier gives another, and watch whether he hears an equal or a recruit.",
      unspoken: "Give the warden the answer you would give anyone, and watch which of his two kinds of courtesy he reaches for.",
    },
    tail: "The archive has seen every kind of clerk and warden, and has opinions on all of them.",
  },
  {
    id: "tribunal_testimony",
    labels: {
      woman: "Give your testimony and notice which of the masters writes it down, and which writes down who is giving it.",
      man: "Give your testimony and notice how quickly the masters write it down, and how seldom they ask for a second proof.",
      unspoken: "Give your testimony and notice that the masters cannot decide whose column to enter it in, and let them choose.",
    },
    tail: "The tribunal’s ledger has always had two columns, and some days the clerks forget which is which.",
  },
  {
    id: "descent_return",
    labels: {
      woman: "Accept the task as the Elder once accepted hers: without being asked twice, and without letting her see what it costs.",
      man: "Accept the task and ask what the Law will say if you do not come back, since nobody will ask a man twice whether he is afraid.",
      unspoken: "Accept the task and ask her to put it in writing, with your name as you give it, so the Law cannot rename you if you fail.",
    },
    tail: "She has sent every kind of person down this stair, and keeps no record of who came back sooner.",
  },
  {
    id: "sealing_night",
    labels: {
      woman: "Step into the glow and let the fourteen voices hear a woman’s voice read their order, as one of them might have read it.",
      man: "Step into the glow and let the fourteen voices hear a man’s voice read their order, and hear what it is to be the voice that signs.",
      unspoken: "Step into the glow and let the fourteen voices decide for themselves what to call the voice that is reading them.",
    },
    tail: "On the sealing night even the Law is made to hear whom it is naming.",
  },
];

export const TURN_PREFIX = "cs_main_";
export const turnFlag = (gender: Gender, id: string) => `${TURN_PREFIX}${gender}_${id}`;
export const turnScenarioId = (gender: Gender, id: string) => `CUSTOM_TURN_${gender.toUpperCase()}_${id.toUpperCase()}`;

const TONE: Record<Gender, ChoiceTone> = { woman: "truth", man: "inquiry", unspoken: "quiet" };

/** The first way on that anyone may take: the gendered choices lead the same place the scene already leads. */
const nextOf = (scene: Scene): string => scene.choices.find((c) => !c.requires && !c.id.startsWith("wayside_"))!.next;

/** The hidden choices a gendered scene gains. */
export function turnChoices(scene: Scene): Choice[] {
  const t = TURNS.find((x) => x.id === scene.id);
  if (!t) return [];
  return GENDERS.map(({ value: g }): Choice => ({
    id: `custom_${g}`,
    label: t.labels[g],
    tone: TONE[g],
    next: nextOf(scene),
    requires: [{ kind: "hero", field: "gender", is: [g] }, { kind: "flag", flag: turnFlag(g, scene.id), is: false }],
    hideLocked: true,
    effects: [
      { kind: "setFlag", flag: turnFlag(g, scene.id) },
      ...(g === "woman"
        ? [{ kind: "addStat" as const, stat: "insight" as const, amount: 3 }, { kind: "addCultivation" as const, amount: 3 }]
        : g === "man"
          ? [{ kind: "addStat" as const, stat: "karma" as const, amount: 2 }, { kind: "addCultivation" as const, amount: 4 }]
          : [{ kind: "addStat" as const, stat: "insight" as const, amount: 2 }, { kind: "addStat" as const, stat: "karma" as const, amount: 1 }, { kind: "addCultivation" as const, amount: 3 }]),
    ],
    npcScenario: turnScenarioId(g, scene.id),
  }));
}

const LINES: Record<Gender, Record<Tier, string>> = {
  woman: {
    hostile: "You met that as a woman who knows how it will be read, and chose to be read anyway. I admire the nerve and distrust the haste.",
    wary: "A woman who meets a hall plainly is called blunt, and one who meets it softly is called weak. I should like to know which sin you chose.",
    neutral: "You answered as yourself and let the room make of it what it would. That is the whole of the art, and it has cost me twenty years.",
    warm: "You answered as a woman and as a person at once, and the room had to hold both. It is a very old trick, and I am glad to see it done.",
    devoted: "I have watched many women meet a hall. Few have looked up while they did it. Keep looking up. It is the one direction the Law has no ledger for.",
  },
  man: {
    hostile: "You met that as a man who has never been made to doubt the room. It shows. I would be less pleased with it, in your place.",
    wary: "A man who meets a hall plainly is called honest, and one who meets it softly is called gentle. You will have noticed that only one of those is a compliment.",
    neutral: "You answered as a man answers and then, for a moment, noticed that you had. That moment is worth more than the answer. Keep it.",
    warm: "You answered as a man and as a person at once, and I saw you let the first give way to the second. It is rarer than courage, and kinder.",
    devoted: "I have watched many men meet a hall. Few have stopped to see who was standing behind them. You looked. I do not forget it.",
  },
  unspoken: {
    hostile: "You gave no answer to a question the hall was sure it had asked correctly. It will not forgive you. I am not certain that I shall.",
    wary: "A hall can sort anyone it can name, and you have declined to be named. I do not say you are wrong. I say the hall is patient, and you are alone.",
    neutral: "You met the room as neither of the two it knows, and it had to look at you instead. That is a hard thing to do to a room, and a harder one to survive.",
    warm: "You gave no answer and the room, to its surprise, found it could go on. I have not seen that before. I find that I am grateful.",
    devoted: "I have kept the Law for twelve years and never had to find a word for a person it has no column for. I think I shall find it, in time. Thank you.",
  },
};

export function turnScenarios(): Record<string, NpcScenario> {
  const out: Record<string, NpcScenario> = {};
  for (const t of TURNS) {
    for (const { value: g } of GENDERS) {
      const id = turnScenarioId(g, t.id);
      const lines = Object.fromEntries((Object.keys(LINES[g]) as Tier[]).map((tier) => [tier, `${LINES[g][tier]} ${t.tail}`])) as Record<Tier, string>;
      out[id] = { id, summary: `The player, ${g === "unspoken" ? "who gives no answer" : `a ${g}`}, meets ${t.id.replace(/_/g, " ")} in the way their own allows.`, delta: { respect: 1, trust: 1 }, lines };
    }
  }
  return out;
}

const SOURCE = String.raw`
% su_cs_turns_3 | count:cs_main_>=3 | elder | Three times the mountain has let you meet it as the person you are, and not as the person it expected. It does not offer that to everyone, and I should like to know what it saw.
% su_cs_turns_6 | count:cs_main_>=6 | elder | Six turnings of the road, and each time you answered as yourself. You are the first hero in a long while to be exactly who you are, and not ashamed of the room for noticing.
`;
export const parsedTurnRemarks = () => parseRemarks(SOURCE, "custom/main");
