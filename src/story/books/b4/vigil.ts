import type { Arc } from "../types";

/**
 * Book Four, arc nine: the Vigil Road. Each dusk a line of mothers in black walks east along the Fort road with candles, to stand
 * outside Colonel Ruo's school and say their children's names. Four approaches: walk with them and speak plainly to the cordon
 * (a1, truth), break the cordon (a2, force), smuggle letters inside with the laundresses (a3, deceit), and keep the whole night's
 * watch with Mother Altai (a4, mercy). A hidden route is the Colonel's wife. Cast: Mother Altai, Colonel Ruo, Lady Ruo, Sorgan
 * the laundress, Sergeant Dolgor, Yue Zhaoning, Hanming, Temur.
 */
export const vigil: Arc = {
  id: "vigil",
  name: "The Vigil Road",
  scenes: String.raw`
=== vigil_entry | Women in Black
They come at dusk, in a long line, one behind the other, on foot, along the Fort road. They wear black coats, black scarves, black felt boots. They do not speak. They walk with their eyes lowered, at the slow even pace of a procession.
There are four hundred of them. They have been walking for eleven days. They come from every clan on the grass.
The road runs ahead, pale in the dusk, between low hills. At the far end of it, a long way off, you can see the fort: a squat grey mass on a rise, with a signal-tower, a gibbet, a bell. Smoke rises from its chimneys. Lights wink on its walls.
Temur has dismounted. He stands at the road’s edge with his hat in his hand. “The Vigil,” he says, quietly. “It is the oldest rite we have. When the children are taken, the mothers walk. They stand outside the walls and say the names.” He swallows. “The Colonel has been tolerating it for two years. He sends out tea.”
A tiny old woman at the end of the line looks up. She has a face like a dried plum. She sees you.
She beckons.
> truth | Join them. | vigil_a1s1
> force | Notice the cordon of Garrison riflemen drawn across the road a mile ahead. | vigil_a2s1
> deceit | Notice a file of laundresses with baskets, passing in the opposite direction, and ask Yue what they carry. | vigil_a3s1
> mercy | Take a candle from the old woman’s basket, and fall in at her side. | vigil_a4s1
> inquiry | Say that you have a name for the Colonel’s wife. | vigil_h1 |  | b4q_bone | You have not yet been given Madam Uzun’s slip of grey paper.

// ---------------------------------------------------------------- a1: joining
=== vigil_a1s1 | The Old Woman
She is called Altai. She is eighty, and weighs about as much as a bundle of sticks, and has walked all four hundred miles from the Northern Marches on a pair of felt boots patched with felt. She sits on the verge, on a fallen log, with a basket of candle-stubs in her lap. She is giving them out, one at a time, to the women who pass. Each takes one, in silence, lights it from the last, and moves on.
She holds one out to you.
“You are late,” she says.
It is a thin cracked voice, but quite without reproach. She looks at you with eyes like black buttons. “I have been expecting you since the new moon. The grass said you were coming.” She presses the stub into your hand. It is warm. It is lit. “Hold it so. Level with the heart. Don’t let it gutter.”
“I don’t know the words.”
“There aren’t any.” She gets to her feet, with a grunt. “You say the name.”
“Whose?”
“Whoever you’re walking for,” says Altai. She puts her hand through your arm. “Come on. It’s eleven miles.”
> truth | Walk. | vigil_a1s2
> mercy | Take her arm. | vigil_a1s2
> quiet | Hold the candle. | vigil_a1s2
> inquiry | Ask who she walks for. | vigil_a1s2

=== vigil_a1s2 | Who She Walks For
“Temur,” says Altai. She says it simply. “My son. He was twelve. The levy took him from the fold in the year of the long frost. That was twenty-three years ago.” She shuffles along, a small black figure in the dusk, with her hand light on your arm. “I have been walking ever since. A hundred and four times. I always say his name at the wall.”
“Temur. Like the captain.”
“Like the captain.” Her black eyes glint. “I named him after my son. He was a boy at the Grass Line when I came. He pretended he did not know me.”
“You knew him?”
“I held him as a baby.” She chuckles. “His mother was my cousin.”
The line moves on. The candles flicker. The women walk in silence, a river of small flames in the dusk, up the pale road toward the fort. Somewhere in the line a baby is crying. A girl of nine is humming a lullaby, flat and sweet.
“What was your son like?” you say.
“Tall,” says Altai. “He sang.”
> truth | Listen. | vigil_a1s3
> mercy | Say his name. | vigil_a1s3
> quiet | Walk. | vigil_a1s3
> inquiry | Ask if she thinks he is alive. | vigil_a1s3

=== vigil_a1s3 | A Hundred and Four Times
“No,” says Altai. She says it calmly. “He is dead. He was killed at the siege of Tsagaan, in the year after. I had word.” She taps her stick. “I know exactly where he is buried. I have visited the grave.”
“Then why walk?”
“Because it isn’t for him.” She turns her face. Even in the dusk her old eyes are bright. “It is for the ones who haven’t been told. The ones whose mothers don’t know. They stand at the wall, and they hear a name, and they think: is that mine?”
“Do they?”
“Sometimes.” She nods. “One time, in the third year. A boy of ten came to the wall. He was a laundry-lad. He heard a woman say ‘Bold.’ And he put down his basket, and stood very still. And he said: that’s me.”
“Was it?”
“It was his mother,” says Altai, simply. “She had been walking for six years. She did not know he was there.” She pats your arm. “That is what the Vigil is for. It is not for the dead. It is a way of calling.”
> truth | Tell her you will walk. | vigil_a1s4
> mercy | Hold the candle higher. | vigil_a1s4
> quiet | Keep walking. | vigil_a1s4
> inquiry | Ask what you should say. | vigil_a1s4

=== vigil_a1s4 | A Name
You think about it for a mile. The candle drips on your wrist. The road is cold and hard. A few stars are out, very faint, over the black hills. All round you the women shuffle on, murmuring, in a whisper like the sound of leaves.
You do not know whose name to say. You know a great many. You know a ferrywoman, and a keener, and a smith. You know the Reader, who has no name, and a boy of nine in a white house named Tsend whom you have never met.
You say, aloud, very low: “Tsend.”
Beside you Altai nods. “Good,” she says. “He is the one you owe.”
“Yes.”
“It is always the one you owe.” She tightens her grip. “Say it again.”
You do. You say it again, and a third time. The women near you pick it up. A girl behind you murmurs it. A grandmother in front of you turns her head.
“Tsend,” she says, and passes it on.
By the second mile it is going down the whole line, from voice to voice, like a ripple on a pond.
> truth | Keep saying it. | vigil_a1s5
> mercy | Weep. | vigil_a1s5
> quiet | Listen. | vigil_a1s5
> inquiry | Ask who else is walking. | vigil_a1s5

=== vigil_a1s5 | Four Hundred Names
They say them all. It takes the whole walk. They go up the road in the dark, a river of black coats and little flames, and every woman says her name, and the next takes it up. It is not a chant. It is not a song. It is a murmur, a long low overlapping rustle, like the wind in grass. You hear them go by: Altan. Saran. Bold. Hui. Naran. Chimeg. Always Late. Little Wind.
The Elder walks at your elbow. She carries a stub of her own, a thick one, from Altai’s basket. Her face is white and set. She holds it level with her heart. She says nothing. Her lips are moving.
At the end of the second mile you realise what she is saying.
She is saying fourteen names. She is saying them in the order of the list. She is saying them in the voice she used to sign them: dry, exact, clear. She says them one by one. She says a fifteenth. She says a sixteenth.
She says: Su Mengjiao.
She says it very quietly. Her voice cracks on the second syllable.
> truth | Take her hand. | vigil_a1s6
> mercy | Say it with her. | vigil_a1s6
> quiet | Look away. | vigil_a1s6
> inquiry | Say the fourteenth. | vigil_a1s6 | npc:SU_VIGIL_CANDLES

=== vigil_a1s6 | The Cordon
They are waiting at the bottom of the last hill. A hundred riflemen in grey, drawn up in two ranks across the road, with their carbines at the port. Behind them is a line of mounted men with torches. Behind them, on a rise, a white-haired man on a grey horse sits very straight, watching. The road is blocked. Nobody speaks. The torches hiss.
The women stop. They do not retreat. They stand in the road, in a vast silent mass, with their candles held before them, and gaze at the soldiers. The line goes back as far as you can see.
A young officer steps forward. He has a smooth boyish face, and a voice that cracks. “This is a restricted area,” he says. “By order of the Colonel. You must disperse.”
Nobody moves.
“You must go back,” he says. He swallows. “I am sorry. I am only following orders.”
Altai gives a thin dry chuckle.
“Of course you are, dear,” she says. “We’ll just wait.”
> truth | Step forward. | vigil_a1s7
> mercy | Stand with Altai. | vigil_a1s7
> quiet | Hold the candle. | vigil_a1s7
> inquiry | Look at the man on the grey horse. | vigil_a1s7

=== vigil_a1s7 | Colonel Ruo
He urges his horse down the slope at a walk. He is sixty, tall and spare and silver-haired, in a plain grey uniform with no decorations. He has a thin, handsome, scholarly face, with deep-set grey eyes and a gentle mouth. He sits his horse like a man who has learned to ride from books. He dismounts at the cordon. He hands the reins to an aide. He walks forward alone, through the ranks, with his hands clasped behind his back.
He stops in front of the women. He looks along their line, from one end to the other, and the candles throw gold on his face.
“Good evening,” he says. His voice is soft and cultivated. “I am sorry to see you again.”
Nobody answers.
“I have tea,” says Colonel Ruo. “I have had it brought out. It is hot.” He smiles faintly. “It is a cold night. I would not like to think of you walking back.”
Behind him, soldiers are carrying out trays. They set them down on the road. They are laden with steaming cups of pale tea.
You smell it. You know it. It is camomile.
> truth | Step forward. | vigil_a1s8
> mercy | Hold the Elder’s arm. | vigil_a1s8
> quiet | Watch. | vigil_a1s8
> inquiry | Say what is in it. | vigil_a1s8

=== vigil_a1s8 | Tea
“It is a cordial,” says the Colonel. He turns his grey gentle eyes on you. “A soothing infusion. Camomile and honey. It is quite harmless. It is given to the children at night.” He spreads his hands. “I have tried it myself. I find it very restful.”
“It has dust in it.”
He blinks. “I beg your pardon?”
“Calm dust. Reagent D.” Your voice is flat. “It is in the tea. It is in the children’s tea. It is in the Matriarch’s tea. It is in every cup you have ever sent out.” You step forward. “You are poisoning them.”
He stares. For a long moment his face is quite blank. Then a look comes over it that you have never seen on a human face: a dawning, appalled bewilderment, like a man who has been told that his hand is not his own.
“No,” he says. “No. It is a medicinal. It was sent by the Inspector. It is a prescribed treatment.” He passes a hand over his eyes. “For agitation. For the nerves.”
“Colonel.”
“I have been drinking it for two years,” says Colonel Ruo, faintly.
> truth | Wait. | vigil_a1s9
> mercy | Say you are sorry. | vigil_a1s9
> quiet | Look at the women. | vigil_a1s9
> inquiry | Ask what he remembers. | vigil_a1s9

=== vigil_a1s9 | What He Remembered
He remembers nothing. He tells you so, standing there in the road in the torchlight, with the tea steaming at his feet and the soldiers frozen. He says it in a soft, vague, bewildered voice. “I remember that I had a wife,” he says. “I remember she was tall. I remember a house with a garden. I remember—” He stops. “I do not remember her name.”
The women are silent.
“I have been in this fort for eleven years,” says the Colonel. He says it as a man reads from a card. “I have run a school. I have kept the peace. I have received letters from the Inspector.” He frowns. “I am sure they were very good letters.”
“What did they say?”
“I do not recall.” He looks at his hands. “It seems I do not recall a great deal.”
Altai steps forward. She is tiny, black, bent, at his elbow. She looks up at his face.
“Colonel,” she says, quite gently. “Do you know my son?”
He looks at her. He tilts his head, politely.
“I am afraid not, madam,” he says.
> truth | Watch. | vigil_close | +vigil_walked
> mercy | Hold your breath. | vigil_close | +vigil_walked
> quiet | Put out your candle. | vigil_close | +vigil_walked
> inquiry | Ask Altai what she wants. | vigil_close | +vigil_walked

// ---------------------------------------------------------------- a2: the cordon
=== vigil_a2s1 | A Mile Ahead
They are drawn up in two ranks across the road, a hundred riflemen in grey, with their carbines at the port and bayonets fixed. Behind them, on the rise, a line of mounted men holds torches. The light flickers on steel. The road is a ribbon of pale dust between black hills.
“They’ll stop us,” says Temur. He has reined in beside you. “They always do. They don’t shoot. They stand there. The mothers sit down in the road and wait.”
“For how long?”
“Until dawn.” He grimaces. “Then they go back. And return the next night.” He rubs his nose. “It has been going on for two years. Nobody has crossed the line.”
You look along the road. The women are a moving ribbon of small lights, coming up behind you in the dusk. They are slow and tired and silent. They have walked four hundred miles. They will sit down in the road and be ignored.
“No,” you say.
“What?”
“I don’t want them to wait.”
Temur turns his head, slowly. “What do you want?”
“I want to open the road,” you say.
> force | Plan. | vigil_a2s2
> truth | Say it plainly. | vigil_a2s2
> quiet | Look at the ranks. | vigil_a2s2
> mercy | Think of the soldiers. | vigil_a2s2

=== vigil_a2s2 | A Hundred Rifles
“It is suicide,” says Ren Qiao, flatly. He has come up behind you, with his mother at his side. He is studying the cordon with narrowed eyes. “A hundred rifles. A hundred. We have forty swords. They’ll fire.”
“They’ve never fired.”
“They’ve never been given a reason.” His scarred face is grim. “If we rush them, they will. And the women are in the road.”
“Then we don’t rush.”
“What do we do?”
“We walk,” you say.
Odgerel snorts. “It is a charming plan.”
“It worked for the first one.”
“The first one?”
“The Elder walked down an abyss path,” you say. “With a candle.” You look at the black hills. “I think you can walk through anything, if you do it slowly enough.”
Ren Qiao studies you for a long moment. “That is either very wise or very stupid,” he says.
“Yes.”
He sighs. He takes his sword out of its scabbard and hands it to his mother. “Hold that,” he says. “I shall want my hands free.”
> force | Go. | vigil_a2s3
> truth | Wait. | vigil_a2s3
> quiet | Take a breath. | vigil_a2s3
> mercy | Tell the women. | vigil_a2s3

=== vigil_a2s3 | Walking Into the Guns
You walk. All of you. Four hundred women, a hundred riders, forty fighters, a wolf. You do it in silence, in an unbroken line, with your candles held level before you. You walk straight down the middle of the road toward the cordon. The grey ranks stand motionless, rifles levelled. Nobody speaks.
You can hear your own footsteps. They are very loud. The torches hiss. A bat flits. Somewhere a rifle-bolt clicks.
“Halt!” cries a young officer. His voice cracks. “Halt! Halt or we shall fire!”
You do not halt. You walk. The women walk. The line is a river of small yellow flames, coming on.
“Fire!” screams the officer.
Nobody fires.
You are twenty paces off. You can see the faces of the riflemen: boys, mostly, white and sweating, with their eyes wide. They are looking at the candles. They are looking at the women. Their muzzles are shaking.
Ten paces.
> force | Keep walking. | vigil_a2s4
> truth | Hold your candle. | vigil_a2s4
> quiet | Look at the officer. | vigil_a2s4
> mercy | Call out. | vigil_a2s4

=== vigil_a2s4 | Dolgor
“Hold your fire!” roars a heavy voice. “Hold your damned fire!”
He comes pushing through the ranks, red-faced and bandaged, with a scar across his cheek. It is Sergeant Dolgor. His grey coat is unbuttoned. His cap is gone. He thrusts aside two riflemen with his elbows, and stands in the road between the cordon and the women, with his arms spread.
“Nobody shoots,” he says. His voice is a bellow. “Nobody! These are mothers!”
“Sergeant!” cries the officer. “I gave an order!”
“And I’m countermanding it.” Dolgor doesn’t turn. “I’ve twenty years in this regiment. You’ve twenty weeks.” He glares round the ranks. “Put them down! Put them down, you young fools! What are you going to do, shoot an old woman with a candle?”
Nobody moves.
“I taught half of you to ride,” says Dolgor, hoarsely. “I taught you to load. I taught you not to be afraid. Don’t make me teach you this.”
There is a long, long silence. And then, slowly, one by one, the rifles begin to lower.
> force | Thank him. | vigil_a2s5
> truth | Keep walking. | vigil_a2s5
> quiet | Bow. | vigil_a2s5
> mercy | Smile. | vigil_a2s5

=== vigil_a2s5 | The Road Is Open
They let you through. They do it in silence, with their eyes lowered, shuffling aside to make a lane. The women pass between them in a single file, murmuring. They hold their candles before them. They say their names. Some of the riflemen have taken off their caps. A boy of seventeen, at the end of the line, is crying openly.
You pass Dolgor. He stands at the roadside, with his arms hanging. His face is grey. He doesn’t look at you.
“I’ll be court-martialled,” he says, to the dark.
“Not if we win.”
“No.” His laugh is cracked. “I forgot. There’s that.” He rubs his scarred cheek. “It’s a thought.”
You walk on. You go up the long hill, with four hundred women, in a river of small flames. At the top the fort rises before you, grey and squat against the stars. The gates are shut. The walls are black. A single great bell hangs from a gibbet, over the arch.
A white-haired man on a grey horse is sitting alone in the road below it, waiting.
> force | Go on. | vigil_a2s6
> truth | Stop. | vigil_a2s6
> quiet | Hold your candle. | vigil_a2s6
> mercy | Look at him. | vigil_a2s6

=== vigil_a2s6 | The Colonel Alone
He does not move. He sits his horse in the middle of the road, with the reins loose and his hands folded on the pommel, watching you come. His thin silver face is composed. His eyes are very bright. He looks tired and polite and a little bewildered, like a host at a party that has gone on too long.
You stop ten paces off. The women stop behind you. Four hundred small flames burn in the dark.
“Good evening,” says the Colonel. “I did not expect so many.”
“We are mothers.”
“So I see.” He inclines his head. “I have always regarded the Vigil as a most moving custom. I have never interfered.” He looks at the ranks of candles. “I confess I have not understood it.”
“It is a way of calling.”
“Calling.” He considers this. “Whom?”
“The children.”
“Ah.” He gives a polite, puzzled smile. “But they are not here.”
There is a pause.
“No,” you say. “They are in your school.”
> force | Wait. | vigil_a2s7
> truth | Step forward. | vigil_a2s7
> quiet | Look at the gate. | vigil_a2s7
> mercy | Say they are afraid. | vigil_a2s7

=== vigil_a2s7 | The School
“My school,” says the Colonel. The polite smile fades. A look of faint distress comes into his face. “Yes. I am very proud of it. It is the finest on the frontier.” He gestures toward the fort. “We have eight hundred and forty pupils. They learn to read. They learn to count. They learn to sit still.” His voice trembles. “They have good food. They have clean beds. They have a doctor.”
“And tea.”
“And tea.” He frowns. “It is a mild sedative. It helps them sleep.”
“Colonel.”
“I do not know why you look at me like that.” His voice rises. “I have done everything I could. I have taken them from the cold, from the grass, from the wolves. I have given them a roof.” He stops. His hands clench on the pommel. “They are happy.”
“Are they?”
“They are quiet,” says Colonel Ruo.
He stares at you. And then, very slowly, his face begins to change.
> force | Hold still. | vigil_a2s8
> truth | Say nothing. | vigil_a2s8
> quiet | Wait. | vigil_a2s8
> mercy | Say you are sorry. | vigil_a2s8

=== vigil_a2s8 | A Gate Opens
It is Altai who ends it. She walks forward from the line of women, small and black and bent, with her candle in her hand. She stops at the horse’s head. She tilts back her old face. She looks the Colonel in the eye.
“Colonel,” she says, “I want to see my grandson.”
He stares down at her.
“His name is Temur,” says Altai. “He is eight. He was taken from the grass-edge in the winter.” Her voice is quite steady. “He has a scar on his chin. He sings.”
“I—” The Colonel moistens his lips. “I do not know the child.”
“Of course you do not,” says Altai. “But I want to see him anyway.”
She sets her candle on the ground. She folds her hands. She waits.
And there is a silence in which you can hear the bell creak on its gibbet, and a horse stamp, and a small dry crack from the stones of the fort as the cold falls.
Then the Colonel, with a trembling hand, says: “Sergeant. Open the gate.”
> force | Step back. | vigil_close | +vigil_gate
> truth | Look at Altai. | vigil_close | +vigil_gate
> quiet | Watch. | vigil_close | +vigil_gate
> mercy | Weep. | vigil_close | +vigil_gate

// ---------------------------------------------------------------- a3: the letters
=== vigil_a3s1 | Baskets
They go the other way. They are laundresses. They walk with their heads down and their sleeves rolled, and they are very tired. They do not look at the candles.
“The fort’s laundry,” says Yue Zhaoning, who has materialised at your elbow, in a battered hat and a camel-driver’s coat. “They do the school’s linen. Every day. Back and forth. They’re allowed through the cordon, because someone has to.”
“Are they Listeners?”
“Mostly.” She grins. “They are the best postal service on the Steppe.”
“Postal?”
“They carry messages.” She lowers her voice. “From the mothers to the children. And back. A scrap of paper in a hem. A name in a sock. It’s the only way.” She sniffs. “The Colonel doesn’t know. Or he pretends.”
You look at the baskets. The women plod by, eyes lowered, in the dusk. One, a stout grey-haired woman at the end of the file, glances up at you. Her face is broad and wrinkled. She gives a tiny nod.
“That’s Sorgan,” says Yue.
> deceit | Follow them. | vigil_a3s2
> truth | Say you would like to help. | vigil_a3s2
> quiet | Watch. | vigil_a3s2
> mercy | Ask about Tsend. | vigil_a3s2

=== vigil_a3s2 | Sorgan
She is sixty-three, and as round as a barrel, with a face like a loaf of bread and forearms like hams. She is the foreman of the laundresses. She speaks in a slow deep hoarse voice, as if she had been shouting over steam for a lifetime.
She listens to you in the lee of a stone, with her basket on her hip and the other women standing round, lifting their heads like cattle.
“A letter,” she says. “To the boy. In the white house.”
“Yes.”
“It’s possible.” She shifts her weight. “I’ve done it a hundred times. The little ones can’t read. They need it read to them. The older ones can.” She scratches her jowl. “But it’s a risk. If the Colonel finds it, he’ll hang me.”
“I would not ask.”
“You are not asking.” She gives a short laugh. “I’m offering. I’ve been waiting for someone to offer me something to do.” Her broad face crinkles. “What does it say?”
You open your mouth. You close it.
You do not know.
> deceit | Think. | vigil_a3s3
> truth | Say it is a name. | vigil_a3s3
> quiet | Look at Yue. | vigil_a3s3
> mercy | Ask what he would like to hear. | vigil_a3s3

=== vigil_a3s3 | What a Letter Says
“Ask his aunt,” says Sorgan.
She looks at Yue. Yue Zhaoning, in her camel-driver’s coat, is standing quite still with her hands in her sleeves. Her face is sharp and brown and stiff. She says nothing for a long time.
“I haven’t written,” she says. “In three years.”
“Why not?”
“I didn’t know what to say.”
“You say hello,” says Sorgan.
“I say—” Yue wets her lips. She is looking at her boots. “I say: I’m coming. I say: I’m sorry. I say: don’t be afraid.” Her voice is a thread. “I’d say: I’ve got a camel. It’s called Barley. It smells. You’d like it.”
“Write that,” says Sorgan.
“It isn’t enough.”
“It is,” says Sorgan. “It’s enough for a boy of nine.” She tucks a stub of pencil into Yue’s hand. “Write it on a scrap. I’ll sew it in my hem.”
Yue looks at the pencil. Her hand is not steady. But she takes it.
> deceit | Fetch paper. | vigil_a3s4
> truth | Hold the lantern. | vigil_a3s4
> quiet | Step away. | vigil_a3s4
> mercy | Sit beside her. | vigil_a3s4

=== vigil_a3s4 | A Scrap
She writes it on the back of a laundry tally, squatting in the lee of a stone, in the light of your candle. She crosses out a word. She writes it again. She tears the first scrap and starts afresh. Her pencil is a stub. Her handwriting is the careful block capitals of someone who learned to read late.
She holds it up. It says: Tsend. It is Yue. I am coming. I have a camel named Barley. Do not eat the tea. Count to a hundred and four.
She reads it twice. She folds it into a tiny square.
“Is that all?” she says.
“It is perfect.”
“It’s four lines.”
“It is the right length.”
Sorgan takes it. She turns up her hem and thrusts it into a pocket the size of a purse, sewn into the lining, and sews it with three quick stitches, bitten off. She pats it flat. “There,” she says. “It’ll be in his hand by morning.”
Yue sinks onto a rock. She puts her face in her hands.
“I should have written months ago,” she says.
“You’ve written now,” says Sorgan. She settles her basket. “That’s what counts.”
> deceit | Squeeze Yue’s shoulder. | vigil_a3s5
> truth | Watch. | vigil_a3s5
> quiet | Look at Sorgan. | vigil_a3s5
> mercy | Hand Yue water. | vigil_a3s5

=== vigil_a3s5 | More
You write more. All of you, in the course of that evening. It becomes a game, then a ceremony, then a flood. Hao Lan writes four letters, to four children whose names she found in the Black Book. Gu writes one to a boy of twelve in the third dormitory, a distant cousin. Hanming writes to a lad who was his corporal. The Elder writes one, slowly, in her best chancery script, and does not show it.
Even Shu Ning writes. She does it without a word, on a strip of copper foil, scratching with a graver, and hands it to Sorgan with a face like a mask. Sorgan tucks it in her bosom.
“What does it say?” says Gu.
“Nothing,” says Shu Ning. “It’s for a child called Moon-Eyes. I made a toy for her once.” She turns her back. “It’s a seal. It says: I’m here.”
By midnight there are two hundred and nineteen. They fill a sack. Sorgan stitches them into the linings of seventy aprons, with the other laundresses crowding round to help, and a great deal of whispering.
“You’ll be the death of me,” she says. “All of you.” But she is beaming.
> deceit | Stitch. | vigil_a3s6
> truth | Thank her. | vigil_a3s6
> quiet | Check the hems. | vigil_a3s6
> mercy | Hold the candle. | vigil_a3s6

=== vigil_a3s6 | The Gate at Dawn
You follow at a distance. You cannot go in; you wait on the hill, in the cold, with a spyglass, watching the laundresses file up the road at sunrise. They go in single file, bent under their baskets, to the little wicket by the gate. A guard stands there, bored, with a clipboard. He counts them in. He ticks them off.
Seventy-one. Seventy-two. Seventy-three.
At the end of the line Sorgan is stumping up the road with her basket on her hip, humming. She stops at the wicket. She bobs a curtsey. She says something. The guard laughs. He waves her through.
You let out a breath you did not know you were holding.
“She’s in,” says Hao Lan, beside you. She is shaking. “She did it.”
“Now what?”
“Now we wait.” She presses the spyglass to her eye. “For a boy of nine to read a note.”
It is the longest day of your life. The sun rises. The shadows shorten. The bell tolls noon. A thin trail of smoke hangs over the fort. You eat nothing. You sit on a rock with your chin on your fist, and watch.
> deceit | Wait. | vigil_a3s7
> truth | Watch the gate. | vigil_a3s7
> quiet | Pray. | vigil_a3s7
> mercy | Hold Hao Lan. | vigil_a3s7

=== vigil_a3s7 | A Scrap Returned
At dusk the laundresses come out. You meet them a mile down, behind a boulder. Sorgan is at the tail, as always. She is limping. Her broad face is blotched and swollen. She leans on her stick.
She stops in front of you. She doesn’t speak.
She turns up her hem. She tugs at a thread. A tiny square of paper falls into your palm. It is folded very small. It is warm.
You open it. It is the back of a laundry-tally, scrawled in pencil. Not in Yue’s hand. In a child’s: large, wobbly, with the letters running uphill.
It says: Dear Yue. I got your letter. I hid it in my shoe. I am not eating the tea. I poured it in the plant. The plant is dead. I am sorry about the plant. I counted to a hundred and four. I did not run. I am waiting. Please hurry. I have a loose tooth. —Tsend.
Yue Zhaoning is standing at your shoulder. She has read it over your arm.
She makes a small sound. And then she sits down in the road and howls.
> deceit | Hold her. | vigil_a3s8
> truth | Say nothing. | vigil_a3s8
> quiet | Stand guard. | vigil_a3s8
> mercy | Weep with her. | vigil_a3s8

=== vigil_a3s8 | A Loose Tooth
She weeps for ten minutes. It comes out of her like a long tearing, shaking her whole lean frame. She sits in the dust, in her camel-driver’s coat, with her hat in her lap and her hands over her face. Sorgan stands over her, leaning on her stick, saying nothing. Her broad face is wet.
At last Yue lifts her head. She wipes her cheeks with both palms. She laughs, a wavering sound, and sniffs.
“He’s got a loose tooth,” she says.
“Aye.”
“He’s nine.”
“Aye.”
“He should have lost it at seven.” She laughs again, helplessly. “He was always late. My sister said. Always late with everything. Teeth. Walking. Talking.” She scrubs her eyes. “He’ll be the last boy in the school to lose it.”
“It’ll come out,” says Sorgan. “They do.”
“Aye.” Yue looks up at her. “Aye. They do.”
She gets to her feet. She dusts her coat. She straightens her hat. She looks, for the first time in your hearing, quite calm.
“Right,” she says. “I’ve got a camel to fetch. And a plan to make.”
> deceit | Smile. | vigil_a3s9
> truth | Help her. | vigil_a3s9
> quiet | Pick up the note. | vigil_a3s9
> mercy | Hug her. | vigil_a3s9

=== vigil_a3s9 | A Plan in a Basket
It takes a week. It takes the whole party, and the whole laundry, and a vast amount of soap. The plan is Yue’s, with improvements by Hao Lan and Hanming and Sorgan, and a correction by the Elder. It goes like this. On the day of the Colonel’s review, when the fort is full of dignitaries, the laundry will make its usual delivery. In the biggest basket, under a heap of sheets, will be a boy of nine, taken from his dormitory by Sorgan on the pretext of a fever. In the next basket, a girl of seven. In the next, a boy of twelve. They will go out in the carts.
“How many can we get?” says Hao Lan.
“Twenty,” says Sorgan. “The baskets only hold twenty.”
“Out of eight hundred and forty.”
“It’s a start.”
“It’s a drop in the sea.”
“It’s twenty drops,” says Sorgan, stoutly. “And the next day another twenty. And the next, twenty more. In forty days, we’ll have them all.” She spits on her hands. “It’s only washing.”
Yue Zhaoning says, without moving: “I’ll be in the first basket.”
“You can’t.”
“I can.” She grins. “I’ve done it before. It’s not dignified.”
> deceit | Agree. | vigil_a3s10
> truth | Say it is dangerous. | vigil_a3s10
> quiet | Look at Sorgan. | vigil_a3s10
> mercy | Fetch a sheet. | vigil_a3s10

=== vigil_a3s10 | The First Twenty
They go out on the ninth day. It is a hot bright morning, windless, with the dust hanging in the road. The review is in full swing. The fort is a bustle of flags and trumpets. Four hundred soldiers are drawn up on the parade-ground, in ranks. Officers in plumes strut. The Colonel, thin and silver and serene, is making a speech.
Through the postern, at the back, by the laundry-yard, a file of laundresses emerges with their baskets. They are the usual crowd, plodding and sweaty and bad-tempered. They are carrying more than usual. There is a great deal of washing about. The cart at the gate is piled high.
Under the sheets there are twenty children, in twenty baskets, as still as stones.
At the head of the line, in the first basket, with a heap of linen over her head, rides a lean woman in a camel-driver’s coat. She has a sheet over her face. She is humming.
They pass the guard. He waves them through.
You watch from the hill. You cannot breathe. The cart rattles down the road, in the dust, and out of sight.
> deceit | Wait. | vigil_close | +vigil_letters
> truth | Run to meet them. | vigil_close | +vigil_letters
> quiet | Pray. | vigil_close | +vigil_letters
> mercy | Weep. | vigil_close | +vigil_letters

// ---------------------------------------------------------------- a4: the night watch
=== vigil_a4s1 | Level With the Heart
“Not like that,” says Altai, patiently. She takes your wrist and lifts it an inch. “Level with the heart. The flame is the voice. You hold it where the voice comes from.” She nods at the candle. “If you hold it too high you are shouting. If you hold it too low you are hiding.”
You hold it where she puts it. It is a short thick stub of tallow, in a horn lantern. The flame is steady in the windless dusk. It lights your hand from below, and your sleeve, and a small round space of road.
You walk. The old woman pads at your side, a hand on your arm, her black felt boots making no sound. She smells of mutton fat and wool and dust. She hums, under her breath, a slow tuneless drone that goes with the rhythm of her step.
Behind you, in the dark, four hundred lights follow. Ahead, a long way off, the fort glows on its rise. It is a rank of lit windows, tiny and cold.
“It’s eleven miles,” says Altai. “We’ll be there by midnight.” She pats your arm. “You will stand with me.”
> mercy | Walk. | vigil_a4s2
> truth | Say you will. | vigil_a4s2
> quiet | Match her pace. | vigil_a4s2
> inquiry | Ask what happens at the wall. | vigil_a4s2

=== vigil_a4s2 | The Wall
“We stand,” says Altai. “That’s all. We stand in a line along the foot of it. We hold the candles. We say the names, one after another, up and down, until dawn.” She glances sideways. “It isn’t exciting.”
“Does anyone answer?”
“No.” She says it comfortably. “Not usually. The Colonel puts out soldiers. They stand on the wall and look at us. Sometimes they throw tea.” She chuckles. “Once a boy threw a shoe.”
“What did you do?”
“I took it home. It was a good shoe.” She taps her stick. “That’s the whole of it. We stand there until the sun comes up, and then we go back.”
“And that’s enough?”
“No,” says Altai.
She stops. She turns her black eyes up to you. In the dim light she looks about a hundred years old.
“But it’s what there is,” she says. “If you can’t do the thing, you stand where the thing was. It’s a very old kind of prayer.” She smiles. “Don’t tell the young ones. They think it’s a plan.”
> mercy | Smile. | vigil_a4s3
> truth | Say you understand. | vigil_a4s3
> quiet | Look at the road. | vigil_a4s3
> inquiry | Ask about the shoe. | vigil_a4s3

=== vigil_a4s3 | The Line at the Wall
They arrive at midnight. The fort is huge and silent, a cliff of grey stone against the stars, with a black gate and a ring of narrow windows. A line of soldiers is drawn up along the battlements, indistinct shapes against the sky. A torch burns on the gatehouse. The great bell hangs over the arch, a silent bulk.
The women form up along the foot of the wall. They do it without speaking, shuffling into place, in a long curving line a quarter-mile from end to end. They plant their lanterns on the ground before them. They fold their hands. They stand.
You stand with Altai, near the middle. Her little hand is on your sleeve. Her face, lit from below, is calm and creased and ancient.
The silence stretches. The cold deepens. Somewhere above you a rifle-sling creaks.
“Now,” whispers Altai.
She opens her mouth. She says a name.
It is not loud. It is a thin dry cracked voice, quite steady. “Temur,” she says. “Temur. Temur.”
The woman on her left takes up another.
> mercy | Say a name. | vigil_a4s4
> truth | Listen. | vigil_a4s4
> quiet | Hold the candle. | vigil_a4s4
> inquiry | Ask who is next. | vigil_a4s4

=== vigil_a4s4 | The Long Night
It goes on all night. It is the strangest night of your life. You stand with your candle, in the cold, and the names go up and down the line like a slow wave: first one voice, then the next, then the next, a long murmur that never stops. You say your own: Tsend. You say Little Wind. You say fourteen, and a fifteenth. You say names you have only heard once. You say them until your throat is dry.
The stars wheel. The moon sets. The wind comes up and tears at the flames and the women cup their hands round them. A child falls asleep on her mother’s shoulder, still standing, with her mouth open. An old man is led away, coughing, and returns an hour later with a blanket round him.
No one leaves.
At the third watch the soldiers on the wall begin to move. They come to the parapet. They look down. You can see them, indistinct, in the torchlight: young men in grey with their rifles slung, leaning on the stone. They are listening.
One of them, a boy, takes off his cap.
> mercy | Keep saying. | vigil_a4s5
> truth | Look up. | vigil_a4s5
> quiet | Hold your breath. | vigil_a4s5
> inquiry | Ask Altai. | vigil_a4s5

=== vigil_a4s5 | The Soldier on the Wall
He calls down at dawn. He has been listening for hours, leaning on the parapet with his cap in his hand. He is perhaps seventeen, with a round freckled face, a gap in his teeth, and a thin high voice that carries on the still air. He cups his hand to his mouth.
“Mother!” he calls.
The line freezes. A hundred heads come up. The murmur dies.
“Mother!” he calls again. His voice cracks. “Is that you? Is that Mother Altai?”
The old woman’s hand tightens on your arm. It is shaking. She lifts her wrinkled face to the wall. She opens her mouth. No sound comes out.
“It’s Bold!” cries the boy. “It’s me! It’s Bold! From the north fold!” He leans so far out that the man behind grabs his belt. “I heard you! I heard my name!”
“Bold,” whispers Altai. She turns her head. “Who is that?”
“I don’t know,” you say.
“Bold,” she says, very faintly, “was my cousin’s boy.”
> mercy | Hold her. | vigil_a4s6
> truth | Call back. | vigil_a4s6
> quiet | Step aside. | vigil_a4s6
> inquiry | Ask who he is. | vigil_a4s6

=== vigil_a4s6 | Bold
He is a levy-man. He was taken at twelve, from a fold in the northern marches, five years ago, and put in a forty-man section. He has been at the fort ever since. He guards the wall. He has not seen his mother in five years. He has been told she is dead.
He tells you this at the gate, an hour later, when the Colonel has ordered the wicket opened and the line has filed in. He stands in the yard, with his cap in his hands, and tells it in a high clear sobbing treble, with his mother holding his face.
She is a big bony woman of forty, in a black coat, with a face like a plank. She has been in the line since the beginning. She has not said a word. She has said his name every night for five years. She puts her arms round him and lifts him off the ground. He is as tall as she.
“You’re so thin,” she says. “You’re so thin.”
“Mother.”
“You’ve had the tea.”
“I didn’t drink it,” says Bold, weeping. “I poured it out the window. Every night.”
She buries her face in his neck.
> mercy | Look away. | vigil_a4s7
> truth | Weep. | vigil_a4s7
> quiet | Step back. | vigil_a4s7
> inquiry | Ask Altai. | vigil_a4s7

=== vigil_a4s7 | Altai’s Prayer
“It works,” says Altai. She is sitting on the stones of the yard, with her stick between her knees. She looks very small, and very old, and quite astonished. “It’s never worked.” She laughs, a thin dry crack. “A hundred and four times. And it’s never worked.”
“It worked tonight.”
“It worked for Bold.” She shakes her head slowly. “It wasn’t for him. It was for my own. For Temur.”
“It was for everyone.”
“Yes.” She rubs her eyes with her sleeve. “That is what I keep forgetting.” She lifts her face to the lightening sky. “I’ve been walking for twenty-three years. I always thought that the name I said was the one that mattered. And all the time it was the sound.”
“The sound?”
“The calling.” She smiles. “Somebody always hears.”
The Colonel is standing at the foot of the stair, in the grey dawn, with his hands behind him. He is listening. He has been listening for an hour.
His face is wet.
> mercy | Smile. | vigil_a4s8
> truth | Look at him. | vigil_a4s8
> quiet | Bow your head. | vigil_a4s8
> inquiry | Ask what he heard. | vigil_a4s8

=== vigil_a4s8 | What the Colonel Heard
“A name,” says Colonel Ruo. He says it in a hushed voice, to nobody. “I heard it. Among all the others. A woman’s. It was very quiet.” He looks up. His grey eyes are bewildered. “I think it was my wife’s.”
You wait.
“I do not remember her,” he says. “I told you. But I heard it, and it fitted.” He touches his breast. “Here. Like a key in a lock.” He gives a breathless little laugh. “How very curious. I have not wept for fifteen years.”
“What was her name?”
“I do not know.” He wipes his cheek. “But I think—” He stops. “I think I used to say it every morning. I think I said it when I woke.”
He looks down at his hands. They are shaking.
“I have been very stupid,” says the Colonel. “I think I have been drugged.”
It is the most terrible, the most human sentence you have ever heard.
> mercy | Take his arm. | vigil_a4s9
> truth | Say yes. | vigil_a4s9
> quiet | Wait. | vigil_a4s9
> inquiry | Ask what he will do. | vigil_a4s9

=== vigil_a4s9 | Tea, Refused
He pours the pot out himself. He pours out another. And another. He goes round the whole yard, collecting jugs from the kitchen, and the sentry-boxes, and the offices, and empties each in turn.
The soldiers watch. The women watch. Nobody speaks.
At the end he stands there, in the middle of the yard, with the last empty pot in his hand. He looks very tired. He looks like a man waking from a long fever. His silver hair is on end.
“I have an order,” he says, hoarsely. “From the Inspector. It is to continue the treatment.” He sets down the pot. “I am going to disobey it.”
A murmur goes round the yard.
“I do not know how long it will take,” says the Colonel. “I do not know what I shall remember. I am afraid I shall remember a good deal.” He takes a breath. “But I find that I should like to.”
He bows to the line of mothers, from the waist.
“Forgive me,” he says. “I think I have been rather unkind.”
> mercy | Bow back. | vigil_a4s10
> truth | Say you forgive him. | vigil_a4s10
> quiet | Say nothing. | vigil_a4s10
> inquiry | Ask for the school. | vigil_a4s10

=== vigil_a4s10 | The Doors of the School
It takes the whole day. The Colonel orders the long white building opened, and the dormitories unlocked, and the register brought. He sits at a table in the yard, with a pen, and writes: name, age, village, mother. Beside him, Altai sits with her stick. She reads the names aloud, and the women answer. A child is found. A child is found. A child. A child. The yard fills. The mothers run in, one by one, through the white doors, and out again, with their arms full.
By evening there are three hundred and four.
The rest are still in the dormitories, quiet, waiting, their pale small faces at the windows. They do not run. They do not shout. They have been taught not to. They stand in rows, with their hands at their sides, and look at the women with large uncertain eyes.
“Eight hundred and forty,” says the Colonel. He has a list. He holds it with a shaking hand. “It will take a month.”
“It will take as long as it takes,” says Altai.
“Yes.” He lays down the pen. He rubs his face. “I think I shall stay.”
> mercy | Smile. | vigil_close | +vigil_kept
> truth | Say it is right. | vigil_close | +vigil_kept
> quiet | Bow. | vigil_close | +vigil_kept
> inquiry | Ask about Fang. | vigil_close | +vigil_kept

// ---------------------------------------------------------------- hidden: Lady Ruo
=== vigil_h1 | A Name for the Colonel’s Wife
You say it quietly, on the road, to Colonel Ruo, in the light of four hundred candles. You say the name the broker gave you, on a slip of grey paper, in Madam Uzun’s great scrawl: the name she sold, eleven years ago, to a woman who came to the black hollow in a veil.
He is standing quite still. He has been listening to the chanting, with his hands behind his back. He turns his head. His grey gentle eyes are puzzled.
“I beg your pardon?”
“Her name,” you say. “It is Wenhui.”
The Colonel blinks. He opens his mouth. He closes it.
“Wenhui,” he says.
He says it again. He says it slowly, trying the sound. His lips shape it. His hand comes up to his throat. A shudder runs through his tall thin frame.
“Wenhui,” says Colonel Ruo. His voice is a whisper. “She had a laugh. It went up at the end.” He turns. “She was left-handed. She grew peonies.”
The women have gone quiet. Altai has her hand over her mouth.
“Where is she?” says the Colonel.
> inquiry | Say she is alive. | vigil_h2
> truth | Say you do not know. | vigil_h2
> mercy | Hold his arm. | vigil_h2
> quiet | Wait. | vigil_h2

=== vigil_h2 | Peonies
She is in the fort. She has been there for eleven years. She is the matron of the school’s infirmary, a tall stooped woman of fifty-five in a grey apron, with a long plain kind face and grey hair in a bun. She is known as Sister Hui. She has a way of sitting with the sick children at night and holding their hands. She grows peonies in a window-box.
She was brought, eleven years ago, from the Seventh Chancery, with a sealed order. She was told that her husband was dead. She was told that she was to remain, and care for the sick, and speak to no one of her past. She believed it. She was given tea.
She comes out onto the steps when the Colonel calls. She has a basin in her hands. She looks at him across the yard.
He does not move. He is standing in the road, white-faced, with his arms at his sides.
“Hui,” says Colonel Ruo.
She goes quite still.
The basin slips from her hands and shatters on the stones.
> inquiry | Hold your breath. | vigil_h3
> truth | Step back. | vigil_h3
> mercy | Weep. | vigil_h3
> quiet | Watch. | vigil_h3

=== vigil_h3 | Wenhui
They stand there, a long yard apart, and neither moves. Eleven years. He is sixty. She is fifty-five. They are two thin grey people in the early light, in the middle of a fort full of soldiers and mothers and children, and they look at each other as if across the whole width of a sea.
“You’re thinner,” says Wenhui, in a shaky contralto.
“You’re taller.”
“I’m not. I’m just standing up.” She laughs. It goes up at the end. “I’ve been stooping.”
He crosses the yard. He does it slowly, like a man in a dream. He stops in front of her. He reaches out one trembling hand, and touches her cheek.
“I forgot you,” he says.
“I know.”
“I forgot your name.”
“I know.”
“I remembered the peonies.” His voice breaks. “I used to water them in the dark, and I didn’t know why.”
She puts her hand over his. She turns her face into his palm.
“They’re doing well,” she says. “They’ve got three buds.”
> inquiry | Look away. | vigil_close | +vigil_wife
> truth | Smile. | vigil_close | +vigil_wife
> mercy | Weep. | vigil_close | +vigil_wife
> quiet | Leave them. | vigil_close | +vigil_wife

// ---------------------------------------------------------------- close
=== vigil_close | The Yard at Sunrise
The sun clears the hills. The yard of Fort Ruo is gold. The black coats have thrown back their scarves. Women run to meet them. Soldiers stand about with their caps in their hands, looking at their boots. A bugle begins to blow reveille, and stops in the middle, as the boy realises what it is for.
+[how] vigil_walked | You walked eleven miles with a candle, and a Colonel poured out his tea.
+[how] vigil_gate | You walked into the guns, and a sergeant countermanded the order, and a gate opened.
+[how] vigil_letters | Two hundred and nineteen letters went into the hems of seventy aprons, and a boy wrote back that he had a loose tooth.
+[how] vigil_kept | You kept the watch to dawn, and a boy on the wall heard his own name.
+[how] vigil_wife | You said a name to a man who had forgotten it, and a basin broke on the stones.
Yue Zhaoning is sitting on the steps of the school with a boy of nine in her lap. He is thin and solemn, with enormous ears. He is holding her hand in both of his. He has a tooth in his fist.
“It came out,” he says, to you. “This morning. In the porridge.” He holds it up. “I was saving it.”
“What for?”
“For her.” He nods at Yue, who is making a sound. “She said she’d come. She said, when you’ve lost your tooth. She said it was a sign.” He peers at the tooth. “I think it’s a very small one.”
Yue Zhaoning puts her face in his hair.
> truth | Smile. | vigil_close2 | +b4q_vigil
> mercy | Kneel. | vigil_close2 | +b4q_vigil
> quiet | Step away. | vigil_close2 | +b4q_vigil
> inquiry | Ask about the rest. | vigil_close2 | +b4q_vigil

=== vigil_close2 | The Colonel’s Choice
They sit down with him that evening: the Elder, Duan Wuyi, Hao Lan, Yue, Temur, the Matriarch’s representative, a handful of mothers, and the Colonel himself, in his plain grey uniform with the eyes unbuttoned. They sit in the fort’s bare mess-hall, round a scarred table, with a lamp in the middle. Outside, the sounds of a school waking up drift in at the window: laughter, footsteps, a child’s high shout.
He lays his sword on the table. It is a beautiful thing, thin and curved, with a hilt of silver. He pushes it across. “I resign,” he says. “My commission. My command. I am no longer fit.”
“Colonel,” says Duan Wuyi.
“I have done terrible things.” His grey eyes are steady. “I did them in good faith. It is no excuse.” He folds his hands. “I would like to stay. As a servant of the school. As a clerk. I can keep the register. I am very good with figures.”
There is a pause.
“You are also the Inspector’s man,” says the Elder, quietly.
“I was.” The Colonel smiles, faintly. “I find I should like to be a good deal else.”
> truth | Accept. | hub_b4_b | bond:duan+2
> mercy | Smile. | hub_b4_b | bond:duan+2
> quiet | Look at Duan. | hub_b4_b | bond:duan+2
> inquiry | Ask what he knows. | hub_b4_b | bond:duan+2

`,
  scenarios: String.raw`
$ SU_VIGIL_CANDLES | trust+4 respect+3 fear+3 | elder | The Elder carries a candle with four hundred mothers to the walls of a school.
hostile: I took the candle because I could not think of a way to refuse. I carried it for eleven miles. Somewhere around the seventh, I stopped being able to feel my hand. I did not put it down.
wary: There are four hundred of them. Not one is crying. They walk and they say a name, and the name is the whole of what they have. I thought it was the most dignified thing I had ever seen. I think I was wrong. It is the most undignified. It is dignity with nothing left to protect.
neutral: I held the candle level with my heart, as I was shown. After a time the wax ran over my fingers, and I found that I did not mind. It was a very small pain, and there was a great deal of it about.
warm: A woman beside me said her daughter’s name. She said it as one says good morning. I said mine. I said Mengjiao. I have not said it aloud to a stranger in fifteen years.
devoted: If I am to be remembered for one thing, I should like it to be that I walked to the wall of a school with a candle, in the company of women whose names I did not ask, and that I said a name I had never said aloud.
`,
  remarks: String.raw`
% vigil_altai_later | since:b4q_vigil>=4 | hao | Mother Altai gave me a candle. It was a stub. She said it was the one she lit for her son. I have put it in my satchel with the pencil. I do not intend to light it. I intend to carry it.
% vigil_sorgan_later | since:vigil_letters>=6 | gu | Sorgan sent word from the fort. The laundry has grown. Eighty women now. They have begun to sing as they scrub.
`,
};
