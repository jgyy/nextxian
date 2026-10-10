import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { validateStory, MIN_CHOICES, MIN_NPC_SCENARIOS } from "@/engine/validate";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import type { GameState, Tier } from "@/engine/types";

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

describe("story integrity", () => {
  it("passes validation", () => {
    expect(validateStory(story)).toEqual([]);
  });

  it("gives every decision scene at least four choices", () => {
    for (const scene of Object.values(story.scenes)) {
      if (scene.ending) continue;
      expect(scene.choices.length, scene.id).toBeGreaterThanOrEqual(MIN_CHOICES);
    }
  });

  it("defines at least ten reactive NPC scenarios", () => {
    expect(Object.keys(story.scenarios).length).toBeGreaterThanOrEqual(MIN_NPC_SCENARIOS);
  });

  it("gives every NPC scenario five distinct tier lines", () => {
    for (const scenario of Object.values(story.scenarios)) {
      const lines = TIERS.map((t) => scenario.lines[t]);
      expect(new Set(lines).size, scenario.id).toBe(TIERS.length);
    }
  });
});

describe("reactive NPC", () => {
  const withNpc = (trust: number, flags: Record<string, boolean> = {}): GameState => ({
    ...createGame(story),
    npc: { trust, respect: 0, fear: 10, suspicion: 30 },
    flags,
  });

  it("answers the same scenario differently across trust tiers", () => {
    for (const scenario of Object.values(story.scenarios)) {
      const seen = new Set<string>();
      for (const trust of [-60, -20, 0, 30, 70]) {
        const after = choose(
          story,
          { ...withNpc(trust), sceneId: findSceneUsing(scenario.id) },
          findChoiceUsing(scenario.id),
        );
        const npcLine = after.log.filter((e) => e.kind === "npc").at(-1)?.text;
        expect(npcLine, scenario.id).toBeDefined();
        seen.add(npcLine as string);
      }
      expect(seen.size, `${scenario.id} should produce 5 different replies`).toBe(5);
    }
  });

  it("remembers earlier lies and changes the reply to a later honest account", () => {
    const plain = choose(story, { ...withNpc(0), sceneId: "return_hall" }, "full_truth");
    const remembered = choose(
      story,
      { ...withNpc(0, { lied_about_seal: true }), sceneId: "return_hall" },
      "full_truth",
    );
    const lineOf = (s: GameState) => s.log.filter((e) => e.kind === "npc").at(-1)?.text;
    expect(lineOf(remembered)).not.toBe(lineOf(plain));
    expect(lineOf(remembered)).toContain("lied to me once");
  });

  it("moves trust in the direction of the scenario", () => {
    const before = withNpc(0);
    const after = choose(story, { ...before, sceneId: "law_hall" }, "deny_seal");
    expect(after.npc.trust).toBeLessThan(before.npc.trust);
    expect(after.flags.lied_about_seal).toBe(true);
  });

  it("locks choices whose conditions are not met and explains why", () => {
    const scene = getScene(story, "judgment");
    const views = getChoices(scene, withNpc(0));
    const plead = views.find((v) => v.choice.id === "plead_mercy");
    expect(plead?.available).toBe(false);
    expect(plead?.hint).toMatch(/trust/);
    expect(() => choose(story, { ...withNpc(0), sceneId: "judgment" }, "plead_mercy")).toThrow(/locked/);
  });
});

describe("player choices", () => {
  it("starts at the gate with four or more options", () => {
    const game = createGame(story);
    expect(game.sceneId).toBe("gate");
    expect(getChoices(getScene(story, "gate"), game)).toHaveLength(4);
  });

  it("reaches an ending from a normal playthrough", () => {
    let game = createGame(story);
    const route = ["bow_and_state", "honest_account", "accept_mission", "spare_gu", "recover_jade", "full_truth", "plead_mercy"];
    for (const id of route) game = choose(story, game, id);
    expect(getScene(story, game.sceneId).ending).toBe("Ending: The Law Remembers Mercy");
  });

  it("rejects unknown choices", () => {
    expect(() => choose(story, createGame(story), "nope")).toThrow(/Unknown choice/);
  });
});

/** Finds a scene and choice that trigger the given NPC scenario. */
function findSceneUsing(scenarioId: string): string {
  const scene = Object.values(story.scenes).find((s) => s.choices.some((c) => c.npcScenario === scenarioId));
  if (!scene) throw new Error(`no scene uses ${scenarioId}`);
  return scene.id;
}

function findChoiceUsing(scenarioId: string): string {
  const scene = Object.values(story.scenes).find((s) => s.choices.some((c) => c.npcScenario === scenarioId));
  return scene!.choices.find((c) => c.npcScenario === scenarioId)!.id;
}
