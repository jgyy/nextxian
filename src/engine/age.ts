import type { Age, Hero } from "./hero";

/**
 * Age. The hero begins at a number of years, and the story keeps count: a year is spent every few decisions. (The register says the Wanderer is twenty; the black
 * seed spends years where it wakes, so the years are the body’s, and they go by with the work the body does, not with the days the scenes name.) A realm is also a span of
 * years, so a cultivator who stays in a low realm grows old and one who breaks through is given back their time. Age sets the opening
 * numbers, the rate of cultivation, how the Elder and the keepers read the hero, and which doors on the Age Roads are theirs.
 */

export const AGES: readonly Age[] = ["youth", "young", "prime", "mature", "elder"];

/** The years the hero has when the story begins, by the age they chose. */
export const AGE_START: Record<Age, number> = { youth: 16, young: 24, prime: 36, mature: 52, elder: 68 };

/** The middle of each age, for telling how far apart two people are. */
export const AGE_MID: Record<Age, number> = { youth: 17, young: 25, prime: 38, mature: 54, elder: 70 };

/** The years that count as each age once the story is under way. A youth who lives five years is no longer a youth. */
export const AGE_BOUNDS: Record<Age, [number, number]> = {
  youth: [0, 19],
  young: [20, 31],
  prime: [32, 45],
  mature: [46, 62],
  elder: [63, 9999],
};

/** Decisions the hero makes in a year of the story. The seasons go by on the roads, not in the scenes. */
export const DECISIONS_PER_YEAR = 10;

/** The years a body can last at each realm. A breakthrough is also a lengthening of life. */
export const LIFESPAN: readonly number[] = [76, 110, 160, 250, 400, 620, 950, 1500];

/** Years left at which a hero feels the end coming, and the point at which they are past it. */
export const WANING_YEARS = 3;

export type Aged = Pick<Hero, "age"> & Partial<Pick<Hero, "name">>;
export interface Years {
  decisions?: number;
  years?: number;
  realm?: number;
}

/** How old the hero is now: the years they began with and a year for every stretch of decisions. */
export function ageOf(hero: Aged, decisions = 0): number {
  return (AGE_START[hero.age] ?? AGE_START.young) + Math.floor(Math.max(0, decisions) / DECISIONS_PER_YEAR);
}

/** The age a number of years makes. */
export function bandOfYears(years: number): Age {
  return AGES.find((a) => years >= AGE_BOUNDS[a][0] && years <= AGE_BOUNDS[a][1]) ?? "elder";
}

/** The years the hero's body can last at a realm, with any years they have been given. */
export function lifespanOf(realm: number, bonus = 0): number {
  return LIFESPAN[Math.min(Math.max(0, realm), LIFESPAN.length - 1)] + Math.max(0, bonus);
}

/** Years the hero has left at their realm. Zero or less means they are past it. */
export function lifeLeft(hero: Aged, state: Years): number {
  return lifespanOf(state.realm ?? 0, state.years) - ageOf(hero, state.decisions);
}

export type Waning = "none" | "short" | "past";

export function waningOf(left: number): Waning {
  return left <= 0 ? "past" : left <= WANING_YEARS ? "short" : "none";
}

/** Percentage points of cultivation speed a body of this age adds at a realm. The young are quick and the old are patient. */
export function ageSpeed(age: Age, realm: number): number {
  switch (age) {
    case "youth":
      return realm <= 2 ? 10 : 4;
    case "young":
      return 0;
    case "prime":
      return -2;
    case "mature":
      return -5;
    case "elder":
      return -10;
  }
}

export const AGE_LABEL: Record<Age, string> = {
  youth: "A young body’s quickness",
  young: "Years of a young body",
  prime: "Years in the bones",
  mature: "Years in the bones",
  elder: "A long life behind you",
};

/** The slowing of a body whose years are nearly spent, in percentage points (negative). */
export function waningSpeed(left: number): { label: string; points: number } | undefined {
  const w = waningOf(left);
  if (w === "past") return { label: "Past your years", points: -25 };
  if (w === "short") return { label: "Your years run short", points: -10 };
  return undefined;
}

/** What a heart demon asks of an age: the young are hot-blooded and the old have settled. Added to the karma threshold. */
export function ageHeartDemon(age: Age | undefined): number {
  switch (age) {
    case "youth":
      return 6;
    case "mature":
      return -4;
    case "elder":
      return -8;
    default:
      return 0;
  }
}

/** Extra mastery an old hand takes from a lesson: years of practice show in a craft. */
export function ageMastery(age: Age | undefined, amount: number): number {
  return (age === "mature" || age === "elder") && amount >= 2 ? 1 : 0;
}

/** The line a breakthrough adds about the hero's years. */
export function lifespanNote(realm: number, bonus = 0): string {
  return `Your span of years stretches to ${lifespanOf(realm, bonus)}.`;
}

/** The log line for a birthday, with a word about the years left when few remain. */
export function birthdayLine(hero: Aged, state: Years): string {
  const age = ageOf(hero, state.decisions);
  const left = lifeLeft(hero, state);
  const base = `Another year is spent in the body. You are ${age}.`;
  if (left <= 0) return `${base} You are past the years your realm allows, and the body knows it.`;
  if (left <= WANING_YEARS) return `${base} Your realm allows you ${left} more. Break through, or find years elsewhere.`;
  if (left <= 10) return `${base} Your realm allows you ${left} more.`;
  return base;
}

/** The apparent age of a cultivator: a deep realm slows the body, so a Core Cultivator of sixty can pass for forty. */
export function looksOf(hero: Aged, state: Years): number {
  const real = ageOf(hero, state.decisions);
  const slowed = Math.floor((state.realm ?? 0) / 2) * 0.1;
  return Math.max(16, Math.round(real * (1 - Math.min(0.4, slowed))));
}

/** How the hero stands to a keeper of a given age. A road keeps three doors for the three ways the hero's years meet the keeper's. */
export type Gap = "kin" | "older" | "younger" | "farOlder" | "farYounger";

export const GAP_NEAR = 10;
export const GAP_FAR = 25;

/**
 * The condition bounds of a gap, in years, on a road whose keeper belongs to an age. The three gaps of a road cover every age a hero can have:
 * a youth’s road has no younger door, because there is no one younger to knock, so its far door takes everyone past the near one; an elder’s
 * road is the same turned round.
 */
export function gapBounds(gap: Gap, keeper: Age): { min?: number; max?: number } {
  const mid = AGE_MID[keeper];
  if (keeper === "youth") {
    if (gap === "kin") return { max: mid + GAP_NEAR };
    if (gap === "older") return { min: mid + GAP_NEAR + 1, max: mid + GAP_FAR };
    return { min: mid + GAP_FAR + 1 };
  }
  if (keeper === "elder") {
    if (gap === "kin") return { min: mid - GAP_NEAR };
    if (gap === "younger") return { min: mid - GAP_FAR, max: mid - GAP_NEAR - 1 };
    return { max: mid - GAP_FAR - 1 };
  }
  if (gap === "kin") return { min: mid - GAP_NEAR, max: mid + GAP_NEAR };
  if (gap === "older") return { min: mid + GAP_NEAR + 1 };
  return { max: mid - GAP_NEAR - 1 };
}

/** The three gaps a road of a given keeper age can meet: the keeper of a youth cannot be older than a hero, nor an elder's younger. */
export function gapsFor(keeper: Age): [Gap, Gap, Gap] {
  if (keeper === "youth") return ["kin", "older", "farOlder"];
  if (keeper === "elder") return ["kin", "younger", "farYounger"];
  return ["kin", "older", "younger"];
}
