import { describe, expect, it } from "vitest";
import { story, chapters } from "@/story";
import { validateStory, MIN_CHOICES, MIN_NPC_SCENARIOS } from "@/engine/validate";
import { choose, createGame, currentBeat, getChoices, getScene } from "@/engine/game";
import { moodFor, tierFor, tierShiftLine, TIER_SHIFT_DOWN, TIER_SHIFT_UP } from "@/engine/npc";
import type { Choice, GameState, LogEntry, Tier } from "@/engine/types";

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

/** Her reply to the player's latest choice: the first NPC line after it, before any attitude comment. */
function reactionLine(state: GameState): string | undefined {
  const lastPlayer = state.log.map((e) => e.kind).lastIndexOf("player");
  return state.log.slice(lastPlayer + 1).find((e) => e.kind === "npc")?.text;
}

/** The flags a choice needs before it can be picked. */
function flagsFor(choice: Choice): Record<string, boolean> {
  return Object.fromEntries(
    (choice.requires ?? []).filter((c) => c.kind === "flag" && (c.is ?? true)).map((c) => [(c as { flag: string }).flag, true]),
  );
}

/** Every scene id reachable from the start by following choice links, ignoring conditions. */
function reachableScenes(): Set<string> {
  const seen = new Set<string>();
  const queue = [story.startSceneId];
  while (queue.length) {
    const id = queue.shift()!;
    if (seen.has(id)) continue;
    seen.add(id);
    for (const choice of story.scenes[id].choices) queue.push(choice.next);
  }
  return seen;
}

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

  it("defines at least the required number of reactive NPC scenarios", () => {
    expect(Object.keys(story.scenarios).length).toBeGreaterThanOrEqual(MIN_NPC_SCENARIOS);
  });

  it("gives every NPC scenario five distinct tier lines", () => {
    for (const scenario of Object.values(story.scenarios)) {
      const lines = TIERS.map((t) => scenario.lines[t]);
      expect(new Set(lines).size, scenario.id).toBe(TIERS.length);
    }
  });

  it("reaches every scene from the start", () => {
    const reachable = reachableScenes();
    const unreachable = Object.keys(story.scenes).filter((id) => !reachable.has(id));
    expect(unreachable).toEqual([]);
  });

  it("lists chapters in reading order and covers every scene exactly once", () => {
    const ids = chapters.flatMap((c) => c.scenes.map((s) => s.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.sort()).toEqual(Object.keys(story.scenes).sort());
    expect(chapters).toHaveLength(13);
  });

  it("has five endings, all reachable", () => {
    const endings = Object.values(story.scenes).filter((s) => s.ending !== undefined);
    expect(endings).toHaveLength(5);
    const reachable = reachableScenes();
    for (const ending of endings) expect(reachable.has(ending.id), ending.id).toBe(true);
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
      const { sceneId, choiceId, flags } = locate(scenario.id);
      const seen = new Set<string>();
      for (const trust of [-60, -20, 0, 30, 70]) {
        const after = choose(story, { ...withNpc(trust, flags), sceneId }, choiceId);
        const npcLine = reactionLine(after);
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
    expect(reactionLine(remembered)).not.toBe(reactionLine(plain));
    expect(reactionLine(remembered)).toContain("lied to me once");
  });

  it("comments when a choice moves her to a warmer attitude", () => {
    // Trust 10 is neutral. Honest account adds 8, which reaches 18 and the warm tier.
    const after = choose(story, { ...withNpc(10), sceneId: "law_hall" }, "honest_account");
    const npc = after.log.filter((e) => e.kind === "npc");
    expect(npc).toHaveLength(2);
    expect(npc.at(-1)?.text).toBe(TIER_SHIFT_UP.warm);
  });

  it("comments when a choice cools her to a colder attitude", () => {
    // Trust 20 is warm. Threatening her subtracts 12, which leaves 8 and the neutral tier.
    const after = choose(story, { ...withNpc(20), sceneId: "law_hall" }, "threaten_expose");
    expect(after.log.filter((e) => e.kind === "npc").at(-1)?.text).toBe(TIER_SHIFT_DOWN.neutral);
  });

  it("stays quiet about her attitude when the tier does not change", () => {
    // Trust 0 to 8 stays neutral, so she gives only her scenario reply.
    const after = choose(story, { ...withNpc(0), sceneId: "law_hall" }, "honest_account");
    expect(after.log.filter((e) => e.kind === "npc")).toHaveLength(1);
  });

  it("has a distinct, non-empty attitude line for every tier she can move into", () => {
    const lines = [...Object.values(TIER_SHIFT_UP), ...Object.values(TIER_SHIFT_DOWN)] as string[];
    expect(lines.every((l) => l.trim().length > 0)).toBe(true);
    expect(new Set(lines).size).toBe(lines.length);
    expect(tierShiftLine("neutral", "neutral")).toBeUndefined();
  });

  it("notices two lies and says so when the player reaches the painted name", () => {
    const state: GameState = {
      ...withNpc(0, { lied_about_seal: true, lied_to_eye: true }),
      sceneId: "jade_eye_return",
    };
    const after = choose(story, state, "kneel_at_tablets");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("Two lies"))).toBe(true);
  });

  it("remarks on lamp oil on the player's sleeve when the jade-eye scene opens", () => {
    const state: GameState = { ...withNpc(0, { pocketed_wick: true }), sceneId: "sutra_hall" };
    const after = choose(story, state, "speak_to_jade_eye");
    expect(after.log.some((e) => e.kind === "npc" && e.text.includes("lamp oil"))).toBe(true);
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

  it("lets the NPC speak unprompted when her suspicion crosses a threshold", () => {
    const suspicious: GameState = {
      ...withNpc(0),
      sceneId: "judgment",
      npc: { trust: 0, respect: 0, fear: 0, suspicion: 80 },
    };
    const entered = choose(story, { ...suspicious, sceneId: "sealing_return" }, "follow_elder_to_judgment");
    const interjected = entered.log.filter((e) => e.kind === "npc" && e.text.includes("watching my hands"));
    expect(interjected).toHaveLength(1);
    expect(interjected[0].speaker).toBe(story.npc.name);
  });

  it("gives a different mood when she is afraid than when she is only angry", () => {
    expect(moodFor({ trust: 60, respect: 0, fear: 60, suspicion: 0 })).toBe("afraid");
    expect(moodFor({ trust: -60, respect: 0, fear: 0, suspicion: 0 })).toBe("furious");
    expect(moodFor({ trust: 60, respect: 0, fear: 0, suspicion: 0 })).toBe("tender");
    expect(tierFor(60)).toBe("devoted");
  });
});

