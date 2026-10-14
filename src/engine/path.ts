import { ageHeartDemon } from "./age";
import type { Dao, Hero, Origin, Talent } from "./hero";

/**
 * The hero’s path: the talent they were born with and the Dao they cultivate. Both change how cultivation runs, not only
 * what people say. A talent sets the rate and, for a few, the way a realm is entered. A Dao gives one passive rule and a
 * mastery that grows with practice, and the story’s roads read both.
 */

export type Element = "wood" | "fire" | "earth" | "metal" | "water";
export const ELEMENTS: readonly Element[] = ["wood", "fire", "earth", "metal", "water"];

/** How strongly a talent answers each element. A single root is kindred (2) to its own element; a mixed or heaven-marked root answers some, weakly (1). */
const AFFINITY: Record<Talent, Partial<Record<Element, 1 | 2>>> = {
  wood: { wood: 2 },
  fire: { fire: 2 },
  earth: { earth: 2 },
  metal: { metal: 2 },
  water: { water: 2 },
  mixed: { wood: 1, fire: 1, earth: 1, metal: 1, water: 1 },
  heaven: { fire: 1, metal: 1 },
  late: { earth: 1, water: 1 },
};

/** 0 for none, 1 for a partial answer and 2 for a kindred root. */
export function affinityOf(hero: Pick<Hero, "talent">, element: Element): 0 | 1 | 2 {
  return AFFINITY[hero.talent][element] ?? 0;
}

/** Percentage points a talent adds to the cultivation speed at a realm. */
export function talentSpeed(talent: Talent, realm: number): number {
  switch (talent) {
    case "wood":
      return 6;
    case "fire":
      return 12;
    case "earth":
      return 4;
    case "metal":
      return 8;
    case "water":
      return 6;
    case "mixed":
      return 0;
    case "heaven":
      return 30;
    case "late":
      return realm < 3 ? -12 : 18;
  }
}

/** The name of the speed line in the panel. */
export const TALENT_LABEL: Record<Talent, string> = {
  wood: "Verdant root",
  fire: "Cinnabar root",
  earth: "Mountain root",
  metal: "Bright-metal root",
  water: "Tide root",
  mixed: "Mixed roots",
  heaven: "Heaven-marked root",
  late: "Late bloom",
};

// ───────────── Dao

export interface DaoRank {
  name: string;
  /** Mastery points needed to hold this rank. */
  points: number;
}

/** Ranks of a Dao, lowest first. Mastery grows by practising the Dao on the roads. */
export const DAO_RANKS: readonly DaoRank[] = [
  { name: "Novice", points: 0 },
  { name: "Apprentice", points: 8 },
  { name: "Adept", points: 24 },
  { name: "Master", points: 50 },
  { name: "Grandmaster", points: 90 },
];

export function daoRankOf(points: number): number {
  let rank = 0;
  DAO_RANKS.forEach((r, i) => {
    if (points >= r.points) rank = i;
  });
  return rank;
}

/** Mastery points still needed for the next rank, or undefined at the top. */
export function daoToNext(points: number): number | undefined {
  const next = DAO_RANKS[daoRankOf(points) + 1];
  return next ? next.points - points : undefined;
}

export const DAO_NAME: Record<Dao, string> = {
  none: "Open hand",
  alchemy: "Pill Dao",
  forging: "Forge Dao",
  talisman: "Talisman Dao",
  formation: "Formation Dao",
  beast: "Beast Dao",
  sword: "Sword Dao",
  healing: "Healer’s Dao",
  fate: "Fate Dao",
};

/** The word a road uses for the craft: “the alchemist’s”, “the forger’s”. */
export const DAO_CRAFT: Record<Dao, string> = {
  none: "open-handed",
  alchemy: "alchemist’s",
  forging: "forger’s",
  talisman: "talisman-maker’s",
  formation: "array-master’s",
  beast: "beast-tamer’s",
  sword: "swordsman’s",
  healing: "healer’s",
  fate: "diviner’s",
};

/** What a Dao does for cultivation, in a line for the creation screen and the panel. */
export const DAO_PASSIVE: Record<Dao, string> = {
  none: "No passive. Every Dao road still teaches you a little.",
  alchemy: "A breakthrough pill works from 70% of the next threshold, not 85%.",
  forging: "Tools and relics in your pack add half again as much speed.",
  talisman: "A push beyond your realm costs you half as much.",
  formation: "Holdings you lease add twice the speed.",
  beast: "Going Unfed slows you half as much, and living costs one less.",
  sword: "You master a deed one realm sooner, and force cultivates like patience.",
  healing: "A heart demon holds you back only below karma −50.",
  fate: "Half of any karma you would lose is never lost.",
};

// ───────────── what a talent or a Dao changes in the rules

type Path = Pick<Hero, "talent" | "dao"> & Partial<Pick<Hero, "origin" | "age">>;

/** Where a pill starts to work, as a share of the next realm’s points. */
export const aidReachFor = (hero: Path): number => (hero.dao === "alchemy" ? 0.7 : 0.85);

/** The multiplier on the speed of tools and relics in the pack. */
export const toolFactor = (hero: Path): number => (hero.dao === "forging" ? 1.5 : 1);

/** The multiplier on the speed of leased holdings. */
export const holdingFactor = (hero: Path): number => (hero.dao === "formation" ? 2 : 1);

/** The multiplier on what straining past one’s realm costs. */
export const strainFactor = (hero: Path): number => (hero.dao === "talisman" ? 0.5 : 1);

/** Realms above a deed’s ask at which it counts as mastery. */
export const masteryGapFor = (hero: Path, base: number): number => (hero.dao === "sword" ? Math.max(1, base - 1) : base);

