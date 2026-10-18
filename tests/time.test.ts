import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import { gainCultivation, REALMS } from "@/engine/cultivation";
import { ageOf, lifeLeft, LIFESPAN } from "@/engine/age";
import { conditionsHold } from "@/engine/npc";
import { parseConditions, parseScenes } from "@/engine/markup";
import { restoreGame } from "@/engine/save";
import { clash } from "@/engine/audit";
import { levelThreshold } from "@/engine/stages";
import {
  CALENDAR_START,
  CLOCK,
  clockOf,
  dateLabel,
  dateOf,
  DAYS_PER_YEAR,
  decisionDays,
  legacyDays,
  mendingOf,
  PLOT_STRIDE,
  SECLUSION,
  seasonLine,
  seasonOf,
  seasonTurned,
  seclusionOf,
  spanLabel,
  STRIDE,
  strideOf,
  unitOf,
} from "@/engine/time";
import { DEFAULT_HERO } from "@/engine/hero";
import { hubId } from "@/story/count/build";
import type { GameState } from "@/engine/types";

const hero = (patch = {}) => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, patch: Partial<GameState> = {}): GameState => ({ ...createGame(story), sceneId, log: [], ...patch });

describe("the calendar", () => {
  it("opens in the spring rains, on the fifteenth day of the third month of the first year", () => {
    const d = dateOf(0);
    expect(d).toMatchObject({ year: 1, month: 3, day: 15, season: "spring", elapsed: 0 });
    expect(CALENDAR_START).toBe(74);
    expect(dateLabel(0)).toBe("Third Month, day 15, Year 1");
  });

  it("keeps twelve months of thirty days and five days out of time, in four seasons of three months", () => {
    expect(dateOf(31 - 0).month).toBe(4);
    expect(dateOf(31).season).toBe("summer");
    const seen = new Set<string>();
    for (let d = 0; d < DAYS_PER_YEAR; d++) seen.add(seasonOf(d));
    expect([...seen].sort()).toEqual(["autumn", "spring", "summer", "winter"]);
    const festival = dateOf(DAYS_PER_YEAR - CALENDAR_START - 1);
    expect(festival.month).toBe(0);
    expect(dateLabel(DAYS_PER_YEAR - CALENDAR_START - 1)).toMatch(/^Festival of Lamps, day 5, Year 1$/);
    expect(dateOf(DAYS_PER_YEAR - CALENDAR_START).year).toBe(2);
  });

  it("tells the bell from the fraction of a day", () => {
    expect(dateOf(0).bell).toBe(1);
    expect(dateOf(0.5).bell).toBe(7);
    expect(dateOf(0.99).bell).toBe(12);
  });

  it("makes a decision longer at every realm, from half a day to most of a year", () => {
    expect(STRIDE).toHaveLength(REALMS.length);
    for (let i = 1; i < STRIDE.length; i++) expect(STRIDE[i]).toBeGreaterThan(STRIDE[i - 1]);
    expect(strideOf(0)).toBeLessThan(1);
    expect(strideOf(9)).toBeGreaterThan(200);
    expect(strideOf(-3)).toBe(STRIDE[0]);
    expect(strideOf(99)).toBe(STRIDE[9]);
  });

  it("shuts the door longer the higher the realm it opens, and has none to shut at Mortal", () => {
    expect(SECLUSION[0]).toBe(0);
    for (let i = 2; i < SECLUSION.length; i++) expect(SECLUSION[i]).toBeGreaterThan(SECLUSION[i - 1]);
    expect(seclusionOf(3)).toBeGreaterThan(seclusionOf(2) * 3);
    expect(mendingOf(0)).toBeGreaterThanOrEqual(1);
    expect(mendingOf(5)).toBe(Math.round(STRIDE[5] * 5));
  });

  it("gives every realm its own unit, its own way of reading the clock and its own sense of a day", () => {
    expect(CLOCK).toHaveLength(REALMS.length);
    expect(new Set(CLOCK.map((c) => c.unit)).size).toBe(10);
    expect(new Set(CLOCK.map((c) => c.sense)).size).toBe(10);
    for (let i = 1; i < CLOCK.length; i++) expect(CLOCK[i].days).toBeGreaterThan(CLOCK[i - 1].days);
    const reads = CLOCK.map((_, realm) => clockOf(realm, 4000));
    expect(new Set(reads).size).toBe(10);
    expect(clockOf(0, 0)).toBe("Day 1, the first bell of twelve");
    expect(clockOf(1, 40)).toBe("Day 41 of the count");
    expect(clockOf(3, 400)).toMatch(/^Year 2, /);
    expect(clockOf(5, 365 * 30)).toContain("the second generation");
    expect(unitOf(4).unit).toBe("decade");
  });

  it("speaks of a span in the largest plain unit it fills", () => {
    expect(spanLabel(0.04)).toBe("1 bell");
    expect(spanLabel(0.5)).toBe("6 bells");
    expect(spanLabel(5)).toBe("5 days");
    expect(spanLabel(90)).toBe("3 months");
    expect(spanLabel(365)).toBe("1 year");
    expect(spanLabel(365 * 40)).toBe("40 years");
  });

  it("has a line for the turn of every season in the voice of every realm, none repeated", () => {
    const lines = REALMS.flatMap((_, r) => (["spring", "summer", "autumn", "winter"] as const).map((s) => seasonLine(r, s)));
    expect(lines).toHaveLength(40);
    expect(new Set(lines).size).toBe(40);
    expect(seasonTurned(0, 10)).toBe(false);
    expect(seasonTurned(0, 60)).toBe(true);
  });

  it("makes a legacy save’s decisions into the days they would have taken at the realm the hero stands in", () => {
    expect(legacyDays(100, 2)).toBe(400);
    expect(legacyDays(-5, 2)).toBe(0);
  });
});

