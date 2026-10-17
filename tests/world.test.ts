import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import { levelThreshold } from "@/engine/stages";
import { conditionsHold } from "@/engine/npc";
import { DEFAULT_HERO, GENDERS, type Hero } from "@/engine/hero";
import { auditStory } from "@/engine/audit";
import { validateEconomy, validateStory, MAX_SCENE_WORDS, sceneBodyWords } from "@/engine/validate";
import { parseConditions } from "@/engine/markup";
import {
  COURSES,
  HAND_WEIGHT,
  HINGES_FOR_AGE,
  MANY_VOICES,
  METHODS,
  PARTS,
  PART_SHIFT,
  PART_WEIGHT,
  affairsOf,
  courseAfter,
  coursesFor,
  doneFlag,
  leverFlag,
  outFlag,
  partFlag,
  recFlag,
  roleOf,
  worldMeasure,
  type Course,
  type Part,
} from "@/engine/world";
import { AFFAIRS, REACH_SPECS, affairAt, contexts, worldEntrances, worldGroups, worldItems, worldLedger, worldScenarios } from "@/story/world";
import { reportId, sid, stonesFor, tokenId } from "@/story/world/build";
import { GATHERED, GATHER_END, GATHER_HUB, gatherNames, gatherScenario, gatherScenes, giftFlag, metFlag, worldChoices } from "@/story/world/main";
import { REACH_SPECS as SPECS } from "@/story/world/reaches";
import type { GameState, Scene, Tier } from "@/engine/types";

const worldScenes: Scene[] = worldGroups.flatMap((g) => g.scenes);
const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

function at(sceneId: string, patch: Partial<GameState> = {}, hero: Partial<Hero> = {}): GameState {
  const base = createGame(story, { ...DEFAULT_HERO, ...hero });
  return { ...base, sceneId, log: [], stats: { qi: 40, karma: 0, insight: 30 }, ...patch };
}
const open = (g: GameState) => getChoices(getScene(story, g.sceneId), g).filter((v) => v.available).map((v) => v.choice.id);
const shown = (g: GameState) => getChoices(getScene(story, g.sceneId), g).map((v) => v.choice.id);
const walk = (g: GameState, ids: string[]): GameState => ids.reduce((s, id) => choose(story, s, id), g);
const text = (g: GameState) => g.log.map((e) => e.text).join("\n");

