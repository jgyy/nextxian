import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import { gainCultivation, LAYER_PREFIX, REALMS, reachedFlag } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { parseConditions } from "@/engine/markup";
import { restoreGame } from "@/engine/save";
import { LAYERS, ORDINALS } from "@/engine/stage-text";
import {
  failsAt,
  failQi,
  fallBack,
  isMajor,
  layerForPoints,
  layerName,
  layerTitle,
  LEVELS,
  levelNow,
  levelProgress,
  levelThreshold,
  MAX_FAILS,
  pointsCap,
  steadiness,
  TOP_LEVEL,
  verdict,
  wallDifficulty,
  wallFailFlag,
  wallInsight,
  wallPrepFlag,
  wallQi,
} from "@/engine/stages";
import { auditStory } from "@/engine/audit";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { ascentEntrances, ascentGroups, ascentScenarios, WAYSIDES13 } from "@/story/ascent";
import { BACK13, hubId, wallId } from "@/story/ascent/build";
import { REALM_LEX, WALL_LEX } from "@/story/ascent/lexicon";
import type { GameState, Scene } from "@/engine/types";

const scenes: Scene[] = ascentGroups.flatMap((g) => g.scenes);
const walls = scenes.filter((s) => /^bw\d\d_/.test(s.id));
const strong = { qi: 100, karma: 0, insight: 100 };
/** A hero standing on a level with the points that level asks. */
const standing = (level: number, patch: Partial<GameState> = {}): GameState => ({
  ...createGame(story),
  realm: Math.floor(level / 10),
  level,
  cultivation: levelThreshold(level),
  stats: strong,
  log: [],
  ...patch,
});
const view = (state: GameState, choiceId: string) => getChoices(getScene(story, state.sceneId), state).find((v) => v.choice.id === choiceId);
const shown = (state: GameState, id: string) => enterScene(story, { ...state, log: [] }, getScene(story, id)).log.map((e) => e.text).join("\n");

describe("the ladder", () => {
  it("is ten major realms of ten layers each, a hundred levels in all, every one with its own name and wall", () => {
    expect(REALMS).toHaveLength(10);
    expect(LEVELS).toBe(100);
    expect(LAYERS).toHaveLength(10);
    for (const rows of LAYERS) {
      expect(rows).toHaveLength(10);
      expect(new Set(rows.map((r) => r[0])).size).toBe(10);
      for (const row of rows) for (const text of row.slice(1)) expect(text.length).toBeGreaterThan(20);
    }
    const walls = LAYERS.flatMap((rows) => rows.slice(0, 9).map((r) => r[1]));
    expect(new Set(walls).size).toBe(walls.length);
    const wins = LAYERS.flatMap((rows) => rows.slice(0, 9).map((r) => r[2]));
    expect(new Set(wins).size).toBe(wins.length);
    expect(ORDINALS).toHaveLength(10);
  });

  it("puts the thresholds of the layers between the thresholds of the realms, rising all the way, and wider the higher the layer", () => {
    expect(levelThreshold(0)).toBe(0);
    for (let n = 1; n < LEVELS; n++) {
      expect(levelThreshold(n), `level ${n}`).toBeGreaterThan(levelThreshold(n - 1));
      if (n % 10 === 0) expect(levelThreshold(n)).toBe(REALMS[n / 10].threshold);
    }
    expect(levelThreshold(LEVELS)).toBeGreaterThan(levelThreshold(TOP_LEVEL));
    for (let r = 0; r < 10; r++) {
      const widths = Array.from({ length: 9 }, (_, s) => levelThreshold(r * 10 + s + 1) - levelThreshold(r * 10 + s));
      for (let s = 1; s < 9; s++) expect(widths[s]).toBeGreaterThanOrEqual(widths[s - 1]);
    }
    expect(layerForPoints(3, REALMS[3].threshold)).toBe(0);
    expect(layerForPoints(3, REALMS[4].threshold - 1)).toBe(9);
  });

  it("names a level by its realm and its ordinal layer", () => {
    expect(layerTitle(0)).toBe("Mortal, First Layer");
    expect(layerTitle(23)).toBe("Foundation Establishment, Fourth Layer");
    expect(layerTitle(99)).toBe("Dao Sovereign, Tenth Layer");
    expect(layerName(34)).toBe("Gilding");
  });

  it("asks more of a hero at every higher wall, and more for a major one than for the layer below it", () => {
    for (let n = 2; n < LEVELS; n++) {
      expect(wallQi(n)).toBeGreaterThanOrEqual(wallQi(n - 1));
      expect(wallInsight(n)).toBeGreaterThanOrEqual(wallInsight(n - 1));
      expect(wallDifficulty(n)).toBeGreaterThanOrEqual(wallDifficulty(n - 1) - (isMajor(n - 1) ? 2 : 0));
      if (isMajor(n) && n > 10) expect(wallDifficulty(n)).toBeGreaterThan(wallDifficulty(n - 1));
    }
    expect(wallDifficulty(1)).toBe(0);
    expect(wallDifficulty(99)).toBeGreaterThan(wallDifficulty(50));
  });

  it("reads the level of a hero from the level the game wrote down, and from the points when the two disagree", () => {
    expect(levelNow({ realm: 0, cultivation: 0 })).toBe(0);
    expect(levelNow({ realm: 3, cultivation: levelThreshold(35), level: 35 })).toBe(35);
    // A test or an old save that moved the realm or the points: the points decide.
    expect(levelNow({ realm: 3, cultivation: REALMS[4].threshold - 1, level: 0 })).toBe(39);
    expect(levelNow({ realm: 3, cultivation: levelThreshold(33), level: 31 })).toBe(33);
    expect(levelProgress(standing(12))).toBe(0);
    expect(levelProgress({ ...standing(12), cultivation: (levelThreshold(12) + levelThreshold(13)) / 2 })).toBeCloseTo(0.5);
  });

  it("is read by the `level` condition, in the markup too", () => {
    const g = standing(23);
    expect(conditionsHold([{ kind: "level", min: 23, max: 23 }], g)).toBe(true);
    expect(conditionsHold(parseConditions("level>=24", "t"), g)).toBe(false);
    expect(conditionsHold(parseConditions("level>=20 & level<=29", "t"), g)).toBe(true);
    expect(conditionsHold(parseConditions("level<=22", "t"), g)).toBe(false);
  });
});

