import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { story, chapters } from "@/story";
import { validateStory, MAX_LINE_WORDS, MAX_SCENE_WORDS, MIN_CHOICES, MIN_NPC_SCENARIOS, sceneBodyWords } from "@/engine/validate";
import { choose, createGame, currentBeat, getChoices, getScene, isPassage } from "@/engine/game";
import {
  conditionsHold,
  mannerOf,
  mannerShiftLine,
  MANNER_SHIFT,
  moodFor,
  moodShiftLine,
  MOOD_SHIFT,
  reactToScenario,
  tierFor,
  tierShiftLine,
  TIER_SHIFT_DOWN,
  TIER_SHIFT_UP,
} from "@/engine/npc";
import { restoreGame } from "@/engine/save";
import { countWords } from "@/engine/words";
import { CHOICE_TONES, isTone, TONE_INFO } from "@/engine/tone";
import type { Choice, ChoiceTone, Condition, GameState, LogEntry, Mood, NpcState, PlayerStats, Scene, Tier } from "@/engine/types";

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

/** Every page of a scene in reading order, from its first page to the page that holds its decisions. */
function pagesOf(sceneId: string): string[] {
  const ids = [sceneId];
  let scene = getScene(story, sceneId);
  while (isPassage(scene)) {
    scene = getScene(story, scene.choices[0].next);
    ids.push(scene.id);
  }
  return ids;
}

/** The page of a scene that holds its decisions. A scene with no page turns is its own decision page. */
function decisionPage(sceneId: string): Scene {
  return getScene(story, pagesOf(sceneId).at(-1)!);
}

/** The same state, placed on the decision page of a scene. */
function deciding(sceneId: string, state: GameState): GameState {
  return { ...state, sceneId: decisionPage(sceneId).id };
}

/** Makes a decision, then reads on through any continuation pages, as a reader would. */
function pick(state: GameState, choiceId: string): GameState {
  let next = choose(story, state, choiceId);
  while (isPassage(getScene(story, next.sceneId))) next = choose(story, next, "continue");
  return next;
}

/** A new game placed on a scene's decision page, with extra state applied. */
function at(sceneId: string, extra: Partial<GameState> = {}): GameState {
  return deciding(sceneId, { ...createGame(story), ...extra });
}

describe("story integrity", () => {
  it("passes validation", () => {
    expect(validateStory(story)).toEqual([]);
  });

  it("gives every decision scene at least four choices", () => {
    for (const scene of Object.values(story.scenes)) {
      if (scene.ending || isPassage(scene)) continue;
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
    expect(chapters).toHaveLength(18);
  });

  it("has five endings, all reachable", () => {
    const endings = Object.values(story.scenes).filter((s) => s.ending !== undefined);
    expect(endings).toHaveLength(5);
    const reachable = reachableScenes();
    for (const ending of endings) expect(reachable.has(ending.id), ending.id).toBe(true);
  });
});

describe("choice tones", () => {
  it("gives every decision one of the six tones, and gives no tone to a page turn", () => {
    for (const scene of Object.values(story.scenes)) {
      for (const choice of scene.choices) {
        if (choice.page) {
          expect(choice.tone, `${scene.id}/${choice.id}`).toBeUndefined();
        } else {
          expect(isTone(choice.tone), `${scene.id}/${choice.id}`).toBe(true);
        }
      }
    }
  });

  it("names six tones, each with a name and a meaning for the legend", () => {
    expect(CHOICE_TONES).toHaveLength(6);
    for (const tone of CHOICE_TONES) {
      expect(TONE_INFO[tone].name.length, tone).toBeGreaterThan(0);
      expect(TONE_INFO[tone].meaning.length, tone).toBeGreaterThan(0);
    }
  });

  it("records the tone of each decision, and a page turn is not a decision", () => {
    const before = { ...createGame(story), sceneId: "descent_return" };
    const paged = choose(story, before, "continue");
    expect(paged.tones).toEqual([]);
    expect(paged.log.some((e) => e.kind === "player")).toBe(false);

    const decided = choose(story, deciding("law_hall", createGame(story)), "honest_account");
    expect(decided.tones).toEqual(["truth"]);
  });

  it("refuses a decision that has no tone", () => {
    const state = at("gate");
    const gate = story.scenes.gate;
    const untoned: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: { ...gate, choices: gate.choices.map((c) => (c.id === "bow_and_state" ? { ...c, tone: undefined } : c)) },
      },
    };
    expect(() => choose(untoned, state, "bow_and_state")).toThrow(/has no tone/);
  });

  it("counts tones with `tone` conditions, and `within` looks only at the latest decisions", () => {
    const state: GameState = { ...createGame(story), tones: ["deceit", "truth", "deceit"] };
    const tone = (c: Omit<Extract<Condition, { kind: "tone" }>, "kind">): Condition => ({ kind: "tone", ...c });
    expect(conditionsHold([tone({ tone: "deceit", min: 2 })], state)).toBe(true);
    expect(conditionsHold([tone({ tone: "deceit", min: 2, within: 2 })], state)).toBe(false);
    expect(conditionsHold([tone({ tone: "truth", within: 1 })], state)).toBe(false);
  });
});

