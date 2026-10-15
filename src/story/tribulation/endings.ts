import type { Scene } from "@/engine/types";

/**
 * What the tribulations the hero has sat add to the last choice of the story. The seven endings sit at the scene cap, so the reading goes on the scene before
 * it, where the company comes down to the floor of the mist: the abyss hears how many times the sky tried the hero and what the hero did when it did. Only the
 * strongest line that holds is shown.
 */
const READINGS: { when: { prefix: string; min: number }; line: string }[] = [
  { when: { prefix: "tb_won_", min: 6 }, line: "Six trials stood, and the mist knows the weight of each. It does not part for you as it parts for a realm. It parts as for someone it has watched stand up again." },
  { when: { prefix: "tb_won_", min: 3 }, line: "Three trials stood. The abyss has heard the sky try you, and has heard that you were still there after. It listens a little more closely for that." },
  { when: { prefix: "tb_lost_", min: 3 }, line: "Three times the sky has burned you and three times you came back to tell it. The abyss counts a scar as a kind of name." },
  { when: { prefix: "tb_fled_", min: 2 }, line: "Twice you turned back from a gate, and the abyss has kept the doors you did not open. It is not a reproach. It is only an inventory." },
];

export function tribulationEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    if (scene.id !== "depths_floor") return scene;
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        ...READINGS.map(({ when, line }) => ({ when: [{ kind: "count" as const, prefix: when.prefix, min: when.min }], paragraphs: [line], group: "ttrial" })),
      ],
    };
  });
}
