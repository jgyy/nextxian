import type { Arc } from "../types";

/**
 * Book Three, arc three: the Wall of Names. A mile of carved limestone that keeps a child under it. Four approaches: read the
 * Wall with Mei (a1, truth), dig at the block where the seal lies (a2, force), join the carvers' guild as pilgrims (a3, deceit),
 * and sit with the harbour widows at the hat-off (a4, mercy). A hidden route lets Ke-er speak once to the sister who held the lamp.
 * Cast: Mei Qiu, Carver Sun, her apprentice Little Adze, Auntie Pan, Warden Lu, the voice of Ke-er.
 */
export const harbour: Arc = {
  id: "harbour",
  name: "The Wall of Names",
  scenes: String.raw`
=== harbour_entry | The Hat-Off
Dawn comes up the colour of weak tea. The tide is a long way out, and the harbour floor shines. Along the base of the Wall, in the blue shadow, the fishing families are walking to their boats with their hats in their hands. They do it without looking up. A small boy is doing it too, solemnly, copying his father, with a hat that is much too big for him.
The Wall is forty feet of pale limestone, and on every block, in rows as neat as a ledger, are names. They are cut small and deep. In the low light they look like rain on a window.
Mei Qiu has not come down to the quay. She is standing on the sea steps at the north end with her back to the town, her iron bar in her hand, looking at the last block on the lowest course. It is the only one with fresh moss on it.
“That is hers,” she says, without turning. “I have not read it since I was nine.”
> truth | Walk the whole Wall with her, from the south end, and read every name. | harbour_a1s1
> force | Ask what lies behind that block, and whether it could be opened. | harbour_a2s1
> deceit | Tell the old woman chiselling at the south end that you have come as pilgrims. | harbour_a3s1
> mercy | Take your hat off, and fall in beside the families on their way to the boats. | harbour_a4s1
> inquiry | Say Ke-er’s name softly at the Wall, as you said Mei’s in the dark. | harbour_h1 |  | coast_ke_er_heard | You have not heard the voice in the Cut.
> inquiry | Lay the mended scrap against Ke-er’s block, and see whether it answers. | harbour_h1 |  | mender_page_mended | You carry no mended page.

// ---------------------------------------------------------------- a1: reading the Wall
=== harbour_a1s1 | The South End
The south end of the Wall is the oldest. The stone here is dark with age, and the names are shallow and worn, so that you must run a finger along them to read. They are not in one hand. Hundreds of carvers have cut them, each in a slightly different script, and over them a century of rain has done its slow work.
“These are the first,” says Mei Qiu, who has come down to walk beside you. She does not look at the stone. She looks at the ground. “They were the harbour dead, when the Wall was only a breakwater. Drowned men. Sailors. Then the Concord began to add names, and nobody asked why.”
She stops in front of a block near the corner.
“Read that one.”
It is a woman’s name. It is followed by a date, and a word, and the word is struck.
> truth | Read it aloud. | harbour_a1s2
> quiet | Run a finger along the cut. | harbour_a1s2
> mercy | Ask Mei whether she knew the woman. | harbour_a1s2
> inquiry | Ask what the word means on a harbour wall. | harbour_a1s2

=== harbour_a1s2 | Struck on Stone
“It means the Ledger struck her,” says Mei Qiu. “It means somebody in an office decided she should not have existed, and had it written down, and the Wall took the order and cut it in stone. That is what a wall is for.” She lifts her chin. “The Wall has been told to remember what the Ledger has been told to forget. It is a contradiction. The Concord has never understood it.”
She walks on. The next block has two names, one above the other, and a space between where a third has been chiselled out.
“See that? Someone tried to scrub her. The carvers refused. They cut the hole deeper, and left it. A hole is a kind of name.”
A woman’s hand, working a chisel, taps a patient rhythm in the distance. Tap. Tap. Tap.
> truth | Touch the hollow. | harbour_a1s3
> inquiry | Ask who chisels at the south end every day. | harbour_a1s3
> mercy | Say a short prayer. | harbour_a1s3
> quiet | Keep walking. | harbour_a1s3

=== harbour_a1s3 | The Carver
The chiselling comes from a scaffold of lashed spars, where an old woman in a leather bib is standing on a plank with her nose an inch from the stone. She has a chisel in one fist and a mallet in the other, and a pair of bone spectacles pushed up into her white hair. Below her, on the beach, a boy of about twelve is mixing a bucket of something grey.
“Sun,” says Mei Qiu, in the tone of someone naming a landmark. “Carver Sun. She has been cutting this Wall since before I was born.”
“Since before your mother was,” says the old woman, not turning. “Do not stand there. You are in my light.”
You step aside. She cuts one more letter, tilts her head, blows the dust away.
“Is it the girl?” she says. “The seal-girl? The one with the iron?”
Mei Qiu says nothing. Her mouth is a thin line.
> truth | Say it is. | harbour_a1s4
> mercy | Say that Mei is a friend. | harbour_a1s4
> inquiry | Ask how Sun knows her. | harbour_a1s4
> quiet | Let Mei answer. | harbour_a1s4

=== harbour_a1s4 | A Bowl of Rice
“I cut her sister’s name,” says Carver Sun. She lowers the mallet and climbs down the scaffold, rung by rung, with the stiff care of a body that has been climbing it for fifty years. “I cut it in a night. I had a lamp. The Censors stood about with their hats on, and I cut it as well as I could. The letters were crooked. I cried. They would not let me stop to wipe my face.”
At the bottom she turns. Her eyes are a bright, hard brown.
“I sent a bowl of rice to the Inspector, afterwards. Via a captain. I did not know if she would eat it.”
“I did not,” says Mei Qiu.
“I thought not.” Carver Sun nods. “But I sent it again the next year. And the next. I am an old woman, and a bowl of rice is the only way I know to say I am sorry.”
> truth | Tell Mei the bowl was for her. | harbour_a1s5
> mercy | Offer the carver a hand down the last rung. | harbour_a1s5
> quiet | Bow to her. | harbour_a1s5
> inquiry | Ask who else has been sending rice. | harbour_a1s5

=== harbour_a1s5 | The Apprentice
The boy has come up from the beach with his bucket. He is thin and brown, with ears that stick out, and he stares at Mei’s iron bar with open reverence. “You are the Inspector,” he says. “You are the one who held the lamp.”
Mei Qiu goes very still. “Who told you that?”
“Everyone,” says the boy. “It is in the story. They tell it to us at the Wall. I am Little Adze. I am going to be the next carver.” He puffs out his small chest. “When I have been here long enough, I will cut the names of the people who did not get cut.”
“What people?” says Gu.
“The ones that nobody carved.” The boy looks at the Wall. “There are lots. Master Sun says that for every name on the Wall there is a name that never got cut. She says that is the real Wall. The one we cannot see.”
> truth | Ask him to show you how a name is cut. | harbour_a1s6
> mercy | Tell him he will be a fine carver. | harbour_a1s6
> quiet | Say nothing. | harbour_a1s6
> inquiry | Ask him where the uncarved names are kept. | harbour_a1s6

=== harbour_a1s6 | How a Name Is Cut
Little Adze finds you a chisel and a scrap of limestone and shows you the stroke. Not the whole name. One stroke. “You go in on a slant,” he says, “like this, and then you push, not hit. Hitting is for fools. A name has to come out of the stone, not be knocked into it.”
Your first stroke skids. The second digs. The third produces a respectable shallow groove, a vertical line with a hooked foot, and Little Adze squints at it and nods.
“That is a good one,” he says. “That is the start of a name. It will want a hundred more.”
Mei Qiu has crouched beside you. She is watching your hands. After a moment she says in a low voice, “Ke-er’s was a hundred and four.” She is not talking to you. “I counted them, after.”
> truth | Offer her the chisel. | harbour_a1s7
> mercy | Say nothing, and keep carving. | harbour_a1s7
> quiet | Hand her the stone. | harbour_a1s7
> inquiry | Ask her why a hundred and four. | harbour_a1s7

=== harbour_a1s7 | A Hundred and Four
“Strokes,” says Mei Qiu. “In her name. Ke-er in the old script is a long name. Two characters. Seventeen strokes and eighty-seven. I counted them in the morning, when they let me out of the guard-house, and I did not know why I did. And then I found that the wound had closed a hundred and four years sooner than the almanac said it would.” She is breathing carefully. “Seventeen and eighty-seven.”
She looks at the chisel in your hand.
“It was not a coincidence. Nothing in the Concord is.”
“What are you saying?” says Gu.
“I am saying,” says Mei Qiu, “that someone at the Chancery did the sum. That someone counted the strokes in her name and subtracted them from the wound’s time. That they knew what they were buying.”
> truth | Ask who. | harbour_a1s8
> quiet | Put the chisel down. | harbour_a1s8
> mercy | Take her hand. | harbour_a1s8
> inquiry | Ask how the Concord could have known. | harbour_a1s8

=== harbour_a1s8 | The Arithmetic
“The Registrar,” says Mei Qiu. “Of the Seventh Chancery. He kept the almanac. He is dead now. His daughter inherited his papers, and sold them to a dealer in the river provinces, and the dealer sold them to the Hollow Lotus.” She says this with a flat clear deliberation. “I have read them. I read them last year. I could not believe it.”
She draws a breath.
“It was not a sacrifice. It was a purchase. They bought a hundred and four years of quiet at the price of seventeen strokes and eighty-seven, and they wrote it in a ledger as if it were an ordinary sum.”
Carver Sun, overhearing, has folded her arms. “I have always said,” she says, “that the Wall is not for the dead. It is an invoice.”
> truth | Tell Mei you will not let it happen again. | harbour_close | +harbour_read_wall npc:SU_HARBOUR_WALL
> mercy | Tell Mei that Ke-er was not a sum. | harbour_close | +harbour_read_wall
> quiet | Stay with her. | harbour_close | +harbour_read_wall
> inquiry | Ask Sun whether the Wall has ever been wrong. | harbour_close | +harbour_read_wall

// ---------------------------------------------------------------- a2: digging at the block
=== harbour_a2s1 | The Last Block
The block is smaller than the others, a square of dense grey stone set into the base of the Wall like a threshold. A plaque of bronze is let into its face, green with salt. It bears two characters and a date. The moss that grows on it is greener and thicker than the moss on any other block, as though something under the stone were breathing on it.
“There is a cavity behind it,” says Ren Qiao, who has put his ear to the wall and listened, the way he would listen at a drum. “Two paces deep. Perhaps three. Hollow, and full of water.”
“It is a vault,” says Mei Qiu. Her voice has no expression at all. “It is where they put her.”
She has not moved. The iron bar hangs from her hand.
“I do not know why you are asking,” she says to you. “But if you want to see, I will not stop you. I have been waiting nineteen years for someone to ask.”
> force | Get a crowbar. | harbour_a2s2
> truth | Ask her whether she wants it opened. | harbour_a2s2
> quiet | Look for a seam. | harbour_a2s2
> mercy | Say you will not do it without her leave. | harbour_a2s2

=== harbour_a2s2 | The Seam
There is a seam. It runs around the block like a hairline round a fingernail, so fine you would miss it if the tide had not left a tracing of silt in it. Gu finds it with the tip of his knife. Ren Qiao works a wedge into it, and a second, and the stone shifts a hair’s breadth under the blows.
Behind you, the harbour is waking. A fisherman’s wife has stopped with her basket. A man with a net looks up, and looks away.
“Stop,” says a voice.
It is not loud. It belongs to a heavy, bearded man in a grey tunic, who has come down the steps with a bunch of keys at his belt. His boots are the polished black of a man who does a job properly. He has a badge on his chest, a stylised wave.
“Warden Lu,” says Mei Qiu. “Of the Wall.”
> force | Keep working. | harbour_a2s3
> truth | Tell him what you are doing. | harbour_a2s3
> quiet | Step back from the block. | harbour_a2s3
> inquiry | Ask on whose authority the Wall is guarded. | harbour_a2s3

=== harbour_a2s3 | The Warden
“By the authority of the Harbour Board,” says Warden Lu, “which has employed my family to keep this stone shut for nineteen years. Which has not yet been asked, in all that time, to open it.” He stands with his hands loose at his sides. He does not threaten. He has the air of a man who has had this conversation in his head every morning.
“I do not want trouble,” he says. “I have a wife. I have a son who plays the flute. I have a mortgage on a boat. But I will not let you open the block. It is the one thing I was told never to do.”
“Who told you?” says Mei Qiu.
“My grandfather.” His eyes drop. “He said the Concord told him. He said there was a girl under there who was still listening. He said if anyone let her out, the Wall would fall.”
> force | Say you do not believe it. | harbour_a2s4
> truth | Say she may be listening for someone to come. | harbour_a2s4
> mercy | Ask him what the grandfather did when he was afraid. | harbour_a2s4
> inquiry | Ask him whether he has ever heard her. | harbour_a2s4

=== harbour_a2s4 | Whether He Had Heard Her
Warden Lu does not answer for some time. He looks at the sea. When he speaks his voice has gone soft, as if he were afraid of being overheard by the stone.
“Every night,” he says. “At the slack of the tide. I keep the key, so I am the one who sits with the Wall. There is a sound. It starts as a hum. It becomes a word. I do not know the word. I have never heard it said. But it is a word that wants to be said.”
He puts a hand against the block. “I have never told my wife.”
Mei Qiu has not moved. Her face is the colour of paper. “What does it sound like?”
“Like a child asking a question,” says Warden Lu, “and not minding if the answer is no.”
> force | Say that is not a thing to be kept shut. | harbour_a2s5
> truth | Say that Mei is her sister. | harbour_a2s5
> quiet | Wait. | harbour_a2s5
> mercy | Ask him to hear Mei out. | harbour_a2s5

=== harbour_a2s5 | The Key
Lu takes the key from his belt. It is a plain iron key, the length of a hand, with a ring of braided sea-grass. He looks at it for a long time, and then at the Inspector, and then at the stone.
“If I open it,” he says, “and the Wall falls, it is on my head.”
“It will not fall,” says Mei Qiu. “It is a wall. It is held up by its weight.”
“That is not what I was told.”
“Then you were told wrong. Warden, I have spent nineteen years in the Seal Office. I have read the founding treatise. Walls fall when they are weak, not when they are open.” She says this with the confidence of a woman who is not quite sure. “I will stand in front of it. If anyone is crushed, it will be me.”
Warden Lu laughs, unexpectedly, a short bark. “That is a poor safeguard.”
> force | Offer to stand with her. | harbour_a2s6
> truth | Say that you will bear the blame. | harbour_a2s6 | +harbour_took_blame
> quiet | Say nothing. | harbour_a2s6
> deceit | Say that the Concord has authorised it. | harbour_a2s6

=== harbour_a2s6 | The Opening
The key turns. A bolt slides back with a sound like a heavy sigh. The block does not move, at first. Then Warden Lu leans on it with his shoulder, and Ren Qiao beside him, and the stone swings inward on a pivot as smooth as a door, and a breath of cold air breathes out.
It smells of wet stone and of something sweeter. Of a child’s hair after bathing.
Behind the block is a narrow chamber, no wider than a coffin, with a floor of black water. In the middle of the water stands a small stone pedestal. On it, very upright, in a bowl of salt, is a lamp.
It is a plain clay lamp, unlit. Beside it is a toy.
Mei Qiu makes a sound. Gu looks away.
It is a tiny wooden boat, painted blue.
> force | Step into the water. | harbour_a2s7
> truth | Stay at the door. | harbour_a2s7
> quiet | Let Mei go first. | harbour_a2s7
> mercy | Kneel at the threshold. | harbour_a2s7

=== harbour_a2s7 | The Lamp and the Boat
Mei Qiu wades in. The water is up to her knees, and black, and so cold that it makes her gasp. She stops at the pedestal. She does not touch the lamp. She picks up the toy boat, and turns it over, and runs her thumb along the keel.
“I made this,” she says. “I was seven. I carved it from a piece of driftwood with a kitchen knife.”
She looks at it for a long moment.
“She had it with her. When they took her, she had it in her hand. They said the bearer could carry one thing.” Her voice breaks. “I did not know they had put it here.”
The water is stirring. A ring spreads from the base of the pedestal, slow and wide. The lamp, which was dark, is giving off a faint blue glow.
“Mei,” whispers Gu.
“I know,” she says. “I know. She is waking up.”
> force | Move closer. | harbour_a2s8
> truth | Call out, softly. | harbour_a2s8
> quiet | Hold still. | harbour_a2s8
> mercy | Take the toy from her gently, and set it back. | harbour_a2s8

=== harbour_a2s8 | What Woke
The blue light grows, and with it comes a sound: not a voice, not yet. A hum like a bowl struck once and left to ring. The black water begins to climb the walls of the chamber, a finger’s breadth at a time. On the far side, above the lamp, a patch of stone has gone translucent, and through it you can see the shape of something very small, curled on its side, with its knees drawn up.
You do not look at it long.
Warden Lu has dropped to his knees. “I was told never,” he says. “I was told.”
“I know,” says Mei Qiu, without turning. “It was not your fault.” Then, very quietly, to the stone: “Ke-er. It’s Mei. I came back. I am sorry it took so long.”
The hum stops. For a long time there is only the lap of water.
> force | Close the block. | harbour_close | +harbour_opened
> truth | Wait with her. | harbour_close | +harbour_opened
> quiet | Step back. | harbour_close | +harbour_opened
> mercy | Say a name for the child. | harbour_close | +harbour_opened

// ---------------------------------------------------------------- a3: the pilgrims
=== harbour_a3s1 | Pilgrims
The old woman on the scaffold takes you for pilgrims at once. They come every season, she says, from inland towns, with lists of their dead, hoping to have a name cut that was struck from the Ledger. She does not charge. It is the one point on which the carvers’ guild has never been persuaded to take a fee.
“I am Sun,” she says. “I am the guild’s oldest living member, which is a distinction I could have done without. Come to the shed. Bring your list. Bring your tea.”
She turns to her apprentice. “Little Adze, show them to the shed.”
“We have no list,” you say.
“No one does.” Sun chuckles drily. “They bring a name written on a hand. On a sleeve. On the back of a bill of lading. It is all the same to the stone.”
Gu, behind you, whispers: “Are we really going to lie to her?”
> deceit | Say you came with a name on your sleeve. | harbour_a3s2
> truth | Admit that you are not pilgrims. | harbour_a3s2
> quiet | Follow the boy. | harbour_a3s2
> mercy | Say that you came for someone who cannot ask. | harbour_a3s2

=== harbour_a3s2 | The Shed
The carvers’ shed is a long low building of tarred planks, built into the foot of the Wall. It smells of limestone dust and linseed and boiled sea-grass. On the walls hang chisels in rows, racked by size from a thumbnail to a forearm. In the centre, on trestles, lies a block half carved.
“Sit,” says Carver Sun. She puts a bowl of tea in your hand. “You have the look of a woman with a long story. Tell it slowly. I will carve while I listen, and what comes out will be right.”
You glance at Hao Lan, who nods. You say, carefully, the name that the Elder gave you for this: the name of a woman who died on the river eleven years ago, and who is neither dead nor alive. It is a name from the abyss.
Carver Sun stops. The mallet hangs in the air.
“Say it again,” she says.
> deceit | Say it again. | harbour_a3s3
> truth | Tell her where you heard it. | harbour_a3s3
> quiet | Say nothing. | harbour_a3s3
> inquiry | Ask her what is wrong. | harbour_a3s3

=== harbour_a3s3 | A Name She Knew
“I cut that name,” says Carver Sun. Her voice is quite steady, which makes it worse. “I cut it forty years ago. A woman came, with an infant. She said the name was her sister’s. She said her sister had been struck by the Concord for teaching a child to listen. She paid me in salt fish.” She puts down the mallet. “I did not ask the sister’s name. She said it was a common one.”
She is looking at the block on the trestle.
“It is not on the Wall. I could not put it on the Wall. The Warden of that year would not allow. I put it on a stone, and I put the stone in the sea.” She looks up. “You are looking for it.”
“I am,” you say, and find that you mean it.
> deceit | Ask her to show you where. | harbour_a3s4
> truth | Ask her to show you what the name means. | harbour_a3s4
> quiet | Ask nothing. | harbour_a3s4
> mercy | Thank her for the stone. | harbour_a3s4

=== harbour_a3s4 | The Stone in the Sea
Sun takes you out in a skiff. She rows herself, with a slow strong stroke that does not tire, and Little Adze sits in the bow with his legs dangling. The tide has begun to turn, and the water is low and clear, and when you look over the side you can see the bed of the bay, ribbed and silver, and the dark shapes of the Wall’s footings.
Fifty yards out, she ships the oars.
“There,” she says.
Below the boat, in six feet of water, a flat grey stone lies on a bed of weed. It is the size of a table. It is carved from end to end with a single word, in the script of the Ledger. The weed has crept over it, but the cut letters are sharp.
You read it.
It says: Listener.
> deceit | Lean over the side. | harbour_a3s5
> truth | Say her name aloud. | harbour_a3s5 | +harbour_named_listener
> quiet | Touch the water. | harbour_a3s5
> inquiry | Ask who the Listener was. | harbour_a3s5

=== harbour_a3s5 | What the Stone Says
When you say the word, the water above the stone goes still. The ripples stop. The weed, which was swaying in the current, hangs straight. For a moment the whole bay is listening.
“She taught the first of them,” says Carver Sun, in a low tone. She has not taken her eyes from the stone. “So my grandmother said. That the Listener taught the Girl, and the Girl taught the Seed, and the Seed was planted in the Law Hall. And that when the Seed woke, the Listener would be remembered.”
She wipes her eyes with her wrist.
“I have cut ten thousand names. This is the only one I ever put where it could not be found. And you have found it. I think that must mean something.”
Little Adze, in the bow, is staring at you with enormous eyes. “You are the Seed,” he whispers.
> deceit | Say you are no one. | harbour_a3s6
> truth | Say that you are. | harbour_a3s6
> quiet | Say nothing. | harbour_a3s6
> mercy | Tell him not to repeat it. | harbour_a3s6

=== harbour_a3s6 | Sun’s Confession
They row back in silence. At the beach, Carver Sun beaches the skiff with a practised twist and sits down on the gunwale, her hands on her knees.
“I have a confession,” she says. “I have been a guild member for sixty-one years. I have carved seven thousand names on that Wall, and at least four hundred of them were wrong. The Concord sent them in lists, and I cut them, and I never asked who wrote them. Some were struck out of spite. Some were struck for a debt. Some were struck because the clerk was in a bad mood.”
She looks at her hands.
“I thought I was keeping a record. I was keeping a lie. I want to put it right, before I die. I want to cut the real ones. I need someone to tell me which.”
> deceit | Offer to help her find out. | harbour_a3s7
> truth | Tell her Hao Lan has the registers. | harbour_a3s7 | bond:hao+1
> quiet | Nod. | harbour_a3s7
> inquiry | Ask how many she thinks are wrong. | harbour_a3s7

=== harbour_a3s7 | The Registers
Hao Lan unclasps her satchel in the carver’s shed. She lays out the registers on the trestle: the grey volumes, the greasy folios, the thread-bound sheets she has carried since the Assembly. Carver Sun puts on her bone spectacles and goes through them with a leathery forefinger, name by name, murmuring.
By the second bell she has found forty. By the fourth, a hundred and ten. She does not slow. She sits at the trestle with her lamp and her magnifier and her endless patience, and checks each name against the Wall in her head, and where they disagree she makes a mark.
“It will take me a year,” she says at last. “And I shall need an apprentice who does not mind dust.”
Little Adze raises his hand.
“I was not asking you,” says Sun. But she smiles.
> deceit | Offer to come back. | harbour_a3s8
> truth | Promise that the registers will be copied for her. | harbour_a3s8 | +harbour_gave_registers
> quiet | Leave her to the work. | harbour_a3s8
> mercy | Leave a purse of coins with Little Adze. | harbour_a3s8

=== harbour_a3s8 | The Block Behind the Wall
Before you leave, Carver Sun takes you aside. She waits until Mei Qiu has gone ahead, and Gu has gone to look at the boats. She speaks very quietly.
“There is a block at the north end,” she says. “The last on the lowest course. It is not carved. It has a plaque of bronze, with two characters. I did not cut them. The Warden’s family put them there.”
She grips your wrist with a hand like a root.
“Do not let the Inspector go near it without you. The Warden’s family have kept that stone shut for nineteen years, and I do not know why. But I carved her name, and I know what is in the water behind it, and I do not think she is sleeping.”
> deceit | Promise to be with Mei. | harbour_close
> truth | Thank her for the warning. | harbour_close
> quiet | Go. | harbour_close
> mercy | Hug her. | harbour_close

// ---------------------------------------------------------------- a4: the widows
=== harbour_a4s1 | The Boats
The hat-off lasts as long as it takes the families to reach the boats. The fisherfolk walk in a long loose line beneath the Wall, hats in their hands, without speaking. It is a ritual older than any of them. They do not know what it is for. They know only that if you do not do it, your catch will go bad.
You fall in beside a woman of sixty with a net slung over her shoulder. She nods without surprise. Her hands are the colour of tea, and her face is a map of salt wind.
“Pan,” she says. “Auntie Pan. If you are walking the Wall, you walk it right. Hat off. Eyes down. Do not read the stones. It is not polite.”
“Why not?”
“Because they are not yours.” She shifts the net. “You do not read another woman’s letters.”
> mercy | Ask how long she has walked it. | harbour_a4s2
> truth | Ask what happens if you do read them. | harbour_a4s2
> quiet | Keep your eyes down. | harbour_a4s2
> inquiry | Ask whose names she keeps in mind. | harbour_a4s2

=== harbour_a4s2 | Forty Years of Hats
“Forty-one years,” says Auntie Pan. “I started at sixteen. I walked beside my mother. She walked beside her mother. I do not know who started it. I know that before the Wall was a wall, we walked this beach with our hats off, and the men who went out did not come back, and we said their names in the morning, once.”
She spits neatly to the side. “The Concord came later. It built the Wall to put names on. It did not understand that we did not need them written. We had them.”
She glances at you.
“You are not a pilgrim. You are not a customs man. You have the look of someone who wants to ask me something, and does not know how.”
> mercy | Say that is true. | harbour_a4s3
> truth | Ask about the block at the north end. | harbour_a4s3
> quiet | Wait for her to continue. | harbour_a4s3
> inquiry | Ask about the girl under the stone. | harbour_a4s3

=== harbour_a4s3 | The Girl Under the Stone
Auntie Pan’s step does not falter. Her face does not change. But she takes her hat off the second time, though it is already in her hand, and holds it against her chest.
“Ah,” she says. “That one.”
The line of families is passing the north end now. One by one, as they reach the last block, they bow their heads a little deeper. Nobody speaks. Nobody looks.
“She is called the Quiet One,” says Auntie Pan. “We do not say her name. We are not forbidden. We are only afraid she will hear it.”
“Afraid?”
“That she will hear it and answer.” She turns her eyes upon you. They are wet. “She was a child. She would have liked to go home. We are all afraid of what she would say if we asked.”
> mercy | Say that you would like to hear it. | harbour_a4s4
> truth | Say that her sister is here. | harbour_a4s4
> quiet | Take her arm. | harbour_a4s4
> inquiry | Ask what the children say. | harbour_a4s4

=== harbour_a4s4 | The Children’s Rhyme
“They have a rhyme,” says Auntie Pan. She says it with a wry twist of the mouth. “They skip to it. I have told them not to. They do it anyway. It goes:”
She recites it flat, as one recites a thing one does not endorse.
“Quiet one, quiet one, under the stone,
Nobody’s daughter and nobody’s own.
Count to a hundred and four, then run.
Quiet one, quiet one, tell it to none.”
She stops. “They have never known why a hundred and four. It is simply a good number for skipping.” She looks at the sea. “I have never told them.”
You feel a chill like a wet hand on the back of your neck.
> mercy | Ask her to say it again. | harbour_a4s5
> truth | Tell her what the number means. | harbour_a4s5 | +harbour_told_pan
> quiet | Repeat it silently. | harbour_a4s5
> inquiry | Ask if the rhyme has changed. | harbour_a4s5

=== harbour_a4s5 | The Fourth Verse
“It has changed,” says Auntie Pan. She says it reluctantly, as if the words tasted of metal. “There is a fourth line now. We did not make it. The children brought it home. They said they heard it at the slack, standing on the beach.”
“What is it?”
She hesitates. “They say it goes: Someone is coming to say my name.”
The wind has dropped. The long line of families is stopped at the north end, backs to the Wall, in a ragged semicircle. Nobody is looking at you. Everybody is looking at you.
“It is you, is it not?” says Auntie Pan. “You are the someone.”
> mercy | Say you do not know. | harbour_a4s6
> truth | Say you hope so. | harbour_a4s6
> quiet | Take off your hat. | harbour_a4s6
> inquiry | Ask who else has heard it. | harbour_a4s6

=== harbour_a4s6 | The Widows’ Circle
The families have drawn in around you. They are all hats-in-hands, and none of them speak. There are thirty or forty, men and women both, their faces weathered and shut. Behind them the sea is a flat plate of silver. A gull screams once and the sound is swallowed.
Auntie Pan takes your hand, as an aunt might take a niece’s.
“We have waited a long time,” she says. “We did not know what we waited for. We only knew we should be here when it came. I think we shall be here, now, and I think you had better go and say it.”
The circle parts. A path opens, down the beach, toward the north end and the last block. The families stand to either side, in two lines, with their hats on their hearts. It is like a procession.
You walk through it.
> mercy | Walk slowly. | harbour_a4s7
> truth | Take Mei Qiu’s hand as you pass her. | harbour_a4s7 | bond:hao+1
> quiet | Keep your eyes on the block. | harbour_a4s7
> inquiry | Look at the faces. | harbour_a4s7

=== harbour_a4s7 | The Slack of the Tide
At the north end, at the foot of the Wall, the sand is damp and cold. The last block is a small grey square with a bronze plaque, and the moss on it is thick and soft. The tide has reached the slack: the sea has stopped coming in and has not yet begun to go out. The whole bay is holding its breath.
You kneel. The plaque is two characters. Beneath them, in letters so small you must put your face to the stone to read, is a line of scratching, as though a child had done it with a nail.
It says: Ke-er was here.
Behind you, in the long line of families, someone begins to weep. Auntie Pan, whose hat is crushed against her chest, says in a cracked voice, “Go on, then.”
> mercy | Say her name. | harbour_a4s8 | +harbour_said_name
> truth | Say it with Mei. | harbour_a4s8 | +harbour_said_name
> quiet | Press your forehead to the stone. | harbour_a4s8 | +harbour_said_name
> inquiry | Ask the stone if she can hear. | harbour_a4s8 | +harbour_said_name

=== harbour_a4s8 | A Name Answered
“Ke-er,” you say.
The stone is cold. It does not move. The sea does not stir. For the space of a long breath nothing happens at all. And then, from inside the block, from somewhere much farther down than a stone should be deep, there comes a sound: the smallest of sounds, a tapping. Tap. Tap-tap. Tap.
Two taps and a pause. Three. It is the knock that children use at a door, to say: someone is home.
The families behind you have gone silent. Nobody moves. Auntie Pan’s hat has fallen from her hand.
Mei Qiu has come down the beach at a run. She kneels beside you, in the wet sand, and puts her hand flat against the plaque, and says, in a voice like glass, “Ke-er?”
Tap. Tap-tap.
> mercy | Keep your hand on the stone. | harbour_close | +harbour_said_name
> truth | Let Mei say the rest. | harbour_close | +harbour_said_name
> quiet | Step back. | harbour_close | +harbour_said_name
> inquiry | Ask what the knocks mean. | harbour_close | +harbour_said_name

// ---------------------------------------------------------------- hidden: Ke-er speaks
=== harbour_h1 | She Speaks Once
You say her name to the block, softly, and the moss on it ripples like a pelt. The mended scrap, or the memory of the voice in the Cut, or only the seed in your chest, warms against your ribs. Mei Qiu has come to stand beside you. She has taken off her sash and laid it over her arm, and she is holding the iron bar in both hands, not as a weapon but as a staff.
“Open it,” she says. “Not the stone. The other thing. Whatever the seed does.”
You press your left hand flat against the plaque. The scar across your palm throbs once, white, and goes cool.
The stone does not open. It turns, rather, to water. A pane of clear shimmering cold stands before you where the block was, and behind it, in a small chamber of black water, a girl of eleven is sitting with her knees drawn up, looking at you.
> inquiry | Say that you have brought her sister. | harbour_h2
> truth | Say that you have come to ask. | harbour_h2
> mercy | Stand aside, so that Mei can be seen. | harbour_h2
> quiet | Say nothing. | harbour_h2

=== harbour_h2 | Ke-er
She is a child. That is the first thing and the last. She wears the grey shift of the Law Hall reserve, and her hair is cut short, and in her lap is a little blue wooden boat. She has a narrow serious face with a scatter of freckles, and her eyes are huge and dark and perfectly clear.
“You are the one who writes,” she says to you. Her voice is the voice you heard in the Cut. “I felt you do it. In the vault, in the city. It tickles.”
Then she sees Mei, and everything in her face gives way.
“Mei,” she says. “You got old.”
Mei Qiu laughs. It is a wet, wrecked sound. “I am twenty-eight,” she says. “I am not old.”
“You are much older than me,” says Ke-er, with great gravity. “I have been eleven for nineteen years. I am not at all sure how to be your sister.”
> inquiry | Let them talk. | harbour_h3
> truth | Tell Ke-er she can be anything she wants to. | harbour_h3
> mercy | Stay near. | harbour_h3
> quiet | Look at the water. | harbour_h3

=== harbour_h3 | One Question
They talk for as long as the seed will hold the pane open, which is not long. You do not listen. You stand with your back to them, in the wet sand, with your hand against the block, and you feel the scar throb in time with a child’s heartbeat that is not your own.
When you turn back, the pane is thinning. Mei Qiu is on her knees at the threshold of the chamber, her hands pressed to the glass. Ke-er’s palm is flat against hers, on the other side. Her eyes are closed.
“One question,” she says. “I have a question for you, and then I have to go back.”
She opens her eyes. They are on you.
“When the Concord comes for the next one,” says Ke-er, “will you let them?”
The pane goes white. The water closes. The block is stone again, and the tap that follows is very faint, and very final. Tap.
> inquiry | Say never. | harbour_close | +harbour_ke_er_spoke
> truth | Say you do not know yet. | harbour_close | +harbour_ke_er_spoke
> mercy | Say you will find a way. | harbour_close | +harbour_ke_er_spoke
> quiet | Say nothing. | harbour_close | +harbour_ke_er_spoke

// ---------------------------------------------------------------- close
=== harbour_close | What the Wall Remembers
By noon the fishing boats are out, and the harbour belongs again to the gulls. The Wall stands in the glare, pale and mute, its mile of names catching the light. Mei Qiu sits on the sea steps with her iron bar across her knees and her face turned toward the open water, and nobody has the courage to disturb her.
+[how] harbour_read_wall | You read the Wall from the south end to the north, and learned what a hundred and four strokes cost.
+[how] harbour_opened | The block was opened, and the lamp and the little boat were seen. Warden Lu has not stopped shaking.
+[how] harbour_named_listener | A stone in the bay says Listener. You said it aloud, and the water listened.
+[how] harbour_said_name | You said Ke-er’s name at the slack of the tide, and a child knocked back.
+[how] harbour_ke_er_spoke | Ke-er spoke once, through the stone, and asked you the only question she has.
+[extra] harbour_took_blame | The Harbour Board will want to know whose fault it was. You told them.
+[extra] harbour_gave_registers | Carver Sun has a copy of Hao Lan’s registers and a year’s work ahead.
+[extra] harbour_told_pan | Auntie Pan knows what a hundred and four means, and is teaching it to the children.
Mei Qiu does not look round as you sit beside her.
“Whatever else happens,” she says, “I will not let them have another.”
> truth | Say you will not either. | harbour_close2
> quiet | Sit with her. | harbour_close2
> mercy | Hold out your hand. | harbour_close2 | bond:hao+1
> inquiry | Ask her what comes next. | harbour_close2

=== harbour_close2 | The Inspector’s Oath
Mei Qiu takes a long time to answer. When she does, her voice has changed. It has the cold, level clarity of a bell rung once and left to fade.
“I have been the Concord’s servant for nineteen years,” she says. “I have kept its seals, and counted its prisoners, and held its lamp. I told myself it was a good thing. I told myself the arithmetic worked.”
She stands. The iron bar swings down at her side.
“I am done with arithmetic. I will be your Inspector, if you will have me. Not the Concord’s. Yours. I will keep the seals you tell me to keep, and break the ones you tell me to break, and I will not count.”
She holds out the bar, hilt first.
“Take it,” she says. “It was the first thing the Concord gave me after. I have carried it nineteen years. I mean to give it to someone who knows what it weighs.”
> truth | Take the bar, and say you will carry it. | hub_b3_coast | +b3q_harbour bond:mei+3
> quiet | Take it without a word. | hub_b3_coast | +b3q_harbour bond:mei+3
> mercy | Close her hand around it again, and say she should keep it. | hub_b3_coast | +b3q_harbour bond:mei+3
> inquiry | Ask her what it weighs. | hub_b3_coast | +b3q_harbour bond:mei+3
`,
  scenarios: String.raw`
$ SU_HARBOUR_WALL | trust+4 respect+3 | elder | The Elder hears that the Wall is an invoice, and that a child is behind its last block.
hostile: I built a career on lists such as that Wall. I did not think I would be made to read one aloud. I do not thank you for it. I do not yet blame you.
wary: A hundred and four strokes. I have signed papers that cost more, and I never counted. I find that I am counting now.
neutral: I spent fifteen years believing the worst thing the Law Hall did was keep a secret. I see now that its worst was keeping a ledger. Secrets can be told. Ledgers must be balanced.
warm: When Mei took the bar from her belt and held it out, I thought: that is what repentance looks like. Not tears. A handing-over.
devoted: I will say this once. If a child must be heard to be mended, I will hear her. I will sit at that block as long as I am able, and I will say whatever the stone requires. I owe the Wall at least that.
`,
  remarks: String.raw`
% harbour_mei_later | since:harbour_said_name>=8 | duan | I understand Inspector Mei has taken up residence near the north end of the Wall. She sleeps on the steps. I have written to the Harbour Board to request that she be left alone. I do not expect it to be honoured.
% harbour_sun_later | since:harbour_gave_registers>=12 | hao | Carver Sun has sent a note. She has found three hundred wrong names already. She says she is going to need a larger scaffold. I cannot decide whether to laugh or weep.
`,
};