describe("colour legend", () => {
  const css = readFileSync(path.resolve(process.cwd(), "app/globals.css"), "utf8");

  it("gives every tone its own colour token, in both themes", () => {
    const light = css.slice(css.indexOf("@media (prefers-color-scheme: light)"));
    for (const tone of CHOICE_TONES) {
      expect(css, tone).toContain(`--tone-${tone}:`);
      expect(light, tone).toContain(`--tone-${tone}:`);
      expect(css, tone).toContain(`[data-tone="${tone}"]`);
    }
  });

  it("gives the six tones six different colours in the dark theme", () => {
    const values = CHOICE_TONES.map((tone) => css.match(new RegExp(`--tone-${tone}: (#[0-9a-f]{6});`))?.[1]);
    expect(values.every(Boolean)).toBe(true);
    expect(new Set(values).size).toBe(CHOICE_TONES.length);
  });
});

describe("the manner she notices", () => {
  it("reads a manner once three of the last four decisions share a tone", () => {
    expect(mannerOf(["truth", "deceit", "deceit"])).toBeUndefined();
    expect(mannerOf(["deceit", "deceit", "deceit"])).toBe("deceit");
    expect(mannerOf(["quiet", "force", "force", "force"])).toBe("force");
    expect(mannerOf(["deceit", "deceit", "deceit", "force", "force"])).toBeUndefined();
  });

  it("names a new manner once, and does not repeat it while the manner holds", () => {
    expect(mannerShiftLine(["deceit", "deceit"], ["deceit", "deceit", "deceit"])).toBe(MANNER_SHIFT.deceit);
    expect(mannerShiftLine(["deceit", "deceit", "deceit"], ["deceit", "deceit", "deceit", "deceit"])).toBeUndefined();
    expect(mannerShiftLine(["truth"], ["truth", "truth"])).toBeUndefined();
  });

  it("speaks the manner in her reply when the player's choices settle on a tone", () => {
    // Side gate is a deceit with no attitude effect, so the manner line is the only comment.
    const state: GameState = { ...at("gate"), tones: ["deceit", "deceit"] };
    const after = choose(story, state, "side_gate");
    expect(after.log.some((e) => e.kind === "npc" && e.text === MANNER_SHIFT.deceit)).toBe(true);
  });

  it("has a distinct, non-empty line for every manner", () => {
    const lines = CHOICE_TONES.map((t) => MANNER_SHIFT[t]);
    expect(lines.every((l) => l.trim().length > 0)).toBe(true);
    expect(new Set(lines).size).toBe(CHOICE_TONES.length);
  });
});

