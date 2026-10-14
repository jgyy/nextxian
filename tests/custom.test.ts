import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { DEFAULT_HERO, GENDERS, type Gender, type Hero } from "@/engine/hero";
import { CUSTOM_WAYS, customLean, customSummary, type CustomWay } from "@/engine/custom";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { BACK9, customAssets, customEntrances, customGroups, customItems, customScenarios, CUSTOMS, SPECS9, WAYSIDES9 } from "@/story/custom";
import { argueInsight, clashFlag, doorFlag, doorSceneId, doorScenarioId, easeFlag, pickDef, pickFlag, slotsOf, synthesize, WAY_TONE } from "@/story/custom/build";
import { PICK_LABEL, STANCE_DOOR } from "@/story/custom/lexicon-door";
import { STANCES, stanceGender, stanceHolds } from "@/story/custom/lexicon-custom";
import { STANCE_BEATS, STANCE_DEEP } from "@/story/custom/lexicon-stance";
import { GLANCE, GREET, SENDOFF } from "@/story/custom/lexicon-read";
import { TURNS, turnFlag, turnScenarioId } from "@/story/custom/main";
import { crossingEntrances } from "@/story/crossing";
import { ageEntrances } from "@/story/age";
import { cultivationEntrances } from "@/story/cultivation";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = customGroups.flatMap((g) => g.scenes);
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);
const ids = (state: GameState) => getChoices(getScene(story, state.sceneId), state).map((v) => v.choice.id);
/** A hero rich enough in qi, insight and wealth to take any pick that is not about who they are. */
const strong = { stats: { qi: 60, karma: 0, insight: 60 }, wealth: 400, decisions: 12 };
const spec = (id: string) => SPECS9.find((s) => s.id === id)!;
const waysideOf = (id: string) => WAYSIDES9[Math.floor(SPECS9.findIndex((s) => s.id === id) / 4)];
const standing = (id: string, a: number, h: Hero, patch: Partial<GameState> = {}) => at(`${id}_a${a}s2`, h, { realm: waysideOf(id).realm, ...strong, ...patch });
const GENDER_VALUES: Gender[] = ["woman", "man", "unspoken"];
const WOMAN = hero({ gender: "woman" });
const MAN = hero({ gender: "man" });
const UNSPOKEN = hero({ gender: "unspoken" });
const reply = (state: GameState, pick: string) => {
  const out = choose(story, state, pick);
  return out.log.filter((e) => e.kind === "npc").map((e) => e.text).join(" ");
};

