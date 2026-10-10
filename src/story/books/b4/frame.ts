import type { Arc } from "../types";

/**
 * Book Four's frame: the road onto the Ash Steppe, and the hubs where the player chooses which arcs to walk. There are three
 * hubs, one for each week of the crossing; each opens the next once enough of its arcs are done.
 */
export const frame4: Arc = {
  id: "frame4",
  name: "The Frame of the Steppe",
  scenes: String.raw`
=== b4_gate | The Ash Steppe
The road leaves the coast at dawn and does not look back. By noon the sea is a rumour behind you; by evening there is only grass.
+ b3q_chain | Behind you the Wall is a pale thread on the horizon, and the whole Salt Coast hums, very faintly, in your teeth.
+ chain_duan_freed | Duan Wuyi’s staff is gone, and his sash, and the cart has a seat beside the Elder that nobody has asked him to take.
+ chain_ke_er_chose | Mei Qiu stood on the sea steps until the cart went over the rise, and then she turned and went down to sit by a stone.
It is nine hundred miles to the mountain. Madam Ash has given the Elder a letter, and Temur’s name, and a small iron whistle. Ah Zhi has given you a coil of rope. Bao Er has given you a tune. You have a cart, two ponies, a pigeon in a basket, and nine cards, and nobody has the faintest idea what lies between here and the Azure Cloud Sect but grass.
Hao Lan unrolls the map. It has a great deal of margin.
> truth | Open the letter, and read the name of the woman who will decide. | border_entry
> mercy | Look back at the coast one last time. | border_entry
> quiet | Take the reins. | border_entry
> inquiry | Ask Hao Lan how much of the map is true. | border_entry

=== hub_b4_a | The First Week
The grass takes you. There is no other way to say it. In the first week you cease to be travellers and become part of the landscape, a slow dark speck on the plain, drifting east at the pace of a pony. The days are long and gold and windy. The nights are vast. You sleep in the cart or on the ground, and wake with dew on your blanket and a lark in the sky.
The Listeners are everywhere, and nowhere. A rider on a distant rise. A thread of smoke. A cloth tied to a post. Every evening someone arrives at your fire with a pot of tea and a piece of news, and every morning somebody leaves with a message for the next camp. The wind carries the rest.
+[d] b4q_border | You have been named at the Grass Line, and the wind has your name in every clan.
+[d] b4q_stones | A small grey listening-stone hums in your pocket, and you have not decided what it is saying.
+[d] b4q_glass | A man with a limp and a scar rides at the tail of the column beside your friend, and neither says much.
+[d] b4q_caravan | A brass compass that does not point north is wrapped in oilcloth beside the cards.
+[d] b4q_storm | There is a yellow pebble with a green crust in your sleeve, and a gap where a flower’s name was.
> truth | Ride to the rise where nine hundred and ninety-nine stones are humming. | stones_entry |  | !b4q_stones | You have already sat among the stones.
> mercy | Follow the glitter on the southern horizon to the Glass Orchard. | glass_entry |  | !b4q_glass | You have already been to the Orchard.
> quiet | Ride out to meet the salt caravan whose bells you can hear. | caravan_entry |  | !b4q_caravan | The caravan has already gone by.
> inquiry | Turn the cart toward the black wall on the western horizon. | storm_entry |  | !b4q_storm | The storm has already blown through.
`,
};
