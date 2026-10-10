import { gainCultivation, TONE_GAIN } from "./cultivation";
import {
  conditionsHold,
  mannerShiftLine,
  moodFor,
  moodShiftLine,
  realmShiftLine,
  reactToScenario,
  respectShiftLine,
  respectTierFor,
  tierFor,
  tierShiftLine,
} from "./npc";
import type {
  Choice,
  ChoiceView,
  Effect,
  GameState,
  LogEntry,
  NpcMetric,
  NpcState,
  PlayerStat,
  PlayerStats,
  Scene,
  Story,
} from "./types";

export const STAT_RANGE: Record<PlayerStat, [number, number]> = {
  qi: [0, 100],
  karma: [-100, 100],
  insight: [0, 100],
};

export const NPC_RANGE: Record<NpcMetric, [number, number]> = {
  trust: [-100, 100],
  respect: [-100, 100],
  fear: [0, 100],
  suspicion: [0, 100],
};

export const INITIAL_STATS: PlayerStats = { qi: 20, karma: 0, insight: 10 };
export const INITIAL_NPC: NpcState = { trust: 0, respect: 0, fear: 10, suspicion: 30 };

export function clamp(value: number, [lo, hi]: [number, number]): number {
  return Math.min(hi, Math.max(lo, value));
}

export function getScene(story: Story, id: string): Scene {
  const scene = story.scenes[id];
  if (!scene) throw new Error(`Unknown scene "${id}"`);
  return scene;
}

/** Starts a new game at the story's opening scene. */
export function createGame(story: Story): GameState {
  const empty: GameState = {
    sceneId: story.startSceneId,
    stats: { ...INITIAL_STATS },
    npc: { ...INITIAL_NPC },
    flags: {},
    history: [],
    tones: [],
    cultivation: 0,
    realm: 0,
    log: [],
    visited: [],
  };
  return enterScene(story, empty, getScene(story, story.startSceneId));
}

/**
 * Appends a scene's text to the log and records it as visited. Extra paragraphs
 * and NPC interjections are added only when their conditions hold, so the NPC
 * can speak up about what the player has become.
 */
function enterScene(story: Story, state: GameState, scene: Scene): GameState {
  const extra = (scene.extras ?? [])
    .filter((x) => conditionsHold(x.when, state))
    .flatMap((x) => x.paragraphs);
  const interjections = (scene.interjections ?? [])
    .filter((x) => conditionsHold(x.when, state))
    .map((x) => ({ kind: "npc" as const, speaker: story.npc.name, text: x.line }));
  const log = [
    ...state.log,
    { kind: "heading" as const, text: scene.title },
    ...[...scene.paragraphs, ...extra].map((text) => ({ kind: "narration" as const, text })),
    ...interjections,
  ];
  return { ...state, sceneId: scene.id, log, visited: [...state.visited, scene.id] };
}

export function applyEffects(state: GameState, effects: Effect[] = []): GameState {
  return effects.reduce<GameState>((s, effect) => {
    switch (effect.kind) {
      case "setFlag":
        return { ...s, flags: { ...s.flags, [effect.flag]: effect.value ?? true } };
      case "addStat": {
        const value = clamp(s.stats[effect.stat] + effect.amount, STAT_RANGE[effect.stat]);
        return { ...s, stats: { ...s.stats, [effect.stat]: value } };
      }
      case "addCultivation":
        return { ...s, cultivation: s.cultivation + effect.amount };
      case "addNpc": {
        const value = clamp(s.npc[effect.metric] + effect.amount, NPC_RANGE[effect.metric]);
        return { ...s, npc: { ...s.npc, [effect.metric]: value } };
      }
    }
  }, state);
}

/** Lists every choice in the current scene, with locked ones marked and explained. */
export function getChoices(scene: Scene, state: GameState): ChoiceView[] {
  return scene.choices.map((choice) => {
    const available = conditionsHold(choice.requires, state);
    return {
      choice,
      available,
      hint: available ? undefined : (choice.lockedHint ?? "Not available yet."),
    };
  });
}

/**
 * Applies the player's choice: logs it, records its tone, lets the NPC react, applies
 * effects, then enters the next scene. Throws if the choice is unknown or locked.
 */
export function choose(story: Story, state: GameState, choiceId: string): GameState {
  const scene = getScene(story, state.sceneId);
  const choice: Choice | undefined = scene.choices.find((c) => c.id === choiceId);
  if (!choice) throw new Error(`Unknown choice "${choiceId}" in scene "${scene.id}"`);
  if (!conditionsHold(choice.requires, state)) {
    throw new Error(`Choice "${choiceId}" is locked`);
  }

  let next: GameState = {
    ...state,
    log: [...state.log, { kind: "player", text: choice.label }],
    tones: [...state.tones, choice.tone],
  };

  if (choice.npcScenario) {
    const scenario = story.scenarios[choice.npcScenario];
    if (!scenario) throw new Error(`Unknown NPC scenario "${choice.npcScenario}"`);
    const reaction = reactToScenario(scenario, next);
    next = {
      ...next,
      log: [
        ...next.log,
        { kind: "npc", speaker: story.npc.name, text: reaction.line },
      ],
      npc: applyNpcDelta(next.npc, scenario.delta),
      flags: {
        ...next.flags,
        ...Object.fromEntries((scenario.remember ?? []).map((f) => [f, true])),
      },
      history: [...next.history, scenario.id],
    };
  }

  next = applyEffects(next, choice.effects);
  next = gainCultivation(next, TONE_GAIN[choice.tone]);
  next = noticeAttitude(story, state, next);
  return enterScene(story, next, getScene(story, choice.next));
}

/**
 * If the choice carried the player into a higher cultivation realm, she says so first. Otherwise,
 * if the choice moved the Elder to another attitude tier, she says so. If only her
 * face changed, because fear or suspicion took hold or let go, she says that instead.
 * If her respect for the player moved into another band, she says so. If the player's
 * manner has settled on a new tone, she names it. Only one of these is said per choice.
 * The line goes after her reply, so it is the last thing the player reads before the
 * next scene.
 */
function noticeAttitude(story: Story, before: GameState, after: GameState): GameState {
  const line =
    realmShiftLine(before.realm, after.realm) ??
    tierShiftLine(tierFor(before.npc.trust), tierFor(after.npc.trust)) ??
    moodShiftLine(moodFor(before.npc), moodFor(after.npc)) ??
    respectShiftLine(respectTierFor(before.npc.respect), respectTierFor(after.npc.respect)) ??
    mannerShiftLine(before.tones, after.tones);
  if (!line) return after;
  return { ...after, log: [...after.log, { kind: "npc", speaker: story.npc.name, text: line }] };
}

export function applyNpcDelta(npc: NpcState, delta: Partial<NpcState>): NpcState {
  const out = { ...npc };
  for (const key of Object.keys(delta) as NpcMetric[]) {
    out[key] = clamp(npc[key] + (delta[key] ?? 0), NPC_RANGE[key]);
  }
  return out;
}

/**
 * The part of the log the visual novel stage shows. It starts at the player's
 * latest choice, so earlier scenes stay out of view until the player opens the
 * backlog. Before any choice, it starts at the first scene.
 */
export function currentBeat(log: LogEntry[]): LogEntry[] {
  for (let i = log.length - 1; i >= 0; i--) {
    if (log[i].kind === "player") return log.slice(i);
  }
  return log;
}
