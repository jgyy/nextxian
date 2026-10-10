import type { Arc } from "../types";

/**
 * Book Four, arc three: the Glass Orchard. The Glass-Wrights keep a forest that lightning turned to glass, and blow memories
 * into bottles. Gu's brother Hanming, taken by the levy fifteen years ago, is hiding in the Orchard as a glass-blower's hand.
 * Four approaches: speak to him plainly (a1, truth), cut him out of the Garrison patrol that has come for deserters
 * (a2, force), buy a bottle of his own forgotten childhood under a false name (a3, deceit), and blow glass beside him until he
 * talks (a4, mercy). A hidden route plays their mother's tea-stall song. Cast: Gu Hanzhen, Gu Hanming, Master Bayar, Sergeant
 * Dolgor of the Garrison, Temur, Sarnai.
 */
export const glass: Arc = {
  id: "glass",
  name: "The Glass Orchard",
  scenes: String.raw`
=== glass_entry | The Orchard
You smell it before you see it: hot sand, and ash, and something sweetly metallic, like blood. Then the road tops a rise and the Orchard lies below, in a hollow of pale ground, glittering.
It was a forest once. Lightning struck it, a thousand years ago, in a single night of terrible storm, and the trees turned to glass where they stood. Now they stand, hundreds of them, tall and slender and branching, clear as water and green as the sea and amber as honey, with the sun striking fire from every twig. Their leaves ring in the wind. A thousand tiny bells. Between them, in the long avenues, stand furnaces, and workshops, and low stone houses, and drying-racks hung with bottles in a thousand colours.
It is the most beautiful place you have ever seen. It is also, you realise, very loud.
“The Glass-Wrights,” says Temur. “They’re all slightly deaf. It is the furnaces.” He sniffs. “They make bottles. They put things in them. The Concord pays a great deal.”
“Things?”
“Memories,” says Temur, “mostly.”
Beside you Gu has gone very still.
> truth | Ask Master Bayar, the head of the Wrights, whether a young man named Hanming is among them. | glass_a1s1
> force | Notice, at the far end of the Orchard, a patrol of grey-coated riders tying their horses to a glass tree. | glass_a2s1
> deceit | Ask what a bottle of memory costs, and whose memories are for sale. | glass_a3s1
> mercy | Ask whether a stranger may be taught to blow glass, and who would teach. | glass_a4s1
> inquiry | Ask Gu to hum the song his mother sings at her tea-stall. | glass_h1 |  | bond:gu>=3 | Gu does not yet trust you with that.

// ---------------------------------------------------------------- a1: asking
=== glass_a1s1 | Master Bayar
Master Bayar is deaf, one-eyed, and eighty, and wears a leather apron burned in forty places. He sits at the mouth of the largest furnace on a stool of fused sand, with a blowpipe across his knees. He is making a bottle. A gather of molten glass hangs on the end of the pipe like a drop of honey, orange and glowing. He turns it, and turns it, and speaks to it in a low murmur.
You wait until he has finished. It takes ten minutes. He sets the pipe on its rest and wipes his face on his sleeve. He looks at you with the one blue eye, a bright, rather amused eye, in a face the colour of a walnut.
“Eh?” he says.
You say it again, louder: you are looking for a young man named Hanming.
“Eh?”
Gu steps forward. He has been standing at your shoulder, white and silent. He says, in a voice you barely recognise: “Gu Hanming. A levy-man. He would be twenty-seven.”
The old man’s eye moves to Gu’s face. It rests there a long moment. Then he lifts a finger and points at the third furnace from the end.
> truth | Thank him. | glass_a1s2
> mercy | Take Gu’s arm. | glass_a1s2
> quiet | Look. | glass_a1s2
> inquiry | Ask what he is like. | glass_a1s2

=== glass_a1s2 | The Quiet One
“Quiet,” says Master Bayar, who has not heard the question, but has seen the shape of it. He mimes a man with his mouth shut. “Good hands. Bad leg.” He pats his own knee. “He came in the spring. He said he had no name. I said, good, I never keep them.” He laughs, a creak. “Best apprentice in twenty years. He listens to the glass.”
You walk down the avenue between the furnaces. The glass trees ring over your heads in the hot wind. Gu walks beside you with his hands clenched at his sides. His lips are moving. He is rehearsing.
The third furnace is a squat brick dome with a mouth like a baker’s oven. A man is standing at it with his back to you, in a leather apron and a pair of heavy gloves. He is lean and brown and stooped. His hair is cropped close. He has a limp. He is holding a long iron pipe in the fire, turning it, patiently, with the steady slow rhythm of a person who has all day.
Gu stops ten paces away. He cannot go any farther.
> truth | Say nothing. | glass_a1s3
> mercy | Put a hand on his back. | glass_a1s3
> quiet | Wait. | glass_a1s3
> inquiry | Ask Gu what he remembers. | glass_a1s3

=== glass_a1s3 | A Boy of Twelve
“A horse,” says Gu. He says it in a whisper. “A red one, with a white star. Hanming used to ride it on the common. He’d put me up in front. He smelled of straw.” His voice cracks. “He let me hold the reins. I was four. I thought I was driving.”
The man at the furnace has not turned. He is withdrawing the pipe from the fire, with its glowing gather on the end, and swinging it gently to keep the shape. His back is rigid.
“He had a laugh,” says Gu. “It went up at the end.”
The man at the furnace lowers the pipe.
He stands there, quite still, with the gather glowing at the end of the iron. A drop of orange glass falls to the floor and breaks in a spray of sparks. He doesn’t seem to see it. His shoulders are drawn up round his ears.
He turns round.
He is twenty-seven. He has a lean, hawkish, weathered face, with a white scar across the left cheek. His eyes are brown. They are the same brown as Gu’s.
“Hanzhen,” he says.
> truth | Step back. | glass_a1s4 | npc:SU_GLASS_BROTHER
> mercy | Smile. | glass_a1s4
> quiet | Hold your breath. | glass_a1s4
> inquiry | Watch Gu. | glass_a1s4

=== glass_a1s4 | Fifteen Years
Neither moves. Neither speaks. They stand ten paces apart in the roar of the furnaces, two thin brown young men in leather aprons with the same cast of jaw. The sun streams through the glass trees and throws bars of green and gold across the floor. The molten glass hisses.
“You’re tall,” says Hanming.
“You’re not.”
“I used to be.” He gives a short cracked laugh. “I got shrunk. In the levy.” He rubs the back of his neck. “You came a long way.”
“I came with an Elder. And a Censor. And a girl with a seed.” Gu’s voice is shaking. “They said we were going to the Steppe. I didn’t know you were on it.”
“I didn’t either.”
“Mother told me you’d been taken to the north.”
“I was.” The scar on Hanming’s cheek whitens. “And then I came back.”
Gu takes a step. Hanming stiffens. His whole body goes rigid, as if he expected to be struck.
> truth | Wait. | glass_a1s5
> mercy | Hold Gu’s sleeve. | glass_a1s5
> quiet | Look away. | glass_a1s5
> inquiry | Ask what he did in the north. | glass_a1s5

=== glass_a1s5 | What He Did
“I was a soldier,” says Hanming. He says it flatly. He sets down the pipe. He takes off his gloves, one finger at a time. “They gave me a pike and a number. I was twelve. I was good at it.” His mouth twitches. “I was a sergeant by seventeen.”
“You were a child.”
“I was a very efficient one.” He lays the gloves on the furnace. “Colonel Ruo took me for his orderly. I carried his tea. I carried his letters. I held his horse.” He looks at his hands. “Last winter he sent a column to the grass-edge, to round up a clan. A census, he called it. I was at the head. I rode a red horse.”
Gu has gone white.
“There were fifty-one,” says Hanming. “Old people, children. They came out of their tents. They stood in a line.” His voice is steady. “I read the order. I read it aloud, in the voice I’d been taught. And then I stood there and watched them marched to the river.”
> truth | Let him finish. | glass_a1s6
> mercy | Take Gu’s hand. | glass_a1s6
> quiet | Say nothing. | glass_a1s6
> inquiry | Ask when he left. | glass_a1s6

=== glass_a1s6 | The River
“The next morning,” says Hanming. “I took my horse and rode. I did not tell anyone. I rode until it died. And then I walked.” He sits down on an upturned bucket, quite suddenly, as though his strings were cut. “I came here because I’d heard of the Orchard. I thought, a place where people put things in bottles. I thought, perhaps they would put me in one.”
Master Bayar has come up behind him, silent, with his stick. He lays a gnarled hand on the young man’s shoulder.
“Fifty-one,” says Hanming, to his knees. “Standing in a line. Facing east.”
“The stones,” says Gu, hoarsely. “At the Singing Rise. They were—” He stops. “They stood them up.”
“Did they?” Hanming looks up. His face is a mask. “Who?”
“Someone who knew the custom.”
“Oh.” He puts his face in his hands. “Oh, God. Thank God.”
> truth | Let him weep. | glass_a1s7
> mercy | Kneel beside him. | glass_a1s7
> quiet | Step back. | glass_a1s7
> inquiry | Ask Gu what he wants. | glass_a1s7

=== glass_a1s7 | What Gu Wanted
“I want him to come home,” says Gu.
He says it at once. He says it in a high thin voice that breaks. He is kneeling on the sandy floor beside his brother, and he has taken hold of the nearest hand. “Mother thinks you’re dead. She sets a bowl for you. She sets one every night. She has for fifteen years.”
Hanming says nothing.
“I told her you’d come back. She said you wouldn’t. She said the north took everyone.” Gu’s knuckles are white. “I’ve been a disciple. I’ve been a fool. I followed an Elder down a mountain. But all I ever wanted was for someone to come back.”
“I can’t,” says Hanming.
“You can.”
“I can’t. Hanzhen. I can’t walk into that village. I can’t sit at her table.” His voice is raw. “Not after what I did.”
“She won’t ask.”
“No,” says Hanming. “That’s why I can’t.”
> truth | Say it is his to decide. | glass_a1s8
> mercy | Hold Gu. | glass_a1s8
> quiet | Look at Bayar. | glass_a1s8
> inquiry | Ask what he would need. | glass_a1s8

=== glass_a1s8 | A Bottle for Forgiveness
“A way,” says Hanming slowly. “To put it down.” He rubs his eyes. “I’ve been blowing glass for six months. It’s a good trade. It gives you something to do with your hands.” He picks up the pipe, and considers it. “Master Bayar says the bottles can hold a feeling. Not a memory, but a feeling. If you blow it in properly. If you mean it.”
“What would you blow?”
“Fifty-one,” says Hanming. “And a bowl.”
He lifts the pipe to the furnace. He gathers a drop of glass, as red as a coal. He turns it, and turns it. He blows. The bubble swells, and swells, a shining globe, trembling at the end of the iron. His cheeks hollow. His eyes are shut.
“There,” he says.
He takes it from the pipe and sets it in the annealing-oven. It sits there, red and glowing, a perfect sphere. “It’ll set in an hour. It’ll be clear as water.” He wipes his face. “Whatever’s in it, I won’t have to carry.”
> truth | Watch. | glass_a1s9
> mercy | Hold his shoulder. | glass_a1s9
> quiet | Wait. | glass_a1s9
> inquiry | Ask what it will do. | glass_a1s9

=== glass_a1s9 | What a Bottle Does
It is a very strange hour. The brothers sit side by side on the bucket and the upturned crate, with the annealing-oven glowing before them, and say very little. Gu tells him about the tea-stall. Hanming tells him about the red horse. The glass hisses and ticks as it cools.
At the end of the hour, Hanming lifts the sphere out with a pair of tongs and holds it in the light. It is a clear globe, the size of an apple, the colour of morning. There is nothing in it that you can see. But when you look at it for a long time, you feel a faint ache behind your eyes, and a pull in your chest, and the sense of a great many people standing very close.
“Fifty-one,” says Hanming softly.
He turns the bottle in his hands. He looks at it. He looks at his brother.
“I’ll carry it home,” he says. “I’ll put it on her shelf.” His mouth works. “And I’ll tell her.”
Gu begins to cry.
> truth | Smile. | glass_a1s10
> mercy | Hold them both. | glass_a1s10
> quiet | Look at the glass trees. | glass_a1s10
> inquiry | Ask when he will leave. | glass_a1s10

=== glass_a1s10 | The Tea-Stall
“Not yet,” says Hanming. “I have a master. I have six months’ apprenticeship.” He turns the bottle. “And I have a thing to do first.” He looks at you. “The Colonel.”
“Hanming—”
“Not to kill him.” He shakes his head. “I’m not that. I’m done with that.” His eyes are tired and clear. “But I know him. I know where he sleeps. I know the way he walks. I know the thing he’s afraid of.” He sets the bottle on the furnace-ledge, where it catches the light. “If you’re going to stop him, you’ll need someone who knows.”
Gu’s mouth opens.
“I want to go with you,” says Hanming. “As far as the fort. And then I’ll go home.” He holds out a hand. “Is that acceptable?”
You take it. It is hard and dry and warm.
“Yes,” you say.
> truth | Smile. | glass_close | +glass_met
> mercy | Look at Gu. | glass_close | +glass_met
> quiet | Bow. | glass_close | +glass_met
> inquiry | Ask Hanming what the Colonel fears. | glass_close | +glass_met

// ---------------------------------------------------------------- a2: the patrol
=== glass_a2s1 | Grey Coats
There are twelve of them. They have tied their horses to a glass tree at the far end of the avenue, where the ground rises. They wear grey coats, with a white eye on the breast, and carry carbines slung across their backs. A sergeant with a heavy red face is addressing them in a low voice, pointing.
“They’re hunting,” says Temur, quietly. His hand is on his bow. “The Garrison sends them out every month. Deserters. They search the Orchard, because it is the one place on the grass where a stranger can hide.”
“Deserters?”
“The levy.” He grimaces. “Boys. They run. Some come here. The Wrights take them in. The Garrison has been told to flush them out.”
Gu has gone green. “Hanming,” he says.
“Is he here?” says Ren Qiao, sharply.
“I don’t know. I don’t know.” Gu is staring at the third furnace. “But if he is, they’ll—”
“Then we have about two minutes,” says Ren Qiao. He is already moving. “Go.”
> force | Run. | glass_a2s2
> truth | Call out. | glass_a2s2
> quiet | Take cover. | glass_a2s2
> inquiry | Ask Temur how many. | glass_a2s2

=== glass_a2s2 | The Third Furnace
He is there. He is standing at the furnace, with his back to the avenue and the pipe in his hand, absorbed. He has not noticed the riders. The furnaces roar, and the glass bells ring, and his ears are dulled by six months of fire. He turns the iron, and the molten gather glows on its end like a sun.
Gu skids to a stop beside him. “Hanming!”
The man does not turn. “Eh?”
“Hanming! Run!”
This time he hears. He swings round, with the pipe in his fist, and sees a young man with his own eyes standing in front of him, gasping, white. He sees the avenue behind. He sees the grey coats, forty yards off, on the move. He goes still.
“Oh,” he says, in a very quiet voice. “It’s you.”
“Come on!” says Gu.
“It’s the patrol.”
“I know!”
“Dolgor,” says Hanming, looking at the red-faced sergeant. “It’s Dolgor.” He sets down the pipe. “He taught me to ride.”
> force | Grab him. | glass_a2s3
> truth | Say nothing. | glass_a2s3
> quiet | Pull him behind the furnace. | glass_a2s3
> mercy | Say there is time. | glass_a2s3

=== glass_a2s3 | Cornered
There is no time. The sergeant has seen him. He lifts a hand. The grey coats fan out, with practised ease, across the avenue, carbines coming off their shoulders. A man runs up the side lane to cut off the back. Another drops to a knee. The glass trees ring overhead, a high tinkling, as the wind gusts.
“Gu Hanming,” calls the sergeant. His voice is hoarse and flat. “Lately of the Third Pike, Fort Ruo. You are charged with desertion in the face of the enemy. Lay down your arms.”
Hanming lifts his empty hands. He is smiling, faintly, crookedly. “I haven’t any, Sergeant.”
“Walk this way.”
“I’d rather not.”
“It’s not a request.”
Ren Qiao steps in front of Hanming. His sword is not drawn. His hands hang loose. “He is under the protection of the Listeners,” he says.
“The Listeners have no jurisdiction.” The sergeant’s heavy face is flushed. “Stand aside, Warden.”
> force | Step beside Ren. | glass_a2s4
> truth | Say it is wrong. | glass_a2s4
> quiet | Look at the trees. | glass_a2s4
> mercy | Ask for mercy. | glass_a2s4

=== glass_a2s4 | The Trees
You look at the trees. They tower over the avenue, tall and branching, clear as water, and the wind makes them ring. They are very old. They are very thin. In the branches, at the height of the soldiers’ heads, a mass of glass twigs and leaves and fruit hangs like a chandelier, glittering in the sun.
A thought comes to you. It is a ridiculous thought. You act on it before you have time to be afraid.
You put your hand on the nearest trunk. It is cold and smooth. Beneath the surface you feel the shape of the lightning that made it: a branching vein of white, a flash frozen mid-stroke. You find the place that sings. You set your thumb on it. And you hum, very softly, a single high note.
The tree shivers.
It begins to ring. The note builds, a clear pure shimmering chime, climbing, spreading to the neighbouring trees, and the next, until the whole avenue is humming. The glass leaves tremble. The twigs vibrate. The soldiers lift their heads.
“What is that?” says one.
> force | Hold the note. | glass_a2s5
> truth | Raise it. | glass_a2s5
> quiet | Step back. | glass_a2s5
> mercy | Cover your ears. | glass_a2s5

=== glass_a2s5 | Shatter
The note goes up. It is the held door, the long clear line that Bao Er taught you, and it rises to a pitch where the glass cannot bear it. A twig cracks. A leaf shatters. Then a whole branch above the sergeant’s head lets go with a sound like a thousand dropped plates.
It comes down in a glittering storm. Shards fall like rain. The soldiers throw up their arms and cry out. A horse screams. The sergeant staggers back, shielding his face. Glass spatters over the ground in a bright shower, and the sunlight turns it all to fire.
“Down!” shouts Ren Qiao. “Everyone down!”
You drop. You pull Hanming to the floor and cover his head. The avenue is a roar of breaking glass. The light is blinding. The trees ring and ring and ring, each one shedding a branch, a shower of crystal, until the ground is a drift of bright ice and the soldiers are on their knees, bleeding and swearing, in a shining wreck.
And then it stops.
> force | Rise. | glass_a2s6
> truth | Check Hanming. | glass_a2s6
> quiet | Stay down. | glass_a2s6
> mercy | Look for the wounded. | glass_a2s6

=== glass_a2s6 | Cuts
Nobody is dead. That is the first thing. You count them, kneeling in the glass, with Gu at your elbow. Twelve grey coats, groaning, bleeding, picking splinters from their faces. A cut here, a graze there. A man holds his forearm. A boy of nineteen sits in the dust, white, with a long gash on his scalp. The sergeant has lost his hat.
They are alive.
“I am sorry,” you say, aloud, and it surprises you.
The sergeant lifts his head. His red face is striped with blood. He stares at you. He stares at the avenue, strewn with glittering ruin, the stripped trees, the sparkling drifts. His mouth is open.
“What did you do?” he says.
“I asked them to sing.”
“You—” He stops. He puts a hand to his cheek. It comes away red. He looks at it with a kind of dull astonishment. “You’ve cut my face.”
“I know.”
“I’ve got a wife.”
> force | Help him up. | glass_a2s7
> truth | Say you are sorry again. | glass_a2s7
> quiet | Bow. | glass_a2s7
> mercy | Ask Lu Yan’s question: where does it hurt? | glass_a2s7

=== glass_a2s7 | Dolgor
You bandage them. It is absurd. It is what happens. Hao Lan finds cloth in her satchel, and Shu Ning tears her apron, and the Glass-Wrights bring a barrel of water. You kneel in the wreckage and bind the cuts of men who came to arrest a deserter, and they let you, with the numb obedience of the stunned.
The sergeant sits on an upturned bucket while Hao Lan sews up his cheek. He winces. He doesn’t curse. When it is done he sits for a while with his heavy hands hanging between his knees.
“I taught him to ride,” he says. “Hanming. He was twelve. He had a seat like a sack of flour.” He glances sideways. “He was good at it, after a bit.”
“Yes.”
“I didn’t want to come.” His voice is gruff. “I had orders. I’ve got four children. I’d never refused.” He looks at the glass-strewn avenue. “I don’t suppose I can say I didn’t find him.”
“You didn’t.”
“No?”
“He isn’t here,” you say. “I looked.”
> force | Offer him tea. | glass_a2s8
> truth | Smile. | glass_a2s8
> quiet | Say nothing. | glass_a2s8
> mercy | Say thank you. | glass_a2s8

=== glass_a2s8 | A Report
He writes it himself. He does it on the back of a drover’s tally, with a stub of pencil, sitting on the bucket in the sun. He writes that the patrol searched the Orchard and found no deserter. He writes that a rockfall of glass wounded twelve men. He writes that the Wrights were co-operative. He writes that the Listeners are not the problem.
He signs it. He folds it. He tucks it into his belt.
“The Colonel won’t believe it,” he says. “But he’ll file it. He files everything.” He stands. His men stand, stiffly, bandaged, bemused. They mount their horses, in grey rank. The sergeant looks at Hanming, who is standing by the third furnace with his hands in his apron, small and brown and unmoving.
“Boy,” he says.
“Sergeant.”
“Don’t go to the fort.” The red face is expressionless. “Whatever you’re planning. Don’t.” He gathers his reins. “I’ll tell them you’re dead. It’ll be easier on everyone.”
He wheels his horse. The patrol clatters away.
> force | Watch them go. | glass_a2s9
> truth | Thank him. | glass_a2s9
> quiet | Take Hanming’s arm. | glass_a2s9
> mercy | Call after him. | glass_a2s9

=== glass_a2s9 | The Orchard Mourns
It takes a week to sweep up. The Glass-Wrights go among the trees with brooms and baskets, gathering the splinters of their forest. They are silent. They work for hours, bent over, sifting the glittering rubble. Master Bayar sits on his stool, with his one eye closed, and does not speak.
You stand at the edge of the avenue. You feel it like a weight on your chest: the thing you did. The beautiful, careless, effective thing. You have broken a thousand years of growth in a single note.
Hanming comes and stands beside you. He has a broom. “Don’t,” he says.
“Don’t what?”
“Don’t look like that.” He sweeps a pile of green shards onto a shovel. “It’ll grow back. Slowly. They’re glass. They take a century.” His mouth twitches. “But they’re used to it.”
“I am sorry.”
“Don’t be.” He leans on the broom. “I’ve never seen anything like it. Do you know, I think the trees were enjoying it.”
> force | Laugh. | glass_a2s10
> truth | Take a broom. | glass_a2s10
> quiet | Look at the sky. | glass_a2s10
> mercy | Say you will help. | glass_a2s10

=== glass_a2s10 | Sweeping
You sweep. It takes the whole party. Ren Qiao, who has sold his sword for the duration, hauls baskets. Hao Lan sorts the shards by colour, with ruthless efficiency. Shu Ning melts the wreckage down in the furnaces and makes it into beads. Duan Wuyi, in a borrowed apron, is learning to blow a bubble, and has managed an object like a deflated pig’s bladder.
“It is quite beautiful,” he says, holding it up.
“It’s a lump,” says Master Bayar, who has heard.
“Then it is a beautiful lump.”
The old man gives a creaking laugh. He pats the Censor’s arm. “You’ll do,” he says.
By the end of the week the avenue is clear, and the trees stand stripped and bare, and the whole Orchard looks like a forest in winter, silver and skeletal and shining. A thin new growth has begun to show on the stumps: tiny green nubs of glass, no larger than a grain of rice.
Hanming points them out, one by one, with a slow proud finger.
> force | Smile. | glass_close | +glass_shattered
> truth | Say it is lovely. | glass_close | +glass_shattered
> quiet | Look at the nubs. | glass_close | +glass_shattered
> mercy | Hold Gu’s hand. | glass_close | +glass_shattered

// ---------------------------------------------------------------- a3: the bottle
=== glass_a3s1 | The Shop
The Wrights sell their wares from a long low shop at the edge of the Orchard, under a glass awning. It is a bazaar. Shelves reach to the roof, crammed with bottles, flasks, phials, and vials in every shade of every colour. A hundred thousand of them. They catch the light and throw it back in a shifting rainbow. The air smells of hot sand and lavender.
A clerk in a brown apron presides at a counter, writing in a ledger. He is a plump pale man with a drooping moustache. He looks up at you without enthusiasm.
“What is wanted?”
“A bottle,” you say. “Of a particular kind.”
“We have a great variety.” He taps the ledger. “Joy. Grief. Longing. A summer evening. The taste of a peach. A first kiss. The pain of a broken leg. Fifty to a thousand silver, depending on provenance.” He sniffs. “Our best sellers are the childhood ones. The Concord buys them by the crate.”
“By the crate?”
“For its officers.” He lowers his voice. “To keep them young.”
> deceit | Ask for the catalogue. | glass_a3s2
> truth | Say what you are looking for. | glass_a3s2
> quiet | Look at the shelves. | glass_a3s2
> mercy | Ask whose they are. | glass_a3s2

=== glass_a3s2 | Whose
“Everyone’s,” says the clerk. “Donated. Sold. Taken.” He turns a page. “The Wrights are not particular. A man comes in with a sad memory, and we offer him two silver. He goes out lighter. We have a bottle.” He shrugs. “It is a fair trade.”
“And if he wishes it back?”
“He may buy it. At the retail price.” He looks pained. “It is surprising how few do.”
You look down the shelves. You see the labels, in a tiny copperplate: A Wedding in Spring. Mother’s Hands. The Night the Roof Fell In. Each is a small clear flask with a cork. Each glows faintly, from within, with an unearthly light. You pick one up. It is warm. You feel, with a pang, a sudden powerful sense of a child’s joy at the sight of a kite.
You set it down quickly.
“There is a section,” says the clerk, “for the unclaimed.” He gestures at a locked glass cabinet. “Those are the ones the donors forgot. The ones whose owners died. They go to the Garrison.”
> deceit | Ask to see it. | glass_a3s3
> truth | Ask for a name. | glass_a3s3
> quiet | Look at Gu. | glass_a3s3
> mercy | Say the Garrison has no right. | glass_a3s3

=== glass_a3s3 | The Cabinet
He opens it with a key on a chain. There are sixty bottles in it, laid in rows on black velvet. They are all small and all labelled with a number. A faded tag hangs from each neck. The tags read: Levy. Third Pike. Boy, 12.
“Conscripts,” says the clerk. “Their childhoods. They are taken when the boy joins. It makes them obedient.” He says it quite flatly. “A soldier who remembers his mother is not a good soldier.”
Gu has made a small sound.
“It is a standing order of the Garrison,” says the clerk. “I did not write it.” He wets his lips. “They bring them to be bottled, and the Wrights are paid, and the Colonel’s men take them away. These are the ones that were not collected. Because of the desertions.”
You read the numbers. Gu reads them with you. He reads them slowly, one by one, and then he stops, with his finger on a cork.
“Gu Hanming,” he says.
It is there. It is the fifty-third. It is a small bottle of pale green glass, no longer than a thumb.
> deceit | Take it. | glass_a3s4
> truth | Ask the price. | glass_a3s4
> quiet | Hold Gu. | glass_a3s4
> mercy | Weep. | glass_a3s4

=== glass_a3s4 | Price
“Three hundred silver,” says the clerk. “It is unclaimed, but not forfeit. It is a Class A. A childhood, with a red horse.” He seems to take a perverse pride in it. “It is exceptionally detailed.”
“We haven’t that,” says Gu.
“Then I am afraid—”
“We have a letter,” says Hao Lan, who has come up behind with her satchel. She produces a sheet of grey paper from it with an air of tremendous nonchalance. “An order of the Seventh Chancery. Requisitioning the contents of the cabinet, for audit. You will find it signed.”
The clerk takes it. He holds it at arm’s length. He squints at the seal. “This is not the Garrison’s seal,” he says.
“It is the Chancery’s.”
“The Garrison is under the War Office.”
“The War Office is under the Chancery,” says Hao Lan, sweetly. “It has been since the reform of 411. Section nine. I wrote the footnote.”
The clerk’s moustache droops. “Oh dear,” he says.
> deceit | Wait. | glass_a3s5
> truth | Say nothing. | glass_a3s5
> quiet | Hold your breath. | glass_a3s5
> mercy | Smile at him. | glass_a3s5

=== glass_a3s5 | A Forged Requisition
He reads it three times. He examines the seal under a magnifying glass. He sniffs the wax. At the end of five minutes he puts it down and sits on his stool, pale as a ghost, with his hands flat on the counter.
“It’s genuine,” he says. “It is absolutely genuine.” He sounds faintly outraged. “It is a better forgery than the real ones.”
“I beg your pardon?” says Hao Lan.
“I have a brother in the Chancery. I know the forms.” He taps the page. “It uses the old spelling of ‘audit.’ Nobody has used that since the Academy reform. That is a very sophisticated touch.” He looks up. “Who are you?”
Hao Lan opens her mouth. And shuts it. She says, in a small voice, “I was a clerk.”
“Were you?” The clerk is gazing at her with sudden intent respect. “You must be very good.”
“I am adequate.”
“You are a genius.” He stands. “I will give you the cabinet.”
> deceit | Thank him. | glass_a3s6
> truth | Ask why. | glass_a3s6
> quiet | Take the key. | glass_a3s6
> mercy | Say you will give them back. | glass_a3s6

=== glass_a3s6 | Sixty Bottles
You carry them out in a basket. Sixty little bottles, each wrapped in a twist of paper, each with its tag. They rattle softly. Gu carries the fifty-third in his two hands, as though it were an egg. They sit on the cart, under a cloth, as you drive out of the Orchard in the dusk.
Hao Lan is quiet. She has her notebook on her knee. She is not writing.
“It is theft,” she says, at last.
“Yes.”
“It is a forgery and a theft. Of a Garrison’s property. On a forged Chancery order. I have broken three statutes and a regulation.” She presses her lips together. “And I am not in the least sorry.”
“Nor am I.”
“I find that rather alarming.” She turns a page. “I should like it noted.”
She writes it down.
> deceit | Smile. | glass_a3s7
> truth | Say you will return them. | glass_a3s7
> quiet | Look at the road. | glass_a3s7
> mercy | Look at Gu. | glass_a3s7

=== glass_a3s7 | Hanming
You find him that night, at the edge of the Orchard, sitting on a wall with his back to the glass. He has a cup of tea in his hands. He is looking at the stars. He doesn’t turn.
“I saw you coming,” he says. “I thought: they’ve got it.”
Gu holds out the bottle.
“I’m not sure I want it,” says Hanming.
“It’s yours.”
“I know whose it is.” He turns the cup in his hands. “I sold it. I was twelve. I stood in a shop like that one, and a man in a brown apron told me it would make me a better soldier. I said yes. They gave me two silver.” He swallows. “I spent it on sweets.”
He looks at the bottle.
“I don’t remember the red horse,” he says. “I remember you telling me about it, just now. I remember being told. But I don’t remember the horse.”
“It’s in there.”
“Is it?” He takes it. He holds it in both hands. “It’s so small.”
> deceit | Wait. | glass_a3s8
> truth | Say it is his. | glass_a3s8
> quiet | Hold your breath. | glass_a3s8
> mercy | Hold Gu. | glass_a3s8

=== glass_a3s8 | Uncorking
He pulls the cork. He does it gently, with a thumb. A thin pale light rises from the neck of the bottle, no brighter than moonlight, and hangs in the air before his face. It is shaped like a small red horse, galloping, with a white star on its forehead. It circles his head once. Twice. It nuzzles his cheek.
Hanming makes a sound that is not a sob and not a laugh.
“Oh,” he says. “Oh. There you are.”
The horse dissolves. It settles over his face like a veil of mist, and sinks into his skin, and he sits there with his eyes shut and his mouth open, shaking all over. The cup falls from his hand and rolls on the grass. A cool breath of wind comes down off the Orchard, ringing the glass.
Gu is on his knees. He has his arms round his brother’s legs.
“I remember,” says Hanming, in a thick voice. “I remember Mother. She’d put a bowl of milk-tea in my hands when I came in from the cold. She’d say, drink it while it’s hot, and I’d burn my tongue.” He weeps. “I always burnt my tongue.”
> deceit | Stay. | glass_a3s9
> truth | Smile. | glass_a3s9
> quiet | Step away. | glass_a3s9
> mercy | Kneel too. | glass_a3s9

=== glass_a3s9 | The Other Fifty-Nine
There are fifty-nine more. You cannot give them back. You do not know their owners. They are scattered, in sixty villages, across the river provinces and the Steppe, boys who were taken at twelve and sent to forts and lost. You have their tags. You have their numbers. You do not have their names.
Hao Lan knows what to do. She has a ledger. She copies the numbers and the districts, and writes to every parish in the provinces, a form letter in her clear hand: If your son was taken by the levy, please state his age, his village, his mother’s name. Enclose a lock of hair.
It will take a year. It will take a miracle.
“I think it is the best use of a stolen requisition that has ever been made,” she says, folding the first letter. “I should like the Chancery to know.”
She seals it. She gives it to Temur, who tucks it in his coat.
“It will go with the next caravan,” he says. “The wind will carry the rest.”
> deceit | Thank her. | glass_a3s10
> truth | Help her seal. | glass_a3s10
> quiet | Pack the bottles. | glass_a3s10
> mercy | Say a word for each. | glass_a3s10

=== glass_a3s10 | A Bottle on a Shelf
You leave the Orchard at dawn. The fifty-nine bottles go in a crate on the cart, packed in straw. The fifty-third, empty now, is in Hanming’s pocket. He carries it as a man carries a love-letter. It is a little green flask, with a cork he won’t replace.
He rides at the tail of the column with Gu. They don’t speak. From time to time one reaches out and touches the other’s sleeve, as if to be sure.
You look back once. The Orchard glitters in the sun. A thousand glass bells ring in the morning wind. Master Bayar stands at the gate with his stick, one hand raised, a small bent shape.
He shouts something. His voice carries thin and cracked on the wind.
Gu cups his ear. “What?”
“He says,” says Hanming, smiling for the first time in your hearing, “don’t come back until you’ve got something to put in a bottle.”
> deceit | Wave. | glass_close | +glass_bottle_kept
> truth | Smile. | glass_close | +glass_bottle_kept
> quiet | Ride on. | glass_close | +glass_bottle_kept
> mercy | Call back a promise. | glass_close | +glass_bottle_kept

// ---------------------------------------------------------------- a4: blowing glass
=== glass_a4s1 | Learning
“Sit,” says Master Bayar. He has not heard the question. He has simply seen your face. He points with his stick at a stool in front of the third furnace. “You blow. I watch.” He jerks his chin at the man who stands there. “He’ll show you.”
The man at the third furnace says nothing. He is lean and brown and stooped, with a white scar on one cheek. He gestures you to the stool. He hands you the iron pipe, a four-foot rod with a bulb at the end. He holds up a hand. Wait.
He gathers a little glass on a rod of his own. It comes out of the furnace glowing orange, as slow as honey. He rolls it on a stone slab. He shapes it with a wooden block. He is deft and exact. He blows.
The glass swells.
It is the most beautiful thing you have seen in a long time. It billows out from the iron like a soap-bubble, orange and shining. It is perfectly round. It trembles in the light.
He takes it from his lips. He nods at you.
> mercy | Take the pipe. | glass_a4s2
> truth | Thank him. | glass_a4s2
> quiet | Watch again. | glass_a4s2
> inquiry | Ask his name. | glass_a4s2

=== glass_a4s2 | He Does Not Say
He shakes his head. He taps the pipe. Later. Work first. He hands you a fresh gather and shows you how to roll it. You do it badly. The glass sags. It droops off the iron in a long orange tail. He laughs, a short silent huff through the nose, and shows you again.
You blow. The glass swells, lopsided and thick. It collapses with a puff. He gives you another.
By the third hour you have produced a vague, lumpy, hopelessly crooked sphere. You hold it up with pride. Master Bayar, passing, regards it with his one eye. “That is a very ugly bottle,” he says.
“Yes.”
“I like it.” He pats your arm. “It has character.”
The man at the furnace doesn’t smile. But he takes the sphere from you, and puts it in the annealing-oven, and turns back to the fire. His shoulders have loosened. For the first time, you notice him humming, very low, under his breath. It is a tune you almost know.
> mercy | Hum with him. | glass_a4s3
> truth | Listen. | glass_a4s3
> quiet | Keep working. | glass_a4s3
> inquiry | Ask what it is. | glass_a4s3

=== glass_a4s3 | A Tune
It is a tea-stall song. You know it before you have placed it: the drone of a kettle, the rattle of cups, the chatter of a market, caught in the rise and fall of a simple tune. It is the tune that Gu hums when he thinks nobody is listening.
You glance round. Gu is at the other end of the shop, carrying a tray of finished bottles to the racks. He has stopped dead. He is staring at the man at the furnace. His mouth is open.
The man doesn’t look up. He goes on humming. He is shaping a vase. His hands move with perfect economy.
“Hanming,” says Gu, in a cracked whisper.
The humming stops.
There is a long silence. The furnace roars. The glass bells ring overhead.
“Hello, Hanzhen,” says the man at the furnace. He still doesn’t look up. “I wondered how long it would take you.”
> mercy | Step aside. | glass_a4s4
> truth | Say nothing. | glass_a4s4
> quiet | Take the pipe. | glass_a4s4
> inquiry | Look at Gu. | glass_a4s4

=== glass_a4s4 | Since the Spring
“Six weeks,” says Hanming. He puts down the vase. “I knew you were on the Steppe. The wind said. A caravan came through, a week ago, and said: a cart with a girl and an old woman and a boy with a bad horn.” He rubs his scar. “I knew it would be you. Nobody else would blow a horn.”
“You didn’t say,” says Gu.
“I didn’t know what to say.”
“Hello would have done.”
Hanming laughs. It is a short rusty sound. He wipes his hands on his apron. He turns round, at last, and looks at his brother. He is twenty-seven, and lean, and tired, with the same brown eyes.
“I’m sorry,” he says. “I should have written. There was no way to.” He swallows. “There was no way to explain. I didn’t know how to say: I was a soldier. I did a thing. I couldn’t come home.”
“You didn’t have to say.”
“I did.” His voice shakes. “I do.”
> mercy | Let him. | glass_a4s5
> truth | Hold Gu. | glass_a4s5
> quiet | Step back. | glass_a4s5
> inquiry | Ask what the thing was. | glass_a4s5

=== glass_a4s5 | The Thing
He tells it all. It takes the afternoon. You sit on the sand-floor of the workshop while he talks, with a cup of tea going cold in your hands, and Gu sits beside him, listening, with his face turned away. Master Bayar has gone out. The furnace burns low. Outside the glass trees ring in the breeze.
He tells about the levy, the forts, the red horse. He tells about Colonel Ruo, a gentle well-read man who sat with him at night and talked about poetry. He tells about the clan on the grass-edge, and the line of children, and the river.
He tells it without ornament.
“I could have stopped it,” he says. “I was the sergeant. I could have said, ‘No.’ I could have put down my pike.”
“You were seventeen—”
“I was twenty-six,” says Hanming. “It was last winter.”
Gu’s shoulders are shaking.
“Fifty-one,” says Hanming. “I counted. I counted every one.”
> mercy | Say nothing. | glass_a4s6
> truth | Say he is here now. | glass_a4s6
> quiet | Pass the tea. | glass_a4s6
> inquiry | Ask what he does with the number. | glass_a4s6

=== glass_a4s6 | A Number
“I blow it,” says Hanming. “Into the glass.” He takes down a flask from a shelf. It is plain and clear, narrow-necked, the length of his hand. It glows, faintly, from inside, with a pale cold light. “Every night. I stand here, and I say the number, and I blow. Fifty-one. A little of it comes out.” He turns the flask. “Master Bayar says that if I do it a thousand times it will be empty.”
“How many have you done?”
“Two hundred and six.”
He sets the flask down on the shelf, among a hundred others like it. They sit in rows. Each glows. They are small, identical, and unlabelled.
“It doesn’t help,” he says. “But it’s something to do with my hands.”
You look at the flasks. You think of Lu Yan’s sixty-three beds, and Qiu’s tally on the stair, and Mei with her hundred and four strokes.
“Would it help,” you say slowly, “if they knew?”
“Who?”
“The fifty-one.”
> mercy | Wait. | glass_a4s7
> truth | Say they are standing in the rows. | glass_a4s7
> quiet | Hold the flask. | glass_a4s7
> inquiry | Say there is a way. | glass_a4s7

=== glass_a4s7 | The Forty-One
You tell him. You tell him about the white stones at the north end of the rise, and the silence, and the bead in your pocket. You tell him about Little Wind. You take it out and show him, a tiny pale pearl, no larger than a seed.
He stares at it. He doesn’t touch it. His face is working.
“That’s—” He stops. “That was one of the babies.”
“Yes.”
“I carried her. In my arms. To the river.” His voice is a thread. “She was so light. She didn’t cry.” He shuts his eyes. “She didn’t cry the whole way.”
Gu has his arm round him. He says nothing. His own tears are running into his collar.
“There are forty more,” you say. “In the stones. They need carrying to a place called the Door. At the Winter Camp.” You pause. “I think I could use a hand.”
Hanming opens his eyes.
“You want me,” he says slowly, “to carry them.”
> mercy | Say yes. | glass_a4s8
> truth | Say you do not ask it lightly. | glass_a4s8
> quiet | Hold out the bead. | glass_a4s8
> inquiry | Say it is only if he wishes. | glass_a4s8

=== glass_a4s8 | A Task
“I want to,” says Hanming.
He says it after a long pause, in a very quiet voice. “I’ve wanted to, since the first day. I didn’t know it was possible. I thought it was the kind of thing a man has to do alone, in the dark.” He wipes his face with the back of his wrist. “If I carry them, will it help?”
“I don’t know.”
“Will it make me clean?”
“No,” you say. “It will make you someone who carried them.”
He looks at you for a long time. Something in his tired face loosens.
“That’s a better answer than I expected,” he says. He takes the bead in his palm, gently, as he would take a bird. It hums. A single high note, small and sweet. He bends his head. “Hello, Little Wind,” he says. “It’s me. I’m sorry I took so long.”
> mercy | Weep. | glass_a4s9
> truth | Smile. | glass_a4s9
> quiet | Look away. | glass_a4s9
> inquiry | Ask Gu. | glass_a4s9

=== glass_a4s9 | Gu
“I’ll come too,” says Gu. He says it at once, fierce, on a gulp. “To the Door. To the Winter Camp. And then to the fort. And then home.” He glares at his brother. “I’m not leaving you behind again.”
“You were four.”
“I was not leaving you behind.”
“You weren’t. The levy was.” Hanming’s mouth quirks. “It was their fault.”
They look at each other. They are both laughing, and both crying. Gu throws his arms round his brother and buries his face in his apron, and Hanming holds him, awkwardly, patting his back.
“You’ve grown such an ugly nose,” he says.
“It’s the same as yours.”
“It’s a family nose. It’s got worse.”
You stand up and go outside, quietly, onto the avenue. The sun is going down. The glass trees are gold and rose and green, and ringing, softly, a thousand small bells.
> mercy | Breathe. | glass_a4s10
> truth | Wait. | glass_a4s10
> quiet | Listen. | glass_a4s10
> inquiry | Look at the sky. | glass_a4s10

=== glass_a4s10 | The Orchard at Dusk
Master Bayar comes out to sit beside you on the wall. He can’t hear a word you say. He doesn’t need to. He has a pipe in his mouth and a bottle of something clear, and he passes the bottle without a word. You drink. It burns. It tastes of juniper and smoke.
“Good boy,” says the old man, at last, in his creaking shout.
“Which?”
“Both.” He jerks his thumb at the workshop. “I’ve had a hundred apprentices. Fifty boys who ran away. They come to me with a hole in them. I give them a pipe.” He draws on his own. “Sometimes it fills.”
He looks at the glass trees.
“They’re a fine forest,” he says. “It was lightning that made them. Do you know? A single stroke. It took a night.” He nods slowly. “It’s the same with a man. You’d think it takes a lifetime. But it’s only a night.”
He blows a smoke ring.
“Mind you,” he says, “it takes a long time to cool.”
> mercy | Laugh. | glass_close | +glass_blew
> truth | Say thank you. | glass_close | +glass_blew
> quiet | Stay. | glass_close | +glass_blew
> inquiry | Ask what he means. | glass_close | +glass_blew

// ---------------------------------------------------------------- hidden: the tea-stall song
=== glass_h1 | A Tea-Stall Song
Gu hums it. He hums it slowly, at first, shyly, as if the tune were a secret he had been keeping from himself. It is a simple thing: a drone, a rattle, a lilting rise. It is the sound of a kettle, and cups, and a woman’s voice calling an order. It is the sound of a tea-stall in a foothill village in the early morning, when the mist is still on the road.
He hums it to the furnace, to the glass trees, to the empty air.
At the third furnace, a man lifts his head.
He is lean and brown and stooped, in a leather apron, with a white scar on one cheek. He is shaping a flask. His hands have stopped. His eyes are fixed on the middle distance. He is listening, with every muscle rigid, to a tune he has not heard in fifteen years.
He sets down the pipe.
“Where did you learn that?” he says.
Gu’s humming stops. “It’s Mother’s.”
“I know whose it is.” The man’s voice is very low. “I used to sing it to you.”
> inquiry | Stay still. | glass_h2
> truth | Look at Gu. | glass_h2
> mercy | Step back. | glass_h2
> quiet | Hold your breath. | glass_h2

=== glass_h2 | Hanming Sings
He sings it. He does it standing at the furnace, in his leather apron, with his arms by his sides and his eyes shut. He has a thin, true, wavering baritone, uncertain at the top. He sings the tune that Gu hummed, and then the words, a few rough rhymes about a kettle and a cup and a girl in a blue dress. He gets two lines in and has to stop.
Gu takes it up. He has not got the words. He hums the second verse. Hanming comes in on the third. They go on together, hoarse, out of time, the elder and the younger, in the roar of the workshop.
The glass trees ring.
They ring in sympathy: one, then another, then the whole avenue. It is a bright shimmering chime, rising and falling with the tune. The sound fills the Orchard to the sky. Master Bayar, at the gate, has lifted his head.
“Eh?” he says, to nobody. “What’s that?”
He cups his deaf ear. A look of wonder crosses his face. He can hear it.
> inquiry | Sing. | glass_h3
> truth | Weep. | glass_h3
> mercy | Hold Gu. | glass_h3
> quiet | Listen. | glass_h3

=== glass_h3 | Mother’s Stall
It goes on for a quarter of an hour. They sing it all: the six verses, and the chorus, and the tail that goes up at the end. They sing it twice. Hanming remembers the words as he goes. A line comes back, and then a name, and then a smell of woodsmoke. By the end he is weeping and laughing, and clinging to his brother’s sleeve.
“She’d put sugar in it,” he says. “For me. Without telling Father.” He wipes his eyes. “She’d tip a spoonful in when she thought nobody saw.”
“She still does,” says Gu. “She puts a spoon in the bowl you never drink.”
Hanming laughs. He puts his face in his hands and shakes.
The trees ring on, faintly, in the dusk.
“I’ll go home,” he says, through his fingers. “I’ll go home. Not yet. But I’ll go.” He lifts his head. His face is wet, and his eyes are clear, and he looks twelve years old. “Tell her I’m coming.”
> inquiry | Smile. | glass_close | +glass_sang
> truth | Say you will. | glass_close | +glass_sang
> mercy | Hold them both. | glass_close | +glass_sang
> quiet | Step away. | glass_close | +glass_sang

// ---------------------------------------------------------------- close
=== glass_close | What Gu Found
You stand on the lip of the hollow, in the late afternoon, and look back at the Orchard. The sunlight pours through the glass trees and throws long shifting bars of colour across the sand. The furnaces glow. The tiny figures of the Wrights move among them, bent over their pipes, carrying their bottles to the racks.
+[how] glass_met | You asked Master Bayar for a young man, and he pointed at a furnace.
+[how] glass_shattered | A note cracked a glass avenue, and a hundred years of growth lay in drifts on the ground.
+[how] glass_bottle_kept | A requisition that was never real emptied a cabinet of sixty stolen childhoods.
+[how] glass_blew | You blew a very ugly bottle, and an old man said it had character.
+[how] glass_sang | Two brothers sang their mother’s tea-stall song, and the trees rang with them.
Gu comes and stands beside you. He is quiet. His hands are in his sleeves. Behind him, at the cart, Hanming is checking the harness with a bad leg and an expression of fierce concentration.
“I didn’t think I’d find him,” says Gu. “I thought I was looking for a ghost.”
“You found him.”
“I found him.” He swallows. “I don’t know what to do with him.”
“Feed him,” says the Elder, from the cart. She has been watching with her hands folded. “It is generally the first thing.”
Gu starts to laugh.
> truth | Smile. | glass_close2 | +b4q_glass
> mercy | Put an arm round Gu. | glass_close2 | +b4q_glass
> quiet | Look at the sky. | glass_close2 | +b4q_glass
> inquiry | Ask Hanming if he is ready. | glass_close2 | +b4q_glass

=== glass_close2 | Eight in a Cart
You are eight on the cart now, counting the ponies. You travel in the cool of the morning, with the sun on your backs, and the road runs on across the grass in front. Gu sits beside his brother, shoulder to shoulder, saying nothing, with an expression of deep and shining content. Hanming looks straight ahead, with his hands loose on his knees.
They have the same profile. You had not noticed.
Temur rides alongside, with the reins looped on his pommel. Sarnai, who has appeared from nowhere as she always does, rides on the other side, chattering. She has attached herself to Hanming. She has decided he is a hero.
“Is it true you rode a red horse?” she says.
“Once.”
“Was it fast?”
“Very.”
“Faster than Dandelion?” She slaps her piebald’s neck.
“Nothing,” says Hanming gravely, “is faster than Dandelion.”
Sarnai glows.
“I knew it,” she says. “I always said.”
> truth | Ride on. | hub_b4_a | bond:gu+2
> mercy | Smile. | hub_b4_a | bond:gu+2
> quiet | Listen. | hub_b4_a | bond:gu+2
> inquiry | Ask Temur how far to the Winter Camp. | hub_b4_a | bond:gu+2

`,
  scenarios: String.raw`
$ SU_GLASS_BROTHER | trust+4 respect+2 fear+2 | elder | The Elder sees Gu meet his brother, and recognises a look she has not worn since the Sealing.
hostile: He was four when the levy took his brother. He is nineteen now. He looked at the man across the furnace, and I saw him decide not to be angry. It was the bravest thing in the Orchard.
wary: I held Gu’s sleeve. I did not know what else to do. It occurred to me that I have been standing next to people at the worst moments of their lives for fifteen years, and I have never once known where to put my hands.
neutral: Two brothers, a furnace, and fifteen years. Neither said a thing for a quarter of an hour. I have read treaties with less eloquence.
warm: The older one asked about their mother. The younger one said, “She keeps a stall.” And the older one wept, and I understood that everything else had been preamble.
devoted: When this is over I should like to take the tea-stall. I know nothing of tea. I should like to learn. It seems to me to be the most useful trade in the world.
`,
  remarks: String.raw`
% glass_hanming_later | since:b4q_glass>=4 | gu | Hanming walks with a limp. He says it is from the levy. He says it is from a horse. He says it is from a fall on ice. I think he is tired of the question.
% glass_bottle_later | since:glass_bottle_kept>=6 | hao | I have a bottle. It is blue. It has a small piece of someone’s afternoon in it. I do not dare uncork it.
`,
};
