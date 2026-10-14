import type { HoldingSpec, WareSpec } from "../fortune/build";
import type { Custom, Stance } from "./lexicon-custom";

/**
 * What one Custom Road needs from its author. A Custom Road is where one custom of the sect meets one keeper who either holds it or bends it: a
 * woman who keeps the lineage tablets as they were kept for her, a man who has been quietly rewriting them. The long middle of a road (the sixteen
 * beats that follow each approach’s opening, the hidden room) comes from the custom’s and the stance’s own lexicons, so a road is written once, by
 * hand, in its place, keeper, hook and four openings.
 */
export interface CustomSpec {
  id: string;
  custom: Custom;
  /** Whether the keeper is a woman or a man, and whether the keeper holds the custom as it was handed down or bends it. */
  stance: Stance;
  title: string;
  /** With its article, lowercase: “the tablet shelves”. */
  place: string;
  /** With article, trade and name: “the tablet-duster Fan Jingshu”. */
  keeper: string;
  kname: string;
  /** With its article: “a goose-feather duster worn to the quill”. */
  relic: string;
  /** Fits “… lingers”: “a smell of camphor and cold wax”. */
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
