/**
 * Reports how long the calendar says a walk of the story takes, realm by realm: `npx tsx scripts/realm-pace.ts [runs] [policy]`. A walk is random, and a policy
 * says what it prefers (`roads` takes every way onto a road; `plot` never does). Used to pace the strides in src/engine/time.ts.
 */
import { story } from "../src/story";
import { choose, createGame, getChoices, getScene } from "../src/engine/game";
import { spanLabel } from "../src/engine/time";

function rng(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const runs = Number(process.argv[2] ?? 6);
const policy = process.argv[3] ?? "roads";
for (let r = 1; r <= runs; r++) {
  const rand = rng(r * 7);
  let state = createGame(story);
  const entered: { decision: number; days: number }[] = [{ decision: 0, days: 0 }];
  let roadDecisions = 0;
  for (let i = 0; i < 20000; i++) {
    const scene = getScene(story, state.sceneId);
    if (scene.ending && scene.choices.length === 0) break;
    const options = getChoices(scene, state).filter((c) => c.available);
    if (!options.length) break;
    const fresh = options.filter((c) => !state.visited.includes(c.choice.next));
    let pool = fresh.length ? fresh : options;
    if (policy === "roads") {
      const roads = pool.filter((c) => story.roadScenes?.has(c.choice.next));
      if (roads.length && rand() < 0.7) pool = roads;
    }
    if (story.roadScenes?.has(scene.id)) roadDecisions++;
    const before = state.realm;
    state = choose(story, state, pool[Math.floor(rand() * pool.length)].choice.id);
    if (state.realm !== before) entered[state.realm] = { decision: state.decisions, days: state.days };
  }
  const row = entered.map((e, i) => (e ? `${i}@d${e.decision}/${spanLabel(e.days)}` : "")).filter(Boolean).join(" ");
  console.log(`run ${r}: ${row} | end d${state.decisions} (${roadDecisions} on roads) ${spanLabel(state.days)}, age ${state.hero.age}`);
}
