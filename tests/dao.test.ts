import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { DAOS, DEFAULT_HERO, TALENTS, ORIGINS, type Hero } from "@/engine/hero";
import { affinityOf, DAO_NAME } from "@/engine/path";
import { MAX_SCENE_WORDS, sceneBodyWords } from "@/engine/validate";
import { countWords } from "@/engine/words";
import { daoAssets, daoEntrances, daoGroups, daoItems, daoScenarios, SPECS4, WAYSIDES4 } from "@/story/dao";
import { daoDoneFlag } from "@/story/dao/build";
import { KIND_SPEED, pricesFor } from "@/story/fortune/build";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = daoGroups.flatMap((g) => g.scenes);
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState =>
  settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const roadIndex = (id: string) => SPECS4.findIndex((s) => s.id === id);
const text = (state: GameState, sceneId: string) => enterScene(story, { ...state, log: [] }, getScene(story, sceneId)).log.map((e) => e.text).join("\n");

describe("the Dao Roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of twenty-five scenes, and the hubs and ways back", () => {
    expect(WAYSIDES4).toHaveLength(10);
    expect(daoGroups).toHaveLength(10);
    expect(SPECS4).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(1000);
    expect(scenes.length + daoGroups.length).toBeGreaterThanOrEqual(1020);
    expect(chapters.filter((c) => c.name.startsWith("Dao Roads:"))).toHaveLength(10);
    expect(Object.keys(daoEntrances)).toHaveLength(10);
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes and a way back, each within the word cap", () => {
    for (const spec of SPECS4) {
      const own = scenes.filter((s) => s.id.startsWith(`${spec.id}_`));
      expect(own, spec.id).toHaveLength(25);
      for (const s of own) {
        expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
        expect(s.title.startsWith("Dao Road:") || s.title.startsWith(spec.title), s.id).toBe(true);
      }
    }
  });

  it("pairs every Dao with every element once: eight crafts, five elements, forty roads", () => {
    const pairs = SPECS4.map((s) => `${s.dao}/${s.element}`);
    expect(new Set(pairs).size).toBe(40);
    for (const d of DAOS.filter((x) => x.value !== "none")) {
      expect(SPECS4.filter((s) => s.dao === d.value).map((s) => s.element).sort(), d.value).toEqual(["earth", "fire", "metal", "water", "wood"]);
    }
    WAYSIDES4.forEach((w, n) => {
      const here = SPECS4.slice(n * 4, n * 4 + 4);
      expect(new Set(here.map((s) => s.dao)).size, w.id).toBe(4);
    });
  });

  it("sells one good and leases one holding on every road, with a breakthrough pill only from the alchemists", () => {
    expect(Object.keys(daoItems)).toHaveLength(40);
    expect(Object.keys(daoAssets)).toHaveLength(40);
    for (const spec of SPECS4) {
      const item = story.items![`${spec.id}_ware`];
      expect(item.name).toBe(spec.ware.name);
      expect(spec.ware.kind === "pill", spec.id).toBe(spec.dao === "alchemy");
      if (item.kind !== "pill") expect(item.speed, spec.id).toBe(KIND_SPEED[item.kind]);
      const asset = story.assets![`${spec.id}_hold`];
      expect(asset.income, spec.id).toBeGreaterThan(asset.upkeep);
    }
    const pills = SPECS4.filter((s) => s.ware.kind === "pill");
    expect(pills).toHaveLength(5);
    pills.forEach((s) => {
      const w = WAYSIDES4[Math.floor(roadIndex(s.id) / 4)];
      expect(story.items![`${s.id}_ware`].aid, s.id).toBe(w.realm + 1);
      expect(s.ware.blurb, s.id).toContain(REALMS[w.realm + 1].name);
    });
  });

  it("writes every road in its own words: no two beats alike, every keeper’s name its own and new to the story", () => {
    const texts = SPECS4.flatMap((s) => [...s.beats.flat(), ...s.deep, s.close, s.intro]);
    expect(new Set(texts).size).toBe(texts.length);
    for (const key of ["kname", "id", "place"] as const) expect(new Set(SPECS4.map((s) => s[key])).size, key).toBe(40);
    expect(new Set(SPECS4.map((s) => s.ware.name)).size).toBe(40);
    expect(new Set(SPECS4.map((s) => s.holding.name)).size).toBe(40);
    for (const s of SPECS4) {
      expect(s.ware.name, s.id).not.toMatch(/^(The|A|An) /);
      expect(s.holding.name, s.id).not.toMatch(/^(The|A|An) /);
    }
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(daoScenarios)]);
    const outside = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    const clashes = SPECS4.filter((s) => new RegExp(`\\b${s.kname}\\b`).test(outside) || companions.has(s.kname)).map((s) => s.kname);
    expect(clashes).toEqual([]);
  });

  it("does not clone a sentence from road to road: no twelve-word phrase in more than two roads, no six-word phrase in more than six", () => {
    const grams = (n: number) => {
      const found = new Map<string, Set<string>>();
      for (const s of SPECS4) {
        for (const t of [s.intro, ...s.beats.flat(), ...s.deep, s.close]) {
          const w = t.toLowerCase().replace(/[“”.,;:!?’]/g, "").split(/\s+/).filter(Boolean);
          for (let i = 0; i + n <= w.length; i++) {
            const g = w.slice(i, i + n).join(" ");
            (found.get(g) ?? found.set(g, new Set()).get(g)!).add(s.id);
          }
        }
      }
      return [...found].filter(([, v]) => v.size > (n >= 12 ? 2 : 6)).map(([g, v]) => `${v.size} roads: ${g}`);
    };
    expect(grams(12)).toEqual([]);
    expect(grams(6)).toEqual([]);
  });
});

