import type { Hero, HeroField } from "./hero";
import type { Element } from "./path";

/** Player-facing numeric stats. `karma` may go negative; the others stay in 0..100. */
export type PlayerStat = "qi" | "karma" | "insight";
export type PlayerStats = Record<PlayerStat, number>;

/** How the NPC feels about the player, tracked independently of the player's stats. */
export type NpcMetric = "trust" | "respect" | "fear" | "suspicion";
export type NpcState = Record<NpcMetric, number>;

/**
 * The kind of decision a player makes. Each tone has its own colour on the stage, and the
 * Elder keeps count of them, so a pattern of decisions changes what she says.
 */
export type ChoiceTone = "truth" | "mercy" | "inquiry" | "deceit" | "force" | "quiet";

/** Flags are the game's memory: set by choices, read by conditions, and written by the NPC. */
export type Condition =
  | { kind: "flag"; flag: string; is?: boolean }
  | { kind: "stat"; stat: PlayerStat; min?: number; max?: number }
  | { kind: "npc"; metric: NpcMetric; min?: number; max?: number }
  /**
   * She reacted to this scenario. `min` is how many times it must appear (default 1).
   * `within` looks only at her last N reactions, so `within: 1` means "what she just heard".
   */
  | { kind: "said"; scenario: string; min?: number; within?: number }
  /**
   * The player made decisions of this tone. `min` is how many (default 1), and `within`
   * looks only at the last N decisions. Page turns are not decisions, so they do not count.
   */
  | { kind: "tone"; tone: ChoiceTone; min?: number; within?: number }
  /** The player's cultivation realm, as an index into `REALMS`. 0 is Mortal. */
  | { kind: "realm"; min?: number; max?: number }
  /** How far through the current realm the hero is, in percent of the way to the next threshold. 100 at the top of the ladder. */
  | { kind: "progress"; min?: number; max?: number }
  /** How many side roads the player has finished (flags starting `road_done_`). */
  | { kind: "roads"; min?: number; max?: number }
  /** How a companion feels about the player. Companions are listed in `Story.companions`. */
  | { kind: "bond"; npc: string; min?: number; max?: number }
  /** How many decisions have passed since a flag was set. False when the flag is not set. */
  | { kind: "since"; flag: string; min?: number; max?: number }
  /** How many decisions the player has made in all. */
  | { kind: "decisions"; min?: number; max?: number }
  /** The Elder's face, as `moodFor` reads it. */
  | { kind: "mood"; is: Mood }
  /** The scene the player is standing in starts with this text. */
  | { kind: "scene"; prefix: string }
  /** How many flags that start with this text are on. Arcs count their finished parts this way. */
  | { kind: "count"; prefix: string; min?: number; max?: number }
  /** The hero's character: `field` is one of gender, looks, background, attire, status, and the value must be in `is` (or not in `not`). */
  | { kind: "hero"; field: HeroField; is?: string[]; not?: string[] }
  /** How far the world defers to the hero: birth and clothes plus two per realm. See `standingOf`. */
  | { kind: "standing"; min?: number; max?: number }
  /** Spirit stones in the purse. */
  | { kind: "wealth"; min?: number; max?: number }
  /** How many of an item the hero carries. `min` defaults to 1, or to 0 when only `max` is given, so `max: 0` means none. */
  | { kind: "item"; item: string; min?: number; max?: number }
  /** Whether the hero holds an asset (a lease, a plot, a share). `is` defaults to true. */
  | { kind: "asset"; asset: string; is?: boolean }
  /** How many holdings the hero has. */
  | { kind: "holdings"; min?: number; max?: number }
  /** The hero’s cultivation speed, in percent of the plain rate. */
  | { kind: "speed"; min?: number; max?: number }
  /** The hero’s mastery rank in their Dao, as an index into `DAO_RANKS`. 0 is Novice. */
  | { kind: "mastery"; min?: number; max?: number }
  /** How strongly the hero’s roots answer an element: 0 none, 1 partial, 2 kindred. */
  | { kind: "affinity"; element: Element; min?: number; max?: number }
  /** Whether the hero is Unfed: away from the sect with a purse too light for the cost of living. `is` defaults to true. */
  | { kind: "unfed"; is?: boolean }
  /** How old the hero is now: the years they began with, and a year for every stretch of decisions. */
  | { kind: "age"; min?: number; max?: number }
  /** How many years the hero has left at their realm, with any years they have been given. Zero or less means they are past them. */
  | { kind: "years"; min?: number; max?: number };

