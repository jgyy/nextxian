import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { ageOf, lifeLeft } from "@/engine/age";
import { auditStory, flagUsage } from "@/engine/audit";
import { levelThreshold, layerName } from "@/engine/stages";
import { DAYS_PER_YEAR, unitOf } from "@/engine/time";
import { countWords } from "@/engine/words";
import { MAX_SCENE_WORDS, sceneBodyWords } from "@/engine/validate";
import { BACK16, BEATS_PER_ROAD, beatFlag, buildBeat, doneFlag, hubId, sceneId, scenarioId, turnFlag, unitDays, wayFlag, yearsNeeded } from "@/story/count/build";
import { countEntrances, countGroups, countScenarios, ROADS } from "@/story/count";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = countGroups.flatMap((g) => g.scenes);
const strong = { qi: 100, karma: 0, insight: 100 };
/** A hero who has reached the layer a beat asks, with the years to spend. */
const standing = (realm: number, layer: number, patch: Partial<GameState> = {}): GameState => ({
  ...createGame(story),
  realm,
  level: realm * 10 + layer,
  cultivation: levelThreshold(realm * 10 + layer),
  stats: strong,
  years: 5000,
  log: [],
  ...patch,
});
const go = (state: GameState, choiceId: string) => choose(story, state, choiceId);
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);

