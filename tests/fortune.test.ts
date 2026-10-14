import { describe, expect, it } from "vitest";
import { story, chapters } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { DEFAULT_HERO } from "@/engine/hero";
import { sceneBodyWords, MAX_SCENE_WORDS } from "@/engine/validate";
import { PAYDAY_EVERY } from "@/engine/economy";
import { fortuneAssets, fortuneEntrances, fortuneGroups, fortuneItems, fortuneScenarios, SPECS3, WAYSIDES3 } from "@/story/fortune";
import { KIND_SPEED, pricesFor } from "@/story/fortune/build";
import { reckoningScenes } from "@/story/economy/reckonings";
import { CHOICE_EXTRA, BEAT_EXTRA } from "@/story/roads/lexicon-extra";
import { CHOICE_LABEL, MODE_BEAT } from "@/story/roads/lexicon";
import { CHOICE_LABEL2, MODE_BEAT2 } from "@/story/roads2/lexicon";
import { fits } from "@/story/roads/kinds";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = fortuneGroups.flatMap((g) => g.scenes);
const road = (id: string) => SPECS3.findIndex((s) => s.id === id);
const at = (sceneId: string, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, DEFAULT_HERO), sceneId, log: [], ...patch });

describe("the Fortune Roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of twenty-five scenes, and the hubs and ways back", () => {
    expect(WAYSIDES3).toHaveLength(10);
    expect(fortuneGroups).toHaveLength(10);
    expect(SPECS3).toHaveLength(40);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(1000);
    expect(scenes.length + fortuneGroups.length).toBeGreaterThanOrEqual(1020);
    expect(chapters.filter((c) => c.name.startsWith("Fortune Roads:"))).toHaveLength(10);
    expect(Object.keys(fortuneEntrances)).toHaveLength(10);
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes and a way back, each within the word cap", () => {
    for (const spec of SPECS3) {
      const own = scenes.filter((s) => s.id.startsWith(`${spec.id}_`));
      expect(own, spec.id).toHaveLength(25);
      for (const s of own) {
        expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
      }
    }
  });

  it("writes every road in its own words: no two beats, intros or closes alike, and every keeper’s name its own", () => {
    const texts = SPECS3.flatMap((s) => [...s.beats.flat(), ...s.deep, s.close, s.intro]);
    expect(new Set(texts).size).toBe(texts.length);
    expect(new Set(SPECS3.map((s) => s.kname)).size).toBe(SPECS3.length);
    expect(new Set(SPECS3.map((s) => s.id)).size).toBe(SPECS3.length);
    expect(new Set(SPECS3.map((s) => s.ware.name)).size).toBe(SPECS3.length);
    expect(new Set(SPECS3.map((s) => s.holding.name)).size).toBe(SPECS3.length);
  });

  it("gives no keeper the name of someone already in the story", () => {
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(fortuneScenarios)]);
    const realm = new Set(chapters.filter((c) => c.name.startsWith("Realm Roads:")).flatMap((c) => c.scenes.map((s) => s.id)));
    const text = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
    ].join("\n");
    expect(realm.size).toBeGreaterThan(900);
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    const clashes: string[] = [];
    for (const spec of SPECS3) {
      if (new RegExp(`\\b${spec.kname}\\b`).test(text)) clashes.push(`${spec.kname} already names someone in the story`);
      if (companions.has(spec.kname)) clashes.push(`${spec.kname} is a companion’s name`);
    }
    expect(clashes).toEqual([]);
  });

  it("names its goods and holdings without an article, since the text adds one", () => {
    for (const spec of SPECS3) {
      expect(spec.ware.name, spec.id).not.toMatch(/^(The|A|An) /);
      expect(spec.holding.name, spec.id).not.toMatch(/^(The|A|An) /);
    }
  });
});

