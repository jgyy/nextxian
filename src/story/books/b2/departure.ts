import type { Arc } from "../types";

/**
 * Book Two, arc two: the last night on the mountain. A small hub of four farewells (Gu and his mother, Ren Qiao on the
 * bridge, Lin Yuan and Old Lin, the Elder). Each is a run of eight scenes. Two must be walked before the dawn opens.
 * What is carried away from each is read at dawn and by the arcs that follow.
 */
export const departure: Arc = {
  id: "departure",
  name: "The Last Night on the Mountain",
  scenes: String.raw`
=== departure_entry | The Last Night on the Mountain
The sect is a house with its furniture pulled to the walls. Wardens carry crates down to the river steps, the cook has packed rice for forty days, and nobody is quite sure whom to say goodbye to first. The Censors have a lamp lit in the guesthouse. The barge leaves at the turn of the tide.
You have one night. It is not enough for everyone who has a claim on it, and you can feel each of them waiting at the edge of the dark.
> truth | Go down the foothill road to the village, where Gu Hanzhen’s mother is waiting. | hub_departure
> quiet | Go to the Ash Bridge, where Ren Qiao keeps the last watch. | hub_departure
> inquiry | Go to the archive, where Lin Yuan has laid out a cedar box. | hub_departure
> mercy | Go up to the Elder’s window, where a lamp is lit. | hub_departure

=== hub_departure | One Night
The lamps of the Law Hall are going out in order, east wing first. The wind has turned toward the river, and the whole mountain smells of rain that has not yet arrived.
+ dvisit_gu | Gu’s mother has tied a cord on your wrist, and the knot is still warm.
+ dvisit_ren | Ren Qiao’s spare lantern is lit at your hip and will not go out.
+ dvisit_lin | Lin Yuan’s cedar box rides in your pack, and it rattles a little, like fifteen small teeth.
+ dvisit_su | The Elder’s page of the second ledger is folded inside your robe, over your heart.
> truth | Go down to the village, where Gu’s mother is waiting. | gu_s1 |  | !dvisit_gu | You have already been to the village.
> quiet | Go to the Ash Bridge, where Ren Qiao keeps the last watch. | ren_s1 |  | !dvisit_ren | You have already stood the watch with Ren Qiao.
> inquiry | Go to the archive, where Lin Yuan has laid out a cedar box. | lin_s1 |  | !dvisit_lin | You have already been to the archive.
> mercy | Go up to the Elder’s window, where a lamp is lit. | su_s1 |  | !dvisit_su | You have already sat with the Elder.
> quiet | Sleep for what is left of the night, and go down to the river at first light. | departure_dawn |  | count:dvisit_>=2 | Walk at least two of the farewells before you sleep.

// ---------------------------------------------------------------- Gu and his mother
=== gu_s1 | The Foothill Road at Dusk
The foothill road leaves the sect’s steps at the third bend and drops into a valley of rice. In the dusk the terraces are black ribbons and the frogs are loud. At the bottom the village lies with its pine gate open, and the board beside it still says, in a child’s careful hand: Those who go up the mountain come down again.
Gu Hanzhen walks half a pace behind you. He has not said a word since the last stair. He has the stiff look of someone who has rehearsed a speech for his mother and lost it somewhere on the way.
+ visited_village | You have walked this road before, and the rice women who see you lift their heads, and nod, and go on pounding.
> truth | Tell Gu you are glad to be walking him home, even for a night. | gu_s2 | bond:gu+2
> quiet | Walk beside him, a half-pace behind, and let the frogs do the talking. | gu_s2 | bond:gu+1
> mercy | Offer to carry the bag of persimmons he has been hiding under his arm. | gu_s2 | bond:gu+2
> inquiry | Ask what he will tell her about the river. | gu_s2

=== gu_s2 | The Red Lantern
The Gu house stands at the end of a lane of mud walls, under a red lantern faded to the colour of old brick. Its door is carved with a lotus bud, rubbed smooth by years of thumbs. From inside a woman is humming a tune without words.
It is the song of the vault and the roof and the mist. The whole village seems to know it. It is the song you sing to a child who will not sleep.
Gu Yunxia opens the door before he knocks. She is broad and sun-browned, with a grey streak in her hair, and she looks at her son for a long moment, and then at you, and then at him again.
“You are thinner,” she says. “Both of you. Come in. The kettle has been on since noon.”
> truth | Greet her by name, and say that you have brought her son home for the night. | gu_s3 | bond:gu+1
> mercy | Bow to her as to an elder, and say nothing until she has been fed her son. | gu_s3 | bond:gu+2
> quiet | Stand back in the doorway, and let them have the first minute alone. | gu_s3 | bond:gu+1
> deceit | Say that the Law Hall sends its respects, and watch her face. | gu_s3

=== gu_s3 | The Kettle and the Sash
The room is small and clean and smells of smoke and dried persimmon. On the hook by the door hangs a child’s sash of blue cloth, frayed at the ends where a boy once gripped it. Gu’s mother pours three cups without asking and sets the kettle back on its hook with a care that suggests she is not sure her hands are steady.
+ took_gu_letter | The letter your pocket has been carrying since the hidden niche is heavy against your ribs. It was written to her.
+ took_copybook | The old schoolmaster’s copybook is in your pack, with its last line written in a child’s trembling hand.
+ took_pebble | The pebble with the red thread in your sleeve came from her son’s brother’s grave. She will know it by the knot.
“Tell me what he is going to do,” she says to you, and not to him. “He never tells me, and I always find out.”
> truth | Tell her he is going to the Concord’s Assembly as a witness, and is in danger. | gu_s4 | +dep_gu_told_truth
> mercy | Tell her he is going to speak for his brother, in the only room that will listen. | gu_s4 | +dep_gu_told_brother
> deceit | Tell her it is an errand for the Law Hall, quite safe, quite brief. | gu_s4 | +dep_gu_told_lie
> quiet | Look at Gu, and let him say it. | gu_s4 | bond:gu+3

=== gu_s4 | The Letter and the Pebble
She sees what is in your hands before you offer them. She does not take the letter at once. She reads the outside of it, in her son’s careful hand, and her mouth moves very slightly.
“I told the wardens I had burned it,” she says. “They did not believe me. They were right. I put a different paper in the ash.”
The room is very quiet. A moth has gotten in and is circling the lamp. Gu has gone to the doorway and stands with his back to you, his shoulders working.
+ took_gu_letter | Her fingers close on the letter as though it might fly away.
+ took_pebble | She lifts the pebble in her other hand, and her thumb finds the red thread at once.
> truth | Give her the letter, and tell her you carried it only to give it back. | gu_s5 | +dep_gave_letter bond:gu+4 | took_gu_letter | You have no letter to give her.
> mercy | Give her the pebble, and say it was the first thing you carried down from the graves. | gu_s5 | +dep_gave_pebble bond:gu+3 | took_pebble | You did not carry a pebble from the graves.
> inquiry | Ask her what the letter says that she was afraid the wardens would read. | gu_s5
> quiet | Sit by the doorway with Gu until they are ready to speak. | gu_s5

=== gu_s5 | What the Mother Asked
Gu Yunxia reads the letter at the table with a finger beneath each line. She does not weep. She folds it along its old crease and says, as if the thing were a recipe, “He writes that the jade was never whole. I knew it when I was nine years old. Everyone in the valley knows it. We just never thought the mountain would let a boy say so.”
She looks up. Her eyes are very steady.
“I will ask one thing of you. Not for me. For the boy on the step. When the Concord asks you to name a price for the abyss, think of the valley before you answer.”
> truth | Promise her you will think of the valley, and you will not answer without it. | gu_s6 | +dep_promised_valley bond:gu+3
> mercy | Promise to bring Gu home, whatever else you cannot promise. | gu_s6 | +dep_promised_home bond:gu+4
> inquiry | Ask her what the valley wants the Concord to know. | gu_s6
> quiet | Hold her gaze and promise nothing, so that she can trust the silence. | gu_s6

=== gu_s6 | The Brother’s Grave
After the meal Gu takes you up the terrace in the dark to the end of the ridge, where the row of graves runs toward the mountain. A tablet with a crack across it reads Gu Hanming, eldest son. A bowl of rice sits at its foot, and a red thread is tied around a pebble.
“She comes each morning,” says Gu. “I used to think it was for him. Now I think it is so the mountain knows someone is counting.” He kneels. “He was twelve. He wanted to be a gardener.”
You remember a voice in the red mist: the first of the fourteen, a boy who wanted to be a gardener.
> truth | Tell him that you heard Hanming’s name in the mist, and what he wanted to be. | gu_s7 | +dep_told_hanming bond:gu+5
> mercy | Kneel beside him, and say the name aloud once, so that the grave hears it from another mouth. | gu_s7 | bond:gu+4
> quiet | Stand behind him and let the dark do what dark is for. | gu_s7 | bond:gu+2
> inquiry | Ask him whether he thinks his brother is one of the voices. | gu_s7 | bond:gu+1

=== gu_s7 | The Tune in the Dark
On the walk back down the village is asleep. A single child is awake on a doorstep, a girl of ten or eleven, humming the tune with her eyes half shut. She stops when she sees you, and then, with the frankness of children, she starts again, and looks straight at your chest.
“That one,” she says. “You have the song in you. It’s quiet, but it’s there.”
Gu has stopped walking. “She’s the one from the sealing game. She leads the names.”
The girl does not seem to find anything strange in this. She hums, and the black seed under your breastbone hums back.
> truth | Tell the girl you do hear it, and ask who taught her to listen. | gu_s8 | bond:gu+1
> quiet | Hum it back, softly, and let her hear her tune in a stranger’s mouth. | gu_s8 | bond:gu+2
> deceit | Tell her it is just a song, and walk on. | gu_s8
> mercy | Sit down on the step beside her, and ask her to teach you the next line. | gu_s8 | bond:gu+3

=== gu_s8 | The Red Cord
At the gate Gu Yunxia is waiting with a length of red cord in her hand and the stubborn look of a woman who has decided not to cry in front of company. She ties it around your wrist, twice, in the old way, and the knot is warm from her fingers.
“For the road,” she says. “It is only tied to me. Up there they will tie you to things.” She does not look at her son as she says the rest. “You are tied to him now. Do not make me regret it, either of you.”
Behind her the lamp in the red lantern gutters and steadies.
+ took_cord | You already wear her cord on this wrist. She notices, and ties the second to the first, so the two cords make one knot.
> truth | Promise to wear it until the river is crossed and the Assembly is done. | hub_departure | +dvisit_gu +dep_cord bond:gu+3 npc:SU_DEPART_GU
> mercy | Kiss the back of her hand, as a daughter or a son would, and say nothing. | hub_departure | +dvisit_gu +dep_cord bond:gu+4
> quiet | Bow once, deeply, and leave with her son a pace ahead of you. | hub_departure | +dvisit_gu +dep_cord bond:gu+2
> inquiry | Ask her what the knot means in the old way. | hub_departure | +dvisit_gu +dep_cord bond:gu+3

// ---------------------------------------------------------------- Ren Qiao on the bridge
=== ren_s1 | The Ash Bridge at Night
The stone bridge leading to the archive doors is narrow, arched and old, and at night the lantern hanging from its keystone throws a small gold circle on the water below. Ren Qiao is standing at the middle of the span with his back to you, quite still, as men stand who have kept the same watch for fifteen years.
He does not turn. “The wardens who were here before me counted the stones,” he says. “Sixty-one. I counted them, and then I counted them again, and then I began to count what crossed.”
He holds up a hand. In it is a pale knot of red cord. “This is for the river,” he says, “if you will have a warden’s superstition.”
> truth | Tell him you will have it, and ask what the superstition is. | ren_s2 | bond:ren+2
> quiet | Stand beside him at the rail and count the stones with him. | ren_s2 | bond:ren+2
> inquiry | Ask him how many people he has counted crossing since the Sealing. | ren_s2
> mercy | Ask if he has eaten anything since noon. | ren_s2 | bond:ren+2

=== ren_s2 | Counting
“Sixty-one stones,” he says. “Nineteen thousand four hundred and sixteen crossings of the bridge since the Sealing, that I counted myself. Four hundred and ten wardens. Three hundred and one scribes. Thirteen Elders’ messengers.” He touches the rail. “One girl, once, at the end of the first night, going the wrong way.”
The water is black and silver under the lantern. A late moth bumps against the glass.
“I used to think that if I counted enough,” he says, “the number would come out and say what it was for.”
He turns at last. His scar shows pale in the light.
> truth | Tell him numbers rarely say what they are for, and he has counted well anyway. | ren_s3 | bond:ren+3
> mercy | Tell him the girl going the wrong way was the best of the crossings. | ren_s3 | bond:ren+3
> inquiry | Ask who the girl was, and what she was carrying. | ren_s3
> quiet | Say nothing, and let him have the number back. | ren_s3 | bond:ren+2

=== ren_s3 | The Girl Going the Wrong Way
“Mengjiao,” says Ren Qiao. He has not said the name aloud on this bridge before. It comes out of him like a stone through ice. “She came back across after the Elder signed. She was not supposed to. The wardens had orders. I was seventeen, and I was holding a lantern, and I did not stop her.”
He looks at his hands.
“She asked me to look after the lamp. She said it was a good lamp, and a patient one. That was all. And then she went down the path on her own two feet, and the mist took the lantern before she was a hundred steps below it.”
> truth | Tell him you have met her, and that she is alive. | ren_s4 | +dep_told_ren_alive bond:ren+4
> mercy | Tell him he did not fail her, and that the lamp is still lit. | ren_s4 | bond:ren+4
> inquiry | Ask him what she looked like, going. | ren_s4 | bond:ren+2
> quiet | Rest a hand on the rail beside his, not touching. | ren_s4 | bond:ren+3

=== ren_s4 | The Wardens’ Rule
He does not speak for a while. Then he says, in a different voice, the voice of a man reciting a rule he has long since stopped believing, “A warden of the Ash Bridge serves the Elder of the Law Hall, and the Law Hall, and the Law. If any of the three should order him against the others, he shall obey the first.”
He lifts the lantern from its hook on the keystone and weighs it in his hand.
“I have been obeying the first for twelve years,” he says. “I should like to ask whether the first would object if I took the lantern to the river.”
> truth | Tell him the Elder will not object, and you will ask her yourself. | ren_s5 | bond:ren+3
> mercy | Tell him a warden is allowed to walk where the danger is. | ren_s5 | bond:ren+3
> force | Tell him that if he comes, he comes under your command, and no one else’s. | ren_s5 | bond:ren-2
> quiet | Take the lantern from his hand, hold it a moment, and give it back. | ren_s5 | bond:ren+4

=== ren_s5 | The Spare Lantern
He reaches under the bridge’s keystone and brings out a second lantern, small and plain, wrapped in oilcloth. “Archive lamp,” he says. “It burns on a wick that Old Lin makes from the stair-lamp itself. A flame lit from the stair does not go out in the mist. I have had it for ten years. I never found the occasion.”
He holds it out in both hands. It is warm.
“I would be easier in my mind,” he says, “if you carried it, and I carried the other, and we each knew where the other’s light was.”
> truth | Take it, and promise to light it if you are ever in the dark and he is not. | ren_s6 | +dep_lantern bond:ren+4
> mercy | Take it, and give him something of yours in return. | ren_s6 | +dep_lantern bond:ren+4
> inquiry | Ask why a warden keeps a lamp that never finds an occasion. | ren_s6 | +dep_lantern
> quiet | Take it without a word, and hang it from your belt. | ren_s6 | +dep_lantern bond:ren+3

=== ren_s6 | The Fourteen Stones
Along the base of the bridge, below the lantern, fourteen small stones are set into the mortar in a row. They are river pebbles, grey and white, each one no bigger than an egg. Each has a thumbprint of ash on it.
“One for each,” says Ren Qiao. “I put one in on the anniversary, every year, from the first year I was a warden. I thought I was counting. I think now that I was keeping a place.”
There is a fifteenth gap at the end of the row, unfilled. It has been left clean.
“I never knew whose it should be,” he says. “I think it is hers.”
> truth | Offer to set a stone there tonight, together, in her name. | ren_s7 | +dep_set_stone bond:ren+5
> mercy | Say she would have laughed at being given a stone, and given a lamp instead. | ren_s7 | bond:ren+4
> quiet | Stand with him in front of the gap, in silence, for the length of a long breath. | ren_s7 | bond:ren+4
> inquiry | Ask whether there should be a sixteenth gap, in case. | ren_s7

=== ren_s7 | Walk Out With Me
At the end of the watch the bell on the Law Hall sounds the hour of the pig, and the wardens begin to come off the bridge in twos. Ren Qiao does not go with them. He hangs the lantern back on its hook, lifts his cloak, and looks at you for a moment as he would at a stretch of rope.
“A man can be loyal to a person, or to an office, or to a stone,” he says. “I have been loyal to a stone for fifteen years. It was a good stone. It never once asked me a question.”
He puts out a hand.
“I will walk the river with you, if you will have a warden. I will stand where the danger is, and I will tell you when I think you are wrong.”
> truth | Take his hand, and say that is all you will ever ask of him. | ren_s8 | bond:ren+5
> mercy | Say that you would be proud to have him, and that the river is lucky. | ren_s8 | bond:ren+4
> quiet | Take his hand and grip it once, hard. | ren_s8 | bond:ren+4
> deceit | Say you will need a warden who knows how to look away, when it counts. | ren_s8 | bond:ren-2

=== ren_s8 | What a Warden Leaves
He asks one last favour, and it is a small one. He wants a witness while he writes his leave. In the guardhouse he takes down a single sheet and writes, in his plain hand, the rank, the name, the post, and the date, and under it, in a smaller hand: Gone to hold the lantern where it is needed.
He sets his seal on it and blows on the ink.
“There,” he says. “If the Law Hall wants to strike a warden’s name from the register, it can find the page.”
Outside, the lantern on the keystone burns on without him, patient as a stone.
> truth | Say that the page will be read, and that you will see to it. | hub_departure | +dvisit_ren bond:ren+3 ally:REN_LEAVE
> mercy | Thank him for the sixty-one stones, and the one he left clean. | hub_departure | +dvisit_ren bond:ren+4 ally:REN_LEAVE
> quiet | Help him put out the guardhouse lamp, one wick at a time. | hub_departure | +dvisit_ren bond:ren+3
> inquiry | Ask him which of the wardens might take the bridge, and whether you may speak for them. | hub_departure | +dvisit_ren bond:ren+3

// ---------------------------------------------------------------- Lin Yuan and Old Lin
=== lin_s1 | A Cedar Box
In the archive the lamps are low and the drawers are quiet. Lin Yuan has laid out a cedar box on the reading table, about the size of a loaf of bread, with a lid that does not quite sit. Inside, in rows, are fifteen cards of thin white paper, each ruled in his careful hand.
“A portable index,” he says. His voice has the thin brightness of someone who has been up all night being efficient. “The fifteen. The fourteen and Mengjiao. If the Concord keeps the Law Hall’s records, I should like the names to be somewhere they cannot confiscate.”
His hand is trembling on the lid.
> truth | Tell him it is the bravest piece of work you have seen the Law Hall do. | lin_s2 | bond:lin+3
> inquiry | Ask how he chose what to put on each card. | lin_s2 | bond:lin+2
> mercy | Tell him to sit down, and put the kettle on. | lin_s2 | bond:lin+3
> quiet | Pick up one card, read it, and put it back exactly where it was. | lin_s2 | bond:lin+2

=== lin_s2 | Fifteen Cards
Each card carries a name, a line of years, and a single detail the ledger never recorded. A favourite brush. A dislike of cold rice. A song their mother used to sing at the gate. Lin Yuan has found them the way he finds everything, by reading the margins of other people’s sentences.
The first card reads: a boy of twelve who wanted to be a gardener. The fifteenth is written in a different ink, as if he had waited until the end to decide.
“I did not know what to put,” he says. “For Mengjiao. The Law has so little on her, and the village has so much. I wrote that she bought lamp oil for stars. Is that right?”
> truth | Tell him it is exactly right, and give him the one other thing you know about her. | lin_s3 | bond:lin+4
> mercy | Tell him it is a kindness, and that the Elder will want a copy. | lin_s3 | bond:lin+3
> inquiry | Ask to read the card for the fourteenth, the girl of fifteen who said she was only listening. | lin_s3 | bond:lin+2
> quiet | Nod, and say nothing, because your throat will not let you say more. | lin_s3 | bond:lin+3

=== lin_s3 | A Sixteenth Card
There is a sixteenth card in the box. It lies face down at the back, apart from the others, and it is blank on one side. On the other, in a hand that is Lin Yuan’s but not as steady, one line has been written and half scratched out.
“I found a drawer today,” he says, not looking at it. “Painted over, on the wall. I did not tell the Censors. I did not tell the Elder. I wrote a card and then I did not know what to do with it.”
He is waiting for you to turn it over.
+ censors_foresaw_reserve | You have seen that wall. You know the tag, and the number, and what it said.
> truth | Turn it over and read it. | lin_s4 | +dep_read_sixteenth bond:lin+3
> quiet | Leave it face down, and put your hand over his. | lin_s4 | +dep_left_sixteenth bond:lin+4
> inquiry | Ask him which drawer it was, and who signed the tag. | lin_s4 | bond:lin+2
> mercy | Tell him that whatever it says, it is his to keep, and not the Law Hall’s. | lin_s4 | bond:lin+4

=== lin_s4 | The Lamp Keeper’s Visit
There is a knock at the archive’s side door, three slow raps and a pause. Lin Yuan goes white. “That is not one of the wardens,” he says. “Wardens do not knock like that.”
It is Old Lin. She has come all the way up from the stair beneath the sutra door on her own two feet, with a basket of wicks on one arm and a stool under the other, and she is out of breath, and she is furious about it.
“Fifteen years I have kept that stair,” she says to no one. “I have not walked up it once. Where is the boy who is taking the Law Hall’s names to sea?”
> truth | Introduce yourself, and the cedar box. | lin_s5 | bond:lin+1
> mercy | Fetch her a chair before she falls over. | lin_s5 | bond:lin+2
> inquiry | Ask how she heard, and who told her. | lin_s5
> deceit | Tell her there is no boy, and no names, and no sea. | lin_s5

=== lin_s5 | What Old Lin Brought
She opens the basket on the reading table, and the wicks lie in it like pale snakes in grass. “These are from the stair lamp,” she says. “The first lamp. The one Mengjiao lit. They burn without smoke, and they do not go out in the mist, and they do not like to be carried by liars.”
She looks at you with an eye that has outlasted three Elders.
“I will give you what you ask,” she says. “I will give you a fixed number, and the number is nine. Nine wicks, for nine nights of the river, and a rule for each. You may break the rules. The wicks will remember.”
> truth | Ask for the nine rules, and promise to keep as many as you can. | lin_s6 | +dep_wicks bond:lin+1
> inquiry | Ask what happens to a wick that remembers a broken rule. | lin_s6 | +dep_wicks
> mercy | Accept the wicks, and ask whether she would like to come. | lin_s6 | +dep_wicks
> quiet | Take the basket, and bow, and leave the rules for the road. | lin_s6 | +dep_wicks

=== lin_s6 | Nine Rules
Old Lin gives the rules in the order of a counting rhyme. One: never light a wick for a name you will not say. Two: never light a wick in a house that has lost its roof. Three: let the flame go out of its own accord. Four: never speak over a lit wick. Five: share the light with anyone who asks. Six: never carry a wick toward the sun.
“Seven, eight and nine,” she says, and stops. “You will have to find those yourself. I only know three of the nine. Mengjiao knew them all.”
Lin Yuan has taken down every word in his small neat hand. His pen is shaking.
“It occurs to me,” he says, to no one, “that I am the keeper of an archive and she is the keeper of a stair, and between us we remember about half of what happened.”
> truth | Tell them both that remembering half is more than the Law Hall managed. | lin_s7 | bond:lin+3
> mercy | Ask Old Lin to sit, and Lin Yuan to put down the pen, and let the two of them have a cup of tea. | lin_s7 | bond:lin+4
> inquiry | Ask which three rules she knows best, and why. | lin_s7 | bond:lin+1
> quiet | Leave them to it, and take the lamp, and stand in the doorway. | lin_s7 | bond:lin+2

=== lin_s7 | The Keys
When the tea is cold Lin Yuan does the last thing. He unclips the iron ring from his belt, the ring with all the keys, largest first, and holds it out. He cannot take them with him; the archive needs a keeper; he is the keeper. He holds the ring out anyway.
“The black iron one,” he says. “It opens the Index drawers on the lower shelves. The bronze one opens the lotus gate. The little one opens nothing I have ever found.”
He lays it in your palm and closes your fingers.
“If I am not here,” he says, “and someone comes for the Law Hall’s memory, you will know which doors are mine.”
> truth | Tell him you will not use them for anything you could not explain to him. | lin_s8 | +dep_keys bond:lin+4
> mercy | Give them back, and tell him a keeper keeps his own keys. | lin_s8 | +dep_returned_keys bond:lin+4
> quiet | Take the ring, weigh it, and hang it on your belt without a word. | lin_s8 | +dep_keys bond:lin+3
> inquiry | Ask what the small key opens, and whether he has really never found out. | lin_s8 | +dep_keys bond:lin+2

=== lin_s8 | Leaving a Keeper
In the end he walks you to the archive door and stands under the bronze lintel with his hands behind his back. Old Lin has fallen asleep on the reading stool with her head on her arm, and the lamp is guttering.
“I am not coming,” he says. “I wanted to say it before you asked. I am the one who stays. Somebody has to be here, to open the drawer when you come back.”
He smiles, and it is the first completely unafraid thing you have seen on his face.
“Bring me something for the sixteenth card,” he says. “Anything. A name, a place, a day. I have kept the space.”
> truth | Promise to bring him the sixteenth card’s name, whatever it turns out to be. | hub_departure | +dvisit_lin bond:lin+4 ally:LIN_STAY
> mercy | Tell him the sixteenth card is already half written, in the way he waits for it. | hub_departure | +dvisit_lin bond:lin+4 ally:LIN_STAY
> quiet | Bow to him, once, as to a master of the archive. | hub_departure | +dvisit_lin bond:lin+3
> inquiry | Ask him to guard one more thing for you, a thing you have not yet decided to give. | hub_departure | +dvisit_lin bond:lin+3

// ---------------------------------------------------------------- the Elder
=== su_s1 | The Window at Night
The courtyard is cold, the flagstones wet with the last of the rain. The Elder’s window is open a crack, and the lamp inside lays a long yellow bar across the stones. Behind the paper screen her shadow moves: sitting, standing, sitting again.
You knock on the shutter. The shadow stops. The screen slides back, and Elder Su Wanru looks out with her hair loose and a brush in her hand.
“You came,” she says. “I had begun to think you would spend the night saying goodbye to people who deserve it more.”
She does not invite you in. She leans her forearms on the sill and looks at you as at a page she has been trying to read in poor light.
> truth | Tell her you came because there is more to say than you know how to say. | su_s2
> mercy | Ask if she has slept at all, and whether she means to. | su_s2
> inquiry | Ask what she is writing at this hour. | su_s2
> quiet | Wait under the window, and let her go first. | su_s2

=== su_s2 | The River
“I cannot swim,” she says. It comes out as bluntly as a confession. “I have lived thirty-nine years in sight of a river and I never learned. When I was nine my sister pushed me into the shallows to teach me. I screamed so loudly the wardens came. She was beaten for it. She never did it again.”
She looks down at her hands.
“And now I am to be taken down thirty-six days of river by a barge with a Censor’s eye on it. I am Elder of the Law Hall, and I am afraid of the water, and of heights, and of a great many other things, and I want you to know it before we go.”
> truth | Tell her you will be on the barge, and will not let her fall. | su_s3
> mercy | Tell her fear of water is nothing to be ashamed of, and neither is any other fear. | su_s3
> inquiry | Ask what her sister said to calm her, that first time in the shallows. | su_s3
> quiet | Say nothing, and hold the sill beside her hands. | su_s3

=== su_s3 | What Mengjiao Said
“She said, ‘The water is only a long sentence,’” says Wanru. “‘You do not have to read it all at once. You only have to read one word at a time, and not fall off the word.’ I did not understand. I understood the next day.”
She laughs, a small ragged sound. “I have been reading the river that way for thirty years. One word at a time. It works for rivers. It does not work for Councils.”
Behind her, on the desk, her second ledger lies open under the lamp, the small one, in her private hand. You can see the shape of the last entry from where you stand.
> truth | Ask whether you may read the page, and mean the question. | su_s4
> inquiry | Ask what she wrote tonight. | su_s4
> mercy | Tell her she doesn’t have to show anyone anything tonight. | su_s4
> quiet | Look away from the desk, deliberately, and keep your eyes on her face. | su_s4

=== su_s4 | The Second Ledger
She gives you the page. She does not say why; she tears it from the book along its stitching, quickly, as one pulls a splinter. It is a single sheet, in ink that has been written and rubbed and written again.
It is dated tonight. It says, in the small hand: I have asked a stranger to carry my sister’s name down the river, and my own. I have not told her what I did on the Sealing Night with the sixteenth line. I do not yet know how. I will try on the river. If I do not, let this page speak for me.
You read it twice. The lamp is very steady.
> truth | Tell her you do not need her to speak until she is ready. | su_s5 | +dep_su_page
> mercy | Tell her the page is already speaking, and you have heard it. | su_s5 | +dep_su_page
> inquiry | Ask what the sixteenth line is. | su_s5 | +dep_su_page
> force | Tell her you want the whole story now, tonight, before the river. | su_s5 | +dep_su_page

=== su_s5 | Not Tonight
“Not tonight,” she says. It is not a refusal; she says it the way one says a sentence one is afraid to hear completed. “I want to say it to your face, and I do not yet know what your face will be. You have been the Law Hall’s best witness for six weeks. I cannot also be your Elder when I say it.”
She takes the brush from the stand and sets it down again.
“Will you do me one favour? When the Concord asks me a question I cannot answer, I would like you to stand where I can see you, and not say anything. Not because I need your protection. Because I need to remember what I am doing it for.”
> truth | Promise to stand where she can see you, whatever the question. | su_s6 | +dep_promised_stand npc:SU_DEPART_NIGHT
> mercy | Promise, and tell her she can say anything at all and you will not look away. | su_s6 | +dep_promised_stand npc:SU_DEPART_NIGHT
> inquiry | Ask what question she most fears. | su_s6 | npc:SU_DEPART_NIGHT
> quiet | Nod, and let the promise be made without words. | su_s6 | +dep_promised_stand npc:SU_DEPART_NIGHT

=== su_s6 | A Comb and a Cord
She takes the silver comb out of her hair. It has been in the same place on the same night every night for fifteen years, and without it her hair falls over one shoulder, grey and fine, and she looks, for the length of a breath, like the girl she was before anyone told her what she would sign.
She turns it over in her fingers. It has a lotus engraved on the back, worn almost smooth.
“Mengjiao gave it to me the morning of the Sealing,” she says. “I did not tell anyone. She said it was a good luck piece for a woman who had to sign things. I have been very careful not to look at it.”
> truth | Tell her she should wear it down the river, where she cannot not see it. | su_s7
> mercy | Ask whether she would like to give it to someone she trusts to keep. | su_s7
> inquiry | Ask what the lotus on the back is for. | su_s7
> quiet | Hold out your palm, and let her decide. | su_s7

=== su_s7 | What She Gave
She presses the comb into your palm. Her fingers are cold. “Not to keep,” she says quickly. “To carry. If I forget, on the barge, whose name I am here for, you are to put it into my hand. If I do not forget, you will give it back at Qinglian.”
It is a very small thing. It has a very small weight. It is the heaviest object you have ever been given.
She nods once, as if a ledger has been closed, and takes up the brush again.
“Go and sleep,” she says, and the old dryness is back in her voice like a hand returning to a hilt. “You will want your wits for Duan Wuyi’s barge. He plays chess for the soul.”
> truth | Close your hand around the comb, and say that you will not let her forget. | su_s8 | +dep_comb
> mercy | Close your hand around the comb, and tell her it was a kindness to ask. | su_s8 | +dep_comb
> quiet | Bow, and take the comb without a word. | su_s8 | +dep_comb
> inquiry | Ask which of her many fears the comb is meant to help with. | su_s8 | +dep_comb

=== su_s8 | A Window Closed
The screen slides shut. Her shadow moves behind it for a while, then still. A moment later the lamp is turned low, and then out, and the long yellow bar across the stones goes dark, and for the first time in your memory the window of the Elder of the Law Hall is a plain black square against the mountain.
Somewhere above you a bell strikes once. The mist has begun to rise behind the sutra gate.
+ dep_comb | The silver comb is warm in your closed hand.
> truth | Stand in the dark a moment longer, and promise the window you will bring her back. | hub_departure | +dvisit_su
> quiet | Walk slowly back across the courtyard, without looking back. | hub_departure | +dvisit_su
> mercy | Leave a bowl of rice on her sill, because someone should. | hub_departure | +dvisit_su
> inquiry | Climb to the roof, where she used to be afraid to go, and look at the stars. | hub_departure | +dvisit_su

// ---------------------------------------------------------------- dawn
=== departure_dawn | The River Steps
Dawn comes up grey on the river steps, and the barge is already warm at the oars. Duan Wuyi stands at the rail with his staff, as upright as if he had slept standing. Hao Lan waves, shyly. The Elder arrives last, in a plain travelling cloak, with her hair pinned up under a cloth.
+[who] count:dvisit_>=4 | You have said goodbye to everyone who had a claim on the night, and the mountain has let you go without a single unspoken word.
+[who] count:dvisit_>=3 | You have said goodbye to most of those who had a claim, and you carry the quiet of the one you missed.
+[gu] dvisit_gu | Gu Hanzhen is wearing his mother’s red cord, and so are you.
+[ren] dvisit_ren | Ren Qiao is at the foot of the gangway, his cloak folded over his arm, and his lantern is lit in broad daylight.
+[lin] dvisit_lin | Lin Yuan stands high on the mountain steps with a white cloth in his hand, a small bright patch against the grey.
+[su] dvisit_su | The Elder does not look at you, but her hand is closed at her side, empty, exactly as it would be if it were holding a comb.
> truth | Step aboard with your head up, and take your place at the Elder’s side. | departure_dawn2
> quiet | Step aboard last, and look at the mountain until it is behind the first bend. | departure_dawn2
> mercy | Hand the Elder up the gangway, because the water is wet and the planks are narrow. | departure_dawn2
> inquiry | Ask Duan Wuyi what the barge has been named, and why. | departure_dawn2

=== departure_dawn2 | What You Carry
The barge slides out. On the deck, among the coils of rope and the Censors’ chests, you take stock of what the night put into your hands.
+[a] dep_gave_letter | A letter, given back to the woman it was written to. Your pocket is lighter than it has been in weeks.
+[a] dep_gave_pebble | A pebble with a red thread, left at its mother’s hearth. You carry its absence like a stone in a boot.
+[b] dep_told_ren_alive | Ren Qiao knows Mengjiao is alive. He has not said so. He tends the lantern more carefully.
+[b] dep_set_stone | A fifteenth stone is set into the mortar of the Ash Bridge in her name. Ren checks that he can still see it from the water.
+[c] dep_read_sixteenth | You read the sixteenth card. Lin Yuan watched your face as you read, and has not asked since.
+[c] dep_left_sixteenth | You left the sixteenth card face down, and Lin Yuan will not turn it over until you return.
+[g1] dep_lantern | A lantern lit from the stair-lamp swings at your hip, and it does not flicker in the river wind.
+[g1] dep_wicks | Nine wicks in a basket, nine nights of rules. Old Lin knew three of the nine.
+[g2] dep_returned_keys | Lin Yuan took his keys back and hung them on his belt without a word. You feel their absence in your hip, a small cold gap.
+[g2] dep_comb | The Elder’s silver comb is warm in your closed hand.
+[g2] dep_keys | The archive’s iron ring hangs at your belt, largest key first.
> truth | Go forward to the bow, and watch the river open. | departure_dawn3
> quiet | Sit among the ropes with your back to the mast, and let the first hour pass. | departure_dawn3
> mercy | Fetch tea for the Elder, who has gone grey at the rail. | departure_dawn3
> inquiry | Find the barge pilot and ask how many days it is to the first ferry. | departure_dawn3

=== departure_dawn3 | What You Promised
By the second bend the mountain is a grey tooth in the haze, and then it is gone. The river takes up the barge as if it had been waiting.
+[v] dep_promised_valley | You promised Gu’s mother you would think of the valley before you answered the Concord. You mean to.
+[v] dep_promised_home | You promised to bring Gu home. You have never made a promise you could so little guarantee.
+[s] dep_promised_stand | You promised the Elder you would stand where she could see you. She has already looked for you twice.
+[s] dep_su_page | A page of the second ledger is folded over your heart. It says there is a line she has not yet told you.
+[t] dep_gu_told_truth | Gu’s mother knows the danger her son is in. She did not weep. She gave him two pairs of socks.
+[t] dep_gu_told_brother | Gu’s mother knows her son goes to speak for his brother. She stood in the doorway until the road bent.
+[t] dep_gu_told_lie | Gu’s mother was told it was a safe errand for the Law Hall. She smiled at the lie, and it did not reach her eyes.
+[t] dep_told_hanming | Gu knows you heard his brother’s name in the mist. He has not mentioned it, and has walked a little closer to you ever since.
> truth | Go and sit with Gu at the stern, and let him say whatever he needs to. | hub_b2_road | +departed
> quiet | Stay at the rail beside the Elder, and watch the banks unroll. | hub_b2_road | +departed
> mercy | Share the first meal of the voyage with Ren Qiao and the barge crew. | hub_b2_road | +departed
> inquiry | Find Duan Wuyi at his chess board and ask him to teach you a game. | hub_b2_road | +departed
`,
  scenarios: String.raw`
$ SU_DEPART_GU | trust+2 respect+1 | elder | The player promises Gu’s mother to wear her red cord to the river and beyond.
hostile: You went to a village of the levy to be tied to one of its children. I do not yet know whether that is loyalty or a debt you intend to collect. I shall watch the knot.
wary: A red cord. Your sleeve has a mother’s knot on it. I will not tell you what to do about the families of the sect. I will tell you that the Law Hall has been feeding on them for fifteen years.
neutral: A cord from the valley. Good. It is time a Wanderer of the Law Hall had something tied to something that was not the Law. I shall pretend not to have seen it, in front of Duan Wuyi.
warm: You were tied to the valley tonight, and I am glad. I have kept the valley at the edge of my ledger for fifteen years. It is a relief to see it carried by someone who will not file it.
devoted: You went down the road I never could. You came back with a cord. If the river takes me, wear it for me. If it takes you, I shall ask the Concord to knot my hair with the same twist.

$ SU_DEPART_NIGHT | trust+4 respect+2 fear+4 | elder | The player promises to stand where the Elder can see them whatever the Concord asks.
hostile: You promise to stand where I can see you, and I note that it is the only place a thing is safe from my back. Do not mistake the promise for a mercy.
wary: A promise is a cheap thing in this hall. I have taken several and kept few. Keep this one, and I shall begin to believe in the others.
neutral: Stand where I can see you. It is a small request, and I find I have never made it of anyone. I am surprised to discover that I want it kept.
warm: When the Concord asks the question I cannot answer, I will look up and find you. I did not know until tonight that I wanted a face in the room. Thank you for being the face.
devoted: Wanderer. I am more frightened than I have ever been, and I am less alone than I have been in fifteen years. Whatever the Concord asks, I will look for you, and you will be there.
? tone:truth>=3/5 | You have answered every question tonight plainly, and now you promise me something plain. I am not accustomed to being given the thing I ask for.

$ REN_LEAVE | trust+4 | ren | Ren Qiao writes his leave and walks out of the Law Hall’s service to travel with the player.
hostile: I have written my leave. I have put my seal on it. I do not trust you, but I trust the lantern, and the lantern has chosen to go. I shall go with it. Do not give me cause to regret the choice.
wary: I wrote a warden’s leave tonight. I have not done it before. I do not think you are what the sect fears. I do not think you are what you fear, either. I shall find out on the river.
neutral: The page is written. The post is vacant. A warden has gone to hold the lantern where it is needed. It is a strange thing to feel light.
warm: I have kept a bridge for fifteen years and I wrote my leave in four lines. It is an odd thing, to be so easily undone. Thank you for being the door.
devoted: I do not know what I am if I am not a warden. I do not mind. Walk, and I will walk, and between us we will be a bridge for whoever needs one.

$ LIN_STAY | trust+3 | lin | Lin Yuan promises to keep the archive for the player’s return.
hostile: I have kept the Law Hall’s drawers, and the Law Hall has kept me. I stay, I think, because I do not know how to leave. Do not come back unless you mean to tell me something true.
wary: I will be here. I will write nothing of you in the Law Hall’s ledgers, and nothing of the Law Hall in yours. I shall wait for the day we can speak without keys.
neutral: A name, a place, a day. I have the space, the ink and the patience. Bring me whatever you can. I shall file it where no one else will find it.
warm: I have never had a reason to want someone to come back. I find I have found it. Bring me the sixteenth card, and bring yourself with it, and I will keep the lamp lit.
devoted: There was a drawer in the wall behind my desk for sixteen years and I never knew. Now there is a card in my hand and a name that is not written. I will wait as long as the ink holds. Come home.
`,
  remarks: String.raw`
% dep_ren_bridge | since:dvisit_ren>=14 & bond:ren>=10 | ren | I counted the stones on a bridge for fifteen years. On the river I count oars. It is a different number, and a better one.
% dep_lin_wicks | since:dep_wicks>=10 | elder | Old Lin sends a wick down the river with every messenger, and each one burns out before it reaches me. She is telling me something. I am too tired to read it.
% dep_gu_cord | since:dep_cord>=12 & bond:gu>=10 | gu | My mother says a knot is only a promise that has learned to hold still. I have been holding still for nineteen years. Let me move a little, will you?
% dep_comb_remark | since:dep_comb>=16 | elder | You still have my comb. I know, because the barge pilot told me you were seen weighing it in your palm. Do not drop it. It is smaller than it looks.
`,
};
