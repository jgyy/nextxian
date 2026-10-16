import { heartDemonBlocks, pointsToNext, realmProgress, REALMS, HEART_DEMON_KARMA } from "@/engine/cultivation";
import { DAO_NAME, DAO_PASSIVE, DAO_RANKS, daoRankOf, daoToNext, heartDemonKarmaFor, TALENT_LABEL } from "@/engine/path";
import { CUSP } from "@/engine/practice";
import {
  failsAt,
  layerName,
  layerOfLevel,
  levelNow,
  levelProgress,
  layerTitle,
  lacking,
  prepsFor,
  steadiness,
  TOP_LEVEL,
  wallDifficulty,
  wallInsight,
  wallQi,
  wallText,
} from "@/engine/stages";
import type { GameState } from "@/engine/types";

type Cultivation = Pick<GameState, "cultivation" | "realm" | "stats" | "hero" | "daoPoints" | "flags" | "npc"> & Partial<Pick<GameState, "level">>;

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

/** The wall in front of the hero: what it asks, how hard it is, how steady the hero is against it, and how often it has thrown them. */
function WallLine({ game }: { game: Cultivation }) {
  const level = levelNow(game);
  if (level >= TOP_LEVEL) {
    return <p className="muted realm-note">You stand on the Tenth Layer of the last realm. {wallText(level)}</p>;
  }
  const target = level + 1;
  const missing = lacking(game, target);
  const steady = steadiness(game, target);
  const difficulty = wallDifficulty(target);
  const falls = failsAt(game.flags, target);
  const methods = prepsFor(game.flags, target);
  return (
    <div className="wall-card" data-ready={missing.length === 0 && steady.total >= difficulty ? "yes" : "no"}>
      <p className="eyebrow">{target % 10 === 0 ? "The wall to the next realm" : `The wall above your ${layerName(level)} layer`}</p>
      <p className="wall-text">{wallText(level)}</p>
      <dl className="wall-stats">
        <div>
          <dt>Asks</dt>
          <dd>
            {wallQi(target)} qi · {wallInsight(target)} insight
          </dd>
        </div>
        <div>
          <dt>Steadiness</dt>
          <dd data-enough={steady.total >= difficulty ? "yes" : "no"}>
            {steady.total} of {difficulty}
          </dd>
        </div>
        <div>
          <dt>Falls</dt>
          <dd>{falls}</dd>
        </div>
        <div>
          <dt>Methods</dt>
          <dd>{methods} of 4</dd>
        </div>
      </dl>
      {missing.length > 0 && <p className="muted realm-note">Not yet: you lack {missing.join(" and ")}.</p>}
    </div>
  );
}

export function CultivationPanel({ game }: { game: Cultivation }) {
  const here = REALMS[game.realm];
  const level = levelNow(game);
  const layer = layerOfLevel(level);
  const layerPercent = Math.round(levelProgress(game) * 100);
  const toNext = pointsToNext(game);
  const blocked = heartDemonBlocks(game);
  const percent = Math.round(realmProgress(game) * 100);
  return (
    <section className="card cultivation" aria-labelledby="cultivation-title">
      <p className="eyebrow">Cultivation</p>
      <h2 id="cultivation-title" data-realm={game.realm}>
        {here.name}
      </h2>
      <p className="layer-title" data-level={level}>
        {layerTitle(level).replace(`${here.name}, `, "")} · <em>{layerName(level)}</em>
      </p>
      <ol className="layer-pips" aria-label="Layers of this realm">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i} data-state={i < layer ? "passed" : i === layer ? "current" : "ahead"} title={`Layer ${i + 1}`} />
        ))}
      </ol>
      <div
        className="bar layer-bar"
        role="progressbar"
        aria-label="Progress toward the next layer"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={layerPercent}
      >
        <span className="fill fill-layer" style={{ width: `${layerPercent}%` }} />
      </div>
      <WallLine game={game} />
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
