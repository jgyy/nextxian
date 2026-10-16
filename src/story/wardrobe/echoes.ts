/**
 * Where the world reads the hero’s dress in the main line and the books: the terraces at the tribunal, the dais, the rope at the cleft, the courtyard on the
 * way back, the Elder’s eye in the sutra hall, and the window at the archive. Lines are `>> scene | group | conditions | text`, and of the lines sharing a
 * group only the first that holds is shown. A hero who has changed dress since the gate is read in the dress they have on now.
 */
export const wardrobeEchoes = String.raw`
// ---- The terraces watch the steps
>> tribunal_crowd | wd_crowd | hero:attire=rags | Nobody on the terraces looks at your patched hemp for long. A few look away on purpose, and a few more, who know what hemp costs, look at you a little longer than they mean to.
>> tribunal_crowd | wd_crowd | hero:attire=traveller | The oiled cloak draws the eye of the front rows. A traveller, they say, and then someone says outsider, and the word has a sound in it like a bolt being drawn.
>> tribunal_crowd | wd_crowd | hero:attire=scholar | The ink on your cuffs is read from the third terrace. A copyist, someone says, and the murmur eases; a reader is a person who might be reasoned with.
>> tribunal_crowd | wd_crowd | hero:attire=silk | The silk catches the grey light, and the front rows draw back from it as they would from a lit lamp. Someone says rich, and someone says careless, and neither is quite a compliment.
>> tribunal_crowd | wd_crowd | hero:attire=armour | The scales draw a ring of empty stone round you before you have taken a step. The disciples do not mean it unkindly. It is only that nobody likes to stand near a jerkin made for a blow.
// ---- The dais, from the foot of the steps
>> tribunal_summons_2 | wd_dais | hero:attire=rags | The masters’ eyes pass over your patched hemp as over a stain on the white stone, and then come back to it, as if surprised it was standing.
>> tribunal_summons_2 | wd_dais | hero:attire=traveller | One of the masters notes your cloak and the salt in its seams, and writes a single line. You cannot see what, and you are quite sure it begins with the word outside.
>> tribunal_summons_2 | wd_dais | hero:attire=scholar | The oldest master sees the ink on your cuffs and relaxes by a finger’s width. A scholar is a person he can argue with, and he has been waiting a long time to.
>> tribunal_summons_2 | wd_dais | hero:attire=silk | The masters look at your embroidery and then at one another. Silk at the foot of the steps is a statement, and none of them is sure yet whether it is yours or someone else’s.
>> tribunal_summons_2 | wd_dais | hero:attire=armour | The masters see the scale jerkin and the sword-belt, and the warden’s hand tightens on the cord. Nobody has been armed on those steps in fifty years, and nobody quite says so.
// ---- The rope and the lantern at the cleft
>> descent_return_3 | wd_rope | hero:attire=rags | Ren Qiao looks at your patched hemp and says nothing, and then, without a word, takes off his own scarf and puts it round your shoulders against the draught from the cleft.
>> descent_return_3 | wd_rope | hero:attire=traveller | Ren Qiao nods at the oiled cloak. “That will keep the wet off,” he says. “It will not keep the cleft off. Nothing does. But it is the right coat to be afraid in.”
>> descent_return_3 | wd_rope | hero:attire=scholar | Ren Qiao glances at your ink-stained robe and the cleft beyond it. “A long sleeve,” he says, “and a lot of rope. Tie the cuffs back, or the mist will have them.”
>> descent_return_3 | wd_rope | hero:attire=silk | Ren Qiao looks at your embroidered silk and then down the cleft, and sighs. “It was a beautiful robe,” he says, with great gentleness, to the future.
>> descent_return_3 | wd_rope | hero:attire=armour | Ren Qiao raps the scales over your ribs with a knuckle. “Good,” he says. “Heavy, though. If the rope takes your weight, it takes the jerkin’s too. Loosen the lacing.”
// ---- The courtyard on the way back
>> mist_remembers_2 | wd_court | hero:attire=rags | The disciples in the courtyard see the patched hemp, torn now by the ledge, and a few of them look away to spare you. It is the oldest kindness a courtyard has.
>> mist_remembers_2 | wd_court | hero:attire=traveller | The disciples see the oiled cloak, grey with mist and scored by the ledge. A traveller, someone whispers, and then, more quietly, a returned one.
>> mist_remembers_2 | wd_court | hero:attire=scholar | The disciples see the ink-stained robe, wet and torn at the knee. A scholar who has been down the cleft, someone says, as though it were a sentence in a book.
>> mist_remembers_2 | wd_court | hero:attire=silk | The disciples see embroidered silk, grey with mist and ruined along the hem. Nobody laughs. A good many of them look at their own sleeves.
>> mist_remembers_2 | wd_court | hero:attire=armour | The disciples see the scale jerkin, dented now along one flank. It is not a thing anyone says aloud, but the dent is read as a sentence, and the sentence is respect.
// ---- The Elder’s eye in the sutra hall
>> jade_eye_return_3 | wd_eye | hero:attire=rags | She looks at your patched hemp through the jade, and you feel the look as a hand laid for a moment on the hem. It does not weigh you. It only notes that you came as you are.
>> jade_eye_return_3 | wd_eye | hero:attire=traveller | She looks at your oiled cloak through the jade, and you feel the look as a draught from a door. A traveller, it says, and an answerer; she has weighed both.
>> jade_eye_return_3 | wd_eye | hero:attire=scholar | She looks at your ink-stained robe through the jade, and you feel the look as a finger run along a line. A reader, it says. She will read your answer to the end.
>> jade_eye_return_3 | wd_eye | hero:attire=silk | She looks at your silk through the jade, and you feel the look as a cool breath on a polished surface. It does not mist. It only notes the shine, and weighs what is under.
>> jade_eye_return_3 | wd_eye | hero:attire=armour | She looks at your scale jerkin through the jade, and you feel the look as a knock on a door. Armed, it says, in her own hall; and she weighs what you will do with the knowledge.
// ---- The window at the archive
>> archive_rest_2 | wd_window | hero:attire=rags | The footsteps overhead stop as you turn, and you catch, in the dark glass, a thin figure in patched hemp. You had not known how plainly the night could dress you.
>> archive_rest_2 | wd_window | hero:attire=traveller | The footsteps overhead stop as you turn, and you catch, in the dark glass, a hooded figure in an oiled cloak. A stranger in a window is always a little frightening, even to themselves.
>> archive_rest_2 | wd_window | hero:attire=scholar | The footsteps overhead stop as you turn, and you catch, in the dark glass, a stooped figure with inked cuffs. You look like what you are: someone the archive would have let in.
>> archive_rest_2 | wd_window | hero:attire=silk | The footsteps overhead stop as you turn, and you catch, in the dark glass, a pale glimmer of embroidery. You are the only thing in the archive that shines, and you do not like it.
>> archive_rest_2 | wd_window | hero:attire=armour | The footsteps overhead stop as you turn, and you catch, in the dark glass, a figure in scales with a sword-belt. For a heartbeat you take it for a guard, and are the more alarmed to find it is you.
`;
