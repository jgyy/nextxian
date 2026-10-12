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
/** Where the story finds the hero: each origin has a prologue of its own that ends on the same mountain. */
export type Origin = "river" | "porter" | "rogue" | "heir" | "courier" | "exile" | "cave" | "furnace" | "lamp" | "listener" | "struck" | "dream";
/** The hero’s cultivation talent: the roots and the nature of the body that qi has to pass through. */
export type Talent = "wood" | "fire" | "earth" | "metal" | "water" | "mixed" | "heaven" | "late";
/** The hero’s profession Dao: the craft they cultivate beside their qi. */
export type Dao = "none" | "alchemy" | "forging" | "talisman" | "formation" | "beast" | "sword" | "healing" | "fate";

export interface Hero {
  /** What the Wanderer gives when asked. Everyone in the story says it in place of "Wanderer". */
  name: string;
  gender: Gender;
  looks: Looks;
  background: Background;
  attire: Attire;
  status: Status;
  origin: Origin;
  talent: Talent;
  dao: Dao;
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


export const ORIGINS: readonly HeroOption<Origin>[] = [
  { value: "river", label: "The river village", blurb: "Raised by a teacher who told you nothing, and sent up the mountain in the rain. The road the story was written for." },
  { value: "porter", label: "A porter coming home", blurb: "You carried loads for the sect for years, and were sent down to the foothills the week the jade was taken. You climb back to a door that knows your face." },
  { value: "rogue", label: "A rogue after the bounty", blurb: "No sect, no teacher, a little cultivation scraped from the roads, and a reward posted for whoever finds the thief." },
  { value: "heir", label: "Heir of a ruined house", blurb: "Your family’s manor burned, its debts did not, and the Law Hall holds the one paper that could clear your name." },
  { value: "courier", label: "A Concord courier", blurb: "You carry a sealed notice from the Concord of Nine Peaks, and everyone at the gate will want to know what it says." },
  { value: "exile", label: "A sect’s exile", blurb: "You were a disciple of the Windward Sword Pavilion until a ruling struck you out. You arrive with a stolen breath of cultivation and a grudge." },
  { value: "cave", label: "The sealed cave", blurb: "You fell through a rotten floor of the mountain and woke beside a dead cultivator’s seat. What they left is already in your breath. You begin as a Qi Condenser, and the sect does not know it." },
  { value: "furnace", label: "A pill-house apprentice", blurb: "You fed the furnaces of a Concord pill house for four years, until the master was found beside a cold cauldron. You carry his last pill, half cooked, and the only name that can finish it." },
  { value: "lamp", label: "A roadside lamp-keeper", blurb: "You kept a shrine lamp lit on the mountain road for seven winters, one steady breath at a time. Tonight it burned blue. You cultivate slowly, evenly and without a day missed." },
  { value: "listener", label: "A hedge-listener’s ward", blurb: "An unregistered Listener taught you to hear names in the wind. You are quick to hear what qi says and slow to be believed, and the sect’s wardens mistrust a ward like you on sight." },
  { value: "struck", label: "Struck by heaven", blurb: "Lightning took your village’s roof and walked through you without killing you. Your roots burned open in a night. You begin a Qi Condenser, far quicker than you can yet steer." },
  { value: "dream", label: "The dreamer of a stranger’s breath", blurb: "Every night since you left the river village you have dreamed another person’s breath-art, and every morning you know a little more of it. It carries you fast through the first realms, and slows where it ends." },
];

export const TALENTS: readonly HeroOption<Talent>[] = [
  { value: "wood", label: "Verdant root", blurb: "Qi comes to you like sap. Herbs lean toward your hand, and healing and growing things answer." },
  { value: "fire", label: "Cinnabar root", blurb: "Quick and hot. Furnaces, kilns and forges feel you before you speak, and so does your temper." },
  { value: "earth", label: "Mountain root", blurb: "Slow, heavy and hard to move. Stone, ground and walls keep your counsel, and a heart demon finds you stubborn." },
  { value: "metal", label: "Bright-metal root", blurb: "Sharp and clean. Blades, coin and hard bright things know your qi at once." },
  { value: "water", label: "Tide root", blurb: "Qi that runs round obstacles. Rivers, mist, ink and rumour carry you where they like." },
  { value: "mixed", label: "Mixed roots", blurb: "All five roots, none of them strong. You cultivate at the plain rate and can borrow a little from any element." },
  { value: "heaven", label: "Heaven-marked", blurb: "A thunder root, rare as a comet. You cultivate far faster than the rest, and the hall watches you for it." },
  { value: "late", label: "Late bloom", blurb: "Your roots stay shut for years and then open all at once. You are slow until Core Formation and fast after." },
];

export const DAOS: readonly HeroOption<Dao>[] = [
  { value: "none", label: "Open hand", blurb: "No craft yet. Every master tempts you, and you learn a little from each, and master none." },
  { value: "alchemy", label: "Pill Dao", blurb: "Alchemy. A pill carries you over a threshold from further back than it does anyone else." },
  { value: "forging", label: "Forge Dao", blurb: "Artifacts. The tools and relics you carry work half again as hard." },
  { value: "talisman", label: "Talisman Dao", blurb: "Script and ward. A ward on your qi halves what a push beyond your realm costs." },
  { value: "formation", label: "Formation Dao", blurb: "Arrays. What you lease or hold quickens your cultivation twice as much." },
  { value: "beast", label: "Beast Dao", blurb: "Spirit beasts. A companion hunts for you, so going hungry costs you half and living away from the sect costs less." },
  { value: "sword", label: "Sword Dao", blurb: "The blade. You master a deed a realm sooner, and a forceful choice cultivates as well as a quiet one." },
  { value: "healing", label: "Healer’s Dao", blurb: "Medicine. You mend the wounds of the qi, and a heart demon takes a far darker karma to hold you back." },
  { value: "fate", label: "Fate Dao", blurb: "Divination. You read the cost before you pay it, and half of any karma you would lose is never lost." },
];

export const HERO_OPTIONS: Record<HeroField, readonly HeroOption[]> = {
  origin: ORIGINS,
  talent: TALENTS,
  dao: DAOS,
  gender: GENDERS,
  looks: LOOKS,
  background: BACKGROUNDS,
  attire: ATTIRES,
  status: STATUSES,
};

/** The order the fields are asked in, and the order the NPCs' asides cycle through them. */
export const HERO_FIELDS: readonly HeroField[] = ["origin", "talent", "dao", "status", "attire", "looks", "background", "gender"];

export const FIELD_TITLE: Record<HeroField, string> = {
  origin: "Where your story begins",
  talent: "The roots you were born with",
  dao: "The Dao you cultivate beside your qi",
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
  origin: "river",
  talent: "mixed",
  dao: "none",
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
  const where: Record<Origin, string> = {
    river: "from the river village",
    porter: "a porter coming home",
    rogue: "a rogue after the bounty",
    heir: "the heir of a ruined house",
    courier: "a Concord courier",
    exile: "an exile of the Windward Sword Pavilion",
    cave: "the finder of a sealed cave",
    furnace: "a pill-house apprentice",
    lamp: "a roadside lamp-keeper",
    listener: "a hedge-listener’s ward",
    struck: "someone struck by heaven",
    dream: "the dreamer of a stranger’s breath",
  };
  const roots: Record<Talent, string> = {
    wood: "a verdant root",
    fire: "a cinnabar root",
    earth: "a mountain root",
    metal: "a bright-metal root",
    water: "a tide root",
    mixed: "mixed roots",
    heaven: "a heaven-marked root",
    late: "a late-blooming root",
  };
  const craft = hero.dao === "none" ? "no Dao yet" : `the ${DAOS.find((d) => d.value === hero.dao)?.label ?? ""}`;
  return `${hero.name} is ${who[hero.gender]}, ${looks[hero.looks]}, once ${trade[hero.background]}, ${dress[hero.attire]}, ${rank[hero.status]}, ${where[hero.origin]}, with ${roots[hero.talent]} and ${craft}.`;
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

const ORIGIN_START: Record<Origin, { stats: Partial<PlayerStats>; npc: Partial<NpcState> }> = {
  river: { stats: {}, npc: {} },
  porter: { stats: { qi: 4 }, npc: { trust: 6, suspicion: -10 } },
  rogue: { stats: { qi: 6, insight: 3, karma: -3 }, npc: { suspicion: 6, respect: -2 } },
  heir: { stats: { insight: 4 }, npc: { respect: 3, suspicion: 4 } },
  courier: { stats: { insight: 5 }, npc: { respect: 4, suspicion: 8 } },
  exile: { stats: { qi: 8, karma: -4 }, npc: { suspicion: 10, fear: 4, respect: -3 } },
  cave: { stats: { qi: 6, insight: 2 }, npc: { suspicion: 6 } },
  furnace: { stats: { insight: 4, karma: 1 }, npc: { trust: 2 } },
  lamp: { stats: { karma: 4, qi: 2 }, npc: { trust: 3, suspicion: -4 } },
  listener: { stats: { insight: 6, karma: -1 }, npc: { suspicion: 12, fear: 3 } },
  struck: { stats: { qi: 8 }, npc: { fear: 6, respect: 2, suspicion: 4 } },
  dream: { stats: { insight: 8 }, npc: { suspicion: 6, respect: 1 } },
};

const TALENT_START: Record<Talent, { stats: Partial<PlayerStats>; npc: Partial<NpcState> }> = {
  wood: { stats: { karma: 2 }, npc: {} },
  fire: { stats: { qi: 5 }, npc: { fear: 2 } },
  earth: { stats: { qi: 3 }, npc: { trust: 2 } },
  metal: { stats: { insight: 2 }, npc: { respect: 1 } },
  water: { stats: { insight: 3 }, npc: { suspicion: 2 } },
  mixed: { stats: {}, npc: {} },
  heaven: { stats: { qi: 6 }, npc: { respect: 4, fear: 6, suspicion: 8 } },
  late: { stats: { insight: 3 }, npc: { respect: -2 } },
};

const DAO_START: Record<Dao, Partial<PlayerStats>> = {
  none: {},
  alchemy: { insight: 3 },
  forging: { qi: 3 },
  talisman: { insight: 4 },
  formation: { insight: 4 },
  beast: { karma: 2, qi: 2 },
  sword: { qi: 6 },
  healing: { karma: 5 },
  fate: { insight: 6 },
};

/** Cultivation points the hero begins with, from a past life as a cultivator. A mortal who has gathered a little is still a mortal. */
const ORIGIN_POINTS: Record<Origin, number> = { river: 0, porter: 2, rogue: 6, heir: 0, courier: 3, exile: 12, cave: 22, furnace: 9, lamp: 10, listener: 8, struck: 16, dream: 5 };
export const startingPoints = (hero: Hero): number => ORIGIN_POINTS[hero.origin];

export function startFor(hero: Hero): Start {
  const sum = (...parts: Partial<NpcState>[]): Partial<NpcState> => {
    const out: Partial<NpcState> = {};
    for (const part of parts) for (const k of Object.keys(part) as (keyof NpcState)[]) out[k] = (out[k] ?? 0) + (part[k] ?? 0);
    return out;
  };
  const stats = (...parts: Partial<PlayerStats>[]): Partial<PlayerStats> => {
    const out: Partial<PlayerStats> = {};
    for (const part of parts) for (const k of Object.keys(part) as (keyof PlayerStats)[]) out[k] = (out[k] ?? 0) + (part[k] ?? 0);
    return out;
  };
  return {
    stats: stats(BACKGROUND_START[hero.background], ORIGIN_START[hero.origin].stats, TALENT_START[hero.talent].stats, DAO_START[hero.dao]),
    npc: sum(STATUS_START[hero.status], ATTIRE_START[hero.attire], ORIGIN_START[hero.origin].npc, TALENT_START[hero.talent].npc),
  };
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
