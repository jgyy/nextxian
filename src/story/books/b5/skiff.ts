import type { Arc } from "../types";

/**
 * Book Five, arc one: the Skiff-Wrights. At the edge of the Glass Sea a guild of boat-builders makes the wind-runners that cross it,
 * and will sell none to a party of strangers with a Garrison price on its head. Four approaches: bargain with Master Ochir
 * (a1, truth), win the Race of the Nine Sails (a2, force), swap the hull-plates in the night (a3, deceit), and mend a child's wrecked
 * skiff (a4, mercy). A hidden route flies the wedding rug as a sail. Cast: Master Ochir, Nomin the apprentice, Batzorig the Gull,
 * Yue Zhaoning, Temur, Hanming, Dolgion's rug.
 */
export const skiff: Arc = {
  id: "skiff",
  name: "The Skiff-Wrights",
  scenes: String.raw`
=== skiff_entry | The Yard of Hulls
The yard is a mile of upturned hulls on trestles, long and narrow as knife-blades, each ribbed with glass-fibre and skinned in sheets of thin green pane. Men and women in leather goggles walk along them with mallets, tapping, listening. The tap is a note, and the note tells them where a hull is sound. The whole yard rings like a xylophone in the wind.
At the end of the row, in front of a shed, a one-eyed old man is sitting on a barrel with a pipe, watching you come. He has a face like a boot.
“Strangers,” says Master Ochir. “Nine of you, a cart, a camel, and a Garrison price.” He taps ash from the pipe. “I have been told not to sell you anything.”
“By whom?”
“By a man in green silk,” says the old man. “He said the Inspector would be most grateful.” He puffs. “I did not care for his beard.”
Yue Zhaoning has gone very still.
“I am,” says Ochir, “open to persuasion.”
> truth | Offer him a fair price, and say plainly where you are going. | skiff_a1s1
> force | Look at the great sail-pole at the end of the yard, and the nine banners on it. | skiff_a2s1 | needs:4
> deceit | Look at the three finished skiffs in the shed, tagged with a green seal. | skiff_a3s1
> mercy | Look at the child on the roof of a smashed skiff, who has been watching you for an hour. | skiff_a4s1
> inquiry | Unroll the finished wedding rug from the cart, and ask what it would do as a sail. | skiff_h1 |  | kurultai_peace | You carry no sail.

// ---------------------------------------------------------------- a1: the bargain
=== skiff_a1s1 | A Fair Price
You say it plainly, on the barrel-head, in front of the whole yard. You say where you are going. You say why. You do not leave out the Garrison, or the Inspector, or the man in green silk. The Wrights have stopped tapping to listen.
Master Ochir hears it out with his single eye half shut. When you finish, he knocks his pipe on his boot.
“Three hundred miles,” he says. “Thirty-nine days. Nobody has done it in under forty-five since my father’s time.”
“We must.”
“Aye. The glass is a hard road.” He scratches his jaw. “Three skiffs would be four hundred silver. That is the price to an honest stranger.”
“We have a hundred and ten.”
“Then the price is high.” His eye twinkles. “But I do not sell for silver, mostly. I sell for stories. Tell me something that I have not heard.”
Hao Lan opens her mouth. He holds up a finger.
“Not you, girl. You look like a lawyer.”
> truth | Tell him about the child in the hollow. | skiff_a1s2
> mercy | Tell him about the girl who wrote names in the dust. | skiff_a1s2
> quiet | Tell him about the bell that cracked. | skiff_a1s2
> inquiry | Ask what stories he has already heard. | skiff_a1s2

=== skiff_a1s2 | What He Had Heard
“Everything,” says Ochir, comfortably. “A Wright hears the whole Steppe, if he sits still. Gossip comes down the caravans. Last year I heard that a woman had lost her hat in the Great Ring. Last month, that a man had walked out of the Mill with nine hundred pounds of dust in his sleeves.” He puffs. “It is a thin story. But it is the sort I like.”
“Then you have heard of us.”
“I have heard that a stranger broke a Hush bell.” His good eye is sharp. “I have heard she sat on a hill for three days and carried a lullaby. I have heard she lifted a tower off its wheels with a bit of scrap.” He tilts his head. “I thought: no. That cannot be one person.”
“It was not.”
“I thought not.” He nods. “So tell me who it was.”
You consider this. The yard has gone quiet. A gull-like bird sits on the nearest mast, preening.
“It was everyone,” you say. “It was the Listeners.”
> truth | Name them. | skiff_a1s3
> mercy | Name the girl Chimeg. | skiff_a1s3
> quiet | Name the old woman Itgel. | skiff_a1s3
> inquiry | Ask what he would have said. | skiff_a1s3

=== skiff_a1s3 | A Wright’s Price
You name them. It takes twenty minutes, in the afternoon sun, on the edge of the yard, and the Wrights come in ones and twos to sit on the trestles. You name the deaf Singer and his apprentice; the Glass-Wright with the gold teeth; the smith and the weaver who finished a rug. You name the girl who held the last link, and the old woman in the hut, and a boy with enormous ears who has been given back his name.
When you stop, nobody speaks. A hammer, somewhere, is tapping out a slow note.
“That’s a good story,” says Ochir at last. His voice is not steady. “It is a better story than I deserve to be told on a Tuesday.” He rubs his single eye with a knuckle. “It is worth a skiff.”
“One?”
“Perhaps two.” He heaves himself off the barrel. “But I must warn you. There is a clause.”
“What clause?”
“A Wright does not sell a skiff,” says Ochir, “to anyone who cannot sail it.”
> truth | Ask for a lesson. | skiff_a1s4
> mercy | Look at Yue. | skiff_a1s4
> quiet | Look at the mast. | skiff_a1s4
> inquiry | Ask who will test you. | skiff_a1s4

=== skiff_a1s4 | The Test
It is a simple test. He sets you on a bench in the yard with a model skiff, a tin basin of water, and a wooden spoon. You are to sail the model across the basin by blowing. He sits across from you with his pipe.
“It is wind,” he says. “That is the whole of the craft. The rest is knots.” He watches your cheeks puff. “A sail is not a wall. It is a hand. You do not push the wind. You hold it, lightly, and it carries you.”
The model skiff skitters, wobbles, and turns turtle.
“Again.”
You try again. You try nine times. On the tenth, you stop blowing, and simply tilt the spoon so the draught from the open shed catches the leaf-sail, and the model glides across the basin, perfectly.
Ochir looks at it for a long moment.
“Aye,” he says. “That’s the trick.” He sucks his pipe. “It took my daughter eleven years to learn that.”
He does not say where his daughter is now.
> truth | Ask. | skiff_a1s5 | npc:SU_SKIFF_WIND
> mercy | Wait. | skiff_a1s5
> quiet | Look at the basin. | skiff_a1s5
> inquiry | Ask what the clause is for. | skiff_a1s5

=== skiff_a1s5 | Ochir’s Daughter
“Gone,” says Ochir. “Out on the glass, six years back, in a gale. She was twenty-two. The best sail I ever trained.” He taps the pipe on the barrel. “That is what the clause is for. Nobody goes out on the sea unless they can come back.”
“Did she?”
“Her skiff did. By itself, two days after, on a following wind, with the sail trimmed and the tiller lashed.” His voice is level. “She had lashed it before she went over. She wanted to be sure the boat would come home.”
“I am sorry.”
“Don’t be. She was cleverer than me.” He sniffs. “She left me a note. It was written on the inside of a sail. It said: ‘Dad. The glass is an honest road. It will take you where you point it.’”
He looks at you, and for a moment his battered face is quite naked.
“I wonder,” he says, “if you are pointing at the right thing.”
> truth | Say you are. | skiff_a1s6
> mercy | Say you hope so. | skiff_a1s6
> quiet | Say nothing. | skiff_a1s6
> inquiry | Ask what she was pointing at. | skiff_a1s6

=== skiff_a1s6 | What She Was Pointing At
“The Stair,” says Ochir. “The Heavenly Stair, on the far shore. She wanted to climb it.” He gives a short bark of a laugh. “Everyone does. I thought she was a fool. Now I am old, I suspect she was only young.”
“Why did she want to?”
“To be written.” His good eye is bright. “That is what they promise. A line in the Ledger. A place among the immortals.” He spits. “She had been told that a Wright could never rise, because Wrights are not written. We make things. We do not sign them.”
“Is it true?”
“I do not know.” He shrugs. “I know my daughter drowned in a sea of glass with her heart set on a ladder.”
The yard has fallen silent. You can hear the wind in the masts.
“I will sell you three skiffs,” says Ochir, abruptly. “For forty silver and a promise.”
“What promise?”
“That if you reach the Stair,” he says, “you will ask them for her name.”
> truth | Promise. | skiff_a1s7
> mercy | Ask what it was. | skiff_a1s7
> quiet | Take his hand. | skiff_a1s7
> inquiry | Ask what they will say. | skiff_a1s7

=== skiff_a1s7 | Her Name
“Gerel,” he says. “Ochirgerel, in full, but nobody used it.” He pronounces it carefully, as though carrying a full cup. “It means light.”
You say it back. He nods. He does not look at you.
“Ask them if she is in the book,” says Ochir. “That is all. I do not want her back. I want to know whether she was ever recorded.” His thick fingers are working at the pipe. “It would be a comfort to know that someone wrote down that she was good with a sail.”
“I will ask.”
“You are a liar,” he says without heat. “Everyone says they will. But you have the look of someone who would.” He gets slowly to his feet. “Come. I will show you the shed.”
The three skiffs are narrow and black and beautiful. They have names painted on the prows in a small neat hand. They are called Light, Sail and Return.
“I never sold them,” says Ochir. “They were hers.”
> truth | Touch the nearest hull. | skiff_a1s8
> mercy | Say you cannot take them. | skiff_a1s8
> quiet | Look away. | skiff_a1s8
> inquiry | Ask why the names. | skiff_a1s8

=== skiff_a1s8 | Light, Sail and Return
“She built them for a journey,” says Ochir. “Three skiffs, three hands. She thought she would sail with two friends. They never came.” He rubs the nearest prow. “I have waxed them every spring. It is a foolish habit. They are in perfect order.”
“We cannot take her skiffs.”
“They are not hers. They are mine. And I am old.” He sets his jaw. “A skiff is like a coat. It is no use hanging on a nail. Take them out. Let them be wet.”
You look at Light. It is a lean black hull, nine paces long, with a mast like a harpoon and a sail the colour of dried blood. The wood is dark with oil. You can see where a small hand has rubbed it, again and again, on the same spot, at the bow.
“Would she mind?” you say.
“She would be furious,” says Ochir. “She would tell you the trim was wrong.” His voice cracks. “And then she would tell you how to fix it.”
Behind you, Yue Zhaoning has quietly begun to cry.
> truth | Thank him. | skiff_a1s9
> mercy | Take Yue’s arm. | skiff_a1s9
> quiet | Bow. | skiff_a1s9
> inquiry | Ask Yue what is wrong. | skiff_a1s9

=== skiff_a1s9 | Learning to Trim
He teaches you himself. It takes two days, on the glass flats beyond the yard, in a small wind. He sits in the stern of Light with his one eye on the sail and his hand on the tiller, and tells you what is wrong in a flat, patient voice. Too much belly. Too little. Let it breathe. Let it go. When you trim well, he says nothing; when you trim badly, he says “Hm,” and you know.
By the evening of the second day, Temur has stopped being sick. Hanming has found he can steer. The Elder sits in the lee of the mast with her eyes shut and her knuckles white, and a faint, incredulous smile.
“I am on a boat,” she says, “on a plain.”
“It is not a boat,” says Ochir. “It’s a skiff.”
“I do not see the distinction.”
“A boat floats.” He grins, showing three teeth. “A skiff believes.”
At sunset he hands you the tiller and walks back along the glass to the yard, a short bent figure in a long coat, without looking round.
> truth | Sail on. | skiff_close | +skiff_bought
> mercy | Watch him go. | skiff_close | +skiff_bought
> quiet | Hold the tiller. | skiff_close | +skiff_bought
> inquiry | Ask Yue about her tears. | skiff_close | +skiff_bought

// ---------------------------------------------------------------- a2: the race
=== skiff_a2s1 | The Nine Sails
The pole stands at the end of the yard, a hundred feet of pine, planted in the glass. Nine banners hang from it, in the colours of the nine Wright families. One is missing. A bare brass cleat stands in its place.
“The Race of the Nine Sails,” says a lanky young Wright, coming up with a ladle of water. “Twice a year. The winner takes the tenth banner and the right to sell one skiff to whomever they choose.” He grins. “Nobody outside has won in forty years.”
“Who is the champion?”
“Batzorig the Gull.” He nods across the yard. A wiry man of thirty, in a white leather jacket, is trimming a brilliant silver skiff with the tenderness of a lover. “He has won eleven. He is insufferable.”
Ren Qiao has crossed his arms. Yue Zhaoning, beside him, has the glitter in her eye of a smuggler scenting a bet.
“Nine laps,” says the Wright. “Round the pole. Whoever crosses the line first, wins.”
“And if the stranger loses?”
“She buys her own skiff,” he says cheerfully, “at triple.”
> force | Enter. | skiff_a2s2 | needs:4
> truth | Ask the rules. | skiff_a2s2
> quiet | Study the Gull. | skiff_a2s2
> mercy | Ask if anyone is hurt. | skiff_a2s2

=== skiff_a2s2 | A Borrowed Hull
They lend you a skiff. It is an old one, lopsided, patched in three greens, with a sail like a bedsheet and a name painted over: you can still read Slow Cow under the fresh black. The Wrights laugh when you push off. Even Ochir, watching from his barrel, sucks his pipe with an air of grim amusement.
Yue Zhaoning sits in the stern, with the tiller. Ren Qiao is on the sheet, because he is strong. You sit in the bow, because someone must call the wind. Hao Lan has refused to come. She is on the bank with a notebook, wearing a look of dignified horror.
Eight skiffs line up on the glass. The Gull is on the pole side, silver and shining, his goggles on his forehead, grinning.
“Good luck,” he calls. “You’ll need it. That boat has been dead for ten years.”
“So have most of my relatives,” says Yue, equably.
The horn blows.
Nine sails fill at once with a noise like a flock of startled geese. The skiffs surge. The glass goes by in a white blur.
> force | Hold on. | skiff_a2s3
> truth | Call the wind. | skiff_a2s3
> quiet | Duck. | skiff_a2s3
> mercy | Watch Ren. | skiff_a2s3

=== skiff_a2s3 | Lap One
It is the loudest, brightest, fastest thing you have ever done. The skiff leans. A runner lifts clear of the glass and screams on the other. Yue hauls the tiller, her teeth bared, and the world tilts; the pole flashes past, hung with banners; the other sails swing round it in a tight white arc.
The Gull is ahead already. He takes the first turn with insolent ease, one runner lifted, the silver hull a blade on the plain. You can see him laughing. Behind him, the pack bunches. A skiff touches another’s stern and spins away with a yell.
“Call it!” shouts Yue.
“What?”
“The wind! Where is it? You’ve got the nose!”
You close your eyes. The wind is a pressure on your left cheek, a coolness behind your ear. It is coming from the pole, but low, curling round it like water round a rock.
“Left!” you shout. “Round the back! It’s flowing the wrong way!”
Yue throws the tiller. The old skiff groans and slides sideways into a pocket of clean air, and the sail booms.
You pass three boats at once.
> force | Keep calling. | skiff_a2s4
> truth | Watch the Gull. | skiff_a2s4
> quiet | Hold your breath. | skiff_a2s4
> mercy | Check on Ren. | skiff_a2s4

=== skiff_a2s4 | The Middle Laps
By the fifth lap you are second. The Gull is still ahead, a quarter-mile, a silver spark. The rest are a ragged smear behind. Your hands are blistered. The sail is a roaring drum. Ren Qiao is hauling the sheet like a man trying to pull down a roof, and the veins stand out on his neck.
“He’s too fast!” he yells. “I can’t catch him on the straight!”
“Then don’t,” shouts Yue. “Take the corner!”
“He owns the corner!”
“No one owns a corner. It’s a place where you decide.” She bends over the tiller. “The Gull turns wide because he’s proud of his hull. We turn tight because we’re scared of dying.”
“I’m not scared!”
“You’re very scared,” she says kindly. “It’s a gift.”
The sixth lap. The seventh. The Gull turns wide, as she said, showing the whole shimmering underside of his skiff, and Yue puts the nose in the gap. The old hull shudders. The runner screams. For an instant you are alongside him, close enough to see his face.
He is no longer laughing.
> force | Hang on. | skiff_a2s5
> truth | Call the gap. | skiff_a2s5
> quiet | Lean out. | skiff_a2s5
> mercy | Shout a warning. | skiff_a2s5

=== skiff_a2s5 | The Gull Fouls
It is not deliberate, at first. He is only trying to hold his line. But the gap is closing, and his skiff is bigger, and the two hulls touch. A long scream of glass on glass. The Slow Cow shudders. A runner skips, and the whole boat lurches toward the pole.
“Foul!” roars Ren Qiao.
“It’s the race!” shouts the Gull. His face is red. “I have the water!”
“There’s no water on glass!”
“It’s a figure of speech!”
He swerves again. The silver hull slams into yours. The mast cracks like a pistol. You are thrown forward onto the deck, your cheek against the hot wood, and the sail goes slack and flaps like a dying bird.
Yue Zhaoning is on her feet. She has a knife in her teeth and a boathook in her hand. She is saying something that would shame a bargee.
“Don’t,” you gasp.
“I won’t.” She takes the knife out. “I will, however, cut his rope.”
“What rope?”
“The one that holds his boom.”
> force | Let her. | skiff_a2s6 | needs:4
> truth | Say it is dishonourable. | skiff_a2s6
> quiet | Hold her arm. | skiff_a2s6
> mercy | Look at the Gull. | skiff_a2s6

=== skiff_a2s6 | The Boom
She does it in one slash, leaning out over the stern, as the silver skiff pulls ahead. The sheet parts with a twang. The Gull’s great boom swings free. It sweeps across the deck. It strikes him in the chest, and he goes overboard, in a long spinning arc, and slides forty yards along the glass on his back, goggles flying.
The silver skiff, riderless, careers to a halt, sail flogging.
There is a moment of stunned silence. Then the yard begins to roar.
“Was that fair?” you say.
“It was in the rules.” Yue puts the knife away. “Rule nine. A Wright may cut a rival’s rope. I looked it up.”
“You looked it up?”
“I always do.” She takes the tiller. “I’m a smuggler. I read the small print for a living.”
You are limping now, with a broken mast, a sail like a torn flag, and seventy yards to go. The Gull is on his feet, a small angry figure on the glass, shouting. Nobody is listening.
The line comes up. You cross it at a crawl.
> force | Cross. | skiff_a2s7
> truth | Look back. | skiff_a2s7
> quiet | Breathe. | skiff_a2s7
> mercy | Look for the Gull. | skiff_a2s7

=== skiff_a2s7 | The Gull Walks In
He walks the whole way. It takes him half an hour. He walks across the glass in his white leather jacket, bareheaded, with his goggles hanging round his neck, in the glare of noon. The crowd parts for him. He comes up to the line, to the pole, and stops in front of you.
His lip is split. He has a bruise on his chest the shape of a boom.
“That was a foul,” he says.
“It was in the rules,” says Yue.
“I know it was.” He wipes his mouth. “I wrote rule nine.”
Nobody speaks.
“I wrote it,” says the Gull, “when I was nineteen. After my brother lost an eye to a rival’s boom. I thought: let it be legal. Let it be known. Then nobody will do it.” His laugh is thin. “I have never once seen it used.”
“I am sorry.”
“Don’t be.” He looks at his silver skiff, which a crowd of Wrights are towing in like a captured whale. “It is the best-handled race I have ever lost.”
He holds out a hand. It is shaking.
> force | Shake it. | skiff_a2s8
> truth | Say he sailed well. | skiff_a2s8
> quiet | Nod. | skiff_a2s8
> mercy | Help him up. | skiff_a2s8

=== skiff_a2s8 | The Tenth Banner
They raise it that evening on the pole. It is a plain strip of green, with no device. Ochir hoists it himself, with a bent wrist. It hangs limp, then catches the wind and cracks out, high over the yard, as all the Wrights lift their mallets and strike the hulls beside them in a long ringing roar.
“A tenth family,” says Ochir, wiping his eye. “There has not been one in my lifetime.” He grins. “What shall we call it?”
“I don’t know.”
“Not yet.” He claps you on the shoulder. “You have the right to sell one skiff to whomever you choose.”
“I don’t want to sell.”
“Then you may buy.” He winks. “It’s in the rules. Gerel’s three, Light, Sail and Return. A lawful price.” He names a figure. It is exactly the amount in your purse.
The Gull is standing at the foot of the pole, looking up. He has not left.
“I would like to sail with you,” he says gruffly. “As pilot. If you’ll have me.”
> force | Accept. | skiff_a2s9 | needs:4
> truth | Ask why. | skiff_a2s9
> quiet | Look at Yue. | skiff_a2s9
> mercy | Say you would be honoured. | skiff_a2s9

=== skiff_a2s9 | A Pilot
He sails in the lead skiff, Light, the whole way across. He is a good pilot. He is a bore. He tells you at length about currents, about glass-weather, about the three kinds of dawn, and every few hours he pauses to say, with obvious reluctance, “It was a clean foul.” It becomes a kind of benediction.
On the first night out he sits at the stern, tending the lamp, with his silver jacket pulled round his ears. You sit beside him. The stars are very close.
“Why did you ask?” you say.
“Because I lost.” He shrugs. “I have not lost in six years. I forgot what it was like.” He rubs his chest. “Do you know, it was a relief?”
“Of what?”
“Of being the Gull.” He smiles faintly. “It is a very heavy bird. Every year I have to be a little faster. A little prouder. If I lose, no one expects me to be anything.”
He glances up.
“I should like,” he says, “to see what that is.”
> force | Smile. | skiff_close | +skiff_won
> truth | Offer him tea. | skiff_close | +skiff_won
> quiet | Watch the stars. | skiff_close | +skiff_won
> mercy | Ask what he would like to be. | skiff_close | +skiff_won

// ---------------------------------------------------------------- a3: the swap
=== skiff_a3s1 | Green Seals
They stand in the long shed, in a row, under a canvas roof: three finished skiffs, black and gleaming, with raked masts and sails furled. Each bears a tag on the prow, a square of green wax stamped with a pair of crossed pens. The Inspector’s mark.
“Bought and paid for,” murmurs Yue Zhaoning. She is on her belly in the dust of the yard, peering through a gap in the planking. “Three weeks ago. The man in green silk. He put down the money and said he would be back for them.”
“Then they are not for sale.”
“They are the best in the yard.” She wriggles back. “And they are lying idle. Waiting for a Garrison crew to come and cross the Sea to the Stair.” Her teeth flash. “It would be a sin to let them rot.”
“You are suggesting we steal them.”
“I am suggesting,” says Yue, “that we swap.”
Hao Lan, sitting on a barrel with her notebook, looks up. A gleam has come into her eye. “Oh,” she says. “I like where this is going.”
> deceit | Ask what she means. | skiff_a3s2
> truth | Say it is stealing. | skiff_a3s2
> quiet | Study the seal. | skiff_a3s2
> mercy | Think of Ochir. | skiff_a3s2

=== skiff_a3s2 | A Question of Hulls
“There are three more in the yard,” says Yue. “The same model, the same size. They are not finished. They are rough, and the sails are the wrong colour. A Wright built them from scraps, for training.” She spreads her hands. “Put the green seals on the scraps. Take the good ones.”
“He will notice.”
“Who? The Inspector’s man?” She laughs. “He is a clerk. He has never sailed. He thinks a skiff is a skiff.” Her face is bright. “And Ochir will not mind.”
“How do you know?”
“Because he winked at me.” She taps her nose. “He told me they were the best three in the yard, and then he said he was going to bed at sunset, and the dogs were old.”
“That is not a promise.”
“It is a Wright’s promise,” says Yue. “Nobody says a thing out loud. They leave the door unlatched.” She grins. “It is the whole philosophy of the Glass. Never say yes. Be somewhere else.”
Hao Lan is already measuring the tag with a ruler.
> deceit | Fetch the wax. | skiff_a3s3
> truth | Ask Ochir. | skiff_a3s3
> quiet | Keep watch. | skiff_a3s3
> mercy | Say you will leave payment. | skiff_a3s3

=== skiff_a3s3 | Wax and Pens
It is Hao Lan’s great evening. She sets up a table in the lee of the shed, with a candle, a heated spoon, and a ball of green sealing-wax scraped from the corner of a dozen unused invoices. She has Shu Ning’s method written in her notebook. She presses the Inspector’s seal into the soft wax with a thumb-stamp carved from a turnip. It leaves a perfect impression, crossed pens and all.
“It was easy,” she says modestly. “The pens are the wrong way up. It’s one of those mistakes that makes it more convincing.”
“How?”
“Because the real stamp was made by a tired apprentice. So the pens are always slightly off.” She holds up the turnip. “I reproduced the apprentice’s tiredness.”
“It is a work of art.”
“It is a work of laziness.” She dips the spoon. “That’s the secret of forgery. You have to be as lazy as the original.”
At midnight you creep along the shed in the starlight, with a coil of rope and three pots of black paint. The dogs lift their heads, look at you, and lie down again.
> deceit | Move. | skiff_a3s4
> truth | Feel uneasy. | skiff_a3s4
> quiet | Hold the lantern. | skiff_a3s4
> mercy | Whisper to the dogs. | skiff_a3s4

=== skiff_a3s4 | The Swap
It takes four hours. You roll the good skiffs out on rollers, one by one, over the glass, with the rope-handles creaking and every nerve screaming. You roll the scrap hulls in. You nail the green seals on. You repaint a prow, smudge a sail, scuff a runner. By three in the morning the shed looks exactly as it did.
Temur is in charge of the lantern. He holds it shuttered. At one point a night-bird flaps out of the roof-beams and he nearly drops it, and the whole party freezes. Nobody breathes.
“Dog,” says Yue.
“What?”
“There’s a dog.”
You turn. At the shed door, in the starlight, sits Ochir’s old brindle bitch, with a bone, watching you with an air of tolerant boredom. She wags her tail twice and goes back to chewing.
“She’s on our side,” breathes Temur.
“She’s on the side of whoever has bones,” says Yue. “Throw her another.”
You do. The dog thumps her tail. The last skiff rolls out onto the glass.
> deceit | Check the knots. | skiff_a3s5
> truth | Look at the shed. | skiff_a3s5
> quiet | Cover the tracks. | skiff_a3s5
> mercy | Pat the dog. | skiff_a3s5

=== skiff_a3s5 | Morning
Ochir finds you at dawn, on the glass, loading the cart. He comes out of his house in his shirt-sleeves with a mug of tea, stands on his step, and looks at the three black hulls with the practised glance of a man examining a field of barley. He sips. He does not say a word.
You wait.
He crosses the yard, slowly, the mug steaming in the cold. He stops by the nearest skiff and runs a hand along the planking. He taps. He listens. He nods to himself.
“Fine hull,” he says. “Good grain.”
“Master Ochir—”
“I could not say.” He sips. “My eyesight’s poor. I’ve only the one.” He lifts the mug. “Strange thing. I could have sworn those were the Inspector’s. But I see I must be mistaken.”
He turns. His eye twinkles.
“The man in green silk will be back tomorrow,” he says. “I shall be very sorry to show him his skiffs.”
“What will you tell him?”
“That the wind took them,” says Ochir. “It’s the Glass. It does.”
> deceit | Thank him. | skiff_a3s6
> truth | Leave the money. | skiff_a3s6
> quiet | Nod. | skiff_a3s6
> mercy | Ask if he will be safe. | skiff_a3s6

=== skiff_a3s6 | The Money
You leave it on the barrel: a hundred and ten silver, in a leather bag, with a note in Hao Lan’s neat hand. It says: For three good skiffs that the wind took. Ochir looks at it for a long time. Then he picks it up, weighs it in his hand, and tucks it into his shirt.
“I shall put it in the fund,” he says. “For the apprentices.” He pats the bag. “There is a boy in the yard who wants to learn glass-blowing. He has no father.”
“It is yours to use.”
“It’s the Wrights’,” says Ochir. “Which comes to the same.” He studies the sky. “You will want to be off before the clerk arrives.”
“How long?”
“Four hours. He rides slow.” He pauses. “He rides slow because he is afraid of the glass.”
Behind him the yard is stirring. Wrights come out of their houses, rubbing their eyes. A few look at the empty rollers. A few look at you. Not one of them says anything. It is a very polite silence.
“Go on,” says Ochir gruffly. “Sail.”
> deceit | Board Light. | skiff_a3s7
> truth | Salute. | skiff_a3s7
> quiet | Cast off. | skiff_a3s7
> mercy | Wave. | skiff_a3s7

=== skiff_a3s7 | The Man in Green Silk
You see him from the first rise. He comes across the glass at a nervous walk, on a plump dun pony, with a sunshade on a stick. He is a small man in green silk, with a pointed beard and a wide hat. He carries a roll of paper under one arm. Two grey-coated guards trail behind him, sweating.
You have the sail half-hoisted. You are a mile off. He cannot possibly see you.
He pauses. He lifts a spyglass. He looks, for a long minute, at the shed, the yard, the pole with its banners. He lowers it. He consults the roll.
“He is counting,” whispers Hao Lan, at your elbow.
“Counting what?”
“The skiffs. Three.” She bites her lip. “He will check the tags.”
The man in green silk rides up to the shed. He dismounts. He walks down the row. He pauses at each hull, and inspects the green seal, and makes a note. His guards stand by, yawning.
At the end of the row he looks up. For a moment, you are certain he is looking straight at you.
Then he writes something down, and nods.
> deceit | Hold your breath. | skiff_a3s8
> truth | Duck. | skiff_a3s8
> quiet | Pull the sail. | skiff_a3s8
> mercy | Hope. | skiff_a3s8

=== skiff_a3s8 | Satisfied
He is pleased. He tells Ochir so, over tea, in the doorway of the house. He says that the Inspector will be gratified. He says the hulls are of excellent workmanship, though he had expected the sails to be a trifle darker. Ochir agrees that they are a trifle pale. He blames the dye.
You watch it all through Yue’s spyglass from the first mile of the glass. Your heart is a drum.
“He has not seen it,” breathes Hao Lan. “The pens. The wrong way up.”
“He’s a clerk.”
“He’s a very bad clerk.” She sounds almost offended. “One would think he’d check.”
“He checks the paperwork,” says Yue. “Not the boats.” She chuckles. “It is the oldest rule of administration. If the form is right, the world is right.”
The man in green silk bows. He mounts his pony. He rides off toward the Fort, with his guards trudging behind, and Ochir stands on his step, watching him go, with an expression of limitless courtesy.
When the dust has settled, the old man lifts his mug. He tilts it, very slightly, toward the horizon.
> deceit | Raise a hand. | skiff_a3s9
> truth | Laugh. | skiff_a3s9
> quiet | Take the tiller. | skiff_a3s9
> mercy | Wave back. | skiff_a3s9

=== skiff_a3s9 | Three Black Hulls
They are better than you had any right to expect. Light, Sail and Return, the old Wright’s daughter’s skiffs, lean and black and fast, with raked masts and sails of dried-blood red. They answer the tiller like living things. They run over the glass with a long whispering sigh.
Ren Qiao stands at the mast of Return with his hair blowing back. His face is lit, boyish, absorbed. He catches your eye across the gap, and shouts something that the wind snatches away.
“What?” you shout.
“I said, it is a good thing!” He cups his hands. “I have never stolen anything in my life!”
“You did not steal it!”
“I held the rope!” He is grinning. “It is the best thing I ever did!”
Beside you, Hao Lan is making notes on her knee. Her handwriting is shaky from the speed. She is writing, in a neat hand: Forgery: sound. Escape: sound. Conscience: under review.
She looks up.
“I shall have to confess,” she says, “at some point.”
“To whom?”
“To Ochir.” She smiles. “He will say he saw nothing.”
> deceit | Laugh. | skiff_close | +skiff_swapped
> truth | Take her hand. | skiff_close | +skiff_swapped
> quiet | Sail. | skiff_close | +skiff_swapped
> mercy | Say it was a gift. | skiff_close | +skiff_swapped

// ---------------------------------------------------------------- a4: the child
=== skiff_a4s1 | On the Roof
She is eleven, with a squint and a gap in her teeth, and she sits cross-legged on the roof of a wrecked skiff, with a mallet in her lap. The skiff is lying on its side. Its hull is split from stem to stern and its mast is in three pieces on the ground. A nest of splintered glass-ribs bristles from the break.
She has been watching you for an hour. She has not moved.
“That’s mine,” she says, when you come close. Her voice is gruff. “Don’t touch it.”
“What happened?”
“I built it.” She scowls. “It was the first I ever built from scratch. I took it out on the flats. A cross-wind got it.” She flicks the mallet. “It rolled.”
“Were you hurt?”
“I broke my arm.” She raises her left, which is in a sling. “It doesn’t matter.” Her small face crumples, briefly, and uncrumples. “The hull’s ruined. Ochir says it can’t be mended. He says to burn it for the glass.”
She looks at you.
“I don’t want to burn it,” she says.
> mercy | Ask her name. | skiff_a4s2
> truth | Ask to see the hull. | skiff_a4s2
> quiet | Sit beside her. | skiff_a4s2
> inquiry | Ask who taught her. | skiff_a4s2

=== skiff_a4s2 | Nomin
“Nomin,” she says. “That’s green, in the old tongue.” She wipes her nose on her sleeve. “It’s because I was born with a green mark on my arm.” She holds out the unslung wrist. There is a small birthmark, the size of a bean, pale jade. “Ochir says it’s lucky. Wrights are all green.”
“Who taught you?”
“Nobody.” She squints. “I watched. I used to hide under the trestles and listen to the tapping. You can hear what a hull needs. It tells you.” She sniffs. “Then they’d find me, and chase me out, and I’d come back.”
“Did Ochir mind?”
“He pretended to.” She grins, briefly. “He left a mallet one day. On the ground. By my hiding-place.” She hefts it. “This is it.”
You look at the broken skiff. It is small, narrow, no more than six paces long, and it has been built with extraordinary care. The joints are perfectly cut. The curve of the hull is clean as an egg.
“It’s beautiful,” you say.
“It’s broken.”
“Both.”
> mercy | Ask what is wrong with it. | skiff_a4s3
> truth | Say you can fix it. | skiff_a4s3
> quiet | Touch the hull. | skiff_a4s3
> inquiry | Ask if you may try. | skiff_a4s3

=== skiff_a4s3 | What Is Broken
Everything, to look at it. The keel is cracked. Four ribs are shattered. The deck is stove in. The mast, in three, is irreparable. But you crouch beside the wreck, in the sun, with the child watching, and you run your hands along the break, and you feel where it hurts.
It is a clean break. That is the odd thing. It has gone along a line, as a cracked plate does. The glass in the hull is toughened, but along one rib a small flaw runs through it: a hairline, an old bubble, a speck of grit.
“That’s where it went,” you say.
“I know.” Nomin’s voice is small. “It was in the pane. I should have seen. Ochir says a Wright always sees the flaw.”
“Did he say that?”
“He says it every day.”
“Did you see it?”
“No.” She scrapes her boot. “I thought it was a bit of dust.” She looks up. “What do you do, when you can’t see the flaw?”
You think. It is a surprisingly hard question.
“You build another one,” you say. “And you look harder.”
> mercy | Ask if she wants to try. | skiff_a4s4
> truth | Offer to help. | skiff_a4s4
> quiet | Look at the sling. | skiff_a4s4
> inquiry | Ask where the glass came from. | skiff_a4s4

=== skiff_a4s4 | Two Hands
She has one good hand, and you have two, neither of which has ever held a Wright’s mallet. You work it out between you. She tells you which tool and where. You do the hitting. She sits on a barrel with her arm in a sling and her chin on her fist, directing, with the supreme authority of an eleven-year-old who is right.
“Not there. There.”
“This one?”
“No. The one with the chip.”
“They all have chips.”
“The chip with the *other* chip.”
It takes three days. You dismantle the hull rib by rib. You find the flaw, an actual pinhead of grit, trapped between two panes, and she cries out, in triumph and shame, and nearly falls off the barrel. You pare it out with a chisel. You cut new ribs from the best of Ochir’s offcuts, which he has left in a stack by the trestle with a sign that says NOT FOR STRANGERS.
Gu comes to help. So does Hanming. By the end of the second day the whole party is in the yard, crowding round a six-pace skiff, handing up clamps.
> mercy | Hold the clamp. | skiff_a4s5
> truth | Mark the rib. | skiff_a4s5
> quiet | Sand. | skiff_a4s5
> inquiry | Ask Gu what he thinks. | skiff_a4s5

=== skiff_a4s5 | Hanming Learns to Weld
He is no good at it, which is the delight. He sits on an upturned bucket, with his scarred face screwed up, trying to run a seam of molten glass along a rib. It dribbles. It beads. It forms a small ugly lump which Nomin examines gravely and pronounces “a brave attempt.”
“I am a glass-blower,” he says. “I should be able to do this.”
“It’s different.”
“It’s the same glass!”
“It’s the same glass,” says Nomin, “but a different *way*.” She squints. “A blower makes it go round. A Wright makes it go along. You’re doing round.”
“I didn’t know there was a difference.”
“Most people don’t,” she says, loftily.
He looks at the lump. He starts to laugh. It is a low helpless wheeze that rises and rises, until Gu begins too, and the child, and the Elder in the lee of the shed, with her hand on her chest. The yard fills with it.
“Again,” says Nomin, sternly, when they’ve subsided.
Hanming wipes his eyes. He picks up the torch.
> mercy | Smile. | skiff_a4s6
> truth | Watch. | skiff_a4s6
> quiet | Pass him the rib. | skiff_a4s6
> inquiry | Ask Nomin her plan. | skiff_a4s6

=== skiff_a4s6 | Nomin’s Plan
“I want to sail it,” she says. “To the middle of the Sea. And back.” She has stopped working. She sits with her arm in the sling, looking east, where the mirage trembles. “It’s what a Wright does. You build one. You prove it. Then you’re a Wright.”
“Ochir said you can’t.”
“He said I can’t until I’m twelve.” She scowls. “I’m eleven and three-quarters.”
“It’s a long way.”
“It’s a hundred and fifty miles. And back. I worked it out.” She glances at you. “I want somebody to come.”
“Why?”
“Because I’m scared,” says Nomin. She says it very flatly. “I wasn’t, before. But it rolled.” She picks at a splinter. “Now every time I look at the Sea I see it rolling.”
You look at the half-built skiff. At the small tight face. At the shining plain beyond.
“I’m going that way anyway,” you say.
She stares. Then she grins, huge and lopsided, and the gap in her teeth shows.
“Obviously,” she says. “That’s why I asked.”
> mercy | Smile. | skiff_a4s7
> truth | Say you will keep her safe. | skiff_a4s7
> quiet | Hold out a hand. | skiff_a4s7
> inquiry | Ask what her skiff will be called. | skiff_a4s7

=== skiff_a4s7 | A Name for the Hull
“I don’t know.” She frowns. “I thought it should be a thing that goes along. Not a bird. A bird goes away.” She considers. “And not a fish. A fish just floats.”
“A thing that goes along.”
“Yes.” She bites her lip. “Like a story.”
“Story?”
“No. That’s silly.” Her ears are pink. “It’s a thing you tell as you go. And it comes out the same at the end.”
“A road.”
“A road isn’t a thing you go. It’s a thing that’s there.”
“A thread.”
“Yes!” Nomin bounces. “A thread!” She stops. “No. Threads break.”
“Not if they’re tied.”
She thinks about this for a long time, with her tongue between her teeth. Then she picks up a brush and the pot of black paint, and writes, on the new prow, in thick wobbling letters, a single word.
It says: Knot.
“A knot,” she says. “That’s what you do when you finish a thread.”
> mercy | Admire it. | skiff_a4s8
> truth | Say it is perfect. | skiff_a4s8
> quiet | Hold the paint. | skiff_a4s8
> inquiry | Ask if Ochir has seen. | skiff_a4s8

=== skiff_a4s8 | Ochir Sees
He comes at dusk, with his pipe. He stands at the edge of the circle of lamps and looks at the little hull on its trestles: the new ribs, the clean seams, the green deck still tacky with varnish. He walks round it twice. He taps it. He listens. He stands for a long time at the prow, with his one eye on the lettering.
“Knot,” he says.
“Yes,” says Nomin. She has stopped breathing.
“It’s sound.” He taps again. “I wouldn’t have done the rib like that. The grain’s wrong.” His voice rasps. “It will hold, though.”
“Is it good?”
“It’s a bit lopsided.”
“Is it good?”
Ochir turns. His battered face is working. “It is,” he says, “the best thing that has been built in this yard in six years.”
Nomin lets out a squawk. She flings herself at him. He catches her, awkwardly, one-armed, with the pipe still in his mouth, and holds her against his coat. His eye is shut.
Over the child’s head, he looks at you.
> mercy | Smile. | skiff_a4s9
> truth | Bow. | skiff_a4s9
> quiet | Look away. | skiff_a4s9
> inquiry | Ask if she may go. | skiff_a4s9

=== skiff_a4s9 | Leave to Sail
“She may go,” says Ochir. It takes him some time to say it. “To the middle. And back. In your company.” He holds the child at arm’s length and studies her, with the squint of a man reading a very small sign. “She is not to do anything foolish.”
“I won’t.”
“She will,” he says to you. “It is a family weakness.”
“I’ll watch her.”
“You’ll watch the sail. She’ll watch herself.” He ruffles her hair roughly. “That is the arrangement.”
She is trembling with joy. She cannot speak. She stands beside her small black skiff in the red dusk, with a bandaged arm and a gap-toothed grin, looking at the plain.
He sells you the three skiffs for forty silver and a promise. They are old, honest hulls, and not as fast as the Inspector’s: Light, Sail and Return, that were his daughter’s. “A skiff is no use on a nail,” he says. “Let them be wet.”
> mercy | Thank him. | skiff_close | +skiff_taught
> truth | Pay. | skiff_close | +skiff_taught
> quiet | Take the tiller. | skiff_close | +skiff_taught
> inquiry | Ask about Gerel’s skiffs. | skiff_close | +skiff_taught

// ---------------------------------------------------------------- hidden: the rug
=== skiff_h1 | A Sail of a Hundred Colours
It spreads across the yard like a flood: nine feet by nine, woven in a hundred colours, with a border of wild onion and a thin line of dull bronze wire running through the last row. The wind lifts a corner. The Wrights drop their mallets.
Nobody says a word. A girl at the back whispers, “Is that wool?”
“Felt,” says Ochir, hoarsely. He has dropped to one knee in the dust. He puts out a hand and does not touch it. “Felted over a lattice of horsehair. I haven’t seen a rug like this in thirty years.” His good eye is brimming. “Who wove it?”
“Two old people,” you say. “Over sixty years. They gave it to us to go where we are going.”
“Hm.” He stands, with a creak. He walks round the edge, bent at the waist, squinting at every knot. At the end of the circuit he looks as though he has been slapped.
“It will not tear,” he says. “It will not rot. It will hold a wind that would split a bedsheet in two.” His voice cracks. “It is the best sail I have ever seen.”
> inquiry | Offer it to him. | skiff_h2
> truth | Ask what skiff it should fly from. | skiff_h2
> mercy | Look at the Wrights. | skiff_h2
> quiet | Fold the corner. | skiff_h2

=== skiff_h2 | Which Hull
“There is only one,” says Ochir. “It is in the back of the shed. Under a cloth.” He is breathing hard. “I haven’t shown it in six years.”
He leads you through the dusk to the farthest corner of the shed, behind a heap of coiled rope. He lifts the dust-sheet.
It is a skiff. It is very large, nine paces of lean black hull with a mast like a spear-shaft and a prow like a swan’s neck. It is exquisitely made. Every seam is invisible. A faint iridescence plays along the glass of its flanks, as though a rainbow were trapped under the lacquer.
“Gerel’s,” says Ochir. “The fourth. She was working on it when she went out.” He puts a hand on the prow. “It has no name. It has no sail. It was waiting for a sail she could not afford.”
“A hundred colours.”
“Aye.” His eye is shut. “A thing that has been made slowly.” He opens it. “She used to say that the best sails were woven, and the best weavers were old.”
You look at the rug. At the hull. They are, you realise, exactly the same width.
> inquiry | Say it. | skiff_h3
> truth | Ask if he is sure. | skiff_h3
> mercy | Take his arm. | skiff_h3
> quiet | Wait. | skiff_h3

=== skiff_h3 | The Fourth Skiff
They rig it that night. It takes the whole yard, forty Wrights in lantern-light, rigging the great rug to the spars with bronze rings and a hundred lashings.  Ochir does the bolt-rope himself. When they hoist it, at moonrise, the huge soft slab of colour rises up the mast like a flag, slowly, shaking out its creases, and fills.
It is the most beautiful thing you have ever seen.
It glows. The wire in the last row catches the moon and burns, a thin pale gold thread across the dark. The hundred colours shift as the wind moves. The black hull beneath it leans, and quivers, and does not move, as though waiting to be told.
“Name her,” says Ochir.
“It is the right of the one who sails her.”
You think of a weaver and a smith, kneeling at either end of a rug in the dusk. A girl in a barn. A wedding that was never held.
“Batu,” you say. “She is called Batu.”
Ochir nods. He does not say a word. He lifts his hand and strikes the hull once with the flat of his palm, and the whole yard rings.
> inquiry | Cast off. | skiff_close | +skiff_rug
> truth | Hold the tiller. | skiff_close | +skiff_rug
> mercy | Weep. | skiff_close | +skiff_rug
> quiet | Look at the moon. | skiff_close | +skiff_rug

// ---------------------------------------------------------------- close
=== skiff_close | Under Sail
You cast off at first light. The yard has turned out to see you go: every Wright, with a mallet, standing along the glass in a double rank, striking the hulls beside them. The sound is a roar of music. It chases you out over the plain, falling away, a long ringing diminuendo, until the last note is a pale glint on the horizon.
+[how] skiff_bought | You told an old man a story, and he sold you his daughter’s skiffs.
+[how] skiff_won | You won the Race of the Nine Sails, and a champion came aboard as pilot.
+[how] skiff_swapped | Three green seals went on three scrap hulls, and a clerk was satisfied.
+[how] skiff_taught | You mended a child’s wrecked skiff, and she sails beside you.
+[how] skiff_rug | The wedding rug fills the sail of a hull that waited six years for it.
The glass opens. The wind is steady from the west. Behind you the shore fades into the mirage. Ahead there is only the plain, shining, and the line of the sky.
Yue Zhaoning leans on the tiller with her goggles on her forehead. She is whistling. The sound carries.
“Thirty-six days,” says Hao Lan, from her notebook. “At twelve miles a day.”
“We’ll do twenty.”
“We will do eleven and a half,” she says. “I’ve done the sums.”
“I’m an optimist,” says Yue.
“You are a smuggler,” says Hao Lan. “It is the same thing, with better knots.”
> truth | Laugh. | skiff_close2 | +b5q_skiff
> mercy | Look back once. | skiff_close2 | +b5q_skiff
> quiet | Trim the sail. | skiff_close2 | +b5q_skiff
> inquiry | Ask Yue about her tears. | skiff_close2 | +b5q_skiff

=== skiff_close2 | Yue’s Answer
She tells you on the second night. The skiffs lie at anchor in a lee of broken glass, hulls touching, lamps lit. The others are asleep. You sit with her in the stern, with a blanket round you, watching the sky. She hasn’t spoken for an hour.
“It was the names,” she says. “On the prows. Light, Sail and Return.” She picks at her glove. “Ochir’s daughter wanted to come home. She lashed the tiller so the boat would. She sent it back with nobody in it.”
“Yes.”
“I did that.” She says it quite flatly. “My nephew. The boy in the white house. I sent him a camel, to keep him company. A letter in a hem. Not me.” She stares at the stars. “I have been sending a boat home empty for three years.”
“You went to the vigil.”
“I went to the vigil.” Her mouth twists. “I got him a tooth. I got him the dust of a bell.” She sniffs. “I hadn’t realised how long it was. Till I saw that tiller.”
You say nothing. You put your arm round her. She leans, stiffly, then entirely.
> truth | Hold her. | hub_b5_a | bond:yue+3
> mercy | Stay. | hub_b5_a | bond:yue+3
> quiet | Look at the stars. | hub_b5_a | bond:yue+3
> inquiry | Ask about Tsend. | hub_b5_a | bond:yue+3

`,
  scenarios: String.raw`
$ SU_SKIFF_WIND | trust+3 respect+3 fear+4 | elder | The Elder rides a wind-skiff for the first time, and is afraid of heights.
hostile: The skiff lifted. Only an inch, on one runner, in a gust. I said a word I learned from the Chancery porters. Nobody looked at me. I believe they have all said it too.
wary: I held the mast with both hands for four hours. I do not think I breathed. At the end Hao Lan said, very kindly, that she had not known the Elder could go that colour.
neutral: There is a moment, when the sail fills, in which one has no weight at all. I find that it is not like falling. It is the opposite. It is like being forgiven.
warm: I leaned out. Only a little. Over the runner, to watch the glass go by. It runs under you like a river. I thought: I have spent my life on the ground, and have never once looked down.
devoted: If I had a hundred years I should spend them in a skiff. I should write nothing. I should merely go.
`,
  remarks: String.raw`
% skiff_nomin_later | since:skiff_taught>=3 & bond:yue>=-100 | yue | The child, Nomin, has made me a tiny skiff out of a bent spoon and a leaf. It has a name painted on the side. The name is Yue’s Fault. I am going to keep it in my coat until I die.
% skiff_ochir_later | since:b5q_skiff>=5 | ren | Old Ochir sent word that the Concord’s man in green silk came back asking for us. He said he did not recall our faces. He said it very loudly, to the whole yard.
`,
}
