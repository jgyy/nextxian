import { DEFAULT_HERO, HERO_FIELDS, personalise, realmBandFor, startFor, type Hero } from "./hero";
import { applyAid, cultivationSpeed, giveItem, isUnfed, payday, PAYDAY_EVERY, scaled, startingWealth, takeItem, tidy } from "./economy";
import { applyStrain, gainCultivation, MASTERY_GAIN, MASTERY_GAP, realmShortfall, realmSurplus, TONE_GAIN } from "./cultivation";
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
  NpcScenario,
  Scene,
  Story,
  Tier as NpcTier,
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
export const BOND_RANGE: [number, number] = [-100, 100];

/** Decisions that must pass between one unprompted remark and the next. */
export const REMARK_GAP = 3;

/** Decisions that must pass between one remark about the hero's looks, dress or birth and the next. */
export const ASIDE_GAP = 3;
/** She does not comment on the hero before this many decisions have been made: first she listens. */
export const ASIDE_START = 4;

export const INITIAL_NPC: NpcState = { trust: 0, respect: 0, fear: 10, suspicion: 30 };

export function clamp(value: number, [lo, hi]: [number, number]): number {
  return Math.min(hi, Math.max(lo, value));
}

/** The name shown for a speaker: a companion's id gives their name, and no id means the Elder. */
export function speakerName(story: Story, id?: string): string {
  return (id && story.companions?.[id]?.name) || story.npc.name;
}

export function getScene(story: Story, id: string): Scene {
  const scene = story.scenes[id];
  if (!scene) throw new Error(`Unknown scene "${id}"`);
  return scene;
}

/**
 * Starts a new game at the story's opening scene. Who the hero is sets the opening numbers a little:
 * a scholar starts with more insight, a noble in silk with a more suspicious Elder.
 */
export function createGame(story: Story, hero: Hero = DEFAULT_HERO): GameState {
  const start = startFor(hero);
  const stats = { ...INITIAL_STATS };
  for (const key of Object.keys(start.stats) as PlayerStat[]) stats[key] = clamp(stats[key] + (start.stats[key] ?? 0), STAT_RANGE[key]);
  const npc = applyNpcDelta({ ...INITIAL_NPC }, start.npc);
  const empty: GameState = {
    hero,
    sceneId: story.startSceneId,
    stats,
    npc,
    flags: {},
    history: [],
    tones: [],
    cultivation: 0,
    realm: 0,
    bonds: {},
    wealth: startingWealth(hero),
    items: {},
    assets: [],
    speed: 100,
    unfed: false,
    decisions: 0,
    flagAt: {},
    remarked: [],
    lastRemark: -REMARK_GAP,
    lastAside: -ASIDE_GAP,
    log: [],
    visited: [],
  };
  return enterScene(story, settle(story, empty), getScene(story, story.startSceneId));
}

/** Works out the numbers that depend on everything the hero has: cultivation speed and whether they are Unfed. */
export function settle(story: Story, state: GameState): GameState {
  const speed = cultivationSpeed(story, state);
  const unfed = isUnfed(story, state);
  return speed === state.speed && unfed === state.unfed ? state : { ...state, speed, unfed };
}

/**
 * Appends a scene's text to the log and records it as visited. Extra paragraphs
 * and NPC interjections are added only when their conditions hold, so the NPC
 * can speak up about what the player has become.
 */
export function enterScene(story: Story, state: GameState, scene: Scene): GameState {
  const taken = new Set<string>();
  const extra = (scene.extras ?? [])
    .filter((x) => {
      if (!conditionsHold(x.when, state)) return false;
      if (x.group === undefined) return true;
      if (taken.has(x.group)) return false;
      taken.add(x.group);
      return true;
    })
    .flatMap((x) => x.paragraphs);
  const interjections = (scene.interjections ?? [])
    .filter((x) => conditionsHold(x.when, state))
    .map((x) => ({ kind: "npc" as const, speaker: speakerName(story, x.speaker), text: personalise(x.line, state.hero) }));
  const log = [
    ...state.log,
    { kind: "heading" as const, text: scene.title },
    ...[...scene.paragraphs, ...extra].map((text) => ({ kind: "narration" as const, text: personalise(text, state.hero) })),
    ...interjections,
  ];
  return { ...state, sceneId: scene.id, log, visited: [...state.visited, scene.id] };
}