describe("pages of a long scene", () => {
  it("reads a continuation page without a heading, and the page turn is not logged", () => {
    const start = { ...createGame(story), sceneId: "descent_return" };
    const paged = choose(story, start, "continue");
    const headings = (s: GameState) => s.log.filter((e) => e.kind === "heading");
    expect(paged.sceneId).toBe("descent_return_2");
    expect(headings(paged)).toEqual(headings(start));
    expect(paged.log.length).toBeGreaterThan(start.log.length);
    expect(paged.log.slice(start.log.length).every((e) => e.kind === "narration" || e.kind === "npc")).toBe(true);
  });

  it("keeps every scene body within the 200-word cap, extras and interjections included", () => {
    for (const scene of Object.values(story.scenes)) {
      expect(sceneBodyWords(scene), scene.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
  });

  it("exempts a passage from the four-option rule, and recognises it", () => {
    expect(isPassage(getScene(story, "descent_return"))).toBe(true);
    expect(isPassage(getScene(story, "gate"))).toBe(false);
  });
});

describe("reactive NPC", () => {
  const withNpc = (trust: number, flags: Record<string, boolean> = {}): GameState => ({
    ...createGame(story),
    npc: { trust, respect: 0, fear: 10, suspicion: 30 },
    flags,
  });

  it("answers the same scenario differently across the trust tiers its choice can reach", () => {
    for (const scenario of Object.values(story.scenarios)) {
      const { sceneId, choiceId, flags, stats, npc } = locate(scenario.id);
      const reached = new Set<Tier>();
      const replies = new Set<string>();
      for (const trust of [-60, -20, 0, 30, 70]) {
        const base = withNpc(trust, flags);
        const state: GameState = { ...base, sceneId, stats: { ...base.stats, ...stats }, npc: { ...base.npc, ...npc, trust } };
        const view = getChoices(getScene(story, sceneId), state).find((v) => v.choice.id === choiceId);
        if (!view?.available) continue; // a choice with a trust requirement is closed to the colder tiers
        reached.add(tierFor(trust));
        replies.add(reactionLine(choose(story, state, choiceId)) as string);
      }
      expect(reached.size, scenario.id).toBeGreaterThanOrEqual(2);
      expect(replies.size, `${scenario.id} should give one reply per tier it reaches`).toBe(reached.size);
    }
  });

  it("remembers earlier lies and changes the reply to a later honest account", () => {
    const plain = choose(story, deciding("return_hall", withNpc(0)), "full_truth");
    const remembered = choose(story, deciding("return_hall", withNpc(0, { lied_about_seal: true })), "full_truth");
    expect(reactionLine(remembered)).not.toBe(reactionLine(plain));
    expect(reactionLine(remembered)).toContain("lied to me once");
  });

  it("comments when a choice moves her to a warmer attitude", () => {
    // Trust 10 is neutral. Honest account adds 8, which reaches 18 and the warm tier.
    const after = choose(story, deciding("law_hall", withNpc(10)), "honest_account");
    const npc = after.log.filter((e) => e.kind === "npc");
    expect(npc).toHaveLength(2);
    expect(npc.at(-1)?.text).toBe(TIER_SHIFT_UP.warm);
  });

  it("comments when a choice cools her to a colder attitude", () => {
    // Trust 20 is warm. Threatening her subtracts 12, which leaves 8 and the neutral tier.
    const after = choose(story, deciding("law_hall", withNpc(20)), "threaten_expose");
    expect(after.log.filter((e) => e.kind === "npc").at(-1)?.text).toBe(TIER_SHIFT_DOWN.neutral);
  });

  it("stays quiet about her attitude when the tier does not change", () => {
    // Trust 0 to 8 stays neutral, so she gives only her scenario reply.
    const after = choose(story, deciding("law_hall", withNpc(0)), "honest_account");
    expect(after.log.filter((e) => e.kind === "npc")).toHaveLength(1);
  });

  it("has a distinct, non-empty attitude line for every tier she can move into", () => {
    const lines = [...Object.values(TIER_SHIFT_UP), ...Object.values(TIER_SHIFT_DOWN)] as string[];
    expect(lines.every((l) => l.trim().length > 0)).toBe(true);
    expect(new Set(lines).size).toBe(lines.length);
    expect(tierShiftLine("neutral", "neutral")).toBeUndefined();
  });

  it("notices two lies and says so when the player reaches the painted name", () => {
    const state = deciding("jade_eye_return", withNpc(0, { lied_about_seal: true, lied_to_eye: true }));
    const after = pick(state, "kneel_at_tablets");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("Two lies"))).toBe(true);
  });

  it("remarks on lamp oil on the player's sleeve when the jade-eye scene opens", () => {
    const state = deciding("sutra_hall", withNpc(0, { pocketed_wick: true }));
    const after = pick(state, "speak_to_jade_eye");
    expect(after.log.some((e) => e.kind === "npc" && e.text.includes("lamp oil"))).toBe(true);
  });

  it("moves trust in the direction of the scenario", () => {
    const before = withNpc(0);
    const after = choose(story, deciding("law_hall", before), "deny_seal");
    expect(after.npc.trust).toBeLessThan(before.npc.trust);
    expect(after.flags.lied_about_seal).toBe(true);
  });

  it("locks choices whose conditions are not met and explains why", () => {
    const views = getChoices(decisionPage("judgment"), withNpc(0));
    const plead = views.find((v) => v.choice.id === "plead_mercy");
    expect(plead?.available).toBe(false);
    expect(plead?.hint).toMatch(/trust/);
    expect(() => choose(story, deciding("judgment", withNpc(0)), "plead_mercy")).toThrow(/locked/);
  });

  it("lets the NPC speak unprompted when her suspicion crosses a threshold", () => {
    const suspicious: GameState = {
      ...deciding("sealing_return", withNpc(0)),
      npc: { trust: 0, respect: 0, fear: 0, suspicion: 80 },
    };
    const entered = pick(suspicious, "follow_elder_to_judgment");
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
    for (const id of route) game = pick(game, id);
    expect(getScene(story, game.sceneId).ending).toBe("Ending: The Sisters’ Dao");
    expect(game.flags.freed_mengjiao).toBe(true);
  });

  it("locks the Sisters’ Dao ending unless Mengjiao was freed", () => {
    const judgment = getChoices(decisionPage("judgment"), createGame(story));
    expect(judgment.find((v) => v.choice.id === "bring_sister")?.available).toBe(false);
  });

  it("rejects unknown choices", () => {
    expect(() => choose(story, createGame(story), "nope")).toThrow(/Unknown choice/);
  });
});

