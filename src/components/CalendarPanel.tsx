import { ageOf } from "@/engine/age";
import { REALMS } from "@/engine/cultivation";
import { clockOf, dateLabel, dateOf, PLOT_STRIDE, spanLabel, strideOf, unitOf } from "@/engine/time";
import type { GameState } from "@/engine/types";
import { BEATS_PER_ROAD, beatFlag, hubId, ROADS } from "@/story/count";

const SEASON_NAME = { spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" } as const;

/**
 * The calendar. A decision takes as long as the hero’s realm makes it, so the clock is read in the realm’s own unit: the bell for a Mortal, the day for a Condenser, the
 * season, the year, the decade, the generation, the lifetime, the dynasty, the age, the era. Below it are the ten Long Count roads, a pip for each unit of the realm’s
 * time the hero has spent on them. Shown from the first decision, because the clock never stops.
 */
export function CalendarPanel({ game }: { game: GameState }) {
  const days = game.days ?? 0;
  const realm = game.realm;
  const voice = unitOf(realm);
  const date = dateOf(days);
  const spent = ROADS.map((road) => Array.from({ length: BEATS_PER_ROAD }, (_, k) => game.flags[beatFlag(road.realm, k)] === true));
  const opened = ROADS.map((road) => game.visited.includes(hubId(road.realm)));
  const total = spent.flat().filter(Boolean).length;
  return (
    <section className="card calendar-card" aria-labelledby="calendar-title" data-season={date.season}>
      <p className="eyebrow">Time</p>
      <h2 id="calendar-title">
        {clockOf(realm, days)}
        <span className="trib-bow">{dateLabel(days)}</span>
      </h2>
      <p className="muted realm-note">
        {SEASON_NAME[date.season]}. {days < 0.1 ? "Your story has only just begun" : `${spanLabel(days)} since your story began`}; you are {ageOf(game.hero, days)}. In the story a choice takes about {spanLabel(PLOT_STRIDE)}; on a road, about {spanLabel(strideOf(realm))}. A {REALMS[realm].name} counts in {voice.unit}s.
      </p>
      <p className="muted realm-note">{voice.sense}</p>
      <ol className="rung-row calendar-row" aria-label="The ten Long Count roads, and the units of each realm’s time you have spent on them">
        {ROADS.map((road, i) => (
          <li key={road.realm} data-open={opened[i] ? "yes" : "no"} data-here={road.realm === realm ? "yes" : "no"} title={`${road.short}: ${spent[i].filter(Boolean).length} of ten ${road.unit}s spent`}>
            <span>{unitOf(road.realm).unit}</span>
            <span className="pips" aria-hidden="true">
              {spent[i].map((on, k) => (
                <i key={k} data-state={on ? "spent" : opened[i] ? "open" : "unwalked"} />
              ))}
            </span>
          </li>
        ))}
      </ol>
      <p className="muted fight-note">
        {total === 0 ? "No road has been walked yet." : `${total} of a hundred units spent.`} Each pip is one unit of a realm’s own time, spent on its Long Count road.
      </p>
    </section>
  );
}
