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
+[d] b3q_sails | Nine grey sails lie off the bar, patient as vultures, and the town counts its dead.
+[d] b3q_fifth | The saint’s room is open to the Well, and a child with a lemon’s name sits in the chair.
+[d] b3q_pao | A jar that asks who is there sits in your pack, and hums when you do not.
+[d] b3q_stacks | A brown card with no numeral lies in your sleeve, and the Elder has not stopped looking at it.
+[d] b3q_tidedoor | The spring ebb is behind you, and the Library hums at the back of your mind like a hive.
+[d] b3q_lotus | A black minute-book lies closed in a cellar under the lamp, and your name is in it.
+[d] b3q_sixth | A white cup with a chipped rim sits on a sill in the Ferryman’s Rest, beside a drawing.
+[d] b3q_house | The hill above the town is quiet, and its windows are open, and a child is spinning on the grass.
+[d] b3q_forge | A small black seal that asks lies on your palm in memory, warm as a coal.
+[d] b3q_keeners | The lament runs in your head in nine verses, seven of them written down.
+[d] b3q_ward | Cooper Lane smells of boiled linen and, faintly, of something blue.
+[d] b3q_harbour | Ke-er’s name is under your fingers, still, a groove in the limestone you will not forget.
+[d] b3q_mourning | There is a black ribbon in your sleeve, and a woman’s voice that said nothing you could answer.
+[d] b3q_ferry | The ferryman’s rope is still wound on your wrist, two turns, a knot you cannot undo.
+[d] b3q_lamp | The lighthouse blinks twice on the horizon, in a pattern you now know.
+[rl] realm>=3 | At Core Formation the Tidewall hums, and you can tell the struck from the living by whether the hum has an owner.
+[rl] realm>=2 | At Foundation Establishment you feel the sea behind the wall, a slow cold pull in your dantian.
+[rl] realm<=1 | The Salt Coast is too much qi for a body like yours. The tide drags at your breathing.
> truth | Walk the length of the Wall, and read what is carved there. | harbour_entry |  | !b3q_harbour & !b3q_sails | You have read the Wall.
> mercy | Find the mourning-shop at the top of Bell Lane. | mourning_entry |  | !b3q_mourning & count:b3q_>=1 & !b3q_sails | You have been to the mourning-shop, or you have not yet learned enough of the town to find it.
> inquiry | Take the ferry across the bay. | ferry_entry |  | !b3q_ferry & count:b3q_>=1 & !b3q_sails | You have taken that ferry, or you have not yet learned enough of the town to find it.
> quiet | Climb the spur to the Salt Lamp. | lamp_entry |  | !b3q_lamp & count:b3q_>=2 & !b3q_sails | You have been to the Lamp, or you have not yet learned enough of the town to climb it.
> truth | Walk the length of Cooper Lane to the dye-works. | ward_entry |  | !b3q_ward & count:b3q_>=2 & !b3q_sails | You have been to the Ward, or you have not yet learned enough of the town to find it.
> mercy | Climb the ladder to the Sing-Loft above the fish market. | keeners_entry |  | !b3q_keeners & count:b3q_>=2 & !b3q_sails | You have sung with the keeners, or you have not yet learned enough of the town to find the loft.
> force | Take the ferry to the Salt Works, and ask for the seal-wright. | forge_entry |  | !b3q_forge & b3q_ferry & !b3q_sails | You have not yet crossed the bay with the ferrywoman, or you have already met the seal-wright.
> mercy | Climb the hill road to the House of Gentle Hands, where a boy has gone alone. | house_entry |  | !b3q_house & b3q_ward & count:b3q_>=3 & !b3q_sails | The House stands closed to you until the Ward has told you what it knows, or you have already been.
> inquiry | Find Hao Lan on the sea steps, writing the same two characters over and over. | sixth_entry |  | !b3q_sixth & b3q_mourning & !b3q_sails | She has already said it, or you have not yet met the woman who can answer her.
> truth | Go down to the cellar under the lamp, where the Hollow Lotus has been summoned. | lotus_entry |  | !b3q_lotus & b3q_mourning & b3q_lamp & count:b3q_>=5 & !b3q_sails | The Court has not yet been convened, or has already sat.
> force | Go down to the foot of the Wall at the spring ebb, when the Library opens. | tidedoor_entry |  | !b3q_tidedoor & b3q_lamp & count:b3q_>=6 & !b3q_sails | The ebb has not yet come, or the Library is not yet a thing you can find.
> inquiry | Go down the steps under the sign that says PLEASE DO NOT READ THE DEAD ALOUD. | stacks_entry |  | !b3q_stacks & b3q_tidedoor & !b3q_sails | You have not yet been in the Library, or you have already walked its Stacks.
> mercy | Find the gallery that smells of rain on hot stone, where the banned songs are kept. | pao_entry |  | !b3q_pao & b3q_stacks & !b3q_sails | You have not yet walked the Stacks, or you have already sung in the gallery.
> truth | Take the Well stair down, nine hundred and ninety-nine steps, to the saint’s room. | fifth_entry |  | !b3q_fifth & b3q_stacks & b3q_pao & !b3q_sails | You have not yet earned the Reader's trust, or you have already stood at the saint's desk.
> force | Go up on the Wall at first light, where the bells are ringing for the fleet. | ninesails_entry |  | !b3q_sails & count:b3q_>=8 | The fleet has not yet come, or has already come.
> force | The chain is closing. Go down to the last block on the Wall. | chain_entry |  | b3q_sails & !b3q_chain | The fleet has not yet come.
> quiet | Sit out the night in meditation, and let the road settle in your core. | still_hub_b3_coast | cult+50 +still_hub_b3_coast | !still_hub_b3_coast | You have already sat your night here.

