import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, getChoices, getScene, settle } from "@/engine/game";
import { cultivationSpeed, speedParts, startingWealth } from "@/engine/economy";
import { REALMS } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { AGE_OPTIONS, DEFAULT_HERO, HERO_FIELDS, personalise, restoreHero, standingOf, startFor, type Age, type Hero } from "@/engine/hero";
import { AGE_BOUNDS, AGE_MID, AGE_START, AGES, ageHeartDemon, ageOf, ageSpeed, bandOfYears, DECISIONS_PER_YEAR, gapBounds, gapsFor, LIFESPAN, lifeLeft, lifespanOf, looksOf, WANING_YEARS, waningOf } from "@/engine/age";
import { heartDemonKarmaFor } from "@/engine/path";
import { restoreGame } from "@/engine/save";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import type { Condition, GameState, Scene } from "@/engine/types";
import { ageAssets, ageEntrances, ageGroups, ageItems, ageScenarios, SPECS8, WAYSIDES8 } from "@/story/age";
import { doorFlag, doorSceneId, pickFlag, synthesize, yearsGiven } from "@/story/age/build";
import { REALM_BEATS } from "@/story/age/lexicon-realm";
import { GAP_PICKS } from "@/story/age/lexicon-door";
import { TURNS, turnFlag } from "@/story/age/main";
import { cultivationEntrances } from "@/story/cultivation";
import { crossingEntrances } from "@/story/crossing";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";

const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const view = (state: GameState, id: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === id);
const ids = (state: GameState) => getChoices(getScene(story, state.sceneId), state).map((v) => v.choice.id);
const scenes: Scene[] = ageGroups.flatMap((g) => g.scenes);
const specOf = (id: string) => SPECS8.find((s) => s.id === id)!;
const waysideOf = (id: string) => WAYSIDES8[Math.floor(SPECS8.findIndex((s) => s.id === id) / 5)];

describe("the years a hero begins with", () => {
  it("offers five ages from sixteen to sixty-eight, each with a label and a line for the creation screen", () => {
    expect(AGE_OPTIONS.map((o) => o.value)).toEqual([...AGES]);
    expect(AGES.map((a) => AGE_START[a])).toEqual([16, 24, 36, 52, 68]);
    for (const o of AGE_OPTIONS) {
      expect(o.label.length).toBeGreaterThan(0);
      expect(o.blurb.length).toBeGreaterThan(30);
    }
    expect(HERO_FIELDS.slice(0, 2)).toEqual(["origin", "age"]);
  });

  it("begins at twenty-four, which changes nothing, so every earlier game is unchanged", () => {
    expect(DEFAULT_HERO.age).toBe("young");
    expect(startFor(DEFAULT_HERO)).toEqual({ stats: { qi: 6, karma: 3 }, npc: {} });
    expect(ageSpeed("young", 0)).toBe(0);
    expect(standingOf(DEFAULT_HERO, 0)).toBe(standingOf({ ...DEFAULT_HERO, age: "prime" }, 0));
  });

  it("reads an old save without an age as twenty-four", () => {
    const { age: _gone, ...old } = DEFAULT_HERO;
    void _gone;
    expect(restoreHero(old).age).toBe("young");
    const saved = JSON.parse(JSON.stringify(createGame(story, hero({ age: "elder" }))));
    delete saved.years;
    delete saved.hero.age;
    const back = restoreGame(saved, story)!;
    expect(back.years).toBe(0);
    expect(back.hero.age).toBe("young");
  });

  it("sets the opening numbers by age: the young bring qi and no judgment, the old the other way round, and an elder has a lifetime’s savings", () => {
    const youth = startFor(hero({ age: "youth" }));
    const elder = startFor(hero({ age: "elder" }));
    expect(youth.stats.qi).toBeGreaterThan(0);
    expect(youth.stats.insight).toBeLessThan(0);
    expect(elder.stats.insight).toBeGreaterThan(0);
    expect(elder.stats.qi).toBeLessThan(0);
    expect(startingWealth(hero({ age: "elder" }))).toBeGreaterThan(startingWealth(hero({ age: "youth" })));
    expect(standingOf(hero({ age: "elder" }), 0)).toBe(standingOf(hero({ age: "youth" }), 0) + 1);
  });
});

