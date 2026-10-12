import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { startScenes } from "@/engine/audit";
import { REALMS } from "@/engine/cultivation";
import { story, chapters } from "@/story";
import { auditStory } from "@/engine/audit";
import { validateStory, MAX_LINE_WORDS, MAX_SCENE_WORDS, MIN_CHOICES, MIN_NPC_SCENARIOS, sceneBodyWords } from "@/engine/validate";
import { choose, createGame, currentBeat, enterScene, getChoices, getScene } from "@/engine/game";
import {
  conditionsHold,
  RESPECT_SHIFT,
  respectShiftLine,
  respectTierFor,
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
import type { Choice, ChoiceTone, Condition, GameState, LogEntry, Mood, NpcState, PlayerStats, Tier } from "@/engine/types";

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
  const queue = startScenes(story);
  while (queue.length) {
    const id = queue.shift()!;
    if (seen.has(id)) continue;
    seen.add(id);
    for (const choice of story.scenes[id].choices) queue.push(choice.next);
  }
  return seen;
}

/** The same state, placed on a scene so that its choices can be made. */
function deciding(sceneId: string, state: GameState): GameState {
  return { ...state, sceneId };
}

/** Makes the named decision. Routes name every choice they take, including the opening ones of a scene. */
function pick(state: GameState, choiceId: string): GameState {
  return skipInterludes(choose(story, state, choiceId));
}

/** The interludes are gossip between chapters. A player reads them and moves on, and so do the route tests. */
function skipInterludes(state: GameState): GameState {
  let current = state;
  while (current.sceneId.startsWith("rumours_")) {
    current = enterScene(story, current, getScene(story, getScene(story, current.sceneId).choices[0].next));
  }
  return current;
}

/** Makes each named decision in turn. */
function through(state: GameState, choiceIds: string[]): GameState {
  return choiceIds.reduce(pick, state);
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
    expect(chapters.length).toBeGreaterThanOrEqual(34);
  });

  it("has endings, all reachable", () => {
    const endings = Object.values(story.scenes).filter((s) => s.ending !== undefined);
    expect(endings.length).toBeGreaterThanOrEqual(2);
    const reachable = reachableScenes();
    for (const ending of endings) expect(reachable.has(ending.id), ending.id).toBe(true);
  });
});

