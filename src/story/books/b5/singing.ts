import type { Arc } from "../types";

/**
 * Book Five, arc two: the Night Singing. On the fourth night out the Glass Sea begins to sing, and it sings names: the pages of
 * every child burned for the Registrar's Register, seven hundred years of them, ringing in the fused sand. Sleepers rise and walk
 * out onto the glass. Four approaches: answer each name with its true one (a1, truth), rope the sleepwalkers back (a2, force),
 * fool the sea with a false cradle-song (a3, deceit), and sit with Odval on the open glass until dawn (a4, mercy). A hidden route
 * passes the song on. Cast: Odval, Temur, Hanming, Gu, the Elder, Duan Wuyi, Hao Lan, Ren Qiao.
 */
export const singing: Arc = {
  id: "singing",
  name: "The Night Singing",
  scenes: String.raw`
=== singing_entry | The Fourth Night
The sun goes down in a blaze, and the glass goes with it: copper, rose, a long violet bruise, then dark. The three skiffs lie at anchor in the lee of a broken plate, hulls touching, lamps lit. A cold wind stirs the sails. The stars come out, below you as well as above, and for a while it is very quiet.
Then Odval lifts her head from the fire.
“Listen,” she says.
You hear nothing. And then you do. It is not a sound so much as a pressure in the bones of the ear: a long, low, glassy hum that seems to come from everywhere at once. It swells. It breaks into a thousand fine chimes, each a different pitch, each repeating, like rain on a window pane. It is very beautiful.
It is saying something.
“Names,” says Odval. Her pale eyes are wide. “It is a name for each of us. Can you hear yours?”
You can. You wish you couldn’t.
Beside you, Gu has stood up. His face is slack. He has taken a step toward the edge of the plate.
> truth | Take Gu’s arm and say his name. | singing_a1s1
> force | Grab the coil of rope from the skiff. | singing_a2s1
> deceit | Reach for the wax from the cart, and a trick of Temur’s. | singing_a3s1
> mercy | Turn to Odval, who has begun to shake. | singing_a4s1
> inquiry | Take the hum from your chest, and hum it back. | singing_h1 |  | voice_relay | You have not yet learned how to carry a tune.

// ---------------------------------------------------------------- a1: naming
=== singing_a1s1 | Gu’s Name
“Hanzhen,” you say.
He does not turn. His eyes are on the dark. He is walking, steadily, one foot before the other, toward the edge of the glass plate, where the black sheet of the Sea begins. His hands hang loose. He is smiling.
You catch his arm. It is cold as stone.
“Hanzhen. Gu Hanzhen. You are on the Glass Sea. You have a brother called Hanming.”
“They’re calling,” he says dreamily. “It’s a long list.”
“Whose?”
“All of them. They’re saying me.” His smile widens. “I’m Hanzhen, aged four, in a basket by the stove. I’m the little one. Nobody has said me like that since.”
“Gu.”
“It’s beautiful,” he says, and takes another step.
You pull. He weighs nothing, and he is immovable. The chimes rise in pitch, thin and sweet. Odval is on her knees by the fire with her hands pressed over her ears. Hanming has started up, shouting.
You hold on, and you say it again. And again. And a third time, and it does not work.
> truth | Say it differently. | singing_a1s2 | npc:SU_SINGING_NAMES
> mercy | Hold him. | singing_a1s2
> quiet | Listen to the song. | singing_a1s2
> inquiry | Ask Odval what is wrong. | singing_a1s2

=== singing_a1s2 | What Odval Said
“You’re shouting it at him,” says Odval. She has staggered over, her black hair in her eyes, her face grey and ill. “The sea is saying it. You’re saying it back, the same way. He only hears one. It’s a duet.”
“What do I do?”
“Don’t say what it says.” She grips her head. “Say the one it doesn’t. The one that’s true.”
“His name is true.”
“His *name*. Not his *name*.” She groans. “What does he call himself?”
You think. You think of a boy of nineteen, hunched over a tea-stall in a foothill village, with a cracked cup in both hands. A boy who pretends to be braver than he is. Who laughs at his own jokes before the end.
“Hanzhen,” you say. “Not Gu. You hate it when they call you Gu.”
His head turns. The slack face wavers.
“It’s a bad nickname,” you say. “It sounds like a pigeon. You’re Hanzhen. You’re nineteen and you can’t play the flute and you’re better at this than you know.”
He blinks.
> truth | Keep going. | singing_a1s3
> mercy | Smile. | singing_a1s3
> quiet | Hold him tighter. | singing_a1s3
> inquiry | Ask Hanming for a story. | singing_a1s3

=== singing_a1s3 | Waking
“I hate it,” says Gu, in a thick voice. “The pigeon.” He sways. His eyes focus on your face. “Oh. It’s you.”
“It’s me.”
“I was in a basket.” He shudders, all over. “I was warm. There was a stove. Someone was singing.” He puts a hand to his cheek, and brings it away wet. “It was lovely. I didn’t want to come back.”
“I know.”
“How do you know?”
“Because I heard mine,” you say.
He stares. “What did it say?”
You do not answer. The chimes are still going, high and thin, and under them a deeper note is rising, a slow chord. You can feel it in your teeth. It is saying a name. It is not one that you will tell.
Hanming has reached you. He pulls his brother into his arms and holds him fiercely, with his scarred face buried in his hair, rocking him like a child.
Odval is standing at the water’s edge. She has stopped covering her ears. She is looking out over the glass.
“Oh,” she says. “I understand now.”
> truth | Go to her. | singing_a1s4
> mercy | Stay with Gu. | singing_a1s4
> quiet | Listen. | singing_a1s4
> inquiry | Ask what she understands. | singing_a1s4

=== singing_a1s4 | An Answer
“It isn’t a lure,” says Odval. She turns. Her pale eyes are shining. “It’s a roll-call.”
“A what?”
“A register.” Her voice is hushed. “The sea is calling names, one after another, and waiting. It does not want to take us. It wants someone to say *here*.”
You listen. She is right. Between the chimes there are gaps: tiny, patient silences, like the pause after a teacher reads a name. A hundred thousand gaps. A hundred thousand small voices waiting to be answered.
“Seven hundred years,” says Duan Wuyi softly. He has come up behind you, in his blanket. “Of children. Struck for ascensions. Each name was burned.” He swallows. “And nobody has said *here*.”
Hao Lan has her hand over her mouth.
“We could,” says Odval. “We could answer.”
“All of them?”
“As many as we can.” She sits down, cross-legged on the glass. “It will take all night.”
> truth | Sit beside her. | singing_a1s5
> mercy | Take Gu’s hand. | singing_a1s5
> quiet | Listen for the first. | singing_a1s5
> inquiry | Ask who will go first. | singing_a1s5

=== singing_a1s5 | Here
You do it in turn. It goes round the circle like a prayer wheel. The sea sings a name. One of you says: *here*. It sings another. Another of you says: *here*. There is no rule about who answers which. You simply open your mouth when your own breath tells you to.
The first is a girl. You do not know her name, but you answer for her. You say it quietly, in the dark: here. The chime rings once, softly, and stops. A gap in the song closes.
The second is a boy. The Elder says it. Her voice is dry and steady. Here.
The third is a baby whose name was never given: a sound like a single note on a bell. Hanming says it. Here.
It is slow. It is exhausting. By midnight you have answered four hundred. By two, nine hundred. Temur’s voice has gone hoarse. Hao Lan weeps without stopping. Ren Qiao sits at the edge of the circle with his sword across his knees, saying *here*, *here*, *here*, in a flat low rhythm like a drum.
The song does not seem to shorten.
> truth | Keep answering. | singing_a1s6
> mercy | Pass Temur water. | singing_a1s6
> quiet | Rest. | singing_a1s6
> inquiry | Ask Odval how many. | singing_a1s6

=== singing_a1s6 | How Many
“I don’t know,” says Odval. She has been answering for hours, her voice a croak. “It’s not a number. It’s a river.”
“Will it end?”
“It will end when we do.” She wipes her mouth. “Or when it has had enough.”
“Is there a way to speed it?”
She is silent. Then, slowly, she says: “There is a way to answer them all at once.”
“How?”
“By being the one they’re calling for.” She closes her eyes. “A name is a hole. The sea sings the hole and waits for something to fill it. If one voice said *here* for all of them—”
“It would have to be a big voice.”
“It would have to be the right voice.” She opens her eyes. They are looking at you. “One that has been called, and answered, and been called again.”
There is a pause. The chimes sing on, patient, thin.
“No,” says Hao Lan, in a small sharp voice. “Absolutely not.”
> truth | Stand. | singing_a1s7
> mercy | Look at Odval. | singing_a1s7
> quiet | Listen. | singing_a1s7
> inquiry | Ask what it would cost. | singing_a1s7

=== singing_a1s7 | The Price of Here
“It would hurt,” says Odval. “I think. I don’t know how much.” She presses her palms together. “It would be like holding every name at once. For as long as it takes the sea to finish.”
“How long?”
“A minute. An hour.” She shrugs. “I’m sorry. I can’t say.”
“It could kill her,” says Hao Lan. Her voice is fierce. “The seed in her chest. You told us. It lets her live in the mist, because she carries a name. If she takes a hundred thousand—”
“I know.”
“Do you?” She is on her feet. “Do you know what it is to be eaten by a list?”
You think of a hollow in a mound. A small cold hand. You think of a book with a blank page, and a line that was saved.
“I know,” you say. “I’ve met it.”
The Elder has stood too. She is as grey as the glass. She says nothing at all, but she steps closer, and puts her hand flat between your shoulder-blades.
It is the steadiest thing you have ever felt.
> truth | Say it. | singing_a1s8
> mercy | Kiss Hao Lan’s forehead. | singing_a1s8
> quiet | Close your eyes. | singing_a1s8
> inquiry | Ask for the Elder’s blessing. | singing_a1s8

=== singing_a1s8 | One Voice
You say it once, very simply, to the dark. You do not shout. You do not sing. You stand on the glass with your arms at your sides and you say: *here*.
The sea hears.
Every chime stops. The silence is so complete that you can hear the blood in your ears. And then, out of the dark, from every direction at once, comes a sound like a vast indrawn breath. A hundred thousand small voices, all at once, taking in air.
Then they say it back.
*Here. Here. Here. Here.*
They are not afraid. They are not sad. They sound, as they come, like children at a school, answering to the register: pleased, a little shy, a little surprised to be called. They say it in a clear shaking wave. They say it as the glass begins to glow.
It lights from underneath. A pale silver radiance spreads over the plain, flowing out from your feet, running to the horizon in a million branching veins. Every plate shines. The whole Sea is a lamp.
You are weeping.
> truth | Hold on. | singing_a1s9
> mercy | Reach for Hao Lan. | singing_a1s9
> quiet | Let it go. | singing_a1s9
> inquiry | Listen. | singing_a1s9

=== singing_a1s9 | The Roll Is Called
It lasts until dawn. At some point you sit down; at some point somebody puts a blanket round you. The silver light does not dim. It rises and falls with the breath of the Sea. By morning the glass is warm to the touch, like a sleeper’s skin.
You wake with your head on Hao Lan’s knee. The sun is coming up in a haze of pink. The plain is utterly quiet.
It is not the quiet of before. It is the quiet of a classroom after the last child has gone home: a smell of chalk, a thread of dust in a sunbeam, a sense of work completed. The glass beneath you has the faint warmth of a hearth.
“It stopped about four,” says Hao Lan. Her eyes are red. “It stopped all at once. Odval says it’s done.”
“Has it?”
“She says they’ve been answered.” She smooths your hair. “She says they’ll sleep now. For as long as there’s a sea.”
You sit up. You look east, at the sun on the glass. For the first time, it does not look like a wasteland.
It looks like a field with the seed in.
> truth | Smile. | singing_close | +singing_named
> mercy | Hold Hao Lan. | singing_close | +singing_named
> quiet | Look at the sun. | singing_close | +singing_named
> inquiry | Ask Odval what she heard last. | singing_close | +singing_named

// ---------------------------------------------------------------- a2: the ropes
=== singing_a2s1 | The Sleepwalkers
There are five of them already. You count as you run. Gu, at the edge of the plate, tugging at your arm. Temur, down on his knees. Hao Lan, standing perfectly still with a notebook in her hand, her lips moving. The Elder, who has gone white and rigid and is walking out onto the glass with her back straight, like a woman going to the scaffold. Duan Wuyi follows. He is murmuring. They are going, in a loose line, toward the dark.
“Rope!” you shout.
Ren Qiao, beside you, is already uncoiling the lashing from the skiff. He has a face like stone and a steady hand. “How many?”
“Everyone but us.”
“And Odval.” He nods at the fire. The seer is huddled in her felt, rocking, with her hands over her ears. “She’s awake. She can’t move.”
“It’s the song.”
“It’s a bloody nuisance,” says Ren Qiao, and throws a loop.
It catches the Elder round the waist. She does not stop. She walks to the end of the rope and is jerked, with a gasp, onto her face.
> force | Haul. | singing_a2s2
> truth | Run to the others. | singing_a2s2
> quiet | Check the Elder. | singing_a2s2
> mercy | Apologise. | singing_a2s2

=== singing_a2s2 | The Rope Line
It is the most undignified rescue of your life. You tie a rope round the waist of each sleepwalker, in turn, and secure it to the nearest anchor: a skiff, a stake, a protruding plate-edge. They pull like fish on a line. The Elder is hauled back bodily, rigid, protesting in a flat distant murmur: “I must go and sign. They are waiting.” Temur has to be sat on. Duan Wuyi, in his blanket, attempts to remove his boots.
“No,” says Ren Qiao, firmly, and ties them.
By the time you have caught the sixth, you are drenched in sweat. The sea is singing at the top of its voice. The chimes are almost a scream, thin and insistent, and each seems to strike behind your eyes.
“How long?” you pant.
“Until dawn.” Ren Qiao is looping a rope round his own waist. He ties the other end to your ankle. “You’re the anchor.”
“Why me?”
“Because you’re heavy.”
“I’m not.”
“You’re stubborn,” says Ren Qiao. “It’s the same thing.”
> force | Brace. | singing_a2s3
> truth | Check the knots. | singing_a2s3
> quiet | Watch the line. | singing_a2s3
> mercy | Go to Odval. | singing_a2s3

=== singing_a2s3 | A Snapped Rope
It goes at two in the morning. The song climbs to a note that makes your fillings sing, and the rope round Hanming’s waist parts with a crack. He had been quiet, sitting against the mast with a dazed look. Now he is up like a spring, running.
“Hanming!” bellows Gu.
He does not turn. He runs, in a long loping stride, out over the glass. His feet make no sound. In a few seconds he is a dark shape against the stars, then a smaller one, then a point.
Gu has torn himself free of his own rope. He is racing after, sobbing his brother’s name.
“Hold him,” you say.
Ren Qiao is already running. You are pulled along behind, tethered to his ankle, stumbling across the glass in the dark. The plates are slick. Twice you fall. The chimes are so loud that you cannot hear your own feet.
“There!” shouts Ren Qiao.
Ahead, Hanming has stopped. He stands at the lip of a crack in the glass, a black fissure twenty feet wide, staring into it.
> force | Run. | singing_a2s4
> truth | Shout. | singing_a2s4
> quiet | Slow down. | singing_a2s4
> mercy | Call softly. | singing_a2s4

=== singing_a2s4 | The Crack
It is a wound in the Sea. It goes down and down, a ragged black slot in the glass, its lips glittering with frost. Cold air rolls up from it. And from it, very faintly, comes the song: not the high chimes, but a low steady voice, a boy’s, saying one thing again and again.
You cannot make out the word. Hanming can.
“It’s me,” he says. His voice is flat. “It’s my name. The old one. The one I had before they took it off me at the Fort.” He sways. “I was twelve. They said, you’re not Hanming now. You’re Number Nine of the Fourth.”
“That isn’t you.”
“I know.” He leans. “But he’s down there. I can hear him. He’s very small.”
You catch his sleeve. Ren Qiao catches the other. Gu arrives, sobbing, and flings his arms round his brother’s waist.
“You’re not going,” says Gu. “You’re not going. I’ve only just got you.”
Hanming doesn’t seem to hear. He is looking into the crack.
“I want to,” he says, “tell him it’s all right.”
> force | Pull him. | singing_a2s5
> truth | Tell him he can. | singing_a2s5
> quiet | Hold still. | singing_a2s5
> mercy | Tell him it is all right. | singing_a2s5

=== singing_a2s5 | Pulling
You pull. Three of you, at once: Ren Qiao on his left arm, you on his right, Gu round the waist. For a moment Hanming does not resist. Then his whole body goes rigid, and the strength of him is astonishing. He drags you toward the crack, a half-step at a time. His boots skid on the frost.
“Let go,” he grunts.
“No.”
“Let go. He needs me.”
“So do I!” screams Gu.
It is the first time you have heard him shout. The word rings out over the glass, high and cracked and furious. Hanming flinches. His head turns. For an instant his eyes clear.
“Hanzhen?” he says.
“I’m here.” Gu is sobbing in great gulps. “I’m here, you idiot, I’m right here, I’m not four, I’m nineteen, and I’ve come four hundred miles to find you. You don’t get to leave.”
Hanming stares at him. His mouth opens, and closes.
Then the strength drains out of him. His knees buckle. You all go down in a heap on the glass, panting, in a tangle of rope.
> force | Hold on. | singing_a2s6
> truth | Breathe. | singing_a2s6
> quiet | Look at the crack. | singing_a2s6
> mercy | Hold them both. | singing_a2s6

=== singing_a2s6 | Rope Burns
You carry him back between you. He is dead weight, dazed, murmuring. You lay him in the lee of the skiff and wrap him in two blankets. His hands are blistered where he clutched the rope. Gu sits beside him with his brother’s head in his lap, and does not take his eyes from his face.
“Is he all right?” says the Elder. She has been awake for an hour, ashen, silent, tied to the mast like a figurehead. She looks small.
“He’s alive.”
“That was not the question.”
You consider it. “I don’t know.”
She nods slowly. “It sang my fourteen,” she says. “In order. I could not stop it. I could not stop walking.” Her voice is thin. “I think if I had reached the edge I would have said *here*, and gone.”
“You didn’t.”
“You tied me to a mast.”
“It seemed necessary.”
“It was extremely necessary.” She very nearly smiles. “Thank you. I find that I am a person who needs to be restrained.”
> force | Untie her. | singing_a2s7
> truth | Say you are glad. | singing_a2s7
> quiet | Sit beside her. | singing_a2s7
> mercy | Give her tea. | singing_a2s7

=== singing_a2s7 | The Long Night
You tie them all down, in the end. It is the only way. You sit up through the small hours with a rope round your own wrist, passing from sleeper to sleeper with a lantern, checking knots. The chimes rise and fall. There are moments when you hear your own name, high and sweet, and you hold the lantern with both hands.
Ren Qiao keeps the other watch. He sits at the bow with his sword across his knees and his face turned to the dark, immobile as a post. In the grey hour before dawn you bring him tea.
“You’re not listening,” you say.
“I am listening very hard to the inside of my own skull.” He accepts the cup. “It’s a trick. You think about something else. Something boring.”
“What?”
“Knots.” He sips. “I’ve been tying them in my head since midnight.”
“It works?”
“It has so far.” He glances up. “I’d recommend a bowline. It’s stubborn. It will not let go.” A flicker of his rare dry smile. “You’d like it.”
> force | Sit. | singing_a2s8
> truth | Drink your tea. | singing_a2s8
> quiet | Watch the sky. | singing_a2s8
> mercy | Thank him. | singing_a2s8

=== singing_a2s8 | Dawn Cuts the Rope
It stops at first light. The chimes thin, and thin, and quaver, and cease, and the sun slides over the rim of the world, red on the glass. A silence falls: soft, enormous, cleared. The sleepers stir all along the line. Duan Wuyi sits up, in his blanket, and says in a hoarse voice, “Why am I tied by the ankle to a stanchion?”
“It seemed necessary,” you say.
“I see.” He considers. “Did I do anything foolish?”
“You took off your boots.”
“Ah.” His soft face is mortified. “Did anyone see?”
“Everyone.”
There is a general groan. Temur is sick over the side. Hao Lan is looking at her notebook with horror: she has been writing in her sleep, and the page is covered in a tiny, neat, incomprehensible hand. The Elder has already sat bolt upright and straightened her collar.
Hanming opens his eyes. He sees his brother’s face.
“Hullo,” he says, in a cracked voice. “Did I miss anything?”
Gu bursts into tears.
> force | Laugh. | singing_a2s9
> truth | Cut the ropes. | singing_a2s9
> quiet | Hold Gu. | singing_a2s9
> mercy | Hand out tea. | singing_a2s9

=== singing_a2s9 | The Count
You count the cost at breakfast. A cut on Ren Qiao’s palm. A twisted ankle on Hao Lan. Hanming’s blisters. A lost boot, which Temur finds an hour later, frozen into the glass at the edge of the crack. Everyone is tired, hungry, ragged, blue under the eyes.
Everyone is alive.
“That’s what matters,” says Ren Qiao. He is flexing his bandaged hand. “It’s the only thing that matters.”
“And the song?”
“What about it?”
“It is still going to sing tomorrow.”
“Yes.” He looks at the sea. “Tomorrow we will tie ourselves down earlier. And the next night. And the next.” He shrugs. “Eventually we will get to the end of the glass.”
“And the names?”
“Will have to take their chances.” His voice is not unkind. “I am a soldier. I do not carry what I cannot lift.”
He looks at the line of knots on the rope. His mouth twitches.
“Though,” he says, “I did tie an excellent bowline.”
> force | Smile. | singing_close | +singing_roped
> truth | Salute. | singing_close | +singing_roped
> quiet | Look at the sea. | singing_close | +singing_roped
> mercy | Thank him. | singing_close | +singing_roped

// ---------------------------------------------------------------- a3: false lullaby
=== singing_a3s1 | Wax
“It can’t be lied to,” says Temur. He has pressed two plugs of beeswax into his ears and is shouting. “The Listeners. The clans. We know when you’re lying because the wind tells us.” He grins. “But a sea isn’t the wind.”
“What?”
“It’s a sea! It’s glass!” He pulls the wax out. “It doesn’t listen! It *hums*! It’s an echo! It says what you give it!”
You consider this. The chimes are rising, thin and sweet, each pitched a little different from the last. Gu is walking away. The Elder is rising from her blanket, with a faraway look.
“So if we sing it a false name—”
“It repeats the false name! Then it thinks it has called someone, and it’s satisfied!” Temur’s eyes are shining. “I did it once. As a boy. I was lost in the Dry Lake, and the glass was calling, and I sang it a made-up name. It stopped.”
“What name?”
“Pigeon,” says Temur.
> deceit | Try it. | singing_a3s2
> truth | Say it is a trick. | singing_a3s2
> quiet | Take some wax. | singing_a3s2
> mercy | Run to the Elder. | singing_a3s2

=== singing_a3s2 | The False Lullaby
It takes you a quarter of an hour to compose. Hao Lan helps, in a whisper, between chimes. It must be a cradle-song: simple, repetitive, soothing, in a minor key. It must have no real names. It must contain the sounds of names, soft consonants, long vowels, but no meaning. A song for a child that does not exist.
“Lu la mo,” she mutters. “Ni ni ta. Moo na lee.”
“It sounds Steppe.”
“It sounds *plausible*.” She waves a hand. “That’s all a lullaby has to be.”
You begin. You sing it quietly, to the dark, in a thin cracked voice. The sea hears. The chimes falter. For a moment they seem to listen, hanging in the air like drops on a spider’s thread.
Then one by one they take up your tune.
It is uncanny. The whole Sea is humming your nonsense, in a hundred thousand tiny voices, soft and sweet and hushed. Lu la mo. Ni ni ta. They have the tune exactly.
The sleepwalkers stop.
> deceit | Keep singing. | singing_a3s3
> truth | Check the Elder. | singing_a3s3
> quiet | Hush. | singing_a3s3
> mercy | Take Gu’s hand. | singing_a3s3

=== singing_a3s3 | Pigeon
The Elder blinks. She stands on the edge of the plate, one foot raised, and looks round as though woken from a dream. “I beg your pardon?” she says. “Was I walking?”
“A little.”
“Where to?”
“The edge.”
“Ah.” She lowers the foot. “How tiresome.” She turns, rather stiffly. “Is that ‘Pigeon’ I hear?”
“It is a false lullaby,” says Hao Lan.
“It is a very bad one.” The Elder tilts her head, listening. “The second line scans poorly.”
“It’s meant to.”
“Is it?” She frowns. “Then it is a success.” She sits down on her blanket with her usual dignity and folds her hands. “I wonder that I never thought of it. When I was a clerk, I wrote a thousand false entries. It never occurred to me that the Ledger might be fooled by something so artless.”
The chimes sing on, repeating the nonsense. All round you the sleepers are settling.
> deceit | Smile. | singing_a3s4
> truth | Ask about the entries. | singing_a3s4
> quiet | Listen. | singing_a3s4
> mercy | Fetch her tea. | singing_a3s4

=== singing_a3s4 | A Quiet Cheat
It is an oddly peaceful night. You sit with your back against the mast, singing the false song over and over, a barely audible thread of sound. The Sea sings it back. The glass shimmers. Overhead the stars are fixed and cold.
Gradually you notice that the sea is no longer calling. The chimes have dropped to a murmur. There are no more names, only your own nonsense, going round and round, a huge soft rain of ‘Lu la mo’ falling over three hundred miles of plain.
“It’s forgotten,” says Hao Lan, in an awed whisper. “It’s forgotten what it was saying.”
“It’s a very simple creature.”
“It’s a very *old* one.” She tilts her head. “That’s the thing about the old ones. They’re credulous. They’ve been listening so long that they believe the last voice.”
“Is that bad?”
“I think it is,” she says slowly, “the saddest thing I have ever heard.”
She does not explain. But the sea hums on, innocent as a baby, sweetly mad.
> deceit | Keep humming. | singing_a3s5
> truth | Ask what she means. | singing_a3s5
> quiet | Look at the glass. | singing_a3s5
> mercy | Hold her hand. | singing_a3s5

=== singing_a3s5 | What Odval Knew
It is Odval who tells you, at three in the morning, in a voice like a thread. She has not slept. She has been sitting by the fire all night with her knees drawn up, rocking a little to the false tune.
“It isn’t a lie,” she says. “Not to the sea. To the sea it’s a gift.”
“How?”
“Because it’s a lullaby.” She does not look up. “The sea has been calling for seven hundred years, and nobody has sung it to sleep. Everyone either ran, or answered, or died. You’ve sung it a song.”
“A false one.”
“A kind one.” Her pale eyes lift. “It doesn’t matter that the words are nonsense. It’s the shape. It’s a cradle-song. It says: hush.”
“It’s a trick.”
“It’s a trick that works because it’s true.” Her smile is crooked. “The best ones are.”
You think of Temur, in the Dry Lake, aged nine, singing to the glass. You think of a boy who invented a pigeon to save his life.
“Tell him,” says Odval, “that I said he’s a genius.”
> deceit | Nod. | singing_a3s6
> truth | Say you will. | singing_a3s6
> quiet | Listen. | singing_a3s6
> mercy | Hold her. | singing_a3s6

=== singing_a3s6 | Temur Hears Himself
You tell him at dawn. He is sitting at the bow, wrapped in a blanket, red-eyed, hoarse from singing. He listens with his mouth open.
“A genius,” he says.
“She said so.”
“Odval?” He goggles. “She’s never said that. She’s said I’m a menace. She said I’m a menace on the Day of Names.”
“She changed her mind.”
“Hm.” He pulls at his hat. “She does that. Not often.” He is blushing to the ears. “She’s very scary, you know. She sits on hills for days. She says things like ‘your aura is thin.’”
“She likes you.”
“She doesn’t.” He wipes his nose. “She tolerates me. It’s different.” A pause. “Though it’s possible,” he adds, “that I sang her to sleep.”
“You did.”
“Did I?” He looks hopeful and appalled. “Oh no. I’ll never live it down.”
He buries his face in the blanket. His shoulders are shaking. It takes you a moment to realise he is laughing.
> deceit | Laugh. | singing_a3s7
> truth | Pat his shoulder. | singing_a3s7
> quiet | Leave him. | singing_a3s7
> mercy | Fetch tea. | singing_a3s7

=== singing_a3s7 | The Next Night
The second night is the same, and the third. You sing the false song each dusk, in a circle, with tea and a lantern. The sea takes it up. The sleepwalkers stay where they are. Nobody is lost. It becomes a ritual: the lighting of the lamp, the first soft ‘Lu la mo,’ the drowsy vast reply.
By the fourth night even Duan Wuyi can do it. He sits in the stern with a blanket round his shoulders and hums in a quavering baritone, in perfect pitch, one hand beating time on his knee. He is, to everyone’s surprise, rather good.
“I sang in a choir,” he says, when asked. “At the Academy. Before I took the Censor’s oath. I had a tolerable bass.”
“You never said.”
“It did not seem relevant.” He clears his throat. “One hears so little of it in the law.”
Hao Lan makes a note. “Duan Wuyi,” she says aloud. “Lawyer, forger, bass.”
“I am not a forger.”
“You are what the situation requires,” says Hao Lan sweetly. “It is the Chancery motto.”
> deceit | Join in. | singing_a3s8
> truth | Smile. | singing_a3s8
> quiet | Listen. | singing_a3s8
> mercy | Pour tea. | singing_a3s8

=== singing_a3s8 | The Honest Seam
There is a night, the fifth, when it does not work. You begin the false song, and the sea hums back, and halfway through the second verse a single chime rings out, clear and true, over the rest. It says a name.
Odval goes rigid.
“Mother,” she whispers.
It is a woman’s name. It is a woman who died in the hard winter, ten years ago, in the hills. A thin high chime says it, with unbearable tenderness, again and again, and Odval stares into the dark with her mouth open.
“It’s not part of the song,” says Temur, fearfully.
“It’s part of the sea.” Odval’s voice is a thread. “It’s found her. It knows. It’s not fooled any more.”
“Then we’ll have to—”
“No.” She holds up a hand. “It’s calling *me*.” She swallows. “It’s found the one real thing. And I want to answer.”
You look at her. The false lullaby has died on your lips. Hao Lan, beside you, has stopped writing.
“Then answer,” you say.
> deceit | Step back. | singing_a3s9
> truth | Hold her hand. | singing_a3s9
> quiet | Wait. | singing_a3s9
> mercy | Say she is not alone. | singing_a3s9

=== singing_a3s9 | Here, For One
She says it once. She says it simply, with her eyes shut, in the dark, to the glass. “Here.” Then, in a whisper, with a rising crack: “Mother, I’m here.”
The chime sings out. It is a single warm note, rising and falling, unutterably sweet. It rings once. It fades.
It does not come again.
Odval sits very still. She opens her eyes, and they are streaming, and her face is soft and light and very young.
“She said,” she murmurs, “that she’s sorry she left early.”
Nobody speaks.
“She said it wasn’t my fault.” Her voice cracks. “She says she can hear me now. She says I should stop sitting on hills.”
Temur laughs through tears. “She’s right.”
“She is.” Odval wipes her nose on her sleeve. “She’s always right. It’s infuriating.” She looks round the circle of firelight at the exhausted, ragged, tear-streaked faces. “Thank you. For not making me say it in front of the whole sea.”
You look at her.
“It was only one,” you say. “That’s allowed.”
> deceit | Smile. | singing_close | +singing_hushed
> truth | Hug her. | singing_close | +singing_hushed
> quiet | Look at the stars. | singing_close | +singing_hushed
> mercy | Sit with her. | singing_close | +singing_hushed

// ---------------------------------------------------------------- a4: the seer
=== singing_a4s1 | Odval
She is on her knees, rocking. Her black hair has come loose; it falls across her face in a curtain. She has her palms over her ears so hard that her wrists are white, and she is saying something under her breath, over and over. It is a word you cannot catch.
You crouch beside her. “Odval?”
“Too loud,” she whispers. “It’s too loud.”
“Come away from the glass.”
“I can’t.” She does not look up. “I hear everything. That’s what I am. Sarnai says I’m a drum. Everything hits me and I make a sound.” Her fingers dig into her scalp. “Normally I can turn it down. I sit on a hill. I go quiet.”
“Where’s the hill?”
“There isn’t one.” A choked laugh. “It’s flat. It’s three hundred miles of flat. There’s nowhere to sit.”
You look round. The others are sleepwalking or struggling. Ren Qiao is shouting for rope. Gu is being dragged back from the plate-edge by his collar.
Nobody is looking at the seer.
> mercy | Stay with her. | singing_a4s2
> truth | Take her hands. | singing_a4s2
> quiet | Cover her ears. | singing_a4s2
> inquiry | Ask what she is saying. | singing_a4s2

=== singing_a4s2 | What She Was Saying
“It’s a list,” she whispers. “It’s everyone I’ve ever heard. All together.” She grips your wrist. “It starts with my grandmother. And Sarnai. And the old man who sold me a pony. And the woman who died in the hard winter.” She sways. “It keeps going. It doesn’t stop at the people I know.”
“How many?”
“Everyone who ever walked on the grass.” Her pale eyes are unfocused. “They’re all in the glass. They’ve been going under for hundreds of years. And I can hear them.”
“Can you hear which are yours?”
“I can hear all of them *at once*.” She presses her forehead to her knees. “It’s like standing in a market where everyone is shouting the same word.”
“What word?”
“*Remember.*”
The word sinks into the dark between you. Overhead, the stars are very bright.
“I can’t,” says Odval. “I can’t remember them all. I’m only one.” Her voice is a thread. “I want to stop listening.”
> mercy | Hold her. | singing_a4s3
> truth | Say it is all right. | singing_a4s3
> quiet | Cover her ears. | singing_a4s3
> inquiry | Ask where she wants to go. | singing_a4s3

=== singing_a4s3 | Out
“Out,” she says. “Into the middle. Where there’s no one else.”
“It’s all glass.”
“There’s a spot. I can feel it.” She lifts her head. Her eyes are wide and strange. “About two miles. It’s quiet there. The song goes round it, like water round a stone.” She hesitates. “I could sit.”
“You’d be alone.”
“Yes.”
“It might be dangerous.”
“Yes.” She shivers. “But it’s quiet.”
You think about it. Behind you the others are shouting. Ren Qiao has a rope round the Elder’s waist. Duan Wuyi is trying to take off his boots.
“I’ll come,” you say.
She stares at you. “You can’t. Someone has to—”
“Ren Qiao has the rope. Hao Lan has the lamp. They’ll manage.” You hold out a hand. “Show me the spot.”
She takes it. Her fingers are icy and very strong.
“Come on, then,” says Odval, shakily. “Keep your eyes shut. It’s a long walk.”
> mercy | Go. | singing_a4s4
> truth | Look back. | singing_a4s4
> quiet | Shut your eyes. | singing_a4s4
> inquiry | Ask what you will find. | singing_a4s4

=== singing_a4s4 | The Walk
You walk for forty minutes. She leads, with her eyes closed and her hand locked in yours, and you follow with your own eyes open, because someone has to. The glass is black under the stars. The chimes ring all round, high and thin, and she flinches at each one as though struck. Twice she stops, stock still, and you wait.
“Now,” she whispers. “Left.”
You turn. There is nothing to see. But as you step, the sound changes. It does not stop; it parts, as a crowd parts for a cart. The chimes thin to a murmur, then to a shimmer, then to a faint far silvery hum.
“Here,” says Odval, and sits down on the glass.
You sit beside her. It is a perfectly ordinary patch of plain, indistinguishable from any other. A plate of green glass, flat as a table, three feet across. The stars lie in it like seeds.
She draws her knees up. She lets out a breath she has been holding for an hour.
“Oh,” she says. “That’s better.”
> mercy | Wait. | singing_a4s5
> truth | Ask how she knew. | singing_a4s5
> quiet | Look at the stars. | singing_a4s5
> inquiry | Ask what is here. | singing_a4s5

=== singing_a4s5 | A Quiet Place
“It’s a hole,” she says. “In the song. Where somebody stopped singing.” She presses a palm to the glass. “Look. It’s thicker here. Older.”
You look. In the starlight the glass seems to have a different texture, a faint swirling grain like the heart of a tree. Down in it, very deep, there is a shape: a small round shadow.
“What is it?”
“A bell.” She traces the curve with a finger. “A little brass hand-bell. It must have been dropped here. Hundreds of years ago, by a traveller, in the last of the sand before the burning.” She smiles. “It’s still got its clapper.”
“It’s stopped the song?”
“It’s a fixed point.” She nods. “A thing that rings true. The sea has to go round it.” She pats the glass. “It’s the quietest place on the plain.”
“Like Temur’s horse-bell.”
“Like Temur’s horse-bell,” agrees Odval, and begins, softly and helplessly, to laugh.
She laughs until she cries. You hold her, in the middle of a plain of singing glass, and the stars turn overhead.
> mercy | Hold her. | singing_a4s6
> truth | Laugh with her. | singing_a4s6
> quiet | Wait. | singing_a4s6
> inquiry | Ask when it began. | singing_a4s6

=== singing_a4s6 | When It Began
“When I was seven,” she says, later. The laughter has gone out of her, and left her calm. She sits with her chin on her knees, looking at the glass between her boots. “I fell off a pony. Hit my head on a rock. I was out for nine days.” She taps her temple. “When I woke up, I could hear them.”
“Hear what?”
“The people in the grass. The ones who’d died. It was like going deaf, only the other way.” Her mouth twists. “Everyone said it was a gift. Grandmother said the wind chooses its voices. I was to be the Ninth, they said, when the Ninth came.”
“The Ninth.”
“You.” She smiles faintly. “I was told to wait. I’ve been waiting for you since I was seven. On hills.”
You say nothing. A thin breeze stirs the dust on the glass.
“It’s a very long time to wait,” she says, “to be handed a rope and told to hold the other end.”
“Did you mind?”
“Not till tonight.” Her chin trembles. “Tonight I minded.”
> mercy | Say sorry. | singing_a4s7
> truth | Thank her. | singing_a4s7
> quiet | Take her hand. | singing_a4s7
> inquiry | Ask what she wants. | singing_a4s7

=== singing_a4s7 | What She Wanted
“A turn,” says Odval. “At being the one who’s heard.” She looks up. “I’ve spent twelve years listening. To everyone. To the dead. To the wind. To you.” She draws a breath. “I want somebody to listen to me.”
“I’m listening.”
“You’re not listening *properly*. You’re looking at me.” She half smiles. “Close your eyes.”
You close them. For a moment there is nothing but the starlit dark and the distant bells.
“Now,” says Odval. “What do you hear?”
You hear the wind in the glass. You hear your own pulse. You hear a thin high tinkle that might be the sea, and a long low note that might be a trick of the ear, and, under it all, very faint and steady, a sound like breathing.
“You,” you say.
“Good.” Her voice is warm. “That’s the first step. You listen, and you hear a person.” You feel her take your hand. “Now do it for the next one.”
> mercy | Keep listening. | singing_a4s8
> truth | Open your eyes. | singing_a4s8
> quiet | Stay still. | singing_a4s8
> inquiry | Ask who the next is. | singing_a4s8

=== singing_a4s8 | Dawn on the Middle
You sit there until morning. Neither of you speaks. The stars turn, and the cold deepens, and a faint grey light begins at the edge of the glass. The chimes have gone. They did not stop; they were never hushed. They simply sank, as a river sinks under sand, to a depth where they are no longer heard.
“It’s done,” murmurs Odval. She stirs. She is stiff and chilled. “It’s gone round us. It’s sung to the others. They’re still alive?”
“We’ll see.”
“Aye.” She hauls herself to her feet. “I hope they remembered the bowline.”
You laugh. It hurts. You stand, stiffly, and look east. The sun is coming up, huge and red, over a Sea of fire. The glass blazes. In its depths the little brass bell gleams like a coin.
“Take it,” says Odval.
“It’s not ours.”
“It’s been waiting two hundred years for somebody to ring it.” She kneels, and with a tiny knife begins to chip at the glass. “Thank you for staying.”
“I wanted to.”
“I know.” She grins. “That’s the thing about you. It’s annoying.”
> mercy | Help dig. | singing_a4s9
> truth | Hold the bell. | singing_a4s9
> quiet | Watch the sun. | singing_a4s9
> inquiry | Ask what she will do with it. | singing_a4s9

=== singing_a4s9 | The Little Bell
She rings it at the camp, when the others stagger up out of their ropes, bleary and ashamed. It is a small, plain, tarnished bell with a tongue of black iron. It gives out a clear, sweet, unadorned note.
Everyone stops.
“It’s true,” says Hao Lan, in an odd voice. “It rings true.”
“It’s been in the glass for two hundred years,” says Odval. “And it still does.” She holds it out. “You should have it.”
Temur takes it. He turns it over in his hands, with a look of dazed wonder. He rings it again. A bird, somewhere, takes flight.
“It’s better than mine,” he says.
“It’s not better. It’s older.”
“It’s the same.” He swallows. “I’m going to hang it on the mast.”
They do. They hang it from the main-boom of the lead skiff, on a loop of red cord, where it swings to and fro in the wind, ringing gently, clear and kind, like a child’s laugh at the end of a very long night.
Odval watches from the stern. Her face is quiet.
> mercy | Smile. | singing_close | +singing_odval
> truth | Take her hand. | singing_close | +singing_odval
> quiet | Look at the bell. | singing_close | +singing_odval
> inquiry | Ask how she feels. | singing_close | +singing_odval

// ---------------------------------------------------------------- hidden: passing it on
=== singing_h1 | A Hum Passed Back
You do not decide to do it. You are sitting in the lee of the skiff with your back against the boards when the chimes reach their highest pitch, and your chest answers. The cold seed turns over. The tune with no words rises in your throat, and you hum it, low and steady, with your lips closed.
The sea hears.
The chimes falter. They hang, a hundred thousand notes, a held breath. Then, one by one, they find the pitch of your hum and fall into it, as a crowd falls into step behind a drum.
“Oh,” says Odval, at your side, in a tiny voice. “You’re carrying it.”
“I don’t know how.”
“You do.” Her pale eyes are very wide. “It’s the same as the line. You’re the last link. You’re putting your hand on a shoulder.”
You are. You feel it. A warm hard weight, not a person, not a shoulder, but a presence: the sea itself, immense and lonely and listening. It has been waiting for someone to pass it along.
“Let it go through,” whispers Odval. “Don’t hold. Don’t want.”
You breathe out.
> inquiry | Hum. | singing_h2
> truth | Let go. | singing_h2
> mercy | Hold Odval’s hand. | singing_h2
> quiet | Close your eyes. | singing_h2

=== singing_h2 | The Sea Remembers
It goes through you. All of it. A hundred thousand names, a long unspooling river, and you are the stone it breaks upon. You do not hold. You do not want. You let it pour out of your mouth in a hum, into the dark, onward, east, along the glass, toward the mountain.
You feel each as it goes. A girl of seven, with a plait. A boy of nine, very tired. A baby that never had a name. A child with a toy horse. They pass through you so fast, so light, each a little warmth, each leaving a mark like a cool thumb on your breastbone.
They go east. They go down the long chain of the glass, from plate to plate, and you can feel the whole sea shifting to carry them. It runs in a single bright thread across the dark.
Somewhere very far away, under a mountain, a woman has begun to hum.
You hear her. You know it is her. She takes up the tune as it arrives, a note at a time, like a seamstress taking up a dropped stitch.
The sea sighs. It is the most contented sound you have ever heard.
> inquiry | Smile. | singing_h3
> truth | Weep. | singing_h3
> mercy | Hold on. | singing_h3
> quiet | Let it end. | singing_h3

=== singing_h3 | A Thousand Years of Children
It ends before dawn. You come back to yourself slowly, like a swimmer rising. You are lying on your side on the glass, with your head in Odval’s lap. The others are standing round in a ragged ring with lamps. Their faces are strange.
“How long?” you say.
“Six hours.” Hao Lan’s voice shakes. “You didn’t move. You didn’t breathe, almost. The glass lit up like a lamp.” She wipes her eyes. “It’s still lit.”
You sit up. She is right. The Sea shines in the starlight, a faint pale silver, from edge to edge, as though lit from within. Along the horizon, to the east, the light runs in a straight bright road, a path of living silver leading away over the plain.
“It’s a road,” says Duan Wuyi, softly. “It goes the way we’re going.”
“It goes to the mountain,” says Odval. “To her.”
“It’ll stay?”
“For as long as there’s a sea.” She strokes your hair. “They’ve been carried. They’re going home.” Her voice breaks. “And so are we, a little faster.”
You look at the silver road, and the long dark sky, and you laugh.
> inquiry | Rest. | singing_close | +singing_carried
> truth | Stand. | singing_close | +singing_carried
> mercy | Weep. | singing_close | +singing_carried
> quiet | Look east. | singing_close | +singing_carried

// ---------------------------------------------------------------- close
=== singing_close | Morning on the Glass
You break camp in a clear cold dawn, the sails snapping out one by one. The glass is wet with dew. Smoke from the breakfast fire stands straight up. A few gulls, or something like gulls, wheel above the mast. The three skiffs lie in a line with their noses to the east.
+[how] singing_named | You answered a roll-call of children, and the sea lit like a lamp.
+[how] singing_roped | You tied a company to its own anchors, and counted the dawn.
+[how] singing_hushed | Temur’s false lullaby kept the sea asleep, and Odval answered one real name.
+[how] singing_odval | You sat two miles out on a plate of glass, and listened to a seer.
+[how] singing_carried | You hummed a thousand years of children to the mountain.
Hao Lan makes a note in her book. She is writing in a firm, neat hand: Night four. All present. She hesitates. She adds, in the margin: Sea: not hostile.
“It isn’t, you know,” she says to the air. “It never was. It was lonely.”
“Most things are.”
“Yes.” She shuts the book. “It’s remarkable how much of this is the same thing.” She counts on her fingers. “The lamp. The coast. The Mill. The Spare. The Sea.”
“What?”
“Someone calling out,” says Hao Lan, “and nobody answering.”
She looks at you. Her grey eyes are very clear.
“I think that is what we are for,” she says.
> truth | Nod. | singing_close2 | +b5q_singing
> mercy | Take her hand. | singing_close2 | +b5q_singing
> quiet | Check the sail. | singing_close2 | +b5q_singing
> inquiry | Ask what she means to do. | singing_close2 | +b5q_singing

=== singing_close2 | A Short Rest
You make five miles that morning, and sixteen by noon. The wind is steady. The skiffs run in a loose arrowhead over the shimmering plain, Light in the lead, a bright sail in the wake. At midday you heave to for lunch, in the lee of a sliver of broken plate, and sit in a circle on the warm glass, chewing dried curd.
Gu has taken a tin whistle from his pack. He has not played in months. He turns it over, looks at it, blows a single clean note.
“I thought you couldn’t play,” says Hanming.
“I can’t.” Gu grins. “It’s awful. But I think it’s allowed.” He blows another. “It’s the noise you make when you aren’t afraid.”
He plays a tune. It is the false lullaby. It is dreadful. It wobbles. It has two wrong notes in every bar. Hanming laughs so hard he has to put down his bread.
The Elder listens with her head tilted.
“Again,” she says.
Gu plays again. This time he gets one bar right. They cheer.
It is, you think, the loveliest bad music you have ever heard.
> truth | Smile. | hub_b5_a | bond:gu+3
> mercy | Clap. | hub_b5_a | bond:gu+3
> quiet | Listen. | hub_b5_a | bond:gu+3
> inquiry | Ask Gu for another. | hub_b5_a | bond:gu+3

`,
  scenarios: String.raw`
$ SU_SINGING_NAMES | trust+4 respect+3 fear+5 | elder | The Elder hears the Glass Sea sing the names she signed.
hostile: It sang the fourteen. In order. In a high clear treble, like a choir of children who had been told to be very good. I stood on the deck and did not move. I thought: it will end. It did not. It went on to the fifteenth. It was I who ended it, by shutting my ears. I am not proud of that.
wary: I counted my own name among them. It was a surprise. I do not recall signing it. But there it was, in the register, in the middle of the third century, in a child’s hand. I have thought since that all of us are in the book, somewhere.
neutral: It is possible to listen to a sea of dead names and not break. I discovered this at about three in the morning, quite calmly, with a cup of tea. It is a sort of work.
warm: Hanzhen held my hand. I did not ask him to. He is nineteen and he is afraid of everything, and he held the hand of a woman who signed fourteen sentences. I do not understand it. I have decided not to try.
devoted: There was a point near dawn at which the sea stopped singing the dead and began singing the living. I recognised the tune. It was the one that goes over the lamp. I knew then who was listening.
`,
  remarks: String.raw`
% singing_odval_later | since:b5q_singing>=3 | gu | Odval has taken to sleeping on the open deck. She says the glass is quiet now, and that quiet is a thing she has never had before. I think she is a little afraid of it.
% singing_temur_later | since:singing_hushed>=3 | hao | Temur has been humming a false lullaby under his breath all week. It is perfectly dreadful. It is also the reason none of us have been sleepwalking, so I have said nothing.
`,
}
