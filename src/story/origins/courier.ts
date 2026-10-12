import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: a courier of the Concord of Nine Peaks, who carries a sealed notice to the Azure Cloud Sect. */
export const courierScenes = String.raw`
=== o_courier_0 | A Sealed Notice at the Post-House
The post-house at Qinglian Ford smells of wax and wet paper. Your satchel holds a single notice, sealed with the Concord’s green stamp, addressed to the Law Hall of the Azure Cloud Sect. It is the season’s Audit of Names, the same notice every sect receives, and the post-master tells you with a straight face that it is perfectly routine.
+[post] hero:attire=scholar | The post-master looks at your inked cuffs and relaxes. A courier who can read is a courier who can be trusted not to.
+[post] hero:attire=silk | The post-master looks at the silk and at the satchel, and wonders aloud why the Concord pays its couriers so well.
+[post] hero:status=outcast | The post-master does not look at your papers. A courier is only a courier, and the Concord does not check the hands it hires.
+[post] hero:status=noble | A noble hand carries the Concord’s notice to the Azure Cloud Sect. The post-master writes that down with some care.
> truth | Take the notice and sign for it, and ask the post-master to witness. | + | +og_courier_signed |
> inquiry | Hold the seal to the lamp and judge whether it has been opened before. | ^ | +og_courier_lamp insight+3 |
> deceit | Slip the notice into your sleeve and tell the post-master it was never handed over. | ^ | +og_courier_stole karma-3 |
> quiet | Ask for the longest route, which passes through the river towns, and take it. | ^ | +og_courier_long qi+2 |

=== o_courier_1 | The Barge Upriver
You ride three days upriver on a cargo barge, and the notice rides in your satchel, which rides against your ribs. The bargeman is a cheerful man who sings the river’s tolls to himself. A woman in a travelling cloak sits by the rail and does not speak.
+[barge] og_courier_signed | The signature is dry on the post-master’s receipt. It is a small, firm thing, and you keep it in the same pocket as the satchel’s key.
+[barge] og_courier_lamp | The seal held to the lamp showed no scratch, and yet you still feel for it at every bend.
+[barge] og_courier_stole | The notice is in your sleeve, not your satchel, and you are certain the woman by the rail has noticed.
+[barge] og_courier_long | The long route takes you past three towns, and in each you leave a notice of your own in the toll-house.
> truth | Sit beside the woman and offer her half your rice. | + | +og_courier_woman karma+2 |
> inquiry | Ask the bargeman who she is, and where she boarded. | ^ | +og_courier_asked insight+3 |
> quiet | Watch the bank pass and speak to nobody. | ^ | +og_courier_watched qi+2 |
> deceit | Tell the woman you are a pilgrim, bound for the Azure Cloud Sect’s shrines. | ^ | +og_courier_pilgrim karma-2 |

=== o_courier_2 | The Foothill Road
${talentExtras(2)}
The barge leaves you at a landing with a wet dock and a shuttered ferry-house. The road from the river to the mountain climbs through terraces of tea and bamboo, and the rain follows you up it. Somewhere ahead is a sect that has been told to expect your notice, and has no reason to like it.
+[road] og_courier_woman | The woman you shared rice with left the barge an hour before you. She did not look back, and her cloak was the colour of the Law Hall’s grey.
+[road] og_courier_asked | The bargeman’s answer is in your head: that she paid in old coin, and said she was going to a funeral.
+[road] og_courier_watched | You watched the bank so long that you remember every landing. The road ahead has none of them.
+[road] og_courier_pilgrim | Pilgrims keep to the shrines, and you have none. Every shrine you pass is another place where the lie could be tested.
> quiet | Keep the satchel shut and walk on to the mountain. | + | +og_courier_walk qi+2 |
> inquiry | Open the satchel’s outer pocket and re-read the audit notice’s routing slip. | ^ | +og_courier_routing insight+3 |
> truth | Stop at a farm, ask the way and tell the farmer who you are. | ^ | +og_courier_farm |
> mercy | Carry a farmer’s basket up the terrace stair for her. | ^ | +og_courier_basket karma+3 |

=== o_courier_3 | A Censor’s Agent
${daoExtras(3)}
At a crossroads shrine a man in a plain coat steps out of the bamboo and asks, politely, whether you are the Concord’s courier. He does not wear the Concord’s green. He has the manner of someone who has been told to wait and has been waiting a long time.
+[agent] og_courier_walk | You walked straight past three farms, and the agent has the faint breathlessness of a man who ran to catch up.
+[agent] og_courier_routing | The routing slip names a second recipient that you did not see before, a name struck through in the same hand that wrote the address.
+[agent] og_courier_farm | The farmer is standing behind you at the crossroads and has not gone home. She is listening.
+[agent] og_courier_basket | He tips his hat to the basket you are carrying, and says nothing about it.
> truth | Tell him you carry only what the post-master gave you, and offer to show the receipt. | + | +og_courier_receipt |
> deceit | Say you are not the courier, and that you have never heard of the Concord. | ^ | +og_courier_denied karma-3 |
> force | Tell him that a courier of the Concord is not stopped on a public road. | ^ | +og_courier_stern karma-1 qi+1 |
> inquiry | Ask him whose agent he is, and why he waited at a shrine. | ^ | +og_courier_agent insight+4 |

=== o_courier_4 | The Stair in the Rain
The stair of the Azure Cloud Sect begins as a slope of wet flagstones and ends, in the mist, as a rumour. A courier is allowed to the gate. Beyond it the notice goes through a disciple’s hand, and then through the Elder’s, and nothing you carry has any say in what they do with it.
+[stair] og_courier_receipt | The receipt is in your hand, and you hold it up to the mist as though it could be read at that distance.
+[stair] og_courier_denied | You said you were no courier, and the satchel against your ribs feels like a second liar.
+[stair] og_courier_stern | The agent did not follow you. You doubt he has stopped.
+[stair] og_courier_agent | The agent’s answer was that his master prefers to be unnamed, and that the Elder would understand why.
> quiet | Climb the stair at an even pace and give no sign of what you carry. | + | +og_courier_even qi+2 |
> truth | Climb with the notice held out in front of you, so that the gate can see it from far off. | ^ | +og_courier_shown |
> deceit | Cover the green seal with your sleeve and arrive as an ordinary traveller. | ^ | +og_courier_covered karma-2 |
> inquiry | Read the notice’s outside, line by line, until you know every word the Concord has chosen to show. | ^ | +og_courier_read insight+3 |

=== o_courier_gate | Chapter One: The Stolen Seal
You come up the last steps with a satchel against your ribs and mud to your knees. The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel, holding an umbrella that is not quite large enough for him.
“A courier,” he says, reading the green stamp from three paces. “The Law Hall has closed its doors since the Sealing Jade was taken. I cannot think of a worse week for the Concord to write to us.”
+[arrive] og_courier_shown | The notice is held out before you like a charm, and he steps back from it half a pace.
+[arrive] og_courier_covered | Your sleeve covers the seal, and he reads your face instead. It is the worse of the two.
+[arrive] og_courier_even | You arrive at an even pace, and he takes the notice from your hand with the gravity of a man who knows a courier’s worth.
+[arrive] og_courier_read | You can recite the outside of the notice from memory. He asks you to, and you do.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_courier_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_courier_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |
=== o_courier_hall | The Law Hall Door
Elder Su Wanru’s eyes go to the green stamp on your satchel strap and stay there. “The Concord writes to me in the one week I can least afford to be read,” she says.
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | npc:LH_ENTER_COURIER | |
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | | |
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | insight+2 | |
> deceit | Put on the face of someone with nothing to hide. | ^ | karma-1 | |
`;
