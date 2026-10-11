import { describe, expect, it } from "vitest";
import { story, chapters } from "@/story";
import { applyEffects, choose, createGame, getChoices, getScene, settle } from "@/engine/game";
import { gainCultivation, heartDemonBlocks, REALMS } from "@/engine/cultivation";
import {
  applyAid,
  AID_REACH,
  carried,
  cultivationSpeed,
  inSect,
  isUnfed,
  ledgerOf,
  livingCostFor,
  payday,
  PAYDAY_EVERY,
  priceTag,
  speedParts,
  startingWealth,
  stipendFor,
  UNFED_PENALTY,
} from "@/engine/economy";
import { DEFAULT_HERO, type Hero } from "@/engine/hero";
import { parseConditions, parseEffects, parseRemarks } from "@/engine/markup";
import { conditionsHold } from "@/engine/npc";
import { restoreGame } from "@/engine/save";
import { validateEconomy, validateStory } from "@/engine/validate";
import type { AssetDef, GameState, ItemDef, Story } from "@/engine/types";

const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const fresh = (h: Hero = DEFAULT_HERO): GameState => createGame(story, h);
const at = (sceneId: string, patch: Partial<GameState> = {}, h: Hero = DEFAULT_HERO): GameState => settle(story, { ...fresh(h), sceneId, log: [], ...patch });

const item = (patch: Partial<ItemDef> = {}): ItemDef => ({ id: "t", name: "Test Tool", kind: "tool", blurb: "A test.", value: 5, speed: 10, ...patch });
const asset = (patch: Partial<AssetDef> = {}): AssetDef => ({ id: "a", name: "Test Stall", blurb: "A test.", income: 4, upkeep: 1, speed: 3, ...patch });
const withDefs = (items: ItemDef[], assets: AssetDef[], leavesSect?: string): Story => ({
  ...story,
  items: Object.fromEntries(items.map((i) => [i.id, i])),
  assets: Object.fromEntries(assets.map((a) => [a.id, a])),
  leavesSect,
});

