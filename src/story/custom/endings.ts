import type { Scene } from "@/engine/types";

/**
 * What the hero’s gender and the way they have met the customs of the sect add to the last choice of the story. The seven endings sit at the scene cap,
 * so the reading goes on the scene before them, where every ending is chosen: the abyss hears which of the things a hero has been it is answering to.
 * One line reads the hero’s gender, and one reads the way they have taken the customs most, when they have taken one three times.
 */
const GENDER: Record<"woman" | "man" | "unspoken", string> = {
  woman: "The abyss has heard the Law speak of daughters for fifteen years, in the margin. It has not yet heard one answer in her own voice, and it leans to listen.",
  man: "The abyss has heard sons answer for the Law for fifteen years. It has not yet heard one answer for everyone the Law left out, and it leans to listen.",
  unspoken: "The abyss has heard the Law sort the sealed into two for fifteen years, the column and the margin. It has not yet heard one answer from neither, and it leans to listen.",
};

const WAY: { prefix: string; line: string }[] = [
  { prefix: "cs_pick_break_", line: "Three times you broke a custom in front of the people who held it. The mist remembers each as a crack in a wall, and every crack is a door someone else may now use." },
  { prefix: "cs_pick_stand_", line: "Three times you stood for someone the custom passed over. They stand behind you now in the mist, unseen, and the abyss counts them among the answers." },
  { prefix: "cs_pick_bend_", line: "Three times you asked for the smallest exception that would be granted. The abyss has heard that kind of asking before, and knows it is how every wall begins to fall." },
  { prefix: "cs_pick_keep_", line: "Three times you kept the old way with your eyes open. The abyss hears a patience in you it has not heard since the founders, and does not yet know whether to fear it." },
];

export function customEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    if (scene.id !== "lastseal_choice") return scene;
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        ...(Object.keys(GENDER) as (keyof typeof GENDER)[]).map((g) => ({ when: [{ kind: "hero" as const, field: "gender" as const, is: [g] }], paragraphs: [GENDER[g]], group: "cgender" })),
        ...WAY.map(({ prefix, line }) => ({ when: [{ kind: "count" as const, prefix, min: 3 }], paragraphs: [line], group: "cway" })),
      ],
    };
  });
}
