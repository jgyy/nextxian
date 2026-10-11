import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import {
  gainCultivation,
  heartDemonBlocks,
  HEART_DEMON_KARMA,
  pointsToNext,
  realmForPoints,
  realmProgress,
  REALMS,
  TONE_GAIN,
} from "@/engine/cultivation";
import { conditionsHold, REALM_SHIFT, realmShiftLine, reactToScenario, styleFor } from "@/engine/npc";
import { restoreGame } from "@/engine/save";
import { CHOICE_TONES } from "@/engine/tone";
import type { GameState } from "@/engine/types";

const fresh = (): GameState => createGame(story);
const npcLines = (state: GameState) => state.log.filter((e) => e.kind === "npc").map((e) => e.text);

describe("cultivation realms", () => {
  it("starts the player as a Mortal with no points", () => {
    const game = fresh();
    expect(game.realm).toBe(0);
    expect(game.cultivation).toBe(0);
    expect(REALMS[game.realm].name).toBe("Mortal");
  });

  it("lists eight realms, in rising order, each with its own words", () => {
    expect(REALMS).toHaveLength(8);
    REALMS.forEach((r, i) => {
      if (i > 0) expect(r.threshold, r.name).toBeGreaterThan(REALMS[i - 1].threshold);
      expect(r.arrival.length, r.name).toBeGreaterThan(20);
    });
    expect(new Set(REALMS.map((r) => r.name)).size).toBe(REALMS.length);
    expect(new Set(REALMS.map((r) => r.styled)).size).toBe(REALMS.length);
    expect(realmForPoints(0)).toBe(0);
    expect(realmForPoints(REALMS[3].threshold)).toBe(3);
    expect(realmForPoints(99999)).toBe(REALMS.length - 1);
  });

  it("gives every tone a gain, and makes patience gain more than force or lies", () => {
    for (const tone of CHOICE_TONES) expect(TONE_GAIN[tone], tone).toBeGreaterThan(0);
    expect(TONE_GAIN.quiet).toBeGreaterThan(TONE_GAIN.force);
    expect(TONE_GAIN.inquiry).toBeGreaterThan(TONE_GAIN.deceit);
  });

  it("adds points for each decision by its tone", () => {
    const after = choose(story, fresh(), "bow_and_state");
    expect(after.cultivation).toBe(TONE_GAIN.mercy);
  });

  it("breaks through to Qi Condensation at its threshold, logs it, and the Elder says so", () => {
    const near: GameState = { ...fresh(), cultivation: REALMS[1].threshold - 1 };
    const after = gainCultivation(near, 1);
    expect(after.realm).toBe(1);
    expect(after.log.at(-1)?.kind).toBe("realm");
    expect(after.log.at(-1)?.text).toContain("Qi Condensation");
    const chosen = choose(story, near, "bow_and_state");
    expect(chosen.realm).toBe(1);
    expect(npcLines(chosen).at(-1)).toBe(REALM_SHIFT[1]);
  });

  it("breaks through only one realm at a time", () => {
    const after = gainCultivation(fresh(), 5000);
    expect(after.realm).toBe(1);
    expect(gainCultivation(after, 0).realm).toBe(2);
  });

  it("holds a heart demon over anyone whose karma is too low for Core Formation, and lets them through after", () => {
    const base: GameState = { ...fresh(), realm: 2, cultivation: REALMS[3].threshold - 1 };
    const dark = { ...base, stats: { ...base.stats, karma: HEART_DEMON_KARMA - 1 } };
    const held = gainCultivation(dark, 5);
    expect(held.realm).toBe(2);
    expect(held.cultivation).toBeGreaterThanOrEqual(REALMS[3].threshold);
    expect(heartDemonBlocks(held)).toBe(true);
    const redeemed = gainCultivation({ ...held, stats: { ...held.stats, karma: 0 } }, 0);
    expect(redeemed.realm).toBe(3);
  });

  it("does not hold back the early realms for low karma", () => {
    const base: GameState = { ...fresh(), cultivation: REALMS[1].threshold - 1 };
    const dark = { ...base, stats: { ...base.stats, karma: -90 } };
    expect(gainCultivation(dark, 1).realm).toBe(1);
  });

  it("reports progress and the points still needed", () => {
    const g = fresh();
    expect(realmProgress(g)).toBe(0);
    expect(pointsToNext(g)).toBe(REALMS[1].threshold);
    const half = { ...g, cultivation: REALMS[1].threshold / 2 };
    expect(realmProgress(half)).toBeCloseTo(0.5);
    const top = { ...g, realm: REALMS.length - 1, cultivation: 9999 };
    expect(pointsToNext(top)).toBeUndefined();
    expect(realmProgress(top)).toBe(1);
  });

  it("adds points from an addCultivation effect", () => {
    const g = fresh();
    const after = choose(story, { ...g, sceneId: "mist_orchard_return" }, "rest");
    expect(after.cultivation).toBe(3 + TONE_GAIN.quiet);
  });
});