describe("what the roads read in the hero", () => {
  const road = "dr_dew_still";
  const wood = (h: Hero = DEFAULT_HERO) => at(`${road}_entry`, h, { realm: 1, wealth: 60 });

  it("lets a hero of the road’s own Dao work beside its keeper, once, and nobody else", () => {
    const id = `${road}_a0s2`;
    const ok = at(id, hero({ dao: "alchemy" }), { realm: 1 });
    const view = (s: GameState) => getChoices(getScene(story, id), s).find((v) => v.choice.id === "practise_kin")!;
    expect(view(ok).available).toBe(true);
    for (const dao of DAOS.filter((d) => d.value !== "alchemy")) expect(view(at(id, hero({ dao: dao.value }), { realm: 1 })).available, dao.value).toBe(false);
    const after = choose(story, ok, "practise_kin");
    expect(after.daoPoints).toBe(6);
    expect(after.cultivation).toBeGreaterThan(ok.cultivation + 5);
    expect(after.flags[`${road}_kin`]).toBe(true);
    expect(after.log.some((e) => e.text.includes("Pill Dao reaches Apprentice"))).toBe(false);
    expect(view({ ...after, sceneId: id }).available).toBe(false);
  });

  it("lets anyone learn a little at another trade, and gives mastery only to those who have a Dao", () => {
    const id = `${road}_a1s2`;
    const dull = choose(story, at(id, DEFAULT_HERO, { realm: 1 }), "practise_craft");
    expect(dull.daoPoints).toBe(0);
    expect(dull.cultivation).toBeGreaterThan(0);
    const smith = choose(story, at(id, hero({ dao: "forging" }), { realm: 1 }), "practise_craft");
    expect(smith.daoPoints).toBe(2);
    expect(smith.flags[`${road}_practised`]).toBe(true);
  });

  it("lets a root that answers the element resonate with it, and not one that cannot", () => {
    const id = `${road}_a3s2`;
    const view = (h: Hero) => getChoices(getScene(story, id), at(id, h, { realm: 1 })).find((v) => v.choice.id === "resonate")!;
    for (const t of TALENTS) expect(view(hero({ talent: t.value })).available, t.value).toBe(affinityOf({ talent: t.value }, "wood") > 0);
    expect(view(hero({ talent: "wood" })).hint).toBeUndefined();
    expect(view(hero({ talent: "fire" })).hint).toContain("wood");
    const after = choose(story, at(id, hero({ talent: "wood" }), { realm: 1 }), "resonate");
    expect(after.flags[`${road}_resonated`]).toBe(true);
    expect(after.cultivation).toBeGreaterThan(0);
  });

  it("shows the inner room only to a hero whose Dao has reached the wayside’s rank", () => {
    const id = `${road}_a3s4`;
    const view = (h: Hero, daoPoints: number) => getChoices(getScene(story, id), at(id, h, { realm: 1, daoPoints })).find((v) => v.choice.id === "masters_door")!;
    expect(view(hero({ dao: "sword" }), 0).available).toBe(false);
    expect(view(hero({ dao: "sword" }), 8).available).toBe(true);
    expect(view(DEFAULT_HERO, 90).available).toBe(false);
    const through = choose(story, at(id, hero({ dao: "sword" }), { realm: 1, daoPoints: 8 }), "masters_door");
    expect(through.sceneId).toBe(`${road}_h0`);
    expect(through.flags[`${road}_masters_door`]).toBe(true);
  });

  it("asks a higher rank on the later waysides", () => {
    const ranks = WAYSIDES4.map((w) => w.rank);
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
    expect(ranks[0]).toBeGreaterThanOrEqual(1);
    expect(ranks.at(-1)).toBeGreaterThanOrEqual(3);
  });

  it("reads who the hero is in the entry, the opening, the middle, the crisis and the close", () => {
    const base = text(wood(), `${road}_entry`);
    for (const dao of ["alchemy", "sword", "none"] as const) expect(text(wood(hero({ dao })), `${road}_entry`), dao).not.toBe(base === text(wood(hero({ dao })), `${road}_entry`) && dao === "none" ? "" : base);
    expect(text(wood(hero({ dao: "alchemy" })), `${road}_entry`)).not.toBe(text(wood(hero({ dao: "forging" })), `${road}_entry`));
    expect(text(at(`${road}_a0s0`, hero({ talent: "wood" })), `${road}_a0s0`)).not.toBe(text(at(`${road}_a0s0`, hero({ talent: "fire" })), `${road}_a0s0`));
    expect(text(at(`${road}_a0s0`, hero({ talent: "mixed" })), `${road}_a0s0`)).not.toBe(text(at(`${road}_a0s0`, hero({ talent: "late" })), `${road}_a0s0`));
    expect(text(at(`${road}_a0s2`, hero({ origin: "heir" })), `${road}_a0s2`)).not.toBe(text(at(`${road}_a0s2`, hero({ origin: "courier" })), `${road}_a0s2`));
    expect(text(at(`${road}_a0s3`, hero({ talent: "wood" })), `${road}_a0s3`)).not.toBe(text(at(`${road}_a0s3`, hero({ talent: "water" })), `${road}_a0s3`));
    const rank = (daoPoints: number) => text(at(`${road}_a0s4`, hero({ dao: "alchemy" }), { daoPoints }), `${road}_a0s4`);
    expect(new Set([0, 8, 24, 50, 90].map(rank)).size).toBe(5);
    expect(text(at(`${road}_a0s4`, DEFAULT_HERO, { daoPoints: 0 }), `${road}_a0s4`)).not.toContain("novice at your Dao");
  });

  it("reads the hero’s craft at the way back, and in the Elder’s report", () => {
    const back = (flags: Record<string, boolean>) => text(at(`${road}_return`, hero({ dao: "alchemy" }), { flags }), `${road}_return`);
    const plain = back({});
    for (const flag of ["kin", "practised", "resonated", "masters_door"]) expect(back({ [`${road}_${flag}`]: true }), flag).not.toBe(plain);
    const sc = daoScenarios.REPORT_FORTUNE_DR_DEW_STILL;
    expect(new Set(Object.values(sc.lines)).size).toBe(5);
    const kinds = sc.memory!.slice(0, 4);
    expect(kinds).toHaveLength(4);
    for (const m of kinds) expect(m.when[0].kind).toBe("flag");
  });

  it("shows a hub that counts the roads done and reads the rank", () => {
    const hub = WAYSIDES4[0].id;
    const none = text(at(hub, hero({ dao: "alchemy" })), hub);
    const done = SPECS4.slice(0, 4).reduce((flags, s) => ({ ...flags, [daoDoneFlag(1, s.id)]: true }), {} as Record<string, boolean>);
    expect(text(at(hub, hero({ dao: "alchemy" }), { flags: done }), hub)).not.toBe(none);
    expect(text(at(hub, hero({ dao: "alchemy" }), { daoPoints: 24 }), hub)).not.toBe(none);
    expect(text(at(hub, DEFAULT_HERO, { daoPoints: 24 }), hub)).toBe(text(at(hub, DEFAULT_HERO, { daoPoints: 0 }), hub));
  });
});

