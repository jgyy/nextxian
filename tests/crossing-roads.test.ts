import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { cultivationSpeed, speedParts } from "@/engine/economy";
import { REALMS } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { DAOS, DEFAULT_HERO, GENDERS, TALENTS, type Hero } from "@/engine/hero";
import { affinityOf, attuneFlag, attunements, ATTUNE_POINTS, crossingSummary, ELEMENTS, type Element } from "@/engine/path";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { parseConditions } from "@/engine/markup";
import { crossingAssets, crossingEntrances, crossingGroups, crossingItems, crossingScenarios, SPECS7, WAYSIDES7 } from "@/story/crossing";
import { argueInsight, forkFlag, forkScenarioId, pathDoneFlag, pickFlag, pickPrefix, rootKindOf, slotsOf, synthesize } from "@/story/crossing/build";
import { CRAFTS } from "@/story/crossing/lexicon-craft";
import { GENDER_PICKS } from "@/story/crossing/lexicon-gender";
import { crossingRemarksSource } from "@/story/crossing/remarks";
import { daoEntrances } from "@/story/dao";
import { cultivationEntrances } from "@/story/cultivation";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = crossingGroups.flatMap((g) => g.scenes);
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);
const ids = (state: GameState) => getChoices(getScene(story, state.sceneId), state).map((v) => v.choice.id);
/** A hero rich enough in qi, insight and wealth to take any pick that is not about who they are. */
const strong = { stats: { qi: 60, karma: 0, insight: 60 }, wealth: 400, decisions: 12 };
const spec = (id: string) => SPECS7.find((s) => s.id === id)!;
const waysideOf = (id: string) => WAYSIDES7[Math.floor(SPECS7.findIndex((s) => s.id === id) / 4)];
const entryOf = (id: string, h: Hero, patch: Partial<GameState> = {}) => at(`${id}_entry`, h, { realm: waysideOf(id).realm, ...strong, ...patch });
/** The state of a hero standing in the middle of one approach, ready to take its door. */
const standing = (id: string, a: number, h: Hero, patch: Partial<GameState> = {}) => at(`${id}_a${a}s2`, h, { realm: waysideOf(id).realm, ...strong, ...patch });

const WOMAN = hero({ gender: "woman" });
const MAN = hero({ gender: "man" });
const UNSPOKEN = hero({ gender: "unspoken" });

