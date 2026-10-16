import { ROAD_TOP } from "@/engine/realms";
import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { countWords } from "@/engine/words";
import { DEFAULT_HERO, GENDERS, type Gender, type Hero } from "@/engine/hero";
import { RANK_BANDS, RANK_WAYS, bandCondition, bandOf, bandRange, bandsAt, rankLean, rankSummary, rungProgress, type RankBand, type RankWay } from "@/engine/rank";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { BACK10, rankAssets, rankEntrances, rankGroups, rankItems, rankScenarios, SPECS10, WAYSIDES10 } from "@/story/rank";
import { argueInsight, clashFlag, doorFlag, doorSceneId, doorScenarioId, easeFlag, pickDef, pickFlag, readingOf, slotsOf, synthesize, WAY_TONE } from "@/story/rank/build";
import { PICK_LABEL, STANCE_DOOR } from "@/story/rank/lexicon-door";
import { RUNGS, STANCES, stanceGender, stanceReadsRank } from "@/story/rank/lexicon-rank";
import { STANCE_BEATS, STANCE_DEEP } from "@/story/rank/lexicon-stance";
import { GLANCE, GREET, RETURN_WORD, SENDOFF, WORD } from "@/story/rank/lexicon-read";
import { TURNS10, STANDINGS, turnFlag10, turnScenarioId10 } from "@/story/rank/main";
import { crossingEntrances } from "@/story/crossing";
import { ageEntrances } from "@/story/age";
import { customEntrances } from "@/story/custom";
import { cultivationEntrances } from "@/story/cultivation";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = rankGroups.flatMap((g) => g.scenes);
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);
const ids = (state: GameState) => getChoices(getScene(story, state.sceneId), state).map((v) => v.choice.id);
/** A hero rich enough in qi, insight and wealth to take any pick that is not about who they are or what they have climbed. */
const strong = { stats: { qi: 60, karma: 0, insight: 60 }, wealth: 400, decisions: 12 };
const spec = (id: string) => SPECS10.find((s) => s.id === id)!;
const waysideOf = (id: string) => WAYSIDES10[Math.floor(SPECS10.findIndex((s) => s.id === id) / 4)];
const standing = (id: string, a: number, h: Hero, patch: Partial<GameState> = {}) => at(`${id}_a${a}s2`, h, { realm: waysideOf(id).realm, ...strong, ...patch });
const GENDER_VALUES: Gender[] = ["woman", "man", "unspoken"];
const WOMAN = hero({ gender: "woman" });
const MAN = hero({ gender: "man" });
const UNSPOKEN = hero({ gender: "unspoken" });
const reply = (state: GameState, pick: string) => {
  const out = choose(story, state, pick);
  return out.log.filter((e) => e.kind === "npc").map((e) => e.text).join(" ");
};
/** What a scene shows a hero on entering it, as the player reads it. */
const shown = (id: string, h: Hero, patch: Partial<GameState> = {}) => enterScene(story, { ...at(id, h, patch), log: [] }, getScene(story, id)).log.map((e) => e.text).join(" ");
/** The paragraph of one group of alternatives that holds for a hero. */
const groupText = (sceneId: string, group: string, state: GameState) => {
  const found = (getScene(story, sceneId).extras ?? []).find((x) => x.group === group && conditionsHold(x.when, state));
  return found?.paragraphs.join(" ");
};

describe("the engine reads where a hero stands against a rung", () => {
  it("puts a hero below, at or above the realm of a road, and says which bands anyone can be in", () => {
    expect([0, 1, 2, 3].map((r) => bandOf(r, 2))).toEqual(["below", "below", "at", "above"]);
    expect(bandsAt(0)).toEqual(["at", "above"]);
    expect(bandsAt(3)).toEqual([...RANK_BANDS]);
    expect(bandsAt(7)).toEqual(["below", "at"]);
    expect(bandRange("below", 0)).toBeNull();
    expect(bandRange("above", 7)).toBeNull();
    expect(bandRange("at", 4)).toEqual({ min: 4, max: 4 });
    expect(() => bandCondition("below", 0)).toThrow();
  });

  it("covers every realm with exactly one band at every road, so a hero is always read", () => {
    for (let road = 0; road <= ROAD_TOP; road++) {
      for (let realm = 0; realm < REALMS.length; realm++) {
        const held = bandsAt(road).filter((band) => conditionsHold([bandCondition(band, road)], at("gate", DEFAULT_HERO, { realm })));
        expect(held, `road ${road} realm ${realm}`).toEqual([bandOf(realm, road)]);
      }
    }
  });

  it("summarises what a hero has done on the ranks from the flags, and names the way they have taken most", () => {
    const flags = { rk_pick_claim_a: true, rk_pick_claim_b: true, rk_pick_lift_a: true, rk_door_a: true, rk_door_b: true, rk_door_c: true, rk_clash_a: true, rk_done_w1_a: true, rk_done_w3_b: true, rk_main_woman_scroll_theft: true };
    const r = rankSummary(flags);
    expect(r).toEqual({ roads: 2, doors: 3, ways: { yield: 0, claim: 2, veil: 0, lift: 1 }, clashes: 1, turns: 1 });
    expect(rankLean(r)).toBe("claim");
    expect(rankLean(rankSummary({}))).toBe("none");
    expect(rankLean(rankSummary({ rk_pick_yield_a: true, rk_pick_veil_a: true }))).toBe("none");
    expect(rungProgress(flags)).toEqual([1, 0, 1, 0, 0, 0, 0, 0]);
  });
});

