import type { Arc } from "../types";

/**
 * Book Four, arc thirteen: the Empty Kurgan. Seven hundred years ago Yu Ling, who wrote the Nine Cards and tore her own page from
 * Heaven's Ledger, was buried on the Steppe under a mound ringed with nine iron posts, and the mound is empty. Inside is the
 * founders' confession: the Ledger has a fixed number of lines, every ascension is paid for by one name struck, and the name has
 * always been taken from a child kept in reserve. Four approaches: read the nine rooms aloud (a1, truth), break the iron
 * wardens (a2, force), dig a decoy and slip in under the Garrison's sappers (a3, deceit), and tend the dying keeper (a4,
 * mercy). A hidden route answers the first Spare when she asks. Cast: Keeper Itgel, Captain Sorgi, the First Spare,
 * Duan Wuyi, Hao Lan, the Elder, Odval, Temur.
 */
export const tomb: Arc = {
  id: "tomb",
  name: "The Empty Kurgan",
  scenes: String.raw`
=== tomb_entry | Nine Iron Posts
It stands alone on the plain, a long way from any road: a round green mound sixty feet high, with grass growing on it and not a single stone. Round its foot, at regular intervals, nine posts of black iron stand upright, each twice the height of a man and thin as a spear. They are rusted to the colour of dried blood. Nothing grows within the ring they make.
Odval has stopped the cart. She has not said a word for a mile.
“The tomb of the First Voice,” says Temur softly. “Yu Ling.” He takes off his white hat. “We do not come here. It is not forbidden. It is only that nobody has ever come back with a different face.”
Hao Lan is already out of the cart, with her notebook, walking round the ring. Duan Wuyi follows, with his hands behind him.
“The posts are not iron,” he says. “Look. The grain is wrong. They are some kind of seed-metal.”
“What are they for?”
“To keep something in,” says Duan. “Or to keep something out.” He frowns. “I cannot tell which way they face.”
> truth | Walk in through the gap between the first and ninth post. | tomb_a1s1
> force | Notice the posts have eyes: a single dim red point in the top of each, turning slowly toward you. | tomb_a2s1 | needs:4
> deceit | Notice a Garrison supply wagon at the horizon, and the glint of surveyors’ brass. | tomb_a3s1
> mercy | Notice a thin blue thread of smoke from a hut at the back of the mound, and a figure sitting in front of it. | tomb_a4s1
> inquiry | Hold up the ninth card and say you have come to answer her. | tomb_h1 |  | card_9 | You do not yet hold the card that asks.

// ---------------------------------------------------------------- a1: the nine rooms
=== tomb_a1s1 | The Gap
There is a gap between the first post and the ninth, a doorway as wide as a cart. It has no lintel, no gate. The ground runs through it in a smooth track, worn by seven hundred years of people who came this way and were never seen again. Beyond it the mound rises, steep, green, silent.
You step through. Nothing happens.
The air changes. It goes cool, still, damp, as though you had walked into a cellar. The sound of the wind stops. You can hear your own heartbeat. The posts stand behind you in a ring, dim red points of light in their tops, watching.
A door opens in the hillside.
It is not a door you saw. It was not there. It is simply open, a low black arch in the turf, and from it comes a smell of old stone and dust and, very faintly, tallow.
“Oh,” says Hao Lan, behind you. “It was waiting.”
Duan Wuyi lifts the lamp. His hand is steady. The light goes down a stair.
> truth | Go down. | tomb_a1s2 | npc:SU_TOMB_VOICES
> mercy | Hold Hao Lan’s hand. | tomb_a1s2
> quiet | Listen. | tomb_a1s2
> inquiry | Ask Duan what he expects. | tomb_a1s2

=== tomb_a1s2 | The First Room
There are nine steps, then a room. It is small and round, with a floor of packed earth, a domed ceiling, and walls of dressed grey stone. A single lamp burns in a niche, of its own accord, with a steady white flame. In the centre stands a plain stone table. On it lies a bowl of red dust.
On the wall above is an inscription.
It is long. It runs round the whole curve of the room in small, close, regular letters, very old. Hao Lan reads it with her lips moving. She goes pale.
“It is a confession,” she says. “It begins: We, the nine, being of sound mind and corrupt purpose.”
“Read it.”
“I cannot read it all. There is too much.” She turns, wide-eyed. “But I can read the first line. It says: To enter the second room, say aloud one thing you have done that you would not have written.”
Nobody speaks. The lamp burns.
“I see,” says Duan Wuyi, quite softly. “It is to be a confession in turn.”
> truth | Say it. | tomb_a1s3
> mercy | Wait for Duan. | tomb_a1s3
> quiet | Step back. | tomb_a1s3
> inquiry | Ask what happens if you refuse. | tomb_a1s3

=== tomb_a1s3 | What You Would Not Have Written
You go first. You say it plainly, to the lamp. You say a thing you have never told anyone: that you were afraid, on the Ash Bridge, and that you let Ren Qiao take the lantern. It is a small thing. It is the truest thing you can think of.
The wall hums. A line of the inscription glows, faintly, and fades. A door opens in the opposite wall, low, narrow, round.
Hao Lan goes next. She says: “I forged a signature when I was fourteen. I let a woman go to the salt-pans.” Her voice is flat. The lamp flickers. Another door.
Duan says: “I knew the Reserve was a child.” He says it very quietly. “I signed the paper anyway. I told myself it was an abstraction.”
The Elder says: “I wrote her name beneath the fourteenth.”
Nobody speaks. The wall glows. The doors are open, all four.
The Elder lifts her head. Her face is grey. “I have always told myself,” she says, “that it was an act of love.”
“Was it?”
“It was an act of cowardice,” says Su Wanru. “I could not write a fifteenth line.”
> truth | Take her hand. | tomb_a1s4
> mercy | Say nothing. | tomb_a1s4
> quiet | Look at Duan. | tomb_a1s4
> inquiry | Ask which door to take. | tomb_a1s4

=== tomb_a1s4 | The Second Room
This room is square and full of paper. It rises from floor to ceiling in neat grey stacks: slips, scrolls, ledgers, bound in ribbon, each marked with a seal. It smells like the Annex, like wet leaves. A narrow path winds between the stacks to a table at the far side.
“These are names,” says Hao Lan, reading a label. “Struck ones. From the first century. From the Great Tide.” She touches a scroll with a fingertip. It crumbles. “They are all here. All the ones that fell.”
“Who kept them?”
“The Order.” Duan is turning pages with extreme care. “Seven hundred years of it. Look. This is a list of ascensions. A date. A name. A name.” He frowns. “Every ascension has two names.”
“Two?”
“One written. One struck.” His voice thins. “I do not understand. Every time someone rises, someone falls. They are paired.”
He turns another page. Another pair. Another. Hundreds, in a long close column. He reads for a full minute with his mouth open.
“They are not random,” he says. “The struck ones are all children.”
> truth | Look at the list. | tomb_a1s5
> mercy | Hold the Elder. | tomb_a1s5
> quiet | Stand still. | tomb_a1s5
> inquiry | Ask for the first pair. | tomb_a1s5

=== tomb_a1s5 | The First Pair
It is on the first page, at the top of the first scroll, in a different hand from the rest: a firmer, squarer, more confident script. Hao Lan finds it. She says nothing for a moment. Then she reads it aloud.
“Ascended: Yu Ling, called the Registrar. Struck in her stead: a girl of seven, of the Orphans’ Terrace, called by no name. Reason: the Ledger has nine hundred and ninety-nine lines for the living, and one for the sealed.”
Her voice breaks. She goes on.
“If a hundredth is added, one must be removed. This is the law of the page. We did not make it. We have made use of it.”
Nobody speaks. The lamp spits.
“It is a cost,” says Duan, hoarsely. “It is what the Ledger costs. Each name that rises means a name that falls.” His soft face has gone to pieces. “They found a way to choose which. They chose a child. They chose a child who would not be missed.”
The Elder says, in a perfectly level voice: “Seven hundred years.”
“Yes.”
“And the Reserve?”
“It is the same child,” says Duan. “Kept in advance.”
> truth | Read the next line. | tomb_a1s6
> mercy | Sit down. | tomb_a1s6
> quiet | Look at the Elder. | tomb_a1s6
> inquiry | Ask what Yu Ling did. | tomb_a1s6

=== tomb_a1s6 | What Yu Ling Did
“She tore her page,” says Hao Lan. She reads on, the page trembling in her hands. “She wrote: I have risen, and a child has fallen in my place. I did not know the price. I was told it afterwards, by the eight. I have torn my page from the Ledger so that I cannot be recorded. I shall go down where she went. I shall listen.”
“Listen,” says the Elder.
“She did not stay in the Ledger. She did not rise. She went into the hole.” Hao Lan wipes her eyes with her wrist. “She took the child’s place. She became the First Voice of the Order, and she sat in the dark for the rest of her life, and she listened.”
“She was not struck.”
“No. She struck herself.” Hao Lan lowers the page. “It is the only way to take a place that was not meant for you.”
Duan Wuyi sits down heavily on the edge of a stack of ledgers. His glasses have fogged.
“Nobody told us,” he says. “All my life. They taught us that Yu Ling was a saint.”
“She was,” says the Elder. “That is the horrible part.”
> truth | Go on. | tomb_a1s7
> mercy | Hold Duan. | tomb_a1s7
> quiet | Look at the dust. | tomb_a1s7
> inquiry | Ask what the other eight did. | tomb_a1s7

=== tomb_a1s7 | The Other Eight
They did not repent. That is the next line, and the cruellest. Hao Lan finds it in a different ink. The eight founders who had agreed to the first pair did not follow Yu Ling into the dark. They stayed. They built the Azure Cloud Sect upon the page she had torn. They called it the Crimson Abyss. They called it a trial. They called the Reserve a mercy.
“They said: if the page must be paid for, let it be paid for cleanly,” reads Hao Lan. “They made the Law. They set the Elder over it. They gave each generation a child to keep, so that when a master wished to rise, a name would be ready.”
“A name would be ready,” repeats the Elder.
“The Law Hall,” says Duan. “The Registrar. The Reserve.” He closes his eyes. “It was never about the abyss. The abyss was the cover. It was a machine for supplying names.”
“And the Great Sealing?”
“Was the machine’s greatest harvest,” says the Elder. “Fifteen. In a night. To pay for the ascension of three masters.”
She is very still.
“I signed it,” she says.
> truth | Say it was not your fault. | tomb_a1s8
> mercy | Take her arm. | tomb_a1s8
> quiet | Wait. | tomb_a1s8
> inquiry | Ask what she wants to do. | tomb_a1s8

=== tomb_a1s8 | The Ninth Room
The last room is at the heart of the mound, down a long stair. It is a round chamber, and it is empty.
There is no table. No lamp. A single circular bench of stone runs round the wall, and on it, evenly spaced, sit nine small clay bowls. Each is full of red dust. In the centre of the floor is a hollow, a little round depression, the size of a seated child.
It is quite bare. It has been bare for a long time.
“There is no body,” says Hao Lan. Her voice is hushed. “She is not here.”
“No,” says the Elder. “She is in the abyss.”
“Then who was buried?”
“Nobody.” Duan has gone to the hollow. He crouches. There is a faint dent in the earth, a smoothness, the print of a small child’s shape. “It is not her grave,” he says. “It is another’s. They made it for her.”
He looks up.
“It is the First Spare’s,” he says. “They gave her a grave. And then they left it empty.”
> truth | Kneel beside it. | tomb_a1s9
> mercy | Put a hand on the dent. | tomb_a1s9
> quiet | Stand still. | tomb_a1s9
> inquiry | Ask what the bowls are for. | tomb_a1s9

=== tomb_a1s9 | Nine Bowls of Dust
“Names,” says Hao Lan, touching the nearest bowl. “They are the ashes of names. The Order burned the pages of the struck, once a year, and kept the dust.” She lifts a pinch. It sifts through her fingers, dull red. “Each bowl is a century.”
“Nine bowls. That is only nine hundred years.”
“They are full.” She shakes her head. “I think they stopped. I think someone stopped burning them.”
Duan looks at the Elder. “Someone chose to keep them.”
“Yes.”
“Who?”
“The Order,” says the Elder. “The Listeners. They kept the ashes. They did not forget.” She lays a hand against the cold stone. “They kept them for seven hundred years, in case someone came back to ask.”
Nobody speaks. The dust lies in its bowls, red as rust.
Hao Lan brushes her palm on her robe. The red stays. It will not wash. It has soaked into the grain of her skin, and she looks at it, and her face changes.
“I think,” she says slowly, “that it is a kind of thanks.”
> truth | Bow your head. | tomb_close | +tomb_read
> mercy | Say the First Spare’s name, which you do not know. | tomb_close | +tomb_read
> quiet | Take a pinch of dust. | tomb_close | +tomb_read
> inquiry | Ask how many pairs there were. | tomb_close | +tomb_read

// ---------------------------------------------------------------- a2: the wardens
=== tomb_a2s1 | The Wardens
They wake as you come within a spear’s length. The red points in the tops of the posts flare, steady, and the posts themselves begin to lean. They do not fall. They bend, slowly, in a smooth ironic curve, like reeds, and straighten again, and where each post stood there is now a figure. A thin tall black iron man, ten feet high, with arms like spears, and a face that is only a smooth plate with one red eye.
There are nine. They move without noise. They close.
“Wardens,” says Duan Wuyi, in a strangled voice. “They are in the Annex’s plates. Seed-iron constructs. They guard a place that is not to be entered.” He backs away. “They have no discretion.”
“How do we stop them?”
“We do not enter.”
“We are going to.”
“Then,” says Duan, “we fight.”
Ren Qiao draws. He does it unhurriedly, with his scarred face quite calm, and the long sword flashes in the pale sun. “Nine,” he says. “It is a good number. I have always liked it.”
He steps into the ring.
> force | Stand beside him. | tomb_a2s2 | needs:4
> truth | Call out to them. | tomb_a2s2
> quiet | Watch the eyes. | tomb_a2s2
> mercy | Pull Duan back. | tomb_a2s2

=== tomb_a2s2 | Iron
It is nothing like a duel. The wardens do not tire. They do not feint. They strike in nine slow, relentless sweeps, from nine directions, like the ribs of a closing fan. Ren Qiao ducks under the first. He parries the second with a clang that sets your teeth buzzing. He is thrown back, rolling, and comes to his feet with blood on his lip.
“Their joints!” he shouts. “They are hinged at the elbow!”
You see it. The wardens’ limbs are not solid. Each arm is a series of iron plates, pinned. The pins are the weak point. A sharp blow could shear one.
You pick up a stone.
It is a poor weapon. But you have a long throwing arm, from a childhood spent skipping flat pebbles on the river, and the nearest warden is only twelve feet off. You take aim. You throw.
The stone hits the pin. There is a sharp crack. The warden’s forearm drops off at the elbow and falls to the grass with a clang.
The red eye turns toward you.
“Ah,” says Ren Qiao, reasonably. “I think you have been noticed.”
> force | Throw again. | tomb_a2s3
> truth | Duck. | tomb_a2s3
> quiet | Run. | tomb_a2s3
> mercy | Shout to Ren. | tomb_a2s3

=== tomb_a2s3 | Temur’s Bell
It is Temur who ends it, in the end, though not as he intended. He has stayed by the cart. He has a small brass bell in his pocket, which he rings for the horses at feeding time, and in the confusion he pulls it out and rings it, hard, with a clatter.
The wardens stop.
All nine. In the middle of a stroke. They stand perfectly still in the grass with their arms raised, and the red eyes dim. Silence falls.
“What did I do?” says Temur.
“You rang a bell,” says Ren Qiao, panting.
“I know. But why did that—”
“The Hush bells,” says Duan, slowly. “They are tuned to a note that silences a Listener. These things were made by a Listener.” He looks at the bell. “They are tuned to listen. They heard it.”
“They heard a horse-bell.”
“They are not looking for a note,” says Duan. “They are looking for a thing that rings true. A horse-bell is always honest.”
The nearest warden, with its dropped arm, turns its head. It lowers itself, jointed, to one knee. The others do the same, one by one, bowing.
It is the oddest thing you have ever seen.
> force | Step forward. | tomb_a2s4
> truth | Thank Temur. | tomb_a2s4
> quiet | Watch the wardens. | tomb_a2s4
> mercy | Ask what they want. | tomb_a2s4

=== tomb_a2s4 | Kneeling Iron
They do not want anything. That is the strangest part. They kneel in the grass in a ring, black, ten feet tall, with their red eyes dimmed, and wait. When you walk past, they do not move. When you reach the door in the mound, which has opened for you, they remain bowed, like servants who have been dismissed.
“They were made to be defeated,” says Duan, wonderingly. “That is the lock. You are not meant to win. You are meant to find the thing that makes them stop.”
“A bell.”
“A true note. In any form.” He shakes his head. “It was never a test of strength. It was a test of whether you would pick up a stone, or a bell.”
Ren Qiao has lowered his sword. He is staring at the nearest warden with an expression you cannot read.
“I broke its arm,” you say.
“You did.”
“Will it hold a grudge?”
The warden’s red eye brightens. A thin high whine comes from its chest, then a clack, and the dropped forearm rises from the grass of its own accord, and re-seats itself in the socket. The warden flexes its fingers.
It bows again.
> force | Bow back. | tomb_a2s5
> truth | Say you are sorry. | tomb_a2s5
> quiet | Go in. | tomb_a2s5
> mercy | Thank it. | tomb_a2s5

=== tomb_a2s5 | The Door Is Not Locked
Inside, there is a short corridor, and a door at the end of it. It is a plain wooden door, banded with iron, with a ring for a handle. It has no lock. You push. It swings in.
The room beyond is large, bare, and strangely bright. The walls are polished. A seam of pale light runs round them at the height of a man’s chest, from some source you cannot see, and the floor is cut into a great circle of grey and white tiles, like a clock-face. At the centre stands a pedestal. On it, a book.
“It is a trap,” says Ren Qiao instantly.
“It is a lectern,” says Duan.
“It is both.” Ren Qiao lowers his voice. “Nobody leaves a book out for seven hundred years because they want it read. They leave it out because they want to know who will pick it up.”
Duan takes out his spectacles and wipes them on his sleeve. He peers.
“The cover is stamped,” he says. “It says: The Register of the Spared.”
The Elder, in the doorway, goes grey as a candle.
> force | Take it. | tomb_a2s6 | needs:4
> truth | Ask Duan to read. | tomb_a2s6
> quiet | Wait. | tomb_a2s6
> mercy | Hold the Elder. | tomb_a2s6

=== tomb_a2s6 | The Register
It is a ledger, bound in black. On the first page is a single entry, in a hand you know: the firm, square script of Yu Ling.
“A girl of seven. Called Spare. Taken from the Orphans’ Terrace on the first day of the first month of the year of the Fire Horse. Fed. Clothed. Taught to read, at her own request. Told nothing.”
“Spared,” whispers Duan.
The second line is in a different hand. “Struck at the ninth hour of the third day. For the ascension of the Registrar.”
Below it are others. Hundreds. A line each. A name each, then a date. Then a word, in the margin. Taken. Taken. Taken.
Ren Qiao is looking over the Elder’s shoulder. His scarred face has gone slack. “That is my mother’s year,” he says. He points. “And that. And that. They are all in the same hand.”
“The Registrar’s,” says the Elder. Her voice is a thread. “It is the Registrar’s duty to keep the Register.”
She lifts her eyes, very slowly.
“I did not know there was a book,” she says. “It was kept from me.”
“Was it?”
“It was kept,” says Su Wanru, “from every one of us.”
> force | Close it. | tomb_a2s7
> truth | Read on. | tomb_a2s7
> quiet | Take her arm. | tomb_a2s7
> mercy | Hold the book. | tomb_a2s7

=== tomb_a2s7 | Ren Qiao Breaks Something
He does it without warning. He takes the book from the pedestal, with both hands, and lifts it above his head, and the Elder cries out, “No—” But he is already throwing. It crashes against the polished wall, spine first. The covers fly open. Pages scatter across the tiles like startled birds.
“Ren Qiao!” cries Duan.
“I am not going to leave it,” says Ren Qiao. His voice is shaking. His whole body is shaking. “I am not going to leave it here. For somebody else to find. For somebody else to put a name in.” He staggers back. “It is a list of children.”
“It is evidence.”
“It is a list,” says Ren Qiao, “of everybody I ever failed.” His scarred face is wet. “I held the lantern for fourteen. I was seventeen. I thought it was an honour.”
“It was,” says the Elder, gently. “It was an honour. They told you so.”
“They told me so.”
“And you believed it.”
“Yes.” He sits down on the tiles, as if his legs had been cut. “And I have not forgiven myself for believing.”
The wall where the book struck begins to glow.
> mercy | Kneel beside him. | tomb_a2s8
> truth | Say nothing. | tomb_a2s8
> quiet | Watch the wall. | tomb_a2s8
> mercy | Hold his shoulders. | tomb_a2s8

=== tomb_a2s8 | A Door in the Wall
It is the wall behind the pedestal. A seam of light runs across it, like a crack in a plaster ceiling, and widens. The stone parts. A narrow passage leads away, steeply downward, lit by the same pale seam.
“It was hidden,” says Duan, wonderingly. “Behind the Register.” He looks at the scattered pages. “They are not meant to be read. They are meant to be thrown.”
“What?”
“A man who throws a book is a man who cannot accept it.” His voice is thin. “It is the one gesture they could not have programmed. The wardens were a test of strength, but this is a test of anger.”
“I did not mean to pass a test.”
“No. That is the only way to pass.”
Ren Qiao wipes his face on his sleeve. He gets slowly to his feet. He crosses the room and begins, with stiff hands, to collect the loose pages. He does it with care. He lays them in a neat pile on the pedestal.
“I will not leave them on the floor,” he says. “Whatever else.”
> mercy | Help him. | tomb_a2s9 | needs:4
> truth | Go through the door. | tomb_a2s9
> quiet | Hold the lamp. | tomb_a2s9
> mercy | Say it is enough. | tomb_a2s9

=== tomb_a2s9 | What the Passage Held
The passage runs a hundred feet into the heart of the mound, and at the end of it is a chamber with a hollow in the floor and nine bowls of red dust. There is no inscription. There is no body. There is a low round bench, and a hollow the size of a seated child, and a smell of old, cold earth.
You stand in the doorway. The light of the seam falls on the hollow. It is smooth and shining, as though from long use.
“Someone sat here,” says Ren Qiao.
“Every year.” Duan’s voice is a whisper. “That is what the wardens are for. They keep the room clear. So that the keeper of the tomb may come in, once a year, and sit.” He touches the edge. “She sits where the child sat. She says a name. And then she leaves.”
“Who is she?”
“I do not know,” says Duan. “But the hollow is warm.”
It is. You put your hand in it. It is faintly, definitely, warm, like a seat that has just been left.
Outside, on the plain, a thin blue thread of smoke goes up from a hut.
> force | Go out. | tomb_close | +tomb_broke
> truth | Look at the hollow. | tomb_close | +tomb_broke
> quiet | Sit. | tomb_close | +tomb_broke
> mercy | Say a name. | tomb_close | +tomb_broke

// ---------------------------------------------------------------- a3: the decoy
=== tomb_a3s1 | Surveyors
They are a day behind you. You see them from the top of the next rise: a column of six wagons, a double file of riflemen, and a knot of men in plain brown coats with brass instruments on tripods. They are surveyors. They are moving across the plain in a line, taking sightings, and every hour they plant a stake.
“The Inspector’s engineers,” says Yue Zhaoning, with a spyglass at her eye. “From the Dust Mill. They have been mapping the old kurgans for weeks.” She lowers it. “They have a list.”
“Of what?”
“Of everywhere a grave might be hollow.” She grimaces. “They think the founders buried something. A treasure. A weapon. They do not know what. But they are digging, and they are very thorough.”
“They will find this.”
“By tomorrow evening.”
You look at the mound, green and quiet in the afternoon sun. Hao Lan is already sketching it in her notebook. Odval is sitting in the shade of a post, with her eyes shut, humming.
“We could dig a different one,” says Hao Lan, without looking up.
> deceit | Ask what she means. | tomb_a3s2
> truth | Say it is dishonest. | tomb_a3s2
> quiet | Watch the engineers. | tomb_a3s2
> mercy | Think of the Keeper. | tomb_a3s2

=== tomb_a3s2 | A Cheaper Kurgan
There is one four miles north. It is low and grey, half-collapsed, with a few boulders at the top and a broken post at its base. It looks like a tomb. It looks, in fact, a good deal more like a tomb than the real one, which is round and green and clean.
“A bandit’s grave,” says Yue. “Two hundred years old. Somebody looted it long ago.”
“We will leave a trail.”
“We will leave a very good trail.” Hao Lan is scribbling. “A set of plans. A drawing. A few tools. Some bones.” She looks up. “I have a bag of sheep bones in the cart. From last week’s stew.”
“Is that necessary?”
“A tomb without bones is suspicious.” She is quite serious. “I propose to leave a spade, a lantern, a bloodstained cloth, and a crude diagram of the nine posts, marked with a cross at the wrong place.”
“Won’t they notice?”
“They will notice that it is wrong,” says Hao Lan. “But only after they have spent a week digging.” She smiles faintly. “I am told it is the most effective sort of lie. The sort that costs the other man his own time.”
> deceit | Agree. | tomb_a3s3
> truth | Say you are uneasy. | tomb_a3s3
> quiet | Fetch the bones. | tomb_a3s3
> mercy | Ask what the engineers will find. | tomb_a3s3

=== tomb_a3s3 | Laying the Trail
You do it at night. Four of you, by lantern-light, on the low grey mound. Yue digs the false trench. Hao Lan arranges the bones. Temur ties scraps of Garrison-blue cloth to a bush, as if torn from a coat. The Elder drafts the diagram, in a perfect imitation of a field engineer’s pencil, with a steady hand and a face like stone.
“I feel,” she says, “remarkably like a criminal.”
“You are doing very well.”
“I know. That is what troubles me.” She adds a cross. She blots it. “When I was young I would have written a thousand pages against this sort of thing. A mock excavation. A false chart. It is everything the Law forbids.”
“And now?”
“Now I observe that I am rather good at it.” She sets down the pencil. Her mouth twitches. “I find it difficult to repent.”
Duan Wuyi, holding the lantern, makes an inarticulate noise and turns away. His shoulders are shaking. After a moment you realise he is laughing.
It is the first time you have heard him do it.
> deceit | Smile. | tomb_a3s4
> truth | Look at the sky. | tomb_a3s4
> quiet | Pack the tools. | tomb_a3s4
> mercy | Hold the lantern. | tomb_a3s4

=== tomb_a3s4 | Captain Sorgi
He arrives at dawn, on a fat grey horse, with forty riflemen and a surveyor. He is a short, round, pink, careful man of fifty, with a waxed moustache and a clipboard. He dismounts. He looks about him at the low mound, the spade, the bones, the Garrison-blue cloth. His round face lights.
“Gentlemen,” says Captain Sorgi. “I believe we have it.”
You are watching from a gully, a quarter-mile off, flat on your face in the grass with Yue. Her spyglass is trained on him. She is grinning.
“He is delighted,” she whispers. “Look at him. He is going to be promoted.”
“He will be dismissed.”
“Eventually.” She chuckles. “But not until after he has dug a trench two hundred yards long. I know Sorgi. He is thorough.” She lowers the glass. “He once spent three months excavating a rubbish-pit because the map said ‘treasure.’ It was a dead sheep.”
You watch the Captain pace the mound with his clipboard, calling out measurements. His riflemen are already unpacking spades.
“Shall we go?” whispers Yue.
“Not yet.”
“Why not?”
“I want to see his face,” you say.
> deceit | Wait. | tomb_a3s5
> truth | Feel guilty. | tomb_a3s5
> quiet | Watch. | tomb_a3s5
> mercy | Ask if anyone will be hurt. | tomb_a3s5

=== tomb_a3s5 | The Soldiers
They dig for three days. You see it all from the gully. They are boys, mostly. The kind who were taken from villages at twelve. They dig in grey shirts in the heat, shirtless by the second noon, sweat pouring off them, singing a monotonous work-song under their breaths. They are not unhappy. They are bored. Captain Sorgi goes among them, offering water and encouragement.
“He is not unkind,” says Yue, grudgingly. “That is the infuriating thing.”
“No.”
“I wanted him to be a brute. It would be simpler.” She picks a grass-stem and chews. “I have spent three days feeling sorry for a man who is digging a hole for a dead sheep.”
“Is it wrong?”
“It is a lie,” says Yue. “It is a lie that makes forty boys dig. If they find nothing, they will be ordered to dig again.”
You consider this. A boy of fifteen is taking a drink from a wooden dipper. He looks up at the sky, shielding his eyes, and for an instant his round sunburnt face is full of wonder, like a child at a fair.
“Perhaps,” you say, “we should send them something.”
> deceit | Think. | tomb_a3s6
> truth | Agree. | tomb_a3s6
> quiet | Look at Yue. | tomb_a3s6
> mercy | Fetch a cask. | tomb_a3s6

=== tomb_a3s6 | A Gift for the Diggers
It is Yue’s idea, and it is a very good one. She rides into the camp at dusk on her camel, with four casks of Salt-Road beer strapped across the beast’s back, and announces herself to the sentry as a travelling merchant. She has put on a false moustache. She speaks in a thick accent. She says that she has heard there are good fellows digging a very hot hole, and that she would be honoured if they would accept a small present.
Sorgi comes out of his tent. He looks at the casks. He looks at the moustache. His round face is troubled.
“It is irregular,” he says. “I am on duty.”
“It is only beer, sir.”
“It is two casks.”
“Four,” says Yue.
There is a pause. Behind the Captain the soldiers have gathered, silent, in a half-circle, looking at the casks with open longing.
“Four,” repeats Sorgi, weakly. He wipes his moustache. “Well. It would be uncivil to refuse.”
They drink until midnight. By dawn the whole camp is asleep, and the trench is a ragged ditch in the sun, abandoned, with a spade standing upright in the spoil.
> deceit | Slip past. | tomb_a3s7
> truth | Feel uneasy. | tomb_a3s7
> quiet | Wait. | tomb_a3s7
> mercy | Leave a note. | tomb_a3s7

=== tomb_a3s7 | Sorgi Wakes
He wakes at noon, with a pounding head, and finds a note pinned to his tent flap. It is addressed to him by name. It is in a small precise Chancery hand. It says:
Captain Sorgi. You have dug a fine trench. It is the wrong grave. The right one is a day south and has been guarded for seven hundred years. You will find nothing in it that the Inspector can use. Take your men home. Mend the ditch. Do not tell anyone you were here.
It is signed, with great care, with a small drawing of a dead sheep.
He reads it three times. He sits down on his cot. His round pink face goes through a series of changes: indignation, disbelief, dawning suspicion, and at last, to your amazement, a slow reluctant grin.
“A sheep,” he says. “The pit.”
He laughs. He is still laughing when his sergeant comes in, a quarter of an hour later, and finds the Captain sitting on the cot with the note in his fist and tears running down his cheeks.
“Sir?” says the sergeant.
“Fill it in,” says Captain Sorgi, wiping his eyes. “All of it. We are going home.”
> deceit | Smile. | tomb_a3s8
> truth | Watch. | tomb_a3s8
> quiet | Slip away. | tomb_a3s8
> mercy | Feel relieved. | tomb_a3s8

=== tomb_a3s8 | Into the Mound
You slip in under the cover of dusk. The wardens do not stir. The iron posts stand in their ring, dark, with the red points dim, and the door in the hillside opens as you come. There is no gate. There is only the gap, and the stair, and the cool still air of the cellar.
You go down with a shuttered lantern. The Elder comes last, with her hand on the wall.
“We did it,” whispers Hao Lan. Her eyes are shining. “We actually did it. A false dig. A decoy. A nonsense trail.” She hugs her notebook. “It is the best lie I have ever told.”
“It was not a lie. It was a drawing.”
“It was a very good drawing.”
“It was,” says the Elder, dryly. “I shall be sorry to lose it.”
You reach the first room. It is round, with a stone table, a bowl of red dust, and an inscription running round the dome. Duan lifts the lamp. He reads for a long time, in silence, with his lips moving.
When he turns, his soft face is grave.
“It is not what I expected,” he says. “I do not think you will be pleased.”
> deceit | Ask what it says. | tomb_a3s9
> truth | Wait. | tomb_a3s9
> quiet | Look at the Elder. | tomb_a3s9
> mercy | Hold Hao Lan. | tomb_a3s9

=== tomb_a3s9 | The Cheat in the Confession
“It says,” says Duan, “that we are not the first to arrive by a trick.” He nods at the wall. “The whole of the confession is a note to someone who would come by deceit. It begins: To you who have found us by a lie, we are not surprised.”
“What?”
“It says that every visitor in seven hundred years has come by a lie.” His voice shakes. “It says it is the only way in. It says the honest ones are stopped at the posts, because the honest ones believe they will be let in, and are not. It says only a person who has already learned to cheat the Order will see through the Order.”
“That is absurd.”
“It is exceedingly clever,” says Duan. “It means the founders knew exactly who would come. They built a lock for liars.” He folds his hands. “It continues: We were liars ourselves. You will understand.”
He lifts his eyes.
“I do not know what the rest says,” he admits. “But I think it is a very long apology.”
> deceit | Read it. | tomb_close | +tomb_decoyed
> truth | Listen. | tomb_close | +tomb_decoyed
> quiet | Hold the lamp. | tomb_close | +tomb_decoyed
> mercy | Sit down. | tomb_close | +tomb_decoyed

// ---------------------------------------------------------------- a4: the keeper
=== tomb_a4s1 | The Hut Behind the Mound
It is a squat round felt hut, patched and re-patched, with a stovepipe of tin and a thin blue thread of smoke. A woman sits on a stool in front of it, in the sun. She is very old. She is wrapped to the chin in a grey blanket, and she is peeling a turnip with a knife as long as her forearm. She does not look up.
“You are late,” she says. “The tea is cold.”
“We did not know you were here.”
“Nobody does.” She is an unwrinkled brown crab of a woman, with a hooked nose and bright black eyes. “That is the point of a keeper. You are the first in sixty years, and I have been expecting you for ninety.”
“Ninety?”
“I am ninety-four.” She sniffs. “I started waiting at four. My mother said there would be a girl with a cold black seed. She said she would ask me for a cup of tea.” She holds out the turnip. “Have you come for tea?”
> mercy | Say yes. | tomb_a4s2
> truth | Say you came for the tomb. | tomb_a4s2
> quiet | Take the turnip. | tomb_a4s2
> inquiry | Ask her name. | tomb_a4s2

=== tomb_a4s2 | Itgel
“Itgel,” she says. “Tamar’s sister. The older, and the quieter.” She resumes peeling. “She got the voice and the laugh. I got the mound.”
“Tamar did not say she had a sister.”
“She never does.” A cackle. “She is ashamed. It is a very small shame. She was thirty when she married out, and I stayed. I swore to keep the door until somebody came who could use it.” The knife goes round. “I have kept it sixty-four years.”
“Alone?”
“There is a boy who brings meal. There is a mule.” She peels. “It is not a bad life. It is quiet. I talk to the posts.”
“Do they answer?”
“They are not good talkers.” She gives a thin smile. “But they are excellent listeners. I have told them everything. They know about my first husband, and the goat, and the year I was drunk for a month.” She looks up. Her black eyes are very sharp. “You will want to go in.”
“Yes.”
“I will not stop you. I could not if I tried. But I should like you to sit with me first.”
> mercy | Sit. | tomb_a4s3
> truth | Say you are in a hurry. | tomb_a4s3
> quiet | Hold the stool. | tomb_a4s3
> inquiry | Ask why. | tomb_a4s3

=== tomb_a4s3 | A Cup of Tea
It is the best tea you have ever had. It is made with salt and butter and a little black pepper in a copper pot over the stove, and it is poured into thick clay bowls. Itgel sits across from you on a stool, with her knife on her knee, and watches you drink.
“It is a thing I have wanted to do all my life,” she says. “To pour a cup for the one who was coming.” She sighs. “I have poured it every day for sixty-four years. For nobody. I drink it myself.”
“It is very good.”
“It is terrible. I have made it wrong since I was fourteen.” She shakes her head. “But it is hot, and it is mine.”
The hut is cramped and warm. A cat sleeps on the stove. A shelf holds a row of identical clay bowls. There are nine of them, and each holds a little red dust.
“I have to ask you something,” says Itgel.
“Yes.”
“Do you know what happens when the last keeper dies?”
> mercy | Say no. | tomb_a4s4
> truth | Guess. | tomb_a4s4
> quiet | Wait. | tomb_a4s4
> inquiry | Ask what she thinks. | tomb_a4s4

=== tomb_a4s4 | When the Keeper Dies
“The door shuts,” she says. “That is all. The posts lose their eyes. The room fills with earth. In a hundred years it is only a mound.” She sips. “Nobody will mourn. It will be as if it never was.”
“Is that bad?”
“I do not know.” She tilts her head. “I have been thinking about it for sixty-four years, in the evenings. I have thought: it would be a mercy. Let it go. Let the whole business sink into the grass.” Her old mouth works. “And then I thought: no. Someone must remember.”
“Why you?”
“Because I am the one who heard her.”
You look at her. She is peering at the fire with her head on one side.
“There is a girl,” says Itgel. “In the hollow. At the bottom. She does not speak. She hums. I have sat with her every year, in the dark, on the longest night.” Her eyes are shining. “I have told her about the goat. She laughed.”
“She laughed?”
“Very quietly,” says Itgel. “It was the best thing that ever happened to me.”
> mercy | Hold her hand. | tomb_a4s5
> truth | Ask who she is. | tomb_a4s5
> quiet | Listen. | tomb_a4s5
> inquiry | Ask what she hums. | tomb_a4s5

=== tomb_a4s5 | The Girl Who Hums
“A lullaby,” says Itgel. “I do not know the words. I hum it back.” She leans back on her stool with a sigh. “She is the First Spare. I have worked it out. She is the one they took, at seven, from the Orphans’ Terrace, to pay for a woman’s rise.”
“She is dead.”
“She is struck.” Itgel’s voice is stern. “It is not the same. A dead child sleeps. A struck child waits.” She taps her chest. “I keep her company. It is all I can do. I tell her it is a long time since the Terrace. I tell her the Terrace is gone. I tell her there is a stove here, and a cat, and a very bad cook.”
“Does she answer?”
“She hums.” The old woman closes her eyes. “I used to think it was a tune. I have come to think it is a question. I think she has been asking the same thing for seven hundred years.”
“What?”
“I do not know,” says Itgel. “But it is very patient. And it is in a minor key.”
> mercy | Take her hand. | tomb_a4s6
> truth | Ask if you can hear it. | tomb_a4s6
> quiet | Look at the fire. | tomb_a4s6
> inquiry | Ask when she last went down. | tomb_a4s6

=== tomb_a4s6 | Last Winter
“Last winter,” says Itgel. “On the longest night. I took the stairs. It took me four hours. I am slow now.” She chuckles. “I sat in the hollow. I told her I was sorry. I said: I think I will not be able to come again.”
“And?”
“She stopped humming.” Her face is calm. “For the first time in sixty-four years. She was quite silent. I thought: she is angry. Or she is gone. And then she said, in a whisper, so small that I thought it was the wind—”
She stops.
“What?”
“She said: ‘Is there someone else?’”
The fire crackles.
“I said, ‘I am looking.’ I did not know what else to say. I said, ‘I am looking for someone.’” Itgel opens her eyes. They are brimming. “And that was all. I climbed the stair. I have not been down since. I do not think I can.”
She looks at you.
“You are someone else,” she says. “Are you not?”
> mercy | Say yes. | tomb_a4s7
> truth | Say you are afraid. | tomb_a4s7
> quiet | Take her hands. | tomb_a4s7
> inquiry | Ask what she needs. | tomb_a4s7

=== tomb_a4s7 | What the Keeper Needed
She needs to sleep. That is all. It is such a simple thing, and she has put it off for so long. She sits in the sun in front of her hut, with her face turned to the light, and she asks, in a small shaky voice, whether you would stay with her for a little. “Just until I drop off,” she says. “It is a long time since anyone sat by my bed.”
You stay. You sit on the stool, with her hand in yours, a dry brown claw, light as a bird. You tell her about the road. You tell her about the coast and the lamp and the nine children, and the Ash Bridge in the rain. She listens with her eyes shut, nodding, smiling at the odd places.
At the end she says: “Is there tea?”
There is. You bring it, in the thick clay bowl, and hold it to her lips. She sips. A little spills.
“Terrible,” she says, with satisfaction. “It is the worst I have ever made.”
She drops off in the middle of a sentence, with her head against your shoulder, and the cat jumps into her lap.
> mercy | Stay. | tomb_a4s8
> truth | Whisper a name. | tomb_a4s8
> quiet | Cover her. | tomb_a4s8
> inquiry | Watch the sun. | tomb_a4s8

=== tomb_a4s8 | The Key She Left
She wakes in the evening. She seems stronger. She sits up on the stool and looks at the sunset, red over the plain, and says that she has had the loveliest dream. She was a girl. She was running. There was a goat.
Then she puts her hand inside her blanket and draws out a key.
It is not iron. It is a bit of dull red glass, no longer than a finger, on a thong. It glows faintly in the dusk. She presses it into your palm and closes your fingers over it.
“That is the real door,” she says. “The posts will let you by. They have always known you. But the last room is shut, and only this opens it.”
“How do I use it?”
“You do not. You answer.” She leans back. “She will ask a question. You say yes, or no. It is very simple. It is the hardest thing you will ever do.”
“Will you come?”
“I shall be here,” says Itgel, comfortably. “With the cat.”
> mercy | Take the key. | tomb_a4s9
> truth | Thank her. | tomb_a4s9
> quiet | Kiss her hand. | tomb_a4s9
> inquiry | Ask what the question is. | tomb_a4s9

=== tomb_a4s9 | Down Into the Mound
You go down with the red glass in your fist. The stair is long and dark and the air grows warm. At the bottom there is a round room with nine bowls and a hollow in the floor.
The light is faint. Hao Lan and the Elder wait at the top, with Duan. You go on alone. It was Itgel’s one condition, and you did not argue.
You stand over the hollow. It is a little round dent in the earth, the size of a seated child, smooth and shining. There is nobody in it. There is nothing at all.
But the air hums.
It is very faint. It is a note so low you feel it in your teeth, a thin low drone, like a finger drawn round the rim of a glass. It rises. It falls. It repeats.
It is the lullaby.
You kneel. You put your hand in the hollow. It is warm.
You hum it back.
You do not know where you learned it. It is simply in your throat, a small plain tune, going up at the end like a question.
The hum stops.
> mercy | Wait. | tomb_close | +tomb_keeper
> truth | Say you are here. | tomb_close | +tomb_keeper
> quiet | Hold still. | tomb_close | +tomb_keeper
> inquiry | Say her name, which you do not know. | tomb_close | +tomb_keeper

// ---------------------------------------------------------------- hidden: the Spare asks
=== tomb_h1 | The Card That Asks
You hold up the ninth card. It is a small brown rectangle, worn soft at the corners, the brown of an old brown paper. On the back, in a thin firm hand, is written: She will ask. Answer her.
The posts see it. The red points in the tops of them dim, and brighten, and dim again, and one by one the nine black spears lean outward from the ring like flowers opening. A wind comes from the mound, though the air is still. A door appears in the green flank, low and round, with no hinge.
Hao Lan makes a small, shocked noise.
“It is a key,” she says. “It was a key all along.” She is staring at the card. “She wrote it for you. Seven hundred years ago, in the year before she tore her page. She wrote: Answer her. She knew someone would be sent with it.”
“Who is she?”
“I think,” says Duan Wuyi, in a low voice, “we are about to find out.”
The door breathes, a slow cold exhalation, like a cave.
> inquiry | Go in alone. | tomb_h2
> truth | Take the lamp. | tomb_h2
> mercy | Ask Hao Lan to come. | tomb_h2
> quiet | Wait. | tomb_h2

=== tomb_h2 | The Hollow
You go down alone. The stair is short and steep. The air is warm and has a smell of earth, of rain, of a very young child’s hair. At the bottom there is a round room with a bench and nine bowls and, in the floor, a hollow.
It is not empty.
She is sitting in it, a girl of seven in a coarse grey smock, with her arms round her knees. She has black hair cut straight at the jaw and huge dark eyes in a thin face. She is quite transparent. You can see the stone of the far wall through her, and the red glow of the dust. She does not look at you. She is looking at her feet.
She is humming.
You stop on the last step.
The hum falters. The child lifts her head. Her face is perfectly calm, like that of one who has finished a very long sum.
“You have a card,” she says.
Her voice is tiny and clear. It is a bell struck underwater.
“Yes,” you say.
“Then you are the one who answers.” She tilts her head. “May I ask?”
> inquiry | Say yes. | tomb_h3
> truth | Kneel. | tomb_h3
> mercy | Hold out your hand. | tomb_h3
> quiet | Nod. | tomb_h3

=== tomb_h3 | The Question
She looks at you for a long time. Her small mouth twitches. At last, in a rush, she says it.
“Is there room?”
You do not understand.
“For me,” she says. “In the book. Is there a line?” Her black eyes are huge. “They said there was not. They said all the lines were full. They said I would have to wait.” Her voice does not shake. “I have been waiting a very long time. I do not mind. But I would like to know whether it is for something.”
“What did you ask for?”
“To be written.” She says it as if apologising. “That is all. Just my name. I have forgotten what it was. But I would like it to be in the book somewhere, so that if someone came to look, there would be a line.”
You kneel. The hollow is warm. Your breath is slow and thick.
You hold out your hand.
“There is room,” you say. “I will make it.”
The child looks at your hand. She smiles. It is the most beautiful thing you have ever seen.
“Thank you,” she says. “Answer her.”
She puts her hand in yours. It weighs nothing.
> inquiry | Hold on. | tomb_close | +tomb_asked
> truth | Say her name, whatever it is. | tomb_close | +tomb_asked
> mercy | Weep. | tomb_close | +tomb_asked
> quiet | Hold still. | tomb_close | +tomb_asked

// ---------------------------------------------------------------- close
=== tomb_close | What the Mound Held
You come out into the evening with red dust on your hands. It will not wash. The sun is going down behind the nine posts, which stand black against the orange sky, quite still, and the red points in their tops are shut. The plain is very quiet.
+[how] tomb_read | Nine rooms, nine confessions, and a list of children in the Registrar’s hand.
+[how] tomb_broke | Nine iron wardens knelt for a horse-bell, and a swordsman threw a book at a wall.
+[how] tomb_decoyed | A Captain dug a trench for a dead sheep while you went in under his nose.
+[how] tomb_keeper | An old woman gave you a red glass key and a bowl of the worst tea in the world.
+[how] tomb_asked | A girl of seven asked if there was room.
Nobody speaks. The cart waits at the foot of the mound. Odval is on her feet. Temur has taken off his hat.
“We know now,” says the Elder at last. She stands a little apart from you, with her back to the sunset, in her grey coat. “What the Ledger costs.”
“Yes.”
“A child, for each of us.” Her voice is quiet. “I have been climbing for twenty years. I thought I was ascending a ladder. I was standing on a heap.”
She lifts her chin.
“I should like to get down,” she says. “And I should like to take the heap with me.”
> truth | Take her hand. | tomb_close2 | +b4q_tomb
> mercy | Stay beside her. | tomb_close2 | +b4q_tomb
> quiet | Look at the posts. | tomb_close2 | +b4q_tomb
> inquiry | Ask what comes next. | tomb_close2 | +b4q_tomb

=== tomb_close2 | The Ledger and the Heap
They talk about it that night, by the cart, around a small fire of dried dung and thorn. They talk quietly, and for a long time. Duan has the whole confession by heart, and recites it twice. Hao Lan makes a fair copy. Odval says very little. Temur sits with his knees drawn up, staring at the coals.
“It means,” says Duan, at last, “that the Concord is built on it. Every sect. Every peak. Every ascension in seven hundred years.” He rubs his eyes. “The whole of Heaven’s Ledger is a cemetery.”
“Then why does it work?”
“Because no one asks.” He gives a hollow laugh. “It is the cleverest thing about it. It does not need to be hidden. It is simply never examined.”
“Someone must have tried.”
“Yu Ling tried.” The Elder’s voice is dry. “She tore her page. She sat in the dark. It was the largest protest anyone has ever made. And it did nothing, for seven hundred years.”
“Why?”
“Because she was alone,” says Su Wanru. “And because it was in a minor key.”
She looks at the fire.
“I intend,” she says, “to be loud.”
> truth | Smile. | hub_b4_c | bond:duan+3
> mercy | Take her hand. | hub_b4_c | bond:duan+3
> quiet | Poke the fire. | hub_b4_c | bond:duan+3
> inquiry | Ask how. | hub_b4_c | bond:duan+3

`,
  scenarios: String.raw`
$ SU_TOMB_VOICES | trust+4 respect+4 fear+4 | elder | The Elder enters the empty grave of the woman who wrote the cards.
hostile: There is nothing in the tomb. I had expected a body, a relic, a weapon. There is only a very long inscription and a draught. I found that I could not leave until I had read it all, and that I wished very much that I had not.
wary: Seven hundred years ago nine people wrote down what they had done, in a language they hoped nobody would understand. I understood it. I have been a Registrar for twenty years. I have always known the language of things that are done so that they may not be seen.
neutral: I have read the founders’ confession. It is neither as terrible nor as clean as I had feared. It is only a list. They wrote it as I would have written it, with sums.
warm: I think Yu Ling wrote that confession to be read by a bureaucrat. Someone who would not flinch at the sums. I think she wrote it to be read by me.
devoted: I have been trying to decide whether I forgive them. It occurs to me that it is not mine to forgive. It is the child’s. I should like very much to ask her.
`,
  remarks: String.raw`
% tomb_itgel_later | since:tomb_keeper>=3 & bond:yue>=-100 | yue | The old woman at the tomb sent a pot. Honey. It has a note: for the Ninth. I have not told her that you will not eat it. I am keeping it for you. I am not eating it either.
% tomb_spare_later | since:b4q_tomb>=6 | hao | I have started to write the First Spare’s name on everything. It is a habit. I have no name for her. I write a gap. It is the most accurate thing I have ever put on paper.
`,
}
