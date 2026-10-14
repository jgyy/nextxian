import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: the keeper of a roadside shrine lamp that has burned on breath alone for seven winters, and tonight burns blue. */
export const lampScenes = String.raw`
=== o_lamp_0 | The Lamp Burns Blue
The shrine at the Rain-Gate crossroads is a roof on four posts, and under it a stone lamp that old Pei kept lit for forty years. When Pei died there was no more oil-money, and you kept it lit the only way left, with a steady breath in the dark, a slow one, from dusk to dawn. For seven winters it has burned a plain yellow. Tonight it burns blue, and a pilgrim in grey has stopped at the edge of the light to look at it.
+[start] hero:background=farmer | You have a paddy hand’s patience, and you have never before been grateful for it.
+[start] hero:background=orphan | The lamp is the first thing anyone has ever left you. You have not let it go out once.
+[start] hero:background=healer | You sit with the lamp the way you sat with the dying, slow and unafraid, and you have never been sure which of them was the patient.
> quiet | Keep breathing steadily, and let the blue flame be what it is. | + | +og_lamp_steady cult+3 |
> inquiry | Hold your palm over the flame and read what it is made of. | ^ | +og_lamp_read insight+3 |
> mercy | Offer the pilgrim the lamp’s light to walk by, and sit on in the dark. | ^ | +og_lamp_lent karma+3 |
> truth | Tell the pilgrim that the lamp has never held oil, only breath, and that it always has. | ^ | +og_lamp_told karma+1 insight+1 |

=== o_lamp_1 | The Pilgrim in Grey
The pilgrim is a disciple of the Azure Cloud Sect, thin from three days on the road, and she says without being asked that the Law Hall has closed its doors since the Sealing Jade was taken. She looks at the blue flame for a long time. “The old books call that an answer-light,” she says. “It burns that colour when someone, somewhere, is listening for exactly the sort of person who tends it. I do not know who. I would go up the mountain, if I were you, and find out.”
+[talk] og_lamp_steady | You kept your breath even while she spoke, and the flame leaned toward her, curious.
+[talk] og_lamp_read | You read the flame as she spoke, and you found nothing in it that wasn’t you.
+[talk] og_lamp_lent | You gave the pilgrim your light and sat in the dark. She says she has not been offered so much in a year.
+[talk] og_lamp_told | She heard about the breath and nods slowly. “Then you are a cultivator already,” she says, “and have not been told.”
> truth | Ask her to teach you what the sect would call what you have been doing. | + | +og_lamp_asked karma+1 |
> quiet | Thank her, and go back to your breath. | ^ | +og_lamp_stayed qi+2 |
> inquiry | Ask her what an answer-light is for, and who would build a thing that answers. | ^ | +og_lamp_why insight+3 |
> deceit | Tell her that the lamp is oil-fed, and that the blue is only a trick of the tin. | ^ | +og_lamp_hid karma-2 |

=== o_lamp_2 | Seven Winters
${talentExtras(0)}
You have kept the lamp through seven winters, and each has taught you something the others did not. The first taught you to breathe so slowly that frost forms on the lamp-glass. The fourth taught you to sit through a wolf. The seventh taught you that a thing you do every night without fail is a kind of cultivation, even if no sect would call it one. In the morning a neighbour’s child brings your rice, and asks, as she does every morning, whether you ever sleep.
+[winters] og_lamp_asked | The pilgrim has gone up the road, but her question stays behind in the shrine like a smell of rain.
+[winters] og_lamp_stayed | You stayed and breathed, and the lamp remembers you for it.
+[winters] og_lamp_why | Why anyone would build a lamp that answers, and for whom, has become a small splinter under the lid of the day.
+[winters] og_lamp_hid | You told a pilgrim a lie about a lamp. The lamp, you are fairly sure, has not forgiven you.
> mercy | Teach the child to breathe at the lamp for a night, and see whether the flame accepts her. | + | +og_lamp_taught karma+2 |
> quiet | Sit through the day and let the winters finish what they were doing in you. | ^ | +og_lamp_sat cult+4 |
> inquiry | Take the lamp’s stone apart, and look for what the blue flame is hiding. | ^ | +og_lamp_stone insight+3 |
> truth | Tell the child that you are leaving, and that you do not know whether you will come back. | ^ | +og_lamp_left karma+1 |

=== o_lamp_3 | The Method
${daoExtras(0)}
There are four ways to hold a flame by breath, and Pei taught you all four, one a winter, in the manner of an old woman who does not intend to repeat herself. The Holding Breath keeps a flame as it is. The Feeding Breath gives it your own warmth. The Sharing Breath splits it with whoever sits beside you. The Dimming Breath lets it go down, to a bead, and teaches the dark to hold a light. Tonight you choose which one is yours.
+[ways] og_lamp_taught | The child’s breathing went in and out beside yours, a quarter-beat late, and the flame did not mind.
+[ways] og_lamp_sat | A day of sitting has made the lamp a part of you, as a hand is a part of an arm.
+[ways] og_lamp_stone | The stone has no hollow in it. Whatever the blue flame is hiding, it is not in the lamp.
+[ways] og_lamp_left | You told the child you were leaving, and she did not cry, and that was worse.
> quiet | Take the Holding Breath, and keep your qi as steady as a flame in a still room. | + | +og_lamp_m_hold cult+8 qi+2 |
> force | Take the Feeding Breath, and give the flame all that you have, and a little you did not know you had. | ^ | +og_lamp_m_feed cult+11 qi-8 karma-1 |
> mercy | Take the Sharing Breath, and teach the child while you decide where to go. | ^ | +og_lamp_m_share cult+5 karma+3 | og_lamp_taught | You have not yet let the child sit beside you.
> inquiry | Take the Dimming Breath, and learn what the lamp is when it is almost out. | ^ | +og_lamp_m_dim cult+5 insight+4 | insight>=14 | You have not studied the dark closely enough yet. Insight 14 is needed.

=== o_lamp_4 | The Road with a Lantern
You carry the answer-light in a paper lantern, as a pilgrim would, and it burns on the road as it burned in the stone. Foothill road, then forest, then the first switchback, and nobody on it but you and a little blue flame that does not flicker when the wind changes. Three men step out of the trees ahead. They have the look of men who have been hungry a week and found a traveller with a light.
+[road] og_lamp_m_hold | You hold the flame as you walked, and the three men slow at its edge as though it were a wall.
+[road] og_lamp_m_feed | The flame is brighter than any lantern has a right to be, and the men blink and look away.
+[road] og_lamp_m_share | The child’s breath is still in yours, a quarter-beat late. You walk faster to put a distance between them and you.
+[road] og_lamp_m_dim | You let the flame sink to a bead. The men can barely see you, and you are suddenly the only one on the road who can see them.
+[rank] realm>=2 | You are a Foundation Builder, and these are three hungry men. The road itself seems embarrassed.
> truth | Tell them you have no stones but will share your rice. | + | +og_lamp_rice karma+2 |
> quiet | Let the flame answer for you, and breathe as you always have. | ^ | +og_lamp_calm qi+3 cult+2 |
> force | Raise the lantern high and tell them to go home. | ^ | +og_lamp_lifted karma-1 qi+1 |
> inquiry | Ask them who told them a traveller came this way, and why they believed it. | ^ | +og_lamp_who insight+3 |

=== o_lamp_5 | The Warden’s Post
The sect keeps a post at the second switchback, a hut with a bench and a bell, and a warden who has not slept since the jade was taken. He sees the blue flame and sits up. He says he has a letter for any traveller who carries a light that colour, in the handwriting of a master who died before he was born. He looks as if he would very much like to be told that it is a joke.
+[post] og_lamp_rice | The three men are somewhere behind you, fed, and the warden does not know it.
+[post] og_lamp_calm | The flame has not flickered once, and the warden watches it as he would watch a snake.
+[post] og_lamp_lifted | You raised the lantern to three men on the road, and the warden has heard of it already, from one of them.
+[post] og_lamp_who | The men told you who sent them. You tell the warden, and he writes it down.
> truth | Take the letter, and open it in front of him. | + | +og_lamp_opened karma+1 |
> quiet | Take the letter, and carry it unopened up the mountain. | ^ | +og_lamp_sealed qi+2 |
> deceit | Tell him you are not the one the letter is meant for. | ^ | +og_lamp_denied karma-2 |
> inquiry | Ask him what the master said that the sect wished to keep. | ^ | +og_lamp_master insight+3 |

=== o_lamp_6 | The Stair in the Dark
${talentExtras(2)}
The stair above the post is steeper and has no lamps, and the blue flame is the only light for a mile. You climb with your eyes on the step in front. Behind you the valley goes dark, and one by one the shrines along the road go out, as they do every night, and you catch yourself counting them. It is the first time in seven winters you have been on the other side of the light.
+[stair] og_lamp_opened | The letter lies open in your pack. It is four lines long, and the last says: whoever carries this light has kept a promise the Law forgot. Ask the Elder what it was.
+[stair] og_lamp_sealed | The letter is a stiff weight against your ribs, still sealed, and you know exactly where its edges are.
+[stair] og_lamp_denied | You told the warden it was not meant for you, and he did not argue. That is the part that stays.
+[stair] og_lamp_master | The warden told you what the master wrote: that a lamp is a promise kept for the dark, and that someone on the mountain made it once.
> quiet | Climb at the pace of your breath, and let the flame set the rhythm. | + | +og_lamp_pace qi+3 cult+2 |
> mercy | Stop at each dark shrine on the way and say a word for the one who kept it. | ^ | +og_lamp_words karma+3 |
> inquiry | Hold the lantern low and read the stair, for the marks of those who have climbed it before. | ^ | +og_lamp_marks insight+3 |
> force | Climb faster than the flame can keep up, and see whether it follows. | ^ | +og_lamp_fast qi-2 cult+4 |

=== o_lamp_gate | Chapter One: The Stolen Seal
The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel with an umbrella that is not quite large enough. He looks at the blue flame in your paper lantern and takes a step back, and then, remembering his post, a step forward.
“State your name and business,” he says. “The Law Hall has closed its doors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_lamp_pace | You come up the last steps at the pace of the flame, and he sees how little you have used yourself.
+[arrive] og_lamp_words | You spoke to the dark shrines on the way, and he notes the calm that leaves on a person.
+[arrive] og_lamp_marks | You read the stair as you climbed it, and you can name the number of travellers who came before.
+[arrive] og_lamp_fast | You outran your own light on the last flight, and the flame is a little breathless too.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_lamp_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_lamp_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |

=== o_lamp_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on the lantern in your hand, and on the blue flame that does not move in the draught. “When I was a girl,” she says, “a woman at a crossroads showed me a lamp that burned that colour. I have not seen her since. I did not think I would be shown it twice.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | +og_hall_met npc:LH_ENTER_LAMP |  | 
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | +og_hall_met |  | 
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | +og_hall_met insight+2 |  | 
> deceit | Put on the face of someone with nothing to hide. | ^ | +og_hall_met karma-1 |  | 
`;
