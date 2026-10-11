import type { Arc } from "../types";

/**
 * Book Two, arc ten: the Festival of Floating Names. On Midsummer Eve the nine canals of Qinglian Ford carry paper lanterns
 * for the dead, and the Hollow Lotus holds a Calling on the Silver Canal where struck names are spoken aloud. Four ways to
 * spend the night: float a lantern for each person you carry (a1), hold the bridge when the soldiers come (a2), swap the
 * lanterns to carry messages (a3), follow the Ferryman of the Dead (a4). A hidden route blows the willow whistle.
 * Cast: Wen Rui again, the Ferryman, Captain Hu of the Canal Watch, the lantern-maker Auntie Rong.
 */
export const lanterns: Arc = {
  id: "lanterns",
  name: "The Festival of Floating Names",
  scenes: String.raw`
=== lanterns_entry | Midsummer Eve
By dusk the nine canals of Qinglian Ford are a field of small lights. Every household has bought a paper lantern from the stalls on the quays, white for the dead whose names are in the Ledger, grey for those who are doubtful, and a third kind, which the Concord does not sell and does not forbid: blank. They are cut from the same paper. They carry no names. They are floated for the struck.
The crowds on the bridges are quiet in the particular way of people who have come to feel something and are determined not to hurry. Children carry candles in their cupped hands. Blind musicians play a slow air on bamboo flutes, almost a tune you know.
The Elder stands at the water’s edge in a plain cloak with her hood up, holding a white lantern in both hands as if it might spill. She has not said whom it is for. Beside her, Gu Hanzhen is turning a blank one over and over, and Mei Qiu, who has not come to the water in nineteen years, is standing three paces behind them, stiff as a post, with her iron bar hanging from her belt.
> truth | Buy a lantern for each person you carry, and float them one by one. | lanterns_a1s1 | +lanterns_a1
> force | Go to the Silver Canal, where the Hollow Lotus has promised a Calling, and see that it is not stopped. | lanterns_a2s1 | +lanterns_a2 needs:2
> deceit | Meet Yue Zhaoning at the lantern stalls, where a lantern can carry more than a name. | lanterns_a3s1 | +lanterns_a3
> quiet | Watch the black boat that moves against the current, collecting the blank lanterns. | lanterns_a4s1 | +lanterns_a4
> mercy | Take out the willow whistle, and blow the three notes at the water's edge. | lanterns_h1 |  | willow_whistle | You carry no whistle from a willow-lined jetty.

// ---------------------------------------------------------------- a1: a lantern for each
=== lanterns_a1s1 | Auntie Rong’s Stall
The lantern-maker is a stout old woman in a white apron, with a tray of paper tigers and a voice like a bell. “How many?” she says, before you have stopped. “Never mind. I can see it in your face. A lot. Come.” She takes a handful of paper from under the counter and cuts as she talks, quick and exact, with scissors older than the Concord. “White for the Ledger’s dead. Grey for the doubtful. Blank for the struck. Which?”
You count the people you carry. The fourteen. The fifteenth. A girl in a red mist who said she was only listening. A boy of twelve who wanted to be a gardener. The faces crowd your head, and you realise you have to choose, and the choosing is the whole of the festival.
“Hurry,” says Auntie Rong, without malice. “The tide turns at ten.”
> truth | Buy fifteen blank lanterns, one for each of the sealed. | lanterns_a1s2
> mercy | Buy one grey, for the doubtful, and one white for the Elder's silver comb. | lanterns_a1s2
> inquiry | Ask her what the blank ones mean, and who first floated them. | lanterns_a1s2
> quiet | Buy a single white lantern, and decide on the water. | lanterns_a1s2

=== lanterns_a1s2 | What the Stallholder Knew
“It started in the year of the Sealing,” says Auntie Rong, and her scissors do not slow. “A woman came to the stall the next midsummer, with a baby on her back, and asked for a lantern for a name that wasn’t written. I said, I have none. She said, then cut me a blank one. I did. I’ve been cutting them every year since.”
She hands you the first. It is perfectly cut, with a fold along the bottom for the candle.
“Now I sell two hundred a night. Nobody asks. Nobody says the name. The Concord pretends it doesn’t see, and I pretend I don’t know what it’s not seeing, and we all float our lights.”
She leans closer.
“The woman with the baby never came back. I like to think she moved to a better river.”
> truth | Tell her the baby was likely a girl, and is likely nineteen, and likely well. | lanterns_a1s3
> mercy | Thank her for fifteen years of blank paper. | lanterns_a1s3
> inquiry | Ask what the woman looked like. | lanterns_a1s3
> quiet | Take the lantern, and fold the paper carefully. | lanterns_a1s3

=== lanterns_a1s3 | The Elder’s Lantern
You find the Elder on the lowest quay step, where the water laps. She has not moved. Her white lantern is lit; she holds it a hand above the surface, and her fingers have gone pale on the frame.
“I cannot,” she says, quietly. “I have thought about this for a week. I have been telling myself it is a matter of will. I put my foot on the step, and it is a stair going down into water, and I cannot.” She laughs shakily. “Thirty years. I have never floated a lantern. I always had a clerk do it.”
She looks at you.
“It is for Mengjiao. I do not know whether she is dead. I do not know whether it is a blessing or an insult.”
> truth | Tell her it is both, and she should float it anyway. | lanterns_a1s4 | +lanterns_su_floated npc:SU_LANTERN_WATER
> mercy | Go down the step with her, and hold her elbow. | lanterns_a1s4 | +lanterns_su_floated npc:SU_LANTERN_WATER
> inquiry | Ask whether Mengjiao would take it as an insult. | lanterns_a1s4
> quiet | Take the lantern, and float it for her. | lanterns_a1s4 | +lanterns_su_proxy

=== lanterns_a1s4 | Mei Qiu’s Sister
Mei Qiu comes to the water last. She walks down the quay with her back very straight and stops three feet from the edge. In her hand is a grey lantern. She has been holding it for an hour. The paper has wrinkled where her fingers have gripped.
“I was told,” she says, “that the people the Concord sealed do not need lanterns. That they are not dead, only placed. That they are a kind of foundation.” She does not look at you. “I never believed it. I came here to prove it was a lie.”
Her chin trembles, once.
“Ke-er,” she says to the water. “Ke-er, I held the lamp.”
She sets the lantern down. It rocks, steadies, floats away.
> truth | Stand beside her, silent. | lanterns_a1s5 | +lanterns_mei_stood
> mercy | Float your own lantern beside hers, for the same name. | lanterns_a1s5 | +lanterns_mei_joined
> quiet | Look away, to give her privacy. | lanterns_a1s5
> inquiry | Ask her what the girl was like, when she laughed. | lanterns_a1s5

=== lanterns_a1s5 | Ren’s Stone and Gu’s Brother
Ren Qiao floats his lantern last of the three. It is white, and plain, and bears no name on its side. He sets it on the current with one hand, as a man puts a coin on a counter.
“Fifteen,” he says. “I set a fifteenth stone in the mortar of the bridge. This is its lantern.” He wipes his hands on his cloak. “It is a foolish thing, to keep a place for someone who may be alive.”
Gu has already floated his. It is blank. He did not write the name; he said it, once, under his breath: Hanming. The paper rocks away from him, white against black water, and he watches it as one watches a ship leave harbour.
“I used to think the mist took him,” he says. “Now I think the Law took him, and the mist kept him. It’s a different thing to be angry at.”
> truth | Tell Gu you'll be angry with him, as long as he wants. | lanterns_a1s6 | bond:gu+3
> mercy | Float a second blank lantern beside his. | lanterns_a1s6 | bond:gu+4
> inquiry | Ask Ren who else the fifteenth stone is for. | lanterns_a1s6 | bond:ren+2
> quiet | Stand between them, and say nothing. | lanterns_a1s6 | bond:gu+2 bond:ren+2

=== lanterns_a1s6 | Your Own Lantern
When the others have gone to find tea you stand alone at the edge of the quay with your own lanterns. Fifteen blank, in a basket, and a sixteenth you have not decided on. You have bought it on an impulse and not been able to explain why. It is white, unmarked. It has no name, because you haven’t one.
You know whose it is. It is the one who was nine. It is the child who was withdrawn, and not struck, and not recorded, and not found. It is you.
The cold seed turns in your chest. You light the candle with a taper from the stall.
You have never floated a lantern for yourself before. You do not know whether it is permitted.
> truth | Float it, and say aloud that it is for the one who was never written. | lanterns_a1s7
> mercy | Float it for the girl at the end of the second table in a warehouse, who said thank you for not being loud. | lanterns_a1s7
> quiet | Float it, and say nothing. | lanterns_a1s7
> inquiry | Hold it, and ask the river what name it would like. | lanterns_a1s7

=== lanterns_a1s7 | The Fifteen
You float the fifteen in a line, one after another, and they go down the canal together as a procession, glowing, a little crooked. You say the names as each leaves your hand. The fourteen in order. Then the fifteenth. The boy who wanted to be a gardener. The poet. The man who disliked cold rice. The girl of fifteen.
On the sixth lantern the water ripples. On the ninth, a sound comes up from somewhere under the bridge: a note, thin and sweet, such as a reed makes. On the fourteenth lantern, a second voice joins the first, a woman's, without words.
They are singing the tune. Somewhere under the water, or the dark, the dead are singing along.
When you float the fifteenth, Mengjiao’s, the singing stops.
> truth | Wait, and listen. | lanterns_a1s8
> quiet | Hum the tune back, very low. | lanterns_a1s8
> mercy | Reach out over the water with an open hand. | lanterns_a1s8
> inquiry | Ask who is singing. | lanterns_a1s8

=== lanterns_a1s8 | A Voice in the Water
The answer, when it comes, is a breath of wind and a murmur. You cannot say whether it is in your ears or in the water. It says, not unkindly, Child. It says, I am here, I am holding the tune. It says, Wanru is on the step. Tell her not to be afraid of the water.
The Elder, three bridges away, lowers her lantern to the surface. Her hands are shaking. She has taken the first step down.
The lantern touches the water. It floats.
She stands very still. The candle burns steadily on its raft of paper, drifting out into the dark.
> truth | Go to her and tell her what you heard. | lanterns_close
> quiet | Let her have the moment, and tell her afterward. | lanterns_close
> mercy | Take her arm as she comes up the step. | lanterns_close
> inquiry | Stay at the water and listen for more. | lanterns_close

// ---------------------------------------------------------------- a2: hold the bridge
=== lanterns_a2s1 | The Silver Canal
The Silver Canal is the narrowest of the nine, with high stone walls and a hump-backed bridge in the middle. On the bridge a hundred people are standing shoulder to shoulder, holding blank lanterns, saying nothing. Their faces are lit from below. Wen Rui is among them, grey and small, in a plain brown robe, with the faint stain of a line across his forehead.
“It is a Calling,” he says to you quietly. “We speak the names we are not allowed to. There are two hundred on this bridge who have a name to say. At midnight we will say them, one after another, and the Ledger will hear.”
He folds his hands in his sleeves.
“The Canal Watch has been told to prevent us. I do not think they will succeed. I think they will try.”
> force | Stand at the foot of the bridge, and tell the Watch they will have to go through you. | lanterns_a2s2 | +lanterns_a2_stood needs:2
> truth | Ask Wen Rui what the Calling is meant to do. | lanterns_a2s2
> mercy | Ask whether the children on the bridge know what is coming. | lanterns_a2s2
> inquiry | Ask how the Ledger hears a name that is spoken, not written. | lanterns_a2s2

=== lanterns_a2s2 | Captain Hu
The Canal Watch arrives at ten with torches. They march in two files down the quay, forty of them in grey sashes with leather helmets, and at their head is a stocky bearded man with a face like a sack of potatoes and a voice used to carrying across water. “Captain Hu,” he says, to you, before you can speak. “Canal Watch. Move aside.”
“No,” you say.
He studies you with the weary patience of a man who has been told no by smarter people. “I have forty men, and a warrant,” he says. “I have a sick wife and a boy at the academy. I do not want to do this.”
A torch hisses. A child on the bridge begins to cry, and is hushed.
“Please,” he says. “Move.”
> force | Stand your ground. | lanterns_a2s3
> truth | Ask to see the warrant. | lanterns_a2s3
> mercy | Tell him you will not harm his men, but you will not step aside. | lanterns_a2s3
> inquiry | Ask what the warrant says the Calling is. | lanterns_a2s3

=== lanterns_a2s3 | The Warrant
He gives it to you, a damp roll of grey paper, and while you read it the whole file of the Watch stands at ease. The warrant states that an unlicensed assembly of persons is to be dispersed in the interests of public order, that no violence is to be used, and that the Watch is to arrest any speaker who names a person not in the Ledger.
That is the whole of it. It does not say struck. It does not say Hollow Lotus. It says: any name that is not in the Ledger.
You look at Captain Hu. “You are to arrest anyone for saying a name?”
“For saying a name that isn’t in the book,” he says, miserably. “Yes.”
“Then every person on the bridge is a criminal.”
“Yes.”
> truth | Tell him you will say a name yourself. | lanterns_a2s4
> mercy | Tell him he does not have to do this. | lanterns_a2s4
> inquiry | Ask who signed the warrant. | lanterns_a2s4
> quiet | Hand it back, and wait. | lanterns_a2s4

=== lanterns_a2s4 | A Name Said Aloud
You say it into the dusk. “Ke-er.” It rings off the stone. Mei Qiu, three paces behind you, makes a small sound. The Watch moves; one man starts forward, and Captain Hu throws up a hand. You say another. “Hanming.” Another. “Ye Linzhi.”
The fourteen. The fifteenth. You say them in a plain voice, with your hands at your sides.
On the bridge, one by one, people have begun to say their own. A tinker. A cook. An old woman in a blue headcloth. It begins as a murmur and swells to a rush of voices, saying names. Hundreds of names, not in the Ledger, flung onto the air like handfuls of rice.
Captain Hu lowers his hand. He has gone quite white.
“I have a sick wife,” he whispers. “Her name is Bian.”
> truth | Tell him to say it. | lanterns_a2s5
> mercy | Ask whether she is struck. | lanterns_a2s5
> inquiry | Ask how long. | lanterns_a2s5
> quiet | Let him decide. | lanterns_a2s5

=== lanterns_a2s5 | The Captain’s Choice
He says it. Quietly, at first, then louder. Bian. His wife’s name, spoken at the foot of a bridge to a hundred strangers. A woman near the front turns and puts a hand on his arm. Behind him, the Watch is shifting. A young soldier is crying. An older one is saying a name of his own, under his breath.
Captain Hu takes off his helmet. He holds it against his chest.
“I am ordered to arrest the speakers,” he says, heavily. “I will begin with myself.”
He turns, and in a loud voice, orders the Watch to stand down. Nobody moves. Then, slowly, one at a time, the leather helmets come off.
> truth | Thank him. | lanterns_a2s6 | +lanterns_hu_stood_down
> mercy | Take his helmet, so his hands are free. | lanterns_a2s6 | +lanterns_hu_stood_down
> quiet | Bow, once, to the Watch. | lanterns_a2s6 | +lanterns_hu_stood_down
> inquiry | Ask what he will tell the Concord. | lanterns_a2s6 | +lanterns_hu_stood_down

=== lanterns_a2s6 | The Ledger Hears
At midnight the bridge is a column of light and voices. The names go up from it like sparks from a forge. Wen Rui stands in the centre with his eyes closed and his lips moving. The Watch has formed a ring around the bridge, not to hold it back but to hold it up, shoulder to shoulder, with their torches turned to the ground.
And the ground shakes.
It is a deep slow shudder, as of something very large turning in its sleep. The water in the canal rises and falls. The lanterns bob. From the Stone Island, from the Ledger Hall, a bell begins to ring, once, twice, a long unhurried tolling.
It is the Ledger. It is hearing.
> truth | Raise your voice with the others. | lanterns_a2s7
> quiet | Stand very still, and feel the ground. | lanterns_a2s7
> mercy | Hold the nearest child, who is frightened. | lanterns_a2s7
> inquiry | Ask Wen Rui what the bell means. | lanterns_a2s7

=== lanterns_a2s7 | What the Bell Meant
“It means it is listening,” says Wen Rui. His eyes are wet. “It has been deaf for seven hundred years. Tonight it hears.” He lifts his face to the sky. “I have waited twenty years for this bell.”
Then the sound changes. A second bell takes up the first, a flat harsh clangour from the Concord’s barracks. Soldiers: not the Canal Watch, but the Assembly Guard, in grey iron. They are coming over the Silver Bridge at a run, and the crowd, which a moment ago was a single voice, becomes a hundred frightened people.
“This is the part I could not prevent,” says Wen Rui, quite calmly. “Please do not take it personally.”
> force | Hold the bridge. | lanterns_a2s8
> truth | Tell the crowd to sit down and keep saying the names. | lanterns_a2s8
> mercy | Get the children off the bridge. | lanterns_a2s8
> quiet | Pull Wen Rui into the shadow. | lanterns_a2s8

=== lanterns_a2s8 | A Night That Did Not Break
It does not break. That is the astonishing thing. The Assembly Guard come on at a run, and the crowd, which has every reason to scatter, sits down. They sit on the bridge, on the stones, in the water-steps. A hundred and fifty people, saying the names of their dead in low voices, with their hands in their laps.
The Guard slow. They stop. Their captain, a thin man in an iron helmet, looks at the Canal Watch with their helmets off, and at Captain Hu with his hand on his heart, and at a woman of seventy who is quietly saying his own mother's name.
He takes off his helmet. After a long moment, he sits down.
Duan Wuyi, arriving at the head of the quay with his staff and his hat askew, takes one look and says, mildly, to nobody, “Well. I will have to write this up.”
> truth | Sit down beside the Guard captain. | lanterns_close | +lanterns_bridge_calm
> mercy | Help Wen Rui to a bench. | lanterns_close | +lanterns_bridge_calm
> quiet | Slip away before Duan asks you anything. | lanterns_close | +lanterns_bridge_calm
> inquiry | Ask Duan what he will write. | lanterns_close | +lanterns_bridge_calm

// ---------------------------------------------------------------- a3: swap the lanterns
=== lanterns_a3s1 | Lanterns That Carry More
Yue Zhaoning has a stall of her own, between Auntie Rong’s and the fish-seller’s, with a cloth thrown over the front and a lamp inside. She is selling lanterns. They look like everyone else’s: white, grey, blank. They are a little heavier. They have a fold along the bottom that seems deeper than it needs to be.
“A lantern is a wonderful thing,” she says, lounging on a stool. “It goes where the river goes. Nobody looks at it. Nobody stops it. Nobody asks what is under the candle.” She tilts her head. “I have a number of friends along the coast who would like to receive messages. I have a number of friends in this city who would like to send them.”
She taps the lamp.
“Would you like to carry a few?”
> deceit | Say yes, and ask what you are carrying. | lanterns_a3s2
> truth | Ask who the messages are from, and who they are for. | lanterns_a3s2
> inquiry | Ask what happens if a lantern is intercepted. | lanterns_a3s2
> mercy | Ask whether anyone will be hurt if you say no. | lanterns_a3s2

=== lanterns_a3s2 | Under the Candle
She shows you the trick. Under each candle is a flat tin, the size of a playing card, sealed with wax. Inside is a slip of paper, rolled tight. She has two hundred, in a basket under the counter, each addressed with a mark rather than a name: a feather, a knot, a leaf, a double ring.
“Letters to the struck,” she says. “From families who aren’t allowed to write. Letters from the struck, to families who aren’t allowed to read. They go down the river, and at the sea, the Salt Coast takes them.” She flicks the wax with a thumbnail. “I’ve been doing this nine years.”
She looks at you.
“You’ve a way of getting into rooms. I have a basket that needs to get into a few.”
> truth | Ask which rooms. | lanterns_a3s3
> deceit | Offer to carry the basket yourself. | lanterns_a3s3
> mercy | Ask to read one. | lanterns_a3s3
> force | Tell her it's too dangerous for the children's sake. | lanterns_a3s3

=== lanterns_a3s3 | A Letter
She lets you read one. It is on a thin slip, in a labouring hand, in the old script. It says: Dear daughter. Your father is well. The harvest was good. I have lit the lamp for you each night. I do not know if you can read this. I hope the river is kind.
There is no signature, only a small leaf, drawn in ink.
You turn it over. On the back is a reply, in a different hand, small and neat: Dear Mother. I can read it. I am well. I am in a sea-town with a woman who is kind. I have a window. Tell Father the pear tree is not to be cut.
Yue Zhaoning watches you read. She doesn’t speak.
“Nine years,” she says at last. “They never meet. It’s the post that matters.”
> truth | Hand it back, and say you will carry the basket. | lanterns_a3s4
> mercy | Ask her to let you add a line. | lanterns_a3s4
> inquiry | Ask whether any letters have been lost. | lanterns_a3s4
> quiet | Put the slip back in its tin and seal it. | lanterns_a3s4

=== lanterns_a3s4 | The Route of the Lights
You carry the basket along the canals with Gu and the warden, and set the lanterns on the water at intervals, one at the foot of each bridge. A white, a grey, a blank. Under every candle is a letter. They float away down the nine canals in the dusk.
It is, you realise, a very bold thing. It is also very quiet. Not a person on the quay marks you. Not a soldier looks twice.
At the Fourth Bridge, a small man in a brown robe steps out of a doorway and blocks your path. He is neat, grey and gentle. He has a faint line across his forehead.
“I think,” says Wen Rui, softly, “you are carrying something that belongs to my friends.”
> truth | Ask him whose friends. | lanterns_a3s5
> deceit | Tell him the lanterns are your own. | lanterns_a3s5
> force | Put the basket behind you. | lanterns_a3s5
> quiet | Wait. | lanterns_a3s5

=== lanterns_a3s5 | The Hollow Lotus Posts a Letter
“Please,” he says. “I am not here to take it. I am here to add.” He draws from his sleeve a small tin, the size of a playing card, sealed with wax. “My own letter. To a woman I have not seen in twenty years.” He looks at it. “I did not know how to send it. I thought it might be easiest to ask the person who has turned out, by chance, to be carrying everyone’s.”
You take it. It weighs nothing.
“I will not say her name,” he says. “It will find her.” His smile is tired. “It was a pleasure to see you again. I hope you are well. I hope you are being kinder to yourself than the Concord is.”
He bows, and goes.
> truth | Put it among the others. | lanterns_a3s6
> mercy | Ask whether he wants to be written back. | lanterns_a3s6
> inquiry | Read the mark on the tin. | lanterns_a3s6
> quiet | Watch him go. | lanterns_a3s6

=== lanterns_a3s6 | The Mark on the Tin
The mark is a feather. Your fingers know it before your mind does: you saw it on the slip in the basket, beside a labouring hand and a reply. The mother's. The daughter's. The pear tree is not to be cut.
It is the same feather. Wen Rui's letter is addressed to the woman on the other side of that correspondence, the one who writes to her daughter in a sea-town. It is addressed to the daughter's mother.
You close your fist around the tin. Gu, at your shoulder, says, “Is it...”
“I think,” you say, “that he is writing to his wife.”
> truth | Send it with the rest. | lanterns_a3s7 | +lanterns_wen_wife
> mercy | Hold it back, until you can ask him. | lanterns_a3s7
> inquiry | Read the pear-tree letter again. | lanterns_a3s7
> quiet | Float it at the Fifth Bridge, alone. | lanterns_a3s7 | +lanterns_wen_wife

=== lanterns_a3s7 | A Pear Tree
You float it at the Fifth Bridge, where the water slows. The candle burns steadily. The little tin turns once and drifts out, under the arch, into the dark.
Yue Zhaoning has followed you with a boat-hook and her hands in her pockets. She looks at the lantern, then at your face.
“I can tell you,” she says, “that I knew. I knew when I took the basket from him, nine years ago, that the leaf was a wife. I never said. I didn’t think he knew.”
She bends and flicks a pebble into the water.
“He must be an awful man to have waited twenty years,” she says. “Or a very good one.”
> truth | Tell her he is the second kind. | lanterns_a3s8
> mercy | Say nothing. | lanterns_a3s8
> inquiry | Ask where the sea-town is. | lanterns_a3s8
> quiet | Look at the water. | lanterns_a3s8

=== lanterns_a3s8 | A Basket, Empty
By midnight the basket is empty. Two hundred letters have gone down the nine canals, and not one has been stopped. You and Yue Zhaoning sit side by side on the steps of the Seventh Bridge, passing a flask of rice wine between you, watching the lights drift toward the sea.
“Nine years,” she says. “And I’ve never watched them go.” She hands you the flask. “I’ve been too busy delivering.”
She tips her head back. A single star has come out above the Stone Island, very bright. The bells of the Ledger Hall, far off, begin to ring.
“There,” she says. “They’re listening.”
> truth | Tell her you will help with the next basket. | lanterns_close | +lanterns_yue_basket
> mercy | Pass her the flask. | lanterns_close | +lanterns_yue_basket
> quiet | Sit with her till the bell stops. | lanterns_close | +lanterns_yue_basket
> inquiry | Ask where the letters end up. | lanterns_close | +lanterns_yue_basket

// ---------------------------------------------------------------- a4: the Ferryman
=== lanterns_a4s1 | The Black Boat
It comes up the Third Canal against the current, poled by a tall thin figure in a hooded cloak. A black punt, shallow, with a single lamp in the bow. It moves slowly, and the lanterns on the water part before it like a curtain. Where it passes, the blank ones, and only the blank ones, are lifted from the surface and laid in the bottom of the boat.
Nobody on the quays looks at it. A child on a bridge, holding her mother’s hand, tilts her head and stares, wide-eyed, and her mother pulls her gently away.
You watch it go under the next arch. The cold thing in your chest has gone very still, the way a rabbit goes still.
> quiet | Follow along the quay, keeping to the shadows. | lanterns_a4s2
> truth | Call out to the boatman. | lanterns_a4s2
> inquiry | Ask the child on the bridge what she sees. | lanterns_a4s2
> force | Jump into a skiff and cut it off. | lanterns_a4s2

=== lanterns_a4s2 | What the Child Saw
The child is perhaps six. She has a plait down her back and a rag doll in her free hand. When you crouch beside her she looks you up and down with grave suspicion, as a person does who has been warned about strangers.
“The ferryman,” she says. “He takes the empty ones.”
“Where?”
She considers. “To the place where it is quiet.” She says it as one says a street, a fact, not a mystery. “Grandmother says you mustn’t look. I look.”
Her mother pulls her away. She goes, looking back over her shoulder, and mouths, quite distinctly, a word at you. You can read it on her lips. It is Wanderer.
> truth | Ask her mother how the child knows. | lanterns_a4s3
> quiet | Watch them go. | lanterns_a4s3
> mercy | Give the child a sweet. | lanterns_a4s3
> inquiry | Follow the black boat. | lanterns_a4s3

=== lanterns_a4s3 | The Fourth Arch
You catch up with the boat under the arch of the Fourth Bridge, where the water is deep and dark and the light does not reach. It is stopped. The ferryman is standing in the stern, looking up at you. His hood has fallen back.
He is not what you expected. He is a young man, perhaps twenty-five, with pale eyes and cropped hair, and across his forehead a faint grey smudge, a line that was drawn and rubbed out. The smudge of the struck.
“You’re early,” he says. “I was told you’d come after midnight.”
His voice is soft. His hands on the pole are black to the wrist.
> truth | Ask who told him. | lanterns_a4s4
> inquiry | Ask where he takes the lanterns. | lanterns_a4s4
> quiet | Step down into the boat. | lanterns_a4s4
> force | Tell him you'll go no farther until he answers. | lanterns_a4s4

=== lanterns_a4s4 | The Quiet Place
He poles you out of the city. The canals narrow and the houses fall behind. The black boat slides past a cemetery, an orchard, a dye-works, a clutch of reed huts. The blank lanterns in the bottom of the boat glow faintly, all together, like a small hearth.
“I was a clerk,” says the ferryman. “I was struck at nineteen, for a copying error. I woke up the next day and my mother did not know me.” He doesn’t look at you. “I was dead, in a way. So the Lotus gave me a boat.”
The last house falls behind. A bank of reeds. A low island with a ruined shrine.
“I take them to the island,” he says. “Where the quiet is.”
> truth | Tell him you are sorry. | lanterns_a4s5
> mercy | Ask his name. | lanterns_a4s5
> inquiry | Ask what is on the island. | lanterns_a4s5
> quiet | Watch the reeds. | lanterns_a4s5

=== lanterns_a4s5 | The Shrine of Blank Paper
The shrine is half-ruined, a roofless hall of pale stone on a mound in the reeds. There is no altar. There is a floor of pale river sand, and on the sand, in rows, thousands of blank lanterns, extinguished, spread out and weighted with pebbles. They have been laid out in the form of a circle. There are nine concentric rings.
In the centre, a woman is kneeling, in white, with her back to you.
“Nine rings,” says the ferryman, softly. “One for every year since the Calling began. Each ring is a year of blank paper. Soon the circle will close.”
The woman in white doesn’t turn. In the lantern-light her hair is the colour of ash, and her shoulders are straight.
> truth | Ask who she is. | lanterns_a4s6
> quiet | Stand very still. | lanterns_a4s6
> mercy | Ask the ferryman if she needs help. | lanterns_a4s6
> inquiry | Ask what happens when the circle closes. | lanterns_a4s6

=== lanterns_a4s6 | Ping’s Sister
She turns, and it is not whom you expected. She is a woman of sixty, with a lined and gentle face, in a white robe with a closed lotus embroidered at the hem. She looks at you without surprise.
“I am Ping’s sister,” she says. “I keep the shrine. We were two of seven. The others are in the water.” She smiles slightly. “It is a family business, being struck.”
She stands, slowly, with a hand on her knee.
“Madam Ash sends her regards. She says you are late. She says she does not mind.”
She holds out a blank lantern, a white thing with a fold along the bottom, and in the fold is a letter.
> truth | Take it. | lanterns_a4s7 | +lanterns_ash_letter
> inquiry | Ask who Madam Ash is, in her own words. | lanterns_a4s7 | +lanterns_ash_letter
> mercy | Ask whether she is lonely. | lanterns_a4s7
> quiet | Take it, and say nothing. | lanterns_a4s7 | +lanterns_ash_letter

=== lanterns_a4s7 | Madam Ash’s Letter
The letter is brief. It is written on grey paper, in a clear hand, with a fine brush, and signed with a single character: Ash. It reads: I should like to meet you. I will not ask you to join me. I will ask you to listen. You are the only person in the world who will not mind being asked. Come to the Ash Steppe when you are ready. I will be there. I am always there.
Under the signature, a postscript, smaller: The nine rings close at midnight on the day of the Great Sealing. After that, the quiet cannot be broken. Please do not let it come to that.
The reeds rustle. The ferryman is looking at the sky. A bell begins to ring from the Stone Island.
> truth | Fold it into your sleeve. | lanterns_a4s8 | +lanterns_ash_letter
> quiet | Hold it a long moment. | lanterns_a4s8
> inquiry | Ask when the Great Sealing is. | lanterns_a4s8
> mercy | Light a lantern in the sand, for the ones in the water. | lanterns_a4s8

=== lanterns_a4s8 | Back to the City
He poles you back before dawn, through the mist that lies on the reeds like breath. The city rises ahead of you in a ring of lights. The festival is ending. The last lanterns are drifting out through the water-gates. Somewhere a band is playing, very softly, the tune that is almost one you know.
The ferryman sets you down at the Third Quay. He does not get out of the boat.
“Madam Ash says to tell you,” he says, “that the nine rings are not a threat. They are a courtesy. She wanted you to know how many people are waiting.”
He puts his pole to the stone, and the black boat slides away.
> truth | Call after him that you will come. | lanterns_close
> mercy | Thank him. | lanterns_close
> quiet | Watch the boat disappear. | lanterns_close
> inquiry | Ask his name. | lanterns_close

// ---------------------------------------------------------------- hidden route: the whistle
=== lanterns_h1 | Three Notes
The willow whistle is the length of a finger and made of green wood. You put it to your lips at the edge of the Seventh Canal in the dark, with the lanterns floating past, and blow three notes, as Madam Sui said, and wait to see who answers.
For a moment, nothing. A lantern drifts by. A bat flickers through the lamplight.
Then, far down the canal, a soft sound: a reed pipe, answering. The three notes, in the same order. Then again, from a different direction, from the east. Then another. All along the canals, from under the bridges, from the doorways, from the boats, the tune is being returned.
Beside you Gu lets out a breath. “It’s the river,” he says. “It’s all the rivers.”
> truth | Blow the three notes again. | lanterns_h2
> quiet | Listen. | ^
> mercy | Hand the whistle to Gu. | ^
> inquiry | Ask who is answering. | ^

=== lanterns_h2 | The River Answers
The water rises. Not much. A hand’s breadth. The nine canals, which a moment ago were stagnant, begin to flow, and the flow is toward the sea. Every lantern turns, as one, and starts to move: a thousand lights, a drifting galaxy, bright on the black.
From somewhere in the current comes a voice. You know it. You heard it at a willow-lined stone, four hundred years old and tired and amused. Four syllables, Lian-ta-wei-shu, said in a ripple. Then, in an easy tone, as of an old friend: Child. I have friends in this city.
The lanterns gather at the Stone Island. They form a ring.
> truth | Say the river's name, three times. | lanterns_h3
> quiet | Bow to the water. | ^
> mercy | Ask whether the lanterns will be all right. | ^
> inquiry | Ask what the ring is for. | ^

=== lanterns_h3 | The Ring of Light
The ring of lanterns lies around the Stone Island, thousand upon thousand. The river speaks again, not to you, to the Island: to the tower with its nine lanterns, the Ledger Hall, the Archive. It says, Listen. It says, I carry names. It says, Here is a river that has not forgotten a single one.
And the Ledger Hall, which for seven hundred years has been deaf, rings its bell.
You stand on the quay with your hand on the whistle. Beside you, Gu is weeping openly. On the far bank, the Elder, who floated her lantern an hour ago, has fallen to her knees on the stone.
“It’s listening,” she says. “It’s listening.”
> truth | Go to her. | lanterns_close | +lanterns_river_answered
> mercy | Kneel beside her. | lanterns_close | +lanterns_river_answered
> quiet | Stay where you are, and let the river work. | lanterns_close | +lanterns_river_answered
> inquiry | Ask Gu if he can hear the tune. | lanterns_close | +lanterns_river_answered

// ---------------------------------------------------------------- close
=== lanterns_close | After the Bell
Dawn finds the nine canals full of burned-out paper, grey flakes riding the current to the sea. The city is hoarse and tired, and a little happy, in the way of a crowd that has done something forbidden and been forgiven.
+[a] lanterns_a1 | You floated lanterns for everyone you carry, and the water sang back.
+[a] lanterns_a2 | You stood on a bridge while two hundred people said what they were not allowed to say.
+[a] lanterns_a3 | You carried two hundred letters in a basket and not one was stopped.
+[a] lanterns_a4 | You followed a black boat to an island of blank paper and were handed a letter.
+[b] lanterns_su_floated | The Elder floated her white lantern with her own hand, and has been quiet since, in a way that does not hurt.
+[b] lanterns_su_proxy | You floated the Elder's lantern for her. She stood on the step and watched it go, and does not speak of it.
+[b] lanterns_hu_stood_down | Captain Hu of the Canal Watch took his helmet off in front of a hundred strangers. His sick wife's name is Bian.
+[b] lanterns_bridge_calm | The Assembly Guard sat down on the Silver Bridge. Duan Wuyi is writing it up, and has been writing for an hour.
+[b] lanterns_wen_wife | Wen Rui's letter went down the Fifth Canal in a tin, to a woman with a pear tree.
+[b] lanterns_river_answered | The river answered a willow whistle, and the Ledger Hall rang its bell.
+[c] lanterns_mei_stood | Mei Qiu floated a grey lantern, and you stood beside her.
+[c] lanterns_mei_joined | You floated your own lantern beside Mei Qiu's, for the same name.
+[c] lanterns_ash_letter | Madam Ash's letter is in your sleeve. The nine rings close at midnight on the day of the Great Sealing.
+[c] lanterns_yue_basket | Yue Zhaoning has asked you to help with the next basket.
> truth | Find the Elder, and ask how the water felt. | lanterns_close2
> quiet | Walk the nine canals at dawn, and watch the paper go. | lanterns_close2
> mercy | Find Mei Qiu, and bring her tea. | lanterns_close2
> inquiry | Ask Duan Wuyi what the bell meant. | lanterns_close2

=== lanterns_close2 | Morning After
Duan Wuyi is writing in the shade of an awning on the quay, with a cup of tea going cold at his elbow. He looks up as you approach, and puts down his brush.
“The bell,” he says, “has rung once in seven hundred years. It rang last for the Sealing. It rang last night, for a bridge. I have been trying all morning to write the sentence that explains why, and I find there isn’t one that is both true and permitted.”
He rubs his eyes.
+ lanterns_a2_stood | The Assembly Guard's captain has asked to meet the person who stood at the foot of the bridge.
+ lanterns_river_answered | The Ledger Hall's bell rang when a river spoke. He does not say it was your whistle. He does not need to.
+ lanterns_ash_letter | You do not mention the letter in your sleeve. He glances at it, and does not mention it either.
“I will say in my report,” he says, “that a festival was held, and a bell rang, and no one was harmed. All of which is true.”
> truth | Thank him. | hub_b2_city | +b2q_lanterns
> mercy | Fetch him a fresh cup of tea. | hub_b2_city | +b2q_lanterns
> quiet | Sit down opposite and say nothing. | hub_b2_city | +b2q_lanterns
> inquiry | Ask what he is not saying. | hub_b2_city | +b2q_lanterns
`,
  scenarios: String.raw`
$ SU_LANTERN_WATER | trust+4 respect+2 fear-5 | elder | The Elder floats a lantern at last, for her sister, with the player beside her.
hostile: I floated the lantern. I do not know why I tell you. I suppose a witness is a witness, even to an act of weakness.
wary: I stepped down to the water. I did not fall. I do not wish to be congratulated. I wish to be left alone with the fact of it.
neutral: Thirty years I have stood beside rivers. Tonight I put a lantern on one. It seems a small thing to say, and I find I want you to know.
warm: It floated. It is out there, in the dark, with all the others. I am more afraid of how light I feel than I was of the water. Thank you for the step.
devoted: She was there. In the water. I heard her voice, or I imagined it. I do not care which. She said, do not be afraid of the water. It was the first thing she ever said to me. It seems she has not changed her mind.
? tone:truth>=3/5 | You told me what you heard in the river, plainly, as you have told me everything. I think I could believe it even if I did not want to.
`,
  remarks: String.raw`
% lanterns_hu_later | since:lanterns_hu_stood_down>=18 | elder | Captain Hu of the Canal Watch has asked to be transferred to the Law Hall's wards. He says he wants to learn what a ward is for. I have written back that I would like to learn it too.
% lanterns_mei_later | since:lanterns_mei_joined>=14 | elder | Inspector Mei left a grey lantern on my doorstep. There was no name on it. I put it in the window. It has been burning since.
% lanterns_yue_later | since:lanterns_yue_basket>=20 | elder | Another bundle from the river, tied with a double carrick. I have stopped asking where they come from. I have begun to read what is in them.
`,
};
