import { crossingSummary, ELEMENTS, ELEMENT_LABEL } from "@/engine/path";
import type { GameState } from "@/engine/types";

/** What the hero has done at the crossings of an element and a craft: roads walked, doors taken, and which of the five elements know them. Shown once the hero has walked a Crossing Road. */
export function CrossingPanel({ game }: { game: GameState }) {
  const c = crossingSummary(game.flags);
  if (c.roads === 0 && c.benches + c.roots + c.crafts === 0) return null;
  const level = (element: (typeof ELEMENTS)[number]) => c.attuned.find((a) => a.element === element)?.level ?? 0;
  return (
    <section className="card crossing" aria-labelledby="crossing-title">
      <p className="eyebrow">Crossings</p>
      <h2 id="crossing-title">
        {c.roads} {c.roads === 1 ? "crossing" : "crossings"} <span className="muted">walked</span>
      </h2>
      <ul className="element-row" aria-label="Elements you are attuned to">
        {ELEMENTS.map((e) => (
          <li key={e} data-element={e} data-level={level(e)}>
            <span>{ELEMENT_LABEL[e]}</span>
            <strong>{level(e) === 2 ? "attuned" : level(e) === 1 ? "half" : "—"}</strong>
          </li>
        ))}
      </ul>
      <ul className="practice-list">
        <li data-zero={c.benches === 0 ? "yes" : "no"}>
          <span>Benches sat on</span>
          <strong>{c.benches}</strong>
        </li>
        <li data-zero={c.roots === 0 ? "yes" : "no"}>
          <span>Roots tried</span>
          <strong>{c.roots}</strong>
        </li>
        <li data-zero={c.crafts === 0 ? "yes" : "no"}>
          <span>Crafts shown</span>
          <strong>{c.crafts}</strong>
        </li>
      </ul>
    </section>
  );
}
