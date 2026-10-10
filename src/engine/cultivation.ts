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
    threshold: 20,
    arrival: "A thread of qi finds your dantian and stays. The first breath of true cultivation is cold, bright and a little frightening.",
    styled: "Qi Condenser",
  },
  {
    name: "Foundation Establishment",
    threshold: 80,
    arrival: "The scattered qi settles into a foundation as level as a temple floor. Your body no longer feels borrowed.",
    styled: "Foundation Builder",
  },
  {
    name: "Core Formation",
    threshold: 200,
    arrival: "Your qi folds in on itself and hardens into a golden core. For a moment you can hear it turning, slow as a millstone.",
    styled: "Core Cultivator",
  },
  {
    name: "Nascent Soul",
    threshold: 380,
    arrival: "A small, clear figure sits behind your eyes and looks back at you. It is you, and it is not afraid.",
    styled: "Nascent Soul master",
  },
  {
    name: "Spirit Severing",
    threshold: 620,
    arrival: "You cut the last cords that tie your spirit to the dust of old names. The world is quieter, and wider.",
    styled: "Spirit Severing sage",
  },
  {
    name: "Dao Seeking",
    threshold: 920,
    arrival: "The Dao stops being a word and becomes a direction. You can feel which way is toward it.",
    styled: "Dao Seeker",
  },
  {
    name: "Ascendant",
    threshold: 1300,
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

/** The highest realm whose threshold the points reach, ignoring the heart demon. */
export function realmForPoints(points: number): number {
  let index = 0;
  REALMS.forEach((r, i) => {
    if (points >= r.threshold) index = i;
  });
  return index;
}

/** True when the player has the points for the next realm but their karma holds them back. */
export function heartDemonBlocks(state: Pick<GameState, "cultivation" | "realm" | "stats">): boolean {
  const next = state.realm + 1;
  if (next >= REALMS.length || next < HEART_DEMON_FROM) return false;
  return state.cultivation >= REALMS[next].threshold && state.stats.karma < HEART_DEMON_KARMA;
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
  const cultivation = state.cultivation + Math.max(0, amount);
  const gained: GameState = { ...state, cultivation };
  const next = state.realm + 1;
  if (next >= REALMS.length || cultivation < REALMS[next].threshold || heartDemonBlocks(gained)) {
    return gained;
  }
  return {
    ...gained,
    realm: next,
    log: [
      ...gained.log,
      { kind: "realm", text: `Breakthrough: ${REALMS[next].name}. ${REALMS[next].arrival}` },
    ],
  };
}
