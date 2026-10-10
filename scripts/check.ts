/** Checks the story after a writing session: validation, the audit, and the words written. `npx tsx scripts/check.ts` */
import { story, chapters } from "../src/story";
import { validateStory } from "../src/engine/validate";
import { auditStory } from "../src/engine/audit";
import { countWords } from "../src/engine/words";

const problems = validateStory(story);
const issues = auditStory(story);
for (const p of problems.slice(0, 40)) console.log("VALIDATE", p);
for (const i of issues.slice(0, 40)) console.log("AUDIT", i.kind, i.message);
console.log(`${problems.length} validation problems, ${issues.length} audit issues, ${Object.keys(story.scenes).length} scenes in ${chapters.length} groups`);
if (process.argv.includes("--arc")) {
  const name = process.argv[process.argv.indexOf("--arc") + 1];
  for (const c of chapters.filter((g) => g.name.includes(name))) {
    const words = c.scenes.reduce((n, s) => n + countWords(s.title) + s.paragraphs.reduce((m, p) => m + countWords(p), 0) + (s.extras ?? []).reduce((m, x) => m + x.paragraphs.reduce((k, p) => k + countWords(p), 0), 0) + s.choices.reduce((m, ch) => m + countWords(ch.label), 0), 0);
    console.log(`${c.name}: ${c.scenes.length} scenes, ${words} words`);
  }
}
process.exitCode = problems.length || issues.length ? 1 : 0;
