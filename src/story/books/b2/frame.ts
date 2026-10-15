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
+[rl] realm>=3 | From Core Formation upward, the river is a map of qi: you feel which landings are hollow, three bends ahead.
+[rl] realm>=2 | At Foundation Establishment the river’s qi pulls on your breath, and you can tell a lying ferryman by his boat.
+[rl] realm<=1 | You are barely a cultivator for this water. Each crowded landing presses on your chest like a hand.
> truth | Put in at Willow Reach, where the river is narrow and the toll is a name. | willow_entry |  | !b2r_willow | You have already crossed at Willow Reach.
> inquiry | Put in at Kuan Landing, where the assize is sitting and the tide will not turn. | assize_entry |  | !b2r_assize | You have already sat in that court.
> mercy | Row out to the Drowned Pagoda, where a cup is poured for you. | pagoda_entry |  | !b2r_pagoda | You have already taken that tea.
> quiet | Sit down to chess with the Censor-General, and see what he says. | barge_entry |  | !b2r_barge | You have already played those games.
> truth | Put in at Green Mill, where a town has stopped speaking. | fever_entry |  | !b2r_fever | You have already woken Green Mill.
> quiet | Press on to Qinglian Ford. | qing_arrive |  | count:b2r_>=3 | Walk at least three of the waterside roads before you reach the city.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b2_road | cult+30 +still_hub_b2_road | !still_hub_b2_road | You have already sat your night here.

=== still_hub_b2_road | A Night of Stillness
The river is loud with other people’s qi. You sit on the cart-tail with your back to a lantern-post, and let it go past you the way water goes past a pier.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b2_road
> truth | Admit how much of the road you were carrying. | hub_b2_road
> mercy | Wake the others gently. | hub_b2_road
> inquiry | Note what your qi felt like. | hub_b2_road
=== hub_b2_city | Qinglian Ford
The Guesthouse of Nine Moons has paper windows, and through them the city goes about its business as if no one in it were waiting to be judged. Six days remain before the Assembly sits. The Censors do not forbid you the town. Duan Wuyi says only that a witness who has seen nothing has nothing to say.
+ b2_qinglian | The Water Gate is behind you, and the lantern chain over it is already being strung for the festival.
+ b2q_silk | A bolt of plain silk is folded on the sill, a gift from a quarter that now knows your face.
+ b2q_nine | The bone-lamp’s pale glow still sits at the back of your eyes when you close them.
+ b2q_lanterns | A paper lantern with a name on it bobs somewhere downriver, and you know whose.
+ b2q_stairs | Your legs still ache from the Crane Stairs, and the Elder has stopped teasing you about it.
+ b2q_vault | Ink is under your nails that will not wash out, and no one has asked why.
+[rl] realm>=3 | From Core Formation upward, the Ford is a ledger written in qi. Every sect’s quarter hums a different note, and you can hear which doors have been opened since the morning.
+[rl] realm>=2 | At Foundation Establishment you can read the Ford’s wards with your skin: the Censors’ brass lanterns tingle, and the dyers’ vats taste of copper.
+[rl] realm<=1 | You are too thin in qi for a city that counts it. The Censors’ wards itch at you, and twice a clerk looks at you and then, uneasily, at his instruments.
> truth | The Silk Quarter, where the weavers have a petition. | silk_entry |  | !b2q_silk | You have been through the quarter.
> quiet | The Archive of Nine, in its tower of bone-white stone. | nine_entry |  | !b2q_nine | You have climbed the tower.
> mercy | The Festival of Floating Names, on the nine canals. | lanterns_entry |  | !b2q_lanterns | You have floated your lanterns.
> inquiry | The Crane Stairs, where precedence is fought for. | stairs_entry |  | !b2q_stairs | You have already climbed.
> force | The Ledger Hall, and what lies beneath it. | vault_entry |  | !b2q_vault & count:b2q_>=2 | Learn the city a little first, or you have been below already.
> truth | Take your seat in the Round Hall. The Assembly is sitting. | asm_entry |  | count:b2q_>=4 | The Assembly will not sit until you have walked four of the city’s roads.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b2_city | cult+40 +still_hub_b2_city | !still_hub_b2_city | You have already sat your night here.

=== still_hub_b2_city | A Night of Stillness
Qinglian Ford never sleeps. You find a roof-garden with nobody in it and sit among the pots until the noise of the city is only weather.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b2_city
> truth | Admit how much of the road you were carrying. | hub_b2_city
> mercy | Wake the others gently. | hub_b2_city
> inquiry | Note what your qi felt like. | hub_b2_city
`,
};
