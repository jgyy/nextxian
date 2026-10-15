import type { Scene } from "@/engine/types";

/**
 * What the hero’s realm and gender add to the last choice of the story. The seven endings sit at the scene cap and the choice itself carries the custom
 * lines, so the reading goes on the scene before it, where the company comes to stand on the ledge: the abyss hears which of the things a hero has been it
 * is answering to. One line reads the hero’s gender against the last rung, and one reads the way they have taken the ranks most, when they have taken one
 * three times.
 */
type Reading = "woman" | "man" | "unspoken";

const RUNG: Record<"ahead" | "behind", Record<Reading, string>> = {
  ahead: {
    woman: "You stand at the last rung, and the abyss, which has heard two hundred years of Ascendants named in the masculine, leans to hear one answer as a woman.",
    man: "You stand at the last rung, and the abyss, which has heard two hundred years of Ascendants named as men, leans to hear one ask who was left out.",
    unspoken: "You stand at the last rung, and the abyss, which has heard Ascendants named in two forms, leans to hear one answer in neither.",
  },
  behind: {
    woman: "You stand below the last rung, a woman among titles written for men, and the abyss waits to hear which you answer with.",
    man: "You stand below the last rung, a man among titles written for men, and the abyss waits to hear whether you notice.",
    unspoken: "You stand below the last rung with no side to be named from, and the abyss finds half of you quiet.",
  },
};

const WAY: { prefix: string; line: string }[] = [
  { prefix: "rk_pick_claim_", line: "Three times you named your rung to a room reading something else. The mist keeps each as a bell that rang in the wrong hall, still ringing." },
  { prefix: "rk_pick_lift_", line: "Three times you put your rank behind a name the rung passed over. They stand behind you in the mist, unseen, and the abyss counts them." },
  { prefix: "rk_pick_veil_", line: "Three times you wore the face a room wanted and kept your rung back. The mist remembers which face was yours, and has not yet said." },
  { prefix: "rk_pick_yield_", line: "Three times you took the place a rung gave you, eyes open. The abyss hears a patience in you it has not heard since the founders." },
];

export function rankEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    if (scene.id !== "lastseal_a") return scene;
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        ...(Object.keys(RUNG.ahead) as Reading[]).flatMap((g) => [
          { when: [{ kind: "hero" as const, field: "gender" as const, is: [g] }, { kind: "realm" as const, min: 7 }], paragraphs: [RUNG.ahead[g]], group: "rrung" },
          { when: [{ kind: "hero" as const, field: "gender" as const, is: [g] }, { kind: "realm" as const, max: 6 }], paragraphs: [RUNG.behind[g]], group: "rrung" },
        ]),
        ...WAY.map(({ prefix, line }) => ({ when: [{ kind: "count" as const, prefix, min: 3 }], paragraphs: [line], group: "rway" })),
      ],
    };
  });
}