describe("the engine’s world", () => {
  it("moves an affair from its fate by the part and the way, and no further than the ends", () => {
    for (const fate of COURSES) {
      for (const part of PARTS) {
        for (const method of METHODS) {
          const after = courseAfter(fate, part, method);
          const step = COURSES.indexOf(after) - COURSES.indexOf(fate);
          const wanted = Math.max(-COURSES.indexOf(fate), Math.min(COURSES.length - 1 - COURSES.indexOf(fate), PART_SHIFT[part][method]));
          expect(step, `${fate}/${part}/${method}`).toBeCloseTo(wanted);
        }
      }
    }
    // Looking on moves nothing, a hand can only help, and the hinge can lift an affair two steps or drop it two.
    for (const fate of COURSES) for (const method of METHODS) expect(courseAfter(fate, "look", method)).toBe(fate);
    for (const method of METHODS) expect(PART_SHIFT.hand[method]).toBeGreaterThanOrEqual(0);
    expect(courseAfter("broke", "hinge", "turned")).toBe("mended");
    expect(courseAfter("mended", "hinge", "gave")).toBe("broke");
  });

  it("leaves both ends open to a hero who is the hinge of an affair, whatever its fate, and a look only its own", () => {
    for (const fate of COURSES) {
      expect(coursesFor(fate, "hinge"), fate).toEqual(expect.arrayContaining(["broke", "mended"]));
      expect(coursesFor(fate, "look"), fate).toEqual([fate]);
    }
    expect(coursesFor("ground", "hinge")).toEqual(COURSES);
  });

  it("reads the flags back into the parts, courses and ways, and ignores every other flag", () => {
    const flags = {
      [partFlag(3, "boundary", "side")]: true,
      [partFlag(3, "boundary", "look")]: true,
      [outFlag(3, "boundary", "mended")]: true,
      [recFlag(3, "boundary")]: true,
      [doneFlag(3, "boundary")]: true,
      [partFlag(10, "names14", "hinge")]: true,
      [outFlag(10, "names14", "broke")]: true,
      wo_met_4: true,
      wo_gathered: true,
      [leverFlag(1, "granary")]: true,
    };
    const records = affairsOf(flags);
    expect(records).toHaveLength(2);
    const boundary = records.find((r) => r.id === "boundary")!;
    expect(boundary).toMatchObject({ reach: 3, part: "side", course: "mended", record: true, done: true });
    expect(records.find((r) => r.id === "names14")).toMatchObject({ reach: 10, part: "hinge", course: "broke" });
    expect(worldMeasure(flags, "weight")).toBe(PART_WEIGHT.side + PART_WEIGHT.hinge);
    expect(worldMeasure(flags, "voices")).toBe(2);
    expect(worldMeasure(flags, "hinges")).toBe(1);
    expect(worldMeasure(flags, "mended")).toBe(1);
    expect(worldMeasure(flags, "broke", 10)).toBe(1);
    expect(worldMeasure(flags, "voices", 3)).toBe(1);
    expect(worldMeasure(flags, "records")).toBe(1);
    expect(worldMeasure({}, "weight")).toBe(0);
  });

  it("names a hero’s part in the world by the parts they took: unseen, a pair of eyes, a hand, the many hands, a hinge of the age", () => {
    const flagsOf = (parts: Part[]) => Object.fromEntries(parts.map((p, i) => [partFlag(1 + (i % 10), `a${Math.floor(i / 10)}x${i}`.replace(/[^a-z0-9]/g, ""), p), true]));
    expect(roleOf({}).id).toBe("unseen");
    expect(roleOf(flagsOf(["look"])).id).toBe("witness");
    expect(roleOf(flagsOf(["look", "look", "hand"])).id).toBe("witness");
    expect(roleOf(flagsOf(["hand", "hand", "side", "side", "side"])).id).toBe("hand");
    expect(roleOf(flagsOf(Array(MANY_VOICES).fill("look"))).id).toBe("many");
    expect(roleOf(flagsOf([...Array(MANY_VOICES).fill("hand"), "hinge", "hinge", "hinge"])).id).toBe("many");
    expect(roleOf(flagsOf(Array(HINGES_FOR_AGE).fill("hinge"))).id).toBe("hinge");
    expect(HAND_WEIGHT).toBeGreaterThan(PART_WEIGHT.hinge);
  });

  it("reads a world condition in the markup and in play, over the whole world or one reach", () => {
    const [all] = parseConditions("world:voices>=12", "test");
    expect(all).toEqual({ kind: "world", measure: "voices", min: 12 });
    const [one] = parseConditions("world:mended@3>=2", "test");
    expect(one).toEqual({ kind: "world", measure: "mended", reach: 3, min: 2 });
    expect(() => parseConditions("world:luck>=2", "test")).toThrow();
    expect(() => parseConditions("world:mended@11>=2", "test")).toThrow();
    const game = at("gate", { flags: { [partFlag(3, "boundary", "hinge")]: true, [outFlag(3, "boundary", "mended")]: true } });
    expect(conditionsHold([one], game)).toBe(false);
    expect(conditionsHold([{ kind: "world", measure: "hinges", reach: 3, min: 1 }], game)).toBe(true);
    expect(conditionsHold([{ kind: "world", measure: "mended", reach: 4, max: 0 }], game)).toBe(true);
  });
});

