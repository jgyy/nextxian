import type { Arc } from "../types";

/**
 * Book Four, arc one: the Grass Line. The Listeners cannot be lied to, and they do not let strangers onto the Steppe. Four
 * approaches: answer every question the riders ask (a1, truth), ride past the cairn and be chased (a2, force), present Madam Ash's
 * eleven-year-old letter with a flourish nobody earned (a3, deceit), and sit at the cairn until they come to you (a4, quiet).
 * A hidden route sings the door of nine bars. Duan Wuyi arrives on a lathered horse.
 * Cast: Temur (rider-captain), Sarnai (his sister), Duan Wuyi, Madam Ash's letter, the wind.
 */
export const border: Arc = {
  id: "border",
  name: "The Grass Line",
  scenes: String.raw`
=== border_entry | The Cairn
The road runs out on the ninth morning. It does not end so much as grow thin, a ribbon of packed earth that unravels into ruts and then into nothing, and where it stops there is a cairn: a heap of grey stones as tall as a man, each with a scrap of coloured cloth tied to it, snapping in the wind. Beyond the cairn the land goes on, and on, a sea of silver-grey grass under a vast pale sky, without a tree or a roof or a wall.
The wind is strong and clean and smells of dust and distance. It blows the grass flat, and it springs up, and flattens again. Where it passes, the grass makes a sound: a long dry whisper, rising and falling, like a crowd speaking very low.
The Elder gets down from the cart, and stands with her cloak whipping round her. “I had not thought it would be so large,” she says.
Madam Ash’s letter is in your sleeve. It is eleven years old. It is addressed to a woman whose name you have never been told.
Far off across the grass, a thin line of dust is rising.
> truth | Wait at the cairn with the letter in your hand, and answer whoever comes. | border_a1s1
> force | Take the cart through at once, before anyone can say you may not. | border_a2s1 | needs:4
> deceit | Look through the letter for something that would make a better introduction than the truth. | border_a3s1
> quiet | Sit down on the grass beside the cairn, and wait for as long as it takes. | border_a4s1
> inquiry | Hum the nine bars of the door that Pao wrote, and see who answers. | border_h1 |  | pao_door_written | You have not learned the door.

// ---------------------------------------------------------------- a1: answering
=== border_a1s1 | Riders
They come out of the haze in a long ragged line, thirty riders on shaggy ponies, at an easy lope that eats the ground. They wear coats of grey felt, belted with red cord, and conical hats of white wool. Each carries a short bow slung across the back. They do not shout. They do not draw. They come in a half-circle round the cairn, and halt, and the dust of their coming drifts over you.
The ponies blow. The wind flutters the cloths on the stones.
One rider comes forward alone. He is thirty or so, lean and brown, with a broken nose and the pale, level eyes of a man who has looked at a great deal of horizon. He sits his pony as if he had grown there. He looks at the cart, the party, the Elder in her grey cloak. His gaze rests on you.
“I am Temur,” he says. “Captain of the Grass Line. You have come to the edge of the world. State your names, and why.”
His voice is low and unhurried. He does not say it as a threat.
> truth | Give your name, and say why. | border_a1s2 | +border_a1_asked
> mercy | Let the Elder speak first. | border_a1s2
> quiet | Hold out the letter. | border_a1s2
> inquiry | Ask how he will know if you lie. | border_a1s2

=== border_a1s2 | How He Knows
“The wind,” says Temur. He says it simply. “It carries a lie further than a truth. A truth is a heavy thing. It sinks. A lie is light. It blows about, and the grass takes it up, and says it over, and by sunset every clan on the Steppe has heard it.” He lets the reins hang. “It is very inconvenient. We do not mind. We have learned to prefer plain speech.”
The Elder says, drily, “I am not sure I have ever been plain in my life.”
“You will manage,” says Temur. “It is easier than people think.”
He raises two fingers. Behind him, the riders ease their ponies a pace closer. The circle tightens, gently. A girl of twelve on a piebald pony, at the end of the line, is staring at you with unconcealed interest. She has a gap in her teeth. She is chewing something.
“We will begin,” says Temur. “I shall ask a question. You will answer it. The wind will tell me whether it is true. You may refuse. If you do, you will turn back.”
> truth | Say you are ready. | border_a1s3 | npc:SU_BORDER_WIND
> mercy | Ask what the first question is. | border_a1s3
> quiet | Look at the girl. | border_a1s3
> inquiry | Ask what happens if you answer wrongly. | border_a1s3

=== border_a1s3 | The First Question
“What do you carry?” says Temur.
It is such an ordinary question that you hesitate. You look at the cart, the water-barrels, the bundles of blankets, Hao Lan’s satchel, Shu Ning’s anvil under its sack. You begin to list them. Temur lifts a hand.
“Not the goods,” he says. “I can see the goods. I mean what you carry. The thing in you.”
The wind blows. The grass hisses. You are aware, suddenly, of the cold seed in your breastbone, the scar on your palm, the nine cards in your sleeve. You are aware of the pigeon’s message, sewn into the Elder’s hem. You are aware of the pull of the mountain, nine hundred miles away, like a hook in the chest.
“A seed,” you say. “And a debt.”
The wind, which has been blowing steadily from the west, drops. A long hush runs through the grass.
Temur nods slowly.
“That is true,” he says.
> truth | Go on. | border_a1s4
> mercy | Ask what he heard. | border_a1s4
> quiet | Wait. | border_a1s4
> inquiry | Ask who the debt is owed to. | border_a1s4

=== border_a1s4 | The Second Question
“Who do you owe?” says Temur.
He asks it without emphasis, gazing out over the grass. The riders are very still. The girl on the piebald has stopped chewing.
You think about it. The honest answer is long. You owe a child under a wall. You owe a river its name. You owe an old man in a vault a blanket. You owe a hundred and four people a night’s sleep, and forty children a house, and a seal-wright an unspoken thank-you.
“Everyone I have met,” you say. “And one person I have not.”
The grass whispers. The cloth on the cairn snaps.
“Who is the one?” says Temur.
You find that you know. It surprises you. It comes out of your mouth before you have thought it.
“The one who asks,” you say. “The one the card says will ask.”
Temur’s level eyes widen very slightly.
“The wind liked that,” he says. “It is repeating it.”
> truth | Listen to the grass. | border_a1s5
> mercy | Look at the Elder. | border_a1s5
> quiet | Say nothing. | border_a1s5
> inquiry | Ask what it is saying. | border_a1s5

=== border_a1s5 | What the Wind Says
You hear it. It is not a voice. It is a rustle in the grass, a hundred whispers overlapping, running away from you across the plain in widening rings. The ones nearest you say your own words, slightly distorted. The ones farther say them back with other voices, a child’s, a woman’s, an old man’s. By the third ring they have changed. By the fifth, they are saying something else.
The one who asks. The one who asks. She is the one who asks.
“It carries,” says Temur, softly. “It will be at the Winter Camp by tonight. The Matriarch will have it by morning.” He looks at you with something close to awe. “I did not expect to hear that sentence from a stranger at my own cairn.”
“I did not expect to say it.”
“No. That is what makes it true.”
He swings down from his pony. The riders do likewise, with one motion, like a flock of birds settling. They stand in a half-circle on the grass, hats in their hands, and the girl on the piebald is the last to dismount.
“Come,” says Temur. “You may enter.”
> truth | Thank him. | border_a1s6
> mercy | Take the Elder’s arm. | border_a1s6
> quiet | Bow. | border_a1s6
> inquiry | Ask about the others. | border_a1s6

=== border_a1s6 | The Others
“The old lady,” says Temur. He turns to the Elder, with a shade more courtesy. “What do you carry?”
The Elder hesitates. She smooths her cloak. She says, in her dry precise voice, “A pen. And a list.”
The wind drops.
“What is on the list?”
“Fifteen names.” Her voice is quite even. “And a sixteenth, which I never wrote.”
Temur waits.
“I am the woman who signed the orders,” says the Elder. “Fifteen years ago. I put my name on fourteen, and I was too frightened to put it on the fifteenth. I have been a coward all my life. I am on my way to find out whether it is too late to stop.”
The grass whispers. The wind turns, and for a moment all the cloths on the cairn stand out like flags.
“That is true, too,” says Temur, gently. He bows to her from the waist. “You have courage in you, Grandmother. It is only that you had not yet used it.”
> truth | Smile. | border_a1s7
> mercy | Squeeze her hand. | border_a1s7
> quiet | Look away. | border_a1s7
> inquiry | Ask Temur about the girl. | border_a1s7

=== border_a1s7 | Sarnai
“My sister,” says Temur, with a sigh. “Sarnai.” The girl on the piebald pony has slid off and is standing with her thumbs in her belt, staring at the party with burning interest. She is small and sunburnt and bandy-legged, with black plaits and a gap in her teeth and the unmistakable air of a child who has been told to stay at home and has not.
“She’s not supposed to be here,” says Temur.
“I’m not,” agrees Sarnai. “I’m at the Winter Camp. Mother thinks.” She bobs a curtsey, remembers it is not Steppe manners, and thumps her chest instead. “I heard about the nine. I came to see.”
“What nine?”
“The nine cards.” She says it as if everybody knew. “The Matriarch’s been saying it for a year. She says nine are coming. She says one of them will ask.” She peers up at you, narrow-eyed. “You don’t look very askish.”
“Sarnai,” says Temur, in despair.
“I’m being honest,” says Sarnai. “The wind can hear me.”
> truth | Say you do not feel askish either. | border_a1s8
> mercy | Smile. | border_a1s8
> quiet | Bow. | border_a1s8
> inquiry | Ask what the Matriarch says. | border_a1s8

=== border_a1s8 | What the Matriarch Says
“That the Order is nine,” says Sarnai. She counts on her fingers. “Nine verbs. Nine voices. Nine clans, once, before the Concord came. She says the first Voice was the saint, and the second was her pupil, and so on, down, all the way to the seventh, who’s a woman in a mountain.” She wiggles her ring finger. “And the eighth is a key, and the ninth is a girl who asks.”
“And the Tenth?” you say, remembering Mi.
Sarnai stares. “There isn’t a Tenth.”
“There is,” says Temur slowly. He is looking at you. “There is always a Tenth. She is the one who stays. Grandmother says so. It is not in the Order’s count because it is not the Order’s to count.” He frowns. “How did you know?”
“I met her,” you say. “She is ten.”
The grass breathes.
“Then the wind will have to carry that one too,” says Temur. “Faster than the rest.”
> truth | Tell him about Mi. | border_a1s9
> mercy | Say she is safe. | border_a1s9
> quiet | Hold the card. | border_a1s9
> inquiry | Ask who the Seventh is. | border_a1s9

=== border_a1s9 | The Seventh
“You know her,” says Temur. It is not quite a question. “The woman in the mountain. Su Mengjiao.” He turns his pale eyes on the Elder. “She is your sister.”
The Elder says, hoarsely, “Yes.”
“She is a Voice.” He says it quite plainly, like a man announcing a fact of geography. “She has been one for fifteen years. The Order counts her as seventh. She does not know. She has never been told. But the wind carries what she says in the dark, down in the mist, and we hear it. All of it. Every name.” His voice softens. “We have been listening to her for fifteen years. She has a lovely voice.”
The Elder makes a small sound.
“She has been naming the sealed,” says Temur. “One by one. We hear her do it on still nights, if we put our ears to the stones. She is on the nine hundred and fortieth now.”
“Nine hundred and—” says the Elder. She sways. You catch her arm.
“There are a great many sealed,” says Temur. “She has a long way to go.”
> truth | Hold her. | border_a1s10
> mercy | Say you will go. | border_a1s10
> quiet | Wait. | border_a1s10
> inquiry | Ask how many there are. | border_a1s10

=== border_a1s10 | Welcome
“Nine thousand,” says Temur. “Perhaps ten. We do not know. It is a number the wind cannot hold.” He puts on his hat. “But it is a number that can be finished. That is what the Matriarch says.”
He remounts. The riders follow him, a ripple of grey coats, white hats, brown hands. Sarnai scrambles onto her piebald and rides in a tight circle round the cart, whooping. The Elder is wiping her face with her sleeve. Hao Lan is writing frantically. Gu looks like a man who has had a very large breakfast of astonishment.
“Come,” says Temur. “It is eighteen days to the mountain. It will be shorter if the grass favours you.” He smiles for the first time, a rare slow smile that changes his whole face. “It sometimes does. It has a sense of humour.”
He turns his pony toward the horizon.
“The Listeners welcome you,” he says. “Welcome to the Ash Steppe.”
The wind rises behind you, strong and clean, and for a moment it seems to push.
> truth | Ride in. | border_close | +border_answered
> mercy | Walk beside the Elder. | border_close | +border_answered
> quiet | Look back at the cairn. | border_close | +border_answered
> inquiry | Ask Sarnai what the grass thinks of you. | border_close | +border_answered

// ---------------------------------------------------------------- a2: the chase
=== border_a2s1 | Past the Cairn
You do not wait. You do not know why. Something in you is tired of waiting. You take the reins of the cart and shake them, and the two shaggy ponies lurch forward with a rattle of harness, past the cairn, over the last of the ruts, into the grass.
It closes behind you. The wind roars. The tall grass whips at the wheels. Within a dozen yards the road has vanished and you are in a sea of silver, with nothing in any direction but the horizon and the sky.
“That was foolish,” says the Elder, clutching the seat.
“Yes.”
“I think they will mind.”
“Yes.”
“I find I am enjoying it enormously,” says the Elder.
Behind you, from the haze beyond the cairn, comes a high, thin, carrying sound, like a hawk’s cry, taken up and passed from throat to throat. It runs along the line of the horizon. It is the sound of thirty riders deciding to give chase.
> force | Whip up the ponies. | border_a2s2 | needs:4
> truth | Look back. | border_a2s2
> quiet | Hold on. | border_a2s2
> inquiry | Ask Hao Lan which way is north. | border_a2s2

=== border_a2s2 | Hooves
They come up fast. Ponies bred for the Steppe cover ground at a speed you would not credit, low to the grass, necks stretched, manes streaming. Within a minute you can hear them. Within two, they are on the flanks. A rider draws level with the cart, close enough to touch. He is a young man in grey felt with a laughing face. He waves a cheerful hand. He does not slow.
“Hello!” he shouts. “Nice cart!”
Gu, in the back, makes a noise like a kettle.
Another rider is on your other side. A third flashes past ahead and turns across the front, so close that the near pony swerves. The cart lurches. Barrels roll. Shu Ning swears. A voice cries, “Whoa, whoa, whoa!” and it is yours.
The ponies stop. The cart slews broadside and rocks to a halt in a cloud of dust. The riders ring it in. They sit their ponies in a silent circle, grinning.
“Well,” says the young man, to nobody. “That was exciting.”
> force | Stand up on the seat. | border_a2s3
> truth | Apologise. | border_a2s3
> quiet | Sit still. | border_a2s3
> inquiry | Ask what happens now. | border_a2s3

=== border_a2s3 | A Fine
“A fine,” says Temur. He has ridden up at a leisurely canter. He sits his pony and regards the cart, the ponies, the dishevelled party. “It is the custom. If you cross the Grass Line without leave, you are fined. Not heavily. A day’s water.”
“That’s all?”
“It is a great deal, on the Steppe.” He is grave. “But there is another thing. When you cross without leave, it means you have not been heard. The wind has not carried your name. No clan knows you. If you meet a stranger, they will not know whether to feed you or shoot you.” He looks at the sky. “It is a considerable disadvantage.”
“What do I do?”
“You give your name. Here. Now.” He lifts his chin. “And you answer my questions. After that, the wind will carry it, and you will be heard.”
“And if I refuse?”
“Then you will go on in silence,” says Temur. “It is not forbidden. It is merely unwise.”
> force | Refuse. | border_a2s4
> truth | Give it. | border_a2s4
> quiet | Think. | border_a2s4
> mercy | Ask the Elder. | border_a2s4

=== border_a2s4 | Silence
You refuse. You hear yourself do it. You say that you will go on without a name, if it comes to that. You say you have a long way to go and a short time to do it in. You do not say it unkindly. But there is an edge to your voice that surprises you.
Temur considers this for a long moment. His pale eyes do not leave yours.
“Very well,” he says. “Go.”
He lifts his hand. The riders part. A lane opens in the circle, wide enough for the cart. Beyond it lies the grass, rolling away to the horizon in long silver swells.
Hao Lan whispers, “We could just go.”
“I know.”
“It would be quicker.”
“I know.”
“It would probably be fatal,” says Hao Lan, with a scholar’s calm. “The Steppe has no roads. We have a map that is two hundred years old. And we are being let go by people who have just said that no clan will know whether to feed us or shoot us.”
> force | Go anyway. | border_a2s5
> truth | Turn back. | border_a2s5
> quiet | Wait. | border_a2s5
> mercy | Ask Temur why he lets you. | border_a2s5

=== border_a2s5 | Why He Lets You
“Because it is your right,” says Temur. He sits easy, one hand on his thigh. “We are not the Concord. We do not decide who may pass. We tell you what will happen. You decide.”
The wind blows. The riders’ cloaks flap.
“I should like to say that I am sorry to see you go,” he says. “But the wind is listening, and I should be lying.” A small smile. “I am delighted. It is a long time since someone said no to me and meant it.”
You look at him. You look at the grass.
“I do not think I want to go in silence,” you say slowly.
“No?”
“I think I was angry. At the waiting.” You rub your face. “I have been waiting since the river. I am tired of being told to be patient.”
“That is also true,” says Temur. He nods. “The wind liked it. It is not a thing people say often.”
He swings down.
“Shall we begin again?”
> force | Begin again. | border_a2s6 | needs:4
> truth | Say you are sorry. | border_a2s6
> quiet | Dismount. | border_a2s6
> mercy | Smile. | border_a2s6

=== border_a2s6 | A Day’s Water
They take a day’s water. It is a fair fine. The riders lift down one of the barrels from the cart, and empty it into a stone trough they have unfolded from a pack, and the ponies drink. Temur sits cross-legged on the grass with a flask. The Elder sits beside him. The two of them are talking about weather.
“Your pony is lame,” says the girl on the piebald.
She has ridden up and is sitting on her pony’s neck with her heels in its ribs, regarding the near horse of the cart. “Off fore. He’s been favouring it since the ford.”
“He has?” says Gu.
“You didn’t notice?” She is scornful. “He’s been hopping.” She slides down and goes to the pony. She lifts the foreleg between her small brown hands, and examines the hoof, and says with immense satisfaction: “Stone.”
She takes a hooked pick from her belt. She works, with her tongue between her teeth. A moment later there is a small pale pebble in her palm.
“There,” she says. “He’ll be sound by tomorrow.”
> force | Thank her. | border_a2s7
> truth | Ask her name. | border_a2s7
> quiet | Watch. | border_a2s7
> mercy | Give her a sweet. | border_a2s7

=== border_a2s7 | A Gift of a Stone
“Sarnai,” she says, pocketing the sweet. “I’m twelve. I’m the best rider in the Grass Line. Temur says so. Temur’s my brother, so he’s lying, but the wind says so too.” She shows you the pebble. It is grey and smooth, no bigger than a thumbnail. “You can have it.”
“Why?”
“It came out of your pony,” says Sarnai. “It’s yours. It’s a hoof-stone. They bring luck.” She grins. “They also bring mud. I wouldn’t put it in your pocket.”
You take it. It is warm.
“I like you,” says Sarnai, with the simplicity of the very young. “You came through the line like a goat. I never saw anyone do that. Temur’s been sitting there for an hour pretending he’s not laughing.”
You glance round. Temur has his hat pulled low over his face. His shoulders are shaking.
“I’m not,” he says, to the sky. “The wind can hear me.”
Sarnai bursts into peals of laughter.
> force | Laugh. | border_a2s8
> truth | Put the stone in your sleeve. | border_a2s8
> quiet | Smile. | border_a2s8
> mercy | Hug her. | border_a2s8

=== border_a2s8 | The Gift
By evening the cart is repacked and the ponies fed and the party sits round a dung-fire, with the riders, eating mutton from a pot. The grass hisses. The sky goes from gold to lilac to dark. A single star comes out over the horizon, and then another. Temur recounts the Steppe’s manners, patiently, to Gu, who has asked.
You are given a bowl of hot salty milk-tea and a lump of hard cheese. You are told it is rude to refuse. You are told it is rude to take more than three. You are told that the Listeners do not say thank you, since a thing said is cheaper than a thing done, but that you should hold the bowl in both hands and look at the giver.
You do. Sarnai, on the other side of the fire, is looking at you over the rim of her own bowl. She has her chin on her knee.
She winks.
Somewhere on the dark grass, a long way off, a wolf howls. The wind, which has been rising all evening, takes up the sound and carries it on.
> force | Eat. | border_a2s9 | needs:4
> truth | Say good night. | border_a2s9
> quiet | Look at the stars. | border_a2s9
> mercy | Pass the bowl. | border_a2s9

=== border_a2s9 | A Night on the Grass
You sleep on the ground, under a felt blanket, with the Elder on one side and Gu on the other. The grass is warm. The sky is enormous. You have never seen so many stars. They hang in the black like seeds in a split fruit, and the wind sweeps across them with a long soft sound, and it is like lying at the bottom of the sea.
The Elder is awake. She lies on her back with her hands folded on her breast, looking up. She says quietly, “Do you know, I have never slept in the open air.”
“Never?”
“Never. Not once. I was always in a cell.” She turns her head. “It is a good deal colder than I expected. And much louder.”
“Louder?”
“The grass. It never stops.” She smiles in the dark. “Listen. It is saying something.”
You listen. It is saying a great many things. Far out on the plain, a long way off, you can hear the faint thin chime of a bell.
> force | Sleep. | border_a2s10
> truth | Say what you hear. | border_a2s10
> quiet | Listen. | border_a2s10
> mercy | Hold her hand. | border_a2s10

=== border_a2s10 | The Answer in the Morning
In the morning, the girl on the piebald pony is gone. In her place on the grass beside your blanket is a small flat cake of dried curd, wrapped in a leaf, with a scrap of cloth tied round it. The cloth is red. It is knotted in a pattern that Temur, looking at it over his tea, identifies as Welcome.
“She was up before dawn,” he says. “She rode to the Winter Camp. She will be telling the Matriarch what she saw.”
“What did she see?”
“A goat,” says Temur, “that came through the line like a pilgrim.” His eyes crinkle. “I cannot tell you how much I enjoyed that.”
He rises. He claps his hat on his head.
“You may go on,” he says. “Your name is known. The wind has it.” He grins. “We are rather looking forward to meeting the rest of you.”
You tie the red cloth round your wrist. It is soft, and it smells of milk and smoke.
> force | Ride on. | border_close | +border_chased
> truth | Thank him. | border_close | +border_chased
> quiet | Look at the sky. | border_close | +border_chased
> mercy | Pocket the cake. | border_close | +border_chased

// ---------------------------------------------------------------- a3: the letter
=== border_a3s1 | The Letter
The letter is in a leather tube, sealed with black wax. You break the seal. It is a single sheet of grey paper, folded in three, written in a small clear hand that has the faint tremor of a very careful writer. It is eleven years old, and has been carried so long that the creases are white.
It says: To the woman who will decide. I am writing this knowing you may never read it. I am Hui Niang, once a Censor, now a seller of paper. I ask nothing for myself. I ask hearing for the bearer of the ninth card, if she should come. She will be a stranger to you. She will be afraid. Let her ask.
It stops there. There is a signature, and a drop of what might once have been wine.
“That is rather good,” says Hao Lan. “It is simple. It makes no demands.”
“It is a very honest letter,” says the Elder.
“Yes.” Hao Lan looks up. “That is the trouble with it.”
> deceit | Read it again. | border_a3s2
> truth | Say it is enough. | border_a3s2
> quiet | Fold it. | border_a3s2
> mercy | Ask what the trouble is. | border_a3s2

=== border_a3s2 | The Trouble
“It will not impress them,” says Hao Lan. “A truthful letter from a stranger is the least impressive thing in the world. They are a people who can hear a lie. They have been hearing honest people say honest things since they were born.” She taps the paper. “We need something with a flourish.”
“A flourish?” says Gu.
“A ceremony. A proof.” Her eyes are bright. “I have been reading about the Listeners in the Chancery library. They are said to value three things: courage, humility, and a good entrance.”
“Where did you read that?”
“In a report.” She waves a hand. “Written by a Censor who got lost on the Steppe, in the year four hundred and twelve, and was found three weeks later in a yurt eating dumplings, having converted.”
Shu Ning, from the cart, says in her flat voice, “I do not like this.”
“I know,” says Hao Lan. “I do not either. But I have a plan.”
> deceit | Hear it. | border_a3s3
> truth | Refuse. | border_a3s3
> quiet | Listen. | border_a3s3
> mercy | Ask Shu Ning. | border_a3s3

=== border_a3s3 | A Good Entrance
The plan is to appear in the sunrise. It involves a hill. It involves the Elder on the cart, in her best grey robe, with the silver comb in her hair, holding the letter aloft. It involves you standing before her with your hand raised in a gesture of peace. It involves Gu blowing a horn, borrowed from a muleteer, and Ren Qiao beating a drum.
“It is a procession,” says Hao Lan, with satisfaction. “It is the sort of thing the Chancery does when a delegation arrives. It never fails.”
“It always fails,” says Ren Qiao. “It is the reason the Chancery has no friends.”
“It looks impressive.”
“It looks like a funeral.”
“Then it is appropriate,” says Hao Lan. “We are going to the world’s end.”
The next morning you are on the hill at sunrise. The sun is a red coin on the edge of the grass. The horn sounds, a loud flat bray. The drum booms. You raise your hand.
Out of the haze, thirty riders appear.
> deceit | Hold the pose. | border_a3s4
> truth | Put your hand down. | border_a3s4
> quiet | Hold your breath. | border_a3s4
> mercy | Smile. | border_a3s4

=== border_a3s4 | The Riders See
They come at a walk. They halt at the foot of the hill, in a half-circle, and look up. Their ponies blow. Their white hats are bright in the sunrise. At their head is a lean brown man on a bay pony, with a broken nose and a level gaze.
There is a long, long silence. The horn gives a final embarrassed toot. The drum fades. The Elder, on the cart, with her hand held high and the letter fluttering in it, starts to wobble.
“Madam,” whispers Hao Lan. “Hold the pose.”
“I am holding it.”
“You are drooping.”
“I am eighty,” hisses the Elder. “In spirit.”
The brown man on the bay urges his pony up the hill, at a stroll. He stops three paces from the cart. He looks at the horn, the drum, the Elder, the letter. He looks at you. He doesn’t speak.
His mouth twitches.
“I am Temur,” he says. “Captain of the Grass Line.” He clears his throat. “What a very good entrance.”
> deceit | Bow. | border_a3s5
> truth | Admit it was Hao Lan’s idea. | border_a3s5
> quiet | Keep a straight face. | border_a3s5
> mercy | Look at Hao Lan. | border_a3s5

=== border_a3s5 | The Wind Laughs
The wind does not drop. It rises. It rushes across the grass in a great exultant gust, flattening it in waves, and from every direction, near and far, comes the sound of a hundred rustling whispers, running together into one. It is a laugh. It is the sound of the Steppe laughing.
Temur lifts his eyebrows. “It says you are not lying,” he says.
“I am not.”
“It says you are doing a very peculiar thing, with a very straight face.” He takes off his hat and fans himself. “It has not been so amused since the Censor in the dumplings.”
Hao Lan gives a small shriek. “You know about the Censor?”
“Everyone knows about the Censor,” says Temur. “He married my great-aunt. He has eleven grandchildren.” He replaces his hat. “They are all in the Chancery. They write to the wind every year. It tells them to come home.”
Hao Lan sits down on the cart. She puts her face in her hands. Her shoulders are shaking.
> deceit | Laugh. | border_a3s6
> truth | Say you did not know. | border_a3s6
> quiet | Pat her. | border_a3s6
> mercy | Hand her the letter. | border_a3s6

=== border_a3s6 | The Real Letter
They read the letter at the foot of the hill, on the grass. Temur takes it in both hands, as one takes a bird. He reads it twice. He reads it with his lips moving. His face is unreadable.
“Hui Niang,” he says at last. “She was a Censor. She came here once. I was a boy. She stayed three nights. She asked the Matriarch a question.”
“What question?”
“I was not told.” He folds the paper along its white creases. “But the Matriarch has been waiting for the answer for eleven years.” He tucks it in his coat. “She will want to see this.”
He looks up.
“It is not a very impressive letter,” he says. “It makes no demands.”
“No,” says Hao Lan, in a small voice.
“It is the best one I have ever read.” He lifts his chin. “The wind agrees.”
> deceit | Thank him. | border_a3s7
> truth | Say you are sorry for the horn. | border_a3s7
> quiet | Bow. | border_a3s7
> mercy | Say Madam Ash would be glad. | border_a3s7

=== border_a3s7 | The Horn
“Oh, no,” says Temur. “Keep the horn.” He is looking at it with something like affection. “It is a very bad horn. It makes a noise like a goat in labour. It is exactly the sort of thing a stranger would carry to the edge of the world.” He grins. “I have never been so entertained.”
Gu goes red to the ears. “I only blew it because I was told.”
“You blew it magnificently.” Temur claps him on the shoulder. “There is a competition at the Kurultai. Best bad noise. You should enter.”
“Is there?”
“Not yet,” says Temur. “But I shall propose one.”
The riders have dismounted. They stand about on the grass, talking, laughing, slapping the cart’s ponies. Somebody has produced a flask. Someone else has produced a handful of dried apricots. A very old rider with a face like a walnut offers the Elder a seat on his saddle-bag.
“You’re too kind,” says the Elder.
“I’m very lonely,” says the old man. “I’ve got twelve grandchildren and all of them are in the Chancery.”
> deceit | Smile. | border_a3s8
> truth | Sit. | border_a3s8
> quiet | Listen. | border_a3s8
> mercy | Offer him tea. | border_a3s8

=== border_a3s8 | A Procession, Reversed
They ride in at noon. The riders form two lines, and put you and the cart between, so that you move across the grass in a hollow square, with a pony at every corner and Gu’s horn, at intervals, sounding the retreat. It is exactly the sort of procession the Chancery would have been proud of. It has a drum. It has a banner. It has a hundred hooves.
The old man with the walnut face rides beside the Elder, telling her about his grandchildren. The Elder is nodding and smiling and occasionally saying, “How remarkable.” Hao Lan is walking at the cart-tail with her notebook, writing furiously. Ren Qiao trudges beside her, looking thunderous.
“It worked,” says Hao Lan. “I knew it would.”
“It did not work,” says Ren Qiao. “They laughed.”
“It is the same thing,” says Hao Lan. “For a people who can hear a lie.”
She snaps the notebook shut.
“I think,” she says, “I have just learned something important about honesty.”
> deceit | Ask what. | border_a3s9
> truth | Smile. | border_a3s9
> quiet | Keep walking. | border_a3s9
> mercy | Take her arm. | border_a3s9

=== border_a3s9 | What Hao Lan Learned
“That it can be funny,” says Hao Lan. She says it slowly. “I have always thought it must be solemn. I thought a true thing had to be said in a flat voice, in a quiet room, with a pen.” She laughs. “But it can be said on a hill, at sunrise, with a drum.”
She looks at the grass.
“I wonder if that is why they can hear a lie,” she says. “Not because they are clever. Because they are happy.”
“Happy?”
“A liar is always a little bit afraid,” says Hao Lan. “You can hear it. A person who is happy has nothing to hide. It comes out in the voice.”
She tucks the notebook under her arm.
“I should like to be that,” she says. “Happy. I should like to be so happy that I cannot lie.”
She says it so earnestly that you cannot answer.
> deceit | Say you hope she is. | border_a3s10
> truth | Say she is, already. | border_a3s10
> quiet | Walk with her. | border_a3s10
> mercy | Squeeze her hand. | border_a3s10

=== border_a3s10 | The Camp at the Edge
The first camp is a ring of low round felt tents, grey as mushrooms, pitched in a hollow by a stream. Smoke rises from their roof-holes. Dogs bark. Children run out, shrieking. Women in long coats look up from their milking. Men put down their ropes. A tall old woman with a face like a hatchet comes forward, wiping her hands on her apron, and looks at the procession.
“Is that a horn?” she says.
“Yes,” says Temur.
“Is it supposed to sound like that?”
“It is a very new horn,” says Temur, gravely.
The old woman gives a short bark of laughter. She looks at you. She looks at the Elder, and at Hao Lan, and at Shu Ning’s anvil under its sack. She jerks her head at the nearest tent.
“Come in,” she says. “There is mutton. I will not ask where you were going. The wind has already told me.” She smiles, showing three teeth. “It wanted me to be surprised.”
> deceit | Go in. | border_close | +border_flourished
> truth | Thank her. | border_close | +border_flourished
> quiet | Duck under the flap. | border_close | +border_flourished
> mercy | Help the Elder down. | border_close | +border_flourished

// ---------------------------------------------------------------- a4: waiting
=== border_a4s1 | Sitting
You sit. You do not know how long. The grass is warm and dry, and the cairn’s shadow slides slowly across it. The Elder joins you after an hour, with a cushion, and lowers herself with a sigh. Gu sits, and fidgets, and sits. Ren Qiao stands for the first day and sits on the second. Hao Lan reads. Shu Ning makes a small anvil out of three stones and starts to hammer, softly, at nothing.
The wind blows. The grass hisses. A hawk circles overhead, small as a crumb. It circles for hours.
You watch it. You find, after a time, that you are not watching it. You are listening to the grass. The long whisper has a rhythm, a slow rise and fall, like breathing. You find that you are breathing with it. You find that the ache in your shoulders has gone.
“How long do you think?” whispers Gu.
“I do not know.”
“A day?”
“Perhaps three.”
Gu swallows. “I did not bring enough cheese.”
> quiet | Smile. | border_a4s2
> truth | Share yours. | border_a4s2
> mercy | Say it will be all right. | border_a4s2
> inquiry | Ask Hao Lan what the Chancery report says. | border_a4s2

=== border_a4s2 | The Report
“That they test patience,” says Hao Lan, without looking up from her book. “That the Listeners sit and watch the stranger from a hill, for as long as it takes, to see what they do with the waiting.” She turns a page. “It says that a stranger who builds a fire is not trusted. A stranger who sings is trusted a little. A stranger who sleeps is trusted a great deal.”
“Sleeps?”
“A person who sleeps at the edge of the Steppe has nothing to fear.” She looks up, over the rim of her spectacles. “Or has never been afraid. Or is a fool. The report is not clear.”
You glance up. There is a speck on the horizon, a long way off. It is not the hawk. It is smaller, and still. It might be a rider on a hill. It might be a stone.
“Are we being watched?”
“Almost certainly,” says Hao Lan, turning back to her book. “I am trying to look as trustworthy as possible.”
> quiet | Lie down. | border_a4s3
> truth | Wave. | border_a4s3
> mercy | Close your eyes. | border_a4s3
> inquiry | Ask Ren. | border_a4s3

=== border_a4s3 | Sleep
You lie down in the grass. It is the most natural thing in the world. You fold your cloak under your head and look up at the sky, vast and pale and cloudless, with the hawk a tiny hook of black. The wind is a hand passing over you. The grass makes a roof of whispers.
You sleep.
You dream of a lamp, a mirror, a boat. You dream of a child with a toy boat, digging. You dream of an old woman in a goose-hat, singing. You dream of the Ledger, a book of grey cloth with a lemon-coloured ribbon, and you are standing in front of it, and a voice says, patiently, as to a child: ask.
You wake with a start. It is dusk. The sky is violet. The hawk has gone. A small cold wind is blowing, and the grass is silver in the last light.
Someone has laid a blanket over you.
It is not one of yours.
> quiet | Sit up. | border_a4s4
> truth | Look round. | border_a4s4
> mercy | Smell the blanket. | border_a4s4
> inquiry | Ask who. | border_a4s4

=== border_a4s4 | A Blanket
It is grey felt, coarse and thick, with a border of red embroidery in a pattern of interlocking spirals. It smells of smoke and sheep and, faintly, of milk. It is warm. It has been used. There is a long black hair caught in the weave.
“Who put this here?” you ask.
Nobody answers. The Elder is asleep with her head on Gu’s shoulder. Hao Lan has her book over her face. Shu Ning is a curled shape by the cart. Ren Qiao is on watch, a dark outline against the sky.
“I did not see,” he says, in a low voice. “I looked away for a moment. A breath. When I looked back, it was there.”
“A rider?”
“A rider would have been seen.” His voice is flat. “A rider would have made a noise. This was a person who knew how to cross grass without bending it.”
He looks out at the plain, silver in the dusk.
“I do not like it,” he says. “And I do not mind it. Which is more disquieting.”
> quiet | Wrap the blanket round you. | border_a4s5
> truth | Say thank you to the dark. | border_a4s5
> mercy | Wake the others. | border_a4s5
> inquiry | Look for footprints. | border_a4s5

=== border_a4s5 | No Footprints
There are none. You search the grass around the cairn with a lantern until it is dark, on your hands and knees, and find only the places where your own party has lain. The grass is not bent. The ground is not scuffed. There is no trace of a person.
But at the cairn, among the knotted cloths, there is a new one. It is a strip of dyed wool, the colour of dried blood, tied in a complicated knot. It was not there at noon. It sways in the night wind.
“What does it mean?” you whisper.
Hao Lan comes up beside you, rubbing her eyes. She studies the knot by the lantern. She frowns. She takes out her notebook and flips back through the pages.
“It’s in the report,” she says. “Third appendix. It is a Steppe signal.” She finds it. She reads it twice. “‘Strangers who sit at the cairn and sleep: leave a cloth. It means: this one is not afraid.’”
She looks up.
“We are being vouched for,” she says.
> quiet | Touch the cloth. | border_a4s6
> truth | Ask by whom. | border_a4s6
> mercy | Wake the Elder. | border_a4s6
> inquiry | Read the next line. | border_a4s6

=== border_a4s6 | The Rider on the Hill
At dawn the speck on the horizon is closer. It is a single rider on a dun pony, sitting quite still on a rise, a mile off, in the long gold light. He has been there all night. He has not moved.
Temur arrives at sunrise with his thirty. He rides up the slope to the cairn, very slowly, and halts. He regards the sleeping party. He regards the blanket. He regards the cloth on the cairn. He looks at the rider on the rise.
“Ah,” he says. “I wondered.”
“Wondered what?” says Ren Qiao, rising.
“Whether she would come herself.” Temur sighs. “She never does. It is not her habit.” He shakes his head. “It seems you are an unusual stranger.”
He lifts his hand to the rider on the dun pony, in a long slow salute.
The rider does not return it. But after a moment, the pony turns, and picks its way down the far side of the rise, and the rider vanishes into the grass.
> quiet | Ask who she is. | border_a4s7
> truth | Ask what she wants. | border_a4s7
> mercy | Say thank you for the blanket. | border_a4s7
> inquiry | Ask if she will return. | border_a4s7

=== border_a4s7 | The Matriarch’s Eye
“The Matriarch’s granddaughter,” says Temur. “Odval. She is a seer. A watcher. She goes out onto the grass for days at a time, and sits, and listens.” He rubs his broken nose. “She is shy. She does not like people. When she lays a cloth on a stranger it means she has listened to them for a night and found nothing to fear.”
“She watched us sleep?”
“All night. She sat on that hill.” He gives a short laugh. “I was told she would. The wind said so. But I did not believe it.”
You touch the blanket. “She gave me this.”
“She does not do that,” says Temur. He sounds uneasy. “She has never done that.” He looks at you sidelong. “I think she liked you.”
Hao Lan makes a note. “That is not in the report.”
“No,” says Temur. “Nobody has ever been so fortunate.”
> quiet | Keep the blanket. | border_a4s8
> truth | Ask to thank her. | border_a4s8
> mercy | Fold it. | border_a4s8
> inquiry | Ask when you may meet. | border_a4s8

=== border_a4s8 | Three Days
It is the third day. You are all awake and fed and a little stiff. Temur has brought a skin of sour milk, and a flatbread, and a bag of dried apricots, and distributes them with the unshowy courtesy of a man feeding family. The riders sit about on the grass. They talk in low voices, and glance at you, and look away.
“You have passed,” says Temur. “It was never a test. We do not test. We watch.”
“What were you watching for?”
“Whether you can sit.” He shrugs. “It is a more useful thing to know than almost anything. A person who cannot sit will always want to be somewhere else. She will not hear the grass.” He tilts his head. “You heard it, I think. You were listening long before you slept.”
“How can you tell?”
“Your shoulders,” says Temur. “They dropped.”
He smiles.
“Come. We have a long way to go, and a Matriarch who does not like to be kept waiting.”
> quiet | Stand. | border_a4s9
> truth | Thank him. | border_a4s9
> mercy | Help the Elder up. | border_a4s9
> inquiry | Ask how far. | border_a4s9

=== border_a4s9 | The First League
You ride out at midmorning, in a long loose column, with Temur at the head. The grass parts before you. The hawk reappears, riding the wind overhead, and follows. The Steppe unrolls in front of you, league after league of silver, rippling like water. Here and there a rise, a stone, a stunted tree. Twice you pass a kurgan, a green mound with a flat stone at its foot, and Temur dips his hat.
“Graves?” says Gu.
“Beginnings,” says Temur. “A Listener is buried standing, with her face to the east. It is so that she will hear the next one come.”
You ride on.
At noon you stop at a stream. At dusk you stop again, at a place where seven stones stand in a ring, each as tall as a man, grey and pitted and covered in lichen. They are very old. They are humming. You can hear it from fifty paces: a low steady drone, like a bee in a jar.
“The first of the Singing Stones,” says Temur. “We shall sleep here.”
He lifts his hand to the nearest and says, gravely, “Good evening.”
The hum rises, politely, and falls.
> quiet | Greet the stones. | border_a4s10
> truth | Listen. | border_a4s10
> mercy | Touch one. | border_a4s10
> inquiry | Ask what they say. | border_a4s10

=== border_a4s10 | Good Evening
“Good evening,” you say.
The stone hums. The pitch changes, rises a shade, as if in surprise. A second stone takes it up. A third. The seven of them, one by one, take on the note and pass it round the ring, and in a moment there is a chord, soft and rich and old, that fills the hollow like water in a bowl. You feel it in your teeth. You feel it in the floor of your chest, where the seed sleeps.
The seed stirs.
It does not open. It turns over, like a sleeper at a sound. It hums back, very low, a note you have not heard it make.
Temur has gone still.
“Well,” he says quietly. “That is new.”
The stones sing on. The sun slides down. Round the ring of grey, the grass bends and straightens in the wind, and the long whisper has stopped. For a moment, the whole Steppe is listening.
> quiet | Stay still. | border_close | +border_waited
> truth | Hum with them. | border_close | +border_waited
> mercy | Hold the Elder’s hand. | border_close | +border_waited
> inquiry | Ask Temur what is new. | border_close | +border_waited

// ---------------------------------------------------------------- hidden: the door
=== border_h1 | Nine Bars
You hum it. You do not intend to. It is there on your lips: the rising fifth, the pause, the long fall that does not close. Nine bars of Pao’s door, written for a keener, carried over a thousand miles in the folds of a coat. You hum it to the cairn, and the wind, and the open grass.
The wind stops.
It stops entirely. The long grey grass, which has been hissing since dawn, falls still. The cloths on the cairn hang. The air is as clear as water. Even the sound of your own breath is loud.
Across the plain, small and sharp, a single thin note answers.
It is a pipe. It comes from a long way off, on the left, and it takes up your tune where you left it. It plays the rising fifth. It plays the pause. It plays the long fall and does not close.
“Oh,” says the Elder, softly.
The rider is coming. You can see her now, a speck on a rise. She is riding without a hat.
> inquiry | Hum on. | border_h2
> truth | Wait. | border_h2
> mercy | Hold Hao Lan’s hand. | border_h2
> quiet | Listen to the pipe. | border_h2

=== border_h2 | Odval
She comes down the slope at a walk, on a dun pony, with a pipe of bone in her left hand and her black hair loose. She is nineteen or twenty, thin and straight-backed, in a grey felt coat patched at the elbows. Her face is narrow, with high cheekbones and a long solemn mouth. Her eyes are very dark. She does not look at the party. She looks at you.
She stops the pony ten paces off. She lowers the pipe.
“That is not your tune,” she says.
“No,” you say. “It is a friend’s.”
“It is a good friend’s.” She has a low, husky voice, rarely used. “It was written by a woman who has been dead a hundred and eighty years. And sung by a woman who is alive.” She tilts her head. “It is the Door. It is for the Ninth.”
“I did not know it had a name.”
“It has had one for eleven centuries,” says Odval. “I have been waiting to hear it played by someone who did not know.”
> inquiry | Say you are sorry. | border_h3
> truth | Say you are the Ninth. | border_h3
> mercy | Greet her. | border_h3
> quiet | Bow. | border_h3

=== border_h3 | Let Her Ask
She dismounts. She walks the ten paces on foot, with the pipe held across her chest like a sword. She stops in front of you. She is half a head taller. She smells of milk and smoke and the cold clean air of the open grass.
“I am Odval,” she says. “I am the granddaughter of the one who decides. I have been sitting on that hill for three nights.” She almost smiles. “I did not think you would sleep. Everyone else who has sat has fretted.”
“I was tired.”
“Yes. I could hear.” She lifts the pipe. “I have been told to ask you one thing, if you came. My grandmother has been telling me for eleven years. I did not think I would live to ask it.”
The wind stirs. The grass leans.
“What is your name?” says Odval.
You open your mouth. And then you stop. The grass is listening. The sky is listening. A hundred miles of wind are holding their breath.
> inquiry | Tell her you do not have one. | border_close | +border_door_sung
> truth | Tell her the one you chose in the forge. | border_close | +border_door_sung
> mercy | Tell her what the village called you. | border_close | +border_door_sung
> quiet | Tell her you would like her to choose. | border_close | +border_door_sung

// ---------------------------------------------------------------- close
=== border_close | The First Camp
The camp is a ring of grey felt tents in a hollow by a stream. Smoke rises from the roof-holes. Dogs bark. Children run out, shrieking. The smell of mutton and woodsmoke and boiling milk reaches you a hundred paces off. You are given a place by the fire and a bowl of tea, in both hands, and told that you are welcome.
+[how] border_answered | You answered every question at the Grass Line, and the wind carried it to every clan.
+[how] border_chased | You crossed the line like a goat, and a girl of twelve gave you a red cloth and a stone.
+[how] border_flourished | You arrived with a horn and a drum, and the Steppe laughed until the grass shook.
+[how] border_waited | You sat three days at the cairn, and a stranger left a blanket over you in the dark.
+[how] border_door_sung | You hummed a door that has had a name for eleven centuries, and a seer asked what yours was.
The Elder sits at your side with a bowl of milk-tea. She holds it in both hands. She is looking round the fire, at the faces, the children, the firelight on the tent-walls. She looks as though she were seeing a country she had read about all her life.
There is a sound of hooves. A rider comes in at a canter, from the east, with the dust on him and a lathered horse. He slides from the saddle. He is thin and grey, in a torn grey robe, with a closed eye on the breast. He staggers, and holds on to the horse’s mane.
“Forgive me,” says Duan Wuyi. “I seem to be rather late.”
> truth | Go to him. | border_close2 | +b4q_border
> mercy | Help him sit. | border_close2 | +b4q_border
> quiet | Pour him tea. | border_close2 | +b4q_border
> inquiry | Ask how he found you. | border_close2 | +b4q_border

=== border_close2 | The Censor-General on a Horse
He has ridden four hundred miles in nine days. He has not slept. He sits by the fire with the bowl in his shaking hands, and his thin face is grey and curiously radiant. His spectacles are cracked. His staff is gone. He has a pony, which he calls the Assessor, which has bitten him twice.
“I resigned,” he says. “On the quarterdeck of the Harmony. It was not an elegant resignation. I tore off my sash and gave it to a cabin-boy.” He sips. “The Admiral cheered. I was rather touched.”
“And the Concord?”
“Will have a new Censor-General by the autumn. It will be a person of sound views and no imagination.” His mouth twitches. “I have left them my lien-law notes. I hope they find them improving.”
He puts down the bowl. He looks round the fire. His eyes rest on the Elder, on Hao Lan, on you.
“I should like to join you,” he says. “If I may. I have nowhere in particular to be. I have never before had nowhere in particular to be.”
He smiles.
“I find it terrifying. And I should like to do it in company.”
> truth | Say yes. | hub_b4_a | bond:duan+3
> mercy | Say he is welcome. | hub_b4_a | bond:duan+3
> quiet | Pour him more tea. | hub_b4_a | bond:duan+3
> inquiry | Ask what he will do. | hub_b4_a | bond:duan+3

`,
  scenarios: String.raw`
$ SU_BORDER_WIND | trust+3 respect+3 fear+2 | elder | The Elder meets the Listeners’ riders and learns they can hear a lie in the wind.
hostile: They knew when I lied. I said I was a pilgrim. A girl of twelve, on a horse, said, “The grass says you are afraid.” I was.
wary: A people who cannot be lied to. I thought at first that it was a boast. I have been a Registrar for twenty years. I know how rarely a thing like that is not a boast.
neutral: The captain asked me my name. I gave it. He asked what I had done. I told him. He nodded, and said, “Good. Now we can begin.” I have never been so relieved by a question.
warm: I asked what the wind was saying about me. The rider laughed. He said it had been saying the same thing for a week, and that it was fond of me. I did not know what to do with that.
devoted: I have spent fifteen years among people who needed me to be someone. These people only want me to be accurate. I find it is a tremendous rest.
`,
  remarks: String.raw`
% border_duan_later | since:b4q_border>=4 | hao | Master Duan has a horse. He sits on it like a man who has been told about horses. He is learning to hold the reins from a girl of twelve. I have never seen him so happy.
% border_temur_later | since:border_a1_asked>=5 | gu | Captain Temur asks every night what the wind said. We tell him. He says that it was nearly right.
`,
};
