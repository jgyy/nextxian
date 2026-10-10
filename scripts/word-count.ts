/**
 * Counts player-facing words in the story: scene text, extras, interjections,
 * choice labels, NPC lines, and endings. Run with `npm run word-count`.
 */
import { story, chapters } from "../src/story";
import type { Scene } from "../src/engine/types";

export const WORD_GOAL = 1_000_000;

export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function sceneWords(scene: Scene): number {
  return (
    countWords(scene.title) +
    scene.paragraphs.reduce((n, p) => n + countWords(p), 0) +
    (scene.extras ?? []).reduce((n, x) => n + x.paragraphs.reduce((m, p) => m + countWords(p), 0), 0) +
    (scene.interjections ?? []).reduce((n, x) => n + countWords(x.line), 0) +
    scene.choices.reduce((n, c) => n + countWords(c.label), 0) +
    (scene.ending ? countWords(scene.ending) : 0)
  );
}

function npcWords(): number {
  return Object.values(story.scenarios).reduce((n, s) => {
    const tiers = Object.values(s.lines).reduce((m, l) => m + countWords(l), 0);
    const memory = (s.memory ?? []).reduce((m, x) => m + countWords(x.line), 0);
    return n + tiers + memory;
  }, 0);
}

export function report(): number {
  const rows: [string, number][] = chapters.map((c) => [
    c.name,
    c.scenes.reduce((n, s) => n + sceneWords(s), 0),
  ]);
  rows.push(["NPC reactions", npcWords()]);

  const total = rows.reduce((n, [, words]) => n + words, 0);
  for (const [name, words] of rows) {
    console.log(`${name.padEnd(40)} ${words.toLocaleString("en-US").padStart(10)}`);
  }
  console.log("-".repeat(52));
  console.log(`${"Total".padEnd(40)} ${total.toLocaleString("en-US").padStart(10)}`);
  console.log(`${"Goal".padEnd(40)} ${WORD_GOAL.toLocaleString("en-US").padStart(10)}`);
  console.log(`${"Progress".padEnd(40)} ${((total / WORD_GOAL) * 100).toFixed(2).padStart(9)}%`);
  return total;
}

// Only print when run directly, so tests can import countWords.
if (process.argv[1] && process.argv[1].endsWith("word-count.ts")) {
  report();
}
