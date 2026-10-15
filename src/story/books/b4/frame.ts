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
+[rl] realm>=4 | From Nascent Soul upward, the grass is a page. Your inner figure turns its head to the wind, and the wind answers with the name of every clan within a day’s ride.
+[rl] realm>=3 | At Core Formation you feel the Steppe breathe under your core: slow, enormous, willing. A Listener at your fire nods, once, as if you had said something.
+[rl] realm<=2 | The grass is all ears and you are all noise. Your qi is too thin to hide, and the Listeners’ children watch you from the ridges with open amusement.
> truth | Ride to the rise where nine hundred and ninety-nine stones are humming. | stones_entry |  | !b4q_stones | You have already sat among the stones.
> mercy | Follow the glitter on the southern horizon to the Glass Orchard. | glass_entry |  | !b4q_glass | You have already been to the Orchard.
> quiet | Ride out to meet the salt caravan whose bells you can hear. | caravan_entry |  | !b4q_caravan | The caravan has already gone by.
> inquiry | Turn the cart toward the black wall on the western horizon. | storm_entry |  | !b4q_storm | The storm has already blown through.
> deceit | Follow the Listeners’ smoke north to the great ring of tents where the Matriarch sits. | camp_entry |  | !b4q_camp & count:b4q_>=5 | You have not yet learned where the Winter Camp is pitched.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b4_a | cult+50 +still_hub_b4_a | !still_hub_b4_a | You have already sat your night here.

=== still_hub_b4_a | A Night of Stillness
On the Steppe a night is not a quiet thing. You lie in the grass with your hands open, and the wind takes your breath and gives it back slower.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b4_a
> truth | Admit how much of the road you were carrying. | hub_b4_a
> mercy | Wake the others gently. | hub_b4_a
> inquiry | Note what your qi felt like. | hub_b4_a
=== hub_b4_b | The Second Week
The Winter Camp is a week behind you, and the Steppe has changed. The grass is shorter, the sky higher, the wind sharper. The hills have begun. Low folds of tawny rock heave up out of the plain, with dry riverbeds between them, and here and there a stunted pine. The Listeners’ camps are fewer, and farther apart, and quieter. Twice you pass a ruined fort.
The Garrison’s presence is thicker. Patrols of grey riders on the skyline. A signal-tower on a hill. A Hush bell, hung in a gibbet beside the road, tolling at noon. Temur rides with his white hat pulled low. Sarnai has stopped chattering. The Matriarch’s tent follows two days behind, with her clan and her wolves.
+[d] b4q_camp | Ren Qiao rides at the cart’s tail beside a small hard woman in leather, and neither speaks, and neither leaves.
+[d] b4q_wolves | Two hundred and eleven mounds lie behind you at Black Ford, and a she-wolf sits on a ridge, watching.
+[d] b4q_bone | A grey slip of paper with a broker’s name on it is folded in your sleeve.
+[d] b4q_vigil | A stub of candle, still warm, is in Hao Lan’s satchel beside her pencil.
+[d] b4q_court | A black-felted widow’s lamb has taken to following the cart.
+[rl] realm>=4 | From Nascent Soul upward, the hills are a held breath. Your inner figure sees the Garrison’s bells before you do, and the silence they make is a shape you could walk through.
+[rl] realm>=3 | At Core Formation you can feel the Hush bells as a weight on the air, and hold your own qi still against it for as long as you like.
+[rl] realm<=2 | The Hush bells are a hand on the back of your neck. You are not strong enough to ignore them, and every noon you find that you have stopped humming.
> truth | Turn the cart toward the howling in the northern hills. | wolves_entry |  | !b4q_wolves | You have already answered the wolves.
> mercy | Turn the cart south toward the dry lake whose white crust shines on the horizon. | bone_entry |  | !b4q_bone | You have already walked the Bone Market.
> quiet | Follow the line of women in black who are walking east along the Fort road. | vigil_entry |  | !b4q_vigil | You have already kept the vigil.
> inquiry | Ride to the ring of nine stones where the clans have gathered to judge a man. | court_entry |  | !b4q_court | The Court of Grass has already sat.
> deceit | Ride on east, into the broken hills, where the fort is. | hub_b4_c |  | count:b4q_>=10 | You have not yet seen all there is to see on the road.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b4_b | cult+60 +still_hub_b4_b | !still_hub_b4_b | You have already sat your night here.

