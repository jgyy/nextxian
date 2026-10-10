import type { Arc } from "../types";

/**
 * Book Three, arc four: Ash and Daughters. A funeral-goods shop at the top of Bell Lane, kept by the woman who raised seven
 * children in a fire's aftermath. Four approaches: ask her outright (a1, truth), force the back door and meet Tian's knife
 * (a2, force), order a funeral and watch the house (a3, deceit), and work a day in the shop (a4, mercy). A hidden route shows
 * her the IX card, and she lets the player read the cards of the seven.
 * Cast: Madam Ash (Hui Niang), Bao Er, Tian, the Elder, a widow named Mrs Fen.
 */
export const mourning: Arc = {
  id: "mourning",
  name: "Ash and Daughters",
  scenes: String.raw`
=== mourning_entry | Bell Lane
Bell Lane climbs from the quay in forty steps, each worn into a shallow dish by feet. The houses lean together overhead. At the top, where the lane turns and the lighthouse spur begins, there is a narrow shop with a black door and a window full of paper. Paper houses. Paper horses. Paper servants with painted faces. A sign in neat white lettering reads: ASH & DAUGHTERS. FUNERAL GOODS. NO CHARGE FOR GRIEF.
A bell hangs over the door. You do not need to ring it.
The door opens before your hand reaches it. A woman of fifty stands in the doorway, in a plain black gown buttoned to the throat. Her hair is iron-grey and pinned simply. She has a kind, tired face, and she is holding a half-folded paper crane.
“Good morning,” she says. “May I help you?”
She says it to you exactly as she would say it to a stranger. She has not blinked.
> truth | Say that you know who she is, and who you are. | mourning_a1s1
> force | Push past her into the shop. | mourning_a2s1
> deceit | Say that you wish to order a funeral. | mourning_a3s1
> mercy | Ask whether she needs a hand with the cranes. | mourning_a4s1
> inquiry | Show her the brown card marked IX. | mourning_h1 |  | card_9 | You do not yet hold a card to show her.

// ---------------------------------------------------------------- a1: asking outright
=== mourning_a1s1 | Good Morning
“Of course,” says Madam Ash. She does not seem surprised. She steps back, holds the door wide, and lets you through. “Come in, then. Mind the rabbits. They are very lifelike.”
The shop is long and narrow and dim. Paper hangs from every beam. Rows of bamboo shelves hold folded boats, lanterns, gowns, a whole paper village, and on the counter a stack of ledgers bound in black cloth. At the back, a door stands ajar on a room you cannot see. Somewhere beyond it a girl is humming.
Madam Ash sets down her crane. “You are Nine,” she says, in the manner of a woman reading a label. “You are in good health. You are rather taller than I imagined.”
Her voice is warm. It is also quite empty of anything else.
> truth | Say you did not know you were awaited. | mourning_a1s2
> quiet | Say nothing, and look at the back door. | mourning_a1s2
> mercy | Say you are glad to meet her. | mourning_a1s2
> inquiry | Ask how she knew you were coming. | mourning_a1s2

=== mourning_a1s2 | A Pot of Tea
“I did not know,” says Madam Ash. “I never do. I hope. It is rather more restful.” She leads you to a low table by the window, where a pot and four cups are already laid. She pours. The tea is smoky and slightly bitter. “I laid four cups on the off chance. I have laid four cups every morning for fifteen years. If nobody comes I give the tea to the neighbour’s cat.”
She sits with great composure.
“You have questions. Let me save you the trouble of asking them in the wrong order. I am Hui Niang. The harbour calls me Madam Ash. I was a Censor, and then I was nothing, and now I sell paper. I have raised seven children. I did not raise you.”
She lifts her cup.
“That is the first question answered. What is the second?”
> truth | Ask why she did not raise you. | mourning_a1s3
> inquiry | Ask who the seven are. | mourning_a1s3
> mercy | Ask whether they are well. | mourning_a1s3
> quiet | Drink the tea. | mourning_a1s3

=== mourning_a1s3 | Because You Were Not There
“Because you were not there,” says Madam Ash. She says it simply, without reproach. “On the night of the Sealing the east dormitory caught fire. Nobody knows how. A lamp, a tipped brazier, a girl’s candle. The Law Hall guard fled. I was in the courtyard, in my robe of office, to witness the Great Sealing for the Concord. I had refused to sign it. They had not yet decided what to do with me.”
She turns the cup.
“I ran into the dormitory. The cots were in a row. Nine of them, numbered, with brown cards on the rail. Two were empty. Seven were not. I took them in my arms, two at a time, three. I came out with my sleeves alight.”
She looks up. Her eyes are a pale, steady grey.
“The Registrar had been before me,” she says. “She took two, and left seven in the fire. I do not forgive her for it. I want you to know that I have not tried.”
> truth | Say that the Elder has not forgiven herself either. | mourning_a1s4 | npc:SU_MOURNING_ASH
> inquiry | Ask how long the fire burned. | mourning_a1s4
> mercy | Say you are sorry for the seven. | mourning_a1s4
> quiet | Hold the cup. | mourning_a1s4

=== mourning_a1s4 | A Kind Woman’s Bitterness
“I am sure she has not,” says Madam Ash. “She is a conscientious woman. I knew her at the Academy. She was the sort who apologised to furniture.” The ghost of a smile touches her mouth. “I admired her. I would give a great deal to be able to hate her properly, and I have not the skill. She did what she could in the dark. I did what I could in the fire. The arithmetic of that night is not a thing I enjoy.”
She sets down her cup.
“But I will tell you this, since you came to ask. When she came back for the rest, she brought a single boy out of the smoke. She had a choice of three. She chose the one who was already crying.” Her voice is very quiet. “I have thought about that choice for fifteen years.”
> truth | Ask what she thinks the choice meant. | mourning_a1s5
> mercy | Say that crying is the sign of life. | mourning_a1s5
> quiet | Look at the cat on the sill. | mourning_a1s5
> inquiry | Ask which of the three was not chosen. | mourning_a1s5

=== mourning_a1s5 | The Rule
“It meant nothing,” says Madam Ash. “I have told myself it meant nothing, which is a decision. I took the others, and I told them what I tell everyone: that nothing offered to a child is a gift.”
She says it the way a priest says a creed.
“A child who is given a roof, a bowl, a name, a purpose, owes it. She owes it all her life. She cannot refuse, because she does not know how. She is raised to repay. I have seen it in the Law Hall. I have seen it in the Concord. I have seen what it makes of a person.” She stands, and the gown whispers. “So I did not give them gifts. I gave them wages. I gave them a ledger of their own. They paid for their own rice, from the age of six. They kept accounts.”
She smiles, and it is a strange smile.
“It is the only love I know that cannot be called a debt.”
> truth | Say that it sounds lonely. | mourning_a1s6
> inquiry | Ask whether any of them stayed. | mourning_a1s6
> mercy | Say it sounds like a kindness. | mourning_a1s6
> quiet | Nod slowly. | mourning_a1s6

=== mourning_a1s6 | Seven Ledgers
“Some,” says Madam Ash. She goes to the counter and takes down one of the black ledgers, and opens it flat. The pages are ruled in columns: rice, oil, shoes, tuition, a column headed owed and another headed paid. In a small neat child’s hand, a name has been written at the top: Bao Er. Down the page, in six-year-old figures, are the costs of a life.
“Bao Er pays for the shop’s candles,” says Madam Ash. “She sings at funerals. She pays me back at a penny a song. She has paid in full, as of the new year. I told her she could stay or go. She stayed.”
She closes the book and strokes its cover.
“That is the point. She stayed because she wished to.”
Behind the half-open door, the humming stops.
> truth | Ask to meet her. | mourning_a1s7
> quiet | Wait. | mourning_a1s7
> mercy | Say you are glad she stayed. | mourning_a1s7
> inquiry | Ask whether she knows who you are. | mourning_a1s7

=== mourning_a1s7 | A Voice from the Back
“I know exactly who she is,” says a girl’s voice, from the doorway. “I have known for a week. The whole shop knows.”
The girl is perhaps twenty. She is tall and rangy, in a patched grey tunic, with a rope of black hair down her back and a face too mobile for stillness. She is leaning on the frame with her arms folded and one eyebrow cocked. Her eyes are the same pale grey as Madam Ash’s, though they are not related. They are very sharp.
“Hello, Nine,” she says. “I am Three.” She grins, disarmingly. “Bao Er. I am the loud one.”
She looks you up and down, once.
“You are nothing like I expected,” she says. “I am enormously relieved.”
> truth | Ask what she expected. | mourning_a1s8
> mercy | Smile. | mourning_a1s8
> quiet | Say nothing. | mourning_a1s8
> inquiry | Ask what she means by relieved. | mourning_a1s8

=== mourning_a1s8 | A Gift Offered
“I expected a monster,” says Bao Er cheerfully. “Or a saint. The aunties have been telling us for fifteen years that Nine would come, and it would be terrible, and we would be saved, or damned, or both. You are just a girl with tea on her sleeve.” She laughs. “It is the best news I have had all year.”
Madam Ash has taken a small object from her sleeve. It is a key, a plain black key on a ribbon. She holds it out.
“This is the key to the door at the back of the shop,” she says. “It leads to the house. If you take it, you may come and go as you please. You may sleep here. You may take what you need.” She meets your eyes. “It is a gift. I do not give gifts. I am offering one. I want you to refuse it, if you wish to. I want to see how.”
> truth | Refuse it, and say why. | mourning_close | +mourning_refused_key
> mercy | Accept it, and say thank you. | mourning_close | +mourning_took_key
> quiet | Take it, and offer a penny in exchange. | mourning_close | +mourning_paid_key
> inquiry | Ask what happens if you take it, and what if you do not. | mourning_close | +mourning_asked_key

// ---------------------------------------------------------------- a2: force the back
=== mourning_a2s1 | The Bell
You push past her. It is not graceful. The black door swings, the bell jangles, and a rack of paper horses goes over with a sound like a flock of startled birds. Madam Ash does not cry out. She simply watches you go, the half-folded crane in her fingers, and says in a tone of faint disappointment, “Oh, dear.”
Ren Qiao is a pace behind you with his hand on his sword. Gu is behind him, white as paper. The shop is dim, and long, and crowded with shelves. At the back there is a door, and beyond the door a staircase going down.
You take it.
Behind you the voice of Madam Ash says, very quietly, to no one: “Tian. Visitors.”
> force | Run for the stairs. | mourning_a2s2
> truth | Stop and say that you mean no harm. | mourning_a2s2
> quiet | Go slowly. | mourning_a2s2
> inquiry | Ask Ren what he heard. | mourning_a2s2

=== mourning_a2s2 | The Cellar
The stair goes down into a cellar that is much larger than the shop. It is a long vaulted room, lined on both sides with racks of coffins. They are all sizes, from a hand’s length to a man’s, lined with white silk. A lamp burns at the far end. Between the racks lies a path of swept stone.
Nothing moves.
You reach the middle of the room when you hear it: a soft click, like a pebble dropped on stone. A second. A third. Then something very fast comes out of the dark, and you have time to see a flash of steel and a pair of narrow furious eyes before Ren Qiao’s sword is up and ringing.
“Back,” says Ren.
The intruder lands on the coffin-rack, crouched, a long knife in each hand. It is a boy of sixteen or seventeen. He is small and wiry, with a dirty bandage on his forearm and a face like a thundercloud.
“You,” he says to you, in a flat hard voice. “You are the reason.”
> force | Draw your own blade. | mourning_a2s3
> truth | Ask him what he means. | mourning_a2s3
> quiet | Hold up your empty hands. | mourning_a2s3
> mercy | Tell him you are sorry, whatever it is. | mourning_a2s3

=== mourning_a2s3 | Tian
“Seven,” says the boy. “I am Seven. They call me Tian. I am the youngest. I was the one who could not get out.” He steps down from the coffin-rack, the knives held low. “You want to know what I remember? I remember the smoke. I remember a cot with a number on the rail. I remember that I was too small to climb down, and that a woman in a black sleeve picked me up.”
He bares his teeth.
“And I remember that the woman who took you did not come back for me. She came back for one boy. She stood at the door and looked at us, and she chose.” He gestures at his bandaged arm. “I have this. It is from the cot. Where do you have yours?”
You open your mouth. Ren Qiao, beside you, says very softly, “He is not wrong.”
> force | Say the Elder chose what she could. | mourning_a2s4
> truth | Tell him the Elder has been sorry for fifteen years. | mourning_a2s4
> quiet | Say nothing. | mourning_a2s4
> mercy | Tell him you wish you had been in the fire with him. | mourning_a2s4

=== mourning_a2s4 | Two Knives
He comes at you. He does not wait for an answer. It is a boy’s attack, savage and untrained, all speed and no thought, and Ren Qiao parries it twice before you can move. Tian drops under the third, rolls, and is on his feet again with a knife in each hand and blood on his cheek.
“Stop,” you say.
“No.”
He lunges. The knives are good ones, balanced for throwing, and they sing in the lamplight. Gu yelps. Ren Qiao grunts. The coffin-racks rattle. Somewhere in the dark a hinge squeals.
Then a great clear voice, in the cellar doorway, says, “Tian, if you cut anyone I will make you iron the funeral clothes for a month.”
The boy checks. Bao Er is standing at the foot of the stairs with her arms folded, looking exasperated.
“I am not joking,” she says. “I have seen you iron.”
> force | Lower your blade. | mourning_a2s5
> truth | Thank Bao Er. | mourning_a2s5
> quiet | Step back. | mourning_a2s5
> inquiry | Ask Bao Er whether this happens often. | mourning_a2s5

=== mourning_a2s5 | Aunties
“Every second Tuesday,” says Bao Er. She crosses the cellar with the lazy swagger of a woman who has performed this role before. She puts a hand on Tian’s shoulder and he flinches, but does not shake it off. “He gets overwrought. We think it is the pastries.” She smiles at you, a sudden bright flash of a smile. “Hello. I am Three. You must be the famous one.”
“Famous,” says Tian, with scorn.
“Famous,” says Bao Er. “It is a stage name. Nobody has asked for it.” She turns him around by the shoulder to face you. “Say sorry.”
“I will not.”
“Say it.”
“No.”
Bao Er raises her eyebrows at you in a gesture that means: boys. “He will, in about a decade,” she says. “Come upstairs. Mother has the kettle on.”
> force | Follow her. | mourning_a2s6
> truth | Tell Tian you are not asking him to be sorry. | mourning_a2s6
> quiet | Sheath your sword. | mourning_a2s6
> mercy | Bandage his cheek. | mourning_a2s6 | +mourning_bandaged_tian

=== mourning_a2s6 | Mother’s Kettle
Upstairs, Madam Ash is pouring tea. She does not look at the toppled horses, or the mud on the stair, or the cut across the boy’s cheek. She sets out cups with a firm unhurried grace, as though the morning were proceeding precisely as arranged.
“You pushed past me,” she says to you. “It was not polite. But I think it was honest. I would rather a guest were honest than polite.” She hands Tian a cup. He takes it, scowling. “I would also like to point out that you did not draw on him first.”
“I would have,” you say.
“I know.” Madam Ash smiles. “But you did not. I am noting that.”
She pours her own tea.
“Tian is my youngest. He is also my angriest. I should like you to understand that it is not your fault. It is mine. I let him believe it was yours, because it was easier.”
> force | Say you will help him with the anger. | mourning_a2s7
> truth | Say it is not her fault either. | mourning_a2s7
> quiet | Take the cup. | mourning_a2s7
> mercy | Ask Tian what he would like to know. | mourning_a2s7

=== mourning_a2s7 | What Tian Asked
Tian sits on the floor with his back to the counter and his knees drawn up. He does not look at you. He picks at the edge of his bandage, and tears a strip off, and winds it round his finger.
“What was it like?” he says at last. “Outside?”
You blink.
“You got out. You were in a basket. She took you away to a village, and you grew up in the sun, and you ate rice-cakes.” His voice cracks, then steadies. “What was it like? Not being in the Law Hall? Not knowing?”
The room is very quiet. Bao Er has stopped smiling.
You search for the answer. You find that there is no easy one.
“I did not know I was missing anything,” you say, slowly. “I only knew there was a lamp I wanted to reach.”
Tian looks up.
> force | Tell him about the village. | mourning_a2s8
> truth | Tell him about the lamp. | mourning_a2s8
> quiet | Sit down on the floor beside him. | mourning_a2s8
> mercy | Tell him he can come and see. | mourning_a2s8

=== mourning_a2s8 | A Wary Truce
Tian does not forgive you. He does not do anything so simple. He listens to every word, with a frown, and when you have finished he says nothing for a long time. Then he gets up, dusts the knees of his trousers, and goes out through the back, and the door shuts.
“That,” says Bao Er, in a low voice, “is a good sign.”
Madam Ash is watching the door. Her face is unreadable.
“He has not said a whole sentence to a stranger in six months,” she says. “He said three to you.” She takes up her teapot. “I do not know what you did. I should like you to do it again.”
She puts the pot down.
“I have a gift for you,” she says. “Take the key, if you wish. Or do not. I will not mind.”
> force | Take the key. | mourning_close | +mourning_took_key
> truth | Refuse the key, and say why. | mourning_close | +mourning_refused_key
> quiet | Take it, and pay a penny for it. | mourning_close | +mourning_paid_key
> mercy | Leave it where it lies. | mourning_close | +mourning_refused_key

// ---------------------------------------------------------------- a3: ordering a funeral
=== mourning_a3s1 | An Order
“A funeral,” says Madam Ash. She lays her paper crane on the counter and takes up a pen. “I am so sorry for your loss. Whose?”
“My mother’s,” you say. It comes out smoothly enough. Behind you Hao Lan, who has been persuaded to come as an elderly cousin, makes a small choked sound.
“I see. And what was her occupation?”
You glance at Hao Lan. She says in a thin voice, “She sold lamp oil.”
“A lamp-oil seller.” Madam Ash writes. Her pen scratches in the stillness. “How lovely. A trade of light. We have a paper lantern in white and gold that is just right for that. And a small ship, if she travelled. Did she travel?”
“Frequently,” says Hao Lan.
Madam Ash lifts her eyes. They are mild, and grey, and entirely without suspicion. “Then a ship,” she says. “Of course.”
> deceit | Describe the funeral you want. | mourning_a3s2
> truth | Admit that you made it up. | mourning_a3s2
> quiet | Look at the paper goods. | mourning_a3s2
> inquiry | Ask to see the workshop. | mourning_a3s2

=== mourning_a3s2 | The Workshop
“The workshop,” says Madam Ash, “is private. But I can show you the pattern books. They are not at all secret.” She leads you to a shelf and takes down a fat album bound in black cloth. “I have been building paper for forty years. I have built every kind of house. Every kind of servant. Every kind of boat.”
She turns the pages. Each leaf bears a sketch, delicate and exact, with notes in the margin: height, lining, how to fold. The sketches are beautiful. They are also curiously repetitive. On every page there are the same nine small figures, set in a row.
“Who are they?” you ask.
Madam Ash turns the page. “Servants,” she says. “For the dead. A household should be complete.”
She does not look at you. “Nine is the traditional number for a lamp-oil seller.”
> deceit | Say nothing. | mourning_a3s3
> truth | Ask why nine. | mourning_a3s3
> quiet | Study the figures. | mourning_a3s3
> inquiry | Ask why one is smaller. | mourning_a3s3

=== mourning_a3s3 | Eight Servants and One
You notice it only when you look closely. On every page, among the nine paper servants in their row, there are eight with faces and one without. The ninth is a blank white shape, with no features, standing at the end of the line. On some pages it is drawn dim. On others it is only an outline.
“A custom,” says Madam Ash. “A blank servant. For the one who is not yet born. Or not yet found.”
Hao Lan has taken up the album. She turns the pages with trembling fingers. “It is on every page,” she says. “Every pattern. Every design. For forty years.”
“Forty years is a long time,” says Madam Ash.
“But there were not nine children until fifteen years ago.”
There is a pause.
“No,” says Madam Ash. “That is true.” She takes the album gently out of Hao Lan’s hands. “I draw things before they are needed. It is a habit.”
> deceit | Let it go. | mourning_a3s4
> truth | Say you do not believe it. | mourning_a3s4
> quiet | Look at the door at the back. | mourning_a3s4
> inquiry | Ask who the first one was drawn for. | mourning_a3s4

=== mourning_a3s4 | The First Pattern
“For a woman called Ling,” says Madam Ash.
The shop is perfectly still.
“The Order of the Torn Page draws her household. It is the oldest custom the Lotus keeps. Eight pupils with faces, and the ninth blank, because her ninth never came.” She runs her thumb along the edge of the album. “I inherited the pattern when I joined. I drew it for years without knowing what it was for. I thought it was a charm.”
Your mouth is dry.
“Then I walked into a burning dormitory,” says Madam Ash, “and there were nine cots, and two of them were empty. I have drawn that pattern every day since. I have not been able to stop. I think it is the only prayer I know.”
> deceit | Ask what she did before the fire. | mourning_a3s5
> truth | Ask what Ling was like. | mourning_a3s5
> quiet | Take Hao Lan’s hand. | mourning_a3s5
> inquiry | Ask where Ling is now. | mourning_a3s5

=== mourning_a3s5 | The Clerk
“I was a clerk,” says Madam Ash. She says it with great plainness. “I am telling you because you asked, and because I do not lie to customers. I was a clerk of the Seventh Chancery, and then a Censor, and I was proud of my hand.”
She lays the album on the counter and folds her hands over it.
“The year before the Sealing, I drafted a rota. A very dull paper. It assigned the east dormitory of the Law Hall to the Concord’s care, for the reserve. It listed nine cots. I wrote the number myself. I had no idea what I was writing. I thought it was a boarding school.”
She lifts her eyes.
“I walked out of the fire with seven children, and a number I had written on every one of their rails.” She smiles, but it is a small and broken smile. “Do you wish to cancel the order, madam? I will understand if you do.”
> deceit | Say you wish to continue. | mourning_a3s6
> truth | Say that you are not a customer. | mourning_a3s6
> quiet | Say nothing. | mourning_a3s6
> mercy | Say you forgive her, on someone’s behalf. | mourning_a3s6

=== mourning_a3s6 | The Door
“Of course,” says Madam Ash. “Of course you are not.” She takes off her spectacles and rubs her eyes. “I have been waiting for you for fifteen years. I have had a great deal of time to think what I would say, and now it has come I find I do not have anything prepared.”
She straightens.
“Come through. They are all in the back. I would prefer that you saw them as they are, rather than as I have told them to be.”
She opens the door. A short passage, lit by a lantern; a curtain of beads; a bright room beyond, loud with the clatter of a family at its tea. A woman is laughing. A child is arguing. A pot is boiling over.
Ash stands aside.
“They are not expecting you,” she says. “I did not tell them. I wanted to see whether you would knock.”
> deceit | Knock. | mourning_a3s7
> truth | Walk in. | mourning_a3s7
> quiet | Wait in the passage. | mourning_a3s7
> mercy | Ask Hao Lan to go first. | mourning_a3s7

=== mourning_a3s7 | The Back Room
The back room is warm and low and crowded. A long table runs down the centre of it, laid with bowls and dishes. At the head sits Bao Er, her feet up, a bowl of noodles in her fist, in the middle of an argument with a young man who is making a face. Tian is in the corner, sulking over a whittled stick. A girl you do not know is cutting bread. She has a grey tunic and a plait and an air of pained patience.
Nobody has seen you yet.
Then Bao Er looks up from her noodles. Her mouth falls open.
“Mother,” she says, in a high thin voice. “There is a stranger in the passage. She has the face.”
There is a clatter of chopsticks. Everyone turns. Eleven pairs of eyes fix on you. For one long moment nothing breathes.
Then somebody, in a wondering voice, says, “Nine.”
> deceit | Say hello. | mourning_a3s8
> truth | Say your name. | mourning_a3s8
> quiet | Raise a hand. | mourning_a3s8
> mercy | Smile. | mourning_a3s8

=== mourning_a3s8 | A Table for Nine
They make room. Nobody asks you to sit. Bao Er shoves a bench along with her foot. The bread-cutter pushes a bowl across the table, and the young man with the face moves his elbow. It is done wordlessly, as a family arranges itself around an extra guest. Tian does not move from his corner, but his stick has stopped.
Madam Ash comes in last. She stands at the end of the table.
“I have a rule,” she says. “I do not give gifts. But I set a table every night for nine. There has never been a ninth to sit at it.” She lays her hand on the empty chair at the foot. “It is not a gift. It is a place. You may use it or not.”
She looks round the table. “If any of you has anything to say, I would hear it now.”
Nobody speaks.
> deceit | Sit down. | mourning_close | +mourning_sat_table
> truth | Stay standing, and thank her. | mourning_close | +mourning_sat_table
> quiet | Take the chair, and say nothing. | mourning_close | +mourning_sat_table
> mercy | Ask Tian if he would pass the rice. | mourning_close | +mourning_sat_table

// ---------------------------------------------------------------- a4: a day's work
=== mourning_a4s1 | The Cranes
“I would not say no,” says Madam Ash, after a moment’s study. She puts the unfinished crane into your hand. “You fold from the corner. Like this. It is called a mourning crane, and it must be white. A white crane goes with the dead and tells the gods that someone remembers.”
She shows you the fold. It is a delicate, difficult one, a series of tiny tucks and turns, and it takes you six tries before one stands upright. Madam Ash does not smile when it does. She nods.
“Again,” she says. “We need nine hundred and ninety-nine.”
“Why that many?”
“Because it is the traditional number for a rich man’s funeral.” She hands you a pile of paper. “Mrs Fen’s husband was a salt-factor. He died on Tuesday.”
Gu, behind you, has already begun to fold.
> mercy | Fold. | mourning_a4s2
> truth | Ask why she lets a stranger do this. | mourning_a4s2
> quiet | Fold in silence. | mourning_a4s2
> inquiry | Ask who Mrs Fen is. | mourning_a4s2

=== mourning_a4s2 | A Day in the Shop
You fold for four hours. The pile of white cranes grows on the counter, a drift of tiny wings. The shop comes alive around you: customers in black, whispering; Bao Er in a back room, practising a lament; a girl with a plait counting coins; a boy sweeping the same square yard of floor for the third time. The door-bell rings. Madam Ash receives each customer as she received you, with the same gentle, impersonal grace.
You learn the shop’s rhythm. At the third bell a widow comes for a lantern. At the fourth, a child for a paper horse. At noon the baker’s boy brings rolls, and Madam Ash pays him in coin, counted out, a penny short, and reminds him to bring it next time.
“Is it a game?” you ask.
“It is a policy,” she says.
> mercy | Keep folding. | mourning_a4s3
> truth | Ask what the policy is. | mourning_a4s3
> quiet | Watch her. | mourning_a4s3
> inquiry | Ask what she charges Mrs Fen. | mourning_a4s3

=== mourning_a4s3 | Mrs Fen
Mrs Fen comes at noon. She is a stout woman of fifty-five, in layers of black, and she is trying very hard not to cry. She has a strong plain face and the stiff hands of a person who has not stopped working since the death. She has come, she says, for the cranes. And the house. And a horse.
“How is the funeral?” says Madam Ash.
“It will be fine,” says Mrs Fen.
She is not fine. She is a woman holding a tray of broken china. Madam Ash looks at her for a long moment. Then she comes round the counter and, without a word, takes Mrs Fen’s hands in both her own.
“Sit,” she says. “Have some tea. We have your cranes. They are lovely. This apprentice folded forty of them.”
She means you.
Mrs Fen looks at the cranes, and then at you, and her chin begins to wobble.
> mercy | Hold out a crane. | mourning_a4s4
> truth | Say you are sorry for her loss. | mourning_a4s4
> quiet | Pour the tea. | mourning_a4s4
> inquiry | Ask her about her husband. | mourning_a4s4

=== mourning_a4s4 | What Mrs Fen Said
She tells you about him. She tells you how he snored. She tells you how he always lost his hat. She tells you he kept a book of figures that he never showed anyone, and when she opened it after his death she found it was not figures but poems, very bad ones, about her.
She laughs, and then she weeps, a loud helpless honking sob that startles the cat.
“I do not know what to do with them,” she says. “I am going to burn them at the funeral and I do not want to.”
“Then do not,” says Madam Ash. “Keep one.”
“Which?”
“Whichever is worst.”
Mrs Fen stares. Then she laughs, a wet, startled bark, and wipes her eyes on her sleeve. “The one about my feet,” she says. “That is definitely the worst.”
“Then that is the one you keep,” says Madam Ash. “It is a better monument than anything I sell.”
> mercy | Smile. | mourning_a4s5
> truth | Say you wish you had known him. | mourning_a4s5
> quiet | Fold another crane. | mourning_a4s5
> inquiry | Ask Madam Ash whether she said that to every widow. | mourning_a4s5

=== mourning_a4s5 | The Policy
“Every one,” says Madam Ash, when Mrs Fen has gone. She is arranging the paper horse in its box. “It is my policy. I do not tell them to grieve. I do not tell them to stop. I tell them to keep one thing. It is a modest request, and they always manage it.”
She straightens the horse’s ears.
“I do not charge for grief. I charge for paper. It seems to me the only honest distinction in the whole of the funeral trade.” She looks at you sidelong. “You folded forty. Why?”
“You asked,” you say.
“I did not ask. I handed you a crane.” She shakes her head. “You could have refused. You did not. Do you understand what that means?”
You think. “That I wanted to.”
“That you had no idea you could say no,” says Madam Ash.
> mercy | Say you are learning. | mourning_a4s6
> truth | Ask her to teach you how. | mourning_a4s6
> quiet | Put down the paper. | mourning_a4s6
> inquiry | Ask when she learned. | mourning_a4s6

=== mourning_a4s6 | How to Refuse
“I learned at forty-three,” says Madam Ash. She takes down a stool and sits you on it, in the middle of the shop, in front of a mirror hung between two paper lanterns. “From a book. It was a little blue one by a nun. It said that the most useful word in the language is no, and that it should be practised in private, like a scale.”
She stands behind you. In the mirror, you see her hands rest on your shoulders.
“Say it,” she says.
“No.”
“Again. Like you mean it.”
“No.”
“Again. Like it costs something.”
The word rings in the narrow shop. It catches in your throat. You say it a third time, and the cranes on the counter rustle, and a lantern swings, and for a moment you can hear, quite distinctly, the old voice of the village woman who said every morning, Eat your rice, there’s a good girl.
> mercy | Say it a fourth time. | mourning_a4s7
> truth | Say it, and add why. | mourning_a4s7
> quiet | Say it softly. | mourning_a4s7
> inquiry | Ask her what she wishes you to refuse. | mourning_a4s7

=== mourning_a4s7 | What She Wished
“Me,” says Madam Ash.
Her hands are still on your shoulders. They are firm and warm. In the mirror her face is composed and gentle and utterly serious.
“I should like you to refuse me. I have waited fifteen years to be refused. I have arranged my whole life so that when you came, I could give you no gift that you could not decline. I should like to see you do it.”
Her voice breaks very slightly.
“I should like to be a person who can be told no, and does not mind.”
The shop is perfectly silent.
In the doorway, unseen, Bao Er has stopped with a bowl in her hands. She is crying quietly, and trying to hide it.
> mercy | Say no, gently. | mourning_a4s8 | +mourning_refused_ash
> truth | Say you do not want to refuse her. | mourning_a4s8
> quiet | Take her hands in yours. | mourning_a4s8
> inquiry | Ask what she wishes to be refused for. | mourning_a4s8

=== mourning_a4s8 | The Black Key
Madam Ash lets go. She goes to the counter, and opens a drawer, and takes out a key. It is plain and black and hangs on a ribbon.
“This opens the door at the back,” she says. “It leads to the house. I am offering it to you. You may take it or not.”
She does not push it into your hand. She lays it on the counter between you.
“If you take it, it is a gift, and I have broken my rule. If you do not take it, I will understand, and I will lay a place at the table anyway.” She smiles, tired and clear. “I find that I am prepared for either. It is a new sensation.”
> mercy | Take the key. | mourning_close | +mourning_took_key
> truth | Leave it where it lies. | mourning_close | +mourning_refused_key
> quiet | Take it, and pay a penny. | mourning_close | +mourning_paid_key
> inquiry | Ask her to keep it for you. | mourning_close | +mourning_asked_key

// ---------------------------------------------------------------- hidden: the cards
=== mourning_h1 | The Brown Card
You lay the brown card on the counter, between the cranes. IX in black ink. The coarse paper is soft with handling. You turn it over. On the back, in faded ink, in a hand you do not know: She will ask. Answer her.
Madam Ash looks at it for a long time. She does not touch it.
“Where did you get that?” she says.
“From the Elder.”
“Of course.” She exhales slowly. “It was in her basket. I never thought to ask.” She goes to the door of the shop and turns the sign to Closed. She draws the bolt. Then she goes to a tall cabinet at the back, takes out a ring of keys, and selects a small brass one.
“I have seven,” she says, with her back to you. “Seven cards. I have kept them in a box for fifteen years. I have not read them. I do not think I had the right.”
She turns.
“I think you have.”
> inquiry | Ask her why she did not read them. | mourning_h2
> truth | Thank her. | mourning_h2
> mercy | Say she has the right too. | mourning_h2
> quiet | Wait. | mourning_h2

=== mourning_h2 | The Box
The box is a plain black lacquer one, no bigger than a tea-caddy. Madam Ash sets it on the counter and opens the lid with her key. Inside, on a bed of white silk, lie seven brown cards, in a row, each bearing a Roman numeral and a smudge of old soot.
“They were in the cots,” she says. “I took them from the rails, in the fire. I put them in my sleeve. I did not know why.” Her hand hovers. “They are theirs. Each belongs to a child. I thought: if I read them, I take something. If I do not, I keep something. I kept.”
She takes up the first. I.
“I will not turn it over,” she says. “I will not. But I think, perhaps, you ought to.”
She holds it out.
> inquiry | Take it. | mourning_h3
> truth | Say you will not read it without its owner. | mourning_h3
> mercy | Ask her to turn it herself. | mourning_h3
> quiet | Look at the box. | mourning_h3

=== mourning_h3 | Seven Lines
You turn the cards over one by one, with the shop shut and the sun in a bar across the floor. You read what is on the back of each. They are all in the same faded hand. They are all one line long. You read them in order, and then you read them again.
Carry what is heavy.
Mend what is torn.
Sing what is struck.
Light what is dark.
Seal only what asks.
Write what is true.
Keep what is small.
Madam Ash has her hand over her mouth. She is not weeping. She is simply staring, with an expression of dawning, appalled wonder.
“It is a vow,” she says. “It is one vow. Divided among them. I have been raising a sentence.”
> inquiry | Read the vow aloud. | mourning_close | +mourning_cards_seen
> truth | Say it needs eight. | mourning_close | +mourning_cards_seen
> mercy | Say you will tell each of them, when they are ready. | mourning_close | +mourning_cards_seen
> quiet | Put the cards back, one by one. | mourning_close | +mourning_cards_seen

// ---------------------------------------------------------------- close
=== mourning_close | The Black Ribbon
It is evening when you leave Ash and Daughters. The lamps are coming on along Bell Lane, small and golden, in the windows of the whitewashed houses. The sea has gone the colour of slate. In the shop window the paper figures stand in their row, nine of them, one blank.
+[how] mourning_took_key | The black key hangs round your neck on its ribbon. You have broken a rule that was made to be broken, and neither of you is certain that you were right.
+[how] mourning_refused_key | You refused the key. Madam Ash looked relieved, and a little bereft, and laid a place at the table anyway.
+[how] mourning_paid_key | A penny paid for a key. Madam Ash has pinned it to the wall above the till, beside a card that says NO CHARGE FOR GRIEF.
+[how] mourning_asked_key | The key lies in a drawer behind the counter, kept for you, and the drawer is unlocked.
+[extra] mourning_sat_table | You sat at the table for nine, in the empty chair. Nobody spoke, and everyone was glad.
+[extra] mourning_refused_ash | You told Madam Ash no. She sat down on the floor of her shop and laughed until she wept.
+[extra] mourning_bandaged_tian | Tian has a strip of your bandage on his cheek and has not taken it off.
+[extra] mourning_cards_seen | Seven lines lie in your memory in the order they were written.
Bao Er walks you to the corner, her hands in her sleeves. She hums as she goes, a tune you half know.
“She likes you,” she says. “She will not say. But she put out a sixth cup.”
> truth | Tell her you will come back. | mourning_close2
> quiet | Hum along. | mourning_close2
> mercy | Say you like her singing. | mourning_close2 | bond:hao+1
> inquiry | Ask what the tune is. | mourning_close2

=== mourning_close2 | What Bao Er Sang
“It is a lament,” says Bao Er. “For a woman called Ling. It has nine verses and I only know seven.” She stops under a lamp and looks up the lane. “The other two are lost. The aunties say they were never written. They say they were sung, once, in a tower by the sea, and that nobody who heard them remembered.”
She shrugs, with a bright false carelessness.
“I would like to hear them one day. I have a feeling I would cry.”
She squeezes your arm.
“Come on. If Mother sees me weeping in the lane she will charge me for the lamp.”
She laughs, and runs, and the lane takes her.
You stand under the lamp. The wind brings the smell of salt and old paper. Up on the spur, above the roofs, the lighthouse is dark.
> truth | Walk down to the quay. | hub_b3_coast | +b3q_mourning
> quiet | Stay a moment longer in the lamplight. | hub_b3_coast | +b3q_mourning
> mercy | Go back to the inn, and tell the Elder. | hub_b3_coast | +b3q_mourning
> inquiry | Look up at the lighthouse. | hub_b3_coast | +b3q_mourning
`,
  scenarios: String.raw`
$ SU_MOURNING_ASH | trust+3 respect+2 fear+3 | elder | The Elder hears what Madam Ash said of the fire and of the choice at the door.
hostile: She told you I chose the boy who was crying. I have no defence. I have never offered one. I only ask that you not repeat it where he can hear.
wary: Hui Niang was always better than I. I should have gone to her in the first year. I was afraid she would be right.
neutral: She is still folding paper. She was always folding something: a note, a petition, a crane. It is how she keeps her hands from forming opinions.
warm: She laid a place for nine. She did not tell me. I heard it from Bao Er, who thought I would not mind. I minded. I minded very much, in the way one minds a kindness that arrives too late to be accepted.
devoted: When you sit at that table, I should like to be in the room. Not at the table. In the room. I should like to stand by the door and see the chair filled, and then I should like to go home.
`,
  remarks: String.raw`
% mourning_bao_later | since:b3q_mourning>=2 | hao | I have been wondering what Madam Ash would say to me. She used to give out sweets at the Chancery gate, to the clerks’ children. I took one. I was seven. I still have the paper.
% mourning_ash_later | since:mourning_cards_seen>=6 | gu | Seven lines on seven cards. I keep going through them in my head, in order. I think the last one might be about me, but nobody has said.
`,
};
