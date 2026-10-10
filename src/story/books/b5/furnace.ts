import type { Arc } from "../types";

/**
 * Book Five, arc six: the Furnace Towns. On the far shore of the Glass Sea six towns of foundries cast the treads of the Heavenly
 * Stair, one cut-glass step for each ascender, from a feedstock of red ash that the Order of Gentle Hands ships in by the barrel:
 * the burned pages of the struck. Four approaches: tour the works as inspectors and let the glaziers speak (a1, truth), drown the
 * Mother Furnace (a2, force), swap the feedstock for ordinary sand (a3, deceit), and find the tread-makers' children somewhere to
 * live (a4, mercy). A hidden route sings the furnace quiet with the carried tune. Cast: Foreman-Mother Zhuo, the apprentice
 * Tuhin, Overseer Kwan Dei, Duan Wuyi, Gu, Hanming, the Elder.
 */
export const furnace: Arc = {
  id: "furnace",
  name: "The Furnace Towns",
  scenes: String.raw`
=== furnace_entry | Smoke on the Shore
The glass ends in a ragged beach of black slag, and beyond it, the Furnace Towns begin. Six of them, strung along the coast like beads: low, soot-black, sprawling, each a cluster of tall brick stacks and sheds with sawtooth roofs, joined by a single narrow-gauge railway. The sky above is a brown smear. The air tastes of coal and hot metal. A great pulsing orange glow stands over the nearest town, and a sound comes from it, a deep slow throb, like a heart.
“The Mother Furnace,” says Hanming, on the deck of Sail. His scarred face is tight. “I was born in a town like this. In the south. My father was a glazier.”
“What do they make?”
“Window glass. Bottles. Lenses.” He looks at the smoke. “But not here. These are the Concord’s works. Here they make one thing.”
A train rattles along the shore, hauling a long string of flat wagons. On each wagon, in crates, in tiers, in straw, lie hundreds of pale green slabs: square, polished, each the size of a table-top. They have writing on them.
“Treads,” says Duan Wuyi, very quietly. “For the Stair.”
> truth | Present Duan’s seal at the gate of the first town, and ask to inspect. | furnace_a1s1
> force | Study the Mother Furnace, a mile inland, and the canal that feeds its cooling-pit. | furnace_a2s1
> deceit | Watch the feedstock barges unloading at the wharf, stencilled in red. | furnace_a3s1
> mercy | Notice a row of children in leather aprons carrying buckets, none of them over ten. | furnace_a4s1
> inquiry | Hum the tune the Sea gave you, under your breath, and see whether the furnace answers. | furnace_h1 |  | singing_carried | You carry no tune it would know.

// ---------------------------------------------------------------- a1: the inspection
=== furnace_a1s1 | The Gate
The gate-house is a squat brick box with a single barred window. Behind the bars, a clerk in an ink-stained coat is eating a cold pie. He looks up at the seal in Duan Wuyi’s hand, and the pie stops halfway to his mouth.
“Censor-General,” he says, thickly. “I... we have had no notice.”
“That is the purpose of the visit.” Duan’s voice is gentle and level. “I am entitled, under the Charter, to inspect any foundry in which the Concord holds an interest. I am entitled to see the books, the premises, and the people.” He folds the seal back into his sleeve. “I would be obliged if you would open the gate.”
“I’ll have to fetch the Overseer.”
“Of course.”
“He’s at lunch.”
“I shall wait.”
The clerk, white-faced, abandons the pie. He runs. You hear his boots on the stones, then a distant shout. A minute later a bell begins to ring, thin and anxious, somewhere in the works.
Gu leans close. “They’re hiding something,” he whispers.
“They’re hiding everything,” says Hanming, grimly. “I’ve never seen a clerk run so fast.”
> truth | Wait. | furnace_a1s2
> mercy | Look through the bars. | furnace_a1s2
> quiet | Listen to the bell. | furnace_a1s2
> inquiry | Ask Duan what he hopes to find. | furnace_a1s2

=== furnace_a1s2 | Overseer Kwan
He arrives in a quarter of an hour, in a silk waistcoat, with his napkin still tucked in his collar. He is a plump, sweating man of fifty with small shrewd eyes and a lavish moustache, and he has the air of one who has rehearsed a speech. He bows from the waist.
“Censor-General Duan. What an honour. Kwan Dei, Overseer of the First Works.” He wrings his hands. “I regret that the Mother is at full blast, and the heat is dreadful. Perhaps you would prefer to examine the ledgers in my office, with tea.”
“I should prefer to examine the furnace.”
“Ah.” The moustache twitches. “It is dangerous. We have a rota of fatalities.”
“A rota?”
“A schedule of expected deaths. For insurance.” He mops his brow. “Four a week, on average.”
Duan Wuyi’s soft face does not change. But a muscle has begun to tick at the corner of his jaw.
“Then I shall go carefully,” he says. “Lead on.”
Kwan Dei looks at the seal, and at the grim party at his back, and at the huge dull glow in the sky.
“Of course,” he says, faintly.
> truth | Follow. | furnace_a1s3 | npc:SU_FURNACE_TREAD
> mercy | Stay with the Elder. | furnace_a1s3
> quiet | Watch Kwan. | furnace_a1s3
> inquiry | Ask about the rota. | furnace_a1s3

=== furnace_a1s3 | The Casting Floor
It is a cathedral of fire. The floor is a hundred yards long and forty high, roofed in iron, ribbed with rails and cranes. At the far end the Mother Furnace squats in her brick shell, a vast smouldering dome with a mouth like a cavern, vomiting orange light. A line of men and women in leather aprons and wet cloths stands before her, ladling molten glass into square iron moulds. Their faces shine. Their eyes are red.
No one looks up. They work with the grim rhythm of those who have been doing it for years. Ladle, pour, step back. Ladle, pour, step back. Steam hisses. The moulds pass along a rail, glowing, to a line of cooling-pits.
“Treads,” says Kwan Dei, shouting over the roar. “Four hundred a day.” He sounds proud. “One for every ascender in the Concord. We keep the registers.”
“How do you know whose goes where?”
“The ash is marked.”
“The ash?”
He waves at a row of sealed barrels at the foot of the furnace. Each is stencilled with a red character. “The feedstock. From the Order of Gentle Hands. Every barrel has a name.”
Duan Wuyi has gone absolutely still.
> truth | Read a barrel. | furnace_a1s4
> mercy | Hold Duan’s arm. | furnace_a1s4
> quiet | Watch the glaziers. | furnace_a1s4
> inquiry | Ask what is in the barrels. | furnace_a1s4

=== furnace_a1s4 | What Is in the Barrels
It is a dull red powder, as fine as flour. You have seen it once before, in nine clay bowls under a green mound. The smell is faintly sweet, like dried roses. It sifts through your fingers.
“The ashes of the struck,” says Duan Wuyi. His voice is dry as paper. “Burned at the Order’s hearths. Shipped here in barrels.” He turns to Kwan Dei. “You have been casting them into glass.”
“We have been casting *treads.*” The Overseer says it with the weary patience of a man who has been through this before. “It is a very ancient technique. A tread must carry the weight of the one who climbs it. It has to be made of the same stuff.”
“The same stuff?”
“A line in the Ledger,” says Kwan. “A tread for each line. The ash of whoever was struck to make the room.” He blinks. “It is the tradition. The Stair is a record. Each step is a name.”
“And whoever climbs it—”
“Steps on it. Yes.” Kwan nods, as to a pupil who has finally understood. “That is how they ascend. They stand on the names.”
> truth | Look at the tread. | furnace_a1s5
> mercy | Hold your breath. | furnace_a1s5
> quiet | Look at the Elder. | furnace_a1s5
> inquiry | Ask to see one. | furnace_a1s5

=== furnace_a1s5 | A Tread
He brings one over on a wheeled trolley. It is perfect: green and clear and thick as a hand, with a polished top and a chamfered edge. In the depths of it, suspended, hang thousands of black specks. They are not specks. They are characters, tiny as grains of sand, arranged in rows. It is a page.
You bend close. They are names. In a hundred hands. A child’s, in loops. A clerk’s, in a hurry. A carved seal-mark.
“Read the bottom,” says Kwan Dei. “The top is for the climber.”
You turn it up on its side. On the underface, in the glass, is a single large character in reversed script. It is the sign of the Registrar. And beside it, a signature.
The Elder makes a sound.
She has stepped forward. She is staring at the signature. Her eyes are very wide. Her hand has come up to her mouth.
“That is mine,” says Su Wanru.
“Madam?”
“That is my mark.” Her voice is a whisper. “I signed it. Eleven years ago. It was an order for a hundred and four treads.” She swallows. “I had thought they were for repairs.”
> truth | Take her arm. | furnace_a1s6
> mercy | Hold her. | furnace_a1s6
> quiet | Look away. | furnace_a1s6
> inquiry | Ask Kwan about the order. | furnace_a1s6

=== furnace_a1s6 | A Hundred and Four
“Lot nineteen,” says Kwan Dei, consulting a ledger. “Delivered to the Stair eleven years ago last spring. It was a fine batch.” He peers at the Elder. “You are... the Registrar?”
“I was.”
“We always say a prayer for the Registrars.” He is unctuous. “They make our work possible.”
“What were the hundred and four?”
“The ash was from your own district. Law Hall, Azure Cloud.” He runs a finger down the column. “A very fine ash. Mostly young.”
The Elder says nothing at all.
“It is routine, madam. Every Registrar signs them. It is the privilege of the office.” He beams. “To lay the foundations of the Ascended.”
“Which hundred and four?”
“I am sorry?”
“Their names.” Her voice is dry and terrible. “Do you have them?”
Kwan blinks. He looks at the tread. He looks at Duan.
“They’re in the glass,” he says. “That is rather the point.”
> truth | Stand by her. | furnace_a1s7
> mercy | Hold her hand. | furnace_a1s7
> quiet | Wait. | furnace_a1s7
> inquiry | Ask how they might be read. | furnace_a1s7

=== furnace_a1s7 | Reading Glass
There is a way. A glaziers’ trick, as old as the craft. You hold the slab to the light, so that the lamp shines through it, and turn it slowly. The black specks swim. If you tilt it at the right angle, they align. A line of characters becomes a sentence. A sentence becomes a page.
Hanming does it. He takes the tread from the trolley, with the leather-gloved ease of a man who has handled a thousand slabs, and angles it to the furnace-glow. His lips move. The characters rise into sense.
“Han Lian,” he reads, softly. “Aged fourteen. Of the outer courtyard. A seamstress’s son.”
“Yes,” whispers the Elder.
“Mo Ru. Aged sixteen. Her mother was a washerwoman.” He turns it a hair. “Dun Er-lang. Aged nineteen. He liked birds.”
Nobody speaks. The Mother Furnace throbs.
“There are a hundred and four,” says Hanming. His voice cracks. “In this one slab. It’s all of them. They’re all in here.” He lowers it. “They must have been poured at once.”
The Elder takes the slab from him. She holds it in both arms like a child.
“Fourteen of them,” she says, “are on my ledger.”
> truth | Say nothing. | furnace_a1s8
> mercy | Hold her. | furnace_a1s8
> quiet | Look at Duan. | furnace_a1s8
> inquiry | Ask what she wants to do. | furnace_a1s8

=== furnace_a1s8 | The Glaziers Listen
They have gathered while you were reading. You do not see them come. Two hundred men and women in leather aprons, with wet cloths round their necks, stand in a ring in the glare of the Mother. They have laid down their ladles. They are silent.
Kwan Dei notices them last. “Back to work,” he says, weakly. “Back to... Censor-General, I must protest—”
“You must not,” says Duan.
A big woman steps forward. She is sixty, built like a boiler, with forearms like hams scarred white with burns. She wears a Foreman’s badge. Her face is a lump of seamed brown leather.
“Zhuo,” she says. “Foreman-Mother. Of the Third Pour.” Her voice is a rasp. “I want to ask the Censor-General a question.”
“Ask.”
“Is it true that the glass is the dead?”
Duan Wuyi opens his mouth. For an instant he looks as though he would lie. His soft face struggles. Then he closes his eyes.
“Yes,” he says. “It is.”
A sound goes round the ring like a breath.
> truth | Stand beside him. | furnace_a1s9
> mercy | Look at Zhuo. | furnace_a1s9
> quiet | Wait. | furnace_a1s9
> inquiry | Ask Zhuo what she knew. | furnace_a1s9

=== furnace_a1s9 | What Zhuo Knew
“I knew,” she says. She says it without heat. “Not the details. But I knew it was not sand.” She puts her scarred hands on her hips. “Thirty years I’ve been casting. You get a feel for the batch. This ash was *heavy.* It had grief in it.”
“Why did you not say?”
“To whom?” She laughs, a harsh bark. “The Overseer? The Inspector? Who asks a glazier what the glass is made of?”
“I do,” says Duan Wuyi.
“Aye.” She looks at him. “You do.”
There is a silence. The Mother throbs.
“What will you do?” says Zhuo.
“I shall make a report,” says Duan. His voice is not steady. “To the Chancery. To every Censor. To the Assembly.” He swallows. “It will not be believed.”
“No.” She nods. “It won’t.” She turns to the ring. “Put down the ladles, then. All of you.” Her rasp is quiet. “We’re stopping the pour.”
The glaziers do not cheer. They simply lay their ladles on the floor.
> truth | Bow. | furnace_close | +furnace_toured
> mercy | Hold the Elder. | furnace_close | +furnace_toured
> quiet | Look at the furnace. | furnace_close | +furnace_toured
> inquiry | Ask how long they can hold. | furnace_close | +furnace_toured

// ---------------------------------------------------------------- a2: the cooling-pit
=== furnace_a2s1 | The Canal
It is a ribbon of brown water, forty feet wide, running inland from the harbour to the foot of the Mother Furnace. A line of barges carries coal. A wooden sluice-gate controls the flow. At its end the canal pours into a great stone basin, thirty yards across, the cooling-pit, where the red-hot moulds are plunged to temper them. Steam stands over it in a vast white column.
“That’s the heart of it,” says Hanming, crouching on the bank. “If the pit floods, the Mother goes out. She can’t keep her heat. A furnace that size has to be fed and cooled in balance. If you cool her too fast—”
“She cracks.”
“The crown cracks. The whole dome comes down.” He shades his eyes. “It’s happened. In the south, in my father’s time. Forty died.”
“We don’t want anyone to die.”
“No.” His scarred face is thoughtful. “But if the pit floods *slowly*, the Mother cools slowly. She goes dark in an hour. The glaziers have time to walk away.” He glances at you. “It’s the sluice. That’s the lever.”
Ren Qiao has crossed his arms. “Then we drown her.”
> force | Plan. | furnace_a2s2
> truth | Ask Hanming how. | furnace_a2s2
> quiet | Study the sluice. | furnace_a2s2
> mercy | Ask about the glaziers. | furnace_a2s2

=== furnace_a2s2 | A Quiet Word with the Night Shift
There are eighty on the night shift, and they are the hardest of the lot. They sit in the lee of the coal-wharf in the small hours, passing a flask, hunched in their wet aprons, and they look up with narrowed eyes when you come out of the dark. A big man gets to his feet. His hand goes to a shovel.
“We’re not here to fight,” says Hanming.
“No?”
“We’re here to put out the fire.”
There is a long, long pause. The big man stares. He turns to the others.
“Put out the Mother,” he says. He says it slowly. “They’re going to put out the Mother.”
“Aye,” says Hanming.
The big man looks at him for a long moment. Then he lays the shovel down.
“My brother died on the night shift,” he says. “Three years back. They said it was the heat.” His voice is flat. “He was seventeen. They gave us a bottle.”
Nobody speaks. A coal-barge creaks at the wharf.
“What do you need?” he asks.
> force | Tell him. | furnace_a2s3
> truth | Ask him to lead. | furnace_a2s3
> quiet | Listen. | furnace_a2s3
> mercy | Say you are sorry. | furnace_a2s3

=== furnace_a2s3 | The Sluice-Gate
It takes fifty of them to raise it. The sluice is an oak slab four feet thick, lowered in iron grooves, wound up and down by a gigantic ratchet. You work in the dark, in silence, with shuttered lanterns, stripped to the waist. The ratchet clanks. Every clank sounds like a pistol.
At the third turn a light flares in a window above. A head leans out. “Who’s there?”
Nobody answers. The big man, whose name is Bator, stands in the shadow and does not breathe.
“Hallo? Is that the night shift?”
“Aye,” says Bator, in a very passable imitation of a yawn. “Checking the ratchet.”
“At this hour?”
“It’s stiff.”
“Hm.” A pause. “Don’t break it.”
The head withdraws. The window shuts.
You let out a shaking breath. Beside you, Ren Qiao is trembling with silent laughter. He is stuffing a corner of his coat into his mouth.
The ratchet clanks. The gate rises, an inch at a time. A thread of brown water begins to slide through.
> force | Heave. | furnace_a2s4
> truth | Count the turns. | furnace_a2s4
> quiet | Watch the window. | furnace_a2s4
> mercy | Check the glaziers. | furnace_a2s4

=== furnace_a2s4 | Water Finds Its Level
It takes an hour. The canal widens, deepens, and begins to run. A broad brown tongue slips across the stone lip of the cooling-pit, and drops. The pit steams. The great white column of vapour thickens, spreads, rises in a roil of cloud. You can feel the heat on your face from fifty yards.
Inside the works, someone shouts.
“It’s the pit!” A bell begins to clang. “The pit’s overflowing!”
Men run. You hear boots on iron, the rattle of tongs, the squeal of a hand-winch. A voice bawls, “Close the gate!” and another, “It’s jammed!” You press yourself against the wall of the wharf. Beside you Bator is grinning, with a wolf’s teeth.
“They’ll not close that,” he mutters. “I chained it.”
“Won’t it flood the town?”
“It’s a low-lying yard.” He shrugs. “The lower works will get wet. But the Mother’s on a hill.”
The steam is turning the colour of dirty pearl. In the heart of it, a long way off, the great orange glow wavers, like a candle flame in a draught.
It shrinks.
> force | Watch. | furnace_a2s5
> truth | Hold your breath. | furnace_a2s5
> quiet | Back away. | furnace_a2s5
> mercy | Look for the glaziers. | furnace_a2s5

=== furnace_a2s5 | The Mother Dims
She goes out by degrees. The glow shrinks from orange to red, from red to a sullen crimson, from crimson to a faint ember in the shell of the dome. The hot roar that has stood over the town for forty years drops to a mutter, then a sigh. The great stack above her, which has vomited smoke since before the oldest glazier was born, trembles at its crown and lets out a last long grey exhalation.
Then silence.
You have never heard it so quiet. The town holds its breath. A dog barks, a long way off. The last sparks fall, one after another, from the mouth of the furnace, tick-tick-tick, like the final drops of a tap.
The glaziers come out of the works. There are two thousand of them. They stand in the yard in the pale pre-dawn, in their wet leather aprons, black with soot, looking at the dark chimneys. They do not speak. A few take off their caps. An old woman sits down on a coil of rope and puts her head in her hands.
“It’s over,” says Bator, hoarsely.
“It isn’t,” says Ren Qiao. “It’s only begun.”
> force | Look at the town. | furnace_a2s6
> truth | Stand with the glaziers. | furnace_a2s6
> quiet | Listen. | furnace_a2s6
> mercy | Sit with the old woman. | furnace_a2s6

=== furnace_a2s6 | Soldiers
They come at dawn. A hundred of them, in grey, from the barracks at the east end of town. They tramp up the cinder-track in column, led by a young lieutenant on a pony, and halt at the head of the yard. Their rifles gleam. Their faces are set. The lieutenant is shouting something, but the wind takes it.
The glaziers stand in a dense dark mass facing them. They carry shovels and tongs and hooked iron rods. They are two thousand to a hundred. They do not look at all afraid.
Bator steps forward. He lifts both hands, open, to show they are empty.
“We’re not going to fight,” he says in a rough bellow. “We’re going home.”
The lieutenant lowers his rifle a fraction. “What?”
“Home. It’s the end of the shift.” Bator lifts his chin. “It’s a long walk. We’d be obliged if you’d move.”
The lieutenant stares. He glances back at his line. A few of the soldiers have lowered their weapons. One, a boy, is crying.
“You’re rebelling,” says the lieutenant, uncertainly.
“No, sir,” says Bator. “We’re *walking.*”
> force | Stand firm. | furnace_a2s7
> truth | Step forward. | furnace_a2s7
> quiet | Hold your breath. | furnace_a2s7
> mercy | Smile. | furnace_a2s7

=== furnace_a2s7 | Two Thousand Walking
They go in a river. Two thousand glaziers, with their wives and their children and their cooking-pots, flowing out of the yard and up the track, a dark slow tide of leather and soot. They sing as they go. It is an old furnace-song, rough and plain, with a refrain like a hammer: *Pour it hot, pour it clean, pour it for the one unseen.* The soldiers part for them. No one lifts a rifle.
The lieutenant is left alone in the road, on his pony, with his mouth open. He watches them pass. At the end of the column an old woman stops in front of him. She reaches up and pats his boot.
“Thank you for not shooting,” she says. “I knew your mother.”
He turns scarlet. “I... ma’am...”
“She was a good girl,” says the old woman. “She’d be proud.” She goes on up the track.
The lieutenant sits his pony for a very long time. Then, slowly, he dismounts. He takes off his cap. He hangs it on the saddle-horn and follows.
Behind him, in ones and twos, the soldiers go too.
> force | Watch. | furnace_a2s8
> truth | Walk with them. | furnace_a2s8
> quiet | Hold the Elder’s arm. | furnace_a2s8
> mercy | Smile. | furnace_a2s8

=== furnace_a2s8 | The Dark Dome
By noon the town is empty. You walk through the Works alone, in the stillness, past the cold dome and the silent casting-floor. Dust hangs in the sunbeams from the skylights. A single wet footprint dries on the iron floor. The air still smells of coal, but it is the smell of something that has stopped.
The Mother sits in her shell like a banked fire. You put a hand on the brick. It is warm, like a sleeper’s cheek.
Kwan Dei is sitting on an upturned bucket at the foot of her, in his silk waistcoat, with his napkin still in his collar. He has been there since dawn. He is staring at the furnace with a face of desolation.
“Forty years,” he says. “My father stoked her. His father laid the bricks.” He turns his head. “You have killed a thing that was alive.”
“It was killing people.”
“It was *making* them.” His moustache trembles. “They had work. They had wages. They had a place.”
“They had a rota of deaths.”
“Aye.” He looks at his hands. “That too.”
> force | Sit beside him. | furnace_a2s9
> truth | Say it was needed. | furnace_a2s9
> quiet | Look at the furnace. | furnace_a2s9
> mercy | Offer him tea. | furnace_a2s9

=== furnace_a2s9 | What Kwan Chose
He doesn’t stay. He goes to his office, and you hear the creak of a drawer. When he comes out he has a satchel over his shoulder and a roll of papers in his fist. He is pale. He is trembling. He looks like a man who has decided something very large and very small.
“The books,” he says. “The real ones. Not the ones I showed the Censor.” He holds out the roll. “All the lots. All the names. Forty years of them.”
You take it. It is heavy.
“I kept them,” says Kwan Dei, in a husky voice. “I don’t know why. I never meant to... I only thought, if no one else was going to count, someone should.” He wipes his nose on his napkin. “I think I was ashamed.”
“Thank you.”
“Don’t.” He takes off his waistcoat. He folds it carefully, and lays it on the bucket. “I am not a good man. I was merely tidy.”
He picks up his satchel. He walks out of the yard, in his shirtsleeves, into the pale afternoon.
Behind him the Mother ticks, cooling, like a clock.
> force | Open the books. | furnace_close | +furnace_drowned
> truth | Nod. | furnace_close | +furnace_drowned
> quiet | Watch him go. | furnace_close | +furnace_drowned
> mercy | Call after him. | furnace_close | +furnace_drowned

// ---------------------------------------------------------------- a3: sand
=== furnace_a3s1 | The Wharf
The barges come in at dawn, flat black hulls piled with barrels, each stencilled in red with a single character. A gang of porters unloads them, rolling the barrels down planks onto trolleys, which are wheeled along the quay and into a long brick shed. A clerk checks each against a list. Another stamps it. A third, with a bored face, puts a chalk mark on the lid.
“Three hundred a day,” says Hao Lan, who has been watching from the shadow of a coal-heap with a pencil and a very small notebook. “They arrive by sea. They go straight into the shed. They’re opened by hand.”
“Who opens them?”
“A man named Tuhin. An apprentice.” She flips a page. “He is fifteen. He has the key.” She taps the pencil on her teeth. “Everything flows through him. If a barrel goes in sand, it comes out sand.”
“You want to switch the barrels.”
“I want to switch the *ash.*” Her eyes glint. “It’s the same grade of powder. Red sand from the northern dunes. Fine as flour.” She snaps the book shut. “If the treads are cast without the dead, they are only glass.”
> deceit | Ask how. | furnace_a3s2
> truth | Say it is sabotage. | furnace_a3s2
> quiet | Watch Tuhin. | furnace_a3s2
> mercy | Ask what happens to the ash. | furnace_a3s2

=== furnace_a3s2 | The Apprentice
He is thin and sallow and quick, with a cowlick and a leather apron too big for him, and he is eating a boiled potato on the wharf with the careful speed of the underfed. He looks up as you approach. He swallows.
“I’m not supposed to talk to strangers,” he says.
“We’re not strangers.”
“You’re new.”
“Yes.”
“That’s the same thing.” He wipes his hands. “What do you want?”
You tell him. You tell him all of it, quietly, on the quay, in the grey light: the barrels, the ash, the names. Hao Lan stands a little apart and does not speak. Tuhin listens with the potato growing cold. At the end of it he sets it down on a post.
“I know,” he says.
“You know?”
“What’s in the barrels.” His voice is very small. “I open them. I can smell it. It smells of... people.” He wets his lips. “I thought if I didn’t say, it would stop.”
“It hasn’t.”
“No.”
He looks at the potato.
“What do you want me to do?” he whispers.
> deceit | Tell him. | furnace_a3s3
> truth | Say it is his choice. | furnace_a3s3
> quiet | Wait. | furnace_a3s3
> mercy | Say you are sorry. | furnace_a3s3

=== furnace_a3s3 | Sand
“Nothing,” you say. “Nothing that will get you hurt.” You hand him a paper. It is a single sheet in Hao Lan’s neat Chancery hand: a manifest, stamped and sealed, for one hundred and eleven barrels of fine red northern sand. “These will arrive on the six o’clock barge. They are marked as ash. They are not.”
“How do you know the stencil?”
“We copied it.” Hao Lan produces a cut-out template of tin. “It took an hour.”
“And the barrels?”
“We bought them.” She smiles faintly. “From a cooper in the town. Plus the sand. It was very cheap.”
Tuhin looks at the paper. He looks at the template. He looks at Hao Lan with something dangerously close to awe.
“You’re a *forger,*” he says.
“I prefer ‘amanuensis.’”
“What does that mean?”
“A forger with good manners.” She tilts her head. “All you have to do is open the right barrels. In the right order. Quietly.”
He chews his lip. He looks at the shed. He looks at the sea.
“All right,” he says, in a thin high voice.
> deceit | Thank him. | furnace_a3s4
> truth | Say he is brave. | furnace_a3s4
> quiet | Pat his shoulder. | furnace_a3s4
> mercy | Promise to keep him safe. | furnace_a3s4

=== furnace_a3s4 | Moving the Dead
The ash must go somewhere. That is the hard part. A hundred and eleven barrels is five tons of burned pages, and one cannot dump it in the harbour. Hao Lan has thought of this. She has arranged, through Yue, through four layers of intermediaries and a man who sells fish, to have it taken by barge to the Wrights’ camp, in the south, and laid in the glass.
“In the glass?” says Gu.
“In the Sea. Where the Spares are.” She holds up her notebook. “It’s the only place that will have them. They’ll be answered, there. They’ll be among their own.”
It is done in three nights. You carry the barrels out of the shed one by one, under cover of the tide, and roll them down the dark quay. Yue loads them onto a lighter. The porters see nothing. The clerks sleep. At each stage someone says a few words over the barrel, quietly, as it passes.
 By the third night you have said a hundred and eleven.
They go out on the tide, in the dark, a long low shape on a black river.
> deceit | Say a word. | furnace_a3s5
> truth | Stand silent. | furnace_a3s5
> quiet | Hold Hao Lan. | furnace_a3s5
> mercy | Light a candle. | furnace_a3s5

=== furnace_a3s5 | A Sandy Batch
The first casting runs the next morning. You watch from a gantry, with Tuhin at your side, pale and shaking. Below you, on the casting-floor, the Mother roars. The glaziers ladle. They pour. Steam rises. The first of the new moulds slides along the rail, glowing orange, into the cooling-pit.
It hisses. It stills.
The overseer’s assistant, a small neat man with a stopwatch, takes the temperature. He peers at the slab. He taps it. He takes out a lens.
“Hm,” he says.
Tuhin’s hand clamps on your arm.
“What is it?” calls the foreman.
“The colour’s off.” The assistant frowns. “It’s clear. Very clear. A bit... *pale.*” He holds it up to the light. “Is it the batch?”
The foreman comes over. He is a big, flushed, weary man. He peers.
“It’s only sand,” he says. “Looks like good sand to me.”
“It lacks the red.”
“Aye. It’ll be the dunes. Different seam.” He shrugs. “Pass it. We’ve a quota.”
Tuhin lets out a long, shuddering breath.
> deceit | Smile. | furnace_a3s6
> truth | Hold his hand. | furnace_a3s6
> quiet | Watch. | furnace_a3s6
> mercy | Whisper thanks. | furnace_a3s6

=== furnace_a3s6 | A Week of Clear Glass
For a week, the treads come out as clean as water. They are lovely things: pellucid, green-tinged, flawless, with no specks. Kwan Dei, the Overseer, is delighted. He examines each with a lens and strokes his moustache. “A new vein of sand,” he tells the assistants, glowing. “The best we’ve had. The Inspector will be most gratified.”
They ship forty a day. They load them on the narrow-gauge train, in straw, and the train takes them inland along the shore to the Stair. By the end of the week there are two hundred and eighty slabs of unmarked glass on their way to the foot of the Heavenly Stair, and not one of them has a name in it.
“What happens when they’re laid?” asks Gu.
“Nothing,” says Hao Lan. “They’re tread-sized glass.” She grins. “They’ll hold anyone. But they won’t *record* anyone.”
“Won’t that matter?”
“They’re supposed to carry the weight of the one who climbs. With no name, there’s no weight.” She spreads her hands. “They’re just very expensive floor.”
Duan Wuyi, listening, has put a hand over his eyes.
“I am,” he says faintly, “a Censor-General. I find I am delighted.”
> deceit | Laugh. | furnace_a3s7
> truth | Pat his arm. | furnace_a3s7
> quiet | Look at the glass. | furnace_a3s7
> mercy | Think of the Stair. | furnace_a3s7

=== furnace_a3s7 | The Inspector’s Man
He arrives on the eighth day, on a grey horse, with a retinue. He is tall and stooped, in an immaculate green coat, with a sallow aristocratic face and a pointed beard. He dismounts in the yard with the elegant weariness of a man who has a good deal of unpleasant work to do. A servant takes his gloves.
“Overseer Kwan,” he says, in a thin cultured voice. “I have received your reports.”
“Honoured Deputy Rao.” Kwan is wringing his hands. “You are most welcome. The works are in splendid order.”
“Indeed.” The Deputy Inspector walks to the nearest cooling-pit and lifts a tread from the rack. He holds it up to the light. “This is very clear.”
“A new vein, sir.”
“It is *too* clear.” He turns it. His pale eyes narrow. “Where are the specks?”
Kwan’s moustache droops. “Sir?”
“The ash. The characters. Where are they?” Rao’s voice is gentle. “I am not mistaken. I have signed for eleven thousand treads in my time. They were never clear.”
In the shadow of the gantry, Tuhin has stopped breathing.
> deceit | Stay hidden. | furnace_a3s8
> truth | Step out. | furnace_a3s8
> quiet | Hold the boy. | furnace_a3s8
> mercy | Whisper to Tuhin. | furnace_a3s8

=== furnace_a3s8 | Caught Out, Almost
It is the Elder who saves him. She walks out of the shadow in her grey coat and stands before the Deputy Inspector with her hands folded, thin and straight and entirely composed. She has put on her Registrar’s badge. She looks, for the first time in weeks, exactly like what she was: the Elder of the Law Hall of Azure Cloud.
“Deputy Rao,” she says. “I regret to say that the fault is mine.”
Rao stares. “Madam Su?”
“I authorised a change in feedstock.” Her voice is dry and steady. “In my capacity as Registrar. I have reason to believe the ash has been contaminated by a fungal blight. Sending it to the Stair would have rendered the treads unsound.”
“A blight.”
“You will find the certificate in the Overseer’s files.” She does not blink. “It is dated eleven days ago. I signed it myself.”
There is a pause. In the pause, Hao Lan, from the gantry above, makes a faint sound like a swallowed laugh.
“I see,” says Rao. His voice is silky. “And it was necessary to substitute sand.”
“It was *prudent.*”
He looks at her for a very long time.
> deceit | Hold your breath. | furnace_a3s9
> truth | Step forward. | furnace_a3s9
> quiet | Watch. | furnace_a3s9
> mercy | Look at Tuhin. | furnace_a3s9

=== furnace_a3s9 | A Lie Backed by a Signature
“Madam Su,” says Rao, at last, “you are, if I may say so, the most remarkable woman I have ever had the misfortune to meet.” He bows. “I accept your certificate. I do not believe a word of it. But I accept it.”
“You are very kind.”
“I am not kind. I am practical.” He turns to Kwan. “The batch will be recorded as blighted. The treads will be returned for re-casting. The ash will be disposed of.” His lips curve. “By burial.”
“Burial?” says Kwan.
“It is what one does with bad ash.” Rao looks at the sea. “At sea. In the usual manner. I trust it has been seen to.”
“It has,” says the Elder.
“I thought it might have.” “Good day, Madam. I hope we meet again, at the Stair. It will be most interesting.”
He mounts. He rides out of the yard at a stately trot, with his retinue behind.
The Elder watches him go. She does not move until he is out of sight. Then she sags against the gantry, and puts her hands over her face, and trembles all over.
Tuhin lets out a squeak.
> deceit | Go to her. | furnace_close | +furnace_sanded
> truth | Hold her. | furnace_close | +furnace_sanded
> quiet | Give her water. | furnace_close | +furnace_sanded
> mercy | Hug Tuhin. | furnace_close | +furnace_sanded

// ---------------------------------------------------------------- a4: the apprentices
=== furnace_a4s1 | Small Aprons
There are forty of them, in a double row, trudging along the cinder-track from the sleeping-shed to the works. They are tiny. The smallest cannot be more than six. Each wears a leather apron cut down from an adult’s, and carries a bucket of water in both hands, slopping. They walk with their eyes on the ground. They do not talk. Not one of them looks up as you pass.
At the end of the line a woman in a drab cap is shepherding them with a stick. She does not use it. She only carries it, as one carries a habit.
“Water-boys,” says Hanming, in a low strained voice. “And girls. They carry to the pits. To keep the floors wet. A glass floor cracks if it dries.” He swallows. “I did it myself. At seven.”
“At seven?”
“It’s the work for the small ones. They’re quick, and they don’t eat much.” His scar twitches. “I used to count the steps. It was four hundred and eleven to the pit, and four hundred and eleven back.”
Gu is staring at the line of children with horror. “Four hundred and eleven,” he repeats.
“They do it forty times a day.”
> mercy | Stop them. | furnace_a4s2
> truth | Ask the woman. | furnace_a4s2
> quiet | Look at the smallest. | furnace_a4s2
> inquiry | Ask where they sleep. | furnace_a4s2

=== furnace_a4s2 | Mother Pei
“Pei,” says the woman in the cap. “Dormitory-matron. I’ve had them eleven years.” She has a worn kind face and a hoarse voice, and tired eyes that miss nothing. “They’re not my own. But I’m what they’ve got.”
“Where are their parents?”
“Dead, mostly. In the works. Or gone.” She nods at a boy of eight, with a bandaged hand. “That one’s father fell in the pit. That one’s mother was a Struck. That one’s are in the Stair.”
“In the Stair?”
“Ascended.” Her mouth twists. “That’s what they call it. They went up in the spring, in the Ceremony. Four hundred workers’ families. They were told it was an honour.” She pulls the cap straight. “The children stayed. They’re wards of the foundry.”
“And you think it’s wrong.”
“I think it’s *Tuesday,*” says Mother Pei, dryly. “I’ve forty to feed and two sacks of flour. I don’t think anything is right or wrong. I think: who’s hungry?”
She looks at you with her tired, shrewd, level gaze.
“What are you going to do about it?” she asks.
> mercy | Say you do not know. | furnace_a4s3
> truth | Say you will help. | furnace_a4s3
> quiet | Look at the children. | furnace_a4s3
> inquiry | Ask how many there are in all. | furnace_a4s3

=== furnace_a4s3 | Three Hundred and Four
“Three hundred and four,” says Mother Pei. “In six towns. I count them each night.” She taps the stick on her palm. “Two hundred in the sheds. Forty here. The rest wherever they can fit.” She snorts. “They’re all the same story. A father fell. A mother was struck. A family was sent up.”
“Is there a school?”
“There’s the Roll. Once a day. Names, ages, who’s fed.”
“Nothing else?”
“Nothing.” She spits, neatly. “I teach them letters in the evenings. By the lamp. With a slate. It’s against the Overseer’s rules, but he looks the other way.”
Hanming is staring at the little line trudging toward the works. “Where would you want them?” he says suddenly.
Mother Pei looks at him. “Wanting’s for the rich.”
“Where?” he says.
She gives a rusty laugh, and sighs.
“The Wrights,” she says. “On the Sea. They have boats and winter stores and a hundred kids of their own. They’d not mind another few.” She shakes her head. “It’s a dream. The foundry owns them.”
“Does it?”
“By the Charter.”
“Duan?” says Hanming.
Duan Wuyi, behind you, has been very quiet. He clears his throat.
> mercy | Look at Duan. | furnace_a4s4
> truth | Say it is wrong. | furnace_a4s4
> quiet | Wait. | furnace_a4s4
> inquiry | Ask about the Charter. | furnace_a4s4

=== furnace_a4s4 | The Charter
“Article eleven,” says Duan Wuyi. He has taken out his pocket-book. His soft face is alight with the cold clarity of a man doing the thing he does best. “Pupils and apprentices bound to a foundry by deed of orphanage may be released upon the petition of a recognised guardian, countersigned by a Censor.” He looks up. “I am a Censor.”
“Aye,” says Mother Pei.
“A guardian must be recognised by the Chancery. Which means someone of standing.” He taps the page. “A matron of eleven years’ service is of standing. I believe you qualify.”
Mother Pei’s mouth falls open. “Me?”
“It would require a petition. A seal. A witness.” He turns to the Elder. “Wanru?”
“I will witness.”
“It will take a week to draft.”
“I can draft in a night,” says Hao Lan, from the back.
Mother Pei sits down on a bucket. She puts her stick across her knees. She is looking at Duan as at an angel with a very dry voice.
“You’re saying,” she says slowly, “that it’s *legal.*”
“Madam,” says Duan Wuyi, “it has been legal for two hundred years.”
> mercy | Smile. | furnace_a4s5
> truth | Say it quietly. | furnace_a4s5
> quiet | Hold your breath. | furnace_a4s5
> inquiry | Ask what the Overseer will do. | furnace_a4s5

=== furnace_a4s5 | Kwan Reads It
He reads the petition at his desk, in his silk waistcoat, with a pencil behind his ear. It takes him a quarter of an hour. He reads it twice. He turns it over and reads the back. Hao Lan, in the chair opposite, sits with her hands folded and her eyes lowered, a perfect picture of innocent attention.
At the end he sets it down. He sighs.
“It’s in order,” he says.
“Yes.”
“The seal is genuine. The Censor’s countersignature is genuine. The Registrar’s witness—” He squints. “Genuine.”
“We do try.”
“I cannot refuse it.” He puts a finger on the page. “I would like to. It would be a great inconvenience. Three hundred and four fewer water-carriers. The pits will dry.” He pushes up his spectacles. “They will need to hire men.”
“At a wage.”
“Quite.” His moustache droops. “It will cost the Concord a very great deal.” He seems to find this unexpectedly funny. A thin, helpless, hysterical smile spreads over his plump face. “It will cost them everything.”
He picks up the pen. He signs.
> mercy | Thank him. | furnace_a4s6
> truth | Nod. | furnace_a4s6
> quiet | Watch the pen. | furnace_a4s6
> inquiry | Ask what he will do. | furnace_a4s6

=== furnace_a4s6 | The Roll Is Called
They gather in the yard that evening, three hundred and four of them in leather aprons, in the red light of the sinking sun. Mother Pei stands before them on an overturned crate with a slate in her hand. She reads the names. She reads them slowly, one at a time. At each, a child puts up a hand and says, “Here.”
It takes an hour. Nobody fidgets.
When she reaches the end she lowers the slate. She looks at the children for a long time, with her tired eyes.
“That’s the Roll,” she says. “That’s the last time I’ll read it in this yard.” Her voice shakes. “Tomorrow we go to the Sea.”
No one speaks. A small girl, perhaps six, at the front of the crowd, puts up her hand.
“Mother Pei?”
“Yes, dear?”
“Will there be water to carry?”
“No.” Her voice cracks. “No, dear. No water to carry.”
“What will we do?”
Mother Pei opens her mouth. She finds she cannot say it. She looks at you.
“Play,” you say.
> mercy | Smile. | furnace_a4s7
> truth | Kneel. | furnace_a4s7
> quiet | Look at the sky. | furnace_a4s7
> inquiry | Ask what play is. | furnace_a4s7

=== furnace_a4s7 | What Play Is
They don’t know. That is the astonishing thing. The little girl asks what the word means, and the matron stands there with her mouth open, trying to explain. Three hundred and four children listen, with grave, polite, anxious faces.
“It’s when you do something,” says Mother Pei, “and it isn’t for anything.”
“Why?”
“Because you like it.”
“Why do you like it?”
“I don’t... ” She falters. “You just do.”
A boy puts up his hand. “Can I do it now?”
“Now?” She gapes. “Aye. If you... certainly. If you like.”
He thinks about it. He looks at the dusty yard, the sooty sky, the huge dark furnace. He picks up a stick. He takes a few steps. He flings it, as hard as he can, into the air. It goes up in a long curve and falls in the dust.
He looks at it. He looks back at the matron.
“Was that right?” he whispers.
Mother Pei bursts into tears.
> mercy | Throw a stick. | furnace_a4s8
> truth | Laugh. | furnace_a4s8
> quiet | Step back. | furnace_a4s8
> inquiry | Ask the boy his name. | furnace_a4s8

=== furnace_a4s8 | A Yard Full of Sticks
By dusk the yard is a bedlam. Three hundred children are running in every direction, shrieking, flinging sticks, rolling in the cinders, chasing a dog, hanging from the gantry, making noise. They have no idea how to do it. They are dreadful at it. They run into each other. They fall over. They sit in the dirt and laugh helplessly.
Mother Pei stands in the middle, her cap off, her grey hair on end, shouting for order. It does not come. She gives up. She laughs, a rusty cackle, and sits on a bucket with her head in her hands.
“I’ve not heard that sound in eleven years,” she says to you.
“Which?”
“All of it.” She wipes her eyes. “The whole racket.”
Hanming has been dragooned into a game. He is down on all fours, with a small girl on his back, galloping round the yard, whinnying. He is red in the face. His scarred cheeks are wet.
You sit beside Mother Pei on the second bucket and watch them. The sun goes down. A star comes out.
“It’s not enough,” she says. “Is it?”
“No.”
“But it’s a start.”
> mercy | Nod. | furnace_a4s9
> truth | Take her hand. | furnace_a4s9
> quiet | Watch the stars. | furnace_a4s9
> inquiry | Ask about the journey. | furnace_a4s9

=== furnace_a4s9 | A Long Line to the Sea
They go in the morning. It is a long straggling procession, three hundred and four children in a double file, down the cinder-track to the shore. They have their aprons on over their coats. Each carries a bundle. Mother Pei walks at the head with her stick, and Hanming at the tail with the smallest on his shoulders. The glaziers have come out to see them off. They stand along the track in their leather, silent, their caps in their hands.
At the shore a flotilla of Wrights’ sledges waits. Nomin’s uncle has come with sixty, to take them to the camp. The children stop and stare. They have never seen the Sea from the outside. It runs away from their feet, shining, endless, a plain of light.
“Is it hot?” asks the little girl.
“No, dear,” says Mother Pei. “It’s glass.”
“Can we walk on it?”
“Aye.”
“Will it break?”
“No.” She hesitates. “I don’t think so.”
The girl puts out one small foot. It touches the glass. It rings.
She looks at you, wide-eyed, and her face splits in a smile that goes from ear to ear.
> mercy | Smile. | furnace_close | +furnace_kids
> truth | Wave. | furnace_close | +furnace_kids
> quiet | Look at Hanming. | furnace_close | +furnace_kids
> inquiry | Ask Mother Pei what next. | furnace_close | +furnace_kids

// ---------------------------------------------------------------- hidden: the furnace listens
=== furnace_h1 | A Tune for the Furnace
You do not mean to. You are standing at the gate of the works, with the throb of the Mother in your chest, and the old tune rises in your throat. It is the one the Sea taught you: a rise and a fall, a catch, a turn, a question at the end. You hum it, low, with your lips shut.
The throb falters.
It is not a pause. It is a stumble, like a heart that has missed a beat. Inside the works, the great steady pulse hitches, steadies, and then, very slowly, begins to match your pitch. You feel it in the soles of your feet. You feel the stones of the gate begin to hum.
“Stop that,” says the clerk in the gate-house, nervously.
You do not stop.
The furnace-glow in the sky above the roofs begins to change. It softens. It loses its hard orange edge and takes on a warm, deep gold, the colour of honey. A sigh goes out of the works, enormous, like a breath let go.
Hanming has seized your arm. “Listen,” he says. His eyes are wild. “She’s *answering.*”
Out of the heart of the Mother comes a note.
> inquiry | Keep humming. | furnace_h2
> truth | Say nothing. | furnace_h2
> mercy | Hold Hanming. | furnace_h2
> quiet | Listen. | furnace_h2

=== furnace_h2 | What the Furnace Sang
It is the same tune. It comes from deep in the brick, from the white-hot heart, in a thousand tiny voices. A glass note, thin and high and shimmering. It sings back the rise and the fall, the catch, the turn. It sings the question at the end.
It is the sound of the dead.
You know it, because you have heard it before, on a Sea at night. A hundred thousand children, answering the roll. Here there are fewer. A few hundred, a few thousand.
*Here. Here. Here.*
“They’re in the glass,” breathes Hanming. “The ones already cast. And the ones waiting in the ash.” His face is wet. “They’re all in the furnace. All of them. And they’re *singing.*”
“What do they want?”
“I don’t know.” He swallows. “To be heard, I think.”
You are heard. You stand at the gate of the Furnace Towns with your eyes shut and the tune pouring out of you, and the Mother Furnace answers, and the whole sky glows with a soft gold light like the inside of a bell.
Slowly, around you, the works fall silent. One by one, the glaziers lay down their ladles.
> inquiry | Keep going. | furnace_h3
> truth | Open your eyes. | furnace_h3
> mercy | Weep. | furnace_h3
> quiet | Stand still. | furnace_h3

=== furnace_h3 | The Pour Stops
They stand in the yard in their hundreds, their ladles at their sides, their faces tilted up. Nobody has given the order. The furnace has stopped of itself. The orange glow has faded to a quiet gold. The great dome pulses, once, twice, three times, like a sleeper turning over, and then lies still.
The works are silent.
“What did you do?” says Foreman-Mother Zhuo, hoarsely. She has come out of the casting floor. She is covered in soot. Her scarred face is stricken, wondering.
“I hummed.”
“She’s been going for forty years.” Her voice cracks. “She’s never gone out. Not once. Not for a fire, not for a flood.”
“She’s not out. She’s resting.”
“Aye.” She closes her eyes. “I can feel her. She’s purring.” She opens them. “Like a cat.”
She looks at you for a long moment. Then, quite abruptly, she takes off her leather cap and bows from the waist.
“Thank you,” she says. “For hearing her.”
She straightens. “The glass is the dead,” she says, in a clear carrying voice. “Isn’t it? We’ve been pouring the dead for forty years. I think she’s been trying to say.”
> inquiry | Bow back. | furnace_close | +furnace_sung
> truth | Take her hand. | furnace_close | +furnace_sung
> mercy | Weep. | furnace_close | +furnace_sung
> quiet | Look at the dome. | furnace_close | +furnace_sung

// ---------------------------------------------------------------- close
=== furnace_close | The Last Shore
You leave the Furnace Towns on the third morning. The railway runs along the coast, the narrow-gauge line to the Stair, and you follow it on foot, with the skiffs left in the care of the Wrights. The cinder-track is black. The sky behind you is a smear of brown. Ahead, on the eastern horizon, very faint and white, a tall thin line rises into the sky.
+[how] furnace_toured | Duan opened the Charter and a glazier asked if the glass was the dead.
+[how] furnace_drowned | You let a canal into the cooling-pit and two thousand people walked home.
+[how] furnace_sanded | A hundred and eleven barrels of ash went to the Sea, and the treads came out clear.
+[how] furnace_kids | Three hundred and four children were given a word, and it was ‘play’.
+[how] furnace_sung | You hummed a tune to a furnace, and it hummed back.
The Elder carries the sample tread, wrapped in a shawl. She has not put it down since the casting-floor. She walks with it against her chest, as if it were a sleeping child, and nobody offers to take it.
“I intend to lay it,” she says. “At the Stair. In the right place.”
“Do you know the place?”
“I know the name.” Her voice is very quiet. “It is on the underside.”
You look at the thin white line on the horizon. It rises into the clouds. It does not appear to end.
“Nine days left,” says Hao Lan. She lifts her notebook. Her face is calm. “I have done the sums. It is exactly enough.”
> truth | Nod. | furnace_close2 | +b5q_furnace
> mercy | Take the Elder’s arm. | furnace_close2 | +b5q_furnace
> quiet | Look at the Stair. | furnace_close2 | +b5q_furnace
> inquiry | Ask how exactly. | furnace_close2 | +b5q_furnace

=== furnace_close2 | The Foot of the World
You reach it at dusk on the fifth day. It is a thing you cannot take in. It rises out of the plain like a single stalk, thin and white and impossibly high: a tower of cut glass a hundred yards wide at the base, narrowing as it climbs, in nine vast tiers, up into the clouds. A spiral of steps winds round it, a ribbon of green and gold. The treads catch the last of the sun.
It is the most beautiful thing you have ever seen, and the most terrible.
At its foot a camp has grown up. Ten thousand tents, ranged in rings. Banners of every sect. Cooking-fires. Hawkers. The sounds of drums and gongs. A great murmuring crowd of pilgrims in white, all with their faces turned upward.
The Elder has stopped. She holds the sample tread against her chest.
“There,” she says. “That is the one.” She nods at the lowest step, a plain slab of green at the foot of the spiral. “The first.”
“How do you know?”
“It is the one with my signature,” says Su Wanru. “I laid it myself.”
> truth | Take her arm. | hub_b5_b | bond:duan+3
> mercy | Stand with her. | hub_b5_b | bond:duan+3
> quiet | Look up. | hub_b5_b | bond:duan+3
> inquiry | Ask how. | hub_b5_b | bond:duan+3

`,
  scenarios: String.raw`
$ SU_FURNACE_TREAD | trust+3 respect+4 fear+4 | elder | The Elder reads her own signature in a block of cast glass.
hostile: It was on the bottom of a tread. In reverse, the way a mirror shows it. My hand, my mark, a date. Beneath it a line of tiny characters, the name of a child. I had signed the order for that tread. I had not known it would be made of her.
wary: The foreman handed me a sample, to take home. I said I did not wish it. She said, ‘Everyone is given one.’ I took it. It is in my coat. It is the weight of a loaf of bread.
neutral: The glass is clear green and very beautiful. One holds it up to the light and sees the names inside it, a drift of tiny black characters, like fish in a pond. I did not look for mine. I found it anyway.
warm: Hanming took my arm when I swayed. His hand was scarred and warm. He said: ‘Come out, it’s too hot.’ I went. It is a long time since anyone has led me by the arm out of a room.
devoted: I have decided that the treads must be put back. Each in its place, with its name uppermost, so that whoever climbs may read it. If the Stair is to be built of children, let it be built where they can be seen.
`,
  remarks: String.raw`
% furnace_zhuo_later | since:b5q_furnace>=4 | hanming | Foreman-Mother Zhuo sent a sample of her best glass, cut as a lens. It is the clearest I have seen. She said it was for looking at things honestly. I have put it in my pocket and look through it at everything.
% furnace_tuhin_later | since:furnace_kids>=3 | gu | The apprentice, Tuhin, has been teaching Pim’s young Wrights to blow bubbles. They are all very bad at it. The bubbles are enormous and burst at once. It is the best sound in the world.
`,
}
