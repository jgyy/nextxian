"use client";

import { useState } from "react";
import { aptitudeFor, startingWealth } from "@/engine/economy";
import {
  cleanName,
  DEFAULT_HERO,
  describeHero,
  FIELD_TITLE,
  HERO_FIELDS,
  HERO_OPTIONS,
  MAX_NAME_LENGTH,
  startFor,
  type Hero,
  type HeroField,
} from "@/engine/hero";

/** The notes shown under the preview: what this hero starts with, so the choices are never blind. */
function startNotes(hero: Hero): string[] {
  const start = startFor(hero);
  const notes: string[] = [];
  const label = { qi: "qi", karma: "karma", insight: "insight", trust: "trust", respect: "respect", fear: "fear", suspicion: "suspicion" } as const;
  notes.push(`${startingWealth(hero)} spirit stones`);
  if (aptitudeFor(hero) > 0) notes.push(`+${aptitudeFor(hero)}% cultivation speed`);
  for (const [stat, v] of Object.entries(start.stats)) if (v) notes.push(`${v > 0 ? "+" : "−"}${Math.abs(v)} ${label[stat as keyof typeof label]}`);
  for (const [metric, v] of Object.entries(start.npc)) if (v) notes.push(`Elder Su: ${v > 0 ? "+" : "−"}${Math.abs(v)} ${label[metric as keyof typeof label]}`);
  return notes;
}

export function Creation({ onBegin, onLoad }: { onBegin: (hero: Hero) => void; onLoad: () => void }) {
  const [name, setName] = useState("");
  const [picks, setPicks] = useState<Record<HeroField, string>>({
    gender: DEFAULT_HERO.gender,
    looks: DEFAULT_HERO.looks,
    background: DEFAULT_HERO.background,
    attire: DEFAULT_HERO.attire,
    status: DEFAULT_HERO.status,
  });
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
          The sect reads you before you speak. Your dress, birth, face and trade change how Elder Su, her wardens and everyone on the side roads treat you.
          They do not change what you can do. Only cultivation does that.
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
          <button type="button" className="ghost" onClick={onLoad}>
            Load save
          </button>
        </div>
      </form>
    </main>
  );
}