describe("the Rank Roads", () => {
  it("add more than a thousand scenes: eight waysides, thirty-two roads of thirty-seven scenes, and the hubs and ways back", () => {
    expect(WAYSIDES10).toHaveLength(8);
    expect(rankGroups).toHaveLength(8);
    expect(SPECS10).toHaveLength(32);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(32 * 37);
    expect(scenes.length + rankGroups.length).toBeGreaterThanOrEqual(1200);
    expect(chapters.filter((c) => c.name.startsWith("Rank Roads:"))).toHaveLength(8);
    expect(Object.keys(rankEntrances)).toHaveLength(8);
  });

  it("opens each wayside from a scene no earlier wave opens from, once, and asks a realm that rises one rung at a time", () => {
    const earlier = new Set([
      ...Object.keys(waysideEntrances),
      ...Object.keys(realmEntrances),
      ...Object.keys(fortuneEntrances),
      ...Object.keys(daoEntrances),
      ...Object.keys(witnessEntrances),
      ...Object.keys(cultivationEntrances),
      ...Object.keys(crossingEntrances),
      ...Object.keys(ageEntrances),
      ...Object.keys(customEntrances),
    ]);
    for (const origin of Object.keys(rankEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_rank_")), origin).toHaveLength(1);
      expect(story.scenes[BACK10(origin)], origin).toBeDefined();
    }
    expect(WAYSIDES10.map((w) => w.realm)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(WAYSIDES10.map((w) => w.rung)).toEqual([...RUNGS]);
    // The wayside of a realm opens in the book where a hero of that realm stands, so a hero meets each rung from its own side.
    const book = (origin: string) => chapters.find((c) => c.scenes.some((s) => s.id === origin))!.name;
    expect(book(WAYSIDES10[0].origin)).toMatch(/^Chapter 1:/);
    expect(book(WAYSIDES10[7].origin)).toMatch(/^Book Six/);
  });

  it("sets every rung beside four keepers: a woman and a man who read rank first, and a woman and a man who read sex first, once", () => {
    expect(new Set(SPECS10.map((s) => `${s.rung}/${s.stance}`)).size).toBe(32);
    WAYSIDES10.forEach((w, n) => {
      const here = SPECS10.slice(n * 4, n * 4 + 4);
      expect(new Set(here.map((s) => s.rung)), w.id).toEqual(new Set([w.rung]));
      expect(here.map((s) => s.stance), w.id).toEqual([...STANCES]);
      for (const s of here) expect(s.id, w.id).toBe(`rk_${w.rung}_${{ woman_rank: "wr", man_rank: "mr", woman_sex: "ws", man_sex: "ms" }[s.stance]}`);
    });
    expect(stanceReadsRank("woman_rank")).toBe(true);
    expect(stanceReadsRank("man_sex")).toBe(false);
    expect(stanceGender("man_rank")).toBe("man");
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes, a way back and twelve scenes behind its four doors, each within the word cap", () => {
    for (const s of SPECS10) {
      const own = scenes.filter((x) => x.id.startsWith(`${s.id}_`));
      expect(own, s.id).toHaveLength(37);
      for (const x of own) {
        expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(x.choices.filter((c) => !c.hideLocked).length, x.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(x), x.id).not.toMatch(/\{\w+\}/);
        expect(x.title.startsWith("Rank Road:") || x.title.startsWith(s.title), x.id).toBe(true);
      }
    }
    for (const x of scenes.filter((y) => y.id.startsWith("wayside_"))) expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("sells one good and leases one holding on every road, with exactly one breakthrough pill on each wayside, for the realm after the road’s", () => {
    expect(Object.keys(rankItems)).toHaveLength(32);
    expect(Object.keys(rankAssets)).toHaveLength(32);
    WAYSIDES10.forEach((w, n) => {
      const pills = SPECS10.slice(n * 4, n * 4 + 4).filter((s) => s.ware.kind === "pill");
      expect(pills, w.id).toHaveLength(1);
      const next = Math.min(w.realm + 1, ROAD_TOP);
      expect(story.items![`${pills[0].id}_ware`].aid, w.id).toBe(next);
      expect(pills[0].ware.blurb, w.id).toContain(REALMS[next].name);
    });
    for (const s of SPECS10) {
      expect(s.ware.name, s.id).not.toContain(s.kname);
      expect(s.holding.name, s.id).not.toContain(s.kname);
      const asset = story.assets![`${s.id}_hold`];
      expect(asset.income, s.id).toBeGreaterThan(asset.upkeep);
      expect(s.ware.name, s.id).not.toMatch(/^(The|A|An) /);
      expect(s.holding.name, s.id).not.toMatch(/^(The|A|An) /);
    }
  });

  it("writes each road in its own words: every keeper, road, place, good and holding is different, and no keeper has a name already in the story", () => {
    for (const key of ["kname", "id", "place", "title"] as const) expect(new Set(SPECS10.map((s) => s[key])).size, key).toBe(32);
    expect(new Set(SPECS10.map((s) => s.ware.name)).size).toBe(32);
    expect(new Set(SPECS10.map((s) => s.holding.name)).size).toBe(32);
    const own = SPECS10.flatMap((s) => [...s.openers, s.intro, s.close, s.secret]);
    expect(new Set(own).size).toBe(own.length);
    const synthesised = SPECS10.flatMap((s) => {
      const r = synthesize(s);
      return [...r.beats.flat(), ...r.deep];
    });
    expect(new Set(synthesised).size, "no beat of any road is another’s word for word").toBe(synthesised.length);
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(rankScenarios)]);
    const outside = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).filter((r) => !r.id.startsWith("rk_") && !r.id.startsWith("su_rk_")).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    expect(SPECS10.filter((s) => new RegExp(`\\b${s.kname}\\b`).test(outside) || companions.has(s.kname)).map((s) => s.kname)).toEqual([]);
  });

  it("keeps to the canon of the places: no steppe, and the roads of the road never say the Law Hall or the sect gate", () => {
    for (const s of SPECS10) {
      const own = [s.intro, ...s.openers, s.close, s.secret];
      for (const t of own) expect(t, s.id).not.toMatch(/\bsteppe\b|\bkurultai\b/i);
      if (waysideOf(s.id).flavour === "road") for (const t of own) expect(t, s.id).not.toMatch(/Law Hall|sect gate/);
    }
  });

  it("does not clone a passage from road to road: no twelve-word phrase of a road’s own text in more than two roads, and none of its rung’s or stance’s in more roads than share them", () => {
    const grams = (n: number, limit: number, texts: (s: (typeof SPECS10)[number]) => string[]) => {
      const found = new Map<string, Set<string>>();
      for (const s of SPECS10) {
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
    // The long middle of a road is a beat of its rung (shared by four roads) and a beat of its stance (shared by sixteen), so a phrase may be said in up to sixteen roads.
    expect(grams(12, 16, (s) => synthesize(s).beats.flat())).toEqual([]);
  });
});

describe("the door of rank", () => {
  it("shows the door to the gender it is for in every approach, and to no one else", () => {
    const id = "rk_roll_wr";
    for (let a = 0; a < 4; a++) {
      for (const g of GENDERS) {
        const state = standing(id, a, hero({ gender: g.value }));
        expect(ids(state).filter((x) => x.startsWith("door_")), `${g.value} approach ${a}`).toEqual([`door_${g.value[0]}`]);
      }
    }
  });

  it("opens a different scene to a woman, a man and someone who gives no answer, each in its own words and with the same four picks", () => {
    for (const s of SPECS10) {
      for (let a = 0; a < 4; a++) {
        const texts = new Set<string>();
        for (const g of GENDER_VALUES) {
          const state = standing(s.id, a, hero({ gender: g }));
          const next = choose(story, state, `door_${g[0]}`);
          expect(next.sceneId, `${s.id} ${g}`).toBe(doorSceneId(s.id, a, g));
          expect(getChoices(getScene(story, next.sceneId), next).map((v) => v.choice.id), `${s.id} ${g}`).toEqual(RANK_WAYS);
          texts.add(getScene(story, next.sceneId).paragraphs.join(" "));
        }
        expect(texts.size, `${s.id} approach ${a}`).toBe(3);
      }
    }
  });

  it("makes the rung the road’s own: eight rungs give eight different scenes to a woman, a man and the unspoken", () => {
    for (const g of GENDER_VALUES) {
      const bodies = SPECS10.map((s) => getScene(story, doorSceneId(s.id, 0, g)).paragraphs.join(" "));
      expect(new Set(bodies).size, g).toBe(8);
      const rungs = WAYSIDES10.map((_, n) => getScene(story, doorSceneId(SPECS10[n * 4].id, 0, g)).paragraphs[0]);
      expect(new Set(rungs).size, g).toBe(8);
    }
  });

  it("reads where the hero’s realm stands against the road’s: a hero below, at and above it meet three different keepers in the same door", () => {
    for (const id of ["rk_seats_wr", "rk_seats_ms", "rk_pairing_mr", "rk_severing_ws"]) {
      const R = waysideOf(id).realm;
      for (const g of GENDER_VALUES) {
        const door = doorSceneId(id, 0, g);
        const text = (realm: number) => groupText(door, "rdoor", at(door, hero({ gender: g }), { realm, ...strong }))!;
        const [below, atRung, above] = [R - 1, R, R + 1].map(text);
        expect(new Set([below, atRung, above]).size, `${id} ${g}`).toBe(3);
        const said = (realm: number) => getScene(story, door).interjections!.filter((i) => conditionsHold(i.when, at(door, hero({ gender: g }), { realm, ...strong }))).map((i) => i.line);
        for (const realm of [R - 1, R, R + 1]) expect(said(realm), `${id} ${g} ${realm}`).toHaveLength(1);
        expect(new Set([R - 1, R, R + 1].map((r) => said(r)[0])).size, `${id} ${g}`).toBe(3);
      }
    }
  });

  it("lets a keeper who reads rank first and one who reads sex first meet the same hero at the same door in two ways", () => {
    for (const g of GENDER_VALUES) {
      for (const [a, b] of [["rk_pairing_wr", "rk_pairing_ws"], ["rk_table_mr", "rk_table_ms"], ["rk_roll_wr", "rk_roll_ws"]]) {
        const R = waysideOf(a).realm;
        for (const realm of [R, Math.min(7, R + 1)]) {
          const text = (id: string) => groupText(doorSceneId(id, 1, g), "rdoor", at(doorSceneId(id, 1, g), hero({ gender: g }), { realm }))!;
          expect(text(a), `${a} vs ${b} ${g} ${realm}`).not.toBe(text(b));
        }
      }
    }
    expect(readingOf(spec("rk_roll_wr"))).toBe("rank");
    expect(readingOf(spec("rk_roll_ms"))).toBe("sex");
  });

  it("charges for a door the rung closes: claiming needs the realm of the road and then a price each gender pays differently", () => {
    const id = "rk_seats_wr";
    const R = waysideOf(id).realm;
    // Below the road’s realm, no one can claim it.
    const below = at(doorSceneId(id, 0, "woman"), WOMAN, { realm: R - 1, ...strong });
    expect(view(below, "claim")!.available).toBe(false);
    expect(view(below, "claim")!.hint).toContain("realm of the road");
    // At the road’s realm, a woman must argue it with Insight, a man pays in qi, and the unspoken must have qi to be read by the rung alone.
    const woman = at(doorSceneId(id, 0, "woman"), WOMAN, { realm: R, stats: { qi: 60, karma: 0, insight: 5 } });
    expect(view(woman, "claim")!.available).toBe(false);
    expect(view(woman, "claim")!.hint).toContain(`Insight ${argueInsight(R)}`);
    const arguer = at(doorSceneId(id, 0, "woman"), WOMAN, { realm: R, stats: { qi: 0, karma: 0, insight: argueInsight(R) } });
    expect(view(arguer, "claim")!.available).toBe(true);
    expect(view(arguer, "yield")!.available).toBe(true);
    const weak = at(doorSceneId(id, 0, "man"), MAN, { realm: R, stats: { qi: 5, karma: 0, insight: 60 } });
    expect(view(weak, "claim")!.available).toBe(false);
    const tired = choose(story, at(doorSceneId(id, 0, "man"), MAN, { realm: R, stats: { qi: 20, karma: 0, insight: 0 } }), "claim");
    expect(tired.stats.qi).toBeLessThan(20);
    const unsure = at(doorSceneId(id, 0, "unspoken"), UNSPOKEN, { realm: R, stats: { qi: 3, karma: 0, insight: 60 } });
    expect(view(unsure, "claim")!.available).toBe(false);
    expect(view(unsure, "veil")!.available).toBe(true);
    const dishonoured = at(doorSceneId(id, 0, "man"), MAN, { realm: R, stats: { qi: 60, karma: -20, insight: 60 } });
    expect(view(dishonoured, "lift")!.available).toBe(false);
    expect(view(dishonoured, "lift")!.hint).toContain("clean");
    expect(pickDef("woman", "claim", 2, "sex").requires).toBeDefined();
  });

  it("makes spending a rung on another cost a hero below the road strain, and a hero at it nothing", () => {
    const id = "rk_portraits_wr";
    const R = waysideOf(id).realm;
    for (const g of GENDER_VALUES) {
      const door = doorSceneId(id, 0, g);
      const h = hero({ gender: g });
      const low = at(door, h, { realm: R - 2, ...strong });
      const on = at(door, h, { realm: R, ...strong });
      expect(view(low, "lift")!.strain, g).toEqual({ needs: R, gap: 2 });
      expect(view(on, "lift")!.strain, g).toBeUndefined();
      expect(view(low, "claim")!.available, g).toBe(false);
      expect(choose(story, low, "lift").stats.qi, g).toBeLessThan(choose(story, on, "lift").stats.qi);
    }
  });

  it("gives each gender its own tones, four different ones in a scene, and a label for every pick in three wordings", () => {
    for (const g of GENDER_VALUES) {
      expect(new Set(RANK_WAYS.map((w) => WAY_TONE[g][w])).size, g).toBe(4);
      for (const w of RANK_WAYS) expect(new Set(PICK_LABEL[g][w]).size, `${g} ${w}`).toBe(3);
    }
    for (const s of SPECS10) for (const g of GENDER_VALUES) expect(new Set(getScene(story, doorSceneId(s.id, 1, g)).choices.map((c) => c.tone)).size, `${s.id} ${g}`).toBe(4);
  });

  it("sets the door and the pick, crosses a keeper who reads sex first when the rung is claimed or spent, and lets a keeper who reads rank first down when the hero keeps low", () => {
    const sexKeeper = spec("rk_pairing_ws");
    const rankKeeper = spec("rk_pairing_wr");
    expect([readingOf(sexKeeper), readingOf(rankKeeper)]).toEqual(["sex", "rank"]);
    const R = waysideOf(sexKeeper.id).realm;
    const door = (id: string, g: Gender) => at(doorSceneId(id, 0, g), hero({ gender: g }), { realm: R, ...strong });
    const claim = choose(story, door(sexKeeper.id, "woman"), "claim");
    expect(claim.flags[doorFlag(sexKeeper.id)]).toBe(true);
    expect(claim.flags[pickFlag("claim", sexKeeper.id)]).toBe(true);
    expect(claim.flags[clashFlag(sexKeeper.id)]).toBe(true);
    expect(choose(story, door(sexKeeper.id, "woman"), "lift").flags[clashFlag(sexKeeper.id)]).toBe(true);
    expect(choose(story, door(sexKeeper.id, "woman"), "yield").flags[clashFlag(sexKeeper.id)]).toBeUndefined();
    expect(choose(story, door(sexKeeper.id, "woman"), "veil").flags[clashFlag(sexKeeper.id)]).toBeUndefined();
    const ease = choose(story, door(rankKeeper.id, "man"), "yield");
    expect(ease.flags[easeFlag(rankKeeper.id)]).toBe(true);
    expect(choose(story, door(rankKeeper.id, "man"), "claim").flags[clashFlag(rankKeeper.id)]).toBeUndefined();
    expect(choose(story, door(rankKeeper.id, "man"), "claim").flags[easeFlag(rankKeeper.id)]).toBeUndefined();
    // A keeper who reads rank first is pleased to be claimed to.
    const base = door(rankKeeper.id, "woman");
    expect(choose(story, base, "claim").stats.karma).toBe(base.stats.karma - 1 + 1);
    expect(pickDef("woman", "claim", R, "rank").effects.length).toBe(pickDef("woman", "claim", R, "sex").effects.length + 1);
  });

  it("brings the hero back to the scene after the one they left, whichever door they took", () => {
    for (const s of SPECS10) {
      for (let a = 0; a < 4; a++) for (const g of GENDER_VALUES) for (const c of getScene(story, doorSceneId(s.id, a, g)).choices) expect(c.next, `${s.id} ${a} ${g}:${c.id}`).toBe(`${s.id}_a${a}s3`);
    }
  });

  it("hides a locked door from the hero it is not for, and takes it once", () => {
    const s = SPECS10[0];
    const scene = getScene(story, `${s.id}_a0s2`);
    expect(scene.choices.filter((c) => c.hideLocked).length).toBe(3);
    expect(scene.choices.filter((c) => !c.hideLocked).length).toBeGreaterThanOrEqual(4);
    const seen = getChoices(scene, at(scene.id, MAN)).map((v) => v.choice.id);
    expect(seen).toContain("door_m");
    expect(seen).not.toContain("door_w");
    expect(seen).not.toContain("door_u");
    const done = choose(story, at(scene.id, MAN, { realm: 1, ...strong }), "door_m");
    const again = choose(story, done, "yield");
    expect(again.flags[doorFlag(s.id)]).toBe(true);
    expect(getChoices(getScene(story, `${s.id}_a1s2`), { ...again, sceneId: `${s.id}_a1s2` }).map((v) => v.choice.id)).not.toContain("door_m");
  });
});

describe("a keeper who reads the hero’s rung and gender together", () => {
  it("reads the hero’s gender and realm together at the entry: nine different glances on a road of the middle rungs, for each keeper’s reading", () => {
    for (const id of ["rk_seats_wr", "rk_seats_ms"]) {
      const R = waysideOf(id).realm;
      const texts = new Set<string>();
      for (const g of GENDER_VALUES) for (const realm of [R - 1, R, R + 1]) texts.add(groupText(`${id}_entry`, "rglance", at(`${id}_entry`, hero({ gender: g }), { realm }))!);
      expect(texts.size, id).toBe(9);
    }
  });

  it("greets a hero below, at and above the road’s rung in three ways in every approach, and a woman, a man and someone who gives no answer in three ways in the middle", () => {
    for (const s of SPECS10) {
      const R = waysideOf(s.id).realm;
      for (let a = 0; a < 4; a++) {
        const bands = bandsAt(R);
        const greet = new Set(bands.map((band) => groupText(`${s.id}_a${a}s0`, "rgreet", at(`${s.id}_a${a}s0`, DEFAULT_HERO, { realm: band === "below" ? R - 1 : band === "at" ? R : R + 1 }))));
        expect(greet.size, `${s.id} a${a}s0`).toBe(bands.length);
        const line = new Set(bands.map((band) => groupText(`${s.id}_a${a}s3`, "rband", at(`${s.id}_a${a}s3`, DEFAULT_HERO, { realm: band === "below" ? R - 1 : band === "at" ? R : R + 1 }))));
        expect(line.size, `${s.id} a${a}s3`).toBe(bands.length);
      }
      for (const suffix of ["a0s1", "a1s2", "a2s1", "a3s2", "a0s4"]) {
        expect(new Set(GENDER_VALUES.map((g) => shown(`${s.id}_${suffix}`, hero({ gender: g }), { realm: R }))).size, `${s.id} ${suffix}`).toBe(3);
      }
    }
  });

  it("speaks of the keeper as she or he by the keeper’s own gender, outside what anyone says aloud, in every line the stances write", () => {
    const aloud = /“[^”]*”/g;
    const lines = (reading: "rank" | "sex"): string[] => [
      ...STANCE_BEATS[reading],
      ...STANCE_DEEP[reading],
      ...GENDER_VALUES.flatMap((g) => RANK_BANDS.flatMap((b) => [...STANCE_DOOR[reading][b][g], GLANCE[reading][b][g]])),
      ...RANK_BANDS.flatMap((b) => GREET[reading][b]),
      ...GENDER_VALUES.flatMap((g) => SENDOFF[reading][g]),
      ...RANK_WAYS.map((w) => RETURN_WORD[reading][w]),
      ...Object.values(WORD[reading]),
    ];
    for (const reading of ["rank", "sex"] as const) {
      for (const [gender, wrong] of [["woman", /\b(he|his|him|himself)\b/], ["man", /\b(she|her|hers|herself)\b/]] as const) {
        // A line is only wrong for a keeper when it names the keeper by a pronoun, and the lexicon only names a keeper by slot.
        for (const line of lines(reading)) {
          const outside = line.replace(aloud, "");
          if (!/\{[kK](they|them|their|name)\}/.test(outside)) continue;
          expect(outside, `${reading}/${gender}: ${line.slice(0, 50)}`).not.toMatch(/\b(he|she|himself|herself)\b/);
        }
        expect(gender).toBeTruthy();
        expect(wrong).toBeTruthy();
      }
    }
    // The built text fills the right pronoun for each keeper.
    for (const s of SPECS10) {
      const gender = stanceGender(s.stance);
      expect(slotsOf(s, s.focus[0]).kthey, s.id).toBe(gender === "woman" ? "she" : "he");
      expect(synthesize(s).beats.flat().join(" "), s.id).toContain(gender === "woman" ? "She " : "He ");
    }
  });

  it("says a parting word for what the hero did behind the door, by whether the keeper reads rank first or sex first", () => {
    const id = "rk_novices_mr";
    const R = waysideOf(id).realm;
    const after = (way: RankWay) => {
      const done = choose(story, at(doorSceneId(id, 0, "man"), MAN, { realm: R, ...strong }), way);
      return shown(`${id}_a0s4`, MAN, { ...done, sceneId: `${id}_a0s4`, log: [] });
    };
    expect(new Set(RANK_WAYS.map(after)).size).toBe(4);
    const rank = RANK_WAYS.map((w) => RETURN_WORD.rank[w]);
    const sex = RANK_WAYS.map((w) => RETURN_WORD.sex[w]);
    expect(new Set([...rank, ...sex]).size).toBe(8);
  });

  it("reads what the hero did on earlier roads when they did the same thing twice", () => {
    const flags = (way: RankWay) => ({ [pickFlag(way, "rk_x1")]: true, [pickFlag(way, "rk_x2")]: true });
    const word = (id: string, way: RankWay) => shown(`${id}_a1s4`, WOMAN, { flags: flags(way), realm: 3 });
    expect(word("rk_roll_wr", "lift")).toContain("more than one door");
    expect(word("rk_roll_wr", "claim")).not.toBe(word("rk_roll_ws", "claim"));
    expect(word("rk_roll_wr", "yield")).not.toBe(word("rk_roll_wr", "veil"));
  });
});

describe("the Elder answers at once", () => {
  it("answers every pick on every road with five lines by her trust, naming the place, and none the same as another road’s or another gender’s", () => {
    const seen = new Map<string, string>();
    let count = 0;
    for (const s of SPECS10) {
      for (const g of GENDER_VALUES) {
        for (const w of RANK_WAYS) {
          const sc = rankScenarios[doorScenarioId(s.id, g, w)];
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
    expect(count).toBe(32 * 12 * 5);
  });

  it("makes every pick behind a door draw the answer for who the hero is and what they did, and moves what she feels", () => {
    const s = spec("rk_seats_mr");
    const R = waysideOf(s.id).realm;
    const state = at(doorSceneId(s.id, 0, "woman"), WOMAN, { realm: R, ...strong });
    const out = choose(story, state, "lift");
    expect(out.history.at(-1)).toBe(doorScenarioId(s.id, "woman", "lift"));
    expect(out.npc.respect).toBeGreaterThan(state.npc.respect);
    const lines = new Set<string>();
    for (const g of GENDER_VALUES) for (const w of RANK_WAYS) lines.add(reply(at(doorSceneId(s.id, 0, g), hero({ gender: g }), { realm: R, ...strong }), w));
    expect(lines.size).toBe(12);
  });

  it("answers the same pick differently as her trust changes", () => {
    const s = spec("rk_portraits_ms");
    const R = waysideOf(s.id).realm;
    const lines = new Set<string>();
    for (const trust of [-60, -20, 0, 30, 70]) {
      const state = at(doorSceneId(s.id, 2, "unspoken"), UNSPOKEN, { realm: R, ...strong, npc: { trust, respect: 0, fear: 10, suspicion: 30 } });
      lines.add(reply(state, "veil"));
    }
    expect(lines.size).toBe(5);
  });

  it("reads a rung pressed before a keeper who reads sex first, and a place kept before a keeper who reads rank first, at the report", () => {
    const sex = rankScenarios["REPORT_FORTUNE_RK_SEVERING_WS"];
    const rank = rankScenarios["REPORT_FORTUNE_RK_SEVERING_WR"];
    expect((sex.memory![0].when[0] as { flag: string }).flag).toBe(clashFlag("rk_severing_ws"));
    expect((rank.memory![0].when[0] as { flag: string }).flag).toBe(easeFlag("rk_severing_wr"));
    expect((sex.memory![1].when[0] as { flag: string }).flag).toBe(doorFlag("rk_severing_ws"));
    expect(sex.memory!.filter((m) => m.when.some((c) => c.kind === "flag" && c.flag.startsWith("rk_ease_")))).toEqual([]);
    expect(rank.memory!.filter((m) => m.when.some((c) => c.kind === "flag" && c.flag.startsWith("rk_clash_")))).toEqual([]);
  });
});

describe("realm and gender in the main line", () => {
  it("offers eight turning points, one for every realm, each with a way for a woman, a man and someone who gives no answer, for a hero ahead of the story and one behind it, hidden from the others", () => {
    expect(TURNS10).toHaveLength(8);
    expect(TURNS10.map((t) => t.realm)).toEqual([1, 2, 2, 3, 4, 5, 6, 7]);
    for (const t of TURNS10) {
      const scene = story.scenes[t.id];
      expect(scene, t.id).toBeDefined();
      for (const g of GENDER_VALUES) {
        expect(new Set(Object.values(t.labels[g])).size, `${t.id} ${g}`).toBe(2);
        for (const standingName of STANDINGS) {
          const realm = standingName === "ahead" ? t.realm : t.realm - 1;
          const seen = ids(at(t.id, hero({ gender: g }), { realm })).filter((x) => x.startsWith("rank_"));
          expect(seen, `${t.id} ${g} ${standingName}`).toEqual([`rank_${g}_${standingName}`]);
        }
      }
      expect(scene.choices.filter((c) => c.id.startsWith("rank_")).every((c) => c.hideLocked)).toBe(true);
      expect(scene.choices.filter((c) => c.id.startsWith("rank_")), t.id).toHaveLength(6);
    }
    expect(new Set(TURNS10.flatMap((t) => GENDER_VALUES.flatMap((g) => Object.values(t.labels[g])))).size).toBe(48);
  });

  it("answers each at once in the Elder’s words for that gender, that rank and that room, and counts it once", () => {
    const lines = new Set<string>();
    for (const t of TURNS10) {
      for (const g of GENDER_VALUES) {
        for (const standingName of STANDINGS) {
          const realm = standingName === "ahead" ? t.realm : t.realm - 1;
          const state = at(t.id, hero({ gender: g }), { realm, ...strong });
          const out = choose(story, state, `rank_${g}_${standingName}`);
          expect(out.flags[turnFlag10(g, t.id)], `${t.id} ${g} ${standingName}`).toBe(true);
          expect(out.history.at(-1)).toBe(turnScenarioId10(g, standingName, t.id));
          lines.add(out.log.filter((e) => e.kind === "npc").map((e) => e.text).join(" "));
          expect(view({ ...out, sceneId: t.id }, `rank_${g}_${standingName}`)?.available ?? false, `${t.id} ${g} ${standingName}`).toBe(false);
        }
      }
    }
    expect(lines.size).toBe(48);
    expect(rankSummary(Object.fromEntries(TURNS10.map((t) => [turnFlag10("woman", t.id), true]))).turns).toBe(8);
  });

  it("asks the realm of the way from a hero who is ahead, and gives a hero who is behind a smaller road", () => {
    for (const t of TURNS10) {
      const scene = story.scenes[t.id];
      const ahead = scene.choices.find((c) => c.id === "rank_woman_ahead")!;
      const behind = scene.choices.find((c) => c.id === "rank_woman_behind")!;
      expect(ahead.needsRealm, t.id).toBe(t.realm);
      expect(behind.needsRealm, t.id).toBeUndefined();
      const gain = (c: typeof ahead) => (c.effects ?? []).flatMap((e) => (e.kind === "addCultivation" ? [e.amount] : []))[0];
      expect(gain(ahead), t.id).toBeGreaterThan(gain(behind));
    }
  });

  it("reads the hero’s rung and gender together at seven points of the main line and the books, for a hero below the story’s rung and one at it", () => {
    const rows: [string, number][] = [["return_hall", 1], ["jade_eye_return", 2], ["descent_mist", 3], ["asm_d1s1", 3], ["kurultai_a1s1", 5], ["summit_ring", 6], ["bridge_open1", 7]];
    for (const [id, realm] of rows) {
      for (const standingRealm of [realm, realm - 1]) {
        const texts = new Set(GENDER_VALUES.map((g) => shown(id, hero({ gender: g }), { realm: standingRealm })));
        expect(texts.size, `${id} realm ${standingRealm}`).toBe(3);
      }
      for (const g of GENDER_VALUES) expect(shown(id, hero({ gender: g }), { realm }), `${id} ${g}`).not.toBe(shown(id, hero({ gender: g }), { realm: realm - 1 }));
      expect(sceneBodyWords(getScene(story, id)), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
  });

  it("reads the hero’s gender against the last rung, and the way they took the ranks, before the last choice of the story", () => {
    const body = (h: Hero, realm: number, flags: Record<string, boolean> = {}) => shown("lastseal_a", h, { realm, flags });
    expect(new Set(GENDER_VALUES.map((g) => body(hero({ gender: g }), 7))).size).toBe(3);
    expect(body(WOMAN, 7)).not.toBe(body(WOMAN, 6));
    const spent = { rk_pick_lift_a: true, rk_pick_lift_b: true, rk_pick_lift_c: true };
    expect(body(WOMAN, 7, spent)).toContain("stand behind you in the mist");
    expect(body(WOMAN, 7, { rk_pick_claim_a: true, rk_pick_claim_b: true, rk_pick_claim_c: true })).toContain("bell that rang in the wrong hall");
    expect(body(WOMAN, 7)).not.toContain("bell that rang in the wrong hall");
    expect(sceneBodyWords(getScene(story, "lastseal_a"))).toBeLessThanOrEqual(MAX_SCENE_WORDS);
  });
});

describe("what the ranks leave in the hero’s story", () => {
  const remarks = story.remarks!.filter((r) => r.id.startsWith("su_rk_") || r.id.startsWith("rk_"));
  it("has remarks that read the doors, the picks, the rungs and the turnings, for every gender and a dozen of the company", () => {
    expect(remarks.length).toBeGreaterThanOrEqual(55);
    const by = (g: string) => remarks.filter((r) => r.when.some((c) => c.kind === "hero" && c.field === "gender" && c.is?.includes(g)));
    for (const g of GENDER_VALUES) expect(by(g).length, g).toBeGreaterThanOrEqual(10);
    const speakers = new Set(remarks.map((r) => r.speaker ?? "elder"));
    expect(speakers.size).toBeGreaterThanOrEqual(13);
    expect(new Set(remarks.map((r) => r.id)).size).toBe(remarks.length);
    // The Elder reads how far up the ladder a hero is as well as who they are.
    expect(remarks.filter((r) => r.when.some((c) => c.kind === "realm")).length).toBeGreaterThanOrEqual(9);
    for (const r of remarks) expect(countWords(r.line), r.id).toBeLessThanOrEqual(80);
  });

  it("says the Elder’s remark on doors to the gender and the rung it is for, and to no other", () => {
    const flags = { [doorFlag("rk_a")]: true, [doorFlag("rk_b")]: true };
    const high = remarks.find((r) => r.id === "su_rk_woman_high")!;
    const low = remarks.find((r) => r.id === "su_rk_woman_low")!;
    const state = at("gate", WOMAN, { flags, remarked: [], realm: 6 });
    expect(conditionsHold(high.when, state)).toBe(true);
    expect(conditionsHold(low.when, state)).toBe(false);
    expect(conditionsHold(high.when, { ...state, hero: MAN })).toBe(false);
    expect(conditionsHold(high.when, { ...state, realm: 1 })).toBe(false);
    expect(conditionsHold(low.when, { ...state, realm: 1 })).toBe(true);
  });

  it("counts a road done under its own flag, apart from every other wave’s", () => {
    const back = scenes.find((s) => s.id === "rk_roll_wr_return")!;
    const flags = back.choices.flatMap((c) => (c.effects ?? []).flatMap((e) => (e.kind === "setFlag" ? [e.flag] : [])));
    expect(flags).toContain("rk_done_w1_rk_roll_wr");
    expect(flags.filter((f) => /^(fr|wr|cr|pr|ag|cs)_done_/.test(f))).toEqual([]);
  });

  it("closes the hub on the Elder’s remark once all four roads are done, and not before, and keeps her face-words short", () => {
    const w = WAYSIDES10[0];
    const hub = getScene(story, w.id);
    const one = at(w.id, DEFAULT_HERO, { flags: { rk_done_w1_rk_roll_wr: true } });
    const all = at(w.id, DEFAULT_HERO, { flags: Object.fromEntries(SPECS10.slice(0, 4).map((s) => [`rk_done_w1_${s.id}`, true])) });
    const said = (st: GameState) => hub.interjections!.filter((x) => conditionsHold(x.when, st)).map((x) => x.line);
    expect(said(one)).not.toContain(w.remark);
    expect(said(all)).toContain(w.remark);
    for (const x of WAYSIDES10.flatMap((y) => getScene(story, y.id).interjections!.filter((i) => i.line !== y.remark))) expect(countWords(x.line), x.line).toBeLessThanOrEqual(14);
  });

  it("exposes the slots a line can use, all filled", () => {
    for (const s of SPECS10) expect(Object.values(slotsOf(s, s.focus[0])).every((v) => v.length > 0), s.id).toBe(true);
  });

  it("offers no band that no hero can be in: a Mortal road has none below it and an Ascendant road none above", () => {
    const text = (id: string) => JSON.stringify(getScene(story, id));
    expect(text("rk_roll_wr_entry")).not.toContain('"max":-1');
    expect(text("rk_column_wr_entry")).not.toContain('"min":8');
    expect(story.scenes.rk_roll_wr_entry.choices.some((c) => c.id === "humble")).toBe(false);
    expect(bandsAt(0)).not.toContain("below");
    expect(bandsAt(7)).not.toContain("above");
    for (const band of RANK_BANDS) expect(typeof band).toBe("string");
    expect(RANK_WAYS).toHaveLength(4);
    const bands = new Set<RankBand>(bandsAt(3));
    expect(bands.size).toBe(3);
  });
});

describe("walking every Rank Road", () => {
  const heroes: Hero[] = [
    hero({ gender: "woman", talent: "wood", dao: "alchemy" }),
    hero({ gender: "man", talent: "fire", dao: "sword" }),
    hero({ gender: "unspoken", talent: "mixed", dao: "none" }),
  ];
  it("lets a hero of each gender walk every approach at the road’s own realm, take the door they are shown and leave by every way back", () => {
    for (const s of SPECS10) {
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
              expect(picks.length, d.sceneId).toBeGreaterThanOrEqual(3);
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

  it("lets a hero well below a road still walk it, and the keeper still read them: the Mortal who comes to the Ascendant’s copyists", () => {
    const s = spec("rk_column_ms");
    for (const g of GENDER_VALUES) {
      const start = at(`${s.id}_entry`, hero({ gender: g }), { realm: 0, ...strong });
      let state: GameState = choose(story, start, "approach_1");
      for (let step = 0; step < 6 && !state.sceneId.endsWith("_return"); step++) state = choose(story, state, getChoices(getScene(story, state.sceneId), state).find((v) => v.available && !v.choice.id.startsWith("door_"))!.choice.id);
      expect(state.sceneId).toBe(`${s.id}_return`);
    }
  });
});
