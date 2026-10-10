import { describe, expect, it } from "vitest";
import { story, chapters } from "@/story";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { conditionsHold } from "@/engine/npc";
import { MAX_SCENE_WORDS, sceneBodyWords, validateStory } from "@/engine/validate";
import { approachModes, fill } from "@/story/roads/build";
import { roadGroups, roadScenarios, waysideEntrances } from "@/story/roads";
import type { GameState, Scene } from "@/engine/types";

const roadScenes: Scene[] = roadGroups.flatMap((g) => g.scenes);
const entries = roadScenes.filter((s) => s.id.endsWith("_entry"));

/** The same game placed on a scene, with flags and stats overridden. */
function at(sceneId: string, patch: Partial<GameState> = {}): GameState {
  return { ...createGame(story), sceneId, ...patch };
}

describe("side roads", () => {
  it("adds at least 1,000 scenes across ten waysides and forty roads", () => {
    expect(roadGroups).toHaveLength(10);
    expect(entries).toHaveLength(40);
    expect(roadScenes.length).toBeGreaterThanOrEqual(1000);
    expect(Object.keys(story.scenes).length).toBeGreaterThanOrEqual(287 + 1000);
  });

  it("gives every road 25 scenes: entry, four approaches of five beats, a hidden route of three, and a return", () => {
    for (const entry of entries) {
      const id = entry.id.replace(/_entry$/, "");
      const own = roadScenes.filter((s) => s.id.startsWith(`${id}_`));
      expect(own, id).toHaveLength(25);
      expect(own.filter((s) => /_a\ds\d$/.test(s.id)), id).toHaveLength(20);
      expect(own.filter((s) => /_h\d$/.test(s.id)), id).toHaveLength(3);
      expect(story.scenes[`${id}_return`], id).toBeDefined();
    }
  });

  it("keeps every road scene within the word cap, with a heading and at least four choices", () => {
    for (const scene of roadScenes) {
      expect(sceneBodyWords(scene), scene.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
      expect(scene.title.trim().length, scene.id).toBeGreaterThan(0);
      expect(scene.choices.length, scene.id).toBeGreaterThanOrEqual(4);
    }
  });

  it("leaves no unfilled slot in any scene or scenario", () => {
    const text = JSON.stringify([roadScenes, Object.values(roadScenarios)]);
    expect(text.match(/\{\w+\}/g)).toBeNull();
    expect(fill("{Place} and {unknown}", { place: "the hall" })).toBe("The hall and {unknown}");
  });

  it("gives each scene four different tones, and each road four different approach tones", () => {
    for (const scene of roadScenes) {
      const tones = scene.choices.slice(0, 4).map((c) => c.tone);
      if (/_a\ds\d$|_h\d$/.test(scene.id)) expect(new Set(tones).size, scene.id).toBe(4);
    }
    for (let i = 0; i < 40; i++) expect(new Set(approachModes(i)).size).toBe(4);
  });

  it("does not repeat the same scene text across roads", () => {
    const bodies = roadScenes.map((s) => s.paragraphs.join(" "));
    expect(new Set(bodies).size / bodies.length).toBeGreaterThan(0.95);
  });

  it("keeps a report scenario for each road, each with five tier lines and several memories", () => {
    expect(Object.keys(roadScenarios)).toHaveLength(40);
    for (const scenario of Object.values(roadScenarios)) {
      expect(new Set(Object.values(scenario.lines)).size, scenario.id).toBe(5);
      expect(scenario.memory?.length, scenario.id).toBeGreaterThanOrEqual(5);
    }
    expect(validateStory(story)).toEqual([]);
  });

  it("groups each wayside with its chapter in reading order", () => {
    const names = chapters.map((c) => c.name);
    expect(names.indexOf("Side Roads: The Pilgrims’ Road")).toBe(names.indexOf("Chapter 1: The Stolen Seal") + 1);
    expect(Object.keys(waysideEntrances)).toHaveLength(10);
  });

  it("opens a wayside from the main line and returns to the scene it left", () => {
    let g = choose(story, createGame(story), "wayside_pilgrims");
    expect(g.sceneId).toBe("wayside_pilgrims");
    g = choose(story, g, "back_to_road");
    expect(g.sceneId).toBe("gate");
  });

  it("walks a road to its end by any approach, reports it, and closes it on the wayside", () => {
    let g = choose(story, createGame(story), "wayside_pilgrims");
    g = choose(story, g, "go_mist_orchard");
    g = choose(story, g, "approach_1");
    while (!g.sceneId.endsWith("_return")) {
      const available = getChoices(getScene(story, g.sceneId), g).filter((v) => v.available);
      g = choose(story, g, available[0].choice.id);
    }
    expect(g.sceneId).toBe("mist_orchard_return");
    g = choose(story, g, "report");
    expect(g.sceneId).toBe("wayside_pilgrims");
    expect(g.flags.road_done_mist_orchard).toBe(true);
    expect(g.history).toContain("REPORT_ROAD_MIST_ORCHARD");
    const views = getChoices(getScene(story, g.sceneId), g);
    const closed = views.find((v) => v.choice.id === "go_mist_orchard");
    expect(closed?.available).toBe(false);
    expect(closed?.hint).toBe("You have already walked this road.");
    expect(views.find((v) => v.choice.id === "go_salt_toll")?.available).toBe(true);
  });

  it("walks a road in five beats from one approach and earns cultivation on the way", () => {
    let g = choose(story, createGame(story), "wayside_pilgrims");
    g = choose(story, g, "go_salt_toll");
    g = choose(story, g, "approach_0");
    let steps = 0;
    while (!g.sceneId.endsWith("_return") && steps++ < 20) {
      g = choose(story, g, getChoices(getScene(story, g.sceneId), g).find((v) => v.available)!.choice.id);
    }
    expect(steps).toBe(5);
    expect(g.cultivation).toBeGreaterThanOrEqual(7);
  });

  it("locks the cultivator’s way until the player has the realm, and rewards it when they do", () => {
    for (const group of roadGroups) {
      const crisis = group.scenes.find((s) => /_a0s3$/.test(s.id))!;
      const draw = crisis.choices.find((c) => c.id === "draw_qi")!;
      const min = (draw.requires![0] as { min: number }).min;
      expect(min).toBeGreaterThanOrEqual(1);
      expect(draw.lockedHint).toContain(REALMS[min].name);
      expect(conditionsHold(draw.requires, at(crisis.id))).toBe(false);
      expect(conditionsHold(draw.requires, at(crisis.id, { realm: min }))).toBe(true);
    }
    const g = at("salt_toll_a0s3", { realm: 1 });
    const after = choose(story, g, "draw_qi");
    expect(after.flags.salt_toll_used_qi).toBe(true);
    expect(after.cultivation).toBeGreaterThanOrEqual(4);
  });

  it("asks for a higher realm the deeper the wayside lies", () => {
    const need = (id: string) => {
      const draw = story.scenes[`${id}_a0s3`].choices.find((c) => c.id === "draw_qi")!;
      return (draw.requires![0] as { min: number }).min;
    };
    expect(need("mist_orchard")).toBeLessThan(need("charcoal_burners"));
    expect(need("charcoal_burners")).toBeLessThan(need("vigil_hall") + 1);
  });

  it("hides the third approach’s secret route behind insight, then leads it back to the return", () => {
    const last = story.scenes["salt_toll_a2s4"];
    const hidden = last.choices.find((c) => c.id === "hidden_stair")!;
    expect(conditionsHold(hidden.requires, at(last.id))).toBe(false);
    const sharp = at(last.id, { stats: { ...createGame(story).stats, insight: 12 } });
    let g = choose(story, sharp, "hidden_stair");
    expect(g.sceneId).toBe("salt_toll_h0");
    g = choose(story, g, getChoices(getScene(story, g.sceneId), g)[0].choice.id);
    g = choose(story, g, getChoices(getScene(story, g.sceneId), g)[0].choice.id);
    g = choose(story, g, getChoices(getScene(story, g.sceneId), g)[0].choice.id);
    expect(g.sceneId).toBe("salt_toll_return");
    expect(g.flags.salt_toll_found_secret).toBe(true);
    expect(g.log.some((e) => e.kind === "narration" && e.text.startsWith("You know the truth of it now"))).toBe(true);
  });

  it("lets the Elder reply to a report from what the player found, kept and became", () => {
    const base = at("salt_toll_return");
    const plain = choose(story, base, "report").log.filter((e) => e.kind === "npc")[0].text;
    const found = choose(story, { ...base, flags: { salt_toll_found_secret: true } }, "report").log.filter((e) => e.kind === "npc")[0].text;
    const kept = choose(story, { ...base, flags: { salt_toll_kept_relic: true } }, "report").log.filter((e) => e.kind === "npc")[0].text;
    const adept = choose(story, { ...base, realm: 2 }, "report").log.filter((e) => e.kind === "npc")[0].text;
    expect(new Set([plain, found, kept, adept]).size).toBe(4);
    expect(found).toContain("proof");
    expect(kept).toContain("You kept");
    expect(adept).toContain("cultivator");
  });

  it("makes the Elder remark on how many roads the player has walked, when they come back to a wayside", () => {
    const quiet = at("wayside_terrace");
    const lines = (g: GameState) => getScene(story, "wayside_terrace").interjections!.filter((x) => conditionsHold(x.when, g));
    expect(lines(quiet)).toHaveLength(0);
    const walked: Record<string, boolean> = {};
    for (let i = 0; i < 4; i++) walked[`road_done_r${i}`] = true;
    expect(lines(at("wayside_terrace", { flags: walked }))).toHaveLength(1);
  });

  it("makes every road scene reachable from the start", () => {
    const seen = new Set<string>();
    const queue = [story.startSceneId];
    while (queue.length) {
      const id = queue.shift()!;
      if (seen.has(id)) continue;
      seen.add(id);
      for (const c of story.scenes[id].choices) queue.push(c.next);
    }
    expect(roadScenes.filter((s) => !seen.has(s.id)).map((s) => s.id)).toEqual([]);
  });
});
