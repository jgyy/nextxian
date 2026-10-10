import type { Arc } from "../types";

/**
 * Book Three, arc eighteen: the Ward-Chain. At the dark of the moon the fleet lays a hundred-link chain across the mouth of the
 * bay and anchors it to the Wall, and the first name it takes is Ke-er's. Four approaches: go down to the last block and ask her
 * (a1, truth), wrench the anchors open with the seed (a2, force), turn the Inspector's own key and Shu Ning's counter-seal against
 * the chain (a3, deceit), and win the flagship from inside with the Censor-General (a4, quiet). A hidden route asks the wound the
 * saint's question. Every earlier arc changes what the chain can do. Cast: Ke-er, Mei Qiu, Inspector Fang, Duan Wuyi, Admiral
 * Shen, Yin, Shu Ning, Hao Lan, Captain Kou, Madam Ash.
 */
export const chain: Arc = {
  id: "chain",
  name: "The Ward-Chain",
  scenes: String.raw`
=== chain_entry | The Dark of the Moon
At the turn of the tide, the fleet moves. You see it from the Wall: nine dark shapes, sliding forward on the flood without a lantern between them, closing the bay like a hand. Behind them the sea is black. Overhead there is no moon, and the stars are very high and cold. The only light is the faint red glow of the flagship’s stern, where a single lantern burns at the foot of the ensign.
A sound begins. It is a long, low, grinding rumble, like a great door being drawn across a stone floor. It comes from the sea. It comes from under the sea. From the mouth of the bay, a mile out, a line of white appears: a hundred links of grey iron rising out of the water, one by one, glistening.
The chain is closing.
It rises in a curve from the northern headland to the Wall, link on link, and each link glows at the heart, a dull sullen red. It hums one long low note, and under your feet the Wall begins to sing back.
Mei Qiu has her hand on the stone. “It’s taking her,” she says. “I can feel it.”
> truth | Go down to the last block, and ask Ke-er what she wants. | chain_a1s1 | npc:SU_CHAIN_CLOSES
> force | Go out to the nearest anchor-point with Kou’s men, and wrench it open. | chain_a2s1
> deceit | Find Shu Ning and Hao Lan, and tell them it is time to turn the Inspector’s key. | chain_a3s1
> quiet | Take Ah Zhi’s skiff out to the flagship in the dark, and find the Censor-General. | chain_a4s1
> inquiry | Read the saint’s letter to the Wall, and ask the question it asks. | chain_h1 |  | fifth_letter | You have no letter from the saint to read.

// ---------------------------------------------------------------- a1: asking Ke-er
=== chain_a1s1 | The Last Block
You go down the sea steps in the dark. The stair is wet. The Wall towers over you, forty feet of pale stone, humming. At the foot of it, on the lowest course, is the last block, with its green moss and its bronze plaque. Mei Qiu is already there, on her knees in the wet shingle, with both palms flat against the stone.
She does not look round.
“She’s frightened,” she says. “She won’t say. She’s been very brave for nineteen years and she has forgotten how to stop.”
+ fifth_broke_plate | Far out on the water a broken plate of grey metal glints on the flagship’s deck, in two halves, and the chain’s hum has a flaw in it.
+ ninesails_key | The chain’s note is a little flat. A copied key turns somewhere, and does not lock.
The chain’s note deepens. The moss on the plaque ripples. A thin bright line, like a hairline crack, runs across the face of the Wall from the north, and a link-shaped glow begins to pulse in the stone beside the block.
“It’s here,” says Mei Qiu. “It’s at her door.”
> truth | Kneel beside her. | chain_a1s2
> mercy | Put your hand on her shoulder. | chain_a1s2
> quiet | Press your palm to the block. | chain_a1s2
> inquiry | Ask what the chain wants with Ke-er. | chain_a1s2

=== chain_a1s2 | What the Chain Wants
“An anchor,” says Madam Ash. She has come down the steps in the dark behind you, with a lantern. She is grey and tired. “A ward-chain holds what it has named. It needs a place to hold from. The Chancery chose the Wall. It chose the oldest seal on the coast, the one that has held for nineteen years without fail. It chose her.”
She sets the lantern on the shingle.
“It will fasten each link to a name on the Wall. The first is hers. When the chain is fastened to Ke-er, the whole of the Wall’s strength will pass into it.” Her voice cracks. “And Ke-er will not be a seal any more. She will be a rope.”
“What happens to her?”
“She stays,” says Madam Ash. “She stays and stays. She is held in the stone, and the stone is held in the chain, and the chain is held by the Inspector’s key. She will be there for as long as the Concord wishes.”
She sinks onto the shingle.
> truth | Say you will ask her. | chain_a1s3
> mercy | Hold her. | chain_a1s3
> quiet | Look at the plaque. | chain_a1s3
> inquiry | Ask what she wants. | chain_a1s3

=== chain_a1s3 | Ke-er
You put your hand on the plaque. Mei Qiu puts hers beside it. The bronze is cold. The moss is warm. The stone under your palm is trembling like a living thing.
“Ke-er,” you say.
There is a long silence. Far out on the water the chain hums. A wave breaks on the shingle with a long hiss.
Then, from deep in the Wall, very faint, a voice: “I know.”
Mei Qiu makes a soft noise.
“I felt it come,” says Ke-er. Her voice is thin and clear and steady. “All the way from the sea. It went through me like a needle. I’ve been waiting for it since the chain began. I knew it would come to the end.” She pauses. “I’m not afraid.”
“You’re shaking,” says Mei Qiu.
“Only a bit.”
“Ke-er,” says Mei, in a voice that breaks. “Let me.”
“No.” It is quite firm. “I asked the Wanderer. I want to ask her.”
> truth | Answer. | chain_a1s4
> mercy | Say you are here. | chain_a1s4
> quiet | Wait. | chain_a1s4
> inquiry | Ask what the question is. | chain_a1s4

=== chain_a1s4 | A Question
“It’s the one I asked before,” says Ke-er. “When the Concord comes for the next one, will you let them?”
You think of everything that has happened since. You think of the river, and the barge, and the Willow Ferry, and the Wall. You think of a child under the stone with a toy boat and nineteen years of digging.
“No,” you say.
“Good.” It is a small hard word. “But that’s the easy part.”
“What is the hard part?”
Ke-er hesitates. When she speaks again, her voice has changed. It is lower, graver, strangely adult. “The hard part is that it’s already come. The chain. It’s here. It’s not the Concord coming for the next one. It’s the Concord coming for me.” She takes a breath. “And I don’t know whether I want you to stop it.”
Mei Qiu jerks her head up. “Ke-er—”
“Shush,” says the voice, gently. “Let me.”
> truth | Listen. | chain_a1s5
> mercy | Take Mei’s hand. | chain_a1s5
> quiet | Wait. | chain_a1s5
> inquiry | Ask why. | chain_a1s5

=== chain_a1s5 | Why She Might Stay
“Because I’m a seal,” says Ke-er. “I have been one for nineteen years. It’s the only thing I know how to be. And the wound under the Wall, the one I keep closed, is not healed. It’s only shut.” She laughs, a small breath. “If I go, it opens. A hundred thousand people live behind that Wall. The mist would come in.”
“We could find another way,” says Mei.
“Could we?” There is no bitterness. “I’ve spent a long time in the dark thinking about it. I think a wound has to be held, by someone, until it’s ready to heal. I think it’s a job. I think I’m rather good at it.”
She is quiet a moment.
“I don’t want to hold it for the Concord,” she says. “I don’t want to be the rope. But I wouldn’t mind holding it for the harbour. For Auntie Pan, and the fishermen, and the children who skip. For them, I think I could stay.”
> truth | Say she doesn’t have to. | chain_a1s6
> mercy | Say you will find another. | chain_a1s6
> quiet | Hold the stone. | chain_a1s6
> inquiry | Ask what she needs. | chain_a1s6

=== chain_a1s6 | What She Needs
“Company,” says Ke-er. She says it at once, with a small shy laugh. “I’ve been lonely. It’s all right. I’m used to it. But I should like someone to visit.” She pauses. “I should like Mei to come every day. And Bao Er to sing. And the children to skip. And Auntie Pan to say the hat-off properly, with the name.”
Mei Qiu is weeping silently, her face against the stone.
“I should like a window,” says Ke-er. “Just a small one. So that I can see the sea.”
“Done,” says Madam Ash, hoarsely. She wipes her face. “Done. I will see to it myself. I have a stonemason I trust.”
“And I should like to be asked,” says Ke-er.
“Asked?”
“Before anything else is done to me.” The voice is very clear. “By anyone. Even by you.”
She seems to smile.
“That is all. That is the whole of what I want.”
> truth | Promise. | chain_a1s7
> mercy | Weep. | chain_a1s7
> quiet | Press your forehead to the stone. | chain_a1s7
> inquiry | Ask how to stop the chain. | chain_a1s7

=== chain_a1s7 | How to Refuse
“I refuse it,” says Ke-er. “That’s all. A seal can refuse a chain. It’s a very simple thing, if you’re willing. You close your door. You say: not this one. You say: not mine.” She breathes. “But it takes the whole of me. And it takes someone holding my hand.”
“I’ll hold it,” says Mei Qiu at once.
“So will I,” you say.
“And me,” says Madam Ash. Her voice breaks.
You put your left palm flat against the plaque. The scar throbs. The stone is warm, then hot, then burning. It does not hurt. It hums. It is the held door, a long low note, rising in your breastbone. On your right, Mei’s hand. On the left, Madam Ash’s. In the stone, a child’s.
Far out on the water, the chain lurches.
> truth | Hold on. | chain_a1s8
> mercy | Close your eyes. | chain_a1s8
> quiet | Sing. | chain_a1s8
> inquiry | Ask Ke-er when. | chain_a1s8

=== chain_a1s8 | Not Mine
“Now,” says Ke-er.
She says it very softly, like a child declining a second helping. “No, thank you.”
The Wall sings. It is the loudest sound you have ever heard, and it makes no noise at all. It goes through you like light through glass. Every block of the Wall, forty feet and a mile long, rings at once on the same pure note, and the carved names flare, thousands of them, white and gold. The chain, a mile out on the water, shudders from end to end. A link snaps. Another. The glow in them goes out. The great grey curve dips into the sea like a dropped rope.
“Not yours,” says Ke-er, in the voice of a girl of eleven. “Not anyone’s.”
The last link falls. The sea closes over it with a sigh.
The Wall goes dark. The humming stops. There is only the wash of the tide, and four people on their knees on a beach, holding hands.
> truth | Breathe. | chain_close | +chain_ke_er_chose
> mercy | Hold on. | chain_close | +chain_ke_er_chose
> quiet | Open your eyes. | chain_close | +chain_ke_er_chose
> inquiry | Ask Ke-er if she is there. | chain_close | +chain_ke_er_chose

// ---------------------------------------------------------------- a2: the anchors
=== chain_a2s1 | Anchor-Points
There are nine of them along the Wall. They are great iron rings, set in the stone at the waterline, each as wide as a cart-wheel. The chain’s outer links hook onto them, one by one, as the great grey curve closes. Each ring is wreathed in a coil of red light that crawls up the stone toward the plaque.
Captain Kou is at the first with fifty men. They have crowbars, sledges, a blacksmith’s anvil. They have been hammering for ten minutes. The ring has not moved. It sits in the stone like a tooth, pulsing, and the hammers ring off it as off a bell.
“It’s no use,” says Kou. His scarred face is streaming with sweat. “It won’t break. It won’t bend. It’s a seal.”
“I’ve tried the lever,” says Gu, from the end of a crowbar. “It won’t shift.”
“It wants a different kind of key,” says Mei Qiu, who has come up the steps with her bar.
She looks at you.
“It wants yours.”
> force | Go to the ring. | chain_a2s2
> truth | Ask what she means. | chain_a2s2
> quiet | Look at the plaque. | chain_a2s2
> mercy | Say you do not know how. | chain_a2s2

=== chain_a2s2 | The Seed Answers
You put your hand on the ring. The iron is warm, and slightly greasy, and it hums against your palm. The scar throbs. You have never used the seed. You have never been taught. You have only a sense, vague and strong, of something coiled in your chest like a sleeping snake.
“What do I do?”
“You open,” says Mei Qiu. “It’s what you are. It’s the only thing the seed does.”
“How?”
“I don’t know.” Her voice is rough. “Ask it.”
You close your eyes. You breathe in. You think of the lamp you reached for when you were small. You think of the burn on your hand, and the mist, and the river. You think: please.
The seed uncoils.
It is not like a snake. It is like a flower. It opens, petal by petal, slowly, in the dark of your chest, and a cold black light flows out of it and down your arm and into the iron.
> force | Push. | chain_a2s3
> truth | Let it. | chain_a2s3
> quiet | Hold still. | chain_a2s3
> mercy | Call for help. | chain_a2s3

=== chain_a2s3 | Opening
The ring opens. It does not break. It simply ceases to be closed. The iron softens and unfolds, like a bud in a time-lapse, and the link that was hooked on it slides off with a sigh and falls into the sea. The red glow dies. The coil of light that was crawling up the stone gutters out.
Kou stares. His mouth is hanging open.
“Well,” he says. “I’ll be buggered.”
You are shaking. The seed is still open. You can feel it in your chest, wide as a mouth, drawing in the cold air. It is hungry. It is very hungry. It wants more. It wants the next ring, and the next, and all nine.
“Again,” says Mei Qiu. “The next. Quickly. Before the Inspector notices.”
You go to the second. And the third. And the fourth. At each one the seed opens, the ring unfolds, the link falls. By the fifth you are staggering. By the sixth, you cannot see.
> force | Go on. | chain_a2s4
> truth | Admit you are tired. | chain_a2s4
> quiet | Lean on Gu. | chain_a2s4
> mercy | Stop. | chain_a2s4

=== chain_a2s4 | A Cost
It is the seventh ring that nearly kills you. You put your hand to it and the seed will not stop. It opens and keeps opening. It pours out of you like water from a broken jug, black and cold, and you cannot close it. You hear someone shouting your name. You hear a rushing sound, like the sea in a shell.
You are on your knees. You do not remember falling. The shingle is cold under your cheek. There is a taste of salt and iron in your mouth. Your hand, the left one, is shining faintly in the dark, a web of black veins running up the wrist.
“Stop!” shouts Mei Qiu. “Stop, you fool! Close it!”
“I can’t,” you say. Your voice is a croak. “It won’t.”
“Then I’ll close it.”
She seizes your wrist in both her hands. Her iron bar clatters to the stones. She presses her thumbs against the scar, hard, where the veins come together.
“Ke-er,” she says. “Help me.”
> force | Fight it. | chain_a2s5
> truth | Say her name. | chain_a2s5
> quiet | Go limp. | chain_a2s5
> mercy | Let her. | chain_a2s5

=== chain_a2s5 | The Seed Closes
It closes slowly, like a hand. Something small and warm presses against the cold, from the inside of the Wall, from the far side of the stone. It is a child’s palm. It is a push. A gentle shove, as one shoves a sleeper who is snoring.
The seed shudders. The black light dwindles. The veins fade, a thread at a time. The rushing stops. You are lying on the beach in a puddle of seawater, with a woman’s thumbs on your wrist and a stone wall at your back, and a voice in your ear is saying: “That’s enough. That’s enough, now. You’ve done plenty.”
“Ke-er,” you whisper.
“Hello,” says the voice. “You’re a very silly person.”
You laugh. It hurts.
“Seven rings,” says Kou, bending over you. He has gone pale. “Seven of nine. Two left.”
“Then they stay,” says Mei Qiu. She has not let go. “She’s done enough.”
> force | Try to rise. | chain_a2s6
> truth | Tell them to go on without you. | chain_a2s6
> quiet | Rest. | chain_a2s6
> mercy | Thank Ke-er. | chain_a2s6

=== chain_a2s6 | Two Rings Left
The chain is not broken. It is wounded. Seven of its anchors lie open and empty. The two that remain, at the far end of the Wall, still glow, still hold. The great grey curve hangs slack in the middle and taut at the ends, like a bow with a loosened string. It can no longer close. It cannot reach.
But it holds on. It strains toward the last two rings with a ragged groaning rumble. The Wall is singing, but it is a wounded song.
“We have a few hours,” says Kou, looking out at the water. “Perhaps a day. They will try to repair it. They will tow it in by hand. They have the ships.”
“How many men?”
“Eight hundred.”
“And ours?”
“Three hundred and ten,” says Kou. He scratches his ear. “And a girl who can open iron.”
You try to sit up. You cannot. Mei Qiu holds you down, gently, with one hand.
“Rest,” she says. “I’ll take your place.”
> force | Refuse. | chain_a2s7
> truth | Ask what she can do. | chain_a2s7
> quiet | Close your eyes. | chain_a2s7
> mercy | Say thank you. | chain_a2s7

=== chain_a2s7 | Mei at the Ring
She goes alone. You hear her go down the steps, her bar striking the stone. She stands at the eighth ring with her feet apart and her shoulders squared. She is twenty-eight years old and she has been the Concord’s servant for nineteen. She puts her palm against the iron, and she closes her eyes.
She does not have a seed. She has an iron bar, and a sister under the Wall, and a lifetime of holding a lamp.
“Ke-er,” she says. “I need your hand.”
The ring answers. It does not open. It rings, a clear sweet note, like a glass struck with a spoon, and the red light in it goes out. The link falls. The sea takes it. She has not touched it; she has asked.
She stands there for some time, with her hand on the cold iron. Then she lets out a long breath.
“There,” she says, in a thin voice. “That’s how it’s done.”
She walks to the ninth. She does it again.
> force | Rise. | chain_a2s8
> truth | Watch. | chain_a2s8
> quiet | Weep. | chain_a2s8
> mercy | Go to her. | chain_a2s8

=== chain_a2s8 | Slack
The chain goes slack at dawn. It sinks, link by link, into the sea, with a hiss like a falling sail. The great grey curve dissolves into the dark water, and the last glow dies. The fleet’s signal-lamps blink, in an agitated stutter, from ship to ship. Somewhere out in the bay, a trumpet sounds.
“It’s done,” says Kou. He is lying on the shingle beside you, panting, with his big hands behind his head. “It’s dead. I don’t know how.”
“Neither do I,” you say.
He turns his head and looks at you. His scarred face is dirty and creased and full of a strange tenderness.
“Don’t do that again,” he says. “I’ve got a conscience. It was a very close thing.”
“I won’t.”
“You will.” He grins. “But you’ll ask first.”
He holds out a hand. You take it. He hauls you up.
Mei Qiu is sitting on the sea steps with her bar across her knees and her head bowed. She is looking at nothing.
> force | Sit beside her. | chain_close | +chain_forced
> truth | Say her name. | chain_close | +chain_forced
> quiet | Give her space. | chain_close | +chain_forced
> mercy | Put a hand on her shoulder. | chain_close | +chain_forced

// ---------------------------------------------------------------- a3: the key and the seal
=== chain_a3s1 | Turn It
“It is time,” says Hao Lan. She has come up from the sea steps in a tunic stained with tar, with Shu Ning at her heel. Shu Ning carries a small black seal in a bag of soft leather. Her face is tight. “The Inspector has the key in his hand. He is turning it now. We can feel it.”
“How?”
“The chain is humming.” She presses her hand to the Wall. “It’s on the one note. It’s the tone of a key being turned.”
Shu Ning holds out the bag. In it, on a bed of black cloth, is the counter-seal. It is no bigger than a thumb-ring. It is rough as the skin of a pear. It is warm, and it hums, very faintly, with a different note.
“It asks,” says Shu Ning. “I have told it what to ask. I have told it for three weeks.” She swallows. “I don’t know if it will work.”
“What does it ask?”
“Whether the chain would like to be let go.”
> deceit | Take it. | chain_a3s2
> truth | Ask how it gets to the chain. | chain_a3s2
> quiet | Look at the water. | chain_a3s2
> mercy | Say you believe in her. | chain_a3s2

=== chain_a3s2 | The Link by the Wall
“It has to touch a link,” says Shu Ning. “One. Any one. But it has to be bare. The seal can’t pass through the sea.” She gestures at the Wall. “The nearest is at the foot of the steps. The Inspector’s men are rowing along it now, in a pinnace, inspecting. They’ll check each anchor.”
“Then we have a few minutes.”
“We have six.” She wipes her hands on her apron. “I have been counting.”
You go down. The sea steps are slick and black. The water laps at the lowest tread. A hundred yards out, a pinnace is rowing along the line of the chain, its lantern bobbing. A man stands in the stern with a spyglass.
At the foot of the stair, a link of the chain lies half-out of the water, draped over a rock. It is grey and wet. It glows faintly. It is hooked to a ring in the Wall.
It is the first.
It is the one that is hooked to Ke-er’s plaque.
> deceit | Reach for it. | chain_a3s3
> truth | Hold the seal out. | chain_a3s3
> quiet | Wait. | chain_a3s3
> mercy | Call to the Wall. | chain_a3s3

=== chain_a3s3 | Asking a Chain
You hold the seal in your palm. It is warm. It hums its small, rough, different note. You hold it out, over the link, and you say the thing that Shu Ning has taught you to say.
“Would you like to be let go?”
Nothing happens.
You say it again. “Would you like to be let go? You don’t have to answer. I only want to ask.”
The link glows a little brighter. It trembles. Behind you, Hao Lan has drawn in her breath. Shu Ning is holding her anvil in both arms like an infant. The pinnace is fifty yards away. The man in the stern has lowered his glass.
“It asks everything,” whispers Shu Ning. “Every link. All at once, they pass it down.”
And you hear it. Faint, along the length of the chain, a mile of iron, a hundred links, a note like a hundred voices answering one after another: a hundred small, grey, ancient voices.
We would, they say.
We would very much.
> deceit | Let go. | chain_a3s4
> truth | Say you will. | chain_a3s4
> quiet | Listen. | chain_a3s4
> mercy | Weep. | chain_a3s4

=== chain_a3s4 | Unwriting
The seal blazes. It flares white in your hand, a light so intense that you must shut your eyes, and a sound goes through the Wall like the ringing of a vast bell. The link on the rock cracks, and splits, and falls in two halves. The next link cracks. The next. Down the length of the chain, in the darkness, the glow goes out, link by link, in a travelling wave, as a row of lamps is extinguished by a hand.
The names on the links, each of the hundred and four, rise from the iron as pale threads of light. They do not fall into the sea. They float. They rise in the air above the water, a swarm of fireflies, drifting, turning, glowing faintly, and each one makes a small sound.
“Oh,” says Hao Lan. “Oh, look.”
They drift to the Wall. They settle on the carved names, one by one, each in its own place. They sink into the stone like rain into sand. And the Wall, which has been dark, begins to glow, softly, a pale and steady gold.
The pinnace has stopped rowing. The man in the stern has dropped his glass.
> deceit | Watch. | chain_a3s5
> truth | Say their names. | chain_a3s5
> quiet | Breathe. | chain_a3s5
> mercy | Hold Shu Ning. | chain_a3s5

=== chain_a3s5 | The Hundred and Four
They are the hundred and four. They are the people the chain was meant to hold. There is a baker. A net-mender. A salt-raker with six children. A girl of nine. A priest. They are alive, all of them, in the town, in their beds, and as the names sink into the Wall, you feel something go through the town like a long exhale.
In the Ferryman’s Rest, Mother Tiao sits up in bed and says, aloud, “Well, I never.”
In the Ward, a woman who has been darning the same stocking for three weeks puts it down and says, with great clarity, “Meilin.”
On the quay, a man stops and looks at his hands. “I’m Dei,” he says, to nobody. “Captain Dei. And that’s my dog.”
The chain lies in pieces on the rocks, split and dull and harmless. Shu Ning is sitting on the bottom step with her anvil in her lap and her head bowed. Her black hands are shaking.
“It asked,” she whispers. “It actually asked.”
> deceit | Sit beside her. | chain_a3s6
> truth | Say she did it. | chain_a3s6
> quiet | Give her time. | chain_a3s6
> mercy | Hug her. | chain_a3s6

=== chain_a3s6 | The Pinnace
The pinnace has run up on the rocks. It lies with its bow stove in, in a foot of water, and the grey-clad rowers are scrambling ashore. The man in the stern is on his knees in the shallows, soaked to the waist. He is thin, with a silver chain. It is the herald.
He looks up at you. His face is white.
“It’s gone,” he says. “The chain. It’s gone out.”
“It has.”
“How?”
“We asked it to.”
He stares. His mouth works. “That’s not possible,” he says. “A chain cannot be asked. It’s a seal. It’s a law.” He staggers to his feet. “The Inspector is going to be—”
He doesn’t finish.
“Go and tell him,” you say. “Tell him the chain is let go. Tell him that every name on it is free, and that if he wishes to close the bay he will have to do so himself.”
The herald flinches. He turns. He goes, splashing, up the beach.
> deceit | Watch him go. | chain_a3s7
> truth | Call after him. | chain_a3s7
> quiet | Rest. | chain_a3s7
> mercy | Help Hao Lan up. | chain_a3s7

=== chain_a3s7 | Fang Alone
He does not come. For an hour nothing moves on the flagship. Then a boat puts off from her side, a plain rowing-boat with a single occupant. It pulls steadily toward the Wall. It is rowed by a thin man in a grey robe, with white gloves, and no spectacles. He rows badly.
He comes in at the sea steps. He ships his oars. He sits there in the grey dawn, in his small boat, with his hands in his lap and the sea slapping at the hull, and looks up at the Wall.
He looks tired. He looks ill. His fine face has fallen in. There are shadows under his eyes like thumbprints.
“Please,” he says. His voice is thin. “May I come ashore? I have no weapon.”
You look at Hao Lan. She looks at Shu Ning. Shu Ning shrugs, with a small tight movement of one shoulder.
“Come,” you say.
> deceit | Wait for him. | chain_a3s8
> truth | Go down. | chain_a3s8
> quiet | Let Ren Qiao stand guard. | chain_a3s8
> mercy | Offer a hand. | chain_a3s8

=== chain_a3s8 | A Man on the Shingle
He steps ashore. He stands on the shingle with his hands at his sides. He has lost his gloves. His fingers are inky and chapped and surprisingly small. He looks at the broken links on the rocks. He looks at the Wall, shining gold. He looks at you.
“It asked,” he says. “It was a chain. It was the best made chain in the world. It had no will.” His voice shakes. “It had no will, and you asked it.”
“Yes.”
“I have spent twenty-two years believing that a seal could not be asked.” He draws a breath. “It is a possible error. I have found it. I wish to record it.”
He sits down on the shingle. He does it quite suddenly, like a man whose strings have been cut. He puts his face in his hands.
“I am so very tired,” says Inspector Fang.
Nobody speaks.
Out in the bay, a trumpet sounds, a single plaintive note. The fleet is turning.
> deceit | Sit beside him. | chain_close | +chain_unwritten
> truth | Say it is all right. | chain_close | +chain_unwritten
> quiet | Stand. | chain_close | +chain_unwritten
> mercy | Give him your cloak. | chain_close | +chain_unwritten

// ---------------------------------------------------------------- a4: the flagship
=== chain_a4s1 | The Skiff
Ah Zhi rows. She does it in the dark, with her hat pulled low and her oars muffled with sailcloth, and she is as silent as a ghost. The skiff is small and low and black. You lie in the bilge under a tarpaulin with Hao Lan and Yin, and listen to the sea slapping. Overhead, the great grey hulls of the fleet slide by like cliffs.
“Eight minutes,” whispers Ah Zhi. “She’s the one at the end. The Harmony. See her lantern? Red.”
You see it. It hangs from the stern, a single dull eye. A rope ladder dangles beneath it.
Yin stirs. He has put on a clerk’s grey tunic and a lanyard with a seal. His face in the dark is a pale oval. “I know the way,” he says. “Fourth deck, forward, to the cabin. There will be a marine. There will be the steward. There will be the Inspector.”
“And Duan?”
“In irons. In the cabin next to the Admiral’s. Starboard side.”
> quiet | Go. | chain_a4s2
> truth | Say a word. | chain_a4s2
> mercy | Hold Hao Lan’s hand. | chain_a4s2 | bond:hao+1
> inquiry | Ask Ah Zhi to wait. | chain_a4s2

=== chain_a4s2 | The Ladder
The ladder is wet and cold. The rope burns your palms. You go up one rung at a time, with the black hull sliding past you, sheer, enormous, smelling of tar and gunpowder. Yin goes first. He moves like a spider. At the top he reaches the rail, and looks, and signals with a flat hand.
You follow.
The deck is dark and silent. A sentry leans at the far end, humming. Lines of cannon sit on their carriages, black and shining. A lantern swings above the hatchway. Everything smells of rope and oil.
“Down,” whispers Yin. “That hatch. Quickly.”
You go down. You go down three decks, in the dark, by ladders, past the snoring crew, past the cook’s galley, past a row of hammocks swaying like cocoons. The sound of snoring is enormous. A hundred men. Two hundred. They are sleeping the sleep of those who have been told nothing will happen.
At the fourth deck, forward, a lamp burns.
> quiet | Check the passage. | chain_a4s3
> truth | Whisper to Yin. | chain_a4s3
> mercy | Stay close. | chain_a4s3
> inquiry | Look for the starboard cabin. | chain_a4s3

=== chain_a4s3 | Irons
The starboard cabin is small. It has a bunk, a bucket, and a porthole shuttered with a plank. The door is secured with a bar and a padlock. A marine sits outside it on a stool, with a rifle across his knees. He is asleep. His head has fallen back against the wall. His mouth is open.
Yin slips the padlock with a bent pin. He does it in ten seconds. He lifts the bar. He pushes the door.
Duan Wuyi is sitting on the bunk with his hands in his lap. He is wearing his grey robe, torn at the shoulder, and a pair of iron manacles on his wrists, joined by a chain. He has lost his staff, and his hat. His silver hair is on end. He raises his head, without surprise.
“I thought it might be you,” he says. “I heard the rope.”
“Master Duan.” Yin’s voice cracks. “Sir. I have come to—”
“I know what you have come to do,” says Duan. His long face is gentle. “You are late. But you have come.”
> quiet | Go in. | chain_a4s4
> truth | Greet him. | chain_a4s4
> mercy | Take his hands. | chain_a4s4
> inquiry | Ask how to take the manacles off. | chain_a4s4

=== chain_a4s4 | A Censor’s Counsel
“The key is in the Admiral’s waistcoat,” says Duan. He holds up his wrists. “He keeps it on a chain. I have seen him fiddle with it. He likes a thing in his hand.” He gives the ghost of a smile. “I should be happy to be free. But I should be happier to be of use.”
“What would be useful?”
“The Admiral.” He lowers his voice. “Shen is not a fool. He is not a Chancery man. He is a sailor. He was a captain in the Salt Coast Garrison in his youth, and he has no love for Fang. He has orders. He does not like them.” His eyes are very bright. “I have been talking to him through the wall for nine days. It is a most informative wall.”
“You think he would stand down?”
“I think,” says Duan, “that he is waiting to be asked.”
He gets to his feet. The chain clinks.
“Shall we go and ask?”
> quiet | Yes. | chain_a4s5
> truth | Free his hands first. | chain_a4s5
> mercy | Help him up. | chain_a4s5
> inquiry | Ask where. | chain_a4s5

=== chain_a4s5 | The Admiral’s Door
The Admiral’s day-cabin is on the same deck, forward. It is a large room with a long window, and a table, and a swinging lamp. Admiral Shen sits at the table in his shirtsleeves. He is a heavy weathered man of sixty with a white beard cut short and a blunt, good-natured face. He has a chart spread out before him, and a mug of cold tea. He is not looking at the chart.
He is staring at the wall. His eyes are red.
When the door opens, he does not turn his head. “I told you,” he says wearily. “No more reports.”
“Admiral,” says Duan Wuyi.
The old man turns. His eyes go to the manacles. His eyes go to you. His eyes go to Yin, and Hao Lan, standing behind in their clerks’ tunics. He sits very still. After a moment he sighs, and puts his big hands flat on the table.
“I wondered when you’d come,” he says.
> quiet | Greet him. | chain_a4s6
> truth | Say you are the bearer. | chain_a4s6
> mercy | Apologise for the intrusion. | chain_a4s6
> inquiry | Ask what he wondered. | chain_a4s6

=== chain_a4s6 | Old Shen
“I’m not going to shout,” says the Admiral. “I could. I’d rouse the ship. I’d have you in irons in ten minutes.” He rubs his beard. “I’d rather talk.”
He pours cold tea into a second mug and pushes it across.
“I was born at Kuan Landing. I joined the Garrison at sixteen. I rose. I got a ship. I got a fleet. I got a medal from the Concord, with a ribbon.” He pats his chest. “I’ve served for forty-four years. I have never questioned an order.”
He drinks.
“I’m not sure I like it,” he says. “This one. I don’t like sealing a bay. I don’t like bombarding a town. I don’t like chaining children to a wall.” His voice is very low. “I’ve a granddaughter. She’s eleven.”
There is a silence in the cabin.
“I was sent,” he says, “to do a job. I’ve been trying to find a reason not to.”
> quiet | Give him one. | chain_a4s7
> truth | Tell him about Ke-er. | chain_a4s7
> mercy | Tell him about the children. | chain_a4s7
> inquiry | Ask what his orders say. | chain_a4s7

=== chain_a4s7 | A Reason
You tell him. You tell it plainly, without ornament. You tell him about the girl under the Wall, who is eleven, and has been for nineteen years; who dug a tunnel with a toy boat; who sang four notes through a stone. You tell him about the Library. The Reader. The ward. The House of Gentle Hands, and the forty children, and the cup of camomile.
You do not tell him it is a good reason. You only tell him what is true.
Admiral Shen listens. He does not interrupt. When you have finished, he sits for some time with his big hands on the chart, looking at nothing.
“A granddaughter,” he says, at last. “That’s what it comes to.”
“Yes.”
“Eleven.” He shakes his head slowly. “I’ve been a damned fool.”
He stands. He crosses the cabin, and takes a key from his waistcoat on a chain. He unlocks the manacles. They fall to the deck with a clatter.
“I surrender,” he says, “my command.”
> quiet | Thank him. | chain_a4s8
> truth | Ask what he will do. | chain_a4s8
> mercy | Take his hand. | chain_a4s8
> inquiry | Ask about the Inspector. | chain_a4s8

=== chain_a4s8 | Stand Down
It takes an hour. The Admiral dresses. He puts on his coat and his sword and his medal, and he goes on deck, with Duan Wuyi at his elbow and Yin behind him with a lantern. He stands on the quarterdeck in the first light of dawn, and he blows a silver whistle, and every officer on the ship comes up the ladders at a run.
He addresses them in six sentences. He says that the Concord’s orders for the chain are suspended. He says that the fleet will lie at anchor and will not fire. He says that anyone who disagrees may speak to him. Nobody does.
Signal flags go up the halyards of the Harmony: a string of coloured squares, red and white, that mean Stand Down. One by one, down the line of the fleet, the other eight ships reply. The Duty’s burnt hulk answers last, with a flapping blue pennant.
Duan Wuyi stands beside the Admiral with the chain still at his wrist. He is smiling.
“Well,” he says. “I find I have a rule against this.”
> quiet | Smile. | chain_close | +chain_duan_freed
> truth | Embrace him. | chain_close | +chain_duan_freed
> mercy | Help him with the manacles. | chain_close | +chain_duan_freed
> inquiry | Ask about the Inspector. | chain_close | +chain_duan_freed

// ---------------------------------------------------------------- hidden: asking the wound
=== chain_h1 | The Saint’s Question
You take out the letter. The Elder gave it to you in the dark, in the Library, with her eyes shut: an old brown sheet, sealed with a lemon, folded in four. You unfold it by the light of Madam Ash’s lantern. You read the last paragraph aloud to the Wall.
“She will ask the abyss, and the abyss will ask her. Neither will want to answer. That is how you will know it is real.”
Silence. The tide hisses.
Then, from the plaque, a small, serious voice: “Is that for me?”
“I don’t know,” you say.
“It sounds like for you.”
“It sounds like for you, too.”
“Hm.” A pause. “What’s the question?”
You look at the paper. You have read it a dozen times. It does not give one. It says only: ask. You close your eyes. You put your forehead to the stone. And you ask the Wall the first thing that comes into your head.
“What are you afraid of?”
> inquiry | Wait. | chain_h2
> truth | Say it again. | chain_h2
> mercy | Hold the stone. | chain_h2
> quiet | Listen. | chain_h2

=== chain_h2 | The Answer of a Child
“Being forgotten,” says Ke-er.
She says it at once, matter-of-factly, in the clear voice of a girl who has had nineteen years to think. “Not being sealed. I got used to being sealed. Not the dark, either. It’s fine, the dark. It’s only a room. But being forgotten. I’m afraid that one day nobody will say my name, and I’ll still be here.”
You open your eyes. Mei Qiu is beside you with her face wet.
“That’s the same thing the abyss is afraid of,” you say slowly. “That’s why it cries.”
“Is it?” says Ke-er. “Oh. Poor thing.” A pause. “Then I know what to say to it.”
“What?”
“I’ll tell it that I’m still here,” says the voice, very simply. “It’s what I said to Bao Er. Four words. They worked on her.”
The Wall hums. A thread of gold runs across the stone, from the plaque to the water. The chain, a mile out, shivers.
> inquiry | Say it with her. | chain_h3
> truth | Say it for her. | chain_h3
> mercy | Weep. | chain_h3
> quiet | Hold the note. | chain_h3

=== chain_h3 | Still Here
You say it. All of you say it, kneeling on the shingle, in the dark, with the chain groaning and the fleet bearing down: Mei Qiu, and Madam Ash, and you. You say it to the stone. You say it to the sea. You say it, quietly, to all the struck names in the world.
We are still here.
The Wall flares gold. It rings. A pure and awful note goes out across the bay, so vast that it makes the sea shiver in rings, and the gulls fly up screaming from every roof. The chain, a mile of iron, takes the note and tries to hold it, and cannot. Links burst. Rings sing and crack. The great grey arc dissolves into the water in a rain of red sparks.
The last thing to go is the first link. It hangs there a moment, glowing, on the plaque.
It speaks, in a small rusty voice: “Well. I suppose I’ll go home, then.”
It drops.
> inquiry | Breathe. | chain_close | +chain_asked_wound
> truth | Whisper her name. | chain_close | +chain_asked_wound
> mercy | Lie back. | chain_close | +chain_asked_wound
> quiet | Open your eyes. | chain_close | +chain_asked_wound

// ---------------------------------------------------------------- close
=== chain_close | After the Chain
The sun comes up on a bay of calm, grey water. The tide has turned. The fleet lies at anchor a mile off the bar, nine sails, silent, with their guns run in. The chain is gone. The Wall stands in the dawn, its mile of carved names catching the light, pale and gold. Gulls are crying over the harbour. Somewhere in the town, a cock crows.
+[how] chain_ke_er_chose | Ke-er said not mine, and the Wall sang, and a chain fell down.
+[how] chain_forced | You opened seven of nine anchors with the seed, and Mei Qiu asked the other two.
+[how] chain_unwritten | A seal that asks was touched to a link, and a hundred and four names rose from the iron.
+[how] chain_duan_freed | The Admiral gave up his command on the quarterdeck, and the Censor-General was freed.
+[how] chain_asked_wound | You asked a wall what it feared, and a child answered, and the chain went home.
+[extra] forge_swapped_links | Ninety-one links carried a mark on their undersides, and when the chain was asked, they were the first to answer.
+[extra] ninesails_burned | The burnt hulk of the Duty lies on the bar. Nobody has asked to move it.
+[extra] ninesails_mustered | Three hundred and sixty of the struck still stand on the quay with their hats in their hands.
+[extra] ninesails_convoyed | The sick of the cave are being carried home in carts, singing.
Madam Ash sits on the sea steps. She has taken off her shoes. She is looking at her feet in the water.
“I never thought,” she says. “All those years. All the plans. All the rules. I never thought it would be so simple.”
“It was not simple.”
“No.” She wiggles her toes. “But it was a question. I had been waiting for the answer to be a force.”
> truth | Sit beside her. | chain_close2 | +b3q_chain
> mercy | Give her your hand. | chain_close2 | +b3q_chain
> quiet | Look at the sea. | chain_close2 | +b3q_chain
> inquiry | Ask about the fleet. | chain_close2 | +b3q_chain

=== chain_close2 | The Inspector Goes Home
They bring him up to the Wall at noon. He walks between two Lotus fishermen, in a borrowed blanket, with his hands bound lightly in front of him with a bit of cord. He has been given a bowl of rice. He has not touched it. He is thin and grey and absolutely composed.
Captain Kou, who has made himself the sort of jailer who is too embarrassed to look at his prisoner, says gruffly: “Say your piece. You have a minute.”
Inspector Fang looks at the Wall. He looks at the town. He looks at the line of faces on the quay: Auntie Pan, Mother Tiao, Captain Dei with his dog, Carver Sun on her scaffold, the keeners, the lamp. He looks at the broken links, the golden stone.
“I should like to go home,” he says.
There is a pause.
“To Qinglian,” he says. “To my desk. I should like to think. I do not think I can do it here.” He smiles, faintly. “I give you my word that I shall not return. I do not give it lightly. I have broken only one in my life.”
> truth | Let him go. | chain_close3
> mercy | Ask what he will do. | chain_close3
> quiet | Look at Duan. | chain_close3
> inquiry | Ask why you should trust him. | chain_close3

=== chain_close3 | A Word Kept
“You should not,” says Fang. He says it quite mildly. “You should not trust anyone who has done what I have done. But you have asked a chain and a wall and a river, and each of them said yes. I wonder if you might ask me.”
You look at him. You think of the cabin, the glass, the lamp on his face.
“Will you keep it?”
“I do not know,” says Fang. His eyes are bright. “I find I cannot say. But I shall try. It is the first time in twenty-two years that I have been asked.”
You nod.
Duan Wuyi unties the cord himself. It falls on the sand. Fang rubs his wrists. He looks, for a moment, like a very old child.
“Thank you,” he says.
He turns and walks down to the pinnace, and steps in, and sits with his hands in his lap. The Lotus fishermen row him out. The little boat dwindles across the grey water toward the flagship.
He does not look back.
> truth | Watch him go. | b3_close
> mercy | Wave. | b3_close
> quiet | Turn away. | b3_close
> inquiry | Ask Duan what he will do. | b3_close

`,
  scenarios: String.raw`
$ SU_CHAIN_CLOSES | trust+4 respect+4 fear+5 | elder | The Elder watches a hundred links of iron rise from the sea to anchor on the Wall.
hostile: I counted the links as they came up. A hundred and four. I did not need to count. I knew the number from the moment I saw the first. It is the number of a child.
wary: He signed the requisition for the chain with a pen I recognise. It is the Law Hall’s pen. It is the one we used for the fifteenth order.
neutral: The Wall sang when the chain closed. I have heard stone sing before, in the abyss, under the mist. It was grieving then too.
warm: I stood on the Wall in the dark with your sleeve in my hand. It was the first time since I was a girl that I did not wish to be elsewhere.
devoted: Whatever the morning brings, I am grateful for tonight. I am a woman who was afraid of heights, and I have stood on a wall at the end of the world, beside someone who is not afraid, and I did not fall.
`,
  remarks: String.raw`
% chain_ke_er_later | since:chain_ke_er_chose>=6 | ren | The Wall hums at night, now. It is a different sound. Mei Qiu sits on the sea steps with her ear against the stone. I have stopped asking what she hears.
% chain_duan_later | since:chain_duan_freed>=6 | hao | Duan Wuyi sent a letter from the flagship. It was one line long: The Inspector has stopped signing. Please advise. I do not know what to advise.
`,
};
