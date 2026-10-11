import type { Arc } from "../types";

/**
 * Book Two, arc nine: the Archive of Nine. The Concord keeps the Ledger's copies in a tower of nine floors, one per Peak.
 * The Wanderer wants the founders' record of the torn page. Four ways up: earn leave floor by floor (a1), climb in at night
 * (a2), pass as Lin Yuan's cousin (a3), befriend the night sweeper (a4). A hidden route opens the ninth floor's sealed drawer
 * with the small key from Lin Yuan's iron ring, and finds the Reserve's registration.
 * Cast: Master Gui (the blind Head Archivist), the sweeper Old Pei, the floor-keepers.
 */
export const nine: Arc = {
  id: "nine",
  name: "The Archive of Nine",
  scenes: String.raw`
=== nine_entry | A Tower With Nine Doors
The Archive of Nine stands on the Stone Island in the middle of Qinglian Ford, and it is the tallest thing in the city that is not a pagoda. Nine floors, each with its own door, its own stair, its own coloured lantern: jade, cinnabar, gold, slate, bone, indigo, amber, ash, white. Each belongs to one of the Nine Peaks. To climb, you must be let in by the keeper of each floor, in order, and none of them has ever let in an outsider.
The Elder has no time for libraries. Duan Wuyi has lent you his seal for the day and nothing else. Beside the lowest door, a blind old man sits on a stool in the sun with a cup of tea, listening to the city.
“The founders’ chronicle,” he says, before you have spoken. “Fifth floor, bone-lamp, behind the second screen. Nobody asks for it. I wonder why you do.”
> inquiry | Say you will earn each floor by its own law, and begin on the jade door. | nine_a1s1 | +nine_a1
> force | Say nothing, and come back at night with a rope. | nine_a2s1 | +nine_a2 needs:2
> deceit | Present a letter of introduction from Lin Mian, Keeper of the Ash Archive, who does not exist. | nine_a3s1 | +nine_a3
> quiet | Sit down on the step beside him and ask how a blind man keeps nine floors. | nine_a4s1 | +nine_a4
> truth | Climb to the ninth floor with Lin Yuan’s iron ring in your hand, and try the smallest key. | nine_h1 |  | dep_keys | You carry no keys from the Ash Archive.

// ---------------------------------------------------------------- a1: floor by floor
=== nine_a1s1 | The Jade Door
The keeper of the first floor is a stern woman in a jade-green robe who sits behind a desk of green stone and does not look up. “The law of the Jade Peak,” she says, “is that a name may be read only by one who can say what it is for. Here is a name.”
She slides a slip across. It says: Ye Linzhi.
You have never heard it. You have heard fourteen others, in a red mist, and one of them was a girl of fifteen. You say the only thing you can. “She said she was not dead. She said she was only listening.”
The keeper’s pen stops. For the first time she lifts her eyes.
> truth | Tell her where you heard it. | +
> inquiry | Ask what the name is for. | ^
> quiet | Say nothing more. | ^
> mercy | Ask whether the girl was loved. | ^

=== nine_a1s2 | The Cinnabar Door
The second floor smells of ink and hot wax. A young man in a cinnabar sash is mending seals at a long bench, and does not stop mending when you come in. Heaps of broken wax lie around him like red snow.
“The law of the Cinnabar Peak,” he says, “is that you may not read what you did not help to write. Everything on these shelves was written by someone. Tell me who wrote the thing you came for, and I will let you see the hand.”
You think of the chronicle, and the founders, and the cold fact that the people who wrote it are dead. You think of the Elder, who writes in two ledgers. You think of Lin Yuan, who keeps a box.
> truth | Say you did not write it, but you carry the names of those who did not get to. | +
> inquiry | Ask whether the dead count as authors. | ^
> mercy | Offer to mend a seal for him, while you think. | ^
> quiet | Pick up a piece of broken wax and turn it in your fingers. | ^

=== nine_a1s3 | The Gold Door
The third floor is a counting-house. A hundred abacus beads click in the dusk, and a hundred clerks in gold sashes bend over ledgers without looking up. At the far end a fat man in a gold cap sits on a high stool, a sliding rule in each hand.
“The law of the Gold Peak,” he says, “is that nothing is free. Everything has a price. I don’t want your coin. I want a question that cannot be answered by a number.”
It is a game, and you have played it before. Duan Wuyi taught you a version over chess. You sift the questions you have, the way you would sift stones for a good one.
> truth | Ask: what is a name worth, to the one who loses it? | +
> inquiry | Ask: how many names has the Concord struck, and how many has it written? | ^
> mercy | Ask: what does a clerk owe a child? | ^
> force | Ask: who counts the counter? | ^

=== nine_a1s4 | The Slate Door
On the fourth floor the lamps are slate-grey and the keeper is a woman of seventy in a robe the colour of rain. She is not at a desk. She stands at a window, looking out over the city, her hands behind her back.
“The law of the Slate Peak,” she says, “is silence. Nothing on my floor may be read aloud. Nothing may be carried out. You may look. You may remember. You may not speak of what you see until the sun has gone down on the day you saw it.”
She turns. Her eyes are pale and clear, with the faint cloud of someone who has read in poor light for fifty years.
“Will you keep a vow of silence for a day?”
> truth | Swear it. | +
> quiet | Bow, and say nothing, to show you can. | ^
> inquiry | Ask what happens if you break it. | ^
> mercy | Ask whether the vow includes the people you came with. | ^

=== nine_a1s5 | The Bone Lamp
The fifth floor is lit by a single bone-white lamp that hangs from the ceiling on a chain. Under it a wide reading table stands, bare. Behind the table, behind a screen, a smaller screen. Behind the smaller screen, in a niche in the wall, is a book bound in a cloth the colour of dried tea.
There is no keeper. There is only a notice, tacked to the screen, in a fine hand. It reads: Whoever has come this far has been let in by four. The fifth door keeps itself. Read what you came for. Leave the lamp as it was.
You take down the book. It is very light.
> truth | Open it at the first page. | +
> inquiry | Open it at the last page. | ^
> quiet | Open it where it falls. | ^
> mercy | Ask the lamp for permission. | ^

=== nine_a1s6 | The Founders’ Chronicle
The chronicle is a plain record, in the dry hand of a plain man. It begins with the founding of the Azure Cloud Sect, seven hundred years ago, by three masters who had been disciples of a saint. It records the building of the first hall. It records a dispute. It records, in a single dry paragraph, that the saint’s name was struck from the Ledger, at the masters’ petition, for the crime of teaching a girl to listen.
Her name is given. The ink has been rubbed, but the shape remains.
Yu Ling.
Beneath it: And the page was torn, and the wound was named the Abyss.
> truth | Read it twice. | + | +nine_yuling
> inquiry | Read the paragraph before it, about the dispute. | ^
> quiet | Close the book, and say the name aloud. | ^
> mercy | Ask the lamp whether she is still there. | ^

=== nine_a1s7 | The Torn Page
Between the leaves lies a loose sheet, folded in four. It is thicker than paper. It is stiff with something dry and brown. You unfold it, and it is not a page: it is a copy of a page, made by pressing a thin sheet over the original, a rubbing. You tilt it to the lamp and see names in rows, in the old script, a hundred, a thousand, cut off at the top.
It is the missing page. It was torn from Heaven’s Ledger, in the founders’ time, and before it went into the abyss a clerk made a rubbing. Someone has kept it for seven hundred years.
At the bottom, in a firm modern hand, a note has been added in red: To be read by the one who comes. She will know the first line.
You read the first line. You know it.
> truth | Read it aloud, in a whisper. | +
> quiet | Read it silently, and hold it to your chest. | ^
> inquiry | Ask who left the note. | ^
> mercy | Copy it carefully, for the Elder. | ^

=== nine_a1s8 | Master Gui Smiles
The old man is still sitting on the step when you come down, with his cup of tea gone cold. He raises his face to you.
“You were let in by four,” he says. “I was told you would be.” He smiles with half his mouth. “The fifth door is mine. I put the note. I put it there fifty years ago, and I have been waiting for the person who would read it. I did not think it would be a Wanderer with a seed in her chest.”
He sets the cup down.
“I have been blind for forty years,” he says. “I read the Ledger too long. It does that to some people. I did not mind. I have never seen so clearly.”
> truth | Thank him, and ask what he wants. | nine_close | +nine_gui_ally
> mercy | Ask whether he would like company on the step. | nine_close | +nine_gui_ally
> inquiry | Ask who he was waiting for, before you. | nine_close | +nine_gui_ally
> quiet | Sit beside him in the sun. | nine_close | +nine_gui_ally

// ---------------------------------------------------------------- a2: at night
=== nine_a2s1 | The Rope
The tower has no windows on its lowest three floors. On the fourth it has slits, and on the fifth, a balcony. You climb the outside of the tower at night, in rain, with a rope that Ren Qiao has coiled for you without asking why. The stones are old, rough, and slick. The lanterns of the Nine Peaks burn above you like a slow procession of eyes.
Gu is at the foot with the lantern shuttered. Ren Qiao is at the foot of the rope, weight set, hands knotted in the line. “I hold,” he says. “You climb.”
There is a ledge at the third floor. You stop on it. The stone is warm, as though something inside were breathing.
> force | Climb on, hand over hand. | + | needs:2
> quiet | Rest on the ledge, and listen. | ^
> truth | Call down to Ren that you are fine. | ^
> inquiry | Look at the stone under your hand. | ^

=== nine_a2s2 | The Ledge at Four
The fourth-floor slit is a hand’s breadth wide, a dark seam between two blocks. A normal person could not squeeze through it. You are not entirely a normal person, and the cold seed in your chest turns toward the gap with a kind of liquid eagerness. You slip your arm in to the shoulder. The stone gives, very slightly, as a held breath gives. You slide through.
You land on a stone floor in the dark. A grey lamp burns somewhere ahead. A smell of rain, and old paper.
Someone is standing in the lamplight with their hands behind their back, looking out of the window. It is a woman of seventy in a robe the colour of rain. She does not turn.
“I hear a person where a person ought not to be,” she says. “I have not yet sounded the bell.”
> truth | Say who you are, and why you came by the wall. | +
> quiet | Stay still, and let her decide. | ^
> deceit | Say you are a new clerk, lost. | ^
> mercy | Apologise for the trouble. | ^

=== nine_a2s3 | The Slate Keeper
She doesn’t sound the bell. She turns, and her face is calm. “You will be the witness,” she says. “The one with the seed. The Censor-General asked me, this afternoon, to let you in, if you came by the front. I said I would. You came by the wall.”
She looks at the slit.
“It is a very small difference. It is a difference in manners. A person who comes by the wall wants something badly. A person who comes by the door wants something politely.” Her mouth curves. “I prefer the first sort. They read faster.”
She steps aside from the stair.
> truth | Thank her. | +
> inquiry | Ask what she thinks you want. | ^
> mercy | Ask whether she is cold. | ^
> quiet | Bow, and climb. | ^

=== nine_a2s4 | The Bone Lamp, by Night
The fifth floor is dark but for the bone-white lamp, swaying slightly on its chain. A draft comes from somewhere. The reading table is bare. Behind the table, a screen. Behind that, a smaller one.
You find the book without difficulty. It is in a niche in the wall, bound in cloth the colour of dried tea. It is very light. You open it at random and read a paragraph, and your hands begin to shake.
It is about a girl. Her name was Yu Ling, and she was a saint, and the masters of a mountain sect struck her from Heaven’s Ledger because she taught a girl to listen. You read the entry twice, then a third time, and then you set the book down on the table.
Below, in the dark, someone is climbing the stair.
> force | Take the book and go. | +
> truth | Read the rest, fast. | ^
> quiet | Put the book back and wait in the screen’s shadow. | ^
> deceit | Tear out the page, and put the book back. | ^

=== nine_a2s5 | Footsteps
The footsteps are slow and uneven. They climb, and pause, and climb. A stick taps on the stone. A small cough. Then a voice, thin and a little amused, says to the dark, “There is a lamp lit, and a person in the room. I am Gui. I am the Head Archivist. I am blind. It is a poor night to be a thief.”
He reaches the top and leans on his stick. His face turns toward the screen, to the exact spot where you stand, without any hesitation.
“I think you have come for the chronicle,” he says. “Please do not tear it. It is the only copy, and I have not finished reading it.”
> truth | Step out and tell him why. | +
> quiet | Stay behind the screen. | ^
> mercy | Say you’re sorry, and put the book on the table. | ^
> force | Tell him to let you pass. | ^ | needs:2

=== nine_a2s6 | The Old Man’s Reading
He sits down at the reading table, quite heavily. He folds his hands on the head of his stick. “I was told you would come,” he says. “Not by whom. By a note, left fifty years ago, in a hand I did not know. I kept it. I have wondered since whether it was meant for me, or for whoever would come after.”
He lifts his face to the lamp.
“I have read the chronicle forty-one times. I am blind now. I know it by heart.” He holds out a hand. “Give me the book. I will read it to you, and you will not need to steal it.”
> truth | Give it to him. | +
> mercy | Sit beside him. | ^
> inquiry | Ask what the note said. | ^
> quiet | Listen. | ^

=== nine_a2s7 | Yu Ling
He reads for an hour. He reads from memory, with his eyes closed, and his voice is the dry and gentle voice of a man reading to a child. He tells the story of the saint: a woman of the river provinces who could hear the Ledger turn. She taught a girl to listen. The girl was the daughter of the founders. When the masters learned of it, they petitioned the Concord to strike the saint, and the Concord, which was young and afraid, did.
“The page was torn,” he says. “Not by the Concord. By the saint herself. She tore her own name out of the Ledger, with her own hands, so the founders could not have it. They did not know what they had done. They had not read the page.”
He stops.
“That is the abyss, child. It is her grief. It is her page.”
> truth | Tell him you have heard her. | + | +nine_yuling
> mercy | Ask whether she can be told that someone remembers. | ^
> inquiry | Ask where the page went. | ^
> quiet | Sit very still. | ^

=== nine_a2s8 | Out by the Door
He walks you down himself. He leads you down the stair, past the slate floor and the gold and the cinnabar, one hand on the rail and one on your elbow, and out through the jade door in the pale of dawn. The first keeper is waiting at her desk, upright, with her pen in her hand.
“Master Gui,” she says, reproachfully.
“I took her up,” says the old man mildly. “She was lost.”
“She came by the wall.”
“It is a very small difference,” says Master Gui. “It is a difference in manners.” He pats your arm. “Tell the Censor-General I am obliged to him. And tell him that if he ever sends a witness again without telling me, I shall be a great deal ruder.”
> truth | Bow to the keeper. | nine_close | +nine_gui_ally
> mercy | Thank him for walking you down. | nine_close | +nine_gui_ally
> inquiry | Ask him for the chronicle’s second volume. | nine_close | +nine_gui_ally
> quiet | Walk out into the dawn. | nine_close | +nine_gui_ally

// ---------------------------------------------------------------- a3: a cousin of Lin Yuan
=== nine_a3s1 | A Letter of Introduction
The letter is Gu’s work, and Lin Yuan’s signature, copied from the foot of a library receipt, and it says: The bearer is my cousin Lin Mian, of the Ash Archive, who would consult the Concord’s founding records on a matter of cataloguing. It has Lin Yuan’s seal, in red wax, which you borrowed from his desk. It is the most careful forgery you have ever seen. You are almost sorry.
The keeper of the jade door reads it twice and looks at you for a long time.
“My cousin,” she says. “Of Lin Yuan. I see.” Her face does not change. “The Ash Archive has not sent a cousin in fifty years.”
> deceit | Bow, and say it has been a long road. | +
> truth | Tell her you are not Lin Mian, and ask for leave anyway. | ^
> inquiry | Ask what the Ash Archive did, fifty years ago. | ^
> mercy | Say Lin Yuan is overworked, and sent you in his place. | ^

=== nine_a3s2 | The Cousin
She lets you in. She lets you in, you realise, because she wants to see how far you will go. The first floor is hers; it is a room of green stone and quiet. She walks you to a desk and sets before you a ledger of statutes, and a pen, and says: “If you are a cataloguer, catalogue.”
It is a test. You are not a cataloguer. But you have spent a week at the elbow of a man who is, and you know the grammar of a catalogue as you know a song.
You take the pen. You begin, in the margin, a numbering. It is plain, regular and fast. You do not look up.
> deceit | Number the first fifty entries and invent a heading. | +
> truth | Tell her honestly that you are out of your depth. | ^
> inquiry | Ask what the system is, and follow it. | ^
> quiet | Copy her own hand’s numbering exactly. | ^

=== nine_a3s3 | Lin Mian
By the third hour you are Lin Mian. You have a title, a school, a distinguished mentor, a distinct opinion on the Peaks’ filing conventions. The floor-keepers pass you from hand to hand, each one examining you for some flaw. Each one finds none.
On the fourth floor the slate keeper pauses over your shoulder. She says nothing. She puts one pale finger on a line you have written, and moves it, very slightly, to the left.
It is a correction. Without a word, she has corrected your forgery.
You glance up. She is not looking at you. She is looking out of the window.
> truth | Thank her silently. | +
> deceit | Correct a second line yourself. | ^
> quiet | Move on. | ^
> inquiry | Ask her what she knows of Lin Mian. | ^

=== nine_a3s4 | The Fifth Door
You reach the bone lamp at dusk. There is no keeper. There is a notice on the screen. You read it. Whoever has come this far has been let in by four. You think: I have been let in by none. I have been let in by a lie.
You take the chronicle from its niche.
It is thin, and light. You open it. You read. When you reach the name of the saint, Yu Ling, you stop. Her name is cut into the page with a stylus, not written. The paper has been pierced. Someone, a long time ago, has gone back over her name with a blade, to be sure.
You stand in the lamplight with the book open.
> truth | Read the rest. | +
> quiet | Put your thumb on the cut letters. | ^
> inquiry | Read the paragraph before. | ^
> mercy | Say her name aloud. | ^

=== nine_a3s5 | The Saint’s Page
The book tells you what the book tells everyone. A saint. A girl who listened. A mountain sect that struck her. A page torn out of Heaven’s Ledger by the saint’s own hand, and a wound where it had been. You turn the leaf, and there is a note, and it is not in the chronicler’s hand. It is in the neat clerk’s script of the Concord.
The founders’ petition to strike the saint, with the signature of the three masters. You know the third name. It is Su.
The first of the Su line was one of the founders.
Your hands are very cold.
> truth | Read the name twice. | + | +nine_su_founder
> inquiry | Search the page for a date. | ^
> mercy | Close the book. You need a moment. | ^
> quiet | Keep reading. | ^

=== nine_a3s6 | Somebody Knows
A hand falls on your shoulder. It is dry, a little shaky, and warm. “I know the chronicle,” says a thin voice. “I read it for forty years. I could not read the last part. The last part is about her, the Elder, the one you came with.”
Master Gui. Blind, small, in a threadbare robe, with a stick, standing in the dark behind you. “You are not Lin Mian,” he says kindly. “Lin Mian does not exist. I wrote the letter of introduction she did not receive.”
You stare.
“I am a very old man,” he says. “I have a great deal of time on my hands. I wrote it and put it in the jade keeper’s tray, the day before you came. I knew you would use a false name. I wanted you to have one that would work.”
> truth | Ask him why. | +
> mercy | Thank him. | ^
> inquiry | Ask who told him you were coming. | ^
> quiet | Say nothing. | ^

=== nine_a3s7 | Why Gui Did It
“Because I was told,” says Master Gui. “By the person who wrote the note on the screen. Fifty years ago, in a hand I did not know, a note was left. It said: When she comes, let her in. She will not have a name of her own. Give her one.” He smiles faintly. “I thought it was a riddle. It was an instruction.”
He lays his hand on the chronicle.
“I have given you Lin Mian. I hope you will keep her. She is a very good cataloguer.”
He turns to go. He pauses at the stair.
“The torn page is in the ninth floor,” he says. “Under seal. If you ever get a key, I would be very grateful if you would tell me what it says.”
> truth | Promise to tell him. | nine_close | +nine_gui_ally
> mercy | Thank him for the name. | nine_close | +nine_gui_ally
> inquiry | Ask whose seal is on the drawer. | nine_close | +nine_gui_ally
> quiet | Bow to him, once, and go. | nine_close | +nine_gui_ally

// ---------------------------------------------------------------- a4: the sweeper
=== nine_a4s1 | The Blind Man’s Tea
He pours a second cup without being asked. “Nine floors,” he says. “Nine keepers. A thousand shelves. I keep them with my ears.” He lifts his face to the sun. “I know every creak in the stair. I know whose heel is worn. I know when the oil in the lamp on the fifth floor runs low. A blind man must be an expert in the thing sighted people ignore.”
Gu hovers at your elbow, ill at ease. The old man says to him, without turning, “Boy. You’re nervous. Sit.”
Gu sits.
> truth | Ask him what he has learned from listening. | +
> mercy | Ask whether he has anyone to look after him. | ^
> inquiry | Ask who sweeps the floors at night. | ^
> quiet | Drink your tea, and listen too. | ^

=== nine_a4s2 | Old Pei
“Pei,” says Master Gui. “She’s sixty-four, and she has swept the tower every night for forty years. She’s deaf in one ear and rude in both. She hates the Concord. She’s the only one in the building who knows what is on the shelves.” He smiles. “I don’t think she’ll talk to you. But she will talk to the boy.”
So it is Gu, in the end, who goes in. He is told to carry a broom and keep his mouth shut. He does the first and not the second.
When he comes out he is carrying a lantern, a wad of rags, and the dazed expression of a boy who has been given a mother.
“She says,” he whispers, “that you can come up the back stair at midnight. She says I’m too thin.”
> mercy | Thank Gu, and say he’s right. | + | bond:gu+2
> truth | Ask what else she said. | ^
> quiet | Take the lantern. | ^
> inquiry | Ask whether she has a price. | ^

=== nine_a4s3 | The Back Stair
The back stair is narrow, steep, windowless, and smells of lye. It winds up the inside of the tower like the thread of a screw. You climb it with a broom in your hand and a bucket on your arm, behind a stout deaf woman with her sleeves rolled to the elbow and a pipe between her teeth.
“Pei,” she says. “Not Madam. Not Master. Pei.”
She doesn’t look at you. She speaks over her shoulder in a hoarse shout. “I sweep. I don’t read. I don’t care. But I know what’s in the corners, and what’s in the corners is where the truth is. People who read don’t look in corners.”
She stops on the landing at the fifth floor and points with her pipe.
> truth | Thank her. | +
> quiet | Follow her pipe. | ^
> inquiry | Ask what is in the corner. | ^
> mercy | Offer to carry the bucket. | ^

=== nine_a4s4 | What Was in the Corner
Behind the second screen, behind the first, under the reading table, in a crack between the floorboards, there is a roll of paper. Pei knows because she found it thirty years ago, sweeping. She’s been dusting around it ever since.
“Not mine,” she says. “Not yours. Whoever it belongs to doesn’t want it found. I never told.”
She spits into her bucket.
“I think it’s hers,” she says. “The Elder’s. A woman in a grey robe came here once, fifteen years ago, at night. She hid a thing in the floor. I watched from the stair. She cried.”
> truth | Take the roll. | +
> mercy | Ask whether she’d like to read it with you. | ^
> inquiry | Ask how she knows it was the Elder. | ^
> quiet | Put your hand over the crack, and hold still. | ^

=== nine_a4s5 | Wanru’s Roll
It is a letter. It is in a hand you know, though it is younger and quicker, the hand of a woman who is frightened and trying not to be. It is dated fifteen years ago, the night after the Sealing. It reads:
To whoever finds this. I have done a thing, and I do not know if it was right. Nine children were seeded with the black lotus by the masters, as a reserve, in case Mengjiao failed. The masters meant to keep them. I have taken them out. One I have placed with a nurse on the river. Eight I have given to a woman I trust, and I hope to God I was right.
The letter ends there. The remainder is torn.
> truth | Read it again. | + | +nine_reserve_letter
> quiet | Sit down on the stair. | ^
> inquiry | Look for the other half of the page. | ^
> mercy | Fold it very carefully. | ^

=== nine_a4s6 | Nine
Nine children. One with a nurse, on the river. Eight with a woman she trusts.
You count the stairs between yourself and the ground. You count your own breath. You think of a river-village, a teacher who told you nothing, a cold seed in a body that could not have been born with it. You think of a pin-scratch on a drowned wall. Nine. Withdrawn. Safe.
Pei has stopped sweeping. She is watching your face, and her own face has gone, for once, gentle.
“You,” she says. It is not a question. “It’s you.”
> truth | Say yes. | + | +nine_knows_nine
> quiet | Say nothing. | ^
> mercy | Ask her not to tell. | ^
> inquiry | Ask whether she knows who the woman was. | ^

=== nine_a4s7 | What Pei Said
“I’m deaf,” says Pei. “I don’t hear what I’m not told. I wasn’t told.” She takes up her broom and begins to sweep, as if the whole conversation had not occurred. “If anyone asks, the roll was gone when I came. A rat, I should say. Or a ghost.”
She sweeps for a time.
“I had a girl,” she says, with her back to you. “She was struck. She’d be thirty now. I don’t know what happened to her name. If you see a girl, tall, with a burn on the left hand, you might tell her old Pei still sweeps.”
> truth | Promise to look. | + | +nine_pei_girl
> mercy | Tell her you will remember the burn. | ^
> inquiry | Ask the girl’s name. | ^
> quiet | Take a broom, and sweep beside her. | ^

=== nine_a4s8 | A Lantern for the Road
In the morning Master Gui is still on his step with his tea. Gu has gone ahead to the barge with the broom, grinning from ear to ear, and Pei has gone to bed. You come down the tower stair, up from below, with a roll of paper inside your robe, and the old man turns his face to you.
“I do not ask what you took,” he says. “I merely note that you went in with a boy and a broom and came out with an expression I have not heard on a human face in forty years.”
He smiles.
“You may tell the Censor-General that the Archive of Nine was most hospitable.”
> truth | Thank him. | nine_close | +nine_gui_ally
> quiet | Bow, once. | nine_close | +nine_gui_ally
> mercy | Leave your cup beside his. | nine_close | +nine_gui_ally
> inquiry | Ask whether he knows Pei’s daughter. | nine_close | +nine_gui_ally

// ---------------------------------------------------------------- hidden route: the small key
=== nine_h1 | The Smallest Key
On the ninth floor there is a door of white wood with no handle. In the door is a keyhole no bigger than a grain of barley. You find it by touch, in the dark, after the eighth floor, in a corridor lit by a single ash-grey lamp.
In your belt hangs Lin Yuan’s iron ring, largest key first. The small one at the end has never opened anything. Lin Yuan said so, and he laughed.
You take it between finger and thumb. It is the length of a fingernail, and it fits.
It turns without a sound.
> truth | Open the door. | +
> quiet | Listen at the door first. | ^
> inquiry | Look at the keyhole. | ^
> mercy | Say a word of thanks to Lin Yuan. | ^

=== nine_h2 | White Wood
The room beyond is small. It is lit by a skylight, white and cold. There is a table, a stool, and a drawer set in the wall with a seal of grey wax, and the seal is a closed lotus. Nothing else.
You break the seal with your thumb. The drawer slides out without a sound.
It holds a single folded paper. It is dated the night of the Sealing. It is in the Elder’s hand, in the quick, frightened script of a woman who is trying not to be seen to be frightened.
It reads: To the Keeper of the Ninth Door, if I am dead. The nine are listed on the other side. I have not given their placement. I trust you will not ask.
> truth | Turn it over. | + | +nine_list
> quiet | Hold it in your hand, unread. | ^
> mercy | Ask for her forgiveness. | ^
> inquiry | Look at the corner of the paper. | ^

=== nine_h3 | The Other Side
There are nine lines. They are numbered, one to nine. Beside each number is an initial, not a name. Beside number nine, a smudge, as of a thumb. And in the margin, in the neat hand of the Elder: Nine was the youngest. She had a hand that would not stop reaching for the lamp.
You read it standing. The skylight is white. The cold seed in your chest has gone very quiet, the way a sleeper does when a hand is laid on its brow.
The door is open behind you. The light is on the stair. Somewhere below, a deaf woman is sweeping a floor, and a blind man is drinking tea in the sun.
> truth | Take the list to the Elder, tonight. | nine_close | +nine_gui_ally +nine_list
> quiet | Put the list back in the drawer, and keep what you know. | nine_close | +nine_gui_ally +nine_list
> mercy | Fold it, and hold it against your heart. | nine_close | +nine_gui_ally +nine_list
> inquiry | Copy the nine initials into your notebook. | nine_close | +nine_gui_ally +nine_list

// ---------------------------------------------------------------- close
=== nine_close | What the Tower Keeps
The Stone Island sits in the river like a thumbprint. Behind you, the Archive of Nine goes about its business: nine lanterns, nine floors, and a blind old man on a step.
+[a] nine_a1 | You earned each floor by its own law, and five keepers have written your name in a book.
+[a] nine_a2 | You climbed the wall in the rain, and the slate keeper left the slit unlatched.
+[a] nine_a3 | You were Lin Mian for an afternoon. She was a good cataloguer, and has a following.
+[a] nine_a4 | You swept a tower at midnight beside a deaf woman, and she gave you her daughter’s burn.
+[c] nine_yuling | The saint was Yu Ling. She tore her own page out so that the founders could not have her.
+[c] nine_su_founder | The third name on the founders’ petition is Su. The Elder is the last of a line that struck a saint.
+[c] nine_reserve_letter | Nine children were seeded. One was placed with a nurse on the river. Eight were given to a woman the Elder trusted.
+[g] nine_gui_ally | Master Gui asked you for one thing: if you ever read the sealed drawer on the ninth floor, tell him what it said.
+[g] nine_list | You read the Elder’s list of nine, and the smudge beside number nine.
+ nine_knows_nine | Old Pei knows, and has said nothing, and will say nothing.
> truth | Take what you found to the Elder, and tell her all of it. | nine_close2 | npc:SU_NINE_TOLD
> quiet | Keep what you found, and watch the river. | nine_close2
> mercy | Go and sit with Gu on the quay. | nine_close2 | bond:gu+2
> inquiry | Ask Duan Wuyi what the Concord knows of the first Su. | nine_close2

=== nine_close2 | The Third Name
The Elder is sitting on the barge roof in the evening light, her cloak around her shoulders, her hands in her lap. The river is the colour of tin. She does not turn as you climb up.
“I have been thinking about my family,” she says. “I have been thinking that I am the last of the line. I have been thinking that the line has been on the wrong side of things for seven hundred years, and that I am the first Su to have any idea of it.”
She looks at the water.
“It is not a comfortable place to be. It is a place where a thing might be done.”
+ nine_su_founder | The Elder has read the third name on the founders’ petition. Her own.
+ nine_reserve_letter | She has read her own letter, the one she left under a floor, and she did not say which of you wrote it first.
> truth | Tell her you will not leave her to be the last. | hub_b2_city | +b2q_nine
> mercy | Sit beside her, and say nothing. | hub_b2_city | +b2q_nine
> quiet | Take her hand, as you took it at the plank. | hub_b2_city | +b2q_nine
> inquiry | Ask her what she means to do. | hub_b2_city | +b2q_nine
`,
  scenarios: String.raw`
$ SU_NINE_TOLD | trust+3 respect+2 fear+5 | elder | The player brings the Elder the founders’ chronicle and the news that the first Su was a founder who struck a saint.
hostile: You bring me the shame of my family as if it were a gift. I am not ungrateful. I am not able to be grateful. Leave me.
wary: A founder named Su. A saint named Yu Ling. A page torn out of Heaven’s Ledger. I have been the Elder of the Law Hall for twelve years, and I did not know that the line I come from began in a crime. Thank you. I think.
neutral: I knew we had a history. I did not know it was this. A saint struck for teaching a girl to listen. And the girl was the founders’ daughter. I wonder whether I am listening, now, on her behalf.
warm: You came to me with it before you came to a Censor. Sit. Let me see the page. I am not afraid of what it says. I am only afraid of how glad I am that it was you who found it.
devoted: The first Su struck a saint. The last Su has a witness. It seems to me that the account is not yet closed, and that you and I are the ones who hold the pen.
`,
  remarks: String.raw`
% nine_gui_later | since:nine_gui_ally>=18 | elder | A letter from Master Gui, in a dictated hand. He says he has been practising a new kind of reading. He says it has no eyes. I did not understand the rest.
% nine_pei_later | since:nine_pei_girl>=14 | gu | I keep thinking about the burn on the left hand. I asked three people in the market whether they knew a tall girl with one. Nobody did. I will keep asking. It seems to be what one does.
`,
};
