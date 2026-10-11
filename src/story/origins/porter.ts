import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: a porter of the sect, sent down to the foothills the week the jade was taken, who climbs home in the rain. */
export const porterScenes = String.raw`
=== o_porter_0 | Forty Jars of Lamp-Oil
For six years you have carried lamp-oil up the stair of the Azure Cloud Sect, and the steward chose the week the Sealing Jade was taken to send you down to the foothill farms with forty empty jars to be refilled. You are crossing the second ridge when a rider goes past at a gallop in Law Hall grey, and does not look at you. Behind him, three days of rain are coming up the valley.
+[start] hero:status=outcast | The steward’s clerk has not struck your name from the porters’ roll, which is more than the registers did. You are not sure it is a kindness.
+[start] hero:status=commoner | A porter’s papers are a commoner’s papers, and nobody has ever asked to see yours twice. That is most of what the job is worth.
+[start] hero:status=gentry | The steward calls you young master behind your back, and means it as a joke. You have never been able to tell him why you carry the jars.
+[start] hero:status=noble | Nobody on the mountain knows what banner your papers name. They know that you carry oil, and they have decided that is the whole of you.
> quiet | Deliver the jars as ordered, and ask no questions. | + | +og_porter_dutiful stones+2 | !og_porter_dutiful | You have already been paid for this. 
> inquiry | Stop the next traveller on the road and ask what has happened on the mountain. | ^ | +og_porter_heard | |
> mercy | Leave half your oil at the first farm that has no lamp, and trust the steward to forgive it. | ^ | +og_porter_gave karma+3 | |
> deceit | Sell a jar on the side to the tavern-keeper. The sect will never count them. | ^ | +og_porter_skimmed stones+3 karma-3 | !og_porter_skimmed | You have already done that.

=== o_porter_1 | The Tea Stall at the Ford
A tea stall stands where the farm road meets the ford, and the whole valley seems to have crowded under its awning to talk about the mountain. They say the Law Hall is closed to visitors, that the wardens came back from the abyss path empty-handed and frightened, and that a disciple called Gu Hanzhen was seen running toward the mist.
+[told] og_porter_heard | The traveller from the road sits at the end of the bench and nods at every claim. He looks, you think, like a man who has not been told how the story ends.
+[told] og_porter_dutiful | You are the only one at the awning who has a delivery waiting, and the only one who is not talking. Nobody notices it but you.
+[told] og_porter_gave | The farmer whose lamp you filled is telling the table about the oil that came out of nowhere. You keep your eyes on your tea.
+[told] og_porter_skimmed | The tavern-keeper nods at you across the ford, as one nods at a partner in a small crime. You wish he would not.
> inquiry | Ask who saw Gu Hanzhen run, and which way. | + | +og_porter_gu insight+3 | |
> mercy | Pay for a bowl of tea for the farmer’s boy, who has been sent out in the rain with nothing. | ^ | +og_porter_boy stones-1 karma+2 | wealth>=1 | You have no stone to spare.
> truth | Tell the table that you are a porter of the Azure Cloud Sect and that none of it is a secret to the wardens. | ^ | +og_porter_open | |
> quiet | Finish your tea, shoulder your jars and keep to the road. | ^ | +og_porter_hurried qi+2 | |

=== o_porter_2 | The Road Under the Rain
The rain arrives in a single wall, and the road turns to a stream of red clay. A porter learns where to put a foot in a road like this, and where not to, and how to carry a load so that it carries you.
${talentExtras(0)}
+[after] og_porter_gu | You keep seeing a boy of nineteen in grey, running toward the mist, and each time you give him a different face.
+[after] og_porter_boy | The farmer’s boy shouts a thank-you from the doorway behind you. It has been a long time since anyone shouted one.
+[after] og_porter_open | At each farm the news has run ahead of you, and the women on the porches nod to you as one of the mountain’s own.
+[after] og_porter_hurried | You walk fast, and your breath comes easily. The mountain’s porters do not tire where others do.
> quiet | Keep a steady pace and do not stop to rest. | + | +og_porter_pace qi+2 | |
> inquiry | Look at the mountain ahead for any light in the Law Hall’s upper windows. | ^ | +og_porter_looked insight+3 | |
> mercy | Help a carter whose wheel has sunk, though you are already late. | ^ | +og_porter_carter karma+3 | |
> force | Cut across the wall of the Bell Foundry’s yard and risk the dogs. | ^ | +og_porter_shortcut karma-1 qi+1 | |

=== o_porter_3 | The Porters’ Shelter
Halfway up the stair stands the porters’ shelter, a low roof of slate with a stove and eight pallets. You have slept here on a hundred nights. Tonight it is full of wet men who do not look up when you come in, and the stove is cold.
${daoExtras(0)}
+[hut] og_porter_carter | The carter’s son is on the nearest pallet, and he lifts one hand to you without a word.
+[hut] og_porter_looked | One of the older porters says the lamps in the upper windows have been lit all week, and that the Elder has not slept.
+[hut] og_porter_shortcut | A porter whispers that the Foundry dogs were loose last night, and that somebody has cut the yard rope. You do not say anything.
+[hut] og_porter_pace | The oldest porter hands you a bowl without asking. “You walk like someone who wants to arrive,” he says.
> truth | Tell the porters you were down in the valley and heard the whole story at the ford. | + | +og_porter_shared | |
> inquiry | Ask which of them was on the stair the night the jade was taken. | ^ | +og_porter_witness insight+4 | |
> quiet | Light the stove, which no one else has bothered to do, and rest. | ^ | +og_porter_stove qi+3 | |
> deceit | Say nothing of the ford and the talk there, and take the best pallet. | ^ | +og_porter_silent karma-2 | |

=== o_porter_4 | The Last Landing
Above the shelter the stair narrows and the rain thins to a mist. Two landings up, a lamp burns in the window of the gatehouse where you have collected your pay every month for six years. Tonight the shutters are drawn, and the gate disciple has put out the second lantern.
+[landing] og_porter_witness | The porter who was on the stair that night had said only that the rain made the stair like glass and the sound of a bell made it worse. It comes back to you now.
+[landing] og_porter_stove | The warmth of the stove is still in your hands, and your hands are steady.
+[landing] og_porter_shared | Somebody in the shelter will tell the gate what you said. You would rather they heard it from you.
+[landing] og_porter_silent | You say nothing, and the silence follows you up the stair like a second pack.
> quiet | Climb the last steps at the pace of someone coming home. | + | +og_porter_home | |
> truth | Call up to the gatehouse and give your name and your errand before you are asked. | ^ | +og_porter_called | |
> deceit | Pull your hat low and hope the new gate disciple does not know your face. | ^ | +og_porter_hidden karma-2 | |
> inquiry | Stop and listen at the shutters before you go in. | ^ | +og_porter_listened insight+3 | |

=== o_porter_gate | Chapter One: The Stolen Seal
You come up the last steps of the stair with a pack on your back and mud to your knees. The sect gate rises out of the mist like a sword in its sheath. A gate disciple in grey stands beneath the lintel, holding an umbrella that is not quite large enough for him.
He knows you. “The oil porter,” he says, and then, too late, hears his own voice. “The Law Hall has closed its doors to visitors since the Sealing Jade was taken. Porters are not visitors. But I have my orders.”
+[arrive] og_porter_called | You gave your name first. It is the only reason he lowers his voice.
+[arrive] og_porter_hidden | He looks at you a long moment under the hat. “Take that off,” he says quietly.
+[arrive] og_porter_listened | You stood outside the shutters for a breath. You heard only that he had been told to expect trouble.
+[arrive] og_porter_home | He steps aside for you, as he has done on a thousand mornings, and then remembers that he should not have.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_porter_hall | | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_porter_hall | +gifted_herb insight+2 npc:GIFT_HERB | |
> deceit | Slip through the side gate, as a porter always knows how. | memorial | +sneaked_in karma-5 | |
=== o_porter_hall | The Law Hall Door
Her eyes pass over you once and stop. “The oil porter,” says Elder Su Wanru from her chair of pale jade. “I have signed for your jars for six years and never once looked at the person who carried them.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | npc:LH_ENTER_PORTER | |
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | | |
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | insight+2 | |
> deceit | Put on the face of someone with nothing to hide. | ^ | karma-1 | |
`;