describe("side paths", () => {
  it("opens the herb market from the Elder's mission and rejoins the abyss with the rumour", () => {
    let game = at("mission", { npc: { trust: 0, respect: 0, fear: 10, suspicion: 30 } });
    const route = ["prepare_at_market", "buy_frostleaf", "ask_about_elder_sister", "keep_rumor_close", "report_rumor_to_jade_eye"];
    for (const id of route) game = pick(game, id);
    expect(pagesOf("abyss_entry")).toContain(game.sceneId);
    expect(game.flags.accepted_mission).toBe(true);
    // Asking for the night costs one point of trust on the way, so the total is one lower than it was.
    expect(game.npc.trust).toBe(-4);
    expect(reactionLine(game)).toBe(story.scenarios.REPORT_RUMOR.lines[tierFor(0)]);
  });

  it("keeps the rumour report locked until the player has heard something in the lane", () => {
    const views = getChoices(decisionPage("market_return"), createGame(story));
    const report = views.find((v) => v.choice.id === "report_rumor_to_jade_eye");
    expect(report?.available).toBe(false);
    expect(report?.hint).toMatch(/lane/);
  });

  it("opens the lantern stair from Gu's cell and returns to the sutra hall with the names", () => {
    const route = ["follow_lantern_keeper", "take_lantern", "ask_about_mengjiao_lamp", "read_names_on_wall", "carry_names_back"];
    let game = at("sutra_gu_cell");
    for (const id of route) game = pick(game, id);
    expect(pagesOf("sutra_hall")).toContain(game.sceneId);
    expect(game.flags.read_lamp_names).toBe(true);
    expect(game.flags.entered_lantern_stair).toBe(true);
  });

  it("lets the Elder hear about the lamps only after the player has been down the stair", () => {
    const base = at("sutra_jade_eye");
    const locked = getChoices(decisionPage("sutra_jade_eye"), base).find((v) => v.choice.id === "tell_elder_about_lamps");
    expect(locked?.available).toBe(false);

    const after = pick({ ...base, flags: { entered_lantern_stair: true } }, "tell_elder_about_lamps");
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

describe("NPC memory of her own reactions", () => {
  const fresh = (extra: Partial<GameState> = {}): GameState => ({ ...createGame(story), ...extra });

  it("records each NPC scenario she reacts to, and nothing else", () => {
    const after = choose(story, deciding("law_hall", fresh()), "honest_account");
    expect(after.history).toEqual(["HONEST_ACCOUNT"]);
    const quiet = choose(story, deciding("mission", fresh()), "accept_mission");
    expect(quiet.history).toEqual([]);
  });

  it("counts earlier reactions with `said`, and `within` looks only at the most recent ones", () => {
    const state = fresh({ history: ["THREATEN", "GIFT_HERB", "THREATEN"] });
    const said = (c: Condition) => conditionsHold([c], state);
    expect(said({ kind: "said", scenario: "THREATEN" })).toBe(true);
    expect(said({ kind: "said", scenario: "THREATEN", min: 2 })).toBe(true);
    expect(said({ kind: "said", scenario: "THREATEN", min: 3 })).toBe(false);
    expect(said({ kind: "said", scenario: "THREATEN", within: 1 })).toBe(true);
    expect(said({ kind: "said", scenario: "GIFT_HERB", within: 1 })).toBe(false);
    expect(said({ kind: "said", scenario: "GIFT_HERB", within: 2 })).toBe(true);
    expect(said({ kind: "said", scenario: "GIFT_HERB", within: 0 })).toBe(false);
  });

  it("remembers a third threat and says so, but not the first", () => {
    const third = reactToScenario(story.scenarios.THREATEN, fresh({ history: ["THREATEN", "THREATEN"] }));
    expect(third.remembered).toBe(true);
    expect(third.line).toMatch(/third time/);
    const first = reactToScenario(story.scenarios.THREATEN, fresh({ history: ["THREATEN"] }));
    expect(first.remembered).toBe(false);
  });

  it("contradicts a denial that comes straight after an honest account", () => {
    const reaction = reactToScenario(story.scenarios.LIE_ABOUT_SEAL, fresh({ history: ["HONEST_ACCOUNT"] }));
    expect(reaction.remembered).toBe(true);
    expect(reaction.line).toMatch(/cannot hold both/);
  });

  it("notices a lie and a truth given within the same few answers under the bell", () => {
    const state = deciding("tribunal_bell_rule", fresh({ history: ["LIE_ABOUT_SEAL"] }));
    const after = pick(state, "ask_elder_permission");
    expect(pagesOf("tribunal_vote")).toContain(after.sceneId);
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("You denied the seal under the bell"))).toBe(true);
  });

  it("speaks on the sealing night once the player has made the third threat", () => {
    const state = deciding("sealing_choice", fresh({ history: ["THREATEN", "THREATEN"] }));
    const after = pick(state, "take_jade_instead");
    expect(pagesOf("sealing_return")).toContain(after.sceneId);
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("Threats again, on the night"))).toBe(true);
  });

  it("gives every memory-driven NPC scenario a memory line that differs from its tier lines", () => {
    for (const scenario of Object.values(story.scenarios)) {
      const tiers = TIERS.map((t) => scenario.lines[t]);
      for (const m of scenario.memory ?? []) expect(tiers, scenario.id).not.toContain(m.line);
    }
  });
});

