import { carried, cultivationSpeed, held, isUnfed, ledgerOf, speedParts } from "@/engine/economy";
import { REALMS } from "@/engine/cultivation";
import type { GameState, Story } from "@/engine/types";

/** The purse, the pack and the holdings, and where the hero's cultivation speed comes from. */
export function PursePanel({ story, game }: { story: Story; game: GameState }) {
  const pack = carried(story, game);
  const holdings = held(story, game);
  const ledger = ledgerOf(story, game);
  const speed = cultivationSpeed(story, game);
  const parts = speedParts(story, game);
  const unfed = isUnfed(story, game);
  return (
    <section className="card purse" aria-labelledby="purse-title">
      <p className="eyebrow">Purse and pack</p>
      <h2 id="purse-title">
        <span className="stones" data-unfed={unfed ? "yes" : "no"}>
          {game.wealth}
        </span>{" "}
        spirit stones
      </h2>
      <p className="muted purse-note">
        Each payday: {ledger.stipend > 0 && `the sect pays ${ledger.stipend}`}
        {ledger.stipend > 0 && (ledger.income > 0 || ledger.upkeep > 0 || ledger.living > 0) && ", "}
        {ledger.income > 0 && `holdings pay ${ledger.income}, cost ${ledger.upkeep}`}
        {ledger.income > 0 && ledger.living > 0 && ", "}
        {ledger.living > 0 && `${REALMS[game.realm].name} living costs ${ledger.living}`}
        {ledger.stipend === 0 && ledger.income === 0 && ledger.living === 0 && "nothing comes or goes"}.
      </p>
      {unfed && (
        <p className="unfed" role="status">
          You are Unfed. The purse cannot cover your keep, and your cultivation slows.
        </p>
      )}
      <p className="speed" aria-label={`Cultivation speed ${speed} percent`}>
        <span className="speed-value">{speed}%</span> cultivation speed
      </p>
      <ul className="speed-parts">
        {parts.map((p) => (
          <li key={p.label} data-sign={p.points < 0 ? "minus" : "plus"}>
            <span>{p.label}</span>
            <strong>{p.label === "Plain rate" ? `${p.points}%` : `${p.points > 0 ? "+" : ""}${p.points}`}</strong>
          </li>
        ))}
      </ul>
      <h3 className="pack-title">Pack</h3>
      {pack.length === 0 ? (
        <p className="muted">Nothing yet.</p>
      ) : (
        <ul className="pack">
          {pack.map(({ item, count }) => (
            <li key={item.id} data-kind={item.kind} title={item.blurb}>
              <span>{item.name}</span>
              <strong>{count > 1 ? `×${count}` : item.kind}</strong>
            </li>
          ))}
        </ul>
      )}
      <h3 className="pack-title">Holdings</h3>
      {holdings.length === 0 ? (
        <p className="muted">None yet.</p>
      ) : (
        <ul className="pack">
          {holdings.map((asset) => (
            <li key={asset.id} title={asset.blurb}>
              <span>{asset.name}</span>
              <strong>
                +{asset.income} −{asset.upkeep}
              </strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
