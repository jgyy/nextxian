/**
 * What the hero has done about the customs of the sect that sort people by gender: the roads of each custom walked, the doors taken, and what the hero
 * did behind each (kept the custom, bent it, broke it in the open, or stood for someone it passes over). Counted from the flags the Custom Roads and
 * the turning points of the main line set, so a save from before them reads as nothing done.
 */
export type CustomWay = "keep" | "bend" | "break" | "stand";
export const CUSTOM_WAYS: readonly CustomWay[] = ["keep", "bend", "break", "stand"];

/** The flags the Custom Roads set, by prefix. */
export const CUSTOM_DONE_PREFIX = "cs_done_";
export const CUSTOM_DOOR_PREFIX = "cs_door_";
export const CUSTOM_CLASH_PREFIX = "cs_clash_";
export const CUSTOM_MAIN_PREFIX = "cs_main_";
export const customPickPrefix = (way: CustomWay) => `cs_pick_${way}_`;

export interface CustomSummary {
  /** Custom Roads finished. */
  roads: number;
  /** Doors of custom gone through, one a road. */
  doors: number;
  /** What the hero did behind them. */
  ways: Record<CustomWay, number>;
  /** Roads on which the hero pressed a custom in front of a keeper who holds it. */
  clashes: number;
  /** Turning points of the main line met in the way the hero’s gender allows. */
  turns: number;
}

const countFlags = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;

export function customSummary(flags: Record<string, boolean>): CustomSummary {
  return {
    roads: countFlags(flags, CUSTOM_DONE_PREFIX),
    doors: countFlags(flags, CUSTOM_DOOR_PREFIX),
    ways: { keep: countFlags(flags, customPickPrefix("keep")), bend: countFlags(flags, customPickPrefix("bend")), break: countFlags(flags, customPickPrefix("break")), stand: countFlags(flags, customPickPrefix("stand")) },
    clashes: countFlags(flags, CUSTOM_CLASH_PREFIX),
    turns: countFlags(flags, CUSTOM_MAIN_PREFIX),
  };
}

/** What a hero’s way with the customs has been so far: the way they have taken most, or nothing in particular when none leads. */
export function customLean(summary: CustomSummary): CustomWay | "none" {
  const ranked = CUSTOM_WAYS.map((way) => [way, summary.ways[way]] as const).sort((a, b) => b[1] - a[1]);
  return ranked[0][1] === 0 || ranked[0][1] === ranked[1][1] ? "none" : ranked[0][0];
}

export const CUSTOM_WAY_LABEL: Record<CustomWay, string> = { keep: "Kept", bend: "Bent", break: "Broken", stand: "Stood for" };
export const CUSTOM_LEAN_LABEL: Record<CustomWay | "none", string> = {
  none: "No pattern yet",
  keep: "Keeps the old ways",
  bend: "Asks for exceptions",
  break: "Breaks them in the open",
  stand: "Stands for the passed-over",
};