describe("the forty affairs", () => {
  it("are ten reaches of four affairs, each affair twenty-five scenes, a thousand in all and ten hubs", () => {
    expect(REACH_SPECS).toHaveLength(10);
    expect(AFFAIRS).toHaveLength(40);
    expect(new Set(AFFAIRS.map((a) => a.id)).size).toBe(40);
    for (const a of AFFAIRS) expect(a.id, a.id).toMatch(/^[a-z0-9]+$/);
    const perAffair = worldScenes.filter((s) => s.id.startsWith("wo_"));
    expect(perAffair).toHaveLength(1000);
    expect(worldScenes.filter((s) => s.id.startsWith("wayside_world_"))).toHaveLength(10);
    for (const a of AFFAIRS) {
      const mine = perAffair.filter((s) => s.id.startsWith(`wo_${a.id}_`)).map((s) => s.id.slice(`wo_${a.id}_`.length));
      expect(mine.sort(), a.id).toEqual(["after", "ledger", "return", "sighting", "word", ...PARTS.flatMap((p) => [0, 1, 2, 3, 4].map((n) => `${p}${n}`))].sort());
    }
    for (const g of worldGroups) expect(g.scenes.filter((s) => s.id.startsWith("wo_")), g.name).toHaveLength(100);
  });

  it("opens each hub from a scene of the story, in the order of the story, and every scene exists in it", () => {
    let realm = 0;
    for (const w of REACH_SPECS) {
      expect(story.scenes[w.origin], w.origin).toBeDefined();
      expect(story.scenes[w.origin].choices.some((c) => c.next === w.id), w.origin).toBe(true);
      expect(w.realm).toBeGreaterThanOrEqual(realm);
      realm = w.realm;
      expect(story.scenes[`back15_${w.origin}`], w.origin).toBeDefined();
    }
    expect(Object.keys(worldEntrances)).toHaveLength(10);
    for (const s of worldScenes) expect(story.scenes[s.id], s.id).toBeDefined();
  });

  it("keeps every scene within the cap, with four choices every hero sees and no slot left unfilled", () => {
    const all = [...worldScenes, ...gatherScenes()];
    for (const s of all) {
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(s.choices.filter((c) => !c.hideLocked).length, s.id).toBeGreaterThanOrEqual(4);
      expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
    }
    for (const id of Object.keys(worldScenarios)) expect(JSON.stringify(story.scenarios[id]), id).not.toMatch(/\{\w+\}/);
    expect(validateStory(story)).toEqual([]);
    expect(validateEconomy(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("gives every affair a fate, with each of the three fates well used, and four distinct parts to take in it", () => {
    const fates = Object.fromEntries(COURSES.map((c) => [c, AFFAIRS.filter((a) => a.fate === c).length]));
    for (const c of COURSES) expect(fates[c], c).toBeGreaterThanOrEqual(8);
    for (const a of AFFAIRS) {
      expect(new Set(Object.values(a.deed)).size, a.id).toBe(4);
      for (const part of PARTS) for (const p of a.tracks[part]) expect(p.split(/\s+/).length, `${a.id}/${part}`).toBeGreaterThan(25);
      for (const c of COURSES) {
        expect(a.leaves[c].split(/\s+/).length, `${a.id}/${c}`).toBeGreaterThan(20);
        expect(a.after[c].split(/\s+/).length, `${a.id}/${c}`).toBeGreaterThan(10);
      }
      expect(a.token.blurb.length, a.id).toBeGreaterThan(40);
    }
    expect(new Set(AFFAIRS.map((a) => a.title)).size).toBe(40);
    expect(new Set(AFFAIRS.map((a) => a.token.name)).size).toBe(40);
  });

  it("names nobody in two affairs", () => {
    const names = AFFAIRS.flatMap((a) => [a.foe, a.ally]);
    expect(new Set(names).size).toBe(80);
  });

  it("places its reaches in the story, and the hero meets a reach only by choosing to", () => {
    for (const w of REACH_SPECS) {
      const origin = story.scenes[w.origin];
      const entrance = origin.choices.find((c) => c.id === w.id)!;
      expect(entrance.next).toBe(w.id);
      expect(entrance.requires ?? []).toEqual([]);
    }
  });
});

describe("taking a part", () => {
  it("commits the hero to one part, and leaves the hub by the sighting only before one is taken", () => {
    const g = walk(at("wayside_world_terraces"), ["go_granary"]);
    expect(g.sceneId).toBe(sid("granary", "sighting"));
    expect(open(g).sort()).toEqual(["leave", "part_hand", "part_hinge", "part_look", "part_side"]);
    const left = walk(g, ["leave"]);
    expect(left.sceneId).toBe("wayside_world_terraces");
    expect(worldMeasure(left.flags, "voices")).toBe(0);
    const took = walk(g, ["part_hand"]);
    expect(took.sceneId).toBe(sid("granary", "hand0"));
    expect(took.flags[partFlag(1, "granary", "hand")]).toBe(true);
    expect(worldMeasure(took.flags, "weight")).toBe(PART_WEIGHT.hand);
    for (const id of shown(took)) expect(id).not.toBe("leave");
  });

  it("locks the lever behind finding it: a hero who asks learns where it gives, and one who does not cannot use it", () => {
    const lay = at(sid("granary", "hand1"));
    expect(walk(lay, ["inquiry"]).flags[leverFlag(1, "granary")]).toBe(true);
    expect(walk(lay, ["truth"]).flags[leverFlag(1, "granary")]).toBe(true);
    expect(walk(lay, ["mercy"]).flags[leverFlag(1, "granary")]).toBeUndefined();
    const turn = sid("granary", "hand2");
    expect(open(at(turn))).not.toContain("turned");
    expect(open(at(turn, { flags: { [leverFlag(1, "granary")]: true } }))).toContain("turned");
    expect(open(at(turn))).toEqual(expect.arrayContaining(["forced", "bargained", "gave"]));
  });

  it("asks the reach’s tier of a hero who forces a reach above the first, and not of one who forces a village", () => {
    const hardest = AFFAIRS.find((a) => contexts[AFFAIRS.indexOf(a)].realm >= 4)!;
    const forced = story.scenes[sid(hardest.id, "hinge2")].choices.find((c) => c.id === "forced")!;
    expect(forced.needsRealm).toBe(contexts[AFFAIRS.indexOf(hardest)].realm);
    const village = story.scenes[sid("granary", "hinge2")].choices.find((c) => c.id === "forced")!;
    expect(village.needsRealm).toBeUndefined();
  });

  it("sets the course from the fate, the part and the way, in every affair and every part", () => {
    for (const [i, a] of AFFAIRS.entries()) {
      const c = contexts[i];
      for (const part of PARTS) {
        const scene = story.scenes[sid(a.id, `${part}2`)];
        for (const method of METHODS) {
          const choice = scene.choices.find((x) => x.id === method)!;
          const flags = (choice.effects ?? []).flatMap((e) => (e.kind === "setFlag" ? [e.flag] : []));
          expect(flags, `${a.id}/${part}/${method}`).toContain(outFlag(c.reach, a.id, courseAfter(a.fate, part, method)));
          expect(flags).toContain(`wo_how_r${c.reach}_${a.id}_${method}`);
        }
        // A Dao’s craft is the lever without the finding of it, and is hidden from everyone it is not for.
        const crafts = scene.choices.filter((x) => x.id.startsWith("craft_"));
        expect(crafts).toHaveLength(8);
        for (const x of crafts) {
          expect(x.hideLocked).toBe(true);
          expect((x.effects ?? []).some((e) => e.kind === "setFlag" && e.flag === outFlag(c.reach, a.id, courseAfter(a.fate, part, "turned")))).toBe(true);
        }
      }
    }
  });

  it("lets a hero walk an affair from the sighting to the hub, setting the part, the way and the course, and leaving a token", () => {
    const start = at(sid("granary", "sighting"), { wealth: 40 });
    const end = walk(start, ["part_hinge", "force", "inquiry", "turned", "qi", "truth", "accept", "truth", "true_account", "report"]);
    expect(end.sceneId).toBe("wayside_world_terraces");
    expect(end.flags[partFlag(1, "granary", "hinge")]).toBe(true);
    expect(end.flags[outFlag(1, "granary", "mended")]).toBe(true);
    expect(end.flags[recFlag(1, "granary")]).toBe(true);
    expect(end.flags[doneFlag(1, "granary")]).toBe(true);
    expect(end.items[tokenId("granary")]).toBe(1);
    expect(worldMeasure(end.flags, "mended")).toBe(1);
    expect(roleOf(end.flags).id).toBe("witness");
    expect(end.stats.qi).toBeLessThan(start.stats.qi + 5);
    // The hub then shuts that affair, and the Elder has heard of it.
    expect(open(end)).not.toContain("go_granary");
    expect(text(end)).toMatch(/Granary/);
  });

  it("makes the same walk cost a look on a good deal less than a turn", () => {
    const base = at(sid("granary", "look3"), { wealth: 100 });
    const look = walk(base, ["stones"]);
    const hingeBase = at(sid("granary", "hinge3"), { wealth: 100 });
    const hinge = walk(hingeBase, ["stones"]);
    expect(base.wealth - look.wealth).toBe(stonesFor("look", 0));
    expect(hingeBase.wealth - hinge.wealth).toBe(stonesFor("hinge", 0));
    expect(stonesFor("hinge", 0)).toBeGreaterThan(stonesFor("look", 0) * 5);
    // A hero who has not the stones cannot pay in them, and has three other ways.
    const poor = at(sid("granary", "hinge3"), { wealth: 0 });
    expect(open(poor)).not.toContain("stones");
    expect(open(poor)).toEqual(expect.arrayContaining(["qi", "name", "corner"]));
  });

  it("scales what a part earns and costs with the tier of the reach", () => {
    for (const part of PARTS) expect(stonesFor(part, 6)).toBeGreaterThan(stonesFor(part, 0));
    for (let r = 0; r < 7; r++) {
      expect(stonesFor("look", r)).toBeLessThan(stonesFor("hand", r));
      expect(stonesFor("hand", r)).toBeLessThan(stonesFor("side", r));
      expect(stonesFor("side", r)).toBeLessThan(stonesFor("hinge", r));
    }
  });

  it("sells the telling once, and leaves it to a hero who has not seen the affair through", () => {
    for (const a of AFFAIRS) {
      const sold = story.scenes[sid(a.id, "ledger")].choices.find((c) => c.id === "deceit")!;
      expect(sold.requires, a.id).toEqual([{ kind: "flag", flag: doneFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id), is: false }]);
    }
  });
});

describe("the Elder and the world", () => {
  it("answers every affair with five distinct lines and a memory for each part the hero could have taken and each course it could have come to", () => {
    for (const [i, a] of AFFAIRS.entries()) {
      const s = worldScenarios[reportId(a.id)];
      expect(new Set(TIERS.map((t) => s.lines[t])).size, a.id).toBe(5);
      const memory = s.memory ?? [];
      for (const part of PARTS) for (const c of coursesFor(a.fate, part)) {
        expect(memory.some((m) => JSON.stringify(m.when).includes(partFlag(contexts[i].reach, a.id, part)) && JSON.stringify(m.when).includes(outFlag(contexts[i].reach, a.id, c))), `${a.id}/${part}/${c}`).toBe(true);
      }
    }
  });

  it("reads a hero’s part and its course in her memory, the most particular first", () => {
    const hero = at(sid("granary", "return"), { flags: { [partFlag(1, "granary", "hinge")]: true, [outFlag(1, "granary", "mended")]: true, [recFlag(1, "granary")]: true } });
    const said = walk(hero, ["report"]);
    expect(text(said)).toMatch(/turned on you/);
  });

  it("speaks on her own as the hero’s part grows, once", () => {
    const remarks = (story.remarks ?? []).filter((r) => r.id.startsWith("wo_"));
    expect(remarks.length).toBeGreaterThanOrEqual(9);
    expect(new Set(remarks.map((r) => r.id)).size).toBe(remarks.length);
    for (const r of remarks) {
      expect(r.speaker).toBeUndefined();
      expect(r.line.length).toBeGreaterThan(60);
    }
  });
});

describe("the Gathering", () => {
  const scenes = gatherScenes();
  const byId = new Map(scenes.map((s) => [s.id, s]));

  it("is a hub, two scenes for each of the ten reaches, and an end, and comes up the road before the Last Sealing", () => {
    expect(scenes).toHaveLength(22);
    expect(GATHER_HUB.startsWith("hub_")).toBe(true);
    expect(gatherNames).toHaveLength(10);
    const hub = story.scenes["hub_b6"];
    const way = hub.choices.find((c) => c.id === "world_gather")!;
    expect(way.next).toBe(GATHER_HUB);
    expect(worldChoices(hub)).toHaveLength(1);
    expect(worldChoices(story.scenes["gate"])).toEqual([]);
    expect(open(at("hub_b6", { flags: { b6q_abyss: true } }))).toContain("world_gather");
    expect(open(at("hub_b6", { flags: { b6q_abyss: true, [GATHERED]: true } }))).not.toContain("world_gather");
    expect(open(at("hub_b6", {}))).not.toContain("world_gather");
    expect(byId.get(GATHER_END)!.choices.every((c) => c.next === "hub_b6")).toBe(true);
    const group = chapters.find((c) => c.name === "World Roads: The Gathering")!;
    expect(group.scenes).toHaveLength(22);
  });

  it("sends help only from a reach the hero listened to in at least two of its affairs, and shows the offer to no one else", () => {
    const none = at("world_gather_1b");
    expect(shown(none)).not.toContain("accept");
    const one = at("world_gather_1b", { flags: { [partFlag(1, "granary", "look")]: true } });
    expect(shown(one)).not.toContain("accept");
    const two = at("world_gather_1b", { flags: { [partFlag(1, "granary", "look")]: true, [partFlag(1, "levy", "hand")]: true } });
    expect(open(two)).toContain("accept");
    const gifted = walk(two, ["accept"]);
    expect(gifted.flags[giftFlag(1)]).toBe(true);
    expect(gifted.flags[metFlag(1)]).toBe(true);
    expect(gifted.sceneId).toBe(GATHER_HUB);
    expect(gifted.stats.qi).toBeGreaterThan(two.stats.qi);
    // A reach is met once.
    expect(open(gifted)).not.toContain("greet_1");
    expect(open(gifted)).toContain("greet_2");
  });

  it("tells each affair of a reach by what became of it, or, where no hand of the hero’s was in it, by what the world did with it", () => {
    const touched = at("world_gather_1a", { flags: { [partFlag(1, "granary", "hinge")]: true, [outFlag(1, "granary", "mended")]: true } });
    const untouched = at("world_gather_1a");
    const g = AFFAIRS.find((a) => a.id === "granary")!;
    const shownText = (state: GameState) => {
      const scene = getScene(story, state.sceneId);
      return [...scene.paragraphs, ...(scene.extras ?? []).filter((x) => conditionsHold(x.when, state)).flatMap((x) => x.paragraphs)].join("\n");
    };
    expect(shownText(touched)).toContain(g.after.mended);
    expect(shownText(untouched)).toContain(g.after[g.fate]);
    expect(shownText(untouched)).toContain("No hand of yours");
    expect(shownText(touched)).not.toContain("No hand of yours was in it. " + g.after.mended);
  });

  it("answers the Elder at the end by what the hero has been: four memories, and her five tiers for a hero the world has not met", () => {
    expect(gatherScenario.memory).toHaveLength(4);
    const end = at(GATHER_END);
    const first = end.flags;
    expect(first[GATHERED]).toBeUndefined();
    const done = walk(end, ["ask_elder"]);
    expect(done.sceneId).toBe("hub_b6");
    expect(done.flags[GATHERED]).toBe(true);
    expect(text(done)).toMatch(/the world|mountain|lamps|road|name/i);
  });

  it("reads a hero’s part the same way the engine does: one extra of the end scene shows, and it is the engine’s role", () => {
    const end = byId.get(GATHER_END)!;
    const cases: [string, Record<string, boolean>][] = [
      ["unseen", {}],
      ["witness", { [partFlag(1, "granary", "look")]: true }],
      ["hand", Object.fromEntries(["granary", "levy", "well", "lanternday", "hostel", "scree"].map((id, i) => [partFlag(i < 4 ? 1 : 2, id, "side"), true]))],
      ["many", Object.fromEntries(AFFAIRS.slice(0, MANY_VOICES).map((a) => [partFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id, "look"), true]))],
      ["hinge", Object.fromEntries(AFFAIRS.slice(0, HINGES_FOR_AGE).map((a) => [partFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id, "hinge"), true]))],
    ];
    for (const [role, flags] of cases) {
      expect(roleOf(flags).id, role).toBe(role);
      const state = at(GATHER_END, { flags });
      const roleExtras = (end.extras ?? []).filter((x) => x.group === "role" && conditionsHold(x.when, state));
      expect(roleExtras, role).toHaveLength(1);
    }
  });
});

/** The ids of the choices a hero can take at a scene that lead to one scene, since the markup names a choice by its place. */
const leadsTo = (g: GameState, next: string) => getChoices(getScene(story, g.sceneId), g).filter((v) => v.available && v.choice.next === next).map((v) => v.choice.id);

describe("the endings of the world", () => {
  const manyFlags = Object.fromEntries(AFFAIRS.slice(0, MANY_VOICES).map((a) => [partFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id, "hand"), true]));
  const hingeFlags: Record<string, boolean> = Object.fromEntries(
    AFFAIRS.slice(0, HINGES_FOR_AGE + 3).flatMap((a, i) => [
      [partFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id, i < HINGES_FOR_AGE ? "hinge" : "look"), true],
      ...(i < 4 ? [[outFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id, "mended"), true]] : []),
    ] as [string, boolean][]),
  );

  it("opens the Many Hands to a hero of sixteen voices and no more than two hinges, at any realm", () => {
    const base = { realm: 0, level: 0 };
    expect(leadsTo(at("lastseal_choice", base), "end_many")).toEqual([]);
    expect(leadsTo(at("lastseal_choice", { ...base, flags: manyFlags }), "end_many")).toHaveLength(1);
    const fewer = Object.fromEntries(Object.entries(manyFlags).slice(0, MANY_VOICES - 1));
    expect(leadsTo(at("lastseal_choice", { ...base, flags: fewer }), "end_many")).toEqual([]);
    const hinged = { ...manyFlags, ...Object.fromEntries(AFFAIRS.slice(0, 3).map((a) => [partFlag(contexts[AFFAIRS.indexOf(a)].reach, a.id, "hinge"), true])) };
    expect(leadsTo(at("lastseal_choice", { ...base, flags: hinged }), "end_many")).toEqual([]);
    const withMany = at("lastseal_choice", { ...base, flags: manyFlags });
    const ended = walk(withMany, leadsTo(withMany, "end_many"));
    expect(getScene(story, ended.sceneId).ending).toBe("Ending: The Many Hands");
  });

  it("opens the Hinge of the Age to a hero on whom five things turned and four of them mended, at any realm", () => {
    const withHinge = at("lastseal_choice", { flags: hingeFlags });
    expect(leadsTo(withHinge, "end_hinge")).toHaveLength(1);
    const fewer = Object.fromEntries(Object.entries(hingeFlags).filter(([f]) => !f.startsWith("wo_out_")));
    expect(leadsTo(at("lastseal_choice", { flags: fewer }), "end_hinge")).toEqual([]);
    const ended = walk(withHinge, leadsTo(withHinge, "end_hinge"));
    expect(getScene(story, ended.sceneId).ending).toBe("Ending: A Hinge of the Age");
  });

  it("tells the Book One endings a short line of the part the hero played, and keeps them within the cap", () => {
    for (const id of ["ending_sisters", "ending_redeemed", "ending_exile", "ending_fallen", "ending_sovereign", "end_ledger"]) {
      const scene = story.scenes[id];
      expect(sceneBodyWords(scene), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect((scene.extras ?? []).filter((x) => x.group === "world"), id).toHaveLength(4);
    }
  });

  it("reaches both new endings, and every ending, in the story’s graph", () => {
    const reach = new Set<string>(["gate"]);
    const queue = ["gate"];
    while (queue.length) {
      const id = queue.shift()!;
      for (const c of story.scenes[id].choices) if (!reach.has(c.next)) { reach.add(c.next); queue.push(c.next); }
    }
    for (const id of ["end_many", "end_hinge", "hub_world_gather", GATHER_END]) expect(reach.has(id), id).toBe(true);
  });
});

