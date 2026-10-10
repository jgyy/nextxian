import type { Arc } from "../types";

/**
 * Book Three, arc eleven: the Sixth Cot. Hao Lan (cot VI) was placed among the Censors at nine by Madam Ash and a sponsor, and has
 * served the Concord's Chancery for twelve years believing she was a foundling clerk. Four approaches: ask Ash together (a1,
 * truth), break into the Tidewall Chancery's archive for her file (a2, force), turn double agent against Inspector Fang's
 * secretary (a3, deceit), and walk the town with her until she can say it (a4, mercy). A hidden route reads the bone seal's
 * second face. Cast: Hao Lan, Madam Ash, Yin the secretary, Wen Rui, Scribe Tong (by letter), Duan Wuyi (by letter).
 */
export const sixth: Arc = {
  id: "sixth",
  name: "The Sixth Cot",
  scenes: String.raw`
=== sixth_entry | A Girl With a Satchel
Hao Lan has not slept in three days. You find her on the sea steps at dawn, with her feet drawn up and her satchel on her knees, writing in a notebook. She is not writing anything. The page is covered with the same two characters, over and over, in a small tight hand. Six. Six. Six.
She hears you. She does not look up.
“I have been trying to remember being nine,” she says. “I have been through it a hundred times. I was in the Chancery. I was at a table. A man in a brown robe gave me a pen. He said, you are a foundling, child, and the Concord is your mother.” She turns a page. “I believed him. I believed him for twelve years. I loved it. I loved the smell of paper. I loved the order.”
She closes the notebook on her finger.
“I do not know what is true, now,” she says. “I do not know which parts of me are mine.”
> truth | Offer to ask Madam Ash with her. | sixth_a1s1
> force | Offer to find the Chancery’s file on her. | sixth_a2s1
> deceit | Remind her that Yin offered her a place at Fang’s side. | sixth_a3s1
> mercy | Sit beside her, and say nothing, and let her write. | sixth_a4s1
> inquiry | Ask about the bone seal Master Zhu returned to her. | sixth_h1 |  | mender_hao_asked | You have not seen her ask about the sixth.

// ---------------------------------------------------------------- a1: asking Ash
=== sixth_a1s1 | The Shop at Closing
Madam Ash is putting up the shutters when you come. She has a hooked pole in one hand and a lantern in the other, and a half-folded crane in her pocket. She sees Hao Lan on the step behind you, with her satchel clutched in both arms, and the pole stops in mid-air.
“Ah,” she says.
It is all she says. She sets the lantern on the sill. She hooks the last shutter into place, and sets the pole against the wall, and wipes her hands on her apron one finger at a time.
“Come in,” she says. “I have been expecting this conversation for twelve years. I rather thought it would be harder.”
Hao Lan is shaking. “Mother Ash,” she says. “I have a question.”
“I know.” The older woman holds the door. “You may ask it sitting down. I shall make tea. It is the one thing I do well.”
> truth | Go in. | sixth_a1s2
> mercy | Take Hao Lan’s arm. | sixth_a1s2
> quiet | Wait outside. | sixth_a1s2
> inquiry | Ask Ash how she knew. | sixth_a1s2

=== sixth_a1s2 | Six
“Because I put you there,” says Madam Ash.
She says it before the tea is poured. She says it standing at the counter, with her back straight and her hands at her sides, like a girl called to the front of a class. The lamplight picks out the grey in her hair. She does not look away.
“I took seven children out of the fire. I raised six. The seventh I placed. It was a decision I made in the third winter, in a cellar on the Salt Coast, with seven children asleep around me and a Censor’s warrant in my sleeve. I thought: they will look for seven. They will count. They will not look for six.”
Hao Lan has not moved.
“I gave you to a man called Wen Rui, a clerk, who was one of mine. He placed you in the Chancery as a foundling. He gave you a name. He told you that you were an orphan.” Her voice is quite steady. “It was a lie. It was the cruellest thing I have ever done. I have never stopped doing it.”
> truth | Ask why. | sixth_a1s3
> mercy | Ask if she wanted to. | sixth_a1s3
> quiet | Watch Hao Lan. | sixth_a1s3
> inquiry | Ask whether Wen Rui knows what he did. | sixth_a1s3

=== sixth_a1s3 | An Eye Among Them
“To have an eye,” says Madam Ash. “That is the plain reason. I wanted someone inside the Chancery who would see what the Concord did, from the table, and be believed. A child of nine can read a ledger. A child of nine can sit in a room where decisions are made. Nobody guards what they say in front of a child.”
She wraps her hands round the tea-pot.
“I thought: she will be safe. She will be raised in comfort, with paper and ink and an honest trade. She will not be sealed, because the Concord does not know she exists. And one day, when the time comes, she will tell us what she has seen.”
“And did I?” says Hao Lan. It is a very small voice.
“You did not know that you should.” Ash’s eyes have filled. “You were nine, Hao Lan. You were a child. And I am a coward. I used you. I told myself it was kindness.”
> truth | Let her answer. | sixth_a1s4
> mercy | Say she was a child too. | sixth_a1s4
> quiet | Pour the tea. | sixth_a1s4
> inquiry | Ask what Ash wants now. | sixth_a1s4

=== sixth_a1s4 | What She Wants
“To tell you the truth,” says Madam Ash. “I have wanted that for twelve years. I used to watch you across the Assembly floor, with your satchel, and think: she is mine. I made her what she is. And then I thought: she is not mine. I put her in a place, and she grew, and she has nothing of me in her at all.”
She looks at Hao Lan.
“You write in a clear small hand. You do not lie. You are cautious and brave and you correct footnotes. You do not hold a grudge. I do not know where you got any of it.” She smiles tremulously. “Certainly not from me.”
“I do hold a grudge,” says Hao Lan.
“Do you?”
“Now,” says Hao Lan. She is crying, with great dignity, without any change in her voice. “I hold a rather large one.”
“Good,” says Madam Ash, softly. “I would think less of you if you did not.”
> truth | Step back. | sixth_a1s5
> mercy | Hold the tea. | sixth_a1s5
> quiet | Wait. | sixth_a1s5
> inquiry | Ask Hao Lan what she wants to do. | sixth_a1s5

=== sixth_a1s5 | Hao Lan’s Question
“I would like to ask her something,” says Hao Lan. She wipes her eyes with her sleeve and sits down at the counter. “Not about the lie. I understand the lie. I would have done it.” She folds her hands. “I should like to know about the nine.”
“The nine?”
“The nine cots. You said you took seven. You raised six. I was the seventh.” She lifts her chin. “What happened to the cards? The brown cards from the rails?”
Madam Ash goes very still.
“I have them,” she says. “All seven. In a box. I have not read them.” She hesitates. “You were not given yours.”
“Why not?”
“Because I could not bear to give it to a child who did not know she had one.” She goes to the cabinet at the back, and unlocks it, and takes down the black lacquer box. Her hands are trembling. “It is yours. It has always been. I have been keeping it.”
> truth | Watch. | sixth_a1s6 | npc:SU_SIXTH_COT
> mercy | Steady the box. | sixth_a1s6
> quiet | Look away. | sixth_a1s6
> inquiry | Ask what it says. | sixth_a1s6

=== sixth_a1s6 | VI
The card is brown and soft and creased. It bears a numeral in black ink. VI. Madam Ash holds it out between two fingers, as one holds a thing that might break.
Hao Lan takes it. She looks at it for a long time. She turns it over, once, and reads the line on the back. Her lips move. A tear falls on the card, and she wipes it with her thumb, and a streak of ink runs.
“Write what is true,” she says.
She laughs. It is a short, astonished sound, thick with tears.
“I am a clerk,” she says. “I am a clerk, and I was given an instruction. I have been following it all my life. I did not know. I did not know it was mine.” She holds the card to her chest. “Every report I ever wrote. Every footnote. Every correction. I did it because it was true.”
She looks at Madam Ash.
“I thought that was my own idea,” she says.
> truth | Smile. | sixth_a1s7
> mercy | Hug her. | sixth_a1s7
> quiet | Say nothing. | sixth_a1s7
> inquiry | Ask what true means. | sixth_a1s7

=== sixth_a1s7 | Forgiveness, of a Kind
She does not forgive Madam Ash that night. She says so, quite plainly, standing at the door of the shop with her satchel on her shoulder and the card tucked into her sleeve. “I do not forgive you,” she says. “I am sorry. It is not a thing I can do on the spot.”
“I know,” says Madam Ash.
“I may in a year. I may in ten. I am not sure.” Hao Lan draws a long breath. “But I would like to come to tea. On Tuesdays. If that is not too much.”
Ash puts her hand to her mouth. Her shoulders shake. She nods, once, without speaking.
“I should like to bring my own cup,” says Hao Lan. “I would prefer not to be given one.”
“Of course.”
“And a ledger.” Her mouth twitches. “I should like to keep accounts. I should like to pay for my own tea.”
Madam Ash makes a sound halfway between a laugh and a sob.
“Done,” she says.
> truth | Wait for her outside. | sixth_a1s8
> mercy | Walk her home. | sixth_a1s8
> quiet | Bow to Ash. | sixth_a1s8
> inquiry | Ask Ash if she will give you your own card. | sixth_a1s8

=== sixth_a1s8 | A Cup of Her Own
Hao Lan’s cup is a plain white one with a chip in the rim. She buys it from a stall on Bell Lane for two coppers, and she carries it home wrapped in her handkerchief, and sets it on the sill of her room at the Ferryman’s Rest between a candle and a pot of ink. She looks at it for some time.
“It is a dreadful cup,” she says.
“It is yours.”
“It is.” She sits on the bed. She is still crying a little, softly, as if she had forgotten to turn the tap. “I find that I am extremely happy. I do not understand. I have been lied to for twelve years, and I have been given a card, and I have a sister who sings and a sister who rows and a sister with a lamp.” She wipes her cheeks. “I did not know I wanted a family. I thought I wanted a position.”
She takes up her pen.
“I think I shall write it all down,” she says. “From the beginning. Every word. It is the only true thing I know how to do.”
> truth | Sit with her. | sixth_close | +sixth_asked_ash
> mercy | Pour her tea. | sixth_close | +sixth_asked_ash
> quiet | Leave her to write. | sixth_close | +sixth_asked_ash
> inquiry | Ask what she will call it. | sixth_close | +sixth_asked_ash

// ---------------------------------------------------------------- a2: the file
=== sixth_a2s1 | The Tidewall Chancery
The Tidewall Chancery sits on the upper terrace of the town, behind a wall of white stucco, in a courtyard of clipped lemon trees. It is a quiet building. It has a flag, and a brass plate, and a porter in a grey livery who reads a newspaper in a glass box by the gate. Inside, behind a hundred shuttered windows, forty clerks copy the town’s secrets into the Concord’s books.
Hao Lan studies it through her telescope from the roof of a tea-house across the road. She has a pencil behind her ear and a very bleak expression.
“The Registry is on the second floor,” she says. “It has a night-keeper. His name is Mr Mo. He is deaf in one ear and snores in the other.” She lowers the glass. “My file is in the Cabinet of Foundlings. Third row, seventh shelf. I have signed for it eleven times.”
“You have seen it?”
“I have seen the cover.” She swallows. “I never opened it. It seemed impolite.”
> force | Offer to go in with her. | sixth_a2s2
> truth | Ask why now. | sixth_a2s2
> quiet | Look at the porter. | sixth_a2s2
> mercy | Say she doesn’t have to. | sixth_a2s2

=== sixth_a2s2 | The Plan
“It is a question of access,” says Hao Lan. She has the plan drawn on a tea-house napkin. It is meticulous. “There are four ways in. The front is watched. The side is locked. The back opens on the kitchens. The roof has a skylight.”
“Which?”
“The roof.” She marks it with a cross. “It is the only one I know how to open. I wrote the standing orders for the lock.”
Ren Qiao, who has been listening in silence, says, “You wrote the orders for the lock.”
“I wrote the orders for all of them.” Hao Lan’s voice is flat. “It is a large part of why I am a good clerk. I know where the Chancery keeps its own secrets, because I filed the instructions.”
She folds the napkin.
“I shall be in a very difficult position,” she says, “if I am caught.”
“Why?”
“Because I am going to commit burglary against my employer.” She almost smiles. “And I have never so much as been late.”
> force | Go. | sixth_a2s3
> truth | Say you will go first. | sixth_a2s3
> quiet | Check the roof. | sixth_a2s3
> mercy | Tell her to take a breath. | sixth_a2s3

=== sixth_a2s3 | Skylight
You go over the roofs at midnight. It is easy; the terraces are low and the tiles are dry. You cross a gutter, a parapet, a chimney-pot, and come to the skylight, a square of frosted glass in a lead frame. Hao Lan kneels beside it and works a thin steel pick under the lip. She hums under her breath. It is a tune she has picked up from Bao Er.
The catch gives with a click.
“There,” she whispers. “Down the ladder. Left. Fourth door.”
You go down. The Registry is a long cool room smelling of dust and beeswax, lined with cabinets of black lacquer. A single lantern burns on a desk. At the desk, with his head on his arms, Mr Mo is snoring gently into a ledger. Hao Lan tiptoes past him. She does not breathe.
The Cabinet of Foundlings is a tall black cupboard with a hundred drawers, each with a brass label. She finds the seventh shelf. She slides out a drawer.
There is a single folder in it.
> force | Watch the keeper. | sixth_a2s4
> truth | Hold the lamp. | sixth_a2s4
> quiet | Watch the door. | sixth_a2s4
> mercy | Put a hand on her shoulder. | sixth_a2s4

=== sixth_a2s4 | What Was in the Folder
It is thin. It has a cover of grey card, with a label in a copperplate hand: HAO LAN. FOUNDLING. NO. 4417. There is a page inside. Only one. Hao Lan reads it standing, holding the lantern in a shaking hand.
Then she sits down on the floor.
It is a summary, dated twelve years ago. It lists her name, her estimated age, her intake date, and her sponsor: W. R. It records that she was found abandoned at the Chancery gate, in a basket, with a note. It records that a card was found with her. It records that the card was removed to the Inspector’s office.
At the foot is a handwritten comment, in a firm clear hand: Retain. Monitor. A reserve of a reserve. —F.
“F,” she whispers.
“Fang,” you say.
“He knew.” Her voice is hoarse. “He has known since I was nine. I have been reading him my reports. I have been bringing him my footnotes. He has been watching me write them.”
> force | Take the page. | sixth_a2s5
> truth | Sit beside her. | sixth_a2s5
> quiet | Watch the door. | sixth_a2s5
> mercy | Close the folder. | sixth_a2s5

=== sixth_a2s5 | A Reserve of a Reserve
She is very quiet. She sits on the cold floor with the page in her lap, and she does not cry. She reads it again. She reads it a third time. Her finger moves along the line.
“Reserve of a reserve,” she says. “I was the spare.”
“You were not.”
“I was. I was a second backup. If the ninth failed, there were eight more. If all eight failed, there was me, in the Chancery, being monitored.” She laughs, a dry small sound. “It is very efficient. It is rather beautiful. I wrote forty memoranda on the importance of redundancy.”
The lantern throws her shadow, huge, up the black cabinets.
“He let me write the Assembly minutes,” she says. “He let me take notes at the Stair. He let me sit in the room while Duan Wuyi read the Second Order, and he watched me.” Her voice is rising. “He wanted to see what I would do.”
> force | Put a hand on her mouth. | sixth_a2s6
> truth | Say it is not her fault. | sixth_a2s6
> quiet | Wait. | sixth_a2s6
> mercy | Hold her. | sixth_a2s6

=== sixth_a2s6 | Mr Mo
It is Mr Mo who wakes. A voice from the desk, thick with sleep and querulous with outrage, says: “Who is there?” A chair scrapes. A lantern flares. The old keeper is on his feet, blinking, with a candlestick in one hand and a bunch of keys in the other. His nightcap has slipped over one eye.
“Miss Hao?” he says. He squints. “Miss Hao Lan? Is that you?”
She stands. She puts the folder behind her. “Mr Mo.”
“You’ve come in the night.” His deaf ear is turned toward her; he tilts his head. “Is something wrong? Has someone died?”
“No,” says Hao Lan. “I was only looking for a document.”
“At this hour?” He peers at you. “Who is that?”
“A colleague.”
“I do not know her.” He raises the candle. His old face wrinkles. “I am afraid I shall have to report this.”
> force | Step in front of Hao Lan. | sixth_a2s7
> truth | Ask him not to. | sixth_a2s7
> quiet | Say nothing. | sixth_a2s7
> deceit | Say it is an authorised audit. | sixth_a2s7

=== sixth_a2s7 | A Kind Old Man
“I shall have to report it,” says Mr Mo again. He sounds distressed. “It is in the regulations. Intrusion by night. I have never failed to report.” He shakes his head. “Thirty-one years. I have never failed once.”
Hao Lan opens her mouth to speak.
“But I must first,” says Mr Mo, “finish my rounds.” He puts down the candlestick. “It takes me some time. I am old. I am slow. I like to check all the drawers, and the windows, and the stove. It is half an hour at least.” He turns his good ear away. “I may not see anything. I am nearly blind.”
He shuffles to the door.
“It was a most suspicious noise,” he says, over his shoulder. “I thought it was a mouse. I shall have to look under the cabinets.”
He goes out. The door clicks softly behind him.
Hao Lan stares after him.
“He taught me to sharpen a pen,” she says.
> force | Take the folder. | sixth_a2s8
> truth | Say thank you to the door. | sixth_a2s8
> quiet | Go. | sixth_a2s8
> mercy | Leave a note for him. | sixth_a2s8

=== sixth_a2s8 | The Roof
You go up the ladder and across the roofs with the page folded inside Hao Lan’s coat. She does not speak. At the edge of the terrace she stops, and turns, and looks back at the Chancery with its white stucco and lemon trees.
“It is a beautiful building,” she says. “I used to think so. I used to think that a building could be a conscience.” She draws a long breath. “I was wrong. A building is a building. It is people. It is a deaf old man and a boy with a pike.”
She taps the page in her coat.
“I will keep this. I will not burn it. I want it in the record.” Her chin comes up. “I am going to be a clerk. I am going to be the best there has ever been. And I am going to write the whole truth, in a clear small hand, and put my name to it.”
She looks at you. In the moonlight she is very pale and very calm.
“Thank you for coming,” she says. “I would have gone alone. It would have been worse.”
> force | Nod. | sixth_close | +sixth_read_file
> truth | Say you would go anywhere. | sixth_close | +sixth_read_file
> quiet | Walk with her. | sixth_close | +sixth_read_file
> mercy | Take her hand. | sixth_close | +sixth_read_file

// ---------------------------------------------------------------- a3: double agent
=== sixth_a3s1 | An Offer
“He made me an offer,” says Hao Lan. She says it dryly, as though discussing the weather. “Yin. In the Ward doorway. He said that if I tired of present company, his master would be glad of me.” She turns a pencil in her fingers. “I have been thinking about it.”
“You cannot be serious.”
“I am entirely serious. It is the most useful offer anyone has made me.” She meets your eyes. “I am a clerk of the Chancery. I know its forms. I know its routes. I know how its dispatches are written and how they are read. If I returned, with a plausible story, I could be in the Inspector’s own tent within the week.”
“And do what?”
“Read his post,” says Hao Lan. Her voice is quite calm. “And copy it. And send it to you.”
Gu says, in a small voice, “That’s awfully dangerous.”
“It is very dangerous,” says Hao Lan. “I find that I would like to be dangerous.”
> deceit | Ask how. | sixth_a3s2
> truth | Say it is too much. | sixth_a3s2
> quiet | Listen. | sixth_a3s2
> mercy | Ask if she is certain. | sixth_a3s2

=== sixth_a3s2 | The Story
They compose it between them over two evenings, at the table in her room, with a lamp and a plate of dumplings. It is a good story. It is the best she can do. It has the beautiful simplicity of a lie that has been built from true parts.
She was recruited by the Hollow Lotus. She was taken to the Salt Coast against her will. She has been feeding them false information for a month, in order to find the bearer. She has found her. She has wanted to report. She has been afraid.
“It is all true,” she says. “That is what makes it good. Everything except the order of the verbs.”
She reads it aloud. She winces at a clause. She crosses it out.
“I shall need a token,” she says. “Something Yin will believe. A thing only an insider would have.”
“What?”
She looks at you, with her head on one side.
“A page,” she says. “From the Seventh Chancery’s journal. A real one. With a forged note.”
> deceit | Write it. | sixth_a3s3
> truth | Say it feels wrong. | sixth_a3s3
> quiet | Hold the lamp. | sixth_a3s3
> mercy | Watch her. | sixth_a3s3

=== sixth_a3s3 | The Page
She forges it with Master Zhu’s bone seal and a sheet of Chancery foolscap she has had in her satchel since the Assembly. It takes a night. She is careful. She varies the ink. She smudges the margin. She writes the date in a slightly different hand, as a man writes a date in haste.
The note reads: The bearer is at the Ferryman’s Rest. The Registrar is with her. The Censor-General has withdrawn his protection. Proceed at the new moon.
It is a lie from beginning to end. It is also exactly what the Inspector most wants to hear.
Hao Lan reads it over. She presses the seal in. A little red wax, a hiss of smoke. She folds the page into four and sits looking at it.
“It will work,” she says. “It will work because he believes I am his.” She shuts her eyes. “That is the worst part. He is right.”
> deceit | Say she is not. | sixth_a3s4
> truth | Say she can still refuse. | sixth_a3s4
> quiet | Take the page. | sixth_a3s4
> mercy | Hug her. | sixth_a3s4

=== sixth_a3s4 | The Handoff
She gives it to Yin at the market, in a basket of eels. It is the oldest trick in the Chancery; it is also the one nobody expects. He is buying fish. She stands at the next stall. Their baskets are exchanged in a swirl of silk and wet newspaper. He does not look at her. She does not look at him.
When she comes back to the Ferryman’s Rest she is shaking so badly that she cannot hold the cup.
“It is done,” she says. “He took it.”
“What did he say?”
“Nothing.” Her teeth chatter. “He smiled. He said that eels were in season.” She puts the cup down. “I think he knew.”
“Knew what?”
“That it was a lie.” She stares at her hands. “I think he knew it was a lie, and I think he decided to believe it, because he wanted it to be true. It was so much easier than the other thing.”
“What other thing?”
“That I might have changed my mind,” says Hao Lan.
> deceit | Wait with her. | sixth_a3s5
> truth | Say you trust her. | sixth_a3s5
> quiet | Pour her tea. | sixth_a3s5
> mercy | Say she was brave. | sixth_a3s5

=== sixth_a3s5 | Letters
The first letter comes after three days. It is delivered in a roll of net by a boy who runs away. It is addressed in her own hand to Hao Lan, Clerk, Fourth Desk, Second Chancery, Care of the Ferryman’s Rest. She opens it at the table, with a bread-knife.
It contains a single sheet of foolscap, folded in four, with a stain of fish-oil on one corner. It is written in a neat copperplate. It says:
My dear Hao Lan. I am delighted that you wrote. I have been anxious for you. The Inspector sends his regards. He asks that you continue to observe. He asks, specifically, whether the bearer has spoken to a woman named Ash. He asks whether she has been to the house on Bell Lane. He asks for the names of the seven. —Y.
She puts it down.
“He wants the siblings,” she says. “He wants all of them.” Her face is grey. “He is using me to find them.”
> deceit | Take the letter. | sixth_a3s6
> truth | Say she has to stop. | sixth_a3s6
> quiet | Read it again. | sixth_a3s6
> mercy | Say she can answer with lies. | sixth_a3s6

=== sixth_a3s6 | Feeding the Fish
“I can answer with lies,” says Hao Lan. She says it slowly. “I can give him seven wrong names. I can say the Ash house is empty. I can say the children are dead.” She shakes her head. “He will check. He will check everything. I am not good enough.”
“You are.”
“I am a clerk. I am not a liar.” She presses her thumbs into her eyes. “I have never lied in my life. I put in an extra footnote once, and I could not sleep. I am going to be caught in a week.”
You wait.
“I need help,” she says abruptly. “I need someone who lies for a living.”
Gu, from the corner, says in a very small voice: “Bao Er.”
Hao Lan opens her eyes.
“Bao Er,” she repeats. A slow, appalled, delighted smile spreads across her face. “Oh. Oh no.”
> deceit | Fetch her. | sixth_a3s7
> truth | Say it is a good idea. | sixth_a3s7
> quiet | Say nothing. | sixth_a3s7
> mercy | Ask if she is sure. | sixth_a3s7

=== sixth_a3s7 | A Professional
Bao Er reads the letter standing up, in the middle of the room, with her feet apart and her thumbs in her belt. She reads it twice. She whistles through her teeth.
“Oh, that’s lovely,” she says. “That’s lovely work. He’s asked four questions and told you six things.” She taps the page. “He is nervous. He is more nervous than he sounds. And he’s lonely, I’d say.” She grins. “Nobody writes ‘my dear’ to a person they don’t want something from.”
Hao Lan stares. “How can you tell?”
“It’s a gift.” Bao Er sits on the bed. “I lie professionally. Three times a week, at funerals. ‘He was a lovely man.’ ‘She is at peace.’ The art is not in the lie. It is in the pause.”
She takes up the pen.
“Right,” she says. “Dictate. I shall do the voice.”
They write all night. It is a masterpiece.
> deceit | Watch. | sixth_a3s8
> truth | Bring more tea. | sixth_a3s8
> quiet | Stay out of it. | sixth_a3s8
> mercy | Stay awake with them. | sixth_a3s8

=== sixth_a3s8 | The Wrong Seven
The reply goes out at dawn. It names seven children. They are not the right seven. They are seven names that Hao Lan has taken from the Wall, struck, long dead, none of them in any way connected to Ash. She lists their ages, their places of birth, their fictitious current whereabouts. She is meticulous. She cross-references.
It is the most beautiful forgery ever produced by the Second Chancery.
It will buy them a month.
Hao Lan seals it with the bone seal. She turns it over. On the back of the little seal, beside the character for six, you now see a second character. It is the character for write. It was there all along. It was simply hidden under the wax.
She smiles.
“I think,” she says, “I am rather good at this.”
Bao Er claps her on the shoulder, hard enough to make her stagger.
“You’re horrible,” she says, with huge affection. “We’ll make a liar of you yet.”
> deceit | Laugh. | sixth_close | +sixth_fed_yin
> truth | Say it is only for a month. | sixth_close | +sixth_fed_yin
> quiet | Smile. | sixth_close | +sixth_fed_yin
> mercy | Hug Hao Lan. | sixth_close | +sixth_fed_yin

// ---------------------------------------------------------------- a4: the walk
=== sixth_a4s1 | Writing
You sit beside her. You do not ask. She goes on writing the same two characters, over and over, in her small tight hand: six, six, six. The ink runs in the damp air. The sea breathes. After a time she stops writing and starts to draw. She sketches the Wall, a line of gulls, a curl of smoke. She sketches a boy with a pike.
“I should like a walk,” she says, at last.
“Where?”
“Nowhere. I should like to go nowhere in particular, for as long as it takes.”
You rise. She tucks the notebook in her satchel. You set off along the sea steps, with the Wall on your right and the open bay on your left, in the pale light of early morning. She walks briskly, with her elbows tucked in, as she did in the Assembly. You fall into step.
For a long time neither of you speaks.
> mercy | Walk. | sixth_a4s2
> truth | Say it is a lovely morning. | sixth_a4s2
> quiet | Match her pace. | sixth_a4s2
> inquiry | Ask about the notebook. | sixth_a4s2

=== sixth_a4s2 | What She Remembers
“I remember a sweet,” says Hao Lan. “A boiled sweet. In a twist of paper. It was given to me by a woman at the gate. She had a black gown. I was ten.” She is not looking at you. “I took it. I did not eat it. I kept the paper.”
She taps her satchel.
“I have it still. In the lining. I have never known why.”
You turn the corner of the quay. The fishing boats are going out. A man is singing, a woman is shouting at a dog. Gulls are screaming over a heap of discarded heads.
“Madam Ash,” you say.
“Of course.” She draws a long breath. “She used to stand at the gate of the Chancery on the first of the month. She handed out sweets to the clerks’ children. I did not know why. I thought she was a kind old woman who sold paper.” Her voice shakes. “She was looking at me.”
> mercy | Say she was. | sixth_a4s3
> truth | Ask how it felt. | sixth_a4s3
> quiet | Listen. | sixth_a4s3
> inquiry | Ask what the sweet was. | sixth_a4s3

=== sixth_a4s3 | A Boiled Sweet
“Pear,” says Hao Lan. “It tasted of pear. Very sweet, and a little burnt.” She laughs. “I have not had one since. I have always meant to find them. I always thought, I shall go to the market, and ask for pear drops.” She wipes her cheek. “I never did. It seemed too silly.”
You stop at a stall. It is a small one, on the quay, under an awning, run by a stout old woman who is rolling a ball of sugar on a marble slab. A tray of sweets sits on the counter, in twists of coloured paper.
“Pear drops?” you say.
The old woman nods. “Two for a copper.”
You give her three. She wraps them in a screw of newspaper. You hand it to Hao Lan.
She holds it for a moment. She unwraps a sweet. She puts it in her mouth.
She closes her eyes.
“Oh,” she says.
> mercy | Wait. | sixth_a4s4
> truth | Ask if it is right. | sixth_a4s4
> quiet | Hold the paper. | sixth_a4s4
> inquiry | Ask what she remembers. | sixth_a4s4

=== sixth_a4s4 | Seven
“Everything,” says Hao Lan. Her eyes are shut. Her voice is a whisper. “It was a warm room. There were mats on the floor. There was a stove. There were six other children asleep in a heap. I was in the middle. I was cold.” She swallows. “A woman in black was singing. She sang in a low voice. It was the lament. Bao Er’s lament.”
Tears slide down her face.
“She sang it to us every night, in the cellar, for a week. We lay in a heap and listened. I was the smallest but one. She held me. She said, hush, my darling. Hush. She said, we’ll find you a place.”
She opens her eyes.
“I thought it was a dream,” she says. “I thought I had made it up. I thought I wanted a mother so much that I invented one.”
> mercy | Say it was not a dream. | sixth_a4s5
> truth | Say she did not invent it. | sixth_a4s5
> quiet | Take her hand. | sixth_a4s5
> inquiry | Ask who the youngest was. | sixth_a4s5

=== sixth_a4s5 | The Youngest
“Tian,” says Hao Lan. “He was three. He cried the whole time. I held him.” She almost smiles. “I think that is the earliest thing I know. A very small boy, with hot hands, trying to bite my ear.”
She puts the paper in her satchel. She takes out a handkerchief.
“He bit it,” she says. “Just here.” She touches the lobe. “I have a mark.”
You look. It is faint, but it is there: a tiny crescent, just under the curve of the ear.
You have been walking for an hour. The sun has climbed. The quay is full of morning. Hao Lan’s hair has come loose, and her eyes are puffy, and she is smiling with her whole face.
“I have a brother who bites,” she says. “I have a sister who sings, and one who rows. I have a mother who hands out sweets.” She wipes her nose on the handkerchief. “It is all so ridiculous. It is so terribly ordinary.”
> mercy | Smile. | sixth_a4s6
> truth | Say it is a lot. | sixth_a4s6
> quiet | Walk on. | sixth_a4s6
> inquiry | Ask what she will do. | sixth_a4s6

=== sixth_a4s6 | A Letter from Tong
There is a boy waiting at the Ferryman’s Rest. He is a runner in the livery of the Slate Peak, with a bag over his shoulder and a long letter in his hand. He is out of breath. He has been running all the way from the river.
“Miss Hao?” he says. “From Scribe Tong.”
She takes it. She breaks the seal. It is not a letter; it is a drawing. It covers the entire sheet, in black ink, in a hundred tiny strokes. It is a harbour, a wall, a town, a hill. It is a woman on a quay, with a satchel on her shoulder. Behind her, in the shadows, stand six other figures, each one half-seen: a ferry, a lamp, a flute, a flask, an anvil, a knife.
At the bottom he has written a single word in his halting hand.
Family.
Hao Lan stares at it. Her hands are trembling.
“How,” she says. “How could he?”
“He writes in his sleep,” you say.
> mercy | Hold the drawing for her. | sixth_a4s7 | +sixth_tong_wrote
> truth | Say he knew. | sixth_a4s7 | +sixth_tong_wrote
> quiet | Smile. | sixth_a4s7 | +sixth_tong_wrote
> inquiry | Ask how he could have drawn the six. | sixth_a4s7 | +sixth_tong_wrote

=== sixth_a4s7 | What Tong Saw
“He sees what is going to happen,” says Hao Lan, wonderingly. “He sees it when he draws. Duan Wuyi told me. He said Tong’s hand knows things the rest of him does not.” She traces the figures with a fingertip. “He drew them before I knew they existed.”
She goes to the window of her room. She props the drawing on the sill, next to the dreadful cup. It catches the light.
“I should like to write to him,” she says. “I should like to tell him everything. But I do not know what to say.”
“Say what is true.”
“It is not a very long letter.” She smiles. “I am a Censor’s clerk. I am used to brevity.”
She sits down. She dips her pen. She writes, in her clear small hand, in the first line: Dear Tong. I am well. I have a family.
She stops.
“That is the first true thing I have written in a year,” she says. “It was easy.”
> mercy | Sit with her. | sixth_a4s8
> truth | Read it over her shoulder. | sixth_a4s8
> quiet | Leave her to it. | sixth_a4s8
> inquiry | Ask what comes next. | sixth_a4s8

=== sixth_a4s8 | Write What Is True
She writes until dusk. She writes eleven pages, in her small clear hand. She writes about the Chancery and the lemon trees, about Mr Mo and the deaf ear and the sharpening of pens. She writes about the Wall and the lamp and the sweets. She writes about a woman who sold paper and a girl who did not know she was lonely. She writes about you.
When she has finished she reads it through, from the first page to the last. She changes four words. She crosses out one sentence, and then restores it. She signs her name.
“There,” she says. “It is the longest letter I have ever written. It is also the first.” She blows on the ink. “I shall send it by the morning boat.”
She looks up. In the dusk, with the lamp behind her, she has a different face. It is not softer. It is clearer.
“I think,” she says, “I am going to be a writer. Not a clerk. A writer.”
> mercy | Say you will read it. | sixth_close | +sixth_walked
> truth | Say she already is. | sixth_close | +sixth_walked
> quiet | Smile. | sixth_close | +sixth_walked
> inquiry | Ask what she will write. | sixth_close | +sixth_walked

// ---------------------------------------------------------------- hidden: the second face
=== sixth_h1 | The Second Face
She takes it from her satchel and sets it on the sea steps between you: a seal of white bone, no bigger than a grain of rice, in a bed of silk. She has not let it out of her hand in three days. She turns it with a fingernail. The numeral on the face is six, or nine, depending on how the light falls.
“Master Zhu said it was a six,” she says. “He said it was cut to the left.” She frowns. “But I have been looking at it under a glass. There is a rim. It is very fine. It might be a second face.”
She holds up her lens. You bend close.
Round the edge of the seal, in a groove no wider than a hair, a line of tiny characters runs the whole circumference. It is not the Concord’s script. It is older. You read it from the beginning, slowly, tilting the seal to catch the light. It says: What is written true is not struck. What is struck is not written true.
“It is a palindrome,” whispers Hao Lan.
> inquiry | Read it again. | sixth_h2
> truth | Ask what it means. | sixth_h2
> mercy | Hold her hand. | sixth_h2
> quiet | Put the seal to your ear. | sixth_h2

=== sixth_h2 | A Clerk’s Charm
“It means,” says Hao Lan slowly, “that the Ledger is not the final authority.” She sits with her glass in her lap. “It means that a name can only be struck if it was wrongly written. A true name cannot be struck. It is a principle of the first Concord. It is why the Ledger was invented. To record only what is true.”
“And the Concord struck names anyway.”
“Because the clerks wrote them wrongly. Or were told to.” Her voice is rising. “It is why the Ledger has been failing. It is why the abyss cries. The Concord has been writing false entries for four hundred years. They have been piling up like rot.”
She puts the lens down.
“This seal was cut by someone who knew,” she says. “It was cut for a clerk. It was cut for a clerk who would one day be asked to choose between obedience and truth.”
She looks up.
“Ling cut it,” she says.
> inquiry | Say that is her gift. | sixth_h3
> truth | Say it chose her. | sixth_h3
> mercy | Say you are glad. | sixth_h3
> quiet | Wait. | sixth_h3

=== sixth_h3 | The Oath
She does not say anything for a long time. The tide comes in over the harbour mud. The sun climbs toward noon. A gull lands on the step, regards the two of you with a yellow eye, and goes away.
Then she picks up the seal. She presses it, with great care, to the page of her notebook. It leaves a tiny round mark, red as a drop of blood.
“I swear,” she says, and her voice is level and unhurried, “that I will write what is true. I will not write what is false. I will not alter, I will not strike, I will not omit, I will not soften. I will record the world as it is.” She breathes. “If I cannot, I will put down the pen.”
She closes the notebook.
“It’s not a very long oath,” she says. “I wrote it myself.”
You find, with some surprise, that your eyes are wet.
> inquiry | Bow to her. | sixth_close | +sixth_swore_oath
> truth | Say she will keep it. | sixth_close | +sixth_swore_oath
> mercy | Hug her. | sixth_close | +sixth_swore_oath
> quiet | Stay still. | sixth_close | +sixth_swore_oath

// ---------------------------------------------------------------- close
=== sixth_close | A Clerk’s Hand
The evening is warm. The lamp on the spur is lit, and the first stars are coming out above the Wall. Hao Lan sits at the little table in her room, with her pen in her hand and her cup at her elbow, and does not write. She is looking out of the window.
+[how] sixth_asked_ash | Madam Ash gave Hao Lan her card, and a promise of tea on Tuesdays.
+[how] sixth_read_file | The Tidewall Chancery’s file on Hao Lan says Reserve of a Reserve, and is signed with an F.
+[how] sixth_fed_yin | Yin has been sent seven dead names, and a lie, in a beautiful hand.
+[how] sixth_walked | A pear drop, a drawing, an eleven-page letter.
+[how] sixth_swore_oath | Hao Lan pressed a bone seal to a notebook, and swore to write only what is true.
“I keep thinking,” she says, without turning, “that I should be angrier. I think I am saving it. I think I am going to be extremely angry in about a month.” She sighs. “At the moment I am only tired.”
She turns, and holds out the brown card.
“I would like you to have this. Not for always. I want it back.” She almost smiles. “But I think you should hold it, while I am not sure.”
> truth | Take it. | sixth_close2 | +card_6
> mercy | Say she should keep it. | sixth_close2 | +card_6
> quiet | Hold it carefully. | sixth_close2 | +card_6
> inquiry | Ask what she is not sure of. | sixth_close2 | +card_6

=== sixth_close2 | Write What Is True
“Whether it is a gift,” says Hao Lan. “Or a leash.” She stirs the dregs of her tea. “Madam Ash said: nothing offered to a child is a gift. She is right. But I am not a child. And you are not offering. I am.”
She sets down the spoon.
“I think that is the whole of it. I think the difference between a gift and a leash is who is holding the other end.”
The card is soft and warm. The numeral is VI. On the back, the faded line, in a hand you know by now, as you know your own: Write what is true.
You hold it with the others, six now, in a fan. They click, one by one, into place.
“Go on,” says Hao Lan. “The Concord will be here in a week. Someone should draft a list of what to take.”
She is already reaching for a fresh sheet of paper.
> truth | Promise to return it. | hub_b3_coast | +b3q_sixth bond:hao+3
> mercy | Thank her. | hub_b3_coast | +b3q_sixth bond:hao+3
> quiet | Leave her to write. | hub_b3_coast | +b3q_sixth bond:hao+3
> inquiry | Ask if she is still a Censor. | hub_b3_coast | +b3q_sixth bond:hao+3

`,
  scenarios: String.raw`
$ SU_SIXTH_COT | trust+4 respect+3 fear+1 | elder | The Elder learns that the Censors' clerk who has carried her bag for weeks was one of the seven.
hostile: I wrote a reference for her, once. I did not know the girl. I wrote that she was diligent and honest and well-suited to the Chancery. I did not know I was describing a child I had left in a fire.
wary: The girl who has been correcting my footnotes for a month is one of the nine. I find that I have been talking to her as if she were a clerk. I find that I would like to start again.
neutral: She asked me whether the Concord loved her. I said no, because it cannot. She nodded. She said, “Then who do I thank for the paper?”
warm: I took out her card, VI, and held it to the light for a long time. Write what is true. I could not think of a better instruction for a clerk.
devoted: I should like to be her aunt. I am too old, and too guilty, and I know nothing of the work. But I should like to be present when she writes the first true thing she has ever written. I shall sit at the back, and be quiet.
`,
  remarks: String.raw`
% sixth_hao_later | since:b3q_sixth>=3 | duan | I have had a letter from Miss Hao. It was four lines long. In it she resigned her post, thanked me for my kindness, and informed me that she had corrected a mistake in my last report. She was right. I am becoming accustomed to being corrected by women I have underestimated.
% sixth_tong_later | since:sixth_tong_wrote>=5 | gu | Scribe Tong sent a drawing. It is Hao Lan, standing on a quay, with her satchel on her shoulder and a great many faces behind her. Under it he wrote: Not alone. I think it is the longest sentence he has ever managed.
`,
};
