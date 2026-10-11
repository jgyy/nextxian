import { describe, expect, it } from "vitest";
import { story, chapters } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { ATTIRES, BACKGROUNDS, DEFAULT_HERO, GENDERS, LOOKS, STATUSES, standingOf, type Hero } from "@/engine/hero";
import { sceneBodyWords, MAX_SCENE_WORDS, validateStory } from "@/engine/validate";
import { rankNeeded } from "@/story/roads2/build";
import { realmEntrances, realmRoadGroups, realmRoadScenarios, WAYSIDES2 } from "@/story/roads2";
import { roadsRiver } from "@/story/roads2/specs-1";
import { roadsCoastSteppe } from "@/story/roads2/specs-2";
import { roadsHills } from "@/story/roads2/specs-3";
import { roadsGlass } from "@/story/roads2/specs-4";
import { roadsStair } from "@/story/roads2/specs-5";
import { focusKind, fits, parseFit, pickFit } from "@/story/roads/kinds";
import { ALLIES, APPROACH_LABEL, CHOICE_LABEL, OBSTACLES, RETURN_APPROACH, STAGE_OPEN } from "@/story/roads/lexicon";
import { APPROACH_LABEL2, CHOICE_LABEL2, RETURN_APPROACH2 } from "@/story/roads2/lexicon";
import type { GameState, Scene } from "@/engine/types";

const specs = [...roadsRiver, ...roadsCoastSteppe, ...roadsHills, ...roadsGlass, ...roadsStair];
const scenes: Scene[] = realmRoadGroups.flatMap((g) => g.scenes);
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const at = (sceneId: string, patch: Partial<GameState> = {}, h: Hero = DEFAULT_HERO): GameState => ({ ...createGame(story, h), sceneId, ...patch });
const read = (h: Hero, id: string, realm: number) => enterScene(story, { ...createGame(story, h), realm, log: [] }, getScene(story, id)).log.map((e) => e.text).join("\n");

