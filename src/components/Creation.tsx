"use client";

import { useEffect, useState } from "react";
import { AGE_START, ageSpeed, lifespanOf } from "@/engine/age";
import { aptitudeFor, startingWealth } from "@/engine/economy";
import { DAO_NAME, DAO_PASSIVE, ORIGIN_LABEL, originSpeed, TALENT_LABEL, talentSpeed } from "@/engine/path";
import {
  cleanName,
  DEFAULT_HERO,
  describeHero,
  FIELD_TITLE,
  HERO_FIELDS,
  HERO_OPTIONS,
  MAX_NAME_LENGTH,
  randomPicks,
  startFor,
  startingPoints,
  type Hero,
  type HeroField,
} from "@/engine/hero";

/** The notes shown under the preview: what this hero starts with, so the choices are never blind. */
function startNotes(hero: Hero): string[] {
  const start = startFor(hero);
  const notes: string[] = [];
  const label = { qi: "qi", karma: "karma", insight: "insight", trust: "trust", respect: "respect", fear: "fear", suspicion: "suspicion" } as const;
  notes.push(`${startingWealth(hero)} spirit stones`);
  const left = lifespanOf(0) - AGE_START[hero.age];
  notes.push(`${AGE_START[hero.age]} years old, with ${left} left to a mortal (a breakthrough lengthens them)`);
  const quick = ageSpeed(hero.age, 0);
  if (quick) notes.push(`${quick > 0 ? "+" : "−"}${Math.abs(quick)}% from your years`);
  if (aptitudeFor(hero) > 0) notes.push(`+${aptitudeFor(hero)}% cultivation speed from your trade`);
  const root = talentSpeed(hero.talent, 0);
  if (root) notes.push(`${root > 0 ? "+" : "−"}${Math.abs(root)}% from your ${TALENT_LABEL[hero.talent].toLowerCase()}`);
  if (hero.talent === "late") notes.push("+18% from Core Formation");
  const began = originSpeed(hero.origin, 0);
  if (began) notes.push(`+${began}% from ${ORIGIN_LABEL[hero.origin].toLowerCase()}`);
  if (startingPoints(hero) > 0) notes.push(`${startingPoints(hero)} cultivation points already gathered`);
  if (hero.dao !== "none") notes.push(`${DAO_NAME[hero.dao]}: ${DAO_PASSIVE[hero.dao]}`);
  for (const [stat, v] of Object.entries(start.stats)) if (v) notes.push(`${v > 0 ? "+" : "−"}${Math.abs(v)} ${label[stat as keyof typeof label]}`);
  for (const [metric, v] of Object.entries(start.npc)) if (v) notes.push(`Elder Su: ${v > 0 ? "+" : "−"}${Math.abs(v)} ${label[metric as keyof typeof label]}`);
  return notes;
}

export function Creation({ onBegin, onLoad }: { onBegin: (hero: Hero) => void; onLoad: () => void }) {
  const [name, setName] = useState("");
  const [picks, setPicks] = useState<Record<HeroField, string>>({
    origin: DEFAULT_HERO.origin,
    age: DEFAULT_HERO.age,
    talent: DEFAULT_HERO.talent,
    dao: DEFAULT_HERO.dao,
    gender: DEFAULT_HERO.gender,
    looks: DEFAULT_HERO.looks,
    background: DEFAULT_HERO.background,
    attire: DEFAULT_HERO.attire,
    status: DEFAULT_HERO.status,
  });
  // The server and the first paint show the plain default, so the page hydrates cleanly; once it is on screen every choice is drawn at random.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- a one-off draw after mount, not derived state
    setPicks(randomPicks());
  }, []);
  const hero = { name: cleanName(name), ...picks } as Hero;
  const notes = startNotes(hero);

  return (
    <main className="creation" aria-label="Create your character">
      <form
        className="card creation-card"
        onSubmit={(e) => {
          e.preventDefault();
          onBegin(hero);
        }}
      >
        <p className="eyebrow">Before the stair</p>
        <h2>Who climbs the mountain?</h2>
        <p className="muted">
          The sect reads you before you speak. Where you begin, the roots you were born with and the Dao you practise change how fast you cultivate and what the roads offer you.
          Your dress, birth, face and trade change how Elder Su, her wardens and everyone on the roads treat you.
          Every choice below has been drawn at random for you. Change any of them, or draw again.
        </p>

        <div className="field">
          <label htmlFor="hero-name">The name you give at the gate</label>
          <input
            id="hero-name"
            type="text"
            value={name}
            maxLength={MAX_NAME_LENGTH}
            placeholder="Wanderer"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {HERO_FIELDS.map((field) => (
          <fieldset key={field} className="field-group">
            <legend>{FIELD_TITLE[field]}</legend>
            <div className="option-grid">
              {HERO_OPTIONS[field].map((option) => (
                <label key={option.value} className="option" data-checked={picks[field] === option.value ? "yes" : "no"}>
                  <input
                    type="radio"
                    name={field}
                    value={option.value}
                    checked={picks[field] === option.value}
                    onChange={() => setPicks((p) => ({ ...p, [field]: option.value }))}
                  />
                  <span className="option-label">{option.label}</span>
                  <span className="option-blurb">{option.blurb}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <div className="preview" aria-live="polite">
          <p className="eyebrow">How the sect will see you</p>
          <p>{describeHero(hero)}</p>
          {notes.length > 0 && <p className="muted">Where you begin: {notes.join(" · ")}</p>}
        </div>

        <div className="creation-actions">
          <button type="submit">Climb the mountain</button>
          <button type="button" className="ghost" onClick={() => setPicks(randomPicks())}>
            Draw again at random
          </button>
          <button type="button" className="ghost" onClick={onLoad}>
            Load save
          </button>
        </div>
      </form>
    </main>
  );
}
