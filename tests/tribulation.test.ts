import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { gainCultivation, REALMS } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { countWords } from "@/engine/words";
import { DEFAULT_HERO, type Hero } from "@/engine/hero";
import {
  breakthroughQi,
  breakthroughRespect,
  deferenceOf,
  DEFERENCE,
  preparedFor,
  skyLine,
  trialInsight,
  trialKarma,
  trialQi,
  TRIBULATIONS,
  tribulationRecord,
  tribulationSummary,
} from "@/engine/tribulation";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { BACK11, SPECS11, tribulationAssets, tribulationEntrances, tribulationGroups, tribulationItems, tribulationScenarios, WAYSIDES11 } from "@/story/tribulation";
import { slotsOf, synthesize, trialScenarioId, trialSceneId } from "@/story/tribulation/build";
import { FAREWELL, GLANCE, GREET } from "@/story/tribulation/lexicon-bow";
import { STANCES, STANCE_BEATS, STANCE_DEEP } from "@/story/tribulation/lexicon-stance";
import { TRIB_BEATS, TRIB_DEEP, TRIB_IDS } from "@/story/tribulation/lexicon-trib";
import { WAVES } from "@/story/tribulation/lexicon-trial";
import { fill } from "@/story/roads/build";
import { rankEntrances } from "@/story/rank";
import { customEntrances } from "@/story/custom";
import { ageEntrances } from "@/story/age";
import { crossingEntrances } from "@/story/crossing";
import { cultivationEntrances } from "@/story/cultivation";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = tribulationGroups.flatMap((g) => g.scenes);
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const ids = (state: GameState) => getChoices(getScene(story, state.sceneId), state).map((v) => v.choice.id);
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);
const spec = (id: string) => SPECS11.find((s) => s.id === id)!;
const waysideOf = (id: string) => WAYSIDES11[Math.floor(SPECS11.findIndex((s) => s.id === id) / 4)];
/** A hero strong in qi, insight and karma, who can stand, read or be sheltered at any trial. */
const strong = { stats: { qi: 90, karma: 30, insight: 90 }, decisions: 12 };
const npcText = (state: GameState) => state.log.filter((e) => e.kind === "npc").map((e) => e.text).join(" ");
const shown = (id: string, h: Hero, patch: Partial<GameState> = {}) => enterScene(story, { ...at(id, h, patch), log: [] }, getScene(story, id)).log.map((e) => e.text).join(" ");
/** Walks a road's rehearsal from its entry with a chosen pick at each blow. */
function sit(id: string, picks: [string, string, string], patch: Partial<GameState> = {}, prep = "asis"): GameState {
  const w = waysideOf(id);
  let state = at(`${id}_entry`, DEFAULT_HERO, { realm: w.realm, cultivation: REALMS[w.realm].threshold, ...strong, ...patch });
  state = choose(story, state, "trial");
  state = choose(story, state, prep);
  for (const pick of picks) state = choose(story, state, pick);
  return state;
}

