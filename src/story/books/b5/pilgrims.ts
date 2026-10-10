import type { Arc } from "../types";

/**
 * Book Five, arc seven: the Ten Thousand Tents. At the foot of the Heavenly Stair the Office of Ascents registers every petitioner
 * for the Ceremony: a number, an armband, a white robe. Four approaches: register under the true names, including the nameless one
 * (a1, truth), hold the barrier when the queue breaks into a crush (a2, force), pass the party off as a rich sect's delegation
 * (a3, deceit), and run a soup-line for the collapsing (a4, mercy). A hidden route shows the Elder's seal to the clerks.
 * Cast: Registrar-Magistrate Tsering, Brother Lung, Little Fen, Deputy Rao (glimpsed), Duan Wuyi, Hao Lan, Yue, the Elder.
 */
export const pilgrims: Arc = {
  id: "pilgrims",
  name: "The Ten Thousand Tents",
  scenes: String.raw`
=== pilgrims_entry | A Number
The registration pavilion is the size of a barn and the colour of bone. A hundred clerks sit in rows behind brass grilles, each with an abacus, a stamp, and a pot of ink. The queue runs out of the door and doubles back three times across the trampled grass. It moves a yard at a time. Everyone in it is in white; everyone holds a slip of paper; everyone looks at the person in front.
A board at the entrance lists the regulations in neat black characters. NO PETITIONER MAY ENTER THE FIRST TIER WITHOUT A NUMBER. NO NUMBER WILL BE ISSUED WITHOUT A NAME. NO NAME WILL BE ENTERED THAT IS NOT ALREADY IN THE LEDGER.
Duan Wuyi reads it twice. His mouth has gone dry.
“It’s a closed loop,” he says. “To be written, you must already be written. They’ve built a stair that only admits those who do not need it.”
“What about the nameless?”
“They don’t get in.”
“What about us?”
“That,” says Duan, “is the question.”
A clerk at the nearest grille is looking at your party over the top of his spectacles. He crooks a finger.
> truth | Step up and give your true names, all of them. | pilgrims_a1s1
> force | Notice the barrier at the head of the queue beginning to bow outward. | pilgrims_a2s1
> deceit | Notice the gilt-edged tent at the end of the row, where a delegation of the Jade Crane Sect has just failed to arrive. | pilgrims_a3s1
> mercy | Notice a woman fainting in the queue, and another beside her, and a child being passed overhead to the shade. | pilgrims_a4s1
> inquiry | Lay the Elder’s seal on the counter in front of the clerks, and say her name. | pilgrims_h1 |  | wreck_register | The clerks do not yet know what your seal has done.

// ---------------------------------------------------------------- a1: true names
=== pilgrims_a1s1 | The Grille
The clerk is perhaps seventy, with a face like a walnut and a hearing-trumpet on a cord round his neck. His desk-plate says TSERING, REGISTRAR-MAGISTRATE, FIRST DESK. He peers at you through two layers of spectacles and says, loudly, “Name!”
“Many names,” you say.
“What?”
“There are nine of us. We would like to give our names.”
“Speak up!” He lifts the trumpet to his ear. “Nobody gives names. You are *assigned* a number, upon proof of a name in the Ledger. Have you your Ledger-slip?”
“We have no slips.”
“Then you are not written!” He seems relieved, as if a heavy sum had come out. “Next!”
Duan Wuyi leans over your shoulder. His soft voice is clear and quiet. “Registrar-Magistrate. I am Duan Wuyi, Censor-General. I should like to inspect your register.”
“My register is not for inspection!”
“It is for the Censor.”
Tsering stares. His mouth works. Slowly, with shaking fingers, he sets down his stamp.
> truth | Wait. | pilgrims_a1s2
> mercy | Smile at the clerk. | pilgrims_a1s2
> quiet | Watch the queue. | pilgrims_a1s2
> inquiry | Ask who wrote the rule. | pilgrims_a1s2

=== pilgrims_a1s2 | The Rule
“Nobody wrote it,” says Tsering. He has taken the trumpet away from his ear and is rubbing the bridge of his nose. “It was here when I came. Forty-one years ago. Over the door.” He lowers his voice. “I have wondered, sometimes, who put it up.”
“It prevents the unwritten from entering the Stair.”
“It prevents *everyone* from entering the Stair,” says Tsering, and then claps a hand over his mouth. He glances left and right. “Forgive me. I am an old man.”
“Say it again.”
“I said nothing.” He is trembling. “I have been a clerk all my life. I do not make remarks.”
“Please.”
The old man looks at Duan. Then at the Elder, who stands quite still with the tread in her coat. Then at you. His eyes are red-rimmed and weary and very sharp.
“Everyone who comes here has a Ledger-slip,” he says. “Every one. They are issued at the sect, by the Registrar. So they are all written already.” He swallows. “And then they climb. And then they are written *again.* Do you see? It is a loop.”
> truth | Nod. | pilgrims_a1s3 | npc:SU_PILGRIMS_NUMBER
> mercy | Smile. | pilgrims_a1s3
> quiet | Wait. | pilgrims_a1s3
> inquiry | Ask what happens to the ones who don’t come down. | pilgrims_a1s3

=== pilgrims_a1s3 | Those Who Don’t Come Down
“They’re recorded,” says Tsering. “As ascended.” He picks up his stamp and puts it down. “It is the highest honour. A line in the great Ledger, in gold.” His voice is flat. “I have stamped nine hundred thousand slips in my time. I have never once been told what happens next.”
“Did you ask?”
“No.” He looks at his hands. “I thought it was rude.”
“And now?”
“Now I am seventy-two.” A thin wry smile. “And I have noticed that the Stair is only ever climbed.” He pauses. “Never descended. There is no stair for coming down. There is only a lift, from the summit. They say it is a very fine one.”
“Have you seen it?”
“Not once.” His voice is almost a whisper. “I should like to.”
“You may.”
“How?”
“By giving us numbers,” you say. “And letting us climb.”
He stares. His face is working. For a long moment you think he will call a guard.
Then he picks up his pen.
> truth | Give your names. | pilgrims_a1s4
> mercy | Thank him. | pilgrims_a1s4
> quiet | Watch the pen. | pilgrims_a1s4
> inquiry | Ask what he will write. | pilgrims_a1s4

=== pilgrims_a1s4 | Nine Entries
He writes them in the great book, in his clerk’s hand, one at a time. Su Wanru, Elder, of the Law Hall. Duan Wuyi, Censor-General. Hao Lan, clerk, of the Chancery. Gu Hanzhen, outer disciple, of Azure Cloud. Ren Qiao, warden, of the Ash Bridge. Yue Zhaoning, smuggler. Hanming, deserter. Odval, seer. Temur, guide.
He stops at the ninth.
“And you?” he says.
You think of a river village. A teacher who told you nothing. A name you will not say.
“Nameless,” you say.
“I cannot write that.”
“It is true.”
“It is not a *name.*” He shakes his head. “The book requires a heading. I need a word.”
Hao Lan clears her throat. “Ninth,” she says. “The Ninth. It is a title. It is on a card.”
Tsering looks at her with his head on one side. “The Ninth of what?”
“Of the nine,” says Hao Lan. “It is all anyone has ever called her.”
The pen scratches. He blots. He turns the book round.
It says, in neat black ink: *The Ninth.*
> truth | Look at it. | pilgrims_a1s5
> mercy | Smile. | pilgrims_a1s5
> quiet | Breathe. | pilgrims_a1s5
> inquiry | Ask if it will hold. | pilgrims_a1s5

=== pilgrims_a1s5 | It Holds
It holds. That is the astonishing thing. The ink dries. The line sits in the book, black and square, between a farmer from the south and a girl from the coast. The old man runs a thumb along it. He frowns. He looks at the next entry.
“It has taken,” he says, wonderingly. “I have never seen a title written. I thought the ink would reject it.” He blots again. “It hasn’t.”
“Why would it?”
“Because the Ledger is a list of persons.” He stamps the page. “A title is not a person. It is a... what is the word?”
“A role,” says the Elder.
“A role. Aye. And a role cannot be struck, because it has no line to strike.” He sits back, light-headed. “You’ve found a hole in the book. In forty-one years I’ve never seen one.” He gives a hoarse laugh. “It’s *beautiful.*”
Nobody speaks. In the pavilion, a hundred clerks have fallen quiet. Heads are turning.
“Here,” says Tsering. He tears off nine numbered armbands. “One to each. They’re good for the whole Ceremony.” His hand is shaking. “Don’t lose them.”
> truth | Take the armbands. | pilgrims_a1s6
> mercy | Thank him. | pilgrims_a1s6
> quiet | Check the numbers. | pilgrims_a1s6
> inquiry | Ask about the other clerks. | pilgrims_a1s6

=== pilgrims_a1s6 | The Other Clerks
They are all watching. A hundred men and women in white, at a hundred grilles, with their stamps in the air. Nobody moves. The queue has frozen. The loudest sound is a fly buzzing at a window.
“Registrar-Magistrate,” says a young woman at the next desk, in a very small voice. “Is it true? That a role can’t be struck?”
Tsering considers. “I believe so.”
“Could I be one?”
“A role?”
“I’m not a person. I’m a number.” She holds up her stamp. “Fourteen. I’ve been Fourteen for six years. I am a Registrar of the Fourteenth Desk.” She swallows. “If I’m not a person, I can’t be struck.”
“My dear girl—”
“Could you write it?”
The old man opens his mouth. He closes it. He turns to the page, and without a word writes, in a clear hand, *Fourteen.*
It takes. The ink gleams.
There is a silence. Then the grille next to hers goes up with a bang. A man stands.
“Me,” he says. “Please.”
They are coming to the desk by the dozen.
> truth | Stay. | pilgrims_a1s7
> mercy | Hold the Elder’s arm. | pilgrims_a1s7
> quiet | Step back. | pilgrims_a1s7
> inquiry | Ask Duan. | pilgrims_a1s7

=== pilgrims_a1s7 | Writing the Roles
It takes all afternoon. They queue to be written. Tsering writes them one by one. First Desk. Second Desk. Sweeper of the Annex. The Man Who Brings the Tea.
By dusk the great book is covered in titles. By midnight it is a roll of honour for people who have no names.
Duan Wuyi sits beside Tsering at the counter, with a second pen. He is writing too. He has a stack of blank forms and he is filling them in, in his small neat hand. His soft face is lit with the calm of a man who has found his craft.
“What are you doing?” you ask.
“Drafting an amendment,” says Duan. “To the Charter. It will state that *any person entered in the register under a role shall enjoy the protections of a person.*” He dips the pen. “It is the first piece of law I have written in thirty years that I believe.”
“Will it pass?”
“It does not need to.” He smiles. “It is already true.”
> truth | Smile. | pilgrims_a1s8
> mercy | Fetch tea. | pilgrims_a1s8
> quiet | Look at the book. | pilgrims_a1s8
> inquiry | Ask Tsering what he will do. | pilgrims_a1s8

=== pilgrims_a1s8 | Tsering’s Request
“I should like to climb,” says Tsering. He says it very quietly, at about two in the morning, by the light of a single oil lamp. The pavilion is empty. The clerks have gone home. The great book lies open on the counter between you, its pages glittering with fresh ink. “Not in the Ceremony. After. When it is over.”
“You could climb now.”
“I could not. I am not written.” His smile is thin. “I am the Registrar-Magistrate of the First Desk. It is a role. I am protected. But I have no slip, and no sect, and no line in the Ledger.”
“Do you want one?”
“No.” He seems surprised by his own answer. “I find that I do not. I find that I would rather be a role.” He turns a page. “It is the most freedom I have ever had.”
The lamp gutters. He trims the wick.
“I shall see you at the top,” he says. “If you get there.”
“And if I don’t?”
“Then I shall have been very much mistaken about a great many things,” says Tsering, “and I would like that to be on the record.”
> truth | Bow. | pilgrims_a1s9
> mercy | Shake his hand. | pilgrims_a1s9
> quiet | Take the lamp. | pilgrims_a1s9
> inquiry | Ask for a favour. | pilgrims_a1s9

=== pilgrims_a1s9 | The Armbands
You walk out into the dark with nine bands of white linen on your arms, each stamped with a number. The camp is quiet. The cooking-fires are red eyes in the dusk. Overhead the Stair rises into the cold, a pale pillar against the stars.
Your number is One.
It is not a joke. The old man has given you the first. It is stitched in black on the white, a single stroke, a line. You turn your arm to the lamp. It looks very much like a mark in a ledger.
“The Ninth,” says Hao Lan, beside you, her voice amused and fond. “Number One. Nobody will believe it.”
“They don’t have to.”
“No.” She holds up her own. “I’m Two. Duan is Three. The Elder is Four.” She grins. “I think we’ve been very naughty.”
“Is that a problem?”
“I’ve spent my whole life being good,” she says, “and look where it got me.” She tucks her arm in yours. “Come on. I want to see what the Stair looks like from underneath.”
> truth | Walk. | pilgrims_close | +pilgrims_named
> mercy | Look at the Stair. | pilgrims_close | +pilgrims_named
> quiet | Take her arm. | pilgrims_close | +pilgrims_named
> inquiry | Ask what she thinks it is. | pilgrims_close | +pilgrims_named

// ---------------------------------------------------------------- a2: the crush
=== pilgrims_a2s1 | The Barrier
It is a rail of timber, waist-high, laid across the road in front of the first tier, and behind it the Weighing Wardens stand in a line with their staffs. Before it the queue is packed ten deep. For two hours the crowd has been pressing forward. For two hours the barrier has been taking the strain. Now it begins to groan.
You hear the sound before you see it: a long low creak from the foot of the barrier, like a ship’s timbers in a swell. A post tilts. A woman at the front gives a short high cry. The crowd behind, which cannot see and cannot hear, surges.
“Back!” shouts a warden. “Back! Get back!”
Nobody can. The pressure is a living thing. You see a small figure at the front lifted off her feet, a girl of eleven in a white robe, her mouth open, her arms flung up. She disappears.
“Ren!” you shout.
He is already running. He has seen it too. Ren Qiao, who stood on a bridge for fifteen years and turned no one back, goes into the crowd like a plough.
> force | Follow. | pilgrims_a2s2
> truth | Shout for calm. | pilgrims_a2s2
> quiet | Look for the girl. | pilgrims_a2s2
> mercy | Pull people back. | pilgrims_a2s2

=== pilgrims_a2s2 | The Press
It is like wading into a river in flood. A thousand shoulders, a thousand elbows, a thousand faces with the same fixed look. They are not violent. They are only afraid. They have been told that the Stair will close at dusk, and that those who miss it must wait another year, and the sun is low. Each is pushing the one in front. Each is being pushed.
You get your shoulder under a stranger’s arm and shove. You use your weight. You call. “Step back! Step back! A child is down!”
Nobody hears. Nobody can.
Ren Qiao has reached the barrier. He plants his boots, turns his back to it, and spreads his arms. The great rail presses against his spine. He grunts. Veins stand out on his neck. His scarred face is crimson.
“Hold!” he roars. “Hold!”
The timber creaks. A second post goes. The rail bends like a bow.
Behind him, between his legs, a small white hand is waving.
“I’ve got her!” shouts Yue Zhaoning, from nowhere, flat on her face in the trampled grass. “I’ve got her foot!”
> force | Brace the rail. | pilgrims_a2s3
> truth | Pull Yue. | pilgrims_a2s3
> quiet | Cover the girl. | pilgrims_a2s3
> mercy | Call for the crowd to kneel. | pilgrims_a2s3

=== pilgrims_a2s3 | Kneel
You do it without thinking. You climb onto a dropped crate, and fill your lungs, and shout at the top of your voice: “KNEEL!”
It is the strangest word to say. It is the opposite of what any crowd wants. But you say it again, and again, and Odval, beside you, takes it up, in her high piercing seer’s voice. “Kneel! Kneel! Kneel!” Then Temur, then Hanming, then Gu. A ripple runs outward from the little group.
A man in front of you drops to one knee. The woman beside him follows. A child. An old man leaning on a staff. A line of monks in saffron, who go down all together with a rustle like wings.
The pressure breaks. It does not ease; it simply stops, as a wave stops when the beach tilts. For ten yards in every direction the crowd is kneeling, and the thousand shoulders that were pushing are suddenly lowering, and the crush is air.
Ren Qiao, braced against the barrier, staggers upright. His arms are shaking.
“Hah,” he says. “Kneel.”
He has never looked so astonished in his life.
> force | Get the girl. | pilgrims_a2s4
> truth | Keep calling. | pilgrims_a2s4
> quiet | Breathe. | pilgrims_a2s4
> mercy | Kneel yourself. | pilgrims_a2s4

=== pilgrims_a2s4 | Little Fen
She is lying in the trampled grass with a bruise coming up on her forehead and a bright thread of blood at her lip. Yue has her by the ankle. Gu is on his knees beside her, his shy face white, feeling for a pulse.
“She’s breathing,” he says. “She’s fine. She’s only winded.”
The girl’s eyes flutter. She is thin, brown, hawk-nosed, with a plait coming undone and a gap in her teeth. She looks at the sky for a moment, then at Gu, then at the ring of kneeling pilgrims, and bursts into tears.
“I dropped it,” she sobs. “I dropped the lamp.”
“What lamp?”
“My mother’s. For the Ceremony. We were going to light it at the top.” She hiccups. “It was a thousand years old. It’s gone.”
Ren Qiao crouches. He puts a big scarred hand on her head, very gently. “What does it look like?”
“It’s... it’s small and brass. It’s got a dragon.”
“I’ll find it.”
“It’s under all those feet.”
“Aye,” says Ren Qiao. “Then I’ll find it under all those feet.”
> force | Help look. | pilgrims_a2s5
> truth | Carry her. | pilgrims_a2s5
> quiet | Hold her hand. | pilgrims_a2s5
> mercy | Say her name. | pilgrims_a2s5

=== pilgrims_a2s5 | The Lamp
He finds it an hour later, flattened. It is a small brass dragon-lamp, the size of a teacup, beaten into a pancake by ten thousand sandals. He brings it to her in both hands, on the flat of his palm, as one carries a wounded bird. The girl looks at it. Her lip trembles.
“It’s broken.”
“It can be mended.”
“It can’t. It’s *flat.*”
“Brass is a soft metal.” Ren Qiao is quite serious. “I have a smith friend. A man named Ganbold. He once made a rug with wire.” He turns it over. “I will not promise. But I think it can be mended.”
She takes it. She holds it against her chest.
“I’ll light it for you,” she says.
“I don’t need it lit.”
“It’s for the ones who got hurt.” She wipes her nose. “I’ll light it at the top. For all of us. For the ones who didn’t get a lamp.”
Ren Qiao is silent for a long moment. His scarred face is unreadable.
“I should like that,” he says gruffly. “Very much.”
Behind him the camp, still kneeling, begins slowly to rise.
> force | Smile. | pilgrims_a2s6
> truth | Nod. | pilgrims_a2s6
> quiet | Look at Ren. | pilgrims_a2s6
> mercy | Hug Fen. | pilgrims_a2s6

=== pilgrims_a2s6 | Wardens
They come at the double, forty of them, in white-and-gold tabards, with long staves. Their captain is a bull-necked man with a face like a clenched fist. He shoulders through the kneeling crowd, shouting. “Who started this? Who incited the crowd?”
“I did,” says Ren Qiao.
“You?” The captain looks him up and down. He sees the sword. He sees the scar. His small eyes narrow. “You’re no pilgrim.”
“I’m a warden.”
“Of what?”
“Of a bridge.”
“I don’t see a bridge.”
“It’s a long way off,” says Ren Qiao, equably. “But the principle is the same.” He lifts his chin. “I stopped a stampede. I saved a child. If you would care to arrest me for it, you may. But I’d advise you to ask the crowd first.”
The captain turns. Thousands of white-robed pilgrims are looking at him. Nobody speaks. Nobody moves. They simply look.
It is a very quiet moment.
“Hm,” says the captain at last. He is red to the ears. “Move along.”
> force | Watch. | pilgrims_a2s7
> truth | Step beside Ren. | pilgrims_a2s7
> quiet | Hold your breath. | pilgrims_a2s7
> mercy | Smile. | pilgrims_a2s7

=== pilgrims_a2s7 | New Barrier
They rebuild it overnight. The wardens bring timber, rope and mallets, and a lot of grumbling. But the pilgrims help. They bring planks, and lend their shoulders, and make a chain to pass the beams. By dawn there is a barrier twice as strong. It stands a little farther back.
“It’s lower,” says Hao Lan, inspecting it.
“It’s kinder,” says Ren Qiao.
“How so?”
“A high barrier makes a crowd lean. A low one makes it think.” He pats the post. “I learned that on the bridge. People will press on a wall. They’ll step over a rope.”
The captain of the wardens, who has been watching sourly, clears his throat. “You’ve got an eye for it,” he says, grudgingly.
“I’ve a lot of practice.”
“Would you consider a post?” The captain is stiff. “Crowd-warden. For the Ceremony. We’re short.”
“I’m here with friends.”
“Aye. I see them.” The captain looks at your party. “Bring them. We’ll find a place.” He turns away. “I’d rather have a man who kneels than a man who shoves.”
> force | Accept. | pilgrims_a2s8
> truth | Thank him. | pilgrims_a2s8
> quiet | Look at Ren. | pilgrims_a2s8
> mercy | Smile. | pilgrims_a2s8

=== pilgrims_a2s8 | A Warden’s Tabard
They give him a white-and-gold tabard and a staff. He wears them with a look of profound unease. He has not worn a uniform since the Law Hall, fifteen years ago, and he keeps tugging at the collar. But he walks the barrier all day, slowly, with his hands behind him, and where he passes the pushing stops.
Little Fen follows him. She walks three paces behind, with her mended lamp in both hands, stepping where he steps. When he stops, she stops. When he looks left, she looks left. She has not been asked to. She seems to regard it as a vocation.
By evening there is a ripple of little girls at his heels. Seven of them. They walk in a line. They are learning to stand.
“Make them stop,” says Ren Qiao, in a strangled voice.
“How?”
“I don’t know. Say something.”
“They’re learning.”
“From *me?*” He looks appalled. “I don’t know anything. I stand on a plank.”
“That is what you teach.”
He looks at the line of children. They look back, grave, hopeful, with their hands behind their backs, exactly like his.
“Oh dear,” says Ren Qiao.
> force | Laugh. | pilgrims_a2s9
> truth | Pat his shoulder. | pilgrims_a2s9
> quiet | Look away. | pilgrims_a2s9
> mercy | Fetch tea. | pilgrims_a2s9

=== pilgrims_a2s9 | The Warden’s Number
He is Eleven. They give it to him with the tabard. It is stitched on the shoulder in gold thread. He looks at it for a while. Then he says, to nobody in particular: “I was seventeen when I held the lantern.”
You say nothing.
“I was told it was an honour. I believed it.” He turns the staff in his hands. “I stood at the top of the path with the light, and they went by me, one after another, fourteen of them, and every one of them smiled.” His voice is level. “I have thought for fifteen years that I should have said something.”
“What?”
“I don’t know. Anything.” He shrugs. “*Stop.* *Wait.* *Don’t.*” The corner of his mouth moves. “I think today I said it.”
“Kneel.”
“Aye.” He nearly smiles. “It’s a good word. It was in me all the time.”
Behind him the barrier holds. The sun goes down on the Stair. A child begins to sing.
> force | Smile. | pilgrims_close | +pilgrims_held
> truth | Take his arm. | pilgrims_close | +pilgrims_held
> quiet | Stand beside him. | pilgrims_close | +pilgrims_held
> mercy | Weep. | pilgrims_close | +pilgrims_held

// ---------------------------------------------------------------- a3: the Jade Crane
=== pilgrims_a3s1 | A Missing Delegation
The gilt tent is the biggest on the row. It has a pennant of green silk with a golden crane, and two stone lions at the door, and a team of servants in livery who stand about with trays of tea, looking anxious. A steward is pacing up and down in front of it. He has a clipboard. His face is the colour of tallow.
“They were meant to arrive by noon,” he says, to nobody in particular. “Forty-one in the delegation. The Elder Mistress, her six disciples, and the baggage.” He looks at the road. “They are now seven hours late. The Ceremony requires them to be registered by sundown.”
Yue Zhaoning, at your side, has a quizzical look on her face. She is chewing a stem of grass.
“Jade Crane,” she says. “Southern sect. Wealthy. Pompous. Their Elder Mistress is eighty and travels by sedan chair.” She spits the stem. “They’re stuck at the Ford. I heard in the caravanserai. The ferry sank.”
“They’re not coming.”
“Not for three days.” She grins. “They have a tent. Thirty-nine servants. A banquet. And no one to eat it.”
“You’re thinking of something.”
“I am always thinking of something,” says Yue.
> deceit | Ask what. | pilgrims_a3s2
> truth | Say it is dishonest. | pilgrims_a3s2
> quiet | Watch the steward. | pilgrims_a3s2
> mercy | Think of the servants. | pilgrims_a3s2

=== pilgrims_a3s2 | The Elder Mistress
It is the Elder who will have to do it. She does not like it. She stands in the tent in a borrowed robe of embroidered silk, with a headdress of jade beads, a fan, and a face like thunder. “I will not carry a fan,” she says. “I have never carried a fan.”
“It is a prop,” says Hao Lan.
“It is a *frivolity.*” The Elder holds it at arm’s length. “I am the Elder of the Law Hall of Azure Cloud. I will not impersonate a woman who is carried in a chair.”
“Then you will have to be carried.”
“I will walk.”
“The Elder Mistress of the Jade Crane has not walked in eleven years,” says Yue. “She has arthritis, an enormous ego and a pet pug.”
“I refuse to carry a pug.”
There is a short silence. Temur, in the corner, has gone a peculiar colour. A servant at the tent-flap makes a sound like a kettle.
“I have the pug,” says Gu, in a small helpful voice. He lifts a basket.
She looks at it. It looks at her.
“Oh, very well,” says Su Wanru.
> deceit | Fan her. | pilgrims_a3s3
> truth | Pat the dog. | pilgrims_a3s3
> quiet | Hold the chair. | pilgrims_a3s3
> mercy | Say she is perfect. | pilgrims_a3s3

=== pilgrims_a3s3 | Aspects of the Role
She is magnificent. That is the horror and the miracle of it. She is carried into the registration pavilion on a gilt chair by four servants, with her headdress rattling and her pug in her lap, looking neither right nor left, and every clerk in the building rises to his feet. Her fan makes a slow sweep. Her voice is a dry cold carrying drawl. “I am the Elder Mistress Ying,” she says. “Of the Jade Crane. I am delayed.”
“Your Honour.” Tsering’s deputy is bowing so low his nose touches the counter. “Naturally. Forgive the inconvenience. If you would...”
“I would not.” The fan snaps. “I will be registered at my tent. By a clerk of rank.”
“Of course, Your Honour.”
“And I wish to speak to the person responsible for the ferry.”
“The... ferry?”
“It sank.” The Elder’s eyes are chips of jade. “I was inconvenienced. I require an apology.”
Behind her chair, Hao Lan is biting her tongue so hard it bleeds. Duan Wuyi has gone to look at a pillar. The pug sneezes.
“Immediately,” gasps the deputy.
> deceit | Maintain the pose. | pilgrims_a3s4
> truth | Hold your breath. | pilgrims_a3s4
> quiet | Look at the pug. | pilgrims_a3s4
> mercy | Look at the servants. | pilgrims_a3s4

=== pilgrims_a3s4 | Thirty-Nine Servants
They know. Of course they know. The servants of the Jade Crane have waited on the Elder Mistress for twenty years and know her walk, her cough, the way she takes her tea. But they say nothing. They file into the tent behind the false delegation with their trays and their faces blank, and when the steward looks at them they look back with the smooth innocent gaze of those who have never noticed anything in their lives.
At dusk, the head cook comes to your tent.
She is a vast woman of sixty with a face like a cheerful apple and three chins. She stands in the doorway with her arms folded over her apron.
“I’d like a word,” she says. “With the lady who’s not our mistress.”
The Elder looks up from her tea. “Yes?”
“I’ve cooked for that old devil for twenty-two years,” says the cook. “She’s never once said thank you.” Her round face wobbles. “I wanted to say, I think you’re a vast improvement.”
“I... thank you.”
“You’re welcome.” She nods. “We’ve decided to help.”
> deceit | Ask how. | pilgrims_a3s5
> truth | Look at the Elder. | pilgrims_a3s5
> quiet | Pour tea. | pilgrims_a3s5
> mercy | Thank her. | pilgrims_a3s5

=== pilgrims_a3s5 | The Servants Help
They help in every way. They run errands. They carry messages. They guard the flap of the tent and turn away anyone who asks too many questions. They lay a banquet for ten and serve it with elaborate ceremony.
“It’s the best tent in the camp,” says Hao Lan, with satisfaction. She lies on a divan with a plate of candied plums. “Do you see? It has a bath.”
“We have not come to bathe.”
“We have come to be *in position.*” She chews. “From here, we can hear everything. The servants of the Jade Crane are on gossiping terms with the servants of every sect on the Stair. By dawn I shall know who is sleeping with whom.”
“That isn’t helpful.”
“It is the most valuable kind of information there is.” She smiles sweetly. “It tells you who can be bought.”
Duan Wuyi, in the next room, has a book over his face. “I am a Censor-General,” he says to the book. “I find I am at peace with this.”
> deceit | Listen. | pilgrims_a3s6
> truth | Eat a plum. | pilgrims_a3s6
> quiet | Look at the Stair. | pilgrims_a3s6
> mercy | Ask what she has heard. | pilgrims_a3s6

=== pilgrims_a3s6 | What the Servants Heard
It comes in at dawn, in a stream. The sect of the Silver Heron has paid forty thousand taels for a place on the sixth tier. The Plum Blossom Order has bribed the Weighing Wardens to move their grandmaster ahead in the queue. A monastery of the Nine Lotuses has been told that the ninth step is not a step but a door. A young monk, who is the secret son of a Concord official, will ascend as a replacement for a rival.
Hao Lan writes it all down. She has a page for each sect, in tiny script, pinned to the tent wall with a fork.
“The Ceremony’s a market,” she says at last. “They’re selling it. Every place is for sale. Every line in the Ledger has a price.”
“We knew that.”
“We knew in principle.” She taps the page. “Now we have it in numbers. Look. The Concord takes a tithe of a thousand taels on every ascension. In the last year, forty-one thousand were written.”
You do the sum. It takes a moment.
“Forty-one million,” you say.
“Aye.” Her eyes are bright. “And do you know who gets it?”
“Who?”
“The Inspector.”
> deceit | Look at the page. | pilgrims_a3s7
> truth | Read the list. | pilgrims_a3s7
> quiet | Listen. | pilgrims_a3s7
> mercy | Hold Hao Lan. | pilgrims_a3s7

=== pilgrims_a3s7 | Fang’s Share
It is all in the servants’ gossip. A pitched whisper in the camp: Fang has built a fortune on the Stair. He owns the cranes, the lifts, the pavilions. He takes a fifth of every tithe. He is, by the tally of a hundred maids and footmen, the richest man in the Concord. He has a palace on the Ninth Peak, a harem, a menagerie.
“It’s the oldest story in the world,” says Duan Wuyi, wearily. “The official who grows fat on a sacred office.” He takes off his glasses. “I had thought better of him.”
“You know him?”
“I sat with him on the Board, thirty years ago.” Duan rubs his eyes. “He was a clever young man. He wrote an essay on the equity of ascension. He argued that the gates of heaven should be open to all.” His mouth quirks. “It was rather good.”
“What happened?”
“He was made Inspector.” He puts the glasses back. “The essay was filed.”
Hao Lan looks at her notebook. A line has appeared between her brows.
“Duan,” she says slowly. “Did he think *open to all* meant free?”
“I believe so.”
“Then perhaps,” she says, “that is the thing he wants.”
> deceit | Wait. | pilgrims_a3s8
> truth | Ask what she means. | pilgrims_a3s8
> quiet | Think. | pilgrims_a3s8
> mercy | Look at Duan. | pilgrims_a3s8

=== pilgrims_a3s8 | The Pug Sneezes
It is the pug that gives you away. You do not see it coming. It is the third evening, and the Elder Mistress’s chair is parked at the head of the banquet, and the real Elder Mistress’s real steward has finally arrived from the Ford, an hour ahead of his mistress, in a lather, with an escort of twelve. He strides into the tent. He stops dead.
He looks at the thin grey woman on the divan. He looks at the fan. He looks at the pug.
“Madam,” he says, in a thin voice. “Who are you?”
The Elder rises. She is rather pale. “I am the Elder Mistress Ying.”
“You are not.” His eyes bulge. “The Elder Mistress is eighty. She is five feet tall. She has a squint. She is on a *barge.*”
“I have...” The Elder falters. “I have recovered.”
“And the pug is called Biscuit.”
Everyone looks at the dog.
It sits up. It wags its curly tail. It looks at the Elder with an expression of unmistakable devotion.
The steward goes quite purple.
“That,” he says, “is the Elder Mistress’s pug. And *it knows you.*”
> deceit | Step forward. | pilgrims_a3s9
> truth | Hold your breath. | pilgrims_a3s9
> quiet | Pick up the dog. | pilgrims_a3s9
> mercy | Say sorry. | pilgrims_a3s9

=== pilgrims_a3s9 | Biscuit
You never find out whether it is a miracle or a trick. The pug trots to the steward. It sits on his foot. It looks up at him with its goggling eyes, and it sneezes. A long, comprehensive, wet sneeze. Then it sighs, and rolls over, and shows its belly.
“Biscuit,” says the steward, faintly. “What have they done to you?”
“Washed him,” says Gu.
“*Washed?*”
“He was very dirty.” Gu is the picture of innocence. “We thought it would be a kindness.”
The steward kneels. He strokes the dog. His face crumples. “He hasn’t been washed in four years,” he whispers. “The Mistress said it would upset him.” He wipes his eyes. “He smells *lovely.*”
In the silence, the head cook clears her throat.
“Seems to me,” she says, in a loud comfortable voice, “that the Elder Mistress is a long way off. And we’ve a tent. And a banquet. And someone has to eat it.” She folds her arms. “I don’t see why the lady shouldn’t go on being the lady, until the real one turns up.”
The steward looks at the dog. At the cook. At you.
“I did not see anything,” he says.
> deceit | Smile. | pilgrims_close | +pilgrims_posed
> truth | Bow. | pilgrims_close | +pilgrims_posed
> quiet | Pat the dog. | pilgrims_close | +pilgrims_posed
> mercy | Thank the cook. | pilgrims_close | +pilgrims_posed

// ---------------------------------------------------------------- a4: the soup
=== pilgrims_a4s1 | Fainting
It is the altitude, and the heat, and the hunger. They have walked for months. They have eaten what they could carry. They have slept on the ground. A woman in front of you sways, and slides to the grass. Another beside her. A boy of ten sags against his mother.
The wardens do nothing. They stand with their staffs. They watch.
“It’s the rule,” says a pilgrim, quietly, over your shoulder. “Nobody leaves the queue. If you leave, you lose your place.” He is an old man, grey-faced, holding his wife upright. “They’ll be there in the morning. Somebody will pick them up.”
“Where do they go?”
“To the Infirmary.” He nods toward a low white tent at the edge of the camp. “It’s full.”
You look. A line of stretchers runs out from its door. Beyond the flap a murmur of voices: moaning, calling, praying. A thin man in a stained apron is going from stretcher to stretcher with a ladle and a bucket.
He looks up. He sees you. His face is grey with exhaustion, and he beckons.
> mercy | Go to him. | pilgrims_a4s2
> truth | Ask the old man to wait. | pilgrims_a4s2
> quiet | Watch. | pilgrims_a4s2
> inquiry | Ask what he needs. | pilgrims_a4s2

=== pilgrims_a4s2 | Brother Lung
“Soup,” says the man. “And hands.” He is perhaps forty, long-faced, stooped, in a monk’s grey robe with the sleeves rolled to the elbow. His forearms are scalded red. He speaks in a low weary monotone. “I am Brother Lung. Of the Infirmary of the Nine Lotuses. I came here three weeks ago with four novices. I have two left.”
“What happened?”
“They collapsed.” He lifts the ladle. “From overwork. Four hundred a day, and the Concord sends only barley. I make soup. I have one pot.” He looks at it. “It holds sixty bowls.”
You glance at the stretchers. There are hundreds.
“It is not enough,” he says, quietly. “It is never enough. But it is what I have.” His eyes are red-rimmed. “I wonder if you would stir.”
“Stir?”
“While I tend the worst.” He holds out the ladle. “It is the one task that needs no skill. And I have not slept in nine days.”
You take the ladle. Its wooden handle is warm and slick with grease.
It is, you think, the most sensible request anyone has made of you in a month.
> mercy | Stir. | pilgrims_a4s3
> truth | Ask for a second pot. | pilgrims_a4s3
> quiet | Look at the barley. | pilgrims_a4s3
> inquiry | Ask where the barley comes from. | pilgrims_a4s3

=== pilgrims_a4s3 | One Pot
You stir for six hours. It smells of nothing at all. But it is hot, and it is wet, and the people drink it with their eyes closed, one bowl after another.
Gu helps. He ladles. Odval carries bowls to the stretchers, silently, with her head bent. Yue Zhaoning has vanished, and returned with six hens under her arms and a sack of dried peas. She does not say where she got them. Hanming has built a second fire.
By nightfall you have two pots. By midnight, five.
At two in the morning, Brother Lung sits down on an upturned bucket and puts his face in his hands. His shoulders shake. He says nothing. After a moment he lifts his head.
“I have given up,” he says. “Four times. In three weeks.” His voice is hoarse. “I thought: it is a drop in a sea. I thought: why not stop.”
“And?”
“And each time someone brought me a bowl,” says Brother Lung. “Of something. A stranger. A child.” He wipes his eyes. “I am not sure it is faith. I think it is just manners.”
> mercy | Smile. | pilgrims_a4s4
> truth | Hand him a bowl. | pilgrims_a4s4
> quiet | Sit beside him. | pilgrims_a4s4
> inquiry | Ask about the novices. | pilgrims_a4s4

=== pilgrims_a4s4 | The Novices
They are a boy and a girl, both about fourteen, in grey, with shaven heads and gaunt, determined faces. The boy is called Sung. The girl is called Dolma. They have not left the pot in two days. They carry bowls. They change dressings. They sing the *Sutra of the Quiet Heart* under their breath, in a monotone, and when they have no more breath, they hum.
“It keeps them calm,” says Brother Lung. “The patients. A hum is better than a prayer.”
“Do they know what they’re doing?”
“They know enough.” He sits down beside Sung. “That is the thing about a fever-tent. You learn by the hour. You are taught by the dying.” He puts a hand on the boy’s shoulder. “I have not taught him a thing. He just watches.”
Dolma looks up. She has a plain, serious, freckled face and enormous dark eyes. She says in a clear low voice: “What happens to them? At the top?”
“We do not know,” says Brother Lung.
“Do you want to?”
“No,” says the monk. He closes his eyes. “I want to make soup.”
> mercy | Smile. | pilgrims_a4s5
> truth | Say it is a good thing. | pilgrims_a4s5
> quiet | Look at Dolma. | pilgrims_a4s5
> inquiry | Ask Dolma. | pilgrims_a4s5

=== pilgrims_a4s5 | Dolma’s Question
“I want to,” says Dolma. She sets down her bowl. “I want to go up. And look.”
“Why?”
“Because I do not believe it.” She says it flatly, with no heat. “They say the Stair leads to heaven. I think it leads to a room. And I think the room is not very nice.” Her freckled face is pale. “I have been counting the ones who go up. Three hundred and four a day. And I have counted the ones who come down.”
“How many?”
“None.” She meets your eyes. “Not one. In nineteen days.”
Brother Lung opens his eyes. He has gone quite still.
“You counted,” he says.
“Of course I counted.” She sounds almost offended. “It is the only sensible thing to do.” She turns the bowl in her hands. “I am fourteen. I cannot do anything. But I can count.”
“You can go up,” you say.
“Can I?”
“I think,” you say, “you can go with us.”
Brother Lung says, very quietly: “Dolma.”
“Yes, Brother?”
“Take the good bowl,” he says.
> mercy | Smile. | pilgrims_a4s6
> truth | Nod. | pilgrims_a4s6
> quiet | Hold your breath. | pilgrims_a4s6
> inquiry | Ask Brother Lung. | pilgrims_a4s6

=== pilgrims_a4s6 | A Second Soup-Line
You set it up the next dawn: a line of seven pots, in the shade of a rowan tree at the edge of the camp, with benches and bowls. A rough sign, in Hao Lan’s hand, says *Soup. No number required.* The pilgrims come slowly, shy, with their slips in their hands. Many do not know what to do. They have never been fed without a form.
“You ask for it,” says Gu, gently. “You hold out a bowl. And we put something in it.”
“What do you want?” asks a farmer.
“Nothing.”
“Nothing at all?”
“Only that you eat.”
The farmer stares. He looks at his bowl. A kind of wonder spreads over his weathered face. He eats the soup standing up, in four gulps. In half an hour he is back, with a sack of onions.
“I had these,” he says, gruffly. “For the Ceremony. I thought they might go in.”
By noon there is a queue. By afternoon there are twenty. They come with bread, and salt, and a pig’s trotter, and a pot of honey, and a stranger’s baby, who is thrust into your arms with the words “Mind her a minute.”
> mercy | Hold the baby. | pilgrims_a4s7
> truth | Take the onions. | pilgrims_a4s7
> quiet | Stir. | pilgrims_a4s7
> inquiry | Ask what the pilgrims say. | pilgrims_a4s7

=== pilgrims_a4s7 | What the Pilgrims Say
They talk. That is the thing. A man who has been silent for a month finds, over a bowl of soup, that he has a great deal to say. They talk about their sects, their sons, their sins. They talk about the Stair. They talk in low voices, in the shade, to people they have never met.
“I sold my sister’s name,” says a woman, flatly, to no one. “For a place in the queue.”
“I did not see my daughter before I left.”
“I came to ask if my husband was in there.”
“I came because I could not afford not to.”
Each says it. Each, having said it, is silent. Brother Lung moves among them with the ladle. He does not speak. He fills their bowls. And at the end he sets down the pot, and sits among them in the dust, in his stained grey robe, and says in his dry tired monotone:
“I do not know what is at the top.”
They look at him.
“But I will tell you what is at the bottom,” he says. “There is soup.”
A ripple goes through the crowd. It might be a laugh. It might be a sob.
> mercy | Smile. | pilgrims_a4s8
> truth | Raise a bowl. | pilgrims_a4s8
> quiet | Listen. | pilgrims_a4s8
> inquiry | Ask who will go up. | pilgrims_a4s8

=== pilgrims_a4s8 | Who Goes Up
Not all. Some go home. Some stay at the soup-line, and become cooks. A few, three or four hundred, decide to go on, but not as they intended. They give back their numbers. They put on aprons. They say that they will climb in the morning, with a ladle, and they will see for themselves.
Brother Lung does not discourage them. He does not encourage them. He merely says, to each, “Take a bowl.”
Dolma stands at the edge of the crowd with a satchel on her shoulder. She has packed it herself: a blanket, a flask, a tally-book, a stub of pencil. She has kissed Brother Lung on the cheek, which he bore with the stoicism of one who has seen a great deal.
“I shall write to you,” she says.
“I should like that.”
“I shall write what I see.”
“Don’t embellish.” His mouth twitches. “And count.”
“I shall.” She wipes her nose on her sleeve. “Every step.”
She shoulders the satchel. She takes her place beside Gu, who looks as though he would very much like to hug her and does not dare. Behind her, in the grey morning, the pots steam and the benches fill.
> mercy | Smile. | pilgrims_a4s9
> truth | Take Dolma’s hand. | pilgrims_a4s9
> quiet | Look back. | pilgrims_a4s9
> inquiry | Ask Brother Lung to come. | pilgrims_a4s9

=== pilgrims_a4s9 | The Bowl
He gives you the good one. It is a plain wooden bowl, grey with age, hollowed by use. It has a crack down one side, mended with gum. It is warm from the pot. “It has fed nine hundred,” he says. “It will do one more.” He fills it. He puts it in your hands.
You drink. It tastes of barley and salt and smoke. It tastes like nothing at all.
It is the best thing you have ever tasted.
Brother Lung watches you with his long tired face. “You have been on the road a long time,” he says.
“Yes.”
“You look it.”
“Thank you.”
“I was not being kind.” He almost smiles. “It is only that I have observed, in nine days, that the ones who climb always have a look. A kind of readiness.” He takes the empty bowl. “I think it is the look of a person who has been fed.”
He turns the bowl in his fingers.
“Go on,” he says. “I shall keep the pot hot.”
> mercy | Bow. | pilgrims_close | +pilgrims_soup
> truth | Thank him. | pilgrims_close | +pilgrims_soup
> quiet | Take Dolma’s hand. | pilgrims_close | +pilgrims_soup
> inquiry | Ask for the bowl. | pilgrims_close | +pilgrims_soup

// ---------------------------------------------------------------- hidden: the seal
=== pilgrims_h1 | A Seal on the Counter
The Elder lays it down herself. It is a small square of green stone, the size of a matchbox, carved with the character for *Law.* She sets it on the brass counter in front of Tsering’s deputy, quietly, with a click. It sits there, under the lamp, glittering.
“Su Wanru,” she says. “Elder of the Law Hall of Azure Cloud.”
The deputy’s eyes widen. He looks at the seal. He looks at the Elder. His mouth opens, and closes.
“I... Madam, I had heard... that is, we were told that you had...”
“Been struck?”
“*Retired,*” he whispers.
“I am neither.” Her voice is dry as parchment. “I am on leave.” She taps the seal. “That seal wrote eight hundred and eleven names into the book on the Fleet of the Ninth Year. If you consult the Fifth Office, you will find the ink has not yet dried.”
The pavilion has gone quiet. Along the row of grilles, heads are turning. Pens are put down.
“*The Fleet of the Ninth Year,*” someone whispers.
“*She wrote them back.*”
Tsering himself has risen from the first desk. His hearing-trumpet hangs forgotten on its cord. His face is working.
> inquiry | Wait. | pilgrims_h2
> truth | Stand with her. | pilgrims_h2
> mercy | Look at the clerks. | pilgrims_h2
> quiet | Step aside. | pilgrims_h2

=== pilgrims_h2 | The Clerks Rise
They stand. One after another, at their grilles, a hundred and four clerks of the Office of Ascents rise to their feet. They do it in silence. They are the people who have written the Stair for forty years: the registrars, the copyists, the stampers. They put down their pens. They stand there in their white robes, like a field of lilies, looking at the old woman at the counter.
“Madam,” says Tsering, in a shaking voice. “There are rumours. Everyone has heard. That someone had gone to the Fleet. That the book was being unwritten.” He swallows. “We did not think it could be you.”
“Why not?”
“Because you signed the orders,” says the old man simply. “For forty years. Every Registrar did.”
“Yes.”
“And now you...?”
“I have been taught,” says the Elder, “by a girl of nine.” She does not look at you. “I am too old to be proud of it. But I am glad.”
Nobody speaks. Then, from the back row, a young voice, trembling:
“Will you teach us?”
The Elder closes her eyes.
> inquiry | Hold your breath. | pilgrims_h3
> truth | Stand beside her. | pilgrims_h3
> mercy | Weep. | pilgrims_h3
> quiet | Look at Tsering. | pilgrims_h3

=== pilgrims_h3 | A Lesson in the Pavilion
She does it that evening. A hundred and four clerks sit cross-legged on the floor of the pavilion in rows, with their pens in their laps. The doors are shut. The lamps are lit. Nobody coughs.
“A name,” says the Elder, “is a thing given.” She writes it on the board. “Not a thing taken. You cannot strike it, because it was never yours to strike. You can only forget it, or remember.”
She writes another line.
“A ledger is a record of who was here. It is not a list of who may be.” Her chalk squeaks. “I should like you to put that over your door.”
A clerk puts up her hand. “Madam. Might we write names *in?*”
“You may write whatever you like. You are clerks.” A dry flicker. “It is the only power the Office has. The stamp.”
They write. They write all night. They write the poor, the lost, the ones who came in with no slip. They write them in every register in the camp. By dawn there are four thousand new entries in the book.
It is, as Tsering remarks, the greatest act of clerical insubordination in the history of the Concord.
> inquiry | Smile. | pilgrims_close | +pilgrims_seal
> truth | Applaud. | pilgrims_close | +pilgrims_seal
> mercy | Weep. | pilgrims_close | +pilgrims_seal
> quiet | Look at the dawn. | pilgrims_close | +pilgrims_seal

// ---------------------------------------------------------------- close
=== pilgrims_close | A Place in the Queue
They give you a tent on the second ring. It is white, patched, smelling of damp canvas and woodsmoke. Nine bedrolls. A brazier. On the pole in front, a slip of paper with a number: One through Nine, scribbled in a clerk’s hand.
+[how] pilgrims_named | You wrote nine names and a title in a register that had never held one.
+[how] pilgrims_held | You held a barrier with your back, and a crowd learned a word.
+[how] pilgrims_posed | The Elder Mistress of the Jade Crane arrived in a gilt chair, with a pug.
+[how] pilgrims_soup | You stirred a pot for six hours, and a girl of fourteen picked up a satchel.
+[how] pilgrims_seal | A hundred and four clerks stood up and asked to be taught.
The camp settles for the night. In the dark the Stair is a faint white line against the stars, and a few windows glow on the higher tiers like beads of amber.
The Elder sits at the tent door with her knees together and the green tread on her lap. She is studying it in the light of a small lamp.
“There is a name on the bottom,” she says. “In reverse. I can read it now.” Her voice is soft. “It is Han Lian. Aged fourteen. A seamstress’s son.”
“You knew him.”
“I knew his mother. She cleaned the Law Hall.” The Elder runs her thumb along the edge. “I used to nod to her in the corridor. I never asked her name.”
She is silent.
“I shall ask it,” she says, “at the top.”
> truth | Nod. | pilgrims_close2 | +b5q_pilgrims
> mercy | Take her hand. | pilgrims_close2 | +b5q_pilgrims
> quiet | Pour tea. | pilgrims_close2 | +b5q_pilgrims
> inquiry | Ask about Han Lian. | pilgrims_close2 | +b5q_pilgrims

=== pilgrims_close2 | Night in the Camp
You cannot sleep. You go out into the cold, between the rows of tents, with your blanket round your shoulders. The camp is a sea of soft canvas, faintly lit. From some tents there comes snoring, from others a low murmur of prayer. A baby cries. A man is crying. Someone is playing a flute, very quietly, a long unhurried tune that you almost recognise.
Ren Qiao is on the barrier. He nods as you pass. He does not speak. Beside him, on an upturned crate, with her mended lamp in her lap, Little Fen is fast asleep.
You walk on. You come to the edge of the camp, where the tents give out and the plain begins. There, under a single star, a figure is standing in the dark with her face turned up to the Stair.
It is Odval. She has her arms folded, tight, across her chest.
“It’s loud,” she says, without turning. “Up there.”
“What do you hear?”
“Everything.” She shivers. “But under it, a note. Very low. A single note, going on and on.” She presses a hand to her mouth. “It sounds like a door, being held shut.”
> truth | Listen. | hub_b5_b | bond:odval+3
> mercy | Put an arm round her. | hub_b5_b | bond:odval+3
> quiet | Stand beside her. | hub_b5_b | bond:odval+3
> inquiry | Ask what is behind the door. | hub_b5_b | bond:odval+3

`,
  scenarios: String.raw`
$ SU_PILGRIMS_NUMBER | trust+3 respect+4 fear+3 | elder | The Elder is assigned a number in a queue of ten thousand.
hostile: They gave me Four Thousand and Eleven. The clerk did not look up. I held the slip for a long time. I am accustomed to being a name on a form. I find that I dislike very much being a number on one.
wary: The woman in front of me was weeping silently and the woman behind me was eating a pie. Both were equally sincere. I decided it would be improper to judge either, and was surprised to find I had no inclination.
neutral: A child asked me what the number was for. I said it was so they would know which of us to call. She asked: and when they call it? I said that someone would climb. She said: and when they don’t? I did not know what to say.
warm: Hao Lan held my place in the queue while I sat on a crate. She did not ask. She stood in the sun with her notebook shut and her face turned to the Stair. I thought: there is a daughter I did not know I had.
devoted: I have been in a great many queues in my life, and all of them led to a desk. This is the first that led to a staircase. I find it a good deal less alarming.
`,
  remarks: String.raw`
% pilgrims_tsering_later | since:b5q_pilgrims>=3 | duan | Registrar-Magistrate Tsering has written to me. It is four pages. The first three are an apology, and the fourth is a request for a transfer to a clerkship where nobody is turned away. I have forwarded it to the Elder with a note that says merely: yes.
% pilgrims_fen_later | since:pilgrims_held>=3 | ren | Little Fen, the girl we pulled from the crush, has taken to following me. She walks three steps behind. She is eleven. She says she is learning to stand. I have told her it is mostly a matter of not falling over.
`,
}
