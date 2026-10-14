import { heartDemonBlocks, pointsToNext, realmProgress, REALMS, HEART_DEMON_KARMA } from "@/engine/cultivation";
import { DAO_NAME, DAO_PASSIVE, DAO_RANKS, daoRankOf, daoToNext, heartDemonKarmaFor, TALENT_LABEL } from "@/engine/path";
import { CUSP } from "@/engine/practice";
import type { GameState } from "@/engine/types";

type Cultivation = Pick<GameState, "cultivation" | "realm" | "stats" | "hero" | "daoPoints">;

function DaoLine({ game }: { game: Cultivation }) {
  const rank = daoRankOf(game.daoPoints);
  const toNext = daoToNext(game.daoPoints);
  const here = DAO_RANKS[rank].points;
  const next = DAO_RANKS[rank + 1]?.points;
  const percent = next === undefined ? 100 : Math.round(((game.daoPoints - here) / (next - here)) * 100);
  return (
    <div className="dao-line" data-rank={rank}>
      <p className="dao-name">
        <strong>{DAO_NAME[game.hero.dao]}</strong> · {DAO_RANKS[rank].name}
      </p>
      <div className="bar dao-bar" role="progressbar" aria-label="Progress toward the next Dao rank" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
        <span className="fill fill-dao" style={{ width: `${percent}%` }} />
      </div>
      <p className="muted realm-note">
        {toNext === undefined ? "You have mastered it." : `${game.daoPoints} mastery. ${toNext} more to reach ${DAO_RANKS[rank + 1].name}.`} {DAO_PASSIVE[game.hero.dao]}
      </p>
    </div>
  );
}

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
          : `${Math.floor(game.cultivation)} points. ${Math.ceil(toNext)} more to reach ${REALMS[game.realm + 1].name}.`}
      </p>
      {!blocked && toNext !== undefined && percent >= CUSP && (
        <p className="cusp" role="status">
          You are on the cusp. A push at the gate on a Cultivation Road can carry you over.
        </p>
      )}
      {blocked && (
        <p className="heart-demon" role="status">
          A heart demon holds you at the threshold. Your karma is below {heartDemonKarmaFor(game.hero, HEART_DEMON_KARMA)}.
        </p>
      )}
      <p className="muted talent-note">
        <strong>{TALENT_LABEL[game.hero.talent]}</strong>
      </p>
      {game.hero.dao !== "none" && <DaoLine game={game} />}
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