describe("choice tones", () => {
  it("gives every choice one of the six tones", () => {
    for (const scene of Object.values(story.scenes)) {
      for (const choice of scene.choices) {
        expect(isTone(choice.tone), `${scene.id}/${choice.id}`).toBe(true);
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

  it("records the tone of each decision", () => {
    const decided = choose(story, deciding("law_hall", createGame(story)), "honest_account");
    expect(decided.tones).toEqual(["truth"]);
  });

  it("refuses a decision that has no tone, in the validator", () => {
    const gate = story.scenes.gate;
    const untoned: typeof story = {
      ...story,
      scenes: {
        ...story.scenes,
        gate: { ...gate, choices: gate.choices.map((c) => (c.id === "bow_and_state" ? { ...c, tone: "greed" as ChoiceTone } : c)) },
      },
    };
    expect(validateStory(untoned).join("\n")).toMatch(/choice "bow_and_state" in "gate" has no valid tone/);
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

describe("respect she is willing to show", () => {
  it("sorts respect into four bands, from contempt to respected", () => {
    expect(respectTierFor(-60)).toBe("contempt");
    expect(respectTierFor(-25)).toBe("contempt");
    expect(respectTierFor(-24)).toBe("unregarded");
    expect(respectTierFor(24)).toBe("unregarded");
    expect(respectTierFor(25)).toBe("weighed");
    expect(respectTierFor(50)).toBe("respected");
  });

  it("has a distinct, non-empty line for every band, and none when the band stays put", () => {
    const lines = Object.values(RESPECT_SHIFT);
    expect(lines.every((l) => l.trim().length > 0)).toBe(true);
    expect(new Set(lines).size).toBe(lines.length);
    expect(respectShiftLine("weighed", "weighed")).toBeUndefined();
    expect(respectShiftLine("unregarded", "weighed")).toBe(RESPECT_SHIFT.weighed);
  });

  it("speaks when a choice lifts her respect into a new band, after her reply", () => {
    // Trust 0 stays neutral and the Elder's suspicion stays in range, so respect alone changes.
    // Offering to fetch Gu alone adds 3 respect, which takes her from 22 to 25: weighed.
    const state: GameState = { ...deciding("mission", createGame(story)), npc: { trust: 0, respect: 22, fear: 10, suspicion: 30 } };
    const after = choose(story, state, "offer_self");
    expect(after.log.filter((e) => e.kind === "npc").at(-1)?.text).toBe(RESPECT_SHIFT.weighed);
  });

  it("says a tier change before a respect change when both happen on one choice", () => {
    // Trust 12 becomes 16, which is warm, and respect 22 becomes 25, which is weighed. The tier wins.
    const state: GameState = { ...deciding("mission", createGame(story)), npc: { trust: 12, respect: 22, fear: 10, suspicion: 30 } };
    const after = choose(story, state, "offer_self");
    expect(after.log.filter((e) => e.kind === "npc").at(-1)?.text).toBe(TIER_SHIFT_UP.warm);
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

describe("scene length", () => {
  it("opens every scene under a heading of its own, so no scene continues unannounced", () => {
    const start = { ...createGame(story), sceneId: "descent_return" };
    const next = choose(story, start, getScene(story, "descent_return").choices[0].id);
    expect(next.sceneId).toBe("descent_return_2");
    const heading = next.log.slice(start.log.length).find((e) => e.kind === "heading");
    expect(heading?.text).toBe(story.scenes.descent_return_2.title);
  });

  it("passes the audit: no dangling flag, dead condition or time loop", () => {
    expect(auditStory(story).map((i) => `${i.kind}: ${i.message}`)).toEqual([]);
  });

  it("gives every scene an id of its own, so no arc silently replaces another's scene", () => {
    const owner = new Map<string, string>();
    const clashes: string[] = [];
    for (const chapter of chapters) {
      for (const scene of chapter.scenes) {
        const first = owner.get(scene.id);
        if (first !== undefined) clashes.push(`${scene.id} (${first} / ${chapter.name})`);
        else owner.set(scene.id, chapter.name);
      }
    }
    expect(clashes).toEqual([]);
  });

  it("keeps every scene body within the 200-word cap, extras and interjections included", () => {
    for (const scene of Object.values(story.scenes)) {
      expect(sceneBodyWords(scene), scene.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
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
      const { sceneId, choiceId, flags, stats, npc, realm, wealth, decisions, progress } = locate(scenario.id);
      const reached = new Set<Tier>();
      const replies = new Set<string>();
      for (const trust of [-60, -20, 0, 30, 70]) {
        const base = withNpc(trust, flags);
        // A companion's scenario is answered by how they feel, which is their bond, not the Elder's trust.
        const bonds = scenario.npc ? { [scenario.npc]: trust } : base.bonds;
        const state: GameState = { ...base, bonds, sceneId, realm, cultivation: cultivationAt(realm, progress), wealth: Math.max(base.wealth, wealth), decisions: Math.max(base.decisions, decisions), stats: { ...base.stats, ...stats }, npc: { ...base.npc, ...npc, trust } };
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
    const state = deciding("jade_eye_return_3", withNpc(0, { lied_about_seal: true, lied_to_eye: true }));
    const after = through(state, ["kneel_at_tablets", "ask_why_first_char_stayed"]);
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("Two lies"))).toBe(true);
  });

  it("remarks on lamp oil on the player's sleeve when the jade-eye scene opens", () => {
    const state = deciding("sutra_hall_3", withNpc(0, { pocketed_wick: true }));
    const after = through(state, ["speak_to_jade_eye", "describe_pages_exactly", "mist_answered_same_voice"]);
    expect(after.log.some((e) => e.kind === "npc" && e.text.includes("lamp oil"))).toBe(true);
  });

  it("moves trust in the direction of the scenario", () => {
    const before = withNpc(0);
    const after = choose(story, deciding("law_hall", before), "deny_seal");
    expect(after.npc.trust).toBeLessThan(before.npc.trust);
    expect(after.flags.lied_about_seal).toBe(true);
  });

  it("locks choices whose conditions are not met and explains why", () => {
    const views = getChoices(getScene(story, "judgment"), withNpc(0));
    const plead = views.find((v) => v.choice.id === "plead_mercy");
    expect(plead?.available).toBe(false);
    expect(plead?.hint).toMatch(/trust/);
    expect(() => choose(story, deciding("judgment", withNpc(0)), "plead_mercy")).toThrow(/locked/);
  });

  it("lets the NPC speak unprompted when her suspicion crosses a threshold", () => {
    const suspicious: GameState = {
      ...deciding("sealing_return_2", withNpc(0)),
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
  it("starts at the gate with the four first options and the road down to the pilgrims", () => {
    const game = createGame(story);
    expect(game.sceneId).toBe("gate");
    expect(getChoices(getScene(story, "gate"), game)).toHaveLength(5);
  });

  it("reaches the close of Book One through the sealing choice, with Mengjiao freed", () => {
    let game = createGame(story);
    const route = ["bow_and_state","honest_account","accept_mission","spare_gu","recover_jade","full_truth","walk_east_wing","show_order","go_front","read_nearest_label","claim_elder_sent","search_quietly","open_for_wanru","to_the_index","copy_entry","report_index_entry","tell_everything_in_order","report_letter","call_to_door","sleep_on","take_cloak_thanks","go_at_bell","press_palm_lacquer","ask_what_gate_wants","turn_key_again","trace_lowest_band","read_struck_phrase","copy_all_bands","walk_lotus_steps","go_down_right","count_outer_rows","touch_central_bell","step_onto_red_water","cover_mirror_sleeve","read_the_sutra","count_petals_until_quiet","resist_the_voice","claim_nothing_new","mist_answered_same_voice","tell_elder_sister","brace_and_watch_water","admit_law_sent_you","offer_mengjiao_hand","rise_and_approach","show_burned_fingers","tell_of_mengjiao","ask_why_first_char_stayed","press_for_sealing_night","ask_who_the_masters_were","ask_last_words","accept_confession","ask_to_see_ledger","praise_her_courage","tear_summons","greet_gu","wait_for_elder_speak","ask_why_ren_qiao_moved","kneel_with_gu","describe_archive_fully","testify_for_gu","ask_can_bell_lie","let_bell_decide","count_white_with_elder","trust_elder_verdict","bow_and_accept_terms","ask_who_walked_cleft","trust_lantern","count_steps_on_rock","speak_names_back","walk_to_ledge","step_along_ledge","ask_how_she_keeps_seal","ask_other_half","ask_seal_needs","promise_message","count_voices_climbing","ask_elder_exact_words","carry_names_in","read_names_faster","read_all_fifteen","let_masters_go","stop_lian_leaving","repeat_message_exact","take_original_order","read_blank_line","ask_what_she_sees","step_into_the_ring","count_strokes_needed","elder_refuses","ask_mist_what_told","stay_back_path","find_weak_link","cut_chains","ask_mirror_meant","follow_elder_to_judgment","bring_sister","climb_steady_steps"];
    for (const id of route) game = pick(game, id);
    expect(game.sceneId).toBe("ending_sisters_2");
    expect(game.flags.end1_sisters).toBe(true);
    expect(game.flags.freed_mengjiao).toBe(true);
  });

  it("locks the Sisters’ Dao ending unless Mengjiao was freed", () => {
    const judgment = getChoices(getScene(story, "judgment"), createGame(story));
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
    expect(game.sceneId).toBe("abyss_entry");
    expect(game.flags.accepted_mission).toBe(true);
    // Asking for the night costs one point of trust on the way, so the total is one lower than it was.
    expect(game.npc.trust).toBe(-4);
    expect(reactionLine(game)).toBe(story.scenarios.REPORT_RUMOR.lines[tierFor(0)]);
  });

  it("keeps the rumour report locked until the player has heard something in the lane", () => {
    const views = getChoices(getScene(story, "market_return"), createGame(story));
    const report = views.find((v) => v.choice.id === "report_rumor_to_jade_eye");
    expect(report?.available).toBe(false);
    expect(report?.hint).toMatch(/lane/);
  });

  it("opens the lantern stair from Gu's cell and returns to the sutra hall with the names", () => {
    const route = ["tell_gu_truth", "ask_about_seal_without_jade", "follow_lantern_keeper", "ask_why_wrong_visitor", "take_lantern", "ask_about_mengjiao_lamp", "read_names_on_wall", "carry_names_back"];
    let game = at("sutra_gu_cell");
    for (const id of route) game = pick(game, id);
    expect(game.sceneId).toBe("sutra_hall");
    expect(game.flags.read_lamp_names).toBe(true);
    expect(game.flags.entered_lantern_stair).toBe(true);
  });

  it("lets the Elder hear about the lamps only after the player has been down the stair", () => {
    const base = at("sutra_jade_eye_3");
    const locked = getChoices(getScene(story, "sutra_jade_eye_3"), base).find((v) => v.choice.id === "tell_elder_about_lamps");
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
    const state = deciding("tribunal_bell_rule_2", fresh({ history: ["LIE_ABOUT_SEAL"] }));
    const after = through(state, ["ask_elder_permission", "count_white_with_elder"]);
    expect(after.sceneId).toBe("tribunal_vote_2");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("You denied the seal under the bell"))).toBe(true);
  });

  it("speaks on the sealing night once the player has made the third threat", () => {
    const state = deciding("sealing_choice_2", fresh({ history: ["THREATEN", "THREATEN"] }));
    const after = through(state, ["take_jade_instead", "ask_mirror_meant"]);
    expect(after.sceneId).toBe("sealing_return_2");
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
      ...deciding("tribunal_crowd_2", createGame(story)),
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
    scenes: { ...story.scenes, gate_gossip: { ...story.scenes.gate_gossip, paragraphs: [paragraph] } },
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
      ...Object.values(RESPECT_SHIFT),
    ];
    for (const line of lines) expect(countWords(line ?? "")).toBeLessThanOrEqual(MAX_LINE_WORDS);
  });

  it("accepts a scene of exactly the cap, and reports one word over it", () => {
    expect(validateStory(withGatePara(words(MAX_SCENE_WORDS)))).toEqual([]);
    const problems = validateStory(withGatePara(words(MAX_SCENE_WORDS + 1)));
    expect(problems).toEqual([expect.stringMatching(/scene "gate_gossip" has 201 words of body text; the limit is 200/)]);
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

  it("refuses a scene with no heading", () => {
    const gate = story.scenes.gate;
    const untitled: typeof story = { ...story, scenes: { ...story.scenes, gate: { ...gate, title: "" } } };
    expect(validateStory(untitled).join("\n")).toMatch(/scene "gate" has no title/);
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
    for (const id of ["take_cloak_thanks", "ask_about_old_shrine", "ask_if_shrine_has_name", "follow_mulberry_path", "ask_shen_laundress", "ask_shen_about_her", "light_incense", "light_second_incense", "ask_shen_to_stay", "keep_shrine_secret"]) {
      game = pick(game, id);
    }
    expect(game.sceneId).toBe("sutra_door");
    expect(game.flags.visited_shrine).toBe(true);
    expect(game.flags.lit_shrine).toBe(true);
  });

  it("lets the Elder hear about the shrine only after a visit, and then reacts to what it found", () => {
    const locked = getChoices(getScene(story, "sutra_jade_eye_3"), at("sutra_jade_eye_3")).find((v) => v.choice.id === "tell_elder_about_shrine");
    expect(locked?.available).toBe(false);

    const after = pick(at("sutra_jade_eye_3", { flags: { visited_shrine: true, lit_shrine: true } }), "tell_elder_about_shrine");
    expect(after.history).toEqual(["REPORT_SHRINE"]);
    expect(reactionLine(after)).toBe(story.scenarios.REPORT_SHRINE.memory?.[0].line);
  });

  it("slips from the trial into the bell foundry and brings back the names to the bell rule", () => {
    let game = at("tribunal_crowd");
    for (const id of ["stand_between_lin_masters", "slip_to_foundry", "follow_the_hammers", "watch_rod_turn", "ask_kuang_about_names", "read_every_column", "copy_the_casting_book", "carry_the_copy_forward"]) {
      game = pick(game, id);
    }
    expect(game.sceneId).toBe("tribunal_bell_rule");
    expect(game.history.at(-1)).toBe("SHOW_CASTING_LEDGER");
    expect(game.flags.showed_casting_ledger).toBe(true);
  });

  it("keeps the foundry’s copy of the names locked until the player has made one", () => {
    const locked = getChoices(getScene(story, "foundry_return"), at("foundry_return")).find((v) => v.choice.id === "carry_the_copy_forward");
    expect(locked?.available).toBe(false);
    expect(locked?.hint).toMatch(/copy/);
  });

  it("has the bell names come back to her at the second descent", () => {
    const after = through(at("tribunal_vote", { flags: { read_bell_names: true } }), ["count_white_with_elder", "trust_elder_verdict", "bow_and_accept_terms", "ask_who_walked_cleft"]);
    expect(after.sceneId).toBe("descent_return_3");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("The bells rang fifteen times"))).toBe(true);
  });

  it("keeps the vigil at the shrine when the player lights the incense, and carries a shaving home", () => {
    const vigil = pick(at("shrine_offering"), "light_incense");
    expect(vigil.sceneId).toBe("shrine_vigil");
    const back = through(vigil, ["light_second_incense", "take_a_shaving"]);
    expect(back.sceneId).toBe("shrine_return");
    expect(back.flags.took_shaving).toBe(true);
  });

  it("reads the rim of every bell in the dark hall, and touches the fifteenth", () => {
    let game = at("foundry_ledger");
    for (const id of ["read_every_column", "read_names_aloud", "walk_humming_rows", "touch_the_fifteenth_bell"]) game = pick(game, id);
    expect(game.sceneId).toBe("foundry_return");
    expect(game.flags.read_bell_names).toBe(true);
    expect(game.flags.touched_fifteenth_bell).toBe(true);
  });

  it("counts the faces across the water and walks the far shore before the fare", () => {
    let game = at("ferry_crossing");
    game = pick(game, "count_the_passengers");
    expect(game.sceneId).toBe("ferry_far_shore");
    game = through(game, ["read_blank_stones", "return_to_the_boat"]);
    expect(game.sceneId).toBe("ferry_fare");
    expect(game.flags.counted_passengers).toBe(true);
  });

  it("trains in the sparring court, holds its ground, and reports the bout to the eye", () => {
    let game = at("jade_eye_bell");
    for (const id of ["tear_summons", "train_in_the_court", "accept_the_challenge", "hold_your_ground", "report_bout"]) {
      game = pick(game, id);
    }
    expect(game.sceneId).toBe("tribunal_summons");
    expect(game.flags.held_ground).toBe(true);
    expect(game.history.at(-1)).toBe("REPORT_BOUT");
    expect(game.flags.reported_bout).toBe(true);
  });

  it("keeps the mist technique in the court locked until the sutra has been read", () => {
    const locked = getChoices(getScene(story, "court_bout"), at("court_bout")).find((v) => v.choice.id === "use_the_mist");
    expect(locked?.available).toBe(false);
    expect(locked?.hint).toMatch(/Blood Lotus Sutra/);
  });

  it("crosses the still water, pays the fare in a name, and tells the Elder on the steps", () => {
    let game = at("mist_wanru_message");
    for (const id of ["repeat_message_exact", "take_the_ferry", "ask_for_passage", "watch_the_reflections", "give_mengjiao_name", "tell_elder_of_ferry", "read_blank_line", "ask_what_she_sees"]) {
      game = pick(game, id);
    }
    expect(game.sceneId).toBe("sealing_night_3");
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
    expect(game.sceneId).toBe("market_return");
    expect(game.flags.visited_pavilion).toBe(true);
    expect(game.flags.cheated_at_tiles).toBe(true);
    expect(game.flags.paid_bo_lan).toBe(true);

    const report = pick(game, "report_pavilion_to_jade_eye");
    expect(report.history.at(-1)).toBe("REPORT_WAGER");
    expect(reactionLine(report)).toBe(story.scenarios.REPORT_WAGER.memory?.[0].line);
  });

  it("locks the report at the market until the player has been to the pavilion", () => {
    const report = getChoices(getScene(story, "market_return"), createGame(story)).find((v) => v.choice.id === "report_pavilion_to_jade_eye");
    expect(report?.available).toBe(false);
    expect(report?.hint).toMatch(/stone tables/);
  });

  it("gives the pavilion’s debt and the wardens a page each, within the cap", () => {
    for (const id of ["pavilion_gate", "pavilion_table", "pavilion_cheat", "pavilion_challenge", "pavilion_bo_lan", "pavilion_debt", "pavilion_wardens"]) {
      expect(sceneBodyWords(getScene(story, id)), id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
    }
  });

  it("notices a run of hidden things in the archive report", () => {
    const state = deciding("archive_reading_room_2", { ...createGame(story), tones: ["deceit", "deceit", "deceit"] });
    const after = through(state, ["close_book", "tell_everything_in_order"]);
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("You have kept something hidden"))).toBe(true);
  });

  it("speaks to a run of plain answers under the masters’ eyes", () => {
    const state = deciding("tribunal_masters_2", { ...createGame(story), tones: ["truth", "truth", "truth"] });
    const after = through(state, ["ask_masters_question", "describe_archive_fully"]);
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("Three plain answers before the bell"))).toBe(true);
  });

  it("notices a run of waiting and walking past things at the shrine", () => {
    const state = deciding("shrine_vigil_2", { ...createGame(story), tones: ["quiet", "quiet", "quiet"] });
    const after = pick(state, "pinch_out_the_incense");
    expect(after.log.some((e) => e.kind === "npc" && e.text.startsWith("You have walked past things"))).toBe(true);
  });
});

describe("the side paths of the new scenes", () => {
  const fresh = (extra: Partial<GameState> = {}): GameState => ({ ...createGame(story), ...extra });

  it("walks the foothill village from the mission, hears the levy, and reports it to the Elder", () => {
    const route = [
      "ask_village_leave", "ask_gu_house", "knock_on_lotus_door", "ask_for_the_letter",
      "step_between_wardens", "carry_message_home", "report_village_to_jade_eye",
    ];
    const after = through(at("mission"), route);
    expect(after.sceneId).toBe("abyss_entry");
    expect(after.flags.visited_village).toBe(true);
    expect(after.flags.wardens_searched_house).toBe(true);
    expect(after.history).toEqual(["REQUEST_VILLAGE", "REPORT_VILLAGE"]);
  });

  it("lets the Elder answer a request for the village with a memory of the name the gate disciple gave", () => {
    const after = pick(deciding("mission", fresh({ flags: { knows_gu_name: true } })), "ask_village_leave");
    expect(reactionLine(after)).toBe(story.scenarios.REQUEST_VILLAGE.memory?.[0].line);
  });

  it("lets the Elder remember the second list when the player brings it back from the village", () => {
    const state = deciding("village_return", fresh({ flags: { found_hidden_list: true, took_hidden_list: true } }));
    const after = pick(state, "report_village_to_jade_eye");
    expect(reactionLine(after)).toBe(story.scenarios.REPORT_VILLAGE.memory?.[1].line);
  });

  it("digs the quarry from the vault, rescues the miner, and reports the cut to the reading room", () => {
    const route = [
      "follow_jade_vein", "ask_who_cut_here", "ask_kang_for_wages", "say_his_name_aloud",
      "help_dig_out", "ask_ah_tong_fourteen", "report_quarry_to_jade_eye",
    ];
    const after = through(at("archive_vault_2"), route);
    expect(after.sceneId).toBe("archive_reading_room");
    expect(after.flags.quarry_rescued_miner).toBe(true);
    expect(after.history.at(-1)).toBe("REPORT_QUARRY");
  });

  it("takes the healer’s bitter root to the boy on the board, and reports the calm dust", () => {
    const route = [
      "follow_bitter_smell", "walk_into_courtyard", "sit_by_the_board", "ask_what_calm_dust_is",
      "lift_cup_to_lips", "sing_mothers_song", "report_healer_to_jade_eye",
    ];
    const after = through(at("market_lane"), route);
    expect(after.sceneId).toBe("market_return");
    expect(after.flags.knows_calm_dust).toBe(true);
    expect(after.history.at(-1)).toBe("REPORT_HEALER");
  });

  it("climbs the eastern peak, learns the breath, and reports the old master’s bargain", () => {
    const route = [
      "climb_to_hermit", "climb_cut_steps", "eat_cold_rice", "set_down_thing_bottom",
      "ask_which_girl_was_which", "breathe_with_water", "report_hermit_to_jade_eye",
    ];
    const after = through(at("abyss_truth"), route);
    expect(after.sceneId).toBe("return_hall");
    expect(after.flags.heard_lu_ming_sisters).toBe(true);
    expect(after.history).toEqual(["ASK_HERMIT", "REPORT_HERMIT"]);
  });

  it("answers a climb to the hermit with her memory of the player’s run of lies", () => {
    const after = pick(deciding("abyss_truth", fresh({ tones: ["deceit", "deceit", "deceit"] })), "climb_to_hermit");
    expect(reactionLine(after)).toBe(story.scenarios.ASK_HERMIT.memory?.[0].line);
  });

  it("reaches the secret first page of the sutra only by the mirror in the cave", () => {
    const route = ["climb_to_hermit", "look_for_carved_cave", "read_old_script", "touch_mirror_water"];
    const after = through(at("abyss_truth"), route);
    expect(after.sceneId).toBe("hermit_secret_scroll");
  });

  it("crosses the Cloud Gap bridge, helps a boy across, and reports the names to the tribunal", () => {
    const route = [
      "cross_cloud_bridge", "walk_to_disciples", "coach_bo_tian", "reach_out_boy",
      "sing_village_names", "finish_boy_names", "report_bridge_to_jade_eye",
    ];
    const after = through(at("jade_eye_bell_2"), route);
    expect(after.sceneId).toBe("tribunal_summons");
    expect(after.flags.bridge_helped_boy).toBe(true);
    expect(after.history.at(-1)).toBe("REPORT_BRIDGE");
  });

  it("gives the Cloud Gap report its memory of a boy helped and a disciple caught", () => {
    const state = deciding("bridge_return", fresh({ flags: { bridge_helped_boy: true, bridge_caught_fall: true } }));
    const after = pick(state, "report_bridge_to_jade_eye");
    expect(reactionLine(after)).toBe(story.scenarios.REPORT_BRIDGE.memory?.[0].line);
  });

  it("gives every scene a heading of its own", () => {
    for (const scene of Object.values(story.scenes)) {
      expect(scene.title.trim().length, scene.id).toBeGreaterThan(0);
    }
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
  realm: number;
  wealth: number;
  decisions: number;
  /** Percent through the realm that the choice asks for, or zero. */
  progress: number;
} {
  const scene = Object.values(story.scenes).find((s) => s.choices.some((c) => c.npcScenario === scenarioId || c.allyScenario === scenarioId));
  if (!scene) throw new Error(`no scene uses ${scenarioId}`);
  const choice = scene.choices.find((c) => c.npcScenario === scenarioId || c.allyScenario === scenarioId)!;
  const stats: Partial<PlayerStats> = {};
  const npc: Partial<NpcState> = {};
  let realm = 0;
  let wealth = 0;
  let decisions = 0;
  let progress = 0;
  for (const c of choice.requires ?? []) {
    if (c.kind === "realm" && c.min !== undefined) realm = Math.max(realm, c.min);
    if (c.kind === "stat" && c.min !== undefined) stats[c.stat] = c.min;
    if (c.kind === "stat" && c.max !== undefined && c.min === undefined) stats[c.stat] = c.max;
    if (c.kind === "npc" && c.min !== undefined) npc[c.metric] = c.min;
    if (c.kind === "wealth" && c.min !== undefined) wealth = Math.max(wealth, c.min);
    if (c.kind === "decisions" && c.min !== undefined) decisions = Math.max(decisions, c.min);
    if (c.kind === "progress" && c.min !== undefined) progress = Math.max(progress, c.min);
  }
  return { sceneId: scene.id, choiceId: choice.id, flags: flagsFor(choice), stats, npc, realm, wealth, decisions, progress };
}

/** The cultivation points that put a hero `progress` percent of the way through `realm`. */
function cultivationAt(realm: number, progress: number): number {
  const here = REALMS[realm].threshold;
  const next = REALMS[realm + 1]?.threshold ?? here;
  return here + Math.ceil(((next - here) * progress) / 100);
}