describe("mood shifts", () => {
  it("comments when fear takes over her face without changing her tier", () => {
    // Trust 0 stays neutral. Showing the sealing order adds 8 fear, which takes her from 45 to 53: afraid.
    const state: GameState = {
      ...deciding("tribunal_crowd", createGame(story)),
      npc: { trust: 0, respect: 0, fear: 45, suspicion: 30 },
    };
    const after = choose(story, state, "show_sealing_order");
    const npc = after.log.filter((e) => e.kind === "npc").map((e) => e.text);
    expect(npc.at(-1)).toBe(MOOD_SHIFT.afraid);
  });

  it("gives the tier comment the last word when her tier and her face change together", () => {
    // Trust 20 is warm. Threatening her drops trust to 8 (neutral) and pushes fear to 51 (afraid).
    const state: GameState = {
      ...deciding("law_hall", createGame(story)),
      npc: { trust: 20, respect: 0, fear: 45, suspicion: 30 },
    };
    const after = choose(story, state, "threaten_expose");
    const npc = after.log.filter((e) => e.kind === "npc").map((e) => e.text);
    expect(npc.at(-1)).toBe(TIER_SHIFT_DOWN.neutral);
    expect(npc).not.toContain(MOOD_SHIFT.afraid);
  });

  it("has a distinct, non-empty line for every mood, and none when the mood stays put", () => {
    const moods: Mood[] = ["furious", "afraid", "suspicious", "guarded", "stern", "softened", "tender"];
    const lines = moods.map((m) => MOOD_SHIFT[m]);
    expect(lines.every((l) => l.trim().length > 0)).toBe(true);
    expect(new Set(lines).size).toBe(moods.length);
    expect(moodShiftLine("stern", "stern")).toBeUndefined();
    expect(moodShiftLine("stern", "afraid")).toBe(MOOD_SHIFT.afraid);
  });
});

