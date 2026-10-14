import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the customs the hero has met: the doors of custom gone through, what the hero did behind them,
 * and what it has meant to be the person they are in each room. Each is said once, a few decisions after it becomes true, and the first whose conditions
 * hold is the one said, so a pattern is named before a single deed. Counts read the flags the Custom Roads set: the doors (`cs_door_…`), the pick
 * made behind each (`cs_pick_<way>_…`), the customs pressed before a keeper who holds them (`cs_clash_…`) and the roads finished (`cs_done_…`).
 */
const SOURCE = String.raw`
// ---- The Elder: a pattern of doors, by gender
% su_cs_woman_10 | count:cs_door_>=10 & hero:gender=woman | elder | Ten doors that were built for a woman to walk through, and you walked through every one with your eyes open. The sect has not been read that thoroughly since the founders wrote it. I am proud of you, and I would be obliged if you told no one in the Law Hall.
% su_cs_woman_5 | count:cs_door_>=5 & hero:gender=woman | elder | Five rooms have told you what a woman may do in them. I have kept a tally of my own, and it is longer than yours. I am no longer angry about it, only exact.
% su_cs_woman_1 | count:cs_door_>=1 & hero:gender=woman | elder | You have been shown the woman’s side of a custom and made your choice on it. I did the same, in a hall like it, and learned too late who among the women would carry me and who would carry tales. Learn it sooner.
% su_cs_man_10 | count:cs_door_>=10 & hero:gender=man | elder | Ten doors that were built for a man to walk through, and you looked at the weight of every one. A man who sees the weight is rarer than a man who carries it. What you do with the seeing is the only part I cannot teach.
% su_cs_man_5 | count:cs_door_>=5 & hero:gender=man | elder | Five rooms have held a chair out for you. Notice which you took and which you left, and notice who was standing when you sat. The second sort of noticing is the one worth being.
% su_cs_man_1 | count:cs_door_>=1 & hero:gender=man | elder | You have been offered a man’s place in a custom and answered. I have watched men take such a seat and keep it, and I have watched them learn what it costs the others. Keep a note of the price.
% su_cs_unspoken_10 | count:cs_door_>=10 & hero:gender=unspoken | elder | Ten rooms with no door for you, and you found the draught in every one. You have walked more of the sect’s customs than anyone who fits them, and I hope you have found that the gaps are where the air is.
% su_cs_unspoken_5 | count:cs_door_>=5 & hero:gender=unspoken | elder | Five rooms whose benches had no seat for you, and made one. I find the customs are cleverer than they let on. They have simply never been asked.
% su_cs_unspoken_1 | count:cs_door_>=1 & hero:gender=unspoken | elder | You have been asked, politely, which side you belong on, and have said where you stood. I have known cultivators spend thirty years answering that for others. I am glad to see someone who does not.
// ---- The Elder: what the hero did behind the doors
% su_cs_break_4 | count:cs_pick_break_>=4 | elder | Four times you have broken a custom in the open. The Law Hall has begun to speak of you in the lower voice it keeps for weather. I should be careful of being a climate.
% su_cs_break_2 | count:cs_pick_break_>=2 | elder | Twice you have done in front of people what the custom forbade. It never gets easier. It gets quieter, and the quiet is what the others remember.
% su_cs_stand_4 | count:cs_pick_stand_>=4 | elder | Four times you have spoken for someone a custom passed over. You are building a household out of the people no register will hold. I should like to be counted in it.
% su_cs_stand_2 | count:cs_pick_stand_>=2 | elder | Twice you have stood beside someone the room was not looking at. It is the oldest courage in the sect and the most expensive. Do not let it make you tired too soon.
% su_cs_bend_4 | count:cs_pick_bend_>=4 | elder | Four times you have asked for the smallest exception that could be granted. It is how every wall in this sect has ever been taken down: one stone, politely, in daylight.
% su_cs_bend_2 | count:cs_pick_bend_>=2 | elder | Twice you have asked a custom what it was for. It is the question that undoes them, and it costs nothing, and hardly anyone puts it.
% su_cs_keep_4 | count:cs_pick_keep_>=4 | elder | Four times you have kept the old way. I do not call it cowardice, and I should dislike anyone who did. I would only ask that it be a choice each time and not a habit.
% su_cs_keep_2 | count:cs_pick_keep_>=2 | elder | Twice you have taken the seat the custom gave you. A seat taken with open eyes is a different object from the same seat taken in the dark. I trust yours were open.
% su_cs_clash_3 | count:cs_clash_>=3 | elder | Three keepers who hold their customs have found you leaning on them. They are not cruel, only sure, and it is lonely to watch someone else be unsure. They will remember, and so shall I.
% su_cs_roads_20 | count:cs_done_>=20 | elder | Twenty customs of the mountain have been walked and reported. You may now say more of how the sect sorts its people than the clerks who sort them, and I wish you would say it to the Concord.
% su_cs_roads_10 | count:cs_done_>=10 | elder | Ten roads of custom. I have been trying to work out whether you are reading the sect or rewriting it. I have decided it is the same labour.
% su_cs_roads_4 | count:cs_done_>=4 | elder | Four roads of custom, and each has changed what I say to you at the door. That is the whole of an education: what the others have to say changes.
// ---- The Elder: a woman’s picks
% su_cs_w_break | count:cs_pick_break_>=2 & hero:gender=woman | elder | You have argued two barred doors open. I did the same once, at a table, with nothing in my hand but a ledger. Keep the ledger. It is the only thing the door ever respected.
% su_cs_w_stand | count:cs_pick_stand_>=2 & hero:gender=woman | elder | Twice you have spoken for another woman. I did it three times in twelve years, and was thanked once. Do it for the thanks, and you will stop. Do it for the room.
% su_cs_w_keep | count:cs_pick_keep_>=3 & hero:gender=woman | elder | Three times you have sat on the women’s side and learned it from the inside. It is the one place that tells you what the whole house is worth. Do not stay a day past knowing.
// ---- The Elder: a man’s picks
% su_cs_m_break | count:cs_pick_break_>=2 & hero:gender=man | elder | Twice you have refused a man’s place and done what it forbids. You have paid in the brothers’ opinion. It is a small price, and it is the only one they will ever charge you.
% su_cs_m_bend | count:cs_pick_bend_>=2 & hero:gender=man | elder | Twice you have given up a privilege and asked that it be shared. No one claps. That is how you know it was real.
% su_cs_m_stand | count:cs_pick_stand_>=2 & hero:gender=man | elder | Twice a man’s word has been lent to someone the custom left out. The loan is made of your name. See that you are good for it.
// ---- The Elder: the picks of someone who gives no answer
% su_cs_u_break | count:cs_pick_break_>=2 & hero:gender=unspoken | elder | Twice you have declined to be sorted and stayed in the middle of the room. It is the hardest way to refuse and the one they remember longest. I hope you are being remembered kindly.
% su_cs_u_bend | count:cs_pick_bend_>=2 & hero:gender=unspoken | elder | Twice you have offered a room a word of your own for what you are. Somebody in each of those rooms wrote it down. That is how words are made: someone keeps one.
% su_cs_u_stand | count:cs_pick_stand_>=2 & hero:gender=unspoken | elder | Twice you have spoken for someone the custom has no word for. You are making the word by using it. It is a slow trade, and it is the only trade that has ever worked.
// ---- The company: Ren Qiao, Gu Hanzhen, Lin Yuan, Duan Wuyi, Hao Lan
% cs_ren_woman | bond:ren>=-100 & count:cs_pick_break_>=2 & hero:gender=woman | ren | I kept a bridge fifteen years and never once let a woman take the watch. I have been wrong about that in a quiet way. You are the reason I am thinking about it.
% cs_ren_man | bond:ren>=-100 & count:cs_pick_bend_>=2 & hero:gender=man | ren | I have given up a seat or two myself, in the old garrison, for less. It is harder than the drill. Keep at it.
% cs_ren_unspoken | bond:ren>=-100 & count:cs_door_>=3 & hero:gender=unspoken | ren | I was never taught what to call someone in your position. I call you friend of the bridge, which is what I call those I would stand a watch beside. I hope it will do.
% cs_gu_woman | bond:gu>=-100 & count:cs_pick_stand_>=2 & hero:gender=woman | gu | My mother keeps a stall, and was told she does it for pin money. She earned our whole winter on it. You are like her, which is the highest thing I know how to say.
% cs_gu_man | bond:gu>=-100 & count:cs_pick_keep_>=3 & hero:gender=man | gu | I always took the first seat I was shown. Then I watched you notice the second one. I have been looking at chairs ever since. It is dreadful.
% cs_gu_unspoken | bond:gu>=-100 & count:cs_pick_break_>=2 & hero:gender=unspoken | gu | In the village we had a person like you, who sat in the doorway. Everyone said it was odd, and everyone sat in the doorway at the harvest feast. I think of that, now.
% cs_lin_woman | bond:lin>=-100 & count:cs_door_>=4 & hero:gender=woman | lin | I have been going through the archive’s cards. There are eleven thousand for men and three thousand for women, and the women’s are filed in the margin. I am sorry. I am moving them.
% cs_lin_man | bond:lin>=-100 & count:cs_door_>=4 & hero:gender=man | lin | I have been going through the archive’s cards. The men’s were filed in the column and the women’s in the margin. I am sorry I never noticed. I wondered whether you had.
% cs_lin_unspoken | bond:lin>=-100 & count:cs_door_>=3 & hero:gender=unspoken | lin | The archive has eleven thousand cards and no category for you. I have started a drawer. I have called it Unfiled, and I mean it as praise.
% cs_duan_woman | bond:duan>=-100 & count:cs_pick_break_>=2 & hero:gender=woman | duan | I had always thought the law of liens was blind to who held the pen. It is not. I am revising my commentary, and I thank you for the chapter.
% cs_duan_man | bond:duan>=-100 & count:cs_pick_stand_>=2 & hero:gender=man | duan | A man who lends his name to the unregistered is committing a small, brave irregularity. I shall note it, and I shall note that I approve.
% cs_hao_woman | bond:hao>=-100 & count:cs_pick_stand_>=2 & hero:gender=woman | hao | I draw the margins now. Everyone leaves the margins out, and the margins are where the people are.
% cs_hao_unspoken | bond:hao>=-100 & count:cs_pick_bend_>=2 & hero:gender=unspoken | hao | I have been trying for a week to draw you, and I keep drawing the room. It has something to do with where you stand in it. I think I shall go on.
// ---- The company: Mei Qiu, Bao Er, Lu Yan, Shu Ning
% cs_mei_woman | bond:mei>=-100 & count:cs_door_>=5 & hero:gender=woman | mei | I put my sash on the floor of the Round Hall because a delegate told me which side to wear it on. You keep choosing your own side. I should like to say I taught you. I did not.
% cs_mei_man | bond:mei>=-100 & count:cs_door_>=5 & hero:gender=man | mei | Men have held doors open for me my whole career, and not one has asked what I was trying to go through. You do. I have noticed it, and I keep a list of what I notice.
% cs_baoer_unspoken | bond:baoer>=-100 & count:cs_door_>=3 & hero:gender=unspoken | baoer | I sing the old dirges, the ones with no she or he in them, and I have always sung them for people like you. Here is a verse. It has your name in it, whichever you pick.
% cs_baoer_woman | bond:baoer>=-100 & count:cs_pick_break_>=2 & hero:gender=woman | baoer | I was told a woman’s voice was too sharp for a funeral, so I made a funeral for sharp voices. It pays double. Come and cry in the first row.
% cs_luyan_man | bond:luyan>=-100 & count:cs_pick_stand_>=2 & hero:gender=man | luyan | I have patients who would not be seen by a man and patients who would not be seen by a woman, and I keep both kinds alive. You would make a good nurse. Do not tell the physicians.
% cs_luyan_woman | bond:luyan>=-100 & count:cs_door_>=4 & hero:gender=woman | luyan | The physicians gave me the red door and I took the grey, and the sixty-three beds are better for it. You are the first person to ask me which I wanted.
% cs_shu_unspoken | bond:shu>=-100 & count:cs_pick_bend_>=2 & hero:gender=unspoken | shu | I have cut seals for every name the registers allow. I have never once been asked for a name the registers do not. When you have one, I will cut it, and I will not charge.
// ---- The company: Mengjiao, Ah Zhi, Tian, Qiu, Yue, Odval, Hanming
% cs_mengjiao_woman | bond:mengjiao>=-100 & count:cs_door_>=3 & hero:gender=woman | mengjiao | I listened for fifteen years to a house that wrote its daughters in the margin. You have been walking the margins out loud. I can hear it from down here, and it is the best thing I have heard.
% cs_mengjiao_man | bond:mengjiao>=-100 & count:cs_door_>=3 & hero:gender=man | mengjiao | Fifteen years of listening, and I never once heard a man ask what his chair was made of. You ask. It is the sound of a floor creaking, and it means somebody is about to move it.
% cs_mengjiao_unspoken | bond:mengjiao>=-100 & count:cs_door_>=3 & hero:gender=unspoken | mengjiao | The Law kept two columns and I listened to both. Neither of them ever said your name, and I have heard it anyway, in the gap between them. It has a good sound. Do not let anyone tune it.
% cs_ahzhi_woman | bond:ahzhi>=-100 & count:cs_pick_break_>=2 & hero:gender=woman | ahzhi | Mother said you were the one who would break the rule. I thought she was being poetic. I have just watched you do it twice, in daylight, and I would like it known that I owe her an apology.
% cs_ahzhi_man | bond:ahzhi>=-100 & count:cs_pick_bend_>=2 & hero:gender=man | ahzhi | I carry things for a living and I notice who is let to put them down. You give your seat up. I am not saying it is brave. I am saying it makes the ferry lighter.
% cs_tian_woman | bond:tian>=-100 & count:cs_pick_stand_>=2 & hero:gender=woman | tian | You keep standing up for people who are not you. I used to think that was soft. Moth says it is the opposite. Moth is four and I have stopped arguing with her.
% cs_tian_man | bond:tian>=-100 & count:cs_pick_break_>=2 & hero:gender=man | tian | They told me a man does not carry the lantern at a funeral and I said then who. You carried it. I held my tongue, and it was the hardest thing I did all week.
% cs_qiu_unspoken | bond:qiu>=-100 & count:cs_door_>=3 & hero:gender=unspoken | qiu | *I keep a lamp for people the harbour has no word for. It is not a rule. Nobody asked me to. It has your colour.*
% cs_yue_woman | bond:yue>=-100 & count:cs_door_>=4 & hero:gender=woman | yue | In the river provinces a woman who runs cargo is called a smuggler and a man who runs it is called a merchant, and the cargo is the same cargo. You walk through doors like I run the grey cloth: as if nobody had thought to guard them.
% cs_yue_man | bond:yue>=-100 & count:cs_door_>=4 & hero:gender=man | yue | I know exactly what a man in your boots is let to carry through a gate without a paper. You hand most of it to whoever is behind you. It is the cleverest smuggling I have seen.
% cs_odval_unspoken | bond:odval>=-100 & count:cs_pick_bend_>=2 & hero:gender=unspoken | odval | On the Steppe a Listener is a Listener, and nobody asks which bench. I am sorry it is not so for you here. I will ask Tamar whether a Listener may adopt a custom the way a tent adopts a stray.
// ---- The Elder: the main line turns
% su_cs_main_first | count:cs_main_>=1 | elder | You met the mountain as the person you are, at the first turning, and not as the person it expected. I am noting it. I shall not tell you what I think of it until you have done it twice more.
`;
export const parsedCustomRemarks = () => parseRemarks(SOURCE, "custom/remarks");
