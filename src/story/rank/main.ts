import { GENDERS, type Gender } from "@/engine/hero";
import { parseRemarks } from "@/engine/markup";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";

/**
 * Realm and gender in the main line. At eight turning points of the story, one for every realm of the ladder, a woman, a man and someone who gives no
 * answer are each offered a way of meeting the scene that only their own allows, and the way depends on whether the hero has climbed as far as the
 * story expects of them at that point (ahead) or not (behind). The scenes sit where a hero of that realm stands: a lantern at the scroll-room, a gate
 * that reads only what you have become, the dais of the masters, the Round Hall, a fleet at the wall, a ring of nine stones, the doors of the Ninth
 * Night, the ward on the span. The way is hidden from everyone it is not for, and the Elder answers at once, in a line by gender, by rank and by trust.
 */

export type Standing = "behind" | "ahead";
export const STANDINGS: Standing[] = ["behind", "ahead"];

interface Turn {
  id: string;
  /** The realm a hero is expected to hold here. A hero at or above it is ahead, and one below it is behind. */
  realm: number;
  labels: Record<Gender, Record<Standing, string>>;
  /** What the Elder adds about the scene, in her own words, after her answer to the hero. */
  tail: string;
}

export const TURNS10: Turn[] = [
  {
    id: "scroll_theft",
    realm: 1,
    labels: {
      woman: {
        behind: "Walk out past the warden with your eyes down and your hands empty, as a mortal woman walks past a sleeve, and be passed for the same reason.",
        ahead: "Walk out past the warden with your sleeve showing, as a woman who has gathered qi is walked past, and see which of the two the lantern bows to.",
      },
      man: {
        behind: "Walk out past the warden with your shoulders back, as a mortal man does who counts on nobody asking a man where he is going.",
        ahead: "Walk out past the warden with your sleeve showing, as a man who has gathered qi is walked past, and notice how little the lantern asks.",
      },
      unspoken: {
        behind: "Walk out past the warden as a mortal whom the roll has no column for, and let the lantern fall where it likes.",
        ahead: "Walk out past the warden with your sleeve showing and your answer withheld, and let the lantern decide which to read first.",
      },
    },
    tail: "A warden’s lantern reads the sleeve before the face, and I have never known it to read the face at all.",
  },
  {
    id: "sutra_door",
    realm: 2,
    labels: {
      woman: {
        behind: "Lay your palm on the lacquer as a woman who has not yet laid a foundation does, and ask the door whether it will take less than it was built to.",
        ahead: "Lay your palm on the lacquer as a woman whose foundation is laid, and ask the door whether it reads the woman or the foundation first.",
      },
      man: {
        behind: "Lay your palm on the lacquer as a man whose foundation is not yet laid does, expecting the door to give way because it always has.",
        ahead: "Lay your palm on the lacquer as a man whose foundation is laid, and ask the door whether it has ever once asked a man for more.",
      },
      unspoken: {
        behind: "Lay your palm on the lacquer without a foundation or a name for what you are, and ask the door which of the two it will refuse first.",
        ahead: "Lay your palm on the lacquer with your foundation laid and your answer withheld, and let the door be the first to say which it reads.",
      },
    },
    tail: "A door that reads only what you have become is the kindest sort and the cruellest, and it is the same door.",
  },
  {
    id: "tribunal_masters",
    realm: 2,
    labels: {
      woman: {
        behind: "Stand before the masters as a woman of no standing in their ledger, and make them look at you before they look at the Elder.",
        ahead: "Stand before the masters as a woman whose foundation they cannot dismiss, and make them say which of the two they are addressing.",
      },
      man: {
        behind: "Stand before the masters as a man of no standing in their ledger, and notice how easily they make room for the one thing you have.",
        ahead: "Stand before the masters as a man whose foundation they must respect, and notice how little respect is left over for the Elder behind you.",
      },
      unspoken: {
        behind: "Stand before the masters with no standing and no column, and let them find out what they have been taking for granted.",
        ahead: "Stand before the masters with a foundation they cannot dismiss and an answer they cannot file, and let them choose which to fear.",
      },
    },
    tail: "The masters have always known whom to address first. Whether they know why is another matter.",
  },
  {
    id: "asm_entry",
    realm: 3,
    labels: {
      woman: {
        behind: "Sit in the witness’s seat at the end of the row as a woman whom the Stair has not yet placed, and count how many sashes look past you.",
        ahead: "Sit in the witness’s seat as a woman whose core the Stair has weighed, and count how many sashes look at it, and how many at you.",
      },
      man: {
        behind: "Sit in the witness’s seat at the end of the row as a man whom the Stair has not yet placed, and count how many sashes make room.",
        ahead: "Sit in the witness’s seat as a man whose core the Stair has weighed, and count how many sashes make room, and how soon.",
      },
      unspoken: {
        behind: "Sit in the witness’s seat as someone whom the Stair has not placed and the hall has no sash for, and watch the clerks decide.",
        ahead: "Sit in the witness’s seat with a core the Stair has weighed and no sash the hall can find, and watch the clerks decide which to read.",
      },
    },
    tail: "In that hall the Stair seats a delegate by rung, and the clerks seat them by sash, and I have never found where one ends.",
  },
  {
    id: "ninesails_entry",
    realm: 4,
    labels: {
      woman: {
        behind: "Go up on the Wall as a woman whom the fleet has no rank for, with a flag in your hand, and see who will speak to a flag.",
        ahead: "Go up on the Wall as a woman whose soul the fleet can read from the water, and see whether it speaks to the soul or to the flag.",
      },
      man: {
        behind: "Go up on the Wall as a man whom the fleet has no rank for, with a flag in your hand, and see who will speak to a flag.",
        ahead: "Go up on the Wall as a man whose soul the fleet can read from the water, and see whether it speaks to the soul or to the flag.",
      },
      unspoken: {
        behind: "Go up on the Wall as someone the fleet has neither rank nor name for, with a flag in your hand, and see who will answer it.",
        ahead: "Go up on the Wall as someone whose soul the fleet can read and whom the fleet cannot name, and see which it addresses.",
      },
    },
    tail: "A fleet reads a flag by its rank, and the harbour reads the one who carries it by something else.",
  },
  {
    id: "court_entry",
    realm: 5,
    labels: {
      woman: {
        behind: "Stand at the ring’s edge as a woman who has not yet cut a cord, among the nine who have, and listen to how they say your age.",
        ahead: "Stand at the ring’s edge as a woman who has cut her cords, among the nine, and listen to how they say that you may sit.",
      },
      man: {
        behind: "Stand at the ring’s edge as a man who has not yet cut a cord, among the nine who have, and listen to how they say your age.",
        ahead: "Stand at the ring’s edge as a man who has cut his cords, among the nine, and listen to how soon they say that you may sit.",
      },
      unspoken: {
        behind: "Stand at the ring’s edge as someone who has not yet cut a cord and has no side to be placed on, and listen to what the stones say.",
        ahead: "Stand at the ring’s edge with your cords cut and no side to be placed on, and listen to which stone the elders make room at.",
      },
    },
    tail: "The nine stones seat an elder by her years, and the whole Ring is quiet when she sits.",
  },
  {
    id: "summit_entry",
    realm: 6,
    labels: {
      woman: {
        behind: "Walk in against the pressure as a woman whom the nine have not weighed, and learn what it asks of someone whom it has no table for.",
        ahead: "Walk in with the pressure parting round you as a woman the nine have weighed, and hear whether it says Madam or Master, or neither.",
      },
      man: {
        behind: "Walk in against the pressure as a man whom the nine have not weighed, and learn what it asks of someone it has no seat for.",
        ahead: "Walk in with the pressure parting round you as a man the nine have weighed, and hear whether it says Master, or only your Dao.",
      },
      unspoken: {
        behind: "Walk in against the pressure as someone whom the nine have not weighed, and learn whether it asks anything of a person with no side.",
        ahead: "Walk in with the pressure parting round you as someone the nine have weighed, and hear what they call a seeker with no side.",
      },
    },
    tail: "The pressure does not care who you are. Everyone else in the hall does.",
  },
  {
    id: "bridge_entry",
    realm: 7,
    labels: {
      woman: {
        behind: "Walk onto the span as a woman whom the ward reads as less than the road asks, and let the men at the far end decide what they see.",
        ahead: "Walk onto the span as a woman whom the ward reads as above the road, and let the men at the far end decide what they see.",
      },
      man: {
        behind: "Walk onto the span as a man whom the ward reads as less than the road asks, and let the men at the far end decide what they see.",
        ahead: "Walk onto the span as a man whom the ward reads as above the road, and let the men at the far end decide what they see.",
      },
      unspoken: {
        behind: "Walk onto the span as someone whom the ward reads as less than the road asks, and let the men at the far end find their word.",
        ahead: "Walk onto the span as someone whom the ward reads as above the road, and let the men at the far end find their word.",
      },
    },
    tail: "The ward reads cultivation. The men at the far end read the rest.",
  },
];

