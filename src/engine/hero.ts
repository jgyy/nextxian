import type { NpcState, PlayerStats } from "./types";

/**
 * The player's character: who the sect sees when the Wanderer comes up the stair. Every field is something an
 * NPC can read at a glance, so every field changes what somebody says. None of them changes what the
 * Wanderer can do; cultivation does that.
 */
export type Gender = "woman" | "man" | "unspoken";
export type Looks = "plain" | "striking" | "scarred" | "frail";
export type Background = "orphan" | "scholar" | "soldier" | "merchant" | "farmer" | "healer";
export type Attire = "rags" | "traveller" | "scholar" | "silk" | "armour";
export type Status = "outcast" | "commoner" | "gentry" | "noble";

export interface Hero {
  /** What the Wanderer gives when asked. Everyone in the story says it in place of "Wanderer". */
  name: string;
  gender: Gender;
  looks: Looks;
  background: Background;
  attire: Attire;
  status: Status;
}

export type HeroField = Exclude<keyof Hero, "name">;

export interface HeroOption<V extends string = string> {
  value: V;
  label: string;
  /** One line for the creation screen. */
  blurb: string;
}

export const DEFAULT_NAME = "Wanderer";

export const GENDERS: readonly HeroOption<Gender>[] = [
  { value: "woman", label: "A woman", blurb: "The sect will say she, madam and lady." },
  { value: "man", label: "A man", blurb: "The sect will say he, sir and young master." },
  { value: "unspoken", label: "Unspoken", blurb: "You give no answer, and they learn to say they and friend." },
];

export const LOOKS: readonly HeroOption<Looks>[] = [
  { value: "plain", label: "Plain", blurb: "A face nobody remembers, which is its own kind of cover." },
  { value: "striking", label: "Striking", blurb: "People look twice, and some of them do not look away." },
  { value: "scarred", label: "Scarred", blurb: "An old burn runs from the ear to the collar." },
  { value: "frail", label: "Frail", blurb: "Thin, pale and quick to tire. The stairs are not kind to you." },
];

export const BACKGROUNDS: readonly HeroOption<Background>[] = [
  { value: "orphan", label: "Port orphan", blurb: "Years on the river stairs, begging, running errands and learning who lies." },
  { value: "scholar", label: "Copyist’s apprentice", blurb: "You learned to read before you learned to be afraid of what you read." },
  { value: "soldier", label: "Levy deserter", blurb: "You carried a spear for the provincial levy until you stopped." },
  { value: "merchant", label: "Trader’s runner", blurb: "You counted other people’s money and pretended it did not matter." },
  { value: "farmer", label: "Paddy hand", blurb: "Your back remembers every season, and your hands remember the work." },
  { value: "healer", label: "Herbalist’s helper", blurb: "You have sat up with the dying and not looked away." },
];

export const ATTIRES: readonly HeroOption<Attire>[] = [
  { value: "rags", label: "Patched hemp", blurb: "Straw sandals and a robe mended more often than it was washed." },
  { value: "traveller", label: "Oiled cloak", blurb: "A road-worn cloak, a bamboo hat and a pack that has seen rain." },
  { value: "scholar", label: "Ink-stained robe", blurb: "Grey cotton with a copyist’s stains on both cuffs." },
  { value: "silk", label: "Embroidered silk", blurb: "Cloud-pattern silk that cost a village’s year, or looks as if it did." },
  { value: "armour", label: "Scale jerkin", blurb: "Lacquered scales, a sword-belt and the walk of someone ready to use it." },
];

export const STATUSES: readonly HeroOption<Status>[] = [
  { value: "outcast", label: "Outcast", blurb: "Your papers were struck from the registers. Nobody owes you a hearing." },
  { value: "commoner", label: "Commoner", blurb: "Your papers show a name on a village roll, and nothing above it." },
  { value: "gentry", label: "Gentry", blurb: "Your papers name a family with land, a seal and a seat at the magistrate’s table." },
  { value: "noble", label: "Noble house", blurb: "Your papers name a house with a banner, a surname and ancestors on the wall." },
];

export const HERO_OPTIONS: Record<HeroField, readonly HeroOption[]> = {
  gender: GENDERS,
  looks: LOOKS,
  background: BACKGROUNDS,
  attire: ATTIRES,
  status: STATUSES,
};

/** The order the fields are asked in, and the order the NPCs' asides cycle through them. */
export const HERO_FIELDS: readonly HeroField[] = ["status", "attire", "looks", "background", "gender"];

export const FIELD_TITLE: Record<HeroField, string> = {
  gender: "How they will speak of you",
  looks: "Your looks",
  background: "The life you led since the river village",
  attire: "What you wear up the mountain",
  status: "The papers your teacher entered you under",
};