describe("length and structure checks", () => {
  const words = (n: number) => Array.from({ length: n }, () => "word").join(" ");
  const withGatePara = (paragraph: string) => ({
    ...story,
    scenes: { ...story.scenes, gate: { ...story.scenes.gate, paragraphs: [paragraph] } },
  });

  it("caps every NPC line and attitude comment in the story", () => {
    const lines = [
      ...Object.values(story.scenarios).flatMap((s) => [
        ...Object.values(s.lines),
        ...(s.memory ?? []).map((m) => m.line),
      ]),
      ...Object.values(TIER_SHIFT_UP),
      ...Object.values(TIER_SHIFT_DOWN),
      ...Object.values(MOOD_SHIFT),
      ...Object.values(MANNER_SHIFT),
    ];
    for (const line of lines) expect(countWords(line ?? "")).toBeLessThanOrEqual(MAX_LINE_WORDS);
  });

  it("accepts a scene of exactly the cap, and reports one word over it", () => {
    expect(validateStory(withGatePara(words(MAX_SCENE_WORDS)))).toEqual([]);
    const problems = validateStory(withGatePara(words(MAX_SCENE_WORDS + 1)));
    expect(problems).toEqual([expect.stringMatching(/scene "gate" has 201 words of body text; the limit is 200/)]);
  });

  it("counts extra paragraphs and interjections toward the scene cap, since they can all show", () => {
    const crowded: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: {
          ...story.scenes.gate,
          paragraphs: [words(150)],
          extras: [{ when: [], paragraphs: [words(30)] }],
          interjections: [{ when: [], line: words(30) }],
        },
      },
    };
    expect(validateStory(crowded)).toEqual([expect.stringMatching(/scene "gate" has 210 words of body text/)]);
  });

  it("flags a said condition that names an NPC scenario the story does not define", () => {
    const broken: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: {
          ...story.scenes.gate,
          interjections: [{ when: [{ kind: "said", scenario: "NOPE" }], line: "Nothing." }],
        },
      },
    };
    expect(validateStory(broken).join("\n")).toMatch(/missing NPC scenario "NOPE"/);
  });

  it("flags a tone condition that names a tone the story does not have", () => {
    const broken: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: {
          ...story.scenes.gate,
          interjections: [{ when: [{ kind: "tone", tone: "greed" as ChoiceTone }], line: "Nothing." }],
        },
      },
    };
    expect(validateStory(broken).join("\n")).toMatch(/unknown tone "greed"/);
  });

  it("refuses a page turn that is mixed in with decisions", () => {
    const gate = story.scenes.gate;
    const mixed: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: { ...gate, choices: [{ id: "continue", label: "Continue", next: "law_hall", page: true }, ...gate.choices] },
      },
    };
    expect(validateStory(mixed).join("\n")).toMatch(/mixes a page turn with other options/);
  });

  it("refuses a page turn that carries a reaction, so passages stay plain", () => {
    const gate = story.scenes.gate;
    const reacting: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: { ...gate, choices: [{ id: "continue", label: "Continue", next: "law_hall", page: true, npcScenario: "GIFT_HERB" }] },
      },
    };
    expect(validateStory(reacting).join("\n")).toMatch(/should carry no tone, reaction, effects or conditions/);
  });
});

describe("saved games", () => {
  it("gives a save from before the history existed an empty history", () => {
    const old: Partial<GameState> = { ...createGame(story) };
    delete old.history;
    const restored = restoreGame(old, story);
    expect(restored?.history).toEqual([]);
    expect(restored?.sceneId).toBe("gate");
  });

  it("gives a save from before decisions carried tones an empty list of tones", () => {
    const old: Partial<GameState> = { ...createGame(story) };
    delete old.tones;
    expect(restoreGame(old, story)?.tones).toEqual([]);
  });

  it("keeps the history and tones of a save that has them", () => {
    const saved = JSON.parse(JSON.stringify({ ...createGame(story), history: ["THREATEN"], tones: ["force"] }));
    const restored = restoreGame(saved, story);
    expect(restored?.history).toEqual(["THREATEN"]);
    expect(restored?.tones).toEqual(["force"]);
  });

  it("refuses saves that do not point at a scene in this story", () => {
    expect(restoreGame(null, story)).toBeNull();
    expect(restoreGame("gate", story)).toBeNull();
    expect(restoreGame({ ...createGame(story), sceneId: "nowhere" }, story)).toBeNull();
  });
});