export type Effect =
  | { kind: "setFlag"; flag: string; value?: boolean }
  /** Mastery points in the hero’s own Dao. A hero with no Dao earns none. */
  | { kind: "addDao"; amount: number }
  | { kind: "addStat"; stat: PlayerStat; amount: number }
  | { kind: "addNpc"; metric: NpcMetric; amount: number }
  /** Cultivation points on top of the small gain every decision already brings. */
  | { kind: "addCultivation"; amount: number }
  /** Raises the hero’s points to the threshold of the next realm, if they are short of it. A heart demon still holds the door: the points gather, and the realm waits. */
  | { kind: "reachGate" }
  /** Changes how a companion feels about the player. An amount of 0 introduces them. */
  | { kind: "addBond"; npc: string; amount: number }
  /** Spirit stones into or out of the purse. The purse never goes below zero, so a choice that spends needs a `wealth` requirement. */
  | { kind: "addWealth"; amount: number }
  /** Puts items in the pack. `count` defaults to 1. */
  | { kind: "giveItem"; item: string; count?: number }
  /** Takes items out of the pack. `count` defaults to 1, and the pack never holds fewer than none. */
  | { kind: "takeItem"; item: string; count?: number }
  /** The hero comes to hold an asset. It pays and costs on every payday, and may add to cultivation speed. */
  | { kind: "grantAsset"; asset: string }
  /** The hero stops holding an asset, by sale, loss or seizure. */
  | { kind: "loseAsset"; asset: string }
  /** Years added to the span the hero’s realm allows: an elixir, a debt of life paid, a road’s gift. */
  | { kind: "addYears"; amount: number };

/** The NPC reaction tiers, derived from trust. */
export type Tier = "hostile" | "wary" | "neutral" | "warm" | "devoted";

/** How much she respects the player, in four bands. Her comments change when the band does. */
export type RespectTier = "contempt" | "unregarded" | "weighed" | "respected";

/** The NPC's visible mood, derived from her metrics. Drives her portrait and caption. */
export type Mood = "furious" | "afraid" | "suspicious" | "guarded" | "stern" | "softened" | "tender";

export interface NpcScenario {
  id: string;
  /** A companion's id. When set, the scenario is theirs: they answer by bond, and `delta.trust` moves the bond. */
  npc?: string;
  /** Short author-facing description of what the player did. */
  summary: string;
  /** Change to the NPC's metrics, applied after the reaction is chosen. */
  delta: Partial<NpcState>;
  /** One line per trust tier. Every tier must be distinct. */
  lines: Record<Tier, string>;
  /** Overrides used when the NPC remembers something earlier in the story. First match wins. */
  memory?: { when: Condition[]; line: string }[];
  /** Flags the NPC writes to memory after reacting. */
  remember?: string[];
}

export interface Choice {
  id: string;
  label: string;
  /** The kind of decision. It sets the option's colour, and the Elder counts it. */
  tone: ChoiceTone;
  next: string;
  requires?: Condition[];
  /** Shown beside a locked choice explaining what is missing. */
  lockedHint?: string;
  /**
   * The choice is not shown at all while its requirements are unmet. It is for doors that open to who the hero *is* (a woman’s
   * door, a fire root’s door), which another hero could never open and so should not be told about. It does not count toward
   * the four choices every decision must have.
   */
  hideLocked?: boolean;
  effects?: Effect[];
  /** The Elder's reaction to this choice. */
  npcScenario?: string;
  /** A companion's reaction to this choice, spoken after the Elder's. */
  allyScenario?: string;
  /**
   * The realm this choice asks of the player (an index into REALMS). A player below it can still try, but pays for it;
   * a player two realms above it finds it easy.
   */
  needsRealm?: number;
}

export interface Scene {
  id: string;
  /** The heading shown above the scene. Every scene has one. */
  title: string;
  paragraphs: string[];
  /** Paragraphs added only when their conditions hold. */
  extras?: {
    when: Condition[];
    paragraphs: string[];
    /** Extras sharing a group are alternatives: only the first whose conditions hold is shown, and the group counts once toward the word cap. */
    group?: string;
  }[];
  choices: Choice[];
  /**
   * Lines the NPC speaks on her own when the scene opens and the conditions hold.
   * They appear after the scene text, so she reacts to what the player has become.
   */
  interjections?: { when: Condition[]; line: string; /** A companion's id; the Elder speaks when absent. */ speaker?: string }[];
  /** Present on ending scenes. The value is the ending's heading. */
  ending?: string;
}

export interface NpcProfile {
  name: string;
  title: string;
  description: string;
}

/** Someone who travels with the player or turns up often, and keeps their own count of how they feel. */
export interface Companion {
  id: string;
  name: string;
  title: string;
  description: string;
  /** One character for the portrait. */
  glyph: string;
}

/**
 * A line somebody says on their own after a decision, once, when its conditions hold. A remark with a `since`
 * condition is a callback: it comes back some decisions after the player did something.
 */
