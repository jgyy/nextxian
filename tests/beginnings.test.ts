import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { prologues, prologueScenes } from "@/story/origins";
import { beginningAsides, beginningItems, beginningMeet, beginningScenarios } from "@/story/origins/entries";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import { DEFAULT_HERO, ORIGINS, startingPoints, type Hero, type Origin } from "@/engine/hero";
import { ORIGIN_LABEL, ORIGIN_START, ORIGIN_WEALTH, originSpeed } from "@/engine/path";
import { realmForPoints } from "@/engine/cultivation";
import { speedParts } from "@/engine/economy";
import { startScenes, auditStory } from "@/engine/audit";
import { sceneBodyWords, MAX_SCENE_WORDS, validateStory } from "@/engine/validate";
import { METHOD_READ } from "@/story/cultivation/lexicon";
import { DAO_NAME } from "@/engine/path";
import type { GameState, Tier } from "@/engine/types";

const NEW: Origin[] = ["cave", "furnace", "lamp", "listener", "struck", "dream"];
const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const fresh = (h: Hero): GameState => createGame(story, h);

describe("the six beginnings that start in cultivation", () => {
  it("add six more ways in, twelve in all, each with a label, a line, a scene to begin in and a name for its speed line", () => {
    expect(ORIGINS).toHaveLength(12);
    expect(Object.keys(ORIGIN_START).sort()).toEqual(ORIGINS.map((o) => o.value).sort());
    expect(Object.keys(ORIGIN_LABEL)).toHaveLength(12);
    expect(startScenes(story)).toHaveLength(12);
    for (const o of NEW) {
      expect(ORIGINS.find((x) => x.value === o)!.blurb.length, o).toBeGreaterThan(80);
      expect(fresh(hero({ origin: o })).sceneId, o).toBe(`o_${o}_0`);
    }
  });

  it("writes six prologues of nine scenes, each within the cap, with four choices, a heading of its own and no gap in the walk to the Law Hall", () => {
    expect(prologueScenes).toHaveLength(5 * 7 + 6 * 9);
    for (const o of NEW) {
      const scenes = prologues[o];
      expect(scenes, o).toHaveLength(9);
      expect(scenes.map((s) => s.id), o).toEqual([...[0, 1, 2, 3, 4, 5, 6].map((n) => `o_${o}_${n}`), `o_${o}_gate`, `o_${o}_hall`]);
      for (const s of scenes) {
        expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
        expect(s.title.trim().length, s.id).toBeGreaterThan(0);
        expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
      }
      // Every choice of every scene leads on, and the last scene of the walk enters the Law Hall with the hero’s own greeting.
      const reach = new Set<string>([`o_${o}_0`]);
      const queue = [`o_${o}_0`];
      while (queue.length) for (const c of story.scenes[queue.pop()!].choices) if (c.next.startsWith(`o_${o}_`) && !reach.has(c.next)) { reach.add(c.next); queue.push(c.next); }
      expect(reach.size, o).toBe(9);
      expect(story.scenes[`o_${o}_hall`].choices.every((c) => c.next === "law_hall"), o).toBe(true);
      expect(story.scenes[`o_${o}_hall`].choices.some((c) => c.npcScenario === `LH_ENTER_${o.toUpperCase()}`), o).toBe(true);
    }
  });

  it("starts the cave-finder and the one struck by heaven as Qi Condensers, and no beginning above Qi Condensation", () => {
    for (const o of ORIGINS) {
      const g = fresh(hero({ origin: o.value }));
      expect(g.realm, o.value).toBeLessThanOrEqual(1);
      expect(g.realm, o.value).toBe(realmForPoints(startingPoints(g.hero)));
    }
    expect(fresh(hero({ origin: "cave" })).realm).toBe(1);
    expect(fresh(hero({ origin: "struck" })).realm).toBe(1);
    expect(fresh(hero({ origin: "dream" })).realm).toBe(0);
    expect(fresh(hero({ origin: "river" })).cultivation).toBe(0);
  });

  it("adds its own line to the cultivation speed, quick while the beginning’s art lasts and plain after", () => {
    const parts = (o: Origin, realm: number) => speedParts(story, { ...fresh(hero({ origin: o })), realm }).filter((p) => p.label === ORIGIN_LABEL[o]);
    expect(originSpeed("river", 0)).toBe(0);
    expect(parts("river", 0)).toEqual([]);
    for (const o of NEW) expect(parts(o, 0), o).toHaveLength(1);
    expect(originSpeed("dream", 0)).toBeGreaterThan(originSpeed("dream", 3));
    expect(originSpeed("dream", 3)).toBeGreaterThan(originSpeed("dream", 5));
    expect(originSpeed("dream", 5)).toBe(0);
    expect(originSpeed("struck", 1)).toBeGreaterThan(originSpeed("struck", 2));
    expect(fresh(hero({ origin: "dream" })).speed).toBe(122);
    expect(fresh(hero({ origin: "river" })).speed).toBe(100);
  });

  it("gives the pill-house apprentice a purse and a pill, and the rest their own small starts", () => {
    expect(ORIGIN_WEALTH.furnace).toBe(8);
    expect(Object.keys(beginningItems)).toEqual(["og_furnace_pill"]);
    expect(story.items!.og_furnace_pill).toMatchObject({ kind: "pill", aid: 1 });
    const g = fresh(hero({ origin: "furnace" }));
    const walk = (a: GameState, ids: string[]) => ids.reduce((s, id) => choose(story, s, id), a);
    expect(choose(story, g, "c4").flags.og_furnace_banked).toBe(true);
    // Banking the furnace, then finishing the pill, puts it in the pack; so does hiding it. Handing it to the inspectors does not.
    // A hero near the threshold eats it at once and rises a realm; a hero not yet near keeps it in the pack.
    const has = (a: GameState) => (a.items.og_furnace_pill ?? 0) === 1 || a.log.some((e) => e.kind === "realm" && e.text.includes("Master’s Last Pill"));
    expect(has(walk(g, ["c4", "c1"]))).toBe(true);
    expect(has(walk(g, ["c4", "c4"]))).toBe(true);
    expect(has(walk(g, ["c4", "c2"]))).toBe(false);
  });

  it("never lets the pill-house apprentice swallow or keep a pill they handed to the inspectors", () => {
    const g = fresh(hero({ origin: "furnace" }));
    const handed = ["c1", "c2", "c1"].reduce((s, id) => choose(story, s, id), g);
    expect(handed.sceneId).toBe("o_furnace_3");
    const views = getChoices(getScene(story, "o_furnace_3"), handed);
    for (const id of ["c2", "c4"]) expect(views.find((v) => v.choice.id === id)!.available, id).toBe(false);
    for (const id of ["c1", "c3"]) expect(views.find((v) => v.choice.id === id)!.available, id).toBe(true);
    const kept = ["c1", "c1", "c1"].reduce((s, id) => choose(story, s, id), g);
    const keptViews = getChoices(getScene(story, "o_furnace_3"), kept);
    for (const id of ["c2", "c4"]) expect(keptViews.find((v) => v.choice.id === id)!.available, id).toBe(true);
    expect(choose(story, kept, "c2").items.og_furnace_pill ?? 0).toBe(0);
  });

  it("lets the lamp-keeper share the breath only after teaching the child, and gives each beginning four methods that a later keeper reads", () => {
    const lamp = fresh(hero({ origin: "lamp" }));
    const untaught = ["c1", "c1", "c2"].reduce((s, id) => choose(story, s, id), lamp);
    expect(untaught.sceneId).toBe("o_lamp_3");
    expect(getChoices(getScene(story, "o_lamp_3"), untaught).find((v) => v.choice.id === "c3")!.available).toBe(false);
    const taught = ["c1", "c1", "c1"].reduce((s, id) => choose(story, s, id), lamp);
    expect(getChoices(getScene(story, "o_lamp_3"), taught).find((v) => v.choice.id === "c3")!.available).toBe(true);
    const flags = new Set(Object.keys(METHOD_READ));
    for (const o of NEW) {
      const methods = prologues[o].flatMap((s) => s.choices.flatMap((c) => (c.effects ?? []).flatMap((e) => (e.kind === "setFlag" && /_m_/.test(e.flag) ? [e.flag] : []))));
      expect(methods, o).toHaveLength(4);
      for (const m of methods) expect(flags.has(m), m).toBe(true);
    }
  });
});

