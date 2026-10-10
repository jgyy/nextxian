import type { Arc } from "../types";

/**
 * Book Four, arc eleven: the Kurultai. Once in a generation the nine clans of the Listeners meet at the Black Stone to say what the
 * Order of the Torn Page is for. Grandmother Tamar decides, but only after the clans have spoken. The question this year is whether
 * to keep the nine verbs in the family tent, or to say them aloud against the Hush. Four approaches: speak to each clan in turn
 * (a1, truth), win the camp's war-game (a2, force), trade the chiefs' secrets against one another (a3, deceit), and make peace
 * between two clans who have not eaten together in sixty years (a4, mercy). A hidden route lets Ren Qiao's mother speak.
 * Cast: Tamar, Odval, Choijin of the Stone-Singers, Tsetseg of the Glass-Wrights, Jargal of the Horse-Keepers, Old Boroo,
 * Narmandakh the bell-founder, Ganbold the smith, Odgerel, Ren Qiao, Temur.
 */
export const kurultai: Arc = {
  id: "kurultai",
  name: "The Kurultai",
  scenes: String.raw`
=== kurultai_entry | Nine Fires
They come in over four days, from every horizon. Clan after clan rides into the Great Ring with their felts rolled behind the saddles, and puts up a tent beside the black stone, and lights a fire before it. By the fourth night nine fires burn in a circle round the slab, each a different colour: the blue of Stone-Singers’ juniper, the white of the Glass-Wrights’ salt, the red of Horse-Keepers’ dung, and six more. The smoke goes up together.
Nobody speaks above a murmur. The wind has dropped. In the middle, on her heap of felts, sits Grandmother Tamar with her blind face turned toward the sky.
“It is the Kurultai,” says Temur, very quietly. “It meets once in nineteen years. The last time, I was not born.”
“What is it for?”
“To say what we are for.” He pulls off his white hat. “Tomorrow each chief will say it. And at the end she will say which was true.”
Odval touches your sleeve. Her pale eyes are shining.
“They have asked you to speak,” she says. “All nine. Which will you be to them?”
> truth | Go from fire to fire, and ask each chief what they are afraid of. | kurultai_a1s1 | +kurultai_a1
> force | Look at the great field beyond the river, where the young riders are lining up for the war-game. | kurultai_a2s1
> deceit | Notice that every chief has a quiet man standing behind them, writing nothing down. | kurultai_a3s1
> mercy | Look at the two fires at the far edge, that burn apart from all the others and do not share a spark. | kurultai_a4s1
> inquiry | Say that you have found the Horse-Keepers’ lost daughter. | kurultai_h1 |  | camp_mother_found | You have not yet found anyone the Horse-Keepers lost.

// ---------------------------------------------------------------- a1: nine fears
=== kurultai_a1s1 | Choijin
The Stone-Singers’ fire is blue, and the chief beside it is deaf. He is seventy, long and stooped, in a coat the colour of slate, and he has been deaf since a rockfall when he was nine. He is the best Singer of his generation. He sings by touch, with one palm flat on the stone, and he has never heard a note.
He signs to you with his big knotted hands, quickly, with an impatient jerk of the wrist. His apprentice, a girl of twelve, speaks for him in a clear small voice.
“He says, sit. He says, you are tall. He says, nobody sits with him because he cannot be talked at.”
You sit.
“He asks what you want.”
“To know what you are afraid of.”
The chief watches the girl’s lips as she translates. For a moment his hands are still. Then he signs, slowly, and she hesitates before she speaks.
“He says: that the stones will go quiet.”
> truth | Ask why. | kurultai_a1s2 | npc:SU_KURULTAI_FIRES
> mercy | Put your palm on the stone. | kurultai_a1s2
> quiet | Wait. | kurultai_a1s2
> inquiry | Ask what they sing. | kurultai_a1s2

=== kurultai_a1s2 | What the Stones Sing
“We do not sing,” the girl translates. “We carry.” Choijin’s hands move slowly, as though drawing a long thread. “Each stone holds a name. The first Listener put it there. When the name is called in the right way, the stone hums.”
“How many?”
“Nine hundred and ninety-nine. He says there should be a thousand.” The girl pauses. “One of them was taken. A hundred and forty years ago. The Garrison’s grandfather came for it with a cart.”
“What was the name?”
Choijin’s hands go still. He looks at you, with his blind-deaf-quiet face, as a man looks at a door he has long since stopped knocking on.
He signs one word. The girl does not need to translate it. You have seen it before, on a card, in a lamp-room, in a drowned library, on the wall of a cot.
It is the sign for a name you do not know. It is the Ninth’s.
“He says,” whispers the girl, “that when you came and sat among the stones, they hummed. He says it is the first time in a hundred and forty years.”
> truth | Bow. | kurultai_a1s3
> mercy | Take his hand. | kurultai_a1s3
> quiet | Look at the stones. | kurultai_a1s3
> inquiry | Ask where the stone is. | kurultai_a1s3

=== kurultai_a1s3 | Tsetseg
The Glass-Wrights’ fire is white because they burn salt in it. Their chief is a small, quick, dry woman in a leather apron burned full of tiny holes, with a mouthful of gold teeth and fingers like a heron’s. She is sixty-one. She is chewing something. She has been chewing it, so far as you can tell, for decades.
“Afraid?” says Tsetseg, round the quid. “Of what? Of fire?” She cackles. “Child, I make windows out of sand. I have not been afraid of anything since the day my first pane did not crack.”
“Everyone is afraid of something.”
“Ah.” She spits neatly into the fire, and it hisses. “Very well. I will tell you what keeps me from my bed.”
She leans close. Her breath smells of aniseed.
“That they will ask me to make the mirror,” she says.
“What mirror?”
“The one in the dream,” says Tsetseg. “The glass that shows the name. I could do it. I have the sand. I have the salt.” Her bright eyes are suddenly very old. “I would rather break my hands.”
> truth | Ask why. | kurultai_a1s4
> mercy | Say you would never ask. | kurultai_a1s4
> quiet | Watch her fingers. | kurultai_a1s4
> inquiry | Ask what the mirror would show. | kurultai_a1s4

=== kurultai_a1s4 | The Mirror in the Dream
“It would show the page,” says Tsetseg. “The torn one. The Order of the Torn Page, you know, is named for what it holds. The first Listener tore a leaf from the Ledger. She hid it. She hid it in a stone, and in a bell, and in a pane of glass.” She chews. “I am the glass.”
“You think you hold part of the page.”
“I think I hold the cure for it.” She laughs without humour. “You do not make glass without making a mirror. It is the nature of the thing. And a mirror does not choose what it shows.”
“What did you see?”
“Nothing yet. I have not made it. I have only dreamed it.” Her fingers writhe in her lap. “I dreamed a mirror in which a woman looked, and saw not her face, but every name she ever struck.”
She gives you a sharp sidelong look.
“I think it was your friend the Elder,” she says. “She wore a grey coat. She was crying, and the glass was cracking, and she did not stop looking.”
> truth | Say nothing. | kurultai_a1s5
> mercy | Tell her you will not ask. | kurultai_a1s5
> quiet | Look across the ring. | kurultai_a1s5
> inquiry | Ask if the Elder should know. | kurultai_a1s5

=== kurultai_a1s5 | Jargal
The Horse-Keepers’ fire is red, and heaped, and enormous, and burns without a flicker. The chief sits beside it on a cushion with his arms folded and his legs crossed, like a statue. He is a vast man of fifty-five with a broken tooth and an air of cheerful menace. He is Temur’s uncle. He is trying very hard not to look at his nephew.
“Afraid,” says Jargal, and laughs. “That one is easy. I am afraid of the Colonel’s horses.”
“Horses?”
“Grey ones. From the south. Thick-boned. They eat grain.” He spits. “They are no good on the grass. They die in a winter. But there are so many.” His big hands open. “Every year, more. And every year, fewer of ours.”
“You fear being replaced.”
“I fear being irrelevant.” He grins, to show it is a joke. It is not. “My grandfather rode two thousand miles. My father, six hundred. I ride the Garrison’s line, and I am shouted at by a boy of twenty with a brass button.” The grin fades. “I would like to be afraid of something with teeth.”
> truth | Say you understand. | kurultai_a1s6
> mercy | Ask about Temur. | kurultai_a1s6
> quiet | Look at the horses. | kurultai_a1s6
> inquiry | Ask what he would do about it. | kurultai_a1s6

=== kurultai_a1s6 | Old Boroo
The Salt-Road fire is smoky and bitter, and the chief beside it is Yue Zhaoning’s father. She had not mentioned it. He sits on a camel-saddle, a wizened, bright-eyed little man in a ragged coat, with a drooping moustache and a pipe, and he nods to you with great dignity. Yue is at the far side of the ring, rigidly examining a pony’s hoof.
“My daughter,” says Old Boroo, with satisfaction, “is avoiding me.”
“Is she?”
“She does it very well. She had a good teacher.” He puffs. “I was the same, at her age. I did not speak to my own father for eleven years.”
“What are you afraid of?”
“That she is right,” he says, and chuckles. “She is usually right. It is a frightful quality in a daughter. I have been telling the clans for three years that the caravans can carry the word. That we do not need a war.” He takes the pipe from his mouth. “She says the word cannot be carried by a man who is afraid of the road.”
“Is she right?”
“Very probably,” says Old Boroo.
> truth | Smile. | kurultai_a1s7
> mercy | Ask if he has told her. | kurultai_a1s7
> quiet | Look at Yue. | kurultai_a1s7
> inquiry | Ask what he is afraid of on the road. | kurultai_a1s7

=== kurultai_a1s7 | The Bell-Founder
She sits apart. Her fire is cold. She is a woman of forty-five, thickset, grey-faced, in a smith’s leather coat with the sleeves rolled, and she is looking at her own hands. Nobody is near her. A ring of clear grass lies round her tent. She is Narmandakh of the Bell-Founders.
“You will have heard,” she says, before you can speak. “My people cast the Hush bells.”
You had not. You say nothing.
“Four hundred and eleven of them,” says Narmandakh. “For the Garrison. They paid in grain. It was the second winter of the levy and our children were hungry.” Her voice is flat. “We did not ask what the bells were for. We did not ask why they were tuned to a note that silences the wind.”
“And now?”
“Now we have heard it.” She looks at you. “Every one of the four hundred and eleven. They are hanging from gibbets across the grass. I can hear them in my sleep.” She wets her lips. “I am afraid that it was my hand that did it, and that it was a very beautiful bell.”
> truth | Listen. | kurultai_a1s8
> mercy | Sit beside her. | kurultai_a1s8
> quiet | Hold still. | kurultai_a1s8
> inquiry | Ask if the bells can be undone. | kurultai_a1s8

=== kurultai_a1s8 | The Note
“They can be silenced,” says Narmandakh. “If you know the note.” She picks up a lump of cold bronze from the ground by her stool, and weighs it in her hand. “A bell is a pact between the metal and the air. Break the pact, and it is only a pot.”
“What breaks it?”
“Another bell.” She looks up. “In a different key. At the same moment. The two will fight, and the metal will crack.” Her thick face is working. “I know the key. I tuned the first one. I know exactly where it hurts.”
“Why have you not told the others?”
“Because it would mean ringing it.” She holds up the bronze. “Do you know what the Hush note does to a Listener? It does not merely stop the wind. It stops the hearing. I would have to ring the thing in the middle of the Great Ring, at the Kurultai, before nine fires. And every person in this circle would be deaf for a day.”
She puts the bronze down, with infinite care.
“I am afraid to ask them,” she says. “It would be unforgivable. And it is the only cure I have.”
> truth | Say it is not unforgivable. | kurultai_a1s9
> mercy | Say you will ask them. | kurultai_a1s9
> quiet | Take her hand. | kurultai_a1s9
> inquiry | Ask what the Matriarch would say. | kurultai_a1s9

=== kurultai_a1s9 | What You Told the Fires
You go back round the ring in the dark, fire to fire, and say it nine times. You say it first to Choijin, who reads your lips and nods. You say it to Tsetseg, who spits. You say it to Jargal, who swears; to Old Boroo, who laughs; to Saran, who says nothing and stands; to Ganbold and the Smiths; to the weavers; to Odval. The last is the old woman on the heap of felts.
Every chief has said what they fear. You tell them what the others have said. You do not name names. You simply say: the stones, the mirror, the horses, the road, the bells.
“It is five,” says Tamar, at the end. “You have left four out.”
“Four were told in confidence.”
“Ah.” Her blind face is lit with a delighted smile. “Then you are not a Listener yet.”
“Why?”
“Because a Listener would have known,” she says, “that the four are the same as the five.” She pats the felt beside her. “Sit. Tell me what you heard. And I shall tell you what they all said, under the words.”
> truth | Sit. | kurultai_close | +kurultai_spoke
> mercy | Take her hand. | kurultai_close | +kurultai_spoke
> quiet | Listen. | kurultai_close | +kurultai_spoke
> inquiry | Ask what is under the words. | kurultai_close | +kurultai_spoke

// ---------------------------------------------------------------- a2: the war-game
=== kurultai_a2s1 | Buzkashi
The field beyond the river is a mile of flattened grass, and two hundred riders are on it. They sit their ponies in two long lines, facing each other across the sward, stamping and snorting. In the middle lies a headless goat. This is the war-game. It is the way the clans decide who sits closest to the stone.
“Whoever carries the carcass over the line three times,” says Temur, “wins the seat nearest the Matriarch. The seat is worth a vote and a half.” He winces. “It is also a very good way to be trampled.”
“Who rides?”
“Anyone. The rules are: no knives, no nets, and you may not strike another rider’s horse. Everything else is permitted.” He gives you a wry look. “It is generally agreed that the Horse-Keepers will win.”
“Why?”
“Because they have been winning for eleven hundred years.”
You look at the line. Yue Zhaoning, grim and jaunty on her camel, is trotting up and down. Ren Qiao is stripping off his coat. Hao Lan is taking bets.
“There is a place for one more,” says Temur. “If you wish.”
> force | Take it. | kurultai_a2s2
> truth | Ask about the rules. | kurultai_a2s2
> quiet | Watch. | kurultai_a2s2
> mercy | Ask who gets hurt. | kurultai_a2s2

=== kurultai_a2s2 | A Borrowed Pony
They lend you a pony. She is a short, shaggy, ill-tempered grey mare called Cloud-Eater, with a white blaze and a way of rolling her eye. She bites you twice in the first minute. A boy of ten holds the bridle, grinning. “She likes you,” he says.
“She bit me.”
“It means yes.”
You have never ridden in a game. You hold the reins in both fists, with your knees tight, as Temur shouts instructions across the grass. “Don’t chase the goat! Chase the man who has it! If you chase the goat, the goat wins!”
A horn blows.
Two hundred ponies break at once. The ground booms. Dust rises in a yellow wall. Somewhere in the mass of it there is a headless goat, passing from hand to hand, and screams, and the heavy thud of bodies. Cloud-Eater lays back her ears and plunges into the middle of it, with a will.
“I thought it meant yes,” you shout.
“It does!” shouts the boy, delighted.
> force | Hold on. | kurultai_a2s3
> truth | Shout for the goat. | kurultai_a2s3
> quiet | Duck. | kurultai_a2s3
> mercy | Aim for open ground. | kurultai_a2s3

=== kurultai_a2s3 | In the Dust
It is the most frightening thing you have ever done, and the least dignified. You cling to Cloud-Eater’s mane. Hooves thunder. A shoulder strikes your knee like a mallet. A rider in blue swings past, bent double over his saddle with the goat between his teeth, and you cry out and rein hard, and the mare stops dead.
You do not stop. You go over her shoulder.
You land in the grass on all fours. Over your head a dozen ponies leap, like a stream going over a stone. A hoof comes down by your ear. Something enormous and warm snorts.
“Up,” says a voice. “Up, up, up.”
A hand grabs your collar and heaves. You are dragged to your feet and thrust, bodily, back into the saddle. It is Jargal. He is grinning, enormous and red, from the back of a vast black stallion.
“You ride like a sack of rice,” he bellows. “Hold with the knees! The mare knows what to do.”
He thumps her flank. She leaps forward.
> force | Hold with your knees. | kurultai_a2s4
> truth | Thank him. | kurultai_a2s4
> quiet | Breathe. | kurultai_a2s4
> mercy | Look for Ren. | kurultai_a2s4

=== kurultai_a2s4 | The Goat Changes Hands
You see it all, from the saddle, in a rush of colour. The Stone-Singers are in blue and run in a tight wedge, very disciplined. The Glass-Wrights ride in a diamond, all in white, their long sleeves flashing. The Horse-Keepers are everywhere at once, scattered, laughing, whooping, in a red and brown tide. Yue’s camel stalks through the middle like a ship.
The goat has been dropped. It lies in the dust, half-trampled, and a dozen riders are swerving to snatch it. A small white shape darts in under their elbows. It is Sarnai, on a pony half her size, hanging out of the saddle by one knee. She scoops it up.
“Mine!” she shrieks.
Then she looks up and sees forty riders bearing down on her, and her face changes.
“Help!” she cries.
Cloud-Eater is already moving. You do not remember deciding to go. You are suddenly alongside, with the mare’s shoulder against the pony’s, and a small furious white face is thrust close to yours.
“Take it!” she says.
> force | Take the goat. | kurultai_a2s5
> truth | Protect Sarnai. | kurultai_a2s5
> quiet | Pull her clear. | kurultai_a2s5
> mercy | Shout a warning. | kurultai_a2s5

=== kurultai_a2s5 | The First Carry
You take the goat. It is surprisingly heavy and extremely unpleasant. Someone has wrapped its legs in rope for the purpose, and you hook one arm through it and clamp it against your ribs. Behind you, a dozen horses are shouting.
“Go!” screams Sarnai.
You go. The mare plunges down the sward, dodging, swerving, scattering Stone-Singers like sheep. A blue rider tries to hook the goat. You lean sideways. He misses. A red one cuts across your bows and you swerve, and the mare, at last, finds her stride. She flattens. She runs. The wind roars past your ears.
You cross the line.
There is a thunderclap of cheering. You drop the goat. It bounces. You pull up in a haze of dust, shaking, gasping, laughing. Sarnai pounds you on the back.
“One!” she screams. “That’s one!”
“I fell off,” you say.
“Only once!” She bounces in the saddle. “Come on!”
A horn blows, and the goat is thrown again.
> force | Go again. | kurultai_a2s6
> truth | Catch your breath. | kurultai_a2s6
> quiet | Look for Jargal. | kurultai_a2s6
> mercy | Check on Sarnai. | kurultai_a2s6

=== kurultai_a2s6 | Jargal’s Challenge
The second carry is Jargal’s. He takes the goat off the ground at a full gallop, hanging by one stirrup, and brings it up with a howl. The whole field watches him cross the line. He tosses it down with a flourish, and wheels the black stallion in a circle. His big face is red and shining.
“Two to the Horse-Keepers,” cries the umpire. “One to the stranger.”
Jargal trots across. He leans down from the saddle with his arms on the pommel.
“A fine start,” he says. “I like the way you fall.”
“It is not deliberate.”
“It never is.” He laughs. “Now. The third carry decides it. And I should like to propose a wager.”
“What?”
“If you win,” says Jargal, “I will vote with you. All of my fire. Whatever you ask.” His small bright eyes are keen. “If I win, you will do something for me.”
“What?”
“You will teach my nephew,” says Jargal, “to ride a horse like a man, and not like a poet.”
Temur makes a faint noise.
> force | Accept. | kurultai_a2s7
> truth | Ask why. | kurultai_a2s7
> quiet | Look at Temur. | kurultai_a2s7
> mercy | Say it is a bargain. | kurultai_a2s7

=== kurultai_a2s7 | A Plan from the Saddle
It is Ren Qiao who thinks of it. He rides up on a borrowed gelding, panting, with a split lip and a torn sleeve. “You can’t beat him in a straight carry,” he says. “He is twice your weight and has been doing this since he was four.”
“I noticed.”
“So don’t carry. Pass.” He wipes his mouth. “They have a rule. A rider may hand the goat to another, if he does it at full speed and neither falls. Nobody ever does. It is too dangerous.”
“Who would I hand it to?”
“Me,” he says. “I rode with my mother’s clan, as a boy. I was not good.” A faint grim smile. “But I remember how.”
“They will cut you off.”
“They will cut off the man with the goat. They will not think to cut off the man behind.” He is looking at Yue, who is pretending not to listen, on her camel, at the line. “Three of us. You, me, and a smuggler. It is a ridiculous plan.”
“That means it will work.”
“It means I may die,” says Ren Qiao.
> force | Agree. | kurultai_a2s8
> truth | Call Yue. | kurultai_a2s8
> quiet | Look at the line. | kurultai_a2s8
> mercy | Say you will protect him. | kurultai_a2s8

=== kurultai_a2s8 | The Third Carry
The horn blows. Jargal gets the goat in four seconds, and he is off like a thunderbolt, down the field, with half the Horse-Keepers streaming after him. You follow at a distance, with Ren Qiao on your left and Yue’s camel looming on the right. Your heart is slamming.
“Now!” cries Ren Qiao.
You surge. Cloud-Eater digs in. You come up alongside the black stallion, close enough to see the sweat on his flank, and Jargal turns his head and sees you. His eyes widen. He roars with laughter, and spurs.
Ren Qiao comes from behind. Yue comes from the side. You each reach out a hand. It is a mad, impossible tangle of horses and arms and goat. For a moment the world is nothing but hooves and mane and a headless animal flung into the air.
You catch it. You do not know how. You hand it off, over your shoulder, without looking.
Ren Qiao takes it. He spurs. He goes for the line, hunched, grimacing, flat to the horse’s neck.
> force | Ride. | kurultai_a2s9
> truth | Shout his name. | kurultai_a2s9
> quiet | Hold your breath. | kurultai_a2s9
> mercy | Cut off Jargal. | kurultai_a2s9

=== kurultai_a2s9 | Over the Line
He makes it by a length. The black stallion is a nose behind. Ren Qiao throws the goat across the white chalk as he crosses, and the whole field erupts. The riders swirl in a boiling mass of dust and flags. Women are screaming. Children are leaping the fence. Old Boroo is standing on a camel-saddle, thumping his chest.
Ren Qiao pulls up. He sways. He slides off the horse in slow motion, and sits down in the dust, gasping, laughing, with a split lip and a goat in his lap. “I am too old,” he says, “for this.”
Jargal trots over. He draws rein. He swings down from the stallion with a grunt, and stands over you, vast and sweating, with his hands on his hips.
“Well,” he says.
“A bargain.”
“A bargain.” He roars with laughter. He lifts his arms. “I will vote with you! The Horse-Keepers will vote with you! And Heaven help any man who says a Horse-Keeper does not pay his debts!” He seizes your hand and pumps it. “I will teach my nephew myself. Come here, boy!”
Temur flinches.
> force | Shake his hand. | kurultai_close | +kurultai_mustered
> truth | Thank him. | kurultai_close | +kurultai_mustered
> quiet | Smile. | kurultai_close | +kurultai_mustered
> mercy | Help Ren up. | kurultai_close | +kurultai_mustered

// ---------------------------------------------------------------- a3: the quiet men
=== kurultai_a3s1 | The Quiet Men
Hao Lan has noticed it first. She has a way of noticing such things. “They are clerks,” she says, in a murmur. “Look at their hands. Ink on the first and second fingers. Calluses on the side of the thumb. They all hold a pen.”
“They are not writing.”
“They are remembering.” She sips her tea, over the rim, with her eyes on the nearest. “A Listener does not write. But a chief must still know what has been said, to whom, and when. These are the ones who know.”
Behind each of the nine chiefs, a little to one side, stands a person in a plain brown coat. Some are old. Some are young. A woman, a boy of fourteen, a one-eyed man with a limp. They do not move. They do not speak. They look straight ahead, with faces of studied emptiness, and they listen to everything.
“The Tongues,” says Temur, when you ask. He frowns. “They keep the clan’s memory. They are not meant to be spoken to.”
“Why not?”
“Because they are not meant to answer.”
> deceit | Study them. | kurultai_a3s2
> truth | Ask Hao Lan what she wants. | kurultai_a3s2
> quiet | Watch. | kurultai_a3s2
> mercy | Smile at the boy. | kurultai_a3s2

=== kurultai_a3s2 | What Hao Lan Wants
“Their memories,” says Hao Lan. She sets down her cup. “Think about it. Nine chiefs, who each want something. Nine Tongues, who know what the chief has done, and said, and been told. Each has a ledger in his head.” She taps her skull. “A Censor’s dream.”
“They will not tell you.”
“No. They cannot lie. That is what makes them so valuable.” Her small mouth curves. “But they can be asked. A Tongue is bound to answer a direct question, from a Kurultai guest, in front of the fire.”
“And?”
“And I can ask very good questions.” She pulls out her notebook. “I propose to make a list of what each chief has promised the others. A web. A map of debts.” She taps the page. “It is the oldest trick in the world. You find who owes what to whom, and you put the right man next to the right favour.”
“That is not truth.”
“It is entirely true,” says Hao Lan. “It is simply not what they intended to say.”
> deceit | Agree. | kurultai_a3s3
> truth | Say it is wrong. | kurultai_a3s3
> quiet | Hold the notebook. | kurultai_a3s3
> mercy | Think of the Tongues. | kurultai_a3s3

=== kurultai_a3s3 | The Boy
You choose the boy first. He is fourteen, thin and brown, with a cowlick and enormous ears. He stands behind Choijin’s empty stool with his hands folded, and when you come up he gives you the blank look of a student who knows the answer and has been told not to say it.
“I will ask you a question,” you say. “You are not obliged to answer.”
“I am obliged,” he says. His voice cracks. “It is the rule. Any Kurultai guest.”
“Then I am sorry.”
A flicker crosses his face. Surprise, perhaps. “Nobody has said that,” he whispers.
“What is your name?”
“I have none.” He looks over your shoulder. “A Tongue gives up his name at ten. The clan holds it for him. It is how we stay quiet.”
Your stomach turns over. “That is a terrible rule.”
“Yes,” says the boy, very low. “I know.” His eyes slide back to yours. “Please don’t tell the chief I said so. I would like to keep my job.”
> deceit | Ask what Choijin has promised. | kurultai_a3s4
> truth | Say you will not tell. | kurultai_a3s4
> quiet | Bow. | kurultai_a3s4
> mercy | Ask what he would be called. | kurultai_a3s4

=== kurultai_a3s4 | A Web of Debts
It takes Hao Lan two days and a great deal of tea. By the end she has a sheet the size of a tablecloth, pinned with stones to the grass of your tent, covered in names and arrows and small red knots. It looks like the plan of a battle. In a sense it is.
“Choijin owes Tsetseg a window,” she says. “He broke it, in the year of the great hail. She has not forgotten.” She marks it. “Tsetseg owes Boroo eleven bolts of felt. Boroo owes Narmandakh two sons’ ransom.” She ticks. “Jargal owes everyone a horse.”
“Is there anyone who owes you?”
“The Horse-Keepers, a little.” She smiles. “Everyone else wants something. And nobody has asked the others.”
“What do you want?”
“I want the vote,” says Hao Lan. “At the end. I want every chief to vote the way I need. It will take nine small favours. I have worked them all out.” She straightens, thin and bright-eyed. “It will be the neatest piece of work I have ever done.”
You look at the web. It is beautiful.
> deceit | Study it. | kurultai_a3s5
> truth | Ask if it is right. | kurultai_a3s5
> quiet | Fetch the stones. | kurultai_a3s5
> mercy | Ask about the Tongues. | kurultai_a3s5

=== kurultai_a3s5 | Duan Looks at the Sheet
Duan Wuyi comes in at dusk, with a lamp. He stands at the foot of the big sheet for a long time, with the light on his thin silver beard. He reads it from end to end. He reads the red knots. He reads the small neat notes in the margin. When he reaches the end he sighs.
“It is an excellent piece of work,” he says.
“Thank you,” says Hao Lan, warily.
“It is the kind of piece I should once have commissioned.” He looks round. “May I ask something? Is every statement true?”
“Every one.”
“And which of them has been agreed to by the party concerned?”
“None. That is the point.” She jabs a pencil at the sheet. “The Tongues cannot lie. Therefore the list is not a deception.”
“It is not a deception,” says Duan. “It is something stranger.” He sets down the lamp. “It is a map of other people’s secrets, drawn without their leave, in order to move them.” He turns his soft clever face. “We called it ‘intelligence’ in the Chancery. I wonder if the word is quite right.”
> deceit | Say nothing. | kurultai_a3s6
> truth | Agree with Duan. | kurultai_a3s6
> quiet | Look at Hao Lan. | kurultai_a3s6
> mercy | Ask what he would do. | kurultai_a3s6

=== kurultai_a3s6 | Choijin’s Tongue
The boy comes to you in the night. He comes alone, through the dark, past the sleeping guard. He kneels at the tent-flap in his brown coat and says, in a voice like a thread: “Please. May I speak?”
“Of course.”
“I am not supposed to. I am a Tongue.” He licks his lips. “But I have heard them talk. The Elder and the girl. The one with the notebook. I know what they are doing.”
“Yes.”
“It will not work.”
“Why not?”
“Because I will tell the chief,” says the boy. “If he asks.” He swallows. “And he will ask. He always asks, the night before a vote. It is the only time he lets himself be talked to.” His eyes are huge. “I would rather it came from you.”
“What would you rather I said?”
“That you made a mistake,” says the boy. “That you came to the Kurultai to trade, and found that people were not coins.” He bites his lip. “That is what I would say. If I were allowed.”
> deceit | Thank him. | kurultai_a3s7
> truth | Say you will go. | kurultai_a3s7
> quiet | Hold still. | kurultai_a3s7
> mercy | Give him your name. | kurultai_a3s7

=== kurultai_a3s7 | Telling Choijin
You tell him in the morning, in the open, at the blue fire. It is the hardest speech you have given. You say it by hand, with the apprentice interpreting, and the old chief watches your fingers with a stony face.
You say: we made a map. We drew your secrets. We meant to use them.
You say: we are sorry.
He is silent for a long time. The big hands rest on his knees. The girl, translating, is white to the lips.
At last he signs. Short and sharp. The girl’s voice shakes.
“He says: what was on it?”
“What?”
“What was written under his name.”
You think. You have seen the sheet. “A window,” you say. “That you broke, in the year of the hail.”
Choijin blinks. Then, slowly, to your astonishment, the old man begins to shake. His whole stooped frame trembles, and a sound comes out of him: a rusty crack like a hinge. It is a laugh. He bends double with it.
He signs, gasping. The girl says: “He says: it was a very good window.”
> deceit | Laugh. | kurultai_a3s8
> truth | Smile. | kurultai_a3s8
> quiet | Wait. | kurultai_a3s8
> mercy | Sit with him. | kurultai_a3s8

=== kurultai_a3s8 | Burning the Sheet
They burn it together. It is Choijin’s idea. He sets a corner of the great sheet in the blue fire, and it catches. The red knots curl. The names crisp and blacken. A thin column of smoke climbs into the morning.
All nine chiefs have gathered. They do not know why. They stand round the fire with their arms folded, watching a tablecloth burn.
“What is this?” demands Tsetseg, round her quid.
“A map,” says Hao Lan. Her face is pale and set. She has not been asked to speak. She does it anyway. “Of what you owe each other. I drew it. I am sorry. I thought it would be useful.”
“Was it accurate?” says Jargal.
“Every line.”
“Hm.” He rubs his chin. “I would have liked to see it.”
“Then you should not have owed so many horses,” says Old Boroo, and the whole circle bursts into laughter, and the tension goes out of it like air from a bladder.
Hao Lan looks as if she is about to cry. She does not. She stands there, small and straight in the smoke, and smiles.
> deceit | Stay by her. | kurultai_a3s9
> truth | Applaud. | kurultai_a3s9
> quiet | Watch the sheet. | kurultai_a3s9
> mercy | Hand her a cup. | kurultai_a3s9

=== kurultai_a3s9 | What Hao Lan Learned
“I do not understand them,” she says, that night, to the fire. “I looked at nine people, and I saw nine coins. I laid them out. I never thought they would laugh.”
“They laughed because it was true.”
“Yes.” She hugs her knees. “It is so odd. In the Chancery, if I had shown a Magistrate his debts, he would have had me flogged. Here they thanked me.” She shakes her head. “I think I spent my whole life believing that truth was a weapon.”
“And now?”
“Now I think it is a gift.” She pokes the embers. “It depends on whether you give it away or hold it in your fist.”
You say nothing. The fire pops.
“Do you know,” says Hao Lan, “that the boy asked for his name back?”
“The Tongue?”
“Choijin gave it to him. This morning. He signed it, with both hands.” Her voice wobbles. “It is Erdene. It means jewel. He cried for an hour. The old man held his head.” She wipes her nose. “It was the only vote I really helped.”
> deceit | Smile. | kurultai_close | +kurultai_bargained
> truth | Nod. | kurultai_close | +kurultai_bargained
> quiet | Hold her hand. | kurultai_close | +kurultai_bargained
> mercy | Say it was enough. | kurultai_close | +kurultai_bargained

// ---------------------------------------------------------------- a4: two fires
=== kurultai_a4s1 | The Far Fires
There are two. They burn on the far edge of the Ring, a quarter-mile apart from each other, and a hundred yards outside the circle of the other seven. One is orange. One is green. They do not share a spark. Between them stretches a strip of empty grass, trodden flat, where nobody walks.
“The Weavers and the Smiths,” says Temur, when you ask. He rubs his neck. “Sixty years. They have not eaten together since the year of the dead ewes.”
“What happened?”
“Nobody knows.” He shrugs. “It is a feud. They hate each other. They sit at opposite ends of every Kurultai and vote opposite ways on everything.” He lowers his voice. “Grandmother says it is the whole trouble with the Listeners. We hear everything but each other.”
“Who leads them?”
“The Weavers, Dolgion. A grandmother of seventy-six. The Smiths, Ganbold. A big man.” Temur grimaces. “They are said to be cousins.”
You look at the green fire, and the orange, and the grass between.
> mercy | Walk between. | kurultai_a4s2
> truth | Ask Temur for an introduction. | kurultai_a4s2
> quiet | Watch. | kurultai_a4s2
> inquiry | Ask what the dead ewes were. | kurultai_a4s2

=== kurultai_a4s2 | The Weaver
Dolgion has a face like a walnut and a back like a bow. She sits on a stool at the orange fire with a spindle in her lap, and the wool runs through her fingers in a long grey thread. Behind her stands a great loom, hung with half a finished rug of a hundred colours. She does not look up when you come.
“Sit,” she says. “Do not touch the wool. Do not speak of the Smiths.”
“I have not spoken.”
“You were about to.” She spins. “They have all been about to, for sixty years. Every Kurultai. Every chief. ‘Dolgion, why not speak to Ganbold?’ And I say: I have nothing to say to a man who stole my sister’s husband.”
“Stole?”
“Took him to the forge.” Her thin lip curls. “He was a weaver, a good one. And a smith asked him to hold the tongs for a day. He never came back to the loom.” Her spindle whirls. “She died of it. My sister. Of loneliness.”
You consider this.
“How long ago?”
“Sixty years,” says Dolgion. “It does not get shorter.”
> mercy | Listen. | kurultai_a4s3
> truth | Say you are sorry. | kurultai_a4s3
> quiet | Watch the wool. | kurultai_a4s3
> inquiry | Ask the husband’s name. | kurultai_a4s3

=== kurultai_a4s3 | The Smith
Ganbold is huge, and silent, and stands at his forge in the green firelight with his bare arms crossed over a leather apron. He is eighty-one. His hair is white and his arms are as thick as your waist. A great anvil is set in the grass before him, and on it lies a half-finished horse-bit. He does not strike it. He looks at it.
“I know what you have been told,” he says. His voice is a bass rumble. “She says I stole him.”
“Did you?”
“I asked a man to hold tongs.” He lifts one great hand. “I did not ask him to love the work. I did not ask him to stay.”
“Did he love it?”
“He was the best hand I ever had.” The big face works. “He could feel the heat in the iron. He had an ear. He said it was like weaving, only the thread was fire.” He sets his jaw. “He died at the anvil. Forty years ago. Of a stroke. He was happy.”
“Does Dolgion know?”
“I have never told her.” His eyes are on the bit. “She would not listen.”
> mercy | Ask why not. | kurultai_a4s4
> truth | Say you will. | kurultai_a4s4
> quiet | Look at the anvil. | kurultai_a4s4
> inquiry | Ask about the husband. | kurultai_a4s4

=== kurultai_a4s4 | Two Stories
You walk between them for three days. You carry a stool and a flask of tea. You sit at the orange fire in the morning, and the green in the afternoon, and neither chief says a word to you of the other. They each pour you a cup. They each sit through your silence with an air of long-suffering patience.
On the second day you begin to talk. You tell them nothing. You tell each what the other said, in the other’s own words. You say: he asked a man to hold tongs. You say: she thinks you stole him. You say: he died at the anvil, and was happy. You say: she has been spinning for sixty years, and the rug is not yet finished.
They do not answer. They look at the fire.
On the third day the old woman says, without lifting her eyes from the wool: “Was he really happy?”
“He said it was like weaving,” you say, “only the thread was fire.”
The spindle stops.
> mercy | Wait. | kurultai_a4s5
> truth | Say it again. | kurultai_a4s5
> quiet | Hold still. | kurultai_a4s5
> inquiry | Ask what she remembers. | kurultai_a4s5

=== kurultai_a4s5 | The Husband
“His name was Batu,” says Dolgion. Her thin voice is quite steady. “He had a lazy eye. He hummed when he worked. A tuneless thing. My sister said it was like living with a bee.” She picks up the spindle again. She does not spin. “He used to bring her flowers. Horrible flowers. Wild onion. She put them in a jar.”
“She loved him.”
“She did.” A pause. “I never thought he loved her. I thought he was a man who liked to be liked.”
“And now?”
“Now I am an old woman, and I am told he died happy.” She shuts her eyes. “I wanted him to have died in misery. For sixty years, I wanted him in misery. It was the only thing that made the numbers come out.”
The wool lies in her lap, unspun.
“Do you know,” she says, “what I would give to have known?”
“Tell him.”
“I cannot.”
“Why?”
“Because I was wrong,” says Dolgion. “And I am seventy-six, and it is a long way across that grass.”
> mercy | Offer your arm. | kurultai_a4s6
> truth | Say you will walk her. | kurultai_a4s6
> quiet | Wait. | kurultai_a4s6
> inquiry | Ask if Ganbold is waiting. | kurultai_a4s6

=== kurultai_a4s6 | Across the Grass
It takes a quarter of an hour. She will not be hurried. She takes your arm, a very light one, and she walks slowly, with a stick, across the strip of empty ground. Behind her, a murmur rises. The whole Ring has stopped to watch.
Ganbold has left his forge. He is standing in the middle of the strip, with his great arms hanging. His white head is bowed. He looks like a man who has been punished all his life for a thing he never did, and is about to be punished again.
She stops in front of him. She tilts her head back, to see his face.
“You are too fat,” she says.
He blinks. “I beg your pardon?”
“You were a skinny boy. I remember. You came to my sister’s wedding with your sleeves too short.” She sniffs. “Now look at you.”
“Dolgion.”
“I am not finished.” Her voice shakes. “He hummed. Did he hum, at the anvil?”
“Constantly,” says Ganbold, in a cracked bass. “It drove me out of my mind.”
A sound escapes her. It might be a sob. It might be a laugh.
> mercy | Step back. | kurultai_a4s7
> truth | Watch. | kurultai_a4s7
> quiet | Look away. | kurultai_a4s7
> inquiry | Hold your breath. | kurultai_a4s7

=== kurultai_a4s7 | A Rug
They have a rug. It is the unfinished one, from the loom: half a hundred colours, woven by one hand for sixty years. Dolgion has it brought across. She spreads it on the grass between the two fires, in the strip of trodden earth. It is a great thing, nine feet long, with a border of onion flowers.
“It was meant for her,” she says. “For my sister. It is a wedding rug. I started it the week she died.” She runs her hand along the edge. “I could never finish it. I had no colour for the last row.”
Ganbold looks at the unfinished edge. He crouches, with a creak. He takes a twist of wire from his apron, a thin dull bronze, and holds it to the light. He strikes it with a hammer, once, very gently, and it rings.
“Hum,” he says.
It is a note. A low, plain, tuneless note, the kind a man might hum without noticing. It goes on and on.
Dolgion listens. A slow smile spreads over her walnut face.
“That is Batu,” she says.
> mercy | Smile. | kurultai_a4s8
> truth | Weep. | kurultai_a4s8
> quiet | Watch them. | kurultai_a4s8
> inquiry | Ask how he did it. | kurultai_a4s8

=== kurultai_a4s8 | The Last Row
They finish it together. It takes the smith an afternoon to make the thread: a fine bronze wire, beaten flat as ribbon, in a colour like dull gold. It takes the weaver an hour to weave it in. The two old people kneel, side by side, on either end of the rug, and she works the shuttle and he feeds the wire. They do not speak. They hum.
The whole of the Ring comes to watch. They stand about in the dusk, hundreds deep, in silence. A child on someone’s shoulders whispers to her mother. The fires burn, orange and green, side by side, and the strip between them has become a hearth.
At the last stitch, Dolgion bites the thread. She sits back on her heels. She holds out her hand, palm up, to the smith.
He takes it in both of his.
“There,” she says. “It is finished.” Her voice is wet. “You are still too fat.”
“And you are still insufferable,” says Ganbold, and the whole camp bursts into cheers.
> mercy | Cheer. | kurultai_a4s9
> truth | Applaud. | kurultai_a4s9
> quiet | Smile. | kurultai_a4s9
> inquiry | Look for Tamar. | kurultai_a4s9

=== kurultai_a4s9 | One Fire
The next morning there is a single fire. The Smiths and the Weavers have dragged their tents together. Someone has put a loom beside an anvil. The two chiefs are sitting on a felt between them, eating from a single bowl, in the cold clear light, arguing about sheep.
Tamar’s hand finds your arm. She has come across the grass without a guide, a tiny red-coated figure on a stick, and her blind face shines.
“Sixty years,” she says. “I have sat at this Kurultai eleven times, and every time they voted against each other. Do you know what I told myself? That it was the nature of the Listeners. That a people who hear everything cannot agree.”
“And now?”
“Now I think we are a people who never asked.” She squeezes. “I should have walked across. I was afraid they would say no.”
“Would they?”
“They would have said it the way they said it to you,” says Tamar. “With a cup of tea.”
She laughs, and the sound goes up and up, and the rest of the camp turns round to listen.
> mercy | Laugh with her. | kurultai_close | +kurultai_peace
> truth | Smile. | kurultai_close | +kurultai_peace
> quiet | Help her to her seat. | kurultai_close | +kurultai_peace
> inquiry | Ask what she will say. | kurultai_close | +kurultai_peace

// ---------------------------------------------------------------- hidden: Odgerel speaks
=== kurultai_h1 | A Seat for the Horse-Keepers’ Daughter
You say it at the red fire, in front of Jargal, with the Kurultai listening. You say: the woman who left was not lost. She was held. And she came back.
The vast man goes quite still. His small bright eyes find yours across the flames. “Odgerel,” he says.
“She is here.”
“I know she is here.” His voice is thick. “She has been sitting in the back of the Matriarch’s tent for four days with her hood up. I have walked past her twice. I did not dare say her name.”
At the edge of the firelight, a small hard woman in leather has risen from a stool. She has grey in her black plaits and the same scarred jaw as the man who stands, rigid, at your elbow. She has not been seen at a council in thirty-one years.
“Jargal,” she says. She says it softly. “Brother. I am sorry I was gone so long.”
Ren Qiao makes a noise like a man struck in the stomach.
Jargal drops to one knee in the dust.
> inquiry | Hold still. | kurultai_h2
> truth | Look at Ren. | kurultai_h2
> mercy | Weep. | kurultai_h2
> quiet | Step back. | kurultai_h2

=== kurultai_h2 | Thirty-One Years
It is not a quiet reunion. Jargal is shouting. He is shouting very loudly, in Steppe-tongue, with tears streaming down his big red face. Odgerel is shouting back. They stand a yard apart in the firelight, a bull of a man and a small scarred woman, bellowing at each other like a pair of grandmothers at a fish-stall, while the whole Kurultai watches in rapt silence.
“Thirty-one years!” bellows Jargal.
“I know how long it was!”
“Not a word! Not a line!”
“I could not write!”
“You could have sent a goat!”
“A goat?” shrieks Odgerel. “What would a goat say?”
“It would say you were alive!”
They stop. They stare at each other, panting. And then, with a sound like a collapsing tent, the big man seizes his sister in his arms and lifts her bodily off the ground. She beats his shoulders. She is laughing. She is weeping.
Ren Qiao is standing at your side, white as bone. He has not moved. He has not spoken.
Quietly, he says: “She never told me she had a brother.”
> inquiry | Touch his arm. | kurultai_h3
> truth | Say she wanted to. | kurultai_h3
> mercy | Stay near him. | kurultai_h3
> quiet | Say nothing. | kurultai_h3

=== kurultai_h3 | What Odgerel Said
She asks to speak. It is not allowed; she is no chief. But Jargal rises from his cushion, with his arm round her shoulders, and says in a ringing voice: “She speaks for the red fire. I give her my place.” And nobody objects.
She stands in the centre of the Ring, beside the black stone. She is a small figure in leather, with her hands loose. She does not make a speech. She says, in the plain flat voice of a woman who has given orders to horses:
“I left because I was afraid of what we were. I thought: the Order is a thing for the dead. I thought: it asks too much. I went to the Concord’s side of the river and I raised a son there, in a stable, where nobody would ask him to listen.”
“He listened anyway,” says Odgerel. “He stood on a bridge for fifteen years and turned no one away.” She looks at Ren Qiao. “That is what the Order is for. I am sorry it took me so long to see.”
> inquiry | Bow. | kurultai_close | +kurultai_odgerel
> truth | Look at Ren. | kurultai_close | +kurultai_odgerel
> mercy | Weep. | kurultai_close | +kurultai_odgerel
> quiet | Stand still. | kurultai_close | +kurultai_odgerel

// ---------------------------------------------------------------- close
=== kurultai_close | What Tamar Decided
She decides at noon on the ninth day. The nine fires have burned down to embers. The Ring has gathered, thousands strong, in a vast silent crescent, and Tamar sits at the foot of the black stone, small and red and upright, with her face turned toward the sky.
+[how] kurultai_spoke | You went from fire to fire and told each chief what the others were afraid of.
+[how] kurultai_mustered | You rode the war-game and won a vote and a half with a handed goat.
+[how] kurultai_bargained | You burned a map of debts, and a boy of fourteen got his name.
+[how] kurultai_peace | You walked an old woman across sixty years of empty grass.
+[how] kurultai_odgerel | A sister came home, and a brother knelt in the dust.
“I have heard all of you,” she says. Her voice carries to the farthest tent. “I have heard the stones, and the glass, and the horses. I have heard the bells.” A pause. “They have each said what they fear. I have been trying all week to say what they have in common.”
The wind is dead. Not a blade stirs.
“It is this,” says Tamar. “We are afraid of being heard.”
A sound goes round the Ring, like the intake of nine thousand breaths.
“That is the whole of it. The Hush did not silence us. We let it. We have kept our verbs in the family tent for nineteen years because it was safe.” Her white head lifts. “It is not safe. It has never been safe. We shall say them aloud.”
> truth | Bow. | kurultai_close2 | +b4q_kurultai
> mercy | Hold your breath. | kurultai_close2 | +b4q_kurultai
> quiet | Look at the stone. | kurultai_close2 | +b4q_kurultai
> inquiry | Ask which verb is first. | kurultai_close2 | +b4q_kurultai

=== kurultai_close2 | Nine Verbs Aloud
They say them one by one, in a great murmuring wave. Nine thousand voices, each speaking for itself and none quite together. Carry what is heavy. Mend what is torn. Sing what is struck. Light what is dark. Seal only what asks. Write what is true. Keep what is small. Open what is shut. It sounds like rain on a thousand tents.
You hear the ninth last, in a different voice. It is a thin high whisper from somewhere near your shoulder. It is Sarnai. She has said it with her eyes shut.
“She will ask,” she whispers. “Answer her.”
And then, from the edge of the Ring, so faint you think you have imagined it, a bell begins to ring.
It is a single note, low and brazen. It does not belong to any Listener. It comes from the east, from a long way off, from the fort on the rise. It tolls the Hush.
Nobody flinches. Nine thousand people stand with their faces raised. Narmandakh, at the edge of the crowd, has taken up a hammer.
“Now?” she says.
Tamar smiles.
“Now,” she says.
> truth | Cover your ears. | hub_b4_c | bond:ren+2
> mercy | Hold Odval. | hub_b4_c | bond:ren+2
> quiet | Close your eyes. | hub_b4_c | bond:ren+2
> inquiry | Listen. | hub_b4_c | bond:ren+2

`,
  scenarios: String.raw`
$ SU_KURULTAI_FIRES | trust+3 respect+4 fear+3 | elder | The Elder sits in a circle of nine fires and is asked to say what she is for.
hostile: They asked me what I was for. I said, the Law. They looked at me for a long time. Nobody laughed. It was far worse than laughter.
wary: A chief asked me what I would do if I were told the Law was a mistake. I said I would check the paperwork. He did not understand the joke. I am not sure there was one.
neutral: Nine fires. Nine fears. I have never before sat in a circle in which every person was telling the truth, and every truth pointed a different way. I find it a restful experience, which alarms me.
warm: There is a tent at the edge of the ring where the old women are sewing. I sat with them for an hour and was not asked a single question. It was the best hour I have had since the coast.
devoted: If I am to answer what I am for, I think I should like to say: I am the one who writes the lists. And that a list is a very small thing, and that I mean to make it the right size.
`,
  remarks: String.raw`
% kurultai_tamar_later | since:b4q_kurultai>=4 | ren | The old woman has asked me to come to her tent at dawn. I have never in my life been asked to a tent at dawn. I am afraid it is a trick. I am more afraid it is not.
% kurultai_choijin_later | since:kurultai_a1>=3 | gu | Choijin stopped me on the way to the horses. He signed with his hands, very fast. I understood about a third. I think he said that the stones are not singing, they are crying, and that nobody noticed because the crying is in tune.
`,
}
