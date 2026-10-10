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
> force | Run for the far shore, where the smoke of the furnaces stands against the sky. | hub_b5_b |  | count:b5q_>=5 | The far shore is still beyond the horizon.
`,
};
