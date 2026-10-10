import { heartDemonBlocks, pointsToNext, realmProgress, REALMS, HEART_DEMON_KARMA } from "@/engine/cultivation";
import type { GameState } from "@/engine/types";

type Cultivation = Pick<GameState, "cultivation" | "realm" | "stats">;

export function CultivationPanel({ game }: { game: Cultivation }) {
  const here = REALMS[game.realm];
  const toNext = pointsToNext(game);
  const blocked = heartDemonBlocks(game);
  const percent = Math.round(realmProgress(game) * 100);
  return (
    <section className="card cultivation" aria-labelledby="cultivation-title">
      <p className="eyebrow">Cultivation</p>
      <h2 id="cultivation-title" data-realm={game.realm}>
        {here.name}
      </h2>
      <div
        className="bar realm-bar"
        role="progressbar"
        aria-label="Progress toward the next realm"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <span className="fill fill-realm" style={{ width: `${percent}%` }} />
      </div>
      <p className="muted realm-note">
        {toNext === undefined
          ? "You stand at the top of the ladder."
          : `${game.cultivation} points. ${toNext} more to reach ${REALMS[game.realm + 1].name}.`}
      </p>
      {blocked && (
        <p className="heart-demon" role="status">
          A heart demon holds you at the threshold. Your karma is below {HEART_DEMON_KARMA}.
        </p>
      )}
      <ol className="ladder" aria-label="Realms">
        {REALMS.map((realm, i) => (
          <li key={realm.name} data-state={i < game.realm ? "passed" : i === game.realm ? "current" : "ahead"}>
            {realm.name}
          </li>
        ))}
      </ol>
    </section>
  );
}
