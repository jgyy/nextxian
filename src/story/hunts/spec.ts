import type { Dao } from "@/engine/hero";
import type { Element } from "@/engine/path";
import type { ChoiceTone } from "@/engine/types";

/** What a foe is made of, which sets the words for its body, its cry, its lair and the way it falls. */
export type Kind = "beast" | "serpent" | "spirit" | "plant" | "swarm" | "construct" | "wraith" | "drake";

/**
 * Everything one hunt needs from its author. The builder turns it into twenty-five scenes: the sighting, four ways of going at the foe (head-on, by
 * stalking, by reading it, by drawing it off) of five scenes each, three endings (it falls, it is driven off, it throws the hero down) and the way back.
 */
export interface FoeSpec {
  id: string;
  /** What hunters call it, with its article: “the tusk-boar”. */
  name: string;
  /** The heading of its scenes: “The Tusk-Boar of the Barley Terraces”. */
  title: string;
  /** Where it is found, with its article: “the barley terraces”. */
  place: string;
  kind: Kind;
  /** The element the foe is made of. */
  element: Element;
  /** The element it fears: a root that answers it is worth a stroke. */
  weak: Element;
  /** The Dao whose craft it has no answer to. */
  bane: Exclude<Dao, "none">;
  /** The tone of decision it gives ground to. A hero who chooses in that tone at the turns of the fight wins a foothold each time. */
  soft: ChoiceTone;
  /** Its level above the first of its realm, 3 to 8. */
  offset: number;
  /** What hunters find before they find it, as a noun phrase: “torn turnips and a smell of hot mud”. */
  omen: string;
  /** The first sight of it: one or two sentences. */
  sight: string;
  /** What it does before it strikes, as a clause: “it paws the ground and blows twice through its nose”. */
  tell: string;
  /** How it strikes, as a clause: “comes down the row like a cart with no driver”. */
  strike: string;
  /** What it does to someone it catches, as a clause: “tosses you into the bank”. */
  wound: string;
  /** What a hunter takes from it, as a noun phrase: “a tusk as long as your forearm”. */
  hide: string;
  spoil: { name: string; blurb: string };
  /** Why it is here, in one sentence. A hero who searches its lair finds this out. */
  lore: string;
  /** What the foe, or the place, or the people near it, make of a woman, a man and someone who gives no answer. One sentence each. */
  sees: { woman: string; man: string; unspoken: string };
  /** Eight paragraphs, two for each way of going at it: the first exchange and the crisis. Order: head-on, stalking, reading, drawing off. */
  beats: [string, string, string, string, string, string, string, string];
}

/** One hub: the place the hunts open from, and the four foes found around it. */
export interface Wayside14 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the foes here stand in. */
  realm: number;
  /** What the Elder says when the hero has dealt with all four. */
  remark: string;
}
