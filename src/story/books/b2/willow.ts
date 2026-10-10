import type { Arc } from "../types";

/**
 * Book Two, arc three: the Willow Ferry. A river that takes a name as the toll has taken a ferryman's daughter's name from
 * him. Four approaches: speak to the river (a1, truth), break the toll-stone (a2, force), pay with a false name (a3, deceit),
 * work beside the child until her father hears the old tune (a4, mercy). A hidden route writes the name into a Censor's
 * register, where a river cannot take it (needs a Censor friend from the audit).
 * Cast: Bai Dao, Xiao Ye, Madam Sui, the Counting Woman.
 */
export const willow: Arc = {
  id: "willow",
  name: "The Willow Ferry",
  scenes: String.raw`
=== willow_entry | The Child Who Takes the Fares
On the third day the river narrows between two walls of willow, and the barge puts in at Willow Reach to take on water. The landing is a plank jetty, a toll-hut with a grey flag, and a stone as tall as a man standing in the shallows, its face rubbed smooth by a century of palms.
A girl of eight or nine is taking fares at the foot of the jetty. She has a cloth satchel across her chest and a voice that is far too old, and she says the same words to every traveller: “One crossing, one name.” They give her coins, they give her smiles, and not one of them looks at her.
At the rope of the ferry stands a broad man with a boatman’s hands, and when the girl brings him his bowl of rice he thanks her the way you thank a stranger.
> truth | Walk down to the stone and ask the keeper of the toll what it takes, and why. | willow_a1s1 | +willow_a1
> force | Step onto the jetty and ask the ferryman, loudly, what he has done with his own child. | willow_a2s1 | +willow_a2
> deceit | Buy a crossing, and offer a name that is not yours, to see what the stone does with it. | willow_a3s1 | +willow_a3
> mercy | Sit down on the jetty beside the girl, and ask if she would like help with the satchel. | willow_a4s1 | +willow_a4
> inquiry | Remember Hao Lan’s sketch, and ask her whether a Censor’s register can hold a name a river cannot take. | willow_h1 |  | censors_hao_friend | You do not know any Censor well enough to ask.
> inquiry | Find Hao Lan, who said she told Duan nothing, and ask what a Censor’s brush is for. | willow_h1 |  | censors_hao_told | You do not know any Censor well enough to ask.

// ---------------------------------------------------------------- a1: speak to the river
=== willow_a1s1 | The Toll-Keeper
The toll-hut smells of wet rope and sandalwood. Inside, an old woman in a river-green shawl sits cross-legged in front of a low desk, and on the desk is a book bound in fish-skin, open to a page that is mostly blank. She looks up without surprise.
“Madam Sui,” she says. “I keep the stone. You are the Wanderer from the Azure Cloud, and you have a seed in your chest the stone has been trying to talk to since you stepped off the barge.” She smiles with no friendliness at all. “It is a very talkative stone.”
Outside, a fare is paid. The girl’s voice says, one crossing, one name.
> truth | Ask her what the stone takes, and what it gives for it. | willow_a1s2
> inquiry | Ask who keeps the book, and whether the names in it can be read. | willow_a1s2
> mercy | Ask about the girl at the foot of the jetty, and why no one looks at her. | willow_a1s2
> quiet | Sit down on the other cushion and say nothing until she does. | willow_a1s2

=== willow_a1s2 | One Name per Crossing
“The river is a counting woman,” says Madam Sui. “She is older than the Concord and a good deal fairer. She takes one name for each crossing, and she gives safe passage and a following current. It is a fair price. Most of the names are small: a name you do not use, a name you have grown out of, a rival’s, a dead man’s.”
Her finger moves down the blank page.
“Fifty years ago a ferryman paid his mother’s name and the river took it with the rest, and he cooked her supper for a month without knowing whom he was cooking for. She forgave him. That is the village’s great story. We tell it to children to teach them what a bargain is.”
> truth | Ask what happens if a man has no name to spare. | willow_a1s3
> inquiry | Ask how the river chooses, if the ferryman does not. | willow_a1s3
> mercy | Ask what the girl’s name was, before it was taken. | willow_a1s3
> force | Tell her a toll that takes a father’s memory of his child is a theft. | willow_a1s3

=== willow_a1s3 | Xiao Ye
“Xiao Ye,” says Madam Sui. The name tastes of small leaves. “Little Leaf. She was named for the willow she was born under. Bai Dao paid it at the spring flood, when the river asked for the one thing he would miss most, as the river sometimes does when it has been generous. He thought it would be his own. He was told, afterward, that it was his daughter’s.”
Her voice is very level.
“She still takes the fares. She sleeps in the hut beside mine. He cannot see her. He thanks her for the rice and does not know why she weeps.”
Gu Hanzhen has come up beside you at the door, white-faced.
> truth | Tell Madam Sui you will speak to the river. | willow_a1s4
> mercy | Tell her you will take the child's name on yourself, if the river will hear it. | willow_a1s4
> inquiry | Ask whether a name that has been taken can be bought back, and with what. | willow_a1s4
> deceit | Ask whether a river can be lied to, and what happens to those who try. | willow_a1s4

=== willow_a1s4 | The Stone in the Shallows
The stone stands in two feet of brown water, slick and cold, with one shallow dip at the height of a palm. Fifty years of ferrymen have laid their hands in that dip and spoken a name, and the stone has taken each one in. Where your hand touches it you feel it hum: not a hum of stone, a hum of someone listening very carefully.
Behind you the Elder has come down the jetty, step by careful step. She stops at the water’s edge, her face white, and does not set a foot on the wet planks.
“I am here,” she says, like a person reporting for duty. “Do what you came to do. I shall stand here and not look at the water.”
> truth | Lay your palm in the dip and say, plainly, that you want to speak to the river. | willow_a1s5
> mercy | Go back to Wanru and take her arm, before you do anything else. | willow_a1s5 | bond:ren+1 npc:SU_WILLOW_PLANK
> quiet | Wait in the water until the stone has said what it wants to say first. | willow_a1s5
> inquiry | Ask Madam Sui what the river answered the last time someone spoke to it plainly. | willow_a1s5

=== willow_a1s5 | The Counting Woman
The river answers in the manner of a very large animal turning over in sleep. The current slows. The willow trees lean in. From the water, or from the stone, or from the inside of your own breastbone, a voice says, with a note of tired amusement, “A seed. How long since I have heard from one of you.”
It is not a woman’s voice, quite, nor a girl’s. It is the voice of the river counting, and what it counts is names.
“You wish to bargain,” it says. “You are the first in a generation who has asked rather than paid. Tell me why I should give back a name I have taken in lawful toll.”
> truth | Say that the toll took something the ferryman never agreed to give. | willow_a1s6
> mercy | Say that a child has been made nobody, and ask whether the river wants that. | willow_a1s6
> inquiry | Ask what the river wants, if not another name. | willow_a1s6
> force | Say that you can make her give it, if you have to. | willow_a1s6

=== willow_a1s6 | What the River Wants
“Fair,” says the voice, and the water ripples round the stone in a slow, unhurried ring. “Fair is a thing I have been starved of. Here is what I want, and I will tell you plainly because I think you will not insult me by pretending it is less.”
The pause is long. A willow branch trails its tips across the surface and draws back.
“I want to be called by my name. Not Counting Woman. A name. Nobody has asked for it in four hundred years. If you will carry it and say it when you pass a river, I will give the little leaf back her father’s memory, and we shall call it even.”
> truth | Ask for her name, and promise to say it. | willow_a1s7 | +willow_river_promise
> inquiry | Ask what the name will cost you, in other rivers. | willow_a1s7
> mercy | Say you would be honoured to carry it, and ask her to tell the whole story of how she lost it. | willow_a1s7 | +willow_river_promise
> deceit | Promise to say it, and mean only to say it once. | willow_a1s7 | +willow_river_lie

=== willow_a1s7 | A Name Four Hundred Years Old
She gives it in a voice like water over a stone. It is not a name in any language you know. It is four syllables, soft and sliding, the sort of word children give to a pool when they are the first to find it. Gu repeats it after you under his breath. The Elder, behind you on the jetty, hears it and puts a hand to her chest.
“Lian-ta-wei-shu,” the river says, and the willows rustle all along the bank. “You will say it where you pass a river. Not often. Not too loud. A woman of my age is easily embarrassed.”
You can feel the bargain close around you like a hand. It does not hurt. It is lighter than you expected, and also a good deal more permanent.
> truth | Say the name aloud, three times, to be sure that it holds. | willow_a1s8
> quiet | Say it once, and then be silent, and let it be heard. | willow_a1s8
> mercy | Teach Gu the name, so there are two of you who carry it. | willow_a1s8 | +willow_river_spoken_gu bond:gu+3
> inquiry | Ask her what the name means, if it means anything. | willow_a1s8

=== willow_a1s8 | A Father at the Rope
Bai Dao is mending a rope when it happens. His hands do not stop. But his head comes up as if he had heard his name from far off, and he looks across the jetty at the girl with the cloth satchel, and the whole breadth of his face breaks open like a fruit.
“Xiao Ye,” he says. “Leaf. Little Leaf.” He drops the rope. “Where have you been?”
The girl does not run. She stands very still, with her satchel clutched against her chest, and then she puts down the bowl of rice, very carefully, in the middle of the plank, and walks to him, and he catches her up off her feet.
Madam Sui turns her face to the wall, and her shoulders shake.
> truth | Watch quietly, and say nothing to the father about what it cost. | willow_close | +willow_name_back
> mercy | Go and sit with Madam Sui, because someone should. | willow_close | +willow_name_back +willow_sat_with_sui
> quiet | Slip away to the barge before the father can try to thank you. | willow_close | +willow_name_back
> inquiry | Ask Gu what he noticed about the river’s voice. | willow_close | +willow_name_back bond:gu+1

// ---------------------------------------------------------------- a2: break the stone
=== willow_a2s1 | A Question on the Jetty
The ferryman is tying a rope as you reach him, and does not look up until you have asked it twice. When he does, his face is that of a kind, somewhat slow man who has been told a joke he is expected to find funny.
“My child?” he says. “I have no child. My wife and I had none. The river did not see fit.” He shakes his head with the polite helplessness of a man trying to remember a word in a foreign language. “Is there something I should know?”
Behind him the girl in the cloth satchel has stopped counting coins. She is staring at you, and her eyes are very wide, and very dry.
> force | Tell him that girl is his daughter and the river has made him forget. | willow_a2s2
> truth | Ask, gently, how long he has had the satchel she wears, because it is his wife's sewing. | willow_a2s2
> inquiry | Ask who the girl is, then, and how she came to be taking his fares. | willow_a2s2
> mercy | Say there is nothing he needs to know, and give him a coin for the crossing. | willow_a2s2

=== willow_a2s2 | A Man Who Cannot Be Told
He laughs at first. Then he stops. He looks at the girl and back at you, and his hand goes to his chest in a gesture so lost and so bewildered that the whole jetty seems to lean toward it.
“I have had a feeling,” he says, slowly. “In the evenings. As if I had been interrupted. I thought it was the weather.”
The girl comes to stand at his elbow, and he rests his hand on her head, absently, the way you rest a hand on a post you have been using all your life. She leans into it. He does not notice. That is the worst of it: he does not notice.
Ren Qiao has come up behind you. “That is not a man being stubborn,” he says quietly. “That is a hole.”
> force | Declare that you will find what took the name and make it give it back. | willow_a2s3
> truth | Ask Ren Qiao what a warden does with a hole. | willow_a2s3 | bond:ren+2
> quiet | Take the girl aside and ask her what she wants, since no one else has. | willow_a2s3
> inquiry | Ask the father when it happened, and what he paid. | willow_a2s3

=== willow_a2s3 | What She Wants
The girl is called Xiao Ye. She tells you so in a flat, old voice, while she counts the pebbles she keeps in her satchel. She does not cry. She has done her crying in the hut beside the toll-keeper’s, with the door shut.
“I do not want my name back,” she says. “I want him to say it. A name is a thing that someone else keeps. I can say it all I want. It does not mean anything if he does not.”
She looks at the stone in the shallows.
“Madam Sui says the river took it fairly. Madam Sui says it is the law. But I looked up the law in the Concord’s book, and the Concord’s book says a name can only be taken with a person’s true consent. And he never consented. He said, ‘I do not know.’”
> force | Tell her you are going to break the stone, and see if the law says anything about that. | willow_a2s4
> truth | Tell her she has read more of the law than most Censors, and ask to see the passage. | willow_a2s4
> mercy | Tell her you cannot promise to bring her father back, but you will not leave her alone at the landing. | willow_a2s4 | bond:gu+2
> inquiry | Ask which book of the Concord she looked in, and who lent it to her. | willow_a2s4

=== willow_a2s4 | The Stone in the Shallows
You wade out to the stone with the river at your knees. It is cold, and it is alive. Its surface hums under your hand with the patient interest of something that has taken a great many names and never once been refused.
Duan Wuyi has come down onto the jetty, his staff in his hand, and stands without comment. Hao Lan, beside him, has her sketchbook half open and her pencil still.
“I would remind the party,” says Duan mildly, “that the Concord’s charter protects the river’s tolls. I would also remind it that the charter is silent on whether a toll may be taken without consent. I am a Censor-General. I am silent on a great many things.”
> force | Set both hands on the stone and push with everything you have. | willow_a2s5
> quiet | Press your palm to the dip and hold the seed back, so the stone cannot read it. | willow_a2s5
> deceit | Whisper to the stone that Duan will order it broken by morning, and watch what it does. | willow_a2s5
> inquiry | Ask Duan what the charter says about a toll taken in error. | willow_a2s5

=== willow_a2s5 | The Stone Cracks
The stone does not break. It sighs. A hairline runs from the palm-dip to the water, and from it comes a sound that is not a crack but a long, exhaled breath, and then, from the river on all sides, a whisper of voices. Names. Hundreds of them, small, unregarded, spilling upward through the water like bubbles off a boiling pot. A name you do not use. A name you have grown out of. A dead man’s.
They are not gone. They are only loose.
The willows shiver. On the bank, a fisherman looks up from his net and says, to no one, “Mother?”
Ren Qiao’s hand goes to the rope at his belt. “That was the wrong thing,” he says. “Or the right thing, done too fast.”
> force | Keep pushing; the stone will give, and the names will come home. | willow_a2s6
> truth | Step back, and tell everyone on the bank what has happened and what to do. | willow_a2s6
> quiet | Call the names softly, one by one, and see which come to you. | willow_a2s6
> mercy | Run for Xiao Ye, because her father will need her when his own name comes back. | willow_a2s6

=== willow_a2s6 | A Bank of Remembering
For the space of a long breath the whole bank is a mess of memory. A woman drops her basket and starts to weep. A boy runs to an old man and says, “Grandfather, I lost you,” and the old man, bewildered, says, “I have been here all along.” A ferryman who has not spoken to his brother in thirty years turns on his heel and walks, quite fast, upriver.
Bai Dao is standing in the middle of the jetty with his hands out in front of him. “Xiao Ye,” he says, wondering, and it is as if the word had been under his tongue the whole time. “My daughter. I paid for the flood.”
Madam Sui has come out of the toll-hut with her fish-skin book clutched to her chest. She is not looking at the father. She is looking at the stone, with the face of a woman watching her house burn.
> truth | Go to Madam Sui and tell her what you did, and that you will answer for it. | willow_a2s7
> mercy | Go to Bai Dao and Xiao Ye, and stand between them and the crowd. | willow_a2s7
> quiet | Look to the Elder, who is gripping a willow branch with both hands. | willow_a2s7 | npc:SU_WILLOW_STONE
> force | Tell Madam Sui the river's tolls are over, and she should find honest work. | willow_a2s7

=== willow_a2s7 | What the River Said
The water turns the colour of tea. From the stone, or from the water itself, comes the voice you will hear again in dreams.
“You have broken a bargain,” says the river. It is not angry. It is as calm as the bottom of a well. “I gave safe crossing for a thousand years in exchange for what was spared. Now the names are loose in the water, and the ferrymen will drown, and the girl will grow up in a river that does not know her.”
The willows stop moving.
“I will tell you what I will do,” the Counting Woman says. “I will let the names go home, every one. I will let the girl have her father. And I will remember who did it.”
> truth | Say you accept whatever follows, because the toll was wrong. | willow_a2s8
> quiet | Say nothing, and let the river have its say. | willow_a2s8
> force | Tell the river you are not afraid of its memory. | willow_a2s8 | +willow_a2_defied
> mercy | Ask whether the river can forgive the ferrymen, who only wanted to cross. | willow_a2s8

=== willow_a2s8 | The Reach Without a Toll
By evening the stone is a plain rock in the shallows and the ferry runs with no toll but a coin. The villagers do not know whether to thank you or throw you in the river. They do both, in alternation, with great ceremony, and the child Xiao Ye follows you onto the barge and sits on a coil of rope and does not say a word until the sun is down.
“He said my name,” she says at last. “He said it three times. Is that normal?”
Duan Wuyi sits beside her and, with a gravity that takes you entirely by surprise, tells her it is perfectly normal, and that in his experience the first three are always the best.
> truth | Tell her you will make sure the Concord hears what the stone did to her. | willow_close | +willow_name_back +willow_stone_broken
> mercy | Ask her if she wants to stay on the barge, or go back to the jetty, and mean it either way. | willow_close | +willow_name_back +willow_stone_broken
> quiet | Sit down on the rope beside the Censor-General and say nothing, just to sit. | willow_close | +willow_name_back +willow_stone_broken
> inquiry | Ask Duan whether he thinks the river will keep its promise to remember. | willow_close | +willow_name_back +willow_stone_broken

// ---------------------------------------------------------------- a3: a false name
=== willow_a3s1 | A Crossing for a Name
You buy a crossing like any traveller. “One crossing, one name,” says the girl. Her voice has the weary flatness of a thing said ten thousand times. She does not look at your face. She looks at your hand, where it holds the coin.
There is a hut at the end of the landing where the stone’s names are written, in a book bound in fish-skin. Behind you on the jetty, Gu Hanzhen shifts from foot to foot. “You are not going to give them your name,” he says. “You do not have one you say.”
It is true. The question is what the stone will do with a false one.
> deceit | Make up a name on the spot, grand and plausible, and lay it in the dip. | willow_a3s2
> inquiry | Borrow the name of a character from a play you once saw, and watch the stone's reaction. | willow_a3s2
> truth | Tell Gu you will give the stone the name you were never given. | willow_a3s2
> quiet | Hand the girl the coin and say you will pay later. | willow_a3s2

=== willow_a3s2 | The Stone Considers
The stone considers. That is the only word for it. A false name is laid in its palm, and it holds the thing like a jeweller holding a stone he suspects is glass, turning it, rubbing it between thumb and finger. The current slows.
Then it spits the name back. Not as a word. As a taste in your mouth, like old coins. It knows.
Madam Sui has come out of the toll-hut. She is watching you with her hands folded in her sleeves, and she has the face of a woman who has been waiting forty years for someone to try exactly this.
“A river cannot be lied to,” she says. “But a river can be bargained with, if you know how to tell the truth in the wrong order.”
> deceit | Ask her what the wrong order is. | willow_a3s3
> truth | Admit you wanted to see how the toll worked, and apologise to the stone. | willow_a3s3
> force | Say you did not come to be lectured by a toll-keeper. | willow_a3s3
> quiet | Bow to her and say nothing. | willow_a3s3

=== willow_a3s3 | The Wrong Order
“The river takes what you give,” says Madam Sui, “not what you say you give. If you offer a name you do not own, it will not take the name. It will take the owner.” She says it in the same tone one would use for the price of rice. “That is why I never let a stranger pay at dusk. A man tried it once, in my mother’s time. He paid his neighbour’s name. The neighbour was found at dawn on the bank, wearing the man’s coat, asking for the man’s wife.”
She looks at the girl at the foot of the jetty.
“That is how the toll took Xiao Ye. Bai Dao paid his own name at the flood. The river took the nearest name that was his. I did not stop it. I would like to say I could not.”
> truth | Ask whether a name taken that way can be given back by the same trick. | willow_a3s4
> inquiry | Ask who owns a name, then, if it is not the person who says it. | willow_a3s4
> mercy | Tell her you are sorry, and that you will not make her say the next part. | willow_a3s4
> force | Tell her you did not come all this way to be told what cannot be done. | willow_a3s4

=== willow_a3s4 | A Name That Belongs to No One
Madam Sui draws the fish-skin book toward her and lays it flat. “There is a trick,” she says. “I have known it forty years and never used it. A name given up by its owner is the river’s. A name given up by someone else, in the owner’s presence, is nobody’s. It floats until it is claimed.”
She taps the page. “If a stranger pays Xiao Ye’s name, as a gift, in her father’s hearing, it is not a toll. It is a loan. And a loan can be returned.”
Her eyes are on you. “I will not tell you to do it. I will tell you that you have no name to lose.”
> deceit | Say you will do it, and ask her to stand ready with the book. | willow_a3s5
> truth | Say it is a terrible plan, but that you have no better. | willow_a3s5
> inquiry | Ask what happens if the loan is not returned. | willow_a3s5
> quiet | Take a moment to consider whether you really have no name to lose. | willow_a3s5

=== willow_a3s5 | Gu’s Objection
“No,” says Gu. He has been listening from the doorway, and his voice cracks on the word. “You cannot. You said you did not have a name you used. That is not the same as not having a name. What if it is the thing the mist is keeping for you?”
It had not occurred to you. It occurs to you now, with the clarity of cold water.
“I am not saying don’t,” says Gu, hurriedly. “I am saying that my mother always says a debt is only a debt when you know what you owe. You do not know. You would be paying a price you cannot see.”
His face is flushed. He has put himself between you and the stone without noticing.
> truth | Thank him, and say that someone has to pay, and it may as well be someone who knows how to be afraid. | willow_a3s6 | bond:gu+2
> mercy | Promise Gu that if it goes wrong, he is to say your name. Whatever it is. | willow_a3s6 | bond:gu+4
> quiet | Take his hand off your sleeve and nod. | willow_a3s6 | bond:gu+1
> deceit | Tell him you have a plan, and it does not involve paying anything. | willow_a3s6 | +willow_a3_lied_gu bond:gu-2

=== willow_a3s6 | The Loan
You lay your hand in the dip of the stone. Bai Dao is at the rope, a pace away; he looks up, mildly, at the stranger with his hand in the toll-stone, and it is enough. He is present. He is listening, in the way a man listens who has lost something and does not know what.
“I give,” you say, and your voice is steadier than you expected, “the name Xiao Ye. Not as a toll. As a loan. To be returned.”
The stone shudders. Something goes out of the jetty, a sound like a bowstring slackening. The girl at the foot of the planks puts her hands over her ears.
For one full breath nothing happens. Then Bai Dao says, in a bewildered voice, “Who is Xiao Ye?”
> truth | Say her name again, to him, and tell him who she is. | willow_a3s7
> quiet | Wait. A loan takes a moment to settle. | willow_a3s7
> force | Tell him that the girl at the plank is his daughter, and he has to see it. | willow_a3s7
> mercy | Go to the girl and kneel in front of her, so her father can see her face. | willow_a3s7

=== willow_a3s7 | The Price of a Loan
It is not the trick that fails. It is the debt. The stone holds the name, as it was meant to, and the river, which does not like to be tricked, takes the interest in a coin you did not expect. You feel it go out of you quite gently, the way a tooth comes loose in sleep.
You cannot afterward say what it was. A taste, a small melody, the shape of a particular afternoon. It is very small and very sharp, and when you reach for it there is a clean place where it used to be.
Bai Dao has dropped his rope. He is staring at the girl, who has stopped with her hands over her ears, and his mouth is open.
“Ye,” he says. It comes out half-formed. “Little Ye?”
> truth | Tell Madam Sui the loan has been returned, and ask her to write it in the book. | willow_a3s8
> mercy | Watch the father and daughter, and look away from what you have lost. | willow_a3s8
> inquiry | Ask Madam Sui what the river took, in interest. | willow_a3s8
> quiet | Sit down on the plank, because your knees have decided. | willow_a3s8

=== willow_a3s8 | What Was Taken
Madam Sui will not say what the river took. She says only that it was a small thing and a true one, and that the river keeps its interest in a safe place, in a book older than the stone. She writes the loan returned in a clean hand. Bai Dao holds his daughter’s face in both his hands and weeps without noise.
Later, on the barge, Duan Wuyi comes and stands beside you at the rail. He does not mention the stone. He says, after a time, “There is a rule in the Concord’s law. I wrote the commentary on it myself. A debt paid for another is the one debt the Ledger honours without question.”
He looks at the water.
“It is a rule for the saints. I have never met a saint who did not pay it with their eyes open.”
> truth | Tell him you did not know what you were paying, and would do it again. | willow_close | +willow_name_back +willow_paid_for_ye
> quiet | Say nothing, and watch the river run. | willow_close | +willow_name_back +willow_paid_for_ye
> inquiry | Ask what the Ledger does with a debt that is honoured. | willow_close | +willow_name_back +willow_paid_for_ye
> mercy | Ask him to tell the child, gently, that her name came home. | willow_close | +willow_name_back +willow_paid_for_ye

// ---------------------------------------------------------------- a4: work beside the child
=== willow_a4s1 | Beside the Girl
The satchel is full of pebbles, each one marked with a scratch. She is counting them as you sit down, and she does not stop. “I get a pebble for each fare,” she says. “It is the only way I know I did it. I put the pebbles in the satchel. In the evening I count them.” She looks up. “Why are you here?”
You say you would like to help. She considers this for a considerable time.
“Nobody does,” she says. “They see the satchel and they see the fares and they pay. They are very polite. It is as though I were a coin-box.” She picks up a pebble and puts it down. “You can take the next one. I will watch.”
> mercy | Take the next fare, and say the words she says, exactly. | willow_a4s2
> truth | Ask her what her name is, and wait for her to say it. | willow_a4s2
> quiet | Sit with her, and count the pebbles aloud, one at a time. | willow_a4s2
> inquiry | Ask who taught her the words, and what she is supposed to do if someone refuses. | willow_a4s2

=== willow_a4s2 | A Day at the Rope
You spend the day at the foot of the jetty. A pedlar of pins crosses with a basket on his head and gives a name so old it has moss on it. A grandmother crosses with her granddaughter and gives the name of a dog she had as a girl. A man you recognise from the barge crew crosses to buy tobacco and pays the name of his brother-in-law, with feeling.
Xiao Ye watches the way you take the fares, and corrects you twice, and then not at all. By sundown she has begun to lean on your shoulder.
Bai Dao eats his rice at the far end of the plank, a patient, kind, slow man, and each time he glances at the two of you, he looks puzzled, as at a picture hung crooked.
> mercy | Carry her rice to him yourself, and say who it is from. | willow_a4s3
> truth | Ask Bai Dao what he does in the evenings that makes him feel interrupted. | willow_a4s3
> quiet | Watch him eat, and note what he does with his hands. | willow_a4s3
> inquiry | Ask the girl what he used to do in the evenings, before. | willow_a4s3

=== willow_a4s3 | What He Does in the Evenings
In the evenings, Xiao Ye tells you, he sits on the upturned punt and hums. He does not know he is doing it. He has never known. It is a tune with no words, and it has a way of curling back on itself, so you can never find the end of it.
“It was the song he sang me when the river was loud,” she says. “Mother said it was an old thing, from before the Concord, from before the stone. Everyone in the village knows it, but only he sang it right.”
You have heard it. In a vault under the Ash Archive, on a roof under stars, in the mouth of a child who led the game of sealing.
Your chest is very warm. The cold thing in it is humming.
> truth | Tell her you know the tune, and where it comes from. | willow_a4s4
> quiet | Listen to the father hum, and say nothing. | willow_a4s4
> mercy | Ask her to teach it to you, the way her father sang it. | willow_a4s4
> inquiry | Ask if anyone else in the village hums it, and whether they remember why. | willow_a4s4

=== willow_a4s4 | The Punt at Dusk
That night you sit on the upturned punt with the father, who has not said a word since you came. Gu Hanzhen sits on the other side, and Ren Qiao leans on the mooring post, pretending to be a mooring post. Bai Dao is humming. The tune comes up out of him like water from a spring, and he does not hear it.
You hum it back, softly, a half-beat behind.
He stops. He turns his head. He says, with great courtesy, “That is my tune. Who taught you?”
“Your daughter,” you say. He frowns, as at a word in a language he used to speak.
> truth | Tell him again, slowly, that the girl at the foot of the jetty is his daughter. | willow_a4s5
> mercy | Hum the next line, and let him pick it up. | willow_a4s5
> quiet | Hum, and give him nothing else. | willow_a4s5
> inquiry | Ask him what he feels when he hums it. | willow_a4s5

=== willow_a4s5 | Three Verses
He sings it with you. At first just the tune, and then, slowly, with a rasp, a few words that are not words at all, only sounds a father makes over a cradle. His voice is rough. Xiao Ye, at the foot of the punt, has stopped breathing.
“It had a verse,” he says. He is almost whispering. “For the small one. I cannot... I cannot find her name. But I know she is small. She is small and she is afraid of the loud water. And there is a leaf.”
The tune falters. His hand is at his chest.
“There is a leaf,” he says, “on the end of every line.”
> truth | Sing the verse for him, with a leaf in each line. | willow_a4s6
> mercy | Take Xiao Ye’s hand and put it in her father’s. | willow_a4s6
> quiet | Hold the silence, and let him find it. | willow_a4s6
> inquiry | Ask what kind of leaf. | willow_a4s6

=== willow_a4s6 | A Verse With a Leaf
The leaf is a willow leaf. It takes him the length of a long breath to say so. He says it aloud, with great care, as a man might lay a stone to cross a stream. “Willow. Willow leaf. Little...”
He breaks off. His whole body is trembling. Beside you, Gu has covered his mouth with his hand.
Xiao Ye has said nothing. She stands in front of her father and holds out both hands, palms up, as one offers rice.
The river, which has been listening all this time, sighs under the punt like a very large animal settling back to sleep.
> truth | Say the name for him, once, softly, to give him the last word. | willow_a4s7
> quiet | Wait. The word is almost his. | willow_a4s7
> mercy | Reach out and rest your hand on his shoulder. | willow_a4s7
> inquiry | Ask the river quietly whether it will hold this much. | willow_a4s7

=== willow_a4s7 | The River Gives Way
“Ye,” he says. It is a single syllable. It leaves him as if it had been caught in his throat for eight months. “Ye. Xiao Ye. Little Leaf.”
The name does not come from the toll, or from the stone, or from the book. It comes from a father who has been humming the shape of it for eight months. The river cannot take back what a man has made out of his own breath. It lets go with the faintest ripple.
Xiao Ye walks into his arms without a word. Madam Sui, watching from the hut door, lets out a breath she may have been holding since the spring flood.
Behind you, the Elder is standing on the jetty with her eyes shut and her lips moving. She is saying it too.
> truth | Let them have the punt, and walk back to the barge. | willow_a4s8 | +willow_name_back +willow_by_song
> mercy | Stay a while, and let the child tell you what she wants to tell. | willow_a4s8 | +willow_name_back +willow_by_song
> quiet | Sit in the dark with Gu and the warden, and say nothing at all. | willow_a4s8 | +willow_name_back +willow_by_song
> inquiry | Ask Madam Sui what the tune is really called. | willow_a4s8 | +willow_name_back +willow_by_song

=== willow_a4s8 | What the Tune Is Called
Madam Sui says that the tune has no name that she knows. She says that when she was a girl it was sung in the village and in the next village and the one beyond that, all the way up the river, and that no one knew where it started. She says that the Law Hall tried once, long ago, to forbid it.
“A tune cannot be forbidden,” she says. “It is only a way of remembering that has no ledger. The Concord does not know how to count it.”
She hands you a small, worn willow whistle.
“You will meet it again,” she says. “Up and down the river. Whenever you do, play three notes, and see who answers.”
> truth | Take the whistle, and thank her for the lesson. | willow_close | +willow_whistle
> mercy | Take it, and ask her to keep one for Xiao Ye. | willow_close | +willow_whistle
> quiet | Take it, and say nothing, and tuck it into your belt. | willow_close | +willow_whistle
> inquiry | Ask her which three notes, and in what order. | willow_close | +willow_whistle

// ---------------------------------------------------------------- hidden route: the written name
=== willow_h1 | A Clerk Among the Pilgrims
Hao Lan has been following you all afternoon with a bowl of rice and the patient air of someone hoping to be asked. She catches your sleeve at the edge of the jetty.
“I read the Concord's book too,” she says, low. “The one the girl read. It says a name can only be taken with consent. It does not say what happens if the name is written. In ink. In a register.” Her face has gone pink. “A written name is under the Ledger's protection, whether anyone has consented or not. The river cannot take what the Ledger holds.”
She looks at the little girl. “It would not need a Censor-General. It would need a Censor, and a brush, and about a quarter of an hour.”
> truth | Ask her whether she would do it, if you asked. | willow_h2
> mercy | Tell her she doesn't have to risk her place for this. | willow_h2
> inquiry | Ask what she would write, and where. | willow_h2
> quiet | Take her bowl of rice, and eat it, and nod. | willow_h2

=== willow_h2 | The Register
The register is a thin travelling volume with a grey cover and a closed eye on the spine. Hao Lan unrolls a clean page on a barrel-head. She has put on her Censor’s sash. Scribe Tong, who has materialised at her elbow, holds the inkstone steady with one grave small hand.
“This is irregular,” says Hao Lan. “It is also not forbidden. I looked.”
She takes the brush, and dips it, and writes a name. Then she writes it again, in another script, and a third time in the old script. Under each she adds a date, a place, a father’s name, and a seal. The ink is very black. You think, for no reason, of the ink in the Ash Archive, which remembers its writer.
“There,” she says. “Xiao Ye, daughter of Bai Dao, of Willow Reach. Written.”
> truth | Thank her, and promise to speak for her if the Concord objects. | willow_h3
> mercy | Stand beside the girl while the ink dries. | willow_h3
> quiet | Watch the page, and say nothing. | willow_h3
> inquiry | Ask Tong whether his ink will last. | willow_h3

=== willow_h3 | Written
It happens at once. A small shiver runs through the river, like a horse shaking a fly from its flank. Bai Dao’s head comes up. He does not say a word. He looks across the planks at the girl with the cloth satchel, and the expression on his face is the one you will remember longest from the whole voyage.
He walks to her. He picks her up.
“Little Leaf,” he says. “Have you eaten?”
Duan Wuyi, at the rail, has not moved. When Hao Lan comes back to the barge with the register under her arm, he says only, in his gentle voice, “I did not see that. I would like to see it again, in the morning, so that I may enter it properly.”
> truth | Tell Hao Lan that a Censor who writes names back into the world is the best kind. | willow_close | +willow_name_back +willow_written +willow_hao_proud
> mercy | Say nothing, and let Hao Lan have her moment. | willow_close | +willow_name_back +willow_written +willow_hao_proud
> quiet | Slip away so that Duan can pretend he saw nothing. | willow_close | +willow_name_back +willow_written
> inquiry | Ask Duan what the Concord does with a Censor who writes without orders. | willow_close | +willow_name_back +willow_written

// ---------------------------------------------------------------- close
=== willow_close | Leaving Willow Reach
The barge casts off at first light, and the willows slide by in a long green line. On the jetty a man and a small girl stand together, and he does not stop looking at her, as if she might be taken a second time.
+[how] willow_river_promise | You gave the Counting Woman your word. It hums in your chest like a held note: four syllables to be said at every river.
+[how] willow_stone_broken | The stone is cracked and the ferry runs for a coin. Madam Sui will not look at the barge as it passes.
+[how] willow_paid_for_ye | A small thing you cannot name is missing, and the place it left is clean and sharp.
+[how] willow_by_song | The river did not take the name back. A father sang it out of the air, and a willow whistle sits in your belt.
+[how] willow_written | Xiao Ye’s name is in a Censor’s register, in three scripts. No river will ever have it.
+[ring] willow_river_lie | You promised the Counting Woman a name you meant to say once. She heard the once.
+[ring] willow_a2_defied | The river said it would remember who did it. You told it you were not afraid of its memory.
+[ring] willow_a3_lied_gu | Gu has not forgotten that you told him you had a plan that cost nothing. He has not said so.
> truth | Stand at the stern and watch the jetty until it is gone. | willow_close2
> quiet | Go below, and sleep the whole morning in the hold. | willow_close2
> mercy | Find Gu, and sit with him. | willow_close2 | bond:gu+2
> inquiry | Find the Elder, and ask how she crossed the plank. | willow_close2

=== willow_close2 | The Elder and the Plank
Elder Su sits alone in the shade of the cabin with her back straight and her eyes closed. After a long time she says, “I crossed it.”
You did not see her cross. You heard the planks, and a very quiet voice repeating something over and over, which might have been a prayer and might have been the multiplication tables.
“Sixteen planks. I counted. One word at a time, and not fall off the word.” She opens her eyes. “I did not look at the river. I looked at your back. I hope you will forgive me for using it as a bridge.”
+[appr] willow_a1 | You spoke to the river as to a student who had finally understood, and the willows leaned to hear.
+[appr] willow_a2 | You pushed a stone until it cracked, and the willows are still shaking.
+[appr] willow_a3 | You laid a false name in the stone and paid in earnest, and the river has not forgotten the accent.
+[appr] willow_a4 | You sat beside a child and learned a tune, and the whole jetty hums it now.
+ willow_sat_with_sui | Madam Sui sent a bowl of rice down to the barge, wrapped in green cloth.
+ willow_name_back | Behind you on the bank, a girl with a cloth satchel is waving with both arms.
+ willow_hao_proud | Hao Lan is still pink to the ears.
+ willow_whistle | The willow whistle is a small weight at your belt. You have not yet blown it.
+ willow_river_spoken_gu | Gu hums the river’s name under his breath, so softly that he does not know he does.
> truth | Tell her you would carry her over a hundred planks. | hub_b2_road | +b2r_willow npc:SU_WILLOW_PLANK
> mercy | Offer her your arm for the rest of the voyage. | hub_b2_road | +b2r_willow npc:SU_WILLOW_PLANK
> quiet | Sit in the shade beside her and say nothing. | hub_b2_road | +b2r_willow
> inquiry | Ask her what the multiplication tables were for. | hub_b2_road | +b2r_willow
`,
  scenarios: String.raw`
$ SU_WILLOW_PLANK | trust+3 respect+1 | elder | The player takes the Elder's arm so she can walk the plank over the water, or comes back to her before speaking to the river.
hostile: You offer me an arm over a plank. I could have crossed alone. I would have crossed alone if you had not made me aware of how many planks there were. Remove your hand.
wary: You offered me your arm when I could not look at the water. I will take it, and I will watch what you do with the favour, because I have been given favours before by people who wanted something.
neutral: Sixteen planks and an arm. Good. I shall remember it the way I remember the kindnesses of the Law, which is to say distantly and with surprise.
warm: You came back for me before you went to the river. Do you know how rarely that has happened in my life? Not often enough to be a habit. I should like to turn it into one.
devoted: I walked across sixteen planks over moving water, holding the sleeve of someone I trust more than my own ledgers. My sister taught me the water was a sentence. I think you are the full stop at the end of it.
? tone:mercy>=3/5 | You have been kind to me all week. It is unsettling to be treated gently by someone whose first loyalty is to a river.

$ SU_WILLOW_STONE | trust-1 fear+6 respect+2 | elder | The player breaks the toll-stone and the names spill loose from the river.
hostile: The names are loose in the water, the villagers are weeping, and you stand there with your hand on a cracked stone. If you intended this, you have a bolder heart than I credited. If you did not, you are a fool.
wary: You broke the toll and freed the names. I cannot say you were wrong. I can say that it is not the kind of thing the Concord will forget, and I shall be standing beside you when it remembers.
neutral: You broke a river's stone. The Law would have asked to hear its case first. I find, standing here with the willows shaking, that I am less certain than I ought to be that the Law is right.
warm: I clutched a willow branch with both hands while you did it. If I had been braver, I would have done the same. As it is, I shall try to be braver in your next crisis.
devoted: The names were loose in the water and they were singing. I could hear my sister in them. I thought, I shall never hear her again, and then I thought, I shall hear her always. Thank you for breaking it. Do not do it again.
? tone:force>=2/4 | You told Madam Sui to find honest work. She kept the toll for fifty years. Be gentle with people who have lived inside a bargain. They did not make it.
`,
  remarks: String.raw`
% willow_gu_song | since:willow_by_song>=20 & bond:gu>=6 | gu | That tune again. I keep humming it without meaning to. My mother says the whole valley does. I think it has been waiting for a river to carry it.
% willow_river_remind | since:willow_river_promise>=24 | elder | We are passing a river. You have not said her name. I do not tell you what to do, but I notice the willows leaning.
% willow_xiao_ye | since:willow_written>=18 | elder | The Censor’s register has an entry I did not expect to be proud of. Tell Hao Lan the Law Hall would have been glad to employ her.
`,
};
