import type { ChoiceTone, PlayerStats } from "@/engine/types";
import { TONE_INFO } from "@/engine/tone";

/** How many of the player's latest decisions the panel shows as coloured dots. */
const RECENT = 6;

export function StatsPanel({ stats, tones }: { stats: PlayerStats; tones: ChoiceTone[] }) {
  const recent = tones.slice(-RECENT);
  const empty = RECENT - recent.length;
  return (
    <section className="card" aria-labelledby="stats-title">
      <p className="eyebrow">Cultivator</p>
      <h2 id="stats-title">Your Dao</h2>
      <ul className="stats">
        <li>
          <span>Qi</span>
          <strong>{stats.qi}</strong>
        </li>
        <li>
          <span>Karma</span>
          <strong className={stats.karma < 0 ? "neg" : "pos"}>{stats.karma}</strong>
        </li>
        <li>
          <span>Insight</span>
          <strong>{stats.insight}</strong>
        </li>
      </ul>
      <div className="decisions">
        <p className="decisions-label">Recent decisions</p>
        <ol className="dots" aria-label={recent.length ? recent.map((t) => TONE_INFO[t].name).join(", ") : "None yet"}>
          {recent.map((tone, i) => (
            <li key={i} className="dot" data-tone={tone} title={TONE_INFO[tone].name} />
          ))}
          {Array.from({ length: empty }, (_, i) => (
            <li key={`empty-${i}`} className="dot" aria-hidden="true" />
          ))}
        </ol>
      </div>
    </section>
  );
}
