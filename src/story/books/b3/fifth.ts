import type { Arc } from "../types";

/**
 * Book Three, arc sixteen: the Fifth Floor. At the bottom of the Well stands the saint's desk, and on it the True Ledger, the
 * first volume, which Inspector Fang means to carry out and copy over every other. Four approaches: argue the page aloud with the
 * Reader (a1, truth), hold the Well stair against his guards (a2, force), swap the volume for Hao Lan's and Shu Ning's forgery
 * (a3, deceit), and have the Reader read it silently into the Well so it cannot be taken (a4, quiet). A hidden route opens the
 * desk drawer to Bao Er's door and finds the saint's letter to the Registrar.
 * Cast: Inspector Fang, Yin, the Reader, the Elder, Hao Lan, Shu Ning, Lian (paper), guards of the Chancery.
 */
export const fifth: Arc = {
  id: "fifth",
  name: "The Fifth Floor",
  scenes: String.raw`
=== fifth_entry | The Well Stair
The Well is not a hole. It is a stair. It winds down the inside of the great black circle at the centre of the Reading Hall, round and round, ten thousand steps of pale stone, with a rail of tarnished silver. The water, far below, is a black disc the size of a coin. Cold air rises from it. The lanterns of the Festival circle on its surface, a slow wheel of lights.
The Reader goes first, with her lamp. She does not hurry. She has gone down this stair every night for a hundred and eighty years and counts the steps under her breath. The paper-ghost Lian walks behind you, silent, with a ring of keys. The Elder holds the rail with both hands.
“There are nine hundred and ninety-nine,” says the Reader, “and then a door.”
“Why so many?”
“So that you will look back,” she says.
You look back. At the head of the stair, tiny as a pin, a circle of light appears. A line of figures stands round it. Their lamps wink on steel.
“They are coming,” says Hao Lan, very quietly. “He has the Gate key. He is here.”
> truth | Go on down, and meet him at the desk. | fifth_a1s1
> force | Hold the stair, and make them come one at a time. | fifth_a2s1
> deceit | Ask Hao Lan and Shu Ning how long a forged volume would take. | fifth_a3s1
> quiet | Ask the Reader if the Ledger can be read where it is, without being touched. | fifth_a4s1
> inquiry | Tell Bao Er the desk may have a drawer that opens to a door sung in nine bars. | fifth_h1 |  | pao_door_written | You have no door to sing yet.

// ---------------------------------------------------------------- a1: the argument
=== fifth_a1s1 | Nine Hundred and Ninety-Nine
You go down. The stair turns, and turns, and turns. The air thickens. A pale light grows below, steady and cold, and the noise of the Library dwindles behind you to a murmur and then to nothing. There is only the scrape of your boots, and the Reader’s whispered count, and the slow drip of water somewhere in the dark.
At the nine hundred and ninety-ninth step, the stair ends.
There is a door. It is low and round and plain, and it stands open. Beyond it lies a room. You see it first as a glow of lamplight, warm and amber. You see a desk. You see a chair, pushed back as if someone had risen from it a moment ago. You see a lemon on a saucer, withered to a nub. You see a book.
The Reader stops on the threshold. She puts her lamp down.
“This is it,” she says. “The Fifth Floor. The saint’s room.” She is trembling. “I have never gone in. It did not feel right. I have only looked.”
> truth | Go in. | fifth_a1s2
> mercy | Take her hand. | fifth_a1s2
> quiet | Wait for the Elder. | fifth_a1s2
> inquiry | Ask what she sees. | fifth_a1s2

=== fifth_a1s2 | The Saint’s Desk
It is a small room. It is much smaller than you imagined: a round cell, twelve paces across, lined with grey shelves. A narrow bed stands against the wall, made up with a patched quilt. A kettle hangs over a dead hearth. There are slippers by the bed. On the wall hangs a single picture, a child’s drawing, faded and brown, of a stick figure holding a lantern.
The desk is under the lamp. It is a plain deal table, scarred with ink and ring-marks. A pen lies across a blotter. A bottle of ink has dried to a crust. Beside it, on a stand of black wood, rests a book.
It is a large book, bound in grey cloth, as thick as a man’s forearm. It has no title. It has a lemon-coloured ribbon for a marker. A thin layer of dust lies over it, undisturbed.
Hao Lan makes a small sound. “That’s the True Ledger.”
“It’s very plain,” says Gu.
“It is the first,” says Hao Lan. “The first is always plain.”
> truth | Touch the cover. | fifth_a1s3
> mercy | Look at the picture. | fifth_a1s3
> quiet | Check the door. | fifth_a1s3
> inquiry | Ask the Reader to open it. | fifth_a1s3

=== fifth_a1s3 | Footsteps
They come down the stair in a quiet orderly file, with lamps, and the sound is the sound of boots on stone. Nine of them. Ten. The light grows. A thin voice, mild and precise, says: “Mind the thirty-third step. It is cracked.” A pause. “Thank you, Yin.”
You turn.
He stands in the doorway with his gloved hands folded. He is forty-five, perhaps, and slender, in a plain grey robe, with a long fine face and spectacles of silver wire. His hair is neatly parted. His eyes are a pale unremarkable hazel. He looks like a schoolmaster, or an apothecary, or a man who works in a bank.
Behind him a dozen Chancery guards fill the stair. The tall man with the silver chain is at their head, with his rifle ordered.
“Good evening,” says Inspector Fang. “Please do not be alarmed. I have not come to hurt anyone.”
> truth | Step in front of the desk. | fifth_a1s4
> mercy | Stand with the Elder. | fifth_a1s4
> quiet | Hold still. | fifth_a1s4
> inquiry | Ask what he has come for. | fifth_a1s4

=== fifth_a1s4 | Inspector Fang
“A book,” says Fang. He says it simply, gently. He has a voice like a man reading aloud to a sick child. “I have come for that book. I would be most grateful if you would allow me to take it.”
He takes a step into the room. His boots are clean. His gloves are white.
“I do not know whether you have been told about me,” he says. “I am not a villain. I am a clerk. I have been a clerk all my life. I have audited forty-one thousand cases of unjust striking, over twenty-two years, and in every one the fault was the same. A flaw in the record.”
He looks round the room. His eyes pass over the bed, the quilt, the picture.
“I have found the source,” he says. “It is in that book. The first volume. The correct text. It was copied badly, again and again, for seven hundred years, and every error was compounded. I have come to restore it.”
> truth | Ask what he means by correct. | fifth_a1s5 | npc:SU_FIFTH_FANG
> mercy | Say the Elder should speak. | fifth_a1s5
> quiet | Say nothing. | fifth_a1s5
> inquiry | Ask what he will do with it. | fifth_a1s5

=== fifth_a1s5 | What Correct Means
“Perfect,” says Fang. His pale eyes are mild. “A perfect record, without error. A Ledger that says what is true, and nothing else.” He folds his hands. “You do not know how much suffering has been caused by a clerk’s misspelling. You do not know the cost of a transposed figure. A child is struck because her father’s name is spelled with a different character. A widow is struck because a date has been entered wrongly. I have seen it. I have signed the corrections.”
His voice is steady.
“The corrections are never enough. By the time they are signed, the damage is done.” He lifts a gloved finger. “So I shall go to the source. I shall take the first volume, and copy it, exactly, over every other. Every Ledger in the Concord. Every register. Every roll. From the beginning.”
He smiles, thinly.
“It will be an end to injustice,” he says. “A perfect record.”
> truth | Ask who decides what is true. | fifth_a1s6
> mercy | Ask what happens to the people whose names it does not contain. | fifth_a1s6
> quiet | Look at the book. | fifth_a1s6
> inquiry | Ask how many names will be lost. | fifth_a1s6

=== fifth_a1s6 | The Cost of Perfection
“Some,” says Fang. He does not flinch. “It is a necessary cost. Names that were wrongly added will be removed. People who were entered by error will cease to be entered.” He spreads his hands. “They will not suffer. They will simply never have been.”
The Elder steps forward. She has been silent, her hands clasped, her face white. “Hui Niang’s Court,” she says. “Wen Rui. Mei Qiu’s sister. The weavers.”
“Corrections.”
“The children of the House.”
“Corrections.” He inclines his head. “Madam Registrar. I am very glad to see you. I had hoped to speak to you in a more suitable place.” He pauses. “I remember you from the Seventh Chancery. You had a very fine hand.”
“I remember you,” says the Elder. “You were kind about my footnotes.”
Fang smiles, a little sadly. “I was always fond of you,” he says.
> truth | Let her speak. | fifth_a1s7
> mercy | Hold her arm. | fifth_a1s7
> quiet | Watch Fang’s hands. | fifth_a1s7
> inquiry | Ask Fang what the book says. | fifth_a1s7

=== fifth_a1s7 | Open It
“I have not read it,” says Fang. He looks at the book on the stand, and for the first time something shifts in his composed face. “No one has. It is sealed. A Reader is required. I have brought a Reader, a clerk of the Seventh Chancery who can read the old script. But the book will not open for him. It requires a certain kind of person.”
He turns his hazel eyes on the Reader.
“A child of the Annex,” he says. “One who has been struck.”
The Reader has gone rigid. She is standing behind you, her lamp in both hands. Her small grey face is very white.
“I will not,” she says.
“I was told you might refuse.” He is not displeased. “I have brought a document.” He draws it from his sleeve: a sheet of grey paper, folded in three. “It is a pardon. It restores your name.”
“I have no name.”
“It is a name,” says Fang, “that I have found.”
> truth | Step between them. | fifth_a1s8
> mercy | Take the Reader’s hand. | fifth_a1s8
> quiet | Listen. | fifth_a1s8
> inquiry | Ask what it is. | fifth_a1s8

=== fifth_a1s8 | A Name Offered
He holds the page out. The Reader stares at it. Her lips are moving. She does not take it. Her hands are tight on her lamp.
“It is in the Closed Stacks,” says Fang, gently. “It was filed under a code. I had to look for a long time.” He unfolds the page. “Do you want me to read it?”
“No,” says the Reader, very faintly.
“It is a short name.”
“Please don’t.”
“It is a plain, good name.” His voice is full of kindness. “Your mother gave it to you. She was a net-mender. She gave you to the Annex because she could not feed you. She wrote it on a slip, and pinned it to your tunic. I have it here.”
He holds out the slip.
The Reader’s lamp trembles. Light slides across her face.
“I can give it to you,” says Fang. “All you have to do is read.”
> truth | Refuse for her. | fifth_close | +fifth_argued
> mercy | Hold her. | fifth_close | +fifth_argued
> quiet | Look at the book. | fifth_close | +fifth_argued
> inquiry | Ask her what she wants. | fifth_close | +fifth_argued

// ---------------------------------------------------------------- a2: the stair
=== fifth_a2s1 | One at a Time
You hold the stair. It is narrow: three feet across, with a rail on one side and a drop on the other. Ten thousand steps of pale stone, spiralling round the black well. A man coming down must come singly, or not at all. You stand on the nine hundred and eighty-first with your back to the wall and your hand on the Elder’s sleeve.
“Behind me,” says Ren Qiao.
“I will be beside you.”
“Behind me. It is the safer place.”
“It is the safer place,” you say, “and I do not care.”
He grins in the lamplight. It is the first time you have seen him grin without pain. He draws his sword. Mei Qiu comes up on his left with her bar. Gu is on his right, shaking, his blade low and ready. Shu Ning has put down her anvil and picked up her hammer.
Above you the lamps are descending. A line of figures, in grey leather, with pikes.
> force | Wait. | fifth_a2s2
> truth | Call up the stair. | fifth_a2s2
> quiet | Listen. | fifth_a2s2
> mercy | Tell the Elder to go down. | fifth_a2s2

=== fifth_a2s2 | The Tall Man
The first man down is the tall one with the silver chain. He comes slowly, with his rifle at the port and his eyes on the steps. He stops three paces above you. He is breathing hard, though the stair is not steep.
“Stand aside,” he says.
“No.”
“I have orders.”
“So do I,” you say. “They are different.”
His face is lean and tired. He has a long jaw and a nick on his lip. He looks at Ren Qiao’s sword, at Mei Qiu’s bar, at the hammer in Shu Ning’s fist, at the boy with the trembling blade. A muscle works in his cheek.
“I do not wish to shoot you,” he says.
“Then do not.”
“I will if I must.” He lifts the rifle to his shoulder. “Last chance.”
Behind him, on the stair, a voice says gently: “Captain Ma. Lower your weapon.”
> force | Wait. | fifth_a2s3
> truth | Look up. | fifth_a2s3
> quiet | Hold your breath. | fifth_a2s3
> mercy | Say thank you. | fifth_a2s3

=== fifth_a2s3 | Lower Your Weapon
It is Yin. He has come down the stair behind the guards, unnoticed, with a lamp in one hand and a ledger under his arm. His long face is pale and calm. He stops at the shoulder of the tall man, and lays a thin hand on the rifle’s barrel.
“Lower it, Captain,” he says. “Please.”
“Secretary.” The tall man does not turn. “The Inspector gave me my orders.”
“The Inspector is wrong.”
There is an extraordinary silence on the stair.
“I have copied the Library’s plans,” says Yin. “I have taken them to the other side. I have told them what he intends.” He swallows. “I am a coward, Captain. I have been one for eleven years. I would like to stop being one for ten minutes.”
The tall man’s rifle dips an inch. His eyes flick sideways. “You are going to be hanged,” he says.
“I expect so,” says Yin. “It will be a relief.”
> force | Stay still. | fifth_a2s4
> truth | Thank him. | fifth_a2s4
> quiet | Watch the guards. | fifth_a2s4
> mercy | Reach up. | fifth_a2s4

=== fifth_a2s4 | The Guards Waver
It is not a rout. It is a kind of slow unwinding. The guards behind Captain Ma have stopped on the stair. They are looking at one another. A young man at the back has lowered his pike. An older one is staring at the floor. A third mutters, “I did not sign up for this.”
Captain Ma stands with his rifle half-raised. His knuckles are white.
“I have a daughter,” he says. He says it to no one. “She is eleven. She is at school in Qinglian. She is learning to read.” His voice is hoarse. “I told her once that the Concord was a mother. I told her it would never hurt her.”
He lowers the rifle.
“I am going to put this down,” he says. “And I am going to sit on this step. And I am going to wait to be told what to do.”
He does it. He sits, heavily, on the stair, with the rifle across his knees, and puts his face in his hands.
> force | Step past him. | fifth_a2s5
> truth | Say you are sorry. | fifth_a2s5
> quiet | Nod to Yin. | fifth_a2s5
> mercy | Put a hand on his shoulder. | fifth_a2s5

=== fifth_a2s5 | The Inspector Descends
He comes down alone. The guards part for him on the stair like water. He is slender and grey and serene, with his white gloves folded and his silver spectacles glinting. He walks down the nine hundred steps with the unhurried grace of a man going to a dinner. He stops two paces above you.
“Captain Ma,” he says, to the man on the step. “That was unwise.”
The tall man does not look up.
“I am disappointed,” says Fang, in a tone of mild regret. “I thought better of you.” He turns his pale eyes on Yin. “And you. After eleven years.”
“I am sorry, sir,” says Yin.
“Are you?” Fang considers. “I wonder. I shall have to give it thought.” He looks at you. “You have stopped my guards. It is impressive. It will not change anything.”
He steps past you. You let him. You do not know why.
“Please excuse me,” he says. “I have a book to collect.”
> force | Seize his arm. | fifth_a2s6
> truth | Say he cannot. | fifth_a2s6
> quiet | Follow. | fifth_a2s6
> mercy | Let him go. | fifth_a2s6

=== fifth_a2s6 | The Locked Door
He reaches the door at the foot of the stair. It is round, and low, and open. He stops on the threshold. He looks into the saint’s room: the desk, the lemon, the picture, the book. A strange expression crosses his face. It is not triumph. It is hunger.
He crosses the floor. He lays his gloved hand on the cover of the True Ledger.
Nothing happens.
He tries to lift it. It does not move. It is as if it had grown into the stand. He heaves. He braces his feet. The silver spectacles slip. He goes red. He lets go, panting, and looks at his hands.
“It is sealed,” he says. “I knew it would be.” He laughs, shakily. “I did not think it would be so heavy.”
He turns to you.
“You have a Reader,” he says. “Bring her.”
> force | Refuse. | fifth_a2s7
> truth | Say she will not. | fifth_a2s7
> quiet | Block the door. | fifth_a2s7
> mercy | Ask what he will do if she will not. | fifth_a2s7

=== fifth_a2s7 | The Case
“I shall use the case,” says Fang. He says it with the air of a man announcing a regrettable but unavoidable procedure. From behind him, two guards carry in a long box of lead. It has a closed eye on the lid. It is the size of a coffin. They set it on the floor.
“It is a seal,” he says. “The largest ever made. It is what the fleet’s chain is a part of. It is a seal for a Ledger.” He flips the catches. “It does not require a Reader. It requires only a book.”
He opens the lid.
Inside, on a bed of black velvet, lies a plate of grey metal, as wide as a table. It is engraved with a million characters, finer than hair. It glows faintly, a dull sullen red. It hums. The hum is a low, deep note that you feel in your teeth.
“It will copy the first volume,” says Fang, “onto itself. Page by page. Then, when it is lowered into the Well, it will copy itself onto every Ledger in the world.”
The plate brightens.
“I am sorry,” he says. “I wished to do this gently.”
> force | Throw yourself at the case. | fifth_a2s8
> truth | Shout for Shu Ning. | fifth_a2s8
> quiet | Look at the plate. | fifth_a2s8
> mercy | Grab the Reader. | fifth_a2s8

=== fifth_a2s8 | Shu Ning’s Hammer
Shu Ning is on it before the word is out of your mouth. She vaults the rail, three feet of black leather and iron-muscled arm, and lands on the lid of the case with both boots and her hammer in both hands. She brings it down once. The plate rings like a bell.
A line of white runs across it.
Fang cries out. It is the first unguarded sound you have heard from him. He lunges. Shu Ning swings. The hammer catches him on the shoulder and he staggers, and his spectacles fly off and skitter across the floor. The guards surge forward.
“Don’t you dare!” shouts Shu Ning. Her cold face is blazing. She strikes the plate again. Another line. A third. The hum rises to a shriek. The plate bucks and curls like a living thing.
“You’ll ruin it!” Fang is screaming. “It’s the only one!”
“It’s a seal!” says Shu Ning. “It never asked!”
The plate splits in two.
> force | Fight on. | fifth_close | +fifth_broke_plate
> truth | Pull Shu Ning back. | fifth_close | +fifth_broke_plate
> quiet | Cover your ears. | fifth_close | +fifth_broke_plate
> mercy | Help Fang up. | fifth_close | +fifth_broke_plate

// ---------------------------------------------------------------- a3: the forgery
=== fifth_a3s1 | A Second Volume
“A day,” says Hao Lan. She is already pulling out paper. “I could make a convincing cover in an hour. The text takes time.” She chews her lip. “But I need only the first fifty pages. He will check them against his notes, and see that they match.”
“And the rest?”
“The rest can be blank. He will not know until he copies it. By then he will be at the Well, and it will be too late.” She looks up. Her eyes are bright. “I have never forged a book before. I have forged a letter and a pass and a quarantine. This would be the finest.”
Shu Ning has her anvil set up at the foot of the stair. She is turning a lump of grey iron in the tongs. “The cover needs a seal,” she says. “A false one. I will make it. It will not ask. It will say what he expects.”
“You said you would not forge,” you say.
“I said I would not seal what does not ask,” says Shu Ning. “I did not say I would not make a stage prop.”
> deceit | Start. | fifth_a3s2
> truth | Ask if it is right. | fifth_a3s2
> quiet | Watch. | fifth_a3s2
> mercy | Fetch tea. | fifth_a3s2

=== fifth_a3s2 | Fifty Pages
They work on a table in the saint’s room, under the lamp, with the true book closed on its stand. The Reader reads out the first fifty pages in a whisper, a line at a time, and Hao Lan copies them, in her small clear hand, onto thin grey paper. The Reader does not read the book. She reads a page of it that Lian has transcribed on a slip. The Ledger itself stays shut.
“It is the first page,” says the Reader. “It has the title. It has the preamble. It is a dull legal thing. It begins: ‘Whereas.’”
“Of course it does.”
“It lists the founders. It lists their purposes. It lists the first entries.” She stops. Her voice is odd. “It lists the first struck name.”
“Whose?”
The Reader is silent. Then, in a flat little voice, she reads: “Ling. Struck, at the petition of three. Reason: she taught.”
Hao Lan’s pen stops.
“The Ledger begins with her,” she says slowly. “The first entry in the first volume is a strike.”
> deceit | Copy it. | fifth_a3s3
> truth | Say it again. | fifth_a3s3
> quiet | Look at the Elder. | fifth_a3s3
> mercy | Hold the Reader. | fifth_a3s3

=== fifth_a3s3 | The First Entry
It changes everything. You see it as Hao Lan writes the line out, in careful copperplate, and sits looking at it. The first act of the Concord’s Ledger, the foundation stone of its authority, is a crime. The first name written in the book is a name struck out. It is the saint’s. It was done by three men for fear.
“He does not know,” says Hao Lan. “He has not read it. He believes the first volume is pure. He believes it is a record of truth.” She sets down the pen. “It is a record of a lie.”
The Elder has gone grey. “If he copies it over every other Ledger,” she says, “he will copy that. He will strike her again. In every volume. In every register in the Concord. Again, and again, and again.”
“He will make the Concord’s founding crime permanent,” says Shu Ning, flatly.
Nobody speaks. The lamp burns. The false cover lies on the table.
“It is a good forgery,” says Hao Lan, at last. “But it is too good.”
> deceit | Make it worse. | fifth_a3s4
> truth | Leave the first page true. | fifth_a3s4
> quiet | Wait. | fifth_a3s4
> mercy | Ask what she means. | fifth_a3s4

=== fifth_a3s4 | A Different Idea
“I could leave her out,” says Hao Lan. She says it slowly, as if the words were fragile. “I could write the first page without the strike. I could put in a different entry. A kinder one.” Her pen taps. “He would copy it over everything. And the Concord would be founded, from page one, on a different truth.”
“A lie,” says Shu Ning.
“A kinder lie.”
“Hao Lan,” you say.
“I know.” She puts down the pen and covers her face. “I know. I swore an oath. I swore on a bone seal that I would write only what is true.” She draws a long breath. “But I am a clerk. I know what it is to be handed a flawed record and told to make it right.”
She lowers her hands.
“I think,” she says, “that the answer is to leave it. Exactly as it is.”
> deceit | Ask why. | fifth_a3s5
> truth | Nod. | fifth_a3s5
> quiet | Say nothing. | fifth_a3s5
> mercy | Hold her hand. | fifth_a3s5

=== fifth_a3s5 | The True Copy
“Because he wants a perfect record,” says Hao Lan. She is smiling a fierce, shaky smile. “So let him have one. Let him copy the first page, exactly. The strike. The fear. The whole awful truth. Let him put it at the head of every Ledger in the world. Let the first line of every register in the Concord say: this is where we began. We began by being afraid.”
Shu Ning stares at her. “That’s monstrous.”
“It’s accurate,” says Hao Lan. “It is the most accurate thing the Concord has ever done.”
She picks up the pen.
“He will have exactly what he wants,” she says. “And every clerk who opens a Ledger from now on will read it.”
There is a long silence. The Elder is crying, silently, with her hand pressed to her mouth. The Reader has put her thin arms round Hao Lan’s neck.
“It’s the cruellest idea I’ve ever heard,” says the Reader.
“Thank you,” says Hao Lan.
> deceit | Bind it. | fifth_a3s6
> truth | Say you will trust her. | fifth_a3s6
> quiet | Pour ink. | fifth_a3s6
> mercy | Smile. | fifth_a3s6

=== fifth_a3s6 | The Swap
You make the swap at dusk. The false volume is bound in grey cloth, with a lemon ribbon, dusted with a handful of cellar dirt. It is a perfect twin. Shu Ning’s false seal sits on the cover, dull and dark, a good imitation of the real. The true book you wrap in a blanket and carry up the Well, step by step, the Reader walking beside you with her lamp, and hide it behind a shelf in the Stacks.
You come down again. You put the forgery on the stand. You lay the lemon beside it.
You wait.
He comes at midnight. He comes down alone, with Yin behind him and a guard at his shoulder. He walks into the saint’s room without a word. He crosses the floor to the desk. He lays his white-gloved hand on the book.
It lifts.
“Ah,” says Fang. A long breath goes out of him. “Ah.”
> deceit | Hold still. | fifth_a3s7
> truth | Say nothing. | fifth_a3s7
> quiet | Watch him. | fifth_a3s7
> mercy | Look away. | fifth_a3s7

=== fifth_a3s7 | He Reads
He opens it. He cannot help himself. He stands in the lamplight at the saint’s desk, with the book open in his arms, and reads the first page. The lamp flickers on his spectacles. His lips move. You see him reach the end of the preamble. You see him reach the first entry. You see him stop.
“Struck,” he says. “At the petition of three.” He turns the page. “She was struck.” He reads on. His hands begin to shake.
He reads for half an hour. He reads the whole of the fifty pages, standing, without moving. When he reaches the end he turns another leaf, and finds it blank, and another, and another. Blank, blank, blank. He lets out a short dry laugh.
“It is incomplete,” he says. “It stops.”
“It was never finished,” says Yin, softly, from the door.
Fang closes the book. He holds it against his chest, with both arms, as a child holds a toy.
“I wished it to be perfect,” he says.
> deceit | Say nothing. | fifth_a3s8 | +fifth_fang_shaken
> truth | Say it is. | fifth_a3s8 | +fifth_fang_shaken
> quiet | Watch his face. | fifth_a3s8 | +fifth_fang_shaken
> mercy | Say you are sorry. | fifth_a3s8 | +fifth_fang_shaken

=== fifth_a3s8 | A Perfect Record
He takes it. He takes the forgery up the Well with him, and the lead case, and the guards, and he does not look back. At the nine hundred and ninety-ninth step he stops. He turns, and looks down into the saint’s room, at the desk and the bed and the little picture. He is very pale.
“It is not what I expected,” he says. His voice carries up the stair. “I thought it would be a pure thing.”
Nobody answers.
“I find that I must think,” says Fang. “It will take some time. I shall proceed with the work. The fleet is in the bay. The chain is closing.” His mild voice does not change. “I shall copy it as it is. I have always done my duty.”
He goes up. His footsteps dwindle. The light shrinks to a pin. The lamp in the saint’s room gutters and steadies.
Hao Lan lets out a breath she seems to have been holding for an hour.
“He took it,” she says. “He took the forgery. He took the true copy of the lie.” She begins to laugh, shakily. “Oh, Heaven. We did it.”
> deceit | Laugh with her. | fifth_close | +fifth_forged
> truth | Say you are afraid. | fifth_close | +fifth_forged
> quiet | Hold her hand. | fifth_close | +fifth_forged
> mercy | Say she did well. | fifth_close | +fifth_forged

// ---------------------------------------------------------------- a4: the silent reading
=== fifth_a4s1 | Without Touching
“It can be read without being opened,” says the Reader. She says it quickly, as if saying it quickly would keep it from being a bad idea. “There is a way. The Annex has a rule. A Reader may read a closed book by laying her hand on the cover, and listening.” She holds up her small palm. “It is how we read the leaves. It does not harm them.”
“And the Ledger?”
“The same.” She twists her fingers. “But the Ledger is very large. It would take a day. It would take a night and a day, and I would have to stay quite still.”
“What would you read?”
“All of it,” says the Reader. “And then I would have it. In here.” She taps her head. “And no one could take it, because I would be carrying it.”
Lian, beside her, inclines his blank face. A line of ink runs across it.
IT IS A VERY OLD TRICK, he writes. IT IS HOW THE FIRST SONGKEEPERS KEPT THE LAMENT.
> quiet | Ask if it will hurt her. | fifth_a4s2
> truth | Say she does not have to. | fifth_a4s2
> mercy | Take her hand. | fifth_a4s2
> inquiry | Ask how long they have. | fifth_a4s2

=== fifth_a4s2 | A Day and a Night
“It will not hurt,” says the Reader. “It will be like falling asleep with my eyes open.” She sits down on the saint’s chair, which is far too large for her. She puts her feet on the rung. She lays her palm flat on the cover of the book.
“You will need to guard me,” she says.
“We will.”
“You will need to keep the Inspector away.”
“We will.”
“And you will need to not talk to me.” A tiny smile. “It is very hard to listen with someone talking.”
She closes her eyes.
A great stillness comes over the room. It is as if the air itself had been put away in a cupboard. The lamp-flame stands upright. The dust ceases to drift. In the Reader’s small grey face there is a look of vast, absorbed attention, as of a child listening to a story.
Outside, up the Well, you hear the first echo of boots.
> quiet | Take your position. | fifth_a4s3
> truth | Wait. | fifth_a4s3
> mercy | Watch her. | fifth_a4s3
> inquiry | Ask Hao Lan to take notes. | fifth_a4s3

=== fifth_a4s3 | A Long Night
The night is very long. You sit with your back against the door-frame and your sword across your knees. Ren Qiao sits opposite, with his hand on his pommel. Hao Lan crouches by the desk with her notebook, writing, and the Reader’s lips move. She is whispering. It is faint and fast, like a woman reciting a prayer, and every so often she stops, and tilts her head, and goes on.
At the third bell a sound comes from above. A rattle, a thud. The distant ring of steel on stone. You rise.
“Hold,” says Ren Qiao. He lays a hand on your arm. “Let Mei and Shu Ning deal with it. They are on the stair. They know their work.”
“And if it fails?”
“Then we deal with it.” He looks at the Reader. “She needs another hour.”
You sit down again.
From far above comes a shout, and a crash, and the clatter of a dropped pike. Then silence.
> quiet | Listen. | fifth_a4s4
> truth | Check the door. | fifth_a4s4
> mercy | Fetch water. | fifth_a4s4
> inquiry | Ask Hao Lan what the Reader is saying. | fifth_a4s4

=== fifth_a4s4 | What the Reader Said
“It’s the preamble,” whispers Hao Lan. She has her ear almost at the Reader’s lips. “She’s reciting it. Line by line. Whereas, whereas, whereas. It’s awfully dull.”
“Is it all dull?”
“Mostly.” Her pencil races. “It’s a founding charter. It lists the sects. It lists the ranks. It lists the duties of the clerks.” She stops. “Wait.”
“What?”
“There’s an annex.” She leans closer. “A rider. At the end of the preamble. It’s in a different hand. It’s in the saint’s.”
The Reader’s voice rises a little, quite clear in the stillness. She is reading, evenly, in the calm voice of a child saying her lessons: “Provided always that no name shall be struck that is not first written, and that no name shall be written that is not first asked. Provided also that the Ledger shall be read aloud, at the turn of every age, to all those whose names are in it, that they may correct it.”
Hao Lan’s pencil has stopped.
“That’s the law,” she says. “That’s the real law.”
> quiet | Listen on. | fifth_a4s5
> truth | Write it down. | fifth_a4s5
> mercy | Take her hand. | fifth_a4s5
> inquiry | Ask what the Concord does. | fifth_a4s5

=== fifth_a4s5 | The Real Law
“It does nothing,” says Hao Lan. Her voice is thick. “It has never read the Ledger aloud. Not once. Not in seven hundred years. It has never asked the names to correct it.” She rubs her face. “The Concord is in breach of its own charter. It has been since the first day.”
“Then everything it has done—”
“Is void,” says Hao Lan. She laughs, a small cracked sound. “Every strike. Every seal. Every Sealing. All of them, void. No one was ever lawfully struck.”
The Elder, at the door, has covered her mouth with her hands.
“It is the best argument I have ever heard,” says Hao Lan, “and it is eight hundred pages deep, and no one has ever read it.”
She grabs her notebook. She begins to write, wildly, at the full speed of her hand. “I need witnesses,” she says. “I need a copy. I need the Reader to finish.”
She looks up.
“Is it morning yet?”
> quiet | Check. | fifth_a4s6
> truth | Say it is near. | fifth_a4s6
> mercy | Bring her tea. | fifth_a4s6
> inquiry | Ask how long. | fifth_a4s6

=== fifth_a4s6 | The Last Page
It is morning on the surface and no change on the stair. The lamp burns on. The Reader sits on the saint’s chair, rigid, her palm on the book, her eyes shut. The words come in a steady drone. She has read for nineteen hours. She has not paused for water. She has not shifted her feet.
At the twentieth hour, she stops.
There is a long silence. Her lips are parted. Her whole small body is trembling. She opens her eyes. They are enormous, and clear, and bright with tears.
“It’s done,” she says. “I have all of it.”
“How do you feel?”
“Heavy.” She laughs, a little unsteadily. “And light. I know what is in the book. I know every entry. I know what the saint wrote.” She swallows. “I know my name.”
Hao Lan drops her pencil.
“What is it?” you whisper.
The Reader looks at you, with a face of astonishing sweetness.
“It’s there,” she says. “It was on the last page.”
> quiet | Ask. | fifth_a4s7
> truth | Wait. | fifth_a4s7
> mercy | Hold her hand. | fifth_a4s7
> inquiry | Ask who wrote it. | fifth_a4s7

=== fifth_a4s7 | Her Name
“She wrote it,” says the Reader. “The saint. On the last page of the first volume. In pencil.” She shakes her head, in amazement. “It was a list of the nine. Her pupils. The ones who were to come. She did not know their names, so she left them blank. But she wrote the ninth.”
“What did she write?”
“She wrote: the Reader. And beside it, in the margin, a name.” She says it softly. “It is not the one the Inspector had. It is not the one my mother gave me. It is a name the saint chose.”
She takes a breath.
“I am a pupil,” she says. “I was always meant to be here. I was the tenth.”
“The tenth?”
“The one who stays,” says the Reader. “When the nine have gone.”
Her whole face is shining. She laughs, and wipes her eyes with her knuckles.
“I am Mi,” she says. “It is the name of a lemon.”
> quiet | Smile. | fifth_a4s8
> truth | Say it is lovely. | fifth_a4s8
> mercy | Hug her. | fifth_a4s8
> inquiry | Ask what it means. | fifth_a4s8

=== fifth_a4s8 | Mi
It means that the saint loved her. That is all she can say. She sits in the saint’s chair with her small hands folded and her feet swinging, and repeats it, over and over, as a child repeats her own name to hear how it sounds. Mi. Mi. Mi.
Lian has come up behind her. His blank face is turned toward her. A line of ink runs across it, slowly, with a tremor.
WELCOME HOME, MI, he writes.
She puts her hand over his.
You hear boots on the stair. They are coming down, hard, fast, a great clatter of leather and steel. The shouts of the guards echo down the Well. Fang’s voice rises above them, thin and high and, for the first time, afraid.
“Seal the door!” he cries. “Seal it! She has read it! She has the book in her head!”
Mi stands. She is no taller than your hip. She puts her small hand in yours.
“Let him come,” she says. “I know the law.”
> quiet | Stand beside her. | fifth_close | +fifth_mi_read
> truth | Raise your voice. | fifth_close | +fifth_mi_read
> mercy | Pick her up. | fifth_close | +fifth_mi_read
> inquiry | Ask what she will say. | fifth_close | +fifth_mi_read

// ---------------------------------------------------------------- hidden: the drawer
=== fifth_h1 | The Drawer
You fetch Bao Er. She comes down the Well with her flute in her fist, unsteady, white-faced, with the folded door of nine bars over her heart. She stands in the saint’s room and looks at the desk. It is the loveliest, saddest, plainest thing she has ever seen.
“Is it here?” she says.
“I think the desk has a drawer.”
She walks round it, slowly. On the front, between the legs, there is a shallow drawer with a brass knob, almost hidden by the dust of centuries. It is locked. There is no keyhole. In its place there is a round hole in the wood, the size of a coin, ringed with nine tiny notches.
Bao Er kneels. She puts her lips to the hole. She hums the door: nine bars, a rising fifth, an open end.
The wood shivers. Something inside the drawer lets go with a click.
She draws it slowly open. It slides without a sound.
> inquiry | Look in. | fifth_h2
> truth | Let Bao Er look. | fifth_h2
> mercy | Hold her shoulder. | fifth_h2
> quiet | Hold the lamp. | fifth_h2

=== fifth_h2 | A Letter to the Registrar
It is a letter. It is the only thing in the drawer. It lies on a bed of grey felt, sealed with a daub of lemon-coloured wax. The paper is brown with age but perfectly whole. On the front, in a firm, quick, stooping hand, is written: To the Registrar of the Law Hall, whoever you may be. Open when a ninth has come.
Bao Er gives it to you with both hands. It is feather-light. You turn it over. The wax bears the print of a lemon.
The Elder has come into the room. She stands at the door, with her cloak held tight round her, and does not move.
“That is for me,” she says.
“It is addressed to the Registrar.”
“I was Registrar.” She looks at you. “I am not now. I think perhaps the letter has not noticed.”
You hold it out. She takes it. Her fingers tremble. She turns it over, and over, and looks at the wax.
“Seven hundred years,” she says. “She wrote it seven hundred years ago, to me.”
> inquiry | Say nothing. | fifth_h3
> truth | Tell her to read it. | fifth_h3
> mercy | Hold her. | fifth_h3
> quiet | Step back. | fifth_h3

=== fifth_h3 | What the Saint Wrote
She breaks the wax. She reads it standing, with her lips moving, and her face does not change. She reads it twice. When she has finished she folds it again, and holds it against her breast, and looks at the picture on the wall.
“It is short,” she says. “It says: ‘If you are reading this, a ninth has come to you. Do not seal her. Do not teach her. Let her ask. She will ask the abyss, and the abyss will ask her. Neither will want to answer. That is how you will know it is real.’”
She draws a long breath.
“‘The page I tore is not a wound. It is a question. I could not close it. I could only keep it from being used. The one who comes must answer it. She will not know how. I did not either. It is not a thing that can be known beforehand. Be kind to her. And please, in the name of every lemon I ever ate, feed her.’”
She laughs. It is a wet, enormous laugh.
“I will,” she says. “I will, Ling. I promise.”
> inquiry | Hold her. | fifth_close | +fifth_letter
> truth | Say you are hungry. | fifth_close | +fifth_letter
> mercy | Fetch the Reader. | fifth_close | +fifth_letter
> quiet | Let her stand. | fifth_close | +fifth_letter

// ---------------------------------------------------------------- close
=== fifth_close | The Fifth Floor
The saint’s room is quiet. The lamp burns on the desk beside the stand where the book lay, or lies. The chair is pushed back. The lemon, withered, sits on its saucer. It seems that the room has been waiting for someone to come and open the window.
+[how] fifth_argued | You argued with Inspector Fang over the True Ledger, in the saint’s room, and he offered the Reader a name.
+[how] fifth_broke_plate | Shu Ning broke the Chancery’s plate with a hammer, in two blows, and Fang lost his spectacles.
+[how] fifth_forged | Hao Lan wrote a perfect copy of the lie, and Fang carried it up the Well in his arms.
+[how] fifth_mi_read | A child named Mi read the True Ledger with her hand on the cover, and learned she was a pupil.
+[how] fifth_letter | The saint's letter to the Registrar is folded in the Elder's sleeve.
The Elder stands at the desk with the letter in her hand. She is looking at the stand. She looks tired and shaken and, beneath it, strangely at peace.
“I have been a keeper of the wrong thing,” she says. “All my life. I kept ledgers. I kept orders. I kept order.” She smiles at the picture of the stick figure with a lantern. “She wanted me to keep a child.”
She lays her hand on the desk.
“I think I shall do that,” she says. “I think it is the first useful thing I have been asked.”
> truth | Take her hand. | fifth_close2 | +b3q_fifth
> mercy | Say she already has. | fifth_close2 | +b3q_fifth
> quiet | Stay beside her. | fifth_close2 | +b3q_fifth
> inquiry | Ask what the bay is doing. | fifth_close2 | +b3q_fifth

=== fifth_close2 | Up the Well
You climb out of the Well at dawn. It takes an hour. The Reader walks beside you, holding your hand, counting the steps under her breath. At the thousandth, she looks back. Lian is standing at the foot of the stair, with his ring of keys, a small figure of folded paper. He raises one hand.
At the top, in the Reading Hall, the paper-clerks are on their feet. They stand at their desks, three hundred of them, in rows, silent. Every blank face is turned toward the Well. As you emerge, they bow.
It is not a bow of fear. It is the bow of a staff to a Head Archivist, or a student to a teacher, or a child to someone who has come home.
Mi stops. She lifts her small chin.
“Thank you,” she says, in her clear carrying voice. “It is good to be back. I have been away a hundred and eighty years.”
Then she walks up the aisle between the desks, in her too-big tunic, with her lamp held high, and the pens begin, softly, one by one, to write.
> truth | Follow her. | hub_b3_coast | bond:mi+3
> mercy | Hold the Elder’s arm. | hub_b3_coast | bond:mi+3
> quiet | Look back. | hub_b3_coast | bond:mi+3
> inquiry | Ask Hao Lan what she heard from the bay. | hub_b3_coast | bond:mi+3

`,
  scenarios: String.raw`
$ SU_FIFTH_FANG | trust+3 respect+4 fear+4 | elder | The Elder meets Inspector Fang in the saint's room, and he asks her to sign.
hostile: He asked me to sign. He held out the pen. He was very courteous. I looked at the pen for what felt like an hour, and I did not take it, and I do not understand why that was so difficult.
wary: I knew his face. I had seen it across the table at the Seventh Chancery fifteen years ago. He was a clerk then. He wore the same gloves. He was kind to me about my handwriting.
neutral: He said, “Madam Registrar, you of all people understand the cost of a flawed record.” I said that I did. I said it was the reason I would not help him.
warm: There was a moment when he looked at me with such tired hope that I nearly gave him the pen. I think that is what the Concord does. It makes the worst thing look like relief.
devoted: I told him I was no longer a Registrar. I said I was a keeper. He did not know what I meant. I find that I am extraordinarily proud of that.
`,
  remarks: String.raw`
% fifth_fang_later | since:fifth_fang_shaken>=6 | duan | I am told Inspector Fang has stopped signing his own reports. His secretary does it for him. I have been in the Concord thirty years and I have never known a man to do that without being ill.
% fifth_reader_later | since:b3q_fifth>=5 | gu | The Reader came to the surface for the first time in a hundred and eighty years. She stood on the sea steps in the wind and said it smelled of everything.
`,
};
