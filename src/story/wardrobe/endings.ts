import type { Scene } from "@/engine/types";

/**
 * What the hero’s dress adds to the Sealing. The deed on the cracked iron is done in the clothes the hero has on, and the altar remembers them: the chapter
 * of the Sealing is the one place in the story where nothing can be changed, so the reading goes on the scene where the hero stands over the iron. One line
 * for the dress, and one for a hero who has changed it often.
 */
const DRESS: { attire: string; line: string }[] = [
  { attire: "rags", line: "You stand over the iron in patched hemp, and the mist does not mind. It has been sealed by cloth far finer, and none of it has held as quietly." },
  { attire: "traveller", line: "You stand over the iron in an oiled cloak, a traveller to the last. The mist takes the shape of a door, and does you the courtesy of not asking where you are from." },
  { attire: "scholar", line: "You stand over the iron in an ink-stained robe, a reader at the last line. The mist leans in, as it would to a page, and waits for the end of the sentence." },
  { attire: "silk", line: "You stand over the iron in embroidered silk, bright in all that grey. The mist does not dim it. It only holds the shine a moment, as it held the jade." },
  { attire: "armour", line: "You stand over the iron in a scale jerkin, and for the first time the sword-belt feels like what it is: the weight of something you have never had to use here." },
];

export function wardrobeEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    if (scene.id !== "sealing_choice_2") return scene;
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        ...DRESS.map(({ attire, line }) => ({ when: [{ kind: "hero" as const, field: "attire" as const, is: [attire] }], paragraphs: [line], group: "wdress" })),
        {
          when: [{ kind: "count" as const, prefix: "wore_", min: 3 }],
          paragraphs: ["You have been so many people on this mountain, in so many coats, that the altar has to look twice to know which of them has come. It settles, in the end, on the one who is standing here."],
          group: "wmany",
        },
      ],
    };
  });
}