describe("the purse", () => {
  it("starts richer for a noble and for a trader’s runner, and an outcast starts almost with nothing", () => {
    const outcast = startingWealth(hero({ status: "outcast", background: "orphan" }));
    const noble = startingWealth(hero({ status: "noble", background: "merchant" }));
    expect(outcast).toBeLessThan(startingWealth(DEFAULT_HERO));
    expect(noble).toBeGreaterThan(startingWealth(DEFAULT_HERO) * 4);
    expect(fresh(hero({ status: "noble" })).wealth).toBe(startingWealth(hero({ status: "noble" })));
  });

  it("never goes below nothing, and the pack and holdings keep their order", () => {
    let s = applyEffects(fresh(), [{ kind: "addWealth", amount: -9999 }]);
    expect(s.wealth).toBe(0);
    s = applyEffects(s, [
      { kind: "giveItem", item: "x", count: 2 },
      { kind: "takeItem", item: "x" },
      { kind: "grantAsset", asset: "a" },
      { kind: "grantAsset", asset: "a" },
      { kind: "grantAsset", asset: "b" },
      { kind: "loseAsset", asset: "a" },
    ]);
    expect(s.items).toEqual({ x: 1 });
    expect(s.assets).toEqual(["b"]);
    expect(applyEffects(s, [{ kind: "takeItem", item: "x", count: 5 }]).items).toEqual({});
  });

  it("reads the purse, the pack and the holdings as conditions, and lets “max 0” mean “none”", () => {
    const s = { ...fresh(), wealth: 12, items: { pill: 2 }, assets: ["a", "b"], speed: 118, unfed: false };
    expect(conditionsHold([{ kind: "wealth", min: 12 }], s)).toBe(true);
    expect(conditionsHold([{ kind: "wealth", min: 13 }], s)).toBe(false);
    expect(conditionsHold([{ kind: "item", item: "pill" }], s)).toBe(true);
    expect(conditionsHold([{ kind: "item", item: "pill", min: 3 }], s)).toBe(false);
    expect(conditionsHold([{ kind: "item", item: "none", max: 0 }], s)).toBe(true);
    expect(conditionsHold([{ kind: "item", item: "pill", max: 0 }], s)).toBe(false);
    expect(conditionsHold([{ kind: "asset", asset: "a" }], s)).toBe(true);
    expect(conditionsHold([{ kind: "asset", asset: "c", is: false }], s)).toBe(true);
    expect(conditionsHold([{ kind: "holdings", min: 2 }], s)).toBe(true);
    expect(conditionsHold([{ kind: "speed", min: 120 }], s)).toBe(false);
    expect(conditionsHold([{ kind: "unfed", is: false }], s)).toBe(true);
  });

  it("is written in the markup the books use", () => {
    expect(parseConditions("wealth>=10 & item:pill>=1 & !asset:stall & holdings>=2 & speed>=110 & unfed", "t")).toEqual([
      { kind: "wealth", min: 10 },
      { kind: "item", item: "pill", min: 1 },
      { kind: "asset", asset: "stall", is: false },
      { kind: "holdings", min: 2 },
      { kind: "speed", min: 110 },
      { kind: "unfed" },
    ]);
    expect(parseEffects("stones-12 item+pill item-lamp asset+stall asset-hut", "t").effects).toEqual([
      { kind: "addWealth", amount: -12 },
      { kind: "giveItem", item: "pill" },
      { kind: "takeItem", item: "lamp" },
      { kind: "grantAsset", asset: "stall" },
      { kind: "loseAsset", asset: "hut" },
    ]);
    expect(parseRemarks("% r | wealth>=5 | elder | Said.", "t")[0].when).toEqual([{ kind: "wealth", min: 5 }]);
  });
});

describe("cultivation speed", () => {
  const s0 = withDefs([item({ speed: 10, needsRealm: 2 })], [asset({ speed: 4, needsRealm: 2 })]);

  it("is the plain rate for a paddy hand, a little more for a copyist’s apprentice, and is shown part by part", () => {
    expect(cultivationSpeed(story, fresh())).toBe(100);
    expect(cultivationSpeed(story, fresh(hero({ background: "scholar" })))).toBeGreaterThan(100);
    const parts = speedParts(story, fresh(hero({ background: "scholar" })));
    expect(parts[0]).toEqual({ label: "Plain rate", points: 100 });
    expect(parts.reduce((n, p) => n + p.points, 0)).toBe(cultivationSpeed(story, fresh(hero({ background: "scholar" }))));
  });

  it("counts a tool and a holding only once the hero has the realm for them", () => {
    const low = { ...fresh(), realm: 1, items: { t: 1 }, assets: ["a"] };
    const high = { ...low, realm: 2 };
    expect(cultivationSpeed(s0, low)).toBe(100);
    expect(cultivationSpeed(s0, high)).toBe(114);
    expect(speedParts(s0, high).map((p) => p.label)).toEqual(["Plain rate", "Test Tool", "Test Stall"]);
  });

  it("slows a hero who cannot pay their keep once the sect has stopped paying it, and only then", () => {
    const away = withDefs([], [], "gone");
    const broke = { ...fresh(), realm: 3, wealth: 0, visited: ["gone"] };
    expect(isUnfed(away, broke)).toBe(true);
    expect(cultivationSpeed(away, broke)).toBe(100 - UNFED_PENALTY);
    expect(isUnfed(away, { ...broke, visited: [] })).toBe(false);
    expect(isUnfed(away, { ...broke, wealth: livingCostFor(3) })).toBe(false);
    expect(isUnfed(away, { ...broke, realm: 1 })).toBe(false);
    expect(cultivationSpeed(away, { ...broke, visited: [] })).toBe(100);
  });

  it("makes the same decision earn more points for a faster hero, and a hero’s points never drift into long decimals", () => {
    const quick = withDefs([item({ speed: 40 })], []);
    const plain = fresh();
    const faster = { ...plain, items: { t: 1 } };
    const a = choose(quick, plain, "bow_and_state");
    const b = choose(quick, faster, "bow_and_state");
    expect(b.cultivation).toBeGreaterThan(a.cultivation);
    expect(Number.isInteger(a.cultivation * 100)).toBe(true);
    expect(Number.isInteger(b.cultivation * 100)).toBe(true);
  });
});

