/**
 * Unprompted remarks for Book One. Each is said once, a few decisions after the thing it remembers, by the Elder or
 * by a companion who has been keeping count. Lines are `% id | conditions | speaker | line`.
 */
export const remarksOne = String.raw`
// ---- The Elder, remembering what she was told
% su_completed | since:completed_mission>=6 | elder | You brought the jade back, and I have not yet said what that meant to me. I find I cannot say it in this hall. Consider it said.
% su_oath | since:swore_oath>=8 | elder | You swore a Dao oath to the Law Hall and to me. I notice you keep it more carefully than I have kept some of mine.
% su_punish | since:accepted_punishment>=6 | elder | You knelt and asked for judgment. I have not decided what the Law owes you. I find I am in no hurry to decide.
% su_signature | since:asked_about_signature>=7 | elder | You asked about my signature on the sealing orders. No one has asked me that in fifteen years. I am still composing the answer.
% su_forbidden | since:asked_forbidden>=5 | elder | On the first day you asked me about the Blood Lotus Sutra, before you had any right to. I did not forget the question. I have been answering it ever since.
% su_bell | since:challenged_bell>=6 | elder | You challenged the bell. The bell does not forget a challenge. I have heard it hum your name in its sleep.
% su_hand | since:challenged_law_with_elder>=8 | elder | You told me the Law is a hand and not a person. It is a hand that has begun, I think, to open.
% su_market | since:hid_market>=5 | elder | My wardens tell me you hid in the market lane while they searched. A wise person hides from the Law. A foolish one tells it so.
% su_insult | since:insulted_sect>=6 | elder | You called the sect blind, in my hall, to my face. I let you. It is possible that I let you because you were right.
% su_orders | since:read_sealing_orders>=6 | elder | You read the sealing orders for yourself. I wondered when someone would. I did not think it would be someone from outside.
% su_bout | since:reported_bout>=4 | elder | Qin tells me the court is better for your visit. He means that his shoulder aches. From Qin, that is a compliment.
% su_ferry | since:reported_ferry>=4 | elder | Your report of the ferry made me close my eyes for a moment. I have not crossed still water since I was a girl.
% su_lamp | since:reported_lamp_passage>=4 | elder | Old Lin sent her regards, in her way, which is to say she sent a wick. I light it when I cannot sleep.
% su_letter | since:reported_letter>=5 | elder | I have read Mengjiao’s letter more times than I will say. Thank you for bringing it to me and not to the masters.
% su_rumor | since:reported_rumor>=4 | elder | Your rumours from the market lane turn out to be half true. I have learned to value the other half as well.
% su_shrine | since:reported_shrine>=4 | elder | The shrine you described. I did not know it still stood. I have been thinking of going to light something there.
% su_supplies | since:reported_supplies>=4 | elder | Your account of the supplies was dull, accurate and useful. Few people manage all three at once.
% su_eye | since:reported_through_eye>=4 | elder | I watched you through the eye at your worst hour. I do not say it to frighten you. I say it so that you know I did not look away.
% su_wager | since:reported_wager>=4 | elder | The pavilion’s debts weigh on me more than you suppose. Old Tang’s chalk is the sect’s own ledger, written small.
% su_words | since:spoke_mengjiao_words>=6 | elder | You said Mengjiao’s words to me as she wrote them. I have heard them in my head for fifteen years in a different voice. Yours is gentler.
% su_night | since:visited_at_night>=5 | elder | You came to my window at night. Few do. I should like to say it was a breach of the rules. It was a mercy.
% su_study | since:wants_sutra>=6 | elder | You told me you wanted to study the sutra. I keep returning to the fact that I did not say no.
% su_withheld | since:withheld_letter>=8 | elder | You kept a letter from me once. I know, because I found the gap where it should have been. I am not angry. I am only counting.

// ---- Ren Qiao
% ren_warm | bond:ren>=12 & decisions>=25 | ren | I keep the bridge, Wanderer, but I have begun keeping an eye on you as well. Do not take it for an insult. It is what wardens do for people they would miss.
% ren_close | bond:ren>=20 | ren | I held a lantern for fourteen people once and did not say a word. I would hold one for you, and say several.
% ren_cold | bond:ren<=-5 & decisions>=20 | ren | A warden remembers who put out his lantern. I do not say it to start a quarrel. I say it so you do not think I forgot.

// ---- Gu Hanzhen
% gu_warm | bond:gu>=12 & decisions>=25 | gu | My mother ties a red cord on people she means to see again. I should like to have tied one on you. Take this as the knot.
% gu_cold | bond:gu<=-8 & decisions>=18 | gu | You struck me on the ledge, or threatened to, and I still sleep badly on that shoulder. I say it without anger. I say it so that it is said.
% gu_brother | bond:gu>=8 & scene:descent | gu | My brother went down this path before me. If you see a boy of nineteen with my eyes, tell him I am still bringing back what the mountain took.

// ---- Lin Yuan
% lin_warm | bond:lin>=10 & decisions>=24 | lin | I keep a second candle in the drawer where your name would be, if I had written it. It is not a threat. It is the nearest thing I own to a thank you.
% lin_cold | bond:lin<=-6 & decisions>=18 | lin | I counted the keys after you left. All present. That is what hurts. You never needed to take anything from me.

// ---- Su Mengjiao
% meng_warm | bond:mengjiao>=12 & decisions>=40 | mengjiao | The mist tells me when you are near. It is not frightened of you. It is curious, which is rarer.
% meng_cold | bond:mengjiao<=-6 & decisions>=30 | mengjiao | You drew steel in my cave, or you turned from it. I have not decided which is worse. Both are in the water.
`;
export const scenariosOne = String.raw``;
