import { daoExtras, talentExtras } from "../path/lex";

/** Starting point: the last of a house that burned, who comes to the Law Hall for the one paper that could clear its name. */
export const heirScenes = String.raw`
=== o_heir_0 | What the Fire Left
The east wing of your family’s manor is a blackened frame, and the rain has begun to come through where the roof was. A letter in your father’s hand was found in the ashes of the study. It says that the page proving the house’s lands were lawfully sold is in the keeping of the Law Hall of the Azure Cloud Sect, and that without it the creditors will take the rest.
+[ash] hero:status=noble | The banner of your house still hangs from the gatepost, scorched at the hem. Nobody has dared to take it down.
+[ash] hero:status=gentry | The magistrate’s seal on your papers is the only thing in the house that did not burn.
+[ash] hero:status=outcast | Your papers were struck from the registers before the fire, and the creditors have not yet found the gap. You intend to be gone before they do.
+[ash] hero:status=commoner | Your house was never a great one, and its fall will be a small noise. That is some comfort.
> mercy | Pay the last servant her wages out of the strongbox, and let her go to her sister’s. | + | +og_heir_paid stones-3 karma+3 | wealth>=3 | The strongbox has less than three stones.
> inquiry | Search the ashes of the study for any other paper your father may have left. | ^ | +og_heir_searched insight+3 |
> quiet | Take down the scorched banner and fold it into your pack. | ^ | +og_heir_banner qi+2 |
> deceit | Take the seal ring from the strongbox before the creditors’ clerk arrives. | ^ | +og_heir_ring karma-2 |

=== o_heir_1 | The Creditor’s Clerk
The creditors’ clerk is a patient man in a grey coat, and he arrives with two porters and a ledger. He tells you, kindly, that the house’s remaining lands are forfeit at the end of the month, unless the page is produced. He does not tell you what will happen to you.
+[clerk] og_heir_paid | The servant you paid is standing in the courtyard with her bundle, and the clerk glances at her and at you and adjusts his estimate of your character.
+[clerk] og_heir_searched | You still have soot on your hands, and the clerk looks at them with something close to respect.
+[clerk] og_heir_banner | The clerk’s eyes go to the pack, where the corner of the banner shows, and he says nothing, which is itself a reading.
+[clerk] og_heir_ring | The ring is a weight on your finger. The clerk’s ledger lists it as missing.
> truth | Tell him you will go to the Law Hall yourself, and be back with the page. | + | +og_heir_promised |
> deceit | Tell him the page is already found and in your pack. | ^ | +og_heir_lied karma-3 |
> force | Tell him the house’s lands are not his to count, and that he should leave. | ^ | +og_heir_threw karma-1 qi+1 |
> inquiry | Ask him what the creditors know of the page, and who told them about it. | ^ | +og_heir_asked insight+3 |

=== o_heir_2 | The Road in Silk
${talentExtras(1)}
You have never walked more than a li without a sedan. The road to the mountain is nine days, and your father’s best boots have already begun to split. A house’s heir learns fast on the road: who bows, who laughs, and who looks at the strongbox.
+[road] og_heir_promised | You said you would come back with the page. The words walk beside you like a second shadow.
+[road] og_heir_lied | You told the clerk a lie, and every mile you add to it. By the Cloud Gap it will be a long one.
+[road] og_heir_threw | The clerk’s porters are following at a distance. They have decided you are worth the walk.
+[road] og_heir_asked | The clerk’s answer was that a woman in grey had told the creditors where to look. You turn that over at every milestone.
> quiet | Walk nine days on foot, and keep the sedan fee in your purse. | + | +og_heir_walked qi+3 stones+2 | !og_heir_walked | You have already saved the fee.
> truth | Hire a sedan and let the road see an heir of the house, whatever its state. | ^ | +og_heir_sedan stones-4 | wealth>=4 | You do not have four stones.
> mercy | Share your rice with a family of refugees from the burned lands. | ^ | +og_heir_shared karma+3 stones-1 | wealth>=1 | You do not have a stone to give.
> inquiry | Stop at every inn along the way and ask about the Law Hall’s papers. | ^ | +og_heir_inns insight+3 |

=== o_heir_3 | The Inn at the Foot
${daoExtras(2)}
The inn at the foot of the mountain is called the Third Lamp, and its keeper has seen a hundred heirs come to petition the Law Hall and none of them come back happy. She puts you in the best room, because you look as though you will not be able to afford the next one.
+[inn] og_heir_walked | You came on foot, and the keeper has noticed the blisters. “Someone raised you hard,” she says.
+[inn] og_heir_sedan | The sedan-bearers are in the yard, and they are loud. The keeper does not care for them, but she does care for your purse.
+[inn] og_heir_shared | The refugees you fed are in the barn, and the keeper pretends not to have noticed.
+[inn] og_heir_inns | The keeper knows more about the Law Hall’s papers than you have been able to learn in nine days, and she sells it for the price of a bowl of wine.
> truth | Tell the keeper why you have come, and ask what the Law Hall asks of petitioners. | + | +og_heir_petition |
> deceit | Say you are a merchant’s agent on the Concord’s business. | ^ | +og_heir_agent karma-2 |
> quiet | Sleep, and rise before the other petitioners. | ^ | +og_heir_early qi+2 |
> inquiry | Ask the keeper which petitioners were refused, and what the Elder said to them. | ^ | +og_heir_refused insight+3 |

=== o_heir_4 | The Seal Ring
In the grey before dawn you take out your father’s seal ring and look at it. It is a plain thing of black jade, and on its face is the character for a house that no longer stands. The Law Hall will ask you to prove who you are. This is what you have.
+[ring] og_heir_refused | The keeper’s list of refused petitioners had a pattern to it: all of them asked for a verdict, and none of them for a page.
+[ring] og_heir_ring | You took the ring from the strongbox before the clerk could list it. It feels, in the cold light, heavier than it did.
+[ring] og_heir_petition | The keeper told you the Law Hall hears petitioners on the day after rain, in the order they arrive. You are the first.
+[ring] og_heir_agent | A merchant’s agent would have a seal of her own. You turn yours over and wonder whether anyone will look.
+[ring] og_heir_early | You are awake before the bell, and the mountain is a grey shape above you, and the stair has not been swept.
> truth | Put the ring on your finger and climb as an heir of the house. | + | +og_heir_wore |
> quiet | Keep the ring in your pack and climb as a petitioner like any other. | ^ | +og_heir_hid qi+2 |
> deceit | Climb under the name of someone who is not an heir of anything. | ^ | +og_heir_alias karma-2 |
> inquiry | Study the ring in the light until you find the mark your father always said was there. | ^ | +og_heir_marked insight+4 |

=== o_heir_gate | Chapter One: The Stolen Seal
You come up the last steps of the stair with your father’s boots split at the toe and mud to your knees. The sect gate rises out of the mist like a sword in a sheath. A gate disciple in grey stands beneath the lintel, with an umbrella that is not quite large enough for him.
“State your name and business,” he says. “The Law Hall has closed its doors to petitioners since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”
+[arrive] og_heir_wore | He sees the ring and his eyebrows go up. He has been taught what a black-jade seal means, and he has not seen one in years.
+[arrive] og_heir_hid | He does not see the ring in your pack. He sees only a soaked petitioner, and he softens by a degree.
+[arrive] og_heir_alias | He asks you to repeat your name. The second time, it sounds a little less like yours.
+[arrive] og_heir_marked | You found the mark under the light, and it was where your father had said. It is a very small thing, and it is the whole house.
> mercy | Bow, give your name, and ask to see the Law Hall. | o_heir_hall | |
> inquiry | Ask the disciple what has happened on the mountain. | gate_gossip | |
> mercy | Offer him a spirit herb to carry in to the Law Hall as a gift. | o_heir_hall | +gifted_herb insight+2 npc:GIFT_HERB |
> deceit | Slip through the side gate while the disciple is looking the other way. | memorial | +sneaked_in karma-5 |
=== o_heir_hall | The Law Hall Door
Elder Su Wanru’s eyes rest on your hands, and then on your boots, which are too fine for the road. “A house with a seal,” she says, “and a petition that has not yet been spoken.”
The hall is colder than the rain outside. Lamps hang from iron chains, and her hands rest on a folded ledger. She waits for you to come the rest of the way in.
> truth | Meet her eyes and wait for her to speak. | law_hall | +og_hall_met npc:LH_ENTER_HEIR |  | 
> quiet | Keep your eyes down, as someone who has come to be judged. | ^ | +og_hall_met |  | 
> inquiry | Look past her at the ledger on her knee, and read what you can of its spine. | ^ | +og_hall_met insight+2 |  | 
> deceit | Put on the face of someone with nothing to hide. | ^ | +og_hall_met karma-1 |  | 
`;