describe("the realm roads", () => {
  it("add more than a thousand scenes: ten waysides, forty roads of twenty-five scenes, and the hubs and ways back", () => {
    expect(WAYSIDES2).toHaveLength(10);
    expect(realmRoadGroups).toHaveLength(10);
    expect(specs).toHaveLength(40);
    const roadScenes = scenes.filter((s) => !s.id.startsWith("wayside_"));
    expect(roadScenes).toHaveLength(1000);
    const added = scenes.length + realmRoadGroups.length; // plus a way back from each wayside
    expect(added).toBeGreaterThanOrEqual(1000);
    expect(chapters.filter((c) => c.name.startsWith("Realm Roads:"))).toHaveLength(10);
  });

  it("gives every road an entry, four approaches of five scenes, three hidden scenes and a way back", () => {
    for (const spec of specs) {
      const own = scenes.filter((s) => s.id.startsWith(`${spec.id}_`));
      expect(own, spec.id).toHaveLength(25);
      expect(own.filter((s) => /_a\ds\d$/.test(s.id)), spec.id).toHaveLength(20);
      expect(own.filter((s) => /_h\d$/.test(s.id)), spec.id).toHaveLength(3);
      expect(story.scenes[`${spec.id}_entry`], spec.id).toBeDefined();
      expect(story.scenes[`${spec.id}_return`], spec.id).toBeDefined();
    }
  });

  it("opens each wayside from a hub of the later books, and returns to a scene of its own", () => {
    expect(Object.keys(realmEntrances).sort()).toEqual(WAYSIDES2.map((w) => w.origin).sort());
    for (const w of WAYSIDES2) {
      const hub = story.scenes[w.origin];
      expect(hub.choices.some((c) => c.next === w.id), w.origin).toBe(true);
      const back = story.scenes[`back_${w.origin}`];
      expect(back, w.origin).toBeDefined();
      expect(back.choices.some((c) => c.next === w.id), `${back.id} can open the wayside again`).toBe(true);
      expect(story.scenes[w.id].choices.some((c) => c.next === back.id)).toBe(true);
    }
  });

  it("asks a realm of every wayside, rising with the books", () => {
    const realms = WAYSIDES2.map((w) => w.realm);
    expect(realms).toEqual([...realms].sort((a, b) => a - b));
    expect(realms[0]).toBeGreaterThanOrEqual(2);
    expect(realms.at(-1)).toBeGreaterThanOrEqual(6);
  });

  it("keeps every scene within the word cap, with a heading and four choices, and leaves no slot unfilled", () => {
    for (const s of scenes) {
      expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(s.title.trim().length, s.id).toBeGreaterThan(0);
      expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
    }
    expect(JSON.stringify([scenes, Object.values(realmRoadScenarios)]).match(/\{\w+\}/g)).toBeNull();
    expect(validateStory(story)).toEqual([]);
  });

  it("writes each road in its own words: no two roads share a situation, and the keepers are all different", () => {
    const beats = specs.flatMap((s) => [...s.beats.flat(), ...s.deep, s.close, s.intro]);
    expect(new Set(beats).size).toBe(beats.length);
    const names = specs.map((s) => s.kname);
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(specs.map((s) => s.id)).size).toBe(specs.length);
  });

  it("gives no keeper the name of someone already in the story", () => {
    // Everything the player can read outside the realm roads, and the people they travel with.
    const mine = new Set([...scenes.map((s) => s.id), ...Object.keys(realmRoadScenarios)]);
    const text = [
      ...Object.values(story.scenes).filter((s) => !mine.has(s.id)).flatMap((s) => [...s.paragraphs, ...(s.extras ?? []).flatMap((x) => x.paragraphs), ...s.choices.map((c) => c.label), ...(s.interjections ?? []).map((i) => i.line)]),
      ...Object.values(story.scenarios).filter((sc) => !mine.has(sc.id)).flatMap((sc) => [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]),
      ...(story.remarks ?? []).map((r) => r.line),
    ].join("\n");
    const companions = new Set(Object.values(story.companions ?? {}).flatMap((c) => c.name.split(" ")));
    const clashes: string[] = [];
    for (const spec of specs) {
      const tokens = spec.kname.split(" ");
      if (text.includes(spec.kname)) clashes.push(`${spec.kname} is already somebody’s name`);
      for (const t of tokens) if (companions.has(t)) clashes.push(`${spec.kname}: “${t}” is a companion’s name`);
      // A shared surname is fine. A given name somebody else already answers to is not.
      const given = tokens.at(-1)!;
      if (new RegExp(`\\b${given}\\b`).test(text)) clashes.push(`${spec.kname}: “${given}” already names someone in the story`);
    }
    expect(clashes).toEqual([]);
  });

  it("has an Elder’s report for every road, with a line for each attitude and memories for what the hero did and how far they stood above or below the road", () => {
    expect(Object.keys(realmRoadScenarios)).toHaveLength(40);
    for (const sc of Object.values(realmRoadScenarios)) {
      expect(new Set(Object.values(sc.lines)).size, sc.id).toBe(5);
      expect(sc.memory!.length, sc.id).toBeGreaterThanOrEqual(6);
      expect(sc.memory!.some((m) => m.when.some((c) => c.kind === "flag" && c.flag.endsWith("_humbled"))), sc.id).toBe(true);
      expect(sc.memory!.some((m) => m.when.some((c) => c.kind === "flag" && c.flag.endsWith("_pulled_rank"))), sc.id).toBe(true);
      expect(sc.memory!.some((m) => m.when.some((c) => c.kind === "realm" && (c.min ?? 0) > 0)), sc.id).toBe(true);
    }
    const lines = Object.values(realmRoadScenarios).flatMap((s) => Object.values(s.lines));
    expect(new Set(lines).size, "no report line is repeated word for word").toBe(lines.length);
  });
});

