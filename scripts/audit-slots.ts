/**
 * Counts the lines of the Book One side roads whose wording did not fit the thing it named. Before the roads were given
 * kinds, every focus got the same wording whatever it was: "Break your way into the orchard ledger", "Slip a small piece of the
 * pickers’ shed into your sleeve", "Corner the cairn of reeds". This replays the old selection (the first entries of each pool,
 * picked by the old seeds) and counts the picks that do not fit the focus. `npx tsx scripts/audit-slots.ts`
 */
import { ChoiceTone } from "../src/engine/types";
import { approachModes } from "../src/story/roads/build";
import { fits, focusKind } from "../src/story/roads/kinds";
import { APPROACH_LABEL, CHOICE_LABEL, OBSTACLES, RETURN_APPROACH, STAGE_OPEN, TONE_RING } from "../src/story/roads/lexicon";
import { roadsOne } from "../src/story/roads/specs-1";
import { roadsTwo } from "../src/story/roads/specs-2";

const OLD = { approach: 2, stage: 4, choice: 5 };
const at = <T,>(pool: readonly T[], seed: number, len: number): T => pool.slice(0, len)[((seed % len) + len) % len];

function sceneTones(mode: ChoiceTone, stage: number, approach: number): ChoiceTone[] {
  const start = TONE_RING.indexOf(mode);
  const others: ChoiceTone[] = [];
  for (let i = 1; others.length < 3 && i <= TONE_RING.length; i++) {
    const tone = TONE_RING[(start + i + stage + approach) % TONE_RING.length];
    if (tone !== mode && !others.includes(tone)) others.push(tone);
  }
  return [mode, ...others];
}

/**
 * Obstacles that can be traced to someone, or pressed past, or got past with a borrowed name, by what they are:
 * a barrier (something built), a person, or a situation (something that happens). The first three label templates below need one or the other.
 */
const SITUATIONS = /^(a sick child|a woman who cannot|an old man begging|a dog tied|a row of unlit|a crowd waiting|a stretch of path|a sleeping dog|a courtyard|a lamp that|a long wait|a slope|a question)/;
const PEOPLE = /^(a watchman|a clerk|a guard|a man who|a council|a village elder|a sworn witness)/;
const NEEDS: Record<string, "barrier" | "barrier-or-person"> = {
  "Trace {obstacle}": "barrier",
  "Use a borrowed name to get past {obstacle}": "barrier-or-person",
  "Press past {obstacle}": "barrier-or-person",
};
function obstacleBad(template: string, obstacle: string): boolean {
  const need = Object.entries(NEEDS).find(([head]) => template.includes(head))?.[1];
  if (!need) return false;
  if (SITUATIONS.test(obstacle)) return true;
  return need === "barrier" && PEOPLE.test(obstacle);
}
const tally: Record<string, number> = {};
let total = 0;
let wording = 0;
const note = (where: string, template: string, focus: string) => {
  wording++;
  if (!fits(template, focusKind(focus))) {
    total++;
    tally[where] = (tally[where] ?? 0) + 1;
  }
};

const noteObstacle = (template: string, obstacle: string) => {
  wording++;
  if (obstacleBad(template, obstacle)) {
    total++;
    tally["obstacle in a label"] = (tally["obstacle in a label"] ?? 0) + 1;
  }
};

[...roadsOne, ...roadsTwo].forEach((spec, index) => {
  const modes = approachModes(index);
  modes.forEach((mode, a) => note("approach choices", at(APPROACH_LABEL[mode], index + a, OLD.approach), spec.focus[a]));
  modes.forEach((mode, a) => {
    note("return notes", RETURN_APPROACH[mode][0], spec.focus[a]);
    for (let stage = 0; stage < 5; stage++) {
      const seed = index * 7 + a * 3 + stage * 5;
      if (stage <= 1) note("scene openers", at(STAGE_OPEN[stage], seed, OLD.stage), spec.focus[a]);
      sceneTones(mode, stage, a).forEach((tone, c) => {
        const label = at(CHOICE_LABEL[tone], seed + c * 2 + 3, OLD.choice);
        note("choice labels", label, spec.focus[a]);
        // The old slots came from the approach’s pool, not the choice’s.
        const old = OBSTACLES[mode][(((seed + 1) % 6) + 6) % 6];
        noteObstacle(label, old);
      });
      if (stage === 4 && a === 2) note("hidden-stair choices", "[p] {focus} stair", spec.focus[2]);
    }
  });
  for (let n = 0; n < 3; n++) {
    if (n === 0) note("hidden openers", "[p] {focus}", spec.focus[2]);
    sceneTones(modes[2], n, 2).forEach((tone, c) => {
      const label = at(CHOICE_LABEL[tone], index + n * 3 + c, OLD.choice);
      note("hidden choice labels", label, spec.focus[2]);
      noteObstacle(label, OBSTACLES[modes[2]][(((index) % 6) + 6) % 6]);
    });
  }
});

console.log("old wording that named a focus it did not fit:");
for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(24)} ${v}`);
console.log(`  total ${total} of ${wording} picks`);
