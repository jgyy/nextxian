import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: the ward of an unregistered Listener on the river road, taught to hear names in the wind, who runs when the Censors come for the one who taught them. */
export const listenerScenes = String.raw`
=== o_listener_0 | The Wind Says a Name
For nine years you have lived in the back room of Aunt Sedge’s reed-weaver’s shop on the river road, and for nine years she has told every customer that you were her sister’s child. You are not. She found you on the weir with a cold in your chest and taught you what she taught nobody else: to stand at an open door at dusk, and shut your eyes, and hear which names the wind is carrying. Tonight it carries a name you do not know, over and over, and it is not yours.
+[start] hero:looks=frail | You have never been strong, and the wind has always been your better ear.
+[start] hero:status=outcast | Your papers were struck from the registers before you could read them. Aunt Sedge says that is what makes you good at this.
+[start] hero:background=scholar | You wrote down the names the wind brought for years, in a copyist’s hand, and never showed a soul.
> quiet | Stand at the open door and let the wind finish the name before you answer it. | + | +og_listener_heard cult+3 qi+2 |
> inquiry | Write the name down as it comes, syllable by syllable, and the order in which it repeats. | ^ | +og_listener_wrote insight+3 |
> truth | Tell Aunt Sedge exactly what the wind said, and that it is not a name you know. | ^ | +og_listener_told karma+1 |
> deceit | Say nothing to Aunt Sedge, and shut the door as if the night were only a night. | ^ | +og_listener_hid karma-2 |

=== o_listener_1 | The Grey Coats
Two Censors of the Concord come at dawn, a woman and a young man, with a slate and a tall lantern that burns a pale colour no lamp ought to. They are looking for a weaver who listens. They are polite about it. The woman reads a Name from the slate, and Aunt Sedge’s face does something you have never seen it do, which is stop. Then she looks at you and says, in front of both of them, that her sister’s child has gone out for reeds.
+[grey] og_listener_heard | You heard the name before they said it, and the woman’s eyes flick to you and away.
+[grey] og_listener_wrote | The name is written on the slate in the same order you wrote it. You do not breathe.
+[grey] og_listener_told | You told Aunt Sedge the name, and she did not tell you why it was dangerous. She had no time.
+[grey] og_listener_hid | You said nothing, and she knew it, and she is not angry. That is the worst of it.
> quiet | Slip out through the back, past the drying racks, with your breath held. | + | +og_listener_slipped qi+2 |
> mercy | Stay, and take Aunt Sedge’s hand, so that she is not alone when they ask. | ^ | +og_listener_stayed karma+3 |
> deceit | Pick up a bundle of reeds and walk out the front, calm as a child on an errand. | ^ | +og_listener_reeds karma-2 |
> inquiry | Watch the Censors’ lantern from behind the racks, and learn what it does to a listener’s ear. | ^ | +og_listener_lantern insight+4 |

=== o_listener_2 | The Reed Boat
${talentExtras(0)}
There is a punt in the rushes behind the shop, the one Aunt Sedge uses for cutting. You take it, with a pole and a half-loaf, and slide out onto the river as the sun comes up. The wind is in your face and it is full of names. Hundreds. They have been there all along, you realise, behind the one you were listening for. You pole all day and hear them without trying, a river of the struck and the forgotten, and each time one passes you feel it as a tug in the breastbone.
+[boat] og_listener_slipped | You slipped out clean, and nobody on the river knows anything of the shop.
+[boat] og_listener_stayed | You stayed until the last, and the Censors let you go. You do not know why, and it will cost you something to find out.
+[boat] og_listener_reeds | The reeds in your arms are still wet. The Censors may not have believed you, but they let you walk.
+[boat] og_listener_lantern | You watched the Censors’ lantern, and you know now that it draws a listener’s ear like a hook.
> quiet | Pole on and listen to the river, and let every name pass through without keeping any. | + | +og_listener_passed cult+4 |
> inquiry | Pick out one name from the stream and follow it, to learn how far a name carries. | ^ | +og_listener_followed insight+3 |
> mercy | Say each name softly as it passes, so that someone has. | ^ | +og_listener_said karma+3 |
> force | Shut your ear against the river, hard, and feel the names break against the wall. | ^ | +og_listener_walled qi+1 karma-1 |

=== o_listener_3 | The Method
${daoExtras(0)}
Aunt Sedge taught you four ways to hear, and she taught them in an order you did not understand until now. The Open Ear takes everything the wind brings. The Narrow Ear picks out one voice, and follows it. The Answering Ear speaks back, and she told you never to do it. The Closed Ear is the oldest art, and the hardest: it lets nothing in, and it is how a listener rests. You are alone, on a river, with a dead Name in your head, and you must choose.
+[ways] og_listener_passed | You let the names pass and they left something in you, like silt.
+[ways] og_listener_followed | You followed one name down a long way, and it is still in your mind, quietly pulling.
+[ways] og_listener_said | You said the names aloud, and the river answered you, quietly, in a dozen voices.
+[ways] og_listener_walled | You shut your ear against the river, and your head still rings with where the names broke.
> quiet | Take the Open Ear, and carry every name that comes without choosing among them. | + | +og_listener_m_open cult+8 insight+2 |
> inquiry | Take the Narrow Ear, and follow the one thread the wind has twisted toward you. | ^ | +og_listener_m_narrow cult+6 insight+4 | insight>=14 | You have not listened closely enough yet. Insight 14 is needed.
> force | Take the Answering Ear, and speak back to the wind in the old tongue. | ^ | +og_listener_m_answer cult+12 qi-8 karma-1 |
> mercy | Take the Closed Ear, and rest, so that the river can pass you by. | ^ | +og_listener_m_closed cult+4 karma+3 qi+3 |

=== o_listener_4 | The Weir Town
Aunt Sedge told you where to run, if the Censors came: a day downriver to the weir-town of Hollow Reed, and from there up the mountain road to the Azure Cloud Sect, whose Elder, she said, was the only person in the provinces the Concord was afraid of. Hollow Reed is a town of stilts and tarred boards, and a notice-board on the quay has your description on it in a copyist’s hand.
+[town] og_listener_m_open | The Open Ear brings you every voice in the town, and you cannot find the one that is calling you.
+[town] og_listener_m_narrow | The Narrow Ear picks one voice out of the town: a child, singing the same three notes over and over.
+[town] og_listener_m_answer | You answered the wind, and the wind in Hollow Reed is answering back, too loudly, from every roof.
+[town] og_listener_m_closed | The Closed Ear gives you the town as a still painting, and you walk through it unseen.
> quiet | Walk through the town with your head down, and let the wind carry your name away. | + | +og_listener_walked qi+3 |
> deceit | Tear your description from the notice-board and put it in your sleeve. | ^ | +og_listener_tore karma-2 |
> inquiry | Read the notice-board closely, to learn what the Concord says you have done. | ^ | +og_listener_read insight+3 |
> force | Stare the quay-clerk down when he looks at your face, until he looks away. | ^ | +og_listener_stared karma-1 qi+1 |

=== o_listener_5 | A Child Singing
At the foot of the mountain road a child is sitting on a stone, singing three notes, over and over. You know them. They are the ones the Narrow Ear picked out of the town, or the ones the wind brought you in the night, and she does not know she is singing them. When you stop, she looks up, and her eyes are the pale grey of a person who has heard something for much too long. “Are you the one who hears it too?” she says.
+[song] og_listener_walked | You walked in under the wind, and she hears the footsteps before she sees you.
+[song] og_listener_tore | The torn notice crackles in your sleeve as you kneel, and she looks at it with bright interest.
+[song] og_listener_read | You read the notice, and know now how many ears the Concord thinks you have.
+[song] og_listener_stared | The quay-clerk’s eyes slid off you, and you can still feel the stare in your jaw.
> mercy | Sit beside her and hum the three notes, until she stops being the only one. | + | +og_listener_hummed karma+3 |
> truth | Tell her that you are a listener, and that you are sorry you cannot tell her more. | ^ | +og_listener_owned karma+1 |
> inquiry | Ask her where she learned the song, and who taught it to her. | ^ | +og_listener_asked insight+3 |
> quiet | Give her your half-loaf, and leave her singing. | ^ | +og_listener_loaf qi+2 |

=== o_listener_6 | The Stair in the Wind
${talentExtras(1)}
The mountain wind is not like the river’s. It carries no names at all, until the second turn of the stair, and then it carries one, fainter, and it is not the one you came with. It is an older name, in a woman’s voice, and the voice is humming. You climb into the wind with your ear open, as Aunt Sedge told you never to climb, and each step is a little warmer than the last.
+[stair] og_listener_hummed | You hummed with the child at the foot of the road, and the wind has kept the tune.
+[stair] og_listener_owned | You told the child what you are, and nobody on the stair cares to argue.
+[stair] og_listener_asked | The child’s answer about the song is a thread in your ear, and the wind is trying to pull it tight.
+[stair] og_listener_loaf | You left the loaf with the child, and the wind carries a tiny, grateful sound after you.
> quiet | Climb with the Closed Ear, so that nothing in the wind can turn you back. | + | +og_listener_closed qi+3 cult+2 |
> inquiry | Open your ear to the humming and follow it up the stair, step by step. | ^ | +og_listener_follow insight+3 cult+2 |
> mercy | Say Aunt Sedge’s name into the wind, so that someone on the mountain will have heard it. | ^ | +og_listener_sedge karma+3 |
> deceit | Carry the name you came with in silence, and tell no one on the mountain what you can hear. | ^ | +og_listener_silent karma-2 |

=== o_listener_gate | Chapter One: The Stolen Seal
The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel with an umbrella that is not quite large enough. He looks at you for a long moment as a person looks at a stranger whose voice they feel they have heard.
“State your name and business,” he says. “The Law Hall has closed its doors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_listener_closed | You arrive with your ear shut, and the gate is as quiet as a closed book.
+[arrive] og_listener_follow | You followed the humming to the very lintel, and it stops, politely, as you stop.
+[arrive] og_listener_sedge | You said Aunt Sedge’s name into the wind, and the gate disciple flinches, as if someone behind him had said it too.
+[arrive] og_listener_silent | You have told no one what you can hear. The silence is a weight in your jaw.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_listener_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_listener_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |

=== o_listener_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on your face, and on the way your head is tilted, a little to one side, as if you were hearing the lamps. “A listener,” she says. “The Concord has a notice out for the sort of person who stands like that. I am the Law, and I have read it, and I have not yet decided whether to enforce it.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | +og_hall_met npc:LH_ENTER_LISTENER |  | 
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | +og_hall_met |  | 
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | +og_hall_met insight+2 |  | 
> deceit | Put on the face of someone with nothing to hide. | ^ | +og_hall_met karma-1 |  | 
`;