describe("new side paths", () => {
  it("opens the sister’s shrine from the archive and returns to the sutra door", () => {
    let game = at("archive_dawn");
    for (const id of ["ask_about_old_shrine", "follow_mulberry_path", "ask_shen_about_her", "light_incense", "ask_shen_to_stay", "keep_shrine_secret"]) {
      game = pick(game, id);
    }
    expect(pagesOf("sutra_door")).toContain(game.sceneId);
    expect(game.flags.visited_shrine).toBe(true);
    expect(game.flags.lit_shrine).toBe(true);
  });

  it("lets the Elder hear about the shrine only after a visit, and then reacts to what it found", () => {
    const locked = getChoices(decisionPage("sutra_jade_eye"), at("sutra_jade_eye")).find((v) => v.choice.id === "tell_elder_about_shrine");
    expect(locked?.available).toBe(false);

    const after = pick(at("sutra_jade_eye", { flags: { visited_shrine: true, lit_shrine: true } }), "tell_elder_about_shrine");
    expect(after.history).toEqual(["REPORT_SHRINE"]);
    expect(reactionLine(after)).toBe(story.scenarios.REPORT_SHRINE.memory?.[0].line);
  });

  it("slips from the trial into the bell foundry and brings back the names to the bell rule", () => {
    let game = at("tribunal_crowd");
    for (const id of ["slip_to_foundry", "follow_the_hammers", "ask_kuang_about_names", "copy_the_casting_book", "carry_the_copy_forward"]) {
      game = pick(game, id);
    }
    expect(pagesOf("tribunal_bell_rule")).toContain(game.sceneId);
    expect(game.history.at(-1)).toBe("SHOW_CASTING_LEDGER");
    expect(game.flags.showed_casting_ledger).toBe(true);
  });

  it("keeps the foundry’s copy of the names locked until the player has made one", () => {
    const locked = getChoices(decisionPage("foundry_return"), at("foundry_return")).find((v) => v.choice.id === "carry_the_copy_forward");
    expect(locked?.available).toBe(false);
    expect(locked?.hint).toMatch(/copy/);
  });

  it("has the bell names come back to her at the second descent", () => {
    const after = pick(at("tribunal_vote", { flags: { read_bell_names: true } }), "trust_elder_verdict");
    expect(pagesOf("descent_return")).toContain(after.sceneId);
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("The bells rang fifteen times"))).toBe(true);
  });

  it("keeps the vigil at the shrine when the player lights the incense, and carries a shaving home", () => {
    const vigil = pick(at("shrine_offering"), "light_incense");
    expect(pagesOf("shrine_vigil")).toContain(vigil.sceneId);
    const back = pick(vigil, "take_a_shaving");
    expect(pagesOf("shrine_return")).toContain(back.sceneId);
    expect(back.flags.took_shaving).toBe(true);
  });

  it("reads the rim of every bell in the dark hall, and touches the fifteenth", () => {
    let game = at("foundry_ledger");
    for (const id of ["read_names_aloud", "touch_the_fifteenth_bell"]) game = pick(game, id);
    expect(pagesOf("foundry_return")).toContain(game.sceneId);
    expect(game.flags.read_bell_names).toBe(true);
    expect(game.flags.touched_fifteenth_bell).toBe(true);
  });

  it("counts the faces across the water and walks the far shore before the fare", () => {
    let game = at("ferry_crossing");
    game = pick(game, "count_the_passengers");
    expect(pagesOf("ferry_far_shore")).toContain(game.sceneId);
    game = pick(game, "return_to_the_boat");
    expect(pagesOf("ferry_fare")).toContain(game.sceneId);
    expect(game.flags.counted_passengers).toBe(true);
  });

  it("trains in the sparring court, holds its ground, and reports the bout to the eye", () => {
    let game = at("jade_eye_bell");
    for (const id of ["train_in_the_court", "accept_the_challenge", "hold_your_ground", "report_bout"]) {
      game = pick(game, id);
    }
    expect(pagesOf("tribunal_summons")).toContain(game.sceneId);
    expect(game.flags.held_ground).toBe(true);
    expect(game.history.at(-1)).toBe("REPORT_BOUT");
    expect(game.flags.reported_bout).toBe(true);
  });

  it("keeps the mist technique in the court locked until the sutra has been read", () => {
    const locked = getChoices(decisionPage("court_bout"), at("court_bout")).find((v) => v.choice.id === "use_the_mist");
    expect(locked?.available).toBe(false);
    expect(locked?.hint).toMatch(/Blood Lotus Sutra/);
  });

  it("crosses the still water, pays the fare in a name, and tells the Elder on the steps", () => {
    let game = at("mist_wanru_message");
    for (const id of ["take_the_ferry", "ask_for_passage", "watch_the_reflections", "give_mengjiao_name", "tell_elder_of_ferry"]) {
      game = pick(game, id);
    }
    expect(pagesOf("sealing_night")).toContain(game.sceneId);
    expect(game.flags.paid_with_name).toBe(true);
    expect(game.history.at(-1)).toBe("REPORT_FERRY");
    expect(game.log.some((e) => e.kind === "npc" && e.text.includes("river water"))).toBe(true);
  });
});

