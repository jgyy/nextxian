import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the years the hero carries: the birthdays, the span the realm allows, and the doors of
 * years the hero has gone through. Each is said once, a few decisions after it becomes true, and the first whose conditions hold is the one said.
 * Counts read the flags the Age Roads set: the doors of years (`ag_door_…`), the pick made behind each (`ag_pick_<pick>_…`) and the roads finished
 * (`ag_done_…`). Conditions on `age` and `years` read the hero’s age now and the years their realm still allows them.
 */
const SOURCE = String.raw`
// ---- The Elder: the span running out
% su_ag_past | years<=0 & decisions>=6 | elder | You are past the years your realm allows. I have seen the body go on by habit, and by will, and by something I would rather not name. Break through, or find years on a road. The mountain sells both, and I will not stop you buying.
% su_ag_waning | years<=3 & years>=1 & decisions>=6 | elder | A few years remain to you at this realm. I do not say it to frighten you. I say it because I am the one who will have to write the number down, and I should like it to be larger.
% su_ag_ten | years<=10 & years>=4 & decisions>=6 | elder | You have fewer than ten years at this realm. A cultivator who knows that number walks differently. Not slower. More exactly.
% su_ag_gift | count:ag_pick_years_>=1 | elder | You were given years on a road, and you took them. I hope you will spend them better than I spent mine. I also hope you will not waste them being careful.
% su_ag_gift_three | count:ag_pick_years_>=3 | elder | Three roads have given you years. A body can be bought a great deal of time, and it is never yours until you use it. I would not leave any in the drawer.
// ---- The Elder: a birthday, by the age the hero began
% su_ag_youth_grown | age>=20 & hero:age=youth & decisions>=20 | elder | You were sixteen at my gate. You are twenty now, and I did not see the four years go. I should like to say it was the work, but I suspect it was only the stair.
% su_ag_young_thirty | age>=30 & hero:age=young & decisions>=20 | elder | You were twenty-four at my gate and are thirty now. The mountain does not count years kindly, but I have noticed it has counted yours with some care.
% su_ag_prime_forty | age>=42 & hero:age=prime & decisions>=20 | elder | You came to me at thirty-six and have since turned forty-two. The grey at your temples was not there at the gate, and it suits you, and I would rather it came slowly.
% su_ag_mature_sixty | age>=60 & hero:age=mature & decisions>=20 | elder | Fifty-two at the gate, and sixty now. A mortal span is seventy-six, and you are well past the middle of it. If you are not a cultivator of more than one realm, I would take it as a reason to hurry.
% su_ag_elder_seventy | age>=72 & hero:age=elder & decisions>=20 | elder | You came up at sixty-eight and are seventy-two now. You are still here, and so is the mountain, and one of you is surprised.
% su_ag_extended | realm>=2 & hero:age=elder & years>=60 | elder | You were told eight years at my gate. Foundation has given you a hundred and sixty in all, and you are not yet seventy-five. That is a different life, and I hope you are using it as one.
% su_ag_youth_core | realm>=3 & hero:age=youth | elder | A youth at Core Formation. You will outlive every cultivator who taught you, and most of those who feared you. Learn to be kind to them while they are still here.
// ---- The Elder: a pattern of doors
% su_ag_door_one | count:ag_door_>=1 | elder | You have let a road read your years against its keeper’s. It is a harmless thing to do once. It becomes a habit, and then a kind of mirror, and a cultivator should be careful of mirrors.
% su_ag_door_five | count:ag_door_>=5 | elder | Five roads have weighed your years, and five keepers have been kind or unkind about the sum. I have counted, because I have not found a way not to.
% su_ag_door_ten | count:ag_door_>=10 | elder | Ten doors of years. You have sat with the young, the old and your equals, in every realm I can name. I find I have nothing to teach you about being any age that the roads have not taught first.
% su_ag_door_twenty | count:ag_door_>=20 | elder | Twenty roads have read your age, and you have borne it each time. A cultivator who can be looked at that long and not look away is either very young or very old, and I cannot tell which.
% su_ag_roads_forty | count:ag_done_>=40 | elder | Forty Age Roads, and every keeper from sixteen to seventy has told you what the years are for. I shall not ask what they said. I shall only ask if you believed it.
// ---- The Elder: what the picks add up to
% su_ag_sit | count:ag_pick_sit_>=2 | elder | You have sat quietly among your own years twice. It is a rare gift to be able to be in a room with one’s age and not argue with it.
% su_ag_trade | count:ag_pick_trade_>=2 | elder | Twice you have traded what you knew for what another knew. It is the oldest commerce in the world, and the only one in which both sides end richer.
% su_ag_race | count:ag_pick_race_>=2 | elder | Two trials of qi against a peer. You have the instinct of someone who has been told the years are short. I would only say that the other cultivator has the same instinct.
% su_ag_teach | count:ag_pick_teach_>=2 | elder | You have taught the young twice. Few cultivators do it more than once, and fewer do it well. I hope that someone, somewhere, is thanking you in a way you will never hear.
% su_ag_pose | count:ag_pick_pose_>=2 | elder | Twice you have let a road take you for a different age. I will not call it a lie. I will call it a rehearsal for the day you wish you were.
% su_ag_outlast | count:ag_pick_outlast_>=2 | elder | You have outlasted a younger keeper twice. It is a cheap victory, and a real one. The young have all the speed, and none of the habit of waiting.
% su_ag_learn | count:ag_pick_learn_>=2 | elder | You have sat at the feet of an elder twice and asked to be taught. It is the hardest posture in the sect, and the one I wish I had kept.
% su_ag_bow | count:ag_pick_bow_>=2 | elder | Two bows to the old. A bow is a small thing, and a keeper at a road remembers it a long while.
% su_ag_hasten | count:ag_pick_hasten_>=2 | elder | You have asked for the quick lesson twice and paid for it in qi. The young do this. The old wish they had done it sooner.
% su_ag_mentor | count:ag_pick_mentor_>=2 | elder | You have taken a very young keeper under your wing twice. I would say that you were repaying a debt, but I do not think you have ever been asked for it.
% su_ag_remember | count:ag_pick_remember_>=2 | elder | You have told two roads what the mountain looked like when you were young. Remembering aloud is a kind of cultivation, and a dangerous one. It takes years from the future and gives them to the past.
// ---- The company
% ag_ren_elder | bond:ren>=-100 & hero:age=elder | ren | I have carried my father down this stair. You take it slower than he did, and with a better grace. Take my arm if the planks are wet.
% ag_ren_youth | bond:ren>=-100 & hero:age=youth | ren | You are sixteen. My sister was sixteen the year the bridge fell. Stay behind me where the planks are bad, and do not tell me you are all right.
% ag_gu_mature | bond:gu>=-100 & hero:age=mature | gu | My mother is about your age, I think. She says she is tired of being told she is old. She says it is the only thing anyone ever says to her.
% ag_gu_elder | bond:gu>=-100 & hero:age=elder | gu | Is it true that a cultivator lives a hundred years more, at Foundation? My grandfather died at seventy, and nobody offered him a hundred years more.
% ag_lin_prime | bond:lin>=-100 & hero:age=prime | lin | Sorry, I should not ask. How old were you, when you decided to come? I decided at twelve, and have been apologising for it since.
% ag_lin_youth | bond:lin>=-100 & hero:age=youth | lin | You are younger than anyone I have met in the stacks. I am sorry, I do not mean it as an insult. I mean it as a kind of hope.
% ag_ren_waning | bond:ren>=-100 & years<=3 | ren | You are going slower than you were. I do not say it to shame you. I say it because I have carried people who did not tell me, and I would rather be told.
% ag_gu_waning | bond:gu>=-100 & years<=3 | gu | You look tired. I think it is the years. Please let me carry the heavy things. I am very good at them, and it is the only thing I can do.
`;

export const ageRemarksSource = SOURCE;
export const parsedAgeRemarks = () => parseRemarks(SOURCE, "age/remarks");
