import type { HoldingSpec, WareSpec } from "../fortune/build";
import type { CraftId } from "./lexicon-craft";
import type { Stance } from "./lexicon-stance";

/**
 * What one Wardrobe Road needs from its author. A Wardrobe Road is where one craft of dress meets one keeper who reads a hero by the clothes on their back:
 * an appraiser who prices the cloth, a warden of the sumptuary rules, a masker who lends faces, a mender who keeps what cloth remembers. The long middle of
 * a road comes from the craft’s and the stance’s own lexicons, so a road is written once, by hand, in its place, keeper, hook and four openings.
 */
export interface WardSpec {
  id: string;
  craft: CraftId;
  stance: Stance;
  /** The keeper’s own gender, which sets the pronouns the text uses for them. */
  gender: "woman" | "man";
  title: string;
  /** With its article, lowercase: “the wash-stone counter”. */
  place: string;
  /** With article, trade and name: “the stair-appraiser Lo Meiyin”. */
  keeper: string;
  kname: string;
  /** With its article: “a slate chalked with a year of prices”. */
  relic: string;
  /** Fits “… lingers”: “a smell of wet fibre and lye”. */
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