describe("what the roads sell", () => {
  it("makes one item and one holding for every road, filed under the id the builder uses", () => {
    expect(Object.keys(fortuneItems)).toHaveLength(40);
    expect(Object.keys(fortuneAssets)).toHaveLength(40);
    for (const spec of SPECS3) {
      expect(story.items![`${spec.id}_ware`].name).toBe(spec.ware.name);
      expect(story.assets![`${spec.id}_hold`].name).toBe(spec.holding.name);
    }
  });

  it("sells exactly one breakthrough pill on every wayside, for the realm after the road’s, and says so in its blurb", () => {
    WAYSIDES3.forEach((w, n) => {
      const pills = SPECS3.slice(n * 4, n * 4 + 4).filter((s) => s.ware.kind === "pill");
      expect(pills, w.id).toHaveLength(1);
      const item = story.items![`${pills[0].id}_ware`];
      expect(item.aid, w.id).toBe(w.realm + 1);
      expect(item.blurb, w.id).toContain(REALMS[w.realm + 1].name);
      expect(item.speed).toBeUndefined();
    });
    expect(Object.values(fortuneItems).filter((i) => i.aid !== undefined)).toHaveLength(10);
  });

  it("gives every other good a speed bonus by its kind, which counts from the realm below the road’s, and a holding that pays more than it costs", () => {
    for (const spec of SPECS3) {
      const item = story.items![`${spec.id}_ware`];
      if (item.kind !== "pill") expect(item.speed, spec.id).toBe(KIND_SPEED[item.kind]);
      const asset = story.assets![`${spec.id}_hold`];
      expect(asset.income, spec.id).toBeGreaterThan(asset.upkeep);
      expect(asset.speed, spec.id).toBeGreaterThanOrEqual(2);
    }
  });

  it("prices every road by its realm, so a later road costs more than an earlier one", () => {
    const early = pricesFor(1, 0, "tool");
    const late = pricesFor(6, 0, "tool");
    expect(late.base).toBeGreaterThan(early.base * 2);
    expect(late.wage).toBeGreaterThan(early.wage * 2);
    expect(pricesFor(1, 0, "pill").ware).toBe(early.base * 2);
    expect(pricesFor(1, 0, "tool").discount).toBeLessThan(pricesFor(1, 0, "tool").lease);
    expect(early.value).toBeLessThan(early.ware);
  });

  it("makes a lease pay for itself within a book’s worth of paydays", () => {
    for (const spec of SPECS3) {
      const asset = story.assets![`${spec.id}_hold`];
      const idx = road(spec.id);
      const p = pricesFor(WAYSIDES3[Math.floor(idx / 4)].realm, idx % 4, spec.ware.kind);
      const paydays = p.lease / (asset.income - asset.upkeep);
      expect(paydays * PAYDAY_EVERY, spec.id).toBeLessThan(500);
    }
  });
});

describe("walking every road", () => {
  /** A hero fit for the road: its realm, a full purse and sharp enough to find what is hidden. */
  const hero = (realm: number): GameState => ({ ...at("x"), realm, wealth: 600, stats: { qi: 50, karma: 0, insight: 30 }, cultivation: REALMS[realm].threshold });

  it("lets a funded hero of the road’s realm walk each approach, the hidden route and the way back, and leave by every door, never in debt", () => {
    for (const w of WAYSIDES3) {
      const n = WAYSIDES3.indexOf(w);
      for (const spec of SPECS3.slice(n * 4, n * 4 + 4)) {
        for (let a = 0; a < 4; a++) {
          for (const hidden of a === 2 ? [false, true] : [false]) {
            let s: GameState = { ...hero(w.realm), sceneId: `${spec.id}_entry` };
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
              if (hidden && stage === 4) pick("hidden_stair");
              else pick(getScene(story, s.sceneId).choices[0].id);
            }
            if (hidden) for (let h = 0; h < 3; h++) pick(getScene(story, s.sceneId).choices[0].id);
            expect(s.sceneId).toBe(`${spec.id}_return`);
            for (const door of ["report", "silent", "rest", "keep"]) {
              const out = choose(story, s, door);
              expect(out.sceneId, `${spec.id} ${door}`).toBe(w.id);
              expect(out.flags[`fr_done_w${n + 1}_${spec.id}`], `${spec.id} ${door}`).toBe(true);
            }
          }
        }
      }
    }
  });

  it("hands the hidden route’s goods over free, so insight can stand in for a purse", () => {
    const spec = SPECS3[road("lamp_oil")];
    let s: GameState = { ...hero(1), wealth: 0, sceneId: `${spec.id}_a2s4`, flags: {} };
    s = choose(story, s, "hidden_stair");
    for (let i = 0; i < 3; i++) s = choose(story, s, getScene(story, s.sceneId).choices[0].id);
    expect(s.items.lamp_oil_ware).toBe(1);
    expect(s.wealth).toBe(0);
    expect(s.flags.lamp_oil_found_ware).toBe(true);
  });

  it("reads the hero’s purse, realm and holding in the Elder’s report", () => {
    const sc = fortuneScenarios.REPORT_FORTUNE_LAMP_OIL;
    expect(new Set(Object.values(sc.lines)).size).toBe(5);
    expect(sc.memory!.length).toBeGreaterThanOrEqual(10);
    const kinds = new Set(sc.memory!.flatMap((m) => m.when.map((c) => c.kind)));
    for (const k of ["wealth", "item", "realm", "flag", "tone"] as const) expect(kinds.has(k), k).toBe(true);
    const lines = Object.values(fortuneScenarios).flatMap((s) => Object.values(s.lines));
    expect(new Set(lines).size, "no report line is repeated word for word").toBe(lines.length);
  });
});