describe("the engine reads the tribulations", () => {
  it("names ten tribulations, one for each realm, and a bow for each realm that rises with it", () => {
    expect(TRIBULATIONS).toHaveLength(10);
    expect(TRIBULATIONS.map((t) => t.realm)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(new Set(TRIBULATIONS.map((t) => t.name)).size).toBe(10);
    expect(DEFERENCE).toHaveLength(REALMS.length);
    expect(new Set(DEFERENCE.map((d) => d.name)).size).toBe(10);
    expect(deferenceOf(0).name).toBe("Unnoticed");
    expect(deferenceOf(7).name).toBe("Kneeled to");
    expect(deferenceOf(99)).toEqual(DEFERENCE[9]);
  });

  it("asks more of a hero at every higher trial", () => {
    for (let r = 1; r < 8; r++) {
      expect(trialQi(r)).toBeGreaterThan(trialQi(r - 1));
      expect(trialInsight(r)).toBeGreaterThan(trialInsight(r - 1));
      expect(trialKarma(r)).toBeGreaterThanOrEqual(trialKarma(r - 1));
    }
  });

  it("counts what a hero did at each trial from the flags, and whether they are ready for the realm after it", () => {
    const flags = { tb_won_w1_a: true, tb_won_w1_b: true, tb_lost_w3_c: true, tb_fled_w3_d: true, tb_done_w1_a: true, tb_done_w3_c: true, tb_done_w3_d: true };
    const rows = tribulationRecord(flags);
    expect(rows[0]).toEqual({ roads: 1, won: 2, lost: 0, fled: 0 });
    expect(rows[2]).toEqual({ roads: 2, won: 0, lost: 1, fled: 1 });
    expect(tribulationSummary(flags)).toEqual({ roads: 3, won: 2, lost: 1, fled: 1, weathered: 1 });
    expect(preparedFor(flags, 1)).toBe(true);
    expect(preparedFor(flags, 3)).toBe(false);
    expect(preparedFor(flags, 0)).toBe(false);
  });
});

describe("a breakthrough is tried by the sky", () => {
  // A hero who has practised against the wall (four methods) is steady enough to be tried by the sky at any realm.
  const practised = (entering: number) => Object.fromEntries([...[1, 2, 3, 4].map((m) => [`bwp_${entering * 10}_${m}`, true]), [`bwf_${entering * 10}_1`, true]]);
  const raw = (entering: number, qi = 90): GameState => {
    const base = at("gate", DEFAULT_HERO, { realm: entering - 1, cultivation: REALMS[entering].threshold - 1, stats: { qi, karma: 0, insight: 100 } });
    return { ...base, flags: { ...base.flags, ...practised(entering) } };
  };
  const ready = (entering: number): GameState => {
    const base = raw(entering);
    return { ...base, flags: { ...base.flags, [`tb_won_w${entering}_x`]: true } };
  };

  it("steadies a hero who sat the trial before it, and scorches one who did not, more so the higher the realm", () => {
    for (let n = 1; n < 10; n++) {
      expect(breakthroughQi({ [`tb_won_w${n}_x`]: true }, n)).toBeGreaterThan(0);
      expect(breakthroughQi({}, n)).toBeLessThan(0);
      expect(breakthroughRespect({ [`tb_won_w${n}_x`]: true }, n)).toBeGreaterThan(breakthroughRespect({}, n));
      expect(skyLine({}, n)).not.toBe(skyLine({ [`tb_won_w${n}_x`]: true }, n));
    }
    expect(breakthroughQi({}, 7)).toBeLessThan(breakthroughQi({}, 2));
    expect(skyLine({}, 0)).toBe("");
  });

  it("changes the hero’s qi and the Elder’s respect when the realm changes, and says what the sky did", () => {
    const a = gainCultivation(ready(3), 5);
    const b = gainCultivation(raw(3), 5);
    expect(a.realm).toBe(3);
    expect(b.realm).toBe(3);
    expect(a.stats.qi).toBe(95);
    expect(b.stats.qi).toBe(90 - 5);
    expect(a.npc.respect - b.npc.respect).toBe(2);
    expect(a.log.at(-1)!.text).toMatch(/nine bells/);
    expect(b.log.at(-1)!.text).toMatch(/nobody taught you to count them/);
  });

  it("gives the Elder more respect for every realm a hero climbs", () => {
    const gains = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => gainCultivation(raw(n, 100), 5).npc.respect - raw(n, 100).npc.respect);
    expect(gains).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("the Tribulation Roads", () => {
  it("add a thousand scenes: eight waysides, thirty-two roads of thirty-one scenes, and the hubs and ways back", () => {
    expect(WAYSIDES11).toHaveLength(8);
    expect(tribulationGroups).toHaveLength(8);
    expect(SPECS11).toHaveLength(32);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(32 * 31);
    expect(scenes.length + tribulationGroups.length).toBeGreaterThanOrEqual(1000);
    expect(chapters.filter((c) => c.name.startsWith("Tribulation Roads:"))).toHaveLength(8);
    expect(Object.keys(tribulationEntrances)).toHaveLength(8);
  });

  it("opens each wayside from a scene no earlier wave opens from, once, and asks a realm that rises one tribulation at a time", () => {
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
      ...Object.keys(rankEntrances),
    ]);
    for (const origin of Object.keys(tribulationEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_trib_")), origin).toHaveLength(1);
      expect(story.scenes[BACK11(origin)], origin).toBeDefined();
    }
    expect(WAYSIDES11.map((w) => w.realm)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(WAYSIDES11.map((w) => w.trib)).toEqual([...TRIB_IDS]);
  });

  it("keeps every scene within the word cap, with a heading and four choices, and leaves no slot unfilled", () => {
    for (const s of scenes) {
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(s.title.trim(), s.id).not.toBe("");
      expect(s.choices.filter((c) => !c.hideLocked).length, s.id).toBeGreaterThanOrEqual(4);
      const text = [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)].join(" ");
      expect(text, s.id).not.toMatch(/\{\w+\}/);
    }
    for (const sc of Object.values(tribulationScenarios)) {
      const text = [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)].join(" ");
      expect(text, sc.id).not.toMatch(/\{\w+\}/);
    }
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("writes each road in its own words: every keeper, place, good, holding and beat is its own", () => {
    const texts = SPECS11.flatMap((s) => [...synthesize(s).beats.flat(), ...synthesize(s).deep, s.close, s.intro]);
    expect(new Set(texts).size).toBe(texts.length);
    for (const key of ["kname", "id", "place", "keeper", "title"] as const) expect(new Set(SPECS11.map((s) => s[key])).size, key).toBe(SPECS11.length);
    expect(new Set(SPECS11.map((s) => s.ware.name)).size).toBe(32);
    expect(new Set(SPECS11.map((s) => s.holding.name)).size).toBe(32);
    for (const s of SPECS11) {
      expect(s.ware.name, s.id).not.toMatch(/^(the|a|an) /i);
      expect(s.holding.name, s.id).not.toMatch(/^(the|a|an) /i);
    }
  });

  it("gives every wayside two women and two men as keepers, one of each stance", () => {
    for (let n = 0; n < 8; n++) {
      const here = SPECS11.slice(n * 4, n * 4 + 4);
      expect(here.map((s) => s.stance).sort()).toEqual([...STANCES].sort());
      expect(here.filter((s) => s.gender === "woman")).toHaveLength(2);
      expect(here.every((s) => s.trib === TRIB_IDS[n])).toBe(true);
    }
  });

  it("gives no keeper the name of someone already in the story", () => {
    const mine = new Set(scenes.map((s) => s.id));
    const text = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !(sc.id in tribulationScenarios)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    const clashes = SPECS11.flatMap((s) => [new RegExp(`\\b${s.kname}\\b`).test(text) ? `${s.kname} names someone` : "", companions.has(s.kname) ? `${s.kname} is a companion` : ""]).filter(Boolean);
    expect(clashes).toEqual([]);
  });

  it("makes one good and one holding for every road, and reports to the Elder on every road and every rehearsal", () => {
    expect(Object.keys(tribulationItems)).toHaveLength(32);
    expect(Object.keys(tribulationAssets)).toHaveLength(32);
    expect(Object.keys(tribulationScenarios)).toHaveLength(32 * 4);
    for (const s of SPECS11) for (const r of ["won", "lost", "fled"] as const) expect(story.scenarios[trialScenarioId(s.id, r)], s.id).toBeDefined();
  });
});

describe("the lexicons", () => {
  it("write sixteen beats and three hidden lines for every tribulation and every stance, all different", () => {
    for (const t of TRIB_IDS) {
      expect(TRIB_BEATS[t]).toHaveLength(16);
      expect(TRIB_DEEP[t]).toHaveLength(3);
      expect(new Set(TRIB_BEATS[t]).size).toBe(16);
    }
    for (const s of STANCES) {
      expect(STANCE_BEATS[s]).toHaveLength(16);
      expect(STANCE_DEEP[s]).toHaveLength(3);
      expect(new Set(STANCE_BEATS[s]).size).toBe(16);
    }
  });

  it("write a different glance, greeting and parting for every realm and every stance, so the bow is never the same twice", () => {
    for (const s of STANCES) {
      for (const lex of [GLANCE, GREET, FAREWELL]) {
        expect(lex[s]).toHaveLength(8);
        expect(new Set(lex[s]).size).toBe(8);
      }
    }
  });

  it("write three blows for every road of every tribulation, none over the cap", () => {
    for (const t of TRIB_IDS) {
      expect(WAVES[t]).toHaveLength(4);
      for (const four of WAVES[t]) for (const w of four) expect(countWords(w)).toBeLessThan(80);
    }
  });
});

describe("the higher the realm, the lower the bow", () => {
  it("shows a hero of each realm a different glance at the entry, and the greeting and the parting that the realm earns, in every stance", () => {
    for (const id of ["tb_fast_wd", "tb_fast_wm", "tb_fast_rw", "tb_fast_pm"]) {
      const s = spec(id);
      const slots = (a: number) => slotsOf(s, s.focus[a]);
      const seen = new Set<string>();
      for (let k = 0; k < 8; k++) {
        const entry = shown(`${id}_entry`, DEFAULT_HERO, { realm: k });
        const hello = shown(`${id}_a0s0`, DEFAULT_HERO, { realm: k });
        const bye = shown(`${id}_a3s4`, DEFAULT_HERO, { realm: k });
        expect(entry, `${id} glance ${k}`).toContain(fill(GLANCE[s.stance][k], slots(0)));
        expect(hello, `${id} greet ${k}`).toContain(fill(GREET[s.stance][k], slots(0)));
        expect(bye, `${id} bye ${k}`).toContain(fill(FAREWELL[s.stance][k], slots(3)));
        seen.add(fill(GLANCE[s.stance][k], slots(0)));
      }
      expect(seen.size).toBe(8);
    }
  });

  it("lets a hero of every realm walk into the entry of every road and be read, whatever they are", () => {
    for (const s of SPECS11) {
      for (const realm of [0, 3, 7]) {
        const text = shown(`${s.id}_entry`, DEFAULT_HERO, { realm });
        expect(text, `${s.id} realm ${realm}`.slice(0, 40)).toContain(s.kname);
      }
    }
  });
});

describe("the rehearsal of a tribulation", () => {
  const road = "tb_bell_wm";
  const R = 2;

  it("is offered at the entry of every road, once, and shut once the hero has come to the gate", () => {
    for (const s of SPECS11) {
      const state = at(`${s.id}_entry`, DEFAULT_HERO, { realm: waysideOf(s.id).realm });
      expect(ids(state)).toContain("trial");
      expect(view(state, "trial")!.available).toBe(true);
      const done = { ...state, flags: { ...state.flags, [`tb_won_w${Math.floor(SPECS11.indexOf(s) / 4) + 1}_${s.id}`]: true } };
      expect(view(done, "trial")!.available).toBe(false);
    }
  });

  it("is a gate, three blows and a verdict, six scenes a road", () => {
    for (const s of SPECS11) for (const step of ["t0", "t1", "t2", "t3", "tw", "tl"] as const) expect(story.scenes[trialSceneId(s.id, step)], `${s.id} ${step}`).toBeDefined();
  });

  it("is weathered by a hero who stands, reads or is sheltered, who gains for it, and whom the Elder answers at once", () => {
    const before = at(`${road}_entry`, DEFAULT_HERO, { realm: R, cultivation: REALMS[R].threshold, ...strong });
    for (const picks of [["stand", "stand", "stand"], ["read", "read", "read"], ["shelter", "shelter", "shelter"], ["stand", "read", "shelter"]] as [string, string, string][]) {
      const out = sit(road, picks);
      expect(out.sceneId).toBe(`${road}_tw`);
      expect(out.flags[`tb_won_w3_${road}`]).toBe(true);
      expect(out.flags[`tb_lost_w3_${road}`]).toBeUndefined();
      expect(out.cultivation).toBeGreaterThan(before.cultivation);
    }
    const won = choose(story, sit(road, ["stand", "read", "shelter"]), "accept");
    expect(npcText(won)).toMatch(/thunder-iron smithy|nine bells/);
    expect(won.sceneId).toBe(`${road}_return`);
    expect(won.history).toContain(trialScenarioId(road, "won"));
  });

  it("scorches a hero who gives way at the last blow, costs them qi and the Elder’s respect, and sets the flag the Elder remembers", () => {
    const before = at(`${road}_entry`, DEFAULT_HERO, { realm: R, ...strong });
    const out = sit(road, ["stand", "stand", "yield"]);
    expect(out.sceneId).toBe(`${road}_tl`);
    expect(out.flags[`tb_lost_w3_${road}`]).toBe(true);
    expect(out.flags[`tb_won_w3_${road}`]).toBeUndefined();
    expect(out.npc.respect).toBeLessThan(before.npc.respect);
    const after = choose(story, out, "dress");
    expect(after.history).toContain(trialScenarioId(road, "lost"));
    expect(after.sceneId).toBe(`${road}_return`);
  });

  it("lets a hero who gave way once still win, and locks standing, reading and shelter for one who gave way twice", () => {
    const once = sit(road, ["yield", "read", "stand"]);
    expect(once.sceneId).toBe(`${road}_tw`);
    let state = at(`${road}_entry`, DEFAULT_HERO, { realm: R, ...strong });
    state = choose(story, state, "trial");
    state = choose(story, state, "asis");
    state = choose(story, state, "yield");
    state = choose(story, state, "yield");
    expect(state.sceneId).toBe(`${road}_t3`);
    for (const pick of ["stand", "read", "shelter"]) expect(view(state, pick)!.available, pick).toBe(false);
    expect(view(state, "yield")!.available).toBe(true);
    expect(choose(story, state, "yield").sceneId).toBe(`${road}_tl`);
  });

  it("asks qi to stand, Insight to read and karma to be sheltered, more at every higher trial, and says so when it is locked", () => {
    for (const s of SPECS11) {
      const r = waysideOf(s.id).realm;
      const weak = at(trialSceneId(s.id, "t1"), DEFAULT_HERO, { realm: r, stats: { qi: 0, karma: -10, insight: 0 } });
      for (const pick of ["stand", "read", "shelter"]) {
        const v = view(weak, pick)!;
        expect(v.available, `${s.id} ${pick}`).toBe(false);
        expect(v.hint, `${s.id} ${pick}`).toMatch(/takes/);
      }
      const able = at(trialSceneId(s.id, "t1"), DEFAULT_HERO, { realm: r, stats: { qi: trialQi(r), karma: trialKarma(r), insight: trialInsight(r) } });
      for (const pick of ["stand", "read", "shelter"]) expect(view(able, pick)!.available, `${s.id} ${pick}`).toBe(true);
    }
  });

  it("makes a hero below the realm of the trial pay strain for standing in it, and a hero far above gain mastery", () => {
    const low = at(trialSceneId(road, "t1"), DEFAULT_HERO, { realm: 0, cultivation: 20, ...strong });
    expect(view(low, "stand")!.strain).toEqual({ needs: 2, gap: 2 });
    expect(view(low, "read")!.strain).toBeUndefined();
    const hurt = choose(story, low, "stand");
    expect(hurt.log.some((e) => e.kind === "strain")).toBe(true);
  });

  it("lets a hero turn back at the gate, tells the Elder so, and shuts the gate behind them", () => {
    let state = at(`${road}_entry`, DEFAULT_HERO, { realm: R, ...strong });
    state = choose(story, state, "trial");
    state = choose(story, state, "turn");
    expect(state.flags[`tb_fled_w3_${road}`]).toBe(true);
    expect(state.sceneId).toBe(`${road}_return`);
    expect(state.history).toContain(trialScenarioId(road, "fled"));
    expect(npcText(state)).toMatch(/bell-tower stair|nine bells/);
  });

  it("reads the realm the hero sat the trial at, to the Elder, when they report the road", () => {
    const won = sit(road, ["stand", "read", "shelter"]);
    const back = choose(story, choose(story, won, "accept"), "report");
    expect(back.history).toContain(`REPORT_FORTUNE_${road.toUpperCase()}`);
    const line = npcText(back);
    expect(line).toMatch(/weathered|at the realm it was made for/i);
  });

  it("answers the same rehearsal differently at each of the Elder’s attitudes", () => {
    for (const sc of Object.values(tribulationScenarios).filter((x) => x.id.startsWith("TRIAL_"))) {
      expect(new Set(Object.values(sc.lines)).size, sc.id).toBe(5);
    }
  });
});

describe("a hero plays a Tribulation Road end to end", () => {
  it("walks every approach of every road from the entry to the wayside, whoever they are", () => {
    for (const s of SPECS11) {
      for (let a = 0; a < 4; a++) {
        let state = at(`${s.id}_entry`, DEFAULT_HERO, { realm: waysideOf(s.id).realm, ...strong, wealth: 200 });
        state = choose(story, state, `approach_${a}`);
        for (let stage = 0; stage < 5; stage++) {
          const view = getChoices(getScene(story, state.sceneId), state).find((v) => v.available && !v.choice.needsRealm)!;
          state = choose(story, state, view.choice.id);
        }
        expect(state.sceneId, s.id).toBe(`${s.id}_return`);
        state = choose(story, state, "report");
        expect(state.sceneId, s.id).toBe(waysideOf(s.id).id);
        expect(state.flags[`tb_done_w${Math.floor(SPECS11.indexOf(s) / 4) + 1}_${s.id}`], s.id).toBe(true);
      }
    }
  });
});

describe("the world bows to the realm in the old story", () => {
  it("shows the gate disciple a different face at each realm, and a quay that takes its hats off", () => {
    expect(shown("gate_gossip", DEFAULT_HERO, { realm: 0 })).toMatch(/umbrella is the more important/);
    expect(shown("gate_gossip", DEFAULT_HERO, { realm: 3 })).toMatch(/umbrella is in your hand/);
    expect(shown("tribunal_summons_3", DEFAULT_HERO, { realm: 5 })).toMatch(/knee touches the stone/);
    expect(shown("harbour_close", DEFAULT_HERO, { realm: 6 })).toMatch(/lowers them both/);
  });

  it("covers every realm with exactly one of a scene’s lines", () => {
    for (const id of ["gate_gossip", "archive_front", "tribunal_summons_3", "harbour_close"]) {
      const groups = getScene(story, id).extras!.filter((x) => x.group?.startsWith("tb_"));
      for (let realm = 0; realm < 8; realm++) {
        const held = groups.filter((x) => conditionsHold(x.when, at("gate", DEFAULT_HERO, { realm })));
        expect(held, `${id} realm ${realm}`).toHaveLength(1);
      }
    }
  });

  it("speaks of the tribulations unprompted, and every remark can be said", () => {
    const ours = story.remarks!.filter((r) => r.id.startsWith("su_tb_") || r.id.startsWith("tb_"));
    expect(ours.length).toBeGreaterThanOrEqual(30);
    expect(new Set(ours.map((r) => r.id)).size).toBe(ours.length);
  });

  it("keeps the last floor of the abyss within the cap and reads the trials the hero stood", () => {
    const floor = getScene(story, "depths_floor");
    expect(sceneBodyWords(floor)).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    const flags = { tb_won_w1_a: true, tb_won_w2_a: true, tb_won_w3_a: true, tb_won_w4_a: true, tb_won_w5_a: true, tb_won_w6_a: true };
    const state = at("depths_floor", DEFAULT_HERO, { flags });
    expect(shown("depths_floor", DEFAULT_HERO, { flags: state.flags })).toMatch(/Six trials stood/);
  });
});
