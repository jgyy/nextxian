import type { PlayerStats } from "@/engine/types";

export function StatsPanel({ stats }: { stats: PlayerStats }) {
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
    </section>
  );
}
