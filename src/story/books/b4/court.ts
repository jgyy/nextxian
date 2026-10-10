import type { Arc } from "../types";

/**
 * Book Four, arc ten: the Court of Grass. The Listeners have no written law, and the Matriarch's clans have caught the Garrison spy
 * Qadan, whose reports burned the fold at Three Springs. Duan Wuyi, Censor-General, is asked to sit the tenth chair in a court where
 * the wind will not let a witness lie. Four approaches: argue the law before the nine clans (a1, truth), win the trial by wrestling
 * (a2, force), stage a perfectly truthful lie (a3, deceit), and sit in the widow's circle until she decides (a4, mercy).
 * A hidden route calls Qadan's daughter, whose name was bought back at the Bone Market. Cast: Duan Wuyi, Qadan, Barsbold the
 * Wind-Speaker, Saran the widow, Bat the champion, Narantuya, Ren Qiao, Hao Lan, Temur.
 */
export const court: Arc = {
  id: "court",
  name: "The Court of Grass",
  scenes: String.raw`
=== court_entry | The Ring of Nine Stones
They hold their courts in the open. There is no hall on the Steppe, no bench, no clerk, no seal. On a rise a day beyond the Winter Camp nine flat grey stones lie in a ring, each the size of a table, and on each sits an elder of a clan, with a bowl of tea and a cloth tied to her wrist. In the middle stands a pole of white birch, with nine ribbons.
A man kneels at its foot with his hands bound. He is thin, grey, ordinary, in a Garrison greatcoat with the buttons cut off.
“Qadan,” says Temur, very low. “The Colonel’s ear. They took him at the Bone Market. Three Springs was his doing: thirty-one of ours.” He swallows. “They will not ask whether he did it. The wind has told them. They ask only what is owed.”
The ribbons stir, though there is no wind.
Duan Wuyi has gone white. He is looking at the empty tenth stone, at the end of the ring. A tall old man in a felt cloak is looking at him.
“Censor-General,” says the old man. “You read the law. We would like you to sit.”
> truth | Tell Duan that the law is the one thing he has ever brought that they lack. | court_a1s1
> force | Watch the big man at the edge of the ring, the one who is rubbing grease into his arms. | court_a2s1
> deceit | Look at the ribbons. Ask Hao Lan how a pole that cannot be lied to can be fooled. | court_a3s1
> mercy | Look for the woman in the black felt coat at the edge of the ring, who has not looked at the prisoner once. | court_a4s1
> inquiry | Say that Qadan has a daughter, and that her name was bought back at the lake. | court_h1 |  | bone_credit | You have not yet bought back the name of anyone’s daughter.

// ---------------------------------------------------------------- a1: the law
=== court_a1s1 | The Tenth Stone
Duan does not move for a long time. His soft clever face is the colour of paper. His hands, which have held a brush for forty years, are hanging open at his sides.
“I have signed four hundred and six sentences,” he says to you, very quietly. “I did not attend any of the executions. It seemed unnecessary. The paper was so clear.”
“They have asked you to sit.”
“They have asked a Censor-General to sit.” He shakes his head. “That is not the same as asking me.”
“Is there a difference?”
“I believed there was not.” A thin smile. “I was Su Wanru’s colleague for thirty years, and I believed it all the way down.”
The old man in the felt cloak waits. He has a face like a walnut and an unhurried voice. He is Barsbold, Wind-Speaker of the Court, and he has been waiting for longer than Duan has been alive.
Duan walks forward. He bows to the old man. He sits.
There is a long breath round the ring.
> truth | Stand behind him. | court_a1s2
> mercy | Give him your tea. | court_a1s2
> quiet | Watch the ribbons. | court_a1s2
> inquiry | Ask Barsbold how the Court works. | court_a1s2

=== court_a1s2 | How It Works
“It is simple,” says Barsbold. “Anyone may speak. Nobody may lie. The ribbons know.” He nods at the white pole. “If a word is false, they hang. If it is true, they stir. Nine elders hear. Nine must agree.”
“On what?”
“On what is owed.” He spreads his knotted hands. “We do not say guilty. The ribbons have said already whether a man did a thing. A court that argues whether is a court for people who lie. We argue what is owed, and by whom, and to whom, and when it is paid.”
Duan has lifted his head. “And the punishment?”
“There is no punishment. There is only the debt.” The old man shrugs. “Some debts are paid in horses. Some in years. Some in a life.” He looks across at the kneeling man. “This is a large debt.”
“Thirty-one.”
“Thirty-one. We have counted them twice.” His eyes are very old. “We have never yet found a way to count the other side.”
> truth | Ask what the other side is. | court_a1s3
> mercy | Look at Qadan. | court_a1s3
> quiet | Wait. | court_a1s3
> inquiry | Ask who speaks first. | court_a1s3

=== court_a1s3 | Saran
She comes forward without being asked. She is fifty, short and square, in a black felt coat, with iron-grey plaits down her back and the heavy, steady hands of someone who has milked animals all her life. She stops at the edge of the ring. She does not look at the prisoner.
“I am Saran,” she says. “Of Three Springs. I had a husband, Dorj. I had two sons, Bat and Gantulga. I had a sister, her husband, and their three girls.” She counts them on her fingers, one by one, without hurry. “On the night of the burning I was at the lambing-pens. I saw it from the ridge.”
The ribbons stir, nine of them, all together.
“Qadan sent word to the Colonel,” says Saran, “that Three Springs was keeping a hundred and four children of the levy-age, hidden in the sheep-folds. It was true. The Colonel sent riders.” Her voice does not shake. “It is also true that Qadan was a guest in my tent. I fed him. I put a blanket on him.”
She turns at last and looks at the man on his knees.
“I would like to know why,” she says.
> truth | Listen. | court_a1s4
> mercy | Go to her. | court_a1s4
> quiet | Hold still. | court_a1s4
> inquiry | Ask Duan what a judge does now. | court_a1s4

=== court_a1s4 | What a Judge Does
Duan stands. His chair, a stone, makes a scraping sound on the grass. He does not look at the prisoner. He looks at Saran.
“Madam,” he says, “I must tell you something first. In the Concord I should have no obligation to tell you.” His voice is unsteady and clear. “I have sentenced men to die for lesser things than this. I did it by the page. I knew your law only as a rumour. I assumed that because it was not written, it was not law.”
“And now?”
“Now I think it is the only law I have ever seen that listens before it speaks.” He turns to Barsbold. “I request the right to speak first for the debt, and to hear the one who owes it last.”
The old man nods slowly.
“Why?”
“Because the Concord does it backwards,” says Duan Wuyi. “We hear the defendant first. Then we decide what we think of him. And then we listen to the dead.”
There is a murmur round the ring. It is not displeasure.
> truth | Nod. | court_a1s5
> mercy | Smile. | court_a1s5
> quiet | Watch the elders. | court_a1s5
> inquiry | Ask Qadan if he agrees. | court_a1s5

=== court_a1s5 | The Law of Liens
It takes the morning. Duan reads. He does it from memory, with his eyes shut, standing in the ring with his hands behind him: the Concord’s Law of Debt, section by section, in his thin even voice. The nine elders listen with their tea cooling. The ribbons rest.
He reads the clause on blood-price. He reads the clause on restitution. He reads the clause on the surety of kin. When he reaches the long cold passage on forfeiture of persons, his voice thins. When he reaches the sentence “and where the debtor cannot pay, the debt shall pass to his house,” he stops.
“It is the oldest line in the book,” he says. “I wrote the commentary on it. Forty pages.” He opens his eyes. They are wet. “It means, if a man cannot pay, his child will.”
“Qadan has a child?” says a grey woman on the third stone.
Nobody answers.
The ribbons stir. They stir all together, very slowly, and the sound is like a long indrawn breath.
Duan sits down. His hands are shaking.
“That is all the law I have,” he says. “I am ashamed of the whole of it.”
> truth | Say it was needed. | court_a1s6
> mercy | Touch his sleeve. | court_a1s6
> quiet | Look at Qadan. | court_a1s6
> inquiry | Ask what the clans have instead. | court_a1s6

=== court_a1s6 | Qadan Speaks
They unbind his hands so that he can speak. He rubs his wrists. He is perhaps fifty, grey and stooped, with the long patient face of a clerk, and when he speaks it is in the dry careful voice of a man giving a statement.
“I was a Garrison scribe in the fort at Tsagaan,” he says. “In the second year of the Hush I was ordered to copy a list of names. My daughter’s was on it.”
The ribbons stir.
“She was eight. The list was called ‘pledges.’ They said she would be safe. She will be well fed. She will be returned when you have done your work.” His voice does not change. “The work was to listen. To sit in tents. To be given tea. To write.”
“And Three Springs?”
“I wrote the hundred and four,” says Qadan. “I did not write the fire.”
The ribbons stir. All nine.
“Does it matter?” he says. “I wrote the first. The second followed. The page is the same page.” He looks up. “I should like it to be known that I never believed it would end in smoke. And that I do not think that helps.”
> truth | Hold his gaze. | court_a1s7 | npc:SU_COURT_WIND
> mercy | Look away. | court_a1s7
> quiet | Listen to the wind. | court_a1s7
> inquiry | Ask where his daughter is. | court_a1s7

=== court_a1s7 | The Ribbons Move
“Where is she now?” says Barsbold.
“In a house in the black hollow. A broker has her pledge.” Qadan wets his lips. “I have not seen her in two years. I think she has forgotten my face.”
The ribbons move. They move all together, a ripple like the wind going over grass, and Saran’s hands tighten in her coat.
“He is not lying,” says someone, on the fifth stone, wearily.
“No,” says Barsbold. “He is not.” He looks at the silent woman at the edge of the ring. “Saran of Three Springs. It is your debt. You have the right to name it.”
She does not speak for a long time. Her broad shut face has no tears in it. She is thinking, you see, quite slowly, the way she would think about how much hay to put by.
“I will not say yet,” she says. “I want to hear the law.” She looks at Duan. “You. The grey man. You said you were ashamed. Is that the end of it?”
“It is not,” says Duan Wuyi, rising.
> truth | Stand. | court_a1s8
> mercy | Hold his arm. | court_a1s8
> quiet | Step back. | court_a1s8
> inquiry | Wait to see what he says. | court_a1s8

=== court_a1s8 | The Argument
He talks for an hour. It is the only time you ever see him without a page in his hand. He walks round the pole with his fingers locked behind him, and he speaks slowly, like a man feeling for stairs in the dark.
“A debt is not a punishment,” he says. “The Concord forgot. It treats the debt as a rope to hang a man with. Your law remembers that a debt is a rope to pull him back.”
“Pull him back to what?” says Saran.
“To the ones he hurt.” He stops. “If you kill him, the debt is cancelled. He is released. He has paid it in the only coin he cannot take away from you. The ledger closes.” His voice breaks. “I have signed four hundred and six of those. I called them justice.”
“And if he lives?”
“Then he must look at you,” says Duan. “Every day. For as long as you require.”
The ribbons are quite still.
“That is harder,” says Duan Wuyi. “Much harder. I would not ask it of anyone I loved.”
He sits down.
> truth | Wait. | court_a1s9
> mercy | Weep. | court_a1s9
> quiet | Watch Saran. | court_a1s9
> inquiry | Watch Barsbold. | court_a1s9

=== court_a1s9 | What Saran Named
“Thirty-one,” says Saran. She says it slowly, to the ring. “Thirty-one graves. That is what is owed. Not a death. Graves.” She lifts her head. “He will dig them. He will dig them himself. There is a hill above Three Springs, and the frost is not yet in the ground.”
The ribbons shiver.
“He will dig them with his hands if he has to. He will lay each one. He will say each name aloud, before he fills it.” Her voice is hard and calm. “And when he has done that, he will come to my tent and tell my sons’ names to my face. And then I will say what else.”
There is a long breath round the ring.
“It is a debt,” says Barsbold. He looks round the nine stones. “Do the elders agree?”
They agree. They do it one by one, with a tilt of the head, a word, a tap of the bowl. The ninth is the grey woman on the third stone, who is weeping, and who taps the bowl twice.
Qadan has not moved. He is looking at the ground. His lips are moving.
He is counting.
> truth | Bow your head. | court_close | +court_argued
> mercy | Go to Saran. | court_close | +court_argued
> quiet | Stay still. | court_close | +court_argued
> inquiry | Ask Duan if it is enough. | court_close | +court_argued

// ---------------------------------------------------------------- a2: the wrestling
=== court_a2s1 | The Champion
He is called Bat, and he is the largest man you have seen on the Steppe. He stands six and a half feet in his felt boots, with a chest like a barrel and forearms like fence-posts, and a round, grave, sunburnt face that has not smiled in some weeks. He is rubbing mutton fat into his shoulders with great care. Around him, a ring of men are doing the same.
“Saran’s sister’s husband,” says Temur, in your ear. “And her elder son. He’s the champion of Three Springs.” He grimaces. “It’s how they settle things, on the grass, when the elders cannot. If the accused has a champion, and the champion throws the challenger, the debt is lighter.”
“By how much?”
“By the throw.” He shrugs. “Three falls, and it is wiped.”
“And if the champion loses?”
“Then the debt is doubled.”
You look at Qadan, on his knees by the pole. Nobody has volunteered. He is a grey little clerk. He is not going to be anyone’s champion.
Ren Qiao, beside you, says in a voice you have never heard from him: “Oh, no.”
> force | Look at him. | court_a2s2
> truth | Say nothing. | court_a2s2
> quiet | Step back. | court_a2s2
> mercy | Ask what is wrong. | court_a2s2

=== court_a2s2 | Ren Qiao Says No
“No,” says Ren Qiao.
“I have not asked.”
“You are going to. I can see it.” He folds his arms. His scarred jaw is set. “I am not wrestling a man twice my weight for the sake of a Garrison spy who sold my mother’s people.”
“He did not know.”
“Does that help?” Ren Qiao’s voice rises. “Does that help the thirty-one?”
“No.”
“Then why?”
“Because I think it would be better for them,” you say, “if the debt were one that could be paid.”
He glares. Then he glances over at Bat, who has stopped oiling his arm and is watching him, gravely, with the steady attention of a bull who has noticed a fence. The big man inclines his head. It is a courteous greeting. It is also an invitation.
Ren Qiao exhales through his nose.
“I will want a bowl of soup,” he says. “I will want a new coat. And I will want you to tell nobody that I did this on purpose.”
> force | Agree. | court_a2s3
> truth | Say thank you. | court_a2s3
> quiet | Hand him the coat. | court_a2s3
> mercy | Say you are sorry. | court_a2s3

=== court_a2s3 | The Rules of the Ring
An old woman explains them. She sits on an upturned bucket and counts on her fingers. Three falls. A fall is shoulder, back, or hip on the ground. No kicking. No biting. No hooking the foot behind the knee, “unless you are Sarnai, who will be disqualified.” You wrestle in your shirt and trousers. You wrestle in bare feet. A wrestler may yield at any time by touching the other’s shoulder and saying “enough.” Nobody has said it in forty years.
“Do you want to know the best part?” says the old woman. She cackles. “The loser carries the winner on his back, around the ring, three times. Whatever his weight.”
Ren Qiao, stripped to the waist, flexing in the sun, examines Bat’s fingers. “Does he know,” he says, “that I once fought a mountain giant?”
“Did you win?”
“I stood on his foot.” He rolls his shoulders. “It was a very large foot.”
Hao Lan is taking bets at the edge of the ring. She has been handed four sheep and a goat. She is taking notes.
> force | Bring water. | court_a2s4
> truth | Take your place at the rope. | court_a2s4
> quiet | Check Ren’s hands. | court_a2s4
> mercy | Say a prayer. | court_a2s4

=== court_a2s4 | The First Fall
It lasts four seconds. They circle once. They lock. Ren Qiao is lifted bodily off the ground, a hundred and sixty pounds of scarred sinew dangling like a rag, and the crowd roars. Bat turns, with immense courtesy, and lays him on his back.
He is up at once. He shakes himself. He wipes his mouth.
“Ow,” he says, with great dignity.
“Fall to Three Springs,” says the old woman on the bucket.
Ren Qiao staggers back to the rope. Sweat runs down his face. He is grinning. It is not a happy grin. It is the grin of someone who has been hit by a wagon, and discovered it can be done again.
“He’s very strong,” he says.
“Yes.”
“He picks up. He does not drag. It’s clever. A dragging man has his weight forward.” He breathes. “If I can get under his arm—”
“He will see you.”
“Yes.” He bares his teeth. “He sees everything. He has the patience of a rock. I’ll have to be quicker than a rock.”
> force | Rub his shoulders. | court_a2s5
> truth | Tell him to yield. | court_a2s5
> quiet | Hand him a cup. | court_a2s5
> mercy | Hold the rope. | court_a2s5

=== court_a2s5 | The Second Fall
They lock again. It is longer. Bat has learned something. He does not lift. He leans. The two men stand chest to chest in the dust, forehead to forehead, shaking, a great grunting tower of flesh, and the crowd falls silent. A fly buzzes. Somebody coughs.
Ren Qiao drops.
It is a trick of the knees. He goes down under the big man’s arm, like water, and comes up behind him, and hooks his heel. The mountain wavers. For an instant Bat hangs, a vast figure on one leg, staring at the sky with an expression of astonishment.
He goes over like a felled tree. The ground shakes.
There is a stunned silence. Then four hundred people begin to shout.
“Fall to the grey man!” cries the old woman. She is beating her bucket with a stick. “One all!”
Ren Qiao lies on his back, panting, beside the champion, his chest heaving. Bat turns his head. His round grave face is wondering.
“You hooked,” he says, in slow Steppe-tongue.
“Sorry,” says Ren Qiao, gasping.
“Is not allowed.”
“I know.”
> force | Cheer. | court_a2s6
> truth | Call the foul. | court_a2s6
> quiet | Smile. | court_a2s6
> mercy | Call the foul yourself. | court_a2s6

=== court_a2s6 | A Foul
It is Ren Qiao himself who calls it. He sits up in the dust, wiping his face with both hands, and says in his bad Steppe-tongue: “The throw was a hook. I disqualify it.”
Nobody speaks. The ribbons on the white pole hang as still as wire.
“It was a foul,” he says. “It does not count.”
“It is your fall,” says Bat.
“It was not honestly won.” He grins up, bleeding from the lip. “I would rather lose it than have it said.”
The old woman on the bucket is staring at him. Her wrinkled mouth has fallen open. “In forty years,” she says, “nobody has done that.”
“It is not clever.”
“No.” She wipes her eyes. “It is Listener.” She raises her stick. “The fall is void! One fall to Three Springs! The match continues!”
The crowd roars. Bat gets to his feet. He extends a hand to Ren Qiao. He is smiling for the first time in weeks. It transforms his whole round face.
“Again,” he says.
> force | Breathe. | court_a2s7
> truth | Clap. | court_a2s7
> quiet | Wipe his face. | court_a2s7
> mercy | Hand him water. | court_a2s7

=== court_a2s7 | The Third Fall
It is the hardest thing you have ever watched. It goes on for eleven minutes by the old woman’s count. They lock and break, lock and break. Sweat runs down their chests in rivers. Bat’s big hands are bleeding at the knuckle. Ren Qiao has a lump the size of an egg on his temple, and one eye is closing. The crowd has fallen quiet again. They are leaning forward. Nobody is betting.
At the end they are standing in the middle of the ring, locked, chest to chest, trembling. Neither can lift. Neither can throw.
“Enough,” says Bat, through his teeth.
Ren Qiao blinks. “Pardon?”
“I say it. Enough.” Bat’s shaking hand reaches out. He touches Ren Qiao’s shoulder. “I yield.” He says it in a low voice, only for him. “My aunt would not have wanted a dead man’s son to go on bleeding.”
“It is your debt,” says Ren Qiao, panting.
“It is,” says Bat. “And I do not think I can finish it.”
He lowers his arms.
> force | Stand still. | court_a2s8
> truth | Call it. | court_a2s8
> quiet | Hold your breath. | court_a2s8
> mercy | Look at Saran. | court_a2s8

=== court_a2s8 | The Carrying
Bat kneels. He does it simply, in the dust, before the ring. He offers his back. Ren Qiao stares at it.
“I’m not going to ride the man I wrestled,” he says.
“It is the rule.”
“I know.” He licks his split lip. “I know it is. But it should be the other way.”
He turns. He drops to one knee before the prisoner.
The crowd is utterly silent. A hawk wheels overhead.
“Get on,” says Ren Qiao, to Qadan.
The grey man looks up. His face is wet. “I cannot.”
“You can. It is three times round the ring. You weigh nothing.” Ren Qiao’s scarred face is stern. “It is the debt. Not mine. His. I am only the one who carries it.”
Qadan climbs, with infinite clumsiness, onto the back of the swordsman. Ren Qiao gets to his feet. He is shaking. He walks slowly round the ring in the dust, once, twice, three times, with the spy of the Garrison on his back, and nobody says a word.
> force | Watch. | court_a2s9
> truth | Walk beside them. | court_a2s9
> quiet | Look at Saran. | court_a2s9
> mercy | Weep. | court_a2s9

=== court_a2s9 | Debt Lighter
“It is lighter,” says Barsbold, when it is done. He says it to the ring, almost gently. “By a third. It was a fair match. I do not think I have seen a better.” He looks at Saran. “Will you name it?”
She is standing at the rope with her arms folded. Her face has not changed. But there is a wetness at the corner of her eye, and when she speaks it is in a voice that has not been used for some time.
“Ten graves,” she says. “He will dig ten. The rest are for the clan to fill.” She nods at the big man. “Bat will help him.”
Bat bows his head.
“And Ren Qiao,” says Saran, “will show my elder boy how to hook.”
The ring erupts. It is not quite laughter. It is the long loud sound of a crowd letting its breath go. Ren Qiao, swaying, bleeding, with a bowl of soup being pressed into his hands by four old women at once, looks at you across the ring.
“I want it noted,” he says, “that I won.”
> force | Say it is noted. | court_close | +court_wrestled
> truth | Say you saw it. | court_close | +court_wrestled
> quiet | Hand him a cloth. | court_close | +court_wrestled
> mercy | Tell him you are proud. | court_close | +court_wrestled

// ---------------------------------------------------------------- a3: the true lie
=== court_a3s1 | A Pole That Cannot Be Fooled
“It cannot be fooled,” says Hao Lan, flatly. She has her notebook open on her knee and a stub of pencil between her teeth. “I have been sitting here an hour. It is a bundle of sticks. There is no mechanism. There is no wire. It really does stir for the truth.” She spits out the pencil. “It is the most irritating thing I have ever seen.”
“You can’t lie to it.”
“No. Nobody can.” She taps her chin. “But you can misdirect it. You see? It answers one sentence at a time. It does not follow a story.” She looks at the pole, speculatively. “If every sentence is true, it will stir. And if I choose the sentences, in the right order, a man will believe whatever I want.”
“That is cheating.”
“It is a rhetorical structure.” She smiles slightly. “I did it for the Chancery for six years. I was extremely good.”
You look at the ring. Qadan is kneeling. Saran is watching him.
“What do you want to prove?” you say.
> deceit | Ask what she means. | court_a3s2
> truth | Say it is wrong. | court_a3s2
> quiet | Watch the elders. | court_a3s2
> mercy | Think of Saran. | court_a3s2

=== court_a3s2 | Eleven True Sentences
She wants them to hear that Qadan was not the only one who wrote the names. That is all. It is perfectly true. The Garrison office at Tsagaan had eleven scribes, and every one of them copied the list. Every one wrote the hundred and four.
“Eleven,” says Hao Lan. “And the Colonel signed it. And the Inspector countersigned. That makes thirteen hands, and one of them is in this ring.” She takes a breath. “I do not propose to say that he is innocent. I propose to say that he is one of thirteen.”
“What will that do?”
“It will make the elders wonder,” she says, “why they are only trying one.” She ticks them off. “They will start to think of the system. They will start to think it is a fire that was lit by thirteen hands, and that one of them is on his knees, and that the other twelve are in a warm office with a stove.”
“And the ribbons?”
“Every sentence true,” says Hao Lan.
She puts her pencil behind her ear.
> deceit | Nod. | court_a3s3
> truth | Hesitate. | court_a3s3
> quiet | Look at Duan. | court_a3s3
> mercy | Say Saran will know. | court_a3s3

=== court_a3s3 | Duan Asks
“Absolutely not,” says Duan Wuyi.
He has come over to your fire in the dusk. He stands with his hands folded in his sleeves and his soft face grim. “I will not sit in that chair and permit a rhetorical device.”
“It is every sentence true,” says Hao Lan.
“Yes. And I have listened to you, and I find I cannot say which one is the lie.” He frowns. “That is the point, is it not? There is not one. It is the shape.”
“It is the shape,” she says, coolly. “Which is true.”
“It is not.”
“It is not a falsehood.”
“It is not the truth,” says Duan. His voice is sharp. “It is a thing arranged to feel like the truth. I have spent forty years writing those, Hao Lan. I know a good one when I see it.” He sits down abruptly on a stone. “And I have never felt more sick.”
There is a silence. The fire crackles.
“If it works?” you say.
Duan looks at the flames. “Then I will have to decide,” he says, “what I am for.”
> deceit | Say nothing. | court_a3s4
> truth | Tell Hao Lan to stop. | court_a3s4
> quiet | Pour tea. | court_a3s4
> mercy | Ask what Duan wants. | court_a3s4

=== court_a3s4 | The Arrangement
She does it anyway. Duan does not forbid it; that is the strange part. He sits through the evening, in his stone chair, with his eyes fixed on the pole, and says nothing at all. He does not defend her. He does not stop her. He simply sits, grey and tired, like a man watching a tooth being drawn.
Hao Lan stands. She speaks for an hour, in her clear dry voice. She is superb. She says: eleven scribes. She says: a signature. She says: a countersignature. She says: a stove. She says: a list. She says: a hundred and four. She says: a man who wrote the first line.
Every sentence is true. The ribbons stir. They stir, and stir, and stir again, until the pole is a rustling cloud.
And little by little, you watch the faces round the ring change.
They are not looking at Qadan any more. They are looking away from him. Toward the east. Toward the fort.
The grey woman on the third stone says, softly: “Thirteen.”
> deceit | Watch. | court_a3s5
> truth | Look at Duan. | court_a3s5
> quiet | Look at Saran. | court_a3s5
> mercy | Look away. | court_a3s5

=== court_a3s5 | Saran Is Not Fooled
“Yes,” says Saran. “Thirteen.”
She has not moved. She is standing at the edge of the ring in her black felt coat, with her heavy hands loose, and she is looking at Hao Lan with an expression that is not anger. It is something quieter. It is a kind of weary, patient recognition, the look of a woman who has seen a fox in the hen-house before.
“It is a good tale,” she says. “I did not hear a single lie in it.” She tilts her head. “You are very clever, girl.”
Hao Lan lifts her chin. “Thank you.”
“I did not say it was a kindness.” Saran takes a step. “You have told me, truly, that twelve other hands lit the fire. I am glad to know it. I should like those hands brought to my tent.” She pauses. “But you did not tell me that this one did not light it. Did you?”
Hao Lan is silent.
“No,” says Saran. “You were careful.”
The ribbons hang still.
> deceit | Step forward. | court_a3s6
> truth | Say it was your plan. | court_a3s6
> quiet | Hold Hao Lan’s hand. | court_a3s6
> mercy | Say you are sorry. | court_a3s6

=== court_a3s6 | The Truth Under It
Hao Lan puts down her notebook. She does it slowly, on a stone. She looks as she did the first night you met her, at the Law Hall: very young, very straight, with a face scrubbed clean of expression.
“It was my plan,” she says. “I wanted the elders to doubt. I wanted to give you a reason to spare him.”
The ribbons stir, nine of them.
“I do not think he deserves to be spared,” she says. “I think he did a terrible thing. I do not think he is a monster. I think he is a man who was afraid.” She takes a breath. “I have been afraid. I have done terrible things for much smaller reasons. I did them in a warm office with a stove.”
She stops. Her voice has gone thin.
“I used the shape because it was the only thing I had,” she says. “I have been a clerk all my life. A clerk does not know how to say: spare him. She knows how to arrange. I am sorry.”
Saran has not taken her eyes from her face.
“Sit down, girl,” she says at last, not unkindly.
> deceit | Hold her hand. | court_a3s7
> truth | Say she was brave. | court_a3s7
> quiet | Give her tea. | court_a3s7
> mercy | Say nothing. | court_a3s7

=== court_a3s7 | What Saran Wanted
“I will tell you what I wanted,” says Saran. She sits down on the grass, and the elders look away to give her privacy. “I wanted someone to hate. For two years. It was a clean thing. I would wake in the night and say his name and it would sit in my chest like a stone.” She spreads her broad hands. “It kept me warm.”
“And now?”
“Now there are thirteen.” She smiles, grim and sad. “Thirteen is not a thing you can hate. It is too many. It is a wall.” She looks at Hao Lan. “You have taken my stone away, girl. And you have given me a wall.”
“I am sorry.”
“Don’t be. It is true.” She shakes her head. “It is what I did not want to know. That if I killed him, the wall would still be there.”
She is quiet for a time.
“So I have a question,” she says. “For the girl who arranges. What do I do with a wall?”
> deceit | Look at Hao Lan. | court_a3s8
> truth | Wait. | court_a3s8
> quiet | Look at the fort. | court_a3s8
> mercy | Say you will help take it down. | court_a3s8

=== court_a3s8 | A List of Twelve
Hao Lan writes it out. It takes her all night. She writes the names of the twelve other hands, in her small clear script: the scribes of Tsagaan, the Colonel’s adjutant, the Inspector’s secretary, the quartermaster who signed for the oil. She writes where each now serves. She writes what each has been seen to do since. She writes it plainly, with the true date of everything she knows, and she does not arrange anything.
She sets it in front of Saran at dawn.
“It is true,” she says. “All of it. I will swear to every line. The ribbons will move.”
Saran reads it slowly, with her finger. She cannot read well. At the end she folds it in four.
“I will keep this,” she says. “It is a good list.”
“It is not enough.”
“No. It never is.” She puts it inside her coat. “But it is a thing I can carry up the hill.”
She stands. She looks at the prisoner.
“He will dig the graves,” she says. “That I have decided. The rest, we shall see.”
> deceit | Bow. | court_a3s9
> truth | Nod. | court_a3s9
> quiet | Look at Duan. | court_a3s9
> mercy | Weep. | court_a3s9

=== court_a3s9 | Duan’s Verdict on the Clerk
He finds you after the ring has emptied. The sky is violet and the first stars are out. He stands at the foot of the stones in his grey robe with a folded paper in his hands. He holds it out to Hao Lan.
“I have drafted a commendation,” he says. “And a reprimand. I am unable to decide which should be signed. They are the same document.”
She takes it. She reads. It is two lines long. It says: For the discovery of thirteen. For the manner of discovery.
“It is a good reprimand,” she says, with a wavering smile.
“I intended it so.” He clasps his hands. “You were right that a shape can be true. I was right that it can be poison. I have been turning it over all evening.” He looks at the ring. “I think there is a third thing. I think you can use the shape to show what is there, and then take it down.”
“Like the list.”
“Like the list.” His soft face is grave. “You took it down. That is the part I shall remember.”
She folds the paper into her sleeve. Her ears are red.
> deceit | Smile. | court_close | +court_forged
> truth | Nod. | court_close | +court_forged
> quiet | Look at the stars. | court_close | +court_forged
> mercy | Hug Hao Lan. | court_close | +court_forged

// ---------------------------------------------------------------- a4: the circle
=== court_a4s1 | The Woman in Black
She sits at the edge of the ring on a folded felt, with her back against a standing stone, and her eyes are on the sky. She has been there since dawn. She has not touched the tea that someone put by her knee. She is a square, plain woman of fifty in a black coat, with iron-grey plaits, and heavy, patient hands folded in her lap.
Nobody is speaking to her. They are walking round her, in a wide arc, the way people walk round a grave.
“That is Saran,” says Temur, very low. “Of Three Springs. The ribbons stirred for her three times this morning, and she did not turn her head.”
“She is the one who is owed.”
“She is the whole of it.” He pulls at his white hat. “The elders do nothing without her. And she says nothing.”
You look at the prisoner, on his knees at the white pole. Then at her.
You have no idea what you will say. You go anyway. You sit down on the grass at her side, a little way off, and you say nothing at all.
> mercy | Wait. | court_a4s2
> truth | Offer tea. | court_a4s2
> quiet | Look at the sky. | court_a4s2
> inquiry | Ask her name. | court_a4s2

=== court_a4s2 | Sitting
It takes an hour before she speaks. You do not count it. You watch the clouds, and the hawk, and the slow shadow of the stones on the grass. Wind combs the silver of the feather-grass. A lamb bleats, far off.
“You are the one with the cards,” she says.
“Yes.”
“The girl in the mountain. The one who asks.” She does not turn her head. “They say you carry nine. I was told one is a verb.”
“Keep what is small.”
“That is mine.” She says it flatly. “That is the one I keep. Before the burning, I kept a lamb. A bottle lamb. A dull little thing that followed my son. After, it was all I had left. I still have it.”
“Does it follow you?”
“It follows me everywhere,” says Saran. She closes her eyes. “It is an excellent lamb. It does not know what has happened. It stands outside my tent and waits for a boy who will not come.”
You say nothing. There is nothing to say.
> mercy | Sit. | court_a4s3
> truth | Take her hand. | court_a4s3
> quiet | Look at the lambs. | court_a4s3
> inquiry | Ask the lamb’s name. | court_a4s3

=== court_a4s3 | The Lamb’s Name
“Bat,” she says. “For my son.” A laugh catches in her throat. “Not the champion. The little one. The lamb is called Little Bat. It is a stupid name.”
“It is a good name.”
“It is a name I gave to an animal because I could not bear to give it to a child.” She opens her eyes. “That is what you do, when they are small. You name the lamb for the boy. Then, if the wolf comes, you have something to be angry at.”
She is silent.
“I have been angry for two years,” she says. “It is a tiring thing. You would not believe how tiring. It takes a great deal of work to hate a man. You must remember all the reasons, every day, as if you were learning a poem.”
“Do you remember them?”
“I know them by heart.” She smiles slightly. “I am not sure I believe them.”
She looks at the grey man at the pole.
“But I would not like to find out,” she says, “that I had hated for no reason.”
> mercy | Wait. | court_a4s4
> truth | Say you understand. | court_a4s4
> quiet | Let it be. | court_a4s4
> inquiry | Ask if she would like to speak to him. | court_a4s4

=== court_a4s4 | The Question
She does not answer for a while. She picks at a thread on her coat. Across the ring, the elders are talking in low voices, their heads together. The ribbons stir faintly in the wind.
“I want to ask him something,” says Saran. “Not in the ring. Not with the ribbons. I want to ask it with nobody listening.” She shifts. “It is not allowed.”
“Why not?”
“A debtor and a creditor may not speak alone before the settling. It is a rule. They fear the one will bully the other.” She gives a short laugh. “They think I will do him a violence. They think I will strangle him with my bare hands.”
“Would you?”
“I have thought about it.” Her face is calm. “Often. At night. I have it all planned.” She looks at her hands. “I would not need to plan. They are very strong. I milk forty ewes.”
You think for a moment.
“I could sit between you,” you say.
She looks at you, slowly, with her dark, heavy eyes.
> mercy | Say it again. | court_a4s5
> truth | Say you would keep her safe. | court_a4s5
> quiet | Nod. | court_a4s5
> inquiry | Ask if she would allow it. | court_a4s5

=== court_a4s5 | The Circle of Three
Barsbold allows it. He is not happy. He stands at the edge of the ring with his bowl in his hand and his seamed face troubled, and he says: “It has not been done.” And you say: “I know.” And he says, after a very long pause: “One hour. In the ring. The ribbons will not hear.”
They bring in three felts. They lay them on the grass in a triangle, at the foot of the pole. Qadan sits on one, with his bound hands in his lap. Saran sits on the second, upright and solid, like a standing stone. You sit on the third, between them.
Nobody speaks. A lark rises. The sun is warm on your back.
“Well,” says Saran at last.
Qadan raises his head. His grey face is filmed with sweat. He is looking at her hands.
“I am not going to hurt you,” she says, impatiently. “I am too tired. I wanted to ask you one thing.” She leans forward. “And you will answer it. Nobody is listening.”
He swallows.
“Yes,” he says.
> mercy | Wait. | court_a4s6
> truth | Look at Saran. | court_a4s6
> quiet | Look at Qadan. | court_a4s6
> inquiry | Ask her what it is. | court_a4s6

=== court_a4s6 | Saran’s Question
“Did you eat the bread?” says Saran.
He blinks. “What?”
“The night you stayed in my tent. I made bread. A flat loaf, with seed. It was on the table beside the lamp.” She holds him with her heavy eyes. “You ate it. You had two pieces. Dorj said, ‘He eats like a man who has not been fed in a month.’ And I said, ‘Leave him.’ And you smiled.”
Qadan’s mouth works.
“Did you taste it?” says Saran. “I want to know. Did you taste the bread?”
He is silent a long time. Tears run unnoticed down his grey cheeks and drip from his chin.
“Yes,” he says, brokenly. “It was the best bread I have eaten in my life. I thought of it the whole way to the fort. I thought: I cannot do this. And I did. And I thought of it again in the night when I saw the fire.” He covers his face. “I have not been able to eat bread since.”
Saran leans back. Her face has changed.
“Good,” she says, very quietly. “That is what I needed.”
> mercy | Hold still. | court_a4s7
> truth | Weep. | court_a4s7
> quiet | Look at the sky. | court_a4s7
> inquiry | Ask what she needed. | court_a4s7

=== court_a4s7 | What She Needed
 she says. “Not that you had been sorry. I could not have used that. A man can be sorry in a warm office. I needed to know you had been in my tent.” She nods. “It was a real thing. It happened. I did not dream it.”
“It happened,” says Qadan.
“And I fed you.” She turns to you. “Do you understand? I have gone over it a thousand times. Did I do wrong, to feed him? Was there something I should have seen? I thought, if I could only find the place where it began—”
“It began in the office,” you say.
“Yes.” She breathes out. “I know that. But a woman wants it to have begun somewhere she can reach.” She looks at Qadan. “It did not. It began a long way off. And came to my table, and ate my bread.”
She is silent.
“I am not sorry I fed you,” says Saran. “I want you to know that. It is the one thing in this I would do again.”
Qadan sobs once, on a high note, like an animal.
> mercy | Reach out. | court_a4s8
> truth | Wait. | court_a4s8
> quiet | Look away. | court_a4s8
> inquiry | Watch Saran. | court_a4s8

=== court_a4s8 | What Saran Decided
She stands. She shakes out her black coat. She is still square and plain and unmoving. She goes to the edge of the ring, to the nine stones, and she speaks to the elders in a clear, level voice that carries over the grass.
“I name it,” she says. “It is not a death.”
The ribbons stir.
“He will dig the graves,” she says. “That is the first thing. Thirty-one. He will say their names. He will dig with his own hands, and he will not rest until he has finished.” She takes a breath. “The second thing is the bread.”
“The bread?” says Barsbold.
“Every year. On the night of the burning. He will come to my tent and sit at my table. And I will bake the loaf. And he will eat it.” Her voice does not shake. “All of it. Both pieces. And he will say the names of my sons while he does.”
There is a hush.
“That is the debt,” says Saran. “I will collect it as long as I live.” She pauses. “And when I am dead, my younger son will collect it. And then his.”
The ribbons are a whirl.
> mercy | Stand with her. | court_a4s9
> truth | Bow your head. | court_a4s9
> quiet | Hold your breath. | court_a4s9
> inquiry | Look at Duan. | court_a4s9

=== court_a4s9 | Nine Hands
They agree. The nine elders raise their bowls, one by one, and tap them against their stones, and it makes a sound like a soft bell. The grey woman on the third stone is the last. She bows her head. She taps twice.
“It is the heaviest debt I have ever heard named,” says Barsbold. He speaks with difficulty. “It is also the kindest.”
Duan Wuyi has risen from the tenth stone. He stands with his hands open. He looks at the widow, who is still standing at the rope in her black coat, with her face turned to the grass.
 he says, hoarsely. “In forty years I have not heard a better sentence. It would not have occurred to me. He wipes his eyes. “It is not law. It is something one gives.”
“It is the same,” says Saran.
“Is it?”
“If you do it right.” She looks at him, and at you. “Are you finished with me? I have a lamb to feed.”
She walks away across the grass in the evening light, a short square figure, and a small white lamb comes bounding out of the dusk to meet her.
> mercy | Watch her go. | court_close | +court_circle
> truth | Smile. | court_close | +court_circle
> quiet | Bow. | court_close | +court_circle
> inquiry | Ask Duan what he will remember. | court_close | +court_circle

// ---------------------------------------------------------------- hidden: Nara
=== court_h1 | Narantuya
She comes in on the third day, led by Temur’s sister Sarnai: a thin brown child of eleven in a red Steppe coat that is too large for her, with a black plait and a missing front tooth. She walks into the ring like a small ghost, looking about with huge solemn eyes. When she sees the man at the white pole she stops.
“Papa,” she says.
Qadan makes no sound at all. He sags forward on his knees, as if cut.
“I bought her name,” you say to Barsbold. “At the lake. From Madam Uzun. It was the Lotus’s silver. The pledge is cancelled. She is nobody’s.” Your voice is rough. “I thought she should be here.”
“It is not usual.”
“No.”
The old Wind-Speaker looks at the child for a long time. She has come right up to the pole. She is standing beside her father with her hand on the white birch, and the ribbons are moving about her fingers, all nine at once, in a flutter like a bird’s wing.
“Child,” says Barsbold. “Do you know why you are here?”
“Yes,” says Narantuya, in a small flat voice. “They are going to kill him.”
> inquiry | Kneel by her. | court_h2
> truth | Say nothing. | court_h2
> mercy | Look at Saran. | court_h2
> quiet | Hold your breath. | court_h2

=== court_h2 | What the Child Knew
“Nobody has said so,” says Barsbold, gently.
“Everyone says it. With their faces.” The girl’s voice is thin and clear. “I am not stupid. I was in the school three years. I know what it looks like when they decide a thing.” She turns her little body. She faces the ring. “I have something to say. May I? Nobody has asked the child.”
“Speak.”
She tugs her sleeve straight. She lifts her chin. She says in a rapid recited voice, as if she had practised: “My father never sleeps. He wakes at midnight and counts. He says the names of the dead. He started the night after the fire. I know them. I have heard them forty times.” The ribbons stir. “Thirty-one. He says them in the order of the age. The youngest was three.”
Saran has risen from the grass. She is standing very still.
“He cries,” says the child. “Not much. A little. He stops when I look. He thinks I don’t see.” She wets her lips. “If you kill him, I will not have him. If you let him live, he will keep counting. Which is worse?”
No one answers her.
> inquiry | Weep. | court_h3
> truth | Wait. | court_h3
> mercy | Watch Saran. | court_h3
> quiet | Look at the sky. | court_h3

=== court_h3 | The Younger Debt
“Come here, child,” says Saran.
She says it roughly. She holds out her hand. The girl hesitates. Then she crosses the grass, in her big red coat, and puts her small hand in the big one.
The widow looks down at her for a long moment.
“How old are you?”
“Eleven.”
“I had a daughter-in-law, once,” says Saran, “who would have been eleven.” She is quiet. “I had three nieces. The littlest was three.” She drops to one knee, awkwardly, with a grunt, and looks the child in the face. “Do you know what he did?”
“Yes.”
“Do you think it was wrong?”
“Yes,” says Narantuya, without hesitation.
“So do I.” Saran touches her cheek. “Then we agree. And I am going to ask you to do something very hard, and I am going to ask you to do it because you are the only one who can.”
The girl waits.
“I want you to come to my tent,” says Saran, “every year. On the night of the fire. And watch him eat the bread.”
> inquiry | Smile. | court_close | +court_nara
> truth | Bow. | court_close | +court_nara
> mercy | Weep. | court_close | +court_nara
> quiet | Stand still. | court_close | +court_nara

// ---------------------------------------------------------------- close
=== court_close | The Hill Above Three Springs
They bury the dead on the third day after, in the hard clear light of morning. Frost glitters on the grass of the hill. Wind combs the silver. A line of mourners stretches from the ford to the ridge, in black felt, with their hats in their hands, and in the middle of it a grey man in a stripped greatcoat is digging with a wooden spade.
+[how] court_argued | Duan read the Law of Liens aloud and was ashamed of every line.
+[how] court_wrestled | Ren Qiao lost a fall on purpose, then won the match and carried a spy on his back.
+[how] court_forged | Hao Lan told eleven true sentences, then wrote a list of twelve hands and took the arrangement down.
+[how] court_circle | You sat between a widow and a spy while she asked him about her bread.
+[how] court_nara | A girl of eleven in a red coat said a thing nobody had dared to ask.
Saran stands on the lip of the first grave with her arms folded. She has not spoken in an hour. At her side, a lamb is eating the grass.
The Wind-Speaker is there. He has set a single white ribbon on a stick at the head of the hill. He does it with great care, as if tying a knot in a lifeline.
“Thirty-one,” he says. “Nine days. Then the bread.”
“Will it work?”
“I do not know. No one has done it before.” His wrinkled face creases. “That is the best thing about a new law. Nobody can tell you in advance how it will fail.”
> truth | Bow. | court_close2 | +b4q_court
> mercy | Help dig. | court_close2 | +b4q_court
> quiet | Stand with Saran. | court_close2 | +b4q_court
> inquiry | Ask what comes next. | court_close2 | +b4q_court

=== court_close2 | What Duan Kept
He finds you at the fire that night, with a tin cup in his hand and a blanket round his shoulders. He looks ten years older, and somehow lighter. He has taken the Censor-General’s seal from his sash. He is turning it over in his fingers.
 he says. “It occurs to me that I have been signing my name to other people’s grief for forty years. And I called it order.” “I would like to be of use. I do not know what that means.”
“You sat the tenth stone.”
“I was a guest. I did not do anything but read.” His soft clever face is rueful. “I do not think I have any right to a verdict.”
“You gave them the Law of Liens to throw away.”
“Ah.” A thin smile. “Yes. It is a rare gift. To have a thing, and to hand it over for burning.” He picks up the seal again. He puts it in his pocket. “Perhaps I will keep it, after all. As a reminder.”
The fire burns low. Somewhere out in the dark, a horse whinnies.
“Of what?” says Hao Lan.
“That a rule,” says Duan, “is only a kindness when it holds.”
> truth | Smile. | hub_b4_b | bond:duan+3
> mercy | Pour him more tea. | hub_b4_b | bond:duan+3
> quiet | Look at the fire. | hub_b4_b | bond:duan+3
> inquiry | Ask what he thinks of the Order of the Torn Page. | hub_b4_b | bond:duan+3

`,
  scenarios: String.raw`
$ SU_COURT_WIND | trust+3 respect+4 fear+2 | elder | The Elder sits in the circle of a court that has no books.
hostile: Nine stones, one pole, a ribbon that moves when a man tells the truth. I have spent forty years building a system that could be made to say what I wished. I find this one rather harder to bribe.
wary: They asked Duan to sit. They did not ask me. I was grateful. I should not have known what to say. I have signed thirty-one sentences in my life without once hearing the accused. I heard this one.
neutral: The ribbons moved for the widow and did not move for the defendant until the third day. It was the first time in my life I had watched a verdict arrive slowly.
warm: I have an idea that a court should be a place where the loudest voice in it is the quietest truth. It is not a thing we do in the Chancery. I should like to find out whether it can be done.
devoted: I watched Duan sit the tenth stone with his hands open. He did not read a single page. I thought: so that is what it looks like, when a man puts the law down.
`,
  remarks: String.raw`
% court_nara_later | since:court_nara>=6 | gu | Qadan’s girl sends a drawing every few days. Mostly horses. One was a man in a long coat, holding a cloth, with a very small hat. I think it is meant to be her father.
% court_widow_later | since:b4q_court>=5 | hao | Saran left a bundle at our fire. Felt socks, nine pairs, one for each of us. They are the ugliest socks I have ever seen. I have put mine on.
`,
}
