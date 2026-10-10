import type { Scene, Story } from "@/engine/types";
import { chapterOne } from "./chapter-1";
import { chapterTwo } from "./chapter-2";
import { chapterThree } from "./chapter-3";
import { chapterFour } from "./chapter-4";
import { chapterFive } from "./chapter-5";
import { chapterSix } from "./chapter-6";
import { chapterSeven } from "./chapter-7";
import { chapterEight } from "./chapter-8";
import { chapterNine } from "./chapter-9";
import { chapterTen } from "./chapter-10";
import { chapterEleven } from "./chapter-11";
import { elderSu, elderSuScenarios } from "./npc/elder-su";

/** The story in reading order. Word counts and reports group scenes by these chapters. */
export const chapters: { name: string; scenes: Scene[] }[] = [
  { name: "Chapter 1: The Stolen Seal", scenes: chapterOne },
  { name: "Chapter 2: The Crimson Abyss", scenes: chapterTwo },
  { name: "Chapter 3: The Ash Archive", scenes: chapterThree },
  { name: "Chapter 4: The Sutra Door", scenes: chapterFour },
  { name: "Chapter 5: The Blood Lotus Sutra", scenes: chapterFive },
  { name: "Chapter 6: The Jade Eye", scenes: chapterSix },
  { name: "Chapter 7: The Tribunal of Bells", scenes: chapterSeven },
  { name: "Chapter 8: The Second Descent", scenes: chapterEight },
  { name: "Chapter 9: The Mist Remembers Mengjiao", scenes: chapterNine },
  { name: "Chapter 10: The Sealing Night", scenes: chapterTen },
  { name: "Chapter 11: The Judgment", scenes: chapterEleven },
];

const scenes = chapters.flatMap((c) => c.scenes);

export const story: Story = {
  title: "The Crimson Abyss: A Xianxia Tale",
  startSceneId: "gate",
  npc: elderSu,
  scenes: Object.fromEntries(scenes.map((s) => [s.id, s])),
  scenarios: elderSuScenarios,
};