describe("the Custom Roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of thirty-seven scenes, and the hubs and ways back", () => {
    expect(WAYSIDES9).toHaveLength(10);
    expect(customGroups).toHaveLength(10);
    expect(SPECS9).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(40 * 37);
    expect(scenes.length + customGroups.length).toBeGreaterThanOrEqual(1490);
    expect(chapters.filter((c) => c.name.startsWith("Custom Roads:"))).toHaveLength(10);
    expect(Object.keys(customEntrances)).toHaveLength(10);
  });

  it("opens each wayside from a scene no earlier wave opens from, once, and asks a realm that never falls", () => {
    const earlier = new Set([...Object.keys(waysideEntrances), ...Object.keys(realmEntrances), ...Object.keys(fortuneEntrances), ...Object.keys(daoEntrances), ...Object.keys(witnessEntrances), ...Object.keys(cultivationEntrances), ...Object.keys(crossingEntrances), ...Object.keys(ageEntrances)]);
    for (const origin of Object.keys(customEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_custom_")), origin).toHaveLength(1);
      expect(story.scenes[BACK9(origin)], origin).toBeDefined();
    }
    const realms = WAYSIDES9.map((w) => w.realm);
    expect(realms).toEqual([...realms].sort((a, b) => a - b));
    expect(realms[0]).toBe(0);
    expect(realms.at(-1)).toBe(5);
  });

  it("sets every custom beside a keeper who holds it and a keeper who bends it, a woman and a man of each, once", () => {
    expect(new Set(SPECS9.map((s) => `${s.custom}/${s.stance}`)).size).toBe(40);
    expect(new Set(CUSTOMS)).toEqual(new Set(SPECS9.map((s) => s.custom)));
    WAYSIDES9.forEach((w, n) => {
      const here = SPECS9.slice(n * 4, n * 4 + 4);
      expect(new Set(here.map((s) => s.custom)), w.id).toEqual(new Set([w.custom]));
      expect(here.map((s) => s.stance), w.id).toEqual([...STANCES]);
      for (const s of here) expect(s.id, w.id).toBe(`cs_${w.custom}_${{ woman_holds: "wh", man_holds: "mh", woman_bends: "wb", man_bends: "mb" }[s.stance]}`);
    });
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes, a way back and twelve scenes behind its four doors, each within the word cap", () => {
    for (const s of SPECS9) {
      const own = scenes.filter((x) => x.id.startsWith(`${s.id}_`));
      expect(own, s.id).toHaveLength(37);
      for (const x of own) {
        expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(x.choices.filter((c) => !c.hideLocked).length, x.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(x), x.id).not.toMatch(/\{\w+\}/);
        expect(x.title.startsWith("Custom Road:") || x.title.startsWith(s.title), x.id).toBe(true);
      }
    }
    for (const x of scenes.filter((y) => y.id.startsWith("wayside_"))) expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("sells one good and leases one holding on every road, with exactly one breakthrough pill on each wayside, for the realm after the road’s", () => {
    expect(Object.keys(customItems)).toHaveLength(40);
    expect(Object.keys(customAssets)).toHaveLength(40);
    WAYSIDES9.forEach((w, n) => {
      const pills = SPECS9.slice(n * 4, n * 4 + 4).filter((s) => s.ware.kind === "pill");
      expect(pills, w.id).toHaveLength(1);
      const next = Math.min(w.realm + 1, REALMS.length - 1);
      expect(story.items![`${pills[0].id}_ware`].aid, w.id).toBe(next);
      expect(pills[0].ware.blurb, w.id).toContain(REALMS[next].name);
    });
    for (const s of SPECS9) {
      expect(s.ware.name, s.id).not.toContain(s.kname);
      expect(s.holding.name, s.id).not.toContain(s.kname);
      const asset = story.assets![`${s.id}_hold`];
      expect(asset.income, s.id).toBeGreaterThan(asset.upkeep);
      expect(s.ware.name, s.id).not.toMatch(/^(The|A|An) /);
      expect(s.holding.name, s.id).not.toMatch(/^(The|A|An) /);
    }
  });

  it("writes each road in its own words: every keeper, road, place, good and holding is different, and no keeper has a name already in the story", () => {
    for (const key of ["kname", "id", "place", "title"] as const) expect(new Set(SPECS9.map((s) => s[key])).size, key).toBe(40);
    expect(new Set(SPECS9.map((s) => s.ware.name)).size).toBe(40);
    expect(new Set(SPECS9.map((s) => s.holding.name)).size).toBe(40);
    const own = SPECS9.flatMap((s) => [...s.openers, s.intro, s.close, s.secret]);
    expect(new Set(own).size).toBe(own.length);
    const synthesised = SPECS9.flatMap((s) => {
      const r = synthesize(s);
      return [...r.beats.flat(), ...r.deep];
    });
    expect(new Set(synthesised).size, "no beat of any road is another’s word for word").toBe(synthesised.length);
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(customScenarios)]);
    const outside = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).filter((r) => !r.id.startsWith("cs_") && !r.id.startsWith("su_cs_")).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    expect(SPECS9.filter((s) => new RegExp(`\\b${s.kname}\\b`).test(outside) || companions.has(s.kname)).map((s) => s.kname)).toEqual([]);
  });

  it("keeps to the canon of the places: the steppe is not a place of these customs, and the roads of the road never say the Law Hall or the sect gate", () => {
    for (const s of SPECS9) {
      const own = [s.intro, ...s.openers, s.close, s.secret];
      for (const t of own) expect(t, s.id).not.toMatch(/\bsteppe\b|\bkurultai\b/i);
      if (WAYSIDES9[Math.floor(SPECS9.indexOf(s) / 4)].flavour === "road") for (const t of own) expect(t, s.id).not.toMatch(/Law Hall|sect gate/);
    }
    for (const w of WAYSIDES9.slice(5)) expect([w.title, ...w.paragraphs, w.back, w.label].join(" "), w.id).not.toMatch(/sect gate/);
    // The hero who comes in at the House of Gentle Hands finds a sinister foundation; the physic-house of the hands road is not that.
    for (const s of SPECS9) expect([s.title, s.place, s.intro, ...s.openers].join(" "), s.id).not.toMatch(/House of Gentle Hands/);
  });

  it("does not clone a passage from road to road: no twelve-word phrase of a road’s own text in more than two roads, and none of its custom’s or stance’s in more roads than share them", () => {
    const grams = (n: number, limit: number, texts: (s: (typeof SPECS9)[number]) => string[]) => {
      const found = new Map<string, Set<string>>();
      for (const s of SPECS9) {
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
    // The long middle of a road is a beat of its custom (shared by four roads) and a beat of its stance (shared by ten), so a phrase may be said in up to ten roads.
    expect(grams(12, 10, (s) => synthesize(s).beats.flat())).toEqual([]);
  });
});

