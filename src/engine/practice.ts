/**
 * The four practices of the Cultivation Roads. Every road has a ground where something is practised, and a hero can do each of
 * the four once on every road: circulate qi, temper the body, comprehend the Dao, or push at the gate of the next realm. Each is
 * a choice at the start of one approach, each earns cultivation by an amount the road’s realm sets, and the Elder answers each
 * on the spot, by how far the hero has come.
 */
export type Practice = "circulate" | "temper" | "comprehend" | "push";
export const PRACTICES: readonly Practice[] = ["circulate", "temper", "comprehend", "push"];

/** Flags that start with this text are finished Cultivation Roads. */
export const CULTIVATION_DONE_ANY = "cr_done_";
/** Flags that start with this text are practices of one kind, one per road. */
export const practicePrefix = (practice: Practice) => `cr_${practice}_`;

/** A hero this many percent of the way through a realm is on the cusp: a push at the gate can carry them over. */
export const CUSP = 75;
/** A hero below this share is early in the realm; between the two is the middle of it. */
export const EARLY = 35;
export type Stretch = "early" | "middle" | "cusp";
export const stretchOf = (progress: number): Stretch => (progress >= CUSP ? "cusp" : progress < EARLY ? "early" : "middle");

export interface PracticeSummary {
  /** Cultivation Roads finished. */
  roads: number;
  circulated: number;
  tempered: number;
  comprehended: number;
  pushed: number;
}

const count = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;

export function practiceSummary(flags: Record<string, boolean>): PracticeSummary {
  return {
    roads: count(flags, CULTIVATION_DONE_ANY),
    circulated: count(flags, practicePrefix("circulate")),
    tempered: count(flags, practicePrefix("temper")),
    comprehended: count(flags, practicePrefix("comprehend")),
    pushed: count(flags, practicePrefix("push")),
  };
}

export const PRACTICE_NAME: Record<Practice, string> = {
  circulate: "Circulate",
  temper: "Temper",
  comprehend: "Comprehend",
  push: "Push the gate",
};

export const PRACTICE_NOTE: Record<Stretch, string> = {
  early: "You have only begun this realm. The grounds will give you less than they would give you later.",
  middle: "You are midway through this realm. Every ground on the road will give you something.",
  cusp: "You are on the cusp. A push at the gate can carry you over.",
};