describe("how the Elder and the keepers take the six beginnings", () => {
  it("answers each at the Law Hall door with five lines of her own and memories that read the method chosen and the hero’s roots or Dao", () => {
    for (const o of NEW) {
      const sc = story.scenarios[`LH_ENTER_${o.toUpperCase()}`];
      expect(sc, o).toBeDefined();
      expect(new Set(TIERS.map((t) => sc.lines[t])).size, o).toBe(5);
      expect(sc.memory!.length, o).toBeGreaterThanOrEqual(3);
      const flagged = sc.memory!.filter((m) => m.when.some((c) => c.kind === "flag" && /_m_/.test(c.flag)));
      expect(flagged.length, o).toBeGreaterThanOrEqual(2);
    }
    expect(Object.keys(beginningScenarios.match(/^\$ LH_ENTER_[A-Z]+/gm) ?? [])).toHaveLength(6);
  });

  it("speaks of each between its other replies, in a line for every attitude and no longer than sixty words", () => {
    for (const o of NEW) {
      const lines = TIERS.map((t) => story.asides!.origin[o]?.[t]);
      expect(lines.every((l) => typeof l === "string" && l.length > 40), o).toBe(true);
      expect(new Set(lines).size, o).toBe(5);
      for (const l of lines) expect(l!.split(/\s+/).length, o).toBeLessThanOrEqual(60);
      expect(beginningAsides[o]).toBeDefined();
      expect(beginningMeet[o]).toHaveLength(4);
    }
  });

  it("changes what a prologue scene says by roots and by Dao, as the first five prologues do", () => {
    const text = (scene: string, h: Hero) => enterScene(story, { ...fresh(h), log: [] }, getScene(story, scene)).log.map((e) => e.text).join("\n");
    for (const o of NEW) {
      const base = text(`o_${o}_2`, hero({ origin: o }));
      for (const talent of ["wood", "fire", "heaven"] as const) expect(text(`o_${o}_2`, hero({ origin: o, talent })), `${o} ${talent}`).not.toBe(base);
      const craft = text(`o_${o}_3`, hero({ origin: o }));
      for (const dao of ["sword", "healing", "fate"] as const) expect(text(`o_${o}_3`, hero({ origin: o, dao })), `${o} ${DAO_NAME[dao]}`).not.toBe(craft);
    }
  });

  it("keeps the whole story sound with twelve starts, and lets every beginning walk to the Law Hall, whatever it chooses", () => {
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
    for (const o of NEW) {
      let g = fresh(hero({ origin: o }));
      for (let i = 0; i < 9 && g.sceneId !== "law_hall"; i++) {
        const options = getChoices(getScene(story, g.sceneId), g).filter((v) => v.available);
        // Always take the last available choice, so the walk differs from the first-choice walk.
        g = choose(story, g, options[options.length - 1].choice.id);
      }
      expect(["law_hall", "memorial", "gate_gossip"].includes(g.sceneId) || g.sceneId.startsWith("o_"), `${o} ended at ${g.sceneId}`).toBe(true);
    }
  });
});
