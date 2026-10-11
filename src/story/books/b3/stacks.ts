import type { Arc } from "../types";

/**
 * Book Three, arc fourteen: the Stacks of Leaves. Every leaf the Ledger ever struck is shelved here, and reading one aloud writes
 * its name back, at the cost of a name from the reader that the Well takes. Four approaches: read the leaves you hold in order
 * and choose whom to pay for (a1, truth), break the Closed Stacks where the political strikes are kept (a2, force), copy rather
 * than read, so the Well takes nothing (a3, deceit), and sit with the paper staff until the Head Archivist tells you the price
 * (a4, quiet). A hidden route reads the child under the Wall.
 * Cast: the Reader, Head Archivist Lian (paper), Qiu, Mei Qiu, Gu, Hao Lan, the Elder.
 */
export const stacks: Arc = {
  id: "stacks",
  name: "The Stacks of Leaves",
  scenes: String.raw`
=== stacks_entry | Please Do Not Read the Dead Aloud
The Stacks are a city of shelves. They go down by seven galleries, each wider than the one above, each lit by lamps of a different colour, and at every gallery’s edge a rail of black iron stops the reader from falling. The air smells of old tea. There is no wind, and yet the leaves stir on their shelves as you pass, the way fur stirs when a hand is passed above it.
The Reader goes ahead of you with her lamp. She does not hurry. She is explaining the rules, in her small clear voice, to nobody in particular. “You may touch,” she says. “You may carry. You may not read aloud. Not even a little. If you read aloud, the Well hears.”
“What does the Well do?”
“It writes the name back,” says the Reader. “And it takes one in return.”
She stops under a green lamp. A tall shelf of boxes stands before her. She lays her small hand on the nearest.
“Everyone who comes here wants to read,” she says. “I have been waiting to see what you will do.”
> truth | Ask her to show you the leaves you hold. | stacks_a1s1
> force | Ask where the locked stacks are, and who locked them. | stacks_a2s1 | needs:3
> deceit | Ask Hao Lan whether a copy of a name is the same as a reading. | stacks_a3s1
> quiet | Sit down on the gallery floor, and ask the paper staff how long they have waited. | stacks_a4s1
> inquiry | Ask the Reader about the girl who is under the Wall. | stacks_h1 |  | harbour_ke_er_spoke | You have not heard Ke-er speak.

// ---------------------------------------------------------------- a1: reading
=== stacks_a1s1 | Seven Leaves
The Reader sits you down on a bench in the green light and lays the leaves on a reading-stand. There are fourteen. Seven you carried down; seven she has fetched. They are brittle at the edges and the colour of weak tea. Each bears a name, a date, and a single word in red.
“Struck,” says the Reader. “They are all struck. You may read them to yourself. You may not read them aloud, unless you mean to pay.”
“What is the price?”
“A name.” She folds her small hands. “The Well writes the struck name back into the Ledger, and takes a name from the reader. It is a fair exchange, it says. One for one.” Her grey face is solemn. “I have seen it done four times in a hundred and eighty years. The readers did not go mad. They did not die. They only forgot someone.”
She nods at the leaves.
“Choose,” she says.
> truth | Read the first, silently. | stacks_a1s2
> mercy | Read the last. | stacks_a1s2
> quiet | Ask whose they are. | stacks_a1s2
> inquiry | Ask what the Well does with the names it takes. | stacks_a1s2

=== stacks_a1s2 | The Names
You read them silently, one by one. The first is Qiu’s. It is a girl’s name, in the script of the Law Hall, with a date fifteen years gone. Beside it, in the margin, a clerk’s cramped hand has written: reserve, unclaimed. Beside the second, a boy’s name, Tian, the same date, the same note.
The third is Ah Zhi’s. The fourth, Lu Yan’s. The fifth, Shu Ning’s. The sixth, Bao Er’s. The seventh is a name you do not recognise, a man’s, in a different hand. Below it, a single line: Wen Rui, clerk, Seventh Chancery. Struck, error of sum.
“You have had his before,” says the Reader. “You wrote it in the vault. It came back to the Ledger, and then it was struck again. The Censors do that.” She sighs. “They are very tidy.”
Of the other seven, you recognise five. Mei Qiu’s sister. A baker. A woman named Bian. A man named Ming, who lives in a cellar of the mill. The Elder’s own.
The Elder’s leaf is the oldest of all.
> truth | Look at it. | stacks_a1s3 | npc:SU_STACKS_READ
> mercy | Turn it over. | stacks_a1s3
> quiet | Say nothing. | stacks_a1s3
> inquiry | Ask the Reader why it is old. | stacks_a1s3

=== stacks_a1s3 | The Registrar’s Leaf
It is dated fifteen years ago, the night of the Sealing. It bears the name Su Wanru, and a line beneath it that reads: Registrar of the Law Hall. Struck. Reason: a fifteenth line unsigned.
“A strike for the Registrar?” you say.
“Not a strike for what she did,” says the Reader. “A strike for what she would do.” She tilts her head. “They are very tidy. They struck her in advance. They did it as a precaution. It was never carried out, because she was needed.” Her small face is puzzled. “I have always thought that very strange.”
The Elder, behind you, has gone white. She is standing at the rail with both hands on it.
“I did not know,” she says.
“Nobody did.”
“I have been the Elder for twelve years. I have signed three thousand orders.” She wets her lips. “All that time, I was struck.”
She laughs. It is a thin, awful sound.
“Then I was never in the Ledger at all,” she says. “I was a ghost, signing orders.”
> truth | Take her arm. | stacks_a1s4
> mercy | Say it makes no difference. | stacks_a1s4
> quiet | Hold the leaf. | stacks_a1s4
> inquiry | Ask the Reader what it would take to write her back. | stacks_a1s4

=== stacks_a1s4 | The Price of a Registrar
“A name,” says the Reader. “One for one.” She takes the leaf and lays it on the stand. “But there is a difficulty. The Registrar’s name has been in use for forty years. It is worn. It is quite thin.” She frowns at it, as a tailor might at a threadbare coat. “It would not buy much. It would be a very small restoration.”
“Then someone else’s,” says the Elder, at once. “Mine is the one I would pay with. I have had a long life. I can spare it.”
“You cannot pay with your own. The Well will not take it.” The Reader shakes her head. “It must be someone else’s name that you know. Someone you remember, and who remembers you.”
“I see.”
“It is not as bad as it sounds. You forget the name, and the face, and the feeling. You do not forget that they existed.” Her small voice wavers. “You only lose the part that was yours.”
The Elder sits down on the bench with a bump.
> truth | Offer to pay for her. | stacks_a1s5
> mercy | Say she should not. | stacks_a1s5
> quiet | Wait. | stacks_a1s5
> inquiry | Ask who she would pay with. | stacks_a1s5

=== stacks_a1s5 | Whom She Would Give
“Hui Niang,” says the Elder.
She says it at once. She says it with her eyes closed. Her face is serene, and perfectly bleak. “I would give the Well Hui Niang. I have been carrying her for twenty years. She is the only person I have ever been afraid to see.” She opens her eyes. “If I forgot her, I should not be afraid.”
The Reader looks at her.
“You would not know her,” she says. “You would meet her in the street and ask her for a cup of tea.”
“I should like that.”
“You would not remember that you had wronged her.”
“No,” says the Elder, quietly. “That is rather the point.”
There is a long silence. The lamps shift from green to rose. The Reader’s hand creeps up to her mouth.
“I think,” she says carefully, “that it is the best offer anybody has ever made me. And I do not think the Well should accept it.”
> truth | Agree. | stacks_a1s6
> mercy | Hold the Elder’s hand. | stacks_a1s6
> quiet | Say nothing. | stacks_a1s6
> inquiry | Ask why not. | stacks_a1s6

=== stacks_a1s6 | Why Not
“Because it would be a lie,” says the Reader. “The Well likes honesty. It does not like a gift disguised as a payment. If you give it a name you do not wish to keep, it will know.” She nods at the Elder. “You wish to be rid of her. That is not a price. That is a relief.”
The Elder flinches.
“A price,” says the Reader, “is a thing you would rather not pay.”
She lays the leaf down.
“Think of someone you would hate to forget,” she says gently. “Someone you would grieve to lose. Then see whether you wish to restore the Registrar.”
The Elder sits for a long time with her hands folded. When she lifts her head there are tears on her face.
“I cannot,” she says. “I find I cannot. I would hate to lose any of them.” She looks at you. “You. Gu. Lin Yuan. Mengjiao.” She wipes her eyes. “I am a fool. I am a very old fool.”
> truth | Say no. | stacks_a1s7
> mercy | Say you will pay. | stacks_a1s7
> quiet | Wait. | stacks_a1s7
> inquiry | Ask the Reader what you could give. | stacks_a1s7

=== stacks_a1s7 | An Offer
You consider what you have. You have a village you barely remember, and a foster-mother whose face is blurred. You have a mountain, a gate, a stair. You have a handful of friends. You have a name you gave to a smith, in a shed, in the dark. You have a scar, and a seed, and a bead.
You look at the leaf.
“I will pay,” you say. “For the Registrar’s. I will give a name.”
The Reader turns her grey eyes on you. “Whose?”
You think. You think of the woman who raised you in the river village. Her name was a plain one. You hardly use it. She is a smell of sour milk and woodsmoke. She is a hand on your head. She is a voice saying, Eat your rice, there’s a good girl.
You think: it is mine. It is the one thing I have that no one else has.
“Her,” you say. “The woman who found me.”
“Are you sure?”
“No,” you say. “That is why it will work.”
> truth | Read the leaf aloud. | stacks_a1s8 | +stacks_paid_fostermother
> mercy | Hesitate. | stacks_a1s8
> quiet | Take a breath. | stacks_a1s8
> inquiry | Ask what you will forget. | stacks_a1s8

=== stacks_a1s8 | A Name for a Name
You read it aloud. You say, “Su Wanru. Registrar of the Law Hall.” You say it in a clear plain voice, and the words fall into the Stacks like pebbles into a well. They echo down, and down, and down. A thousand lamps flicker. The leaf in your hand grows warm. The red word on it, struck, fades, as ink fades in water.
Somewhere far below, in the dark, a great slow sound begins. It is the Well, drinking.
You feel it take her. It is like a tooth being drawn. It is a small clean pain, behind the eyes, and then nothing; a hole where something was; the vague sense of a smell, and a word on the tip of your tongue, and then gone.
You blink. “What was I saying?”
“You were reading the Registrar’s leaf,” says the Reader gently.
“Was I?” You look at the old woman at your side. She is crying and laughing at once, with her hands over her mouth. “Elder? Are you well?”
She takes your hand and holds it.
“Perfectly,” she says. “Perfectly well.”
> truth | Smile. | stacks_close | +stacks_read_aloud
> mercy | Ask her why she is crying. | stacks_close | +stacks_read_aloud
> quiet | Look at the leaf. | stacks_close | +stacks_read_aloud
> inquiry | Ask who the woman was. | stacks_close | +stacks_read_aloud

// ---------------------------------------------------------------- a2: the Closed Stacks
=== stacks_a2s1 | Bars
The Closed Stacks are on the lowest gallery, behind a cage of iron bars as thick as a man’s wrist. The cage runs the whole length of the wall, floor to ceiling. Behind it are shelves that the lamps do not reach. They are black with dust. They are tied with red cord. Every leaf has a tag, and every tag is in the same hand.
The Reader stops at the bars. She lays her small palm against one. “These are the political ones,” she says. “The ones the Concord did not want read. They are shelved by year. They are sealed with a stamp.”
“Who sealed them?”
“Inspector Fang. Last spring.”
A big brass lock hangs on the gate. It is as large as a fist. There is a small stamp pressed into the wax: a closed eye, ringed in white. Beside it, a smaller one. It shows an open hand.
Shu Ning breathes in sharply. “That’s a ward-chain mark.”
> force | Try the gate. | stacks_a2s2 | needs:3
> truth | Ask what it holds. | stacks_a2s2
> quiet | Study the lock. | stacks_a2s2
> inquiry | Ask Shu Ning. | stacks_a2s2

=== stacks_a2s2 | A Ward on a Lock
“It’s a double,” says Shu Ning. She has put down her anvil, and is kneeling at the gate with her nose an inch from the brass. “A ward and a lock, one inside the other. The lock holds the door. The ward holds the lock. If you break the lock, the ward wakes.” She draws a breath. “If you break the ward, the lock seizes. You need to do both at once. Or neither.”
“Can you?”
“I can do one. Hao Lan can do the other.” She gestures. “She knows the Chancery’s standing orders. She wrote half of them.”
Hao Lan comes forward with her pencil. She looks at the stamp. She looks at it for a long moment. Then she says, in a voice that is trying to be steady, “It is a word.”
“What word?”
“It is a word that means: keep.” She swallows. “It is the opposite of a strike. It is a preservation order. Fang has not sealed these leaves to hide them. He has sealed them to protect them.”
> force | Ask from what. | stacks_a2s3
> truth | Ask why. | stacks_a2s3
> quiet | Look at the leaves. | stacks_a2s3
> mercy | Ask Hao Lan if she is all right. | stacks_a2s3

=== stacks_a2s3 | From the Fleet
“From us,” says the Reader. She has been silent. “From the rest of the Concord. He has not told his masters about the Closed Stacks. He has put his own mark on them, so that no one else can take them.” She looks up. “He is saving them.”
“For what?”
“For the rewriting.”
Nobody speaks. Hao Lan is staring at the iron, her lips moving. “These are the leaves that tell the truth,” she says slowly. “The political strikes. The people the Concord struck because they were right. They are the proof.” She turns. “If Fang rewrites the Ledger, these are the only copies of what it said before.”
“And he is keeping them?”
“He is keeping them for himself,” says Shu Ning. “So that when the rewriting is done, and he is the only one who remembers, he can read them at night.” She spits. “For company.”
The silence is awful.
> force | Break it. | stacks_a2s4
> truth | Say you will not let him. | stacks_a2s4
> quiet | Wait. | stacks_a2s4
> mercy | Say he is lonely. | stacks_a2s4

=== stacks_a2s4 | Breaking Two Things at Once
You do it as a pair. Shu Ning takes the lock, with a pick and a wedge and a small black hammer. Hao Lan takes the ward, with a quill and a drop of ink. You hold the lantern. Ren Qiao holds the Reader, who has begun to shake. Gu stands at the end of the aisle with his sword drawn, facing the dark, not knowing what he is guarding against.
“On three,” says Shu Ning.
“One,” says Hao Lan.
“Two.”
“Three!”
Shu Ning strikes. Hao Lan writes a single stroke across the stamp. For an instant nothing happens. The lock holds. The ward holds. The brass is cold.
Then a crack runs through the wax. A shiver passes through the cage. The bars chime, all together, like a struck bell, and the lock falls open with a heavy clunk.
The gate swings. A breath of dust and age rolls out. It smells of ink and vinegar and cold ash.
> force | Go in. | stacks_a2s5
> truth | Hold the light. | stacks_a2s5
> quiet | Listen. | stacks_a2s5
> mercy | Check on the others. | stacks_a2s5

=== stacks_a2s5 | The Political Leaves
The shelves are black with age. Each leaf is stored in a sleeve of grey cloth, tied with red cord, and tagged with a number. You open the nearest. It is a petition. It is dated two hundred years ago. It is a request, signed by forty weavers, that the Concord permit the unpicking of a name from a bolt of silk. Under it, in a clerk’s hand, is the note: Refused. Petitioners struck.
You open the next. A magistrate who refused to sign a seal. A priest who preached against the dust. A child who asked in school why the Wall had no name for her mother. A woman who wrote to the Assembly: Why do you take our songs?
They are all there. Each one is a voice. Each one is a leaf with a single line: Struck.
“They’re the people who were right,” says Gu, in a trembling voice. “All of them.”
“Yes,” says the Reader.
“There are thousands.”
“Forty thousand and twelve,” says the Reader. “I have counted.”
> force | Read one. | stacks_a2s6 | needs:3
> truth | Close the sleeve. | stacks_a2s6
> quiet | Hold the lamp. | stacks_a2s6
> mercy | Weep. | stacks_a2s6

=== stacks_a2s6 | The Weaver’s Petition
You read the weaver’s petition silently, in the light of Gu’s lamp. It is eloquent and plain. It asks for a very small thing. It asks that a woman be allowed to take her mother’s name out of a silk. The signatories are named at the foot, forty of them, with their trades and the streets they lived on. Each has put a mark.
The last is a child’s. It is a stitch.
Madam Qi would have known them. She would have known their grandchildren. She would have laughed at the wording and cried at the signatures and said: it is a good bolt.
You lay the leaf down.
“Can they be restored?” you ask.
“They can,” says the Reader. “At a price.” She counts on her fingers. “Forty thousand and twelve. It would take forty thousand and twelve names. There are not that many in the world.”
“Then how many can we do?”
“As many as there are people willing to give a name.” She smiles, faintly. “I think that is the point of the Lotus.”
> force | Say you will find them. | stacks_a2s7
> truth | Say it is not enough. | stacks_a2s7
> quiet | Wait. | stacks_a2s7
> mercy | Say the Court should hear. | stacks_a2s7

=== stacks_a2s7 | The Warden Wakes
The cage rattles. A low grinding sound comes from the dark, from the far end of the aisle, and the lamps flicker. The Reader pulls at your sleeve. Her face is chalk.
“That’s the Warden,” she whispers. “I forgot to tell you.”
“The Warden?”
“A seal. A big one. Fang put it in last spring, to guard the Stacks.” Her small voice is shaking. “It wakes when the ward is broken.”
It is a figure of grey stone, nine feet tall, in the shape of a man in a clerk’s robe. It is made of leaves, tightly pressed, fused, hardened to slate. It has a blank face. It carries a pen the size of a spear.
It rises from its niche at the end of the aisle with a rustle like thunder.
Ren Qiao steps in front of you. “Back,” he says. “Everyone back.”
> force | Fight. | stacks_a2s8
> truth | Call to it. | stacks_a2s8
> quiet | Hide. | stacks_a2s8
> mercy | Ask what it wants. | stacks_a2s8

=== stacks_a2s8 | What the Warden Wanted
It does not attack. It stands in the aisle, enormous and blank, with the great pen held across its chest, and it waits. Ren Qiao raises his sword. Gu cries out. Shu Ning has gone for her anvil.
You step forward. You do not know why. You put out a hand, empty, palm up, and you say what you said to the door: “Hello.”
The Warden’s head turns slowly toward you. Its blank face does not change. But the pen lowers, an inch at a time, until it points at the floor.
It writes. It writes on the stone, with the nib, in great sweeping letters, in the old script of the Law Hall. It writes: I AM TO KEEP. I AM NOT TO HARM.
“It is a protection,” says Hao Lan, wonderingly. “It was set to keep the leaves from being burned. It would never have harmed us. It was only waiting to be told that we were friends.”
The Warden writes again.
FRIENDS?
> force | Say yes. | stacks_close | +stacks_warden needs:3
> truth | Say we mean no harm. | stacks_close | +stacks_warden
> quiet | Bow. | stacks_close | +stacks_warden
> mercy | Hold out your hand. | stacks_close | +stacks_warden

// ---------------------------------------------------------------- a3: the copying
=== stacks_a3s1 | A Copy
“A copy is not a reading,” says Hao Lan, slowly. She has gone to the shelf and drawn out a leaf. She is turning it in her fingers, with her lip between her teeth. “A reading is spoken. The Well hears the voice. But a copy is silent. It is ink on paper.” She looks at the Reader. “Does the Well hear ink?”
The Reader hesitates. “I do not know,” she says. “No one has tried.”
“Then someone should.”
She spreads her satchel. Out come her pens, her ink, her blotter. Out comes a ream of thin white paper, bought that morning in the market. She is smiling, with a spark in her eye that you have not seen since the Chancery.
“It is a loophole,” she says. “In the Library’s rule. The rule says do not read the dead aloud. It says nothing about writing them out.”
“Is that wise?”
“It is extremely unwise,” says Hao Lan. “I would like to do it at once.”
> deceit | Offer to hold the paper. | stacks_a3s2
> truth | Say it feels like cheating. | stacks_a3s2
> quiet | Watch. | stacks_a3s2
> mercy | Ask who she will copy first. | stacks_a3s2

=== stacks_a3s2 | First Copy
She copies Qiu’s leaf first. It takes eleven minutes. She writes in the Concord’s fair hand, in the old script, matching the spacing and the ink. When she has finished she blots it, and holds the new page beside the old. They are identical, save that the copy has no red word at the head.
She has left it off.
“I have not written struck,” she says. “I have written the name, and the date, and the note. I have written the girl who was a reserve. I have not written the word.”
She holds it out.
“Now,” she says. “We see what the Well makes of it.”
The Reader takes the page. Her small hands tremble. She walks to the rail, and holds it out over the gulf. A thin draught is rising from below, damp and cold, smelling of ink. The page flutters.
“I shall send it down,” she says. “As a boat.”
She folds it in three, and then in four, and then into a little paper boat. She sets it on the air.
> deceit | Watch it fall. | stacks_a3s3
> truth | Hold your breath. | stacks_a3s3
> quiet | Look at Hao Lan. | stacks_a3s3
> mercy | Say a prayer. | stacks_a3s3

=== stacks_a3s3 | The Paper Boat
It does not fall. The draught takes it, and it drifts out over the dark, turning slowly, a white sail on a black sea. It sinks a little. It steadies. It sails on, down the long gulf of the Stacks, past gallery after gallery of shelves, and every lamp it passes burns a little brighter.
A sound rises from the depths. It is not a drinking sound. It is a sigh, like a very large animal turning over in sleep. The Well is awake. It is considering.
You hold your breath. Beside you, Hao Lan has put her pencil in her mouth.
The paper boat reaches the bottom. It touches the black water. For an instant, it floats.
Then a light, thin and golden, travels up the shaft from below, from the Well to the Hall, and all the lamps in the Stacks flare at once. A hundred thousand leaves rustle. And in the silence that follows, a clear voice, a girl’s, a little hoarse, says from nowhere: “Qiu.”
> deceit | Cheer. | stacks_a3s4
> truth | Look up. | stacks_a3s4
> quiet | Listen. | stacks_a3s4
> mercy | Weep. | stacks_a3s4

=== stacks_a3s4 | It Worked
Qiu, on the spur, with her mirror in her hand, feels it as a blow between the shoulder-blades. She says later that it was like being tapped on the shoulder by a stranger who then said, Oh, there you are. She sits down on the lamp-room floor. She laughs, and says her name aloud, twice, to the empty room.
Nobody in the Stacks knows this yet. What they know is the voice, and the light, and the quiet that follows. The Reader has her hands over her mouth. Her grey eyes are enormous.
“It listened,” she says. “It listened to a copy.”
“Is that possible?”
“It is not,” says the Reader. “It has never been possible. I have read every rule in the Library. There is no rule that allows it.” She laughs, shakily. “But it did.”
Hao Lan is white to the lips. She is holding the pen with both hands, as if it might fly away.
“Then it was never about the voice,” she says. “It was about the truth.”
> deceit | Say we should do more. | stacks_a3s5
> truth | Ask what it means. | stacks_a3s5
> quiet | Wait. | stacks_a3s5
> mercy | Hug her. | stacks_a3s5

=== stacks_a3s5 | What a Copy Costs
“It costs nothing,” says the Reader. “That is the strange part. I watched the Well. It took no name. It took no price at all.” She is frowning. “Either it was in a very good mood, or the price has been paid already.”
“By whom?”
“I do not know.” She looks at Hao Lan. “Perhaps by the copyist.”
Hao Lan swallows. She tries to speak, fails, tries again. “I wrote it in my own hand,” she says. “I signed no name. But I wrote the date.” She presses a hand to her throat. “I wrote the day of the Sealing. I have never written that date without pain.”
“Is that the price?”
“I don’t know. Perhaps.” She smiles shakily. “I feel quite well. I feel a little hollow.”
She takes up the pen.
“I should like to do more,” she says. “While I still can.”
> deceit | Fetch ink. | stacks_a3s6
> truth | Warn her. | stacks_a3s6
> quiet | Bring paper. | stacks_a3s6
> mercy | Help her. | stacks_a3s6

=== stacks_a3s6 | The Scriptorium
They work for three days. Hao Lan sits at a table in the Reading Hall, among the paper-clerks, copying names. The clerks do not look up. But as she writes, one by one, they begin to write too. Pens rise at three hundred desks. Pages fill. By the second night the Hall is a roar of quill on paper, a sound like heavy rain.
The Reader carries the copies to the rail, and folds them into boats, and sends them down. Qiu comes to help, with her mirror and her slate. Ah Zhi comes with sandwiches. Bao Er arrives with Mother Hsu, who sits in the corner with the Songbook in her lap and sings softly to herself. Lu Yan checks pulses.
They copy the baker. They copy Bian. They copy Ming of the mill. They copy a child on the Wall, a weaver, a priest, a girl who asked a question.
By the third night, Hao Lan has copied four hundred and nine.
She falls asleep at the table, with her cheek on the page, still holding the pen.
> deceit | Carry her to bed. | stacks_a3s7
> truth | Take the pen. | stacks_a3s7
> quiet | Cover her. | stacks_a3s7
> mercy | Stay by her. | stacks_a3s7

=== stacks_a3s7 | What She Paid
In the morning she wakes. She has a crick in her neck and ink on her chin. She looks at the stack of pages and at you.
“Good morning,” she says. “Who are you?”
Your heart stops.
She smiles. “That is a joke,” she says. “I am sorry. It is a very poor one. I couldn’t resist.” She stretches. “I am quite well. I remember everything.”
You breathe again.
“Almost everything,” she adds. She frowns. “There is a small gap. Something I wrote. A figure.” She rubs her forehead. “It was a date, I think. The date of my first day at the Chancery. I can’t recall it.”
She shrugs.
“It doesn’t matter,” she says. “It was only a date. I have forty thousand others.”
She almost means it.
> deceit | Say nothing. | stacks_a3s8
> truth | Tell her it matters. | stacks_a3s8
> quiet | Smile. | stacks_a3s8
> mercy | Hold her. | stacks_a3s8

=== stacks_a3s8 | A Cheap Miracle
It is the cheapest miracle in the world. It costs a clerk her first day at work. It costs a pen, a ream of paper, three days of her life. And it works. Four hundred and nine names come back to the Ledger, one after another, without a single reader paying the Well a name.
In Tidewall they feel it as a warmth in the Wall. The fishermen put on their hats. Auntie Pan comes down to the quay and looks up at the sky. A woman at the Ward sits up in her cot and says, in a clear voice, “Meilin.” A man on the step of the dye-works looks at his hands.
In the Reading Hall, Hao Lan sits at her table with her chin on her fist, looking at a stack of pages as tall as she is.
“There are forty thousand,” she says.
“There are,” you say.
“It will take me ninety years.”
She picks up her pen.
“I had better start,” she says.
> deceit | Sit with her. | stacks_close | +stacks_copied
> truth | Promise to help. | stacks_close | +stacks_copied
> quiet | Fetch tea. | stacks_close | +stacks_copied
> mercy | Hug her. | stacks_close | +stacks_copied

// ---------------------------------------------------------------- a4: the archivist
=== stacks_a4s1 | A Question for the Staff
You sit down on the gallery floor with your back to the rail. You do not speak. You wait. After a time, the nearest paper-clerk lifts his head. He is a stooped figure of folded leaves, with a face as blank as a sheet. He tilts it toward you, courteously, and a line of ink crawls across it.
How long have we waited?
You do not know what to answer. You say, quietly, “Since the great tide?”
The ink pauses. Then, one character at a time, it spells: Longer.
“How much longer?”
He rises. He is slow, and rustling, and polite. He crooks a finger of folded paper, and beckons. Others rise around him, from desks and shelves and galleries, a silent rustling congregation, and form a procession. They go down the aisle in single file.
“They want you to follow,” says the Reader, in a hush.
> quiet | Follow. | stacks_a4s2
> truth | Take Gu’s hand. | stacks_a4s2
> mercy | Help the Elder up. | stacks_a4s2
> inquiry | Ask where they are going. | stacks_a4s2

=== stacks_a4s2 | The Procession
They lead you down a long gallery, and around, and down, and around again. The lamps change colour as you descend: green, rose, amber, a pale cold blue. The shelves grow older. The leaves are darker. The paper-clerks do not speak. They go ahead of you in their silent file, a rustle of folded pages, and where they pass the lamps burn higher.
At the bottom there is a door. It is a plain oak door, small and low, in a wall of black stone. A paper-clerk stands before it. He is taller than the others, and older, with a beard of curled leaves. He carries a ring of iron keys.
He bows to you. A line of ink crosses his blank face.
It spells: I AM LIAN. HEAD ARCHIVIST. WELCOME TO THE ANNEX.
He pauses. The ink writes again.
I HAVE BEEN WAITING FOR YOU SINCE THE YEAR OF THE TIDE.
> quiet | Bow. | stacks_a4s3
> truth | Introduce yourself. | stacks_a4s3
> mercy | Greet him warmly. | stacks_a4s3
> inquiry | Ask why he has waited. | stacks_a4s3

=== stacks_a4s3 | Lian
He tells you in ink. It takes an hour. He writes on a long strip of paper which the Reader holds, unrolling it hand over hand, and you read as it appears. His script is exquisite. His account is dry, precise, and without self-pity.
The Annex was founded seven hundred years ago, he writes, to keep the leaves that the Ledger struck. It was a library of the dead. It was staffed by archivists, copyists, readers, and a songkeeper. It was beautiful.
Eighty years later the Concord began to strike more than it could keep. The Annex grew. New galleries were cut. The staff was doubled.
A hundred and eighty years ago, the tide came in. The sea rose over the Wall, over the harbour, over the Annex’s upper floors. The Concord sent word that the Library was to be evacuated. The staff, a hundred and forty souls, voted to stay.
YOU STAYED, you say.
WE STAYED, he writes. WE HAD NOT FINISHED.
> quiet | Ask what happened. | stacks_a4s4
> truth | Say it was brave. | stacks_a4s4
> mercy | Touch his sleeve. | stacks_a4s4
> inquiry | Ask what you owe. | stacks_a4s4

=== stacks_a4s4 | The Price
He answers the last question first, as an archivist should. He writes: THE WELL TAKES ONE NAME FOR EACH NAME IT WRITES. THAT IS ITS LAW. IT WAS NOT MADE BY US. IT WAS MADE BY THE SAINT.
You look at him. “Ling made the Well?”
SHE MADE THE ANNEX, he writes. SHE MADE THE WELL. SHE MADE THE LAW OF THE EXCHANGE. IT WAS HER IDEA OF JUSTICE. A NAME RESTORED IS A NAME OWED. IF NO ONE PAYS, THE NAME IS A LIE.
The strip of paper unrolls further. His ink is steady.
SHE SAID: NOTHING IS FREE. NOT MERCY, NOT TRUTH, NOT THE LEDGER. IT MUST COST SOMEONE, OR IT IS NOT REAL.
The Elder, behind you, makes a soft sound.
“It is the opposite of the Law Hall,” she says. “We believed a name could be struck for nothing.”
LIAN INCLINES HIS HEAD.
THE LAW HALL WAS ALWAYS WRONG, he writes.
> quiet | Smile. | stacks_a4s5
> truth | Ask what Ling was like. | stacks_a4s5
> mercy | Ask if he is lonely. | stacks_a4s5
> inquiry | Ask what happened to her. | stacks_a4s5

=== stacks_a4s5 | Ling
SHE WAS TALL, he writes. SHE WAS STOOP-SHOULDERED AND SHORT-SIGHTED. SHE CARRIED A BAG OF LEMONS. SHE ATE ONE EVERY AFTERNOON, PEELED, WITH SALT.
You laugh. It surprises you.
SHE WAS THE FIRST SONGKEEPER AND THE LAST HEAD ARCHIVIST, he writes. SHE HELD BOTH POSTS. SHE DID NOT SLEEP MUCH. SHE USED TO WALK THE STACKS AT NIGHT, WITH A LAMP, TALKING TO THE LEAVES.
The ink slows.
SHE WAS STRUCK AT THE PETITION OF THREE FOUNDING MASTERS. SHE KNEW IT WAS COMING. SHE CAME HERE THE NIGHT BEFORE, AND SAT AT HER DESK, AND WROTE.
“What did she write?” you whisper.
The paper-clerk lifts his blank face. For a long moment the ink does not move. When it does, it spells a single sentence.
SHE WROTE THE NINE CARDS.
> quiet | Take a breath. | stacks_a4s6
> truth | Say you have them. | stacks_a4s6
> mercy | Hold the Elder’s hand. | stacks_a4s6
> inquiry | Ask what else. | stacks_a4s6

=== stacks_a4s6 | What Else
SHE WROTE THE NINE CARDS AND SENT THEM TO THE LAW HALL, IN A PACKET, TIED WITH A LEMON-COLOURED RIBBON. SHE ADDRESSED THEM TO THE REGISTRAR, WHOEVER SHOULD HOLD THAT SEAT.
The Elder has sat down on the floor. Her hand is at her mouth.
“I got no packet,” she whispers.
THE PACKET WAS INTERCEPTED, writes Lian. THE CARDS WERE TAKEN BY THE MASTER OF THE EAST DORMITORY OF THAT AGE, WHO PUT THEM ON THE COTS OF THE RESERVE. HE DID NOT READ THEM. HE THOUGHT THEY WERE LABELS. THEY HAVE LAIN ON THE RAILS EVER SINCE, FROM RESERVE TO RESERVE, NINE CHILDREN AT A TIME.
“So no Registrar ever knew what they were.”
NONE DID. THE SAINT HAD INTENDED THEM FOR THE SEAT. THE REGISTRAR WAS TO READ THEM, AND DISTRIBUTE THEM, AND KNOW. THE REGISTRAR WAS TO BE THE KEEPER OF THE NINE.
He pauses.
INSTEAD EVERY REGISTRAR WAS GIVEN A SIGNING PEN, AND TOLD TO SIGN.
> quiet | Say nothing. | stacks_a4s7
> truth | Look at the Elder. | stacks_a4s7
> mercy | Take her in your arms. | stacks_a4s7
> inquiry | Ask Lian whether she can still do it. | stacks_a4s7

=== stacks_a4s7 | The Keeper of the Nine
The Elder weeps. She does it without sound, with her hands folded, sitting on the floor of the Stacks with her silver comb loose in her hair. She weeps for a long time. The paper-clerks stand round her in a ring, silent, with their blank faces turned away, as a mourning party turns.
When it passes she wipes her eyes. She tucks a strand of hair behind her ear.
“I should like to try,” she says. “To be the keeper. If it is not too late.”
The ink writes. IT IS NOT TOO LATE.
“I have no cards.”
YOU HAVE ONE, writes Lian. He turns his blank face to you. THE REST YOU WILL GATHER. THE SAINT PLANNED IT. SHE PLANNED EVERYTHING, EXCEPT THAT SHE WOULD BE STRUCK SO SOON.
The ink dries.
PLEASE, writes Lian, SIT WITH ME AWHILE. IT IS A LONG TIME SINCE I HAD COMPANY.
> quiet | Sit. | stacks_a4s8
> truth | Say you will. | stacks_a4s8
> mercy | Bring the others. | stacks_a4s8
> inquiry | Ask what he reads. | stacks_a4s8

=== stacks_a4s8 | A Long Afternoon
It is the longest afternoon of your life. It is also the sweetest. You sit in a ring of paper-clerks at the foot of the Stacks, among the dust and the lamps, and Lian writes. He writes of the Annex’s great days, of the lemon-eater’s lectures, of a Songkeeper named Pao who used to hum at the reading desk until the readers complained. He writes of the night the water came. He writes of the long slow decades after, when the staff read to one another.
He writes of the Reader.
SHE WAS THE LAST TO COME, he writes. A CHILD OF TEN, FROM THE HARBOUR. SHE WALKED IN AT THE TIDE-DOOR AFTER THE FLOOD, WITH A LAMP. WE DID NOT KNOW HER.
“Who was she?”
The ink hesitates. It writes, in small, careful characters: WE STILL DO NOT.
At your elbow, the Reader looks up from the floor, with her chin on her knees. She smiles.
“I think I was struck,” she says. “I think that is why I am here.”
> quiet | Smile. | stacks_close | +stacks_sat_with_lian
> truth | Ask if she wants to find out. | stacks_close | +stacks_sat_with_lian
> mercy | Take her hand. | stacks_close | +stacks_sat_with_lian
> inquiry | Ask Lian if her leaf is here. | stacks_close | +stacks_sat_with_lian

// ---------------------------------------------------------------- hidden: Ke-er's leaf
=== stacks_h1 | A Girl Under the Wall
The Reader’s face changes. The calm goes out of it. For the first time since you met her, she looks her age: ten years old and afraid. She puts down her lamp. “I know who you mean,” she says. “She is in the Closed Stacks. She is in the first box. It has a black ribbon.”
“Will you show me?”
“I will.” Her lip trembles. “But you must not read it aloud. Not yet.”
She leads you to a niche in the far wall, near the Closed cage. In it, on a plain shelf, stands a small box of black wood tied with a black ribbon. A paper tag is pinned to the lid. It bears two characters in an old script, and a date, and a word in red.
Ke-er.
Struck.
You take the box in both hands. It is cool and surprisingly heavy. The ribbon is velvet. It has been tied by someone who loved it.
“She is not here,” says the Reader. “Not all of her. Only the leaf. The rest is under the Wall.”
> inquiry | Open it. | stacks_h2
> truth | Hold it. | stacks_h2
> mercy | Fetch Mei. | stacks_h2
> quiet | Wait. | stacks_h2

=== stacks_h2 | The Leaf of Ke-er
Mei Qiu comes down the Stacks at a run. She has her bar in her hand. She sees the box and stops. She stands in the lamplight for a long time, quite motionless. Then she sits down on the floor, slowly, and puts out both hands.
You give her the box.
She unties the ribbon. Inside, on a bed of grey silk, lies a single leaf, no bigger than a hand. It is pale gold, thin as breath. At its head, in the script of the Law Hall, is a child’s name. Below it a date. Below that, in a clean small hand, a note: Bearer, Salt Coast. Willing. Sealed at the petition of the Seventh Chancery.
Beside it is a second note, in another hand, in pencil, faint: She was not willing. She was told it would not hurt.
“Who wrote that?” says Mei Qiu.
“I do not know,” says the Reader. “It was there when I found it.”
Mei Qiu touches the pencil with a fingertip. Her face is quite blank.
“I know the hand,” she says. “It is mine.”
> inquiry | Say nothing. | stacks_h3
> truth | Ask when she wrote it. | stacks_h3
> mercy | Take her shoulder. | stacks_h3
> quiet | Wait. | stacks_h3

=== stacks_h3 | The Choice of an Inspector
“I wrote it the morning after,” says Mei Qiu. “At the guard-house. In my cell. I got a stub of pencil from the sergeant. I had nowhere to put it. I wrote it on the back of my hand.” She gives a short unsteady laugh. “I must have slipped it into the box when they took me to the Annex that week.”
She is quite calm. Her hands do not tremble.
“I never remembered doing it,” she says. “I thought I had forgotten.” She lifts the leaf by its edges. “I want to read it.”
“It will cost a name.”
“I know.” She looks at you. Her hard clear grey eyes are shining. “I will pay. I have twenty-eight years of names. I can spare one.”
“Which?”
“I do not know yet,” says Mei Qiu. She smiles, tremulously. “I think I shall let the Well choose.”
She lays the leaf on her knee.
“Ke-er,” she says. “It’s Mei. I’m going to say it now.”
> inquiry | Hold her hand. | stacks_close | +stacks_ke_er_leaf
> truth | Stand beside her. | stacks_close | +stacks_ke_er_leaf
> mercy | Say her sister’s name with her. | stacks_close | +stacks_ke_er_leaf
> quiet | Step back. | stacks_close | +stacks_ke_er_leaf

// ---------------------------------------------------------------- close
=== stacks_close | A Name Written Back
The Stacks hum. The lamps burn steady and gold. Deep in the Well, something stirs, and settles, and is still. The shelves around you are very quiet. Nothing has changed, and everything has.
+[how] stacks_read_aloud | You read the Registrar’s leaf aloud, and the Well took the woman who raised you.
+[how] stacks_warden | A nine-foot warden of pressed leaves wrote FRIENDS, and lowered its pen.
+[how] stacks_copied | Hao Lan copied four hundred and nine names without a price, and lost the date of her first day.
+[how] stacks_sat_with_lian | You sat with the Head Archivist, and he told you how the cards were written.
+[how] stacks_ke_er_leaf | Mei Qiu said her sister’s name aloud, in the Stacks, with her hand on a golden leaf.
+[extra] stacks_paid_fostermother | There is a smell of sour milk and woodsmoke at the edge of your mind, and you cannot place it.
The Reader has been standing at the rail, looking down. She turns. She is smiling.
“I have not seen anything like that in a hundred and eighty years,” she says. “Thank you. I think it was good for the lamps.”
She holds out her hand, and in it is a brown card, soft with age.
“I think this is meant for you,” she says. “I found it in the first box. It has no number.”
> truth | Take it. | stacks_close2
> mercy | Ask whose it was. | stacks_close2
> quiet | Hold it up to the light. | stacks_close2
> inquiry | Read the back. | stacks_close2

=== stacks_close2 | The Card Without a Number
It is blank on the front. It has no numeral. It has a faint mark in the corner where a numeral might once have been, and been scraped away. You turn it over. The line on the back is written in the same faded hand as the rest.
It says: Open what is shut.
You stare at it.
“VIII,” says the Elder, softly. “Lin Yuan’s.”
“It was in the box,” says the Reader. “With the ribbon. It was put there by someone who wanted it kept safe, until he could be sent for.”
“Who put it there?”
“I do not know.” Her grey eyes are very clear. “But the writing on the label is yours.”
She points. On the brown paper tag, in a small clerk’s hand you have seen on a hundred ledgers, is a note: Keep for the boy. —S.W.
The Elder has gone absolutely white.
“I did that,” she says. “Fifteen years ago. The night of the Sealing. I took it off the rail with the boy, and I put it in a drawer.” She puts her hand to her mouth. “I forgot I had done it.”
> truth | Give her the card. | hub_b3_coast | +b3q_stacks +card_8 bond:mi+3
> mercy | Hold her hand. | hub_b3_coast | +b3q_stacks +card_8 bond:mi+3
> quiet | Pocket the card. | hub_b3_coast | +b3q_stacks +card_8 bond:mi+3
> inquiry | Ask where Lin Yuan is. | hub_b3_coast | +b3q_stacks +card_8 bond:mi+3

`,
  scenarios: String.raw`
$ SU_STACKS_READ | trust+3 respect+4 fear+1 | elder | The Elder walks the Stacks of Leaves and learns what a name costs.
hostile: I have written ten thousand strikes. I find, standing here, that I cannot recall a single reason. There were reasons. I am sure there were reasons. They were all on a form.
wary: Somebody has dusted each of these leaves every year for a hundred and eighty years. Somebody has loved them. It was not the Concord.
neutral: The Reader asked me if I would like to find my own leaf. I said no. She said that most people did. She said it was a sign of sense.
warm: I found my sister’s. Not Mengjiao’s. The other. The one I do not speak of. I did not read it aloud. I held it for an hour, and I put it back where I found it, and I felt better.
devoted: If a name is to be paid for, I should like to pay. I am old and my name is used up. I should be glad to give it to the Well in exchange for a child’s.
`,
  remarks: String.raw`
% stacks_reader_later | since:b3q_stacks>=4 | gu | The Reader wrote to Qiu. She did not use ink. She sent a leaf. Qiu says it was blank but warm.
% stacks_qiu_later | since:stacks_ke_er_leaf>=5 | hao | Mei Qiu keeps her sister’s leaf in a black box and does not open it. I asked what the Well took from her. She said she has not yet found the gap. I think she is afraid to look.
`,
};
