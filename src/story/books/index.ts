import type { Book } from "./types";

/**
 * The books after the first, in reading order. Each book lists its arcs; the story index parses them, adds their scenes
 * to the chapter list, and merges their scenarios, remarks and echoes into the story.
 */
export const books: Book[] = [];
