/** Prints how many words of body text each named scene has, against the cap: `npx tsx scripts/room.ts scene_a scene_b`. */
import { story } from "../src/story";
import { MAX_SCENE_WORDS, sceneBodyWords } from "../src/engine/validate";
for (const id of process.argv.slice(2)) {
  const s = story.scenes[id];
  console.log(id.padEnd(28), s ? `${sceneBodyWords(s)} / ${MAX_SCENE_WORDS}` : "missing");
}
