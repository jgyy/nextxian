import { deferenceOf, TRIBULATIONS, tribulationRecord, tribulationSummary } from "@/engine/tribulation";
import type { GameState } from "@/engine/types";

/** The sky’s trials, one for each realm, and how the sect bows to the hero’s: shown once the hero has come to the gate of a trial. */
export function TribulationPanel({ game }: { game: GameState }) {
  const summary = tribulationSummary(game.flags);
  if (summary.roads === 0 && summary.won + summary.lost + summary.fled === 0) return null;
  const rows = tribulationRecord(game.flags);
  const bow = deferenceOf(game.realm);
  const state = (n: number) => (rows[n].won > 0 ? "won" : rows[n].lost > 0 ? "lost" : rows[n].fled > 0 ? "fled" : "none");
  return (
    <section className="card custom-card trib-card" aria-labelledby="trib-title" data-realm={game.realm}>
      <p className="eyebrow">Tribulations</p>
      <h2 id="trib-title">
        {bow.name}
        <span className="trib-bow">{bow.gesture}</span>
      </h2>
      <ol className="rung-row trib-row" aria-label="The rehearsal of each tribulation">
        {TRIBULATIONS.map((t) => (
          <li
            key={t.name}
            data-state={state(t.realm)}
            data-here={game.realm === t.realm ? "yes" : "no"}
            data-zero={state(t.realm) === "none" ? "yes" : "no"}
            title={`${t.name}: ${rows[t.realm].won} weathered, ${rows[t.realm].lost} scorched, ${rows[t.realm].fled} turned back, ${rows[t.realm].roads} of 4 roads walked`}
          >
            <span>{t.short}</span>
            <strong>{state(t.realm) === "won" ? "✓" : state(t.realm) === "lost" ? "✗" : state(t.realm) === "fled" ? "–" : "·"}</strong>
          </li>
        ))}
      </ol>
      <ul className="practice-list">
        <li data-zero={summary.roads === 0 ? "yes" : "no"}>
          <span>Tribulation Roads walked</span>
          <strong>{summary.roads}</strong>
        </li>
        <li data-zero={summary.won === 0 ? "yes" : "no"}>
          <span>Rehearsals weathered</span>
          <strong>{summary.won}</strong>
        </li>
        <li data-zero={summary.lost === 0 ? "yes" : "no"}>
          <span>Scorched</span>
          <strong>{summary.lost}</strong>
        </li>
        <li data-zero={summary.fled === 0 ? "yes" : "no"}>
          <span>Gates turned back from</span>
          <strong>{summary.fled}</strong>
        </li>
      </ul>
    </section>
  );
}
