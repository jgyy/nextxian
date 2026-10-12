import type { Arc } from "../types";

/**
 * Book Three, arc fifteen: Pao's Shelf. The Songkeepers' gallery holds every banned song in sealed jars, and the ninth verse of the
 * lament is the last jar on the shelf. Four approaches: bring Bao Er and sing the lament through the jars (a1, truth), break the
 * Hush-jar the Chancery has hung in the gallery (a2, force), carry songs out in the party's throats under the guards' noses
 * (a3, deceit), and learn the old way of writing music from Pao's paper ghost (a4, quiet). A hidden route sings the eighth verse
 * to the ninth jar. Cast: Pao (paper), Bao Er, Mother Hsu, Qiu, Hao Lan, the Reader.
 */
export const pao: Arc = {
  id: "pao",
  name: "Pao’s Shelf",
  scenes: String.raw`
=== pao_entry | The Songkeepers’ Gallery
The gallery of the Songkeepers is a long curved passage on the fourth level of the Stacks, and it does not smell of paper. It smells of rain on hot stone. The walls are lined with shelves from floor to roof, and on every shelf stand jars: small round jars of glazed clay, each stopped with wax, each with a paper label tied round its neck. Thousands upon thousands. They glow faintly, blue and green and amber. They hum.
You stand on the threshold with your hand over your mouth. The hum is a chord. It is thousands of voices at once, so quiet that they might be thoughts, each holding a single note, and the notes fit together.
“Songs,” says the Reader, at your elbow. “Every song that was ever banned, in four hundred years. The Concord sent them here to be kept. The Songkeeper stoppered them in jars.”
“Can they be sung?”
“They can be opened.” She hesitates. “They are rather shy.”
A small lamp burns at the far end. Beside it, on a stool at a desk, a figure of folded paper is bent over a long roll, writing. It is humming.
> truth | Send for Bao Er, and let her sing to them. | pao_a1s1 | npc:SU_PAO_JARS
> force | Ask about the big jar hung in the middle of the gallery, with the Chancery’s seal. | pao_a2s1 | needs:3
> deceit | Ask Hao Lan whether a song can be smuggled out of a Library in a person. | pao_a3s1
> quiet | Go to the desk, and sit by the paper figure who is writing. | pao_a4s1
> inquiry | Hum the eighth verse to the last jar on the shelf, and see whether it opens. | pao_h1 |  | keeners_ke_er_verse | You do not yet have the eighth verse.

// ---------------------------------------------------------------- a1: the concert
=== pao_a1s1 | Send for Bao Er
It takes her an hour to come. She arrives out of breath, in a patched tunic, with her black braid flying and Mother Hsu on her arm. The old woman is wearing her goose-hat. She refuses to remove it. She stands on the threshold of the gallery and looks along the glowing shelves, and says in a very small voice, “I had heard it was beautiful.”
“It is,” says Bao Er.
“I did not know it would be alive.”
Bao Er does not speak. She is staring at the jars. A look is on her face you have not seen: a hunger so naked that it is almost shame. She walks into the gallery as if into water. The hum swells to meet her. A blue jar at her shoulder chimes, and a green one answers.
“They know me,” she says. “They know what I am.”
“What are you?” says Gu.
“A keener,” says Bao Er. “It is the same as a key.”
> truth | Let her go ahead. | pao_a1s2
> mercy | Hold Mother Hsu’s arm. | pao_a1s2
> quiet | Watch the jars. | pao_a1s2
> inquiry | Ask the Reader how to open them. | pao_a1s2

=== pao_a1s2 | How a Jar Opens
“You sing to it,” says the Reader. She is standing very straight, with her small hands folded, like a child reciting a lesson. “But not any song. You sing the song that is already inside. If you get it wrong, it stays shut. If you get it right, it opens.”
“How do you know which?”
“You do not.” She smiles faintly. “You listen. Each jar hums its own beginning. If you can hear it, you can finish it.”
Bao Er has stopped at a small amber jar halfway down the gallery. She bends close. Her lips are parted. The jar hums one clear note, and holds it. She nods.
She sings the note back. And then, without hesitation, a second. Her voice is bright and strong. It climbs, turns, falls. It is a lullaby, in a language you do not know. The jar warms. The wax cracks.
A light rises from the neck of it. It is no larger than a moth. It circles Bao Er’s head, and the lullaby comes out of it in a child’s clear treble.
> truth | Listen. | pao_a1s3
> mercy | Smile. | pao_a1s3
> quiet | Hold your breath. | pao_a1s3
> inquiry | Ask what language it is. | pao_a1s3

=== pao_a1s3 | The First Jar
“The old tongue of the river provinces,” says Mother Hsu. Her face is wet. “My grandmother sang that. She sang it to my mother, who sang it to me. I never knew it was banned.” She touches her mouth. “I sang it to the children in the loft. I did not know I was committing a crime.”
The light settles on Bao Er’s shoulder. It folds its tiny wings and goes on singing. The sound is ordinary and perfect. It is the sound of a woman rocking a child.
Bao Er is weeping openly. She does not wipe her face. She stands with her hands loose at her sides and her mouth open, listening, and when the lullaby ends she says: “Again.”
The moth sings it again. This time, Mother Hsu joins in. Her thin reedy voice trembles on the first line, and then steadies. They sing it together, the old woman and the light, and the other jars in the gallery begin to glow.
One by one, down the long curve of the shelves, they light.
> truth | Stand back. | pao_a1s4
> mercy | Weep. | pao_a1s4
> quiet | Close your eyes. | pao_a1s4
> inquiry | Ask Bao Er to try another. | pao_a1s4

=== pao_a1s4 | Many Voices
She tries another. And another. For an hour she goes from jar to jar down the gallery, with Mother Hsu on her arm, and the Reader trotting behind with a lamp, and the little lights flocking in her wake like startled birds. She sings a harvest song. She sings a drinking song. She sings a song that two women used to sing across a washing-line. She sings a satire on the Chancery so rude that Hao Lan blushes to the ears and writes it down.
Each song comes out of its jar and takes its place on the air. The gallery fills with them. It is a swarm, a cloud, a river of tiny lights. They sing to one another. They sing in rounds. The harmonies are astonishing. You are standing in the middle of a hundred voices, and not one of them is afraid.
“I can’t,” says Bao Er, breathless, laughing. “I can’t stop. I’ve never—I never knew there were so many.”
Mother Hsu squeezes her arm.
“There are thousands,” she says. “You have only started.”
> truth | Let her. | pao_a1s5
> mercy | Fetch water. | pao_a1s5
> quiet | Stay close. | pao_a1s5
> inquiry | Ask the Reader how many. | pao_a1s5

=== pao_a1s5 | The Hush-Jar
It hangs at the centre of the gallery, from a chain of black iron: a jar the size of a barrel, glazed grey, with no neck and no mouth. The Chancery’s seal is pressed into its side in red wax. The light of the singing moths avoids it. The hum dies in its neighbourhood, as a candle dies in a draught.
“That is the Hush,” says the Reader. “A twin of the one in the customs tower. It was made last spring. It was to be placed over the Songkeepers’ gallery.” She wrinkles her nose. “It did not fit. They hung it here instead.”
“What does it do?”
“It eats songs.” She says it flatly. “It is a seal. A jar for hunger. You put it near a song and the song goes into it and does not come out.”
Bao Er has stopped. She is standing at the edge of its shadow, with her hand over her mouth.
“I can feel it,” she says. “It’s pulling.”
> truth | Step between. | pao_a1s6
> mercy | Hold her. | pao_a1s6
> quiet | Pull her back. | pao_a1s6
> inquiry | Ask the Reader how to break it. | pao_a1s6

=== pao_a1s6 | Not by Force
“You cannot,” says the Reader. She says it quite gently. “It is a stronger seal than the bell. It was made by a better hand.” She pauses. “It cannot be broken by force, or by weight, or by iron. But it can be fed.”
“Fed?”
“It is hungry. If you give it enough, it will be full.” Her small face is serious. “If a hungry thing is filled, it sleeps.”
“With what?”
“With songs,” says the Reader. “All of them. At once.”
Bao Er stares. Then, slowly, a look of immense, frightened joy spreads across her face. She laughs, and the laugh cracks, and she takes Mother Hsu’s hand in both her own.
“Every jar,” she says. “Open every one. Sing every song.” She draws a breath. “And let it eat.”
“It will take hours,” says Mother Hsu.
“Then we had better begin.”
> truth | Offer to sing. | pao_a1s7
> mercy | Say you cannot carry a tune. | pao_a1s7
> quiet | Open a jar. | pao_a1s7
> inquiry | Ask who will lead. | pao_a1s7

=== pao_a1s7 | Everyone Sings
They sing for seven hours. Bao Er leads. Mother Hsu sits on a stool at her right hand and gives the pitch. Qiu comes down from the spur and plays the tune on the edge of a glass. Lu Yan, who cannot sing, claps the rhythm on a bowl. Ah Zhi brings a drum from her boat. Shu Ning hammers a tiny anvil like a triangle. The Reader sings in a thin clear soprano, surprisingly true. Gu hums, shy and off the note, and nobody minds.
You sing too. You do not know the words. You sing the held door, the long fall at the end of a phrase, and the songs come out of their jars and join you.
The Hush-jar turns on its chain. The grey glaze darkens. It shudders, and swells, and strains. It drinks and drinks. The songs pour into it in a rope of light, and it takes them, thousands of them, one after another, and its sides bulge like a tun.
At the seventh hour it cracks.
> truth | Keep singing. | pao_a1s8
> mercy | Cover your ears. | pao_a1s8
> quiet | Hold the note. | pao_a1s8
> inquiry | Ask what is happening. | pao_a1s8

=== pao_a1s8 | It Sleeps
It does not shatter. It sags. The grey glaze runs, and the chain creaks, and the jar settles slowly on the floor with a long soft sigh, like a sleeping animal. The wax seal flakes away. The surface goes dull. A faint, contented snore comes from inside it, very low.
The songs rise from the cracks. They go up. They circle the gallery in a wide ring, thousands of tiny lights, singing, and then one by one they sink back into their jars and settle. The wax reseals itself. The gallery dims.
The silence that follows is like a blessing.
Bao Er sits down on the floor. Her voice is a cracked thread. She is laughing, and crying, and sneezing. “That,” she says, “was the best day of my life.”
Mother Hsu pats her on the head, as one pats a clever dog.
“It was passable,” she says. “The altos were flat.”
> truth | Laugh. | pao_close | +pao_fed_hush
> mercy | Hug Bao Er. | pao_close | +pao_fed_hush
> quiet | Sit beside her. | pao_close | +pao_fed_hush
> inquiry | Ask about the ninth verse. | pao_close | +pao_fed_hush

// ---------------------------------------------------------------- a2: breaking the Hush-jar
=== pao_a2s1 | The Big Jar
It hangs at the centre of the gallery, from a chain of black iron. It is the size of a barrel. Its glaze is grey. It has no neck and no mouth. The Chancery’s seal is pressed into its side in red wax. The songs near it have gone silent; the little blue lights have drawn back from its shadow like tide from a rock.
“The Hush,” says the Reader. “A twin of the one in the customs tower. It was put here last spring.” She hugs her lamp. “It is eating the songs. I can hear them go.”
“Go where?”
“Into it.” She nods. “I think it is almost full.”
Shu Ning has crouched in front of it. She runs her black fingers along the glaze. Her cold grey eyes narrow. “This is better made than the bell,” she says. “Much better. The walls are three inches thick. The inscription is on the inside.”
“Can you break it?”
“I can break anything.” She looks up. “But I should not like to, until I know what is in it.”
> force | Break it anyway. | pao_a2s2 | needs:3
> truth | Ask her to look first. | pao_a2s2
> quiet | Listen. | pao_a2s2
> inquiry | Ask the Reader what is in it. | pao_a2s2

=== pao_a2s2 | What Is in It
“Everything,” says the Reader, in a whisper. “Every song that was ever lost. They go in, and they stay, and they are not heard again.” She clutches her lamp. “It is the Concord’s idea of preservation.”
You put your ear to the glaze. It is cold. Inside, very faint, you hear a sound like surf. A vast confused roar of voices, thousands of them, all singing at once, all different, none of them in tune. They are not happy. They are packed like herring in a barrel.
“They’re suffocating,” says Hao Lan, who has joined you. She is pale. “A song needs room.”
“Then we must open it,” you say.
“It could be dangerous.”
“Why?”
“Because they have been in there for a very long time,” says the Reader. “And I do not know what they have become.”
Shu Ning is already uncoiling a rope.
> force | Tie it round the jar. | pao_a2s3
> truth | Stop. | pao_a2s3
> quiet | Hold the lamp. | pao_a2s3
> mercy | Ask what they want. | pao_a2s3

=== pao_a2s3 | A Hammer
She does it with a hammer. It is a small black one, the size of her fist. She sets the head against the glaze, in the seam below the seal, and strikes once, lightly. The jar rings like a gong. A thread of light appears. She strikes again. The thread lengthens, a bright crack running up the side, and a thin high wail comes out of it, a noise like wind in a keyhole.
“Stand back,” says Shu Ning.
She strikes a third time.
The jar bursts. It does not explode; it blossoms. The glaze peels back in petals and the whole mass of song pours out at once in a column of light that fills the gallery to the roof. The noise is overwhelming. Thousands of voices, tens of thousands, all singing, all at once, a vast roaring tapestry of sound, tangled and bright and furious.
You are knocked flat. The lamp goes out. The gallery is a storm.
> force | Cover your head. | pao_a2s4
> truth | Shout. | pao_a2s4
> quiet | Crawl. | pao_a2s4
> mercy | Reach for Gu. | pao_a2s4

=== pao_a2s4 | Tangled
For some minutes there is no sense in it. It is like standing in the middle of a flock of starlings. The songs wheel and clash, and the air is alive with them. They do not seem to see you. They seem to be looking for somewhere to go. They throw themselves against the walls, the roof, the shelves, and rebound, singing.
“They’re lost!” cries the Reader. She is clinging to a pillar with both arms, her hair on end. “They’ve been in the dark so long they have forgotten their jars!”
“Where do they belong?”
“Back on the shelves!”
You scramble up. You stagger. You catch a handful of light in each fist, and it is warm and sticky and alive, like fistfuls of bees. You hold them out. You say, as steadily as you can: “Here. Come here.”
They stop. The two songs in your hands cease their thrashing. They look at you, in whatever way a song looks. They hum.
They fly to the nearest shelf and find their jars.
> force | Catch more. | pao_a2s5
> truth | Call to them. | pao_a2s5
> quiet | Hold still. | pao_a2s5
> mercy | Say their names. | pao_a2s5

=== pao_a2s5 | Putting Back
It takes all night. The party works in a long line down the gallery, catching songs in their hands and carrying them to the shelves. Ren Qiao is surprisingly good at it; he has soft hands. Gu is hopeless. He keeps being followed by a small, indignant drinking-song. Shu Ning stands in the middle with her hammer, directing traffic.
“Left!” she shouts. “That one’s a lullaby! It goes with the blue jars!”
“How do you know?”
“It’s sleepy!”
Hao Lan has a ledger. She is cataloguing. She writes down every song as it lands: its jar, its key, its tune. By dawn, there are four thousand six hundred entries. She has ink to the elbows.
“It is the finest catalogue I have ever made,” she says. “And I had no authority to make it. I am so happy.”
She is beaming.
> force | Laugh. | pao_a2s6 | needs:3
> truth | Read her list. | pao_a2s6
> quiet | Sit down. | pao_a2s6
> mercy | Bring her water. | pao_a2s6

=== pao_a2s6 | One Left
By dawn, every song is home but one. It is a small grey thing, no larger than a sparrow, huddled in the angle of the roof. It does not sing. It does not move. It sits there, shivering, with its head under its wing.
“It’s frightened,” says Gu softly.
“It’s the oldest,” says the Reader. She has put down her lamp. “It was in the jar the longest. It has forgotten how to be a song.”
She goes to the foot of the shelf, and looks up. “Come down,” she says. “It’s all right. It’s over.”
The grey bird shivers. It does not stir.
Bao Er has come into the gallery. She has been asleep on a bench, and has woken to the silence, and she stands now in the doorway with her braid half undone and a blanket round her shoulders.
She sees the bird. Her mouth opens.
“Oh,” she says. “Oh, it’s the ninth.”
> force | Hold her back. | pao_a2s7
> truth | Ask what she means. | pao_a2s7
> quiet | Stay still. | pao_a2s7
> mercy | Step aside. | pao_a2s7

=== pao_a2s7 | The Ninth
She goes to it slowly. She holds out her hand. The grey bird lifts its head, and looks at her with a bright bead of an eye, and shivers all over. It makes a small sound. It is not a note. It is the sound a child makes when it is about to cry.
“Hush,” says Bao Er. “Hush, my darling.”
She does not sing. She hums. It is the first note of the lament, the rising fifth, and the grey bird stops shivering. It listens. She hums a second. It tilts its head. She hums the long fall, the held door, and the bird sways with her, side to side.
“It doesn’t have words,” she says, without looking round. “Mother Hsu was right. The ninth is a tune. The words are what you put in it.”
The bird hops onto her finger.
She raises it to her mouth, as one raises a baby to a kiss.
“Hello,” she says. “I’m Bao Er. I’ll be your voice.”
> force | Watch. | pao_a2s8
> truth | Tell her she can. | pao_a2s8
> quiet | Hold your breath. | pao_a2s8
> mercy | Weep. | pao_a2s8

=== pao_a2s8 | A Bird in a Singer
The bird goes into her mouth. It does not hurt. It flies in like a breath, and is gone, and Bao Er stands in the dawn light with her hand over her lips, and her eyes very wide. She swallows. She coughs, delicately.
Then she opens her mouth, and sings.
It is a single note. It is the first of the ninth verse, and it is the clearest, truest, most heartbreaking sound you have ever heard. It fills the gallery like light fills a window. It rises to the roof, and the songs on the shelves turn their little faces toward it, and every jar in the gallery hums in sympathy.
When it ends, she is silent for some time.
“I don’t know the rest,” she says, in a wondering voice. “But it knows. It’s going to teach me.”
She smiles at you. Her whole face is wet, and transfigured.
“I think I’m going to be good at this,” she says.
> mercy | Embrace her. | pao_close | +pao_broke_hush needs:3
> truth | Say you always knew. | pao_close | +pao_broke_hush
> quiet | Bow your head. | pao_close | +pao_broke_hush
> mercy | Hold her hand. | pao_close | +pao_broke_hush

// ---------------------------------------------------------------- a3: smuggling
=== pao_a3s1 | In a Person
“Can a song be carried out in a person?” says Hao Lan. She taps her pencil against her teeth. “The Library’s rule is that nothing leaves it. No paper, no jar, no ink. The Chancery has been very strict. It is the only rule that Fang has enforced.” She frowns. “But I do not think it has ever considered a throat.”
“A throat?”
“A song is a sound, not a thing. If you learned it, you would have it.” She brightens. “You would be carrying it in your head. Nobody can search a head.”
The Reader has gone round-eyed. “That is against the rules,” she says. “I think. I will have to check.”
She disappears down the gallery with her lamp. She comes back ten minutes later, frowning.
“It is not against the rules,” she says. “It is not mentioned at all. The founders did not think of it.” She sits down. “I find that I am very excited.”
> deceit | Ask for the first. | pao_a3s2
> truth | Say it is cheating. | pao_a3s2
> quiet | Listen. | pao_a3s2
> mercy | Ask which are the most endangered. | pao_a3s2

=== pao_a3s2 | Learning by Ear
They learn them in shifts. Each of the party takes a jar, and the Reader opens it, and the song comes out and sits on their shoulder and sings itself, over and over, patiently, until they have it by heart. Then it goes back. It is like taking a lesson from a very small, very gentle tutor. Some songs take ten minutes. Some take an hour. A few, the old ones, the ones in languages no one speaks, take most of a day.
You learn a lullaby, a drinking-song, a lament for a drowned fleet, a hymn to the tide. Gu learns a rude ditty about a magistrate. Ren Qiao, to everyone’s astonishment, learns a love-song in six languages, and sings it with a dreadful tenor in a quavering voice, to nobody, on the gallery stairs.
By the second night the party holds eighty-three songs between them.
“It is a smuggling operation,” says Hao Lan, happily. “I am a criminal.”
“You are a librarian,” says the Reader.
“That is worse.”
> deceit | Learn another. | pao_a3s3
> truth | Rest. | pao_a3s3
> quiet | Sing quietly. | pao_a3s3
> mercy | Teach Gu. | pao_a3s3

=== pao_a3s3 | The Search
The search comes on the third morning. Two Chancery clerks and a guard come down the stair from the Reading Hall with a lantern, a ledger, and the air of men sent on a tedious errand. They have been told to inventory the Songkeepers’ gallery for Inspector Fang, and they are bored. The guard leans on his pike.
The party is on the benches, in a row, looking innocent. Gu is whistling. Hao Lan is reading a book upside down.
“Right,” says the senior clerk. He is a bald man with an inky nose. “Nobody takes anything out. Pockets, please. Bags. Anything you have.”
They turn out their pockets. They hold up their satchels. The clerk goes through them with a brisk, apologetic efficiency. He finds a comb, a lantern, a knife, a ball of string, a pencil, a handkerchief, a bun. He finds nothing that belongs to the Library. He sighs.
“And the rest?”
“The rest is nothing,” says Hao Lan. “We are just visitors.”
> deceit | Smile. | pao_a3s4
> truth | Stay silent. | pao_a3s4
> quiet | Look at your hands. | pao_a3s4
> mercy | Offer him a bun. | pao_a3s4

=== pao_a3s4 | Nothing
He is a thorough man. He searches everything. He turns out the hems of cloaks. He feels in boots. He taps the walls. He opens the cover of Hao Lan’s ledger and finds a list of songs, and frowns.
“What is this?”
“A catalogue,” says Hao Lan. “I was cataloguing.”
“It lists four thousand items.”
“It is a very large collection.”
“You are not authorised to catalogue.” He tears the page out and folds it into his pocket. “This is confiscated.” He glares at her. “Anything else?”
“No,” says Hao Lan, steadily.
He goes through the whole gallery, jar by jar, with his lantern. He opens none. He lifts none. He raps on a few. They ring dully. He ticks them off.
At the end he stands before you. He looks you up and down.
“What do you have in your head?” he says.
> deceit | Nothing. | pao_a3s5
> truth | A lullaby. | pao_a3s5
> quiet | A rhyme. | pao_a3s5
> mercy | Smile. | pao_a3s5

=== pao_a3s5 | A Clerk’s Humour
He has meant it as a joke. He is looking at you with a faint, tired smirk, the sour humour of a man who has made the same remark in forty similar searches. You say, without moving a muscle, “A lullaby.”
He laughs. “Of course you do.”
He steps back. His guard laughs too, a dull cough. The second clerk, a thin boy, snickers into his ledger. It is the funniest thing any of them have heard all week.
“Right,” says the senior clerk, wiping his eyes. “That’s it. Nothing to declare. Go on, off you go.” He waves his lantern. “And don’t take any songs.”
“We wouldn’t dream of it,” says Hao Lan.
“I should hope not.” He yawns. “I have a sister who sings. It would be a pity if I had to report her.”
He goes up the stairs. The guard follows. The thin boy trails behind, humming the lullaby under his breath. He doesn’t seem to notice.
> deceit | Wait. | pao_a3s6
> truth | Breathe out. | pao_a3s6
> quiet | Look at the others. | pao_a3s6
> mercy | Hold Gu’s hand. | pao_a3s6

=== pao_a3s6 | A Thousand Songs
You carry them out in your heads. You carry them up the stair, through the Reading Hall, past the three hundred paper-clerks, and out by whichever door you came in. You carry a lullaby, a drinking-song, a lament for a drowned fleet. You carry them through the dark, and the water, and the guarded cellar. You carry them up into the streets of Tidewall, and you set them down.
It starts with Gu. He is walking along the quay at dawn, whistling the rude ditty about the magistrate. A fisherman hears it. He laughs. He picks it up. By noon it is all over the harbour. By evening the fish-market is roaring it, and a child on a wall is trying to learn the words. A woman who sells pickled plums sings the lullaby to her baby.
They are not stopped. There is no one to stop them. They are only songs. A song, once heard, cannot be unheard.
Lieutenant Gao, passing, hears the lament for the drowned fleet. He pulls up his horse. He listens, bareheaded, to the end.
> deceit | Smile. | pao_a3s7
> truth | Sing along. | pao_a3s7
> quiet | Listen. | pao_a3s7
> mercy | Hand out buns. | pao_a3s7

=== pao_a3s7 | The Songs Spread
Within a week the whole Salt Coast is singing. They sing the old river lullabies. They sing the harvest hymns and the satires and the washing-line songs. They sing them in the street, in the fish-market, in the pews of the parish chapel. The Chancery’s clerks, inspecting the town, find that they are humming too. They don’t know where they learned it. They go home and sing it to their children.
The edict is still posted. It cannot be enforced. You cannot arrest a whole town. You cannot arrest a melody. You can only listen to it go.
Bao Er is weeping with joy. Mother Hsu says it is sentimental twaddle, and weeps too. Lu Yan notes, drily, that she has seen an improvement in the Ward: the dusted patients, listening to the old songs, have begun to hum along. Some have remembered words.
In the Library, the Reader sits on a bench and watches the hum of the jars subside. They are quiet now. They are not empty. They have been heard.
> deceit | Go and see her. | pao_a3s8
> truth | Thank Hao Lan. | pao_a3s8
> quiet | Sit with her. | pao_a3s8
> mercy | Take her a cup of tea. | pao_a3s8

=== pao_a3s8 | The Ninth Jar
“It is still there,” says the Reader. She is sitting on the stool beside the paper-ghost’s desk, looking along the shelf. At the very end, apart from the rest, stands a single jar. It is small and black. It is stopped with grey wax. It has no label. “The last. It has not opened.”
“Is it the ninth?”
“I think so. I think it is waiting.”
You go and kneel before it. It is cool to the touch. It is silent. You put your ear to it, and hear nothing, not even the hum. It is the stillest thing in the Library.
“It does not want to be sung,” says the Reader. “I tried. I sang every song I knew. It does not mind. It does not answer.” She shrugs. “I think it is not a song at all. I think it is a question.”
You take it in both hands. You find that you are holding your breath.
“I will carry it,” you say.
> deceit | Put it in your satchel. | pao_close | +pao_smuggled
> truth | Ask her if she minds. | pao_close | +pao_smuggled
> quiet | Hold it. | pao_close | +pao_smuggled
> mercy | Thank her. | pao_close | +pao_smuggled

// ---------------------------------------------------------------- a4: Pao
=== pao_a4s1 | A Figure at a Desk
The figure at the desk does not look up. It is a woman of paper, middle-aged, with a bun of curled leaves and a pen of rolled vellum in her hand. She is writing on a long scroll. The scroll is covered in tiny black marks that are not letters: dots, curls, ladders, arcs. She is humming. As she writes, the notes she hums appear on the page.
The Reader has gone quiet. She says, “Her name is Pao.”
“The Songkeeper.”
“The last one. She has been writing since the flood.”
You sit down on the stool at her side. You do not speak. You listen. She writes and hums. The humming is not a tune; it is a drift of tones, rising, falling, hovering, like a bird deciding where to land. After a time you understand that she is composing, and that she has been composing the same piece for a hundred and eighty years.
She does not stop. She does not notice you. But the ink on her face writes one word.
HELLO.
> quiet | Greet her. | pao_a4s2
> truth | Ask what she is writing. | pao_a4s2
> mercy | Sit quietly. | pao_a4s2
> inquiry | Ask how long she has been at it. | pao_a4s2

=== pao_a4s2 | The Long Piece
The ink moves slowly. LONG, it writes. THE PIECE IS LONG. IT IS A LAMENT FOR THE WHOLE LIBRARY. IT IS NOT FINISHED.
“How many verses?”
NINE HUNDRED AND SEVENTY. I AM ON THE NINE HUNDRED AND SIXTY-FIRST. She turns her blank face toward you. THERE IS NO HURRY. THE LIBRARY IS ALSO NOT FINISHED.
You smile. The paper-ghost’s ink twists, a small wry curl.
I WAS A SONGKEEPER FOR FORTY YEARS, she writes. BEFORE THAT, A SINGER. BEFORE THAT, A CHILD WHO HUMMED. THE FLOOD CAME. THE OTHERS TOOK UP PENS TO COPY. I TOOK UP A PEN TO COMPOSE. IT IS ALL THE SAME.
“Is there a ninth verse?” you ask.
She goes very still.
THERE IS ALWAYS A NINTH, she writes. IT IS NOT MINE TO WRITE.
> quiet | Ask whose. | pao_a4s3
> truth | Say you understand. | pao_a4s3
> mercy | Hold her hand. | pao_a4s3
> inquiry | Ask to learn the notation. | pao_a4s3

=== pao_a4s3 | How to Write a Note
She teaches you. It takes the better part of a day. She shows you the old way of writing music: a stave of nine lines, a system of dots and curls, a vocabulary of arcs that mean rise and fall, rest and linger, breathe and hold. It is not the Concord’s notation. It is older, wilder, more like handwriting. It records not just pitch but feeling.
You practise on a scrap of vellum. Your first line looks like a drunken spider. Pao leans over and, with a single stroke, turns it into a phrase. It is the lullaby. You recognise it at once.
“It sings,” you say.
IT DOES, writes Pao. YOU HEARD IT BEFORE YOU WROTE IT. THAT IS THE WHOLE SECRET.
Hao Lan has joined you, with her pencil. She is learning too. She picks it up in an hour, with the ruthless efficiency of a clerk, and by evening she is writing out the lament in full.
“I could do this all my life,” she says.
> quiet | Smile. | pao_a4s4
> truth | Say she should. | pao_a4s4
> mercy | Pour tea. | pao_a4s4
> inquiry | Ask Pao what she thinks. | pao_a4s4

=== pao_a4s4 | What Pao Said
SHE HAS A GOOD EAR, writes Pao. SHE IS TOO BUSY. She tilts her head. THE ONES WHO HAVE THE BEST EAR ARE ALWAYS THE ONES WHO CANNOT SIT STILL.
Hao Lan blushes.
I KNEW A MAN LIKE THAT, writes Pao. HE WAS THE FINEST COPYIST IN THE ANNEX. HE COULD NOT PASS A BLANK PAGE WITHOUT WRITING ON IT. HE DIED AT HIS DESK AT NINETY, WITH A PEN IN HIS HAND, AND A SONG UNFINISHED.
“What song?”
THIS ONE. The ink rises, runs. SOMEONE HAS TO TAKE IT UP.
She turns the scroll on her desk and shows you the margin. In a different hand, in an old gold ink, a few bars are written. They are abrupt. They stop mid-phrase. The last note is open.
Below it, in the same gold, a single word. Pao.
> quiet | Touch the page. | pao_a4s5
> truth | Ask who Pao was. | pao_a4s5
> mercy | Say you will finish it. | pao_a4s5
> inquiry | Ask what the word means. | pao_a4s5

=== pao_a4s5 | A Name in the Margin
“It’s you,” says the Reader, in a hush. “The word is your name.”
PAO IS A POST, writes the paper-ghost. NOT A NAME. THE SONGKEEPER IS ALWAYS CALLED PAO. IT WAS WRITTEN IN THE MARGIN BY THE ONE WHO HELD THE POST BEFORE ME.
She puts down her pen.
I NEVER HAD A NAME OF MY OWN, she writes. I WAS A CHILD OF THE HARBOUR. I WAS TAKEN IN BY THE ANNEX AT SEVEN. THEY GAVE ME THE POST AT TWENTY. I HAVE BEEN PAO EVER SINCE.
“What was your name?”
SHE ALMOST ANSWERS. The ink hovers on the blank face for a long time. Then it dries.
I DO NOT KNOW, she writes at last. I THINK IT WAS SHORT.
The Reader takes her hand. The paper fingers close, rustling, round the small grey ones.
> quiet | Say nothing. | pao_a4s6
> truth | Offer to find it. | pao_a4s6
> mercy | Hold the other hand. | pao_a4s6
> inquiry | Ask where it might be. | pao_a4s6

=== pao_a4s6 | Her Leaf
IT IS IN THE STACKS, writes Pao. SOMEWHERE. I HAVE NEVER LOOKED. A SONGKEEPER DOES NOT READ. SHE ONLY KEEPS.
“I will look,” you say.
She shakes her head, with a rustle. PLEASE DO NOT. The ink is very small. IF IT IS THERE, IT IS STRUCK. IF IT IS STRUCK, SOMEONE WILL HAVE TO PAY FOR IT. I WOULD NOT HAVE ANYONE PAY.
“I would pay.”
I KNOW, she writes. THAT IS WHY I SAY PLEASE DO NOT.
For a long while she sits with her hand in the Reader’s. The lamp burns. Behind you, in the long curve of the gallery, the jars hum their chord.
At last she lifts her pen.
LET ME TELL YOU WHAT I WANT, she writes. I WANT TO FINISH THE LAMENT. I WANT TO HEAR IT SUNG. THE NINTH VERSE IS NOT MINE. BUT I SHOULD LIKE TO WRITE THE PART THAT LEADS TO IT.
> quiet | Say you will help. | pao_a4s7
> truth | Ask what she needs. | pao_a4s7
> mercy | Say she has all the time. | pao_a4s7
> inquiry | Ask who will sing it. | pao_a4s7

=== pao_a4s7 | The Voice
“Bao Er,” you say.
The ink writes: THE KEENER. YES. Pao’s whole paper body quivers. I HEARD HER, IN THE STACKS. SHE HAS THE HELD DOOR. SHE HAS A THING I CANNOT NAME. A VOICE THAT KNOWS WHAT IT IS FOR.
“She is in the town.”
I KNOW. The ink slows. I HAVE BEEN LISTENING TO HER SING FOR A WEEK. THROUGH THE WALL. THROUGH THE WATER. SHE SINGS TO THE SEA AT NIGHT, FROM THE SPUR, WHEN SHE THINKS NO ONE HEARS.
She lifts her pen.
WILL YOU BRING HER? I SHOULD LIKE TO WRITE HER A PIECE.
You nod. You go up through the Library, through the hall, up the stair and out into the dawn. You find Bao Er asleep on the sea steps with her head on her arm, and a flute beside her. You wake her. You tell her.
She doesn’t say a word. She picks up the flute. She follows you down.
> quiet | Lead her. | pao_a4s8
> truth | Walk beside her. | pao_a4s8
> mercy | Take her hand. | pao_a4s8
> inquiry | Ask what she thinks. | pao_a4s8

=== pao_a4s8 | A Piece for One Voice
Pao writes it that night. She works through the hours, with Bao Er at her elbow humming, adjusting, nodding. The piece is short. It is nine bars long. It has no words. It has a rising fifth, and a pause, and a long fall that does not close.
“It’s the lament,” says Bao Er, wonderingly. “But it’s—it’s the part that comes before the ninth.”
“It is the door,” you say.
She nods. Her face is shining. “I can’t sing the ninth,” she says. “I know it. But I can sing the door. And someone else can walk through.”
Pao writes a single word at the bottom of the page. She holds it out.
It says: Thank you.
Bao Er takes it. She folds it, once, twice, three times, with the delicate fingers of one who folds paper cranes for a living. She puts it in her tunic over her heart.
> quiet | Smile. | pao_close | +pao_door_written
> truth | Say it will be sung. | pao_close | +pao_door_written
> mercy | Weep. | pao_close | +pao_door_written
> inquiry | Ask Bao Er what the ninth might say. | pao_close | +pao_door_written

// ---------------------------------------------------------------- hidden: the ninth jar
=== pao_h1 | The Last Jar
You walk to the end of the gallery. The shelves narrow, and the glow of the jars fades, and the hum thins to a murmur. At the very end, apart, on a plain plank of black wood, stands a jar you have not noticed before. It is small and black. It has no label. It is stopped with grey wax.
It does not hum. It does not glow. It is the only silent thing in the gallery.
You kneel before it. The Reader is behind you, with her lamp. Bao Er is beside her, with her hand over her mouth. Nobody speaks.
You hum the eighth verse. Not the words. The tune. The rising fifth, the long fall, and four notes at the end, plain as a child’s greeting. I am still here.
The jar is quiet.
You hum it again. And then you do what you have not done before. You take a breath, and you hold the last note, and you leave it open.
The wax on the jar cracks.
> inquiry | Hold the note. | pao_h2
> truth | Say her name. | pao_h2
> mercy | Look at Bao Er. | pao_h2
> quiet | Wait. | pao_h2

=== pao_h2 | It Answers
The jar does not open. It hums. It is the faintest of sounds, as soft as a heartbeat, and it begins on the same note you ended. The held door. It answers you across the gap. It takes the tune where you left it, and carries it, and the carrying is the ninth verse’s first phrase.
It is a phrase of four notes. They are not the notes you expected. They climb instead of falling. They end, not on the tonic, but a step above it, so that the tune seems to lean forward, as a person leans to listen.
Bao Er has gone rigid. She is staring at the jar. “That’s not a verse,” she whispers. “That’s a question.”
“What is it asking?”
She listens. Her lips move. She is trying the notes against her own throat, silently, one at a time.
“It’s asking,” she says slowly, “who is there.”
> inquiry | Sing back. | pao_h3
> truth | Say your name. | pao_h3
> mercy | Say hello. | pao_h3
> quiet | Hold the silence. | pao_h3

=== pao_h3 | Who Is There
You sing back. You do not know what you sing. It is the only thing you can think to do. You sing the held door, and a name, and the sense of a person standing at a threshold, with a lantern. You sing: I am here. You sing: I came.
The jar warms. A glow runs up its side. The grey wax melts, and the neck opens, and from it rises a single light, very small, a pearl, that hangs in the air at the height of your face. It hums the four notes.
Bao Er sings them back. Her voice is cracked, tremulous, perfect. She sings the question as it was asked.
The pearl trembles. It rises, bursts, and falls in a rain of tiny sparks that settle on your hands, your hair, your eyelashes, and go out. The sparks are warm. They tingle. You find that you have learned something, and that you cannot say what.
“It was not a verse,” says Bao Er, very quietly. “It was an invitation.”
She wipes her face with her sleeve.
“I think the ninth verse is whatever I sing back.”
> inquiry | Say that is true. | pao_close | +pao_ninth_asked
> truth | Say it has to be hers. | pao_close | +pao_ninth_asked
> mercy | Hug her. | pao_close | +pao_ninth_asked
> quiet | Smile. | pao_close | +pao_ninth_asked

// ---------------------------------------------------------------- close
=== pao_close | What the Gallery Keeps
The songs have settled. The hum of the jars is soft and contented now, like the murmur of a household at supper. The lamp at Pao’s desk burns steady.
+[how] pao_fed_hush | The Hush-jar sleeps, full of every song in the gallery, snoring.
+[how] pao_broke_hush | The Hush-jar burst into petals, and a grey bird of a song went into Bao Er’s mouth.
+[how] pao_smuggled | A black jar with no label is wrapped in your cloak, and it hums when you hold it.
+[how] pao_door_written | Pao wrote a door in nine bars, and Bao Er has it folded over her heart.
+[how] pao_ninth_asked | The ninth jar asked a question, and Bao Er sang back.
+[extra] pao_ninth_asked | The ninth verse is not a verse. It is an invitation.
Bao Er sits at Pao’s desk with the flute in her lap. She is not playing. She is looking at the gallery, the long curving shelves, the glowing jars, the slow slumber of the songs.
“I used to think I was loud,” she says. “I thought that was all I was. A noise.”
She turns the flute over.
“I was wrong. I was only a door.” Her smile is soft. “It is a better thing to be.”
She holds out her hand.
“I’m not giving you a card,” she says. “You have it. I want something else. I want to learn the ninth verse, every day, for the rest of my life. And I want you to be there when I do.”
> truth | Promise. | pao_close2 | +b3q_pao
> mercy | Take her hand. | pao_close2 | +b3q_pao
> quiet | Say nothing. | pao_close2 | +b3q_pao
> inquiry | Ask what you should be there for. | pao_close2 | +b3q_pao

=== pao_close2 | The Ninth Verse of Today
“To hear it,” says Bao Er. “It changes. It isn’t one thing. It is whatever the singer has just lived.” She plays a note, a single note, on the flute, and lets it hang. “Today’s is about a girl who crawled through a hole in the Wall. Tomorrow’s will be about something else.”
She grins.
“I’ll write it down. Hao Lan can keep the catalogue. We’ll have nine hundred and seventy-one verses by the end of the year.”
“Nine hundred and seventy?” you say.
“And one,” says Bao Er. “One for each day.”
Behind her, at the desk, the paper-ghost has lifted her head. The ink moves. It writes, in small neat characters on her blank face, a line of music: nine bars, a rising fifth, and an open end.
Then a word. Welcome.
The lamp flickers. The jars hum their chord. And somewhere in the Library, far below, at the very bottom of the Well, a door that has been shut for seven hundred years makes a sound like a lock turning.
> truth | Listen. | hub_b3_coast | bond:baoer+2
> mercy | Look down. | hub_b3_coast | bond:baoer+2
> quiet | Take Bao Er’s hand. | hub_b3_coast | bond:baoer+2
> inquiry | Ask the Reader what she heard. | hub_b3_coast | bond:baoer+2

`,
  scenarios: String.raw`
$ SU_PAO_JARS | trust+3 respect+3 fear-2 | elder | The Elder hears banned songs sing out of their jars, one at a time, in a gallery of the drowned.
hostile: Somebody sang a lullaby, in a language I once forbade. I stood in the doorway. I could not leave. I could not have told you whether I wished to.
wary: They hum. All of them, at once. I realised after a quarter of an hour that I was humming too. I have no idea what the tune was.
neutral: I banned seven songs, in my first year as Registrar. I found them on the shelf. They are very short. I wish I had listened to them before I signed.
warm: A song came out of a jar and sat on my shoulder. I do not mean that as a figure of speech. It was a small blue note, with feet, and it sat there until I laughed.
devoted: If I could, I should like to give each of them a name, and a place to be sung. I have a room. It is not a large room. It has a window facing east.
`,
  remarks: String.raw`
% pao_bao_later | since:b3q_pao>=4 | hao | Bao Er wrote to Mother Hsu with a tune in the margin. It was a ninth verse, she says, but not the ninth verse. She says it is the ninth verse of today.
% pao_reader_later | since:pao_fed_hush>=6 | gu | The Reader sang. I did not know she could. Her voice is thin and clear and it goes straight through you. She did not seem to mind at all.
`,
};