describe("a wall", () => {
  const trial = (level: number, patch: Partial<GameState> = {}) => gainCultivation({ ...standing(level), cultivation: levelThreshold(level + 1) - 1, ...patch }, 1);

  it("lets a hero through when they are steady enough, and tells them what it was like", () => {
    const after = trial(0);
    expect(after.level).toBe(1);
    expect(after.realm).toBe(0);
    expect(after.log.at(-1)!.kind).toBe("realm");
    expect(after.log.at(-1)!.text).toContain("Mortal, Second Layer (Flesh-Tempering)");
    expect(after.log.at(-1)!.text).toContain(LAYERS[0][0][2]);
    expect(after.flags[`${LAYER_PREFIX}1`]).toBe(true);
  });

  it("throws a hero back who is not steady enough, takes their qi and half the way to the wall, and says so", () => {
    const g = standing(55, { stats: { qi: 60, karma: 0, insight: 40 } });
    const before = { ...g, cultivation: levelThreshold(56) - 1 };
    const after = gainCultivation(before, 1);
    expect(verdict(before).kind).toBe("thrown");
    expect(after.level).toBe(55);
    expect(after.realm).toBe(5);
    expect(after.cultivation).toBe(fallBack(55));
    expect(after.cultivation).toBeGreaterThanOrEqual(levelThreshold(55));
    expect(after.cultivation).toBeLessThan(levelThreshold(56));
    expect(after.stats.qi).toBe(60 - failQi(56));
    expect(after.flags[wallFailFlag(56, 1)]).toBe(true);
    const last = after.log.at(-1)!;
    expect(last.kind).toBe("wall");
    expect(last.text).toContain("The wall holds.");
    expect(last.text).toContain(LAYERS[5][5][3]);
  });

  it("makes a hero steadier with every fall, so that no wall keeps a hero out for ever", () => {
    let g = standing(55, { stats: { qi: 60, karma: 0, insight: 40 } });
    let falls = 0;
    for (let i = 0; i < 12 && g.level === 55; i++) {
      g = gainCultivation({ ...g, stats: { qi: 60, karma: 0, insight: 40 }, cultivation: levelThreshold(56) }, 0);
      if (g.level === 55) falls++;
    }
    expect(g.level).toBe(56);
    expect(falls).toBeGreaterThanOrEqual(1);
    expect(failsAt(g.flags, 56)).toBe(falls);
  });

  it("is passable at every one of the ninety-nine walls by a hero at their worst and a wall that has thrown them eight times", () => {
    for (let n = 1; n < LEVELS; n++) {
      const flags = Object.fromEntries(Array.from({ length: MAX_FAILS }, (_, k) => [wallFailFlag(n, k + 1), true]));
      const worst = { stats: { qi: wallQi(n), karma: -90, insight: wallInsight(n) }, flags, npc: createGame(story).npc, daoPoints: 0, realm: Math.floor(n / 10), cultivation: 0 };
      expect(steadiness(worst, n).total, `wall ${n}`).toBeGreaterThanOrEqual(wallDifficulty(n));
    }
  });

  it("holds a hero who lacks the qi or the insight, keeps their points, and says what is missing only once", () => {
    const weak = { ...standing(40), stats: { qi: 5, karma: 0, insight: 100 }, cultivation: levelThreshold(41) - 1 };
    const held = gainCultivation(weak, 1);
    expect(held.level).toBe(40);
    expect(held.cultivation).toBeGreaterThanOrEqual(levelThreshold(41));
    expect(held.log.at(-1)!.kind).toBe("wall");
    expect(held.log.at(-1)!.text).toContain(`${wallQi(41)} qi`);
    const again = gainCultivation(held, 1);
    expect(again.log).toHaveLength(held.log.length);
    const ready = gainCultivation({ ...again, stats: strong }, 1);
    expect(ready.level).toBe(41);
  });

  it("never lets points pile up more than a wall beyond the one in front of a hero", () => {
    const g = gainCultivation({ ...standing(40), stats: { qi: 5, karma: 0, insight: 100 } }, 100000);
    expect(g.cultivation).toBeLessThanOrEqual(pointsCap(40));
    expect(g.level).toBe(40);
  });

  it("passes a major wall only from the Tenth Layer, as a realm, with the sky’s trial and the Elder’s respect", () => {
    const near = standing(69, { stats: strong, flags: { bwp_70_1: true, bwp_70_2: true, bwp_70_3: true, bwp_70_4: true } });
    const after = gainCultivation({ ...near, cultivation: levelThreshold(70) - 1 }, 1);
    expect(after.realm).toBe(7);
    expect(after.level).toBe(70);
    expect(after.flags[reachedFlag(7)]).toBe(true);
    expect(after.log.at(-1)!.text).toContain("Breakthrough: Ascendant.");
    expect(after.npc.respect).toBeGreaterThan(near.npc.respect);
  });

  it("gives a layer a toll in qi, unless the hero practised against the wall", () => {
    const base = standing(24, { stats: { qi: 80, karma: 0, insight: 100 } });
    const raw = gainCultivation({ ...base, cultivation: levelThreshold(25) - 1 }, 1);
    const practised = gainCultivation({ ...base, flags: { [wallPrepFlag(25, 1)]: true }, cultivation: levelThreshold(25) - 1 }, 1);
    expect(raw.level).toBe(25);
    expect(raw.stats.qi).toBeLessThan(80);
    expect(practised.stats.qi).toBeGreaterThan(80);
  });

  it("holds the top of the ladder: nothing above the Tenth Layer of the last realm", () => {
    const top = standing(TOP_LEVEL);
    expect(verdict(top).kind).toBe("none");
    expect(gainCultivation(top, 5000).level).toBe(TOP_LEVEL);
  });

  it("carries a hero over the layers they had left when a practice reaches the gate, and presses at the wall when a road says so", () => {
    const g = standing(31, { stats: strong });
    const gate = choose(story, { ...g, sceneId: "wayside_bw_3" }, "go_31");
    expect(gate.sceneId).toBe(wallId(31, "a"));
    const hour = { ...g, sceneId: wallId(31, "hour"), cultivation: levelThreshold(31) };
    const pressed = choose(story, hour, "press_steady");
    expect(pressed.level).toBe(32);
    expect(pressed.sceneId).toBe(wallId(31, "after"));
  });

  it("saves and restores the level, and a save from before the layers reads it from the points", () => {
    const g = standing(37);
    const restored = restoreGame(JSON.parse(JSON.stringify(g)), story);
    expect(levelNow(restored!)).toBe(37);
    const { level: _drop, ...old } = g;
    void _drop;
    expect(levelNow(restoreGame(JSON.parse(JSON.stringify(old)), story)!)).toBe(37);
  });
});

