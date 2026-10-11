import type { Choice, Scene } from "@/engine/types";

/**
 * Which realm a forceful choice asks of the player in Book One, by chapter. Before this, nothing in the first eleven chapters
 * cared how far the player had risen. Now breaking a door, drawing on forbidden power or standing against a master asks for
 * qi: a player below it can still try, but pays in cultivation, qi and the Elder’s respect, and a player two realms
 * above it does the same thing with ease and learns from it.
 *
 * The first two chapters ask nothing, because the player has not yet had time to gather qi. The ladder then follows the
 * pace of the story, so a player who walks the side roads and sits their nights is always a little above the line.
 */
export const FORCE_REALM_BY_CHAPTER: Record<number, number> = { 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2 };

/** A scene’s force-tone choices, each given the realm of its chapter unless the author already named one. */
export function gateForce(scene: Scene, chapter: number): Scene {
  const need = FORCE_REALM_BY_CHAPTER[chapter];
  if (need === undefined) return scene;
  const gate = (c: Choice): Choice => (c.tone === "force" && c.needsRealm === undefined ? { ...c, needsRealm: need } : c);
  return { ...scene, choices: scene.choices.map(gate) };
}
