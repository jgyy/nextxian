import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { applyEffects, choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { restoreGame } from "@/engine/save";
import { ATTIRES, DEFAULT_HERO, personalise, standingOf, type Attire, type Hero } from "@/engine/hero";
import { conditionsHold, ROAD_DONE_PREFIX } from "@/engine/npc";
import { carried, ledgerOf, payday, PAYDAY_EVERY } from "@/engine/economy";
import { changeDress, effectOf, applyBlock, applyItem, giftBlock, giftItem, giftScenarioId, GIFT_EVERY, sellItem, sellPrice, tierOf } from "@/engine/pack";
import { canChange, dressTrade, garmentName, garmentPrice, GARMENTS, gainGarment, loseGarment, marketRate, ownedGarments, pawnValue, putOn, wardrobeSummary, woreFlag } from "@/engine/wardrobe";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { auditStory } from "@/engine/audit";
import { countWords } from "@/engine/words";
import { BACK12, SPECS12, wardrobeAssets, wardrobeEntrances, wardrobeGroups, wardrobeItems, wardrobeReports, WAYSIDES12 } from "@/story/wardrobe";
import { slotsOf, synthesize, tipFor, WARD_WAYSIDE_BASE } from "@/story/wardrobe/build";
import { CRAFT_FIT, CRAFT_IDS } from "@/story/wardrobe/lexicon-craft";
import { STANCES } from "@/story/wardrobe/lexicon-stance";
import { wardrobeScenarios } from "@/story/wardrobe/scenarios";
import { parsedWardrobeRemarks } from "@/story/wardrobe/remarks";
import { rankEntrances } from "@/story/rank";
import { customEntrances } from "@/story/custom";
import { ageEntrances } from "@/story/age";
import { crossingEntrances } from "@/story/crossing";
import { cultivationEntrances } from "@/story/cultivation";
import { daoEntrances } from "@/story/dao";
import { fortuneEntrances } from "@/story/fortune";
import { tribulationEntrances } from "@/story/tribulation";
import { waysideEntrances } from "@/story/roads";
import { realmEntrances } from "@/story/roads2";
import { witnessEntrances } from "@/story/witness";
import type { Effect, GameState, Scene } from "@/engine/types";

const scenes: Scene[] = wardrobeGroups.flatMap((g) => g.scenes);
const at = (sceneId: string, h: Hero = DEFAULT_HERO, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);
const ids = (state: GameState) => getChoices(getScene(story, state.sceneId), state).map((v) => v.choice.id);
const hero = (attire: Attire): Hero => ({ ...DEFAULT_HERO, attire });
const spec = (id: string) => SPECS12.find((s) => s.id === id)!;
const waysideOf = (id: string) => WAYSIDES12[Math.floor(SPECS12.findIndex((s) => s.id === id) / 4)];
const shown = (id: string, h: Hero, patch: Partial<GameState> = {}) => enterScene(story, { ...at(id, h, patch), log: [] }, getScene(story, id)).log.map((e) => e.text).join(" ");

describe("the wardrobe", () => {
  it("begins with the dress the hero chose, and nothing else", () => {
    for (const a of ATTIRES) {
      const g = createGame(story, hero(a.value));
      expect(g.wardrobe).toEqual([a.value]);
      expect(ownedGarments(g)).toEqual([a.value]);
    }
  });

  it("puts on a garment the hero owns, changes what every line reads, and says so in the log", () => {
    let g = createGame(story, hero("rags"));
    g = gainGarment(g, "silk");
    expect(g.hero.attire).toBe("rags");
    expect(canChange(g, "silk")).toBe(true);
    expect(canChange(g, "armour")).toBe(false);
    expect(canChange(g, "rags")).toBe(false);
    g = changeDress(story, g, "silk");
    expect(g.hero.attire).toBe("silk");
    expect(g.log.at(-1)!.text).toMatch(/patched hemp.*embroidered silk/);
    expect(conditionsHold([{ kind: "hero", field: "attire", is: ["silk"] }], g)).toBe(true);
    expect(conditionsHold([{ kind: "hero", field: "attire", is: ["rags"] }], g)).toBe(false);
    expect(conditionsHold([{ kind: "wardrobe", attire: "rags" }], g)).toBe(true);
    expect(conditionsHold([{ kind: "wardrobe", attire: "armour" }], g)).toBe(false);
    expect(conditionsHold([{ kind: "garments", min: 2 }], g)).toBe(true);
    expect(() => changeDress(story, g, "armour")).toThrow();
  });

  it("changes the boots and hat the story names, and the standing the world gives, with the dress", () => {
    const g = putOn(gainGarment(createGame(story, hero("rags")), "armour"), "armour");
    expect(personalise("Mud on your boots.", g.hero)).toBe("Mud on your boot.".replace("boot.", "boots."));
    expect(personalise("Your hat.", hero("rags"))).toBe("Your headcloth.");
    expect(personalise("Your hat.", hero("traveller"))).toBe("Your hat.");
    expect(standingOf(g.hero, 0)).toBeGreaterThan(standingOf(hero("rags"), 0));
  });

  it("leaves flags a change of dress can be read by, and keeps only the last change as the one that just happened", () => {
    let g = gainGarment(gainGarment(createGame(story, hero("rags")), "silk"), "armour");
    g = { ...g, decisions: 5 };
    g = putOn(g, "silk");
    expect(g.flags[woreFlag("silk")]).toBe(true);
    expect(g.flags.dressing_from_rags).toBe(true);
    expect(g.flags.dressing_to_silk).toBe(true);
    expect(g.flagAt.dressing_to_silk).toBe(5);
    g = { ...g, decisions: 9 };
    g = putOn(g, "armour");
    expect(g.flags.dressing_from_silk).toBe(true);
    expect(g.flags.dressing_from_rags).toBeUndefined();
    expect(g.flags.dressing_to_silk).toBeUndefined();
    expect(g.flagAt.dressing_to_armour).toBe(9);
    expect(wardrobeSummary(g)).toEqual({ owned: 3, worn: 2, of: 5 });
  });

  it("owns a garment once, never loses the last one, and puts on the first they still own when the worn one goes", () => {
    let g = createGame(story, hero("traveller"));
    expect(gainGarment(gainGarment(g, "silk"), "silk").wardrobe).toEqual(["traveller", "silk"]);
    expect(loseGarment(g, "traveller").wardrobe).toEqual(["traveller"]);
    g = putOn(gainGarment(g, "silk"), "silk");
    const lost = loseGarment(g, "silk");
    expect(lost.wardrobe).toEqual(["traveller"]);
    expect(lost.hero.attire).toBe("traveller");
    expect(loseGarment(g, "armour").wardrobe).toEqual(["traveller", "silk"]);
  });

  it("applies the wear, gain and lose effects like any other effect", () => {
    const effects: Effect[] = [{ kind: "gainAttire", attire: "scholar" }, { kind: "wear", attire: "armour" }, { kind: "loseAttire", attire: "scholar" }];
    const g = applyEffects(createGame(story, hero("rags")), effects);
    expect(g.hero.attire).toBe("armour");
    expect(g.wardrobe).toEqual(["rags", "armour"]);
    expect(story.scenes["wd_hemp_ap_f1"].choices.some((c) => (c.effects ?? []).some((e) => e.kind === "wear"))).toBe(true);
  });

  it("prices a garment by the road’s realm and the weight of the cloth, and gives half back at the hatch", () => {
    for (const a of ATTIRES) {
      for (let r = 1; r < 8; r++) expect(garmentPrice(a.value, r)).toBeGreaterThan(garmentPrice(a.value, r - 1));
      expect(pawnValue(a.value, 3)).toBeLessThan(garmentPrice(a.value, 3));
    }
    expect(garmentPrice("silk", 0)).toBeGreaterThan(garmentPrice("rags", 0));
    expect(garmentPrice("rags", 0)).toBeGreaterThanOrEqual(2);
    expect(new Set(ATTIRES.map((a) => garmentName(a.value))).size).toBe(5);
  });

  it("pays and costs on a payday by the dress on the hero’s back, more at higher realms, and only on the road when the dress is a road dress", () => {
    expect(dressTrade("rags", 0, false)).toEqual({ income: 0, upkeep: 0 });
    expect(dressTrade("rags", 0, true).income).toBe(1);
    expect(dressTrade("scholar", 0, false).income).toBe(1);
    expect(dressTrade("silk", 0, false)).toEqual({ income: 0, upkeep: 1 });
    expect(dressTrade("silk", 6, false).upkeep).toBe(3);
    expect(dressTrade("armour", 3, true)).toEqual({ income: 4, upkeep: 2 });
    expect(dressTrade("traveller", 5, true)).toEqual({ income: 0, upkeep: 0 });
    const away = (a: Attire): GameState => ({ ...createGame(story, hero(a)), visited: ["departure_dawn"], wealth: 20, realm: 3 });
    expect(ledgerOf(story, away("armour")).dress).toBe(4);
    expect(ledgerOf(story, away("silk")).dressCost).toBe(2);
    const paid = payday(story, away("armour"));
    expect(paid.log.some((e) => /your dress brings in 4 and costs 2/.test(e.text))).toBe(true);
    expect(payday(story, away("silk")).wealth).toBeLessThan(20);
  });

  it("takes a hero who cannot pay the upkeep of silk down to nothing and no further", () => {
    const g: GameState = { ...createGame(story, hero("silk")), wealth: 0, visited: ["departure_dawn"] };
    expect(payday(story, g).wealth).toBe(0);
  });

  it("restores a save from before the wardrobe with the dress it began in, and a save with a wardrobe as it was", () => {
    const g = putOn(gainGarment(createGame(story, hero("rags")), "silk"), "silk");
    const raw = JSON.parse(JSON.stringify(g)) as Partial<GameState>;
    expect(restoreGame(raw, story)!.wardrobe).toEqual(["rags", "silk"]);
    expect(restoreGame(raw, story)!.hero.attire).toBe("silk");
    delete raw.wardrobe;
    delete raw.usedAt;
    const old = restoreGame(raw, story)!;
    expect(old.wardrobe).toEqual(["silk"]);
    expect(old.usedAt).toEqual({});
    expect(restoreGame({ ...raw, wardrobe: ["silk", "bogus", 4] }, story)!.wardrobe).toEqual(["silk"]);
  });
});

describe("the pack", () => {
  const ware = (kind: string) => Object.values(story.items!).find((i) => i.kind === kind && !i.use)!;
  const holding = (id: string): GameState => at("gate", DEFAULT_HERO, { items: { [id]: 1 }, decisions: 20 });

  it("lets every kind of item be used, and does something a hero can feel", () => {
    for (const kind of ["pill", "tool", "relic", "scripture", "material", "token"] as const) {
      const item = ware(kind);
      expect(item, kind).toBeDefined();
      const use = effectOf(item);
      expect(use.verb.length, kind).toBeGreaterThan(2);
      expect(use.effects.length, kind).toBeGreaterThan(0);
      const g = holding(item.id);
      expect(applyBlock(story, g, item.id), kind).toBeNull();
      const used = applyItem(story, g, item.id);
      expect(used.log.at(-1)!.text, kind).toMatch(new RegExp(`${use.verb.toLowerCase()} the ${item.name}`));
      expect(used.flags.pack_used, kind).toBe(true);
      expect(JSON.stringify(used.stats) !== JSON.stringify(g.stats) || used.cultivation !== g.cultivation || JSON.stringify(used.npc) !== JSON.stringify(g.npc), kind).toBe(true);
    }
  });

  it("uses up a pill, a material and a token, and rests a tool, a relic and a scripture for a payday", () => {
    for (const kind of ["pill", "material", "token"] as const) {
      const item = ware(kind);
      expect(carried(story, applyItem(story, holding(item.id), item.id))).toHaveLength(0);
    }
    for (const kind of ["tool", "relic", "scripture"] as const) {
      const item = ware(kind);
      const used = applyItem(story, holding(item.id), item.id);
      expect(used.items[item.id]).toBe(1);
      expect(applyBlock(story, used, item.id)).toMatch(/rest/);
      expect(() => applyItem(story, used, item.id)).toThrow();
      expect(applyBlock(story, { ...used, decisions: used.decisions + PAYDAY_EVERY }, item.id)).toBeNull();
    }
    expect(applyBlock(story, at("gate"), ware("pill").id)).toMatch(/do not carry/);
  });

  it("makes a pill the stronger the higher its realm, and a used pill is not then eaten again as an aid", () => {
    const low = Object.values(story.items!).find((i) => i.kind === "pill" && i.aid === 1)!;
    const high = Object.values(story.items!).find((i) => i.kind === "pill" && i.aid === 7)!;
    expect(tierOf(high)).toBeGreaterThan(tierOf(low));
    const gain = (i: typeof low) => applyItem(story, holding(i.id), i.id).stats.qi - holding(i.id).stats.qi;
    expect(gain(high)).toBeGreaterThan(gain(low));
  });

  it("sells an item for a share of its value that depends on the dress, never nothing for a thing worth something", () => {
    const item = ware("relic");
    expect(item.value).toBeGreaterThan(0);
    const prices = ATTIRES.map((a) => sellPrice(item, { hero: hero(a.value) }));
    expect(Math.max(...prices)).toBeGreaterThan(Math.min(...prices));
    expect(sellPrice(item, { hero: hero("silk") })).toBe(Math.max(1, Math.round(item.value * marketRate("silk"))));
    expect(marketRate("silk")).toBeGreaterThan(marketRate("rags"));
    const g = at("gate", hero("silk"), { items: { [item.id]: 2 }, wealth: 5 });
    const sold = sellItem(story, g, item.id);
    expect(sold.wealth).toBe(5 + sellPrice(item, g));
    expect(sold.items[item.id]).toBe(1);
    expect(sold.flags.pack_sold).toBe(true);
    expect(() => sellItem(story, sold, "no_such_item")).toThrow();
  });

  it("gives an item to the Elder, who answers in her own words, moves her feeling by the kind, and takes one gift in a payday", () => {
    for (const kind of ["pill", "tool", "relic", "scripture", "material", "token"] as const) {
      expect(wardrobeScenarios[giftScenarioId(kind)], kind).toBeDefined();
      expect(story.scenarios[giftScenarioId(kind)], kind).toBeDefined();
    }
    const item = ware("scripture");
    const g = at("gate", DEFAULT_HERO, { items: { [item.id]: 2 }, decisions: 12 });
    expect(giftBlock(story, g, item.id)).toBeNull();
    const given = giftItem(story, g, item.id);
    expect(given.items[item.id]).toBe(1);
    expect(given.npc.respect).toBeGreaterThan(g.npc.respect);
    expect(given.log.some((e) => e.kind === "npc")).toBe(true);
    expect(given.flags.pack_gifted).toBe(true);
    expect(given.history).toContain(giftScenarioId("scripture"));
    expect(giftBlock(story, given, item.id)).toMatch(/one gift/);
    expect(() => giftItem(story, given, item.id)).toThrow();
    expect(giftBlock(story, { ...given, decisions: given.decisions + GIFT_EVERY }, item.id)).toBeNull();
  });

  it("warms the Elder differently at different trust, so a gift is never answered by one line", () => {
    const item = ware("relic");
    const lines = [-60, -20, 0, 30, 70].map((trust) => {
      const g = at("gate", DEFAULT_HERO, { items: { [item.id]: 1 }, decisions: 12, npc: { trust, respect: 0, fear: 10, suspicion: 30 } });
      return giftItem(story, g, item.id).log.filter((e) => e.kind === "npc").at(-1)!.text;
    });
    expect(new Set(lines).size).toBe(5);
  });
});

describe("the Wardrobe Roads", () => {
  it("add a thousand scenes: eight waysides, thirty-two roads of thirty-one scenes, and the hubs and ways back", () => {
    expect(WAYSIDES12).toHaveLength(8);
    expect(wardrobeGroups).toHaveLength(8);
    expect(SPECS12).toHaveLength(32);
    expect(scenes.filter((s) => !s.id.startsWith("wayside_"))).toHaveLength(32 * 31);
    expect(scenes.length + wardrobeGroups.length).toBeGreaterThanOrEqual(1000);
    expect(chapters.filter((c) => c.name.startsWith("Wardrobe Roads:"))).toHaveLength(8);
    expect(Object.keys(wardrobeEntrances)).toHaveLength(8);
  });

  it("opens each wayside from a scene no earlier wave opens from, once, and asks a realm that rises one craft at a time", () => {
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
      ...Object.keys(tribulationEntrances),
    ]);
    for (const origin of Object.keys(wardrobeEntrances)) {
      expect(story.scenes[origin], origin).toBeDefined();
      expect(earlier.has(origin), origin).toBe(false);
      expect(story.scenes[origin].choices.filter((c) => c.id.startsWith("wayside_ward_")), origin).toHaveLength(1);
      expect(story.scenes[BACK12(origin)], origin).toBeDefined();
    }
    expect(WAYSIDES12.map((w) => w.realm)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(WAYSIDES12.map((w) => w.craft)).toEqual([...CRAFT_IDS]);
  });

  it("keeps every scene within the word cap, with a heading and four choices, and leaves no slot unfilled", () => {
    for (const s of scenes) {
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(s.title.trim(), s.id).not.toBe("");
      expect(s.choices.filter((c) => !c.hideLocked).length, s.id).toBeGreaterThanOrEqual(4);
      const text = [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)].join(" ");
      expect(text, s.id).not.toMatch(/\{\w+\}/);
    }
    for (const sc of [...Object.values(wardrobeReports), ...Object.values(wardrobeScenarios)]) {
      const text = [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)].join(" ");
      expect(text, sc.id).not.toMatch(/\{\w+\}/);
    }
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("writes each road in its own words: every keeper, place, good, holding and beat is its own", () => {
    const texts = SPECS12.flatMap((s) => [...synthesize(s).beats.flat(), ...synthesize(s).deep, s.close, s.intro]);
    expect(new Set(texts).size).toBe(texts.length);
    for (const key of ["kname", "id", "place", "keeper", "title"] as const) expect(new Set(SPECS12.map((s) => s[key])).size, key).toBe(SPECS12.length);
    expect(new Set(SPECS12.map((s) => s.ware.name)).size).toBe(32);
    expect(new Set(SPECS12.map((s) => s.holding.name)).size).toBe(32);
    for (const s of SPECS12) {
      expect(s.ware.name, s.id).not.toMatch(/^(the|a|an) /i);
      expect(s.holding.name, s.id).not.toMatch(/^(the|a|an) /i);
    }
  });

  it("gives every wayside two women and two men as keepers, one of each stance, and a craft", () => {
    for (let n = 0; n < 8; n++) {
      const here = SPECS12.slice(n * 4, n * 4 + 4);
      expect(here.map((s) => s.stance).sort()).toEqual([...STANCES].sort());
      expect(here.filter((s) => s.gender === "woman")).toHaveLength(2);
      expect(here.every((s) => s.craft === CRAFT_IDS[n])).toBe(true);
    }
  });

  it("fills the keeper’s pronouns by their own gender", () => {
    for (const s of SPECS12) {
      const slots = slotsOf(s, s.place);
      expect(slots.kthey).toBe(s.gender === "woman" ? "she" : "he");
    }
  });

  it("reads the dress a hero has on, at the entry, at the start of every approach and at its end, for all five dresses, and differently for each", () => {
    for (const s of SPECS12) {
      const lines = ATTIRES.map((a) => shown(`${s.id}_entry`, hero(a.value)));
      expect(new Set(lines).size, s.id).toBe(5);
      for (const a of ATTIRES) {
        expect(shown(`${s.id}_a1s0`, hero(a.value))).not.toBe(shown(`${s.id}_a1s0`, hero(ATTIRES.find((o) => o.value !== a.value)!.value)));
        expect(shown(`${s.id}_a2s4`, hero(a.value)).length).toBeGreaterThan(100);
      }
    }
  });

  it("reads a hero who changes dress between one scene and the next in the dress they have on now", () => {
    const s = SPECS12[8];
    const before = shown(`${s.id}_entry`, hero("rags"));
    const g = putOn(gainGarment(at(`${s.id}_entry`, hero("rags")), "silk"), "silk");
    const after = enterScene(story, { ...g, log: [] }, getScene(story, `${s.id}_entry`)).log.map((e) => e.text).join(" ");
    expect(after).not.toBe(before);
    expect(after).toBe(shown(`${s.id}_entry`, hero("silk")));
  });

  it("opens a hub of four roads and a way back to the scene it branched from, and shuts a road once it is done", () => {
    for (const [n, w] of WAYSIDES12.entries()) {
      const hub = story.scenes[w.id];
      expect(hub.choices.filter((c) => c.id.startsWith("go_"))).toHaveLength(4);
      expect(hub.choices.at(-1)!.next).toBe(BACK12(w.origin));
      const spec0 = SPECS12[n * 4];
      const g = at(w.id, DEFAULT_HERO, { flags: { [`wd_done_w${n + 1}_${spec0.id}`]: true } });
      expect(view(g, `go_${spec0.id}`)!.available).toBe(false);
      expect(view(at(w.id), `go_${spec0.id}`)!.available).toBe(true);
    }
  });

  it("gives each road a fitting of six scenes: the counter, the rack, the fitting, the commission, the hatch and the mirror", () => {
    for (const s of SPECS12) {
      for (let n = 0; n < 6; n++) expect(story.scenes[`${s.id}_f${n}`], `${s.id}_f${n}`).toBeDefined();
      expect(ids(at(`${s.id}_entry`, DEFAULT_HERO, { realm: 7 }))).toContain("fitting");
      expect(ids(at(`${s.id}_f0`))).toEqual(["browse", "commission", "pawn", "glass"]);
    }
  });

  it("sells every garment at the rack for the price of the road’s realm, wears it at once, and shuts what the hero already owns", () => {
    const s = spec("wd_silk_ap");
    const R = waysideOf(s.id).realm;
    for (const a of ATTIRES) {
      const cost = garmentPrice(a.value, R);
      const own = at(`${s.id}_f1`, hero(a.value), { wealth: 500 });
      expect(view(own, `buy_${a.value}`)!.available, a.value).toBe(false);
      const other = ATTIRES.find((o) => o.value !== a.value)!.value;
      const g = at(`${s.id}_f1`, hero(other), { wealth: cost });
      expect(view(g, `buy_${a.value}`)!.available).toBe(true);
      const bought = choose(story, g, `buy_${a.value}`);
      expect(bought.hero.attire).toBe(a.value);
      expect(bought.wardrobe).toEqual([other, a.value]);
      expect(bought.wealth).toBe(0);
      expect(bought.sceneId).toBe(`${s.id}_f2`);
      expect(bought.flags.wdx_bought).toBe(true);
      expect(view(at(`${s.id}_f1`, hero(other), { wealth: cost - 1 }), `buy_${a.value}`)!.available).toBe(false);
    }
  });

  it("gives the keeper’s verdict on the new dress, and a tip that costs a sixth, and a slip that costs the keeper’s trust", () => {
    const s = spec("wd_hemp_ap");
    const verdicts = ATTIRES.map((a) => shown(`${s.id}_f2`, hero(a.value)));
    expect(new Set(verdicts).size).toBe(5);
    const g = at(`${s.id}_f2`, DEFAULT_HERO, { wealth: 10 });
    const tip = tipFor(garmentPrice("traveller", 0));
    expect(view(g, "tip")!.available).toBe(true);
    const tipped = choose(story, g, "tip");
    expect(tipped.wealth).toBe(10 - tip);
    expect(tipped.stats.karma).toBeGreaterThan(g.stats.karma);
    expect(view(at(`${s.id}_f2`, DEFAULT_HERO, { wealth: 0 }), "tip")!.available).toBe(false);
    const slipped = choose(story, g, "slip");
    expect(slipped.stats.karma).toBeLessThan(g.stats.karma);
    expect(slipped.flags[`${s.id}_fit_slipped`]).toBe(true);
  });

  it("pays a wage at the commission that is better in the right dress, and shuts a second wage", () => {
    for (const s of SPECS12) {
      const R = waysideOf(s.id).realm;
      const wage = 3 + 2 * R;
      const fitAttire = CRAFT_FIT[s.craft];
      const wear = (a: Attire) => at(`${s.id}_f3`, hero(a), { wealth: 0, stats: { qi: 20, karma: 0, insight: 10 } });
      const plain = chooseOnce(wear(fitAttire), "piece");
      expect(plain.wealth, s.id).toBe(wage);
      expect(plain.flags[`${s.id}_fit_worked`]).toBe(true);
      expect(view(plain, "deliver")).toBeUndefined();
      const delivered = chooseOnce(wear(fitAttire), "deliver");
      expect(delivered.wealth, s.id).toBe(3 * wage);
      const wrong = ATTIRES.find((a) => a.value !== fitAttire)!.value;
      expect(view(wear(wrong), "deliver")!.available, s.id).toBe(false);
      for (const a of ATTIRES) {
        const open = ["deliver", "model", "beg"].filter((id) => view(wear(a.value), id)!.available);
        expect(open.length, `${s.id} ${a.value}`).toBeGreaterThanOrEqual(1);
      }
      const modelled = chooseOnce(wear("silk"), "model");
      expect(modelled.wealth).toBe(2 * wage);
      expect(view(wear("silk"), "beg")!.available).toBe(false);
      expect(view(wear("rags"), "model")!.available).toBe(false);
      expect(chooseOnce(wear("rags"), "beg").wealth).toBe(2 * wage);
    }
  });

  it("lets a hero forge a pattern for the best pay and the worst karma, and only with Insight 14", () => {
    const s = spec("wd_cot_mk");
    const g = at(`${s.id}_f3`, DEFAULT_HERO, { stats: { qi: 20, karma: 0, insight: 13 }, wealth: 0 });
    expect(view(g, "forge")!.available).toBe(false);
    const sharp = { ...g, stats: { ...g.stats, insight: 14 } };
    const done = chooseOnce(sharp, "forge");
    expect(done.wealth).toBe(3 * (3 + 2 * 2));
    expect(done.stats.karma).toBeLessThan(0);
    expect(done.flags.wdx_forged).toBe(true);
    expect(view(done, "forge")).toBeUndefined();
  });

  it("pawns a spare garment for half its price, never the one worn, and one a visit", () => {
    const s = spec("wd_scale_ap");
    const R = waysideOf(s.id).realm;
    const bare = at(`${s.id}_f4`, hero("rags"));
    expect(ATTIRES.some((a) => view(bare, `pawn_${a.value}`)!.available)).toBe(false);
    expect(view(at(`${s.id}_f0`, hero("rags")), "pawn")!.available).toBe(false);
    const rich = at(`${s.id}_f4`, hero("rags"), { wardrobe: ["rags", "silk", "armour"], wealth: 0 });
    expect(view(rich, "pawn_rags")!.available).toBe(false);
    expect(view(at(`${s.id}_f0`, hero("rags"), { wardrobe: ["rags", "silk"] }), "pawn")!.available).toBe(true);
    const sold = chooseOnce(rich, "pawn_silk");
    expect(sold.wealth).toBe(pawnValue("silk", R));
    expect(sold.wardrobe).toEqual(["rags", "armour"]);
    expect(sold.hero.attire).toBe("rags");
    expect(ATTIRES.some((a) => view({ ...sold, sceneId: `${s.id}_f4` }, `pawn_${a.value}`)!.available)).toBe(false);
  });

  it("ends every fitting at the mirror, which the keeper and the Elder both read against the dress, and then at the road’s way back", () => {
    for (const s of SPECS12) {
      const mirrors = ATTIRES.map((a) => shown(`${s.id}_f5`, hero(a.value)));
      expect(new Set(mirrors).size, s.id).toBe(5);
      const g = at(`${s.id}_f5`, DEFAULT_HERO);
      for (const c of ["mirror_thank", "mirror_ask", "mirror_quiet", "mirror_go"]) expect(getScene(story, `${s.id}_f5`).choices.find((x) => x.id === c)!.next).toBe(`${s.id}_return`);
      const done = chooseOnce(g, "mirror_thank");
      expect(done.sceneId).toBe(`${s.id}_return`);
      expect(done.history).toContain("WARDROBE_MIRROR");
    }
    const elderAt = (a: Attire) => shown("wd_hemp_ap_f5", hero(a));
    expect(new Set(ATTIRES.map((a) => elderAt(a.value).split("\n").length)).size).toBeGreaterThan(0);
  });

  it("is walked end to end by every dress: buy, wear, work, pawn and report, with the numbers staying sound", () => {
    for (const a of ATTIRES) {
      const s = spec("wd_dust_mk");
      const R = waysideOf(s.id).realm;
      let g = at(`${s.id}_entry`, hero(a.value), { wealth: 200, realm: R, cultivation: 0, stats: { qi: 50, karma: 5, insight: 20 }, decisions: 10 });
      g = chooseOnce(g, "fitting");
      g = chooseOnce(g, "browse");
      const buy = ATTIRES.find((o) => o.value !== a.value)!.value;
      g = chooseOnce(g, `buy_${buy}`);
      expect(g.hero.attire).toBe(buy);
      g = chooseOnce(g, "thank");
      g = chooseOnce(g, "mirror_thank");
      expect(g.sceneId).toBe(`${s.id}_return`);
      g = chooseOnce(g, "report");
      expect(g.sceneId).toBe(waysideOf(s.id).id);
      expect(g.flags[`wd_done_w${WAYSIDES12.indexOf(waysideOf(s.id)) + 1}_${s.id}`]).toBe(true);
      expect(g.wealth).toBeGreaterThanOrEqual(0);
      expect(g.stats.qi).toBeLessThanOrEqual(100);
      expect(g.wardrobe).toContain(buy);
    }
  });

  it("gives each road its goods and its holding, priced by the road, and the Elder a report that remembers the counter", () => {
    expect(Object.keys(wardrobeItems)).toHaveLength(32);
    expect(Object.keys(wardrobeAssets)).toHaveLength(32);
    for (const s of SPECS12) {
      const report = wardrobeReports[`REPORT_FORTUNE_${s.id.toUpperCase()}`];
      expect(report, s.id).toBeDefined();
      const flags = (report.memory ?? []).flatMap((m) => m.when).filter((c) => c.kind === "flag").map((c) => (c as { flag: string }).flag);
      for (const f of ["forged", "slipped", "pawned", "delivered", "bought", "worked"]) expect(flags, `${s.id} ${f}`).toContain(`${s.id}_fit_${f}`);
    }
  });

  it("makes every earning choice at a counter once-only, so the stones cannot be farmed", () => {
    for (const s of SPECS12) {
      for (const n of [3, 4]) {
        for (const c of getScene(story, `${s.id}_f${n}`).choices) {
          const gain = (c.effects ?? []).some((e) => e.kind === "addWealth" && e.amount > 0);
          if (gain) expect((c.requires ?? []).some((r) => r.kind === "flag" && r.is === false), `${s.id}_f${n}>${c.id}`).toBe(true);
        }
      }
    }
  });

  it("speaks of dress in the main line: the terraces, the dais, the rope, the courtyard, the Elder’s eye and the window", () => {
    for (const id of ["tribunal_crowd", "tribunal_summons_2", "descent_return_3", "mist_remembers_2", "jade_eye_return_3", "archive_rest_2"]) {
      const lines = ATTIRES.map((a) => shown(id, hero(a.value)));
      expect(new Set(lines).size, id).toBe(5);
      expect(sceneBodyWords(story.scenes[id]), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
    const ending = (a: Attire) => shown("sealing_choice_2", hero(a));
    expect(new Set(ATTIRES.map((a) => ending(a.value))).size).toBe(5);
    expect(shown("sealing_choice_2", DEFAULT_HERO, { flags: { wore_rags: true, wore_silk: true, wore_armour: true } })).toMatch(/so many people on this mountain/);
    expect(shown("sealing_choice_2", DEFAULT_HERO)).not.toMatch(/so many people on this mountain/);
  });

  it("has the Elder read a change of dress from what was taken off and what was put on, once, a few decisions after", () => {
    const remarks = parsedWardrobeRemarks();
    const transitions = remarks.filter((r) => r.id.startsWith("su_wear_"));
    expect(transitions).toHaveLength(20);
    expect(new Set(transitions.map((r) => r.line)).size).toBe(20);
    let g = at("gate", hero("rags"), { decisions: 10, lastRemark: 0, lastAside: 10 });
    g = putOn(gainGarment(g, "silk"), "silk");
    const fits = transitions.filter((r) => conditionsHold(r.when, { ...g, decisions: 12 }));
    expect(fits.map((r) => r.id)).toEqual(["su_wear_rags_silk"]);
    expect(fits[0].line).toMatch(/patched hemp/);
    expect(fits[0].line).toMatch(/silk/i);
    expect(transitions.filter((r) => conditionsHold(r.when, { ...g, decisions: 30 }))).toHaveLength(0);
  });

  it("keeps the road flags clear of the ones other waves count", () => {
    for (const s of SPECS12) expect(s.id.startsWith("wd_"), s.id).toBe(true);
    expect(ROAD_DONE_PREFIX.startsWith("wd_")).toBe(false);
    expect(WARD_WAYSIDE_BASE).toBe(900);
    expect(countWords("a b")).toBe(2);
    expect(GARMENTS.rags.name).toBe("patched hemp");
  });
});

/** Takes the one choice, with the hero’s numbers topped up so that nothing is merely locked by a stat. */
function chooseOnce(state: GameState, choiceId: string): GameState {
  return choose(story, state, choiceId);
}
