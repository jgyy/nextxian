import type { Arc } from "../types";

/** Placeholder until the departure arc is written. */
export const departure: Arc = {
  id: "departure",
  name: "The Last Night on the Mountain",
  scenes: String.raw`
=== departure_entry | The Last Night on the Mountain
Temporary scene.
> truth | Go. | departure_entry
> inquiry | Go. | departure_entry
> quiet | Go. | departure_entry
> mercy | Go. | departure_entry
`,
};
