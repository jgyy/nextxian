import { ROAD_TOP } from "./realms";
import type { Condition } from "./types";

/**
 * What the hero has done where a realm and a gender meet. The Rank Roads are eight places, one at every realm of the ladder, where the sect sorts people by
 * the rung they have climbed and by the gender they were born into, and a keeper at each reads the two together. A hero meets each place from below it, at it
 * or above it, and what the place offers, asks and costs changes with all three. Counted from the flags the Rank Roads and the turning points of the main
 * line set, so a save from before them reads as nothing done.
 */
export type RankWay = "yield" | "claim" | "veil" | "lift";
export const RANK_WAYS: readonly RankWay[] = ["yield", "claim", "veil", "lift"];

/** Where a hero stands against the rung of a road: below the realm it asks, at it, or above it. */
export type RankBand = "below" | "at" | "above";
export const RANK_BANDS: readonly RankBand[] = ["below", "at", "above"];

/** The band a hero of one realm is in at a road of another. */
export function bandOf(realm: number, road: number): RankBand {
  return realm < road ? "below" : realm === road || road >= ROAD_TOP ? "at" : "above";
}

/** The realms that put a hero in a band at a road: an index into the ladder, and null where the band has no one in it (nobody is below Mortal, and the top road is met from its own realm upward). */
export function bandRange(band: RankBand, road: number): { min?: number; max?: number } | null {
  if (band === "below") return road <= 0 ? null : { max: road - 1 };
  // The top road is met by everyone who has reached it, True Immortals and Sovereigns among them.
  if (band === "at") return road >= ROAD_TOP ? { min: road } : { min: road, max: road };
  return road >= ROAD_TOP ? null : { min: road + 1 };
}

/** The bands a hero can actually be in at a road. */
export const bandsAt = (road: number): RankBand[] => RANK_BANDS.filter((b) => bandRange(b, road) !== null);

/** The condition that a hero stands in a band at a road. */
export function bandCondition(band: RankBand, road: number): Condition {
  const range = bandRange(band, road);
  if (!range) throw new Error(`nobody is ${band} a road of realm ${road}`);
  return { kind: "realm", ...range };
}

/** The flags the Rank Roads set, by prefix. */
export const RANK_DONE_PREFIX = "rk_done_";
export const RANK_DOOR_PREFIX = "rk_door_";
export const RANK_CLASH_PREFIX = "rk_clash_";
export const RANK_MAIN_PREFIX = "rk_main_";
export const rankPickPrefix = (way: RankWay) => `rk_pick_${way}_`;

export interface RankSummary {
  /** Rank Roads finished. */
  roads: number;
  /** Doors of rank gone through, one a road. */
  doors: number;
  /** What the hero did behind them. */
  ways: Record<RankWay, number>;
  /** Roads on which the hero set their rank against a keeper who reads gender first, or set their gender against a keeper who reads rank first. */
  clashes: number;
  /** Turning points of the main line met in the way the hero’s gender and rank allow. */
  turns: number;
}

const countFlags = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;

export function rankSummary(flags: Record<string, boolean>): RankSummary {
  return {
    roads: countFlags(flags, RANK_DONE_PREFIX),
    doors: countFlags(flags, RANK_DOOR_PREFIX),
    ways: { yield: countFlags(flags, rankPickPrefix("yield")), claim: countFlags(flags, rankPickPrefix("claim")), veil: countFlags(flags, rankPickPrefix("veil")), lift: countFlags(flags, rankPickPrefix("lift")) },
    clashes: countFlags(flags, RANK_CLASH_PREFIX),
    turns: countFlags(flags, RANK_MAIN_PREFIX),
  };
}

/** How many Rank Roads the hero has finished at each rung, from Mortal to Ascendant. A wayside is numbered from one. */
export const rungProgress = (flags: Record<string, boolean>): number[] => Array.from({ length: ROAD_TOP + 1 }, (_, n) => countFlags(flags, `${RANK_DONE_PREFIX}w${n + 1}_`));

/** What a hero’s way with rank has been so far: the way they have taken most, or nothing in particular when none leads. */
export function rankLean(summary: RankSummary): RankWay | "none" {
  const ranked = RANK_WAYS.map((way) => [way, summary.ways[way]] as const).sort((a, b) => b[1] - a[1]);
  return ranked[0][1] === 0 || ranked[0][1] === ranked[1][1] ? "none" : ranked[0][0];
}

export const RANK_WAY_LABEL: Record<RankWay, string> = { yield: "Yielded", claim: "Claimed", veil: "Veiled", lift: "Lifted" };
export const RANK_LEAN_LABEL: Record<RankWay | "none", string> = {
  none: "No pattern yet",
  yield: "Keeps the place it gives",
  claim: "Claims the rank held",
  veil: "Wears what is expected",
  lift: "Lifts the passed-over",
};