describe("player choices", () => {
  it("starts at the gate with four or more options", () => {
    const game = createGame(story);
    expect(game.sceneId).toBe("gate");
    expect(getChoices(getScene(story, "gate"), game)).toHaveLength(4);
  });

  it("reaches the Sisters' Dao ending through the sealing choice", () => {
    let game = createGame(story);
    const route = [
      "bow_and_state", "honest_account", "accept_mission", "spare_gu", "recover_jade",
      "full_truth", "go_front", "search_quietly", "to_the_index", "report_index_entry",
      "report_letter", "sleep_on", "go_at_bell", "turn_key_again", "copy_all_bands",
      "go_down_right", "touch_central_bell", "read_the_sutra", "resist_the_voice",
      "tell_elder_sister", "offer_mengjiao_hand", "tell_of_mengjiao", "press_for_sealing_night",
      "accept_confession", "praise_her_courage", "greet_gu", "kneel_with_gu", "testify_for_gu",
      "let_bell_decide", "trust_elder_verdict", "trust_lantern", "walk_to_ledge",
      "ask_how_she_keeps_seal", "promise_message", "carry_names_in", "read_all_fifteen",
      "let_masters_go", "take_original_order", "step_into_the_ring", "elder_refuses",
      "stay_back_path", "cut_chains", "follow_elder_to_judgment", "bring_sister",
    ];
    for (const id of route) game = choose(story, game, id);
    expect(getScene(story, game.sceneId).ending).toBe("Ending: The Sisters’ Dao");
    expect(game.flags.freed_mengjiao).toBe(true);
  });

  it("locks the Sisters’ Dao ending unless Mengjiao was freed", () => {
    const judgment = getChoices(getScene(story, "judgment"), { ...createGame(story), sceneId: "judgment" });
    expect(judgment.find((v) => v.choice.id === "bring_sister")?.available).toBe(false);
  });

  it("rejects unknown choices", () => {
    expect(() => choose(story, createGame(story), "nope")).toThrow(/Unknown choice/);
  });
});

