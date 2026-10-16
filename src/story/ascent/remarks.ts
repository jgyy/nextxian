import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the layers the hero has climbed and the walls that have held them. Each is said once, a few decisions after
 * it becomes true, and the first whose conditions hold is the one said, so the ladder is read from the bottom. A level is `realm * 10 + layer`: the Fifth Layer
 * of a realm is level 4 more than its tens, the Tenth is 9 more. Counts read the flags the engine and the Breakthrough Roads set: the methods practised
 * against a wall (`bwp_…`), the walls that threw the hero back (`bwf_…`) and the walls that held them for want of qi or insight (`bwh_…`).
 */
const SOURCE = String.raw`
// ---- The Elder: the middle and the top of every realm
% su_as_first | level>=1 | elder | A layer. It is a small thing, and the first of a hundred. Most people who start up the ladder cannot name the second.
% su_as_mid_0 | level>=4 | elder | Five layers of the body, and it is already more yours than mine. A mortal who learns where the pain lives is half a cultivator. The other half is a thread of cold.
% su_as_top_0 | level>=9 | elder | The Tenth Layer of the body, the last a mortal has. The next wall is not a layer. It asks the qi of heaven and earth to stay, and it does not stay for a hero who has only been strong.
% su_as_mid_1 | level>=14 | elder | Halfway up the thread. The qi runs now, and I know that look: a hero who thinks the wall has been passed because the water is moving. It has not. Water is only the next wall wearing a better coat.
% su_as_top_1 | level>=19 | elder | The brim. The vessel is full, and the wall in front of you now is the first that asks you to change what you are made of and not only how much you hold.
% su_as_mid_2 | level>=24 | elder | A foundation laid to the Floor. I can see the courses from here. A crooked one would have shown by now, so you have laid them true, or you have hidden the crookedness well. Both are skills.
% su_as_top_2 | level>=29 | elder | A foundation to the Keystone. The next wall is the one I do not speak of. I will say that a house can be crushed into a jewel and live, and that I did not come out of mine whole.
% su_as_mid_3 | level>=34 | elder | The gold is on, leaf by leaf. A core is a patient thing, and so, I think, are you, though you would not say it. The anvil is next, and it asks what you believe.
% su_as_top_3 | level>=39 | elder | The Round of the core. Soon the soul will move behind it, like a child hearing its name through a wall. Be at home when it comes.
% su_as_mid_4 | level>=44 | elder | Five layers of the soul, and it can walk. You will feel it walk in the middle of a meal. Do not make a face. It is only learning what a floor is.
% su_as_top_4 | level>=49 | elder | The Majority of the soul. It can bear the truth of itself, and so, I think, can you. The next wall takes cords, and each cord is a person. Count them first.
% su_as_mid_5 | level>=54 | elder | Five cords cut, or five cords you could name. The silence after each is a different silence. I remember them all, and I will not say which was the loudest.
% su_as_top_5 | level>=59 | elder | Every cord but one is gone. I do not ask which. I ask only that you do not look for it with your eyes.
% su_as_mid_6 | level>=64 | elder | You are on the road, and it is a road, and the weather is the weather. Do not stand under a roof because you are tired. Stand under it because you are wise, if you are.
% su_as_top_6 | level>=69 | elder | The Threshold. You are at the door, and I have nothing left to teach you, only things to be silent about. I find the silence harder than the teaching.
% su_as_mid_7 | level>=74 | elder | Five layers of the open door. The draught comes through now, and I am old, and it is the first time in forty years that I have felt my own breath leave me for someone else.
% su_as_top_7 | level>=79 | elder | The empty doorway. The next step is the one I have never taken. I will hold the lamp, and I will not watch, and I will be listening.
% su_as_mid_8 | level>=84 | elder | The garden has a winter now, I hear, and it is yours. Be kind to it. It is the only winter in a very long noon.
% su_as_top_8 | level>=89 | elder | Lastness. You are the last who remembers what you remember, and I am one of the things you remember. I am glad of it, and do not know whom to thank.
% su_as_mid_9 | level>=94 | elder | You sit in a stone chair on a bare mountain and weigh the ant with the star. I should be afraid, and I find that I am not. It is the most restful thing I have ever known.
% su_as_top_9 | level>=98 | elder | One layer from the last. I think there is no wall above it. If you find that there is, come and tell me before you tell the sect.
// ---- The Elder: the walls themselves
% su_as_prep_1 | count:bwp_>=1 | elder | You have gone at a wall by a method and not only by hope. That is how it is done. A wall that has been practised against is a wall that has begun to know your name.
% su_as_prep_8 | count:bwp_>=8 | elder | Eight methods practised against walls, and some of them twice over. I have trained cultivators for forty years who could not have told me eight things they did to prepare.
% su_as_held_1 | count:bwh_>=1 | elder | A wall held you for want of qi, or of insight. Do not take it as an insult. It is a ledger, and the ledger said you had not the means. Go and get them, and it will say otherwise.
% su_as_fall_1 | count:bwf_>=1 | elder | A wall threw you back. Good. I do not mean that unkindly. The ones that never throw a hero have not been pushed at, and the ones that have are known better afterwards.
% su_as_fall_3 | count:bwf_>=3 | elder | Three falls, and you are still on your feet. A hero who has been thrown three times either gives up or begins to know the wall. Tell me which you are.
% su_as_fall_8 | count:bwf_>=8 | elder | Eight times the walls have thrown you, and you have stood each time. I do not say it to praise you. I say it so you will know that I have counted, and that the number is not small.
% su_as_fall_16 | count:bwf_>=16 | elder | Sixteen. I have a quiet corner of the ledger for the falls. It is the corner I read most.
% su_as_road_hubs | count:bwp_>=20 | elder | You have walked the stations of more than one road, and they have written your name on the stones. I should like to see the stones before they weather.
// ---- The company
% as_ren | bond:ren>=-100 & level>=20 | ren | A bridge is a wall that lies down. I have been thinking about that since you passed the Floor. The planks creak differently for a Builder, and I notice, and I will not say how.
% as_gu | bond:gu>=-100 & level>=30 | gu | I counted your layers in the lamplight once, on the wall, with chalk. I lost count at thirty and then I was ashamed to start again. I think it is meant to be that way.
% as_lin | bond:lin>=-100 & level>=40 | lin | I have a card for every wall you have passed and a card for every one that threw you. The second pile is thicker and the first pile is neater. I do not know which of them I like better.
% as_duan | bond:duan>=-100 & level>=50 | duan | The Concord has no column for a layer. I am proposing one. They will say a layer is not a rank. I will say that a rank is only a layer that someone has agreed to write down.
% as_hao | bond:hao>=-100 & count:bwf_>=2 | hao | I drew you after the second fall. I could not draw the wall. Nobody can. I drew your hands instead, and they are the right shape for it.
% as_mengjiao | bond:mengjiao>=-100 & level>=60 | mengjiao | I hear them, the ones you cut: faint, like a tune from the next valley. They are not unhappy. I thought you would want to know that.
% as_mei | bond:mei>=-100 & count:bwf_>=4 | mei | Four falls. A captain who loses four ships and keeps the crew is called lucky, or good. I have not decided which of the two you are, and I am not in a hurry.
% as_baoer | bond:baoer>=-100 & level>=70 | baoer | There is a song for every wall I have heard of, and none for the door you are standing at. I have started one. It has one note so far, and I am saving the others.
% as_luyan | bond:luyan>=-100 & count:bwh_>=2 | luyan | You were held twice for want of something. I would like to say it was your fault, and I cannot, and I do not think the walls are fair. They are only true.
% as_shu | bond:shu>=-100 & level>=45 | shu | I cut a seal for each realm you have crossed. The layers I can only mark with a dot. There will be a hundred dots by the end, and the seal will look like a night sky, and I do not mind.
% as_ahzhi | bond:ahzhi>=-100 & count:bwp_>=4 | ahzhi | Four ways of going at one wall is a lot of ways. My mother would say that when a boat has four oars it is time to ask where it is going.
% as_tian | bond:tian>=-100 & level>=55 | tian | Moth says you have gone up so many layers that she can see you from the roof. She wishes me to say that she is very glad and that I am not to tell you she said so.
% as_qiu | bond:qiu>=-100 & level>=65 | qiu | *The lamp for those the harbour has no word for burns at your height now. It is a hundred steps above the water, and I climbed them to trim the wick.*
% as_yue | bond:yue>=-100 & level>=75 | yue | In the river provinces we say a boat that has crossed the bar rides higher. You ride higher, and the river knows it, and it has started to look up.
`;
export const parsedAscentRemarks = () => parseRemarks(SOURCE, "ascent/remarks");
