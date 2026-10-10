import type { Companion } from "@/engine/types";

/** The people who turn up again and again, each keeping a count of how they feel about the player. */
export const companions: Record<string, Companion> = {
  ren: {
    id: "ren",
    name: "Ren Qiao",
    title: "Warden of the Ash Bridge",
    description: "A scarred warden who has kept the archive bridge for fifteen years and stopped climbing stairs he was told to stop at.",
    glyph: "任",
  },
  gu: {
    id: "gu",
    name: "Gu Hanzhen",
    title: "Outer disciple of the foothill village",
    description: "A nineteen-year-old who followed a woman in grey down the abyss path and has been held for it ever since.",
    glyph: "谷",
  },
  lin: {
    id: "lin",
    name: "Lin Yuan",
    title: "Keeper of keys at the Ash Archive",
    description: "A clerk raised by the archive that expelled his mother, who knows where every drawer is and what each one costs.",
    glyph: "林",
  },
  mengjiao: {
    id: "mengjiao",
    name: "Su Mengjiao",
    title: "The sister in the mist",
    description: "The Elder’s younger sister, sealed into the abyss fifteen years ago, who has been speaking the names of the sealed to the dark ever since.",
    glyph: "梦",
  },
};
