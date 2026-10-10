import type { Arc } from "../types";

/**
 * Book Four's frame: the road onto the Ash Steppe, and the hubs where the player chooses which arcs to walk.
 */
export const frame4: Arc = {
  id: "frame4",
  name: "The Frame of the Steppe",
  scenes: String.raw`
=== b4_gate | The Ash Steppe
#end The Steppe Begins
The road leaves the coast at dawn and does not look back. By noon the sea is a rumour behind you; by evening there is only grass.
`,
};
