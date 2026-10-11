import type { Arc } from "../types";

/**
 * Book Two, arc seven: the Quiet Fever. Green Mill has been drinking the Law Hall's calm dust for a decade and has stopped
 * remembering its own people. Four ways to wake it: nurse the sick-house (a1), burn the depot (a2), swap the dust for plain
 * tea (a3), or trace the order back to the headman who asked for it (a4). A hidden route uses what the player learned in
 * the Healer's Hall about cutting the root from the bottom (needs knows_calm_dust).
 * Cast: Headman Pu, Master Yao Ling, Lü Jian, Widow Cai, the miller's daughter Su-Su.
 */
export const fever: Arc = {
  id: "fever",
  name: "The Quiet Fever",
  scenes: String.raw`
=== fever_entry | A Town That Does Not Speak
Green Mill is a town of sixty roofs along a bend where the river turns a great wheel. When the barge ties up at its quay the wheel is turning, and the mill is grinding, and the market is full. Nobody is shouting. Nobody is haggling. Two women stand at a stall with their baskets and say nothing to each other while a fishmonger weighs a carp, and when he is done, he hands it over, and they nod, and walk on.
A child sits on a step with a doll in her lap. She does not play with it. She looks at it as at a puzzle she has been told is a toy.
“It has been like this for eleven weeks,” says the Elder, very low, at your side. She is looking at a jar on a windowsill, a plain white jar with a lid of oiled paper. “I know that jar. I know the paper. It is from my own office.”
> mercy | Go to the sick-house at the end of the quay, where the worst are kept. | fever_a1s1 | +fever_a1
> force | Find the depot where the jars are stored, and see how many there are. | fever_a2s1 | +fever_a2 needs:2
> deceit | Visit the dust-seller in the market, and buy a month’s supply. | fever_a3s1 | +fever_a3
> truth | Ask the headman who sends for the dust, and why. | fever_a4s1 | +fever_a4
> inquiry | Recall the note by the split root in Master Yao’s garden, and look for blue flowers in the town. | fever_h1 |  | knows_calm_dust | You do not know what the dust is made from, so you do not know what to look for.

// ---------------------------------------------------------------- a1: the sick-house
=== fever_a1s1 | The Sick-House
The sick-house is a long wooden shed with a tin roof and thirty pallets laid out in rows, and every pallet is occupied. The patients lie quite still. Some sit against the wall with their knees drawn up. A few are eating, slowly, from bowls, with an expression of mild attention that has nothing to do with the food.
A woman in a grey apron moves among them with a pitcher. She is thin, with cropped grey hair and hands stained yellow to the knuckle. She looks up as you come in, and her face goes through astonishment and recognition and a quick terrible wariness.
“You,” says Master Yao Ling. “The one from the foothill lane. The one who stood in my garden.”
+ visited_healer | You smell of bitter root, as you did then.
+ knows_calm_dust | You asked her once what the dust was made from. She remembers.
> truth | Tell her you are glad to see her, and that you need her help. | fever_a1s2 | +fever_yao_here
> mercy | Take the pitcher from her hands, and begin to pour. | fever_a1s2 | +fever_yao_here bond:gu+1
> inquiry | Ask how she came here, and who sent for her. | fever_a1s2 | +fever_yao_here
> quiet | Step to the nearest pallet, and look at the sleeper’s face. | fever_a1s2 | +fever_yao_here

=== fever_a1s2 | What Master Yao Knew
“I came on a river boat nine days ago,” she says, setting down the pitcher. “A town clerk wrote to the Hall to ask for a physician. I came because I am the physician who knows what the dust does.” Her hands are very steady. “I have been treating them with the bitter root, a spoon a day, in warm water. It brings the names back. It also brings the grief.”
She looks down the length of the shed.
“Thirty-one have woken. Fourteen have chosen to go back to sleep. I give them the dust again if they ask. It is the only mercy I have.”
Her voice does not break. She goes on looking at the pallets, and the strained quiet of her face is that of a woman who has been awake for nine days.
> truth | Tell her you will help to wake them, whichever way they choose. | fever_a1s3
> mercy | Ask what she needs most. | fever_a1s3
> inquiry | Ask how many roots she has left. | fever_a1s3
> force | Tell her the dust must be stopped at the source. | fever_a1s3

=== fever_a1s3 | Widow Cai
Widow Cai lies on the pallet by the door. She is seventy, with a face like a walnut, and she woke this morning. She wakes the way a diver surfaces: by degrees, gasping. She keeps saying her husband’s name. He died in the winter of the year before the Sealing. She has not said it in ten years.
“I thought he went to market,” she says. “I have been setting out his bowl. He has been dead since before the Sealing, and I have been setting out his bowl.” She laughs, and it breaks into something else. “Who gave me the right to forget him?”
Master Yao’s hand is on her shoulder. She has the look of someone who has said, ‘it was a mercy,’ so many times it has worn through.
> mercy | Sit down on the pallet beside her, and take her hand. | fever_a1s4
> truth | Tell her no one gave anyone the right. | fever_a1s4
> inquiry | Ask what he was like. | fever_a1s4
> quiet | Fetch her a cup of water. | fever_a1s4

=== fever_a1s4 | What Cai Remembered
She tells you about the husband. He was a boatwright, and a poor singer. He carved her a hairpin shaped like a fish. He once fell off the jetty in his wedding coat. He had a way of humming when he was thinking that she could never stand and had done anything to hear again.
The tune, you realise, with a small cold shock, is the tune. The one from the vault, the roof, the village, the willow.
“Do you know it?” she says, wiping her eyes. “He did not have words. Nobody does. My mother sang it too. We thought it belonged to the river.”
You are not sure whether she is asking.
> truth | Hum the first line, softly. | fever_a1s5
> mercy | Tell her it belongs to everyone, and that her husband was right to keep it. | fever_a1s5
> inquiry | Ask her what her mother told her about where it came from. | fever_a1s5
> quiet | Listen to her breathing, and wait. | fever_a1s5

=== fever_a1s5 | The Night Shift
The roots run low at dusk. Yao Ling has a sack of dried bitter root, a pot, and a few clay cups. There are thirty-one who have woken and sixty-four still asleep. She says, flatly, that there is not enough for all of them.
“Who wakes first?” she asks, and her voice is very tired. “I have made that choice nine times. The strong, so they can help? The young, so they have years? The ones who ask? The ones who cannot?” She spreads her hands. “I am out of principles.”
Gu, behind you, has begun pounding roots in a mortar without being asked. His face is white. He hums as he works.
> truth | Tell her the ones who ask should wake first. | fever_a1s6
> mercy | Say the ones who suffer most in sleep should wake first. | fever_a1s6
> inquiry | Ask whether the roots can be stretched, and how. | fever_a1s6
> force | Say you will find more roots, and she can decide when you return. | fever_a1s6

=== fever_a1s6 | Su-Su
The miller’s daughter is nine years old. She sits against the wall with a rag doll in her lap, and in the long gold light of evening she raises her head and says to no one, “Is it Tuesday?”
“Yes,” says Master Yao, kneeling. “It is Tuesday, little one.”
“Did Mother go to the market?”
Yao Ling’s face does not change. Her hands stop on the cup. She looks at you over the child’s head, an appeal and a warning at once. The girl’s mother died at the harvest. Su-Su has not been told. She has not remembered to ask. For nine weeks she has not had to know.
> truth | Tell her, gently, that her mother is gone. | fever_a1s7 | +fever_a1_told_susu
> mercy | Say her mother is not at the market, and ask if she would like some tea. | fever_a1s7 | +fever_a1_softened
> quiet | Take the doll, and tell it a story, and see what Su-Su does. | fever_a1s7
> deceit | Say her mother is on the river, and will be back. | fever_a1s7 | +fever_a1_lied_susu

=== fever_a1s7 | What Su-Su Did
She does not cry. She puts her doll very carefully on the floor, in the middle of the plank, and walks to the corner of the shed and sits down with her back to the room. She stays there a long time. When Yao Ling comes to her she says, in a flat child’s voice, “I knew.”
“You knew?”
“I knew in the dust. It was like a coat. I could feel her under it.” She looks at her hands. “I wanted to wear it.”
Yao Ling sits down beside her. After a time she says, “I know.” They sit together, two people with their backs to the wall, in the gathering dusk.
> truth | Sit down on her other side. | fever_a1s8
> mercy | Fetch the doll, and put it back in her lap. | fever_a1s8
> quiet | Go out into the dark and leave them be. | fever_a1s8
> inquiry | Ask Yao what she says to the ones who want the coat back. | fever_a1s8

=== fever_a1s8 | The Choice at Dawn
At dawn sixty-four sleepers wait in rows, and a hundred and ten more in the town. Yao Ling lays out her roots on a cloth: thirty doses. A town clerk has come to the door with a ledger, and says he must register the numbers for the Concord. A woman in the doorway says her husband, who sells dust, will not be pleased.
Elder Su has come to the shed. She stands quite straight in the dawn, and looks down the rows. She says, in a clear voice, to the room:
“This is the Law Hall’s doing. I have come to say so. I have come to ask what you wish me to do about it.”
No one answers. One by one, along the rows, they raise their heads.
> truth | Stand beside her and say the same, so she is not alone. | fever_close | +fever_su_confessed +fever_woke_some npc:SU_FEVER_CONFESS
> mercy | Stand beside Yao Ling and hold the cup. | fever_close | +fever_woke_some
> quiet | Slip away to find more root, and leave the Elder to speak. | fever_close | +fever_woke_some
> inquiry | Ask the room who would like to wake, and who would like to rest. | fever_close | +fever_woke_some

// ---------------------------------------------------------------- a2: burn the depot
=== fever_a2s1 | The Depot Behind the Mill
The depot is a low stone barn behind the mill, with a new roof and an old lock. Ren Qiao stands at your shoulder with his arms folded. Gu has a torch he has not yet lit. The Elder, behind you, is silent.
Through a crack in the door you can see the jars. They are stacked in rows to the rafters, round-bellied, white, each with a lid of oiled paper. There must be two thousand. A smell comes through: bitter, faintly sweet.
A man in a green coat is sitting on a barrel at the door, picking his teeth. He gets to his feet with the unhurried air of a man who is paid by the hour.
“Closed,” he says. “Come back tomorrow.”
> force | Tell him you are the Concord’s witness, and the depot is open. | fever_a2s2 | needs:2
> truth | Tell him you are here to stop the dust, and ask him to step aside. | fever_a2s2
> deceit | Offer him a purse to look the other way. | fever_a2s2
> quiet | Wait for the guard’s shift to end, and slip in after dark. | fever_a2s2

=== fever_a2s2 | The Guard in the Green Coat
He turns out to be harmless. He takes your purse, if you offer it, and counts it, and says there is a second guard inside who is not. He says the dust is the Law Hall’s, and that the Law Hall pays on the first of the month, and that he is a family man.
“Two thousand jars,” he says. “One every five days for each of four hundred households in six towns. It keeps them quiet. Nobody complains.” He spits. “Nobody has complained for ten years.”
You glance at the Elder. She has gone the colour of the barn wall.
Ren Qiao, behind the man, has quietly taken his scabbard off his belt.
> truth | Ask the guard what he thinks the dust does. | fever_a2s3
> force | Tell Ren to take him. | fever_a2s3
> mercy | Tell the guard to go home to his family, and that he will not be blamed. | fever_a2s3
> inquiry | Ask who the second guard is. | fever_a2s3

=== fever_a2s3 | The Second Guard
The second guard is a woman in a Law Hall grey robe, armed with a long staff and an air of tired competence. She sits inside the door on an upturned jar, reading a thin book by lantern light, and does not look up until Ren Qiao’s shadow falls across her page.
“Warden Ren,” she says. “I thought it might be you.” She lowers the book. “I was one of yours, on the bridge. I served under you for four years. You taught me to count the stones.”
She stands, slowly, with the staff in both hands, and does not raise it.
“I am under orders from the Registrar’s office,” she says. “I would like to know whether you outrank them.”
> truth | Tell her the Elder is here, and does. | fever_a2s4
> force | Tell her the orders are void. | fever_a2s4
> mercy | Ask her name, and whether she has eaten. | fever_a2s4
> quiet | Look at Ren, and let him answer. | fever_a2s4 | bond:ren+2

=== fever_a2s4 | An Order from the Elder
Elder Su steps into the lantern-light. She has a quiet face, and a quiet voice, and for a moment she looks like exactly what she is: the woman who has signed every order in the Law Hall for twelve years, and read none of them.
“I order the depot closed,” she says. “I order the jars emptied into the river. I order the office of the Registrar to cease issuing calm dust to any town, village or ward, effective this hour.” She pauses. “I do not have the power to do so. I do not know who does. I do it anyway.”
The warden stares at her. Then she sets the staff against the wall, takes the key from her belt, and holds it out in both hands.
“Elder,” she says. “I have been waiting ten years for someone to say that.”
> truth | Thank the warden, and ask her to help carry the jars. | fever_a2s5 | +fever_a2_warden_ally
> mercy | Take the key from her, and tell her she is free to go. | fever_a2s5
> force | Tell Ren to put a lock on the door, and hold it. | fever_a2s5
> inquiry | Ask how many depots there are in the six towns. | fever_a2s5

=== fever_a2s5 | Two Thousand Jars
It takes the night. You carry jars in relays out to the quay: you, Gu, Ren, the warden, the guard in the green coat, who has decided on the spot to join. Half the town comes out to watch. Nobody asks what you are doing. The fishmonger, slow and mild, helps lift a stack onto a handcart and goes back to his stall.
The Elder breaks the first jar herself. She holds it over the water. She turns it a quarter-turn, and the white powder pours out in a thin stream, and floats for a moment on the black river like flour on a pond, and is gone.
“One,” she says. “Eleven hundred and ninety-nine thousand to go.”
It is meant as a joke. No one laughs.
> truth | Break the second jar beside her. | fever_a2s6 | bond:ren+1
> mercy | Stay at the quay and hold the lantern for her. | fever_a2s6
> force | Smash a dozen jars against the quay-stones at once. | fever_a2s6 | needs:2
> quiet | Watch the powder dissolve in the river, and think about where the river goes. | fever_a2s6

=== fever_a2s6 | Downstream
The jars are not all emptied by dawn. A third remain, in a pile on the quay, because the carts have broken and the town has gone back to its beds. The river carries the powder downstream. Within the hour you see the first effect.
A fisherman at the water-gate puts down his net. A woman, hanging linen on the bank, stops with a sheet in her hands. The boy who works the great wheel falls off his stool. All along the bank, by the water, as the white film floats past, people are sitting down.
“It is in the river,” says Ren Qiao, very quietly. “The dust is in the water. Everyone downstream is drinking it.”
The Elder says nothing at all.
> truth | Tell the Elder to order the river dammed. | fever_a2s7 | +fever_a2_dam
> force | Run downstream, and warn the next town. | fever_a2s7
> inquiry | Ask Ren how far the river carries it. | fever_a2s7
> mercy | Find the nearest healer’s boat, and ask for roots. | fever_a2s7

=== fever_a2s7 | What Burning Costs
It was a mistake, and no one will say so. The Elder stands on the quay with her fists clenched at her sides. The warden with the key is kneeling at the water’s edge, scooping powder out with a cup. The man in the green coat sits down on a barrel and puts his head between his knees.
Yao Ling’s boat comes upriver at noon. She steps onto the quay with a sack on each shoulder and surveys the scene with a gaze like a surgeon’s.
“I told the town clerk to burn it,” she says, “not to drown it. Fire kills the dust. Water gives it to the next valley.” She sets down the sacks. “I am not saying it was foolish. I am saying it will take three weeks to clean up, and you will be the ones holding the cups.”
> truth | Take a cup. | fever_a2s8
> mercy | Apologise to Yao Ling, and ask what to do. | fever_a2s8
> quiet | Take a cup and say nothing. | fever_a2s8
> force | Tell her you will find the people who ordered it, and make them hold the cups instead. | fever_a2s8

=== fever_a2s8 | Three Weeks in a Week
The barge cannot wait three weeks. Duan Wuyi comes down the quay at last, impassive, and watches the cups pass from hand to hand. “I have a Council to attend,” he says. “I will leave a clerk and a purse. I will say in my report that a Censor’s witness took prompt action to correct a public nuisance.” He pauses. “I will not say that it was your doing.”
He looks at the Elder, who is pouring bitter-root water into a cup with a steady hand.
“I will say,” he adds, mildly, “that the Registrar’s office is closed. By order of the Elder. Effective this hour.”
It is the most useful lie you have ever heard a Censor tell.
> truth | Thank him. | fever_close | +fever_burned +fever_woke_some
> mercy | Say the Elder will stay and finish the cups. | fever_close | +fever_burned +fever_woke_some
> quiet | Bow, and take your cup. | fever_close | +fever_burned +fever_woke_some
> inquiry | Ask him what the Council will say when it hears. | fever_close | +fever_burned +fever_woke_some

// ---------------------------------------------------------------- a3: swap the dust
=== fever_a3s1 | The Dust-Seller
The dust-seller’s stall is under a green awning in the shade of the mill. He is a plump, courteous man in a coat of good cotton, selling jars from a rack. He wraps each in paper and ties it with twine, and says something kind to every customer, and every customer smiles vaguely and does not answer.
“A month’s supply,” you say.
“For whom?” He has a nice voice. “A relative? A neighbour? A difficult child?” He smiles. “I should say that the dust is recommended only for the grieving, the troubled, and the temporarily overwhelmed. It is not for everyone.”
You look at the jars. They are the same white jars. They are the same oiled lids. They are the Law Hall’s, and they are being sold as a favour.
> deceit | Say it is for a grandmother who cannot sleep. | fever_a3s2
> truth | Say you do not know what it is for, and ask him to tell you. | fever_a3s2
> inquiry | Ask whether the dust is registered with the Concord. | fever_a3s2
> force | Take the jar and tell him you will examine it. | fever_a3s2

=== fever_a3s2 | The True Quiet
You remember the tin. Master Yao pressed it into your hands at the end of the day in the Healer’s Hall: a small tin, its lid stamped with the Hall’s seal, filled with a tea of plain leaves, no root in it. This is what quiet looks like when nobody has to be paid for it.
You have it still. It is in your pack, under the wicks. There is enough in it for perhaps a hundred cups.
It is not enough for four hundred households. It is enough for a start. And it looks exactly like the dust, at a glance, in a white jar with a lid of oiled paper.
Gu, beside you, understands. His face is lit with a fierce schoolboy delight. “We swap them,” he whispers.
> deceit | Fill twelve jars with the tea tonight, and swap them for the dust. | fever_a3s3
> truth | Tell him it is not enough, and that the jars should be given away openly instead. | fever_a3s3
> mercy | Ask the Elder for leave to use the tin. | fever_a3s3
> inquiry | Ask Gu where they could find more plain leaves. | fever_a3s3

=== fever_a3s3 | A Hundred Cups of Tea
The Elder gives leave without hesitation. “It is my office’s dust,” she says, “and my office’s tin. I will not make you ask twice.” She does not look at the tea. She looks at the jars. “Do not tell me how many you change. I will count them as they sleep.”
You work in the back room of a boarding house, with Gu and two oarsmen who owe you nothing and ask for it. The jars are emptied into a bucket, the tea shaken into the jars, the lids retied with fresh oiled paper. When the work is done there is a row of twelve white jars on the table, and the bucket is a third full of grey powder.
It smells, to your cold seed, of grief.
> truth | Carry the bucket to the river, and tip it into the deep water below the mill. | fever_a3s4
> quiet | Hide the bucket under the boards. You may need the evidence. | fever_a3s4
> mercy | Give it to Master Yao, if she can use it. | fever_a3s4
> inquiry | Taste a grain, to learn what it is. | fever_a3s4

=== fever_a3s4 | What You Tasted
You do not mean to. You touch a fingertip to the powder and your tongue to the finger, and for a heartbeat you are somewhere else. A summer, a field, a woman’s voice calling a child in to supper. It is so clear that you smell the grass. Then it is gone.
You are sitting on the floor of the boarding house with a rushing in your ears. Gu is holding your shoulders and saying your name, which is not your name, and the oarsmen are staring.
“It takes the name,” you say. It comes out thick. “It takes the name, and gives you the supper.”
Gu goes white. “You tasted it.” He sits back on his heels. “Of course you did. You are an idiot.” He sounds close to tears.
> truth | Tell him you are fine, and that now you understand why they drink it. | fever_a3s5 | bond:gu+2
> mercy | Thank him for holding you, and ask for water. | fever_a3s5 | bond:gu+3
> inquiry | Ask what name he used. | fever_a3s5
> quiet | Sit in silence until the rushing stops. | fever_a3s5

=== fever_a3s5 | The Swap
You place the twelve jars on the dust-seller’s rack at dusk, between two of his own. You take the same number away, wrapped in your cloak. It is the oldest trick in the book, and it works. The next morning twelve households in Green Mill wake with a cup of plain tea in their hands, and wonder why their heads feel so clear.
By the second day it is thirty. By the third, sixty. Master Yao, who has come with her sack of roots to see what has happened, finds a street of people blinking in the sun like moles.
“It was not me,” she says. “I would like to be clear. It was not me. But if anyone asks, it was a miracle.”
> truth | Tell her it was a trick, and that it needs a hundred more cups. | fever_a3s6
> mercy | Smile at her and say nothing. | fever_a3s6
> quiet | Slip away, and let the town enjoy its morning. | fever_a3s6
> force | Say you will swap the next batch yourself. | fever_a3s6

=== fever_a3s6 | The Dust-Seller Notices
The dust-seller notices on the fourth day. He does not storm. He sits on a stool at the back of the stall and watches the customers drift by without buying. A woman who has bought a jar a week for ten years comes up, looks at his rack, and says, quite clearly, “I find I do not want it.”
He beckons you with one jewelled finger.
“You are very clever,” he says. “It is not a crime. It is a nuisance, and I am a patient man. But the dust is not mine. It is the Registrar’s, and the Registrar is not patient.” He leans closer. “I advise you to leave town before she sends someone.”
> truth | Tell him the Registrar is on your barge, and wants to see him. | fever_a3s7
> force | Tell him to run, and that you will be gentle if he does. | fever_a3s7
> deceit | Say you will go, and ask for a purse to leave quietly. | fever_a3s7 | +fever_a3_took_bribe
> mercy | Ask what he will do if the dust stops. | fever_a3s7

=== fever_a3s7 | A Seller’s Livelihood
He looks at you for a long moment, and the pleasantness goes out of his face. What is left is a man of fifty, tired, with a family. “I have three daughters,” he says. “I sell dust to pay for them. I did not ask what it was. I was told it helped.” He reaches under the rack and brings out a small ledger. “I have the names of all my customers. I always kept them. I thought I might need to prove they came to me of their own free will.”
He puts the book on the counter.
“I would like it understood that I never took a coin from a child.”
> truth | Take the ledger, and promise it will not be used against his daughters. | fever_a3s8 | +fever_a3_took_ledger
> mercy | Tell him to keep it, and put it somewhere safe. | fever_a3s8
> inquiry | Ask if the Registrar’s office ever sent anyone to check. | fever_a3s8
> force | Tell him you will need more than a ledger. | fever_a3s8

=== fever_a3s8 | What the Town Did
By the end of the week Green Mill has voted. It is not an election; there is no clerk to count. It is a gathering on the quay at dusk, a hundred and forty people with their shoulders touching, and one by one they hold up their jars and set them on the stones. No speeches are made. The jars are lit with a taper, and the powder burns a thin blue, and the smoke goes up straight.
The Elder watches from the end of the quay. She is holding a cup of tea, plain, steaming. She does not drink it.
“Fifty-one,” she says, softly. “Fifty-one households. I have been counting.” She turns to you. “It is enough. It is a beginning.”
> truth | Tell her it is. | fever_close | +fever_swapped +fever_woke_some
> mercy | Offer her your arm. | fever_close | +fever_swapped +fever_woke_some
> quiet | Stand beside her and watch the smoke. | fever_close | +fever_swapped +fever_woke_some
> inquiry | Ask her what she will say to the Registrar’s office. | fever_close | +fever_swapped +fever_woke_some

// ---------------------------------------------------------------- a4: who sends for it
=== fever_a4s1 | The Headman’s House
The headman of Green Mill is a heavy, sleepy man named Pu who lives in a house with a carved lintel and a garden of dwarf pines. He receives you in the front room with great politeness, offers you a cup of tea, and watches as you do not drink it.
“I understand,” he says. “You have come about the dust.” He folds his hands. “I will be frank. I ordered it. I order it every spring. It is the best thing I have done for this town.”
Behind him, on the wall, hangs a scroll in a woman’s hand. The calligraphy is excellent. It reads: Peace is the gift of the ones who forget.
The signature is a seal you know. The Office of the Registrar.
> truth | Ask him what happened to make him need it. | fever_a4s2
> inquiry | Ask when he first ordered it, and how many times since. | fever_a4s2
> mercy | Ask how the town was, before. | fever_a4s2
> force | Tell him a headman who poisons his town is no headman. | fever_a4s2

=== fever_a4s2 | The Year of the Flood
“It was the flood,” says Pu. “Eleven years ago. The river came over the dike at night. Three hundred drowned. My brother. My wife. The miller and every one of his sons.” He looks at his hands. “The people could not stop screaming. For weeks. They would sit on the bank and scream at the river.”
He rubs his eyes.
“The Law Hall sent a physician with the dust. In the first month it worked a miracle. The screaming stopped. The people ate again. They began to rebuild.” His voice thickens. “I will not apologise for that. I saved this town.”
The pines in the garden shift in the wind. For a moment the room is entirely still.
> truth | Tell him you believe he did what he thought was right. | fever_a4s3
> inquiry | Ask who sent the physician, and who signed the order. | fever_a4s3
> mercy | Ask how the screaming stopped for the headman himself. | fever_a4s3
> quiet | Sit quietly with him, in the pines. | fever_a4s3

=== fever_a4s3 | Pu’s Own Cup
He does not answer the question about himself. He turns his head away. The thin smile does not leave his face. But his hand, on his knee, has begun to shake.
“The headman is not given the dust,” he says. “It is a rule. He must stay awake, to keep the others asleep.” He looks at you, and for the first time you see how old he is. “I have not slept a night through in eleven years. I remember every one of them. My wife’s name was Mei-Mei. She sang while she cooked.”
His voice cracks.
“That is the price. Someone must remember, so the rest may rest.”
> truth | Tell him it is too much for one man. | fever_a4s4
> mercy | Take his hand. | fever_a4s4
> inquiry | Ask whether the others know. | fever_a4s4
> quiet | Sit with him until the shaking stops. | fever_a4s4

=== fever_a4s4 | A Town’s Choice
You ask him whether the town would choose it, if it were asked. He doesn’t answer at once. Then he says, slowly, that no one has asked. That in eleven years, not one man or woman in Green Mill has been asked whether they wished to forget. That he made the choice for them, in the first month, in a state of grief, and has kept it since.
“I would like to ask,” he says. “I do not know how.”
He rubs his face with both hands.
“If I ask them, and they say yes, I will have to go on being the one who remembers. If they say no, I will have to watch them weep. I am a coward. I have been a coward for eleven years.”
> truth | Offer to be there when he asks. | fever_a4s5
> mercy | Tell him a coward does not keep a town for eleven years. | fever_a4s5
> inquiry | Ask how the Registrar’s office would respond. | fever_a4s5
> force | Tell him you will ask them yourself, tonight. | fever_a4s5 | +fever_a4_forced_ask

=== fever_a4s5 | The Gathering
He asks them in the mill-yard at dusk, standing on an upturned barrel. A hundred and sixty people have come: farmers, millers, boatmen, women with infants, old men with sticks. They stand quite still, and they listen, and when he is done nobody speaks.
Pu is gripping the edge of the barrel. His face is grey.
“I am asking you,” he says, “whether you want to remember.”
The silence goes on. A child coughs. An infant makes a small noise. Then, from the back, an old man in a miller’s apron raises his hand, as a child does in school, and says, in a cracked voice, “I do. I would like to know what happened to my sons.”
> truth | Step beside him, and say you will help any who wish to wake. | fever_a4s6
> mercy | Go and take the old miller’s arm. | fever_a4s6
> quiet | Stay at the back of the crowd, and watch faces. | fever_a4s6
> inquiry | Count the raised hands. | fever_a4s6

=== fever_a4s6 | Show of Hands
Seventy-one raise their hands. Sixty-eight do not. The rest hesitate, hands half up, then down, then half up again, with the dazed look of people being asked a question in a language they once spoke. The mill-yard is full of small movements. A woman holds her baby very close. A boy puts his arm around his father.
You count twice. The numbers don’t change.
Pu has sat down on the barrel. He is staring at the crowd with an expression you cannot place.
“I did not think there would be so many,” he says. “I thought it would be none.” He wipes his eyes. “And I did not think there would be so many who say no.”
> truth | Tell him both are the town’s right. | fever_a4s7
> mercy | Tell him a town is allowed to be divided. | fever_a4s7
> inquiry | Ask how the two halves will live side by side. | fever_a4s7
> force | Tell him seventy-one is enough to begin. | fever_a4s7

=== fever_a4s7 | Two Halves of Green Mill
It is not tidy. It is never tidy. For three days the town divides, and the dividing runs through families: a wife wakes, a husband will not; a mother sleeps, a daughter weeps. Yao Ling, summoned by a boy on a fast skiff, arrives on the second day with her sack and her cups, and walks the lanes with the grim composure of a woman who has been here before.
The Elder spends the third night sitting with the headman, in his garden, among the pines. You do not hear what they say. In the morning Pu is shaved and dressed, and the lintel over his door has been taken down.
“I have resigned,” he says. “I have been the one who remembers long enough. Let someone else do it.”
> truth | Tell him it was well done. | fever_a4s8 | +fever_pu_resigned
> mercy | Ask who will take his place. | fever_a4s8
> quiet | Bow to him, once, as to a peer. | fever_a4s8
> inquiry | Ask what he will do with the scroll of the woman’s hand. | fever_a4s8

=== fever_a4s8 | A Letter to the Registrar
Before the barge leaves, Pu gives the Elder a letter. It is a plain sheet, written in a hand that shakes. She reads it in the cabin, standing, and sits when she has finished.
“He asks me to tell the Registrar’s office that the town of Green Mill has returned the dust,” she says. “All of it. He asks that no further shipments be sent. He asks that the office forgive him.” She folds the letter. Her eyes are very bright. “He has been writing to my office for eleven years. Every spring. He has been writing: send no more. Every spring, the office has sent more.”
She looks at you.
“I did not read the letters. Lian Sheng did. I signed what she put in front of me.”
> truth | Tell her you will help her read every letter that came. | fever_close | +fever_su_read +fever_woke_some
> mercy | Ask if she would like to be alone. | fever_close | +fever_su_read +fever_woke_some
> inquiry | Ask where the letters are kept. | fever_close | +fever_su_read +fever_woke_some
> force | Tell her it is time she began to read her own mail. | fever_close | +fever_su_read +fever_woke_some

// ---------------------------------------------------------------- hidden route: cut from the bottom
=== fever_h1 | Cut From the Bottom
You remember the note beside the split root in Master Yao’s walled garden: For the dust. Not for the cup. Cut it from the bottom, where the mist has not reached it yet. You did not know what it meant. You know now.
The dust is made from the top of the root, the part that has reached up into the mist, that has taken in the grief of the abyss path. The bottom of the root, planted in clean earth, is a different thing. It is a cure. It is a slow cure, painful and true, but it needs no cup and no spoon and no dose.
It needs only to be planted.
Master Yao, who has been watching your face, says quietly: “You know something.”
> truth | Tell her what the note said. | fever_h2
> inquiry | Ask her what grows in the town’s old burial ground. | fever_h2
> mercy | Ask whether the roots can be replanted, and how soon. | fever_h2
> quiet | Take a spade from the shed and begin to dig. | fever_h2

=== fever_h2 | A Garden by the Mill
The bottom of a root, planted in clean earth, takes a week to sprout and a month to grow. Master Yao’s garden at the Healer’s Hall is a hundred leagues away. But Green Mill has a graveyard, and in the old part of the graveyard, behind the miller’s plot, a row of blue flowers has been growing wild for eleven years.
You find them at dusk. Each flower has a pale centre, like an eye. A hand-painted sign has been nailed to a post at the end of the row: Do not eat. Do not dream.
You dig. You cut each root from the bottom, where the soil is clean. Gu holds the lantern. Master Yao washes them in a bucket, whispering over each one a name from the row of graves.
> truth | Say the names too, beside her. | fever_h3 | bond:gu+2
> mercy | Ask Gu to hum the tune, so the roots know where they are. | fever_h3 | bond:gu+3
> quiet | Dig in silence, and leave the names to her. | fever_h3
> inquiry | Ask her what the names are. | fever_h3

=== fever_h3 | What Grew
Within the week the graveyard garden is a nursery. The roots, planted in rows in the tilled earth beside the mill, put up pale shoots, and the shoots put up pale flowers. The town comes out to look. They do not ask what it is. They bring watering cans.
The cure is slow, and it hurts. Yao Ling says so every morning to anyone who will listen. It restores the names the way a limb is restored after frostbite, with fire. But it needs no priest, no cup, and no doctor. It only needs time, and a patch of earth.
“It is the first time in eleven years,” she says to you, “that I have not been the only one.”
> truth | Tell her she was never the only one. | fever_close | +fever_woke_some +fever_garden
> mercy | Plant a root yourself, and name it for someone. | fever_close | +fever_woke_some +fever_garden
> quiet | Stand with her at the edge of the beds and say nothing. | fever_close | +fever_woke_some +fever_garden
> inquiry | Ask how long before the town is well. | fever_close | +fever_woke_some +fever_garden

// ---------------------------------------------------------------- close
=== fever_close | Green Mill, Awake
The great wheel still turns, and the mill still grinds, and the market is loud. It is a different noise: ordinary, bad-tempered, ragged. People shout. Two women argue over the price of a carp. A child, in the lane, is howling at the top of her lungs, and her mother is crying beside her, and both are alive.
+[appr] fever_a1 | You spent the week in a sick-house, pouring cups for people who did not want to remember.
+[appr] fever_a2 | You carried two thousand jars to a quay in a night, and the river carried them on.
+[appr] fever_a3 | You filled twelve white jars with plain tea, and a town woke slowly, like a hand coming back from the cold.
+[appr] fever_a4 | You asked a headman to ask his town, and the town answered with its hands.
+[how] fever_su_confessed | The Elder stood in front of sixty-four sleepers and said the Law Hall did this. Nobody has stopped talking about it.
+[how] fever_burned | The dust went into the river, and the river took it downstream. Three weeks of cups.
+[how] fever_swapped | Fifty-one households put plain tea in their jars. The dust-seller’s rack is half empty.
+[how] fever_pu_resigned | Headman Pu resigned. The lintel over his door is on the ground.
+[how] fever_garden | A row of blue flowers grows by the mill. Nobody is allowed to eat them.
+[yao] fever_yao_here | Master Yao stands at the quay with her sack, watching the barge.
+[seller] fever_a3_took_ledger | The dust-seller’s ledger is in your sleeve, four hundred names with the dates they began.
+[seller] fever_a3_took_bribe | The dust-seller’s purse is in your sleeve. It is heavier than you remember.
+[su] fever_su_read | The Elder has begun to read her own mail.
+ fever_a2_dam | A dam was begun at the second bend of the river. No one yet knows if it will hold.
+ fever_woke_some | Some of the town woke, and some chose not to. No one can say which was braver.
+[ren] fever_a2_warden_ally | The warden with the key walked off with a jar under her arm, to show her old comrades what it was.
> truth | Say goodbye to Master Yao, and promise to send word. | fever_close2
> quiet | Stand at the rail and watch the wheel turn. | fever_close2
> mercy | Leave the rest of your tea at the sick-house door. | fever_close2
> inquiry | Find the Elder, and ask what she will do about the other towns. | fever_close2

=== fever_close2 | What the Dust Cost
The Elder sits alone in the barge’s stern with a bundle of letters in her lap. She reads each slowly, and sets it on the left or the right. The left pile is much larger.
“Eleven years of letters,” she says. “Lian Sheng kept them in a drawer. I found them in the second ledger, tucked behind the page for the Sealing. She must have been afraid I would look.” Her mouth quirks. “She must have been afraid I would look for her.”
She taps the stack.
+ fever_a1_told_susu | You told a child, plainly, that her mother was gone. Elder Su has not forgotten.
+ fever_a1_softened | You softened a hard thing for a nine-year-old, and Su-Su asked for you by name this morning.
+ fever_a1_lied_susu | You told a child her mother was on the river. The Elder has not mentioned it, which is itself a kind of mention.
+ fever_a4_forced_ask | You made a headman ask his town whether it wished to remember. He is still trembling.
“I will stop it,” she says. “Not as the Elder. As the Registrar who signed. It is a different kind of authority, and it has the advantage of being mine.”
> truth | Offer to carry the letters to the Assembly with her. | hub_b2_road | +b2r_fever npc:SU_FEVER_LETTERS
> mercy | Fetch her a cup of tea, plain, and put it by her hand. | hub_b2_road | +b2r_fever npc:SU_FEVER_LETTERS
> quiet | Sit with her while she reads the rest. | hub_b2_road | +b2r_fever
> inquiry | Ask which of the letters she most dreads to open. | hub_b2_road | +b2r_fever npc:SU_FEVER_LETTERS
`,
  scenarios: String.raw`
$ SU_FEVER_CONFESS | trust+4 respect+5 fear+4 | elder | The Elder tells a sick-house full of sleepers that the dust was the Law Hall’s doing, and the player stands beside her.
hostile: You stood beside me while I confessed. I did not ask you to. I will not thank you for it. I am not sure whether you meant the courtesy or the display.
wary: I said it to sixty-four faces that did not know whether to hate me. You stood next to me. It was the closest I have been to forgiven in a decade, and I do not trust it. But I am grateful.
neutral: I confessed. It was shorter than I expected, and more terrible. You did not look away. I think I will remember that longer than I will remember the sleepers.
warm: I have spent twelve years wishing someone would stand next to me while I said a hard thing aloud. I did not know I would be so glad when it happened. Thank you, Wanderer. I will not forget.
devoted: I said it, and you stood beside me, and I thought of my sister. She would have stood there too. She would have said something rude. I think you would have liked her.

$ SU_FEVER_LETTERS | trust+3 respect+2 | elder | The Elder reads eleven years of letters from a town that begged her office to stop sending dust.
hostile: Eleven years of letters, and you offer me a cup of tea. I am not sure whether you are being kind or whether you are watching me read. Either way, I would rather be left alone.
wary: A headman wrote to my office every spring for eleven years, and begged. I did not read one. You offer me company, and I am trying to decide whether I have earned it.
neutral: Left pile, right pile. The left is for the ones I should have answered. The right is for the ones I should have stopped. The right is empty. I think that says something about me.
warm: Sit. Read with me. It is the only way I can bear it. Every one of these was a person who asked for a thing I could have given, and I will read them all, aloud if need be, to someone who will not look away.
devoted: You stay while I read my own sins aloud. I did not know a person could do that for another. I am no longer afraid of the left pile. I am only sorry it took so many years.
`,
  remarks: String.raw`
% fever_yao_later | since:fever_yao_here>=20 | elder | A message came from Master Yao by river post. She says the blue flowers by the mill have begun to seed. She says to tell you she was never the only one. I do not know what that means, but I know you do.
% fever_susu_later | since:fever_a1_softened>=18 | gu | Su-Su gave me her doll to carry. She said it was not for me, it was for you, and I was only to hold it until you were ready. I am holding it. I do not know what ready looks like.
% fever_garden_later | since:fever_garden>=22 | elder | There are blue flowers at the edge of the Law Hall’s walled garden now. A servant planted them. I did not ask who told her. I did not stop her.
`,
};