export const TURN_PREFIX10 = "rk_main_";
export const turnFlag10 = (gender: Gender, id: string) => `${TURN_PREFIX10}${gender}_${id}`;
export const turnScenarioId10 = (gender: Gender, standing: Standing, id: string) => `RANK_TURN_${gender.toUpperCase()}_${standing.toUpperCase()}_${id.toUpperCase()}`;

const TONE: Record<Gender, Record<Standing, ChoiceTone>> = {
  woman: { behind: "quiet", ahead: "truth" },
  man: { behind: "quiet", ahead: "inquiry" },
  unspoken: { behind: "quiet", ahead: "inquiry" },
};

/** The first way on that anyone may take: the gendered choices lead the same place the scene already leads. */
const nextOf = (scene: Scene): string => scene.choices.find((c) => !c.requires && !c.id.startsWith("wayside_"))!.next;

const stat = (s: "qi" | "karma" | "insight", amount: number): Effect => ({ kind: "addStat", stat: s, amount });

/** What a turning point gives. A hero ahead of the story’s expectation gains more cultivation and a little Dao; one behind gains Insight, for having read the room from below. */
function effectsOf(g: Gender, standing: Standing, realm: number): Effect[] {
  if (standing === "ahead") {
    const base: Effect[] = [{ kind: "addCultivation", amount: 4 + 2 * realm }, { kind: "addDao", amount: 2 }];
    return g === "woman" ? [...base, stat("insight", 2)] : g === "man" ? [...base, stat("karma", 2)] : [...base, stat("insight", 1), stat("karma", 1)];
  }
  const base: Effect[] = [{ kind: "addCultivation", amount: 2 + realm }];
  return g === "woman" ? [...base, stat("insight", 3)] : g === "man" ? [...base, stat("karma", 2), stat("insight", 1)] : [...base, stat("insight", 2), stat("karma", 1)];
}

