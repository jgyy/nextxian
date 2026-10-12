import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { applyEffects, choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { applyStrain, gainCultivation, heartDemonBlocks, REALMS } from "@/engine/cultivation";
import { applyAid, cultivationSpeed, isUnfed, livingCostFor, speedParts, startingWealth } from "@/engine/economy";
import { DAOS, DEFAULT_HERO, HERO_FIELDS, HERO_OPTIONS, ORIGINS, restoreHero, TALENTS, type Hero } from "@/engine/hero";
import { parseConditions, parseEffects } from "@/engine/markup";
import { conditionsHold } from "@/engine/npc";
import {
  affinityOf,
  aidReachFor,
  DAO_NAME,
  DAO_PASSIVE,
  DAO_RANKS,
  daoRankOf,
  daoToNext,
  ELEMENTS,
  heartDemonKarmaFor,
  karmaChange,
  masteryGapFor,
  ORIGIN_START,
  strainFactor,
  talentSpeed,
} from "@/engine/path";
import { ALL_DAO_ARRIVALS, ALL_TALENT_ARRIVALS } from "@/engine/path-text";
import { restoreGame } from "@/engine/save";
import { auditStory, startScenes } from "@/engine/audit";
import { validateStory } from "@/engine/validate";
import { prologueScenes, prologues } from "@/story/origins";
import { countWords } from "@/engine/words";
import type { GameState, Story, Tier } from "@/engine/types";

const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
const fresh = (h: Hero = DEFAULT_HERO): GameState => createGame(story, h);

describe("the new parts of the character", () => {
  it("offers six origins, eight talents and nine Daos, each with a label and a line for the creation screen", () => {
    expect(ORIGINS).toHaveLength(6);
    expect(TALENTS).toHaveLength(8);
    expect(DAOS).toHaveLength(9);
    for (const field of ["origin", "talent", "dao"] as const) {
      for (const o of HERO_OPTIONS[field]) {
        expect(o.label.length, `${field}:${o.value}`).toBeGreaterThan(0);
        expect(o.blurb.length, `${field}:${o.value}`).toBeGreaterThan(30);
      }
    }
    expect(HERO_FIELDS.slice(0, 3)).toEqual(["origin", "talent", "dao"]);
  });

  it("begins as the river village, mixed roots and no Dao, so every earlier game is unchanged", () => {
    expect(DEFAULT_HERO).toMatchObject({ origin: "river", talent: "mixed", dao: "none" });
    const game = fresh();
    expect(game.sceneId).toBe("gate");
    expect(game.cultivation).toBe(0);
    expect(game.daoPoints).toBe(0);
    expect(game.speed).toBe(100);
  });

  it("restores a hero from a save made before these fields, and keeps the ones it has", () => {
    const old = { name: "Mo Lan", gender: "woman", looks: "plain", background: "farmer", attire: "rags", status: "outcast" };
    expect(restoreHero(old)).toMatchObject({ origin: "river", talent: "mixed", dao: "none", name: "Mo Lan", attire: "rags" });
    expect(restoreHero({ ...old, talent: "fire", dao: "sword", origin: "exile" })).toMatchObject({ talent: "fire", dao: "sword", origin: "exile" });
    expect(restoreHero({ ...old, talent: "thunder-god" }).talent).toBe("mixed");
    const game = JSON.parse(JSON.stringify(fresh(hero({ talent: "heaven", dao: "fate" }))));
    delete game.daoPoints;
    expect(restoreGame(game, story)?.daoPoints).toBe(0);
  });
});

describe("talents", () => {
  it("add or take away speed, shown by part in the panel", () => {
    expect(talentSpeed("mixed", 0)).toBe(0);
    expect(talentSpeed("heaven", 0)).toBeGreaterThan(talentSpeed("fire", 0));
    expect(talentSpeed("fire", 0)).toBeGreaterThan(talentSpeed("earth", 0));
    const fireGame = fresh(hero({ talent: "fire" }));
    expect(fireGame.speed).toBe(100 + talentSpeed("fire", 0) + 0);
    expect(speedParts(story, fireGame).some((p) => p.label === "Cinnabar root")).toBe(true);
    expect(speedParts(story, fresh()).some((p) => p.label.endsWith("root") || p.label === "Late bloom")).toBe(false);
  });

  it("let a late bloom run slow until Core Formation and fast after", () => {
    const g = fresh(hero({ talent: "late" }));
    expect(cultivationSpeed(story, { ...g, realm: 2 })).toBeLessThan(100);
    expect(cultivationSpeed(story, { ...g, realm: 3 })).toBeGreaterThan(100);
  });

  it("answer an element by their root: kindred, partial or none", () => {
    for (const element of ELEMENTS) {
      expect(TALENTS.filter((t) => affinityOf({ talent: t.value }, element) === 2).map((t) => t.value)).toEqual([element]);
    }
    expect(affinityOf({ talent: "mixed" }, "wood")).toBe(1);
    expect(affinityOf({ talent: "heaven" }, "fire")).toBe(1);
    expect(affinityOf({ talent: "heaven" }, "water")).toBe(0);
    expect(affinityOf({ talent: "late" }, "earth")).toBe(1);
    const metal = fresh(hero({ talent: "metal" }));
    expect(conditionsHold([{ kind: "affinity", element: "metal", min: 2 }], metal)).toBe(true);
    expect(conditionsHold([{ kind: "affinity", element: "fire", min: 1 }], metal)).toBe(false);
    expect(parseConditions("affinity:fire>=1", "t")).toEqual([{ kind: "affinity", element: "fire", min: 1 }]);
    expect(() => parseConditions("affinity:ether>=1", "t")).toThrow();
  });

  it("move the heart demon’s line: a mountain root resists, a heaven-marked root does not", () => {
    expect(heartDemonKarmaFor(hero({ talent: "earth" }))).toBeLessThan(heartDemonKarmaFor(DEFAULT_HERO));
    expect(heartDemonKarmaFor(hero({ talent: "heaven" }))).toBeGreaterThan(heartDemonKarmaFor(DEFAULT_HERO));
    const poised = (h: Hero, karma: number) => ({ cultivation: REALMS[4].threshold, realm: 3, stats: { qi: 20, karma, insight: 10 }, hero: h });
    expect(heartDemonBlocks(poised(DEFAULT_HERO, -35))).toBe(true);
    expect(heartDemonBlocks(poised(hero({ talent: "earth" }), -35))).toBe(false);
    expect(heartDemonBlocks(poised(hero({ talent: "heaven" }), -25))).toBe(true);
    expect(heartDemonBlocks(poised(hero({ dao: "healing" }), -45))).toBe(false);
  });

  it("add a line to every breakthrough, in the log entry that names the realm", () => {
    for (const t of TALENTS) {
      for (let realm = 1; realm < REALMS.length; realm++) {
        const line = ALL_TALENT_ARRIVALS[t.value][realm];
        expect(line, `${t.value} ${realm}`).toBeTruthy();
        expect(countWords(line)).toBeLessThanOrEqual(30);
      }
      expect(new Set(Object.values(ALL_TALENT_ARRIVALS[t.value])).size).toBe(7);
    }
    const near = (h: Hero): GameState => ({ ...fresh(h), cultivation: REALMS[1].threshold - 1 });
    const fire = gainCultivation(near(hero({ talent: "fire" })), 2);
    const wood = gainCultivation(near(hero({ talent: "wood" })), 2);
    expect(fire.realm).toBe(1);
    expect(fire.log.at(-1)?.text).toContain("Qi Condensation");
    expect(fire.log.at(-1)?.text).toContain(ALL_TALENT_ARRIVALS.fire[1]);
    expect(fire.log.at(-1)?.text).not.toBe(wood.log.at(-1)?.text);
  });
});

describe("Daos", () => {
  const poor = (h: Hero, patch: Partial<GameState> = {}): GameState => settle(story, { ...fresh(h), ...patch });

  it("rank by mastery points, with a gap that grows", () => {
    expect(DAO_RANKS.map((r) => r.name)).toEqual(["Novice", "Apprentice", "Adept", "Master", "Grandmaster"]);
    const gaps = DAO_RANKS.slice(1).map((r, i) => r.points - DAO_RANKS[i].points);
    expect(gaps).toEqual([...gaps].sort((a, b) => a - b));
    expect([0, 7, 8, 23, 24, 49, 50, 89, 90, 400].map(daoRankOf)).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]);
    expect(daoToNext(0)).toBe(8);
    expect(daoToNext(90)).toBeUndefined();
  });

  it("describe a passive for every Dao, and name every Dao", () => {
    for (const d of DAOS) {
      expect(DAO_PASSIVE[d.value].length, d.value).toBeGreaterThan(20);
      expect(DAO_NAME[d.value].length, d.value).toBeGreaterThan(3);
    }
    for (const d of DAOS.filter((x) => x.value !== "none")) {
      for (const realm of [2, 4, 6]) expect(ALL_DAO_ARRIVALS[d.value][realm], `${d.value} ${realm}`).toBeTruthy();
    }
  });

  it("add mastery from an effect, say so when a rank is reached, and give nothing to the open hand", () => {
    const sword = poor(hero({ dao: "sword" }));
    const got = applyEffects(sword, [{ kind: "addDao", amount: 8 }]);
    expect(got.daoPoints).toBe(8);
    expect(got.log.at(-1)?.text).toContain("Sword Dao reaches Apprentice");
    expect(applyEffects(got, [{ kind: "addDao", amount: 1 }]).log.length).toBe(got.log.length);
    expect(applyEffects(poor(DEFAULT_HERO), [{ kind: "addDao", amount: 40 }]).daoPoints).toBe(0);
    expect(parseEffects("dao+4", "t").effects).toEqual([{ kind: "addDao", amount: 4 }]);
    expect(conditionsHold(parseConditions("mastery>=1", "t"), got)).toBe(true);
    expect(conditionsHold(parseConditions("mastery>=2", "t"), got)).toBe(false);
  });

  it("lets a pill work from further back for an alchemist", () => {
    expect(aidReachFor(hero({ dao: "alchemy" }))).toBeLessThan(aidReachFor(DEFAULT_HERO));
    const withPill = (h: Hero, points: number): GameState => ({ ...poor(h), realm: 2, cultivation: points, items: { dr_dew_still_ware: 1 } });
    const pillStory = { ...story, items: { ...story.items, test_pill: { id: "test_pill", name: "Test Pill", kind: "pill" as const, blurb: "A test pill.", value: 1, aid: 3 } } };
    const at = (h: Hero, points: number) => applyAid(pillStory, { ...withPill(h, points), items: { test_pill: 1 } });
    const point = REALMS[3].threshold * 0.75;
    expect(at(hero({ dao: "alchemy" }), point).realm).toBe(3);
    expect(at(DEFAULT_HERO, point).realm).toBe(2);
    expect(at(DEFAULT_HERO, REALMS[3].threshold * 0.9).realm).toBe(3);
  });

  it("makes a forger’s tools and a formation-master’s holdings work harder", () => {
    const items = { ...story.items!, tool: { id: "tool", name: "Anvil", kind: "tool" as const, blurb: "x", value: 1, speed: 6, needsRealm: 0 } };
    const assets = { ...story.assets!, hold: { id: "hold", name: "Bench", blurb: "x", income: 2, upkeep: 1, speed: 4, needsRealm: 0 } };
    const kit = { ...story, items, assets };
    const base = (h: Hero) => ({ ...poor(h), items: { tool: 1 }, assets: ["hold"] });
    expect(cultivationSpeed(kit, base(DEFAULT_HERO))).toBe(110);
    expect(cultivationSpeed(kit, base(hero({ dao: "forging" })))).toBe(100 + 9 + 4);
    expect(cultivationSpeed(kit, base(hero({ dao: "formation" })))).toBe(100 + 6 + 8);
  });

  it("halves what a push beyond the realm costs a talisman-maker", () => {
    expect(strainFactor(hero({ dao: "talisman" }))).toBe(0.5);
    const push = (h: Hero) => applyStrain({ ...poor(h), cultivation: 40, realm: 1, npc: { ...fresh().npc, respect: 0 }, stats: { qi: 50, karma: 0, insight: 10 } }, 2);
    expect(40 - push(DEFAULT_HERO).cultivation).toBe(20);
    expect(40 - push(hero({ dao: "talisman" })).cultivation).toBe(10);
    expect(push(hero({ dao: "talisman" })).cultivation).toBeGreaterThan(push(DEFAULT_HERO).cultivation);
    expect(push(hero({ dao: "talisman" })).stats.qi).toBeGreaterThan(push(DEFAULT_HERO).stats.qi);
  });

  it("slows a beast-tamer less when Unfed and charges them less for their keep", () => {
    expect(livingCostFor(4, hero({ dao: "beast" }))).toBe(livingCostFor(4) - 1);
    const away = { leavesSect: "gone" };
    const lean = (h: Hero) => ({ ...poor(h), wealth: 1, realm: 4, visited: ["gone"] });
    expect(isUnfed(away, lean(DEFAULT_HERO))).toBe(true);
    expect(isUnfed(away, lean(hero({ dao: "beast" })))).toBe(false);
    const broke = (h: Hero) => ({ ...poor(h), wealth: 0, realm: 4, visited: ["gone"] });
    const speed = (h: Hero) => cultivationSpeed({ ...story, leavesSect: "gone" }, broke(h));
    expect(speed(hero({ dao: "beast" }))).toBeGreaterThan(speed(DEFAULT_HERO));
  });

  it("lets a swordsman gain more from force, and a diviner lose half the karma", () => {
    const force = (h: Hero) => choose(story, { ...fresh(h), sceneId: "memorial", visited: [] }, "read_altar_qi").cultivation;
    expect(getScene(story, "memorial").choices.find((c) => c.id === "read_altar_qi")?.tone).toBe("force");
    expect(force(hero({ dao: "sword" }))).toBeGreaterThan(force(DEFAULT_HERO));
    expect(karmaChange(hero({ dao: "fate" }), -5)).toBe(-2);
    expect(karmaChange(hero({ dao: "fate" }), 5)).toBe(5);
    expect(karmaChange(DEFAULT_HERO, -5)).toBe(-5);
    const lose = (h: Hero) => applyEffects(fresh(h), [{ kind: "addStat", stat: "karma", amount: -8 }]).stats.karma;
    expect(lose(hero({ dao: "fate" }))).toBeGreaterThan(lose(DEFAULT_HERO));
  });

  it("lets a swordsman master a deed one realm sooner", () => {
    expect(masteryGapFor(hero({ dao: "sword" }), 2)).toBe(1);
    expect(masteryGapFor(DEFAULT_HERO, 2)).toBe(2);
    const mini: Story = {
      title: "t",
      startSceneId: "a",
      npc: story.npc,
      scenarios: {},
      scenes: {
        a: { id: "a", title: "A", paragraphs: ["x"], choices: [{ id: "go", label: "Go.", tone: "quiet", next: "b", needsRealm: 1 }] },
        b: { id: "b", title: "B", paragraphs: ["y"], choices: [] },
      },
    };
    const gained = (h: Hero) => {
      const g = { ...createGame(mini, h), realm: 2, cultivation: REALMS[2].threshold };
      return choose(mini, g, "go").cultivation - g.cultivation;
    };
    expect(gained(DEFAULT_HERO)).toBe(2);
    expect(gained(hero({ dao: "sword" }))).toBe(5);
  });

  it("starts every hero with their own numbers, within the ranges the game keeps", () => {
    for (const origin of ORIGINS) for (const talent of TALENTS) for (const dao of DAOS) {
      const g = fresh(hero({ origin: origin.value, talent: talent.value, dao: dao.value }));
      for (const v of Object.values(g.stats)) expect(v).toBeGreaterThanOrEqual(-100);
      expect(g.npc.fear).toBeGreaterThanOrEqual(0);
      expect(g.npc.fear).toBeLessThanOrEqual(100);
      expect(g.npc.suspicion).toBeLessThanOrEqual(100);
      expect(g.realm).toBeLessThanOrEqual(1);
      expect(startingWealth(g.hero)).toBeGreaterThanOrEqual(0);
    }
  });
});