describe("the Elder and the realm", () => {
  it("has a line for every realm above Mortal, all different, and none for a fall", () => {
    const lines = REALMS.slice(1).map((_, i) => REALM_SHIFT[i + 1]);
    expect(lines.every((l) => l && l.length > 20)).toBe(true);
    expect(new Set(lines).size).toBe(lines.length);
    expect(realmShiftLine(0, 1)).toBe(REALM_SHIFT[1]);
    expect(realmShiftLine(2, 2)).toBeUndefined();
    expect(realmShiftLine(3, 1)).toBeUndefined();
  });

  it("names the player by realm", () => {
    expect(styleFor(0)).toBe("mortal");
    expect(styleFor(1)).toBe("Qi Condenser");
    expect(styleFor(99)).toBe(REALMS[REALMS.length - 1].styled);
  });

  it("reads a realm condition and a roads condition", () => {
    const g = fresh();
    expect(conditionsHold([{ kind: "realm", max: 0 }], g)).toBe(true);
    expect(conditionsHold([{ kind: "realm", min: 1 }], g)).toBe(false);
    expect(conditionsHold([{ kind: "realm", min: 2 }], { ...g, realm: 2 })).toBe(true);
    const walked = { ...g, flags: { road_done_a: true, road_done_b: true, road_done_c: false, other: true } };
    expect(conditionsHold([{ kind: "roads", min: 2 }], walked)).toBe(true);
    expect(conditionsHold([{ kind: "roads", min: 3 }], walked)).toBe(false);
    expect(conditionsHold([{ kind: "roads", max: 1 }], walked)).toBe(false);
  });

  it("answers a cultivator differently from a mortal when no earlier memory applies", () => {
    const scenario = story.scenarios.REQUEST_NIGHT;
    const mortal = reactToScenario(scenario, fresh()).line;
    const adept = reactToScenario(scenario, { ...fresh(), realm: 2 }).line;
    expect(adept).not.toBe(mortal);
    expect(adept).toContain("cultivator");
  });

  it("lets earlier memories win over the realm line", () => {
    const scenario = story.scenarios.HONEST_ACCOUNT;
    const remembered = reactToScenario(scenario, { ...fresh(), realm: 2, flags: { lied_about_seal: true } }).line;
    expect(remembered).toContain("lied to me once");
  });

  it("remarks on a mortal at the Law Hall, and not on a Qi Condenser", () => {
    const mortal = choose(story, fresh(), "bow_and_state");
    expect(npcLines(mortal).some((l) => l.includes("no qi gathered"))).toBe(true);
    const adept = choose(story, { ...fresh(), realm: 1 }, "bow_and_state");
    expect(npcLines(adept).some((l) => l.includes("no qi gathered"))).toBe(false);
  });
});

describe("saves", () => {
  it("restores a save from before cultivation as a Mortal", () => {
    const { cultivation: _c, realm: _r, ...old } = fresh();
    void _c;
    void _r;
    const loaded = restoreGame(old, story);
    expect(loaded?.cultivation).toBe(0);
    expect(loaded?.realm).toBe(0);
  });

  it("keeps cultivation and realm that a save holds", () => {
    const loaded = restoreGame({ ...fresh(), cultivation: 120, realm: 2 }, story);
    expect(loaded?.cultivation).toBe(120);
    expect(loaded?.realm).toBe(2);
  });

  it("starts the gate with a new option that leads to the first wayside", () => {
    const g = fresh();
    const views = getChoices(getScene(story, "gate"), g);
    expect(views.some((v) => v.choice.next === "wayside_pilgrims")).toBe(true);
  });
});

