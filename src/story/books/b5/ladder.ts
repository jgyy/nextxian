import type { Arc } from "../types";

/**
 * Book Five, arc twelve: the Weighing. At the foot of the first tier every petitioner steps onto one pan of a thirty-foot brass
 * balance, and a weighing-priest heaps red ash on the other until it settles: the weight of the names that this ascension will
 * cost. The poor weigh little and the powerful a great deal, and the Ninth weighs a whole child. Four approaches: stand on the scale
 * and confess what you owe (a1, truth), break the beam (a2, force), pour ballast into the pan (a3, deceit), and carry a pilgrim
 * up the first tier on your back (a4, mercy). A hidden route plays the first card. Cast: the weighing-priest Oyun, Old Wen,
 * the Elder, Yue Zhaoning, Ren Qiao, Hanming, Gu, Hao Lan.
 */
export const ladder: Arc = {
  id: "ladder",
  name: "The Weighing",
  scenes: String.raw`
=== ladder_entry | The Brass Balance
It stands in an open courtyard at the foot of the first tier, between two pillars of green glass: a pair of brass pans as wide as dinner-tables, hung from a beam thirty feet long. Each barrel is stencilled with a red character. One by one, the pilgrims mount the left-hand pan. The priest heaps the right with ash from the barrels. He ladles it steadily until the beam levels.
The number shows on a dial. A clerk reads it aloud, and writes it on the pilgrim’s slip.
“Eleven,” calls the clerk. A farmer in a patched coat steps down, pale. “Forty. Three. Nine hundred and six.” A rich merchant in silk, red-faced, is escorted away by two guards. The crowd behind murmurs.
“What do they mean?” you whisper.
“Children,” says Duan Wuyi. His voice is thin. “It is the cost. How many names must be struck, to carry each of them up.” He swallows. “The poor are cheap. They go up with a few. The great… ”
“Nine hundred and six.”
“It is their weight,” says Duan. “Not in pounds.”
At the head of the queue the clerk lifts his eyes. He sees your armbands.
“Next,” he says.
> truth | Step onto the pan, and say what you owe. | ladder_a1s1
> force | Study the beam, and the pins that hold it to the pillars. | ladder_a2s1 | needs:4
> deceit | Study the barrels, and the boys who roll them across the court. | ladder_a3s1
> mercy | Notice an old man in the queue, bent double under a bundle, whom the line is passing by. | ladder_a4s1
> inquiry | Lay the first card on the pan, and say what it asks. | ladder_h1 |  | card_1 | You hold no card that carries weight.

// ---------------------------------------------------------------- a1: stepping on
=== ladder_a1s1 | The Pan
The clerk is young, sallow, with a pen behind each ear and a face like a closed door. He glances at your slip. His eyebrows rise a fraction. “One,” he reads. “The Ninth.” He lowers it. “It is a title.”
“It is a role.”
“So I see.” He shrugs. “The dial does not care. Step up.”
The pan is brass, cold, scuffed by ten thousand feet. It sinks slightly as you climb on. The priest on the ladder looks down at you with mild eyes. He is an elderly, gentle, round-shouldered man with a scoop in one hand and a smear of red on his sleeve.
“I am Oyun,” he says. “Do not be alarmed. It is quite painless.”
“What do I do?”
“Stand. Think of what you owe.” He dips the scoop. “It helps. The balance responds to the truth. A person who is thinking of something else, the dial may go anywhere.”
“What do I owe?”
“Ah,” says Oyun. His eyes are kind. “That is for you to say.”
He tips the scoop. A thin red trickle falls into the far pan.
> truth | Think of the Elder. | ladder_a1s2 | npc:SU_LADDER_SCALE
> mercy | Think of Lin Yuan. | ladder_a1s2
> quiet | Close your eyes. | ladder_a1s2
> inquiry | Ask what it measures. | ladder_a1s2

=== ladder_a1s2 | What It Measures
“A debt,” says Oyun. He ladles slowly. The ash falls with a faint dry rustle, like seed into a bin. “That is the best description I have. Not a debt to anyone. A debt of *standing.* Of having stood where another might have.”
“Stood where?”
“On the step.” He nods upward. “Every ascent is a space made. A place where one person steps and others do not. The scale weighs the space.” His face is thoughtful. “It was designed by someone very clever. It is accurate to a hair.”
“Who designed it?”
“The founders. Nine of them.” He smiles faintly. “It is the only part of the Ceremony I have ever been proud of.”
“Why?”
“Because it cannot be bribed.” The scoop dips and falls. “A merchant may pay a thousand taels to stand taller. The dial says what it says. It is the one honest object in the camp.”
The beam creaks. The pan beneath you shudders. You feel it shift: a tiny movement, a quiver, a first answering weight.
“Ah,” says Oyun, quietly. “It has found you.”
> truth | Hold still. | ladder_a1s3
> mercy | Think of the Spare. | ladder_a1s3
> quiet | Look at the dial. | ladder_a1s3
> inquiry | Ask what it found. | ladder_a1s3

=== ladder_a1s3 | A Child
The beam does not level. That is the first thing. It goes down on your side, slowly, as the red ash piles up, and keeps going. The pan swings. You grip the chains. The crowd watching has gone silent. In the far pan the heap is a mound, and still Oyun ladles, and still your side does not rise.
“Priest,” says the clerk, uneasily. “It’s well over the line.”
“I know.”
“Is it the dial?”
“It is not the dial.” Oyun’s round face has lost its colour. “It is the pan.” He puts down the scoop. He climbs down the ladder, one rung at a time, as if his legs were water. He stands before you with his hands at his sides.
“The scale is level,” he says. “At one.”
“One?”
“One child. One name. The *first.*” His voice is a whisper. “It is the weight of the first. Of the girl who was struck, at the founding, for the first ascent.” He looks up. “You do not weigh your own cost, Ninth. You weigh *hers.*”
The dial swings. It settles. It reads, in thin black strokes, a single character: *One.*
> truth | Step down. | ladder_a1s4
> mercy | Hold the chains. | ladder_a1s4
> quiet | Look at the dial. | ladder_a1s4
> inquiry | Ask what it means. | ladder_a1s4

=== ladder_a1s4 | The Weight of One
“It means that you stand,” says Oyun, “where she stood.” He is a very old man, suddenly. He lowers himself onto the step of the ladder with a hand on his knee. “In the founding story, the first ascender stood on this pan, and the first child on the other. They were weighed. The dial settled.” He wipes his face. “The pan has been used since. But the dial has never settled at one again.”
“Why not?”
“Because every ascender since has weighed more.” He looks at the dial. “It is the arithmetic of the thing. Each step costs the one before. But you…”
“I weigh the first.”
“You weigh *one.* Which is to say, the debt is paid.” He laughs, unevenly. “You cost no more than the original. You are the first child’s *own* weight, come back.”
The crowd murmurs. The clerk has dropped his pen.
“Is that possible?” says Duan Wuyi, hoarsely.
“It is not in the manual,” says Oyun. “I have been a weighing-priest for thirty-one years. I have weighed seventeen thousand souls.” He looks at his hands. “I did not think it could happen.”
> truth | Kneel by him. | ladder_a1s5
> mercy | Take his hand. | ladder_a1s5
> quiet | Wait. | ladder_a1s5
> inquiry | Ask what he will do. | ladder_a1s5

=== ladder_a1s5 | The Others
They all go up. That is the astonishing thing. Hao Lan, then Duan, then Gu. Hanming. Yue. Odval. Temur. They step onto the pan, one by one, and Oyun sits on the ladder-step and watches, and the dial swings, and settles. One. One. One. One. Each time the beam levels with a tiny ring.
“All one,” breathes the clerk.
“It is the Ninth’s company,” says Oyun. He seems dazed. “It is her weight. She carries them.”
“Is it permitted?”
“There is no rule against it.” He laughs. “I have read the manual. It has never occurred to anyone.”
The Elder is last. She mounts the pan with her back very straight, and her hands folded. The ash rises. The beam trembles. The dial spins, slows, settles on fourteen.
She stands there, quite still, with the number glowing before her.
“Fourteen,” she says, in her dry voice. “It is correct.”
The crowd holds its breath. The Elder looks at the dial. She looks at the priest.
“Oyun,” she says. “Might I be permitted to put them back?”
> truth | Hold your breath. | ladder_a1s6
> mercy | Take her arm. | ladder_a1s6
> quiet | Watch. | ladder_a1s6
> inquiry | Ask how. | ladder_a1s6

=== ladder_a1s6 | Putting Them Back
It is the simplest thing. She asks for a scoop. She takes it in both hands, and climbs the ladder to the lip of the far pan. She dips it in the red ash, which is the burned dust of the struck, and she lifts it, and holds it high.
She says a name. It is the first of the fourteen. Her voice is dry and clear. She tips the scoop into the barrel at the foot of the ladder, which is empty.
She says another. She scoops again.
She says them all. It takes a quarter of an hour. At each name a spoonful of ash goes back, from the heap, into the barrel; and the dial drops. Thirteen. Twelve. Eleven. Ten. The crowd watches in absolute silence. At each name, the beam rises, a fraction, a hair, a breath.
At the fourteenth, the scale levels.
She is standing on the pan now. She has stepped back, without noticing. She stands there, in her grey coat, with her hands folded, and the dial reads: *One.*
She looks at it. She makes a small sound.
“Oh,” she says. “I weigh the same.”
> truth | Smile. | ladder_a1s7
> mercy | Hold her hand. | ladder_a1s7
> quiet | Watch the dial. | ladder_a1s7
> inquiry | Ask Oyun. | ladder_a1s7

=== ladder_a1s7 | Oyun Explains
“It can be done,” says Oyun, in a faint voice. “It has never been tried. The ash is the weight; the weight is the debt; the debt, if repaid, lifts.” He wrings his hands. “It is in the oldest scroll. I thought it was a legend.”
“What did the scroll say?”
“*The balance will level when the last is returned.*” His round face is wet. “I always thought it meant the last pilgrim. I see now it means the last name.”
“Every name.”
“Every one.” He looks at the barrels. “Four hundred and fifty thousand in this court alone. Seven thousand more in the cellar.”
“How long would it take?”
“Years.” He shakes his head. “But it is not impossible. It is not even very hard. It is a matter of saying them. And pouring them back.”
“Where?”
“Into the ground.” He nods at the earth beneath his feet. “It is a seed. It is only ash. It wants to be in the ground. It has been in barrels for seven hundred years.”
He looks at the scoop in the Elder’s hand. His voice breaks.
“Might I help?”
> truth | Nod. | ladder_a1s8
> mercy | Hold the scoop. | ladder_a1s8
> quiet | Look at the barrels. | ladder_a1s8
> inquiry | Ask where. | ladder_a1s8

=== ladder_a1s8 | Planting
They plant them in a field behind the camp. It is a stony, windswept, empty meadow, grey with moss. It is the work of three days. The weighing-priests of the Stair, twenty of them, in grey robes, carry the barrels out on poles. The clerks come, and the pilgrims, and the children from the soup-line. They dig. They lay the ash in a shallow trench, a line at a time. At each barrel the Elder reads the stencil aloud, and a priest says: *Returned.*
It is a quiet field. The wind is cold. No one speaks above a murmur. By dusk of the second day the trench is three hundred yards long, and the priests are grey with fatigue.
At dawn on the third morning, a green shoot comes up.
It is a single stem, no taller than a finger, with two pale leaves. It stands at the head of the trench in the early light, trembling.
Oyun is on his knees. He touches one with a fingertip.
“It is lotus,” he says. “It is a seedling of the lotus.” He looks up. His old face is shining. “They are growing.”
> truth | Kneel. | ladder_a1s9
> mercy | Weep. | ladder_a1s9
> quiet | Look at the field. | ladder_a1s9
> inquiry | Ask what they will be. | ladder_a1s9

=== ladder_a1s9 | A Field of Lotus
They will be a field, in a year. Oyun is certain. He sits on a rock at the head of the trench with a flask of tea and a worn notebook, and watches them. They are small and green and in perfect rows, an inch higher each day. Pilgrims pause on the path to look. A child kneels and gives one a drink from a cup.
“They are the names,” says Oyun. “Each one. They are growing because they have been said.” He shakes his head in wonder. “I do not know where I got such an idea. It was lying in the manual all along, and no one thought to try it.”
“It needed someone who weighed one.”
“It needed someone who would let the others on the pan.” He smiles. “It is the same thing.”
The Elder has come up beside you. She stands, small and grey, looking at the green line in the dawn.
“Fourteen,” she says. “And a field.”
“And a field.”
“I think,” says Su Wanru, “that it is the first time I have seen a ledger grow.”
She bends. She touches a leaf. It trembles, like a living thing, in the wind.
> truth | Smile. | ladder_close | +ladder_weighed
> mercy | Take her hand. | ladder_close | +ladder_weighed
> quiet | Look at the sun. | ladder_close | +ladder_weighed
> inquiry | Ask Oyun about the others. | ladder_close | +ladder_weighed

// ---------------------------------------------------------------- a2: the beam
=== ladder_a2s1 | Pins
They are thick as your wrist, black with age, set in sockets of green glass at the head of each pillar. A great brass clevis binds the beam to the pillars. One pin through each. The two are the only things holding the balance in the air. Under the dust of centuries they gleam a dull oily gold.
Ren Qiao studies them from a shed roof with a spyglass. He has been at it for an hour.
“Well,” he says. “It’s over-engineered.”
“Can it be broken?”
“Easily.” He lowers the glass. “If you knock out the pins, the beam drops. Eight hundred pounds of brass. It would take the pillars with it.” He rubs his jaw. “It would be a fine crash.”
“It would hurt someone.”
“Not if you do it at night.” He glances at you. “The court is empty after the evening gong.”
“Why break it?”
“Because it’s a lie.” His scarred face is hard. “It makes a number. It says: *this much a person costs.* It lets people feel it is arithmetic. As if a child had a weight.”
“It does.”
“It shouldn’t.” He raises the glass again. “Nothing alive should be priced to the ounce.”
> force | Agree. | ladder_a2s2 | needs:4
> truth | Say it is evidence. | ladder_a2s2
> quiet | Study the court. | ladder_a2s2
> mercy | Ask about Oyun. | ladder_a2s2

=== ladder_a2s2 | A Night Job
It takes four of you, with a long crowbar and a coil of rope. You go in at midnight, over the low wall, in the shadow of the pillars. The court is empty. The two great pans hang motionless in the starlight, mute, catching the glimmer of a thousand lamps from the camp.
Hanming does the climbing. He is lean and quick, with a glazier’s head for heights. He goes up the west pillar like a cat, with the rope round his waist, and clings at the top while Ren Qiao pays out the line. He braces his boots. He sets the crowbar against the pin.
It does not move.
“Rusted?” whispers Gu.
“It’s *glass,*” hisses Hanming, from above. “It’s fused. It’s part of the socket.”
“Can you break it?”
“I’m a glass-blower.” You hear the grin in his voice. “It’s not breaking. It’s *cooling.*”
He takes out a small brass flask. He uncorks it. He pours a thin stream of vinegar over the join. There is a faint hiss, and a puff of white vapour. A tiny crack opens. It zigzags across the green. The pin, with a moan, begins to turn.
Below, in the dark, a door opens.
> force | Freeze. | ladder_a2s3
> truth | Hide. | ladder_a2s3
> quiet | Hold your breath. | ladder_a2s3
> mercy | Look for the light. | ladder_a2s3

=== ladder_a2s3 | Oyun’s Lamp
It is the priest. He comes out of the little hut beside the court in his nightshirt, with a candle in a glass. He is shuffling, a small round bent figure in carpet slippers, yawning. He pauses at the edge of the court. He blinks at the scale. He lifts the candle.
Your heart is a drum. You are pressed into the shadow of the east pillar with Gu’s elbow in your ribs. High above, a thin figure is clinging to the west like a gecko.
“Hm,” says Oyun. He walks forward. He stops under the beam. He lifts the candle higher. “It’s dripping.”
Nobody breathes.
“Vinegar.” He sniffs. “How very odd.” He looks up. The candle gleams on the underside of the beam. He looks at the pin. He looks at the figure clinging to the top of the pillar.
He looks for a long time.
“Good evening,” he says, politely.
Hanming, at the top of the pillar, gives a strangled squeak. “Good evening.”
“You will want to do the other one first,” says the priest. “The east. It is the looser.” He sets the candle on the ladder. “I shall hold the rope.”
> force | Stare. | ladder_a2s4
> truth | Step forward. | ladder_a2s4
> quiet | Hold still. | ladder_a2s4
> mercy | Thank him. | ladder_a2s4

=== ladder_a2s4 | Oyun Helps
He tells you while you work. He does it in a gentle monotone, steadying the ladder, with the candle at his feet. He has hated the thing for years. He has never said so. He has stood on that ladder every day of his life and watched the dial and felt the old man’s tiredness settle on his shoulders.
“It is accurate,” he says. “That is the cruelty. If it were wrong, one could argue.”
“You wanted it broken?”
“I wanted someone to take the decision off me.” He wipes his nose. “I am a man of sixty-eight. I have been weighing for thirty-one years. I could not walk away. I could not say no.” He looks at the pans. “I could only stand here.”
“You’re helping us.”
“I am *holding a rope.*” He smiles, a little sadly. “It is the one thing a priest may do and still call it innocence.”
High above, the pins turn. The glass cracks with small musical sounds. Gu is hauling on the line. Ren Qiao is calling, in a whisper, “Easy. Easy.”
“It will take the pillars,” says Oyun. “Down.”
“Will it harm anyone?”
“No.” He looks up. “I have moved the huts.”
> force | Haul. | ladder_a2s5
> truth | Thank him. | ladder_a2s5
> quiet | Brace. | ladder_a2s5
> mercy | Watch the beam. | ladder_a2s5

=== ladder_a2s5 | The Fall
It comes down slowly. That is what you remember. The first pin goes with a thin musical snap, and the east end of the beam sags; the second with a deeper crack, and the whole great brass arm tilts. The pans swing. The pillars groan. A shower of green glass-dust sifts down over the court.
For a moment it hangs there, quite still, canted at an angle, impossible: thirty feet of balanced brass in the starlight.
Then it falls.
It does not crash. It lands. The west end touches the court with a long low reverberating note, like a gong struck underwater. The pans fold. The pillars lean, and slide, and sit down in the dust.
Silence. Then a distant shout.
The camp has heard. Lights are springing up in the tents. A bugle begins to blow.
“Run,” says Ren Qiao.
Oyun is standing in the middle of the court, with the red ash round his ankles, looking at the wreck of his life’s work. He is smiling.
“Go on,” he says. “I shall explain.”
> force | Run. | ladder_a2s6 | needs:4
> truth | Stay. | ladder_a2s6
> quiet | Look at the ash. | ladder_a2s6
> mercy | Take his arm. | ladder_a2s6

=== ladder_a2s6 | Explaining
He explains it to the wardens at dawn, sitting on an upturned barrel in the ruins, with a blanket round him and a cup of tea. He tells them in a mild, grey, rambling way that the beam fell in the night. It was old. The pins were corroded. It was nobody’s fault.
The captain of the wardens, a bull-necked man with a red nose, is writing it down.
“It was *vinegar,*” he says.
“Was it?”
“There’s a smell. And a footprint.” He frowns at the soil. “A glassblower’s boot, by the look of it.”
“I really could not say.”
“You were seen.” The captain taps his pencil. “A priest in his nightshirt. Holding a rope.”
“It is a hobby,” says Oyun. He sips. “I find it calms me.”
The captain stares. A long silence follows. At last, with a sigh, he shuts his book. “It fell,” he says. “It was old. I shall report accordingly.”
“Thank you.”
“I had a nephew,” says the captain, gruffly, “on a scale like that. I never knew what he weighed.”
He walks away. He does not look back.
> force | Smile. | ladder_a2s7
> truth | Help Oyun up. | ladder_a2s7
> quiet | Look at the ruins. | ladder_a2s7
> mercy | Hand him tea. | ladder_a2s7

=== ladder_a2s7 | What the Fall Did
The pilgrims come in the morning. A line of them, in white, across the court, to see. They stand at the edge of the ruins and stare. The brass beam lies on its side, with the pans folded like wings. The red ash is a pool, now drying to a crust. Someone has put a flower on the beam.
Nobody knows what to say. The great Weighing, the heart of the first tier, is a heap of scrap. Some weep. Some laugh. A woman in a green coat kneels and puts her hand flat on the ash.
“It’s warm,” she says.
“It is the names,” says Oyun, softly, beside her. “They have been in the dark a long time.”
“What happens to them now?”
“I should like to put them in the ground.” He looks at the pool. “There is a field behind the camp.”
She stands. She wipes her hand. “I’ll fetch a bucket,” she says.
It spreads. A man brings a barrow. A child brings a spade. They do not speak. They go, in procession, out of the camp, to the stony meadow.
> force | Watch. | ladder_a2s8
> truth | Carry a bowl. | ladder_a2s8
> quiet | Look at Oyun. | ladder_a2s8
> mercy | Weep. | ladder_a2s8

=== ladder_a2s8 | Without a Scale
The first tier opens. It does so without ceremony, because there is no longer anyone to weigh. The pilgrims go up without being counted. They climb in their hundreds, among the glittering treads, reading the names under their feet. At the second landing the clerk of the Office is waiting with a puzzled face and a clipboard. He asks for their weights. They have none.
“It’s irregular,” he says. “There ought to be a number.”
“There isn’t one,” says Gu.
“Then how do I know what to charge?”
“You don’t.”
The clerk stares at his clipboard. He looks at the long file of pilgrims. He looks at Gu, who is shy, and nineteen, and suddenly rather pleased with himself.
“I suppose I could just write *one,*” he says.
“Why not?”
“It’s only a number.” He scribbles. “I suppose that’s all it ever was.”
Behind him the Stair goes up. The pilgrims climb it, in white, in the sun, and at each step the glass rings. It is a clear sweet note, like a bell, and it carries a very long way.
> force | Smile. | ladder_a2s9 | needs:4
> truth | Applaud. | ladder_a2s9
> quiet | Listen. | ladder_a2s9
> mercy | Follow them up. | ladder_a2s9

=== ladder_a2s9 | Ren Qiao on the Wreck
He sits on the folded pan that evening, with his feet dangling, eating an apple. The court is empty. The sky is a high clear violet. In the ruins, a few lamps are lit, where the priests are packing the last barrels for the field.
You sit beside him. He offers you half the apple.
“I broke a thing,” he says.
“Yes.”
“I have never done that before. On purpose.” He chews. “I have defended things. Guarded things. Held them up. I’ve never knocked one down.” He looks at the beam. “I rather liked it.”
“Do you feel guilty?”
“A little.” He considers. “But not much.” His scarred face is thoughtful. “I think it’s a thing you have to be careful with. Breaking. You must only do it to the ones that were hurting people.”
“How do you tell?”
“You ask the person who works there.” He tosses the core. “Oyun said: *I’ve moved the huts.* That’s how I knew.”
He leans back on his hands. For the first time in a month, he looks entirely at peace.
> force | Smile. | ladder_close | +ladder_broken
> truth | Share the apple. | ladder_close | +ladder_broken
> quiet | Look at the sky. | ladder_close | +ladder_broken
> mercy | Hold his arm. | ladder_close | +ladder_broken

// ---------------------------------------------------------------- a3: ballast
=== ladder_a3s1 | The Barrels
They arrive on hand-carts, pushed by boys of twelve, in a long procession across the court: barrel after barrel, each stencilled with a red character. The boys roll them to the foot of the ladder, tip them, and heave. The priest takes the scoop. The ash pours.
“It’s the same ash every time,” murmurs Yue Zhaoning. She is leaning on a pillar in the shade, whittling a stick. “They don’t weigh the pilgrim. They weigh the *barrel.* The dial counts the barrels.”
“What do you mean?”
“The pan doesn’t go down because of the pilgrim. It goes down because of the pilgrim’s *shoes.*” She holds up the stick. “There’s a plate in the floor of the pan. A pressure plate. It counts the number of persons. The ash is a sham.”
“A sham?”
“A show. To make it look weighty.” Her grin is quick. “The scale doesn’t weigh your cost. It weighs your *footprint.*”
“Then why the barrels?”
“To make you feel it.” She shrugs. “A priest with a scoop is more convincing than a plate.”
> deceit | Ask what she has in mind. | ladder_a3s2
> truth | Say it is a fraud. | ladder_a3s2
> quiet | Look at the boys. | ladder_a3s2
> mercy | Think of the pilgrims. | ladder_a3s2

=== ladder_a3s2 | Smuggler’s Arithmetic
“If it counts feet,” says Yue, “it can be fooled. A man with a pack weighs more. A man with a stick weighs less.” She taps her teeth. “I’ve smuggled elephants. Nearly. A pressure plate is nothing.”
“What are you going to do?”
“Make everybody weigh one.” She spits on her palm and rubs her hands. “It’s simple. A cushion. A false sole in every shoe. A pad of felt, and a piece of cork. It spreads the weight across a bigger area.”
“And the dial?”
“Reads *one.* For anyone who’s wearing them.”
“Everyone?”
“All ten thousand.” She hoists the stick. “I’ve got a cousin at the cobbler’s guild. He can do a thousand a day.”
“It will take ten days.”
“We have nine.” Her smile is a thin sharp slice. “We’ll start with the ones at the front.”
Hao Lan has appeared at your elbow. She is looking at the dial with the faintly dreamy expression of a clerk who sees an irregularity. “It’s a systemic exploit,” she says. “It’s beautiful.”
“It is only cork,” says Yue.
“It is a *remedy.*”
> deceit | Agree. | ladder_a3s3
> truth | Hesitate. | ladder_a3s3
> quiet | Fetch the cork. | ladder_a3s3
> mercy | Ask Oyun. | ladder_a3s3

=== ladder_a3s3 | A Thousand Soles
The cobblers’ guild turns out in force. It is a vast dim room above a tannery, and a hundred cobblers sit in rows, in aprons, hammering. Yue’s cousin is a small round cheerful man with a wen on his cheek, who is called Pip the Heel. He greets you with enormous suspicion.
“It’s illegal,” he says.
“Is it?”
“It’s *unorthodox.*” He rubs his hands. “Which is worse. My father would turn in his grave.” He sighs. “How many pairs?”
“Ten thousand.”
“In nine days.”
“Yes.”
“Dear Heaven,” says Pip. He sits down on a stool. He looks at the ceiling. He looks at the row of cobblers, who have all stopped hammering. He looks, last of all, at Yue.
“Cousin,” he says, “is this for the Stair?”
“It’s for the pilgrims.”
“It’s for the kids,” says one of the cobblers, quietly, from the back. “It’s the Cribs.” He sets down his awl. “My sister’s boy went up three years back. I’d do it for nothing.”
The hammering resumes. It begins with one cobbler. Then ten. Then a hundred. It rises, in the dim tannery room, like the sound of a very great rain.
> deceit | Smile. | ladder_a3s4
> truth | Thank them. | ladder_a3s4
> quiet | Fetch leather. | ladder_a3s4
> mercy | Weep. | ladder_a3s4

=== ladder_a3s4 | The Insoles
They go out by the sack. You distribute them at dawn, at the edge of the queue, to anyone who will take them. “They’re for your feet,” you say. “They help.” Most take them with bewilderment. A few ask what they are. Hao Lan says, “Arch supports,” with perfect gravity.
The pilgrims put them in. They shuffle up to the pan. They step on.
The dial reads *one.*
“One,” says the clerk, in a bemused voice. He writes it on a slip. “One. One. One.” His pen is faster. “Is there something wrong with the machine?”
“I wouldn’t think so,” says Oyun, mildly, from the ladder. He scoops. He pours. He does not look at the dial. “It has always been very accurate.”
The queue passes quickly. By noon, three thousand have gone up. By evening, eight. A hush has fallen on the court, almost reverent. The pilgrims climb on and off the pan like children at a fair.
In the shade, Yue is dozing against a pillar, with her hat over her eyes and a happy smile.
> deceit | Smile. | ladder_a3s5
> truth | Watch Oyun. | ladder_a3s5
> quiet | Count. | ladder_a3s5
> mercy | Look at the dial. | ladder_a3s5

=== ladder_a3s5 | The Warden Notices
It is the captain of the wardens, of course. He comes into the court at dusk on the third day, with a clipboard, and stands at the foot of the ladder, watching the pilgrims pass. He watches for an hour. His broad red face grows more and more thoughtful.
“Priest,” he says at last.
“Yes, Captain?”
“The weights. They’re all the same.”
“Are they?”
“Seven thousand and sixty pilgrims. All one.” He taps his clipboard. “It’s not natural.”
“It is the Ninth’s company,” says Oyun, peacefully. “They carry each other.”
“That isn’t in the manual.”
“No.” Oyun smiles, with great sweetness. “I am told the manual is out of date.”
The captain looks at him for a long time. Then he steps forward. He takes the nearest pilgrim by the elbow, an old farmer in a patched coat, and lifts the man’s foot.
He examines the sole of the shoe. He prods the cork.
He sets the foot down. He looks at the dial. He looks at Yue, who has woken, and is gazing at the sky with an expression of angelic innocence.
“Cork,” he says.
> deceit | Hold still. | ladder_a3s6
> truth | Step forward. | ladder_a3s6
> quiet | Watch. | ladder_a3s6
> mercy | Look at the farmer. | ladder_a3s6

=== ladder_a3s6 | The Captain’s Shoes
“Aye,” says Yue, with dignity. “Cork.”
The captain turns. He is a thick, grizzled, broad man, with a moustache like a broom. He studies her. His small eyes narrow.
“You’re the smuggler,” he says.
“I am an importer.”
“Of cork.”
“Of cork and other sundries.” She rises. “It’s legal.”
“It is not legal to alter a pilgrim’s weight.”
“I have altered nothing. I’ve merely offered a service.” She spreads her hands. “Footwear. For the comfort of petitioners. It is a courtesy.”
The captain rubs his chin. He looks at his boots. They are black, heavy, hobnailed, much repaired. “I have a bad arch,” he says gruffly.
“I could do you a pair.”
“How much?”
“For a warden? Free.”
“I will not be bribed.”
“It’s a *gift,*” says Yue, with deep reproach. “From a grateful citizen.”
There is a long pause. Then the captain sits down on the ladder-step, with a sigh. He begins to unlace his boots.
> deceit | Smile. | ladder_a3s7
> truth | Watch. | ladder_a3s7
> quiet | Hold your breath. | ladder_a3s7
> mercy | Fetch a pair. | ladder_a3s7

=== ladder_a3s7 | A Rule Is a Rule
It does not, in the end, come to that. The captain wears his new insoles for a week, and is observed to walk with a lighter step. He says nothing. When the Deputy Inspector’s staff come to check the weights, he escorts them round the court himself, with a clipboard, and tells them gravely that the scale has never been so accurate.
“There is a very high uniformity,” he says.
“Remarkable,” says the staff officer.
“It is believed to be a sign of the Ceremony’s sanctity.”
“Indeed.” The officer scribbles. “I shall mention it.”
He leaves. The captain stands watching him go, with a face carved in oak. Then he turns to Yue, who has been sitting very still on an upturned bucket, and lets out a long breath.
“I will deny this,” he says.
“Of course.”
“I have a pension.”
“I’m not going to tell anyone.”
“Good.” He wipes his forehead. He is shaking with laughter that he does not dare let out. “It’s the finest piece of work I’ve ever seen.” He lowers his voice. “My daughter’s in the queue. She weighs one.”
> deceit | Smile. | ladder_a3s8
> truth | Nod. | ladder_a3s8
> quiet | Look at Yue. | ladder_a3s8
> mercy | Thank him. | ladder_a3s8

=== ladder_a3s8 | Nine Thousand Pairs
It takes eight days. By the end of it, nearly everyone in the camp is wearing a pair. The cobblers have run out of cork and moved on to cork-substitutes: dried moss, carved turnip, wadded rag. It no longer matters. The dial reads *one.* It will read *one* for anything with a sole.
The Ninth Office sends an inspector. He peers at the scale. He weighs a rock. It reads one.
“It is miscalibrated,” he says.
“It has always been very accurate,” says Oyun.
“It must be repaired.”
“I should be glad to,” says Oyun, with a bland smile. “The part is a pressure plate, in the floor of the pan. It is held by nine bolts. I understand the founders’ foundry is the only one that can supply them.”
“Where is that?”
“On the Ninth Peak.” He beams. “I believe the journey takes three months.”
The inspector pulls at his beard. He glances at the line of pilgrims, who are watching him with sweet vacant faces. He sighs.
“I shall write to the Treasury,” he says. “It will take some time.”
“Yes,” says Oyun. “It will.”
> deceit | Smile. | ladder_a3s9
> truth | Hold your breath. | ladder_a3s9
> quiet | Look at Yue. | ladder_a3s9
> mercy | Thank Oyun. | ladder_a3s9

=== ladder_a3s9 | The Smuggler’s Fee
She does not charge, of course. She charges nothing, to anyone. But there is a gift in the morning, left on the tail of the cart: a heavy leather bag, tied with red thread. Yue opens it. It is full of copper. A scrawled note says only: *For the cork.*
She stares at it. She counts. There are four thousand and eleven coppers, in tens.
“From the cobblers,” she says. “From the guild.” Her eyes have gone suspiciously bright. “They’ve passed the hat.”
“It’s for you.”
“It’s for the next job.” She ties the bag. “I shall put it in the soup.” She tucks it into her coat. “I have never in my life worked for nothing.”
“You did this time.”
“I did.” She grins, lopsided. “I find I like it. It’s extremely subversive.”
She sits down on the cart-tail, swinging her legs. Beyond the court, the long queue goes on. Ten thousand pilgrims, in felt-soled shoes. Climbing.
Each one weighs the same as the first.
“Funny thing,” says Yue. “I feel taller.”
> deceit | Laugh. | ladder_close | +ladder_ballast
> truth | Sit beside her. | ladder_close | +ladder_ballast
> quiet | Look at the queue. | ladder_close | +ladder_ballast
> mercy | Hug her. | ladder_close | +ladder_ballast

// ---------------------------------------------------------------- a4: carrying
=== ladder_a4s1 | Old Wen
He is eighty if a day, and bent almost double. He leans on a staff, with a bundle on his back as big as himself, wrapped in a faded blanket. His white beard hangs to his knees. He has stood in the queue for nine days, in his turn; the people behind have been kind, and passed him ahead; and still he has not reached the pan. He shuffles. He stops. He gets his breath. He shuffles on.
You come alongside him. “Grandfather.”
“Eh?” His eyes are watery and bright. “Ah. Young lady. Did you want my place? I’m very slow.”
“No. May I help?”
“Help?” He looks astonished. “I’m going to the top. I’ve been going for sixty years. It’s very kind of you, but I must do it myself.”
“What’s in the bundle?”
“My wife.” He pats it. “She died in the spring. I promised her I’d take her. She always wanted to see heaven.”
You look at the blanket. It is a long, narrow shape, no larger than a child. It is wrapped with infinite care.
“She’s ashes,” says Old Wen, simply. “In a jar. But she’s a great weight.”
> mercy | Offer to carry. | ladder_a4s2
> truth | Ask her name. | ladder_a4s2
> quiet | Walk beside him. | ladder_a4s2
> inquiry | Ask how far he has come. | ladder_a4s2

=== ladder_a4s2 | Peony
“Peony,” says Old Wen. “That was her name. She was a laundress in the Southern Ford.” He smiles, tenderly. “She had red hands. She sang while she scrubbed. She said she was going to heaven to look at the washing.”
“She wanted to see the laundry?”
“She wanted to see whether the angels had clean sheets.” He chuckles. “I told her they wouldn’t. I said the Registrar had them all in grey.”
You laugh. He laughs with you, wheezing.
“It’s four hundred miles,” he says. “From the Ford. I walked. I couldn’t afford the barge.” He leans on the staff. “I thought: it will do me good. At my age.” He looks up at the great white spire. “It’s a bit further than I remembered.”
“You’ve been here before?”
“I came with her. Forty years ago, for our wedding. We climbed the first tier.” His eyes are wet. “She carried me. I had a bad knee.”
You look at the three hundred treads of the first tier, rising green into the morning.
“Then let me,” you say.
> mercy | Hold out your arms. | ladder_a4s3
> truth | Say it plainly. | ladder_a4s3
> quiet | Wait. | ladder_a4s3
> inquiry | Ask if he will allow it. | ladder_a4s3

=== ladder_a4s3 | Allowing
He thinks about it for a long time. He leans on his staff and looks at you with his old bright eyes, and his white beard stirs in the wind. A line of pilgrims waits patiently behind. Nobody hurries him.
“I never let anyone,” he says. “Not even the children. I’m a stubborn old goat.”
“I know.”
“It’s my debt.”
“It’s hers.” You nod at the bundle. “She carried you. That’s the debt. You can’t repay it by carrying her. You repay it by letting someone carry both.”
He stares. His mouth works.
“That’s very good,” he says, at last. “Did you make it up?”
“No.” You think of a ferrywoman at the Tidewall, with a smile like an open door. “A friend told me.”
“She sounds clever.”
“She was drowning in other people’s debts.”
“Ah.” He nods slowly. “Then she knows.” He takes the bundle off his back with trembling hands. He holds it for a moment, close to his chest. Then he puts it into your arms.
It is heavier than it looks.
> mercy | Settle it. | ladder_a4s4
> truth | Hold it tight. | ladder_a4s4
> quiet | Bow. | ladder_a4s4
> inquiry | Ask him to hold on. | ladder_a4s4

=== ladder_a4s4 | Both
You carry them both. Wen on your back, Peony in your arms. It is not heavy, at first. He weighs as little as a bundle of sticks. His beard tickles your neck. He clings to your shoulders like a child, with his chin on your collar and his staff in his fist, and his breath, short and cold and smelling of tobacco, comes in your ear.
You begin to climb. Three hundred treads. The first twenty are easy. At the fortieth you feel it in the thighs. At the hundredth, in the back. At the hundred and fiftieth, your arms are shaking and your knees are weeping and there is a cold sweat running down your spine.
The crowd parts. They watch you go up, step by step, among the glittering green. Nobody speaks. A woman crosses her hands on her breast.
“You are doing very well,” murmurs Old Wen, in your ear.
“Thank you.”
“You’re not breathing properly.”
“No.”
“Breathe from the belly. That’s what Peony said.” His voice is thin and fond. “She carried sacks of linen. She had a trick.”
> mercy | Breathe. | ladder_a4s5
> truth | Keep going. | ladder_a4s5
> quiet | Count. | ladder_a4s5
> inquiry | Ask about the trick. | ladder_a4s5

=== ladder_a4s5 | Peony’s Trick
“You don’t think of the weight,” says Old Wen. “You think of the place you’re carrying it *to.* You think of the end.” He pats your shoulder. “She used to say: *the load is the road.* I never knew what it meant.”
“I think I do.”
“Do you?”
“The weight is why you’re going.” You gasp it between steps. “If it were light, it wouldn’t be worth carrying.”
“Hm,” says Old Wen. “That’s rather good.” He is silent for three steps. “I should tell her. She’d be pleased.”
“She’s here.”
“She is.” He pats the jar. “She hasn’t said a word since the spring. She’s a very quiet woman.” He chuckles. “She’s listening, though. I can feel her.”
You climb. The treads ring under your boots. At the two hundredth, a boy of ten steps from the crowd and falls into step beside you, silent, with a stubborn face. At the two hundred and twentieth, a woman joins him. At the two hundred and fortieth, there are a dozen.
They do not offer to take your load. They simply walk with you.
> mercy | Keep climbing. | ladder_a4s6
> truth | Nod. | ladder_a4s6
> quiet | Breathe. | ladder_a4s6
> inquiry | Look behind. | ladder_a4s6

=== ladder_a4s6 | A Procession
By the last turning there are hundreds. They follow you up the final flight in a long white file, with their hands at their sides, in silence. No one is told to. No one has asked. They have simply fallen in behind a woman carrying two, and walk as she walks, one step at a time, as if the road were a prayer.
You reach the landing. Your legs have turned to water. You stagger. Hands catch you from behind. You are lowered to the glass, gently, with the old man still on your shoulders, and the jar, warm and heavy, still in your arms.
Old Wen climbs down. He does it slowly. He stands on the landing, looking about him at the stalls and the lanterns and the row of tea-houses. He is smiling. He turns in a slow circle.
“It’s smaller,” he says, “than I remember.”
“It’s a landing.”
“It’s lovely.” He sets his staff down. He holds out his arms.
You give him the jar. He takes it. He cradles it against his chest, like a child.
“Peony,” he says, in a cracked whisper. “Look.”
> mercy | Smile. | ladder_a4s7
> truth | Weep. | ladder_a4s7
> quiet | Step back. | ladder_a4s7
> inquiry | Ask where he will put her. | ladder_a4s7

=== ladder_a4s7 | Where Peony Went
He puts her in a tea-house. It is a small one, on the edge of the landing, with a red lantern and a row of wooden tables. The proprietor, a fat woman in a blue apron, hears the story and says nothing at all. She clears the best table, by the window. She spreads a white cloth. She sets out two cups.
Old Wen sets the jar upright on the cloth. He arranges the blanket round it. He sits down opposite. He pours the tea. He pours one for himself, and one for Peony.
“She always took it with honey,” he says. “Pass the pot, would you?”
You pass it.
He drinks. He looks out of the window, at the great curve of the Stair, the pilgrims moving up, the sky. The sun is on his face. The old man’s whole body has relaxed. He is no longer bent. He sits at the table like a young man, with his shoulders down.
“There,” he says. “That’s heaven.” He smiles at the jar. “Look, dear. They’ve got clean sheets.”
At the next table, a woman is weeping into her sleeve.
> mercy | Leave them. | ladder_a4s8
> truth | Take a cup. | ladder_a4s8
> quiet | Watch. | ladder_a4s8
> inquiry | Ask the proprietor. | ladder_a4s8

=== ladder_a4s8 | Not Going Higher
“He’s not going on,” says the proprietor. She sets down a plate of buns. “He said so. He said: *this is far enough.*” She wipes her hands. “I’ve been in this house thirty years. I’ve seen a lot of people go up. I’ve never seen anyone stop.”
“Why?”
“I don’t know.” She looks at the old man. “I think when you’ve carried something for a long way, you forget what you were carrying it for.” Her voice is rough. “And then somebody takes it, for the length of a staircase. And you remember.”
“What will he do?”
“Sit.” She shrugs. “Drink tea. Feed the pigeons.” She cracks a smile. “I’ve a spare room. He can have it.”
“For how long?”
“As long as he likes.” She turns back to her stove. “The jar can stay on the sill. It’s a good one. It gets the morning sun.”
You climb down the steps. At the bottom, in the dusk, the line of pilgrims is waiting. They have been waiting all afternoon. They stand in the cold with their hands at their sides.
“Is he well?” says a boy.
“He’s having tea.”
The boy nods slowly.
> mercy | Smile. | ladder_a4s9
> truth | Bow. | ladder_a4s9
> quiet | Look back. | ladder_a4s9
> inquiry | Ask what they want. | ladder_a4s9

=== ladder_a4s9 | Carrying
They want to be carried. That is the thing nobody says. They are the old and the lame and the sick and the tired, and they have been dragging themselves up an endless flight for weeks. Not one has asked. They would not know how.
You do not carry them all. You could not. But in the morning there is a line at the foot of the first tier, waiting in the cold. They are looking at each other.
Ren Qiao, on the barrier, takes off his tabard. He kneels. “Get on,” he says to a woman with a baby.
She gapes. “What?”
“It’s three hundred steps. I’ve a broad back.”
Hanming picks up a boy. Gu a girl. Yue hoists an old man like a sack of meal. Duan Wuyi, grey-faced and appalled, finds an elderly priest clinging to his neck. The Elder stands very straight, with a shawl, and takes the hand of a toddler.
By noon half the camp is carrying the other half. It is a procession, a long unsteady line, laughing and gasping and complaining, going up. The treads ring.
It is the heaviest, happiest morning of your life.
> mercy | Carry another. | ladder_close | +ladder_carried
> truth | Laugh. | ladder_close | +ladder_carried
> quiet | Look at the Elder. | ladder_close | +ladder_carried
> inquiry | Ask the Elder. | ladder_close | +ladder_carried

// ---------------------------------------------------------------- hidden: the first card
=== ladder_h1 | Carry What Is Heavy
You lay it on the pan. It says, in careful letters: *Carry what is heavy.* It was given to you in a lamp-room, by a ferrywoman, with a smile like an open door. It lies on the brass in the morning light.
The beam stirs.
The priest, on the ladder, with the scoop in his hand, looks down. His face changes. “That is not a weight,” he says. “It is…”
“It is a card.”
“It is a *verb.*” His voice is a whisper. “The first. The first of the nine.” He puts down the scoop. “I have never seen one.”
The pan sinks. It does not sink with the card’s weight. It sinks with something else. You feel it through your boots, a deep, steady, rising pressure, as of a very great tide turning. The dial spins. The pointer swings through numbers you have never seen, numbers with many noughts, and slows, and shudders, and stops.
It is not on a number.
It is on a word. In small black letters, on the brass face, it says: *Taken.*
“What does it mean?” you whisper.
“I think,” says Oyun, slowly, “that you have picked it up.”
> inquiry | Stand still. | ladder_h2
> truth | Look at the dial. | ladder_h2
> mercy | Hold the card. | ladder_h2
> quiet | Close your eyes. | ladder_h2

=== ladder_h2 | Taking It
You feel it all. Ten thousand pilgrims, in white, in the queue. Four hundred and fifty thousand in the barrels. Seven thousand more in the cellar. Each name, each small cold grain, each pilgrim’s cost and every child’s: you feel them settle on your shoulders like a coat. It is a vast weight. It is the weight of the whole Stair.
You do not stagger. That is the astonishing part. You stand on the pan with your arms at your sides, and let it come. It sinks into your bones. It fills your chest. It is heavy, and it is warm, and it is, in some strange way, familiar. You have carried it before. You have carried it since you were five.
The pan rises.
It does not fall. It flows. It flows up the first tier, over the treads, over the glass, in a bright red ribbon.
“Where is it going?” cries Oyun.
“Up.”
“Why?”
“To be carried,” you say.
> inquiry | Walk. | ladder_h3
> truth | Hold on. | ladder_h3
> mercy | Weep. | ladder_h3
> quiet | Follow the ash. | ladder_h3

=== ladder_h3 | The Weight Lifted
It reaches the summit by evening. You do not see it arrive; you are still in the court, on your knees, with your forehead against the cool brass, and Ren Qiao’s hand on your shoulder. But the camp sees. A great bright thread of red, going up the spiral of the Stair, glowing against the white. It shines in the sunset like a vein. It disappears into the clouds.
The pans hang level. They hang level for the first time in seven hundred years: empty on one side, empty on the other, gleaming. The dial reads, steady, in the dusk: *None.*
Oyun is weeping. He sits on the lowest step with his scoop across his knees. “I do not know what to say,” he says. “It is a miracle.”
“It is a verb.”
“It is the same.” He wipes his face. “I thought the cards were a legend. A children’s story. The First Voice’s nine. I had never believed.”
You lift your head. Your arms are shaking. Your body is leaden. But there is a lightness in your chest that you have never felt.
“It isn’t over,” you say.
“No.” He smiles. “It is only the first.”
> inquiry | Rise. | ladder_close | +ladder_card
> truth | Take his hand. | ladder_close | +ladder_card
> mercy | Look up. | ladder_close | +ladder_card
> quiet | Rest. | ladder_close | +ladder_card

// ---------------------------------------------------------------- close
=== ladder_close | After the Weighing
By evening the courtyard is quiet. The pans are still. The barrels have been rolled away. A few pilgrims sit about on the steps in the failing light, eating, talking in low voices. Somewhere in the dusk a flute is playing.
+[how] ladder_weighed | The dial settled at one, and a priest asked leave to plant the ash.
+[how] ladder_broken | You knocked out the pins in the dark, and a priest held the rope.
+[how] ladder_ballast | Ten thousand pairs of cork soles made every pilgrim weigh the same as the first.
+[how] ladder_carried | You carried an old man and his wife up three hundred treads, and half the camp followed.
+[how] ladder_card | You laid the first card on the pan, and picked up the weight of the Stair.
The Elder finds you sitting on the lowest tread. She has a blanket. She puts it round your shoulders, without a word, and sits down beside you, in her upright careful way, with her hands in her lap.
“I would like to tell you something,” she says.
“Yes.”
“I was fourteen the first time I was weighed.” Her voice is quiet. “At the Law Hall. In the entrance examination. They put me on a small scale, and a Master read the dial.” She smiles faintly. “It said: *Exceptional.* I was so proud. I carried that word for twenty-nine years.”
“And?”
“And I now believe that it was the first thing I ever signed.” She looks at the dark Stair. “I should like to un-sign it.”
“How?”
“By being lighter,” says the Elder. “If I can.”
> truth | Smile. | ladder_close2 | +b5q_ladder
> mercy | Hold her hand. | ladder_close2 | +b5q_ladder
> quiet | Look at the stars. | ladder_close2 | +b5q_ladder
> inquiry | Ask how. | ladder_close2 | +b5q_ladder

=== ladder_close2 | Lighter
She starts the next morning. She does it unannounced, as she does everything. She gets up before dawn, and goes to the soup-line, and asks Brother Lung for a ladle. He gives her one, with a short blink. She joins the line of cooks. She stirs.
She is terrible at it. She stirs too fast, then too slow, then in the wrong direction. She spills. She burns her hand. She produces a pot of porridge of such aggressive, geometric blandness that the pilgrims eat it in respectful silence. At the end of the first day, Brother Lung examines the pot and says gravely, “It is very even.”
“Thank you.”
“There is no flavour.”
“I am aware.” She sets her jaw. “I shall improve.”
By the end of the week she can make a stew. She has mastered, to her great satisfaction, the art of the pinch of salt. She has acquired a stained apron, a burn on her thumb, and a half-circle of small children who watch her stir with enormous interest.
“What are you making?” says one.
“Soup.”
“What for?”
“So that nobody is hungry,” says the Elder. She looks, you think, about ten years younger.
> truth | Smile. | hub_b5_b | bond:ren+3
> mercy | Taste the stew. | hub_b5_b | bond:ren+3
> quiet | Stir. | hub_b5_b | bond:ren+3
> inquiry | Ask about the pinch. | hub_b5_b | bond:ren+3

`,
  scenarios: String.raw`
$ SU_LADDER_SCALE | trust+4 respect+3 fear+4 | elder | The Elder is weighed against the children who would pay for her ascent.
hostile: The dial stopped at fourteen. The clerk said it as he might say the price of eggs. I stood on the pan with my hands at my sides. I had been braced for a larger number. I was not braced for it to be so exactly right.
wary: I asked the priest what the ash was. He said: the weight. I asked whose. He said it was not his place. I said: then whose is it? He looked at me with a face I shall remember, and said: ‘Madam, it is nobody’s. That is why it is so heavy.’
neutral: The pan went down and the beam did not move for a very long minute. I could hear the ash falling, grain by grain. I thought of my signatures. I thought of every desk in my life. The beam rose. It levelled. The number was fourteen. I stepped down and found my knees were shaking.
warm: Hanzhen stood on the pan after me. The dial said: one. The clerk laughed. Hanzhen asked why. The clerk said: ‘You weigh nothing, lad.’ Hanzhen said: ‘I weigh one.’ The clerk stopped laughing. I have never been so proud of anyone.
devoted: I have asked myself what it would mean to weigh nothing. To be a person who cost no one. I think it is the only thing I have ever truly wanted. I am not sure that it is possible. I should like, before I die, to find out.
`,
  remarks: String.raw`
% ladder_oyun_later | since:b5q_ladder>=4 | ren | The priest Oyun came to our fire with a scoop. It is an ordinary scoop. He said he did not know what to do with it. I suggested soup. He has been ladling barley for three days and has not stopped smiling.
% ladder_wen_later | since:ladder_carried>=3 | gu | Old Wen asks after you every morning. He walked the whole first tier on his own two feet yesterday, with a stick. He says he wished to see if he still could. He says it is much shorter than it was.
`,
}
