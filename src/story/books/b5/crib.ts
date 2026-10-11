import type { Arc } from "../types";

/**
 * Book Five, arc nine: the Cribs. At the edge of the camp nine low grey houses hold the year's Reserve: nine children chosen for
 * the nine masters who will ascend on the ninth night, raised kindly, told they are honoured. Four approaches: tell the children
 * the truth and let them choose (a1, truth), raid the Cribs at night (a2, force), forge an exemption writ (a3, deceit), and sit
 * with the youngest until she asks (a4, mercy). A hidden route gives each of the nine a name. Cast: Matron Ning, Bao, Lark,
 * Sparrow, the twins Tik and Tok, Wren, Fei, Mo, Dun; the Elder, Hao Lan, Ren Qiao, Gu.
 */
export const crib: Arc = {
  id: "crib",
  name: "The Cribs",
  scenes: String.raw`
=== crib_entry | Nine Grey Houses
Nobody goes there. That is the first thing you notice. The camp is a seething, bustling hive, but at its north edge, past the last latrine, there is a ring of empty ground, and in the ring stand nine low houses of grey brick, each with a round window and a red door. A thin fence of cord runs round them. A sign on a post says SACRED GROUND. The pilgrims give it a wide berth and cross themselves as they pass.
From one of the houses, very faintly, comes the sound of children laughing.
You go closer. A woman is sweeping the step of the nearest, a stout motherly woman in a grey apron, humming. She looks up. She has a round pink face, dimples, and flour on her cheek. She smiles at you as at an old friend.
“Are you lost, dear?” she says. “It’s a little early for visiting.”
“What are the houses?”
“The Cribs.” She leans on the broom, glowing. “Where the honoured ones sleep. Nine of them. Each with a child of the Reserve.” She says it as one says *the royal stables.* “They’re ever so happy. They’re to be written on the ninth night.”
> truth | Ask to meet the children. | crib_a1s1
> force | Count the guards on the fence, and the hours of their watch. | crib_a2s1 | needs:4
> deceit | Ask to see the Matron’s register, and the exemption forms on her wall. | crib_a3s1
> mercy | Look at the round window, where a very small face is pressed against the glass. | crib_a4s1
> inquiry | Say that you have come to give the nine children what the Spare in the hollow asked for. | crib_h1 |  | roots_restored | You carry no names to give.

// ---------------------------------------------------------------- a1: telling them
=== crib_a1s1 | Matron Ning
“Of course you may,” says the Matron. “They love visitors.” She sets down the broom. “I’m Ning. I’ve had the Reserve eleven years. They’re no trouble.” She opens the red door. “Mind the mat. Sparrow’s been sick on it.”
Inside it is warm. A long, bright, low room, with nine cots in a row. Paper lanterns hang from the ceiling. Painted ladders run round the walls, climbing toward a painted sun. A big stove glows at one end, and a pot of porridge sits on it, and on the floor before the stove nine children are sitting in a ring, playing a game with a string of beads.
They look up. They are in grey smocks, with shaved heads and scrubbed faces. The eldest is perhaps eleven, a solemn, watchful boy with a gap in his teeth. The youngest is a girl of six, fat-cheeked, with enormous eyes. She is sucking her thumb.
“Visitors,” says Ning, brightly. “Say good morning.”
“Good morning,” say nine small voices.
It is, you realise, a recitation.
> truth | Sit down with them. | crib_a1s2 | npc:SU_CRIB_ROUND
> mercy | Smile at the youngest. | crib_a1s2
> quiet | Watch the eldest. | crib_a1s2
> inquiry | Ask what they are playing. | crib_a1s2

=== crib_a1s2 | The Game
“Stairs,” says the eldest. His name, he tells you, is Bao. “You go up, and you go up. And at the top there’s a clerk.”
“What does the clerk do?”
“Writes your name.” He says it flatly, with the air of one repeating a lesson. “In gold. And then you’re ascended. And everybody sings.”
“Does everyone ascend?”
“Only the honoured.” He glances at Ning. “We are the honoured. We were chosen.” He lowers his voice. “We were picked from a hundred.”
“How did you feel?”
“Very pleased.” His face is perfectly still. “Everybody said.”
The youngest takes her thumb out of her mouth. She says, loudly and clearly, “I don’t want to go to the top.”
Everyone freezes. Ning’s smile is fixed.
“Sparrow, dear,” she says. “You’re being silly.”
“I want to go home.” The little girl’s lip trembles. “I want Mama. She said I could come back after.”
Bao says, quickly, “She doesn’t mean it.”
But his eyes, meeting yours, are naked and afraid.
> truth | Kneel by Sparrow. | crib_a1s3
> mercy | Look at Ning. | crib_a1s3
> quiet | Look at Bao. | crib_a1s3
> inquiry | Ask Ning about the mothers. | crib_a1s3

=== crib_a1s3 | What They Were Told
“They were told it was an honour,” says Ning. Her voice has changed. It has lost its brightness, and is merely tired. She sits down heavily on the end of a cot. “By the Office. In writing. *The parents of the Reserve are to be informed that their child has been selected for ascent.* They signed a form.”
“Did they understand?”
“They understood *honour.*” She rubs her face. “They wept. They kissed the children. They were given a stipend of three hundred taels.” She laughs, short and brittle. “It’s more than most of them earn in a lifetime.”
“And you?”
“I was told to keep them well. To feed them, wash them, teach them to read. To be kind.” She drops her hands. “I was told it was the greatest compliment the Concord could pay.”
“Do you believe it?”
“I believed it for six years.” She looks at the children. “Then Fen’s mother came to visit. She stood at that window. She watched him eating his porridge. And she said: *he looks so well.* In a voice I’ve never heard before.”
> truth | Wait. | crib_a1s4
> mercy | Sit beside her. | crib_a1s4
> quiet | Look at the window. | crib_a1s4
> inquiry | Ask what happened to Fen. | crib_a1s4

=== crib_a1s4 | Fen
“He went up,” says Ning. “Three years ago. In the Ceremony. With the others. He was seven.” She is not weeping. She sits very still with her hands on her knees. “I put him in a clean smock. I combed his hair. I gave him a plum.” Her voice is flat. “He said, *Thank you, Matron.* He walked up the Stair like a little man.”
“And?”
“I stood at the bottom and watched him go.” She almost smiles. “That was all. I have never heard from him.”
“No one has.”
“No.” Her fingers tighten. “Nobody ever has. And I stood there every Ceremony for eleven years, and I watched the Reserve climb, and I told myself it was heaven.” She looks at the cots. “I told myself so firmly that I almost forgot to count them.”
“How many?”
“Ninety-nine. Eleven years, nine a year.” She looks up. Her eyes are dry. “I kept their smocks. I couldn’t throw them away. They’re in the cupboard. Each one folded, with a name.”
She nods at the back wall.
The cupboard door stands ajar.
> truth | Open it. | crib_a1s5
> mercy | Hold her hand. | crib_a1s5
> quiet | Wait. | crib_a1s5
> inquiry | Ask who knows. | crib_a1s5

=== crib_a1s5 | Ninety-Nine Smocks
They are on shelves, floor to ceiling, in neat piles of nine: small grey cotton smocks, folded in squares, each tied with a thread. Each thread has a paper tag. You read the nearest. *Fen. Aged seven. The Fifth Master.* It has a faint sweet smell of porridge and soap.
Nobody speaks. Behind you, Bao has come to the cupboard. He stands at your elbow in his own smock, looking.
“Whose are those?” he says.
Ning opens her mouth. For a moment no sound comes. “The ones who went before,” she says, at last. “The Honoured.”
“Where did they go?”
“Up.”
“Did they come back?”
Silence.
“Did they, Matron?” The child’s voice is quite steady. “Did one of them ever come back?”
The Matron’s round face collapses. Her mouth works. She puts a hand over it, and shakes her head.
“I thought not,” says Bao.
He turns. He looks at the other eight, sitting in a ring on the floor with the beads in their laps. He says, with the grave simplicity of an eleven-year-old, “We should talk.”
> truth | Stand back. | crib_a1s6
> mercy | Kneel by Bao. | crib_a1s6
> quiet | Watch. | crib_a1s6
> inquiry | Ask Ning to leave. | crib_a1s6

=== crib_a1s6 | A Council of Nine
They hold it on the floor of the nursery, in a ring, cross-legged, with you at the edge. Bao presides. He has the authority that comes of being eldest and not knowing why. He sets the beads in the centre. He says, “Nobody’s to be cross.”
“Why?” asks a gap-toothed girl of nine. Her name is Lark.
“Because we need to think.” He frowns. “They’ve told us a thing. We don’t know if it’s true. We’ve been told another thing for ever. We have to choose.”
“Which one?”
“Whichever is true.” His eyes go round. “So who’ll say what they know?”
It is the strangest meeting you have ever sat through. They talk quietly, in turns, as children do when asked a question no one has asked them. Lark has noticed that the smocks are all the same size. Fei, a big, silent boy, has noticed that the older ones never wrote letters. The twins, Tik and Tok, who finish each other’s sentences, have noticed that the grown-ups cry at the Ceremony and not at the weddings.
“And Fen’s mum came,” says Sparrow, loudly. “And she didn’t look *happy.*”
> truth | Listen. | crib_a1s7
> mercy | Hold Sparrow. | crib_a1s7
> quiet | Watch Bao. | crib_a1s7
> inquiry | Ask what they want. | crib_a1s7

=== crib_a1s7 | What They Want
“To see,” says Bao. He has been silent for some time. “I want to see the top.” He nods. “Not to be written. To look.”
There is a gasp. “*Bao,*” breathes Lark.
“I want to know what’s there. Before I decide.” His small face is set. “If it’s good, I’ll go. If it isn’t, I’ll say so.”
“And if they won’t let you say?”
“Then I’ll write it on the wall.”
The twins look at each other. “We’d come,” says Tik.
“If you were,” says Tok.
“If it was,” says Tik.
“If somebody held our hand,” finishes Tok.
Fei says, in a very slow deep voice, “I want to see Fen.”
Everyone looks at him. He is looking at the cupboard, at the neat shelf of smocks. His heavy face is wet.
“He gave me his marble,” he says. “For when he got back.”
Nobody says anything. Then Sparrow, in a very small voice, puts up her hand.
“Can I come?” she says. “I’m not heavy.”
> truth | Nod. | crib_a1s8
> mercy | Take her hand. | crib_a1s8
> quiet | Look at Ning. | crib_a1s8
> inquiry | Ask what Ning will do. | crib_a1s8

=== crib_a1s8 | Ning Decides
She does not decide at once. She sits on the end of the cot with her hands in her lap for a long time. The children watch her. The stove pops. Outside, in the camp, a gong sounds the hour.
“I have a report to make,” she says. “At noon. To the Office. Of the day’s health.”
“Yes?”
“I shall be late.” She wipes her cheeks with her apron. “I think I shall be very late.” She looks round the circle of small faces. “I had Fen for four years. I put him in a clean smock. I gave him a plum.” Her voice is steady. “I should like to go up with these.”
“You would be written.”
“I should be *there.*” She stands. “That is a different thing.” She takes off her apron. She hangs it on a hook, carefully, as one retires a flag. “Bao. Fetch the blankets.”
“Yes, Matron.”
“And Lark, the lamp. And Sparrow, your shoes.” She looks at you. “I have never done anything like this in my life.”
“No.”
“I find,” says Matron Ning, “that I am rather good at it.”
> truth | Smile. | crib_a1s9
> mercy | Hug her. | crib_a1s9
> quiet | Help with the blankets. | crib_a1s9
> inquiry | Ask where they will go. | crib_a1s9

=== crib_a1s9 | Out of the Cribs
You take them out by daylight, in a line, through the front gate. It is the simplest thing. Nobody stops you. The guards at the fence look at the Matron, in her apron-less grey dress, leading nine children in smocks, and each other, and look away. The pilgrims make way. A woman in the crowd puts a hand to her mouth. A man takes off his hat.
They walk through the camp. They walk between the tents, in a double file, hand in hand, with Bao at the head carrying his lantern. The camp watches. The camp falls silent. Along the lane behind them, one by one, people begin to follow: a farmer, a monk, a woman with a baby, a crowd of children from the soup-line.
Brother Lung is at the tree. He stands there with a ladle. He sees the nine, and the Matron, and the swelling crowd behind. He sets down the ladle.
“You will need soup,” he says.
“Yes,” says Ning.
“I have a pot.” He wipes his hands. “I always have a pot.”
> truth | Smile. | crib_close | +crib_told
> mercy | Hold Sparrow. | crib_close | +crib_told
> quiet | Walk with Bao. | crib_close | +crib_told
> inquiry | Ask Brother Lung to join. | crib_close | +crib_told

// ---------------------------------------------------------------- a2: the raid
=== crib_a2s1 | The Watch
There are six. They sit on stools at the fence-posts, in grey, with halberds, and they change on the stroke of the bell. Two at the gate. Two at the back. One at either corner. They are not soldiers; they are Cribs-wardens, former porters in uniform, and they have the dull bored faces of men who have never seen a threat. The oldest is asleep.
You count them over three nights, from a hay-cart, with Ren Qiao. He takes notes on his sleeve with a stub of charcoal. He draws a plan on the cart-bed: nine squares in a ring, a fence, a gate, a ditch.
“It’s a gift,” he says. “Look at the fence. A cord. They’ve put a cord round a prison.” He shakes his head. “I could do this with a cat.”
“You’d rather not.”
“I would rather not hurt anyone.” He taps the plan. “So we do it at the change. When the old watch goes and the new comes. There is a gap of about ninety seconds. Everyone at the gate. No one at the back.”
“Ninety seconds.”
“It is enough to take nine children across a ditch.” He pauses. “If they know we’re coming.”
> force | Plan. | crib_a2s2 | needs:4
> truth | Ask how they’ll know. | crib_a2s2
> quiet | Study the ditch. | crib_a2s2
> mercy | Ask about the Matron. | crib_a2s2

=== crib_a2s2 | Warning the Matron
She cannot be warned openly. She is watched. You send a note, folded small, in a basket of dumplings. You write in Hao Lan’s best round hand, with no signature: *At the change of the third bell, the back door will open. Please let the children be ready.* The basket goes in at noon. At two it comes out again, empty, with the dumplings eaten and a scrap of paper in the bottom.
It says, in large childish capitals: *THEY ARE READY.*
Underneath, in a smaller, older, neater hand: *Thank you.*
Ren Qiao reads it twice. He does not say anything. He folds it, very carefully, and puts it in his breast pocket.
“I have been waiting fifteen years to be given a job,” he says. “It’s funny. When it comes, I want to be sick.”
“Are you afraid?”
“Terrified.” He grins. “It’s a very good sign.”
The sun goes down. The camp quietens. Gongs sound the hours, one after another, down the long dark valley.
At the stroke of the third bell, a red door swings softly open.
> force | Go. | crib_a2s3
> truth | Hold your breath. | crib_a2s3
> quiet | Count. | crib_a2s3
> mercy | Reach for the first child. | crib_a2s3

=== crib_a2s3 | Ninety Seconds
They come out in a line, in the dark, in their grey smocks and blankets, hand in hand. The Matron is at the head. She carries a lamp, unlit. She puts a finger to her lips. The children copy her, nine small fingers on nine small mouths. They come across the grass on tiptoe, like a row of ghosts.
“Down!” breathes Ren Qiao.
The first guard, at the back fence, has risen from his stool. He is yawning, stretching. His halberd leans against the post. He scratches his head and wanders off along the wall, toward the gate. The change has begun.
“Now.”
You haul the first child over the ditch. It is Sparrow, six years old, in a cloak three sizes too large. You swing her up in your arms and run. Lark follows, with the twins. Fei, who is huge, jumps the ditch unaided. Bao brings up the rear, last in line, holding the Matron’s hand.
They are across the ditch. They are in the long grass. The camp is five hundred yards away.
And a bell, somewhere behind you, begins to clang.
> force | Run. | crib_a2s4
> truth | Look back. | crib_a2s4
> quiet | Carry Sparrow. | crib_a2s4
> mercy | Hold Bao. | crib_a2s4

=== crib_a2s4 | Alarm
“They’ve seen us!” bawls a voice. “The nursery’s empty! The Reserve’s gone!”
A whistle shrills. Lanterns spring up along the fence like fireflies. The halberdiers pelt out of the gate in a pack. A drum begins to beat. In the dark, you hear the thunder of boots on turf.
“Spread out!” snaps Ren Qiao. “Don’t bunch! Hao Lan, take the left! Hanming, the right!” He scoops up Tik and Tok in either arm, as if they were bundles of washing. “Go! Go! Through the camp! Lose them in the tents!”
You pelt through the ditch-weeds with Sparrow clamped on your hip. She is silent. Her big eyes are wide. Her small arms are round your neck.
“It’s all right,” you gasp. “It’s a game.”
“I know,” she whispers. “I don’t mind.”
Ahead, the first tents loom out of the dark. Beyond them a lantern swings. Beyond that, a solid wall of white canvas. You drive in among the guy-ropes. A rope catches your ankle and you pitch forward. You turn, in mid-fall, to land on your back and protect the child.
You hit the ground hard. She is on top of you, laughing.
> force | Get up. | crib_a2s5
> truth | Look for the others. | crib_a2s5
> quiet | Hide. | crib_a2s5
> mercy | Hold her. | crib_a2s5

=== crib_a2s5 | The Camp Wakes
It wakes around you. That is the thing you remember afterwards. The tents are full of pilgrims, who have been asleep, and who sit up now in their blankets, blinking, as nine children and a lot of armed men go thundering through their midst. A woman screams. A baby wails. A man in a nightcap sticks his head out of a flap and says, “What the devil—?”
“Stop them!” bawls the captain of the watch, red in the face, on the heels of his men. “They’ve stolen the Reserve!”
A silence.
Then somebody, somewhere in the dark, says in a thin carrying voice: “The Reserve?”
“The children,” says another.
“The ones they send up?”
A low murmur starts. It goes outward from the tent. It runs down the row. The captain of the watch is pointing and bellowing, but nobody is listening to him any more. They are standing at their flaps in the dark, in their nightgowns, with lanterns, looking at the knot of shaking children.
One by one, they step out. They form a ring.
The captain’s halberdiers slow, and stop.
> force | Watch. | crib_a2s6 | needs:4
> truth | Stand with the children. | crib_a2s6
> quiet | Hold your breath. | crib_a2s6
> mercy | Hold Sparrow tight. | crib_a2s6

=== crib_a2s6 | A Ring of Pilgrims
It is not a decision. It is simply what the crowd does. A farmer in a nightshirt moves to the left. A monk steps in front of the twins. A big woman with a baby plants herself squarely before Lark. They do not raise their voices. They do not raise their hands. They stand.
The halberdiers hesitate. They are tired, and sleepy, and they have not been paid in three weeks. They have been told to protect the Reserve. They are not at all sure, looking at the ring of faces, which side the Reserve is on.
“Stand aside,” says the captain, harshly.
“No,” says the farmer.
“I order you.”
“You can’t,” says the monk, politely. “I’m not in your service.”
“This is Concord property!”
“It’s a *child,*” says the big woman, quite loudly. “Look at her.”
The captain looks. He sees a small girl in a grey smock, clutching a blanket, pressed against a stranger’s skirt. She is crying a little. She is staring at him with dark accusing eyes.
His mouth shuts. His halberd drops.
“Oh, hell,” he says, helplessly.
> force | Step forward. | crib_a2s7
> truth | Say thank you. | crib_a2s7
> quiet | Hold still. | crib_a2s7
> mercy | Smile. | crib_a2s7

=== crib_a2s7 | The Captain Sits Down
He sits down on a tent-peg. He takes off his helmet. He is a thick, grizzled, balding man of fifty with a red nose and a drooping moustache, and his hands are shaking. He sets the helmet between his boots. He looks at it for a while.
“I’ve been captain of the Cribs for nine years,” he says. “I thought it was a decent posting. Indoor work.”
“Yes.”
“I never wondered why the Reserve all went the same way.” He rubs his face. “I thought: well. It’s heaven.” He laughs, unhappily. “I had a nephew who went up. In the third year. I thought he’d done well for himself.”
Nobody says anything.
“I don’t suppose,” says the captain, “that I ever saw my sister again.”
“Why not?”
“She came for the Ceremony. She stood at the bottom. She was told to be proud.” He looks at the ring. “She never spoke to me after. I thought it was a family quarrel.”
Beyond him, the halberdiers are lowering their staffs. One by one, they sit.
> force | Wait. | crib_a2s8
> truth | Sit with him. | crib_a2s8
> quiet | Look at the children. | crib_a2s8
> mercy | Offer him tea. | crib_a2s8

=== crib_a2s8 | What the Captain Gave
“Take them,” he says. “Please.” He stands. His voice is hoarse. “I’ll write it up. A mass escape. Overpowered in the dark. No casualties.” He squares his shoulders. “They’ll flog me. I don’t care.”
“They’ll do more than flog.”
“Let them.” He puts the helmet back on. “I’ve a nephew in that glass somewhere. I’d rather be beaten for something I did than for something I didn’t.” His moustache quivers. “That is, I believe, a Listener’s proverb.”
“It’s a Steppe one.”
“My mother was from the grass.” He almost smiles. “She said it every day.”
He turns. He bawls, in a strong parade-ground voice, to his halberdiers. “Stand to! Right about turn! To the Cribs, at the double!” They rise, and wheel, and troop off across the grass, in a shambling column, led by a man with a red nose and a very straight back.
At the fence they halt. They stand to attention before the empty houses.
They stand there all night.
> force | Watch. | crib_a2s9 | needs:4
> truth | Salute. | crib_a2s9
> quiet | Look at the children. | crib_a2s9
> mercy | Thank the pilgrims. | crib_a2s9

=== crib_a2s9 | The Raid
It is Ren Qiao who finds them. He comes back across the camp at dawn with Tik on his shoulders and Tok clinging to his belt, to the tent you have made your own. He is grey with fatigue and covered with grass. The nine are in a heap on the blankets, fast asleep, in a nest of cloaks.
He lowers the twins into it. He does it as if setting down eggs.
“I was a bridge-warden for fifteen years,” he says, very low. “I held a lantern for fourteen. I did a thing I was ashamed of for half my life.” He turns his scarred face. “Tonight I took nine back.”
“You did.”
“It does not undo it.”
“No.”
“But it is not nothing.” He eases himself onto a crate. He puts his face in his hands. His shoulders shake. After a while he lifts it. He is smiling, and wet.
“I was so frightened,” he says. “I haven’t been so frightened since I was seventeen.” He wipes his nose on his sleeve. “I wonder why it doesn’t get any easier.”
“Perhaps it isn’t meant to.”
“Perhaps,” says Ren Qiao, “that’s the point.”
> force | Sit beside him. | crib_close | +crib_raid
> truth | Pour tea. | crib_close | +crib_raid
> quiet | Cover the children. | crib_close | +crib_raid
> mercy | Hold his shoulder. | crib_close | +crib_raid

// ---------------------------------------------------------------- a3: the writ
=== crib_a3s1 | The Register
It hangs on the wall behind the Matron’s desk, in a frame: a printed form, in four colours, headed *NOTICE OF EXEMPTION FROM THE RESERVE.* It has a blank for the name, a blank for the date, and a space at the bottom for the seal of the Ninth Office.
“They’re rare,” says Matron Ning, when you ask. She is making tea, in a brown pot, with her back to you. “Almost never granted. One in a thousand.” She puts down the cups. “It takes a petition from the family, a physician’s certificate, and the signature of a Registrar of the Second Class.”
“And then?”
“The child’s struck from the list. Another is chosen.” She says it flatly. “There is always a spare.”
“Always?”
“A hundred for nine. The surplus is kept in a barracks at the Ford.” She sits. “You can’t exempt one, my dear. You can only swap.”
You look at the framed form. At the line of seals. At the nine small cots.
“What if all nine were exempt?” you say.
Ning goes still. “All nine?”
“At once.”
She looks at you for a long time.
“I think,” she says slowly, “they would have to start again.”
> deceit | Ask how. | crib_a3s2
> truth | Say it is forgery. | crib_a3s2
> quiet | Study the form. | crib_a3s2
> mercy | Ask what “start again” means. | crib_a3s2

=== crib_a3s2 | Start Again
“A new selection,” says Ning. “A fresh nine.” She sips her tea. “It would take a month. They’d send for the surplus from the Ford, and the Masters would have to approve the replacements.” She sets down the cup. “The Ceremony would be postponed.”
“By how long?”
“A year.” She says it softly. “It would have to be the next ninth night of the ninth month.”
You do the sum. Nine children. A year.
“It wouldn’t save them,” says Ning.
“It would give them time.”
“Time is a thing the Concord has a great deal of.” Her round face is gentle and shrewd. “It would put it off. It wouldn’t stop it.”
“It would give us a year to stop it.”
Her dimples quiver. “What do you need?” she says.
“A seal.”
“Of the Ninth Office.”
“And a signature of the Second Class.”
Ning takes a key from her apron and opens a drawer. She sets a small box on the desk. In it, packed in cotton, lies a stamp of green jade.
“I have always had a copy,” she says.
> deceit | Take it. | crib_a3s3
> truth | Ask why. | crib_a3s3
> quiet | Look at it. | crib_a3s3
> mercy | Thank her. | crib_a3s3

=== crib_a3s3 | A Second-Class Signature
It is the Elder who must provide it. She has the seal at her elbow. She has a small bottle of ink and a very fine brush.
“I was a Registrar of the Second Class for nine years,” she says. “Before the First.” Her voice is dry. “I have signed several thousand exemptions. They were all refusals.”
“These are not.”
“No.” She dips the brush. “It is a curious sensation. To sign a form of mercy.” She writes a name. *Bao.* Her hand is perfectly steady. “I had assumed it would feel like freedom. It feels like theft.”
“It is a lawful signature.”
“It is a lawful signature on an unlawful form.” She blows on it. “That is the thing about the Concord. The forms are always in order. It is the purposes that are not.”
She writes the second. *Lark.* The third. *Fei.* Her hand moves faster. Her mouth is a thin line. By the time she reaches *Sparrow* the brush is flying, and there is a spot of colour on each cheekbone.
“Hm,” she says, setting down the pen. “I do believe I am enjoying it.”
> deceit | Smile. | crib_a3s4
> truth | Hold the lamp. | crib_a3s4
> quiet | Check the seal. | crib_a3s4
> mercy | Pour tea. | crib_a3s4

=== crib_a3s4 | A Parcel for the Ninth Office
It goes by hand. Hao Lan carries it in a leather folder, in her best Chancery robe, with the green seal of the Registrar’s Office on the flap. She is going to deliver it to the Ninth Office, a squat grey building in the heart of the camp, with a brass plate and a janitor. She has rehearsed her story. She is a junior clerk, delivering a batch of routine exemptions. She is bored. She is late for lunch.
“Don’t talk,” you say.
“I know.”
“Don’t smile.”
“I never smile at janitors.” She adjusts her cap. “It sets a bad precedent.”
She goes in. She is gone for eleven minutes. When she comes out, the folder is empty and she is walking at a perfectly even pace. She doesn’t look round. She walks to the end of the lane, and round the corner, and out of sight of the building. Then she leans against a post, and slides slowly down it, and sits in the dust.
“They stamped it,” she says faintly. “They stamped all nine. The clerk said, ‘Another batch, eh?’ And I said, ‘Aye, it’s that time of year.’”
She puts her head between her knees.
> deceit | Help her up. | crib_a3s5
> truth | Sit beside her. | crib_a3s5
> quiet | Fetch water. | crib_a3s5
> mercy | Hug her. | crib_a3s5

=== crib_a3s5 | The Notice
It arrives at the Cribs at four the next afternoon, delivered by a boy on a pony. A single printed sheet, in four colours, with a green seal: *The Ninth Office hereby gives notice that the following nine persons are exempt from the Reserve of the current year.* Beneath it a list of nine names. Beneath that, the Elder’s signature, in her small exact hand.
Matron Ning reads it aloud to the children. She does it standing at the stove, with her glasses on the end of her nose. She reads every name. When she has finished, she lowers the sheet.
“That means you’re not going,” she says.
Nobody speaks. Nine faces turn to her. Bao is the first to find his voice.
“Not going where?”
“To the top.” Her voice cracks. “Not this year.”
“Then where do we go?”
“Anywhere.” She laughs, wetly. “You’re free.”
There is a very long pause. Then Sparrow, from her cot, in a high clear voice, says, “Can I have a bun?”
Ning bursts into tears. She sits down on the floor and weeps, with the notice in her lap, while nine children crowd round and pat her.
> deceit | Smile. | crib_a3s6
> truth | Look away. | crib_a3s6
> quiet | Watch. | crib_a3s6
> mercy | Fetch a bun. | crib_a3s6

=== crib_a3s6 | The Masters’ Answer
It comes the next morning, and it is not what you hoped: twenty men in black, led by a tall pale man in a long coat. He reads the notice. He folds it in four. He puts it in his sleeve.
“This is a forgery,” he says, in a pleasant voice.
Ning stands in front of the nursery door with her arms folded. “It is stamped.”
“The stamp is genuine.” He smiles. “The signature is a clever imitation. I know the hand. It is that of a Registrar I once knew.” His pale eyes find yours. “She is, I am told, in the camp.”
Nobody speaks. The children, in the doorway behind the Matron, have gone silent.
“I do not propose to cause a scene,” the man says. “I am Lian Sheng. Master of the Law of Azure Cloud.” He bows slightly. “I propose that the nine be returned to the Reserve. That the Matron be reassigned. And that the Registrar of Azure Cloud present herself to me at noon, for a conversation.”
Behind you, very softly, the Elder says: “He has not changed in fifteen years.”
> deceit | Step forward. | crib_a3s7
> truth | Wait. | crib_a3s7
> quiet | Look at the Elder. | crib_a3s7
> mercy | Stand with Ning. | crib_a3s7

=== crib_a3s7 | Lian Sheng
He is forty-eight, and he looks thirty. Tall, spare, with a dead-white face, black hair swept back, and eyes the colour of slate. He moves with the precision of a man who has never had to hurry. He is the hard one. You can feel it in the way the Matron’s apron shakes.
“Wanru,” he says, as she steps out of the shadow. “You have grown thin.”
“Lian.”
“I had thought you retired. In quiet disgrace.” His voice is gentle. “It was the kindest outcome.”
“It was a lie.”
“It was a courtesy.” He smiles. “I had understood that you had taken to the road with a child. I had hoped to avoid a confrontation.”
“So had I.”
“Then we agree.” He gestures. “Give me the nine, and we may all go home.”
The Elder looks at him. She looks at the doorway where nine small faces peer round the Matron’s skirts. She looks at the green form in his sleeve.
“I signed that exemption,” she says, “as the Registrar of the Second Class.”
“Which you no longer are.”
“I am, until the Assembly says otherwise.” Her voice is dry as bone. “You may check the Charter.”
> deceit | Hold your breath. | crib_a3s8
> truth | Step beside her. | crib_a3s8
> quiet | Watch Lian. | crib_a3s8
> mercy | Look at the children. | crib_a3s8

=== crib_a3s8 | The Charter
He checks it. He is a scrupulous man. He takes a small blue book from his sleeve and finds a page. He reads for a full minute with the faintest smile. The Elder stands motionless, with her hands folded. Behind her, Duan Wuyi, who has arrived at the double with his seal and a pocket Charter, is mouthing a clause.
“Article forty-one,” says Lian Sheng, at length. “A Registrar may be removed only by vote of the Assembly of Peaks, on a charge of dereliction or fraud.” He closes the book. “There has been no vote.”
“No.”
“Nor, so far as I know, a charge.”
“Not yet,” says Duan Wuyi, cheerfully, “but I would be glad to bring one. Against any person who interferes with an act of the Registrar.”
Lian turns. His pale eyes rest on Duan for a long moment. “Censor-General,” he says. “I did not know you were here.”
“It is the great advantage of my office. One is so rarely expected.”
For a moment, you think Lian will draw his sword. His hand twitches. His nostrils flare. Then he lets out a slow breath, and smiles.
“Very well,” he says. “A postponement.”
> deceit | Breathe. | crib_a3s9
> truth | Nod. | crib_a3s9
> quiet | Hold still. | crib_a3s9
> mercy | Hug Ning. | crib_a3s9

=== crib_a3s9 | A Year
“A postponement,” repeats Lian Sheng. He puts the blue book in his sleeve. “Of one year. To the next ninth night. The nine will be exempt. A fresh nine will be chosen.” He looks at the Elder. His voice is silky. “You have bought your Reserve a year, Wanru. I commend you.”
“Thank you.”
“I would not rely on it.” He bows, a shade ironically. “It is amazing what can happen in twelve months.”
He goes out. His men follow, in a double file, with their eyes lowered. The dust of their boots hangs in the doorway.
There is a silence. Then Matron Ning, with a small wondering sound, sits down on the step.
“A year,” she says. “They’re mine for a year.”
“Yours,” says the Elder.
“I don’t know what to do with them.”
“Teach them to read,” says the Elder. “And to run.”
Bao has come out of the nursery. He stands at the Elder’s elbow in his grey smock, very small, very straight. He puts up his hand. He takes hold of her sleeve, quite shyly, between finger and thumb.
“Thank you for the form,” he says.
> deceit | Smile. | crib_close | +crib_writ
> truth | Bow. | crib_close | +crib_writ
> quiet | Look at the Elder. | crib_close | +crib_writ
> mercy | Hold Bao. | crib_close | +crib_writ

// ---------------------------------------------------------------- a4: Sparrow
=== crib_a4s1 | The Window
She has a round face, enormous eyes, and a fist pressed to her mouth. She is on tiptoe on a stool, nose flattened on the pane. She is watching you with the grave intensity of a very small owl. When you wave, she doesn’t wave back. She simply watches.
You sit down on the grass beneath the window. You take a piece of bread from your pocket, and break it. You eat one half. You put the other on the sill.
After some time the window opens an inch. A pair of chubby fingers appears. They close round the bread. They vanish.
You wait. In ten minutes the window opens another inch. A face appears. It says, with great dignity:
“I’m not supposed to talk to strangers.”
“No.”
“I’m the youngest.” She considers. “I’m six. I’m the one who’s going to be written last.” She says it in a sing-song, like a rhyme. “I’m the Honoured Small.”
“That’s a good name.”
“It’s the name for the one who’s ninth.” She takes a bite of the bread. “Nobody’s ever been ninth before me. It’s special.”
> mercy | Say you believe her. | crib_a4s2
> truth | Ask her name. | crib_a4s2
> quiet | Hold still. | crib_a4s2
> inquiry | Ask what the Honoured Small does. | crib_a4s2

=== crib_a4s2 | Sparrow
“Sparrow,” she says. “I’m Sparrow. Ning calls me Sparrow, because I’m small, and I eat a lot.” She regards the crust. “I had a name before. I don’t remember it.”
“Do you miss it?”
“No.” She shrugs. “It was a plain one. I like Sparrow.” She turns the crust over. “What do you do?”
“I travel.”
“Where?”
“Up the mountain.”
She sits very still. She says, in a voice unlike her own, “Is that where they take us?”
“Not exactly.”
“Is it where you go after?”
You think. “I don’t know.”
“Nobody does.” She nods, as at a familiar disappointment. “Bao says he does, but he doesn’t. He pretends.” She looks at you. Her round face has gone solemn. “I’m not scared. I just don’t want to go.”
“That’s allowed.”
“Is it?” She stares. “Ning says we should be happy.”
“It’s allowed,” you say, “to be neither.”
Her mouth opens. She closes it. She considers this for a very long time.
> mercy | Wait. | crib_a4s3
> truth | Smile. | crib_a4s3
> quiet | Look at the sky. | crib_a4s3
> inquiry | Ask what she wants. | crib_a4s3

=== crib_a4s3 | What She Wanted
“A bun,” says Sparrow. “And a story. And a sit.” She says it with the air of one reciting an order. “A sit is when someone sits next to you and doesn’t say anything.” She thinks. “Mama used to. Before.”
“I can do that.”
“Can you?”
“I’m very good at it.”
She considers this with a judicial air. Then she swivels on her stool. She leans out of the window. She puts a small hand on your shoulder.
“You’d better come in,” she says. “It’s warm.”
You go in. Nobody stops you. Ning is out at the pump; the other eight are at their lessons, across the courtyard. The nursery is empty and bright, with a broad ray of sun across the floor. There is a rocking-chair by the stove. A knitted blanket on the back.
Sparrow climbs into your lap. She is warm, and heavy, and smells of bread and soap. She pulls the blanket round the two of you. She puts her thumb in her mouth.
“Now,” she says. “Sit.”
> mercy | Sit. | crib_a4s4
> truth | Hum. | crib_a4s4
> quiet | Rock. | crib_a4s4
> inquiry | Ask her about Mama. | crib_a4s4

=== crib_a4s4 | A Sit
It is the easiest thing you have ever done. You rock. The chair creaks. The stove ticks. The sun moves across the boards. After a time the child’s breathing deepens, and her thumb slips from her mouth. She says drowsily:
“Mama had a song.”
“What song?”
“About a goat.” She yawns. “It went: *Little goat, little goat, where have you been?* And you say: *Up the hill, down the hill, to see the queen.*” She stirs. “It doesn’t make sense.”
“Songs don’t have to.”
“That’s what Mama said.” She snuggles. “Do you know any?”
You do. You sing the one with no words: the old lullaby with a catch in the middle and a question at the end. You sing it quietly, with your lips closed. She listens with her eyes half shut.
“That’s a sad one,” she whispers.
“It’s a waiting one.”
“What’s the difference?”
“Sad,” you say, “is when you’ve stopped.”
She is silent for a long time. Then, so softly that you are not certain, she begins to hum it back.
> mercy | Keep rocking. | crib_a4s5
> truth | Hold your breath. | crib_a4s5
> quiet | Close your eyes. | crib_a4s5
> inquiry | Ask where she learned it. | crib_a4s5

=== crib_a4s5 | Where She Learned It
“I didn’t,” says Sparrow, surprised. “It was in my head.” She rubs her eye. “It’s been in there a long time. Since the Ford. When I was in the barn.” She frowns. “There was a lady who sang it. A very big lady. Not Mama.”
“A big lady?”
“She sat on the hay. She was knitting something. She said *sleep, little one, the one who asks is coming.*” She yawns again. “I thought it was a dream.”
Your skin prickles. You keep rocking. “What did she look like?”
“Grey. With a plait.” She shrugs. “She had a comb. A silver one. She said she couldn’t come. She said she was too far.”
You stop rocking.
“She said,” says Sparrow, “to tell you. If you came. She said, *I’m nearly home.*”
Your throat has closed. You cannot speak. The stove ticks. The sun lies across the floor like a golden rug. In your lap, a small round child is pressed against your chest.
“Did she say my name?” you whisper.
“She said *the Ninth.*” Sparrow giggles. “That’s a funny name. Is it your real one?”
> mercy | Hold her. | crib_a4s6
> truth | Weep. | crib_a4s6
> quiet | Say nothing. | crib_a4s6
> inquiry | Ask how long ago. | crib_a4s6

=== crib_a4s6 | A Message Kept
“Before the Ceremony,” says Sparrow. “Before the first snow.” She wriggles round to look at you. “She said I had to say it just the way she said it. So you’d know.” She takes a breath and recites it in a sing-song, perfectly: “*There is room. I’ve saved the space. Don’t be frightened. I’m nearly home.*”
You put your forehead down on her shaven head. She smells of bread and soap and the warm back of a child’s neck. You hold her. You do not say anything, because there is nothing at all to say.
It was a message left in a barn, in a dream, by a woman under a mountain, for a child to carry five hundred miles and deliver to a stranger on a stool.
It was left, you understand, in the safest place she could think of.
“Did I do it right?” says Sparrow, anxiously.
“You did it perfectly.”
“Good.” She yawns. “Now can I have my bun?”
You laugh. It hurts. You hold her, rocking, and the chair creaks, and the stove ticks. Outside in the courtyard the other eight are laughing at their lessons. A bell rings for tea.
> mercy | Smile. | crib_a4s7
> truth | Kiss her head. | crib_a4s7
> quiet | Rock. | crib_a4s7
> inquiry | Ask if there is anything else. | crib_a4s7

=== crib_a4s7 | The Bun
She eats it in the lap of the chair, with crumbs all over the blanket, in a state of rapt contentment. It is a plain wheat bun, glazed with honey, still warm. She tears it in half. She hands you one piece.
“That’s yours,” she says. “It’s a fair share. Bao says you should always share. He doesn’t, though.”
You eat. It is the best thing you have ever tasted.
“Are you going to the top?” she says, with her mouth full.
“Yes.”
“Will you come back?”
“I mean to.”
“Will you bring them back? The ones that went?”
You freeze. She looks at you, candid and unafraid, with honey on her chin.
“I can’t promise,” you say.
“I know.” She nods, matter-of-fact. “But will you try?”
“Yes.”
“All right.” She licks her fingers. “That’s a sit. That’s a bun. That’s a promise.” She yawns hugely. “I think I’ll have a nap.”
She curls up in the blanket, with her head against your arm. In a minute she is fast asleep.
> mercy | Stay. | crib_a4s8
> truth | Whisper a promise. | crib_a4s8
> quiet | Rock. | crib_a4s8
> inquiry | Look at the door. | crib_a4s8

=== crib_a4s8 | Ning Returns
She finds you there at dusk. She comes in from the pump with a bucket in each hand and stops in the doorway. She looks at the stove, the chair, the sleeping child in the blanket on your lap. She sets down the buckets, very quietly. She comes across the floor on tiptoe.
“She won’t sleep,” she whispers. “She never does, in the afternoons.”
“She did.”
“She said you were there.” Ning’s round face is damp. “She said, *a lady came.* I thought it was one of her stories.” She sits on the bench. “It wasn’t, was it?”
“No.”
“I didn’t think so.” She smooths her apron. “She’s the one who doesn’t sing. All year, she never sang a note. This afternoon I heard her, through the wall.”
You say nothing.
“I’ve looked after her for two years,” says Ning. “I’d give anything to have been the one who got her to hum.” She wipes her cheek with her wrist. “But I’m glad somebody was.”
Sparrow stirs. She opens one eye.
“Is it tea?” she says.
> mercy | Smile. | crib_a4s9
> truth | Hand her to Ning. | crib_a4s9
> quiet | Wait. | crib_a4s9
> inquiry | Ask Ning what she thinks. | crib_a4s9

=== crib_a4s9 | What Ning Thought
“I think we’re going to have to do something,” says Ning. She has the child on her knee. She is stroking the stubble on the small head, absently, with her whole palm. “I think I knew, and I’ve been pretending I didn’t.” Her voice shakes. “She’s the ninth. It would be the ninth night. And I’ve held her since she was four.”
“What will you do?”
“I don’t know.” She laughs, tired and helpless. “I’m a nursery matron. I’ve never done anything. I wipe noses.”
“It’s a start.”
“Is it?” She looks at you, her round face lined with worry. “I thought I would do it myself. In the end. Slip away with them in the dark. But I’m fifty-five and I have bad knees and nine children. It would never work.”
“You would not be alone.”
“No.” She looks at the sleeping bundle. “That’s what Sparrow said. She said, *there’s a lady coming.*”
She straightens. She takes a breath.
“I shall wait,” says Matron Ning, in a small firm voice. “For the lady. And for you.”
> mercy | Bow. | crib_close | +crib_sparrow
> truth | Take her hand. | crib_close | +crib_sparrow
> quiet | Look at Sparrow. | crib_close | +crib_sparrow
> inquiry | Ask her to trust you. | crib_close | +crib_sparrow

// ---------------------------------------------------------------- hidden: nine names
=== crib_h1 | What the Spare Asked For
You tell it to the Matron in the doorway of the nursery. You say it quietly, with the children listening: that there is a girl of seven in a hollow under a green mound, who has been waiting seven hundred years. That she asked, *Is there room?* That you said *yes.* That you are here to see it kept.
Ning stares. She puts a hand on the doorframe.
“You are the one,” she says. “Sparrow said. The one who answers.”
“I am.”
“And you have come to...”
“To give them what she asked for.” You look at the nine small faces. “A line in the book. A name that is theirs.”
“They have names. Bao. Lark.”
“Those are what you call them.” You turn to the boy at her elbow. “Bao. Do you know what your mother called you?”
He stares. “No.”
“Would you like to?”
There is a very long silence in the nursery. The stove ticks. The painted ladders climb the walls toward the painted sun.
“Yes,” says Bao, in a whisper. “Please.”
> inquiry | Kneel. | crib_h2
> truth | Take Hao Lan’s hand. | crib_h2
> mercy | Look at the Elder. | crib_h2
> quiet | Wait. | crib_h2

=== crib_h2 | Writing to the Mothers
It takes a night. The Matron keeps a register under her bed, and in it, beside each child, there is a line: an address, a mother, a village. Ning has never opened it. She has always known it was there.
You write to nine mothers. You do it in Hao Lan’s best round hand, by lamplight, on the back of the exemption forms. You say: *Your child is alive. Your child is safe. Your child would like to know the name you gave.* You seal each with the Elder’s mark. At dawn Yue takes them to the Salt-Road riders, with nine of the best horses in the camp.
They come back in five days. They come back in a rush. Nine thin envelopes, folded small, tied with string. Some are in the careful block capitals of those who can barely write. Some are in a fine hand.
You read them aloud to the nursery, one at a time, with Bao last.
His mother’s says: *Little Ox.*
He stares at it. He looks up. His whole face is lit.
“That’s me,” he whispers. “I was Little Ox.”
> inquiry | Smile. | crib_h3
> truth | Hold him. | crib_h3
> mercy | Weep. | crib_h3
> quiet | Look at the others. | crib_h3

=== crib_h3 | Nine Names
They are all different. Lark is Wild Cherry, whose mother wrote that she hadn’t stopped singing in her cradle. The twins are Moon and Lamp. Sparrow’s is Little Wind, a name for a child who is always moving. Wren, Mo and Dun have names the Elder reads in a shaking voice, and sets down in the register, one by one, in full. *Written.*
By evening the nursery is a bedlam. Nine children are running round the room, shouting their own names at the top of their voices. They have never done it before. They don’t know how. They shout them at each other, at the stove, at the painted sun. They shout them at the Matron. They shout them out of the window at the rows of tents.
“I’m Wild Cherry!” cries Lark. “I’m Wild Cherry of the Eastern Provinces!”
“I’m Moon!”
“I’m Lamp!”
“I’m Stone Bridge, I’m Stone Bridge, I’m Stone Bridge!”
Sparrow is standing on her cot. She has her fists clenched, and her mouth wide open, and her face crimson with effort.
“LITTLE WIND!” she bellows.
The Elder sits in the corner with the register on her knee, and her hand over her mouth.
> inquiry | Laugh. | crib_close | +crib_named
> truth | Applaud. | crib_close | +crib_named
> mercy | Hold the Elder. | crib_close | +crib_named
> quiet | Look at Ning. | crib_close | +crib_named

// ---------------------------------------------------------------- close
=== crib_close | Nine at the Fire
That night they sleep in your tent. All nine, in a heap, on the blankets, in a nest of cloaks. They went down in a rush, like candles blown out, in the middle of a game. Matron Ning sits in the corner with her knitting, listening to their breathing.
+[how] crib_told | You told nine children the truth, and they held a council of their own.
+[how] crib_raid | You took them out through a back ditch in ninety seconds, and a captain sat down in the grass.
+[how] crib_writ | A forged exemption bought them a year, and a hard man bowed ironically.
+[how] crib_sparrow | A child of six delivered a message from a woman under a mountain.
+[how] crib_named | Nine mothers wrote back, and nine children shouted their names.
The camp is quiet. Outside the tent flap you can hear the soup-line, the soft chink of bowls, a murmur of voices. Higher, from the dark of the Stair, comes the thin high sound of a flute. Somebody is playing the old lullaby, over and over, trying to get it right.
The Elder sits at the tent door with her knees together. She is looking at the sleeping children, and her face is quite naked.
“I have never had a family,” she says. “I had a sister. I had a Hall.” She picks at a thread. “It is rather alarming.”
“What is?”
“How quickly one can acquire nine.”
> truth | Smile. | crib_close2 | +b5q_crib
> mercy | Take her hand. | crib_close2 | +b5q_crib
> quiet | Cover a sleeper. | crib_close2 | +b5q_crib
> inquiry | Ask what she will do. | crib_close2 | +b5q_crib

=== crib_close2 | What the Cribs Meant
She tells you at three in the morning, when the others are asleep and the lamp has burned low. She has not slept. She sits with the tread in her lap, running her thumb along the edge, and she speaks in the voice she uses for the second ledger.
“Lian Sheng wanted the nine,” she says. “He did not ask where they were. He came at once, on the second morning, with twenty men. He knew.”
“He had been told.”
“By whom?” She looks up. “Someone in this camp is carrying messages to the masters. Someone who knew about the form within a day.” Her face is grave. “I have been thinking who.”
“Who?”
“I do not know.” She shakes her head. “It is someone who sees everything. Who is trusted. Who has walked with us from the Steppe.”
Your skin goes cold. “You think it’s one of us.”
“I think,” says the Elder carefully, “that I should like it not to be.” She lays the tread aside. “But I am a Registrar. I cannot abide an unaccounted entry.”
She looks at the sleeping party. Her eyes pass, slowly, from face to face.
> truth | Wait. | hub_b5_b | bond:ren+2
> mercy | Say you trust them. | hub_b5_b | bond:ren+2
> quiet | Watch the sleepers. | hub_b5_b | bond:ren+2
> inquiry | Ask who she suspects. | hub_b5_b | bond:ren+2

`,
  scenarios: String.raw`
$ SU_CRIB_ROUND | trust+4 respect+3 fear+5 | elder | The Elder visits the house where nine children are being kept for the ninth night.
hostile: The Matron showed me the nursery. It was clean, warm, bright, with nine small beds. Each had a name written on the foot: not the child’s name, but the master’s. I stood at the foot of a cot marked HU JINGYAN, and looked at the child in it, and I did not know my own face.
wary: Sparrow showed me her drawing. It was of a ladder, with a smiling woman at the top. She said it was the Honoured Mother. I said: and who is that at the bottom? She said: that’s me, climbing. She did not understand why I wept.
neutral: I know this house. Not these walls; the type. I have signed for a hundred like it. The linen was exactly what the regulations specify. The porridge was warm. Someone had taken great pains. It was perfect, and it was nothing, and it was my work.
warm: Hanzhen sat on a cot and showed a boy of six how to whistle. I stood in the doorway and watched. There is a thing that happens to one’s hands when one is very afraid. Mine had stopped.
devoted: I told Bao I would not let it happen. He asked how I could be sure. I said I could not. He nodded gravely and said: ‘Then I’ll hold your sleeve.’ I have not let go of him since.
`,
  remarks: String.raw`
% crib_bao_later | since:b5q_crib>=4 | ren | Bao, the eldest of the Reserve, has taken up my sword-drill. He has the stance of a child who has never been shown how to stand. I have shown him. He is better at it than I was.
% crib_sparrow_later | since:crib_sparrow>=3 | gu | Sparrow has drawn me a picture. It is a ladder with nobody on it, and a very large sun. She says that is the one she likes best.
`,
}