=== still_hub_b4_b | A Night of Stillness
The Hush falls at noon and lifts at dusk. You sit through the whole of the quiet with your eyes shut, and learn what is left of you when the world stops answering.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b4_b
> truth | Admit how much of the road you were carrying. | hub_b4_b
> mercy | Wake the others gently. | hub_b4_b
> inquiry | Note what your qi felt like. | hub_b4_b
=== hub_b4_c | The Last Week
Three days later the grass begins to burn. Not with fire: it turns, the silver of the plain going copper and then the colour of rust, as the land climbs toward the mountains. The wind is cold and dry. The air smells of stone. On the eastern horizon, very faint and blue, a line of peaks floats like a cloud, and beneath them, a long way off, a single column of smoke goes straight up into the sky.
The Listeners are with you now. The Matriarch’s tent follows, with its nine fires; Odval rides in the cart with a hand on the Elder’s sleeve; Temur has put his white hat back on. Every night a different clan brings a gift to the cart. A blanket. A pair of boots. A name.
+[d] b4q_kurultai | Nine thousand voices said the nine verbs aloud, and one bell rang back.
+[d] b4q_roots | A black ribbon has been tied round the hilt of a Listener’s knife, and nobody will say who tied it.
+[d] b4q_tomb | There is red dust in the creases of the cards that will not shake out.
+[d] b4q_mill | A broken steel bell hangs from the tail of the cart, and the horses will not pass it without a toss of the head.
+[rl] realm>=5 | From Spirit Severing upward, the red hills are nearly transparent. You can feel the Stair’s foot a hundred miles off, a cold bright knot where the world was torn and mended.
+[rl] realm>=4 | At Nascent Soul your inner figure looks east and does not blink. Something there is looking back, and it is not hostile.
+[rl] realm<=3 | The last week is a climb and you are short of breath for it. Odval rides at your stirrup, quiet, watching your hands.
> truth | Go back to the Great Ring, where the clans have not yet struck their tents. | kurultai_entry |  | !b4q_kurultai | The Kurultai has already spoken.
> mercy | Follow the line of black ribbons to the camp at the foot of the red cliff. | roots_entry |  | !b4q_roots & b4q_kurultai | The Kurultai has not yet said you may.
> quiet | Ride toward the mound on the plain with a ring of nine iron posts. | tomb_entry |  | !b4q_tomb & b4q_kurultai | The nine fires have not yet agreed to show you.
> inquiry | Ride toward the smoke and the iron chimneys of the Dust Mill. | mill_entry |  | !b4q_mill & b4q_kurultai | You do not yet know what is at the end of the smoke.
> deceit | Climb the last rise, where a voice is humming in the wind. | voice_entry |  | count:b4q_>=14 & !b4q_voice | The voice is not yet loud enough to follow.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b4_c | cult+60 +still_hub_b4_c | !still_hub_b4_c | You have already sat your night here.

=== still_hub_b4_c | A Night of Stillness
The last night before the glass, you do nothing. You sit by the dying fire and let the day go out of you, and in the dark your core turns over once, like a sleeper.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b4_c
> truth | Admit how much of the road you were carrying. | hub_b4_c
> mercy | Wake the others gently. | hub_b4_c
> inquiry | Note what your qi felt like. | hub_b4_c
=== b4_close | The Edge of the Grass
They see you off at dawn, on the last rise, with nine fires burning. There is no ceremony. The Listeners do not do ceremony. They come in ones and twos through the grey light and press things into your hands: a skin of fermented milk, a knotted cord, a bag of dried curd, a small carved horse. Choijin signs something. His apprentice weeps. Tsetseg gives the Elder a pane of green glass the size of a palm, without a word, and goes away chewing.
+[d] b4q_kurultai | Nine thousand voices said the nine verbs aloud, and a deaf bell-founder smiled.
+[d] b4q_roots | A girl who was never written is learning the alphabet in a grey coat three sizes too large.
+[d] b4q_tomb | A red glass key is warm in your pocket, and it hums when you think of a hollow.
+[d] b4q_mill | Two hundred and eleven people woke in a barn, and a steel bell is cold in the cart.
+[d] b4q_voice | A tune with no words sits in your chest beside the cold black seed.
Tamar sits on her felts at the top of the rise, in her red coat, with her face to the east. She does not rise. She is smiling.
“Go down to the sea of glass,” she says. “Take Odval. She has been wanting to go somewhere for nineteen years, and she has run out of hills to sit on.” She lifts a hand. “Take Temur, too, who will be unbearable otherwise. And take my sister’s tea.”
“Your sister’s—”
“She sent a pot,” says Tamar. “It is as bad as ever.”
> truth | Bow to her. | b5_gate
> mercy | Kneel and take her hand. | b5_gate
> quiet | Take the tea. | b5_gate
> inquiry | Ask her what she heard, when the bell rang. | b5_gate
`,
};
