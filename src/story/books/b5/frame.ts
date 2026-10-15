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
+[rl] realm>=5 | From Spirit Severing upward, the Glass Sea is almost too bright to see. You feel the roots of every name that was ever struck here, and the plain is a long, patient, forgiving field.
+[rl] realm>=4 | At Nascent Soul the glass hums with you. You steer by the song under the plate, and Yue stops checking the compass.
+[rl] realm<=3 | The Sea is a mirror and you do not like what it shows of your cultivation. Odval’s eyes follow your hands whenever the skiffs lean.
> truth | Put in at the shore yard to commission a skiff. | skiff_entry |  | !b5q_skiff | You already have your skiffs.
> mercy | Sail into the dusk, when the sea begins to sing. | singing_entry |  | !b5q_singing & b5q_skiff | You cannot sail until you have a skiff.
> quiet | Follow the line of masts frozen in the glass on the horizon. | wreck_entry |  | !b5q_wreck & b5q_skiff | You cannot sail until you have a skiff.
> inquiry | Steer toward the white towers that rise from the mirage. | mirage_entry |  | !b5q_mirage & b5q_skiff | You cannot sail until you have a skiff.
> deceit | Reef the sails against the black wall of wind to the north. | gale_entry |  | !b5q_gale & b5q_skiff | You cannot sail until you have a skiff.
> force | Run for the far shore, where the smoke of the furnaces stands against the sky. | furnace_entry |  | !b5q_furnace & count:b5q_>=5 | The far shore is still beyond the horizon.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b5_a | cult+70 +still_hub_b5_a | !still_hub_b5_a | You have already sat your night here.

=== still_hub_b5_a | A Night of Stillness
At anchor, in a lee of broken plate, you sit with the hum of the Sea in your bones. It is a vast, kind noise, and you sit in it until your own breathing is part of it.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b5_a
> truth | Admit how much of the road you were carrying. | hub_b5_a
> mercy | Wake the others gently. | hub_b5_a
> inquiry | Note what your qi felt like. | hub_b5_a
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
+[rl] realm>=5 | From Spirit Severing upward, the camp is a single weight on the world. Ten thousand tents, ten thousand small knots of want, and the Stair above them like a needle through cloth.
+[rl] realm>=4 | At Nascent Soul you can feel the Weighing Wardens’ attention move through the crowd, and step quietly out of the way of it.
+[rl] realm<=3 | The camp presses on you from every side. Ten thousand pilgrims and not one of them feels your equal, and the Stair leans over you like a question.
> truth | Push through the crowd to the registration pavilion, and take a number. | pilgrims_entry |  | !b5q_pilgrims | You already have a number.
> mercy | Follow the sound of auctioneers to the long shed where the poor are selling their names. | tithe_entry |  | !b5q_tithe & b5q_pilgrims | You do not yet know where the shed is.
> quiet | Look for the low grey buildings at the edge of the camp where no pilgrim goes. | crib_entry |  | !b5q_crib & b5q_pilgrims | You do not yet know what the grey buildings are.
> inquiry | Ask for the Inspector’s pavilion, a white tent with nine banners. | fang_entry |  | !b5q_fang & b5q_pilgrims | You do not yet know where to ask.
> deceit | Follow the stream of white-robed clerks to the tall tent at the heart of the camp. | clerk_entry |  | !b5q_clerk & b5q_pilgrims | You do not yet know what the tall tent is.
> force | Join the queue at the foot of the first tier, where pilgrims are being weighed in a great brass scale. | ladder_entry |  | !b5q_ladder & b5q_pilgrims | You have not yet found the scale.
> truth | Follow the drums and lanterns to the festival-ground, where the sects are holding the last night’s feast. | festival_entry |  | !b5q_festival & count:b5q_>=10 | The festival has not yet begun.
> force | Take your place in the queue for the first tier, and see what the Stair asks of you. | hub_b5_c |  | count:b5q_>=13 | The Stair does not yet admit you.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b5_b | cult+70 +still_hub_b5_b | !still_hub_b5_b | You have already sat your night here.

=== still_hub_b5_b | A Night of Stillness
In the roar of the camp you find a stillness the size of a mat. You sit on it. The crowd goes around you like a river, and your qi settles to the bed.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b5_b
> truth | Admit how much of the road you were carrying. | hub_b5_b
> mercy | Wake the others gently. | hub_b5_b
> inquiry | Note what your qi felt like. | hub_b5_b
=== hub_b5_c | The Nine Tiers
The Stair is not climbed in a day, and it does not climb every pilgrim alike. At the first landing the thread of white is ten thousand strong. At the third it thins. At the sixth the air is cold and bright and the treads ring only for those who have earned the note. Above the ninth, no one has seen anything but light.
You have nine days. On the ninth night, at the top, nine masters will begin a Ceremony that costs nine children. You are not yet at the top.
+[rl] realm>=6 | From Dao Seeking upward, the Stair is a direction, not a place. Every tread is a name, and you can feel which ones lean toward the door.
+[rl] realm>=5 | At Spirit Severing the cold of the upper tiers cannot reach you. The pilgrims make a way without knowing why.
+[rl] realm<=4 | The upper tiers are made for someone more than you are. The air is thin, and your cultivation, which was enough for the plain, is not enough for this.
+[d] b5q_tiers | You have read the nine admissions, and you know now what the founders thought of themselves.
> truth | Climb the first spiral, and read the walls. | tiers_entry |  | !b5q_tiers | You have already climbed the Stair.
> inquiry | Go up the last stair to the Hall of the Ninth Night. | summit_entry |  | b5q_tiers & !b5q_summit | You have not yet climbed high enough.
> force | Take the lift down from the Hall of the Ninth Night. | descent_entry |  | b5q_summit & !b5q_descent | The lift runs only from the Hall, and you have not yet been there.
> deceit | Go back down to the camp, and sit another night on the plain. | hub_b5_b
> quiet | Sit out the night on the landing in meditation, with the whole camp breathing below you. | still_hub_b5_c | cult+80 +still_hub_b5_c | !still_hub_b5_c | You have already sat your night here.

=== still_hub_b5_c | A Night of Stillness
On a landing between the sixth tier and the seventh you sit with your back to the glass and your eyes shut. Below you ten thousand people breathe. You breathe with them, and then a little beyond.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b5_c
> truth | Admit how much of the road you were carrying. | hub_b5_c
> mercy | Wake the others gently. | hub_b5_c
> inquiry | Note what your qi felt like. | hub_b5_c
`,
};