describe("the Crossing Roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of thirty-four scenes, and the hubs and ways back", () => {
    expect(WAYSIDES7).toHaveLength(10);
    expect(crossingGroups).toHaveLength(10);
    expect(SPECS7).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(40 * 34);
    expect(scenes.length + crossingGroups.length).toBeGreaterThanOrEqual(1380);
    expect(chapters.filter((c) => c.name.startsWith("Crossing Roads:"))).toHaveLength(10);
    expect(Object.keys(crossingEntrances)).toHaveLength(10);
  });

  it("opens each wayside from a scene no earlier wave opens from, once, and asks a realm that never falls", () => {
    const earlier = new Set([...Object.keys(waysideEntrances), ...Object.keys(realmEntrances), ...Object.keys(fortuneEntrances), ...Object.keys(daoEntrances), ...Object.keys(witnessEntrances), ...Object.keys(cultivationEntrances)]);
    for (const origin of Object.keys(crossingEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_crossing_")), origin).toHaveLength(1);
    }
    const realms = WAYSIDES7.map((w) => w.realm);
    expect(realms).toEqual([...realms].sort((a, b) => a - b));
    expect(realms[0]).toBe(1);
    expect(realms.at(-1)).toBe(6);
  });

  it("sets every element beside every craft, once: five elements, eight crafts, forty pairs, ten waysides of one element each", () => {
    const pairs = new Set(SPECS7.map((s) => `${s.element}/${s.dao}`));
    expect(pairs.size).toBe(40);
    for (const e of ELEMENTS) expect(SPECS7.filter((s) => s.element === e).map((s) => s.dao).sort(), e).toEqual([...CRAFTS].sort());
    WAYSIDES7.forEach((w, n) => {
      const here = SPECS7.slice(n * 4, n * 4 + 4);
      expect(new Set(here.map((s) => s.element)), w.id).toEqual(new Set([w.element]));
      expect(new Set(here.map((s) => s.dao)).size, w.id).toBe(4);
      // The first five waysides are the making crafts and the last five the walking ones.
      const making = ["alchemy", "forging", "talisman", "formation"];
      expect(here.every((s) => making.includes(s.dao)) || here.every((s) => !making.includes(s.dao)), w.id).toBe(true);
      expect(here.every((s) => making.includes(s.dao)), w.id).toBe(n < 5);
    });
    // Each wayside has two keepers who are women and two who are men, so the roads meet a hero of each gender at a keeper of each.
    WAYSIDES7.forEach((w, n) => expect(SPECS7.slice(n * 4, n * 4 + 4).filter((s) => s.kgender === "woman"), w.id).toHaveLength(2));
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes, a way back and nine scenes behind its three doors, each within the word cap", () => {
    for (const s of SPECS7) {
      const own = scenes.filter((x) => x.id.startsWith(`${s.id}_`));
      expect(own, s.id).toHaveLength(34);
      for (const x of own) {
        expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(x.choices.filter((c) => !c.hideLocked).length, x.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(x), x.id).not.toMatch(/\{\w+\}/);
        expect(x.title.startsWith("Crossing Road:") || x.title.startsWith(s.title), x.id).toBe(true);
      }
    }
    for (const x of scenes.filter((y) => y.id.startsWith("wayside_"))) expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("sells one good and leases one holding on every road, with exactly one breakthrough pill on each wayside, for the realm after the road’s", () => {
    expect(Object.keys(crossingItems)).toHaveLength(40);
    expect(Object.keys(crossingAssets)).toHaveLength(40);
    WAYSIDES7.forEach((w, n) => {
      const pills = SPECS7.slice(n * 4, n * 4 + 4).filter((s) => s.ware.kind === "pill");
      expect(pills, w.id).toHaveLength(1);
      const next = Math.min(w.realm + 1, REALMS.length - 1);
      expect(story.items![`${pills[0].id}_ware`].aid, w.id).toBe(next);
      expect(pills[0].ware.blurb, w.id).toContain(next === REALMS.length - 1 ? "Ascendant" : REALMS[next].name);
    });
    for (const s of SPECS7) {
      const asset = story.assets![`${s.id}_hold`];
      expect(asset.income, s.id).toBeGreaterThan(asset.upkeep);
      expect(s.ware.name, s.id).not.toMatch(/^(The|A|An) /);
      expect(s.holding.name, s.id).not.toMatch(/^(The|A|An) /);
    }
  });

  it("writes each road in its own words: every keeper, road, place, good and holding is different, and no keeper has a name already in the story", () => {
    for (const key of ["kname", "id", "place", "title"] as const) expect(new Set(SPECS7.map((s) => s[key])).size, key).toBe(40);
    expect(new Set(SPECS7.map((s) => s.ware.name)).size).toBe(40);
    expect(new Set(SPECS7.map((s) => s.holding.name)).size).toBe(40);
    const own = SPECS7.flatMap((s) => [...s.openers, s.intro, s.close, s.secret]);
    expect(new Set(own).size).toBe(own.length);
    const synthesised = SPECS7.flatMap((s) => {
      const r = synthesize(s);
      return [...r.beats.flat(), ...r.deep];
    });
    expect(new Set(synthesised).size, "no beat of any road is another’s word for word").toBe(synthesised.length);
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(crossingScenarios)]);
    const outside = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).filter((r) => !r.id.includes("cx_") && !r.id.includes("_pr_")).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    expect(SPECS7.filter((s) => new RegExp(`\\b${s.kname}\\b`).test(outside) || companions.has(s.kname)).map((s) => s.kname)).toEqual([]);
  });

  it("does not clone a passage from road to road: no twelve-word phrase of a road’s own text in more than two roads, and no phrase of its craft or element’s in more roads than share them", () => {
    const grams = (n: number, limit: number, texts: (s: (typeof SPECS7)[number]) => string[]) => {
      const found = new Map<string, Set<string>>();
      for (const s of SPECS7) {
        for (const t of texts(s)) {
          const w = t.toLowerCase().replace(/[“”.,;:!?’]/g, "").split(/\s+/).filter(Boolean);
          for (let i = 0; i + n <= w.length; i++) {
            const g = w.slice(i, i + n).join(" ");
            (found.get(g) ?? found.set(g, new Set()).get(g)!).add(s.id);
          }
        }
      }
      return [...found].filter(([, v]) => v.size > limit).map(([g, v]) => `${v.size} roads: ${g}`);
    };
    expect(grams(12, 2, (s) => [s.intro, ...s.openers, s.close])).toEqual([]);
    // The long middle of a road is a beat of its craft (shared by five roads) and a beat of its element (shared by eight), so a phrase may be said in up to eight roads.
    expect(grams(12, 8, (s) => synthesize(s).beats.flat())).toEqual([]);
  });
});

