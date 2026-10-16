import { ATTIRES, optionFor, standingOf } from "@/engine/hero";
import { changeDress } from "@/engine/pack";
import { dressTrade, GARMENTS, marketRate, ownedGarments, wardrobeSummary } from "@/engine/wardrobe";
import { deferenceOf } from "@/engine/tribulation";
import type { GameState, Story } from "@/engine/types";

/** What the hero wears, what else they own, and what the dress earns and costs. A change of dress takes no decision; the world reads it at the next door. */
export function WardrobePanel({ story, game, onAct, locked = false }: { story: Story; game: GameState; onAct: (next: GameState) => void; locked?: boolean }) {
  const owned = ownedGarments(game);
  const summary = wardrobeSummary(game);
  const away = game.visited.includes(story.leavesSect ?? "");
  const trade = dressTrade(game.hero.attire, game.realm, away);
  const worn = GARMENTS[game.hero.attire];
  return (
    <section className="card wardrobe-card" aria-labelledby="wardrobe-title">
      <p className="eyebrow">Wardrobe</p>
      <h2 id="wardrobe-title">{optionFor("attire", game.hero).label}</h2>
      <p className="muted">
        Standing {standingOf(game.hero, game.realm)} · sells at {Math.round(marketRate(game.hero.attire) * 100)}% · {deferenceOf(game.realm).name.toLowerCase()}
      </p>
      <p className="muted">
        {trade.income > 0 ? `Pays ${trade.income} (${worn.trade}). ` : ""}
        {trade.upkeep > 0 ? `Costs ${trade.upkeep} (${worn.upkeep}). ` : ""}
        {trade.income === 0 && trade.upkeep === 0 ? "Costs nothing and earns nothing. " : ""}
        {summary.worn > 0 ? `Changed into ${summary.worn} other garment${summary.worn === 1 ? "" : "s"}.` : ""}
      </p>
      <ul className="pack wardrobe-list">
        {ATTIRES.map((a) => {
          const has = owned.includes(a.value);
          const here = game.hero.attire === a.value;
          return (
            <li key={a.value} data-owned={has ? "yes" : "no"} data-worn={here ? "yes" : "no"} title={a.blurb}>
              <span>{a.label}</span>
              {here ? (
                <strong>Worn</strong>
              ) : has ? (
                <button type="button" className="ghost small" disabled={locked} onClick={() => onAct(changeDress(story, game, a.value))}>
                  Wear
                </button>
              ) : (
                <strong className="muted">Not yours</strong>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
