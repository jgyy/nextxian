import type { Age } from "@/engine/hero";
import type { HoldingSpec, WareSpec } from "../fortune/build";

/**
 * What one Age Road needs from its author. An Age Road is where one age meets one realm: a keeper of sixteen, twenty-five, thirty-eight, fifty-four or
 * seventy years, at a wayside of one of the eight realms. The long middle of a road (the sixteen beats after each approach’s opening, the hidden
 * room) comes from the age’s and the realm’s own lexicons, so a road is written once, by hand, in its place, keeper, hook and four openings.
 */
export interface AgeSpec {
  id: string;
  /** The age the keeper belongs to. It decides which of the road’s three doors of years open to which hero. */
  age: Age;
  /** The keeper’s gender, for the pronouns the lexicons use. */
  kgender: "woman" | "man";
  title: string;
  /** With its article, lowercase: “the almshouse step”. */
  place: string;
  /** With article, trade and name: “the step-sweeper Bei Anxin”. */
  keeper: string;
  kname: string;
  /** With its article: “a broom worn to a stub”. */
  relic: string;
  /** Fits “… lingers”: “a smell of wet straw”. */
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
