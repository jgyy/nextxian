/** Prints the continuity audit: `npm run audit`. Exits 1 when it finds anything. */
import { story } from "../src/story";
import { auditStory } from "../src/engine/audit";

const issues = auditStory(story);
const byKind = new Map<string, number>();
for (const i of issues) byKind.set(i.kind, (byKind.get(i.kind) ?? 0) + 1);
for (const [kind, n] of byKind) console.log(`${kind.padEnd(16)} ${n}`);
if (process.argv.includes("--list")) for (const i of issues) console.log(`  ${i.kind}: ${i.message}`);
console.log(`total ${issues.length}`);
process.exitCode = issues.length ? 1 : 0;
