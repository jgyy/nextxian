import type { Arc } from "../types";

/**
 * Book Three, arc thirteen: the Tide-Door. The Drowned Library, the Concord's Annex of Struck Leaves, stands under the harbour and
 * opens once a month at the lowest ebb. Four ways in, each belonging to someone the player has met: the tide-door under the
 * Wall with Qiu's lamp and Ah Zhi's boat (a1, truth), the miners' door at the end of Shu Ning's drift with the luck-charm
 * (a2, force), the Fifth Floor Gate through the Tidewall Chancery's cellar on a forged pass (a3, deceit), and a swim down the
 * flooded stair with Lu Yan's reed-and-breath (a4, quiet). All four come up in the Reading Hall. A hidden route follows Ke-er.
 * Cast: Qiu, Ah Zhi, Shu Ning, Lu Yan, Hao Lan, Gu, Ren Qiao, the Reading Hall's clerks.
 */
export const tidedoor: Arc = {
  id: "tidedoor",
  name: "The Tide-Door",
  scenes: String.raw`
=== tidedoor_entry | The Spring Ebb
On the last night of the month the sea goes out farther than anyone living can remember. The harbour floor is bare to the Wall. The black boats lie on their sides in the mud, and the weed hangs from their keels like hair. A wind blows from the empty bay, cold and strange, smelling of old paper.
Qiu flashes from the spur. Three short, two long, three short, two long. She has not stopped since sundown.
You stand at the foot of the Wall with the whole of your party: the Elder in her cloak, Gu with a lantern, Ren Qiao with his sword, Hao Lan with her satchel. Mei Qiu has come, though nobody asked. She is leaning on her bar. Ah Zhi is here, with a new rowing-boat on a handcart. Lu Yan has brought a bag of herbs and a coil of bamboo reeds.
“It opens at the third bell,” says Shu Ning, who has come up out of the ground as if by magic, black to the elbows. “Once. For an hour. You will want to be inside before the water turns.”
The Library has four doors. You have the keys to all of them.
> truth | Go in by the tide-door at the foot of the Wall, with Qiu’s lamp. | tidedoor_a1s1
> force | Go in by the miners’ door at the end of Shu Ning’s drift, with the bead. | tidedoor_a2s1 | needs:3
> deceit | Go in by the Fifth Floor Gate, through the Chancery’s cellar, on a forged pass. | tidedoor_a3s1
> quiet | Go down the flooded stair on one breath, with Lu Yan’s reeds. | tidedoor_a4s1
> inquiry | Ask Ke-er, through the last block on the lowest course, which door she would take. | tidedoor_h1 |  | harbour_ke_er_spoke | Ke-er has not yet spoken to you.

// ---------------------------------------------------------------- a1: the tide-door
=== tidedoor_a1s1 | The Foot of the Wall
The tide-door is the last block on the lowest course of the Wall, the one that has moss on it. But it is not the block. It is beside it. A hand’s breadth to the left, hidden under a skin of weed, there is a second stone, and when the sea has gone out far enough, the weed dries, and curls, and falls away, and the stone is not a stone but a slab of black wood, bound in iron, with a ring set in it.
Ah Zhi’s boat is on its cart. She has lashed a lantern to the bow. “It’s a mile of water on the other side,” she says. “I’ve heard. A flooded hall. A boat is as good as a bridge.”
Qiu is on the spur, flashing. You can see her signal over the roofs, a small bright pinprick. Three short. Two long.
Mei Qiu puts her hand on the ring. She looks at you.
“Ready?”
> truth | Nod. | tidedoor_a1s2
> mercy | Look at the Elder. | tidedoor_a1s2
> quiet | Say nothing. | tidedoor_a1s2
> inquiry | Ask Mei what she expects. | tidedoor_a1s2

=== tidedoor_a1s2 | The Door Opens
It opens with a groan like a ship’s timber. A tide of cold air breathes out, and with it a smell you will not forget: old paper, wet stone, tallow, and something sweeter, like the inside of a very old book. The door swings inward on its iron hinges. Beyond it is a stair, wide and shallow and cut from pale stone, running down into dark. The lowest steps are underwater. They glint in the lantern light.
Ah Zhi launches the boat on the black pool at the foot. It floats. She holds it with a boathook while the party climbs aboard, one by one, with the Elder first, carried like a parcel. Mei Qiu comes last, her bar across her knees.
Nobody speaks. The water laps at the stair. A drop falls from the roof.
“Right,” says Ah Zhi, in a whisper. She takes up her sweep. “Hold on to something.”
She pushes off.
> truth | Hold the lantern high. | tidedoor_a1s3
> mercy | Take Gu’s hand. | tidedoor_a1s3 | bond:gu+1
> quiet | Watch the roof. | tidedoor_a1s3
> inquiry | Count the strokes. | tidedoor_a1s3

=== tidedoor_a1s3 | A Stair Under Water
The stair goes down for a long time. You count the steps as they pass under the keel, pale shapes in the black, thirty, fifty, a hundred. The roof rises. The walls recede. The lantern shows you carved columns, and archways, and a dim gleam of mosaic on the stone. It is a very grand stair, built by someone who meant it to be walked down by many feet. It is carpeted with silt.
Then the roof lifts away entirely, and the lantern’s light fails to reach it, and you are in a space too large to see. The water spreads on every side. A sound comes from nowhere, a vast slow dripping, like the ticking of an enormous clock.
Ah Zhi stops rowing. The boat glides on its own way.
“Look,” she whispers.
Far off, in the dark, there is a light.
> truth | Steer toward it. | tidedoor_a1s4
> mercy | Hold still. | tidedoor_a1s4
> quiet | Dim the lantern. | tidedoor_a1s4
> inquiry | Ask what it is. | tidedoor_a1s4

=== tidedoor_a1s4 | Lamps on the Water
There are hundreds. They float on the black water, each a tiny flame in a paper boat, drifting in slow circles. They stretch away in every direction, into the dark, lit from within by the glow of their own wicks. They are the colour of ripe pears. They rock on the swell of your wake and turn, and turn, and do not go out.
“Lanterns,” says the Elder, in a hush. “The Festival of Floating Names.”
“But that was in Qinglian.”
“It was in every city of the Concord. They are all sent to the sea. And the sea,” she says, with a shake in her voice, “has been sending them here.”
Gu leans over the gunwale. He lifts a paper boat from the water. On its sail is a name, in a child’s hand. The wick burns steadily.
“They’re still lit,” he says.
“They have been lit for a hundred and eighty years,” says Hao Lan. She sounds close to tears. “Every year. Somebody lights one. Somebody sends it. They end up here.”
> truth | Read the name. | tidedoor_a1s5
> mercy | Set it down. | tidedoor_a1s5
> quiet | Hold the lantern low. | tidedoor_a1s5
> inquiry | Ask where the current goes. | tidedoor_a1s5

=== tidedoor_a1s5 | The Current
“Down,” says Shu Ning, who has come in a second boat. Her cold voice is flat. “It all goes down. There’s a drain at the centre of the hall. The tide pulls it. That is why the lanterns circle.” She points her lamp. “The Library is not a ruin. It is a drain.”
You look. Far ahead, among the circling lights, the water has a slow dark swirl in it, wide as a courtyard. The lanterns drift toward it, one by one, and vanish, with a faint hiss.
“A drain for what?”
“Names,” says Shu Ning. “A drain for names.” She rubs her face. “I measured it from the tunnel. It goes down a mile.”
“To the abyss?” says Mei Qiu.
“To something.” Shu Ning’s eyes are bright. “I don’t think it’s the abyss. It is much too far from the mountain. But it goes down. And it takes everything the Concord has struck.”
> truth | Steer away from the swirl. | tidedoor_a1s6
> mercy | Hold the Elder steady. | tidedoor_a1s6
> quiet | Watch the lamps. | tidedoor_a1s6
> inquiry | Ask where the lamps go. | tidedoor_a1s6

=== tidedoor_a1s6 | The Drowned Hall
At last the lantern light finds a wall: a high pale cliff of stone, pierced by windows and arches and galleries, rising out of the black water to a roof lost in shadow. It is a great hall. It is the largest room you have ever seen. Its columns are as wide as houses. Its floor is a lake. Desks stand in rows in the shallows, their legs awash, each with a little lamp, and every chair is turned toward the water.
Ah Zhi brings the boat alongside a stone landing. A flight of steps leads up to a gallery above the flood. A door stands open at the top.
Beside it, on a bench, sits a figure.
It is very still. It is a clerk. It is a young man in a grey tunic, with his hands in his lap and his head bowed, and he has been there for a hundred and eighty years.
> truth | Land. | tidedoor_a1s7
> mercy | Greet him. | tidedoor_a1s7
> quiet | Hold the boat. | tidedoor_a1s7
> inquiry | Ask Qiu’s lamp what it shows. | tidedoor_a1s7

=== tidedoor_a1s7 | The Clerk on the Bench
He is not a corpse. He is something else, and it takes you a moment to understand what. He is a shape of paper. He is made of leaves, thousands of them, folded and pressed and layered, in the form of a man. The leaves are the colour of old tea. Each is covered with tiny writing. They rustle, very slightly, as you approach.
He lifts his head.
It has no face. Where the face should be there is a blank sheet, pale and smooth, and as you watch, a line of ink runs across it, like a vein. It spells a word. It spells: WELCOME.
Hao Lan makes a soft sound.
“The staff,” she says. “The Library’s staff. They stayed.” She puts her hand to her mouth. “They stayed at their posts. For a hundred and eighty years.”
The paper-clerk rises. He is slow, and stiff, and gentle. He bows.
He holds out a hand, made of rustling pages, and points to the door.
> truth | Bow to him. | tidedoor_a1s8
> mercy | Take the hand. | tidedoor_a1s8
> quiet | Follow. | tidedoor_a1s8
> inquiry | Ask his name. | tidedoor_a1s8

=== tidedoor_a1s8 | The Staff of the Annex
He cannot speak. He writes. When you ask his name, the ink runs across the blank sheet of his face and spells it, slowly, one character at a time. It is a plain name. It is the name of a man who copied a ledger. He is Under-Clerk Mo, of the Annex of Struck Leaves, third desk, Floor Seven. He writes that he has been waiting. He writes that he is sorry about the damp.
“Mo,” says Hao Lan, on a breath. “Mr Mo. Mr Mo’s grandfather.”
The paper-clerk inclines his head.
He leads you up the steps and through the door. Beyond it lies the Reading Hall proper: a vault of pale stone, lit by hundreds of small lamps, with rows of desks and chairs and a gallery running round the walls. At every desk sits a figure of paper. They are bowed over their work. They are writing, silently, in the air. They do not look up.
There are three hundred.
> truth | Walk in. | tidedoor_close | +tidedoor_by_water
> mercy | Greet them. | tidedoor_close | +tidedoor_by_water
> quiet | Hold your breath. | tidedoor_close | +tidedoor_by_water
> inquiry | Ask what they are writing. | tidedoor_close | +tidedoor_by_water

// ---------------------------------------------------------------- a2: the miners' door
=== tidedoor_a2s1 | The Bead
Shu Ning leads you down the iron ladder with a lantern in her teeth. The shaft is eighty feet. At the bottom she takes the lamp out of her mouth and says, “I don’t like to say it, but I’ve been practising what I am going to say to the door.”
“What are you going to say?”
“I don’t know.” She sets her jaw. “That’s why I’ve been practising.”
You walk the long tunnel in single file, with chalk arrows on the walls. The air is cool and wet. The sound of the sea comes through the rock, a deep slow pulse, like a heart. Gu walks close behind you. Ren Qiao is last, with a hand on his sword.
At the end of the tunnel, the great hall. The black pool. The wall of old masonry, glowing faintly. The low iron door with its ring of characters.
You take the bead from your neck.
> force | Go forward. | tidedoor_a2s2 | needs:3
> truth | Say a word to the door. | tidedoor_a2s2
> quiet | Hold the bead tight. | tidedoor_a2s2
> inquiry | Ask Shu Ning what she would say. | tidedoor_a2s2

=== tidedoor_a2s2 | Asking the Door
“Say hello,” says Shu Ning, in a strained voice. “It is a courtesy.”
“Hello,” you say, to the door.
There is no reply. The lamp flickers. Water drips from the roof. You step to the edge of the pool, and look at the hole in the middle of the iron: a round pin-prick the size of a coin, with a ring of characters around it. You hold the bead to it. It fits as if it had been made for it.
You push.
The bead slides in. There is a faint click, as of a latch lifting. The ring of characters begins to glow. One by one, from the bottom, clockwise, they light, the colour of embers: nine of them, in an old script, unreadable. At the ninth, the bead turns, of itself, a quarter turn to the left.
The iron door swings open.
> force | Look in. | tidedoor_a2s3
> truth | Step back. | tidedoor_a2s3
> quiet | Let Shu Ning look first. | tidedoor_a2s3
> mercy | Hold Gu’s shoulder. | tidedoor_a2s3

=== tidedoor_a2s3 | The Miners’ Stair
A stair, narrow and steep and spiral, goes up. It is hewn from the rock itself, with a rope for a handrail and a lamp-niche at every turn. The air that breathes out is warm. It smells of dust and wax and old paper. It is the smell of a place that has been closed for a long time and has not minded.
“It goes up,” says Shu Ning. “It must come out in the lower stacks.” She is staring up the shaft. “I’ve never seen a stair like this. It’s a perfect helix. Every step is the same height to a hair.”
“Is it safe?”
“No.” She grins. “Isn’t it wonderful?”
She puts her foot on the first step. A pale light blooms, softly, in the niche above. A second. A third. The stair lights itself ahead of you, step by step, until the whole spiral glows like a seashell.
Behind you, softly, the door closes.
> force | Climb. | tidedoor_a2s4
> truth | Look back. | tidedoor_a2s4
> quiet | Listen. | tidedoor_a2s4
> mercy | Take Gu’s hand. | tidedoor_a2s4

=== tidedoor_a2s4 | The Maker’s Hand
Halfway up the stair, Shu Ning stops. She lays her palm on the wall. She is holding her breath. “Feel that,” she says.
You put your hand on the rock. It is warm. Under your palm, very faintly, there is a vibration, like a purr.
“It’s alive,” says Shu Ning. “Not alive. Awake. It’s a seal.” She turns to face you, and her cold face is lit with something close to joy. “The whole stair is a seal. It’s one continuous inscription, running up the helix, in a single stroke. It would take a hundred years to cut. It is the most beautiful thing I have ever seen.”
She traces the line with her finger. It is a thread of glowing characters, thinner than a hair, running up the wall and out of sight.
“This is Ling’s,” she says. “Not the broken serpent. This is hers. This is what she was for.”
She is crying. She is not a person who cries. It seems to take her by surprise.
> force | Say nothing. | tidedoor_a2s5
> truth | Ask what it says. | tidedoor_a2s5
> quiet | Wait. | tidedoor_a2s5
> mercy | Hold her. | tidedoor_a2s5

=== tidedoor_a2s5 | What the Stair Says
“It says come in,” says Shu Ning. She wipes her face with her sleeve. “That is all. It says it in nine hundred languages, over and over, from the bottom to the top. Come in. Come in. Come in.” She laughs unsteadily. “It is an invitation. She made a door whose only purpose was to be opened by the right person.”
“Who?”
“Someone who would not be afraid of it.” Shu Ning looks at you. “Someone who said hello.”
The stair brightens. The inscription glows brighter under your palm, until it is a line of white fire. And then it begins to sing. It is not a sound. It is a vibration in the bones: a long low note, rising, sustained, like a held door.
Bao Er would know it. It is the first note of the lament.
Gu is staring about him with an open mouth. “Do you hear that?”
“We all do,” says Ren Qiao hoarsely.
> force | Climb on. | tidedoor_a2s6 | needs:3
> truth | Hum along. | tidedoor_a2s6
> quiet | Stand still. | tidedoor_a2s6
> mercy | Say thank you to the wall. | tidedoor_a2s6

=== tidedoor_a2s6 | The Lower Stacks
The stair ends in a circular room, with a door of plain oak. It is unlocked. You push it open, and the singing stops. You are standing in a corridor of shelves.
They stretch away on every side, taller than a house, in rows so long that their ends are lost in dark. Each shelf is crammed with leaves. They are bound in bundles, tied with thread, stacked in boxes, slotted in racks. Dust lies thick on them. A little water seeps along the floor. The air is perfectly still.
There is a lamp every ten paces, a tiny flame in a glass chimney. They are lit. They have been tended.
“Somebody is here,” whispers Ren Qiao.
“Somebody has always been here,” says a voice, very softly, from the dark.
It is a girl’s voice, high and clear. It comes from behind a stack of boxes at the end of the aisle.
> force | Draw your blade. | tidedoor_a2s7
> truth | Say hello. | tidedoor_a2s7
> quiet | Step back. | tidedoor_a2s7
> mercy | Hold up your lantern. | tidedoor_a2s7

=== tidedoor_a2s7 | A Reader
A girl of ten steps out from behind the boxes. She is thin, barefoot, and grey. Her hair is cut straight across her brow. She is dressed in a clerk’s tunic far too big for her, with the sleeves rolled to the elbow. She carries a little lamp. She stands in its glow, with a stack of leaves held to her chest, and looks at you gravely.
“You are not supposed to be in the Lower Stacks,” she says. “It is after hours.”
“I am sorry,” you say.
“It is all right.” She sets down her lamp. “I like visitors. I do not get many.” She considers you. “You are the one who wrote in the vault.”
Your mouth is dry. “How do you know?”
“I felt it.” She is perfectly matter-of-fact. “It was in the middle of the night. I was reading. All the leaves went warm at once.” She smiles. “It tickled.”
She holds out the leaves to you.
“I have been waiting to give you these,” she says. “They are yours.”
> force | Take them. | tidedoor_a2s8
> truth | Ask her name. | tidedoor_a2s8
> quiet | Look at the top leaf. | tidedoor_a2s8
> mercy | Kneel to her height. | tidedoor_a2s8

=== tidedoor_a2s8 | The Girl With the Leaves
“I do not have one,” says the child. “I had one, but it was struck.” She sets her lamp on a shelf. “They call me the Reader. It is not a name, it is a post.” She is perfectly composed. “I read the leaves, so that they are not lonely. There are a great many. It is slow work.”
She shows you the leaves. There are seven. They are old and brown, and each one is covered with tiny script. At the head of the first, in a large copperplate, is a name you know.
Qiu.
“There are others,” says the Reader. “Wen. Hao. Duan. A woman with an iron bar. A man with a knife.” Her small grey face is grave. “I have kept them dry. I thought, someday, someone will come for them.”
She puts the leaves into your hands. They are as light as feathers.
“It’s good that you came,” she says. “I was getting very tired.”
> force | Thank her. | tidedoor_close | +tidedoor_miners needs:3
> truth | Ask who she is. | tidedoor_close | +tidedoor_miners
> quiet | Take her hand. | tidedoor_close | +tidedoor_miners
> mercy | Promise to come back. | tidedoor_close | +tidedoor_miners

// ---------------------------------------------------------------- a3: the Chancery cellar
=== tidedoor_a3s1 | The Forged Pass
Hao Lan has forged the pass. It took her a day and a night, and she is rather proud of it. It is a long white slip of Chancery paper, folded in three, bearing the seal of the Second Chancery and a signature: F. “It authorises entry to the Fifth Floor Gate,” she says. “For the purposes of an inventory. It is a very boring pass. Nobody will read it.”
“How did you get the seal?”
“I borrowed it,” says Hao Lan, “from my own file.”
The Tidewall Chancery, by night, is a dark mass of white stucco behind its lemon trees. The porter in the glass box is asleep. Mr Mo’s lamp burns in the Registry window. You go in by the back, through the kitchen, with the forged pass held out before you like a charm.
It works. It works at every door. A sleepy clerk looks at it, and at you, and at the size of the seal, and waves you through without a word.
“It’s too easy,” whispers Gu.
“It’s the Chancery,” says Hao Lan. “It’s the only thing it is good at.”
> deceit | Go down. | tidedoor_a3s2
> truth | Say it is wrong. | tidedoor_a3s2
> quiet | Keep your head down. | tidedoor_a3s2
> mercy | Check on Hao Lan. | tidedoor_a3s2

=== tidedoor_a3s2 | The Cellar
The cellar of the Tidewall Chancery goes down for three floors. The first is storerooms. The second is a pharmacy. The third, at the bottom of a long spiral stair, is a hall of white stone, cold and bare, with a high vaulted ceiling and a single door at the far end.
It is a great round door of black iron, studded with bolts. A closed eye is set in the centre of it. It is the Gate of the Fifth Floor.
Two guards stand either side. They are not marines. They wear the grey leather of the Chancery guard, and they carry pikes, and they stare straight ahead.
Between them, on a stool, sits a thin man in a cloak, with a ledger on his knee.
“Ah,” says Yin, looking up. His long pale face is polite. “Miss Hao. I was expecting you.”
> deceit | Hold out the pass. | tidedoor_a3s3
> truth | Stop. | tidedoor_a3s3
> quiet | Step behind Hao Lan. | tidedoor_a3s3
> mercy | Say good evening. | tidedoor_a3s3

=== tidedoor_a3s3 | Yin
“I have your letter,” says Yin. He taps the ledger. “It was a beautiful forgery. I admired it very much. I should like you to know that I read it twice.” He rises, unhurried. “I knew it was a lie, of course. I was not sure whose.”
Hao Lan has gone white. Her fingers are tight on the pass.
“I thought,” says Yin, “that it was probably yours. And then I thought, no. She is too honest. She would not do it so well without help.” His eyes move to you. “You are the help.”
“I am.”
“I see.” He bows. “I am Yin, secretary to Inspector Fang. I am very pleased to meet you. I have wanted to for some time.”
He picks up his ledger.
“I have been told to arrest you,” he says. “I find, on reflection, that I should rather not.”
> deceit | Wait. | tidedoor_a3s4
> truth | Ask why. | tidedoor_a3s4
> quiet | Step back. | tidedoor_a3s4
> mercy | Say thank you. | tidedoor_a3s4

=== tidedoor_a3s4 | A Secretary’s Reasons
“Because I am afraid,” says Yin. He says it simply, in a dry reasonable voice. “Of the Inspector. Of what he plans. I have been his secretary for eleven years. I have written his minutes. I have kept his accounts. I know where every body is buried.” He smiles. “It is a clerk’s privilege.”
He sets down the ledger on the stool.
“He means to open the Gate tonight. With the fleet. He has the stolen key, and the lead-lined case, and the bearer’s name. He means to take the True Ledger from the Fifth Floor, and rewrite it.”
“Rewrite it?”
“From the first page. Every entry. The whole four hundred years.” His face is bleak. “So that the Concord will have always been right.”
Hao Lan makes a sound.
“I have copied the plans,” says Yin. “They are in my sleeve. I should like to give them to you. In exchange for your promise that when it is over, I shall not be hanged.”
> deceit | Promise. | tidedoor_a3s5
> truth | Say you cannot. | tidedoor_a3s5
> quiet | Take the papers. | tidedoor_a3s5
> mercy | Ask why he trusts you. | tidedoor_a3s5

=== tidedoor_a3s5 | The Plans
He gives you a roll of thin white paper, tied with black thread. You open it, in the cold hall, under the lamp. It is a plan of the Library. It is exact. It shows the Reading Hall, the Upper Stacks, the Lower Stacks, the Closed Stacks, the Fifth Floor, and below them a great black circle labelled, in a neat hand, The Well.
There is a path drawn on it in red. It runs from the Gate down through the Closed Stacks to the Fifth Floor. It ends at a small square labelled, simply, Desk.
“That is where the True Ledger is,” says Yin. “It sits on the saint’s desk. Nobody has moved it in a hundred and eighty years. The Inspector means to take it tonight.”
“And if he does?”
“He rewrites it. And he walks out of the Library with the whole of history under his arm.” Yin spreads his hands. “And there is no one left who can say it was ever different.”
Hao Lan is staring at the plan. “The ward-chain,” she says. “The fleet. It is a diversion.”
“It is a diversion,” agrees Yin.
> deceit | Thank him. | tidedoor_a3s6
> truth | Ask what he wants. | tidedoor_a3s6
> quiet | Study the plan. | tidedoor_a3s6
> mercy | Say you will stop him. | tidedoor_a3s6

=== tidedoor_a3s6 | The Guards
“And these?” you say, looking at the two guards. They have not moved. They are standing like statues, staring at the wall, their pikes at the slope. “Will they let us through?”
“They are drugged,” says Yin. “I did it myself. A little tea.” He nods at them. “They are awake. They hear everything. They cannot act.” His mouth twists. “It is the same dust. I have a constant supply.”
He crosses to the Gate and lays a thin hand on the black iron.
“I have the key,” he says. “The Inspector gave it to me to keep. He does not trust the guards. He trusts a clerk.” He draws it from his sleeve: a flat disc of dark metal on a chain. “It opens the Gate from this side. You may use it, if you wish.”
He holds it out.
“I am giving you this,” he says, “freely. I expect nothing. I would like it noted.”
> deceit | Take it. | tidedoor_a3s7
> truth | Refuse. | tidedoor_a3s7
> quiet | Look at Hao Lan. | tidedoor_a3s7
> mercy | Thank him. | tidedoor_a3s7

=== tidedoor_a3s7 | Noted
“Noted,” says Hao Lan. She has a pencil. She is writing in her little book, with her tongue between her teeth. “Gate key received from the Inspector’s secretary, freely and without consideration, on the third night of the spring ebb.” She looks up. “Do you want to sign it?”
Yin blinks. “Sign it?”
“It is a receipt.” She holds out the pencil. “I do not accept anything without a receipt.”
After a moment, he laughs. It is a startled, helpless, rusty laugh, as of a man who has not laughed in years. He takes the pencil. He signs.
“You are going to be very troublesome,” he says.
“I intend to be,” says Hao Lan.
The key in your hand is warm. It pulses faintly, like a heartbeat. Yin steps back, brushing down his cloak. He glances at the guards, then at the Gate, then at you.
“I shall be upstairs,” he says. “If anyone asks, I shall say I was never here.”
> deceit | Use the key. | tidedoor_a3s8
> truth | Wish him well. | tidedoor_a3s8
> quiet | Nod. | tidedoor_a3s8
> mercy | Say he is a good man. | tidedoor_a3s8

=== tidedoor_a3s8 | The Fifth Floor Gate
The disc fits a hollow in the Gate’s centre. You press it in. The great iron door gives a deep resonant groan. The bolts draw back, one after another, in a sequence that goes on and on, a dozen, a score, a hundred. The eye in the centre of the door blinks once. The Gate swings inward.
A stair goes down, wide and shallow, cut from pale stone, with a carpet of silt on every step. A breath of cold air rises. The smell is of old paper and wet stone and tallow. It is the smell of a place that has dreamed.
You step through. Behind you, softly, Hao Lan counts out loud, and the party follows, one by one, down into the Library. At the head of the stair, in the lamplight, Yin stands with his hands folded, watching you go.
He bows.
The Gate closes behind you with a sound like a book being shut.
> deceit | Go on. | tidedoor_close | +tidedoor_by_gate
> truth | Look back. | tidedoor_close | +tidedoor_by_gate
> quiet | Step quietly. | tidedoor_close | +tidedoor_by_gate
> mercy | Hold Hao Lan’s arm. | tidedoor_close | +tidedoor_by_gate

// ---------------------------------------------------------------- a4: the flooded stair
=== tidedoor_a4s1 | A Breath
Lu Yan lays the reeds out on the sea steps in a row. They are hollow bamboo, three feet long, each with a leather cap and a cork. She has made forty. “One breath,” she says, in her flat clinical voice. “You hold it. You swim down. There are a hundred and ten steps to the first landing. At the landing, there is an air pocket. You can breathe. You can use the reed to take the last of the water out of your lungs.” She meets your eyes. “If you do not, you will drown.”
“How do you know?”
“I tried it. Last night. With Maro holding the rope.” She hesitates. “I did not drown.”
The tide is out. Beyond the Wall, in the bay, the water is a black slab. The last of the stair is submerged. The lantern at the head of it throws a trembling circle on the surface.
Gu has gone green.
“You can stay,” you say.
“I don’t want to,” says Gu, in a small voice. “But I will.”
> quiet | Take a reed. | tidedoor_a4s2
> truth | Tell him he is brave. | tidedoor_a4s2 | bond:gu+1
> mercy | Hold his hand. | tidedoor_a4s2 | bond:gu+1
> inquiry | Ask how many breaths. | tidedoor_a4s2

=== tidedoor_a4s2 | Down
You go down in pairs, with a rope. The water is colder than you expected. It closes over your head with a shock, black and total, and you kick, once, twice, and feel the stair under your feet. You follow it down. The lantern light dwindles to a pin. The silence is absolute. Your heart is a drum.
Forty steps. Fifty. The rope tugs at your wrist. Lu Yan is beside you, her hair floating, her spectacles on a string. She makes a signal: a closed fist, then an open hand. Not far.
Sixty. You are running out of air. Your lungs burn. A panic rises, hot and thin. You fight it. You think of Bao Er’s held door. You let a little breath go, and the burning eases.
Eighty. Ninety. A hundred.
Your fingers touch a ledge. You haul yourself up, and your head breaks the surface into dark air.
> quiet | Gasp. | tidedoor_a4s3
> truth | Call out. | tidedoor_a4s3
> mercy | Help Lu Yan up. | tidedoor_a4s3
> inquiry | Look around. | tidedoor_a4s3

=== tidedoor_a4s3 | The Air Pocket
It is a small chamber, hewn from the rock, with a vaulted roof and a ledge round the edge. A lamp hangs from a hook on the wall, lit. There is air. It is stale and cold and tastes of copper. Lu Yan hauls herself onto the ledge beside you and lies there, gasping, her hair plastered to her forehead.
“I told you,” she says. “One breath.”
“Do not talk.”
“I will talk. I am a physician. It is how I know I am alive.” She sits up, wringing her hair. “There will be others. Maro is bringing them down. Give them a moment to arrive.”
They come, one by one, out of the black water, blinking and spluttering. Gu is the fifth. He surfaces like a cork, gasping, with a look of dazed triumph. “I did it,” he says. “I did it, I did it, I did it.”
Ren Qiao hauls him onto the ledge, laughing.
“You did,” he says.
> quiet | Smile. | tidedoor_a4s4
> truth | Count heads. | tidedoor_a4s4
> mercy | Wrap Gu in a blanket. | tidedoor_a4s4
> inquiry | Ask Lu Yan what’s next. | tidedoor_a4s4

=== tidedoor_a4s4 | The Second Stair
“A second flight,” says Lu Yan. “Twenty steps, then a landing, then dry.” She wrings out her sleeve. “I tried it last night. I could not go farther. There was a door.”
She points. In the rock at the end of the ledge there is a low arch, half-hidden by weed. Beyond it, a stair climbs upward. Pale light seeps down it, steady and cold. It is not lamplight. It is silver. It is the light of a sky.
“A skylight?” says Hao Lan.
“I think,” says Lu Yan, “it is a window.”
You climb. The stair is dry. It is hewn from white stone, with a carved rail and a worn tread. At the top there is a gallery, long and narrow, lit by a row of tall windows. Through the windows you see not the sea but a great hall, vast and pale, lit by a thousand lamps. It is a hall of desks.
You are looking down into the Reading Hall from above.
> quiet | Look. | tidedoor_a4s5
> truth | Say it is beautiful. | tidedoor_a4s5
> mercy | Hold Gu. | tidedoor_a4s5
> inquiry | Ask where the stair goes. | tidedoor_a4s5

=== tidedoor_a4s5 | The Gallery
The gallery runs round the whole hall. It is hung with portraits. They are painted in oil on wood, very old, cracked and darkened. They show clerks. Men and women in grey tunics, seated at desks, with pens in their hands. Each is labelled below in a small gold plate. Under the first, an inscription: HEAD ARCHIVIST. Under the second: SONGKEEPER. Under the third: READER.
“They are the staff,” says Hao Lan. She has come up beside you. “They are the Library’s people. A hundred and eighty years of them.”
“Where are the living ones?”
“There are none.” She wipes a pane of glass with her sleeve. “Look.”
In the Reading Hall below, at every desk, there is a figure. They are shapes of paper. They sit bowed over their work, writing with fingers of folded leaves, silently, in the air. There are hundreds. They do not look up.
“They never left,” says Hao Lan.
> quiet | Listen. | tidedoor_a4s6
> truth | Say nothing. | tidedoor_a4s6
> mercy | Put your hand on the glass. | tidedoor_a4s6
> inquiry | Ask what they are writing. | tidedoor_a4s6

=== tidedoor_a4s6 | The Portraits
You walk the gallery. The portraits stare out. Each face is individual, drawn with loving care: a young man with a squint, a woman with her hair in a bun, a boy of twelve with a pen behind his ear. Under each is a name. Under the last is a gap, and a plate with no inscription.
“One missing,” says Gu.
“The Reader,” says Lu Yan.
You turn. The gap is between SONGKEEPER and HEAD ARCHIVIST. A hook is set in the wall, with nothing on it. The wood behind it is paler.
“The portrait’s gone,” says Lu Yan. “Taken down.”
“By whom?”
“By someone who knew who she was.”
Beside you, on the gallery floor, a small girl in a clerk’s tunic is standing, quite still, with a lamp in her hand. You did not see her come. She is looking at the empty hook, with an expression of grave interest.
“That was me,” she says.
> quiet | Kneel. | tidedoor_a4s7
> truth | Say hello. | tidedoor_a4s7
> mercy | Smile. | tidedoor_a4s7
> inquiry | Ask who took it. | tidedoor_a4s7

=== tidedoor_a4s7 | The Reader
“The Inspector,” says the girl. She is perfectly composed. “He took it last spring. He came with a key. He walked through the Hall with a lantern. He looked at each of us in turn. When he came to me, he stopped.” She tilts her head. “He said, you should not be here.”
“What did you say?”
“I said, I am the Reader.” She smiles. “He said, you are a child. I said, yes. He took my portrait down and put it under his arm. He said it would be useful.”
Her lamp trembles very slightly.
“I have been trying to remember why,” she says. “I think it is because I am the only one who can read the True Ledger. The rest are copyists. I am a reader. It is a different thing.”
She looks up.
“He needs me,” she says. “And I do not want to go.”
> quiet | Take her hand. | tidedoor_a4s8
> truth | Say she does not have to. | tidedoor_a4s8
> mercy | Promise to keep her safe. | tidedoor_a4s8
> inquiry | Ask what the True Ledger says. | tidedoor_a4s8

=== tidedoor_a4s8 | A Small Guide
“I will show you,” says the Reader. She leads you down a flight of steps from the gallery, through a door in the panelling, into the Reading Hall. The paper-clerks rustle as you pass. They do not look up. The Reader walks between the desks, her lamp held high, and you follow.
“We are not supposed to speak,” she whispers. “But I am the Reader. I am allowed.” She leads you on. “The True Ledger is at the very bottom. On the saint’s desk. It is a long way. We shall have to go down by the Well.”
She stops at the centre of the hall. At your feet is a great round grating of iron, wide as a courtyard. Beneath it, the water swirls, black and slow.
“It is quite safe,” she says. “If you do not look.”
She takes your hand. Her fingers are cold and light as paper.
“Come on,” she says. “We have not much time.”
> quiet | Go with her. | tidedoor_close | +tidedoor_by_reeds
> truth | Look at the Well. | tidedoor_close | +tidedoor_by_reeds
> mercy | Hold her hand tight. | tidedoor_close | +tidedoor_by_reeds
> inquiry | Ask her name. | tidedoor_close | +tidedoor_by_reeds

// ---------------------------------------------------------------- hidden: Ke-er's door
=== tidedoor_h1 | Which Door
You kneel in the wet sand at the foot of the Wall, and put your palm on the plaque. You say her name. You say it softly. You ask: Ke-er, which door would you take?
There is a long pause. The sea is a long way off. Water drips from the Wall. The moss on the stone is cold and soft under your hand.
Then the stone warms, and in the warmth, very faint, a voice, a child’s, a little amused. It says: the one you have not thought of.
You wait. Mei Qiu has come up behind you, and is standing very still. “What did she say?”
“The one I have not thought of.”
“There are four doors,” says Mei Qiu. “Tide, mine, gate, stair.”
“Yes.”
“Then there is a fifth,” she says slowly.
Under your palm the plaque turns, quietly, a quarter of the way round, like a key in a lock.
> inquiry | Push. | tidedoor_h2
> truth | Call Ke-er. | tidedoor_h2
> mercy | Ask Mei. | tidedoor_h2
> quiet | Wait. | tidedoor_h2

=== tidedoor_h2 | A Child’s Door
It is not a door. It is a seam in the stone, a hand’s breadth wide, that has opened in the base of the Wall where the last block stood. Behind it is a narrow passage, just wide enough for a child. It is dry. It is lit, faintly, with a blue glow. It smells of salt and cold stone and, very faintly, of a child’s hair.
Mei Qiu sinks to her knees. She lays her palm on the stone beside yours. Her shoulders shake.
“She made it,” she says. “She dug it. Fifteen years of digging, from inside, with a toy boat.” She is laughing, wetly. “She is eleven years old.”
The passage runs down at a slant. It is barely three feet high. It would take a very small person, or a very brave one.
“I can’t get through that,” says Mei Qiu, ruefully, looking at her shoulders. “I am too big.”
“I can,” you say.
She looks up at you. Tears glitter on her cheeks.
“Go,” she says. “She is waiting.”
> inquiry | Crawl in. | tidedoor_h3
> truth | Promise to come back. | tidedoor_h3
> mercy | Hold Mei’s hand. | tidedoor_h3
> quiet | Take the lamp. | tidedoor_h3

=== tidedoor_h3 | The Path She Dug
You crawl on your belly. The blue glow is the glow of the seam itself, a thin wavering light that comes from the stone. It is warm. It pulses. It is a heartbeat. You crawl for a long time. The passage is tight; once you stick, and have to exhale, and push; once you must go head-first down a slope that would terrify you if you had time. Ahead, in the glow, you can see the marks of the digging: shallow grooves in the rock, made with a small blunt tool, a toy boat’s keel.
At last the passage opens. You emerge, hands first, onto a floor of cold white stone. You stand.
You are in the Reading Hall. You are standing at the foot of a pillar, under a stained-glass window. And there at your feet, on the floor, in the dust, is a line of small footprints, bare and narrow, walking away.
They lead into the dark.
You follow them.
> inquiry | Follow. | tidedoor_close | +tidedoor_by_kes_door
> truth | Call Mei. | tidedoor_close | +tidedoor_by_kes_door
> mercy | Look for a lamp. | tidedoor_close | +tidedoor_by_kes_door
> quiet | Hold your breath. | tidedoor_close | +tidedoor_by_kes_door

// ---------------------------------------------------------------- close
=== tidedoor_close | The Reading Hall
The Reading Hall of the Annex of Struck Leaves is the loveliest room you have ever stood in. It is round, and wide as a market square, and its roof is a dome of pale glass through which no light falls, since the sea is above it. Instead the dome is lit from within by a thousand tiny lamps, each hanging from a chain, each a different colour: amber, rose, blue, green. They sway very slightly, as in a draught.
+[how] tidedoor_by_water | You came in by the tide-door, in Ah Zhi’s boat, across a lake of floating lanterns.
+[how] tidedoor_miners | You came in by the miners’ stair, which sings, and a girl of ten gave you seven leaves.
+[how] tidedoor_by_gate | You came in by the Chancery’s cellar, on Yin’s freely given key.
+[how] tidedoor_by_reeds | You came in by the flooded stair on one breath, and a Reader took your hand.
+[how] tidedoor_by_kes_door | You came in by a path a child dug with a toy boat.
The desks stand in rows, three hundred of them. At every desk sits a figure of paper. They write. They do not look up. The sound of their writing is the sound of rain.
The Elder has stopped at the foot of the steps. She stands very straight. Her face is serene.
“I have not been in a room like this since I was nineteen,” she says. “I was given a key. I was told to look after it.” Her voice is low. “I did not. I put it in a drawer. I have regretted it for twenty-four years.”
> truth | Take her arm. | tidedoor_close2 | npc:SU_TIDEDOOR_ENTER
> mercy | Say it is not too late. | tidedoor_close2 | npc:SU_TIDEDOOR_ENTER
> quiet | Look at the desks. | tidedoor_close2 | npc:SU_TIDEDOOR_ENTER
> inquiry | Ask what the key was for. | tidedoor_close2 | npc:SU_TIDEDOOR_ENTER

=== tidedoor_close2 | The Hush of Pages
There is no echo. It is the first thing you notice. In a hall this size, with a roof of glass, you would expect your footsteps to ring. They do not. The sound is swallowed by the rustle of the paper-clerks, a vast soft murmur like a field in wind. It is the sound of three hundred pens.
You walk down the central aisle. The paper-clerks do not look up. One by one, as you pass, their pens pause, and lift, and fall back to the page. They have noticed you. They are not going to say.
At the far end of the hall, a flight of steps leads down. A sign hangs over it, in letters of gold on a board of black wood. It reads, in the plain old script of the first Concord: THE STACKS OF LEAVES. And under it, in smaller letters: PLEASE DO NOT READ THE DEAD ALOUD.
Hao Lan stops, her pencil in the air.
“That,” she says, “is a terrible rule.”
She steps forward and begins, with great enthusiasm, to read the first name on the nearest shelf.
> truth | Stop her. | hub_b3_coast | +b3q_tidedoor
> mercy | Let her. | hub_b3_coast | +b3q_tidedoor
> quiet | Go down the steps. | hub_b3_coast | +b3q_tidedoor
> inquiry | Ask what the rule is for. | hub_b3_coast | +b3q_tidedoor

`,
  scenarios: String.raw`
$ SU_TIDEDOOR_ENTER | trust+3 respect+3 fear+3 | elder | The Elder goes down into the Library she helped to flood, by whichever door the player chose.
hostile: I wrote the memorandum that authorised the sealing of the lower floors. It was one of the first I signed as Registrar. I thought it was a drainage question. I am now fairly certain it was not.
wary: The smell was the first thing. Not damp. Paper. Paper that has been dreaming. I have not smelt it since I was a girl, in the Archive of Nine, the day I was given my first key.
neutral: A hall of desks, half under water, each with a lamp that has not been lit in a hundred and eighty years. I have never in my life wanted so much to dust something.
warm: I walked into the Reading Hall and my knees gave way. I had expected a ruin. It is a church. They have laid it out as one, row on row, and every reader’s chair is turned toward the door, as though waiting for someone to arrive.
devoted: If I do not come out of this place, I should like you to know that I have never been so glad to be afraid. It is a clean fear. It has no shame in it.
`,
  remarks: String.raw`
% tidedoor_qiu_later | since:b3q_tidedoor>=3 | gu | Qiu says the Library gave off a smell of old books and wet dog. Lu Yan says that is the smell of mildew. Qiu says it is the smell of home. They are both right.
% tidedoor_shu_later | since:tidedoor_miners>=6 | ren | Shu Ning keeps her miners’ lamp lit on the bench in her room. She says it is for the map. I think it is because she was not sure she would come back.
`,
};