describe("payday", () => {
  const sect = withDefs([], [asset({ income: 4, upkeep: 1 })], "gone");

  it("brings the sect’s stipend to a hero on the mountain, rising with the realm, every eighth decision", () => {
    expect(stipendFor(0)).toBe(1);
    expect(stipendFor(3)).toBe(4);
    let s = { ...fresh(), wealth: 10, realm: 2, decisions: PAYDAY_EVERY - 1 };
    s = choose(story, { ...s, sceneId: "gate" }, "bow_and_state");
    expect(s.decisions).toBe(PAYDAY_EVERY);
    expect(s.wealth).toBe(10 + stipendFor(2));
  });

  it("pays a holding’s income and charges its upkeep, and says so", () => {
    const s = payday(sect, { ...fresh(), wealth: 5, assets: ["a"], visited: [] });
    expect(s.wealth).toBe(5 + stipendFor(0) + 4 - 1);
    expect(s.log.at(-1)?.kind).toBe("ledger");
    expect(s.log.at(-1)?.text).toContain("4 spirit stones");
  });

  it("charges the cost of living to a hero who has left, as far as the purse allows, and says when they become Unfed", () => {
    const left = withDefs([], [], "gone");
    const s = payday(left, { ...fresh(), wealth: livingCostFor(5) + 1, realm: 5, visited: ["gone"] });
    expect(s.wealth).toBe(1);
    expect(s.log.at(-1)?.text).toContain("Unfed");
    expect(inSect(left, { visited: ["gone"] })).toBe(false);
    const rich = payday(left, { ...fresh(), wealth: 50, realm: 5, visited: ["gone"] });
    expect(rich.wealth).toBe(50 - livingCostFor(5));
    expect(rich.log.filter((e) => e.kind === "ledger")).toHaveLength(0);
  });

  it("takes back a holding whose upkeep cannot be met", () => {
    const pricey = withDefs([], [asset({ income: 0, upkeep: 3, speed: undefined })], "gone");
    const s = payday(pricey, { ...fresh(), wealth: 1, assets: ["a"], visited: ["gone"] });
    expect(s.assets).toEqual([]);
    expect(s.log.some((e) => e.text.includes("cannot meet the upkeep"))).toBe(true);
  });

  it("reports the next payday’s sums for the panel", () => {
    const l = ledgerOf(sect, { ...fresh(), realm: 1, assets: ["a"], visited: [] });
    expect(l).toMatchObject({ stipend: 2, income: 4, upkeep: 1, living: 0, net: 5 });
  });
});

