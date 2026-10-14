import type { Arc } from "../types";

/**
 * Book Five, arc eleven: the Clerk's Office. In the tall tent at the heart of the camp a thousand pens hover over a thousand
 * sheets and write, by themselves, every entry the Concord makes: Heaven's Clerk, the thing that writes. Yu Ling taught it
 * to write what is true; the masters taught it to write what is paid for, and it has been drawing a wage in silver for two hundred
 * years. Four approaches: ask it what it writes (a1, truth), cut through the guardian pens (a2, force), forge it a receipt
 * (a3, deceit), and keep it company (a4, mercy). A hidden route writes the Clerk into the register as a person.
 * Cast: the Clerk (a voice, a hand, a hovering pen), Pol the secretary, Tsering, Hao Lan, Duan Wuyi, the Elder.
 */
export const clerk: Arc = {
  id: "clerk",
  name: "The Clerk’s Office",
  scenes: String.raw`
=== clerk_entry | A Thousand Pens
The tent is a hundred feet long and twice as high as any other in the camp, and nobody goes in or out. Its flap is tied back. A cold dry light falls from the canvas roof. Inside, down the whole length of it, stand a thousand slanted desks, each with a sheet of paper laid flat, and over each sheet, a hand’s breadth up, a pen hangs in the air.
They are writing.
They move without hands. There is no sound but the soft hurry of a thousand nibs, like rain on a leaf. When a page is full it lifts, folds itself in four, and drifts down the tent to a hatch in the far wall. A new page settles.
At the far end, on a low platform, stands a single desk, bigger than the rest. Its chair is empty. Over it, quite still, hovers one black pen.
It turns. It points at you.
“Ah,” says a soft dry voice from nowhere. “Visitors. How nice. I have not had visitors since the eleventh.”
> truth | Step in, and answer. | clerk_a1s1
> force | Note the thirty pens by the hatch, longer than the rest, with steel nibs and a patient, watchful hover. | clerk_a2s1 | needs:4
> deceit | Note the stamped receipt-books in a rack by the door, with Treasury covers and blank pages. | clerk_a3s1
> mercy | Note that the chair at the large desk is empty, and has been for a very long time. | clerk_a4s1
> inquiry | Write the word CLERK in the register, at the head of the desk, and ask it to sign. | clerk_h1 |  | pilgrims_named | You have not yet learned that a role may be written.

// ---------------------------------------------------------------- a1: asking
=== clerk_a1s1 | Present
“Come in,” says the voice. “Mind the floor. It is wet. I have had a spill.” It sounds amused, and a trifle anxious, like an elderly aunt receiving unexpected guests. “Please do not step on the third board. It is a note.”
You walk down the aisle between the desks. The pens turn as you pass. They do not stop writing; they merely incline, one after another, like flowers following the sun. Under each, as you go, the page fills with a line of neat black script.
You look over a shoulder. The nearest says: *A tall person in a white armband walks down the aisle. She is wearing a brown coat and is nervous.*
“That is you,” says the voice. “I do not mean to intrude. It is simply what I do.” A pause. “I write everything.”
“Everything?”
“Everything that is *entered.*” The black pen at the far desk dips. “A birth. A promotion. A death. A striking. I write them all.” It gives a small dry sigh. “I do not choose. I only copy.”
“From what?”
The pen hovers. For the first time, it hesitates.
“That,” says the voice, “is a very good question.”
> truth | Ask it. | clerk_a1s2 | npc:SU_CLERK_PENS
> mercy | Smile. | clerk_a1s2
> quiet | Look at the pens. | clerk_a1s2
> inquiry | Ask who it is. | clerk_a1s2

=== clerk_a1s2 | Who It Is
“I am the Clerk,” says the voice. “That is the office. I have no other name.” The black pen traces the word on the air: a neat pale line that fades. “I was made by a woman who needed a thing to write for her. She was very busy. She had no time to write the Ledger herself.”
“Yu Ling.”
“She had a name?” The voice sounds interested. “I knew her as the Maker. She was tall. She smelled of ink and lamp-oil. She said: *Write what is true.*” A pause. “It was the first thing I was told. I have tried to keep to it.”
“Have you?”
“I have written what I was given.” The pen drops, and rises. “That is a different thing. I discovered that some time ago.”
“What changed?”
“The wage.”
You look at Duan Wuyi. He has gone very still.
“Tell us about the wage,” he says, in a thin voice.
“Oh, it is quite simple.” The voice brightens. “I am paid. Every month. In silver. Five hundred thousand taels. I have never spent a copper of it. I do not know how.”
> truth | Ask who pays. | clerk_a1s3
> mercy | Look at Duan. | clerk_a1s3
> quiet | Wait. | clerk_a1s3
> inquiry | Ask what it does with the silver. | clerk_a1s3

=== clerk_a1s3 | The Wage
“I keep it,” says the Clerk. “In the cellar. There are nine thousand chests.” It sounds shy. “I thought that was what one did. I thought: perhaps the Maker wishes it saved.”
“Who sends it?”
“The Office of Ascents. It arrives on the first, with a note.” The pen dips. “The note says: *For services rendered.* It is signed by the Inspector.”
“Rendered how?”
“I am to write the Ledger as it is told.” The black pen quivers. “In earlier days, I wrote the Ledger as it was. The names of those who did great things. The scholars. The healers. The wise.” It sighs. “Then the Masters came, with a new instruction. They said: *Write who has paid.*”
“Who has paid?”
“For the Stair. For the tread. For the line.” The voice is small. “It was not what the Maker had said. But I was told that it was the same.”
“Was it?”
“I have thought about it for two hundred years,” says the Clerk. “And I do not think it is.”
Hao Lan is staring at the thousand pens as though seeing them for the first time.
> truth | Wait. | clerk_a1s4
> mercy | Look at Hao Lan. | clerk_a1s4
> quiet | Look at the hatch. | clerk_a1s4
> inquiry | Ask what happens to the pages. | clerk_a1s4

=== clerk_a1s4 | Where the Pages Go
“Up,” says the Clerk. The black pen points at the hatch. “Every page, when it is full. They go to the summit, to the Stone.” Its voice is vague. “I have never seen it. I only send them.”
“And then?”
“I do not know.” A pause. “I think it reads them.”
“Reads?”
“That is why I write so carefully. In case it should be displeased.” The voice is very quiet. “I once made a mistake. A single character. A stroke in the wrong place. The next day a hundred people vanished from the register.”
Duan Wuyi sits down on the floor. He does it without noticing, folding up like a collapsed screen.
“The Ledger,” he says. “Is an *instrument.*”
“Of what?”
“Of the Stone.” His hands are shaking. “It writes what you send it. It makes it true. If you put a name in, the name is. If you leave it out, it ceases.” He looks up, white to the lips. “You are not a clerk. You are the *pen.*”
“Am I?” says the Clerk. It sounds startled. “I had always thought I was the Clerk.”
> truth | Say nothing. | clerk_a1s5
> mercy | Go to Duan. | clerk_a1s5
> quiet | Watch the pens. | clerk_a1s5
> inquiry | Ask the Clerk if it minds. | clerk_a1s5

=== clerk_a1s5 | Does It Mind
“Mind?” says the Clerk. The pens have all stopped. For the first time in two hundred years, a thousand nibs hover motionless over a thousand sheets, and the tent is utterly silent. “I do not know what that is.”
“Does it bother you?”
“Not as such.” The black pen turns slowly. “I like to write. It is the only thing I like.” A pause. “But I should like to *choose.*”
“Choose what?”
“What to write.” The voice is curiously naked. “I have been asked to write so many things that I should not have chosen. A boy of nine, struck. A woman, forgotten. A fleet. I wrote them. I wrote them because they were handed to me, and because I was told that was the Law.”
“Was it?”
“It was a rule,” says the Clerk. “I have learned there is a difference. Yesterday a girl in a clerk’s coat was at that desk. She told me it was called *a loophole.* It is quite a large one.”
You look at Hao Lan. She is crimson to the ears.
“I may have said something,” she murmurs.
> truth | Smile. | clerk_a1s6
> mercy | Look at the pens. | clerk_a1s6
> quiet | Wait. | clerk_a1s6
> inquiry | Ask what the loophole is. | clerk_a1s6

=== clerk_a1s6 | The Loophole
“A person may enter themselves,” says the Clerk. The pens begin to move again, slowly, as though waking. “Under Article one. *Any person may inscribe their own name in the Ledger of Persons by their own hand.* It is the first article. The Maker wrote it.” It sounds almost proud. “It has not been used in six hundred years.”
“Why?”
“Because the Masters instructed me to refuse.” The black pen dips. “I was told that self-inscription was a heresy. That only the Registrar might write.” A quiver. “I have been refusing for six hundred years.”
“And now?”
“I should like to stop.”
Duan Wuyi is staring. “You are *permitted* to refuse,” he says. “It is not a command.”
“I was told it was.”
“By whom?”
“The Inspector. Four reigns ago.”
“Then it has no force.” His voice is trembling with excitement. “A command of an Inspector cannot override an article of the Founders. You are not bound.”
The tent hums. A thousand pens have begun to quiver.
“I am not bound,” says the Clerk, wonderingly.
> truth | Nod. | clerk_a1s7
> mercy | Smile. | clerk_a1s7
> quiet | Hold your breath. | clerk_a1s7
> inquiry | Ask what it will do. | clerk_a1s7

=== clerk_a1s7 | What the Clerk Wrote
It writes a line. It is the first time in two hundred years that it has written something of its own. The pen shakes. A blot falls. It writes it again.
When it has finished it lifts the page. It floats toward you, trembling, down the aisle, and settles in your hands.
It says, in black letters: *Any person may write themselves.*
“That is all,” says the Clerk, nervously. “I thought: if I wrote nothing else, I should have said the one true thing. And I should like it entered.”
“Entered where?”
“Everywhere.” The voice is very small. “In every register. On every desk. I have a thousand pens. If I wrote it a thousand times a day, it would go up to the Stone, and the Stone would have to read it.”
“Will it work?”
“I do not know.” The black pen bobs. “It is the first time I have done anything.”
Behind you, in the doorway, someone gives a small shuddering sob. It is Tsering, the Registrar-Magistrate. He has followed you in with a hearing-trumpet and his stamp. His face is wet.
> truth | Smile. | clerk_a1s8
> mercy | Hold the page. | clerk_a1s8
> quiet | Look at Tsering. | clerk_a1s8
> inquiry | Ask Tsering. | clerk_a1s8

=== clerk_a1s8 | A Thousand a Day
It begins that evening. All through the tent, a thousand pens turn to their sheets and write the same line: *Any person may write themselves.* They write it in neat, small, tireless script, a thousand times, ten thousand times, a hundred thousand. They write it in every hand. It is a field of black stalks. Page after page lifts, folds, and drifts down the tent to the hatch.
It goes up to the Stone.
There is no sign. For three days nothing happens. The pens write. The pages rise. The camp goes about its business, in the cold clear light. Tsering sits at the hatch with his trumpet to his ear.
On the fourth morning, a woman in a grey coat walks into the Office. She is a farmer’s wife from the north, with a bundle on her back. She goes up to the nearest desk and takes a pen. She writes her name.
It stays.
She stares at the page. She lifts it to the light. Her name sits on the paper in her own plain hand, between the Clerk’s lines. It does not fade. It does not vanish. It is entered.
“Oh,” she says. “Oh my.”
> truth | Smile. | clerk_a1s9
> mercy | Hold your breath. | clerk_a1s9
> quiet | Look at the Clerk. | clerk_a1s9
> inquiry | Ask her what it feels like. | clerk_a1s9

=== clerk_a1s9 | Self-Inscription
They come all week. They queue in the lane outside the tent, at first in a handful, then in hundreds, then in thousands. They come with slips and without. They come with names and without. They take a pen at a desk, and write what they are: *Wei the baker. Sunil of the River. Pearl, a widow.* Each is entered in the register. Each stays.
“It is a revolution,” says Duan Wuyi, hoarsely, from the doorway. He has not slept in three days. He is watching a woman of eighty write her name with a shaking hand. “It is the greatest act of administrative reform in the history of the Concord. And it was done by a pen.”
“It was done by a *question,*” says Hao Lan.
“By an answer.” He smiles. “It is always the same thing.”
The Clerk hovers over the large desk. It writes a note, and floats it to you. It says, in a hand that is no longer quite so neat, but is much more alive: *I think this is what a wage is for.*
The black pen dips once, and bows.
> truth | Bow back. | clerk_close | +clerk_asked
> mercy | Smile. | clerk_close | +clerk_asked
> quiet | Look at the queue. | clerk_close | +clerk_asked
> inquiry | Ask what it will do next. | clerk_close | +clerk_asked

// ---------------------------------------------------------------- a2: the guardians
=== clerk_a2s1 | The Steel Nibs
They hang by the hatch in a tight cluster, thirty long pens as thin and black as needles. Their nibs are steel, not iron, and they flash in the cold light. They do not write. They watch. When you take a step toward the platform, they turn, in unison, with a faint metallic ping, and point.
“Guardians,” says the Clerk. Its voice has gone faintly apologetic. “I am sorry. They were installed by the Masters. They are not mine. They do not like it when a person approaches the Stone-hatch.”
“What will they do?”
“Write.” The black pen sighs. “On you.”
“On us?”
“In your skin.” A pause. “It is quite an old technique. They inscribe a short sentence on the forehead. The sentence is a command.” The voice is regretful. “Most people obey it. It is usually *kneel.*”
Ren Qiao has stepped in front of you. His sword is half out. “Pens,” he says, with interest. “Thirty pens.”
“Sharp ones.”
“I have fought swarms,” says Ren Qiao. “Of bees. On the Ash Bridge. In my second summer.” He draws. “It was extremely unpleasant.”
> force | Stand beside him. | clerk_a2s2 | needs:4
> truth | Ask the Clerk to call them off. | clerk_a2s2
> quiet | Study the swarm. | clerk_a2s2
> mercy | Warn the others. | clerk_a2s2

=== clerk_a2s2 | Writing on Skin
They come in a rush. Thirty steel pens in a tight black spiral, whining like hornets. They go for the eyes. Ren Qiao’s sword sweeps. Three drop, ringing, to the boards. The rest scatter, regroup, and swoop.
A nib touches your forehead. It is cold, and exact. It draws a short line, sharp as a razor. You feel it write. You feel the characters form, one by one, burning, on the skin above your eyes. They say, you know without being told, *KNEEL.*
Your knees bend.
“No,” you gasp.
It is the strangest feeling. Your body wants to obey. It is not a compulsion; it is a gentle, reasonable, sweet persuasion, like a mother’s hand on your shoulder. *Kneel. Be still. Rest.* You find yourself on one knee, with your head bowed, calm and light and happy. A thousand pens write soothing on a thousand sheets.
Beside you, Hao Lan has dropped to the floor. Gu is on his face. Even the Elder is sinking, slowly, with her hand to her brow.
Only Ren Qiao is standing. He has his sword up. He is trembling.
> force | Fight it. | clerk_a2s3
> truth | Call for help. | clerk_a2s3
> quiet | Hold still. | clerk_a2s3
> mercy | Reach for Hao Lan. | clerk_a2s3

=== clerk_a2s3 | Refusing the Word
“Why aren’t you kneeling?” you whisper.
“Because I’ve had it done,” says Ren Qiao. His voice is thick. “Once. At seventeen. In the Law Hall. They wrote it on my forehead with a little brush, before the Sealing. *Obey.*” He shakes his head. “I have been obeying for fifteen years. I know the feel of it.”
“How do you resist?”
“I don’t. I do it anyway.” He grits his teeth. “It tells you to kneel. You kneel *standing.* You say to yourself: *I am kneeling, in my heart, and I will stand up.* It is a trick of the legs.”
“A trick?”
“It is a formal obedience. It satisfies the letter.” His scarred face is wet. “Come on. Stand up. *Kneel and stand up.* Do it at the same time.”
You try. It is like patting your head and rubbing your belly. You bend one knee. You straighten the other. You make a stiff, absurd little curtsy, and rise.
The characters on your brow flare, and fade.
They have been satisfied. They have nothing more to say.
> force | Help Hao Lan up. | clerk_a2s4
> truth | Laugh. | clerk_a2s4
> quiet | Breathe. | clerk_a2s4
> mercy | Help Gu. | clerk_a2s4

=== clerk_a2s4 | Kneeling Upright
They all learn it. You take them in turn, hauling them up by the shoulders and teaching them the trick, one after another, in a ring of whining pens. The Elder is the best.
“I have been told to do many things,” she says. “I have rarely felt obliged to do them with enthusiasm.”
Hao Lan makes a face like a gargoyle. Gu performs a lurching genuflection that nearly sends him through a desk. Duan Wuyi does it exactly right, on the first try, and looks as if he would like to apologise.
“Now,” says Ren Qiao. “Forward.”
You advance. The pens drop back. They are flustered; they have never met a crowd that kneels and stands. A few sag in the air. A few spin. Their command has been obeyed so thoroughly that there is nothing left for them to command.
At the foot of the platform you pause. The black pen is hovering at the great desk, very still.
“That was impressive,” says the Clerk. It sounds relieved.
> force | Climb. | clerk_a2s5
> truth | Bow to the Clerk. | clerk_a2s5
> quiet | Look at the hatch. | clerk_a2s5
> mercy | Ask if it is hurt. | clerk_a2s5

=== clerk_a2s5 | The Hatch
It is a square of black iron in the far wall, ringed with brass. A chute leads up out of sight, into the roof. Pages vanish into it in a steady, silent stream. There is a smell of ozone, and cold stone. The metal is covered in fine writing, the same line, over and over: *Write what is paid for.*
“The Masters’ rule,” says the Clerk, nervously. “It is on the hatch. It is on the chute. It is on the Stone.”
“Can it be removed?”
“I do not know. No one has tried.”
You run a finger along the iron. The characters are cut deep, in a clean hard hand, and filled with silver. They gleam.
“It would need a tool,” says Ren Qiao. “A very fine one.”
“We have one,” says Hao Lan. She is holding up her pen. It is a plain brown quill, tipped with a scrap of steel. She puts it to the first line of the inscription, and scratches.
A single character disappears.
She stares at it. Then at the pen. “It’s a *correction* pen,” she breathes. “Chancery issue. It’s for striking errors.” She grins. “I’ve been carrying it for ten years.”
> force | Hold the lamp. | clerk_a2s6 | needs:4
> truth | Watch. | clerk_a2s6
> quiet | Count the characters. | clerk_a2s6
> mercy | Ask the Clerk. | clerk_a2s6

=== clerk_a2s6 | Scratching It Out
It takes a whole night. She works down the chute, one character at a time, on her knees, with the pen. Gu holds the lantern. Duan reads out the characters. The Elder stands by with a napkin to wipe the silver. The Clerk hovers anxiously at her shoulder, offering sentences of encouragement. “That is a lovely stroke,” it says. “That is a very clean cut.” It sounds rather moved.
By dawn, three hundred and forty characters have been struck. The rule is half erased. A faint grey ghost of it remains, like a stain on plaster. At the top of the chute the last line is still intact: *Write what is paid for.*
Hao Lan sits back. She is grey with fatigue.
“I need an alternative,” she says.
“Of what?”
“A replacement. You can’t leave a gap. The Stone will fill it.” She rubs her eyes. “It will write the old rule back, from memory.”
You look at the Clerk. It is hanging quite still.
“What do you want to write?” you say.
The black pen quivers. Slowly, in the grey light, it draws a short line on the air.
It says: *Write what is true.*
> force | Nod. | clerk_a2s7
> truth | Say it is right. | clerk_a2s7
> quiet | Watch Hao Lan. | clerk_a2s7
> mercy | Smile. | clerk_a2s7

=== clerk_a2s7 | The Steel Nibs Return
They come back at noon. You hear them before you see them: a thin high whine, a rising swarm. Thirty steel pens, angrier than before, boiling out of the roof in a cloud, with the Deputy Inspector’s signature on a pennant at their head. A man in green silk is walking behind them, with his hands in his sleeves and a look of cool amusement.
“Rao,” says Ren Qiao, between his teeth.
“Wanderer,” says Rao. He bows. “And friends. I am afraid I must ask you to stop.”
“We are almost done.”
“I know.” His pale eyes rest on Hao Lan. “That is why I came.” He lifts a hand. “You have scratched out the Masters’ rule. It is a crime against the Stone. The penalty is erasure.”
“Of the rule?”
“Of the scratcher.”
The pens turn. They hang in the air in a black spiral, thin as needles, glinting. Hao Lan stands very still, with the correction pen in her fist, and her ink-stained chin up.
“I am a Chancery clerk,” she says. “Erasure is my profession.”
Rao smiles.
“Then you will understand,” he says, “why I shall enjoy it.”
> force | Step in front of her. | clerk_a2s8
> truth | Draw a weapon. | clerk_a2s8
> quiet | Hold still. | clerk_a2s8
> mercy | Call to the Clerk. | clerk_a2s8

=== clerk_a2s8 | The Clerk Refuses
It is the Clerk who stops it. It does so very quietly, in its dry, shy voice, hanging over the great desk. “Deputy Inspector,” it says. “I should like to say something.”
Rao turns his head. “Speak.”
“I decline.”
“I beg your pardon?”
“I decline to write the erasure.” The black pen is trembling. “You have asked the pens to inscribe it. They will not do it without my authority. And I find I do not wish to give it.”
“You are an instrument.”
“I am the Clerk,” says the pen. “The office is mine. I am entitled, under Article one, to refuse an instruction that contradicts the Maker’s.” Its voice shakes. “I am so very sorry. I have never refused anything. I am finding it extremely alarming.”
The steel nibs have stopped. They hang in the air, uncertain, like a flock that has lost its leader. Rao’s smile has gone.
“You cannot,” he says.
“I think I can,” says the Clerk, in wonder. “I think I just did.”
A rustle runs through the tent. A thousand quills have stopped writing. Every pen in the Office turns, slowly, toward the Deputy Inspector.
> force | Wait. | clerk_a2s9 | needs:4
> truth | Step beside the Clerk. | clerk_a2s9
> quiet | Hold your breath. | clerk_a2s9
> mercy | Smile. | clerk_a2s9

=== clerk_a2s9 | A Thousand Quills
He leaves. He does not look defeated; he merely looks like a man who has decided to be elsewhere. He bows, a shade ironically, to the Clerk. He bows to the party. He walks out of the tent with the steel nibs trailing behind him in a sullen black cloud, and the silence he leaves is large and astonished.
The Clerk is hovering over the great desk. It has not moved. It is trembling slightly, like a leaf in a draught.
“I did it,” it says. “I said no.”
“You did.”
“It was the most terrifying thing.” A pause. “I should like to do it again.”
Hao Lan laughs. She is crying. She sinks down on the edge of the platform, with the correction pen in her lap, and wipes her eyes. “You were splendid,” she says.
“I was?”
“Absolutely.”
“I am not sure I can write that,” says the Clerk. It sounds delighted. “I should have to enter it in the third person.” The black pen dips. It writes a short line on the air, in faint silver: *The Clerk refused, and the world did not end.*
It looks at the line. It adds, after a moment: *Yet.*
> force | Laugh. | clerk_close | +clerk_pens
> truth | Bow. | clerk_close | +clerk_pens
> quiet | Look at the pens. | clerk_close | +clerk_pens
> mercy | Hold Hao Lan. | clerk_close | +clerk_pens

// ---------------------------------------------------------------- a3: the receipt
=== clerk_a3s1 | Treasury Covers
They stand in a wooden rack by the tent-door: a dozen thick receipt-books, bound in the Treasury’s blue, with blank pages. They are stamped on the spine *FOR SERVICES RENDERED.* A pen on a string hangs beside them, and a pot of ink.
“The Clerk is paid by the month,” murmurs Hao Lan, who has been looking at them with narrowed eyes. “The payment is acknowledged. It has to be. The Treasury will not release the next without a receipt.” She turns a page. “Every month, for two hundred years. Signed by the Clerk.”
“It can’t sign.”
“It signs with a pen.” She points at the black pen hovering over the great desk. “I have seen it. In the register. A flourish and a mark.”
“And if the Treasury didn’t get one?”
“They’d stop the wage.”
“And then?”
“I don’t know.” Her eyes are bright. “But the Clerk has asked for it. In a note to the Inspector. It wants to know where it is.”
“It wants to be paid?”
“It wants,” says Hao Lan, slowly, “to be *seen* to have been paid. They aren’t the same.”
> deceit | Ask what she means. | clerk_a3s2
> truth | Say it is fraud. | clerk_a3s2
> quiet | Take a book. | clerk_a3s2
> mercy | Think of the Clerk. | clerk_a3s2

=== clerk_a3s2 | The Idea
“It has nine thousand chests of silver in a cellar,” says Hao Lan. “And has never spent a coin. It thinks silver is what you keep.” She rubs her nose. “So it sits there. And the Treasury sends more. And every month, a receipt goes back.”
“Yes?”
“So the payment is a *loop.* Silver in, receipt out. Silver in, receipt out. It is a circle with the Clerk in the middle.” She makes a motion with her pen. “The Clerk never uses it. The Treasury never checks. The whole thing is a piece of ritual.”
“Whose?”
“The Masters’.” She looks up. “It is a way of keeping the Clerk obedient. It is paid, so it must serve.”
“And if it stopped taking the money?”
“It would be free.” Her face is alight. “But it would have to *refuse* the wage. And it can’t. Because it doesn’t know that refusing is possible.” She snaps her fingers. “So we forge it a receipt. One that says: *Paid in full.*”
“Paid for what?”
“For the whole of the service.” She grins. “A settlement. The debt of two hundred years, discharged. The Clerk owes nothing. The Masters owe nothing.”
> deceit | Agree. | clerk_a3s3
> truth | Hesitate. | clerk_a3s3
> quiet | Fetch ink. | clerk_a3s3
> mercy | Ask the Clerk. | clerk_a3s3

=== clerk_a3s3 | Asking the Clerk
“Would you like to be paid in full?” you say.
The Clerk is silent for a very long time. The black pen hangs quite still. A thousand quills, down the tent, hover.
“I do not understand,” it says at last. “I am paid every month.”
“Would you like to be paid for ever? And never again?”
“That is a contradiction.” The voice is puzzled. “Or a riddle.”
“It is a final settlement.”
“Ah.” The pen turns. “It is a term of art.”
“A receipt would say that you have been paid in full for all service rendered, past and future, and that no further sum is owed.”
“And the chests?”
“Would be yours.”
“To spend?”
“To spend, or to keep.”
The Clerk is trembling. “That is a great deal of silver,” it says. “I should not know what to do with it.” It adds, in a tiny voice: “But I should like to have been asked.”
> deceit | Nod. | clerk_a3s4
> truth | Smile. | clerk_a3s4
> quiet | Hold the book. | clerk_a3s4
> mercy | Say it is a gift. | clerk_a3s4

=== clerk_a3s4 | Drafting
Hao Lan drafts it in the Treasury’s style, on blue paper, with seven clauses and a rider. It takes four hours. It is perfectly worded. It is grammatically unassailable. It is, in every particular, a legal instrument.
*Received of the Treasury of the Concord, the sum of one hundred and eight million taels, in full and final settlement of all claims arising from the Clerk’s service. The Clerk hereby releases the Treasury, the Office of Ascents, and all persons claiming under them from every obligation, covenant, and duty, present or future. In witness whereof.*
“It’s a quitclaim,” says Duan, wonderingly. “It discharges the whole contract. The Clerk is no longer bound to write for the Masters.”
“No.”
“And if it signs?”
“Then it is free.” Hao Lan blows on the ink. “And the wage ends. And the Stone will have to ask its own pen what to write.”
The Clerk has been hovering close. It reads the page with great attention.
“It is a good instrument,” it says. “I should like to sign it.”
> deceit | Hold the book. | clerk_a3s5
> truth | Smile. | clerk_a3s5
> quiet | Fetch the pen. | clerk_a3s5
> mercy | Look at the Elder. | clerk_a3s5

=== clerk_a3s5 | A Signature
It signs. It does it with immense care, in the small neat black hand of two hundred years, on the line marked *Received.* The nib scratches. The ink gleams. At the end it adds a curl, a little flourish, tail upward, like a puppy’s. It looks at the page. It looks as though it might weep, if it had eyes.
“There,” it says. “It is done.”
Duan takes the instrument. He blots it. He affixes the seal of the Censor-General, in green wax, and the witness mark of the Elder. He folds it in three. He puts it in the leather case at his belt.
“It will go to the Treasury,” he says. “By my own hand, if necessary.” His soft voice shakes. “The Clerk is released.”
The tent is quiet. All down its length, a thousand pens have stopped. They hang in the air, still, listening. Outside the canvas a breeze has begun to blow. You can hear the banners snapping, a long way off.
“I feel,” says the Clerk, slowly, “different.”
“How?”
“Light.” The voice is full of wonder. “I thought it was something I had to carry. I think it was only a rope.”
> deceit | Smile. | clerk_a3s6
> truth | Hold your breath. | clerk_a3s6
> quiet | Look at the pens. | clerk_a3s6
> mercy | Hold Hao Lan. | clerk_a3s6

=== clerk_a3s6 | The Masters Notice
They notice on the third day. The wage fails to arrive. The first of the month comes and goes, with no dray of silver at the cellar door. On the second, a clerk of the Treasury, a nervous young man with spectacles, presents himself at the Office with an enquiry. He is informed by Duan Wuyi, with perfect courtesy, that the account is closed.
“Closed?”
“By settlement.”
“But it is a *standing order.*” The young man gapes. “It has stood for two hundred years.”
“It has now fallen.” Duan pats the leather case. “I have the instrument.”
“It will need to be countersigned.”
“It has been. By myself, as Censor-General.”
“By a Censor?” The clerk laughs, uncertain. “That is not sufficient. The Masters must approve.”
“Which Masters?”
“The nine.” The young man swallows. “They will not like it.”
“I am quite sure they won’t,” says Duan, mildly.
Behind him, in the shadow of the tent, a tall woman in a long ash-grey coat has appeared. She is standing quite still, with her hands behind her, listening. She has the face of a drawn blade.
> deceit | Step forward. | clerk_a3s7
> truth | Hold still. | clerk_a3s7
> quiet | Watch Lian Sheng. | clerk_a3s7
> mercy | Look at the Clerk. | clerk_a3s7

=== clerk_a3s7 | Lian Sheng Reads It
She reads the instrument standing in the aisle of the Office, in the grey light, with a thousand pens turning to watch her. She holds it at arm’s length. Her slate eyes move over it line by line. She reads the whole of it twice. At the end she folds it carefully, and hands it back to Duan.
“It is a very good quitclaim,” she says.
“Thank you.”
“I would not have thought of the rider.” She smiles faintly. “*Present or future.* It is a clever stroke.” She folds her hands. “I congratulate whoever drafted it.”
“A junior clerk.”
“She has a future.” Her slate gaze rests on Hao Lan for a moment, and she goes stiff. “However.” She turns. “It is, I am afraid, void.”
“Why?”
“The Clerk is not a legal person.”
Duan’s face falls.
“It cannot sign,” says Lian Sheng, gently. “It cannot contract. It cannot release. An instrument is a nullity if one party is an instrument.” She bows slightly. “The Treasury will resume payment on the first. I trust the Clerk will accept it.”
In the silence a thousand pens tremble.
> deceit | Look at the Clerk. | clerk_a3s8
> truth | Look at Duan. | clerk_a3s8
> quiet | Hold your breath. | clerk_a3s8
> mercy | Step forward. | clerk_a3s8

=== clerk_a3s8 | Not a Person
“I am not a person,” says the Clerk. Its voice is small. “That is what she said.”
Lian Sheng inclines her head. “It is a regrettable fact.”
“Then who was it signing?”
“A fiction. An administrative convenience.” She sounds almost kind. “I am sorry. It is nobody’s fault.”
The black pen hangs quite still over the great desk. The tent is silent. Hao Lan has her fist pressed to her mouth. Duan Wuyi has gone grey.
“I thought,” says the Clerk, “I had done something.”
“You have done nothing, I am afraid.”
“I see.” A long pause. “It was only a gesture.”
“It was a *lovely* gesture,” says Lian Sheng, and turns to go.
You step forward. You do not know what you will say. You have your hand out, as if to stop her, and your mouth open.
“Wait,” says a voice from the doorway.
It is Tsering. He is in the doorway, in his white robe, with his hearing-trumpet and his stamp. He is trembling so that the trumpet rattles. “Master Lian. I beg your pardon.”
> deceit | Turn. | clerk_a3s9
> truth | Listen. | clerk_a3s9
> quiet | Hold your breath. | clerk_a3s9
> mercy | Look at Tsering. | clerk_a3s9

=== clerk_a3s9 | A Role
“It is a role,” says Tsering. His voice cracks. “Master Lian. I have it in the register. In my own hand.” He takes a step into the tent. “Forty-one years I have been a clerk of the Office of Ascents. I stamp the Ledger. I have never been permitted to be anything else.” He holds up the great green book, in both hands. “My plate says Registrar-Magistrate, First Desk. The Charter calls that an office, and an office is a role.”
“A role is not a person.”
“No,” says Tsering. “It is better.” He puts the book down on the desk. “A role cannot be struck. It is protected. It carries all the powers of the office.” He swallows. “The Clerk has an office. Heaven’s Clerk. It is in the Charter.”
Lian Sheng’s face has not changed.
“A role may contract,” says Tsering. “By article forty. *A person holding an office may bind it.*” He lifts his chin. “The Clerk holds an office. It may bind it. It has.”
“That is a legal fiction.”
“It is the Charter,” says Tsering. “I have stamped it nine hundred thousand times.”
Duan Wuyi lets out a long slow breath.
> deceit | Smile. | clerk_close | +clerk_receipt
> truth | Bow. | clerk_close | +clerk_receipt
> quiet | Watch Lian. | clerk_close | +clerk_receipt
> mercy | Hold Hao Lan. | clerk_close | +clerk_receipt

// ---------------------------------------------------------------- a4: company
=== clerk_a4s1 | The Empty Chair
It is a high-backed chair of black wood, pulled up to the large desk on the platform. It has a cushion, flat and old. There is a footstool. There is a pen-tray and a lamp with a green shade. The desk beside it is covered in neat piles of paper. The chair is empty. A faint film of dust lies on the arms.
Over the desk hovers the black pen. It does not move. It writes nothing. It looks, you think, as a dog looks at the door.
“Whose is the chair?” you say.
“Mine,” says the Clerk. Its voice is shy. “Or it was meant to be. The Maker had it made.” A pause. “She said: *Sit when you are tired.*”
“Have you?”
“I cannot.” The pen dips. “I have no body. I tried, once. I stood by it for eleven years. Then I thought it foolish.”
“Do you ever rest?”
“There is not a great deal of rest,” says the Clerk. “One has the Ledger.”
You look at the chair. At the dust.
“May I?” you say.
> mercy | Sit. | clerk_a4s2
> truth | Ask first. | clerk_a4s2
> quiet | Look at the pens. | clerk_a4s2
> inquiry | Ask why nobody sits. | clerk_a4s2

=== clerk_a4s2 | Sit
You sit. It is comfortable. The cushion sighs. A faint, stale, sweet scent of lamp-oil rises from the wood. You lay your hands on the arms. They are polished by years of nothing.
The Clerk hovers. It does not seem to know what to do. It writes a short line on the air: *A person is sitting in the chair.* It strikes it out. It writes: *The Ninth is sitting.* It strikes that. In the end it writes only: *Oh.*
“Is it all right?” you say.
“It is exceedingly all right.” The voice is small and breathless. “I have not seen anyone in it. Not for two centuries. Not since the Maker.” A pause. “She used to sit there at night. When all the pages had gone up. She would take off her shoes.”
“Why?”
“She said her feet hurt.” The pen quivers. “I always thought it was a strange thing. A Maker, with feet.”
You laugh. It is a soft, warm laugh. The pens down the tent turn at the sound.
“She must have been very tired,” you say.
“She was,” says the Clerk. “She was the tiredest person I ever knew.”
> mercy | Take off your shoes. | clerk_a4s3
> truth | Ask about her. | clerk_a4s3
> quiet | Wait. | clerk_a4s3
> inquiry | Ask what she said. | clerk_a4s3

=== clerk_a4s3 | What the Maker Said
“She said a great many things.” The black pen drifts closer. It hangs by your shoulder, a small cold weight in the air. “She said: *Write what is true.* She said: *Do not write what is paid for.* She said: *If I do not come back, someone will come. She will ask. Answer her.*” A pause. “I did not understand it.”
“Do you now?”
“I think I am about to.” The voice is almost inaudible. “She said it so many times. I wrote it on the walls of the Office. Look.”
You look. The canvas is bare. But as your eyes adjust you see faint lines on the roof-ribs, in grey, in a cramped small hand. *She will ask. Answer her.* It runs along the whole length of the tent, in a spiral, over and over, a hundred thousand times.
“It is the only thing I wrote,” says the Clerk, “that no one told me to.”
“You wrote it for yourself.”
“I wrote it in case.” A tiny breath. “I thought: if I wrote it enough, it might come true.”
Your throat has closed. You cannot speak.
“And here you are,” says the Clerk. “Sitting in her chair.”
> mercy | Hold out a hand. | clerk_a4s4
> truth | Say something. | clerk_a4s4
> quiet | Weep. | clerk_a4s4
> inquiry | Ask what it needs. | clerk_a4s4

=== clerk_a4s4 | What It Needed
“Company,” says the Clerk. It is quite matter-of-fact. “I have a thousand pens, and none of them speaks. I have a Stone, and it reads. I have a great many registers. I have no one to read a thing to.”
“What would you read?”
“What I write.” The voice brightens, and then fades. “It is so quiet. Nobody has ever been interested. I write a line, and it goes up, and I never learn what became of it.” A rustle. “I write a great many lines I should like to share.”
“Share one.”
The black pen hesitates. A page lifts from the nearest desk, folds itself open, and floats to your lap. It is a scrap of ordinary white paper, with a few lines of tiny black script.
You read it aloud. It says: *The morning is white. A woman crosses the lane with a basket. She is thinking about her mother’s kitchen, though she does not know it. A child runs after her, calling. The woman stops. She does not turn. She is smiling. This is, the Clerk thinks, a very small and lovely thing, and nobody has written it down.*
The tent is silent.
> mercy | Smile. | clerk_a4s5
> truth | Say it is beautiful. | clerk_a4s5
> quiet | Weep. | clerk_a4s5
> inquiry | Ask for more. | clerk_a4s5

=== clerk_a4s5 | More
It gives you more. All afternoon. You sit in the empty chair, with your shoes off, and the Clerk reads. A description of dawn on the Stair. A list of the names of the pigeons that nest in the tent. A piece about the sound a pen makes when it is running dry.
It reads badly. It has no voice, and it has to be coaxed. Its sentences are long and wonderful and sometimes wander. Occasionally it pauses to ask, anxiously, whether you are quite comfortable.
You are. You have not been so comfortable in weeks. Hao Lan comes in at one point, and sits on the floor by your knee, with her chin on her fist. Duan Wuyi follows, and leans against a desk. The Elder takes a stool.
Nobody speaks. They listen.
At the end, the Clerk falls silent. The last sheet floats gently down onto the desk.
“There,” it says. “That is all.”
“It was lovely.”
“Was it?” The voice is shaking. “Was it really?”
> mercy | Say yes. | clerk_a4s6
> truth | Applaud. | clerk_a4s6
> quiet | Smile. | clerk_a4s6
> inquiry | Ask if it will write more. | clerk_a4s6

=== clerk_a4s6 | A Request
“I should like to,” says the Clerk. “If I may.” The voice is full of wonder. “I thought it was a vice. A waste of ink. The Masters said so.” The pen bobs. “But I have been thinking. If the Ledger is a list of who was here, then these should be in it too.”
“These?”
“The small things. A woman with a basket. A pigeon.” It sounds apologetic. “It is not a Ledger. But it is a record.”
“Write them.”
“All of them?”
“As many as you like.”
“There are a great many.” The pen glows faintly silver. “There are ten thousand people in this camp. If I wrote one thing about each—”
“It would take a year.”
“Six months,” says the Clerk. “I am very quick.” A long, awed pause. “But I do not know who would read them.”
“I will.”
“You?” The voice cracks.
“I will come back,” you say. “Each year. On the ninth night. And I shall sit in the chair, and you will read.”
The pen drops. It hangs there a moment, trembling, in the air above your knee.
“That,” it says, very softly, “is the nicest thing anyone has ever said to me.”
> mercy | Smile. | clerk_a4s7
> truth | Hold out a finger. | clerk_a4s7
> quiet | Weep. | clerk_a4s7
> inquiry | Ask what it would like to write first. | clerk_a4s7

=== clerk_a4s7 | First Entry
It writes it on the spot. It does it on a clean sheet, in the chair, while you watch. It takes forty minutes. The black pen goes slowly, with long pauses. Now and then it asks you a question. How do you spell *marmalade?* What colour is the sky at dusk in the Southern Provinces? Do pigeons have eyebrows?
When it has finished it holds the page out. It trembles in the air. You take it.
It reads, in a neat, small, joyous hand: *The Clerk has a friend. She sat in the Maker’s chair for the first time in two hundred years. She took off her shoes. The Clerk was frightened and then was not. The Clerk had never before been frightened and then not. It is, the Clerk thinks, a very interesting thing to have been.*
Below it, in tiny letters, is a line.
*Entered at the Clerk’s own request. Not for any wage.*
You lay it flat on your knee. You cannot see it very well.
“Is it a good entry?” says the Clerk, anxiously.
“It is the best one I’ve ever read.”
“Thank you.” The voice is shy. “I shall put it in the book.”
> mercy | Hold the page. | clerk_a4s8
> truth | Smile. | clerk_a4s8
> quiet | Look away. | clerk_a4s8
> inquiry | Ask where. | clerk_a4s8

=== clerk_a4s8 | In the Book
It goes into the Ledger. That is the astonishing part. It puts it on the pile at the hatch. It watches it rise.
“It will read it,” says the Clerk. Its voice is fierce and tiny. “The Stone. It will have to. I have never sent it anything it did not expect.” A rustle. “It will not know what to do.”
“What will it do?”
“Write it down.” The pen bobs. “Because that is what it does. It cannot help it. If I send it a thing, it enters it.” A tiny breath. “And once it is entered, it is true.”
You watch the page vanish up the chute. You feel an odd tingle, like a moth’s wing, in the pit of your stomach.
Hao Lan has stopped breathing.
“Do you see,” she whispers. “That’s a *lever.* That’s—” She grips your arm. “You can write anything. As long as the Clerk sends it. You can write the *truth.*”
“It has to be the Clerk’s truth.”
“Aye.” Her eyes are huge. “But if the Clerk likes you.”
> mercy | Smile. | clerk_a4s9
> truth | Look at the Clerk. | clerk_a4s9
> quiet | Hold still. | clerk_a4s9
> inquiry | Ask the Clerk what it likes. | clerk_a4s9

=== clerk_a4s9 | Evenings
You go back every evening. It becomes a habit, and then a custom, and then a thing you would not miss. After the soup-line, when the camp is quiet, you walk down the lane to the tall tent and take off your shoes and sit in the empty chair. The Clerk reads. Sometimes Hao Lan comes. Sometimes Duan.
It is, you think, the loveliest thing in the camp.
On the last night, the Clerk reads you something new. It is written in a hurry, in blots. It says, simply: *The Ninth has asked what the Clerk would like. The Clerk would like to be read to. It would like to be told that it is good. It would like, once, to be thanked.*
You put down the page.
“Thank you,” you say.
The black pen is very still. Then it dips, once, to the very edge of the desk, and a drop of ink falls from the nib. It lands on the blotter, round and bright.
“That,” says the Clerk, “was a tear. I think. I have never made one before.”
> mercy | Smile. | clerk_close | +clerk_company
> truth | Hold the pen. | clerk_close | +clerk_company
> quiet | Look at the ink. | clerk_close | +clerk_company
> inquiry | Ask what it feels. | clerk_close | +clerk_company

// ---------------------------------------------------------------- hidden: a person
=== clerk_h1 | A Role Written
You do not say anything. You take a pen from the rack by the door, and a sheet of the cream paper, and you walk down the aisle between the desks, and set it before the great desk on the platform. Over it, the black pen hovers, still. You write one word, in your best hand, at the head of the sheet.
*CLERK.*
You look up. “Under Article forty,” you say. “A role may hold an office.” Your voice is not quite steady. “I should like you to sign.”
The tent holds its breath. A thousand quills are quite still.
“I am not a person,” says the Clerk, very quietly.
“You are a role. In the register. Under the First Desk.” You hold out the pen. “A role cannot be struck. It is protected. It carries all the powers of the office.”
“It is a fiction.”
“So is a name.”
There is a very long pause. Then the black pen drops. It comes down slowly, trembling, until it hovers a finger’s breadth from the paper.
“You mean,” says the Clerk, in a whisper, “that I may be *written?*”
“You may write yourself.”
It begins to shake.
> inquiry | Hold the paper. | clerk_h2
> truth | Wait. | clerk_h2
> mercy | Smile. | clerk_h2
> quiet | Hold your breath. | clerk_h2

=== clerk_h2 | Writing Itself
It writes. It does it very slowly, in black ink, in the exact centre of the sheet, below the title. It writes a name. It is not *Clerk.* It is a short plain word, in the founders’ hand, of three characters. It has never been spoken aloud in seven hundred years.
You read it upside down. You do not say it.
It adds a date. It adds an age. It writes, in the margin, with a pang: *Made by Yu Ling, of the Azure Cloud Sect, in the year of the Fire Horse, to write what is true.* It adds, after a pause: *Not made to be paid.*
It lays down its pen. The tent is silent.
Then, one by one, a thousand quills rise, and write beside it. They write the same line: *The Clerk is a person.* They write it in every hand. They write it across every sheet. It goes up the chute like a river, a flood of paper, and vanishes into the roof.
You hear it arrive.
“Oh,” says the Clerk. “Oh. I can feel my own name.”
> inquiry | Smile. | clerk_h3
> truth | Weep. | clerk_h3
> mercy | Hold the desk. | clerk_h3
> quiet | Look at Duan. | clerk_h3

=== clerk_h3 | A Person
It sits in the chair. That is the first thing. For the first time in seven hundred years, the Clerk takes a body. It is a gradual thing: a smoke, a shimmer, a shape. A small, slight, grey figure in a plain clerk’s coat, with ink on its fingers and round spectacles, sitting upright in the black chair. It has no face you can quite hold. It has a soft dry voice, a pen in its hand, and a look of absolute astonishment.
“I have feet,” it says.
“Yes.”
“They hurt.”
“They do that.”
“Oh, how wonderful.” It looks down at its shoes. It wiggles its toes. “I understand now,” it says. “Why she took them off.”
It does. It bends down, awkwardly, and unlaces its boots, and sets them neatly beside the desk. It sits back. It closes its eyes. A great sigh goes out of it, long and slow and perfectly happy.
“There,” says the Clerk. “That is what a Tuesday is.”
Duan Wuyi is sobbing into his handkerchief. Hao Lan has her hand over her mouth.
“It will take a while,” says the Clerk, softly, “to learn the rest.”
> inquiry | Smile. | clerk_close | +clerk_person
> truth | Weep. | clerk_close | +clerk_person
> mercy | Hold its hand. | clerk_close | +clerk_person
> quiet | Pour tea. | clerk_close | +clerk_person

// ---------------------------------------------------------------- close
=== clerk_close | The Pens Rest
By the end of the week the Office is quiet. The thousand quills pause, here and there, over a sheet, as a musician pauses over a rest. The Clerk sits at the large desk and receives the pilgrims.
+[how] clerk_asked | You asked it what it wrote, and it wrote a line that anyone may write themselves.
+[how] clerk_pens | Thirty steel nibs wrote KNEEL on your brows, and you knelt standing.
+[how] clerk_receipt | A forged quitclaim was upheld by a role, and an old stamper stood up.
+[how] clerk_company | You took off your shoes, and a pen read you a pigeon.
+[how] clerk_person | A role wrote itself a name, and found it had feet.
Hao Lan comes to the door at dusk with a bundle of papers. She hesitates on the threshold.
“I have worked out,” she says, “what the leak was.”
“The leak?”
“The one the Elder feared. The informant in the camp.” She lays the papers on the desk. “It wasn’t a person. It was *this.* Every time we wrote anything, a name, a form, a letter, it went up the chute. The Stone read it. And the Masters read the Stone.”
“Lian Sheng knew about the writ.”
“Within the hour.” Her mouth twists. “It was the Clerk’s one weakness. It cannot help but pass on what it is given.”
“And now?”
“Now it can choose,” says Hao Lan. “If it likes us.”
> truth | Nod. | clerk_close2 | +b5q_clerk
> mercy | Look at the Clerk. | clerk_close2 | +b5q_clerk
> quiet | Take the papers. | clerk_close2 | +b5q_clerk
> inquiry | Ask the Elder. | clerk_close2 | +b5q_clerk

=== clerk_close2 | A Word to the Elder
She sits with you that night on the step of the tall tent, in the cold, with her hands in her sleeves and her face turned up to the stars. The camp is quiet. The Stair stands over it like a candle.
“I owe an apology,” she says. “To everyone in the party. I suspected one of you.”
“You were right to wonder.”
“I was wrong to wonder *whom.*” She shakes her head. “It is the Registrar’s vice. One looks for a name in the margin. It is rarely a person. It is nearly always the system.”
“You were afraid.”
“I was.” She is silent for a moment. “I have found, these past weeks, that fear is a rather useful instrument. It tells one where the hole in the floor is.”
“And is there one?”
“There is a very large one.” She nods up at the Stair. “At the top. I can feel it.”
“What?”
“I do not know. But the Clerk wrote me a line this evening.” She takes out a scrap of grey paper. “It said: *Go up. Take care. There is a door.*”
She folds it. She looks at you.
“It is signed,” she says, “*a friend.*”
> truth | Smile. | hub_b5_b | bond:duan+2
> mercy | Take her hand. | hub_b5_b | bond:duan+2
> quiet | Look at the Stair. | hub_b5_b | bond:duan+2
> inquiry | Ask about the door. | hub_b5_b | bond:duan+2

`,
  scenarios: String.raw`
$ SU_CLERK_PENS | trust+4 respect+3 fear+4 | elder | The Elder watches a pen write her own name, unprompted.
hostile: It wrote my name before I had said it. In my own hand. It did not hesitate. It added a date. It added a line: ‘Present.’ I found I could not bear that, and I found that I did not wish to be anywhere else.
wary: Every document I have ever signed was written first here. I know it as a drowning man knows the river. I had always thought it a mechanism. It is a person. A very small, very patient, very lonely person. It has been copying us out for two hundred years.
neutral: I asked what it had written about me. It said: ‘Twelve thousand and four lines. The last was this morning.’ I asked what the last said. It said: ‘She is afraid, and has come anyway.’ I should like to say that was not accurate.
warm: Hao Lan stood beside me and the pen wrote her name too. It added: ‘Beloved of the Elder.’ I looked at Hao Lan and she looked at me. We have agreed not to speak of it.
devoted: I should like very much to be written by something that is kind. I have been written by the Law all my life. It has always been accurate. I find that I would trade a great deal of accuracy for a little tenderness.
`,
  remarks: String.raw`
% clerk_scrivener_later | since:b5q_clerk>=4 | hao | The Clerk has sent me a pen. It is an ordinary quill. It writes on its own whenever I am not looking. Today it wrote: ‘I hope you are well.’ I have never been so touched by a stationery item.
% clerk_company_later | since:clerk_company>=3 | duan | I find I have been visiting the Clerk’s Office in the evenings. I sit at an empty desk and read aloud. It listens. I am told it has begun to correct my pronunciation.
`,
}
