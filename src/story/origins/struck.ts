import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: the survivor of a lightning strike that took a village’s roof and burned the survivor’s roots open overnight. A Qi Condenser before the first scene. */
export const struckScenes = String.raw`
=== o_struck_0 | The Roof Comes Down
It was the night of the harvest drum in Upper Drum village, and every roof in the valley had a bowl of rice-wine on it. The first bolt split the drum-tower. The second walked down the lane to the threshing floor, and it did not strike you so much as take you by the shoulder. You remember a white noise, and your own shadow burned on the wall behind you, and then you were sitting in the wet straw with the whole village looking at your hands. Small blue light is running between your fingers like fish.
+[start] hero:looks=scarred | The old burn along your ear and collar has a new companion, a fern of pale lines that climbs from the wrist.
+[start] hero:background=soldier | You have been in a battle, and you know the quiet that comes after. This is the same quiet, only louder.
+[start] hero:background=farmer | You have worked this threshing floor for ten harvests. It will not be worked again this year.
> quiet | Sit very still, and let the light run itself out between your fingers. | + | +og_struck_still qi+2 cult+3 |
> mercy | Go to the drum-tower and dig out the boy who was playing it. | ^ | +og_struck_dug karma+3 |
> inquiry | Hold the light up to the lantern and see what it does to the flame. | ^ | +og_struck_held insight+3 |
> truth | Tell the village exactly what you feel, and that you do not know what it is. | ^ | +og_struck_said karma+1 |

=== o_struck_1 | What the Assessor Measured
A Concord assessor happens to be lodging at the village inn, a small woman in a dust-grey coat with a brass rod in a case. She measures you at dawn on the threshing floor, with the whole village at a safe distance, and the rod sings when it comes near your sternum. “Your roots have burned open,” she says, “all at once, which is not a thing that happens. You are a Qi Condenser as of last night, and you have a great deal more qi than you have any means of steering.”
+[measure] og_struck_still | You sat still, and the rod says your pulse is the calmest it has ever measured in a struck person.
+[measure] og_struck_dug | You dug the boy out of the drum-tower. He is alive, and the village is looking at you in a very different way.
+[measure] og_struck_held | You held the light to the flame, and the flame leaned toward you. The assessor writes that down twice.
+[measure] og_struck_said | You told the village what you felt, and the village has gone politely silent, which in a village is a sentence.
> inquiry | Ask her what it means to have more qi than you can steer, and what happens next. | + | +og_struck_asked insight+3 |
> truth | Ask her to write to the Concord that you did nothing to deserve it. | ^ | +og_struck_honest karma+2 |
> deceit | Ask her to leave out the part where the light jumps to metal. | ^ | +og_struck_lied karma-2 |
> quiet | Take the little copper token she offers, and say nothing. | ^ | +og_struck_token stones+2 | !og_struck_token | You have already done that.

=== o_struck_2 | The Village Turns
${talentExtras(0)}
By noon the village has decided. Not about you, exactly, but about what you may do to its roofs. A man you grew up beside will not meet your eyes. The headwoman, who has been kind, asks you in a careful voice whether you could perhaps visit your cousins in the next valley for a season, until the damage to the drum-tower has been paid for. The light in your hands has settled into a steady glow, and does not stop.
+[turn] og_struck_asked | The assessor’s answer is a small cold stone in your pocket: you will not be able to steer it without training.
+[turn] og_struck_honest | Your honesty is on the assessor’s page now, and the headwoman has heard of it.
+[turn] og_struck_lied | The assessor omitted what you asked her to, and it makes you feel like a man leaving a door unlatched.
+[turn] og_struck_token | The copper token is warm. It is a pass to the Concord’s lodging-houses, and a tiny, indirect reproach.
> mercy | Offer to stay and mend the drum-tower with your own hands, light and all. | + | +og_struck_mend karma+3 |
> quiet | Pack your bundle, say goodbye to the headwoman, and walk out at dusk. | ^ | +og_struck_left qi+2 |
> inquiry | Test the light on the village well, on a plough, and on a bell, and watch what each does. | ^ | +og_struck_test insight+3 |
> force | Tell the man who will not meet your eyes to look at you, and hold his gaze until he does. | ^ | +og_struck_glared karma-1 qi+1 |

=== o_struck_3 | The Method
${daoExtras(0)}
The assessor left you a one-page primer on the margin of her ledger, in a hurried hand, as a person leaves a note on a door. It describes four ways to deal with an excess of qi that has come in all at once. You may Ground it, which sends it slowly into the earth. You may Channel it, which runs it through the meridians in a loop. You may Study it, which asks it what it wants. Or you may Return it, which gives it back to the sky, if you can find the sky’s attention.
+[ways] og_struck_mend | You mended the tower with hands that glowed, and the nails went in as though they were being drawn.
+[ways] og_struck_left | You walked out at dusk, and the light in your hands made a lantern of you all the way down the lane.
+[ways] og_struck_test | The well rippled, the plough hummed, the bell rang once without being touched. You know now what the light likes.
+[ways] og_struck_glared | The man looked at you at last, and what he saw is what the village has been seeing.
> quiet | Ground it, a little at a time, through the soles of your feet into the earth. | + | +og_struck_m_ground cult+7 qi+3 |
> force | Channel it, around and around, until it learns where the meridians run. | ^ | +og_struck_m_channel cult+12 qi-8 karma-1 |
> inquiry | Study it, and ask what it is made of, and what it wants from a person. | ^ | +og_struck_m_study cult+5 insight+4 | insight>=14 | You have not studied the light closely enough yet. Insight 14 is needed.
> mercy | Return it, and turn your face to the sky, and let the sky take what it gave. | ^ | +og_struck_m_return cult+4 karma+3 |

=== o_struck_4 | The Dry Storm
On the second day a storm gathers over the pass, without rain. The sky goes the colour of an old bruise, and the air begins to hum. You are on an open ridge with nothing taller than you for a mile, and the light in your hands is already leaning toward the clouds like a dog toward a door.
+[storm] og_struck_m_ground | You ground yourself, and the first bolt goes into the ridge a hundred paces behind you, and you feel it in your teeth.
+[storm] og_struck_m_channel | You are running the light around your body, and every hair on your head is standing.
+[storm] og_struck_m_study | You are asking the light a question, and the storm is a very interested listener.
+[storm] og_struck_m_return | You turn your face to the sky, and the sky, after a long moment, turns its attention toward you.
+[rank] realm>=2 | You are a Foundation Builder, and the storm is slightly less impressive than it was.
> quiet | Stand still in the open and let the storm look its fill. | + | +og_struck_stood qi+3 cult+3 |
> inquiry | Count the seconds between the flash and the roar, and use them to steer the light. | ^ | +og_struck_counted insight+3 |
> mercy | Run down to the shepherds’ hut in the lee, and warn them to put out their iron. | ^ | +og_struck_warned karma+3 |
> force | Throw the light up at the clouds, and see whether it will go. | ^ | +og_struck_threw karma-1 cult+5 qi-3 |

=== o_struck_5 | A Warden on the Pass
A warden of the Azure Cloud Sect has been sent down to the pass to see what the storm is, and he finds you standing in the lee of a boulder with sparks running over your sleeves. He is young and cautious and he keeps his hand away from the bell. He says that the Law Hall has closed its doors since the jade was taken. He says that anyone with qi like yours ought to be seen by the Elder, before the Concord hears and sends someone who is less polite.
+[pass] og_struck_stood | You stood in the open, and the warden looks at you the way one looks at a lightning rod.
+[pass] og_struck_counted | You counted the storm, and the warden saw your lips move and thought it a prayer.
+[pass] og_struck_warned | The shepherds you warned are watching from their hut, and one of them waves.
+[pass] og_struck_threw | You threw the light at the sky, and a patch of the clouds is still smouldering.
> truth | Tell the warden you will go up, and that you would like a guide. | + | +og_struck_guided karma+1 |
> quiet | Follow the warden without a word, and let the storm walk off. | ^ | +og_struck_followed qi+2 |
> inquiry | Ask him what the Law Hall does with people who cannot steer what they carry. | ^ | +og_struck_asked2 insight+3 |
> deceit | Tell him the storm is none of your doing, and that you are only passing. | ^ | +og_struck_denied karma-2 |

=== o_struck_6 | The Stair in the Static
${talentExtras(2)}
The stair is wet, and the light in your hands finds every iron rail along it. By the hundredth step you have learned to cup your palms against your ribs, and the sparks pool there and wait. The warden is two steps ahead and says nothing. Somewhere above, in cloud, a bell rings, and the light in your hands answers it at once, in a note a little lower.
+[stair] og_struck_guided | The warden walks at your pace, not his own, and the stair is easier.
+[stair] og_struck_followed | You follow the warden up in silence, and the silence is a wall you rest on.
+[stair] og_struck_asked2 | The warden’s answer is in your ears. It was shorter than you wanted and kinder than you feared.
+[stair] og_struck_denied | The warden did not believe you, and he said so in his shoulders.
> quiet | Hold the light against your ribs, and climb with the Grounding Breath. | + | +og_struck_held2 qi+3 cult+2 |
> inquiry | Let the sparks find the rail, and learn what each iron post is made of. | ^ | +og_struck_rails insight+3 |
> mercy | Touch the rail once, gently, and let the light out where it won’t hurt anyone. | ^ | +og_struck_let karma+2 |
> force | Race the warden to the top, and let the light drive you. | ^ | +og_struck_raced qi-2 cult+4 |

=== o_struck_gate | Chapter One: The Stolen Seal
The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel with an umbrella that is not quite large enough. A spark jumps from your sleeve to his umbrella-rib, and he looks at it, and at you, and at the cloud above the gate, which has stopped moving.
“State your name and business,” he says. “The Law Hall has closed its doors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_struck_held2 | You come up the last steps with the light folded against your ribs, and the umbrella-rib is the only thing it touches.
+[arrive] og_struck_rails | You have read the rail all the way up, and you know exactly how much iron this gate has in it.
+[arrive] og_struck_let | You let the light out on the rail, and the warden at the top is staring at a lamp that has begun to glow.
+[arrive] og_struck_raced | You have raced up the stair, and the umbrella is sparking at its tips.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_struck_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_struck_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |

=== o_struck_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on your hands, where the blue light moves between the fingers, and on the iron chains of the lamps above you, which have begun, very faintly, to sway toward you. “I have not seen heaven’s own spark in a petitioner,” she says, “in twelve years. Come in slowly. I have iron in my hall.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | +og_hall_met npc:LH_ENTER_STRUCK |  | 
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | +og_hall_met |  | 
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | +og_hall_met insight+2 |  | 
> deceit | Put on the face of someone with nothing to hide. | ^ | +og_hall_met karma-1 |  | 
`;
