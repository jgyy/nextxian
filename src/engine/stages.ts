import { daoRankOf } from "./path";
import { preparedFor } from "./tribulation";
import { REALMS, STAGES_PER_REALM, TOP_SPAN } from "./realms";
import { LAYERS, ORDINALS } from "./stage-text";
import type { GameState } from "./types";

/**
 * The ladder in full: ten major realms of ten layers each, a hundred levels from the First Layer of Mortal (level 0) to the Tenth Layer of Dao Sovereign (level 99).
 * A level is `realm * 10 + layer`. Every step up is a wall: the hero needs the points, the qi and the insight to push at it, and then a steadiness that beats the wall’s
 * difficulty. A hero who falls short is thrown back and learns the wall a little better; one who comes through is told what it was like.
 */
export const LEVELS = REALMS.length * STAGES_PER_REALM;
export const TOP_LEVEL = LEVELS - 1;

/** The shape of a realm’s layers: the later layers are wider, so the tenth is a long climb. */
const CURVE = 1.4;

const round2 = (n: number) => Math.round(n * 100) / 100;

export const levelOf = (realm: number, layer: number) => realm * STAGES_PER_REALM + layer;
export const realmOfLevel = (level: number) => Math.floor(level / STAGES_PER_REALM);
export const layerOfLevel = (level: number) => level % STAGES_PER_REALM;

/** The points that enter a level. Level 100 stands for the top of the ladder. */
export function levelThreshold(level: number): number {
  if (level <= 0) return 0;
  if (level >= LEVELS) return REALMS[REALMS.length - 1].threshold + TOP_SPAN;
  const r = realmOfLevel(level);
  const s = layerOfLevel(level);
  const here = REALMS[r].threshold;
  const next = r + 1 < REALMS.length ? REALMS[r + 1].threshold : here + TOP_SPAN;
  return round2(here + (next - here) * Math.pow(s / STAGES_PER_REALM, CURVE));
}

/** The highest layer of a realm whose points the hero has reached. */
export function layerForPoints(realm: number, points: number): number {
  let layer = 0;
  for (let s = 1; s < STAGES_PER_REALM; s++) if (points >= levelThreshold(levelOf(realm, s))) layer = s;
  return layer;
}

type Standing = Pick<GameState, "realm" | "cultivation"> & { level?: number };

/**
 * The level a hero stands at. It is the level the game last wrote down, as long as that level belongs to the hero’s realm and the hero’s points are those of that
 * level or the next one; if a save, a test or a jump in points has left the two apart, the points decide.
 */
export function levelNow(state: Standing): number {
  const { realm, cultivation, level } = state;
  if (level !== undefined && realmOfLevel(level) === realm && level >= 0 && level < LEVELS) {
    if (cultivation >= levelThreshold(level) - 0.005 && cultivation < levelThreshold(Math.min(level + 2, LEVELS))) return level;
  }
  return levelOf(realm, layerForPoints(realm, cultivation));
}

export const layerNow = (state: Standing): number => layerOfLevel(levelNow(state));

/** The most points a hero can hold at a level: they cannot pile up more than a wall ahead, so a hero never skips a wall by gathering. */
export const pointsCap = (level: number): number => (level >= TOP_LEVEL ? levelThreshold(LEVELS) : round2(levelThreshold(level + 2) - 0.01));

/** How far through the hero’s layer they are, from 0 to 1. */
export function levelProgress(state: Standing): number {
  const level = levelNow(state);
  if (level >= TOP_LEVEL) return 1;
  const here = levelThreshold(level);
  const next = levelThreshold(level + 1);
  return Math.min(1, Math.max(0, (state.cultivation - here) / (next - here)));
}

/** “Qi Condensation, Third Layer”. */
export function layerTitle(level: number): string {
  const l = Math.min(Math.max(level, 0), TOP_LEVEL);
  return `${REALMS[realmOfLevel(l)].name}, ${ORDINALS[layerOfLevel(l)]} Layer`;
}

/** The name of the layer on its own: “Braid”. */
export const layerName = (level: number): string => LAYERS[realmOfLevel(level)][layerOfLevel(level)][0];

/** The wall above a level, as a paragraph. The last level has no wall above it; its text says what stands where the ladder ends. */
export const wallText = (level: number): string => LAYERS[realmOfLevel(level)][layerOfLevel(level)][1];
export const winText = (level: number): string => LAYERS[realmOfLevel(level)][layerOfLevel(level)][2];
export const failText = (level: number): string => LAYERS[realmOfLevel(level)][layerOfLevel(level)][3];

/** True when the step into a level is a step into a new major realm. */
export const isMajor = (target: number): boolean => target > 0 && target % STAGES_PER_REALM === 0;

/** What the wall into `target` asks of the hero to push at it at all. */
export const wallQi = (target: number): number => 4 + Math.floor(target / 2);
export const wallInsight = (target: number): number => Math.floor(target / 3);

