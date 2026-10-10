import type { Arc } from "../types";

/**
 * Book Five's frame: the Glass Sea and the Heavenly Stair. Three hubs, one for each leg of the road: the crossing of the Glass Sea
 * (six arcs), the camps at the foot of the Stair (six), and the Stair itself (five), ending where the road drops toward Azure Cloud.
 */
export const frame5: Arc = {
  id: "frame5",
  name: "The Frame of the Glass Sea",
  scenes: String.raw`
=== b5_gate | The Shore of Glass
The grass gives out in a single afternoon. One hour you are riding through feather-grass up to the pony’s knee, and the next the ground goes pale and hard under the hooves and the last blade falls behind. Before you the world stops. There is nothing ahead but light: a flat, dazzling, endless plain the colour of old ice, ringed with a trembling line of mirage, that runs away to the edge of sight and farther.
It is the Glass Sea. Three hundred miles of sand fused by some ancient fire into a single sheet, cracked into plates the size of fields, scoured clean by wind. At night, say the Listeners, it sings.
+ b4q_voice | A tune with no words hums in your chest, and the glass hums back.
+ b4q_mill | A cold shard of steel lies in the cart, and the plain beyond it gleams the same grey.
At the shore a little town of wind-bleached tents has grown up around a long yard of upturned hulls. Skiffs: narrow glass-runners with tall masts and sails like folded wings. A forest of masts. Forty days, Mengjiao said. The Elder has counted thirty-nine.
> truth | Ride down to the yard, and ask who builds the best skiff on the shore. | hub_b5_a
> mercy | Look for the child sitting on the roof of a wrecked skiff, watching you. | hub_b5_a
> quiet | Take the reins and let the Listeners’ ponies pick their own road. | hub_b5_a
> inquiry | Ask Hao Lan how many miles the map says it is across. | hub_b5_a

=== hub_b5_a | Three Hundred Miles of Glass
The shore falls behind. The days become a rhythm of light, wind and creak. The skiffs run over the glass with a sound like a thousand ice-skates, and the horizon never gets nearer. At noon the sky bleaches white. By dusk the plain turns copper, then rose, then violet, and the stars come out below you as well as above.
At night the glass begins to hum.
+[d] b5q_skiff | Three skiffs run abreast under borrowed sail, and the sea is no wider than the wind.
+[d] b5q_singing | You slept with wax in your ears for four nights, and the sea still found your name.
+[d] b5q_wreck | A logbook in a dead man’s hand is wrapped in oilcloth in the Elder’s coat.
+[d] b5q_mirage | You have seen a city that was not there, and you carry a name that was not yours.
+[d] b5q_gale | There are fine glass scratches along the skiffs’ planking, bright as new silver.
> truth | Put in at the shore yard to commission a skiff. | skiff_entry |  | !b5q_skiff | You already have your skiffs.
> mercy | Sail into the dusk, when the sea begins to sing. | singing_entry |  | !b5q_singing & b5q_skiff | You cannot sail until you have a skiff.
> quiet | Follow the line of masts frozen in the glass on the horizon. | wreck_entry |  | !b5q_wreck & b5q_skiff | You cannot sail until you have a skiff.
> inquiry | Steer toward the white towers that rise from the mirage. | mirage_entry |  | !b5q_mirage & b5q_skiff | You cannot sail until you have a skiff.
> deceit | Reef the sails against the black wall of wind to the north. | gale_entry |  | !b5q_gale & b5q_skiff | You cannot sail until you have a skiff.
> force | Run for the far shore, where the smoke of the furnaces stands against the sky. | furnace_entry |  | !b5q_furnace & count:b5q_>=5 | The far shore is still beyond the horizon.

=== hub_b5_b | The Ten Thousand Tents
The camp at the foot of the Stair is a city that has never learned to be one. Ten thousand tents, in rings, round a hub of white pavilions; a bazaar of relic-sellers and incense-sellers and fortune-tellers; a thousand cooking-fires; a river of pilgrims in white, all moving the same way, with the same upturned eyes. Gongs sound the hours. Over everything stands the Stair, tier on tier of green glass, going up into a sky the colour of milk.
You have nine days. The ninth night is the Ceremony. Everyone knows it. Nobody says what it is for.
+[d] b5q_furnace | A sample tread, heavy as a loaf, rides in the Elder’s coat, and the Mother Furnace purred when you left.
+[d] b5q_pilgrims | You have a tent, a number, and a white armband that says PETITIONER, and you are one of ten thousand.
+[d] b5q_tithe | A paper in Hao Lan’s hand lists the prices the poor were paid for their names.
+[d] b5q_crib | Nine children in grey sit in your tent and do not know what to do with their hands.
+[d] b5q_fang | You have been in the Inspector’s tent, and you know what he wants, and it is not nothing.
+[d] b5q_clerk | A page covered in tiny characters lies folded in your sleeve, and it is writing itself.
+[d] b5q_ladder | You were weighed on a brass scale, and the pointer settled on a number you will not tell.
+[d] b5q_festival | Someone in a black veil has tied a ribbon to your tent-pole, and the knot is a mourning-knot.
> truth | Push through the crowd to the registration pavilion, and take a number. | pilgrims_entry |  | !b5q_pilgrims | You already have a number.
> mercy | Follow the sound of auctioneers to the long shed where the poor are selling their names. | tithe_entry |  | !b5q_tithe & b5q_pilgrims | You do not yet know where the shed is.
> quiet | Look for the low grey buildings at the edge of the camp where no pilgrim goes. | crib_entry |  | !b5q_crib & b5q_pilgrims | You do not yet know what the grey buildings are.
> inquiry | Ask for the Inspector’s pavilion, a white tent with nine banners. | fang_entry |  | !b5q_fang & b5q_pilgrims | You do not yet know where to ask.
> deceit | Follow the stream of white-robed clerks to the tall tent at the heart of the camp. | clerk_entry |  | !b5q_clerk & b5q_pilgrims | You do not yet know what the tall tent is.
> force | Join the queue at the foot of the first tier, where pilgrims are being weighed in a great brass scale. | ladder_entry |  | !b5q_ladder & b5q_pilgrims | You have not yet found the scale.
> truth | Follow the drums and lanterns to the festival-ground, where the sects are holding the last night’s feast. | festival_entry |  | !b5q_festival & count:b5q_>=10 | The festival has not yet begun.
> force | Take your place in the queue for the first tier, and see what the Stair asks of you. | hub_b5_c |  | count:b5q_>=13 | The Stair does not yet admit you.

=== hub_b5_c | The Nine Tiers
The Stair is not climbed in a day. Nine tiers, each a spiral of three hundred treads, each ending in a landing like a small walled town. At the first, the pilgrims queue in their thousands. At the third, they thin. At the sixth, there is only a trickle, and the air is cold and thin and bright. Above the ninth, no one has seen.
At every landing a different trial waits. At every landing a different truth is carved on the wall, and most of the pilgrims walk past it, with their eyes on the next step.
+[d] b5q_tiers | You have read the first tier’s wall, and what it says is not what the pilgrims think.
+[d] b5q_lines | A single printed line of the Ledger is folded in your pocket, and it has your name in it.
+[d] b5q_stone | Your palm is cold where it touched a stone that remembers everything.
+[d] b5q_door | There is a black lotus-seed in the Elder’s pocket, and a door behind her in the dark.
> truth | Climb the first spiral, reading every inscription on the wall. | tiers_entry |  | !b5q_tiers | You have climbed the first tier.
> mercy | Go into the Library of Lines on the third landing, where the clerks keep the Ledger’s copy. | lines_entry |  | !b5q_lines & b5q_tiers | You have not climbed high enough.
> quiet | Go up the sixth, to the cold terrace where the Ledger Stone’s copy stands. | stone_entry |  | !b5q_stone & b5q_tiers | You have not climbed high enough.
> inquiry | Go down the sealed stair behind the third landing, to the door under the Stair. | door_entry |  | !b5q_door & b5q_tiers | You have not found the way down.
> deceit | Go up the ninth, where the masters wait to begin the Ceremony. | summit_entry |  | count:b5q_>=17 & !b5q_summit | The masters are not yet ready for you.
`,
};
