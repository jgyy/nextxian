import type { Arc } from "../types";

/**
 * Book Three, arc two (the hill road): the Seal-Mender's Bench. On the last ridge above the coast, Master Zhu Ancheng mends the
 * seals the Concord breaks, and his best apprentice left him three years ago for the sea. Four approaches: learn the craft (a1,
 * truth), break into the back room (a2, force), pass as auditors of the Seal Office (a3, deceit), and follow the carriers down the
 * pigment stair (a4, quiet). A hidden route mends a torn page, which only a person who has read Yu Ling's lines can do.
 * Cast: Master Zhu Ancheng, the apprentice Pip, Hao Lan, Tong, Ren Qiao, Gu.
 */
export const mender: Arc = {
  id: "mender",
  name: "The Seal-Mender's Bench",
  scenes: String.raw`
=== mender_entry | The Last Ridge
The willow reach ends in a staircase of cut stone, and the staircase ends at a terrace on the last ridge before the coast. A long low workshop sits on it with its shutters open, and from every shutter comes the dry sound of grinding. The air smells of cinnabar, hot wax and rice-paste. A line of porters is carrying baskets of red powder up from a sunken pigment-mill.
Over the door hangs a board with a single character burned into it: Mend.
Hao Lan stops on the top step. She has a way of going very still when she remembers something, as if she were afraid to frighten it.
“I was here once,” she says. “I was eleven. The Chancery sent me with a satchel of broken seals. A one-eyed man mended every one of them in front of me, and charged nothing, and told me that the only thing the Concord had ever made that was worth keeping was the knowledge of how to repair it.”
The door opens before she has finished.
> truth | Go in, and say your name to the master of the house. | mender_a1s1
> force | Look at the back of the workshop, where a door is padlocked. | mender_a2s1 | needs:3
> deceit | Put on Hao Lan’s grey sash, and ask to audit the stock. | mender_a3s1
> quiet | Follow the porters down to the pigment-mill. | mender_a4s1
> inquiry | Tell Master Zhu what is written on the torn page you read in the bone-lamp. | mender_h1 |  | nine_yuling | You have not read the torn page.

// ---------------------------------------------------------------- a1: the apprentice day
=== mender_a1s1 | One Eye
The man in the doorway is seventy or a hundred. His left eye is a milky pearl in a nest of scars, and his right is bright and quick, with the gleam of a bird that has found a crumb. He wears a leather apron burnt through in a dozen places and carries a bone spatula as another man might carry a pipe.
“Zhu Ancheng,” he says. “Mender. The Concord calls me a consultant. I call it a mortgage.” He looks at Hao Lan. “You grew. You were this high. You asked me why a seal had a back.”
“I remember,” says Hao Lan, smiling in spite of herself.
“And you,” says Zhu, turning the bright eye on you. “You are the one the whole coast is talking about. I thought you would be taller.”
> truth | Tell him you are not what they say. | mender_a1s2
> mercy | Ask whether he will let the Elder sit down. | mender_a1s2
> quiet | Bow, and say nothing. | mender_a1s2
> inquiry | Ask what the coast is saying. | mender_a1s2

=== mender_a1s2 | What Is a Seal
“A seal,” says Master Zhu, sitting you down on a low stool at a long table, “is a promise that has been carved so that it does not have to be remembered.” He puts a small cracked block of green jade in front of you. It is no bigger than a plum, with a snarling beast on the head and, on the face, a name. “That is a toll-collector’s seal from Kuan Landing. It is broken because its keeper did not keep faith. I mend the seal, but the promise I cannot mend. That is up to him.”
He shows you his spatula.
“I will teach you to do the first part. You will be bad at it. Everyone is. By supper you will be only a little less bad.”
> truth | Say you would like to learn. | mender_a1s3
> inquiry | Ask what the second part is. | mender_a1s3
> mercy | Ask whether Gu can learn as well. | mender_a1s3 | bond:gu+1
> quiet | Pick up the spatula. | mender_a1s3

=== mender_a1s3 | Grinding
The first lesson is grinding. You are given a mortar of red stone and a pestle with a worn head, and a lump of cinnabar the size of a child’s fist, and you are told to turn it into dust. It takes an hour. Your wrist burns. The cinnabar turns from rock to sand to a fine red flour that clings to the skin and refuses to be washed off.
“Slower,” says Zhu, passing. “You are not making dust. You are making a colour. Colour comes out of patience. Listen to the sound. The stone will tell you when it is ready.”
Beside you, Gu is grinding with the stiff diligence of a boy who has been told he is useless once and believes it. His face is smeared red to the eyebrows. Across the table, Ren Qiao, who has been drafted without explanation, is grinding as if the cinnabar had insulted his mother.
> truth | Listen to the pestle. | mender_a1s4
> mercy | Slow Gu down, and show him the rhythm. | mender_a1s4 | bond:gu+1
> quiet | Grind in silence. | mender_a1s4
> force | Grind harder. | mender_a1s4

=== mender_a1s4 | Wax and Paste
Master Zhu mixes the powder with a sticky yellow paste and a drop of oil from a flask. He talks as he works. He talks about his mother, who was a potter; about the first seal he ever made, which was lopsided and which he kept in a drawer for forty years out of shame; about the way a good seal wants to be pressed, as a good bell wants to be struck.
“A seal has to be pressed once,” he says. “If you press it twice you have made two seals, and they will argue. The Concord does not understand that. It presses everything twice. Once to make it law and once to make sure.”
He hands you the paste.
“Spread it on the break. Thin. Thinner than a lie.”
> truth | Spread it thin. | mender_a1s5
> inquiry | Ask what happens if you spread it thick. | mender_a1s5
> mercy | Ask what the lopsided seal said. | mender_a1s5
> quiet | Do as you are told. | mender_a1s5

=== mender_a1s5 | The Lopsided Seal
“It said,” says Zhu, “Zhu is a fool.” He smiles. “It is true. It is the truest seal I ever made. I took it out of the drawer when I was sixty, and I looked at it, and I laughed until I cried.” He wipes his good eye with the back of his wrist. “I have never made another that honest. I have made better. I have never made one that honest.”
Your break is hardly thin at all. It is lumpy and uneven, with a ridge of paste along one side. Zhu bends over it and looks at it for a long time.
“Hmm,” he says.
“Is it bad?” you ask.
“It is yours,” he says, which you understand is not the same thing.
He sets it on a rack to dry.
> truth | Ask him to be honest about whether it will hold. | mender_a1s6
> mercy | Thank him for his patience. | mender_a1s6
> quiet | Watch the rack. | mender_a1s6
> inquiry | Ask who taught him. | mender_a1s6

=== mender_a1s6 | The Bench With the Number
There is a bench in the corner of the shop, near the window, that nobody uses. It is a plain deal bench scarred with burns, with a stool pushed under it and a row of brass tools laid out in order. The tools are clean. Someone polishes them.
“That one is spoken for,” says Zhu, following your eyes.
You go to look. On the underside of the bench, in the shadow where the wood is darkest, someone has scratched a numeral with a knife. It is a plain V, very small, the sort of mark a child makes when she wants to feel she owns something.
“Shu Ning,” says Zhu, behind you. His voice has changed. “My best. She came when she was eleven. She left three years ago. I kept the bench.” He says it as if it were the simplest thing in the world.
Hao Lan has come to stand at your shoulder. She is looking at the V, and her mouth is slightly open.
> truth | Ask where Shu Ning went. | mender_a1s7 | +mender_saw_v npc:SU_MENDER_BENCH
> mercy | Ask whether she is well. | mender_a1s7 | +mender_saw_v
> inquiry | Ask who sent her to him. | mender_a1s7 | +mender_saw_v
> quiet | Touch the numeral. | mender_a1s7 | +mender_saw_v

=== mender_a1s7 | Shu Ning
“To the coast,” says Zhu. “To Tidewall. She said there was work there that I was too old to do and too honest to forgive.” He is rubbing the leather on his apron with a thumb. “She was sent to me by a woman in black who came up the stair one winter with a child and a purse of silver. She said the child had the finest hands she had ever seen on a child and that they must not be wasted. She did not give a name.”
Hao Lan’s voice is odd. “A woman in black.”
“Quiet. Polite. Ash-grey eyes, I thought, though it might have been the light. She came back once a year to see how the child was getting on.” He looks at you. “You have the same kind of hands.”
You look down at your hands. They are red to the wrist.
> truth | Ask what she looked like. | mender_a1s8
> quiet | Say nothing. | mender_a1s8
> mercy | Hold the numeral with two fingers. | mender_a1s8
> inquiry | Ask for the day Shu Ning left, to the hour. | mender_a1s8

=== mender_a1s8 | The Lesson Ends
When the afternoon is gone Master Zhu holds your broken seal up to the light. It is the toll-collector’s seal from Kuan Landing, green jade with a snarling beast, and the crack has been filled with a thick vermilion seam that looks like a scar. It is ugly. It will hold.
“Press it,” he says.
You press it into a block of soft wax. When you lift it away the impression is whole, and the wax is warm, and there is a name on it that you have never seen before.
“There,” says Zhu. “You mended a promise. It is not a small thing.” He gives the seal back. “Keep it. If you meet its keeper, ask him to keep his word.”
His voice drops. “And when you meet Shu Ning, tell her the bench is hers.”
> truth | Promise that you will. | mender_close | +mender_taught
> mercy | Thank him, and mean it. | mender_close | +mender_taught
> quiet | Bow, deeply. | mender_close | +mender_taught
> inquiry | Ask what the name on the wax is. | mender_close | +mender_taught

// ---------------------------------------------------------------- a2: the back room
=== mender_a2s1 | The Padlock
The workshop has two doors. The front is propped open to let out the heat. The back is shut with a padlock the size of a man’s fist, and a pair of strips of yellow paper pasted across the joint. Seals of the Seal Office. Ren Qiao reads them without moving his lips.
“Impounded,” he says. “By the Chancery. Last winter.”
“Impounded,” murmurs Hao Lan. “They never impound the back room of a mender. The back room is where the dangerous things are mended, and nobody else can mend them.”
“So the Concord is keeping something from itself,” says Ren.
“Or from the master.”
You look at the lock. It is a stout one, with a brass keyhole and a bar of black iron. You look at the window beside it, which is high, and barred, and not very well barred.
> force | Break the bar. | mender_a2s2 | needs:3
> truth | Go and ask Master Zhu for the key. | mender_a2s2
> deceit | Peel the strip carefully, and plan to paste it back. | mender_a2s2
> quiet | Listen at the wall. | mender_a2s2

=== mender_a2s2 | What the Wall Said
You put your ear to the boards. From the other side, very faintly, comes a sound you know at once: breathing. A slow regular breath, a small one, with a catch in it. Someone is in the room.
You tap, twice. The breathing stops. After a long moment, from the other side, two taps answer.
“A prisoner,” whispers Gu. “They have locked someone in.”
“Or someone has locked herself in,” says Hao Lan. Her voice is thin. “It is a mender’s custom. When you are working on something that must not be disturbed, you ask to be shut in, and you leave a key with a friend.”
You tap again, three times. The answer comes back at once: three, and a pause, and then one long knock.
It is an old signal. Hao Lan makes a small sound in her throat.
> quiet | Tap it back. | mender_a2s3
> force | Put your shoulder to the door. | mender_a2s3
> truth | Say your name aloud, through the wood. | mender_a2s3
> inquiry | Ask what the signal means. | mender_a2s3

=== mender_a2s3 | A Small Voice
“Who is there?” says a voice from the other side. It is high and young. It is the voice of an apprentice. “Is it Master Zhu? Is it the Chancery?”
“It is neither,” you say.
“Then you are not allowed,” says the voice, with a faint dignity. “I have been told not to open it. I have been told to wait until the master comes with the key.” There is a pause. “He has not come in four days. I have had one cup of water. I have not minded.”
Hao Lan has dropped to her knees at the keyhole. “What is your name?”
“Pip,” says the voice. “I am the tenth apprentice. I mend the small ones.”
Gu looks as if he might cry. Ren Qiao has already drawn his knife and is turning the point of it in the hasp.
> force | Pry the hasp. | mender_a2s4
> truth | Tell Pip you are coming in. | mender_a2s4
> mercy | Tell him to hold on. | mender_a2s4
> deceit | Tell him you are the Chancery. | mender_a2s4

=== mender_a2s4 | The Hasp
The hasp breaks with a crack that echoes across the workshop. Every head at the benches comes up. Zhu Ancheng stands at the far end of the room with a half-finished seal in his hand and a look on his face of weary vindication. He does not move.
You swing the door open.
It is a small room. There is a bed in it, and a table, and a heap of broken seals on a cloth, and a boy of about nine, thin and sunken-eyed, with ink on his nose and a plum-sized lump of green jade in each hand. He blinks at the light.
“I finished,” he says to the master, across the whole length of the shop. “All forty. I am sorry I am late.”
Master Zhu puts down his seal. He walks the length of the room, slowly, and kneels, and picks the boy up, and says nothing at all.
> force | Stand guard at the door. | mender_a2s5
> truth | Tell the master you are sorry about the lock. | mender_a2s5
> mercy | Fetch the boy a cup of water. | mender_a2s5 | bond:gu+1
> quiet | Wait. | mender_a2s5

=== mender_a2s5 | The Impound
“It was a Chancery clerk,” says Zhu. His voice is steady. He has put Pip in a chair and is peeling an orange for him with his good hand. “A fine, polite young man. He came with a paper. He said the back room was impounded pending an audit and that the apprentices were to be kept out. I said I had a boy in there. He said it was not his concern.”
He holds out a slice. Pip takes it.
“I went to the town, to the magistrate. He was busy. I went again. I went four times.” His bright eye is dry. “I have been mending the Concord’s broken things for fifty years. It is a sign of what the Concord is that it could take a week to find out who had my boy.”
He turns the eye on you. “Thank you for the door.”
> force | Offer to find the clerk. | mender_a2s6 | needs:3
> truth | Say that it was not right, and that you are sorry. | mender_a2s6
> mercy | Ask Pip how he is. | mender_a2s6
> inquiry | Ask what the clerk wanted from the back room. | mender_a2s6

=== mender_a2s6 | The Back Room
The back room is a long low hall with a ceiling of black beams. It runs the whole length of the workshop, and every inch of its walls is pegged with seals. They hang in rows on hooks: seals of jade, bone, horn, bronze, ivory. Some are beautiful. Some are hideous. Some are broken in half, or burnt, or split in three, and every one has a paper tag tied to it with a name.
“These are the ones I cannot mend,” says Zhu. “They come in from across the Concord, from every corner, when a seal has failed and the Chancery does not know why. It is not an honour. It is a bin.”
He walks along the wall with the old rolling step of a man who has walked it many times.
“The clerk was looking for one in particular.”
“Which?” says Hao Lan.
“He did not say. But he took the one with the black thread.”
> force | Ask to see the empty hook. | mender_a2s7
> truth | Ask what the black thread meant. | mender_a2s7
> inquiry | Ask who is on the tag. | mender_a2s7
> quiet | Look along the wall for anything else missing. | mender_a2s7

=== mender_a2s7 | The Empty Hook
The empty hook is at the far end, a plain peg of dark wood with a smear on it where a thing has hung for years. A tag still dangles from it. The tag is blank except for one word, in a clean clerk’s hand: Lotus.
“A black seal,” says Zhu. “Small, the size of a thumbnail. Jade, black as a crow. It was brought in fifteen years ago, a week after the Sealing, by a woman I did not know. She said it was a seed-case and that it was broken, and she asked me to mend it.”
He rubs the empty hook with his thumb.
“I could not. I do not know what it was. I only know it was warm.”
He looks at you with his bright eye. It does not blink.
“The clerk took it. I think he knew what it was.”
> force | Ask which way the clerk went. | mender_a2s8
> truth | Ask what the woman looked like. | mender_a2s8
> quiet | Say nothing. Touch your breastbone. | mender_a2s8
> inquiry | Ask whether the seal could be traced. | mender_a2s8

=== mender_a2s8 | Pip’s Gift
Pip, who has been listening with an orange segment halfway to his mouth, says suddenly: “I know where he went.”
Everyone turns.
“I heard him. Through the wall.” He swallows the segment. “He said, to the porter, ‘Tidewall. The Lamp at midnight.’ He said it as if he were reading a ticket.”
Master Zhu closes his eyes briefly, and opens them. “Then that is where your road leads,” he says. “I am sorry. It is not the road I would have chosen for you. But the Salt Lamp is where the last of the seven keeps her watch.”
“Seven?” says Hao Lan.
Zhu looks at her. For the first time in the conversation he seems unsure.
“Did I say seven?” he says.
> force | Say that you will go to the Lamp. | mender_close | +mender_pip_freed needs:3
> truth | Say that you want to know what he knows. | mender_close | +mender_pip_freed
> mercy | Tell Pip he was brave. | mender_close | +mender_pip_freed
> quiet | Thank them, and leave. | mender_close | +mender_pip_freed

// ---------------------------------------------------------------- a3: the auditors
=== mender_a3s1 | Grey Sash
Hao Lan hesitates. The sash in her hand is the grey of the Seal Office, the white eye on the breast. She puts it on you the way a woman might dress a friend for a funeral. “The Chancery audits the menders,” she says. “Once a year. A pair of clerks come up the stair with a ledger and a list, and they count everything, and the master has to produce it.”
She tugs the sash straight. “I wrote the standing orders. I know what the clerks say. I know what they are afraid of.”
“What are they afraid of?”
“Being asked a question they cannot answer.” She almost smiles. “You will not be asked. You will do the asking.”
Gu is looking at you, wide-eyed. “Can I be the second clerk?”
“You are far too honest,” says Hao Lan. “You shall carry the ledger and say nothing.”
> deceit | Straighten your sash, and ring the bell. | mender_a3s2
> truth | Say it feels wrong to lie to an old man. | mender_a3s2
> quiet | Study the sash’s stitching. | mender_a3s2
> mercy | Ask Hao Lan if she is certain. | mender_a3s2 | bond:hao+1

=== mender_a3s2 | The Audit
Master Zhu opens the door. He looks at the sash, at the ledger, at Gu’s face, which has gone the colour of cold porridge, and finally at Hao Lan. Something moves behind his good eye.
“Another audit,” he says pleasantly. “How delightful. We had one at the new year. We had another at midsummer. I did not know the Concord had so many ledgers to fill.”
“We are most grateful for your cooperation,” says Hao Lan, in a perfectly flat official voice. “It is a routine inspection. We shall be quick. We shall count the stock, we shall inspect the stores, and we shall be gone by supper.”
“Of course,” says Zhu. He stands aside. “Do come in. Mind the step. The last auditor broke his nose on it.”
> deceit | Walk in, chin up. | mender_a3s3
> truth | Mutter a thank-you. | mender_a3s3
> quiet | Keep your eyes on the floor. | mender_a3s3
> inquiry | Ask to see the stock-book first. | mender_a3s3

=== mender_a3s3 | The Stock-Book
Master Zhu keeps a stock-book in a drawer. It is a fat grey ledger with a cracked spine, and it lists every seal that has passed through his hands for fifty years: a date, a name, a condition, a cost. The handwriting is a crabbed, fine copperplate that gets worse with age.
Hao Lan turns the pages with the sleek practised flick of a woman who has spent her youth reading other people’s accounts. “Seal of the Ninth Granary,” she reads. “Cracked. Mended. Seal of the Lower Tribunal. Burnt. Replaced. Seal of the East Gate Wardens. Lost.” She stops.
“Lost?”
“It was never returned,” says Zhu. “It was taken by a clerk.”
Hao Lan raises her eyes. “Which clerk?”
“A very polite one,” says Zhu. “He had a grey sash. He had a letter. He said his name was Fang.”
> deceit | Say nothing, but note the name. | mender_a3s4 | +mender_fang_name
> truth | Ask what he took. | mender_a3s4 | +mender_fang_name
> inquiry | Ask when. | mender_a3s4 | +mender_fang_name
> quiet | Watch the master’s hands. | mender_a3s4 | +mender_fang_name

=== mender_a3s4 | Fang
“It was the winter before last,” says Zhu. He has settled himself on a stool and folded his hands. He knows quite well that Hao Lan is not an auditor. He does not mention it. “Inspector Fang. A quiet young man. He came with a Chancery order for the East Gate Seal, which was cracked. He said he would deliver it to the Seal Office himself.”
“Did he?”
“I have no idea,” says Zhu. “He never brought it back. But I have a friend in the Office, and she tells me that the seal was used, last spring, to open a gate that ought not to have been opened.”
Hao Lan has put down her pen. She is staring at the page.
“What gate?”
“The Gate of the Fifth Floor,” says Zhu. “The one the Concord closed fifteen years ago. The one that goes down to the Library.”
> deceit | Say the Chancery will investigate. | mender_a3s5
> truth | Tell him the truth: that you are not an auditor. | mender_a3s5
> inquiry | Ask who else knew of the gate. | mender_a3s5
> quiet | Make a note. | mender_a3s5

=== mender_a3s5 | Caught
Master Zhu has been waiting for it, with the patience of a man who has outwaited a good many officials. When the confession comes he does not smile. He rises, goes to the window, and pulls the shutters closed one by one. The workshop dims. The grinding at the benches slows and stops.
“I knew when you came up the stair,” he says. “The sash is too clean. A real auditor’s is greasy at the cuffs.” He turns. “But I thought I should give you the chance.”
“The chance for what?” says Hao Lan.
“To decide whether you would lie to me for an hour,” says Zhu. “Or for a day. Or for a lifetime.” He looks at her with something like sorrow. “You grew into a Censor. I had hoped you would not.”
Hao Lan’s face has gone white.
“I am not,” she says. “I am trying not to be.”
> deceit | Defend her. | mender_a3s6
> truth | Say she is the bravest Censor you have met. | mender_a3s6
> mercy | Take her hand. | mender_a3s6 | bond:hao+2
> quiet | Let her answer. | mender_a3s6

=== mender_a3s6 | What Zhu Gave Her
“Good,” says Zhu. He crosses the room to his own bench and rummages beneath it, among rags and flasks and bundles. He comes up with a small flat box of black lacquer. He sets it in front of Hao Lan.
“I have kept this since you were eleven. You left it behind on the bench. I thought you would come back for it. I did not think it would take you twelve years.”
Hao Lan opens the lid. Inside, lying on a bed of yellowed silk, is a tiny seal of white bone, no bigger than a grain of rice, with a character cut in the face too small to read.
“It was in your satchel,” says Zhu. “I did not ask where it came from. I did not look. But I have a feeling about it.”
Hao Lan takes it out. She holds it up to the light. Her lips move.
“It says nine,” she whispers.
> deceit | Keep quiet. | mender_a3s7
> truth | Ask her what nine means. | mender_a3s7
> mercy | Close her fingers round it. | mender_a3s7
> inquiry | Ask Zhu where else he has seen the mark. | mender_a3s7

=== mender_a3s7 | Not Nine
“Not nine,” says Zhu, taking the seal gently from her palm and turning it to the light. “It is a six. In the old script a six and a nine are written the same, but for the direction of the stroke. This one goes to the left.” He hands it back. “It is a six, child. I should have seen it at once. I am an old fool.”
Hao Lan has gone entirely still.
“Six,” she says.
“It is a number,” says Zhu. “Or a cot. Or a place in a line. I do not know. I only know that I have seen the same mark on a bench in my own shop.”
He does not look at the bench in the corner, but his eyes go there. The silence spreads.
Gu says, very quietly, “Hao Lan?”
“I do not know,” she says. “I do not know what it means.”
> deceit | Tell her it can wait. | mender_a3s8
> truth | Tell her it is yours to find out. | mender_a3s8
> mercy | Put an arm round her shoulders. | mender_a3s8 | bond:hao+2
> quiet | Look away, to give her privacy. | mender_a3s8

=== mender_a3s8 | A Bench in the Corner
She goes to look. She goes alone. She crosses the shop in the stillness left by the stopped grindstones, and kneels at the unused bench, and puts her head under the board. You cannot see what she does there. After a long minute she comes out again with her hair on end, and her face is as white as the wax.
“There is a V,” she says. “There is a mark here that says V. It is on the bench of Shu Ning. And there is a mark in my satchel that says VI.”
She stops.
“Zhu,” she says. “Did the woman in black ever bring a second child?”
Master Zhu looks into the middle distance, with his good eye, for a long time.
“She brought a girl of nine,” he says at last. “It was twelve years ago. She stayed a week. She mended a toy. I thought she was a visitor.”
> deceit | Say nothing. | mender_close | +mender_hao_asked
> truth | Say Hao Lan’s name. | mender_close | +mender_hao_asked
> mercy | Go to her. | mender_close | +mender_hao_asked
> quiet | Wait. | mender_close | +mender_hao_asked

// ---------------------------------------------------------------- a4: the pigment stair
=== mender_a4s1 | The Porters
The porters go down by a stair cut into the rock. They are thin and sunburnt, with red hands, and each carries a woven basket on a strap across the forehead. They go in silence. At every turning of the stair there is a niche with a clay lamp; at every second turning, a bench.
You follow at a distance. Nobody asks. Gu tries to look like a man who is on his way to buy pigment. He looks like a boy trying not to be noticed, which is not the same thing.
At the foot of the stair the air changes. It becomes thick with a fine red dust that settles in your hair and your lashes, and the sun, coming through the haze, goes the colour of a ripe plum.
A great wheel is turning in a pit. Mules are driven round it, blindfolded.
> quiet | Walk down into the haze. | mender_a4s2
> truth | Ask the nearest porter what the mill makes. | mender_a4s2
> mercy | Offer to carry a basket. | mender_a4s2 | bond:gu+1
> inquiry | Look at the mules. | mender_a4s2

=== mender_a4s2 | The Mill
The pigment-mill is a cathedral of red. It has a roof of black timber and walls of stone, and it is full from floor to rafters with the thick shifting air of its own work. In the middle a vast millstone turns slowly, driven by a team of mules who walk blindfolded round and round, and on the stone a mound of cinnabar is ground by the day into the colour that seals the Concord’s promises.
Women with kerchiefs tied over their mouths shovel and sieve. Their arms are red to the elbow. They glance up as you pass and look quickly away.
“Do not breathe it,” a porter murmurs, as he slips by. “It takes a little with every breath. In ten years you cannot smell. In twenty, you do not remember.”
You stop.
“Remember what?” you say.
> quiet | Ask him to repeat that. | mender_a4s3
> truth | Ask how long he has worked here. | mender_a4s3
> inquiry | Ask if the cinnabar does that to everyone. | mender_a4s3
> mercy | Give him a handkerchief to tie over his face. | mender_a4s3

=== mender_a4s3 | The Quiet Women
“Eleven years,” he says. He ties the handkerchief on without looking at you. His voice has the flatness of a man who has said a thing so often that it has lost its edges. “I came for the wage. It is a good wage. I was eighteen. I do not remember my mother’s name, now. I have a note in my pocket. I read it each morning.”
He pulls it out. It is a scrap of grey paper, very worn, with a single word scrawled in a childish hand.
Ming.
“That is her,” he says. “I think.”
The women, ranked at the sieves, are watching him. One of them, an older one with a face like a walnut, shakes her head very slightly. You are not to ask any more. It is a rule, here. They do not speak of what the mill takes.
Gu has stopped breathing.
> quiet | Respect the rule. | mender_a4s4
> truth | Ask the older woman what the mill takes. | mender_a4s4
> mercy | Tell the porter his mother’s name is Ming, and you will remember it for him. | mender_a4s4
> inquiry | Look at the sieve. | mender_a4s4

=== mender_a4s4 | The Sieve
You look at the sieve. It is a wide round tray of woven bamboo with a mesh finer than silk, and in the bottom of it, under the red dust, there is something that is not cinnabar. It is a fine grey powder, almost white, and when you rub it between your finger and thumb it clings.
You know it. You have seen it before, at Green Mill, in a barrel behind a physician’s door.
“It is in the pigment,” you say.
The old woman with the walnut face flinches. She looks at you, then at the foreman’s hut, and back again. “It is not in the pigment,” she says, very low. “The pigment is in it.”
She lifts the sieve. The grey powder trickles through her fingers, and for a moment the air above it shimmers, as heat shimmers over stone.
“Calm dust,” she says. “They make it here. The mill is the first stage.”
> quiet | Say nothing. Memorise the foreman’s hut. | mender_a4s5 | +mender_found_dust
> truth | Say that you will end it. | mender_a4s5 | +mender_found_dust
> mercy | Ask if there is anyone who is not under its spell. | mender_a4s5 | +mender_found_dust
> inquiry | Ask where it goes. | mender_a4s5 | +mender_found_dust

=== mender_a4s5 | The Foreman
The foreman’s hut sits on a ledge of rock above the mill, with a window on each side so that its occupant can watch the whole floor. A man is sitting there with a bowl of tea and a ledger and a pair of iron spectacles. He does not look up. He does not need to. Everything in the mill is arranged for his convenience.
You climb the steps, with Ren Qiao half a pace behind, and knock.
“Enter,” says the foreman, to the ledger.
Inside, the hut is clean and bare and smells of tea. The foreman is a thin sallow man of fifty, with ink on his sleeve and a yellow-grey look, like old paper. He glances at you over his glasses, and the glance goes on a beat too long.
“You are not from the Concord,” he says. “The Concord never sends anyone to the mill.”
> quiet | Say you are a traveller. | mender_a4s6
> truth | Say you want to know where the dust goes. | mender_a4s6
> force | Put a hand on the ledger. | mender_a4s6
> inquiry | Ask him what his name is. | mender_a4s6

=== mender_a4s6 | A Name Under Dust
“Ba,” says the foreman, with the faintly offended look of a man who has been asked for his purse. “Foreman Ba. I have held the post for nineteen years.” He sips his tea. His hands are steady. “I do not mind your asking. Nobody asks. It is a pleasant change.”
He leans back. “The dust goes down the hill. It goes in barrels to the coast, to a place called the Salt Works. There it is refined, and shipped up the river in cargo that says salt. I have never seen the refining. I do not wish to.”
His gaze drifts to the window and the red haze beyond.
“I used to have a daughter,” he says. “I do not recall her name. She was something to do with a lantern. I wrote it down once. The note blew away.”
> quiet | Keep still. | mender_a4s7
> truth | Tell him the word he is looking for. | mender_a4s7
> mercy | Ask him to describe the lantern. | mender_a4s7
> inquiry | Ask who ordered the dust. | mender_a4s7

=== mender_a4s7 | The Order
“Madam Lian,” says Ba. “Of the Law Hall. She came in the autumn of the year before last. A very elegant woman. She stood in that door where you are standing, in a grey silk cloak, and she said that the mill was to produce twice as much as before. She said it was an order of the Concord. She paid.”
He turns a page.
“Then she said, ‘You will forget this conversation.’ And I did. I forgot it entirely, until you asked.” A faint puzzled frown crosses his face. “That is a curious thing, is it not? I can see her as clearly as I see you. But I do not remember the words.”
The ledger lies open between you. Under his thumb is a column of figures and, next to each, the same character, written in red: Seal.
“Every barrel,” says Ba, “is stamped.”
> quiet | Look at the stamp. | mender_a4s8
> truth | Ask to see one. | mender_a4s8
> mercy | Take his hand. | mender_a4s8
> inquiry | Ask how many barrels have gone. | mender_a4s8

=== mender_a4s8 | The Stamp
A barrel is brought up from the cellar. It is a plain oak barrel with iron hoops, the size of a small child, and on the lid, burnt into the wood, is a seal: a circle enclosing a closed eye. Under it, in neat characters, is a single word.
It says: Tidewall.
“All of them go to Tidewall,” says Ba. “It is the nearest port. The shippers there take them to the river. There is a woman at the harbour who signs for them. I do not recall her face.”
You turn the barrel over. On the bottom, scratched with a nail, someone has written a tiny message in a hand like a spider’s. It says: I remember. It is dated three months ago, and signed with a single initial.
It is the letter V.
> quiet | Keep the barrel’s secret. | mender_close
> truth | Take the lid, to show the Elder. | mender_close
> mercy | Thank Foreman Ba. | mender_close
> inquiry | Ask him whether he knows who V is. | mender_close

// ---------------------------------------------------------------- hidden: mending the page
=== mender_h1 | The Torn Page
You tell Master Zhu what you read in the bone-lamp: that the page was torn from the Ledger by the saint who wrote on it, that she tore it with her own hand, that her name was Yu Ling. The workshop has gone entirely quiet. The grinding has stopped. Even the mules in the pit seem to hold their breath.
“A torn page,” says Master Zhu. He has taken off his apron. “Fifty years I have waited for someone to say that to me. I have mended every kind of seal. I have never mended a page.”
He goes to the back of the workshop, and unlocks a cabinet you had not noticed. From it he takes a small, flat, rolled bundle wrapped in oilcloth. He lays it on the long table and unties the string.
“I am told it cannot be done,” he says. “I think I would like to see.”
> inquiry | Ask what is in the bundle. | mender_h2
> truth | Say you will try. | mender_h2
> mercy | Ask whether he is certain he wants to. | mender_h2
> quiet | Unroll it. | mender_h2

=== mender_h2 | A Scrap of the Ledger
Inside the oilcloth is a scrap of pale paper the size of a hand, torn along one edge in a long ragged curve. It is the only fragment in the Concord of a leaf from the first Ledger. Zhu has kept it for forty years. On it, in faded gold, a line of a single script is half-visible, cut off at the tear.
“They sent it to me for mending,” says Zhu. “A hundred years ago, perhaps. The Concord always sends the things it fears. I could not do it. I put it in a cabinet and I have been looking at it ever since.”
You bend closer. The gold is moving, very slightly, like a thing under a skin of water. The letters swim and settle. They are almost legible.
You read the first line. You find, with a shiver, that you have already read it. In a bone-lamp. In a tower. You know exactly where it goes.
> inquiry | Read the line aloud. | mender_h3
> truth | Tell Zhu what comes next. | mender_h3
> mercy | Say the saint’s name softly. | mender_h3
> quiet | Trace the tear with a finger. | mender_h3

=== mender_h3 | Mending
You do not mend it. You find, when you have said the line, that the scrap has begun to mend itself. The ragged edge softens. The gold deepens. The tear closes, not by joining, but by growing: new fibres reach out from the old and weave themselves into the gap, and the empty edge of the paper becomes a smooth margin, and the writing on it settles, line by line, into the end of a sentence.
Zhu’s mouth has fallen open. “I have never,” he says.
The sentence is not finished. It reads: Let the name that is torn be the name that is kept, for the keeping is the …
The line stops. The rest of the leaf is white.
“It wants the rest,” says Zhu, hoarsely. “It wants the page that went into the abyss. It will not be whole until it is.”
He looks at you for a very long time.
“I think you are going to have to go down,” he says.
> inquiry | Ask what the sentence means. | mender_close | +mender_page_mended
> truth | Say you will. | mender_close | +mender_page_mended
> mercy | Ask him to keep it safe. | mender_close | +mender_page_mended
> quiet | Take the scrap. | mender_close | +mender_page_mended

// ---------------------------------------------------------------- close
=== mender_close | Down the Salt Stair
The coast lies below the last ridge like a bowl of pale ash. A road, white with salt, runs down a long slope of scrub and tamarisk toward a harbour behind a wall. Master Zhu walks with you to the head of the stair, leaning on his bone spatula, his good eye on the horizon.
+[how] mender_taught | Your mended seal is in your sleeve, vermilion-seamed, ugly, and sound.
+[how] mender_pip_freed | Pip rides on Zhu’s shoulder to the head of the stair, with a piece of orange in each hand.
+[how] mender_hao_asked | Hao Lan has not spoken for an hour. She walks with her satchel pressed against her ribs, and her hand over the clasp.
+[how] mender_found_dust | A barrel stamped for Tidewall is a shadow you carry, and a woman at the harbour who signs for them.
+[how] mender_page_mended | The mended scrap lies against your breastbone, warm, and it wants the rest.
+[extra] mender_saw_v | A numeral on the underside of an apprentice’s bench still burns in your mind.
+[extra] mender_fang_name | A polite young man in a grey sash took a seal and opened a gate. You know his name.
“I have no right to tell you what to do,” says Master Zhu. “But I will tell you what I tell my apprentices. Never mend a thing for the person who broke it. They will only break it again.”
He gives you a small lacquered box. In it is a tide-key, a flat disc of bone on a cord, with a character on it.
“Show that to the keeper of the Lamp.”
> truth | Thank him. | mender_close2 | +mender_has_key
> quiet | Bow, and take the key. | mender_close2 | +mender_has_key
> mercy | Ask him to look after himself. | mender_close2 | +mender_has_key
> inquiry | Ask what character is on the key. | mender_close2 | +mender_has_key

=== mender_close2 | Tidewall from Above
The road is steep, and it takes the rest of the day. The salt crust crackles underfoot. Gulls wheel overhead. As the ridge falls behind you the town opens out below, white and tiered, climbing the hill in rooftops to a black spur with a dark tower. The Wall stands out into the bay, pale as a bone, carved from end to end.
Hao Lan stops. She stands in the road and looks at it, with her satchel in both hands.
“I used to think of this place as a name on a map,” she says. “It is in the Chancery files as a port of the second order. I have signed a hundred papers about it. I never thought it could be real.”
The Elder, at your side, says softly, “It is always real. That is the trouble with places.”
They are both staring at the lighthouse. It is dark, but you could swear it blinks.
> truth | Walk down toward it. | tide_arrive | +b3_arrived
> quiet | Wait for the others to catch up. | tide_arrive | +b3_arrived
> mercy | Offer Hao Lan your arm. | tide_arrive | +b3_arrived
> inquiry | Ask the Elder who she thinks keeps the Lamp. | tide_arrive | +b3_arrived
`,
  scenarios: String.raw`
$ SU_MENDER_BENCH | trust+3 respect+3 | elder | The Elder watches the player learn to mend a seal and sees the apprentice’s bench with its numeral.
hostile: You mended something. You did not break it. I find I cannot hold that against you, though I have tried.
wary: I watched you grind and spread and press. You were bad at it, and you did not hide the fact. That is a rarer thing than skill.
neutral: A promise carved so that it need not be remembered. I had thought a seal was a weapon. I find it is closer to a kindness that has been taught to endure.
warm: I used to think the Law Hall was the only place where anything was made to last. I was wrong. A one-eyed man with a spatula makes more durable things than I have ever signed.
devoted: I should like to stay here, I think, for a month. I should like to learn to grind something. I should like to do one honest piece of work with my hands before I die.
`,
  remarks: String.raw`
% mender_zhu_later | since:mender_taught>=12 | hao | I keep thinking about the sixth bench. Master Zhu said a woman in black brought a girl of nine and she stayed a week. I have been trying to remember a week when I was nine, and I cannot.
% mender_pip_later | since:mender_pip_freed>=10 | gu | I wonder if Pip is all right. I wonder if he has eaten. I know that is not a thing a person should think about in the middle of a war.
`,
};
