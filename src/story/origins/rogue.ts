import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: a rogue cultivator who has read the notice offering a reward for the thief of the Sealing Jade. */
export const rogueScenes = String.raw`
=== o_rogue_0 | A Notice on the Ferry Post
The notice is pinned to the ferry post with a rusted nail, and the rain has already begun to lift its corners. Three hundred spirit stones, it says, for whoever delivers the thief of the Sealing Jade, or the jade itself, to the Law Hall of the Azure Cloud Sect. You have gathered what little qi you own from three years of roads, and nobody has ever offered you three hundred of anything.
+[note] hero:attire=rags | Your patched hemp is the same grey as the notice. The ferryman lets you read it for nothing, which is the first courtesy in a month.
+[note] hero:attire=armour | The ferryman steps back from your scale jerkin and offers you the notice as though it were already yours.
> inquiry | Read the notice twice, to the last line, and learn the fine print. | + | +og_rogue_read |
> deceit | Tear it down and keep it as a warrant, and tell the next traveller there was never a reward. | ^ | +og_rogue_tore karma-3 stones+1 | !og_rogue_tore | You have already torn it down.
> quiet | Leave it where it is, and set out for the mountain before anyone else has read it. | ^ | +og_rogue_first qi+2 |
> truth | Ask the ferryman who nailed it up, and what he has heard of the theft. | ^ | +og_rogue_asked insight+2 |

=== o_rogue_1 | The Hunters’ Inn
The inn at the foot of the pass is full of people with the same notice folded in their sleeves. A one-eyed man named Rusong holds the long table, and he is telling it for the third time how he once followed a thief up the Cloud Gap in a snowstorm and brought him back with one arm.
+[table] og_rogue_read | The fine print says the reward is paid only on delivery to the Law Hall, and only against the Elder’s own seal. Rusong has not read that line.
+[table] og_rogue_tore | There is one notice missing from the inn’s wall, a pale square in the soot, and everyone has noticed it but nobody has said so.
+[table] og_rogue_first | You are the first of the hunters to have walked the whole day from the ferry. The mud on your boots says so.
+[table] og_rogue_asked | The ferryman’s answer sits in your head: that the notice was nailed up in the dark, by a woman in grey who paid in old coin.
> truth | Sit at the long table and share what you know of the thief. | + | +og_rogue_shared |
> force | Challenge Rusong to a bout in the yard, to settle who walks up the mountain first. | ^ | +og_rogue_bout karma-1 qi+2 |
> deceit | Lift Rusong’s map from his belt while he tells the story. | ^ | +og_rogue_map karma-4 insight+3 |
> quiet | Take a corner by the stove, eat your rice, and say nothing at all. | ^ | +og_rogue_corner qi+2 |

=== o_rogue_2 | The Night Road
${talentExtras(0)}
You leave the inn before dawn, because the hunters who set out last arrive first at nothing. The night road to the pass is a track between two ditches, lit by a half moon and the occasional glint of a rival’s lantern. For a mile you are alone, and then you are not.
+[road] og_rogue_shared | Two of the hunters who heard your account walk a hundred paces behind you, and keep that distance on purpose.
+[road] og_rogue_bout | Rusong’s one eye follows your back for a mile. You are certain of it, though you do not turn.
+[road] og_rogue_map | Rusong’s map sits against your ribs, and you cannot decide whether it feels heavier than a map should.
+[road] og_rogue_corner | Nobody noticed you leave. It is the kind of departure you have practised for three years.
> force | Put out the nearest lantern with a gust of qi and keep going in the dark. | + | +og_rogue_dark karma-2 qi+2 |
> quiet | Walk in the ditch where no lantern will find you. | ^ | +og_rogue_ditch qi+2 |
> mercy | Warn the straggler behind you that the bridge ahead is rotten. | ^ | +og_rogue_warned karma+3 |
> inquiry | Climb the nearest bank and read the road from above. | ^ | +og_rogue_bank insight+3 |

=== o_rogue_3 | The Fork at the Foothills
${daoExtras(1)}
At the foot of the mountain the road forks. The left branch is the stair of the Azure Cloud Sect, wide and slick and watched from the gate. The right is a goat track used by smugglers and by people who would rather not be seen to arrive. A boy at the fork sells directions for a stone, and does not seem to care which you ask.
+[fork] og_rogue_dark | You smell lamp-smoke on yourself, and the boy sniffs once and says he will not charge you for the left.
+[fork] og_rogue_ditch | Your boots are caked with ditch mud, and the boy looks at them, and at you, and raises the price of the right.
+[fork] og_rogue_warned | The straggler you warned catches up and passes with a nod. He takes the left, and you wonder at that.
+[fork] og_rogue_bank | From the bank you saw the whole valley, and the two lanterns on the goat track that were not there an hour ago.
> truth | Take the stair, as an honest visitor to the Law Hall. | + | +og_rogue_stair |
> deceit | Take the goat track, and come up by the side of the mountain. | ^ | +og_rogue_goat karma-2 insight+2 |
> inquiry | Pay the boy a stone to learn who else has taken the goat track tonight. | ^ | +og_rogue_paid stones-1 insight+3 | wealth>=1 | You have no stone to spare.
> force | Take the stair, and make sure the hunters behind you see you do it. | ^ | +og_rogue_loud karma-1 |

=== o_rogue_4 | Mud to the Knees
Rain, mud and the steady climb of a rogue who has come the long way round. The stair of the Azure Cloud Sect comes out of the mist in pieces, a rail here, a lantern there. Up ahead, a voice calls down the names of travellers who are not permitted to pass.
+[rain] og_rogue_stair | You climb the stair with your bare face to the gate, and nobody on it looks away.
+[rain] og_rogue_goat | The goat track has put you at the side gate, and the gate disciple is looking the other way. He seems to have been told to.
+[rain] og_rogue_paid | The boy’s gossip was good. Three of the hunters took the goat track, and one was already at the gate.
+[rain] og_rogue_loud | Behind you, a hunter laughs, and another swears. You have made a few enemies tonight, and not by accident.
> quiet | Keep to the edge of the stair, as rogues do. | + | +og_rogue_edge qi+2 |
> truth | Climb the middle of the stair and give your name to the first lantern. | ^ | +og_rogue_named |
> deceit | Pull the notice from your sleeve and wave it, as though you were already expected. | ^ | +og_rogue_waved karma-2 |
> inquiry | Count the lanterns on the way up, and learn which are lit and which are not. | ^ | +og_rogue_counted insight+3 |

=== o_rogue_gate | Chapter One: The Stolen Seal
You come up the last steps with a pack on your back and mud to your knees. Rain has fallen on the mountain for three days, and the sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel, with an umbrella that is not quite large enough for him.
“State your name and business,” he says. “And if you are one of the hunters, the notice is for the Elder to honour, not for you to wave at me.”
+[arrive] og_rogue_waved | He looks at the paper in your hand, and at your face, and adds a line to the ledger on his knee.
+[arrive] og_rogue_named | You gave your name first. It is, he notes, the first hunter to have done so.
+[arrive] og_rogue_counted | You counted eleven lanterns on the way up and nine are lit. The two that are not belong to the Law Hall.
+[arrive] og_rogue_edge | You come out of the shadow of the rail like something he had not expected to be there.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_rogue_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_rogue_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |
=== o_rogue_hall | The Law Hall Door
Elder Su Wanru’s eyes go to the mud on your boots and the way your hand drifts toward your sleeve. “Another hunter,” she says. “The third tonight. You at least came in at the front.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | npc:LH_ENTER_ROGUE | |
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | | |
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | insight+2 | |
> deceit | Put on the face of someone with nothing to hide. | ^ | karma-1 | |
`;
