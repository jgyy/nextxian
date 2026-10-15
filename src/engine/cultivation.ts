import { lifespanNote } from "./age";
import { DEFAULT_HERO } from "./hero";
import { heartDemonKarmaFor, strainFactor } from "./path";
import { daoArrival, talentArrival } from "./path-text";
import { breakthroughQi, breakthroughRespect, skyLine } from "./tribulation";
import type { ChoiceTone, GameState } from "./types";

export interface Realm {
  name: string;
  /** Cultivation points needed to enter this realm. */
  threshold: number;
  /** What the player feels on arrival. */
  arrival: string;
  /** How the Elder refers to the player while they stand here. */
  styled: string;
}

/** The cultivation ladder, lowest first. Everyone starts as a Mortal. */
export const REALMS: readonly Realm[] = [
  {
    name: "Mortal",
    threshold: 0,
    arrival: "You are a mortal. The qi of heaven and earth passes through you like wind through a screen.",
    styled: "mortal",
  },
  {
    name: "Qi Condensation",
    threshold: 15,
    arrival: "A thread of qi finds your dantian and stays. The first breath of true cultivation is cold, bright and a little frightening.",
    styled: "Qi Condenser",
  },
  {
    name: "Foundation Establishment",
    threshold: 120,
    arrival: "The scattered qi settles into a foundation as level as a temple floor. Your body no longer feels borrowed.",
    styled: "Foundation Builder",
  },
  {
    name: "Core Formation",
    threshold: 400,
    arrival: "Your qi folds in on itself and hardens into a golden core. For a moment you can hear it turning, slow as a millstone.",
    styled: "Core Cultivator",
  },
  {
    name: "Nascent Soul",
    threshold: 850,
    arrival: "A small, clear figure sits behind your eyes and looks back at you. It is you, and it is not afraid.",
    styled: "Nascent Soul master",
  },
  {
    name: "Spirit Severing",
    threshold: 1300,
    arrival: "You cut the last cords that tie your spirit to the dust of old names. The world is quieter, and wider.",
    styled: "Spirit Severing sage",
  },
  {
    name: "Dao Seeking",
    threshold: 1850,
    arrival: "The Dao stops being a word and becomes a direction. You can feel which way is toward it.",
    styled: "Dao Seeker",
  },
  {
    name: "Ascendant",
    threshold: 2350,
    arrival: "The sky above you is no longer a ceiling. It is a door, and it is open.",
    styled: "Ascendant",
  },
];

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

/**
 * Adds points and breaks through at most one realm per call. A breakthrough is logged as its
 * own entry. Points keep gathering while a heart demon blocks the next realm.
 */
export function gainCultivation(state: GameState, amount: number): GameState {
  const cultivation = Math.round((state.cultivation + Math.max(0, amount)) * 100) / 100;
  const gained: GameState = { ...state, cultivation };
  const next = state.realm + 1;
  if (next >= REALMS.length || cultivation < REALMS[next].threshold || heartDemonBlocks(gained)) {
    return gained;
  }
  // The sky tries every breakthrough. A hero who sat its trial on the road comes through steadied and respected; one who did not is scorched.
  const sky = skyLine(gained.flags, next);
  return {
    ...gained,
    realm: next,
    stats: { ...gained.stats, qi: Math.min(100, Math.max(0, gained.stats.qi + breakthroughQi(gained.flags, next))) },
    npc: { ...gained.npc, respect: Math.min(100, gained.npc.respect + breakthroughRespect(gained.flags, next)) },
    flags: { ...gained.flags, [reachedFlag(next)]: true },
    flagAt: { ...gained.flagAt, [reachedFlag(next)]: gained.decisions },
    log: [
      ...gained.log,
      { kind: "realm", text: `Breakthrough: ${REALMS[next].name}. ${REALMS[next].arrival}${sky ? ` ${sky}` : ""}${breakthroughNotes(gained, next)}` },
    ],
  };
}

/** What the hero’s roots, and their Dao, add to the breakthrough line when they enter a realm: a sentence for each, with a leading space. */
export function breakthroughNotes(state: Pick<GameState, "hero"> & Partial<Pick<GameState, "years">>, realm: number): string {
  const hero = state.hero ?? DEFAULT_HERO;
  return [talentArrival(hero.talent, realm), daoArrival(hero.dao, realm), lifespanNote(realm, state.years)].filter(Boolean).map((t) => ` ${t}`).join("");
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
  const floor = REALMS[state.realm].threshold;
  const factor = strainFactor(state.hero ?? DEFAULT_HERO);
  const lost = Math.min(state.cultivation - floor, Math.round(STRAIN_CULTIVATION * shortfall * factor));
  return {
    ...state,
    cultivation: state.cultivation - lost,
    stats: { ...state.stats, qi: Math.max(0, state.stats.qi - Math.round(STRAIN_QI * shortfall * factor)) },
    npc: { ...state.npc, respect: Math.max(-100, state.npc.respect - Math.round(STRAIN_RESPECT * shortfall * factor)) },
    log: [...state.log, { kind: "strain" as const, text: strainLine(state.realm + shortfall, state.realm) }],
  };
}