describe("the panel’s ledger", () => {
  it("lists ten reaches of four affairs, each as the world has it, and the hero’s part in the ones they touched", () => {
    const empty = worldLedger({});
    expect(empty).toHaveLength(10);
    for (const reach of empty) {
      expect(reach.rows).toHaveLength(4);
      for (const row of reach.rows) {
        expect(row.course).toBe(row.spec.fate);
        expect(row.touched).toBe(false);
        expect(row.part).toBeUndefined();
      }
    }
    const touched = worldLedger({ [partFlag(2, "scree", "hand")]: true, [outFlag(2, "scree", "ground")]: true, [doneFlag(2, "scree")]: true });
    const row = touched[1].rows.find((r) => r.spec.id === "scree")!;
    expect(row).toMatchObject({ course: "ground", part: "hand", touched: true, done: true });
    expect(touched[1].rows.filter((r) => r.touched)).toHaveLength(1);
    expect(affairAt(sid("scree", "hinge3"))?.spec.id).toBe("scree");
    expect(affairAt("gate")).toBeUndefined();
  });

  it("keeps the genders of the people at the hub: every affair has a line for a woman, a man and someone who gives no answer", () => {
    for (const a of AFFAIRS) for (const g of GENDERS) expect(a.sees[g.value as keyof typeof a.sees]?.length, `${a.id}/${g.value}`).toBeGreaterThan(30);
    const scene = story.scenes[sid("granary", "sighting")];
    expect((scene.extras ?? []).filter((x) => x.group === "gender")).toHaveLength(GENDERS.length);
  });

  it("holds forty tokens, one an affair, none sold and none given", () => {
    expect(Object.keys(worldItems)).toHaveLength(40);
    for (const item of Object.values(worldItems)) {
      expect(item.keepsake).toBe(true);
      expect(item.kind).toBe("token");
      expect(story.items![item.id]).toBeDefined();
    }
  });

  it("gives the specs their reach order", () => {
    expect(SPECS.map((r) => r.id)).toEqual(REACH_SPECS.map((r) => r.id));
    expect(COURSES).toEqual(["broke", "ground", "mended"] as Course[]);
  });
});

