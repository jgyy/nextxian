import { REPUTE_NAME, REPUTE_NOTE, witnessSummary } from "@/engine/witness";
import type { GameState } from "@/engine/types";

/** What the keepers of the Witness Roads have written about the hero. Shown once the hero has stopped at a keeper’s book. */
export function WitnessPanel({ game }: { game: GameState }) {
  const w = witnessSummary(game.flags, game.stats.karma);
  if (w.roads === 0 && w.vouched + w.confessed + w.concealed + w.asked === 0) return null;
  const rows: [string, number][] = [
    ["Vouched with the Elder’s name", w.vouched],
    ["Confessed", w.confessed],
    ["Paid to be forgotten", w.concealed],
    ["Asked to be read", w.asked],
  ];
  return (
    <section className="card witness" aria-labelledby="witness-title">
      <p className="eyebrow">Word on the road</p>
      <h2 id="witness-title">
        <span className="repute" data-repute={w.repute}>
          {REPUTE_NAME[w.repute]}
        </span>{" "}
        <span className="muted">in {w.roads} {w.roads === 1 ? "keeper’s book" : "keepers’ books"}</span>
      </h2>
      <p className="muted witness-note">{REPUTE_NOTE[w.repute]}</p>
      <ul className="witness-deeds">
        {rows.map(([label, n]) => (
          <li key={label} data-zero={n === 0 ? "yes" : "no"}>
            <span>{label}</span>
            <strong>{n}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
