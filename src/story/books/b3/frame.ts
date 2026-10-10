import type { Arc } from "../types";

/**
 * Book Three's frame: the fork the boat took at the end of Book Two, and the hub at Tidewall where the player chooses which
 * arcs to walk. Both arrival arcs land in `tide_arrive`.
 */
export const frame3: Arc = {
  id: "frame3",
  name: "The Frame of the Coast",
  scenes: String.raw`
=== b3_gate | The Salt Coast
The river does not end. It loses its shape. For a day the banks go to mud, then to reed, then to a grey flat in which the black boat seems to sit and the world to slide beneath it. Gulls appear. The air thickens with the taste of a thing you have never tasted and recognise at once.
The Elder is the first to say it. “Salt.”
+ reserve_chose_sea | You chose the left channel, and the coast is coming out of the haze to meet you, a long low line with a tower on it.
+ reserve_chose_hills | You chose the willows, and the hills have taken three days to give you up. The coast lies below the last of them like a bowl of pale ash.
+ asm_duan_helped | Somewhere behind you, a man in a grey robe is explaining to the Concord why he did not stop a boat.
Nobody has spoken of what comes next. There is a mourning-shop on this coast, and a wall with a name on it, and a library that is said to have drowned. There is also a Concord that has signed an order, and a fleet.
> truth | Take the boat in by the sea road, and be seen coming. | coast_entry | +b3_by_sea | reserve_chose_sea | You did not choose the sea road.
> quiet | Keep to the hills, and come down to the coast quietly. | mender_entry | +b3_by_hills | reserve_chose_hills | You did not choose the hill road.
> mercy | Go in by the sea, and trust the people on the quay. | coast_entry | +b3_by_sea | reserve_chose_sea | You did not choose the sea road.
> inquiry | Take the hill road, and ask the mender what he knows. | mender_entry | +b3_by_hills | reserve_chose_hills | You did not choose the hill road.

=== tide_arrive | The Ferryman’s Rest
The inn at the foot of Bell Lane is called the Ferryman’s Rest, and it has the look of a place that has stopped asking its guests questions. It is low and long, whitewashed, with a thatch of dried sea-grass and a sign that has lost all its paint. The landlady is a broad woman called Mother Tiao who looks at the Elder’s silver comb and at Mei Qiu’s sash and at the black boat tied up at the quay, and says only, “Four rooms. Pay in the morning.”
+[x] b3_by_sea | Yue Zhaoning’s boat is already hauled up on the hard behind the inn, its scarred strake turned to the sky.
+[x] b3_by_hills | Master Zhu’s tide-key hangs at your belt on its cord, a bone disc that clicks against the buckle when you walk.
+[x] asm_duan_helped | A paper pinned to the door of the harbour office carries the Concord’s seal and a list of names. Duan Wuyi’s is not on it. Yours is.
The Elder sits down on the edge of her bed with a small, tired sound and takes the comb out of her hair. For a moment she looks all of her years.
“Tomorrow,” she says, “we will look for a woman in black. Tonight we will sleep. I find I am afraid of both.”
Through the shutters comes the sound of the sea, and under it, thin and steady, the wash of the paper on the sand.
> truth | Tell her you are afraid of both as well. | hub_b3_coast | +b3_arrived
> quiet | Open the shutter a crack, and look out. | hub_b3_coast | +b3_arrived
> mercy | Take her comb, and brush the salt out of her hair. | hub_b3_coast | +b3_arrived
> inquiry | Ask her what she will say to Madam Ash. | hub_b3_coast | +b3_arrived

=== hub_b3_coast | Tidewall
Tidewall is a harbour behind a wall. The wall is forty feet high and a mile long, built of pale limestone, and every block of it is carved with a name. The harbour-folk walk under it with their hats off. They do not seem to know that they are doing it. Behind the wall the town climbs a hill in tiers of whitewashed houses and tarred roofs, and at the top, on a spur of black rock, a lighthouse that is never lit by day stands over everything like a held breath.
The Elder has taken rooms at the Ferryman’s Rest. The Censors who came with you, Mei Qiu among them, are watching the quay. The tide is out, and the harbour is a plain of wet sand strewn with paper.
+[d] b3_arrived | You came into Tidewall under a sky the colour of old tin, and nobody on the quay asked who you were.
+[c] count:card_>=4 | Four brown cards lie in your sleeve, warm from handling, and each of them wants the others.
+[c] count:card_>=2 | Two brown cards lie in your sleeve. They have begun to hum when they touch.
+[c] count:card_>=1 | A brown card lies in your sleeve, warm from handling.
+[d] b3q_house | The hill above the town is quiet, and its windows are open, and a child is spinning on the grass.
+[d] b3q_forge | A small black seal that asks lies on your palm in memory, warm as a coal.
+[d] b3q_keeners | The lament runs in your head in nine verses, seven of them written down.
+[d] b3q_ward | Cooper Lane smells of boiled linen and, faintly, of something blue.
+[d] b3q_harbour | Ke-er’s name is under your fingers, still, a groove in the limestone you will not forget.
+[d] b3q_mourning | There is a black ribbon in your sleeve, and a woman’s voice that said nothing you could answer.
+[d] b3q_ferry | The ferryman’s rope is still wound on your wrist, two turns, a knot you cannot undo.
+[d] b3q_lamp | The lighthouse blinks twice on the horizon, in a pattern you now know.
> truth | Walk the length of the Wall, and read what is carved there. | harbour_entry |  | !b3q_harbour | You have read the Wall.
> mercy | Find the mourning-shop at the top of Bell Lane. | mourning_entry |  | !b3q_mourning & count:b3q_>=1 | You have been to the mourning-shop, or you have not yet learned enough of the town to find it.
> inquiry | Take the ferry across the bay. | ferry_entry |  | !b3q_ferry & count:b3q_>=1 | You have taken that ferry, or you have not yet learned enough of the town to find it.
> quiet | Climb the spur to the Salt Lamp. | lamp_entry |  | !b3q_lamp & count:b3q_>=2 | You have been to the Lamp, or you have not yet learned enough of the town to climb it.
> truth | Walk the length of Cooper Lane to the dye-works. | ward_entry |  | !b3q_ward & count:b3q_>=2 | You have been to the Ward, or you have not yet learned enough of the town to find it.
> mercy | Climb the ladder to the Sing-Loft above the fish market. | keeners_entry |  | !b3q_keeners & count:b3q_>=2 | You have sung with the keeners, or you have not yet learned enough of the town to find the loft.
> force | Take the ferry to the Salt Works, and ask for the seal-wright. | forge_entry |  | !b3q_forge & b3q_ferry | You have not yet crossed the bay with the ferrywoman, or you have already met the seal-wright.
> mercy | Climb the hill road to the House of Gentle Hands, where a boy has gone alone. | house_entry |  | !b3q_house & b3q_ward & count:b3q_>=3 | The House stands closed to you until the Ward has told you what it knows, or you have already been.
`,
};
