import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the tribulations the hero has sat or turned from, and about how the sect bows. Each is said once, a few
 * decisions after it becomes true, and the first whose conditions hold is the one said, so a pattern is named before a single deed. Counts read the flags the
 * Tribulation Roads set: the rehearsals weathered (`tb_won_…`), those that burned (`tb_lost_…`), the gates turned back from (`tb_fled_…`) and the roads
 * finished (`tb_done_…`). The realm is read too, because the thing the sect does about a hero it cannot match is to bow.
 */
const SOURCE = String.raw`
// ---- The Elder: the rehearsals
% su_tb_won_1 | count:tb_won_>=1 | elder | You stood a rehearsal of a tribulation and came out of it with your feet under you. It is not the thing itself. It is the nearest a body can come to knowing what the thing will ask, and most do not go to the trouble.
% su_tb_won_3 | count:tb_won_>=3 | elder | Three trials weathered. I have seen a Core cultivator with fewer, and she was the better for them. Do not mistake the rehearsal for the sky. The sky does not rehearse.
% su_tb_won_6 | count:tb_won_>=6 | elder | Six rehearsals weathered, and not one of them for show. The wardens on the mountain have begun to speak of you in the voice they keep for the people they think will be written. I should be careful of that voice.
% su_tb_won_12 | count:tb_won_>=12 | elder | Twelve trials stood. I have stood three. If I seem short with you, it is that I am doing arithmetic.
% su_tb_lost_1 | count:tb_lost_>=1 | elder | A rehearsal burned you, and you came and told me. I was burned by mine, and told nobody for eleven years. I have decided that the telling is the better half of the trial.
% su_tb_lost_3 | count:tb_lost_>=3 | elder | Three trials have scorched you. Nobody scorches that often by accident. Either you are sitting them too early, or you are sitting them without the thing they ask for. Find which.
% su_tb_fled_1 | count:tb_fled_>=1 | elder | You went to the gate of a tribulation and turned back. I do not call it cowardice, and I should dislike anyone who did. A person who knows the hour for it is a person who will live to sit it.
% su_tb_fled_3 | count:tb_fled_>=3 | elder | Three gates turned back from. I would ask only that one of them be the last. A trial postponed too often becomes a story you tell, and the sky has no patience with stories.
// ---- The Elder: what the sect does about a rise
% su_tb_bow_low | count:tb_done_>=2 & realm>=2 & realm<=3 | elder | You will have noticed the keepers have begun to rise a half-beat sooner. Do not take it for love. It is a unit of measure. The sect bows to a realm the way a farmer bows to weather.
% su_tb_bow_mid | count:tb_done_>=2 & realm>=4 & realm<=5 | elder | The keepers bow lower to you than to anyone I have seen in years. I would have you remember that it is the realm they are bowing to, and that they would do the same to a stone with a Soul in it.
% su_tb_bow_high | count:tb_done_>=2 & realm>=6 | elder | You are bowed to by people who do not see your face. I know it. I was bowed to once, at twenty, by a man who then forgot my name. Tell me, when the hall kneels, whether you hear anyone breathing.
% su_tb_roads_4 | count:tb_done_>=4 | elder | Four tribulation roads. I have been trying to decide whether you are climbing the sect or learning what it asks. I have concluded that it is the same labour, done at different speeds.
% su_tb_roads_16 | count:tb_done_>=16 | elder | Sixteen keepers have received you, and each has bowed by a different rule. I was taught the first rule at nine and the others by being wrong. You, I think, will not have to be wrong as often.
% su_tb_roads_32 | count:tb_done_>=32 | elder | Thirty-two keepers of thirty-two tribulations. You know how the sect bows at every height. I wish you would write it down. I wish, more, that you would do something about it.
% su_tb_weathered_all | count:tb_won_w1_>=1 & count:tb_won_w2_>=1 & count:tb_won_w3_>=1 & count:tb_won_w4_>=1 & count:tb_won_w5_>=1 & count:tb_won_w6_>=1 & count:tb_won_w7_>=1 & count:tb_won_w8_>=1 | elder | You have stood every tribulation there is, in rehearsal, and I am told you stood them well. There is nothing left on the mountain to try you. I am sorry for it. It is a lonely thing to be ready.
// ---- The company
% tb_ren | bond:ren>=-100 & count:tb_won_>=2 | ren | A bridge ward bows to a realm, and I have bowed to it for fifteen years. I find I am more interested in the people who stood the trials than in the ward. They did it with nothing to bow to.
% tb_gu | bond:gu>=-100 & count:tb_lost_>=1 | gu | I read once that the scorch is what the sky leaves so you can find the place again. I do not know whether it is true. I put a hand on mine, in the night, to check it was there.
% tb_lin | bond:lin>=-100 & count:tb_done_>=6 | lin | I have started a card for every keeper who has received you. There are six in the drawer. Each one bowed differently. I have not been able to decide which of them meant it.
% tb_duan | bond:duan>=-100 & realm>=4 & count:tb_done_>=2 | duan | The Concord’s rules of precedence assign a bow to each realm, and I have always thought them dry. I begin to see that they were only written down after a great many people had learned, painfully, what it costs to be bowed to wrongly.
% tb_hao | bond:hao>=-100 & count:tb_won_>=2 | hao | I have been drawing the trial-mats. Everyone draws the sky. The mats are where the people are.
% tb_mei | bond:mei>=-100 & count:tb_lost_>=1 | mei | Scorched, and you told us. Captains take the burn and keep the log. It is why the fleet trusts the log, and why the fleet trusts you, and I mean it kindly.
% tb_baoer | bond:baoer>=-100 & count:tb_done_>=8 | baoer | There are funeral songs for those who sat the trial and went on, and different ones for those who sat it and stayed. I have started to learn both. It is the beginning of the singer’s apprenticeship.
% tb_luyan | bond:luyan>=-100 & count:tb_lost_>=2 | luyan | Two burns, and both dressed. I would like to say you will not do a third. I have been a physician too long to promise it. I have a bandage for you, and the habit of not asking.
% tb_shu | bond:shu>=-100 & count:tb_won_>=4 | shu | I have cut a seal for each of the four trials you stood. They are very small. A seal for a thing that cannot be sealed is the only kind I enjoy cutting.
% tb_mengjiao | bond:mengjiao>=-100 & realm>=5 & count:tb_done_>=4 | mengjiao | I listened for fifteen years to a house that bowed to what it feared. You are being bowed to by people who do not fear you. It is a different sound, and I hope you know the difference.
% tb_ahzhi | bond:ahzhi>=-100 & count:tb_fled_>=1 | ahzhi | My mother says the river does not mind a boat that waits for the weather. I have been thinking about the waiting. It is not the same as being afraid, though from the shore it looks the same.
% tb_tian | bond:tian>=-100 & count:tb_won_>=3 | tian | Moth says you should have a lantern for each trial. She says it solemnly. I have started making them out of paper. I have made three so far, and the last one is crooked, and I am keeping that one.
% tb_qiu | bond:qiu>=-100 & count:tb_done_>=6 | qiu | *The lamp I keep for those the harbour has no word for now has a second wick. It burns at the height of your realm. I did not choose it. It simply started.*
% tb_yue | bond:yue>=-100 & realm>=6 & count:tb_done_>=2 | yue | In the river provinces we have an old saying about the pole at the front of the boat. The higher you stand, the fewer people can see where it is going. Be careful at the bow, Wanderer. Everyone is looking at you, and nobody at the water.
% tb_odval | bond:odval>=-100 & realm>=5 & count:tb_done_>=2 | odval | On the Steppe we do not bow to a realm. We bow to the horse that carried the cultivator. I have started to see the sense of it. The horse, at least, knows what the ride cost.
`;
export const parsedTribulationRemarks = () => parseRemarks(SOURCE, "tribulation/remarks");
