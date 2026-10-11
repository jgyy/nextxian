import type { Arc } from "../types";

/**
 * Book Two, arc six: the Censor's Chessboard. Names are being written back into the Concord's travelling register at night.
 * Someone aboard is the door. Four ways to find out: by logic (a1), by ambush with Mei Qiu (a2), by a trap of a false name
 * (a3), by playing chess with Duan Wuyi until he says why he is afraid (a4). A hidden route reads Hao Lan's sketches.
 * The door is Scribe Tong, a child whose black ink writes names back. What the player does with that is the arc's weight.
 * Cast: Duan Wuyi, Mei Qiu, Hao Lan, Tong, the pilot Zhou, the cook Fen.
 */
export const barge: Arc = {
  id: "barge",
  name: "The Censor’s Chessboard",
  scenes: String.raw`
=== barge_entry | A Name in the Wrong Place
At dawn on the seventh day Mei Qiu knocks on the Elder’s door and the Elder’s door opens onto you instead, because you were already awake. She does not apologise. She hands you a page.
It is a leaf of the Concord’s travelling register, the grey-covered volume Hao Lan keeps in a locked case, and on it a line has been added overnight. There is no name on the line yet. There is only a date, in black ink, a seal, and the faint pressure of a brush that wrote and was lifted.
“Forty-one names have come back to the Ledger since the spring,” says Mei Qiu. “Each time, the register has changed. Each time, we have been in the same room.” She does not blink. “Tonight it was this barge. The door is aboard, Wanderer. I would like it found before the Assembly. I would like it found by someone who is not me.”
> inquiry | Lay the pages of the register side by side, and look for the pattern in what returned. | barge_a1s1 | +barge_a1
> force | Offer to sit up with her tonight, with a lantern covered and a hand on a blade. | barge_a2s1 | +barge_a2 needs:2
> deceit | Write a false struck name into the register yourself, and see who corrects it. | barge_a3s1 | +barge_a3
> quiet | Accept Duan Wuyi’s standing invitation to a game of chess, and let him talk. | barge_a4s1 | +barge_a4
> mercy | Go to Hao Lan’s cabin, where she has asked to show you something she has not shown anyone. | barge_h1 |  | censors_hao_friend | Hao Lan does not know you well enough yet to show you.
> mercy | Go to Hao Lan’s cabin, where she says she told Duan nothing and has something to show. | barge_h1 |  | censors_hao_told | Hao Lan does not know you well enough yet to show you.

// ---------------------------------------------------------------- a1: the pattern
=== barge_a1s1 | The Forty-One
Hao Lan unlocks the case with a key she wears on a cord, and does it with the tenderness of a woman unwrapping a sleeping bird. The register is bound in grey cloth and stitched with white thread. Inside, in a column down the left margin, run the names: forty-one in all, each with a date and a place.
You lay a sheet of paper beside it and begin to copy. A man in Salt Bay, struck for debt. A woman in the north, struck for refusing a marriage. A boy of six, struck when his father was. A baker. A beekeeper. A bandit. A saint.
Hao Lan watches over your shoulder. “I made the same list,” she says. “For three weeks. I could not find the rule. I think there is no rule.”
> truth | Tell her a pattern may not be in the names, but in the dates. | barge_a1s2
> inquiry | Ask which of them were struck by order, and which by mistake. | barge_a1s2
> mercy | Ask whether any of the forty-one has been told. | barge_a1s2
> quiet | Read the list again, slowly, and say nothing. | barge_a1s2

=== barge_a1s2 | The Dates
The dates are scattered across eleven weeks, with no order you can see. But the places are on the river. You lay them in a line on the deck with pebbles, from the north bank to the delta: Salt Bay. Kuan Landing. Willow Reach. Green Mill. And between them, in every case, the barge was moored within a day.
“It is not a coincidence,” says Hao Lan, small and tight. “I know. I have known for two weeks. I did not say.” She will not look at you. “Because it would mean the door is someone I like.”
She picks up a pebble and puts it down again.
“It is someone,” she says, “who was aboard on every one of those days.”
> truth | Ask who was aboard on all forty-one. | barge_a1s3
> mercy | Tell her it is a hard thing to find, and that she is brave to say it. | barge_a1s3
> inquiry | Ask who joined the barge last, and who has been on it longest. | barge_a1s3
> quiet | Take the pebbles up, one by one, and hold them. | barge_a1s3

=== barge_a1s3 | The Roll of the Barge
The roll is short. The Censor-General, Duan Wuyi, who has served the Concord thirty years. Mei Qiu, Seal Inspector, nineteen. Hao Lan, junior Censor, three. Scribe Tong, nine months. The pilot Zhou, who owns the barge. The cook Fen, who was hired at Qinglian for the season. A dozen oarsmen, who change at every landing and could not carry a secret across a river.
You note that the Elder and Gu and Ren and yourself have been aboard only a week.
“Eleven weeks,” says Hao Lan. “It rules out the four of you. It rules out the oarsmen. That leaves six.”
Six, and a register that is written in black ink.
> truth | Ask which of the six writes in black. | barge_a1s4
> inquiry | Ask which of the six had reason to want a name returned. | barge_a1s4
> force | Say you will interview each of the six tonight. | barge_a1s4
> mercy | Ask whether she would rather it not be found. | barge_a1s4

=== barge_a1s4 | Six Interviews
You interview them in the cabin, one by one, with a pot of tea between you and the door ajar. The pilot Zhou is a gnarled man with a limp who answers in monosyllables and has never in his life been inside the Ledger. The cook Fen cries when you ask whether she has lost anyone, and then laughs at herself, and tells you about her son, who is a fisherman in the delta and alive. Mei Qiu answers every question in under ten words, and her left hand does not stop tapping her iron.
Duan Wuyi says: “I am the only one aboard with the authority to write a name into the Ledger. I did not. I will say so under any oath you like.” He smiles. “I should be the first suspect. I would be disappointed if I were not.”
> truth | Believe him, and say so. | barge_a1s5
> inquiry | Ask him who else has ever had that authority aboard. | barge_a1s5
> quiet | Thank him, and say you will want to speak again. | barge_a1s5
> force | Say a man who says that is either innocent or very good. | barge_a1s5

=== barge_a1s5 | The Boy in the Corner
Tong comes last. He sits across the table from you with his brush across his knees and the notebook open on his lap, and he does not look at you. He looks at the register, which Hao Lan has laid between you, and his face has the stillness of a boy looking at a dog he is afraid may bite.
“He cannot speak,” says Hao Lan, from the door. “He was never able to. He writes.”
You ask the questions slowly. He answers on the corner of the page, in a neat child’s hand: Yes. No. Eleven weeks. Nine months. He answers the last question, the one about whether he has seen anyone write in the register at night, with a single stroke, and the stroke is a line.
A line, as in: none.
> truth | Tell him you believe him. | barge_a1s6
> inquiry | Ask him to write his own name. | barge_a1s6
> mercy | Ask whether he is afraid of something. | barge_a1s6
> quiet | Let him go, and watch his hands as he leaves. | barge_a1s6

=== barge_a1s6 | The Ink
You ask to see his ink. He passes the stone across the table with the air of a boy giving up a tooth. It is a plain black stone, smooth, grey at the edge, and in the well there is a dark glossy pool that does not dry. It smells faintly of lamp oil.
Hao Lan says, in a small voice, “Tong’s ink is from the Ash Archive. Lin Yuan sent it. It is made from the first fire’s soot, and it remembers its writer. It is the only ink that reads a hand.”
You turn the stone in your fingers. Under the gloss, very faint, you can see something move: a fine black thread, like a root, the length of a hair, turning in the well.
It is the same thread that turned in your chest when the Censor’s iron touched your gate.
> truth | Set the stone down, very gently, and say nothing. | barge_a1s7 | +barge_tong_door
> inquiry | Ask Hao Lan to leave you and Tong alone with the register. | barge_a1s7 | +barge_tong_door
> mercy | Lay your hand on his, and tell him he is not in trouble. | barge_a1s7 | +barge_tong_door
> force | Pick up the stone and tell him you know what it is. | barge_a1s7 | +barge_tong_door

=== barge_a1s7 | What Hao Lan Sees
Hao Lan has seen your face. She does not need to be told. She sits down very slowly on the edge of a chest, with the register in her lap, and says in a voice you would not recognise, “Oh.”
She looks at the boy. He is gripping his own wrists.
“I have been so careful,” she says. “I have kept the case locked. I have counted the pages. I did not think to count him.” She presses the heel of her hand to her mouth. “It is the ink. He writes, and it takes. I have watched him copy names in his sleep. He writes them out on his sheet and the Ledger takes them back, the whole time, and he does not know.”
Her voice cracks.
“I have a friend who is the door. I do not know what to do.”
> truth | Tell her that neither of you needs to decide tonight. | barge_a1s8 | +barge_hao_knows
> mercy | Put your arm around her shoulder. | barge_a1s8 | +barge_hao_knows bond:hao+3
> inquiry | Ask her whether Duan knows. | barge_a1s8 | +barge_hao_knows
> quiet | Sit beside her, and let her cry. | barge_a1s8 | +barge_hao_knows bond:hao+2

=== barge_a1s8 | The Decision
There are four of you in the cabin, a girl, a boy, a witness, and the register. The lamp is guttering, and the barge sways. The boy is looking at the floor. He has understood perhaps half of what has been said, and that half is the half that has to do with himself.
Someone has to decide what to do. You can tell Mei Qiu, who will do her duty. You can tell Duan, who is wiser and no safer. You can tell no one, and let the door go on writing. You can ask the boy what he wants.
He has not been asked. You can see it in how he is sitting.
> mercy | Ask him. Kneel down, and ask what he wants. | barge_close | +barge_asked_tong
> truth | Tell Duan Wuyi, tonight, and let him be the judge. | barge_close | +barge_told_duan
> quiet | Tell no one. Not yet. | barge_close | +barge_kept_secret
> force | Take the register, and the ink, and put them in the river. | barge_close | +barge_destroyed_ink

// ---------------------------------------------------------------- a2: ambush
=== barge_a2s1 | A Covered Lantern
The cabin is dark except for a shuttered lamp on the table. The register lies on the table between you and Mei Qiu. You have taken the low stool by the door. She sits with her iron across her knees and her eyes fixed on the register as a cat fixes on a hole in the wall.
“I will be plain,” she says, after the second watch. “I do not like you. I do not distrust you, which is a different thing. I have seen what is in your chest. I have not told the Censor-General what I think it is.”
She turns the iron in her fingers.
“I think it is the same thing as whatever is writing in this book.”
> truth | Tell her you do not know, but you intend to find out. | barge_a2s2
> inquiry | Ask what she thinks it is. | barge_a2s2
> quiet | Say nothing, and keep your eyes on the book. | barge_a2s2
> force | Tell her to say it plainly, or be silent. | barge_a2s2 | needs:2

=== barge_a2s2 | The Second Watch
“A door,” she says. “That is the Concord’s word. A door is a person who stands between the Ledger and the world. The old texts say there were once many of them. They called them listeners. The founders of the sects burned them, and the Concord inherited the habit.”
She is not looking at you. She is staring at the book.
“My sister was a listener,” says Mei Qiu. “She was eleven. The Concord sealed her under the Salt Coast, in a wound that closed a hundred and four years sooner than the books said it would. She was the last bearer on that coast.”
The lamp-flame is steady.
“I was nine,” she says. “I held the lamp.”
> truth | Tell her you are sorry. | barge_a2s3
> mercy | Reach for her hand, even though she’ll not take it. | barge_a2s3
> inquiry | Ask why she still serves a house that did that. | barge_a2s3
> quiet | Sit with the silence, and let her end it. | barge_a2s3

=== barge_a2s3 | Why She Serves
“Because it was right,” says Mei Qiu. It is said without conviction, a thing repeated. “The wound closed. A hundred thousand people on the Salt Coast did not drown in the mist. There are five towns where my sister’s name is carved on the harbour wall.” She grips the iron. “I tell myself it was right every morning. Most mornings I believe it.”
The barge creaks. Outside, the river is breathing.
“If I am wrong,” she says, in a voice you have not heard her use, “then I have been the Concord’s dog for nineteen years for a lie. I would rather the door were an enemy than a child.”
> truth | Tell her that if the door is a child, you will not let her harm him. | barge_a2s4
> mercy | Tell her she is not a dog, and has never been. | barge_a2s4
> inquiry | Ask whether she has seen the child. | barge_a2s4
> force | Tell her to put the iron down. | barge_a2s4

=== barge_a2s4 | A Sound at the Case
At the third watch there is a sound at the case. It is not the click of a lock. It is a small, dry sound, like a moth on paper, and it comes from the register on the table. You and Mei Qiu both come to your feet. The lamp-shutter is open an inch. In its beam, the leaf of the register lies flat.
On it, very slowly, a black line is drawing itself.
No hand is moving it. No brush is lifted. The ink is rising out of the page, the way sap rises in a stem, in the shape of a name.
Mei Qiu has her iron drawn. She is shaking. “It is here,” she says. “It is here, and there is no one in the room.”
> truth | Hold up a hand, and ask her to wait. | barge_a2s5
> force | Cover the register with your hand, and feel what comes through. | barge_a2s5
> inquiry | Read the name as it forms. | barge_a2s5
> quiet | Step back from the table and let it finish. | barge_a2s5

=== barge_a2s5 | The Name Is Written
The name completes itself. It is the name of a girl of eleven, in an old script. Her sister’s name. Mei Qiu stares at it as if she had been struck. Her face is white. The iron slips out of her hand and clatters to the planks.
Then a second line follows it, small and neat: a date, a place, a seal, in a hand that is not hers or yours. And a third, very faint, as of someone whispering the first word of a song.
Outside the cabin door there is a quiet movement of cloth. A shadow falls across the crack.
“Please,” says a very small voice, which you have never heard before. “I did not mean to. I was dreaming.”
> mercy | Open the door gently. | barge_a2s6
> truth | Say his name. | barge_a2s6
> force | Hold Mei Qiu back, before she reaches him. | barge_a2s6 | needs:2
> quiet | Let Mei Qiu go to the door first. | barge_a2s6

=== barge_a2s6 | The Boy at the Door
Tong stands in the passageway in his nightshirt with his hair standing up at the back. His hands are black to the wrists. He is crying without noise, the thin steady crying of a child who has been told all his life not to make a fuss. He looks at Mei Qiu. He looks at the name on the page.
He says, very softly, the first words you have heard from him: “Is she a friend?”
Mei Qiu goes down on her knees on the planks. She does not say anything. She has put her two hands over her face.
“Her name was Ke-er,” she says, through her fingers, in the ghost of a voice. “Ke-er. She was my sister.”
> truth | Tell Tong the name has come home, and he has done a good thing. | barge_a2s7 | +barge_tong_door
> mercy | Kneel beside Mei Qiu, and put a hand on her back. | barge_a2s7 | +barge_tong_door
> quiet | Pick up Tong’s inkstone, and hold it so he need not. | barge_a2s7 | +barge_tong_door
> inquiry | Ask Tong when he first noticed the names coming. | barge_a2s7 | +barge_tong_door

=== barge_a2s7 | The Door Is a Child
They sit on the cabin floor till the lamp is nearly out: a Seal Inspector, a witness, a boy of twelve with ink to the wrists. Mei Qiu does not speak for a long time. When she does, she says to Tong, with a stiffness that has nothing in it of the Concord, “How many have you written?”
He holds up both hands. Then both again. Then he closes his eyes and begins, patiently, to count on his fingers, the way a child does who is afraid of getting it wrong.
She watches him. Her hands have stopped shaking.
“I will not give you to the Censor-General,” she says. “I will not give you to the Assembly. I do not yet know what I will do. But I will not do that.”
> truth | Thank her, and tell her you will find a way together. | barge_a2s8 | +barge_mei_ally
> mercy | Say nothing. Let the promise stand as she said it. | barge_a2s8 | +barge_mei_ally
> inquiry | Ask whether she is certain about the Censor-General. | barge_a2s8 | +barge_mei_ally
> force | Tell her to put it in writing, with her seal. | barge_a2s8 | +barge_mei_ally

=== barge_a2s8 | By Morning
By morning the register has been put back in its case and the case locked. The cabin is tidy. The lamp has been trimmed. A pot of tea waits on the table, with three cups. Mei Qiu has gone out onto the deck and stands at the rail with her back to the cabin, as upright as ever, and when you come out and stand beside her she says, without turning, “I have not slept so badly in eleven years.”
She is silent a while.
“Thank you for not hitting me,” she says.
There is a faint line of colour at the horizon. The barge moves on.
> truth | Tell her you would never have. | barge_close | +barge_told_mei
> mercy | Tell her to sleep, and that you will watch the door. | barge_close | +barge_told_mei
> quiet | Stand beside her and say nothing. | barge_close | +barge_told_mei
> inquiry | Ask her what she will tell the Censor-General. | barge_close | +barge_told_mei

// ---------------------------------------------------------------- a3: a false name
=== barge_a3s1 | A Name That Never Was
The plan is simple, and you do not like it. You borrow a page of the register from Hao Lan, who turns the colour of a beet and agrees. You write a name on it: a man, a farmer, in a village that does not exist. You write that he was struck for debt, in the third month, at a place called Silver Ford. You write a date, a seal copied from the corner of another page, and your best imitation of a clerk’s hand.
You close the book and put it back in the case.
“It is a lie,” says Hao Lan. “If the door is the Ledger itself, it will not take a false name.” She wrings her hands. “It will not. It cannot.”
“Then we shall see what takes it.”
> deceit | Set the false name where the door will see it. | barge_a3s2 | +barge_trap_set
> truth | Warn Gu and Ren that you are watching the register tonight. | barge_a3s2
> inquiry | Add a second false name, in a different hand, to see if the pattern changes. | barge_a3s2
> quiet | Say nothing to anyone, and sleep lightly. | barge_a3s2

=== barge_a3s2 | The Quiet Hours
The barge is silent but for the creak of the hull, the chuckle of the water, and the occasional cough of an oarsman asleep on the deck. You lie on your pallet with your eyes open and your breath held. Beside you Gu snores faintly, a boy who has never in his life been asked to be quiet in the dark.
You listen. At the second watch there is a movement in the passage. A soft dragging step, as of a child in slippers. A pause outside the cabin. The step goes on, away.
You get up. You do not hurry. You follow, in your stockinged feet, down the passage past the cook’s galley to the aft cabin where the register is kept.
The door is ajar.
> truth | Push it open and say, “Who is there?” | barge_a3s3
> quiet | Stand in the dark and watch through the crack. | barge_a3s3
> inquiry | Hold your breath, and count how long the writing lasts. | barge_a3s3
> force | Throw the door open and light the lamp. | barge_a3s3

=== barge_a3s3 | Not the Boy
It is not Tong. A woman is sitting at the table in the aft cabin, with the register open in front of her and a brush in her hand. She is writing by feel. She has not lit a lamp. In the dark her face is a pale oval, and she is crying silently, tears dropping on the page.
It is Fen, the cook.
She does not look up. She is writing slowly, and in her handwriting is the careful awkwardness of a woman who has learned her letters late. On the page, beneath the false name you wrote, she has added a line.
You read it by the light of the porthole. It says: My son, Fen Hao. Struck from the Ledger in the autumn at Qinglian Ford, when the Concord took his boat for debt. He is alive. I have been told he is not.
> mercy | Go to her and put a hand on her shoulder. | barge_a3s4
> truth | Ask her who told her. | barge_a3s4
> inquiry | Ask her what she was trying to do. | barge_a3s4
> quiet | Stay in the doorway and say nothing. | barge_a3s4

=== barge_a3s4 | The Cook
Fen was hired at Qinglian for the season. She told you so on the second day, over a pot of millet, in a voice that said she wanted to be believed. She tells you, now, that it was a lie. She was hired to be near the register. She was asked to be.
“There is a man in a drowned house,” she says. “A clerk. He said if I could write my son’s name in the Concord’s book, it would take. I have no talent for it. I wrote it every night for eleven weeks, and the book never took it.” Her voice breaks. “So I thought, tonight, I would try beside a stranger’s.”
She holds up the brush, a coarse thing with a split tip.
“It did not work. It never works.”
> truth | Tell her it is not the brush, nor the paper, and you will not tell anyone. | barge_a3s5
> mercy | Ask for her son’s name, and promise to carry it to Qinglian. | barge_a3s5
> inquiry | Ask for the clerk’s name. | barge_a3s5
> force | Tell her the Concord will have her hanged if she is found. | barge_a3s5

=== barge_a3s5 | Wen Rui’s Cook
It is Wen Rui, of course. A small grey man in a brown robe, with a line on his forehead where something was drawn and rubbed. He told her the Lotus could return a name, in the right hands, on the right page, if she kept trying. He told her she had a gift. He told her many things. None of it was true.
“He was kind,” says Fen, wiping her face with the back of a hand. “He asked me nothing. He gave me a brush.”
She sits straight. She is a woman of fifty with strong arms and flour in her hair, and she says, quite plainly: “I will understand if you hand me over.”
You think of Wen Rui in the drowned pagoda saying, softly, I want to be written back.
> truth | Tell her you will not hand her over, and ask for her help. | barge_a3s6 | +barge_cook_ally
> mercy | Tell her to go back to her galley and make breakfast. | barge_a3s6 | +barge_cook_ally
> quiet | Sit down across from her and look at the page. | barge_a3s6
> inquiry | Ask if anyone else aboard writes at night. | barge_a3s6

=== barge_a3s6 | Someone Else Writes
“Yes,” says Fen. It comes out in a rush. “The boy. Tong. He writes in his sleep. I have watched him. I thought it was the Concord’s work.” She wrings the brush. “His hands are black to the wrists in the morning. He doesn’t know. He sits at the table and he eats his millet and he doesn’t know.”
She looks at you, stricken. “It is his that take. I have been afraid to say. When I heard he had stood at the register and written the name of a fisherman he never met, I thought, he’s a child, he can’t be the one. Mine never took. His do.”
You stand very still. The porthole shows a rim of grey light.
> truth | Thank her, and promise to keep Tong safe. | barge_a3s7 | +barge_tong_door
> mercy | Ask her to keep this to herself, for the boy’s sake. | barge_a3s7 | +barge_tong_door
> inquiry | Ask when it started, and what he writes. | barge_a3s7 | +barge_tong_door
> force | Tell her you will deal with it. | barge_a3s7 | +barge_tong_door

=== barge_a3s7 | A Child Asleep
You find him in the forward berth, a small shape under a blanket. His hands are outside the cover, flat on the sheet, and they are moving. They trace in the air above the blanket, very softly, the strokes of a character. His breathing is slow. His lips are parted. He is writing in his sleep.
Where his fingers pass, a thin black line hangs in the air for a moment, and fades. You can smell lamp oil, and rain on stone.
You kneel beside the berth. You do not wake him.
He writes a name. You recognise it. It is the name of the farmer in the village that does not exist, the false name you set in the register hours ago.
> truth | Whisper that it is not a real name, and he can stop. | barge_a3s8
> mercy | Take his hand, very gently, to still it. | barge_a3s8
> quiet | Watch, and let him finish. | barge_a3s8
> inquiry | Ask, softly, what the name means to him. | barge_a3s8

=== barge_a3s8 | A Name Without an Owner
In his sleep the boy answers. His voice is clear and unhurried and not his own. “It means nobody,” he says. “It means the one who was never written. Someone has to be the first to write him.”
The strokes in the air slow, and stop. The black line dies. The boy’s hand falls to the sheet, and he turns on his side, and sighs.
You sit back on your heels. In the register, you will learn in the morning, a farmer called Lu Xuan of Silver Ford has been written in a perfect clerk’s hand with a perfect seal. There is no such man. There is no such ford. The Ledger has accepted him all the same.
The door is a child. And the door does not care whether a name is true.
> truth | Go and wake Hao Lan, and tell her. | barge_close | +barge_hao_knows +barge_told_duan
> quiet | Cover the boy, and sit with him until morning. | barge_close | +barge_kept_secret
> mercy | Ask Fen to watch him, and go for the Elder. | barge_close | +barge_told_su
> inquiry | Take the register to Duan Wuyi, and ask him what a false name does. | barge_close | +barge_told_duan

// ---------------------------------------------------------------- a4: chess
=== barge_a4s1 | A Board of Black and White
Duan Wuyi’s cabin is plain: a cot, a lamp, a shelf of bound volumes, and a low table with a chessboard inlaid in two woods. The pieces are carved from a single piece of ivory, the white left natural and the black dipped in ink. He sets them out slowly, as a man sets out a meal, and takes the black.
“I play for the soul,” he says. “It is a vulgar phrase. It is also exact. Every game I have ever played with a witness has told me something I did not ask for. Please. White moves first.”
You sit. The lamp is steady. The board is a small, clear landscape, and for the first time in a week there is nothing in the room that wants to hurt you.
> truth | Open with the king’s pawn, and tell him you play badly. | barge_a4s2
> inquiry | Open with the queen’s pawn, and ask him what the Concord does with a lost game. | barge_a4s2
> quiet | Move a knight, and say nothing. | barge_a4s2
> deceit | Open with a gambit, and watch his hands. | barge_a4s2

=== barge_a4s2 | What He Says When He Plays
Duan plays fast and talks slowly. He tells you he was born on a barge. His mother was a pilot, his father a Censor’s runner, and he learned to read on the back of a grain receipt. He says he was bad at everything but arithmetic, and the Concord took him because it needed someone who could count.
“Fifty thousand names,” he says, moving a bishop. “That is my life’s work. I have counted fifty thousand names struck, and not one of them was a mistake.” He pauses. “I used to think that was a boast.”
The lamp-flame is steady.
“Check.”
> truth | Tell him you understand what it is to count something no one else will. | barge_a4s3
> inquiry | Ask when he stopped thinking it a boast. | barge_a4s3
> quiet | Move your king, and let him go on. | barge_a4s3
> force | Tell him a man who counts and does nothing is a clerk. | barge_a4s3

=== barge_a4s3 | The Second Game
You lose the first. You lose the second, more slowly. In the third you realise he has been letting you see his moves, a half-beat early, as a teacher shows a child where the hole is. You see the hole. You step round it. He nods.
“When I was a young Censor,” he says, “I struck a woman from the Ledger for fraud. A small fraud. I was certain. It was my first signature.” He turns a black pawn in his fingers. “She was innocent. She was struck three years. When her name came back it was not by my hand. Someone else wrote it. I never found out who.”
He sets the pawn down.
“It was the first door I ever heard of. I did not look for it. I have been not looking for twenty-six years.”
> truth | Ask him why he has stopped not looking. | barge_a4s4
> mercy | Tell him a man who wanted to find a door would have found it. | barge_a4s4
> inquiry | Ask what the woman’s name was. | barge_a4s4
> quiet | Move a rook. Let the silence work. | barge_a4s4

=== barge_a4s4 | The Third Game
The board is nearly empty. He has a king, a bishop and three pawns. You have a king, a rook and four pawns. The lamp has burned down a finger’s breadth.
“Tong,” he says.
He says it so simply, in the middle of a move, that for a moment you think he is calling for the boy. Then he lifts his eyes from the board.
“I have known for nine months,” he says. “I found him at the Seventh Chancery, copying a register in a corner, with his hands black to the wrist. He could not speak. I asked his name. He wrote it. I asked how he had come by the brush, and he drew a lotus, and I said, ‘That will do.’”
He lowers his hand to the board.
“I have been trying to keep him from being noticed ever since.”
> truth | Tell him you understand, and that you have noticed. | barge_a4s5
> mercy | Ask what he is afraid of. | barge_a4s5
> inquiry | Ask what the Concord would do, if it knew. | barge_a4s5
> force | Tell him a boy who writes names in his sleep cannot be hidden. | barge_a4s5

=== barge_a4s5 | What Duan Fears
“Do you know what I fear?” he says. “It is not what you imagine. It is not that the boy will be sealed. I could prevent that. I am a Censor-General, and I have the signature. I fear that I will be asked, at the Assembly, to sign the Second Order. And I will.”
His hands are folded on the board. His voice is level.
“I have signed every order that has crossed my desk in thirty years. I have never refused one. I do not know how.” He looks at you. “That is the thing I wanted you to know. I am not your friend. I am a man who will sign. If I have to choose between the Concord and a child, I do not yet know what I shall do.”
> truth | Tell him you do not need him to be a friend, only to be honest. | barge_a4s6 | bond:duan+3
> mercy | Tell him a man who says that already knows how to refuse. | barge_a4s6 | bond:duan+4
> force | Tell him that if he signs, you will stand in the way of the pen. | barge_a4s6 | bond:duan-3
> quiet | Move your last pawn. Let him choose. | barge_a4s6 | bond:duan+2

=== barge_a4s6 | Mate in Four
He sees it before you do. He studies the board, and a small smile touches his mouth, the smile of a man who has been given an unexpected gift. “Mate in four,” he says. “Yours.” He begins to tip his king. Then he stops, and looks up.
“I am going to let you win,” he says. “I do not do it often. It is a rule of mine that a witness must be allowed to win once. It makes them honest.”
He picks up his king and holds it out to you, black ivory, warm from his hand.
“If I sign the Second Order, I want you to put this on my desk. I do not know what it will mean. I want it there.”
> truth | Take the king. | barge_a4s7 | +barge_duan_king bond:duan+3
> inquiry | Ask what he wants it to mean. | barge_a4s7 | +barge_duan_king
> quiet | Take it, and put it in your sleeve beside the Elder’s comb. | barge_a4s7 | +barge_duan_king
> force | Refuse. Tell him he has no right to give you his conscience. | barge_a4s7 | +barge_duan_refused bond:duan-2

=== barge_a4s7 | The Boy at the Door
The door of the cabin opens an inch, and a boy stands in it. He is in his nightshirt. His hands are black to the wrist. He is carrying the register, and holds it out in both arms, as a child holds a bird that has flown into a window.
“I wrote,” he says, in the thin new voice you heard once through a door. “I wrote a lot tonight. I am sorry. I did not know how to stop.”
Duan Wuyi rises from the board. He crosses the cabin in two steps and kneels on the deck, a man of fifty-six on his knees before a child, and takes the register from his arms.
“Tong,” he says. “Little Tong. You are not in trouble.”
He does not look at you. His voice breaks.
> truth | Tell Tong he did well. | barge_a4s8 | +barge_tong_door
> mercy | Kneel beside Duan, and put a hand on the boy’s. | barge_a4s8 | +barge_tong_door
> quiet | Stay seated at the board, and let the three of them have the cabin. | barge_a4s8 | +barge_tong_door
> inquiry | Ask Tong whom he wrote. | barge_a4s8 | +barge_tong_door

=== barge_a4s8 | A Name for Nobody
Tong holds up his hand, black to the wrist, and writes in the air. You watch the strokes hang for a breath and fade: a name, a place, a date. Then a second. Then a third. It is the roll of the barge, the oarsmen, the pilot, the cook. Then your own, or what he thinks of as your own: Wanderer. The black line shivers.
Duan watches the strokes. His eyes are wet.
“He is writing a roll of the people he is fond of,” he says. “In case.” He draws a long breath. “In case the Concord should have need of a list.”
It is the saddest thing you have ever heard a Censor say.
> truth | Tell Duan that nobody is going to touch the boy. | barge_close | +barge_told_duan +barge_duan_pledged
> mercy | Gather the boy into your arms. | barge_close | +barge_told_duan
> quiet | Rest your hand on the board, and say nothing. | barge_close | +barge_told_duan
> inquiry | Ask Duan what a roll of the fond is worth, at the Assembly. | barge_close | +barge_told_duan

// ---------------------------------------------------------------- hidden route: sketches
=== barge_h1 | A Sketchbook of the Dark
Hao Lan comes to your cabin at midnight with a lantern and a roll of paper under her arm. She has been awake for two days. She sits on your pallet and unrolls the paper across your knees, and does not speak until she has smoothed every corner.
They are sketches. Dozens of them, in pencil, on the backs of ledger sheets. A boy at a desk. The same boy asleep. The same boy, again, from above, in the dark, with a smudge of light around his hands.
“I draw what I cannot say,” she says. “I did not know I was drawing this. I only looked at the pages afterward.”
She lays her finger on the last sketch. In it, the boy’s hands are writing, and the lines hang in the air like threads.
> truth | Tell her that you believe her, and that you have seen it. | barge_h2 | +barge_hao_shared bond:hao+4
> mercy | Thank her for trusting you with them. | barge_h2 | +barge_hao_shared bond:hao+3
> inquiry | Ask how many nights she watched. | barge_h2 | +barge_hao_shared
> quiet | Hold the lantern so she can see the page. | barge_h2 | +barge_hao_shared bond:hao+2

=== barge_h2 | Thirty-Four Nights
“Thirty-four,” she says. “I stopped counting after that. I sat in the passage outside the berth. I thought, if I do not tell, nothing will happen. I thought, I will make a sketch for every night, and when it is over I will burn them.” She laughs, wetly. “I have a drawer full of boy. It is ridiculous.”
You turn the sheets. In the last one he has drawn his own hand, and under it, in a child’s awkward script, a single question.
Is it bad to be the door?
“He asked me that,” says Hao Lan. “In his sleep. In a voice I had never heard. I did not answer.” She presses her knuckles to her lips. “I should have answered.”
> truth | Tell her what you would have said. | barge_h3
> mercy | Tell her it is not too late to answer. | barge_h3
> quiet | Fold the sketch very carefully and put it in her hand. | barge_h3
> inquiry | Ask who else has seen the drawings. | barge_h3

=== barge_h3 | The Answer
In the morning, in the sun of the foredeck, she sits beside the boy with her sketchbook open on her knee. He is eating millet. She draws him, quickly, while he eats. Then she turns the page and shows him.
He looks at the picture for a long time. He sets down his bowl. With one finger he traces the outline of the little drawn hand.
“No,” says Hao Lan, quite clearly. “It is not bad. It is the best thing about you.” She is blushing to the ears. “I wanted you to know that I thought so.”
Tong looks up at her. For the first time, in the sun, he smiles.
> truth | Leave them to it. | barge_close | +barge_hao_knows +barge_told_hao
> mercy | Sit down at a distance, and share the millet. | barge_close | +barge_hao_knows +barge_told_hao
> quiet | Stand at the rail where you can see them both. | barge_close | +barge_hao_knows +barge_told_hao
> inquiry | Ask Hao Lan if she has said anything to the Censor-General. | barge_close | +barge_hao_knows +barge_told_hao

// ---------------------------------------------------------------- close
=== barge_close | What Is to Be Done With a Door
The barge goes on down the river in the thick gold of afternoon. On the foredeck a boy is writing in the air with a wet finger, and no one asks him to stop.
+[who] barge_asked_tong | You asked him what he wanted. He said, in a thread of voice, that he wanted not to be hurt, and also not to be alone.
+[who] barge_told_duan | Duan Wuyi knows, and has not slept. He sits by the boy’s berth with the register in his lap.
+[who] barge_kept_secret | No one knows but you, and Tong, and whoever is awake at night. The weight of it is a stone in the stomach.
+[who] barge_destroyed_ink | The inkstone is at the bottom of the river. Tong has not spoken since, and does not meet your eye.
+[who] barge_told_su | The Elder knows. She asked only one question: whether the boy had eaten.
+[who] barge_told_mei | Mei Qiu stands guard outside his berth with her iron across her knees. She does not seem to need to sleep.
+[who] barge_told_hao | Hao Lan has drawn the boy forty-one times, and given none of them to anyone.
+[duan] barge_duan_king | A king of black ivory sits in your sleeve, with Duan Wuyi’s warmth gone out of it.
+[duan] barge_duan_refused | You refused his king. He has not mentioned it, and plays black against himself with a certain grimness.
+[duan] barge_duan_pledged | Duan Wuyi pledged, to a child and a witness, that nobody would touch him. You wonder what the pledge will cost.
+ barge_tong_door | The door is a child, and now you know it.
+ barge_hao_knows | Hao Lan has been awake two days and looks it.
+ barge_trap_set | The false farmer from Silver Ford is written in the Ledger in a perfect clerk’s hand, and the Ledger does not mind that he never lived.
+ barge_hao_shared | You have seen the sketches, the thirty-four nights, the question the boy asked in his sleep.
+[mei] barge_mei_ally | Mei Qiu promised not to give him to the Assembly. You have seen the promise cost her.
+[cook] barge_cook_ally | Fen the cook bakes a loaf for the boy each morning, and does not say why.
> truth | Go and sit with Tong at the bow, and watch the river. | barge_close2 | bond:duan+1
> mercy | Ask the cook for a cup of tea for each of them. | barge_close2 | bond:hao+1
> quiet | Stay at the rail, and watch the door. | barge_close2
> inquiry | Find the Elder, and ask what she knows about listeners. | barge_close2

=== barge_close2 | The Weight of a Child
At dusk the Elder comes to find you on the foredeck. She has her hair pinned up and her cloak around her shoulders, and she stands a long moment at the rail with her back to you.
“I have learned something this week,” she says. “I have learned that the Concord is not made of villains. It is made of people who cannot refuse a signature.”
+ barge_a1 | You laid the Concord’s pages side by side, and the pattern was a child.
+ barge_a2 | You sat up in the dark with a woman who held a lamp for her sister, and the door was a child.
+ barge_a3 | You wrote a lie in the Ledger, and the Ledger took it, because the door does not care whether a name is true.
+ barge_a4 | You lost three games of chess, and the Censor-General told you the thing he had never told anyone.
She turns.
“I will not ask you what you intend,” she says. “I will ask you to remember that you are not the only one who has a thing in their chest that the Concord would like to put in a wound. There is a boy. There will be others.”
> truth | Promise her that you will not let the boy be used. | hub_b2_road | +b2r_barge npc:SU_BARGE_DOOR
> mercy | Ask whether she will help you hide him. | hub_b2_road | +b2r_barge npc:SU_BARGE_DOOR
> quiet | Stand beside her and look at the river. | hub_b2_road | +b2r_barge
> inquiry | Ask her how many listeners the Law Hall ever knew. | hub_b2_road | +b2r_barge npc:SU_BARGE_DOOR
`,
  scenarios: String.raw`
$ SU_BARGE_DOOR | trust+3 fear+4 respect+3 | elder | The Elder speaks with the player about Scribe Tong, the child who writes names back.
hostile: You talk to me of a boy and a Ledger as though I were a refuge. I am not. I am an Elder who signed fourteen orders and did not look at the fifteenth. I will not be a haven for anyone else’s secrets.
wary: A child who writes names back into the Ledger. I have heard the old tales. I did not believe them. I believe them now, and I am afraid. Do not ask me to tell you what the Law Hall knew. The Law Hall knew everything and said nothing.
neutral: I knew of listeners. I did not know they could still be born. The founders burned the ones they found, and called the burning law. I have a feeling, Wanderer, that this boy is the beginning of a question I have been avoiding for fifteen years.
warm: A boy with black hands and a gift he does not understand. And you. I have been counting the ways in which this barge is full of people who should not be on it, and I think I am glad of every one. Sit. Let us think how to keep him safe.
devoted: I will do what I can for the boy. I will do more for you. I cannot say what, yet. But hear me, Wanderer: I did not smuggle you out of the Law Hall to have you sealed in a river. I will go into the wound myself first.
? tone:mercy>=3/5 | You have been kind to the Concord’s scribe, and the Concord’s cook, and the Concord’s Censor. I did not think it possible to be kind to the Concord. I am glad to be corrected.
`,
  remarks: String.raw`
% barge_tong_later | since:barge_asked_tong>=14 | elder | The boy asked the cook for a second bowl of millet today. In a voice. I did not know he had one. I am told he asked you what he wanted first. That was well done.
% barge_hao_later | since:barge_told_hao>=10 & bond:hao>=6 | hao | I have started leaving the sketchbook open on the table. I do not know why. I think I want someone to see.
% barge_mei_later | since:barge_mei_ally>=18 | elder | Inspector Mei came to my door at night and asked whether I had a sister. I said yes. She nodded, and went away. I think it was a kind of kindness.
`,
};
