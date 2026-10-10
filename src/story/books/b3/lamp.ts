import type { Arc } from "../types";

/**
 * Book Three, arc six: the Salt Lamp. Qiu (cot IV) keeps the dark lighthouse on the spur and talks by mirror because it is easier
 * than talking. Four approaches: climb and ask (a1, truth), hold the lower door against the Concord's marines (a2, force),
 * come up as the Harbour Board's inspectors (a3, deceit), and bring the Elder to answer her old mirror (a4, quiet). A hidden
 * route opens the lamp's third lens, which sees the Drowned Library at low water, and the door that leads down to it.
 * Cast: Qiu, the Elder, Sergeant Hok and six marines, Hao Lan.
 */
export const lamp: Arc = {
  id: "lamp",
  name: "The Salt Lamp",
  scenes: String.raw`
=== lamp_entry | The Spur
The spur is a black wedge of rock thrust out over the harbour, and the lighthouse stands on the end of it like a finger raised for silence. It is a hundred feet of dark brick with a copper cap gone green, and four hundred stairs inside. A path of salt-white gravel climbs the rock in loops. Gorse and sea-pink grow in the cracks. At the foot, a door of black oak stands under a lintel carved with a lamp and two words: KEEP WATCH.
The door is shut. There is no bell. A small round mirror of bronze hangs from a nail beside the frame, polished bright, with a lotus on the back.
As you reach it the mirror swivels on its nail all by itself, catches the morning light, and throws a dazzle across your face. Three short, two long. Three short, two long.
Gu squints. “Is that a trick of the sun?”
The Elder, behind you, has gone very white. “No,” she says. “It is good morning.”
> truth | Answer the mirror the way the Elder did, with the sun. | lamp_a1s1
> force | Notice the grey shapes moving among the gorse above, and the glint of steel. | lamp_a2s1
> deceit | Tell the Elder to stay back, and go up in the sash of the Harbour Board. | lamp_a3s1
> quiet | Tell the Elder to take the mirror down from its nail, and answer it herself. | lamp_a4s1
> inquiry | Fit the bone tide-key into the keyhole under the mirror. | lamp_h1 |  | mender_has_key | You have no tide-key.
> inquiry | Flash the signal the fog-light sent, and watch the door. | lamp_h1 |  | coast_qiu_signal | The Lamp has not spoken to you yet.

// ---------------------------------------------------------------- a1: the climb
=== lamp_a1s1 | Three Short, Two Long
You catch the sun on the back of your hand and throw it at the mirror. It is clumsy. The reflected spot wobbles and skids across the bronze, and you hold it steady, and flick your fingers, three short, two long.
The mirror quivers on its nail. After a moment it flashes back a single quick long flash, and the door unlatches.
It swings inward with a soft grinding of hinges. A stair rises in the dark, steep and narrow, winding up the inside of the tower. Cold air breathes out, smelling of paraffin, brass and old stone.
“She is saying come up,” the Elder says. She sounds odd. “She is saying mind the seventh step. It is loose.”
“How can you tell?”
“The long flash. It was a code for the seventh step, once.” She swallows. “I did not think she remembered.”
> truth | Go up. | lamp_a1s2
> quiet | Let the Elder go first. | lamp_a1s2
> mercy | Offer the Elder your arm. | lamp_a1s2
> inquiry | Ask what else the code could say. | lamp_a1s2

=== lamp_a1s2 | Four Hundred Stairs
There are exactly four hundred. You count them. The stair spirals up the inside of the tower, around a hollow core where a rope hangs from a pulley, and on every ninth landing there is a window, a narrow slit with a view of the sea. The light falls through them in blades. In between the tower is dark and cool and smells of salt.
The seventh step is loose. You mind it. The Elder does not, and stumbles, and you catch her. She laughs, short and breathless, and says she has not been this far up anything in fifteen years.
At the two hundredth stair you stop to rest. A line of chalk marks the brick: a tally, five-barred, in a child’s hand. Ten, twenty, fifty, a hundred. Beside the last, some years ago, someone has written in a neater hand: climbed again today.
Above you, very faintly, someone is humming. It is not a tune. It is one flat note, held and held.
> truth | Keep climbing. | lamp_a1s3
> quiet | Listen. | lamp_a1s3
> mercy | Wait for the Elder to get her breath. | lamp_a1s3
> inquiry | Ask who made the tally. | lamp_a1s3

=== lamp_a1s3 | The Keeper’s Room
At the top of the stair there is a round room. It has a stove in the middle, a sleeping-mat, a shelf of books bound in oilcloth, and a table covered with slates. Every slate is chalked with a line of tiny characters. The windows are a ring of bright air, and the whole coast lies beyond them, hazy and enormous.
A young woman is sitting cross-legged on the table, with a slate on her knee and a stub of chalk behind her ear. She is small and sinewy, with cropped hair and brown eyes that don’t quite look at anything. Her tunic is stained with lamp-black. There is a mirror in her hand.
She does not get up. She watches you come in, and looks at the Elder, and her mouth does something complicated.
Then she turns the slate over and writes. She holds it up. In clear square characters, it says:
YOU CAME.
> truth | Say yes. | lamp_a1s4
> mercy | Let the Elder answer. | lamp_a1s4
> quiet | Nod. | lamp_a1s4
> inquiry | Ask if she speaks. | lamp_a1s4

=== lamp_a1s4 | Slates
She does speak. It is a low rasp, as of a voice that has been kept in a drawer. She uses it so rarely that she seems to grudge each word. “Yes,” she says. “When I have to. Mostly I do not.” She turns the slate over. “It is quicker to write. People do not listen to what you say. They listen to how you say it. Chalk has no tone.”
She picks at the chalk on her sleeve.
“Four,” she says. “I am Four. Qiu.” She does not smile. “I have been waiting a long time to say that to somebody who knew what it meant.”
The Elder has dropped to her knees on the boards. Her hands are over her mouth. She has gone beyond speech.
Qiu looks at her for a while. Then she writes, in the plain square characters of a child learning, and holds up the slate.
GOOD MORNING, REGISTRAR.
> truth | Give them a moment. | lamp_a1s5
> mercy | Help the Elder up. | lamp_a1s5
> quiet | Look out of the window. | lamp_a1s5
> inquiry | Ask Qiu how she knew them both. | lamp_a1s5

=== lamp_a1s5 | Fifteen Years of Mirrors
“I saw you at the Water Gate,” writes Qiu. “From here. Three weeks ago. You were in a boat. The Elder was in the stern. I flashed all night. Nobody answered.” She rubs the slate with her sleeve and writes again. “I thought it was another Censor. I thought it was a trap. I flashed anyway.”
She looks up.
“I have flashed every morning for fifteen years. Good morning, Registrar. Good morning. Good morning. To the east. To the mountain.” Her voice is the barest of rasps. “I thought, if there is anyone who remembers, it will be her. I never got an answer.”
“I never saw it,” whispers the Elder. “I am so sorry. I was in a room. The window faced the wrong way.”
“I know.” Qiu shrugs, with the bleak and gentle fatalism of a girl who has made her peace with weather. “It is a long way.”
> truth | Tell Qiu she was heard now. | lamp_a1s6 | npc:SU_LAMP_MIRROR
> mercy | Say that you flashed back. | lamp_a1s6
> quiet | Take her hand. | lamp_a1s6
> inquiry | Ask her what she wanted to tell the Registrar. | lamp_a1s6

=== lamp_a1s6 | What She Wanted
Qiu thinks about it. She puts the chalk behind her ear and takes it out again. She writes: THANK YOU. Then she rubs it out. She writes: I FORGIVE YOU. She rubs that out too.
At last she writes, in letters that have grown larger and less steady: I WAS NOT AFRAID.
She holds up the slate, and the Elder reads it, and a long sound comes out of her like the sound of a rope paying out.
“I was nine,” says Qiu hoarsely. “They took us out of the cots in the dark. The woman in black picked me up. I was not afraid. I want you to know. I thought, the Registrar will come. She said she would. She said, if the lamp goes out, flash the mirror.”
“I said that,” says the Elder.
“You did.” Qiu looks at her. “So I flashed. And you came. It took longer than I thought. But you came.”
> truth | Let the Elder weep. | lamp_a1s7
> mercy | Put your arm round them both. | lamp_a1s7
> quiet | Look away. | lamp_a1s7
> inquiry | Ask what else the Registrar promised. | lamp_a1s7

=== lamp_a1s7 | The Lamp Itself
When the Elder has recovered she asks, with great delicacy, whether she may see the lamp. Qiu nods. She takes a ring of keys from her belt and unlocks a trapdoor in the ceiling, and a short ladder drops. They climb. You go last.
The lamp room is a glass cage the size of a small chapel. In the middle of it, on a brass pedestal as tall as a man, sits a great glass lens built of rings and prisms, like a pineapple of crystal. It is dark. It has not been lit for eleven years. But it is beautifully kept, every prism polished, every brass fitting oiled, every wick trimmed.
“I clean it every day,” writes Qiu. “It is something to do.”
She puts her palm flat against the glass.
“The Concord took the oil in the year of the Sealing. They said the light drew ships to the wound. They sealed the tank.” Her fingers tighten. “I have been waiting for someone to ask me to light it.”
> truth | Ask her whether it can be lit. | lamp_a1s8
> mercy | Say nothing, and stroke the brass. | lamp_a1s8
> quiet | Look out over the bay. | lamp_a1s8
> inquiry | Ask what the lamp is for. | lamp_a1s8

=== lamp_a1s8 | What a Lamp Is For
“To be seen,” writes Qiu. She chalks it fast, in big letters. “Not to see. A lamp is not for seeing. It is for being found.”
She turns the slate.
“The Concord thinks a lighthouse warns ships. It does not. It tells them someone is there. That is all. It says: this is the shore. This is a person. You are not alone.” She wipes the slate with the flat of her hand. “It is a very simple idea. It has been forgotten.”
She looks out. Below, the bay lies in the morning light, and the Wall is a pale bone, and the quay is full of small bright boats going out to fish.
“When I light it,” she says, rasping, “they will come. The Censors, the marines, the fleet. They will know where I am. I will be found.”
She smiles, the first you have seen on her.
“I would like that. I have been hiding for fifteen years.”
> truth | Tell her you will help her light it. | lamp_close | +lamp_promised_light
> mercy | Say she does not have to. | lamp_close
> quiet | Take her hand. | lamp_close | +lamp_promised_light
> inquiry | Ask how it is lit. | lamp_close

// ---------------------------------------------------------------- a2: the marines
=== lamp_a2s1 | Marines in the Gorse
They are good at it. You would never see them if the sun had not caught a buckle. Six grey figures in leather armour lie flat in the gorse on the hill above the path, rifles slung, their faces blackened with soot. They are moving towards the Lamp by inches. At their head is a thickset man with a sergeant’s stripe and a heavy jaw, who is signalling to his men with a flat hand.
Ren Qiao has seen them too. His hand is on his sword. “Concord marines,” he says quietly. “Six. A sergeant. They were here before us.”
“They are here for her,” says the Elder, white to the lips. “They have been told there is a keeper. They have been told she is a danger to shipping.”
“Is she?” says Gu.
“She is a girl with a mirror,” says the Elder, “and I will not let them take her.”
> force | Rush them. | lamp_a2s2
> truth | Call out to them. | lamp_a2s2
> quiet | Slip round the other side. | lamp_a2s2
> deceit | Pretend to be a Concord patrol. | lamp_a2s2

=== lamp_a2s2 | Sergeant Hok
“Halt!” roars the sergeant, rising out of the gorse with a rifle in his fist. His jaw is set. His men rise with him, six muzzles pointing down the slope. “By order of the Second Chancery of the Concord of Nine Peaks! Stand and be identified!”
Ren Qiao steps in front of you. His sword is drawn but low.
“Sergeant,” says the Elder, in the dry, clear voice she once used in tribunal. “I am Su Wanru, Elder of the Law Hall. I am a member of the Assembly. I am here under the Assembly’s protection.”
“The Assembly has withdrawn it,” says Hok. “Ma’am. By vote.” He is respectful. He is immovable. “You and your party are to be detained. The Lamp is to be secured. I have no wish to hurt anyone. I would be grateful if you would come quietly.”
> force | Refuse. | lamp_a2s3
> truth | Ask what the girl has done. | lamp_a2s3
> quiet | Look at his men. | lamp_a2s3
> mercy | Ask him to let the Elder go up. | lamp_a2s3

=== lamp_a2s3 | What She Has Done
“She has done nothing,” says Sergeant Hok. “That is the difficulty. She has kept a light that is not lit. She has sent signals that nobody has answered. She has existed.” He says it flatly, as if reading from a form. “The order says that the keeper of the Salt Lamp is a person of interest in the matter of the black seed. I do not know why. It is not my business to know why.”
The marines shift. One of them, a boy of nineteen, has lowered his rifle an inch.
“You are following orders,” says Ren Qiao.
“I am,” says Hok. “As were you, Warden, for twenty years.” His gaze hardens. “I know who you are. You kept the Ash Bridge. You let a Censor-General across it without so much as a question.”
Ren is silent.
“I do not hold it against you,” says Hok. “I merely observe that we are the same kind of man.”
> force | Say you are not. | lamp_a2s4
> truth | Say orders are not an excuse. | lamp_a2s4
> quiet | Watch the boy with the lowered rifle. | lamp_a2s4
> mercy | Say Ren was right to let the Censor cross. | lamp_a2s4 | bond:ren+2

=== lamp_a2s4 | The Boy
“Private Wu!” snaps Hok. “Weapon up.”
The boy’s rifle comes up. His hands are shaking. He has a round pale face and a downy upper lip, and he is staring at the Elder with an expression of dawning horror. “Sir,” he says. “That is the Elder Su. She taught my mother. My mother has her picture. She keeps it on the shelf.”
“Private.”
“Sir, I do not think we ought—”
“I will not say it again.”
The boy swallows. Tears are running down his face. He raises the rifle to his shoulder and aims it at the Elder’s heart.
“I am sorry, ma’am,” he says. “I am so sorry.”
The Elder takes one step toward him. She holds out her hand.
“My dear,” she says. “It is quite all right. Give me the gun.”
> force | Knock the rifle aside. | lamp_a2s5
> truth | Stand in front of the Elder. | lamp_a2s5
> quiet | Hold your breath. | lamp_a2s5
> mercy | Call the boy’s name. | lamp_a2s5

=== lamp_a2s5 | Give Me the Gun
For a moment everything hangs. A gull cries. The wind blows the gorse flat. Then Private Wu begins to sob, loudly, like a child, and the rifle droops, and the Elder takes it from his hands with a gentleness that hurts to see. She lays it on the grass. She puts her arms round him.
“There,” she says. “There. You are a good boy. I know. I know.”
Sergeant Hok has not moved. His jaw is working. “Corporal,” he says, in a thick voice. “Take the prisoners.”
Nobody moves.
“Corporal!”
“Sir,” says the corporal. He is a lean, tired man of forty, and he lowers his rifle with a deliberate gesture. “I have a mother too.”
One by one, the marines put down their weapons. The grass is dotted with them, like dropped sticks. Hok stands alone on the slope with a pistol in his fist.
“Traitors,” he says. He does not raise it.
> force | Take the pistol. | lamp_a2s6
> truth | Tell him it is over. | lamp_a2s6
> quiet | Wait. | lamp_a2s6
> mercy | Ask him what he wants. | lamp_a2s6

=== lamp_a2s6 | What Hok Wanted
Hok is silent for a time. He stands stiffly with the pistol in his fist, a heavy man with the weather-beaten look of one who has been a soldier too long. The wind catches his coat.
“I want it to be simple,” he says at last. “I want an order to be a thing that is right because it was given. I have been twenty-three years in uniform. I have never been asked to think.” He looks down at the weapon. “Now I am being asked, and I find I do not know how.”
He holds the pistol out by the barrel.
“Take it,” he says. “I am not going to shoot a girl with a mirror.”
You take it. It is heavier than you expected, and warm.
“What will you do?” you ask.
“I will report,” says Hok bleakly, “that the Lamp was found empty.”
> force | Thank him. | lamp_a2s7
> truth | Say he can come with you. | lamp_a2s7
> quiet | Nod. | lamp_a2s7
> mercy | Offer him tea. | lamp_a2s7

=== lamp_a2s7 | Tea on the Spur
They have tea. It is absurd, and it is what happens. Gu finds a kettle in a hut at the foot of the Lamp, and Ren Qiao builds a fire of gorse, and the marines sit about on the grass in their grey leather with their rifles stacked. Hok takes a cup. His hand shakes. The boy, Wu, sits at the Elder’s feet, drinking silently, and every so often she pats his shoulder.
Hao Lan comes up the hill with her satchel, having observed the whole proceeding from the quay with a telescope. She stops at the sight.
“I have been making notes,” she says faintly. “I am afraid I do not know how to classify this.”
“Call it a picnic,” says Ren.
Hok takes a long drink of tea.
“The fleet will be here in nine days,” he says, to nobody in particular. “I thought you should know.”
> force | Ask how many ships. | lamp_a2s8
> truth | Thank him. | lamp_a2s8
> quiet | Let him talk. | lamp_a2s8
> mercy | Refill his cup. | lamp_a2s8

=== lamp_a2s8 | The Fleet
“Nine ships,” says Hok. He turns his cup in his hand. “Under the Inspector Fang. Seven cutters, two troop carriers. Eight hundred men. They have a thing aboard that I was not told about, in a lead-lined case. I was not told what.” He drinks. “They are coming to take the bearer. And to seal the coast.”
“Seal it?” says Hao Lan.
“The whole bay.” He looks at the harbour. “I heard it from a clerk. They mean to put a ward across the mouth of it, a chain of lamps, so nothing goes in or out. They mean to hold Tidewall until the girl is found.”
He sets down the cup.
“I do not know if it is true. I thought you should have it.”
Nine days. The word hangs in the air like the smoke from the fire.
> force | Ask whether the Lamp is on the list. | lamp_close | +lamp_hok_warned
> truth | Thank him again. | lamp_close | +lamp_hok_warned
> quiet | Look at the sea. | lamp_close | +lamp_hok_warned
> mercy | Tell him to stay with them. | lamp_close | +lamp_hok_warned

// ---------------------------------------------------------------- a3: the inspectors
=== lamp_a3s1 | The Board
Hao Lan produces the sash from her satchel. It is mustard-yellow, with a stylised wave in black. “The Harbour Board,” she says. “Inspectors of lights and buoys. They come twice a year. They are universally despised. Nobody will ask for credentials.”
She ties it round your waist.
“I have been wondering about the Board,” she says. “It is the oldest civil body on the coast, older than the Concord, and in fifty years it has never found fault with a lighthouse. I have looked at its minutes. They are astonishing. Every entry is the same. Light correct. Keeper satisfactory. Tea provided.”
She stands back.
“We shall be two junior inspectors and a clerk. You shall be the senior. You shall frown at things.”
Gu is hiding behind the Elder, snorting.
> deceit | Frown. | lamp_a3s2
> truth | Say it feels like a lie. | lamp_a3s2
> quiet | Take the clipboard. | lamp_a3s2
> mercy | Ask whether the Elder should stay behind. | lamp_a3s2

=== lamp_a3s2 | Inspection
The door is opened by a girl with a slate. She looks at your sash, at Hao Lan’s clipboard, at Gu’s solemn mask, and writes something. She turns the slate. It says: WE HAVE NOT HAD ONE IN THREE YEARS.
“Routine inspection,” says Hao Lan crisply. “Lamp, lens, fuel, stair. Please do not be alarmed.”
The girl writes again. I AM NOT ALARMED. I AM DELIGHTED. She stands aside, and holds the door.
You go in. The stair is cold and clean. You climb, slowly, noting nothing. At the first landing you frown at a window. At the second you frown at a handrail. At the third, to your surprise, you find that frowning is genuinely hard work.
The girl follows, writing. By the hundredth stair, her slate is covered with remarks. WATCH THE SEVENTH. NOT THE SEVENTH. THE SEVENTH FROM THE TOP. NO, THE OTHER SEVENTH.
> deceit | Keep frowning. | lamp_a3s3
> truth | Ask her name. | lamp_a3s3
> quiet | Count the steps. | lamp_a3s3
> inquiry | Ask where the oil is kept. | lamp_a3s3

=== lamp_a3s3 | The Oil Tank
The tank is a squat bronze cylinder in a cellar at the foot of the tower, sealed with a lead stopper that bears the Concord’s eye. It is as tall as a man and covered in dust. A paper tag hangs from the stopper. In the angular hand of a clerk, it reads: CLOSED BY ORDER. DO NOT OPEN. 2nd CHANCERY.
“Eleven years,” writes the girl. “I dust it.”
Hao Lan crouches, examines the seal, and takes out her pencil. “It is a Chancery seal,” she says. “Very simple. Wax over wire. There are two ways to break it. One is to cut. The other is to be authorised.”
She taps her clipboard.
“I am an inspector of the Harbour Board, madam. I have the power to demand that any closed tank on the coast be opened for inspection. It is in the charter of 811. I wrote the footnote.”
She smiles, very sweetly, at the seal.
“It will be most irregular. It will be most legal.”
> deceit | Order the tank opened. | lamp_a3s4
> truth | Ask the girl if she wants it opened. | lamp_a3s4
> quiet | Step back. | lamp_a3s4
> mercy | Hold the lantern. | lamp_a3s4

=== lamp_a3s4 | An Honest Question
The girl stares at the tank. She stares at it for so long that you think she has not understood. Her hands are slack at her sides. The slate dangles.
Then she lifts the chalk. She writes, slowly, with great concentration, the longest sentence you have seen her write.
IF YOU OPEN IT THEY WILL KNOW. THE CONCORD WATCHES THE SEAL. THERE IS A THREAD IN THE WAX THAT GOES TO A BELL IN THE HARBOUR OFFICE. IT WILL RING. I HAVE KNOWN ABOUT THE BELL FOR ELEVEN YEARS.
She looks up. Her eyes are very clear.
I HAVE NOT WANTED TO RING IT.
“You could have cut the thread,” says Hao Lan.
The girl shakes her head. She writes: THEN THEY WOULD KNOW I KNEW.
Nobody says anything. The cellar is cold and still.
> deceit | Ask her what she wants. | lamp_a3s5
> truth | Say you will cut the thread. | lamp_a3s5
> quiet | Wait. | lamp_a3s5
> inquiry | Ask who is on the other end of the bell. | lamp_a3s5

=== lamp_a3s5 | The Bell
“A man named Lu,” says Hao Lan, after consulting her notes. “The Warden of the Wall. It is a Board position. He is on the other end of the thread. He sits in the harbour office with the bell above his head.” She looks up. “He does not like the Concord. I believe he would not ring it.”
The girl looks at her.
“Warden Lu,” says Hao Lan firmly, “keeps a flute at his desk. He plays it when he is unhappy. I have seen the Board’s inventory. He has an entry for a bell. In the margin he has written, in pencil: broken.”
She smiles, as brilliant as a gull.
“I do not think it will ring.”
The girl is staring. Her mouth trembles. She wipes the slate clean, and writes: HOW DO YOU KNOW.
“I do not,” says Hao Lan. “But I have a feeling about flautists.”
> deceit | Go ahead. | lamp_a3s6
> truth | Tell the girl who you really are. | lamp_a3s6 | +lamp_confessed
> quiet | Look at the thread. | lamp_a3s6
> mercy | Offer the girl your hand. | lamp_a3s6

=== lamp_a3s6 | Breaking the Seal
Hao Lan breaks the seal with a bone pick and a firm, businesslike jab. The wax cracks. The wire snaps. Somewhere a long way off, down in the town, there is a tiny sound like a teaspoon on a saucer.
The tank’s lead stopper unscrews. A smell rises, rich and sweet and sharp: paraffin, whale-oil, and a faint dark undertone of salt. The tank is full to the brim. It is clear as water.
The girl dips a finger, and lifts it to her nose. She closes her eyes.
Nobody speaks. Far down in the harbour, the bell does not ring.
When she opens her eyes, she writes: THANK YOU. And then, with an appalling straightforwardness: I KNOW WHO YOU ARE. I HAVE KNOWN SINCE THE DOOR. I WAS ONLY WAITING TO SEE IF YOU WOULD TELL ME.
> deceit | Admit it. | lamp_a3s7
> truth | Say you are sorry for the pretence. | lamp_a3s7
> quiet | Smile. | lamp_a3s7
> mercy | Say her name. | lamp_a3s7

=== lamp_a3s7 | Four
“Four,” you say.
She puts down the slate. She puts down the chalk. She stands there, a small figure in a lamp-black tunic, in a cellar that smells of oil, with her hands hanging open. When she speaks it is a harsh low croak that cracks on the first syllable.
“Qiu,” she says. “Not four. Four is a cot. Qiu is a person. Mother says I have to choose which.”
She laughs once.
“It is very annoying. I like both.”
She wipes her eyes with the back of her wrist. “You are taller than I thought,” she says. “You have her hands. The Registrar’s. That is a funny thing. I wonder if you know.”
You look down. Your hands are narrow and ink-stained and square at the knuckles. They are not like anyone’s you have seen. But the Elder’s, when she gave you the comb, were exactly the same.
> deceit | Say nothing. | lamp_a3s8
> truth | Say you had not noticed. | lamp_a3s8
> quiet | Hold your hands out. | lamp_a3s8
> mercy | Ask her to tell you more. | lamp_a3s8

=== lamp_a3s8 | A Lamp Lit
They light it that evening. It takes four of you. Qiu works the wicks with a long brass spill; Gu pumps the oil; Hao Lan trims, with a pair of silver scissors and a flawless disdain; you hold the chimney. The flame catches with a soft cough and grows. A lens begins to glow. The prisms take the light and break it into a hundred rays, and the lamp room, which has been dark for eleven years, fills with gold.
She turns the lens by hand. She stands at the great brass wheel with her slender arms braced, and the beam sweeps out over the bay: once, slowly, a long pale blade. It strikes the Wall, and the Wall blazes white. It strikes the quay, and the quay is a ribbon of silver. It strikes the sea, and the sea is a sheet of gold.
Down in the town, a hundred voices rise in a cheer.
> deceit | Cheer with them. | lamp_close | +lamp_lit
> truth | Watch Qiu’s face. | lamp_close | +lamp_lit
> quiet | Stand very still. | lamp_close | +lamp_lit
> mercy | Hold her hand on the wheel. | lamp_close | +lamp_lit

// ---------------------------------------------------------------- a4: the mirror
=== lamp_a4s1 | The Registrar’s Mirror
The Elder takes the bronze mirror off its nail. She holds it in her two hands like a plate of food. Then, with a clumsy, unpractised movement, she tips it to the sun, and a spot of light jumps across the tower wall. She tries again. It lands on the door. On the third try it flies up, up the face of the tower, to the very top, and rests on the lamp-room window.
“Three short,” she murmurs. “Two long.”
She flashes. The mirror trembles in her hands. A little flickering spot of gold jumps up the wall and dies.
Nothing happens.
“She is not there,” says the Elder. She sounds suddenly very old. “It was foolish. Fifteen years. She has gone.”
You touch her sleeve. Above you, at the lamp-room window, a tiny pinpoint of light has appeared. It stutters. It blinks. Three short. Two long.
> quiet | Say nothing. | lamp_a4s2 | npc:SU_LAMP_MIRROR
> truth | Tell her to answer. | lamp_a4s2
> mercy | Hold the mirror steady for her. | lamp_a4s2
> inquiry | Ask what the signal means. | lamp_a4s2

=== lamp_a4s2 | Conversation
They talk for an hour in light. You sit on a rock and watch it happen. The Elder holds the mirror and flashes, and a pinpoint of gold winks from the top of the tower, and the Elder says aloud, as if she were reading a letter, what it says.
“She asks if I am well.”
Flash.
“I say that I am well. I say that I have a bad knee.”
Flash.
“She says she has a bad knee too. She says it is from the stairs.”
The Elder laughs. It is a startled, delighted sound, and her eyes are wet. “It is a joke,” she says. “She is making a joke. She is nine years old, and she is making a joke in mirror-code, across a bay.”
Flash.
“She says: you were late.”
The Elder bows her head.
> quiet | Hold the mirror for her. | lamp_a4s3
> truth | Tell her you will not leave. | lamp_a4s3
> mercy | Put an arm around her. | lamp_a4s3
> inquiry | Ask what she will reply. | lamp_a4s3

=== lamp_a4s3 | Late
“I was late,” the Elder says. She flashes it. You can see her hand shake, and the light skid on the wall. “I say that I am sorry. I say that I was afraid. I say that I took one child and left the rest, and I did not go back for fifteen years.”
Flash.
“She says: I know.”
Flash.
“She says: the Registrar came back for me.” The Elder’s voice breaks. “She says it is all right. She says I came.”
She puts the mirror down. She covers her face.
You wait. The sea breathes beneath the rock. Gulls wheel. The light at the lamp-room window flashes patiently, three short, two long, three short, two long. It does not stop.
“I have to go up,” says the Elder, thickly. “I cannot do this across a bay.”
She stands. She puts out a hand. “Will you come with me?”
> quiet | Take it. | lamp_a4s4
> truth | Say she should go alone. | lamp_a4s4
> mercy | Say you will carry her up. | lamp_a4s4
> inquiry | Ask if she is ready. | lamp_a4s4

=== lamp_a4s4 | The Stairs
She goes up on your arm. It takes nearly an hour. She stops at each landing and leans on the wall, her breath loud in the stairwell. At the two hundredth stair, by the tally marks, she sits down and laughs at herself, and says it is the most ridiculous thing, that she, who has climbed the Law Hall’s three thousand steps every day for thirty years, should be undone by a lighthouse.
“It is not the climbing,” you say.
“No.” She wipes her face. “It is what is at the top.”
You rest. Above you, the humming has begun again, a single flat note, held and held. It is not a tune. It is an answer. It is someone who has been waiting to be asked a question and has finally been spoken to.
“I used to hum like that,” says the Elder, in an odd voice. “When I was afraid. I did not know she could hear.”
> quiet | Stand up. | lamp_a4s5
> truth | Say you can hear it too. | lamp_a4s5
> mercy | Offer your shoulder. | lamp_a4s5
> inquiry | Ask her to hum back. | lamp_a4s5 | +lamp_elder_hummed

=== lamp_a4s5 | The Seventh Step
At the top, the door is open. The round room is full of light. The girl is standing in the middle of it with a slate in her hands, and she has written something on it in letters so large that they run off the edge. She holds it up as the Elder comes in.
It says: HELLO.
The Elder stands on the threshold. She does not move. She does not speak. She looks at the girl for a long while, at the cropped hair and the lamp-black and the straight small shoulders, and something in her face unlocks and comes apart.
“Qiu,” she says. “Oh, Qiu.”
The girl puts down the slate. She crosses the room in four strides and flings her arms round the Elder’s waist. The Elder staggers. Her hands come up and cover the girl’s hair.
“You grew,” says the Elder, uselessly. “You grew.”
“I know,” says Qiu, muffled. “It is the stairs.”
> quiet | Turn away. | lamp_a4s6
> truth | Shut the door softly. | lamp_a4s6
> mercy | Go down to the foot of the tower. | lamp_a4s6
> inquiry | Watch from the doorway. | lamp_a4s6

=== lamp_a4s6 | The Foot of the Tower
You sit on the lowest step with Gu. It is a long time. The sun moves across the gravel. A lizard comes out to bask on a rock. Somewhere overhead there is the faint sound of two women talking, in low voices, sometimes laughing, sometimes silent.
“I am glad,” says Gu, suddenly.
“Of what?”
“That someone got to say it.” He is picking at a stalk of sea-pink. “I used to think, in the sect, that nobody ever said sorry. They did the thing, and it was over. They never said it.” He looks at the flower. “I am glad it took her fifteen years. It is better than never.”
You do not answer. You are thinking of a woman in a corridor, saying: I did not read the fifteenth.
“It is a lot of stairs,” you say at last.
“Four hundred,” says Gu. “I counted.”
> quiet | Smile. | lamp_a4s7
> truth | Say you did too. | lamp_a4s7 | bond:gu+1
> mercy | Give him your shoulder. | lamp_a4s7 | bond:gu+1
> inquiry | Ask what he thinks they are saying. | lamp_a4s7

=== lamp_a4s7 | What They Said
It is evening when the Elder comes down. She is walking slowly, with one hand on the wall, and her face is raw and shining. Her hair has come loose and the silver comb is crooked. She sits down on the step beside you without a word, and takes your hand, and holds it.
After a while she says: “She asked me why I did not come before.”
“What did you say?”
“I said that I was afraid. I said that I had made a rule not to look at anything that might look back.” She smiles shakily. “She said that was the stupidest rule she had ever heard. She said she had a better one. She said: always look at the lamp.”
She looks out over the darkening bay.
“I think she is right,” she says. “I think it is the first useful thing anyone has told me in fifteen years.”
> quiet | Squeeze her hand. | lamp_close | +lamp_reunion
> truth | Say you are glad. | lamp_close | +lamp_reunion
> mercy | Rest your head against her shoulder. | lamp_close | +lamp_reunion
> inquiry | Ask what she plans to do. | lamp_close | +lamp_reunion

// ---------------------------------------------------------------- hidden: the third lens
=== lamp_h1 | The Door Opens
The door opens to the signal as if it had been waiting. This time there is no one on the other side. The stair is lit, faintly, by a lantern hung on a hook, and on the lowest step lies a slate. It says, in square chalk: COME UP. BRING NOBODY. IT IS EASIER THAT WAY.
You go up alone. You count the steps: four hundred, as you were told. The seventh is loose. You mind it. At the top the trapdoor stands open, and the lamp room is full of an unsteady blue light that does not come from the lamp.
Qiu is standing at the great lens with her back to you. She has taken the shutters off one of the prisms. It is cloudy, and thick with sea-green, like a cataract.
“The third lens,” she says, without turning. Her voice is the smallest rasp. “It does not light. It looks.”
> inquiry | Ask what it looks at. | lamp_h2
> truth | Say her name. | lamp_h2
> mercy | Stand beside her. | lamp_h2
> quiet | Wait. | lamp_h2

=== lamp_h2 | What the Lens Sees
“Down,” says Qiu. She pulls you in front of the prism. “At the ebb. Look.”
You look. At first there is only a blur of green. Then it clears, and you see the bay as a gull sees it, from a hundred feet up, but not as it is now: as it was, or is, at the lowest tide of the year. The water has drawn back. The mud has uncovered a shape on the seabed, a vast pale shape the size of a village, half buried in silt. It has walls. It has windows. It has a tower, tilted, with a bell hanging in the arch.
It has a door, and the door is open.
“The Library,” says Qiu. “It is under the bay. It is there at the spring ebb. A tide-door opens, once a month, at the foot of the Wall.” Her hand is tight on your arm. “I have watched it for eleven years. I have never been in. I have been waiting for someone to go with.”
> inquiry | Say you will go. | lamp_h3
> truth | Ask why she has never gone. | lamp_h3
> mercy | Ask if she is afraid. | lamp_h3
> quiet | Look. | lamp_h3

=== lamp_h3 | Afraid
“Not of the water,” says Qiu. “Not of the dark.” She puts her forehead against the cold glass. “Of what is written in it. I have seen the shelves through the lens. They go back for miles. They are full of paper. Every shelf has a name on it.”
She turns, and her eyes are enormous.
“I think one of them is mine,” she says. “I think I was struck. I think there is a page in that place with my name on it, and a date, and the word struck. And I think if I read it I will stop being able to be Qiu.”
She lets out a breath.
“That is the thing,” she says. “I do not want to be un-written. I like being a person who lights a lamp.”
You take her hand. It is cold and thin.
“Then we shall go together,” you say. “And you shall hold the lamp.”
Qiu stares at you. And then, slowly, she smiles.
> inquiry | Smile back. | lamp_close | +lamp_lens_seen
> truth | Say you will not let her be unwritten. | lamp_close | +lamp_lens_seen
> mercy | Hug her. | lamp_close | +lamp_lens_seen
> quiet | Hold her hand. | lamp_close | +lamp_lens_seen

// ---------------------------------------------------------------- close
=== lamp_close | The Keeper
Night falls on the spur. The wind rises, smelling of rain. In the lamp room the lens is turning, slow and golden, and the beam sweeps the coast from end to end. The whole bay is a plate of black glass with the Wall floating on it like a pale boat.
+[how] lamp_promised_light | You promised Qiu you would help her light the lamp, and you mean to.
+[how] lamp_hok_warned | Sergeant Hok told you nine ships, eight hundred men and a lead-lined case before he put down his cup.
+[how] lamp_lit | The Salt Lamp burns for the first time in eleven years, and the whole town is in the street.
+[how] lamp_reunion | The Registrar and the girl with the mirror talked until dusk, and came down laughing.
+[how] lamp_lens_seen | The third lens showed you a drowned tower with its tide-door open.
+[extra] lamp_elder_hummed | The Elder hummed on the stair, flat and long, and a girl above hummed back.
+[extra] lamp_confessed | You told a lamp-keeper who you were, and she said she had known since the door.
Qiu stands at the brass wheel with her hand on the spoke. She is not looking at you. She is looking at the dark.
“I have a thing for you,” she says. “It is not a gift. It is a trade.”
She takes a brown card out of her tunic. It is worn as soft as cloth, and bears a numeral.
> truth | Ask what she wants in trade. | lamp_close2 | +card_4
> mercy | Take it without asking. | lamp_close2 | +card_4
> quiet | Wait. | lamp_close2 | +card_4
> inquiry | Ask what the card says. | lamp_close2 | +card_4

=== lamp_close2 | Light What Is Dark
“A promise,” says Qiu. “That when the lamp is lit, you will come to the Library. That you will let me hold it for you. That you will not let me read my own page unless I ask.”
She pushes the card into your hand.
“It says: Light what is dark. I thought it meant the lamp. I thought, for years, that I was doing what it said.” She shrugs. “But the lamp was not dark. I was.”
The card is warm. It fits against the others with a faint, small click.
“You must go,” she says. “The Concord is coming in nine days. I will keep the light. I will watch the sea. And when the tide is at the lowest, I will flash. You will know.”
She tilts the mirror, and a bright spot of gold dances across the glass. Three short, two long.
Good morning, says the Lamp.
> truth | Flash it back. | hub_b3_coast | +b3q_lamp
> mercy | Say good night. | hub_b3_coast | +b3q_lamp
> quiet | Bow, and go. | hub_b3_coast | +b3q_lamp
> inquiry | Ask how she will know you are listening. | hub_b3_coast | +b3q_lamp
`,
  scenarios: String.raw`
$ SU_LAMP_MIRROR | trust+5 respect+2 fear-3 | elder | The Elder answers a mirror across fifteen years and climbs four hundred stairs to a girl who said good morning.
hostile: I have been told I should be grateful you brought me. I am. I do not know what to do with the gratitude. It sits in me like a stone I swallowed by mistake.
wary: She said I was late. She did not say I was wrong to come. It is a distinction that has kept me alive, for a week, in a way I would not have thought possible.
neutral: Four hundred stairs. I counted them twice, going up. I did not count them coming down. I find I did not need to.
warm: Do you know what she said when I told her I was sorry? She said, “For what? You came.” Nobody had ever told me that I had done something right by arriving late. It undid me.
devoted: I should like to stay here a little while, if the Concord will give us the time. I should like to learn the mirror code properly. I should like to say good morning to the east, and have someone laugh.
`,
  remarks: String.raw`
% lamp_qiu_later | since:b3q_lamp>=3 | gu | The lamp has been lit three nights now. I sleep better with the beam going over the roof. It sweeps once, and I know where the sea is.
% lamp_hok_later | since:lamp_hok_warned>=6 | ren | Sergeant Hok put down his rifle. It was a small thing and a hard one. I have been trying to think what I would have done in his place. I am not sure I like what I think.
`,
};