describe("the door of custom", () => {
  it("shows the door to the gender it is for in every approach, and to no one else", () => {
    const id = "cs_lineage_wh";
    for (let a = 0; a < 4; a++) {
      for (const g of GENDERS) {
        const state = standing(id, a, hero({ gender: g.value }));
        const shown = ids(state).filter((x) => x.startsWith("door_"));
        expect(shown, `${g.value} approach ${a}`).toEqual([`door_${g.value[0] === "u" ? "u" : g.value[0]}`]);
      }
    }
  });

  it("opens a different scene to a woman, a man and someone who gives no answer, each in its own words and with the same four picks", () => {
    for (const s of SPECS9) {
      for (let a = 0; a < 4; a++) {
        const texts = new Set<string>();
        for (const g of GENDER_VALUES) {
          const state = standing(s.id, a, hero({ gender: g }));
          const next = choose(story, state, `door_${g[0]}`);
          expect(next.sceneId, `${s.id} ${g}`).toBe(doorSceneId(s.id, a, g));
          expect(getChoices(getScene(story, next.sceneId), next).map((v) => v.choice.id), `${s.id} ${g}`).toEqual(CUSTOM_WAYS);
          texts.add(getScene(story, next.sceneId).paragraphs.join(" "));
        }
        expect(texts.size, `${s.id} approach ${a}`).toBe(3);
      }
    }
  });

  it("makes the custom the road’s own: ten customs give ten different scenes to a woman, a man and the unspoken, and the four keepers read the hero four ways", () => {
    for (const g of GENDER_VALUES) {
      const bodies = SPECS9.map((s) => getScene(story, doorSceneId(s.id, 0, g)).paragraphs.join(" "));
      expect(new Set(bodies).size, g).toBe(40);
      const customs = WAYSIDES9.map((_, n) => getScene(story, doorSceneId(SPECS9[n * 4].id, 0, g)).paragraphs[0]);
      expect(new Set(customs).size, g).toBe(10);
    }
    const word = (id: string, g: Gender) => getScene(story, doorSceneId(id, 0, g)).paragraphs[1];
    const stances = ["cs_lineage_wh", "cs_lineage_mh", "cs_lineage_wb", "cs_lineage_mb"].flatMap((id) => GENDER_VALUES.map((g) => word(id, g)));
    expect(new Set(stances).size).toBe(12);
    const all = (id: string, g: Gender) => [0, 1, 2, 3].map((a) => getScene(story, doorSceneId(id, a, g)).paragraphs[1]).join(" ");
    expect(all("cs_lineage_wh", "man")).toMatch(/\bshe\b|\bher\b/i);
    expect(all("cs_lineage_mh", "woman")).toMatch(/\bhe\b|\bhis\b|\bhim\b/i);
  });

  it("charges for a door that custom closes: a woman must argue the barred door open, a man must pay in qi to turn down his place, and the unspoken must have qi to stay in the middle", () => {
    const id = "cs_arms_wh";
    const R = waysideOf(id).realm;
    const woman = at(doorSceneId(id, 0, "woman"), WOMAN, { realm: R, stats: { qi: 60, karma: 0, insight: 5 } });
    expect(view(woman, "break")!.available).toBe(false);
    expect(view(woman, "break")!.hint).toContain(`Insight ${argueInsight(R, 8)}`);
    const arguer = at(doorSceneId(id, 0, "woman"), WOMAN, { realm: R, stats: { qi: 0, karma: 0, insight: argueInsight(R, 8) } });
    expect(view(arguer, "break")!.available).toBe(true);
    expect(view(arguer, "keep")!.available).toBe(true);
    const weak = at(doorSceneId(id, 0, "man"), MAN, { realm: R, stats: { qi: 5, karma: 0, insight: 60 } });
    expect(view(weak, "break")!.available).toBe(false);
    const tired = choose(story, at(doorSceneId(id, 0, "man"), MAN, { realm: R, stats: { qi: 20, karma: 0, insight: 0 } }), "break");
    expect(tired.stats.qi).toBeLessThan(20);
    const dishonoured = at(doorSceneId(id, 0, "man"), MAN, { realm: R, stats: { qi: 60, karma: -20, insight: 60 } });
    expect(view(dishonoured, "stand")!.available).toBe(false);
    expect(view(dishonoured, "stand")!.hint).toContain("clean");
    const unsure = at(doorSceneId(id, 0, "unspoken"), UNSPOKEN, { realm: R, stats: { qi: 3, karma: 0, insight: 60 } });
    expect(view(unsure, "break")!.available).toBe(false);
    expect(view(unsure, "bend")!.available).toBe(true);
    expect(pickDef("woman", "break", 2, true).requires).toBeDefined();
  });

  it("gives each gender its own tones, four different ones in a scene, and a label for every pick in three wordings", () => {
    for (const g of GENDER_VALUES) {
      expect(new Set(CUSTOM_WAYS.map((w) => WAY_TONE[g][w])).size, g).toBe(4);
      for (const w of CUSTOM_WAYS) expect(new Set(PICK_LABEL[g][w]).size, `${g} ${w}`).toBe(3);
    }
    for (const s of SPECS9) for (const g of GENDER_VALUES) expect(new Set(getScene(story, doorSceneId(s.id, 1, g)).choices.map((c) => c.tone)).size, `${s.id} ${g}`).toBe(4);
  });

  it("sets the door and the pick, presses a custom only before a keeper who holds it, and keeps it easy only before one who bends it", () => {
    const holder = spec("cs_mats_wh");
    const bender = spec("cs_mats_wb");
    expect([stanceHolds(holder.stance), stanceHolds(bender.stance)]).toEqual([true, false]);
    const R = waysideOf(holder.id).realm;
    const press = choose(story, at(doorSceneId(holder.id, 0, "woman"), WOMAN, { realm: R, ...strong }), "bend");
    expect(press.flags[doorFlag(holder.id)]).toBe(true);
    expect(press.flags[pickFlag("bend", holder.id)]).toBe(true);
    expect(press.flags[clashFlag(holder.id)]).toBe(true);
    const calm = choose(story, at(doorSceneId(holder.id, 0, "woman"), WOMAN, { realm: R, ...strong }), "keep");
    expect(calm.flags[clashFlag(holder.id)]).toBeUndefined();
    expect(calm.flags[easeFlag(holder.id)]).toBeUndefined();
    const ease = choose(story, at(doorSceneId(bender.id, 0, "man"), MAN, { realm: R, ...strong }), "keep");
    expect(ease.flags[easeFlag(bender.id)]).toBe(true);
    const free = choose(story, at(doorSceneId(bender.id, 0, "man"), MAN, { realm: R, ...strong }), "break");
    expect(free.flags[clashFlag(bender.id)]).toBeUndefined();
    // A keeper who bends teaches whoever breaks, and one who holds is pleased to be kept.
    const baseline = at(doorSceneId(holder.id, 0, "woman"), WOMAN, { realm: R, ...strong });
    expect(choose(story, baseline, "keep").stats.karma).toBeGreaterThan(baseline.stats.karma);
    expect(pickDef("woman", "break", R, false).effects.length).toBe(pickDef("woman", "break", R, true).effects.length + 1);
  });

  it("brings the hero back to the scene after the one they left, whichever door they took", () => {
    for (const s of SPECS9) {
      for (let a = 0; a < 4; a++) for (const g of GENDER_VALUES) for (const c of getScene(story, doorSceneId(s.id, a, g)).choices) expect(c.next, `${s.id} ${a} ${g}:${c.id}`).toBe(`${s.id}_a${a}s3`);
    }
  });

  it("hides a locked door from the hero it is not for, and takes it once", () => {
    const s = SPECS9[0];
    const scene = getScene(story, `${s.id}_a0s2`);
    expect(scene.choices.filter((c) => c.hideLocked).length).toBe(3);
    expect(scene.choices.filter((c) => !c.hideLocked).length).toBeGreaterThanOrEqual(4);
    const shown = getChoices(scene, at(scene.id, MAN)).map((v) => v.choice.id);
    expect(shown).toContain("door_m");
    expect(shown).not.toContain("door_w");
    expect(shown).not.toContain("door_u");
    const done = choose(story, at(scene.id, MAN, { realm: 1, ...strong }), "door_m");
    const again = choose(story, done, "keep");
    expect(again.flags[doorFlag(s.id)]).toBe(true);
    expect(getChoices(getScene(story, `${s.id}_a1s2`), { ...again, sceneId: `${s.id}_a1s2` }).map((v) => v.choice.id)).not.toContain("door_m");
  });
});