export const DEFAULT_HERO: Hero = {
  name: DEFAULT_NAME,
  gender: "unspoken",
  looks: "plain",
  background: "farmer",
  attire: "traveller",
  status: "commoner",
};

export const MAX_NAME_LENGTH = 24;

/** A name the story can say aloud: letters, spaces, apostrophes and hyphens, trimmed. An unusable name falls back to the default. */
export function cleanName(raw: string): string {
  const name = raw
    .normalize("NFKC")
    .replace(/[^\p{L}\p{M}' ’-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_NAME_LENGTH)
    .trim();
  return name.length > 0 ? name : DEFAULT_NAME;
}

/** True when every field of an unknown value is one the creation screen offers. */
export function isHero(value: unknown): value is Hero {
  if (!value || typeof value !== "object") return false;
  const hero = value as Record<string, unknown>;
  if (typeof hero.name !== "string" || hero.name.trim().length === 0) return false;
  return HERO_FIELDS.every((field) => HERO_OPTIONS[field].some((o) => o.value === hero[field]));
}

/** Reads a saved hero, filling anything missing from the default so older saves still load. */
export function restoreHero(value: unknown): Hero {
  if (!value || typeof value !== "object") return { ...DEFAULT_HERO };
  const saved = value as Record<string, unknown>;
  const hero: Hero = { ...DEFAULT_HERO, name: typeof saved.name === "string" ? cleanName(saved.name) : DEFAULT_NAME };
  for (const field of HERO_FIELDS) {
    const found = HERO_OPTIONS[field].find((o) => o.value === saved[field]);
    if (found) (hero as unknown as Record<string, string>)[field] = found.value;
  }
  return hero;
}

export function optionFor<F extends HeroField>(field: F, hero: Hero): HeroOption {
  return HERO_OPTIONS[field].find((o) => o.value === hero[field]) ?? HERO_OPTIONS[field][0];
}

/** How the sect would sum the hero up, for the creation preview and the hero panel. */
export function describeHero(hero: Hero): string {
  const who: Record<Gender, string> = { woman: "a woman", man: "a man", unspoken: "someone who gives no answer" };
  const looks: Record<Looks, string> = { plain: "plain-faced", striking: "striking", scarred: "scarred", frail: "frail" };
  const trade: Record<Background, string> = {
    orphan: "a port orphan",
    scholar: "a copyist’s apprentice",
    soldier: "a levy deserter",
    merchant: "a trader’s runner",
    farmer: "a paddy hand",
    healer: "an herbalist’s helper",
  };
  const dress: Record<Attire, string> = {
    rags: "in patched hemp",
    traveller: "in an oiled cloak",
    scholar: "in an ink-stained robe",
    silk: "in embroidered silk",
    armour: "in a scale jerkin",
  };
  const rank: Record<Status, string> = {
    outcast: "an outcast",
    commoner: "a commoner",
    gentry: "gentry",
    noble: "of a noble house",
  };
  return `${hero.name} is ${who[hero.gender]}, ${looks[hero.looks]}, once ${trade[hero.background]}, ${dress[hero.attire]}, ${rank[hero.status]}.`;
}

// ───────────── pronouns and names

export interface Pronouns {
  they: string;
  them: string;
  their: string;
  theirs: string;
  themself: string;
  /** How a stranger addresses the hero: madam, sir, friend. */
  honorific: string;
  /** What a stranger calls the hero in the third person: the woman, the man, the traveller. */
  person: string;
}

export const PRONOUNS: Record<Gender, Pronouns> = {
  woman: { they: "she", them: "her", their: "her", theirs: "hers", themself: "herself", honorific: "madam", person: "woman" },
  man: { they: "he", them: "him", their: "his", theirs: "his", themself: "himself", honorific: "sir", person: "man" },
  unspoken: { they: "they", them: "them", their: "their", theirs: "theirs", themself: "themself", honorific: "friend", person: "stranger" },
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Fills the hero into a line of text. `{they}`, `{them}`, `{their}`, `{theirs}`, `{themself}`, `{honorific}`, `{person}` and
 * `{name}` become the hero's own; a capital first letter (`{They}`) capitalises the result. The title "the Wanderer" becomes the
 * hero's name once the hero has one, and the bare vocative "Wanderer" does too. A hero who kept the default name changes nothing.
 */
/** What the story calls the hero’s footwear and headgear when it says “boots” or “hat”: the patched hemp wears straw sandals, and nobody but the traveller owns the bamboo hat. */
const FOOTWEAR: Record<Attire, string> = { rags: "sandal", traveller: "boot", scholar: "boot", silk: "boot", armour: "boot" };
const HEADGEAR: Record<Attire, string> = { rags: "headcloth", traveller: "hat", scholar: "cap", silk: "hood", armour: "cap" };

export function personalise(text: string, hero: Hero): string {
  const p = PRONOUNS[hero.gender];
  const slots: Record<string, string> = { ...p, name: hero.name };
  let out = text.replace(/\{(\w+)\}/g, (whole, key: string) => {
    const lower = key.charAt(0).toLowerCase() + key.slice(1);
    const value = slots[lower];
    if (value === undefined) return whole;
    return key.charAt(0) === key.charAt(0).toUpperCase() && key.charAt(0) !== key.charAt(0).toLowerCase() ? cap(value) : value;
  });
  // The hero wears what they chose: the story’s boots and hats are whatever that dress has on its feet and its head.
  out = out
    .replace(/\b([Yy])our boot(s?)\b/g, (_m, y: string, s: string) => `${y}our ${FOOTWEAR[hero.attire]}${s}`)
    .replace(/\b([Yy])our hat\b/g, (_m, y: string) => `${y}our ${HEADGEAR[hero.attire]}`);
  if (hero.name !== DEFAULT_NAME) {
    out = out.replace(/\b(?:the|The) Wanderer\b/g, hero.name).replace(/\b([Aa]) Wanderer\b/g, "$1 wanderer").replace(/\bWanderer\b/g, hero.name);
  }
  return out;
}

// ───────────── what the hero starts with

/** A small push to the opening numbers. Where you come from is felt before a word is said. */
export interface Start {
  stats: Partial<PlayerStats>;
  npc: Partial<NpcState>;
}

const BACKGROUND_START: Record<Background, Partial<PlayerStats>> = {
  orphan: { insight: 6, qi: 4 },
  scholar: { insight: 10 },
  soldier: { qi: 10 },
  merchant: { insight: 5, qi: 3, karma: -2 },
  farmer: { qi: 6, karma: 3 },
  healer: { karma: 6, insight: 4 },
};

const STATUS_START: Record<Status, Partial<NpcState>> = {
  outcast: { respect: -6, suspicion: 8 },
  commoner: {},
  gentry: { respect: 3, suspicion: 3 },
  noble: { respect: 6, suspicion: 6 },
};

const ATTIRE_START: Record<Attire, Partial<NpcState>> = {
  rags: { respect: -2, trust: 2 },
  traveller: {},
  scholar: { respect: 3 },
  silk: { suspicion: 4, respect: 2 },
  armour: { fear: 8, trust: -3 },
};

export function startFor(hero: Hero): Start {
  const sum = (...parts: Partial<NpcState>[]): Partial<NpcState> => {
    const out: Partial<NpcState> = {};
    for (const part of parts) for (const k of Object.keys(part) as (keyof NpcState)[]) out[k] = (out[k] ?? 0) + (part[k] ?? 0);
    return out;
  };
  return { stats: BACKGROUND_START[hero.background], npc: sum(STATUS_START[hero.status], ATTIRE_START[hero.attire]) };
}

// ───────────── standing

/** How much the world below defers to a birth. Realm adds to it faster than any birth can. */
export const STATUS_RANK: Record<Status, number> = { outcast: 0, commoner: 1, gentry: 2, noble: 3 };
const ATTIRE_RANK: Record<Attire, number> = { rags: -1, traveller: 0, scholar: 0, silk: 1, armour: 1 };
export const STANDING_PER_REALM = 2;

export type StandingTier = "despised" | "unremarked" | "regarded" | "honoured" | "revered";

/**
 * How far an NPC bows. Birth and clothes set a floor (an outcast in rags stands at 0, a noble in silk at 4), and every
 * realm adds two, so a Foundation Builder born an outcast already stands above a mortal prince, and by Core Formation nobody asks.
 */
export function standingOf(hero: Hero, realm: number): number {
  return Math.max(0, STATUS_RANK[hero.status] + ATTIRE_RANK[hero.attire] + realm * STANDING_PER_REALM);
}

export function standingTierFor(standing: number): StandingTier {
  if (standing <= 0) return "despised";
  if (standing <= 2) return "unremarked";
  if (standing <= 5) return "regarded";
  if (standing <= 9) return "honoured";
  return "revered";
}

export const STANDING_LABEL: Record<StandingTier, string> = {
  despised: "Despised",
  unremarked: "Unremarked",
  regarded: "Regarded",
  honoured: "Honoured",
  revered: "Revered",
};

/** The lowest standing at which each tier begins, for hints. */
export const STANDING_FLOOR: Record<StandingTier, number> = { despised: 0, unremarked: 1, regarded: 3, honoured: 6, revered: 10 };

/** The realm bands the NPCs of the story tell apart. A mortal and a Core cultivator are not met the same way. */
export type RealmBand = "mortal" | "novice" | "adept" | "sage";

export function realmBandFor(realm: number): RealmBand {
  if (realm <= 0) return "mortal";
  if (realm <= 2) return "novice";
  if (realm <= 4) return "adept";
  return "sage";
}