describe("starting points", () => {
  it("begin in a scene of their own, and the river village at the gate", () => {
    expect(Object.keys(ORIGIN_START).sort()).toEqual(ORIGINS.map((o) => o.value).sort());
    for (const o of ORIGINS) {
      const g = fresh(hero({ origin: o.value }));
      expect(g.sceneId, o.value).toBe(ORIGIN_START[o.value]);
      expect(story.scenes[g.sceneId], o.value).toBeDefined();
      expect(g.log.length, o.value).toBeGreaterThan(1);
    }
    expect(startScenes(story)).toHaveLength(6);
  });

  it("write five prologues of seven scenes, each within the cap, with four choices and a heading of its own", () => {
    expect(Object.keys(prologues)).toHaveLength(5);
    expect(prologueScenes).toHaveLength(35);
    for (const [origin, scenes] of Object.entries(prologues)) {
      expect(scenes, origin).toHaveLength(7);
      for (const s of scenes) {
        expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
      }
    }
  });

  it("let every prologue walk, by every choice in turn, to the Law Hall", () => {
    for (const o of ORIGINS.filter((x) => x.value !== "river")) {
      const start = ORIGIN_START[o.value];
      const seen = new Set<string>([start]);
      const queue = [start];
      while (queue.length) for (const c of story.scenes[queue.pop()!].choices) if (!seen.has(c.next) && c.next !== "law_hall") { seen.add(c.next); queue.push(c.next); }
      expect([...seen].filter((id) => id.startsWith(`o_${o.value}_`)).length, o.value).toBe(7);
      expect([...seen].some((id) => story.scenes[id].choices.some((c) => c.next === "o_" + o.value + "_hall" || c.next === "law_hall")), o.value).toBe(true);
    }
    let g = fresh(hero({ origin: "exile" }));
    const pick = (id: string) => (g = choose(story, g, id));
    for (let i = 0; i < 5; i++) pick(getScene(story, g.sceneId).choices[0].id);
    expect(g.sceneId).toBe("o_exile_gate");
    pick("c1");
    expect(g.sceneId).toBe("o_exile_hall");
    pick("c1");
    expect(g.sceneId).toBe("law_hall");
    expect(g.history).toContain("LH_ENTER_EXILE");
  });

  it("change what a prologue scene says, by talent and by Dao", () => {
    const text = (scene: string, h: Hero) => enterScene(story, { ...fresh(h), log: [] }, getScene(story, scene)).log.map((e) => e.text).join("\n");
    const base = text("o_rogue_2", hero({ origin: "rogue" }));
    for (const talent of ["wood", "fire", "heaven"] as const) expect(text("o_rogue_2", hero({ origin: "rogue", talent })), talent).not.toBe(base);
    const craft = text("o_rogue_3", hero({ origin: "rogue" }));
    for (const dao of ["sword", "healing", "fate"] as const) expect(text("o_rogue_3", hero({ origin: "rogue", dao })), dao).not.toBe(craft);
  });

  it("answers each origin differently in the Law Hall door scene, by the Elder’s attitude and by what the hero is", () => {
    for (const o of ORIGINS.filter((x) => x.value !== "river")) {
      const scenario = story.scenarios[`LH_ENTER_${o.value.toUpperCase()}`];
      expect(scenario, o.value).toBeDefined();
      expect(new Set(TIERS.map((t) => scenario.lines[t])).size).toBe(5);
      expect(scenario.memory!.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("keeps the whole story sound with six starts: nothing unreachable, no flag left unread", () => {
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });
});

describe("how the Elder speaks of the new parts", () => {
  const asides = story.asides!;
  it("has a distinct line for every origin, talent and Dao, at every attitude", () => {
    for (const field of ["origin", "talent", "dao"] as const) {
      for (const o of HERO_OPTIONS[field]) {
        const lines = TIERS.map((t) => asides[field]?.[o.value]?.[t]);
        expect(lines.every((l) => typeof l === "string" && l.length > 20), `${field}:${o.value}`).toBe(true);
        expect(new Set(lines).size, `${field}:${o.value}`).toBe(5);
        for (const l of lines) expect(countWords(l!)).toBeLessThanOrEqual(60);
      }
    }
  });

  it("works through eight parts of the hero and the realm, never saying one twice", () => {
    let g = fresh(hero({ origin: "exile", talent: "heaven", dao: "sword" }));
    const seen = new Set<string>();
    for (let i = 0; i < 400 && getScene(story, g.sceneId).choices.length > 0; i++) {
      const options = getChoices(getScene(story, g.sceneId), g).filter((c) => c.available);
      if (!options.length) break;
      g = choose(story, g, options[i % options.length].choice.id);
    }
    for (const id of g.remarked.filter((r) => r.startsWith("aside:"))) {
      expect(seen.has(id), id).toBe(false);
      seen.add(id);
    }
    expect(seen.size).toBeGreaterThan(0);
  });
});
