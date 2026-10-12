import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: a disciple of the Windward Sword Pavilion, struck out by a ruling, who arrives with a stolen breath of cultivation. */
export const exileScenes = String.raw`
=== o_exile_0 | The Ruling at the Windward Pavilion
The Windward Sword Pavilion is a house of white eaves on a ridge three weeks to the north, and its masters have a custom of reading a ruling aloud with the whole sect in the yard. They read yours in the rain. You are struck from the roll, your sword-belt is taken, and your teacher does not look up from the floor.
+[ruling] hero:attire=armour | The scale jerkin is the one thing they let you keep, because it was bought with your own stones and not the Pavilion’s.
+[ruling] hero:attire=rags | The master of the yard cuts the Pavilion’s grey from your sleeve with his own knife. Beneath it, the hemp is older and more honest.
+[ruling] hero:status=noble | Your house’s name is spoken once in the ruling, with regret, and then never again.
+[ruling] hero:status=outcast | The ruling does not trouble to name your papers. There is nothing to strike.
> truth | Say plainly before the yard what you did and that you would do it again. | + | +og_exile_owned karma+1 |
> deceit | Tell the yard that the ruling rests on a lie, and name the rival who told it. | ^ | +og_exile_named karma-2 insight+2 |
> quiet | Bow once, take your pack, and leave without a word. | ^ | +og_exile_bowed qi+3 |
> force | Break the blunt practice sword they have left you across your knee. | ^ | +og_exile_broke karma-1 qi+2 |

=== o_exile_1 | The Road Down
${talentExtras(0)}
Nobody follows you out of the Pavilion’s gate, which is the worst of it. The ridge road drops through a forest of cedar into mist, and the rain on the cedar boughs sounds like applause for someone else. You have your pack, a month’s rice, and a breath-art you copied in secret and were struck out for copying.
+[down] og_exile_owned | You said what you did, and the road is lighter for it. Not much. A little.
+[down] og_exile_named | The rival’s name sits in your mouth like a stone. You will say it again to someone who matters.
+[down] og_exile_bowed | You bowed, and the yard bowed back, an inch, and no more. You decide that was meant.
+[down] og_exile_broke | The splinters of the practice sword are still in your hand, and you carry them for the first mile before you drop them.
> quiet | Practise the stolen breath-art as you walk, in rhythm with your steps. | + | +og_exile_breath qi+3 |
> inquiry | Re-read the stolen manual by the light of a roadside shrine, and find where the Pavilion has hidden its flaws. | ^ | +og_exile_manual insight+3 |
> mercy | Leave a message for your teacher in the road-shrine, saying that you forgive the ruling. | ^ | +og_exile_forgave karma+3 |
> force | Cut a staff from a cedar bough, and spar the dark until you are warm. | ^ | +og_exile_spar qi+2 karma-1 |

=== o_exile_2 | A Duel at the Ferry
${daoExtras(0)}
At the ferry a former classmate is waiting. She wears the Pavilion’s grey and a sword she did not earn, and she has been sent to see that you cross the river and go no farther. The ferryman has moved his boat to the far bank, and the ferry is yours to cross by any means you can find.
+[ferry] og_exile_breath | The breath-art is still warm in your lungs, and she can tell. She has never been good at pretending she can’t.
+[ferry] og_exile_manual | You found the flaw in the third form on the road, and now you can see her making it.
+[ferry] og_exile_forgave | The forgiveness you left in the shrine sits in your chest, and it makes you less sure she should be your enemy.
+[ferry] og_exile_spar | The staff you cut in the dark is still in your hand, and its end is notched from last night.
> force | Duel her on the landing, with the staff, and win. | + | +og_exile_won karma-2 qi+3 |
> quiet | Let her cut your pack open, give her what is in it, and ask for the boat. | ^ | +og_exile_yielded qi+2 |
> truth | Tell her what the Pavilion’s masters did, and ask her to look at the third form. | ^ | +og_exile_told insight+3 karma+1 |
> deceit | Throw your pack into the river, and when she dives for it, take the boat. | ^ | +og_exile_boat karma-3 |

=== o_exile_3 | The Stolen Breath
Three days of road later you sit by a fire in a cart-shed and open the manual you stole. The Windward Pavilion’s breath-art is a hundred and twelve pages, and its best form is on page ninety-one. You have never been able to read it without wondering whether you were struck out for stealing it, or for being the only one who understood it.
+[breath] og_exile_won | The classmate you beat at the ferry is not yet back at the Pavilion, and when she is, she will tell them everything.
+[breath] og_exile_yielded | She took your pack, and left you the manual, and you cannot decide whether that was mercy or a trap.
+[breath] og_exile_told | She looked at the third form for a long moment before she let you pass. You think she has already begun to doubt the masters.
+[breath] og_exile_boat | The pack is at the bottom of the river with the rice in it, and you have the manual and nothing to cook with.
> inquiry | Study the page ninety-one form until you can do it without the book. | + | +og_exile_form insight+3 qi+2 |
> truth | Burn the manual, and keep only what you can remember. | ^ | +og_exile_burned karma+2 |
> deceit | Copy the manual again by firelight, so that you can sell it. | ^ | +og_exile_copied karma-3 stones+3 | !og_exile_copied | You have already copied it.
> quiet | Sleep, and let the form settle in you overnight. | ^ | +og_exile_slept qi+3 |

=== o_exile_4 | Rain on the Stair
The stair of the Azure Cloud Sect is a long wet climb, and an exile feels every step. You have heard of the Law Hall. It is said that no disciple of any sect has been refused a hearing there, and also that no disciple of any sect has left it unchanged.
+[stair] og_exile_form | The form from page ninety-one is easy in your body now, and the stair is no longer steep.
+[stair] og_exile_burned | The ash of the manual is in your pocket. You do not know why you kept it.
+[stair] og_exile_copied | The second copy of the manual is against your ribs, and you feel it at every breath.
+[stair] og_exile_slept | You wake rested, and with a feeling that the road has been shortened by a night.
> truth | Climb in plain sight, with your sword-belt empty and your hands open. | + | +og_exile_open |
> quiet | Climb at the edge of the stair, as an exile does, in the shadow of the rail. | ^ | +og_exile_edge qi+2 |
> deceit | Put the Pavilion’s grey back on your sleeve and climb as though the ruling had never been read. | ^ | +og_exile_grey karma-3 |
> force | Climb the middle of the stair, and meet the gaze of anyone who looks. | ^ | +og_exile_bold qi+1 |

=== o_exile_gate | Chapter One: The Stolen Seal
You come up the last steps with a pack on your back and mud to your knees. The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel, holding an umbrella that is not quite large enough for him.
“State your name and business,” he says. “The Law Hall has closed its doors to visitors since the Sealing Jade was taken.” He looks at the way you hold your shoulders. “And we do not take in other sects’ strays.”
+[arrive] og_exile_open | He looks at the empty belt and the open hands, and lowers the umbrella a finger’s breadth.
+[arrive] og_exile_edge | He had not seen you in the shadow of the rail, and he dislikes having been surprised.
+[arrive] og_exile_grey | The Pavilion’s grey on your sleeve draws his eye, and then he sees that it is cut off at the cuff.
+[arrive] og_exile_bold | You met every gaze on the stair, and he saw you do it from a hundred steps away.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_exile_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_exile_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |
=== o_exile_hall | The Law Hall Door
Elder Su Wanru’s eyes go to your shoulders, and to the pale square on your sleeve where a sect’s grey was cut away. “The Windward Pavilion trains its backs straight,” she says. “It has not trained yours out.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | npc:LH_ENTER_EXILE | |
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | | |
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | insight+2 | |
> deceit | Put on the face of someone with nothing to hide. | ^ | karma-1 | |
`;
