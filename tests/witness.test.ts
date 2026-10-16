import { readFileSync } from "node:fs";
import { ROAD_TOP } from "@/engine/realms";
import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { DEFAULT_HERO, type Hero } from "@/engine/hero";
import { REPUTE_SHIFT, reputeShiftLine, tierFor } from "@/engine/npc";
import { DEEDS, REPUTE_DARK, REPUTE_KIND, reputeOf, witnessSummary } from "@/engine/witness";
import { MAX_SCENE_WORDS, sceneBodyWords } from "@/engine/validate";
import { witnessAssets, witnessEntrances, witnessGroups, witnessItems, witnessScenarios, SPECS5, WAYSIDES5 } from "@/story/witness";
import { pricesFor } from "@/story/fortune/build";
import { deedFlag, deedScenarioId, witnessDoneFlag } from "@/story/witness/build";
import { parsedWitnessRemarks } from "@/story/witness/remarks";
import { HUB_MOOD } from "@/story/witness/lexicon";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = witnessGroups.flatMap((g) => g.scenes);
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const text = (state: GameState, sceneId: string) => enterScene(story, { ...state, log: [] }, getScene(story, sceneId)).log.map((e) => e.text).join("\n");
const road = "wr_bench_clerk";
const roadIndex = (id: string) => SPECS5.findIndex((s) => s.id === id);
const npc = (patch: Partial<GameState["npc"]>) => ({ ...createGame(story).npc, ...patch });
const tones = (tone: GameState["tones"][number], n: number): GameState["tones"] => Array.from({ length: n }, () => tone);
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId)!;