/** Applies a choice's effects. `speed` is the hero's cultivation speed in percent; cultivation points they earn are scaled by it. */
export function applyEffects(state: GameState, effects: Effect[] = [], speed = 100): GameState {
  return effects.reduce<GameState>((s, effect) => {
    switch (effect.kind) {
      case "setFlag": {
        const on = effect.value ?? true;
        const fresh = on && s.flags[effect.flag] !== true;
        return {
          ...s,
          flags: { ...s.flags, [effect.flag]: on },
          flagAt: fresh ? { ...s.flagAt, [effect.flag]: s.decisions } : s.flagAt,
        };
      }
      case "addBond": {
        const value = clamp((s.bonds[effect.npc] ?? 0) + effect.amount, BOND_RANGE);
        return { ...s, bonds: { ...s.bonds, [effect.npc]: value } };
      }
      case "addStat": {
        const value = clamp(s.stats[effect.stat] + effect.amount, STAT_RANGE[effect.stat]);
        return { ...s, stats: { ...s.stats, [effect.stat]: value } };
      }
      case "addCultivation":
        return { ...s, cultivation: tidy(s.cultivation + scaled(effect.amount, speed)) };
      case "addWealth":
        return { ...s, wealth: Math.max(0, s.wealth + effect.amount) };
      case "giveItem":
        return { ...s, items: giveItem(s.items, effect.item, effect.count) };
      case "takeItem":
        return { ...s, items: takeItem(s.items, effect.item, effect.count) };
      case "grantAsset":
        return s.assets.includes(effect.asset) ? s : { ...s, assets: [...s.assets, effect.asset] };
      case "loseAsset":
        return { ...s, assets: s.assets.filter((a) => a !== effect.asset) };
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
    const gap = realmShortfall(state.realm, choice.needsRealm);
    return {
      choice,
      available,
      hint: available ? undefined : (choice.lockedHint ?? "Not available yet."),
      ...(gap > 0 && choice.needsRealm !== undefined ? { strain: { needs: choice.needsRealm, gap } } : {}),
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
    log: [...state.log, { kind: "player", text: personalise(choice.label, state.hero) }],
    tones: [...state.tones, choice.tone],
    decisions: state.decisions + 1,
  };

  let spoke = false;
  for (const id of [choice.npcScenario, choice.allyScenario]) {
    if (!id) continue;
    const scenario = story.scenarios[id];
    if (!scenario) throw new Error(`Unknown NPC scenario "${id}"`);
    next = react(story, next, scenario);
    spoke = true;
  }

  // Speed is read after the reply and before the effects: a tool bought in this choice quickens the next, not this one.
  const speed = cultivationSpeed(story, next);
  next = applyEffects(next, choice.effects, speed);
  const shortfall = realmShortfall(state.realm, choice.needsRealm);
  if (shortfall > 0) next = applyStrain(next, shortfall);
  const mastery = realmSurplus(state.realm, choice.needsRealm) >= MASTERY_GAP ? MASTERY_GAIN : 0;
  // Walking back to a scene already seen teaches nothing, so shuttling between two hubs cannot farm cultivation.
  const fresh = !state.visited.includes(choice.next);
  next = gainCultivation(next, scaled((fresh ? TONE_GAIN[choice.tone] : 0) + mastery, speed));
  next = applyAid(story, next);
  if (next.decisions % PAYDAY_EVERY === 0) next = payday(story, next);
  const beforeAttitude = next.log.length;
  next = noticeAttitude(story, state, next);
  spoke = spoke || next.log.length > beforeAttitude;
  const entered = enterScene(story, settle(story, next), getScene(story, choice.next));
  return spoke ? entered : remark(story, entered);
}

/** One NPC scenario: the line, the change in feeling, and what they remember. A companion's scenario moves their bond. */
function react(story: Story, state: GameState, scenario: NpcScenario): GameState {
  const reaction = reactToScenario(scenario, state);
  const entry = { kind: "npc" as const, speaker: speakerName(story, scenario.npc), text: personalise(reaction.line, state.hero) };
  const remembered = (scenario.remember ?? []).filter((f) => state.flags[f] !== true);
  const base: GameState = {
    ...state,
    log: [...state.log, entry],
    flags: { ...state.flags, ...Object.fromEntries((scenario.remember ?? []).map((f) => [f, true])) },
    flagAt: { ...state.flagAt, ...Object.fromEntries(remembered.map((f) => [f, state.decisions])) },
    history: [...state.history, scenario.id],
  };
  if (scenario.npc) {
    const amount = Object.values(scenario.delta).reduce((n, v) => n + (v ?? 0), 0);
    return applyEffects(base, [{ kind: "addBond", npc: scenario.npc, amount }]);
  }
  return aside(story, { ...base, npc: applyNpcDelta(base.npc, scenario.delta) }, reaction.tier);
}

/**
 * The Elder says what she sees of the hero: the dress, the birth, the face, the trade, the way they were named. It
 * follows her reply to a scenario, at most once every few decisions, and cycles through the five parts of the
 * hero so that she is never repeating the same observation. Each observation is said once per attitude, so a
 * colder or warmer Elder has something new to say about the same silk.
 */
function aside(story: Story, state: GameState, tier: NpcTier): GameState {
  const table = story.asides;
  if (!table || state.decisions < ASIDE_START || state.decisions - state.lastAside < ASIDE_GAP) return state;
  const turn = state.remarked.filter((id) => id.startsWith("aside:")).length;
  // Five parts of the hero, and then how far they have risen. Her remark on the realm is new each time the band changes.
  const parts = [...HERO_FIELDS, "realm"] as const;
  for (let i = 0; i < parts.length; i++) {
    const field = parts[(turn + i) % parts.length];
    const value = field === "realm" ? realmBandFor(state.realm) : state.hero[field];
    const id = `aside:${field}:${value}:${tier}`;
    const line = (table as Record<string, Record<string, Record<NpcTier, string>> | undefined>)[field]?.[value]?.[tier];
    if (!line || state.remarked.includes(id)) continue;
    return {
      ...state,
      remarked: [...state.remarked, id],
      lastAside: state.decisions,
      log: [...state.log, { kind: "npc", speaker: story.npc.name, text: personalise(line, state.hero) }],
    };
  }
  return state;
}

/**
 * After the new scene is entered, somebody may speak up on their own: the first remark whose conditions hold,
 * if enough decisions have passed since the last one. A remark is said once, so nobody repeats themselves.
 */
function remark(story: Story, state: GameState): GameState {
  if (state.decisions - state.lastRemark < REMARK_GAP) return state;
  const found = (story.remarks ?? []).find((r) => !state.remarked.includes(r.id) && conditionsHold(r.when, state));
  if (!found) return state;
  return {
    ...state,
    remarked: [...state.remarked, found.id],
    lastRemark: state.decisions,
    log: [...state.log, { kind: "npc", speaker: speakerName(story, found.speaker), text: personalise(found.line, state.hero) }],
  };
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
  return { ...after, log: [...after.log, { kind: "npc", speaker: story.npc.name, text: personalise(line, after.hero) }] };
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