describe("a pill that opens the next realm", () => {
  const pill = item({ id: "pill", name: "Test Pill", kind: "pill", speed: undefined, aid: 3 });
  const s = withDefs([pill], []);
  const near = (points: number, extra: Partial<GameState> = {}): GameState => ({ ...fresh(), realm: 2, cultivation: points, items: { pill: 1 }, stats: { qi: 20, karma: 0, insight: 10 }, ...extra });

  it("is eaten when the points come within reach of the realm it serves, and the realm opens", () => {
    const after = applyAid(s, near(REALMS[3].threshold * AID_REACH + 1));
    expect(after.realm).toBe(3);
    expect(after.items).toEqual({});
    expect(after.cultivation).toBe(REALMS[3].threshold);
    expect(after.log.at(-1)?.text).toContain("Test Pill");
  });

  it("does nothing below its reach, for another realm, or without the pill", () => {
    expect(applyAid(s, near(REALMS[3].threshold * AID_REACH - 5)).realm).toBe(2);
    expect(applyAid(s, { ...near(REALMS[3].threshold * AID_REACH + 1), realm: 1 }).realm).toBe(1);
    expect(applyAid(s, { ...near(REALMS[3].threshold * AID_REACH + 1), items: {} }).realm).toBe(2);
  });

  it("is held back by a heart demon, as the points themselves would be, and is not wasted", () => {
    const demon = near(REALMS[3].threshold * AID_REACH + 1, { stats: { qi: 20, karma: -50, insight: 10 } });
    expect(heartDemonBlocks({ ...demon, cultivation: REALMS[3].threshold })).toBe(true);
    const after = applyAid(s, demon);
    expect(after.realm).toBe(2);
    expect(after.items).toEqual({ pill: 1 });
  });

  it("works through a real choice, after the points arrive", () => {
    const state: GameState = { ...near(REALMS[3].threshold * AID_REACH - 0.5, { sceneId: "gate" }), visited: ["gate"] };
    const after = choose(s, state, "bow_and_state");
    expect(after.realm).toBe(3);
    expect(after.log.some((e) => e.kind === "realm" && e.text.includes("Test Pill"))).toBe(true);
    // the same points without the pill leave the hero where they were
    const without = choose(s, { ...state, items: {} }, "bow_and_state");
    expect(without.realm).toBe(2);
    expect(gainCultivation({ ...state, items: {} }, 0).realm).toBe(2);
  });
});

describe("saves", () => {
  it("restore a game from before the purse with the hero’s starting purse and an empty pack", () => {
    const saved = JSON.parse(JSON.stringify(fresh(hero({ status: "gentry" }))));
    delete saved.wealth;
    delete saved.items;
    delete saved.assets;
    delete saved.speed;
    delete saved.unfed;
    const back = restoreGame(saved, story)!;
    expect(back.wealth).toBe(startingWealth(hero({ status: "gentry" })));
    expect(back.items).toEqual({});
    expect(back.assets).toEqual([]);
    expect(back.speed).toBe(100);
  });

  it("keeps what the pack holds, drops what is not a count, and works the speed out again", () => {
    const base = fresh();
    const some = Object.keys(story.items!)[0];
    const saved = JSON.parse(JSON.stringify({ ...base, items: { [some]: 1, junk: "x", gone: 0 }, assets: [Object.keys(story.assets!)[0], 7], wealth: 33 }));
    const back = restoreGame(saved, story)!;
    expect(back.items).toEqual({ [some]: 1 });
    expect(back.assets).toEqual([Object.keys(story.assets!)[0]]);
    expect(back.wealth).toBe(33);
  });
});

