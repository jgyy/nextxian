import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { gainCultivation, REALMS, realmProgress, reachedFlag } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { DEFAULT_HERO, type Hero } from "@/engine/hero";
import { CUSP, PRACTICES, practiceSummary, stretchOf, type Practice } from "@/engine/practice";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { parseConditions } from "@/engine/markup";
import { cultivationAssets, cultivationEntrances, cultivationGroups, cultivationItems, cultivationScenarios, SPECS6, WAYSIDES6, retreatGain } from "@/story/cultivation";
import { cultivationDoneFlag, insightFor, practiceFlag, practiceScenarioId, retreatFlag } from "@/story/cultivation/build";
import { PRACTICE_MEMORY } from "@/story/cultivation/lexicon-elder";
import { HUB_MOOD, METHOD_READ } from "@/story/cultivation/lexicon";
import { parsedCultivationRemarks } from "@/story/cultivation/remarks";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = cultivationGroups.flatMap((g) => g.scenes);
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const text = (state: GameState, sceneId: string) => enterScene(story, { ...state, log: [] }, getScene(story, sceneId)).log.map((e) => e.text).join("\n");
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId)!;
const road = "cr_roof_dawn";
const entry = (id: string, a: number) => `${id}_a${a}s0`;
/** Points that put a hero `percent` of the way through `realm`. */
const along = (realm: number, percent: number): Partial<GameState> => {
  const here = REALMS[realm].threshold;
  const next = REALMS[realm + 1].threshold;
  return { realm, cultivation: here + Math.ceil(((next - here) * percent) / 100) };
};
const npc = (patch: Partial<GameState["npc"]>) => ({ ...createGame(story).npc, ...patch });