describe("the three doors", () => {
  it("shows the gender door to the gender it is for, and to no one else", () => {
    const id = "pr_wood_alchemy";
    const doors = { woman: "door_gw", man: "door_gm", unspoken: "door_gu" } as const;
    for (const g of GENDERS) {
      const state = standing(id, 0, hero({ gender: g.value }));
      const shown = ids(state).filter((x) => x.startsWith("door_g"));
      expect(shown, g.value).toEqual([doors[g.value]]);
    }
  });

  it("opens a different scene to a woman, a man and someone who gives no answer, each in its own words and with its own four picks", () => {
    for (const s of SPECS7) {
      const texts = new Set<string>();
      for (const g of ["woman", "man", "unspoken"] as const) {
        const suffix = { woman: "gw", man: "gm", unspoken: "gu" }[g];
        const state = standing(s.id, 0, hero({ gender: g }));
        const next = choose(story, state, `door_${suffix}`);
        expect(next.sceneId, `${s.id} ${g}`).toBe(`${s.id}_${suffix}`);
        expect(getChoices(getScene(story, next.sceneId), next).map((v) => v.choice.id), `${s.id} ${g}`).toEqual(GENDER_PICKS[g]);
        texts.add(getScene(story, next.sceneId).paragraphs.join(" "));
      }
      expect(texts.size, s.id).toBe(3);
    }
  });

  it("makes the custom of the craft the road’s own: eight crafts and five elements give forty different gendered scenes for a woman, and as many for a man", () => {
    for (const suffix of ["gw", "gm", "gu"]) {
      const bodies = SPECS7.map((s) => getScene(story, `${s.id}_${suffix}`).paragraphs.slice(0, 2).join(" "));
      expect(new Set(bodies).size, suffix).toBe(40);
    }
  });

  it("lets the keeper meet a hero of each gender differently, and a keeper who is a man differently from one who is a woman", () => {
    const woman = spec("pr_wood_alchemy");
    const man = spec("pr_wood_forging");
    expect([woman.kgender, man.kgender]).toEqual(["woman", "man"]);
    const line = (s: (typeof SPECS7)[number], g: "woman" | "man" | "unspoken") => getScene(story, `${s.id}_${{ woman: "gw", man: "gm", unspoken: "gu" }[g]}`).paragraphs[2];
    const lines = (["woman", "man", "unspoken"] as const).flatMap((g) => [line(woman, g), line(man, g)]);
    expect(new Set(lines).size).toBe(6);
    expect(line(woman, "man")).toMatch(/\bshe\b/i);
    expect(line(man, "woman")).toMatch(/\bhe\b/i);
  });

  it("charges for a door that custom closes: a woman must argue the barred door open, a man must pay the yard’s test in qi, and the middle seat asks to be explained", () => {
    const id = "pr_fire_forging";
    const R = waysideOf(id).realm;
    const woman = at(`${id}_gw`, WOMAN, { realm: R, stats: { qi: 60, karma: 0, insight: 5 } });
    expect(view(woman, "barred")!.available).toBe(false);
    expect(view(woman, "barred")!.hint).toContain(`Insight ${argueInsight(R, 8)}`);
    const arguer = at(`${id}_gw`, WOMAN, { realm: R, stats: { qi: 0, karma: 0, insight: argueInsight(R, 8) } });
    expect(view(arguer, "barred")!.available).toBe(true);
    expect(view(arguer, "sisters")!.available).toBe(true);
    const weak = at(`${id}_gm`, MAN, { realm: R, stats: { qi: 5, karma: 0, insight: 60 } });
    expect(view(weak, "prove")!.available).toBe(false);
    const tired = choose(story, at(`${id}_gm`, MAN, { realm: R, stats: { qi: 20, karma: 0, insight: 0 } }), "prove");
    expect(tired.stats.qi).toBeLessThan(20);
    const dishonoured = at(`${id}_gm`, MAN, { realm: R, stats: { qi: 60, karma: -20, insight: 60 } });
    expect(view(dishonoured, "brothers")!.available).toBe(false);
    expect(view(dishonoured, "brothers")!.hint).toContain("clean name");
    const unsure = at(`${id}_gu`, UNSPOKEN, { realm: R, stats: { qi: 60, karma: 0, insight: 2 } });
    expect(view(unsure, "middle")!.available).toBe(false);
    expect(view(unsure, "either")!.available).toBe(true);
  });

  it("shows the root door to the roots that earn it: kindred to a single root of the road’s element, partial to a mixed, heaven-marked or late root, far to the rest", () => {
    for (const s of SPECS7) {
      for (const t of TALENTS) {
        const kind = rootKindOf(t.value, s.element);
        expect(kind, `${t.value} on ${s.element}`).toBe(affinityOf({ talent: t.value }, s.element) === 2 ? "kin" : affinityOf({ talent: t.value }, s.element) === 1 ? "partial" : "far");
        const state = standing(s.id, 1, hero({ talent: t.value }), { realm: waysideOf(s.id).realm });
        const shown = ids(state).filter((x) => x.startsWith("door_r"));
        expect(shown, `${s.id} ${t.value}`).toEqual([`door_r${{ kin: "k", partial: "p", far: "f" }[kind]}`]);
      }
    }
  });

  it("attunes a kindred root fully and a half-root by half, once to each element, whatever the road, and shows it in the cultivation speed", () => {
    const fire = spec("pr_fire_alchemy");
    const kin = choose(story, at(`${fire.id}_rk`, hero({ talent: "fire" }), { realm: 1, ...strong }), "attune");
    expect(kin.flags[attuneFlag("fire", 2)]).toBe(true);
    expect(kin.flags[attuneFlag("fire", 1)]).toBeUndefined();
    const plain = at(`${fire.id}_rk`, hero({ talent: "fire" }), { realm: 1, ...strong });
    expect(cultivationSpeed(story, kin)).toBe(cultivationSpeed(story, { ...plain, flags: {} }) + ATTUNE_POINTS[2]);
    const part = choose(story, at(`${fire.id}_rp`, hero({ talent: "mixed" }), { realm: 1, ...strong }), "attune");
    expect(part.flags[attuneFlag("fire", 1)]).toBe(true);
    expect(speedParts(story, part).find((p) => p.label === "Half-attuned to fire")?.points).toBe(ATTUNE_POINTS[1]);
    // A second fire road does not attune twice: the speed part is one line.
    const again = { ...kin, flags: { ...kin.flags, [attuneFlag("fire", 2)]: true } };
    expect(speedParts(story, again).filter((p) => p.label.includes("fire"))).toHaveLength(1);
    expect(attunements({ ...kin.flags, ...part.flags })).toEqual([{ element: "fire", level: 2 }]);
  });

  it("lets a hero whose roots are deaf to an element still half-attune by understanding it, and nothing less than Insight lets them", () => {
    const water = spec("pr_water_alchemy");
    const R = waysideOf(water.id).realm;
    const dull = at(`${water.id}_rf`, hero({ talent: "fire" }), { realm: R, stats: { qi: 60, karma: 0, insight: 4 } });
    expect(view(dull, "accept")!.available).toBe(false);
    expect(view(dull, "accept")!.hint).toContain(`Insight ${argueInsight(R, 10)}`);
    const keen = at(`${water.id}_rf`, hero({ talent: "fire" }), { realm: R, stats: { qi: 60, karma: 0, insight: argueInsight(R, 10) } });
    const after = choose(story, keen, "accept");
    expect(after.flags[attuneFlag("water", 1)]).toBe(true);
    // Studying it gives Insight and mastery instead, but does not attune.
    const studied = choose(story, dull, "study");
    expect(studied.flags[attuneFlag("water", 1)]).toBeUndefined();
    expect(studied.stats.insight).toBeGreaterThan(dull.stats.insight);
  });

  it("shows the craft door by the Dao: the road’s own craft to a colleague, another to a practitioner of another, and an open hand to one with none", () => {
    for (const s of SPECS7) {
      for (const d of DAOS) {
        const kind = d.value === s.dao ? "o" : d.value === "none" ? "n" : "x";
        const state = standing(s.id, 2, hero({ dao: d.value }), { realm: waysideOf(s.id).realm });
        expect(ids(state).filter((x) => x.startsWith("door_s")), `${s.id} ${d.value}`).toEqual([`door_s${kind}`]);
      }
    }
  });

  it("opens the master’s piece only to an Adept of the road’s own craft, and the contest only to a hero who holds a craft of their own", () => {
    const sword = spec("pr_wood_sword");
    const R = waysideOf(sword.id).realm;
    const novice = at(`${sword.id}_so`, hero({ dao: "sword" }), { realm: R, ...strong, daoPoints: 2 });
    expect(view(novice, "masterwork")!.available).toBe(false);
    const adept = at(`${sword.id}_so`, hero({ dao: "sword" }), { realm: R, ...strong, daoPoints: 30 });
    expect(view(adept, "masterwork")!.available).toBe(true);
    const after = choose(story, adept, "masterwork");
    expect(after.daoPoints).toBeGreaterThan(adept.daoPoints);
    const green = at(`${sword.id}_sx`, hero({ dao: "healing" }), { realm: R, ...strong, daoPoints: 0 });
    expect(view(green, "quarrel")!.available).toBe(false);
    const seasoned = at(`${sword.id}_sx`, hero({ dao: "healing" }), { realm: R, ...strong, daoPoints: 12 });
    expect(view(seasoned, "quarrel")!.available).toBe(true);
    // A hero with no Dao earns no mastery from the lesson, but does earn Insight.
    const open = at(`${sword.id}_sn`, hero({ dao: "none" }), { realm: R, ...strong });
    const learned = choose(story, open, "apprentice");
    expect(learned.daoPoints).toBe(open.daoPoints);
    expect(learned.stats.insight).toBeGreaterThan(open.stats.insight);
  });

  it("pays a day’s wage for plain labour once, and no more", () => {
    const id = "pr_earth_forging";
    const open = at(`${id}_sn`, hero({ dao: "none" }), { realm: 2, ...strong, wealth: 0 });
    const paid = choose(story, open, "labour");
    expect(paid.wealth).toBeGreaterThan(0);
    const returned = { ...paid, sceneId: `${id}_sn` };
    expect(view(returned, "labour")!.available).toBe(false);
  });

  it("hides a locked door from the hero it is not for, and counts only the choices every hero sees toward the four a scene needs", () => {
    const door = SPECS7[0];
    const scene = getScene(story, `${door.id}_a0s2`);
    expect(scene.choices.filter((c) => c.hideLocked).length).toBe(3);
    expect(scene.choices.filter((c) => !c.hideLocked).length).toBeGreaterThanOrEqual(4);
    const shown = getChoices(scene, at(scene.id, MAN)).map((v) => v.choice.id);
    expect(shown).toContain("door_gm");
    expect(shown).not.toContain("door_gw");
    expect(shown).not.toContain("door_gu");
    // A door is taken once.
    const done = choose(story, at(scene.id, MAN, { realm: 1, ...strong }), "door_gm");
    const again = choose(story, { ...done, sceneId: `${door.id}_gm` }, "brothers");
    expect(again.flags[forkFlag("gender", door.id)]).toBe(true);
    expect(getChoices(scene, { ...again, sceneId: scene.id }).map((v) => v.choice.id)).not.toContain("door_gm");
    const flawed = { ...story, scenes: { ...story.scenes, bad: { ...scene, id: "bad", choices: scene.choices.filter((c) => c.hideLocked) } } };
    expect(validateStory(flawed).some((p) => p.includes('"bad"'))).toBe(true);
  });

  it("brings the hero back to the scene after the one they left, whichever door they took", () => {
    for (const s of SPECS7) {
      for (const [suffix, back] of [["gw", "a0s3"], ["gm", "a0s3"], ["gu", "a0s3"], ["rk", "a1s3"], ["rp", "a1s3"], ["rf", "a1s3"], ["so", "a2s3"], ["sx", "a2s3"], ["sn", "a2s3"]] as const) {
        for (const c of getScene(story, `${s.id}_${suffix}`).choices) expect(c.next, `${s.id}_${suffix}:${c.id}`).toBe(`${s.id}_${back}`);
      }
    }
  });
});