describe("the validator’s view of money", () => {
  const tweak = (fn: (s: Story) => Story) => validateEconomy(fn(structuredClone(story)));

  it("finds the whole story sound", () => {
    expect(validateEconomy(story)).toEqual([]);
    expect(validateStory(story)).toEqual([]);
  });

  it("finds a choice that spends without requiring the money, hands over what it need not hold, or names what does not exist", () => {
    const found = tweak((s) => {
      const c = s.scenes.lamp_oil_a0s1.choices.find((x) => x.id === "buy")!;
      c.requires = c.requires!.filter((r) => r.kind !== "wealth");
      const t = s.scenes.lamp_oil_a0s2.choices.find((x) => x.id === "sell")!;
      t.requires = [];
      s.scenes.lamp_oil_a0s1.choices.push({ id: "ghost", label: "Take a ghost.", tone: "quiet", next: "lamp_oil_a0s2", effects: [{ kind: "giveItem", item: "no_such_item" }] });
      return s;
    });
    expect(found.some((p) => p.includes("spends") && p.includes("without requiring"))).toBe(true);
    expect(found.some((p) => p.includes("hands over"))).toBe(true);
    expect(found.some((p) => p.includes("unknown item"))).toBe(true);
  });

  it("finds a lease that can be signed twice, and a holding that costs more than it pays", () => {
    const found = tweak((s) => {
      const c = s.scenes.lamp_oil_a3s4.choices.find((x) => x.id === "lease")!;
      c.requires = c.requires!.filter((r) => r.kind !== "asset");
      s.assets!.lamp_oil_hold.upkeep = 99;
      return s;
    });
    expect(found.some((p) => p.includes("takes on") && p.includes("does not hold"))).toBe(true);
    expect(found.some((p) => p.includes("costs more than it pays"))).toBe(true);
  });

  it("tags a choice with its price before it is paid", () => {
    expect(priceTag([{ kind: "addWealth", amount: -10 }, { kind: "giveItem" }])).toEqual({ cost: 10, gain: 0 });
    expect(priceTag([{ kind: "addWealth", amount: 7 }])).toEqual({ cost: 0, gain: 7 });
    expect(priceTag(undefined)).toEqual({ cost: 0, gain: 0 });
  });
});