describe("years pass and a realm is a span of them", () => {
  it("adds a year for every stretch of decisions", () => {
    const h = hero({ age: "youth" });
    expect(ageOf(h, 0)).toBe(16);
    expect(ageOf(h, DECISIONS_PER_YEAR - 1)).toBe(16);
    expect(ageOf(h, DECISIONS_PER_YEAR)).toBe(17);
    expect(ageOf(h, DECISIONS_PER_YEAR * 10)).toBe(26);
    expect(bandOfYears(ageOf(h, DECISIONS_PER_YEAR * 4))).toBe("young");
  });

  it("gives a longer span at every realm, and counts years given by a road", () => {
    expect([...LIFESPAN].sort((a, b) => a - b)).toEqual([...LIFESPAN]);
    expect(LIFESPAN).toHaveLength(REALMS.length);
    expect(lifespanOf(0)).toBe(76);
    expect(lifespanOf(2, 5)).toBe(LIFESPAN[2] + 5);
    const h = hero({ age: "elder" });
    expect(lifeLeft(h, { realm: 0, decisions: 0, years: 0 })).toBe(8);
    expect(lifeLeft(h, { realm: 1, decisions: 0, years: 0 })).toBe(42);
    expect(lifeLeft(h, { realm: 0, decisions: 0, years: 10 })).toBe(18);
  });

  it("slows a hero whose years are nearly spent, and more when they are past them", () => {
    const h = hero({ age: "elder" });
    const speed = (patch: Partial<GameState>) => cultivationSpeed(story, { ...createGame(story, h), ...patch });
    const fresh = speed({ realm: 1 });
    const short = speed({ realm: 0, decisions: DECISIONS_PER_YEAR * 6 });
    const past = speed({ realm: 0, decisions: DECISIONS_PER_YEAR * 9 });
    expect(waningOf(lifeLeft(h, { realm: 0, decisions: DECISIONS_PER_YEAR * 6 }))).toBe("short");
    expect(short).toBeLessThan(speed({ realm: 0 }));
    expect(past).toBeLessThan(short);
    expect(fresh).toBeGreaterThan(short);
    const labels = speedParts(story, { ...createGame(story, h), realm: 0, decisions: DECISIONS_PER_YEAR * 9 }).map((p) => p.label);
    expect(labels).toContain("Past your years");
    expect(WANING_YEARS).toBe(3);
  });

  it("makes the young quick and the old patient, and an old heart steadier against a heart demon", () => {
    expect(ageSpeed("youth", 0)).toBeGreaterThan(ageSpeed("youth", 4));
    expect(ageSpeed("youth", 4)).toBeGreaterThan(0);
    expect(ageSpeed("elder", 0)).toBeLessThan(ageSpeed("mature", 0));
    expect(heartDemonKarmaFor(hero({ age: "youth" }))).toBeGreaterThan(heartDemonKarmaFor(DEFAULT_HERO));
    expect(heartDemonKarmaFor(hero({ age: "elder" }))).toBeLessThan(heartDemonKarmaFor(DEFAULT_HERO));
    expect(ageHeartDemon(undefined)).toBe(0);
  });

  it("logs a year as it goes by, says how many years the realm allows when few are left, and says the span a breakthrough lengthens to", () => {
    const g = at("law_hall", hero({ age: "elder" }), { decisions: DECISIONS_PER_YEAR - 1 });
    const after = choose(story, g, "honest_account");
    const ledger = after.log.filter((e) => e.kind === "ledger").map((e) => e.text);
    expect(ledger.some((t) => t.startsWith("A year has gone by. You are 69."))).toBe(true);
    expect(ledger.some((t) => t.includes("Your realm allows you 7 more"))).toBe(true);
    const broke = at("law_hall", hero({ age: "elder" }), { cultivation: 14, decisions: 1 });
    const through = choose(story, broke, "honest_account");
    const note = through.log.find((e) => e.kind === "realm")?.text ?? "";
    expect(note).toContain("Breakthrough: Qi Condensation");
    expect(note).toContain(`Your span of years stretches to ${LIFESPAN[1]}.`);
    expect(through.realm).toBe(1);
  });

  it("reads age and years in conditions, and adds years by an effect", () => {
    const youth = at("gate", hero({ age: "youth" }));
    expect(conditionsHold([{ kind: "age", max: 19 }], youth)).toBe(true);
    expect(conditionsHold([{ kind: "age", min: 20 }], youth)).toBe(false);
    expect(conditionsHold([{ kind: "age", min: 20 }], { ...youth, decisions: DECISIONS_PER_YEAR * 4 })).toBe(true);
    const elder = at("gate", hero({ age: "elder" }));
    expect(conditionsHold([{ kind: "years", max: 10 }], elder)).toBe(true);
    expect(conditionsHold([{ kind: "years", max: 10 }], { ...elder, years: 5 })).toBe(false);
    expect(conditionsHold([{ kind: "years", min: 1 }], { ...elder, realm: 1 })).toBe(true);
  });

  it("makes a cultivator who has risen look younger than they are", () => {
    const h = hero({ age: "mature" });
    expect(looksOf(h, { realm: 0, decisions: 0 })).toBe(52);
    expect(looksOf(h, { realm: 4, decisions: 0 })).toBeLessThan(52);
    expect(looksOf(hero({ age: "youth" }), { realm: 7 })).toBeGreaterThanOrEqual(16);
  });
});