describe("a decision spends the days of the realm", () => {
  it("starts the clock at nought, spends a few hours on a decision in the story’s own telling, whatever the realm", () => {
    expect(createGame(story).days).toBe(0);
    for (const realm of [0, 3, 6]) {
      const g = at("gate", { realm, level: realm * 10, cultivation: levelThreshold(realm * 10), days: 10 });
      const after = choose(story, g, getChoices(getScene(story, "gate"), g)[0].choice.id);
      expect(after.days, `realm ${realm}`).toBeCloseTo(10 + PLOT_STRIDE, 5);
    }
  });

  it("spends the stride of the hero’s realm on a decision on a road", () => {
    for (const realm of [0, 1, 4, 8]) {
      const g = at(hubId(realm), { realm, level: realm * 10, cultivation: levelThreshold(realm * 10), days: 10 });
      const after = choose(story, g, "go_0");
      expect(story.roadScenes!.has(hubId(realm))).toBe(true);
      expect(after.days, `realm ${realm}`).toBeCloseTo(10 + strideOf(realm), 5);
    }
    expect(decisionDays(5, true)).toBe(strideOf(5));
    expect(decisionDays(5, false)).toBe(PLOT_STRIDE);
  });

  it("counts the chapters, the books, the side paths and the Gathering as the story’s own telling, and every road as a road", () => {
    const roads = story.roadScenes!;
    for (const id of ["gate", "law_hall", "village_square", "hub_b2_road", "b3_gate", "hub_b6", "lastseal_choice"]) expect(roads.has(id), id).toBe(false);
    for (const id of ["wayside_cn_3", "cn3_4_a", "wayside_bw_2"]) expect(roads.has(id), id).toBe(true);
    expect(roads.size).toBeGreaterThan(9000);
    expect(roads.size).toBeLessThan(Object.keys(story.scenes).length);
  });

  it("ages the hero by the calendar and not by the number of decisions", () => {
    const h = hero({ age: "young" });
    expect(ageOf(h, 0)).toBe(24);
    expect(ageOf(h, DAYS_PER_YEAR * 3 + 5)).toBe(27);
    let s = at("gate", { realm: 0, days: 0 });
    for (let i = 0; i < 40 && !story.scenes[s.sceneId].ending; i++) {
      const options = getChoices(getScene(story, s.sceneId), s).filter((v) => v.available);
      s = choose(story, s, options[0].choice.id);
      if (s.realm > 0) break;
    }
    expect(ageOf(s.hero, s.days)).toBe(ageOf(s.hero, 0));
  });

  it("logs the turn of a season, in the voice of the realm, when a decision crosses it", () => {
    const g = at(hubId(2), { realm: 2, level: 20, cultivation: 130, days: 14 });
    const after = choose(story, g, "go_0");
    expect(dateOf(after.days).season).not.toBe(dateOf(14).season);
    expect(after.log.some((e) => e.kind === "ledger" && e.text === seasonLine(2, dateOf(after.days).season))).toBe(true);
  });

  it("logs a year of the body when a decision crosses one", () => {
    const g = at(hubId(3), { realm: 3, level: 30, cultivation: 410, days: DAYS_PER_YEAR - 3 });
    const after = choose(story, g, "go_0");
    expect(after.log.filter((e) => e.kind === "ledger").some((e) => e.text.startsWith("Another year is spent in the body."))).toBe(true);
  });
});