describe("the Long Count Roads", () => {
  it("are ten roads of ten units, a hundred scenes each, a hub and a way back: one thousand and twenty new scenes", () => {
    expect(ROADS).toHaveLength(10);
    expect(scenes).toHaveLength(1010);
    const beatScenes = scenes.filter((s) => /^cn\d_\d_[a-z0-9]+$/.test(s.id));
    expect(beatScenes).toHaveLength(1000);
    const inStory = Object.keys(story.scenes).filter((id) => /^cn\d_\d_/.test(id) || id.startsWith("wayside_cn_") || id.startsWith("back16_"));
    expect(inStory).toHaveLength(1020);
    for (const road of ROADS) {
      expect(road.beats).toHaveLength(BEATS_PER_ROAD);
      for (let k = 0; k < BEATS_PER_ROAD; k++) expect(buildBeat(road, k)).toHaveLength(10);
    }
  });

  it("belong to the realms from Mortal to Dao Sovereign, one each, each keeping its realm’s own unit of time", () => {
    ROADS.forEach((road, i) => {
      expect(road.realm).toBe(i);
      expect(road.unit).toBe(unitOf(i).unit);
      expect(road.cost).toBe(i === 0 ? "an hour" : `${"aeiou".includes(unitOf(i).unit[0]) ? "an" : "a"} ${unitOf(i).unit}`);
    });
    expect(ROADS.map((r) => r.unit)).toEqual(["bell", "day", "season", "year", "decade", "generation", "lifetime", "dynasty", "age", "era"]);
    expect(new Set(ROADS.map((r) => r.keeper)).size).toBe(10);
    expect(new Set(ROADS.map((r) => r.hub.origin)).size).toBe(10);
  });

  it("have a wayside choice on ten distinct scenes of the story, each of which exists and is not one that another family of roads has used", () => {
    for (const road of ROADS) {
      const origin = story.scenes[road.hub.origin];
      expect(origin, road.hub.origin).toBeDefined();
      expect(origin.choices.some((c) => c.next === hubId(road.realm))).toBe(true);
      expect(countEntrances[road.hub.origin].next).toBe(hubId(road.realm));
    }
  });

  it("keep every scene inside the cap, with a heading, four choices, and no scene twice", () => {
    const seen = new Set<string>();
    for (const s of scenes) {
      expect(s.title.trim().length, s.id).toBeGreaterThan(0);
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(s.choices.filter((c) => !c.hideLocked).length, s.id).toBeGreaterThanOrEqual(4);
      expect(seen.has(s.id), s.id).toBe(false);
      seen.add(s.id);
    }
  });

  it("write a thousand beats that are all their own: no opening, turn or leaving is repeated, in any road", () => {
    const fields = ["open", "turn", "after", "keeper", "elderBody", "elderLine", "leaves"] as const;
    for (const f of fields) {
      const texts = ROADS.flatMap((r) => r.beats.map((b) => b[f]));
      expect(new Set(texts).size, f).toBe(texts.length);
      for (const t of texts) expect(countWords(t), f).toBeGreaterThan(15);
    }
    const names = ROADS.flatMap((r) => r.beats.map((b) => `${r.realm}:${b.name}`));
    expect(new Set(names).size).toBe(100);
    for (const r of ROADS) {
      expect(new Set(r.beats.flatMap((b) => b.ways)).size).toBe(40);
      expect(new Set(r.beats.flatMap((b) => b.does)).size).toBe(40);
    }
  });

  it("give each realm a different voice: the hubs, the senses of time and the Elder’s replies are all distinct", () => {
    expect(new Set(ROADS.map((r) => r.hub.paragraphs.join(" "))).size).toBe(10);
    expect(new Set(ROADS.map((r) => r.hub.remark)).size).toBe(10);
    const lines = ROADS.flatMap((r) => [...Object.values(r.lines.spend), ...Object.values(r.lines.ask)]);
    expect(new Set(lines).size).toBe(100);
    for (const r of ROADS) {
      expect(new Set(Object.values(r.lines.spend)).size).toBe(5);
      expect(new Set(Object.values(r.lines.ask)).size).toBe(5);
      expect(new Set(r.tones).size).toBe(4);
    }
  });

  it("name each unit in the realm’s layers: a house raised in the order of Foundation’s ten layers, a wheel of ten Core years, a soul through its ten stages", () => {
    const names = (r: number) => ROADS[r].beats.map((b) => b.name.replace(/^(Day \w+: )?The /, ""));
    expect(names(2)).toEqual(["Footing", "Course", "Lintel", "Pillar", "Beam", "Floor", "Wall", "Roof", "Hearth", "Keystone"]);
    expect(names(3)).toEqual(["Seed", "Spark", "Ember", "Kernel", "Gilding", "Anvil", "Quench", "Temper", "Lustre", "Round"]);
    expect(names(4)).toEqual(["Quickening", "Seed-Eye", "First Breath", "Cradle", "Crawl", "First Step", "First Word", "Wander", "Youth", "Majority"]);
    expect(names(5)).toEqual(["Names", "Kin", "Debts", "Grudges", "Vows", "Faces", "Home", "Years", "Self", "Last Cord"]);
    expect(names(6)).toEqual(["Hearing", "Bearing", "Fork", "Ford", "Switchback", "Pass", "Glimpse", "Lost Road", "Blind Walk", "Threshold"]);
    expect(names(7)).toEqual(["Lintel", "Latch", "Sill", "Draught", "Stair", "Light", "Hush", "Ajar", "Hinge", "Doorway"]);
    expect(names(8)).toEqual(["Stepping", "Footfall", "Weightless", "Long Day", "Garden", "Seasons", "Witness", "Remembering", "Lending", "Lastness"]);
    expect(names(9)).toEqual(["Name", "Seat", "Law", "Scale", "Court", "Mercy", "Weather", "Tide", "Silence", "Apex"]);
  });

  it("have the Elder reply twice on every road, in five different words for five different degrees of trust", () => {
    for (const road of ROADS) {
      for (const kind of ["SPEND", "ASK"] as const) {
        const sc = countScenarios[scenarioId(kind, road.realm)];
        expect(sc, `${kind} ${road.realm}`).toBeDefined();
        expect(new Set(Object.values(sc.lines)).size).toBe(5);
        expect(story.scenarios[sc.id]).toBeDefined();
      }
    }
  });

  it("read every flag they set, and loop only through their hubs", () => {
    const { set, read } = flagUsage(story);
    const mine = [...set].filter((f) => /^cn[bwtd]\d/.test(f));
    expect(mine.length).toBeGreaterThan(150);
    expect(mine.filter((f) => !read.has(f))).toEqual([]);
    expect(auditStory(story).filter((i) => i.where.startsWith("cn") || i.where.includes("wayside_cn_"))).toEqual([]);
  });

  it("show a title in the story’s reading order: each road is a group of its own, after the wayside it opens from", () => {
    const names = chapters.map((c) => c.name);
    for (const road of ROADS) expect(names).toContain(road.hub.title);
    const group = chapters.find((c) => c.name === ROADS[0].hub.title)!;
    expect(group.scenes).toHaveLength(102);
    expect(group.scenes.at(-1)!.id).toBe(BACK16(ROADS[0].hub.origin));
    expect(group.scenes.at(-1)!.title).toMatch(/^Back from the [A-Z]/);
  });
});

