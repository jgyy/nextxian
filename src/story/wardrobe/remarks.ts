import type { Attire } from "@/engine/hero";
import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about what the hero wears and what they do with their pack. A change of dress is read two ways: the
 * garment the hero has taken off, and the one they have put on, said a few decisions after, when the Elder has had time to see it. Counts read the flags a
 * change leaves (`wore_…`) and the flags the pack and the counters leave (`wdx_…`, `pack_…`).
 */
const NAME: Record<Attire, string> = { rags: "patched hemp", traveller: "an oiled cloak", scholar: "an ink-stained robe", silk: "embroidered silk", armour: "a scale jerkin" };

/** What the Elder sees go. */
const OFF: Record<Attire, string> = {
  rags: "You have put off the patched hemp. I had grown used to being able to tell, from across a courtyard, that you were someone with nothing to prove.",
  traveller: "You have put off the oiled cloak. The road is still on your boots, but the cloak was the part of you that said you were going somewhere.",
  scholar: "You have put off the ink-stained robe. A reader out of their robe is a very ordinary person, and I am not sure yet whether you mean to be one.",
  silk: "You have put off the silk. I noticed it go the way one notices a lamp go out in a far window: not at once, and then very much.",
  armour: "You have put off the scale jerkin. The courtyard has stopped holding its breath, and I would like to know whether you meant it to.",
};

/** What the Elder sees come. */
const ON: Record<Attire, string> = {
  rags: "Patched hemp now. The sect will not search you, and will not salute you, and will not remember it did neither. I wonder what you mean to do with being forgotten.",
  traveller: "An oiled cloak now. You look like someone who has somewhere to be that is not here. It is a good thing to look like, and a poor thing to be.",
  scholar: "An ink-stained robe now. The archive will let you in where it would stop a soldier. Try not to be surprised if it expects something of you in return.",
  silk: "Embroidered silk now. The wardens will rise before they know why. I should be careful of anything that makes a room stand up for you; it will want paying.",
  armour: "A scale jerkin now. I will not ask what for. I will ask, when the time comes, why it was needed, and I would like the answer to be short.",
};

const ATTIRES = Object.keys(NAME) as Attire[];

const transitions = ATTIRES.flatMap((from) =>
  ATTIRES.filter((to) => to !== from).map(
    (to) => `% su_wear_${from}_${to} | dressing_from_${from} & dressing_to_${to} & since:dressing_to_${to}<=6 & hero:attire=${to} | elder | ${OFF[from]} ${ON[to]}`,
  ),
).join("\n");

