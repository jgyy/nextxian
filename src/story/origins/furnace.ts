import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: an apprentice of a Concord pill house, whose master was found dead beside a cold cauldron, and who carries his last pill half cooked. */
export const furnaceScenes = String.raw`
=== o_furnace_0 | The Cold Cauldron
For four years you fed the furnaces of the Kettle-and-Crane pill house on the river road, and in all that time the master’s cauldron was never allowed to cool. This morning it is cold to the touch. He sits against it with his eyes open and a ladle in his lap, and in the other hand a small grey pill, still tacky, which he has not finished. The house is shut, and the Concord’s inspectors will be at the door by noon.
+[start] hero:background=healer | You have sat with the dying. You know at a glance that he did not suffer, and you are not sure that this is a mercy.
+[start] hero:background=scholar | You read the recipe-board on the wall without meaning to. The last line has been scratched out and rewritten three times.
+[start] hero:background=merchant | You count what is left in the stockroom before you have decided to. It is a great deal, and none of it is yours.
> mercy | Close the master’s eyes, and cover him with the apron he wore to the furnace. | + | +og_furnace_closed karma+2 |
> inquiry | Read the recipe-board, and find which line he rewrote. | ^ | +og_furnace_board insight+3 |
> deceit | Fill your satchel from the stockroom before the inspectors arrive. | ^ | +og_furnace_stock stones+5 karma-3 | !og_furnace_stock | You have already done that.
> quiet | Bank the furnace, as you have every night for four years, so the house does not go cold with him. | ^ | +og_furnace_banked qi+2 cult+2 |

=== o_furnace_1 | The Last Pill
The pill in the master’s hand is half cooked, a grey bead with a seam of green down the middle where the heat never reached. Under it, folded into his sleeve, is a note in his own cramped brushwork: finish it on a bank of coals, with the lid off, and give it to the one who earned it. The note does not say who that is. It does say that he was afraid of the Concord’s inspectors, and of what a finished pill of its kind would be called.
+[note] og_furnace_closed | The master’s face is calm under the apron, and the note seems to have been written by a calmer man than the one who died.
+[note] og_furnace_board | The rewritten line in the recipe is the same line the note leaves out. The master knew what he was changing, and said so to nobody.
+[note] og_furnace_stock | The stolen herbs smell of the stockroom, and the smell has got into your sleeves.
+[note] og_furnace_banked | The furnace you banked is warm behind you, and warm enough to finish the pill on, if you dare.
> quiet | Take the pill, bank the coals and finish it as the note says. | + | +og_furnace_finished cult+4 item+og_furnace_pill |
> truth | Hand the note and the pill to the inspectors when they come, and leave the house a clean book. | ^ | +og_furnace_handed karma+3 |
> inquiry | Study the green seam against the lamp, and work out what kind of pill it was meant to be. | ^ | +og_furnace_seam insight+4 |
> deceit | Hide the pill in your sleeve and tell the inspectors there was no last batch. | ^ | +og_furnace_hid karma-2 item+og_furnace_pill |

=== o_furnace_2 | The Inspectors
${talentExtras(0)}
They come at noon in two blue coats, a senior and a junior, with a ledger that is longer than either of them. They look at the master, at the cold cauldron and at you. A pill house is a licence, and a licence belongs to a name, and the name on this one is lying against the cauldron. The senior asks, in a voice like a closing door, who made the last batch.
+[ask] og_furnace_finished | The finished pill is a warm weight in your sleeve, and the senior looks at your sleeve for a breath longer than he looks at your face.
+[ask] og_furnace_handed | You hold out the note and the pill. The junior takes them as though they might go off.
+[ask] og_furnace_seam | You studied the seam so long that you can now tell them what it was meant to be, and the junior writes it down.
+[ask] og_furnace_hid | The pill is under your cuff. You have never been so aware of your own wrist.
> truth | Tell them you were the master’s apprentice, and that you made nothing. | + | +og_furnace_apprentice karma+1 |
> deceit | Say the house had no apprentice, and that you are a customer who came to buy. | ^ | +og_furnace_customer karma-3 |
> mercy | Ask them to be gentle with the master’s body, and to let his sister be written to. | ^ | +og_furnace_sister karma+2 |
> inquiry | Ask which of the Concord’s rules a pill like the master’s last would break. | ^ | +og_furnace_rule insight+3 |

=== o_furnace_3 | The Method
${daoExtras(0)}
The senior is gone, the junior is writing, and the house is yours for an hour. In that hour you do what an apprentice does when there is nobody to tell him he cannot. You light the small furnace and ask what four years of watching have taught you. A pill cultivates the one who eats it, and the one who makes it, if they are careful, and you are about to find out how careful you were.
+[ways] og_furnace_apprentice | The honest answer you gave the inspectors is still in your mouth, and it has made the furnace-room feel smaller.
+[ways] og_furnace_customer | You have called yourself a customer, and the furnace-room has not been told.
+[ways] og_furnace_sister | The master’s sister will hear of him from a stranger who was gentle, and you take a quiet pride in it.
+[ways] og_furnace_rule | You know the Concord’s rule now, and it is a very exact rule indeed.
> quiet | Cultivate through the fumes of the small furnace, slowly, as the master taught the house’s boys. | + | +og_furnace_m_fume cult+7 qi+2 |
> force | Burn off the seam, and swallow the pill hot, and let it break you open. | ^ | +og_furnace_m_burn cult+12 qi-8 karma-1 item-og_furnace_pill | item:og_furnace_pill>=1 | You have no pill to swallow.
> inquiry | Weigh the herbs, and cook the pill to the recipe on the board, and no further. | ^ | +og_furnace_m_weigh cult+5 insight+4 | insight>=14 | You do not know the recipe well enough yet. Insight 14 is needed.
> mercy | Keep the pill for someone else, and cultivate on rice and breath alone. | ^ | +og_furnace_m_keep cult+4 karma+3 | item:og_furnace_pill>=1 | You have no pill to keep.

=== o_furnace_4 | The Road with a Satchel
You leave the Kettle-and-Crane with the master’s note and a satchel of dried roots, and, if you kept it, a small grey pill wrapped in a leaf. The river road is busy with barges, and every one of them seems to carry somebody who needs a pill. A Mortal can smell the difference between a good furnace and a bad one. A Qi Condenser can feel it in the teeth.
+[road] og_furnace_m_fume | You breathe the fumes in your sleeve as you walk, slow and sweet, and the road is easier than it has any right to be.
+[road] og_furnace_m_burn | The burn is a sore place under your breastbone, and a bright one. The road seems to hurry past.
+[road] og_furnace_m_weigh | You count your steps like a dose, and you find that they come in threes, as the recipe does.
+[road] og_furnace_m_keep | You kept the pill for someone else. You have not decided who, and the satchel is lighter for it.
> quiet | Walk steadily, and cultivate the old breath at every milestone. | + | +og_furnace_walked qi+3 cult+2 |
> mercy | Stop at a barge-landing and treat a boatman’s cough with what is in the satchel. | ^ | +og_furnace_treated karma+3 stones-1 | wealth>=1 | You have no stone to spare.
> inquiry | Ask each stall-keeper which pill house is their favourite, and why. | ^ | +og_furnace_asked insight+3 |
> deceit | Sell a pinch of the dried roots as a cure, at three times what they are worth. | ^ | +og_furnace_sold stones+4 karma-3 | !og_furnace_sold | You have already done that.

=== o_furnace_5 | The Rival Furnace
At the last landing before the mountain road a rival pill house keeps a stall, and its master has heard of the death at the Kettle-and-Crane. He is a courteous man with burnt fingers and a cough, and he offers you tea. Everyone in the trade knows that a house with no master loses its apprentices within the month. He would like very much to be the one who finds you a place.
+[rival] og_furnace_walked | You walked in without hurrying, and he notes your breathing with a pharmacist’s interest.
+[rival] og_furnace_treated | Your treatment of the boatman has reached the landing before you, and the rival has heard of it.
+[rival] og_furnace_asked | You asked at every stall which house they liked. He tells you that his is on the list, and he is almost proud.
+[rival] og_furnace_sold | The roots you sold at three times their worth were his own stall’s roots, and he knows it.
> truth | Tell him you are going up the mountain, and that you will not be a rival’s apprentice. | + | +og_furnace_refused karma+1 |
> inquiry | Ask him what he would give for a half-cooked pill with a green seam. | ^ | +og_furnace_priced insight+3 |
> deceit | Let him believe the Kettle-and-Crane’s recipes are in your satchel. | ^ | +og_furnace_bluffed karma-2 stones+3 | !og_furnace_bluffed | You have already done that.
> mercy | Tell him the master died calm, and that his sister should be written to. | ^ | +og_furnace_told karma+2 |

=== o_furnace_6 | The Stair at Dusk
${talentExtras(1)}
The mountain road becomes a stair at the second milestone, and the stair is wet. You have never climbed so far in a day. The sect’s high gate hangs in cloud at the top, with a single lamp burning. A pill-maker climbs with an eye to herbs, and the cliffs are full of them: moonroot in the cracks, thread-fern in the lee of every rock. You gather a few as you go, as you always have, and your breath settles on the rhythm of the furnace.
+[stair] og_furnace_refused | The rival’s offer is behind you on the stair, and the stair is lighter without it.
+[stair] og_furnace_priced | The rival named a figure for the pill with the green seam. You carry it up the stair like a second pill.
+[stair] og_furnace_bluffed | You let the rival believe a thing you cannot prove. The thing is also climbing.
+[stair] og_furnace_told | The master’s sister is now someone to whom you owe a letter, and you compose it in your head.
> quiet | Cultivate with every breath on the stair, and pick no herbs. | + | +og_furnace_up qi+2 cult+3 |
> inquiry | Gather the moonroot and thread-fern, and sort them by season as you climb. | ^ | +og_furnace_herbs insight+3 |
> truth | Carry the master’s note openly in your hand, so the sect sees what you bring. | ^ | +og_furnace_note karma+1 |
> deceit | Tuck the note inside your robe where no sect warden will search. | ^ | +og_furnace_tucked karma-2 |

=== o_furnace_gate | Chapter One: The Stolen Seal
The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel with an umbrella that is not quite large enough. He sniffs, once, and says, “Roots, and furnace-smoke, and wet paper. A pill-maker’s apprentice, then, or a very strange thief.”
“State your name and business,” he says. “The Law Hall has closed its doors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_furnace_up | You climbed with the furnace-breath, and the disciple notes your calm.
+[arrive] og_furnace_herbs | Your satchel bulges with the herbs of a dozen switchbacks. He eyes them as a grocer eyes a cart.
+[arrive] og_furnace_note | The master’s note is in your hand, and he has already read the first line over your thumb.
+[arrive] og_furnace_tucked | The note is inside your robe, and the disciple’s eye goes there first.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_furnace_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_furnace_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |

=== o_furnace_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on your hands, on the burns along the knuckles, and on the satchel. “You smell of a pill house,” she says, “and there is a death on you that is not yours. A petitioner with a recipe in their pocket and a secret on their sleeve. Come in.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | npc:LH_ENTER_FURNACE | |
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | | |
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | insight+2 | |
> deceit | Put on the face of someone with nothing to hide. | ^ | karma-1 | |
`;
