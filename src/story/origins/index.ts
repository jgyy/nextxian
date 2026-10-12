import { parseScenes } from "@/engine/markup";
import type { Origin } from "@/engine/hero";
import type { Scene } from "@/engine/types";
import { courierScenes } from "./courier";
import { exileScenes } from "./exile";
import { heirScenes } from "./heir";
import { porterScenes } from "./porter";
import { rogueScenes } from "./rogue";

/** The prologue of each starting point other than the river village, which begins at the gate. Each ends on the mountain stair and rejoins the main line. */
export const prologues: Record<Exclude<Origin, "river">, Scene[]> = {
  porter: parseScenes(porterScenes, "origins/porter"),
  rogue: parseScenes(rogueScenes, "origins/rogue"),
  heir: parseScenes(heirScenes, "origins/heir"),
  courier: parseScenes(courierScenes, "origins/courier"),
  exile: parseScenes(exileScenes, "origins/exile"),
};

export const prologueScenes: Scene[] = Object.values(prologues).flat();
