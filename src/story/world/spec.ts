import type { Course, Part } from "@/engine/world";

/**
 * Everything one affair needs from its author. The builder turns it into twenty-five scenes: the word of it, four parts of five scenes each (looking on,
 * lending a hand, taking a side, turning it), the aftermath, the word going out, the ledger and the way back. The affair has a fate, which is what the world
 * does with it if no hand is laid on it, and the parts move it from there (see `courseAfter`).
 */
export interface AffairSpec {
  /** One word or two run together, lowercase, no underscore: scene ids, flags and the Elder’s scenario derive from it. */
  id: string;
  /** The heading of its scenes: “The Lower Granary”. */
  title: string;
  /** Where it is, with its article: “the lower granary at Barley Cross”. */
  place: string;
  /** Who it falls on, with their article: “the terrace families”. */
  people: string;
  /** What is at stake, as a noun phrase: “a winter’s grain”. */
  stake: string;
  /** What the world does with it if no one lays a hand on it. */
  fate: Course;
  /** The one who stands in the way, or holds the thing, with a name: “the lock-steward Dong”. */
  foe: string;
  /** Someone who can tell the hero how it lies, with a name: “the widow Ma Ruyi”. */
  ally: string;
  /** The place where it gives, as a noun phrase: “the second key to the lower store”. */
  lever: string;
  /** How word of it reaches the hero: one or two sentences. */
  news: string;
  /** What each part would be here, as a clause that follows “to”: “watch the steward weigh the grain from the lock-house door”. */
  deed: Record<Part, string>;
  /** For each part, three paragraphs: how it begins, how the lay of it shows, and the moment it turns on. */
  tracks: Record<Part, [string, string, string]>;
  /** What the hero reads at the end of a part, by the course the affair has taken. */
  leaves: Record<Course, string>;
  /** One sentence of what the world does next, by course. Read in the ledger, in the word that goes out and at the Gathering. */
  after: Record<Course, string>;
  /** How the people there read a woman, a man and someone who gives no answer. One sentence each. */
  sees: { woman: string; man: string; unspoken: string };
  /** What the people give the hero who has taken a part in it. */
  token: { name: string; blurb: string };
}

/** One reach: the place the affairs are heard of from, and the four affairs found there. */
export interface ReachSpec {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the reach to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this reach opens from. */
  origin: string;
  label: string;
  /** The tier of the reach: the realm a hero is expected to bring to the hardest of its doors. */
  realm: number;
  /** How the reach has moved on, early in the story, in the middle and late. Shown by how many decisions the hero has made. */
  seasons: [string, string, string];
  /** What the Elder says when the hero has seen all four through. */
  remark: string;
  /** What this reach sends to the Last Sealing when it is answered, and when it is not. */
  gathering: { answered: string; unanswered: string };
}
