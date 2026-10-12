/**
 * What the keepers of the Witness Roads know of the hero. Four deeds can be done in front of a keeper, each sets a flag per road, and
 * every Witness Road finished sets one more. The keepers, the Elder and the Word panel all read the same counts from here.
 */
export type Deed = "vouch" | "confess" | "conceal" | "ask";
export const DEEDS: readonly Deed[] = ["vouch", "confess", "conceal", "ask"];

/** Flags that start with this text are finished Witness Roads. */
export const WITNESS_DONE_ANY = "wr_done_";
/** Flags that start with this text are deeds of one kind, one per road. */
export const deedPrefix = (deed: Deed) => `wr_${deed}_`;

/** The karma at or below which the road calls the hero dark, and at or above which it calls the hero kind. */
export const REPUTE_DARK = -12;
export const REPUTE_KIND = 12;
export type Repute = "dark" | "grey" | "kind";
export const reputeOf = (karma: number): Repute => (karma <= REPUTE_DARK ? "dark" : karma >= REPUTE_KIND ? "kind" : "grey");

export interface WitnessSummary {
  /** Witness Roads finished. */
  roads: number;
  vouched: number;
  confessed: number;
  concealed: number;
  asked: number;
  repute: Repute;
}

const count = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;

export function witnessSummary(flags: Record<string, boolean>, karma: number): WitnessSummary {
  return {
    roads: count(flags, WITNESS_DONE_ANY),
    vouched: count(flags, deedPrefix("vouch")),
    confessed: count(flags, deedPrefix("confess")),
    concealed: count(flags, deedPrefix("conceal")),
    asked: count(flags, deedPrefix("ask")),
    repute: reputeOf(karma),
  };
}

export const REPUTE_NAME: Record<Repute, string> = { dark: "Dark", grey: "Unwritten", kind: "Kind" };
export const REPUTE_NOTE: Record<Repute, string> = {
  dark: "The keepers close their books a little as you come in.",
  grey: "The keepers have not made up their minds about you.",
  kind: "The keepers have a good line waiting for you.",
};
