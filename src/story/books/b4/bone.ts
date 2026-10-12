import type { Arc } from "../types";

/**
 * Book Four, arc eight: the Bone Market. On a dry white lake the name-brokers trade struck names, new identities and bound
 * debts, and the Red Scarves need names to go home with. Four approaches: bargain openly with Madam Uzun (a1, truth), burn the
 * ledgers (a2, force), sell a forged name to the Colonel's spy (a3, deceit), and buy a child out of a name-debt (a4, mercy).
 * A hidden route cashes the Lotus's old credit. Cast: Madam Uzun, the clerk Sukh, Dagva, the Colonel's spy Qadan, the child Tuya.
 */
export const bone: Arc = {
  id: "bone",
  name: "The Bone Market",
  scenes: String.raw`
=== bone_entry | The White Lake
The lake has been dry for a hundred years, and the bed of it is a plain of white crust, flat as a table, glaring under the high sun. It crackles underfoot. Flags of grey and red and black snap above it.
There are no goods on the stalls. No cloth, no meat, no pots. On every counter lies a ledger. Behind each sits a figure in a hooded coat, writing, with a clerk at the elbow and a queue before. The queues are silent. They shuffle forward with their eyes on the ground. Some are weeping.
“Names,” says Temur, with distaste. “They sell names. Struck names, dead names, names that belong to no one. A man who wants a new life buys one. A woman who owes a debt can sell hers.” He spits. “It is the only market on the Steppe where the Listeners do not trade.”
“Why here?”
“It is the one place the wind cannot reach.” He pulls his hat low. “The salt kills the grass. The wind goes round.”
Dagva has gone quiet. He looks at the stalls with hungry, frightened eyes.
> truth | Walk up to the biggest awning, and ask to speak with whoever keeps the books. | bone_a1s1
> force | Look at the great black tent in the centre, where the ledgers are stored. | bone_a2s1 | needs:4
> deceit | Notice a man in a Garrison greatcoat, buying a name with a bag of silver, and ask Hao Lan what he is. | bone_a3s1
> mercy | Notice a girl of eight on a block at the end of a row, with a tag round her neck, and a clerk calling a price. | bone_a4s1
> inquiry | Show the broker the black ribbon Madam Ash gave you, and ask to see what the Lotus is owed. | bone_h1 |  | lotus_trusted | The Lotus has no credit in your name.

// ---------------------------------------------------------------- a1: Madam Uzun
=== bone_a1s1 | The Biggest Awning
It is a pavilion rather than an awning: a vast canopy of bleached canvas on forty poles, hung with strings of bone beads that click in the wind. Beneath it stands a counter forty feet long, of white-washed boards, piled with ledgers. Clerks scurry. Queues shuffle. In the middle, on a throne of stacked salt-blocks, sits a woman of enormous size.
She is as broad as a wardrobe and as tall as a door. She wears a robe of grey silk, tied with a red cord, and a headdress of bone and silver that adds a foot to her height. Her face is round and cheerful and creased with laughter-lines, her eyes small, black and sharp. She has a pipe in the corner of her mouth. She is reading a ledger upside down, with evident pleasure.
“Madam Uzun,” says Temur, gloomily. “She runs it.”
“Does she bite?”
“Only if you cheat.”
The great woman looks up. She takes the pipe out of her mouth. She beams.
“A customer,” she says, in a rich contralto. “And such a particular one. Come and sit, my dear. Tell me what you need.”
> truth | Sit. | bone_a1s2
> mercy | Bow. | bone_a1s2
> quiet | Look at the ledgers. | bone_a1s2
> inquiry | Ask what she sells. | bone_a1s2

=== bone_a1s2 | What She Sells
“Everything,” says Madam Uzun. She waves the pipe. “That is the beauty of it. A name is the most versatile commodity in the world.” She ticks off on her fingers. “Fresh names, unissued. Struck names, second-hand. Dead names, cleaned and pressed. Borrowed names, by the week. Names for the old, for the young, for the lost. I have a lovely selection of aliases.” She chuckles. “I even do repairs.”
“Repairs?”
“If you are a little bit cracked.” She winks. “I can put in a new surname. People are astonished at the difference.”
Hao Lan is staring at her with expressions of horror and fascination. “It is illegal,” she says faintly. “Section forty of the Register Act.”
“Not here,” says Madam Uzun, cheerfully. “Not on the salt. The Concord has no jurisdiction on dry lakes. It is in the treaty of three hundred and seven.” She lowers the pipe. “I read it myself. I am a great one for the small print.”
“I thought,” says Hao Lan, “that nobody had.”
“Oh, my dear,” says Madam Uzun. “That is why it is so profitable.”
> truth | Smile. | bone_a1s3
> mercy | Ask who buys. | bone_a1s3
> quiet | Watch. | bone_a1s3
> inquiry | Ask why she does it. | bone_a1s3

=== bone_a1s3 | Why
“Because they come,” says Madam Uzun. She puts the pipe down. Her small bright eyes are suddenly quite shrewd. “They come in the thousands. Deserters. Debtors. Women running from husbands. Boys running from the levy. Widows running from creditors. Old men who have outlived their own sins.” She spreads her great hands. “They have nowhere else to go. I give them a door.”
“At a price.”
“At a price.” She smiles. “A fair one. I am not a charity. But I have never sold a child.” She taps the counter. “That is my rule. I buy and sell names. I do not buy and sell people. The two are very different.”
“Are they?”
“They are on my side of the lake,” says Madam Uzun. “On the other side, I cannot say.”
She nods to the east, past the awnings, past the rim of the crust, to where a second, smaller market stands in a hollow, under black canvas.
“There are others,” she says. “I am not the worst. I am only the largest.”
> truth | Ask about the other side. | bone_a1s4
> mercy | Thank her. | bone_a1s4
> quiet | Look east. | bone_a1s4
> inquiry | Ask what the price of a name is. | bone_a1s4 | npc:SU_BONE_MARKET

=== bone_a1s4 | The Price
“It depends,” says Madam Uzun. She takes a ledger from the nearest pile and opens it. “On the age. On the quality. On the provenance. A plain name, a common one, comes to ten silver. A noble one, fifty. A family name with a house attached, five hundred.” She turns a page. “A name with no history at all, a perfectly clean one, is the dearest. Nobody has ever used it. It has no sins.”
“Where do you get them?”
“I make them.” She taps her temple. “I sit here at night, and I invent them. I have a gift. I can do three hundred a week.” Her round face is wistful. “My favourite is Orchid. It is a girl’s name. It has a lovely sound. I have sold it four times.”
“Four?”
“It keeps coming back.” She sighs. “Orchids die. It is a flaw.”
You look at Dagva. He is standing a pace behind you, stiff as a stick, with his hands clenched. He looks young. He looks frightened. He is staring at the ledger.
“I need one,” he says.
“Of course you do,” says Madam Uzun, gently.
> truth | Say there are fifty-three. | bone_a1s5
> mercy | Look at Dagva. | bone_a1s5
> quiet | Wait. | bone_a1s5
> inquiry | Ask for a bulk rate. | bone_a1s5

=== bone_a1s5 | Fifty-Three
“Fifty-three,” says Madam Uzun. She takes the pipe from her mouth and looks at you for a long moment. “Deserters. Red Scarves.” She whistles softly. “That’s a lot of lives.” She taps the pipe on the counter. “It is two thousand six hundred and fifty silver, at the going rate. I take a discount for numbers.”
“We haven’t that.”
“No.” She considers. “I did not think so.” She leans back, and her salt-block throne creaks. “You are the one who asks. The wind has been talking about you for a month. I have a great respect for the wind.” She scratches her chin. “I could offer a credit.”
“A credit?”
“A loan. Against a future service.” Her small eyes glitter. “I have a particular need. There is a man, a Garrison officer, who has been buying names from the other side. A great many. He is selling them on. I should like to know why.”
“And in return?”
“Fifty-three names,” says Madam Uzun, “of the finest quality, in the colour of your choice.”
> truth | Accept. | bone_a1s6
> mercy | Ask who. | bone_a1s6
> quiet | Think. | bone_a1s6
> inquiry | Ask what the risk is. | bone_a1s6

=== bone_a1s6 | The Other Side
It takes you all afternoon to cross. The lake is bigger than it looks; the crust cracks and bites; the heat shimmers. By the time you reach the hollow your lips are split and your eyes are dazzled. The second market is small and dark. It stands under black canvas, in a shallow pit, with no flags and no noise. A dozen stalls. A dozen ledgers. A few clerks, hunched.
There are no queues. The customers come singly, in the half-dark, muffled, and are admitted by a dwarf with a lantern. They go in. They come out. They do not speak.
Hao Lan has her notebook out, under her cloak. Her pencil flies. “It is very quiet,” she says. “It is the quietest market I have ever seen. I do not like it.”
A man is coming out of the nearest tent. He is tall and thin and wears a grey Garrison greatcoat with the collar turned up. He carries a leather satchel, which he holds tight to his chest. He has a long pale face, a drooping moustache, and the harried eyes of a man pursued.
He sees you. He stops.
“Corporal Erdene?” says Hao Lan.
> truth | Wait. | bone_a1s7
> mercy | Step forward. | bone_a1s7
> quiet | Watch. | bone_a1s7
> inquiry | Ask Hao Lan who he is. | bone_a1s7

=== bone_a1s7 | Qadan
It is not Erdene. He is taller. He is older. He has a heavy dark face, a nose like a hawk’s, and the cold flat eyes of a professional. He looks at Hao Lan with a flicker of recognition, and then, deliberately, looks away.
“Qadan,” says Hao Lan, under her breath. “The Colonel’s adjutant. He kept the files.” She swallows. “He was at the Seventh Chancery in my time. He had a desk by the window.”
“What is he doing?”
“Buying.” She watches him slip the satchel under his arm. “He bought sixty names last week. I have a note of it. They were all children’s.”
You stare. “Children?”
“From the school.” Her face has gone grey. “The Colonel is selling them. The names. The identities. He sends the children off to the forts, to the Garrison, to the Chancery. He keeps no record.” She presses her lips together. “He is making them disappear.”
“Why?”
“So that there is nobody to ask,” says Hao Lan.
> truth | Follow him. | bone_a1s8
> mercy | Hold her hand. | bone_a1s8
> quiet | Wait. | bone_a1s8
> inquiry | Ask where. | bone_a1s8

=== bone_a1s8 | A Name for Every Child
You follow him at a distance. It is simple enough; the crust is open and bright and the heat is blinding. He makes for a covered cart on the edge of the pit, with two dark horses and a driver. He climbs up. He lifts the cloth. You are close enough, now, to see inside.
There are boxes. Small wooden boxes, a dozen of them, stacked. Each is labelled with a number. The driver opens one. It is full of tags, small brown cards, each with a name and a date.
Qadan checks them. He ticks them off in a notebook. He is brisk, efficient, bored.
“Eight hundred and forty,” he says. “Good. That’s the school’s allotment. Another three hundred next month.” He closes the lid. “Take them to the fort. Tell the Colonel I shall be a day late.”
“Sir.”
“And Dorj.” The driver turns. “Keep that cart covered. If anyone asks, it’s salt.”
The cart rattles away.
Hao Lan is weeping silently. “Eight hundred and forty,” she whispers. “Eight hundred and forty children.”
> truth | Go to Madam Uzun. | bone_a1s9
> mercy | Hold her. | bone_a1s9
> quiet | Think. | bone_a1s9
> inquiry | Ask what the tags are for. | bone_a1s9

=== bone_a1s9 | The Report
You tell Madam Uzun everything. You do it that night, in her great pavilion, among the clicking beads, with the lamps lit and her clerks sent away. She listens. She does not interrupt. Her round face loses its good humour little by little, until it is quite still. When you have finished she takes the pipe out of her mouth, and puts it down, and says, in a different voice:
“Eight hundred and forty.”
“Yes.”
“From the school.” Her great hands lie on the counter. “I have heard rumours. For a year. I thought they were slander.”
“It is true.”
“Of course it is.” She closes her eyes. “I am a very stupid woman. I told myself I was giving people doors.” She opens them. They are wet. “I never thought where the doors led.”
She rises, and stands to her full height, vast and silent in the lamplight.
“Fifty-three names,” she says. “And a favour. Anything. Name it.”
> truth | Ask for the Red Scarves’ names. | bone_a1s10
> mercy | Ask for the children’s. | bone_a1s10
> quiet | Think. | bone_a1s10
> inquiry | Ask for Qadan’s ledger. | bone_a1s10

=== bone_a1s10 | A Fair Exchange
She gives you all three. She does it that night, with her own hand, writing by lamplight in her vast ledger. She makes out fifty-three new names for the Red Scarves, good plain honest ones: Ox, Willow, Mill. She makes out a page of eight hundred and forty more, in a fair copy, with a note in the margin: To be restored to their owners. She signs it with her seal, an enormous bone ring.
And she gives you Qadan’s ledger. She has had it copied. It is a thick, grey, greasy book with a record of every sale. She hands it over with a flourish.
“There,” she says. “It will take you a month to read. It will hang the Colonel.”
Dagva has been waiting at the edge of the lamplight. She calls him over. She hands him a slip of paper. He reads it, slowly. His thin face is working.
“Hollow Reed,” he says. “Is that me?”
“It is,” says Madam Uzun. She pats his cheek, with great tenderness. “It is a lovely name. I have been saving it for a special occasion.”
> truth | Thank her. | bone_close | +bone_bargained
> mercy | Smile. | bone_close | +bone_bargained
> quiet | Take the ledger. | bone_close | +bone_bargained
> inquiry | Ask what comes next. | bone_close | +bone_bargained

// ---------------------------------------------------------------- a2: the ledgers
=== bone_a2s1 | The Black Tent
It stands in the centre of the ring, a squat windowless pavilion of black felt, ringed with guards. They are not soldiers. They are big, silent men in leather aprons, with clubs. They stand shoulder to shoulder at the flap, never speaking. A bell hangs over the door. A dog is chained at each pole.
“The vault,” says Temur. “That is where she keeps the master-books. The old ledgers. Every name she has ever sold, and to whom. Forty years of them.” He shakes his head. “It is the one place no one goes.”
“Why?”
“Because it is the Concord’s,” says Hao Lan, grimly. She has been sketching from behind a barrel. “See the lock. Chancery pattern. A seven-lever. Nobody on the lake could have made it.” She taps her pencil. “It was installed. I think by treaty.”
“By treaty?”
“The market is licensed.” Her face is white. “The Concord lets her run it. In return she keeps a copy of every ledger in that tent. And the Chancery has a key.”
You look at the tent. You look at the guards. You think of eight hundred and forty children.
“Then it is not hers,” you say. “It is theirs.”
> force | Plan it. | bone_a2s2 | needs:4
> truth | Say it is a trap. | bone_a2s2
> quiet | Watch the guards. | bone_a2s2
> mercy | Think of the deserters. | bone_a2s2

=== bone_a2s2 | If It Burns
“It would burn,” says Shu Ning. She has been crouched by the cart all afternoon, with a handful of grey powder in her palm, sniffing it. “It’s dry as tinder. Felt, canvas, paper. It would go up in a minute.” She rubs the powder between her fingers. “I could make a fuse.”
“There are people inside.”
“There are not. The guards are outside. The clerks leave at dusk.” She is flat as ever. “It is a store, not a dwelling.”
“And the deserters who rely on the names?”
“Their names are already sold.” Her cold grey eyes narrow. “If the ledger burns, it burns the record. Nobody can prove who they were.” She sets down the powder. “It protects them.”
Hao Lan makes a small sound. “And it destroys the evidence.”
“Of what?”
“Of everything.” Her voice shakes. “Every name that was sold to the Garrison. Every child. If the Colonel has a copy, it burns. If the Chancery has one, it burns. But if we do not take them first, no one will ever know what was done.”
You stand there. The sun is sinking. The lake glows pink.
> force | Decide. | bone_a2s3
> truth | Ask Madam Uzun. | bone_a2s3
> quiet | Think. | bone_a2s3
> mercy | Ask what the children would want. | bone_a2s3

=== bone_a2s3 | Both
“We take first,” you say. “Then we burn.”
It is the sort of plan that Ren Qiao would approve of. It is bold, and brutal, and simple. You lay it out on the sand with a stick: a diversion on the east side, a team of three through the back flap, a run to the carts with as many ledgers as they can carry, and a fuse on a long timer. Shu Ning will make the fuse. Hao Lan will pick the books.
“What diversion?” says Temur.
“A fire,” you say. “In the other market.”
“The black one?”
“Yes.”
He looks at you. His broken-nosed face breaks slowly into a grin. “I shall tell Odval to get her pipe,” he says. “She plays a marvellous alarm.”
It is dusk when you begin. The sky is violet. The lake is a plate of dull rose. Odval stands at the edge of the crust with her bone pipe at her lips, and plays three notes, high and shrill. Across the white plain, in the hollow, a guard lifts his head.
> force | Go. | bone_a2s4
> truth | Wait. | bone_a2s4
> quiet | Check the fuse. | bone_a2s4
> mercy | Say a prayer. | bone_a2s4

=== bone_a2s4 | Fire in the Dark
It catches fast. The black canvas is saturated with oil. The first spark sets it alight in a rush, and a great sheet of flame goes up, orange and roaring, and a column of black smoke boils into the sky. Men shout. A bell clangs. The guards at the vault turn, as one, toward the fire, and begin to run.
You go in at the back.
It is dark inside, and close, and stifling. Rows of shelves rise to the roof, crammed with ledgers: grey cloth-bound volumes, greasy, thumbed, thick as bricks. The smell of old paper and dust is overwhelming. A single lantern burns on a hook. By its light, Hao Lan is already at the nearest shelf, scanning the spines.
“Ninth shelf!” she hisses. “The school accounts! Third row!”
You haul. The books are heavy. Ren Qiao’s sword has been left in the cart; you have a sack, and your own hands. You fill it. You fill another. Gu is at your shoulder, staggering under a load of volumes, his eyes red from the smoke.
Outside, the roar of flames is growing.
> force | Hurry. | bone_a2s5
> truth | Check Hao Lan. | bone_a2s5
> quiet | Keep hauling. | bone_a2s5
> mercy | Warn Gu. | bone_a2s5

=== bone_a2s5 | Forty Years
There are more than you can carry. You see it at once. The tent is a hundred feet long, and every shelf is full. There are thousands of books, perhaps tens of thousands. The record of forty years of selling people their own selves. The weight of it presses on the air.
“We can’t take them all,” gasps Hao Lan.
“Take the school’s.”
“I have.” She holds up a thick bundle. “And the Garrison’s. And the Chancery’s. And—” She stops. Her eyes are fixed on the shelf at the end, where a single volume, apart from the rest, lies on a stand, bound in black.
She crosses to it. She opens it. She reads.
“Oh,” she says.
“What?”
“It is the master index.” Her voice is a whisper. “It lists every ledger. Every sale. Every buyer. Every name.” She turns a page. “And every one of them has been entered in the Chancery’s copy.” She looks up, horrified. “Madam Uzun has been informing on her own customers for forty years.”
> force | Take it. | bone_a2s6 | needs:4
> truth | Close it. | bone_a2s6
> quiet | Read. | bone_a2s6
> mercy | Look for Dagva’s name. | bone_a2s6

=== bone_a2s6 | The Informer
“She didn’t tell them,” says Hao Lan, trembling, as the smoke thickens. “She had no choice. It is a licensed trade. The Chancery had the right to inspect. She gave them a duplicate every month.” She is skimming the pages. “And every one of her customers who ever bought a name is in here. With a number.”
“Why?”
“So that they could be found.” Her face is white. “So that when the Chancery wanted someone, they knew which name to look for.”
You think of the Red Scarves, hiding under their new names. You think of the deserters in the Orchard, the runaways in the villages, the whole shadow people of the Steppe, who bought a safe life from a smiling giantess and gave her their trust.
They have been sold.
“Burn it,” you say.
“All?”
“All.” You shove the black book into the sack. “Everything. Every page. Let no one find it.”
The roof is alight. The first burning drip falls on your shoulder.
> force | Run. | bone_a2s7
> truth | Grab Hao Lan. | bone_a2s7
> quiet | Cover your face. | bone_a2s7
> mercy | Find Gu. | bone_a2s7

=== bone_a2s7 | Out
You come out through the back flap, gasping, with your sacks on your shoulders and your eyes streaming. The night air hits like cold water. Behind you the tent is a tower of flame. The roof has fallen in. A spiral of sparks goes up, a thousand feet high, and drifts across the salt-flat like a swarm of stars.
Shu Ning is waiting with the cart. “Quick!” she shouts. “Get them on!”
You throw the sacks aboard. Gu staggers. Hao Lan falls, and is dragged up by Temur. The cart lurches into motion. The ponies bolt. Behind you there are shouts, and a gun goes off. A ball howls over your head.
“The guards!” cries Gu.
“Down!”
You drop on the floor of the cart, in a heap of ledgers. Dust and ash rain down. You cannot see. You cannot breathe. You can hear, above the roar of the fire, a woman’s voice, huge and furious and anguished.
“Stop them!” bellows Madam Uzun. “Stop them! They are burning my books!”
> force | Hold on. | bone_a2s8
> truth | Look back. | bone_a2s8
> quiet | Keep down. | bone_a2s8
> mercy | Feel sick. | bone_a2s8

=== bone_a2s8 | Madam Uzun’s Face
You look back. You cannot help it. She has run out onto the salt, in her grey silk, with her headdress flying. She stands in the open under the burning sky, a vast silhouette against the flames, with her arms upflung. She looks like a mountain. She looks like a goddess of ruin.
She is not looking at the cart. She is looking at the fire.
It is the saddest face you have ever seen. It is a face from which a lifetime has been torn. She stands there with her mouth open and the light shining on her wet cheeks, and she makes no sound.
“I didn’t know,” you whisper. “I didn’t know it would hurt her.”
“It’s her life,” says Hao Lan, quietly. “It’s forty years.”
“It was a lie.”
“It was hers.” She wipes her eyes. “It’s the only thing she had.”
The cart rattles on into the dark.
> force | Say nothing. | bone_a2s9 | needs:4
> truth | Look away. | bone_a2s9
> quiet | Weep. | bone_a2s9
> mercy | Ask to turn back. | bone_a2s9

=== bone_a2s9 | The Black Book
You read it by lantern-light, in the cart, in the dead of night. All of you. It takes until dawn. You read it in turns, aloud, a page at a time, in whispers. Hao Lan reads the first. Duan Wuyi the second. The Elder, with her silver comb in her lap, the third. Gu, haltingly, the fourth.
It is a record of everything. Every name that was ever sold. Every buyer. Every number. Every identity. The Red Scarves are in it. The deserters are in it. The runaways, the debtors, the lost. A man who now keeps a mill at Green Mill is in it. A woman who now lives as a priest in Kuan Landing. A Censor of the Seventh Chancery. A Matriarch’s cousin.
And on the last page, in a neat clerk’s hand, a single entry:
Fang. Inspector. Purchased 3rd of Spring. Eight hundred and forty names, in bulk. Purpose: reserve.
“Reserve,” whispers the Elder.
“He is building one.” Hao Lan’s voice is thin. “A reserve of nameless children. For the Great Sealing. In case the nine fail.”
> force | Close the book. | bone_close | +bone_burned
> truth | Say the word. | bone_close | +bone_burned
> quiet | Bow your head. | bone_close | +bone_burned
> mercy | Weep. | bone_close | +bone_burned

// ---------------------------------------------------------------- a3: the spy
=== bone_a3s1 | A Man in a Greatcoat
“A Garrison adjutant,” says Hao Lan. She has her notebook out, and is scribbling behind a pile of crates. “See the epaulettes. The silver braid. The way he holds himself.” She frowns. “I have seen him before.”
“Where?”
“In the Seventh Chancery. On the second floor. He had a window.” She chews her pencil. “He is called Qadan. He is the Colonel’s man. The one who keeps the files.”
You study him across the crust. He is thin and sallow and heavy-browed, in a long grey greatcoat. He is standing at a stall in the black hollow, haggling with a clerk in a low voice. He carries a leather satchel, which he never lets out of his hand.
“What is he buying?”
“Names,” says Hao Lan. “In bulk.”
“Why?”
“I do not know.” She tucks her pencil behind her ear. “But I should very much like to find out.”
She looks at you, with her head on one side.
“I have an idea,” she says.
> deceit | Hear it. | bone_a3s2
> truth | Say no. | bone_a3s2
> quiet | Listen. | bone_a3s2
> mercy | Ask if it is safe. | bone_a3s2

=== bone_a3s2 | The Idea
 says Hao Lan. “A name. A perfectly forged one. With a hook in it.” “He will take it back to the fort. He will file it. And in a week, when he looks, there will be a very strange thing in his files.”
“What thing?”
“A name,” she says, “that does not exist. But that exists in his own handwriting.”
You frown. “I do not follow.”
“Neither will he.” She taps her notebook. “I shall invent a person. A man of forty, an engineer, with a past. A very detailed past. I shall give him a mother, a trade, a house, a creditor. I shall make him convincing. And I shall sell him to Qadan as a deserter, wanting a new identity.”
“And then?”
“And then Qadan will give him a new name. And the Colonel will have two men in his files who are the same man.” Her eyes are bright. “And he will go looking for the first. And he will not find him. And he will begin to doubt his own records.”
“That is cruel.”
“It is bureaucratic,” says Hao Lan. “It is much worse.”
> deceit | Smile. | bone_a3s3
> truth | Warn her. | bone_a3s3
> quiet | Think. | bone_a3s3
> mercy | Say it is clever. | bone_a3s3

=== bone_a3s3 | Mr Tao
His name is Tao Ming, and he exists for three days. He is born in a tent in the black hollow, over a pot of tea, in Hao Lan’s notebook. He has a trade: he is a surveyor, who deserted the Fifth Pike after a quarrel with his captain. He has a mother in a village on the Long River. He has a limp. He has a debt of two hundred silver to a money-lender in Kuan Landing. He has a nervous habit of cracking his knuckles.
Hao Lan acts him herself. It is astonishing. She has put on a man’s coat, and a false moustache of horsehair, and a hat pulled low. She hunches her shoulders. She speaks in a rough, hoarse, anxious baritone. She sits at the stall in the black hollow, shaking, a hunted man, with his whole life in a satchel.
“I need a name,” she says. “A new one. By morning.” She looks over her shoulder. “They are after me.”
The clerk, a hunched silent man, nods. He opens his ledger. He writes.
You watch from behind a barrel, with your heart in your mouth.
> deceit | Watch. | bone_a3s4
> truth | Hold your breath. | bone_a3s4
> quiet | Keep still. | bone_a3s4
> mercy | Pray for her. | bone_a3s4

=== bone_a3s4 | The Sale
It takes twenty minutes. At the end of it Hao Lan, in her false moustache, stands up from the stall with a slip of grey paper in her fist, and a bag of silver heavier than she came in with. She does not look round. She walks slowly, with a limp, out of the tent. She goes to the cart. She climbs in. She collapses on the floor, shaking.
“Did it work?” you whisper.
“I don’t know.” Her voice is a squeak. “He was standing right behind me. He was reading the ledger over my shoulder.” She is laughing, helplessly. “I could smell his cologne. It was sandalwood.” She pulls off the moustache. “He asked me my name. I said Tao Ming. He said, ‘What a coincidence. I knew a Tao Ming once.’”
“What?”
“He didn’t,” says Hao Lan. She is crying with laughter. “He had a sister called Ming. I saw it in his file. I made him a brother.”
She wipes her eyes.
“He bought it,” she says. “He bought the whole thing. I could see him wanting to.”
> deceit | Laugh. | bone_a3s5
> truth | Say it was brave. | bone_a3s5
> quiet | Pass her water. | bone_a3s5
> mercy | Hold her. | bone_a3s5

=== bone_a3s5 | The Hook
It is a week before it bites. He is a courier, in grey, on a lathered horse. He carries a message, in a leather tube, for Hao Lan. She opens it at the roadside, by the light of the fire.
She reads it. She goes quite white. And then, slowly, she begins to laugh.
“What?” says Gu.
“It’s from Qadan.” She hands it round. It is signed with a rubber stamp. It says: To Mr Tao Ming, surveyor. We have been looking for you. A discrepancy in the records. Your mother is at the fort. She is asking for you. Please come.
“His mother,” says Duan Wuyi, with a faint shudder.
“She died in the winter of year four hundred and eleven,” says Hao Lan, wiping her eyes. “I made it up. Qadan does not know that. He thinks I am real. He has found a woman who calls herself Tao Ming’s mother, and put her in a cell.”
“Who?”
“I have no idea,” says Hao Lan. She is shaking with laughter. “Some poor old thing. The Colonel is holding an innocent grandmother in his dungeon, in the belief that she is a deserter’s mother.”
> deceit | Stare. | bone_a3s6
> truth | Say it is dreadful. | bone_a3s6
> quiet | Look at the fire. | bone_a3s6
> mercy | Ask what you must do. | bone_a3s6

=== bone_a3s6 | A Grandmother in a Cell
You do not laugh. You cannot. It strikes you suddenly, like a blow, that there is a woman in the fort, somewhere, in a cell, whom you put there. She is old and frightened. She is wondering why.
“We must get her out,” you say.
Hao Lan stops laughing. She stares at the paper in her hand. Her mouth opens. She closes it.
“Oh,” she says in a small voice. “Oh, Heaven. What have I done?”
“You have done what a clever person does. You have made a thing too good.”
“I did not think.”
“No.” You rub your face. “That is the trouble with clever plans.”
Duan Wuyi has taken the paper. He reads it again. He is no longer smiling. “It is a classic error,” he says. “I have seen it a hundred times. A forgery that works too well. It generates its own victims.” He lowers the sheet. “One cannot create a false person without some real person paying.”
Hao Lan puts her head in her hands.
> mercy | Comfort her. | bone_a3s7
> truth | Plan. | bone_a3s7
> quiet | Hold the letter. | bone_a3s7
> mercy | Ask what the grandmother is called. | bone_a3s7

=== bone_a3s7 | Aunt Sorgan
“I do not know,” says Hao Lan, hoarsely. “He does not say.” She turns the paper over. “But I can find out. If I write to Qadan. As Tao Ming.” She wipes her nose. “I can ask. I can say: please, tell me about my mother. I do not remember her face.”
She does. She writes the letter that night, in a trembling hand, and Temur sends it with a rider. The reply comes in four days. It is brief. It gives a name. It says that Tao Ming’s mother is a woman called Sorgan, aged sixty-three, a laundress from the Orchard, who was arrested for sheltering a deserter.
You and Hao Lan look at each other.
“Sorgan,” she says. “That is the laundress. The one Yue spoke of.”
“The one who gets into the fort.”
“Yes.” She swallows. “They have her. They have caught her, because I told a lie about a deserter.” She puts down the letter. Her eyes are wide. “And now she is in prison under my name.”
You say nothing. Beyond the fire, in the dark, a wolf howls.
> mercy | Take her hand. | bone_a3s8
> truth | Say you will go. | bone_a3s8
> quiet | Look away. | bone_a3s8
> mercy | Say she will be freed. | bone_a3s8

=== bone_a3s8 | An Honest Letter
She writes one more. It takes her all night, and is the hardest thing she has ever done. She tears up nineteen drafts. She says, at last, in a flat dull voice: “I will tell him the truth.”
“All of it?”
“All.” She dips her pen. “That Tao Ming does not exist. That I made him up. That I am a clerk of the Seventh Chancery, and I did it for a game.” She writes. “That Sorgan is innocent. That I would like her to be released.”
“He will have you arrested.”
“Perhaps.” Her voice is steady. “But he will have the truth.”
She signs it with her own name. She seals it with her own seal. She gives it to the courier at dawn. Her hand does not shake.
It is a bold, foolish, honest thing. It is the thing she was made for.
You think of a card in a bone-white script: write what is true. You think she would be proud.
The courier rides off east. Hao Lan watches him go until he is a speck.
> mercy | Stay with her. | bone_a3s9
> truth | Say it was right. | bone_a3s9
> quiet | Pour tea. | bone_a3s9
> mercy | Hold her. | bone_a3s9

=== bone_a3s9 | The Reply
It comes in a week. It is not what she expected. It is a single line, on a card, in a hand she knows. It says: Thank you. I have wondered for years whether anyone in the Chancery could still write a true sentence. —Q.
Beneath it, on the same card, in a different ink, is a second line.
The grandmother has been released. I regret the inconvenience. She sends her love, and a pie.
Hao Lan reads it three times. She sits down very suddenly on the grass.
“A pie,” she says.
A small parcel in oilcloth comes with the courier. It is warm. She unwraps it. Inside is a slab of dark crusty pastry, still steaming, smelling of onion and mutton and thyme.
She bites. She chews. She closes her eyes.
“It’s the best pie I’ve ever had,” she says, with her mouth full. Tears run down her cheeks. “It’s from a woman I put in a cell.”
Gu takes a piece. He says nothing. He chews, and swallows, and looks at the sky.
> deceit | Eat. | bone_a3s10
> truth | Smile. | bone_a3s10
> quiet | Share it. | bone_a3s10
> mercy | Hold Hao Lan. | bone_a3s10

=== bone_a3s10 | Qadan’s Second Letter
He writes again, a month later, in cipher. You decode it by lantern-light in the hill country, with Hao Lan’s tables. It is long. It is very careful. It says that he is the Colonel’s adjutant, and has been for eleven years. It says that he is tired. He gives the purpose. He gives the number. He gives the date of the shipment.
It ends: I have a daughter who is nine. She goes to the school. I had her name changed in the spring, to protect her. I do not know where she is now.
Hao Lan reads it aloud, in a monotone, and puts it down.
“He is a spy,” she says. “For the Hollow Lotus.”
“Is he?”
“He is a spy for himself.” She takes off her spectacles. “He has been buying names for the Inspector, and hiding the children’s real ones in the margin. Eight hundred and forty. He has the key.” She pauses. “He wants us to take it.”
She looks up.
“He wants a trade,” she says. “His daughter, for his ledger.”
> deceit | Accept. | bone_close | +bone_forged
> truth | Say you will try. | bone_close | +bone_forged
> quiet | Think. | bone_close | +bone_forged
> mercy | Say yes. | bone_close | +bone_forged

// ---------------------------------------------------------------- a4: Tuya
=== bone_a4s1 | A Girl on a Block
She stands on a wooden box at the end of the row, in the full blaze of noon. She is eight, perhaps. Thin as a stick, in a grey smock too short for her. Her feet are bare and cracked. A card hangs on a string round her neck. It is a plain brown tag, with a number.
Beside her a clerk in a brown coat is calling, in a bored sing-song. “A child’s name! A fresh one, never used! Eight years old, sound in wind and limb! Eight silver! Eight!” He glances at the sky. “Come, come. She’s a very pretty name.”
Nobody bids. The queue shuffles past. A few glance. A few look away.
“What is that?” you say.
“A debt,” says Temur. His face is grim. “She is being sold for her father’s. He owed the lake. He couldn’t pay. They take the child’s name instead.” He spits. “It is called a name-pledge.”
“What happens to her?”
“She loses it.” He looks away. “She is nobody, after. She goes into the market as a servant. For life.”
The child stands quite still. She stares at the horizon. She is not crying.
> mercy | Go to her. | bone_a4s2
> truth | Bid. | bone_a4s2
> quiet | Watch. | bone_a4s2
> inquiry | Ask the clerk her name. | bone_a4s2

=== bone_a4s2 | Tuya
“Tuya,” says the clerk. He yawns. “The name is Tuya. It’s an old one. It means: light.” He taps the tag. “But she won’t need it. We’ll cancel it when she’s sold.”
You look at the child. She turns her head. Her eyes are very dark, and quite calm, and a little too old. They rest on your face. She doesn’t smile.
“Hello,” you say.
“I know who you are,” says Tuya.
She says it in a flat clear treble, without emphasis. The clerk blinks. “What did you say?”
“She’s the one who asks.” The child doesn’t look at him. “I heard it from the grass. Everyone’s talking.” She lifts her chin. “She’s come to the lake.”
There is a pause. The clerk has stopped his sing-song. Behind you, someone laughs, uneasily.
“Don’t,” says Temur, in your ear. “It is not allowed to interfere. It is the law of the lake.”
“What is the law?”
“That a pledge is a pledge.”
> mercy | Ask what her father owed. | bone_a4s3
> truth | Say it is wrong. | bone_a4s3
> quiet | Look at the clerk. | bone_a4s3
> inquiry | Ask what the debt is. | bone_a4s3

=== bone_a4s3 | Forty Silver
“Forty silver,” says the clerk. “Principal and interest. He borrowed it at the new moon, for seed-corn. He was to repay at the harvest.” He consults a ledger. “He did not. He ran. The pledge came due.”
“Forty silver,” you say.
“That is the debt. The child is worth eight.” He shrugs. “The market takes a loss. It is a charity.”
You do not have forty silver. You have thirty-one, and a compass, and a brass whistle. You look at Hao Lan. She is counting in her head. She shakes it.
“Thirty-one,” she whispers.
“I know.”
“Nine short.”
“I know.”
A voice behind you says, drily: “I have nine.”
It is Dagva. He has come up silently, with his scarf over his mouth. He holds out his open palm. In it, in a heap, are nine silver coins, bright and new. They are the first he has earned. They are a week’s wages from Yue’s caravan.
“I can’t,” you say.
“You can,” says Dagva. “It’s mine.”
> mercy | Take it. | bone_a4s4
> truth | Thank him. | bone_a4s4
> quiet | Hold his hand. | bone_a4s4
> inquiry | Ask why. | bone_a4s4

=== bone_a4s4 | Why Dagva
“Because I sold myself,” says Dagva. He says it very low, to the ground. “When I was twelve. For a pledge. My father owed. They took my name.” He swallows. “I had to join the levy to pay it. I was a soldier at twelve. I never had a name, after. I was Number Fourteen.”
“Dagva.”
“It is not my name.” He lifts his thin face. “It’s the one the Red Scarves gave me. My real one I never knew.” His voice cracks. “It was sold.”
You stand there, very still, with the coins in your palm.
“I would like her to keep hers,” says Dagva. “It is the only thing I can do.”
You close your hand. The coins are warm. You nod.
You go up to the block. You lay forty silver on the counter, thirty-one and nine. The clerk counts it with a bored face. He pushes it into a drawer. He takes a stamp, and a pad, and a slip of paper. He writes, in a rapid scrawl, and presses the stamp.
“Pledge cancelled,” he says.
> mercy | Take Tuya’s hand. | bone_a4s5
> truth | Lift her down. | bone_a4s5
> quiet | Thank the clerk. | bone_a4s5
> inquiry | Ask for the tag. | bone_a4s5

=== bone_a4s5 | The Tag
She steps down off the box without help. She stands on the white crust, in the sun, a head shorter than your shoulder, and holds out her hand. You take it. It is small and hard and dry as a bird’s claw. The clerk is still writing. He doesn’t look.
She lifts the string from round her neck. She holds out the tag.
“It’s yours,” she says.
“I don’t want it.”
“It’s the thing that says what I cost.” Her voice is flat. “You should have it. It’s proof.” She presses it into your palm. “So you remember.”
You read it. It is a plain brown card, with a number and a date and three words in a clerk’s scrawl. Name-pledge. Forty silver. You close your fingers. You don’t say anything.
“Thank you,” says Tuya. She says it formally, as one repeats a lesson. “I am grateful.”
“You owe me nothing.”
“I know,” she says. “That’s why I said it.”
> mercy | Smile. | bone_a4s6
> truth | Take her to the cart. | bone_a4s6
> quiet | Hold her hand. | bone_a4s6
> inquiry | Ask where her father is. | bone_a4s6

=== bone_a4s6 | Her Father
“Dead,” says Tuya. “Probably.” She says it without feeling. “He ran east. He was going to the fort. He thought the Colonel would pay him for information.” She swings your hand. “He was a very stupid man.”
“I am sorry.”
“I’m not.” She considers. “He was kind. But he was stupid. He sold me.” She pauses. “He cried when he did it.”
“He had no choice.”
“He had a lot.” She looks up at you with cool dark eyes. “He could have not borrowed. He could have gone to the Matriarch. He could have asked.” A tiny shrug. “He was too proud.”
You say nothing. You have a feeling that you are being taught a lesson.
“I won’t be,” says Tuya. “Proud.” She skips a step. “I’ll ask for things. Always. If I need them.” She beams up at you. “Can I have a bun?”
You laugh. You cannot help it.
“Yes.”
> mercy | Buy a bun. | bone_a4s7
> truth | Take her to the cart. | bone_a4s7
> quiet | Smile. | bone_a4s7
> inquiry | Ask what else she needs. | bone_a4s7

=== bone_a4s7 | A Great Many Things
She needs a great many. She lists them on the way to the cart, in a voice like a bell, with the air of a person who has been drawing up the inventory for years. A blanket. A pair of shoes. A comb. A knife, for cutting string. A friend. A proper bath. A book with pictures in it. A horse. “Not a big one,” she says. “A little one. The sort you can sit on.”
Dagva carries the bun. Gu carries her satchel, which is a flour-sack. Hao Lan trots beside her, taking notes. The Elder waits at the cart with her arms folded and her silver comb on one side of her head. She looks at the child for a long time.
“You are very small,” she says.
“I’m eight.”
“You are very small, for eight.”
“I’ve been hungry.”
“Yes.” The Elder kneels. It takes some effort. She looks Tuya in the face. “I have a great many rules,” she says. “I am very old, and set in my ways. I should like to make an exception.”
“What is it?”
“I should like to feed you,” says the Elder, “until you are sick.”
> mercy | Smile. | bone_a4s8
> truth | Watch. | bone_a4s8
> quiet | Step back. | bone_a4s8
> inquiry | Look at Tuya. | bone_a4s8

=== bone_a4s8 | Sick
She is, by nightfall. She eats a whole mutton dumpling, half a roast fowl, a bowl of millet, a dish of fried dough, and four apricots, and is sick in a bush. She comes back and eats three more dumplings. The Elder sits beside her, upright, with a bowl of broth in her hands, watching, with a look of fierce, bewildered happiness. She has never fed a child in her life.
“Slowly,” she says, severely. “You will choke.”
“I won’t.”
“You will.”
“I’ve done it before,” says Tuya, through a mouthful. “I know how.”
The Elder opens her mouth. She shuts it. She looks at you, helplessly. Her face is working.
“She is very rude,” she says.
“She is hungry.”
“It is the same thing.” She wipes the child’s chin with her handkerchief. It is lawn, embroidered with a lotus. She looks at it. She looks at the child. “Eat,” she says. “Eat. There is more.”
She does not seem to notice that she is crying.
> mercy | Hold her hand. | bone_a4s9
> truth | Pass the dumplings. | bone_a4s9
> quiet | Look away. | bone_a4s9
> inquiry | Ask what she thinks of Tuya. | bone_a4s9

=== bone_a4s9 | The Elder’s Lesson
“She is not afraid of me,” says the Elder, much later, when the child is asleep in the cart with her head on a rolled blanket and the lamp turned low. “I find that extraordinary. Everyone is afraid of me. I have a reputation.” She smooths her skirt. “She asked me for a bun. She did it as one asks a servant.”
“And you gave it.”
“I gave it. I would have given her anything.” She laughs shakily. “I am a very silly old woman. I have been Elder of the Law Hall for twelve years, and I have never once given a child a bun.”
“You can start now.”
“I intend to.” She looks at the sleeping face. It is round and peaceful and a little grubby. “She looks a little like Mengjiao. Does she not?”
“I never met her.”
“No.” The Elder’s voice drops. “She had that jaw. That very particular obstinate little jaw.” She tucks the blanket round the child’s shoulders. “I should like her to meet.”
> mercy | Smile. | bone_a4s10
> truth | Say she will. | bone_a4s10
> quiet | Sit with her. | bone_a4s10
> inquiry | Ask what her name means. | bone_a4s10

=== bone_a4s10 | Light
“Light,” says the Elder. She says it softly, to the sleeping child. “It is a good name. It was a good name for her to keep.” She sits in the dark, with her hands in her lap, looking at the faint shine of the lamp on the girl’s hair. “I wonder how many are like her.”
“Thousands.”
“I know.” She lifts her eyes to the stars. “I could not save them all. I have not the strength. I have not the time. But I could save one. I could give one a bun.”
She smiles, in the dark.
“Is it not extraordinary,” she says, “how much a bun can do?”
You say nothing. You listen to the night: the click of the camels’ bells, a distant howl, the faint sigh of a sleeping child. The white lake gleams under the moon, silent, empty, a plain of bone. Behind you, at the other side of the lake, the market lights are going out one by one.
“We shall have to come back,” you say.
“Yes,” says the Elder. “One day. With a larger bun.”
> mercy | Laugh. | bone_close | +bone_tuya_free
> truth | Say you will. | bone_close | +bone_tuya_free
> quiet | Look at the lake. | bone_close | +bone_tuya_free
> inquiry | Ask about the Colonel’s school. | bone_close | +bone_tuya_free

// ---------------------------------------------------------------- hidden: the Lotus's credit
=== bone_h1 | The Black Ribbon
You take it from your sleeve. It is a narrow strip of black silk, frayed at one end, knotted in the middle. It is a mourning-ribbon. Madam Ash gave it to you in the mourning-shop, with a pot of tea, and said it was not a gift. You hold it out across the counter.
Madam Uzun looks at it. Her small bright eyes do not move. The pipe falls from her lip.
“Where did you get that?” she says.
“From the woman who sold it to me for a penny.”
“Hui Niang.” She whispers it. “She’s alive.” She lifts a trembling hand to her mouth. “She’s alive.” She sinks onto the salt-block throne. It creaks. “Oh, my girl. My girl.”
You wait. The beads click in the wind.
 says Madam Uzun, in a voice stripped of all its richness. “She found me when I was a nobody. A runaway. She said: you have a head for figures. She taught me to read. She set me up.” She wipes her eyes with a vast sleeve. “She said: one day you’ll repay me. And when you do, I want it to be with the market.”
> inquiry | Wait. | bone_h2
> truth | Ask what she means. | bone_h2
> mercy | Hold her hand. | bone_h2
> quiet | Look at the ribbon. | bone_h2

=== bone_h2 | The Lotus Account
“There is an account,” says Madam Uzun. She heaves herself up, and goes to a locked chest behind the throne, and takes out a heavy iron key. “In my own name. In the vault. It has been open for fifteen years.” She fits the key. “It has been receiving a hundredth part of every sale I have ever made.”
The lid lifts. Inside is a leather ledger, and a small iron box. She opens the box.
It is full of silver. It is a hoard. Coins of every kind: the Concord’s square-holed cash, river silver, Steppe rounds, gold wafers, a few old pearls. There must be twenty thousand. It glitters in the lamplight.
“For the Lotus,” says Madam Uzun. “For the struck. For whatever Hui Niang chose.” She wipes her cheek. “She never asked for it. I never offered. I kept it safe.”
“It’s a fortune.”
“It is a very small sum,” says Madam Uzun, “for what I owe.”
She pushes the box across the counter.
> inquiry | Take it. | bone_h3
> truth | Say it is too much. | bone_h3
> mercy | Thank her. | bone_h3
> quiet | Open the ledger. | bone_h3

=== bone_h3 | A Use for Silver
You spend it on names. It is the only sensible thing. You buy the Red Scarves’ new names, all fifty-three, at the full price; and Hanming’s; and a handful more for those who need them. You buy Tuya a name that nobody can take away. You buy Qadan’s daughter’s, back, with a note: to be restored.
And with the rest, you buy something else.
You buy the pledges. All of them. Every child on the lake, every debt-bound servant, every name-pledge in the whole of the black hollow and the white. Madam Uzun counts them out. There are seven hundred and twelve. She cancels them with a flourish of her bone ring, one after another, in a great sweeping scrawl.
It takes two days. By the end of it the lake is full of children, running, shrieking, in the sun, with their old names in their mouths. They do not know what has happened. They only know that the clerks have gone, and the brokers are asleep, and somebody has brought a barrel of sweets.
Madam Uzun sits on her throne and watches them. Her round face is wet and shining.
“There,” she says. “Hui Niang will be pleased.”
> inquiry | Smile. | bone_close | +bone_credit
> truth | Bow. | bone_close | +bone_credit
> mercy | Weep. | bone_close | +bone_credit
> quiet | Sit with her. | bone_close | +bone_credit

// ---------------------------------------------------------------- close
=== bone_close | The Rim of the Lake
You leave the lake at dawn. The sun climbs over the white crust and turns it to flame. The market behind you is a ring of bone-coloured awnings, still, silent, with the smoke of the cooking-fires rising in thin threads. A single flag hangs from the tallest pole. It has been lowered to half-mast.
+[how] bone_bargained | You bargained with a giantess in grey silk, and fifty-three men walked away with new names.
+[how] bone_burned | You burned a vault of ledgers, and found out that the market was a Chancery tool.
+[how] bone_forged | You sold a false man to a Garrison spy, and then told the truth to save an innocent woman.
+[how] bone_tuya_free | Forty silver and a deserter’s nine bought a child her name.
+[how] bone_credit | The Lotus’s old account bought seven hundred and twelve pledges, and cancelled them all.
Madam Uzun stands on the rim of the crust to see you off. She has put on a plain brown coat. She has taken off her headdress. Without it, she is merely a very large, very tired, very kind woman. She has her pipe in her hand.
“I am going to close it,” she says.
“The market?”
“Not today. Not this year.” She smiles faintly. “But I am going to start to wind it down. A name-broker who loses her faith is a poor thing. I think I should like to be a baker.”
“A baker.”
“I make a good bun,” says Madam Uzun. “It is the only thing I ever made that did not need a ledger.”
> truth | Bow. | bone_close2 | +b4q_bone
> mercy | Hug her. | bone_close2 | +b4q_bone
> quiet | Smile. | bone_close2 | +b4q_bone
> inquiry | Ask for the recipe. | bone_close2 | +b4q_bone

=== bone_close2 | Something Better Than Silver
She gives you a name. It is not for you. It is for the road. She writes it on a scrap of grey paper, in her great scrawling hand, and folds it twice. She says it is a name that opens doors. She says that if you are ever stuck in a Garrison fort, with a laundress and a basket, you should say it to the guard.
“What is it?”
“Aunt Uzun,” she says, with a twinkle. “It is rather famous. The Colonel’s wife is a customer.”
You tuck it in your sleeve.
“I am going to miss you,” says Madam Uzun, gruffly. She wipes her nose on her sleeve. “It is absurd. I have known you for three days. But you are the first person in forty years who ever asked me why.”
“Why what?”
“Why I did it.” She looks out over the lake, bright and white and silent. “And I found, when I answered, that I did not have a reason.”
She lifts her pipe.
“Go with the grass,” she says. “Come back with a bun.”
> truth | Promise. | hub_b4_b | bond:hao+1
> mercy | Wave. | hub_b4_b | bond:hao+1
> quiet | Go. | hub_b4_b | bond:hao+1
> inquiry | Look back once. | hub_b4_b | bond:hao+1

`,
  scenarios: String.raw`
$ SU_BONE_MARKET | trust+3 respect+3 fear+4 | elder | The Elder walks through a market where names are sold, and is offered her own.
hostile: A clerk looked up from his ledger and said, “Su Wanru. Elder of the Law Hall. Struck, in advance. Reserve price, four hundred.” I asked what he meant. He said it was a fair price for a ghost.
wary: I have spent my life writing names. I never considered that they might be bought. I find it clarifies a good many things about the Chancery, and none of them are pleasant.
neutral: A woman beside me sold her mother’s name for a loaf of bread. I did not speak. I have not been able to forget the way she counted the coins.
warm: There was a child on the block. I do not like to speak of it. You know. You were there. I will say only that I have never in my life wanted to pay for anything so much.
devoted: If I had the money I should buy the whole market, and burn it, and walk home. I have, I think, forty silver. Shall we see what that will do?
`,
  remarks: String.raw`
% bone_dagva_later | since:b4q_bone>=4 | ren | Dagva has a new name. He will not say what it is. He signs his letters with a small drawing of a horse.
% bone_tuya_later | since:bone_tuya_free>=6 | gu | Tuya has learned the word ‘ledger’ and says it to everything. She called my brother a ledger yesterday. He took it as a compliment.
`,
};
