/**
 * Random-walks the story and reports where cultivation stands at each book gate and at the end.
 * Run with `npx tsx scripts/simulate.ts [runs]`. Used to pace the realm gates in the story.
 */
import { story } from "../src/story";
import { choose, createGame, getChoices, getScene } from "../src/engine/game";
import { layerTitle, levelNow } from "../src/engine/stages";
import { cultivationSpeed } from "../src/engine/economy";
import { ageOf } from "../src/engine/age";
import { spanLabel } from "../src/engine/time";
import type { GameState } from "../src/engine/types";

const GATES = ["b2_gate", "b3_gate", "b4_gate", "b5_gate", "b6_gate"];

function rng(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

type Policy = "thorough" | "diligent" | "forceful" | "hasty" | "merchant";

function run(seed: number, policy: Policy): { seen: Record<string, [number, number, number, number]>; end?: string; state: GameState } {
  const rand = rng(seed);
  let state = createGame(story);
  const seen: Record<string, [number, number, number, number]> = {};
  for (let i = 0; i < 20000; i++) {
    const id = state.sceneId;
    if (GATES.includes(id) && !seen[id]) seen[id] = [state.decisions, state.cultivation, levelNow(state), state.days];
    let scene;
    try {
      scene = getScene(story, id);
    } catch {
      return { seen, end: `missing:${id}`, state };
    }
    if (scene.ending && scene.choices.length === 0) return { seen, end: id, state };
    const options = getChoices(scene, state).filter((c) => c.available);
    if (!options.length) return { seen, end: `stuck:${id}`, state };
    const safe = options.filter((c) => {
      const next = story.scenes[c.choice.next];
      return !next?.ending || next.choices.length > 0 || c.choice.next.startsWith("end_");
    });
    const live = safe.length ? safe : options;
    const fresh = live.filter((c) => !state.visited.includes(c.choice.next));
    let pool = policy === "hasty" ? live.filter((c) => !c.choice.next.startsWith("still_")) : fresh.length ? fresh : live;
    if (policy === "merchant") {
      // Takes every chance to earn, buy and lease, and otherwise behaves as a diligent hero does.
      const money = pool.filter((c) => (c.choice.effects ?? []).some((e) => e.kind === "grantAsset" || e.kind === "giveItem" || (e.kind === "addWealth" && e.amount > 0)));
      const roads = pool.filter((c) => /^go_|^approach_/.test(c.choice.id) || c.choice.id.startsWith("wayside_fortune"));
      const gentle = pool.filter((c) => c.choice.tone !== "force" && c.choice.tone !== "deceit");
      pool = money.length ? money : roads.length ? roads : gentle.length ? gentle : pool;
    }
    if (policy === "diligent") {
      const gentle = pool.filter((c) => c.choice.tone !== "force" && c.choice.tone !== "deceit");
      if (gentle.length) pool = gentle;
    }
    if (policy === "forceful") {
      const hard = pool.filter((c) => c.choice.tone === "force");
      if (hard.length) pool = hard;
    }
    if (!pool.length) pool = live;
    state = choose(story, state, pool[Math.floor(rand() * pool.length)].choice.id);
  }
  return { seen, end: "limit", state };
}

const runs = Number(process.argv[2] ?? 5);
const policy = (process.argv[3] ?? "thorough") as Policy;
for (let r = 1; r <= runs; r++) {
  const { seen, end, state } = run(r, policy);
  const gates = Object.entries(seen)
    .map(([k, [d, c, rl, days]]) => `${k}: d${d} c${c} ${layerTitle(rl)} (${spanLabel(days)})`)
    .join(" | ");
  console.log(`${policy} ${r}: ${gates} | end=${end} d${state.decisions} c${state.cultivation} ${layerTitle(levelNow(state))} (${spanLabel(state.days)}, age ${ageOf(state.hero, state.days)}) karma ${state.stats.karma} | purse ${state.wealth} speed ${cultivationSpeed(story, state)}% pack ${Object.keys(state.items).length} holdings ${state.assets.length}`);
}
