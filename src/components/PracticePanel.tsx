import { CULTIVATION_DONE_ANY, PRACTICE_NAME, practiceSummary, PRACTICES, type Practice } from "@/engine/practice";
import type { GameState } from "@/engine/types";

/** What the hero has practised on the Cultivation Roads. Shown once the hero has worked a ground. */
export function PracticePanel({ game }: { game: GameState }) {
  const p = practiceSummary(game.flags);
  const counts: Record<Practice, number> = { circulate: p.circulated, temper: p.tempered, comprehend: p.comprehended, push: p.pushed };
  const total = PRACTICES.reduce((n, k) => n + counts[k], 0);
  if (p.roads === 0 && total === 0) return null;
  const nights = Object.keys(game.flags).filter((f) => game.flags[f] && f.startsWith("cr_retreat_")).length;
  return (
    <section className="card practice" aria-labelledby="practice-title" data-prefix={CULTIVATION_DONE_ANY}>
      <p className="eyebrow">Practice</p>
      <h2 id="practice-title">
        {p.roads} {p.roads === 1 ? "ground" : "grounds"} <span className="muted">worked, {nights} {nights === 1 ? "night" : "nights"} in retreat</span>
      </h2>
      <ul className="practice-list">
        {PRACTICES.map((k) => (
          <li key={k} data-zero={counts[k] === 0 ? "yes" : "no"}>
            <span>{PRACTICE_NAME[k]}</span>
            <strong>{counts[k]}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
