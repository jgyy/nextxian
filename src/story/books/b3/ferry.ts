import type { Arc } from "../types";

/**
 * Book Three, arc five: the Ferry of Debts. Ah Zhi (cot I) keeps the only ferry across the bay to the Salt Works, owes the factor
 * for her boat, and has signed for the barrels of calm dust that cross on it. Four approaches: ride across and be honest (a1,
 * truth), take the factor's ledger from his skiff (a2, force), buy salt under a forged order and walk the refinery (a3, deceit),
 * and spend a day carrying other people's loads (a4, mercy). A hidden route reads the barrel-bottoms she has kept.
 * Cast: Ah Zhi, Factor Gang, Mother Tiao, the refinery foreman Bo, a drowning child called Nubbin.
 */
export const ferry: Arc = {
  id: "ferry",
  name: "The Ferry of Debts",
  scenes: String.raw`
=== ferry_entry | The Landing
The ferry landing is a stone jetty at the south end of the quay, where the Wall ends and the harbour mud begins. A flat black barge is tied up at the end with a mast and a lantern and a long sweep. There is a bell on a post, and a painted board, and a woman sitting on an upturned crate eating a pickled plum.
The board says: FERRY TO THE SALT WORKS. ONE COPPER. TWO IF YOU WISH TO TALK.
She is perhaps twenty-three, short, broad-shouldered, and so tanned that she looks carved from teak. She wears a man’s hat and a boatwoman’s quilted jacket and has a coil of rope slung over one shoulder as if she were never without it. Her hands are scarred in a dozen places. She spits the plum stone neatly into the water and looks up.
“Customer,” she says. “Or inspector. You look like both.”
Her eyes are the same pale grey as Madam Ash’s.
> truth | Pay the copper, and say you would like to talk. | ferry_a1s1
> force | Look at the skiff tied behind the ferry, and the man in it with a ledger. | ferry_a2s1 | needs:3
> deceit | Say you are a salt-buyer from the river, and show Hao Lan’s order. | ferry_a3s1
> mercy | Offer to help with the loading. | ferry_a4s1
> inquiry | Show her the tally-stamp on the barrel from Foreman Ba’s hut. | ferry_h1 |  | mender_found_dust | You have not seen the barrels.

// ---------------------------------------------------------------- a1: the crossing
=== ferry_a1s1 | Two Coppers
“Two,” says Ah Zhi. She takes them and bites one, a ritual she performs with every coin. “I am Ah Zhi. I am the ferry. If you want a story I will tell it for nothing. If you want to know about the Salt Works I will tell you for another copper.”
She unties the rope, and the ferry swings out.
It is a ten-minute pull across a mile of grey bay. The water is flat and heavy, and a mist is rising from it in slow ribbons. The Wall recedes behind you, a pale ridge in the dawn. Ah Zhi stands at the sweep, bracing against the current, her whole body moving with it in a long unthinking rhythm. She hums.
It is Bao Er’s tune.
“You know her,” you say.
“Three,” says Ah Zhi, without looking round. “She sings at all of ours. Mother told us you were coming.” She spits over the side. “She did not say you would pay.”
> truth | Say you are not sure what to call her. | ferry_a1s2
> inquiry | Ask which of the seven she is. | ferry_a1s2
> mercy | Offer to take the sweep. | ferry_a1s2
> quiet | Watch the water. | ferry_a1s2

=== ferry_a1s2 | One
“One,” says Ah Zhi. “The eldest. By about an hour.” She grins. “It is the only thing I have ever been first at. I could not stand the rest of them being competent, so I was loudest.”
The sweep creaks. A gull shrieks overhead.
“I was five when I got my card. It said Carry what is heavy. Mother never read it. I read it myself when I was eight. I have been carrying things ever since. Rice, rope, people. Two brothers and a sister, on my back, at the Mid-Autumn. A whole family across the bay once, in a gale, with a pig.”
She laughs. It cracks at the end.
“It does not say what to do when the thing is too heavy. It just says carry.”
You glance at her. Her shoulders are rigid under the quilting.
> truth | Ask what she is carrying now. | ferry_a1s3
> mercy | Say you are sorry. | ferry_a1s3
> inquiry | Ask who she carries for. | ferry_a1s3
> quiet | Say nothing. | ferry_a1s3

=== ferry_a1s3 | The Debt
“A boat,” says Ah Zhi. She pats the gunwale as if it were a horse. “I bought her from a factor on credit when I was eighteen. Gang. He lends to the harbour. He has the whole coast on a string.” Her voice is light. “Mother says I should not have borrowed. She says it is a leash. She would have given me the money, you understand. She would have found some way. But she has her rule.”
“Nothing offered to a child is a gift.”
“Exactly.” Ah Zhi spits. “So I took a loan. It is very free. I owe him four thousand strings, at nine in the hundred, and a few small favours.”
The mist has thickened. Ahead of you, out of the grey, a long low shape is rising from the water. It is a jetty, black and sodden, and behind it the chimneys of a works.
“Favours?” you say.
> truth | Ask what kind. | ferry_a1s4
> quiet | Look at the chimneys. | ferry_a1s4
> mercy | Ask if she wants to talk about it. | ferry_a1s4
> inquiry | Ask which chimneys. | ferry_a1s4

=== ferry_a1s4 | The Salt Works
The Salt Works is a long grey compound of drying-sheds, boiling-houses and brick chimneys, set on a spit of land at the head of the bay. Salt-pans stretch away on either side in a pale chequerboard, each shimmering, each guarded by a boy with a rake. A tall wooden gate stands open. Beside it hangs a board with the Concord’s eye.
Ah Zhi pulls the ferry alongside the jetty with a practised thump and throws a loop of rope over a bollard. She does not look at you.
“That is the pan side,” she says. “It makes honest salt. That is the other.”
She points. Beyond the pans, behind a second fence, there is a squat brick building with no windows and a single door. A line of barrels stands outside it in the sun. Men in leather aprons are rolling them toward the jetty.
“I take the barrels,” says Ah Zhi. Her voice is very flat. “Twelve a day. I sign for them. That is the favour.”
> truth | Ask what is in them. | ferry_a1s5
> quiet | Watch the men roll them. | ferry_a1s5
> mercy | Say nothing. | ferry_a1s5
> inquiry | Ask where they go. | ferry_a1s5

=== ferry_a1s5 | What She Knew
“Dust,” says Ah Zhi. She does not hesitate. “The grey stuff. It goes up the river. I have known for a year.” Her hands are loose on the rope, and for the first time you notice that they are shaking. “I asked once. Gang said it was a salt preservative. I said, I have seen a preserved fish, it does not smell like that. He said, keep to your boat.”
She meets your eyes.
“I kept to my boat. I have been keeping to my boat for a year. I tell myself that if I did not take them, someone else would. It is a very good story. I tell it to myself every night.”
She unhooks the loop.
“It is not true. I know it is not true. Someone else would take them, and they would not sign. It is the signing. It is my name.”
> truth | Tell her it takes courage to say that. | ferry_a1s6
> quiet | Wait. | ferry_a1s6
> mercy | Say that everyone has a story. | ferry_a1s6
> inquiry | Ask what she wants to do. | ferry_a1s6

=== ferry_a1s6 | What She Wanted
“I want to stop,” says Ah Zhi. “I want to say no, and I do not know how. I do not know what happens if I stop. He has the boat. He has the debt. He has my name on forty receipts.” She laughs without humour. “He could hang me with them.”
The barrels are being loaded. The first is rolled on, and the ferry dips. Ah Zhi does not look at it.
“So I carry. It is what I do. It is what the card said.”
“It said to carry what is heavy,” you say.
“Yes.”
“It did not say what.”
She turns her head. She stares at you for a long moment, with her hat pulled low and her hair blowing across her face.
“No,” she says slowly. “It did not.”
> truth | Suggest she carry something else. | ferry_a1s7
> mercy | Say there are people on this bay who need ferrying. | ferry_a1s7
> quiet | Look at the barrels. | ferry_a1s7
> inquiry | Ask what would happen if the barrels sank. | ferry_a1s7

=== ferry_a1s7 | A Dreadful Idea
Ah Zhi’s mouth opens. She closes it. Her eyes go to the barrels, to the black water between the boat and the jetty, and to the ferry’s long flat deck.
“It would be a terrible accident,” she says slowly. “The weather is turning. A heavy cargo, a swell. A boat can ship water. A boat can sink.” She turns the idea over with obvious delight. “Gang would be furious. He would be absolutely incandescent. He would want the receipts.”
“What receipts?”
“The ones in the strongbox,” says Ah Zhi, “in the stern. Which would go down with the boat.”
Her face has lit up, a grin stretching across it. She looks like a child who has been shown a trick.
“I would need to be very, very unlucky,” she says. “I am not usually unlucky. It would have to be a bad day.”
> truth | Say it sounds like a bad day. | ferry_a1s8
> quiet | Look at the weather. | ferry_a1s8
> mercy | Ask whether anyone would be hurt. | ferry_a1s8
> inquiry | Ask where she would sink it. | ferry_a1s8

=== ferry_a1s8 | The Accident
She does it at the mid-bay, in the dusk, with twelve barrels on the deck and the lights of Tidewall a mile away. She does it properly. She drops the sweep, and the ferry slews broadside to the swell. She yelps, loudly and unconvincingly. She pulls the plug in the bilge with a deft kick and lets the black water in. And she stands, at the last, calmly on the gunwale with her hat in her hand and her boots in the sea, as the barrels roll off one by one and the strongbox goes down like a stone.
“Oh dear,” she says, with great satisfaction.
You wade ashore on the mud with your arms full of her coiled rope. Behind you, the ferry settles gently on the bottom of the bay, in six feet of water, with her mast in the air and her lantern still lit.
Ah Zhi sits down on the mud and laughs until she cries.
> truth | Laugh with her. | ferry_close | +ferry_sank_barrels
> mercy | Wrap her in your cloak. | ferry_close | +ferry_sank_barrels
> quiet | Sit beside her. | ferry_close | +ferry_sank_barrels
> inquiry | Ask what she will tell Gang. | ferry_close | +ferry_sank_barrels

// ---------------------------------------------------------------- a2: the factor's ledger
=== ferry_a2s1 | The Man in the Skiff
The skiff is a smart little clinker with a green awning and a brass lantern, and in the stern of it sits a stout man in a quilted robe, with a ledger on his knee and a gold abacus on a chain. He is perhaps fifty. His face is pink and plump and shiny, the face of a man who has never missed a meal, and he is watching the ferry with the faintly proprietary look of an owner at a horse race.
“Gang,” says Ah Zhi, under her breath. “The factor. He comes every second day to count the barrels.”
Gang raises a plump hand and waves. “Morning, Zhi!” he calls. “Fine day for debt!”
He chuckles at his own wit. His abacus clicks.
Ah Zhi does not return the wave. Her jaw is set.
“I would like to hit him,” she says. “I have wanted to hit him for four years. I do not do it because he has the paper.”
> force | Say you will hit him for her. | ferry_a2s2 | needs:3
> truth | Ask what is in the ledger. | ferry_a2s2
> quiet | Watch the skiff. | ferry_a2s2
> inquiry | Ask how he keeps it. | ferry_a2s2

=== ferry_a2s2 | The Ledger
“In a lacquer box,” says Ah Zhi. “Locked. He sleeps with the key under his pillow. He takes the box to every count. He says it is the soul of the harbour.” She scoffs. “It is a list of everyone he has a hold on. Fishermen. Weavers. A priest. A magistrate’s nephew. He knows who owes what, and to whom, and why, and he uses it.”
Ren Qiao, beside you, has gone very still. “A blackmailer.”
“A banker,” says Ah Zhi. “There is not much of a difference on this coast.”
She flexes her fingers. “If someone took that ledger, a lot of people would be free overnight. If someone took that ledger and I was seen to be helping, I would be in the sea.”
She looks at you sidelong.
“I am not saying anything. I am merely observing the arrangement of the boats.”
> force | Ask Ren if he can swim. | ferry_a2s3
> truth | Say you will take the blame. | ferry_a2s3
> quiet | Study the skiff. | ferry_a2s3
> inquiry | Ask what time the count ends. | ferry_a2s3

=== ferry_a2s3 | The Plan
You make it in a quarter of an hour, on the jetty, with a stub of chalk on the planking. It is not subtle. Ah Zhi will cast off with the barrels, and let the current take her broadside to the skiff. Ren Qiao will be on the foredeck, with a boathook. You will be in the bilge, under a tarpaulin, with Gu.
“And me?” says Hao Lan.
“You stay on the quay,” says Ah Zhi. “If anything happens, you are a Censor and nobody has seen you.”
“I resent that.”
“It is the plan.”
Hao Lan looks as if she would like to protest. Then she shrugs. “Very well. But I shall write it down, so that afterwards no one can say we did not think of it.”
She produces her pencil.
> force | Take your place in the bilge. | ferry_a2s4
> truth | Say you do not like it. | ferry_a2s4
> quiet | Check the knots. | ferry_a2s4
> mercy | Ask Gu if he is all right. | ferry_a2s4 | bond:gu+1

=== ferry_a2s4 | Alongside
The ferry bumps the skiff at a gentle, accidental angle, with a thump that sends the factor’s abacus swinging. “Ah!” cries Ah Zhi, in a fine imitation of dismay. “Oh dear! My sweep! It has slipped!”
Gang is on his feet, cursing. His green awning has torn. His plump face is turning from pink to puce. “You stupid girl!” he shouts. “You stupid, clumsy—”
Ren Qiao’s boathook comes down over the gunwale and catches the strap of the lacquer box. It lifts. Gang, to his credit, is quick. He grabs the other end with both hands and wrenches. For a moment the box hangs, quivering, between the two boats.
“Thief!” screams the factor. “Guards! Thief!”
You come out from under the tarpaulin with Gu at your heels.
> force | Take the box. | ferry_a2s5
> deceit | Say you are the harbour inspector. | ferry_a2s5
> quiet | Cut the strap. | ferry_a2s5
> deceit | Shout that there is a fire. | ferry_a2s5

=== ferry_a2s5 | Tug of War
It is an absurd contest. A plump factor and a lean warden pull at either end of a lacquer box across four feet of water, both bent double, both grunting. Gang has a surprising grip. Ren Qiao is a good deal stronger, but he is balancing on a heaving gunwale. The box creaks. The strap sings. Behind them the two boats swing in the swell like drunk dancers.
Gu, shaking, takes the factor’s arm. “Please,” he says. “Please let go.”
“Never!” cries Gang. “Never! There is a fortune in this!”
“There are nine hundred people in it,” says Ah Zhi, quite calmly, “and you have no right to any of them.”
She puts one boot on the skiff’s gunwale and gives it a shove.
The skiff tips. The factor goes in with a splash like a falling wardrobe.
> force | Haul the box aboard. | ferry_a2s6 | needs:3
> truth | Throw him a rope. | ferry_a2s6
> quiet | Watch him paddle. | ferry_a2s6
> mercy | Reach down for his hand. | ferry_a2s6

=== ferry_a2s6 | The Box
Gang bobs to the surface, spluttering, his robe ballooning around him like a lily. “Villains!” he shrieks. “Murderers! I have ten thousand strings in that box!”
“You have nine hundred names,” says Ah Zhi, cheerfully. “I will let you keep the strings.”
Ren Qiao has the box. It is heavier than it looks. It is fastened with a brass clasp and a lock the size of a walnut, and when he shakes it something inside rustles, dry and thick. Hao Lan, who has been watching from the quay, comes running down to the jetty with her satchel flapping.
“Give me ten minutes,” she says. “I can open anything that has a hole in it.”
Gang is paddling for the skiff. He climbs onto the stern, dripping, and sits there glaring. His abacus hangs from his neck like a dead fish.
“This is not over,” he says.
> force | Tell him it is. | ferry_a2s7
> truth | Tell him he is free to go. | ferry_a2s7
> quiet | Say nothing. | ferry_a2s7
> mercy | Throw him a blanket. | ferry_a2s7

=== ferry_a2s7 | Open
Hao Lan opens it in nine minutes with a bone pick and a hairpin. Inside is a stack of grey cloth-bound ledgers, a bundle of receipts tied with a red cord, and a small flat lacquer tray holding a dozen tiny seals. She lifts out the top ledger and turns the pages with a practised thumb.
“There,” she says. “Ah Zhi, Ferry. Debt: four thousand and thirty strings. Collateral: the ferry. Favours: barrel-signing. Dated, witnessed, and—” she stops. “And a note.”
“What note?”
Hao Lan reads it. The colour drains from her face.
“It says: Surrender of the debtor to the Concord upon demand. Signed, Fang.”
There is a long silence. The gulls wheel. The skiff drifts.
“He sold me,” says Ah Zhi, softly. “He sold me to the Concord. As a hostage. In case you came.”
> force | Burn it. | ferry_a2s8
> truth | Say you will take her away from here. | ferry_a2s8
> quiet | Tear out the page. | ferry_a2s8
> mercy | Hold her hand. | ferry_a2s8

=== ferry_a2s8 | Nine Hundred Names
They burn the page on the jetty, in a clay pot Ah Zhi keeps for her morning tea. The smoke goes up in a thin line. The factor watches it from the skiff. His face has gone the colour of tallow.
Hao Lan copies what she can in the time they have. She works feverishly, at the end of the jetty with her pencil flying, filling twelve pages of her notebook with debts, holds, secrets, threats. At the end of it she looks up, stunned.
“It is the whole coast,” she says. “Every family. Every priest. He has been running the Concord’s hold on Tidewall for ten years.”
Ah Zhi has put her hat back on. She looks at the sea, at the pale Wall, at the black ribbon of the quay. She says very quietly, “I am going to need a new boat.”
Then she laughs, wildly, and slaps her thigh.
“I am free,” she says. “I am free, and the ferry is a wreck, and I owe nobody anything.”
> force | Grin. | ferry_close | +ferry_took_ledger needs:3
> truth | Tell her you will help her find a boat. | ferry_close | +ferry_took_ledger
> quiet | Pass her your hat. | ferry_close | +ferry_took_ledger
> mercy | Hug her. | ferry_close | +ferry_took_ledger

// ---------------------------------------------------------------- a3: forged order
=== ferry_a3s1 | A Buyer
“Salt,” says Ah Zhi, flatly. She looks at Hao Lan’s order, a stiff folded paper with a chop of the Fifth Granary. She holds it up to the light. “It is a good forgery.”
“It is not a forgery,” says Hao Lan, with dignity. “It is a regularisation.”
“It is the best one I have seen this month.” Ah Zhi hands it back. “I have no reason to like the Concord. But I have less reason to like Gang. I will take you across. You will be a buyer. You will not ask the wrong questions. You will not touch anything.”
She jerks her chin at the barge.
“Sit on the crate. Hold your nose when we pass the boiling-house. The smell is the part they do not forge.”
> deceit | Take the crate. | ferry_a3s2
> truth | Thank her. | ferry_a3s2
> quiet | Note the smell. | ferry_a3s2
> inquiry | Ask how the buyers usually behave. | ferry_a3s2

=== ferry_a3s2 | The Tour
The Salt Works is led by a smooth young man in a clean tunic who introduces himself as Under-Manager Bo. He wears a polite smile that does not reach his eyes. He leads you along a gravel path between the pans, pointing out the sluices, the rakes, the sun-baked flats. He is courteous, informative, and entirely incurious.
“The finest salt on the coast,” he says. “Pan-dried. No admixtures. We ship to the river provinces and as far as the capital.”
You nod. You do not ask about the second building.
It stands behind the boiling-houses, windowless, squat, its walls of black brick. A line of men are filing in at its door, each with a bowl and a spoon. A line of others are filing out, slowly, each wearing the same blank expression. The smell here is sweet and faint and horrible.
“Staff canteen,” says Bo, following your gaze. “Excellent soup.”
> deceit | Ask for a bowl. | ferry_a3s3
> truth | Say you would like to see it. | ferry_a3s3
> quiet | Study the men. | ferry_a3s3
> inquiry | Ask how much soup they eat. | ferry_a3s3

=== ferry_a3s3 | The Canteen
The canteen has long tables of scrubbed pine and benches of black wood. The workers sit in silence. A thin broth steams in the bowls, and each man spoons it up with the slow regularity of a clockwork toy. They do not talk. They do not look at one another. Every few minutes, a woman in an apron comes round with a ladle and tops up the bowls from a large iron kettle.
Hao Lan sits beside an old man with a face like creased leather. She says, quietly, “What is your name, grandfather?”
He stops with the spoon in the air. He looks at her. His mouth works.
“I had it this morning,” he says, in a thin cracked voice. “It was on the tip of my tongue. Something with a mountain in it.” He frowns. “I wrote it on my wrist. I do not know where it went.”
His wrist is bare. The skin is stained grey.
> mercy | Take his hand. | ferry_a3s4
> truth | Ask the ladle-woman what is in the soup. | ferry_a3s4
> quiet | Sniff the bowl. | ferry_a3s4
> inquiry | Ask how long he has worked here. | ferry_a3s4

=== ferry_a3s4 | The Soup
You sniff the broth. It smells of fish and ginger and, under them, faintly, of sweet ash. You dip a finger and touch it to your tongue. It tastes of nothing. It tastes of a great deal of nothing, a smooth cool vacuum, a hollow where something was.
You spit it out.
“It is in the soup,” you tell Hao Lan quietly. “It is in what they eat.”
Hao Lan’s face is white. She puts down her spoon. “Calm dust,” she whispers. “They are feeding it to the workers. To keep them docile.”
“Not docile,” says a voice behind you. “Forgetful.”
It is Under-Manager Bo. He has come up quietly, and he stands with his hands folded in his sleeves and his smile in place. “They forget what they have seen,” he says pleasantly. “It is for their own protection. A man cannot betray what he does not recall.”
> deceit | Smile back. | ferry_a3s5
> truth | Say it is monstrous. | ferry_a3s5
> quiet | Stand up slowly. | ferry_a3s5
> force | Throw the bowl. | ferry_a3s5

=== ferry_a3s5 | A Polite Man
“I agree,” says Bo, and the smile does not flicker. “It is monstrous. I tell myself so every night. But I have a wife, and a child, and a house with a mortgage held by Factor Gang. I have found that a clear conscience is a luxury, like a fresh egg.”
He walks along the table, dropping a hand on a worker’s shoulder as he passes. The old man doesn’t look up.
“I will not stop you leaving,” he says. “I could. I have two guards at the door. But I do not choose to. You have not seen anything, madam. You have taken a pleasant tour. You may have a bag of salt.”
He turns.
“I should like to know, though,” he says, very softly, “whether you are going to do something about it. I would like to know because I would like to be on the right side. I do not think I have the courage to choose it.”
> deceit | Say you are not. | ferry_a3s6
> truth | Say you are, and you need his help. | ferry_a3s6
> quiet | Say nothing. | ferry_a3s6
> mercy | Say you understand. | ferry_a3s6

=== ferry_a3s6 | Bo’s Offer
Bo walks you through the boiling-houses himself, past vats of seething brine, past sieves, past the squat black building. At the door he stops. He takes a ring of keys from his belt, and selects a small iron one, and holds it out.
“The storeroom,” he says. “The back door. There are sixty barrels there, sealed, ready for tomorrow’s shipment. There is also a ledger, in my hand, showing the weights. If someone were to take it, and show it to a person of influence, I should be astonished.”
He presses the key into your palm.
“I am not doing this,” he says. “You have stolen it from me. I shall be very angry. I shall make a great fuss.” His eyes are bright. “It would be a favour if you could knock me down first.”
> deceit | Knock him down. | ferry_a3s7
> truth | Refuse to harm him. | ferry_a3s7
> quiet | Take the key. | ferry_a3s7
> mercy | Thank him. | ferry_a3s7

=== ferry_a3s7 | The Storeroom
The storeroom is cold and windowless, lined with shelves of barrels, each stencilled with the Concord’s eye. The ledger sits on a lectern by the door. Hao Lan has it open before you can stop her. She runs her finger down the columns.
“Weights, destinations, dates,” she says in a hushed tone. “Kuan Landing. Green Mill. The Silk Quarter. Qinglian Ford.” She turns a page. “And here. A new column. Tidewall. Tidewall, every day, since the spring.”
“Here?”
“Not to the harbour. To the town. To a house on the hill.” She looks up. “To the Chancery. They have been dosing the town.”
Gu says in a very small voice: “Mother Tiao’s soup.”
There is a silence, as heavy as the barrels. Outside, a bell is ringing the noon.
> deceit | Take the ledger. | ferry_a3s8
> truth | Ask Hao Lan to copy it. | ferry_a3s8
> quiet | Check the barrels. | ferry_a3s8
> inquiry | Ask where the Chancery stands. | ferry_a3s8

=== ferry_a3s8 | Out Through the Back
You take the ledger. You take a barrel, too, rolled between you, which Ah Zhi stows in the bilge. You are out of the compound in eight minutes, through the black door and over the dyke, along the line of the pans, with the sun on your necks and Under-Manager Bo’s shouts echoing behind you.
He is very convincing. He cries thief, he cries villain. He orders the guards to pursue. They do, with a deplorable lack of enthusiasm. One of them trips over a rake. Another stops to light his pipe.
At the jetty, Ah Zhi has the ferry cast off and the sweep in her hands. She takes one look at your faces, and the barrel, and the ledger.
“Brilliant,” she says. “Now get in, before I lose my nerve.”
> deceit | Jump aboard. | ferry_close | +ferry_robbed_works
> truth | Pull Gu in first. | ferry_close | +ferry_robbed_works
> quiet | Look back at the works. | ferry_close | +ferry_robbed_works
> mercy | Wave to Bo. | ferry_close | +ferry_robbed_works

// ---------------------------------------------------------------- a4: carrying
=== ferry_a4s1 | Loading
“Do you know what you are doing?” says Ah Zhi, regarding your offered hands with suspicion. She looks you up and down and sniffs. “You look like a scholar. You are soft.”
“I carried water in the sect for years,” you say.
“Did you? Then you can carry that.” She jerks her chin at a pile of sacks on the jetty. “Rice. For the Works. They pay me by the sack. Eight to a trip. Mind your back.”
You pick up the first. It is a hundred and twenty catties of grain in a coarse hemp bag, and it sits across your shoulders like an ox. You carry it down the jetty, up the plank, and put it on the deck with a thud.
“Good,” says Ah Zhi grudgingly. “Seven more.”
Gu has taken a sack of his own. He is grim and shaking. He does not put it down.
> mercy | Go back for another. | ferry_a4s2
> truth | Tell Gu he does not have to. | ferry_a4s2
> quiet | Keep going. | ferry_a4s2
> inquiry | Ask how many trips she makes. | ferry_a4s2

=== ferry_a4s2 | A Day of Loads
By noon your shoulders are raw. By two, you have stopped feeling them. You carry rice, rope, a crate of live chickens, a woman’s washing, a coffin. You carry an old fisherman who cannot walk, who sits on the deck in his oilskins singing sea-shanties through his gums. You carry two small boys who want to be pirates. You carry a priest and his harp. Ah Zhi works the sweep, and talks, and spits, and does not rest.
“How do you do it?” you ask, between trips.
“You stop thinking about weight,” she says. “You think about direction. Heavy is only a thing you notice when you stop.”
A gust catches the sail. The barge heels.
“Look at that,” says Ah Zhi, squinting at the sky. “A squall coming. I told them. I said to the whole quay, there will be weather.”
> mercy | Look at the horizon. | ferry_a4s3
> truth | Ask if you should turn back. | ferry_a4s3
> quiet | Brace yourself. | ferry_a4s3
> inquiry | Ask how far to the next landing. | ferry_a4s3

=== ferry_a4s3 | The Squall
It comes out of the south-west in a low black bar, and in minutes the bay has changed. The grey water turns white-capped. The wind screams in the rigging. The barge, which was riding level, begins to pitch. A wave slaps the bow and sends spray over the deck in a sheet.
“Everyone down!” shouts Ah Zhi. “Get the load amidships! Hold on to something!”
Gu is holding the mast. The priest is clutching his harp. The two little pirates have gone white with fear. The old fisherman sings louder.
A rope snaps with a crack like a whip. A crate of chickens slides across the deck, and one end goes over the side. Ah Zhi lunges for the tiller, spits a curse, hauls the sweep with every ounce of her strength.
“The load’s shifting!” she cries. “Someone grab it!”
> mercy | Throw yourself on the crate. | ferry_a4s4 | npc:SU_FERRY_SQUALL
> truth | Take the sweep with her. | ferry_a4s4
> quiet | Help the children below. | ferry_a4s4
> force | Cut the broken rope loose. | ferry_a4s4

=== ferry_a4s4 | Nubbin
A cry from the water, thin and high. A small head bobs in the white. It is one of the two boys, the smaller, who was swept over in the lurch and is thrashing in the swell. His brother screams his name. Nubbin. Nubbin.
Ah Zhi does not hesitate. She flings the tiller to you. “Hold her steady!” she shouts. “Into the wind! Whatever you do, do not let her broach!” Then she is over the side, rope in her hand, into the heave of the bay.
You have never steered anything bigger than a bucket. The tiller kicks like a mule. The barge swings. A wave comes over the bow and half drowns you. You hold on.
“Left,” gasps the priest, beside you. “Left!”
You lean on the tiller with all your weight.
> mercy | Steer. | ferry_a4s5
> truth | Shout encouragement. | ferry_a4s5
> quiet | Pray. | ferry_a4s5
> inquiry | Ask the priest what to do. | ferry_a4s5

=== ferry_a4s5 | Hauled In
She has him. You can see her in the trough of a swell, a small dark shape with an arm round a smaller, her hat gone, her mouth open, her face a mask of fury and joy. The rope runs back to the barge and Gu, bracing his feet on the planking, is hauling it in hand over hand, with the strength of a boy who has discovered he has some.
“Pull!” shouts Ren Qiao. “Pull!”
They come in on the swell, the girl and the child, and a dozen hands reach over the gunwale. Nubbin is hauled aboard in a rush of water and flung onto the deck like a landed fish. He coughs. He vomits. He starts to wail.
Ah Zhi comes up last, streaming, on the end of the rope. She flops over the rail and lies there with her chest heaving.
“Carry,” she gasps. “Carry what is heavy. That is the whole of it. I could do that.”
> mercy | Help her up. | ferry_a4s6
> truth | Tell her she was magnificent. | ferry_a4s6
> quiet | Hand her your cloak. | ferry_a4s6
> inquiry | Ask if she is hurt. | ferry_a4s6

=== ferry_a4s6 | After
The squall passes as suddenly as it came. The bay settles, grey and sulky. The barge rides low in the water with all her passengers wrapped in blankets. The old fisherman has stopped singing. Nubbin has been given a pickled plum and a spoonful of rice wine, and sits beside his brother wrapped in the priest’s cloak, asking if he is a pirate now.
Ah Zhi sits on a crate with her hat in her lap, wringing out her hair. She is shivering, and grinning, and her eyes keep wandering to the child.
“I am not a hero,” she says to you. “I am a boatwoman. It is what we do. If you drop a child, you pick it up.”
“It is what the card said.”
“Perhaps.” She shrugs. “But I never thought it meant this. I thought it meant a burden. A weight on my back. I never thought it was something you could choose.”
> mercy | Say that is the difference. | ferry_a4s7
> truth | Say she chose it today. | ferry_a4s7
> quiet | Nod. | ferry_a4s7
> inquiry | Ask what she will choose tomorrow. | ferry_a4s7

=== ferry_a4s7 | The Barrels
“The barrels,” says Ah Zhi.
It is dusk. The barge has been tied up at the jetty, and the passengers have gone, and the old fisherman has been carried ashore by the priest. You are sitting on the deck among the empty sacks. Ah Zhi is mending a rope by lamplight. She does not look up.
“Twelve a day. I have signed for them for a year, for Factor Gang, who holds my boat. I told myself it was the price. That is a thing you say when you are carrying the wrong cargo.”
She ties a knot, tests it, ties another.
“I would like to stop,” she says. “I would like to be the kind of person who can say no. I did not know there was a difference between carrying and being carried.”
She meets your eyes.
“Tomorrow,” she says, “when Gang’s skiff comes for the count, I am going to give him a barrel. I am going to give him one, and he is going to open it.”
> mercy | Ask what is in it. | ferry_a4s8
> truth | Say you will be there. | ferry_a4s8
> quiet | Smile. | ferry_a4s8
> inquiry | Ask how she will keep from being sold. | ferry_a4s8

=== ferry_a4s8 | A Barrel of Sand
It is a barrel of sand. Ah Zhi fills it herself, at dawn, from the beach, with a shovel and her bare hands. She hammers the lid shut. She carries it to the jetty on her back, bent double, and sets it down at the foot of the plank.
When the factor’s skiff comes, she is whistling. She hands him the receipt. She smiles at him with every tooth.
“Count it,” she says. “Count all twelve. I have taken extra care.”
Gang rubs his hands. He takes up his abacus. He lifts the lid of the first barrel, and a cloud of grey sand puffs out.
For a moment nobody speaks.
Then Ah Zhi says, in a ringing voice, so that the whole quay can hear: “I am done carrying for you, Factor Gang. I am carrying for myself.”
She tosses her hat in the air.
> mercy | Applaud. | ferry_close | +ferry_carried_sand
> truth | Stand beside her. | ferry_close | +ferry_carried_sand
> quiet | Watch his face. | ferry_close | +ferry_carried_sand
> inquiry | Ask whether the factor can sell her now. | ferry_close | +ferry_carried_sand

// ---------------------------------------------------------------- hidden: the barrel-bottoms
=== ferry_h1 | The Stamp
You show her the stamp. It is a rough square cut from the lid of the barrel in Foreman Ba’s hut: the closed eye and the word Tidewall. Ah Zhi looks at it as she might look at her own reflection in a puddle.
“Where did you get that?” she says quietly.
“From the mill. From Foreman Ba. He did not remember who signs for them.”
“I do.” She lets out a long breath. “That is my chop, there, on the corner. I have a stamp of my own. Nobody else on the coast has one. It is how I mark a barrel received.” She puts a finger on the stamp, over the mark. “I have signed eleven thousand of these. I have not been able to look at one in a year.”
She goes into the cabin. When she comes out she has a wooden box in her arms, black with age, with an iron hasp.
> inquiry | Ask what is in it. | ferry_h2
> truth | Say you are sorry. | ferry_h2
> mercy | Offer to carry it. | ferry_h2
> quiet | Wait. | ferry_h2

=== ferry_h2 | The Bottoms
The box is full of wood. Flat discs of oak, each the size of a saucer, each bearing a faint ring of char. They are the bottoms of barrels, hundreds of them, stacked like coins. Ah Zhi sets the box on the deck and opens the hasp.
“I keep one from each delivery,” she says. “I do not know why. I think I thought, someday, someone will want to know.” She takes the top one and turns it over. “Look.”
On the underside of the disc, scratched with a nail in a hand like a spider’s, are three words. I remember. Beneath them, a single initial.
V.
“Every barrel,” says Ah Zhi. “Every single one for eleven months. Somebody at the Works scratches that on the bottom before it is sealed. I have never found out who. I have been waiting to meet the person who wrote this to see if I could look them in the face.”
> inquiry | Pick up a disc. | ferry_h3
> truth | Say you think you know who. | ferry_h3
> mercy | Touch her hand. | ferry_h3
> quiet | Read them one by one. | ferry_h3

=== ferry_h3 | I Remember
You read them all. It takes two hours. Ah Zhi sits on the deck beside you, handing them over one at a time, and you read each message aloud. They are not all the same. They change with the months. I remember. I remember my mother. I remember the lamp. I remember Ling. I remember the cots. I remember the fire. In the last month, they are longer: I remember what they did to us. I remember what you owe.
The last disc says only: Please.
Ah Zhi has her face in her hands.
“I thought it was a prisoner,” she says. “Some poor devil in the boiling-house, scratching a message. I thought, if I take it away, he will have been heard, at least. I thought I could be the person who heard.”
She looks up. Her face is raw.
“I never wondered if it was a sister.”
You do not have to say anything. You open your hand, and she puts the disc in it.
> inquiry | Tell her it is Shu Ning. | ferry_close | +ferry_read_bottoms
> truth | Say you will find her. | ferry_close | +ferry_read_bottoms
> mercy | Close her fingers over the disc. | ferry_close | +ferry_read_bottoms
> quiet | Say nothing, and keep the disc. | ferry_close | +ferry_read_bottoms

// ---------------------------------------------------------------- close
=== ferry_close | The Eldest
The ferry is tied up at the jetty in the evening light. The bay is calm. The tide is coming in over the harbour mud, and Tidewall is a white scatter of roofs under a darkening sky. Ah Zhi sits on the foredeck with her boots dangling over the water and a pickled plum in her fist.
+[how] ferry_sank_barrels | The ferry lies in six feet of water off the Wall, mast up, lantern lit. Twelve barrels of dust went down with her.
+[how] ferry_took_ledger | Factor Gang’s lacquer box is in Hao Lan’s satchel, and the whole coast’s debts are in her notebook.
+[how] ferry_robbed_works | Under-Manager Bo’s ledger is in your pack, and a barrel of dust rides in the ferry’s bilge.
+[how] ferry_carried_sand | Factor Gang opened a barrel of sand in front of the whole quay.
+[how] ferry_read_bottoms | A box of barrel-bottoms lies on the deck, each with a message in a spider’s hand.
She turns and looks at you. She is not smiling.
“Mother told us you were coming,” she says. “She told us you were the one who would break the rule. I did not believe her. I thought she was being poetic.”
She holds out a hand. In it is a brown card.
> truth | Take it. | ferry_close2 | +card_1
> mercy | Say you cannot take another’s card. | ferry_close2 | +card_1
> quiet | Bow your head. | ferry_close2 | +card_1
> inquiry | Ask why she is giving it to you. | ferry_close2 | +card_1

=== ferry_close2 | Carry What Is Heavy
“Because I have finished carrying,” says Ah Zhi. “I think. For now. I mean the other kind.” She shrugs her broad shoulders, and they come down, a hair’s breadth, from where they have been all her life. “I do not know what it is for. But it says carry what is heavy, and I have just spent two days learning that heavy is a thing you choose.”
She presses the card into your hand.
“You will want it,” she says. “For whatever comes. I do not think it is mine to keep.”
It is soft as cloth. On the front, a numeral: I. On the back, in a faded hand, the line you know. You hold it for a moment against the card marked IX. They fit. You can feel it: a small, strange snick, like a key in a lock.
“Come back and see me,” says Ah Zhi. “When you have found the rest. I will have a new boat by then. She will be called the Debt Paid.”
> truth | Promise. | hub_b3_coast | +b3q_ferry bond:ahzhi+3
> mercy | Hug her. | hub_b3_coast | +b3q_ferry bond:ahzhi+3
> quiet | Tuck the cards away. | hub_b3_coast | +b3q_ferry bond:ahzhi+3
> inquiry | Ask where Shu Ning is. | hub_b3_coast | +b3q_ferry bond:ahzhi+3
`,
  scenarios: String.raw`
$ SU_FERRY_SQUALL | trust+3 respect+3 fear-1 | elder | The Elder hears how Ah Zhi went over the side for a drowning child.
hostile: You were in the boat when the child fell. I noticed that you were not the one who went in. I do not say that as a reproach. I say it because I am trying to learn what I would have done.
wary: She jumped. She did not think. I should like to have been that sort of person. I was the sort who writes the memorandum afterwards.
neutral: When I was Registrar I was taught that a rescue is a reallocation of risk. I find I have no further use for the phrase.
warm: One. The eldest, by an hour. I held her once, in the dormitory, when she was four, and she bit me. I have never been so pleased by a bite.
devoted: I should like to meet her, when it is time. I should like to apologise. I shall probably fail. I shall probably say something about weather. But I should like to be there when she laughs.
`,
  remarks: String.raw`
% ferry_zhi_later | since:b3q_ferry>=3 | duan | A ferry sank off Tidewall last week, with remarkably few casualties and a good deal of paperwork. I have read the report. It is the most cheerful incident report I have seen in thirty years.
% ferry_gang_later | since:ferry_took_ledger>=8 | hao | The ledger has more names in it than I can copy. I have found Mother Tiao, and Auntie Pan, and a priest. I keep thinking: they owe him nothing, and they will never know it. It is the most beautiful thing I have ever stolen.
`,
};