describe("a retreat takes the days of its door", () => {
  it("shuts the door for the days of the realm a hero breaks into, and says so in the log", () => {
    const before = at("gate", { realm: 0, level: 9, cultivation: levelThreshold(10) - 0.5, stats: { qi: 100, karma: 0, insight: 100 }, days: 100 });
    const after = gainCultivation(before, 5);
    expect(after.realm).toBe(1);
    expect(after.days).toBe(100 + seclusionOf(1));
    expect(after.log.at(-1)!.text).toContain("The door stays shut for 2 days.");
    expect(after.log.at(-1)!.text).toContain(unitOf(1).sense);
  });

  it("keeps a longer retreat for a higher realm", () => {
    const before = at("gate", { realm: 4, level: 49, cultivation: levelThreshold(50) - 0.5, stats: { qi: 100, karma: 0, insight: 100 }, days: 0 });
    const after = gainCultivation(before, 5);
    expect(after.realm).toBe(5);
    expect(after.days).toBe(seclusionOf(5));
    expect(after.log.at(-1)!.text).toMatch(/The door stays shut for 2 years\./);
  });

  it("costs the days of the mending to a hero a wall throws back", () => {
    const g = at("gate", { realm: 5, level: 55, cultivation: levelThreshold(56) - 1, stats: { qi: 60, karma: 0, insight: 40 }, days: 50 });
    const after = gainCultivation(g, 1);
    expect(after.level).toBe(55);
    expect(after.days).toBe(50 + mendingOf(5));
    expect(after.log.at(-1)!.text).toContain("The mending takes 7 months.");
  });
});

describe("conditions and effects that read the calendar", () => {
  it("holds a days condition between its bounds, and a season condition on the season", () => {
    const g = at("gate", { days: 100 });
    expect(conditionsHold([{ kind: "days", min: 50, max: 150 }], g)).toBe(true);
    expect(conditionsHold([{ kind: "days", min: 101 }], g)).toBe(false);
    expect(conditionsHold([{ kind: "season", is: seasonOf(100) }], g)).toBe(true);
    expect(conditionsHold([{ kind: "season", is: seasonOf(100) === "winter" ? "spring" : "winter" }], g)).toBe(false);
  });

  it("reads the same conditions and the time effect in the compact markup", () => {
    expect(parseConditions("days>=365 & season:autumn", "t")).toEqual([
      { kind: "days", min: 365 },
      { kind: "season", is: "autumn" },
    ]);
    expect(() => parseConditions("season:monsoon", "t")).toThrow(/bad season/);
    const [scene] = parseScenes("=== t_a | A\nA line.\n> quiet | Let a month go by. | t_a | time+30\n> quiet | Two. | t_a\n> quiet | Three. | t_a\n> quiet | Four. | t_a", "t");
    expect(scene.choices[0].effects).toContainEqual({ kind: "passTime", days: 30 });
  });

  it("passes the days of a time effect, logs the years, and shortens the years left", () => {
    const base = at("gate", { realm: 3, level: 30, cultivation: 410, days: 0, hero: hero({ age: "young" }) });
    const [first] = parseScenes("=== t_a | A\nA line.\n> quiet | Wait. | gate | time+3650\n> quiet | Two. | gate\n> quiet | Three. | gate\n> quiet | Four. | gate", "t");
    const lone = { ...story, scenes: { ...story.scenes, t_a: first } };
    const after = choose(lone, { ...base, sceneId: "t_a" }, first.choices[0].id);
    expect(after.days).toBeGreaterThanOrEqual(3650);
    expect(ageOf(after.hero, after.days)).toBe(34);
    expect(after.log.some((e) => e.kind === "ledger" && e.text.startsWith("10 years go by in the body. You are 34."))).toBe(true);
    expect(lifeLeft(after.hero, after)).toBe(LIFESPAN[3] - 34);
  });
});