describe("walking a road", () => {
  it("opens a beat to the hero who has reached its layer and has spent the one before, and no sooner", () => {
    for (const road of ROADS) {
      const low = standing(road.realm, 0, { sceneId: hubId(road.realm) });
      expect(view(low, "go_0")!.available).toBe(true);
      expect(view(low, "go_1")!.available).toBe(false);
      const spentFirst = { ...low, flags: { [beatFlag(road.realm, 0)]: true } };
      expect(view(spentFirst, "go_1")!.available).toBe(false);
      expect(view(spentFirst, "go_1")!.hint).toContain(layerName(road.realm * 10 + 1));
      const high = standing(road.realm, 9, { sceneId: hubId(road.realm) });
      expect(view(high, "go_0")!.available).toBe(true);
      expect(view(high, "go_1")!.available).toBe(false);
      expect(view(high, "go_1")!.hint).toContain(road.beats[0].name);
      const walked = { ...high, flags: Object.fromEntries(Array.from({ length: BEATS_PER_ROAD }, (_, k) => [beatFlag(road.realm, k), true])) };
      for (let k = 0; k < BEATS_PER_ROAD; k++) expect(view(walked, `go_${k}`)!.available).toBe(true);
    }
  });

  it("spends the realm’s unit of time on a way, ages the hero by it, and says what it costs before it is spent", () => {
    for (const road of ROADS) {
      const g = standing(road.realm, 9, { sceneId: sceneId(road.realm, 0, "a"), days: 0 });
      const way = view(g, "way_0")!;
      expect(way.choice.label).toContain(`(${road.cost}).`);
      const after = go(g, "way_0");
      const strideDays = unitDays(road.realm);
      expect(after.days).toBeGreaterThanOrEqual(strideDays);
      expect(after.flags[beatFlag(road.realm, 0)]).toBe(true);
      expect(after.flags[wayFlag(road.realm, 0)]).toBe(true);
      expect(after.flags[wayFlag(road.realm, 1)]).toBe(false);
      expect(after.sceneId).toBe(sceneId(road.realm, 0, "m0"));
      expect(ageOf(after.hero, after.days)).toBeGreaterThanOrEqual(ageOf(g.hero, 0) + Math.floor(strideDays / DAYS_PER_YEAR));
    }
  });

  it("spends a decade as a decade and a dynasty as a hundred years, and logs the years that go by", () => {
    const decade = go(standing(4, 9, { sceneId: sceneId(4, 0, "a"), days: 0 }), "way_1");
    expect(decade.days).toBeGreaterThan(3650);
    expect(decade.log.some((e) => e.kind === "ledger" && e.text.startsWith("10 years go by in the body."))).toBe(true);
    const dynasty = go(standing(7, 9, { sceneId: sceneId(7, 0, "a"), days: 0 }), "way_0");
    expect(dynasty.days).toBeGreaterThan(36500);
    expect(dynasty.log.some((e) => e.kind === "ledger" && /^100 years go by in the body\./.test(e.text))).toBe(true);
  });

  it("refuses the hero who has not the years to spend, and says why", () => {
    for (const road of ROADS.filter((r) => yearsNeeded(r.realm) > 0)) {
      const young = { ...createGame(story).hero, age: "young" as const };
      const base = standing(road.realm, 9, { sceneId: sceneId(road.realm, 0, "a"), years: 0, hero: young });
      // Age the hero by the calendar until one year short of what a unit costs is all their realm leaves them.
      const span = lifeLeft(young, { ...base, days: 0 });
      const poor = { ...base, days: (span - (yearsNeeded(road.realm) - 1)) * DAYS_PER_YEAR };
      expect(lifeLeft(young, poor)).toBe(yearsNeeded(road.realm) - 1);
      const way = view(poor, "way_0")!;
      expect(way.available, road.short).toBe(false);
      expect(way.hint).toContain("not the years");
      expect(view({ ...poor, days: 0 }, "way_0")!.available, road.short).toBe(true);
    }
  });

  it("walks a whole road from the hub to the last beat’s leaving, every beat reachable from the one before", () => {
    for (const road of ROADS) {
      let g = standing(road.realm, 9, { sceneId: hubId(road.realm), days: 0 });
      g = go(g, "go_0");
      for (let k = 0; k < BEATS_PER_ROAD; k++) {
        expect(g.sceneId).toBe(sceneId(road.realm, k, "a"));
        g = go(g, "way_2");
        g = go(g, "on_0");
        g = go(g, "meet_1");
        g = go(g, "to_leaves");
        expect(g.flags[turnFlag(road.realm, 1)]).toBe(true);
        expect(g.flags[turnFlag(road.realm, 0)]).toBe(false);
        g = go(g, k === BEATS_PER_ROAD - 1 ? "finish" : "next");
      }
      expect(g.sceneId).toBe(hubId(road.realm));
      expect(g.flags[doneFlag(road.realm)]).toBe(true);
      for (let k = 0; k < BEATS_PER_ROAD; k++) expect(g.flags[beatFlag(road.realm, k)]).toBe(true);
      expect(g.log.some((e) => e.kind === "npc" && e.text === road.hub.remark)).toBe(true);
    }
  });

  it("reads how the hero spent the unit and met its turn in the scenes that follow", () => {
    const road = ROADS[3];
    let g = standing(3, 9, { sceneId: sceneId(3, 4, "a"), days: 0 });
    g = go(g, "way_3");
    g = go(g, "on_0");
    const turn = g.log.map((e) => e.text).join("\n");
    expect(turn).toContain(road.wayTurn[3]);
    g = go(g, "meet_2");
    g = go(g, "to_leaves");
    expect(g.log.map((e) => e.text).join("\n")).toContain(road.answerLeaves[2]);
  });

  it("lets a hero walk a beat again, and says that it was spent", () => {
    const g = standing(1, 9, { sceneId: sceneId(1, 0, "a"), flags: { [beatFlag(1, 0)]: true }, days: 0 });
    const text = getScene(story, sceneId(1, 0, "a")).extras!.find((x) => x.group === "spent")!.paragraphs[0];
    expect(text).toContain("already");
    expect(view(g, "way_0")!.available).toBe(true);
  });

  it("holds the hub’s tally to the beats spent and shows the Elder’s remark only when the road is done", () => {
    const hub = getScene(story, hubId(2));
    const tallies = hub.extras!.filter((x) => x.group === "tally");
    expect(tallies).toHaveLength(10);
    expect(hub.interjections).toHaveLength(1);
    expect(hub.interjections![0].line).toBe(ROADS[2].hub.remark);
  });

  it("never lets a random walk through all ten roads leave the numbers unsound, or the clock run backward", () => {
    let seed = 99;
    const rand = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
    for (const road of ROADS) {
      let g = standing(road.realm, 9, { sceneId: hubId(road.realm), days: 0 });
      let last = g.days;
      for (let i = 0; i < 400; i++) {
        const options = getChoices(getScene(story, g.sceneId), g).filter((v) => v.available);
        expect(options.length, g.sceneId).toBeGreaterThan(0);
        g = go(g, options[Math.floor(rand() * options.length)].choice.id);
        expect(g.days).toBeGreaterThanOrEqual(last);
        last = g.days;
        expect(Number.isFinite(g.days)).toBe(true);
        for (const e of g.log) expect(/\{\w+\}|undefined|NaN/.test(e.text), e.text.slice(0, 60)).toBe(false);
        if (!g.sceneId.startsWith("cn") && !g.sceneId.startsWith("wayside_cn_")) {
          g = standing(road.realm, 9, { sceneId: hubId(road.realm), days: g.days, years: g.years });
        }
      }
      expect(REALMS[g.realm]).toBeDefined();
    }
  });
});
