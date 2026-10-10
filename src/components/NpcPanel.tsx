import type { NpcMetric, NpcProfile, NpcState } from "@/engine/types";
import { tierFor } from "@/engine/npc";
import { NPC_RANGE } from "@/engine/game";

const TIER_LABEL = {
  hostile: "Hostile",
  wary: "Wary",
  neutral: "Neutral",
  warm: "Warm",
  devoted: "Devoted",
} as const;

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
}: {
  profile: NpcProfile;
  npc: NpcState;
  lastLine?: string;
}) {
  const tier = tierFor(npc.trust);
  return (
    <section className="card npc-card" aria-labelledby="npc-name">
      <p className="eyebrow">Companion of the story</p>
      <h2 id="npc-name">{profile.name}</h2>
      <p className="muted">{profile.title}</p>
      <p className="tier" data-tier={tier}>
        Attitude: <strong>{TIER_LABEL[tier]}</strong>
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
