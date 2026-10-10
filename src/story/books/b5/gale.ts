import type { Arc } from "../types";

/**
 * Book Five, arc five: the Glass Gale. Once a season the wind off the northern dunes scours the Sea's old plates into splinters
 * and drives them across the plain in a wall of whirling shards. Four approaches: read the wind honestly and sail into its eye
 * (a1, truth), drive straight through the front on storm canvas (a2, force), send a lit decoy skiff downwind to draw it off (a3,
 * deceit), and shelter a pilgrim caravan under overturned hulls (a4, mercy). A hidden route cancels the shard-storm with the broken
 * bell. Cast: Yue Zhaoning, Odval, Temur, Ren Qiao, Hanming, Gu, the pilgrim midwife Sun Mei, the Elder.
 */
export const gale: Arc = {
  id: "gale",
  name: "The Glass Gale",
  scenes: String.raw`
=== gale_entry | A Black Wall
It comes up out of the north at noon: a long low bruise on the horizon, darker than a cloud, with a hard, level top. Odval sees it first. She is at the bow of Light, shading her eyes, and she does not speak until it has doubled in size.
“That is not weather,” she says.
Yue Zhaoning has her goggles down. She has put away her pipe. “Glass-gale,” she says. “Once a season. The wind comes off the dune-fields and takes the top off the plates.” She spits over the side. “It fills the air with splinters.”
“How big?”
“From here to the sky.” She hauls on the tiller. “And fast. Thirty miles an hour at the front. You can’t outrun it. You can’t outsail it. If it catches us in the open, the hulls will be flayed.”
“What do we do?”
“Choose,” says Yue. “That’s the whole of seamanship.” She grins, unamused. “There are four ways to meet a gale. All of them are bad.”
The wall is no longer a bruise. It is a cliff, advancing, with a thin high screaming along its face.
> truth | Ask Odval what the wind is saying. | gale_a1s1
> force | Shorten sail and run for the front. | gale_a2s1
> deceit | Look at the cargo, and at the spare skiff towed astern. | gale_a3s1
> mercy | Notice a train of pilgrims on the plain ahead, directly in its path. | gale_a4s1
> inquiry | Unwrap the cold steel shard from the cart. | gale_h1 |  | mill_note | The shard is only a piece of metal to you.

// ---------------------------------------------------------------- a1: reading the wind
=== gale_a1s1 | What the Wind Says
Odval kneels on the deck of Light with her palms flat on the planks and her eyes shut. Her black hair lashes about her face. She does not seem to notice. The sail booms. The wall behind you is a mile off, a thousand feet high, and the screaming along its face is a note you can feel in your molars.
“It is not angry,” she says.
“Odval.”
“I am telling you what it says.” Her voice is calm. “It is hungry. It is very old. It has done this every autumn for six thousand years. It does not know there are people.”
“Can it be avoided?”
“Not by running.” She opens her pale eyes. “It has an eye. A place in the middle where the air is still. A mile wide, perhaps. It moves, but slowly.” She points. “There. To the left of the dark. You see how the dust circles?”
You see it. A faint grey funnel, standing apart, spinning slowly on the plain.
“If we reach the eye before the front,” says Odval, “we sit it out.”
“And if we don’t?”
“Then we learn how to be flayed.”
> truth | Tell Yue. | gale_a1s2 | npc:SU_GALE_STORM
> mercy | Hold Odval’s hand. | gale_a1s2
> quiet | Look at the funnel. | gale_a1s2
> inquiry | Ask how far. | gale_a1s2

=== gale_a1s2 | A Course
“Two miles,” says Odval. “Slightly north of east. But it drifts. Every half hour I will tell you where.” She wipes her nose. “I must keep my hands on the glass.”
Yue Zhaoning looks at the funnel, and at the wall, and at the mast. She is thinking in her smuggler’s way, with her tongue in her cheek. “Two miles at what speed?”
“We make eight knots on a beam reach. The gale makes twenty.”
“So it catches us in seven minutes.”
“Eleven.” Odval does the sum with her lips. “If we hold the line.”
“Then we don’t have time to be gentle.” Yue raises her voice. “All hands! We go for the eye! Trim hard! Hao Lan, take the sheet! Gu, the halyard! Duan—” She pauses. “Duan, sit down and hold on to something.”
“I would prefer to be useful,” says Duan Wuyi, white-faced.
“Then hold on to something *usefully*.”
The skiffs heel. The runners scream. Behind you the wall is closing, with a long, deep, roaring crackle like a forest in flame.
> truth | Take a line. | gale_a1s3
> mercy | Steady the Elder. | gale_a1s3
> quiet | Watch Odval. | gale_a1s3
> inquiry | Ask Yue her odds. | gale_a1s3

=== gale_a1s3 | The Front Arrives
It hits at the seven-minute mark. You hear it before you feel it. A noise like ten thousand tiny bells, and then a flicker of light on the stern-rail as the first splinters whistle past. A needle of green glass buries itself in the mast above your head and quivers. Then another. Then a hundred.
“Down!” screams Yue.
You throw yourself flat. The deck shakes. The sail tears with a bang like a gunshot, and a bright rain of cut canvas whips overhead. Odval’s voice rises, thin and high, from the bow: “*Left! Left! Left!*”
Yue hauls the tiller. The skiff slews. A sheet of glass-dust slams across the stern, a pale curtain, and you taste grit and iron and blood.
When you lift your head, the world has gone white. You cannot see the mast. You cannot see your hand. Only a roaring, and the flash of splinters, and Odval’s voice, calling the turns.
You crawl toward it, along the deck, on your elbows.
> truth | Reach her. | gale_a1s4
> mercy | Cover your face. | gale_a1s4
> quiet | Shut your eyes. | gale_a1s4
> inquiry | Shout to Yue. | gale_a1s4

=== gale_a1s4 | Odval Steers
She is on her knees at the bow with both palms pressed to the glass. A splinter has opened her cheek; the blood runs down in a bright line. She does not feel it. Her eyes are open, wide and white and unseeing, and she is speaking in a rapid rhythmic murmur, like a priestess at a rite.
“Right. Right. Hold. Hold. A crack ahead. Left. Now.”
“What is she doing?” shouts Temur, in your ear.
“She’s feeling the plates!”
“How?”
“I don’t know!” You haul at the line. “She says it hums!”
It does. You can feel it too, now, through the planks: a faint pulse in the glass, a long slow beat. It changes as you move. Where the plates lie flat, the beat is steady. Where they are cracked, it stutters.
Odval is reading the Sea. She is reading it with her hands, like a blind woman reading a face. She sees the eye.
“Straight,” she cries. “Straight on. Don’t turn. It’s there. It’s *there.*”
Yue throws the tiller amidships. The skiff steadies, and plunges.
> truth | Hold the line. | gale_a1s5
> mercy | Hold Odval. | gale_a1s5
> quiet | Stay down. | gale_a1s5
> inquiry | Look ahead. | gale_a1s5

=== gale_a1s5 | The Eye
You break out of it all at once. One moment you are in a screaming white tunnel; the next the skiff is skidding across a floor of silent glass, with the sail hanging in rags, in a great round room of stillness. The sun is overhead. The sky is a perfect blue circle, rimmed by a towering ring of whirling grey. The gale goes round and round them in a roaring wall, like water round a drain.
It is utterly quiet. You can hear your own breath.
Yue brings the skiff to a halt. She leaves the tiller. She leans against the mast and slides down it, slowly, until she is sitting on the deck with her knees up.
“Ha,” she says.
The other two skiffs come in behind you, one after the other, out of the white. They are battered. One has lost a runner. Another has a gash across the bow. But they are afloat, and the crews are alive, and Ren Qiao, in the stern of Return, is shouting something unprintable at the sky.
Odval has collapsed. She lies on the deck with her cheek on the glass, quite still, smiling.
> truth | Go to her. | gale_a1s6
> mercy | Pick her up. | gale_a1s6
> quiet | Check the mast. | gale_a1s6
> inquiry | Ask Yue how long. | gale_a1s6

=== gale_a1s6 | Ninety Minutes
“Ninety,” says Yue, flat on her back. “Ninety minutes. It moves a mile every ten. We’ll be in the eye until it reaches the edge of the plate, and then the wall comes back.” “That’s enough to patch the sails.”
“And the runner?”
“We’ll splint it.” She sits up. “Temur! Rope!”
 You work in the round blue light, in absolute silence, surrounded by the roar of the whirling grey wall, as if you had set up shop in a bell. Hanming and Gu rig a spare spar. Hao Lan, in the shadow of the mast, sews a patch of spare canvas with a needle as long as her hand.
The Elder sits on the deck with Odval’s head in her lap. She has found a cloth and a flask of water. She is dabbing at the seer’s cheek with a face of fierce concentration.
“You’re very good at this,” says Odval, hoarsely.
“I have never done it before.”
“It’s good anyway.”
“Yes.” The Elder’s mouth twitches. “I find I have more aptitude for tending than for sentencing. I wonder that I did not notice sooner.”
> truth | Smile. | gale_a1s7
> mercy | Fetch more water. | gale_a1s7
> quiet | Hold the lantern. | gale_a1s7
> inquiry | Ask Odval how she did it. | gale_a1s7

=== gale_a1s7 | How She Did It
“I listened,” says Odval. She is propped against the mast with her eyes half shut. “That is all it is.” Her voice is thick. “Everything has a hum. A plate. A person. A storm. If you can hear the hum, you know where it ends.”
“Everything?”
“Everything that’s true.” She frowns. “The false ones are silent. A plate that has been mended. A person who is lying. A storm that’s only wind.” She presses the heel of her hand to her temple. “They don’t sing.”
“And this one sang?”
“It sang the whole way.” She smiles faintly. “It sang like a choir. It was lovely. I wanted to sit in the middle of it and listen for ever.”
“You nearly did.”
“Aye.” She opens her eyes. “That’s the danger. You hear it so well you forget you’re in it.”
She looks at you. In the blue stillness her pale gaze is very clear.
“Thank you for not letting me,” she says.
> truth | Nod. | gale_a1s8
> mercy | Hold her hand. | gale_a1s8
> quiet | Wait. | gale_a1s8
> inquiry | Ask how you did. | gale_a1s8

=== gale_a1s8 | Out the Other Side
The wall draws in at the end of the ninety minutes. You hear it before you see it: the roar rising in pitch, the circle of blue shrinking, the ring of grey growing darker and darker. Yue stands at the tiller. Odval, wan and bandaged, is at the bow with her palms on the deck.
“The back,” she says. “It will be thinner. Go straight through.”
“How thin?”
“A quarter of an hour. Then there’s a clear mile.”
“And after that?”
“Sky.” She grins, drawn. “Blue sky. I can hear it.”
You hit the back wall at full speed. It is a hundred times kinder than the front. The splinters are fine, fine as sand, hissing past in a long sibilant sheet. You crouch behind the splinted mast with the Elder’s arm round your shoulders. The skiff leaps. The runners howl.
And then, quite suddenly, you burst out into the light.
It is dazzling. The sea is flat and still. The sun is on your face. Behind you the gale is a vast grey cliff going away to the south, with a silence round its edges like the quiet after a bell.
> truth | Breathe. | gale_a1s9
> mercy | Cheer. | gale_a1s9
> quiet | Look back. | gale_a1s9
> inquiry | Check the others. | gale_a1s9

=== gale_a1s9 | All Hands
You count them at sundown. Light has lost a mast-head. Return has a cracked runner. Sail has a hole the size of a dinner plate. All three are afloat. All nine of you are alive.
It is a joyous evening. You sit in a ring on the glass, in the light of a small fire, eating dried curd and drinking Gu’s terrible tea, and tell one another stories of the gale. Each is different. Each is better than the last. Ren Qiao claims to have wrestled a splinter the size of a plank. Hanming insists he saw a camel fly. Temur, who was sick the whole time, is honoured as the bravest.
Odval sits at the edge of the circle with a blanket round her shoulders. Her face is still bandaged. Everybody keeps looking at her, and looking away.
“Don’t,” she says at last.
“Don’t what?”
“Make me a hero.” She scowls. “I only did what I was born for. It’s no more admirable than a dog that’s good at smelling.”
“It’s very admirable,” says Hao Lan.
“It’s *convenient*,” says Odval. But she is smiling.
> truth | Raise a cup. | gale_close | +gale_read
> mercy | Pass her tea. | gale_close | +gale_read
> quiet | Look at the stars. | gale_close | +gale_read
> inquiry | Ask Temur about the flying camel. | gale_close | +gale_read

// ---------------------------------------------------------------- a2: through the front
=== gale_a2s1 | Storm Canvas
“Reef!” bellows Yue. “All the way! Reef down to the cross-spar! Storm canvas on the main! I want nothing flying but a handkerchief!”
It takes four minutes. You haul down the great sail in a flurry of rope and curses, and bend on a patch of heavy, stiff, tar-black canvas no bigger than a bed-sheet. Ren Qiao is lashing the boom. Hanming and Gu have the runners checked. The wall is a mile off, a mile and a half, closing.
“We’re going *toward* it?” shouts Hao Lan.
“We’re going *through* it!” Yue is grinning like a wolf. “It’s thirty yards thick at the edge. If we hit it at speed, with the wind behind us, we’ll be through before it knows!”
“And if we don’t?”
“Then we’ll be fish-scales!”
The Elder has tied herself to the mast with a length of line. Her face is the colour of paper. She is gripping the rope with both hands, and her lips are moving. You catch the words.
She is reciting a statute.
> force | Hold on. | gale_a2s2
> truth | Say a word to the Elder. | gale_a2s2
> quiet | Check the lashings. | gale_a2s2
> inquiry | Ask which statute. | gale_a2s2

=== gale_a2s2 | The Statute
“The Law of Maritime Salvage,” says the Elder, between her teeth, when you crouch beside her. “Article nine. A vessel in extremity may be abandoned without penalty by any person aboard.” She swallows. “It is the one I learned first.”
“Do you want to abandon?”
“There is nowhere to abandon *to*.”
“Then why?”
“It is soothing.” Her eyes are tight shut. “It is full of subordinate clauses. One can hold on to them.”
You put your arm round her shoulders. She is rigid. “Say another.”
“Article ten. The master of a vessel in extremity shall be answerable only to the... only to... ” She breaks off. “I cannot remember article ten.”
“Make one up.”
Her eyes open. “I beg your pardon?”
“Invent one. Say what you wish it said.”
The Elder draws in a shaky breath. “Article ten,” she says. “A vessel in extremity shall be held in the hands of those aboard her, who shall each be answerable only to the others, and to the wind.”
“Good.”
“It is not law.”
“It is excellent,” you say. “Say it again.”
> force | Hold her. | gale_a2s3
> truth | Say it with her. | gale_a2s3
> quiet | Listen. | gale_a2s3
> inquiry | Ask for article eleven. | gale_a2s3

=== gale_a2s3 | Through
The wall comes down on you like a hammer. For one instant the world is a screaming white tunnel, the mast whines like a cello string, and the storm-canvas booms; the skiff slams forward like a thrown stone. You see Yue’s face at the tiller, teeth bared, goggles spattered with grit. You see Ren Qiao on the boom, hanging by one arm.
Glass whips past your ear. It parts your hair. It slits your sleeve. A shard the size of your finger lodges in the deck between your boots and stands there, quivering.
“Down!” screams Hao Lan.
You duck. Something large and heavy strikes the mast and shears off the cross-spar. The storm canvas flaps once, ragged, and goes.
“Cut it!” bellows Yue. “Cut the sheet!”
Gu has a knife. He slashes the line. The ruin of the sail flies away downwind like a black bat.
The skiff, without canvas, should slow. It doesn’t. It is going on the wind alone, in a dead run, driven by the gale itself, like a leaf in a millrace. The runners shriek. The plates blur.
> force | Brace. | gale_a2s4
> truth | Look up. | gale_a2s4
> quiet | Shut your eyes. | gale_a2s4
> inquiry | Shout to Yue. | gale_a2s4

=== gale_a2s4 | A Runner Goes
It happens on the second minute. The starboard runner, which has carried all the weight of the turn, begins to hum. Then sing. A crack runs along it with a sound like a bone breaking. The whole skiff lurches to the left. It goes up on one runner, canting, and the world tilts.
“We’re going over!” shrieks Hao Lan.
“Weight to the high side!”
You throw yourselves across the deck. Ren Qiao, Gu, Hanming, Temur: five of you, in a heap on the windward rail, clinging to ropes. The skiff drops back with a crash. It slews. The spray of glass-dust fans out behind like a rooster-tail.
“We’ve lost the steering!” yells Yue. “The runner’s gone!”
“Can we stop?”
“We’re in a gale on a plate of glass at forty miles an hour! Stop?” Her voice is half a laugh. “We can’t even slow down!”
Ahead of you, through the white, a dark shape looms. It is a ridge of broken glass, a wall of upturned plates, tilted up like a cliff, directly in your path.
“Left!” shouts Odval, from somewhere. “Left! Left!”
> force | Haul left. | gale_a2s5
> truth | Warn the others. | gale_a2s5
> quiet | Brace for impact. | gale_a2s5
> inquiry | Look for a way round. | gale_a2s5

=== gale_a2s5 | The Ridge
There is no way round it. It runs left and right as far as you can see, a jagged line of glass, twenty feet high. Yue wrenches the tiller. The skiff slews broadside. For an instant you are sliding sideways down the face of the wind, at the speed of a galloping horse, with the cliff rushing up.
“Jump!” bellows Ren Qiao.
You jump. All of you, in a single leap, off the deck and onto the glass, rolling. You hit the plain with a crack that drives the wind from your lungs. You slide forty feet on your back. You come up against the ridge with your arms over your head.
The skiff does not stop. It goes up the face of the ridge, runners screaming, and launches itself over the crest. For an instant it hangs there against the grey, black and beautiful, with its torn mast and trailing ropes, like a ship sailing the sky.
It vanishes.
 Then, from the far side, a crash.
Yue Zhaoning is flat on her face in the splinters. She is laughing.
“Light,” she wheezes. “Gerel’s Light. Oh, she’ll *kill* me.”
> force | Help her up. | gale_a2s6
> truth | Check the others. | gale_a2s6
> quiet | Take cover. | gale_a2s6
> inquiry | Ask where the others are. | gale_a2s6

=== gale_a2s6 | The Lee of the Ridge
You huddle in the shelter of the broken plates. It is not much of a shelter; the glass rings and sings and flings splinters in all directions. But the lee of the ridge is a pocket in the wind, a hollow six feet deep, and nine of you can lie there, packed together like herring, with your coats over your heads. The wall roars past a hand’s breadth above.
It is the longest hour of your life. You find, to your relief, that all of them are there: Ren Qiao, with a gash in his scalp; Gu, with a split lip; Hanming, with his arm round his brother; Hao Lan, sheltering her notebook under her coat. The Elder lies with her hand clamped in yours. She does not speak. She does not need to.
At the end of the first hour, Temur says in a muffled voice: “I’ve found the other skiffs.”
“Where?”
“They’re in the lee. Further down.” He wriggles. “They came in on their own. They all hit the ridge at once, and stuck.”
“How?”
“Wedged.” He sounds awed. “They’re *jammed*. Three skiffs, nose to nose, in a notch. They’re fine.”
> force | Laugh. | gale_a2s7
> truth | Say a prayer. | gale_a2s7
> quiet | Hold still. | gale_a2s7
> inquiry | Ask about Light. | gale_a2s7

=== gale_a2s7 | Light
She has been through the air and into a drift of broken plates on the far side of the ridge, and she lies on her side with her mast snapped, her sail in ribbons and one runner pointing at the sky.
Yue Zhaoning kneels beside her in the lull after the gale. She is covered in glass-dust from head to foot. She rests a hand on the black hull, flat, and says nothing for a long time.
“I could mend her,” she says at last. “In a week. With a Wright.”
“We don’t have a week.”
“No.” She wipes her face. “I know.” She lays her forehead against the planks. “Gerel. I’m so sorry.”
Ren Qiao has come up beside her. He does not speak. He puts a heavy hand on her shoulder.
“She did what she was made for,” he says. “She went through the front.”
“She’d have gone through the eye.”
“She’d have gone through anything you asked.” His voice is gruff. “That’s the thing about a good hull. She doesn’t ask why.”
Yue nods. She sits up. She takes a deep, ragged breath.
“Right,” she says. “Salvage.”
> force | Help her. | gale_a2s8
> truth | Say a few words. | gale_a2s8
> quiet | Fetch the tools. | gale_a2s8
> inquiry | Ask what is left. | gale_a2s8

=== gale_a2s8 | Strip and Splice
You lose the afternoon to it. The mast and boom of Light are beyond saving, but her hull is sound. The runners can be spliced with strips from the other skiffs. The sail is rags, but two of the spare sails are undamaged. You take the fittings off her, one by one. At each fitting Yue says something short in Steppe-tongue, in a low voice.
“What is it?” you ask Odval.
“A prayer. For the hull.” She shrugs. “It’s one that the Wrights say when they cannibalise a boat. It says: *what you were, you are, in the next.*”
“That’s lovely.”
“It’s very practical. Wrights are.” She sits back on her heels. “It means the hull is never dead. It just becomes other boats.”
At sunset you stand around the hulk with your hats off. Hanming ties a ribbon on the broken mast. Gu puts a stub of candle on the deck. The Elder says, in her dry exact voice: “Light. Constructed by Ochirgerel. Lost in the Glass Gale, in the service of the Ninth. She is entered in the register.”
She writes it. It is the first time she has ever registered a boat.
> force | Salute. | gale_a2s9
> truth | Bow. | gale_a2s9
> quiet | Pour a drink. | gale_a2s9
> inquiry | Ask Yue. | gale_a2s9

=== gale_a2s9 | Two Skiffs and a Promise
You go on with two. They are crowded; nine people in two skiffs, with the stores and the kit. Yue sails Sail herself. She does not speak for the first day. She sits with her back against the mast and her face turned to the horizon.
“I told Ochir I’d bring her back,” she says on the second. “Light and Sail and Return. Gerel’s three.” She doesn’t look at you. “He told me it would be a comfort. To think they’d been wet.”
“They were.”
“They were.” She laughs, short and rough. “I’ll tell him. I’ll tell him Light went over a ridge of glass in a gale at forty miles an hour and hung in the air like a bird.” Her mouth twists. “He’ll cry for a week.”
“He’ll be proud.”
“He’ll be proud and cry.” She lowers her head. “I’ll have to be there. I’ll have to hold his arm.”
“You will.”
“Yes.” She takes the tiller. “I think I’d like that.”
> force | Nod. | gale_close | +gale_drove
> truth | Smile. | gale_close | +gale_drove
> quiet | Take a line. | gale_close | +gale_drove
> inquiry | Ask about Light’s ribbon. | gale_close | +gale_drove

// ---------------------------------------------------------------- a3: the lantern
=== gale_a3s1 | A Hungry Thing
“It follows light,” says Temur. He has been watching the gale for ten minutes with a frown of unusual concentration. “Look. Every time we turn, it turns. It’s *tracking* us.”
“It’s weather,” says Hao Lan. “It doesn’t track.”
“Then why has it changed course three times since noon?” He points. “It’s closing on the skiffs. Not on the plain. On us.”
Odval, at the bow, nods slowly. “He’s right. It’s a drawn thing. Old winds are. They lean toward warmth.” She presses her hands to the deck. “Fire, lanterns, living people. It likes the noise.”
“Can we hide?”
“Not from something that tastes you.”
“Then,” says Temur, and his boyish face lights up, “we give it something to taste.”
Yue Zhaoning has turned her head. She has a look in her eye that you have seen only once before: in a gully, at a well, holding a camel.
“Go on,” she says.
“A decoy.” He is almost jumping. “We’ve got a spare skiff. We load it with every lantern we own. We set it loose downwind with a sail up.”
“And the gale follows.”
“It follows the light.”
> deceit | Ask how. | gale_a3s2
> truth | Say it is cruel. | gale_a3s2
> quiet | Look at the spare. | gale_a3s2
> mercy | Think of the skiff. | gale_a3s2

=== gale_a3s2 | The Lantern-Skiff
She is a rough little tender, six paces long, patched in four greens, with a single sail. She has been towed behind Return since the shore, and nobody has ever used her. Her name is on the transom in white paint: *Pigeon.* Temur chose it.
You load her in an hour. Every lantern you own goes aboard: a dozen oil-lamps, three storm-lanterns, the ship’s bell-lamp, the Elder’s reading-lamp, a battery of candles in jam-jars. Hao Lan rigs them to the mast on cords. Gu paints a pair of eyes on the bow in lamp-black. Hanming ties the tiller.
“She needs a heading,” says Ren Qiao. “Due south. A long way off.”
“How long can she sail by herself?”
“Until the wind drops.” He tests the knot. “Or until she hits something.”
“She’ll be smashed.”
“She’s a tender.” He pats the hull. “She’s done her work. This is the best of her.”
Temur stands at the stern, hat in hand, looking at the little boat. His face is quite solemn.
“Goodbye, Pigeon,” he says. “You’ve been a good one.”
> deceit | Light the lamps. | gale_a3s3
> truth | Pat the hull. | gale_a3s3
> quiet | Check the knots. | gale_a3s3
> mercy | Say a word. | gale_a3s3

=== gale_a3s3 | Pigeon Sails
It is the loveliest thing you have ever seen. She goes off across the plain in the dusk like a thrown handful of stars, a tiny glittering skiff, with fifty lanterns blazing. The wind catches her sail and she leans and leaps. The glass takes her light and throws it back, and for a mile around, the Sea is a field of gold.
The gale hesitates.
You see it from the lee of a plate, with your heart in your mouth. The black wall, which has been bearing down on you for an hour, slows. It checks. A kind of shiver runs along its crest. Then, like a dog catching a scent, it swings its whole vast length to the south.
“It’s working,” breathes Hao Lan.
“Don’t say that.”
“Why not?”
“It’s bad luck,” says Temur. He is gripping the rail so hard his knuckles are white. “It’s the first thing you learn. As soon as you say it’s working—”
The wall begins to move.
It goes away after the lights. It goes quickly, at a gallop, a mile a minute, flinging its splinters in great whirling sheets. The sky behind it clears. You can see the stars.
> deceit | Cheer. | gale_a3s4
> truth | Hold your breath. | gale_a3s4
> quiet | Watch. | gale_a3s4
> mercy | Say goodbye. | gale_a3s4

=== gale_a3s4 | A Quiet Night
It takes an hour to pass. You watch it go, a vast black shape, fading southward into the dusk, with the lanterns dancing before it. It is a cat chasing a candle. It is a dragon following a star. It diminishes. It dwindles. At last it is a smudge, and then a mark, and then nothing.
You camp in the lee of the plate. The night is clear and cold. The glass is scoured to a high bright sheen. A thin crescent moon hangs in the east. You eat your supper in near-silence, as if afraid of waking something.
“I feel a little sad,” says Temur, at last.
“For the skiff?”
“And the lanterns.” He pokes the fire with a stick. “And the wind. It’s only hungry. It doesn’t know any better.” He scowls. “I tricked it. It was lonely. It followed a light.”
“You saved us.”
“I know.” He shrugs. “But I wish I’d thought of something that didn’t hurt anyone.”
Odval, across the fire, raises her head. “It didn’t,” she says.
“You said it would be smashed.”
“A wind can’t be smashed.” She smiles faintly. “It’ll be there next year. Looking for lanterns.”
> deceit | Smile. | gale_a3s5
> truth | Pour tea. | gale_a3s5
> quiet | Look at the stars. | gale_a3s5
> mercy | Hold Temur’s hand. | gale_a3s5

=== gale_a3s5 | A Message in the Morning
In the morning you find the lantern. It is the Elder’s reading-lamp, a small brass thing with a green glass shade. It lies on the glass fifty yards from the camp, upright, unbroken, with the flame still lit. A thin line of tracks, left by nothing, leads to it from the south.
“It brought it back,” says Hao Lan, dazed.
“Who?”
“Whoever. The wind.” She crouches. “It’s warm. It’s still burning.” She lifts it. “There’s a note.”
It is tied to the handle with a thread of grey spider-silk. It is a scrap of paper, very small, brittle as a leaf, inscribed in a script you have seen once before: in the second room of a tomb, on a wall.
Hao Lan reads it twice.
“It says,” she whispers, “*Thank you for the light.*”
Nobody speaks. A morning breeze stirs the dust. High overhead, in the clear blue, a single thin streamer of cloud curls into the shape of a hand, and drifts away.
Temur’s eyes are very large.
“That,” he says, in a small voice, “was not me.”
> deceit | Take the lamp. | gale_a3s6
> truth | Look at the sky. | gale_a3s6
> quiet | Say nothing. | gale_a3s6
> mercy | Smile. | gale_a3s6

=== gale_a3s6 | The Old Hand
“It’s the founders’ cipher,” says Hao Lan. “I’d know it anywhere.” She turns the paper over. “It’s written in their hand. But it isn’t old. The ink’s fresh.”
“Who writes in the founders’ script now?”
“The Order.” Her face is grey. “And Mengjiao.”
“She’s under a mountain.”
“She’s under a mountain with nine hundred miles of wind to carry a message.” Hao Lan holds up the note. “She hears everything. She’s been listening to this sea for fifteen years.” Her voice shakes. “She’s been listening to us.”
The Elder has come over. She stands very still, looking at the lamp. Slowly, she puts out a hand and takes it. She cups the flame.
“She says thank you for the light,” she says. “She means the lanterns. She means the... decoy.” She is half-laughing, half in tears. “She says thank you for *giving something to the wind to love.*”
Temur’s mouth has fallen open.
“She says,” the Elder goes on, with trembling lips, “that it was the kindest thing she has seen anyone do in fifteen years.”
> deceit | Take her hand. | gale_a3s7
> truth | Look at Temur. | gale_a3s7
> quiet | Listen to the wind. | gale_a3s7
> mercy | Hold Temur. | gale_a3s7

=== gale_a3s7 | A Boy and His Pigeon
He sits on the glass with his knees up and his arms round them, and the lamp in front of him. He does not say anything for a long time. He is crying, quietly, in the way of someone who does not often.
“I thought it was a trick,” he says. “That’s all it was. A decoy. An old herder’s dodge.” He wipes his nose. “I’m a Listener. I’m supposed to be good at the true things. I’m not. I’m good at tricks.”
“Tricks can be kind.”
“Can they?”
“This one was.”
He considers it. He picks up the lamp, and turns it over. The green glass shade glows.
“Odval says I’m a menace,” he says. “She says I’ve no depth. She says all I do is invent things.”
“She said you were a genius.”
“She said that *once.*” He sniffs. “She’d never say it again.”
“Say it,” says Odval, from the other side of the fire, without turning her head.
Temur freezes.
“*Genius,*” she says, with elaborate disdain. “There. I’ve said it twice. Don’t let it go to your head.”
> deceit | Laugh. | gale_a3s8
> truth | Pat his shoulder. | gale_a3s8
> quiet | Look away. | gale_a3s8
> mercy | Hug him. | gale_a3s8

=== gale_a3s8 | The Spare Pigeon
It becomes a joke. He builds another, that afternoon, from a barrel and a spar and a scrap of sail, and paints a face on the bow. He names it Pigeon the Second. He sets it adrift in the evening with a candle in a jar. It wobbles off over the glass with a crooked, hopeful air.
“What is it for?” asks Gu.
“Luck.”
“It’s a barrel.”
“It’s a very *lucky* barrel.” Temur has regained his equilibrium. “Every voyage should have one. A small boat for the wind to follow.” He nods wisely. “It prevents sulks.”
Ren Qiao, watching, makes a noise in his throat. It might be a laugh.
“There was a man on the Ash Bridge,” he says. “Old Lin. He kept a cat. He said every bridge needs one thing for the wind to look at.” He shrugs. “I thought it was nonsense. It always kept the draught off the ropes.”
“What happened to the cat?”
“It died. He got another.” His voice is quiet. “Old Lin said you’re not looking after the cat. You’re looking after the habit of kindness.”
He watches the barrel dwindle across the plain.
“I’d forgotten that,” he says.
> deceit | Smile. | gale_a3s9
> truth | Nod. | gale_a3s9
> quiet | Look at the sea. | gale_a3s9
> mercy | Ask about Old Lin. | gale_a3s9

=== gale_a3s9 | The Gale Goes By
The gale passes south of you for three days, a long dark smear on the horizon, going about its business. It never turns. Every evening Temur launches another Pigeon. Every morning there is something left on the glass: a feather, a button, a small neat heap of dried flowers. Nobody mentions it. Hao Lan makes a note in her book, and underlines it, and then, with a faint guilty look, crosses it out.
By the third night you are talking about it freely. “She leaves presents,” says Gu. “Like a cat.”
“It is not *she.*”
“It’s Mengjiao.”
“It’s *the wind,*” says Duan Wuyi, with dignity. “Which is, in a sense, everyone.” He sips his tea. “I have spent thirty years in the study of the Law, and the last three weeks have rather forced me to revise my position on the nature of evidence.”
“That’s a no, then.”
“It is a *perhaps.*” He lifts his cup. “A very large perhaps. With a bow on it.”
The Elder, smiling in the firelight, has the little brass lamp in her lap. She is polishing the shade with a fold of her sleeve.
> deceit | Laugh. | gale_close | +gale_decoyed
> truth | Raise a cup. | gale_close | +gale_decoyed
> quiet | Look at the lamp. | gale_close | +gale_decoyed
> mercy | Light a candle. | gale_close | +gale_decoyed

// ---------------------------------------------------------------- a4: the pilgrims
=== gale_a4s1 | A Line of Dots
You see them through the spyglass: a string of tiny figures on the plain, two miles ahead, in the direct path of the storm. A handful of carts. A few dozen walkers. A banner, white and yellow, hanging limp on a pole. They are moving at a trudge, in the heat, with their heads down. They have not seen it. They are walking with their backs to the north.
“Pilgrims,” says Hao Lan, with the glass. “For the Stair. They’ve got the pennants. The yellow and white.” She swallows. “There’s a child on a cart. A woman, holding a baby.”
“How many?”
“Thirty-one. Perhaps more.” She lowers the glass. “They’ll be flayed. They’re on foot. They haven’t a hope.”
Yue has already hauled the tiller. “Reef,” she says. “We can’t outrun it, but we can reach them. Get ready to take on passengers.”
“Thirty-one?”
“We’ll find room.” She grins, bleakly. “We’ll find a use for the other skiff.”
“The tender?”
“Upside down,” says Yue. “Shelter.”
> mercy | Reef. | gale_a4s2
> truth | Take the spyglass. | gale_a4s2
> quiet | Look at the child. | gale_a4s2
> inquiry | Ask about the banner. | gale_a4s2

=== gale_a4s2 | Overturned Hulls
You reach them in ten minutes. They are astonished. They stop, in the middle of the plain, to stare at the three black skiffs skidding in across the glass. A broad, kind, anxious man with a yellow sash runs forward waving both arms. “Strangers! Strangers! Have you come to rob us? We’ve nothing!”
“There’s a gale!” shouts Yue.
He blinks. “Where?”
She points. Behind him, the horizon is gone. The sky to the north is a vast brown curtain, slashed with veins of white. The roar has risen to a continuous bellow. Splinters are already hissing past.
The man looks. He goes the colour of cheese.
“Oh,” he says. “Oh dear.”
“Everyone off the carts!” bawls Yue. “Down! Get down! Under the hulls!”
It is chaos for thirty seconds. Then it is order. You haul the skiffs on their sides, one after another, in a rough triangle, with the keels to the wind. The pilgrims scramble in. Children are passed from hand to hand. A goat is shoved bodily through a hatch. Hanming and Ren Qiao brace the hulls with the camel.
When the front arrives, it finds nothing but three hulls and a plain.
> mercy | Get under. | gale_a4s3
> truth | Count heads. | gale_a4s3
> quiet | Hold the child. | gale_a4s3
> inquiry | Ask who is in charge. | gale_a4s3

=== gale_a4s3 | Under the Keel
There are forty of you in a space designed for nine. You sit in the dark, knee to knee, shoulder to shoulder, with the hulls booming overhead like drums. Splinters strike the planks with a sound like hail. A child is crying. A goat bleats, over and over. The air smells of sweat and wet wool and fear.
A woman sits at your elbow. She is thirty, heavily pregnant, with a broad pale freckled face and a quiet smile. She has her hand on her stomach. She has not made a sound since she crawled under.
“I’m Sun Mei,” she whispers, in the dark. “I’m a midwife. Of the Eastern Ford.” She breathes out slowly. “I wonder if you could do me a very small kindness.”
“Of course.”
“Could you not let me panic?” Her voice is steady, her fingers white on her knee. “I’ve a baby due next week. And I’ve been walking for four months. And I believe my waters are about to break.”
You stare at her.
“I did say it was a small kindness,” says Sun Mei apologetically.
> mercy | Hold her hand. | gale_a4s4
> truth | Ask what she needs. | gale_a4s4
> quiet | Call for help. | gale_a4s4
> inquiry | Ask who can deliver. | gale_a4s4

=== gale_a4s4 | The Midwife Delivers
“I can,” says Sun Mei. “If you all keep still.” She has already begun to unlace her coat. “It is not my first. Or my fourth. But it is the first time I’ve done it myself, and under a boat.” A small smile. “I’ve always wished for an adventure.”
Nobody laughs. Everyone is staring. The Elder, wedged between two goats, has gone ashen. Duan Wuyi is murmuring a verse of the Law of Succession, in a faint voice. Hanming says, hoarsely: “Do you want us to go?”
“Where?” says Sun Mei.
“Out.”
“Into that?” She nods at the thundering planks. “Don’t be silly.” She rolls up her sleeves. “Right. I need hot water, and clean cloth, and one person with steady hands.”
“There’s no hot water.”
“Then lukewarm.” Her brisk calm is astonishing. “Cloth. Hands. You.”
She means you.
You take her hand. It is damp and strong. She leans against the curve of the hull, and breathes, and begins to count.
> mercy | Count with her. | gale_a4s5
> truth | Fetch the tea. | gale_a4s5
> quiet | Shield her. | gale_a4s5
> inquiry | Ask what to do. | gale_a4s5

=== gale_a4s5 | Eleven Hours
It takes eleven hours. The storm roars all through the first four, and thins to a hiss in the sixth. Somewhere in the eighth, it ceases. You do not notice. You have forgotten there is a storm. You are in a small dark space under a boat, with a woman breathing hard and the faint gleam of a single shuttered lantern on her upturned face.
She is quite calm. She tells you what to do in short, level sentences. *Hold. Wipe. Now. Hold.* You follow. Your hands are steady. Hao Lan boils tea over a shielded flame and passes it back, tin cup by tin cup. The Elder, white as paper, wedged against the keel, holds a spare lamp and does not look away.
At the ninth hour the pregnant woman starts, for the first time, to swear. At the tenth she swears in Steppe-tongue. At the eleventh she says, quite loudly, *“Now!”*
There is a cry.
It is a very small cry. It rises in the dark like a lark.
Sun Mei laughs, exhausted, delighted, with tears running down her freckled face.
> mercy | Hold the baby. | gale_a4s6
> truth | Cut the cord. | gale_a4s6
> quiet | Wrap her. | gale_a4s6
> inquiry | Ask what it is. | gale_a4s6

=== gale_a4s6 | A Girl
“A girl,” says Sun Mei. “Of course. Of course it is.” She is shaking with laughter. “I wanted a girl. I told the husband. He said it was in the stars.” She sags back. “He’s going to be insufferable.”
You hold the baby. She is red and creased and furious. She has a thatch of black hair and a perfectly formed pair of lungs. She weighs nothing. She weighs everything. You put her, with infinite care, into her mother’s arms.
The Elder is crying. She does it silently, in the lamplight, with the spare lantern held out at arm’s length so as not to spill oil on the blanket. Her face is unguarded.
“I have signed,” she says, to nobody, “four hundred and six sentences of death. I have never once been present at a birth.”
“Nobody ever is,” says Sun Mei. “It’s the great oversight of the Law.”
“I intend to draft an amendment.”
“I should think so.” The midwife grins, wan and radiant. “*A Chancery clerk shall attend at least one.*”
The baby wails.
It is the loveliest sound in the world.
> mercy | Laugh. | gale_a4s7
> truth | Wipe your eyes. | gale_a4s7
> quiet | Look at the child. | gale_a4s7
> inquiry | Ask what she will name her. | gale_a4s7

=== gale_a4s7 | A Name
“I don’t know,” says Sun Mei. “We hadn’t chosen.” She rocks the baby. “My husband wanted ‘Heaven’s Joy.’ I said it was a ridiculous name for a child who would spend her life in the Eastern Ford, selling dumplings.” She yawns. “I think I shall wait for her to tell me.”
“She will?”
“They always do. In the first week, they make a face. And you think: *ah, there you are.*” She strokes the downy head. “I’ve delivered two hundred. I’ve never named one wrong.”
“What are you going to do?”
“Well.” Sun Mei looks up. “I was going to the Stair. All of us were. My husband said it would be good luck.” Her mouth twists. “I think it was a fool’s errand. I think I’ve had a better one.”
“You could go home.”
“I could. It’s a long way.” She smiles at the dark plank above her. “But I believe I know a camel.”
Behind you, in the darkness, the camel snorts.
> mercy | Smile. | gale_a4s8
> truth | Ask about the pilgrims. | gale_a4s8
> quiet | Hold the lamp. | gale_a4s8
> inquiry | Ask if she will name her after a skiff. | gale_a4s8

=== gale_a4s8 | After the Storm
You come out into a morning of dazzle. The glass is scoured to a diamond brightness. The air is clean and cold and smells of struck flint. Not a cloud. The three black skiffs stand on their sides, dented and gashed, but sound. The pilgrims creep out, blinking, in twos and threes, to stand about in the light.
They are all alive. Not one has been hurt. The goat is eating a sheet of paper.
The broad, anxious man with the yellow sash is weeping openly. He grips your hands. “I don’t know how to thank you. We’ve nothing. We’re poor.” He wipes his face. “We were going to the Stair to ask for a blessing. We thought it would help.”
“What would you have asked?”
“That our children be written.” He swallows. “All of them. In the Ledger. So they’d have a chance.”
You think of an old log in a captain’s cabin. Of eight hundred and eleven names.
“Go home,” you say.
“What?”
“Go home. Raise them. They’re already written.” You say it gently. “It’s in the way you walked.”
He stares. He does not understand. But he nods.
> mercy | Smile. | gale_a4s9
> truth | Bow. | gale_a4s9
> quiet | Look at Sun Mei. | gale_a4s9
> inquiry | Ask where they live. | gale_a4s9

=== gale_a4s9 | Turning Back
They turn back, in the end. Not all of them. A third go on, with their banners, to the Stair, because they have walked four months and cannot imagine not finishing. A third go home. And a third, who cannot decide, walk with you to the Furnace Towns, because the road is the same for the first week.
Sun Mei rides in Return, with the baby in a sling. She has chosen the name. She chooses it on the third day, in the afternoon, when the child sneezes.
“Gale,” she says.
“Gale?”
“It seems fitting. She was born in one.” She grins. “And she makes a lot of noise.”
“It’s a good name.”
“It’s a *stubborn* name. It’ll do.” She shifts the sling. “I thought of Light. For the skiff. But I didn’t want to ask. It seemed to be somebody else’s.”
You look at the black hull beneath your feet. Yue, at the tiller, is pretending very hard not to have heard. Her ears are pink.
“You could ask,” you say.
Yue Zhaoning clears her throat. “It’s a perfectly good name,” she says gruffly, to the horizon. “For a girl.”
> mercy | Smile. | gale_close | +gale_pilgrims
> truth | Bow. | gale_close | +gale_pilgrims
> quiet | Look at the glass. | gale_close | +gale_pilgrims
> inquiry | Ask to hold the baby. | gale_close | +gale_pilgrims

// ---------------------------------------------------------------- hidden: the shard
=== gale_h1 | The Cold Steel
It comes out of the canvas like a sheet of grey ice. You hold it in both arms, braced against the mast, as the wind snatches at your coat: a curved plate of steel the size of a washtub, still frigid after ten days in the sun. A skin of frost has formed on its inner face.
The gale is a mile off. The first splinters are whistling past. Odval has turned her head.
“What is that?” she says sharply.
“A piece of the Great Hush.”
“Give it to me.” She is across the deck in two bounds. She puts both hands on the cold curve. Her pale eyes widen. “Oh,” she says. “Oh, *listen.*”
You listen. It is faint at first: a dull hum in your palms. Then it rises, a vast, low, resonant note, the sound of a very big bell being rung very far away. It is not the Hush. It is the bell’s opposite. It is a note that has been waiting to be sounded.
“It remembers,” whispers Odval. “The counter. Narmandakh’s note. It’s in the steel.” She laughs, delighted. “It can *cancel.*”
“What?”
“Anything that rings.”
> inquiry | Hold it up. | gale_h2
> truth | Ask Odval how. | gale_h2
> mercy | Brace yourself. | gale_h2
> quiet | Watch the wall. | gale_h2

=== gale_h2 | A Note Against the Wall
“Everything that screams has a pitch,” says Odval. She is shouting over the roar. “The gale is made of ten million splinters, all ringing. It’s a chord. If you strike the right note against it—”
“It stops?”
“It goes *quiet*. Where you point.” She takes your wrists and lifts the shard, so that the face of it is square to the wall. “Hold it still. Don’t let it shake. I’ll tell you when.”
The black wall is half a mile off. It is filling the sky. The roar has become a continuous, hollow bellow. You can see individual splinters now, whirling in their millions, a vast cloud of silver needles.
“Ready?” says Odval.
“No.”
“Good.” She grins. “Now.”
You strike the shard with the heel of your hand.
It rings. It is a clear, cold, holy note, like a drop of water falling into a pool a mile deep. It goes out across the Sea in a ring. The splinters in front of you hesitate.
They stop.
> inquiry | Strike again. | gale_h3
> truth | Hold still. | gale_h3
> mercy | Close your eyes. | gale_h3
> quiet | Listen. | gale_h3

=== gale_h3 | A Path of Quiet
It opens like a door. A lane, perhaps thirty feet wide, straight as a ruled line, cut through the heart of the gale. On either side the wall roars on, a cliff of whirling glass. In the lane, nothing. The air is still. The dust hangs motionless. A few splinters lie on the deck, where they fell.
“Go!” shrieks Yue, and throws the tiller.
The skiffs shoot into the lane one after another. You stand at the bow of Light with the shard clutched to your chest, ringing, ringing, the note held steady, and Odval holds your wrists. The walls scream past on either hand. Above you, a ribbon of blue sky.
It takes eleven minutes. When you come out the other side, you stagger. The shard is white with frost. Your hands are numb. Your ears ring with a sweet, high singing, like the aftermath of a great music.
Behind you the lane closes. The gale resumes its roar. It goes on south, grumbling, as if nothing had happened.
“It didn’t notice,” says Odval, laughing, white-faced. “It didn’t even notice.”
You fall to your knees on the deck.
> inquiry | Lay down the shard. | gale_close | +gale_cancelled
> truth | Breathe. | gale_close | +gale_cancelled
> mercy | Hold Odval. | gale_close | +gale_cancelled
> quiet | Look at the sky. | gale_close | +gale_cancelled

// ---------------------------------------------------------------- close
=== gale_close | After the Gale
The Sea is washed clean. Every plate is bright as a mirror. In the morning the skiffs run across it in a dazzle of light, so that the whole company has to wear goggles or squint. The air is sweet. The wind is steady. There is a sense in the party of having been scoured too: of having had something rubbed off.
+[how] gale_read | Odval read the wind with her palms and steered you into its eye.
+[how] gale_drove | You drove through the front on a scrap of canvas, and lost a hull to the glass.
+[how] gale_decoyed | A lit skiff led the storm away, and something sent a lamp back.
+[how] gale_pilgrims | Forty people sheltered under three boats, and a girl was born in the dark.
+[how] gale_cancelled | A shard of the Great Hush struck a single note, and the storm opened like a door.
Hao Lan is sitting on the deck of Sail, with her notebook open on her knee. She is not writing. She is looking at her hands.
“I counted,” she says. “Back there. Under the hull.” Her voice is small. “Eleven hours. I was holding the cup the whole time. I did not once think about the Ledger.”
“Was that bad?”
“It was extraordinary.” She laughs shakily. “It’s the first time since I was nine that I haven’t been writing something down in my head.”
“How did it feel?”
“Like being warm,” says Hao Lan.
She shuts the book. She tilts her face to the sun.
> truth | Smile. | gale_close2 | +b5q_gale
> mercy | Sit beside her. | gale_close2 | +b5q_gale
> quiet | Look at the horizon. | gale_close2 | +b5q_gale
> inquiry | Ask what she will write next. | gale_close2 | +b5q_gale

=== gale_close2 | Mid-Sea
You are over the middle by the twentieth day. The Elder has marked it on the chart: a small neat cross, with the date. She stands at the bow of Return, looking east, with a hand shading her eyes. The wind has dropped to a murmur. The sun is high. The glass is a perfect silver mirror, without a flaw, from horizon to horizon.
“Fifteen days,” she says. “From here. At our present speed.” She does the sum with her lips. “We have nineteen.”
“It’s enough.”
“It is enough with four to spare.” She lowers her hand. “I dislike margins. I have always found they are consumed by the first thing that goes wrong.”
“Nothing’s going to go wrong.”
She turns her head. She regards you with an expression of exquisite politeness.
“I wonder,” she says, “if you have considered how often you have said that in the last six weeks.”
“Many times.”
“And how often it has been true.”
“Never.” You grin. She very nearly does too.
“Quite,” says Su Wanru, and goes back to her chart.
> truth | Smile. | hub_b5_a | bond:ren+3
> mercy | Look at the horizon. | hub_b5_a | bond:ren+3
> quiet | Check the sail. | hub_b5_a | bond:ren+3
> inquiry | Ask about the margins. | hub_b5_a | bond:ren+3

`,
  scenarios: String.raw`
$ SU_GALE_STORM | trust+3 respect+4 fear+5 | elder | The Elder watches a wall of broken glass roll across the plain.
hostile: Glass is not a thing I had thought could be afraid. It flew past my face in thousands, whistling, and each fragment, I could see, was trying to be somewhere else. I did not know whether to pity it. I held my hat.
wary: I lashed myself to the mast. I have never done a more foolish thing, nor a more sensible. I thought, quite distinctly: if I die, it will be in the middle of a sea, in a storm of broken windows, which is rather more poetic than the Law Hall deserves.
neutral: It was over in an hour. It left a smell of struck flint. When I opened my eyes, the hull was bright as a new coin and Hanzhen was laughing, because his hair had been cut by the wind into the neatest fringe.
warm: Temur held the lantern all night. I did not ask him to. He sat at the foot of the mast and sang the false lullaby, very quietly, to himself. I remember thinking: the best thing a person can do in a storm is be a small, dull, steady light.
devoted: I have been afraid of heights all my life. I was afraid of the storm for exactly as long as it took to understand that I was not alone in it. After that, it was only weather.
`,
  remarks: String.raw`
% gale_sun_later | since:gale_pilgrims>=3 | yue | Sun Mei’s baby has been named after a skiff. The skiff is Light. She says it is a good strong name and will do for a boy or a girl. I have not told Ochir.
% gale_decoy_later | since:gale_decoyed>=3 | hao | Temur’s lantern-skiff is still out there, somewhere, being chased by weather. I find I think of it as a loyal dog.
`,
}