describe("realm strain and mastery", () => {
  const at = (sceneId: string, patch: Partial<GameState>): GameState => ({ ...createGame(story), sceneId, ...patch });
  const pick = (state: GameState, next: string) => {
    const view = getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.next === next && v.available);
    if (!view) throw new Error(`no open choice to ${next} in ${state.sceneId}`);
    return choose(story, state, view.choice.id);
  };

  it("parses `needs:N` and rejects a realm that is not on the ladder", () => {
    const forced = getScene(story, "bridge_entry").choices.find((c) => c.next === "bridge_force1");
    expect(forced?.needsRealm).toBe(5);
    expect(Math.max(...Object.values(story.scenes).flatMap((s) => s.choices.map((c) => c.needsRealm ?? 0)))).toBeLessThan(REALMS.length);
  });

  it("makes a force choice beyond the player's realm cost cultivation, qi and a strain line", () => {
    const weak = at("bridge_entry", { realm: 3, cultivation: REALMS[3].threshold + 40, stats: { ...createGame(story).stats, qi: 80 } });
    const after = pick(weak, "bridge_force1");
    expect(after.cultivation).toBeLessThan(weak.cultivation);
    expect(after.cultivation).toBeGreaterThanOrEqual(REALMS[3].threshold);
    expect(after.stats.qi).toBeLessThan(weak.stats.qi);
    expect(after.log.some((e) => e.kind === "strain")).toBe(true);
  });

  it("charges nothing to a player who is strong enough, and rewards one far beyond the ask", () => {
    const equal = at("bridge_entry", { realm: 5, cultivation: REALMS[5].threshold });
    const spent = pick(equal, "bridge_force1");
    expect(spent.log.some((e) => e.kind === "strain")).toBe(false);
    const master = at("bridge_entry", { realm: 7, cultivation: REALMS[7].threshold });
    const ahead = pick(master, "bridge_force1");
    expect(ahead.cultivation - master.cultivation).toBeGreaterThan(spent.cultivation - equal.cultivation);
  });

  it("shows the strain on a choice before it is taken", () => {
    const view = getChoices(getScene(story, "bridge_entry"), at("bridge_entry", { realm: 2 })).find((v) => v.choice.next === "bridge_force1");
    expect(view?.strain).toEqual({ needs: 5, gap: 3 });
  });

  it("gives no cultivation for walking back to a scene already seen", () => {
    const seen = at("hub_b6", { visited: ["b6_gate"] });
    const back = getChoices(getScene(story, "hub_b6"), seen)[0];
    const first = choose(story, seen, back.choice.id);
    const again = choose(story, { ...first, sceneId: "hub_b6" }, back.choice.id);
    expect(again.cultivation).toBe(first.cultivation);
  });
});

describe("the endings of Book Six", () => {
  const stand = (patch: Partial<GameState> & { realm: number }): GameState => ({ ...createGame(story), sceneId: "lastseal_choice", ...patch });
  const open = (state: GameState) =>
    getChoices(getScene(story, "lastseal_choice"), state)
      .filter((v) => v.available)
      .map((v) => v.choice.next)
      .sort();
  const nine = Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => [`card_${n}`, true]));

  it("lets a Mortal do nothing but step back or close the ledger", () => {
    expect(open(stand({ realm: 0 }))).toEqual(["end_ledger", "end_spent", "hub_b6"].sort());
  });

  it("opens the nine verbs only to a Dao Seeking cultivator who holds all nine cards", () => {
    expect(open(stand({ realm: 5, flags: nine }))).not.toContain("end_nine");
    expect(open(stand({ realm: 6, flags: { ...nine, card_9: false } }))).not.toContain("end_nine");
    expect(open(stand({ realm: 6, flags: nine }))).toContain("end_nine");
  });

  it("offers the Warden's line to a Dao Seeking cultivator and the spent hand to anyone weaker", () => {
    expect(open(stand({ realm: 6 }))).toContain("end_warden");
    expect(open(stand({ realm: 6 }))).not.toContain("end_spent");
    expect(open(stand({ realm: 5 }))).toContain("end_spent");
    expect(open(stand({ realm: 5 }))).not.toContain("end_warden");
  });

  it("keeps the Ascendant ending for an Ascendant, and the hollow seat for a core carrying heavy karma", () => {
    expect(open(stand({ realm: 6 }))).not.toContain("end_ascendant");
    expect(open(stand({ realm: 7 }))).toContain("end_ascendant");
    const dark = stand({ realm: 3 });
    expect(open({ ...dark, stats: { ...dark.stats, karma: -60 } })).toContain("end_hollow");
    expect(open({ ...dark, stats: { ...dark.stats, karma: 20 } })).not.toContain("end_hollow");
    expect(open({ ...stand({ realm: 2 }), stats: { ...dark.stats, karma: -60 } })).not.toContain("end_hollow");
  });

  it("ends every ending scene without choices", () => {
    const endings = Object.values(story.scenes).filter((s) => s.id.startsWith("end_"));
    expect(endings.map((s) => s.id).sort()).toEqual(["end_ascendant", "end_hollow", "end_ledger", "end_listener", "end_nine", "end_spent", "end_warden"]);
    for (const ending of endings) expect(ending.choices).toHaveLength(0);
  });
});