describe("a keeper who reads the hero", () => {
  it("greets a woman, a man and someone who gives no answer in three different ways at the entry, in every approach and at the goodbye", () => {
    for (const s of SPECS9) {
      const shown = (suffix: string, g: Gender) => enterScene(story, { ...at(`${s.id}_${suffix}`, hero({ gender: g }), { realm: waysideOf(s.id).realm }), log: [] }, getScene(story, `${s.id}_${suffix}`)).log.map((e) => e.text).join(" ");
      for (const suffix of ["entry", "a0s0", "a1s1", "a2s2", "a3s3", "a0s4"]) {
        expect(new Set(GENDER_VALUES.map((g) => shown(suffix, g))).size, `${s.id} ${suffix}`).toBe(3);
      }
    }
  });

  it("speaks of the keeper as she or he by the keeper’s own gender, outside what anyone says aloud, in every line the stances write", () => {
    const lines = (stance: (typeof STANCES)[number]): string[] => [
      ...STANCE_BEATS[stance],
      ...STANCE_DEEP[stance],
      ...GENDER_VALUES.flatMap((g) => [...STANCE_DOOR[stance][g], GLANCE[stance][g], ...GREET[stance][g], ...SENDOFF[stance][g]]),
    ];
    const aloud = /“[^”]*”/g;
    for (const stance of STANCES) {
      const wrong = stanceGender(stance) === "woman" ? /\b(he|his|him|himself)\b/ : /\b(she|her|hers|herself)\b/;
      for (const line of lines(stance)) expect(line.replace(aloud, ""), `${stance}: ${line.slice(0, 50)}`).not.toMatch(wrong);
    }
  });

  it("reads what the hero did on earlier roads: a keeper who holds says one thing to a hero who breaks the rule and a keeper who bends says another", () => {
    const flags = (way: CustomWay) => ({ [pickFlag(way, "cs_x1")]: true, [pickFlag(way, "cs_x2")]: true });
    const word = (id: string, way: CustomWay) => enterScene(story, { ...at(`${id}_a1s4`, WOMAN, { flags: flags(way), realm: 3 }), log: [] }, getScene(story, `${id}_a1s4`)).log.map((e) => e.text).join(" ");
    expect(word("cs_ledgers_wh", "break")).toContain("break the rule in front of people");
    expect(word("cs_ledgers_wb", "break")).toContain("waited years");
    expect(word("cs_ledgers_wh", "break")).not.toBe(word("cs_ledgers_wb", "break"));
    expect(word("cs_ledgers_wh", "keep")).not.toBe(word("cs_ledgers_wh", "stand"));
  });

  it("says a parting word for what the hero did behind the door, by whether the keeper holds the custom", () => {
    const id = "cs_hands_mh";
    const R = waysideOf(id).realm;
    const after = (way: CustomWay) => {
      const done = choose(story, at(doorSceneId(id, 0, "man"), MAN, { realm: R, ...strong }), way);
      return enterScene(story, { ...done, sceneId: `${id}_a0s4`, log: [] }, getScene(story, `${id}_a0s4`)).log.map((e) => e.text).join(" ");
    };
    expect(new Set(CUSTOM_WAYS.map(after)).size).toBe(4);
  });
});