describe("one walk of a road never repeats itself", () => {
  const kindOf = (id: string) => chapters.find((c) => c.scenes.some((s) => s.id === id))!.name.replace(/:.*/, "");
  const roads = Object.keys(story.scenes).flatMap((id) => {
    const m = /^(.*)_entry$/.exec(id);
    return m && story.scenes[`${m[1]}_a0s0`] ? [m[1]] : [];
  });

  /** Every walk a player can take: an approach of five scenes, and the hidden route that leaves the third approach. */
  const walks = (r: string): string[][] => {
    const out: string[][] = [];
    for (let a = 0; a < 4; a++) {
      const base = [`${r}_entry`, ...[0, 1, 2, 3, 4].map((s) => `${r}_a${a}s${s}`)];
      out.push([...base, `${r}_return`]);
      if (a === 2) out.push([...base, `${r}_h0`, `${r}_h1`, `${r}_h2`, `${r}_return`]);
    }
    return out;
  };

  it("finds 320 roads in eight families", () => {
    expect(roads).toHaveLength(320);
    expect(new Set(roads.map((r) => kindOf(`${r}_entry`))).size).toBe(8);
  });

  it("shows no menu line twice in one walk", () => {
    const repeats: string[] = [];
    for (const r of roads) {
      for (const walk of walks(r)) {
        const seen = new Set<string>();
        for (const id of walk) for (const c of getScene(story, id).choices) {
          if (seen.has(c.label)) repeats.push(`${id}>${c.id}: ${c.label}`);
          seen.add(c.label);
        }
      }
    }
    expect(repeats).toEqual([]);
  });

  it("shows no paragraph of eight words or more twice in one walk", () => {
    const repeats: string[] = [];
    for (const r of roads) {
      for (const walk of walks(r)) {
        const seen = new Set<string>();
        for (const id of walk) for (const p of getScene(story, id).paragraphs) {
          if (p.split(/\s+/).length >= 8 && seen.has(p)) repeats.push(`${id}: ${p.slice(0, 60)}`);
          seen.add(p);
        }
      }
    }
    expect(repeats).toEqual([]);
  });

  it("has wording enough in every pool to fill a walk: at least eight lines for each kind of focus, and eight beats for each tone", () => {
    for (const [name, pool] of [["v1", CHOICE_LABEL], ["v2", CHOICE_LABEL2]] as const) {
      for (const tone of Object.keys(pool) as (keyof typeof pool)[]) {
        for (const kind of ["place", "thing", "person"] as const) {
          const fitting = [...pool[tone], ...CHOICE_EXTRA[tone]].filter((t) => fits(t, kind));
          expect(fitting.length, `${name} ${tone} ${kind}`).toBeGreaterThanOrEqual(8);
        }
      }
    }
    for (const tone of Object.keys(MODE_BEAT) as (keyof typeof MODE_BEAT)[]) {
      expect(MODE_BEAT[tone].length + BEAT_EXTRA[tone].length, `v1 ${tone}`).toBeGreaterThanOrEqual(8);
      expect(MODE_BEAT2[tone].length + BEAT_EXTRA[tone].length, `v2 ${tone}`).toBeGreaterThanOrEqual(8);
    }
  });
});

describe("a setting keeps to itself", () => {
  it("never puts rain, ponds or rivers into wording the Glass Sea shares with every other road", () => {
    const shared = [...Object.values(MODE_BEAT), ...Object.values(MODE_BEAT2), ...Object.values(BEAT_EXTRA), ...Object.values(CHOICE_EXTRA)].flat();
    const bad = shared.filter((t) => /\b(rain|ponds?|rivers?|tides?|harbour)\b/i.test(t));
    expect(bad).toEqual([]);
  });

  it("never lets the hero be a mortal in a later book, whatever their realm", () => {
    const later = chapters.filter((c) => /^Book (Two|Three|Four|Five|Six)/.test(c.name));
    const slips = later
      .flatMap((c) => c.scenes)
      .flatMap((s) => [...s.paragraphs, ...s.choices.map((c) => c.label)].map((t) => ({ id: s.id, t })))
      .filter(({ t }) => /\byou (have no (qi|weapon) but a mortal|are (only |merely )?a mortal)|a mortal’s (breath|quickness)/i.test(t));
    expect(slips).toEqual([]);
  });
});

