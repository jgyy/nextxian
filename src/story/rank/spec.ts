import type { HoldingSpec, WareSpec } from "../fortune/build";
import type { Rung, Stance } from "./lexicon-rank";

/**
 * What one Rank Road needs from its author. A Rank Road is where one rung of the sect meets one keeper who reads a stranger’s rank before their sex, or their
 * sex before their rank: a woman who counts the sleeve first, a man who counts the body first. The long middle of a road (the sixteen beats that follow each
 * approach’s opening, the hidden room) comes from the rung’s and the stance’s own lexicons, so a road is written once, by hand, in its place, keeper, hook
 * and four openings.
 */
export interface RankSpec {
  id: string;
  rung: Rung;
  /** Whether the keeper is a woman or a man, and whether the keeper reads rank first or sex first. */
  stance: Stance;
  title: string;
  /** With its article, lowercase: “the roll-desk”. */
  place: string;
  /** With article, trade and name: “the roll-clerk Pan Delan”. */
  keeper: string;
  kname: string;
  /** With its article: “a ruled board with three red lines”. */
  relic: string;
  /** Fits “… lingers”: “a smell of wet rope and lamp-oil”. */
  omen: string;
  /** Completes “you learn that …”. */
  secret: string;
  intro: string;
  /** Four things to approach, each with its article. */
  focus: [string, string, string, string];
  /** The first scene of each approach: what the keeper is doing as the hero comes to it. */
  openers: [string, string, string, string];
  close: string;
  ware: WareSpec;
  holding: HoldingSpec;
}