describe("side paths", () => {
  it("opens the herb market from the Elder's mission and rejoins the abyss with the rumour", () => {
    let game: GameState = { ...createGame(story), sceneId: "mission", npc: { trust: 0, respect: 0, fear: 10, suspicion: 30 } };
    const route = ["prepare_at_market", "buy_frostleaf", "ask_about_elder_sister", "keep_rumor_close", "report_rumor_to_jade_eye"];
    for (const id of route) game = choose(story, game, id);
    expect(game.sceneId).toBe("abyss_entry");
    expect(game.flags.accepted_mission).toBe(true);
    expect(game.npc.trust).toBe(-3);
    expect(reactionLine(game)).toBe(
      story.scenarios.REPORT_RUMOR.lines[tierFor(0)],
    );
  });

  it("keeps the rumour report locked until the player has heard something in the lane", () => {
    const views = getChoices(getScene(story, "market_return"), createGame(story));
    const report = views.find((v) => v.choice.id === "report_rumor_to_jade_eye");
    expect(report?.available).toBe(false);
    expect(report?.hint).toMatch(/lane/);
  });

  it("opens the lantern stair from Gu's cell and returns to the sutra hall with the names", () => {
    const route = ["follow_lantern_keeper", "take_lantern", "ask_about_mengjiao_lamp", "read_names_on_wall", "carry_names_back"];
    let game: GameState = { ...createGame(story), sceneId: "sutra_gu_cell" };
    for (const id of route) game = choose(story, game, id);
    expect(game.sceneId).toBe("sutra_hall");
    expect(game.flags.read_lamp_names).toBe(true);
    expect(game.flags.entered_lantern_stair).toBe(true);
  });

  it("lets the Elder hear about the lamps only after the player has been down the stair", () => {
    const base = { ...createGame(story), sceneId: "sutra_jade_eye" };
    const locked = getChoices(getScene(story, "sutra_jade_eye"), base).find(
      (v) => v.choice.id === "tell_elder_about_lamps",
    );
    expect(locked?.available).toBe(false);

    const after = choose(story, { ...base, flags: { entered_lantern_stair: true } }, "tell_elder_about_lamps");
    expect(after.npc.trust).toBe(3);
    expect(after.npc.suspicion).toBe(28);
  });
});

describe("visual novel stage", () => {
  const entry = (kind: LogEntry["kind"], text: string): LogEntry => ({ kind, text });

  it("shows the whole log before any choice has been made", () => {
    const log = [entry("heading", "A"), entry("narration", "one")];
    expect(currentBeat(log)).toEqual(log);
  });

  it("hides earlier scenes once the player has chosen", () => {
    const log = [
      entry("heading", "Old scene"),
      entry("narration", "old text"),
      entry("player", "the choice"),
      entry("npc", "her reply"),
      entry("heading", "New scene"),
      entry("narration", "new text"),
    ];
    expect(currentBeat(log).map((e) => e.text)).toEqual(["the choice", "her reply", "New scene", "new text"]);
  });

  it("keeps the full log in the game state for the backlog", () => {
    const after = choose(story, createGame(story), "bow_and_state");
    const headings = after.log.filter((e) => e.kind === "heading").map((e) => e.text);
    expect(headings).toContain("Chapter One: The Stolen Seal");
    expect(currentBeat(after.log)[0].kind).toBe("player");
  });
});

/** Finds the first scene and choice that trigger the given NPC scenario, with the flags that choice needs. */
function locate(scenarioId: string): { sceneId: string; choiceId: string; flags: Record<string, boolean> } {
  const scene = Object.values(story.scenes).find((s) => s.choices.some((c) => c.npcScenario === scenarioId));
  if (!scene) throw new Error(`no scene uses ${scenarioId}`);
  const choice = scene.choices.find((c) => c.npcScenario === scenarioId)!;
  return { sceneId: scene.id, choiceId: choice.id, flags: flagsFor(choice) };
}