describe("the Witness Roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of twenty-five scenes, and the hubs and ways back", () => {
    expect(WAYSIDES5).toHaveLength(10);
    expect(witnessGroups).toHaveLength(10);
    expect(SPECS5).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(1000);
    expect(scenes.length + witnessGroups.length).toBeGreaterThanOrEqual(1020);
    expect(chapters.filter((c) => c.name.startsWith("Witness Roads:"))).toHaveLength(10);
    expect(Object.keys(witnessEntrances)).toHaveLength(10);
  });

  it("opens each wayside from a scene no earlier wave opens from, so no scene gains a fifth side road", () => {
    const earlier = new Set([...Object.keys(waysideEntrances), ...Object.keys(realmEntrances), ...Object.keys(fortuneEntrances), ...Object.keys(daoEntrances)]);
    for (const origin of Object.keys(witnessEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_")), origin).toHaveLength(1);
    }
    expect(WAYSIDES5.map((w) => w.realm)).toEqual([...WAYSIDES5.map((w) => w.realm)].sort((a, b) => a - b));
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes and a way back, each within the word cap", () => {
    for (const spec of SPECS5) {
      const own = scenes.filter((s) => s.id.startsWith(`${spec.id}_`));
      expect(own, spec.id).toHaveLength(25);
      for (const s of own) {
        expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
        expect(s.title.startsWith("Witness Road:") || s.title.startsWith(spec.title), s.id).toBe(true);
      }
    }
    for (const s of scenes.filter((x) => x.id.startsWith("wayside_"))) expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
  });

  it("sells one good and leases one holding on every road, with exactly one breakthrough pill on each wayside, for the realm after the road’s", () => {
    expect(Object.keys(witnessItems)).toHaveLength(40);
    expect(Object.keys(witnessAssets)).toHaveLength(40);
    WAYSIDES5.forEach((w, n) => {
      const pills = SPECS5.slice(n * 4, n * 4 + 4).filter((s) => s.ware.kind === "pill");
      expect(pills, w.id).toHaveLength(1);
      expect(story.items![`${pills[0].id}_ware`].aid, w.id).toBe(Math.min(w.realm + 1, ROAD_TOP));
      expect(pills[0].ware.blurb, w.id).toContain(REALMS[Math.min(w.realm + 1, ROAD_TOP)].name);
    });
    for (const spec of SPECS5) {
      const asset = story.assets![`${spec.id}_hold`];
      expect(asset.income, spec.id).toBeGreaterThan(asset.upkeep);
      expect(spec.ware.name, spec.id).not.toMatch(/^(The|A|An) /);
      expect(spec.holding.name, spec.id).not.toMatch(/^(The|A|An) /);
      expect(spec.ledger, spec.id).toMatch(/^the /);
    }
  });

  it("writes every road in its own words: no two beats alike, every keeper’s name its own and new to the story", () => {
    const texts = SPECS5.flatMap((s) => [...s.beats.flat(), ...s.deep, s.close, s.intro]);
    expect(new Set(texts).size).toBe(texts.length);
    for (const key of ["kname", "id", "place", "ledger"] as const) expect(new Set(SPECS5.map((s) => s[key])).size, key).toBe(40);
    expect(new Set(SPECS5.map((s) => s.ware.name)).size).toBe(40);
    expect(new Set(SPECS5.map((s) => s.holding.name)).size).toBe(40);
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(witnessScenarios)]);
    const outside = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).filter((r) => !r.id.includes("wit")).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    const clashes = SPECS5.filter((s) => new RegExp(`\\b${s.kname}\\b`).test(outside) || companions.has(s.kname)).map((s) => s.kname);
    expect(clashes).toEqual([]);
  });

  it("does not clone a sentence from road to road: no twelve-word phrase in more than two roads, no six-word phrase in more than six", () => {
    const grams = (n: number) => {
      const found = new Map<string, Set<string>>();
      for (const s of SPECS5) {
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

  it("counts a road done under its own flag, apart from the Fortune and Dao Roads", () => {
    const back = scenes.find((s) => s.id === `${road}_return`)!;
    const flags = back.choices.flatMap((c) => (c.effects ?? []).flatMap((e) => (e.kind === "setFlag" ? [e.flag] : [])));
    expect(flags).toContain(witnessDoneFlag(1, road));
    expect(flags.filter((f) => f.startsWith("fr_done_"))).toEqual([]);
  });
});

describe("the four deeds", () => {
  const entry = (id: string, a: number) => `${id}_a${a}s0`;
  const ready = (a: number, patch: Partial<GameState> = {}) => at(entry(road, a), DEFAULT_HERO, { realm: 1, wealth: 60, decisions: 10, ...patch });

  it("is a choice at the start of one approach each, answered by the Elder at once, not at the report", () => {
    DEEDS.forEach((deed, a) => {
      const choice = getScene(story, entry(road, a)).choices.find((c) => c.id === deed)!;
      expect(choice, deed).toBeDefined();
      expect(choice.npcScenario, deed).toBe(deedScenarioId(deed, road));
      expect(story.scenarios[deedScenarioId(deed, road)], deed).toBeDefined();
    });
    expect(Object.keys(witnessScenarios)).toHaveLength(40 * 5);
  });

  it("lets anyone give her name, once a road, asks a conscience before there is anything to confess, and reaches every tier of her trust", () => {
    expect(view(ready(0, { npc: npc({ trust: -60 }) }), "vouch").available).toBe(true);
    expect(view(ready(0, { flags: { [`${road}_vouched`]: true } }), "vouch").available).toBe(false);
    expect(view(ready(0, { flags: { [`${road}_vouched`]: true } }), "vouch").hint).toContain("already");
    expect(view(ready(1, { stats: { qi: 10, karma: 5, insight: 5 } }), "confess").available).toBe(false);
    expect(view(ready(1, { stats: { qi: 10, karma: -5, insight: 5 } }), "confess").available).toBe(true);
  });

  it("charges for a forgetting, and asks the hero to have walked far enough to be read", () => {
    const cost = pricesFor(1, 0, SPECS5[roadIndex(road)].ware.kind).settle;
    expect(view(ready(2, { wealth: cost - 1 }), "conceal").available).toBe(false);
    const paid = choose(story, ready(2, { wealth: cost + 10 }), "conceal");
    expect(paid.wealth).toBe(10);
    expect(paid.flags[deedFlag("conceal", road)]).toBe(true);
    expect(paid.stats.karma).toBeLessThan(ready(2).stats.karma);
    expect(view(ready(3, { decisions: 2 }), "ask").available).toBe(false);
    expect(view(ready(3), "ask").available).toBe(true);
  });

  it("makes the Elder answer on the spot, in a line that depends on her trust, and moves what she feels", () => {
    const lines = new Set<string>();
    for (const trust of [-60, -20, 0, 30]) {
      const s = ready(0, { npc: npc({ trust }) });
      const out = choose(story, s, "vouch");
      const said = out.log.filter((e) => e.kind === "npc").map((e) => e.text);
      expect(said.length, `trust ${trust}`).toBeGreaterThanOrEqual(1);
      lines.add(said[0]);
      expect(out.history.at(-1)).toBe(deedScenarioId("vouch", road));
    }
    expect(lines.size).toBe(4);
    const before = ready(2, { npc: npc({ suspicion: 20 }) });
    expect(choose(story, before, "conceal").npc.suspicion).toBeGreaterThan(before.npc.suspicion);
    const honest = ready(1, { stats: { qi: 10, karma: -8, insight: 5 }, npc: npc({ trust: 10, suspicion: 30 }) });
    const after = choose(story, honest, "confess");
    expect(after.npc.suspicion).toBeLessThan(honest.npc.suspicion);
    expect(after.npc.trust).toBeGreaterThan(honest.npc.trust);
  });

  it("makes her remember: the same deed lands differently after another one", () => {
    const plain = ready(1, { stats: { qi: 10, karma: -8, insight: 5 }, npc: npc({ trust: 30 }) });
    const hid = { ...plain, flags: { [deedFlag("conceal", "wr_rim_rope")]: true } };
    const lineOf = (s: GameState) => choose(story, s, "confess").log.filter((e) => e.kind === "npc")[0].text;
    expect(lineOf(hid)).not.toBe(lineOf(plain));
    const lied = { ...plain, tones: tones("deceit", 4) };
    expect(lineOf(lied)).not.toBe(lineOf(plain));
    const sc = story.scenarios[deedScenarioId("confess", road)];
    expect(new Set(Object.values(sc.lines)).size).toBe(5);
    expect(sc.memory).toHaveLength(4);
  });

  it("gives every deed on every road five lines of its own and four memories, none word for word the same as another road’s", () => {
    const seen = new Map<string, string>();
    for (const spec of SPECS5) {
      for (const deed of DEEDS) {
        const sc = story.scenarios[deedScenarioId(deed, spec.id)];
        expect(new Set(Object.values(sc.lines)).size, sc.id).toBe(5);
        for (const line of [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]) {
          expect(seen.get(line), `${sc.id}: ${line}`).toBeUndefined();
          seen.set(line, sc.id);
        }
      }
    }
  });

  it("reads each deed at the way back and in the report, ahead of the rest", () => {
    const back = (flags: Record<string, boolean>) => text(at(`${road}_return`, DEFAULT_HERO, { flags }), `${road}_return`);
    const plain = back({});
    for (const name of ["vouched", "confessed", "concealed", "asked"]) expect(back({ [`${road}_${name}`]: true }), name).not.toBe(plain);
    const report = story.scenarios.REPORT_FORTUNE_WR_BENCH_CLERK;
    expect(new Set(Object.values(report.lines)).size).toBe(5);
    expect(report.memory!.slice(0, 4).map((m) => m.when[0].kind)).toEqual(["flag", "flag", "flag", "flag"]);
  });
});

describe("what the keepers read in the hero", () => {
  it("reads the hero’s karma at the door: dark, unwritten and kind each get their own greeting", () => {
    const greet = (karma: number) => text(at(`${road}_entry`, DEFAULT_HERO, { stats: { qi: 10, karma, insight: 5 } }), `${road}_entry`);
    expect(new Set([REPUTE_DARK - 5, 0, REPUTE_KIND + 5].map(greet)).size).toBe(3);
    expect(reputeOf(REPUTE_DARK)).toBe("dark");
    expect(reputeOf(REPUTE_KIND)).toBe("kind");
    expect(reputeOf(0)).toBe("grey");
  });

  it("carries word of the Elder: afraid, suspicious, cold, warm and honoured are told apart", () => {
    const word = (n: Partial<GameState["npc"]>) => text(at(`${road}_a0s2`, DEFAULT_HERO, { npc: npc(n) }), `${road}_a0s2`);
    const readings = [{ fear: 40 }, { suspicion: 50 }, { trust: -20 }, { trust: 45 }, { trust: 75, respect: 45 }].map(word);
    expect(new Set(readings).size).toBe(5);
    expect(word({ trust: 0, suspicion: 20, fear: 10 })).not.toBe(readings[0]);
  });

  it("names the hero’s manner when four of the last eight decisions share a tone, and each tone is named differently", () => {
    const manner = (tone: GameState["tones"][number]) => text(at(`${road}_a1s2`, DEFAULT_HERO, { tones: tones(tone, 5) }), `${road}_a1s2`);
    const all = (["truth", "mercy", "inquiry", "deceit", "force", "quiet"] as const).map(manner);
    expect(new Set(all).size).toBe(6);
    expect(text(at(`${road}_a1s2`, DEFAULT_HERO, { tones: [] }), `${road}_a1s2`)).not.toBe(all[0]);
  });

  it("counts the keepers the hero has already met, in three bands", () => {
    const flagsFor = (n: number) => Object.fromEntries(SPECS5.slice(0, n).map((s, i) => [witnessDoneFlag(Math.floor(i / 4) + 1, s.id), true]));
    const heard = (n: number) => text(at(`${road}_a2s2`, DEFAULT_HERO, { flags: flagsFor(n) }), `${road}_a2s2`);
    expect(new Set([0, 3, 8, 14].map(heard)).size).toBe(4);
  });

  it("reads the hero’s page aloud after they ask, by the tone that dominates it", () => {
    const read = (tone: GameState["tones"][number], asked = true) =>
      text(at(`${road}_a3s1`, DEFAULT_HERO, { flags: asked ? { [`${road}_asked`]: true } : {}, tones: tones(tone, 4) }), `${road}_a3s1`);
    expect(new Set((["truth", "mercy", "inquiry", "deceit", "force", "quiet"] as const).map((t) => read(t))).size).toBe(6);
    expect(read("deceit", false)).not.toBe(read("deceit"));
    expect(text(at(`${road}_a3s1`, DEFAULT_HERO, { flags: { [`${road}_asked`]: true } }), `${road}_a3s1`)).toContain("Pingyi");
  });
});

describe("the hubs and the remarks", () => {
  const hub = WAYSIDES5[0].id;

  it("shows the Elder’s face at the hub: furious, afraid, suspicious and tender each speak, and a stern Elder does not", () => {
    const said = (n: Partial<GameState["npc"]>) => text(at(hub, DEFAULT_HERO, { npc: npc(n) }), hub);
    const faces = [{ trust: -60 }, { fear: 60 }, { suspicion: 70 }, { trust: 90 }].map(said);
    expect(new Set(faces).size).toBe(4);
    expect(faces[0]).toContain(HUB_MOOD.furious[0]);
    expect(faces[3]).toContain(HUB_MOOD.tender[0]);
    for (const line of Object.values(HUB_MOOD).flat()) expect(line.split(/\s+/).length, line).toBeLessThanOrEqual(17);
  });

  it("counts the roads done at each wayside apart, and has the Elder remark when all four are", () => {
    const done = SPECS5.slice(0, 4).reduce((flags, s) => ({ ...flags, [witnessDoneFlag(1, s.id)]: true }), {} as Record<string, boolean>);
    expect(text(at(hub, DEFAULT_HERO, { flags: done }), hub)).toContain(WAYSIDES5[0].remark);
    expect(text(at(hub, DEFAULT_HERO, {}), hub)).not.toContain(WAYSIDES5[0].remark);
    const elsewhere = SPECS5.slice(4, 8).reduce((flags, s) => ({ ...flags, [witnessDoneFlag(2, s.id)]: true }), {} as Record<string, boolean>);
    expect(text(at(hub, DEFAULT_HERO, { flags: elsewhere }), hub)).not.toContain(WAYSIDES5[0].remark);
  });

  it("has the Elder and the company comment on what the hero did in front of the keepers, once each, and only a companion who has been met", () => {
    const remarks = parsedWitnessRemarks();
    expect(remarks.length).toBeGreaterThanOrEqual(30);
    expect(new Set(remarks.map((r) => r.id)).size).toBe(remarks.length);
    for (const r of remarks.filter((x) => x.speaker !== undefined && x.speaker !== "elder")) {
      expect(r.when.some((c) => c.kind === "bond"), r.id).toBe(true);
      expect(story.companions![r.speaker!], r.id).toBeDefined();
    }
    const all = ["vouch", "confess", "conceal", "ask"].map((d) => ({ [`wr_${d}_a`]: true }));
    const merged = Object.assign({}, ...all);
    const found = remarks.find((r) => r.id === "su_wit_all_four")!;
    expect(found.when.every((c) => c.kind === "count")).toBe(true);
    const state = at("gate", DEFAULT_HERO, { flags: merged, decisions: 10 });
    const out = choose(story, { ...state, sceneId: "gate", decisions: 10, lastRemark: 0 }, "ask_gossip");
    expect(out.remarked.some((id) => id.startsWith("su_wit_") || id.startsWith("wit_"))).toBe(true);
  });
});

describe("the word on the road panel", () => {
  it("counts roads and deeds from the flags, and reads the hero’s karma", () => {
    const flags = { [witnessDoneFlag(1, "a")]: true, [witnessDoneFlag(2, "b")]: true, [deedFlag("vouch", "a")]: true, [deedFlag("conceal", "a")]: true, [deedFlag("conceal", "b")]: true, unrelated: true };
    expect(witnessSummary(flags, 20)).toEqual({ roads: 2, vouched: 1, confessed: 0, concealed: 2, asked: 0, repute: "kind" });
    expect(witnessSummary({}, -40).repute).toBe("dark");
  });
});

describe("the Elder notices the road’s word", () => {
  it("says a line when the hero’s karma crosses into another band, in either direction, and not when it stays inside one", () => {
    expect(reputeShiftLine(-5, -14)).toBe(REPUTE_SHIFT.dark);
    expect(reputeShiftLine(-14, -5)).toBe(REPUTE_SHIFT.grey);
    expect(reputeShiftLine(10, 13)).toBe(REPUTE_SHIFT.kind);
    expect(reputeShiftLine(0, 8)).toBeUndefined();
    expect(new Set(Object.values(REPUTE_SHIFT)).size).toBe(3);
  });

  it("says it after a choice that takes the karma over the line", () => {
    const edge = at("gate", DEFAULT_HERO, { stats: { qi: 10, karma: -11, insight: 5 }, decisions: 20, lastRemark: 20 });
    const out = choose(story, { ...edge, stats: { ...edge.stats, karma: -11 } }, "side_gate");
    expect(out.log.some((e) => e.kind === "npc" && e.text === REPUTE_SHIFT.dark)).toBe(true);
  });
});

describe("the stage holds still", () => {
  const css = readFileSync("app/globals.css", "utf8");
  const rule = (selector: string) => css.slice(css.indexOf(selector), css.indexOf("}", css.indexOf(selector)));

  it("gives the stage a fixed height on a wide screen, so the options start in the same place on every scene", () => {
    const stage = rule(".stage,\n.backlog {");
    expect(stage).toMatch(/\n\s+height: clamp\(/);
    expect(stage).not.toMatch(/max-height/);
  });

  it("fills the window on a desktop: the stage, the options and the side panels each keep a height of their own and scroll inside it", () => {
    const shell = css.slice(css.indexOf("/* ── A fixed desktop stage"));
    expect(shell).toMatch(/@media \(min-width: 900px\) and \(min-height: 640px\)/);
    expect(shell).toMatch(/\.shell\.play \{\s+height: 100dvh;/);
    expect(shell).toMatch(/\.shell\.play \.choices,\s+\.shell\.play \.ending \{\s+flex: 0 0 var\(--options-height/);
    expect(shell).toMatch(/\.shell\.play \.side \{\s+position: static;/);
    const view = readFileSync("src/components/GameView.tsx", "utf8");
    expect(view).toContain('className="shell play"');
    expect(view).toContain("options.current?.scrollTo({ top: 0 })");
  });

  it("keeps a minimum height on a phone, and brings the page back to the stage after a choice", () => {
    expect(css).toMatch(/@media \(max-width: 600px\)[\s\S]*min-height: 62vh/);
    expect(readFileSync("src/components/GameView.tsx", "utf8")).toContain("scrollIntoView");
  });
});

describe("walking every Witness Road", () => {
  /** A hero fit for the road: its realm, a full purse, sharp enough to find what is hidden, with the Elder’s trust, a conscience to confess and the miles behind them to be read. */
  const walker = (realm: number): GameState => ({
    ...at("x"),
    realm,
    wealth: 600,
    stats: { qi: 50, karma: -6, insight: 30 },
    cultivation: REALMS[realm].threshold,
    npc: npc({ trust: 40 }),
    decisions: 12,
  });

  it("lets a funded hero walk each approach and the hidden route, take the approach’s deed, hear the Elder answer, and leave by every door", () => {
    WAYSIDES5.forEach((w, n) => {
      for (const spec of SPECS5.slice(n * 4, n * 4 + 4)) {
        for (let a = 0; a < 4; a++) {
          for (const route of a === 2 ? ["plain", "hidden"] : ["plain"]) {
            let s: GameState = { ...walker(w.realm), sceneId: `${spec.id}_entry` };
            s = enterScene(story, s, getScene(story, s.sceneId));
            const pick = (id: string) => {
              const v = getChoices(getScene(story, s.sceneId), s).find((x) => x.choice.id === id);
              expect(v, `${s.sceneId} has ${id}`).toBeDefined();
              expect(v!.available, `${s.sceneId}>${id}: ${v!.hint}`).toBe(true);
              s = choose(story, s, id);
              expect(s.wealth, `${s.sceneId} after ${id}`).toBeGreaterThanOrEqual(0);
            };
            pick(`approach_${a}`);
            for (let stage = 0; stage < 5; stage++) {
              expect(s.sceneId).toBe(`${spec.id}_a${a}s${stage}`);
              if (stage === 0) {
                const deed = DEEDS[a];
                const heard = s.history.length;
                pick(deed);
                expect(s.history.length, `${spec.id} ${deed}`).toBeGreaterThan(heard);
                expect(s.flags[deedFlag(deed, spec.id)], `${spec.id} ${deed}`).toBe(true);
                expect(s.sceneId).toBe(`${spec.id}_a${a}s1`);
                continue;
              }
              if (route === "hidden" && stage === 4) pick("hidden_stair");
              else pick(getScene(story, s.sceneId).choices[0].id);
            }
            if (route === "hidden") for (let h = 0; h < 3; h++) pick(getScene(story, s.sceneId).choices[0].id);
            expect(s.sceneId).toBe(`${spec.id}_return`);
            for (const door of ["report", "silent", "rest", "keep"]) {
              const out = choose(story, s, door);
              expect(out.sceneId, `${spec.id} ${door}`).toBe(w.id);
              expect(out.flags[witnessDoneFlag(n + 1, spec.id)], `${spec.id} ${door}`).toBe(true);
            }
          }
        }
      }
    });
  });

  it("lets a hero of any realm and with an empty purse still finish a road, only without the deeds that cost", () => {
    for (const spec of SPECS5.filter((_, i) => i % 5 === 0)) {
      const n = Math.floor(roadIndex(spec.id) / 4);
      let s: GameState = { ...walker(WAYSIDES5[n].realm), wealth: 0, sceneId: `${spec.id}_entry` };
      s = enterScene(story, s, getScene(story, s.sceneId));
      s = choose(story, s, "approach_1");
      for (let stage = 0; stage < 5; stage++) s = choose(story, s, getScene(story, s.sceneId).choices.find((c) => c.id !== "work" && c.id !== "in_kind")!.id);
      expect(s.sceneId).toBe(`${spec.id}_return`);
      expect(tierFor(s.npc.trust)).toBeDefined();
    }
  });
});
