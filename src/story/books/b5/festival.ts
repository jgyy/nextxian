import type { Arc } from "../types";

/**
 * Book Five, arc thirteen: the Last Feast. On the eighth night the sects hold their feast on the festival-ground below the Stair,
 * and the Hollow Lotus arrives in black veils, with seven of the nine children who were raised in a mourning-shop on the Salt Coast.
 * Madam Ash has a gift for the Ninth, and the rule she keeps for nine children is that nothing offered to a child is a gift; so
 * the gift must be refused. Four approaches: refuse it plainly (a1, truth), hold the ground when the Wardens close in (a2, force),
 * hide the siblings among the masks (a3, deceit), and sit with the angriest of them (a4, mercy). A hidden route brings Wen Rui.
 * Cast: Madam Ash, Ah Zhi, Lu Yan, Bao Er, Qiu, Shu Ning, Tian and Moth, Mei Qiu, Wen Rui.
 */
export const festival: Arc = {
  id: "festival",
  name: "The Last Feast",
  scenes: String.raw`
=== festival_entry | Lanterns
It is the eighth night, and the camp has put on its best. There are drums. There are dancers in masks, and stilt-walkers, and fire-eaters, and long tables laid with roast pigs and steaming dumplings and jars of rice wine. Pilgrims in white sit with sect-brothers in silk. Children run underfoot with sparklers. Somewhere a thousand voices are singing a hymn.
You have been told to come. A black ribbon was tied to your tent-pole at dusk, in a mourning-knot, with a card: *The mourning-shop is open. We are late. Please forgive us.*
You find them at the far end, under a banner of black silk. Seven figures in veils stand in a loose ring, with their backs to the crowd. One is tall, and broad, and holds a pole. One is tiny, with a fat child on his shoulders. One is thin, and hooded, and holds up a hand-mirror.
And in the middle, small, upright, in a plain black gown and a veil of grey gauze, with a face you could not mistake in a thousand, stands Madam Ash.
“There you are,” says Hui Niang, softly. “I have brought a gift.”
> truth | Say you cannot take it, before she names it. | festival_a1s1
> force | Notice the Wardens at the edge of the ground, forming into a line. | festival_a2s1 | needs:4
> deceit | Notice the masked dancers streaming past, and the spare masks on a nearby stall. | festival_a3s1
> mercy | Look at the boy with the fat child on his shoulders, who is glaring at you with naked hatred. | festival_a4s1
> inquiry | Tell her there is a Censor at the edge of the camp, with a black ribbon on his table, who has been waiting fifteen years. | festival_h1 |  | roots_ribbon | You have no ribbon to bring her.

// ---------------------------------------------------------------- a1: refusing
=== festival_a1s1 | Before She Names It
“No,” you say.
Madam Ash’s veil moves. Behind it, you imagine, an eyebrow lifts. “I have not said what it is.”
“I know. I will not take it.”
“Dear child.” She sounds amused, and faintly moved. “I do not think you understand. It is a very good gift. It is a way up the Stair that avoids every trial. A door that nobody knows. I have had it prepared for eleven years.”
“No.”
“You might at least hear me out.”
“If I hear you out,” you say, “I shall want it.”
There is a silence. The drums have fallen to a murmur. Around the ring of black veils, six pairs of eyes are fixed on you. One of them, a tall woman with a pole, gives a short surprised laugh.
“Oh, that’s *good,*” says Ah Zhi. “Oh, Hui Niang, she’s got you.”
“She has,” says Ash. Her voice is quite steady. But when she lifts her gauze veil, her small grey face is wet. “Come here.”
> truth | Go to her. | festival_a1s2
> mercy | Look at Ah Zhi. | festival_a1s2
> quiet | Stay where you are. | festival_a1s2
> inquiry | Ask why the gift must be refused. | festival_a1s2

=== festival_a1s2 | The Rule
“Because I have a rule,” says Ash. “It was the first I made, in the mourning-shop, on the night I took them out of the fire. I had nine children in a cellar, and a bag of rice, and I knew that I should be tempted.” She wipes her cheek with a knuckle. “To spoil them. To take every choice. To give them everything, so that they would never have to learn to want.”
“So you made a rule.”
“*Nothing offered to a child is a gift.*” She smiles. “It is a hard one. It means a child must be allowed to say no.”
“And I am a child?”
“You are the Ninth,” says Hui Niang. “You were five when I let you go. You have been walking to me ever since.” She puts her veil back. “I have waited fifteen years to offer you something, and see if you can refuse it.”
“Why?”
“Because if you can, then you are free of me.” Her voice cracks. “And if you can’t, I shall have raised another prisoner.”
Behind you, the Elder has made a small sound, deep in her throat.
> truth | Take her hand. | festival_a1s3 | npc:SU_FESTIVAL_VEIL
> mercy | Hold the Elder. | festival_a1s3
> quiet | Wait. | festival_a1s3
> inquiry | Ask the others. | festival_a1s3

=== festival_a1s3 | Six Veils
They take them off one by one. Ah Zhi first: a big, weather-beaten woman of twenty-five, with calloused hands and a broad humorous mouth. Then Lu Yan, thin, tired, honest-eyed, in a physician’s apron over her black gown. Then Bao Er, who grins at you with her whole face. Then Qiu, who holds her mirror up and says nothing at all. Then Shu Ning, whose pale cold face does not change. Last is the boy.
He takes it off with a jerk. His hair is wild. He glares, with a small fat child on his shoulders.
Seven in all, counting Mei Qiu, who stands in the back in her old Censor’s grey with her arms folded and a faint, strained smile.
“Well,” says Ah Zhi, dryly. “Here we all are.”
“Here,” says Bao Er, and bursts into tears.
It is a grand wet bawl, the kind she gives at funerals, with her mouth wide open. She flings herself at you. She is crying and laughing, shouting over her shoulder. “She said no! I *told* you! I said she’d say no!”
“You said she’d say yes,” says Shu Ning.
“I lied for fun!”
> truth | Hold her. | festival_a1s4
> mercy | Look at the boy. | festival_a1s4
> quiet | Look at Qiu. | festival_a1s4
> inquiry | Ask Lu Yan how they got here. | festival_a1s4

=== festival_a1s4 | How They Came
“By the Pass,” says Lu Yan. She wipes her hands on her apron. It is a nervous habit. “Eleven days. We got a lift on a salt-caravan from the Ford.” She rubs her eyes. “It was awful. Bao Er sang the whole way.”
“I did not.”
“You sang the entire third act of *The Widow’s Revenge.*” She looks at you with her honest tired gaze. “I wanted to throw you off the cart. Then I thought: she’s been singing that for fifteen years to keep from crying. And I let you finish.”
“I cried,” says Bao Er, with dignity.
“Everyone did. It’s a very long act.”
Qiu holds up her slate. On it, in chalk, she has written: *We came because Ash said you were coming. We came because we wanted to.* She rubs it out and writes: *Both.*
“I wished to come the whole way,” says Ah Zhi. “I wanted to see how far a person could carry a thing.” She nods at the boy. “He wanted to kill you.”
“I still do,” says Tian.
“We know.”
> truth | Turn to him. | festival_a1s5
> mercy | Hold your breath. | festival_a1s5
> quiet | Wait. | festival_a1s5
> inquiry | Ask why. | festival_a1s5

=== festival_a1s5 | Tian
He slides the child from his shoulders. He sets her down. She is perhaps four, fat and solemn, with a plait. She clutches his trouser-leg. He draws one of the knives.
“You,” he says.
“Tian,” says Ash.
“I’m not going to *use* it.” His voice cracks. He is nineteen, thin, white-faced, with a rim of red round his eyes. “I just want to say something.”
“Say it.”
“They told me.” He looks at you. “When I was ten. In the shop. Ash said: *the ninth one lived. The others burned.* She said it as a fact. I thought: why? Why her?” His voice rises. “Why did *you* get the basket?”
Nobody speaks.
“I’ve hated you for eight years. I’ve got a list.” He pulls a creased paper from his coat. “Everything I’ve done to be better. The knives. The running. I was going to be the one who got there first. Who got *her.*”
“Got me?”
“The Ninth.” He stabs the paper. “And you walked right in.”
The child at his knee looks up at him, and begins to cry.
> truth | Tell him the truth. | festival_a1s6
> mercy | Kneel to Moth. | festival_a1s6
> quiet | Hold still. | festival_a1s6
> inquiry | Ask him what he wants. | festival_a1s6

=== festival_a1s6 | The Basket
“I do not know why,” you say. “I was five. I was given a black seed in a cold room, and told it was a gift.” Your voice is steady. “I have been told ever since that I was chosen. I have never believed it.”
“You were chosen.”
“I was *left.*” You look at the knife. “There is a difference. I was left in a basket on a stone, by a woman who thought she could carry only one more.” You glance at the Elder. “She carried two. The second was the boy at the Archive.”
Tian’s knife wavers.
“The others I did not know,” you say. “I never knew there were others. I thought I was the only one.” You swallow. “I thought for fifteen years that it was my fault I was alone.”
“You’re not alone.”
“I know. I’ve had a month to learn.” Your voice breaks. “You have no idea how glad I am you’re angry.”
He stares at you.
“Because if you weren’t,” you say, “I’d think I had no right to you.”
The knife drops. It sticks quivering in the boards.
> truth | Step toward him. | festival_a1s7
> mercy | Pick up Moth. | festival_a1s7
> quiet | Wait. | festival_a1s7
> inquiry | Ask Moth her name. | festival_a1s7

=== festival_a1s7 | Moth
She stops crying when you lift her. She regards you from a height, round-faced and grave, with a thumb in her mouth. She smells of woodsmoke and boiled egg. “Moth,” she says, round the thumb. “Mine’s Moth.”
“Hello, Moth.”
“Tian says you’re a bad lady.” She takes the thumb out. “I don’t think you are.”
“Why not?”
“You’re holding me.” She says it with the clear logic of four. “Bad ladies don’t.”
Tian makes a strangled noise. He sinks down onto the grass. He puts his head on his knees.
You sit beside him, with the child in your lap. You say nothing. You simply wait. The drums beat in the distance. The lanterns sway.
After a while he says, thickly, “I wanted to be the one.”
“I know.”
“I wanted to be the one that wasn’t left.” He wipes his nose. “I thought if I was fast enough, strong enough, somebody would *pick* me.”
“Somebody did.”
“Ash. I know.” He rubs his face. “That’s not the same.”
“No,” you say. “It isn’t.”
> truth | Hold still. | festival_a1s8
> mercy | Put an arm round him. | festival_a1s8
> quiet | Wait. | festival_a1s8
> inquiry | Ask what is. | festival_a1s8

=== festival_a1s8 | What Is
“To be picked by a stranger,” says Tian. His voice is small. “To have someone say: *I want you. Not because I have to.*” He looks up. “That’s what I wanted. I thought it was the Ninth.”
“It isn’t.”
“No. I know that now.” He gives a short hard laugh. “It’s Moth.”
The child, on your lap, has twisted round. She puts out a small damp hand. She pats his cheek.
“I picked him,” she says. “He was by the road. He was sad. I said: *you can carry me.*” She beams. “He’s very good at it.”
Tian covers his face. His shoulders are shaking. You put out a hand, and he takes it, gripping hard, like a drowning man.
“Don’t let go,” he whispers.
“I won’t.”
“I’ll still be angry.”
“I’d be disappointed if you weren’t.”
He laughs. It is wet and ragged. The seven others have come in a ring about you, silent, and as you look up Ah Zhi’s big calloused hand comes down on your shoulder.
“There,” she says, gruffly. “That’s the lot of us.”
> truth | Look up. | festival_a1s9
> mercy | Weep. | festival_a1s9
> quiet | Smile. | festival_a1s9
> inquiry | Ask Ash about the gift. | festival_a1s9

=== festival_a1s9 | Unopened
She never tells you what it was. She sits with you around a fire until dawn, with seven in a ring and the Elder at her side, drinking the bad wine. They talk of everything. The shop. The coast. A cat called Moustache. A funeral at which Bao Er lost her voice. They tell you the stories you missed. They do it in turns, laughing and weeping, and Ash, in her veil, sits in the middle and listens.
At the last, as the stars are paling, she takes out of her sleeve a small flat parcel wrapped in black silk. She holds it out.
“I never opened it,” she says. “I wrote the name on it eleven years ago.”
“What is it?”
“What I would have given you.” She presses it into your hand. “You may keep it, if you like. You are not obliged to open it.” Her voice is soft. “That is the gift. It is the only one I could give.”
You hold it. It weighs almost nothing.
“A refusal,” you say.
“A choice,” says Madam Ash. “Which is the same thing, with the lid on.”
> truth | Pocket it. | festival_close | +festival_told
> mercy | Hold her hand. | festival_close | +festival_told
> quiet | Look at the dawn. | festival_close | +festival_told
> inquiry | Ask when she will open it. | festival_close | +festival_told

// ---------------------------------------------------------------- a2: the line
=== festival_a2s1 | Wardens
They come in a long grey line across the meadow, behind the dancers, among the tables. Two hundred of them, in the white-and-gold tabards of the Weighing Wardens, with long staves. They do not hurry. They do not shout. They come on at a steady pace, and where they pass the festival falls quiet: the drums stop, the dancers freeze, a child’s sparkler drops in the grass.
At their head, on a tall bay horse, rides a bull-necked captain with a red face and a drooping moustache. He halts. His small eyes sweep the ground. They rest, at last, on the black banner.
“Madam Ash,” he says. “Of the Hollow Lotus.”
“Captain.” She does not turn her head. “How kind.”
“I have an order for your arrest.”
“I thought you might.”
“I do not like it.” He wipes his forehead. “But I have it. In writing. From the Deputy Inspector.” He unrolls a scroll. “For sedition, forgery, and the abduction of nine children.”
“I did not abduct them.”
“It does not say that.”
“No,” says Hui Niang, “it wouldn’t.” She lifts her veil. “Will you have tea?”
> force | Step beside her. | festival_a2s2 | needs:4
> truth | Say it is a mistake. | festival_a2s2
> quiet | Look at the Wardens. | festival_a2s2
> mercy | Look at Tian. | festival_a2s2

=== festival_a2s2 | A Line of Staves
He will not drink the tea. He has been told not to. He dismounts, with a grunt, and stands with the order in his hand. His men have formed a half-ring round the black banner: a hedge of staves, eight feet deep. They are not threatening. They are simply there.
“I should like to do this quietly,” says the captain. “I have no quarrel with you, madam. I am told you are a lady of some distinction.”
“I am a seller of paper.”
“So I understand.” He glances at the others. “And these are the children.”
“They are twenty-five and twenty-four,” says Ah Zhi, with great patience. “And twenty-three. They are not children.”
“They are on my list.”
“Then your list is wrong.”
“It usually is.” He sighs. “But it is the list.”
Tian has drawn both knives. Moth is on his back, with her arms round his neck, and her face buried in his hair. He is trembling.
“Don’t,” says Ash, without turning.
“They’re going to take you.”
“They are going to *try.*”
> force | Step in front of Tian. | festival_a2s3
> truth | Warn the captain. | festival_a2s3
> quiet | Hold your breath. | festival_a2s3
> mercy | Take Moth. | festival_a2s3

=== festival_a2s3 | The Rest of the Hollow
It is Ren Qiao who changes the arithmetic. He passes the captain’s horse. He does not look up. He crosses to the black banner, and plants himself at Ash’s side, with his feet apart.
“Warden Eleven,” says the captain, startled. “Your post is at the barrier.”
“It was.”
“What are you doing?”
“Crowd control.” Ren Qiao’s voice is flat. “There are two hundred of you and seven of them. I wish to make the numbers even.”
“That isn’t funny.”
“It isn’t a joke.”
From the edge of the ground a second tabard comes: Hanming, in a borrowed one, with a glass bottle in either fist. A third, Gu, white-faced, with a ladle. A fourth, Yue, with a long, nasty, fish-gutting knife. The Elder steps up with her hands folded. Duan Wuyi in his Censor’s sash. Hao Lan with her pen.
And from the dark behind, one after another, hundreds of white robes: the pilgrims, the cooks, the priests. They do not carry weapons. They carry soup-ladles, and torches, and children.
The captain looks at the growing wall of faces.
“Oh, bloody hell,” he says.
> force | Stand firm. | festival_a2s4
> truth | Say nothing. | festival_a2s4
> quiet | Watch. | festival_a2s4
> mercy | Look at the Elder. | festival_a2s4

=== festival_a2s4 | A Parley
It lasts an hour. The captain, a conscientious man, sits on his horse with the scroll in his hand and listens to six people talking at once. Duan Wuyi cites the Charter. The Elder cites the Law of Persons. Hao Lan cites three clerical errors in the warrant, and a typo in the date. Ash cites nothing. She stands very still, with her veil back, and smiles.
“It is irregular,” says the captain, at last.
“Yes.”
“It is not a legal warrant. It is a letter.”
“Yes.”
“It is not countersigned by the Censor-General.”
“I am the Censor-General,” says Duan.
“Then it ought to have been.” The captain rubs his face. “Madam. I was sent to bring you in. I do not want to hurt anyone.” He looks at the ring of pilgrims. “I do not think it is possible to bring you in.”
“No.”
“I could report that you resisted.”
“You could.”
“I could report that you had a very large escort.” He looks at the line of ladles. “That would be true, at any rate.” He turns the scroll in his hands. “I find myself tempted to be accurate.”
> force | Smile. | festival_a2s5
> truth | Thank him. | festival_a2s5
> quiet | Wait. | festival_a2s5
> mercy | Offer tea. | festival_a2s5

=== festival_a2s5 | A Stalemate With Soup
He takes the tea. After a pause of immense dignity, he dismounts, hands the reins to a trooper, and sits on a stool by the fire. Ash pours it herself. The Wardens relax by degrees. They lower their staves. They sit down on the grass in rows. A cook brings dumplings. A child offers a stilt-walker’s hat.
It is the strangest siege in the history of the Concord. Two hundred armed men and women sit on a meadow in the lantern-light, eating dumplings with the people they came to arrest, while their captain compares notes on warrants with a Censor-General. The pilgrims offer wine. The Wardens decline, with regret. A few accept.
“I should like it understood,” says the captain, heavily, “that I have not done my duty.”
“It is understood.”
“It has been a very long week.” He drinks. “First the beam. Then the cork. Then the Cribs.” He glances at Ren Qiao. “I have an uncomfortable suspicion I am being managed.”
“You are,” says Ren Qiao, with great gravity. “But kindly.”
The captain barks a laugh. He wipes his eyes. “I shall tell the Deputy,” he says, “that you were most impressive.”
> force | Nod. | festival_a2s6 | needs:4
> truth | Bow. | festival_a2s6
> quiet | Look at Tian. | festival_a2s6
> mercy | Smile. | festival_a2s6

=== festival_a2s6 | Tian With the Knives
He has not put them away. He is crouched at the edge of the firelight, with the girl on his back and the knives drawn, watching the Wardens with huge distrustful eyes. His back is rigid. He is shaking, very slightly, the fine tremor of a wire in a high wind.
You go to him. You sit down a yard off. You say nothing.
“Don’t,” he says. “I’m fine.”
“Yes.”
“I’ll do it if I have to.”
“I know.”
“I’ve never killed anyone.” He does not look at you. “I’ve cut a few. I’ve never—” His voice cracks. “She said it’d be easy. Ash said. She said, when it comes, you’ll just know.” His fingers tighten. “I don’t. I don’t know a thing.”
“Neither do I.”
“You’re the Ninth.”
“I’m a person who has been very lucky.” You hold out a hand, palm up. “Give me one.”
He stares. Slowly, grudgingly, he turns the nearer knife in his fingers, and lays the hilt in your palm. It is warm.
“There,” you say. “Now you’ve got one hand free.”
He lets out a breath that is half a sob.
> force | Hold the knife. | festival_a2s7
> truth | Say thank you. | festival_a2s7
> quiet | Wait. | festival_a2s7
> mercy | Hold his hand. | festival_a2s7

=== festival_a2s7 | The Free Hand
He uses it to hold Moth. That is all. He reaches back and steadies the child, who has gone to sleep with her cheek on his collar. He rocks, a little, unconsciously, from side to side. The dancers have begun again, a soft drum, a pipe. The sound of it drifts across the fire.
“I was going to be the best swordsman in the Concord,” he says.
“You could still be.”
“I don’t want to be.” He says it plainly. “I want to be quiet. I want a house. I want a goat.” He flushes. “It’s stupid.”
“It isn’t.”
“Ah Zhi says it’s the bravest thing I’ve said.” He bites his lip. “She says it’s harder than fighting.”
“Is it?”
“I don’t know.” He looks at the knife in your hand. “I’ve never tried.”
You turn it over. It is a plain, well-made blade, double-edged, with a bone hilt. You hold it out to him.
“Keep it,” you say. “You may need to cut bread.”
He takes it. He looks at it for a very long moment. Then, quite slowly, he sheathes it.
> force | Smile. | festival_a2s8
> truth | Pat his shoulder. | festival_a2s8
> quiet | Look at the fire. | festival_a2s8
> mercy | Hold Moth. | festival_a2s8

=== festival_a2s8 | The Captain Goes
He takes his Wardens home at midnight, in good order, with an empty scroll and a pocketful of sweetmeats. He salutes Ash, formally. He salutes Ren Qiao, with a certain warmth. He gives the Elder a grave bow.
“I shall report,” he says, “that I found no evidence.”
“Thank you, Captain.”
“It is the truth.” He settles his helmet. “I looked, and there was a great deal of soup.”
He rides away across the dark meadow. His men follow, in their white-and-gold, singing under their breath. The pilgrims watch them go. They are laughing.
The festival resumes. The drums return. The lanterns sway. In the circle of black veils at the foot of the Stair, the seven sit down on the grass, and Ash passes round the wine.
“I did not expect that,” she says to you.
“What?”
“That you would send for the whole camp.” She smiles. “You did not send for me.”
“I did not send for anyone. They came.”
“Yes.” Her gaze is level. “That is what I meant.”
She raises her cup.
> force | Drink. | festival_a2s9 | needs:4
> truth | Smile. | festival_a2s9
> quiet | Look at the camp. | festival_a2s9
> mercy | Thank her. | festival_a2s9

=== festival_a2s9 | A Line Held
You sit up late. The fire burns low. Only Ash and the Elder remain awake. They sit side by side on a log, in the glow of the embers, with their hands folded.
“I should have come sooner,” says Ash.
“You came.”
“I should have come fifteen years ago.” Her voice is low. “I should have come back for the others. I took nine, and I thought it was all I could do.”
“It was a great deal.”
“It was nothing.” She looks into the fire. “I let you carry the guilt. I let you believe you had left seven to burn. It was easier.”
“It was not easier for me.”
“No.” Hui Niang turns her head. “I am sorry, Wanru.”
The Elder does not answer. Her hands move in her lap. Then, slowly, with a stiff, shy, awkward gesture, she reaches out and takes the other woman’s.
They sit like that until dawn.
> force | Look away. | festival_close | +festival_brawl
> truth | Cover them with a cloak. | festival_close | +festival_brawl
> quiet | Watch the embers. | festival_close | +festival_brawl
> mercy | Smile. | festival_close | +festival_brawl

// ---------------------------------------------------------------- a3: masks
=== festival_a3s1 | The Masquerade
They are everywhere: papier-mâché, lacquered wood, painted silk. Dragons, tigers, cranes, demons, ancestors, fools. The dancers wear them as they weave among the tables; the children wear them on their heads; the stilt-walkers wear great horned monstrosities three feet wide. At a stall at the edge of the ground a wizened old man is selling them by the dozen, from a rack, in a hundred designs, for a copper a piece.
“Perfect,” breathes Hao Lan.
“For what?”
“For hiding seven people in plain sight.” She has bought a fox, a monkey and a hare. She holds them up. “Everyone on the ground is masked. The Wardens will be looking for veils.”
“Veils are the Hollow’s sign.”
“Exactly. So we give them something else.” Her eyes sparkle. “What does a Warden look for, at a masquerade?”
“Faces.”
“And what does he see?”
“Masks.”
“So what does he do?” says Hao Lan sweetly. “He looks for the one who isn’t wearing one.” She puts the hare on your head. “It’s a perfectly dreadful strategy. Nobody has ever thought of reversing it.”
Across the ground a trumpet sounds. A file of Wardens has entered the festival.
> deceit | Take the hare. | festival_a3s2
> truth | Say it is dishonest. | festival_a3s2
> quiet | Watch the Wardens. | festival_a3s2
> mercy | Look at the seven. | festival_a3s2

=== festival_a3s2 | Dressing the Hollow
They go in the tea-tent behind the stall, in a hurry. There is no time for subtlety. Ah Zhi becomes a tiger, six feet of broad shoulders under a painted snarl. Lu Yan is a crane, thin and tall, with a long beak. Bao Er will be a clown, naturally, with a red nose. Shu Ning chooses a plain white oval with two slits, and says nothing. Qiu’s is a mirror: she holds it before her face, and is a silver blank. Mei Qiu takes a grey wolf.
Ash is last.
“I cannot wear one,” she says.
“Why?”
“It is my sign.” She lifts the gauze. Her face is quite calm. “I have worn the veil for fifteen years. The Hollow knows me by it. If I put it away, they will think I am dead.”
“Then they must think it.”
“It is not so easy.”
“It is exactly easy.” You take the veil. You fold it, and put it in your sleeve. “You have worn it long enough.”
She looks at you for a long moment. Then she bows her head.
You tie a mask on her. It is a small plain silver hare, with long ears.
> deceit | Fasten it. | festival_a3s3
> truth | Say nothing. | festival_a3s3
> quiet | Step back. | festival_a3s3
> mercy | Hold her hands. | festival_a3s3

=== festival_a3s3 | Tian and the Boar
He will not take one. He stands in the corner of the tent with Moth on his shoulders, arms crossed. “I’m not wearing a thing on my face,” he says.
“It’s a disguise.”
“I know what it is.” He scowls. “I’ve never hidden. I’m not going to start.”
“They’ll know you by the knives.”
“Let them.”
“And Moth?”
He pauses. The little girl, from her perch, has been examining the rack of masks with enormous attention. She leans down. She picks a small round brown one, with two pricked ears and a very small snout, and holds it up to her father’s face, as it were. Her expression is reproving.
“Tian,” she says. “*Pig.*”
“No.”
“*Pig.*”
“I will not be a pig.”
“You’d be a nice one,” says Moth. “You’d have a curly tail.” Her lip begins to wobble.
A very long silence follows. Ah Zhi, in the tiger-mask, makes a sound like a leaking boiler. Bao Er, behind her red nose, has stuffed a hand over her mouth. Tian looks at his charge. His shoulders drop.
“Fine,” he says thickly. “I’ll be a pig.”
> deceit | Fit it. | festival_a3s4
> truth | Laugh. | festival_a3s4
> quiet | Hold Moth. | festival_a3s4
> mercy | Say he is a handsome pig. | festival_a3s4

=== festival_a3s4 | Nine Masked Strangers
You go out in a body, laughing and shoving, into the whirling crowd. A tiger, a crane, a clown, a mirror, a wolf, a blank white oval, a very small silver hare. A pig with a child on its shoulders. A dragon, which is you. Hao Lan has chosen a fox. Duan Wuyi, who has not been consulted, finds himself wearing a venerable scholar with an enormous beard.
“I look ridiculous,” he says, with dignity.
“You look wise.”
“It is the same, in a mask.”
The Wardens go by in a long file. Their captain, on his bay, scans the crowd with narrowed eyes. Behind him come the troopers, peering into faces, lifting masks, pulling off hoods. A stilt-walker is made to take his horns off. A fire-eater is searched.
They come to the tiger. They pause.
“You,” says a trooper, to Ah Zhi. “Mask off.”
There is a pause. Ah Zhi’s tiger regards him with serene, painted ferocity.
“I would,” she says, in a deep gruff voice, “but I have a rash.”
“A rash?”
“From the paste.” She leans close. “It is contagious.”
The trooper recoils. “Pass,” he says, hastily.
> deceit | Hold your breath. | festival_a3s5
> truth | Laugh. | festival_a3s5
> quiet | Follow. | festival_a3s5
> mercy | Watch Qiu. | festival_a3s5

=== festival_a3s5 | The Mirror
It is Qiu who is stopped. She is in the middle of the file, a thin small figure with the glass held up before her face, and the lanterns dance in it. A trooper takes her by the shoulder. He tries to twist the mirror down. She holds it up, firmly, in both hands. It flashes in his eyes.
He staggers back. “Hey! That’s—”
She writes on her slate with one hand. She holds it up. It says: *I am mute.*
“Oh.” He looks embarrassed. “I’m sorry.” He peers at the mirror. “But I must see—”
She writes: *The mask is the mirror. The mirror is the face.*
“I... what?”
She writes: *I cannot take it off.*
“Why not?”
She writes, in large round letters: *It is stuck.*
The trooper stares. He glances at his sergeant. His sergeant, a big man with a bulbous nose, who has been listening, shrugs and mouths: *Leave it.* The trooper steps back. He salutes the mirror.
Qiu holds up her slate again. It says: *Thank you.* In smaller letters, underneath: *I enjoyed that very much.*
> deceit | Smile. | festival_a3s6
> truth | Follow. | festival_a3s6
> quiet | Hold still. | festival_a3s6
> mercy | Pat Qiu’s arm. | festival_a3s6

=== festival_a3s6 | Shu Ning’s Seal
She is the cleverest of the seven. You see it at once, the moment the sergeant halts before her. He has a list. He has a quill. He reads from the Deputy Inspector’s warrant: nine names, nine descriptions. “Female,” he reads. “Height five feet four. Pale complexion. Cold manner.” He lowers the paper. “Remove the mask.”
“No,” says Shu Ning.
“It is an order.”
“Show me the warrant.”
He holds it out. She reads it, behind her blank white oval, slowly. She turns it over. She runs a thumb across the seal. She says in her low flat voice:
“This is a forgery.”
“It is not.”
“The seal is wrong.” She taps it. “The Deputy Inspector’s ring has a chip in the lower left. This one doesn’t. And the wax is the wrong green. It’s a Treasury green. It’s a common mistake.”
The sergeant takes it back. He holds it to the lantern. He peers. His face changes.
“It does have a... ” He swallows. “Who are you?”
“A seal-wright,” says Shu Ning. “Retired.” She folds her arms. “I can make you a better one for four taels.”
> deceit | Hold your breath. | festival_a3s7
> truth | Smile. | festival_a3s7
> quiet | Watch the sergeant. | festival_a3s7
> mercy | Thank her. | festival_a3s7

=== festival_a3s7 | A Dance
There is only one thing for it. The file has slowed. The Wardens are drifting among the dancers, peering. Somewhere ahead a woman has screamed as her mask was torn off. A crowd of pilgrims is pressing round. The captain, up on his bay, has raised a hand to halt the line.
“Dance,” says Bao Er, in your ear.
“What?”
“Dance! Everyone! Now!” She is hauling you into the crowd. She is a clown, in a red nose and a ruff, shouting at the top of her lungs. “Sing! Make it a hymn! Take hands!”
She begins. She sings the first line of the festival hymn in a voice like a trumpet, and the crowd takes it up. Ten thousand voices rise. The drums crash in. The stilt-walkers lurch into a stamping jig. Within seconds the whole ground is a whirl of masks and arms, whooping, singing, wheeling in great rings.
You are swept up. You are hauled into a circle by a tiger and a crane. You are laughing so hard you cannot breathe.
The Wardens are lost. They are shoved to and fro in the maelstrom like corks.
> deceit | Dance. | festival_a3s8
> truth | Sing. | festival_a3s8
> quiet | Spin. | festival_a3s8
> mercy | Hold Tian’s hand. | festival_a3s8

=== festival_a3s8 | Out the Back
You come out in the dark behind the tea-tent at two in the morning. The meadow is still shaking with song. Nine masked strangers stand in a ring among the guy-ropes, panting, wet with sweat, flushed with laughter. Someone has lost a shoe. Someone has a lantern on his head.
The Wardens are two hundred yards off, swearing at each other.
“They’ll be looking all night,” gasps Bao Er.
“They’ll find a lot of masks.” Lu Yan is laughing silently, doubled over, with her crane’s beak bobbing.
“Not one with a face under it.” Ah Zhi pulls off her tiger. Her broad face is red and shining. “That was—” She can’t finish. She sits down on a tent-peg and shakes.
Tian hangs back. He has not taken off the pig. He stands with Moth on his shoulders, a small snuffling stumpy shape in the dark, and you cannot read what is under it. Then, slowly, he lifts it. His face is wet. He is grinning, helplessly, from ear to ear.
“I danced,” he says, incredulously. “I danced with a *nun.*”
“Was she good?”
“She was terrible.” He wipes his nose. “I’ve never had such a good time.”
> deceit | Laugh. | festival_a3s9
> truth | Hug him. | festival_a3s9
> quiet | Look at Ash. | festival_a3s9
> mercy | Hold Moth. | festival_a3s9

=== festival_a3s9 | Unmasked
She takes hers off last. She stands in the lee of the tent, a small grey figure, and slowly unties the silver hare. She holds it in both hands. She looks at it. Then she looks at you. Her lined face is naked and open, with the strange wondering look of a woman who has danced for the first time in thirty years.
“I had no idea,” she says. “That it could be so much fun.”
“What?”
“Not being found.” She laughs, a short surprised laugh. “All my life I have been hiding. I thought it was a burden. I did not know it could be a game.”
“It can be both.”
“Evidently.” She turns the hare over. “I am sixty years old and I have been a mourner and a smuggler and a Censor. I have never once been a fool.” Her eyes crinkle. “It is extremely refreshing.”
“Keep the mask.”
“I think I shall.” She fastens it to her belt. “It is the first gift I have ever accepted.”
You look at her.
“Aha,” says Madam Ash. “I see what I have said.”
> deceit | Smile. | festival_close | +festival_masks
> truth | Hold her hand. | festival_close | +festival_masks
> quiet | Look at the stars. | festival_close | +festival_masks
> mercy | Hug her. | festival_close | +festival_masks

// ---------------------------------------------------------------- a4: Tian
=== festival_a4s1 | A Glare
He has not looked away since you came. He stands at the back of the ring, slightly apart, with his arms folded across a thin chest, and Moth on his shoulders like a small fat cherub. His face is narrow, pale, sharp-boned, dark-browed, and held together by sheer force of will. Two knife-hilts jut from his belt. He glares.
It is the most honest thing you have seen in weeks.
You walk across the grass toward him. You do not hurry. You stop a yard away. Moth, from her perch, peers down at you with a thumb in her mouth.
“Don’t,” says Tian.
“I’m not doing anything.”
“You’re doing the face.”
“What face?”
“The kind one.” His lip curls. “The one that says: *there, there.*” He spits the words. “I’ve had it from everyone. Ah Zhi does it. Lu Yan does it. Ash invented it.” His voice shakes. “I don’t want it from you.”
“All right.”
“What do you want?”
You think. You think of a lot of good answers, none of them true.
“To sit,” you say. “I’m tired.”
He stares.
> mercy | Sit. | festival_a4s2
> truth | Say nothing. | festival_a4s2
> quiet | Look at Moth. | festival_a4s2
> inquiry | Ask why he is angry. | festival_a4s2

=== festival_a4s2 | Sitting
You sit on the grass, a little way off, with your back to a tent-peg. It is cold. The drums are a muffled throb. Overhead the paper lanterns turn on their strings. After a time he lowers himself, with ill grace, onto a coil of rope. Moth slides down his back and settles in his lap.
Nobody speaks. A long minute passes. Another.
“It’s a stupid thing,” says Tian.
“What is?”
“Being angry.” He rubs his nose. “I’ve been at it since I was ten. I’m extremely good. I thought it was the only thing I had.” He picks at a thread. “They all grew up. Ah Zhi grew up. Lu Yan. Even Shu Ning. They got jobs. They got *lives.* I got a list.”
“What was on it?”
“Reasons.” He does not look at you. “Why it wasn’t me. Why the Ninth. Why the basket.” His voice is a thread. “I thought if I had enough reasons, one of them would be a good one.”
“Was it?”
“No.” He laughs bitterly. “They’re all rubbish. I’ve read them over a hundred times.”
He pulls out a creased paper. He holds it out.
> mercy | Take it. | festival_a4s3
> truth | Read it. | festival_a4s3
> quiet | Wait. | festival_a4s3
> inquiry | Ask what he wants done with it. | festival_a4s3

=== festival_a4s3 | The List
It is three pages, closely written, in a scrawl that gets worse as it goes. It is headed *WHY NOT ME.* It has numbered clauses. *1. She was left first. 2. She was left in a basket. 3. She has a seed. 4. She does not have to pretend. 5. Everyone loves her. 6. I would have been better at it.* It goes on for four hundred and eleven items.
Towards the end the handwriting changes. The entries grow shorter. The anger runs out of them. *397. She didn’t ask for it. 398. She was five. 399. She was alone. 400. She was alone in the dark for fifteen years and I had a family and I never thanked Ash.* The last page is smeared. The last item is a single line. *411. I am so tired.*
You fold it. You hold it for a moment. You do not look at him.
“It’s a very honest list,” you say.
“It’s rubbish.”
“It’s the best thing I’ve ever read.”
His face works. “You’re lying.”
“I never lie about lists,” you say. “I grew up on a mountain with a Registrar.”
He makes a noise, half a laugh and half something else.
> mercy | Give it back. | festival_a4s4
> truth | Keep it. | festival_a4s4
> quiet | Burn it. | festival_a4s4
> inquiry | Ask what number 412 is. | festival_a4s4

=== festival_a4s4 | Four Hundred and Twelve
“There isn’t one,” says Tian.
“Why not?”
“Because I ran out of paper.” He flushes. “And I didn’t know what to say.”
“Say it now.”
He looks at you suspiciously. He looks at Moth, who is gazing up at him. He looks at the fire. His fists open and close.
“I’m glad you’re here,” he says. It comes out fast and harsh, as if it hurt. “That’s 412. I’m glad you’re here and I hate it.”
“That’s a good one.”
“It’s the worst one.”
“It’s a very good worst.” You hold out the paper. “Write it down.”
“I haven’t a pencil.”
You find one. A stub, in your coat. He takes it. He bends over the page, on his knee, with his tongue between his teeth, and writes. His hand shakes so that the letters wobble. He underlines it twice.
When he has finished he holds the page up. It says, in jagged capitals: *412. I AM GLAD YOU ARE HERE.* Below it, in smaller print: *I HATE IT.*
“There,” says Tian. He sounds hoarse. “That’s all of them.”
> mercy | Take it. | festival_a4s5
> truth | Smile. | festival_a4s5
> quiet | Look away. | festival_a4s5
> inquiry | Ask what he will do. | festival_a4s5

=== festival_a4s5 | What He Did With It
He gives it to Moth. That is the unexpected thing. He folds it small, and puts it into her fist. “Hold that,” he says. “Don’t lose it.” She regards it gravely. “It’s a list,” he says. “It’s my list.”
“What do I do with it?”
“Keep it.” He swallows. “In case I forget I wrote it.”
She nods. She puts it in the front of her smock. She pats it flat.
“I’ll keep it,” she says. “It’s important.”
“Yes.” Tian wipes his face. “It is.”
You sit for a long time. The festival whirls on, in the dark, among the lanterns. Somewhere a bagpipe is playing. A dance has begun, a vast rolling stamping thing with a thousand feet. Moth leans against his chest, and her eyes begin to close.
“Tell me about the basket,” he says, suddenly.
“What about it?”
“What was it like?” His voice is very low. “To be left.”
You consider. You have never told anyone. You look at the child asleep in his arms, and the thin white face, and the two knives.
“Cold,” you say. “And then somebody picked me up.”
> mercy | Go on. | festival_a4s6
> truth | Tell him everything. | festival_a4s6
> quiet | Hold still. | festival_a4s6
> inquiry | Ask what he remembers. | festival_a4s6

=== festival_a4s6 | What He Remembers
“Nothing,” says Tian. “I was four. They say I had a cough.” He leans his head back against the tent-pole. “Ash says I was the last. She came out of the dormitory with an armful of babies. She put us down on the grass, one at a time, and counted. I was number seven.” A short laugh. “Then she went back in for the rest.”
“There were none.”
“No.” His voice is quiet. “She came out with her hair burned. She said nothing for three days. Ah Zhi took charge. She was ten.” He looks at the fire. “I remember that. Ah Zhi’s hands. She had a kettle.”
“She made tea.”
“She made tea for seven. In a cellar. She put honey in mine.” He swallows. “It was the first thing I remember tasting.”
You nod. You do not trust yourself.
“So I wasn’t left,” says Tian, slowly. “Not really. I was *carried.* By a ten-year-old with a kettle.” He frowns. “That’s not on the list.”
“No.”
“It ought to be.” He pulls at his lip. “I think I’ve got the wrong kind of angry.”
> mercy | Smile. | festival_a4s7
> truth | Say it is allowed. | festival_a4s7
> quiet | Wait. | festival_a4s7
> inquiry | Ask what kind he wants. | festival_a4s7

=== festival_a4s7 | The Right Kind
“The kind that does something,” says Tian. He is staring at the fire. “Not the kind that sits.” He scratches his chin. “Ash says I’m a boy who ought to build. She says I’ve been using my hands to break things, because I didn’t know there was another way.”
“What would you build?”
“A house.” He says it very low. “A small one. With a window. And a place for a goat.”
“You said.”
“I know.” He grimaces. “But it’s true.”
“Where?”
“Somewhere quiet.” His eyes are far. “Somewhere with a hill. Where a person could see the whole valley and know that nobody was coming.” He laughs shakily. “It’s a thing I never thought I’d say. I’m scared to want it.”
“Want it.”
“What if it’s wrong?”
“What if it’s right?” You nudge his shoulder. “I’ll help.”
“You can’t build.”
“I can hold a ladder.”
He lets out a startled snort. “I’ve seen your ladder-work,” he says. “You’re a menace.”
> mercy | Laugh. | festival_a4s8
> truth | Smile. | festival_a4s8
> quiet | Nod. | festival_a4s8
> inquiry | Ask Moth. | festival_a4s8

=== festival_a4s8 | Moth’s Opinion
She has been awake the whole time. That is the thing about Moth. She opens one eye and regards the two of you from the cradle of Tian’s arm, with the stern amusement of a very small judge.
“I want a pig,” she says.
“What?”
“In the house.” She yawns. “A pig. And a goat. And a cow, maybe. A little one.”
“It’s going to be a small house,” says Tian.
“It will have to be bigger.” She sits up. She puts her hands on her hips. “Because I’ve a lot of friends.”
“Who?”
“All of them.” She waves a fat hand at the seven. “Ah Zhi. Lu Yan. Bao Er is loud but she’s nice. Qiu doesn’t talk but she makes faces. Shu Ning doesn’t say thank you but she gave me a seal.” She counts on her fingers. “Mei is sad. Ash is tidy.” She turns. “And her.”
“Me?”
“You carry me when I’m tired,” says Moth. She settles back in the crook of Tian’s arm. “Bigger. For all of us.”
Tian looks at you over her head. He is smiling like a boy.
> mercy | Smile. | festival_a4s9
> truth | Nod. | festival_a4s9
> quiet | Look at Ash. | festival_a4s9
> inquiry | Ask Tian. | festival_a4s9

=== festival_a4s9 | A Bigger House
They plan it all night. Ah Zhi wants a jetty. Lu Yan wants a sickroom. Bao Er wants a stage. Qiu draws a tower, and covers it in mirrors. Shu Ning adds a forge, and says nothing. Mei Qiu, shyly, a library. Moth designs the privy.
The Elder watches from the edge of the circle, in her grey coat, with a cup of the bad wine. She does not say a word. At the end of the night, when the map is complete, she rises and crosses the grass, and bends, and adds one more line with a twig.
“What’s that?” says Tian.
“A room,” says the Elder.
“For what?”
“For me.” She straightens. Her face is perfectly calm. “If I am asked.”
There is a very long silence. Then the whole ring bursts into noise: laughter, shouting, tears. Tian is on his feet. He seizes her by both hands. He looks about to speak. He opens his mouth.
“Don’t,” says the Elder. “I shall cry.”
> mercy | Smile. | festival_close | +festival_tian
> truth | Hug her. | festival_close | +festival_tian
> quiet | Look at Ash. | festival_close | +festival_tian
> inquiry | Ask where the house will be. | festival_close | +festival_tian

// ---------------------------------------------------------------- hidden: Wen Rui
=== festival_h1 | A Ribbon on a Table
You tell it quietly, to her alone, at the edge of the ring. You say that there is a camp at the foot of a red cliff, where three hundred people live who have been forgotten. That there is a tall thin man there in a Censor’s robe, worn at the elbows. That on his table lies a black silk ribbon, knotted the way she knots a parcel, and that he has not put it away in fifteen years.
She is perfectly still. The veil does not move.
“Wen Rui,” she says.
“He is here.”
“Here?”
“At the edge of the camp. He came on the second night.” You swallow. “He asked if I would tell you. He said he had no right to ask for anything. He said he would wait at the back, and if you did not wish to see him, he would go.”
The veil is trembling now, a little, in the lantern-light. Behind it, a breath is drawn and let go.
“He has not changed his hat,” says Ash. “He still has that dreadful hat.”
“Yes.”
“Take me,” says Hui Niang.
> inquiry | Offer your arm. | festival_h2
> truth | Say she does not have to. | festival_h2
> mercy | Look at the Elder. | festival_h2
> quiet | Lead her. | festival_h2

=== festival_h2 | Across the Meadow
He is standing at the very edge of the light, by a stack of lanterns, in a long grey Censor’s robe worn through at the elbow. His hat is in his hands. He is tall and thin and stooped and has the stillness of a post. He has not moved. He cannot, you think; he has been rooted to the spot for an hour, watching the ring.
She stops six feet away.
They look at each other. She has her veil up. He has his hat in his hands. The drums beat. The dancers shriek.
“Hui,” says Wen Rui.
“Rui.”
“You look well.”
“I look sixty.”
“So do I.” He turns the hat. “I looked sixty-five last week.”
“You always were vain.”
“I am not vain. I am merely accurate.” His thin mouth twitches. He is shaking all over, a fine fast tremor. “You said you would come back.”
“I said I would send for you.”
“You sent for me.” His voice cracks. “Fifteen years late.”
“I know.” Her voice is quite steady. “I wished to be certain.”
> inquiry | Step back. | festival_h3
> truth | Hold your breath. | festival_h3
> mercy | Weep. | festival_h3
> quiet | Look away. | festival_h3

=== festival_h3 | Fifteen Years
They do not embrace. That is the thing you will remember. They stand six feet apart, in the roar of the festival, and talk. They talk for an hour, in low voices, in the lee of the lanterns. They say it all. The mourning-shop. The red cliff. The seed. The nine children. The three hundred and eleven. The wasted years, the missed dinners, the unwritten letters. It comes out in order, quietly, like an inventory.
At the end of it she says, “I was afraid.”
“Of what?”
“That you would not forgive me.”
“For what?”
“For being right.” Her mouth shakes. “I told you the Law would break. I told you in the first year. You said I was a pessimist. You said the Concord had survived worse.” She presses her fist to her mouth. “It was the worst thing I ever did. I was so *pleased* when you were wrong.”
“I wasn’t wrong.”
“You weren’t?”
“I was right about the Concord,” says Wen Rui. “I was wrong about us.” He steps forward. He takes her hand. It is a very small hand. “Come home.”
She laughs, and bursts into tears.
> inquiry | Look away. | festival_close | +festival_wen
> truth | Smile. | festival_close | +festival_wen
> mercy | Weep. | festival_close | +festival_wen
> quiet | Leave them. | festival_close | +festival_wen

// ---------------------------------------------------------------- close
=== festival_close | The Eighth Night
The lanterns begin to go out towards dawn. Pilgrims sleep in heaps on the grass. The seven of the mourning-shop sit round the embers, in their veils or without them, a loose tangle of arms and legs. Moth is asleep across three laps. Ash sits among them with her hands in her sleeves.
+[how] festival_told | You refused a gift that was never named, and were given the lid.
+[how] festival_brawl | Two hundred Wardens sat down and ate dumplings with the people they came to arrest.
+[how] festival_masks | Nine strangers danced through a cordon of Wardens in a tiger, a crane and a pig.
+[how] festival_tian | A boy with two knives wrote number 412, and a house was drawn in the dust.
+[how] festival_wen | A Censor with a dreadful hat crossed a meadow, and a woman stopped hiding.
The Elder comes to find you. She has a cup in each hand, and she gives you one. It is tea, this time. She sits.
“There is one more night,” she says.
“Yes.”
“The ninth. Tomorrow.” Her voice is level. “The masters will begin the Ceremony at dusk. Nine of them, in the great Hall at the summit. They will ascend by the Stair. It will cost nine children.”
“The Cribs are empty.”
“Aye. That is the question.” She turns the cup. “If the nine are not here, they will take others. They will not stop for want of a Reserve.”
“Who?”
“I do not know.” She looks at the Stair, a pale line against the dawn. “But I intend to be there.”
> truth | Nod. | festival_close2 | +b5q_festival
> mercy | Take her hand. | festival_close2 | +b5q_festival
> quiet | Look at the summit. | festival_close2 | +b5q_festival
> inquiry | Ask who will go. | festival_close2 | +b5q_festival

=== festival_close2 | Who Will Go
They decide it at dawn, in a council of seventeen, sitting in a ring on the wet grass. It is not orderly. Bao Er interrupts. Tian shouts. Moth requires to be fed. Ash at last lifts a hand.
“Not all,” she says. “If we all go, nobody guards the camp. The Wardens will return. The Cribs will be restocked. The tithe will resume.” She looks round. “I propose a division.”
“Of what?”
“Of labour.” She smiles. “It is something I know. I have run a mourning-shop for fifteen years.”
She counts. Ah Zhi and Lu Yan will stay, with Mei Qiu and the Hollow. The camp needs hands. The children need care. Bao Er will keep the Clerk company, and sing. Qiu will watch the Stair, from the lamp-tower. Shu Ning will go up with the Ninth: a seal-wright is needed. Tian will bring Moth, and refuse to be left.
“And you?” says the Elder.
“I shall go with Rui.” Ash glances at the tall thin man who sits beside her with his terrible hat. “To the summit. We have something to say to a man called Lian Sheng.”
“What?”
“That he is late,” says Hui Niang, “for our appointment.”
> truth | Smile. | hub_b5_b | bond:tian+3
> mercy | Take Ash’s hand. | hub_b5_b | bond:tian+3
> quiet | Look at the Stair. | hub_b5_b | bond:tian+3
> inquiry | Ask what the appointment is. | hub_b5_b | bond:tian+3

`,
  scenarios: String.raw`
$ SU_FESTIVAL_VEIL | trust+4 respect+4 fear+3 | elder | The Elder meets the woman who took her nine children out of the fire.
hostile: She lifted her veil. I had expected a stranger. She was a small grey woman of sixty with my own mouth. I do not know why that surprised me. We have been writing to each other, in effect, for fifteen years, in the margins of the Law.
wary: I said: you took them. She said: you gave them. I said: I did not give them. She said: you carried two out of a burning room, and left seven. I carried seven. We are therefore even, and also unforgivable. I thought it the most precise thing anyone had said to me in a month.
neutral: She poured me wine. I do not drink wine. I drank it. She said: ‘It is not good.’ I said: ‘No.’ She said: ‘It is the same one I had at the founding of the Hollow. We have been drinking it badly together ever since.’
warm: At the end of the night she took my hands. She said: ‘You have done well with the one.’ I said: ‘I have done very little.’ She said: ‘That is what I said, when I was your age.’ I do not know what she meant. I think I wept.
devoted: I have told Hui Niang that I do not forgive her for the fifteen years. She said she did not expect it. I said that I did, nevertheless, intend to be her friend. She said that was a good deal harder. I said I knew.
`,
  remarks: String.raw`
% festival_ash_later | since:b5q_festival>=4 | hao | Madam Ash sent a card. It is a very small one. It says only: ‘Thank you for refusing.’ I cannot decide whether it is the kindest or the cruelest thing I have been sent. I have put it under my pillow.
% festival_tian_later | since:festival_tian>=3 | gu | Tian and the Wanderer sat at a fire last night and did not speak for an hour. At the end Moth fell asleep between them. Neither moved. I think that is what peace looks like.
`,
}
