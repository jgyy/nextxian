import type { Scene } from "@/engine/types";

/**
 * What the hero’s years add to the close of the story. Each of the seven endings reads how old the hero has become and how many years their realm
 * allows them, so a hero who ends at seventy-five on the span of a Foundation Builder does not close the book as one who ends at twenty-two. The
 * endings sit at the scene cap, so each of these is one short line.
 */
const EPILOGUE: Record<string, { young: string; old: string; spent: string }> = {
  end_nine: { young: "You say the verbs young.", old: "You say the verbs old.", spent: "Your last years are the verbs." },
  end_listener: { young: "Mengjiao says you are the youngest she has taught, and will outlive her lamps.", old: "Mengjiao says you are the oldest she has taught, and the most patient.", spent: "Mengjiao lights the lamp early, since you have few evenings left." },
  end_warden: { young: "You keep the mist as a young warden, and a long watch.", old: "You keep the mist as an old warden, and a quiet one.", spent: "Your watch is short, and you keep every hour of it." },
  end_spent: { young: "The cost of your hand is paid in years you have not yet spent.", old: "The cost of your hand is paid in the years you had saved.", spent: "The cost of your hand is the last of your years, and you pay it gladly." },
  end_hollow: { young: "The seat is hollow, and you are too young to have filled it.", old: "The seat is hollow, and you are too old to be sorry.", spent: "The seat is hollow, and so are the years you were given." },
  end_ledger: { young: "The ledger lists your age as an open column.", old: "The ledger lists your years as a column closed in good order.", spent: "The ledger lists your span as spent, and the sum is correct." },
};

export function ageEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    const text = EPILOGUE[scene.id];
    if (!text) return scene;
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        { when: [{ kind: "years" as const, max: 3 }], paragraphs: [text.spent], group: "years" },
        { when: [{ kind: "age" as const, min: 60 }], paragraphs: [text.old], group: "years" },
        { when: [{ kind: "age" as const, max: 24 }], paragraphs: [text.young], group: "years" },
      ],
    };
  });
}
