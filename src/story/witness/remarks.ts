import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the things the hero has done in front of the keepers of the Witness Roads.
 * Each is said once, a few decisions after the deed counts, and the first whose conditions hold is the one said. Counts read the
 * global flags the deeds set (`wr_vouch_…`, `wr_confess_…`, `wr_conceal_…`, `wr_ask_…`) and the roads finished (`wr_done_…`).
 * The more particular a remark, the earlier it stands, so the Elder names the pattern before she names the single deed.
 */
const SOURCE = String.raw`
// ---- The Elder: patterns first
% su_wit_all_four | count:wr_vouch_>=1 & count:wr_confess_>=1 & count:wr_conceal_>=1 & count:wr_ask_>=1 | elder | You have used my name, told the truth, bought a silence and asked to be read, all in front of the keepers. I do not know another person who has tried all four. I do not know whether you are brave or whether you are collecting.
% su_wit_hid_and_named | count:wr_conceal_>=2 & count:wr_vouch_>=2 | elder | Twice you have asked a keeper to forget you, and twice you have given them my name to remember. A person cannot be both unknown and vouched for. Choose which of the two you are, and tell me.
% su_wit_hiding_often | count:wr_conceal_>=4 & suspicion>=40 | elder | Four keepers have had your coin to leave you out of their books. I did not need to ask what you meant to hide. I only need to know how much more of it there is.
% su_wit_hiding_three | count:wr_conceal_>=3 | elder | Three pages are missing from three ledgers. I am too old to think it a coincidence and too fond of you to think it a plan. Tell me what is on them.
% su_wit_honest_often | count:wr_confess_>=4 & trust>=40 | elder | Four keepers have heard you confess, and not one of them has used it against you. I find I am envious of how little you are afraid of being known.
% su_wit_honest_cold | count:wr_confess_>=3 & trust<=10 | elder | Three times you have told a stranger the truth about yourself, and I have heard it from the strangers. I should like, one day, to be a stranger to you, if it would make you honest with me.
% su_wit_read_often | count:wr_ask_>=4 | elder | You have had four keepers read you your own page. Most people never ask once. I wonder whether you are looking for an opinion of yourself you can live with, or for one you can argue with.
% su_wit_fear_known | fear>=40 & count:wr_done_>=3 | elder | The keepers say I am frightened, and that you are the cause. They say it as one reports the weather. I would be obliged if you did not confirm it.
% su_wit_suspicion_known | suspicion>=55 & count:wr_done_>=3 | elder | A keeper told me that you are being watched by the Law Hall. I said that was strange, since I am the Law Hall, and I had not noticed that I was watching.
% su_wit_word_travels | count:wr_done_>=40 | elder | You have been written by every keeper on every road. I think there is no one left in the sect, the river or the grass who has not got a page on you. I will not ask what they say. I have decided to read it for myself, when this is over.
% su_wit_word_twenty | count:wr_done_>=20 | elder | Twenty keepers. I have spent my life being careful what is written about me, and you have given twenty strangers a pen. Either you are very innocent or very sure.
% su_wit_word_ten | count:wr_done_>=10 | elder | Ten of the keepers have written you down. They talk to one another, you know. By now there is a version of you walking about the roads that you have never met. I hope you like him, or her, or whatever it is.
% su_wit_word_five | count:wr_done_>=5 | elder | You have sat with five keepers now. They begin to say the same things about you in different handwriting. That is how a reputation starts, and it cannot be unstarted.
// ---- The Elder: single deeds, by how much she trusts the hero
% su_wit_vouch_warm | count:wr_vouch_>=1 & trust>=50 | elder | A keeper told me you gave my name as your surety. I should have been angry. I am told I am not very good at it, where you are concerned.
% su_wit_vouch_thin | count:wr_vouch_>=1 & trust<=39 | elder | My name is in a stranger’s ledger because you put it there. You were allowed to. Do not mistake that for being encouraged.
% su_wit_confess_one | count:wr_confess_>=1 | elder | I hear you told a keeper what you had done. It is a strange way to go about it, to confess to the one person who cannot forgive you. I take it as practice.
% su_wit_conceal_one | count:wr_conceal_>=1 | elder | A keeper took your coin to forget your face. I did not ask what the price was. I asked only what the face would have said.
% su_wit_ask_one | count:wr_ask_>=1 | elder | You asked a keeper to read you your own page. I have always been afraid to ask what mine says. I should be grateful if you would tell me, one day, whether it was as bad as you feared.
// ---- The company
% wit_gu_confess | bond:gu>=-100 & count:wr_confess_>=1 | gu | You told a stranger what you did? My mother says you tell the worst first, so the rest looks better. I think you told it because it was heavy. I did the same, at the quarry. It helped.
% wit_gu_conceal | bond:gu>=-100 & count:wr_conceal_>=1 | gu | You paid someone to be quiet. I have paid for that too, with coin I did not have. It does not stay bought. It only stays quiet, which is not the same.
% wit_ren_vouch | bond:ren>=-100 & count:wr_vouch_>=1 | ren | You used her name. I have stood a bridge on that name for fifteen years. It carries weight. It also carries a cost. Make sure you can pay it.
% wit_ren_conceal | bond:ren>=-100 & count:wr_conceal_>=1 | ren | Silence has a price. I paid it once, at the lantern. It does not get cheaper.
% wit_lin_ask | bond:lin>=-100 & count:wr_ask_>=1 | lin | You asked what the page says about you. I have kept pages for others all my life and never dared to ask for my own. I am sorry. I think you are braver than I am. I will think about it.
% wit_lin_done | bond:lin>=-100 & count:wr_done_>=6 | lin | I am sorry, I have been counting the keepers you have visited. Six now. It is a good number for a roll. I would like to see the pages, if they will let me, to check their spelling.
% wit_hao_sketch | bond:hao>=-100 & count:wr_done_>=4 | hao | I have drawn four keepers from memory, and every one of them has drawn you. I will not show you the sheets. They are unfair. They are all in your favour, and a draughtsman distrusts that.
% wit_duan_conceal | bond:duan>=-100 & count:wr_conceal_>=2 | duan | Twice you have paid for a page to go missing. In the Concord’s law that is one offence, repeated. I tell you now, as a courtesy, that I shall not be able to forget it.
% wit_mei_vouch | bond:mei>=-100 & count:wr_vouch_>=2 | mei | Two keepers have the Elder’s name beside yours. I was an inspector of seals. A name is a seal. Used twice, it is a habit, and a habit is a thing a seal does not survive.
% wit_yue_conceal | bond:yue>=-100 & count:wr_conceal_>=2 | yue | You paid twice to be forgotten. I run boats for people who want that, and I will say it is cheaper to be someone no one wants to remember. But it takes longer.
% wit_mengjiao_done | bond:mengjiao>=-100 & count:wr_done_>=12 | mengjiao | The keepers are humming, did you know? All along the road. They have started to hum the same tune. I think it is my tune. I think you taught it to them, without meaning to.
% wit_odval_done | bond:odval>=-100 & count:wr_done_>=30 | odval | You have sat with more fire-keepers than I have in nineteen years. They write you down in books I cannot read. I find I do not mind being the one who walks beside the page.
`;

export const witnessRemarks = SOURCE;
export const parsedWitnessRemarks = () => parseRemarks(SOURCE, "witness/remarks");