describe("the Elder reacts to patterns and to the new side path", () => {
  const withNpc = (trust: number, flags: Record<string, boolean> = {}): GameState => ({
    ...createGame(story),
    npc: { trust, respect: 0, fear: 10, suspicion: 30 },
    flags,
  });

  it("answers a lie with her memory of a run of lies, once the player has lied in patterns", () => {
    const after = choose(story, deciding("law_hall", { ...withNpc(0), tones: ["deceit", "deceit"] }), "deny_seal");
    expect(reactionLine(after)).toMatch(/Another lie/);
  });

  it("asking for a night draws her reply and costs a little trust", () => {
    const after = choose(story, deciding("mission", withNpc(0)), "ask_time");
    expect(after.history).toEqual(["REQUEST_NIGHT"]);
    expect(after.npc.trust).toBe(-1);
  });

  it("gives the judgment’s choices a reply, so the Elder answers the verdict the player picks", () => {
    const after = choose(story, deciding("judgment", withNpc(0)), "seize_jade");
    expect(after.history).toEqual(["SEIZE_JADE"]);
    expect(reactionLine(after)).toBe(story.scenarios.SEIZE_JADE.lines.neutral);
  });

  it("opens the pavilion from the herb market, and the report there reads what the player did at the tables", () => {
    let game = at("market_lane", { npc: { trust: 0, respect: 0, fear: 10, suspicion: 30 } });
    for (const id of ["follow_the_clatter", "slip_a_loaded_tile", "keep_the_win", "pay_the_debt", "walk_out_with_the_boy"]) {
      game = pick(game, id);
    }
    expect(pagesOf("market_return")).toContain(game.sceneId);
    expect(game.flags.visited_pavilion).toBe(true);
    expect(game.flags.cheated_at_tiles).toBe(true);
    expect(game.flags.paid_bo_lan).toBe(true);

    const report = pick(game, "report_pavilion_to_jade_eye");
    expect(report.history.at(-1)).toBe("REPORT_WAGER");
    expect(reactionLine(report)).toBe(story.scenarios.REPORT_WAGER.memory?.[0].line);
  });

  it("locks the report at the market until the player has been to the pavilion", () => {
    const report = getChoices(decisionPage("market_return"), createGame(story)).find((v) => v.choice.id === "report_pavilion_to_jade_eye");
    expect(report?.available).toBe(false);
    expect(report?.hint).toMatch(/stone tables/);
  });

  it("gives the pavilion’s debt and the wardens a page each, within the cap", () => {
    for (const id of ["pavilion_gate", "pavilion_table", "pavilion_cheat", "pavilion_challenge", "pavilion_bo_lan", "pavilion_debt", "pavilion_wardens"]) {
      expect(sceneBodyWords(getScene(story, id)), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
  });

  it("notices a run of hidden things in the archive report", () => {
    const state = deciding("archive_reading_room", { ...createGame(story), tones: ["deceit", "deceit", "deceit"] });
    const after = pick(state, "close_book");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("You have kept something hidden"))).toBe(true);
  });

  it("speaks to a run of plain answers under the masters’ eyes", () => {
    const state = deciding("tribunal_masters", { ...createGame(story), tones: ["truth", "truth", "truth"] });
    const after = pick(state, "ask_masters_question");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("Three plain answers before the bell"))).toBe(true);
  });

  it("notices a run of waiting and walking past things at the shrine", () => {
    const state = deciding("shrine_vigil", { ...createGame(story), tones: ["quiet", "quiet", "quiet"] });
    const after = pick(state, "pinch_out_the_incense");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("You have walked past things"))).toBe(true);
  });
});

/**
 * Finds the first scene and choice that trigger the given NPC scenario, with the state its
 * own requirements ask for: the flags it needs, and any stat or NPC minimum it sets.
 */
function locate(scenarioId: string): {
  sceneId: string;
  choiceId: string;
  flags: Record<string, boolean>;
  stats: Partial<PlayerStats>;
  npc: Partial<NpcState>;
} {
  const scene = Object.values(story.scenes).find((s) => s.choices.some((c) => c.npcScenario === scenarioId));
  if (!scene) throw new Error(`no scene uses ${scenarioId}`);
  const choice = scene.choices.find((c) => c.npcScenario === scenarioId)!;
  const stats: Partial<PlayerStats> = {};
  const npc: Partial<NpcState> = {};
  for (const c of choice.requires ?? []) {
    if (c.kind === "stat" && c.min !== undefined) stats[c.stat] = c.min;
    if (c.kind === "npc" && c.min !== undefined) npc[c.metric] = c.min;
  }
  return { sceneId: scene.id, choiceId: choice.id, flags: flagsFor(choice), stats, npc };
}
