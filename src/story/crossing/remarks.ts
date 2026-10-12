import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the hero’s gender, roots, Dao and the elements they have come to know. Each is said once,
 * a few decisions after it becomes true, and the first whose conditions hold is the one said, so a pattern is named before a single deed. Counts read
 * the flags the Crossing Roads set: the doors gone through (`pr_fork_g_…`, `pr_fork_r_…`, `pr_fork_c_…`), the pick made behind each (`pr_pick_g_…`,
 * `pr_pick_r_…`, `pr_pick_c_…`), and the elements attuned to (`pr_attuned…`).
 */
const SOURCE = String.raw`
// ---- The Elder: a pattern of doors, by gender
% su_cx_woman_10 | count:pr_fork_g_>=10 & hero:gender=woman | elder | Ten roads where a trade looked at you and you looked back. I do not think the trades have been read so thoroughly since they first wrote themselves down. I am proud of you, and I would be obliged if you did not tell the Law Hall.
% su_cx_woman_5 | count:pr_fork_g_>=5 & hero:gender=woman | elder | Five roads, and five times a trade has told you what a woman may do in it. I have kept a tally of my own. It is longer than yours, and I am no longer angry about it, only exact.
% su_cx_woman_1 | count:pr_fork_g_>=1 & hero:gender=woman | elder | You have sat on a bench of women and been looked at by it. I did, at your age, on the left side of the Law Hall, and learned who among them would carry me and who would carry tales. Learn it sooner than I did.
% su_cx_man_10 | count:pr_fork_g_>=10 & hero:gender=man | elder | Ten roads of brothers and benches. You have learned the shape of what is expected of a man more accurately than most who have worn it for a lifetime. What you do with that shape is the only part I cannot teach.
% su_cx_man_5 | count:pr_fork_g_>=5 & hero:gender=man | elder | Five roads where the men of a trade have measured you. Notice who tried to make you prove something, and notice who did not. The second kind is the one worth being.
% su_cx_man_1 | count:pr_fork_g_>=1 & hero:gender=man | elder | You have been shown a long bench and a hall of brothers. I have watched men take such a seat and keep it, and I have watched them learn what it costs. Some of them pay in years. Keep a note of the price.
% su_cx_unspoken_10 | count:pr_fork_g_>=10 & hero:gender=unspoken | elder | Ten roads without a bench of your own. You have walked more of the mountain’s customs than anyone who fits them, and found, I hope, that the gaps are where the air is.
% su_cx_unspoken_5 | count:pr_fork_g_>=5 & hero:gender=unspoken | elder | Five roads where the benches had no seat for you and made one. I find that the trades are cleverer than they let on. They have simply never been asked.
% su_cx_unspoken_1 | count:pr_fork_g_>=1 & hero:gender=unspoken | elder | You have been asked, politely, which bench is yours, and have declined to say. I have known cultivators spend thirty years answering that question for others. I am glad to see someone who does not.
// ---- The Elder: a pattern of doors, by root
% su_cx_root_wood | count:pr_fork_r_>=3 & hero:talent=wood | elder | Three times you have laid a green root to the wood of a craft. Wood is patient. See that it does not teach you to wait for everything.
% su_cx_root_fire | count:pr_fork_r_>=3 & hero:talent=fire | elder | Three times you have put a fire root to a trade, and three times something has been scorched. I trust it was only the trade. A fire root burns its own house first.
% su_cx_root_earth | count:pr_fork_r_>=3 & hero:talent=earth | elder | Three times an earth root has met its element in a craft. Earth does not forget. I should be careful of what I told it.
% su_cx_root_metal | count:pr_fork_r_>=3 & hero:talent=metal | elder | Three times a metal root has rung against a craft. It is a beautiful sound and a lonely one. Not everyone can bear to hear it twice.
% su_cx_root_water | count:pr_fork_r_>=3 & hero:talent=water | elder | Three times a water root has gone into a craft and come out with the shape of the vessel. You are very good at taking shape. See that you also keep your own.
% su_cx_root_mixed | count:pr_fork_r_>=3 & hero:talent=mixed | elder | Three crafts, and your mixed roots have answered each a little. Do not let anyone tell you that is weakness. It is a larger vocabulary.
% su_cx_root_heaven | count:pr_fork_r_>=3 & hero:talent=heaven | elder | Three crafts have felt heaven’s mark in you, and each has said the same thing in a different dialect. It is the same warning. Hear it.
% su_cx_root_late | count:pr_fork_r_>=3 & hero:talent=late | elder | Three crafts, and your late root has answered slowly each time, and then entirely. I suspect you will be a great surprise to a great many people.
// ---- The Elder: a pattern of doors, by Dao
% su_cx_dao_alchemy | count:pr_fork_c_>=3 & hero:dao=alchemy | elder | Three times you have stood at another craft’s bench with a pill-maker’s hands. A pill-maker learns that every craft is a dose. I should like you to learn the converse: that every dose is a craft.
% su_cx_dao_forging | count:pr_fork_c_>=3 & hero:dao=forging | elder | Three times you have stood at another craft’s bench with a smith’s hands. A smith learns that everything has a grain. I trust you have found that it is not always the same grain twice.
% su_cx_dao_talisman | count:pr_fork_c_>=3 & hero:dao=talisman | elder | Three times you have held another craft’s tools with a writer’s fingers. A writer learns to read a thing backward. See that you also learn to read it forward.
% su_cx_dao_formation | count:pr_fork_c_>=3 & hero:dao=formation | elder | Three times you have walked into another craft’s ring. A keeper of arrays learns that every craft has a seam. I hope you were gentle with the seams you found.
% su_cx_dao_beast | count:pr_fork_c_>=3 & hero:dao=beast | elder | Three times you have waited at another craft’s door until it noticed you. A beast-keeper is patient. A craft is not always, and it is as well to know which you are dealing with.
% su_cx_dao_sword | count:pr_fork_c_>=3 & hero:dao=sword | elder | Three times you have faced another craft with a swordsman’s stance. A swordsman learns distance. A craft is a distance of another kind, and the swordsman’s mistake is to measure it in paces.
% su_cx_dao_healing | count:pr_fork_c_>=3 & hero:dao=healing | elder | Three times you have looked at a craft as a healer looks at a patient: first at the person. I should like to think the crafts have not been looked at so kindly before.
% su_cx_dao_fate | count:pr_fork_c_>=3 & hero:dao=fate | elder | Three times you have read another craft as a diviner reads a stranger. Do not tell them what you saw. A diviner’s first discipline is to be silent about what is plain.
% su_cx_dao_none | count:pr_fork_c_>=3 & hero:dao=none | elder | Three crafts, and you followed none of them and learned something at each. An open hand is not an empty one. It is a hand that has not yet decided what to hold.
// ---- The Elder: the elements the hero has come to know
% su_cx_attuned_5 | count:pr_attuned>=5 | elder | All five elements have known you, in whole or in part. There are sages of the Dao Seeking who cannot say as much. I will not make you a speech. I will only say that the mountain has not seen the like in my time.
% su_cx_attuned_3 | count:pr_attuned>=3 | elder | Three elements have answered you. A cultivator with three is no longer a root but a district. I should be careful of the neighbours.
% su_cx_attuned_1 | count:pr_attuned>=1 | elder | An element has answered you, and you carry it now. Do not mistake it for a gift. It is a loan with a long term and a friendly lender, which is the most dangerous kind.
// ---- The Elder: the gendered picks
% su_cx_g_sisters | count:pr_pick_g_sisters_>=2 | elder | Twice you have sat with the women of a trade. The sisters’ benches are where the real recipes are kept. I trust you are writing them down.
% su_cx_g_barred | count:pr_pick_g_barred_>=2 | elder | Twice you have walked through a door the custom bars to women. I would say it gets easier. It does not. It gets quieter.
% su_cx_g_quiet | count:pr_pick_g_quiet_>=2 | elder | Twice you have kept your counsel in a room that was weighing you. Silence is a weapon and a shield, and the knack is to know which you are holding.
% su_cx_g_brothers | count:pr_pick_g_brothers_>=2 | elder | Twice you have taken the oath of a men’s hall. An oath binds more than the one who asks for it wishes. I hope you read the small print of both.
% su_cx_g_prove | count:pr_pick_g_prove_>=2 | elder | Twice you have answered a yard’s challenge. A yard has no memory for victories and a very long one for the loser’s manner. Watch your manner.
% su_cx_g_yield | count:pr_pick_g_yield_>=2 | elder | Twice you have declined to prove anything. It will be called weakness by the kind of man who counts bruises. Pay it no mind. They never count the ones they cause.
% su_cx_g_middle | count:pr_pick_g_middle_>=2 | elder | Twice you have taken the seat between the benches. I have sat in the middle of a good many rooms. It is lonely, and the view is excellent.
% su_cx_g_either | count:pr_pick_g_either_>=2 | elder | Twice you have sat on whichever bench suited the day. It is an honest trick if it is kept honest, which is to say if you remember which you chose.
% su_cx_g_refuse | count:pr_pick_g_refuse_>=2 | elder | Twice you have refused to be sorted at all. They will say it is pride. It is not. It is a plain preference for being a person.
% su_cx_g_ask | count:pr_pick_g_ask_>=2 | elder | Twice you have asked what a custom was for before it was a custom. It is the question that undoes them. It costs nothing, and almost nobody puts it.
// ---- The Elder: the root picks
% su_cx_r_attune | count:pr_pick_r_attune_>=2 | elder | Twice you have opened your root fully to an element. Most cultivators attune once and call it done. It is not a door. It is a habit.
% su_cx_r_bind | count:pr_pick_r_bind_>=2 | elder | Twice you have bound what an element gave you to your craft. That is how a Dao is made: not by taking a thing in, but by setting it to work.
% su_cx_r_pour | count:pr_pick_r_pour_>=2 | elder | Twice you have poured all you had into an element. It makes a splendid noise. I would ask only that you leave something in the well.
% su_cx_r_listen | count:pr_pick_r_listen_>=2 | elder | Twice you have simply let an element come to you. It is the most underrated technique on the mountain. I have never managed it for longer than a morning.
% su_cx_r_force | count:pr_pick_r_force_>=2 | elder | Twice you have forced an answer from an element that would not give one. It sometimes works. It is never kind.
% su_cx_r_borrow | count:pr_pick_r_borrow_>=2 | elder | Twice you have borrowed a keeper’s root for an hour. I will not report it. I will say only that a borrowed root is returned with interest, and the interest is the keeper’s opinion of you.
% su_cx_r_study | count:pr_pick_r_study_>=2 | elder | Twice you have studied an element your roots cannot hear. It is the harder path and the surer. Wood does not speak to the deaf, but a deaf man may build with it.
% su_cx_r_accept | count:pr_pick_r_accept_>=2 | elder | Twice you have admitted aloud that your roots are deaf to an element. Few say so. Fewer are the better for it. You are.
// ---- The Elder: the craft picks
% su_cx_c_beside | count:pr_pick_c_beside_>=2 | elder | Twice you have worked beside a keeper of your own Dao. A colleague’s hour is worth a master’s week. Do not waste the exchange rate.
% su_cx_c_masterwork | count:pr_pick_c_masterwork_>=2 | elder | Twice you have attempted a master’s piece. I hear one of them was nearly good. Nearly, in a master’s piece, is a country with an excellent view.
% su_cx_c_trade | count:pr_pick_c_trade_>=2 | elder | Twice you have traded a secret for a secret. It is the only honest commerce in the trades, and the only one the guilds forbid.
% su_cx_c_watch | count:pr_pick_c_watch_>=2 | elder | Twice you have simply watched a keeper at work. It is the cheapest lesson on the mountain and the most often refused.
% su_cx_c_compare | count:pr_pick_c_compare_>=2 | elder | Twice you have set your craft beside another’s. That is where every new art begins, and where every dull one ends.
% su_cx_c_borrow | count:pr_pick_c_borrow_>=2 | elder | Twice you have borrowed a rule from another craft. I hope you return it with a better one. That is the custom, though no one has written it down.
% su_cx_c_quarrel | count:pr_pick_c_quarrel_>=2 | elder | Twice you have contested a keeper’s method with your own. It is the surest way to find out whether you were right, and the surest way to be told.
% su_cx_c_defer | count:pr_pick_c_defer_>=2 | elder | Twice you have deferred to a keeper. Deference is not weakness. It is the only way I know to be taught by someone who knows more.
% su_cx_c_apprentice | count:pr_pick_c_apprentice_>=2 | elder | Twice you have sat at the apprentices’ end of the bench. You have no idea how rare that is in someone who has done what you have.
% su_cx_c_labour | count:pr_pick_c_labour_>=2 | elder | Twice you have done the plain labour of a craft. I did it for three years in the pill-house. I have never been prouder of anything.
% su_cx_c_ask | count:pr_pick_c_ask_>=2 | elder | Twice you have asked a craft what it cannot do. It is the question under the question, and the only one a craft is ashamed to answer.
% su_cx_c_carry | count:pr_pick_c_carry_>=2 | elder | Twice you have offered to carry what a keeper could not. It is what this sect was built on, and what it has almost entirely forgotten.
// ---- The company
% cx_gu_open | bond:gu>=-100 & count:pr_fork_c_>=4 & hero:dao=none | gu | You have no craft and you sit at everyone’s bench. In the village we called that being a good guest. I think it is a better thing than a trade.
% cx_ren_woman | bond:ren>=-100 & count:pr_fork_g_>=4 & hero:gender=woman | ren | On the bridge I took orders from a woman for fifteen years and never once questioned them. I was not brave. I was just lucky in the woman.
% cx_ren_man | bond:ren>=-100 & count:pr_fork_g_>=4 & hero:gender=man | ren | A man learns to stand where he is put. Four roads, and you have stood where you chose. It is a harder thing than a bridge.
% cx_lin_unspoken | bond:lin>=-100 & count:pr_fork_g_>=3 & hero:gender=unspoken | lin | I keep a ledger with two columns for names. I have been thinking since you came that it wants a third. May I write you in it, or would you rather I tore out the page?
% cx_lin_woman | bond:lin>=-100 & count:pr_fork_g_>=3 & hero:gender=woman | lin | My mother was struck from this archive’s rolls for a column in a ledger. She would have liked your roads. She would have asked to see the benches.
% cx_yue_attuned | bond:yue>=-100 & count:pr_attuned>=2 | yue | Two elements, and your qi has two colours in it now. I can see them in a lamp. I have watched merchants pay thirty stones for less.
% cx_mengjiao_roots | bond:mengjiao>=-100 & count:pr_fork_r_>=5 | mengjiao | Five times you have put your roots to an element. The mist has begun to lean when you pass. It does not do that for everyone, and I would not mistake it for flattery.
% cx_odval_roots | bond:odval>=-100 & count:pr_attuned>=3 | odval | Three elements know your name. On the steppe we say a person who is known by three winds is never lost. I do not know that it is true. I like it very much.
% cx_hao_gender | bond:hao>=-100 & count:pr_fork_g_>=6 | hao | I draw what I cannot say, and I have drawn six benches this month. In four of them you are the only one not looking at the floor.
`;

export const crossingRemarksSource = SOURCE;
export const parsedCrossingRemarks = () => parseRemarks(SOURCE, "crossing/remarks");