const heroIs = (g: Gender): Condition => ({ kind: "hero", field: "gender", is: [g] });

/** The hidden choices a turning scene gains: one for each gender and each standing, shown only to the hero it is for. */
export function turnChoices10(scene: Scene): Choice[] {
  const t = TURNS10.find((x) => x.id === scene.id);
  if (!t) return [];
  return GENDERS.flatMap(({ value: g }) =>
    STANDINGS.map((standing): Choice => ({
      id: `rank_${g}_${standing}`,
      label: t.labels[g][standing],
      tone: TONE[g][standing],
      next: nextOf(scene),
      requires: [
        heroIs(g),
        standing === "ahead" ? { kind: "realm", min: t.realm } : { kind: "realm", max: t.realm - 1 },
        { kind: "flag", flag: turnFlag10(g, scene.id), is: false },
      ],
      hideLocked: true,
      effects: [{ kind: "setFlag", flag: turnFlag10(g, scene.id) }, ...effectsOf(g, standing, t.realm)],
      ...(standing === "ahead" ? { needsRealm: t.realm } : {}),
      npcScenario: turnScenarioId10(g, standing, scene.id),
    })),
  );
}

const LINES: Record<Gender, Record<Standing, Record<Tier, string>>> = {
  woman: {
    behind: {
      hostile: "You met that as a woman who has not yet climbed to it, and made no attempt to hide the gap. I admire the honesty and distrust the timing.",
      wary: "A woman who is behind is told to wait, and a woman who is ahead is told to be careful. You chose to be seen from below. I should like to know why.",
      neutral: "You met that from beneath the rung and as a woman, and kept your eyes open for both. The two are not the same disadvantage, and few learn to tell them apart.",
      warm: "You went in below the rung and did not pretend otherwise. The room had to decide whether to judge the woman or the climb. It is a very hard question to be asked from below.",
      devoted: "I met a hundred rooms from below the rung, and only a few as myself. You did the second without being told it was possible. I should like to have been told.",
    },
    ahead: {
      hostile: "You met that as a woman who is ahead of the road, and let the room feel it. Be careful. A rung used as a blade is a rung that will be taken for one.",
      wary: "A woman ahead of her rung is thanked and watched. You will have noticed which. I should like to know whether you chose to be thanked or to be watched.",
      neutral: "You met that as a woman above where the story expected, and you let the room read your rung before your sex. It will not forget the order. Neither shall I.",
      warm: "You went in ahead of the rung and said nothing of it, and the room, a little late, understood that it had been outranked by a woman. It is a moment I would have liked to see.",
      devoted: "I climbed past more rooms than I can count, and in every one I was a woman first and a rung afterwards. You made the room reverse it. Teach me how.",
    },
  },
  man: {
    behind: {
      hostile: "You met that as a man who has not yet climbed to it, and expected the room to forgive the gap. It did. I should not rely on that, and I should wonder what it cost.",
      wary: "A man who is behind is told to try, and a man who is ahead is told to lead. You were told to try. I should like to know whether you noticed that it was an offer.",
      neutral: "You met that from beneath the rung and as a man, and then, for a moment, noticed what the room did for you that it would not have done for another. Keep that moment.",
      warm: "You went in below the rung and asked for nothing the room was not already giving you. That is not the same as taking nothing, and I think you know it.",
      devoted: "I have watched many men go into rooms below the rung and be carried up by the room. You did not wait to be carried. I saw it, and I shall not forget it.",
    },
    ahead: {
      hostile: "You met that as a man who is ahead of the road, and let the room feel the difference. It was an easy thing to do. I would be more impressed if it had been hard.",
      wary: "A man ahead of his rung is followed and flattered. You will have noticed which. I should like to know whether you can tell the two apart.",
      neutral: "You met that as a man above where the story expected, and let the room read your rung and your sex together. It is a double welcome. Notice what it costs the people behind you.",
      warm: "You went in ahead of the rung and asked the room who else had climbed. It had not thought to count. It is rarer than courage, and kinder.",
      devoted: "I have climbed past more rooms than I can count, and watched men climb past them faster. You looked back to see who was left on the stair. I have not forgotten it.",
    },
  },
  unspoken: {
    behind: {
      hostile: "You met that from below the rung with no side to stand on, and the room found nothing to read at all. It will not forgive being left blank. I am not certain that I shall.",
      wary: "A person with no side and no rung is easy to overlook and hard to forget. You have chosen both. I should like to know what you meant by it.",
      neutral: "You met that from beneath the rung and with no answer, and the room had to look at you instead of the book. That is a hard thing to do to a room, and a harder one to survive.",
      warm: "You went in with neither rung nor side and gave the room nothing it could use. It went on without them. I have not seen that before, and I find I am grateful.",
      devoted: "I have kept the Law for years and never found a word for a person with no side and no standing. I think you are the answer to a question I had not learned to ask.",
    },
    ahead: {
      hostile: "You met that above the rung and with no answer, and the room did not know which to fear. It will choose. Be ready for whichever it chooses.",
      wary: "A person above the rung with no side is the only kind the sect cannot place at all. You have made yourself a difficulty. I should like to know whether it was deliberate.",
      neutral: "You met that ahead of the road and with no answer, and the room read your rung and could not finish the sentence. I enjoyed watching it try.",
      warm: "You went in above the rung and with no side, and for a moment the room managed to honour you without naming you. It is a thing the sect can do, and had not yet decided to.",
      devoted: "I have given the Law twelve years and it has never had a title for what you are. I think you have given it a rung with no side. I shall try to learn the word.",
    },
  },
};

