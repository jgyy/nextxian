import { AGE_START, ageOf, bandOfYears, lifeLeft, lifespanOf, waningOf, LIFESPAN } from "@/engine/age";
import { REALMS } from "@/engine/cultivation";
import { ageSummary } from "@/engine/path";
import type { GameState } from "@/engine/types";

const BAND_NAME = { youth: "Youth", young: "Young adult", prime: "In your prime", mature: "Grey at the temples", elder: "Elder" } as const;

/** The years the hero has: their age now, what their realm allows, and what they have done on the Age Roads. */
export function AgePanel({ game }: { game: GameState }) {
  const span = { realm: game.realm, decisions: game.decisions, years: game.years };
  const age = ageOf(game.hero, game.decisions);
  const total = lifespanOf(game.realm, game.years);
  const left = lifeLeft(game.hero, span);
  const waning = waningOf(left);
  const percent = Math.min(100, Math.max(0, Math.round((age / total) * 100)));
  const a = ageSummary(game.flags);
  const next = LIFESPAN[game.realm + 1];
  return (
    <section className="card age-card" aria-labelledby="age-title" data-waning={waning}>
      <p className="eyebrow">Years</p>
      <h2 id="age-title">
        {age} <span className="muted">of {total}</span>
      </h2>
      <div className="bar age-bar" role="progressbar" aria-label="Years lived against the span your realm allows" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
        <span className="fill fill-age" style={{ width: `${percent}%` }} />
      </div>
      <p className="muted realm-note">
        {BAND_NAME[bandOfYears(age)]}. {left > 0 ? `${left} years left at ${REALMS[game.realm].name}.` : `Past the years ${REALMS[game.realm].name} allows.`}
        {next !== undefined && ` ${REALMS[game.realm + 1].name} would allow ${next}.`}
      </p>
      {waning !== "none" && (
        <p className="waning" role="status">
          {waning === "past" ? "The body is running on will. Break through, or find years on a road." : "Your years run short. Break through, or find years on a road."}
        </p>
      )}
      {(a.roads > 0 || a.doors > 0) && (
        <ul className="practice-list">
          <li data-zero={a.roads === 0 ? "yes" : "no"}>
            <span>Age Roads walked</span>
            <strong>{a.roads}</strong>
          </li>
          <li data-zero={a.doors === 0 ? "yes" : "no"}>
            <span>Doors of years</span>
            <strong>{a.doors}</strong>
          </li>
          <li data-zero={a.given === 0 ? "yes" : "no"}>
            <span>Years given by roads</span>
            <strong>{a.given}</strong>
          </li>
        </ul>
      )}
      <p className="muted realm-note">Began at {AGE_START[game.hero.age]}.</p>
    </section>
  );
}
