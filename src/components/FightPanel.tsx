import { edgeOf, edgeParts } from "@/engine/fight";
import type { GameState } from "@/engine/types";
import { foeAt, huntRecord } from "@/story/hunts";
import { foeLevel, holdFlag } from "@/story/hunts/build";
import { REALMS } from "@/engine/cultivation";
import { layerName } from "@/engine/stages";

const SIGN = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");

/** How the hero stands against the foe they are fighting, part by part, and the hunts they have finished. Shown inside a hunt, or once a hunt is done. */
export function FightPanel({ game }: { game: GameState }) {
  const at = foeAt(game.sceneId);
  const record = huntRecord(game.flags);
  const done = record.reduce((n, r) => n + r.done, 0);
  if (!at && done === 0) return null;
  const foe = at && { level: foeLevel(at.spec, at.ctx), weak: at.spec.weak, bane: at.spec.bane, boost: [0, 1, 2].map((n) => holdFlag(at.spec.id, n)) };
  const parts = foe && edgeParts(game, foe);
  const edge = foe ? edgeOf(game, foe) : 0;
  const reading = edge <= -2 ? "behind" : edge >= 3 ? "ahead" : "even";
  const rows: [string, number][] = parts
    ? [
        ["Your level against its", parts.level],
        ["Your rank in your Dao", parts.craft],
        [`Your roots against ${at!.spec.weak}`, parts.root],
        [`Your Dao against its bane`, parts.bane],
        ["Your qi", parts.qi],
        ["Footholds won", parts.foothold],
      ]
    : [];
  return (
    <section className="card custom-card fight-card" aria-labelledby="fight-title" data-reading={at ? reading : "none"}>
      <p className="eyebrow">{at ? "The fight" : "The hunts"}</p>
      {at ? (
        <>
          <h2 id="fight-title">
            {at.spec.title.split(" of ")[0]}
            <span className="trib-bow">
              {REALMS[at.ctx.realm].name}, {layerName(foeLevel(at.spec, at.ctx))} · made of {at.spec.element}, afraid of {at.spec.weak}
            </span>
          </h2>
          <p className="fight-reading" role="status">
            {reading === "behind" ? "It has the better of you." : reading === "ahead" ? "You have the better of it." : "An even fight."}
            <strong> Edge {SIGN(edge)}</strong>
          </p>
          <ul className="practice-list" aria-label="Where your edge comes from">
            {rows.map(([label, n]) => (
              <li key={label} data-zero={n === 0 ? "yes" : "no"}>
                <span>{label}</span>
                <strong>{SIGN(n)}</strong>
              </li>
            ))}
          </ul>
          <p className="muted fight-note">Strength alone ends it from +3; a craft, from +1; a ruse, from −1 with a clear head.</p>
        </>
      ) : (
        <h2 id="fight-title">
          {done} of 40 foes dealt with
        </h2>
      )}
      <ol className="rung-row hunt-row" aria-label="Foes dealt with at each of the ten hubs">
        {record.map((r) => (
          <li key={r.hub} data-zero={r.done === 0 ? "yes" : "no"} data-state={r.done === 4 ? "won" : "none"} title={`${r.hub}: ${r.done} of 4`}>
            <span>{r.short}</span>
            <strong>{r.done}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}