=== still_hub_b3_coast | A Night of Stillness
You walk the sea-steps at low tide and sit where the wall meets the water. The tide comes in around you, and you breathe with it until your qi stops fighting.
Nothing happens, and by morning something has. Your breath goes deeper than it did, and the qi in your dantian sits a little denser, like silt in a clear pool.
> quiet | Rise at first light. | hub_b3_coast
> truth | Admit how much of the road you were carrying. | hub_b3_coast
> mercy | Wake the others gently. | hub_b3_coast
> inquiry | Note what your qi felt like. | hub_b3_coast
=== b3_close | What the Coast Gave
The fleet is gone by evening. It goes out on the ebb, nine sails in a long curved line, with a signal-flag at every masthead that says Returning. The Wall watches it go. The harbour is full of boats. Somebody has hung bunting along the quay, out of sheer excitement, and nobody has the heart to take it down.
+[w] chain_unwritten | A hundred and four names sank into the Wall like rain, and the town woke up knowing them.
+[w] chain_ke_er_chose | A child under the stone said not mine, and the whole Wall sang it.
+[w] chain_duan_freed | An old Admiral gave up his sword, and a Censor-General walked down a gangplank.
+[w] chain_forced | Seven anchor-rings lie open on the waterline, and nobody will touch them.
+[w] chain_asked_wound | The last link said it would go home.
+[c] count:card_>=8 | Eight brown cards lie in your sleeve, and the ninth is the one you were given.
+[c] count:card_>=5 | Five or six brown cards lie in your sleeve, and they hum when they touch.
Madam Ash has given the Elder a room at the back of the shop. Hao Lan has a desk by the window. Lu Yan has a cot and a patient and a roof garden that is turning blue. The Wall hums. In a month, Mei Qiu will have a window cut for her sister.
It is the end of the Salt Coast. You can feel it, as you can feel the end of a tide. Something has been done here, and something is about to begin.
> truth | Walk the length of the Wall one last time. | b3_close2
> mercy | Go and say goodbye to Ah Zhi. | b3_close2
> quiet | Sit on the sea steps with the Elder. | b3_close2
> inquiry | Ask Hao Lan what is in the post. | b3_close2

=== b3_close2 | A Message from the Mountain
The pigeon comes at dusk. It flutters down onto the sill of the Ferryman’s Rest, wet and grey, with a tin tube strapped to its leg and a streak of ash across its breast. Mother Tiao finds it. She brings it up the stairs with an expression of deep suspicion, holding it at arm’s length.
“It’s for the old lady,” she says. “I don’t trust it.”
The tube holds a scrap of rice-paper no bigger than a thumb. The writing on it is minute and cramped and has been done in a great hurry, by a hand that shakes. The Elder holds it to the lamp and reads it aloud, in a flat dry voice.
“‘Elder. Master Lian and Master Hu have returned with the Second Order and forty guards. They hold the Law Hall. They have asked for the keys. I have locked myself in the Ash Archive with Old Lin and the cat. They are at the door. They say they will wait. I have food for eleven days. —L.Y.’”
She puts the paper down.
“Lin Yuan,” she says.
> truth | Say you must go back. | b3_close3
> mercy | Take the Elder’s hand. | b3_close3
> quiet | Look at the pigeon. | b3_close3
> inquiry | Ask how far. | b3_close3

=== b3_close3 | Which Way Home
“Nine hundred miles,” says Hao Lan. She has the map out on the bed, weighted at the corners with Mother Tiao’s teacups. “By the river road, it is forty days. By the Assembly’s post-road, thirty. By the Ash Steppe, if the Steppe will let us, eighteen.”
“Will it?” says Gu.
“It is not a place that lets,” says Madam Ash. She is sitting in the corner with her hands folded, a black shape against the lamp. “It is a place that decides. The Listeners keep it. They are the last of the Order of the Torn Page. They do not care for the Concord, or for me.” She almost smiles. “But I know the way in. I have a letter. It is eleven years old.”
“Who is it to?”
“The woman who will decide.”
Everyone looks at the Elder. She is staring at the pigeon on the sill.
“We go,” she says. “At first light.” Her voice is quite steady. “I have kept the wrong things long enough.”
> truth | Say you are ready. | b4_gate
> mercy | Say goodbye to the town. | b4_gate
> quiet | Pack. | b4_gate
> inquiry | Ask Madam Ash for the letter. | b4_gate
`,
};
