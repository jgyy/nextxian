import type { Arc } from "../types";

/**
 * Book Four, arc fourteen: the Dust Mill. Where the Steppe's red clay meets the first mountains the Concord has built a mill and a
 * foundry: six hundred levy-men and women grind lotus root into Reagent D for the Garrison's tea, and a steel bell the size of a
 * house, the Great Hush, rings the clans into deafness. Four approaches: audit the mill before its own workers (a1, truth), break
 * the gate with the Horse-Keepers (a2, force), swap the shipment for chalk (a3, deceit), and carry out the dust-sick through the
 * culvert (a4, mercy). A hidden route lets Narmandakh ring the counter-note. Cast: Deputy Inspector Lai Ming, Dr. Pema, foreman
 * Ox, Duan Wuyi, Hanming, Gu, Narmandakh, Jargal, Yue Zhaoning, Hao Lan.
 */
export const mill: Arc = {
  id: "mill",
  name: "The Dust Mill",
  scenes: String.raw`
=== mill_entry | Iron Chimneys
You smell it before you see it: a flat, sweetish, chemical smell, like boiled flowers and hot iron. Then the ridge falls away and the valley opens, and the mill lies below you in a bowl of red clay. It is the ugliest thing you have seen on the Steppe. A mile of brick sheds with sawtooth roofs. A forest of tall black chimneys, eleven of them, belching grey. A canal the colour of weak tea. A wall.
Above the roofs, on a tower of iron girders, hangs a bell. It is steel, not bronze. It is the size of a barn. Even from here, at rest, it makes your teeth ache.
Hanming, riding at the tail of the cart with a blanket over his shoulders, has stopped. His scarred face is the colour of cheese.
“I worked there,” he says. “Two winters. Before the levy gave me a rifle.” He wets his lips. “It is called the Mill. The workers call it the Quiet. It is where the dust comes from.”
“Who runs it?”
“A Deputy Inspector. Lai Ming. Young. Clean.” He grimaces. “He believes in it.”
> truth | Ask Duan whether the Concord’s own edict permits it. | mill_a1s1
> force | Notice that the wall has a single gate, and the gate has a single bar. | mill_a2s1 | needs:4
> deceit | Notice a line of Garrison supply carts at the gate, loading sacks. | mill_a3s1
> mercy | Notice a low brick culvert in the canal-bank, and a thin column of people being led out through it in the dusk. | mill_a4s1
> inquiry | Ask Narmandakh to look at the bell. | mill_h1 |  | kurultai_spoke | You do not yet know what the bell-founder would say.

// ---------------------------------------------------------------- a1: the audit
=== mill_a1s1 | The Edict
“It does not,” says Duan Wuyi. He has not stopped looking at the chimneys. His soft face is stiff. “The Edict of Gentle Hands permits the sedation of the violent insane. In a licensed hospital. Under the signature of a physician. In quantities not to exceed a catty a month.”
“And the Mill?”
“Makes eleven tons a year.” He closes his eyes. “I have read the production figures. I read them in the Chancery, three years ago, and I wrote in the margin: ‘Prodigious demand.’ I thought it was the River Provinces.”
“Where does it go?”
“I am beginning to understand,” says Duan, “that it was never the River Provinces.” He opens his eyes. They are very clear. “I am the Censor-General. I am entitled, under the Concord’s own articles, to inspect any licensed institution on the day of my choosing, without notice.”
“Will they open the gate?”
“They must.” His mouth twists. “It is the one thing they cannot refuse. A rule is a rule.”
He straightens his robe. He takes out his seal.
> truth | Go with him. | mill_a1s2 | npc:SU_MILL_QUIET
> mercy | Say you will stay close. | mill_a1s2
> quiet | Watch the gate. | mill_a1s2
> inquiry | Ask Hao Lan what she can find. | mill_a1s2

=== mill_a1s2 | An Inspection
They open the gate. It is as simple as that. A sergeant in a clean grey uniform reads the seal, goes pale, salutes, and swings the great doors wide. A boy runs ahead with the news. By the time you reach the courtyard a small crowd has gathered: clerks, overseers, a man in a stained leather apron. At the top of the steps stands a slim young man in a pale linen coat, with wire spectacles and dimples.
“Censor-General,” says Deputy Inspector Lai Ming, with a charming bow. “What an honour. I had no idea. We should have prepared.”
“That is why I came unannounced.”
“Of course.” He smiles. “We have nothing to hide. Would you care for tea?”
Duan Wuyi looks at the tray that a servant is carrying. On it sits a small pot and a row of cups. A faint fragrance of camomile and honey rises from the spout.
“No,” says Duan.
“Then perhaps a tour?”
“Yes,” says Duan. His voice is very soft. “I should like to see the books.”
> truth | Follow. | mill_a1s3
> mercy | Watch Lai Ming. | mill_a1s3
> quiet | Look at the tray. | mill_a1s3
> inquiry | Ask to see the workers first. | mill_a1s3

=== mill_a1s3 | The Grinding Hall
It is a hundred yards long. It is lit by skylights, thick with a pale fine haze that hangs in the sunbeams like pollen. Six hundred people stand at long benches. They wear linen masks over their faces and grey smocks, and they grind. Each has a stone and a bowl. Each works with a slow, repetitive, circular motion, the stone rasping on the roots, round and round.
Nobody speaks. The only sound is the grinding. It is a vast soft murmur like surf.
“The Quiet,” whispers Hanming, at your shoulder.
You walk down the aisle between the benches. The workers do not look up. A girl of twelve, small, hollow-cheeked, with a bandaged hand, is working beside a grey-haired man. She grinds. She breathes through the mask in short shallow gasps. When you pass, her eyes follow you, huge, dull, without curiosity. They are the eyes of someone a long way away.
“They are happy,” says Lai Ming, at your elbow. “You see how peaceful? There is no unrest in my mill. Not once in four years.”
“No,” says the Elder, in a dry flat voice. “I should think not.”
> truth | Stop at the girl. | mill_a1s4
> mercy | Hold your breath. | mill_a1s4
> quiet | Look at the skylights. | mill_a1s4
> inquiry | Ask what they are grinding. | mill_a1s4

=== mill_a1s4 | What They Grind
It is lotus root. You know it by the smell, a flat sweetish bitterness that clogs the back of the throat. The roots come in on the canal-barges in great pale bundles, each as thick as a wrist, and are scrubbed, sliced, dried, and ground by hand in the stone bowls. The dust is swept up in long-handled pans and carried to the sieving room.
“We import them,” says Lai Ming, proudly. “From the Law Hall’s walled garden. It was a stroke of genius. The sect has an enormous surplus.”
“It has no surplus,” says the Elder. “It has a garden the size of this room.”
“That was before the expansion.” He beams. “I believe the Registrar’s office arranged it.”
The Elder says nothing. Her face is perfectly still.
“Eleven tons,” murmurs Duan, writing. “From a garden the size of a hall. How many roots is that?”
“I could not say, sir.”
“Roughly four million.” Duan underlines something. “It would take every farm in the River Provinces. It is an impossible figure.”
Lai Ming’s dimples falter. For the first time, he looks uncertain.
“I am sure,” he says, “there is an explanation.”
> truth | Wait. | mill_a1s5
> mercy | Look at the girl. | mill_a1s5
> quiet | Study the ledger. | mill_a1s5
> inquiry | Ask where the roots really come from. | mill_a1s5

=== mill_a1s5 | The Second Garden
It is Hao Lan who finds it. She has slipped away from the tour with her notebook, and she comes back flushed, with a roll of paper under her arm. She takes Duan aside. They talk in whispers. When they return, Duan Wuyi is the colour of ash.
“Deputy Inspector,” he says. “Would you show me the west shed?”
“The west shed is closed for repairs.”
“Then I shall inspect the repairs.”
Lai Ming’s smile is fixed. “Of course.”
The west shed is a long low brick building at the back of the yard. It has no windows. The door is padlocked. A guard in grey stands before it with a rifle. Lai Ming takes a key from his pocket with a not-quite-steady hand and turns it, and the door swings in.
It is dark. It is warm and humid. It smells of earth.
It is a garden. Row on row, under rows of glass lamps, bed after bed of pale green shoots rise from black soil. At the end of each bed stands a tag. Each tag has a name on it.
“Lotus,” says Hao Lan. “Grown on the dead.”
> truth | Step in. | mill_a1s6
> mercy | Hold the Elder. | mill_a1s6
> quiet | Read a tag. | mill_a1s6
> inquiry | Ask whose names. | mill_a1s6

=== mill_a1s6 | A Garden of the Struck
The tags are names. You read them as you walk along the beds, by the light of the glass lamps. They are written in a neat, careful hand, in black ink on white card. Han Pei. Mo Ying. Sunil of the River. A child called Little Bean. Each marks a bed. Each bed is a little rectangle of black soil, the exact size of a grave.
“Burials,” says Duan Wuyi, hoarsely. “It is a cemetery.”
“It is an economy,” says Lai Ming. His voice has gone high. “A circular one. The workers who die are put to good use. I did not originate it. It was in the original plan.”
“Whose plan?”
“The Inspector’s.” He wets his lips. “It is, as I understand it, a very old technique. The lotus does not grow in earth. It grows in names.”
“In whose?”
“The struck.” He swallows. “Those who are struck are not missed. And the lotus will not take root in anything that is mourned.” He gestures with a trembling hand. “It is really very efficient.”
Hao Lan makes a faint sound. She sits down on the edge of a bed.
> truth | Take her arm. | mill_a1s7
> mercy | Hold the Elder. | mill_a1s7
> quiet | Look at Duan. | mill_a1s7
> inquiry | Ask how many beds. | mill_a1s7

=== mill_a1s7 | Seven Thousand
There are seven thousand and sixty-one. Duan counts them with a pencil, row by row, under the lamps, in a voice that does not shake. He does it slowly. He looks at each tag. The workers who were buried, and the ones who were struck, and the ones who were bought. He has written the count in his notebook three times.
Lai Ming has stopped talking. He stands against the wall with his hands behind him, his dimples gone, his pale linen coat damp with sweat.
“You understand,” says Duan, “that the Edict of Gentle Hands makes it a capital crime to inter a living person?”
“They were not living.”
“Were they dead when you buried them?”
Silence.
“Some of them,” says Lai Ming, very low.
Duan Wuyi lowers his pencil. He takes off his spectacles and wipes them with great care on his sleeve. His soft face has a look you have never seen on it before. It is entirely without anger. It is the face of a man who has put down a very heavy weight and found, to his astonishment, that he can stand.
“Deputy Inspector,” he says. “I find you in violation of the Concord’s articles.”
> truth | Stand by him. | mill_a1s8
> mercy | Hold Hao Lan. | mill_a1s8
> quiet | Watch Lai Ming. | mill_a1s8
> inquiry | Ask what happens now. | mill_a1s8

=== mill_a1s8 | A Rule Is a Kindness
He reads it out in the courtyard. It takes an hour. He stands on the steps in the afternoon sun, in his plain grey robe, with the Concord’s seal in his hand, and reads the Edict, article by article, to six hundred silent workers drawn up in rows. He reads the charge. He reads the penalty. He reads, for the first time in his life, the clause he had always skipped: the right of the injured to appeal to the nearest Censor.
“I am the nearest,” he says.
Nobody moves. The workers stare at him with dull wide eyes, as if he were speaking another tongue.
“I wish to hear the grievance of any person in this yard.” His voice is trembling. “You will not be punished. You will not be struck. I swear it by the seal.”
A long silence. A rustle. Then the grey-haired man from the bench, the one who ground beside the child, takes off his mask.
He has a gaunt, lined, kindly face. He wipes his mouth with the back of his hand.
“I have one,” he says, in a cracked voice. “It has been forty months.”
> truth | Listen. | mill_a1s9
> mercy | Step back. | mill_a1s9
> quiet | Look at Duan. | mill_a1s9
> inquiry | Ask his name. | mill_a1s9

=== mill_a1s9 | Forty Months
His name is Ox. He is the foreman. He stands at the foot of the steps and tells it, one slow word after another, with his big hands clasped. It is a plain account. A woman called his wife. A child called Lili. A winter. A levy. A mill.
He talks for twenty minutes. At the end of it six hundred people have taken off their masks. They stand in the dusty yard in the red afternoon, blinking, breathing in the open air, with faces like those of people woken from a very long sleep.
“That is the grievance,” says Ox. “I would like it written.”
“It will be written,” says Duan. His voice is thick. “Every word. In my own hand.”
“And Lili?”
“I do not know.” Duan swallows. “I will find out.”
Ox nods slowly. He turns to the girl with the bandaged hand, who has crept up beside him, and lifts her onto his shoulder. She puts her cheek on his hair.
“That is her,” he says. “She is not mine. But she calls me Da.”
> truth | Bow. | mill_close | +mill_audited
> mercy | Weep. | mill_close | +mill_audited
> quiet | Look away. | mill_close | +mill_audited
> inquiry | Ask Duan what he will write. | mill_close | +mill_audited

// ---------------------------------------------------------------- a2: the gate
=== mill_a2s1 | One Bar
It is a good wall: twenty feet of fired brick, topped with iron spikes, with a banquette along the inside and a sentry-box at every corner. The gate is a pair of iron-bound oak doors, thirty feet high, hung on hinges as thick as your arm, and closed by a single beam of black timber that drops into iron brackets on either side.
Ren Qiao studies it from the ridge with a spyglass. He has been silent for ten minutes.
“It is a very bad design,” he says at last. “One bar. If that goes, the whole gate goes.” He lowers the glass. “I would sack the architect.”
“Can it be broken?”
“By a ram. A big one. Twenty men.” He frowns. “They would see us coming.”
“Not if they were deafened.”
He turns his head. Narmandakh stands on the ridge in her smith’s coat, with a small steel hammer in her hand and a cold grey light in her eyes.
“I can ring the great bell,” she says. “The counter-note. Not for long. Ten minutes.”
“And?”
“And every Garrison man within a mile will be stone-deaf,” she says. “Along with every Listener.”
> force | Ask Jargal. | mill_a2s2 | needs:4
> truth | Say it is too much. | mill_a2s2
> quiet | Look at the tower. | mill_a2s2
> mercy | Ask Narmandakh if she is sure. | mill_a2s2

=== mill_a2s2 | Jargal’s Riders
He comes with four hundred. They ride in over the ridge at dusk, in a long, loose, laughing line, on shaggy ponies and fat black stallions, with red scarves round their heads. They carry spears and lariats and short, curved bows. They make no attempt to be quiet. At their head, on his enormous black horse, Jargal raises one hand and the whole horde halts at once, a wave of manes and breath.
“I am told there is a wall,” he says, with relish.
“There is.”
“I have been wanting a wall.” He beams. “All my life I have been told that the Horse-Keepers cannot take a wall. It is considered a weakness of the clan.” He leans on the pommel. “I should like to find out if that is true.”
“Can you break the gate?”
“Of course not.” He scratches his chin. “That is for the infantry. We are cavalry.” He nods across at the tall, scarred figure on the grey gelding. “But your friend with the sword tells me there is a way to knock the thing down with horses.”
“How?”
“I do not follow it,” says Jargal. “But it involves a rope.”
> force | Plan. | mill_a2s3
> truth | Ask Ren. | mill_a2s3
> quiet | Study the rope. | mill_a2s3
> mercy | Ask about casualties. | mill_a2s3

=== mill_a2s3 | The Rope
It is a hundred and twenty feet of plaited rawhide, as thick as a man’s wrist, looped round the beam of the gate. The horses pull it. Forty of them, in four ranks of ten, with their riders flat to the necks. It is Yue Zhaoning’s idea, borrowed from a story of a Salt-Road wall.
“They never think of the outside,” she says, adjusting the loop. “They bolt it from within, and they think, well, now it is safe. They forget the beam can be pulled from without.”
“How?”
“By the hinges.” She grins. “A hinge is a lever. If you pull sideways on a gate that is barred, the bar bears the weight of the whole door. It has to bend.” She taps the iron bracket. “These are cast iron. They are very hard. And very brittle.”
“They will snap.”
“With a good pull.” She mounts the camel. “Shall we?”
Ren Qiao is at the head of the line, with his sword across his knees, staring up at the dark wall. He does not seem to be listening. His lips are moving.
“What is he saying?” you whisper.
“A prayer,” says Yue. “I think it is for the architect.”
> force | Wait. | mill_a2s4
> truth | Take your place. | mill_a2s4
> quiet | Hold the rope. | mill_a2s4
> mercy | Say a prayer. | mill_a2s4

=== mill_a2s4 | Pull
The horn blows. Forty horses lean into the harness as one, and the rawhide goes taut. It sings. It hums like a plucked string. The oak doors shudder. Dust drops from the lintel. There is a long, rising, protesting groan from the timber, and a splintering from the brackets, and the whole enormous gate heaves, bulges, and stops.
“Again!” roars Jargal.
They pull. Their hooves tear the clay. The horses scream. The beam in its brackets begins to bend. A crack runs up the iron.
On the wall, a bell begins to ring. It is a small alarm-bell, in a sentry-box, sharp and brassy. A shout goes up. A torch flares. Riflemen swarm along the banquette, tiny figures against the sunset.
“Third!” shouts Jargal.
The beam breaks.
It breaks with a noise like a cannon. The bracket goes first, sheared at the root, and the rest follows, with a crash that shakes the ground. The gate, torn from its hinges, falls outward in a vast slow arc and lands on its face in the dust.
For a moment there is complete silence.
Then Jargal screams with joy.
> force | Charge. | mill_a2s5
> truth | Hold your breath. | mill_a2s5
> quiet | Cover your ears. | mill_a2s5
> mercy | Look for the workers. | mill_a2s5

=== mill_a2s5 | Into the Yard
They pour through the gap. Four hundred riders, whooping, in a tide of manes and dust, past the fallen gate and into the mill-yard. The Garrison rifles crack from the walls. A pony screams and goes down. A man tumbles from his saddle. Then the horse-line is among the sheds, and the riflemen on the banquette cannot depress their muzzles enough, and the shooting thins and stops.
You run in behind the horses with your heart slamming. You see it all in flashes. A Listener on a stallion lassoing a rifleman off the wall. A great black gelding jumping a coal-barrow. Ren Qiao, on foot, blocking a stair with a drawn sword and not a mark on him.
Six hundred workers have come out of the sheds and stand in rows, in their grey smocks, in the red light. They have taken off their masks. They are looking at the horsemen with wide, stunned, dawning eyes.
A girl of twelve, small, with a bandaged hand, points.
“Horses,” she says, very clearly. “Da, look. Horses.”
> force | Rally the workers. | mill_a2s6 | needs:4
> truth | Find Lai Ming. | mill_a2s6
> quiet | Watch the walls. | mill_a2s6
> mercy | Reach for the girl. | mill_a2s6

=== mill_a2s6 | The Tower
He has gone up the tower. Lai Ming, in his pale linen coat, is at the top of the iron girders with the great Hush at his elbow, one hand on the bell-rope and the other shielding his eyes. He looks very small against the sky. He is shouting.
“Stop!” he calls. “Stop, or I shall ring it!”
Nobody understands. The riders mill. Jargal rears the black stallion and glares up, vast and red, wiping dust from his face.
“What does he mean?” bellows Jargal.
“He means to deafen us,” says Narmandakh. She has come up beside you. Her thick grey face is stone. “The Great Hush. It is a steel bell. It is tuned to the ear. One stroke will drop every Listener within a mile to their knees.” She lifts her hammer. “He thinks it is a weapon.”
“Is it?”
“It is a very good one.” She shows her teeth. “But he has never heard the counter.”
She hands you the hammer.
“It will take both of us,” she says. “I cannot lift it alone.”
> force | Take the hammer. | mill_a2s7
> truth | Ask what to do. | mill_a2s7
> quiet | Look at the tower. | mill_a2s7
> mercy | Say you are afraid. | mill_a2s7

=== mill_a2s7 | Two Notes
You climb. It is two hundred and nine iron rungs, bolted to the side of the girders, and halfway up the wind gets into your hair. Narmandakh climbs at your heels. She breathes like a bellows. The bell grows enormous above you: a vault of dull grey steel, cold, immense, rimmed with frost.
Lai Ming stands on the platform with one white hand clamped on the rope.
“Go back,” he says. “Please. I do not want to.” His voice is high and young. “It is an awful sound. I have heard it twice. I could not stand for a day.”
“You do not have to.”
“It is my duty.”
“It is a boy’s duty,” says Narmandakh. “And you are a boy.” She puts her hand on the bell. She is very gentle. “I tuned the first of these. It sang. Now it only screams.”
She sets the hammer in your hand.
“There is a place,” she says. “Just under the shoulder. You will feel it. It is where the metal remembers being poured.”
You raise the hammer.
Lai Ming shuts his eyes and pulls the rope.
> force | Strike. | mill_a2s8
> truth | Shout. | mill_a2s8
> quiet | Cover your ears. | mill_a2s8
> mercy | Close your eyes. | mill_a2s8

=== mill_a2s8 | The Hush Cracks
The great bell rings once. It is a low, flat, terrible note, a sound like a vast hand pressed over your ears. The world dims. You cannot hear. You cannot hear your own breathing. A slow numbness spreads from your head down through your shoulders; your knees start to fold.
You strike.
You do not know that you do it. Your arms move. The hammer swings in a long arc, and meets the steel just under the shoulder, at the place where it remembers being poured, and a second note rings out.
It is high, bright, clean. It is a human note, sweet and keen as a bird’s cry, and it runs up the first like a flame up a fuse.
The two sounds meet. They fight. The steel screams. A shiver runs through the whole bell, from lip to crown, and a hairline of white frost shoots across its face.
Narmandakh is laughing.
The bell breaks.
It does not shatter. It splits, quite quietly, from lip to shoulder, in a long clean crack, and the two halves sag apart and sigh. A huge breath of cold air rolls out. The Hush is over.
> force | Hold on. | mill_a2s9 | needs:4
> truth | Breathe. | mill_a2s9
> quiet | Listen. | mill_a2s9
> mercy | Help Narmandakh. | mill_a2s9

=== mill_a2s9 | A Boy on a Platform
He is sitting on the platform with his back against the iron, his spectacles in his lap and his hands over his face. He has not moved. The rope hangs slack. The pale linen coat is spotted with grease.
“I have broken it,” he says through his fingers. “It was the first thing I ever built. I was twenty-eight.” He sobs. “I wanted so much to be useful.”
“You were,” says Narmandakh.
“To them?” He drops his hands. His face is blotched. “I did not know. I did not know about the garden. I thought it was a medicine.”
“You knew,” she says, without cruelty.
“Yes.” He looks at his hands. “I knew a little. I thought if I did not look, it would not be true.” He starts to laugh, helplessly. “It is a terrible quality in an administrator.”
You sit beside him. Below, in the yard, six hundred workers are pouring out of the sheds, and Jargal’s riders are lifting children onto their saddles. The sun is a red coal on the horizon. The air is full of the sound of voices.
It is the first sound the mill has made in four years.
> force | Pull him up. | mill_close | +mill_stormed
> truth | Stay with him. | mill_close | +mill_stormed
> quiet | Look at the yard. | mill_close | +mill_stormed
> mercy | Hand him his spectacles. | mill_close | +mill_stormed

// ---------------------------------------------------------------- a3: the shipment
=== mill_a3s1 | Sacks
They are sacks of pale grey dust, tied with tarred string, each stencilled in black with the legend D. Fifty to a cart. Twenty carts in the line. The carters, in Garrison blue, lounge on the shafts and chew, while a gang of workers in masks heave the sacks aboard. A clerk with a clipboard ticks them off. Another stamps each with a wax seal.
“A convoy,” says Yue Zhaoning, with her spyglass. She is crouched in the gully beside you. “Eighty catties a sack. A thousand sacks. It goes to the Fort. To the Garrison.” Her face is hard. “Every week.”
“Where does it end up?”
“In their tea.” She lowers the glass. “Every barracks. Every school. Every lamp-oil store.” Her voice is flat. “They have been putting it in the water at Tsagaan since the winter. The Listeners drink it too.”
“How do we stop it?”
“We don’t.” She shrugs. “We change it.”
Hao Lan has stopped writing. She raises her head.
“I have a thought,” she says.
> deceit | Ask what. | mill_a3s2
> truth | Say it is risky. | mill_a3s2
> quiet | Watch the carters. | mill_a3s2
> mercy | Think of the workers. | mill_a3s2

=== mill_a3s2 | Chalk
“It is only chalk,” says Hao Lan. “White chalk. The same grade as the dust. It is cheap and fine and it takes a stencil.” She flips a page. “I have seen four of these shipments through the Chancery books. They are never opened. They are never tested. A sack is a sack.”
“They weigh the same?”
“Within a catty.” She taps. “I can match the seals. Shu Ning would have done it better. But I am quite good.”
“And the real dust?”
“Goes into a barrel of lye,” says Yue, with satisfaction. “At the bottom of the canal.”
“The workers will notice.”
“No. They grind. They don’t look.” She gives a short laugh. “It is the whole philosophy of the Quiet. Nobody checks the sack.”
“And the Garrison?”
“Will drink tea,” says Hao Lan, “with chalk in it. For about three weeks. Before somebody gets suspicious.” She lifts her chin. “And in three weeks, the tea will have no dust at all.”
Hanming, in the gully, has gone very still.
“Three weeks,” he says. “Do you know what that does?”
> deceit | Ask. | mill_a3s3
> truth | Look at him. | mill_a3s3
> quiet | Wait. | mill_a3s3
> mercy | Take his arm. | mill_a3s3

=== mill_a3s3 | What Three Weeks Does
“It wears off,” says Hanming. His scarred face is tight. “The dust. In about a fortnight. You start to feel things.” He licks his lips. “I was on the tea for four years. I stopped, when I deserted. For a week I shook. I wept. I screamed in the night. It was like being skinned.” He wipes his mouth. “Then it was better.”
“Then it is a kindness?”
“It is the worst week of a man’s life.” He looks at the ground. “For six hundred children in a school. For eight hundred soldiers. All at once.”
“They will be frightened.”
“They will be fully awake.” He gives a bleak smile. “It will be the first time in years. They will see where they are. They will remember who they were taken from.” He shakes his head. “Some of them will not want to.”
“Should we do it?”
“I do not know.” Hanming’s voice cracks. “But I would have wanted someone to.”
Hao Lan puts her notebook away. She takes his hand, quite simply, and holds it.
> deceit | Nod. | mill_a3s4
> truth | Say you will go through with it. | mill_a3s4
> quiet | Look at Yue. | mill_a3s4
> mercy | Hold Hanming. | mill_a3s4

=== mill_a3s4 | A Chancery Clerk
She goes in as a clerk. It is the only way. She has the forms, forged and sealed, the clean grey robe, the spectacles, the clipboard. She walks up to the gate at noon with a basket of pens and a sheaf of requisitions, and says in the bored nasal drone of every Chancery messenger since the dawn of time that she has come on behalf of the Inspector’s office to countersign the weekly manifest.
The sergeant squints at the seal. He squints at her.
“Nobody told me,” he says.
“Nobody ever does.” She sighs. “It is the first rule of the service.”
He laughs. He lets her in.
She spends two days inside. She makes herself useful. She runs messages. She sorts invoices. She is seen at every door with her clipboard, dutifully ticking things, and at no door is she challenged. On the second night she comes out, at the loading dock, in the dark, with the grey robe stained and a smear of chalk on her cheek.
“It is done,” she whispers. “Fourteen sacks, so far. I only needed seven.”
“Why fourteen?”
“I got carried away,” says Hao Lan.
> deceit | Smile. | mill_a3s5
> mercy | Embrace her. | mill_a3s5
> quiet | Check the sacks. | mill_a3s5
> mercy | Ask if she is unhurt. | mill_a3s5

=== mill_a3s5 | The Weighing
It nearly goes wrong at the scales. The Fort’s quartermaster, a fat red unpleasant man with a bad cold, insists on re-weighing every tenth sack. He does it himself, with a grunt, on a great brass balance, in the loading-bay, with the carts drawn up in rows.
You watch from the shadow of the gate, holding a lantern, pretending to be a carter.
He weighs the first. He frowns. He weighs the second. He wipes his nose with a large spotted handkerchief.
“Light,” he says.
Your heart stops.
“Light by a quarter-catty,” he says, to the clerk. “Check the moisture.” He sneezes. “It’s the damp. They get careless in the winter.”
“Yes, sir.”
“Make a note.” He weighs a third. He grunts. He sneezes again, enormously. “Oh, pass them all. I’ve a head like a drum.”
He waves a hand at the sacks and totters off, blowing his nose, toward the officers’ mess and a hot toddy. The clerk shrugs, and ticks the whole line.
Behind you, in the dark, Yue Zhaoning lets out a long, shaky breath.
> deceit | Move. | mill_a3s6
> truth | Breathe. | mill_a3s6
> quiet | Hold the lantern. | mill_a3s6
> mercy | Wait. | mill_a3s6

=== mill_a3s6 | The Real Dust
It goes down in the canal at midnight. Forty sacks, under a layer of quicklime. Yue and Temur do it from a punt, by the light of a shuttered lamp, with the quiet efficiency of professional smugglers. Hao Lan sits in the stern, with her hands in her lap, and watches the dust sink. It goes down with a faint grey cloud and does not come up.
“It will not hurt the fish?” she asks.
“Lye does not hurt fish,” says Yue. “It dissolves the dust. I am told the roots are very poisonous in the water.” She shrugs. “They will know in a week.”
“Who?”
“Everyone downstream.” Her eyes glint. “They will wake up one morning and find a pale scum on the river. They will wonder what it was.”
The last sack disappears. The water closes over it.
A voice from the bank says, politely: “I beg your pardon.”
You freeze.
A figure stands at the edge of the canal in the starlight. It is slight, young, in a pale linen coat, with wire spectacles. It holds a lantern.
“I thought,” says Deputy Inspector Lai Ming, “that I heard splashing.”
> deceit | Say nothing. | mill_a3s7
> truth | Come out. | mill_a3s7
> quiet | Keep still. | mill_a3s7
> mercy | Lower the oar. | mill_a3s7

=== mill_a3s7 | Lai Ming Sees
He looks at the punt for a long time. His lantern throws a golden fan across the black water. It lights Yue’s face, set and wary, and Temur’s, sullen under his white hat, and Hao Lan’s, small and pale. It lights the last of the sacks, sinking.
“That is a good deal of dust,” he says.
“It is,” says Hao Lan.
“Is it ours?”
“It was.”
“I see.” He pushes his spectacles up his nose. His voice is quite steady. “And what have you replaced it with?”
“Chalk.”
“Ah.” A pause. “The same grade?”
“The finest.”
“Good,” says Lai Ming. He seems to be thinking about something else. “It would have been unfortunate if it did not take the stencil.” His round pink mouth wobbles. “I had always wondered how long it would take someone to think of it.”
“Think of what?”
“Nothing,” says the Deputy Inspector. “It does not matter.” He sets the lantern down on the bank, with immense care. “I think I must have been asleep.”
He turns, and walks away.
> deceit | Wait. | mill_a3s8
> truth | Call after him. | mill_a3s8
> quiet | Watch. | mill_a3s8
> mercy | Let him go. | mill_a3s8

=== mill_a3s8 | The Deputy Inspector Sleeps
He sleeps for three days. At least, he does not leave his office. The clerks report that he is working, behind a closed door, on a very long letter. A servant takes in meals and brings them out untouched. On the fourth morning he walks out onto the steps in his pale linen coat, with the letter in his hand, and reads it aloud to the assembled mill.
It is his resignation. It is also a confession. It runs to forty pages. It names the Inspector, and the Registrar’s office, and the quartermaster, and the original plan. It lists, with painful precision, the seven thousand and sixty-one.
When he has finished he folds it, and puts it in an envelope, and addresses it to the Censor-General.
“I should like it to go by the next courier,” he says. “I have written a copy for the Colonel, and one for each of the clans.”
“They will hang you,” says the sergeant.
“Probably.” He smiles. His dimples are back, but they look different. “I find I do not mind. It is the first time I have said anything true since I was twenty.”
> deceit | Watch from the gully. | mill_a3s9
> truth | Applaud. | mill_a3s9
> quiet | Look away. | mill_a3s9
> mercy | Hope. | mill_a3s9

=== mill_a3s9 | Three Weeks
It is Hao Lan who counts. She keeps a tally in her notebook, in small neat marks, one for each day. Day one: tea. Day two: tea. Day nine: a soldier at the Fort weeps at breakfast and cannot say why. Day twelve: a school-teacher walks out of a lesson and does not come back. Day fifteen: seven men of the Garrison desert in a body.
On the twentieth day a courier arrives from Tsagaan with a letter in a plain brown envelope. It is from the Colonel. It is three lines long. It says: I have stopped the tea. I am told it was chalk. Thank you.
Hao Lan reads it out. She reads it again. She sits for a long time with the letter on her knee and her hands folded over it.
“I did not know,” she says at last. “That you could do it with a lie.”
“It was a good one.”
“It was a very good one.” She shakes her head. “It was the best I ever told.”
She looks at the letter. Her small face is bright and troubled.
“I am not sure I should be pleased,” she says. “But I am.”
> deceit | Smile. | mill_close | +mill_switched
> mercy | Embrace her. | mill_close | +mill_switched
> quiet | Look at the sky. | mill_close | +mill_switched
> mercy | Hold her hand. | mill_close | +mill_switched

// ---------------------------------------------------------------- a4: the culvert
=== mill_a4s1 | A Thin Column
They come out at dusk, through a low brick arch beside the canal, in a thin file. They are shuffling, shuffling, shuffling. They are grey, stooped, in masks. They lean on one another. A few are on stretchers. They go up the bank and into the long grass and disappear.
“The sick,” says Hanming, softly. “They send them out to die. It is a regular thing. A hundred a week.” His mouth is tight. “They say it is an ordinary wastage. They say it is a kindness. A man who is coughing blood is no use to a grinding-bowl.”
“Where do they go?”
“Nowhere.” He shrugs. “They walk until they fall.”
The figure in black has turned. She is a woman of fifty, small and neat, with iron-grey hair under a black cap and sharp quick eyes behind round spectacles. She has seen you. She stands very still, in the lantern light, with one hand raised.
“Are you from the Mill?” she calls.
“No,” you say.
“Thank Heaven.” She comes toward you. “Then you can help.”
> mercy | Go to her. | mill_a4s2
> truth | Ask who she is. | mill_a4s2
> quiet | Look at the sick. | mill_a4s2
> inquiry | Ask where the sick are going. | mill_a4s2

=== mill_a4s2 | Dr. Pema
“I am the physician,” she says. “Or I was.” She has a precise, clipped, weary voice. “Pema. Nine years in the infirmary. I was dismissed in the spring, for asking questions, and I have been working from the culvert since.” She holds out a gloved hand. “I count them out. Then I bring them to a barn on the hill. I have forty beds.”
“Forty?”
“There are two hundred and eleven in the barn tonight.” She gestures. “They lie in the straw.”
You look at the column. A boy of fourteen lies on a door, his chest heaving. He has a mask over his nose, soaked dark.
“What is wrong with them?”
“The dust.” She says it simply. “It gets into the lungs. A little at a time. It is not the poison that kills. It is the sleep. It sets like plaster.”
“Can it be cured?”
“I think so.” She pushes up her spectacles. “I have a recipe. From a friend who knew the Law Hall’s healer. It needs a root I cannot find, and nine days, and a great deal of hot water.” She meets your eyes. “I have been waiting for someone who could carry water.”
> mercy | Roll up your sleeves. | mill_a4s3
> truth | Say you will. | mill_a4s3
> quiet | Look at Hanming. | mill_a4s3
> inquiry | Ask what the root is. | mill_a4s3

=== mill_a4s3 | The Barn
It is a long low barn on the hillside, with a leaky roof and a dirt floor. Two hundred and eleven people lie in the straw. Some are asleep. Some are awake, staring at the rafters, quite silent. A boy is coughing. A woman is talking softly to nobody. The air is thick and warm and smells of damp wool.
You work for nine days.
You carry water. You boil it in a copper cauldron over a smoky fire, in relays, from the stream. You wash. You feed. You turn the sick in their straw. Gu comes, with his shy gaunt face and his sleeves rolled, and does everything you do, twice as well. Hanming sits with the dying. The Elder helps, in her stiff, correct, reluctant way, bringing cups.
At the end of the second day, Dr. Pema looks up from a bedside and says, quietly: “You do not tire.”
“I am tired.”
“You do not mind it.” She frowns. “Most people do. They are afraid of the smell.”
“I have smelled it before,” you say.
She does not ask where.
> mercy | Work. | mill_a4s4
> truth | Say you grew up near a hospice. | mill_a4s4
> quiet | Fetch the cauldron. | mill_a4s4
> inquiry | Ask about the root. | mill_a4s4

=== mill_a4s4 | The Root
It is called the white thorn, and it grows in the limestone gullies of the foothills. Dr. Pema has been looking for it for a month. Gu finds it on the fourth day, by a stream, half-hidden under a rock. He kneels in the mud with his bare hands and digs.
“It is lovely,” he says, holding it up. “Look at the way it twists.”
Pema takes it as one takes an infant. She sniffs it. She nods, slowly, and her eyes fill.
“I thought it was extinct,” she says. “My master said it had died out in his grandfather’s time.”
“It was growing under a rock.”
“It has been growing under a rock for fifty years.” She wipes her cheek with a wrist. “Nobody ever looked.”
She boils it. It takes a night. In the morning the brew is clear and bitter and the colour of weak amber. She pours it into a hundred small clay cups and carries it down the rows of the sick, one by one.
“Drink,” she says, to each. “It tastes of nothing. It will give you back your own name.”
> mercy | Help pour. | mill_a4s5
> truth | Watch. | mill_a4s5
> quiet | Hold a cup. | mill_a4s5
> inquiry | Ask how long it takes. | mill_a4s5

=== mill_a4s5 | The First to Wake
It is the boy of fourteen. He has been lying on his door for six days with his mouth open, and in the grey of the seventh morning he sits up. He does it all at once, like a puppet when the string is pulled. He looks round the barn with wide, shocked, blinking eyes. He licks his lips. He says in a hoarse thin voice:
“Where is my mother?”
Nobody answers.
He looks at his hands. He looks at the straw. He touches his face, and finds the mask has gone, and his mouth begins to tremble. “It was snowing,” he says. “I was in the yard. I was waiting for the bus.”
“What year is it?” says Dr. Pema, kneeling.
“It’s the Year of the Rat,” he says. “I’m thirteen.” He stops. “I think I am older.”
“You are fourteen.”
“I was thirteen a minute ago.” He starts to cry. He does it very quietly, with his mouth shut. “I lost a whole year. It was like falling asleep on a cart.”
She puts her arms round him. He clings.
> mercy | Look away. | mill_a4s6
> truth | Stay. | mill_a4s6
> quiet | Pour another cup. | mill_a4s6
> inquiry | Ask what he remembers. | mill_a4s6

=== mill_a4s6 | A Barn Full of Mornings
They wake over four days. They wake in ones and twos, in the grey dawn, and each wakes the same way: with a start, and a stare, and a blurted word. A mother’s name. A town. A tune. By the end of the week the barn is full of sitting-up people, wrapped in blankets, holding their cups, speaking in low voices to the people on either side. A woman is knitting. A man is complaining about the porridge.
“I had forgotten,” says Gu quietly, at your elbow. “How loud people are. When they’re alive.”
“It is a good sound.”
“It is.” He hugs his knees. His eyes are shining. “I think I will remember this. When I am old.”
You stand in the barn door in the morning light, with a bucket in each hand. Hanming is on a stool at the foot of the nearest bed, mending a sock. He is telling a story. The patient, a stout old woman, is laughing so hard she has to be thumped on the back.
“I never knew he was funny,” says Gu.
“He was always funny,” you say.
“No. I mean—” Gu stops. “I mean I never knew. I was four.”
> mercy | Smile. | mill_a4s7
> truth | Put down the buckets. | mill_a4s7
> quiet | Listen. | mill_a4s7
> inquiry | Ask Hanming. | mill_a4s7

=== mill_a4s7 | A Brother’s Story
“There was a goat,” says Hanming. He says it to the stout old woman, but he is looking at Gu, and his scarred face is a little pink. “She was called Brambles. She belonged to the neighbour. She ate everything. One night she ate the washing, every last stitch, and when my mother came out in the morning there was a goat in the yard wearing a pair of my father’s trousers.”
The woman screams with laughter.
“I was ten. I thought it was the funniest thing that had ever happened. I laughed for a week.” He is crying and smiling at once. “And Mother said, ‘Hanming, if you don’t stop, you’ll burst.’ And I said, ‘I’ll burst, then, I don’t mind.’”
“Did you burst?” says Gu, in a small voice.
“No.” Hanming looks at him. “You were two. You were in a basket by the stove. You laughed. You did not know what it was about.” His voice breaks. “You just laughed because I did.”
Gu’s hands are over his mouth.
He has never heard the story. He has never known there was a goat.
> mercy | Put an arm round Gu. | mill_a4s8
> truth | Step aside. | mill_a4s8
> quiet | Wait. | mill_a4s8
> inquiry | Ask Gu what he is thinking. | mill_a4s8

=== mill_a4s8 | Carrying Them Out
They carry them out over three days, in carts that Yue has begged from the caravans. Two hundred and eleven people. The Listeners are waiting at the ford with soup. Tamar’s clan has laid out felts.
At the head of the column, on a mule, rides Dr. Pema. She has put on her black cap and her round spectacles. She holds the reins very lightly.
“I will not go back,” she says. “To the infirmary. They have a sign above the door that says Gentle Hands. I find I cannot stomach it.”
“Where will you go?”
“Wherever there are sick.” She smiles. It is a small cracked smile. “I am nine years behind.”
She looks over her shoulder at the mill, a smudge of brick and chimneys on the horizon, shrouded in its grey cloud. The great bell on its tower is a tiny speck.
“Do you suppose they will close it?”
“I do not know.”
“No.” She turns back. “Nor do I. But there are two hundred and eleven fewer coughs in it than there were.”
> mercy | Ride beside her. | mill_a4s9
> truth | Salute. | mill_a4s9
> quiet | Look back. | mill_a4s9
> inquiry | Ask what she wants. | mill_a4s9

=== mill_a4s9 | A Name for the Barn
They have to call it something. Two hundred and eleven is a village, and a village needs a name, and the Listeners are scrupulous about such things. They hold a small ceremony at the ford, under a thorn tree, at sunset. Tamar presides. She sits in her red coat on a heap of felts, with her blind face lifted, and asks the survivors to speak.
“It was called the Barn,” says the boy of fourteen. He is standing, with a blanket round him. “That is all it was ever called. We said: take me to the Barn. We said: I am going to the Barn.” He swallows. “It was what you said when you were going to die.”
“It will not be called that,” says Tamar.
“What, then?”
She turns her head to Dr. Pema. “You are the physician.”
“I am,” says Pema, startled.
“Give it a name that is a thing a doctor says.”
Pema thinks. She looks at the tired crowd in the blue dusk, wrapped in blankets, drinking tea, talking.
“Waking,” she says at last. “It was called Waking.”
“Waking,” repeats Tamar. She smiles. “A good name. It will do.”
> mercy | Smile. | mill_close | +mill_ward
> truth | Repeat it. | mill_close | +mill_ward
> quiet | Look at the sky. | mill_close | +mill_ward
> inquiry | Ask Tamar what she hears. | mill_close | +mill_ward

// ---------------------------------------------------------------- hidden: the counter-note
=== mill_h1 | The Bell-Founder Listens
She does not need to climb it. She stands at the foot of the iron tower, in the red dust, with her head tilted back and her hand flat on a girder, and she listens for a full minute. A cold wind stirs the loose hair at her neck. The great steel bell hangs above her, silent, enormous.
“It is a clean casting,” says Narmandakh. “The pour was good. It is a pity.” She drops her hand. “It would have sung for a thousand years.”
“Can it be broken?”
“Of course.” She turns. Her thick grey face has an odd gentleness. “Anything can be broken. The question is whether it can be done kindly.”
“Is there a kind way?”
“There is a way that does not hurt the people in the yard.” She picks up her small hammer and weighs it. “It is a note. Very high, very short. A single stroke, at the shoulder of the bell. It takes both hands and a clear head.”
“You will deafen the Listeners.”
“Only myself,” says Narmandakh.
She looks at you.
“It is a small price,” she says, “for a bell I made.”
> inquiry | Say no. | mill_h2
> truth | Say you will help. | mill_h2
> mercy | Hold her arm. | mill_h2
> quiet | Look at the tower. | mill_h2

=== mill_h2 | A Price She Chose
You argue, but it is not an argument you can win. She has made up her mind. She stands at the foot of the tower in the evening light, small, stocky, grey-faced, with her feet planted and the little hammer in her fist, and she says, with absolute simplicity, that it is the right thing.
“I rang the first one,” she says. “It is only right that I ring the last.”
“You will never hear again.”
“I have heard a great deal.” She smiles. “Four hundred and eleven bells. All of them mine. I have no wish to hear any more.” She taps the steel with a knuckle. “It will be a relief.”
“Let someone else.”
“There is nobody else who knows the note.” She sets her jaw. “I will do it alone. You may keep the others out of range.”
You look at her for a long moment. Then you take the other hammer from the cart, the bigger one, and you hold it out.
“I said alone,” says Narmandakh.
“You said it was a two-handed job.”
She laughs. It is a short, startled bark.
“So I did,” she says.
> inquiry | Climb. | mill_h3
> truth | Walk beside her. | mill_h3
> mercy | Take her hand. | mill_h3
> quiet | Carry the hammers. | mill_h3

=== mill_h3 | The Last Bell
You climb together. She goes first, and you follow with the hammer, and at the top you stand in the wind on the platform, under the vast silent cold of the steel. Below, the mill is a toy. The workers are tiny dots in the yard.
She rings her note. It is not what you expected. It is neither loud nor brazen. It is a thin high clean tone, like a wet finger on crystal, and it goes up into the evening, and the great bell answers. The steel hums. It sings, as it should have, for one long perfect instant: a lovely, terrible, ringing chord.
And then it cracks.
It does it quite gently. A line of white frost runs across the face of the bell. The two halves sag apart, with a sigh. The Hush is over.
Narmandakh lowers her hammer. Her face is quite calm.
She cannot hear the silence. She has put her hands to her ears, and found nothing there. She looks at you, and her mouth moves. She is saying something.
You read her lips.
She is saying: It was beautiful.
> inquiry | Say it was. | mill_close | +mill_note
> truth | Take her hand. | mill_close | +mill_note
> mercy | Weep. | mill_close | +mill_note
> quiet | Nod. | mill_close | +mill_note

// ---------------------------------------------------------------- close
=== mill_close | The Gate Without a Wall
You leave on the fourth morning. The mill lies behind you in its red bowl, a mile of brick and chimneys in the pale sun. Only three of the chimneys smoke. The yard is full of people. Some are digging. Some are sitting on the ground in rows, in the open air, with bowls of soup. A child is flying a kite made of a grey smock.
+[how] mill_audited | Duan read the Edict of Gentle Hands before six hundred workers, and a foreman took off his mask.
+[how] mill_stormed | Forty horses pulled a gate off its hinges, and a steel bell cracked in two.
+[how] mill_switched | Twenty carts of chalk went to the Garrison, and the tea ran clear in three weeks.
+[how] mill_ward | Two hundred and eleven people woke in a barn they would call Waking.
+[how] mill_note | A bell-founder rang her last note, and read your lips.
A great piece of the broken bell lies in the cart, wrapped in canvas. Narmandakh has given it to you. It is a curved shard of grey steel, the size of a washtub, still faintly cold to the touch. She says it will stay cold for a thousand years.
“What am I to do with it?” you ask.
“Carry it,” says Temur. He has a hand on the tailboard. “It is the first Hush bell that was ever broken. The clans will want to see it.” He glances back at the mill. “So will the Colonel.”
“Why?”
“Because he will know,” says Temur, “that it can be done.”
> truth | Nod. | mill_close2 | +b4q_mill
> mercy | Look back. | mill_close2 | +b4q_mill
> quiet | Cover the shard. | mill_close2 | +b4q_mill
> inquiry | Ask what the Inspector will do. | mill_close2 | +b4q_mill

=== mill_close2 | What the Mill Left
They pass the last night at the foot of the ridge, in a ring of stones. It is cold. The stars are very bright. The cart creaks. It is a plain, ordinary, cracked brass bell, calling people to supper.
Duan Wuyi sits beside the fire with a pen. He is writing, in the margin of a ruled page, in small neat characters. He has been writing for an hour.
“A report,” he says, when you ask. “To the Chancery. An account of the Mill, and the Garden, and the figures.” He sets down the pen. “I do not expect it to be read.”
“Why write it?”
“Because it is true.” He rubs his eyes. “And because I have found, this week, that I do not mind being the one who says so.” He gives a small crooked smile. “It is rather like having a new tooth.”
“Painful?”
“Extraordinarily.” He lifts the page to the fire, and the wet ink gleams. “It is a good deal of fun.”
Across the fire, Hao Lan is asleep, curled in her blanket, with a piece of chalk in her fist.
> truth | Smile. | hub_b4_c | bond:gu+3
> mercy | Cover Hao Lan. | hub_b4_c | bond:gu+3
> quiet | Stoke the fire. | hub_b4_c | bond:gu+3
> inquiry | Ask Duan what the report will say. | hub_b4_c | bond:gu+3

`,
  scenarios: String.raw`
$ SU_MILL_QUIET | trust+3 respect+4 fear+4 | elder | The Elder tours a mill where her signature is on the order forms.
hostile: The order is dated the year I became Elder. The signature is mine. The hand is mine. The ink is a shade I have not used since. It is a forgery. It is also, I am forced to admit, an excellent one.
wary: I stood in the grinding hall. I asked a girl what it was she was grinding. She said: my own mother, ma’am, in about a year. She did not say it unkindly. She said it as one gives directions.
neutral: The workers call it the Quiet. I understand the name. In the grinding hall nobody speaks. The machines speak for them. It is the most orderly place I have ever seen.
warm: I find that I want to burn it down. I have never wanted to burn anything. I have been, I think, a person who files things. I did not know this was in me.
devoted: If I am asked what I did at the Dust Mill, I shall say that I read a form I had signed, and that I did not look away. I think it is the only honest thing I have done with my pen.
`,
  remarks: String.raw`
% mill_pema_later | since:b4q_mill>=4 | gu | Dr. Pema has begun to write down the names of every worker she treated at the Mill. She says it will take her until spring. She says it is the first thing she has done in nine years that she is sure about.
% mill_ox_later | since:mill_stormed>=4 | ren | The foreman, Ox, asked whether I would teach him the sword. I said I would teach him to hold it. He said that was all he wanted. He said he had been holding a shovel for so long that he had forgotten what it was to hold something he chose.
`,
}
