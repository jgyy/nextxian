import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import { conditionsHold } from "@/engine/npc";
import { edgeOf, edgeParts, EDGE_RANGE, MAX_BOOST } from "@/engine/fight";
import { DAOS, DEFAULT_HERO, GENDERS, HERO_FIELDS, HERO_OPTIONS, isHero, randomPicks, type Hero } from "@/engine/hero";
import { ELEMENTS, type Element } from "@/engine/path";
import { levelThreshold } from "@/engine/stages";
import { validateEconomy, validateStory, MAX_SCENE_WORDS, sceneBodyWords } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { FOES, WAYSIDES14, foeAt, huntContexts, huntGroups, huntItems, huntRecord, huntScenarios } from "@/story/hunts";
import { KEY_STANCES, STANCE_SCENES, stanceFlag } from "@/story/hunts/stances";
import { donePrefix14, doneFlag14, foeLevel, holdFlag, reportId14, spoilId, spoilValue } from "@/story/hunts/build";
import { CRAFTS } from "@/story/hunts/lexicon-dao";
import { DAO_TURNS, GENDER_TURNS, daoTurnFlag, daoTurnScenarioId, genderTurnFlag, genderTurnScenarioId, turnChoices14, turnScenarios14 } from "@/story/hunts/main";
import { companions } from "@/story/companions";
import type { ChoiceTone, GameState, Scene, Tier } from "@/engine/types";

const huntScenes: Scene[] = huntGroups.flatMap((g) => g.scenes);
const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
const OVERCOMES: Record<Element, Element> = { wood: "metal", earth: "wood", water: "earth", fire: "water", metal: "fire" };

/** A hero standing on a level of the ladder, in front of a scene. */
function standing(level: number, sceneId: string, patch: Partial<GameState> = {}, hero: Partial<Hero> = {}): GameState {
  const base = createGame(story, { ...DEFAULT_HERO, ...hero });
  return { ...base, realm: Math.floor(level / 10), level, cultivation: levelThreshold(level), stats: { qi: 40, karma: 0, insight: 30 }, sceneId, log: [], ...patch };
}
const open = (g: GameState) => getChoices(getScene(story, g.sceneId), g).filter((v) => v.available).map((v) => v.choice.id);
const shown = (g: GameState) => getChoices(getScene(story, g.sceneId), g).map((v) => v.choice.id);
const walk = (g: GameState, ids: string[]): GameState => ids.reduce((s, id) => choose(story, s, id), g);
const text = (g: GameState) => g.log.map((e) => e.text).join("\n");

