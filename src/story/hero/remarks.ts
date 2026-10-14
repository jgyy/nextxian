/**
 * What the people the hero travels with say about who the hero is, once each, when the hero's looks, dress, birth,
 * trade or realm gives them something to say. A companion speaks only after they have been met (their bond exists), and
 * never within a few decisions of another remark. Lines are `% id | conditions | speaker | line`.
 */
export const heroRemarks = String.raw`
// ---- Ren Qiao: a soldier’s courtesy, few words
% hr_ren_outcast | bond:ren>=-100 & hero:status=outcast | ren | I have stood the bridge over outcasts before. They climb as if the stone might refuse them. It will not refuse you.
% hr_ren_armour | bond:ren>=-100 & hero:attire=armour | ren | Levy scale, laced for a smaller frame and let out. You wear someone else’s drill. I will not ask whose.
% hr_ren_soldier | bond:ren>=-100 & hero:background=soldier | ren | You walked off a line. I saw it in the way you took the stair. I will not report it. I held a lantern once for an order I should not have followed.
% hr_ren_scarred | bond:ren>=-100 & hero:looks=scarred | ren | Burns heal ugly or they heal honest. Yours healed honest. So did mine.
% hr_ren_woman | bond:ren>=-100 & hero:gender=woman | ren | The woman who taught me qi in the outer court was the best teacher I had. I say it so you know I am not surprised by you.
% hr_ren_silk | bond:ren>=-100 & hero:attire=silk | ren | That silk will not last the bridge. Tie the sleeves up. Nobles have borrowed my sash before. They give it back dirty and thank me, and I like them better for it.
% hr_ren_realm | bond:ren>=-100 & realm>=3 | ren | I keep a bridge, and I do not know the word for what you are now. The planks do not creak when you cross. I noticed.
// ---- Gu Hanzhen: earnest, rough from disuse
% hr_gu_soldier | bond:gu>=-100 & hero:background=soldier | gu | You were in the levy? My brother was taken by the levy when I was four. Did you ever march with a man called Gu Hanming? No. No, of course you did not. It is a large army.
% hr_gu_farmer | bond:gu>=-100 & hero:background=farmer | gu | Your hands are like my mother’s. She says a paddy hand can hold a bowl of tea with water in the other hand and never spill either. I want to see that.
% hr_gu_noble | bond:gu>=-100 & hero:status=noble | gu | My village has never seen a banner except on the levy’s cart. I do not know how to talk to someone with one. I am trying not to stare.
% hr_gu_outcast | bond:gu>=-100 & hero:status=outcast | gu | They struck you out of the registers? They struck my brother’s name out of ours when the levy came. It was the first time I saw my mother not cry.
% hr_gu_striking | bond:gu>=-100 & hero:looks=striking | gu | People at the village would call you a spirit. They would leave a bowl of rice at your door. I am not saying you are one. I am saying they would.
% hr_gu_frail | bond:gu>=-100 & hero:looks=frail | gu | I can carry your pack. I am not saying you cannot. I carried my mother’s baskets for ten years. I am only very good at it.
% hr_gu_realm | bond:gu>=-100 & realm>=2 | gu | You have a foundation now. I can feel it, like standing next to a stove. I did not think it would be so warm.
// ---- Lin Yuan: apologetic, precise
% hr_lin_scholar | bond:lin>=-100 & hero:background=scholar | lin | You read the way I do, in strips, with the thumb under the line. Nobody taught me. I thought I had invented it. I am sorry. I am glad I did not.
% hr_lin_scholarrobe | bond:lin>=-100 & hero:attire=scholar | lin | Ink on both cuffs. Sorry, I should not look. It is only that nobody comes into the archive with real ink on them. They come with silk.
% hr_lin_orphan | bond:lin>=-100 & hero:background=orphan | lin | I was raised by the archive, so I am not an orphan, exactly. I think. I would be grateful if you told me, if you know the difference.
% hr_lin_gentry | bond:lin>=-100 & hero:status=gentry | lin | Gentry families have wanted copies of the sealing orders for years. I have always said no. I am saying it now in advance, so you will not have to ask.
% hr_lin_man | bond:lin>=-100 & hero:gender=man & age<=40 | lin | I am sorry. I thought you were going to be older. Clerks in the archive are all older. It is probably a prejudice I should look into.
% hr_lin_realm | bond:lin>=-100 & realm>=3 | lin | The wards in the lower stacks bend away from you. I measured it twice. I am sorry. I will stop measuring if it bothers you.
// ---- Duan Wuyi and Hao Lan: the Censors
% hr_duan_noble | bond:duan>=-100 & hero:status=noble | duan | A noble house, and a name that will be on my docket within the year, whatever you do. I tell you now so that you will not take my courtesy for a favour.
% hr_duan_outcast | bond:duan>=-100 & hero:status=outcast | duan | Struck out, you say. I have read nine hundred pages of the law of liens and I can tell you that an outcast has more standing before a principled court than a lord before a corrupt one.
% hr_duan_gentry | bond:duan>=-100 & hero:status=gentry | duan | You were raised to a magistrate’s table. I was raised to read the law the magistrate cited. We are, I think, going to disagree pleasantly.
% hr_duan_realm | bond:duan>=-100 & realm>=4 | duan | A Nascent Soul answers to the Concord’s register, whether it would like to or not. I will try to enter you in it as gently as the law allows.
% hr_hao_looks | bond:hao>=-100 & hero:looks=striking | hao | I have sketched you three times and torn them up. The face is easy. It is what the face is hiding that I cannot get on the page.
% hr_hao_scarred | bond:hao>=-100 & hero:looks=scarred | hao | May I draw the scar? It is the most honest line on you. I will not show it to anyone.
% hr_hao_plain | bond:hao>=-100 & hero:looks=plain | hao | You have a face I cannot draw twice the same. It is a gift to a Censor and a torment to a draughtsman.
% hr_hao_woman | bond:hao>=-100 & hero:gender=woman | hao | When I joined the Censors they told me a woman’s sketch would never be admitted as evidence. I draw anyway. I thought you would like to know that someone does.
// ---- Mengjiao, Mei Qiu and the Reserve
% hr_mengjiao_plain | bond:mengjiao>=-100 & hero:looks=plain | mengjiao | You have a face that the mist could mistake for anyone’s. I think that is why it let you through.
% hr_mengjiao_orphan | bond:mengjiao>=-100 & hero:background=orphan | mengjiao | I listened to a great many children on the river stairs, from down here, where listening is all there is. I do not say it was you. I say it was a great many.
% hr_mengjiao_noble | bond:mengjiao>=-100 & hero:status=noble | mengjiao | A banner. How lovely. The dark has not seen a banner in fifteen years, and it has never been so polite about one.
% hr_mengjiao_realm | bond:mengjiao>=-100 & realm>=4 | mengjiao | You hum when you walk now. Did you know? It is the first note of my tune, and nobody taught it to you.
% hr_mei_armour | bond:mei>=-100 & hero:attire=armour | mei | I put my sash on the floor of the Round Hall so I would never have to wear a uniform again. You wear yours as if it were a choice. I envy that.
% hr_mei_scholar | bond:mei>=-100 & hero:background=scholar | mei | A copyist’s apprentice. I used to take your guild’s forgeries off the Concord’s desks. Some of them were better than the originals, and that was always the problem.
% hr_mei_status | bond:mei>=-100 & hero:status=gentry | mei | Gentry. I was an inspector of seals for nineteen years, and I can tell you what a seal weighs when it is borne by someone who has never needed one.
// ---- The cots: Bao Er, Qiu, Shu Ning, Tian, Ah Zhi, Lu Yan
% hr_baoer_rags | bond:baoer>=-100 & hero:attire=rags | baoer | Patched hemp! I love it. I once sang at a funeral in worse and the family wept so hard they paid double. Wear it to the next one.
% hr_baoer_silk | bond:baoer>=-100 & hero:attire=silk | baoer | I could sell that sleeve for a month of songs. I will not. I only want you to know that I did the sum.
% hr_baoer_merchant | bond:baoer>=-100 & hero:background=merchant | baoer | A trader’s runner! You count everything, so tell me: how many of my lies have you caught? Do not say none. I would be insulted.
% hr_baoer_man | bond:baoer>=-100 & hero:gender=man | baoer | You have the face of a man who has never been properly lied to. Let me fix that. Lie one: I never lie.
% hr_qiu_scholar | bond:qiu>=-100 & hero:attire=scholar | qiu | *You have ink on your cuffs. So do I. It is chalk, but it is the same sin.*
% hr_qiu_frail | bond:qiu>=-100 & hero:looks=frail | qiu | *You are tired. Sit by the lamp. It is kinder to people who sit still.*
% hr_shu_noble | bond:shu>=-100 & hero:status=noble | shu | I have forged the seals of three noble houses. I will say nothing more. Do not ask which. I will not say thank you for not asking.
% hr_shu_healer | bond:shu>=-100 & hero:background=healer | shu | A healer’s hands. Those hands never trembled when they had to hold something shut. I could use a pair like that in the workshop. Do not repeat that.
% hr_tian_soldier | bond:tian>=-100 & hero:background=soldier | tian | A soldier? Good. Then you know how to hold a knife properly. Show me. No, not like that. Like you mean it.
% hr_tian_frail | bond:tian>=-100 & hero:looks=frail | tian | You look like you would fall over if Moth sneezed. Moth does not sneeze. I am only saying.
% hr_ahzhi_farmer | bond:ahzhi>=-100 & hero:background=farmer | ahzhi | You carry things the way I do. You do not hurry and you do not put them down. It is the only way to cross a river with a load.
% hr_ahzhi_armour | bond:ahzhi>=-100 & hero:attire=armour | ahzhi | You will not float in that. I am telling you now so you do not find out in the water.
% hr_luyan_healer | bond:luyan>=-100 & hero:background=healer | luyan | You are a healer’s helper. Of course you are. You looked at the leaking roof first, and then at the beds. I have sixty-three beds and no one else who looks in that order.
% hr_luyan_frail | bond:luyan>=-100 & hero:looks=frail | luyan | Sit down. I am not asking as a physician. I am asking as a person who has watched sixty-three people refuse to sit down before they fell.
% hr_luyan_woman | bond:luyan>=-100 & hero:gender=woman | luyan | I have trained eleven healers on this roof. Nine were women, and I am saying it so you will know who built this place.
// ---- Madam Ash, Kou, Mi, Yue, Hanming, Odval
% hr_ash_noble | bond:ash>=-100 & hero:status=noble | ash | A noble house. I sold paper to your grandfather’s steward for forty years. I am telling you so you will not think I am flattering you when I am polite.
% hr_ash_outcast | bond:ash>=-100 & hero:status=outcast | ash | The struck-out are my people, you know. I am not recruiting. I am only saying that I notice when someone stands as we do.
% hr_ash_scholar | bond:ash>=-100 & hero:background=scholar | ash | A copyist’s apprentice. I was a Censor, and I recognise a hand that has been taught to be honest and has learned to be careful anyway.
% hr_kou_soldier | bond:kou>=-100 & hero:background=soldier | kou | A levy deserter. Good. So am I. The difference is that I admit to it. Do you? No? Then you are not as tired as you look.
% hr_kou_armour | bond:kou>=-100 & hero:attire=armour | kou | Tighten your left strap. Do it now. A loose strap kills more men than a sword does, and nobody ever puts it on the stone.
% hr_mi_looks | bond:mi>=-100 & hero:looks=plain | mi | You have a face the dead would not recognise. It is a very good face for walking among them.
% hr_mi_orphan | bond:mi>=-100 & hero:background=orphan | mi | I read orphans the longest. They are the only ones who have written their own names more than once.
% hr_yue_merchant | bond:yue>=-100 & hero:background=merchant | yue | A trader’s runner. Then you know what a promise is worth. I am only asking you to value mine at what it cost me.
% hr_yue_orphan | bond:yue>=-100 & hero:background=orphan | yue | Port orphans make the best crews. They know when a stranger is about to lie, and they know when to look the other way. I should know. I hired thirty.
% hr_yue_woman | bond:yue>=-100 & hero:gender=woman | yue | A woman who climbs mountains instead of waiting at ports. You and I are going to be insufferable together.
% hr_hanming_soldier | bond:hanming>=-100 & hero:background=soldier | hanming | A levy man. I know the drill. I know the oath. I know what it does to the hands. Tell me yours still shake in the night.
% hr_hanming_farmer | bond:hanming>=-100 & hero:background=farmer | hanming | I was a paddy hand before the levy took me. I can tell by your wrists. Nobody else’s wrists are like that. We carried the whole world on them.
% hr_odval_plain | bond:odval>=-100 & hero:looks=plain | odval | I sat on a hill for four days to listen to you before you arrived. You sound like nobody I have heard. It is the best compliment I know.
% hr_odval_healer | bond:odval>=-100 & hero:background=healer | odval | You listen with your hands. It is rarer than listening with ears. I have asked the Ninth how you do it, and the Ninth does not know.
// ---- The cast on realm
% hr_realm_gu_core | bond:gu>=-100 & realm>=4 | gu | You are a Nascent Soul and you still wait for me at the bottom of every stair. I do not know why that makes me want to cry.
% hr_realm_ren_sage | bond:ren>=-100 & realm>=5 | ren | I do not salute cultivators. I am saluting now. Do not look at me.
`;
