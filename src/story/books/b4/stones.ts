import type { Arc } from "../types";

/**
 * Book Four, arc two: the Singing Stones. Nine hundred and ninety-nine standing stones keep the voices of the Listeners who died
 * facing east, tended by the deaf Stone-Singer Chimeg. Four approaches: learn to listen with the stones (a1, truth), raise the
 * fallen stones the garrison toppled (a2, force), tune a dead stone with a borrowed voice (a3, deceit), and spend the night
 * among them (a4, quiet). A hidden route hears Su Mengjiao naming the sealed.
 * Cast: Chimeg, her grandson Bold, Temur, Odval, Duan Wuyi, Ren Qiao, the stones.
 */
export const stones: Arc = {
  id: "stones",
  name: "The Singing Stones",
  scenes: String.raw`
=== stones_entry | Nine Hundred and Ninety-Nine
They stand on a long low rise in the heart of the grass, in rows as straight as a ploughed field, each a little taller than a man: grey, pitted, leaning very slightly to the west like people listening for something behind them. They are not carved. They are not shaped. Each has the rough irregular outline of a thing that was broken off a mountain and set in the ground. Moss grows on their north sides. Lichen paints them yellow and orange.
They hum. Not one, but all, in a vast slow chord that fills the rise like water in a bowl. You can hear it from a mile off. As you draw near, it deepens, and you feel it in your breastbone, and the cold seed under it turns over.
An old woman sits at the end of the nearest row, on a folding stool, with her back to a stone and her hands on her knees. She is tiny and brown and wrinkled as a nut, in a coat of undyed wool and a hat of white felt. Her eyes are shut. She is smiling.
“Chimeg,” says Temur, softly. “The Stone-Singer. She is deaf. She hears everything.”
> truth | Sit down opposite her, and wait to be spoken to. | stones_a1s1
> force | Notice that a whole row at the north end lies toppled in the grass. | stones_a2s1 | needs:4
> deceit | Notice one stone in the third row that does not hum at all. | stones_a3s1
> quiet | Ask Temur whether strangers may sleep among the stones. | stones_a4s1
> inquiry | Say that there is a voice in the stones that you know, and ask which row it is in. | stones_h1 |  | border_door_sung | The stones have not yet been told your name.

// ---------------------------------------------------------------- a1: learning to listen
=== stones_a1s1 | The Stool
You sit on the grass opposite her. You do not speak. She does not open her eyes. The stones hum all round you, in their ranks, and the wind runs through them with a sound like a bow drawn across a hundred strings. Time passes. A lark goes up from the grass and sings itself out of hearing.
At last the old woman reaches out, without looking, and takes your wrist. Her hand is dry and light as a leaf. She turns it palm up. She taps the inside of your wrist with a forefinger, twice.
“That means yes,” says a young man’s voice. A big, shy, fair-haired Listener of twenty has appeared at your elbow, with a bucket in each hand. He has a round face and enormous ears. “I’m Bold. I’m her grandson. She’s got a language. It’s taps. Two is yes. One is no.” He blushes. “Three is a joke. She makes a lot of those.”
Chimeg taps three times, on your wrist, fast.
“See?” says Bold.
> truth | Laugh. | stones_a1s2
> mercy | Ask what the joke was. | stones_a1s2
> quiet | Tap her wrist back, twice. | stones_a1s2
> inquiry | Ask how to speak to the stones. | stones_a1s2

=== stones_a1s2 | The First Lesson
She teaches you with her hands. It is the only way. She puts your palm flat on the nearest stone, and lays hers over it, and waits. The stone is warm. It is humming, a low steady note, and the vibration comes up through your arm into your teeth. You are aware of your own pulse, thudding in your ear.
She taps your knuckle, once. No.
She moves your hand a hand’s breadth to the left. The note changes, a little higher. She taps twice. Yes.
“You have to find where it lives,” says Bold, translating. “Every stone has one place that sings. The rest of it is just rock.” He sets down a bucket. “It might be a thumb’s width. It might be a crack. It might be a lichen. You can’t tell by looking. You have to feel.”
You move your fingers. A little to the right. Up. Down. The hum wavers, steadies, deepens. Beneath your fingertip there is a tiny sharp vibration, like a trapped bee.
Chimeg taps your wrist, twice, and beams.
> truth | Hold it. | stones_a1s3 | npc:SU_STONES_HUM
> mercy | Ask what it says. | stones_a1s3
> quiet | Press closer. | stones_a1s3
> inquiry | Ask who it is. | stones_a1s3

=== stones_a1s3 | A Man Called Orhan
“Orhan,” says Bold, for the old woman. He doesn’t need to be told; he has been reading her wrist-taps since he could crawl. “That’s his stone. He was a horse-keeper. He died in the year of the long snow. He’s standing facing east. He’s been there thirty-one years.”
You are aware of the voice. It is not a voice. It is a feeling, deep in the stone, of a person: a heavy slow gentle man, who likes horses and does not like conversation, who is warm like a banked fire. He has a song. You cannot hear it. You can feel the shape of it, the way you can feel a face in the dark.
“What does he say?”
Chimeg taps the stone. She taps your wrist. She makes a small rising gesture with her free hand, like a bird going up.
“He says,” translates Bold, “that the grass is good this year.”
You laugh. It surprises you. It comes out of you in a gasp, and the stone hums with what you could swear is amusement.
> truth | Thank him. | stones_a1s4
> mercy | Ask what else. | stones_a1s4
> quiet | Stay still. | stones_a1s4
> inquiry | Ask if they are all like that. | stones_a1s4

=== stones_a1s4 | Not All
“No,” says Bold. His round face clouds. “Some are sad. Some are very sad. Some are angry.” He gestures down the rows. “Those at the north end. They are the ones the Garrison took. Colonel Ruo’s men came, last winter, and rounded up a clan on the edge of the grass, and marched them to the fort. They said it was for a census. They did not come back.”
He swallows.
“We found them in the spring. A line of them, along the river, standing, in the ice. Someone had stood them up, facing east. Whoever did it knew the custom.” His voice is thick. “It was the most horrible kindness I have ever seen.”
Chimeg has opened her eyes. They are milky, blind, but they are fixed on you. She taps your wrist, once, hard.
“She says that is enough,” says Bold. “She says it’s not a thing for the first day.” He tries to smile. “She says the grass is good this year.”
> truth | Bow your head. | stones_a1s5
> mercy | Take her hand. | stones_a1s5
> quiet | Look north. | stones_a1s5
> inquiry | Ask where Ruo is. | stones_a1s5

=== stones_a1s5 | Colonel Ruo
“At the fort,” says Temur, who has come up behind with his hat in his hand. “A hundred miles east, on the old trade road. It is his headquarters. He has two thousand men, and a great many bells.” He nods toward the toppled stones at the north end. “He does not hate us. That is the trouble. He thinks he is helping.”
“Helping?”
“He believes the Steppe is dying. He believes the clans are dying with it. He has a theory that the wind is poisoned.” Temur’s mouth twists. “He is a very well-read man. He has a degree. He has a bell that he believes will quiet it.”
“A Hush.”
“A great one. Fifty feet across.” Temur’s level eyes are bleak. “He is going to put it up on a hill, in the autumn. He says it will cure us.”
Duan Wuyi, who has been listening in silence, makes a small dry sound.
“I think I know the man,” he says. “I signed his degree.”
> truth | Ask what he is like. | stones_a1s6
> mercy | Look at the stones. | stones_a1s6
> quiet | Listen. | stones_a1s6
> inquiry | Ask when the autumn is. | stones_a1s6

=== stones_a1s6 | The Man Who Wished to Help
“A good student,” says Duan. He stands with his hands in his sleeves and looks out over the rows. “I examined him in the Hall of the Seventh Chancery, twenty years ago. He wrote a thesis on the diseases of the voice. It was very good. It was wrong.” He sighs. “He is a man who has never in his life been refused anything he asked for politely. He asks the world nicely to be better. When it does not, he is hurt.”
“Dangerous.”
“Terribly.” Duan nods. “A man who thinks he is a doctor.”
Bold, looking from one to the other, says in a small voice, “Can you stop him?”
There is a silence. The wind runs through the stones.
“I do not know,” says Duan. “I have always tried to be fair.” He takes off his cracked spectacles and polishes them. “I think I may have been fair to him for too long.”
> truth | Say you will help. | stones_a1s7
> mercy | Say there is time. | stones_a1s7
> quiet | Look at Chimeg. | stones_a1s7
> inquiry | Ask Bold to show you the Garrison’s stones. | stones_a1s7

=== stones_a1s7 | The North Rows
They are a quarter mile off, at the edge of the rise: forty stones, not the grey of the rest but a paler colour, a creamy white, with a faint pinkish tinge. They are newer. They have been set carefully, in a double line, facing east. They do not stand quite straight. They have a sagging, uncertain look.
Bold stops fifty paces away. “I don’t go closer,” he says.
“Why?”
“They’re not humming.” He looks at his feet. “They should. They are as old as the others, they were put here properly, with the words said. But they don’t. There is just a sort of … silence. A big hole in the sound.” His round face is troubled. “Grandmother says it’s because the Hush got into them. They were killed with a bell, you see. The Garrison used a bell. They died in a silence. The stones have never learned to sing.”
Chimeg has come behind, leaning on a stick. She puts her hand on a white stone. She holds it there.
She taps once.
> truth | Put your hand on one. | stones_a1s8
> mercy | Stand with her. | stones_a1s8
> quiet | Listen. | stones_a1s8
> inquiry | Ask if it can be taught. | stones_a1s8

=== stones_a1s8 | A Silent Stone
You put your hand on the nearest. It is cold. It is utterly still. There is no hum, no pulse, no shape of a person. There is a smooth chill emptiness, like the inside of a well. You press harder. You search for the place that sings. There is none.
“It’s dead,” you say.
Chimeg taps your wrist. Once. No. Then, three times, quickly. A joke. Then, firmly, once more.
“She says it’s not dead,” says Bold. “She says it’s asleep. She says it’s waiting to be told what to do.” He rubs his face. “She says it’s a clan of fifty. They’ve been standing here since the thaw, and nobody has said their names.”
“Their names?”
“A stone doesn’t hum unless it knows its name. That’s the rule.” He looks at you hopefully. “It’s why we came to you.”
“To me?”
“The wind said you ask.”
> truth | Ask them. | stones_a1s9
> mercy | Say the first name you know. | stones_a1s9
> quiet | Place your other hand beside the first. | stones_a1s9
> inquiry | Ask Bold for the clan’s list. | stones_a1s9

=== stones_a1s9 | Fifty Names
Bold has the list. He has it by heart. He recites them, standing with his hands at his sides and his eyes shut, one at a time, in a clear soft tenor, and as each name is spoken you put your palm on the corresponding stone and say it back. It takes the rest of the day.
Hui. Qasar. Yesui. The names are strange and beautiful and run together on your tongue. There is a baby among them, a girl of eight months, named Little Wind. There is an old man named Stubborn. There is a woman who was called, by her friends, Always Late.
At the thirtieth, a stone hums.
It is the faintest thing: a note so low it is almost a pulse. It trembles under your palm. It swells, steadies, grows into a line of sound. You say the name again, and it answers. The old man’s stone, Stubborn’s, gives a sound like a creaking door. You laugh until you cry.
Chimeg has her hand over her mouth. Her shoulders are shaking.
> truth | Go on. | stones_a1s10
> mercy | Weep. | stones_a1s10
> quiet | Keep your palm still. | stones_a1s10
> inquiry | Ask Bold how many are left. | stones_a1s10

=== stones_a1s10 | The Last Name
At sunset you reach the last. It is the baby’s. Little Wind. Her stone is the smallest in the row, only a hand taller than a toddler, and it stands at the end, a little apart, with its rough pale head tilted to one side. You place your palm on it. It is cold. You say the name.
Nothing happens.
You say it again.
Nothing. You say it a third time. You feel Bold’s breath held behind you, and Chimeg’s crooked fingers tight on your sleeve. The sun is a red disc on the rim of the grass. The shadows of the stones lie long and blue across the rise.
You do not know what to do. You do not know the right words. You are a stranger, from a river village, who never knew this child. You have a scar on your palm and a seed in your chest, and a card in your sleeve that says: Sing what is struck.
You begin to hum.
It is the lullaby. It is the first jar. It is the song of a woman rocking a baby.
> truth | Go on. | stones_close | +stones_named
> mercy | Close your eyes. | stones_close | +stones_named
> quiet | Hold the note. | stones_close | +stones_named
> inquiry | Hum it softer. | stones_close | +stones_named

// ---------------------------------------------------------------- a2: lifting the stones
=== stones_a2s1 | A Row Down
The toppled row lies along the north edge of the rise: twelve great stones, flat in the grass, with their roots torn out of the earth and the raw yellow clay still showing. They have lain there since the thaw. Grass has grown up round them. A skylark has built a nest in the hollow where one stood.
Bold, shy and sweating, stands at the head of the row with his hands in his pockets. “It was the Garrison,” he says. “They came with a team of oxen and a chain. They said it was a hazard.” He kicks the grass. “They said the stones might fall on a child.”
“Now they have.”
“Now there’s nobody to stand them up.” He rubs the back of his neck. “It takes forty men and a day. The clan’s only eleven. We’ve been trying with levers. The big ones weigh four tons.”
Ren Qiao is looking at the stones with a sort of professional gloom. He walks the length of the row. He measures one with his arm-span. He grunts.
“I could do it,” he says. “With help.”
> force | Say you will help. | stones_a2s2 | needs:4
> truth | Ask how. | stones_a2s2
> quiet | Study the ground. | stones_a2s2
> mercy | Thank Bold. | stones_a2s2

=== stones_a2s2 | Levers and Ropes
It is an engineer’s problem, and Ren Qiao turns out to be an engineer. He has a gift you did not know about. He sets out a plan in the dust with a stick: a sloped trench, a ramp of felled timber, a tripod of poles with a pulley, a team of ponies on a rope. He explains it in four sentences. Shu Ning, listening, begins to make the iron fittings, and within the hour has produced a set of hooks that will take a ton each.
The Listeners gather. They come in ones and twos from the tents, and stand about in silence, and then without a word begin to haul. Women, children, old men, and boys. Temur’s riders dismount and take the rope. Hao Lan carries water. Duan Wuyi, to his own astonishment, is handed a shovel.
“I have never dug,” he says.
“It is easy,” says a boy of nine. “You push it into the ground.”
“And then?”
“You do it again.”
Duan Wuyi considers this. He pushes.
> force | Take a rope. | stones_a2s3
> truth | Dig. | stones_a2s3
> quiet | Watch the stones. | stones_a2s3
> mercy | Carry water. | stones_a2s3

=== stones_a2s3 | The First Lift
They raise the first at noon. It takes forty-two people. The ropes creak, the poles groan, the ponies lean into their harness with their heads down. The stone comes up an inch at a time, end first, with a shuddering rasp of earth, until it hangs, at a slant, over the pit. Ren Qiao shouts the count. The ponies lunge. The stone swings upright with a thud that shakes the ground.
It settles. Dust drifts. Somebody lets out a ragged cheer.
The stone hums.
It hums at once, a sweet clear note like a struck glass, and it hums for a long time. Bold has gone white. “It remembers,” he says. “It still remembers. It’s been lying there for months, and it still knows where it was.”
Chimeg, who has been sitting on her stool at the edge of the work with a smile on her face, taps her stick on the ground, three times.
“She says that was an easy one,” translates Bold, tearfully. “She says the next will be harder.”
> force | Go on. | stones_a2s4
> truth | Check the rope. | stones_a2s4
> quiet | Catch your breath. | stones_a2s4
> mercy | Thank the ponies. | stones_a2s4

=== stones_a2s4 | Four Tons
The fifth is the big one. It lies in a hollow at the end of the row, half buried, with a crack across its middle. It is the largest stone on the rise, twelve feet long, black and pocked with age. It weighs, Ren Qiao calculates, nearer five tons than four. It is the stone of the clan’s first Matriarch. It is the one Chimeg sits beside at night.
“If it breaks,” says Bold, “the whole row goes.”
“It will not break,” says Ren Qiao.
“How do you know?”
“I don’t,” says Ren. “But I have never lost a stone.”
They rig it for two hours. They dig the pit, line the ramp, run the ropes. Eighty people take the strain. The ponies are doubled. The iron hooks groan. Shu Ning stands at the tripod with a hammer, listening, her cold face intent.
“Now!” shouts Ren Qiao.
The stone lifts.
> force | Haul. | stones_a2s5
> truth | Shout. | stones_a2s5
> quiet | Hold your breath. | stones_a2s5
> mercy | Pray. | stones_a2s5

=== stones_a2s5 | The Crack
It rises. Slowly, shuddering. Eight inches. A foot. The ropes sing like wires. The pulley shrieks. Shu Ning shouts a warning, short and sharp, and the whole company freezes. A thin white line has opened across the face of the stone, where the old crack runs. It widens. A crumb of rock falls.
“Hold!” cries Ren Qiao.
They hold. The stone hangs, creaking. Dust trickles from the fissure. Every face is turned up, grey with strain. Nobody breathes.
“The crack,” says Shu Ning. “It’s going.”
“Can you bind it?”
“Not in time.”
“Then we need something to hold it.” Ren Qiao’s eyes sweep the company. They fall on you. “Something that will go through it. Something that fits in a crack.”
You look at your hand. The left. The scar glows, faintly, in the dusk.
“Open it,” says Ren Qiao.
> force | Do it. | stones_a2s6 | needs:4
> truth | Say you are afraid. | stones_a2s6
> quiet | Take a breath. | stones_a2s6
> mercy | Ask what it will cost. | stones_a2s6

=== stones_a2s6 | A Seam of Light
You do not open the stone. You do the opposite. You put your palm over the crack, and you press, and you feel for the thing that the seed does when it opens: the unfolding. You go the other way. You fold. You think, as hard as you can, of a hand closing, a mouth shutting, a door swinging to.
The crack closes.
It does not heal. It merely ceases to be open. The two edges of the fissure slide together with a sound like a long sigh, and the white line darkens and vanishes, and under your palm the stone is smooth. A faint warmth runs from your wrist to your elbow.
“Again,” gasps Shu Ning.
The ponies lunge. The stone swings up, free and whole, over the pit. It hangs a moment against the red sky, a great black shape with a halo of dust. Then it drops into its place with a boom like a bell, and quivers, and is still.
It hums.
> force | Sit down. | stones_a2s7
> truth | Look at your hand. | stones_a2s7
> quiet | Breathe. | stones_a2s7
> mercy | Thank Ren. | stones_a2s7

=== stones_a2s7 | The Matriarch’s Stone
It hums a different note from the rest. It is deeper. It is the voice of a woman who has been dead for three hundred years, and who was very tall, and who laughed at the wrong things. It is warm, dry, rueful. It is the sound of a person who has seen a lot of weather.
Chimeg is on her feet. She has crossed the rise without her stick. She puts her two hands on the stone, flat, and her forehead against it, and stays there. Her whole small body is shaking.
“She says,” whispers Bold, who can hardly speak, “that she’s home.”
The old woman taps the stone, softly. Once. Twice. Three times. She turns her blind face to you, and her cheeks are wet. She holds out one hand. You take it. Her fingers are light and dry and very strong. She taps your wrist, twice, over and over.
Yes. Yes. Yes. Yes.
You do not need Bold to translate.
> force | Hold her hand. | stones_a2s8
> truth | Say thank you. | stones_a2s8
> quiet | Stand with her. | stones_a2s8
> mercy | Weep. | stones_a2s8

=== stones_a2s8 | By Firelight
They raise the last at dusk. By then you are too tired to stand. You lie on the grass at the foot of the row, with your head on someone’s folded coat, and watch the twelve stones against the sky: great black shapes, in a line, humming. It is not a tune. It is a chord. It is the sound of a family at supper.
The Listeners have lit fires. They have brought out a barrel of fermented mare’s milk, and a tray of fried dough, and a very old fiddle with two strings. Someone begins to play. It is a plaintive, jaunty, tuneless tune. The children dance. The old men sing. Duan Wuyi sits with a blister on each palm and a cup of mare’s milk, looking dazed.
“It is a most remarkable drink,” he says.
“You’ve had four.”
“Have I?” He peers into the cup. “I think I may be a little drunk.”
He smiles up at the stars.
“I find that I am extremely happy,” he says. “It is a sensation I had forgotten.”
> force | Drink. | stones_a2s9 | needs:4
> truth | Laugh. | stones_a2s9
> quiet | Listen to the fiddle. | stones_a2s9
> mercy | Help him sit. | stones_a2s9

=== stones_a2s9 | A Dance
Bold asks the Elder to dance. He does it with an agonised blush, holding out one huge hand, and she takes it. She is stiff, and shy, and her knee is bad. They go round the fire in a clumsy sedate waltz, to the two-stringed fiddle, and the whole camp holds its breath. The Elder’s face is solemn. Her silver comb is crooked. After a minute, she is smiling.
“I have not danced,” she says, “since the Academy.”
“I haven’t either,” says Bold. “I’m rather bad.”
“You are very good,” says the Elder.
“I stood on your foot.”
“I did not notice.”
They turn. They turn again. The camp has begun to clap in time. Sarnai, who has been lying on her stomach by the fire, throws a handful of dried apricots in the air. Temur is laughing.
Hao Lan is in tears. She has a pencil in her hand. She is not writing.
> force | Cheer. | stones_a2s10
> truth | Join the circle. | stones_a2s10
> quiet | Watch. | stones_a2s10
> mercy | Take Hao Lan’s hand. | stones_a2s10 | bond:hao+1

=== stones_a2s10 | Twelve Voices
You sleep among the stones. It is the custom. The Listeners roll themselves in felt and lie down in the lee of each, with their faces to the east. The fires die. The stars wheel. The twelve new stones hum their chord, and the others join, row on row, until the whole rise is a single enormous breath, in and out.
You lie on your back and listen. You are no longer tired. You are a part of the sound. You feel the seed in your chest humming with it, steady and warm, no longer afraid. You think you could lie here for ever.
Beside you, Chimeg stirs. She puts her hand on your wrist in the dark. She taps once. A pause. Three times, quickly.
A joke.
You laugh, a silent shake, and she shakes with you. The stones hum. The night passes. In the morning there is dew on the grass, and one of the stones, the tallest, has a bird singing on its crown.
> force | Sit up. | stones_close | +stones_lifted
> truth | Greet the day. | stones_close | +stones_lifted
> quiet | Stay still. | stones_close | +stones_lifted
> mercy | Hand Chimeg a cup. | stones_close | +stones_lifted

// ---------------------------------------------------------------- a3: the dead stone
=== stones_a3s1 | The Silent One
It stands in the third row from the front, about half-way along: a stone like any other. It is grey and pitted and a little taller than a man. It has lichen on its north face and a bird’s nest on its crown. It looks, in every way, exactly like its neighbours.
It does not hum.
You notice it first as an absence. The stones on either side of it are singing, and between them there is a hole in the chord, a place where a voice should be. It is like a missing tooth. Once you have seen it you cannot stop looking.
“Whose is that?” you ask.
Bold hesitates. His round face goes red to the ears. “Nobody’s,” he says.
“Everyone’s stone is somebody’s.”
“Not that one.” He shifts his weight. “It was put up forty years ago. For a man called Sechen. Grandmother’s brother.” He drops his voice. “He was a coward. He deserted the Order. He sold a clan to the Garrison. When he died, nobody would say his name.”
> deceit | Ask what would happen if someone did. | stones_a3s2
> truth | Say a stone should not be left alone. | stones_a3s2
> quiet | Look at the stone. | stones_a3s2
> mercy | Ask if Chimeg minds. | stones_a3s2

=== stones_a3s2 | Sechen
Chimeg minds. She says so with a single sharp tap on Bold’s wrist, and then a long series of taps that Bold does not translate. He is flushing darker and darker. “She says she’s ashamed,” he says at last, in a muffled voice. “She says it’s her fault. She says she was a girl, and he was her big brother, and he taught her to ride. And then he did what he did. And she stood up in the Kurultai and said his name should be struck.”
“And it was.”
“And she has never forgiven herself.” He rubs his eyes. “She comes here at night, to his stone. She sits with her back to it. She says nothing. She doesn’t tap. She just sits.”
“For forty years?”
“Every night.”
You look at the old woman. She is sitting on her stool at the end of the row, small and straight and wrinkled, with her blind face turned toward the silent stone.
“I wonder,” you say slowly, “whether he would speak, if someone spoke for him.”
> deceit | Offer to try. | stones_a3s3
> truth | Ask Bold. | stones_a3s3
> quiet | Wait. | stones_a3s3
> mercy | Ask what he was like. | stones_a3s3

=== stones_a3s3 | What He Was Like
“Funny,” says Bold, after a long pause. “That’s what everyone says, when they dare. He was funny. He used to ride standing on the saddle, with his arms out. He could mimic anybody. He did the Matriarch once, at a feast, so well she laughed till she was sick.” His hands are twisting. “And then he went to the Garrison. He took a clan. He sold them for a thousand silver and a pardon. They were hanged.”
“Why?”
“Nobody knows.” The big young man looks wretched. “He never said. He came home, and he was quiet. And then one day he walked out onto the grass and didn’t come back. They found him at the river, three days later. He had drowned himself.”
There is a long silence. The stones hum, to left and right, and between them is the gap.
“I think,” you say, “that he was a man who needed forgiving.”
Bold stares at you.
“I think he is still waiting,” you say.
> deceit | Make a plan. | stones_a3s4
> truth | Ask Chimeg. | stones_a3s4
> quiet | Sit by the stone. | stones_a3s4
> mercy | Hold Bold’s shoulder. | stones_a3s4

=== stones_a3s4 | Borrowing a Voice
“A stone can’t be made to sing,” says Bold. “It has to want to. Unless—” He stops.
“Unless?”
“Unless someone lends it a voice.” He is looking at his boots. “It’s a very old trick. A Stone-Singer can sing a dead person’s note, if she knew them. She puts her own voice in the stone, and it takes the shape. It works for a while. A night. A week.” He looks up. “It has to be someone who loved him.”
“Chimeg.”
“She can’t. She’s deaf.” Bold’s voice cracks. “She can’t hear herself. She doesn’t know what note to sing.”
You look at the old woman. She is sitting with her face to the wind.
“Then somebody else must find the note,” you say.
“Who?”
You think. You think of a man in a grey robe, with a pipe in his sleeve. You think of the thing he said on the barge: that a rule is only kind if it holds.
“Duan Wuyi,” you say. “He can mimic anyone.”
> deceit | Find him. | stones_a3s5
> truth | Ask him. | stones_a3s5
> quiet | Think. | stones_a3s5
> mercy | Warn him. | stones_a3s5

=== stones_a3s5 | The Mimic
“I can do a very passable Admiral,” says Duan Wuyi, modestly. “And a fair Inspector Fang.” He is sitting by a dung-fire with a cup of tea, and has been asked a question, and has put on his most judicious expression. “I have not mimicked a Steppe rider before. It would be a stretch.”
“It would only be one voice.”
“It would be a voice I have never heard.” He sets down the cup. “I should need to know him.”
“Chimeg can tell you.”
“She is deaf.”
“She taps.” You show him your wrist. “Two for yes. One for no. Three for a joke.”
He regards your wrist with a faint, dry, delighted smile. “Then I shall conduct an examination,” he says. “By the rules of the Seventh Chancery. Counsel and witness. I have a great love of cross-examination. It is the nearest I have come to prayer.”
He rises, and straightens his torn robe, and goes to find the old woman.
> deceit | Follow. | stones_a3s6
> truth | Watch. | stones_a3s6
> quiet | Stay. | stones_a3s6
> mercy | Wish him luck. | stones_a3s6

=== stones_a3s6 | Counsel and Witness
It takes three hours. They sit opposite each other on the grass, the thin grey Censor-General and the tiny brown Stone-Singer, with their knees nearly touching, and the questions go back and forth. Duan asks, aloud, in his mild precise voice. Bold translates, in a low murmur, the taps of the old woman’s finger on the Censor’s sleeve. Hao Lan takes it all down.
Was he tall? Two taps. Was he loud? One. Did he laugh with his head thrown back? Three. Three. Three. A joke. Did he sing? A long pause. Two. Slowly. A rueful two.
“Ah,” says Duan. “He sang.”
Two.
“What did he sing?”
Chimeg is silent for a long time. Then she lifts her free hand and does something with it. She puts her fingertips together, and draws them slowly apart, and lets them fall: a rising and falling. She taps three times, very softly, on the Censor’s knuckle. Then twice.
“A lullaby,” says Bold, in a thick voice. “He sang her one. When she was small. It was a horse-song. He sang it to put her to sleep.”
> deceit | Ask if she remembers it. | stones_a3s7
> truth | Wait. | stones_a3s7
> quiet | Bow your head. | stones_a3s7
> mercy | Touch Chimeg’s shoulder. | stones_a3s7

=== stones_a3s7 | The Horse-Song
She does not remember it. She says so, in a series of taps, with her blind face turned away. She was five. The tune is gone. She remembers only the shape of his hands, and the smell of his coat, and that it was very sad.
Bold sits with his head bowed.
“There’s a way,” says Hao Lan, quietly. She has been scribbling in her notebook. “It’s a horse-song. There are only so many. The clans each have a few. I’ve been cataloguing them since the Grass Line.” She turns a page. “It would be one of seven. If we sang all seven, and she tapped the right one…”
It takes an hour. Bold sings the first four, in his clear tenor. Temur sings the fifth. Sarnai sings the sixth, off the note, with huge relish. They come to the seventh. It is Duan who sings it. He has never sung. His voice is a cracked reedy baritone. But the tune is sweet, and slow, and rises in a long swooping curve like a horse running. It has no words.
Chimeg’s hand flies to her mouth.
She taps. She taps and taps and taps. Two. Two. Two. Two.
> deceit | Let him go on. | stones_a3s8
> truth | Weep. | stones_a3s8
> quiet | Watch her. | stones_a3s8
> mercy | Hold Bold. | stones_a3s8

=== stones_a3s8 | A Voice for Sechen
They do it at midnight. They stand round the silent stone in a ring: Chimeg, with her hand on its flank; Bold; Temur; Sarnai; a score of Listeners come out of their tents in the dark. Duan Wuyi stands at the head. He has taken off his spectacles. He looks old and frail and ridiculously dignified.
He sings the horse-song.
He sings it slowly, in a voice that is not his own. He puts a little of Sechen into it, as he has guessed him: the swagger, the warmth, the careless, ruinous charm. The tune curls out over the rise, and the stone, which has been silent for forty years, begins to shiver.
The hum comes up from the root. It is low and uncertain. It is the hum of a man clearing his throat. It finds the tune, and holds it, and the two voices, the living and the dead, go on together in a wavering line. When the song ends, the stone goes on humming.
Chimeg is on her knees, with her forehead against it.
> deceit | Step back. | stones_a3s9
> truth | Cover your eyes. | stones_a3s9
> quiet | Hold your breath. | stones_a3s9
> mercy | Weep with her. | stones_a3s9

=== stones_a3s9 | It Will Not Last
“A night,” says Bold, in a whisper. “It will last a night. Perhaps a week. Then it will go quiet again.” His broad face is wet. “It has to be sung every day.”
“Then we shall sing it every day,” says Duan Wuyi.
He has put his spectacles back. He is leaning on Temur’s arm, grey with fatigue. His voice is thin, but quite steady.
“It is a most unprofessional thing,” he says. “To pretend to be a dead man. To fabricate the evidence of a voice. If this were a court I should have to censure myself.” He smiles. “I find I do not care.”
Chimeg has taken his hand. She is tapping on the back of it, over and over, gently, with one finger. Two. Two. Two. Two.
“She says thank you,” says Bold.
“I know,” says Duan. “I am quite fluent.”
He pats her hand. “Tell her,” he says, “that I am very much obliged to have been of use.”
> deceit | Help him sit. | stones_a3s10
> truth | Bow to Chimeg. | stones_a3s10
> quiet | Look at the stone. | stones_a3s10
> mercy | Fetch tea. | stones_a3s10

=== stones_a3s10 | A Borrowed Note
In the morning, Chimeg is sitting with her back to Sechen’s stone. She is humming. It is a thin cracked sound, quite out of tune, and it is the first time in forty years she has made a sound in the presence of the dead. She doesn’t know she is doing it. She is looking at the sunrise with her blind face lifted, and her small hands folded in her lap.
The stone hums with her.
They are in harmony. They are, for a moment, perfectly in tune. She stops, startled, her mouth open. The stone stops. She hums again, a single wavering note. The stone answers.
She laughs. She laughs and laughs. She slaps the ground. Bold, coming across the rise with a bucket, stops dead, and puts the bucket down, and sits on it.
“She can hear him,” he whispers.
“Not with her ears.”
“No,” says Bold. “But she can hear him.”
> deceit | Leave them. | stones_close | +stones_tuned
> truth | Smile. | stones_close | +stones_tuned
> quiet | Bow. | stones_close | +stones_tuned
> mercy | Go and sit beside her. | stones_close | +stones_tuned

// ---------------------------------------------------------------- a4: the night among the stones
=== stones_a4s1 | A Place to Sleep
“It is allowed,” says Temur, with a shrug. “It is more than allowed. It is the custom, for a stranger who is offered the Steppe. You spend a night with the dead. It is how they know you.” He glances at the sinking sun. “You will not be harmed. It will be strange.”
“Strange?”
“You may hear things.” He scratches his nose. “I should not eat much. And I should lie facing east.”
You are given a felt blanket and a leather flask of water. Bold shows you to a place at the centre of the rise, a hollow between four stones, where the grass is thick and soft. He lays a hand on each of the four, in turn, and murmurs. “They are Orhan, and Little Wind’s mother, and a man named Stubborn, and a woman who died of a fever. They’ll look after you.”
He backs away. He is blushing.
“Good night,” he says. “Don’t be frightened.”
> quiet | Lie down. | stones_a4s2
> truth | Thank him. | stones_a4s2
> mercy | Say goodnight to the stones. | stones_a4s2
> inquiry | Ask what you will hear. | stones_a4s2

=== stones_a4s2 | Dusk
It gets dark slowly. The sky goes through all its colours: orange, rose, a long pale green, a deep clear violet. The first star comes out in the east, directly above the rise, very large and steady. The wind drops. The grass stops its hissing. The hum of the stones, which has been a distant murmur all day, comes closer, as a crowd comes closer when it falls silent, and listens.
You lie on your back, with your blanket under your head and your feet toward the west. Four tall shapes stand round you, black against the stars. They lean very slightly inward.
There is no sound but the hum.
You feel it in the ground. You feel it in your bones. After a time you cease to hear it, as you cease to hear your own heartbeat. It becomes the substance of the air, the thing you breathe. Your eyes close. Your limbs grow heavy.
Somewhere very far away, a voice says your name.
> quiet | Listen. | stones_a4s3
> truth | Answer. | stones_a4s3
> mercy | Stay still. | stones_a4s3
> inquiry | Ask who. | stones_a4s3

=== stones_a4s3 | The First Voice
It is not your name. It is a name you do not use, that has been lying under the surface of you for years. It is the name of a child who reached for a lamp. It is said very softly, with great affection, by a woman’s voice, in a language you did not know you knew.
You are standing. You do not remember rising. You are standing in the middle of the rise, in the dark, among the stones, and they are all turned toward you, and they are all humming, and the hum is a song.
It is the lullaby.
It is the one from the jar. It is the one Mother Hsu sang, and Bao Er, and Nurse Bei on the hill road. It is the oldest song you know. But it is being sung by a thousand voices, at once, in perfect harmony, from the ground, from the sky, from the grey stones, and the grass, and the stars, and it goes through you like a river.
You are weeping. You do not know why.
> quiet | Stand. | stones_a4s4
> truth | Sing. | stones_a4s4
> mercy | Kneel. | stones_a4s4
> inquiry | Ask whose voice it was. | stones_a4s4

=== stones_a4s4 | Orhan
A man is standing in front of you. He is tall and heavy and slow, in a coat of undyed wool. His face is broad and weathered, with a drooping moustache. He smells of horse. He is not quite there. You can see the stone through him, a pale silhouette. He regards you gravely.
“Evening,” he says.
His voice is the voice from the first touch, deep, gentle, a little rusty. It comes from the ground. It comes from the air. It comes from your own chest.
“Good evening,” you say.
“It’s a fine night.” He looks at the stars. “The grass is good this year.”
You nod. You are not frightened. You are, if anything, absurdly shy.
“You’re the one who asks,” says Orhan. He says it quite without ceremony, as one says: you’re the one with the cart. “They’ve been talking about you for a week. The wind’s been awful. It won’t shut up.” He scratches his moustache. “I thought I’d come and see.”
> quiet | Greet him. | stones_a4s5
> truth | Ask how. | stones_a4s5
> mercy | Ask if he is lonely. | stones_a4s5
> inquiry | Ask what it is like. | stones_a4s5

=== stones_a4s5 | What It Is Like
“Like standing in a doorway,” says Orhan. He thinks about it. He says it with the slow care of a man who has not been asked before. “You’re not in the room and you’re not outside. You can hear both. It’s a bit draughty.” He smiles. “But I like it. I never did like being in a room.”
“Do you see us?”
“I see the shapes. I feel the warmth. I know the voices.” He tilts his head. “It’s a good deal like being an old man at a window. I don’t get out much. But I know what’s going on.” His voice drops. “I know what’s happened to the north rows.”
The stones hum.
“I’d be obliged,” says Orhan, “if someone would see to it.”
“I will.”
“I know you will. The wind said.” He almost laughs. “I’m just being polite.”
> quiet | Smile. | stones_a4s6
> truth | Ask about the north rows. | stones_a4s6
> mercy | Ask if they are in pain. | stones_a4s6
> inquiry | Ask who else is here. | stones_a4s6

=== stones_a4s6 | Everyone
They come out of the stones one at a time. They stand in the grass, round you, in a wide circle: men and women and children, pale and tall in the starlight, in felt coats and white hats. Some you could touch. Some are no more than a glimmer. There are old men with long beards. There are women with babies at their breasts. A boy of six holds a toy horse. A girl of nine carries a bucket.
There are hundreds. There are, you realise, nine hundred and ninety-nine.
Nobody speaks. They stand in the hum, and the hum is a chord, and the chord is a welcome. A woman at the front, very old, bowed, with a face like a walnut, lifts her hand. It is Chimeg’s mother.
“We’ve been waiting,” says Orhan. “Not for you in particular. For anyone. For the grass to be heard.”
“I’m listening,” you say.
“Yes,” says Orhan. “That’s what we noticed.”
> quiet | Bow. | stones_a4s7
> truth | Say your name. | stones_a4s7
> mercy | Weep. | stones_a4s7
> inquiry | Ask what they want. | stones_a4s7

=== stones_a4s7 | What the Dead Want
“Names,” says Orhan. “It’s all anyone wants. We’ve got our own, mostly. Forty-one of us haven’t.” He gestures at the pale rows to the north. “They were killed in a silence. They don’t remember. They’re standing there in the ice with no one to say.”
A small pale shape detaches itself from the circle. It is a girl, perhaps eight months old, in a shawl. She is not a girl. She is a light, like a candle in a window, the size of a hand. She hovers in front of your face.
“That’s Little Wind,” says Orhan. “She’s a bit of a handful.”
The light dances. It touches your cheek, a feather-brush, cold and sweet.
“She doesn’t have words,” says Orhan. “But she’s got a lot to say.”
You hold out your hands. The light settles on your palm. It is no weight at all. It hums, very faintly, the note of a lullaby.
> quiet | Hold her. | stones_a4s8
> truth | Promise. | stones_a4s8
> mercy | Hum back. | stones_a4s8
> inquiry | Ask how. | stones_a4s8

=== stones_a4s8 | A Promise
“You’ll have to carry them,” says Orhan. “The forty-one. You can’t say them all at once. They’ll be a weight.” He pauses. “But I think you’re built for it. It’s what the seed is for.”
You think of the black seed in your breastbone, and the cards in your sleeve, and the Library.
“Carry them where?”
“To the one who decides.” He nods east. “Tamar. She’s got a stone of her own. It’s at the Winter Camp. It’s the Door.” He smiles at your look. “That’s what we call it. It’s where the names go in.”
“And then?”
“Then they’re home,” says Orhan. “It’s a good deal like being at a window. But better.”
The circle of the dead is thinning. One by one they melt back into the stones. The children go last, laughing. A boy waves his toy horse. Orhan lifts a broad hand.
“Good night,” he says. “Mind how you go.”
> quiet | Say goodnight. | stones_a4s9
> truth | Promise again. | stones_a4s9
> mercy | Bow. | stones_a4s9
> inquiry | Ask him to stay a little. | stones_a4s9

=== stones_a4s9 | Forty-One
You wake at dawn in the hollow between the four stones. Dew has settled on your blanket. The sky is pale gold. The air is cold and clean. A lark is singing. The stones stand round you, grey and quiet and still, as ordinary as rocks.
In your left hand, curled in the palm, you find that you are holding something. You open your fingers. It is a tiny pale bead of what looks like frozen milk, the size of a seed-pearl. It is faintly warm. It hums.
You close your hand.
There are forty more. You know it as you know your own name. They are waiting in the north rows, in the pale stones, in the silence. You will have to find them. You will have to carry them, one at a time, to a stone at the Winter Camp that is called the Door.
Bold is at the edge of the hollow with a bucket of steaming milk-tea. He has been there, you realise, for some time. His round face is anxious.
“Did you hear them?” he says.
> quiet | Take the bucket. | stones_a4s10
> truth | Say yes. | stones_a4s10
> mercy | Show him the bead. | stones_a4s10
> inquiry | Ask how many he heard. | stones_a4s10

=== stones_a4s10 | Little Wind
“Her,” says Bold. He is staring at the bead in your palm. He doesn’t touch it. He puts down the bucket very slowly and goes down on his knees in the dew. “That’s her. That’s Little Wind.” His voice shakes. “She was my cousin. She was eight months old. I carried her to the river on my shoulders, once. She pulled my hair.”
He puts out one huge finger, and touches the bead, very gently.
It hums. It is, you could swear, a giggle.
Bold laughs, a great gulping sob of a laugh. He bends forward until his forehead touches the grass. “I’m sorry,” he says. “I’m sorry, I’m sorry. I should have carried you further.”
You sit with him. After a time you put the bead into a pocket over your heart, and it is warm.
“Where do I take her?” you ask.
“Tamar,” says Bold, into the grass. “At the Winter Camp. At the Door.”
> quiet | Help him up. | stones_close | +stones_slept
> truth | Say you will. | stones_close | +stones_slept
> mercy | Hold him. | stones_close | +stones_slept
> inquiry | Ask how far. | stones_close | +stones_slept

// ---------------------------------------------------------------- hidden: Mengjiao
=== stones_h1 | A Voice You Know
Chimeg listens to your question with her head tilted. She does not tap. She stands for a long time, a small old woman in a white hat, her blind face lifted to the wind. Then she turns and walks away from you, along the row, with the sure steady step of a woman who has walked it ten thousand times.
She stops at a stone near the middle of the third row. She puts out her hand. She waits.
Bold, at your elbow, whispers: “She says come.”
You come. It is a stone like any other: grey, pitted, ordinary. But the hum that comes from it is different. It is not a chord. It is not a single note. It is a thread, a fine bright wavering thread of sound, rising and falling, that seems to come from a long way down, as a voice comes up a well.
It is saying something.
You put your palm on the stone. You close your eyes.
You hear a woman’s voice, tired and gentle and amused, speaking names.
> inquiry | Listen. | stones_h2
> truth | Ask who. | stones_h2
> mercy | Hold on to the stone. | stones_h2
> quiet | Breathe. | stones_h2

=== stones_h2 | Nine Hundred and Forty
It is a litany. It goes on and on, in an even unhurried murmur, with a pause between each. It does not repeat. Each name is a different one: a man’s, a girl’s, a child’s, in a dozen dialects, a dozen scripts. There is no pattern. They are the names of the sealed, and the voice says them one by one into the dark.
“...Wen Sui. Tao Mei. Zhou Ke-ming...”
You know the voice. You have never heard it. You know it as you know the sound of your own breath. It is a low warm tired alto, with a flat dry humour in it, and it is saying a name every four seconds, as if it had been saying them for a very long time and did not mean to stop.
Behind you, someone makes a small sound. It is the Elder. She has come across the rise without being noticed, and is standing at your shoulder, with both hands pressed over her mouth.
“Mengjiao,” she whispers.
“...Liu Hao. Ma Fei...”
> inquiry | Hold her. | stones_h3
> truth | Tell her to listen. | stones_h3
> mercy | Step aside. | stones_h3
> quiet | Hold the stone. | stones_h3

=== stones_h3 | A Sister’s Voice
The Elder puts her hand on the stone. She does it slowly, like a woman touching the wall of a sickroom. Her fingers are shaking so badly that they rattle on the rock. Her face is grey. Her eyes are closed.
The litany goes on. It does not stop. It does not hear. It is not addressed to her. It is a voice speaking to the dark, a thousand miles away, in a mist, in a mountain, at the bottom of a hole. It is the voice of someone doing her duty.
“Seventeen hundred and six,” says the Elder, softly. “She’s on seventeen hundred and six.”
“Temur said nine hundred and forty.”
“That was a week ago.” The Elder swallows. “She does three hundred a day.” Tears slide down her face. “She is working very fast.”
She leans her forehead against the stone.
“Mengjiao,” she says. “It’s Wanru. I’m coming.”
The litany falters. It halts, half-way through a name. There is a silence in the stone that lasts for three heartbeats.
A voice says, clearly, very faint, as if from the other end of a long tube: “...Wanru?”
> inquiry | Hold your breath. | stones_close | +stones_heard_sister
> truth | Step back. | stones_close | +stones_heard_sister
> mercy | Touch the Elder’s back. | stones_close | +stones_heard_sister
> quiet | Close your eyes. | stones_close | +stones_heard_sister

// ---------------------------------------------------------------- close
=== stones_close | The Rise at Dawn
The sun clears the grass. The rise is flooded with gold. Nine hundred and ninety-nine stones cast their long blue shadows west, and hum, and the larks are singing, and a pale mist is lifting off the stream. Everything is washed and quiet and new.
+[how] stones_named | You hummed a lullaby to a stone for a baby, and it answered.
+[how] stones_lifted | You helped raise twelve fallen stones, and Chimeg sat with her forehead against her ancestress.
+[how] stones_tuned | Duan Wuyi sang a dead man’s horse-song, and Chimeg hummed with her brother for the first time in forty years.
+[how] stones_slept | You slept among the dead, and a boy’s toy horse waved at you from the dark.
+[how] stones_heard_sister | A voice in a stone stopped halfway through a name and said: Wanru?
Chimeg sits on her stool at the end of the row, in the sun. Her hands are folded in her lap. She is smiling.
Bold brings her a bowl of tea. She takes it. She taps his wrist, twice, and then reaches out, quite deliberately, and finds your hand, and puts something into it. It is a stone, a small round pebble of grey granite, polished smooth. It hums.
“It’s for your pocket,” says Bold. “It’s a listening-stone. It means: she’s heard you.”
You close your fingers. It is warm.
Chimeg taps your wrist, once. Then she lifts her hand, and makes a small rising gesture, like a bird going up.
“She says,” says Bold, “the grass is good this year.”
> truth | Thank her. | stones_close2 | +b4q_stones
> mercy | Bow. | stones_close2 | +b4q_stones
> quiet | Smile. | stones_close2 | +b4q_stones
> inquiry | Ask Bold how the stones will be tended. | stones_close2 | +b4q_stones

=== stones_close2 | Leaving the Rise
You ride away in the late morning. Bold walks beside the cart for the first mile, with his hand on the tailboard. He doesn’t say much. At the foot of the rise he stops, and stands there with his big ears red and his arms hanging, and waves, shyly, with the whole of one arm.
You look back from the next hill. The rise is a long low silhouette against the sky. The stones are small and black and stand in their rows, like people at a wedding. The hum reaches you a long way off, faint and sweet.
Hao Lan is writing. She has been writing since sunrise. “It is a wonderful place,” she says. “I have forty pages. I have a map. I have three songs and a recipe for fermented milk.” She looks up. “I do not know where to put the feeling.”
“Put it in the margin,” says the Elder.
“There isn’t room.”
“Then write smaller,” says the Elder, gravely. “It is what I did.”
Hao Lan laughs, and takes up her pen.
> truth | Ride on. | hub_b4_a | bond:hao+1
> mercy | Look back once more. | hub_b4_a | bond:hao+1
> quiet | Hold the pebble. | hub_b4_a | bond:hao+1
> inquiry | Ask Temur what is next. | hub_b4_a | bond:hao+1

`,
  scenarios: String.raw`
$ SU_STONES_HUM | trust+3 respect+3 fear-2 | elder | The Elder sits among the Singing Stones and hears the dead of a people she never knew.
hostile: A thousand stones, and every one a funeral. I was brought up to think of the dead as an account to be closed. These people think of them as neighbours.
wary: I asked whether the stones were sad. Chimeg tapped my wrist twice, which I am told means no. She tapped it again and I am told that means not yet.
neutral: I put my palm on a stone and it hummed. I felt something move in the hand I signed with. It was not a pain. It was more like being forgiven by a piece of furniture.
warm: There is a stone with my sister’s note in it. I did not know she could be heard from so far. I have not told you what I felt. I will tell you when I can say it in a sentence.
devoted: I should like to be buried standing, with my face to the east. I have not thought about being buried before. I find that I would not mind it here.
`,
  remarks: String.raw`
% stones_chimeg_later | since:b4q_stones>=4 | gu | Chimeg taps my wrist when I am about to say something stupid. It is surprisingly reliable. I now have a bruise.
% stones_bold_later | since:stones_lifted>=6 | ren | Bold is the grandson. He is twenty, and strong, and he has never stopped smiling since we raised the stones. I think no one had ever helped him before.
`,
};
