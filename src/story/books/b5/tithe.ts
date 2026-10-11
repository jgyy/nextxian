import type { Arc } from "../types";

/**
 * Book Five, arc eight: the Tithe-Hall. In a long shed at the edge of the camp the poor sell their names, one at a time, to
 * bidders from the richer sects, for a place in the queue. Four approaches: read the ledger of sales aloud to the hall (a1, truth),
 * break into the strongroom where the sold names are kept (a2, force), bankrupt the auction with forged scrip (a3, deceit), and
 * buy one mother's daughter's name back (a4, mercy). A hidden route reads the names back to the crowd, as at the Mirage.
 * Cast: Auctioneer Vey, the pilgrim mother Chen Ru, her daughter Little Bell, Hao Lan, Duan Wuyi, Yue, Hanming, the Elder.
 */
export const tithe: Arc = {
  id: "tithe",
  name: "The Tithe-Hall",
  scenes: String.raw`
=== tithe_entry | The Long Shed
It is a barn without walls, a hundred yards of tarred roof on timber posts, hung with lanterns. Down the middle runs a plank dais, and on the dais stands an auctioneer in a scarlet robe, with a gavel and a brass trumpet and a voice like a gong. Before him sit the bidders on cushions, in silk, with fans: stewards, agents, gentlemen from the sects. Behind them, on the bare earth, the sellers wait in a long grey line.
They are the poor. They have walked months for the Ceremony. They have no money for the tithe, and no kin in the Ledger, and the queue is eleven days long. So they sell.
“Lot two hundred and nine,” cries the auctioneer. “A woman’s name. Chen Ru, of the Eastern Ford. Aged thirty-four. Seamstress. A good clean name, with no debts.” He lifts the gavel. “Who will give me forty?”
A fan goes up. Forty. Fifty. Sixty. A woman in the grey line stands very straight with her eyes shut.
“Sold,” says the auctioneer. “At seventy taels. To the Silver Heron.”
The woman opens her eyes. She looks at nothing. She walks out into the dusk.
> truth | Climb on the dais and ask for the ledger of sales. | tithe_a1s1
> force | Notice the locked door behind the dais, and the two guards on it. | tithe_a2s1 | needs:4
> deceit | Notice that the bidders pay in paper scrip, stamped with the Concord’s mark, and that nobody inspects it. | tithe_a3s1
> mercy | Follow the woman who has just sold her name, and see where she goes. | tithe_a4s1
> inquiry | Stand at the back and read out the names on the sellers’ slips, as you read them at the Mirage. | tithe_h1 |  | mirage_woke | You have not yet learned how to give a name back.

// ---------------------------------------------------------------- a1: the ledger read aloud
=== tithe_a1s1 | The Dais
You walk up the middle of the shed in your armband, between the cushions, and climb onto the plank. The auctioneer stops with the gavel in the air. He is a tall man of fifty, scarlet-robed, with a long clever face, a waxed black moustache and a smile that has been polished by use. His name is Vey. He has never been interrupted.
“Madam,” he says, with courtesy. “This is a sale.”
“I should like to see the ledger of sales.”
“It is a private record.”
“It is a record of the Concord,” says Duan Wuyi, climbing up beside you with his seal in his hand. “Of which I am the Censor-General.”
Vey’s smile does not falter. It simply stops moving. “Of course. I had no idea.” He bows. “Pray look at anything you wish.”
A clerk brings the book. It is a great slab of a ledger, bound in green leather, and the clerk carries it in both arms, like a tray. He sets it on the lectern. The room has gone quiet. Two hundred bidders have turned on their cushions to watch.
Duan opens it at the first page.
> truth | Read over his shoulder. | tithe_a1s2 | npc:SU_TITHE_AUCTION
> mercy | Watch Vey. | tithe_a1s2
> quiet | Look at the crowd. | tithe_a1s2
> inquiry | Ask how long the sales have run. | tithe_a1s2

=== tithe_a1s2 | Forty Years of Sales
“Forty-one,” says Vey. “Since the Charter of Equitable Access.” He has recovered his smile. “It was a reform. It gave the poor a means of advancement.”
“They sell their names.”
“They sell the *use* of them. For the period of the Ceremony. It is a lease.” He waves a hand. “At the end they are returned. Less a modest fee.”
“Are they returned?”
“By statute.”
“Have you returned one?”
Vey’s moustache twitches. “I... would have to consult the book.”
Duan turns the pages. They are covered in tidy columns: date, name, age, price, buyer. Hundreds of entries to a page. He runs his finger down the right-hand margin. There is a column for *Return.* Every cell in it is blank.
“Forty-one years,” he says softly. “Eleven thousand sales a year. Four hundred and fifty thousand names.” His voice thins. “And not one returned.”
“It is an oversight,” says Vey.
“Is it?”
“Yes.” The smile is rigid. “It is a very big book.”
> truth | Take the book. | tithe_a1s3
> mercy | Look at the sellers. | tithe_a1s3
> quiet | Look at Duan. | tithe_a1s3
> inquiry | Ask where the names go. | tithe_a1s3

=== tithe_a1s3 | Where the Names Go
“To the buyers,” says Vey. “Naturally.” He opens a hand toward the cushions. “They hold them. They *use* them. A name is a very useful thing. It can attend a Ceremony. It can sign a petition. It can take a place in the queue.”
“And the seller?”
“Waits at the back.”
“Without a name?”
“For eleven days. Then they receive another.” Vey spreads his hands. “A temporary one. We have a stock.”
“They become someone else.”
“They become *no one,* for a period,” says Vey, “and then someone else.” He looks mildly pained. “You must understand. It is a kindness. We were finding that many of these people had no standing at all. Giving them a name, even a borrowed one, is an improvement.”
There is a murmur from the sellers. Chen Ru, the seamstress, has opened her eyes. She is looking at Vey. A faint line has appeared between her brows.
“I was *given* a name,” she says, in a low voice. “At birth. It was my mother’s.”
“Quite so.”
“Is it still mine?”
Vey hesitates.
> truth | Wait. | tithe_a1s4
> mercy | Look at Chen Ru. | tithe_a1s4
> quiet | Hold your breath. | tithe_a1s4
> inquiry | Ask Duan. | tithe_a1s4

=== tithe_a1s4 | Duan Answers
“No,” says Duan Wuyi. He says it quietly, into the shed. “It is not.”
The silence is absolute.
“By the Charter, a name sold is a name alienated. The seller loses all right of use, and all right of recourse, until the buyer chooses to return it.” His voice does not rise. “The buyer is under no obligation. It is a commodity. It is, in law, a chattel.”
Vey says, “I did not draft it.”
“I did,” says Duan.
You turn. His soft face is calm, and terribly pale. He does not look at anyone. He looks at the book on the lectern.
“I was a junior,” he says. “Thirty-eight years ago. The Board asked for a draft that would permit the lease of names to the indigent. I thought of it as an act of relief. I wrote the clause myself.” He swallows. “The word *chattel* is mine.”
The hall is silent. Somewhere a fan clicks shut.
“I am sorry,” says Duan Wuyi. “To everyone here. I did not know what I had made.”
> truth | Stand by him. | tithe_a1s5
> mercy | Take his hand. | tithe_a1s5
> quiet | Watch the sellers. | tithe_a1s5
> inquiry | Ask what he will do. | tithe_a1s5

=== tithe_a1s5 | A Reading
He reads it. He reads every name in the book. It takes eleven hours. He begins at the first page, and goes down the columns, one by one, and the sellers begin to move.
They come forward. They come in ones and twos, as each name is called, shy and shaken, and stand by the dais. A man hears his own and puts both hands over his mouth. A girl hears her mother’s and begins to cry. Duan does not hurry. He does not skip. He says each name carefully, like a man laying down stones.
The bidders sit in a ring of silk, motionless. A few have lowered their fans. A few have gone grey. One, an old steward in the Silver Heron livery, gets up and walks out, stiffly, with his hat in his hand.
At the fourth hour, a bidder rises and walks to the dais. He is a young man, flushed, awkward, in a robe of dark blue. He sets a folded slip on the lectern.
“That’s the one I bought,” he mumbles. “Lot two hundred and nine.” He goes red. “I’d like to return it.”
> truth | Listen. | tithe_a1s6
> mercy | Thank him. | tithe_a1s6
> quiet | Watch Duan. | tithe_a1s6
> inquiry | Ask who it was. | tithe_a1s6

=== tithe_a1s6 | Returns
“Chen Ru,” says Duan. He takes the slip. His hand is steady. He holds it up. “Chen Ru of the Eastern Ford, aged thirty-four.” He looks round the hall until he finds the seamstress, standing very straight at the edge of the crowd. “Madam. I believe this is yours.”
She crosses the floor as if sleep-walking. She takes it. She stands there with the slip between her fingers, not reading it, not looking. Her lips are trembling.
“It’s only paper,” she whispers.
“It is not,” says Duan.
“It feels...” She shuts her eyes. “It feels like someone’s put a coat on me.”
A cheer breaks out at the back. It is a ragged, astonished roar, thin at first, then swelling. The sellers are laughing and weeping. A man is hugging a stranger. Behind the lectern, Vey has gone the colour of putty.
Others are coming forward now. A buyer. Another. A third. They set their slips on the lectern in a stack, one after another, with a gesture between apology and relief.
“What are you doing?” hisses Vey.
“Giving back what we bought,” says the old steward of the Silver Heron.
> truth | Smile. | tithe_a1s7
> mercy | Hold your breath. | tithe_a1s7
> quiet | Watch Vey. | tithe_a1s7
> inquiry | Ask Vey what he will do. | tithe_a1s7

=== tithe_a1s7 | Vey’s Gavel
He picks it up. He weighs it in his hand. He is a showman, and he has been on that dais for twenty years, and for a moment you think he will bring it down on the lectern, and shout, and call the guards. His moustache quivers. His eyes go round the hall.
Then he sets it, quietly, on the book.
“I am an auctioneer,” he says. His voice is not quite his own. “It is the only thing I know.” He looks at Duan. “You will find I have a gift for it. I can sell anything. A name. A hat. A broken pot.” His mouth twists. “I could sell you the sky.”
“I do not doubt it.”
“And I did not think.” He wets his lips. “I never thought what I was selling. It was a lot. It was a number. It had a reserve.” He swallows. “I think it is possible I am a bad man.”
“You are a clever one.”
“It is the same thing, in my line.” He looks down at the gavel. “I should like to try something else.”
“What?”
“I do not know.” His voice cracks. “I have only ever raised my voice.”
> truth | Smile. | tithe_a1s8
> mercy | Hand him the book. | tithe_a1s8
> quiet | Wait. | tithe_a1s8
> inquiry | Suggest something. | tithe_a1s8

=== tithe_a1s8 | A New Lot
“Call the names,” you say.
He stares.
“There are four hundred and fifty thousand in that book. Call them. You have a voice for it.” You pick up the gavel and put it back in his hand. “Not to sell. To say. To the hall, and the camp. Every name that has been bought. Out loud.”
“It would take years.”
“You have the time.”
“And no one will listen.”
“They will listen,” says Duan Wuyi, “to the finest voice in the Concord.”
Vey’s face is a study. Something is moving across it: surprise, vanity, bewilderment, and, at last, an odd dawning sweetness. He straightens. He clears his throat. He lifts the brass trumpet to his lips.
“Lot one,” he cries, in a ringing baritone. “A woman’s name. Ah Mei, of the Western Provinces. Aged nineteen. Sold in the year of the Iron Rat.” He lowers the trumpet. His voice shakes. “Returned.”
There is a hush. Then a woman, somewhere in the hall, sobs aloud. Then another. Then the whole shed bursts into applause.
> truth | Applaud. | tithe_a1s9
> mercy | Smile. | tithe_a1s9
> quiet | Look at Duan. | tithe_a1s9
> inquiry | Ask how long he will go on. | tithe_a1s9

=== tithe_a1s9 | Forty Years to Return
He goes on all night. He goes on the next night, and the next. By the third day his voice has turned to gravel, and Hao Lan brings him honey and lemon. By the fifth, there is a queue to hear him. The sellers come back, and sit on the earth, and listen. The bidders come, and bow their heads. People bring their children.
“Lot nine hundred and six,” cries Vey, hoarse. “A man’s name. Ding Hao.” He stops. A cheer goes up at the back, and a small man in a grey coat stands, with his hat in both hands, weeping. “Returned.”
It is not a sale. It is not a ceremony. It is something between a roll-call and a wedding.
As each name is called he crosses it out. As each is crossed out he writes, in the blank column, a single word: *Returned.*
“It will take twenty years,” he says to you, wearily. “Perhaps thirty.”
“Will you stay?”
“I shall see how I feel.” A thin dry smile. “I find I have rather a lot of paper.”
> truth | Smile. | tithe_close | +tithe_read
> mercy | Hold his arm. | tithe_close | +tithe_read
> quiet | Look at Vey. | tithe_close | +tithe_read
> inquiry | Ask about the buyers. | tithe_close | +tithe_read

// ---------------------------------------------------------------- a2: the vault
=== tithe_a2s1 | The Strongroom
The door is behind the dais, set in the shed’s back wall: a squat iron slab, studded with rivets, with a brass lock the size of a plate. Two guards in Concord grey stand before it with halberds. They are not young. One is picking his teeth. The other is looking at the sellers, with the bored contempt of a man who has seen it all.
“The names are in there,” says Hanming, low. “All of them. The slips.” He crouches in the shadow of a post. “They don’t keep them in the ledger. A ledger is for show. The real ones are in a room.”
“How do you know?”
“I worked in a counting-house at nineteen.” He shrugs. “Before the levy. The books were all lies. The money was in the back.”
“How many slips?”
“All of them. A hundred thousand.” His scarred face is grim. “That’s a lot of paper.”
Ren Qiao has crossed his arms. “Two guards,” he says. “A lock. Four walls. It’s a small job.”
“Is it?”
“I once took a fort with a bag of flour.”
He grins, for the first time in a week.
> force | Plan. | tithe_a2s2 | needs:4
> truth | Ask Hanming. | tithe_a2s2
> quiet | Study the lock. | tithe_a2s2
> mercy | Ask about the guards. | tithe_a2s2

=== tithe_a2s2 | A Wall of Flour
It was, as it happens, true. He tells it as you sit in the shadow of the shed with a cup of tea. A fort, in the Western Marches, thirteen years ago. A winter siege. A garrison of sixty, and a company of fourteen outside. He had been seventeen and out of his depth, and the only available weapon was a sack of flour.
“I rolled it,” he says. “Down the hill. Into their gate.”
“A sack of flour?”
“Eighty pounds. It split.” He sips. “It made a cloud. They thought it was gas. They ran.”
“That’s absurd.”
“It’s the truth.” He sets down the cup. “The thing about a lock is that it exists in a context. You don’t break the lock. You change the context.”
“How?”
“What is the one thing no guard will stop?”
You think. “A fire.”
“A *fire alarm.*” Ren Qiao smiles thinly. “Guards drop everything for a fire. They have to. They have a drill. They leave the post, and fetch the buckets.” He picks up a straw. “For about four minutes.”
> force | Plan the fire. | tithe_a2s3
> truth | Say it is dangerous. | tithe_a2s3
> quiet | Count the buckets. | tithe_a2s3
> mercy | Ask who might be hurt. | tithe_a2s3

=== tithe_a2s3 | A Small Fire
It is Yue who lights it. She does it with great artistry. A single bale of damp straw, behind the cookhouse, with a fistful of dried dung on top, and a pot of pitch. It smoulders. It stinks. It sends up a splendid black column of smoke. Nobody could be hurt. It is a hundred yards from the nearest tent.
“Fire!” she screams, in a hysterical female voice. “Fire in the cookhouse! Help!”
A bell begins to clang. Heads turn. Pilgrims run, shouting, with buckets. The guards at the strongroom stiffen, look at each other, and race out of the shed at a clumsy trot. The halberds go clattering down.
Ren Qiao and Hanming are at the door in four seconds. Hanming has a picklock. He has the lock open in forty.
“Never trust a brass lock,” he mutters. “It’s all show. There’s a slot on the side.”
The door swings. A smell of old paper and dust rolls out. You step in with a shuttered lantern.
It is a long narrow room, floor to ceiling in pigeonholes. In every hole, a slip, tied with green thread.
There are more of them than you can count.
> force | Go in. | tithe_a2s4
> truth | Hold the lantern. | tithe_a2s4
> quiet | Watch the door. | tithe_a2s4
> mercy | Look for Chen Ru’s. | tithe_a2s4

=== tithe_a2s4 | Pigeonholes
They are filed alphabetically. That is the horror. Someone has taken great pains. Each hole has a label, in a neat clerk’s hand: *Ah. Ai. Ang.* Behind each label, a bundle of slips, in green thread, dated. You pull one. It is warm. It is a name.
“A hundred and forty thousand,” breathes Hanming, scanning the shelves. “They’ll never carry it.”
“We don’t have to carry it.”
“Then what?”
“Open it.”
He stares. “The whole room?”
“All of it. Slips on the floor. Doors open. Let them find their own.” You pull down an armful. “It’s a name. It knows who it belongs to.”
“And the guards?”
“Will be at the fire for four minutes.”
“Three and a half now,” says Ren Qiao, from the door.
You grab a handful of slips and fling them over your shoulder. Hanming does the same. You tear the green threads. You throw armfuls onto the floor. The room fills with a rustle like a flock of birds.
They are not just paper. They begin, faintly, to glow.
> force | Keep throwing. | tithe_a2s5
> truth | Look at the slips. | tithe_a2s5
> quiet | Step back. | tithe_a2s5
> mercy | Hold one. | tithe_a2s5

=== tithe_a2s5 | A Wind of Names
They rise. It is what names do, when released. They lift from the floor, in a swirling white cloud, a hundred thousand slips of paper, and each one is lit from within by a faint pale gold. They spin. They eddy. The room is a snow-globe of names, and in the middle of it you stand with your hands over your head, laughing and half blind.
They find the door.
They stream out through the strongroom, and across the shed, and through the open wall, into the night. They cross the camp in a long glimmering ribbon, low over the tents, and where they pass, sleepers turn in their blankets and murmur, and wake.
A slip brushes the cheek of a woman at a cooking-fire. She stands. A slip lands in the hands of a boy of nine. A slip settles on an old man’s shoulder like a moth. They look about, startled, and the slips go on: a river of gold, drifting in the starlight.
“Do you see?” cries Hanming. His eyes are shining. He is weeping with joy. “They know! They know where to go!”
Behind you, in the shed, someone is screaming for the guards.
> force | Run. | tithe_a2s6 | needs:4
> truth | Watch. | tithe_a2s6
> quiet | Cover your face. | tithe_a2s6
> mercy | Follow a slip. | tithe_a2s6

=== tithe_a2s6 | Chased
The guards come back at the run, with their halberds. They have seen the wind of paper. They have seen the door. They do not understand what they are looking at, but they know a theft when they see one, and they know what the Inspector does to guards who lose a strongroom.
“Stop them!” bawls a voice. “Seize them!”
You run. You run across the dark camp, between the tents, with Hanming at your heels and Ren Qiao behind, and a dozen men in grey bellowing. The pilgrims stare. Somebody trips a guard with a tent-rope. A woman, apparently by accident, empties a chamber-pot on another. A small boy with a golden slip clutched in his hand steps squarely into the path of a third, and the guard goes over like a felled tree.
“Left!” shouts Yue, out of the dark.
You swerve. She is crouched in the lee of a water-cart with a hand held out. You dive in. She slams a tarpaulin over your head.
“Don’t breathe,” she hisses.
The pursuers go by in a thunder of boots.
> force | Hold still. | tithe_a2s7
> truth | Breathe slowly. | tithe_a2s7
> quiet | Listen. | tithe_a2s7
> mercy | Check Hanming. | tithe_a2s7

=== tithe_a2s7 | Under the Cart
You lie for an hour. The tarpaulin smells of horse and tar. Beside you, Hanming is shaking with laughter that he does not dare to let out, his face pressed into his arm. Ren Qiao, wedged against the axle, is utterly still. Yue, on the driver’s seat above, is whistling a tune, perfectly casual, while a sergeant questions her about a strongroom.
“No, sir,” she says. “I’ve been at my cart. Watering the camel.”
“The camel?”
“Aye.” Pause. “She’s very thirsty.”
You hear the sergeant’s boots. You hear him stop. You hear him sniff.
“There’s a smell,” he says.
“It’s the camel.”
“It smells of... paper.”
“She ate a book,” says Yue, serenely.
The sergeant grunts. After a moment he goes away. When the sound of his boots has faded, Hanming gives a shuddering, agonised wheeze, and Ren Qiao, who has not smiled in three days, lets his head fall against the axle and laughs until he cries.
> force | Laugh. | tithe_a2s8
> truth | Cover your mouth. | tithe_a2s8
> quiet | Listen. | tithe_a2s8
> mercy | Hold Hanming. | tithe_a2s8

=== tithe_a2s8 | Morning in the Camp
You come out at dawn. The camp has changed. Everywhere, people are standing in groups, talking. A woman is showing a stranger a slip. A man is holding one to his chest. A child is running between the tents shouting a name, over and over, as one calls a lost cat.
Slips lie in the dust. Slips hang from tent-poles. A flock of paper clings to the lower rails of the Stair like white moths. Where a slip finds its owner, the owner takes it, and stands for a moment, and then, without a word, begins to walk.
“Where are they going?” you say.
“Home,” says Hanming.
“All of them?”
“The ones who have their names back.” He is smiling, and his scarred face is wet. “They don’t need the Ceremony. They just wanted to be someone.”
The Inspector’s guards are standing helpless in the lane, with their halberds at the slope. Nobody is looking at them. A grey-haired sergeant takes off his helmet and looks at it. He puts it down in the dust. He walks away.
Ren Qiao, beside you, lets out a long slow breath.
“It was never about the lock,” he says.
> force | Nod. | tithe_a2s9 | needs:4
> truth | Take Hanming’s arm. | tithe_a2s9
> quiet | Look at the Stair. | tithe_a2s9
> mercy | Smile. | tithe_a2s9

=== tithe_a2s9 | The Empty Room
You go back to look at the strongroom at noon. It is empty. The pigeonholes gape. The floor is bare, swept clean by the night’s wind. In one corner a single slip lies on the boards, face up, in the dust.
You pick it up. It is blank.
There is no name on it. It is a piece of green-threaded paper, smooth, pale, unwritten. You turn it over. The back is the same.
“It’s a spare,” says Hanming, behind you. “For the ones who never had one.” He takes it. His fingers tremble. “They keep a few. For the ones who come through, and are nobody.”
“Whose is it?”
“Anyone’s.” He turns it in the light. “You write it yourself.”
He takes a stub of pencil from his pocket. He lays the slip against the wall. He writes, in a small careful hand: *Gu Hanming.*
He looks at it for a long moment. He folds it in four.
“I’ve had a number for fifteen years,” he says. “It’s nice to have a name.” He tucks it into his shirt. “Even if I did have to write it myself.”
> force | Smile. | tithe_close | +tithe_vault
> truth | Clasp his shoulder. | tithe_close | +tithe_vault
> quiet | Leave him a moment. | tithe_close | +tithe_vault
> mercy | Hug him. | tithe_close | +tithe_vault

// ---------------------------------------------------------------- a3: scrip
=== tithe_a3s1 | Paper Money
It is the colour of weak tea, and it feels like a banknote: thin, crisp, printed on both sides with a fine blue lattice and the seal of the Concord’s Treasury. A bidder pays in it as casually as a man buying a bun. The clerk at the cashier’s window counts it, tips it into a drawer, and gives a receipt. Nobody looks at the notes. Nobody holds them to the light.
Hao Lan has bought one, from a seller, for a copper. Her lips are moving.
“It is crude,” she says, finally. “The lattice is wrong. The seal is smudged. The paper’s an ordinary rag.” She puts it down. “Anyone could make it.”
“Anyone?”
“A forger with a day.” She grins. “And an excellent supply of tea.”
“Why tea?”
“The colour.” She taps the note. “It’s a rice paper dyed in black tea and a little saffron. I can do that in a bucket.” She looks at the cashier. “And nobody checks.”
“You mean to flood the hall.”
“I mean to make them rich,” says Hao Lan sweetly. “Terribly, terribly rich.”
> deceit | Ask what she means. | tithe_a3s2
> truth | Say it is wrong. | tithe_a3s2
> quiet | Fetch the tea. | tithe_a3s2
> mercy | Think of the sellers. | tithe_a3s2

=== tithe_a3s2 | The Plan of the Counterfeiters
It is not an ordinary counterfeit. It is a plot. She lays it out in the tent that night, with Yue, and Duan, and a lamp. The scrip will be forged in modest quantities. It will be spent in modest sums. But it will be spent on every name in the hall.
“The point is not to make money,” she says. “The point is to *buy.*”
“Buy what?”
“Every lot. Every name.” She taps a list. “We bid on them all. Every seller. We pay the reserve and a little over, in scrip. They hand us the slips. We hand them back.”
“The sellers get their names.”
“And the scrip.” She smiles. “It’s worthless, but they don’t know. They spend it on soup and boots and go home.”
“And the Inspector?”
“Finds that his auction has been won by a single bidder who pays in funny money.” She raises an eyebrow. “And that every slip in the hall has gone out the door.”
Duan Wuyi clears his throat. “It is fraud,” he says weakly.
“Yes.”
“It is the sort of fraud one would draft a statute against.”
“Draft one,” says Hao Lan. “Afterward.”
> deceit | Agree. | tithe_a3s3
> truth | Hesitate. | tithe_a3s3
> quiet | Fetch the bucket. | tithe_a3s3
> mercy | Ask who loses. | tithe_a3s3

=== tithe_a3s3 | A Night at the Press
They print it by hand. It takes three nights. You sit in the tent in a ring of lamps, with a block of carved turnip, a pot of ink, and a tower of tea-stained paper drying on a line. Gu cuts the blocks. Hanming does the lattice with a wire stylus. Hao Lan applies the seal with a thumb dipped in lamp-black, and a small tight smile.
“It is,” she says, sitting back, “the most disgraceful thing I have ever done.”
“You said that about the skiffs.”
“Then it is the second.” She holds up a note. In the lamplight it looks utterly convincing. “I am torn between pride and shame.”
“Choose pride.”
“I can’t. I’m a Chancery girl.” She waves a hand. “I must be ashamed of everything I do well.”
“What about the Elder?”
“Wanru does not know.” Hao Lan blows on the ink. “Duan said I should tell her. I said she would insist on helping. She is a very good forger. It would be embarrassing.”
Behind the lamp, Duan Wuyi, who is stuffing notes into a satchel, makes a noise like a kettle.
“*Very* good?” he says.
“She did the ferry,” says Hao Lan.
> deceit | Smile. | tithe_a3s4
> truth | Count the notes. | tithe_a3s4
> quiet | Fetch more paper. | tithe_a3s4
> mercy | Hold the lamp. | tithe_a3s4

=== tithe_a3s4 | The Bidder in Grey
She goes in on the fourth night, in a plain grey robe and a veil, on a litter, with two porters carrying a satchel. She calls herself the Honourable Madam Gao. She has a high cold carrying voice. She takes a cushion at the very front. She waves her fan once, languidly, as the first lot is called.
“Sixty,” she says.
Vey blinks. “I beg your pardon, madam?”
“Sixty taels. For the name.” She does not turn her head. “And for the next. And the one after.” Her fan flicks. “Indeed for the whole book.”
There is a gasp. The bidders stare. This is not how it is done. They have bid in turn, politely, for forty years; no one has ever offered to buy the lot.
“Madam,” says Vey, “the book is four hundred and fifty thousand names.”
“I am aware.”
“It will run to, ah, some twenty million taels.”
“Twenty-two, I believe.” The veiled head tilts. “I have it with me.” A signal. The porters step forward. They open the satchel. It is full to the brim with pale-brown notes.
“In scrip,” she adds, “of course.”
> deceit | Hold your breath. | tithe_a3s5
> truth | Watch Vey. | tithe_a3s5
> quiet | Look at the crowd. | tithe_a3s5
> mercy | Look at the sellers. | tithe_a3s5

=== tithe_a3s5 | Count It
He counts. He has to. It is the rule: no bid is accepted until the money is on the dais. He sits at a table with the satchel in front of him and a team of six clerks. They count for six hours. The hall waits. Fans flutter. Somebody orders tea.
You watch from a pillar, in a pilgrim’s cloak, with your heart in your mouth. Every few minutes a clerk holds a note to the lamp, frowns, and puts it down. Every few minutes Hao Lan, in the veil, flicks her fan.
“Is there a difficulty?” she says.
“No, madam.” Vey wipes his forehead. “The notes are, ah... very fine.”
“They are the Treasury’s.”
“Of course.” He lifts another. He holds it up. For a moment you see him squint at the lattice. A shadow crosses his long clever face. He sets it down.
“Madam,” he says, slowly, “these are of a *remarkable* quality.”
“Thank you.”
“I have never seen better.” He swallows. “I have seen, in my career, a good many forged.”
The hall goes still.
> deceit | Don’t move. | tithe_a3s6
> truth | Close your eyes. | tithe_a3s6
> quiet | Watch Hao Lan. | tithe_a3s6
> mercy | Step forward. | tithe_a3s6

=== tithe_a3s6 | A Remarkable Quality
“Forged?” says Hao Lan, in the voice of the Honourable Madam Gao. It is a masterpiece of aristocratic umbrage. “Forged? Do you suggest, sir, that I am a coiner?”
“I suggest nothing, madam.”
“I should hope not.” The fan snaps. “These notes were issued to me by the Imperial Treasury, on the personal order of the Deputy Inspector. If you doubt them, you may take it up with him.”
“The Deputy...?”
“Rao.” She says it coolly. “He is expected at the Ceremony. He will be most interested to learn that his auctioneer has impugned his credit.”
Vey has gone a very bad colour. He glances at the clerks. He glances at the crowd. He wets his lips.
“Madam,” he says, “I withdraw the remark.”
“I should think so.”
“I accept the bid.” He picks up the gavel. His hand shakes. “Lot one to four hundred and fifty thousand. Sold. To the Honourable Madam Gao.” He brings it down.
It is the loudest sound you have ever heard.
> deceit | Breathe. | tithe_a3s7
> truth | Cheer. | tithe_a3s7
> quiet | Watch the sellers. | tithe_a3s7
> mercy | Look at Vey. | tithe_a3s7

=== tithe_a3s7 | A Wagon of Slips
They bring them out in wheelbarrows. Four hundred and fifty thousand slips, in sacks, in crates, in bundles tied with green thread. The wagon-train takes an hour to load. Madam Gao sits on her litter and supervises, with a fan and an air of regal boredom.
The sellers stand in a silent ring. They do not understand. They have heard the gavel and seen the money. They know only that a rich woman has bought every name in the hall and is carrying them away in a cart.
“It’s over,” says a man, hopelessly.
“We’ll never see them again,” whispers a woman.
The wagon rolls out of the shed. It rolls into the camp. It rolls to the middle of the main square, at the heart of the ten thousand tents, and there it stops. A figure in a veil mounts the tail-board. It lifts both hands.
“Good people,” says Hao Lan, in a clear carrying voice, throwing back the veil. “I am not Madam Gao. I am a clerk. And I have a delivery.”
She tips the first sack.
A fountain of paper erupts into the air.
> deceit | Throw a handful. | tithe_a3s8
> truth | Shout names. | tithe_a3s8
> quiet | Watch. | tithe_a3s8
> mercy | Catch one. | tithe_a3s8

=== tithe_a3s8 | Names on the Wind
It snows. For an hour it snows names, whirling over the square, whipping about the tent-ropes, drifting into the gutters. Slips fall into outstretched hands. They are caught by children, and snatched from the dust, and held up to the light. People are shouting their own names. They are shouting each other’s. A voice rises from the crowd, high and cracked: “Chen Ru! Chen Ru of the Eastern Ford!”
The seamstress is at the foot of the wagon. A slip has landed on her head. She takes it down. She holds it in both hands, and reads it, and her mouth falls open.
“It’s me,” she says. “It’s *me.*”
Hao Lan is weeping on the tail-board, laughing, hurling handfuls into the wind. Duan Wuyi stands beside the wagon, with his satchel of scrip, quite motionless, staring up at the paper snow. Gu has his arms round Hanming. Yue is dancing.
In the shed a hundred yards off, Vey, the auctioneer, has put down his gavel. He walks to the door. He stands for a long time with his face tilted up to the falling slips.
“I have sold the sky,” he says to nobody, “and given it away.”
> deceit | Laugh. | tithe_a3s9
> truth | Take a slip. | tithe_a3s9
> quiet | Look at Hao Lan. | tithe_a3s9
> mercy | Hold Chen Ru. | tithe_a3s9

=== tithe_a3s9 | Paper Debt
They find out in three days. The Treasury sends an inspector. The notes are tested, and found false. A warrant is sworn for Madam Gao, who proves to have no fixed abode. The wagons are traced, and found empty. The sellers have all gone home, and the buyers have all gone home, and four hundred and fifty thousand people have an inexplicable feeling of being, for the first time in forty years, entirely themselves.
“I owe twenty-two million,” says Hao Lan, with a straight face. “In scrip.”
“To whom?”
“The Treasury.”
“In what coin?”
“That is the beauty of it.” She spreads her hands. “It is a debt in a currency I printed. I can repay it in kind.” She picks up a ream of paper. “Shall I start?”
Duan Wuyi gives a hoarse, helpless chuckle. He wipes his eyes. “The Treasury,” he says. “Will never be repaid.”
“No.” She beams. “But they will be extremely thorough in their audit.”
He puts his face in his hands, and shakes.
> deceit | Laugh. | tithe_close | +tithe_bankrupt
> truth | Raise a cup. | tithe_close | +tithe_bankrupt
> quiet | Look at Hao Lan. | tithe_close | +tithe_bankrupt
> mercy | Thank her. | tithe_close | +tithe_bankrupt

// ---------------------------------------------------------------- a4: Chen Ru
=== tithe_a4s1 | After the Sale
She walks to the edge of the camp and sits on an upturned bucket by the dung-heap. She doesn’t cry. She sits with her hands folded in her lap and her back straight and looks at nothing. She is thirty-four, thin, brown, sharp-featured, with calluses on her fingers where the needle goes. Her coat is mended in four different greys.
You sit beside her. She does not look round.
“You’re kind to come,” she says. “I would rather be alone.”
“I’ll go.”
“No.” She lets out a small breath. “You may as well stay. I’ve seventy taels and a number. I can’t spend either.”
“What did you sell it for?”
“My daughter’s place.” Her voice is flat. “She’s nine. She’s ill. They say there’s a healer on the third tier.” She turns her hands over. “They wouldn’t let her in without a slip. She has no name. She was never written. I thought: I’ll trade mine for hers.”
“You sold your name to get her a slip.”
“Seventy taels buys a place. It doesn’t buy a name.” She almost smiles. “So I sold mine, and gave her it.”
> mercy | Take her hand. | tithe_a4s2
> truth | Ask where the girl is. | tithe_a4s2
> quiet | Wait. | tithe_a4s2
> inquiry | Ask her daughter’s name. | tithe_a4s2

=== tithe_a4s2 | Little Bell
“Bell,” says Chen Ru. “I call her Little Bell. Because she rings when she coughs.” She laughs, a thin, dry sound. “She has her grandmother’s lungs.”
“She has a slip?”
“She has mine. With the borrowed name on it. *Chen Ru.* She’s been Chen Ru for two days.” Her mouth twists. “She doesn’t like it. She says it’s too big.”
“And you?”
“I’m nobody.” She shrugs. “It’s very peaceful.”
“Where is she?”
“In the queue for the third tier.” She nods at the Stair, a pale line in the dusk. “I’m not allowed to follow. Without a name I can’t be registered. I have to wait at the bottom.”
“For how long?”
“Until she’s back.” Her hands tighten. “If she’s back.”
You look at the Stair. You think of an old log. Of a girl in a barn, being told her name was an apple.
“I’ll go and get her,” you say.
Chen Ru turns her head. For the first time she looks at you.
> mercy | Say it again. | tithe_a4s3
> truth | Ask where the healer is. | tithe_a4s3
> quiet | Hold her hand. | tithe_a4s3
> inquiry | Ask what the girl looks like. | tithe_a4s3

=== tithe_a4s3 | The Third Landing
You go up with Gu and the Elder and Odval, at dawn, in the third queue of the day, with your armband on your sleeve. The first tier is three hundred treads. You climb in a slow shuffling crowd, in white, with your eyes on the back of the person in front. The steps are green glass, polished smooth by feet. At each you glance down. You can see the names, just under the surface.
The landing at the top is a small walled town. There are market stalls. There are tea-houses.
“The healer,” says Gu.
You join the line. You wait for three hours. Inside the hall, at last, you find a plain wooden room, a long counter, and a row of cots. On the cots lie fifty sick children. A grey-haired woman in a white apron is moving among them with a tray.
On the third cot is a girl of nine. She is thin and flushed, with big dark eyes and a plait. She is propped on three pillows. She has a slip pinned to her gown.
She sees you. She sits up.
“Are you from Mama?” she says.
> mercy | Smile. | tithe_a4s4
> truth | Say yes. | tithe_a4s4
> quiet | Kneel. | tithe_a4s4
> inquiry | Ask how she is. | tithe_a4s4

=== tithe_a4s4 | Bell
She is much better, as it happens. The healer has given her a syrup, and she is coughing less. She sits up in bed with her hands in her lap and tells you so, with precision. “I had four spoons. I’m on the fifth.” She frowns. “It tastes of bark.”
“Is it working?”
“A bit.” She regards you gravely. “They keep calling me Chen Ru. I keep saying I’m not. They say it’s on the slip.”
“It’s your mother’s.”
“I know. She gave it me.” She plucks at the pin. “I didn’t want it. It’s too heavy.”
“Heavy?”
“It has all of her in it.” Her eyes are solemn. “All the stitching. All the nights.” She hesitates. “I think I should give it back.”
You glance at the Elder. She is standing at the foot of the cot, very upright, with her hands clasped. Her face is soft in a way you have not seen before.
“Bell,” she says. “Would you like me to make it so?”
“Can you?”
“I am a Registrar,” says Su Wanru. “It is the only thing I can do.”
> mercy | Hold your breath. | tithe_a4s5
> truth | Nod. | tithe_a4s5
> quiet | Step back. | tithe_a4s5
> inquiry | Ask how. | tithe_a4s5

=== tithe_a4s5 | Two Entries
She does it at the foot of the cot, with a stub of pencil, on the back of a prescription. She writes a line, in her dry exact hand, and signs it. She hands it to the healer. She says: “Please enter this in your register.”
The grey-haired woman reads. Her eyebrows rise. “Madam. This is... irregular.”
“It is exactly regular.” The Elder’s voice is gentle. “Chen Ru, aged thirty-four, of the Eastern Ford, is the mother of a child called Bell. Bell has been written in the Ledger of Persons in her own right, on this date, by the hand of the Registrar of Azure Cloud.” She taps the page. “She need not be anyone else.”
“A new entry.”
“An old one. It should have been made at her birth.”
The healer looks at the paper for a long time. She blots it. She hands the Elder a slip.
“Bell,” she says, in a gruff voice. “Aged nine. Of the Eastern Ford.”
The girl takes it. She holds it in both hands. She looks at it. She looks up with a face lit like a lantern.
“That’s *mine,*” she says.
> mercy | Smile. | tithe_a4s6
> truth | Applaud. | tithe_a4s6
> quiet | Look at the Elder. | tithe_a4s6
> inquiry | Ask about Chen Ru. | tithe_a4s6

=== tithe_a4s6 | A Name for a Mother
It is Bell who thinks of it. She sits up in the cot with her new slip in her hand, and says in a clear, thin, excited voice: “What about Mama’s?”
The Elder says, “What about it?”
“It’s with the people who bought it. The Silver Heron.” She frowns. “Is it still theirs?”
“Under the Charter, yes.”
“That’s silly.”
“It is very silly,” says the Elder.
“Can we buy it back?”
There is a pause. Gu clears his throat. “It would cost seventy taels,” he says. “And a bit. Because of the fee.”
“I have eighty,” says Bell. She reaches under her pillow and pulls out a small twist of cloth. She opens it. There are four silver coins, a button, and a hair-ribbon. “Mama gave me it. For the healer.” She counts. “It’s fifty-three. I think I’m short.”
“I have twenty-seven,” says Odval, gravely, from the doorway. She holds out a handful of copper.
“I have a bit,” says Gu.
“And I,” says the Elder.
Bell looks round the faces. She puts the coins in a pile on the blanket.
“It’s enough,” she says. “I counted.”
> mercy | Add a coin. | tithe_a4s7
> truth | Smile. | tithe_a4s7
> quiet | Hold your breath. | tithe_a4s7
> inquiry | Ask where the Heron sits. | tithe_a4s7

=== tithe_a4s7 | The Silver Heron
They keep a tent on the fourth tier, a splendid affair of silver silk with a heron embroidered on the flap. He listens to the proposal. He examines the coins. He consults a ledger.
“Chen Ru,” he says. “Lot two hundred and nine. We bought it for seventy.” He taps. “We have, ah, a use for it.”
“What use?”
“A servant. Of the Honoured Master. We have been issuing it to a girl in the kitchen. A new hire. She needed a name.” He gives an oily shrug. “It is a very nice one.”
“It is a woman’s,” says the Elder. “Who has a child.”
“Quite so.”
“You are using it to disguise a scullery maid.”
“The Master does not like to employ nobodies.”
Gu opens his mouth. Bell, from the crook of his arm, says in her clear thin voice: “Please.”
The steward looks at her. He sees a small thin girl with a plait and a slip.
“Please,” she says. “She’s my mama.”
There is a very long silence. The stout bald man looks, for a moment, as if he were swallowing a stone.
“I have a daughter,” he says gruffly. “She is nine.”
> mercy | Wait. | tithe_a4s8
> truth | Say nothing. | tithe_a4s8
> quiet | Hold Bell. | tithe_a4s8
> inquiry | Ask for the slip. | tithe_a4s8

=== tithe_a4s8 | Returned
He gives it back for nothing. That is the unexpected part. He goes into the inner tent, and comes out with a folded square of paper, and puts it in Bell’s hand. He will not take the coins. He tells her to keep them for her mother’s boots. “Tell her,” he says, “that I’m sorry.”
“For what?”
“For being a steward.” His round face is pink. He turns away, fussily, and busies himself with a tea-tray.
You carry Bell down the three hundred treads on Gu’s shoulders. She is weak but cheerful. She holds the slip in both fists the whole way, and sings. At the bottom the crowd parts. Her mother is sitting on the bucket by the dung-heap. She has not moved.
Bell scrambles down. She runs. She falls the last yard. She fetches up against her mother’s knees.
“I got it back,” she says. “I got your name.”
Chen Ru looks down at the folded paper. Her face crumples. She takes it in shaking fingers.
“It was only seventy taels,” she whispers. “It was only a name.”
“Yes,” says Bell. “It was yours.”
> mercy | Look away. | tithe_a4s9
> truth | Smile. | tithe_a4s9
> quiet | Weep. | tithe_a4s9
> inquiry | Ask what she will do. | tithe_a4s9

=== tithe_a4s9 | What She Did With It
She does not climb. She doesn’t want to. She tells you so in the grey of the evening, sitting on the bucket with her daughter asleep in her lap. “I wanted it for her. That’s all. I wanted her to be somebody.” She looks at the sleeping child. “She is. She always was.”
“Will you go home?”
“I think so. In a week, when she’s stronger.” She strokes the plait. “I’ll sew. It’s a good trade. People always need buttons.”
“There is a soup-line,” says Gu. “They need seamstresses.”
“Do they?” For the first time she looks interested. “I am very quick with a hem.”
She stays. She stays four days. By the fourth day there is a queue. By the fifth, she has taken on three apprentices. By the sixth, the soup-line is the best-dressed place in the camp.
On the seventh evening, Bell brings you a gift. It is a small, shabby cloth bird, stuffed with straw, with button eyes and a bent beak.
“It’s a heron,” she says. “Mama made it. She says it’s for luck.”
> mercy | Take it. | tithe_close | +tithe_bell
> truth | Thank her. | tithe_close | +tithe_bell
> quiet | Smile. | tithe_close | +tithe_bell
> inquiry | Ask why a heron. | tithe_close | +tithe_bell

// ---------------------------------------------------------------- hidden: returned
=== tithe_h1 | Names at the Back
You do it from the back of the shed, standing on a bench, in your armband, with your hands cupped round your mouth. You do not shout. You read, in a clear steady voice, the names written on the slips that the sellers hold. You read them as you read them in a city of glass: not as an offer, but as a thing that is true.
“Chen Ru,” you say. “Of the Eastern Ford.”
The woman in the grey line stirs. Her eyes open.
“Ah Mei. Of the Western Provinces. Ding Hao. Sunil of the River. Little Wei.” You read them down the line, one after another, and as you read each, the person starts, and turns, and looks at you.
On the dais, Vey has stopped in mid-sentence. His gavel is in the air. His mouth is open. The bidders have turned on their cushions. A fan drops.
“Stop that,” says the auctioneer, but his voice is thin. “This is a sale.”
“It is a roll-call,” you say.
You read the next. And the next. Your voice grows stronger. The hall begins to hum.
> inquiry | Keep reading. | tithe_h2
> truth | Look at Vey. | tithe_h2
> mercy | Look at the sellers. | tithe_h2
> quiet | Close your eyes. | tithe_h2

=== tithe_h2 | The Hall Answers
They answer. It starts with the sellers, and it spreads. A man, then a woman, then a whole row, rising to their feet and calling out, in cracked voices, *Here.* They say it as the children said it at the Sea. They say it as the Listeners said it on the plain. A cry, a murmur, a wave.
*Here. Here. Here.*
The bidders on the cushions sit stunned. She lays a folded slip on the boards. She turns to the sellers. She says in a low steady voice: “I bought this one. I should like to return it.”
Vey makes a small despairing sound. He lowers the gavel.
They come in a rush. The silk-clad stewards and agents climb to the dais with their hands full of paper. They set the slips on the planks in drifts. Some are weeping. Some are grim. A few look relieved, as if a weight had been lifted. Not one meets another’s eye.
By midnight the dais is deep in paper, and the sellers are lined up to claim their own.
You are still reading, hoarse as a crow.
> inquiry | Stop. | tithe_h3
> truth | Keep going. | tithe_h3
> mercy | Drink water. | tithe_h3
> quiet | Look at the crowd. | tithe_h3

=== tithe_h3 | The Last Slip
It takes until dawn. You read the last name at first light, with the shed windows turning from grey to pearl. You have no voice left. Hao Lan takes the slip from you, kindly, and finishes it.
The hall is empty. The cushions lie in drifts. A thousand sellers have gone out into the morning. The dais is bare.
Vey sits on its edge with the gavel between his knees. He is grey with fatigue. He turns it over in his hands. He gives a small, bitter laugh.
“I have never lost a sale,” he says.
“You haven’t lost one.”
“I have lost four hundred and fifty thousand.”
“You have *returned* them.”
“It is the same in my line.” He hangs his head. After a moment he lifts it. “Will they have me, do you think? At the soup-line? I can carry a pot.”
“I think,” you say, “they would like a loud voice.”
He looks at you. He straightens. His moustache, wilted all night, curls up at the ends.
“I have the best in the Concord,” says Vey.
> inquiry | Smile. | tithe_close | +tithe_returned
> truth | Clap his shoulder. | tithe_close | +tithe_returned
> mercy | Weep. | tithe_close | +tithe_returned
> quiet | Sit beside him. | tithe_close | +tithe_returned

// ---------------------------------------------------------------- close
=== tithe_close | The Empty Dais
By evening the Tithe-Hall is closed. A board is nailed across the entrance: *Premises Cleared.*
+[how] tithe_read | Duan read four hundred and fifty thousand names aloud, and a bidder gave his back.
+[how] tithe_vault | A hundred thousand slips went up in a wind of paper and found their own way home.
+[how] tithe_bankrupt | A veiled lady bought the whole hall in tea-stained scrip, and a clerk laughed.
+[how] tithe_bell | A girl of nine counted fifty-three coins and bought her mother’s name.
+[how] tithe_returned | You read the hall’s names at the back, and the hall answered.
Hao Lan comes to find you, towards midnight, with a scroll of figures under her arm.
“I’ve done the sums,” she says. “All of them. The whole camp.” She smooths the page. “Do you know how much the Inspector has taken, in his career, from the sale of names?”
“No.”
“Eight hundred and twelve million taels.” She says it flatly. “It’s not a salary. It’s not a fortune. It’s an economy.”
“What does he do with it?”
“That,” says Hao Lan, “is the part I can’t work out.” She taps a column of figures. “It isn’t spent on a palace. It isn’t in a bank. It goes into something. A single place, every month. Five hundred thousand.” She looks up. “It looks like a salary.”
“Whose?”
“I don’t know.” She shivers. “But it’s regular, and it’s been going on for two hundred years.”
> truth | Study the page. | tithe_close2 | +b5q_tithe
> mercy | Take her hand. | tithe_close2 | +b5q_tithe
> quiet | Look at the Stair. | tithe_close2 | +b5q_tithe
> inquiry | Ask where it goes. | tithe_close2 | +b5q_tithe

=== tithe_close2 | A Salary for Heaven
“The Clerk,” says Duan Wuyi.
He has come up behind you, in the lamplight, with his satchel still on his shoulder and a smear of ink on his cheek. He is very pale. He is staring at the scroll.
“The Clerk?”
“Heaven’s Clerk. The thing that writes.” He picks up a corner of the page, with careful fingers. “We were taught it at the Academy. In the first year. A fable. A tale for children: that the Ledger is written by a clerk, who sits at a desk at the top of the world, and receives a wage.”
“What wage?”
“Names.” He swallows. “A tithe. One in a hundred. That is the fable.” He turns the page over. “It has been paid every month, for two hundred years, out of the Concord’s coffers. In silver. By the Inspector’s office.”
“To whom?”
“To the Clerk.” His voice is thin. “It is not a fable. It is a payroll.”
The lamp gutters. A wind comes down the Stair, and lifts the corner of the scroll, and lets it fall.
“There is someone up there,” says Duan Wuyi. “And we have been paying them.”
> truth | Nod. | hub_b5_b | bond:hao+3
> mercy | Hold the lamp. | hub_b5_b | bond:hao+3
> quiet | Look up. | hub_b5_b | bond:hao+3
> inquiry | Ask what the Clerk is. | hub_b5_b | bond:hao+3

`,
  scenarios: String.raw`
$ SU_TITHE_AUCTION | trust+3 respect+4 fear+4 | elder | The Elder watches her own sect bid for a pilgrim’s name.
hostile: A steward in the Azure Cloud livery raised his fan for lot two hundred and twelve. I knew him. I had signed his promotion. He bid forty taels for the name of a woman who had walked four hundred miles, and he did it with exactly the face he wears at supper.
wary: What shocked me most was the ordinariness. Nobody was cruel. The auctioneer was courteous to every seller. The bidders applauded when a high price was reached. It was a Tuesday. It was a market.
neutral: I have drafted a tariff for the Tithe-Hall many times, in committee. I never visited. It was agreed that it would be unseemly. I find that I am glad I came, and that I would give a great deal never to have had to.
warm: Hao Lan sat beside me throughout. She said nothing. At the end she took my hand and put a folded paper into it. It was the list of every name sold that night. She said: ‘Keep this one.’
devoted: There is a line in my second ledger that says: ‘I signed the tariff on the seventh. I felt nothing.’ I have crossed it out. I have written beneath it, in a large clear hand: ‘This was the first thing.’
`,
  remarks: String.raw`
% tithe_chen_later | since:tithe_bell>=3 | yue | Chen Ru has taken a job at the soup-line. She sews on the buttons that fall off the pilgrims. She says it is the first honest work she has had since she sold her name. She doesn’t like to talk about the daughter. She talks about her all the time.
% tithe_vey_later | since:b5q_tithe>=4 | hao | Vey, the auctioneer, has taken up the gavel again. He uses it to call the soup-line to order. I am told he is excellent.
`,
}
