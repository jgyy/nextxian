import type { Arc } from "../types";

/**
 * Book Two, arc twelve: Beneath the Ledger Hall. The Concord keeps the Ledger Stone, a slab of pale green jade the height of
 * a house on which Heaven's Ledger is copied, in the Vault of Names. The Wanderer's seed answers it. What the Stone shows is
 * a blank rectangle that pulses, and in the rectangle a name that is written fresh each night. Four ways in: a lawful reading
 * (a1), a heist with the Hollow Lotus (a2), the night Censors' sashes (a3), Tong's ink door (a4). A hidden route brings the
 * Law Hall's shard to the Stone (needs the player or Ren to be carrying it).
 * Cast: Old Sou the warden of the vault, Wen Rui, Scribe Tong, Mei Qiu, Hao Lan.
 */
export const vault: Arc = {
  id: "vault",
  name: "Beneath the Ledger Hall",
  scenes: String.raw`
=== vault_entry | The Door Under the Hall
The Ledger Hall sits at the top of the Crane Stairs, a broad low building of white stone with a roof of blue glass, and beneath it, three flights down a spiral stair that no one has climbed without a Censor’s escort in seven hundred years, is the Vault of Names. Duan Wuyi walks you to the head of the stair on the morning of the fourth day. He carries no staff. He has left it, he says, in his room.
“I have been asked to give a reading to the Elder of the Azure Cloud Sect,” he says, “in the presence of her witness. The vault is open to the Assembly’s delegates on the eve of the trial. It has not been opened to a witness. I have taken the liberty of calling you a delegate.”
His face is perfectly grave. Behind him, at the top of the stair, a gaunt old Censor in a hooded grey robe stands like a post. He has one hand cupped behind his ear. “Old Sou,” says Duan. “He is deaf. He is also the only man alive who has read the Stone in full. He will not be pleased.”
> inquiry | Ask for a lawful reading, with the Censor-General’s seal and the Stone’s own questions. | vault_a1s1 | +vault_a1
> force | Meet Wen Rui at the Silver Bridge, where he says there is a way in that does not need a seal. | vault_a2s1 | +vault_a2 needs:2
> deceit | Borrow the grey sashes of the night Censors from Hao Lan’s chest, and go down at the changing of the watch. | vault_a3s1 | +vault_a3
> quiet | Ask Scribe Tong what he sees when he looks at the Ledger Hall. | vault_a4s1 | +vault_a4
> truth | Carry the Law Hall’s shard down the spiral stair, wrapped in grey silk against your own chest. | vault_h1 |  | censors_shard_kept | The shard is not with you.
> truth | Ask Ren Qiao to bring the shard he has kept, and carry it down together. | vault_h1 |  | censors_shard_ren | Ren Qiao is not keeping the shard.

// ---------------------------------------------------------------- a1: a lawful reading
=== vault_a1s1 | Old Sou
The stair goes down in a spiral that seems to wind more tightly the further you descend. Torches burn in iron brackets, one to every twelve steps. Old Sou walks ahead with a lantern, turning his head to the side every few steps, as a bird does when it listens. He says nothing. At the bottom, in a round antechamber lined with grey slate, he stops and holds out a hand.
“Your seal,” says Duan, mildly.
You give it. The old man looks at it with his nose almost touching, and then at you, with eyes that are milky and pale, and then he speaks in a loud dry croak, like a rusty hinge. “A WITNESS.”
His voice rings off the slate. Hao Lan, at your shoulder, winces.
“He says he is deaf,” she whispers. “I think it is the other way round. I think everyone else is.”
> truth | Answer, as loudly as you can, that you are. | + | +vault_sou_met
> quiet | Bow to him, once. | ^
> mercy | Offer him your arm for the last of the stair. | ^
> inquiry | Ask Duan if there is a way to speak to him that does not require a shout. | ^

=== vault_a1s2 | The Stone Questions
The vault is round, high and vaulted, and entirely dark except for a single pale green light that comes from the centre of the floor. You see it only slowly: a slab of jade as tall as a house, as wide as a barn gate, standing on end in a pit of white sand. It is not carved. The names are not cut into it. They move.
They drift across its face in columns, in the old script and the new, each a faint glimmer of gold on the green: a slow current, as of fish in a pond. Where one fades, another rises. The whole slab hums at the edge of hearing, a note you feel in your teeth.
“The Ledger Stone,” says Old Sou, in his croak. “You do not read it. It reads you. Answer.”
A voice speaks, from the jade or from your own chest. It says: Why do you come?
> truth | Say: to learn what was torn. | +
> inquiry | Ask the Stone what it is asking. | ^
> mercy | Say: because someone is waiting. | ^
> quiet | Say nothing, and let the question pass. | ^

=== vault_a1s3 | Three Questions
It asks three questions. The first is the one you have already answered. The second is: What do you carry? You say the truth, or as much as you know: a cold seed in your chest, a comb that is not yours, fifteen names, and a red cord on your wrist. The Stone listens. At the last item the names on its face stir.
The third question is: Whose are you?
It is the one you have been avoiding for six weeks. You do not know. You have a teacher in a river-village who raised you and told you nothing; a nurse who took you away; an Elder who did a thing she cannot yet tell. You have a number. You have a pin-scratch on a drowned wall.
“I am nine,” you say. It comes out quietly.
The Stone is silent for a very long time.
> truth | Say it again. I am nine. | +
> quiet | Hold your ground. | ^
> mercy | Say: and I would like to be more than that. | ^
> inquiry | Ask what the question means. | ^

=== vault_a1s4 | The Stone Answers
A column of names goes dark. Another brightens. They rearrange, slowly, like a school of fish that has seen a hand on the water, and the pattern they make is the shape of a door. At the centre of the door, where the names are thickest, there is a blank.
It is a rectangle, perhaps a foot wide and two high, in the middle of the slab. Nothing is written in it. It does not glimmer. It pulses, very slowly, once every few breaths, as a closed eye pulses beneath its lid.
“The torn page,” says Old Sou, softly. For the first time his voice has no croak in it. “It has been blank for seven hundred years. I came here at nineteen. It was blank then.”
He reaches out and touches the edge of the pit with a trembling finger.
“It is not blank now.”
> truth | Step closer. | +
> quiet | Look at the rectangle without moving. | ^
> inquiry | Ask what is written. | ^
> mercy | Ask Old Sou if he is all right. | ^

=== vault_a1s5 | A Name Written Fresh
In the centre of the blank, so faint you must tilt your head, a name is forming. It is not rising from the jade like the others. It is being written. A fine gold line draws itself down the rectangle, stroke by stroke, and when the last stroke lifts, the name stands for a breath in perfect clarity, and then slowly fades.
Then it begins again.
Yu Ling.
You read it three times. Hao Lan has gone white beside you; her hand is at her mouth. Old Sou is shaking. Duan Wuyi, who has taken off his hat, is standing with it against his chest and his eyes closed.
“Every night,” says the old Censor. “Since the autumn. I have been standing here at midnight for four months, watching her write.”
> truth | Say her name aloud. | + | +vault_said_yuling
> quiet | Stand very still. | ^
> mercy | Ask her, gently, whether she can hear. | ^
> inquiry | Ask Old Sou what he thinks it means. | ^

=== vault_a1s6 | What Sou Believes
“I believe,” says Old Sou, “that she is writing herself back.” He says it in a dry, firm, certain voice. “I believe that seven hundred years ago a woman tore her own name from the Ledger, so that the founders could not have it. I believe she has been trying ever since to write it again. I believe she has not had a hand to do it with.”
His milky eyes are wet.
“The Concord says the returning names are a plague,” he says. “A door in the Stone, left open by a flaw. It sends Censors out to find the flaw. I have told the Assembly nine times that they are looking for the wrong thing.” His voice cracks. “They are looking for a door. She is a person.”
> truth | Tell him you believe him. | +
> mercy | Hold his arm. | ^
> inquiry | Ask who the hand would be. | ^
> quiet | Say nothing, and let the old man finish. | ^

=== vault_a1s7 | The Hand
“A listener,” says Old Sou. “A person with a seed, who can carry a name from the Unwritten into the world. She could write herself through one. I think she has been trying. The names that come back, forty-one of them, were not written by the Ledger. They were written by her, through some child with black ink, who does not know what he does.”
He turns his face toward you.
“I think she is trying to reach you,” he says. “I think she has been reaching for a very long time.”
Duan Wuyi has put his hat on again. He looks suddenly very old. “I have been telling myself,” he says, “that the Great Sealing is a necessity. I have told myself that the Concord must close the wound.”
He lifts his eyes to the slab.
“I am not sure it is a wound.”
> truth | Tell him it is a woman. | + | +vault_told_duan
> inquiry | Ask him what the Concord would do if it knew. | ^
> mercy | Ask if he can stop it. | ^
> quiet | Say nothing, and let him think. | ^

=== vault_a1s8 | The Reading Is Entered
The reading is entered in the Stone’s own record. Old Sou does it himself, with a brush as long as his arm, dipped in a bowl of gold ink. He writes slowly and in capitals, and at the end he writes the date and the word WITNESSED, and Duan Wuyi countersigns it, and the ink dries green.
“It cannot be struck,” says Old Sou. “Not by the Assembly. Not by the Council. It is entered in the Stone.” He wipes his brush. “Whatever they decide about the Sealing, they will have to decide it knowing that she is awake.”
He cups his ear.
“I should like it noted that I did not enjoy that. I enjoyed it very much.”
> truth | Thank him. | vault_close | +vault_entered
> mercy | Help him up the stair. | vault_close | +vault_entered
> quiet | Bow. | vault_close | +vault_entered
> inquiry | Ask how long he has waited. | vault_close | +vault_entered

// ---------------------------------------------------------------- a2: the heist
=== vault_a2s1 | The Silver Bridge
Wen Rui is waiting at the foot of the Silver Bridge, small and grey, in the brown robe of the Lotus, his hands in his sleeves. He bows when he sees you, and the faint line across his forehead shows pale in the lamplight.
“I have been thinking,” he says, “that a thing as important as the Stone ought not to be read under supervision.” He smiles his tired smile. “The Concord wants you to read it with a Censor at your elbow. I want you to read it alone.”
He draws a small cloth from his sleeve and opens it. Inside lies a key of grey bone.
“It opens the east door of the vault. It belonged to a clerk who died in the spring. It has not been changed.” He lays it in your palm. “I can bring four people. I cannot bring a warden.”
> force | Take the key. | + | needs:2
> truth | Ask what he wants in return. | ^
> inquiry | Ask why he is trusting you with it. | ^
> mercy | Ask whether anyone will be hurt. | ^

=== vault_a2s2 | The East Door
It opens onto a tunnel. The tunnel runs under the Silver Canal and comes up in a drain behind the vault, a round brick passage barely tall enough to stand in, and you go through it in single file, Wen Rui first with a covered lantern, then you, then Gu, then Ren Qiao, who has refused to be left behind. The air smells of wet brick and age. Rats move in the dark ahead of you.
Wen Rui walks like a man who has done this before. He stops at a rusted grating, kneels, and sets his hands on it. “There are two guards inside the east door,” he says. “They change at the second bell. If we are quiet, they will not look.”
He lifts the grating. It makes no sound.
> quiet | Go through, silently. | +
> truth | Tell Ren to stay near you. | ^
> force | Go through first. | ^
> inquiry | Ask Wen Rui how many times he has done this. | ^

=== vault_a2s3 | The Guards
The guards are not guards. They are two old men in grey, playing a game of draughts at a table in the corner of a storeroom, with a pot of tea between them. They are very absorbed. They do not look up as you pass. One of them is humming.
You count your steps. Seventeen to the inner door. The humming is the tune. It runs under the click of the draughts like a stream under a bridge. It is, you realise, not an accident.
Wen Rui, ahead of you, has his eyes down and his lips pressed together. He is not breathing. At the door he stops, and bows, very slightly, to the old men.
“They are with us,” he murmurs. “They have been with us for years. They were struck, once, and the Concord forgot to dismiss them.”
> truth | Bow to them too. | +
> mercy | Leave a cup of rice-wine on their table. | ^
> inquiry | Ask Wen Rui how many Concord men are with the Lotus. | ^
> quiet | Go through the inner door. | ^

=== vault_a2s4 | The Stone, Alone
You stand before the Ledger Stone alone, for the first time. It is cold and magnificent, a tide of gold names on pale green, humming at the edge of hearing. There are no Censors. There is no Old Sou. There is only you, three people you love or are beginning to, and a small grey man at your elbow who has been waiting twenty years for this moment.
He is trembling.
“May I?” he says. He lifts his hand, and stops. “May I touch it?”
“Yes,” you say.
He lays his palm on the jade, over a column of names. Nothing happens. He holds it there. A tear runs down the side of his nose, and he does not wipe it.
“I can feel them,” he says. “I can feel every one.”
> truth | Put your own hand beside his. | +
> mercy | Step back to give him room. | ^
> inquiry | Ask whether his own name is there. | ^
> quiet | Watch his face. | ^

=== vault_a2s5 | Wen Rui’s Name
He looks for it. He has been looking for it, you realise, for twenty years, with the dedication of a man who cannot sleep. He runs his hand down the face of the slab, column by column, and the gold names part around his fingers like water. At last he stops, a little below shoulder height, at a thin column near the edge.
“There,” he says.
It is a single character. Wen. Beneath it, a second, Rui. They glimmer faintly. Around them the jade is darker, as though the name had been struck out and the line bled.
“It is still there,” he says. “It is still there.” His voice shakes. “The Concord told me it was gone. They said a struck name falls from the Stone. It is only grey.”
He puts his fingers over it, gently, and the grey begins to lighten.
> truth | Tell him it is not gone. | +
> mercy | Hold his shoulders. | ^
> inquiry | Ask how to write a name back. | ^
> quiet | Look away, to give him the moment. | ^

=== vault_a2s6 | How to Write It Back
“It needs a hand,” says Wen Rui. He wipes his face with his sleeve. “A hand that can reach into the jade. A listener’s hand. Madam Ash can do it, a little. She has taught eight others. I have been told that you could do it better than any of them.” He looks at you. “I have been waiting to ask.”
You look at the column. At the grey. At the thin line of a man’s name, struck and still there.
“I will not ask you to do it,” he says. “I will only say that I would be grateful, and that I would not tell the Concord.”
The vault is still. Ren Qiao, behind you, has his hand on his sword. Gu says, in a small voice, “Don’t.”
> truth | Lay your palm on the column. | + | +vault_wrote_wen
> mercy | Ask Gu why he says don’t. | ^
> inquiry | Ask what it costs. | ^
> quiet | Take Wen Rui’s hand in yours. | ^

=== vault_a2s7 | What It Cost
It is not painful. That is the unexpected thing. The cold seed in your chest unwinds a thread of black and sends it down your arm into the jade, and the jade receives it as sand receives water. The grey column lightens. The two characters brighten from grey to gold. They are alive.
And something else is there too. As you withdraw, you feel it: a brush of recognition, as of someone reaching toward you across a dark room. A woman’s presence, vast, tired, kind. A touch like a leaf on the skin.
It is gone in a breath.
Wen Rui is on his knees. His name is gold. He is laughing and sobbing at once, a thin high sound, and his hands are pressed against his forehead, where the faint line is fading as you watch.
> truth | Help him up. | + | +vault_wen_written
> mercy | Kneel beside him. | ^
> quiet | Hold your hand to your chest, where the seed is still. | ^
> inquiry | Ask who touched you. | ^

=== vault_a2s8 | Caught
The door bangs open. Mei Qiu stands there with her iron bar, and behind her Hao Lan, grey-faced, and behind them four Censors in sashes. Duan Wuyi is not among them.
“Not a step,” says Mei Qiu. Her voice is flat and ragged. “Not one.” She looks at the Stone, at the gold name beside the grey, at Wen Rui on his knees with his forehead clean. She looks at you.
“I told you,” she says softly. “I told you I would not give the child to the Censor-General. I didn’t say I wouldn’t come for you.”
She doesn’t raise the iron. She is looking at the name, and a muscle is working in her jaw.
“Is that how it’s done?” she says. “Is that all it is?”
> truth | Tell her yes. | vault_close | +vault_caught +vault_wen_written
> mercy | Tell her to come and see. | vault_close | +vault_caught +vault_wen_written
> force | Tell her to arrest you, if she must. | vault_close | +vault_caught +vault_wen_written needs:2
> inquiry | Ask her what she’d write, if she could. | vault_close | +vault_caught +vault_wen_written

// ---------------------------------------------------------------- a3: the night Censors
=== vault_a3s1 | The Grey Sashes
Hao Lan opens her chest with a look of exquisite misery. “I did not agree to this,” she says. “I would like it known that I did not agree. I am merely failing to prevent it.” She hands you three sashes, and a fourth for Gu, and a grey robe for Ren Qiao that is two sizes too small. “The night Censors wear hoods. They don’t speak. They don’t look at each other. It is considered rude.”
She adjusts your hood. Her fingers are cold.
“I will stand at the top of the stair,” she says. “If anyone asks, you are the second watch. If they ask twice, I shall faint.”
> deceit | Pull the hood forward. | +
> truth | Thank her, and promise to bring her back a name. | ^
> mercy | Tell her she does not have to be here. | ^
> inquiry | Ask how the second watch walks. | ^

=== vault_a3s2 | The Second Watch
The night Censors descend the spiral in single file, each with a lantern, each with a hood. They do not speak. You fall in behind the third. Gu is behind you; Ren Qiao brings up the rear, making a poor impression of a short man. The torches burn low. The steps are worn in the middle.
At the bottom Old Sou is sitting at a table, awake, with his chin on his chest. He does not stir as the line passes. He is deaf. He is also, as Hao Lan whispered, a heavy sleeper.
The Stone glows at the centre of the vault like a drowned moon. The night Censors take up their stations around the pit in a ring, facing outward, lanterns held high.
No one has told you what the second watch does. You take your place with the others and discover it is almost nothing.
> quiet | Stand still. Watch. | +
> truth | Count the Censors. | ^
> inquiry | Look at the faces under the hoods. | ^
> deceit | Slip out of the ring. | ^

=== vault_a3s3 | The Faces Under the Hoods
There are nine Censors in the ring. You can see two faces. One belongs to a young man with a nose like a hawk’s, who is crying silently. The other belongs to an old woman who is asleep on her feet. The rest are in shadow.
At midnight the Stone changes. A column of names goes dark, and a rectangle in the centre of the face begins to pulse. A thin gold line draws itself down the blank, stroke by stroke. You cannot read it from where you stand, but you can see the gold.
The young man with the hawk’s nose lifts his head. He is not crying. His lips are moving. He is saying a name, over and over, in a whisper, and it matches the strokes.
Next to him, the old woman is awake. She is mouthing along too.
> truth | Whisper along with them. | +
> quiet | Listen. | ^
> inquiry | Lean toward the young man. | ^
> mercy | Hold your lantern steady for the old woman, whose hand is shaking. | ^

=== vault_a3s4 | The Watch Is Not the Concord’s
They are not the Concord’s. They wear its sashes. They hold its lanterns. But the young man with the hawk’s nose, when you lean close, whispers back, hardly moving his lips. “You’re not second watch.”
“No.”
“We are all not second watch,” he whispers. “We’re the Lotus.” He doesn’t turn his head. “Nine of us. We take the sashes and the post every night. We have for years. The Concord’s Censors drink too much to tell.”
His voice is hushed, amused, exhausted.
“We come to listen. She is writing, you know. Every night. We like to be here when she does.”
> truth | Ask what her name is. | +
> mercy | Ask how long they’ve kept the vigil. | ^
> inquiry | Ask whether Wen Rui knows. | ^
> quiet | Say nothing. | ^

=== vault_a3s5 | The Vigil
The young man’s name is Lu. He was a copyist, struck at twenty for refusing to alter a deed. The old woman is his grandmother. The others are a cook, a laundry girl, a retired judge, a penniless poet, two brothers who lost the same sister, and a child of thirteen who goes by the nickname Pigeon. They have kept the vigil in the grey sashes of the night Censors for nine years.
“She’s the only thing that has ever listened to us,” says Lu. “Every other door in the world is shut. This one writes.”
He gestures at the slab.
“She’s writing the name of a woman who tore herself out of the Ledger so no one could use it. She’s writing it again. We think she’ll finish one day.”
> truth | Ask what happens when she does. | +
> mercy | Ask whether you may join the vigil. | ^
> inquiry | Ask whether any of them have touched the Stone. | ^
> quiet | Hold your lantern with theirs. | ^

=== vault_a3s6 | What Happens When She Finishes
Nobody knows. The old woman says that, when the name is complete, a door will open, and everyone who has ever been struck will walk through it. The cook says it will be a quiet little thing, a click, like a latch. The poet thinks it will be a tidal wave. The retired judge says he doesn’t believe in doors.
“I believe,” says the child called Pigeon, shyly, “that she’ll say hello.”
The ring of lanterns wavers. For a moment you are all one thing: nine Lotus watchers, a Wanderer, a boy with a bad shoulder, a warden in a coat that doesn’t fit. The gold line on the Stone has reached the bottom of the blank.
It pauses.
It begins to draw a second line.
> truth | Whisper her name with the others. | +
> quiet | Lift your lantern. | ^
> mercy | Take Pigeon’s hand. | ^
> inquiry | Watch the second line. | ^

=== vault_a3s7 | The Second Line
It is not a name. It is a shape. A long gold stroke curving to the left, a short one to the right, a dot. It is the opening line of a character you have never seen, and it resolves, in the hush of the vault, into a word of two syllables. It is not written in the old script. It is not written in the new. It is written in a script that has no equivalent in the Concord’s books.
Lu reads it. His face is wet. “It is a greeting,” he says. “It is a word in her tongue.” He swallows. “It means, Are you there?”
The second line completes. The Stone hums on a deeper note. Then, very quietly, the whole ring of watchers answers, in a whisper, in nine voices.
“We are here.”
> truth | Add your voice. | +
> mercy | Say: she is not alone. | ^
> quiet | Bow your head. | ^
> inquiry | Ask Lu how long she has been saying it. | ^

=== vault_a3s8 | Dawn Watch
At the first grey the real second watch arrives, a clump of sleepy Censors with their sashes crooked. The Lotus watchers file out in a line, hoods up, lanterns low, passing the incomers with the bow of men who have done nothing in particular. You go with them. Gu is weeping quietly. Ren Qiao has a hand on his shoulder.
Hao Lan is at the top of the stair, with the face of a girl who has been awake all night praying. She takes the sashes from you one by one and folds them.
“Was it,” she begins, and stops. She tries again. “Was it all right?”
“It was the best night of my life,” says Gu, unsteadily.
Hao Lan looks at him for a long moment. “I knew I should not have lent the sashes,” she says. “I am so glad.”
> truth | Tell her what you saw. | vault_close | +vault_joined
> mercy | Thank her. | vault_close | +vault_joined
> quiet | Fold the last sash for her. | vault_close | +vault_joined
> inquiry | Ask her whether she’s ever kept a vigil of her own. | vault_close | +vault_joined

// ---------------------------------------------------------------- a4: Tong’s door
=== vault_a4s1 | What Tong Sees
He sits on the barge roof at dusk with his notebook, looking at the Ledger Hall across the water. His brush is across his knees. He has been drawing, in the air, in lines of faint black, a shape. You watch for some time before you realise it is a door.
He writes on the corner of the page. It is nearly dark. The lamp of a passing boat falls across the words: It is a house with many doors. Some are shut. One is open.
He draws a small arrow, pointing at the ground. Under the Hall.
“You’ve seen it,” you say.
He nods. He writes: Since the barge. In my sleep. A woman with long hair. She is always writing.
> mercy | Sit beside him. | +
> truth | Ask what she writes. | ^
> inquiry | Ask whether she has spoken to him. | ^
> quiet | Watch the door he is drawing. | ^

=== vault_a4s2 | A Long-Haired Woman
She doesn’t speak, Tong writes. She only writes. He tilts the page so the lamp falls on it, and there, in a child’s neat hand, are three characters. They are not in the Concord’s script, or the old script. They are in something older, a flowing hand that you have seen before: in a vision of a roof under stars, in the margins of Mengjiao’s impatient letters. A script of loops and long strokes.
You cannot read them. Tong can. He draws his finger under them and shapes the sounds with his lips.
He writes: It says, Come down.
He looks at you.
He writes: I think she means both of us.
> truth | Tell him you’ll go with him. | +
> mercy | Ask whether he wants to. | ^
> inquiry | Ask what he is afraid of. | ^
> quiet | Take his hand. | ^

=== vault_a4s3 | Ink on the Water
He does not use a key or a door. He sits at the edge of the quay at midnight with his inkstone in his lap, and draws, in black ink on the surface of the canal, a long thin line. The ink does not spread. It floats like a thread. He draws another, and another, and they knit into a net across the water, and when the net is the size of a door, he stands up and steps into it.
He doesn’t fall. He stands on the water, in the net, and holds out his hand.
“He’s a door,” whispers Gu, awestruck. “He’s a literal door.”
Ren Qiao, behind you, is quietly muttering a warden’s prayer. You take Tong’s hand. It is warm and ink-black and entirely steady.
> truth | Step onto the net. | +
> quiet | Trust him. | ^
> mercy | Tell Gu and Ren to follow. | ^
> inquiry | Ask Tong where it goes. | ^

=== vault_a4s4 | Under
It goes under. The ink net sinks as you stand on it, gently, like a leaf, through the black water and the black mud and the black stone, and the sound of the city falls away. You are in a shaft of dark. Tong’s hand is the only fixed thing. Above you the lanterns of Qinglian Ford shrink to a star, and go out.
Then you are standing on pale sand, in a round room, under a high vault. Before you, huge and silent, stands the Ledger Stone. Around you, in a ring, the bodies of the others: Gu on his knees, Ren Qiao on his feet, a warden’s hand on a sword. Tong stands a little ahead, his hand still in yours.
The Stone is lit. Its names move slowly across it like a school of fish. In the middle, a blank pulses.
> truth | Step toward it. | +
> quiet | Stay still. | ^
> mercy | Check on Gu. | ^
> inquiry | Ask Tong whether this is where she wants you. | ^

=== vault_a4s5 | The Woman Who Writes
She is there. Not in the Stone, or not only in it. She is standing at the edge of the blank, a tall pale woman in a robe the colour of rain, her hair loose to her waist. She holds a brush the length of her arm. She is writing, stroke by stroke, a name on the air beside the slab. When she lifts the brush a thread of gold hangs and fades.
She turns her head. You have never seen a face so tired, or so entirely without anger.
She sets down the brush. She smiles. It is the smile of the girl on the roof under the stars, the girl who taught the Elder’s sister to count the bells.
“Ah,” she says. “There you are.”
> truth | Say her name. | + | +vault_yuling_met
> mercy | Go to her. | ^
> quiet | Stand very still. | ^
> inquiry | Ask whether she is Yu Ling. | ^

=== vault_a4s6 | A Saint Who Is Tired
“I am,” says Yu Ling. Her voice has a lilt in it, as of the river provinces. “I was, at any rate. I am rather tired of the word saint. It sounds as if I were a monument.” She sits down on the edge of the pit, with her feet in the sand, and pats the stone beside her. “Sit. Both of you. I have not had company in seven hundred years, and I have forgotten how to be dignified.”
Tong sits at once. You follow. Gu and Ren hover, uncertain, at the edge of the light.
“You were nine,” she says to you, “in a withdrawal that was not recorded. You are the one who came back. I have wanted to thank you.”
> truth | Ask what she means. | +
> mercy | Tell her no one needs to thank you. | ^
> inquiry | Ask what you did. | ^
> quiet | Sit beside her and say nothing. | ^

=== vault_a4s7 | What She Wanted
“Everyone thinks the abyss is a wound,” she says. “It is a page. It is my page. When I tore it from the Ledger, I tore myself out with it, so that the founders could not use my name to bind others. I fell into the Unwritten. It is quiet there, and it is very full.” She smiles ruefully. “I have been holding the names of everyone the Concord struck for seven hundred years. They are all with me. They are not unhappy. They are only waiting.”
She lifts her hand. Gold light gathers in the palm.
“I want to be written back. I do not want to be remembered. I want to be allowed to sit down in the world, and drink a cup of tea, and be wrong about something.”
> truth | Tell her you will help. | +
> mercy | Ask what it would cost. | ^
> inquiry | Ask how. | ^
> quiet | Take her hand. | ^

=== vault_a4s8 | How It Is Done
“I cannot say,” she says. “I do not know. I know that it needs a hand that can reach into the Unwritten and a voice that can speak the first line. I know that the hand is a listener’s and the voice is the Law’s. I know that the Law Hall once had the voice and lost it.” She looks at you with a trace of apology. “I know that I should not ask this of anyone who is about to be put in a wound.”
The Stone hums.
“Tell Wanru I forgive her family,” she says, quite gently. “Tell her I was always going to. It was only a matter of time.”
The light fades. The pit is empty, the sand still. Tong’s hand is in yours, ink-black and warm.
> truth | Promise to tell the Elder. | vault_close | +vault_message
> mercy | Hold Tong’s hand until the room is quiet. | vault_close | +vault_message
> quiet | Bow to the empty place. | vault_close | +vault_message
> inquiry | Ask Tong if he can still hear her. | vault_close | +vault_message

// ---------------------------------------------------------------- hidden route: the shard
=== vault_h1 | A Piece of the Stone
The shard weighs almost nothing. You unwrap it from its grey silk by the light of the vault’s single torch, and hold it up before the Ledger Stone, and the Stone shivers. A tide of gold names ripples toward the edge of the slab where the shard is held, as filings move toward a lodestone.
It was cut from the same jade. You knew it, in the vault under the Ash Archive: the pattern of concentric circles, the warmth, the way it did not hum. It is a piece of the Ledger Stone, broken away on the Sealing Night, and kept in a box where no one would look.
At the foot of the slab, in the pale sand, there is a notch the size of a thumbnail. It is shaped, you think, like a circle with a missing arc.
> truth | Set the shard in the notch. | +
> quiet | Hold it up to the light. | ^
> mercy | Ask the Stone for permission. | ^
> inquiry | Look at the pattern of the circles. | ^

=== vault_h2 | The Seam Opens
It fits. The shard slides into the notch as a key into a lock, with no resistance and no sound. The concentric circles align. A thin silver line runs up the face of the slab, from the notch to the blank, splitting the jade from the foot to the pulsing rectangle.
It is not a crack. It is a seam. The Stone has been sewn, you see, along that line, and the thread has been cut. The shard was the last stitch. Where the shard was missing, the seam was held shut by nothing.
The slab swings open, an inch, like the cover of a book.
Beyond it, in the dark: a long low room, a table, and a woman in a robe the colour of rain, writing.
> truth | Call to her. | +
> quiet | Step through. | ^
> mercy | Call for Tong. | ^
> inquiry | Hold the shard in place. | ^

=== vault_h3 | The Unwritten Room
It is not large. It is a scholar’s study, lit by a single lamp, with a table and a stool and a shelf of unbound pages. The woman at the table doesn’t look up at once. She is finishing a stroke. When she lifts her brush she says, without turning, in a pleasant lilting voice, “You’ve brought the last stitch. How thoughtful.”
She sets the brush down.
“I have been waiting for someone to come through. I did not think they would bring a piece of me.”
She turns. She is tall and pale and very tired. “It is mine, you know. It was cut from the stone I wrote my name on. Thank you for returning it.”
> truth | Offer her the shard. | vault_close | +vault_yuling_met +vault_shard_given
> mercy | Say it was never yours to keep. | vault_close | +vault_yuling_met +vault_shard_given
> quiet | Keep the shard, and bow. | vault_close | +vault_yuling_met +vault_shard_kept
> inquiry | Ask what happens to the Stone if you leave it. | vault_close | +vault_yuling_met +vault_shard_kept

// ---------------------------------------------------------------- close
=== vault_close | What the Stone Keeps
You come up out of the Vault of Names into a morning that smells of wet stone and tea. The Stone Island is full of banners and the bells of the Ledger Hall are ringing the hour, slowly, in the old way. The Assembly opens in three days.
+[a] vault_a1 | You read the Stone by the book, and the reading is entered in its own record. Nothing can strike it.
+[a] vault_a2 | You went in by a drain with a clerk who was struck, and wrote his name back in gold.
+[a] vault_a3 | You stood a night watch in a grey hood beside nine people who were never dismissed.
+[a] vault_a4 | You stepped through a net of ink on black water, and a woman who tore her own page said hello.
+[b] vault_entered | The reading is on the Stone. The Assembly cannot decide the Sealing without knowing she is awake.
+[b] vault_wen_written | Wen Rui’s name is gold. The faint line on his forehead is gone.
+[b] vault_caught | Mei Qiu asked, ‘Is that all it is?’ She has not said a word since.
+[b] vault_joined | The nine Lotus watchers know you now. Pigeon asked after you.
+[b] vault_yuling_met | You have met Yu Ling. She sat on the edge of a pit with her feet in the sand, and asked for tea.
+[c] vault_message | You promised her message to the Elder: that she forgives the Su, and always meant to.
+[c] vault_shard_given | You gave the shard back to the Stone. The seam is sewn.
+[c] vault_shard_kept | You kept the shard. The seam is open an inch, and will stay so.
+[c] vault_sou_met | Old Sou croaked that you were a WITNESS, and has not stopped smiling.
> truth | Go and tell the Elder what you have seen. | vault_close2
> quiet | Sit on the steps of the Ledger Hall, and let the bells ring. | vault_close2
> mercy | Find Tong, and make sure he has eaten. | vault_close2
> inquiry | Ask Duan Wuyi what he will say at the Assembly. | vault_close2

=== vault_close2 | A Woman, Not a Wound
The Elder is waiting on the steps of the Ledger Hall in her plain cloak. She has not slept. She has the look of a woman who has been holding one thought for several hours, in two hands, and is afraid of dropping it.
“Duan Wuyi came to me at dawn,” she says. “He said you had read the Stone. He said there was a woman in it.” Her voice is very level. “He said she was the First Listener, and the abyss was her page, and the Great Sealing was not the closing of a wound.”
She looks at you.
“He said it would be the killing of a woman who has been alive for seven hundred years.”
+ vault_message | She has already been told that Yu Ling forgives her family. She sat down on the step when she heard it.
> truth | Tell her it is true. | hub_b2_city | +b2q_vault npc:SU_VAULT_WOMAN
> mercy | Take her hands. | hub_b2_city | +b2q_vault npc:SU_VAULT_WOMAN
> quiet | Sit beside her. | hub_b2_city | +b2q_vault
> inquiry | Ask her what she will do. | hub_b2_city | +b2q_vault npc:SU_VAULT_WOMAN
`,
  scenarios: String.raw`
$ SU_VAULT_WOMAN | trust+4 respect+3 fear+6 | elder | The Elder learns that the abyss is a person, and that the Great Sealing would kill her.
hostile: A woman. You tell me the abyss is a woman, and the Great Sealing is a murder. I have been arguing with the Law for twelve years that it is more than a book. I did not think you would hand me the proof. Go away. I need to think.
wary: A woman in a wound. I sealed fourteen children to keep her closed, and I did not know she was there. I cannot say what I feel. I think I feel the thing the Law was invented to prevent.
neutral: A woman who tore her page out of the Ledger so the founders could not use her name. A woman who has been writing herself back for seven hundred years. And I signed the orders that sent children down the path to keep her quiet. I am sorry. I do not think she will mind my saying it.
warm: I have been wrong for fifteen years, in an entirely different way from the way I thought I was wrong. It is rather a relief. Sit with me. We will think about what a person does when she finds she has been the guard in a prison for a saint.
devoted: She forgives us, you say. She says she always meant to. I do not know whether to laugh or weep. I think I shall do both, and then I shall go to the Assembly and refuse the Second Order with every breath I have. Come with me, Wanderer. I do not want to do it alone.
? tone:truth>=3/5 | You tell me what you saw plainly, as you have told me everything. I find I do not need to question it.
`,
  remarks: String.raw`
% vault_sou_later | since:vault_sou_met>=14 | elder | An old Censor in a hooded robe sent me a note, in capitals. It said: SHE HAS WRITTEN THE SECOND LINE. I do not know what that means. I think I am meant to.
% vault_wen_later | since:vault_wen_written>=16 | elder | A clerk in a brown robe stood outside the barge at dawn today, perfectly clean, without a mark on his forehead. He bowed to me. I bowed back. It was an extraordinary thing, to bow to a man who has been written back.
% vault_pigeon_later | since:vault_joined>=12 | gu | The child called Pigeon left me a drawing of a bird. I have pinned it above my cot. It is the first thing anyone has ever drawn for me.
`,
};
