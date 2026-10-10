import type { Arc } from "../types";

/**
 * Book Three, arc eight: the Keeners. Bao Er (cot III) sings at funerals, and the Concord has forbidden singing the names of the
 * struck within a mile of the Wall. The burying of a drowned fisherman is tomorrow. Four approaches: rehearse the lament with the
 * choir (a1, truth), silence the Hush Bell on the customs tower (a2, force), pass the procession off as a wedding (a3, deceit),
 * and collect the verses from the old women who remember them (a4, mercy). A hidden route brings Ke-er's verse to the choir.
 * Cast: Bao Er, Mother Hsu the choirmaster, Brother Fen of the customs tower, the marines' lieutenant Gao, the widow Ou.
 */
export const keeners: Arc = {
  id: "keeners",
  name: "The Keeners",
  scenes: String.raw`
=== keeners_entry | The Sing-Loft
The Sing-Loft is a long attic above the fish market, reached by a ladder from the back of a salting-shed. It is warm and dim and smells of brine and old wood. Forty women and a few old men sit on benches in rows, dressed in undyed hemp. Each holds a small wooden clapper. At the front, on a stool, sits Bao Er with her feet tucked under her and a bowl of noodles in her lap. She is conducting with a chopstick.
They are singing. It is a slow low harmony, without words, a sound like the sea in a shell. It rises and falls. It is the loveliest thing you have heard in months.
A notice has been nailed to the door, fresh. It bears the Concord’s eye. It says: BY ORDER OF THE SECOND CHANCERY, THE SINGING OF STRUCK NAMES WITHIN ONE MILE OF THE WALL IS PROHIBITED, UNDER PENALTY OF SEIZURE.
Bao Er lowers her chopstick. The singing dies.
“Everyone,” she says. “This is Nine. She is going to tell us whether to keep going.”
> truth | Say you want to hear all of it. | keeners_a1s1
> force | Ask where the Concord has hung the thing that stops the singing. | keeners_a2s1
> deceit | Ask whether anyone has a wedding they could attend. | keeners_a3s1
> mercy | Ask the oldest woman in the room what she remembers. | keeners_a4s1
> inquiry | Say you heard a child hum a verse through a stone. | keeners_h1 |  | harbour_said_name | You have not said the child’s name at the Wall.

// ---------------------------------------------------------------- a1: rehearsal
=== keeners_a1s1 | The Whole Lament
“All of it,” says Bao Er, delighted. She leaps off the stool. “Mother Hsu! Nine wants the whole lament!”
A tiny woman of ninety stirs on the front bench. She has a face like a dried apple and a voice like a flute. “The whole of it? The whole of it takes a day.”
“Then we shall start at the beginning,” says Bao Er. “Everybody up. Clappers ready. Nine, you stand here, by me. You do not have to sing. Listen with your chest.”
The choir rises with a creak of benches. Mother Hsu raises one thin hand. The room goes silent.
She sings a note. A single low clear note, held for a long breath. Forty voices take it up. It spreads like a stain through the loft, deepening, widening, and underneath it you feel something begin to stir in your breastbone, as if a long-sleeping animal had turned over.
Bao Er whispers, “That is Ling’s note. The first one. The one she sang before she was struck.”
> truth | Close your eyes. | keeners_a1s2
> mercy | Hold Gu’s hand. | keeners_a1s2
> quiet | Listen with your chest. | keeners_a1s2
> inquiry | Ask how they know it is hers. | keeners_a1s2

=== keeners_a1s2 | Nine Verses
The lament has nine verses. Mother Hsu explains it afterwards, over tea, in the dim light of the loft. The first verse is the calling, in which the keeners name the dead. The second is the washing. The third is the forgiving. The fourth, fifth, and sixth are the burying, the planting and the rain. The seventh is for the ones who cannot come home.
“And the eighth and the ninth?” you say.
Mother Hsu’s hands are folded around her cup. “Lost,” she says. “We have the tune, though. The tune is simple. A rising fifth, and then a long fall. But we have lost the words.” She shakes her small head. “They were sung once, in the Library, before the sea came in. My grandmother heard them as a girl. She said they were very short.”
“How short?”
“One line each,” says Mother Hsu. “She said they were the saddest things she had ever heard, and the most hopeful, and she could not tell you which was which.”
> truth | Ask to learn the first. | keeners_a1s3
> mercy | Ask who first wrote the lament. | keeners_a1s3
> quiet | Hum the rising fifth. | keeners_a1s3
> inquiry | Ask where the Library’s door is. | keeners_a1s3

=== keeners_a1s3 | Learning to Keen
They teach you the first verse. It takes the afternoon. It is not difficult to learn the words: they are plain and short. It is difficult to learn the breath. A keener does not sing from the throat. She sings from under the ribs, from the soft place beneath the sternum, where grief lives. She lets the sound out as if it were water.
You try. Your voice cracks. You try again. Bao Er stands behind you with her hand flat on your back, pressing gently between the shoulder-blades.
“There,” she says. “Lower. Let it fall.”
You let it fall. There is a pause, and then a sound comes out of you that you did not know you had. It is thin and rough and oddly true. A woman at the back of the choir draws a breath.
Bao Er’s hand is trembling on your back.
“Again,” she says. Her voice is not steady. “Again. Once more.”
> truth | Sing the verse through. | keeners_a1s4
> mercy | Ask if it is all right. | keeners_a1s4
> quiet | Sing softer. | keeners_a1s4
> inquiry | Ask what she heard. | keeners_a1s4

=== keeners_a1s4 | What She Heard
“Ling,” says Bao Er.
She says it flatly, and her face is odd and white. The choir has gone still. Mother Hsu sets down her cup. “You have her breath,” says Bao Er. “The way she held it. Mother Hsu’s grandmother said she never let a note finish. She kept it hanging, like a held door.”
She walks around to face you.
“I have been singing this lament since I was six,” she says. “Mother put me on a stool in the shop and taught me to open my mouth. I have never gotten the held door. I have never once.” She swallows. “You just did it by accident.”
“I do not know how.”
“I know you do not.” Bao Er’s mouth is shaking. “That is the horrible part. It is not skill. It is inheritance.”
She wipes her face with her sleeve and laughs at herself.
> truth | Take her hands. | keeners_a1s5
> mercy | Say it is not horrible. | keeners_a1s5
> quiet | Wait. | keeners_a1s5
> inquiry | Ask what the held door means. | keeners_a1s5

=== keeners_a1s5 | The Held Door
“It means you do not close,” says Bao Er. She sits on the edge of the stool with her chopstick in her hand. “A note has a door. At the end of it you close the door, and the sound stops. That is how everyone sings. You finish. You make a neat little end, and the audience claps.”
She tucks the chopstick behind her ear.
“A keener never closes. We are not meant to. We leave the door open. We let the last of the note go through, into the dark, so that the dead have somewhere to walk.” She looks at the window. “I have been closing mine since I was six. I thought it was a matter of technique.”
“And it is not?”
“No,” she says. “It is a matter of whether you are afraid of the dark.”
Mother Hsu, from the bench, says without looking up: “She is. We all are. We do it anyway.”
> truth | Say you are too. | keeners_a1s6
> mercy | Hold Bao Er’s hand. | keeners_a1s6
> quiet | Look at the window. | keeners_a1s6
> inquiry | Ask when the funeral is. | keeners_a1s6

=== keeners_a1s6 | Tomorrow
“Noon,” says Bao Er. She hops off the stool, brisk again. “A fisherman called Ou. Drowned eight days ago. He was struck from the Ledger for a debt before he drowned, so the Concord says he is not entitled to a public funeral. The parish says he is. The widow says she doesn’t care, and is going to bury him anyway.”
She holds up her chopstick like a baton.
“We sing at the burial. Forty voices, along the quay. We have done it for every drowned man since before the Wall. The Concord’s edict says we cannot say his name.” She grins fiercely. “It does not say we cannot sing it.”
“What is the difference?”
“A great deal,” says Mother Hsu. “If you are Lieutenant Gao.”
Gu, beside you, has gone grey. “Who is Lieutenant Gao?”
> truth | Ask. | keeners_a1s7
> mercy | Say you will be there. | keeners_a1s7
> quiet | Check the loft’s exits. | keeners_a1s7
> inquiry | Ask how many marines. | keeners_a1s7

=== keeners_a1s7 | The Procession
At noon the widow Ou walks at the head of the procession, in white, with her hair unbound. The coffin follows on the shoulders of six fishermen, a plain pine box with a rope handle on each side. After it come the keeners in a double file, forty strong, their clappers silent. The whole of the Tidewall fishing fleet is in the street behind them, hats in their hands.
It is the longest walk you have ever taken. The quay is lined with grey. Marines stand at every corner, in their leather, with their rifles at the slope. At the head of them is a lieutenant on a bay horse, young, red-faced, and furious. He is staring at the widow with the expression of a man who has been told to arrest a ghost.
The procession reaches the Wall. It halts.
Bao Er lifts her hand.
> truth | Sing. | keeners_a1s8 | npc:SU_KEENERS_LAMENT
> mercy | Hold the widow’s arm. | keeners_a1s8
> quiet | Watch the lieutenant. | keeners_a1s8
> inquiry | Count the rifles. | keeners_a1s8

=== keeners_a1s8 | The Lament at the Wall
The first note comes from Mother Hsu. It is that low clear note, the one that Ling sang. It rises in the noon air, over the heads of the marines, and the choir takes it. Forty voices. A wave of sound breaks along the Wall and rolls back from the stone.
The lieutenant shouts. “Halt! In the name of the Concord! Cease that singing!”
They do not cease. Bao Er’s voice is a pillar of silver in the middle of the sound. She is singing a name. It is not Ou’s. It is the name of the baker you read in the shed, and a child’s name, and a hundred others, one at a time, as the choir rolls them out.
The marines hesitate. The rifles waver. Someone at the back is crying.
“Fire!” shrieks the lieutenant, and nobody does.
> truth | Sing with them. | keeners_close | +keeners_sang_lament
> mercy | Stand by the widow. | keeners_close | +keeners_sang_lament
> quiet | Hold the held door. | keeners_close | +keeners_sang_lament
> inquiry | Watch the marines lower their guns. | keeners_close | +keeners_sang_lament

// ---------------------------------------------------------------- a2: the Hush Bell
=== keeners_a2s1 | The Hush Bell
“There,” says Bao Er. She points out of the loft’s one small window. Across the roofs, on the tower of the customs house, a great bronze bell hangs in an iron frame. It is the colour of a bruise. It is not an ordinary bell. It has no clapper. It is struck from outside, with a leather mallet, at noon every day, and it makes a sound that is not so much loud as flat. A dead low sound that seems to eat other noise.
“The Hush,” says Mother Hsu, with distaste. “It rang the day the edict was posted. It has rung every noon since. If you sing near it, you cannot hear yourself. You lose the note. You lose the words.”
Bao Er scowls. “Some of us have gone silent. Sixty choristers, down to forty. The rest have gone home. They say it hurts their ears.”
“It hurts something,” says Mother Hsu.
Ren Qiao, who has said nothing all morning, folds his arms. “A bronze bell,” he says. “On a stone tower. Sixty feet up.”
> force | Say you will silence it. | keeners_a2s2
> truth | Ask who rings it. | keeners_a2s2
> quiet | Look at the tower. | keeners_a2s2
> inquiry | Ask what it is made of. | keeners_a2s2

=== keeners_a2s2 | Brother Fen
The bell-ringer is called Fen. He is a tall stooped monk in a patched robe, with a long sad face and the dazed look of a man who has spent too many years in a small room. He lives in a cell at the foot of the tower, with a sleeping-mat and a kettle and a heap of old almanacs. He opens the door a crack.
“I ring it at noon,” he says in a thin high voice. “It is my duty. I do not enjoy it. I used to enjoy bells. I came to the customs house as a young man to ring the harbour bell, which was a lovely thing, a joy, a lark. Then one day they took it down and put up that.”
He looks past you at the tower. His long face twitches.
“I ring it with a leather mallet. I do it standing very far to one side. I keep my ears wrapped in wool.” He pauses. “I have never heard it properly. I believe that is a mercy.”
> force | Ask whether he would mind if it stopped. | keeners_a2s3
> truth | Ask why he does it. | keeners_a2s3
> quiet | Ask to see the tower. | keeners_a2s3
> mercy | Offer him a cup of tea. | keeners_a2s3

=== keeners_a2s3 | The Monk’s Request
“I would not mind,” says Brother Fen. It comes out in a rush, like water from a split cask. “I would not mind in the least. I pray for it. I pray every night that it will crack. I have been waiting eleven years for a miracle and none has come, and I am too frightened to break it myself.”
He wrings his sleeves.
“It is not the bell itself. It is the hush. When it rings, I cannot hear the harbour. I cannot hear the gulls. I cannot hear the little girl who sings at the fish-stall. I used to know her name. Now there is a sound like a mouth being stopped.”
He gazes at you with wet eyes.
“If you could break it,” he says, “I should be so very grateful. I should even,” he adds, with an effort, “be willing to hold the ladder.”
> force | Take his offer. | keeners_a2s4
> truth | Thank him. | keeners_a2s4
> quiet | Ask how the bell is hung. | keeners_a2s4
> mercy | Promise to be careful. | keeners_a2s4

=== keeners_a2s4 | Sixty Feet
The tower is a stone drum with a spiral staircase and no handrail. It is sixty feet from the floor to the bell-chamber, and the stair is slick with salt. You climb in single file. Ren Qiao leads, with a coil of rope over his shoulder; Gu follows; you come last, one hand on the wall.
At the top, a trapdoor. Beyond it, in a chamber of open arches, the bell hangs from a beam of black oak. Up close it is far bigger than it looked from the loft. It is as tall as a man and twice as wide, and its surface is covered with a dense script of fine hammered characters. The metal is not bronze. It is dull and grey, with a faint pearly sheen, and when you lay a hand on it the skin of your palm crawls.
“Seal-iron,” says Ren Qiao. His voice is barely audible. “It is a seal. The whole bell is one seal.”
“What does it seal?”
“Sound.”
> force | Look for the weak point. | keeners_a2s5
> truth | Read the script. | keeners_a2s5
> quiet | Touch the rim. | keeners_a2s5
> inquiry | Ask Ren what a seal of sound needs. | keeners_a2s5

=== keeners_a2s5 | What a Seal Needs
“A name,” says Ren Qiao slowly. He has gone pale. “Every seal has to be given a name. That is the first law. It has to be named for what it holds.” He runs a finger along a line of script. “This one is named Silence. It is named for all the songs that were sung in this bay, and every name that was spoken, and every call a mother ever made to a child on the quay.”
He steps back.
“It is not a bell. It is a mouth. It has been eating the harbour for eleven years.”
Gu has put his hands over his ears.
“How do we break it?” you whisper.
“We do not,” says Ren. “We cannot. It is far too strong. We have to give it something it cannot swallow.” He looks at you. “A name it cannot say.”
> force | Think. | keeners_a2s6
> truth | Say your own. | keeners_a2s6
> quiet | Say nothing. | keeners_a2s6
> inquiry | Ask what name. | keeners_a2s6

=== keeners_a2s6 | A Name It Cannot Say
You think of the names you know. The Wall has seven thousand. The Ledger has a million. The lament has seventy-two. You think of the dead fisherman whose funeral is tomorrow, who was struck for a debt. You think of Ke-er. You think of the child under the stone.
You put your palm on the grey metal, and say it.
The sound that comes out of you is not loud. It is not quite a word. It is the held door: the note that Bao Er said you had inherited. You let it fall, from beneath the ribs, and it rolls out across the chamber and strikes the inside of the bell.
The bell does not ring. It shudders. A line of white appears in the metal, a hairline crack running from the shoulder to the lip. The script around it begins to glow, a deep sullen red.
Brother Fen, from the trapdoor, utters a small shriek.
“It’s working,” whispers Gu.
> force | Say it again. | keeners_a2s7
> truth | Hold the note. | keeners_a2s7
> quiet | Step back. | keeners_a2s7
> mercy | Warn Fen to get clear. | keeners_a2s7

=== keeners_a2s7 | The Breaking
The crack widens. A shriek tears through the chamber, thin and high, like a nail drawn across slate. The beam groans. Dust falls from the roof in a fine rain. For an instant the whole tower seems to lean, and from far below you hear shouts, and the clatter of a hundred shutters flung open.
Then the bell splits. It parts down the middle with a sound like a sigh, and the two halves swing wide, and out of the gap rushes all at once a river of sound. It is the harbour. It is gulls and barrows and hawkers and the slap of rope on a mast. It is the voice of a girl at a fish-stall singing a nonsense song. It is eleven years of every sound the bell has eaten, let go in a single moment.
You are knocked flat. You lie on the stone, with your ears ringing and your eyes streaming, and you laugh.
> force | Get up. | keeners_a2s8
> truth | Stay there a moment. | keeners_a2s8
> quiet | Listen. | keeners_a2s8
> mercy | Check on Gu. | keeners_a2s8 | bond:gu+1

=== keeners_a2s8 | Fen’s Mallet
Brother Fen is on his knees in the middle of the chamber with the leather mallet in his hand. He is weeping. His tears run down his long face and drip from his chin, and he is smiling, a wide foolish smile, with his mouth open. The wool has fallen out of his ears.
“I can hear it,” he says. “I can hear the gulls.”
He cocks his head.
“Is that the girl at the fish-stall? Is that Pearl? I thought she had died.” He wipes his face with his sleeve. “I did not know she still sang.”
Below, the whole quay is shouting. The Hush is broken. A great roar of voices has gone up, a ragged cheer, and over it the sweet clear peal of a bell, a small one, which is somebody’s, somewhere, ringing for no reason but joy.
Bao Er is standing on the roof of the salting-shed with her arms wide. She is singing at the top of her voice.
> force | Wave to her. | keeners_close | +keeners_broke_hush
> truth | Take the mallet. | keeners_close | +keeners_broke_hush
> quiet | Sit with Fen. | keeners_close | +keeners_broke_hush
> mercy | Help Fen up. | keeners_close | +keeners_broke_hush

// ---------------------------------------------------------------- a3: the wedding
=== keeners_a3s1 | A Wedding
“A wedding,” says Bao Er slowly. She looks at the choir. They look at one another. “Singing is permitted at weddings. It is in the edict. Section nine. Joyous songs of the matrimonial variety.”
“Is that a loophole?” says Hao Lan.
“It is a gap.” Bao Er’s eyes are shining. “Mother Hsu! Is Fei-fei’s wedding still on?”
“It has been postponed twice,” says the old woman. “The groom’s mother has a bad leg.”
“Then she shall not be postponed a third time.” Bao Er springs up. “We shall have her married tomorrow noon, at the Wall, with all the trimmings. We shall have bunting. We shall have a cake. And at the right moment, when the sun is overhead, the bride’s party will burst into a very long, very sad wedding hymn that happens to contain some names.”
Hao Lan puts her pencil in her mouth.
> deceit | Offer to be the bride. | keeners_a3s2
> truth | Say it is a lie. | keeners_a3s2
> quiet | Offer to carry the cake. | keeners_a3s2
> mercy | Ask what the bride thinks. | keeners_a3s2

=== keeners_a3s2 | Fei-Fei
Fei-fei is twenty and plump and cheerful, with a round face and a mole by her mouth. She is eating a bun when you find her. She listens to the plan with her mouth full, nodding, and when you have finished she swallows and says, “Do I get a dress?”
“You get a dress,” says Bao Er.
“And a man?”
“You have a man. He is called Ping. He is a boat-builder. He has been engaged to you for two years.”
“Ah, yes. Ping.” She chews. “I do love him. He’s a bit slow.” She considers. “Will there be a procession?”
“A long one.”
“Then I’ll do it,” says Fei-fei. “I have always wanted to be married in the middle of a riot.”
Ping, who has just come in with a rope over his shoulder, hears the last word. His face falls. “A riot?”
> deceit | Reassure him. | keeners_a3s3
> truth | Warn him. | keeners_a3s3
> quiet | Hand him a bun. | keeners_a3s3
> mercy | Say it will be gentle. | keeners_a3s3

=== keeners_a3s3 | The Dress
The dress is borrowed from the fishmonger’s wife, and it is red. It is a loud, spangled, sleeveless thing of the sort a bride wears at a coastal wedding, with a train of fish-scale sequins and a headdress of seashells. Fei-fei looks like a mermaid who has lost a fight. She is blissful. She is turning in front of a bit of broken mirror, saying, “Oh, it’s lovely, it’s lovely.”
The choir has been given blue ribbons. Bao Er has put a bunch of paper flowers behind her ear. Mother Hsu, with great dignity, is wearing a hat shaped like a goose.
“It is a wedding,” she says sternly, to nobody. “It is a fine and proper wedding. I have been at three hundred. I know the form.”
You are given a lantern and told to look joyful.
You practise. Hao Lan, beside you, bursts into helpless giggles and has to be taken outside.
> deceit | Look joyful. | keeners_a3s4
> truth | Admit you do not know how. | keeners_a3s4
> quiet | Smile and say nothing. | keeners_a3s4
> mercy | Straighten Mother Hsu’s hat. | keeners_a3s4

=== keeners_a3s4 | The Marines
They meet the marines on the quay. Lieutenant Gao sits on his bay horse at the head of a file of ten men, and he scowls at the approaching procession with the settled loathing of an officer who has never in his life been invited to a wedding. He is young. His face is sunburnt. He has a pink nose.
“Halt!” he says. “What is this?”
“A wedding, sir,” says Bao Er, in the sweetest of voices. She curtsies, rather splendidly, in her ribbons. “Mistress Fei-fei, of the Quay, to Master Ping, of the Yard. We are on our way to the Wall, to make our vows.”
The Lieutenant looks at the bride. He looks at the ribbons, at the goose-hat, at the paper flowers, at the basket of cakes. He looks at the coffin-shaped box behind the groom.
“And that?” he says.
“The cake,” says Bao Er.
> deceit | Add a bow. | keeners_a3s5
> truth | Say nothing. | keeners_a3s5
> quiet | Look at the sea. | keeners_a3s5
> mercy | Offer the Lieutenant a cake. | keeners_a3s5

=== keeners_a3s5 | The Cake
It is a very large cake. It is nearly six feet long, and in the shape of a boat. It has pink icing and sugar roses and a tall tiered mast of spun sugar. It is borne on the shoulders of four fishermen, with the grave and anxious care of men carrying a sleeping child. A faint smell of ginger drifts from it.
The Lieutenant studies it. He does not blink.
“It is a very large cake,” he says.
“We are a very large family,” says Bao Er.
“It is the shape of a coffin.”
“It is the shape of a boat, sir. The groom is a boat-builder. It is traditional.” Bao Er’s expression is one of perfect and serene innocence. “Would you like a slice? Our good luck is infectious. Mother Hsu will say a blessing.”
Mother Hsu, in her goose-hat, bows.
The Lieutenant swallows. He looks at his men. They are staring longingly at the cake.
“Pass,” he says.
> deceit | Walk on. | keeners_a3s6
> truth | Thank him. | keeners_a3s6
> quiet | Keep your face still. | keeners_a3s6
> mercy | Leave him a cake. | keeners_a3s6

=== keeners_a3s6 | The Vows
At the Wall the bride and groom stand under the sun with their backs to the carved stone. Ping is shaking. Fei-fei is radiant. A priest who has been bribed with a pickled egg reads the vows in a rush. The choir stands in a half-ring, with their clappers up. The marines hold the quay.
When the last word is spoken there is a pause. Bao Er steps forward. She raises her hand and takes a deep breath.
“And now,” she says, in her loudest and brightest voice, “the wedding hymn!”
The choir sings. It is a bright sweet tune, a rising fifth, a long fall. It is exactly the tune of the lament, with the pace quickened. The words are cheerful: joy, luck, long life, a hundred sons. And in the second line of every verse, with exquisite casualness, tucked among the joys, is a name.
The marines do not notice. They are eating cake.
> deceit | Applaud. | keeners_a3s7
> truth | Sing the names under your breath. | keeners_a3s7
> quiet | Watch Gao. | keeners_a3s7
> mercy | Hold Fei-fei’s train. | keeners_a3s7

=== keeners_a3s7 | The Lieutenant Notices
It takes him three verses. Lieutenant Gao is not stupid; he is merely slow. On the fourth, he is chewing a mouthful of cake and humming along when he realises that he knows the name in the second line. It is his grandmother’s.
He stops chewing.
His grandmother was struck for an unpaid tax when he was nine. He was told she had died of a fever. He has never said her name since. It comes at him out of the wedding hymn with a clear fresh sweetness, between a hundred sons and good fortune.
His horse snorts. His face goes through an extraordinary series of changes. Then, gravely, he dismounts. He takes off his helmet.
“Sergeant,” he says, in a thick voice. “Fall the men out. We will stand easy.”
A silence falls. The hymn goes on. Behind him, one by one, the marines take off their helmets.
> deceit | Keep singing. | keeners_a3s8
> truth | Bow to him. | keeners_a3s8
> quiet | Say nothing. | keeners_a3s8
> mercy | Bring him a slice of cake. | keeners_a3s8

=== keeners_a3s8 | The Last Verse
They sing all nine of Fei-fei’s wedding verses, and at the end, as the sun begins to drop toward the sea, Bao Er sings a tenth, alone. It is not a joyful verse. It is not in the wedding book. It is the lament’s first, the calling of the names, in the old slow rhythm. Her voice is clear and strong. The marines, with their helmets off, stand listening.
Lieutenant Gao wipes his eyes on his sleeve.
“I did not see a wedding,” he says to the quay. “I will write that I attended a marriage. It was very well conducted. The cake was excellent.” He turns to Bao Er. “If any of you ever have another, I should like to be invited.”
“Naturally,” says Bao Er. She dips a curtsey, wobbling a little. “We marry often.”
Fei-fei, in her sequins, throws her bouquet. It lands in the sea.
> deceit | Laugh. | keeners_close | +keeners_wedding
> truth | Bow to the Lieutenant. | keeners_close | +keeners_wedding
> quiet | Look at the Wall. | keeners_close | +keeners_wedding
> mercy | Catch the bouquet. | keeners_close | +keeners_wedding

// ---------------------------------------------------------------- a4: the verses
=== keeners_a4s1 | The Oldest
The oldest woman in the loft is called Mother Hsu, and she is ninety-one. She is sitting at the end of the front bench with a rug over her knees, and she has been looking at you for some time with her head tilted, like a sparrow assessing a crumb. When you ask your question, she says, “I remember a good deal. Most of it is wrong.”
“I should like to hear it.”
“Would you?” She smiles. She has four teeth. “Sit, then. Sit. I will tell you what I know of the lament. It is not much, but it is mine.”
She pats the bench.
“My grandmother taught me the first seven when I was four. She taught me to hold the clapper, and to let the dead go. She told me about the last two.” She pauses. “She said they were in a book.”
> mercy | Sit beside her. | keeners_a4s2
> truth | Ask which book. | keeners_a4s2
> quiet | Listen. | keeners_a4s2
> inquiry | Ask how she knows. | keeners_a4s2

=== keeners_a4s2 | The Book
“A book of songs,” says Mother Hsu. “A little book, in grey cloth, very thin. My grandmother saw it once. It was kept in the Library, on a shelf by the door. A woman had put it there. She was a clerk. She had written down every verse of the lament that she could catch, and she had bound them into a book, and she had said: someone will want these.”
She sips her tea.
“The Library flooded, you know, in the year of the great tide. A hundred and eighty years ago. The sea came in over the wall and filled the lower floors. They never drained it. They left it, and it settled. But the book was on the top shelf. My grandmother always said so.”
She tilts her head.
“If it was on the top shelf, it might still be dry.”
> mercy | Ask if anyone has tried to look. | keeners_a4s3
> truth | Say you will. | keeners_a4s3
> quiet | Nod. | keeners_a4s3
> inquiry | Ask who the clerk was. | keeners_a4s3

=== keeners_a4s3 | A Clerk’s Name
“Pao,” says Mother Hsu. “A woman named Pao. She was the Library’s songkeeper.” She laughs, a thin dry creak. “They had one, you see. A person whose whole duty was to remember the songs. The Concord thought it was frivolous, and abolished the post. That was the year before the great tide.”
She leans toward you, breathing tea.
“She did not leave. She stayed in the Library, they say, in the lower stacks, copying. She would not stop. When the water came she was still down there, writing.” She nods. “That is how my grandmother told it. Pao wrote till the ink ran.”
The loft has gone quiet. The clappers are silent.
“I have often wondered,” says Mother Hsu, “whether she is still there.”
> mercy | Ask what she thinks. | keeners_a4s4
> truth | Say you will look for her. | keeners_a4s4
> quiet | Hold her hand. | keeners_a4s4
> inquiry | Ask for the other seven verses first. | keeners_a4s4

=== keeners_a4s4 | Seven Verses
She gives them to you. It takes the rest of the afternoon, and Hao Lan sits cross-legged with a notebook and takes them down. Mother Hsu sings them in her thin reedy voice, one by one, and the choir joins in on the refrains. Where she falters, a younger woman corrects her. Where the younger woman is unsure, a very old man at the back, who has not spoken a word all day, quietly supplies it.
It is astonishing. They have not been written down in two hundred years. They exist nowhere but in these forty heads. When they have finished, there are seven verses on thirty sheets of paper, with variant readings in the margins, and a note in Hao Lan’s hand that says: THIS IS A CRIME AGAINST THE CONCORD’S PROHIBITION ON RECORDING. I AM DELIGHTED.
Mother Hsu watches her write. Her eyes are bright.
“You are a clerk,” she says. “You should have been a songkeeper.”
Hao Lan blushes to the roots of her hair.
> mercy | Smile at Hao Lan. | keeners_a4s5
> truth | Say she would have been good. | keeners_a4s5
> quiet | Check the page. | keeners_a4s5
> inquiry | Ask how many songs are missing. | keeners_a4s5

=== keeners_a4s5 | The Others
“Hundreds,” says Mother Hsu. “We have the laments. The work-songs. The lullabies. The boating songs, the weaving songs, the hymns to the tide. There are others, too. The ones the Concord banned. We have to hum them in the dark.”
She taps her chest.
“We have kept them in here. We cannot write them down; the writing is forbidden. We cannot sing them aloud; the singing is forbidden. We have been waiting for a person who is allowed to do both.”
“Who is allowed?” you ask.
“Anyone who is not afraid.” Her eyes twinkle. “That is the whole of the law, in the end.”
She pats Hao Lan’s hand.
“Take this to the Library. Take it down to the shelf. Put it with the others. I think the book wants company.”
> mercy | Promise. | keeners_a4s6
> truth | Thank her. | keeners_a4s6
> quiet | Take the pages. | keeners_a4s6
> inquiry | Ask what the book is called. | keeners_a4s6

=== keeners_a4s6 | The Songbook
It is called the Songbook of Pao, and Hao Lan binds it that night in the Sing-Loft. She does it in a corner, by candlelight, using a needle and a thread of waxed silk. She cuts a cover from a ream of grey cloth. She prints the title on the front in careful brush-strokes. She sews the pages in, one by one, with tiny stitches, and the choir sit round her in a circle, watching.
When she has finished she holds it out. It is a small neat volume, grey as a dove. Mother Hsu takes it with trembling fingers.
“It is the first time,” she says, “in two hundred years.”
She touches the cover. She opens it, at random. She reads a line.
“Oh,” she says. “Oh, I had forgotten that one.”
She begins to cry, softly, with her small shoulders shaking.
> mercy | Hold her. | keeners_a4s7
> truth | Say it is yours. | keeners_a4s7
> quiet | Wait. | keeners_a4s7
> inquiry | Ask her to read it aloud. | keeners_a4s7

=== keeners_a4s7 | Read Aloud
She reads it aloud. She reads every verse, slowly, her thin voice cracking, with the choir taking up the refrains. It takes an hour. At the end, she closes the book, and sits with her hands on the cover.
“That is the lament,” she says, “as far as it goes. The last two are not here. Someone will have to find them.”
She looks at you.
“I have a favour to ask,” she says. “Not for me. For Bao Er. She has sung the first seven since she was six, and she has never sung the last. She says she does not mind. She says it is only a song.” Her small face is serious. “But she is lying. She wants it more than anything.”
“What do you want me to do?”
“Find the verse,” says Mother Hsu. “Bring it back. Give it to her.”
> mercy | Promise. | keeners_a4s8
> truth | Say it is a debt. | keeners_a4s8
> quiet | Bow. | keeners_a4s8
> inquiry | Ask where to start. | keeners_a4s8

=== keeners_a4s8 | The Funeral, Again
The next day, you attend the burial. It is conducted in the old way, with the widow in white and the coffin on the shoulders of six men. The keeners sing the lament along the quay. They have the book. They hold it open, passing it hand to hand, so that each in turn can read a line.
The marines are at the corners. Lieutenant Gao sits on his horse. He is watching the choir with an odd expression.
When they come to the first verse, he takes off his helmet.
When they come to the second, he dismounts.
By the seventh he is standing at attention, with his helmet under his arm and his lips moving. He does not interfere. His men do not interfere. The edict stands. Nobody enforces it.
At the end of the quay, Bao Er turns round to look at you, walking backwards, singing. Her face is wet. She is smiling. She is holding a note, and it is open, like a door.
> mercy | Smile back. | keeners_close | +keeners_a4_book
> truth | Join the chorus. | keeners_close | +keeners_a4_book
> quiet | Watch her. | keeners_close | +keeners_a4_book
> inquiry | Look at the Lieutenant. | keeners_close | +keeners_a4_book

// ---------------------------------------------------------------- hidden: Ke-er's verse
=== keeners_h1 | A Verse Through a Stone
You tell them about the knock. You tell them about the plaque, and the cold stone, and a child who sat in a chamber of black water and drew up her knees. You hum what you heard, and it is not much: a rising fifth, and a long fall, and four words.
The loft is perfectly quiet.
Mother Hsu has stopped fanning herself. She looks at you for a long moment. “Say that again,” she says.
You do. Your voice is thin. The fifth rises, the fall comes down. The four words are simple, and you do not know where you had them. They were not spoken. They were pressed into your palm when you touched the stone.
“That is the eighth,” says Mother Hsu. Her voice has gone odd. “That is the eighth verse. My grandmother said it was four words.”
Bao Er is white. “Say it,” she whispers. “Say the words.”
> inquiry | Say them. | keeners_h2
> truth | Hold her hand while you do. | keeners_h2
> mercy | Ask if she is ready. | keeners_h2
> quiet | Hum the tune alone. | keeners_h2

=== keeners_h2 | Four Words
They are plain words. They are the words that a child would say who had been shut in a dark place and had decided, quite reasonably, to be friendly.
I am still here.
For a moment nothing happens. The choir sits motionless. Mother Hsu’s cup shakes in her hand. Then Bao Er, who has been standing like a pillar of salt, lets out a breath that is half a sob and half a laugh.
“That’s all?” she says. “That’s the whole eighth verse?”
“That is all,” says Mother Hsu.
“Four words.” Bao Er puts her fist to her mouth. “I have been singing round it for fifteen years. I have been singing round the hole. I thought it was something enormous. I thought it was a secret. It was just—” She stops. “It was just hello.”
She laughs, and the laugh breaks.
> inquiry | Sit with her. | keeners_h3
> truth | Say it is not just hello. | keeners_h3
> mercy | Hold her. | keeners_h3
> quiet | Let her cry. | keeners_h3

=== keeners_h3 | Under the Wall
They sing it at the Wall that evening. It is the whole choir, forty strong, in a half-ring at the north end, with the lamplight sweeping over their heads and the tide coming in. Bao Er stands at the head. She has the book in her hands. She does not need it.
They sing the first seven verses. They sing them slowly, with the held door. When they come to the eighth there is a pause, a long breath, and then Bao Er opens her mouth and sings four words.
I am still here.
It is not loud. It is perhaps the quietest note of the day. But it carries. It goes through the stone like a pin through silk, and from somewhere deep in the Wall, in the last block on the lowest course, there comes an answer. A tapping. Tap. Tap-tap. Tap.
Then, very faint, so faint you might have imagined it, a child’s voice sings back: I am still here.
> inquiry | Close your eyes. | keeners_close | +keeners_ke_er_verse
> truth | Take Bao Er’s hand. | keeners_close | +keeners_ke_er_verse
> mercy | Weep. | keeners_close | +keeners_ke_er_verse
> quiet | Listen. | keeners_close | +keeners_ke_er_verse

// ---------------------------------------------------------------- close
=== keeners_close | What Bao Er Gave
The sun is down. The Wall has gone grey. The choir has gone home. Only Bao Er is left, sitting on the sea steps with her feet in the water and the book in her lap.
+[how] keeners_sang_lament | You stood at the Wall with forty keeners and sang the struck by name, and the marines lowered their rifles.
+[how] keeners_broke_hush | The Hush Bell lies split in the customs tower, and the harbour is loud again.
+[how] keeners_wedding | A wedding with a coffin-shaped cake made Lieutenant Gao take off his helmet.
+[how] keeners_a4_book | The Songbook of Pao is bound in grey cloth, with seven verses and two blank pages.
+[how] keeners_ke_er_verse | The eighth verse was four words long, and a child sang them back.
She does not look up.
“I am not good at this,” she says. “I am good at being loud. I am not good at being quiet and thanking someone.” She picks at the cover of the book. “So I will be loud. You are the best thing that has happened to me in fifteen years.”
She laughs, and wipes her nose.
“There,” she says. “That was horrible. I am going to be sick.”
She reaches into her tunic.
> truth | Tell her it was lovely. | keeners_close2 | +card_3
> mercy | Hand her a handkerchief. | keeners_close2 | +card_3
> quiet | Sit beside her. | keeners_close2 | +card_3
> inquiry | Ask what she has there. | keeners_close2 | +card_3

=== keeners_close2 | Sing What Is Struck
It is a brown card, soft as cloth. She turns it over in her fingers, and the numeral on the front catches the light. III. She pushes it into your hand without looking.
“Sing what is struck,” she says. “That is mine. Mother never read it. I read it when I was six, and I thought it meant: be a singer. Isn’t that funny?” She shakes her head. “It does not mean be. It means do. It means sing the thing that has been struck. Which is not only people. It is songs, and verses, and words. It is whatever the Concord has tried to cut.”
She rubs her nose.
“I have to learn the ninth,” she says. “There is a ninth. There is always a ninth.” She looks at the sea. “I wonder what it says.”
The card is warm. It fits against the others with a small, quiet click.
“Go on,” she says. “I need to practise.”
> truth | Promise to bring the ninth. | hub_b3_coast | +b3q_keeners
> mercy | Hug her. | hub_b3_coast | +b3q_keeners
> quiet | Leave her singing. | hub_b3_coast | +b3q_keeners
> inquiry | Ask what the ninth might be. | hub_b3_coast | +b3q_keeners
`,
  scenarios: String.raw`
$ SU_KEENERS_LAMENT | trust+4 respect+2 | elder | The Elder listens to the choir keen the struck by name in a loft above the fish market.
hostile: I stood at the back, and I could not leave. I could not stay. I had signed more than a hundred of those names in a single month. I recognised the ones they sang.
wary: It was the first time I have heard a name said by someone who was not reading it off a list. I found it unbearable. I found I could not stop listening.
neutral: Bao Er sang a name I had struck in my first year as Registrar. A baker. I did not know his name had a tune. It does.
warm: When they came to the verse I wrote, the third, my own, the one that I signed, the choir hesitated. Bao Er looked at me. I nodded. They sang it, and I found I could bear it.
devoted: If I could, I should like to learn the lament. I am a poor singer. I have a voice like a rusted gate. But I should like to stand at the back and sing the verse I am responsible for, once, aloud, until I have it right.
`,
  remarks: String.raw`
% keeners_bao_later | since:b3q_keeners>=3 | hao | I find I am humming the lament at my desk. It is a dangerous habit. It makes the other clerks look up. It makes me wish I had a voice.
% keeners_hsu_later | since:keeners_a4_book>=6 | gu | Mother Hsu wrote to say she has remembered another verse. She says it came to her in the bath. I think this is what history is like.
`,
};
