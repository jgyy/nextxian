import type { Arc } from "../types";

/**
 * Book Five, arc four: the Mirage City. A city of white glass towers stands on the horizon at noon and is gone by dusk, and every
 * day it is a little nearer. It is a refuge drawn from memory by the struck cartographer Ye Sing, and the people who live there
 * are the forgotten: comfortable, beautiful, and slowly forgetting that they ever wanted to leave. Four approaches: wake the
 * citizens with their true names (a1, truth), break the Great Glass at the centre (a2, force), take the offered names and play
 * along (a3, deceit), and sit with the old woman who dreams it (a4, mercy). A hidden route spends Echo's name. Cast: Ye Sing, the
 * Gatekeeper Ember, Lady Hollow, the Elder, Hao Lan, Gu, Duan Wuyi, Ren Qiao.
 */
export const mirage: Arc = {
  id: "mirage",
  name: "The Mirage City",
  scenes: String.raw`
=== mirage_entry | The City That Was Not There
It stands on the horizon at noon: a cluster of white towers, slender as candles, rising out of a shimmer of silver. Domes, bridges, a long curving harbour wall. A flag of pale blue on the tallest spire. It is the loveliest thing you have seen on the Sea. By dusk it is gone.
It is nearer the next day.
On the fourth noon it is two miles off, and the skiffs have stopped of their own accord. Nobody gave the order. The sails simply hang. Gu is standing at the bow of Sail with his mouth a little open. Hao Lan has put down her notebook. Even the Elder is gazing, with a still, soft face, at the spires.
“Mirages are reflections,” says Duan Wuyi, in a strained voice. “Of something real. Beyond the horizon. There is no city within three hundred miles.”
“Then what is it a reflection of?”
“I do not know.”
A bell rings, clear and sweet, from the towers. A procession of figures in white comes out along the harbour wall, with lanterns. They are waving.
“They’re inviting us,” says Gu, softly.
“Yes.”
“Can we go?”
> truth | Sail in, and ask the first person on the quay for their name. | mirage_a1s1
> force | Notice that the harbour wall is lined with soldiers in silver armour, and that none of them is moving. | mirage_a2s1 | needs:4
> deceit | Notice that every resident on the quay is holding a card with a name on it, and that there is a spare one waiting for each of you. | mirage_a3s1
> mercy | Notice, in the highest tower, a single window with the lamp lit, and a figure at it who is not waving. | mirage_a4s1
> inquiry | Say the name the child Echo was given, and see whether the city has heard of her. | mirage_h1 |  | roots_restored | The city has no use for names you cannot spend.

// ---------------------------------------------------------------- a1: true names
=== mirage_a1s1 | The Quay
The quay is white marble, warm underfoot, swept clean. The residents crowd it in loose robes of ivory and pale green, smiling, unhurried. They have the soft glow of people who have never been cold. A man of sixty takes your line and ties it to a ring. A girl hands you a cup of something sweet.
“Welcome,” says the man. “Welcome. You’ve come a long way.”
“We have.”
“You’ll be tired. There are beds. There are baths.” He beams. “There’s no hurry. Nothing here is ever in a hurry.”
“What is your name?”
He blinks. His smile does not waver. “I’m called Harbour,” he says. “It’s very nice. I was given it last year.”
“And before?”
“Before?” He laughs, gently. “There wasn’t a before. Everyone says so. We came here, and it was lovely, and the rest has rather faded.”
Beside you, Hao Lan has taken a sharp breath.
“They don’t remember,” she says. “Not any of them. They’re *struck*.”
> truth | Ask his name again. | mirage_a1s2 | npc:SU_MIRAGE_NAME
> mercy | Take the cup. | mirage_a1s2
> quiet | Look at the city. | mirage_a1s2
> inquiry | Ask how many are here. | mirage_a1s2

=== mirage_a1s2 | Nobody Remembers
“Eleven thousand, give or take,” says Harbour, comfortably. “We don’t count. It would spoil it.” He pats your hand. “You’ll love it. Nobody has ever left unhappy.”
“Has anyone left?”
“Left?” He frowns, faintly, as at an unfamiliar word. “It’s a long way to anywhere. Why would they?”
You look past him. The quay stretches away between rows of white arcades. In every arch a resident sits or strolls, serene. A woman is painting a wall. A pair of children chase a hoop. An old man plays chess against himself, smiling, moving both sides.
Everyone is happy. It is a flat, glassy happiness, with no edges.
“Nobody argues,” says Duan Wuyi, softly.
“No.”
“Nobody weeps.”
“No.”
“I find that,” says Duan, “rather the most frightening thing I have seen.”
The Elder has said nothing. She is gazing at the old man at the chessboard. Her face is quite still. A line has appeared between her brows.
> truth | Follow her gaze. | mirage_a1s3
> mercy | Stay near her. | mirage_a1s3
> quiet | Watch. | mirage_a1s3
> inquiry | Ask her what she sees. | mirage_a1s3

=== mirage_a1s3 | The Chess Player
“I know him,” says the Elder. Her voice is a thread. “He is Censor Bai. He sat on the Board of Arbitration. I signed his dismissal.” She takes a step toward the arcade. “Twenty-two years ago. He had refused to file a certain report.”
“Are you sure?”
“I wrote the order. I remember the date. The thirteenth of the third month.” She swallows. “He was fifty-one. He played chess. He used to play both sides.”
The old man looks up from the board. He sees her. His eyes are pale and kind and entirely vacant. He smiles.
“Good afternoon,” he says. “Will you join me?”
“Bai,” says the Elder.
“I’m sorry?” His smile deepens. “I’m called Tranquil.”
“Censor Bai Lun.” She says it clearly. “Of the Fourth Peak. Your wife was named Orchid. You had a dog called Ink.”
Something flickers in his face. A shadow, like a bird passing a window. His hand, on the black king, trembles.
“Ink,” he says.
> truth | Wait. | mirage_a1s4
> mercy | Hold the Elder’s sleeve. | mirage_a1s4
> quiet | Watch his hand. | mirage_a1s4
> inquiry | Ask about the dog. | mirage_a1s4

=== mirage_a1s4 | Ink
“He had a white patch on his ear,” says the Elder. She is barely audible. “He slept under your desk. You used to feed him pastry.” She pauses. “You never forgave me for the dismissal. You said so in your letter. It was a very good letter.”
The old man is staring at the black king.
“He died,” he whispers. “In the winter. I didn’t… there was a hole. In the garden. I wept for a week.” He raises his head. His eyes are no longer vacant. They are wet and enormous and horrified. “Wanru? Is that you? What have they done to me?”
“You came here.”
“I came—” He looks round at the white arcades. At the smiling children. At the blank-eyed painter. His mouth falls open. “Dear Heaven. How long?”
“Twenty-two years.”
“I thought it was a week.” He puts his hands over his face. “I thought I’d been here a *week.*”
All along the arcade, heads have begun to turn.
> truth | Hold him. | mirage_a1s5
> mercy | Stand back. | mirage_a1s5
> quiet | Watch the crowd. | mirage_a1s5
> inquiry | Ask Harbour. | mirage_a1s5

=== mirage_a1s5 | The Ripple
It runs along the arcade like wind in barley. A woman puts down a brush. A boy drops his hoop. The ones nearest Bai Lun are the first: they stare, frowning, as if listening to a voice at the edge of hearing. Then the next. Then the next. A murmur rises. Names. Half-names, fragments, whispered: *Amala. Dun. Little Wei. My brother. The river.*
“Stop,” says Harbour, in a high anxious voice. “Please. It’s so *nice* here.”
“Do you remember your name?” you say.
“It’s Harbour!”
“Before.”
He tries. You watch him try. He stands on the marble quay with his hands clenched, his smooth face working, as if lifting a stone. A tear runs down his cheek. “It started with a ‘T,’” he says. “I think.”
“Tomas?”
“No.”
“Tan?”
“*No.*” He sobs. “Something… with a rhythm. Like a bell. Two beats.”
“Tao Tao.”
His head goes up. The tears stop. “That’s it,” he says, in an astonished whisper. “That’s me. I’m *Tao Tao.* I make shoes.”
> truth | Smile. | mirage_a1s6
> mercy | Hold him. | mirage_a1s6
> quiet | Look at the crowd. | mirage_a1s6
> inquiry | Ask what he remembers. | mirage_a1s6

=== mirage_a1s6 | Shoes
He remembers everything. It comes pouring out of him in a flood, there on the warm quay: a cobbler’s shop in a lane in the Southern River Provinces, a wife with a sharp tongue, a son who wanted to be a sailor. A debt. A forged signature. A knock on the door in the night. A man in green who said, *There is a place you can go.*
“I wanted to,” he says. His voice cracks. “I was so tired. I thought, if I just go, they can’t take the shop. They can’t… ” He looks at his hands. “I left them. My wife. My boy. I left them in the shop.”
“How long ago?”
“I don’t know.”
“Eight years,” says Hao Lan. She is holding a battered ledger she has taken from the harbour-master’s office. “It’s in the register. Tao Tao. Struck on the fourth of the sixth month. Arrived on the sixth.”
“Eight years.” His mouth quivers. “Wick will be nineteen.”
“Who is Wick?”
“My boy.” Tears pour down his round face. “I called him Wick because he was so thin.”
You do not speak.
> truth | Take his hand. | mirage_a1s7
> mercy | Weep. | mirage_a1s7
> quiet | Wait. | mirage_a1s7
> inquiry | Ask where the shop was. | mirage_a1s7

=== mirage_a1s7 | The Register of the Quay
There is a register. It is kept in the harbour-master’s office, in a tall white tower, and nobody has opened it in years. Hao Lan finds it in a stone alcove, wrapped in a silk bag, with a dozen years’ dust on the cover. She carries it back to the quay in both arms. It is as thick as a loaf.
It lists everyone. Name, date, origin. Eleven thousand and four entries. The earliest is two hundred and eleven years old.
“They’ve been coming for two centuries,” she says. “A few a week. The struck. The ones who don’t want to wait.” She turns the pages with a shaking hand. “And they all signed in with a new name. They each gave up the old one.”
“Why?”
“Because it was the price.” She taps the page. “It says here. *Entry is by exchange. The resident surrenders his name to the city, and receives in return a place.* The city *keeps* them.”
“Where?”
“I don’t know.” She looks up, grey-faced. “But I think that’s what makes it a mirage. It’s made of eleven thousand names.”
> truth | Read on. | mirage_a1s8
> mercy | Hold her. | mirage_a1s8
> quiet | Look at the towers. | mirage_a1s8
> inquiry | Ask what happens if they take them back. | mirage_a1s8

=== mirage_a1s8 | If They Take Them Back
“The city would fall,” says Duan Wuyi. He has been reading over her shoulder, with his lips moving. “It is built of the surrendered names. If they are taken back, the walls would go.”
“And the people?”
“Would be left on the Sea.” He swallows. “Eleven thousand, in the middle of three hundred miles of glass. With the clothes they stand in.”
“We could carry them.”
“Where?”
“The far shore. To the camps.” You look at the sea. “It’s six days.”
“With three skiffs.” The Censor-General shakes his head. “It is arithmetic. We have thirty seats.”
“Then they must walk.”
Nobody says anything. Along the quay the residents are murmuring, their names, their half-names. Tao Tao is weeping into his wife’s lost apron, which he has found in the stitching of his robe. The old chess player sits with his black king in both hands.
“I will say it again,” says the Elder, in a dry quiet voice. “There is no ledger here. These people were never written. They need no permission to leave.”
> truth | Nod. | mirage_a1s9
> mercy | Take her hand. | mirage_a1s9
> quiet | Look at the sea. | mirage_a1s9
> inquiry | Ask Harbour. | mirage_a1s9

=== mirage_a1s9 | A Long Walk
They go in the morning. It is the strangest procession you have ever seen: eleven thousand people in white robes, walking out across the glass, in the dawn, carrying their belongings in sheets. Most have remembered. Some have not. Those who remember hold the hands of those who don’t. Behind them the city thins and wavers, like breath on a mirror, and the towers go one by one into the haze.
By noon there is nothing there. Only the shining plain, and the long line of figures, going east.
The skiffs sail slowly beside them. You take the weakest aboard, three and four to a hull. Tao Tao rides in Return, with his chin on his chest. At intervals the Elder steps among the walkers, with her notebook, taking names. She writes them down. She says each aloud. She tells each one: *you are written.*
“It is a terrible burden,” says Duan Wuyi, watching.
“Is it?”
“She has no notion how many she has promised to put back.” His voice shakes. “Eleven thousand.”
“She does.”
“Then she’s mad.”
“Perhaps,” you say. “Or she’s found the right size.”
> truth | Walk with them. | mirage_close | +mirage_woke
> mercy | Carry a child. | mirage_close | +mirage_woke
> quiet | Take the tiller. | mirage_close | +mirage_woke
> inquiry | Ask Hao Lan to count. | mirage_close | +mirage_woke

// ---------------------------------------------------------------- a2: the Great Glass
=== mirage_a2s1 | Silver Soldiers
They stand along the harbour wall in a long unbroken line, forty paces apart, in suits of mirror-bright plate. Each holds a long glass spear. Each wears a visored helm, closed. None of them moves. In the blazing light they are almost invisible: you see only the sky reflected in their armour, a wall of dazzle.
“Gatekeepers,” says Ren Qiao, shading his eyes. “Look at the way they stand. Not a soldier among them. Those are statues.” He narrows an eye. “Statues that keep very still.”
“Is that a trick?”
“It’s a very good one.” His hand is on his hilt. “The first man at the gate is real. The rest are the reflection of the first. Watch the shadows.”
You watch. The shadows of the soldiers, in the noon glare, all point the same way. But the shadow of the third, on the left, is a fraction short.
“Ah,” says Ren Qiao. “There he is.”
He steps up on the prow of Light. He cups his hands. His voice rings across the water.
“Gatekeeper! We would speak with you!”
The soldier in question lifts his visor.
> force | Stand firm. | mirage_a2s2 | needs:4
> truth | Call out. | mirage_a2s2
> quiet | Hold your breath. | mirage_a2s2
> mercy | Look at his face. | mirage_a2s2

=== mirage_a2s2 | Ember
He is young. That is the first astonishment. A boy of twenty-two, with a long sad face, a mop of red hair, and eyes the colour of weak tea. He looks as though he had not slept in a year. He lowers his spear and looks down at the skiffs with great weariness.
“I am Ember,” he says. “I guard the city.” His voice is soft, a little slurred. “I have guarded it for seven years.”
“From whom?”
“From people who would take it away.” He gestures vaguely. “It is very beautiful. It would be a pity.”
“Who set you?”
“The Lady.” He blinks, slowly. “Lady Hollow. She makes the rules.” He rubs his eyes with a gauntleted hand. “I don’t remember her face. But she is very kind. She said, if I stood here, nobody would ever be hurt.”
“Are you hurt?”
“No.” He considers. “I’m tired.”
“How long since you slept?”
He thinks. His brow furrows.
“I don’t,” he says, in a small voice. “Sleep.”
Ren Qiao, on the prow, has gone grey.
> force | Ask for passage. | mirage_a2s3
> truth | Ask about the Lady. | mirage_a2s3
> quiet | Watch Ember. | mirage_a2s3
> mercy | Say you are sorry. | mirage_a2s3

=== mirage_a2s3 | Passage Refused
“I can’t let you in,” says Ember. “It’s the rule.” He sounds apologetic. “The Lady says there are to be no visitors with weapons. You have a sword.”
“I’ll leave it.”
“You’d have to leave all of them.” He eyes the party doubtfully. “I think the old woman has a knife. And the tall one has a stick. And that man is carrying a very large book.” He frowns. “A book can be a weapon.”
“Not in my hands,” says Duan Wuyi.
“No,” says Ember, with deep sadness. “But I’m not allowed to judge.”
He lifts his spear. The other statues, all along the wall, lift theirs with a single hiss of glass. The sound runs the length of the harbour. Light dances on the water.
“I don’t want to hurt you,” he says. He sounds as if he were on the edge of tears. “I really, really don’t. But if you don’t go, I’ll have to.”
Ren Qiao draws his sword. He holds it up, flat, in both hands, and then slowly lays it on the deck.
“Then,” he says, “let’s talk about the rule.”
> force | Stand with him. | mirage_a2s4
> truth | Lay down your own weapon. | mirage_a2s4
> quiet | Watch. | mirage_a2s4
> mercy | Say you will leave the sword. | mirage_a2s4

=== mirage_a2s4 | Ren Qiao Talks
He does it for an hour. He sits on the prow of Light with his bare hands on his knees and his sword at his feet and talks to the boy on the wall. He does not raise his voice. He talks about the bridge. He talks about fifteen years of standing at the end of a plank, in the wind, letting people through.
“It isn’t much,” he says. “You stand. You look. Somebody comes. You decide.”
“Decide what?”
“Whether they’re safe.” He rubs his scar. “You can’t always tell. You learn to listen.”
“To what?”
“To the person.” He spreads his hands. “A man who’s lying shuffles his feet. A woman who’s afraid of the height holds the rail too tight. A child will tell you everything if you let her look at the sword.” He smiles faintly. “It is mostly kindness. You ask them to cross, and you watch.”
Ember’s visor is up. His long face is intent.
“Did you ever turn anyone back?”
“Twice. They were going to hurt someone.” Ren Qiao’s eyes are steady. “I never regretted it. But I never stopped asking.”
> force | Listen. | mirage_a2s5
> truth | Say nothing. | mirage_a2s5
> quiet | Watch Ember. | mirage_a2s5
> mercy | Smile. | mirage_a2s5

=== mirage_a2s5 | What Ember Guards
“It isn’t the city,” says Ember, at last. He says it very slowly. “I think. It isn’t the people.” He frowns at his hands. “I’ve been guarding something else. At the centre. In the highest tower.”
“What?”
“A glass.” He looks up. His eyes are clearing. “The Great Glass. The Lady keeps it. It’s round, and silver, and taller than a man. It shows you a thing you’ve lost.”
“And?”
“And you look. And you want it. And you stay.” His voice shakes. “That’s how the city is held. Everyone who comes looks into it once, and then they never leave.”
“Have you looked?”
“Every day.” He swallows. “For seven years. I see my mother. She’s making porridge. She says my name.” He wipes his nose on his gauntlet. “She stopped, I think. A long time ago. She died. But in the glass she’s always making it.”
You say nothing. The whole wall of statues stands in the sun, silent.
“If someone broke it,” says Ember, “I’d have to guard something else.”
> force | Ask to see it. | mirage_a2s6 | needs:4
> truth | Say you will. | mirage_a2s6
> quiet | Look at the tower. | mirage_a2s6
> mercy | Hold out your hand. | mirage_a2s6

=== mirage_a2s6 | The Highest Tower
He leads you up himself. It is nine hundred steps, in a spiral, of white glass, lit from within by a dull glow. The air grows thin and cold. At each landing the walls bear panels of mirror, in which your reflection follows you, tall and pale. At the hundredth you stop looking. At the five hundredth you stop breathing as hard.
At the top, there is a round white room. It is very bright. In the centre stands a great silver disc on a plinth, nine feet high, in a frame of black wood.
You are afraid to look at it.
“Don’t look,” says Ember, hoarsely, catching your sleeve. “Not straight on. It catches you.” He covers his eyes. “Use the edge.”
You turn your head. At the corner of your vision the glass is dark. It is a pool of black water.
Then something moves in it.
It is a shape. It is a woman. She is standing in a doorway, with her back to you. She is wearing a plain grey robe. She has a braid down her back, and a silver comb in her hair.
You take a step before you know it.
> force | Look away. | mirage_a2s7
> truth | Say her name. | mirage_a2s7
> quiet | Close your eyes. | mirage_a2s7
> mercy | Hold on to Ember. | mirage_a2s7

=== mirage_a2s7 | What It Showed
You do not look away. You do not say her name. You stand in the white room with your heart pounding and your eyes fixed on the doorway in the glass, and the woman turns.
It is Su Mengjiao. You know it as you know your own hands. She is thirty-nine, brown-eyed, quiet-faced, with a mouth that wants to smile. She holds out a hand. She says nothing. She only waits, in a doorway of grey light, with the patience of a woman who has been waiting a very long time.
“You want to,” says Ember, hoarsely, “don’t you?”
“Yes.”
“It’s lovely. I know.” He is pressing his gauntlets to his eyes. “That’s the worst. It’s everything you want. And all you have to do is walk.”
You take another step.
The Elder’s voice, thin and dry, comes up the stair behind you. “Don’t.”
You turn. She has climbed all nine hundred. She stands at the top step, white-faced, gripping the rail. She is looking at the glass. She is looking at the woman in the doorway.
“She isn’t there,” says Su Wanru. “She’s under a mountain.”
> force | Stand still. | mirage_a2s8
> truth | Ask her how she knows. | mirage_a2s8
> quiet | Look at her. | mirage_a2s8
> mercy | Step back. | mirage_a2s8

=== mirage_a2s8 | Breaking It
“I know,” says the Elder, “because I would give anything to be wrong.” Her voice is steady, and terrible. “I have looked at this glass for a full minute. I have seen my sister’s face and I have wanted it with my whole body. I am not made of stone.” She draws a breath. “That is how I know it is false. The real one would not have waited.”
She picks up a chair. It is a heavy black chair of the Lady’s, with a carved back. She holds it in both hands. She weighs it.
“Ren Qiao,” she says. “Hold the door.”
“Wanru—”
“Hold it.”
She swings. The chair meets the silver face of the glass with a ringing, sweet, shuddering crash. The disc shivers. A crack runs across it, diagonally, like lightning. In the crack the woman in the doorway turns her head and looks at her sister.
She smiles. She mouths a word.
The glass explodes.
It is a flower of silver shards. The room dazzles. A great soundless wave of light rolls down the tower, and the stair, and the arcades, and out across the harbour. The sky is white.
> force | Cover your face. | mirage_a2s9 | needs:4
> truth | Hold the Elder. | mirage_a2s9
> quiet | Duck. | mirage_a2s9
> mercy | Reach for Ember. | mirage_a2s9

=== mirage_a2s9 | After the Glass
When your sight returns, the tower is gone. You are sitting on a plain of green glass, in a ring of dust. Only the Sea, shining, and eleven thousand blinking people sitting in the open, in white robes, looking about.
Ember sits beside you with a shard of silver in his hand. He is weeping. He lifts his face.
“She said,” he whispers. “My mother. In the glass. She said *go to sleep.*”
The Elder is on her knees in the dust, her hands pressed to her mouth. Ren Qiao holds her shoulders. She is looking at the sky where the tower was, and her lips are moving.
“What did Mengjiao say?” you ask.
“I do not know.” She shuts her eyes. “I could not read her mouth. It was a single word.”
“What could it have been?”
“I would like to think,” says Su Wanru, “*thank you.*” She opens her eyes. “But I am afraid it was *wait.*”
Ember rises. He lays his spear on the glass, and unbuckles his breastplate, and puts it down. The suit of mirror falls in pieces round his feet.
He yawns, enormously.
> mercy | Help him sit. | mirage_close | +mirage_broke
> truth | Hold the Elder. | mirage_close | +mirage_broke
> quiet | Look at the sea. | mirage_close | +mirage_broke
> mercy | Give Ember a blanket. | mirage_close | +mirage_broke

// ---------------------------------------------------------------- a3: borrowed names
=== mirage_a3s1 | The Cards
They are laid out on a white table at the foot of the quay, on a cloth of ivory silk: a row of stiff white cards, each with a name written in a pale green ink. Behind the table sits a smiling woman in white, with a tray of tea. The names are all different.
“Welcome,” she says. “Please. Choose.”
“Choose what?”
“Your name. You surrender the old one, you receive the new.” She gestures. “It’s a custom. Everyone does it. It helps you settle.”
“What if I don’t?”
“Then you’ll find it difficult to stay.” Her smile does not change. “The city only holds the ones it has a name for.”
Hao Lan has gone to the table. She is examining the cards with a look of rapt, professional interest. “They’re beautifully made,” she says. “The ink’s a copper-green.” She turns one over. “They’re blank on the back.”
“Of course.”
“No register mark.” She lifts her eyes. “You never record who takes what.”
“Why would we?”
“I was only wondering,” says Hao Lan sweetly, “how you keep track.”
> deceit | Let her take one. | mirage_a3s2
> truth | Say it is a trap. | mirage_a3s2
> quiet | Take a card. | mirage_a3s2
> mercy | Ask what it costs. | mirage_a3s2

=== mirage_a3s2 | The Terms
“It costs the old name,” says the woman. “That is all.” She pours tea. “You write it on a slip, and put it in the urn. It’s quite painless. One feels a little lighter.” She glances at your clothing. “You’ll be given a house. You’ll be given work, if you want it. Or not.”
“What do you do with the slips?”
“They’re kept.” She nods at a great white urn on the quay, as tall as a man. “The Lady holds them. In trust.”
“For how long?”
“For ever.” She smiles. “It is a very safe trust.”
Hao Lan has stopped being sweet. She is looking at the urn, and her grey eyes are bright and cold.
“I’d like a name,” she says.
“Of course.”
“A good one. With a tidy history.” She flicks a card. “A scholar. A clerk. Someone who’d be useful.”
“We have an excellent selection.”
“I’m sure.” Hao Lan’s smile is polite and wide. “And I should like to inspect the urn.”
> deceit | Follow. | mirage_a3s3
> truth | Stop her. | mirage_a3s3
> quiet | Watch. | mirage_a3s3
> mercy | Hold the Elder’s arm. | mirage_a3s3

=== mirage_a3s3 | Playing Along
You take your cards. They are made out in a lovely cursive: a dancer, a falconer, a tinker. You carry them like trinkets. You walk the quay with the smiling people, in the warm sun, drinking tea. You say your new names to anyone who asks. You are, for an afternoon, entirely charming. You are given a villa with a blue door.
It is a game, and you play it. Duan Wuyi is a retired lamplighter. Gu is a flautist. The Elder, with her severe grey bun and her upright back, is announced as a Lady of Leisure. She sips tea and says “How delightful” in such a perfect imitation of delight that you nearly choke.
At dusk you meet in the villa’s kitchen, with the door shut.
“It works by the slip,” says Hao Lan, low. “I’ve been watching. They don’t actually take the old name until it’s written. As long as we haven’t, we’re guests.”
“Then what’s the urn?”
“A vault.” Her eyes glitter. “Eleven thousand slips. Every name they’ve ever taken. All in one place, on the quay, in a jar.”
“And we need—”
“To empty it,” says Hao Lan.
> deceit | Plan. | mirage_a3s4
> truth | Say it is theft. | mirage_a3s4
> quiet | Look at the door. | mirage_a3s4
> mercy | Think of Harbour. | mirage_a3s4

=== mirage_a3s4 | Emptying the Urn
It is impossible to steal. It is sixteen hand-spans high, of white stone, with a sealed lid and two attendants in white who stand beside it day and night, smiling. So you do not steal it. You attend a banquet.
It is Hao Lan’s idea, naturally. She has organised, in three hours, in the name of the retired lamplighter, a great evening feast on the quay, with wine and music and lanterns, to welcome the new residents. The whole city comes. Eleven thousand people spill out along the harbour in the lantern-light, eating, dancing, calling toasts. By nine the attendants have been drawn into a circle of dancers. By ten they have forgotten the urn.
Yue Zhaoning slips through the crowd in a white robe. She has a wheelbarrow. She has a pot of paste. She has a pair of tongs.
You watch from the shadow of an arcade. Your heart goes like a kettledrum. The lid of the urn comes off with a sigh. Yue peers inside, and goes quite still.
She looks round. She meets your eye. She mouths one word.
*Paper.*
> deceit | Move. | mirage_a3s5
> truth | Hold your breath. | mirage_a3s5
> quiet | Watch the dancers. | mirage_a3s5
> mercy | Fetch the Elder. | mirage_a3s5

=== mirage_a3s5 | Slips
There are eleven thousand and four. They are folded in four, each tied with a thread of green silk, and they fill the urn to the neck like a bucket of tulips. Each has a name written on it, in a dozen hands. *Tao Tao. Amala. Little Wei.* They are warm. They rustle.
Yue lifts a double handful. They flutter.
“We can’t carry all these,” she hisses.
“We don’t have to.”
“Then what?”
“We read them,” says Hao Lan, appearing at your elbow with a shuttered lantern. “Aloud. All of them. Here.” Her eyes are enormous. “A name read by someone who knows it is a name given. A name given back.”
“Eleven thousand.”
“It’s a very good party.”
She picks up the first. She unfolds it. She reads, in a low clear voice: “Tao Tao, of the Southern River Provinces.”
Across the quay, a round man in a white robe, in the middle of a dance, stumbles.
She reads another. Another stumbles. Another. They stop one by one, as the names are read, and stand in the lantern-light with their arms hanging, blinking.
> deceit | Help read. | mirage_a3s6
> truth | Hold the lantern. | mirage_a3s6
> quiet | Take a slip. | mirage_a3s6
> mercy | Call the first name. | mirage_a3s6

=== mirage_a3s6 | The Slow Dawn
It takes all night. You read in turns, in a ring around the urn, by lantern. Hao Lan, then Duan, then Gu, then you. The quay fills with silent people, standing at the edge of the light. As each name is read, a face lifts from the crowd, bewildered, tear-streaked, and a figure steps forward to take the slip.
No one says thank you. They simply take it, and hold it to their chests, and stand there. A woman is murmuring the name over and over. A very old man, with a face like a walnut, opens his slip and reads it aloud in a cracked voice, and then sits down on the stones.
At the third hour you notice that the towers are going.
It is not sudden. The tallest spire, which has stood against the stars all night, is thin, then thinner, then a glint, then gone. The arcades are fading. The harbour wall wavers like a candle flame.
Hao Lan reads on, hoarse, grey with fatigue.
By dawn there is a field of people on a plain of glass, and an urn, and nothing else.
> deceit | Read the last. | mirage_a3s7
> truth | Hold Hao Lan. | mirage_a3s7
> quiet | Look at the sunrise. | mirage_a3s7
> mercy | Help someone up. | mirage_a3s7

=== mirage_a3s7 | The Lady
She is standing at the edge of the crowd. You do not see her come. She is a tall slender woman of indeterminate age, in a robe of a dull silver that seems to shift, with long hair the colour of ash and a face that is difficult to look at. She looks at you, and you have a sense of a face, a hundred faces, all of them kind.
“I am Lady Hollow,” she says. Her voice is low, tired, pleasant. “I held the city.”
“We took it down.”
“So you did.” She smiles. “I knew you would.” She looks over the field of weeping people. “I do not mind. I did it because I could not do anything else.”
“You took their names.”
“I kept them.” She folds her hands. “They were going to be lost. The Ledger was striking them one a minute, and nobody was keeping count. I thought: if I take the names, and hold them, at least they will be somewhere.”
“You made them forget.”
“It was kinder.” Her smile does not falter. “Would you like to know what it is like, to remember?”
> deceit | Listen. | mirage_a3s8
> truth | Say you do. | mirage_a3s8
> quiet | Wait. | mirage_a3s8
> mercy | Say you are sorry. | mirage_a3s8

=== mirage_a3s8 | What Lady Hollow Remembers
“I was a Registrar,” she says. “In the Fourth Peak. For thirty years.” She sits down on the edge of the urn, a long silver figure. “I struck the names. Eleven hundred a year. Each with a brush, and a signature.” She flexes her hand. “I did not think. It was a formula.”
“And then?”
“And then there was a woman in my office. She had come to ask if her son was dead. He had been struck by a clerk in the Third Office, a year before, in error. It was a clerical error. I looked it up. I could have corrected it.” Her voice is soft. “I did not. Correcting it would have meant admitting that the Third Office had erred.”
“What did she do?”
“She sat in the chair for six hours.” The Lady’s hands are very still. “I went home. When I came back she was dead. She had starved herself in my office, without a word.”
“I’m sorry.”
“Don’t be.” She looks up. Her face is quite clear for an instant: a lined, plain, haunted face of fifty. “It is the only reason I built the city.”
> mercy | Take her hand. | mirage_a3s9
> truth | Bow. | mirage_a3s9
> quiet | Listen. | mirage_a3s9
> mercy | Weep. | mirage_a3s9

=== mirage_a3s9 | A Sentence in Kind
She doesn’t resist. She sits by the empty urn, in the early light, with her long silver hands in her lap, and waits for someone to decide. You look at the Elder. The Elder looks at Duan Wuyi. Duan looks at the sea.
“I am the Censor-General,” he says finally. “I am required to charge you.”
“I know.”
“With false imprisonment, and the confiscation of names. Eleven thousand counts.”
“Yes.”
“The penalty is exile.” He clears his throat. “I do not think we can enforce it. There is nowhere left to exile you.”
“There is the Sea.”
“Yes. But it is three hundred miles of glass.” He pushes up his spectacles. “I find myself disinclined.” He turns to the Elder. “Wanru?”
“I propose a probation,” says the Elder, in her driest voice. “Of the usual kind. She will walk with us to the far shore. She will read the names to those who have not yet remembered. When she has done, she may decide for herself.”
Lady Hollow looks up. She is crying. It is a silent, bewildered, shaken sort of crying.
“That is not a sentence,” she says.
“No,” says the Elder. “It’s a task.”
> deceit | Smile. | mirage_close | +mirage_played
> truth | Nod. | mirage_close | +mirage_played
> quiet | Look at the sun. | mirage_close | +mirage_played
> mercy | Help her up. | mirage_close | +mirage_played

// ---------------------------------------------------------------- a4: the dreamer
=== mirage_a4s1 | The Lit Window
It is the only light in the city. The whole of it is flooded with a flat white radiance, with no shadow and no shade. But in the highest tower, a hundred feet above the quay, a single window glows a deeper gold. It is a lamp, a plain oil one. You can tell by the flicker. A figure stands at it, a small bent silhouette, with its back to the sea.
Everyone in the city is looking out. The one at the window is looking in.
“Someone is working,” says Gu, softly.
“At what?”
“I don’t know.” He frowns. “But she’s been standing there since we arrived. She hasn’t moved. She has a pen.”
You watch. The silhouette’s hand rises and falls. It is slow, regular, steady. It is the hand of someone who draws.
“Drawing,” says Hao Lan, who has come up beside you with her glass. “She’s drawing a map.”
The silhouette lays down her pen. She turns her head.
For a moment, across a hundred feet of air, her gaze meets yours.
She puts a finger to her lips.
> mercy | Go to the tower. | mirage_a4s2
> truth | Ask Harbour. | mirage_a4s2
> quiet | Watch. | mirage_a4s2
> inquiry | Ask Hao Lan about her glass. | mirage_a4s2

=== mirage_a4s2 | Nine Hundred Steps
Nobody tries to stop you. The residents smile and nod as you pass. You climb the spiral alone, and the glow of the walls goes from white to amber to gold. At every landing there is a panel of mirror, and in each your reflection is older. You do not look.
At the top there is a door. It is a plain wooden door, painted blue. It is open.
Inside there is a room like an attic: slant-ceilinged, cluttered, full of the smell of ink and tea and old paper. Maps cover the walls, floor to ceiling, thousands of them, pinned in layers. They are yellowed and curling. They show towns, rivers, roads, orchards, lanes. They show a house with a blue door. They show a hillside with sheep. They show a kitchen.
At the window, an old woman sits on a stool with a drawing-board on her knee. She is perhaps eighty, tiny and brown and bent, in a patched grey robe. Her hands are knotted. A pair of round spectacles sits on her nose.
“Hush,” she says, without turning. “I am almost at the end of a street.”
> mercy | Wait. | mirage_a4s3
> truth | Introduce yourself. | mirage_a4s3
> quiet | Look at the maps. | mirage_a4s3
> inquiry | Ask what she is drawing. | mirage_a4s3

=== mirage_a4s3 | Ye Sing
“There,” says the old woman. She puts down the pen. She holds the drawing at arm’s length and squints. “That’s it. That’s Willow Lane.” She sighs with deep satisfaction. “It always comes out better in the evening.”
“Who are you?”
“Ye Sing.” She turns, at last. Her face is a web of fine lines, brown and delicate as a nut. Her eyes behind the spectacles are bright, black, and entirely sane. “Cartographer. Third Class. I was struck forty years ago, for drawing a border in the wrong place.”
“A border?”
“Between two provinces.” She sniffs. “The Fourth Peak wanted it three miles south. I drew it where it was. They said I was obstructing the Ledger.” She chuckles. “They struck me from the register of surveyors. I had nowhere to go.”
“So you built a city.”
“I *drew* a city.” She taps the board. “The towers, the harbour, the arcades. It took me eleven years. I drew it from memory, from everywhere I’d ever been that was lovely.” Her face softens. “It’s a bit of a patchwork. But I think it’s rather good.”
> mercy | Say it is beautiful. | mirage_a4s4
> truth | Ask how it stands. | mirage_a4s4
> quiet | Look at the board. | mirage_a4s4
> inquiry | Ask who lives in it. | mirage_a4s4

=== mirage_a4s4 | How It Stands
“By being drawn,” says Ye Sing. “Every day. I draw a bit more. If I stopped, it would fade.” She indicates the tower window, the sea, the glittering city. “It’s a continuous work. Like weaving.”
“How long have you been at it?”
“Forty years.” She says it comfortably. “I don’t mind. It’s a good way to pass the time. I have my tea. I have the cat.” She nods to a fat tabby curled on a map of the River Provinces. “It’s very restful.”
“And the people?”
“Oh, they’re guests.” She waves a hand. “They come when they’re lost. I draw them a place. They stay as long as they like.” She frowns. “I do wish they wouldn’t forget. It seems a pity, that they forget. But Lady Hollow says it’s kinder.”
“You don’t think so?”
“I think…” She hesitates. Her knotted fingers pick at the edge of the board. “I think a map is a thing you walk away from. You draw it so that someone can go somewhere else.”
She looks at the maps on the wall, thousands of them.
“I’ve never been to any of these,” she says. “Not since the strike.”
> mercy | Sit beside her. | mirage_a4s5
> truth | Say you will go. | mirage_a4s5
> quiet | Look at the cat. | mirage_a4s5
> inquiry | Ask about the kitchen. | mirage_a4s5

=== mirage_a4s5 | The Kitchen
“Ah.” She takes it down from the wall and spreads it on her knee. It is a small drawing in brown ink: a low room with a stone hearth, a table, three chairs, a blue door, a jar on the sill. Steam rises from a pot. There is a cat on the mat. “That’s mine,” says Ye Sing. “That was my mother’s. In the village. I drew it the first week.”
“It’s lovely.”
“It’s only a kitchen.” Her thumb strokes the paper. “But every time I draw a city I put it in, somewhere. In a back lane. Behind a gate. Eleven thousand people, and not one of them knows there’s a kitchen in it.” Her voice is small. “I like to think it makes them feel at home.”
“Do you ever go?”
“I can’t.” She laughs. “It’s drawn. One can’t walk into a drawing.”
“You can walk into a real one.”
She goes very still. The cat lifts its head.
“Do you know,” says Ye Sing, “nobody has ever said that to me.” She looks at the map. Her lip is trembling. “I had thought it was a thing for other people.”
> mercy | Take her hand. | mirage_a4s6
> truth | Say it is real. | mirage_a4s6
> quiet | Wait. | mirage_a4s6
> inquiry | Ask where the village is. | mirage_a4s6

=== mirage_a4s6 | Willow Lane
It is on the Southern River, three weeks from the coast, a day south of the Ford. She knows the way. She has drawn it nine hundred times. She tells you the streets, the turns, the names of the shops, the colour of the doors. “The bakery has a green shutter,” she says. “The baker is Old Mo. Is he alive?” Her face falls. “He’d be a hundred.”
“Someone will be there.”
“Will they know me?”
“I don’t know.”
“No.” She takes off her spectacles and wipes them. “That is rather the point of a map. It tells you where. It doesn’t tell you who.”
The cat jumps into her lap. She strokes it.
“It would mean taking down the city,” she says. “Wouldn’t it?”
“I think so.”
“And the people?”
“They’d have to walk.”
She is silent. Behind you, through the open window, comes the faint sound of a bell, and a murmur, and the laughter of children.
“I’m so very tired,” says Ye Sing. “Is that wicked?”
> mercy | Say no. | mirage_a4s7
> truth | Say it is human. | mirage_a4s7
> quiet | Hold her hand. | mirage_a4s7
> inquiry | Ask what would help. | mirage_a4s7

=== mirage_a4s7 | What Would Help
“Someone to finish it,” she says. She nods at the board. “The last street. It’s the one that goes out. Out of the city, into the world.” She smooths the paper. “I never drew it. I never knew how to end.”
“Show me.”
She lays the board on the floor. It is a huge sheet, five feet by four, pinned at the corners. The city is drawn on it in dense, fine, tireless linework: every tower, every arcade, every bridge. At the edge, where the harbour wall curves, the ink simply stops. There is a blank white margin.
“I can’t,” she says. “If I draw the road, they’ll see it. They’ll see it and they’ll want to go. And they’ll be hurt.”
“They’ll be free.”
“They’ll be *lost*.” She sounds almost fierce. “I don’t draw maps so people can be lost.”
“You draw them so they can find their way.”
The old woman looks at you. Her eyes shine.
“Yes,” she says, in a small cracked voice. “I suppose I do.”
She takes up the pen. She dips it.
> mercy | Hold the inkwell. | mirage_a4s8
> truth | Nod. | mirage_a4s8
> quiet | Watch. | mirage_a4s8
> inquiry | Ask what the road is called. | mirage_a4s8

=== mirage_a4s8 | The Last Street
She draws it in an hour. It is a thin black line, curving out of the harbour wall and across the margin, with a tiny cluster of dots at the end. It is a road. She works with great care, bent over the board, her tongue between her teeth. She draws a signpost. She draws a gate. She draws, after a moment, a little blue door.
“It’s Willow Lane,” she says. “At the end. I couldn’t help it.”
When she lifts the pen, the city shivers.
It is not an earthquake. It is a quiet, deep exhalation, as of a great animal turning over in its sleep. Below the window the quay trembles. The arcades go soft at the edges. The spires thin like candle flames. A hum rises from below, a long sigh, a murmur of eleven thousand voices all saying: *oh.*
“There,” says Ye Sing. She is smiling. Tears run down her cheeks and drip from her chin onto the map. “It’s going.”
“Are you all right?”
“I’m better than I’ve been in forty years.” She sets down the pen. “Come on, dear. Help me with my coat. I haven’t much time.”
> mercy | Fetch the coat. | mirage_a4s9
> truth | Take her arm. | mirage_a4s9
> quiet | Pick up the cat. | mirage_a4s9
> inquiry | Ask where she will go. | mirage_a4s9

=== mirage_a4s9 | Walking Out
She walks out of the city on your arm, at the head of a long line of white-robed figures, with a grey cat under her free arm and a rolled map in her hand. The towers go one by one behind you into the light. The arcades dissolve. The long white harbour wall curves, bends, and is gone.
The Sea receives it. The glass lies green and smooth under the morning, empty, flat, shining.
She stops once, at the place where the wall had been, and looks back. Then she lifts the map in both hands and tears it, very slowly, from edge to edge, and lets the halves flutter onto the glass.
“That’s that,” she says. She sniffs. “It was a good city.”
“It was.”
“I’d like to have lived in it.” She smiles sideways. “Never mind. We shall find a better one.”
She sets off across the Sea, a small brown figure with a cat, in her patched grey robe, walking east.
You bring up the rear. Beside you, Hao Lan is weeping and laughing together.
“I want a kitchen,” she says.
> mercy | Smile. | mirage_close | +mirage_sat
> truth | Take her arm. | mirage_close | +mirage_sat
> quiet | Look at the road. | mirage_close | +mirage_sat
> inquiry | Ask what she means. | mirage_close | +mirage_sat

// ---------------------------------------------------------------- hidden: Echo
=== mirage_h1 | A Name You Cannot Spend
You say it on the quay, to the smiling woman at the white table: Wen Echo. You say it as it was written, in the red dusk under a torn cliff, in Hao Lan’s best hand, by the Elder’s seal. You say it as the name of a child who was never in the book.
The woman’s pen stops. Her smile freezes.
“I beg your pardon,” she says. “That’s not a name we have.”
“It’s a name that was given.”
“By whom?”
“By three people who loved her.”
The woman looks down at her cards. She shuffles them. She goes through the whole deck, twice, and her smile becomes slightly fixed. At the end she raises her eyes.
“We cannot accept it,” she says. “A name given in love cannot be surrendered. It is not yours to give up.” She says it as if reciting. “It is the one kind we cannot take.”
“Why not?”
“Because it is held,” says the woman, “by someone who is not here.”
The whole quay has fallen silent. The sun has gone behind a cloud, and the cloud has a hole in it.
> inquiry | Say it again. | mirage_h2
> truth | Wait. | mirage_h2
> mercy | Look at the towers. | mirage_h2
> quiet | Take a step. | mirage_h2

=== mirage_h2 | The Weak Place
It is a hairline in the city. A fine pale crack in the marble of the quay, which runs from your feet along the harbour wall and up the nearest tower. You say the name a third time, and the crack widens, a hair.
The smiling people stir. A few turn their heads.
“It cannot be spent,” murmurs Hao Lan, wonderingly. “It is the one thing in the city that is *real.*” She looks at the crack. “The city is made of surrendered names. But this one is held. It cannot be exchanged.”
“So it doesn’t belong.”
“Exactly. It’s a stone in a wall of wax.” She laughs. “Say it again.”
“Wen Echo.”
The crack runs. It goes up the tower to the tip, in a zigzag. A pane falls. Another. The white wall begins to peel like paper off a damp wall, and behind it you see something dark and ordinary: a plain of green glass, a few clouds, the real sky.
The residents are gasping, in a great murmur. They are all looking up.
The city is going to come down.
> inquiry | Say it a fourth time. | mirage_h3
> truth | Shout. | mirage_h3
> mercy | Take Hao Lan’s hand. | mirage_h3
> quiet | Hold still. | mirage_h3

=== mirage_h3 | Down Gently
It comes down like snow. It goes without a sound, in a long white sigh, tower by tower, arch by arch. The bell stops. The flag on the spire dissolves into a thread of blue smoke. The people on the quay stand with their faces tilted up, in the soft falling light, and are not afraid.
It is Echo’s name that does it. You can feel it. A child’s name, three syllables, held by three people, sitting like a stone in the heart of a mirage. It will not be exchanged. It will not be taken. It stays.
When the dust clears, you are standing on the open Sea in the early light, among eleven thousand blinking people in white. They look about. They look at each other. They are not weeping, yet. They are only astonished.
A man steps forward. He is round and grey and worn. He takes a deep breath.
“Tao Tao,” he says, hesitantly. “I think I’m Tao Tao.”
“You are,” says Hao Lan, wiping her face. She has the register. “It’s in the book. It’s been in the book the whole time. Look.”
She turns the page.
> inquiry | Smile. | mirage_close | +mirage_echo
> truth | Weep. | mirage_close | +mirage_echo
> mercy | Hold Hao Lan. | mirage_close | +mirage_echo
> quiet | Look at the sky. | mirage_close | +mirage_echo

// ---------------------------------------------------------------- close
=== mirage_close | Eleven Thousand on the Glass
You walk east for five days, in a long column. The skiffs go at the walkers’ pace, which is the pace of the slowest; and the slowest is a woman of ninety called Granny Pearl, who insists on carrying her own bundle and whose opinions on the glass are formidable. Nights are cold and clear. By day the sun beats down. The column grows lean and brown and quiet.
+[how] mirage_woke | You read eleven thousand names aloud, and a city took itself apart.
+[how] mirage_broke | You smashed the Great Glass, and a boy slept for the first time in seven years.
+[how] mirage_played | You took a stranger’s name and borrowed a villa, and emptied an urn at a banquet.
+[how] mirage_sat | An old woman drew a road at the edge of her map, and walked out along it.
+[how] mirage_echo | A child’s name that could not be spent brought the city down like snow.
They hear it before they see it. On the fifth evening a smudge of smoke stands on the eastern horizon, and a faint far clangour, as of a thousand hammers, drifts across the plain. The Furnace Towns. The shore.
The column halts. Eleven thousand people stand in the sunset, shading their eyes.
“Is that real?” says a thin voice.
Tao Tao, who has been walking beside you with his hands in his sleeves, takes a long breath.
“It smells real,” he says. “It smells of coal.” His round face crumples, then smooths into a smile. “It’s the best thing I’ve smelled in eight years.”
> truth | Smile. | mirage_close2 | +b5q_mirage
> mercy | Take his arm. | mirage_close2 | +b5q_mirage
> quiet | Look east. | mirage_close2 | +b5q_mirage
> inquiry | Ask how many are left to be remembered. | mirage_close2 | +b5q_mirage

=== mirage_close2 | The Count
Hao Lan tells you the number that night, by the light of a cooking-fire. She has a paper in her lap. She has been working on it for five days. She says it without lifting her eyes.
“Six hundred and nine,” she says. “Have not remembered. Everyone else has. Their families are in the register. They have homes.” Her voice is steady. “The six hundred and nine are the ones who came as children. They have no one.”
“Then they have us.”
“We’re thirty seats.” She looks up. “It’s the same arithmetic. Always the same.”
“Then we do the arithmetic differently.”
She stares. “What do you mean?”
“The Furnace Towns,” you say. “The Wrights. Mother Tsagaan. The Listeners. Somebody will have room.”
“Somebody,” says Hao Lan, with a wry twist of her mouth. “Aye. That’s what Yue says too.” She folds the paper. “She says the whole of the Steppe is built on the word *somebody.* She says it’s the most reliable piece of infrastructure in the world.”
“She’s right.”
“I know.” She leans her head on your shoulder. “It’s dreadful how often she is.”
> truth | Smile. | hub_b5_a | bond:hao+3
> mercy | Hold her. | hub_b5_a | bond:hao+3
> quiet | Look at the fire. | hub_b5_a | bond:hao+3
> inquiry | Ask about the kitchen. | hub_b5_a | bond:hao+3

`,
  scenarios: String.raw`
$ SU_MIRAGE_NAME | trust+3 respect+3 fear+4 | elder | The Elder is offered a name in a city that has no records.
hostile: They gave me a card. It said ‘Wanru, Registrar of Nothing.’ It was a joke. It was the cruellest accurate thing anyone has said to me. I put it in my pocket, and I have it still.
wary: A woman in white asked what I would like to be called. I said I did not know. She said that was the usual answer, and that it generally took a week. I thought: I have been the Registrar for thirty years and never once been asked.
neutral: The city has no ledger. I looked for one. I looked in every tower. It was the first place in my life that I have been in without being written down, and I found, unexpectedly, that I slept.
warm: Hanzhen was offered a name. It was a good one. It had no history. He held the card for a very long time and then said, ‘I think I’ll stay Gu.’ I was proud of him, and did not say so, because he would have been embarrassed.
devoted: I should like to remember it as the city where I was not afraid. I know that it was only a refuge. I know that what it offered was the loss of everything. But I was not afraid. I shall keep that.
`,
  remarks: String.raw`
% mirage_yesing_later | since:b5q_mirage>=3 | hao | Ye Sing drew me a map before we left. It was of a place I have never been. A kitchen with a blue door. She said it was mine. I did not have the heart to tell her I have never owned a kitchen. I have put it in my coat.
% mirage_ember_later | since:mirage_broke>=3 | ren | The Gatekeeper, Ember, asked me what I protect. I said, ‘The bridge.’ He said, ‘Which?’ I told him it was a bridge in the mountains, and he smiled for the first time. He said he had always wanted to see a real one.
`,
}