const SOURCE = String.raw`
// ---- The Elder: a change of dress, read from what was taken off and what was put on
${transitions}
// ---- The Elder: what a dress does to the purse
% su_wd_silk_unfed | hero:attire=silk & unfed | elder | Silk on an empty purse. I have seen it before, and it never ends in the way the wearer pictured. Sell the cloth, or eat. You cannot do both and keep the shine.
% su_wd_silk_poor | hero:attire=silk & wealth<=3 & decisions>=12 | elder | Your purse is light and your sleeve is not. The sect has a name for people who spend on the second what they ought to keep in the first, and the name is not unkind. It is only accurate.
% su_wd_armour_road | hero:attire=armour & count:wore_>=1 & realm>=3 | elder | You wear the jerkin as if it were a habit and not a statement. I begin to think it is the first. A habit is the more honest of the two.
% su_wd_rags_high | hero:attire=rags & realm>=4 | elder | You wear patched hemp, a Nascent Soul in the dress of a washerwoman’s husband. The sect finds it a rebuke. I find it, I confess, a relief.
% su_wd_scholar_deceit | hero:attire=scholar & tone:deceit>=3/8 | elder | The ink on your cuffs is honest and the last three things you told me were not. A scholar’s robe is a licence, not a guarantee. Remember which it is.
% su_wd_silk_force | hero:attire=silk & tone:force>=3/8 | elder | Silk and a hard hand. It is a combination the court has produced before, in every generation, and it has always ended with the silk stained.
% su_wd_traveller_quiet | hero:attire=traveller & tone:quiet>=4/8 | elder | You wear the cloak of a traveller and you have been waiting, lately, rather than travelling. I wonder which of the two you think the dress is for.
// ---- The Elder: how often, and what the pack has been used for
% su_wd_changes_2 | count:wore_>=2 | elder | Two coats, and I have started to catch myself looking for the third. You are a person who can be more than one thing in a courtyard. It is a talent and a risk, and it is nearly always both.
% su_wd_changes_4 | count:wore_>=4 | elder | Four garments, and I could not tell you which of them is you. I am not saying it as a charge. I am saying that if you cannot tell either, you had better find out before the Sealing does.
% su_wd_changes_5 | count:wore_>=5 | elder | You have worn all five. I did not think anyone on this mountain would trouble to. Tell me what you learned, in the ones that did not suit you.
% su_wd_bought | wdx_bought | elder | You bought a new dress, and paid for it. Few heroes spend their first stones on something they must wear before somebody. I shall watch to see who that somebody turns out to be.
% su_wd_pawned | wdx_pawned | elder | You sold a garment through a hatch. There is nothing wrong with it, and I would sell my own if I thought it would feed someone. I only wish to know what you did with the stones.
% su_wd_worked | wdx_worked | elder | You earned a wage at a counter, in an honest dress. I have known abbots who could not say the same. Be glad of it, and be quiet about it, and it will serve you.
% su_wd_forged | wdx_forged | elder | You copied a pattern you were not given, and sold it. It is a very small theft. I have found that the small ones are the ones that explain the large.
% su_pack_used | pack_used | elder | You use what you carry. I had begun to think heroes kept their pills like relics. A thing unused is a thing that the mountain has simply been holding for you.
% su_pack_sold | pack_sold | elder | You sold something out of your pack. A hero should not carry what they will not use, and I am pleased you do not. Spend the stones on what you will.
% su_pack_gifted | pack_gifted | elder | You gave me something out of your pack. I was not sure what to say, and so I said nothing, and kept it. It is on the sill. It is the best thing on the sill.
// ---- The company
% wd_ren | bond:ren>=-100 & count:wore_>=1 | ren | Wardens learn to read a dress before a face. Yours has changed twice, and my eye has not yet decided which of them to trust. Neither, I think. It is the walk I recognise.
% wd_gu | bond:gu>=-100 & hero:attire=scholar & count:wore_>=1 | gu | The robe suits you. I wear one every day, and I have forgotten what it is for. It is for being forgiven for what is in the books. I hope it works as well on you.
% wd_lin | bond:lin>=-100 & count:wore_>=2 | lin | I have a card for every garment you have worn. There are three in the drawer. I did not mean to start a file. It is only that I am a clerk, and you are a person who changes.
% wd_duan | bond:duan>=-100 & hero:attire=silk | duan | The Concord’s sumptuary tables allow your silk at the rank you hold. I checked. I did not wish to say so aloud, and I am saying so aloud. It becomes you.
% wd_hao | bond:hao>=-100 & count:wore_>=1 | hao | I have been drawing you in every coat. The silk is the hardest, because it keeps changing in the light. The hemp is the easiest, and I like it best.
% wd_mei | bond:mei>=-100 & hero:attire=armour | mei | A scale jerkin on a ship is a wager against the sea. I would not take it. But on land I would take you, in whatever you wore, and that includes the jerkin.
% wd_baoer | bond:baoer>=-100 & hero:attire=rags | baoer | The funeral songs have a verse about patched hemp. It says only that the dead do not mind. I thought of it as you walked in. I am not sure why.
% wd_luyan | bond:luyan>=-100 & hero:attire=traveller | luyan | An oiled cloak, and the hem is wet again. Take it off by the stove. I shall not ask where you were. I shall only see that the damp does not set in your chest.
% wd_shu | bond:shu>=-100 & count:wore_>=2 | shu | I have cut a seal in the shape of a coat. It is for the one whose coat changes. I have not decided yet whether the seal is for you, or against you.
% wd_mengjiao | bond:mengjiao>=-100 & count:wore_>=1 | mengjiao | I listened for fifteen years to a house that wore one robe. You wear several. It is a different sound entirely, and I find it much easier to hear someone in it.
% wd_ahzhi | bond:ahzhi>=-100 & hero:attire=rags | ahzhi | My mother says a patched coat has been mended by someone who loved it. I think she is right. I wanted you to know I thought so, before you went in.
% wd_tian | bond:tian>=-100 & count:wore_>=3 | tian | Moth says you have worn so many coats she has lost count. She says that means you are growing. She says it solemnly. I have started to believe her.
% wd_qiu | bond:qiu>=-100 & hero:attire=scholar | qiu | *The lamp I keep for those the harbour has no word for burns brighter when you wear the ink. I did not choose it. It simply does.*
% wd_yue | bond:yue>=-100 & hero:attire=silk & realm>=3 | yue | In the river provinces a silk robe on a boat is a bad idea and a lovely one. I shall hold the rail for you, and I shall say nothing of the hem.
% wd_odval | bond:odval>=-100 & hero:attire=armour | odval | On the Steppe we say a man in armour is half a horse and half a wall. I have never been sure which half is the better company. Both are worth keeping near.
`;

export const parsedWardrobeRemarks = () => parseRemarks(SOURCE, "wardrobe/remarks");
