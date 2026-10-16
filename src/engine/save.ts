import { realmForPoints } from "./cultivation";
import { settle } from "./game";
import { startingWealth } from "./economy";
import { ATTIRES, restoreHero } from "./hero";
import { ownedGarments } from "./wardrobe";
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
  const items = game.items && typeof game.items === "object" && !Array.isArray(game.items) ? game.items : {};
  const restored: GameState = {
    ...game,
    hero,
    // A save from before the purse starts with what the hero would have begun with, and an empty pack.
    daoPoints: typeof game.daoPoints === "number" && game.daoPoints >= 0 ? game.daoPoints : 0,
    wealth: typeof game.wealth === "number" && game.wealth >= 0 ? game.wealth : startingWealth(hero),
    items: Object.fromEntries(Object.entries(items).filter(([, n]) => typeof n === "number" && n > 0)),
    // A save from before the wardrobe owns only what the hero began in.
    wardrobe: ownedGarments({ hero, wardrobe: Array.isArray(game.wardrobe) ? game.wardrobe.filter((a) => ATTIRES.some((o) => o.value === a)) : [] }),
    began: ATTIRES.some((o) => o.value === game.began) ? game.began : hero.attire,
    usedAt: game.usedAt && typeof game.usedAt === "object" && !Array.isArray(game.usedAt) ? game.usedAt : {},
    assets: Array.isArray(game.assets) ? game.assets.filter((a) => typeof a === "string") : [],
    years: typeof game.years === "number" && game.years >= 0 ? game.years : 0,
    speed: typeof game.speed === "number" ? game.speed : 100,
    unfed: game.unfed === true,
    lastAside: typeof game.lastAside === "number" ? game.lastAside : -3,
    cultivation,
    realm: typeof game.realm === "number" ? game.realm : realmForPoints(cultivation),
    level: typeof game.level === "number" ? game.level : undefined,
    bonds: game.bonds && typeof game.bonds === "object" ? game.bonds : {},
    decisions: typeof game.decisions === "number" ? game.decisions : game.tones?.length ?? 0,
    flagAt: game.flagAt && typeof game.flagAt === "object" ? game.flagAt : {},
    remarked: Array.isArray(game.remarked) ? game.remarked : [],
    lastRemark: typeof game.lastRemark === "number" ? game.lastRemark : -3,
    history: Array.isArray(game.history) ? game.history : [],
    tones: Array.isArray(game.tones) ? game.tones : [],
  };
  return settle(story, restored);
}