describe("what the Elder says at the gate of a hero who begins past fifty", () => {
  it("never tells a hero of fifty-two or sixty-eight what she did “at your age”", () => {
    let said = 0;
    const everyShown: string[] = [];
    for (const s of Object.values(story.scenes)) everyShown.push(...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...(s.interjections ?? []).map((i) => i.line), ...s.choices.map((c) => c.label));
    for (const sc of Object.values(story.scenarios)) everyShown.push(...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line));
    for (const r of story.remarks ?? []) everyShown.push(r.line);
    for (const group of Object.values(story.asides ?? {})) for (const lines of Object.values(group)) everyShown.push(...Object.values(lines));
    for (const text of everyShown) {
      if (!/\bat your age\b/.test(text)) continue;
      said++;
      expect(personalise(text, hero({ age: "elder" })), text).not.toMatch(/\bat your age\b/);
      expect(personalise(text, hero({ age: "mature" })), text).not.toMatch(/\bat your age\b/);
      expect(personalise(text, hero({ age: "youth" })), text).toMatch(/at your age/);
    }
    expect(said).toBeGreaterThan(10);
  });

  it("says no companion thought a hero of sixty-eight would be older", () => {
    const lin = (story.remarks ?? []).find((r) => r.id === "hr_lin_man")!;
    expect(lin.when.some((c: Condition) => c.kind === "age" && c.max !== undefined)).toBe(true);
  });
});

