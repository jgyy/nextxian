import { realmForPoints } from "./cultivation";
import { startingWealth } from "./economy";
import { restoreHero } from "./hero";
import type { GameState, Story } from "./types";

/**
 * Turns a parsed save back into a game. Returns null when the save does not point at
 * a scene in this story. Saves written before the Elder kept a history of her reactions,
 * or before decisions carried tones, get an empty history or empty tones, and a save from before
 * cultivation starts as a Mortal with no points, so older progress still loads.
 */
export function restoreGame(saved: unknown, story: Story): GameState | null {
  if (!saved || typeof saved !== "object") return null;
  const game = saved as GameState;
  if (typeof game.sceneId !== "string" || !story.scenes[game.sceneId]) return null;
  const cultivation = typeof game.cultivation === "number" ? game.cultivation : 0;
  const hero = restoreHero((saved as { hero?: unknown }).hero);
  return {
    ...game,
    hero,
    // A save from before the purse starts with what the hero would have begun with, and an empty pack.
    wealth: typeof game.wealth === "number" && game.wealth >= 0 ? game.wealth : startingWealth(hero),
    items: game.items && typeof game.items === "object" && !Array.isArray(game.items) ? game.items : {},
    assets: Array.isArray(game.assets) ? game.assets.filter((a) => typeof a === "string") : [],
    lastAside: typeof game.lastAside === "number" ? game.lastAside : -3,
    cultivation,
    realm: typeof game.realm === "number" ? game.realm : realmForPoints(cultivation),
    bonds: game.bonds && typeof game.bonds === "object" ? game.bonds : {},
    decisions: typeof game.decisions === "number" ? game.decisions : game.tones?.length ?? 0,
    flagAt: game.flagAt && typeof game.flagAt === "object" ? game.flagAt : {},
    remarked: Array.isArray(game.remarked) ? game.remarked : [],
    lastRemark: typeof game.lastRemark === "number" ? game.lastRemark : -3,
    history: Array.isArray(game.history) ? game.history : [],
    tones: Array.isArray(game.tones) ? game.tones : [],
  };
}