describe("the Cultivation Roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of twenty-five scenes, and the hubs and ways back", () => {
    expect(WAYSIDES6).toHaveLength(10);
    expect(cultivationGroups).toHaveLength(10);
    expect(SPECS6).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(1000);
    expect(scenes.length + cultivationGroups.length).toBeGreaterThanOrEqual(1020);
    expect(chapters.filter((c) => c.name.startsWith("Cultivation Roads:"))).toHaveLength(10);
    expect(Object.keys(cultivationEntrances)).toHaveLength(10);
  });

  it("opens each wayside from a scene no earlier wave opens from, once, and asks a realm that never falls", () => {
    const earlier = new Set([...Object.keys(waysideEntrances), ...Object.keys(realmEntrances), ...Object.keys(fortuneEntrances), ...Object.keys(daoEntrances), ...Object.keys(witnessEntrances)]);
    for (const origin of Object.keys(cultivationEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_cultivation_")), origin).toHaveLength(1);
    }
    const realms = WAYSIDES6.map((w) => w.realm);
    expect(realms).toEqual([...realms].sort((a, b) => a - b));
    expect(realms[0]).toBe(1);
    expect(realms.at(-1)).toBe(6);
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes and a way back, each within the word cap", () => {
    for (const s of SPECS6) {
      const own = scenes.filter((x) => x.id.startsWith(`${s.id}_`));
      expect(own, s.id).toHaveLength(25);
      for (const x of own) {
        expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(x.choices.length, x.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(x), x.id).not.toMatch(/\{\w+\}/);
        expect(x.title.startsWith("Cultivation Road:") || x.title.startsWith(s.title), x.id).toBe(true);
      }
    }
    for (const x of scenes.filter((y) => y.id.startsWith("wayside_"))) expect(sceneBodyWords(x), x.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("sells one good and leases one holding on every road, with exactly one breakthrough pill on each wayside, for the realm after the road’s", () => {
    expect(Object.keys(cultivationItems)).toHaveLength(40);
    expect(Object.keys(cultivationAssets)).toHaveLength(40);
    WAYSIDES6.forEach((w, n) => {
      const pills = SPECS6.slice(n * 4, n * 4 + 4).filter((s) => s.ware.kind === "pill");
      expect(pills, w.id).toHaveLength(1);
      const next = Math.min(w.realm + 1, REALMS.length - 1);
      expect(story.items![`${pills[0].id}_ware`].aid, w.id).toBe(next);
      expect(pills[0].ware.blurb, w.id).toContain(REALMS[next].name);
    });
    for (const s of SPECS6) {
      const asset = story.assets![`${s.id}_hold`];
      expect(asset.income, s.id).toBeGreaterThan(asset.upkeep);
      expect(s.ware.name, s.id).not.toMatch(/^(The|A|An) /);
      expect(s.holding.name, s.id).not.toMatch(/^(The|A|An) /);
      expect(s.ground, s.id).toMatch(/^the /);
    }
  });

  it("writes each road in its own words: every keeper, road, place, ground, good and holding is different, and no keeper has a name already in the story", () => {
    for (const key of ["kname", "id", "place", "ground"] as const) expect(new Set(SPECS6.map((s) => s[key])).size, key).toBe(40);
    expect(new Set(SPECS6.map((s) => s.ware.name)).size).toBe(40);
    expect(new Set(SPECS6.map((s) => s.holding.name)).size).toBe(40);
    const beats = SPECS6.flatMap((s) => [...s.beats.flat(), ...s.deep, s.close, s.intro]);
    expect(new Set(beats).size).toBe(beats.length);
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(cultivationScenarios)]);
    const outside = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).filter((r) => !r.id.includes("cr_")).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    expect(SPECS6.filter((s) => new RegExp(`\\b${s.kname}\\b`).test(outside) || companions.has(s.kname)).map((s) => s.kname)).toEqual([]);
  });

  it("does not clone a sentence from road to road: no twelve-word phrase in more than two roads, no six-word phrase in more than six", () => {
    const grams = (n: number) => {
      const found = new Map<string, Set<string>>();
      for (const s of SPECS6) {
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

  it("keeps the Glass Sea dry and the roads of the road away from the sect’s own words", () => {
    const glass = SPECS6.filter((s) => s.id.startsWith("cr_plate_"));
    const wet = /\b(rain|pond|river|tide|shore|swim|wade|dive|drown|wave)s?\b/i;
    for (const s of glass) {
      const mine = [s.intro, ...s.beats.flat(), ...s.deep, s.close, s.ware.blurb, s.holding.blurb];
      expect(mine.filter((t) => wet.test(t.replace(/\bwater\b/gi, ""))), s.id).toEqual([]);
    }
    const roadSide = SPECS6.slice(16);
    for (const s of roadSide) {
      for (const t of [s.intro, ...s.beats.flat(), ...s.deep, s.close]) expect(t, s.id).not.toMatch(/Law Hall|sect gate/);
    }
  });

  it("counts a road done under its own flag, apart from the Fortune, Dao and Witness Roads", () => {
    const back = scenes.find((s) => s.id === `${road}_return`)!;
    const flags = back.choices.flatMap((c) => (c.effects ?? []).flatMap((e) => (e.kind === "setFlag" ? [e.flag] : [])));
    expect(flags).toContain(cultivationDoneFlag(1, road));
    expect(flags.filter((f) => f.startsWith("fr_done_") || f.startsWith("wr_done_"))).toEqual([]);
  });
});

describe("the four practices", () => {
  const ready = (a: number, patch: Partial<GameState> = {}) => at(entry(road, a), DEFAULT_HERO, { realm: 1, cultivation: 20, decisions: 10, ...patch });

  it("is a choice at the start of one approach each, answered by the Elder at once, not at the report", () => {
    PRACTICES.forEach((practice, a) => {
      const choice = getScene(story, entry(road, a)).choices.find((c) => c.id === practice)!;
      expect(choice, practice).toBeDefined();
      expect(choice.npcScenario, practice).toBe(practiceScenarioId(practice, road));
      expect(story.scenarios[practiceScenarioId(practice, road)], practice).toBeDefined();
    });
    expect(Object.keys(cultivationScenarios)).toHaveLength(40 * 5);
    for (const s of SPECS6) for (const p of PRACTICES) expect(story.scenarios[practiceScenarioId(p, s.id)], `${s.id} ${p}`).toBeDefined();
  });

  it("asks a circuit to be sat by a hero fit for the ground: not below the realm before it, and not more than two above the road", () => {
    // The road asks Qi Condensation, so a Mortal may sit it and a Core Cultivator may not.
    expect(view(ready(0, { realm: 0, cultivation: 0 }), "circulate").available).toBe(true);
    expect(view(ready(0, { realm: 3, cultivation: 400 }), "circulate").available).toBe(true);
    const far = view(ready(0, { realm: 4, cultivation: 900 }), "circulate");
    expect(far.available).toBe(false);
    expect(far.hint).toContain("more than two realms higher");
    const deep = SPECS6.find((s) => s.id === "cr_hush_felt")!;
    const mortal = view(at(entry(deep.id, 0), DEFAULT_HERO, { realm: 1, cultivation: 20 }), "circulate");
    expect(mortal.available).toBe(false);
    expect(mortal.hint).toContain("Core Formation");
  });

  it("gives more cultivation on a deeper road, and the gain is the road’s alone: three plus two for every realm it asks", () => {
    const gain = (id: string, realm: number, cultivation: number) => {
      const s = at(entry(id, 0), DEFAULT_HERO, { realm, cultivation, stats: { qi: 20, karma: 0, insight: 10 } });
      const after = choose(story, s, "circulate");
      return after.cultivation - s.cultivation;
    };
    const shallow = gain("cr_roof_dawn", 1, 40);
    const deep = gain("cr_thresh_lintel", 5, 1900);
    expect(deep).toBeGreaterThan(shallow);
    expect(Math.round(shallow)).toBeGreaterThanOrEqual(3 + 2 * 1);
  });

  it("charges the body for tempering and the mind for comprehension, and gives mastery only to a hero with a Dao", () => {
    expect(view(ready(1, { stats: { qi: 9, karma: 0, insight: 10 } }), "temper").available).toBe(false);
    const hard = choose(story, ready(1, { stats: { qi: 30, karma: 0, insight: 10 } }), "temper");
    expect(hard.stats.qi).toBeLessThan(30);
    expect(hard.flags[practiceFlag("temper", road)]).toBe(true);
    const lacking = insightFor(1) - 1;
    expect(view(ready(2, { stats: { qi: 20, karma: 0, insight: lacking } }), "comprehend").available).toBe(false);
    const swordsman: Hero = { ...DEFAULT_HERO, dao: "sword" };
    const taught = choose(story, at(entry(road, 2), swordsman, { realm: 1, cultivation: 20, stats: { qi: 20, karma: 0, insight: 30 } }), "comprehend");
    expect(taught.daoPoints).toBeGreaterThanOrEqual(3);
    const open = choose(story, ready(2, { stats: { qi: 20, karma: 0, insight: 30 } }), "comprehend");
    expect(open.daoPoints).toBe(0);
  });

  it("lets a hero push at the gate only near a threshold, and carries them over it when the push is made", () => {
    expect(view(ready(3, along(1, 10)), "push").available).toBe(false);
    expect(view(ready(3, along(1, 10)), "push").hint).toContain("three-quarters");
    expect(view(ready(3, along(1, CUSP)), "push").available).toBe(true);
    const near = ready(3, along(1, 85));
    const after = choose(story, near, "push");
    expect(after.cultivation).toBeGreaterThan(near.cultivation);
    expect(after.realm).toBe(2);
    expect(after.flags[reachedFlag(2)]).toBe(true);
    expect(after.log.some((e) => e.kind === "realm")).toBe(true);
  });

  it("holds each practice to once a road", () => {
    for (const [a, practice] of PRACTICES.entries()) {
      const s = ready(a, { ...along(1, 85), stats: { qi: 40, karma: 0, insight: 30 } });
      const done = { ...s, flags: { [`${road}_${{ circulate: "circulated", temper: "tempered", comprehend: "comprehended", push: "pushed" }[practice]}`]: true } };
      expect(view(done, practice).available, practice).toBe(false);
    }
  });

  it("makes the Elder answer in a line that depends on her trust, and moves what she feels", () => {
    const lines = new Set<string>();
    for (const trust of [-60, -20, 0, 30, 70]) {
      const out = choose(story, ready(0, { npc: npc({ trust }) }), "circulate");
      const said = out.log.filter((e) => e.kind === "npc").map((e) => e.text);
      expect(said.length, `trust ${trust}`).toBeGreaterThanOrEqual(1);
      lines.add(said[0]);
      expect(out.history.at(-1)).toBe(practiceScenarioId("circulate", road));
    }
    expect(lines.size).toBe(5);
    const before = ready(1, { stats: { qi: 30, karma: 0, insight: 10 }, npc: npc({ fear: 10 }) });
    expect(choose(story, before, "temper").npc.fear).toBeGreaterThan(before.npc.fear);
    const sage = ready(2, { stats: { qi: 20, karma: 0, insight: 30 }, npc: npc({ trust: 5, suspicion: 30 }) });
    expect(choose(story, sage, "comprehend").npc.suspicion).toBeLessThan(sage.npc.suspicion);
  });

  it("makes her remember: a push on the cusp, a dark karma and a run of pushes each change what she says", () => {
    const base = ready(3, { ...along(1, 80), npc: npc({ trust: 30 }) });
    const plain = choose(story, base, "push").log.filter((e) => e.kind === "npc")[0].text;
    const dark = choose(story, { ...base, stats: { qi: 20, karma: -25, insight: 10 } }, "push").log.filter((e) => e.kind === "npc")[0].text;
    const often = choose(story, { ...base, flags: { [practiceFlag("push", "cr_roof_rain")]: true, [practiceFlag("push", "cr_roof_tile")]: true } }, "push").log.filter((e) => e.kind === "npc")[0].text;
    expect(new Set([plain, dark, often]).size).toBe(3);
    for (const practice of PRACTICES) {
      const sc = story.scenarios[practiceScenarioId(practice as Practice, road)];
      expect(new Set(Object.values(sc.lines)).size, practice).toBe(5);
      expect(sc.memory, practice).toHaveLength(4);
      expect(PRACTICE_MEMORY[practice as Practice]).toHaveLength(4);
    }
  });

  it("never gives two roads the same line, word for word, in any answer of the Elder’s", () => {
    const seen = new Map<string, string>();
    for (const s of SPECS6) {
      for (const practice of PRACTICES) {
        const sc = story.scenarios[practiceScenarioId(practice, s.id)];
        for (const line of [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]) {
          expect(seen.get(line), `${sc.id}: ${line}`).toBeUndefined();
          seen.set(line, sc.id);
        }
      }
    }
  });

  it("reads each practice at the way back and in the report, ahead of the rest", () => {
    const back = (flags: Record<string, boolean>) => text(at(`${road}_return`, DEFAULT_HERO, { flags }), `${road}_return`);
    const plain = back({});
    for (const name of ["circulated", "tempered", "comprehended", "pushed"]) expect(back({ [`${road}_${name}`]: true }), name).not.toBe(plain);
    const report = story.scenarios.REPORT_FORTUNE_CR_ROOF_DAWN;
    expect(new Set(Object.values(report.lines)).size).toBe(5);
    expect(report.memory!.slice(0, 4).map((m) => m.when[0].kind)).toEqual(["flag", "flag", "flag", "flag"]);
  });
});

describe("what the keepers read in the hero’s cultivation", () => {
  it("reads how far through its realm the hero is: early, middle and on the cusp each get their own greeting", () => {
    const greet = (pct: number) => text(at(`${road}_entry`, DEFAULT_HERO, along(1, pct)), `${road}_entry`);
    expect(new Set([5, 50, 90].map(greet)).size).toBe(3);
    expect(stretchOf(10)).toBe("early");
    expect(stretchOf(50)).toBe("middle");
    expect(stretchOf(CUSP)).toBe("cusp");
  });

  it("reads the hero’s pace: quick, slow and plain are told apart", () => {
    const read = (h: Hero, patch: Partial<GameState> = {}) => text(at(`${road}_a0s1`, h, patch), `${road}_a0s1`);
    const plain = read(DEFAULT_HERO);
    // Speed is worked out from the roots, the pack and the purse: a heaven-marked root is quick, and a hero who cannot pay their keep away from the sect is slow.
    const quick = read({ ...DEFAULT_HERO, talent: "heaven" });
    const slow = read(DEFAULT_HERO, { realm: 2, cultivation: 130, wealth: 0, visited: ["departure_dawn"] });
    expect(at(`${road}_a0s1`, { ...DEFAULT_HERO, talent: "heaven" }).speed).toBeGreaterThanOrEqual(130);
    expect(at(`${road}_a0s1`, DEFAULT_HERO, { realm: 2, cultivation: 130, wealth: 0, visited: ["departure_dawn"] }).speed).toBeLessThanOrEqual(85);
    expect(quick).not.toBe(plain);
    expect(slow).not.toBe(plain);
    expect(quick).not.toBe(slow);
  });

  it("remembers a hero who broke into the road’s realm only lately, and not one who has stood there long", () => {
    const base = at(`${road}_a1s3`, DEFAULT_HERO, { ...along(1, 20), decisions: 30 });
    const fresh = { ...base, flags: { [reachedFlag(1)]: true }, flagAt: { [reachedFlag(1)]: 28 } };
    const old = { ...base, flags: { [reachedFlag(1)]: true }, flagAt: { [reachedFlag(1)]: 2 } };
    expect(text(fresh, `${road}_a1s3`)).not.toBe(text(old, `${road}_a1s3`));
    expect(text(old, `${road}_a1s3`)).toBe(text(base, `${road}_a1s3`));
  });

  it("recognises the method each of the six newer beginnings gave the hero", () => {
    expect(Object.keys(METHOD_READ)).toHaveLength(24);
    for (const flag of Object.keys(METHOD_READ)) expect(flag).toMatch(/^og_(cave|furnace|lamp|listener|struck|dream)_m_/);
    const heard = (flag?: string) => text(at(`${road}_a3s1`, DEFAULT_HERO, { flags: flag ? { [flag]: true } : {} }), `${road}_a3s1`);
    const plain = heard();
    for (const flag of Object.keys(METHOD_READ)) expect(heard(flag), flag).not.toBe(plain);
  });
});

describe("the hubs, the retreat and the remarks", () => {
  const hub = WAYSIDES6[0].id;

  it("shows the Elder’s face at the hub: furious, afraid, suspicious and tender each speak, and a stern Elder does not", () => {
    const said = (n: Partial<GameState["npc"]>) => text(at(hub, DEFAULT_HERO, { npc: npc(n) }), hub);
    const faces = [{ trust: -60 }, { fear: 60 }, { suspicion: 70 }, { trust: 90 }].map(said);
    expect(new Set(faces).size).toBe(4);
    expect(faces[0]).toContain(HUB_MOOD.furious[0]);
    expect(faces[3]).toContain(HUB_MOOD.tender[0]);
    expect(said({ trust: 5, fear: 10, suspicion: 20 })).not.toContain(HUB_MOOD.furious[0]);
  });

  it("lets a hero sit one night in the retreat after working a ground, for cultivation that grows with the realm", () => {
    const fresh = at(hub, DEFAULT_HERO, { realm: 1, cultivation: 20 });
    expect(view(fresh, "retreat").available).toBe(false);
    const worked = { ...fresh, flags: { [cultivationDoneFlag(1, road)]: true } };
    expect(view(worked, "retreat").available).toBe(true);
    const sat = choose(story, worked, "retreat");
    expect(sat.cultivation).toBeGreaterThan(worked.cultivation);
    expect(sat.flags[retreatFlag(1)]).toBe(true);
    expect(view(sat, "retreat").available).toBe(false);
    expect(retreatGain(6)).toBeGreaterThan(retreatGain(1));
    expect(sat.sceneId).toBe(hub);
  });

  it("closes the hub on the Elder’s remark once all four roads are done, and not before", () => {
    const four = Object.fromEntries(SPECS6.slice(0, 4).map((s) => [cultivationDoneFlag(1, s.id), true]));
    expect(text(at(hub, DEFAULT_HERO, { flags: four }), hub)).toContain(WAYSIDES6[0].remark);
    expect(text(at(hub, DEFAULT_HERO, { flags: { [cultivationDoneFlag(1, road)]: true } }), hub)).not.toContain(WAYSIDES6[0].remark);
  });

  it("has remarks that read the practices, the roads, the retreats, a realm just entered and the way a beginning taught the hero to breathe", () => {
    const remarks = parsedCultivationRemarks();
    expect(remarks.length).toBeGreaterThanOrEqual(30);
    expect(new Set(remarks.map((r) => r.id)).size).toBe(remarks.length);
    const inStory = new Set((story.remarks ?? []).map((r) => r.id));
    for (const r of remarks) expect(inStory.has(r.id), r.id).toBe(true);
    const kinds = new Set(remarks.flatMap((r) => r.when.map((c) => c.kind)));
    for (const k of ["count", "progress", "since", "flag", "bond"] as const) expect(kinds.has(k), k).toBe(true);
  });
});

describe("the engine that reads cultivation", () => {
  const state = (patch: Partial<GameState>): GameState => ({ ...createGame(story), ...patch });

  it("reads progress through the current realm as a percent, and 100 at the top of the ladder", () => {
    const at50 = state(along(1, 50));
    expect(conditionsHold(parseConditions("progress>=50", "t"), at50)).toBe(true);
    expect(conditionsHold(parseConditions("progress>=60", "t"), at50)).toBe(false);
    expect(conditionsHold(parseConditions("progress<=55", "t"), at50)).toBe(true);
    const top = state({ realm: 7, cultivation: REALMS[7].threshold });
    expect(realmProgress(top)).toBe(1);
    expect(conditionsHold(parseConditions("progress>=100", "t"), top)).toBe(true);
    expect(conditionsHold(parseConditions("progress>=1", "t"), state({ realm: 0, cultivation: 0 }))).toBe(false);
  });

  it("sets a flag on the decision a hero enters a realm, so a scene can tell a hero just risen from one who has long stood there", () => {
    const near = state({ ...along(0, 99), decisions: 12 });
    const after = gainCultivation(near, 5);
    expect(after.realm).toBe(1);
    expect(after.flags[reachedFlag(1)]).toBe(true);
    expect(after.flagAt[reachedFlag(1)]).toBe(12);
    expect(conditionsHold(parseConditions("since:reached_realm_1<=3", "t"), { ...after, decisions: 14 })).toBe(true);
    expect(conditionsHold(parseConditions("since:reached_realm_1<=3", "t"), { ...after, decisions: 20 })).toBe(false);
  });

  it("counts the practices from the flags they set", () => {
    const flags = { [practiceFlag("circulate", "a")]: true, [practiceFlag("circulate", "b")]: true, [practiceFlag("push", "a")]: true, [cultivationDoneFlag(1, "a")]: true };
    expect(practiceSummary(flags)).toEqual({ roads: 1, circulated: 2, tempered: 0, comprehended: 0, pushed: 1 });
  });
});

describe("walking every Cultivation Road", () => {
  it("lets a hero of the road’s realm walk each approach, the hidden route and the inner room, and leave by every door", () => {
    for (const s of SPECS6) {
      const w = WAYSIDES6[Math.floor(SPECS6.indexOf(s) / 4)];
      const hero = { ...at(`${s.id}_entry`, DEFAULT_HERO, { realm: w.realm, cultivation: REALMS[w.realm].threshold + 5, wealth: 400, stats: { qi: 60, karma: 0, insight: 60 }, decisions: 12 }) };
      for (let a = 0; a < 4; a++) {
        let g: GameState = choose(story, hero, `approach_${a}`);
        for (let step = 0; step < 6 && !g.sceneId.endsWith("_return"); step++) g = choose(story, g, getChoices(getScene(story, g.sceneId), g).find((v) => v.available && !["circulate", "temper", "comprehend", "push"].includes(v.choice.id))!.choice.id);
        expect(g.sceneId, `${s.id} approach ${a}`).toBe(`${s.id}_return`);
        for (const c of getScene(story, g.sceneId).choices.filter((x) => getChoices(getScene(story, g.sceneId), g).find((v) => v.choice.id === x.id)!.available)) expect(story.scenes[c.next], `${s.id}:${c.id}`).toBeDefined();
      }
    }
  });
});
