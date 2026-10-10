/**
 * Counts words the way the word-count report does: whitespace-separated pieces that
 * contain at least one letter or digit. Punctuation on its own is not a word.
 */
export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}
