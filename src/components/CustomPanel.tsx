import { CUSTOM_LEAN_LABEL, CUSTOM_WAYS, CUSTOM_WAY_LABEL, customLean, customSummary } from "@/engine/custom";
import type { GameState } from "@/engine/types";

/** What the hero has done about the customs of the sect that sort people by gender: roads walked, doors taken, and what they did behind them. Shown once the hero has met one. */
export function CustomPanel({ game }: { game: GameState }) {
  const c = customSummary(game.flags);
  if (c.roads === 0 && c.doors === 0 && c.turns === 0) return null;
  const lean = customLean(c);
  return (
    <section className="card custom-card" aria-labelledby="custom-title" data-lean={lean}>
      <p className="eyebrow">Customs</p>
      <h2 id="custom-title">{CUSTOM_LEAN_LABEL[lean]}</h2>
      <ul className="way-row" aria-label="What you did behind the doors of custom">
        {CUSTOM_WAYS.map((way) => (
          <li key={way} data-way={way} data-zero={c.ways[way] === 0 ? "yes" : "no"}>
            <span>{CUSTOM_WAY_LABEL[way]}</span>
            <strong>{c.ways[way]}</strong>
          </li>
        ))}
      </ul>
      <ul className="practice-list">
        <li data-zero={c.roads === 0 ? "yes" : "no"}>
          <span>Custom Roads walked</span>
          <strong>{c.roads}</strong>
        </li>
        <li data-zero={c.doors === 0 ? "yes" : "no"}>
          <span>Doors of custom</span>
          <strong>{c.doors}</strong>
        </li>
        <li data-zero={c.clashes === 0 ? "yes" : "no"}>
          <span>Keepers pressed</span>
          <strong>{c.clashes}</strong>
        </li>
        <li data-zero={c.turns === 0 ? "yes" : "no"}>
          <span>Turnings met as yourself</span>
          <strong>{c.turns}</strong>
        </li>
      </ul>
    </section>
  );
}