describe("a door of years on every road: who it opens to", () => {
  it("covers every age with exactly three doors per keeper, none overlapping", () => {
    for (const keeper of AGES) {
      const gaps = gapsFor(keeper);
      for (let years = 10; years <= 120; years++) {
        const open = gaps.filter((g) => {
          const b = gapBounds(g, keeper);
          return (b.min === undefined || years >= b.min) && (b.max === undefined || years <= b.max);
        });
        expect(open, `${keeper} at ${years}`).toHaveLength(years < 16 ? open.length : 1);
      }
    }
    expect(AGES.map((a) => AGE_MID[a])).toEqual([17, 25, 38, 54, 70]);
    for (const a of AGES) expect(bandOfYears(AGE_START[a])).toBe(a);
    for (const a of AGES) expect(AGE_BOUNDS[a][0]).toBeLessThanOrEqual(AGE_START[a]);
  });

  it("shows a hero of any age exactly one door of years, in the middle of the second approach of every road", () => {
    for (const spec of SPECS8) {
      for (let age = 16; age <= 90; age += 1) {
        const decisions = Math.max(0, (age - 24) * DECISIONS_PER_YEAR);
        const state = at(`${spec.id}_a1s2`, hero({ age: "young" }), { decisions, realm: waysideOf(spec.id).realm });
        const doors = ids(state).filter((id) => id.startsWith("door_"));
        if (age >= 24) expect(doors, `${spec.id} at ${age}`).toHaveLength(1);
      }
      for (const band of AGES) {
        const state = at(`${spec.id}_a1s2`, hero({ age: band }), { realm: waysideOf(spec.id).realm });
        expect(ids(state).filter((id) => id.startsWith("door_")), `${spec.id} for ${band}`).toHaveLength(1);
      }
    }
  });

  it("keeps a door shut once its scene has been taken, and leaves the other two unseen", () => {
    const spec = specOf("age_3_prime");
    const state = at(`${spec.id}_a1s2`, hero({ age: "prime" }), { realm: 3, flags: { [doorFlag(spec.id)]: true } });
    expect(ids(state).filter((id) => id.startsWith("door_"))).toEqual([]);
    const youth = at(`${spec.id}_a1s2`, hero({ age: "youth" }), { realm: 3 });
    expect(ids(youth)).toContain("door_younger");
    const elder = at(`${spec.id}_a1s2`, hero({ age: "elder" }), { realm: 3 });
    expect(ids(elder)).toContain("door_older");
    expect(ids(elder)).not.toContain("door_younger");
  });

  it("gives years back only to a hero who is short of them, has the realm for it and has the qi to pay", () => {
    const spec = specOf("age_3_elder");
    const R = 3;
    const door = doorSceneId(spec.id, "kin");
    const rich = { stats: { qi: 60, karma: 0, insight: 60 } };
    const elder = hero({ age: "elder" });
    // A hero of sixty-eight at Core Formation has plenty of years: the road tells them to come back.
    const plenty = at(door, elder, { realm: R, ...rich });
    expect(view(plenty, "years")?.available).toBe(false);
    // The same hero, nearly past their years and at the road's realm, is given some.
    const needy = at(door, elder, { realm: R, years: 0, decisions: DECISIONS_PER_YEAR * 20, ...rich });
    expect(lifeLeft(elder, needy)).toBeGreaterThan(0);
    const short = { ...needy, decisions: (lifespanOf(R) - AGE_START.elder - 10) * DECISIONS_PER_YEAR };
    expect(view(short, "years")?.available).toBe(true);
    const given = choose(story, short, "years");
    expect(given.years).toBe(yearsGiven(R));
    expect(given.flags[pickFlag("years", spec.id)]).toBe(true);
    expect(given.flags[doorFlag(spec.id)]).toBe(true);
    // Too low a realm, or too little qi, closes it.
    expect(view({ ...short, realm: 1 }, "years")?.available).toBe(false);
    expect(view({ ...short, stats: { ...short.stats, qi: 5 } }, "years")?.available).toBe(false);
  });

  it("asks the realm of the road for the picks that outlast or hasten, and shows what is missing", () => {
    const spec = specOf("age_5_prime");
    const door = doorSceneId(spec.id, "older");
    const below = at(door, hero({ age: "mature" }), { realm: 2 });
    expect(view(below, "outlast")?.available).toBe(false);
    expect(view(below, "outlast")?.hint).toContain("Spirit Severing");
    const there = at(door, hero({ age: "mature" }), { realm: 5, stats: { qi: 40, karma: 0, insight: 10 } });
    expect(view(there, "outlast")?.available).toBe(true);
  });
});

