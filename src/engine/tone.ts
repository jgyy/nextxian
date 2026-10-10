import type { ChoiceTone } from "./types";

/** Every tone, in the order the legend lists them. */
export const CHOICE_TONES: readonly ChoiceTone[] = ["truth", "mercy", "inquiry", "deceit", "force", "quiet"];

/** What each tone means to the player. The legend shows these, so the colours can be read without guessing. */
export const TONE_INFO: Record<ChoiceTone, { name: string; meaning: string }> = {
  truth: { name: "Truth", meaning: "Plain speech, confession, testimony and sincere pledges." },
  mercy: { name: "Mercy", meaning: "Sparing, pleading, kneeling, giving and gentle words." },
  inquiry: { name: "Inquiry", meaning: "Asking, reading, studying, listening and searching." },
  deceit: { name: "Deceit", meaning: "Lies, evasions, sneaking, pocketing and hidden motives." },
  force: { name: "Force", meaning: "Threats, challenges, insults and forbidden power." },
  quiet: { name: "Quiet", meaning: "Waiting, resting, travelling, preparing and moving on." },
};

/** True when the value is one of the six tones. Used to check authored data. */
export function isTone(value: unknown): value is ChoiceTone {
  return typeof value === "string" && (CHOICE_TONES as readonly string[]).includes(value);
}