describe("counting on the road", () => {
  it("sends every way into the departure and the four later gates through a reckoning first", () => {
    expect(reckoningScenes).toHaveLength(5);
    const gates = ["departure_dawn", "b3_gate", "b4_gate", "b5_gate", "b6_gate"];
    for (const gate of gates) {
      const into = Object.values(story.scenes).filter((s) => s.choices.some((c) => c.next === gate));
      expect(into.map((s) => s.id), gate).toEqual(expect.arrayContaining(reckoningScenes.filter((r) => r.choices[0].next === gate).map((r) => r.id)));
      expect(into.filter((s) => !s.id.startsWith("reckoning_")), gate).toEqual([]);
    }
  });

  it("lets the company spend, share or sit the night, and each reckoning reads the realm against the road", () => {
    for (const r of reckoningScenes) {
      expect(r.choices.length).toBeGreaterThanOrEqual(5);
      expect(sceneBodyWords(r)).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      const text = (s: GameState) => enterScene(story, { ...s, log: [] }, r).log.map((e) => e.text).join("\n");
      const base = at(r.id, { realm: 0, wealth: 50 });
      expect(text({ ...base, realm: 0 })).not.toBe(text({ ...base, realm: 7 }));
      const unfed = settle(story, { ...base, wealth: 0, realm: 5, visited: ["departure_dawn"] });
      expect(unfed.unfed).toBe(true);
      expect(text(unfed)).not.toBe(text({ ...unfed, unfed: false, wealth: 50 }));
    }
    const first = reckoningScenes[0];
    const s = choose(story, at(first.id, { wealth: 20, stats: { qi: 10, karma: 0, insight: 10 } }), "buy_0");
    expect(s.wealth).toBe(16);
    expect(s.stats.qi).toBe(16);
    expect(s.sceneId).toBe("departure_dawn");
    const shared = choose(story, at(first.id, { wealth: 20 }), "share");
    expect(shared.wealth).toBe(10);
    expect(shared.flags[`${first.id}_shared`]).toBe(true);
  });

  it("closes each of the seven endings on the purse and the holdings, in one line that fits the screen", () => {
    const ends = ["end_nine", "end_listener", "end_ascendant", "end_warden", "end_spent", "end_hollow", "end_ledger"];
    for (const id of ends) {
      const scene = getScene(story, id);
      expect(sceneBodyWords(scene), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      const shows = (patch: Partial<GameState>) => enterScene(story, { ...at(id), ...patch, log: [] }, scene).log.map((e) => e.text);
      const rich = shows({ wealth: 200 });
      const poor = shows({ wealth: 0 });
      const held = shows({ wealth: 50, assets: ["lamp_oil_hold", "ink_stone_hold"] });
      expect(new Set([rich.join(), poor.join(), held.join()]).size, id).toBe(3);
      expect(shows({ wealth: 50 }).length, id).toBe(shows({ wealth: 50 }).length);
    }
  });
});

describe("goods that stand in for a realm", () => {
  it("lets a Nascent Soul with the charm cross the Ash Bridge, and not without it", () => {
    const find = (s: GameState) => getChoices(getScene(story, "bridge_entry"), s).filter((v) => v.choice.next === "bridge_open1");
    const bare = at("bridge_entry", { realm: 4 });
    expect(find(bare).every((v) => !v.available)).toBe(true);
    const charmed = at("bridge_entry", { realm: 4, items: { hawker_row_ware: 1 } });
    const open = find(charmed).filter((v) => v.available);
    expect(open).toHaveLength(1);
    const after = choose(story, charmed, open[0].choice.id);
    expect(after.sceneId).toBe("bridge_open1");
    expect(after.items.hawker_row_ware).toBeUndefined();
    expect(find(at("bridge_entry", { realm: 3, items: { hawker_row_ware: 1 } })).every((v) => !v.available)).toBe(true);
  });

  it("lets a Spirit Severing hero read the abyss doors with the shard in hand", () => {
    const view = (realm: number, items: Record<string, number>) => getChoices(getScene(story, "depths_entry"), at("depths_entry", { realm, items })).filter((v) => v.choice.next === "depths_read1");
    expect(view(5, {}).some((v) => v.available)).toBe(false);
    expect(view(5, { plate_stall_ware: 1 }).some((v) => v.available)).toBe(true);
    expect(view(4, { plate_stall_ware: 1 }).some((v) => v.available)).toBe(false);
    expect(view(6, {}).some((v) => v.available)).toBe(true);
  });
});

describe("a label says what the purse feels", () => {
  const amount = (c: Scene["choices"][number]) => c.effects?.find((e) => e.kind === "addWealth");

  it("names the real cost of a share in the books and the real payout of a sold holding, on every road", () => {
    let invests = 0;
    let sales = 0;
    for (const s of scenes) {
      for (const c of s.choices) {
        const w = amount(c);
        if (!w || w.kind !== "addWealth") continue;
        if (c.id.startsWith("invest")) {
          invests++;
          expect(c.label, `${s.id}:${c.id}`).toContain(` ${-w.amount} spirit stones`);
        }
        if (c.id.startsWith("sell_holding")) {
          sales++;
          expect(c.label, `${s.id}:${c.id}`).toContain(` ${w.amount} spirit stones`);
        }
      }
    }
    expect(invests).toBeGreaterThanOrEqual(20);
    expect(sales).toBeGreaterThanOrEqual(40);
  });
});
