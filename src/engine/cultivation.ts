import { lifespanNote } from "./age";
import { DEFAULT_HERO } from "./hero";
import { heartDemonKarmaFor, strainFactor } from "./path";
import { daoArrival, talentArrival } from "./path-text";
import { REALMS } from "./realms";
import { failQi, failText, fallBack, failsAt, isMajor, lacking, layerName, layerOfLevel, LEVELS, levelNow, levelThreshold, MAX_FAILS, pointsCap, prepsFor, realmOfLevel, STEADY_GAIN, steadiness, toll, wallDifficulty, wallFailFlag, wallHeldFlag, wallText, winText } from "./stages";
import { ORDINALS } from "./stage-text";
import { breakthroughQi, breakthroughRespect, skyLine } from "./tribulation";
import { mendingOf, seclusionLine, seclusionOf, spanLabel, tidyDays, unitOf } from "./time";
import type { ChoiceTone, GameState } from "./types";

export { REALMS, STAGES_PER_REALM } from "./realms";
export type { Realm } from "./realms";

/** Cultivation points every decision brings, by tone. Patience and study cultivate; force and lies only scrape. */
export const TONE_GAIN: Record<ChoiceTone, number> = {
  quiet: 2,
  inquiry: 2,
  truth: 2,
  mercy: 2,
  force: 1,
  deceit: 1,
};

/** From this realm upward, a heart demon holds back anyone whose karma has sunk too low. */
export const HEART_DEMON_FROM = 3;
export const HEART_DEMON_KARMA = -30;

/** The flag the engine sets on the decision a hero enters a realm, so that a scene can tell a hero who has just broken through from one who has long stood there. */
export const reachedFlag = (realm: number) => `reached_realm_${realm}`;
export const REACHED_PREFIX = "reached_realm_";

/** The highest realm whose threshold the points reach, ignoring the heart demon. */
export function realmForPoints(points: number): number {
  let index = 0;
  REALMS.forEach((r, i) => {
    if (points >= r.threshold) index = i;
  });
  return index;
}

/** True when the player has the points for the next realm but their karma holds them back. */
export function heartDemonBlocks(state: Pick<GameState, "cultivation" | "realm" | "stats"> & Partial<Pick<GameState, "hero">>): boolean {
  const next = state.realm + 1;
  if (next >= REALMS.length || next < HEART_DEMON_FROM) return false;
  return state.cultivation >= REALMS[next].threshold && state.stats.karma < heartDemonKarmaFor(state.hero ?? DEFAULT_HERO, HEART_DEMON_KARMA);
}

/** Points still needed for the next realm, or undefined at the top of the ladder. */
export function pointsToNext(state: Pick<GameState, "cultivation" | "realm">): number | undefined {
  const next = REALMS[state.realm + 1];
  return next ? Math.max(0, next.threshold - state.cultivation) : undefined;
}

/** Progress through the current realm, from 0 to 1. */
export function realmProgress(state: Pick<GameState, "cultivation" | "realm">): number {
  const here = REALMS[state.realm];
  const next = REALMS[state.realm + 1];
  if (!next) return 1;
  return Math.min(1, (state.cultivation - here.threshold) / (next.threshold - here.threshold));
}

/** The flag the engine sets on the decision a hero enters a layer, major or minor. `reached_realm_` flags are for the first layer of a realm only. */
export const LAYER_PREFIX = "reached_layer_";
export const reachedLayerFlag = (level: number) => `${LAYER_PREFIX}${level}`;

const clampQi = (qi: number) => Math.min(100, Math.max(0, qi));

/**
 * Adds points and breaks through at most one layer per call. The step into the next layer is a wall: the points must reach it, the hero must have the qi and insight
 * to push at it, and their steadiness must beat the wall’s difficulty. Held by a heart demon, or short of qi or insight, the hero keeps gathering (never more than a
 * wall beyond the one in front of them); thrown back, they lose qi and half the way to the wall and are a little steadier next time. Each outcome is its own log entry.
 */
