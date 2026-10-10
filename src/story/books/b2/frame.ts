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

=== hub_b2_road | The Reach of Many Landings
The river does not hurry. For thirty-six days it carries the barge past waterside towns, each with its jetty and its grey-flagged toll-hut, each with something to say. The Censors keep a schedule that allows for delay, as long as the delay is the right kind. Duan Wuyi calls it “the courtesy of the road.”
+ b2_censors_done | Duan Wuyi’s notes on your mountain ride in a locked case on the barge, and he checks the lock each morning.
+ b2r_willow | Behind you, a child with a cloth satchel is still waving from a jetty at Willow Reach.
+ b2r_assize | The salt pans at Kuan Landing are a white line on the horizon, and a court of salt is already sinking into the town.
+ b2r_pagoda | The drowned pagoda keeps its lantern lit, in case you should come back.
+ b2r_barge | A boy with black hands is writing in the air on the foredeck, and no one asks him to stop.
+ b2r_fever | At Green Mill, a row of blue flowers is coming up beside the great wheel.
+ departed | The mountain is a grey tooth far behind. Qinglian Ford is still twenty days ahead.
> truth | Put in at Willow Reach, where the river is narrow and the toll is a name. | willow_entry |  | !b2r_willow | You have already crossed at Willow Reach.
> inquiry | Put in at Kuan Landing, where the assize is sitting and the tide will not turn. | assize_entry |  | !b2r_assize | You have already sat in that court.
> mercy | Row out to the Drowned Pagoda, where a cup is poured for you. | pagoda_entry |  | !b2r_pagoda | You have already taken that tea.
> quiet | Sit down to chess with the Censor-General, and see what he says. | barge_entry |  | !b2r_barge | You have already played those games.
> truth | Put in at Green Mill, where a town has stopped speaking. | fever_entry |  | !b2r_fever | You have already woken Green Mill.
> quiet | Press on to Qinglian Ford. | hub_b2_city |  | count:b2r_>=3 | Walk at least three of the waterside roads before you reach the city.

=== hub_b2_city | Qinglian Ford
(temporary hub)
> truth | The Silk Quarter. | silk_entry |  | !b2q_silk | You have been through the quarter.
> quiet | The Archive of Nine. | nine_entry |  | !b2q_nine | You have climbed the tower.
> mercy | Wait. | hub_b2_city
> inquiry | Wait. | hub_b2_city
`,
};