export function turnScenarios10(): Record<string, NpcScenario> {
  const out: Record<string, NpcScenario> = {};
  for (const t of TURNS10) {
    for (const { value: g } of GENDERS) {
      for (const standing of STANDINGS) {
        const id = turnScenarioId10(g, standing, t.id);
        const lines = Object.fromEntries((Object.keys(LINES[g][standing]) as Tier[]).map((tier) => [tier, `${LINES[g][standing][tier]} ${t.tail}`])) as Record<Tier, string>;
        out[id] = {
          id,
          summary: `The player, ${g === "unspoken" ? "who gives no answer" : `a ${g}`}, ${standing} the realm the story expects at ${t.id.replace(/_/g, " ")}, meets it in the way their own rank and gender allow.`,
          delta: { respect: 1, trust: 1 },
          lines,
        };
      }
    }
  }
  return out;
}

const SOURCE = String.raw`
% su_rk_turns_3 | count:rk_main_>=3 | elder | Three times the mountain has read your rung and your self together, and three times you let it. I should like to know which of the two it read first.
% su_rk_turns_6 | count:rk_main_>=6 | elder | Six turnings, and at each you met the room as a person with a rung and a self, and not as either alone. You are the first in a long while to climb without leaving the second behind.
`;
export const parsedTurnRemarks10 = () => parseRemarks(SOURCE, "rank/main");
