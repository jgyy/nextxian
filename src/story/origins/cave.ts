import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: someone who fell through the floor of a goat-ledge into a sealed cave, and woke beside a dead cultivator’s seat. A Qi Condenser before the first scene. */
export const caveScenes = String.raw`
=== o_cave_0 | The Floor Gives Way
The goat-ledge above the Cloud Gap looked solid until the third step. The rotten boards went, then a skin of old rock, and you fell into dark that smelled of cold iron. You woke on a floor of fitted stones, in a round room that nobody has opened for a very long time. Opposite you, a cultivator sits in a rotted robe with their hands in their lap. They have been dead longer than the sect has had a Law Hall.
+[start] hero:attire=rags | Your patched hemp is the same grey as the dust, and for a moment you cannot tell where you end.
+[start] hero:attire=silk | The silk has torn along one sleeve. It is the only bright thing in the room, and it feels like an insult to the dead.
+[start] hero:attire=armour | The scales of your jerkin ring on the stone, and the sound goes round the room twice before it stops.
> mercy | Straighten the dead cultivator’s robe, and fold their hands the right way over each other. | + | +og_cave_closed karma+2 |
> inquiry | Read the jade slip that lies in the dead cultivator’s lap. | ^ | +og_cave_read insight+3 |
> deceit | Take the stone purse from the dead cultivator’s belt before you touch anything else. | ^ | +og_cave_took stones+4 karma-2 | !og_cave_took | You have already done that.
> quiet | Sit down opposite the dead cultivator and breathe the way they sit. | ^ | +og_cave_sat qi+3 cult+3 |

=== o_cave_1 | What the Slip Says
The slip is a hand-span of green jade, cut thin as a leaf, and the characters on it glow faintly where your thumb crosses them. It is a breath-art, the oldest kind, written for someone who has never gathered qi in their life. The first line says that the mountain does not give, it only lets go, and that whoever learns to be let go of will not need to be given.
+[found] og_cave_closed | The dead cultivator’s hands lie as you set them, and the cold in the room has eased by a shade.
+[found] og_cave_read | You read the slip before you do anything else, and the first line is already in your chest, humming.
+[found] og_cave_took | The stone purse is heavy at your belt. The dead cultivator does not mind. You are less sure that the room does not.
+[found] og_cave_sat | You breathe in time with a corpse for an hour, and something in the stone breathes with you.
> quiet | Follow the art through one circuit, and stop where it tells you to stop. | + | +og_cave_careful cult+3 |
> force | Run the art again and again until the lamp-glow on the jade is gone. | ^ | +og_cave_pushed cult+7 qi-4 |
> inquiry | Copy the characters onto your sleeve before you try anything with them. | ^ | +og_cave_copied insight+3 |
> truth | Say the cultivator’s name aloud, as the slip gives it, so that someone has. | ^ | +og_cave_named karma+1 insight+1 |

=== o_cave_2 | Three Days Dry
${talentExtras(0)}
There is no water in the cave and no way you can see up. On the second day your lips split. On the third, the art you have been running begins to run you, and you feel for the first time how much of the breath you were wasting. The qi in the stone is old, and cold, and it comes to you the way a cat comes to a stranger who sits very still.
+[days] og_cave_careful | You kept to the one circuit, and the thirst is only thirst.
+[days] og_cave_pushed | You pushed the art past what a body can bear, and the thirst has a second thirst behind it.
+[days] og_cave_copied | The characters on your sleeve have begun to sweat through the cloth. You can read them wet, and they say more.
+[days] og_cave_named | You said the dead cultivator’s name every morning. By the third, the walls had begun to answer it back.
> quiet | Sit through the thirst and let the art draw what water the stone has. | + | +og_cave_waited cult+3 qi+2 |
> inquiry | Follow the draught on your cheek to the one crack that does not smell of iron. | ^ | +og_cave_crack insight+3 |
> force | Break the thin place in the wall with the heel of your hand. | ^ | +og_cave_broke qi+1 cult+3 karma-1 |
> mercy | Pour your last mouthful out on the dead cultivator’s lips, as you would for anyone. | ^ | +og_cave_gave karma+3 |

=== o_cave_3 | The Method
${daoExtras(0)}
The slip has a second leaf under the first, and it names two halves of one art. The Settling half is slow, and takes what the stone gives. The Breaking half is quick, and takes what the body has, and the old characters do not say what it costs, only that the dead cultivator stopped at the sixth line of it. You are a breath away from deciding what kind of cultivator you will be.
+[ways] og_cave_waited | You waited out the thirst, and your breath is already the Settling half’s, whether you chose it or not.
+[ways] og_cave_crack | You found the crack by following a draught, which is a Settling thing to do.
+[ways] og_cave_broke | You broke the wall with your hand, and your hand knows the Breaking half already.
+[ways] og_cave_gave | The dead cultivator’s lips are damp. Neither half of the art mentions that.
> quiet | Take the Settling half, slow and sure, and leave the other leaf alone. | + | +og_cave_m_settle cult+6 qi+2 |
> force | Take the Breaking half, and run it until the sixth line, and past it. | ^ | +og_cave_m_break cult+11 qi-8 karma-1 |
> inquiry | Study how the two halves join, and take the part of each that does not hurt. | ^ | +og_cave_m_both cult+5 insight+4 | insight>=14 | You have not read the slip closely enough yet. Insight 14 is needed.
> mercy | Cut the Breaking half from the slip, and bury it with the dead cultivator. | ^ | +og_cave_m_buried cult+3 karma+3 |

=== o_cave_4 | The Climb Out
Your qi finds the way before your eyes do. Above the wall you broke, or the crack you followed, the rock runs up in ledges, and each ledge is cold in a different way. You are a Qi Condenser. You did not know the word three days ago, and now you can feel your own dantian like a coin in a shoe, small and exact.
+[climb] og_cave_m_settle | The Settling half steadies every handhold, and the climb is dull, and you are alive at the end of it.
+[climb] og_cave_m_break | The Breaking half has left your arms shaking, but your qi lifts you the last body-length without being asked.
+[climb] og_cave_m_both | You use a little of each half, and the rock yields in the places where it was always going to.
+[climb] og_cave_m_buried | Without the Breaking half you climb slowly, and you do not mind. Behind you the dead cultivator keeps the rest.
+[rank] realm>=2 | Your foundation is already level. The climb is a stair to you, with the steps a little far apart.
> quiet | Climb steadily, one breath to a handhold, and do not look down. | + | +og_cave_steady qi+3 |
> inquiry | Read the rock as you climb, for the veins of qi that run toward the mountain. | ^ | +og_cave_veins insight+3 cult+2 |
> truth | Call up the shaft to whoever might hear, and tell them where you are. | ^ | +og_cave_called karma+1 |
> deceit | Pocket a handful of the cave’s pale crystal before you leave, and tell no one you found it. | ^ | +og_cave_crystal stones+3 karma-2 | !og_cave_crystal | You have already done that.

=== o_cave_5 | The Herdsman’s Fire
A goat-herder has lit a fire in the lee of a boulder, and he does not startle when you climb out of the earth. He looks at your hands, and then at the faint haze at your shoulders, and then at the fire. “That is qi,” he says. “I have seen the sect’s children with it. They do not climb out of graves.” He feeds you goat-cheese and says that the Law Hall has closed its doors since the jade was stolen.
+[fire] og_cave_steady | Your steadiness has the herdsman nodding at the fire, as at a thing that suits him.
+[fire] og_cave_veins | You can feel where the veins of the mountain run, and they run under his fire, and he does not know.
+[fire] og_cave_called | He heard you call, and came. He does not make anything of it.
+[fire] og_cave_crystal | The pale crystal in your pocket glows through the cloth. The herdsman says nothing, and sits so that the glow is toward him.
> truth | Tell him you are a Qi Condenser and that you learned it from the dead. | + | +og_cave_told karma+1 |
> deceit | Tell him you are a disciple of the sect on a long retreat. | ^ | +og_cave_lied karma-2 |
> inquiry | Ask him what the sect does to those who gather qi without its leave. | ^ | +og_cave_asked insight+3 |
> quiet | Eat his cheese, thank him and say nothing of where you have been. | ^ | +og_cave_quiet qi+2 |

=== o_cave_6 | The Stair in the Rain
${talentExtras(1)}
The rain starts at dusk, and the herdsman points up the valley to a stair that disappears into cloud. You climb into the mist with the dead cultivator’s breath in your chest and a question the sect has not yet asked. Every step is a circuit of the art. By the hundredth you cannot tell whether the stair is carrying you or whether you are carrying it.
+[stair] og_cave_told | You told the herdsman the truth, and the truth has walked ahead of you and is waiting at the gate.
+[stair] og_cave_lied | The lie you gave the herdsman was a cheap one. On a long climb it grows heavier than it was.
+[stair] og_cave_asked | The herdsman said the sect weighs unlicensed qi by the ounce, and his answer sits in your pack beside the cheese.
+[stair] og_cave_quiet | You said nothing, and the stair is quiet in return.
> quiet | Hide your qi under the rain, the way the art teaches, and climb as a petitioner. | + | +og_cave_hid qi+2 |
> truth | Let your qi show, and climb as a cultivator who has nothing to be ashamed of. | ^ | +og_cave_showed karma+1 |
> inquiry | Test the art one more time on the stair, and find where it joins your own breath. | ^ | +og_cave_tested insight+3 cult+2 |
> force | Run the art hard up the last hundred steps, and arrive hot and steaming. | ^ | +og_cave_ran qi-3 cult+5 |

=== o_cave_gate | Chapter One: The Stolen Seal
The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel with an umbrella that is not quite large enough. He looks at the haze on your shoulders and at the cave-dust on your hem, and he does not need to be told where either came from.
“State your name and business,” he says. “The Law Hall has closed its doors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_cave_hid | He does not see your qi. He sees a soaked petitioner, and softens by a degree.
+[arrive] og_cave_showed | He sees your qi at once, and his hand goes to the bell. It drops again when you meet his eye.
+[arrive] og_cave_tested | The art is still warm in your chest. You do not know that he can feel it.
+[arrive] og_cave_ran | You are steaming in the rain, and the disciple takes a polite step back.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_cave_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_cave_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |

=== o_cave_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on your hands, and then on the faint grey haze about your shoulders, which no one else in the hall can see. “Qi gathered in a place with no teacher,” she says, “and no register to hold it. I have not been so interested in a petitioner in some years.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | npc:LH_ENTER_CAVE | |
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | | |
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | insight+2 | |
> deceit | Put on the face of someone with nothing to hide. | ^ | karma-1 | |
`;
