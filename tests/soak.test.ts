import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import { DAOS, DEFAULT_HERO, ORIGINS, STATUSES, TALENTS, type Hero } from "@/engine/hero";
import { reachedFlag, REALMS } from "@/engine/cultivation";

/** A small, repeatable generator, so every run of the suite walks the same walks. */
function rng(seed: number): () => number {
  let s = seed;
  return () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
}

describe("a long walk from every beginning", () => {
  it("keeps the numbers, the realm and the words sound for twelve beginnings and named heroes, favouring the grounds of the Cultivation Roads", () => {
    const problems: string[] = [];
    let steps = 0;
    for (const [oi, origin] of ORIGINS.entries()) {
      const r = rng(oi * 31 + 5);
      const hero: Hero = {
        ...DEFAULT_HERO,
        name: oi % 2 ? "Mo Lan" : DEFAULT_HERO.name,
        origin: origin.value,
        talent: TALENTS[Math.floor(r() * TALENTS.length)].value,
        dao: DAOS[Math.floor(r() * DAOS.length)].value,
        status: STATUSES[Math.floor(r() * STATUSES.length)].value,
      };
      const start = createGame(story, hero).realm;
      let g = createGame(story, hero);
      let realm = g.realm;
      for (let i = 0; i < 700; i++) {
        const scene = getScene(story, g.sceneId);
        if (scene.ending && scene.choices.length === 0) break;
        const options = getChoices(scene, g).filter((v) => v.available);
        if (!options.length) {
          problems.push(`${origin.value} is stuck in ${g.sceneId}`);
          break;
        }
        const grounds = options.filter((v) => ["circulate", "temper", "comprehend", "push", "retreat"].includes(v.choice.id) || /^wayside_cultivation|^go_cr_|^approach_/.test(v.choice.id));
        const pool = grounds.length && r() < 0.6 ? grounds : options;
        const before = g;
        g = choose(story, g, pool[Math.floor(r() * pool.length)].choice.id);
        steps++;
        if (g.realm < realm) problems.push(`${origin.value} fell a realm in ${g.sceneId}`);
        realm = g.realm;
        // Every realm entered after the start carries the flag the engine sets on the decision it was entered.
        for (let n = start + 1; n <= g.realm; n++) if (!g.flags[reachedFlag(n)]) problems.push(`${origin.value} is a ${REALMS[n].name} with no flag for it in ${g.sceneId}`);
        if (g.wealth < 0 || Number.isNaN(g.cultivation) || Object.values(g.stats).some(Number.isNaN)) problems.push(`${origin.value} has a bad number in ${g.sceneId}`);
        if (g.cultivation < REALMS[g.realm].threshold) problems.push(`${origin.value} stands below the floor of ${REALMS[g.realm].name} in ${g.sceneId}`);
        for (const e of g.log.slice(before.log.length)) {
          if (/undefined|\{\w+\}|NaN/.test(e.text)) problems.push(`${g.sceneId}: ${e.text.slice(0, 60)}`);
          if (hero.name !== DEFAULT_HERO.name && /\bWanderer\b/.test(e.text)) problems.push(`${g.sceneId} still says Wanderer: ${e.text.slice(0, 60)}`);
        }
      }
    }
    expect(steps).toBeGreaterThan(1500);
    expect([...new Set(problems)]).toEqual([]);
  });

  it("gives a named hero their own name in every heading, as well as in the text", () => {
    const named: Hero = { ...DEFAULT_HERO, name: "Mo Lan" };
    const entered = enterScene(story, { ...createGame(story, named), log: [] }, getScene(story, "archive_report_2"));
    const heading = entered.log.find((e) => e.kind === "heading")!;
    expect(heading.text).toBe("Questions for Mo Lan");
    expect(enterScene(story, { ...createGame(story), log: [] }, getScene(story, "archive_report_2")).log.find((e) => e.kind === "heading")!.text).toBe("Questions for the Wanderer");
  });
});
