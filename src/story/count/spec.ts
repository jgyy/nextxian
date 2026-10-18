import type { ChoiceTone } from "@/engine/types";

/** Four of a thing, one for each way of spending a unit of time, in the order the road lists them. */
export type Four<T> = [T, T, T, T];

/**
 * One beat of a road: a single unit of the realm’s own time (a bell, a day, a season, a year, a decade, a generation, a lifetime, a dynasty, an age, an era)
 * and everything the hero reads while it goes by. The builder turns it into ten scenes: the unit opening, four ways of spending it, the turn within it, what
 * is left when it has gone, the keeper, the Elder and what the beat leaves.
 */
export interface Beat {
  /** The beat’s own name, without its road: “The First Bell”. */
  name: string;
  /** The unit opening: where the hero stands as it begins and what is asked of them. Two sentences or three. */
  open: string;
  /** What the hero does with the unit, as four choices. The unit’s cost is added by the builder. */
  ways: Four<string>;
  /** What each of the four ways is like, once the hero has taken it. */
  does: Four<string>;
  /** The turn within the unit: the thing that happens whichever way it was spent. */
  turn: string;
  /** What is left when the unit has gone: the world as it has become. */
  after: string;
  /** The one who keeps the count, or who the count keeps, as they are at this beat. */
  keeper: string;
  /** The hero puts the beat to the Elder: where, and how she takes it. */
  elderBody: string;
  /** What the Elder says. */
  elderLine: string;
  /** What the beat leaves the hero with. */
  leaves: string;
}

/** What the Elder says to a hero who spends a realm’s unit, and to one who asks her about it, by how much she trusts them. */
export interface RoadLines {
  spend: Record<"hostile" | "wary" | "neutral" | "warm" | "devoted", string>;
  ask: Record<"hostile" | "wary" | "neutral" | "warm" | "devoted", string>;
}

/**
 * Everything one Long Count road needs from its author. A road keeps a realm’s own sense of time: it is a place where the realm’s unit is spent ten times over, and
 * each time the calendar moves by that unit, the hero ages by it, and the keeper, the weather and the world change by it. The road is open to a hero as far
 * as the layers they have reached, and as far as the years they can afford.
 */
export interface Road {
  realm: number;
  /** The heading shared by all its scenes: “The Bell Row”. */
  short: string;
  hub: {
    title: string;
    paragraphs: [string, string];
    /** What the player reads on coming back from the road to the scene it branched from. */
    back: string;
    /** The scene of the main line or the books that this road opens from. */
    origin: string;
    label: string;
    /** What the Elder says when all ten units have been spent. */
    remark: string;
  };
  /** The one who keeps the count, as the hero names them in choices: “Auntie Mo”. */
  keeper: string;
  /** What one unit costs, as a phrase: “an hour”, “a season”, “a decade”. */
  cost: string;
  /** The name of the unit, singular: “bell”. Used in labels and in the log. */
  unit: string;
  /** The tones of the four ways, in order. */
  tones: Four<ChoiceTone>;
  /** The names of the four ways, as they head their scenes: “Labour”. */
  wayNames: Four<string>;
  /** Four ways to press the Elder for more than she has said. */
  press: Four<string>;
  /** What the hero reads at the turn, by how the unit was spent. One short sentence each. */
  wayTurn: Four<string>;
  /** What the hero reads once the unit has gone, by how it was spent. One short sentence each. */
  wayAfter: Four<string>;
  /** Four ways to meet the turn. Each has three wordings; a beat reads one of them. */
  answers: Four<[string, string, string]>;
  /** What a beat leaves, added to what it leaves, by how the hero met the turn. */
  answerLeaves: Four<string>;
  /** Ways to go on from a way to the turn. Four wordings. */
  onward: Four<string>;
  /** Ways to close a beat and go back to the road’s hub. Four wordings, one for each tone. */
  closing: Four<string>;
  /** Ways to go to the keeper, to the Elder, and to what is left, four wordings each. */
  toKeeper: Four<string>;
  toElder: Four<string>;
  toLeaves: Four<string>;
  /** The Elder’s replies. */
  lines: RoadLines;
  beats: Beat[];
}
