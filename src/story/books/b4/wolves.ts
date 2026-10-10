import type { Arc } from "../types";

/**
 * Book Four, arc seven: the Wolf Year. Once in a generation the wolves come down to the camps, and this year a girl of nine has gone
 * with them. They are leading the Listeners to Black Ford, where two hundred of the Colonel's dead lie unburied. Four approaches:
 * answer the wolves through Odval's pipe (a1, truth), hunt them (a2, force), lead them off with Hanming's glass howls
 * (a3, deceit), and track the child into the hills (a4, mercy). A hidden route answers with the held door.
 * Cast: Odval, Nergui (the lost girl), the Grey Mother (lead wolf), Temur, Chimeg, Hanming, Dagva.
 */
export const wolves: Arc = {
  id: "wolves",
  name: "The Wolf Year",
  scenes: String.raw`
=== wolves_entry | The Howling
It starts at dusk, in the hills to the north, a thin high wavering note that rises and falls and is taken up. Then dozens, from every side, in a great ragged chorus that rolls down off the high ground and over the camp, and every dog in the ring begins to bark at once.
Odval is on her feet. She stands in the door of her tent with her bone pipe in her hand and her black hair loose, quite still. “Wolves,” she says.
“Is that unusual?”
“It is the Wolf Year.” She does not turn. “It comes once in twenty. This is the first in summer.” Her thin face is grave. “They do not attack. They stand on the ridge and call. They wait until someone goes up.”
“Why?”
“To tell us something.” She looks at the pipe. “Nobody has ever understood. My grandmother went up once, as a girl. She came back grey. She would not say.”
A girl of seven runs up out of the dark, white-faced. She is shouting something in Steppe-tongue.
“Nergui,” says Odval. Her voice is flat. “My cousin. She has gone to the ridge.”
> truth | Take Odval’s pipe, and offer to answer the wolves. | wolves_a1s1
> force | Look at the hunters gathering at the pickets with spears. | wolves_a2s1
> deceit | Ask Hanming whether glass can howl. | wolves_a3s1
> mercy | Go straight up the ridge after the child. | wolves_a4s1
> inquiry | Hum the held door to the dark, and see what answers. | wolves_h1 |  | pao_ninth_asked | You have not yet been asked who is there.

// ---------------------------------------------------------------- a1: answering
=== wolves_a1s1 | The Pipe
She gives it to you without a word. It is a bone pipe, yellow with age, no longer than your hand, with six holes and a mouthpiece worn smooth. It is warm from her palm. It smells of smoke and wool. Odval watches you with her grave dark eyes.
“You do not know how,” she says.
“No.”
“There is nothing to know.” She takes a breath. “It is only a question. You ask it. They answer, or they do not.”
“What do I ask?”
“I have never heard it done.” For the first time there is something in her voice that might be doubt. “My grandmother said it was: who is there?”
You lift the pipe to your lips. It is smooth and cool. You blow, a single clear note, thin and high and uncertain. It rises into the dusk. It is swallowed by the dark.
The howling stops.
It does not fade. It stops, all at once, as if cut by a knife, and the silence that falls is so total that the dogs themselves fall quiet. A single wolf lifts its voice from the northern ridge, long and low, and holds it.
> truth | Answer it. | wolves_a1s2 | npc:SU_WOLVES_HOWL
> mercy | Lower the pipe. | wolves_a1s2
> quiet | Listen. | wolves_a1s2
> inquiry | Ask Odval what it said. | wolves_a1s2

=== wolves_a1s2 | What the Wolf Said
“It said: who is there,” says Odval, hoarsely. She has gone pale. “It is the same. It is the same question. Word for word.” She wets her lips. “The wolves have been asking it for a thousand years, and no one has ever known the answer.”
“What is it?”
“I do not know.” She shakes her head. “It is in the old tongue. It is not a name. It is not a place. It is something you say that makes them know you.”
You look at the pipe. You think of the ninth jar, and the pearl, and the sound it made: four notes, rising, leaning forward like a person listening. You put the pipe to your lips. You play them.
The wolf on the ridge is silent.
Then it answers. It sings the same four notes. It sings them in a wolf’s voice, long and low and breathy, and the whole pack takes them up in harmony, a great ragged chord rolling down the hills. The camp stands transfixed.
“That is a door,” whispers Odval. “That is the Door.”
> truth | Play it again. | wolves_a1s3
> mercy | Look at Odval. | wolves_a1s3
> quiet | Hold the pipe. | wolves_a1s3
> inquiry | Ask where the child is. | wolves_a1s3

=== wolves_a1s3 | The Ridge
You climb in the dusk, with Odval and Temur and a dozen of the Listeners, up a stony path between thorn bushes. The hills are steep. The air is cold. A faint moon is rising, and the ridge ahead is a long black wall against a sky of green glass. The howling has died. There is only the crunch of your boots and the beat of your blood.
At the top, you stop.
They stand in a line along the skyline, forty of them, grey and tall and silent, with their heads low and their eyes burning green. They are bigger than you imagined. They are the size of calves. They are thin, ragged, scarred, their coats bleached with dust. They watch you without moving. Behind them, a great pale shape lifts its head: a she-wolf, grizzled and enormous, with a torn ear.
She regards you.
She turns, slowly, and trots a few paces to a stone, and stops. She looks over her shoulder.
In the shadow of the stone, a small figure is curled up, asleep, with her arm round a wolf’s neck.
> truth | Go forward. | wolves_a1s4
> mercy | Hold your breath. | wolves_a1s4
> quiet | Wait for the wolf. | wolves_a1s4
> inquiry | Look at Odval. | wolves_a1s4

=== wolves_a1s4 | Nergui
She is seven. She has a round dirty face, black plaits, and a tear-streaked chin. She is wrapped in a wolf’s grey flank, like a blanket, and she is sound asleep with her thumb in her mouth. The wolf that lies beside her, a lean young bitch with one white paw, is awake. She watches you with calm yellow eyes. She doesn’t growl.
“Nergui,” breathes Odval.
The child stirs. She opens her eyes. She sees you. She sees her cousin. She sits up, rubbing her face. “Oh,” she says, in a sleepy croak. “It’s you. I was going to come home.”
“You frightened us.”
“I know.” She hugs the wolf’s neck. “I’m sorry. But I had to. She asked.”
“Who asked?”
“The Grey Mother.” The child points a grubby finger at the big she-wolf. “She said there’s a lot of people who haven’t got graves. She said they’re cold. She said somebody has to come.”
She says it with quiet certainty, as one reports a message from a neighbour.
> truth | Kneel. | wolves_a1s5
> mercy | Hold out your hand. | wolves_a1s5
> quiet | Look at the Grey Mother. | wolves_a1s5
> inquiry | Ask where. | wolves_a1s5

=== wolves_a1s5 | Black Ford
“A river,” says Nergui. “With a ford. There’s a lot of bones.” She wrinkles her nose. “It smells.”
Odval has dropped to her knees. She is staring at the she-wolf. Her face, in the moonlight, is the colour of milk. “Black Ford,” she says. “It is forty miles east. It is on the Fort road.” She wets her lips. “The Colonel used it. For the roundups. Two winters ago. They said the clans had drowned in the crossing.”
“Had they?”
“No.” She is barely audible. “They were marched in, and they did not come out.”
The she-wolf lifts her head. She opens her jaws. She sings, one note, long and low. All along the ridge, the pack answers.
“They are showing us,” says Odval, in a whisper. “They have been showing us for two winters. They have dragged up bones. They have left them at the camps, at the doors. We thought it was a curse.” She laughs, a dreadful little sob. “They were trying to tell us.”
> truth | Say you will go. | wolves_a1s6
> mercy | Hold her. | wolves_a1s6
> quiet | Bow to the wolf. | wolves_a1s6
> inquiry | Ask how many. | wolves_a1s6

=== wolves_a1s6 | Two Hundred
“Two hundred and eleven,” says Nergui. She has climbed out of the wolf’s embrace and is standing in front of you with her hands clasped, in the manner of a child delivering a lesson. “The Grey Mother counted. She doesn’t have numbers. She has stones.” She holds out a closed fist. She opens it. In her palm are two hundred and eleven small white pebbles.
You stare.
“She gave them to me,” says Nergui. “One for each. I held them all night.” Her small face is solemn. “I didn’t drop any.”
You take one. It is smooth, and cold, and light as chalk. It is not a pebble. It is a bone. It is a tiny finger-bone, from the hand of a child.
You close your fingers over it.
“We will bury them,” you say.
The she-wolf puts back her head, and the pack puts back their heads, and the howl that goes up is not like any you have heard. It is not a threat. It is not a lament. It is a long, rolling, thunderous exhalation, like an animal setting down a burden.
> truth | Listen. | wolves_a1s7
> mercy | Weep. | wolves_a1s7
> quiet | Bow. | wolves_a1s7
> inquiry | Ask Odval what it means. | wolves_a1s7

=== wolves_a1s7 | The Long Road
It takes the whole clan. They set out at dawn: three hundred riders, six hundred spare horses, forty carts of spades and baskets and bundles of felt. They ride east along the Fort road with the wolves running at their flanks. It is a strange procession. The Listeners are silent. The pack runs ahead, grey streams in the grass, and from time to time one will stop on a rise, and look back, and wait.
You ride beside Odval. She says nothing. She has her pipe in her fist, but she doesn’t play.
On the third day you smell it. It is faint at first: a sweetish, dank, earthy smell, carried on the wind. By midday it is overpowering. The horses balk. The carts creak. The Listeners put scarves over their mouths.
At sunset you come down off a long ridge to the river.
It is a broad slow stream, brown and shallow, between banks of black shingle. It is crossed by a ford of flat stones. On the near shore, in a long low mound, is a drift of bones.
> truth | Dismount. | wolves_a1s8
> mercy | Cover your face. | wolves_a1s8
> quiet | Bow. | wolves_a1s8
> inquiry | Look for a marker. | wolves_a1s8

=== wolves_a1s8 | Digging
They bury them over seven days. It is slow work. The ground is stony. There are two hundred and eleven, and the Listeners will not mix their dead: each must have a hole of her own, deep enough to stand in, facing east. They dig in shifts. The women dig, and the old men dig, and the children carry water. Temur’s riders dig. The Red Scarves, who have followed the column from a distance, come in at dawn on the third day, hollow-eyed, and take up spades without a word.
You dig. You have blisters on both hands. Duan Wuyi digs beside you in his torn robe, grey with exhaustion. Hao Lan writes the names. She has none. She writes numbers, and a line beneath each: unknown. She weeps over every one.
On the fifth night the wolves come down to the camp. They sit in a ring round the fire, forty of them, in the dark. They watch the Listeners work.
The she-wolf lies at Nergui’s feet.
> truth | Keep digging. | wolves_a1s9
> mercy | Fetch water. | wolves_a1s9
> quiet | Sit with the wolf. | wolves_a1s9
> inquiry | Ask Hao Lan about the numbers. | wolves_a1s9

=== wolves_a1s9 | Unknown
“There is a thing I can do,” says Hao Lan. She has been sitting by the fire for hours, with her notebook, staring at nothing. Her eyes are red. “I can read the bones. There is a method. It is used by the Seventh Chancery, for identifying remains. A forensic table.” She turns pages. “It will tell the age, the sex, the height. The trade, sometimes. The family.” Her voice shakes. “I did not think I should ever use it.”
“Will it give names?”
“No.” She wipes her nose. “But it will give a start. If I can say: this was a girl of nine with a broken arm, from a clan that kept goats, then someone may know.” She looks up. “It is something. It is better than unknown.”
She works through the night. By dawn she has a hundred and forty entries. By the end of the week she has two hundred and eleven.
“It is not a name,” she says, to the pile of sheets. “But it is a person.” She stacks them gently. “I think that is what the Order is for.”
> truth | Thank her. | wolves_a1s10
> mercy | Hold her. | wolves_a1s10
> quiet | Take the pile. | wolves_a1s10
> inquiry | Ask what comes next. | wolves_a1s10

=== wolves_a1s10 | A Pack at Dawn
They leave on the eighth morning. The graves stand in rows on the river bank, two hundred and eleven mounds, each with a stone at its head, facing the sunrise. Nergui puts the last pebble in the last hole. She kisses it. She says, in her high clear voice: “Goodbye. I’ll visit.”
The wolves have gone. They went in the night. The ashes of the fire are cold. There is nothing on the ridge but the wind and a few drifting clouds. Odval stands at the water’s edge, with her bone pipe, looking at the hills.
“They did not say goodbye,” she says.
“Wolves don’t.”
“No.” She smiles faintly. “But I think she heard.”
She raises the pipe. She plays four notes, soft and high. They rise over the river. There is a pause. Then, very far off, on the northern horizon, a single howl answers: long, and low, and with something in it, you could swear, of a laugh.
Odval laughs too.
She lowers the pipe and wipes her face.
“That’s an answer,” she says. “That’s an answer to the question.”
> truth | Smile. | wolves_close | +wolves_ford_buried
> mercy | Hold Nergui. | wolves_close | +wolves_ford_buried
> quiet | Look at the hills. | wolves_close | +wolves_ford_buried
> inquiry | Ask what the question was. | wolves_close | +wolves_ford_buried

// ---------------------------------------------------------------- a2: the hunt
=== wolves_a2s1 | Spears
They are gathered at the picket-lines in the last of the light: forty men, young and old, with spears and bows and long knives, and the quiet, hard faces of those who have decided. Their ponies stamp and blow. Their breath smokes. At their head is a big fair-haired man on a roan horse, a stranger to you, with a black beard and a scar through one eyebrow. He is talking to them in a low rumble. They are nodding.
“Hunters,” says Temur, with a grimace. “From the north camps. Tsogt’s lot.”
“What are they doing?”
“Going up.” He chews his lip. “It is not forbidden. There is a law that says that when the wolves come down in a Wolf Year, any man may hunt them.” He spits. “It is also the law that no one does.”
“Why?”
“Because the wolves always win.”
He looks at the black-bearded man. “Tsogt thinks he’s different. He lost a child to a wolf, once. It was thirty years ago. He has never forgotten.”
> force | Go to Tsogt. | wolves_a2s2
> truth | Ask Temur to stop them. | wolves_a2s2
> quiet | Watch. | wolves_a2s2
> mercy | Think of Nergui. | wolves_a2s2

=== wolves_a2s2 | Tsogt
“Move,” says Tsogt. He sits his roan with his spear across his saddle, looking down. He has a hard bearded face and pale cold eyes. “This is no business of yours.”
“There is a child on the ridge.”
“There are wolves on the ridge.” He doesn’t blink. “They have stolen a child. It is what they do.”
“They have not stolen. They have asked.”
“Asked.” His laugh is short. “They are animals. They do not ask.” He gathers the reins. “I know what they do. They lure. They tempt. They take the weak and the small, and they say it is a message.” His voice does not change. “They took my daughter.”
There is a silence. The ponies stamp.
“I am sorry,” you say.
“I do not want you to be sorry.” He jerks his chin. “I want you to get out of the way.”
Temur has laid a hand on your arm. “Let him go,” he says, low. “He will not be talked down.”
> force | Stand firm. | wolves_a2s3
> truth | Step aside. | wolves_a2s3
> quiet | Follow. | wolves_a2s3
> mercy | Ask to go with him. | wolves_a2s3

=== wolves_a2s3 | With the Hunt
You ride with them. You do not know why. You say you will go with the hunters, to see that the child comes to no harm; and Tsogt looks at you for a long moment, and shrugs, and says, “Keep up.”
It is a dark ride. The moon is a sliver. The hills loom black. The hunters go in a silent file, spears levelled, up the steep stony path, and you go in the middle, with Ren Qiao on one side and Temur on the other. The ponies’ hooves ring on stone. Nobody talks.
The wolves are waiting at the top. You see them from a hundred yards: a long line of grey shapes against the starlit sky, forty of them, motionless. They do not retreat. They do not snarl. They stand, with their heads lowered, and watch the hunters come.
“Steady,” says Tsogt. He lifts his spear. “Steady. On my word.”
The she-wolf steps forward. She is huge. She stands in the track, alone, with her torn ear flat.
She sings one low note.
> force | Hold your pony. | wolves_a2s4
> truth | Call out. | wolves_a2s4
> quiet | Watch Tsogt. | wolves_a2s4
> mercy | Ride between. | wolves_a2s4

=== wolves_a2s4 | The First Spear
He throws. He does not wait for the word. It is a hard flat cast, from the shoulder, and the spear hisses through the dark and takes the she-wolf in the flank. She screams. She goes down on her side, thrashing. A great roar goes up from the hunters. They kick their ponies forward.
The pack breaks. It is instantaneous. The grey line dissolves into a wheeling tide of wolves, silent and fast. They hit the first ponies at the shoulder. A pony shrieks. A man goes down. A spear flashes. Teeth snap. The ridge is chaos: horses, steel, darkness, the flash of eyes. You are carried forward in the crush, shouting.
Ren Qiao is beside you with his sword out, cutting at a wolf that has fastened on a pony’s throat. He kills it. Another comes at him. He kills that. His face is stone.
“Stop!” you shout. “Stop it! They’re not attacking!”
Nobody hears.
Somewhere in the melee, small and clear, a child begins to scream.
> force | Find Nergui. | wolves_a2s5
> truth | Shout for Odval. | wolves_a2s5
> quiet | Hold your pony. | wolves_a2s5
> mercy | Go to the she-wolf. | wolves_a2s5

=== wolves_a2s5 | The Grey Mother
You throw yourself from the saddle. You run, stumbling, over rocks, through the milling dark, to where the she-wolf lies. She is on her side, panting. The spear stands out of her flank, quivering. Black blood runs over the stones. She lifts her head as you approach. Her eyes are dull yellow in the starlight. They find your face.
She doesn’t snarl. She doesn’t flinch.
You kneel. You put your hands on the spear. It is slick and hot. She watches you, with a kind of fixed attentive patience, and you realise she is not afraid. She has been waiting for this. She knew.
“I’m sorry,” you say. “I’m so sorry.”
She breathes. The great ribs heave.
“I will take it out,” you say. “It will hurt.”
She lets her head fall back on the stone. She closes her eyes.
You pull. The spear comes free with a wet suck. A gout of blood follows. She gives a single grunting sob, and is still.
> force | Press the wound. | wolves_a2s6
> truth | Call for help. | wolves_a2s6
> quiet | Hold her head. | wolves_a2s6
> mercy | Hum. | wolves_a2s6

=== wolves_a2s6 | Hands
You press your hands to the wound. It is hot and sticky. You press with all your weight, with your whole body, and you feel the great animal shuddering under you. You can feel her heart. It is huge and slow and irregular, like a drum.
A shadow falls across you.
Tsogt is standing over you. He has dismounted. His hunting-spear is gone. His hands hang at his sides. His black-bearded face is working. He is staring at the she-wolf, and the blood, and your hands.
“What have you done?” he says.
“I have not done it.”
“She’s dying.”
“Yes.”
“She’s—” He breaks off. He drops to his knees. He puts out a shaking hand and touches the matted grey fur. “She’s old,” he says. His voice cracks. “She’s so old. Look at her teeth.”
“Yes.”
“She’s not hunting. She couldn’t hunt.” He looks up. His pale eyes are bright with tears. “She’s too old. She’s only a mother.”
> force | Press harder. | wolves_a2s7
> truth | Say nothing. | wolves_a2s7
> quiet | Hold her. | wolves_a2s7
> mercy | Say she could still be saved. | wolves_a2s7

=== wolves_a2s7 | A Hunter’s Hands
“Help me,” you say.
He does. He kneels beside you in the blood and the dark, a huge black-bearded stranger with a spear-callus on his palm, and puts his hands over yours. He is rough and clumsy and enormously strong. He presses. His fingers are slippery. He is muttering, under his breath, in Steppe-tongue, a low rapid unceasing murmur.
“What are you saying?” you whisper.
“A prayer,” says Tsogt. “For a child.”
The she-wolf shivers. A long breath goes out of her. She opens her eyes. They rest on his bearded face with a look you cannot read. She lifts her head an inch, with great effort, and nudges his wrist with her nose.
He makes a sound like a man being strangled.
“She’s forgiving me,” he says. “She’s forgiving me. She’s the mother of the one that took her. She knew. She knew me.”
He bows his head over the wolf and weeps.
> force | Hold on. | wolves_a2s8
> truth | Look away. | wolves_a2s8
> quiet | Stay. | wolves_a2s8
> mercy | Fetch Lu Yan’s needle. | wolves_a2s8

=== wolves_a2s8 | Stitches
There is no physician. Ren Qiao brings the needle, from the satchel of herbs that Lu Yan pressed on you at Tidewall, and a spool of waxed silk. You stitch. It is a hideous business. Your hands shake. Tsogt holds the wolf’s head. The wound is a ragged gap, a hand wide, with the muscle laid bare. You close it with twelve rough stitches and a prayer.
She lives.
She is carried back down the ridge on a litter of spears, with Nergui walking beside her, holding her paw. The wolves follow, in a long grey stream. They do not touch the hunters. They do not touch the ponies. They flow through the camp, silent, down to the river, and lie in a ring round the Matriarch’s tent.
Tamar comes out. She is leaning on Odval. She turns the blue cloth toward the she-wolf, and laughs, and weeps.
“So you came,” she says. “So you came. And we nearly speared you.”
The wolf thumps her tail.
“Well,” says Tamar, “you had better tell us.”
> force | Listen. | wolves_a2s9
> truth | Bow. | wolves_a2s9
> quiet | Step back. | wolves_a2s9
> mercy | Fetch tea. | wolves_a2s9

=== wolves_a2s9 | The Message
They tell it through Odval’s pipe. It takes a night. She sits at the old woman’s feet with the bone to her lips, playing, and the she-wolf lies with her chin on her paws, and the long grey ring of the pack breathes in the dark. The notes are low and strange. Odval translates, in a flat voice, with her eyes shut.
Black Ford. Two hundred and eleven. Two winters unburied. Bones in the river. Bones in the grass. They have tried to tell us. They have brought bones to the camps. We did not understand.
“We took them for a curse,” says Tamar. Her thin voice is steady. “We burned them.”
The she-wolf whines.
“I know,” says the Matriarch. “I know. It was a terrible thing.” She puts out a hand, groping. The wolf’s great head lifts into her palm. “We shall go. We shall bury them all. We shall make it right.”
She smiles, with a world of weariness.
“I never thought,” she says, “that I should be taught my own custom by a wolf.”
> force | Offer to go. | wolves_a2s10
> truth | Thank the she-wolf. | wolves_a2s10
> quiet | Bow. | wolves_a2s10
> mercy | Fetch Lu Yan’s salve. | wolves_a2s10

=== wolves_a2s10 | Black Ford, Again
They bury them over seven days. They do it with the wolves lying round the edge of the field and Tsogt digging, with a hard grey face, the deepest hole of all. When the last stone is set he sits down on the river bank and stays there for an hour. His hands hang between his knees.
“My daughter was nine,” he says, when you sit beside him. “She was called Saran. She had a gap in her teeth.” He picks up a pebble. “They never found her. A wolf took her from the door. In the winter. I tracked it for three days.” He turns the pebble. “I found a dead wolf. A mother. She had died of the cold. And in the den was a litter.”
“Saran?”
“No.” He smiles, bleakly. “Cubs. Seven. Alive. I killed them.”
You are silent.
“I have been afraid ever since that I did the wrong thing.”
He throws the pebble into the river.
“I think I did,” he says. “I think the daughter I should have looked for was the one I buried. And I never dug.”
> force | Say nothing. | wolves_close | +wolves_hunted
> truth | Take his hand. | wolves_close | +wolves_hunted
> quiet | Sit with him. | wolves_close | +wolves_hunted
> mercy | Say Saran is at peace. | wolves_close | +wolves_hunted

// ---------------------------------------------------------------- a3: glass howls
=== wolves_a3s1 | Glass That Howls
“It can,” says Hanming. He looks up from the bench where he has been shaping a gather of glass into a long thin horn. “It’s not hard. A bottle with a narrow neck, blown at the right pressure. It makes a note. A big one makes a low one.” He turns it to the light. “I made a set of them for the Orchard, once, for the festival. We called them the Wind-Bells.”
“Can you make one that sounds like a wolf?”
“I can try.” He considers. “It would need to be a long one. Thin. With a flare at the end.” He draws it in the air with a finger. “And a reed in the throat. For the break.”
“Can you make many?”
“How many?”
“Forty,” you say.
He stares. And then, slowly, he grins. It is the first real grin you have seen on his face. It changes him. He looks like his brother.
“I haven’t had an order that big,” he says, “since the Governor’s wedding.”
> deceit | Explain. | wolves_a3s2
> truth | Thank him. | wolves_a3s2
> quiet | Fetch the sand. | wolves_a3s2
> mercy | Ask Gu to help. | wolves_a3s2

=== wolves_a3s2 | The Plan
“They’re hunters,” you say. “The Garrison. They’ve tracked the wolves for weeks. They’ve set up a line along the northern ridge with rifles.” You draw it in the dust. “They think the wolves have a den in the high gully. They’re going to drive them down into the camp and shoot them.”
“And the child?”
“Is up there. With the pack.” Your finger trembles. “If the soldiers drive the wolves, the child will be caught in it.”
Hanming nods slowly. “So we pull the wolves out first.”
“Yes. By the other side.”
“With howls.”
“If the glass sounds like a pack,” you say, “and calls from the south, they’ll go to answer it. They’re curious. They always answer.”
“And the Garrison will follow the wrong sound.”
“Yes.”
Hanming rubs his chin. “It’s a good plan,” he says. “It has one flaw.”
“What?”
“It’s a lie,” says Hanming. “To the wolves.”
> deceit | Say it is for their good. | wolves_a3s3
> truth | Admit it. | wolves_a3s3
> quiet | Say nothing. | wolves_a3s3
> mercy | Say you will tell them after. | wolves_a3s3

=== wolves_a3s3 | A Small Wrong
“Then I shall tell them after,” you say. “I shall sit down with the Grey Mother, and say I am sorry.” You say it plainly. “It is a small wrong to prevent a large one.”
“It’s still a wrong.”
“Yes.”
“You don’t seem very bothered.”
“I am extremely bothered,” you say. “I shall be sick, in a bit.” You manage a smile. “But I do not see another way.”
Hanming studies you. He has put down the horn. For a moment he looks very like his brother: the same brown eyes, the same straight earnest brows. He nods.
“All right,” he says. “I’ll do it. But I’m going to make them very good.”
“Why?”
“So the wolves are insulted,” says Hanming, “if they find out.” His eyes twinkle. “It’s only polite.”
He picks up the pipe. He takes a gather from the furnace. It glows orange. He blows.
> deceit | Watch. | wolves_a3s4
> truth | Fetch more sand. | wolves_a3s4
> quiet | Hold the tongs. | wolves_a3s4
> mercy | Hum. | wolves_a3s4

=== wolves_a3s4 | Forty Howls
He works for two days and two nights, in a lean-to at the edge of the camp, with a portable furnace made by Shu Ning from clay and bellows. He blows forty horns. They are long and thin and strange, each a different length, each with a reed of bone in the throat. They stand in a rack, pale blue and green and amber, like organ-pipes. When he blows across the open end, they give out a sound.
It is a wolf.
It is a perfect wolf. It rises, quavering, from a low growl to a high wail, and cracks at the top. It is a young male, answering a mate. It is an old female, calling a pack. It is a cub, whining. Each horn has a different voice. When they are blown together, they make a chord.
The Listeners come to hear. They stand about the lean-to in silence, listening. Sarnai is open-mouthed. Temur is shaking his head.
“It’s uncanny,” he says. “It’s not natural. It’s the wolves.”
“It’s glass,” says Hanming, proudly.
Gu, beside him, has tears in his eyes.
> deceit | Blow one. | wolves_a3s5
> truth | Praise him. | wolves_a3s5
> quiet | Listen. | wolves_a3s5
> mercy | Hug Hanming. | wolves_a3s5

=== wolves_a3s5 | Placing the Pipes
You set them out on the second night, on the south side of the high ground, in a long curved line. You do it in the dark, in the cold, with your breath smoking. Dagva’s Red Scarves hold the ponies. Temur takes the north. Each horn is set on a rock or in a crack, its mouth turned to the wind, its tail fixed with a stone. The wind blows across them.
It takes a while to catch. Then, suddenly, one lets go. A long, quavering, human-sounding howl rolls out over the hills, so lifelike that you start. Another joins. A third. In a minute the whole line is singing, a rising, falling, shivering chord that fills the sky.
Far off to the north, on the ridge, a long grey line of heads comes up.
The wolves have heard. They turn. They stand motionless, their ears pricked. The sound goes on. It is a pack. It is a strange pack, calling from the south, asking.
The she-wolf lifts her muzzle and answers.
> deceit | Hold your breath. | wolves_a3s6
> truth | Look at Hanming. | wolves_a3s6
> quiet | Wait. | wolves_a3s6
> mercy | Pray. | wolves_a3s6

=== wolves_a3s6 | The Pack Moves
They come down off the ridge like water. Forty grey bodies, swift and silent, pouring down the northern slope in a long loose stream. They do not run. They lope. They go with their heads low and their tails out, in perfect order, across the dry hills toward the voices in the south. The moon is up. The shadows of the wolves are enormous.
Behind them, in the high gully, a line of grey-coated riflemen is standing to arms. They have been waiting two days. They are cold and bored. They have heard nothing. They are watching the empty ridge.
“Now,” breathes Temur.
You slip up the northern slope, in the dark, with Odval at your side and a handful of riders. You climb fast. You climb with your heart in your mouth. The gully is a black cleft. The soldiers are a hundred yards off. You can hear them coughing.
In the shadow of a boulder, curled up with her thumb in her mouth, a small girl is asleep on a heap of grey fur.
> deceit | Reach her. | wolves_a3s7
> truth | Whisper her name. | wolves_a3s7
> quiet | Pick her up. | wolves_a3s7
> mercy | Cover her mouth. | wolves_a3s7

=== wolves_a3s7 | Nergui, Again
She wakes as you lift her. She opens her eyes. They are enormous in the dark. She looks at you. She looks at Odval. She looks at the dark shape of the nearest soldier. She opens her mouth.
Odval puts a hand over it, very gently. “Hush,” she says. “It’s all right. It’s only a game.”
Nergui’s eyes go round. She nods. Her small body is shaking. She whispers, through the fingers: “Where’s the Grey Mother?”
“She’s gone,” you say. “She went to see her friends.”
“Oh.” The child considers. “She said not to leave. She said I was to stay until they came.”
“Who?”
“The people with the bones.” She wriggles. “She was going to show them. But I think I’d better go home. I’m hungry.”
You carry her down. It takes twenty minutes. The soldiers do not stir. The wolves are far away. By the time the first light touches the ridge, she is in her mother’s arms, wrapped in felt, eating a bun.
> deceit | Watch. | wolves_a3s8
> truth | Wipe your face. | wolves_a3s8
> quiet | Step back. | wolves_a3s8
> mercy | Smile. | wolves_a3s8

=== wolves_a3s8 | Black Ford, Found
You tell the Grey Mother afterwards. You go up alone, at dusk, to the high ridge, where she lies in the lee of a stone with her pack about her. You sit down in front of her. You say you are sorry.
She listens. She is old, and thin, and her coat is grizzled grey. She regards you with her calm yellow eyes. When you have finished she gets up, stiffly, and walks round you once, sniffing. She sniffs your hands. She sniffs your face.
She sneezes.
Then she lies down again with a grunt, and puts her chin on her paws, and looks at you. And it is quite clear what the look means. It means: I knew. It means: I was curious. It means: well done.
She raises her head. She howls, once, low and long. The pack takes it up.
It is not a message. It is a name. It is a place. It is the place the bones are.
You listen to it all the way through. When it ends, you say, “Black Ford.”
She wags her tail.
> deceit | Bow. | wolves_a3s9
> truth | Thank her. | wolves_a3s9
> quiet | Stay. | wolves_a3s9
> mercy | Hold out your hand. | wolves_a3s9

=== wolves_a3s9 | A Grave Road
They go in force. The clan, the Red Scarves, the Garrison’s deserters, Temur’s riders, and the wolves. They ride east together, across forty miles of grass, under a sky full of stars, with Hao Lan’s notes in a satchel and Hanming’s glass howls in a crate. The wolves run in the van, grey streams in the grass. At night they sing, and the glass answers.
At the ford they find the bones. They are scattered along the bank, in drifts, half-buried, picked clean. They are the bones of old men and women and children, bleached, rain-washed, trodden by wolves. There are two hundred and eleven. The Listeners go among them with their hats in their hands.
Odval plays the pipe. Chimeg, who has been carried in a litter, taps the earth with her stick. Bold sings the first lament. The wolves lie round the edge of the field in silence, with their heads on their paws.
“It’s enough,” says Temur, in a whisper. “It’s all we can do.”
“It’s a start.”
He nods, with wet eyes.
> deceit | Bow. | wolves_a3s10
> truth | Kneel. | wolves_a3s10
> quiet | Weep. | wolves_a3s10
> mercy | Take a spade. | wolves_a3s10

=== wolves_a3s10 | What the Glass Said
It is Gu who discovers it. He is lying on his stomach in the grass at the edge of the ford, examining a bone, when he sees something glint. He reaches. He pulls out a small flat disc of green glass, no bigger than a coin, with a hole in it. It is a bead. It has been strung on a thong. It is round, and clear, and polished smooth.
He turns it over. On the back is a tiny stamp in the glass. It is the mark of the Orchard.
“Hanming,” he says.
His brother comes. He takes the bead. He stands there, quite still, holding it in his palm. His thin brown face is drained of colour.
“I made this,” he says. “It’s one of mine. I made a hundred of them, for the Colonel. For the school.” His voice is a thread. “They were name-beads. For the children. Each one had a name blown into it.”
“Whose is it?”
He holds it to the light. Inside the glass, very faint, a thread of letters is visible. He reads.
“It’s a boy’s,” he says. “It says: Altan.”
> deceit | Hold your breath. | wolves_close | +wolves_decoyed
> truth | Take his arm. | wolves_close | +wolves_decoyed
> quiet | Look at Yue’s caravan. | wolves_close | +wolves_decoyed
> mercy | Say nothing. | wolves_close | +wolves_decoyed

// ---------------------------------------------------------------- a4: the track
=== wolves_a4s1 | Tracks
You do not wait for the rest. You go straight up the ridge in the dusk, alone, with a lantern and your cloak. The path is stony. The thorn-bushes catch at your sleeves. You climb. The howling has died. In its place there is a silence so deep that you can hear your own heart.
At the top you stop. The ridge runs east and west, a long bare spine of limestone, silvered by the rising moon. There is no one. There is no wolf. There is a trampled place where the grass is flat, and a few drops of something dark, and, in the dust, clearly printed, the track of a bare child’s foot.
It goes north.
You follow. The track is small and light and quick. It doesn’t waver. It is the track of someone who knows exactly where she is going. Beside it, at intervals, are others: broader, deeper, four-toed. They pad along on either side, in step.
They are escorting her.
> mercy | Follow. | wolves_a4s2
> truth | Call out. | wolves_a4s2
> quiet | Go slowly. | wolves_a4s2
> inquiry | Look for a marker. | wolves_a4s2

=== wolves_a4s2 | The Gully
The tracks lead into a gully: a narrow rocky cleft, forty feet deep, with a trickle of water in the bottom. It is dark. It smells of dog and old bone and damp earth. The walls are lined with hanging moss. The moonlight does not reach the floor. You go down on your hands and knees, with the lantern held out before you, shielding the flame.
The cleft widens. Ahead, in the wall, is a dark mouth: a cave. Its entrance is hung with a curtain of dried grass. Round it, in the soft mud, are the prints of a great many paws.
It is a den. It is the den.
You stop. Your throat is dry. The lantern shakes. You are not afraid, exactly; you are in the grip of something deeper, like the hush at the top of a mountain. Behind the curtain, from the dark of the cave, comes the sound of breathing.
It is slow. It is deep. It is the breathing of something very large and very patient.
You say, in a whisper: “Hello?”
> mercy | Wait. | wolves_a4s3
> truth | Go in. | wolves_a4s3
> quiet | Lower the lantern. | wolves_a4s3
> inquiry | Say who you are. | wolves_a4s3

=== wolves_a4s3 | Inside
The grass curtain parts. A great grey head emerges, huge, shaggy, with a torn ear and burning yellow eyes. She regards you without hostility. She breathes out, a long warm gust that smells of earth. Then she steps aside, and her great body folds down, and she lies in the mouth of the cave with her chin on her paws.
She is letting you pass.
You duck under the curtain. The den is a low round chamber, perhaps twelve feet across, floored with dry grass and the polished white of old bones. A faint light comes from somewhere: a glow of phosphor in the roof. It is warm. It smells of dog.
In the middle of the floor, in a nest of grey fur, a small girl is asleep with her arm round the neck of a wolf. Round her, crowded close, a dozen cubs are tumbled in a heap, soft and woolly and snoring. The child’s plaits are tangled. Her thumb is in her mouth. She looks perfectly at home.
“Nergui,” you whisper.
She doesn’t stir.
> mercy | Kneel. | wolves_a4s4
> truth | Touch her. | wolves_a4s4
> quiet | Wait. | wolves_a4s4
> inquiry | Look at the cubs. | wolves_a4s4

=== wolves_a4s4 | The Litter
There are seven. They are three months old, with round bellies and big paws and ears that are too large for their heads. They have the pale blue eyes of newborns. They are piled on top of one another in a heap, like puppies, and one of them has its tail in another’s mouth. As you watch, a small grey one raises its head, yawns, shows a pink tongue and eight white teeth, and goes back to sleep.
You find that you are smiling.
“Thirty-eight,” says the she-wolf.
It is not a voice. It is the shape of a thought in your head, deep and slow, as a sound is deep and slow under water. She does not move her jaws. But you hear it: a number, and a quiet, grave warmth behind it.
“Thirty-eight?”
“Of this litter and the last. Thirty-eight died. Last winter. Of the cold. Of hunger.” Her thought is dry and calm. “The soldiers drove the deer. We had nothing.”
You are kneeling on the bone-strewn floor, with your hands in your lap.
“I am sorry,” you say.
“I know.” A long grey sigh. “You are the one who asks.”
> mercy | Listen. | wolves_a4s5
> truth | Say yes. | wolves_a4s5
> quiet | Bow. | wolves_a4s5
> inquiry | Ask what she wants. | wolves_a4s5

=== wolves_a4s5 | What the Wolf Wanted
“Only to be heard,” says the Grey Mother. “It is what everyone wants.” Her thought is soft. “We have been trying to tell your people for two winters. We have brought bones to your doors. We have howled on your hills. You killed the bones. You burned them.”
“I know.”
“We did not mind. We do not mind. We are animals. We do not hold a grudge.” A pause. “But the bones minded.”
“The bones?”
“They are cold,” says the wolf. “They have lain for two winters in the grass. They have no names. They have no place. They are waiting at the ford for someone to come.” She lifts her head. Her yellow eyes meet yours. “We took the child because she could hear. The rest of you cannot. We needed someone to carry the message.”
“You could have asked.”
“We did,” says the wolf. “In four notes.”
You stare.
“Nobody answered,” she says, “until you.”
> mercy | Take her paw. | wolves_a4s6
> truth | Say you will go. | wolves_a4s6
> quiet | Weep. | wolves_a4s6
> inquiry | Ask how many. | wolves_a4s6

=== wolves_a4s6 | A Name for the Cold
“Two hundred and eleven,” says the Grey Mother. “It is the number of the dead. Every one a Listener. Every one a name.” She breathes. “We do not know the names. We know the smell. We know where each lies.”
She lifts one huge paw and sets it on your knee. It is heavy and warm. The claws prick through your clothes. In her eyes there is something so ancient and gentle that you cannot hold her gaze.
“Will you carry them?” she says.
“Yes.”
“Even though it is a long way?”
“Yes.”
“Even though they are cold?”
“I know about cold,” you say. “I was cold when I was small. I reached for a lamp.”
The wolf makes a sound in her throat. It might be a laugh.
“Then you will do,” she says.
She lowers her head and licks your palm, once, with a rough hot tongue. It stings. The scar throbs. And for an instant, in the glow of the roof, you see a long line of figures standing on a riverbank, in the snow, in white, facing east.
> mercy | Hold her gaze. | wolves_a4s7
> truth | Bow. | wolves_a4s7
> quiet | Close your eyes. | wolves_a4s7
> inquiry | Ask about Nergui. | wolves_a4s7

=== wolves_a4s7 | The Child Wakes
She wakes with a yawn and a stretch, like a kitten. She sits up in the nest of fur. She rubs her eyes with her fists. She looks round the cave, at the cubs, at the Grey Mother, at you. She sees you kneeling. She smiles.
“Oh,” she says. “You came.”
“I did.”
“The Grey Mother said you would.” She pats the wolf, familiarly, on the muzzle. “She said, wait. She said, she’s coming.” She scrambles to her knees. “I did. I waited. I’m very good at waiting.”
“I know.”
“I counted the stones.” She shows you her fist. “All of them. Two hundred and eleven. I held them all night.” She opens it. The white pebbles gleam. “They’re not stones.”
“No.”
“They’re bones.” She says it gravely. “But I don’t mind. She said they’re only little ones.”
You gather her up. She is warm and light and smells of dog. She puts her arms round your neck.
> mercy | Hold her. | wolves_a4s8
> truth | Thank the wolf. | wolves_a4s8
> quiet | Rise. | wolves_a4s8
> inquiry | Ask her about the cubs. | wolves_a4s8

=== wolves_a4s8 | Home
You carry her down. The Grey Mother accompanies you to the mouth of the gully, a great grey shadow at your heel, and stops at the ridge. She sits down. She lifts her head. She regards the camp below, a ring of white tents in the first light, and the small figures running out.
Nergui’s mother reaches you first. She runs the last fifty yards, stumbling, with her arms out and her scarf flying. She snatches the child. She holds her to her breast with a cry that is half a sob and half a scream. The child, squashed, says, “Mama, I’m fine.”
“Fine!” The woman shakes her. “You’re—you’re—” She kisses her face, her hair, her hands. “Where were you?”
“With the wolves.”
“I know where you were!”
“Then why did you ask?” says Nergui, reasonably.
The crowd bursts into laughter and tears. Odval, at the back, has her face in her hands. Temur is wiping his eyes. The she-wolf stands on the ridge above, against the sunrise, and howls once.
> mercy | Smile. | wolves_a4s9
> truth | Take Odval’s arm. | wolves_a4s9
> quiet | Look up. | wolves_a4s9
> inquiry | Ask Temur about Black Ford. | wolves_a4s9

=== wolves_a4s9 | A Gathering
They gather that night in the Matriarch’s tent. It is crowded. It is hot. It is dark but for the glow of the brazier. Tamar sits on her felts, with the she-wolf lying at her feet, and a ring of old men and women round the walls. Nobody speaks. The old woman has her hand on the wolf’s head.
“Two hundred and eleven,” she says. “At Black Ford.” Her thin voice is quiet. “I did not know.”
“No one did.”
“I should have.” She wheezes. “I am the one who decides. I decided there was no need to look.” Her face works. “It was the Colonel’s tea, you see. He sent me a gift, two winters ago. A chest of the finest tea. I drank it all.”
You stare at her.
“He said it was a courtesy,” says Tamar. “And every cup I drank, I forgot a little. I forgot to ask. I forgot to listen. And the wind went on saying: Black Ford, Black Ford, Black Ford.” Her sightless face turns to you. “I must have heard it four hundred times.”
“Grandmother—”
“The dust,” says Tamar. “It was in the tea.”
> mercy | Take her hand. | wolves_a4s10
> truth | Say you understand. | wolves_a4s10
> quiet | Be silent. | wolves_a4s10
> inquiry | Ask who brewed it. | wolves_a4s10

=== wolves_a4s10 | Forgiving the Tea
“I did,” says Tamar. “I put the leaves in the pot with my own hands.” She shakes her head. “I am a stupid old woman.”
“You are not.”
“I have been very stupid for two winters.” She lifts a wrinkled hand to her blindfold. “But the wolf forgave me. She put her head on my knee.” She laughs, a thin wavering sound. “It is not a thing a stupid woman would have the sense to do.”
The she-wolf thumps her tail on the carpet.
“Well,” says Tamar. “We shall bury them. We shall do it with the proper rites. We shall stand them up, and say their names, and sing the long lament.” She straightens. “And then I shall march on that fort, and I shall break every pot in it.”
There is a moment of silence.
Then Temur says, with a perfectly straight face, “That seems a very sound plan, Grandmother.”
The tent erupts.
> mercy | Laugh. | wolves_close | +wolves_found
> truth | Say you will help. | wolves_close | +wolves_found
> quiet | Smile. | wolves_close | +wolves_found
> inquiry | Ask what the plan is. | wolves_close | +wolves_found

// ---------------------------------------------------------------- hidden: the held door
=== wolves_h1 | Four Notes
You hum it. Not loud. You hum it into the dark, through the closed throat of the night, to the hills and the howling and the cold green sky. It is four notes, rising, leaning forward like a person listening. It is the question that was asked of you in a gallery of jars, by something that did not sing.
The howling stops.
It stops in the middle of a breath. The dogs fall silent. The camp, which has been in an uproar, goes still. Odval turns her head slowly, with her bone pipe halfway to her lips.
“Where did you get that?” she says.
“From a jar.”
“It is the Door.” She whispers it. “The wolves’ Door.”
“I did not know it had a name.”
“It does not. It has a tune.” Her pale face is rapt. “They have been singing it for a thousand years. Nobody knows who taught them.” She wets her lips. “Do it again.”
You do. The four notes rise from you like smoke. They go out over the roofs, and the horses, and the hills.
On the northern ridge, a wolf answers.
> inquiry | Hold the last note. | wolves_h2
> truth | Wait. | wolves_h2
> mercy | Look at Odval. | wolves_h2
> quiet | Listen. | wolves_h2

=== wolves_h2 | Who Is There
It sings the same four notes. It sings them low and slow, in the voice of an old female, and the whole ridge answers: a long ragged chord, in unison, with the harmony of a thousand years. It rolls down off the hills. It fills the sky. It sets every bell in the camp ringing in sympathy.
And at the end of the four notes it holds. It does not close. It leaves the last open, hanging in the cold air.
It is a question.
Odval is weeping. She has the pipe in her hand but cannot lift it. “It is asking,” she whispers. “It is asking who is there. It is the only question it has ever asked.”
You take a breath.
“I am here,” you say aloud, in the language of the river, to a hill full of wolves. “I am the one who asks. I have come to listen.”
The note breaks.
It breaks into a great rushing sigh, like wind through a forest. It sinks and fades. And then, on the northern ridge, a single dark shape detaches itself from the line and begins to come down.
> inquiry | Wait. | wolves_h3
> truth | Kneel. | wolves_h3
> mercy | Hold Odval. | wolves_h3
> quiet | Stay still. | wolves_h3

=== wolves_h3 | The Grey Mother Comes Down
She walks into the camp. She does it slowly, with dignity, on stiff old legs, between the tents, past the staring Listeners, past the whining dogs. Her coat is grizzled and her ear is torn. She is the size of a calf. She walks straight to you, and stops, an arm’s length off, and looks up.
There is a child in her mouth.
She lays her down on the grass, gently, as a cat lays a kitten. The child sits up, rubbing her eyes. She is seven, with black plaits and a dirty face, wrapped in grey fur. “Oh,” she says. “Are we there?”
The wolf licks her face. Then she lifts her head, and looks at you, and the thought comes into your mind like a pebble into a pool, deep and slow and warm.
“Black Ford,” says the Grey Mother. “Two hundred and eleven.”
“I know,” you say. “I heard.”
“You will come.”
“Yes.”
“Good.” She turns away. At the edge of the camp she looks back once over her shoulder. “Tell the old one,” she says, “that the tea was not her fault.”
She trots into the dark.
> inquiry | Weep. | wolves_close | +wolves_door_answered
> truth | Take Nergui. | wolves_close | +wolves_door_answered
> mercy | Bow. | wolves_close | +wolves_door_answered
> quiet | Watch her go. | wolves_close | +wolves_door_answered

// ---------------------------------------------------------------- close
=== wolves_close | The Graves at the Ford
The river runs slow and brown over its stones. The dead are in their rows on the bank, two hundred and eleven mounds with a stone at the head of each, facing east. It is dawn. A mist lies on the water. The Listeners stand in silence, in a long line, with their hats in their hands. Chimeg, in her litter, taps the earth with her stick.
+[how] wolves_ford_buried | You buried two hundred and eleven at Black Ford, one by one, facing the sunrise.
+[how] wolves_hunted | You went up with the hunters, and pulled a spear out of an old wolf.
+[how] wolves_decoyed | Hanming’s glass howls drew a pack off a ridge and found a name-bead in the grass.
+[how] wolves_found | You carried a child out of a wolf’s den, and an old woman forgave a pot of tea.
+[how] wolves_door_answered | A wolf carried a child into the camp in her mouth and asked who was there.
The she-wolf sits on the bank above, alone, in the early light. She doesn’t howl. She doesn’t move. She is a grey shape on the rise, motionless, with her ears forward and her torn ear flat.
You walk up the bank. You sit down beside her. She doesn’t look at you.
For a long time you say nothing.
At last, out of the silence, in the deep slow voice of a thought, she says: “That was well done.”
“It was only digging.”
“No.” She turns her head. Her yellow eyes are very calm. “It was a door.”
> truth | Bow. | wolves_close2 | +b4q_wolves
> mercy | Stroke her head. | wolves_close2 | +b4q_wolves
> quiet | Sit with her. | wolves_close2 | +b4q_wolves
> inquiry | Ask what happens now. | wolves_close2 | +b4q_wolves

=== wolves_close2 | What the Wolf Said Last
“Now we go,” says the Grey Mother. She gets up, stiffly, and stretches, back arched, forelegs out. “We have done what we came for. The winter is coming. The cubs must be fed.” She yawns. It is vast and pink and toothy. “I am old. I should like to see one more spring.”
“Will you be safe?”
“No.” Her thought is dry. “But I shall be there.” She looks at the line of graves. “You will see us again. Not here. Farther on. When the page is torn.”
“The page?”
“You will know.” She turns. She walks down the bank, stiff-legged, into the mist. Her pack rises from the shadows to meet her, one by one, grey on grey. Forty of them. They flow along the river in a long soundless line.
They are gone before the sun clears the grass.
You sit on the bank for a long time, in the thin cold light, with the dead beside you. The river talks. A lark goes up. Behind you, softly, Odval begins to play.
> truth | Listen. | hub_b4_b | bond:odval+3
> mercy | Close your eyes. | hub_b4_b | bond:odval+3
> quiet | Stay. | hub_b4_b | bond:odval+3
> inquiry | Ask her what the tune is. | hub_b4_b | bond:odval+3

`,
  scenarios: String.raw`
$ SU_WOLVES_HOWL | trust+3 respect+3 fear+4 | elder | The Elder hears a hundred wolves call over a camp and feels something she has no word for.
hostile: I have never been so afraid of a sound. I stood in a tent, in the dark, and a hundred voices told me that I was small. I found it strangely clarifying.
wary: Odval said the wolves came to tell us something. I said: what? She said: they do not know either. They only know that it must be said.
neutral: I used to think of wolves as the Law Hall thinks of them: a statistic on a tax return. I find I have changed my mind.
warm: They sing in a chord. I could hear it. A fifth and an octave, rising. Pao’s door, I think. Did you hear it? I should not like to be mistaken.
devoted: If there is anything out there that wants to tell me something, I should like to be told. I am sixty years behind on my correspondence.
`,
  remarks: String.raw`
% wolves_nergui_later | since:b4q_wolves>=4 | gu | Nergui keeps a wolf-tooth on a thong. She says the Grey Mother gave it. Odval says wolves do not give things. Nergui says this one did.
% wolves_ford_later | since:wolves_ford_buried>=6 | ren | Two hundred graves at Black Ford. Odgerel has put a bridle on one. She will not say whose.
`,
};