describe("what a hero can do with money in the story", () => {
  /** Walks a list of choice ids from a scene, asserting each was available. */
  const walk = (state: GameState, ids: string[]): GameState => {
    let s = state;
    for (const id of ids) {
      const view = getChoices(getScene(story, s.sceneId), s).find((v) => v.choice.id === id);
      expect(view, `${s.sceneId} has ${id}`).toBeDefined();
      expect(view!.available, `${s.sceneId}>${id} is available (${view!.hint})`).toBe(true);
      s = choose(story, s, id);
    }
    return s;
  };

  it("buys the goods, which cost the road’s price and quicken cultivation once the hero has the realm", () => {
    const start = at("lamp_oil_entry", { realm: 1, wealth: 50, stats: { qi: 20, karma: 0, insight: 10 } });
    const s = walk(start, ["approach_0", "mercy"]);
    expect(s.sceneId).toBe("lamp_oil_a0s1");
    const bought = walk(s, ["buy"]);
    expect(bought.wealth).toBe(50 - 10);
    expect(bought.items.lamp_oil_ware).toBe(1);
    expect(carried(story, bought).map((c) => c.item.name)).toEqual(["Night-Study Lamp"]);
    expect(cultivationSpeed(story, { ...bought, items: {} })).toBe(100);
    expect(cultivationSpeed(story, bought)).toBe(106);
  });

  it("will not sell the goods twice to one hero, and locks a purchase the purse cannot meet", () => {
    const start = at("lamp_oil_a0s1", { realm: 1, wealth: 9 });
    const view = getChoices(getScene(story, "lamp_oil_a0s1"), start).find((v) => v.choice.id === "buy")!;
    expect(view.available).toBe(false);
    expect(view.hint).toContain("10 spirit stones");
    const owns = at("lamp_oil_a0s1", { realm: 1, wealth: 99, items: { lamp_oil_ware: 1 } });
    expect(getChoices(getScene(story, "lamp_oil_a0s1"), owns).find((v) => v.choice.id === "buy")!.available).toBe(false);
  });

  it("sells a pill only to a hero near the realm it serves", () => {
    const below = at("root_seller_a0s1", { realm: 0, wealth: 99 });
    const near = at("root_seller_a0s1", { realm: 1, wealth: 99 });
    const find = (s: GameState) => getChoices(getScene(story, "root_seller_a0s1"), s).find((v) => v.choice.id === "buy")!;
    expect(find(below).available).toBe(false);
    expect(find(below).hint).toContain("Qi Condensation");
    expect(find(near).available).toBe(true);
  });

  it("pays a day’s wage once, and more to a hero of the road’s realm for the job a mortal cannot do", () => {
    const first = walk(at("lamp_oil_a1s1", { realm: 1, wealth: 0 }), ["work"]);
    expect(first.wealth).toBe(5);
    const twice = getChoices(getScene(story, "lamp_oil_a1s1"), { ...first, sceneId: "lamp_oil_a1s1" }).find((v) => v.choice.id === "work")!;
    expect(twice.available).toBe(false);
    const risky = getChoices(getScene(story, "lamp_oil_a1s3"), at("lamp_oil_a1s3", { realm: 0 })).find((v) => v.choice.id === "risky")!;
    expect(risky.strain).toEqual({ needs: 1, gap: 1 });
    const done = walk(at("lamp_oil_a1s3", { realm: 1, wealth: 0 }), ["risky"]);
    expect(done.wealth).toBe(15);
  });

  it("leases a holding to a hero of the road’s realm, charges the lease, and pays and costs on the next paydays", () => {
    const start = at("lamp_oil_a3s4", { realm: 1, wealth: 60 });
    const got = walk(start, ["lease"]);
    expect(got.wealth).toBe(60 - 40);
    expect(got.assets).toEqual(["lamp_oil_hold"]);
    expect(got.speed).toBeGreaterThan(100);
    const late = payday(story, { ...got, visited: [] });
    expect(late.wealth).toBe(got.wealth + stipendFor(1) + story.assets!.lamp_oil_hold.income - story.assets!.lamp_oil_hold.upkeep);
    const low = at("lamp_oil_a3s4", { realm: 0, wealth: 99 });
    expect(getChoices(getScene(story, "lamp_oil_a3s4"), low).find((v) => v.choice.id === "lease")!.available).toBe(false);
  });

  it("gives a share-holder the lease for less, and only a share-holder", () => {
    const find = (s: GameState, id: string) => getChoices(getScene(story, "lamp_oil_a3s4"), s).find((v) => v.choice.id === id)!;
    const plain = at("lamp_oil_a3s4", { realm: 1, wealth: 30 });
    expect(find(plain, "lease_share").available).toBe(false);
    const shareholder = at("lamp_oil_a3s4", { realm: 1, wealth: 30, flags: { lamp_oil_invested: true } });
    expect(find(shareholder, "lease_share").available).toBe(true);
    expect(find(shareholder, "lease").available).toBe(false);
  });

  it("sells the goods or the lease back on the way out for less than they cost", () => {
    const hold = at("lamp_oil_return", { realm: 1, wealth: 0, items: { lamp_oil_ware: 1 }, assets: ["lamp_oil_hold"] });
    const goods = walk(hold, ["sell_ware"]);
    expect(goods.wealth).toBe(6);
    expect(goods.items).toEqual({});
    const lease = walk(hold, ["sell_holding"]);
    expect(lease.wealth).toBe(24);
    expect(lease.assets).toEqual([]);
    expect(story.items!.lamp_oil_ware.value).toBeLessThan(10);
  });

  it("cannot be turned into an endless purse: every choice that earns is once-only, a sale, or on a scene that is never revisited", () => {
    const loops = new Set(chapters.flatMap((c) => c.scenes).filter((s) => s.id.startsWith("wayside_")).map((s) => s.id));
    const leaks: string[] = [];
    for (const scene of Object.values(story.scenes)) {
      for (const c of scene.choices) {
        const gain = priceTag(c.effects).gain;
        if (gain === 0) continue;
        const once = (c.requires ?? []).some((r) => (r.kind === "flag" && r.is === false) || r.kind === "item" || r.kind === "asset");
        if (!once) leaks.push(`${scene.id}>${c.id}`);
        if (loops.has(scene.id) && !(c.requires ?? []).some((r) => r.kind === "flag" && r.is === false)) leaks.push(`${scene.id}>${c.id} on a hub`);
      }
    }
    expect(leaks).toEqual([]);
  });
});
