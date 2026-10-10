import { CHOICE_TONES, TONE_INFO } from "@/engine/tone";

/** Explains what each choice colour means. It sits above the options, so the colours can be read at a glance. */
export function ToneLegend() {
  return (
    <ul className="tone-legend" aria-label="What each colour means">
      {CHOICE_TONES.map((tone) => (
        <li key={tone} data-tone={tone}>
          <span className="swatch" aria-hidden="true" />
          <span>
            <strong>{TONE_INFO[tone].name}.</strong> {TONE_INFO[tone].meaning}
          </span>
        </li>
      ))}
    </ul>
  );
}
