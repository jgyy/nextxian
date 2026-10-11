import type { Arc } from "../types";

/**
 * Book Three, arc one (the sea road): the Picket Line. Three Concord cutters hold the Gull Channel, and one of them is commanded
 * by the man who taught Mei Qiu to row. Four approaches: Mei vouches and the crossing is honest (a1, truth), the black boat runs
 * the line by night (a2, force), a funeral barge with a forged manifest (a3, deceit), and a drift through the fog by the Salt
 * Lamp's code (a4, quiet). A hidden route uses Mei's tide-book to take the Whispering Cut under the Wall.
 * Cast: Captain Ro Gan, Lieutenant Jun, Mei Qiu, Yue Zhaoning, Hao Lan, Tong, the Lamp's unseen signaller.
 */
export const coast: Arc = {
  id: "coast",
  name: "The Picket Line",
  scenes: String.raw`
=== coast_entry | Three Cutters
The Gull Channel is a mile wide and runs four leagues between two shoals, and across the narrowest part of it, spaced like beads on a string, lie three grey cutters with their lamps lit in daylight. Each flies the white-and-grey of the Concord. Each has a bow-gun under canvas and a dozen men in grey leather standing at the rail.
Yue Zhaoning has put down the pole. The black boat drifts on the ebb. Nobody has spoken for a full minute.
“Customs,” says Yue at last, with a distaste that suggests the word has been used on her before. “Except it is not customs. Customs does not put three boats across a channel and light them at noon. Somebody has told the coast that a certain boat is coming.”
Mei Qiu has gone to the bow. She is looking at the middle cutter, and her face has changed.
“That is the Heron,” she says. “That is Ro Gan.”
> truth | Ask Mei who Ro Gan is, and whether he can be spoken to. | coast_a1s1
> force | Ask Yue whether the black boat can run the line before the cutters close. | coast_a2s1 | needs:3
> deceit | Ask Hao Lan what manifest a boat like this might plausibly carry. | coast_a3s1
> quiet | Ask the Elder whether the sea can be crossed by going around the cutters. | coast_a4s1
> inquiry | Ask Mei whether she remembers the tide-book her old captain kept, and what it said about the Wall. | coast_h1 |  | barge_mei_ally | Mei has not yet trusted you with that.

// ---------------------------------------------------------------- a1: Mei vouches
=== coast_a1s1 | The Man Who Taught Her to Row
“Ro Gan was my first captain,” says Mei Qiu. She is looking straight ahead. “I was fourteen, and I could not tell a bow from a stern. He taught me to row with a stone on my head so I would keep my spine straight. He has never raised his voice at me. He once held my head over a gunwale for an hour while I was sick, and did not tell anyone.”
She breathes out.
“I have not seen him in nine years. I did not send word when my sister’s wall was dedicated. He sent a bowl of rice. I did not eat it, and I did not send it back.”
The middle cutter has put out a boat. It is making straight for you.
> truth | Tell her you will stand beside her, whatever she says. | coast_a1s2
> mercy | Tell her that if she cannot do it, you will. | coast_a1s2 | bond:hao+1
> quiet | Say nothing. Let her find her own words. | coast_a1s2
> inquiry | Ask what kind of man he is when he is given an order. | coast_a1s2

=== coast_a1s2 | The Boarding Party
The boat is a clinker-built longboat with six oars and a grey pennant. It comes alongside with a thump, and a man stands up in the stern. He is fifty and broad, with a face like a boiled ham and a white scar across the bridge of his nose. Beside him a young man in an immaculate grey tunic is holding a boarding-pike as if it might bite him.
“Captain Ro Gan, of the Heron,” says the older man, in a voice that carries without effort. “Lieutenant Jun, of the Heron. By order of the Concord’s Second Chancery, I am to board and inspect any vessel from the river provinces. I am to take into custody any person named on the attached list.”
His eyes pass along the faces. They stop on the stern.
“Mei,” he says.
> truth | Let her answer. | coast_a1s3
> quiet | Watch his hands. | coast_a1s3
> mercy | Step half a pace in front of the Elder. | coast_a1s3
> inquiry | Ask to see the list. | coast_a1s3

=== coast_a1s3 | Captain Ro Gan
“Captain,” says Mei Qiu. Her voice is level and very small. “I am Inspector Mei of the Seal Office. I have resigned my commission. I did it in the Assembly Hall, in front of three hundred delegates. I put my sash on the floor.”
“I heard,” says Ro Gan. The pike-wielding lieutenant glances sideways at him. “It was in the dispatches. It said you had been suborned.”
“I was not suborned.”
“I thought not.” He steps over the thwart onto the black boat without being asked. The boards creak. He is a big man, and he moves like a man carrying a tray of something precious. He stops in front of her and looks down.
“You are thin,” he says.
Lieutenant Jun says, in a high, steady voice, “Captain, the order.”
> truth | Hold out your hands, and say you will come quietly if Mei is let go. | coast_a1s4
> mercy | Say Mei has done nothing wrong, and ask him to hear her. | coast_a1s4
> inquiry | Ask Ro Gan what the order says, in the exact words. | coast_a1s4
> quiet | Take a step back and let the Captain and his old pupil have the deck. | coast_a1s4

=== coast_a1s4 | The Exact Words
Ro Gan takes the paper from his sleeve, unfolds it, and reads it aloud in a flat clear voice, the voice of a man who has read ten thousand orders and cannot recall one. “Any vessel arriving at the Salt Coast from the river provinces is to be detained, boarded, and searched. The persons named on the list are to be delivered to the Chancery at Tidewall. The bearer of the black seed is to be held. All other persons aboard are to be questioned.”
He lowers the paper.
“It does not say,” he adds, “what is to be done with a Seal Inspector who has resigned in the presence of the Assembly.”
Jun draws in a breath. “Captain, the bearer is on this boat. The woman beside the Elder. Her left hand is scarred.”
“Is it?” says Ro Gan mildly, not looking.
> truth | Step forward, and say it is you. | coast_a1s5
> quiet | Close your left hand. | coast_a1s5
> mercy | Put your hand behind the Elder’s sleeve. | coast_a1s5
> deceit | Say the Lieutenant is mistaken, and the scar is a burn from the galley. | coast_a1s5

=== coast_a1s5 | A Scar
Ro Gan crosses the thwart in two steps and takes your left hand in both of his. He turns it over. The white line runs from the thumb to the heel of the hand. He runs his own thumb along it, once, in the manner of a man testing a rope.
“This is old,” he says, quite gently. “A burn from a lamp, I should say. You were small.” He lets the hand fall. “It is a common sort of scar on this coast. We have a great many lamps.”
The Lieutenant’s knuckles are white on the pike. “Captain, the register—”
“The register,” says Ro Gan, “is a piece of paper, and I am the captain of a boat. I will inspect what I choose.” He looks at Mei Qiu. “Tell me why you are on the Salt Coast.”
> truth | Let Mei tell him about the wound, and the Second Order. | coast_a1s6
> mercy | Let Mei tell him about her sister. | coast_a1s6
> quiet | Let her choose what to say. | coast_a1s6
> inquiry | Ask him what he knows of the wound off the coast. | coast_a1s6

=== coast_a1s6 | Ke-er
“I held the lamp,” says Mei Qiu. “For Ke-er.”
It has been a long time since anyone on the boat has said that name aloud. The wind drops. The gulls stop wheeling. Ro Gan’s face does something complicated and then does nothing at all. He sets his hands on the gunwale on either side of her, as if bracing a ship.
“I was there,” he says. “At the harbour. I was holding the other lamp.”
Jun’s mouth has fallen open.
“I stood next to you,” says Ro Gan. “You were nine. You never looked at me, you looked at the wound. I watched you hold the light for a hundred and four years of other people’s peace, and I never said a word, because I thought, she will understand when she is older.” His voice cracks on the last word. “You did not. Neither did I.”
> truth | Give them the room. | coast_a1s7
> mercy | Quietly bring them a cup of water. | coast_a1s7
> quiet | Look at the sea. | coast_a1s7
> inquiry | Ask Ro Gan quietly whether he would help them reach the harbour. | coast_a1s7

=== coast_a1s7 | The Lieutenant
Lieutenant Jun has not moved. He is twenty-two, perhaps, and has the pink scrubbed face of a young man who has never in his life been wrong. His pike is shaking.
“Captain,” he says. “This is treason. The Second Order was authorised in due form. It was signed.”
“It was signed,” says Ro Gan, “by a man named Fang, with a pen. You were at the Academy. You know what I mean when I say that a signature is a promise to be wrong in an orderly manner.”
“I know that I was taught to obey.”
“And I taught you to row,” says Ro Gan wearily, “and you are rowing the wrong boat. Think, Jun. Think, as you were taught.”
Jun’s eyes go to you, then to the Elder, then to the iron bar in Mei Qiu’s hand. He lowers the pike an inch.
> truth | Tell Jun the order is wrong, and that he knows it. | coast_a1s8 | +coast_jun_told
> mercy | Tell him no one on this boat will hurt him. | coast_a1s8
> force | Step between Jun and the Captain. | coast_a1s8
> quiet | Wait. It is his to decide. | coast_a1s8

=== coast_a1s8 | The Log
“I shall write,” says Ro Gan, taking out a small black book, “that the Heron boarded a boat of the river provinces at the fifth bell. I shall write that the persons aboard were examined, and that no person bearing the mark was found. I shall write that I am not satisfied and will examine again.”
He writes. The pen is very loud.
“I shall write that I will examine again at the ninth bell,” he adds. “That will give you four hours to be out of my channel.”
Jun says, in a very small voice, “You cannot do that.”
“I cannot do anything else,” says Ro Gan. He looks at the boy. “Write down that I told you to arrest me, Lieutenant, and that you declined. It is a good entry. It will look well at the inquiry.”
He climbs back into the longboat. He does not look at Mei again.
> truth | Thank him aloud. | coast_close | +coast_ro_helped
> mercy | Throw Mei’s old captain a rope of dried fish, for the road. | coast_close | +coast_ro_helped
> quiet | Raise a hand. | coast_close | +coast_ro_helped
> inquiry | Ask Mei what he meant by the ninth bell. | coast_close | +coast_ro_helped

// ---------------------------------------------------------------- a2: run the line
=== coast_a2s1 | The Black Boat
Yue Zhaoning laughs, a short unamused bark, and takes up the pole. “You are asking if my boat can outrun three grey cutters on an ebb tide with eight people aboard. I will tell you what I tell every customer. She can do it, and she will not like it.”
She runs a hand along the rail the way another woman might stroke a horse. The boat is long and low, tarred black, drawing hardly a foot. Her mast is folded. Her keel has been carefully planed to a knife’s edge for a purpose Yue has never explained.
“She was built to go over shoals,” she says. “Those cutters have a draught of nine feet. If I can put a bar between them and me, they cannot follow.”
Gu, behind you, has gone quite white.
> force | Tell her to run it. | coast_a2s2 | needs:3
> truth | Tell her the truth: you do not want anyone hurt. | coast_a2s2
> quiet | Ask her to wait for dusk. | coast_a2s2
> inquiry | Ask where the bar is. | coast_a2s2

=== coast_a2s2 | The Bar at Dusk
Yue waits for dusk. She is not a fool. She ties up in a creek behind an island of reeds and passes round a bowl of cold millet while the sun goes down, red as a coal, into the channel. Nobody speaks much. Tong draws a shoal on the bottom of the boat, and the shoal, when you look at it, is exactly where the creek ends.
“There,” says Yue, pointing. “The Gull Bar. At the full flood it is four feet under. At the ebb it is dry. In an hour it will be eighteen inches, which is as much as I can ask.”
Ren Qiao is checking his sword. He catches your eye. “If they fire,” he says, “I shall not be able to stop a cannonball.”
“No,” says Yue. “That is why you will lie flat.”
> force | Take the stern oar beside her. | coast_a2s3
> quiet | Go forward and watch the water. | coast_a2s3
> mercy | Tell the others to lie flat and keep still. | coast_a2s3 | bond:gu+1
> truth | Ask the Elder how afraid she is. | coast_a2s3

=== coast_a2s3 | The Run
The black boat comes out of the creek at a speed that makes your stomach lurch. The pole bites. The cutters have seen you; a horn howls from the Heron, answered by one from the Plover, and then the third. Their lamps swing toward you like the heads of curious cattle.
Yue stands at the stern with her whole weight on the pole and her teeth showing. The boat skims. Water hisses past the planks a hand’s breadth below your knees. The eastern cutter begins to turn, a slow heavy pivot, her bow-gun swinging out from under its canvas.
“Down!” shouts Yue.
You go down. The sky above goes white. A moment later a sound hits you like a door slamming in a very large house.
> force | Look up. | coast_a2s4
> quiet | Press your face to the planks and count. | coast_a2s4
> truth | Reach for the Elder’s hand. | coast_a2s4
> mercy | Cover Tong with your body. | coast_a2s4 | bond:hao+1

=== coast_a2s4 | The Splash
The shot goes wide, as the first shot always does, and raises a column of water thirty feet to larboard. The second will not. You can hear the gun-crew swabbing and ramming. The gap between you and the Plover is two hundred yards, and closing.
Yue has stopped laughing. “The bar is a hundred yards ahead,” she says between her teeth. “I need one more thing. I need to lighten the boat.”
Her eyes sweep the deck. There are eight of you and four barrels of water and a chest.
“Not the chest,” says Hao Lan sharply. “Not the registers.”
“Then the people,” says Yue.
Nobody moves. Yue points her chin at the nearest barrel. “Or the water. Make up your minds. I have about a minute.”
> force | Heave the barrels over. | coast_a2s5
> truth | Jump over yourself, and swim for the bar. | coast_a2s5
> quiet | Throw out the chest, and trust Hao Lan to have copies. | coast_a2s5
> deceit | Tell Yue the chest is empty. | coast_a2s5

=== coast_a2s5 | The Bar
The boat leaps. Barrels bob behind you, nine strokes of an oar, ten, and the keel kisses sand. Yue shouts, drives the pole into the bar, and heaves. For a terrible moment you stick. The Plover’s second shot howls overhead and drops into the channel. Then the sand lets go, with a long wet sigh, and the black boat scrapes over the Gull Bar into the deep channel beyond.
Behind you the Plover heaves up on the bar, shudders, and sticks. Her bow-gun tilts uselessly at the sky.
You are over. You are through. You are lying on the planks in a puddle of seawater with the Elder’s elbow in your ribs, and nobody has been killed.
Yue Zhaoning is laughing again, softly, with her forehead on the pole.
> force | Laugh with her. | coast_a2s6 | needs:3
> truth | Check that everyone is whole. | coast_a2s6 | bond:gu+1
> mercy | Help the Elder up first. | coast_a2s6
> quiet | Look back at the Plover. | coast_a2s6

=== coast_a2s6 | The Damage
The boat is not whole. When you look, you see that the shoal has taken a strake from the bottom of the hull, a long pale wound where the tar has flaked away, and that water is entering in a steady bright thread. Ren Qiao is already stuffing his sleeve into the gap. Gu has found a ladle.
“She is going to need a yard,” says Yue, kneeling to look, and for the first time she sounds her age. “Not now. I can keep her afloat to the harbour. After that she goes up on the hard for a month.”
The Elder has not said anything. She is sitting on the chest, her cloak soaked to the shoulders, and she is looking at you with the expression of a woman revising a long-held opinion.
“That was reckless,” she says, in the dry voice she uses when she has been very afraid. “It was also rather good.”
> force | Say that you are sorry for the boat. | coast_a2s7
> truth | Take responsibility for the damage, and offer to pay for it. | coast_a2s7 | +coast_boat_owed
> mercy | Offer to help bail. | coast_a2s7
> quiet | Say nothing. Pick up a ladle. | coast_a2s7

=== coast_a2s7 | Bailing
You bail for two hours. It is not romantic. The water is cold and the ladle is cracked. Gu works beside you, silent and focused, with a strand of hair stuck to his forehead. Ren Qiao patches the strake with a spare sail-cloth and a ball of pitch he finds in a locker, and the leak slows from a thread to a drip.
Tong, who has done nothing at all, has drawn the sea. He has drawn it in a sweeping line down the starboard side, the swell and the trough, the foam, a gull. It looks alive. It looks as if it is trying to be the sea, and has been unable to decide how.
“He draws what he is afraid of,” says Hao Lan quietly. “It helps.”
The lights of a harbour are coming up out of the dusk.
> force | Thank Yue for the run. | coast_close | +coast_ran_line
> truth | Admit to Gu you were frightened. | coast_close | +coast_ran_line bond:gu+2
> mercy | Give Tong your cloak. | coast_close | +coast_ran_line
> quiet | Watch the lights. | coast_close | +coast_ran_line

// ---------------------------------------------------------------- a3: funeral barge
=== coast_a3s1 | The Manifest
Hao Lan opens her satchel and takes out four kinds of paper, two inks, a stick of wax, and a seal she says she has never before used. She spreads them on the chest with the grave unhurried air of a woman about to do something she knows to be illegal.
“A boat from the river provinces will be searched,” she says. “A boat from the coast will not. A boat carrying a coffin will be searched less, because no sane Concord officer wants to open it. A boat carrying a coffin and a bereaved family, in white, will be waved through with a bow. There is a Censor’s rule that says so. I wrote the footnote.”
She looks round the boat.
“We need a corpse,” she says. “Who will volunteer?”
Nobody does.
> deceit | Offer to be the corpse. | coast_a3s2
> truth | Point out that it is a terrible idea. | coast_a3s2
> mercy | Say that Tong is small enough to fit and quiet enough not to complain. | coast_a3s2
> quiet | Suggest the chest, packed with ballast. | coast_a3s2

=== coast_a3s2 | Whose Funeral
“It needs a name,” says Hao Lan. “A dead man must have a name, or the clerk will want to enter one.” She dips her brush. “It should be a name nobody will be tempted to check. A salt-worker’s. A small family. A death from the lung rot, which is common on the coast and which no one will ever wish to inspect.”
The brush hovers. The Elder has been watching her with an unreadable expression.
“Write it in my hand,” says the Elder. “The coroner’s hand. I have signed a thousand. They will not check.”
“Madam,” says Hao Lan, appalled, “that is a forgery of a Law Hall official.”
“It is a forgery of me,” says the Elder. “I find I am entitled.” She takes the brush and writes. The name is Ma Tao. The date is last week. The cause is the lung rot. Her hand does not shake.
> deceit | Add a flourish of your own. | coast_a3s3
> truth | Ask her whether she minds. | coast_a3s3 | bond:ren+1
> mercy | Light a stick of incense, for Ma Tao, who never lived. | coast_a3s3
> inquiry | Ask Hao Lan how many forged names she has written. | coast_a3s3

=== coast_a3s3 | Dressing Up
The boat becomes a funeral. Yue rigs a white banner at the stern and ties the chest to the thwart with ropes of straw. Ren Qiao, who has the face of a mourner, is made chief of the family; Gu is made a nephew and told to look as if he is going to cry. Mei Qiu is a cousin from the Seal Office and is wearing her old grey sash on purpose. The Elder is the widow. Tong is a boy. You are, with unmistakable relish on Yue’s part, a distant aunt.
“I do not see why,” you begin.
“You are small and plain and nobody looks at you twice,” says Yue. “Also I have a wig.”
She produces the wig. It is a grey matron’s wig with a pin. She puts it on you. The boat shakes with the suppressed laughter of seven people trying very hard not to disgrace the dead.
> deceit | Accept it with dignity. | coast_a3s4
> truth | Protest. | coast_a3s4
> mercy | Fix Gu’s collar. | coast_a3s4 | bond:gu+1
> quiet | Practise a sorrowful face. | coast_a3s4

=== coast_a3s4 | The Heron Comes Alongside
The cutter heaves to at dusk, and a longboat comes out. The man in the stern is a broad grey captain with a boiled-ham face and a scarred nose. The young lieutenant in the bow is holding his pike with great care.
“Inspection,” says the Captain, in the voice of a man who has had it said to him ten thousand times. “A funeral boat?”
“A funeral,” says Ren Qiao. His grief is believable because it is almost entirely his own. “Our brother. Ma Tao. The lung rot, as is common.”
“I am sorry.” The Captain is looking at the coffin. He does not look at anyone’s face. “It is unusual to travel by water.”
“He wished to be buried at sea,” says Hao Lan. “It is a custom of the salt-workers. A dutiful family does not refuse.”
> deceit | Add a sob. | coast_a3s5
> truth | Say nothing. | coast_a3s5
> quiet | Look at the water. | coast_a3s5
> inquiry | Ask the Captain if he has lost anyone. | coast_a3s5

=== coast_a3s5 | The Lid
Lieutenant Jun has been looking at the coffin for some time. He has the anxious pink look of a man who has been taught that officers do not go by appearances. “Captain,” he says, “by regulation, we are required to open any receptacle.”
“By regulation,” says the Captain. “Yes.”
“It is a coffin.”
“It is a coffin,” says the Captain, “and the man is dead of lung rot. If you open it, Lieutenant, you may get the lung rot. If you get the lung rot, I shall have to write a letter to your mother.” He pauses. “She is a formidable woman.”
Jun hesitates. His hand has gone to the lid. The straw rope is tied with the Elder’s best knot.
In the coffin, very distinctly, something sneezes.
> deceit | Cough loudly. | coast_a3s6
> truth | Say it was the draught. | coast_a3s6
> mercy | Weep. | coast_a3s6
> quiet | Hold your breath. | coast_a3s6

=== coast_a3s6 | The Sneeze
Nobody breathes. Even the sea seems to hold its tongue. Lieutenant Jun withdraws his hand from the lid as if it had been bitten. Captain Ro Gan looks at the sky, then at the ropes, then at the grieving company in white, and then, very slowly, at Mei Qiu.
“Cousin,” he says. “From the Seal Office.”
“Yes,” says Mei Qiu, without moving a muscle.
“You have not been a cousin for very long.”
“No.”
The Captain’s mouth twitches. It is the beginning of something that may be a smile, or a stroke. He turns to the Lieutenant. “It was the draught,” he says. “It is a cold evening. The dead man was doubtless of a robust constitution. Make a note.”
Jun writes, with a hand that trembles slightly: draught.
> deceit | Dab your eyes with the hem of your wig. | coast_a3s7
> truth | Thank them quietly. | coast_a3s7
> mercy | Offer the Captain a cup of the funeral wine. | coast_a3s7
> quiet | Bow. | coast_a3s7

=== coast_a3s7 | What the Captain Said
Ro Gan accepts the funeral wine. He drinks it standing in the longboat, with his eyes closed, and returns the cup with a small respectful bow. “For Ma Tao,” he says. “Whoever he may have been.”
He looks at the water for a moment.
“I would suggest the harbour at Tidewall, rather than the open sea,” he says. “The Wall is a fine place to bury a man. I would suggest you go by the Whispering Cut, which is not marked on the charts and is not patrolled. I would suggest you leave before the ninth bell, when the Plover goes back on station.”
“Thank you, Captain,” says Mei Qiu.
“I am a stranger,” he says, “and I know nothing about the lung rot.” He sits down. The longboat pulls away.
> deceit | Wave a hanky. | coast_a3s8 | +coast_funeral
> truth | Wait until the boat is out of earshot, and then laugh. | coast_a3s8 | +coast_funeral
> mercy | Say a short prayer for the dead man who never was. | coast_a3s8 | +coast_funeral
> quiet | Take off the wig. | coast_a3s8 | +coast_funeral

=== coast_a3s8 | The Coffin Opens
Tong climbs out of the coffin when the longboat is a safe distance away. He is white to the ears. He has a pencil behind one ear and a smear of ink across his forehead, and on the inside of the lid, he has drawn something. It is a perfect likeness of Lieutenant Jun’s face, with its expression of heroic, hopeless integrity.
“I could hear him,” says Tong. “He was thinking about his mother.”
Hao Lan puts her hand over her mouth. Her shoulders shake. It takes you a moment to understand that she is laughing, and a moment more to see that she has been crying as well.
“Oh, Tong,” she says.
> deceit | Hug him. | coast_close | +coast_funeral
> truth | Ask him what else he heard. | coast_close | +coast_funeral
> mercy | Give him your water. | coast_close | +coast_funeral
> quiet | Smile. | coast_close | +coast_funeral

// ---------------------------------------------------------------- a4: the fog and the lamp
=== coast_a4s1 | The Fog Bank
The Elder studies the horizon. She has a way of narrowing her eyes at a distance that makes her look as if she is reading small print. “Fog,” she says at last. “From the south-east. Four hours.” She does not say how she knows. She has been reading the sky for sixty years, from a window.
“Fog is a Censor’s weather,” says Mei Qiu. “The cutters will light more lamps, and see less.”
“Then we want to be where the lamps are not,” says Yue Zhaoning. “Which is the middle of nowhere. Which I can find.”
She starts to unfold the mast. It is a delicate business, and the boat shudders as the spar swings up and locks.
“I have a sail the colour of a cloud,” she says. “Nobody has ever seen it. It was dyed in tea.”
> quiet | Help her with the sail. | coast_a4s2
> truth | Ask how she found it. | coast_a4s2
> inquiry | Ask who has seen it. | coast_a4s2
> mercy | Ask whether the sea is cold. | coast_a4s2

=== coast_a4s2 | The Tea-Dyed Sail
The fog comes in as the Elder said it would. It rolls in from the south-east in a long grey wall, and within a quarter of an hour the three cutters have become three smudges of lamp-glow, and within half an hour they are gone. The sail drinks the dark. The black boat creeps across the channel with her mast stepped, her keel hissing, and nothing to see on any side but a grey that has no inside.
Hao Lan whispers, “I cannot see the water.”
“You are not meant to,” says Yue Zhaoning, equally low. “You are meant to feel it.” She lays a palm flat on the rail. “She tells me. Stay quiet. Do not say anything you would not say in a temple.”
Overhead, a bell begins to ring. It is on one of the cutters. It is answered by another.
> quiet | Hold the lantern low. | coast_a4s3
> truth | Whisper a thank-you to the sea. | coast_a4s3
> mercy | Put an arm round Gu. | coast_a4s3 | bond:gu+1
> inquiry | Listen to the bells. | coast_a4s3

=== coast_a4s3 | Counting Bells
Three bells, three notes. The cutters are sounding the quarter, as is the rule in fog. They sound it a half-beat apart so that each can tell the others’ places. Yue has been counting them under her breath. “The Heron is to the north,” she says. “The Plover is west. The third is east. We are in the middle. The Plover is the lazy one; her bell is slow.”
Her hand moves on the rail. The boat bears a point to port.
“There is a way through,” she says, “if the Plover sleeps.”
The bell of the Plover, which has been ringing at a slow stolid pace, stops. After a moment it begins again, and it is wrong. It is a beat too fast.
Mei Qiu stiffens. “Someone has relieved her watch.”
> quiet | Slip the oars out and drift. | coast_a4s4
> truth | Ask Yue if she can still find the way. | coast_a4s4
> inquiry | Ask Mei what that means. | coast_a4s4
> force | Tell her to run for it. | coast_a4s4

=== coast_a4s4 | The Light on the Hill
Then a light appears.
It is not a cutter’s lamp. It is high, and white, and it blinks. Once, twice, a pause, once, twice. In the fog it is a fixed star seen through a wet cloth. You count: two short, then a long, then two short. Over and over, patient as a heartbeat.
Yue Zhaoning has gone absolutely still. “That is the Salt Lamp,” she says. “That is Tidewall light. It is not lit by day. It has not been lit at night for eleven years.”
“Then who is lighting it?” says Ren Qiao.
“I do not know. But it is not sending a ship’s signal. It is sending something else.” She frowns. “Hao Lan. Can you read it?”
Hao Lan has her pencil in her hand. She is writing on her wrist.
> quiet | Watch the light. | coast_a4s5
> truth | Ask what it says. | coast_a4s5
> mercy | Hold Hao Lan’s lamp steady for her. | coast_a4s5
> inquiry | Ask who might know the code. | coast_a4s5

=== coast_a4s5 | The Code
“It is a Censor’s signal,” says Hao Lan, “an old one. From before the Concord had a Seal Office. It is the sort of thing the first Listeners used.” She is white. “It says: come left. It says: the gap is open. It says: the third cutter is asleep.”
She looks up.
“It is a very old code. I learned it at nine from a book nobody else in the Chancery would open. I have never heard anyone use it. I did not think anyone alive remembered.”
The light blinks. Two short, a long. Come left.
The Elder, in the stern, has put a hand to her mouth. “I know that hand,” she says, very softly. “I know that hand on a lamp.”
“Whose?” says Gu.
“I do not know,” says the Elder. “I think I am mistaken. I think I have wanted it to be someone for fifteen years.”
> quiet | Follow the light. | coast_a4s6 | npc:SU_COAST_FOG
> truth | Ask the Elder who she thought it was. | coast_a4s6
> inquiry | Ask Hao Lan to answer it. | coast_a4s6
> mercy | Say nothing, and take the Elder’s hand. | coast_a4s6

=== coast_a4s6 | Come Left
Yue turns the tiller. The boat bears left, away from the bell-line, into a grey where nothing rings. The fog thickens, so that you can no longer see your own hands. The light goes on blinking. Three times, then four. The sea slides by.
You pass the east cutter so close that you hear a man cough. He coughs again, and mutters, and the boat glides on. Somewhere to your right a rope creaks. Somewhere to your left, the Plover’s fast bell fades.
“We are through,” says Yue. She does not whisper it, but she does not say it aloud either. “We are through.”
The light on the hill blinks once, a long flash, like a held breath released. Then it goes out.
Behind you, the fog begins to part.
> quiet | Look back, and see nothing. | coast_a4s7
> truth | Say thank you to the dark. | coast_a4s7
> mercy | Ask the Elder if she is all right. | coast_a4s7
> inquiry | Ask Yue how far to the Wall. | coast_a4s7

=== coast_a4s7 | Who Was It
The fog lifts as suddenly as it came. You are in clear water, with a half moon overhead, and the line of the coast is a dark ruler between sea and sky. Behind you the cutters are three small dim lamps, miles away, wrongly aimed.
The Elder is sitting very upright. She has a hand pressed flat against her breastbone, as if to keep something from getting out.
“I said I was mistaken,” she says. “I was not. There is only one person who ever signalled that way from a tower. She taught me the code, in the summer before the Sealing. We used to talk across the valley with a mirror.” She swallows. “Her name was Qiu. She was nine.”
You turn.
“She is one of the seven,” says the Elder. “She has lit the lamp.”
> quiet | Look at the hill. | coast_a4s8 | +coast_qiu_signal
> truth | Say that you have a sister who lit the lamp. | coast_a4s8 | +coast_qiu_signal
> mercy | Hold the Elder as she shakes. | coast_a4s8 | +coast_qiu_signal
> inquiry | Ask what she remembers of Qiu. | coast_a4s8 | +coast_qiu_signal

=== coast_a4s8 | A Mirror in the Valley
“She had a mirror from her mother,” says the Elder. “A little round bronze one with a lotus on the back. She used to catch the morning sun on it and flash it across the valley to my window. Three short, two long. It meant: I am awake. It meant: are you awake. It meant: good morning, Registrar.”
Her face has softened. It is a face you have never seen on her.
“I said it back. I had a mirror of my own, from a Censor friend. I was twenty-seven and she was nine, and for one summer I had a friend who was not part of the Law Hall.” She stops. “I thought it was the loneliest year of my life. It was the happiest.”
The harbour is coming up out of the dark.
> quiet | Say nothing, and look at the harbour. | coast_close | +coast_qiu_signal
> truth | Say you want to meet her. | coast_close | +coast_qiu_signal
> mercy | Give her your handkerchief. | coast_close | +coast_qiu_signal
> inquiry | Ask what she thinks Qiu wants. | coast_close | +coast_qiu_signal

// ---------------------------------------------------------------- hidden: the Whispering Cut
=== coast_h1 | Mei’s Tide-Book
Mei Qiu takes a battered notebook out of her sash. It is the size of a hand and swollen with damp. She opens it on her knee and turns the pages with a thumb that has done it ten thousand times. “Ro Gan’s,” she says. “He gave it to me the day I left the coast. He said I would want it.”
She finds a page.
“The Whispering Cut. It runs from the Gull Channel under the Wall. A tunnel of water, a hundred yards long, with a roof of old stone. It was a smugglers’ way before the Wall was built. Ro Gan never told the Concord. He said it was the last honest place on the coast.”
She looks at you. “It is only passable for an hour, at the slack of the tide. It is tonight.”
> inquiry | Ask her whether the Cut is safe. | coast_h2
> truth | Thank her for trusting you with it. | coast_h2
> quiet | Take the book gently, and read the page. | coast_h2
> mercy | Ask what Ro Gan wrote in the margin. | coast_h2

=== coast_h2 | The Whispering Cut
The mouth of the Cut is a black arch just above the waterline, hung with weed and pale shells. Yue has taken down the mast again. The boat slides in without a sound, and the arch closes over your heads, and the sea voice dies.
Inside, the water is as still as a held breath. The walls rise on either side, rough and dripping, carved with a million tiny marks. The air is cold. Your oars make a sound like paper being torn.
A whisper runs along the roof. It is not the echo of the oars. It is a voice, thin and high, repeating something over and over, a word you almost know. Gu’s lips are moving. Hao Lan has put both hands over her ears.
“Names,” she says. “They are names. They are the names on the Wall.”
> quiet | Listen. | coast_h3
> truth | Say your own name aloud. | coast_h3
> mercy | Hold Hao Lan’s hand. | coast_h3 | bond:hao+1
> inquiry | Ask Mei whether the Cut has always whispered. | coast_h3

=== coast_h3 | Ke-er’s Voice
In the middle of the Cut the whisper changes. It slows, and becomes a single voice, small and clear. It is not a child’s voice, exactly. It is the voice of someone who was a child a long time ago and has been listening to the sea ever since.
It says, “Mei.”
Mei Qiu stops rowing. The oar hangs, dripping. The silence that follows is absolute.
“Mei,” says the voice. “You came the long way.”
You do not move. You do not breathe. In the dark ahead of the boat there is a pale shape, no more than a smudge, a small figure standing in the water with its hands at its sides. It is not there. It is not anything. It is a sound, and a feeling, and a name.
“I held the lamp,” says Mei Qiu, in a voice you can barely hear.
“I know,” says the voice. “You were so brave.”
> quiet | Say nothing. | coast_close | +coast_ke_er_heard
> truth | Tell Ke-er that Mei has never stopped holding it. | coast_close | +coast_ke_er_heard
> mercy | Put your hand on Mei’s shoulder. | coast_close | +coast_ke_er_heard
> inquiry | Ask the voice what it is waiting for. | coast_close | +coast_ke_er_heard

// ---------------------------------------------------------------- close
=== coast_close | Tidewall Light
The harbour opens like a hand. A long curved wall of pale stone encloses it, forty feet high, with a gap at the northern end where the ships go in. The wall is carved from end to end. By moonlight the carving looks like frost, thousands upon thousands of tiny incisions in rows, and at the top of the spur above the town, on a tower of black rock, a lighthouse stands cold and dark against the stars.
+[how] coast_ro_helped | Captain Ro Gan’s log says he examined you and found nothing. He is going to be asked a great many questions about that.
+[how] coast_ran_line | The Plover sits on the Gull Bar with her bow in the air. Yue Zhaoning has never been so happy, and has never looked so tired.
+[how] coast_funeral | A man called Ma Tao is on the Concord’s books, dead of the lung rot. Hao Lan has kept the wig.
+[how] coast_qiu_signal | The Salt Lamp blinked once for you in the fog. You will not forget how it looked.
+[how] coast_ke_er_heard | A child’s voice said Mei’s name in a tunnel under the Wall. It has not left her.
+[extra] coast_boat_owed | You owe Yue Zhaoning for a strake of her hull, and she has written it down.
+[extra] coast_jun_told | Lieutenant Jun will be writing letters of explanation for a month.
The Elder stands in the bow, with her cloak damp and her silver comb loose in her hair. She is looking up at the dark tower.
“I used to think,” she says, “that a place could not hurt you if you did not look at it. I find that I am looking.”
> truth | Step onto the quay beside her. | coast_close2
> quiet | Wait for the others. | coast_close2
> mercy | Offer her your arm. | coast_close2 | bond:gu+1
> inquiry | Ask her what she expects to find. | coast_close2

=== coast_close2 | The Quay
The quay is deserted. The tide is out, and the harbour floor is a plain of grey sand, strewn as far as you can see with scraps of white paper. They lie on the sand like gulls in a field. Some are curled and half dissolved. Some are whole. A few have the dark smudge of ink still on them.
The fishermen are sleeping. A single dog watches you from a doorway. It does not bark.
Hao Lan crouches and picks up a scrap. It is barely larger than her palm. Written on it, in a careful clerk’s hand, is a name, and a date, and the word struck.
“They wash up,” she says. “The Drowned Library. They come in on the spring tides.” She turns it over. “This one is from the year I was born.”
She does not say anything else. She puts it carefully into her satchel.
> truth | Pick up a scrap yourself. | tide_arrive | +b3_arrived
> mercy | Turn over a few of them, to see if any are still readable. | tide_arrive | +b3_arrived
> quiet | Walk with the Elder up the quay. | tide_arrive | +b3_arrived
> inquiry | Ask Hao Lan how many she thinks there are. | tide_arrive | +b3_arrived
`,
  scenarios: String.raw`
$ SU_COAST_FOG | trust+3 respect+2 fear-2 | elder | The Elder sees the Salt Lamp signal in the fog and recognises her friend’s code.
hostile: You were quiet through the fog. I noticed. I do not know if that is a virtue or a method.
wary: I told you a thing in the dark that I had not said aloud in fifteen years. I find that I have not regretted it, which is unexpected.
neutral: I spoke of a mirror, and a girl, and a summer. You did not ask me to explain. I am grateful. I am not good at explaining happiness.
warm: When the light came on, I thought: she is alive. I did not think: she is dangerous. I wonder if you understand how rare that is, for me.
devoted: If she is what I hope, I want you to meet her first. Not me. You. I have been the wrong person to stand between her and anyone for fifteen years.
`,
  remarks: String.raw`
% coast_mei_later | since:coast_ke_er_heard>=10 | duan | I am told, by a bird, that Inspector Mei heard a voice in a tunnel. I would like her to know that the Concord has no jurisdiction over what a woman hears in the dark.
% coast_yue_later | since:coast_ran_line>=8 | gu | Yue Zhaoning says she will never forgive herself for the scraping on the Gull Bar. She says it with such evident delight that I think she may be lying.
`,
};
