/** Lists the dangling flags that start with a prefix, one per line: `npx tsx scripts/dangling.ts silk_`. Used while writing. */
import { story } from "../src/story";
import { auditStory } from "../src/engine/audit";

const prefix = process.argv[2] ?? "";
for (const i of auditStory(story)) if (i.kind === "dangling-flag" && i.where.startsWith(prefix)) console.log(i.where);