describe("walking every Dao Road", () => {
  /** A hero fit for the road: its realm, a full purse and sharp enough to find what is hidden, with a Dao high enough for the inner room. */
  const walker = (h: Hero, realm: number, rank: number): GameState => ({ ...at("x", h), realm, wealth: 600, stats: { qi: 50, karma: 0, insight: 30 }, cultivation: REALMS[realm].threshold, daoPoints: [0, 8, 24, 50, 90][rank] });

  it("lets a funded hero of the road’s realm walk each approach, the hidden route and the inner room, and leave by every door", () => {
    WAYSIDES4.forEach((w, n) => {
      for (const spec of SPECS4.slice(n * 4, n * 4 + 4)) {
        for (let a = 0; a < 4; a++) {
          for (const route of a === 2 ? ["plain", "hidden"] : a === 3 ? ["plain", "masters"] : ["plain"]) {
            let s: GameState = { ...walker(hero({ dao: spec.dao, talent: "mixed" }), w.realm, w.rank), sceneId: `${spec.id}_entry` };
            s = enterScene(story, s, getScene(story, s.sceneId));
            const pick = (id: string) => {
              const view = getChoices(getScene(story, s.sceneId), s).find((v) => v.choice.id === id);
              expect(view, `${s.sceneId} has ${id}`).toBeDefined();
              expect(view!.available, `${s.sceneId}>${id}: ${view!.hint}`).toBe(true);
              s = choose(story, s, id);
              expect(s.wealth, `${s.sceneId} after ${id}`).toBeGreaterThanOrEqual(0);
            };
            pick(`approach_${a}`);
            for (let stage = 0; stage < 5; stage++) {
              expect(s.sceneId).toBe(`${spec.id}_a${a}s${stage}`);
              if (route === "hidden" && stage === 4) pick("hidden_stair");
              else if (route === "masters" && stage === 4) pick("masters_door");
              else pick(getScene(story, s.sceneId).choices[0].id);
            }
            if (route !== "plain") for (let h = 0; h < 3; h++) pick(getScene(story, s.sceneId).choices[0].id);
            expect(s.sceneId).toBe(`${spec.id}_return`);
            for (const door of ["report", "silent", "rest", "keep"]) {
              const out = choose(story, s, door);
              expect(out.sceneId, `${spec.id} ${door}`).toBe(w.id);
              expect(out.flags[daoDoneFlag(n + 1, spec.id)], `${spec.id} ${door}`).toBe(true);
            }
          }
        }
      }
    });
  });

  it("leaves a hero with no Dao and a root that cannot answer able to finish every road, only without the craft’s rewards", () => {
    for (const spec of SPECS4.filter((_, i) => i % 5 === 0)) {
      const n = Math.floor(roadIndex(spec.id) / 4);
      let s: GameState = { ...walker(DEFAULT_HERO, WAYSIDES4[n].realm, 0), sceneId: `${spec.id}_entry` };
      s = enterScene(story, s, getScene(story, s.sceneId));
      s = choose(story, s, "approach_1");
      for (let stage = 0; stage < 5; stage++) s = choose(story, s, getScene(story, s.sceneId).choices[0].id);
      expect(s.sceneId).toBe(`${spec.id}_return`);
      expect(s.daoPoints).toBe(0);
    }
  });

  it("gives every Dao a road to walk beside its own kind in every second wayside, and mastery on the way up", () => {
    for (const d of DAOS.filter((x) => x.value !== "none")) {
      const roads = SPECS4.filter((s) => s.dao === d.value);
      expect(roads, d.value).toHaveLength(5);
      const waysides = new Set(roads.map((s) => Math.floor(roadIndex(s.id) / 4)));
      expect(waysides.size, d.value).toBe(5);
      expect(DAO_NAME[d.value as Exclude<typeof d.value, "none">]).toBeTruthy();
    }
  });

  it("covers every origin: a hero of each can open the first wayside", () => {
    for (const o of ORIGINS) {
      const g = at(WAYSIDES4[0].id, hero({ origin: o.value }));
      expect(getChoices(getScene(story, WAYSIDES4[0].id), g).filter((v) => v.available).length, o.value).toBeGreaterThanOrEqual(5);
    }
  });

  it("prices every road by its realm, so a later road costs more than an earlier one", () => {
    expect(pricesFor(6, 0, "tool").base).toBeGreaterThan(pricesFor(1, 0, "tool").base * 2);
    expect(countWords(SPECS4[0].intro)).toBeGreaterThan(30);
  });
});