describe("the Breakthrough Roads", () => {
  it("add a thousand scenes: ten waysides of ten walls, ten scenes a wall, and the hubs and ways back", () => {
    expect(WAYSIDES13).toHaveLength(10);
    expect(ascentGroups).toHaveLength(10);
    expect(walls).toHaveLength(1000);
    expect(scenes.filter((s) => s.id.startsWith("wayside_"))).toHaveLength(10);
    expect(chapters.filter((c) => c.name.startsWith("Breakthrough Roads:"))).toHaveLength(10);
    expect(Object.keys(ascentEntrances)).toHaveLength(10);
    expect(new Set(scenes.map((s) => s.id)).size).toBe(scenes.length);
    for (let level = 0; level < LEVELS; level++) {
      for (const role of ["a", "m0", "m1", "m2", "m3", "hour", "after", "rest", "voice", "close"]) expect(story.scenes[wallId(level, role)], `${level} ${role}`).toBeDefined();
    }
  });

  it("writes by hand, for every wall, a station, what passes it, what the Elder says and what it leaves", () => {
    expect(WALL_LEX).toHaveLength(10);
    const counsel = new Set<string>();
    const stations = new Set<string>();
    for (const rows of WALL_LEX) {
      expect(rows).toHaveLength(10);
      for (const [station, key, line, echo] of rows) {
        for (const text of [station, key, line, echo]) expect(text.length).toBeGreaterThan(3);
        counsel.add(line);
        stations.add(station);
      }
    }
    expect(counsel.size).toBe(100);
    expect(stations.size).toBe(100);
    expect(REALM_LEX).toHaveLength(10);
  });

  it("keeps every scene within the cap, with four choices, and the story whole", () => {
    for (const scene of scenes) {
      expect(sceneBodyWords(scene), scene.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(scene.choices.length, scene.id).toBeGreaterThanOrEqual(4);
      expect(scene.title.trim().length).toBeGreaterThan(0);
    }
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("gives each wall a wording of its own: no two entries, hours or Elder lines are the same", () => {
    for (const role of ["a", "hour", "close"]) {
      const texts = Array.from({ length: LEVELS }, (_, level) => getScene(story, wallId(level, role)).paragraphs.join(" "));
      expect(new Set(texts).size, role).toBe(LEVELS);
    }
  });

  it("opens each wayside from a scene no other wave opens from, once", () => {
    const origins = WAYSIDES13.map((w) => w.origin);
    expect(new Set(origins).size).toBe(10);
    for (const w of WAYSIDES13) {
      expect(story.scenes[w.origin], w.origin).toBeDefined();
      expect(story.scenes[w.origin].choices.filter((c) => c.id.startsWith("wayside_")).map((c) => c.id), w.origin).toEqual([w.id]);
      expect(story.scenes[BACK13(w.origin)]).toBeDefined();
    }
  });

  it("lets a hero walk to the wall they stand before and any behind them, and shuts the walls above them", () => {
    const g = standing(13, { sceneId: hubId(1) });
    expect(view(g, "go_13")!.available).toBe(true);
    expect(view(g, "go_10")!.available).toBe(true);
    expect(view(g, "go_14")!.available).toBe(false);
    expect(view(g, "go_14")!.hint).toContain("not yet come");
    expect(shown(g, hubId(1))).toContain(WALL_LEX[1][3][0]);
  });

  it("lets a hero press only at the wall they stand before", () => {
    const hour = (level: number, stand: number) => ({ ...standing(stand), sceneId: wallId(level, "hour") });
    expect(view(hour(22, 22), "press_steady")!.available).toBe(true);
    expect(view(hour(22, 23), "press_steady")!.available).toBe(false);
    expect(view(hour(22, 21), "press_force")!.available).toBe(false);
  });

  it("walks one wall from the stations to the far side: entry, a way of working, the hour, the press and what follows", () => {
    let g = standing(41, { sceneId: hubId(4), stats: { qi: 100, karma: 0, insight: 100 } });
    g = choose(story, g, "go_41");
    g = choose(story, g, "way_comprehend");
    expect(g.sceneId).toBe(wallId(41, "m1"));
    const worked = choose(story, g, "work");
    expect(worked.flags[wallPrepFlag(42, 2)]).toBe(true);
    expect(view(worked, "work")).toBeUndefined();
    // Once worked, the same way is closed.
    const again = { ...worked, sceneId: wallId(41, "m1") };
    expect(view(again, "work")!.available).toBe(false);
    g = worked;
    expect(g.sceneId).toBe(wallId(41, "hour"));
    expect(shown(g, wallId(41, "hour"))).toContain("some of the work");
    g = choose(story, { ...g, cultivation: levelThreshold(41) }, "press_steady");
    expect(g.sceneId).toBe(wallId(41, "after"));
    expect(g.level).toBe(42);
    expect(shown(g, g.sceneId)).toContain(LAYERS[4][1][2]);
    g = choose(story, g, "elder");
    expect(g.sceneId).toBe(wallId(41, "voice"));
    expect(shown(g, g.sceneId)).toContain(WALL_LEX[4][1][2]);
    g = choose(story, g, "report");
    expect(g.sceneId).toBe(wallId(41, "close"));
    g = choose(story, g, "stations");
    expect(g.sceneId).toBe(hubId(4));
  });

  it("says in the aftermath whether the wall gave, threw the hero, or only held", () => {
    const after = wallId(55, "after");
    const gave = shown(standing(56), after);
    expect(gave).toContain(LAYERS[5][5][2]);
    expect(gave).toContain("Seventh Layer of Spirit Severing");
    const thrown = shown({ ...standing(55), flags: { [wallFailFlag(56, 1)]: true } }, after);
    expect(thrown).toContain(LAYERS[5][5][3]);
    expect(thrown).toContain("thrown back");
    const held = shown(standing(55), after);
    expect(held).toContain("not given");
  });

  it("lets a hero walk every wall of the ladder to its far side, trying again as the wall teaches them", () => {
    for (let level = 0; level < TOP_LEVEL; level++) {
      const flags = Object.fromEntries([1, 2, 3, 4].map((m) => [wallPrepFlag(level + 1, m), true]));
      let g: GameState = { ...standing(level, { flags }), sceneId: wallId(level, "hour") };
      for (let i = 0; i < MAX_FAILS + 2 && (g.level ?? level) === level; i++) {
        g = choose(story, { ...g, sceneId: wallId(level, "hour"), cultivation: Math.max(g.cultivation, levelThreshold(level)) }, "press_steady");
      }
      expect(g.level, `wall ${level}`).toBe(level + 1);
    }
  });

  it("answers the Elder three ways in every realm, with five tier lines each", () => {
    const ids = Object.keys(ascentScenarios);
    expect(ids).toHaveLength(30);
    for (const id of ids) expect(new Set(Object.values(ascentScenarios[id].lines)).size, id).toBe(5);
    expect(story.scenarios.BW_PRESS_3).toBeDefined();
  });
});

describe("walking the Breakthrough Roads at random", () => {
  const rng = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  };

  it("never leaves the ladder in a state it cannot read, whichever way a hero wanders, falls and climbs", () => {
    for (let r = 0; r < 10; r++) {
      const rand = rng(r * 131 + 7);
      let g: GameState = { ...standing(r * 10 + 3, { stats: { qi: 80, karma: 10, insight: 60 } }), sceneId: hubId(r), wealth: 100 };
      for (let i = 0; i < 700; i++) {
        const scene = getScene(story, g.sceneId);
        const open = getChoices(scene, g).filter((v) => v.available);
        expect(open.length, g.sceneId).toBeGreaterThan(0);
        // Keep the wander on the road: a leave-the-road choice sends the walk back to its start.
        const onRoad = open.filter((v) => !v.choice.next.startsWith("back13_"));
        const pool = onRoad.length ? onRoad : open;
        g = choose(story, g, pool[Math.floor(rand() * pool.length)].choice.id);
        // Time on the road lets the stations teach: a hero who rests regains the qi the walls took.
        if (i % 40 === 39) g = { ...g, stats: { ...g.stats, qi: Math.min(100, g.stats.qi + 40), insight: Math.min(100, g.stats.insight + 10) } };
        const level = levelNow(g);
        expect(Math.floor(level / 10), `realm and level agree in ${g.sceneId}`).toBe(g.realm);
        expect(g.cultivation, g.sceneId).toBeGreaterThanOrEqual(levelThreshold(level) - 0.01);
        expect(g.cultivation, g.sceneId).toBeLessThanOrEqual(pointsCap(level) + 0.01);
        expect(g.stats.qi).toBeGreaterThanOrEqual(0);
        expect(g.stats.qi).toBeLessThanOrEqual(100);
      }
      expect(levelNow(g), `road ${r} lifts a hero`).toBeGreaterThan(r * 10 + 3);
    }
  });
});