describe("a long walk through the World Roads", () => {
  const FIRST: Record<Part, string> = { look: "inquiry", hand: "mercy", side: "truth", hinge: "force" };

  it("takes every part of every affair, in every way, from the word of it to the hub, with the course and the numbers sound", () => {
    for (const [i, a] of AFFAIRS.entries()) {
      const c = contexts[i];
      for (const part of PARTS) {
        for (const method of METHODS) {
          const start = at(sid(a.id, "sighting"), { wealth: 60, realm: 7, level: 70, cultivation: levelThreshold(70) });
          const end = walk(start, [`part_${part}`, FIRST[part], "inquiry", method, "qi", "truth", "quiet", "quiet", method === "turned" ? "true_account" : "quiet", method === "turned" ? "report" : "silent"]);
          const where = `${a.id}/${part}/${method}`;
          expect(end.sceneId, where).toBe(c.reachId);
          expect(end.flags[outFlag(c.reach, a.id, courseAfter(a.fate, part, method))], where).toBe(true);
          expect(end.flags[doneFlag(c.reach, a.id)], where).toBe(true);
          expect(worldMeasure(end.flags, "voices"), where).toBe(1);
          expect(worldMeasure(end.flags, "weight"), where).toBe(PART_WEIGHT[part]);
          expect(end.stats.qi, where).toBeGreaterThanOrEqual(0);
          expect(end.stats.qi, where).toBeLessThanOrEqual(100);
          expect(end.wealth, where).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });

  it("lets a hero take part in all forty affairs and still stand sound: forty voices, a weight of the parts taken, and nothing set twice", () => {
    let g = at("gate", { wealth: 400, realm: 7, level: 70, cultivation: levelThreshold(70) });
    const parts = PARTS;
    for (const [i, a] of AFFAIRS.entries()) {
      const part = parts[i % 4];
      g = { ...g, sceneId: sid(a.id, "sighting") };
      g = walk(g, [`part_${part}`, FIRST[part], "inquiry", "turned", "qi", "truth", "accept", "quiet", "true_account", "report"]);
    }
    expect(worldMeasure(g.flags, "voices")).toBe(40);
    expect(worldMeasure(g.flags, "weight")).toBe(10 * (PART_WEIGHT.look + PART_WEIGHT.hand + PART_WEIGHT.side + PART_WEIGHT.hinge));
    expect(worldMeasure(g.flags, "hinges")).toBe(10);
    expect(worldMeasure(g.flags, "records")).toBe(40);
    expect(worldMeasure(g.flags, "done")).toBe(40);
    expect(Object.keys(g.items).filter((k) => /^wo_.*_token$/.test(k))).toHaveLength(40);
    expect(roleOf(g.flags).id).toBe("hinge");
    expect(g.stats.karma).toBeLessThanOrEqual(100);
  });
});
