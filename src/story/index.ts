import type { Scene, Story } from "@/engine/types";
import { chapterOne } from "./chapter-1";
import { chapterTwo } from "./chapter-2";
import { chapterThree } from "./chapter-3";
import { elderSu, elderSuScenarios } from "./npc/elder-su";

const scenes: Scene[] = [...chapterOne, ...chapterTwo, ...chapterThree];

export const story: Story = {
  title: "The Crimson Abyss: A Xianxia Tale",
  startSceneId: "gate",
  npc: elderSu,
  scenes: Object.fromEntries(scenes.map((s) => [s.id, s])),
  scenarios: elderSuScenarios,
};