export function gainCultivation(state: GameState, amount: number): GameState {
  const level = levelNow(state);
  const points = Math.round((state.cultivation + Math.max(0, amount)) * 100) / 100;
  const target = level + 1;
  const base: GameState = { ...state, cultivation: points, level };
  if (target >= LEVELS) return { ...base, cultivation: Math.min(points, pointsCap(level)) };
  if (points < levelThreshold(target)) return base;
  const held: GameState = { ...base, cultivation: Math.min(points, pointsCap(level)) };
  const major = isMajor(target);
  if (major && heartDemonBlocks(base)) return held;
  const missing = lacking(base, target);
  if (missing.length > 0) {
    if (base.flags[wallHeldFlag(target)]) return held;
    const text = `${wallText(level)} But it asks ${missing.join(" and ")} of you, and you cannot push at it yet.`;
    return {
      ...held,
      flags: { ...held.flags, [wallHeldFlag(target)]: true },
      flagAt: { ...held.flagAt, [wallHeldFlag(target)]: held.decisions },
      log: [...held.log, { kind: "wall", text: `You come to the wall above your ${ORDINALS[layerOfLevel(level)]} Layer. ${text}` }],
    };
  }
  const steady = steadiness(base, target);
  if (steady.total < wallDifficulty(target)) {
    const attempt = Math.min(MAX_FAILS, failsAt(base.flags, target) + 1);
    const back = fallBack(level);
    const lostQi = Math.min(base.stats.qi, failQi(target));
    const flag = wallFailFlag(target, attempt);
    return {
      ...base,
      cultivation: Math.min(points, back),
      // The mending takes days, and the calendar counts them.
      days: tidyDays((base.days ?? 0) + mendingOf(base.realm)),
      stats: { ...base.stats, qi: clampQi(base.stats.qi - failQi(target)) },
      flags: { ...base.flags, [flag]: true },
      flagAt: { ...base.flagAt, [flag]: base.decisions },
      log: [
        ...base.log,
        {
          kind: "wall",
          text: `The wall holds. ${failText(level)} You fall back and lose ${lostQi} qi, and the wall is a little better known to you.${attempt > 1 ? ` It has thrown you ${attempt} times.` : ""} The mending takes ${spanLabel(mendingOf(base.realm))}.`,
        },
      ],
    };
  }
  const reached = reachedLayerFlag(target);
  if (!major) {
    const prepared = prepsFor(base.flags, target) > 0;
    const realm = REALMS[state.realm];
    return {
      ...base,
      level: target,
      cultivation: Math.min(points, pointsCap(target)),
      stats: { ...base.stats, qi: clampQi(base.stats.qi + (prepared ? STEADY_GAIN : -toll(target))) },
      flags: { ...base.flags, [reached]: true },
      flagAt: { ...base.flagAt, [reached]: base.decisions },
      log: [...base.log, { kind: "realm", text: `Breakthrough: ${realm.name}, ${ORDINALS[layerOfLevel(target)]} Layer (${layerName(target)}). ${winText(level)}` }],
    };
  }
  const next = realmOfLevel(target);
  // The sky tries every breakthrough. A hero who sat its trial on the road comes through steadied and respected; one who did not is scorched.
  const sky = skyLine(base.flags, next);
  return {
    ...base,
    realm: next,
    level: target,
    // A breakthrough into a realm is a retreat with the door shut, and the door stays shut as long as the realm’s own retreat.
    days: tidyDays((base.days ?? 0) + seclusionOf(next)),
    cultivation: Math.min(points, pointsCap(target)),
    stats: { ...base.stats, qi: clampQi(base.stats.qi + breakthroughQi(base.flags, next)) },
    npc: { ...base.npc, respect: Math.min(100, base.npc.respect + breakthroughRespect(base.flags, next)) },
    flags: { ...base.flags, [reachedFlag(next)]: true, [reached]: true },
    flagAt: { ...base.flagAt, [reachedFlag(next)]: base.decisions, [reached]: base.decisions },
    log: [
      ...base.log,
      { kind: "realm", text: `Breakthrough: ${REALMS[next].name}. ${winText(level)} ${REALMS[next].arrival}${sky ? ` ${sky}` : ""}${breakthroughNotes(base, next)} ${seclusionLine(next)}` },
    ],
  };
}

/** What the hero’s roots, and their Dao, add to the breakthrough line when they enter a realm: a sentence for each, with a leading space. */
export function breakthroughNotes(state: Pick<GameState, "hero"> & Partial<Pick<GameState, "years">>, realm: number): string {
  const hero = state.hero ?? DEFAULT_HERO;
  return [talentArrival(hero.talent, realm), daoArrival(hero.dao, realm), lifespanNote(realm, state.years), unitOf(realm).sense].filter(Boolean).map((t) => ` ${t}`).join("");
}

/**
 * What it costs to try a choice that asks for a realm the player has not reached. Cultivation is lost (never below the
 * floor of the realm already won), qi drains, and the Elder's respect drops, per realm of shortfall.
 */
export const STRAIN_CULTIVATION = 10;
export const STRAIN_QI = 12;
export const STRAIN_RESPECT = 3;

/** A player this many realms above what a choice asks of them does it with ease, and gains a little from it. */
export const MASTERY_GAP = 2;
export const MASTERY_GAIN = 3;

/** How many realms short the player is of a requirement. Zero or less means they have it. */
export function realmShortfall(realm: number, needs: number | undefined): number {
  return needs === undefined ? 0 : Math.max(0, needs - realm);
}

/** How many realms above the requirement the player stands, or zero. */
export function realmSurplus(realm: number, needs: number | undefined): number {
  return needs === undefined ? 0 : Math.max(0, realm - needs);
}

/** The line shown when the player pushes past their realm. */
export function strainLine(needs: number, realm: number): string {
  const asked = REALMS[Math.min(needs, REALMS.length - 1)].name;
  const have = REALMS[realm].name;
  return `This asks for ${asked}, and you are only ${have}. The attempt tears at your qi and loses you ground.`;
}

/** Applies the cost of straining. Cultivation stops at the floor of the realm already won, so a failed push never undoes a breakthrough. */
export function applyStrain(state: GameState, shortfall: number): GameState {
  const floor = levelThreshold(levelNow(state));
  const factor = strainFactor(state.hero ?? DEFAULT_HERO);
  const lost = Math.max(0, Math.min(state.cultivation - floor, Math.round(STRAIN_CULTIVATION * shortfall * factor)));
  return {
    ...state,
    cultivation: state.cultivation - lost,
    stats: { ...state.stats, qi: Math.max(0, state.stats.qi - Math.round(STRAIN_QI * shortfall * factor)) },
    npc: { ...state.npc, respect: Math.max(-100, state.npc.respect - Math.round(STRAIN_RESPECT * shortfall * factor)) },
    log: [...state.log, { kind: "strain" as const, text: strainLine(state.realm + shortfall, state.realm) }],
  };
}
