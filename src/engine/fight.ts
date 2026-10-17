import { affinityOf, daoRankOf, type Element } from "./path";
import type { ConditionState } from "./npc";
import { levelNow } from "./stages";
import type { Dao } from "./hero";

/**
 * How a hero stands against a foe: not a roll but a reading. The story's hunts ask for it at the turns of a fight, and a hero is shown the
 * strokes their edge allows. Nothing here is random, so a hero who is beaten can see why, and what would have changed it.
 */
export interface Foe {
  /** The foe's level on the full ladder of ten realms of ten layers. */
  level: number;
  /** The element the foe fears. A root that answers it is worth a stroke. */
  weak: Element;
  /** The Dao whose craft the foe has no answer to, if any. */
  bane?: Dao;
  /** Flags that each count for the hero when they are on: a foothold won earlier in the fight. */
  boost?: string[];
}

/** The most one foothold, one level of craft or one root may count for, so no single thing carries a fight. */
export const EDGE_RANGE: [number, number] = [-8, 14];
export const MAX_BOOST = 3;

/** The parts of an edge, so the panel and the tests can say where it comes from. */
export interface EdgeParts {
  /** One for every three levels the hero stands above the foe, and one against for every three below, at most four either way. */
  level: number;
  /** The hero's rank in their own Dao, from Novice to Grandmaster. A hero with no Dao has none. */
  craft: number;
  /** How strongly the hero's roots answer the element the foe fears. */
  root: number;
  /** Two when the foe's bane is the hero's own Dao. */
  bane: number;
  /** One for a hero with qi to spare, minus one for a hero who has none. */
  qi: number;
  /** One for every foothold won, up to three. */
  foothold: number;
}

export function edgeParts(state: ConditionState, foe: Foe): EdgeParts {
  const level = levelNow({ realm: state.realm ?? 0, cultivation: state.cultivation ?? 0, level: state.level });
  const hero = state.hero;
  const gap = Math.floor((level - foe.level) / 3);
  const qi = state.stats.qi;
  return {
    level: Math.max(-4, Math.min(4, gap)),
    craft: hero && hero.dao !== "none" ? daoRankOf(state.daoPoints ?? 0) : 0,
    root: hero ? affinityOf(hero, foe.weak) : 0,
    bane: hero && foe.bane && hero.dao === foe.bane ? 2 : 0,
    qi: qi >= 60 ? 1 : qi <= 10 ? -1 : 0,
    foothold: Math.min(MAX_BOOST, (foe.boost ?? []).filter((flag) => state.flags[flag] === true).length),
  };
}

/** The hero's edge over the foe: the sum of its parts. Zero is an even fight; the story lets a hero finish a foe from a margin of three, or one of a craft from a margin of one. */
export function edgeOf(state: ConditionState, foe: Foe): number {
  const p = edgeParts(state, foe);
  const sum = p.level + p.craft + p.root + p.bane + p.qi + p.foothold;
  return Math.max(EDGE_RANGE[0], Math.min(EDGE_RANGE[1], sum));
}

