import { REALMS } from "@/engine/cultivation";
import { RANK_LEAN_LABEL, RANK_WAYS, RANK_WAY_LABEL, rankLean, rankSummary, rungProgress } from "@/engine/rank";
import type { GameState } from "@/engine/types";

const SHORT = ["Mortal", "Qi", "Found.", "Core", "Soul", "Sever", "Dao", "Asc."];

/** What the hero has done where a rung and a gender meet: roads walked at each rung, doors taken, and what they did behind them. Shown once the hero has met one. */
export function RankPanel({ game }: { game: GameState }) {
  const r = rankSummary(game.flags);
  if (r.roads === 0 && r.doors === 0 && r.turns === 0) return null;
  const lean = rankLean(r);
  const rungs = rungProgress(game.flags);
  return (
    <section className="card custom-card rank-card" aria-labelledby="rank-title" data-lean={lean}>
      <p className="eyebrow">Ranks</p>
      <h2 id="rank-title">{RANK_LEAN_LABEL[lean]}</h2>
      <ol className="rung-row" aria-label="Rank Roads walked at each rung">
        {REALMS.map((realm, n) => (
          <li key={realm.name} data-here={game.realm === n ? "yes" : "no"} data-zero={rungs[n] === 0 ? "yes" : "no"} title={`${realm.name}: ${rungs[n]} of 4 roads`}>
            <span>{SHORT[n]}</span>
            <strong>{rungs[n]}</strong>
          </li>
        ))}
      </ol>
      <ul className="way-row" aria-label="What you did behind the doors of rank">
        {RANK_WAYS.map((way) => (
          <li key={way} data-way={way} data-zero={r.ways[way] === 0 ? "yes" : "no"}>
            <span>{RANK_WAY_LABEL[way]}</span>
            <strong>{r.ways[way]}</strong>
          </li>
        ))}
      </ul>
      <ul className="practice-list">
        <li data-zero={r.roads === 0 ? "yes" : "no"}>
          <span>Rank Roads walked</span>
          <strong>{r.roads}</strong>
        </li>
        <li data-zero={r.doors === 0 ? "yes" : "no"}>
          <span>Doors of rank</span>
          <strong>{r.doors}</strong>
        </li>
        <li data-zero={r.clashes === 0 ? "yes" : "no"}>
          <span>Keepers crossed</span>
          <strong>{r.clashes}</strong>
        </li>
        <li data-zero={r.turns === 0 ? "yes" : "no"}>
          <span>Turnings met at your rung</span>
          <strong>{r.turns}</strong>
        </li>
      </ul>
    </section>
  );
}
