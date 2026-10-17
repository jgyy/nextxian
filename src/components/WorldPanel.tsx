import { roleOf, worldMeasure, type Course } from "@/engine/world";
import type { GameState } from "@/engine/types";
import { affairAt, REACH_SPECS, worldLedger } from "@/story/world";

const COURSE_WORD: Record<Course, string> = { mended: "mended", ground: "ground on", broke: "broke" };
const TOUCHED_WORD: Record<Course, string> = { mended: "has mended", ground: "has ground on", broke: "has broken" };
const FATE_WORD: Record<Course, string> = { mended: "mend of itself", ground: "grind on", broke: "break" };
const PART_WORD = { look: "looked on", hand: "lent a hand", side: "took a side", hinge: "was the hinge" } as const;

/**
 * The wider world, as it turns: what the hero has been in it (a pair of eyes, a hand, the many hands, a hinge of the age), and the forty affairs in ten
 * reaches, each as the world has it. An affair the hero has not touched shows what it will come to if left alone, once the hero has heard of its reach.
 * Shown once the hero has opened a reach or taken a part, and inside an affair.
 */
export function WorldPanel({ game }: { game: GameState }) {
  const at = affairAt(game.sceneId);
  const opened = REACH_SPECS.map((r) => game.visited.includes(r.id));
  const voices = worldMeasure(game.flags, "voices");
  if (!at && !opened.some(Boolean) && voices === 0) return null;
  const role = roleOf(game.flags);
  const ledger = worldLedger(game.flags);
  const rows: [string, number][] = [
    ["Weight you carry", worldMeasure(game.flags, "weight")],
    ["Voices that answer you", voices],
    ["Affairs that turned on you", worldMeasure(game.flags, "hinges")],
    ["Mended by your part", worldMeasure(game.flags, "mended")],
    ["Ground on, or broke", worldMeasure(game.flags, "ground") + worldMeasure(game.flags, "broke")],
    ["True accounts written", worldMeasure(game.flags, "records")],
  ];
  const here = at && ledger[at.ctx.reach - 1].rows.find((r) => r.spec.id === at.spec.id);
  return (
    <section className="card custom-card world-card" aria-labelledby="world-title" data-role={role.id}>
      <p className="eyebrow">The world</p>
      <h2 id="world-title">
        {role.name}
        <span className="trib-bow">{role.blurb}</span>
      </h2>
      {at && here && (
        <p className="fight-reading world-here" role="status" data-fate={here.course}>
          {at.spec.title}: {here.touched ? `it ${TOUCHED_WORD[here.course]}` : `left alone, it will ${FATE_WORD[at.spec.fate]}`}
          {here.part && <strong> You {PART_WORD[here.part]}</strong>}
        </p>
      )}
      <ol className="rung-row world-row" aria-label="The ten reaches of the world and the four affairs in each">
        {ledger.map((reach, i) => {
          const counts = (["mended", "ground", "broke"] as const).map((c) => reach.rows.filter((r) => r.touched && r.course === c).length);
          return (
            <li key={reach.reach} data-open={opened[i] ? "yes" : "no"} title={`${reach.title}: ${counts[0]} mended, ${counts[1]} ground on, ${counts[2]} broke by your part`}>
              <span>{reach.short}</span>
              <span className="pips" aria-hidden="true">
                {reach.rows.map((r) => (
                  <i key={r.spec.id} data-state={r.touched ? r.course : opened[i] ? `open-${r.spec.fate}` : "unheard"} title={`${r.spec.title}: ${r.touched ? COURSE_WORD[r.course] : opened[i] ? `if left alone, it will ${FATE_WORD[r.spec.fate]}` : "not yet heard of"}`} />
                ))}
              </span>
            </li>
          );
        })}
      </ol>
      <ul className="practice-list">
        {rows.map(([label, n]) => (
          <li key={label} data-zero={n === 0 ? "yes" : "no"}>
            <span>{label}</span>
            <strong>{n}</strong>
          </li>
        ))}
      </ul>
      <p className="muted fight-note">Each pip is an affair: green mended, amber ground on, red broke; a ring is one you have heard of and not touched, tinted by what it will come to if left alone.</p>
    </section>
  );
}
