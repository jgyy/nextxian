import type { Arc } from "../types";

/**
 * Book Four, arc fifteen: the Seventh Voice. For fifteen years the Listeners have passed a wordless hum from clan to clan across
 * nine hundred miles of grass, a tune Su Mengjiao sings in the dark under Azure Cloud. It reaches the last rise and stops, because
 * nobody has been able to answer. Now the Ninth is here and the clans have stood nine days in a chain to carry the reply. Four
 * approaches: let the Elder answer her sister with her second ledger (a1, truth), hold the hill against the Inspector's Hush engine
 * (a2, force), forge the Inspector's recall and turn the engine round (a3, deceit), and take a collapsing relayer's place in the
 * chain (a4, mercy). A hidden route carries the First Spare's question. Cast: Su Mengjiao (heard), the Elder, Tamar, Odval, Chimeg,
 * Engineer Zhu, Deputy Inspector Rao, Ren Qiao, Hao Lan, Temur.
 */
export const voice: Arc = {
  id: "voice",
  name: "The Seventh Voice",
  scenes: String.raw`
=== voice_entry | The Last Rise
It is a low bare hill at the edge of the grass, and the hum is on it. You hear it a mile off. As you climb it resolves. It has a shape. It rises, falls, repeats. It is a tune without words, patient and slow and a little crooked, the kind that a woman hums while she does a thing with her hands.
The Elder has stopped the cart. She is sitting upright, with her hands in her lap. She has gone the colour of candle-wax.
“Jiao,” she whispers.
Along the ridge, in a line that runs back out of sight over the plain, the Listeners stand. They stand a yard apart, shoulder to shoulder, nine thousand of them, in black felt, in silence, with their faces to the east. Each has a hand on the shoulder of the one before. They have been standing for nine days. They are passing it, from palm to palm, the hum, as a man passes a bucket.
Tamar is at the top, on her heap of felts, with her blind face lifted. She does not turn.
“It stops here,” she says. “It has always stopped here. Nobody has answered.”
> truth | Go to the Elder, and ask whether she wishes to speak first. | voice_a1s1
> force | Notice, on the far horizon, a column of black smoke and a tower on wheels. | voice_a2s1
> deceit | Notice a rider in Garrison blue on the next ridge, galloping with a leather satchel. | voice_a3s1
> mercy | Notice a girl of fifteen at the end of the chain, swaying on her feet, who has not let go of the shoulder in front of her for nine days. | voice_a4s1
> inquiry | Hold up the red glass key, and say that you have brought a question from the hollow. | voice_h1 |  | tomb_asked | You carry no question from anyone.

// ---------------------------------------------------------------- a1: the second ledger
=== voice_a1s1 | Whether She Wishes
The Elder does not answer at once. She sits on the cart with her back very straight and her hands knotted in her lap, and she listens. The hum comes down the line of black coats like water down a stair. It reaches the top of the rise, and breaks against a stone, and begins again.
“It is her,” she says. “It is the tune she hummed over the lamp, when she was nine. I used to tell her to stop.”
“Do you want to answer?”
“I want to,” says Su Wanru, “more than I have ever wanted anything.” She does not look round. “I do not know how.”
“You speak.”
“Into the wind?”
“Into the line,” says Tamar, from her felts. “Put your hand on the last shoulder. Say what you would say. It will go.”
“It is nine hundred miles.”
“It is nine hundred miles of people,” says Tamar, gently. “They do not drop things.”
The Elder gets down from the cart. She crosses the grass, very slowly, to the girl at the end of the chain.
> truth | Go with her. | voice_a1s2 | npc:SU_VOICE_WIND
> mercy | Hold her sleeve. | voice_a1s2
> quiet | Wait. | voice_a1s2
> inquiry | Ask what she will say. | voice_a1s2

=== voice_a1s2 | What She Will Say
“I do not know,” says the Elder. She stands at the end of the line, with her hand a finger’s breadth from the black felt shoulder. “I have written to her every year. Fifteen letters. I never sent one. I put them in a drawer.”
“What did they say?”
“That I was sorry.” Her mouth twists. “They were beautifully phrased. Each year I improved them.”
“Which was the best?”
“The ninth. It had a very good second paragraph.” She exhales, a thin dry laugh. “I think I was writing for an examiner.”
Behind her, a few yards off, Hao Lan has taken out her notebook, and put it away again. Duan Wuyi is looking at his boots.
“Perhaps,” says the Elder, “I should simply say her name.”
“That is enough.”
“Is it?”
“It is the first thing,” you say. “You can say the rest after.”
She nods, once. She sets her hand on the girl’s shoulder. It is a small thin shoulder, quivering with fatigue.
“Jiao,” says Su Wanru.
She says it aloud, quite quietly, in her dry exact voice.
> truth | Wait. | voice_a1s3
> mercy | Hold your breath. | voice_a1s3
> quiet | Close your eyes. | voice_a1s3
> inquiry | Listen. | voice_a1s3

=== voice_a1s3 | The Wind Carries It
You feel it go. It is a strange thing to see: the name running along the line like a spark along a fuse. The girl’s shoulder takes it. The next woman’s. The next. It goes down the ridge in a ripple, shoulder to shoulder, mouth to mouth, until it is out of sight, over the swell of the plain.
For a long time there is nothing. The hum goes on. The sun climbs. A hawk hangs over the grass.
“It takes four hours,” murmurs Odval, at your side. “To go and come. If the people are quick.”
You wait. Nobody speaks. The Elder sits on a stone with her hands between her knees. Temur boils a kettle. Hao Lan reads the same page of her notebook for the fortieth time.
At the end of the fourth hour the hum changes.
It is only a small thing. A catch in the middle of a phrase. A rise where there should be a fall. The girl at the end of the line gasps. The woman before her laughs aloud, startled.
“She says,” says the girl, in a high wavering voice, “‘Wanru. You’re late.’”
> truth | Look at the Elder. | voice_a1s4
> mercy | Take her hand. | voice_a1s4
> quiet | Step back. | voice_a1s4
> inquiry | Ask what she says. | voice_a1s4

=== voice_a1s4 | You’re Late
The Elder puts her hands over her face.
She sits like that for a long time. Her thin shoulders shake without noise. It is the most private thing you have ever seen, and you look away, and there is nowhere to look. Nine thousand people are standing on the plain with their eyes lowered.
“I am,” she says at last, through her fingers. “I am very late.”
The girl at the end of the line translates, in her high thin voice. She says it exactly, in the Elder’s dry tone: I am. I am very late.
Four hours later the answer comes back. The girl is laughing and crying at once. “She says: ‘You always were. Even for your own wedding.’”
“I was never married.”
“She says, ‘Exactly.’”
The Elder makes a sound. It is a thin high crack. It is the beginning of a laugh. She wipes her eyes with the back of her wrist and sits up, and straightens her grey sleeve, and the corners of her mouth are shaking.
“Ask her,” she says, “if she has kept the comb.”
> truth | Smile. | voice_a1s5
> mercy | Pass it on. | voice_a1s5
> quiet | Look at the sky. | voice_a1s5
> inquiry | Ask which comb. | voice_a1s5

=== voice_a1s5 | The Comb
“The silver one,” says the Elder, when you ask. “It was our mother’s. She gave it to Mengjiao on her fourteenth birthday. I wanted it very much.” “I took it, once, and she cried for a week, and I was told to give it back. I gave it back. I thought: she does not deserve it.”
“Did you?”
“I thought it for years.” Her voice is brittle. “When they sealed her, I thought: well. She will not need a comb.”
The answer comes at dusk, in the girl’s trembling voice. It is a long one.
“She says: ‘It is in my hair. It is the only thing I took down. I use it every morning. I do not need to see it. I can feel where the teeth are.’” The girl stumbles. “She says: ‘I have thought of you, every time.’”
“Of me?”
“‘Of how cross you were. It was the best thing anyone ever did for me. It meant somebody wanted it.’”
The Elder sits with her mouth open. Her face has gone through a series of changes, each one more naked than the last.
“That is not what I meant,” she says, in a tiny voice.
> truth | Take her hand. | voice_a1s6
> mercy | Hold her. | voice_a1s6
> quiet | Pour tea. | voice_a1s6
> inquiry | Ask what she means. | voice_a1s6

=== voice_a1s6 | The Second Ledger
She has it in her bag. She has carried it for three hundred miles and not once taken it out: a slim, soft, black-covered book, with a cracked spine and a ribbon. She lays it on her knee and opens it. The pages are covered in tiny neat writing, in a small round hand, line after line.
“I keep two,” she says. “You know that. The first is the Law’s. The sentences. The second is what I felt when I signed.” She turns a page. “I have never shown it to anyone.”
“Why now?”
“Because she asked.” The Elder’s finger traces a line. “She said: ‘What did you write?’ I said: ‘Nothing.’ She said: ‘I do not believe you.’” She laughs shortly. “She has not changed.”
“Will you read it?”
“Yes.” Her mouth is thin. “All of it. Into the line.”
Duan Wuyi makes a noise. “It is a hundred and sixty pages, Wanru.”
“It is a hundred and sixty-one.” She smooths the page. “The last is blank. I should like to see it filled.”
She stands. She puts her hand on the girl’s shoulder. She takes a breath, and begins.
> truth | Stand beside her. | voice_a1s7
> mercy | Hold the lamp. | voice_a1s7
> quiet | Listen. | voice_a1s7
> inquiry | Ask Duan to write it down. | voice_a1s7

=== voice_a1s7 | Reading It Aloud
It takes three days. She reads it standing, with the girl at her elbow echoing each sentence into the line. She does not leave out a word. She reads the dates. She reads the names. She reads, in the same flat, exact tone, what she felt.
Day one, the first fourteen: I felt a mild nausea. I attributed it to the soup. Day one, the fifth: I felt nothing. I noted the absence. Day one, the seventh: I wrote the name very small.
Nobody speaks. The line takes it. The sun rises and sets. The night wind blows the lamp-flame sideways. On the second evening the Elder’s voice cracks, and cracks again, and she goes on.
On the third day she reaches the fourteenth. She stops. She holds the page at arm’s length, and looks at it, with her chin up.
“I felt,” she says, “relieved.”
The girl falters. The Elder repeats it, louder, clearly: “I felt relieved. Because it was not the fifteenth. Because I was told it would not be the fifteenth.” She swallows. “Because I thought: that is the last. I can stop.”
A sound goes down the line like a wave.
> truth | Stand firm. | voice_a1s8
> mercy | Hold her up. | voice_a1s8
> quiet | Close your eyes. | voice_a1s8
> inquiry | Wait for the answer. | voice_a1s8

=== voice_a1s8 | The Answer to the Fourteenth
It takes six hours to come back. It is the longest wait of the whole rite. The Elder sits on her stone with the black book on her knees, quite still, quite grey. She does not drink. She does not eat. She looks at the horizon, at the place where the line goes over.
Dusk. The first star.
The girl lifts her head. Her voice shakes so badly that she has to begin twice. “She says: ‘I know.’”
The Elder shuts her eyes.
“She says: ‘I knew when you signed. I felt it go. I was in the dark, in the middle of a verse. I felt the pen stop.’ She says: ‘I thought: she is all right. She stopped.’” The girl gulps. “She says: ‘I have never been angry. I have only been sad that you thought I would be.’”
The Elder’s mouth is open. No sound comes out.
“She says: ‘Wanru. I forgave you before they closed the stone. I forgave you on the stair. I have been waiting fifteen years for you to hear it.’”
Su Wanru bows her head, over the black book. A single tear falls on the last page.
> truth | Hold her. | voice_a1s9
> mercy | Weep. | voice_a1s9
> quiet | Look away. | voice_a1s9
> inquiry | Wait. | voice_a1s9

=== voice_a1s9 | The Blank Page
She writes on the blank page, at dawn. She does it standing, with a short stub of pencil that Hao Lan has lent her, in a small steady hand. She writes one line. She does not read it aloud. She tears the page from the book, with a clean, careful, definite tear.
She folds it in four.
“It is a letter,” she says. “The first I have sent.” She gives it to the girl at the end of the line. “For her. If you would.”
The girl takes it. She passes it, hand to hand, down the shoulder-chain. It goes over the swell of the plain in the pink light, a tiny white square, from palm to palm.
The Elder closes the black book. She holds it against her chest. Her face is grey and wet, and calm, and strangely young.
“What did you write?” says Hao Lan, unable to help herself.
“Eight words.” The Elder almost smiles. “It is not a very good letter. I did not revise it.”
She looks east.
“I wrote: I am coming. Do not wait. Put the kettle on.”
> truth | Smile. | voice_close | +voice_elder
> mercy | Hold her hand. | voice_close | +voice_elder
> quiet | Look at the dawn. | voice_close | +voice_elder
> inquiry | Ask if Mengjiao will answer. | voice_close | +voice_elder

// ---------------------------------------------------------------- a2: the engine
=== voice_a2s1 | The Engine on Wheels
It crawls toward the hill across the plain, a day’s march off: a tower on wheels, forty feet high, built of black girders and drawn by sixty oxen, with a steel bell at the top. Its flat note drifts over the grass once a minute, and every time your mouth goes dry.
Behind it come three hundred riflemen in grey, and a train of wagons.
“Hush engine,” says Ren Qiao, with the spyglass. He sounds almost admiring. “It is the Inspector’s own design. A mobile bell. They tow it to a hill, and ring it for a week. The Listeners cannot pass a word.” He hands you the glass. “They have worked out where the chain breaks.”
“How?”
“A deserter. Or a spy.” He shrugs. “It does not matter.”
Tamar has not moved. She sits on her felts at the top of the rise, with her face toward the sound.
“They will arrive by dawn,” she says. “They will ring it. And everyone on the ridge will be deaf for a day.” Her voice is quite calm. “It will be enough to break the chain.”
“Then we must stop it.”
“Yes,” says Tamar. “I thought you might say so.”
> force | Ask Ren how. | voice_a2s2
> truth | Ask what Tamar wants. | voice_a2s2
> quiet | Look at the engine. | voice_a2s2
> mercy | Ask about the oxen. | voice_a2s2

=== voice_a2s2 | The Plan
It is the simplest plan you have ever heard, and the most reckless. Ren Qiao lays it out on the ground with a stick, by lantern-light, in front of the assembled leaders. A line for the ridge. A circle for the engine. A scatter of crosses for the guards.
“We cannot beat three hundred rifles,” he says. “We can beat sixty oxen.”
“The oxen?”
“Cut the traces. A tower on wheels does not move without a team. If the team is loose, the tower is stuck.” He taps. “It will be dark. They will have a picket. I need thirty people who can crawl, and a very sharp knife.”
Jargal’s great laugh booms across the camp. “Thirty! I can find you three hundred!”
“I need thirty who can crawl quietly.”
“Ah.” The giant rubs his nose. “That is a smaller number.”
Yue Zhaoning has put up her hand. “I once crawled through a Garrison camp in a barrel of dried fish,” she says. “I should be happy to do it again.”
“We will not need the barrel,” says Ren Qiao.
“I will take it anyway.”
> force | Volunteer. | voice_a2s3
> truth | Ask about the risk. | voice_a2s3
> quiet | Look at Tamar. | voice_a2s3
> mercy | Say the oxen must not be hurt. | voice_a2s3

=== voice_a2s3 | Crawling
You go out at midnight. Thirty of you. Dark coats, blackened faces, knives in your teeth. You crawl across a quarter-mile of wet grass on your belly, through the dew and the damp and the small cold stones, with the lantern of the engine glowing ahead like a low red moon.
It is the longest quarter-mile of your life. A clump of sedge scratches your face. An owl calls. The grass smells of mud and sheep. Beside you Yue Zhaoning breathes in short controlled puffs and mutters imprecations at her knees. Behind you somebody sneezes.
“Idiot,” breathes Ren Qiao.
“Sorry,” says Temur’s voice, thickly.
You freeze. A rifleman has stepped out of the shadow of a wagon, with a lantern, fifty yards off. He holds it up. He peers. The light sweeps the grass above your heads.
“Fox,” he says at last, wearily. “Bloody fox.” He turns back.
Nobody moves for a full minute.
Then Ren Qiao begins to crawl again, very slowly, and the line of dark shapes follows.
> force | Crawl on. | voice_a2s4
> truth | Check your knife. | voice_a2s4
> quiet | Breathe. | voice_a2s4
> mercy | Look for the oxen. | voice_a2s4

=== voice_a2s4 | Sixty Oxen
They are tethered in a long line, behind the engine, sleeping. Sixty great shaggy shapes in the dark, lying with their legs folded and their breath steaming. They smell like warm hay. One lifts its head as you come up, and rolls a mild liquid eye, and blows.
You put out a hand. It sniffs your fingers, and lowers its head, and goes back to sleep.
“Poor beasts,” whispers Yue. She is stroking a brown cow’s nose. “They have been hauling this thing for three weeks. Look at the ropes. They have rubbed the hide off.”
“We should free them.”
“We are about to.” She draws her knife. “It is the only mercy I have to give.”
The traces are leather, cured and tarred, as thick as a wrist. Each has to be cut with a sawing motion, one at a time, in the dark, with the knife held low. It takes an hour. You work from one end of the line. Ren Qiao works from the other.
You are cutting the thirty-first when you hear the footsteps.
> force | Keep cutting. | voice_a2s5
> truth | Duck. | voice_a2s5
> quiet | Hold your breath. | voice_a2s5
> mercy | Calm the ox. | voice_a2s5

=== voice_a2s5 | A Sentry
He is nineteen, thin, bored, with a rifle slung and a pipe in his mouth. He has come round the end of the picket line to relieve himself. He stands for a moment, scratching, in the starlight, ten yards from where you crouch.
Then he sees the knife.
You see him see it. His mouth opens. He takes the pipe from it. His hand goes to his rifle-sling.
“Wait,” you say softly.
He stares. “Who—”
“I am not going to hurt you.” You get slowly to your feet. Your knife-hand hangs open. “I am going to ask you a question. You may shout afterwards.”
His eyes dart to the line of dark shapes behind you. “What is it?”
“Do you want to be here?”
The sentry blinks. It is such a strange question that he does not know what to do with it. He looks at his rifle. He looks at the sixty oxen. He looks at the bell, a vast black silhouette against the stars.
“No,” he says, very low. “I want to go home.”
> force | Nod. | voice_a2s6
> truth | Ask where home is. | voice_a2s6
> quiet | Hold out your hand. | voice_a2s6
> mercy | Say you will help. | voice_a2s6

=== voice_a2s6 | Home
It is a village in the north. He names it. He tells you the name of his mother, and his sister, and the dog. He tells it very fast, in a whisper, all in a rush, with his eyes on your face. He has been in the levy for four years. He has not been given leave. He thinks the dog is dead.
“Would you run?” you say.
“Where?”
“Wherever you like. Tonight.”
He thinks. He looks at the bell again. “They would catch me.”
“Not if the oxen were loose.”
He stares at you for a long second. Then, slowly, to your astonishment, he takes the rifle from his shoulder, and lays it on the grass. He takes off his belt and his bandolier. He lays them neatly beside it.
“I did not see you,” he says. He wets his lips. “I was relieving myself. I heard a noise. I thought it was a fox.”
“It was a fox.”
“Aye.” He nods. He pulls off his cap. “Good luck, ma’am.”
He walks away into the dark. He does not look back. His boots make almost no noise on the wet grass.
> force | Cut the next trace. | voice_a2s7
> truth | Watch him go. | voice_a2s7
> quiet | Breathe. | voice_a2s7
> mercy | Wish him well. | voice_a2s7

=== voice_a2s7 | The Last Rope
Ren Qiao cuts the sixtieth at four in the morning. He stands up from the grass with his knife in his fist and a long cut on his thumb, and looks at the line. The oxen are stirring. They have felt the slack. They rise one by one, groaning, shaking their heavy heads, and begin to move in a slow, vague, wandering herd away from the engine toward the dark grass.
The tower stands alone. Its great wheels are chocked. Its bell hangs silent. It looks absurdly small, and tired, and ugly.
“That is it,” whispers Yue. “It cannot move.”
“It does not have to move,” says Ren Qiao grimly. “They can ring it where it stands.”
He is right. A bugle blows from the camp. Lanterns flare. A hundred men tumble out of their tents, shouting. In the confusion, someone is running toward the tower, with a rope in his fist.
“The ringer!” cries Temur.
It is the engineer. You see him now, by the light of the torches: a stout little man in a leather apron, running up the iron ladder, bellowing. He reaches the platform. He seizes the cord.
“Stop him!” says Ren Qiao.
> force | Run. | voice_a2s8
> truth | Shout. | voice_a2s8
> quiet | Hold still. | voice_a2s8
> mercy | Call out to the engineer. | voice_a2s8

=== voice_a2s8 | Narmandakh’s Shard
You do not stop him. You cannot. But you have the shard.
It has been in the cart for a week, a curved plate of grey steel the size of a washtub, still cold, wrapped in canvas. You hurl it from your shoulder like a discus. It is not meant to be thrown. It sails ten feet up, trembles, and strikes the rim of the engine’s bell with a ring that stops your heart.
The two notes meet. They cancel.
You feel it as a hole in the air. A silence so complete that for an instant the world seems to have been unplugged. The engineer’s cord runs through his fingers. The bell swings. Its clapper meets nothing.
It does not ring.
The great black tower stands on its wheels at the foot of the hill, absolutely mute. A hundred Garrison men stand about it with their mouths open. The engineer is staring at his empty hands.
“It is cold,” he says, in a stupid voice. “The clapper is cold.”
In the stillness, from the ridge, comes the hum. It is louder than before.
> force | Stand. | voice_a2s9
> truth | Breathe. | voice_a2s9
> quiet | Listen. | voice_a2s9
> mercy | Look at the engineer. | voice_a2s9

=== voice_a2s9 | Deputy Inspector Rao
He arrives at dawn, on a tall white horse, in a coat of green silk. He is forty, narrow, elegant, with a little pointed beard and cold pale eyes. He reins in at the foot of the engine and looks at the cold bell, the bewildered engineer, the pile of abandoned rifles. Then he looks up at the ridge, at the long dark line of Listeners, standing in the pink light.
“Dear me,” says Deputy Inspector Rao.
He does not seem especially disturbed. He dismounts, and tosses the reins to an aide, and strolls over to the tower. He lays a gloved hand on the metal.
“Cold,” he says. “How very curious.” He sniffs the air. “Someone has been clever.”
“Sir—”
“Do not speak.” He lifts one finger. “I am thinking.” He thinks. At last he shrugs, a charming fatalistic gesture. “Well. It cannot be helped. The Inspector will be annoyed.”
He turns his pale eyes to the ridge.
“You,” he says, pleasantly, raising his voice so that it carries. “On the hill. The ones with the candles. May I say something?”
Nobody answers.
“I only wished to tell you,” says Rao, “that we are not leaving.”
> force | Step forward. | voice_close | +voice_held
> truth | Answer him. | voice_close | +voice_held
> quiet | Hold the line. | voice_close | +voice_held
> mercy | Watch. | voice_close | +voice_held

// ---------------------------------------------------------------- a3: the recall
=== voice_a3s1 | The Courier
He rides alone, hard, with a leather satchel strapped to his chest, along the next ridge. You see the dust first, a long yellow plume. Then the rider: a young man in Garrison blue, bareheaded, flogging a lathered bay. He is bound for the engine, a day to the east. He has the look of someone who has been riding for a week.
“Orders,” says Yue Zhaoning, with relish. She has appeared at your elbow, chewing a stalk. “From the Fort. I know that satchel. It is the Inspector’s own.”
“What is in it?”
“The engine’s instructions. Where to ring. When.” She spits the stalk. “Where the chain breaks.” Her grin widens. “I have been wanting to read that satchel for a month.”
“It will be guarded.”
“It will be sitting on a horse.” She considers. “A tired one.”
Hao Lan has come up behind her. Her notebook is out. Her ink-stained fingers are working. She is looking at the courier with the cool absorbed attention of a woman examining a lock.
“I have a thought,” she says.
“You always have a thought,” says Yue.
“This is a particularly good one.”
> deceit | Ask what. | voice_a3s2
> truth | Say it is dangerous. | voice_a3s2
> quiet | Watch the rider. | voice_a3s2
> mercy | Think of the horse. | voice_a3s2

=== voice_a3s2 | Writing as the Inspector
She does it by lamplight in the back of the cart, with a stolen order-form, a stub of Chancery ink, and a rubbing of the Inspector’s seal. It takes her three hours. She uses the Inspector’s own phrases. She is very good at phrases.
“To Engineer Zhu,” she reads aloud, when she has done. “The enterprise at the Last Rise is cancelled. The Listeners have been misidentified. The engine is to proceed at once to the Dry Lake to meet a column of the Fifth Division. Do not delay. Ring nothing until contact.”
“Will he believe it?”
“He will believe a signed order.” She blows on the ink. “He is an engineer. He wants to be told what to do. That is the whole of his character.”
“And the real order?”
“Is in the satchel.” She taps her chin. “We shall have to exchange them.”
Yue rubs her hands. “I will take care of the courier.”
“No violence.”
“Of course not.” She grins. “I shall merely hold his horse.”
Hao Lan glances at you. “You see,” she says. “I told you it was a good one.”
> deceit | Nod. | voice_a3s3
> truth | Say it is a forgery. | voice_a3s3
> quiet | Check the seal. | voice_a3s3
> mercy | Ask about the engineer. | voice_a3s3

=== voice_a3s3 | Holding a Horse
She does it in the middle of the night, at a well. The courier has stopped to water his horse. He is exhausted. He lets the animal drink and stumbles to a bench, and sits down with his head in his hands, and in the dark beyond the circle of the lamp a soft female voice says: “Sir, your horse has a stone in its hoof.”
He starts. “What?”
“Her near fore.” A short figure in a camel-driver’s coat is crouched by the bay, with the hoof in her lap. “You’ve cracked the frog. She’s going to go lame in about eight miles.”
“I have to be at the engine by dawn.”
“Then you’ll be walking.” She straightens, and tosses back her hat. “I can fix it. I do it for the caravans. Would you let me?”
He is too tired to argue. He lets her. In the lamp-light she has a face like a friendly hawk. He answers her. He is a boy of twenty. He is homesick.
At the end, when he rides away, the satchel on his chest is lighter by one sealed envelope.
> deceit | Smile. | voice_a3s4
> truth | Check the envelope. | voice_a3s4
> quiet | Wait. | voice_a3s4
> mercy | Thank Yue. | voice_a3s4

=== voice_a3s4 | What the Order Said
It says exactly what Hao Lan said it would. It is a fair copy of a Garrison order, two pages, on cream paper, written in the Inspector’s hand. It is dated three days before. It instructs Engineer Zhu to proceed to the hill at the edge of the grass, to ring the engine’s bell without cessation for seven days, and to take no prisoners.
“No prisoners,” reads Hao Lan, in a small flat voice.
“It is a formula,” says Duan, uncomfortably.
“It is a formula that means something.” She turns the page. “Here. It says: ‘The chain must not be reformed. If the Listeners will not disperse, they are to be fired upon.’”
Nobody speaks.
“He would,” says Temur at last, in a cracked voice. “The engineer. He is an obedient man.”
“Then he must not get this.” Hao Lan folds it carefully, and slides it into the fire. It crisps, curls, blackens. “He must get my order. The one that says he is needed elsewhere.”
“If he does not believe it?”
“Then we shall know in the morning,” says Hao Lan, “from the sound.”
> deceit | Watch the paper burn. | voice_a3s5
> truth | Say a word for the Listeners. | voice_a3s5
> quiet | Look east. | voice_a3s5
> mercy | Hold her hand. | voice_a3s5

=== voice_a3s5 | Delivery
You deliver it yourself. It is the only way. You ride out at first light on a borrowed pony, in a stolen Garrison greatcoat three sizes too big, with Hao Lan’s forged envelope in the breast pocket. You have a story: you are a messenger of the Fort, sent after the courier, who met with an accident. You have a name: Corporal Bayar. You have a limp, to explain the pony.
The engine is a mile off. It towers over you as you ride up, black and ugly. The riflemen stand about in the cold dawn, stamping, yawning, passing a flask. A fat quartermaster is cooking something in a pot. Nobody challenges you.
“Orders,” you say, hoarsely, to the first sergeant. “For the Engineer.”
He points with his chin. “On the tower.”
You climb. It is a hundred and four iron rungs. You make it, gasping, to the platform, and find the Engineer sitting cross-legged on the boards, with his back to the great bell, eating a boiled egg.
“Yes?” he says.
You hand him the envelope.
> deceit | Salute. | voice_a3s6
> truth | Stand still. | voice_a3s6
> quiet | Look at the bell. | voice_a3s6
> mercy | Wait. | voice_a3s6

=== voice_a3s6 | Engineer Zhu
He reads it twice. He is a stout, bald, harassed little man of fifty, with a stained leather apron and a magnifying lens on a string round his neck. He holds the letter at arm’s length, and then very close, and sniffs the ink. You do not breathe.
“Hm,” he says.
He turns it over. He looks at the seal. He rubs it with a thumb.
“The Fifth Division,” he says. “At the Dry Lake.”
“Yes, sir.”
“It’s a hundred and twenty miles.”
“Yes, sir.”
“In this weather.” He peers up at the sky. “With the oxen half-lame.” He sighs. “Typical. The Inspector never allows for the oxen.” He folds the letter. “Corporal. What is your opinion?”
You are not prepared for the question. “Sir?”
“Of this order.” He taps it. “Does it seem to you to be sensible?”
You consider your reply with great care.
“No, sir,” you say.
He looks at you. His eyes are tired and shrewd and rather kind.
“No,” he says. “It does not.” He picks up the boiled egg. “I shall obey it anyway.”
> deceit | Salute. | voice_a3s7
> truth | Say nothing. | voice_a3s7
> quiet | Step back. | voice_a3s7
> mercy | Thank him. | voice_a3s7

=== voice_a3s7 | The Engine Turns Round
It takes them two days to turn it. Sixty oxen are found, rounded up, harnessed. A new set of traces is made. A hundred men heave on the wheels. The riflemen march behind it, singing.
You watch it from the hill, with Hao Lan, and Yue, and a bowl of cold barley.
“It worked,” whispers Hao Lan. She is shaking with silent laughter. “It actually worked.”
“He knew it was false.”
“He knew it was inconvenient.” She wipes her eyes. “It is not at all the same. He needed an excuse not to ring the thing. I gave him one.” She shakes her head. “It was such a relief to him. I saw his face.”
“He said he would obey it anyway.”
“Yes. And he did.” She grins. “It is the most loyal thing a man can do. To follow an order he thinks is wrong, so that someone else can blame him.”
Behind you, the hum from the ridge has begun to rise. It is a long clear note, steady and free. It carries.
> deceit | Smile. | voice_a3s8
> truth | Listen. | voice_a3s8
> quiet | Hold the bowl. | voice_a3s8
> mercy | Look at the Elder. | voice_a3s8

=== voice_a3s8 | A Cheat’s Gift
The Elder is waiting for you at the top of the hill. She stands with her hands folded, small and straight, her face lit by the setting sun. She has not heard the details. She has only heard the hum. She turns, as you come up, and looks at Hao Lan.
“I understand,” she says, “that I am indebted to a forger.”
Hao Lan lifts her chin. “I prefer ‘amanuensis.’”
“Of course you do.” The Elder’s mouth twitches. She takes something from her sleeve. It is a folded sheet, much creased. “I have drafted a letter. It is in my best hand. I am afraid it is a little extravagant.”
“To whom?”
“To the Registrar’s office.” She unfolds it. “A formal complaint. Against myself. For the misuse of a seal.” She holds it out. “I should like you to correct the grammar.”
Hao Lan takes it. She reads. A slow, wicked, delighted smile spreads over her face.
“It is perfect,” she says.
“I know,” says the Elder. “I am rather good at it.”
She takes the sheet back, and tears it neatly in half, and drops it in the fire.
> deceit | Laugh. | voice_a3s9
> truth | Applaud. | voice_a3s9
> quiet | Watch the fire. | voice_a3s9
> mercy | Hug Hao Lan. | voice_a3s9

=== voice_a3s9 | The Chain Mends
By dawn the hum has found its feet. It runs the length of the ridge in a long unbroken ripple, hand to hand, voice to voice. The girl at the end sways, but does not fall. The Elder stands at her side, with her dry exact voice, speaking a name. The wind takes it.
It is not until the fourth hour that the answer comes. The girl has been bracing for it. She straightens as it reaches her. She says, in a clear high trembling voice:
“She says: ‘That was a very clever trick, Wanru.’”
The Elder blinks.
“She says: ‘The wind told me. It was very impressed.’” The girl is laughing now. “She says: ‘I did not know you had it in you.’”
The Elder stands very still. Then, slowly, she turns her head and looks at the small thin figure of Hao Lan, standing a little apart, with ink on her sleeve and a smear of soot on her chin.
“Neither did I,” she says. “I had help.”
She turns back to the line.
“Tell her,” says Su Wanru, “that I have been teaching.”
> deceit | Smile. | voice_close | +voice_forged
> truth | Bow. | voice_close | +voice_forged
> quiet | Step back. | voice_close | +voice_forged
> mercy | Look at Hao Lan. | voice_close | +voice_forged

// ---------------------------------------------------------------- a4: the relay
=== voice_a4s1 | Chimeg
She is fifteen, thin, with a round brown face and a plait that has come half undone. She wears a black felt coat that is too large for her, and boots stuffed with straw. She stands at the end of the line, a hand on the shoulder before her. Her knees are trembling. She is looking, wide-eyed and unfocused, at the sky.
She has been there nine days. She does not seem to know it.
“Is she all right?” you say, to the woman beside her.
“She is the last link,” says the woman. She is a stout grandmother with a mouth like a purse. “She carries it to the wind. It goes from her out over the plain.” She lowers her voice. “She has not eaten since Tuesday.”
“She must rest.”
“She cannot. If she lets go, the chain breaks.”
“Then someone must take her place.”
“No one can.” The grandmother’s mouth tightens. “It must be someone who can hear the hum. And there is nobody on this hill who can hear as well as Chimeg.” She pauses. “Except, they say, the Ninth.”
You look at the girl. Her lips are the colour of ash.
> mercy | Go to her. | voice_a4s2
> truth | Ask how she is. | voice_a4s2
> quiet | Watch. | voice_a4s2
> inquiry | Ask how long she can stand. | voice_a4s2

=== voice_a4s2 | The Last Link
“I am fine,” she says. She says it in a slow, remote, singsong whisper, without turning her head. “I am a bit cold. My feet are far away.” She smiles. “It is nice. I can hear everything.”
“What do you hear?”
“All of it.” Her hand tightens on the shoulder before her. “There is a woman, a long way off. She is under a mountain. She is humming. It is a very lonely sound.” Her eyes are unseeing. “I can tell she is trying to be cheerful.”
“Can you answer?”
“I am the answer.” A little frown. “That is the problem. I am the end of the line. Everything the clans say, it goes through me. But I am only a girl. I can only carry one thing at a time.”
“And now?”
“Now I am carrying the lullaby.” She blinks. “I cannot put it down. I do not know the words. I am afraid if I stop it will be lost.”
Her knees buckle. The grandmother catches her. The girl sags, soft as a rag doll, with her eyes half shut, and does not let go of the shoulder in front of her.
> mercy | Take her weight. | voice_a4s3
> truth | Call for water. | voice_a4s3
> quiet | Hold her. | voice_a4s3
> inquiry | Ask who can relieve her. | voice_a4s3

=== voice_a4s3 | The Hand That Won’t Let Go
They cannot prise her fingers off. You try, gently, one at a time; the knuckles are white as bone and locked in a spasm. The shoulder she holds is rigid with fatigue. The woman in front glances round, grey-faced, but does not say a word.
“She cannot feel it,” says the grandmother. “She will do it until she dies.”
“Then I will take her place.”
“You do not know how.”
“Tell me.”
The grandmother looks at you for a long time. Then she sighs. “It is not difficult. You put your right hand on the one before. You put your left on the one behind. You do not hold. You let it pass through. Like water through a sieve.” She taps her breastbone. “You keep your heart open. And you try not to want it.”
“Not to want it?”
“The tune. If you hold on, it tears.” Her stout face is grave. “It has to go through you, and out. It has to be someone else’s the whole way.”
You nod. You step in beside the girl. You put your right hand on the shoulder before.
> mercy | Take her left hand. | voice_a4s4
> truth | Close your eyes. | voice_a4s4
> quiet | Breathe. | voice_a4s4
> inquiry | Ask her to let go. | voice_a4s4

=== voice_a4s4 | Taking Over
It is the strangest sensation you have ever felt. For a moment nothing happens. Chimeg’s hand rests on your left, cold and slack. The shoulder under your right is warm. You breathe. You stand.
Then the hum goes through you.
It is not a sound. It is a feeling, like a note struck on a very long wire. It begins in your right palm, a low thrum, and travels up the bones of your arm, and settles in the middle of your chest. It rests there. It rings. You feel the cold black seed turn over beneath your ribs, and open, and answer.
You hear her.
It is a woman’s voice. It is low and warm and a little hoarse. It is humming. It is not humming a tune any more. It is humming the specific tune of a particular person, and the person is you.
She has been humming it for fifteen years. She has been humming for the one who would come. She knew the tune before you were born.
Chimeg lets go. She sinks to her knees in the grass. The grandmother catches her.
You are the last link.
> mercy | Hold on. | voice_a4s5
> truth | Say her name. | voice_a4s5
> quiet | Let it through. | voice_a4s5
> inquiry | Listen. | voice_a4s5

=== voice_a4s5 | Not Wanting It
You let it through. It is the hardest thing you have ever done. It wants to stay. It fills your chest. It threatens to break your ribs.
Don’t want it, the grandmother said.
You try. You think of the bridge. You think of the lamp. You think of nine children in a shop on the coast, sleeping in a row. You think of a hollow in a mound, and a small cold hand.
The tune goes out.
It leaves you in a long slow breath, and rises over the plain, lighter than it came. It is the shape of her tune, but with a difference. It has a catch in it. A turn at the end. An upward lilt, as of one who asks a question.
It is yours.
The wind catches it. You feel it go. You feel it travel, out over the grass, from palm to palm, east and south and east again, a tiny spark running down a wire nine hundred miles long.
Beside you the grandmother is crying.
> mercy | Stay. | voice_a4s6
> truth | Breathe. | voice_a4s6
> quiet | Close your eyes. | voice_a4s6
> inquiry | Ask what she heard. | voice_a4s6

=== voice_a4s6 | A Tune Comes Back
It comes back before dawn. It must have been waiting at the edge of the plain. You are standing on the rise in the grey cold, with your arms trembling and your feet numb, and it arrives all at once, a soft warm pressure in your right palm. You gasp.
It is a voice. Not in words. It is a tune, laid over yours, bending to meet it. It is the same tune. But it is deeper. It is older. It has a mother’s rhythm in it, steady as a rocking chair.
She is singing it back.
You do not know how you know that it is singing back. It is as if the two of you had been singing the same song for fifteen years, in separate rooms, and had only now realised that the walls were thin.
“Well,” says the grandmother, softly. “There you are.”
You stand on the hill with tears running down your face, holding the hand of a girl you have never met, nine hundred miles from the woman who has been waiting for you. The tune goes through you and out. It never stops.
> mercy | Hold it. | voice_a4s7
> truth | Laugh. | voice_a4s7
> quiet | Listen. | voice_a4s7
> inquiry | Ask what the grandmother heard. | voice_a4s7

=== voice_a4s7 | What the Grandmother Heard
“A mother,” says the grandmother. She has sat down on the grass, with Chimeg’s head in her lap. She strokes the girl’s hair. “I have heard it before. It is a very old tune. My mother sang it, to put me to sleep.” She smiles. “It goes back a long way. Further than the Order.”
“What is it?”
“A cradle-song.” She hums a bar. “It has no words. Every mother sings it differently. But it has always had a place, in the middle, where you stop.” She taps her lip. “A rest. A held breath. Like waiting for a sleeper to turn.”
“That is where the question is.”
“Aye.” She nods. “I always thought it was only a pause.” Her old eyes are bright. “But your voice put something in it. Did you feel?”
“What?”
“An answer,” says the grandmother. “She was waiting for it. For the one who would fill in the rest.”
You look down at Chimeg. The girl is asleep. Her face is slack and peaceful, and a little smile has crept onto her mouth.
> mercy | Smile. | voice_a4s8
> truth | Bow. | voice_a4s8
> quiet | Watch her sleep. | voice_a4s8
> inquiry | Ask what happens now. | voice_a4s8

=== voice_a4s8 | The Cost of Carrying
It costs you three days. The Listeners bring you soup. They hold the cup to your lips. They wrap a blanket round you, and strangers stand and pass the hum, and do not complain. The Elder sits at your feet, with her back against your knee, and does not speak. Duan holds the lamp.
At the end of the third day your knees give. You go down. Hands catch you. Someone says your name. It is the first time you have heard anyone use it in a month, and the sound is so strange that you laugh.
“You may stop,” says Tamar.
“I can’t.”
“You may. She has heard.” The old woman’s hand finds your cheek. It is dry and papery and warm. “The rest is hers to carry. She has the strength. She has had it all along.”
“What did she say?”
“Ah.” Tamar smiles her wheezing smile. “She said a great many things. But the last is the one you will want.”
She bends close.
“‘Don’t be frightened,’” she whispers. “‘I am nearly home.’”
> mercy | Weep. | voice_a4s9
> truth | Thank her. | voice_a4s9
> quiet | Lie still. | voice_a4s9
> inquiry | Ask what home means. | voice_a4s9

=== voice_a4s9 | Chimeg Wakes
She sleeps for two days, and wakes with a clear head and a voracious appetite. She sits up in the felt tent, in her too-large coat, with a bowl of mutton in each hand, and tells the assembled elders, with her mouth full, everything she heard.
It is not much. She heard a woman humming. She heard the woman stop. She heard another voice, much farther off, a girl’s, very small, ask a question. She heard the woman laugh.
“I think she was crying, though,” says Chimeg. She frowns at her mutton. “It sounded the same.”
Tamar nods slowly. “It often does.”
“Is that bad?”
“No.” The old woman reaches out. She finds the girl’s hand and squeezes. “It means she is alive.”
Chimeg chews. She swallows. She looks at you across the tent, with a frank unabashed gaze, and a smear of gravy on her chin.
“Thank you for taking over,” she says. “I would have fallen over.”
“You did.”
“Yes. But I fell over with the hum still going.” She beams. “It was very nice of you to catch it.”
> mercy | Smile. | voice_close | +voice_relay
> truth | Bow. | voice_close | +voice_relay
> quiet | Hand her the bowl. | voice_close | +voice_relay
> inquiry | Ask what she will do. | voice_close | +voice_relay

// ---------------------------------------------------------------- hidden: the Spare’s question
=== voice_h1 | A Question from the Hollow
You hold up the red glass. You say, to the Matriarch, to the Elder, to the nine thousand figures on the ridge: I have brought a question. It was not mine. It was given to me in the dark, by a girl of seven, and I promised to carry it as far as it would go.
The hush that follows is absolute. Tamar’s head has come up.
“The Spare,” she says. “She spoke to you.”
“She asked if there was room.”
“Ah.” The blind face is working. “My sister has told me about her. She hums. She has hummed for seven hundred years.” Her hands tighten on her stick. “I did not think it would be answered in my lifetime.”
“It must be taken to Mengjiao.”
“It must be taken to the one who sits in the dark,” agrees Tamar. “Because she is the only one who can answer.” She lifts her chin. “Put your hand on the line, child. Say it. And do not be afraid. The wind has been waiting for this question for a very long time.”
> inquiry | Go to the end of the line. | voice_h2
> truth | Take the Elder’s arm. | voice_h2
> mercy | Hold the glass. | voice_h2
> quiet | Wait. | voice_h2

=== voice_h2 | Is There Room
You do not say it aloud. You do not need to. You put your hand on the girl’s shoulder, and the red glass in your other palm, and you let the words rise in your throat as they came to you in the hollow. Is there room? In the book. A line. Is there a line for me?
It goes. You feel it go. It is a very small thing, a child’s question, and it rides the wind like a leaf. It goes from shoulder to shoulder down the long dark ridge, hand to hand, and as it goes the whole ridge changes. You can feel it. The nine thousand have understood what it is they are carrying.
They do not murmur. They do not hold their breath. They go on, quietly, passing it, as one passes a sleeping infant from arm to arm. A woman weeps, silently. An old man bows. A child, seven or eight, looks up at the sky, and her lips move.
It crosses the plain. It crosses the hills. It goes down, and down, nine hundred miles, into the dark.
You wait.
It takes seven hours. It is the longest seven hours of your life.
> inquiry | Stay. | voice_h3
> truth | Hold the Elder’s hand. | voice_h3
> mercy | Watch the line. | voice_h3
> quiet | Close your eyes. | voice_h3

=== voice_h3 | What Mengjiao Answered
The answer is brief. It comes up the line like a bell, one clear note at a time, so that every Listener on the ridge hears it and passes it on. They say it aloud this time, a murmur, a hush, then a rising wave, until it is a vast soft thunder.
There is room.
There is room. There is room.
The Elder has her hand to her mouth. Duan Wuyi has dropped his lamp. The red glass in your palm grows warm, then hot, then glows. It rises from your hand of its own accord and hangs in the air before you, turning, a small bright ruby, as though lit from within.
There is a line, the voice says, and then another, in a lower register: a woman’s, warm, tired, amused, one you have never heard but will know for the rest of your life.
I have written it myself. In the dust, with a comb. I have been saving the space.
The glass chimes once, softly, and goes dark. It drops into your palm. Inside it, very small and very clear, is a single character.
It is a name.
> inquiry | Read it. | voice_close | +voice_spare
> truth | Weep. | voice_close | +voice_spare
> mercy | Hold the glass. | voice_close | +voice_spare
> quiet | Say nothing. | voice_close | +voice_spare

// ---------------------------------------------------------------- close
=== voice_close | What Mengjiao Told Them
She tells them on the last night, in the long quiet, when the rite is done and the fires are low. It comes up the line in pieces, a sentence at a time, from palm to palm, and the Elder writes it down. She takes dictation from nine thousand people.
+[how] voice_elder | The Elder read her second ledger aloud for three days, and her sister forgave her on the stair.
+[how] voice_held | A bell was silenced with a thrown shard, and an elegant man said he would not leave.
+[how] voice_forged | A forged order turned a tower on wheels, and a clever girl was thanked by a saint.
+[how] voice_relay | You took a fifteen-year-old’s place in the chain and let the tune pass through you.
+[how] voice_spare | A question from a hollow crossed nine hundred miles and came back as a line.
It is not long. When it is done, she reads it back, once, in her dry voice. It says:
The masters are not hiding. They are going up. On the ninth night of the ninth month, three of them will climb the Heavenly Stair, and the Stair is paid for in names. They have chosen the name. It is the Keeper of Keys. They are holding him in the Ash Archive, and the Archive is besieged from within.
Come by the Glass Sea. Not by the Pass. The Pass is watched. The Sea is not.
I am nearly home. Do not wait for me.
The Elder lays down her pencil. Her face is stone.
“Lin Yuan,” she says.
> truth | Take her hand. | voice_close2 | +b4q_voice
> mercy | Say you will go. | voice_close2 | +b4q_voice
> quiet | Look east. | voice_close2 | +b4q_voice
> inquiry | Ask how many days. | voice_close2 | +b4q_voice

=== voice_close2 | Forty Days
“Forty-one,” says Duan Wuyi, after a long silence. He has the calendar open on his knee. He is counting on his fingers. “By the Concord’s reckoning. The ninth night of the ninth month.” He looks up. His soft face is drawn. “It is nine hundred miles to the mountain, and the Glass Sea is in the way.”
“How long to cross it?”
“I do not know. No one has crossed it in a generation.” He rubs his eyes. “It is said that the sand has fused to glass. That it is sharp underfoot. That in the day it blinds, and at night it sings.”
“It is the quickest route.”
“It is the only route that is not watched.” He nods. “If Mengjiao says so.”
“Then we go.”
“Yes.” He closes the calendar. “I only wish to observe that the odds are poor.”
“They are always poor,” says the Elder. She has risen. She stands very straight in the lamp-light, small and grey, with the black book under one arm, and her chin lifted. “It is the only thing that has remained constant.”
She looks at the east.
“I have a boy to fetch,” says Su Wanru.
> truth | Nod. | b4_close | bond:ren+2
> mercy | Smile. | b4_close | bond:ren+2
> quiet | Pick up the shard. | b4_close | bond:ren+2
> inquiry | Ask how the Listeners will help. | b4_close | bond:ren+2

`,
  scenarios: String.raw`
$ SU_VOICE_WIND | trust+5 respect+4 fear+4 | elder | The Elder stands on a hill and hears her sister, for the first time in fifteen years.
hostile: I had prepared a great deal. I had a speech. It began: Mengjiao, I have wronged you. I got as far as the word wronged. After that there was only wind, and a long humming, and somebody beside me saying my name.
wary: I did not expect her to sound so cheerful. Fifteen years in the dark, and she hums. I do not know what I expected. A rebuke. A silence. It is much harder to be forgiven by a person who has not been angry.
neutral: She said: you are late. I said: I know. She said: you were always late. We laughed. It was the strangest laugh I have ever given. I thought it would break something. It did not. It only made the hum a little louder.
warm: I have told her about the child on the hill. I have told her about the cards and the lamp and the coast. She listened, and from time to time she said ‘good.’ I had forgotten that she says it that way, as if each thing were a stone to be laid.
devoted: There is nothing in the second ledger now. I read it all to her, every line, every feeling, and she took it. I have an empty book. I intend to fill it with something better.
`,
  remarks: String.raw`
% voice_mengjiao_later | since:b4q_voice>=3 | ren | The hum has not stopped since the hill. It is in the wind at night. I find that I fall asleep to it. It was the tune she hummed at the Ash Bridge, when I was seventeen. I did not know I knew it.
% voice_chimeg_later | since:voice_relay>=4 | gu | Chimeg, the girl who carried the hum, has been sleeping for two days. Odval says she will wake with a voice like a bell. I think she is the bravest person I have met, and I have met a person who walked into an abyss.
`,
}
