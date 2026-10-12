import { parseScenes } from "@/engine/markup";
import type { Origin } from "@/engine/hero";
import type { Scene } from "@/engine/types";
import { caveScenes } from "./cave";
import { courierScenes } from "./courier";
import { dreamScenes } from "./dream";
import { exileScenes } from "./exile";
import { furnaceScenes } from "./furnace";
import { heirScenes } from "./heir";
import { lampScenes } from "./lamp";
import { listenerScenes } from "./listener";
import { porterScenes } from "./porter";
import { rogueScenes } from "./rogue";
import { struckScenes } from "./struck";

/** The prologue of each starting point other than the river village (the older five are seven scenes, the six that start in cultivation are nine), which begins at the gate. Each ends on the mountain stair and rejoins the main line. */
export const prologues: Record<Exclude<Origin, "river">, Scene[]> = {
  porter: parseScenes(porterScenes, "origins/porter"),
  rogue: parseScenes(rogueScenes, "origins/rogue"),
  heir: parseScenes(heirScenes, "origins/heir"),
  courier: parseScenes(courierScenes, "origins/courier"),
  exile: parseScenes(exileScenes, "origins/exile"),
  cave: parseScenes(caveScenes, "origins/cave"),
  furnace: parseScenes(furnaceScenes, "origins/furnace"),
  lamp: parseScenes(lampScenes, "origins/lamp"),
  listener: parseScenes(listenerScenes, "origins/listener"),
  struck: parseScenes(struckScenes, "origins/struck"),
  dream: parseScenes(dreamScenes, "origins/dream"),
};

export const prologueScenes: Scene[] = Object.values(prologues).flat();