describe("saves", () => {
  it("restores a save from before the calendar by the days its decisions would have taken", () => {
    const g = at("gate", { realm: 2, level: 20, cultivation: 130, decisions: 100 });
    const { days: _drop, ...old } = g;
    void _drop;
    const back = restoreGame(JSON.parse(JSON.stringify(old)), story)!;
    expect(back.days).toBe(legacyDays(100, 2));
  });

  it("keeps the days of a save that has them", () => {
    const g = at("gate", { days: 1234.5 });
    expect(restoreGame(JSON.parse(JSON.stringify(g)), story)!.days).toBe(1234.5);
  });
});

describe("the Elder keeps the count", () => {
  const said = (g: GameState, id: string) => g.remarked.includes(id);
  /** A hero who has heard every other remark of the story, standing on a road, so that the next decision brings only the Elder’s mark of the calendar. */
  const quiet = (g: GameState): GameState => ({ ...g, sceneId: hubId(0), lastRemark: -10, remarked: (story.remarks ?? []).map((r) => r.id).filter((id) => !id.startsWith("su_time_")), decisions: 500, realm: 0, level: 0, cultivation: 0 });
  const walk = (g: GameState) => choose(story, quiet(g), "go_0");

  it("marks a year since the gate once the calendar has gone round, and not before", () => {
    const early = walk(at("gate", { days: 300 }));
    expect(said(early, "su_time_year")).toBe(false);
    const g = walk(at("gate", { days: 400 }));
    const marks = g.remarked.filter((id) => id.startsWith("su_time_"));
    expect(marks).toEqual(["su_time_year"]);
  });

  it("says the mark that fits the days the hero has spent, not the first year of one who has spent a dynasty", () => {
    const g = walk(at("gate", { days: 40000 }));
    expect(g.remarked.filter((id) => id.startsWith("su_time_"))).toEqual(["su_time_century"]);
    const old = walk(at("gate", { days: 400000 }));
    expect(old.remarked.filter((id) => id.startsWith("su_time_"))).toEqual(["su_time_millennium"]);
  });

  it("has eight marks, each held by a window of days no other mark shares", () => {
    const marks = (story.remarks ?? []).filter((r) => r.id.startsWith("su_time_"));
    expect(marks).toHaveLength(8);
    for (const days of [0, 100, 400, 2000, 4000, 10000, 25000, 40000, 200000, 400000]) {
      const held = marks.filter((r) => conditionsHold(r.when, at("gate", { days })));
      expect(held.length, `day ${days}`).toBeLessThanOrEqual(1);
    }
  });
});

describe("the audit knows the calendar", () => {
  it("finds two seasons asked at once, and two bounds of days that cannot both hold", () => {
    expect(clash([{ kind: "season", is: "spring" }, { kind: "season", is: "winter" }])).toContain("season");
    expect(clash([{ kind: "days", min: 400 }, { kind: "days", max: 100 }])).toContain("days");
    expect(clash([{ kind: "season", is: "spring" }, { kind: "days", min: 400 }])).toBeUndefined();
  });
});
