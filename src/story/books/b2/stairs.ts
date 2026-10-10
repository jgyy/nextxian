import type { Arc } from "../types";

/**
 * Book Two, arc eleven: the Crane Stairs. During Midsummer Week each Peak sends a champion up the hundred and eight steps of
 * the Stone Island, fighting at every landing, and a sect's precedence at the Assembly is the landing it reaches. The Azure Cloud
 * Sect sits at the bottom. Four ways to change that: climb the stairs yourself (a1), coach Gu to climb them (a2), fix the order of
 * the bracket (a3), challenge the rule itself (a4). A hidden route uses what Qin taught in the sparring court (needs a lesson).
 * Cast: Leng Jian of the Sword Peak, Madam Zhu of the Alchemy Peak, Brother Ox of the Beast Peak, the herald Yan.
 */
export const stairs: Arc = {
  id: "stairs",
  name: "The Crane Stairs",
  scenes: String.raw`
=== stairs_entry | A Hundred and Eight Steps
The Crane Stairs climb the western face of the Stone Island in nine flights of twelve, each flight ending in a landing of white stone with a crane carved in the pavement. The Nine Peaks send a champion each Midsummer, and the champions fight their way up. A challenge is made on a landing. The loser is out; the winner climbs. A sect's seat in the Assembly is the highest landing its champion reaches, and the sects nearest the dais speak first and are believed longest.
The Azure Cloud Sect has not entered a champion in fifteen years. Its chair is the lowest in the hall, near the door, and the Elder has not mentioned this once.
In the courtyard at the foot of the stairs the champions are being presented: a tall thin swordsman with a face like a closed fan, a stout woman in indigo with a satchel of pills, a bear of a man in a tunic of hides. The herald, a nervous fellow called Yan, reads out the Peaks in order. When he reaches the ninth, he stops and looks at his list.
“The Azure Cloud Sect,” he says, with something like despair. “Does it enter?”
> force | Say that it does, and that the champion is you. | stairs_a1s1 | +stairs_a1
> mercy | Say that it does, and put your hand on Gu Hanzhen's shoulder. | stairs_a2s1 | +stairs_a2
> deceit | Ask the herald for a quiet word about the order of the bracket. | stairs_a3s1 | +stairs_a3
> truth | Ask to see the rule by which a sect is made to climb for its chair. | stairs_a4s1 | +stairs_a4
> quiet | Stand in a corner of the courtyard and set your feet in the form Qin taught you, once, on packed earth. | stairs_h1 |  | asked_for_lesson | Qin never taught you a form.
> force | Stand in a corner of the courtyard and set your feet in the stance you used when you let Qin's palm land. | stairs_h1 |  | accepted_challenge | You never stood in Qin's court.

// ---------------------------------------------------------------- a1: you climb
=== stairs_a1s1 | The First Landing
There is a murmur through the courtyard. The Elder, at the edge of the crowd, has gone very still. Ren Qiao, beside her, takes half a step forward and stops himself. You are a witness, not a champion; you carry no sect’s sword, and what gathered qi you have would fit in a teacup. But the rule says a sect may name any champion it likes, and the herald is not brave enough to argue.
At the first landing a woman in grey with a quarterstaff is waiting. She is a junior of the Slate Peak, perhaps twenty-five, with a plain face and the loose-shouldered readiness of a person who has fought on stairs before.
“I yield to no one on the first landing,” she says, and then, with unexpected honesty, “but I would not mind if you made it short.”
> force | Step onto the landing and take your stance. | +
> truth | Ask her name. | ^
> inquiry | Ask what the rules of the bout are. | ^
> quiet | Watch how she holds the staff. | ^

=== stairs_a1s2 | The Staff
She is good. The staff comes at you in short flat arcs, never wasted, and every strike carries the weight of her whole body behind it. You have no weapon but a mortal’s breath and a pair of quick hands, and the stone is slippery. The first blow takes the air from your ribs. The second you slip, barely, and the third catches your sleeve and tears it.
You are not going to win by strength. The cold seed in your chest turns, lazily, at the sound of her breathing. It knows how she moves before she does.
Below, in the courtyard, you hear Gu say, in a small voice, “Please.”
> force | Rush inside the staff's reach. | +
> quiet | Let the seed show you where she will be. | ^
> deceit | Drop to one knee as though hurt. | ^
> truth | Tell her that you cannot beat her, and ask whether she will accept a draw. | ^

=== stairs_a1s3 | A Thread of Black
The seed moves. You don’t command it. It is as natural as a breath. A single thread of black unwinds from beneath your breastbone and runs down your arm and out through your fingertips, and for an instant your hand is not a hand but a pen, and the staff is a line on a page.
You touch the staff, and it goes quiet. The grain of the wood remembers its tree. It stops being a weapon, and is only a stick.
The woman stares at it. She lets it fall from her hands. It rolls down the first flight of the stair, clattering, and none of the champions below it make a sound.
“That is not allowed,” she says, breathless. “Is it? I do not think there is a rule.”
> truth | Tell her you did not mean to. | + | +stairs_thread_seen
> force | Tell her to pick up the staff. | ^
> quiet | Draw the thread back, quickly. | ^
> deceit | Say it was a trick, learned in a sparring court. | ^

=== stairs_a1s4 | A Landing Won
She does not pick up the staff. She looks at you for a long moment, and then, with grave courtesy, she bows. “The landing is yours,” she says. “I do not know what you are. I know when I am beaten.” She stands aside. “I will say to the herald that I yielded.”
You climb the twelve steps with the courtyard watching. At the second landing is a man in a tunic of hides, sitting cross-legged on the crane in the pavement, eating a boiled egg. He is huge, bald, and pleased with himself. He looks up as you reach the top and smiles with his mouth full.
“The little one,” he says. “They said you were coming.” He swallows. “I am Brother Ox. I don’t fight on an empty stomach. Do you have an egg?”
> truth | Say you do not, but you'll share a bowl of rice after. | +
> mercy | Offer him your last dried plum. | ^
> inquiry | Ask what he's eating the egg for. | ^
> force | Tell him you're here to fight, not to eat. | ^

=== stairs_a1s5 | Brother Ox
The second bout is stranger than the first. Brother Ox fights as he eats, with great relish and no hurry. He is slow, and enormous, and every blow he throws would break a wall. He misses you by a hand’s breadth every time, and apologises.
“It is the egg,” he says. “It slows me down.” He ducks a feint. “I thought it would give me strength.”
You are laughing. You don’t know why. Somewhere in the second minute the laughter is so absurd that you stop fighting and sit down on the stair with your hands over your face, and Brother Ox, with a puzzled frown, sits down beside you.
“I do not think that was in the rules either,” he says.
> truth | Tell him it is the best bout you've had. | + | +stairs_ox_friend
> mercy | Offer him the second plum. | ^
> quiet | Sit beside him in silence. | ^
> inquiry | Ask how he came to be a champion. | ^

=== stairs_a1s6 | A Friend on the Stair
He tells you, over the course of an afternoon, in a voice like warm gravel. He was a herdsman in the Beast Peak’s lowlands, he says, who could not fight and did not wish to. The Peak’s champion died of a fever, and they needed a body to put on the stair, and he was the biggest. He has been climbing for six years. He has never won a landing and never lost one. He just sits at the second, eating, until the next champion tires of the wait and goes round.
“It is not cowardice,” he says. “It’s a kind of manners.”
He rolls an egg across the stone.
“Would you like to go up? I’ll tell them I lost.”
> truth | Tell him he doesn't have to, and that you'd like to win properly. | +
> mercy | Accept, with thanks. | ^
> deceit | Accept, and say you'll tell no one. | ^
> force | Tell him you'll beat him for the landing. | ^

=== stairs_a1s7 | The Third Landing
Three more champions wait on the third, fourth and fifth landings, and you do not fight any of them. They have heard what happened at the first and second. The Sword Peak’s man, Leng Jian, is on the sixth, and he is the first who does not yield.
He is tall, thin, with a face like a closed fan and a plain steel sword in a plain sheath. He does not rise from the stone. He studies you with the polite incuriosity of a man looking at an unsolved piece of arithmetic.
“I have fought forty champions on these stairs,” he says. “I have never fought one who made a staff forget it was wood.” He rises. “I should like to know how it is done. I will beat it out of you, if I must.”
> force | Draw your blade. | +
> truth | Say you do not know how it is done, and will show him. | ^
> inquiry | Ask what he will do when he learns. | ^
> quiet | Bow, and wait. | ^

=== stairs_a1s8 | The Sixth Landing
It is the best bout of the Midsummer. Years from now, in tea-houses along the river, men will argue over its details. Leng Jian fights with the economy of a man who has done nothing else for thirty years, and each stroke is a sentence in a language you cannot speak. You parry what you can with a borrowed blade. The seed carries the rest.
At the end you are on your knees on the crane. His point is at your throat. It trembles, very slightly.
“Yield,” he says, quietly.
You think of the Elder, at the foot of the stair, and the chair near the door. The seed, in your chest, is quiet. It has given all it can. You have, you realise, reached the sixth landing.
> truth | Yield, and tell him it was a good fight. | stairs_close | +stairs_sixth
> force | Refuse to yield. | stairs_close | +stairs_sixth
> mercy | Ask him to help you up. | stairs_close | +stairs_sixth
> quiet | Say nothing, and bow your head. | stairs_close | +stairs_sixth

// ---------------------------------------------------------------- a2: coach Gu
=== stairs_a2s1 | A Boy with a Sword
Gu Hanzhen has never fought in public. He has fought in a cell, and once on a ledge, and once, memorably, with a village bully in a rice field. He is nineteen. He stands in the courtyard with the stunned look of a boy who has been told he is to dance before the Emperor, and his hand is on his sword, and the knuckles are white.
“I will do it,” he says. “I will do it, I can do it, I— what do I do?”
Ren Qiao, at his elbow, answers with the dry economy of a man who has spent fifteen years watching other people’s fights from a bridge. “You stay upright,” he says. “That is most of it.”
The herald writes down the name. The courtyard is silent.
> mercy | Take Gu aside, and ask what he is most afraid of. | +
> truth | Tell him you believe in him, and mean it. | ^
> inquiry | Ask Ren Qiao to show him the first thing a warden is taught. | ^
> quiet | Hand him a cup of tea, and wait. | ^

=== stairs_a2s2 | What Gu Fears
He is afraid, he says, of being a levy. He is afraid of being one more name on a list, sent up a stair to be stood in front of someone, because it is useful. He is afraid of being used for his brother’s sake. He is afraid, most of all, of discovering that he is brave only because he is angry.
“If I am afraid, I cannot fight,” he says. “If I am not, I am the thing the Law wanted.”
Ren Qiao, who has been listening in silence, clears his throat. “The Law wanted a boy who would not fight,” he says. “A boy who is frightened and fights anyway is not the Law’s. He’s a warden.”
Gu looks at him. For a moment he looks about ten years old.
“Is that how it works?”
“I have no idea,” says Ren, with great dignity. “But it sounds like it should.”
> truth | Tell Gu the fear is the right size. | + | bond:gu+3
> mercy | Hug him, briefly, and let go. | ^
> inquiry | Ask Ren what a warden does when he is afraid. | ^
> quiet | Stand beside him in silence. | ^

=== stairs_a2s3 | Lessons on a Roof
You have three days. Ren Qiao teaches footwork: sixty-one steps, the stones of the Ash Bridge, taught in order on the roof of the guest-house in the early morning with a broom for a sword. Gu learns them badly, and then well. You teach the other thing, the thing you have learned at Qin’s court and on the ledge and in a hundred rooms since: that a fight is a conversation, and the best thing a young man can do in one is listen.
He listens. It surprises you how well. On the second night he disarms Ren with a wrist-turn nobody taught him, and stands there, panting, appalled.
“I didn’t mean to,” he says. “It was just there. Like a word you didn’t know you knew.”
> truth | Tell him that is the sword speaking for itself. | + | bond:gu+3
> mercy | Give Ren a hand up. | ^
> inquiry | Ask where he learned it. | ^
> quiet | Pour the tea. | ^

=== stairs_a2s4 | The First Landing, Again
He fights the Slate Peak junior on the first landing, and wins by a hair, and sits down hard on the crane with his face in his hands. The second champion is a woman in indigo, Madam Zhu of the Alchemy Peak, with a satchel of pills. She does not fight. She bows, opens the satchel, and offers him a small blue tablet.
“A courtesy of my Peak,” she says. “It makes the next bout easier.”
Gu stares at the pill. He looks at you.
You can smell it from where you stand. It is the smell of the warehouse behind the dyers’ lane. Bitter and faintly sweet. The smell of the Healer’s Hall cellar.
Madam Zhu smiles. It is a perfectly pleasant smile.
> truth | Tell Gu not to take it. | +
> force | Knock it out of her hand. | ^
> inquiry | Ask what it does. | ^
> mercy | Ask Gu to decide. | ^

=== stairs_a2s5 | Madam Zhu’s Courtesy
“It calms,” says Madam Zhu. She holds out the pill on her palm like a coin. “It takes away fear. The Alchemy Peak has a great interest in making champions more comfortable. I assure you it is quite safe.”
Gu has the grey look of a boy who has been told something he already knew. He doesn’t take it. He says, in a clear voice, in the hearing of the whole courtyard, “My mother has a saying. She says a person who offers you something to stop being afraid is either selling or afraid.”
Madam Zhu’s smile does not change. “And which am I?”
“I think you’re selling,” says Gu. “I think you’re afraid of selling.”
The courtyard roars. The woman steps back. Her fingers close slowly over the pill.
> truth | Lay a hand on Gu's shoulder. | + | +stairs_gu_refused_pill bond:gu+4
> inquiry | Ask Madam Zhu where the Alchemy Peak buys its roots. | ^
> quiet | Watch her go. | ^
> mercy | Tell Gu he did well. | ^

=== stairs_a2s6 | Brother Ox, Again
Gu and Brother Ox share a bowl of rice. It happens on the third landing, after the second champion has withdrawn with dignity. The big man sits cross-legged on the crane with his egg, and Gu sits across from him, and neither speaks. At last the Beast Peak’s champion says, with enormous gentleness, “I do not wish to fight you.”
“Nor I you,” says Gu.
“But the rules say one of us must.”
“The rules,” says Gu, thoughtfully, “don’t say how.”
He takes off his sword, lays it on the stone, and holds out both hands. Brother Ox looks at them. Then, slowly, he sets down his egg, and puts his own hands, huge as shovels, into Gu’s.
They wrestle, in the old way, palm to palm. It lasts an hour.
> truth | Watch them from the landing. | +
> mercy | Fetch them both a towel. | ^
> quiet | Keep time on your fingers. | ^
> inquiry | Ask Ren who is winning. | ^

=== stairs_a2s7 | The Sixth Landing
Leng Jian does not smile. He waits for Gu at the sixth landing in the afternoon light, his plain steel sword at his hip, and when the boy comes up the last step he nods once, as at an equal.
“You are the Azure Cloud’s,” he says. “You have refused a pill and wrestled an ox. I have heard of both. I should say that I have no quarrel with you. I have a quarrel with the stair.”
He draws his sword. It makes a small clean sound.
“I will fight you honestly,” he says. “It is all I know how to do.”
Gu draws his own. His hand is shaking. His voice, when it comes, is surprisingly steady.
“Thank you,” he says. “So will I.”
> truth | Stand back. Let him. | +
> mercy | Call out one word: 'Breathe.' | ^
> inquiry | Watch Leng Jian's feet. | ^
> quiet | Hold Ren Qiao's sleeve, because he looks as if he might move. | ^

=== stairs_a2s8 | What Gu Did
He loses. Of course he loses; Leng Jian is the finest swordsman of his generation. But for eleven minutes he does not die, and for six he is winning, and at the end he is on one knee at the sixth landing with a cut across his forearm and his sword still up, and the champion of the Sword Peak is looking down at him with a face of open astonishment.
“Where did you learn that?” says Leng Jian.
“A warden taught me,” says Gu, hoarsely. “Sixty-one steps. On a roof. With a broom.”
Leng Jian puts up his sword. He extends a hand.
“Rise,” he says. “You are the first in six years who made me use the second form.”
> truth | Go to Gu, and bind the cut. | stairs_close | +stairs_gu_climbed +stairs_sixth bond:gu+4
> mercy | Hand him a cup of water. | stairs_close | +stairs_gu_climbed +stairs_sixth bond:gu+4
> quiet | Say nothing; let him have the landing. | stairs_close | +stairs_gu_climbed +stairs_sixth bond:gu+3
> inquiry | Ask Leng Jian what the second form is. | stairs_close | +stairs_gu_climbed +stairs_sixth bond:gu+2

// ---------------------------------------------------------------- a3: fix the bracket
=== stairs_a3s1 | The Herald’s Quiet Word
Herald Yan keeps his office behind the courtyard, in a little room the size of a wardrobe, with a table, a list, and a chair. He is thirty-eight, thin, pale, and terrified of everything. He has the air of a man who was given a small job and has been apologising for it ever since.
“The bracket is drawn by lot,” he says. “It is quite fair. I draw the lots myself, in the presence of all nine champions, and I have never once been accused of anything.” He swallows. “Why do you ask?”
You glance at the drawer of his table. In it, half-hidden, is a small stack of cards, the lots. They are marked, faintly, on the edges, in different inks.
> deceit | Ask how much a fair draw costs. | +
> truth | Tell him you know the lots are marked. | ^
> inquiry | Ask who marked them, and when. | ^
> force | Pick up the stack. | ^

=== stairs_a3s2 | Who Marked Them
“The Sword Peak,” says Yan, in a voice like a mouse. “Eight years ago. And the Alchemy Peak, five. And the Formation Peak, two. It’s a matter of convenience. They like to know where they are going to end up.” He lays his hands flat on the table. “I would like it noted that I never touched a card.”
He looks up.
“Nobody has asked the Azure Cloud Sect to the draw in fifteen years. The Azure Cloud’s card is in the drawer. It has not been marked. It is the only honest card in the stack.”
He lifts it, between finger and thumb. It is plain, white, and a little dusty.
“It always comes up last.”
> truth | Ask him to do it fairly, this once. | +
> deceit | Offer to mark it yourself. | ^
> mercy | Ask whether he has ever wanted to. | ^
> inquiry | Ask what happens if the Azure Cloud's card comes first. | ^

=== stairs_a3s3 | A Fair Draw Costs
It costs, in the end, a purse of Yue Zhaoning’s silver and a favour you didn’t know you were collecting. She arrives in the courtyard in a long coat the colour of tar, with a basket of eels on her arm and a smile for the herald, and she says, loud enough for the whole queue, “Master Yan! There you are! My cousin said you’d want fresh eel.”
Yan looks at the eels. He looks at the purse beneath them. He looks, last of all, at you.
“Yes,” he says faintly. “I do like eel.”
The lots are redrawn that evening. The marked cards are burned in the courtyard brazier, in front of the delegates, with great ceremony. Nobody objects. Nobody can.
> truth | Thank Yue Zhaoning. | + | +stairs_yue_helped
> deceit | Slip her a second purse. | ^
> mercy | Ask her to share the eel. | ^
> quiet | Watch the brazier. | ^

=== stairs_a3s4 | The Draw
The new draw is a ceremony. The nine champions stand in a ring around a copper bowl, and the herald, shaking, draws the cards one at a time and reads out the order. The Sword Peak draws seventh. The Alchemy Peak, third. The Formation Peak, ninth. The Beast Peak, fifth.
And the Azure Cloud Sect, whose card has come last every year for fifteen, comes first.
There is a pause. A murmur. An elderly man in a Formation Peak robe says loudly, “It is a fixing.” Madam Zhu laughs. Leng Jian, without expression, looks at the herald.
“It is a lot,” says Yan, in a thin voice. “It is a lot. It is a fair lot. I drew it myself.”
> truth | Say you'll take the first landing, as drawn. | +
> deceit | Say you'd prefer to go last. | ^
> mercy | Ask the old man to say what he's afraid of. | ^
> inquiry | Ask who drew the card before. | ^

=== stairs_a3s5 | The Old Man’s Objection
The Formation Peak’s delegate is eighty, in a robe embroidered with diagrams, and he does not like you. He crosses the courtyard on a stick, deliberately, and stops a foot from your nose.
“I was a champion once,” he says. “I climbed the stair when I was your age. I fought nine landings in a day. I will not see it undone by a purse and a basket of eels.” He pokes you in the chest. “If you are going to win, win. If not, go home.”
You are rather impressed. It is, in its way, the most honest thing anyone has said all week.
“I mean to,” you say. You discover that you do.
> truth | Tell him you'll climb it honestly. | +
> force | Tell him he's welcome to climb behind you. | ^
> mercy | Ask him to teach you the Formation Peak's first stance. | ^
> inquiry | Ask which landing was his hardest. | ^

=== stairs_a3s6 | The First Landing, Fairly
You fight honestly. It is the strangest part. You have schemed and swapped and bought your way to a fair start, and then you stand on the first landing, in front of a woman with a quarterstaff, and do it the plain way. You do it badly. You are knocked down twice. You win on a wrestling throw you learned from a boy of twelve at the Pavilion of Stone Wagers, and the courtyard erupts, and the old man from the Formation Peak mutters something into his beard that might be applause.
You climb. On the second landing a man in a tunic of hides is eating an egg.
“Hello,” he says. “You’re the one who bought a fair draw. It’s the nicest thing anyone has done for the stairs in years.”
> truth | Thank him. | +
> mercy | Share his egg. | ^
> inquiry | Ask what the stairs were like before. | ^
> quiet | Sit beside him. | ^

=== stairs_a3s7 | The Cost of Cheating
It leaks, of course. A thing like that always does. By the third day the delegates have heard that the draw was redone because of a bribe, and the rumour grows in the telling: the Azure Cloud paid a hundred taels, a thousand, the Elder herself came at night with a sack. Madam Zhu, passing you on the landing, says sweetly, “I do hope you will not be disqualified.”
You say nothing. Beside you the herald is sweating through his collar.
Duan Wuyi arrives at the foot of the stair at noon, a grey figure with a staff, and looks up at the champions, and at you. He descends no further than the first landing.
“A fair draw,” he says, mildly, “is one that has been drawn fairly. I find the question of its provenance outside my jurisdiction.” His eyes twinkle. “I would, however, advise the herald to eat something.”
> truth | Tell the herald the draw was right. | +
> deceit | Say nothing. | ^
> inquiry | Ask Duan whether he saw the brazier. | ^
> mercy | Fetch the herald a bowl of rice. | ^

=== stairs_a3s8 | The Sixth Landing
You reach the sixth landing on your own two feet, bruised, bloody, and amazed. Leng Jian is waiting. He has fought fifty champions this year and lost none, and he regards you with the polite weariness of a man who has seen the end of the story.
“I will tell you what I think,” he says, “as a courtesy. I think you won every landing but this one by the skin of your teeth. I think the stair is stronger than you. I think you know it.” He draws his sword. “I think you will climb anyway.”
He is right. You do.
You are knocked down. You get up. You are knocked down. You stay down, and the world swims, and the first thing you hear is his voice, somewhere above, saying, “Well fought.”
> truth | Smile. | stairs_close | +stairs_sixth
> mercy | Ask if he is hurt. | stairs_close | +stairs_sixth
> quiet | Lie still and look at the sky. | stairs_close | +stairs_sixth
> inquiry | Ask what the second form is. | stairs_close | +stairs_sixth

// ---------------------------------------------------------------- a4: the rule
=== stairs_a4s1 | The Book of Precedence
The Book of Precedence is kept in a locked cabinet in the herald’s office, and Herald Yan has to be talked into producing it. He holds it against his chest with both arms. “It is very old,” he says. “It is the Concord’s charter of precedence. I am not supposed to let anyone read it.”
“I am a witness of the Concord,” you say. “I would like to know the rule.”
He looks at the seal in your hand, the Censor-General’s. It is a tiny grey disc, bearing a closed eye. He sighs and opens the book on the table. It is seven hundred pages long, in a crabbed script. He turns to the last chapter.
“Here,” he says. “Landing by landing, the whole law of precedence. Read it as you like. I shall go and have a lie down.”
> inquiry | Read it from the beginning. | +
> truth | Ask him which clause the Azure Cloud Sect has always been struck down by. | ^
> quiet | Skim the last chapter. | ^
> force | Take the book to the Elder. | ^

=== stairs_a4s2 | Clause Forty
It takes you the afternoon. The language is dense, the stairs described as a sacred measure, the landings given the names of virtues. But in the middle, in a clause tucked between the precedence of the Salt Coast Guilds and the proper dress for a herald, you find it.
Clause Forty. A sect which is under audit by the Censor-General shall not be required to send a champion, nor shall its precedence be reduced for want of one.
You read it twice. You read it a third time, and then you copy it out, carefully, in your best hand.
The Azure Cloud Sect is under audit. It has been since Duan Wuyi climbed its mountain. By the Concord’s own charter, its chair should not be at the bottom.
> truth | Take the clause to the Elder. | +
> deceit | Take it to Lian Sheng's allies, and ask whom they trust. | ^
> inquiry | Ask Hao Lan what Clause Forty has been used for before. | ^
> force | Take it to the Assembly itself. | ^

=== stairs_a4s3 | Hao Lan’s Precedent
Hao Lan reads the clause in the corner of the guest-house with her chin on her fist. She has the brisk, glowing look of a girl who has been given a puzzle. She goes through three stacks of case law and comes out blinking.
“It’s been used twice,” she says. “Eighty years ago, and two hundred. Both times it was disputed. Both times the dispute went to a Council of Nine, and the Council ruled for the sect. Both times the sect’s Elder had to appear in person.” She swallows. “It’s a very strong clause. But it needs someone to argue it.”
“Who argues?” you say.
She looks at you.
“A witness,” she says. “It’s always a witness. The Elder can’t be seen to.”
> truth | Say you'll do it. | +
> mercy | Tell her you'll need her. | ^
> inquiry | Ask who sits on a Council of Nine. | ^
> quiet | Say you'll think about it. | ^

=== stairs_a4s4 | Nine Chairs
The Council of Nine meets in the round room at the top of the Stone Island, under the dome of blue glass. Nine delegates, one from each Peak, sit in nine chairs, and between them, in the centre of the floor, a small round table, on which is laid the Book of Precedence. The delegates wear their sashes. The herald, in a corner, is trembling.
You stand in front of the table in your travelling clothes. Beside you stands Hao Lan, who has insisted on coming and has brought forty-one pages of case law.
The delegate of the Sword Peak is Leng Jian. He is tall and grave. The delegate of the Alchemy Peak is Madam Zhu. The delegate of the Formation Peak is the old man with the stick. Six other faces, in other robes. They look at you.
“State the clause,” says Leng Jian.
> truth | Read Clause Forty aloud. | +
> inquiry | Ask the Council whether any member has ever been audited. | ^
> force | Tell the Council the Azure Cloud will not climb a stair for a chair it already owns. | ^
> mercy | Ask Madam Zhu whether she has ever been afraid of losing her seat. | ^

=== stairs_a4s5 | Madam Zhu’s Question
Madam Zhu steeples her fingers. She looks tired. “It is a good clause,” she says. “It is also a clause in a book nobody reads. The Concord is a body of habits. The habit is that Azure Cloud sits at the bottom. Why should the Council change a habit on the word of a stranger?”
Her tone is perfectly amiable. It is the tone of a woman who has asked a question to which she knows the answer.
The Formation Peak’s old man taps his stick on the floor. “She’s right,” he says, to your surprise. “A habit is a kind of law. You’ll want better than a clause.”
Leng Jian says nothing. He is looking at the book.
> truth | Say that a habit is only a rule no one has been brave enough to question. | +
> inquiry | Ask when the habit began. | ^
> mercy | Say the Azure Cloud has been punished enough. | ^
> force | Say you will stand on the stair until they agree. | ^

=== stairs_a4s6 | A Vote of Nine
They vote at dusk, with the lamps lit. Nine hands, nine stones in a copper bowl: white for the clause, grey for the habit. The herald, whose job it is to count them, has to be reminded twice how to tell the colours.
Four white. Four grey. The ninth stone is the Sword Peak’s.
Leng Jian holds it, a plain river pebble in the palm of his hand, for what seems a very long time. He looks at Madam Zhu. He looks at the old man. Last of all he looks at you, with an expression you cannot read.
“I fought forty champions on this stair,” he says. “I fought a boy who made a staff forget it was wood. I have not once in thirty years been asked a question I could not answer with a sword.”
He drops the stone in the bowl.
> truth | Wait. | stairs_a4s7
> quiet | Watch his hand. | ^
> mercy | Look at Hao Lan. | ^
> inquiry | Count the stones again. | ^

=== stairs_a4s7 | White
It is white.
The room is utterly silent. Then the old man from the Formation Peak thumps his stick on the floor and says, loudly, “Well! I never thought I would live to see it.” Madam Zhu laughs, a short surprised laugh, and claps three times, slowly. The Beast Peak’s delegate, a stout woman with an egg-shaped face, beams.
Leng Jian does not smile. But he rises, and bows to you, formally, from the waist.
“The Azure Cloud’s precedence is restored,” he says. “By the Concord’s own charter. I am going to find a drink.”
Hao Lan has her face in her hands. She is laughing and crying at once. Duan Wuyi, at the back of the room, with his staff, has an expression of the purest calm.
> truth | Thank them. | + | +stairs_precedence
> mercy | Go to Hao Lan. | ^
> quiet | Bow, and withdraw. | ^
> inquiry | Ask Leng Jian which drink. | ^

=== stairs_a4s8 | A Drink With the Sword Peak
He takes you to a tea-house on the Silver Canal, and orders rice wine, and drinks two cups in silence. Then he says, “I would like to understand something.”
You wait.
“I do not understand why you did it with a clause. A person who can make a staff forget its grain might have fought up the stair. I would have enjoyed that.” He turns his cup. “But you read a book. You found a rule. You won with a sentence.”
He raises his eyes.
“It is a kind of swordsmanship I have not met. I should like to learn it.”
> truth | Tell him he already knows it. | stairs_close | +stairs_leng_friend +stairs_precedence
> mercy | Offer to teach him, in exchange for the second form. | stairs_close | +stairs_leng_friend +stairs_precedence
> quiet | Pour his third cup. | stairs_close | +stairs_leng_friend +stairs_precedence
> inquiry | Ask what the second form is. | stairs_close | +stairs_leng_friend +stairs_precedence

// ---------------------------------------------------------------- hidden route: Qin’s lesson
=== stairs_h1 | A Form Taught on a Packed Earth Floor
In a corner of the courtyard, away from the herald and the champions, you set your feet in the second stance that Qin taught you in the sparring court. It is a plain form, a weight-shift, a pivot, a lowered shoulder, and nobody on the stair has used it in a century. Qin said so. He said it was a prayer that had forgotten what it was praying for.
You put it into your body slowly, as one puts a coin in a purse. The old muscles remember. You remember the court, the packed earth, the posts, the boy who held them. You remember how it felt to lose a bout well.
A shadow falls across you. It is Leng Jian. He is watching your feet with the focus of a man listening to a distant bell.
“That is the Seventh Form,” he says, slowly. “Of the Blind Sparrow school. It died with its master.”
> truth | Say a man named Qin taught it to you. | stairs_h2 | +stairs_qin_form
> quiet | Continue, and let him watch. | stairs_h2 | +stairs_qin_form
> inquiry | Ask what the Blind Sparrow school was. | stairs_h2 | +stairs_qin_form
> mercy | Offer to show him. | stairs_h2 | +stairs_qin_form

=== stairs_h2 | The Blind Sparrow
Leng Jian sits down on the courtyard steps. He takes off his sword and lays it across his knees. He is quiet for a time. Then he says, “My master’s master was of that school. She was blind. She fought with her ears, and she never lost a bout in sixty years. When she died her pupils scattered. One became a monk. One became a thief. One became a teacher of children, in a sparring court, below a gate.”
He looks at you.
“The form she taught was never written down. It is passed on by doing. Whoever does it right is her pupil.”
His voice is very gentle.
“You are, I think, her great-granddaughter in the art. It would be an honour to fight you.”
> truth | Say you would be honoured to fight him too. | stairs_h3
> mercy | Tell him you'd rather learn than fight. | stairs_h3
> quiet | Bow to him, in the old form. | stairs_h3
> inquiry | Ask him to show the first form. | stairs_h3

=== stairs_h3 | A Blind Sparrow in the Courtyard
You fight him in the empty courtyard at midnight. It is not like the stair. There are no heralds, no crowds; there is a swordsman and a mortal and a lantern on a wall. He fights with the plain steel blade in a way that suggests a thousand years of grace. You fight with a stick and a dead woman’s form.
When you land, you land on your back, laughing. He stands above you, sword up, with his face open, and then he laughs too, a short surprised bark.
“I have not been so happy in thirty years,” says Leng Jian.
He helps you up. He is, you discover, wearing an expression of absurd young delight.
> truth | Thank him. | stairs_close | +stairs_leng_friend +stairs_sixth
> mercy | Offer him a hand up in return. | stairs_close | +stairs_leng_friend +stairs_sixth
> quiet | Sit on the steps beside him and catch your breath. | stairs_close | +stairs_leng_friend +stairs_sixth
> inquiry | Ask what the first form is. | stairs_close | +stairs_leng_friend +stairs_sixth

// ---------------------------------------------------------------- close
=== stairs_close | Where the Azure Cloud Sits
The crowd on the Stone Island breaks into streams and trickles away, down the nine flights, into the city. The champions go to their lodgings. The herald goes to lie down. In the Assembly Hall, the carpenters are moving chairs.
+[a] stairs_a1 | You climbed the stair yourself, with a thread of black at your fingertips, and the whole courtyard saw.
+[a] stairs_a2 | You stood on a landing while a boy fought the finest swordsman of his generation for eleven minutes.
+[a] stairs_a3 | You bought a fair draw with silver and eels, and climbed it honestly.
+[a] stairs_a4 | You won your chair with a sentence, in a round room under blue glass.
+[b] stairs_precedence | The Azure Cloud Sect's chair is moved from the door to the third row, by the Concord's own charter.
+[b] stairs_sixth | You reached the sixth landing. The Sword Peak knows your name, and the Azure Cloud's chair is higher by six steps.
+[c] stairs_qin_form | Leng Jian recognised the Seventh Form of the Blind Sparrow in your feet, and has spoken of little else.
+[c] stairs_thread_seen | The slate junior saw the thread of black at your fingers. She told the herald she yielded, and told no one why.
+[c] stairs_ox_friend | Brother Ox has sent you a boiled egg by courier, wrapped in a note that says only: still warm.
+[c] stairs_gu_climbed | Gu Hanzhen fought the Sword Peak for eleven minutes, and the courtyard has started to call him by the name of his sword.
+[c] stairs_gu_refused_pill | Gu refused Madam Zhu's pill in front of the whole courtyard, and the Alchemy Peak is not smiling at him any more.
+[c] stairs_leng_friend | Leng Jian of the Sword Peak has asked for a lesson in swordsmanship by sentence.
+[c] stairs_yue_helped | Yue Zhaoning's eels bought a fair draw, and she is owed a favour.
> truth | Go and tell the Elder where her chair is. | stairs_close2
> quiet | Watch the carpenters carry the chair. | stairs_close2
> mercy | Find Gu, and bind whatever cuts he has. | stairs_close2 | bond:gu+2
> inquiry | Ask Duan Wuyi what the Assembly will make of the Azure Cloud now. | stairs_close2

=== stairs_close2 | The Elder’s Chair
The Elder stands in the Assembly Hall at dusk with her hands folded, watching a chair being carried across the floor. It is a plain chair of grey wood, with a carved crane on the back. The carpenters set it in the third row, beside the Slate Peak’s, and step back.
“I have sat at the door of this hall for twelve years,” she says. “I did not know it was an arrangement. I thought it was a punishment.” She looks at the chair. “It was both.”
+ stairs_precedence | The chair is in the third row now, by a clause nobody read for two hundred years.
+ stairs_sixth | The chair is six landings up the stair, by the sweat of a winner.
She turns.
“I do not know how to sit in a chair that is not the lowest,” she says. “It will take some practice.”
> truth | Offer to sit beside her, as practice. | hub_b2_city | +b2q_stairs npc:SU_STAIRS_CHAIR
> mercy | Fetch her a cup of tea. | hub_b2_city | +b2q_stairs npc:SU_STAIRS_CHAIR
> quiet | Stand beside her in the dusk. | hub_b2_city | +b2q_stairs
> inquiry | Ask what the third row will let her say. | hub_b2_city | +b2q_stairs
`,
  scenarios: String.raw`
$ SU_STAIRS_CHAIR | trust+3 respect+4 | elder | The Elder sees the Azure Cloud's chair moved up the hall, by a clause, a stair, or a fair draw.
hostile: I have a better chair, and I do not trust it. I will sit in it, as I sat in the other, and note who watches.
wary: A chair is a small thing. It is also the whole of a sect's standing at the Assembly. You have given me a good chair. I do not know what you will ask in return.
neutral: The third row. It is higher than I expected, and nearer the dais. I shall be able to see the Censors' faces. I do not know whether that is a gift or a hazard.
warm: I did not think I should ever sit in a higher chair in this hall. You have given me a window, Wanderer, where I had a door. I am grateful in a way I cannot express in a ledger.
devoted: For twelve years I sat by the door and told myself I preferred it. You have shown me I did not. I will sit up straight in the third row, and I will think of you every time I do.
`,
  remarks: String.raw`
% stairs_leng_later | since:stairs_leng_friend>=12 | elder | The champion of the Sword Peak sent me a short note: a single sentence, with a drawing of a sparrow. I do not understand it. I think it is meant for you.
% stairs_ox_later | since:stairs_ox_friend>=14 | gu | Brother Ox sent another egg. It is wrapped in a page of poetry. I think he is trying to say something. I think he is trying very hard.
% stairs_gu_later | since:stairs_gu_climbed>=16 & bond:gu>=10 | gu | I keep thinking about the second form. Leng Jian said I was the first in six years to make him use it. I did not know there was a second. I think there are a great many things I do not know there are.
`,
};
