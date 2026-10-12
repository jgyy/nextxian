import type { Element } from "@/engine/path";
import type { HoldingSpec, WareSpec } from "../fortune/build";
import type { Craft } from "./lexicon-craft";

/**
 * What one Crossing Road needs from its author. A Crossing Road is where one element meets one craft, kept by a keeper who has worked the
 * two together all their life: wood and the pill-maker’s art, fire and the smith’s. Everything that fills the long middle of a road (the
 * sixteen beats that follow each approach’s opening, the hidden room) comes from the element’s and the craft’s own lexicons, so a road is
 * written once, by hand, in its place, keeper, hook and four openings.
 */
export interface CrossingSpec {
  id: string;
  element: Element;
  dao: Craft;
  /** The keeper’s own gender. It decides how the keeper reads a hero’s: a woman who keeps a forge meets a woman at it differently from a man who does. */
  kgender: "woman" | "man";
  title: string;
  /** With its article, lowercase: “the mulberry still”. */
  place: string;
  /** With article, trade and name: “the leaf-pill brewer Tao Ruoxi”. */
  keeper: string;
  kname: string;
  /** With its article: “a copper still-head”. */
  relic: string;
  /** Fits “… lingers”: “a smell of crushed leaf”. */
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