/** How hard the wall into `target` is. The first realm’s walls are the tutorial; from the second layer of Qi Condensation on they climb, and a major wall is harder than the layer below it. */
export function wallDifficulty(target: number): number {
  if (target <= 10) return 0;
  return Math.floor(((target - 10) * 2) / 9) + (isMajor(target) ? 2 : 0);
}

/** Flags the story sets when a hero prepares for a wall by one of four methods, and flags the engine sets when a wall throws a hero back. */
export const WALL_PREP_PREFIX = "bwp_";
export const WALL_FAIL_PREFIX = "bwf_";
export const WALL_HELD_PREFIX = "bwh_";
export const wallPrepFlag = (target: number, method: number) => `${WALL_PREP_PREFIX}${target}_${method}`;
export const wallFailFlag = (target: number, attempt: number) => `${WALL_FAIL_PREFIX}${target}_${attempt}`;
export const wallHeldFlag = (target: number) => `${WALL_HELD_PREFIX}${target}`;
/** A wall teaches at most this many times. */
export const MAX_FAILS = 8;
export const PREP_METHODS = 4;

const countFlags = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;
export const prepsFor = (flags: Record<string, boolean>, target: number) => countFlags(flags, `${WALL_PREP_PREFIX}${target}_`);
export const failsAt = (flags: Record<string, boolean>, target: number) => countFlags(flags, `${WALL_FAIL_PREFIX}${target}_`);

/** Every flag the engine can set for a wall, so the audit knows a condition that counts them can hold. */
export const engineWallFlags = (): string[] => {
  const out: string[] = [];
  for (let n = 1; n < LEVELS; n++) {
    out.push(wallHeldFlag(n));
    for (let k = 1; k <= MAX_FAILS; k++) out.push(wallFailFlag(n, k));
  }
  return out;
};

type Facing = Pick<GameState, "realm" | "cultivation" | "stats" | "flags" | "daoPoints" | "npc">;

export interface Steadiness {
  total: number;
  parts: { label: string; points: number }[];
}

/**
 * How steady the hero is in front of a wall: what their qi and insight have to spare, the Dao they have mastered, the methods they have practised against this very wall,
 * what earlier failures at it taught them, the Elder’s trust, a clean heart, and, for a major wall, the trial they have rehearsed.
 */
export function steadiness(state: Facing, target: number): Steadiness {
  const parts: { label: string; points: number }[] = [];
  const add = (label: string, points: number) => {
    if (points !== 0) parts.push({ label, points });
  };
  add("qi to spare", Math.floor(Math.max(0, state.stats.qi - wallQi(target)) / 10));
  add("insight to spare", Math.floor(Math.max(0, state.stats.insight - wallInsight(target)) / 12));
  add("Dao mastery", daoRankOf(state.daoPoints ?? 0));
  add("methods practised at this wall", 2 * Math.min(prepsFor(state.flags, target), PREP_METHODS));
  add("lessons of earlier falls", 3 * Math.min(failsAt(state.flags, target), MAX_FAILS));
  add("the Elder’s trust", state.npc.trust >= 30 ? 1 : 0);
  if (target > 10) add("a clean heart", state.stats.karma >= 50 ? 1 : state.stats.karma <= -50 ? -2 : 0);
  if (isMajor(target)) add("the trial rehearsed", preparedFor(state.flags, target) ? 3 : 0);
  return { total: parts.reduce((n, p) => n + p.points, 0), parts };
}

/** What a hero is missing before they can push at the wall into `target`, in words, or undefined when they are ready. */
export function lacking(state: Pick<GameState, "stats">, target: number): string[] {
  const out: string[] = [];
  if (state.stats.qi < wallQi(target)) out.push(`${wallQi(target)} qi (you have ${state.stats.qi})`);
  if (state.stats.insight < wallInsight(target)) out.push(`${wallInsight(target)} insight (you have ${state.stats.insight})`);
  return out;
}

/** What the fall at a wall costs: some of the qi, and half the points that carried the hero to it. */
export const failQi = (target: number): number => 3 + Math.floor(target / 6);
export const toll = (target: number): number => 1 + Math.floor(target / 12);
export const STEADY_GAIN = 2;

/** The points a hero falls back to when a wall throws them: halfway between the floor of their layer and the wall. */
export function fallBack(level: number): number {
  const floor = levelThreshold(level);
  const wall = levelThreshold(level + 1);
  return round2(wall - Math.ceil((wall - floor) / 2));
}

export type WallVerdict = { kind: "none" } | { kind: "held"; target: number; missing: string[] } | { kind: "thrown"; target: number; attempt: number } | { kind: "through"; target: number };

/** What would happen if a hero at `state` pushed at the wall above them now, without changing anything. */
export function verdict(state: Facing & { level?: number }): WallVerdict {
  const level = levelNow(state);
  const target = level + 1;
  if (target >= LEVELS) return { kind: "none" };
  const missing = lacking(state, target);
  if (missing.length > 0) return { kind: "held", target, missing };
  const s = steadiness(state, target);
  if (s.total >= wallDifficulty(target)) return { kind: "through", target };
  return { kind: "thrown", target, attempt: Math.min(MAX_FAILS, failsAt(state.flags, target) + 1) };
}