describe("the Elder answers at once", () => {
  it("answers every pick on every road with five lines by her trust, naming the place, and none the same as another road’s or another gender’s", () => {
    const seen = new Map<string, string>();
    let count = 0;
    for (const s of SPECS9) {
      for (const g of GENDER_VALUES) {
        for (const w of CUSTOM_WAYS) {
          const sc = customScenarios[doorScenarioId(s.id, g, w)];
          expect(sc, `${s.id} ${g} ${w}`).toBeDefined();
          expect(new Set(Object.values(sc.lines)).size, `${s.id} ${g} ${w}`).toBe(5);
          for (const line of Object.values(sc.lines)) {
            expect(line, sc.id).toMatch(new RegExp(`${s.place.replace(/^the /, "")}|${s.kname}`));
            expect(seen.get(line), `${sc.id}: ${line}`).toBeUndefined();
            seen.set(line, sc.id);
            count++;
          }
        }
      }
    }
    expect(count).toBe(40 * 12 * 5);
  });

  it("makes every pick behind a door draw the answer for who the hero is and what they did, and moves what she feels", () => {
    const s = spec("cs_council_mh");
    const R = waysideOf(s.id).realm;
    const state = at(doorSceneId(s.id, 0, "woman"), WOMAN, { realm: R, ...strong });
    const out = choose(story, state, "stand");
    expect(out.history.at(-1)).toBe(doorScenarioId(s.id, "woman", "stand"));
    expect(out.npc.respect).toBeGreaterThan(state.npc.respect);
    const lines = new Set<string>();
    for (const g of GENDER_VALUES) for (const w of CUSTOM_WAYS) lines.add(reply(at(doorSceneId(s.id, 0, g), hero({ gender: g }), { realm: R, ...strong }), w));
    expect(lines.size).toBe(12);
  });

  it("answers the same pick differently as her trust changes", () => {
    const s = spec("cs_names_mb");
    const R = waysideOf(s.id).realm;
    const lines = new Set<string>();
    for (const trust of [-60, -20, 0, 30, 70]) {
      const state = at(doorSceneId(s.id, 2, "unspoken"), UNSPOKEN, { realm: R, ...strong, npc: { trust, respect: 0, fear: 10, suspicion: 30 } });
      lines.add(reply(state, "bend"));
    }
    expect(lines.size).toBe(5);
  });

  it("reads a custom pressed before a keeper who holds it, and one kept before a keeper who bends it, at the report", () => {
    const holder = customScenarios["REPORT_FORTUNE_CS_MOURNING_WH"];
    const bender = customScenarios["REPORT_FORTUNE_CS_MOURNING_WB"];
    expect((holder.memory![0].when[0] as { flag: string }).flag).toBe(clashFlag("cs_mourning_wh"));
    expect((bender.memory![0].when[0] as { flag: string }).flag).toBe(easeFlag("cs_mourning_wb"));
    expect((holder.memory![1].when[0] as { flag: string }).flag).toBe(doorFlag("cs_mourning_wh"));
    const none = holder.memory!.filter((m) => m.when.some((c) => c.kind === "flag" && c.flag.startsWith("cs_ease_")));
    expect(none).toEqual([]);
  });
});