describe("the realm matters on a realm road", () => {
  const road = specs[0];
  const R = WAYSIDES2[0].realm;
  const entry = (realm: number, h: Hero = DEFAULT_HERO) => getChoices(getScene(story, `${road.id}_entry`), at(`${road.id}_entry`, { realm }, h));

  it("bars the deep approach below the road’s realm, and lets a lesser cultivator try the third at a cost", () => {
    const below = entry(R - 1);
    expect(below.find((v) => v.choice.id === "approach_3")?.available).toBe(false);
    expect(below.find((v) => v.choice.id === "approach_3")?.hint).toContain(REALMS[R].name);
    expect(below.find((v) => v.choice.id === "approach_2")?.strain).toEqual({ needs: R, gap: 1 });
    expect(entry(R).find((v) => v.choice.id === "approach_3")?.available).toBe(true);
    expect(entry(R).find((v) => v.choice.id === "approach_2")?.strain).toBeUndefined();
  });

  it("offers a lesser way only to someone below the realm, and makes them pay for pushing on", () => {
    expect(entry(R - 1).find((v) => v.choice.id === "humble")?.available).toBe(true);
    expect(entry(R).find((v) => v.choice.id === "humble")?.available).toBe(false);
    const state = at(`${road.id}_entry`, { realm: R - 1, cultivation: REALMS[R - 1].threshold + 30 });
    const after = choose(story, state, "approach_2");
    expect(after.log.some((e) => e.kind === "strain")).toBe(true);
    expect(after.cultivation).toBeLessThan(state.cultivation + 5);
    expect(after.stats.qi).toBeLessThan(state.stats.qi);
  });

  it("opens the cultivator’s way and rewards a reach above the road’s realm, easily so for someone far above it", () => {
    const crisis = `${road.id}_a0s3`;
    const choices = (realm: number) => getChoices(getScene(story, crisis), at(crisis, { realm }));
    expect(choices(R - 1).find((v) => v.choice.id === "draw_qi")?.available).toBe(false);
    expect(choices(R).find((v) => v.choice.id === "draw_qi")?.available).toBe(true);
    expect(choices(R).find((v) => v.choice.id === "reach")?.strain?.gap).toBe(1);
    const far = at(crisis, { realm: R + 3, cultivation: REALMS[R + 3].threshold });
    const gained = choose(story, far, "reach");
    expect(gained.cultivation - far.cultivation).toBeGreaterThan(6 + R * 2); // the reward and the mastery
    expect(gained.log.some((e) => e.kind === "strain")).toBe(false);
  });

  it("lets birth and dress open a door only for a hero whose standing is high enough, and realm raises standing past any birth", () => {
    const scene = `${road.id}_a0s1`;
    const need = rankNeeded(R);
    const rank = (h: Hero, realm: number) => getChoices(getScene(story, scene), at(scene, { realm }, h)).find((v) => v.choice.id === "rank")!;
    const noble = hero({ status: "noble", attire: "silk" });
    const outcast = hero({ status: "outcast", attire: "rags" });
    expect(standingOf(noble, R)).toBeGreaterThanOrEqual(need);
    expect(standingOf(outcast, R)).toBeLessThan(need);
    expect(rank(noble, R).available).toBe(true);
    expect(rank(outcast, R).available).toBe(false);
    expect(rank(outcast, R + 2).available).toBe(true);
    expect(rank(outcast, R).hint).toContain(String(need));
  });
});

describe("the people of a realm road react to who the hero is", () => {
  const road = specs[3];
  const R = WAYSIDES2[0].realm;
  const entry = `${road.id}_entry`;

  it("says something different to each dress, each birth and each realm at the entry", () => {
    const texts = (patches: Partial<Hero>[], realm = R) => patches.map((p) => read(hero(p), entry, realm));
    for (const set of [ATTIRES.map((a) => ({ attire: a.value })), STATUSES.map((s) => ({ status: s.value }))]) {
      const t = texts(set);
      expect(new Set(t).size, JSON.stringify(set)).toBe(t.length);
    }
    const byRealm = [R - 2, R - 1, R, R + 1].map((r) => read(hero(), entry, r));
    expect(new Set(byRealm).size).toBe(4);
  });

  it("reads the hero’s trade and face at the first beat, and manner in the second", () => {
    const trade = BACKGROUNDS.map((b) => read(hero({ background: b.value }), `${road.id}_a0s1`, R));
    const face = LOOKS.map((l) => read(hero({ looks: l.value }), `${road.id}_a0s1`, R));
    const manner = GENDERS.map((g) => read(hero({ gender: g.value }), `${road.id}_a0s2`, R));
    for (const t of [trade, face, manner]) expect(new Set(t).size).toBe(t.length);
  });

  it("covers every value for every road, so no hero meets a gap", () => {
    for (const spec of specs) {
      const covers = (id: string, field: string, value: string) => (story.scenes[id].extras ?? []).some((x) => x.when.some((c) => c.kind === "hero" && c.field === field && c.is?.includes(value)));
      for (const a of ATTIRES) expect(covers(`${spec.id}_entry`, "attire", a.value), `${spec.id} ${a.value}`).toBe(true);
      for (const s of STATUSES) expect(covers(`${spec.id}_entry`, "status", s.value), `${spec.id} ${s.value}`).toBe(true);
      for (const b of BACKGROUNDS) expect(covers(`${spec.id}_a1s1`, "background", b.value), `${spec.id} ${b.value}`).toBe(true);
      for (const l of LOOKS) expect(covers(`${spec.id}_a1s1`, "looks", l.value), `${spec.id} ${l.value}`).toBe(true);
      for (const g of GENDERS) expect(covers(`${spec.id}_a1s2`, "gender", g.value), `${spec.id} ${g.value}`).toBe(true);
      for (const a of ATTIRES) expect(covers(`${spec.id}_a2s4`, "attire", a.value), `${spec.id} send-off ${a.value}`).toBe(true);
    }
  });
});

