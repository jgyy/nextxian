import type { Arc } from "../types";

/**
 * Book Four, arc five: Three Days of Dust. A black storm pins the party in one felt tent with a Listener family, and then with
 * a Garrison patrol that cannot be told who is in it. Four approaches: trade stories through the first night (a1, truth),
 * go out into the dust for the herd (a2, force), pass the party off as pilgrims to the patrol (a3, deceit), and sit with a
 * feverish child (a4, mercy). A hidden route hears Duan Wuyi's confession.
 * Cast: Narantuya (the mother), her children Zaya and Batu, Corporal Erdene of the Garrison, Duan Wuyi, Hao Lan, Gu, Ren Qiao.
 */
export const storm: Arc = {
  id: "storm",
  name: "Three Days of Dust",
  scenes: String.raw`
=== storm_entry | The Black Wall
It stands up out of the west at noon, a mile high, the colour of a bruise. It does not look like weather. It looks like a wall. It comes across the plain without hurry, swallowing the horizon a hand’s breadth at a time, and the light goes first brown and then copper and then a dull sullen yellow, like the light in a cellar. The grass lies flat. The birds are gone. The ponies scream and plunge at their pickets.
Temur is on his feet, looking at it, with the wind snatching his hat. His broken-nosed face is grim.
“Dust,” he says. “The big one. It has not come in six years.” He turns. “We can’t outrun it. There is a ger a mile on, by the stream. A family I know. We will go there.”
“How long will it last?”
“Three days.” He grabs a pony’s bridle. “Perhaps four. It will take the skin off you if you are caught in it. Quickly. Quickly!”
You run. The wind is a hand at your back, shoving. The air tastes of iron. Far behind, the black wall rises, and rises, and begins to roar.
> truth | Run for the ger. | storm_a1s1
> force | Look back at the horses, who are not going to make it, and turn back for them. | storm_a2s1 | needs:4
> deceit | Notice, ahead on the track, a file of grey-coated riders heading for the same ger. | storm_a3s1
> mercy | Hear a child coughing in the tent as you duck inside. | storm_a4s1
> inquiry | Ask Duan Wuyi what he is thinking about, since he has been so silent. | storm_h1 |  | bond:duan>=3 | Duan does not yet trust you with that.

// ---------------------------------------------------------------- a1: stories
=== storm_a1s1 | The Ger
It is a round felt tent, grey as a mushroom, pegged in the lee of a bank by a dry stream. A woman stands at the flap, holding it open against the wind with one hip and her whole weight, shouting in a language you do not know. She is broad and strong and perhaps forty, in a long blue coat, with a scarf bound round her head and two black plaits to her waist. Her face is wind-burned and calm.
“Inside!” shouts Temur. “Inside, inside!”
You tumble through the flap in a heap of dust and cloaks. The woman drops it behind you. The wind drops to a muffled roar. In the sudden hush you can hear your own breath, wheezing, and a dozen others. It is dim and warm. A small iron stove burns in the centre, with a kettle on it. Rugs cover the floor. Shelves of painted wood line the walls, crammed with cups and bags and bundles.
There are two children, a boy and a girl, huddled against the far wall with their eyes enormous.
“I am Narantuya,” says the woman, in your language, accented but sure. “You are welcome. There is tea.”
> truth | Thank her. | storm_a1s2
> mercy | Greet the children. | storm_a1s2
> quiet | Take off your cloak. | storm_a1s2
> inquiry | Ask where the husband is. | storm_a1s2

=== storm_a1s2 | Narantuya
“Away,” says Narantuya. She pours tea into a row of cups, with the unhurried competence of a woman who has done it ten thousand times. “With the flocks. He went north in the spring. He should have been home a month ago.” Her hands are quite steady. “He is a slow man. He likes to stop and look at things.”
She hands you a cup. “Hold it in both hands.”
You do. It is salty, milky, hot, and there is butter floating in it. It is the most comforting thing you have ever tasted. The tent shakes. A sound begins on the roof, a fine dry hissing, like handfuls of sand thrown against felt. Dust sifts in at the smoke-hole and settles on everything, a fine tan powder, and the stove-pipe whines.
“It is here,” says Narantuya.
Outside, the roar rises to a shriek.
The girl, who is six, puts her hands over her ears. The boy, who is nine, says in a high voice, “It sounds like a wolf.”
“It sounds,” says Narantuya, “like a storm. Drink your tea.”
> truth | Drink. | storm_a1s3 | npc:SU_STORM_GER
> mercy | Sit by the girl. | storm_a1s3
> quiet | Listen. | storm_a1s3
> inquiry | Ask how long they have. | storm_a1s3

=== storm_a1s3 | The First Night
It is a long night. You sit round the stove in a ring, twelve of you, packed shoulder to shoulder on the rugs, with the storm hammering at the felt. The lamp is dim. The kettle sings. Narantuya cooks millet-porridge in an iron pot and ladles it into wooden bowls. The Elder sits beside the girl, whose name is Zaya, and who has recovered from her fright enough to examine the silver comb.
“Is it real?” says Zaya.
“Silver.”
“Can I touch?”
“If you wish.”
Zaya touches it with one finger. “It’s cold.”
“It always is.”
“Why?”
“I do not know,” says the Elder, honestly. She is faintly pink. “Nobody has ever asked me.”
Outside, the wind screams. A pole creaks. Dust sifts down through the smoke-hole, and settles on your hair. Gu is asleep sitting up, with his head on his brother’s shoulder. Hao Lan is writing in her notebook by the stove’s light. Her pencil makes a tiny scratching sound.
“I think,” says Narantuya, “that we should tell stories.”
> truth | Agree. | storm_a1s4
> mercy | Ask for hers. | storm_a1s4
> quiet | Listen. | storm_a1s4
> inquiry | Ask what the custom is. | storm_a1s4

=== storm_a1s4 | The Custom
“A story each,” says Narantuya. “In turn. It must be true. It must be one the teller has never told.” She sits back on her heels. “It is the Storm Rule. In a long wind, a household must tell each other something new. Otherwise you start to hear what the wind is saying.”
“What is it saying?”
“What you have not told.” She glances at the smoke-hole. “It is very patient. It will wait three days. By the end you will say anything to make it stop.”
The boy, Batu, says in a small voice, “I know what mine is.”
“Do you.”
“I stole a sweet.” He studies his hands. “Last winter. From the cheese-seller’s cart. I didn’t say.”
There is a silence. The wind howls. Narantuya looks at her son for a long moment. Then she reaches out and cuffs him, gently, behind the ear.
“That’s a good one,” she says. “Who is next?”
She looks at you.
> truth | Tell one. | storm_a1s5
> mercy | Pass. | storm_a1s5
> quiet | Look at Hao Lan. | storm_a1s5
> inquiry | Ask who goes first. | storm_a1s5

=== storm_a1s5 | Mine
You tell them about the lamp. It is the first thing that comes into your head. You tell them you were five. You tell them that there was a lamp in a room, and a woman with a basket, and the smell of rice-cakes. You tell them you reached for the flame. You tell them you do not remember being picked up.
You hear your voice in the tent, flat and quiet. You have never said it aloud. You have never told anyone. You tell it all: the white scar, the foster-mother, the river village. The cold seed in your breast. The cards.
When you have finished, nobody speaks.
Zaya says, in a tiny voice, “Did it hurt?”
“The burn?”
“The lamp.”
“No,” you say. “It was very warm. I wanted to hold it.”
“Why?”
“I think I was cold,” you say.
Narantuya puts another dried dung cake on the stove. The kettle sings. The wind howls at the felt.
> truth | Wait. | storm_a1s6
> mercy | Smile. | storm_a1s6
> quiet | Look at your palm. | storm_a1s6
> inquiry | Ask who is next. | storm_a1s6

=== storm_a1s6 | The Elder’s Story
She doesn’t want to. You can see it. She sits with her hands in her lap and her lips pressed together, and the lamplight makes a mask of her face. But the wind is loud, and she has a child asleep against her knee, and when Narantuya looks at her she takes a breath.
“I wrote a list,” she says. “Fifteen years ago. It had fourteen names on it. I was twenty-eight.” Her voice is dry as paper. “I signed each one. I did it in a clear hand. I thought the clearer the hand, the cleaner the deed.”
She pauses.
“There was a girl. Fifteen. She was number fourteen. She had a cough. She looked at me as I signed. She said, ‘Please, Registrar. May I have a handkerchief?’ I gave her mine.” She shuts her eyes. “It was a good one. Lawn, embroidered. I had it from my mother.”
“And?”
“And I signed. And she was taken away. And I looked at my hand, afterwards, and found I was still holding the pen.” She opens her eyes. “I have never told anyone that she asked for a handkerchief.”
> truth | Take her hand. | storm_a1s7
> mercy | Say nothing. | storm_a1s7
> quiet | Look away. | storm_a1s7
> inquiry | Ask what happened to the handkerchief. | storm_a1s7

=== storm_a1s7 | The Handkerchief
“She kept it,” says the Elder. “I know, because Mengjiao told me, on the barge. She said that the girl had it in her fist when she went down.” Her voice cracks. “It is in the mist. In the dark. A scrap of lawn with a lotus on it. It is the only thing she took.”
Nobody moves. The wind pauses, as if listening.
“I have thought of it every night for fifteen years,” says the Elder. “I think of the girl, and the handkerchief, and I think: she had one thing. And I gave it to her.” She smiles bitterly. “It is the one kind thing I did that night. And it is the one I cannot forgive.”
Narantuya leans across, and takes her hand, and holds it.
“It was a good thing,” she says. “It does not need forgiving.”
“It was a handkerchief for a girl I was sending to die.”
“It was a handkerchief,” says Narantuya, “for a girl who was cold.”
The Elder looks at her. Her whole face works.
> truth | Hold the Elder’s other hand. | storm_a1s8
> mercy | Weep. | storm_a1s8
> quiet | Look at the stove. | storm_a1s8
> inquiry | Ask the next teller. | storm_a1s8

=== storm_a1s8 | Stories Told
They go on all night. One by one the others tell. Ren Qiao tells how he once carried a goat up a mountain on his back, for a wager, and found when he reached the top that it had died. Gu tells of the time he was sick in the Elder’s sandal. Hao Lan tells of the day she filed a love-letter under Tax, and the marriage that followed. Shu Ning, who has not spoken, says simply that she hates being touched, and lies down with her back to the wall.
Duan Wuyi is the last. He sits upright, with his knees together, and the stove-light on his thin face. He looks at his hands for a long time.
“I have none,” he says. “That is not a story I have not told. That is a story I do not have.”
“Everyone has one,” says Narantuya.
“I have a hundred. They are all in a ledger.” He smiles. “I will tell one tomorrow.”
Narantuya nods. She does not push. She sets down a bowl in front of him, and sits back.
Outside, the wind is still screaming. But it sounds a little farther away.
> truth | Sleep. | storm_a1s9
> mercy | Fetch a blanket. | storm_a1s9
> quiet | Listen to the wind. | storm_a1s9
> inquiry | Ask Narantuya whether it will stop. | storm_a1s9

=== storm_a1s9 | The Second Day
It does not stop. The second day is brown. The dust has filled the tent with a fine tan haze, and you eat with cloths over your mouths. The children sleep most of the time, curled in a heap of felts. The fire burns low. Narantuya rations the dung. There is no day or night, only a continuous roar, and the pale glow of the lamp.
You pass the time. Hao Lan teaches Zaya her letters, with a stick in the dust on the floor. Ren Qiao whittles a toy horse. Shu Ning, lying on her side, takes apart the stove’s damper, and puts it back together, and takes it apart. Gu plays a game of knucklebones with Batu, and is beaten.
Somewhere in the long afternoon you realise that you are happy.
It is a small warm quiet happiness, like a cat on a lap. It has nothing to do with the storm. It has nothing to do with anything. It is only that you are in a tent, with people you like, and nobody wants anything.
You lie on your back and look at the felt roof.
> truth | Close your eyes. | storm_a1s10
> mercy | Smile. | storm_a1s10
> quiet | Listen. | storm_a1s10
> inquiry | Ask Hao Lan what she is writing. | storm_a1s10

=== storm_a1s10 | Calm
On the third morning you wake, and it is silent.
You lie quite still. For a moment you cannot think what has changed. Then you realise: the roar has stopped. The felt does not shake. The dust has ceased to sift. There is a thin bright line of gold under the door-flap, and the sound of a lark.
Narantuya is already up. She is standing at the flap with her hand on the edge of it. Her broad back is very straight. She pulls the flap aside.
The light is blinding.
The world is gold. The plain has been scoured clean. The grass lies in long combed rows. The sky is the pale, hard, pure blue of the hour after rain. In the distance, going away eastward, is the wall of the storm, a faint brown smudge on the horizon, already tiny.
“Well,” says Narantuya. “That was a short one.”
She laughs, and wipes her eyes.
> truth | Step out. | storm_close | +storm_told
> mercy | Hold the flap. | storm_close | +storm_told
> quiet | Breathe. | storm_close | +storm_told
> inquiry | Ask about the herd. | storm_close | +storm_told

// ---------------------------------------------------------------- a2: the herd
=== storm_a2s1 | The Horses
You turn back. You do not stop to think. The storm is a mile behind, swallowing the plain like a tide, and in its path, in a hollow beyond the last rise, you can see the ponies. They have broken their pickets. They are milling and screaming in the dust, a dozen of them, with their manes standing out like flags. Sarnai’s piebald is among them. So is Dandelion, Temur’s bay.
“Come back!” shouts Temur. “It’s too late!”
You run on. The wind is a solid force. It screams in your ears and snatches your breath. The first dust, a fine stinging hail, begins to rattle on your cheek. Behind you Ren Qiao is shouting. Gu is at your heels. Somewhere a child is sobbing.
The ponies see you. They stop. They stare, with white-rimmed eyes, trembling, as the sky goes black over their heads.
“Come on,” you say. You hold out your hands. “Come with me. Come on.”
> force | Get to the herd. | storm_a2s2 | needs:4
> truth | Call the piebald. | storm_a2s2
> quiet | Hold still. | storm_a2s2
> mercy | Soothe them. | storm_a2s2

=== storm_a2s2 | Dandelion
He is the first. He is a tall bay stallion with a white blaze and one wall eye, and he has always despised you. He stares at you, ears pinned, nostrils flared. Then he screams, and rears, and comes down hard, and plunges forward into your arms.
You catch his halter. He is enormous. His muscles shake. His whole body is slick with sweat and foam. You press your forehead to his neck and murmur, nonsense, anything, and he shudders against you. He smells of sweat and grass and dust.
“That’s it,” you say. “Good boy. Good boy.”
Behind you Ren Qiao has the piebald. Gu has a chestnut mare. The others crowd round in a milling wall, snorting, jostling, their eyes rolling. The first real gust hits, and the whole herd screams as one.
“Now!” shouts Ren Qiao. “Now! Go!”
You haul on the halter. Dandelion lurches after you. The ponies follow in a wedge, thundering, a flood of hooves, down the long slope toward the distant ger. The storm is a roar at your back. The world goes brown.
> force | Run. | storm_a2s3
> truth | Hold on. | storm_a2s3
> quiet | Stay with the horse. | storm_a2s3
> mercy | Look for Gu. | storm_a2s3

=== storm_a2s3 | Blind
It catches you at a hundred yards. It is not like rain. It is not like snow. It is a wall of solid grit, flung by a wind that could knock down a man, and it fills your eyes and your mouth and your ears in an instant. You cannot see. You cannot hear. You cannot breathe. You pull your cloak over your face and lean into the wind and hold on to the halter.
Dandelion is a vast hot blur beside you. The ponies are shapes in the murk, wedged shoulder to shoulder, stumbling. The dust is tan and gold and black, boiling, and the sky has vanished. You are walking in a brown fog. Your hands are numb. Your lips are cracked.
You lose count of your steps.
A hand takes your elbow. It is Ren Qiao. He is a dark shape, bent double, with his scarf over his nose. He is shouting something. You cannot make it out. He points, again and again, to the left.
You follow his finger. And through the murk, very faint, you see it. A light.
> force | Go to it. | storm_a2s4
> truth | Shout. | storm_a2s4
> quiet | Keep walking. | storm_a2s4
> mercy | Check the horses. | storm_a2s4

=== storm_a2s4 | The Lamp in the Dust
Narantuya has hung a lantern from a pole outside the ger, and she stands beneath it, in the roaring dark, with her scarf wrapped round her face. She has a long coil of rope in her hands. She has been standing there for an hour. She does not move as you come out of the murk, leading a bay stallion and a dozen ponies and two dust-caked men.
She lifts her arm. She points at the flap of the ger.
You haul the horses round. There is no room in the tent for a pony, let alone twelve.
“The lee!” shouts Narantuya. “Behind the bank!”
She is pointing at a shallow hollow on the sheltered side. It is six feet deep and perhaps thirty long. It is a shelter, of a sort. It has no roof.
“Put them there!” she screams. “Tie them nose to tail! Put the blankets over!”
You do. You rope them in a line, nose to tail, and throw every cloak and rug you can find over their backs. The ponies press together, shivering, steaming. Dandelion stands in the middle, with his ears flat.
> force | Go in. | storm_a2s5
> truth | Stay with them. | storm_a2s5
> quiet | Shelter by the horse. | storm_a2s5
> mercy | Count them. | storm_a2s5

=== storm_a2s5 | A Long Night in the Lee
You do not go in. You stay with the horses. You crouch between the bank and Dandelion’s flank, in the hollow, with a blanket over your head and your arms round your knees, and listen to the storm. It is a different sound from outside the ger. It is closer. It is a solid, bellowing, tearing roar, like an enormous animal being flayed. The dust lashes the bank. The ponies’ ribs heave.
Ren Qiao crouches beside you. He doesn’t speak. He has his arm round the piebald’s neck. After a while he starts to sing, under his breath, a soldier’s song, tuneless and low. You join in. You do not know the words. You hum.
Dandelion lowers his head. He rests his nose on your shoulder.
It is the first time he has touched you of his own will.
You stay like that for hours. The cold deepens. The wind rises. Your fingers go numb. At some point you realise that your cheeks are wet, and that you do not know whether it is dust or tears.
> force | Stay awake. | storm_a2s6 | needs:4
> truth | Keep singing. | storm_a2s6
> quiet | Sleep. | storm_a2s6
> mercy | Hold Dandelion. | storm_a2s6

=== storm_a2s6 | Morning
You wake, and it is light. It is a weak brown light, shot with gold. The roar has gone. A thin cold wind is blowing. You are lying in the hollow, wrapped in a blanket, with a pony’s head on your arm. The bank is half buried in drifted dust. The ponies are all alive. They are all standing, steaming, with their heads hanging, caked in tan.
You count them. Twelve. Fourteen.
Fourteen.
Narantuya is standing on the bank above you, in her blue coat, with a bowl of milk-tea in each hand. She looks down. Her face is grey with weariness. She has not slept. Her eyes are red.
“You fool,” she says.
“Yes.”
“You great stupid fool.” Her voice shakes. “Those were Temur’s.”
“Yes.”
“Not mine. Not my husband’s. Not my children’s.” She comes down the bank, slowly. “You risked your neck for another man’s horses.”
“Yes,” you say.
She sits down beside you in the dust. She gives you a bowl.
> force | Drink. | storm_a2s7
> truth | Thank her. | storm_a2s7
> quiet | Hold the bowl. | storm_a2s7
> mercy | Ask how the others are. | storm_a2s7

=== storm_a2s7 | What Narantuya Said
“I am not going to say thank you,” says Narantuya. “It is not our way.” She drinks. “I am going to say that my husband went north in the spring with three hundred sheep and twelve ponies, and in a storm like that one he would have died for a stranger’s horse.”
She sets down her bowl.
“He is a fool too,” she says. “It is why I married him.” A wavering smile. “I thought: here is a man who does not count.”
You are silent.
“The storm is a monster,” she says. “It takes everything it can. It took my father’s sheep. It took my brother’s daughter. It took the roof of the ger, three times.” Her broad face is grey. “And every time it takes something, there is someone who goes out into it.”
She puts her hand over yours, in the dust.
“That is the whole of our law,” she says. “Somebody goes.”
> force | Nod. | storm_a2s8
> truth | Say you did not think. | storm_a2s8
> quiet | Look at the horse. | storm_a2s8
> mercy | Squeeze her hand. | storm_a2s8

=== storm_a2s8 | Frostbite of the Dust
It takes two days to recover. You have a cough. Your lips are cracked, your hands scratched, your eyes red and swollen. Your throat feels as though it has been scrubbed with gravel. Ren Qiao is no better. Gu has a gash on his forehead from a flying stone. The Elder fusses over them all with Narantuya’s remedies: a poultice of dung, a draught of fermented milk.
The storm blows itself out on the third day. The sky clears. The sun comes up like a gold coin, and the whole plain glitters. Narantuya stands at the door of the ger with her arms folded, watching.
“Your husband,” you say.
“Yes?”
“Is he coming?”
She doesn’t answer at once. Then, quite quietly, she says, “He is.”
She points. Far off across the plain, small and sharp against the horizon, a long line of dark specks is moving. A herd. Behind it a single rider, on a heavy piebald horse, with a pole across his saddle. He is waving.
Zaya and Batu burst from the tent like corks from a bottle, shrieking.
> force | Watch. | storm_close | +storm_herd needs:4
> truth | Smile. | storm_close | +storm_herd
> quiet | Step back. | storm_close | +storm_herd
> mercy | Weep. | storm_close | +storm_herd

// ---------------------------------------------------------------- a3: the patrol
=== storm_a3s1 | Grey Coats
Nine of them. They ride up out of the roaring brown, in a tight file, with their heads down and their cloaks pulled over their faces. They have the closed eye on their breasts. They carry carbines. Their leader is a thin dark man of thirty with a corporal’s stripe and a pinched, harassed face. He sees the ger. He sees the party at the door. His hand goes to his pistol.
“Hold!” he calls, over the wind. “Identify yourselves!”
Narantuya has put herself in front of the flap. She is a rock. “This is my tent,” she says. “You are welcome in it. There is a storm.”
The corporal hesitates. Behind him, the nine horses huddle, steaming, ears flat. The first real gusts are on them, and the grit is already stinging. He has no choice. He knows it. He looks at the Listener woman, at the party, at the bright-eyed Steppe riders.
“Corporal Erdene,” he says. “Third Pike, Fort Ruo. We seek shelter.”
He swallows.
“And a clan of rebels,” he adds. “If you’ve any.”
> deceit | Step forward. | storm_a3s2
> truth | Say nothing. | storm_a3s2
> quiet | Look at Temur. | storm_a3s2
> mercy | Say there is room. | storm_a3s2

=== storm_a3s2 | Pilgrims
It is Hao Lan who does it. She has been standing at the back, quiet and pale, with her satchel clutched against her ribs. Now she steps to the front. She has taken off her spectacles. She has put on a servile, rather watery smile. She speaks in a voice you have never heard her use, thin and high and anxious, with the lilt of the river provinces.
“Oh, sir,” she says. “Corporal, sir. We’re just pilgrims. We’re bound for the Shrine of the Nine Winds, at the Eastern Marches. It’s a devotion. My mother is very ill.”
The corporal squints. “Pilgrims?”
“Yes, sir.”
“All of you?”
“All of us.”
“And these?” He jerks his chin at the Listeners.
“Guides,” says Hao Lan. “For hire. Very kind. Very cheap.” She wrings her hands. “We would have been lost without them.”
The corporal looks at Temur. Temur is wearing a plain brown coat. His white hat is gone. He has turned his back, and is examining the smoke-hole.
“Hm,” says Erdene.
> deceit | Look humble. | storm_a3s3
> truth | Breathe. | storm_a3s3
> quiet | Stay behind Ren. | storm_a3s3
> mercy | Nod. | storm_a3s3

=== storm_a3s3 | The Rule
The trouble is the wind. The Listeners cannot lie in it. They cannot lie in the presence of the wind, even in a tent; it carries what they say, and carries it true. Narantuya and her children can say only what is so. Temur will have to keep his mouth shut. The Steppe riders are no better.
You see Temur realise it. He turns his head very slowly. His eyes meet Narantuya’s. For a long moment they communicate in silence.
“Come in,” says Narantuya, to the corporal.
She holds up the flap.
“I have tea,” she says. “And millet porridge. And a stove.” She does not blink. “I have no opinion about pilgrims.”
It is a perfectly true statement. You hear the wind take it, and nod.
The corporal stoops and ducks inside. His men follow, in a damp, dusty, clanking file, nine men in grey coats with their carbines slung. They fill the tent. They sit on the rugs, leaning against the shelves, trying not to touch the children. The kettle sings. Dust sifts down.
The flap drops. The wind is shut out.
> deceit | Pour tea. | storm_a3s4
> truth | Sit down. | storm_a3s4
> quiet | Watch the corporal. | storm_a3s4
> mercy | Look at the children. | storm_a3s4

=== storm_a3s4 | A Crowded Tent
There are twenty-one people in the ger, and the smoke-hole is already full. It is hot. It is dark. It smells of sweat and dust and wet felt and men. The soldiers sit in the east half, round the door, with their weapons across their knees. The Listeners sit in the west. The party is in the middle, a pale, nervous, motley collection of “pilgrims” trying to look as though they have been devout all their lives.
The corporal sits at the stove, with his hands held to the heat. He is thin and tired. His coat is torn at the elbow. He drinks his tea in small sips, watching the room over the rim.
“Shrine of the Nine Winds,” he says. “Where is it?”
“East,” says Hao Lan.
“How far?”
“A few weeks.”
“What’s the devotion?”
Hao Lan opens her mouth.
Nothing comes out.
“It’s a very, very old one,” says the Elder, calmly.
> deceit | Hold your breath. | storm_a3s5
> truth | Look at Hao Lan. | storm_a3s5
> quiet | Pour more tea. | storm_a3s5
> mercy | Smile at the corporal. | storm_a3s5

=== storm_a3s5 | The Elder Lies
She does it magnificently. You would never have guessed it. She sits upright on her cushion, with her hands folded and her silver comb in her hair, and says, in her driest, most authoritative voice: “It is the devotion of the Silent Hour. One travels for forty days without speaking more than is necessary. We have been three weeks at it, and I confess we are all heartily sick.”
The corporal blinks.
“It involves,” continues the Elder, “the carrying of a small stone. Each pilgrim picks up a stone at the beginning. At the end she lays it on the shrine. It is a symbol of the weight of speech.” She nods at Gu, who is clutching his pebble. “The young man is particularly devout.”
Gu goes scarlet.
“I see,” says Corporal Erdene.
“It is most uncomfortable.”
“I’m sure.”
“We are nearly there,” says the Elder. “Heaven be thanked.”
The corporal’s harassed face has softened. He looks at her with sudden sympathy. “My aunt did that,” he says. “Went to a shrine. Came back a different woman.” He drinks. “She stopped eating pork.”
> deceit | Nod gravely. | storm_a3s6
> truth | Look at the stove. | storm_a3s6
> quiet | Hold the Elder’s sleeve. | storm_a3s6
> mercy | Say a prayer. | storm_a3s6

=== storm_a3s6 | The Wind Listens
The wind, which has been screaming at the roof, drops. It does not stop. It sinks to a long low moan, like a creature listening. The felt walls bulge and sag. A curl of smoke drifts from the stove and hangs.
You feel it. You feel the Listeners feel it. Narantuya has gone very still. Her children have stopped fidgeting. Temur, at the smoke-hole, has turned his head. In the sudden hush, the whole tent is holding its breath.
It is the Elder. She has lied. She has told a lie, a long, smooth, deliberate lie, in the presence of the wind, and the wind has heard. It is gathering itself. It is going to say so.
You open your mouth. You do not know what you are going to say. You are going to interrupt. You are going to create a diversion.
But before you can speak, Zaya, the six-year-old, says in a clear, carrying treble: “She’s telling a story.”
Everybody turns.
> deceit | Freeze. | storm_a3s7
> truth | Look at Zaya. | storm_a3s7
> quiet | Hold your breath. | storm_a3s7
> mercy | Say nothing. | storm_a3s7

=== storm_a3s7 | A Story
“It’s the Storm Rule,” says Zaya. She speaks with the immense, calm authority of a small girl who knows the law. “You have to tell a story. It has to be true. But it doesn’t have to be about you.” She points at the Elder. “She’s telling one about a shrine. It’s a made-up shrine. It’s still true.”
Corporal Erdene stares. “What?”
“It’s true that it’s a story,” says Zaya. “So it isn’t a lie.”
There is a short, stunned silence.
Narantuya’s mouth is trembling. She puts a hand over it. Temur has turned his back, and his shoulders are shaking. The wind gives a long, wavering, indulgent sigh, and settles back into its moan.
The Elder, white to the lips, says in a small voice, “Thank you, child.”
“It’s a very good one,” says Zaya, graciously. “I liked the stone.”
The corporal looks from one face to another. He looks at Zaya. He looks at the Elder. He opens his mouth. And then he sits back, slowly, and starts to laugh.
> deceit | Laugh too. | storm_a3s8
> truth | Breathe out. | storm_a3s8
> quiet | Smile. | storm_a3s8
> mercy | Hug Zaya. | storm_a3s8

=== storm_a3s8 | The Corporal Knows
“I’m not stupid,” says Erdene, when he has finished. He wipes his eyes. He looks round the tent with his thin tired face. “I knew from the first. The woman with the satchel. The man with the sword. Nobody holds a sword like that on a pilgrimage.” He glances at Ren Qiao, who stiffens. “And the boy, with his brother’s nose.”
Gu goes white.
“I have a list,” says the corporal. He pats his breast. “Of deserters. Of known rebels. Of an old woman in a silver comb and a girl with a scar.” He doesn’t look at your hand. “I have had it for six weeks.”
Nobody speaks. The wind hums. Twenty-one people are frozen in the dim light.
“I am a corporal in the Third Pike,” says Erdene. “I joined at fifteen. I have served eleven years.” He lays his hands on his knees. “And I find I am very, very tired of looking for people.”
He takes the list out. It is a single sheet of grey paper. He folds it in four, and drops it into the stove.
It flares and is gone.
> deceit | Say nothing. | storm_a3s9
> truth | Thank him. | storm_a3s9
> quiet | Bow. | storm_a3s9
> mercy | Offer him tea. | storm_a3s9

=== storm_a3s9 | Nine Men and a Kettle
They spend the rest of the storm together. There is nothing else to do. Corporal Erdene’s eight men turn out to be ordinary: a baker’s son, a cobbler, two brothers from a hill village, a boy of seventeen with a stammer. They sit in a corner, smoking small clay pipes, and play dice on a saddle. They are respectful of the children. They give Batu a ride on a shoulder. They share their rations.
On the second night, someone asks for a song. The soldiers look at one another. A shy, round-faced private with a gap in his teeth says that he knows one, and clears his throat, and sings it. It is a sentimental ballad about a girl and a plum-tree. His voice is a sweet high tenor. The tent is silent.
When he finishes, Narantuya says gruffly, “Again.”
He sings it again.
The Elder is crying. She does it quietly, with her hands in her lap.
“I do not know why,” she says, to nobody. “It is not even a good song.”
> deceit | Hold her. | storm_a3s10
> truth | Pass the tea. | storm_a3s10
> quiet | Listen. | storm_a3s10
> mercy | Hum the tune. | storm_a3s10

=== storm_a3s10 | When It Stopped
The storm ends on the third morning. The patrol saddles in the pale blue light. The corporal shakes Temur’s hand, and Narantuya’s, and bows to the Elder. He doesn’t shake yours. He nods, gravely, and says, “I never saw you.”
“No.”
“I’ll tell the Colonel the storm covered our tracks.”
“He will believe it.”
“He believes everything,” says Erdene, with a bitter twist of the mouth. “That’s his trouble.” He mounts. He sits a moment, looking at the open plain, glittering and scoured. “It’s the first time in eleven years I’ve not wanted to go back.”
He lifts his hand. His eight men file out after him, in a wavering line, each touching a finger to his brow as he passes the ger.
Zaya waves. The boy with the stammer waves back.
They ride away east, small and grey in the vast golden grass, until the dust takes them.
> deceit | Watch. | storm_close | +storm_patrol_passed
> truth | Wave. | storm_close | +storm_patrol_passed
> quiet | Bow your head. | storm_close | +storm_patrol_passed
> mercy | Say a blessing. | storm_close | +storm_patrol_passed

// ---------------------------------------------------------------- a4: the fever
=== storm_a4s1 | A Cough
The cough comes from the back of the tent, a small dry hacking sound, like a rusty hinge. You are barely through the flap, with the roar of the storm at your back and the dust still in your eyes, when you hear it. You look up. In the dim light of the stove, a child is lying on a heap of rugs, curled into a ball, with a blanket pulled up to her chin.
She is six. She has a round pale face and two black plaits. Her cheeks are red. Her eyes are glassy. She is shivering, though the tent is hot.
Narantuya, at the stove, doesn’t turn. “Zaya,” she says. “My daughter. She has been ill since the new moon.” Her voice is level, but her hands, on the kettle, are white-knuckled. “It is a fever. It comes and goes. I have given her everything I have.”
“Has she seen a physician?”
“There are none on the grass.” She sets down the kettle. “There is the Matriarch’s herbalist, at the Winter Camp. It is three days.”
She looks at the roof, which is shaking.
“I had meant to go tomorrow,” she says.
> mercy | Go to the child. | storm_a4s2
> truth | Say she cannot travel. | storm_a4s2
> quiet | Kneel. | storm_a4s2
> inquiry | Ask how long the fever. | storm_a4s2

=== storm_a4s2 | Zaya
You kneel beside the rugs. The child turns her head. Her eyes find you, slowly, and focus. She has long wet lashes. Her lips are cracked. She regards you with grave, dazed interest.
“Are you the one who asks?” she says, in a croak.
“I think I am.”
“Mother says you’re very important.”
“Your mother is kind.”
“She said you can talk to stones.” A faint wheeze. “Can you talk to a fever?”
“I do not know.”
“Try,” says Zaya. “Please. It won’t listen to me.”
You smile, and put your hand on her forehead. She is burning. It is like touching a stove. Her skin is dry and papery. Her pulse flutters under your fingers like a trapped bird, fast and thin. She lifts her small hand and takes hold of your wrist.
“It’s very hot,” she whispers. “It’s like a lamp.”
You freeze.
“A lamp?”
“Inside me.” She shuts her eyes. “It wants to be held.”
> mercy | Hold her. | storm_a4s3
> truth | Stay still. | storm_a4s3
> quiet | Listen. | storm_a4s3
> inquiry | Ask what she means. | storm_a4s3

=== storm_a4s3 | The Lamp Inside
You do not know why you do it. You do not know what you are doing. You have no training. You have no medicine. You have a scar on your palm and a seed in your breast, and a little girl is holding your wrist and telling you that she is a lamp.
You close your eyes. You open the palm of your left hand, slowly, over her breastbone, without touching.
The scar throbs. It is the faintest warmth at first, then a steady glow. You feel the seed turning over in your chest. It has never done this. It does not open; it stretches, like a cat, and sends a thread of cold down your arm.
The cold meets the heat. They touch. They twine. They begin to circle each other, slowly, in the narrow space between your palm and the child’s chest, a spiral of fire and ice.
Zaya sighs. Her whole body loosens. Her hand drops from your wrist.
“Oh,” she says. “That’s nicer.”
> mercy | Hold on. | storm_a4s4
> truth | Breathe. | storm_a4s4
> quiet | Stay. | storm_a4s4
> inquiry | Ask Narantuya to be silent. | storm_a4s4

=== storm_a4s4 | Hours
You sit there for hours. You lose track. The tent is hot and dim and stuffy. The wind outside moans and bellows. The party sleeps in a heap round the stove. Narantuya sits at the other side of the child, in silence, with her rough hand on Zaya’s ankle. She doesn’t speak. She watches your face.
Sometimes the fever flares. The child tosses and mutters. Her skin goes crimson. Her breath comes in short hot pants. Then you press your hand a little closer, and the cold thread tightens, and the heat eases. You are not healing her. You are only holding it, like a rope, to keep her from falling.
At some point the Elder wakes. She sits up. She sees what you are doing. She says nothing. She comes across the tent on her knees and kneels beside you, and takes your free hand in both of hers, and holds it.
It helps. You do not know how. The thread of cold grows steadier.
“I am here,” she says, very low.
“I know.”
> mercy | Close your eyes. | storm_a4s5
> truth | Lean on her. | storm_a4s5
> quiet | Breathe. | storm_a4s5
> inquiry | Ask her to sing. | storm_a4s5

=== storm_a4s5 | A Lullaby
She can’t sing. She tells you so, in a whisper. She has a voice like a rusted gate. But she hums, very softly, the first jar, the river lullaby, the one that Bao Er opened and Mother Hsu taught. She hums it without words, tuneless and uncertain, and Narantuya, listening, lifts her head.
“I know that,” she says.
“It is a river song,” says the Elder.
“It’s a Steppe song.” Narantuya frowns. “My grandmother sang it.” She joins in. Her voice is a rich contralto, low and warm. She knows the words. They are in a language you do not speak, but the shape of them is the shape of the lullaby, the slow rock and the long fall.
The two women sing together over the child. The wind howls. The stove ticks.
Zaya’s eyelids flutter. Her breathing slows. A bead of sweat breaks out on her forehead, and then another. The crimson drains from her cheeks. She sleeps.
> mercy | Hold the thread. | storm_a4s6
> truth | Smile. | storm_a4s6
> quiet | Stay still. | storm_a4s6
> inquiry | Look at Narantuya. | storm_a4s6

=== storm_a4s6 | The Crisis
It breaks at the third watch. It breaks all at once, as a fever does, with a long shudder and a gasp and a flood of sweat. Zaya sits bolt upright. Her eyes are wide and clear. She stares round the tent, at the dim figures, the stove, the shaking felt. She says in a loud astonished voice: “I’m hungry.”
Narantuya cries out.
She falls on her knees. She gathers her daughter into her arms and buries her face in the child’s hair. Her whole body shakes. She is making a low keening sound, over and over, like an animal. The child pats her back with a small hot hand.
“Mama,” says Zaya, “you’re squashing me.”
“I know.”
“I’m hungry.”
“I know!” Narantuya laughs wildly. She has tears streaming down her face. “There’s porridge! There’s a whole pot!”
You let go. The thread of cold dies in your hand. Your arm is numb to the shoulder. You sit back on your heels and shake all over, soundlessly, with relief.
> mercy | Smile. | storm_a4s7
> truth | Lean back. | storm_a4s7
> quiet | Close your eyes. | storm_a4s7
> inquiry | Look at the Elder. | storm_a4s7

=== storm_a4s7 | What the Elder Said
“You did not use a drug,” says the Elder. She is sitting on her heels beside you, with her silver comb crooked and her face wet. “You used no herb. You used nothing.”
“I do not know what I used.”
“The seed.” She wipes her cheek. “It is not only for opening. It is for holding things open. Mengjiao said so. She said the black lotus lets you hold a name, or a pain, or a death, so that it does not fall.” Her mouth shakes. “I never knew what she meant.”
“I did not either.”
“I think you held the fever,” says the Elder. “Like a name. Until it could be set down.”
You look at the sleeping child. She has fallen asleep again, with her fist at her mouth, and a ring of damp hair on her forehead. She looks very small.
“I am glad,” you say.
“So am I,” says the Elder. She leans her head against your shoulder. “So very glad.”
> mercy | Hold her. | storm_a4s8
> truth | Close your eyes. | storm_a4s8
> quiet | Stay still. | storm_a4s8
> inquiry | Ask about the cost. | storm_a4s8

=== storm_a4s8 | A Cost
There is a cost. You find it out the next morning. You wake with a hand on your shoulder and a taste of iron in your mouth. Narantuya is kneeling beside you, with a bowl of tea, her broad face tight with worry. She says: “You’ve been asleep for sixteen hours.”
“The storm?”
“Still blowing.” She helps you sit. “How do you feel?”
You consider. You feel hollow. Not weak, exactly; there is no pain. But something is missing, a small clean absence, like a tooth drawn. You reach for it, and find a gap where a memory should be.
You frown. “I had a name,” you say. “A name for the girl. The one in the fever. It was a pet name. It was the name of a flower.”
Narantuya’s lips tighten.
“It’s gone,” you say.
“What is it you cannot recall?”
“The name of the flower.”
She is silent. Then she says, softly: “It was an ordinary one. I am sorry.”
> mercy | Smile. | storm_a4s9
> truth | Say it does not matter. | storm_a4s9
> quiet | Drink the tea. | storm_a4s9
> inquiry | Ask what the seed took. | storm_a4s9

=== storm_a4s9 | A Flower’s Name
It was a small thing. You can tell, by the way the gap feels: small and round and clean-edged, with no blood. A flower. It was a child’s word. It was something you had known for years and never used. The seed took it, as a toll, as it took the fever. It was an even trade.
“Zaya will tell you,” says Narantuya.
She is sitting up in her bed, pale and clear-eyed, spooning porridge into her mouth with a wooden spoon. She looks at you over it. “What?”
“The name of the flower. The one you called her.”
Zaya swallows. “Stonecrop,” she says. “It grows on the stones. It’s yellow.” She considers. “It’s not a very good flower. It’s mostly leaves.”
“Stonecrop,” you say.
“You can have it back,” says Zaya, graciously. “I’ve got another.”
You laugh. It hurts a little. It is the first time you have laughed since the fever. And the gap does not close, but it grows soft at the edges, like a scar in the first week of healing.
> mercy | Thank her. | storm_a4s10
> truth | Smile. | storm_a4s10
> quiet | Look at the stove. | storm_a4s10
> inquiry | Ask about her fever. | storm_a4s10

=== storm_a4s10 | The Third Morning
The storm ends on the third day. It ends the way it began, all at once, with a thin bright line under the flap and the sound of a lark. Narantuya pulls the felt aside. The light pours in, gold and clean and blinding. The plain is scoured. The grass lies in long combed rows. 
Zaya runs out into the sun in her nightgown, with her plaits flying, and turns round and round with her arms out. Batu follows. They shriek. Narantuya stands in the doorway, laughing, with tears running down her broad face.
“She’s better,” she says. “She’s so much better. She’s not even coughing.”
“She is a strong child.”
“She is a ghost,” says Narantuya, “that came back.” She wipes her cheeks with her palm. “I thought I would lose her. I had a stone ready. I had it picked out.”
She turns.
“I owe you a thing,” she says. “I will not say what. The Listeners keep accounts.”
> mercy | Say it is nothing. | storm_close | +storm_healed
> truth | Say you accept. | storm_close | +storm_healed
> quiet | Bow. | storm_close | +storm_healed
> inquiry | Ask her to take the child to the Camp anyway. | storm_close | +storm_healed

// ---------------------------------------------------------------- hidden: Duan
=== storm_h1 | What Duan Was Thinking
He has not moved in an hour. He sits with his back to the felt, his hands in his lap and his cracked spectacles in his fingers, looking at nothing. The storm roars. The lamp-light is a dim gold on his lined grey face. The others are asleep, or pretending.
You move over to sit beside him. You do not ask. You have learned that.
After a long time he says: “I signed it.”
The wind howls.
“The Salt Coast order,” says Duan Wuyi. He says it to the stove. “Nineteen years ago. I was a Censor of the third rank. I was forty-one. I was assigned to countersign the sealing of a child.”
You hold your breath.
“A girl. Eleven. Her name was Ke-er.” His voice is quite level. “I read the order. I read the reasons. I thought it was sound. It was a very elegant argument. It had eleven footnotes.” His thin mouth twists. “I signed in black ink.”
> inquiry | Say nothing. | storm_h2
> truth | Say you know. | storm_h2
> mercy | Take his hand. | storm_h2
> quiet | Wait. | storm_h2

=== storm_h2 | Black Ink
“I did not know she was alive,” says Duan. “I did not know until the Wall. I saw you kneel at it. I saw Mei Qiu weep. I heard the voice.” He shuts his eyes. “And I stood on the quay, thirty feet away, with my hat in my hand, and I thought: that is my handwriting.”
“Duan—”
“I have never told Mei.” He opens his eyes. “I have served with her for nine years. I have eaten at her table. I held her hand in the Round Hall. She says I am the only Censor she ever trusted.” He is very white. “And I am the man who put the sister under the stone.”
The roof shakes. Sand hisses on the felt.
“I did it for a reason,” he says. “A good one. It was a plague year. The wound was widening. A hundred thousand people. I thought—” He stops. “I thought I was weighing. I thought the scale was fair.”
His hands are trembling.
“I should like to tell her,” he says. “I should like to be forgiven. And I am afraid that I only want it so that I can stop feeling it.”
> inquiry | Wait. | storm_h3
> truth | Say she should be told. | storm_h3
> mercy | Say he is forgiven. | storm_h3
> quiet | Say it is not yours to give. | storm_h3

=== storm_h3 | Not Mine to Give
“No,” says Duan. He smiles faintly. “It is not.” He puts on his spectacles. They sit crooked on his nose. He looks old and frail and strangely at peace. “That is exactly right. You are very kind to say so. It is the first honest thing anyone has said to me in a month.”
He reaches into his sleeve and takes out a sheet of folded paper. He holds it out. “This is a letter. I wrote it in the cabin of the Harmony. I have been carrying it for three weeks. It is addressed to Inspector Mei.” He shrugs. “It says everything. It says it at length. It has eleven footnotes.”
You take it.
“I should like you to hold it,” he says. “Until I am brave enough. Or until I die.”
“That is not a fair thing to ask.”
“No.” He smiles. “But you will do it.”
The storm bellows. The lamp gutters. You hold the letter in your hand, a flat grey square, light as a feather.
It is the heaviest thing you have ever carried.
> inquiry | Take it. | storm_close | +storm_duan_letter
> truth | Say you will. | storm_close | +storm_duan_letter
> mercy | Thank him. | storm_close | +storm_duan_letter
> quiet | Pocket it. | storm_close | +storm_duan_letter

// ---------------------------------------------------------------- close
=== storm_close | The Scoured Plain
The Steppe is washed. The dust has gone. Every blade of grass stands up clean and bright and silvered in the rising light. The sky is a pale hard blue. Larks go up on every side, singing. In the east, small and clear, a line of hills has appeared on the horizon where there was only haze, and above them, white as bone, the first of the high-country clouds.
+[how] storm_told | You told the Storm Rule stories, and a wind that had waited three days heard what you had not said.
+[how] storm_herd | You risked your neck for another man’s horses, and Narantuya said that was the whole of the law.
+[how] storm_patrol_passed | A patrol of nine in grey coats sat out the storm in a tent, and a corporal burned his list in the stove.
+[how] storm_healed | You held a fever like a name, and a child of six asked for porridge.
+[how] storm_duan_letter | Duan Wuyi’s letter to Inspector Mei is in your sleeve, folded in four, with eleven footnotes.
Narantuya packs your food herself. A bag of fried dough, a bag of dried curd, a skin of fermented milk, and a handful of hard sweet candies for the children. Zaya, in a clean blue coat, hands you a pebble. It is yellow, with a thin green crust of lichen. It is, she explains solemnly, a stonecrop stone.
“It’s so you remember,” she says. “If you forget again.”
You close your fingers over it. It is warm.
“Thank you.”
“You’re welcome.” She considers. “You can come back. If you like. Mama says.”
“I will.”
“Good,” says Zaya. “I’ll be bigger.”
> truth | Smile. | storm_close2 | +b4q_storm
> mercy | Kneel and hug her. | storm_close2 | +b4q_storm
> quiet | Pocket the stone. | storm_close2 | +b4q_storm
> inquiry | Look at the road. | storm_close2 | +b4q_storm

=== storm_close2 | Back on the Road
You are two hours down the track when you realise you are laughing. It comes upon you quite suddenly, in the saddle, with the sun on your back and the whole bright world rolling away in front. It bubbles up from somewhere deep in your chest, and breaks into a peal.
Gu, beside you, glances round. “What?”
“Nothing.”
“You’re laughing.”
“I know.”
“Why?”
You cannot say. You are laughing because you are alive, and the storm is over, and the grass is green. You are laughing because a six-year-old gave you a stone. You are laughing because the Elder, behind you in the cart, is humming, flat and cracked and happy, a river lullaby that she learned on the third night of a storm.
“It’s the air,” says Hao Lan, wisely. “It’s thinner at this height. It goes to the head.”
“We’re not high.”
“No,” she says. “But it feels it.”
She is smiling. They are all smiling. The cart rattles on. The grass bends. Ahead, the hills are blue, and beyond them, faint and far and cold, a mountain waits.
> truth | Ride on. | hub_b4_a
> mercy | Smile. | hub_b4_a
> quiet | Look east. | hub_b4_a
> inquiry | Ask Temur what is next. | hub_b4_a

`,
  scenarios: String.raw`
$ SU_STORM_GER | trust+4 respect+2 fear+3 | elder | The Elder is shut in a felt tent with eleven strangers while the sky comes down.
hostile: I counted the people in the tent, and the exits, and the water. It is how I was taught to be afraid. It did not help. I found it consoling anyway.
wary: The mother handed me a bowl of tea before I had taken off my cloak. I thought it was a ceremony. It was merely tea. It was the best tea I have had.
neutral: There are no windows in a ger, and for three days I did not know whether it was morning. I learned that I could do without knowing. It is a great discovery at forty-three.
warm: A child of six went to sleep with her head on my knee. I did not dare move. I sat for two hours without moving. My leg went numb. I have never been so happy.
devoted: There was a moment, on the second night, when the whole tent was singing and I did not know the words. I opened my mouth and something came out. I will not say what.
`,
  remarks: String.raw`
% storm_zaya_later | since:b4q_storm>=4 | hao | Zaya has sent me a drawing of the storm. It is a brown scribble with a very small tent in the corner. In the tent are twelve people. She has given each a name. I am the one with the pencil.
% storm_erdene_later | since:storm_patrol_passed>=6 | ren | Corporal Erdene asked if he could write. I said that I could not stop him. He did not seem to find that comforting.
`,
};
