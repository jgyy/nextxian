import type { Arc } from "../types";

/**
 * Book Two, arc eight: the Silk Quarter. The weavers of Qinglian Ford make the Concord's grey ledger-cloth and its white
 * sashes, and a name-tax is stitched into every yard. A dye-works burns, and the smuggler captain Yue Zhaoning has a stake
 * in who gets blamed. Four ways to stand with the guild: petition the Assembly (a1), break the blockade (a2), con the
 * tax-assessor (a3), find who set the fire (a4). A hidden route reads Gu's mother's red cord as a smugglers' knot-code.
 * Cast: Yue Zhaoning, Madam Qi, the assessor Fang Shuo, the dyer boy Ah Tan.
 */
export const silk: Arc = {
  id: "silk",
  name: "The Silk Quarter",
  scenes: String.raw`
=== silk_entry | A Quarter That Smells of Madder
The Silk Quarter is the only part of Qinglian Ford that does not stand on a canal bank. It stands on stilts in the shallows, row on row of long timber houses, and between them the dyers have strung their cloth to dry. Madder red, indigo, weld yellow, the cold pale green of a plant that grows only on the Salt Coast: a thousand banners hung motionless over the water.
At the quarter’s mouth a crowd stands around a house that is no longer there. The Qi family’s dye-works has burned in the night to its piles, and the stilts stand in the water like black teeth. Concord clerks in grey sashes walk among the weavers with ledgers, and the weavers do not look at them.
A woman leaning on a bollard turns her head. She is thirty-five or so, in a sea-coat the colour of tar, with a scar through one eyebrow and a smile she is not wasting on anyone yet.
“You’re the witness,” says Yue Zhaoning. “The one who stood a river on its head. I’d buy you a drink, but I’d like to see which way you jump first.”
> truth | Ask Madam Qi, the guildmaster, what the guild wants, and offer to carry it to the Assembly. | silk_a1s1 | +silk_a1
> force | Go with Yue Zhaoning to the blockade the Concord has put across the quarter's canal. | silk_a2s1 | +silk_a2
> deceit | Offer to deal with the Concord's assessor, who is making an accounting of the loss. | silk_a3s1 | +silk_a3
> inquiry | Walk the burned stilts at low tide, and see who set the fire. | silk_a4s1 | +silk_a4
> mercy | Hold out your wrist, where a red cord is tied, and ask Yue Zhaoning if she knows the knot. | silk_h1 |  | dep_cord | You wear no cord that a smuggler could read.

// ---------------------------------------------------------------- a1: petition
=== silk_a1s1 | The Guildmaster
Madam Qi receives you in the weavers’ hall, a long room whose roof beams are hung with swatches of every cloth the guild has ever made. She is eighty, upright as a loom-post, with a cloth cap and hands that have not been still in seventy years. She is working on a sash as she speaks, a white sash, with a closed eye stitched into the end.
“Eight hundred yards a day,” she says. “Every yard stamped with a name. The Concord takes the name, to put in its register, and pays us a copper. We do not complain. We have not complained in sixty years.” She holds up the sash. “Now they say the dye-works burned because we were careless. They say we owe the loss.”
Her needle goes in and out.
“I would like to say something to the Assembly, if you would carry it.”
> truth | Tell her you will carry whatever she needs said. | silk_a1s2
> inquiry | Ask what she means by stamping a name on every yard. | silk_a1s2
> mercy | Ask how many of the weavers have lost their homes tonight. | silk_a1s2
> quiet | Sit down opposite and take up a needle. | silk_a1s2

=== silk_a1s2 | The Name-Tax
“A cloth takes a name,” says Madam Qi. “It is old craft. A weaver puts a name in a bolt as a prayer, for the dead, for the child, for luck. The Concord found that a stitched name is a written name. A name in a sash holds, wherever the sash goes. They buy the cloth to hold the names of their Censors, and their wards, and the families they wish to remember.”
She turns the white sash in her fingers.
“A stitched name can also be unpicked. We have always known that. The Concord has never said so aloud. It is a thing weavers do not say.”
Her eyes, black and small, are very steady.
“I have unpicked eleven hundred names in sixty years. For women who asked me to. For families who wished to be forgotten. They did not tell me why.”
> truth | Ask whether she has ever unpicked a name that someone wanted to keep. | silk_a1s3
> mercy | Tell her it was a kindness, to those who asked. | silk_a1s3
> inquiry | Ask who taught her to do it. | silk_a1s3
> force | Tell her the Concord will call it forgery. | silk_a1s3

=== silk_a1s3 | A Petition in Thread
The petition is not written. It is woven. Madam Qi shows it to you on a loom the length of the hall: a bolt of undyed silk, thirty feet, on which every weaver in the quarter has worked a line in silk thread. Each line is a name and a promise. Each promise is the same. We will not unpick a name without being asked.
“It is a plain thing,” she says. “It asks the Assembly to say aloud that the Ledger belongs to the people it names, and not to the sashes that carry them. It asks nothing else.”
She smooths the cloth.
“They will say it is an insult. They will say a bolt of silk is not a petition. We say it is the only one that can be read in a dark room.”
> truth | Promise to hand it to the Assembly's herald, in front of the Censors. | silk_a1s4
> mercy | Add a line of your own to the bolt. | silk_a1s4
> inquiry | Ask what the weavers will do if the Assembly refuses. | silk_a1s4
> quiet | Run your fingers over the thread, feeling the names. | silk_a1s4

=== silk_a1s4 | The Line You Stitch
Ah Tan, the dyer’s boy, shows you the stitch. He is thirteen and has indigo to the elbows, and he does not look up as he guides your fingers through the cloth. “Over, under, back,” he says. “Like a boat. Do not pull. The name will tell you how hard to hold.”
You stitch a line you did not plan. It is not your name; you haven’t one. It is a short line, in a plain stitch: the fifteen. The fourteen, and Mengjiao. You do it by feel, and when you tie off the thread the cloth is warm.
Ah Tan looks at it a long moment. “That’s a good stitch,” he says. “It’ll hold.”
Behind you, in the doorway, someone laughs softly. It is Yue Zhaoning, leaning on the lintel with her arms folded.
> truth | Greet the smuggler captain, and ask what she thinks of the petition. | silk_a1s5 | +silk_met_yue
> quiet | Finish your knot and say nothing. | silk_a1s5 | +silk_met_yue
> inquiry | Ask her why she has come. | silk_a1s5 | +silk_met_yue
> mercy | Offer her a needle. | silk_a1s5 | +silk_met_yue

=== silk_a1s5 | The Captain’s Offer
“It’s a pretty thing,” says Yue Zhaoning. “It will get you nowhere.” She comes in, lazily, and sits on the edge of the loom. “I run cargo. I run it under the Concord’s nose. I have run grey cloth to the Salt Coast, white sashes to the steppe, and one Censor’s mistress to a convent. I have no politics. I have a very good boat.”
She bounces her heel against the beam.
“Madam Qi’s petition will be read, if at all, on the third day, after lunch, by a herald who is already asleep. I could get you into the Assembly Hall with it by the back stair. A boat, a lantern, a cousin in the kitchens. No sashes.”
She smiles. It is a good smile; it lights one half of her face.
“I only ask for one thing. That if I ever need a favour, you remember who offered first.”
> truth | Tell her you will take the herald's front door, and the favour anyway. | silk_a1s6 | +silk_yue_favour
> deceit | Accept the back stair, and tell her you'll remember. | silk_a1s6 | +silk_yue_favour +silk_a1_back_stair
> mercy | Ask what she wants it for, and whether the favour will hurt anyone. | silk_a1s6 | +silk_yue_favour
> force | Tell her you'll take the favour, and if she tries to collect it wrongly, you'll break the boat. | silk_a1s6 | +silk_yue_wary

=== silk_a1s6 | The Third Day
The Assembly Hall of the Concord is a round room of white stone, whose floor is inlaid with a map of the nine peaks and whose roof is a single dome of blue glass. In the centre stand nine chairs. Around them, on tiered benches, hundreds of delegates, in sashes, wait for the day’s business.
You carry a bolt of silk, rolled on a staff. The herald is, as predicted, drowsy. He is a stout man in a green coat, and he accepts the staff with the air of a man receiving a dead fish.
“The weavers’ guild,” he mutters. “A petition. In thread.” He unrolls the first foot of it. His eyes pass over the stitched names. They stop.
He reads a line aloud, to no one. It is yours.
> truth | Wait. Do not speak. | silk_a1s7
> inquiry | Ask him to read the whole thing. | silk_a1s7
> mercy | Stand beside Madam Qi, who has come in on Ah Tan's arm. | silk_a1s7
> force | Tell him that a dead fish still deserves to be unwrapped. | silk_a1s7

=== silk_a1s7 | Read in a Dark Room
He reads it all. It takes twenty minutes. The Hall grows quiet as he goes; delegates lean forward to hear; a Censor in the second row puts down her fan. When he has finished, he lowers the bolt and says, unexpectedly, to the room at large, “I don’t know who stitched the last line. But it is a good line, and I have not heard it before.”
Silence follows. It is a long silence. Then a voice from the benches, an old woman’s, cracked and clear: “Let it be entered.”
A second voice. A third. The herald looks flustered.
Duan Wuyi, at the high table, lays down his brush and says quietly, “So entered.”
> truth | Thank the herald. | silk_a1s8
> mercy | Help Madam Qi to a bench. | silk_a1s8
> quiet | Slip out of the Hall and let the weavers have their moment. | silk_a1s8
> inquiry | Ask Duan what 'entered' means for the guild. | silk_a1s8

=== silk_a1s8 | What Entered Means
It means very little and a great deal. The petition has no force of law. But a thing entered in the Assembly’s record becomes a thing the Assembly has heard; and a thing it has heard cannot be struck. Duan explains it later, at the quayside, with a cup of tea. He says it is the first time in thirty years that the Assembly has recorded a statement it did not itself write.
“I shall be reprimanded,” he says. “It will take them a month. By then the guild will have made a hundred thousand yards of cloth that says what it said.”
He sips.
“Tell Madam Qi that the Concord is a house with many doors. She has found a small one. I should be careful that it is not nailed shut.”
> truth | Promise to tell her. | silk_close | +silk_petition_entered
> mercy | Ask whether the Concord will punish the guild. | silk_close | +silk_petition_entered
> inquiry | Ask which door he thinks is largest. | silk_close | +silk_petition_entered
> quiet | Finish your tea and say nothing. | silk_close | +silk_petition_entered

// ---------------------------------------------------------------- a2: the blockade
=== silk_a2s1 | The Blockade
The Concord has thrown a chain across the quarter’s canal. Not a metaphor: a great rusted chain, hung from two stone posts and draped in the water, and behind it three grey-sashed barges with lanterns lit, and a clerk on a platform with a speaking-trumpet. The dyers’ barges are lined up on the far side, laden with madder root, and no one can pass.
“Until the loss is assessed,” the clerk is announcing, in a cracked voice, “no vessel may leave the quarter.”
Yue Zhaoning stands in the prow of her narrow black boat with her coat blown back and a long pole in her hand. She has the look of a woman who is deciding between two pleasures.
“You’re an honest witness,” she says. “I could use one. I’m going to cut the chain.”
> force | Climb aboard. | silk_a2s2 | +silk_met_yue
> truth | Tell her cutting a Concord chain will bring the whole quarter down on her. | silk_a2s2 | +silk_met_yue
> inquiry | Ask what is in the dyers' barges that matters so much. | silk_a2s2 | +silk_met_yue
> deceit | Offer to distract the clerk while she works. | silk_a2s2 | +silk_met_yue

=== silk_a2s2 | The Black Boat
The boat is narrow, shallow-draught, with a tarred hull and a mast that folds, and she poles it with the unhurried grace of someone who has never been aground. Gu Hanzhen sits in the stern with a wide-eyed look. Ren Qiao sits amidships with his arms across his chest, as a man does who has been asked to stand where the danger is, and is not sure he approves of where it is.
“The chain is rust and pride,” says Yue Zhaoning. “It weighs a ton and it holds nothing. The posts are the point. Hit the left one with a ram, and the chain falls into the water of its own accord.”
She taps the bow.
“I have a ram. It’s a very good ram.”
> force | Take the oar, and say you'll hit it harder. | silk_a2s3
> inquiry | Ask what the ram is made of. | silk_a2s3
> truth | Say you'll back her, but you won't hurt the clerk. | silk_a2s3
> quiet | Watch the barges, and count the lanterns. | silk_a2s3

=== silk_a2s3 | The Clerk With the Trumpet
The clerk on the platform sees the black boat too late. His trumpet falls from his hand and rolls into the water. He stares, pale, at the prow bearing down on the left post, and begins to say, in a falsetto, “In the name of the Concord—”
Ren Qiao has stood up. “Easy,” he says, mildly. “I am a warden. The Elder of the Law Hall has an interest in this quarter. If you give the order to row, I will assume you meant to stop us, and will take it personally.”
The clerk shuts his mouth. Behind him, the three grey barges sit still on the water, their oarsmen watching, with the immobile courtesy of men who have been paid to follow orders they do not understand.
> truth | Shout to the oarsmen that they can go home. | silk_a2s4
> force | Tell Yue to hit the post. | silk_a2s4
> quiet | Hold the boat steady, and see who moves. | silk_a2s4
> mercy | Throw the clerk a rope to fish out his trumpet. | silk_a2s4

=== silk_a2s4 | The Ram
She hits the post at a walk. The ram is an oak beam wrapped in sacking and sheathed in iron, and it makes a sound like a dropped bell. The stone shivers. A dark line runs up the post to the cap. For a moment nothing happens, and the clerk says, tremulously, “There. You see—”
And the post falls.
It topples slowly, majestically, into the water, taking the chain with it. A great swell rises. The grey barges bob. The dyers’ barges, freed, begin to move forward with a hoarse cheer, and Ah Tan, in the bow of the first, stands up and waves a bolt of madder-red cloth over his head like a flag.
Yue Zhaoning whoops, once, wildly. Her hair has come loose.
> force | Whoop with her. | silk_a2s5
> truth | Check that no one was hurt. | silk_a2s5
> mercy | Throw a line to the nearest dyers' barge. | silk_a2s5
> inquiry | Look at the fallen post and see what was inside it. | silk_a2s5

=== silk_a2s5 | What Was in the Post
The post is hollow. Inside, wrapped in oilcloth, is a bundle the length of a forearm. The ram has split the stone and the bundle has fallen into the shallows, where it floats, bobbing, face up. You wade in and fish it out.
It is a bolt of grey cloth, tightly rolled. Unrolled on the deck of the black boat, it is a few feet of ledger-cloth stamped at every handspan with a name. Not one name. The same name, stitched over and over, in a tiny regular hand: Su Mengjiao.
Yue Zhaoning has stopped whooping. She is looking at the cloth with a face you cannot read.
“So,” she says. “That’s where it went.”
> truth | Ask her what she means. | silk_a2s6
> inquiry | Ask who stitched them. | silk_a2s6
> force | Tell her you're keeping it. | silk_a2s6
> quiet | Say nothing, and wrap it up again. | silk_a2s6

=== silk_a2s6 | Yue’s Cargo
“Eleven years,” she says. “I’ve been running these. A bolt a month, from a woman on the Salt Coast to a woman on the river. I never knew what they were for. The Concord pays me to look for contraband, and I never looked inside.” She turns the cloth in the lamp. “It’s the same name every time. I thought it was a charm.”
Her laugh is short. “It’s a Ledger. A private one. A name stitched eleven years into grey cloth, a handspan at a time, by someone who didn’t want it forgotten.”
She looks up.
“Whoever stitched it has stitched forty thousand times. Whatever that name is, it’s been remembered harder than any name in the Ledger.”
> truth | Tell her who Su Mengjiao is. | silk_a2s7
> mercy | Tell her it's the name of someone who is loved. | silk_a2s7
> inquiry | Ask who the woman on the river is. | silk_a2s7
> quiet | Keep what you know to yourself. | silk_a2s7

=== silk_a2s7 | The Woman on the River
She will not tell you at once. But she does, on the third evening, in the stern of her boat as it nudges the stilts of the Silk Quarter in the dark. She says the woman on the river is called Madam Qi. She says she has known her for twenty years. She says there is a loom in the cellar of the guild-hall that Madam Qi works alone, at night, with the shutters closed.
“I don’t ask,” she says. “It’s the only way to stay in business.”
The guildmaster, you realise, has been stitching the same name for eleven years, to the Salt Coast and back.
“And the woman on the coast?” you ask.
“Her name is Mu Ling,” says Yue Zhaoning. “She runs a harbour. She was a listener’s mother, I think. I never asked.”
> truth | Thank her, and tell her you will not betray the guildmaster. | silk_a2s8
> inquiry | Ask her to take you to the Salt Coast, someday. | silk_a2s8
> mercy | Ask what the stitching is for. | silk_a2s8
> quiet | Sit silently with her in the dark and watch the water. | silk_a2s8

=== silk_a2s8 | Cut Chain, Open Water
By dawn the Concord’s clerk has filed his report, the dyers have taken their madder to the vats, and Duan Wuyi has arrived on the quay in his grey coat with his staff in his hand. He surveys the fallen post, the broken chain, the black boat with its sacking-wrapped ram.
“Property damage,” he says. “One chain. One stone post. One tax-assessor’s trumpet.” He turns to you. “I am obliged to ask who did it.”
Yue Zhaoning has her arms folded and her chin up. Ren Qiao is looking at the sky.
“I am also obliged to say,” Duan continues, with a faint curve of his lips, “that I did not see. I arrived a moment ago.”
> truth | Say you were aboard, and you take responsibility. | silk_close | +silk_chain_cut +silk_a2_owned
> force | Say the chain deserved it. | silk_close | +silk_chain_cut
> quiet | Say nothing, and let Yue Zhaoning answer. | silk_close | +silk_chain_cut
> mercy | Say it was the post that fell, and no one's fault. | silk_close | +silk_chain_cut

// ---------------------------------------------------------------- a3: the assessor
=== silk_a3s1 | The Assessor
Fang Shuo is a long thin man in a grey coat with a ledger under his arm and a nose that has seen many things it did not wish to. He is sitting on a stool at the edge of the burned stilts, in the pale morning, surrounded by a ring of weavers who watch him in silence, and he is writing numbers.
“Total loss,” he says, without looking up, “is eleven hundred taels. I should add that the guild is liable for all of it. Fire is a matter of negligence. Negligence is a matter of record.”
He underlines something.
“I am, of course, open to a more generous reading. If there were an explanation.”
> deceit | Offer to produce an explanation. | silk_a3s2
> truth | Tell him you'd like to see the books. | silk_a3s2
> inquiry | Ask what kind of explanation he has in mind. | silk_a3s2
> mercy | Ask whether the guild can pay in cloth. | silk_a3s2

=== silk_a3s2 | What He Wanted
He wants nothing, at first. He is a Concord man, and a Concord man does not want. He tells you at length how little he wants, and how the fire is a regrettable accident of the dye trade, and how the guild’s assessment is a private matter. Only after the third cup of tea, in the back room of the guild-hall, does he lower his voice.
“I have a daughter,” he says. “She wants to marry a poet. A Concord clerk’s salary will not keep a poet. I need four hundred taels.”
He looks at the ceiling.
“It is, of course, a loan. Which I shall repay with my best professional attention.”
> deceit | Agree, and ask him how much attention four hundred buys. | silk_a3s3
> truth | Tell him you will not bribe a Concord officer. | silk_a3s3
> inquiry | Ask who set the fire. | silk_a3s3
> force | Tell him the Elder of the Law Hall would be interested in his arithmetic. | silk_a3s3

=== silk_a3s3 | A Forged Ledger
You do not have four hundred taels. You have a forger. His name is Gu Hanzhen and he has sat for six hours in the weavers’ hall learning to imitate an assessor’s hand, with the intense, appalled concentration of a boy doing something unlawful for good reasons.
“It’s not that hard,” he whispers. “They all write the same. They’re all taught the same, by the same book.” He dips his brush. “He’s left the line for ‘cause’ blank. I will fill it in.”
You look over his shoulder. He writes, in Fang Shuo’s neat dry hand: Fire begun by a spark from the drying-racks, in a high wind, in an unseasonal heat. Not attributable.
Gu looks at you. “It’s even true. I think.”
> truth | Praise his hand, and tell him to sign it as himself. | silk_a3s4 | bond:gu+2
> deceit | Tell him to add Fang Shuo's seal, which he has already copied. | silk_a3s4 | bond:gu-1
> inquiry | Ask whether he really thinks it was an accident. | silk_a3s4
> quiet | Take the page, and read it twice. | silk_a3s4

=== silk_a3s4 | The Switch
You swap the ledgers at noon. It is a simple trick, and only simple because Fang Shuo is the kind of man who leaves his ledger on a stool when he goes to eat. You have a fresh page, a hand like his, and a quarter of an hour. You sit on the stool, and the weavers pretend not to see.
You have almost finished when a shadow falls across the page.
It is a young woman in a grey sash, with a stern, plain face and an iron bar in her hand. She stands there for what feels like a very long time, looking at the ledger. At the forged seal. At you.
“Inspector Mei,” you say.
> truth | Tell her what you're doing, and why. | silk_a3s5
> deceit | Tell her you're helping the assessor tidy his accounts. | silk_a3s5
> quiet | Say nothing. Let her speak. | silk_a3s5
> force | Close the ledger and stand. | silk_a3s5

=== silk_a3s5 | Mei Qiu Reads
She reads it. She does not take the ledger from you; she reads over your shoulder, with the air of a woman who has audited a great many forged ledgers and has an opinion on every kind. At the end of the page she makes a small dry sound.
“The seal is a good copy,” she says. “The hand is better. Whoever did this has an eye.” She straightens. “The cause is plausible. It is also wrong.”
She looks at you flatly.
“I have been at the burned stilts since dawn. The fire began at the north corner, in the stores, by a lamp left lit on a bale of dry silk. It was not a spark. It was set.”
> truth | Ask her who set it. | silk_a3s6
> inquiry | Ask how she knows. | silk_a3s6
> mercy | Tell her you'd rather the guild not be blamed for arson. | silk_a3s6
> quiet | Wait for her to say it. | silk_a3s6

=== silk_a3s6 | A Lamp on a Bale
“The lamp was a Concord lamp,” says Mei Qiu. “Brass, with a closed eye on the base. It was issued to the assessor’s office in the spring. It was found in the ash, and the base had not melted.” She holds out a hand. In her palm is a small, scorched ring of brass.
She says it quite calmly. “Fang Shuo’s office was in the stores at the time.”
You stare at the ring. Behind you, in the guild-hall, a chair scrapes. Fang Shuo is standing in the doorway with his hands at his sides, grey in the face, and in his eyes there is the look of a man who has been waiting for the wrong person to find the right thing.
“I did not set it,” he says, quietly. “I have never lit a lamp in my life.”
> truth | Tell him you believe him. | silk_a3s7
> inquiry | Ask who had keys to the stores. | silk_a3s7
> force | Tell him a lamp does not light itself. | silk_a3s7
> mercy | Ask him to sit down. | silk_a3s7

=== silk_a3s7 | Who Had the Keys
“Four people,” he says, sitting. “Myself. My clerk. The warden of the quarter. And the guild’s treasurer, Madam Qi’s son-in-law, who owes the Concord six thousand taels.” He pulls at his collar. “I have been telling myself it was an accident since dawn. I could not afford it to be anything else.”
Mei Qiu does not blink. “The treasurer is in debt. The stores held the guild’s ledger, which proves the debt is larger than he admits. If the dye-works burned, so did the proof.”
She puts the ring in her pocket.
“I think you came to forge a ledger,” she says to you. “I think you have found a better use for your time.”
> truth | Offer to find the treasurer with her. | silk_a3s8
> inquiry | Ask where the original ledger might survive. | silk_a3s8
> mercy | Tell Fang Shuo he did right to say it. | silk_a3s8
> deceit | Tear up the forged page, and burn it. | silk_a3s8 | +silk_a3_burned_forgery

=== silk_a3s8 | A Debt Paid in Ash
They find the treasurer in an inn on the Silver Canal, with a bottle in front of him and the original ledger in a satchel at his feet. He is a soft, frightened man with ink on his thumb, and he gives it up without a word. In it, in his own writing, is the proof: six thousand taels owed to a man called Dai Ming.
You recognise the name. It sits in your head like a stone.
“A factor,” says Mei Qiu, who has read the line over your shoulder. “From Kuan Landing.” She says it in the flat tone of a woman putting one more piece in a very large board.
She looks at you. For the first time, she smiles. It is not a nice smile. It is a good one.
> truth | Take the ledger to the Censor-General. | silk_close | +silk_ledger_to_duan
> mercy | Let the treasurer go home to his wife. | silk_close | +silk_ledger_to_duan
> inquiry | Ask Mei Qiu what the Concord does with a man who sets fires for a factor. | silk_close | +silk_ledger_to_duan
> quiet | Hold the ledger, and say nothing. | silk_close | +silk_ledger_to_duan

// ---------------------------------------------------------------- a4: who set the fire
=== silk_a4s1 | At Low Tide
At low tide the burned stilts stand in thick black mud, with the river pulled back from them like a hem. You go out among them in rolled-up trousers, with Gu behind you, carrying the lantern. Ash lies in the mud in a skin. Burned silk, charred to a fine black net. The smell is of wet cinders and madder.
You walk the length of the north row. At the corner the posts are blacker than the rest, the char deeper. Something has burned here hotter than a spark. Something was poured.
Gu crouches in the mud. “Smell,” he says. “Under the ash. Oil. Lamp oil.” He looks up. “Not tallow. The good kind. The kind they use in the Law Hall.”
> truth | Tell him not to say that so loudly. | silk_a4s2
> inquiry | Dig a little, to see how far the oil goes. | silk_a4s2
> mercy | Ask whether he's all right. | silk_a4s2
> quiet | Look around for anyone else watching. | silk_a4s2

=== silk_a4s2 | A Witness in the Reeds
A boy is watching you from the reeds. He is perhaps thirteen, with indigo to the elbows, thin and shivering in the damp. He doesn’t duck when you see him. He stands very straight, as a boy does who has decided to be brave.
“You’re the witness,” says Ah Tan. “Madam Qi said you might come.”
He wades out, until the mud is at his shins, and holds out a small damp package wrapped in oilcloth. “I saw them,” he says. “I was sleeping in the drying loft. I saw two men carry a barrel into the stores. They had Concord sashes. They had lamps.”
His teeth are chattering.
“I didn’t tell the clerk. The clerk was one of them.”
> truth | Tell him you believe him, and wrap him in your coat. | silk_a4s3
> mercy | Take his hand and lead him out of the mud. | silk_a4s3
> inquiry | Ask him what the men looked like, in order. | silk_a4s3
> quiet | Take the package, and say nothing. | silk_a4s3

=== silk_a4s3 | What the Boy Saw
In the package are two things: a Concord sash with a burnt corner, and a scrap of paper. The paper is a receipt, for a barrel of lamp oil, delivered to the Silk Quarter stores on the eve of the fire. It is stamped with a closed eye. The signature at the foot is one you know, a dry, thin hand.
Fang Shuo.
Ah Tan watches your face. “I think he’s the one,” he says. “He was there, and he’s a Concord man, and he wants to blame us.” He shifts. “But he’s not the one who had the lamps.”
“Who had the lamps?”
“A tall woman in a cloak. I couldn’t see her face. She had a silver comb in her hair.”
> truth | Ask him to describe the comb. | silk_a4s4
> inquiry | Ask where she went after. | silk_a4s4
> mercy | Tell him not to speak of this again, until you know. | silk_a4s4
> quiet | Stay still. The cold seed in your chest has stirred. | silk_a4s4

=== silk_a4s4 | A Silver Comb
He draws it on the mud with a finger. A plain silver comb, with a small lotus at the head. It is not the Elder’s: yours is in your sleeve, warm, and it carries a lotus on the back, not the head. But it is cut from the same piece of silver, by the same hand. A pair.
Mengjiao’s comb, the one she kept. The one she wore down the abyss path.
Ah Tan stops drawing. He looks at you, frightened by whatever has crossed your face. “Is that bad?”
You are standing quite still. The cold seed in your chest is humming.
> truth | Tell him it is not bad. It is only old. | silk_a4s5
> inquiry | Ask which way she walked, when she left. | silk_a4s5
> mercy | Ask him to stay with Gu, and not wander alone. | silk_a4s5 | bond:gu+1
> quiet | Take your own comb out of your sleeve and look at it. | silk_a4s5

=== silk_a4s5 | Two Combs
You hold the Elder’s comb up in the lantern light. On the back, worn nearly smooth, is a lotus. You turn it over. The teeth are fine, even, silver. On the inner edge, nearly invisible, there is a hairline of engraving: three characters in a script you can only half read.
Gu leans over your shoulder. “It’s a maker’s mark,” he says. “My mother’s cord-knots have those.” He touches it. “It says Silk Quarter.”
You look up at the black ranks of stilts. Somewhere behind you, in the guild-hall, a loom is clacking.
“Someone in this quarter made them,” says Gu. “A pair. A long time ago.”
> truth | Go and ask Madam Qi who made them. | silk_a4s6
> inquiry | Ask Ah Tan whether the quarter has a combmaker. | silk_a4s6
> quiet | Go quietly to the guild-hall and watch. | silk_a4s6
> force | Go and ask Fang Shuo whose comb it was. | silk_a4s6

=== silk_a4s6 | The Loom in the Cellar
Madam Qi is working at night, in the cellar of the guild-hall, with the shutters closed. You hear the loom before you see her: a steady wooden clacking, like a slow heart. She does not stop when you come down the steps. She says, without turning, “I wondered when you would find the cellar.”
On the loom is a bolt of grey cloth. Handspan by handspan, in thread so fine you can only see it by lamp, a single name runs down the weave. Su Mengjiao.
“I stitched it for eleven years,” she says. “She asked me to. She came to the quarter once, as a girl, and I taught her to thread a needle. She never forgot. When the Law Hall sealed her, she sent word through the river. Keep the name. I have.”
> truth | Tell her Mengjiao is alive. | silk_a4s7 | +silk_a4_told_qi
> mercy | Sit down beside her at the loom. | silk_a4s7
> inquiry | Ask who set the fire. | silk_a4s7
> quiet | Listen to the loom for a moment. | silk_a4s7

=== silk_a4s7 | The Fire and the Comb
“Fang Shuo,” says Madam Qi. “He was sent by the factor to burn the stores. The factor holds my son-in-law’s debt. He wanted the ledger, and the debt with it.” She rubs her eyes. “A lamp, a barrel, a night. It was clumsy. He is not an arsonist. He is a man who borrowed against a daughter’s wedding.”
Her loom clacks on.
“The tall woman in the cloak,” you say.
“Is mine,” says Madam Qi. “My granddaughter. Qi Ruyi. She wore the comb to give herself courage. She set a second lamp, to save the cloth. She carried out sixty bolts, by night, before the beams fell. She is twenty years old.”
Her voice does not tremble.
“She is also the person Fang Shuo will say set the fire.”
> truth | Offer to speak for Ruyi in front of the Censors. | silk_a4s8 | +silk_a4_spoke_ruyi
> mercy | Offer to get her out of the city. | silk_a4s8
> inquiry | Ask where the comb came from. | silk_a4s8
> force | Offer to find Fang Shuo and make him confess. | silk_a4s8

=== silk_a4s8 | A Pair of Combs
It is Ruyi herself who tells you, in the end, standing in the cellar door with her arms crossed. She is tall, thin, fierce, with a streak of indigo in her hair. She says the comb was her great-aunt’s. She says her great-aunt wove for a girl in the Azure Cloud Sect who asked for two combs, a matching pair, as a gift for her sister. The weaver made them from one piece of silver. One for each.
“Madam Qi’s sister,” she says. “She died the year of the Sealing. She told Granny the girl would never use hers, and that the other would be used for her. She said they would find each other.”
She holds out her hand. In the palm is the second comb, with a lotus at the head.
“It’s yours,” she says to you. “It has been waiting for someone to bring it home.”
> truth | Take it, and tell her you will bring it to the Elder. | silk_close | +silk_comb_taken +silk_a4_comb_returned
> mercy | Ask her to keep it until the Assembly is over. | silk_close | +silk_comb_taken
> quiet | Take it, and hold the two combs together. | silk_close | +silk_comb_taken +silk_a4_comb_returned
> inquiry | Ask whether the pair have a name. | silk_close | +silk_comb_taken

// ---------------------------------------------------------------- hidden route: the knots
=== silk_h1 | Knot-Talk
Yue Zhaoning notices the red cord on your wrist before you notice her noticing. She is leaning on a bollard, cleaning a knife, and she stops with the blade half out of the cloth.
“That’s a river-knot,” she says. “A double carrick with a warding turn. I haven’t seen one since the Salt Coast.” She comes over and takes your wrist in a hard brown hand, turning it to the light. “Who tied that?”
“Gu Hanzhen’s mother,” you say. “In a village below the Azure Cloud.”
“Hm.” She runs her thumb along the cord. “She’s a smuggler.”
You have never thought of Gu Yunxia as a smuggler. But the way Yue Zhaoning says it is the way a fisherman says ‘she’s a sailor.’
> truth | Ask what the knot says. | silk_h2
> inquiry | Ask how she'd know. | silk_h2
> mercy | Say nothing, and let her read it. | silk_h2
> deceit | Say the knot was a gift, and you don't know what it means. | silk_h2

=== silk_h2 | What the Cord Says
Yue Zhaoning reads the cord like a letter. She says each turn is a word. The first loop is safe harbour. The second is, we will carry for you. The warding knot, the little hook at the end, means that the tier of a knot is a witness, and that anyone who finds the bearer harmed must carry the news to the river.
“It’s a river-mother’s knot,” she says. “Old as the Concord. Older. They’re tied on children who’ll travel. On anyone a mother can’t protect.” She lets go. “Your friend’s mother has been tying them for the Salt Coast for twenty years. Her cords go through every river-port. She doesn’t know it.”
She grins crookedly.
“She’s the best smuggler I’ve ever heard of. She’s never left her valley.”
> truth | Tell her you'll let Gu know. | silk_h3 | +silk_gu_told_knot bond:gu+3
> mercy | Say Gu's mother would be horrified, and then pleased. | silk_h3 | +silk_gu_told_knot
> inquiry | Ask who else wears her cords. | silk_h3
> quiet | Look at the cord, and tighten it a little. | silk_h3

=== silk_h3 | Safe Harbour
Yue Zhaoning looks at you for a long time. Then she undoes her own sleeve and shows you her left forearm. A scar, thin and white, in the shape of a double loop. “My mother tied one like it,” she says. “Same knot, same village, I think. I never knew whose hands.” She rolls the sleeve down. “If that cord is on your wrist, then anyone who sails under a river-mother’s knot owes you passage.”
She holds out her hand, palm up.
“So. That’s me. You owe me nothing. I’d like you to know I owe you a boat.”
> truth | Take her hand. | silk_close | +silk_yue_owes +silk_met_yue
> mercy | Thank her, and say you hope never to need it. | silk_close | +silk_yue_owes +silk_met_yue
> quiet | Nod, and look at the water. | silk_close | +silk_yue_owes +silk_met_yue
> inquiry | Ask what a boat of hers can carry. | silk_close | +silk_yue_owes +silk_met_yue

// ---------------------------------------------------------------- close
=== silk_close | A Thousand Banners
The banners hang over the water in the evening wind, madder and indigo and weld, and the Silk Quarter goes about its business. The dye-works will be rebuilt. The weavers have already begun to argue about the new roof.
+[ap] silk_a1 | You went with a bolt of silk, and the Assembly heard it.
+[ap] silk_a2 | You went with a ram and a smuggler, and the water took the post.
+[ap] silk_a3 | You went with a forger and a scheme, and found a better use for the time.
+[ap] silk_a4 | You went with the tide and a lantern, and found a comb.
+[how] silk_petition_entered | The guild's petition was entered into the Assembly's record, in thread. Madam Qi says it is the first honest bolt the Concord has bought.
+[how] silk_chain_cut | The chain across the canal lies in the water. Yue Zhaoning has been seen buying drinks for dyers.
+[how] silk_ledger_to_duan | The treasurer's ledger is in the Censor-General's hands, and a factor in Kuan Landing has a good deal to explain.
+[how] silk_comb_taken | The second comb sits in your sleeve beside the first. They hum faintly in the dark.
+[yue] silk_yue_favour | You owe the smuggler captain a favour. She has not said what, and you have not asked.
+[yue] silk_yue_wary | Yue Zhaoning watches you with a wary half-smile, since you promised to break her boat.
+[yue] silk_yue_owes | Yue Zhaoning owes you a boat, and a river-mother's knot is on your wrist.
+[a] silk_a1_back_stair | You took the back stair to the Assembly, and the kitchen cousin remembers your face.
+[a] silk_a2_owned | You owned the cut chain in front of the Censor-General, and he wrote it down with a straight face.
+[a] silk_a3_burned_forgery | You burned a forged page in a weaver's brazier, and the smoke smelled of lamp-black.
+[a] silk_a4_spoke_ruyi | You offered to speak for a girl of twenty who carried sixty bolts out of a fire.
> truth | Take the two combs to the Elder on the barge, tonight. | silk_close2 | npc:SU_SILK_COMBS | silk_comb_taken | You have no second comb to bring her.
> truth | Go back to the barge with the news. | silk_close2
> quiet | Walk the stilts at sunset, and let the quarter hum. | silk_close2
> mercy | Leave a bolt of plain silk with Ah Tan, for a coat. | silk_close2 | bond:gu+1
> inquiry | Ask Yue Zhaoning where she goes next. | silk_close2

=== silk_close2 | What the Weavers Know
Yue Zhaoning leaves on the evening tide, her black boat sliding out between the stilts with its mast folded and its pole dipping in the dark. She does not say goodbye. She raises one hand over her shoulder without turning.
Madam Qi stands on the quay, her cap tied under her chin, a small figure in a great wind. She says, abruptly, “The Concord thinks the Ledger is a book.”
You wait.
+ silk_met_yue | The captain’s boat is a dark leaf on the river, and then gone.
+ silk_gu_told_knot | Gu stands beside you, looking at his own wrist, where a cord of his mother’s makes a quiet knot.
+ silk_a4_comb_returned | The two combs hum together in your sleeve like a pair of sleeping bees.
“It is a cloth,” she says. “It is woven. It is made of a great many threads, and each thread is a person, and when one is pulled out the whole piece puckers. They do not know that. They think they are writing. They are weaving, and they are very bad at it.”
She goes back inside.
> truth | Tell Duan Wuyi what the guildmaster said. | hub_b2_city | +b2q_silk
> quiet | Stand on the quay and watch the lamps come on. | hub_b2_city | +b2q_silk
> mercy | Carry a tray of tea back to the guild-hall. | hub_b2_city | +b2q_silk
> inquiry | Ask yourself what a cloth is, and what a Ledger is. | hub_b2_city | +b2q_silk
`,
  scenarios: String.raw`
$ SU_SILK_COMBS | trust+4 respect+2 | elder | The player shows the Elder the second comb, the pair to her sister's.
hostile: A second comb. I have been shown many relics this week, and I am tired of being asked to feel. If it is hers, give it to me. If it is not, take it away.
wary: A pair. My sister told me once that she had a comb that she would not use, and I thought she meant a figure of speech. I will look at it in private, if you will permit me. I find I do not want you to see my face.
neutral: The second comb. It is warmer than I remember. I had thought the pair was lost. I find it is only that I have been looking in the wrong direction.
warm: She had it made for me. I did not know. She gave me the first on the morning of the Sealing and said it was a luck piece for a woman who signs things. She kept the second. She meant me to have both. Sit with me a while, Wanderer.
devoted: Both combs. Both sisters. I will wear them together, one on each side, and let the Concord think what it likes. Thank you. I have no words, and I find I do not need them.
`,
  remarks: String.raw`
% silk_yue_later | since:silk_yue_favour>=16 | elder | A courier brought me a bundle of river-silk with no sender. The knot on the string was a double carrick. I hope you know what it means, because I do not.
% silk_qi_later | since:silk_a4_told_qi>=14 | elder | Madam Qi sent a bolt of grey cloth by the evening boat. It has a name on every handspan. I have been sitting with it for an hour. I do not think I shall ever be able to unwrap the whole of it.
% silk_gu_knot | since:silk_gu_told_knot>=10 & bond:gu>=8 | gu | My mother is a smuggler. I find I am not surprised. I find I am very proud. I find I am going to write her a letter, and I am going to be terribly polite about it.
`,
};