describe("wording that fits what a road names", () => {
  const kinds = ["place", "thing", "person"] as const;

  it("sorts what a road names into a place, a thing or a person", () => {
    expect(focusKind("the pickers’ shed")).toBe("place");
    expect(focusKind("the orchard ledger")).toBe("thing");
    expect(focusKind("the boy who refills the lamps")).toBe("person");
    expect(focusKind("the ledger cage")).toBe("place");
    expect(focusKind("the stone ring in the grass")).toBe("place");
    expect(focusKind("the wall where names are scratched")).toBe("thing");
  });

  it("reads the tags at the head of a template, and treats wording that names no focus as fitting everything", () => {
    expect(parseFit("[pw] Go to {focus}.").text).toBe("Go to {focus}.");
    expect(fits("[p] Break into {focus}.", "thing")).toBe(false);
    expect(fits("[t] Slip a piece of {focus} away.", "thing")).toBe(true);
    expect(fits("Tell {kname} the truth.", "person")).toBe(true);
    expect(fits("Study {focus}.", "person")).toBe(false);
  });

  it("has wording for every kind of focus in every pool a road draws on, so a pick never has to settle for a bad fit", () => {
    const pools: Record<string, readonly string[]>[] = [APPROACH_LABEL, CHOICE_LABEL, RETURN_APPROACH, APPROACH_LABEL2, CHOICE_LABEL2, RETURN_APPROACH2];
    for (const pool of pools) {
      for (const [tone, list] of Object.entries(pool)) for (const kind of kinds) expect(list.some((t) => fits(t, kind)), `${tone} ${kind}`).toBe(true);
    }
    for (const stage of STAGE_OPEN.slice(0, 2)) for (const kind of kinds) expect(stage.some((t) => fits(t, kind)), `stage ${kind}`).toBe(true);
    expect(() => pickFit(["[p] Only places {focus}."], 0, "the orchard ledger")).toThrow();
  });

  it("never gives a person the wording for a place, or a thing the wording for a person", () => {
    const labels: string[] = [];
    for (const g of realmRoadGroups) for (const s of g.scenes) for (const c of s.choices) labels.push(c.label);
    const bad = /(Break your way into|March up to|Stand in the doorway of|Walk the edge of) (the dun mare|the boy who)/;
    expect(labels.filter((l) => bad.test(l))).toEqual([]);
    expect(labels.filter((l) => /Slip a small piece of the (dun mare|boy)/.test(l))).toEqual([]);
  });

  it("draws a label’s obstacle and ally from the pools of the label’s own tone", () => {
    for (const tone of Object.keys(OBSTACLES)) {
      expect(OBSTACLES[tone as keyof typeof OBSTACLES].length).toBeGreaterThan(0);
      expect(ALLIES[tone as keyof typeof ALLIES].length).toBeGreaterThan(0);
    }
    // “Trace {obstacle} back to whoever put it there” is a quiet thing to do to a barrier, not to a sick child on the step.
    const traces = Object.values(story.scenes).flatMap((s) => s.choices.map((c) => c.label)).filter((l) => l.startsWith("Trace "));
    expect(traces.length).toBeGreaterThan(0);
    for (const l of traces) expect(l).not.toMatch(/Trace (a sick child|a woman who|an old man|a dog|a crowd|a row of unlit|a sleeping dog|a lamp that|a long wait|a slope|a courtyard|a stretch of path|a clerk|a guard|a man who|a council|a village elder|a sworn witness|a watchman)/);
  });
});

describe("a hero plays through a realm road", () => {
  it("walks from the wayside, down an approach and back, whatever they are", () => {
    const w = WAYSIDES2[0];
    const spec = specs[0];
    for (const h of [hero({ status: "noble", attire: "silk", gender: "woman" }), hero({ status: "outcast", attire: "rags", gender: "man", looks: "frail" })]) {
      let state = at(w.id, { realm: w.realm, bonds: { duan: 0 } }, h);
      state = choose(story, state, `go_${spec.id}`);
      expect(state.sceneId).toBe(`${spec.id}_entry`);
      state = choose(story, state, "approach_0");
      for (let stage = 0; stage < 5; stage++) {
        const options = getChoices(getScene(story, state.sceneId), state).filter((v) => v.available && !v.strain);
        state = choose(story, state, (options.find((v) => v.choice.tone === "mercy") ?? options[0]).choice.id);
      }
      expect(state.sceneId).toBe(`${spec.id}_return`);
      state = choose(story, state, "report");
      expect(state.sceneId).toBe(w.id);
      expect(state.flags[`rr_done_w1_${spec.id}`]).toBe(true);
      expect(state.history).toContain(`REPORT_ROAD_${spec.id.toUpperCase()}`);
    }
  });
});
