import { ageOf, lifeLeft, lifespanOf, looksOf } from "@/engine/age";
import { HERO_FIELDS, optionFor, realmBandFor, standingOf, standingTierFor, STANDING_LABEL, type Hero } from "@/engine/hero";
import { REALMS } from "@/engine/cultivation";

const BAND_NOTE = {
  mortal: "To most of the sect you are a mortal, and they speak to you as one.",
  novice: "You have gathered qi. The gate disciples straighten when you pass.",
  adept: "You have a core or a soul. Keepers lower their eyes, and some lower their voices.",
  sage: "Your realm is a matter of weather. Nobody asks for your family any more.",
} as const;

export function HeroPanel({ hero, realm, decisions = 0, years = 0 }: { hero: Hero; realm: number; decisions?: number; years?: number }) {
  const span = { realm, decisions, years };
  const left = lifeLeft(hero, span);
  const standing = standingOf(hero, realm);
  const tier = standingTierFor(standing);
  return (
    <section className="card hero-card" aria-labelledby="hero-name-title">
      <p className="eyebrow">You</p>
      <h2 id="hero-name-title">{hero.name}</h2>
      <ul className="hero-traits">
        {HERO_FIELDS.map((field) => (
          <li key={field}>{field === "age" ? `Age ${ageOf(hero, decisions)}` : optionFor(field, hero).label}</li>
        ))}
      </ul>
      <p className="years" data-waning={left <= 0 ? "past" : left <= 3 ? "short" : "none"}>
        Years <strong>{ageOf(hero, decisions)}</strong> of <strong>{lifespanOf(realm, years)}</strong>
        <span className="sep" aria-hidden="true">
          ·
        </span>
        {left > 0 ? `${left} left` : "past them"}
        {looksOf(hero, span) < ageOf(hero, decisions) && ` · you look ${looksOf(hero, span)}`}
      </p>
      <p className="standing" data-standing={tier}>
        Standing <strong>{STANDING_LABEL[tier]}</strong>
        <span className="sep" aria-hidden="true">
          ·
        </span>
        {REALMS[realm].name}
      </p>
      <p className="muted">{BAND_NOTE[realmBandFor(realm)]}</p>
    </section>
  );
}
