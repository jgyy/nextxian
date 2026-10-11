import type { Arc } from "../types";

/**
 * Book Four, arc twelve: the Roots. Under a cliff of red stone that looks like a torn page, three hundred people whose names were
 * struck from Heaven's Ledger live in a camp called the Hollow, remembered by nobody but each other. They are the steppe root of the
 * Hollow Lotus, and their keeper is Wen Rui, a Censor struck beside Madam Ash, who placed Hao Lan in the Chancery at nine. He
 * means to carry the camp to the abyss and open it. Four approaches: hear every name in the camp (a1, truth), break his guard
 * (a2, force), pass a night as one of the struck (a3, deceit), and write one name back (a4, mercy). A hidden route shows him
 * Madam Ash's ribbon. Cast: Wen Rui, Marrow, Yarrow, the child Echo, Hao Lan, Duan Wuyi, Odval.
 */
export const roots: Arc = {
  id: "roots",
  name: "The Roots",
  scenes: String.raw`
=== roots_entry | The Hollow
It is a cliff of red stone, three hundred feet high and a mile long, and the face of it is torn: the red strata stop at a jagged diagonal, and above it the stone is smooth and white, like paper where a page was ripped out. Under it, in the shadow, a camp lies. Tents of patched felt, a hundred cooking-fires. No flag. No gate. No one on watch.
The black ribbons lead in. They are tied to every post.
“They call it the Hollow,” says Odval, from the cart. “I was told not to bring you. I was told it would not be good for the Elder.” She tilts her head. “I was told by my grandmother, who says the opposite of everything she means.”
A woman steps out of the nearest tent to look at you. She is thirty, thin, tired, in a coat that has been mended in nine colours. She looks at your face. She looks at the Elder’s. She does not seem to see either.
“Are you looking for someone?” she says. “Because I do not think anyone here has a name.”
> truth | Ask her what she is called. | roots_a1s1
> force | Notice the men in grey felt who have stepped out from between the tents, each with a short club. | roots_a2s1 | needs:4
> deceit | Notice that nobody in the camp seems to see the Elder, or Duan, or you, and wonder why. | roots_a3s1
> mercy | Look at the child who is sitting alone in the dust and writing in it with a stick. | roots_a4s1
> inquiry | Show the black ribbon Madam Ash gave you, and ask for Wen Rui. | roots_h1 |  | lotus_trusted | The Hollow Lotus does not know your face.

// ---------------------------------------------------------------- a1: the names
=== roots_a1s1 | A Name Is a Thing You Are Given
“I was called Yarrow,” says the woman. She says it carefully, as one repeats a phrase in a foreign tongue. “I think. It is on the inside of my boot.”
She sits you down on an upturned bucket outside her tent, in the red shadow of the cliff, and gives you a bowl of thin barley soup. Hao Lan, Duan Wuyi and the Elder have followed. Nobody else in the camp has looked up. People pass with water-skins and firewood, in a silence like a well.
“The struck,” says Yarrow. “That is what we are. A name is written, in Heaven’s Ledger, when you do something that matters. If your name is struck out, you begin to fade. Not at once. First your friends forget your birthday. Then your mother forgets your face.” She stirs the pot. “I was a midwife. I delivered four hundred children. Not one of them remembers me. Nor does the village.”
“Why?”
“A debt. A forged signature. I do not know whose.” She smiles. “Does it matter?”
> truth | Say it matters. | roots_a1s2 | npc:SU_ROOTS_HOLLOW
> mercy | Say you remember her. | roots_a1s2
> quiet | Eat. | roots_a1s2
> inquiry | Ask how many are here. | roots_a1s2

=== roots_a1s2 | Three Hundred and Eleven
“Three hundred and eleven,” says Yarrow. “Since Midsummer.” She counts them on her chapped fingers. “We keep a tally. It is the only thing we do. At dusk each person says the name they were born with, to the person on their left, and that one repeats it to the next. So that it is said once a day.”
“Does it help?”
“It stops the fading. Mostly.” She shrugs. “A name said aloud by someone who is not yourself is a very strong thing.”
“Who started it?”
“Wen Rui.” Her thin face changes. “He is not unkind. He is a hard man, but he is not unkind. He was a Censor. He was struck for refusing to sign.” She lowers her voice. “He believes we should not need to say them. He believes we should be written.”
“Written?”
“Back in. In the Ledger. All of us.” She shakes her head. “He has a plan. He will tell you. He tells everyone.”
> truth | Ask for the plan. | roots_a1s3
> mercy | Ask what Yarrow thinks. | roots_a1s3
> quiet | Wait. | roots_a1s3
> inquiry | Ask where he is. | roots_a1s3

=== roots_a1s3 | The Evening Telling
They do it at dusk, on the open ground before the cliff. Three hundred and eleven people stand in a great slow ring, and each turns to the person on the left and speaks a name. It goes round and round. It begins at the sunward edge and travels, voice to voice, like a ripple. You stand between Yarrow and a bent man with a shaved head, and you wait.
“Yarrow,” says the man, to you.
You say it to the next. “Yarrow.”
You say it twice. You say it three times. Hao Lan, beside you, is saying it. The Elder is saying it, her lips moving, her eyes shut. There are no gestures. There is no song. It is only a long rustle of whispered names, a river of them, going round the base of the cliff.
At the end of the circle a child’s thin voice, very clear, says: “Marrow.”
And the bent man beside you, who has not spoken a word, begins to cry.
> truth | Ask him. | roots_a1s4
> mercy | Touch his shoulder. | roots_a1s4
> quiet | Stand still. | roots_a1s4
> inquiry | Look at the child. | roots_a1s4

=== roots_a1s4 | Marrow
“It is mine,” he whispers. “It is my name. It is the first time I have heard it since the autumn.” He is forty. He has a broad, tired, shaven head, and the hands of a stonemason. “I was a mason. I built the Tidewall’s sea steps. Forty courses. I laid every stone.”
“I have walked them,” says the Elder, quietly.
He turns. He looks, with some effort, in her direction. “Have you?”
“They are very true.”
He smiles. It is a ruined, grateful, astonished smile, like a man who has been given a coin in the street. “Thank you,” says Marrow. “Nobody has said so since the day I was struck.” He wipes his eyes. “I do not know why. They fell down the day after. Did you know? The first storm took them. I think the mortar was struck out with me.”
“They stand,” says the Elder, gently. “I climbed them in the rain.”
He stares at her. His mouth works.
> truth | Say the steps are standing. | roots_a1s5
> mercy | Hold his hand. | roots_a1s5
> quiet | Look at the Elder. | roots_a1s5
> inquiry | Ask about the child. | roots_a1s5

=== roots_a1s5 | The Child Who Writes
She is nine, with a cowlick and a gap-toothed grin and no coat. She is sitting in the dust beyond the ring with a stick, writing. She writes the same word, over and over, in big shaky characters, until the dust is covered in them. It is the same word every time. It is a different name each.
“Echo,” she says, when you crouch beside her. “That is what they call me.”
“Is it your name?”
“It is what I do.” She giggles. “I say them back. If someone says a name, and nobody hears, I say it again. Then it is heard.” She goes on scratching. “Yarrow says I am too small to be struck. She says I only came because nobody could think where else to put me.”
“Who are you looking for?”
“I do not know,” says Echo. She writes it again. “I only write what I hear.”
You look at the dust. It is covered, from edge to edge, in the names of the struck, written by a child who cannot read.
They are all spelled perfectly.
> truth | Ask her to write yours. | roots_a1s6
> mercy | Sit with her. | roots_a1s6
> quiet | Watch. | roots_a1s6
> inquiry | Ask what the Elder’s name looks like. | roots_a1s6

=== roots_a1s6 | Fourteen and a Fifteenth
She writes them one by one. You do not ask. Echo hears something in the wind, with her head tilted, and writes. The Elder has gone rigid beside you. Duan has taken off his hat.
The first is a boy of nineteen. The second, a girl with a scar. The third, a novice monk. You know them. You have seen them on a ledger in the Law Hall, in a column, in the Elder’s hand, each with a date and a seal.
There are fourteen. Echo writes them in the order of the list. Her stick scratches. She writes without hesitation, in clear round characters.
She stops. She frowns. She writes a fifteenth.
It is not a name that was ever on the Law Hall’s ledger.
“Who is Su Mengjiao?” says Echo, looking up.
The Elder makes a sound. It is not a word. Her knees give. She sits down in the dust, abruptly, among the names, and puts her hand over her mouth.
“Someone I wrote beneath the fourteenth,” she says. “In my own hand.”
> truth | Kneel beside her. | roots_a1s7
> mercy | Hold the Elder. | roots_a1s7
> quiet | Look away. | roots_a1s7
> inquiry | Ask Echo who is saying it. | roots_a1s7

=== roots_a1s7 | Who Is Saying It
“It is not on the wind,” says Echo. She cocks her head. “It is coming from under.” She taps the dust. “There is a hole in the cliff. It goes down. A very long way. I hear a lot there. I hear the ones nobody has said.”
“The abyss?”
“I do not know that word.” She is stern. “I only know it is the place where the page was torn. Wen Rui says it is the mouth. I say it is the ear.”
“The ear?”
“It listens,” says Echo. She wraps her arms round her knees. “I think it is very lonely. I think it has been listening for a very long time and nobody has ever answered.”
Duan Wuyi lowers himself onto the ground. He is grey in the face. “A child of nine,” he says, hoarsely, “has just said what the Concord’s best scholars could not. That the Unwritten is not a place. It is a listener.”
The Elder says nothing. She is staring at the fifteenth name.
> truth | Ask Echo to keep writing. | roots_a1s8
> mercy | Sit with them. | roots_a1s8
> quiet | Wait. | roots_a1s8
> inquiry | Ask where Wen Rui is. | roots_a1s8

=== roots_a1s8 | Wen Rui
He is in the tent by the cliff. Inside is a plank table, a stool, a lamp. A man is writing at the table. He does not lift his head.
He is sixty, tall, painfully thin, with a long grey face, thin lips, and a Censor’s robe worn through at the elbows. His brush moves in short even strokes. He has the stillness of someone who has taught himself to be calm.
Hao Lan makes a noise behind you.
“Wen Rui,” she says.
The brush stops. The grey head lifts. The long face turns toward her with great slowness. He looks at her for a very long time.
“Ah,” he says. His voice is dry as a leaf. “It is the child.”
“You placed me.”
“I did.” His thin lip trembles. “Hui Niang asked. She said, there is a girl in a basket who is going to need a school. I said I would arrange it.” He sets down the brush. “You were nine. You had a plait. You asked me what a ledger was for.”
“What did you say?”
“I said I would tell you when I knew.”
> truth | Wait. | roots_a1s9
> mercy | Watch Hao Lan. | roots_a1s9
> quiet | Look at the lamp. | roots_a1s9
> inquiry | Ask him what he knows now. | roots_a1s9

=== roots_a1s9 | Heard
“Nothing,” says Wen Rui. “I am still waiting.”
He rises. He is a head taller than anyone in the tent. He comes round the table, slowly, and looks at the Elder, at Duan, at you. He does not stop at Hao Lan. He stands in front of her and looks down, and his long grey face does something unexpected. It softens.
“You are tall,” he says.
“I am average.”
“You are a great deal more than average.” He lifts one thin hand. He hesitates. He lets it fall. “I have thought of you every year. I have tried to see how you were. They tell me you are Duan Wuyi’s clerk. They tell me you are very good.”
“I am.”
“I know.” Wen Rui’s voice is unsteady. “I heard your name at the Evening Telling. The child said it.” He looks at the others. “It is why I let you into the camp. I have not heard it in years.”
Hao Lan’s chin trembles.
“Then I am not struck,” she says.
“No,” says Wen Rui. “Not yet.”
> truth | Stay close. | roots_close | +roots_heard
> mercy | Take Hao Lan’s hand. | roots_close | +roots_heard
> quiet | Step back. | roots_close | +roots_heard
> inquiry | Ask what he means. | roots_close | +roots_heard

// ---------------------------------------------------------------- a2: the guard
=== roots_a2s1 | Grey Felt
There are forty of them, in a half-ring, between you and the cliff. They wear coats of grey felt, unmarked, and carry short ash clubs. They do not look like soldiers. They look like men who have been told to stand in a line and are not quite sure why. The leader is a bearded giant with a pitted nose and a hand like a spade.
“No further,” he says. His voice is bored. “By order of the keeper. Strangers do not walk in the Hollow.”
“We are guests.”
“You are not on the list.”
“What list?”
“The list of people the keeper has said can come in.” He frowns. “You are not on it.” He thinks. “Nobody is.”
Ren Qiao has stepped up to your side. His hand is resting on his sword-hilt. He has not drawn. He is looking at the giant with the quiet attention of a man weighing a door. “I am willing to talk,” he says. “I am also willing to be less polite.”
“I wouldn’t,” says the giant, mildly.
> force | Lay a hand on Ren’s arm. | roots_a2s2 | needs:4
> truth | Ask for the keeper. | roots_a2s2
> quiet | Watch the line. | roots_a2s2
> mercy | Ask why they are afraid. | roots_a2s2

=== roots_a2s2 | Why They Stand
“We are not afraid,” says the giant. He thrusts out his chest. “We are guards.”
“Of what?”
“Of him.” He nods at the cliff. “The keeper. He is going to do something. He has told us. He has told all of us.” His mouth sets. “We believe him. That is why we hold the line.”
“What is he going to do?”
“Take us home.” The giant says it simply. “All of us. Back into the Ledger. He says there is a way.” His voice drops. “He says that if three hundred of us walk into the hole, together, with our names in our mouths, Heaven will have to write us back, to make room.”
“Into the abyss?”
“Into the ear.” The man’s pitted face is earnest. “He has been working on it six years. He has got maps.” He looks at his club. “I would rather not think what happens if he is wrong.”
Ren Qiao exhales. “He will kill them all,” he says.
“Aye,” says the giant. “That is what I am afraid of.”
> force | Ask to see him. | roots_a2s3
> truth | Ask what he wants. | roots_a2s3
> quiet | Look at the cliff. | roots_a2s3
> mercy | Say you will stop it. | roots_a2s3

=== roots_a2s3 | The Man Who Held the Line
His name is Tolui. He was a prize-fighter in the River Provinces. He was struck for killing a man in the ring, which he did not do, and which was proved a year after, when it no longer mattered. He tells you this over tea, in a cramped felt tent, while forty men stand about outside and pretend not to listen.
“I kept the line,” he says. “I thought it was the right thing. The keeper said: if anyone comes who might harm the plan, turn them back.” He drinks. “And then you came. And you asked me why I was afraid.”
“Are you?”
“I am a coward,” says Tolui, with surprising dignity. “I have always been. That is why I was a good fighter. I knew what it cost.” He puts down the cup. “I do not think the keeper is wrong about the ear. I think he is wrong about the door.”
“What would you do?”
“Let you by,” says Tolui. “If I could. If it would not make him angry.”
He looks at his big hands.
“He gets very quiet,” he says, “when he is angry.”
> force | Say you will protect him. | roots_a2s4
> truth | Thank him. | roots_a2s4
> quiet | Look at Ren. | roots_a2s4
> mercy | Ask who else will stand aside. | roots_a2s4

=== roots_a2s4 | A Quiet Word
There are twelve. They come to you one by one, in the night, to the cart where you are sleeping. They do not say much. They stand at the tailboard with their caps in their hands and mutter. A baker. A drover. A schoolmaster. A man who used to sing in a temple. Each has a name they cannot use.
“We would stand aside,” says the baker. “If you gave us a reason.”
“What reason?”
“That it is not a plan.” He scratches his stubble. “That it is a mistake. That we are not required to walk into a hole in order to be remembered.” His voice drops. “I have been struck eleven months. I am afraid my wife is forgetting me. I am more afraid of what happens if I go in.”
“I cannot promise she will remember.”
“No.” He nods. “But you can promise there is another door.”
“I do not know that there is.”
“Neither do I,” says the baker, with a ghost of a smile. “But it is a very good reason to keep looking.”
> force | Promise to look. | roots_a2s5
> truth | Say you do not know. | roots_a2s5
> quiet | Take his hand. | roots_a2s5
> mercy | Tell him his name. | roots_a2s5

=== roots_a2s5 | A Thin Line
You walk in at dawn. It is Ren Qiao’s plan, and Ren Qiao’s plan is, as usual, extremely simple. You walk in. You do not draw a weapon. You walk straight to the keeper’s tent with the swordsman at your shoulder and the twelve at your back, and when the forty men in grey felt turn to meet you, you simply do not stop.
They do not know what to do. They have clubs. They have orders. They have forty good reasons to hit you, and no practice.
“Halt,” says the first.
You do not halt.
“Halt,” says the second, uncertainly.
You walk. Ren Qiao walks. The twelve walk. Tolui stands at the end of the line with his club hanging, looking at the ground.
“I cannot,” he says. “I just cannot.”
He steps aside.
One by one, the others follow. The line breaks like a rope. You walk through it as through a field of tall grass, and nobody lifts a hand.
It is the quietest battle you have ever won.
> force | Walk on. | roots_a2s6 | needs:4
> truth | Thank them. | roots_a2s6
> quiet | Hold your breath. | roots_a2s6
> mercy | Look back. | roots_a2s6

=== roots_a2s6 | The Keeper’s Door
He is waiting for you. He has put aside his brush. He stands in front of his tent in the red dawn with his thin hands clasped behind his back, tall, grey, rigid, and when you come within ten paces he lifts one finger. The air changes. It goes thick, dense, still, like the second before thunder.
“That is far enough,” says Wen Rui.
You stop. Ren Qiao has drawn. The twelve men have stopped dead behind you.
“I did not give the order to let you in,” says Wen Rui, quietly. “I do not think I need to ask who did.”
“Nobody did.”
“Ah.” His mouth twists. “That is worse.” He looks at the broken line. “I trusted them.”
“You frightened them.”
“I prepared them.” His eyes flash. “Do you know what it is to be struck, to be forgotten, to have your daughter look at you across a table and ask who you are? I have shown three hundred people a door. Do you intend to stand in it?”
The air hums. Something is gathering round his hands.
“Yes,” you say.
> force | Stand firm. | roots_a2s7
> truth | Say you will not fight. | roots_a2s7
> quiet | Step back. | roots_a2s7
> mercy | Say you are sorry. | roots_a2s7

=== roots_a2s7 | Ten Paces of Dread
He is a cultivator of the Foundation realm, and more. You feel it as a pressure on the skull: the old authority of a Censor’s seal, concentrated and bent. It comes in a wave. The grass flattens. The twelve men drop to their knees. Ren Qiao grunts and sets his boots. His sword-point wavers.
“Back,” says Wen Rui. “I do not want to hurt you.”
You take a step forward.
The pressure doubles. Something in your ears pops. The edges of the world go dark and silver. You can feel your own pulse, slow and thick, in your throat. Your hand is on the black seed in your chest, and it is cold, so cold, a small hard hum like a plucked wire.
It answers.
You do not mean it to. The seed turns over, and the pressure stops.
It does not break. It parts, as water parts round a stone. Wen Rui staggers. His grey face loses all its colour. He looks at your chest, and then at your eyes, and for the first time since you met him there is naked fear in them.
“You are the Ninth,” he whispers.
> force | Take another step. | roots_a2s8
> truth | Say yes. | roots_a2s8
> quiet | Stand still. | roots_a2s8
> mercy | Hold out your hand. | roots_a2s8

=== roots_a2s8 | The Ninth
“Hui Niang said you would come,” says Wen Rui. He sinks down on the stool outside his tent, unsteadily, like a man whose strings have been cut. “She said: wait, and one day there will be a girl with a black seed, and she will ask you to put it down.” His voice shakes with an old rage. “I told her it was nonsense.”
“I have not asked.”
“You do not need to.” He passes a hand over his face. “I felt it. It does not push. It simply is.” He laughs, thin and bitter. “You do not need to fight me. You only need to be here.”
“I do not want to fight.”
“No.” He looks up. His eyes are red. “You want me to put it down.”
“I want you to wait.”
He is silent for a long time. Behind him the cliff rises, huge and torn, red as a wound. The names of the struck are rustling in the camp, a low drone, a hum of three hundred and eleven voices at the Morning Telling.
“How long?” says Wen Rui.
“Until I have been to the mountain.”
> force | Offer your hand. | roots_a2s9 | needs:4
> truth | Say a month. | roots_a2s9
> quiet | Wait. | roots_a2s9
> mercy | Say you will come back. | roots_a2s9

=== roots_a2s9 | A Bargain with the Keeper
He agrees. It costs him. You watch it cost him, in the slow release of his shoulders, the long breath, the way his hand goes to his sleeve and takes out a worn key, and holds it out.
“That is the gate,” he says. “To the hole. I will not use it. Not until you have been and come back.” He is looking at the ground. “If you do not come back—”
“I will.”
“If you do not,” says Wen Rui, “I will take them in.”
“I understand.”
“I do not think you do.” He closes your hand on the key. “It is not an ultimatum. It is the most hopeful thing I have said in six years.” His thin face crumples. “I have been waiting to be told I could stop.”
Behind you, Hao Lan has begun to cry. She does it silently, with her fist in her mouth, standing very straight.
Wen Rui does not look at her. He cannot. But he lifts one hand, a little way, from his knee, as though to touch the air.
> force | Pocket the key. | roots_close | +roots_broke
> truth | Thank him. | roots_close | +roots_broke
> quiet | Bow. | roots_close | +roots_broke
> mercy | Go to Hao Lan. | roots_close | +roots_broke

// ---------------------------------------------------------------- a3: unseen
=== roots_a3s1 | Nobody Sees
It takes you an hour to realise. You walk through the camp, and nobody looks. Not at you. Not at Duan Wuyi, in his Censor’s grey; not at the Elder, who has the most striking face in the Concord. A boy runs straight into Hao Lan, bounces off, and apologises to the air.
“It is a quality of the place,” says Duan, uneasily. “I have read of it. In the Annex. A wound where a page is torn gathers the unwritten. And those who walk into it...” He trails off.
“Become unwritten?”
“Become unremarked.” He pinches the bridge of his nose. “It is not a curse. It is the way the paper is. A person who is not in the Ledger is not seen by those who are.”
“But we are in the Ledger.”
“Only so long as we are remembered.” He gives a thin smile. “I am afraid it is a matter of time. A day. Perhaps less.”
Hao Lan has stopped walking. She is looking at her own hands.
“I could use that,” she says, very quietly.
> deceit | Ask what she means. | roots_a3s2
> truth | Say it is dangerous. | roots_a3s2
> quiet | Watch her. | roots_a3s2
> mercy | Take her hand. | roots_a3s2

=== roots_a3s2 | An Idea of Hao Lan’s
“If nobody can see us,” she says, “we can go anywhere.” She turns. Her small face is bright. “Wen Rui keeps a ledger. I saw it through the tent flap. A plan, with maps and dates. If I could read it—”
“You would be seen.”
“Not if I am struck.” She says it lightly. She is already unpinning her Censor’s badge. “It is simple. The camp has a ritual. A person who wishes to join the struck says their name aloud to the Telling circle, and gives it up. It is voluntary. It is the most gentle of the strikings.”
“And you would forget it.”
“Not forget. Put aside.” She frowns. “I would carry it in my sleeve. I would hold it in my fist. And at dusk I would take it back.” She looks up. “It has been done. Yarrow told me. People do it for the night, to rest from being themselves.”
“It could go wrong.”
“Everything could go wrong,” says Hao Lan. “That is how I know it is a good plan.”
> deceit | Agree. | roots_a3s3
> truth | Say it is wrong. | roots_a3s3
> quiet | Look at Duan. | roots_a3s3
> mercy | Ask who will hold her name. | roots_a3s3

=== roots_a3s3 | Who Holds a Name
You hold it. Not because she asks, but because nobody else is near. She comes to you at dusk, in the red shadow of the cliff, with her badge in one hand and a folded paper in the other. She has written her name on it, in her best script. Her mouth is set.
“It is only for the night,” she says. “You will give it back at dawn.”
“Yes.”
“You will not read it.”
“No.”
She hands it over. It is a small square of white. It weighs nothing. It lies in your palm like a feather.
She says the name aloud, to the Telling circle. She says it clearly, once. And then you watch her face change.
It does not go blank. It goes soft, rounded, a little younger, like a child's after sleep. She blinks. She looks round the camp, at the red cliff, at the three hundred strangers. She looks at you.
“Hello,” she says, with a hesitant smile. “Are you lost?”
> deceit | Say yes. | roots_a3s4
> truth | Say you are a friend. | roots_a3s4
> quiet | Hold the paper. | roots_a3s4
> mercy | Weep. | roots_a3s4

=== roots_a3s4 | The Girl With No Name
She is a different person. It is horrifying and wonderful. She sits cross-legged by the fire, nameless, curious, a girl of nineteen with a plain scrubbed face, and asks the others how to peel a turnip. She laughs at a joke Yarrow tells. She helps a child with a knot. She is not unhappy. She is relieved. It is the relief of a creature that has put down a very heavy pack.
“I do not remember what I was carrying,” she tells you. “But I am glad I have stopped.”
Duan Wuyi watches from the shadows with his hands in his sleeves. His soft face is working.
“I was never allowed,” he says at last, to nobody. “Not once. Forty years. I was always the Censor-General.” He shakes his head. “What a relief it must be.”
“Would you?”
“I would not dare.” He gives a wobbling smile. “I am afraid I would not come back.”
Across the fire, nameless, Hao Lan is laughing. Her whole body is loose. Her shoulders are down.
You hold her name. You do not read it. You are very careful.
> deceit | Watch. | roots_a3s5
> truth | Join the circle. | roots_a3s5
> quiet | Keep watch. | roots_a3s5
> mercy | Stay near her. | roots_a3s5

=== roots_a3s5 | In the Keeper’s Tent
She goes in at midnight. She does it simply, with the confidence of one who is not there. She walks through the camp, past the sleepers and the banked fires, and slips into the large grey tent by the cliff. She stands over the plank table. She turns the pages of the ledger with her fingertips.
You wait outside, in the dark, with her name in your fist. Every minute is an hour.
When she comes out, she is shaking. She stands in the red moonlight with a sheet in her hand. Her face is bone-white.
“I think I know who I am,” she says, in a small voice. “It is not a feeling. It is a fact. It is in the book.”
“What does it say?”
“Everything.” Her teeth chatter. “Wen Rui has a list. Of every child he placed. Nine of them. Nine names, with dates.” She holds out the page. “My name is the sixth.”
She looks at your fist. Her eyes widen.
“You have it,” she whispers. “Give it back. Please. I think I would like to be someone again.”
> deceit | Open your hand. | roots_a3s6
> truth | Ask her to wait. | roots_a3s6
> quiet | Hold still. | roots_a3s6
> mercy | Say it aloud. | roots_a3s6

=== roots_a3s6 | Taking It Back
You say it aloud. You do not read it; you only repeat what she told you. A single word. A name, in four syllables, that you have known for seven weeks.
She takes a breath. Her whole body sways. She puts a hand to her forehead and shuts her eyes, and when she opens them she is Hao Lan again, grey-eyed, sharp, frowning, in her creased Censor’s robe.
“Thank you,” she says. Her voice is steady, but her knees are not. She sits down in the dust. “I am sorry. I do not think I knew how long it would take.”
“It was four hours.”
“It felt like forty years.” She laughs, weakly. “I was nobody, and I was so happy. And then you said it, and I was somebody, and it was a weight like a mountain.” She hugs her knees. “It is a bit like being born.”
“Was it worth it?”
“I do not know.” She looks at the page in her hand. “I have the plan.”
Duan Wuyi has come out of the dark. His hands are shaking. He looks at the page. He reads the first line, and his breath leaves him.
> deceit | Take the page. | roots_a3s7
> truth | Read it aloud. | roots_a3s7
> quiet | Give it to Duan. | roots_a3s7
> mercy | Look at Hao Lan. | roots_a3s7

=== roots_a3s7 | The Ledger
It is a very ordinary-looking ledger. Cloth-bound, grey, with a cracked spine. Wen Rui keeps it as he kept the Censors’ books: in numbered columns, in a hand like type. Dates. Sums. A list of provisions. A list of names. A map of the cliff in neat coloured ink, with the shaft marked in black, and beside it a note.
The shaft is ninety feet deep, it says. At its foot is a door.
Beneath the note, in a smaller hand: The door is not a door. It is a mouth. It will accept what is offered. The question is only what to offer.
Duan reads it with his lips moving. At the end he lowers the page.
“He has a plan,” he says. “It is a terrible plan. But it is a careful one.” He meets your eyes. “He has calculated the number. Three hundred and eleven. It is exactly the weight of the fifteenth name.”
“What does that mean?”
“That he has read the Law Hall’s records,” says Duan. “And that he has been counting the sealed.” He swallows. “He means to replace her.”
> deceit | Ask what he means. | roots_a3s8
> truth | Say he cannot. | roots_a3s8
> quiet | Look at the Elder. | roots_a3s8
> mercy | Think of Mengjiao. | roots_a3s8

=== roots_a3s8 | Replacing Her
It is the cruellest and kindest thing in the book. Three hundred and eleven people, who have no names, would walk down the shaft into the mouth of the Unwritten and be taken in a body. And the weight of them, Wen Rui has reckoned, would be enough to release the one who holds the seal. Mengjiao would be free. The abyss would be fed. The struck would go home.
“He thinks it is a trade,” says Duan, hoarsely. “Three hundred who are already forgotten, for one who is remembered. He thinks it is merciful.”
“And the struck?”
“He has asked them. They have said yes.” Duan folds the page. “Most of them. Eleven asked for a night to think.”
The Elder says nothing. She stands in the red moonlight with her hands folded, very straight. Her face is quite blank. Her lips are moving.
She is saying a name. She is saying it over and over.
It is not one of the fourteen.
“I shall go to him,” she says at last, in her dry voice. “I should like to hear him explain it. And I should like him to look at me while he does.”
> deceit | Go with her. | roots_a3s9
> truth | Say you will go too. | roots_a3s9
> quiet | Stay back. | roots_a3s9
> mercy | Take her arm. | roots_a3s9

=== roots_a3s9 | The Elder Is Seen
He sees her. It is the first time in the camp that anyone has done so. She walks into his tent in the grey dawn and stands before the plank table, and he looks up, and his thin face goes through a series of changes. Shock. Recognition. A flash of old anger. And last, slowly, a bleak and absolute respect.
“Su Wanru,” he says. “They struck you.”
“No.”
“Then how do you stand there?”
“I have been seen,” says the Elder. Her voice is brittle. “By a child with a stick. I think it is a form of grace.”
He looks at her.
“I signed fourteen,” she says. “You were a Censor. You know what that was. I should like to know how you intend to make it right.”
“I intend to take them into the mouth,” says Wen Rui.
“That is not making it right. That is making it larger.”
He is silent. His hands are flat on the table. His eyes, in the lamplight, are very bright.
“Sit,” says the Elder. “Please. I have been told it is a long story.”
> deceit | Sit. | roots_close | +roots_hid
> truth | Stand beside her. | roots_close | +roots_hid
> quiet | Watch. | roots_close | +roots_hid
> mercy | Pour tea. | roots_close | +roots_hid

// ---------------------------------------------------------------- a4: a name written back
=== roots_a4s1 | Echo
She is writing in the dust with a stick. Her hair is a tangle of curls. She wears a coat three sizes too large, with the sleeves rolled to the elbow. She does not look up. She is writing slowly, in a childish round hand, one word, again and again.
“What is it?” you say.
“I do not know.” She wrinkles her nose. “I only write what I hear. It is somebody’s name. It is very sad.”
You crouch. You look. Row on row, the word marches across the dust.
It says Lian.
Behind you, Hao Lan has gone absolutely still. Her face is white. “That is a Chancery name,” she says. “There is no one in the Hollow called Lian.”
“It is not here,” says Echo. She has not stopped writing. “It is under. It has been saying it for days. A girl’s voice. Very small.” She tilts her head. “She says it like she is trying to be polite.”
Duan has gone grey.
“Lian,” he says softly. “She was Wen Rui’s daughter.”
> mercy | Kneel. | roots_a4s2
> truth | Ask Duan. | roots_a4s2
> quiet | Look at the tent. | roots_a4s2
> inquiry | Ask Echo to stop. | roots_a4s2

=== roots_a4s2 | Wen Rui’s Daughter
“She would be thirty-one,” says Duan. “She was a clerk in the Law Hall of the Fourth Peak. Bright. Careful. A little afraid of everyone.” He sits down on the grass. “She was struck for the same cause as her father. Refusing to sign. They said it was a family disease.”
“Is she alive?”
“She went in. Four years ago. She walked into the shaft.” His voice is hushed. “She left a note. It said she would find the door, so that her father would not have to.”
You look at the dust.
“And he knows,” you say.
“He knows she is down there. He does not know if she is dead.” Duan shuts his eyes. “That is the thing. He has been listening to the shaft for four years. He has heard nothing. He cannot decide whether to hope.”
Echo has stopped writing. She looks up at you with her bright, round, unblinking eyes.
“She is alive,” she says. “She is very tired.”
> mercy | Hold her hand. | roots_a4s3
> truth | Take her to Wen Rui. | roots_a4s3
> quiet | Look at the cliff. | roots_a4s3
> inquiry | Ask how she knows. | roots_a4s3

=== roots_a4s3 | How She Knows
“She says my name,” says Echo, matter-of-factly. “Sometimes. It is not what they call me. They call me Echo. She says the old one.”
“What is it?”
“I do not know,” says the child. “I cannot hear it. But I know she is saying it. It is the way a hand feels, in the dark, when it is held.” She shrugs. “I think it is a name I used to have. Before I was struck.”
“You were struck?”
“I think I was born that way.” She stirs the dust with her stick. “My mother was struck when she carried me. I came out unwritten.” She says it as one states the weather. “It is why I can hear the ones under. I am the only one who was never in.”
You look at the Elder. She is standing a little way off, in the red shadow. She has not moved. Her face has the blank, exact stillness it wears when she is about to be moved.
“A child,” says Duan, “who was never written.” He licks his lips. “Echo. Do you know how rare that is?”
“Yes,” says Echo. “It is very lonely.”
> mercy | Say you are here. | roots_a4s4
> truth | Nod. | roots_a4s4
> quiet | Hold still. | roots_a4s4
> inquiry | Ask what she wants. | roots_a4s4

=== roots_a4s4 | What She Wants
“A name,” says Echo.
She says it very simply. She has put down the stick. She is sitting in the dust with her hands in her lap and her feet drawn up, a tiny girl in a huge coat. “Everyone else has one. Even the struck. They have one they cannot use. I have never had one.” She hesitates. “It is all right to ask?”
“It is all right.”
“Yarrow says you cannot write a name that was never written.” Her chin wobbles. “She says I will be Echo until I die. But the Elder is a Registrar. And Hao Lan writes true things.”
You look at them both. The Elder has gone grey. Hao Lan is staring at the dust.
“I cannot,” says Hao Lan, in a thin voice. “It is not mine to give. A name is a thing given by someone who loves you. By a mother. By a father.”
“Then be that,” says Echo.
There is a long silence. The wind combs the red cliff. Somewhere far off, in the camp, the Telling has begun.
“Please,” says the child.
> mercy | Kneel beside her. | roots_a4s5
> truth | Look at Hao Lan. | roots_a4s5
> quiet | Hold the Elder’s sleeve. | roots_a4s5
> inquiry | Ask Echo what she would like. | roots_a4s5

=== roots_a4s5 | What She Would Like
“Something short,” says Echo. She is serious. “So I can write it in the dust. I do not have a lot of room.” She considers. “And not too fancy. I am not a fancy person.”
Hao Lan makes a choked noise. She has put her hand over her mouth.
“Something that means a good thing,” says Echo. “Not a flower. I am not a flower.” She wrinkles her nose. “And not a bird. A bird is a thing that goes away.”
“What do you want it to mean?”
“That I was heard,” says Echo. She says it in her high clear voice, straightforwardly, as though ordering her dinner. “That is all. That somebody said it, and it was not lost.”
The Elder takes a step. It is a small unsteady step, on the packed earth.
“Wen,” she says, hoarsely.
They all turn.
“It is the old word for a thing that is listened to,” says the Elder. “It is also a surname. It is the shortest I know.” Her mouth trembles. “It would be Wen Echo.”
Hao Lan is weeping openly.
> mercy | Smile. | roots_a4s6
> truth | Say it is right. | roots_a4s6
> quiet | Look at Hao Lan. | roots_a4s6
> inquiry | Ask who will write it. | roots_a4s6

=== roots_a4s6 | Writing It
Hao Lan writes it. She does it on a clean sheet in her best script, at the plank table outside Wen Rui’s tent, with the Elder’s seal at her elbow. Her hand shakes. She makes two false starts. At last she sets down the brush and breathes.
“I need someone to witness,” she says.
“I will,” says Duan Wuyi.
“I need a parent.”
Nobody speaks.
“I need,” says Hao Lan, with an effort, “someone to say that they will be responsible.” She cannot look at anyone. “It is the law.”
“I will,” says the Elder.
Everyone stares at her.
“I am not suitable,” says Su Wanru. She says it stiffly. “I am an old woman. I am a poor example. I have done nothing but sign.” She puts out one hand and rests it on the child’s head. “But I would like to try.”
Echo looks up. She says nothing at all. She only reaches up and takes hold of the grey sleeve and does not let go.
Hao Lan dips the brush and writes.
> mercy | Hold the paper. | roots_a4s7
> truth | Bow. | roots_a4s7
> quiet | Look away. | roots_a4s7
> inquiry | Ask what happens next. | roots_a4s7

=== roots_a4s7 | The Ink Dries
It dries slowly. The three of them sit around it in the red dusk, and watch the ink go from black to brown to the colour of old blood. Nothing happens. Nothing visible. The child fidgets. Hao Lan has stopped breathing.
Then the paper lifts.
It lifts of its own accord, a quarter-inch off the table, and hangs in the still air, quivering. A thin silver line runs along the edge. It brightens. It runs up the page and across it and the whole sheet glows as though lit from behind, and a sound rises: a faint sweet humming, like a wet finger on the rim of a glass.
Echo is staring. “Oh,” she says.
The camp has stopped. Three hundred and eleven people are standing in the evening, with their faces turned toward the table. Yarrow has her hand on her heart. Marrow, the mason, is on his knees.
And from the foot of the cliff, a long way down, there rises a thin faint cry. It is the voice of a woman. It is saying, over and over, very clearly:
“Echo. Echo. Echo.”
> mercy | Listen. | roots_a4s8
> truth | Take Echo’s hand. | roots_a4s8
> quiet | Hold the Elder. | roots_a4s8
> inquiry | Look at the shaft. | roots_a4s8

=== roots_a4s8 | A Voice from the Shaft
She comes up at dawn. She climbs ninety feet of dark rock, on a rope that Ren Qiao lowers with trembling hands, and her fingers are bloody when they reach the lip. She hauls herself over. She lies in the red dust, gasping, with her hair in her face.
She is thirty-one, thin as a rail, in a ragged Censor’s robe that has been mended with strips of her own sleeve. She has a pointed, clever, haggard face, and enormous eyes. She lifts them to the ring of figures above her. They find the child.
“I heard you,” she says. Her voice is a cracked whisper. “I heard you say it.”
“Lian,” says a voice behind you.
It is Wen Rui. He has come out of his tent. He is standing in the dawn in his worn robe, with his hands at his sides. He does not seem to be able to move. His long grey face is a mask.
The girl on the ground turns her head. For a long moment she does not speak.
“Papa,” she says. “I found a door.”
> mercy | Step back. | roots_a4s9
> truth | Help her up. | roots_a4s9
> quiet | Look away. | roots_a4s9
> inquiry | Watch Wen Rui. | roots_a4s9

=== roots_a4s9 | What She Found
“It is not a mouth,” says Lian. She sits on a bucket with a blanket round her shoulders and a bowl of soup in her hands, and she speaks in the faded, careful voice of one who has been alone with her thoughts for four years. “You had it wrong, Papa. It is a place where someone is listening.”
Wen Rui says nothing. He has not stopped looking at her. His whole body is leaning toward her, as though the tent-ropes pulled at him.
“There is a woman,” she says. “At the bottom. She has been there a long time. She sits in a very dim room, and she hums, and she listens.” She sips the soup. “She told me not to be afraid. She said it was not hungry. It was only waiting for someone to answer.”
“Mengjiao,” whispers the Elder.
“She did not give a name. She said I should tell the Ninth.” Lian’s huge eyes find you. “She said: tell her the ear is not the door. The door is on the mountain.”
Wen Rui puts his hands over his face.
> mercy | Smile. | roots_close | +roots_restored
> truth | Bow. | roots_close | +roots_restored
> quiet | Look at the dawn. | roots_close | +roots_restored
> inquiry | Ask Lian what else. | roots_close | +roots_restored

// ---------------------------------------------------------------- hidden: Ash’s ribbon
=== roots_h1 | A Black Ribbon
You hold it up. It is a plain length of black silk, frayed at the ends, knotted in the way Madam Ash knots a parcel. You say her name. You say: Hui Niang sent me. You say it aloud, in the middle of the camp, in the voice of someone who expects to be heard.
The silence spreads outwards from you like a ripple. Water-skins are set down. A drover stops with his hand on a mule. Three hundred faces turn.
“Hui Niang,” says a voice behind you.
It is the woman with the mended coat. Her eyes are suddenly wet. “Nobody has said that name here in nine years,” she whispers. “He has forbidden it.”
“Who?”
“Wen Rui.” She swallows. “He says it was she who left. He says she sold us for a house in the city.”
“That is not true.”
“No.” The woman’s mouth wobbles. “But he says it so firmly that we have almost come to believe him.” She lifts her head. “If you have a ribbon, I think you had better see him now.”
> inquiry | Follow her. | roots_h2
> truth | Say you are ready. | roots_h2
> mercy | Look at the Elder. | roots_h2
> quiet | Hold the ribbon tight. | roots_h2

=== roots_h2 | The Man Who Forbade a Name
He does not rise. He sits at his table with his back to the cliff, and he looks at the ribbon in your hand for a very long time. His face does not move. It is the face of a man who has sat in the same chair for so long that the chair has grown into him.
“Where did you get that?” he says.
“From her.”
“She is alive.”
“She is on the Salt Coast. She keeps a mourning-shop. She sells black cloth.” Your voice is quiet. “She gave me this when I left. She said: if you meet Wen Rui, show him this and tell him I am sorry.”
The pen drops from his fingers. It rolls along the table and off the edge.
“Sorry,” he says. His voice cracks like ice. “For what? For taking the better offer? For the house? For the garden?” He is trembling. “She gave up nothing. She had it all arranged. She was always a step ahead.”
“She raised nine children,” you say, “in a shop. For fifteen years. Without a copper.”
Wen Rui stops.
“Nine?” he says.
> inquiry | Say yes. | roots_h3
> truth | Say you are one of them. | roots_h3
> mercy | Look at Hao Lan. | roots_h3
> quiet | Wait. | roots_h3

=== roots_h3 | Nine Children
It takes him a long time. He asks you to say it again. He asks the number twice. He asks where, and how, and in what year, and who among them could write. And each time you answer he nods, slowly, as though adding a column, and his thin lips move.
“She told me she was going to bury the lotus,” he says. “She said, ‘I will bury it where no one can dig it up.’” He gives a thin brittle laugh. “I thought she meant a hole in the ground.”
“She meant a shop.”
“She meant nine children.” He shuts his eyes. “She planted them. She planted the whole garden, in a dozen different cities, and she watered it for fifteen years, and not once did she tell me.” His voice breaks. “I should have known. She was always the one who thought in seasons.”
“She is still waiting.”
“For what?”
“For you to stop,” you say.
He covers his face. His shoulders shake. For a minute, two, he does not move. Then, in a muffled voice, he says: “Put the ribbon on the table.”
You do.
> inquiry | Wait. | roots_close | +roots_ribbon
> truth | Sit across from him. | roots_close | +roots_ribbon
> mercy | Weep. | roots_close | +roots_ribbon
> quiet | Look at the cliff. | roots_close | +roots_ribbon

// ---------------------------------------------------------------- close
=== roots_close | The Red Dawn
You leave the Hollow at dawn. The red cliff burns above you, scarlet, then orange, then gold, and the torn edge at the top is a line of white fire. Below it, in the shadow, the camp is stirring. Smoke from the morning fires. Water-skins. Children.
+[how] roots_heard | You heard three hundred and eleven names, and a child wrote the Elder’s fifteenth in the dust.
+[how] roots_broke | You walked through a line of forty men with clubs, and they let you.
+[how] roots_hid | Hao Lan gave up her name for a night and found a list of nine.
+[how] roots_restored | A child who had never been written got a name, and a girl came up out of the ground.
+[how] roots_ribbon | Madam Ash’s black ribbon lay on a Censor’s table, and he asked how many.
Wen Rui walks you to the edge of the camp. He has put on a clean robe. He has combed his hair. He is carrying the old key, which you gave back, in his fist, and he does not look as though he would ever use it.
“I will not take them in,” he says. “Not yet. I owe a debt to a woman who has waited fifteen years, and I think I should like to see her.” He glances at Hao Lan, who is standing apart, with her arms folded. “And I owe an apology to a girl.”
Hao Lan says nothing.
“I will find my own road,” says Wen Rui. “Do not wait for me.”
> truth | Bow. | roots_close2 | +b4q_roots
> mercy | Say you will. | roots_close2 | +b4q_roots
> quiet | Take the key. | roots_close2 | +b4q_roots
> inquiry | Ask which road. | roots_close2 | +b4q_roots

=== roots_close2 | Nobody Sees, Everybody Hears
She walks up to him at the last. Hao Lan has not spoken to him since the morning. She comes straight across the dust, small and rigid and straight-backed, with her ink-stained fingers clenched, and stops in front of him.
“You said you would tell me what a ledger is for,” she says.
“I did.”
“You never did.”
“No.” His long face is sad. “I did not know.”
“I know now.” She lifts her chin. “It is to say that somebody was here. That is all. It is a very small thing. And that is why it is the most important.”
He bends. He is a head taller. He puts one thin hand on her shoulder, awkwardly, as though not sure it will be permitted. She does not shake it off.
“I was nine,” she says, in a very small voice. “I had a plait. I asked a stupid question.”
“It was the best question anyone asked me,” says Wen Rui.
She puts her arms round him. It is brief and fierce. Then she lets go, and wipes her nose on her sleeve, and marches back to the cart without looking round.
> truth | Smile. | hub_b4_c | bond:hao+3
> mercy | Follow her. | hub_b4_c | bond:hao+3
> quiet | Give her a handkerchief. | hub_b4_c | bond:hao+3
> inquiry | Look back at the cliff. | hub_b4_c | bond:hao+3

`,
  scenarios: String.raw`
$ SU_ROOTS_HOLLOW | trust+4 respect+3 fear+4 | elder | The Elder walks through a camp of the struck, and no one in it can see her.
hostile: A man looked straight through me. Not rudely. Rather as one looks through a window. I felt it as a chill in the long bones of the arm. I signed his name myself, I think. Not him. One very like him.
wary: There is a word for the thing I have been all my life. It is ‘Registrar.’ I thought of it as one who records. It occurs to me that it also describes one who decides what is not to be recorded.
neutral: They do not see me. I am told it is the nature of the place. I find I do not mind as much as I should have expected. It is an unusual rest, to be a person nobody is waiting for.
warm: A child asked me my name. I said: Wanru. She wrote it in the dust. She said: you are the first person who has told me one. I have been thinking about that child since.
devoted: If I could, I would stay a night under that cliff with a stick in my hand, and write down every name I was given. I would not leave until I had them all. I think that would be a better use of me than signing.
`,
  remarks: String.raw`
% roots_wenrui_later | since:b4q_roots>=4 | hao | Wen Rui sent a note. It was four lines. The first three were instructions on how to hold a brush. The fourth said: I should have asked you. I have been reading it all night, and I cannot decide what he means by it.
% roots_echo_later | since:roots_restored>=5 | ren | The child, Echo, taught me to write my own name. I had never learned. I do it badly. She says it is the most interesting thing she has ever seen.
`,
}
