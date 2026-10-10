import type { Arc } from "../types";

/**
 * Book Three, arc ten: the House of Gentle Hands. Tian (cot VII) has gone up the hill alone to the Chancery foundation where
 * forty children from dust-struck families are kept, meaning to burn it. Four approaches: visit by the front gate and talk
 * (a1, truth), break in with the defecting marines (a2, force), tour the house as benefactors (a3, deceit), and take the children
 * out by the old drain at night (a4, quiet). A hidden route uses Lu Yan's list of names to call the children out one by one.
 * Cast: Tian, Matron Cho, Nurse Bei, Yin the secretary, the child Moth, Lu Yan.
 */
export const house: Arc = {
  id: "house",
  name: "The House of Gentle Hands",
  scenes: String.raw`
=== house_entry | The Hill Road
Tian is gone. Bao Er finds the bed empty at dawn, with the blanket folded and the two knives missing from the nail by the door. On the pillow is a scrap of paper, torn from a funeral order, with a single line in a boy’s furious scrawl: Don’t follow me. Back by supper.
He is not back by supper.
At the second bell, Bao Er comes to the Ferryman’s Rest with her braid half undone and her face white. “He’s gone to the House,” she says. “I know it. He found out about the House from Lu Yan’s list. He’s been reading it in the loft for three nights. He said nothing.” Her voice shakes. “He said he wanted to see what a Chancery foundation looked like.”
The House of Gentle Hands stands alone on the hill above the town, a long white building behind a wall of iron spikes. It has a garden, a chapel, a bell-tower. From the road it looks like a school.
There are forty windows. In none of them is a face.
> truth | Walk up to the front gate and ring the bell. | house_a1s1 | npc:SU_HOUSE_CHILDREN
> force | Go and find Sergeant Hok, and ask for the men who put down their rifles. | house_a2s1
> deceit | Put on the Chancery sash, and call as a benefactress of the foundation. | house_a3s1
> quiet | Ask Lu Yan where the old drains of the hill run out. | house_a4s1
> inquiry | Take Lu Yan’s list of forty names up the hill, and read it at the gate. | house_h1 |  | ward_took_shift | You have not seen Lu Yan’s list.

// ---------------------------------------------------------------- a1: the front gate
=== house_a1s1 | The Bell
The gate is a double leaf of black iron, twelve feet high, with a bell-pull on a chain. You ring. A long way off, in the building, a small bell answers. Nothing else happens for a minute. Then a wicket in the gate slides open and a face looks out. It is a woman’s, plump and pink, in a white cap, with a smile so fixed that it seems to have been painted on.
“Good afternoon,” she says. “How may we be of service?”
“I have come to visit,” you say.
“How lovely.” The smile does not waver. “Visits are by appointment only, I am afraid. It is the policy of the House. The children find strangers unsettling.” She tilts her head. “May I take your name?”
Behind you Hao Lan whispers, “She’s looking at your hands.”
You glance down. The woman’s eyes are on the scar on your palm. She has not looked away since the wicket opened.
> truth | Give her your name. | house_a1s2
> quiet | Hide your hand. | house_a1s2
> mercy | Ask after the children. | house_a1s2
> inquiry | Ask who she is. | house_a1s2

=== house_a1s2 | Matron Cho
“Cho,” says the plump woman. “Matron Cho. I have had the pleasure of the House for twenty-two years.” The wicket swings wide. A key rattles. The gate opens a foot, no more, and she stands in the gap with her hands folded on her apron. “We do not often have callers. Is it a matter of admission?”
“It is a matter of a boy,” you say. “Seventeen. Thin. Two knives.”
“Ah.” For a moment something shifts behind the smile. “A boy. I think you may mean our visitor. He arrived this morning. He is in the garden.” She brightens. “He is being so helpful. He has been mending the fence.”
You glance at Gu. He glances back.
“May we see him?” you say.
“Of course.” Matron Cho steps aside. “Do come in. Mind the step. The children are at their rest, so we must be quiet.”
> truth | Go in. | house_a1s3
> quiet | Let Ren go first. | house_a1s3
> mercy | Take Gu’s hand. | house_a1s3
> inquiry | Ask how many children are at rest. | house_a1s3

=== house_a1s3 | The Garden
The garden is a long lawn of clipped grass between beds of white flowers, with a gravel path down the middle and a pond at the end. A bench stands by the pond. Six children are sitting on it in a row, in grey smocks, with their hands in their laps. They are between four and nine. They do not move. They do not look at you. They are looking at the water.
A boy of seventeen is kneeling at the edge of the lawn, with a hammer in one hand and a nail in his mouth, mending a fence-post. He has his back to you. His shoulders are rigid.
“Tian,” says Hao Lan, in a small voice.
He does not turn. He drives the nail with three savage blows. He takes the next from his mouth.
“Go away,” he says. “I told Bao Er I’d be back by supper.”
> truth | Walk over to him. | house_a1s4
> mercy | Look at the children on the bench. | house_a1s4
> quiet | Say nothing. | house_a1s4
> inquiry | Ask what he is doing. | house_a1s4

=== house_a1s4 | Mending
“I’m mending,” says Tian. He holds up the hammer, as if to prove it. “It’s a fence. It was loose. A child could have got through.” He spits out a nail. “The Matron said I could. She says I’m very handy.”
His voice is shaking, very slightly, and he is pale as chalk.
“I have been here since dawn. I asked to see the children. She said yes. She walked me through the whole house. She showed me the dormitory. She showed me the schoolroom, and the chapel, and the kitchen. They’re all so clean.” He sets the hammer down and puts his face in his hands. “They’re so quiet. They don’t talk. They don’t play. They sit. She gives them tea at the bell. They drink it and sit.”
He lifts his head. His eyes are red.
“I wanted to burn it,” he says. “I had matches in my sleeve. And then I saw the little one.”
> truth | Ask which little one. | house_a1s5
> mercy | Sit beside him. | house_a1s5
> quiet | Wait. | house_a1s5
> inquiry | Ask where the matches are. | house_a1s5

=== house_a1s5 | Moth
“That one.” He points. At the end of the bench, a little girl of six in a grey smock is drawing on the gravel with a stick. She has a cowlick and bare, dusty feet. She draws a circle. She draws a line through it. She looks at what she has drawn with an expression of mild surprise, and rubs it out with the side of her hand, and starts again.
“She’s called Moth,” says Tian. “The Matron says. She came in six weeks ago. Her mother brought her. She said: look after her, I’ll be back.” He swallows. “She hasn’t spoken a word since.”
“Mrs Hang,” you say softly.
He looks up. “What?”
“Her mother is in the Ward. She darns a stocking with no hole. She said she put her daughter somewhere safe.”
You watch the stick make a circle on the gravel. You see the line go through it. It is not a random scribble. It is a numeral. It is a nine.
> truth | Tell Tian. | house_a1s6
> mercy | Go to the girl. | house_a1s6
> quiet | Watch. | house_a1s6
> inquiry | Ask what the nine means. | house_a1s6

=== house_a1s6 | Nine
“She draws it all day,” says Matron Cho gently, behind you. She has come up the path without a sound. Her smile is tender. “Over and over. We have tried to teach her other shapes. She will not. The children are like that. They fix on something.” She sighs. “It is a very common symptom of the condition.”
“What condition?” says Hao Lan sharply.
“Forgetfulness,” says the Matron. “It runs in families. These poor mites come to us with their parents’ afflictions. Our work is to keep them calm.” She spreads her hands. “It is a gentle regimen. A simple diet. Good air. A little tea.”
“A little tea,” says Tian, in a voice you have never heard from him.
“Camomile,” says the Matron. “It is very soothing.”
Tian has stood up. He has taken a step toward her. His hammer is in his hand.
> truth | Put a hand on his arm. | house_a1s7
> mercy | Step between them. | house_a1s7
> quiet | Watch the Matron’s hands. | house_a1s7
> inquiry | Ask to see the tea. | house_a1s7

=== house_a1s7 | The Kitchen
The kitchen is a long white room with a stone floor, and in the middle of it stands a great copper kettle on a brazier. A cook with a floury apron stands at a table, kneading dough, with her back to you. She does not turn. On a long dresser stand forty cups, each with a small blue cross painted inside, in a perfect row.
The Matron lifts the kettle lid. The smell is faint. It is sweet and grey, and you know it.
“Camomile,” she says. “And a little honey.”
“It’s dust,” says Hao Lan.
“I beg your pardon?”
“It is calm dust. It is in the kettle. I can smell it.” Her voice has gone very quiet and level. “It is in every cup.”
Matron Cho looks at her. The smile does not slip. It simply stops, like a clock.
“You are mistaken,” she says. “It is a recipe approved by the Chancery.”
> truth | Say that is exactly the problem. | house_a1s8
> mercy | Put a hand on Hao Lan’s shoulder. | house_a1s8
> quiet | Step back. | house_a1s8
> inquiry | Ask who approves it. | house_a1s8

=== house_a1s8 | Approved
“The Inspector,” says the Matron. “Inspector Fang. He signs the requisition each quarter.” She has set the lid back on the kettle. Her voice is light. “It is all quite regular. I have the paper.”
She takes a folded page from her apron pocket and offers it. It is a Chancery form, stamped and signed, authorising the supply of eighty catties of Reagent D per month to the House of Gentle Hands for the sedation of agitated inmates. Beneath the signature is a note in a neat clerk’s hand: The children are to be kept until the bearer is found.
Hao Lan reads it twice. Her face has gone grey.
“Kept until the bearer is found,” she says. “What does that mean?”
Matron Cho’s smile has come back, like a lamp being lit.
“It means they are very precious,” she says. “They are the Concord’s own.”
Behind her, in the doorway, there is a sound: a small soft sound of bare feet on stone.
> truth | Turn. | house_close | +house_saw_dust
> mercy | Gather Moth into your arms. | house_close | +house_saw_dust
> quiet | Hold still. | house_close | +house_saw_dust
> inquiry | Ask what the bearer has to do with them. | house_close | +house_saw_dust

// ---------------------------------------------------------------- a2: the marines
=== house_a2s1 | Hok
Sergeant Hok is sitting on a bollard at the end of the quay, eating an onion. He has taken off his belt and his armour and wears a plain brown jerkin that does not suit him. His marines are about him on the stones, a ragged half-dozen, polishing their boots. When he sees you he gets up, stiffly, and sets the onion on the bollard.
“Madam,” he says.
“Sergeant.”
“I have not reported.” He is looking at his boots. “I have been meaning to. I have not been able to bring myself to compose the sentence.”
“I want your men.”
Hok’s eyes come up. They are bloodshot and steady.
“For what?”
“A house on the hill. A Chancery foundation. There is a boy inside, and forty children, and a matron who gives them tea.” You hold his gaze. “I do not think they will mind being disobeyed.”
Hok looks at his men. Private Wu has stopped polishing.
> force | Wait for his answer. | house_a2s2
> truth | Tell him it is dangerous. | house_a2s2
> quiet | Watch Wu. | house_a2s2
> mercy | Tell him he does not have to. | house_a2s2

=== house_a2s2 | Six Marines
“Corporal,” says Hok. “Arm the men.”
The lean tired corporal stands up from his bollard. He has a way of getting to his feet that makes it clear he has thought it over. “Sir,” he says. “For what purpose?”
“We are going on an exercise.”
“Yes, sir.”
“It is an exercise in not obeying an order.” Hok picks up his belt and buckles it. “We shall conduct it with the utmost discipline.”
Private Wu is on his feet. His face is pale, and his hands are steady for once. “I volunteer,” he says, in a high voice.
“You were not asked.”
“I volunteer, Sergeant.”
Hok looks at him for a long moment. Then something in his heavy face gives way. “Very well,” he says. “But you stay at the back.”
They march up the hill in two files, with their rifles slung and their helmets under their arms.
> force | March with them. | house_a2s3
> truth | Say nothing. | house_a2s3
> quiet | Look at their faces. | house_a2s3
> mercy | Walk beside Wu. | house_a2s3

=== house_a2s3 | The Gate
The gate is shut. Hok knocks with the butt of his rifle, three times, a short hard rap. The wicket opens. The plump pink face of Matron Cho looks out, framed in a white cap.
“Good afternoon,” she says. “How may we be of service?”
“Open up,” says Hok. “In the name of the Salt Coast Garrison.”
“Garrison?” The smile slides. “I was not informed of any inspection.”
“It is not an inspection.” Hok’s voice is flat. “We are here to remove a minor. A boy of seventeen, named Tian. He is wanted for questioning.”
“He is a guest.”
“He is wanted.”
The Matron’s eyes pass over the marines. They stop on Wu, at the back, who is holding his rifle at the port and trying not to look at her. She makes a small, delicate moue.
“I shall have to consult the Chancery,” she says. “Please wait.”
She shuts the wicket.
> force | Wait. | house_a2s4
> truth | Tell Hok she is stalling. | house_a2s4
> quiet | Look up at the windows. | house_a2s4
> mercy | Ask Wu if he is all right. | house_a2s4

=== house_a2s4 | Stalling
She is stalling. You know it when you see the bell-tower. High on the white wall, behind the iron bell, a small hand reaches out, and a rope is jerked, and a clear note rings across the hill.
Behind the gate, a murmur. A rattle of boots. Then the gate swings, with a shriek of iron, and a file of men in grey leather pours out of the House, rifles at the ready. They are not marines. They wear a different badge: a closed eye, ringed in white.
“Chancery guards,” says Hok, through his teeth. “Eight of them. I had not been told.”
The leader, a tall man with a silver chain, levels his rifle.
“Sergeant,” he says. “You will lay down your arms.”
Hok’s knuckles whiten on the barrel of his gun. Nobody breathes.
Then Private Wu says, in a clear boy’s voice, “Sir, I do not think I want to.”
> force | Step forward. | house_a2s5
> truth | Call for calm. | house_a2s5
> quiet | Step back. | house_a2s5
> deceit | Shout that there is a fire. | house_a2s5

=== house_a2s5 | A Standoff
The guards are professionals. The marines are not. For a long moment the two lines stand with their rifles levelled, ten paces apart, in the road before the gate. Nobody fires. A lark sings in the gorse. The wind blows the Matron’s white cap off, and it rolls along the gravel and stops at Hok’s boot.
“Back down,” says the tall man. “I am not asking.”
“I did not ask either,” says Hok.
“This is treason.”
“It is an exercise.”
You step between them. You do not know why. You have no weapon, and no plan, and nothing in your hands but a scar. You say the first thing that comes to your head, in your plainest voice.
“There are forty children in that house,” you say. “They are drinking something that takes their names. I would like to take them home. Which of you is going to stop me?”
> force | Wait. | house_a2s6
> truth | Repeat it. | house_a2s6
> quiet | Hold out your hand. | house_a2s6
> mercy | Say they are somebody’s. | house_a2s6

=== house_a2s6 | Who Fires First
There is a pause. The silver chain on the tall man’s breast glints in the sun. He is breathing hard. His finger is on the trigger. His eyes are fixed on yours with an odd intensity, as of a man looking at something he has been told about.
Then, from behind him, a voice. It is the voice of one of the Chancery guards, a thick-set man in the second rank, and it is hoarse.
“I have a niece,” he says. “She’s nine.”
“Corporal Lei,” snaps the tall man. “Silence.”
“She went missing in the spring.” He has lowered his rifle. “My brother reported it. He took the report back. He said he’d made a mistake.” His voice cracks. “I thought, that’s odd. I thought, he’s not a man to make mistakes.”
The tall man whirls on him. “Lei—”
“Is she in there?” says Lei. “Is she in that house?”
Nobody answers.
> force | Wait. | house_a2s7
> truth | Say you do not know. | house_a2s7
> quiet | Hold the silence. | house_a2s7
> mercy | Say you will find out. | house_a2s7

=== house_a2s7 | The Guard Turns
He walks past the tall man. He walks through the file of marines, who part for him without a word. He walks to the gate, and pushes it open with the flat of his hand, and goes in. His boots ring on the gravel. A woman screams. A bell begins to jangle.
The tall man shouts. The Chancery guards waver. One of them turns. Another lowers his gun. Hok, with a long breath, steps forward and takes the tall man’s weapon out of his hands, gently, as one takes a toy from a child.
“It’s over,” he says. “You’ve lost the room.”
The tall man opens his mouth and shuts it.
You run past them all, through the gate and up the gravel, and the whole hill is bright and sunlit and shouting. You burst into the House.
It is silent. It is a white corridor, empty. At the far end, kneeling on the floor with a child in his arms, is Corporal Lei.
He is sobbing.
> force | Go to him. | house_a2s8
> truth | Call for Lu Yan. | house_a2s8
> quiet | Take the other child. | house_a2s8
> mercy | Kneel beside him. | house_a2s8

=== house_a2s8 | Forty Beds
They carry them down the hill. It takes the whole afternoon. The marines carry the smallest. The Chancery guards, sullen and shamefaced, carry the rest. Lu Yan comes up from the Ward with Old Maro and a handcart, and a cloud of nurses with blankets. The children come out blinking into the sun, thin and grey and docile, holding hands in a long chain.
Tian walks at the head, with Moth on his shoulders. She has her arms round his neck and her chin on his hair. She is looking at the sky as if it were a thing she had been told about and not believed.
“I wanted to burn it,” says Tian, to nobody in particular. “I’m glad I didn’t.”
“So am I,” says Corporal Lei, behind him.
At the foot of the hill, where the road meets the quay, the whole town is waiting. They have come out of their houses. They stand in a silent crowd, hats in their hands. When the first child comes into view, a woman at the front begins to weep.
> force | Walk with them. | house_close | +house_marines_took
> truth | Look for Mrs Hang. | house_close | +house_marines_took
> quiet | Watch Tian. | house_close | +house_marines_took
> mercy | Carry a child. | house_close | +house_marines_took

// ---------------------------------------------------------------- a3: benefactors
=== house_a3s1 | The Benefactress
“I am a patroness of orphans,” you say, in the voice Hao Lan has coached you in. “I have come at the invitation of the Second Chancery to inspect the foundation.” You hold out the scroll. It is blank. It bears a seal. It is very impressive.
Matron Cho reads the seal for some time. Her smile shifts a degree. “I was not informed,” she says. “But you are most welcome. It is so rare that we have a patroness. May I offer you a cup of tea?”
“Thank you. No.”
“Of course.” She leads you up a gravel walk between beds of white flowers. “I am afraid the House is very plain. We are a small foundation. We have a limited budget. But the children are very happy.”
You look at the bench by the pond, where six children are sitting in a row. They do not move.
“They look it,” you say.
> deceit | Admire the garden. | house_a3s2
> truth | Say you would like to see the dormitory. | house_a3s2
> quiet | Look at the windows. | house_a3s2
> inquiry | Ask how long the children stay. | house_a3s2

=== house_a3s2 | The Tour
She shows you everything. The schoolroom, where a row of children sit at desks with slates, copying letters in silence. The chapel, with its single white statue. The infirmary, with its forty empty beds. The sewing-room, where girls of nine sit stitching shrouds. The dormitory, a long white hall, with forty cots in two rows and a grey blanket on each.
It is the tidiest place you have ever seen.
“We run on a strict schedule,” says the Matron. “Rise at five. Prayers at six. Lessons from seven to eleven. Tea at the bell. Rest in the afternoon. Supper at six. Bed at seven.” She counts on her fingers. “We find that routine soothes the afflicted.”
“And discipline?”
“We do not need it,” says the Matron serenely. “They are so very calm.”
Hao Lan, in her clerk’s coat, writes something in a notebook. The Matron does not see her face.
> deceit | Praise the order. | house_a3s3
> truth | Ask what they were before. | house_a3s3
> quiet | Look at the cots. | house_a3s3
> mercy | Ask to see the youngest. | house_a3s3

=== house_a3s3 | The Register
In the Matron’s office there is a ledger. It is a big black book on a lectern, chained to the wall. She opens it with a small key, and turns the pages with the tip of a finger. “Our admissions,” she says. “Every child is entered. Name, age, family, date. And the condition of the guardians.”
You read the page. The names run down the left in a neat hand. Beside each, in the column for guardians, is a single word. Dusted. Dusted. Dusted. Beside one it says, Struck. Beside another, Dead. Beside a third, in a different ink, Unknown.
Beside the bottom entry, three lines from the foot of the page, is a name you know.
Moth. Age six. Guardian: Hang Zhi. Condition: Dusted. Date: six weeks ago. Disposition: Retain.
“Retain?” you say.
“It means to keep,” says the Matron. “Until the Chancery issues instructions.”
> deceit | Turn the page. | house_a3s4
> truth | Ask what instructions. | house_a3s4
> quiet | Look at Hao Lan. | house_a3s4
> mercy | Ask whether Moth can be released. | house_a3s4

=== house_a3s4 | Instructions
“There have been none,” says Matron Cho. “They are rarely issued. The children stay until they are eighteen. Then they are placed.” She smiles. “We have an excellent record of placements. The Chancery takes them into service. They make admirable clerks.”
Hao Lan makes a sound.
“And after that?” you say.
“After that, we do not know.” The Matron closes the ledger and turns the key. “I am not supposed to say it. It is confidential. But the Inspector takes a personal interest in the House. He says that it is an experiment.”
“In what?”
“In the production of bearers,” says Matron Cho brightly. “He says that if a child is kept quiet long enough, and fed on the right diet, and taught nothing at all, she will grow up with a mind like a clean slate. A perfect vessel. He says there is a seed that wants a clean slate.”
She beams.
“I thought you would be interested,” she says.
> deceit | Control your face. | house_a3s5
> truth | Say it is monstrous. | house_a3s5
> quiet | Look at your hands. | house_a3s5
> mercy | Ask where they keep the oldest. | house_a3s5

=== house_a3s5 | Eighteen
The oldest are in a separate wing, behind a door with a lock. There are seven of them, aged sixteen and seventeen, in a bare white room with a single window. They sit on the floor in a ring, with their backs to the wall. They are the quietest of all. Not one lifts her head as the door opens.
Nurse Bei sits among them. She is a lean freckled woman of thirty, in a plain grey tunic, with red-rimmed eyes and a basin of water in her lap. She is washing the face of a girl who does not respond. She looks up.
For a heartbeat there is an expression on her face you cannot read. It is fear. It is also something else.
“Madam,” she says. “The Matron said we were to have a visitor.”
Her eyes flick to the Matron, and back to you. A message in them, plain as ink.
“Do come in,” she says. “They are no trouble.”
> deceit | Go in. | house_a3s6
> truth | Ask her name. | house_a3s6
> quiet | Watch her hands. | house_a3s6
> mercy | Kneel by the girl. | house_a3s6

=== house_a3s6 | Nurse Bei
She waits until the Matron has gone to see about the tea. Then she puts down the basin, and rises, and shuts the door very softly, and puts her back against it. Her lips are trembling.
“You are not a patroness,” she says. “You are not from the Chancery. I have been in this House for six years. I know them all. I know their faces.” She draws a long breath. “I know yours. Someone told me last week. A woman came to the market, asking about missing children. She was thin. She wore spectacles.”
“Lu Yan,” you say.
“She gave me a note. She said, if anyone comes who looks like they could stop it, give it to them.” Bei fumbles in her tunic and produces a crumpled paper. “I have been waiting. I thought I would never.”
The note is in Lu Yan’s hand. It has three lines.
They stop the tea at the new moon. They will move the children at the full. Please hurry.
> deceit | Read it again. | house_a3s7
> truth | Ask what she can do. | house_a3s7
> quiet | Fold it. | house_a3s7
> mercy | Take her hands. | house_a3s7

=== house_a3s7 | The Switch
“I can change the tea,” says Nurse Bei. She says it in a rush. “I make it. Every morning. The Matron measures the powder. I pour it in. If I put in nothing, no one would notice for a week. The children would feel the dust going out. They would begin to wake.” She draws a shaky breath. “I have not dared.”
“Why not?”
“Because the waking hurts.” Her eyes fill. “I have seen it. A girl who woke, last year, in the night. She screamed. She screamed for hours. The Matron gave her a double dose and she never spoke again.” She swallows. “I could not do that to forty.”
“You wouldn’t be,” says Hao Lan, from the door. “Not if they woke slowly. Not if there was a physician.”
Bei’s eyes go to her.
“Lu Yan,” says Hao Lan. “She is in the town. She has clearwater, and a garden of blue flowers. She can be here in an hour.” She smiles, faint and fierce. “We would only need to get past the Matron.”
> deceit | Say you will. | house_a3s8
> truth | Ask Bei to trust you. | house_a3s8
> quiet | Watch the door. | house_a3s8
> mercy | Hold her. | house_a3s8

=== house_a3s8 | Camomile
You have a plan by supper. You do not think it will work. You are fairly certain it will not. But Hao Lan insists, and Bei is shaking with eagerness, and by the time the evening bell rings you have a kettle full of honest camomile and a cup on every tray.
The Matron pours the first herself, with the grave air of a priest administering a sacrament. She sets the cup in the hand of the nearest child. The child lifts it. She drinks.
Nobody breathes.
The child lowers the cup. She sets it on the tray. She looks at the Matron.
“Thank you,” she says.
It is the first time in six weeks she has spoken. The Matron freezes. The cup in her hand rattles on its saucer.
“Child,” she says, very softly. “What did you say?”
“Thank you,” says the girl, in a clear, high voice. “It tastes nice.” She frowns. “It tastes of flowers.”
> deceit | Put down your tray. | house_close | +house_switched_tea
> truth | Take a step forward. | house_close | +house_switched_tea
> quiet | Look at Nurse Bei. | house_close | +house_switched_tea
> mercy | Smile at the girl. | house_close | +house_switched_tea

// ---------------------------------------------------------------- a4: the drain
=== house_a4s1 | The Old Drains
“There’s a culvert,” says Lu Yan. She unrolls a map on the surgery table. It is a sheet of foolscap covered in ink, with arrows, loops and blots. “The hill drains through a brick channel to the harbour. It dates from the Founding. It’s three feet high and half a mile long. I know because I crawled it when I was twelve, for a dare.” She looks at you over her spectacles. “It comes out under the Wall.”
“And the House?”
“It has a cellar. The cellar has a drain. The drain feeds the channel.” She taps the map with a stub of pencil. “If you can get a grating off, you can get a child through. If you can get forty children through, you can get a procession.”
Gu has gone green. “A half-mile of sewer?”
“It’s a very clean sewer,” says Lu Yan defensively. “It mostly carries rainwater.”
She pauses.
“Mostly.”
> quiet | Study the map. | house_a4s2
> truth | Say you will try. | house_a4s2
> mercy | Ask how deep it is. | house_a4s2
> inquiry | Ask who else knows. | house_a4s2

=== house_a4s2 | The Culvert
You go in at midnight, by the harbour mouth, under the Wall. The culvert is a black arch half-hidden by weed. You crawl in on hands and knees, with a shuttered lantern. The brick is slimy. Water laps at your wrists. The air smells of mud and old rain.
Gu is behind you. Behind him, Ren Qiao, who has to go on his belly. Behind him, Hao Lan, in an old tunic of Lu Yan’s, muttering. The channel runs steeply uphill. After a hundred yards it begins to narrow. After two hundred it turns, and runs through a flooded section where you have to wade to the shoulders, holding the lantern up.
Somewhere ahead a pipe is dripping.
“How far?” whispers Gu.
“Half a mile.”
“I think I can’t.”
“You can.” You squeeze his shoulder. “I will be in front.”
> quiet | Push on. | house_a4s3
> truth | Count your breaths. | house_a4s3
> mercy | Take his hand. | house_a4s3 | bond:gu+1
> inquiry | Listen to the pipe. | house_a4s3

=== house_a4s3 | The Grating
The grating is a square of iron bars, two feet across, bedded in the ceiling of the channel with lime and rust. Above it you can see a faint glimmer. Candlelight. A cellar, then. You set the lantern down. Ren Qiao comes up beside you and puts his shoulder to the bars.
They do not move.
“Rusted,” he mutters. “Welded. Both.”
“It needs a lever,” says Hao Lan.
“I have a knife.”
“It needs a crowbar.”
“I have a knife.” Ren fits the blade into the crack and bears down. The iron groans. A shower of rust falls on his face. He swears in a low voice. The blade bends.
Above, something creaks. A footstep. A pause. A second.
Someone is standing in the cellar, directly above the grating, looking down.
> quiet | Hold your breath. | house_a4s4
> truth | Whisper a greeting. | house_a4s4
> mercy | Douse the lantern. | house_a4s4
> inquiry | Look up. | house_a4s4

=== house_a4s4 | A Face in the Dark
It is a boy’s face. It is lean and sharp, framed in the square of the grating, with a pair of burning eyes. It is smeared with soot, and a knife is in his teeth. He takes the knife from his mouth.
“Took your time,” says Tian.
He crouches. He gets his fingers through the bars and heaves, and with a grating shriek, the ironwork comes away from the ceiling. A cloud of lime and rust drifts down. He hauls it clear.
“I’ve been in here since last night,” he says. “I found the cellar. I found the drain. I couldn’t move it myself.” He grins, a fierce white grin. “I didn’t want to start the fire until I knew they’d be out.”
He holds down a hand.
“Come on. I’ve got forty beds to empty and a cook who thinks I’m the plumber.”
> quiet | Take his hand. | house_a4s5
> truth | Say you are glad. | house_a4s5
> mercy | Ask if he is hurt. | house_a4s5
> inquiry | Ask about the cook. | house_a4s5

=== house_a4s5 | The Dormitory by Night
The dormitory is a long white hall lit by a single lamp, and it smells of camomile and soap. Forty cots in two rows. Forty small humps under grey blankets. Forty children asleep, breathing slow and even. A night-nurse dozes in a chair by the door, with her chin on her chest. Tian puts a finger to his lips. He takes the lamp from its hook and carries it along the aisle, shading it with his hand.
You walk down the line of cots. The children are lovely in their sleep. They have slack mouths and flushed cheeks. One of them is sucking her thumb. One has a toy rabbit pulled up under her chin. One is smiling.
They are all so quiet.
“Which first?” whispers Hao Lan.
“The little ones,” says Tian. “The ones who can’t walk. We’ll carry those.”
“And the others?”
“We’ll wake them.”
“What if they scream?”
“Then we’ll sing,” says Tian.
> quiet | Pick up the nearest. | house_a4s6
> truth | Whisper a name. | house_a4s6
> mercy | Tuck in a blanket. | house_a4s6
> inquiry | Ask which is Moth. | house_a4s6

=== house_a4s6 | Moth
She is at the end of the second row, in the corner by the window, and she is not asleep. She is sitting bolt upright in her cot, with the blanket round her shoulders, staring at the moon. Her eyes are very wide. She has not made a sound.
Tian goes to her. He kneels. He holds out his arms.
“Hello, Moth,” he says. His voice is steadier than you would have thought. “I’m Tian. I’m here to take you home.”
The girl looks at him. She looks at the lamp, the bobbing shadows, the grey figures moving down the aisle. She looks at you.
She lifts one small hand and points.
“Nine,” she says.
It is the first word she has spoken in six weeks. It is a clear little voice, and it carries the length of the hall.
Tian’s face is a thing you will not forget.
> quiet | Go to her. | house_a4s7
> truth | Say yes. | house_a4s7
> mercy | Take her hand. | house_a4s7
> inquiry | Ask what she means. | house_a4s7

=== house_a4s7 | The Procession
They go out in a line. It is the strangest procession you have ever seen. The children rise from their cots one at a time, drowsy and docile, and take each other’s hands. The older ones carry the younger ones on their backs. They go down the cellar steps, along the dripping passage, and into the gaping mouth of the culvert, one by one, and nobody cries. They are too sleepy to be afraid.
The night-nurse never stirs.
At the grating, Ren Qiao lifts them down like parcels. Hao Lan counts them out loud in a whisper, one by one, as they pass. “Thirty-one. Thirty-two.” Gu goes first, with a small girl on his back. You go last, with Moth.
Tian is the very last. He stands in the dormitory and looks at the empty cots. Then he takes a box of matches from his sleeve. He looks at them. He tosses them into the dark.
“Not tonight,” he says.
He follows you into the drain.
> quiet | Crawl. | house_a4s8
> truth | Wait for him. | house_a4s8
> mercy | Hold Moth tight. | house_a4s8
> inquiry | Ask why not. | house_a4s8

=== house_a4s8 | Dawn Under the Wall
They come out under the Wall at first light. One by one the children emerge from the weed-hung arch into the grey dawn, blinking, dripping, holding hands. A line of boats waits in the shallows. Ah Zhi stands in the first with her sweep, her hat pulled low. Bao Er is in the second, with a basket of buns. Lu Yan wades in among the children with a blanket and a bottle, murmuring names.
Nobody speaks. There is no need.
Tian emerges last, with Moth on his shoulders. He wades ashore. He sets her down on the shingle. She looks up at the sky, at the Wall, at the pale fleecy clouds, and she says, in a voice of immense surprise:
“It’s so big.”
Tian laughs. He sits down on the shingle and puts his face in his hands. His whole body is shaking. Bao Er drops her basket and flings herself on him. The two of them roll over together on the stones, crying and laughing.
> quiet | Look at the sea. | house_close | +house_took_children
> truth | Join them. | house_close | +house_took_children
> mercy | Wrap Moth in a blanket. | house_close | +house_took_children
> inquiry | Count the boats. | house_close | +house_took_children

// ---------------------------------------------------------------- hidden: the list
=== house_h1 | Forty Names
You stand at the iron gate with Lu Yan’s list in your hand. It is a sheet of foolscap, folded in four, closely written in a small cramped hand. You unfold it. You read the first name aloud.
It is a child’s name. It echoes off the white wall.
Nothing happens.
You read the second. The third. A wind stirs in the garden. You read the fourth, and the fifth, and by the tenth you are reading steadily, one name after another, in a clear plain voice, as Carver Sun would cut them. Behind the wall, in the great white building, something is moving.
Matron Cho’s face appears at the wicket. She is gaping.
“What are you doing?” she hisses. “Stop that. You’ll wake them.”
You read the eleventh.
> inquiry | Keep reading. | house_h2
> truth | Read louder. | house_h2
> mercy | Read it gently. | house_h2
> quiet | Say them like a lullaby. | house_h2

=== house_h2 | Names at the Windows
They come to the windows. One by one, in the long white face of the House, the shutters open and a child leans out. They have the slack faces of the sleeping, and they blink at the sunlight as if it were a thing they had forgotten. They look down at you. They are listening.
You read on. A girl at the third window puts her hand to her mouth. A boy at the fifth begins to rock. When you read the twenty-sixth name, a child in the corner window cries out, a high thin cry like a bird’s, and shouts: “That’s me!”
The Matron is shrieking. She has gone for the bell. Behind the gate, you hear the stamp of boots.
You read the twenty-seventh.
“That’s me!” shouts another child. “That’s me! That’s me!”
The whole house is waking.
> inquiry | Keep reading. | house_h3
> truth | Read the last name louder. | house_h3
> mercy | Say them as lullabies. | house_h3
> quiet | Look at the gate. | house_h3

=== house_h3 | The Gate Opens
It is Nurse Bei who unlocks it. She runs down the gravel path with a ring of keys in her fist and her cap fallen off. She throws herself on the gate, fumbling with the lock, sobbing. The key turns. The great iron leaf swings wide.
They pour out. Forty children in grey smocks, stumbling and shouting, tumbling over each other down the path. Each one is shouting a name. Each one is shouting his or her own. They pour out of the gate like water from a broken cup, and they run, not in any direction, but in all, down the hill and across the heath, with their arms out, laughing.
Matron Cho collapses on the step.
“They’ll be punished,” she says. “They’ll be so punished.”
Nurse Bei, in the road, shakes out her skirts. “No,” she says calmly. “They won’t.”
She turns to you. She is weeping and smiling. Behind her, on the grass, a little girl with a cowlick is spinning in circles.
> inquiry | Catch her. | house_close | +house_read_list
> truth | Laugh. | house_close | +house_read_list
> mercy | Gather them. | house_close | +house_read_list
> quiet | Stand still. | house_close | +house_read_list

// ---------------------------------------------------------------- close
=== house_close | Small Things
The hill is quiet by evening. The House of Gentle Hands stands empty, its windows open to the air. Down in the town the children are being fed and washed and sorted by a flock of volunteers. The quay is thick with cooking smoke. Somewhere, a woman is singing, and a man is laughing, and a child is calling out a name, over and over, for the sheer joy of having one.
+[how] house_saw_dust | You saw the kettle in the House’s kitchen, and read the form that said the children were to be kept.
+[how] house_marines_took | Hok’s marines and a Chancery guard with a lost niece took the House by the front gate in the open light.
+[how] house_switched_tea | Nurse Bei poured honest camomile, and a child said thank you.
+[how] house_took_children | Forty children went out by the old drain at night, and not one cried.
+[how] house_read_list | You read forty names at the gate, and the children came to the windows to claim them.
Tian is sitting on a wall at the edge of the quay, swinging his legs. He has Moth on his knee. She is eating a bun with the cautious dedication of someone who has been told it is food. He does not look at you.
“I owe you an apology,” he says.
“You don’t.”
“I do. Shut up.” He scowls. “I said you were the reason. I said it to your face. It wasn’t true. You were a baby in a basket.” He grits his teeth. “I was an idiot.”
> truth | Say you understand. | house_close2
> mercy | Say you would have been angry too. | house_close2
> quiet | Sit beside him. | house_close2
> inquiry | Ask what changed. | house_close2

=== house_close2 | Keep What Is Small
“I met somebody smaller than me,” says Tian. He is picking at the corner of the bun. “I met forty. I’d been angry for fifteen years at one person, and it never helped. It never helped anybody. And then I looked at Moth, and I thought: I could keep her. That’s all. I could keep her. I could keep her safe.”
His voice breaks. He clears his throat.
“Mother says nothing offered to a child is a gift. She says you can’t give a child anything without making a debt. But Moth isn’t a child, she’s a person, and I’m not giving her anything, I’m just—” He stops. “I’m not good with words.”
“You’re doing fine,” says Moth, with her mouth full.
Tian bursts out laughing. He wipes his nose on his sleeve. Then, abruptly, he pulls a brown card from his shirt and thrusts it at you, scowling.
“Here. Seven. Keep what is small. Take it. I don’t need it any more. I’ve got the original.”
> truth | Take it. | hub_b3_coast | +card_7 +b3q_house bond:tian+3
> mercy | Hug him. | hub_b3_coast | +card_7 +b3q_house bond:tian+3
> quiet | Pocket it. | hub_b3_coast | +card_7 +b3q_house bond:tian+3
> inquiry | Ask what the original is. | hub_b3_coast | +card_7 +b3q_house bond:tian+3
`,
  scenarios: String.raw`
$ SU_HOUSE_CHILDREN | trust+4 respect+2 fear+2 | elder | The Elder sees the dormitory of forty children who have been given a tea that takes their names.
hostile: I have stood in rooms like that before. I have inspected them. I wrote the commendation. I wrote it in a bright clear hand. I cannot recall the date. I think I must have chosen not to.
wary: A row of cots, and every cot made. A row of shoes, and every shoe in line. It was the tidiest room I have ever seen. I do not think I shall ever again admire tidiness.
neutral: There is a particular silence in a room where no child asks a question. I thought, until today, that I had made my peace with the silence. I had not. I had only been standing too close.
warm: A little girl asked me whether I was the matron. I said no. She said, “Oh. Are you going to be?” I said that I hoped I would never be anything of the kind.
devoted: I will carry them. I am not strong, and I am old, and I have a knee. But I will carry a child down a hill. I have done worse for a worse cause, and I should like to do it once for a good one.
`,
  remarks: String.raw`
% house_tian_later | since:b3q_house>=3 | hao | Tian has started teaching the little ones to whittle. He says it is to keep their hands busy. The truth is that he is happier than I have ever seen him, and is furious about it.
% house_moth_later | since:b3q_house>=5 | gu | Moth asked me today whether I would be her brother. I said I would have to ask. She said she had already asked the sea, and the sea said yes.
`,
};
