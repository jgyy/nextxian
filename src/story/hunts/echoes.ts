/**
 * Where the main line remembers. Stances at the Sealing Night come back at the Return, the Last Sealing and the Judgment; the Dao the hero has met the
 * mountain with (`dt_<dao>_<scene>`) and the dangers they have met it as (`gt_<gender>_<scene>`) are noticed by the people they meet later. Lines are
 * `>> scene | group | conditions | text`; of the lines sharing a group, only the first that holds is shown.
 */
export const huntEchoes = String.raw`
// ---- The morning after: what the Hall says you did at the cleft, and at the altar
>> rumours_21 | sn_ret | sn_chains_cut | The servants say you cut the chains. They say it quietly, and each of them has the iron in the telling: the crack, the give, a woman of twenty-four pulled back into the light for the length of a breath.
>> rumours_21 | sn_ret | sn_took_jade | The servants say you took the jade from the tray. It is so plain a thing that in fifteen years nobody thought to, and they cannot decide whether you were bold or only the first to see it.
>> rumours_21 | sn_ret | sn_sang | The servants say you sang. They do not know the tune from the vault, and have made one up, and it is nearly right. The Elder has not corrected them.
>> rumours_21 | sn_ret | sn_let_push | The servants say you stepped back and let the masters push. They say it without blame. They stepped back too, in their time, and the Hall has taught them all the same grammar.
>> rumours_21 | sn_alt | sn_elder_refused | And of the altar they say that you took the brush from the young Registrar, or tried. No one told her she might refuse. You were the first to say so.
>> rumours_21 | sn_alt | sn_offered | And of the altar they say that you offered to go down the path in the Registrar’s place. She would have let you, once. They are glad she was never given the chance.
>> rumours_21 | sn_alt | sn_brush_struck | And of the altar they say that you struck the brush from her hand and the ink ran. The Elder has kept that page. It is the only order she signed that she did not finish.
>> rumours_21 | sn_alt | sn_elder_signed | And of the altar they say that you let her finish the name. Nobody blames you. She has never been able to blame anyone but the one who held the brush.
// ---- The Last Sealing: Mengjiao reads how the hero stood on the night she was sealed
>> lastseal_entry | sn_mj | sn_chains_cut | Her eyes go to your hands. “You broke the iron,” she says. “I felt it go.”
>> lastseal_entry | sn_mj | sn_took_jade | Her eyes go to your chest. “You took the jade,” she says. “I stopped wondering who, about the third year.”
>> lastseal_entry | sn_mj | sn_sang | Her head tilts. “You hummed,” she says. “I have listened for that note fifteen years.”
>> lastseal_entry | sn_mj | sn_let_push | She says nothing of the cleft. She saw who stepped back, and forgave them years ago.
// ---- The Judgment: how the hero stood across the whole of the night
>> rumours_22 | st_judg | count:st_deceit_>=2 | Those who watched you at the cleft lower their voices further. In the memory you twice reached for a lie because it was nearer than the truth, and they say the Elder counted both.
>> rumours_22 | st_judg | count:st_force_>=3 | Those who watched you at the cleft look at your hands. In the memory you tore, shouted and seized more than once, and it has settled in the way you stand.
>> rumours_22 | st_judg | count:st_mercy_>=3 | Those who watched you at the cleft look at your open hands. You reached for the chains more than once, and the mirror kept it. It is the only fact in the Hall that is on your side.
>> rumours_22 | st_judg | count:st_truth_>=3 | Those who watched you at the cleft say you said the plain thing three times when a softer one was at your lips. The Elder has written it in her second ledger.
>> rumours_22 | st_judg | count:st_inquiry_>=3 | Those who watched you at the cleft say you asked, and asked. The Elder is not sure she has answered one of them, and has been seen to mouth the questions in the corridor.
>> rumours_22 | st_judg | count:st_quiet_>=3 | Those who watched you at the cleft say you held still, again and again, and let it happen. Only the Elder knows what that cost, and she has not said.
// ---- The Dao, noticed by the people who see it twice
>> tribunal_summons_3 | dt_tr | hero:dao=alchemy & count:dt_alchemy_>=2 | A disciple three rows back is chewing a leaf you recognise: the one a pill-maker gives a frightened friend. Word has gone round the benches about the Pill Dao.
>> tribunal_summons_3 | dt_tr | hero:dao=forging & count:dt_forging_>=2 | A disciple three rows back is turning a rivet over in his fingers, looking at you. Word has gone round the benches about a forger who reads a thing before a person.
>> tribunal_summons_3 | dt_tr | hero:dao=talisman & count:dt_talisman_>=2 | A disciple three rows back is writing something on the back of his hand, and glancing at you. Word has gone round the benches about a script-maker who reads walls.
>> tribunal_summons_3 | dt_tr | hero:dao=formation & count:dt_formation_>=2 | A disciple three rows back is counting the lamps and the doors under his breath. Word has gone round the benches about an array-master who arranges a hall by walking into it.
>> tribunal_summons_3 | dt_tr | hero:dao=beast & count:dt_beast_>=2 | Somewhere in the second row a sparrow has settled on a sleeve, where no sparrow should be. Word has gone round the benches about a tamer.
>> tribunal_summons_3 | dt_tr | hero:dao=sword & count:dt_sword_>=2 | The benches have left a clear space around your hands. Word has gone round about a swordsman who draws only when there is no other way.
>> tribunal_summons_3 | dt_tr | hero:dao=healing & count:dt_healing_>=2 | A disciple with a bandaged wrist has been told to sit beside you, and does. Word has gone round the benches about a healer who stays.
>> tribunal_summons_3 | dt_tr | hero:dao=fate & count:dt_fate_>=2 | Someone in the rows has begun casting stalks under the bench, and stopped when you looked. Word has gone round about a diviner who is never surprised.
>> mist_remembers_3 | dt_mr | hero:dao=alchemy & count:dt_alchemy_>=4 | The mist smells, faintly, of bitter-root and cinnabar, wherever you stand. It has learned the smell of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=forging & count:dt_forging_>=4 | The mist takes a metallic taste as it comes near you, as if it were learning what iron is. It has learned the ring of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=talisman & count:dt_talisman_>=4 | The mist draws back from you in lines, as if from a ward. It has learned the grammar of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=formation & count:dt_formation_>=4 | The mist stands round you in a pattern you did not make. It has learned the geometry of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=beast & count:dt_beast_>=4 | The mist comes to your hand like a dog that has decided. It has learned the stillness of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=sword & count:dt_sword_>=4 | The mist parts in front of you along a single line. It has learned the edge of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=healing & count:dt_healing_>=4 | The mist lies down round your feet like something that has been hurt and trusts you. It has learned the hands of your trade.
>> mist_remembers_3 | dt_mr | hero:dao=fate & count:dt_fate_>=4 | The mist waits for you to say what it will do, and does it. It has learned the patience of your trade.
// ---- The danger, noticed by the people who saw it met
>> archive_front_3 | gt_af | hero:gender=woman & count:gt_woman_>=2 | At his desk Lin Yuan glances up, and then, more carefully, up again. The tale of what a woman did at the pavilion and the quarry has reached the archive, and he is trying not to look as if he is checking it.
>> archive_front_3 | gt_af | hero:gender=man & count:gt_man_>=2 | At his desk Lin Yuan glances up, and then, more carefully, up again. The tale of what a man did at the pavilion and the quarry has reached the archive, and he is trying not to look impressed.
>> archive_front_3 | gt_af | hero:gender=unspoken & count:gt_unspoken_>=2 | At his desk Lin Yuan glances up, and then, more carefully, up again. The tale of what someone did at the pavilion and the quarry has reached the archive, and the clerks have not yet agreed on how to say it.
>> descent_return_2 | gt_dr | hero:gender=woman & count:gt_woman_>=5 | Ren Qiao gives you the lantern as he would give it to a colleague. He has heard what a woman has done on this mountain in a season, five times over, and has stopped being surprised.
>> descent_return_2 | gt_dr | hero:gender=man & count:gt_man_>=5 | Ren Qiao gives you the lantern as he would give it to a colleague. He has heard what a man has done on this mountain in a season, five times over, and has decided to be glad.
>> descent_return_2 | gt_dr | hero:gender=unspoken & count:gt_unspoken_>=5 | Ren Qiao gives you the lantern and says ‘friend’, and means it. Five dangers have been met by someone he could not name, and it has made him braver about names.
`;