describe("the Elder answers at once", () => {
  it("answers each door on each road with five lines by her trust, and none the same as another road’s", () => {
    const seen = new Map<string, string>();
    for (const s of SPECS7) {
      for (const fork of ["gender", "root", "skill"] as const) {
        const sc = crossingScenarios[forkScenarioId(fork, s.id)];
        expect(sc, `${s.id} ${fork}`).toBeDefined();
        expect(new Set(Object.values(sc.lines)).size, `${s.id} ${fork}`).toBe(5);
        for (const line of [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]) {
          expect(seen.get(line), `${sc.id}: ${line}`).toBeUndefined();
          seen.set(line, sc.id);
        }
      }
    }
  });

  it("makes every pick behind a door draw her answer, and moves what she feels", () => {
    const s = spec("pr_metal_formation");
    const R = waysideOf(s.id).realm;
    const state = at(`${s.id}_gw`, WOMAN, { realm: R, ...strong });
    const reply = choose(story, state, "sisters");
    expect(reply.history.at(-1)).toBe(forkScenarioId("gender", s.id));
    expect(reply.npc.respect).toBeGreaterThan(state.npc.respect);
    const root = choose(story, at(`${s.id}_rf`, hero({ talent: "water" }), { realm: R, ...strong }), "study");
    expect(root.history.at(-1)).toBe(forkScenarioId("root", s.id));
    const craft = choose(story, at(`${s.id}_so`, hero({ dao: "formation" }), { realm: R, ...strong }), "watch");
    expect(craft.history.at(-1)).toBe(forkScenarioId("skill", s.id));
  });

  it("remembers who the hero is and what they chose: a woman who walks the barred door, a man who declines the yard, a kindred root, a colleague", () => {
    const s = spec("pr_earth_sword");
    const R = waysideOf(s.id).realm;
    const reply = (state: GameState, pick: string) => {
      const out = choose(story, state, pick);
      return out.log.filter((e) => e.kind === "npc").map((e) => e.text).join(" ");
    };
    const barred = reply(at(`${s.id}_gw`, WOMAN, { realm: R, ...strong }), "barred");
    const yielded = reply(at(`${s.id}_gm`, MAN, { realm: R, ...strong }), "yield");
    expect(barred).not.toBe(yielded);
    expect(barred).toMatch(/bars to women|rule at/);
    expect(yielded).toMatch(/declined to prove|put down the challenge/);
    const kin = reply(at(`${s.id}_rk`, hero({ talent: "earth" }), { realm: R, ...strong }), "listen");
    expect(kin).toMatch(/kindred|own element|own root/);
    const colleague = reply(at(`${s.id}_so`, hero({ dao: "sword" }), { realm: R, ...strong }), "watch");
    expect(colleague).toMatch(/keeper’s own Dao|same Dao/);
  });

  it("reads each door at the report, ahead of the rest", () => {
    const s = spec("pr_water_sword");
    const sc = crossingScenarios[`REPORT_FORTUNE_${s.id.toUpperCase()}`];
    const first = sc.memory!.slice(0, 3);
    for (const m of first) expect(m.when[0].kind).toBe("flag");
    expect(first.map((m) => (m.when[0] as { flag: string }).flag)).toEqual([forkFlag("skill", s.id), forkFlag("root", s.id), forkFlag("gender", s.id)]);
  });
});