describe("gender in the main line", () => {
  it("offers seven turning points, each with a way for a woman, a man and someone who gives no answer, hidden from the others", () => {
    expect(TURNS).toHaveLength(7);
    for (const t of TURNS) {
      const scene = story.scenes[t.id];
      expect(scene, t.id).toBeDefined();
      expect(new Set(Object.values(t.labels)).size, t.id).toBe(3);
      for (const g of GENDER_VALUES) {
        const shown = ids(at(t.id, hero({ gender: g }))).filter((x) => x.startsWith("custom_"));
        expect(shown, `${t.id} ${g}`).toEqual([`custom_${g}`]);
      }
      expect(scene.choices.filter((c) => c.id.startsWith("custom_")).every((c) => c.hideLocked)).toBe(true);
    }
  });

  it("answers each at once in the Elder’s words for that gender and that room, and counts it", () => {
    const lines = new Set<string>();
    for (const t of TURNS) {
      for (const g of GENDER_VALUES) {
        const state = at(t.id, hero({ gender: g }), { realm: 6, ...strong });
        const out = choose(story, state, `custom_${g}`);
        expect(out.flags[turnFlag(g, t.id)], `${t.id} ${g}`).toBe(true);
        expect(out.history.at(-1)).toBe(turnScenarioId(g, t.id));
        lines.add(out.log.filter((e) => e.kind === "npc").map((e) => e.text).join(" "));
        // It is taken once.
        expect(view({ ...out, sceneId: t.id }, `custom_${g}`)?.available ?? false, `${t.id} ${g}`).toBe(false);
      }
    }
    expect(lines.size).toBe(21);
    expect(customSummary(Object.fromEntries(TURNS.map((t) => [turnFlag("woman", t.id), true]))).turns).toBe(7);
  });

  it("reads the hero’s gender and the way they took the customs at the last choice of the story", () => {
    const base = at("lastseal_choice", WOMAN);
    const body = (h: Hero, flags: Record<string, boolean> = {}) => enterScene(story, { ...base, hero: h, flags, log: [] }, getScene(story, "lastseal_choice")).log.map((e) => e.text).join(" ");
    expect(new Set(GENDER_VALUES.map((g) => body(hero({ gender: g })))).size).toBe(3);
    const broke = { cs_pick_break_a: true, cs_pick_break_b: true, cs_pick_break_c: true };
    expect(body(WOMAN, broke)).toContain("crack in a wall");
    expect(body(WOMAN, { cs_pick_stand_a: true, cs_pick_stand_b: true, cs_pick_stand_c: true })).toContain("stand behind you");
    expect(body(WOMAN)).not.toContain("crack in a wall");
    expect(sceneBodyWords(getScene(story, "lastseal_choice"))).toBeLessThanOrEqual(MAX_SCENE_WORDS);
  });

  it("echoes the hero’s gender in the memorial, the Law Hall, the tribunal, the descent and the sealing night", () => {
    const shown = (id: string, g: Gender) => enterScene(story, { ...at(id, hero({ gender: g })), log: [] }, getScene(story, id)).log.map((e) => e.text).join(" ");
    for (const id of ["memorial", "return_hall", "tribunal_vote", "descent_mengjiao", "sealing_return", "lanterns_close", "vault_close2", "lastseal_entry"]) {
      expect(new Set(GENDER_VALUES.map((g) => shown(id, g))).size, id).toBe(3);
      expect(sceneBodyWords(getScene(story, id)), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
  });
});

describe("what the customs leave in the hero’s story", () => {
  const remarks = story.remarks!.filter((r) => r.id.startsWith("su_cs_") || r.id.startsWith("cs_"));
  it("has remarks that read the doors, the picks and the turnings, for every gender and nine of the company", () => {
    expect(remarks.length).toBeGreaterThanOrEqual(45);
    const by = (g: string) => remarks.filter((r) => r.when.some((c) => c.kind === "hero" && c.field === "gender" && c.is?.includes(g)));
    for (const g of GENDER_VALUES) expect(by(g).length, g).toBeGreaterThanOrEqual(8);
    const speakers = new Set(remarks.map((r) => r.speaker ?? "elder"));
    expect(speakers.size).toBeGreaterThanOrEqual(10);
    expect(new Set(remarks.map((r) => r.id)).size).toBe(remarks.length);
  });

  it("says the first remark on gender to the gender it is for", () => {
    const flags = { [doorFlag("cs_a")]: true };
    const woman = at("gate", WOMAN, { flags, remarked: [] });
    const first = remarks.find((r) => r.id === "su_cs_woman_1")!;
    expect(conditionsHold(first.when, woman)).toBe(true);
    expect(conditionsHold(first.when, { ...woman, hero: MAN })).toBe(false);
  });

  it("summarises what a hero has done on the customs from the flags, and names the way they have taken most", () => {
    const flags = { [pickFlag("break", "a")]: true, [pickFlag("break", "b")]: true, [pickFlag("stand", "a")]: true, [doorFlag("a")]: true, [doorFlag("b")]: true, [doorFlag("c")]: true, [clashFlag("a")]: true, cs_done_w1_a: true };
    const c = customSummary(flags);
    expect(c).toEqual({ roads: 1, doors: 3, ways: { keep: 0, bend: 0, break: 2, stand: 1 }, clashes: 1, turns: 0 });
    expect(customLean(c)).toBe("break");
    expect(customLean(customSummary({}))).toBe("none");
    expect(customLean(customSummary({ [pickFlag("keep", "a")]: true, [pickFlag("bend", "a")]: true }))).toBe("none");
  });

  it("counts a road done under its own flag, apart from every other wave’s", () => {
    const back = scenes.find((s) => s.id === "cs_lineage_wh_return")!;
    const flags = back.choices.flatMap((c) => (c.effects ?? []).flatMap((e) => (e.kind === "setFlag" ? [e.flag] : [])));
    expect(flags).toContain("cs_done_w1_cs_lineage_wh");
    expect(flags.filter((f) => /^(fr|wr|cr|pr|ag)_done_/.test(f))).toEqual([]);
  });

  it("closes the hub on the Elder’s remark once all four roads are done, and not before", () => {
    const w = WAYSIDES9[0];
    const hub = getScene(story, w.id);
    const one = at(w.id, DEFAULT_HERO, { flags: { cs_done_w1_cs_lineage_wh: true } });
    const all = at(w.id, DEFAULT_HERO, { flags: Object.fromEntries(SPECS9.slice(0, 4).map((s) => [`cs_done_w1_${s.id}`, true])) });
    const said = (st: GameState) => hub.interjections!.filter((x) => conditionsHold(x.when, st)).map((x) => x.line);
    expect(said(one)).not.toContain(w.remark);
    expect(said(all)).toContain(w.remark);
  });

  it("exposes the slots a line can use, all filled", () => {
    for (const s of SPECS9) expect(Object.values(slotsOf(s, s.focus[0])).every((v) => v.length > 0), s.id).toBe(true);
  });
});

describe("walking every Custom Road", () => {
  const heroes: Hero[] = [
    hero({ gender: "woman", talent: "wood", dao: "alchemy" }),
    hero({ gender: "man", talent: "fire", dao: "sword" }),
    hero({ gender: "unspoken", talent: "mixed", dao: "none" }),
    hero({ gender: "woman", talent: "water", dao: "fate" }),
    hero({ gender: "man", talent: "heaven", dao: "healing" }),
    hero({ gender: "unspoken", talent: "late", dao: "beast" }),
  ];
  it("lets a hero of each gender walk every approach, take the door they are shown and leave by every way back", () => {
    for (const s of SPECS9) {
      const w = waysideOf(s.id);
      for (const h of heroes) {
        const start = at(`${s.id}_entry`, h, { realm: w.realm, cultivation: REALMS[w.realm].threshold + 5, ...strong });
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

  it("keeps the numbers sound after a hero takes every pick behind every door of every road", () => {
    for (const h of heroes) {
      let g: GameState = at("gate", h, { realm: 3, cultivation: REALMS[3].threshold + 5, ...strong });
      for (const s of SPECS9) {
        for (const way of CUSTOM_WAYS) {
          const a = CUSTOM_WAYS.indexOf(way);
          let state = { ...g, sceneId: doorSceneId(s.id, a, h.gender), flags: {} };
          const v = view(state, way);
          if (!v?.available) continue;
          state = choose(story, state, way);
          g = { ...state, wealth: 400, stats: { qi: 60, karma: 0, insight: 60 } };
          expect(g.flags[pickFlag(way, s.id)], `${s.id} ${h.gender} ${way}`).toBe(true);
        }
      }
      expect(g.stats.qi).toBeLessThanOrEqual(100);
      expect(Number.isNaN(g.cultivation)).toBe(false);
    }
  });
});
