import type { Condition, NpcScenario, Scene } from "@/engine/types";

type Memory = NonNullable<NpcScenario["memory"]>[number];

/**
 * How the Elder’s replies change with the player’s cultivation. A cultivator of Foundation
 * Establishment or higher gets a line that reads their realm. These sit at the end of each
 * scenario’s memory list, so a flag the player set or a pattern in their choices still wins.
 */
const CULTIVATOR: Record<string, string> = {
  HONEST_ACCOUNT: "You tell me the truth with a Foundation Builder’s steady breath. A mortal who confesses is brave. A cultivator who confesses is choosing, and I notice the difference.",
  LIE_ABOUT_SEAL: "A cultivator lies with a voice that carries, and I can feel yours in my teeth. Do you think qi makes a falsehood heavier, or only louder?",
  THREATEN: "You threaten me with a cultivator’s calm, which is worse than a mortal’s rage. A mortal can be forgiven for fear. You have no such excuse.",
  SHOW_MERCY: "Mercy from a mortal is a gesture. Mercy from someone who could have crushed him is a decision. I am glad it was the second.",
  ASK_FORBIDDEN_ART: "You ask about the Blood Lotus Sutra from a place of real power. That makes the question more dangerous to you than to me. Be careful what answers you wish for.",
  STEAL_SCROLL: "Your qi hid the theft from the wardens, and from the tablets. It did not hide it from me. The better you grow, the more I will expect from your honesty.",
  REFUSE_TASK: "You refuse as someone who could have gone. That is different from a mortal who could not. I will remember which you were.",
  COMPLETE_TASK: "You return the jade with the carriage of someone who could have kept it. I am more grateful for that than I will say.",
  SWEAR_OATH: "A Dao oath sworn by a cultivator binds more than the words. You have given your realm as surety, and I will hold you to it.",
  REQUEST_NIGHT: "Take your night, cultivator. Meditate if you can. The abyss is kinder to those who go down with their qi settled.",
  EXPOSE_HER_SECRET: "You say it as someone who knows the weight of it. A mortal might have guessed, but a cultivator knows what that secret is worth.",
  ACCEPT_PUNISHMENT: "You accept judgment with your qi laid bare, which is the only honest way to do it. I have not seen that in years.",
};

/** Unprompted remarks at the places where her view of the player’s realm matters most. */
const SCENE_REMARKS: Record<string, { when: Condition[]; line: string }[]> = {
  law_hall: [
    {
      when: [{ kind: "realm", max: 0 }],
      line: "There is no qi in you at all. A mortal climbed my steps in the rain with mud to the knee, and I have nothing in this hall that will keep that safe. Be quick, and be careful.",
    },
  ],
  abyss_truth: [
    {
      when: [{ kind: "realm", max: 0 }],
      line: "You go down as a mortal. The mist will not distinguish between a mortal and a cultivator, but it will notice that you have nothing to defend yourself with. Go carefully.",
    },
    {
      when: [{ kind: "realm", min: 1, max: 1 }],
      line: "A Qi Condenser, going down alone. You have enough to feel the mist and not enough to turn it. That is the most dangerous place to stand.",
    },
  ],
  archive_gate: [
    {
      when: [{ kind: "realm", min: 2 }],
      line: "You have a foundation now. The archive will let you into rooms a mortal could never read in. Do not mistake access for permission.",
    },
  ],
  tribunal_summons: [
    {
      when: [{ kind: "realm", min: 3 }],
      line: "A core cultivator goes before the bells. They will ask you to stand without qi, in a hall built to humble people like you. Do it. It is the only way they will believe you are still a person.",
    },
  ],
  sealing_night: [
    {
      when: [{ kind: "realm", max: 1 }],
      line: "You come to the altar with almost no cultivation. I will not tell you this is brave. Whatever you were, you are here.",
    },
  ],
  judgment: [
    {
      when: [{ kind: "realm", min: 4 }],
      line: "A Nascent Soul sits before the Law. I have no precedent for judging you, so I will judge you as I would a mortal, and hope that you will let me.",
    },
  ],
};

/** Adds the cultivation-aware memory lines to the scenarios. */
export function elderSuRealm(scenarios: Record<string, NpcScenario>): Record<string, NpcScenario> {
  return Object.fromEntries(
    Object.entries(scenarios).map(([id, scenario]) => {
      const line = CULTIVATOR[id];
      if (!line) return [id, scenario] as const;
      const extra: Memory = { when: [{ kind: "realm", min: 2 }], line };
      return [id, { ...scenario, memory: [...(scenario.memory ?? []), extra] }] as const;
    }),
  );
}

/** Adds the cultivation-aware remarks to the scenes. */
export function elderSuRealmScenes(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    const remarks = SCENE_REMARKS[scene.id];
    return remarks ? { ...scene, interjections: [...(scene.interjections ?? []), ...remarks] } : scene;
  });
}