describe("what the roads leave in the hero’s story", () => {
  const remarks = story.remarks!.filter((r) => r.id.includes("cx_"));
  it("has remarks that read the doors, the picks and the elements, by gender, root and craft", () => {
    expect(remarks.length).toBeGreaterThanOrEqual(65);
    const text = crossingRemarksSource;
    for (const g of ["woman", "man", "unspoken"]) expect(text).toContain(`hero:gender=${g}`);
    for (const t of TALENTS) expect(text, t.value).toContain(`hero:talent=${t.value}`);
    for (const d of DAOS) expect(text, d.value).toContain(`hero:dao=${d.value}`);
    expect(text).toContain("count:pr_attuned>=");
  });

  it("reads every pick flag some road can set, so no choice leaves nothing behind", () => {
    const picks = new Set<string>();
    for (const s of scenes) for (const c of s.choices) for (const e of c.effects ?? []) if (e.kind === "setFlag" && e.flag.startsWith("pr_pick_")) picks.add(e.flag.replace(/_pr_[a-z]+_[a-z]+$/, "_"));
    expect(picks.size).toBeGreaterThanOrEqual(28);
    for (const prefix of picks) expect(crossingRemarksSource, prefix).toContain(`count:${prefix}`);
    expect(pickPrefix("gender", "ask")).toBe("pr_pick_g_ask_");
    expect(pickFlag("skill", "pr_x", "ask")).not.toBe(pickFlag("gender", "pr_x", "ask"));
  });

  it("says the first remark on gender to the gender it is for", () => {
    const by = (g: string) => remarks.filter((r) => r.when.some((c) => c.kind === "hero" && c.field === "gender" && c.is?.includes(g)));
    for (const g of ["woman", "man", "unspoken"]) expect(by(g).length, g).toBeGreaterThanOrEqual(3);
    const woman = at("gate", WOMAN, { flags: { [forkFlag("gender", "pr_a")]: true }, remarked: [] });
    const first = remarks.find((r) => r.id === "su_cx_woman_1")!;
    expect(conditionsHold(first.when, woman)).toBe(true);
    expect(conditionsHold(first.when, { ...woman, hero: MAN })).toBe(false);
  });

  it("makes the Elder’s accounts read the hero’s craft, roots and gender", () => {
    const accounts = ["reckoning_departure", "reckoning_coast", "reckoning_grass", "reckoning_glass", "reckoning_home"];
    const fields = ["dao", "talent", "gender", "dao", "talent"];
    accounts.forEach((id, n) => {
      const scene = getScene(story, id);
      const extras = (scene.extras ?? []).filter((x) => x.group === "path");
      expect(extras.length, id).toBe({ dao: 9, talent: 8, gender: 3 }[fields[n] as "dao"]);
      expect(sceneBodyWords(scene), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(extras.every((x) => x.when[0].kind === "hero" && (x.when[0] as { field: string }).field === fields[n]), id).toBe(true);
    });
    const shown = (h: Hero) => enterScene(story, { ...at("gate", h), log: [] }, getScene(story, "reckoning_grass")).log.map((e) => e.text).join(" ");
    expect(new Set([shown(WOMAN), shown(MAN), shown(UNSPOKEN)]).size).toBe(3);
  });

  it("counts a road done under its own flag, apart from the Fortune, Dao, Witness and Cultivation Roads", () => {
    const back = scenes.find((s) => s.id === "pr_wood_alchemy_return")!;
    const flags = back.choices.flatMap((c) => (c.effects ?? []).flatMap((e) => (e.kind === "setFlag" ? [e.flag] : [])));
    expect(flags).toContain(pathDoneFlag(1, "pr_wood_alchemy"));
    expect(flags.filter((f) => /^(fr|wr|cr)_done_/.test(f))).toEqual([]);
  });

  it("summarises what a hero has done on the crossings from the flags", () => {
    const flags = { [forkFlag("gender", "a")]: true, [forkFlag("gender", "b")]: true, [forkFlag("root", "a")]: true, [pathDoneFlag(1, "a")]: true, [attuneFlag("wood", 2)]: true, [attuneFlag("metal", 1)]: true };
    expect(crossingSummary(flags)).toEqual({ roads: 1, benches: 2, roots: 1, crafts: 0, attuned: [{ element: "wood", level: 2 }, { element: "metal", level: 1 }] });
    expect(parseConditions("hero:gender=woman & count:pr_fork_g_>=3", "test")).toHaveLength(2);
  });

  it("closes the hub on the Elder’s remark once all four roads are done, and not before", () => {
    const w = WAYSIDES7[0];
    const hub = getScene(story, w.id);
    const one = at(w.id, DEFAULT_HERO, { flags: { [pathDoneFlag(1, SPECS7[0].id)]: true } });
    const all = at(w.id, DEFAULT_HERO, { flags: Object.fromEntries(SPECS7.slice(0, 4).map((s) => [pathDoneFlag(1, s.id), true])) });
    const said = (st: GameState) => hub.interjections!.filter((x) => conditionsHold(x.when, st)).map((x) => x.line);
    expect(said(one)).not.toContain(w.remark);
    expect(said(all)).toContain(w.remark);
  });
});

describe("walking every Crossing Road", () => {
  const heroes: Hero[] = [
    hero({ gender: "woman", talent: "wood", dao: "alchemy" }),
    hero({ gender: "man", talent: "fire", dao: "sword" }),
    hero({ gender: "unspoken", talent: "mixed", dao: "none" }),
    hero({ gender: "woman", talent: "water", dao: "fate" }),
    hero({ gender: "man", talent: "heaven", dao: "healing" }),
    hero({ gender: "unspoken", talent: "late", dao: "beast" }),
  ];
  it("lets a hero of each gender, root and craft walk every approach, take each door they are shown and leave by every way back", () => {
    for (const s of SPECS7) {
      const w = waysideOf(s.id);
      for (const h of heroes) {
        const start = entryOf(s.id, h, { cultivation: REALMS[w.realm].threshold + 5 });
        for (let a = 0; a < 4; a++) {
          let g: GameState = choose(story, start, `approach_${a}`);
          for (let step = 0; step < 6 && !g.sceneId.endsWith("_return"); step++) {
            const doors = getChoices(getScene(story, g.sceneId), g).filter((v) => v.available && v.choice.id.startsWith("door_"));
            if (doors.length) {
              expect(doors, `${s.id} ${h.gender}`).toHaveLength(1);
              let d = choose(story, g, doors[0].choice.id);
              const picks = getChoices(getScene(story, d.sceneId), d).filter((v) => v.available);
              expect(picks.length, d.sceneId).toBeGreaterThanOrEqual(2);
              d = choose(story, d, picks[0].choice.id);
              g = d;
              continue;
            }
            g = choose(story, g, getChoices(getScene(story, g.sceneId), g).find((v) => v.available)!.choice.id);
          }
          expect(g.sceneId, `${s.id} approach ${a}`).toBe(`${s.id}_return`);
          for (const c of getScene(story, g.sceneId).choices) expect(story.scenes[c.next], `${s.id}:${c.id}`).toBeDefined();
        }
      }
    }
  });

  it("keeps the numbers sound after a hero walks all three doors of every road", () => {
    for (const h of heroes) {
      let g: GameState = at("gate", h, { realm: 3, cultivation: REALMS[3].threshold + 5, ...strong });
      for (const s of SPECS7) {
        for (const [a, door] of [[0, "door_g"], [1, "door_r"], [2, "door_s"]] as const) {
          let state = { ...g, sceneId: `${s.id}_a${a}s2` };
          const open = getChoices(getScene(story, state.sceneId), state).find((v) => v.available && v.choice.id.startsWith(door));
          expect(open, `${s.id} ${h.gender}`).toBeDefined();
          state = choose(story, state, open!.choice.id);
          const pick = getChoices(getScene(story, state.sceneId), state).find((v) => v.available)!;
          g = { ...choose(story, state, pick.choice.id), wealth: 400, stats: { qi: 60, karma: 0, insight: 60 } };
        }
      }
      expect(g.stats.qi).toBeLessThanOrEqual(100);
      expect(g.speed).toBeLessThanOrEqual(250);
      expect(attunements(g.flags).every((a) => ELEMENTS.includes(a.element as Element))).toBe(true);
    }
  });

  it("exposes the slots a line can use, all filled", () => {
    for (const s of SPECS7) expect(Object.values(slotsOf(s, s.focus[0])).every((v) => v.length > 0), s.id).toBe(true);
  });
});