describe("the forty hunts", () => {
  it("are ten hubs of four foes, each hunt twenty-five scenes, a thousand in all", () => {
    expect(WAYSIDES14).toHaveLength(10);
    expect(FOES).toHaveLength(40);
    expect(new Set(FOES.map((f) => f.id)).size).toBe(40);
    const perFoe = huntScenes.filter((s) => s.id.startsWith("hu_"));
    expect(perFoe).toHaveLength(1000);
    for (const f of FOES) {
      const mine = perFoe.filter((s) => s.id.startsWith(`${f.id}_`)).map((s) => s.id.slice(f.id.length + 1));
      expect(mine.sort(), f.id).toEqual(
        ["beaten", "driven", "return", "sighting", "won", ...[0, 1, 2, 3].flatMap((a) => [0, 1, 2, 3, 4].map((s) => `a${a}s${s}`))].sort(),
      );
    }
    for (const g of huntGroups) expect(g.scenes.filter((s) => s.id.startsWith("hu_")), g.name).toHaveLength(100);
  });

  it("opens each hub from a scene of the story, in the order of the realms, and every scene exists in the story", () => {
    let realm = 0;
    for (const w of WAYSIDES14) {
      expect(story.scenes[w.origin], w.origin).toBeDefined();
      expect(story.scenes[w.origin].choices.some((c) => c.next === w.id), w.origin).toBe(true);
      expect(w.realm).toBeGreaterThanOrEqual(realm);
      realm = w.realm;
    }
    for (const s of huntScenes) expect(story.scenes[s.id], s.id).toBeDefined();
    for (const g of huntGroups) expect(story.scenes[`back14_${g.wayside.origin}`], g.wayside.origin).toBeDefined();
  });

  it("keeps every scene within the cap, with four choices every hero sees and no slot left unfilled", () => {
    for (const s of huntScenes) {
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(s.choices.filter((c) => !c.hideLocked).length, s.id).toBeGreaterThanOrEqual(4);
      expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
    }
    for (const id of Object.keys(huntScenarios)) expect(JSON.stringify(story.scenarios[id]), id).not.toMatch(/\{\w+\}/);
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("gives every foe an element, the element that overcomes it as its weakness, and a bane, a soft tone and a level in its realm", () => {
    const banes: Record<string, number> = {};
    const softs: Record<string, number> = {};
    for (const f of FOES) {
      expect(ELEMENTS).toContain(f.element);
      expect(f.weak, f.id).toBe(OVERCOMES[f.element]);
      expect(f.offset, f.id).toBeGreaterThanOrEqual(3);
      expect(f.offset, f.id).toBeLessThanOrEqual(8);
      banes[f.bane] = (banes[f.bane] ?? 0) + 1;
      softs[f.soft] = (softs[f.soft] ?? 0) + 1;
      expect(f.spoil.blurb.length, f.id).toBeGreaterThan(30);
      for (const t of [f.sight, ...f.beats, ...Object.values(f.sees)]) expect(t.split(/\s+/).length, f.id).toBeGreaterThan(14);
    }
    expect(Object.keys(banes).sort()).toEqual([...CRAFTS].sort());
    for (const dao of CRAFTS) expect(banes[dao], dao).toBe(5);
    expect(Object.keys(softs).sort()).toEqual(["deceit", "force", "inquiry", "mercy", "quiet", "truth"]);
    for (const tone of Object.keys(softs)) expect(softs[tone], tone).toBeGreaterThanOrEqual(4);
  });

  it("names no foe, place or spoil twice, and no foe after a person of the story", () => {
    for (const key of ["name", "title", "place"] as const) expect(new Set(FOES.map((f) => f[key])).size, key).toBe(40);
    expect(new Set(FOES.map((f) => f.spoil.name)).size).toBe(40);
    const given = Object.values(companions).flatMap((c) => c.name.split(" "));
    for (const f of FOES) for (const word of given) expect(f.name.split(/\W+/), f.id).not.toContain(word);
  });

  it("spends and earns sensibly: a spoil is a material worth more the higher the realm, and every one is sold by a choice that requires it", () => {
    const items = Object.keys(huntItems);
    expect(items).toHaveLength(40);
    expect(validateEconomy(story)).toEqual([]);
    for (const [i, f] of FOES.entries()) {
      const item = story.items![spoilId(f.id)];
      expect(item.kind).toBe("material");
      expect(item.value).toBe(spoilValue(f, huntContexts[i]));
      expect(item.value).toBeLessThan(400);
      const sell = story.scenes[`${f.id}_return`].choices.find((c) => c.id === "sell")!;
      expect(sell.requires).toContainEqual({ kind: "item", item: item.id });
    }
    expect(spoilValue(FOES[39], huntContexts[39])).toBeGreaterThan(spoilValue(FOES[0], huntContexts[0]) * 3);
  });
});

describe("the edge", () => {
  const foe = { level: 14, weak: "fire" as Element, bane: "sword" as const, boost: ["a", "b", "c", "d"] };
  const hero = (level: number, patch: Partial<GameState> = {}, h: Partial<Hero> = {}) => standing(level, "gate", patch, h);

  it("reads a hero’s level against the foe’s, three levels to a point, at most four either way", () => {
    expect(edgeParts(hero(14), foe).level).toBe(0);
    expect(edgeParts(hero(17), foe).level).toBe(1);
    expect(edgeParts(hero(11), foe).level).toBe(-1);
    expect(edgeParts(hero(40), foe).level).toBe(4);
    expect(edgeParts(hero(0), foe).level).toBe(-4);
  });

  it("counts a Dao’s rank only for a hero who has a Dao, a root only when it answers the element, and the bane for twice", () => {
    expect(edgeParts(hero(14, { daoPoints: 60 }), foe).craft).toBe(0);
    expect(edgeParts(hero(14, { daoPoints: 60 }, { dao: "alchemy" }), foe).craft).toBe(3);
    expect(edgeParts(hero(14, { daoPoints: 0 }, { dao: "alchemy" }), foe).craft).toBe(0);
    expect(edgeParts(hero(14, {}, { talent: "fire" }), foe).root).toBe(2);
    expect(edgeParts(hero(14, {}, { talent: "mixed" }), foe).root).toBe(1);
    expect(edgeParts(hero(14, {}, { talent: "wood" }), foe).root).toBe(0);
    expect(edgeParts(hero(14, {}, { dao: "sword" }), foe).bane).toBe(2);
    expect(edgeParts(hero(14, {}, { dao: "forging" }), foe).bane).toBe(0);
  });

  it("gives a point to a hero with qi to spare, takes one from a hero with none, and counts each foothold up to three", () => {
    expect(edgeParts(hero(14, { stats: { qi: 70, karma: 0, insight: 0 } }), foe).qi).toBe(1);
    expect(edgeParts(hero(14, { stats: { qi: 5, karma: 0, insight: 0 } }), foe).qi).toBe(-1);
    expect(edgeParts(hero(14, { stats: { qi: 30, karma: 0, insight: 0 } }), foe).qi).toBe(0);
    expect(edgeParts(hero(14, { flags: { a: true } }), foe).foothold).toBe(1);
    expect(edgeParts(hero(14, { flags: { a: true, b: true, c: true, d: true } }), foe).foothold).toBe(MAX_BOOST);
  });

  it("is the sum of its parts, held inside its range, and is what the condition reads", () => {
    const g = hero(20, { daoPoints: 100, stats: { qi: 90, karma: 0, insight: 0 }, flags: { a: true, b: true, c: true } }, { dao: "sword", talent: "fire" });
    const e = edgeOf(g, foe);
    expect(e).toBe(2 + 4 + 2 + 2 + 1 + 3);
    expect(e).toBeLessThanOrEqual(EDGE_RANGE[1]);
    expect(edgeOf(hero(0, { stats: { qi: 0, karma: 0, insight: 0 } }, { talent: "wood" }), foe)).toBe(-5);
    const cond = (min?: number, max?: number) => ({ kind: "edge" as const, foe: foe.level, weak: foe.weak, bane: foe.bane, boost: foe.boost, min, max });
    expect(conditionsHold([cond(e)], g)).toBe(true);
    expect(conditionsHold([cond(e + 1)], g)).toBe(false);
    expect(conditionsHold([cond(undefined, e - 1)], g)).toBe(false);
  });
});

describe("fighting the tusk-boar", () => {
  const foe = FOES[0];
  const ctx = huntContexts[0];
  const level = foeLevel(foe, ctx);
  const at = (id: string, patch: Partial<GameState> = {}, h: Partial<Hero> = {}) => standing(level, `hu_tuskboar_${id}`, patch, h);

  it("shows a hero who has not won a foothold no stroke that ends it by strength, and shows them the way out", () => {
    const g = at("a0s3", { realm: 0, level: 0, cultivation: 0 });
    const view = getChoices(getScene(story, g.sceneId), g);
    expect(view.find((v) => v.choice.id === "finish")!.available).toBe(false);
    expect(view.find((v) => v.choice.id === "off")!.available).toBe(true);
    expect(open(g)).toContain("press");
  });

  it("lets a hero who chose in the foe’s own tone at every turn end it by strength", () => {
    let g = at("sighting", {}, { talent: "wood" });
    g = walk(g, ["approach_0"]);
    expect(edgeOf(g, { level, weak: foe.weak, bane: foe.bane, boost: [0, 1, 2].map((n) => holdFlag(foe.id, n)) })).toBeLessThan(3);
    g = walk(g, [foe.soft, foe.soft, foe.soft]);
    expect(g.sceneId).toBe("hu_tuskboar_a0s3");
    expect(g.flags[holdFlag(foe.id, 0)] && g.flags[holdFlag(foe.id, 1)] && g.flags[holdFlag(foe.id, 2)]).toBe(true);
    expect(open(g)).toContain("finish");
    expect(open(g)).not.toContain("press");
    g = walk(g, ["finish", "force"]);
    expect(g.sceneId).toBe("hu_tuskboar_won");
    expect(g.flags.hu_tuskboar_by_force).toBe(true);
  });

  it("lets a hero press on against the odds and be thrown, losing qi and keeping the hunt open", () => {
    let g = at("a0s3", { realm: 0, level: 0, cultivation: 0 });
    const qi = g.stats.qi;
    g = walk(g, ["press"]);
    expect(g.sceneId).toBe("hu_tuskboar_beaten");
    expect(g.stats.qi).toBeLessThanOrEqual(qi - 9);
    expect(g.stats.qi).toBeGreaterThanOrEqual(qi - 12);
    expect(g.flags.hu_tuskboar_beaten).toBe(true);
    g = walk(g, ["quiet"]);
    expect(g.sceneId).toBe(WAYSIDES14[0].id);
    expect(g.flags[doneFlag14(1, foe.id)]).not.toBe(true);
    expect(open(g)).toContain(`go_${foe.id}`);
    g = walk(g, [`go_${foe.id}`]);
    expect(text(g)).toMatch(/threw you|beat you|bruise/);
  });

  it("lets a hero break off and drive it away, and that ends the hunt as well as a kill", () => {
    let g = at("a3s3");
    g = walk(g, ["off"]);
    expect(g.sceneId).toBe("hu_tuskboar_driven");
    g = walk(g, ["mercy"]);
    expect(g.sceneId).toBe("hu_tuskboar_return");
    expect(text(g)).toMatch(/did not kill it/);
    g = walk(g, ["rest"]);
    expect(g.sceneId).toBe(WAYSIDES14[0].id);
    expect(g.flags[doneFlag14(1, foe.id)]).toBe(true);
    expect(open(g)).not.toContain(`go_${foe.id}`);
  });

  it("pays for the kill: the spoil can be taken and sold, once, for its price", () => {
    let g = at("a0s4", { flags: { hu_tuskboar_by_force: true } });
    g = walk(g, ["force", "take"]);
    expect(g.items[spoilId(foe.id)]).toBe(1);
    const purse = g.wealth;
    g = walk(g, ["sell"]);
    expect(g.items[spoilId(foe.id)] ?? 0).toBe(0);
    expect(g.wealth).toBe(purse + spoilValue(foe, ctx));
    expect(g.flags[doneFlag14(1, foe.id)]).toBe(true);
  });

  it("is reported to the Elder, who answers differently across her trust and remembers how it went", () => {
    const scenario = story.scenarios[reportId14(foe.id)];
    expect(new Set(TIERS.map((t) => scenario.lines[t])).size).toBe(5);
    let g = at("return", { flags: { hu_tuskboar_by_craft: true, hu_tuskboar_dao: true }, daoPoints: 10 }, { dao: "sword" });
    g = walk(g, ["report"]);
    expect(g.history).toContain(reportId14(foe.id));
    expect(text(g)).toContain("the one cut");
    expect(g.flags.hu_tuskboar_heard).toBe(true);
  });

  it("sends the Elder’s word to the hub when all four of a hub’s foes are done", () => {
    const flags = Object.fromEntries(FOES.slice(0, 4).map((f) => [doneFlag14(1, f.id), true]));
    expect(Object.keys(flags).every((f) => f.startsWith(donePrefix14(1)))).toBe(true);
    const g: GameState = { ...at("a0s0"), sceneId: WAYSIDES14[0].id, flags };
    const entered = walk({ ...g, sceneId: "village_square" }, [WAYSIDES14[0].id]);
    expect(entered.log.some((e) => e.kind === "npc" && e.text.includes("Four things the village had stopped speaking of"))).toBe(true);
  });
});

describe("the Dao and the gender in a fight", () => {
  const ctx = huntContexts[5];
  const foe = FOES[5];
  const at = (id: string, hero: Partial<Hero> = {}, patch: Partial<GameState> = {}) => standing(foeLevel(foe, ctx), `${foe.id}_${id}`, patch, hero);

  it("offers each hero, at the turn, the stroke of their own Dao and of their own gender, and no one else’s", () => {
    for (const { value: dao } of DAOS) {
      for (const { value: gender } of GENDERS) {
        const ids = open(at("a1s2", { dao, gender }));
        const crafts = ids.filter((id) => id.startsWith("craft_"));
        const genders = ids.filter((id) => id.startsWith("gender_"));
        expect(crafts, `${dao}`).toEqual(dao === "none" ? [] : [`craft_${dao}`]);
        expect(genders, `${gender}`).toEqual([`gender_${gender}`]);
      }
    }
  });

  it("makes the stroke a foothold, and the Dao’s a step in the Dao, and has the crisis and the report remember both", () => {
    let g = at("a1s2", { dao: "forging", gender: "woman" });
    const before = edgeOf(g, { level: foeLevel(foe, ctx), weak: foe.weak, bane: foe.bane, boost: [0, 1, 2].map((n) => holdFlag(foe.id, n)) });
    g = walk(g, ["craft_forging"]);
    expect(g.sceneId).toBe(`${foe.id}_a1s3`);
    expect(g.flags[`${foe.id}_dao`]).toBe(true);
    expect(g.flags[holdFlag(foe.id, 2)]).toBe(true);
    expect(g.daoPoints).toBeGreaterThan(0);
    expect(edgeOf(g, { level: foeLevel(foe, ctx), weak: foe.weak, bane: foe.bane, boost: [0, 1, 2].map((n) => holdFlag(foe.id, n)) })).toBeGreaterThan(before);
    expect(text(g)).toContain("The iron has bitten");
    const w = walk(at("a1s2", { gender: "woman" }), ["gender_woman"]);
    expect(w.flags[`${foe.id}_gendered`]).toBe(true);
    expect(text(w)).toMatch(/Somewhere behind you|The stroke you chose/);
  });

  it("shows the foe’s bane to a hero of that Dao at the sighting, and a different line to everyone else", () => {
    const bane = at("sighting", { dao: foe.bane });
    const other = at("sighting", { dao: foe.bane === "sword" ? "fate" : "sword" });
    const hub = WAYSIDES14[Math.floor(5 / 4)].id;
    const a = text(walk({ ...bane, sceneId: hub }, [`go_${foe.id}`]));
    const b = text(walk({ ...other, sceneId: hub }, [`go_${foe.id}`]));
    expect(a).toContain("You see its weakness at once");
    expect(b).not.toContain("You see its weakness at once");
  });

  it("says one thing of a woman, a man and someone with no answer at the sighting, for every foe", () => {
    for (const f of FOES) {
      const lines = GENDERS.map(({ value }) => f.sees[value]);
      expect(new Set(lines).size, f.id).toBe(3);
      const sighting = story.scenes[`${f.id}_sighting`];
      expect(sighting.extras!.filter((x) => x.group === "gender")).toHaveLength(3);
    }
  });

  it("tells the victory three ways, by gender", () => {
    const seen = new Set<string>();
    for (const { value: gender } of GENDERS) {
      const g = at("won", { gender });
      seen.add(text(enterScene(story, g, getScene(story, g.sceneId))));
    }
    expect(seen.size).toBe(3);
  });
});

describe("the Dao and gender turns in the main line", () => {
  it("has twelve turns of the Dao and ten of the gender, each in a scene that exists and leads on", () => {
    expect(DAO_TURNS).toHaveLength(12);
    expect(GENDER_TURNS).toHaveLength(10);
    for (const t of [...DAO_TURNS, ...GENDER_TURNS]) {
      expect(story.scenes[t.id], t.id).toBeDefined();
      expect(story.scenes[t.next], t.next).toBeDefined();
      expect(story.scenes[t.id].choices.some((c) => c.next === t.next), t.id).toBe(true);
    }
    expect(new Set([...DAO_TURNS, ...GENDER_TURNS].map((t) => t.id)).size).toBe(22);
  });

  it("writes a way for every Dao and every gender, each its own, and the Elder answers each five ways", () => {
    const scenarios = turnScenarios14();
    expect(Object.keys(scenarios)).toHaveLength(12 * 9 + 10 * 3);
    for (const t of DAO_TURNS) {
      expect(new Set(Object.values(t.labels)).size, t.id).toBe(9);
      for (const { value: dao } of DAOS) {
        expect(new Set(TIERS.map((tier) => scenarios[daoTurnScenarioId(dao, t.id)].lines[tier])).size).toBe(5);
        expect(story.scenarios[daoTurnScenarioId(dao, t.id)]).toBeDefined();
      }
    }
    for (const t of GENDER_TURNS) {
      expect(new Set(Object.values(t.labels)).size, t.id).toBe(3);
      for (const { value: g } of GENDERS) expect(new Set(TIERS.map((tier) => scenarios[genderTurnScenarioId(g, t.id)].lines[tier])).size).toBe(5);
    }
  });

  it("shows each hero only the way that is theirs, hides it from everyone else, and offers it once", () => {
    for (const t of DAO_TURNS) {
      for (const { value: dao } of DAOS) {
        const g = standing(10, t.id, {}, { dao });
        const ids = shown(g).filter((id) => id.startsWith("dao_"));
        expect(ids, `${t.id} ${dao}`).toEqual([`dao_${dao}`]);
        const done = walk(g, [`dao_${dao}`]);
        expect(done.flags[daoTurnFlag(dao, t.id)]).toBe(true);
        expect(done.sceneId).toBe(t.next);
        expect(shown({ ...done, sceneId: t.id }).filter((id) => id.startsWith("dao_"))).toEqual([]);
      }
    }
    for (const t of GENDER_TURNS) {
      for (const { value: gender } of GENDERS) {
        const g = standing(10, t.id, {}, { gender });
        expect(shown(g).filter((id) => id.startsWith("peril_")), `${t.id} ${gender}`).toEqual([`peril_${gender}`]);
        const done = walk(g, [`peril_${gender}`]);
        expect(done.flags[genderTurnFlag(gender, t.id)]).toBe(true);
        expect(done.sceneId).toBe(t.next);
      }
    }
  });

  it("makes the open hand a way as well, and gives a Dao hero a step in their Dao for taking theirs", () => {
    const t = DAO_TURNS[0];
    const none = walk(standing(0, t.id, {}, { dao: "none" }), ["dao_none"]);
    expect(none.daoPoints).toBe(0);
    const forger = walk(standing(0, t.id, {}, { dao: "forging" }), ["dao_forging"]);
    expect(forger.daoPoints).toBeGreaterThan(0);
    expect(turnChoices14(story.scenes.gate)).toEqual([]);
  });

  it("has the Elder remark on how often the mountain has met the hero’s craft, and the hero’s danger", () => {
    const remarks = (story.remarks ?? []).filter((r) => r.id.startsWith("su_dt_") || r.id.startsWith("su_gt_"));
    expect(remarks.map((r) => r.id).sort()).toEqual(["su_dt_3", "su_dt_6", "su_dt_9", "su_gt_3", "su_gt_6", "su_gt_9"]);
    for (const r of remarks) expect(r.when.some((c) => c.kind === "count"), r.id).toBe(true);
  });
});

describe("where the hero stood at the Sealing Night", () => {
  const shownAt = (id: string, flags: Record<string, boolean>) => text(enterScene(story, { ...standing(30, id), flags }, getScene(story, id)));

  it("marks every choice of the memory’s scenes with the tone it was made in, and the choices that matter most by name", () => {
    expect(STANCE_SCENES.length).toBeGreaterThanOrEqual(20);
    for (const id of STANCE_SCENES) {
      const scene = story.scenes[id];
      expect(scene, id).toBeDefined();
      for (const c of scene.choices) expect(c.effects, `${id}>${c.id}`).toContainEqual({ kind: "setFlag", flag: stanceFlag(c.tone, id) });
    }
    for (const [id, keys] of Object.entries(KEY_STANCES)) {
      for (const [choice, flag] of Object.entries(keys)) {
        expect(story.scenes[id].choices.find((c) => c.id === choice)!.effects, `${id}>${choice}`).toContainEqual({ kind: "setFlag", flag });
      }
    }
  });

  it("walks a hero through the cleft and has the next morning, the Listener and the Hall remember what they did", () => {
    let g = standing(30, "sealing_choice_2", {}, {});
    g = walk(g, ["cut_chains"]);
    expect(g.flags.sn_chains_cut).toBe(true);
    expect(g.flags[stanceFlag("force", "sealing_choice_2")] || g.flags[stanceFlag("mercy", "sealing_choice_2")] || g.flags[stanceFlag("truth", "sealing_choice_2")]).toBe(true);
    expect(shownAt("rumours_21", { sn_chains_cut: true })).toMatch(/cut the chains/);
    expect(shownAt("rumours_21", { sn_took_jade: true })).toMatch(/took the jade/);
    expect(shownAt("rumours_21", { sn_chains_cut: true, sn_elder_refused: true })).toMatch(/took the brush from the young Registrar/);
    expect(shownAt("lastseal_entry", { sn_sang: true })).toMatch(/You hummed/);
    expect(shownAt("rumours_21", {})).not.toMatch(/cut the chains|took the jade/);
  });

  it("has the Hall read the whole night, one way for each tone, once a hero has stood in it often enough", () => {
    expect(shownAt("rumours_22", { st_mercy_a: true, st_mercy_b: true, st_mercy_c: true })).toMatch(/open hands/);
    expect(shownAt("rumours_22", { st_force_a: true, st_force_b: true, st_force_c: true })).toMatch(/tore, shouted and seized/);
    expect(shownAt("rumours_22", { st_deceit_a: true, st_deceit_b: true })).toMatch(/reached for a lie/);
    expect(shownAt("rumours_22", { st_mercy_a: true })).not.toMatch(/open hands/);
  });

  it("keeps every scene that reads it within the cap, with both stances shown at once", () => {
    for (const id of ["rumours_21", "rumours_22", "lastseal_entry", "archive_front_3", "descent_return_2", "tribunal_summons_3", "mist_remembers_3"]) {
      expect(sceneBodyWords(story.scenes[id]), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
  });
});

describe("the fight panel’s facts", () => {
  it("knows which foe a scene belongs to, and none for a scene outside the hunts", () => {
    expect(foeAt("hu_tuskboar_a2s3")?.spec.name).toBe("the tusk-boar");
    expect(foeAt("hu_tuskboar_a2s3")?.ctx.realm).toBe(0);
    expect(foeAt("hu_paperwyrm_return")?.ctx.realm).toBe(6);
    expect(foeAt("gate")).toBeUndefined();
    expect(foeAt("wayside_hunt_barley")).toBeUndefined();
  });

  it("counts the foes dealt with at each hub, ten hubs of four", () => {
    const flags = { [doneFlag14(1, "hu_tuskboar")]: true, [doneFlag14(1, "hu_voicefox")]: true, [doneFlag14(10, "hu_paperwyrm")]: true };
    const record = huntRecord(flags);
    expect(record).toHaveLength(10);
    expect(record.map((r) => r.done)).toEqual([2, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    expect(huntRecord({}).every((r) => r.done === 0)).toBe(true);
  });
});

describe("the balance of the forty fights", () => {
  /** A plain hero (mixed roots, no Dao, middling qi and insight) a few levels up the hub’s realm, who has taken the way of reading the foe and chosen in its soft tone at every turn. */
  const readAt = (i: number, plus: number) => {
    const f = FOES[i];
    const ctx = huntContexts[i];
    const g = standing(ctx.realm * 10 + plus, `${f.id}_sighting`, {}, { talent: "mixed", dao: "none" });
    return walk(g, ["approach_2", f.soft, f.soft, f.soft]);
  };
  /** The same hero at the crisis with no foothold at all: they have not read the foe, and chose nothing in particular. */
  const blindAt = (i: number, plus: number) => {
    const f = FOES[i];
    return standing(huntContexts[i].realm * 10 + plus, `${f.id}_a2s3`, {}, { talent: "mixed", dao: "none" });
  };

  it("lets a plain hero a few layers up the realm end every fight, by strength if they read the foe and by guile if they did not", () => {
    for (let i = 0; i < 40; i++) {
      const f = FOES[i];
      const ends = open(readAt(i, 2));
      expect(ends.includes("finish") || ends.includes("ruse"), `${f.id} read`).toBe(true);
      expect(ends, f.id).toContain("off");
      const blind = open(blindAt(i, 5));
      expect(blind.includes("finish") || blind.includes("ruse"), `${f.id} blind`).toBe(true);
    }
  });

  it("keeps the strongest stroke out of reach of a hero far below the foe, who is always shown a way out", () => {
    for (let i = 0; i < 40; i += 5) {
      const f = FOES[i];
      const ctx = huntContexts[i];
      const weak = standing(Math.max(0, ctx.realm * 10 - 6), `${f.id}_a0s3`, { stats: { qi: 8, karma: 0, insight: 5 } }, { talent: "wood", dao: "none" });
      const ids = open(weak);
      expect(ids, f.id).not.toContain("finish");
      expect(ids, f.id).not.toContain("craft");
      expect(ids, f.id).toContain("off");
    }
  });
});

describe("walking the Hunt Roads at random", () => {
  const rng = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  };

  it("never strands a hero or leaves the numbers unreadable, whichever way they wander, win, flee or fall", () => {
    for (const [n, w] of WAYSIDES14.entries()) {
      const rand = rng(n * 977 + 13);
      const tones: ChoiceTone[] = ["force", "deceit", "inquiry", "mercy", "quiet", "truth"];
      let g = standing(w.realm * 10 + 5, w.id, { stats: { qi: 80, karma: 10, insight: 60 }, wealth: 50 }, { dao: CRAFTS[n % 8], gender: GENDERS[n % 3].value, talent: "mixed" });
      const reached = new Set<string>();
      for (let i = 0; i < 900; i++) {
        const scene = getScene(story, g.sceneId);
        let choices = getChoices(scene, g).filter((v) => v.available);
        expect(choices.length, g.sceneId).toBeGreaterThan(0);
        // When every foe of the hub is dealt with, the hunts start again, so that the walk stays on the road.
        if (choices.every((v) => v.choice.next.startsWith("back14_"))) {
          g = { ...g, flags: Object.fromEntries(Object.entries(g.flags).filter(([f]) => !f.startsWith(HUNT_DONE))) };
          choices = getChoices(scene, g).filter((v) => v.available);
        }
        // Keep to the road: leaving it sends the walk back to its start.
        const onRoad = choices.filter((v) => !v.choice.next.startsWith("back14_"));
        const pool = onRoad.length ? onRoad : choices;
        // Favour the foe’s soft tone half the time, so that the walk wins fights as well as losing them.
        const soft = pool.filter((v) => tones.includes(v.choice.tone) && FOES.some((f) => g.sceneId.startsWith(f.id) && v.choice.tone === f.soft));
        const pick = soft.length && rand() < 0.5 ? soft[Math.floor(rand() * soft.length)] : pool[Math.floor(rand() * pool.length)];
        g = choose(story, g, pick.choice.id);
        reached.add(g.sceneId);
        if (i % 60 === 59) g = { ...g, stats: { ...g.stats, qi: Math.min(100, g.stats.qi + 50) }, flags: Object.fromEntries(Object.entries(g.flags).filter(([f]) => !f.startsWith(HUNT_DONE))) };
        expect(g.stats.qi).toBeGreaterThanOrEqual(0);
        expect(g.stats.qi).toBeLessThanOrEqual(100);
        expect(g.wealth).toBeGreaterThanOrEqual(0);
      }
      for (const f of FOES.slice(n * 4, n * 4 + 4)) expect([...reached].some((id) => id.startsWith(f.id)), f.id).toBe(true);
    }
  });
});

const HUNT_DONE = "hu_done_";

describe("drawing a hero at random", () => {
  const seeded = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  };

  it("picks one option for every field the creation screen asks, and every pick is one it offers", () => {
    const picks = randomPicks(seeded(1));
    expect(Object.keys(picks).sort()).toEqual([...HERO_FIELDS].sort());
    for (const field of HERO_FIELDS) expect(HERO_OPTIONS[field].map((o) => o.value)).toContain(picks[field]);
    expect(isHero({ name: "Wanderer", ...picks })).toBe(true);
  });

  it("is repeatable from a seed, differs from seed to seed, and reaches every option of every field in time", () => {
    expect(randomPicks(seeded(7))).toEqual(randomPicks(seeded(7)));
    expect(randomPicks(seeded(7))).not.toEqual(randomPicks(seeded(8)));
    const seen = Object.fromEntries(HERO_FIELDS.map((f) => [f, new Set<string>()]));
    const rand = seeded(99);
    for (let i = 0; i < 400; i++) {
      const picks = randomPicks(rand);
      for (const f of HERO_FIELDS) seen[f].add(picks[f]);
    }
    for (const f of HERO_FIELDS) expect(seen[f].size, f).toBe(HERO_OPTIONS[f].length);
  });

  it("stays inside the options at the ends of the range", () => {
    for (const edge of [0, 0.999999999]) {
      const picks = randomPicks(() => edge);
      for (const f of HERO_FIELDS) expect(HERO_OPTIONS[f].map((o) => o.value)).toContain(picks[f]);
    }
  });

  it("begins a game for any drawn hero", () => {
    const rand = seeded(5);
    for (let i = 0; i < 40; i++) {
      const hero = { name: "Wanderer", ...randomPicks(rand) } as Hero;
      const g = createGame(story, hero);
      expect(getScene(story, g.sceneId)).toBeDefined();
    }
  });
});

void chapters;
