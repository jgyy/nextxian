import type { Arc } from "../types";

/**
 * Book Two's frame: the opening, and the hubs where the player chooses which arcs to walk. The hubs list every arc of
 * their act, lock the ones already done, and open the next beat of the book once enough are done.
 */
export const frame: Arc = {
  id: "frame",
  name: "The Frame of the River",
  scenes: String.raw`
=== b2_gate | Book Two: The River of Ledgers
They come up on foot. The Concord does not ride to a place it means to judge. Five figures in ledger-grey with white sashes climb the last of the stair in the thin light, and the gate disciple, who has not been bowed to in nine years, forgets his umbrella.
+[end] end1_sisters | Behind you in the courtyard two women are reading the names aloud together, a low double voice that stops mid-line and starts again.
+[end] end1_redeemed | The Sealing Jade sits in the altar, upper half only, and every Censor’s eye goes to the Law Hall roof as they pass beneath it.
+[end] end1_sovereign | You are wearing the Law Hall’s seal at your belt. It has never felt so much like a collar.
The mist has stayed low for forty days. Whatever you did on the Sealing Night, you can feel the whole mountain waiting to learn if it was enough.
> truth | Go down to the gate and meet them with your hands open. | censors_entry
> quiet | Watch from the Ash Bridge, and learn their faces before they learn yours. | censors_entry
> inquiry | Ask Lin Yuan what the Concord’s white sash means, and meet them knowing. | censors_entry
> mercy | Fetch the cook, who has set out rice for twelve, and walk down together. | censors_entry

=== hub_b2_road | The Willow Reach
(temporary hub)
> truth | The Willow Reach. | willow_entry | | !b2r_willow | You have already walked this reach.
> quiet | Kuan Landing. | assize_entry |  | !b2r_assize | You have already sat in that court.
> mercy | The Drowned Pagoda. | pagoda_entry |  | !b2r_pagoda | You have already taken that tea.
> inquiry | Wait. | hub_b2_road
`,
};
