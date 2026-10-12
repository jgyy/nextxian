import type { Arc } from "../types";

/**
 * Book Four, arc four: the Salt Caravan. Yue Zhaoning has traded her black boat for sixty camels and a salt contract, and
 * the salt hides thirty children out of Colonel Ruo's reach. Four approaches: declare the cargo honestly at the toll
 * (a1, truth), defend the camp from the Red Scarves (a2, force), build false bottoms in the salt-sacks (a3, deceit), and
 * share the last water with a boy on the road (a4, mercy). A hidden route calls in, or pays off, Yue's old favour.
 * Cast: Yue Zhaoning, Toll-Officer Gantulga, Dagva of the Red Scarves, the camel-boy Nara, Temur, Hao Lan.
 */
export const caravan: Arc = {
  id: "caravan",
  name: "The Salt Caravan",
  scenes: String.raw`
=== caravan_entry | Sixty Camels
You hear it first: a deep, regular, tolling sound, like bells in a river. Then a smell, ripe and dusty and sweet. Then a long line on the horizon, moving: shapes like small hills, swaying, in a line two furlongs long. As they draw close the shapes resolve. Camels. Sixty or seventy of them, big humped shaggy brutes, roped nose to tail, each laden with panniers of white salt-bricks, each with a bell at its throat.
A woman rides at the head of the line on a tall dun camel, with a pole across her knees. She wears a sea-coat the colour of tar, belted at the waist with red cord, and a wide-brimmed hat tied under her chin. She is brown and lean and sharp-boned, with a gap-toothed grin. She sees the cart, and rises in her saddle, and flourishes the pole.
“I hear,” she shouts, across a quarter-mile of grass, “that someone owes me a favour!”
It is Yue Zhaoning, and she is on a camel.
Beside you Hao Lan lets out a small, delighted, scandalised sound. “She sold the boat.”
> truth | Hail her, and ask what the salt is for. | caravan_a1s1
> force | Notice the dust-cloud on the northern horizon, and ask Yue how many riders. | caravan_a2s1 | needs:4
> deceit | Notice that the panniers sit lower than salt should, and ask what is under it. | caravan_a3s1
> mercy | Notice a boy at the tail of the line, walking, with an empty water-skin. | caravan_a4s1
> inquiry | Say you have come to settle the favour. | caravan_h1 |  | silk_yue_favour | You do not owe Yue a favour.
> inquiry | Say that the debt runs the other way, and ask for her boat. | caravan_h1 |  | silk_yue_owes | Yue does not owe you a boat.

// ---------------------------------------------------------------- a1: the toll
=== caravan_a1s1 | What the Salt Is For
“Salt,” says Yue Zhaoning, with enormous dignity. She has halted her camel beside the cart, and sits looking down from a great height, her pole across her knees. “It is a perfectly respectable cargo. It keeps meat. It seasons soup. It is the one thing everyone on the Steppe is short of, and the Concord taxes it at nine in the hundred.” She grins. “I have forty bricks to every camel and three tons of excuses.”
“And the boat?”
“Sold.” She pats the camel’s neck. “To a Gull Channel pilot, for a thousand silver and a promise to name his first daughter after her. It was a very good boat. I was extremely rude to her, at the end.” Her face changes. “She had a strake missing. I could not look.”
She straightens in the saddle.
“It is a fair swap. A camel can carry what a boat cannot.” She leans down. Her voice drops to a murmur. “I will tell you what it is for, Registrar. But not on the road. Walk with me tonight.”
> truth | Agree. | caravan_a1s2
> mercy | Ask if she is all right. | caravan_a1s2
> quiet | Look at the panniers. | caravan_a1s2
> inquiry | Ask where the caravan is bound. | caravan_a1s2

=== caravan_a1s2 | The Road to the Kurultai
“To the Winter Camp,” says Yue. “Four days. Along the old trade road, by way of the Salt Gate.” She spits. “There is a Garrison toll at the Gate. They take a tenth of every cargo. They search the loads.” Her jaw is set. “I have been through it a hundred times with a false bottom. I can do it again. But I would rather not have to.”
“What is in the bottom?”
She looks at you for a long moment, and then, deliberately, she puts two fingers in her mouth and whistles. A thin shrill note. At the tail of the caravan, a pannier on the nearest camel stirs. The lid lifts a crack. A small pale face looks out, wide-eyed.
It is a girl of about seven.
“Salt,” says Yue, very gently, to the child. “Go back, my duck. It is all right.”
The lid drops.
“Thirty,” says Yue. She does not smile. “I have thirty. From the villages at the grass-edge. The Colonel was taking them to a school.” She looks away. “It was not a school.”
> truth | Say you understand. | caravan_a1s3 | npc:SU_CARAVAN_YUE
> mercy | Hold her stirrup. | caravan_a1s3
> quiet | Count the panniers. | caravan_a1s3
> inquiry | Ask what it was. | caravan_a1s3

=== caravan_a1s3 | A School
“A boarding house,” says Yue. “Fort Ruo. A long white building by the barracks, with a bell. They take the children of the clans, aged five to twelve, and teach them to read and sit still.” Her voice is flat. “They teach them to be quiet. I have seen the results. They do not run. They do not sing. They look at the ground.” She shifts in the saddle. “I have had a great many opinions about schools, in my life. That one confirmed them.”
“Who runs it?”
“The Colonel. He believes in education.” She almost laughs. “He believes the Steppe is a disease, and the children are the cure. He thinks that if you take them young enough, and give them enough tea, you can wash the grass out of them.”
You think of a kettle and a cup with a blue cross, in a white house on a hill. You think of Matron Cho’s serene fixed smile.
“Camomile,” you say.
Yue turns her sharp brown face.
“Aye,” she says softly. “He gets it from the same man.”
> truth | Say so. | caravan_a1s4
> mercy | Ask who. | caravan_a1s4
> quiet | Hold the reins. | caravan_a1s4
> inquiry | Say you have seen it. | caravan_a1s4

=== caravan_a1s4 | The Same Man
“Fang,” says Yue. She says it as though tasting something. “The Inspector. He had a hand in a great many places before he was a general.” She tugs her hat. “I do not know whether the Colonel knows. I think not. He is a naive man. He does what he is told by those he admires.”
“He may be a friend.”
“He may be a fool.” Yue snorts. “In my experience they are the same.”
The caravan has stopped for the noon halt. The camels kneel, with a clatter and a groan, and a hundred bells go still. The camel-drivers sit in the shade of their beasts, drinking tea. The small face has not reappeared. But you can feel eyes on you, from the shadow of each pannier: wide, frightened, watchful.
“I have to declare them,” says Yue.
“What?”
“At the Gate. If I am searched. If the Officer asks.” She rubs her chin. “I cannot lie. The Garrison have a Listener with them. A tame one. She tells the Officer when I lie.”
> truth | Say you will help. | caravan_a1s5
> mercy | Ask what she wants. | caravan_a1s5
> quiet | Think. | caravan_a1s5
> inquiry | Ask how to get past a Listener. | caravan_a1s5

=== caravan_a1s5 | A Tame Listener
“You don’t,” says Yue. “You tell the truth.” She says it gloomily. “That is the trouble. I have tried everything else.” She stares at the horizon. “She can hear it in the wind. A lie. A half-lie. A thing left out. I have been through the Gate nine times with that woman at the Officer’s elbow, and I have never once got a cargo past her that she did not choose to let by.”
“Then she chose.”
“She chose.” Yue’s mouth twists. “Nine times. I could not think why.”
“Perhaps she wanted to.”
“Perhaps.” Yue gives you a hard, bright look. “That is what I am afraid of. That one day she will not.”
The wind blows. The grass hisses. You think of Temur at the cairn, and the way the wind dropped when you told the truth. You think of the girl who said: it was the best entrance I ever saw.
“Then tell her,” you say.
“Tell her what?”
“Everything.”
Yue stares at you. And then she begins, slowly, to laugh.
> truth | Say it is simple. | caravan_a1s6
> mercy | Hold her hand. | caravan_a1s6
> quiet | Smile. | caravan_a1s6
> inquiry | Ask what is funny. | caravan_a1s6

=== caravan_a1s6 | It Is Simple
“It is,” she says. “That is the funny part. After fifteen years of schemes. I have forged papers. I have bribed priests. I have buried silver in a goat.” She wipes her eyes. “And the thing that would work is to walk up to the Gate and say, ‘Good morning, I have thirty children in the salt.’”
“And if she lets it go?”
“Then I shall have been a fool who got away with it.” She shrugs. “I have been that before.”
She slaps her camel’s neck. The beast groans.
“We’ll do it tomorrow,” she says. “At dawn. You’ll come. You’ll say your name. I want a Listener who’s seen the Matriarch, when it matters. They set store by that.” She grins. “And the Registrar. In her best grey. With her comb.”
“Why?”
“Because the Officer is a man named Gantulga,” says Yue. “And he is terrified of anyone who looks like a magistrate.”
> truth | Agree. | caravan_a1s7
> mercy | Ask about him. | caravan_a1s7
> quiet | Wait. | caravan_a1s7
> inquiry | Ask what he fears. | caravan_a1s7

=== caravan_a1s7 | The Salt Gate
The Gate is a stone arch across the trade road, with a toll-house on one side and a barracks on the other. A grey flag with the closed eye hangs from a pole. Twenty soldiers lounge in the shade. A barrier of striped poles bars the road. Beyond it, a mile off, the track runs on across the plain toward a smudge of smoke on the horizon.
The Officer is waiting at the barrier, with a clerk at his elbow and a tame Listener behind. He is a stout middle-aged man in a rumpled grey tunic, with a round clean-shaven face and a fixed expression of apprehension. He carries a ledger in both hands, hugging it to his chest like a shield. He is sweating.
“Madam Yue,” he says. “Again.”
“Officer Gantulga.” She bows from the saddle. “As ever.”
“You have forty camels.”
“Sixty-three.”
“Sixty-three.” He writes. His pen shakes. “What do they carry?”
She takes a breath.
“Salt,” says Yue Zhaoning. “And thirty children.”
> truth | Hold still. | caravan_a1s8
> mercy | Step forward. | caravan_a1s8
> quiet | Watch the Listener. | caravan_a1s8
> inquiry | Watch Gantulga. | caravan_a1s8

=== caravan_a1s8 | A Long Silence
It is the longest silence you have ever heard. The wind drops. The flag hangs. Twenty soldiers have stopped lounging. A clerk drops his pen. The Officer’s round face goes the colour of tallow.
Behind him, the tame Listener lifts her head. She is a thin grey woman of fifty in a white hat, with a face as lined as a map. She regards Yue Zhaoning with eyes that are neither hostile nor warm. She doesn’t move.
“Thirty,” says Gantulga, in a squeak. “Thirty what?”
“Children,” says Yue. “From the grass-edge. Aged five to twelve. In the panniers. In the salt.” She is perfectly steady. “They were being taken to Fort Ruo. I am taking them to the Winter Camp. I thought you should know.”
“Why?”
“Because I am tired of lying to you.”
Gantulga makes an odd sound. His eyes swivel to the Listener. “Is it true?”
The grey woman is silent. Then, slowly, she nods.
> truth | Wait. | caravan_a1s9
> mercy | Step to Yue’s side. | caravan_a1s9
> quiet | Hold your breath. | caravan_a1s9
> inquiry | Ask the Officer what he will do. | caravan_a1s9

=== caravan_a1s9 | A Father
“I have a daughter,” says Gantulga. He says it in a dry whisper, as though it were a confession. “She is six.” He lowers the ledger. His hands are shaking so badly that the pages flutter. “She is called Chimeg. After my mother. She has a gap in her teeth.”
He looks at Yue.
“I do not know what to do,” he says. “I have orders. I am to search every pannier. I am to detain any minor found without a pass.” He swallows. “I have never in my life been asked to choose.”
“You don’t have to choose now,” says Yue. “Look at the salt. Look at the sky. Take your time.”
“There isn’t any.”
“Then take a moment.”
He does. He stands there at the barrier, in the sun, with his round face working. The soldiers watch him. The Listener watches him. A small child’s cough comes from the nearest pannier, muffled.
He shuts his eyes.
“I did not see anything,” he says.
> truth | Thank him. | caravan_a1s10
> mercy | Smile. | caravan_a1s10
> quiet | Bow. | caravan_a1s10
> inquiry | Ask the Listener. | caravan_a1s10

=== caravan_a1s10 | The Listener Speaks
“He saw nothing,” says the grey woman. She says it in a soft dry voice, to the wind. “It is true. I can hear it.” She turns her head to look at Yue. There is the beginning of something in her face. “Nine times,” she says. “I let you through nine times. I told myself it was a salt-tax dispute.”
“I know.”
“I did not want to know.” Her thin hand twists in her coat. “I am a coward. I have been at this Gate for six years.” She looks at the pannier. She closes her eyes. “I heard them breathing, last year. I heard the little ones. I told myself it was the camels.”
She lifts the barrier herself.
“Go on,” she says. “And when you get to the Camp, tell the Matriarch that Bayarma has gone silent.” Her face is wet. “She will know what it means.”
The camels rise, one by one, with a groan and a clatter. The bells begin to toll.
> truth | Thank her. | caravan_close | +caravan_declared
> mercy | Take her hand. | caravan_close | +caravan_declared
> quiet | Bow. | caravan_close | +caravan_declared
> inquiry | Ask what silence means. | caravan_close | +caravan_declared

// ---------------------------------------------------------------- a2: the Red Scarves
=== caravan_a2s1 | Dust to the North
“Forty,” says Yue, shading her eyes. “Maybe fifty. Riding hard.” She spits over the side of her camel. “Red Scarves. I know the cut of their dust.”
They are a long way off. A smear of tan on the horizon, rising and falling, like smoke from a grass fire. Under it, tiny and fast, a black line of horsemen. They are coming straight for the caravan. They are coming at a gallop.
“Bandits?” says Temur, reining in.
“Deserters. Fort Ruo’s rejects.” Yue’s sharp face is grim. “They raid the salt road. They’ve taken three caravans this year.” She wheels her camel. “They don’t kill drivers. They take the cargo and the camels, and leave you to walk.”
“And the children?”
“They’d sell them.” She says it flatly. “Or give them back to the Colonel. For the bounty.”
There is a short, terrible silence.
“How long?” says Ren Qiao, drawing his sword.
“An hour,” says Yue. “Less.”
> force | Plan. | caravan_a2s2 | needs:4
> truth | Ask Yue what she wants. | caravan_a2s2
> quiet | Look at the ground. | caravan_a2s2
> mercy | Ask about the children. | caravan_a2s2

=== caravan_a2s2 | A Ring of Camels
It is Ren Qiao’s idea. He has fought on foot all his life, and he has views on horsemen. He has the camels knelt in a ring, hobbled, noses in, with their panniers outward like a wall. He has the drivers behind them with whatever they have: pikes, bows, hay-forks. He has Temur’s riders in the centre, mounted, to charge out if the line breaks. He has Shu Ning making caltrops.
“Horses won’t jump a camel,” he says. “They’re afraid of the smell.”
“How do you know?”
“I read it.” He grins, wolfishly. “In a book. In a prison. It was the only book.” He thumps a pannier. “These are four hundredweight each. A horse can’t knock them over. A man can’t climb them. It’s a fort.”
The camels grumble and spit. A driver crosses himself, with his left hand. Yue is walking the line with a lantern, murmuring to each beast. The children in the salt are very quiet.
The dust comes closer.
> force | Take a pike. | caravan_a2s3
> truth | Check the hobbles. | caravan_a2s3
> quiet | Watch the north. | caravan_a2s3
> mercy | Go to the panniers. | caravan_a2s3

=== caravan_a2s3 | The Children in the Salt
You go from pannier to pannier, with your hand on the lid, speaking low. You tell them it is all right. You tell them to stay down. You tell them it is going to be loud. A small voice from a salt-sack whispers: “Are you the one who asks?”
“I—yes.”
“The wind said.” A pause. “Will you hold my hand?”
You slide your fingers through the gap. A small cold hand takes hold of them, with astonishing strength.
“Are the bad men coming?” says the voice.
“Yes.”
“I’m not scared,” says the voice. It is the voice of a girl of seven, flat and certain. “My grandmother said not to be. She said the grass hears.”
“It does.”
“Then it’ll tell them to go away.” The hand tightens. “It’s very powerful. It told the Colonel to go away, once. He cried.”
You laugh, and cannot help it.
> force | Squeeze her hand. | caravan_a2s4
> truth | Stay. | caravan_a2s4
> quiet | Listen. | caravan_a2s4
> mercy | Hum to her. | caravan_a2s4

=== caravan_a2s4 | The Charge
They hit the ring at full gallop. The ground trembles. A forest of lances, a wall of brown horses, a war-cry that is half a scream. The Red Scarves are young, lean, wild men in rags of grey and crimson, on shaggy ponies, with curved swords and good bows. They come in a wide arc, shooting as they ride. The arrows hiss over the camels.
“Down!” roars Ren Qiao.
You drop behind a pannier. Arrows thud into the salt. A driver cries out and drops. A camel shrieks and tries to rise, hobbled, and falls back, kicking. The horses wheel round the ring in a thunderous circle, throwing up dust, and the whole world is noise and hooves and the reek of horse.
“Now!” shouts Temur.
His riders surge out of the centre, forty strong, in a tight wedge, white hats and grey coats, with bows singing. They hit the first wave at an angle. Ponies collide. Men fall. A bandit’s horse screams and goes down, spilling its rider.
It is chaos.
> force | Fight. | caravan_a2s5
> truth | Shout. | caravan_a2s5
> quiet | Stay down. | caravan_a2s5
> mercy | Drag the wounded driver in. | caravan_a2s5

=== caravan_a2s5 | Ren Qiao at the Wall
A horse leaps the ring. It happens near you: a big grey stallion, mad with fear, jumping a kneeling camel from the outside. The rider is a thin boy with a scarf over his face and a curved blade. He lands among the panniers. He rears. He cuts down at the nearest driver.
Ren Qiao is on him before the blade falls. He catches the boy’s wrist, twists, and pulls him off the saddle in a single motion. The boy hits the ground. His sword flies. Ren Qiao plants a knee on his chest and holds a knife to his throat.
“Be still,” he says, in a voice like iron.
The boy gasps. He claws at the scarf. It comes away. He is sixteen at most. His face is hollow-cheeked and covered in sores. His eyes are enormous.
“Don’t,” he whispers. “Don’t, please, I didn’t—”
Ren Qiao hesitates. His knife-hand trembles. For a heartbeat he is somebody else, in a different place, with a lantern. “You are a child,” he says.
“I’m seventeen.”
“You are a child.”
> force | Stop. | caravan_a2s6 | needs:4
> truth | Say let him up. | caravan_a2s6
> quiet | Watch Ren. | caravan_a2s6
> mercy | Ask his name. | caravan_a2s6

=== caravan_a2s6 | Dagva
He is called Dagva. He gives it in a gasp. He is the youngest of the Red Scarves. He was in the levy for three years, and ran. He has been riding with the band since the spring. They are eating bark. They have not had a proper meal for a week. They attacked the caravan because there was nothing else to do.
Ren Qiao lets him up. He does it slowly, with the knife still out. “How many of you?”
“Sixty. Fifty-three, now.” Dagva wipes his face. “We’re all deserters. We’re all from the forts. Nobody’s any good at it.” He tries to smile. “We’ve never actually robbed anybody. We stop them, and then we don’t know what to do.”
Behind him, the fighting has stopped. The horsemen have drawn off. They sit their ponies at a distance, in a ragged line, looking at the ring of camels. Some are bleeding. One has lost his horse and sits in the dust, holding his arm.
“You’re starving,” says Ren Qiao.
“Yes, sir.”
“And you thought you’d eat salt.”
“We thought,” says Dagva faintly, “that there might be mutton.”
> force | Look at Yue. | caravan_a2s7
> truth | Smile. | caravan_a2s7
> quiet | Sheathe the knife. | caravan_a2s7
> mercy | Say there is. | caravan_a2s7

=== caravan_a2s7 | Mutton
There is mutton. Yue has two sheep in a hobbled pen at the rear of the caravan, for emergencies. She has them slaughtered and roasted over a dung-fire in the lee of the ring. The smell of cooking meat drifts across the grass. The Red Scarves sit in their saddles at the edge of the firelight, sniffing.
“Come,” says Yue. She doesn’t raise her voice. She stands by the spit with a long knife, carving. “There’s plenty.”
They come. One by one, with the shuffling reluctance of whipped dogs. They dismount. They sit on the grass at the edge of the light, thin, hollow-eyed, bandaged. They take the pieces of mutton in both hands. They eat in silence, with total absorption.
Temur sits among them. He has his bow across his knees. He speaks to each, gently, in a low murmur.
Hao Lan sits in the dust beside Dagva, writing in her notebook. “What is your mother’s name?” she says.
“Why?”
“I’m collecting.”
> force | Eat. | caravan_a2s8
> truth | Listen. | caravan_a2s8
> quiet | Watch. | caravan_a2s8
> mercy | Fetch water. | caravan_a2s8

=== caravan_a2s8 | An Offer
By midnight it is settled. It is Yue who does it, in her usual way, by being brutally frank. She walks into the middle of the Red Scarves with a pot of tea and a plate of dumplings and says: “You are bad at banditry. You are good at riding. I need riders. I will pay you in salt.”
There is a silence.
“For what?” says Dagva.
“For escort. Thirty children. To the Winter Camp. Four days.” She sips. “It is boring. It is not very dangerous. At the end, I will give you a letter to the Matriarch.”
“What does it say?”
“That you are not bandits.” She grins. “That you are very hungry riders who lost their way.”
Dagva looks at his companions. They look back. A thin man with a bandaged arm gives a small, grave, wondering nod. Dagva takes a breath.
“Fifty-three,” he says. “All of us?”
“All of you.”
> force | Nod. | caravan_a2s9 | needs:4
> truth | Say it is well done. | caravan_a2s9
> quiet | Look at Ren. | caravan_a2s9
> mercy | Smile at Dagva. | caravan_a2s9

=== caravan_a2s9 | A Longer Line
They ride out at dawn with the caravan in the middle and the Red Scarves at the flanks. It is a strange sight. Fifty ragged men on shaggy ponies, in torn grey, spread out on both sides like sheepdogs. They have swords and bows. They have, at Yue’s order, a new red cord on their sleeves. They have a number of the children on their saddles, in front, wrapped in felt.
Dagva rides at the head of the left flank. He has a small girl before him, perhaps five, with two black plaits and a gap in her teeth. She is telling him a long, rambling story about a goat. He is nodding gravely.
“And then it ate the hat,” says the child.
“All of it?”
“The whole hat.” She giggles. “It was Grandfather’s.”
“What did he say?”
“He said that was the last time he’d buy a nice one.”
Dagva laughs, a short bark. He has not laughed in a year.
> force | Ride beside them. | caravan_a2s10
> truth | Listen. | caravan_a2s10
> quiet | Look back. | caravan_a2s10
> mercy | Smile. | caravan_a2s10

=== caravan_a2s10 | A Night Watch
That night the Red Scarves keep the watch. They do it well. They do it in shifts, in pairs, patrolling the perimeter of the camp with the quiet efficiency of men who have spent their whole lives being hunted. The children sleep in a heap of felt rugs in the centre. Nobody has said so, but every one of the bandits has taken a turn to sit beside them.
Ren Qiao sits with Dagva at the edge of the firelight. They have a flask between them. They don’t talk much. After a while Ren says, “What did you do in the levy?”
“I carried a pike.”
“Mm.”
“And I held the line.” Dagva turns the flask. “I was good at that.”
“Mm.”
“I held it at Fifty-One,” says the boy, very low.
Ren is still. The firelight flickers on his scarred face.
“So did I,” says Ren Qiao. “Once. Fifteen years ago. At the mouth of a path.” He takes the flask. He doesn’t drink. “It does not go away.”
“No?”
“No.” He passes it back. “But it gets lighter.”
> force | Leave them. | caravan_close | +caravan_fought
> truth | Sit with them. | caravan_close | +caravan_fought
> quiet | Look at the stars. | caravan_close | +caravan_fought
> mercy | Fetch a blanket. | caravan_close | +caravan_fought

// ---------------------------------------------------------------- a3: the false bottoms
=== caravan_a3s1 | Under the Salt
“Salt-bricks,” says Yue. She lifts a lid. The pannier is a woven basket the size of a barrel, lined with felt. In it, packed in rows, are twenty-four great white bricks, each the size of a loaf, stamped with the Concord’s eye. She lifts one. It is as heavy as a cannonball. “Real salt. Taxed. Weighed. Entered.” She replaces it. “Underneath—”
She presses a hidden catch. The floor of the pannier lifts on a hinge.
There is a space below. It is two feet deep and the size of the basket. It is lined with sacking and furnished with a rolled blanket, a water-skin, and a small copper lamp. In the middle of it, curled up like a kitten, a boy of six is asleep with his thumb in his mouth.
“Thirty panniers,” says Yue. “Thirty children. One each.” She lowers the floor. “I have been doing this for four years. I have never been caught.”
“What if you are?”
“Then I shall be hanged.” She shrugs. “It is a risk of the trade.”
> deceit | Ask how it works. | caravan_a3s2
> truth | Say it is dangerous. | caravan_a3s2
> quiet | Look at the boy. | caravan_a3s2
> mercy | Ask if the children mind. | caravan_a3s2

=== caravan_a3s2 | The Method
“The floor’s the trick,” says Yue. “It’s got to look solid. It’s got to weigh right. The Gate officers prod with a spike.” She shows you: a long steel needle on a ring. “If the spike goes through, it hits a layer of salt-bricks, glued under the floor. If they weigh the pannier, it’s the right weight. If they tap it, it sounds like salt.”
“And the air?”
“Tubes.” She runs her thumb along a groove in the felt. “Hollow reeds, through the salt, to the surface. They look like straw.”
“How long can they stay?”
“Four hours. Six, if they’re calm.” She frowns. “I do the Gate in the morning, when it’s cool. I take them out the moment we’re through.”
Hao Lan, who has been examining the mechanism with intense fascination, says suddenly: “It would be better with a second tube.”
“Eh?”
“For the carbon dioxide. A child breathing for six hours.” She taps her notebook. “I read about it in a manual on mining.”
Yue stares at her. “You read about it?”
> deceit | Ask her to explain. | caravan_a3s3
> truth | Smile. | caravan_a3s3
> quiet | Watch. | caravan_a3s3
> mercy | Say thank you. | caravan_a3s3

=== caravan_a3s3 | An Improvement
They spend the afternoon re-rigging. It takes the whole party. Hao Lan draws plans; Shu Ning does the metalwork, cutting and bending thin copper pipe; Ren Qiao hammers; Gu holds the lantern. By dusk every one of the thirty panniers has a second air-tube, a little bellows worked by a pedal, and a new false floor that opens from either side.
“It is the best smuggling apparatus I have ever seen,” says Yue, gazing at it. She runs her hand along the rim of a pannier. “And I have seen a great many.” She looks at Hao Lan. “You should have been a criminal.”
“I was a clerk.”
“It’s the same thing.” She grins. “With better paperwork.”
Hao Lan turns pink. She tucks her notebook under her arm. “I should like to add a feature,” she says. “If it is not too much trouble.”
“Go on.”
“A message.” She holds up a roll of thin paper. “For the children. In case they are afraid.”
> deceit | Ask what it says. | caravan_a3s4
> truth | Read it. | caravan_a3s4
> quiet | Watch. | caravan_a3s4
> mercy | Smile. | caravan_a3s4

=== caravan_a3s4 | A Note
It is a very short message, in clear block characters, in a child’s script. She has copied it thirty times. She pastes one inside the lid of every pannier. It says: You are very brave. It will be dark for a little while. The grass knows where you are. Count to a hundred and four, and then run.
You read it aloud. Your voice shakes.
“It’s the skipping rhyme,” you say.
“From the Wall.” Hao Lan nods. She is a little embarrassed. “It seemed appropriate. A hundred and four is a number children know.”
“It’s a number that means a girl was sealed.”
“It means a girl was brave.” She sets her chin. “I think it is the best thing about it. The children don’t know why it’s a hundred and four. They think it’s a game.”
Yue is wiping her nose on her sleeve.
“It’s ridiculous,” she says. “It’s terrible. I love it.”
> deceit | Seal the lid. | caravan_a3s5
> truth | Say it is right. | caravan_a3s5
> quiet | Check the tubes. | caravan_a3s5
> mercy | Hug Hao Lan. | caravan_a3s5 | bond:hao+1

=== caravan_a3s5 | At the Gate
You arrive at the Salt Gate on the third morning. It is a stone arch across the trade road, with a toll-house and a barracks. Twenty soldiers lounge in the shade. A stout man in a rumpled grey tunic stands at the barrier, with a ledger hugged to his chest. He has a round clean-shaven face. He is sweating.
Yue rides up to him on her camel. “Officer Gantulga,” she says. “Good morning.”
“Madam Yue.” He bows. “How many?”
“Sixty-three.”
“And the cargo?”
“Salt. Forty bricks to the camel.”
He writes. “Anything else?”
“Tea,” says Yue. “Cloth. Needles. A few books.” She gives her widest, gap-toothed smile. “A crate of pickled plums, for the Colonel.”
Gantulga’s fixed apprehension eases a hair. He likes plums. “I will have to search,” he says, apologetically.
“Naturally.”
“It is only a formality.”
“I never mind,” says Yue.
Behind him, a thin grey woman in a white hat has lifted her head.
> deceit | Stay calm. | caravan_a3s6
> truth | Watch the Listener. | caravan_a3s6
> quiet | Hold your breath. | caravan_a3s6
> mercy | Look at the panniers. | caravan_a3s6

=== caravan_a3s6 | The Search
They go through it methodically. Gantulga’s men prod each pannier with a spike. They lift the lids. They lift the salt-bricks. They weigh. They tap. They count. Gantulga stands at the barrier, ticking off numbers on his ledger. His clerk reads aloud. A soldier sticks his spike through the floor of the first pannier and withdraws it, and shrugs.
“Salt,” he says.
It goes on. Fifteen panniers. Twenty. The sun climbs. The camels grumble and spit. The soldiers sweat. The Listener stands at Gantulga’s elbow, a thin grey figure with her head tilted, saying nothing. Her eyes are half-closed.
You are standing at the tail of the line, near the twenty-eighth. Beside you Hao Lan has gone rigid, her nails digging into her palms. In the pannier at your feet, you can hear a faint dry sound: a small hand, tapping once on the felt.
Tap. A pause. Tap-tap.
It is the knock children use at a door.
> deceit | Cover it with a cough. | caravan_a3s7
> truth | Do nothing. | caravan_a3s7
> quiet | Step on the tube. | caravan_a3s7
> mercy | Tap back. | caravan_a3s7

=== caravan_a3s7 | Tap
You tap back. You do it with the toe of your boot, on the leather side of the pannier, soft and brief. Tap. Tap-tap. Please wait. Inside, the sound stops. A small shuffle. Then, quite clearly, from under the salt, a very small voice whispers: “One.”
It is counting.
A soldier reaches your pannier. He sticks in the spike. It goes down through the felt and the salt-bricks and meets the false floor, which is a thin layer of glued salt over a hollow. The spike stops. It does not go through. The soldier frowns, and tries again. It stops again.
“Solid,” he says.
“Of course it is,” says Yue Zhaoning, grandly. “It is a salt-brick.”
“What is that tapping?”
“A camel,” says Yue. “They do that when they are happy.”
The soldier looks at the camel. The camel looks at the soldier. It gives a long, wet, impudent belch.
“Eighty-seven,” whispers the voice under the salt.
> deceit | Laugh. | caravan_a3s8
> truth | Pat the camel. | caravan_a3s8
> quiet | Hold still. | caravan_a3s8
> mercy | Hum. | caravan_a3s8

=== caravan_a3s8 | Gantulga
He is not a fool. He is a frightened man with a ledger, and he knows his job. When the last pannier has been searched he stands for a long time at the barrier, looking at the line of camels. His round face is troubled. He turns the pages of his ledger back and forth. The Listener watches him.
“Eighty-nine tons,” he says. “And fifteen hundredweight.”
“Is that right?” says Yue.
“It is the same as last time.” He frowns. “To the pound.” He licks his lips. “Madam Yue. I weighed the panniers.”
“Yes.”
“They weigh exactly what thirty-three bricks of salt should weigh. Not twenty-four. Thirty-three.” He taps the ledger. “I have a good memory for figures.”
Yue says, quite pleasantly: “Perhaps the bricks are heavier.”
“Perhaps.” He lowers his voice. “Or perhaps there is something under the bricks that weighs about the same.”
The silence stretches. The Listener has lifted her head.
> deceit | Say nothing. | caravan_a3s9
> truth | Step forward. | caravan_a3s9
> quiet | Look at the sky. | caravan_a3s9
> mercy | Smile at Gantulga. | caravan_a3s9

=== caravan_a3s9 | A Sum
“A good deal,” says the Listener quietly, “like a child.”
Nobody breathes. Gantulga’s pen has stopped.
The grey woman has not moved. She stands with her hat low and her hands folded, and she looks at none of you. She speaks to the wind. “It is a sum I do every morning,” she says. “I have a boy at home. He was six when I started. He is ten.” Her voice is toneless. “I know exactly what a child weighs.”
Gantulga’s face has gone ashen.
“Bayarma—” he says.
“Be quiet, Gantulga.”
“If you are saying—”
“I am saying that I have heard nothing,” says Bayarma. “And I have heard nothing for six years.” She lifts her head. Her lined face is very tired. “I would be obliged if you would sign the manifest.”
He looks at her. He looks at Yue. His round face is slack with horror and wonder and relief.
He signs.
> deceit | Thank him. | caravan_a3s10
> truth | Bow to the Listener. | caravan_a3s10
> quiet | Step back. | caravan_a3s10
> mercy | Say nothing. | caravan_a3s10

=== caravan_a3s10 | Counting to a Hundred and Four
The camels go through the Gate at a stately pace, their bells tolling, and nobody speaks until the arch is a mile behind. Then Yue halts the caravan in a dip of the plain, out of sight. She leaps down. She runs the length of the line, throwing open the lids.
They come up like jack-in-the-boxes. Thirty small faces, flushed and damp and blinking, in the clear bright morning. They look round at the sky. They look round at the grass. A girl of seven puts her hands to her cheeks.
“Did we do it?” she says.
“You did it.”
“I counted,” says the girl. “To a hundred and four.”
“And then?”
“And then I wanted to run.” She looks at Yue with shining eyes. “But I stayed still. I was very good.”
“You were wonderful.”
“I know,” says the girl. She smiles at Hao Lan, who has gone pink. “It was on the note.”
> deceit | Laugh. | caravan_close | +caravan_hidden
> truth | Help one down. | caravan_close | +caravan_hidden
> quiet | Look at Hao Lan. | caravan_close | +caravan_hidden
> mercy | Hold a small hand. | caravan_close | +caravan_hidden

// ---------------------------------------------------------------- a4: the boy with no water
=== caravan_a4s1 | Nara
He is walking at the tail of the line, a little apart, with his head down and his thin arms hanging. He is ten years old, brown and bony, in a coat three sizes too big. He has no hat. His feet are bare and blistered. He carries an empty goatskin water-bag, which he swings back and forth, back and forth, with a dull slow rhythm.
He is not walking with the camels. He is walking behind them, in their dust.
“Who is that?” you ask.
“Nara,” says Yue. She looks over her shoulder. Her sharp brown face has a crease between the brows. “The camel-boy. He’s a good lad. He doesn’t talk.”
“Where is his water?”
“He gave it away.” She shrugs. “To a camel. It was sick. He does that.”
You look at the child. His lips are cracked. His tongue is swollen. He has the glazed, inward look of a creature far gone in thirst.
“How long?” you say.
“Two days,” says Yue. She doesn’t look at you. “I told him. I said, you’ll want it. He says the camel needs it more.”
> mercy | Go to him. | caravan_a4s2
> truth | Say it is dangerous. | caravan_a4s2
> quiet | Fetch a cup. | caravan_a4s2
> inquiry | Ask why he does that. | caravan_a4s2

=== caravan_a4s2 | A Cup of Water
You fill a cup from your own flask and walk back down the line. The dust is thick. The camels’ bells toll. The boy doesn’t look up. You fall into step beside him. You hold out the cup.
He stops.
He looks at it for a long moment, with his head on one side, like a bird. His cracked lips move. His eyes follow the water as it moves in the cup.
“Thank you,” he says. It is a whisper.
“Drink.”
“I’m all right.”
“You’re not.”
“I’m all right,” says Nara. He looks at his feet. “There are others. In the salt. The little ones. They get thirsty. I give them mine.” He swallows painfully. “They’re smaller. They need it more.”
You stare at him. “You’re giving the children water?”
“Through the tube.” He holds up his hands. They are raw. “I climb up on the camel in the night. I put the skin to the reed.”
“Nara.”
“It’s a secret,” says the boy. “Please don’t tell Yue.”
> mercy | Hold the cup to his lips. | caravan_a4s3
> truth | Say she knows. | caravan_a4s3
> quiet | Sit down beside him. | caravan_a4s3
> inquiry | Ask how many he feeds. | caravan_a4s3

=== caravan_a4s3 | Twelve Skins
“All of them,” says Nara. He drinks. Not much, a sip, and then another, and then a long shuddering gulp that makes him choke. You hold the cup while he coughs. “I do three a night. I’ve done them all twice.”
“You’ve been walking for two days without water.”
“Yes.”
“Because you gave yours to them.”
“Yes.” He wipes his mouth. His eyes are swimming. “Everyone does it. All the drivers. We take turns. But Dorj is old, and Tsetseg has a bad chest, and I’m the youngest.” He looks at you with grave brown eyes. “It’s not hard. You just don’t think about it.”
“Does Yue know?”
“She knows everything,” says Nara, with a trace of pride. “She just doesn’t say.”
He drinks the rest. His whole face loosens. A flush comes to his cheeks.
“Thank you,” he says. “That was very good water.”
> mercy | Fill it again. | caravan_a4s4
> truth | Take him to Yue. | caravan_a4s4
> quiet | Watch him. | caravan_a4s4
> inquiry | Ask where the water is. | caravan_a4s4

=== caravan_a4s4 | A Dry Well
“The Well of Four Bones,” says Yue, when you find her. She is sitting alone on a rock at the head of the line, a little apart, with her chin on her fist. She doesn’t look up. “It was supposed to be full. It’s the only good water between the Orchard and the Camp. I sent a scout last week.” She picks a stone from the ground. “It was fine, then.”
“What happened?”
“Someone poisoned it.” She throws the stone. “Or filled it in. Or sold it. I don’t know.” Her voice cracks. “We’ve got one barrel left. For sixty-three camels and forty people.”
“And thirty children.”
“And thirty children.”
She presses her palms against her eyes. Her shoulders are rigid. She looks tiny, on the rock, in her great coat.
“I didn’t tell anyone,” she says. “Because there’s nothing to do. We’re three days from the next well. The camels can go on, they’re built for it. The children can’t.”
> mercy | Sit beside her. | caravan_a4s5
> truth | Say Nara told you. | caravan_a4s5
> quiet | Think. | caravan_a4s5
> inquiry | Ask where the next well is. | caravan_a4s5

=== caravan_a4s5 | Rain-Callers
“The Singing Stones,” says Odval.
She has ridden up on her dun pony. You did not hear her come. She sits there in the dusk, with her hair loose and her bone pipe in her hand, looking down at the two of you with her grave dark eyes. “They sing for water. They have a rain-song. It is not to be used lightly. It takes a Stone-Singer and nine voices.”
“How far?”
“A day and a half.” She dismounts. “The caravan can reach it by tomorrow night, if you ride hard. The children will have to be carried.”
Yue looks up. “You came for us?”
“I came because the grass said there was a girl at the Four Bones who gave her last cup to a boy.” She turns her level eyes on you. “It was most upset.”
“I didn’t—”
“It heard you,” says Odval. “You weren’t quiet.”
She puts her pipe to her lips and plays three notes, soft and high. Far away, over the dark plain, a deep hum answers.
> mercy | Smile. | caravan_a4s6
> truth | Thank her. | caravan_a4s6
> quiet | Listen. | caravan_a4s6
> inquiry | Ask how. | caravan_a4s6

=== caravan_a4s6 | The Ride
You ride through the night. It is the strangest ride of your life. The camels walk, with their long swaying stride, in a line, bells tolling, and the children sleep in the panniers, each with a skin of water that Nara has measured out. The stars are enormous. The grass hisses. Odval rides ahead, in the dark, playing a low unending tune on her pipe. At intervals, from a long way off, comes the deep, slow hum of the stones.
At dawn the camels begin to stumble. At noon they are walking with their heads down, and their mouths foam. Yue goes from beast to beast, murmuring, rubbing noses. A driver falls out of his saddle. Hao Lan, dazed with thirst, reads aloud from her notebook in a flat voice, over and over: “Section nine. Section nine.”
Nara walks. He has refused to ride. He walks beside the lead camel, with a hand on its flank, and his eyes shut.
“Five miles,” says Odval.
“Can we?”
“We must.”
> mercy | Carry a child. | caravan_a4s7
> truth | Keep walking. | caravan_a4s7
> quiet | Hum. | caravan_a4s7
> inquiry | Ask Odval to play. | caravan_a4s7

=== caravan_a4s7 | The Rain-Song
They sing for rain at sunset, nine of them, on the rise of the Singing Stones. Chimeg stands in the middle, her small hands on the tallest stone. Bold stands on her left. Temur stands on her right. Odval plays. The six others, Stone-Singers of the clan, form a ring, hand in hand, their faces lifted to the sky.
The song is slow and low. It is made of one word. It is the old word for rain, and they say it over and over, with the stones humming under it, a vast deep chord that shakes the ground.
The sky is clear. The sun is a red coin.
You stand at the edge of the rise with Nara on your knee, a handful of children in blankets round you, and watch the horizon. Nothing happens. The song goes on. Chimeg’s small body is shaking with effort. Sweat runs down Bold’s broad face.
Then, in the west, a long way off, a cloud.
It is no bigger than a hand. It grows.
> mercy | Hold Nara. | caravan_a4s8
> truth | Watch. | caravan_a4s8
> quiet | Hold your breath. | caravan_a4s8
> inquiry | Ask Bold how long. | caravan_a4s8

=== caravan_a4s8 | Rain
It comes at dusk. It comes with a rush and a roar, a sheet of grey, walking across the plain like a vast bird. The first drops are fat and cold and far apart. They hit the dust and raise tiny craters. Then the rest follow, and the Steppe is drumming.
The children shriek. They tumble out of the panniers and fall on their knees, and tip back their heads, and open their mouths. Women laugh and cry. The camels bellow, and stamp, and turn their long ugly faces to the sky. Yue is dancing, with her coat open and her hat in the air.
You are drenched in a moment. You do not care. You stand with your arms out and the rain beating on your face. Nara is in your arms, laughing. He is crying. His hat is gone. He is drinking the rain from his own cupped hands.
“It’s good!” he shouts. “It’s very good!”
“I know!”
“It’s the best water I’ve ever had!”
“It’s the same as the last!”
“No!” says Nara. “It’s new!”
> mercy | Laugh. | caravan_a4s9
> truth | Dance. | caravan_a4s9
> quiet | Look up. | caravan_a4s9
> inquiry | Hold him tight. | caravan_a4s9

=== caravan_a4s9 | The Well Fills
By morning the Four Bones is full. The rain has run down the dry creek-bed and into the old shaft, and the water stands in the well-mouth, brown and cold and brimming. The caravan camps beside it for a day. The camels drink for hours, with long contented gulps, and the children splash in the shallows, and the drivers sprawl in the sun.
Yue sits on a rock with her feet in the mud. Nara is beside her, with his chin on his knees.
“You should have told me,” she says.
“I know.”
“I would have stopped.”
“I know.” He glances at her sideways. “That’s why.”
She puts an arm round his shoulders. He stiffens, and then, with a small gulp, leans against her. She says nothing at all. She looks out over the well and the grass and the shining wet sky. Her face is working.
“You are an idiot,” she says.
“Yes.”
“You are the best camel-boy in the Salt Road.”
“I know,” says Nara.
> mercy | Smile. | caravan_a4s10
> truth | Leave them. | caravan_a4s10
> quiet | Sit apart. | caravan_a4s10
> inquiry | Ask Yue about the thirty. | caravan_a4s10

=== caravan_a4s10 | Thirty
“They’re all well,” says Yue. She wipes her eyes with her sleeve. “Every one. Not a cough. Not a cut.” She looks over at the children, a mob of small shouting brown figures in the shallows. “I was so afraid.”
“Of what?”
“That I’d fail them.” She watches a boy of five throw a handful of mud at a girl of nine. “It’s all I’ve ever been afraid of. Not the Garrison. Not the Concord. Not drowning.” She shakes her head. “I’ve been so sure that one day I’d fail someone I’d promised.”
“You haven’t.”
“Not yet.” She turns her sharp face to you. “Thank you. For coming. For the rain.”
“It was Odval’s.”
“Aye. And Chimeg’s.” She grins. “And yours. You asked. Nara told me. You went up to him with a cup of water.” She sniffs. “It’s not a small thing. It’s not a small thing at all.”
> mercy | Smile. | caravan_close | +caravan_watered
> truth | Say it was nothing. | caravan_close | +caravan_watered
> quiet | Take her hand. | caravan_close | +caravan_watered
> inquiry | Ask when they will reach the Camp. | caravan_close | +caravan_watered

// ---------------------------------------------------------------- hidden: the favour
=== caravan_h1 | The Favour
“Oh, aye,” says Yue. She slides from the camel with a thump, and walks round it, patting its flank. “That.” She grins, but it does not quite reach her eyes. “I wondered when you’d come to collect. Or pay. I never can remember which.”
“Which?”
“Doesn’t matter.” She pulls off her hat. “It’s a favour. A big one. The biggest I’ve ever owed or been owed.” She stares at the horizon. “I’ve been carrying it for six weeks. It’s heavier than a camel.”
You wait.
“It’s this,” says Yue. “There’s a boy. Not one of the thirty. A boy of nine, at Fort Ruo, in the school. He’s my sister’s. He’s called Tsend. She was taken in the winter, with the clan, at the river.” She swallows. “He was kept. They put him in a white house and gave him tea.”
Her voice cracks.
“I’d like him back,” she says.
> inquiry | Say yes. | caravan_h2
> truth | Say it is possible. | caravan_h2
> mercy | Hold her. | caravan_h2
> quiet | Think. | caravan_h2

=== caravan_h2 | Tsend
You promise. It is the easiest thing you have ever said. You say it to Yue Zhaoning on the open grass, in front of sixty camels and the wind, and the wind takes it and runs with it across the plain. You say: I will bring him.
Yue weeps. She does it standing, with her arms folded, and her hat crushed in one fist, and her face turned to the sky. She makes no sound. When she is done she wipes her cheeks with the back of her wrist, and puts her hat on, and says gruffly, “Well. That’s that, then.”
“We shall need a plan.”
“I have a plan.” She sniffs. “It has a hole in it. It is the right size for you.”
“What is it?”
“The fort’s got a laundry,” says Yue. “Eighty women. All Listeners. They do the washing for the school. They go in and out every day. They carry baskets.” She gives a wolfish smile. “You’ll need a new coat.”
> inquiry | Ask what else. | caravan_h3
> truth | Smile. | caravan_h3
> mercy | Say thank you. | caravan_h3
> quiet | Listen. | caravan_h3

=== caravan_h3 | A Debt of the Heart
She spreads the plan out on the sand in the lee of a pannier, with a stick and a handful of pebbles. It is cunning and simple and dangerous. It will take a month to prepare. It will need Hanming, if you have him, and a laundress named Sorgan, and a case of bad soap. It needs a day when the Colonel is away. It needs a great deal of luck.
“I’ll be there,” says Yue. “I’ll be in the basket.”
“You’ll be in a basket?”
“Under the sheets.” She grins. “I’ve done it before. It’s not dignified.”
You look at her. She is lean and brown and grinning, with her tar-black coat and her red cord, and a camel behind her. She has sold the only home she ever had. She is risking her neck for a boy of nine who is not her son.
“I owe you,” you say.
“No,” says Yue. “You pay it. That’s different.” She puts out a calloused hand. “It’s a very old-fashioned idea. I like it.”
You take her hand. It is hard and dry and warm.
> inquiry | Shake. | caravan_close | +caravan_favour
> truth | Bow. | caravan_close | +caravan_favour
> mercy | Hug her. | caravan_close | +caravan_favour
> quiet | Smile. | caravan_close | +caravan_favour

// ---------------------------------------------------------------- close
=== caravan_close | The Road of Salt
At dusk you make camp on the open grass, in the lee of a rise, with the camels in a ring and the dung-fires burning. The air smells of smoke and mutton and tea. The children have been fed, and washed, and put down in a heap in the centre, under a mountain of felt. The drivers sit about in groups, mending harness, singing. A very old man is telling a story about a camel who learned to count.
+[how] caravan_declared | You told the Salt Gate that you carried thirty children, and the Listener lifted the barrier.
+[how] caravan_fought | Fifty-three starving Red Scarves ate mutton and swore an oath at the edge of a ring of camels.
+[how] caravan_hidden | Thirty panniers with double floors went through the Salt Gate, and a child counted to a hundred and four.
+[how] caravan_watered | A well filled with rain, and a camel-boy drank from his own cupped hands.
+[how] caravan_favour | You promised to bring a boy of nine out of Fort Ruo in a laundry-basket.
Yue Zhaoning comes and sits by the fire, opposite. She has her pole across her knees. She looks tired and happy and slightly drunk.
“I used to think,” she says, “that a person could only be loyal to one thing. A boat. A crew. A cause.” She prods the fire. “I was wrong. It is surprisingly easy to be loyal to thirty children and a camel.”
“And to a stranger?”
“Oh, you’re not a stranger.” She grins. “You’re a debt.”
She raises her cup.
“To debts,” she says. “May we never pay them off.”
> truth | Drink. | caravan_close2 | +b4q_caravan
> mercy | Raise your cup. | caravan_close2 | +b4q_caravan
> quiet | Smile. | caravan_close2 | +b4q_caravan
> inquiry | Ask what is next. | caravan_close2 | +b4q_caravan

=== caravan_close2 | The Smuggler’s Share
She leaves at dawn. She has to. She has thirty children to deliver, and a schedule, and an officer to bribe. She rides up the line on her tall dun camel, with her hat tied under her chin and her pole at her knee, and halts beside you. She looks down.
“I’ll see you at the Camp,” she says. “And again at the fort.” She holds out something. It is a small flat packet of oilcloth, tied with red cord. “Take this.”
“What is it?”
“A share.” She grins. “Of the salt. Of the profit. Of the thirty.” She tosses it. You catch it. It is heavier than it looks. “I don’t keep accounts. I keep faith.”
You open it later, at the noon halt. Inside, on a bed of felt, is a small bright brass compass, scratched and dented and old. On its case, in tiny letters, is engraved a single word. Wanderer.
It was her boat’s.
You turn the case over. Under the glass, the needle trembles, and swings, and comes to rest. It does not point north. It points east, steadily, toward a mountain nine hundred miles away.
> truth | Close it. | hub_b4_a | bond:yue+3
> mercy | Hold it. | hub_b4_a | bond:yue+3
> quiet | Pocket it. | hub_b4_a | bond:yue+3
> inquiry | Show Hao Lan. | hub_b4_a | bond:yue+3

`,
  scenarios: String.raw`
$ SU_CARAVAN_YUE | trust+3 respect+3 fear-1 | elder | The Elder meets a smuggler who sold her boat to carry salt, and thirty children, across a hostile country.
hostile: She has stolen from the Concord for fifteen years, and everything I used to think about thieves is slightly wrong. I find it difficult.
wary: She calls me “the Registrar” as other people call each other by a pet name. It is the most affectionate thing anyone has done to my title in twelve years.
neutral: Thirty children in the salt. She did not ask for payment. She did not ask for thanks. She asked whether I had any objection to wearing a veil. I said I had none. I was not told why.
warm: There is a moment in the evening, when the camels kneel, and she walks down the line with a lantern, counting. She counts children. She counts them as one counts coins. I thought: this is what the Law Hall should have been.
devoted: When this is over I should like to buy her a boat. I do not know what a boat costs. I am told it is a great deal. I have fifteen years of pay in a drawer.
`,
  remarks: String.raw`
% caravan_nara_later | since:b4q_caravan>=4 | gu | Nara asked whether it is true that camels spit when they are happy. Yue told him it is when they are lying. I do not know which to believe.
% caravan_yue_later | since:b4q_caravan>=6 & bond:hao>=-100 | hao | Yue has asked me to keep her ledger. It lists thirty children, and sixty camels, and a boat. In the margin she has written: Not for sale.
`,
};
