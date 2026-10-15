import type { HoldingSpec, WareSpec } from "../fortune/build";
import type { Stance } from "./lexicon-stance";
import type { TribId } from "./lexicon-trib";

/**
 * What one Tribulation Road needs from its author. A Tribulation Road is where one tribulation of the ladder meets one keeper who receives a hero by a
 * rule of their own: a warden who bows by the register, a witness who bows to what a hero has survived, a rival who bows when it hurts, a pilgrim who is
 * awed by anyone who has climbed. The long middle of a road comes from the tribulation’s and the stance’s own lexicons, so a road is written once, by
 * hand, in its place, keeper, hook and four openings.
 */
export interface TribSpec {
  id: string;
  trib: TribId;
  stance: Stance;
  /** The keeper’s own gender, which sets the pronouns the text uses for them. */
  gender: "woman" | "man";
  title: string;
  /** With its article, lowercase: “the fasting cell”. */
  place: string;
  /** With article, trade and name: “the cell-keeper Ma Yurong”. */
  keeper: string;
  kname: string;
  /** With its article: “a bowl of black glass, chipped at the rim”. */
  relic: string;
  /** Fits “… lingers”: “a smell of cold stone and tallow”. */
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
