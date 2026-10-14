import type { Arc } from "../types";

/**
 * Book Three, arc seventeen: Nine Sails. The Concord's fleet anchors off the Wall under Inspector Fang, with Duan Wuyi aboard as
 * an observer, and the chain will close at the new moon. Four approaches: parley from the top of the Wall under a white flag
 * (a1, truth), fire-ships and a night sortie (a2, force), a forged clerkship aboard the flagship to take the chain's key
 * (a3, deceit), and a convoy of the sick and the small up the hill road (a4, mercy). A hidden route calls the Lotus's muster.
 * Cast: Inspector Fang, Duan Wuyi, Admiral Shen, Captain Kou, Sergeant Hok, Lieutenant Gao, Ah Zhi, Lu Yan, Yin.
 */
export const ninesails: Arc = {
  id: "ninesails",
  name: "Nine Sails",
  scenes: String.raw`
=== ninesails_entry | The Fleet
They come in at first light on the ninth day, out of a sea the colour of pewter. First a sail on the horizon, small as a gull; then three; then nine. They rise out of the haze one by one, tall and grey, in a long curved line: seven cutters of the Concord’s white-and-grey, two broad troop-carriers that sit low in the water like sows, and, in the middle, a vast old flagship with three decks of guns and a closed eye on her mainsail.
Tidewall wakes to the sound of church bells. Every window in the town is open. The fishermen stand at the quay with their hats in their hands. The old women are on the Wall. Qiu’s lamp sweeps once across the water and goes dark.
Captain Kou is at your elbow with a glass. His scarred face is grim. “Eight hundred men,” he says. “A chain of a hundred links. A lead case the size of a coffin.” He lowers the glass. “They have not fired. They are waiting.”
> truth | Go up on the Wall with a white flag, and ask to speak. | ninesails_a1s1
> force | Ask Ah Zhi how many boats she can find, and how much oil. | ninesails_a2s1 | +ninesails_a2 needs:3
> deceit | Ask Yin what the flagship’s clerks do, and whether a new one would be missed. | ninesails_a3s1
> mercy | Ask Lu Yan how many in the town cannot walk to the hill road. | ninesails_a4s1
> inquiry | Ask Kou whether the Lotus has more than a committee. | ninesails_h1 |  | lotus_trusted | The Court has not found for you.

// ---------------------------------------------------------------- a1: the parley
=== ninesails_a1s1 | A White Flag
The flag is a bedsheet. Auntie Pan provides it. She presents it with ceremony, folded in four, smelling of lavender and fish, and asks that it be returned. Gu carries the pole. The Elder insists on coming, though her knee is bad. Hao Lan comes with a notebook, and Mei Qiu with her bar, and Ren Qiao as a bodyguard who looks as much like a bodyguard as a pine tree looks like a lamp-post.
The Wall is forty feet of pale stone with a walkway along the top, wide enough for a cart. The wind there is strong and cold. The sea is below you, a plate of grey metal, and out on it the fleet lies at anchor, nine sails in a curved line, in perfect silence.
A boat puts off from the flagship. It is a pinnace with a white pennant, rowed by eight men in grey leather. It comes in under the Wall and rides there, rocking.
A man stands in the stern. He is thin and grey and wears a silver chain.
“It is the Admiral’s herald,” says Hao Lan. “He wants to know what we want.”
> truth | Call down. | ninesails_a1s2 | npc:SU_SAILS_FLEET
> mercy | Hold the flag steady. | ninesails_a1s2
> quiet | Let the Elder speak. | ninesails_a1s2
> inquiry | Ask Hao Lan what the form is. | ninesails_a1s2

=== ninesails_a1s2 | The Herald
“Who speaks?” calls the herald. His voice is a dry cultured tenor, amplified by a speaking-trumpet. “By what authority?”
“By the authority of the Assembly of Nine,” you call. Your voice carries in the cold air. “Which rose against the Second Order. By the authority of the Hollow Lotus Court, which has found for me. By the authority of nine hundred and four citizens of Tidewall, who have signed.”
There is a pause.
“Signed what?”
“A petition,” you say. “Hao Lan wrote it.”
The herald’s face, even at forty feet, is thoughtful. He consults a paper. “I am instructed,” he says, “to inform you that the Concord has no quarrel with the citizens of Tidewall. It has a quarrel with a single person, the bearer of the black seed. It will release the town in exchange for her surrender.”
Behind you, on the Wall, someone growls. It is Captain Kou.
> truth | Say you will speak to Fang. | ninesails_a1s3
> mercy | Say you will not be traded. | ninesails_a1s3
> quiet | Look at the Elder. | ninesails_a1s3
> inquiry | Ask who else is aboard. | ninesails_a1s3

=== ninesails_a1s3 | A Familiar Name
“The Inspector Fang,” says the herald. “Admiral Shen. Fourteen officers of the Seventh Chancery. A delegation of the Assembly of Nine.” He consults the paper again. “And a Censor-General, in the capacity of observer.”
Your heart gives a lurch.
“Duan Wuyi?” you call.
“The same.”
“He is on the flagship?”
“He is in the Admiral’s cabin,” says the herald, with a small dry cough. “He is, I understand, under a mild form of arrest. He has expressed some reservations.” The cough again. “It is a delicate matter.”
Beside you, the Elder has gone white. “He is here,” she says. “Wuyi. He followed us.”
“Does he know?”
“He knows everything,” says the Elder. “He has read all my letters. He has read yours.” She smiles faintly. “I think he wrote the herald’s speech.”
> truth | Ask for a meeting. | ninesails_a1s4
> mercy | Smile. | ninesails_a1s4
> quiet | Think. | ninesails_a1s4
> inquiry | Ask what reservations. | ninesails_a1s4

=== ninesails_a1s4 | A Meeting on Neutral Water
They arrange it for noon, in a small boat, halfway between the Wall and the flagship. There are rules: two persons from each side, unarmed, with a white flag; three hours; a truce for the duration. The herald recites them. Hao Lan writes them down. Madam Ash, who has come to the Wall with a basket of buns, supplies a pot of tea.
The Elder goes with you. She has insisted. She sits in the bow of Ah Zhi’s skiff, in her grey cloak, with the silver comb in her hair and her hands folded in her lap. She is shaking.
The water is flat and oily. The flagship looms above you, a cliff of black oak, with the gunports open like eyes. A rope ladder hangs from the main chains.
A small boat is already waiting at the mid-point. It is a plain rowing-boat, with two men in it.
One is thin and silver-spectacled, with a pair of white gloves folded on his knee.
The other is wearing a grey robe, with a closed eye on the breast, and has a staff of pale bone.
> truth | Greet them. | ninesails_a1s5
> mercy | Take the Elder’s hand. | ninesails_a1s5
> quiet | Watch Duan. | ninesails_a1s5
> inquiry | Ask Ah Zhi to hold the boats close. | ninesails_a1s5

=== ninesails_a1s5 | The Censor-General
“Good afternoon,” says Duan Wuyi.
He has lost weight. He has lost a good deal of colour. There are bruises on his left wrist where a rope has been, and his grey robe is stained at the cuffs. But his spectacles are bright and his voice is mild. He looks at you across the water, and bows, in the old courteous way of the Censors, from the waist.
“I am glad to see you well,” he says. “I had hoped. I had not liked to say.”
“Duan,” says the Elder.
“Madam Registrar.” He bows again, deeper. “Elder. I apologise for the necessity of meeting like this. I wished to arrive with more dignity.” A flicker of dry humour crosses his lined face. “I came by the Assembly’s own fastest cutter. I was removed from it, in the Gull Channel, by an officer of the Inspector’s staff. I have been a guest since.”
“A guest,” says Fang, with a slight smile.
“A very hospitable one,” says Duan. “They have only chained me twice.”
> truth | Ask if he is hurt. | ninesails_a1s6
> mercy | Take his hand. | ninesails_a1s6
> quiet | Look at Fang. | ninesails_a1s6
> inquiry | Ask what he wants. | ninesails_a1s6

=== ninesails_a1s6 | Terms
“Terms,” says Fang. He has a leather folder open on his knee. He is perfectly composed. “I have drawn them up. They are very simple. I wish to avoid bloodshed.” He turns a page. “The bearer will come aboard. She will be treated with every courtesy. She will be placed in an apartment of the Admiral’s, with a window, and books, and a servant. She will be kept there until the Great Sealing.”
“And then?” says the Elder.
“And then she will do her duty,” says Fang. “It will be quick. It will be dignified. It will be a great honour.”
“It will be a murder.”
“It will be a sacrifice,” says Fang, mildly. “There is a distinction. I have studied it.” He closes the folder. “In return, the town will be spared. The fleet will withdraw. The chain will be lifted. The Hollow Lotus will be given an amnesty.”
“And the Ward? The House? The Library?”
“Will be placed under the Chancery’s protection.”
> truth | Say no. | ninesails_a1s7
> mercy | Ask for time. | ninesails_a1s7
> quiet | Look at the water. | ninesails_a1s7
> inquiry | Ask what happens to the Reader. | ninesails_a1s7

=== ninesails_a1s7 | What You Said
You say it plainly. You say that you have heard his terms and will not accept them. You say that a sacrifice is only a sacrifice if it is offered, and that you are not offering. You say that you have met eight siblings, and a ferrywoman, and a keener, and a lamp, and a child who read the whole of a Ledger in nineteen hours. You say that none of them asked to be given up.
You say: “You have misread your own book.”
Fang’s gloved hands do not move. “I do not think so,” he says.
“The first entry is a strike. The first name in the Ledger is the saint’s. She was struck for teaching a girl to listen. Everything the Concord has done since stands on that.” You take a breath. “You are about to copy a lie onto every page in the world.”
There is a pause. The boat rocks. Duan Wuyi has gone entirely still.
“I know,” says Fang.
> truth | Stare. | ninesails_a1s8
> mercy | Say nothing. | ninesails_a1s8
> quiet | Look at Duan. | ninesails_a1s8
> inquiry | Ask how. | ninesails_a1s8

=== ninesails_a1s8 | I Know
“I have read it,” says Fang. His voice is soft. “I read it on the Well stair, by lamplight, while you were arranging your counter-stroke. I read it in my cabin, last night.” He takes off his spectacles. Without them his face is naked and tired and curiously young. “I am not a fool, {honorific}. I have audited the Concord for twenty-two years. I know what it is.”
He rubs the bridge of his nose.
“It is built on an injustice. Of course it is. Everything is. The question is not whether there was a crime. The question is whether we can do any better than to carry on.” He puts the spectacles back. “I believe we can. I believe that by copying the record exactly, I will make it honest. It will say plainly, on every page: we began in fear.”
He looks at you.
“I am not trying to hide the crime,” he says. “I am trying to enshrine it.”
Duan Wuyi lets out a long slow breath.
“That,” he says, “is the most horrifying thing I have ever heard.”
> truth | Agree. | ninesails_close | +ninesails_parleyed
> mercy | Ask Fang for three days. | ninesails_close | +ninesails_parleyed
> quiet | Hold the Elder’s hand. | ninesails_close | +ninesails_parleyed
> inquiry | Ask what the chain is for. | ninesails_close | +ninesails_parleyed

// ---------------------------------------------------------------- a2: fire-ships
=== ninesails_a2s1 | Oil and Boats
“Forty-one,” says Ah Zhi. She has a ledger. She has a pencil behind her ear. She is the most dangerous person in Tidewall, and she knows it. “Forty-one boats I can put in the water by tonight. Of those, nineteen can sail. Twelve can be rowed. Ten are hulks.” She flips a page. “As for oil, I make it eight hundred jars. Whale, mostly. Some lamp. A little cooking.”
“Is it enough?”
“For what?”
“To burn a fleet.”
She stares at you. Then she laughs, a high wild laugh that rings along the quay. “You are mad,” she says. “You are absolutely mad. That is a thing Mother Ash would say.”
“Is it possible?”
“It is possible,” says Ah Zhi, “if you do not mind losing every boat in the harbour.” She tucks the pencil behind her ear. “I do not. They are only boats.”
Her eyes are bright.
“I have been wanting to sink something for weeks.”
> force | Start. | ninesails_a2s2 | needs:3
> truth | Ask if she is sure. | ninesails_a2s2
> quiet | Look at the fleet. | ninesails_a2s2
> mercy | Ask who will crew. | ninesails_a2s2

=== ninesails_a2s2 | Volunteers
The call goes out at noon. By dusk, there are three hundred and eleven volunteers in the fish-market: fishermen, boat-builders, salt-rakers, cooks, an assortment of apprentices, a priest with a broom, and an old woman in a goose-hat who has brought her own cushion. Captain Kou stands on a barrel and shouts instructions. Sergeant Hok, in the front row, is drilling a squad of the town’s young men in how to hold a rifle.
Mother Hsu has come in her goose-hat. She sits at the back with her feet on a footstool. “I am a keener,” she says. “I know how to be useful at a battle. You wail afterwards.”
Lieutenant Gao stands at the door with his helmet in his hand. He looks as though he would like to speak. At last he crosses the floor and says, quite loudly, to you: “I have eleven marines. They are yours.”
The room goes quiet.
“Sir,” says Hok, rising.
“At ease, Sergeant,” says Gao. His pink nose is shining. “I resign. It is a very short resignation.”
> force | Thank him. | ninesails_a2s3
> truth | Ask why. | ninesails_a2s3
> quiet | Nod. | ninesails_a2s3
> mercy | Shake his hand. | ninesails_a2s3

=== ninesails_a2s3 | The Plan
The plan is Kou’s, with improvements by Ah Zhi, Shu Ning and a very old fisherman who knows the set of the tide. It is audacious. It is, in places, suicidal. It runs as follows.
At the second watch, the ebb will run hard from the harbour mouth out to sea. Forty-one boats, loaded with oil-jars and brushwood, will be launched on the ebb from the old fish-quay, in three waves. They will be steered, by hand, as far as the outer buoys. Then they will be lit, and abandoned, and the tide will carry them down on the fleet.
“It’s a very old trick,” says the fisherman. “The Concord has forgotten it. We did it to the pirates, in my grandmother’s time.”
“Does it work?”
“Mostly,” he says. “It works if they’re asleep.”
Ah Zhi grins. “They’ll be asleep.”
“How do you know?”
“Because they’re waiting,” says Kou. “Soldiers who are waiting always go to sleep.”
> force | Take a boat. | ninesails_a2s4
> truth | Ask about the crews. | ninesails_a2s4
> quiet | Study the tide. | ninesails_a2s4
> mercy | Ask who will steer. | ninesails_a2s4

=== ninesails_a2s4 | The Ebb
The tide runs out at the second watch. The harbour is black. The fleet lies off the bar, a line of dim lanterns. Qiu’s lamp is dark. The Wall is a dim pale ribbon. Forty-one boats lie along the old fish-quay, low in the water, stinking of oil. On each, a crew of two or three crouches in the bottom, in dark clothes, with their faces blackened.
You are in the first. Ah Zhi is at the sweep. Gu is at the bow with a boathook. Ren Qiao crouches amidships with a tinder-box.
“Not yet,” whispers Ah Zhi.
The tide takes you. The boats slide out of the quay like a flock of ducks, in a long silent line. Nobody speaks. Oars are muffled with rags. The sea hisses under the keel. Ahead, the lanterns of the fleet grow larger, a string of yellow beads, each with its halo.
A dog barks on the Wall. A bell chimes the half hour.
“Now,” breathes Ah Zhi.
> force | Light the first. | ninesails_a2s5
> truth | Wait. | ninesails_a2s5
> quiet | Hold your breath. | ninesails_a2s5
> mercy | Check the crew. | ninesails_a2s5

=== ninesails_a2s5 | Fire on the Water
The first boat goes up with a roar. A pillar of flame, yellow-white, shoots into the dark. The second follows, and the third. Down the line they catch, one after another, a string of burning beads, and the fire-ships spin free on the tide with their sails alight. The sea is lit from end to end. The fleet stands out against it, nine black silhouettes, suddenly, hideously alive.
A bell rings aboard the Prudence. A trumpet sounds. Figures run on the decks. Guns thump, ragged and late, and shot howls overhead.
“Row!” shouts Ah Zhi. “Row, you idiots!”
You row. The boat leaps. Behind you the first fire-ship drives onto the cutter Duty and the cutter’s rigging goes up in a sheet. A scream carries over the water. A man jumps. Another follows.
The Elder’s voice, in your head, says: you are doing this. You are doing this.
> force | Row harder. | ninesails_a2s6 | needs:3
> truth | Look back. | ninesails_a2s6
> quiet | Shut your ears. | ninesails_a2s6
> mercy | Steer for the swimmers. | ninesails_a2s6

=== ninesails_a2s6 | Swimmers
Ah Zhi swears. She swears with comprehensive fluency for a full minute, and then she puts her sweep over and swings the skiff round, into the light, toward the men in the water. There are seven of them. They are young. They are Concord marines, in grey leather, with their rifles gone and their faces black with smoke. They are screaming.
“Grab them!” she shouts. “I’m not leaving them!”
You haul. Ren Qiao hauls. Gu leans so far over the gunwale that you grab his belt. One by one the swimmers are dragged aboard, coughing and spewing, and flop in the bottom of the boat in a heap.
“Thank you,” says one, between retches. He is perhaps seventeen. “Thank you. I can’t swim.”
“You’re welcome,” says Ah Zhi. “Shut up. Don’t move.”
Overhead, a cannon-ball whistles. The Duty is burning like a torch.
> force | Cast off. | ninesails_a2s7
> truth | Ask the boy his name. | ninesails_a2s7
> quiet | Stay low. | ninesails_a2s7
> mercy | Wrap him in a blanket. | ninesails_a2s7

=== ninesails_a2s7 | Three Ships
By dawn the damage is counted. The Duty is a burnt-out hulk, drifting on the ebb. The Prudence has lost her foremast and is listing. A troop-carrier, the Constancy, has been run aground on the bar with her bow in the air. Four hundred men are in the water or the boats. The rest of the fleet has weighed anchor and withdrawn a mile out, in disarray.
Forty-one fishing-boats are gone. Eleven of the crews are missing. The harbour is quiet. In the fish-market, Mother Hsu has set up a table, and is reading the names of the missing off a list, in her thin reedy voice. Nobody speaks. Nobody leaves.
You walk along the quay with Ah Zhi. She is limping. Her hat is gone, and half her eyebrows. She has a burn up one arm, bandaged in a sailcloth, and she is smiling.
“They’ll be back,” she says.
“I know.”
“It’ll be worse.”
“I know.”
“It was the best night of my life,” says Ah Zhi.
> force | Say nothing. | ninesails_a2s8
> truth | Count the missing. | ninesails_a2s8
> quiet | Sit beside her. | ninesails_a2s8
> mercy | Go to the market. | ninesails_a2s8

=== ninesails_a2s8 | The Price
It is not all smiling. By noon, the missing have been found. Eight are dead. Three are in the water, alive, and are fished out by a rowing-boat. Eleven names are read in the fish-market, by Mother Hsu, and a small procession bears eleven paper boats down to the sea.
You stand at the end of the quay and watch them go. Bao Er is singing. It is the lament, the seven verses, and the held door. She does not close the last note.
You think of the marines in the water. You think of the boy of seventeen who could not swim. He is on a cot in the Ward, with a blanket, being fed broth by Lu Yan, who says he will live.
“Eight of ours,” says Captain Kou, at your shoulder. His scarred face is grey. “Forty-one boats. And three of theirs sunk.” He takes off his cap. “It is not an exchange.”
“No.”
“It is, however, a delay,” says Kou, “and I have been told that in war that is a victory.”
> force | Bow your head. | ninesails_close | +ninesails_burned needs:3
> truth | Say their names. | ninesails_close | +ninesails_burned
> quiet | Stay with Bao Er. | ninesails_close | +ninesails_burned
> mercy | Go to the Ward. | ninesails_close | +ninesails_burned

// ---------------------------------------------------------------- a3: the clerkship
=== ninesails_a3s1 | A Clerk Aboard
“The flagship carries forty-one clerks,” says Yin. He is sitting in the Ferryman’s Rest, in a corner, with a cup of tea he has not touched. His long pale face is composed. He has not slept. “They are a floating Chancery. They keep the Inspector’s records, and the Admiral’s, and the fleet’s. They draw up the orders.” He sips. “They are changed every month, from the Qinglian pool. They do not know one another.”
“Could a new one be added?”
“It could.” His eyes flick to Hao Lan. “If she were to present herself with a letter of transfer, signed by the Inspector’s secretary, and stamped.” He sets down the cup. “I could write the letter.”
Hao Lan stares at him. “You would do that?”
“I have done a good deal worse.” His mouth twitches. “This would be an improvement.”
He lays a sheet of paper on the table. “What do you want taken?”
“The key,” you say.
“The chain’s key.”
“Yes.”
> deceit | Go on. | ninesails_a3s2
> truth | Ask if it is safe. | ninesails_a3s2
> quiet | Listen. | ninesails_a3s2
> mercy | Thank him. | ninesails_a3s2

=== ninesails_a3s2 | The Chain’s Key
“It is a rod,” says Yin. “Of grey iron. A foot long. It hangs from a hook in the Admiral’s day-cabin, under a glass.” He draws it for you on the back of a menu. “It is the controlling piece. The ward-chain is a hundred links, but they are all slaved to the key. If the key is removed from its hook, the chain cannot be closed. If it is turned, the chain closes.”
“And if it is broken?”
“The chain goes slack. Every link comes loose. The names inscribed on them are freed.” He shrugs. “That is why it is kept under glass.”
“Who guards it?”
“A marine. Two, at night.” He taps the paper. “And the Admiral’s steward. And the Inspector, at intervals. And Wuyi. He is in the next cabin, in irons. They have taken his staff.”
His voice has changed on the last words.
“I should like to help him,” he says. “He was kind to me, once. He is the only one of them who ever asked what I thought.”
> deceit | Add that to the plan. | ninesails_a3s3
> truth | Say it is dangerous. | ninesails_a3s3
> quiet | Study the drawing. | ninesails_a3s3
> mercy | Say you would like to as well. | ninesails_a3s3

=== ninesails_a3s3 | Hao Lan Goes Aboard
She goes at dusk, in a plain grey tunic with a clerk’s satchel and a letter in her hand. She goes out to the flagship in a bumboat, with a crate of fresh eggs. Nobody stops her. The marine at the gangway reads her letter with a bored squint, and the Chancery stamp, and the signature of the Inspector’s secretary. He waves her through. “Fourth deck, forward,” he says. “Mind the cannon.”
She climbs. You watch her from the quay with a glass. A small grey figure, going up the black wall of the ship, with her satchel bumping on her hip. The ladder is long. At the top a hand reaches down, and she disappears over the rail.
Ren Qiao breathes out beside you.
“She is much braver than I am,” he says.
“She is a clerk.”
“That is what I mean.”
You wait. The tide turns. The lamps come out along the fleet, one by one. The Wall is dark. Qiu’s lamp is not yet lit.
> deceit | Keep watching. | ninesails_a3s4
> truth | Pray. | ninesails_a3s4
> quiet | Count. | ninesails_a3s4
> mercy | Fetch Ren a cup of tea. | ninesails_a3s4

=== ninesails_a3s4 | Fourth Deck, Forward
Hao Lan’s account, afterwards, is breathless and exact. She was taken to a long low room, with forty-one desks in rows, lit by lamps hung from the beams. She was assigned a stool. She was given a pile of invoices. She sat. She copied. The clerks around her did not look up. They were pale and tired and very quiet, and they wrote like machines.
“It was awful,” she says. “It was like the Chancery. It was exactly like the Chancery. I felt completely at home.”
She stayed three hours. At the seventh bell she asked for the privy. She was directed to a ladder. She went up two decks, and along a passage, and past a door marked ADMIRAL, and a marine with a rifle, and another door.
“It was open,” she says. “Just a crack. I could see the glass.”
She swallows.
“And a person sitting beside it, in a chair, with a book on his knee. A grey man in spectacles, with white gloves.”
> deceit | Ask. | ninesails_a3s5
> truth | Hold her hand. | ninesails_a3s5
> quiet | Wait. | ninesails_a3s5
> mercy | Say she is safe. | ninesails_a3s5

=== ninesails_a3s5 | The Inspector at Night
“He was reading,” says Hao Lan. “By the glass. By the light of the key.” She wipes her forehead. “It glows, you know. A dull red. It lights his face from below.” She shivers. “He looked like a man at prayer.”
“What was he reading?”
“The false volume.” A short breath. “My volume. The one we gave him. He was turning the pages, one at a time, and moving his lips. He was on the preamble.” She stops. “He had stopped at the first entry. He was looking at it.”
“For how long?”
“I watched him for twenty minutes. He did not turn a page.”
Yin has gone very still.
“He is wavering,” he says, in a low voice. “He has not slept in three nights. He has not eaten. He sits there by the key and looks at that line.”
“Could he be persuaded?”
“I do not know,” says Yin. “But I think he is waiting for someone to try.”
> deceit | Plan it. | ninesails_a3s6
> truth | Say he is lonely. | ninesails_a3s6
> quiet | Think. | ninesails_a3s6
> mercy | Ask what he is afraid of. | ninesails_a3s6

=== ninesails_a3s6 | A Second Visit
She goes back the next night, and the night after. She learns the rounds. The marine at the Admiral’s door changes at the sixth bell; the steward goes to bed at the eighth; the Inspector sleeps, if he sleeps, from the third watch until dawn. There is a gap of eleven minutes in the small hours when the cabin is empty, and the door is not locked, and the key hangs alone under its glass.
She draws a plan. She writes it in her small clear hand. It is a masterpiece of timing.
“It needs two,” she says. “One to open the case. One to swap the key.”
“Swap it?”
“For a copy.” She smiles. “Shu Ning is making one. It looks exactly the same. It will work, for a while. It will turn, and the chain will begin to close. But it will not lock. It will leave the links open at one point.”
“How long?”
“A day.” She almost glows. “It will give us one tide. One tide when the chain is open and a boat can slip through.”
> deceit | Go. | ninesails_a3s7
> truth | Ask who goes. | ninesails_a3s7
> quiet | Wait. | ninesails_a3s7
> mercy | Offer. | ninesails_a3s7

=== ninesails_a3s7 | In the Day-Cabin
It is you and Hao Lan. It is a plan of such delicacy that anything more would ruin it. You go up the side of the flagship in a clerk’s tunic, at the third watch, behind the eggs. The deck is dark and quiet. A marine leans on the rail, asleep on his feet. You pass him. You go down a ladder, along a passage, past the ADMIRAL’S door.
The next door is open a crack. Hao Lan puts her eye to it, then nods.
You go in.
The cabin is small and richly furnished, with a swinging lamp and a table of polished teak. In the centre, on a stand under a glass bell, hangs the rod. It is grey iron, a foot long, plain as a candlestick. It glows a dull sullen red. In an armchair beside it, with his head on his chest, sits a thin man in a grey robe, with a book open on his lap.
He is asleep.
> deceit | Lift the glass. | ninesails_a3s8
> truth | Stand still. | ninesails_a3s8
> quiet | Hold your breath. | ninesails_a3s8
> mercy | Look at his face. | ninesails_a3s8

=== ninesails_a3s8 | The Swap
You lift the glass. Hao Lan takes the rod. It is warm. It hums against her palm, a low note, and she does not breathe. She slides the copy onto the hook in a movement so smooth it seems to take no time at all. The glass goes back. The copy glows, dull red, exactly as before.
The man in the chair stirs.
His eyes open. They are pale and hazel, and unfocused. They rest on Hao Lan’s face. They rest on yours.
“Ah,” he says, in a sleepy murmur. “It’s you.”
Neither of you moves.
“I thought I dreamed you.” Fang smiles, very faintly. “I have been dreaming a good deal. It is a symptom of fatigue.” He closes his eyes. “Go away, please. I am not ready to wake.”
You go. You go so quietly that the lamp does not sway. You go out of the cabin, and along the passage, and over the side. Behind you, in the chair, the Inspector sleeps with the book open on his knee.
> deceit | Look back. | ninesails_close | +ninesails_key
> truth | Say a word for him. | ninesails_close | +ninesails_key
> quiet | Keep moving. | ninesails_close | +ninesails_key
> mercy | Feel sorry. | ninesails_close | +ninesails_key

// ---------------------------------------------------------------- a4: the convoy
=== ninesails_a4s1 | Who Cannot Walk
“Three hundred and ten,” says Lu Yan. She has a list. She holds it in both hands, like a prayer-sheet. “In the Ward, sixty-three. In the dye-works annex, eleven. The old, the lame, the sick. The very small.” Her voice is clipped. “The forty children from the House. Two women near their time. A man with a broken back.”
“Can they move?”
“Not far. Not fast.” She looks up. “The hill road is six miles. It climbs a thousand feet. It would take a healthy man two hours. It would take a cart, with oxen, a day.”
“Carts?”
“Eleven. Two with oxen. The rest with donkeys.” She tucks the list into her apron. “I have been thinking about it since the fleet came. I am afraid of my own arithmetic.”
You look at her. She is white and thin and absolutely resolute.
“We shall have to make a train,” you say.
“Yes,” says Lu Yan. “That is what I thought.”
> mercy | Start. | ninesails_a4s2
> truth | Ask where. | ninesails_a4s2
> quiet | Look at the hill. | ninesails_a4s2
> inquiry | Ask who will lead. | ninesails_a4s2

=== ninesails_a4s2 | The Train
It forms at dusk, in the market square. It is the strangest procession Tidewall has ever seen. The carts come first: eleven of them, each piled high with bedding and children and the old. The donkeys are led by the fishermen’s wives. The oxen are led by a priest. Behind come the walking sick, on sticks, on shoulders, on stretchers made from oars and sailcloth. Behind them come the walking well, with baskets of bread.
Mother Hsu rides in the last cart, in her goose-hat, with the Songbook in her lap. She is conducting. She has a choir of forty children on her left and a choir of old women on her right, and they are singing the lullaby. It is very soft.
Nurse Bei walks at the head, with a lantern. Tian carries Moth on his shoulders. Old Maro, with a bag of herbs, counts heads.
“Three hundred and ten,” he says. “Three hundred and ten. All present.”
The gate of the town opens. The first cart rolls out.
> mercy | Walk beside the carts. | ninesails_a4s3
> truth | Count them again. | ninesails_a4s3
> quiet | Look back. | ninesails_a4s3
> inquiry | Ask Lu Yan where the stragglers are. | ninesails_a4s3

=== ninesails_a4s3 | The Hill Road
The hill road is a track of white chalk, twisting up through scrub and tamarisk. It is steep. It is loose. The carts grind and slide. Twice a wheel comes off. Once a donkey lies down in the road and refuses to rise. The oxen lean into their yokes with the patience of centuries.
The sky darkens. The lamps are lit. One by one the little lights go up the hillside, a thread of fire winding upward, and from the town below, if anyone were watching, they would look like a line of fireflies.
At the third mile, a man falls. He is the man with the broken back. His stretcher-bearers have stumbled, and he rolls, and cries out. Lu Yan is on her knees at his side in an instant, hands moving.
“Don’t move him,” she says. “Don’t lift him. He’ll need to lie flat.”
“We can’t stop,” says Old Maro. “Not here. It’s open.”
“I know.”
“They’ll see the lamps.”
> mercy | Carry him. | ninesails_a4s4
> truth | Order the lamps out. | ninesails_a4s4
> quiet | Look at the sky. | ninesails_a4s4
> inquiry | Ask how far to cover. | ninesails_a4s4

=== ninesails_a4s4 | In the Dark
You order the lamps out. It is a hard thing to say. You say it, and one by one, the little flames are pinched. The hillside goes dark. There is no moon. There are only stars, and the faint paleness of the road, and the sound of three hundred people breathing.
You carry the man. Four of you take the stretcher, and Lu Yan walks beside it with her hand on his wrist, murmuring. He is a heavy man. His breath comes in short pants. Every step is a small agony, and you take it slow.
Behind you, from the town, a boom. A pillar of fire rises over the harbour. Then another. The sky glows orange. A rolling roar crosses the hills.
“They’ve begun,” says Old Maro, in a whisper.
“It’s the fire-ships,” says Ren Qiao.
“No.” Lu Yan lifts her head. “That’s a cannon.”
> mercy | Keep going. | ninesails_a4s5
> truth | Look back. | ninesails_a4s5
> quiet | Bow your head. | ninesails_a4s5
> inquiry | Ask who is firing. | ninesails_a4s5

=== ninesails_a4s5 | Behind Them
You do not look back. You have a stretcher in your hands and a man’s breath in your ear. You look at the path, and the next step, and the next. The roar of the guns rolls over the hill. The sky pulses red. It is a very long way.
At the fifth mile, a child begins to cry. It is a small high wail, and then another, and then a chorus. The hillside is full of weeping. The old women hush them. The priest begins to pray. Nurse Bei, at the head of the column, turns, and in a voice that surprises you with its calm, says: “We’ll sing.”
She starts the lullaby. It is the river song, the first jar, the one Bao Er opened. The children take it up. The old women. The carters. The fishermen’s wives. Three hundred voices rise on the dark hillside, soft and clear and steady, in the language that was once forbidden.
The guns roll on. The singing does not stop.
> mercy | Sing. | ninesails_a4s6
> truth | Listen. | ninesails_a4s6
> quiet | Weep. | ninesails_a4s6
> inquiry | Ask Nurse Bei where she learned it. | ninesails_a4s6

=== ninesails_a4s6 | The Cave at the Top
There is a cave at the head of the road, a great shallow hollow in the hillside, dry and wide and hung with ivy. Shu Ning found it on a map of the old mine. It will hold three hundred, if they lie close. By midnight, it does.
Lu Yan walks the length of it by lantern light, kneeling at each pallet. She has lost her spectacles. She does not seem to notice. She checks a pulse, a forehead, a bandage, and moves on, with her mouth pressed tight.
“The man with the back?” you say.
“Alive.” She does not look up. “He’ll walk again. In six months.”
“The women?”
“One has begun.” She drops her voice. “She’ll be a few hours. Her mother is with her.”
You sit on a rock at the mouth of the cave and look down. The harbour is a smear of light, far below, red and orange. The fleet is out of sight. The Wall is a thin pale thread. The town burns, or does not. You cannot tell.
> mercy | Stay awake. | ninesails_a4s7
> truth | Pray. | ninesails_a4s7
> quiet | Listen. | ninesails_a4s7
> inquiry | Ask when the baby comes. | ninesails_a4s7

=== ninesails_a4s7 | A Birth
It comes before dawn. The mother is a woman of twenty with a broad face and a bandage on one arm. Her labour is short. Her mother holds her hands. Lu Yan kneels between her knees, calm and exact, with a basin and a knife, and the cave is silent but for the woman’s breath.
It is a girl.
She comes out screaming, red and furious, with a cap of black hair, into the dim hush of the cave, and every person in it lets go of a held breath. Lu Yan wraps her in a shawl. She places her on the mother’s breast. The woman is crying and laughing. The old women are weeping. Tian, in a corner, has his hands over his face.
“What will you call her?” says Lu Yan, wiping her hands.
The mother looks up. She is exhausted and radiant.
“I don’t know,” she says. “I don’t think she has to be called anything yet.”
“No,” says Lu Yan. She smiles. “That is quite right.”
> mercy | Hold the baby. | ninesails_a4s8
> truth | Say a blessing. | ninesails_a4s8
> quiet | Step outside. | ninesails_a4s8
> inquiry | Ask Lu Yan if she is all right. | ninesails_a4s8

=== ninesails_a4s8 | Morning
The sun comes up red over the sea. The cave opens into a blaze of gold. The sky is clear and cold and high. Down below, at the foot of the hill, Tidewall lies in the early light. The harbour is smoky but whole. The Wall stands. The Lamp is dark. Out in the bay, the fleet is gone from the near anchorage; it has drawn off to a mile beyond the bar.
“They withdrew,” says Shu Ning, who has come up the hill with a spyglass. “Last night. After the gunnery.” She lowers the glass. “They fired on the town for three hours, and then they stopped.”
“Why?”
“Don’t know.” She frowns. “Something changed.”
Behind you, in the cave, three hundred people are waking. The baby cries. The mother shushes her. A boy begins to laugh. Somebody is frying bread on a stone.
Lu Yan comes and sits down beside you. She is grey with weariness. She has found her spectacles. They are broken.
“I think,” she says, “we may be going to be all right.”
> mercy | Hold her. | ninesails_close | +ninesails_convoyed
> truth | Say you hope so. | ninesails_close | +ninesails_convoyed
> quiet | Look at the sea. | ninesails_close | +ninesails_convoyed
> inquiry | Ask what changed. | ninesails_close | +ninesails_convoyed

// ---------------------------------------------------------------- hidden: the muster
=== ninesails_h1 | More Than a Committee
“A little,” says Captain Kou. He lowers the glass and looks at you with his one-eared, ironic stare. “We are the struck. There are four thousand of us on this coast. They do not appear in any register. They do not pay taxes. They do not exist.” He grins. “It is a most convenient condition for an army.”
“Four thousand?”
“Give or take.” He snaps the glass shut. “We have three hundred under arms. They are scattered in the villages. Salt-rakers, fishermen, a few deserters. Hok’s boys, of course. They do not drill well. They fight like terriers.”
“Can you muster them?”
“By tomorrow night.” He rubs his ear. “If someone gives the word. The Court has voted to stand with you. I have no authority to call them out.” He looks sideways. “You do.”
You blink. “Me?”
“You are the bearer,” says Kou. “It is in the minutes.”
> inquiry | Say call them. | ninesails_h2
> truth | Say you do not command. | ninesails_h2
> mercy | Ask what they would be walking into. | ninesails_h2
> quiet | Look at the sea. | ninesails_h2

=== ninesails_h2 | The Word
You give it. It is the hardest word you have ever said. You say it to Captain Kou, in the dusk, on the Wall, with the fleet at anchor behind you. You say: ask them to come. You say: tell them they may refuse.
Kou’s one ear twitches.
“I will tell them,” he says. “But I will not say that part. They will come regardless.” He looks at you. “You do not understand. You think we follow because you command. We follow because you asked.”
He walks off along the Wall, his big shoulders stooped, and does not look back.
By dusk the next day, they are there. They come in by the hill roads and the sea paths and the salt-pan dykes. Men and women in patched coats, with old rifles and boathooks and cutlasses and hoes. They come in ones and twos and parties of twenty. They gather in the fish-market, in silence, with their hats in their hands.
There are three hundred and sixty.
> inquiry | Go to them. | ninesails_h3
> truth | Stand on the barrel. | ninesails_h3
> mercy | Thank the first. | ninesails_h3
> quiet | Look. | ninesails_h3

=== ninesails_h3 | Nobody
Nobody speaks. You climb onto the barrel where Kou stood. You look down. Three hundred and sixty faces look up. They are weather-beaten and thin and tired. They are of every age. They carry the marks of long hunger: the stoop, the cough, the old scars. Some are wearing the brands of the Seal Office on their foreheads. Some wear nothing.
You do not make a speech. You have nothing to say.
“Thank you,” you say, at last.
Somebody laughs. It is a short, startled, ragged sound. A woman at the front, with a baby on her hip, says in a loud voice, “She said thank you.”
“I heard,” says her neighbour.
“Nobody’s said that in thirty years.”
They begin to cheer. It is a thin sound, at first, and then a roar. The roof of the market shakes. Auntie Pan is weeping into her apron. Captain Kou, at the edge of the crowd, folds his arms and glares at the ceiling, with a deep and passionate effort not to cry.
> inquiry | Smile. | ninesails_close | +ninesails_mustered
> truth | Raise a hand. | ninesails_close | +ninesails_mustered
> mercy | Weep. | ninesails_close | +ninesails_mustered
> quiet | Step down. | ninesails_close | +ninesails_mustered

// ---------------------------------------------------------------- close
=== ninesails_close | The New Moon
The days go. The fleet does not attack. It lies off the bar, nine grey sails, patient as vultures. Every night Qiu’s lamp sweeps the water. Every morning the town wakes, counts its dead, and gets on with the day.
+[how] ninesails_parleyed | You sat in a boat with the Inspector and the Censor-General, and heard a man say that he meant to enshrine the crime.
+[how] ninesails_burned | Forty-one boats burned a cutter, crippled a second, and put a troop-carrier on the bar. Eight of yours did not come back.
+[how] ninesails_key | The chain’s key on the flagship is a copy that will turn but not lock.
+[how] ninesails_convoyed | Three hundred and ten of the sick and the small slept in a cave on the hill, and a girl was born.
+[how] ninesails_mustered | Three hundred and sixty of the struck stood in the fish-market and cheered a girl who said thank you.
It is the eve of the new moon. The Wall is quiet. The tide is making. You stand on the top with the Elder and Mei Qiu and Hao Lan, looking out at the dark.
“Tomorrow,” says the Elder. She is not looking at you. “He will close the chain.”
“How do you know?”
“Because it is what I would do.” She smiles faintly. “It is the moment. The dark of the moon. The tide at the turn.” She draws her cloak tight. “I find that I understand him very well.”
> truth | Say you do too. | ninesails_close2 | +b3q_sails
> mercy | Take her hand. | ninesails_close2 | +b3q_sails
> quiet | Look at the water. | ninesails_close2 | +b3q_sails
> inquiry | Ask what she would do in his place. | ninesails_close2 | +b3q_sails

=== ninesails_close2 | The Night Before
You do not sleep. Nobody does. The town is up, in the dark, with its lamps unlit and its doors open. The Lotus holds the quay. The Ward is empty, or nearly. Bao Er is on the Wall, in the cold, singing the lament very softly to the sea. Qiu is at her mirror. Shu Ning is at her anvil, hammering something small and precise. Ah Zhi is mending a boat.
Madam Ash comes to find you on the Wall. She has put on her grey gown, and she carries a lantern. She stands beside you for some time without speaking.
“I have something to tell you,” she says at last. “It is not a gift.”
“No?”
“It is a fact.” She turns the lantern in her hand. “The Wall is not a wall. It is an anchor. The chain will not be anchored in the sea. It will be anchored in the Wall. Every link will be hooked to a name on its face. And the first name that the chain will take is Ke-er’s.”
She does not look at you.
“I do not think she knows,” she says.
> truth | Ask what it means. | hub_b3_coast
> mercy | Take her arm. | hub_b3_coast
> quiet | Look at the Wall. | hub_b3_coast
> inquiry | Ask how she knows. | hub_b3_coast

`,
  scenarios: String.raw`
$ SU_SAILS_FLEET | trust+3 respect+3 fear+4 | elder | The Elder sees nine sails come out of the haze, and counts the guns.
hostile: I counted the gunports on the flagship. One hundred and eight. I know what they cost. I signed the requisition for the powder.
wary: A fleet. It is a beautiful thing, in its way. It has the clean lines of a decision that has been made by someone else.
neutral: I used to read about naval engagements in the library of the Law Hall, in the winter, with my feet on a brazier. I thought of them as problems of arithmetic. I was wrong about that, as about much.
warm: I held your hand on the Wall. You did not notice. I thought: if the first broadside comes, I should like it to find me standing in the right place.
devoted: There is no one on that fleet I would trade for you. I should like you to know that. It is a bad moment to say it, and it is the only one I have.
`,
  remarks: String.raw`
% sails_kou_later | since:b3q_sails>=3 | ren | Captain Kou gave a speech to the harbour. It was four lines long. He said: I am not good at this. Please stand where I tell you. That is all I need.
% sails_hok_later | since:ninesails_a2>=5 | gu | Sergeant Hok has taught the fishermen to fire a rifle. They are dreadful. They are the bravest dreadful marksmen I have ever seen.
`,
};
