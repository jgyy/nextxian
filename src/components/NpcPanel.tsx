import type { ChoiceTone, Mood, NpcMetric, NpcProfile, NpcState } from "@/engine/types";
import { moodFor, tierFor } from "@/engine/npc";
import { NPC_RANGE } from "@/engine/game";
import { TONE_INFO } from "@/engine/tone";

const TIER_LABEL = {
  hostile: "Hostile",
  wary: "Wary",
  neutral: "Neutral",
  warm: "Warm",
  devoted: "Devoted",
} as const;

const MOOD_LABEL: Record<Mood, string> = {
  furious: "Furious",
  afraid: "Afraid",
  suspicious: "Suspicious",
  guarded: "Guarded",
  stern: "Stern",
  softened: "Softened",
  tender: "Tender",
};

const METRIC_LABEL: Record<NpcMetric, string> = {
  trust: "Trust",
  respect: "Respect",
  fear: "Fear",
  suspicion: "Suspicion",
};

/** Maps a value within its range to a 0–100 bar width. */
function percent(value: number, [lo, hi]: [number, number]): number {
  return ((value - lo) / (hi - lo)) * 100;
}

export function NpcPanel({
  profile,
  npc,
  lastLine,
  manner,
}: {
  profile: NpcProfile;
  npc: NpcState;
  lastLine?: string;
  /** The tone of the player's recent decisions, once one has settled. */
  manner?: ChoiceTone;
}) {
  const tier = tierFor(npc.trust);
  const mood = moodFor(npc);
  return (
    <section className="card npc-card" aria-labelledby="npc-name">
      <div className="portrait-row">
        <div className={`portrait mood-${mood}`} data-mood={mood} aria-hidden="true">
          <span className="portrait-glyph">苏</span>
        </div>
        <div className="npc-id">
          <p className="eyebrow">Companion of the story</p>
          <h2 id="npc-name">{profile.name}</h2>
          <p className="muted">{profile.title}</p>
        </div>
      </div>

      <p className="tier" data-tier={tier}>
        Attitude <strong>{TIER_LABEL[tier]}</strong>
        <span className="sep" aria-hidden="true">
          ·
        </span>
        Mood <strong className="mood-word">{MOOD_LABEL[mood]}</strong>
      </p>

      <p className="read" data-tone={manner}>
        Her read of you <strong>{manner ? TONE_INFO[manner].name : "has no pattern yet"}</strong>
      </p>

      <dl className="meters">
        {(Object.keys(METRIC_LABEL) as NpcMetric[]).map((metric) => (
          <div key={metric} className="meter">
            <dt>{METRIC_LABEL[metric]}</dt>
            <dd>
              <span className="bar" aria-hidden="true">
                <span
                  className={`fill fill-${metric}`}
                  style={{ width: `${percent(npc[metric], NPC_RANGE[metric])}%` }}
                />
              </span>
              <span className="value">{npc[metric]}</span>
            </dd>
          </div>
        ))}
      </dl>

      {lastLine ? (
        <blockquote className="npc-quote" aria-live="polite">
          {lastLine}
        </blockquote>
      ) : (
        <p className="muted">She has not yet spoken to you.</p>
      )}
    </section>
  );
}
