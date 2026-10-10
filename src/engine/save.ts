import type { GameState, Story } from "./types";

/**
 * Turns a parsed save back into a game. Returns null when the save does not point at
 * a scene in this story. Saves written before the Elder kept a history of her reactions
 * have no history, so theirs starts empty.
 */
export function restoreGame(saved: unknown, story: Story): GameState | null {
  if (!saved || typeof saved !== "object") return null;
  const game = saved as GameState;
  if (typeof game.sceneId !== "string" || !story.scenes[game.sceneId]) return null;
  return { ...game, history: Array.isArray(game.history) ? game.history : [] };
}
