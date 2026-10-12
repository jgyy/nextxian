import type { Arc } from "../types";

/**
 * Book Three, arc twelve: the Lotus Court. The Hollow Lotus meets in the cellar under the lighthouse to decide what to do with
 * the ninth: use her, hide her, or let her go. Five members vote. Four approaches: answer every question plainly (a1, truth),
 * call out Captain Kou when he proposes a weapon (a2, force), let the court's debts speak for you (a3, deceit), and visit each
 * member alone before the vote (a4, quiet). A hidden route reads the nine-card vow into the minutes.
 * Cast: Madam Ash, Wen Rui, Captain Kou, Father Ma, Mistress Ping, Elder Gan, Qiu as keeper of the door.
 */
export const lotus: Arc = {
  id: "lotus",
  name: "The Lotus Court",
  scenes: String.raw`
=== lotus_entry | The Cellar Under the Lamp
The Hollow Lotus meets once a season, in the cellar under the lighthouse, by the light of a single lamp. There are five chairs round a plain table, and a sixth set apart for the petitioner. The stone walls sweat. The air smells of paraffin and salt. A tall brass door at the head of the stair is kept by Qiu, who sits on a stool with a slate and a mirror and looks about as welcoming as a locked drawer.
Madam Ash has brought you herself. She has changed her gown for a grey one with a high collar and put up her hair with two black pins. She does not speak on the stair. At the door of the cellar she stops.
“I do not vote,” she says. “I never have. I convene. I keep the minutes. I want you to know that I will say nothing in your favour, and nothing against.” Her hand tightens on the rail. “It is the only way it can be fair.”
Five faces turn as you enter. Some you know. Some you do not.
> truth | Sit in the sixth chair, and say you will answer anything. | lotus_a1s1
> force | Look at the big scarred man at the end of the table, who has not stood. | lotus_a2s1 | needs:3
> deceit | Look at the ledgers in front of each member, and think what they could mean. | lotus_a3s1
> quiet | Ask if you may speak to each of them alone before the vote. | lotus_a4s1
> inquiry | Lay the seven cards on the table, in order, and read them aloud. | lotus_h1 |  | mourning_cards_seen | You have not yet read the seven lines.

// ---------------------------------------------------------------- a1: answering
=== lotus_a1s1 | The Five
The five are not what you expected. You thought, from the way the Elder spoke of the Hollow Lotus, that they would be a cabal of grim conspirators in black. They look like a committee of the parish. There is Wen Rui, small and grey, with his clerk’s hands folded on the table. There is a stout priest in patched robes, Father Ma, with a face like a boiled ham and a gentle, worried mouth. There is a handsome middle-aged woman in a merchant’s silk, Mistress Ping, with a gold abacus on a chain. There is a very old man in a white beard, Elder Gan, half asleep in his chair.
And at the end, with his boots on the table, there is a big man with a scarred face and one ear.
“Captain Kou,” says Madam Ash, from the door. “Please take your boots off the court.”
The big man grunts. He does not take them off.
> truth | Sit. | lotus_a1s2
> mercy | Greet Wen Rui. | lotus_a1s2
> quiet | Look at the Captain. | lotus_a1s2
> inquiry | Ask who the Lotus is. | lotus_a1s2

=== lotus_a1s2 | What the Lotus Is
“We are the struck,” says Wen Rui. He speaks softly, as one speaks in a library. “We are those whose names the Concord has removed from the Ledger. We were clerks, and priests, and merchants, and soldiers. We were written out. We do not exist. We have found that it is a useful thing, not to exist.” His small smile is dry. “Nobody asks us for taxes.”
“We have no creed,” adds Father Ma, anxiously. “We do not worship the abyss. We are not a cult. People often assume. I should like that understood.”
“We are not an army,” says Mistress Ping.
“We are a little bit of an army,” says Captain Kou, from the end.
“We are a mutual aid society with ambitions,” says Elder Gan, without opening his eyes.
Madam Ash, at the door, makes a small sound that might be a laugh.
> truth | Ask what the ambitions are. | lotus_a1s3
> mercy | Ask who looks after them. | lotus_a1s3
> quiet | Listen. | lotus_a1s3
> inquiry | Ask how many there are. | lotus_a1s3

=== lotus_a1s3 | Ambitions
“To be written back,” says Wen Rui. “That is the first. A struck name is a debt. Every one of us is owed a name, by a Concord that has refused to pay. We want the Ledger reopened. We want it audited. We want the truth of its entries tried in open court.”
“That is the soft version,” says Captain Kou.
“It is the true one.”
“It is the one for the minutes.” The big man swings his boots to the floor. “The harder version is that the Concord has been poisoning a coast for eleven years, and sealing children in walls for a hundred, and that a court of clerks is not going to stop it.”
He leans forward. His one ear twitches.
“My version is that someone has a weapon. A girl with a seed. And that it is a sin not to use it.”
The cellar is perfectly quiet. Qiu, at the door, stops writing.
> truth | Ask him what he would use it for. | lotus_a1s4
> mercy | Say you are not a weapon. | lotus_a1s4
> quiet | Look at Wen Rui. | lotus_a1s4
> inquiry | Ask what he thinks the seed does. | lotus_a1s4

=== lotus_a1s4 | What the Seed Does
“It opens things,” says Captain Kou. He says it flatly, with the certainty of a man who has read the one book he trusts. “It was cut for a door. A bearer of the black lotus can open a sealed thing. A vault, a ward, a wall. That is what the Law Hall made it for. It was to open the abyss, so that a bearer could be put in.”
“And if she opened something else?” says Mistress Ping.
“The Concord’s fleet is about to anchor off the Wall. It has a chain. It is going to close the bay.” Kou’s scarred face is grim. “If the bearer opened the chain, the fleet would founder in its own harbour. We could end the war in an afternoon.”
“And the chain’s power?” says Father Ma, faintly. “Where does it go?”
“Into the sea.”
“And the sea?”
Kou says nothing.
> truth | Say the chain holds names. | lotus_a1s5
> mercy | Ask who is bound in it. | lotus_a1s5
> quiet | Wait. | lotus_a1s5
> inquiry | Ask Wen Rui. | lotus_a1s5

=== lotus_a1s5 | What the Chain Holds
Wen Rui takes off his spectacles and polishes them. “The chain holds names,” he says quietly. “A hundred links, a hundred names. Each link is inscribed with a person’s name, and each person is bound to the chain until it is lifted. If it were opened by force, the names would be released into the sea, and the people attached to them would go with them. They would drown where they stand.”
“Who?” you say.
“We do not know.” He puts the spectacles back on. “That is the horror of it. The Factor’s ledger lists a hundred and four names. They are all on the coast. They are all alive.”
Captain Kou’s jaw tightens.
“A hundred and four,” says Mistress Ping slowly. “That is the same as the wound.”
“Yes.”
“It is not a coincidence.”
“Nothing in the Concord is,” says Wen Rui.
> truth | Ask whether Shu Ning’s counter-seal would help. | lotus_a1s6
> mercy | Say you would never. | lotus_a1s6
> quiet | Look at Kou. | lotus_a1s6
> inquiry | Ask what they would do instead. | lotus_a1s6

=== lotus_a1s6 | A Question for the Bearer
“We have not decided,” says Elder Gan. It is the first thing he has said. His voice is a dry rustle. He opens his pale eyes. “That is why you are here. That is the whole of the court. We have a bearer, and a chain, and a fleet. We are asking the bearer what she will do.”
“It is not a vote on you,” says Father Ma. “It is a vote on whether to trust you.”
“It is a vote on whether to follow you,” says Mistress Ping.
“It is a vote on whether to be used,” says Captain Kou.
Madam Ash, at the door, does not stir.
You look at the five faces. They look back. They are tired and wary and, beneath it, strangely hopeful. They have been waiting a long time for a person to tell them what to do.
“What would you like me to say?” you ask.
“The truth,” says Wen Rui.
> truth | Tell them you do not know. | lotus_a1s7
> mercy | Tell them you will not be used. | lotus_a1s7
> quiet | Tell them you will not use them. | lotus_a1s7
> inquiry | Ask what the truth is, in their experience. | lotus_a1s7

=== lotus_a1s7 | What You Said
You tell them. It is not a speech. It is the plainest thing you have ever said. You say that you were found in a basket and raised in a village, and that you do not know what the seed is for, only what it wants. You say you were taken by a woman who was afraid. You say you have met five siblings, and that each of them asked you something, and that you did not know the answer to any.
You say: I do not want to open anything. I want to ask.
Nobody moves. A drop of water falls from the roof into a puddle.
Father Ma has taken out a handkerchief. Mistress Ping is staring at her abacus. Elder Gan has closed his eyes again, and his lips are moving. Captain Kou sits with his arms folded, his scarred face unreadable.
“That is not an answer,” he says at last.
“No,” you say. “It is a question.”
> truth | Hold his gaze. | lotus_a1s8
> mercy | Look away. | lotus_a1s8
> quiet | Wait. | lotus_a1s8
> inquiry | Ask him his. | lotus_a1s8

=== lotus_a1s8 | The Vote
Madam Ash calls the vote. She does it without a tremor, standing in the doorway with her hands folded in front of her. “Wen Rui?”
“For trust.” He doesn’t hesitate.
“Father Ma?”
“For trust,” says the priest. His voice shakes. “I have known her for ten minutes. I find I cannot do otherwise.”
“Mistress Ping?”
“For trust,” says the merchant, slowly. “On terms.”
“Elder Gan?”
The old man’s eyes are shut. “Trust,” he says. “Always trust. It is the only thing that has ever worked.”
“Captain Kou?”
The scarred man is silent. He is looking at his hands. He lifts his head.
“Against,” he says. “But not by much.” His one ear flushes. “If she changes her mind, I want it noted that I said so.”
Madam Ash lets out a long breath.
“Four for. One against,” she says. “The Court so finds.”
> truth | Thank them. | lotus_close | +lotus_trusted npc:SU_LOTUS_COURT
> mercy | Bow to Kou. | lotus_close | +lotus_trusted
> quiet | Look at Ash. | lotus_close | +lotus_trusted
> inquiry | Ask what the terms are. | lotus_close | +lotus_trusted

// ---------------------------------------------------------------- a2: the Captain
=== lotus_a2s1 | One Ear
The big man at the end of the table has watched you since you came in. He has not moved. His boots are on the oak; his hands are laced behind his head; his one ear has gone red. He is the only member of the Court who does not seem to have been told your name. He does not seem to care.
You walk the length of the cellar. You stop in front of him. He looks you up and down.
“What?” he says.
“You have not stood.”
“I do not stand for children.”
“I am not a child.”
“Everyone in this room is a child,” says Captain Kou. “It is the whole trouble. We were children when they struck us, and we have been children ever since.” He grins, with a flash of crooked teeth. “Do you want to sit? I do not mind.”
Madam Ash, at the door, says in a low voice: “Captain.”
“What? I am being hospitable.”
> force | Stay where you are. | lotus_a2s2 | needs:3
> truth | Tell him what you want. | lotus_a2s2
> quiet | Look at his hands. | lotus_a2s2
> inquiry | Ask how he lost the ear. | lotus_a2s2

=== lotus_a2s2 | The Ear
“A Censor,” says Kou. He touches the scarred stump. “Her name was Mei. She had an iron bar. I was a sergeant of the Salt Coast Garrison. I was twenty-two. I was escorting a convoy of calm dust, and she stopped the convoy.”
You stare. “Mei Qiu?”
“The same.” He chuckles. “She was nineteen then. Very tall. Very serious. She knocked me flat with a bar the size of a lamp-post, and bit my ear off when I tried to get up.” He shakes his head fondly. “I fell in love on the spot.”
Mei Qiu, at the back of the cellar, where she has been standing in silence, goes the colour of a beetroot.
“I did not bite it,” she says. “It was an accident.”
“She was aiming for my nose.”
“I was aiming for your ear.”
“Well,” says Captain Kou, with immense satisfaction, “she hit it.”
> force | Try not to laugh. | lotus_a2s3
> truth | Ask how he joined the Lotus. | lotus_a2s3
> quiet | Look at Mei. | lotus_a2s3
> mercy | Smile. | lotus_a2s3

=== lotus_a2s3 | How He Joined
“She asked me,” says Kou. “Afterwards. I was lying on the road with a bloody head, and she sat down on the verge and wiped her bar, and she said: do you know what is in those barrels?” His voice drops. “I did not. I was a soldier. I had a sealed order. She told me. She said: calm dust. It makes a man forget his children.”
He rubs his scarred face.
“I said, that is a damned lie. She said, open one. I did.” He is silent a moment. “I deserted the same night. I went to a house on Bell Lane, and a woman in a black gown gave me a cup of tea.”
His one ear is twitching.
“I have been in this Court ever since. I am not a patient man. I do not like committees. But I will tell you this. I have never once been wrong about a Concord officer. And I do not trust a bearer.”
> force | Ask why. | lotus_a2s4
> truth | Say you do not either. | lotus_a2s4
> quiet | Wait. | lotus_a2s4
> mercy | Say you understand. | lotus_a2s4

=== lotus_a2s4 | Why Not a Bearer
“Because every bearer I have met is a lamb,” says Kou. “A willing sacrifice. It is what the Concord breeds. They put a child in a cell, and teach her she is precious, and when the day comes she walks into the wound smiling.” He leans forward. “I have buried two. I will not bury a third.”
“And you think I am a lamb.”
“I think you are the best-looking lamb I have ever seen.” His grin is not friendly. “But I wonder what happens when the lamb is told to open a gate and it will not.”
He stands. He is huge. His shadow falls across the table, across the five chairs, across you. He draws a long knife from his boot and lays it on the oak between you.
“I propose a test,” he says. “One bout. Bare hands. If you put me on the floor, I vote for you. If I put you on the floor, I vote against.”
Madam Ash says, sharply: “That is not procedure.”
> force | Accept. | lotus_a2s5
> truth | Decline. | lotus_a2s5
> quiet | Look at the knife. | lotus_a2s5
> mercy | Ask what he gains. | lotus_a2s5

=== lotus_a2s5 | A Fair Fight
They clear a space. The chairs are pushed back. Elder Gan wakes and is carried to a stool by the wall, grumbling. Father Ma covers his eyes. Mistress Ping takes off her rings and lays them tidily on the table. Qiu, at the door, has lifted her mirror and is signalling to someone above. You do not look to see who.
Captain Kou rolls up his sleeves. His forearms are the size of hams. He circles with the heavy, flat-footed patience of a man who has done this many times and never lost.
You have no weapon, and no training, and nothing but a scar. You think of the Elder’s hands on the comb. You think of the river village, where you carried water up a hill. You think of Ke-er.
He swings.
It is a slow, enormous, almost lazy blow, meant to be seen coming. You step inside it.
> force | Duck. | lotus_a2s6 | needs:3
> truth | Take the hit. | lotus_a2s6
> quiet | Step back. | lotus_a2s6
> mercy | Say stop. | lotus_a2s6

=== lotus_a2s6 | Inside
You are very small and he is very large. You cannot hit him. You know it at once. You do the only thing you can; you take hold of his sleeve, and you pull, and you drop all your weight to your heels. It is a wrestling throw you learned from a boy of twelve at a pavilion of stone wagers.
He goes over like a felled tree.
There is a crash that shakes the table. A cloud of dust rises from the flags. Captain Kou lies on his back, looking at the roof, with an expression of extreme surprise.
The cellar is utterly silent.
Then Elder Gan, from his stool, begins to laugh. It is a thin cracked cackle like a rusty hinge. Mistress Ping puts her hand to her mouth. Father Ma, peeping through his fingers, makes a faint squeak. And Mei Qiu, at the back of the cellar, bursts into a whoop of laughter so loud and unrestrained that Qiu drops her slate.
> mercy | Offer him a hand. | lotus_a2s7
> truth | Say you are sorry. | lotus_a2s7
> quiet | Step back. | lotus_a2s7
> mercy | Ask if he is hurt. | lotus_a2s7

=== lotus_a2s7 | The Floor
“Fifteen years,” says Captain Kou, to the ceiling. “Fifteen years I have not been on the floor.” He turns his head. His scarred face is split by a slow, huge grin. “Mei. Did you see that?”
“I saw,” says Mei Qiu, wiping her eyes.
“She threw me.”
“She did.”
“With a stone-wagers’ hold.” He sits up, rubbing his neck. “It’s an old trick. I haven’t been caught by it since I was nine.” He shakes his head in wonder. He takes your hand, and you haul him up, and he stands, towering and slightly crooked, with dust in his hair.
“I yield,” he says.
“You don’t have to.”
“I do.” He bows, awkwardly, to the waist. “I was wrong. I said a lamb. You are not a lamb. You are a stone-wager.”
He turns to the Court. “I vote for trust.”
> force | Thank him. | lotus_a2s8 | +lotus_kou_yielded
> truth | Say you did not mean to hurt him. | lotus_a2s8 | +lotus_kou_yielded
> quiet | Bow. | lotus_a2s8 | +lotus_kou_yielded
> mercy | Help him brush off. | lotus_a2s8 | +lotus_kou_yielded

=== lotus_a2s8 | Five for Trust
The vote is five to nothing. Madam Ash calls it with tears in her eyes. Wen Rui votes first, and Father Ma, and Mistress Ping, with a touch of reluctance, and Elder Gan, who wakes for it. Kou votes last. He says the word as if it cost him a tooth.
“Trust.”
“Five for,” says Madam Ash. “None against.” She lowers her hands. “The Court so finds.”
She does not look at you. She looks at the ceiling, at the lamp, at her own folded hands. “I have convened this Court thirty-one times,” she says. “It has never been unanimous.”
She draws a deep breath.
“The Lotus will stand with the ninth,” she says. “Not under her. With her. Let it be so minuted.”
Hao Lan, who has been standing unobserved by the door with a pencil, writes it down. Her hand is trembling.
> force | Look at Ash. | lotus_close | +lotus_trusted needs:3
> truth | Thank the Court. | lotus_close | +lotus_trusted
> quiet | Take Kou’s hand again. | lotus_close | +lotus_trusted
> mercy | Smile at Mei. | lotus_close | +lotus_trusted

// ---------------------------------------------------------------- a3: the ledgers
=== lotus_a3s1 | Ledgers
Each of the five members has a ledger in front of them. They are alike: thick black volumes, ruled in red, with a brass clasp. Wen Rui has his open. Mistress Ping has hers on her knee. Father Ma’s is half under his cloak. Captain Kou has not opened his; he is using it as a footrest. Elder Gan’s is shut and sealed with wax.
You look at them. You think of the Factor’s lacquer box, and of the nine hundred names that Hao Lan copied.
“Hao Lan,” you say, quietly.
She comes to your elbow with her notebook. “Yes?”
“Did you copy Gang’s ledger? All of it?”
“Every page.” She taps her satchel. “I have the Lotus on it. Four entries. Wen Rui, a debt of two hundred. Mistress Ping, a loan from the Factor at ten in the hundred. Father Ma, a pledge of his chapel’s roof. Elder Gan, a debt of honour.” She pauses. “Captain Kou, nothing. He has no assets.”
“Good,” you say. “I should like to talk about assets.”
> deceit | Begin. | lotus_a3s2
> truth | Say you are not sure. | lotus_a3s2
> quiet | Think. | lotus_a3s2
> mercy | Say it feels wrong. | lotus_a3s2

=== lotus_a3s2 | Mistress Ping
She is the easiest, so you start with her. You sit beside her at the table, and ask in a soft voice, as though inquiring about her health, whether she has had cause to borrow money from Factor Gang. Her eyes flick to yours.
“Everyone has,” she says carefully. “It is the harbour.”
“Ten in the hundred?”
“I have found it reasonable.”
“I have a document,” you say. “It is in Hao Lan’s satchel. It is a statement from the Factor’s own ledger. It says that your loan was discharged last month.”
She stares. “It was not.”
“It was. By a sunken ferry and a lacquer box.” You say it gently. “You owe him nothing. Not a copper. Neither does anyone else in this room.”
The silence is profound. Mistress Ping’s fingers move on the abacus. Click. Click.
“I see,” she says. “That is a significant development.”
> deceit | Let her think. | lotus_a3s3
> truth | Tell her you do not ask for anything. | lotus_a3s3
> quiet | Pour her water. | lotus_a3s3
> mercy | Say you are glad. | lotus_a3s3

=== lotus_a3s3 | A Grateful Merchant
“You do not ask for anything,” says Mistress Ping slowly. She has put down the abacus. “That is unusual. In my experience, the person who has done you a favour is always about to present the bill.” Her shrewd eyes are narrowed. “It is a very good move. It is also, I think, entirely sincere.”
“It is.”
“I am not sure I believe in sincerity.” She smiles faintly. “But I believe in arithmetic. I should like to observe that a person who has just freed me of a ten-per-cent debt has also made me, in the Court’s eyes, her debtor.” She pauses. “I do not like it.”
“I did not do it to make you one.”
“No.” She lays a hand flat on her ledger. “That is what makes me suspicious.”
She stands.
“I shall vote for you,” she says. “On the condition that you do not tell the others.”
> deceit | Agree. | lotus_a3s4
> truth | Refuse the condition. | lotus_a3s4
> quiet | Nod. | lotus_a3s4
> mercy | Thank her. | lotus_a3s4

=== lotus_a3s4 | Father Ma
Father Ma is harder. He is gentle and anxious and honest, and he holds a ten-year pledge on his chapel roof that he has told no one about. He sees you coming and he goes grey. He mops his forehead with a handkerchief. He tries to say something about the weather.
“Father,” you say. “The Factor’s ledger was destroyed.”
“Was it?”
“It is in the bay. Hao Lan has a copy. It lists the pledge on your roof.” You say it quietly. “It is cancelled.”
The priest stares at you. His kind face crumples. He puts both hands over his mouth.
“Oh,” he says, through his fingers. “Oh, my goodness. The roof.” He starts to laugh, helplessly, and then to cry. “It has leaked for twelve years. I have been so afraid they would take it.” He wipes his eyes. “Oh, my dear. Oh, thank you.”
He catches himself.
“I must not,” he says. “It would be a bribe.”
> deceit | Say it is not. | lotus_a3s5
> truth | Say it is a roof. | lotus_a3s5
> quiet | Let him cry. | lotus_a3s5
> mercy | Hold his hand. | lotus_a3s5

=== lotus_a3s5 | A Bribe
“A bribe,” says Father Ma firmly, “is when a thing is given in exchange for a vote.” He is blowing his nose. “You have given me a roof. I have not yet given you a vote. If I vote for you now, I shall be accused of corruption.”
“By whom?”
“By myself,” says Father Ma. He gives a watery smile. “I am a priest. I have a conscience. It is a vast nuisance.”
He thinks.
“I shall vote according to my conscience,” he says. “I shall do it with the roof off my back. If I find that I am inclined to vote for you, I shall be extremely suspicious.”
“And if you are not?”
“Then I shall be delighted,” says Father Ma, “and not in the least relieved.”
He bustles off to find his hat. You stand in the cellar, with Hao Lan at your elbow and the sound of the sea in the wall, and you think that you have never been so thoroughly thanked.
> deceit | Turn to Elder Gan. | lotus_a3s6
> truth | Feel odd. | lotus_a3s6
> quiet | Wait. | lotus_a3s6
> mercy | Smile. | lotus_a3s6

=== lotus_a3s6 | Elder Gan
Elder Gan is awake. He has been awake all along. He is sitting on his stool by the wall with his white beard on his chest and his pale blue eyes fixed on you, and his lips are moving gently. He has been watching you with the fixed attention of an old cat at a mouse-hole.
“I was a magistrate,” he says. “I sat in judgment on four hundred cases. Do you know what I learned?”
You wait.
“That the man who offers you a favour wants something. That the man who does not is lying.” He wheezes. “You have done favours for two of my colleagues this evening. You have not asked for anything. Therefore, you are either a saint or a rogue.”
“Which?”
“I am eighty-eight,” says Elder Gan. “I have not the faintest idea. It is very refreshing.”
He chuckles.
“I do not owe the Factor,” he says. “I owe a man named Pu. For a pot of tea. I intend to repay it tomorrow.”
> deceit | Laugh. | lotus_a3s7
> truth | Ask what he will vote. | lotus_a3s7
> quiet | Bow. | lotus_a3s7
> mercy | Fetch him a cup. | lotus_a3s7

=== lotus_a3s7 | The Honest Vote
“I shall vote for you,” says Elder Gan. “Not for the favours. I did not receive any. For the other thing.”
“What other thing?”
“You did not lie to me.” He smiles his rusty smile. “You said, I do not ask for anything. And you did not. I watched. You came to this cellar to be judged, and you have spent the last hour arranging for the judges to be free.” He wags a finger. “That is the most honest thing I have seen in thirty years.”
He closes his eyes.
“Tell Kou to be reasonable,” he says. “He is only afraid.”
You turn. Captain Kou is lounging against the pillar at the foot of the stair, with his arms folded and a sour scowl. He has watched the whole business. His one ear is crimson.
“I saw that,” he says. “All of it. Buying votes with a dead man’s debts.” He spits. “It’s a disgrace.”
> deceit | Walk over. | lotus_a3s8
> truth | Say it was not buying. | lotus_a3s8
> quiet | Wait. | lotus_a3s8
> mercy | Ask what he would do instead. | lotus_a3s8

=== lotus_a3s8 | Kou’s Terms
“I would have done it with my fists,” says Kou. He scratches his scarred cheek. “It would have been quicker.” But his eyes are bright, and he looks less angry than he sounds. “It was a clean job. I will say that.”
He sticks out his hand. You shake it.
“Four for,” he says. “One against. Me.” He shrugs his huge shoulders. “I will vote against. I always do. It is how the Court knows it is working.”
“Then why tell me?”
“Because you ought to know that someone on this table thinks you are going to be a disaster,” says Kou. “And that he is very probably right, and that he will still be standing next to you when you fall.”
He claps you on the shoulder, hard enough to rattle your teeth.
“Cheer up,” he says. “It is a bribe, but it is a good bribe.”
> deceit | Smile. | lotus_close | +lotus_traded
> truth | Say thank you. | lotus_close | +lotus_traded
> quiet | Nod. | lotus_close | +lotus_traded
> mercy | Grin. | lotus_close | +lotus_traded

// ---------------------------------------------------------------- a4: alone with each
=== lotus_a4s1 | One at a Time
“A custom of the Court,” says Madam Ash, to your surprise. “A petitioner may speak to each member in private before the vote. It has not been used in fifty years.” She looks round at the five. “Does anyone object?”
Nobody does. Captain Kou shrugs and goes to the stair. Father Ma shuffles off with a lantern. Mistress Ping gathers her shawl. Elder Gan is helped from his chair, and Wen Rui stays where he is, looking at his hands.
“I shall go first,” he says. “If I may. I am the slowest to be persuaded, and I should like to be done.”
You sit in the empty cellar, in the sixth chair, with the lamp turned low. He takes the chair opposite. He is a small man in a worn brown robe, with a mark on his forehead where a Censor’s brand once was.
“I should like to tell you a story,” he says. “It is quite short.”
> quiet | Listen. | lotus_a4s2
> truth | Say you would like that. | lotus_a4s2
> mercy | Pour him tea. | lotus_a4s2
> inquiry | Ask what it is about. | lotus_a4s2

=== lotus_a4s2 | A Figure in a Ledger
“I was twenty-nine,” says Wen Rui. “I was a clerk of the Seventh Chancery. I found an error in a sum. A figure that did not match the figure in the book. I reported it. I was commended.”
He looks at his hands.
“The next week I was struck. The error was not mine. It was a Censor’s. He had made it to cover a theft, and he needed it never to be found. I had found it. So I was written out, and he was promoted.”
The lamp gutters.
“I walked out of the Chancery in the rain. I had no name. I went to a bridge and thought about jumping. A woman in black stopped me. She was the Registrar’s friend. She gave me a cup of tea.” He smiles, thin and gentle. “She did not say a word. She sat beside me for an hour. It was the kindest thing anyone has ever done.”
> quiet | Say nothing. | lotus_a4s3
> truth | Ask what he wants. | lotus_a4s3
> mercy | Take his hand. | lotus_a4s3
> inquiry | Ask what he thinks of her. | lotus_a4s3

=== lotus_a4s3 | What He Wants
“A clerk wants a record,” says Wen Rui. “That is all. I want my name written in a book, in a clear hand, with a true date.” He folds his hands. “You wrote it back once. In the vault. Hao Lan told me. I was in the Assembly Hall. I was sitting by the door. I did not know it was you.”
“I did not know it was you,” you say.
“No.” He nods. “That is why I believe it.”
He looks at you.
“I will vote for you. I decided in the Hall. But I should like to tell you why, so you are not surprised.” He draws breath. “It is because you did not ask me to. You wrote my name in the dark, in gold with a thread of black, and you did not ask for thanks. You did not know I was watching. You did it because the name was struck, and it was wrong.”
“That is not much.”
“It is the whole of the Lotus,” says Wen Rui.
> quiet | Bow. | lotus_a4s4
> truth | Thank him. | lotus_a4s4
> mercy | Say he is a good man. | lotus_a4s4
> inquiry | Ask who is next. | lotus_a4s4

=== lotus_a4s4 | Mistress Ping
She keeps you waiting. She makes you sit in the cellar for a quarter of an hour with your hands in your lap, and she arrives in a rustle of silk with a tray of sweetmeats. She sits down and takes one. She does not offer you any.
“I do not know you,” she says. “I do not trust anyone I do not know. I am a merchant. I deal in certainties.” She bites the sweetmeat. “What can you offer me?”
“Nothing.”
“Everyone offers something.”
“I have nothing to give.”
“Hm.” She considers. “That is either honesty or a very good opening.” She dusts sugar from her fingers. “Tell me what you are afraid of.”
You think. It is a long time since anyone asked.
“I am afraid,” you say slowly, “that I will be told to do something and that I will do it. I am afraid I will not know how to refuse.”
> quiet | Hold still. | lotus_a4s5
> truth | Say more. | lotus_a4s5
> mercy | Ask what she fears. | lotus_a4s5
> inquiry | Ask what she wants. | lotus_a4s5

=== lotus_a4s5 | What a Merchant Fears
“Debt,” says Mistress Ping. She says it at once, flatly, like a woman naming the weather. “I fear being owed. I fear owing. I have spent forty years making sure that no one in this room has the slightest claim on me, and that I have none on them.” She wipes her fingers. “I have succeeded. I have no friends.”
She smiles bleakly.
“The Court is the only place I have ever felt safe. It is a place where everyone has agreed not to owe each other anything. We are all struck. We are all nobody. We cannot be sued.” She leans forward. “And now a girl walks in, and says: I do not wish to be used. And I think: she is going to break it.”
“Break what?”
“The silence.” Her voice is low. “If you ask us to stand with you, we shall have to owe you. We shall have to be loyal. It is a dreadful thing. I should like very much to refuse.”
She stands.
“I shall vote for you,” she says. “I hate it.”
> quiet | Thank her. | lotus_a4s6
> truth | Say you understand. | lotus_a4s6
> mercy | Tell her she can owe you nothing. | lotus_a4s6
> inquiry | Ask who is next. | lotus_a4s6

=== lotus_a4s6 | Father Ma and Elder Gan
Father Ma comes with his lantern and sits with you for an hour. He does not preach. He asks about your village. He asks about the woman who raised you. He asks whether you have ever been in love. He nods at your answers, and he says, “Hm,” and “I see,” and “How very strange.” He is the gentlest man you have ever met.
At the end, he says: “I shall vote with my conscience.”
“What does it say?”
“It says trust.” He takes off his cap. “It has said so since the day I met you. I spent the evening trying to argue it out of the position.” He smiles ruefully. “It has been a poor evening. I have lost to myself.”
Elder Gan is brought in on a litter. He is asleep. He wakes, blinks, and says, “Who’s there?” You give your name. He says, “Ah, yes,” and goes to sleep again. After a decent interval he wakes and says, “Trust.”
“Is that all?”
“It is always all,” he says.
> quiet | Bow to both. | lotus_a4s7
> truth | Thank them. | lotus_a4s7
> mercy | Help the Elder up. | lotus_a4s7
> inquiry | Ask where the Captain is. | lotus_a4s7

=== lotus_a4s7 | The Captain Alone
He is on the stair. He is sitting halfway up, in the dark, with his boots on the step below and a flask in his fist. He does not move as you approach. He tilts his head, listening.
“I heard,” he says. “Four for. Four have told me. They are all fools.” He drinks. “I am the fifth. I am the one who hasn’t decided.”
You sit down on the step below.
“I will tell you my objection,” says Kou. “It’s a simple one. I think you are too good. I think you are going to get a great many people killed by being kind.” He shifts. “I have seen it. The best of us die first. The ones who stop to help.”
“What would you have me do?”
“Be ruthless.” He looks at you. “Just once. Just to see.”
He offers you the flask.
> quiet | Take it. | lotus_a4s8
> truth | Say no. | lotus_a4s8
> mercy | Say you will try. | lotus_a4s8
> inquiry | Ask what he would do. | lotus_a4s8

=== lotus_a4s8 | A Man Who Has Buried Two
“I would run,” says Captain Kou. “I’d take you out of this town tonight, on a fast boat, to the farthest island I could find. I’d put you in a hut. I’d bring you rice. I’d make sure nobody ever asked you for anything.” He swigs. “It’s a bad plan. I know it. But it’s the only one I have.”
You look at him in the gloom. He is huge and shabby and tired, and there are tears running down the side of his scarred face. He does not seem to know.
“I buried two,” he says again. “They were nine and eleven. They smiled the whole way. I held the lamp.”
You say nothing. You take the flask. You do not drink. You put it back in his hand.
“I will vote for you,” he says. “I will vote because it’s your decision. Not mine. I’ve been deciding for children my whole life.”
His one ear is shaking.
“It is the hardest thing I’ve ever done,” he says.
> quiet | Take his hand. | lotus_close | +lotus_heard_each
> truth | Thank him. | lotus_close | +lotus_heard_each
> mercy | Sit with him. | lotus_close | +lotus_heard_each
> inquiry | Ask who held the second lamp. | lotus_close | +lotus_heard_each

// ---------------------------------------------------------------- hidden: the vow
=== lotus_h1 | Seven Lines
You take the seven brown cards from your sleeve, where you have carried them for a week. They are soft with handling. You lay them on the oak, one beside the other, in order, with the numerals up. I. II. III. IV. V. VI. VII.
The Court is silent. Madam Ash has made a small sound. Wen Rui has risen from his chair.
“Where did you get those?” he whispers.
“From the people they belong to,” you say. “Each of them gave me theirs.”
You turn them over, one by one. The lines are in a faded hand, a hand that three of the five members of the Court have seen before, in an archive or a vault or a dream. You read them aloud, slowly, in the cellar by the lamp.
Carry what is heavy. Mend what is torn. Sing what is struck. Light what is dark. Seal only what asks. Write what is true. Keep what is small.
Nobody breathes.
> inquiry | Read them again. | lotus_h2
> truth | Say there is an eighth. | lotus_h2
> mercy | Look at Ash. | lotus_h2
> quiet | Stay still. | lotus_h2

=== lotus_h2 | The Court Hears
It is Father Ma who speaks first. His voice is a whisper. “A vow,” he says. “It is a vow. It is the vow of the first Listeners.” His hands have gone to his chest. “I was taught it at the seminary. In a different form. In the old language. It was the first rule of the Order of the Torn Page.”
Mistress Ping has put her hand over her mouth.
“The Torn Page,” says Elder Gan, from his stool. He has opened his eyes. They are very clear. “Ling’s order. I met her once. I was twenty. She had a table in a bookshop, in the capital. She sold copies of the lament for a penny. She said that a song was only a vow with a tune.”
He looks at the cards.
“I did not know there were nine,” he says. “I thought there were five.”
“There are nine,” you say. “And an answer.”
“What answer?”
“I do not know yet.”
> inquiry | Say you will find it. | lotus_h3
> truth | Say you are looking. | lotus_h3
> mercy | Hold the eighth card in your mind. | lotus_h3
> quiet | Wait. | lotus_h3

=== lotus_h3 | By Acclamation
There is no vote. Madam Ash does not call one. She stands in the doorway with her hand pressed flat against the frame and her eyes shut. The Court rises, one by one, and each of them lays a hand on the table, beside the cards. Wen Rui. Father Ma. Mistress Ping. Elder Gan, with Qiu at his elbow. Captain Kou, last, puts his huge scarred hand down so carefully that it does not make a sound.
“By acclamation,” says Elder Gan. His voice is the thinnest thread. “Let it be minuted. The Hollow Lotus has found its Order.”
Hao Lan writes it down, in her small clear hand.
Madam Ash opens her eyes. She looks round the table, at the five hands, at the nine cards, at you.
“I have not wept in front of the Court in thirty-one sessions,” she says.
She weeps. She does it standing, silently, with her chin up. Nobody speaks.
> inquiry | Go to her. | lotus_close | +lotus_vow_read
> truth | Bow. | lotus_close | +lotus_vow_read
> mercy | Hold her. | lotus_close | +lotus_vow_read
> quiet | Wait. | lotus_close | +lotus_vow_read

// ---------------------------------------------------------------- close
=== lotus_close | The Minutes
The Court rises at midnight. The lamp has burned low. The members file up the stair, murmuring, in twos and threes, to the lamp-room and the night. Only Madam Ash remains, at the head of the table, with a pen in her hand and the great black minute-book open before her.
+[how] lotus_trusted | The Court found for trust, and the minutes say so in Hao Lan’s hand.
+[how] lotus_traded | You freed four people of an old debt without asking for a vote, and the Court knows.
+[how] lotus_heard_each | You sat with each of the five in the dark, and each told you why.
+[how] lotus_vow_read | The Court rose, and laid its hands on the table beside nine cards.
+[extra] lotus_kou_yielded | Captain Kou lies in the history of the Court as the man a stone-wager put on the floor.
She does not look up.
“I am going to ask you something,” she says. “And I want you to refuse.”
You wait.
“I want you to refuse to let me be your mother. I have wanted to be one for fifteen years. I have been making rules to prevent it.” She dips the pen. “If you ask me, I shall say yes. And I shall never forgive myself.”
She lifts her eyes.
“So I am asking you not to ask.”
> truth | Promise. | lotus_close2 | +b3q_lotus
> mercy | Say she already is. | lotus_close2 | +b3q_lotus
> quiet | Take the pen. | lotus_close2 | +b3q_lotus
> inquiry | Ask what she would like to be instead. | lotus_close2 | +b3q_lotus

=== lotus_close2 | Instead
“A friend,” says Madam Ash. She says it to the minute-book. “I would like to be a friend. It is the one thing I have never been to any child. I have been a mother, a teacher, a master, a creditor. I have never once sat beside one and said: I am here because I wish to be.”
She closes the book.
“I should like to try,” she says. “It will be terribly awkward. I have no idea how it is done.”
You find that you are smiling. You cross the cellar and sit beside her at the long table, in the lamplight. After a while she reaches for the pot, and pours two cups of cold tea. She hands you one.
“It’s horrible,” she says.
“It is.”
“I made it at noon.”
You drink it. It is very bitter and very old, and it is the best tea you have ever had. Above, through the roof, you hear the faint hum of a mirror-signal. Three short, two long. Good night.
> truth | Drink. | hub_b3_coast | bond:ash+2
> mercy | Say good night. | hub_b3_coast | bond:ash+2
> quiet | Stay. | hub_b3_coast | bond:ash+2
> inquiry | Ask her about the fleet. | hub_b3_coast | bond:ash+2

`,
  scenarios: String.raw`
$ SU_LOTUS_COURT | trust+3 respect+3 fear+2 | elder | The Elder hears that the Hollow Lotus has sat in judgement on the ninth, with five votes and no ruling.
hostile: They put you in a chair and asked what you were for. I have asked the same question for twenty years, in the privacy of my own head. It did not occur to me that they might say it aloud.
wary: Five votes. Hui Niang does not vote. She has spent fifteen years making rules that bind her, so that she could not be accused of being a tyrant. It is the cleverest and saddest thing I know.
neutral: I am told Captain Kou proposed a weapon. I am told you declined. I find I cannot decide whether to be proud or to be afraid. I settled on both.
warm: They asked whether you could be trusted. Elder Gan said, “She is the only one of us who has never been paid.” I have been thinking about it ever since.
devoted: If they had voted against you, I would have gone down those stairs and stood in the chair. I do not know what good it would have done. I would have been extremely old and extremely ridiculous. I think I would have done it anyway.
`,
  remarks: String.raw`
% lotus_wen_later | since:b3q_lotus>=4 | hao | Wen Rui has sent me a copy of the minutes of the Lotus Court. They are exact. They are also quite dull. I have never been so moved by a document in my life.
% lotus_kou_later | since:lotus_kou_yielded>=6 | ren | Captain Kou has been training his people in the bay. I watched them from the Wall. They fight like men who have decided to be useful. It is a good way to fight.
`,
};
