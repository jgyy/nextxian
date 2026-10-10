import type { Book } from "./types";
import { censors } from "./b2/censors";
import { departure } from "./b2/departure";
import { frame } from "./b2/frame";
import { willow } from "./b2/willow";
import { assize } from "./b2/assize";

/**
 * The books after the first, in reading order. Each book lists its arcs; the story index parses them, adds their scenes
 * to the chapter list, and merges their scenarios, remarks and echoes into the story.
 */
export const books: Book[] = [
  {
    id: "b2",
    name: "Book Two: The River of Ledgers",
    arcs: [frame, censors, departure, willow, assize],
  },
];