export interface Remark {
  id: string;
  when: Condition[];
  line: string;
  /** A companion's id; the Elder speaks when absent. */
  speaker?: string;
}

/** What an item is for. Pills break a realm open, tools and relics speed cultivation while carried, the rest are goods to trade. */
export type ItemKind = "pill" | "tool" | "relic" | "material" | "token" | "scripture";

/** A thing the hero can carry. Defined once in the story, held by id. */
export interface ItemDef {
  id: string;
  name: string;
  kind: ItemKind;
  /** One line for the pack. */
  blurb: string;
  /** What a buyer pays, in spirit stones. Selling is a choice in the story, not a button. */
  value: number;
  /** Percentage points of cultivation speed while it is carried, once the hero has reached `needsRealm`. */
  speed?: number;
  /** The realm that carrying it pays off at; below it, the item adds nothing to speed. */
  needsRealm?: number;
  /** A pill: the realm it helps its eater into. Eaten when the hero is within reach of that realm. */
  aid?: number;
}

/** Something the hero holds that pays and costs on every payday: a stall, a plot, a share, a cave. */
export interface AssetDef {
  id: string;
  name: string;
  blurb: string;
  /** Spirit stones it pays on each payday. */
  income: number;
  /** Spirit stones it costs on each payday. An asset whose upkeep cannot be met is seized. */
  upkeep: number;
  /** Percentage points of cultivation speed while held. */
  speed?: number;
  /** The realm needed to hold it. */
  needsRealm?: number;
}

export interface Story {
  title: string;
  startSceneId: string;
  npc: NpcProfile;
  scenes: Record<string, Scene>;
  scenarios: Record<string, NpcScenario>;
  /** People other than the Elder, by id. */
  companions?: Record<string, Companion>;
  /** Unprompted remarks, most specific first. At most one is said per decision. */
  remarks?: Remark[];
  /**
   * What the Elder says about the hero, by part of the hero, then value, then her attitude. She works through these
   * between her replies. See `aside` in the engine.
   */
  asides?: Record<HeroField | "realm", Record<string, Record<Tier, string>>>;
  /** Everything the hero can carry, by id. */
  items?: Record<string, ItemDef>;
  /** Everything the hero can come to hold, by id. */
  assets?: Record<string, AssetDef>;
  /** The scene from which the sect stops paying the hero a stipend and the hero starts to pay for their own living. */
  leavesSect?: string;
}

export interface LogEntry {
  kind: "narration" | "heading" | "player" | "npc" | "realm" | "strain" | "ledger";
  text: string;
  speaker?: string;
}

export interface GameState {
  /** The character the player made. It never changes during a game. */
  hero: Hero;
  sceneId: string;
  stats: PlayerStats;
  npc: NpcState;
  flags: Record<string, boolean>;
  /** Ids of the NPC scenarios she has reacted to, oldest first. The `said` condition reads it. */
  history: string[];
  /** The tone of each decision the player has made, oldest first. The `tone` condition reads it. */
  tones: ChoiceTone[];
  /** Cultivation points earned so far. They grow, except when a choice beyond the hero’s realm costs some. */
  cultivation: number;
  /** Index of the player's current realm in `REALMS`. The player starts as a Mortal (0). */
  realm: number;
  /** How each companion the player has met feels, from -100 to 100. */
  bonds: Record<string, number>;
  /** How many decisions the player has made. */
  decisions: number;
  /** The decision count at which each flag was last switched on. The `since` condition reads it. */
  flagAt: Record<string, number>;
  /** Ids of the remarks already said. A remark is said once. */
  remarked: string[];
  /** The decision on which someone last spoke unprompted. Remarks keep a distance from each other. */
  lastRemark: number;
  /** The decision on which the Elder last commented on the hero. */
  lastAside: number;
  /** Mastery points in the hero’s Dao. The rank is `daoRankOf`. */
  daoPoints: number;
  /** Spirit stones in the purse. */
  wealth: number;
  /** What the hero carries, by item id. Counts above zero only. */
  items: Record<string, number>;
  /** What the hero holds, by asset id, in the order they came to hold it. */
  assets: string[];
  /** Years given to the hero’s span on top of what their realm allows. */
  years: number;
  /** The hero’s cultivation speed in percent, worked out after every choice from their trade, pack and holdings. */
  speed: number;
  /** True while the hero is away from the sect and cannot pay the cost of living. */
  unfed: boolean;
  log: LogEntry[];
  visited: string[];
}

export interface ChoiceView {
  choice: Choice;
  available: boolean;
  hint?: string;
  /** Set when the choice asks for a realm above the player's: how many realms short they are. */
  strain?: { needs: number; gap: number };
}