/** Extra cultivation a decision of this tone earns the hero. A swordsman’s force is as good as patience. */
export const toneBonus = (hero: Path, tone: string): number => (hero.dao === "sword" && tone === "force" ? 1 : 0);

/** Karma below which a heart demon holds the hero at a threshold. */
export function heartDemonKarmaFor(hero: Path, base = -30): number {
  let karma = base;
  if (hero.dao === "healing") karma -= 20;
  if (hero.talent === "earth") karma -= 10;
  if (hero.origin === "listener") karma -= 5;
  if (hero.talent === "heaven") karma += 10;
  karma += ageHeartDemon(hero.age);
  return karma;
}

/** Spirit stones less a hero away from the sect pays for keep. */
export const livingRebate = (hero: Path): number => (hero.dao === "beast" ? 1 : 0);

/** Share of the Unfed slowdown that applies. */
export const unfedFactor = (hero: Path): number => (hero.dao === "beast" ? 0.5 : 1);

/** A karma change as the hero feels it. A diviner never loses more than half. */
export function karmaChange(hero: Path, amount: number): number {
  return hero.dao === "fate" && amount < 0 ? Math.ceil(amount / 2) : amount;
}

// ───────────── origin

/** Spirit stones a hero begins with from where they came from, on top of papers and trade. */
export const ORIGIN_WEALTH: Record<Origin, number> = { river: 0, porter: 4, rogue: 2, heir: 10, courier: 6, exile: 1, cave: 0, furnace: 8, lamp: 1, listener: 3, struck: 2, dream: 2 };

/** The scene each origin begins in. The river village starts at the gate, as the story always has. */
export const ORIGIN_START: Record<Origin, string> = {
  river: "gate",
  porter: "o_porter_0",
  rogue: "o_rogue_0",
  heir: "o_heir_0",
  courier: "o_courier_0",
  exile: "o_exile_0",
  cave: "o_cave_0",
  furnace: "o_furnace_0",
  lamp: "o_lamp_0",
  listener: "o_listener_0",
  struck: "o_struck_0",
  dream: "o_dream_0",
};

/** What the way a hero began adds to their cultivation speed at a realm, in percentage points. Most beginnings add nothing; the six that start in cultivation do. */
export function originSpeed(origin: Origin, realm: number): number {
  switch (origin) {
    case "cave":
      return realm <= 2 ? 10 : 4;
    case "furnace":
      return 6;
    case "lamp":
      return 8;
    case "listener":
      return realm >= 3 ? 10 : 5;
    case "struck":
      return realm <= 1 ? 16 : 4;
    case "dream":
      return realm <= 2 ? 22 : realm <= 4 ? 10 : 0;
    default:
      return 0;
  }
}

/** The name of the speed line for a beginning. */
export const ORIGIN_LABEL: Record<Origin, string> = {
  river: "The river village",
  porter: "A porter’s years",
  rogue: "A rogue’s road",
  heir: "A ruined house",
  courier: "A courier’s round",
  exile: "A sect’s breath-art",
  cave: "The dead cultivator’s seat",
  furnace: "The pill-house furnaces",
  lamp: "Seven winters of the lamp",
  listener: "A listener’s ear",
  struck: "Heaven’s own spark",
  dream: "A stranger’s breath-art",
};

// ───────────── attunement

/**
 * Walking a Path Road with roots that answer its element attunes the hero to that element for good. A kindred root attunes fully, a
 * partial root half as much; an element the hero’s roots do not answer attunes nothing. Each element attunes once, however many
 * roads work it, and the flag is the whole record.
 */
export const attuneFlag = (element: Element, level: 1 | 2) => `pr_attuned${level}_${element}`;
export const ATTUNE_PREFIX = "pr_attuned";

/** Percentage points of cultivation speed a full attunement and a partial one give. */
export const ATTUNE_POINTS: Record<1 | 2, number> = { 1: 3, 2: 6 };

export const ELEMENT_LABEL: Record<Element, string> = { wood: "Wood", fire: "Fire", earth: "Earth", metal: "Metal", water: "Water" };

/** The elements a hero has attuned to, with how fully, in the order of the five phases. */
export function attunements(flags: Record<string, boolean>): { element: Element; level: 1 | 2 }[] {
  const found: { element: Element; level: 1 | 2 }[] = [];
  for (const element of ELEMENTS) {
    if (flags[attuneFlag(element, 2)]) found.push({ element, level: 2 });
    else if (flags[attuneFlag(element, 1)]) found.push({ element, level: 1 });
  }
  return found;
}

/** The lines the speed panel shows for the hero’s attunements. */
export function attunementParts(flags: Record<string, boolean>): { label: string; points: number }[] {
  return attunements(flags).map(({ element, level }) => ({
    label: `${level === 2 ? "Attuned to" : "Half-attuned to"} ${ELEMENT_LABEL[element].toLowerCase()}`,
    points: ATTUNE_POINTS[level],
  }));
}

/** What the hero has done on the Crossing Roads, counted from the flags they set. */
export interface CrossingSummary {
  /** Crossing Roads finished. */
  roads: number;
  /** Gender doors gone through, root doors, craft doors. */
  benches: number;
  roots: number;
  crafts: number;
  attuned: { element: Element; level: 1 | 2 }[];
}

const countFlags = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;

export function crossingSummary(flags: Record<string, boolean>): CrossingSummary {
  return {
    roads: countFlags(flags, "pr_done_"),
    benches: countFlags(flags, "pr_fork_g_"),
    roots: countFlags(flags, "pr_fork_r_"),
    crafts: countFlags(flags, "pr_fork_c_"),
    attuned: attunements(flags),
  };
}
