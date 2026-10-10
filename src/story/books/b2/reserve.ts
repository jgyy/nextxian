import type { Arc } from "../types";

/**
 * Book Two, arc fourteen: the Reserve. The night boat down the river after the Assembly. The Elder tells the player the whole of
 * what happened on the Sealing Night, in the order she can bear it. It is a long conversation made of short scenes: each one is a
 * room in a memory, and the player chooses how to stand in it. The arc closes Book Two and hands over to Book Three.
 * Cast: Elder Su, Gu, Ren Qiao, Hao Lan, Scribe Tong, Mei Qiu, Yue Zhaoning.
 */
export const reserve: Arc = {
  id: "reserve",
  name: "The Reserve",
  scenes: String.raw`
=== reserve_entry | The Night Boat
Yue Zhaoning has put out her stern lamp. The black boat runs without light between two banks of reeds, and the only sound is the pole, dipping, rising, dipping. Overhead the sky has cleared. Hao Lan sleeps against the mast with her satchel clutched in both arms. Tong draws on the planks with a wet finger and the lines dry faster than they are made.
Gu and Ren Qiao have taken the bow, and sit back to back so that neither has to look at the other being afraid. Mei Qiu keeps the stern with her iron bar across her knees.
The Elder moves along the thwart until she is sitting at your elbow. She smells of cold water and cedar.
“I will begin with the lamp,” she says.
+ asm_stood_beside_su | You stood beside her in the Round Hall. She says nothing of it, and does not need to.
+ asm_held_su | Her hand is still in yours. Neither of you has remarked on it.
> truth | Tell her to begin wherever she can. | reserve_a1
> quiet | Wait. | reserve_a1
> mercy | Put your cloak over her shoulders. | reserve_a1
> inquiry | Ask which lamp. | reserve_a1

=== reserve_a1 | The Lamp
“There were nine of you,” says the Elder. “Nine children, all under five, in the east dormitory of the Law Hall. They were not orphans. The Law Hall does not take orphans, it takes surplus. A third son. A fourth daughter. A child a family could feed but did not wish to.”
The pole dips. The water talks to itself.
“Lian Sheng chose them. She had a table, and a list of qualities, and a lamp she carried from cot to cot. It was a small jade lamp, with a wick the length of a grain of rice. She held it to each child’s face and watched the pupil. The ones whose pupils did not close were marked.”
She is quiet for a moment.
“Yours did not close. You looked at the flame as if it were a conversation.”
> truth | Ask what you said. | reserve_a2
> mercy | Ask whether you were frightened. | reserve_a2
> quiet | Say nothing, and keep your eyes on the reeds. | reserve_a2
> inquiry | Ask how old you were. | reserve_a2

=== reserve_a2 | Nine Cots
“You said nothing,” says the Elder. “You were the only one who did not cry. I thought it was courage. Later I understood that you simply did not yet know that it ought to hurt.”
She looks at her hands.
“They put the seed in on the ninth night. It was done with a needle of black jade, under the sternum, by Master Quan, who had done it eight times already that month and was bored. The other eight cried. You looked at the ceiling. I was holding the lamp, because the master had dropped his, and I held it steady because I had been told to hold it steady. I signed a line afterwards saying that I had.”
She stops.
“It is the line I have never been able to forgive. It says: held the light.”
> truth | Take the hand that held the lamp. | reserve_a3
> quiet | Look at her hand, and not at her. | reserve_a3
> mercy | Say that she held it steady, and that the child on the cot noticed. | reserve_a3
> inquiry | Ask who Master Quan was. | reserve_a3

=== reserve_a3 | The Night of the Sealing
“On the night of the Sealing there were to be nine at the wound,” she says. “One would be placed. Eight would wait in the courtyard as reserves, in case the first failed. That was the plan. I had read the plan three months before, and I had said nothing.”
Ahead of the boat, a heron lifts from the reeds and settles again, offended.
“I took you out first. I did it in the third watch, with a blanket and a basket of rice-cakes, past the sleeping gatekeeper. I told myself I was taking a child to be fed. You were eating a rice-cake when I put you down at the river village. You were already asleep when I walked away.”
Her voice is perfectly level.
“I returned for the others. I was too late for all but one. And that one, I will tell you of, but not tonight.”
> truth | Ask about the one she saved. | reserve_a4
> mercy | Tell her that it was enough that she came back. | reserve_a4
> quiet | Let the sentence stand. | reserve_a4
> inquiry | Ask why the first, and not the others. | reserve_a4

=== reserve_a4 | Why You
“Because you were the only one the seed had taken,” says the Elder. “The rest had it, but it slept. Yours woke. It put out a root in the first week. By the ninth night it had cracked the breastbone, a hair’s width, and Master Quan, who was a careful man, wrote in the margin: This one cannot be sealed. She will break the wound. She will break the Sealing. She will break the stone.”
She smiles, very slightly, without any joy.
“He meant it as a defect. I read it as a reprieve. The Concord needed a bearer who would hold. You would not hold. You would open. I took you because you were the only one that could not be used, and I thought I might therefore keep you.”
The pole stops. Yue Zhaoning, at the stern, has gone very still.
+ nine_yuling | You have read of another who would not hold, and what was torn to make her a door.
> truth | Say that you understand. | reserve_b1
> mercy | Say that she was right to take you. | reserve_b1
> quiet | Look at the water. | reserve_b1
> inquiry | Ask what she thinks the seed is, then. | reserve_b1

=== reserve_b1 | The Basket
Yue Zhaoning resumes poling, hard, without a word. The boat slides past a ruined landing where a stone dragon has lost its head. In the bow, Ren Qiao has turned around and is staring at the Elder with an expression that you have not seen on him before. Gu has taken his hand.
“There is a basket,” says the Elder. “It is in the cedar box that Lin Yuan packed. It is the basket I carried you in. Rice-cakes, a blanket, a tag. You have not seen the tag.”
She takes the box from beneath the thwart and opens it. At the bottom, folded in a blanket the colour of weak tea, is a square of coarse brown card, with a number on it in black ink.
IX.
“It is the only record that you existed,” she says. “The Law Hall struck the rest.”
> truth | Take the tag. | reserve_b2 | npc:SU_RESERVE_TAG
> mercy | Fold the blanket back over it, and ask her to keep it a little longer. | reserve_b2
> quiet | Hold it without reading it. | reserve_b2
> inquiry | Ask who wrote the number. | reserve_b2

=== reserve_b2 | The Eight
“There were eight others,” says the Elder. “I saved one, a boy of four who is asleep on a mountain with a ring of keys. The other seven I believed lost. I want that understood before I tell you what became of them. I wore that belief for twelve years like a collar, and it was false.”
She touches the comb in her hair.
“Madam Ash raised them. She was a Censor, you know. A good one. She was struck for refusing to sign the Great Sealing, and she walked out of the fire with her sleeve burning, and she found that the Law Hall’s reserve cots were still warm. She took the seven who were left. She raised them as her own, in a house on the Salt Coast, under the cover of a mourning-shop.”
Hao Lan has woken. She sits up without a sound, her satchel in her arms, and listens.
+ barge_mei_ally | Mei Qiu’s sister was sealed in a wound that closed too early. Mei has told the whole boat.
> truth | Ask where the eight are now. | reserve_b3
> mercy | Ask whether they were happy. | reserve_b3
> quiet | Listen. | reserve_b3
> inquiry | Ask how many of them know about you. | reserve_b3

=== reserve_b3 | Seven in a Mourning-Shop
“Happy is not the word she would use,” says the Elder. “Madam Ash does not use words that promise anything. She taught them the use of names. She taught them to keep a ledger of their own. She taught them to be dangerous in small ways, and patient in large ones. She did not teach them to forget.”
The boat bumps a reed-bed and slides free.
“They are grown now. Some are in the Hollow Lotus. One keeps a ferry. One is a physician. One, I believe, is in this city, under another name, and has been watching you since the Water Gate.”
She looks at you for a long moment.
“They are your siblings. They do not know that you are alive. Madam Ash does. She has known for fifteen years.”
+ pagoda_wen_friend | Wen Rui, who sat in the Round Hall without a mark on his forehead, may have known as well.
> truth | Ask why Madam Ash never came. | reserve_b4
> force | Ask where the ferry is. | reserve_b4
> mercy | Ask whether they have names. | reserve_b4
> quiet | Say nothing. Count the stars. | reserve_b4

=== reserve_b4 | Why Ash Did Not Come
“She was waiting for you to be able to refuse her,” says the Elder. “That is how she puts it. She has had a great deal of time to think, and she has concluded that nothing offered to a child is a gift. She will not take you until you can leave. I think she is wrong. I think you are in more danger because of her principle than you would be because of her love. But I have not argued it, because I am afraid of her, and because she is right about me.”
She takes a long breath.
“I have a great many things to confess. I will try to do it in order. The next is the Concord.”
+ asm_denied_lian | You told Lian Sheng she was never right to decide for a town. The Elder heard it.
> truth | Tell her you will hear it. | reserve_c1
> mercy | Tell her she can rest first. | reserve_c1
> quiet | Nod. | reserve_c1
> inquiry | Ask whether Lian Sheng knows about Ash. | reserve_c1

=== reserve_c1 | What the Concord Is
“The Concord is a good idea,” says the Elder, “and I mean that. Nine peaks, nine sects, nine seals. It was made in the year after the Burning, when the sects had killed each other almost to the last disciple, and a woman stood on a hilltop and proposed a book. A single book, in which every name would be written, so that no one could ever again be killed without being counted.”
The reeds give way to open water. Behind you, a distant bell is ringing in Qinglian Ford, over and over, a slow signal.
“It worked for four hundred years. It stopped when it began to use the book instead of read it. The Ledger was meant to remember. It was used to decide. And once a book decides, it can be made to say anything.”
She turns her face toward the sound of the bell.
“That is the alarm. They have found we are gone.”
> truth | Ask what they will do. | reserve_c2
> force | Tell Yue Zhaoning to go faster. | reserve_c2
> quiet | Listen to the bell. | reserve_c2
> inquiry | Ask how far the sea is. | reserve_c2

=== reserve_c2 | A Fork in the River
At the third bell the river divides. To the left, a broad slow channel runs toward the Salt Coast and the sea. To the right, a narrow green reach disappears beneath willows, toward the high country and the Cinnabar Peak. Yue Zhaoning lets the boat drift and looks at you over her shoulder.
“I can take you either way,” she says. “The left is quicker and watched. The right is slower and nobody’s.”
Nobody speaks. In the bow, Ren Qiao has drawn his sword and is cleaning it, which is what he does when he is afraid.
Mei Qiu says, unexpectedly, “The left. I know the coast guard. I know their schedule. I can get us through the first line.”
Hao Lan says, “The right. The Cinnabar Peak has a seal-mender who owes me a favour.”
> truth | The left, to the sea, where Ash is. | reserve_c3 | +reserve_chose_sea
> quiet | The right, through the willows. | reserve_c3 | +reserve_chose_hills
> mercy | Ask the Elder. | reserve_c3a
> inquiry | Ask Yue Zhaoning what she would do. | reserve_c3a

=== reserve_c3a | Two Opinions
The Elder shakes her head. “I have said what I think of deciding for others.” Yue Zhaoning only shrugs, and spits over the side.
“If it were my boat,” she says, “and it is, I would go where the people who are looking for me are not. That is the hills. But I have never been much for hiding. I like to be seen by the right people.”
Mei Qiu leans forward. “The sea,” she says again. “Ash is there. Ash has the other seven. The Cinnabar Peak has a lock and a debt. The sea has a family.”
Hao Lan says nothing. She looks at the water. She has gone very quiet since the word seven.
The boat drifts. The fork is coming.
> truth | Take the left channel, to the sea. | reserve_c3 | +reserve_chose_sea
> quiet | Take the right, under the willows. | reserve_c3 | +reserve_chose_hills
> mercy | Go to the sea, for the sake of the family. | reserve_c3 | +reserve_chose_sea
> inquiry | Go to the hills, and ask the mender what he knows. | reserve_c3 | +reserve_chose_hills

=== reserve_c3 | The Elder Decides
“I am not going to decide,” says the Elder. “I have decided for you for twenty years. I find it is not an improvement.” She takes a breath. “But I will say that a person who is asked where she wishes to go, and says nowhere, is in a worse state than one who goes the wrong way. I should like you to choose, and to be wrong if you must.”
She smiles at you.
“You have the voice for it. I heard you in the Round Hall.”
Nobody argues. It is as if the whole boat has been waiting to be permitted to stop being brave.
+ reserve_chose_sea | The sea is the direction of the mourning-shop, and a woman who has waited fifteen years.
+ reserve_chose_hills | The hills are the direction of the Cinnabar Peak, a seal-mender, and a lock that has not yet been opened.
> truth | Say it plainly, then. | reserve_d1
> quiet | Say it softly. | reserve_d1
> mercy | Ask the crew whether any of them wants to leave the boat. | reserve_d1 | +reserve_offered_leave
> inquiry | Ask Hao Lan what the seal-mender owes her. | reserve_d1

=== reserve_d1 | The Crew
You ask. Nobody wants to leave.
Hao Lan says that a Censor who has fled a Censors’ assembly has nowhere to go but forward. Tong shrugs, and draws a boat on the planks, and a smaller boat inside it. Mei Qiu says she has thirty years of service, and one sister, and that she will see the second one through. Ren Qiao says nothing, because he has been waiting to be asked since the mountain, and the question has taken him by surprise.
Gu says, “I’ll stay.” Then, in a small voice, “I never said I wouldn’t.”
Yue Zhaoning laughs. It is the first time you have heard it. It is a low, short sound, like a knot being pulled tight.
“Then it is settled,” she says. “Eight on a boat for six, and a river that doesn’t care.”
+ reserve_offered_leave | You asked each of them in turn whether they would leave. They remember that you asked.
> truth | Thank them. | reserve_d2 | bond:ren+1
> mercy | Sit beside Gu. | reserve_d2 | bond:gu+1
> quiet | Smile. | reserve_d2
> inquiry | Ask Mei Qiu what she thinks the Concord will do. | reserve_d2

=== reserve_d2 | The Name on the Tag
The sky is paling. Ahead, a white line is growing on the water, and the air smells of salt. Tong has fallen asleep with his head on his knees. His planks are covered, from end to end, in wet drawings that are already vanishing.
The Elder has the tag in her hand.
“There is something on the back,” she says. “I did not tell you. I did not tell you because I had not decided whether it was kind.”
She turns the card over. In faded brown ink, in a hand you do not know, a single line has been written.
She holds it out to you.
> truth | Read it. | reserve_d3
> quiet | Ask her to read it aloud. | reserve_d3
> mercy | Ask her whether she wants you to. | reserve_d3
> inquiry | Hold it to the light. | reserve_d3

=== reserve_d3 | What It Said
It reads: She will ask. Answer her.
“It is not Lian Sheng’s hand,” says the Elder. “It is not Master Quan’s. It is not mine. I thought, for years, that it was a joke. Then the abyss began to cry, and the dust was made, and I understood that it was not a joke, and that someone had written a message to be read by a child who was not yet born to the question.”
She leans back against the mast.
“I think it was Yu Ling. I think she wrote it on every card in the Law Hall’s reserve, in the year before she tore her page. I think she knew that one of you would come to the Ledger and ask. I think she wanted someone to have an answer ready.”
The dawn has begun to colour the sea.
> truth | Ask what the answer is. | reserve_e1
> mercy | Tell her you do not need it yet. | reserve_e1
> quiet | Look at the card. | reserve_e1
> inquiry | Ask if she knows who else was named in the Law Hall’s hand. | reserve_e1

=== reserve_e1 | The Answer
“I do not know it,” says the Elder. “That is the whole of my honesty. I have not found the answer, and I have looked for fifteen years. I do not know what you are meant to say.”
She puts her hand on the card, over yours.
“But I know what you did in the Round Hall. And I think the answer is not a sentence. I think it is a thing you do. I think you have been doing it since the river village. I think you have been answering her all along.”
In the east, the sun clears the sea.
Behind the boat, very far off, the bell is still ringing.
+ reserve_chose_sea | The wind off the sea tastes of salt and smoke, and somewhere on that coast a mourning-shop is being swept for guests.
+ reserve_chose_hills | The hills ahead are a blue wall, and the green reach under the willows is quiet as a held breath.
> truth | Say that you will keep asking. | reserve_close | +b2_reserve_done
> mercy | Say that you will keep her company while you ask. | reserve_close | +b2_reserve_done
> quiet | Say nothing. Hold her hand. | reserve_close | +b2_reserve_done
> inquiry | Ask her what she thinks the sea will answer. | reserve_close | +b2_reserve_done

=== reserve_close | The End of the River
The boat runs on through the morning. Somewhere behind it, a city is turning over its registers. Somewhere ahead, a woman is sweeping a mourning-shop.
+[who] asm_duan_helped | Duan Wuyi stood in front of forty halberds so that you could be in this boat.
+[who] asm_w_wen | Wen Rui’s papers are in Hao Lan’s satchel, and a grey man has begun to be written back.
+[who] asm_w_mei | Mei Qiu is asleep in the stern with her bar across her knees and her face turned to the sea.
+[who] asm_w_hu | Captain Hu’s wife is saying her own name, somewhere, to a room that has finally learned to listen.
+[who] asm_w_qi | The weavers’ law, one sentence long, is already being stitched into a bolt in the Silk Quarter.
+[who] asm_called_allies | Brother Ox and Leng Jian were left behind to be shouted at. They went smiling.
The river is over. The book you carried is open at a page that has not been written.
“Whatever we find,” says the Elder, “you will be asked. That is the thing the card said. You will be asked, and you will answer.”
She is looking at the sea.
“I should like to be there when you do.”
> truth | Tell her she will be. | b3_gate |
> mercy | Tell her you will not go anywhere without her. | b3_gate |
> quiet | Take the pole from Yue Zhaoning, and push. | b3_gate |
> inquiry | Ask the sea what it wants. | b3_gate |

`,
  scenarios: String.raw`
$ SU_RESERVE_TAG | trust+5 respect+3 fear+2 | elder | The Elder gives the player the tag from the basket and tells the story of the Sealing Night.
hostile: You took the tag. I would have understood if you had thrown it into the river. I did not expect you to keep it. I do not expect it to be a gift.
wary: You took it without speaking. I will take that as the beginning of an answer, though I do not know to what.
neutral: I have carried it fifteen years. I find that I do not miss it. I find that I do not miss anything, at the moment, except the sensation of carrying.
warm: You read it. You read it without flinching. I thought a great many things in the last fifteen years, but I did not think I should be able to watch you read it.
devoted: I told you the worst of it. You are still beside me. I do not have a ledger for that. I think, at last, I have stopped keeping one.
`,
  remarks: String.raw`
% reserve_gu_later | since:b2_reserve_done>=6 & bond:gu>=10 | gu | I did not say anything on the boat, but I heard all of it. I want you to know that I am not afraid of what you are. I am afraid of what they will do to you. That is different. I wanted you to know the difference.
% reserve_ren_later | since:b2_reserve_done>=8 & bond:ren>=10 | ren | The Elder took a child out in a basket. I have been trying to think of anything in my life that I have done that brave. I cannot. I find it clarifying.
% reserve_hao_later | since:b2_reserve_done>=6 & bond:hao>=8 | hao | I used to think a register was the most honest thing in the world. Then I read my own name in one that was wrong. I am trying to learn what to trust. At present the list is short.
`,
};
