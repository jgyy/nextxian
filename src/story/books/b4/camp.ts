import type { Arc } from "../types";

/**
 * Book Four, arc six: the Winter Camp. The seat of Grandmother Tamar, who decides, and of Odgerel, the Horse-Keeper who left
 * Ren Qiao on the Ash Bridge when he was ten. Four approaches: answer the Matriarch's questions (a1, truth), ride the wild mare
 * at the horse fair (a2, force), find Odgerel in the masked Day of Names (a3, deceit), and help the camp lay in stores
 * beside her (a4, mercy). A hidden route carries the forty-one to the Door. Cast: Tamar, Odval, Odgerel, Ren Qiao, Temur, Sarnai.
 */
export const camp: Arc = {
  id: "camp",
  name: "The Winter Camp",
  scenes: String.raw`
=== camp_entry | The Great Ring
It is the largest camp you have seen: three hundred felt tents in a ring a mile across, pitched on a gentle plain by a broad slow river. The tents are white. They are painted with bands of red and blue at the doors, and on every roof a plume of smoke stands straight in the still air. Through the doorway you can see the sky.
Horses graze in their thousands on the grass beyond the river. Smoke and dust and the smell of boiling meat drift over everything. A mass of people has come out to meet you: women in long coats, children in bright caps, old men on stools with their pipes. They are silent. They are watching.
Temur dismounts. He takes off his hat. He says, softly, “We are home.”
At the foot of the black stone, on a heap of felts, sits a very old woman in a red coat, with a white scarf over her hair. Her face is as creased as a walnut. Her eyes are covered with a strip of blue cloth. She is laughing, silently, with her whole body.
> truth | Go to her, and put Madam Ash’s letter in her hand. | camp_a1s1
> force | Look at the pen of wild horses by the river, where a crowd has gathered. | camp_a2s1
> deceit | Notice that every tent has a mask hung on its door-flap, and that the whole camp has fallen quiet. | camp_a3s1
> mercy | Notice a grey-haired woman at the edge of the crowd, struggling alone with a load of winter hay. | camp_a4s1
> inquiry | Take the pearl out of your pocket, and say that you have come to the Door. | camp_h1 |  | stones_slept | You have not slept among the dead.

// ---------------------------------------------------------------- a1: Tamar
=== camp_a1s1 | The One Who Decides
You walk across the bare earth to the foot of the stone. The crowd closes behind you. Hundreds of eyes, quiet as grazing animals. The old woman on the felts does not turn her head, but the blue cloth over her eyes tilts toward you, as a flower tilts toward the sun.
You kneel. You hold out the letter. It is eleven years old. The paper is white at the creases.
She takes it. Her hand is a bird’s claw, brown and light and surprisingly warm. She holds it to her face. She breathes in. She smells it, as one smells bread.
“Hui Niang,” she says. It is a dry cracked soprano, thin as a reed, with a gale of laughter at the bottom of it. “That girl. She wrote in a lovely hand. It took her two hours to say nothing.” She laughs, a huge wheeze. “Is it the same?”
“It is shorter, Grandmother.”
“Good. Read it me.”
> truth | Read it aloud. | camp_a1s2 | npc:SU_CAMP_TAMAR
> mercy | Ask if you may sit. | camp_a1s2
> quiet | Look at the Door. | camp_a1s2
> inquiry | Ask what Madam Ash asked her, eleven years ago. | camp_a1s2

=== camp_a1s2 | The Question
“Ah,” says Tamar. “That.” She folds the letter on her knee. “It was a good one. She asked it in this circle, at midsummer, in front of the clans. She stood where you are kneeling.” The blue cloth tilts. “She said: Grandmother, if a woman gives a child away to save its life, and the child grows up believing it was abandoned, and the woman is found, can she be forgiven?”
Something stirs in the crowd behind you. A rustle. A single indrawn breath.
“I did not answer,” says Tamar. “I said: ask me when she comes.”
“When who comes?”
“The child. The one who asks.” She grins. She has four teeth. “I said it to that girl and she went white as milk. She thought I meant her. She thought it was her own question.” She wheezes. “It wasn’t. It never was. It was another woman’s.”
She turns her face toward the crowd.
“Odgerel,” she says gently. “Come out.”
> truth | Wait. | camp_a1s3
> mercy | Look at Ren. | camp_a1s3
> quiet | Hold your breath. | camp_a1s3
> inquiry | Ask who Odgerel is. | camp_a1s3

=== camp_a1s3 | Odgerel
She comes out of the crowd slowly, on bowed legs, like a woman who has spent her whole life in the saddle. She is sixty, and small, and as brown and hard as a saddle-strap. She wears a coat of undyed leather and a hat of black felt. Her face is deeply lined and quite expressionless. She walks to the foot of the stone and stops. She does not look at the Matriarch. She is looking past you, over your shoulder.
Ren Qiao is standing at the edge of the circle. He has not moved. His scarred face is the colour of ash.
“I thought you were dead,” he says.
It is a flat dry voice. It does not carry. But in the silence it is heard by every person in the ring.
“No,” says Odgerel.
“You said you would come back.”
“I did.”
“I was ten.” His voice does not change. “I stood on the Ash Bridge for three days. I had your scarf. I thought you had fallen off the mountain.”
“I know,” says Odgerel.
> truth | Hold your breath. | camp_a1s4
> mercy | Step to Ren’s side. | camp_a1s4
> quiet | Look at Tamar. | camp_a1s4
> inquiry | Ask what she knew. | camp_a1s4

=== camp_a1s4 | What Odgerel Knew
“Everything,” says Odgerel. She says it to the sky. “I knew what they would do to a boy of mixed blood on the Steppe. I knew what they would do to a Horse-Keeper’s son, in a Garrison year. I knew the Colonel had sent word. They were coming for the clan.” She does not blink. “I took you to the one place I knew they would not look. A bridge over a chasm. A warden who owed me a favour. He was a good man.”
“He died.”
“I know.” Her face doesn’t move. “I was told afterwards.”
“You were told.” Ren’s voice is quite quiet. “You didn’t come.”
“I was in the fort.” She says it flat. “The Colonel had me. He kept me for six years. For leverage. I was not allowed to write.” She stops. “When I got out, you were a Warden. You were thirty. You had a sword. You looked so much like his father that I could not bear it.”
She takes a long breath.
“I should have come,” she says. “I am sorry. I am so sorry. I am a coward.”
> truth | Wait. | camp_a1s5
> mercy | Watch Ren. | camp_a1s5
> quiet | Look away. | camp_a1s5
> inquiry | Ask Tamar. | camp_a1s5

=== camp_a1s5 | Tamar’s Answer
“Well?” says Tamar. The blue cloth is turned toward Ren. “You have heard the question.”
Ren Qiao does not answer. He is staring at his mother. His hands are at his sides. His face is that of a man who has been stabbed and has not yet felt the blade.
“Can she be forgiven?” says Tamar. “I said I would answer when the child came. The child is here.” She wheezes. “I cannot answer for you. It is not mine. I can only say what I know.”
She waits.
“I know that she has not slept in the same tent as another person for twenty years. I know that she has kept a horse ready, saddled, in the picket line, for the day you came. It is a chestnut gelding. It is eleven years old.” Her sightless face is mild. “I know that every night she walks out to it, and puts her hand on its neck, and says your name.”
Odgerel makes a small sound.
“That is all I know,” says Tamar. “It is for you to say what it means.”
> truth | Hold still. | camp_a1s6
> mercy | Look at Ren. | camp_a1s6
> quiet | Wait. | camp_a1s6
> inquiry | Ask where the horse is. | camp_a1s6

=== camp_a1s6 | A Chestnut Gelding
It is at the end of the picket line, by itself, a little apart. It is a long-legged chestnut with a white sock and a patient eye. It stands, saddled, in the shade of a felt awning, and chews. It has been standing there for eleven years, every day, with the cinch tightened, and the bridle on, and a skin of water tied to the pommel.
Ren Qiao walks up to it. He walks slowly, with his arms at his sides. He stops. The horse turns its head. It regards him with enormous brown eyes.
He puts out a hand. The horse breathes on it.
“What is he called?” says Ren. His voice is hoarse.
“Waiting,” says Odgerel. She has come behind him. She stands three paces off, with her hands clasped. “It is a joke. It is not funny.”
“No.”
He strokes the horse’s nose. His face is working. He rests his forehead against the animal’s neck, and stands there, with his shoulders hunched, and his big scarred hand curled in the mane.
“I had your scarf,” he says, to the horse. “I have it still.”
> truth | Step back. | camp_a1s7
> mercy | Give them room. | camp_a1s7
> quiet | Watch. | camp_a1s7
> inquiry | Ask Odgerel if she wants to speak. | camp_a1s7

=== camp_a1s7 | The Scarf
He takes it out. It is red, faded to the colour of rust, a long woollen strip, frayed at the ends. It is knotted in a pattern that Temur, watching from the crowd, identifies in a whisper: it is a child’s finding-knot. It means I am here. He holds it out. His hand is steady.
Odgerel takes it. She looks at it for a long time. Her hard brown face is quite empty. She turns it over in her fingers. She puts it to her cheek.
“I made this,” she says. “The night before. I tied it round your neck. I said, wait.”
“I waited.”
“I know.” She lifts her face. The tears are running down it, unchecked, into the lines. “I know you did.”
Ren Qiao does not speak. He stands there, a head taller than she, in the middle of the great ring, with three hundred tents about him and the Door at his back.
And then, very slowly, he puts his arms round her.
> truth | Look away. | camp_a1s8
> mercy | Weep. | camp_a1s8
> quiet | Bow your head. | camp_a1s8
> inquiry | Watch Tamar. | camp_a1s8

=== camp_a1s8 | Tamar Laughs
The old woman is laughing. It shakes her whole frame: a huge silent wheeze that bends her double on the felts, until the blue cloth slips and the tears run out from under it. She wipes her face with her sleeve. She says, between gasps, “That’s my answer.”
“Grandmother?”
“It is the only one I ever give.” She straightens, wheezing. “I say: ask the child. And the child says it with his arms.”
She waves a hand.
“Take them away,” she says. “Give them tea. Let them be stupid.” She turns her blind face to you. “And you. I have heard about you for a year. The wind never stopped. It said: she is coming. She asks. She has a seed and a debt.” She chuckles. “I thought: how tiresome. And now you are here, and you are small.”
“I am sorry.”
“Don’t be.” She holds out a withered hand. “Come here, child. Let me hear what you are.”
> truth | Take it. | camp_close | +camp_decided
> mercy | Kneel. | camp_close | +camp_decided
> quiet | Bow. | camp_close | +camp_decided
> inquiry | Ask her what she hears. | camp_close | +camp_decided

// ---------------------------------------------------------------- a2: the mare
=== camp_a2s1 | The Wild Mare
They have a mare in the pen. She is a tall dun with a black dorsal stripe and a mane like smoke. She is not tame. She has never worn a saddle. She is the pride of the herd and the despair of the horse-keepers. She stands in the middle of the pen, quivering, nostrils flared, ears pricked toward the crowd, and every so often she lowers her head and snorts, and a hundred people step back.
“That’s Storm,” says a voice at your elbow. It is Sarnai. She is sitting on the top rail of the pen with her heels hooked under the bar and a half-eaten curd cake in her fist. “Nobody’s ridden her. Eleven have tried. She broke Bold’s collarbone.”
“Why?”
“It’s the horse fair.” She takes a bite. “It’s the custom. Every year, at the summer camp, the Matriarch puts up a wild one. Anyone can try. If you stay on for the count of a hundred and four, you win.”
“A hundred and four?”
“It’s a good number for a horse.” She grins. “Do you want a go?”
> force | Climb the rail. | camp_a2s2
> truth | Ask what the prize is. | camp_a2s2
> quiet | Watch the mare. | camp_a2s2
> mercy | Ask if she is frightened. | camp_a2s2

=== camp_a2s2 | The Prize
“The mare,” says Sarnai. “And a favour from the Matriarch. Anything. Within reason.” She tosses the crumbs to a chicken. “The last time it was won, in my grandmother’s day, the winner asked for a wife.”
“Did she get one?”
“He. He did.” Sarnai considers. “They’re still married. They’ve got nine goats.”
The crowd murmurs. Temur has appeared on the other side of the pen, with his arms folded. He is looking at you with an expression of detached professional interest.
“She will kill you,” he says. “It is almost certain.”
“Temur.”
“I am only saying.” He scratches his nose. “It is my duty as a captain to tell you that the odds are poor. You have never ridden a wild horse. You hold the reins like a bundle of washing.”
“I know.”
“And yet you are climbing the rail,” says Temur.
He sighs. “Ren is not here. I shall have to teach you myself.”
> force | Accept. | camp_a2s3
> truth | Thank him. | camp_a2s3
> quiet | Ask for the rules. | camp_a2s3
> mercy | Ask if the mare minds. | camp_a2s3

=== camp_a2s3 | Three Rules
“One,” says Temur. He is walking round the pen with you, speaking low. “Do not grip with your knees. She will feel it. She will think you are afraid.”
“I am afraid.”
“Two. Do not look down. A horse follows the eye.”
“Where do I look?”
“Where you want to go.” He stops at the rail. “Three. Do not fight her. Ride the bucking. Go with her. You are not a rider, you are a leaf on a river. Let her take you.”
He gives you a leg up. You land on a saddle-blanket on the mare’s back, with nothing but a plaited rope for a rein. She stands quite still. Her skin ripples under you, a warm deep shudder. You can feel the muscle bunched.
“Now,” says Temur, “you must ask her.”
“Ask?”
“Yes.” He looks at you gravely. “It is the only way.”
> force | Lean forward. | camp_a2s4
> truth | Whisper to her. | camp_a2s4
> quiet | Close your eyes. | camp_a2s4
> mercy | Stroke her neck. | camp_a2s4

=== camp_a2s4 | Asking
You lean forward. You put your mouth near her ear. You do not know the right words. You say what you have always said: you say hello. You say, I am sorry to trouble you. You say, I should like to go somewhere, and I do not know the way, and I think you might.
The mare’s ears flick. One goes back. One stays forward.
You say, I am the one who asks.
Something goes through her. You feel it under your thighs, a long sigh, a settling. Her head comes round. She looks back at you with a great dark liquid eye. She snorts, softly, a breath of grass.
Then she goes up.
She goes up like a kicked bellows, front hooves pawing the sky, and you hang on to the mane, and the rope, and the world is a spinning blur of sky and dust. The crowd roars. You are flung forward, back, sideways. You cling.
“One!” bellows the crowd. “Two! Three!”
> force | Hold on. | camp_a2s5
> truth | Look at the horizon. | camp_a2s5
> quiet | Go with her. | camp_a2s5
> mercy | Breathe. | camp_a2s5

=== camp_a2s5 | Fifty
It is the longest minute of your life. She bucks. She spins. She flings herself against the rails and rolls. You are a leaf. You are a rag. Your teeth rattle. You see nothing, hear nothing but the thunder of your own blood and the voices counting, in a ragged chant that grows louder and louder. “Twenty! Twenty-one! Twenty-two!”
Your hands are raw. Your arms are numb. You have lost your seat once and found it again by accident. You can taste blood. You do not think you can hold on.
“Thirty-six! Thirty-seven!”
You think of Pao’s scroll. You think of a long fall that does not close. You think: do not close. You open. You let the mare go, in your mind, the way you would let a note go. You let your whole body go loose. You fall into her rhythm, and the bucking is a river and you are a boat.
“Fifty!” roars the crowd. “Fifty-one!”
The mare falters.
> force | Stay on. | camp_a2s6
> truth | Murmur to her. | camp_a2s6
> quiet | Keep loose. | camp_a2s6
> mercy | Pat her. | camp_a2s6

=== camp_a2s6 | A Hundred and Four
She steadies. The wild bucking drops to a plunging trot, and then to a shaken prancing walk, with her head high and her sides heaving. The crowd has gone mad. They are shrieking. They are stamping. They are throwing their hats. Somewhere a woman is calling your name.
“Ninety!” bellows the crowd. “Ninety-one!”
You are still on. You do not know how. You are lying along the mare’s neck with your arms round it, and your face in her mane, and you are laughing. You cannot stop. You are laughing and gasping and spitting hair.
“A hundred!”
“A hundred and one!”
“A hundred and two!”
The mare stops. She stands in the middle of the pen with her flanks quivering. She turns her head. She looks at you, and there is nothing in her eye but a kind of weary astonishment.
“A hundred and three,” says Sarnai, from the rail, in a wondering whisper. “A hundred and four.”
The pen erupts.
> force | Slide down. | camp_a2s7
> truth | Stay still. | camp_a2s7
> quiet | Pat the mare. | camp_a2s7
> mercy | Thank her. | camp_a2s7

=== camp_a2s7 | The Winner
They carry you round the ring on their shoulders. It is undignified. Your arms are scraped, your lip is split, and your left knee has swelled to the size of a melon. But the crowd is shrieking your name, and the children are running alongside, and Sarnai is turning cartwheels. Temur follows with Storm on a rope. She walks docile at his shoulder, tossing her head.
They set you down at the foot of the stone.
The Matriarch is sitting where she was, on her heap of felts. She turns the blue cloth in your direction. She is wheezing with laughter.
“You rode her,” she says.
“I held on.”
“It is the same.” She wipes her eyes. “She has not let anyone on in nine years. Not Bold. Not Temur. Not me, when I could see.” She cackles. “What did you say?”
“I said hello.”
“Hello.” She is delighted. “That is just what Hui Niang would say. Is that all?”
“I said I was the one who asks.”
She goes quiet.
> force | Wait. | camp_a2s8
> truth | Bow. | camp_a2s8
> quiet | Hold still. | camp_a2s8
> mercy | Ask what is wrong. | camp_a2s8

=== camp_a2s8 | A Favour
“Nothing is wrong,” says Tamar. She puts out her hand. “Come here, child. Let me touch your face.” You kneel. Her fingers are dry and light. They move over your cheek, your brow, your mouth, your closed eyes. She is reading you. She does it slowly. At the end she lays her palm against your breastbone, flat, and holds it there.
“Ah,” she says softly. “There you are.”
You feel the seed. It turns, once, like a sleeping animal. It does not open. It nuzzles her palm.
“The prize,” says the Matriarch. “I promised a favour. Anything within reason.” She lifts her hand. “What do you ask?”
You think. There are a hundred things. You think of Ke-er, and Lin Yuan, and a fort a hundred miles east, and Yue’s nephew in a white house. You think of the Elder’s sister in the mist.
“I should like,” you say, “to know what the Door is for.”
Tamar laughs, delighted.
“That,” she says, “is a very good question. Sit down. It will take until dark.”
> force | Sit. | camp_close | +camp_rode
> truth | Thank her. | camp_close | +camp_rode
> quiet | Listen. | camp_close | +camp_rode
> mercy | Ask for tea. | camp_close | +camp_rode

// ---------------------------------------------------------------- a3: the Day of Names
=== camp_a3s1 | Masks
There is one on every flap: a mask of painted wood, hung from a peg, grinning or scowling or weeping. Some are the faces of animals. Some are demons. Some are plain white ovals with a slit for eyes. The camp has gone quiet. A child runs past, in a fox-mask, silent, and disappears between two tents.
“The Day of Names,” says Temur, in your ear. “It falls tomorrow. It is an old festival. For one day, no one is themselves.” He lowers his voice. “Every Listener puts on a mask, and takes a name that is not theirs, and no one may ask who is who.”
“Why?”
“So that the dead may walk among us.” He shrugs. “It is a belief. A mask is a door. A name is a key. On the Day of Names, a person who wears the face of her grandmother becomes her grandmother, for as long as the sun shines.”
“And the wind?”
“Holds its breath.” His broken-nosed face is grave. “Nobody lies. But nobody tells the truth, either. It is the only day of the year when the question is meaningless.”
> deceit | Ask for a mask. | camp_a3s2
> truth | Say it is odd. | camp_a3s2
> quiet | Look at the tents. | camp_a3s2
> mercy | Ask Temur why he is telling you. | camp_a3s2

=== camp_a3s2 | Why
“Because Ren Qiao’s mother is somewhere in that crowd,” says Temur. “And she is very good at disguise.” He glances at the empty lanes. “She has been practising for twenty years.”
You blink. “She is here?”
“She has been here a month. She came from the fort. She walked, I am told, the whole way.” He tugs his ear. “She has asked the Matriarch for leave to speak to her son. Tamar has said that tomorrow is the day.”
“Then why the masks?”
“Because that is how Odgerel wants it.” He sighs. “She is a shy woman. She cannot face him as herself. She says if she wears another face she may be able to speak.”
He looks sidelong at you.
“She has asked for you to help.”
“Me?”
“She says you are a person who is good at pretending,” says Temur. “She heard about the pilgrims.”
> deceit | Accept. | camp_a3s3
> truth | Ask what she wants. | camp_a3s3
> quiet | Think. | camp_a3s3
> mercy | Say you will do what you can. | camp_a3s3

=== camp_a3s3 | A Small Conspiracy
She is waiting for you in a tent at the edge of the ring, in the dark, with the flap closed. She is small and hard-faced and leathery, in a plain brown coat. She is sitting very upright on a stool with a mask in her lap. Her hands are knotted together. She does not rise.
“You are the girl,” she says.
“I am.”
“He is a good man.” She says it without preface. “I have watched him. For six years. From a long way. I stood on a ridge above the Ash Bridge, in the rain, and watched him walk to his post.” Her voice is rough. “He did not see me.”
“Why did you not speak?”
“What would I say?”
You sit down on the rug. “Hello.”
She gives a short bark of a laugh. “It is that simple, is it?”
“It was for me.”
“Mm.” She turns the mask in her hands. “I have a plan.”
> deceit | Hear it. | camp_a3s4
> truth | Wait. | camp_a3s4
> quiet | Look at the mask. | camp_a3s4
> mercy | Smile. | camp_a3s4

=== camp_a3s4 | The Plan
It is a very simple plan. On the Day of Names, Ren Qiao will be given a mask by the Matriarch. He will be told to take a name. He will walk into the ring. And she will be waiting there, in a mask of her own, as a stranger. They will dance the Ring Dance together. It is the first of the festival, a slow circling measure, for pairs. She will have asked the drummer for the Horse-Keepers’ measure, which is a very old one, which her husband used to dance.
“And then?” you say.
“And then, if he likes,” says Odgerel, “I shall take off the mask.”
“And if he does not?”
She is silent. She turns the wooden face in her fingers. It is a plain white oval, painted with a single black line down the middle, like a crack.
“Then I shall go on dancing,” she says, “until the drum stops.”
Her voice does not shake. But her knuckles are white.
“I should like you to arrange it,” she says. “You are a friend of his.”
> deceit | Agree. | camp_a3s5
> truth | Ask if it is fair. | camp_a3s5
> quiet | Take her hand. | camp_a3s5
> mercy | Say yes. | camp_a3s5

=== camp_a3s5 | A Mask for Ren
You give it to him the next morning, in the horse-lines, with Waiting looking over your shoulder. It is a mask of grey felt, painted with a mouth, a nose, a pair of heavy brows. It has a tuft of horsehair for a beard. It is the mask of a warden.
Ren turns it in his hands. “From the Matriarch?”
“She said to wear it.”
“What name am I to take?”
“Any.”
“I have only one.” His voice is flat. “It is the name my mother gave me.” He stops. “I should like to take another. For a day.”
“Who?”
He thinks. A long minute. Then he says, in a low voice: “My father.”
You say nothing. You know the story, now, from Hao Lan’s notes: a Garrison soldier, killed before the child was born, in a skirmish on the Steppe edge. A man whose face Ren has never seen.
“Is it permitted?”
“It is a day for the dead,” you say. “I should think it is the best of all.”
> deceit | Say nothing more. | camp_a3s6
> truth | Offer to help him dress. | camp_a3s6
> quiet | Bow. | camp_a3s6
> mercy | Hold the mask for him. | camp_a3s6

=== camp_a3s6 | The Day of Names
The whole camp comes out at noon, in masks. The effect is eerie. Three hundred tents, a thousand people, all faceless, in coats of every colour, and not a sound. Demons and foxes and weeping women. Children with the faces of old men. Old men in the faces of children. The drum begins, a low irregular beat, and the ring begins to turn.
You wear a mask too. It is a plain white one, with a smear of ochre for a mouth. It has a name pinned to it in Hao Lan’s hand: Nobody. It seems appropriate.
The dancers form. They go in pairs, slowly, round the great black stone. They hold hands, and bow, and circle. The drum is a heartbeat. The pipe comes in, thin and sweet, and Odval is playing it, in a mask of a heron.
At the edge of the ring a tall man in a grey felt warden’s mask is standing alone.
Across the ring, a small woman in a white mask with a black crack down the middle has seen him. She is not moving.
> deceit | Watch. | camp_a3s7
> truth | Hold your breath. | camp_a3s7
> quiet | Step back. | camp_a3s7
> mercy | Push Ren gently forward. | camp_a3s7

=== camp_a3s7 | The Ring Dance
She crosses the ring. She does it slowly, among the wheeling masks. She stops before him. She makes the small deep bow of the Horse-Keepers, with her hand on her breast.
He returns it. He is stiff, he is wooden, but he does it.
She holds out her hand. He takes it. The drummer, who has been watching, shifts the beat. The low irregular throb steadies into a slow stamping measure, in three, like a walking horse. The pipe takes it up.
They dance.
She leads. She is small and bandy-legged and light as a feather. He follows clumsily, a head taller, his big scarred hands engulfing hers. They go round and round the great ring, in the swing of the drum, among the faceless crowd. Neither speaks. They do not have to.
You see her mask tilt up toward his. You see his tilt down.
The pipe goes on. It is the Horse-Keepers’ measure. It is very old.
> deceit | Watch. | camp_a3s8
> truth | Weep. | camp_a3s8
> quiet | Look away. | camp_a3s8
> mercy | Smile. | camp_a3s8

=== camp_a3s8 | The Mask Comes Off
He is the one who does it. At the end of the third circuit, when the drum slows, Ren Qiao lets go of her hand. He reaches up, with a hand that shakes, and unties the thongs of his own mask. He lifts it away. His scarred face is wet. His eyes are red.
“Mother,” he says.
She doesn’t move.
“It’s me,” he says. “It’s Ren.”
The ring has stopped. The drum falls silent. A thousand masked faces are turned, in the noon light, toward the two of them. Nobody breathes.
Slowly, with a hand as steady as a rock, Odgerel takes off the white mask with the black crack. Her face is bare. It is lined and brown and entirely naked. She looks up at him, and does not smile. She does not weep. She stands there, with her chin high, small and hard and straight.
“I know,” she says. “I knew you would see through me.”
“You danced the same.”
“So did your father,” says Odgerel. “It is the only thing he could do.”
> deceit | Step back. | camp_a3s9
> truth | Smile. | camp_a3s9
> quiet | Cover your mouth. | camp_a3s9
> mercy | Weep. | camp_a3s9

=== camp_a3s9 | The Name He Took
“Who are you today?” says Odgerel, quietly. She is looking at the mask in his hand. “It is the custom. You must say.”
Ren turns it over. “I was going to say my father.”
“And?”
“I find I would rather say my own.” He draws a breath. “Ren Qiao. Son of Odgerel. Warden of the Ash Bridge.” His voice cracks. “Late of the Steppe.”
There is a silence. Then, from the ring, a single voice, a woman’s, calls out: “Welcome home.”
Another takes it up. Then another. The whole ring begins to chant it, softly, in a rolling murmur, from mask to mask: “Welcome home. Welcome home. Welcome home.”
Ren stands there with the mask in his hand. His mother has taken the other. She is holding it against her breast. They are two small human figures in the middle of a circle of faces, under a white sky, with a black stone behind.
“It’s all right,” says Odgerel, very low. “It’s the Day of Names. Nobody’s looking.”
They are all looking.
Ren begins to laugh.
> deceit | Laugh too. | camp_close | +camp_mother_found
> truth | Clap. | camp_close | +camp_mother_found
> quiet | Bow your head. | camp_close | +camp_mother_found
> mercy | Hold Hao Lan’s hand. | camp_close | +camp_mother_found

// ---------------------------------------------------------------- a4: the hay
=== camp_a4s1 | A Load of Hay
She is struggling with it alone: a grey-haired woman in a leather coat, bent double under a great bale of dried grass roped to her back. She is small and hard and bandy-legged. She is making slow progress toward a heap of other bales on the far side of the ring. Her breath is coming in short sobs. Nobody is helping. The crowd is eddying round her, indifferent, intent on the horse fair.
You go to her without thinking. You take the other end of the bale. You lift.
She looks round, startled. Her face is a map of lines. Her eyes are dark and bright and wary. “I do not need help,” she says.
“I know.”
“I have carried worse.”
“I am sure.”
“It is no weight.” She grunts. The bale is as heavy as a boulder. “I have done it all my life.”
“Then you will not mind if I carry the other end,” you say. “It is only to keep you company.”
She glares. And then, unwillingly, she laughs.
> mercy | Walk with her. | camp_a4s2
> truth | Introduce yourself. | camp_a4s2
> quiet | Say nothing. | camp_a4s2
> inquiry | Ask what the hay is for. | camp_a4s2

=== camp_a4s2 | Winter Stores
“Winter,” says the woman. She lowers her end of the bale to the heap, and wipes her forehead on her sleeve. “It always comes.” She squints at the cloudless sky. “It is a month off. It is three months off. It does not matter. The Steppe is not kind to the improvident.” She spits. “I lay in hay every week of the year.”
“You are the camp’s hay-keeper.”
“I am the camp’s everything.” She says it without bitterness. “I keep the horses. I mend the harness. I tend the sick. I bury the dead. I am, you may say, a general servant of the clan.” A thin smile. “I have been one for twenty years.”
She sits down on the bale, panting, and takes out a pipe. She does not light it. She just holds it.
“What is your name?”
“Odgerel,” she says.
It is a plain name. It means nothing to you. But a tiny cold shock goes through your chest, as if someone had dropped a pebble in a well.
> mercy | Look at her. | camp_a4s3
> truth | Say it back. | camp_a4s3
> quiet | Sit down. | camp_a4s3
> inquiry | Ask if she has a son. | camp_a4s3

=== camp_a4s3 | A Son
She goes still. The pipe stops in her hand. She doesn’t look at you. She looks at the horizon. “Why do you ask?”
“I know a man,” you say. “A warden. He is thirty-two. He has a scar on his face, a white one, and a way of standing like a post.” You pause. “He says very little. He is the kindest person I know.”
She does not move.
“He had a scarf,” you say. “A red one. In the pattern of a finding-knot.”
The pipe falls. It lands in the grass at her feet. She does not pick it up. She is staring at the horizon with her whole body rigid, like an animal who has smelled a hunter.
“He is here,” you say. “In the camp. He is with the horses.”
Her lips move. No sound comes out.
“He thinks you are dead,” you say.
She says, in a croak: “I have thought of him as dead, too. It was easier.” She puts her face in her hands. “Oh, God. I am not ready.”
> mercy | Sit with her. | camp_a4s4
> truth | Say it is all right. | camp_a4s4
> quiet | Wait. | camp_a4s4
> inquiry | Ask what she needs. | camp_a4s4

=== camp_a4s4 | Time
“An hour,” says Odgerel. “A day.” Her voice is muffled. She wipes her face. “A year.” She laughs, wetly. “I have had fifteen years. I have wasted them. I thought: I will prepare. I will have a speech.” She lifts her face. It is blotched and swollen. “I have no speech.”
“Then do not give one.”
“What shall I do?”
“Finish the hay,” you say. “Let him find you.”
She stares. Then she sniffs, loudly, and bends and retrieves her pipe, and says in a voice that is nearly steady: “It is a good plan. I will do it. I have never been able to refuse hay.”
You carry bales with her all the afternoon. You do not speak. The sun slides down the sky. The heap grows. By dusk there is a rick the height of two men, and your hands are cut, and your back aches, and the old woman has stopped looking over her shoulder.
Behind you, at the edge of the field, a tall man is standing quite still.
> mercy | Say nothing. | camp_a4s5
> truth | Look at Odgerel. | camp_a4s5
> quiet | Step aside. | camp_a4s5
> inquiry | Look at Ren. | camp_a4s5

=== camp_a4s5 | The Man in the Field
He has been there a while. He has his arms folded, and his scarred face is expressionless. He is watching the old woman, who is bent over a rope, with her back to him, tying off a bale. She has not noticed. She is humming under her breath. It is a Horse-Keepers’ tune, a slow three-time measure, like a walking horse.
Ren Qiao walks across the field. He walks slowly. His boots crunch on the stubble. He stops three paces behind her.
“That’s not how you tie a hitch,” he says.
She freezes.
It is a dry flat voice. It does not carry. But she hears it. Her hands stop on the rope. Her whole back goes rigid. She does not turn round.
“It’s a double,” says Ren. “Not a single. The wind gets under a single.”
“I know that,” says Odgerel. Her voice is a thread. “I taught it you.”
“Yes.”
“You were four.”
“Yes,” says Ren Qiao. “I remember.”
> mercy | Hold your breath. | camp_a4s6
> truth | Step away. | camp_a4s6
> quiet | Watch. | camp_a4s6
> inquiry | Listen. | camp_a4s6

=== camp_a4s6 | A Double Hitch
She turns round. It takes a long time. She faces him with her chin up and her small brown hands hanging at her sides. They stand there, a pace apart, and look at each other. Neither says anything. A cold wind blows across the stubble. A lark goes up.
Ren kneels. He does it slowly, awkwardly, like a man who has forgotten how. He takes the rope from the bale. He ties a double hitch, with big scarred fingers, in three quick movements. He pulls it tight. He looks up at her.
“Like that,” he says.
“Yes,” whispers Odgerel.
“I never forgot.”
She goes down on her knees in front of him. She takes his hands in hers. She holds them. She looks at the scars on his knuckles, and the callus on his palm, and the thin white line across the back of one wrist. She raises them to her lips.
Then she weeps. She does it as she does everything, without sound, with her back straight and her chin up, and the tears run down her face.
> mercy | Turn away. | camp_a4s7
> truth | Weep. | camp_a4s7
> quiet | Walk off. | camp_a4s7
> inquiry | Stay. | camp_a4s7

=== camp_a4s7 | Dusk in the Hay
You leave them. It is the only thing to do. You walk away across the stubble in the dusk, with your hands in your sleeves, past the great rick, past the picket-lines, into the camp. Lamps are coming on in the tents. The smell of boiling meat drifts over everything. Somewhere a woman is calling a child. A drum begins, low and slow.
Hao Lan is sitting on a barrel outside the Matriarch’s tent, with her notebook on her knee. She is not writing. She looks up as you come.
“Is it done?”
“I think it is beginning.”
“Ah.” She closes the book. “I have been trying to think of a word for it. For what happens. When a thing that has been broken for a long time is put back, and does not fit, and the person holds it anyway.”
“Is there one?”
“There is not. I looked.” She smiles. “I have started a new section of the dictionary.”
She hands you a cup. It is hot tea.
> mercy | Sit with her. | camp_a4s8
> truth | Drink. | camp_a4s8
> quiet | Listen to the drum. | camp_a4s8
> inquiry | Ask what the word will be. | camp_a4s8

=== camp_a4s8 | The Word
“I have not decided,” says Hao Lan. “It has to be short. It has to be true.” She watches the lamps. “It has to include the hay.”
“Hay?”
“It is the hay that made it possible. I believe in details.” She taps her pencil. “If the two of them had met in a tent, over tea, with a speech, it would have been a scene. It would have been a lie. They met in a field with a rope. It was true because it was practical.” She smiles. “I think the word has something to do with work.”
You drink your tea. The drum goes on, low and slow. Out in the dusk a tall man and a small woman are walking back across the field together, side by side, with a bale between them. They are not touching. They are not speaking. They carry the load between them.
“Kinship,” says Hao Lan, thoughtfully. “No. Too grand. Fellowship. No.” She frowns at her page. “Haycart,” she says. “It is almost a word.”
You laugh. She laughs. Behind you, in the tent, a blind old woman wheezes with merriment.
> mercy | Smile. | camp_close | +camp_hayed
> truth | Say it is a good word. | camp_close | +camp_hayed
> quiet | Listen. | camp_close | +camp_hayed
> inquiry | Ask Tamar what she heard. | camp_close | +camp_hayed

// ---------------------------------------------------------------- hidden: the Door
=== camp_h1 | The Door
You take the pearl out of your pocket. It lies on your palm, a tiny drop of frozen milk. It hums. All round you the camp falls silent. Hundreds of eyes fix on the thing in your hand.
“This is Little Wind,” you say. “She was eight months old. She was one of fifty-one.” Your voice is not quite steady. “There are forty more in the north rows at the Singing Stones. I was asked to carry them. I was told to bring them to the Door.”
Tamar has risen. She does it slowly, on the arm of her granddaughter, a bent small figure in red. The blue cloth turns toward you. For the first time she is not laughing.
“Say it again,” she says.
“I have come to the Door.”
There is a long, long silence. The wind in the grass is loud. A horse whinnies, far off, and is quiet.
“Odval,” says the Matriarch, in a voice like dry reeds. “Light the lamps.”
> inquiry | Hold the pearl out. | camp_h2
> truth | Step toward the stone. | camp_h2
> mercy | Look at Hanming. | camp_h2
> quiet | Wait. | camp_h2

=== camp_h2 | What the Door Is
It is a gate. That is all. It is a tall slab of black stone with a hole through it, twelve feet high and six wide, set in the middle of the ring. Through the hole you can see the sky. It has been standing there for eleven centuries. Every clan has a story about it. Every story is different. The one thing they agree on is that nobody has walked through.
“It is not for the living,” says Tamar. She is standing at the foot of it, leaning on Odval. “It is the place where a name goes when it has no body. A Listener who dies without a stone, a child who is struck, a clan that is lost. They are brought here. They are carried through.”
“Through?”
“To the other side.” Her blind face tilts up. “I do not know what is there. I have never looked. I am afraid of it.” She smiles. “It is the only thing I am afraid of.”
“Why?”
“Because it is so quiet,” says Tamar. “And I like noise.”
She gestures. Odval lifts her bone pipe. A hundred lamps are lit round the ring.
> inquiry | Carry the pearl. | camp_h3
> truth | Ask how. | camp_h3
> mercy | Hold the pearl close. | camp_h3
> quiet | Wait. | camp_h3

=== camp_h3 | Through
You carry her through. It is a very short walk. Eight paces. You walk it slowly, with the pearl cupped in your two hands, in the light of a hundred lamps, with the whole camp watching. The wind drops. The air thickens. At the threshold you feel a faint cold on your face, like a breath from a cave.
You step into the hole in the stone.
Time stops. The sound goes out of the world. You are in a narrow place, with black walls, and a long pale light ahead. You are alone. The pearl is warm in your hands. It hums, a single high thin note.
You hear, very far off, a child laugh.
You walk through. You come out the other side. You are standing on the grass, in the lamplight, facing the way you came. The camp is silent. The pearl is gone.
You open your hands. They are empty.
A voice says, from the stone behind you, very clearly, in the voice of a baby of eight months: “Hello!”
The ring erupts.
> inquiry | Laugh. | camp_close | +camp_door
> truth | Weep. | camp_close | +camp_door
> mercy | Bow. | camp_close | +camp_door
> quiet | Kneel. | camp_close | +camp_door

// ---------------------------------------------------------------- close
=== camp_close | Tamar’s Tent
The Matriarch’s tent is the largest in the ring: a vast white dome, hung inside with carpets, lit by a hundred small lamps. A brazier burns in the centre, with a copper kettle on it, and the smell of tea and butter and warm wool fills the air. Old women sit round the walls on stools, smoking, saying nothing.
+[how] camp_decided | You put a letter in a blind woman’s hand, and she laughed until her blindfold slipped.
+[how] camp_rode | You asked a wild mare for a ride, and she gave you a hundred and four.
+[how] camp_mother_found | A man in a warden’s mask took it off in the middle of the Day of Names.
+[how] camp_hayed | A boy and his mother tied a double hitch in a field at dusk.
+[how] camp_door | You walked a pearl through a black stone, and a baby said hello.
Tamar sits on a heap of felts at the far end, with a bowl of tea in her lap. She lifts her face as you come in. The blue cloth glimmers in the lamplight.
“Sit,” she says. “All of you. It is a long story.”
You sit. The Elder sits beside you, upright, with her hands in her lap. Duan Wuyi sits. Hao Lan sits. Ren Qiao and his mother, at the edge of the circle, side by side, not touching. Hanming, and Gu. Shu Ning crouches in a corner with her back to the wall.
“I am going to tell you,” says Tamar, “what the Order of the Torn Page is for.”
> truth | Listen. | camp_close2 | +b4q_camp
> mercy | Take the Elder’s hand. | camp_close2 | +b4q_camp
> quiet | Pour tea. | camp_close2 | +b4q_camp
> inquiry | Ask her to begin. | camp_close2 | +b4q_camp

=== camp_close2 | What the Order Is For
“To be wrong,” says Tamar.
She says it into the hush, with a ghost of her old wheeze. “That is the whole of it. The saint was a clerk. She kept a book. She wrote down who was who. And one day she wrote a name, and she knew it was a mistake, and she could not change it.” She sips her tea. “She wrote another. She wrote another. She came to a place where the book was nothing but mistakes.”
Nobody speaks. The brazier ticks.
“So she tore a page out,” says Tamar. “Not because she was angry. Because she was ashamed. She said: I cannot fix this. But I can refuse to go on.” She lowers the bowl. “And the page became a hole. And the hole became a question. And the question has been asking, ever since: why do you keep writing?”
“The abyss,” whispers the Elder.
“Yes.” The blind face turns toward her. “It is not hungry. It is not wounded. It is a clerk’s apology, a page of ‘I am sorry,’ that nobody has answered.”
She smiles.
“We are the ones who listen for the answer. And we are very, very tired.”
> truth | Bow your head. | hub_b4_b | bond:ren+3
> mercy | Hold the Elder. | hub_b4_b | bond:ren+3
> quiet | Look at the brazier. | hub_b4_b | bond:ren+3
> inquiry | Ask what the answer is. | hub_b4_b | bond:ren+3

`,
  scenarios: String.raw`
$ SU_CAMP_TAMAR | trust+4 respect+4 fear+3 | elder | The Elder is looked at, for a long while, by a blind woman who decides.
hostile: She laughed at me. She laughed for a full minute, with her whole frame. When she had done she said, “You are the one who writes the lists.” I said that I was. She said, “Good. Then you will know when to stop.”
wary: I have been judged by a good many bodies. The Assembly. The Tribunal of Bells. A Council of Nine. None of them frightened me as much as a blind woman on a pile of felts, asking me if I was hungry.
neutral: She took my hand and read it, as a person reads a page. She said, “You have signed too many things.” I said that I knew. She said, “That is why your hand is so soft.”
warm: Tamar said I could stay. Not for the night. For as long as I liked. I said I had a sister in a mountain. She said, “Then you will go. But you may stay first.” I think it is the kindest sentence in the language.
devoted: She asked what I wanted. Nobody has asked that, in this form, in twenty years. I could not say. I said, to be useful. She said, “That is what you do. I asked what you want.”
`,
  remarks: String.raw`
% camp_ren_later | since:b4q_camp>=4 | gu | Ren Qiao has not spoken for two days. He sits with his mother at the horse-lines. They do not speak either. It is the most peaceful silence I have ever heard.
% camp_odgerel_later | since:camp_mother_found>=6 | hao | Odgerel has given Ren a bridle. It is plaited horsehair, thirty years old. He keeps it on his belt. He will not say what it is for.
`,
};
