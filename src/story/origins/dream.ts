import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: someone who has dreamed a stranger’s breath-art, a line a night, since leaving the river village. It carries them fast through the first realms and thins out where the dream ends. */
export const dreamScenes = String.raw`
=== o_dream_0 | The Same Dream Again
You dream of a roof at dawn, and a person sitting on it with their back to you, breathing. You have dreamed it every night since you left the river village, five years ago, and every night the person has breathed a little further. They began with a single breath, in and out. Last night they were up to forty. Tonight you wake at the ninth breath of a new line, in the loft of a river-road inn, with your chest still moving in time to someone else’s lungs.
+[start] hero:background=scholar | You keep the dream in a notebook in a copyist’s hand, a line for every night, and the notebook is fat.
+[start] hero:background=orphan | You never had a family to tell about the dream. You told the river, and the river said nothing.
+[start] hero:looks=frail | The dream is the only part of you that has never been tired.
> quiet | Lie still and breathe the new line through to its end, before the memory fades. | + | +og_dream_breathed cult+3 qi+2 |
> inquiry | Write the new line in your notebook at once, in the order it came. | ^ | +og_dream_wrote insight+3 |
> truth | Tell the innkeeper you have been dreaming a stranger’s breath-art for five years. | ^ | +og_dream_told karma+1 |
> deceit | Tell no one, and say you slept badly, and let the innkeeper think so. | ^ | +og_dream_hid karma-1 |

=== o_dream_1 | The Line That Stops
The ninth breath of the new line is also the last. You lie awake with it, and the next night, and the one after: the dream goes to the roof, and the stranger sits, and breathes eight breaths, and stops. They turn their head, not quite far enough for you to see the face. In the dark of the loft you feel the dream take its last step toward you, and fail, as a dropped thread fails. The art ends in the middle of a sentence. You have spent five years learning it, and it has no end.
+[stops] og_dream_breathed | The eight breaths you took in the loft are your own now, and they run through you without asking.
+[stops] og_dream_wrote | The notebook has the line written in your own hand, and under it, in a fainter hand, a word you did not write.
+[stops] og_dream_told | The innkeeper nodded, and said her grandmother had the same, and that it stopped when she reached the sea.
+[stops] og_dream_hid | You told no one, and the dream felt the silence, and shortened itself.
> quiet | Sit through the day with the unfinished breath in your chest, and let the gap show itself. | + | +og_dream_gap cult+4 |
> inquiry | Go back over the five years of notes, and find where the dream’s breath changes its mind. | ^ | +og_dream_changed insight+4 |
> mercy | Say a word of thanks to the stranger on the roof, aloud, in the empty room. | ^ | +og_dream_thanked karma+2 |
> force | Run the breath past its stopping place, on your own, and see what is there. | ^ | +og_dream_past qi-2 cult+6 |

=== o_dream_2 | A Notebook of Breaths
${talentExtras(0)}
The notebook is a thick thing, now, with a river-road mud-stain on every other page. In it, five years of breath-art in your own hand: first the sitting, then the counting, then the long circuit through the dantian, then a turn at the base of the spine that you did not understand for two years. Reading it from the beginning is like watching a stranger learn to walk. They are very good at it. They are also, you notice, a little afraid, and every time they approach a certain place in the art, they slow.
+[book] og_dream_gap | You sat with the gap for a day, and the notebook has a new smell, as of a closed room.
+[book] og_dream_changed | You went back through the years, and found the place where the stranger changes their mind. It is on page ninety-one.
+[book] og_dream_thanked | You thanked a dream aloud, and the dream, for a moment, thanked you back.
+[book] og_dream_past | You ran the breath beyond its stopping place, and what you found there was not empty.
> quiet | Practise the art as it was dreamed, from the beginning, a circuit a day. | + | +og_dream_practised cult+4 qi+2 |
> inquiry | Find the place where the stranger slows, and ask why. | ^ | +og_dream_slows insight+3 |
> truth | Copy the notebook out clean, so that if you lose it the art will not be lost. | ^ | +og_dream_copied karma+1 insight+1 |
> deceit | Burn the first fifty pages, which are the only ones anyone could use against you. | ^ | +og_dream_burned karma-2 |

=== o_dream_3 | The Method
${daoExtras(0)}
The dream-art has four doors, and you have stood at all of them. The First Door is the Faithful Breath, which does exactly what the stranger did, to the letter. The Second is the Broken Breath, which goes past the end of the dream, and invents. The Third is the Written Breath, which sets the whole art down in the notebook and treats it as someone else’s, to be studied. The Fourth is the Thankful Breath, which does the first part, and stops where the stranger stopped, and says thank you. Tonight you must choose.
+[ways] og_dream_practised | A circuit a day for a month has left your breath as even as a ruled line.
+[ways] og_dream_slows | You noticed where the stranger slows, and now your own breath slows there too.
+[ways] og_dream_copied | The clean copy sits beside the notebook, and the two of them look at each other.
+[ways] og_dream_burned | The ashes of the first fifty pages are in the grate, and you remember every word of them.
> quiet | Take the Faithful Breath, and do exactly what the stranger did, and nothing else. | + | +og_dream_m_faithful cult+8 qi+2 |
> force | Take the Broken Breath, and go past the end, and invent. | ^ | +og_dream_m_broken cult+12 qi-8 karma-1 |
> inquiry | Take the Written Breath, and set the whole art down and study it as another’s. | ^ | +og_dream_m_written cult+5 insight+4 | insight>=14 | You have not studied the art closely enough yet. Insight 14 is needed.
> mercy | Take the Thankful Breath, and stop where the stranger stopped, and say thank you. | ^ | +og_dream_m_thankful cult+4 karma+3 |

=== o_dream_4 | The Road Where the Dream Ends
You leave the inn at dawn, and a mile down the river road you find that the art has begun to run thin. It is as if a rope had been laid out on the ground ahead of you, and the rope ends. You are still running the breath, and it still works, but it is working alone. The stranger is not breathing with you. The roof is empty.
+[road] og_dream_m_faithful | The Faithful Breath is the same as it was, and the road behind you is full of the same breath, laid like cloth.
+[road] og_dream_m_broken | The Broken Breath has carried you beyond the dream, and the road ahead is wider, and colder, and yours.
+[road] og_dream_m_written | The Written Breath lies in the notebook like a map, and you walk with the book open in your hand.
+[road] og_dream_m_thankful | The Thankful Breath stops where the stranger stopped, and the silence there is not empty.
+[rank] realm>=2 | You are a Foundation Builder, and the dream’s early circuits are a children’s stair to you now.
> quiet | Walk on, and let your own breath take over from the stranger’s, one step at a time. | + | +og_dream_own qi+3 cult+2 |
> inquiry | Stop at a milestone and sketch the shape of the art, to see where it points. | ^ | +og_dream_drew insight+3 |
> mercy | Say aloud, to the empty road, that you will find the stranger and finish the line for them. | ^ | +og_dream_vowed karma+2 |
> deceit | Tell the next traveller you meet that you learned the art from a master, and let them think it. | ^ | +og_dream_posed karma-2 |

=== o_dream_5 | A Master at a Milestone
A cultivator of the Azure Cloud Sect sits on a milestone, eating a pear, and watches you walk past with your hand on your sternum. “That is the Hollow Roof breath,” she says, with her mouth full, “run by someone who has never been taught it. I have not seen it done in fifty years.” She tells you that the art is one of the sect’s own, and old, and that the last disciple who could breathe it past the ninth line is dead.
+[master] og_dream_own | You walked on in your own breath, and she watched the join and did not comment.
+[master] og_dream_drew | You drew the art on the milestone with a stick, and she corrected a stroke without looking.
+[master] og_dream_vowed | She heard you vow to the empty road, and she did not laugh, which was a courtesy.
+[master] og_dream_posed | You said you had a master, and she took a bite of pear and let you finish.
> truth | Tell her you have never had a master, and ask who the last disciple was. | + | +og_dream_asked karma+1 insight+1 |
> quiet | Sit down beside her and breathe the line through to the ninth, together. | ^ | +og_dream_sat qi+2 cult+3 |
> inquiry | Ask her what is on the roof in the sect’s version, and who sits there. | ^ | +og_dream_roof insight+3 |
> deceit | Tell her you have only heard it in a tavern, and know nothing. | ^ | +og_dream_denied karma-2 |

=== o_dream_6 | The Stair at Dawn
${talentExtras(2)}
The stair to the sect begins where the milestones stop, and it climbs a mountain you have dreamed a hundred times from the wrong side. Every step looks as though it has been rubbed hollow by one pair of feet. At the second turn you see the roof: a long grey ridge, with a flat place at the apex. At the third turn, someone is sitting on it, with their back to you, in the light of a coming dawn.
+[stair] og_dream_asked | The master told you the last disciple’s name. You say it softly on every step, and it is the right length for the stair.
+[stair] og_dream_sat | You breathed the line to the ninth beside a stranger, and the ninth was not the end.
+[stair] og_dream_roof | She told you who sits on the roof in the sect’s version. You cannot decide whether you believe her.
+[stair] og_dream_denied | You told her you knew nothing. She let you, and ate the last of the pear.
> quiet | Climb at the rhythm of the stranger’s breath, and let the roof come to you. | + | +og_dream_rhythm qi+3 cult+2 |
> truth | Call up to the figure on the roof, and tell them you have come to finish the line. | ^ | +og_dream_called karma+1 |
> inquiry | Study the roof from each turn of the stair, and note when the figure moves. | ^ | +og_dream_watched insight+3 |
> force | Run the stair, to reach the roof before the figure can turn away. | ^ | +og_dream_ran qi-2 cult+4 |

=== o_dream_gate | Chapter One: The Stolen Seal
The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel with an umbrella that is not quite large enough. On the ridge above him, against the first grey of the dawn, there is a long roof with a flat place at the apex. It is empty. Your chest is moving in time with something that is not there.
“State your name and business,” the disciple says. “The Law Hall has closed its doors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_dream_rhythm | You arrive on the stranger’s breath, and the disciple notices your pace.
+[arrive] og_dream_called | You called up to the roof, and the roof said nothing. The disciple looks where you looked.
+[arrive] og_dream_watched | You watched the roof all the way up, and the figure did not move once while you were looking.
+[arrive] og_dream_ran | You ran the stair and arrived panting, and the disciple takes a polite step back.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_dream_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_dream_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |

=== o_dream_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on your chest, which is rising and falling with a rhythm that does not belong to the hall. “That is the Hollow Roof breath,” she says, very quietly. “I did not think anyone had it any more. Close the door behind you. Slowly. I should like to hear it to the end.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | +og_hall_met npc:LH_ENTER_DREAM |  | 
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | +og_hall_met |  | 
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | +og_hall_met insight+2 |  | 
> deceit | Put on the face of someone with nothing to hide. | ^ | +og_hall_met karma-1 |  | 
`;