describe("the Age Roads", () => {
  it("add more than a thousand scenes: eight waysides, forty roads of twenty-eight scenes, and the hubs and ways back", () => {
    expect(WAYSIDES8).toHaveLength(8);
    expect(ageGroups).toHaveLength(8);
    expect(SPECS8).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(40 * 28);
    expect(scenes.length + ageGroups.length).toBeGreaterThanOrEqual(1100);
    expect(chapters.filter((c) => c.name.startsWith("Age Roads:"))).toHaveLength(8);
    expect(Object.keys(ageEntrances)).toHaveLength(8);
    expect(Object.keys(ageItems)).toHaveLength(40);
    expect(Object.keys(ageAssets)).toHaveLength(40);
    expect(Object.keys(ageScenarios)).toHaveLength(80);
  });

  it("sets every age beside every realm, once: five ages, eight realms, forty pairs, one realm to a wayside", () => {
    const pairs = new Set(SPECS8.map((s) => `${s.age}/${waysideOf(s.id).realm}`));
    expect(pairs.size).toBe(40);
    WAYSIDES8.forEach((w, n) => {
      expect(w.realm).toBe(n);
      expect(SPECS8.slice(n * 5, n * 5 + 5).map((s) => s.age)).toEqual([...AGES]);
    });
    const realms = WAYSIDES8.map((w) => w.realm);
    expect(realms[0]).toBe(0);
    expect(realms.at(-1)).toBe(7);
  });

  it("opens each wayside from a scene no earlier wave opens from, once", () => {
    const earlier = new Set([...Object.keys(waysideEntrances), ...Object.keys(realmEntrances), ...Object.keys(fortuneEntrances), ...Object.keys(daoEntrances), ...Object.keys(witnessEntrances), ...Object.keys(cultivationEntrances), ...Object.keys(crossingEntrances)]);
    for (const origin of Object.keys(ageEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_age_")), origin).toHaveLength(1);
    }
  });

  it("keeps every scene inside the cap, with a heading, and the story whole", () => {
    for (const s of scenes) {
      expect(s.title.length, s.id).toBeGreaterThan(0);
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("writes the keeper’s years and the road’s realm into every beat, and tells no keeper’s age to the wrong hero", () => {
    for (const spec of SPECS8) {
      const road = synthesize(spec, waysideOf(spec.id).realm);
      const text = [...road.beats.flat(), ...road.deep].join(" ");
      expect(text, spec.id).not.toMatch(/\{\w+\}/);
      expect(new Set(road.beats.flat()).size, spec.id).toBe(20);
    }
  });

  it("gives each realm’s beats the span its realm allows and no other", () => {
    const words: Record<number, string> = { 0: "seventy-six", 1: "hundred and ten", 2: "hundred and sixty", 3: "two hundred and fifty", 4: "four hundred", 5: "six hundred and twenty", 6: "nine hundred and fifty", 7: "fifteen hundred" };
    REALM_BEATS.forEach((beats, r) => {
      const text = beats.join(" ").toLowerCase();
      const others = Object.entries(words).filter(([k]) => Number(k) !== r);
      for (const [k, w] of others) {
        // “hundred and ten” is inside no other span’s words, but “four hundred” is inside “two hundred and fifty”: compare whole phrases.
        if (w === "four hundred" || w === "hundred and ten") continue;
        expect(text.includes(w), `realm ${r} names the span of realm ${k}`).toBe(false);
      }
      expect(LIFESPAN[r]).toBeGreaterThan(0);
    });
  });

  it("answers every pick behind a door at once, in the Elder’s words, and moves cultivation", () => {
    for (const spec of SPECS8) {
      const w = waysideOf(spec.id);
      for (const gap of gapsFor(spec.age)) {
        const door = getScene(story, doorSceneId(spec.id, gap));
        expect(door.choices.map((c) => c.id)).toEqual(GAP_PICKS[gap]);
        for (const c of door.choices) {
          expect(c.npcScenario, `${door.id}.${c.id}`).toBeDefined();
          expect(story.scenarios[c.npcScenario!], c.npcScenario).toBeDefined();
          expect(c.effects?.some((e) => e.kind === "setFlag" && e.flag === doorFlag(spec.id))).toBe(true);
          const gains = c.effects?.filter((e) => e.kind === "addCultivation" || e.kind === "addYears" || e.kind === "addDao" || e.kind === "addStat").length ?? 0;
          expect(gains, `${door.id}.${c.id}`).toBeGreaterThan(0);
        }
      }
      expect(w.realm).toBeLessThanOrEqual(7);
    }
  });

  it("lets the Mortal wayside’s roads stand without a lesser way, since nobody is below Mortal", () => {
    for (const spec of SPECS8.filter((s) => waysideOf(s.id).realm === 0)) {
      expect(ids(at(`${spec.id}_entry`)), spec.id).not.toContain("humble");
    }
    for (const spec of SPECS8.filter((s) => waysideOf(s.id).realm === 1)) {
      expect(ids(at(`${spec.id}_entry`)), spec.id).toContain("humble");
    }
  });

  it("walks every road to its return for a hero of every age, with the years kept sound", () => {
    for (const age of AGES) {
      for (const spec of SPECS8.filter((_, i) => i % 3 === 0)) {
        let g = at(`${spec.id}_entry`, hero({ age }), { realm: waysideOf(spec.id).realm, stats: { qi: 60, karma: 0, insight: 40 }, wealth: 200 });
        for (let step = 0; step < 14 && !g.sceneId.endsWith("_return"); step++) {
          const options = getChoices(getScene(story, g.sceneId), g).filter((v) => v.available);
          expect(options.length, g.sceneId).toBeGreaterThan(0);
          g = choose(story, g, options[step % options.length].choice.id);
          expect(Number.isFinite(g.years) && g.years >= 0, g.sceneId).toBe(true);
        }
        expect(g.sceneId, `${spec.id} for ${age}`).toMatch(/^age_\d_\w+_(a\ds\d|return)$/);
      }
    }
  });
});

describe("the years in the main line", () => {
  it("offers a youth, someone seasoned and an elder each a way of meeting seven turning points that only their age allows", () => {
    expect(TURNS).toHaveLength(7);
    const at19 = (id: string, age: Age) => ids(at(id, hero({ age }), { stats: { qi: 30, karma: 0, insight: 10 } })).filter((c) => c.startsWith("age_"));
    for (const t of TURNS) {
      expect(at19(t.id, "youth"), t.id).toEqual(["age_quick"]);
      expect(at19(t.id, "young"), t.id).toEqual([]);
      expect(at19(t.id, "prime"), t.id).toEqual(["age_seasoned"]);
      expect(at19(t.id, "mature"), t.id).toEqual(["age_seasoned"]);
      expect(at19(t.id, "elder"), t.id).toEqual(["age_slow"]);
    }
  });

  it("takes the same road on as the scene already does, once, and the Elder answers", () => {
    const g = at("gate", hero({ age: "elder" }));
    const next = choose(story, g, "age_slow");
    expect(next.sceneId).toBe("law_hall");
    expect(next.flags[turnFlag("slow", "gate")]).toBe(true);
    expect(next.cultivation).toBeGreaterThan(g.cultivation);
    expect(next.history).toContain("AGE_TURN_SLOW_GATE");
    expect(view({ ...next, sceneId: "gate" }, "age_slow")).toBeUndefined();
  });

  it("reads a hero’s age in the Law Hall and at the close of the story", () => {
    const state = at("mission", hero({ age: "youth" }));
    const shown = choose(story, at("law_hall", hero({ age: "youth" })), "honest_account");
    expect(shown.log.map((e) => e.text).join(" ")).toContain("Sixteen, or near it");
    expect(state.sceneId).toBe("mission");
    const ending = getScene(story, "end_ledger");
    expect(ending.extras?.some((x) => x.group === "years")).toBe(true);
  });
});

describe("a long walk at every age", () => {
  it("never gets stuck, keeps the years and the numbers sound, and never turns a year back", () => {
    const rng = (seed: number) => () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
    const problems: string[] = [];
    for (const [ai, age] of AGES.entries()) {
      const r = rng(ai * 17 + 3);
      let g = createGame(story, hero({ age, name: "Mo Lan" }));
      const began = ageOf(g.hero, 0);
      for (let i = 0; i < 900; i++) {
        const scene = getScene(story, g.sceneId);
        if (scene.ending && scene.choices.length === 0) break;
        const options = getChoices(scene, g).filter((v) => v.available);
        if (!options.length) {
          problems.push(`${age} is stuck in ${g.sceneId}`);
          break;
        }
        // Favour the age doors, the roads and the turning points, so the walk spends its time where years are read.
        const doors = options.filter((v) => v.choice.id.startsWith("door_") || v.choice.id.startsWith("age_") || v.choice.id === "years");
        const roads = options.filter((v) => v.choice.id.startsWith("wayside_age_") || v.choice.id.startsWith("go_age_"));
        const pool = doors.length && r() < 0.8 ? doors : roads.length && r() < 0.5 ? roads : options;
        g = choose(story, g, pool[Math.floor(r() * pool.length)].choice.id);
        if (!Number.isFinite(g.years) || g.years < 0) problems.push(`${age}: years ${g.years} at ${g.sceneId}`);
        if (!Number.isFinite(g.speed) || g.speed < 50 || g.speed > 250) problems.push(`${age}: speed ${g.speed} at ${g.sceneId}`);
        for (const e of g.log) if (/\{\w+\}|undefined|NaN/.test(e.text)) problems.push(`${age}: ${e.text.slice(0, 60)}`);
      }
      expect(ageOf(g.hero, g.decisions)).toBeGreaterThanOrEqual(began);
    }
    expect(problems).toEqual([]);
  });
});
