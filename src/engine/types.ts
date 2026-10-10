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
  | { kind: "tone"; tone: ChoiceTone; min?: number; within?: number };

export type Effect =
  | { kind: "setFlag"; flag: string; value?: boolean }
  | { kind: "addStat"; stat: PlayerStat; amount: number }
  | { kind: "addNpc"; metric: NpcMetric; amount: number };

/** The NPC reaction tiers, derived from trust. */
export type Tier = "hostile" | "wary" | "neutral" | "warm" | "devoted";

/** How much she respects the player, in four bands. Her comments change when the band does. */
export type RespectTier = "contempt" | "unregarded" | "weighed" | "respected";

/** The NPC's visible mood, derived from her metrics. Drives her portrait and caption. */
export type Mood = "furious" | "afraid" | "suspicious" | "guarded" | "stern" | "softened" | "tender";

export interface NpcScenario {
  id: string;
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
  effects?: Effect[];
  npcScenario?: string;
}

export interface Scene {
  id: string;
  /** The heading shown above the scene. Every scene has one. */
  title: string;
  paragraphs: string[];
  /** Paragraphs added only when their conditions hold. */
  extras?: { when: Condition[]; paragraphs: string[] }[];
  choices: Choice[];
  /**
   * Lines the NPC speaks on her own when the scene opens and the conditions hold.
   * They appear after the scene text, so she reacts to what the player has become.
   */
  interjections?: { when: Condition[]; line: string }[];
  /** Present on ending scenes. The value is the ending's heading. */
  ending?: string;
}

export interface NpcProfile {
  name: string;
  title: string;
  description: string;
}

export interface Story {
  title: string;
  startSceneId: string;
  npc: NpcProfile;
  scenes: Record<string, Scene>;
  scenarios: Record<string, NpcScenario>;
}

export interface LogEntry {
  kind: "narration" | "heading" | "player" | "npc";
  text: string;
  speaker?: string;
}

export interface GameState {
  sceneId: string;
  stats: PlayerStats;
  npc: NpcState;
  flags: Record<string, boolean>;
  /** Ids of the NPC scenarios she has reacted to, oldest first. The `said` condition reads it. */
  history: string[];
  /** The tone of each decision the player has made, oldest first. The `tone` condition reads it. */
  tones: ChoiceTone[];
  log: LogEntry[];
  visited: string[];
}

export interface ChoiceView {
  choice: Choice;
  available: boolean;
  hint?: string;
}
