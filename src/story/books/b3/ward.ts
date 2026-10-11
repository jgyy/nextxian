import type { Arc } from "../types";

/**
 * Book Three, arc seven: the Dust Ward. Lu Yan (cot II) runs sixty beds in a dye-works on Cooper Lane for people the calm dust has
 * emptied, and she is running out of everything but patients. Four approaches: work a shift as an orderly (a1, truth), raid the
 * Concord depot for clearwater (a2, force), forge a quarantine to keep the inspectors out (a3, deceit), and sit with a man who is
 * waking (a4, mercy). A hidden route plants Headman Pu's blue seed on the roof and brews the waking draught.
 * Cast: Lu Yan, Old Maro, Captain Dei, the girl Meilin, Mother Tiao, Sergeant Hok's men at the depot.
 */
export const ward: Arc = {
  id: "ward",
  name: "The Dust Ward",
  scenes: String.raw`
=== ward_entry | Cooper Lane
Cooper Lane runs behind the fish market, narrow and always damp, between the blank backs of warehouses. At the end of it stands an old dye-works. Its great vats are cold and cracked and its chimneys cold, and every window along the ground floor is open to the air. A line of women queues at the door with baskets of bread. A man sits on the step, in his shirtsleeves, looking at his hands as if they belonged to another man.
Inside, the long hall is full of beds. They are cots, mostly, hung with sheets for privacy, and between them move a few people in aprons with trays and basins. The air smells of vinegar and boiled linen and, very faintly, of that sweet grey ash. Someone is crying. Someone else is singing, over and over, the first line of a lullaby.
A thin young woman in spectacles stands at the end of the hall with a clipboard. She is writing as she walks. Without looking up she says, “If you are a visitor, wash your hands. If you are a patient, there is a queue. If you are from the Concord, I am out.”
> truth | Wash your hands, and offer to help. | ward_a1s1
> force | Ask what she needs that she cannot get, and who is keeping it from her. | ward_a2s1 | needs:3
> deceit | Tell her the Concord’s inspectors are on Cooper Lane, and ask if she wants them kept out. | ward_a3s1
> mercy | Sit down beside the man on the step. | ward_a4s1
> inquiry | Ask her whether a garden of blue flowers would be of any use to her. | ward_h1 |  | fever_garden | You have not seen Green Mill wake.
> inquiry | Tell her that Headman Pu has sent word, and a packet of seed, by a smuggler’s boy. | ward_h1 |  | asm_w_pu | Headman Pu has not stood up in front of the Assembly for you.

// ---------------------------------------------------------------- a1: a shift
=== ward_a1s1 | Wash Your Hands
There is a basin of grey water at the door and a cake of lye soap. You scrub to the elbow, as you are told. The young woman watches without comment, then hands you an apron, a pair of cloth gloves, and a bucket.
“Lu Yan,” she says. “I run this place. I am the only physician in Tidewall who will touch them. The others say it is not an illness, so it is not their field. The priests say it is a blessing, so it is not theirs.” Her mouth twists. “Between them they have left me sixty beds and a roof that leaks.”
She is perhaps twenty, thin as a rake, with spectacles held on by a string and ink to the second knuckle of both hands. Her eyes are the same pale grey as Madam Ash’s. They flick over you once, taking in the apron, the gloves, the stance.
“You are Nine,” she says. “I assumed. Do not tell the patients. They will want to look at you.”
> truth | Ask what to do first. | ward_a1s2 | npc:SU_WARD_SHIFT
> mercy | Ask how many are in the hall. | ward_a1s2
> quiet | Take the bucket and begin. | ward_a1s2
> inquiry | Ask how she knew you were coming. | ward_a1s2

=== ward_a1s2 | Triage
“Sixty-three,” says Lu Yan. “Sixty-four if you count Maro, who is not a patient but should be.” She starts to walk. You walk beside her, bucket slopping, down the line of cots. “There are three kinds. The Emptied are the ones with no names. They eat, they sleep, they do not know why. The Wakers have begun to remember and it hurts. The Third are in between. They think they are well.”
She pulls a sheet back. A grey-bearded man in a nightshirt is lying propped on three pillows, staring at the ceiling.
“Emptied,” she says. “Captain Dei. He sailed the Sea Mallow for thirty years. Do not ask him her name. He cries.”
She tucks the sheet in with a nurse’s unsentimental neatness.
“Your job is the third kind,” she says. “They are the dangerous ones. They think they are well, and ask to leave.”
> truth | Ask why that is dangerous. | ward_a1s3
> mercy | Say you will look after them. | ward_a1s3
> quiet | Study Captain Dei. | ward_a1s3
> inquiry | Ask what the dust does to them in the end. | ward_a1s3

=== ward_a1s3 | The Third Kind
“They go home,” says Lu Yan. “They forget they are ill. They forget what they have forgotten. They go home and sit at the table and say good morning to a wife who is a stranger. They do not know it. They never ask. They live in a house where everything is a little off, and they think that is how houses are.”
She stops at a cot by the window where a woman of forty is darning a stocking with great concentration.
“Mrs Hang. She has been darning that for six days. It has no hole in it. She started it on the morning she woke here, and she does not know why.” Lu Yan’s voice is quite flat. “I do not stop her. It is the only thing she does that she seems to know how to do.”
Mrs Hang looks up. She has a round pleasant face. She smiles at you with perfect, frightening serenity.
“Good morning,” she says. “Have we met?”
> truth | Say you have not, and tell her your name. | ward_a1s4
> mercy | Say yes, and sit down. | ward_a1s4
> quiet | Smile back. | ward_a1s4
> inquiry | Ask what she is mending. | ward_a1s4

=== ward_a1s4 | A Stocking With No Hole
“A stocking,” says Mrs Hang, with the air of a woman explaining to a child. “It is for my husband. I think. I believe he has a pair like it. He is a tall man.” Her needle goes in and out of the sound grey wool. “I do not remember his name. Do you know it?”
You do not.
“No matter.” She smiles. “It will come to me. It always comes. I am sure it was a short one.”
You sit beside her bed and take up a spare needle. You do not know what else to do. She passes you a stocking, and you darn the heel for a quarter of an hour, side by side, while the line of cots murmurs and breathes and the sunlight moves across the floor. She tells you she grew up on a salt-pan. She tells you her mother sang. She tells you, quite casually, that she thinks she had a child.
“A little girl,” she says. “With a cowlick. I put her somewhere, I think. I put her in a safe place.”
> truth | Ask where. | ward_a1s5
> mercy | Hold her hand. | ward_a1s5
> quiet | Keep darning. | ward_a1s5
> inquiry | Ask if she remembers the girl’s name. | ward_a1s5

=== ward_a1s5 | The Safe Place
“I do not know,” says Mrs Hang, with a puzzled little frown. “A drawer? A cupboard? It was warm. I think there was a lantern.” Her needle stops. “I think I told her to stay.”
Lu Yan, behind you, has gone quite still.
“Mrs Hang,” she says gently. “When did you last see your daughter?”
“This morning.”
“It was six days ago.”
“Was it?” Mrs Hang looks at her. “It feels like this morning.”
A silence falls. Lu Yan looks at you over Mrs Hang’s head, and you read the question in her eyes: how many more? How many children have been put somewhere safe, by parents who cannot remember the place?
She takes off her spectacles and rubs her face.
“I need a list,” she says. “I need every family on this coast with a child gone missing in six months.”
> truth | Say you know who has one. | ward_a1s6
> mercy | Say you will help her look. | ward_a1s6
> quiet | Look at Mrs Hang. | ward_a1s6
> inquiry | Ask who keeps the Board’s register of births. | ward_a1s6

=== ward_a1s6 | The Register
The register of births and deaths for Tidewall is kept in the harbour office, in a cabinet of black wood, by a clerk who sneezes. He is called Pim. He is fifty and pallid and enormously pleased to be consulted. He shows you the ledgers one by one, in the dim back room, with a chorus of apologetic coughs.
“Births, deaths, boats,” he says. “In that order. People often ask for them the other way round.”
Lu Yan is writing fast. Her pencil moves down the columns as Pim reads. A girl, six, daughter of Hang Zhi, a salt-raker. A boy, four, son of a net-mender. Two sisters, nine and eleven. By the second hour she has forty names.
“All reported missing in the last six months,” she says. Her face is grim. “All reported by parents who then withdrew the report. All of them signed off as not found.”
“Withdrawn?” says Hao Lan.
“They forgot,” says Lu Yan. “It is the same thing.”
> truth | Ask where children go when the dust takes their parents. | ward_a1s7
> mercy | Ask who looks after them. | ward_a1s7
> quiet | Examine the signatures. | ward_a1s7
> inquiry | Ask if any of the children were found. | ward_a1s7

=== ward_a1s7 | The Orphans’ Roll
“Found,” says Pim. “Yes. Eleven. They were taken in by an institution on the hill.” He turns a page. “The House of Gentle Hands. A Chancery foundation. It takes in children whose parents are, ah, incapacitated. It has a very good reputation.”
His voice has dropped.
“I have not been permitted to visit,” he says. “I have written three times. I have been told that it is a quiet house and that visitors are discouraging to the children.” He sneezes, and wipes his nose. “I should like very much to know if it is true.”
Lu Yan has closed her notebook. Her knuckles are white.
“A Chancery foundation,” she says. “On the hill. Near the Chancery.” She says it as if it were a diagnosis. “They are collecting them.”
Nobody speaks. In the harbour, the lamp that Qiu has lit sweeps the roofs.
> truth | Say you will go there. | ward_a1s8
> mercy | Say you will find the children. | ward_a1s8
> quiet | Take Pim’s hand. | ward_a1s8
> inquiry | Ask what the House is for. | ward_a1s8

=== ward_a1s8 | A Shift Ends
It is dark when you come back to the Ward. The cots are lit by one lamp, turned low, and the sleeping hall is a landscape of white humps. Old Maro, a spare shy man with a drooping moustache, is doing the rounds with a taper. Lu Yan sits on an upturned bucket at the end of the hall with her head in her hands.
“I have a list,” she says, not looking up. “Forty children. I do not know what to do with it.”
“Find them,” you say.
“I know. I know I must.” She raises her head. Her eyes are red-rimmed behind the spectacles. “I wanted to be a physician. I did not want to be a detective. I do not know where the line is. I only know that sixty-three people in this room have stopped being able to ask me for anything, and forty children are somewhere on a hill.”
She rubs her face with both hands.
“Thank you for staying,” she says. “I do not say it enough.”
> truth | Say you will not leave. | ward_close | +ward_took_shift
> mercy | Take over her rounds. | ward_close | +ward_took_shift
> quiet | Sit beside her. | ward_close | +ward_took_shift
> inquiry | Ask what the House of Gentle Hands is called by the town. | ward_close | +ward_took_shift

// ---------------------------------------------------------------- a2: the depot
=== ward_a2s1 | Clearwater
“Clearwater,” says Lu Yan shortly. She looks at the queue of women with their baskets, at the man staring at his hands, at the long white hall. “It is a solvent. A very expensive one. It dissolves calm dust in the blood. A teaspoon in a cup of tea, three days running, and the sleeper wakes. I know. I have done it. The Concord made it, in its Alchemy Peak, and keeps it under lock and key.”
She spreads her ink-stained hands.
“I have enough for four patients. I have sixty-three. I have written to the Alchemy Peak, three times, requesting a supply. I have been told that the compound is classified.”
“Where is it kept?” says Ren Qiao.
“A depot,” says Lu Yan. “On Quay Street. Behind the customs house. They have a guard of six marines. I have walked past it every day for a year, thinking how very close it is.”
> force | Say you will fetch it. | ward_a2s2 | needs:3
> truth | Ask her if she would be ashamed of the means. | ward_a2s2
> quiet | Ask where the marines sleep. | ward_a2s2
> mercy | Ask her to say how many it would save. | ward_a2s2

=== ward_a2s2 | The Arithmetic of Pain
“Fifty-eight,” says Lu Yan at once. She has done the sum so often that it is a rosary. “Nine would die either way. Two are too old to wake. It would save fifty-eight, if I had it by the new moon, and a good deal more in the months after.” She meets your eyes, without flinching. “I am telling you this because it is true. I am not telling you so that you will steal it.”
“I know,” you say.
“If you steal it, I will take it. I will not pretend that I have not. I will use it. I have a rule about not being a hypocrite.” Her jaw sets. “But I will not ask.”
“Then you have not asked,” says Ren Qiao. He is already checking his sword. “I am merely an old soldier in a bad mood.”
Lu Yan almost laughs. “Please do not get anyone killed,” she says. “I would find it extremely difficult to explain to the patients.”
> force | Promise. | ward_a2s3
> truth | Say you will try. | ward_a2s3
> quiet | Look at Ren. | ward_a2s3
> mercy | Say you will leave the marines alive. | ward_a2s3

=== ward_a2s3 | The Customs House
The depot is a low brick warehouse tucked behind the customs house, with a single door of iron-banded oak and a pair of barred windows. A marine in grey leather stands at the door with a rifle at the slope. He is chewing something. He looks bored, and young, and tired.
Ren Qiao studies it for an hour from the roof of a cooperage. “Six men,” he says finally. “Two on the door. Two inside. Two asleep in the back. They change at midnight, and they drink at the change. There is a gap of about seven minutes when nobody watches the south wall.”
“And the lock?”
“A Chancery lock.” Hao Lan, beside him, puts down her telescope. “Seven-lever. I could open it with a hairpin and a little time. I have no time. I have a hammer.”
“Subtle,” murmurs Ren.
“Efficient,” says Hao Lan, a shade defensively.
> force | Go in over the south wall. | ward_a2s4
> truth | Go to the front and knock. | ward_a2s4
> quiet | Wait until midnight. | ward_a2s4
> deceit | Send Gu to the door with a message. | ward_a2s4

=== ward_a2s4 | The South Wall
You go over the south wall at seven past midnight. It is a ten-foot drop on the far side onto a heap of sacking, and you land more noisily than you intended. Ren Qiao is down beside you without a sound. Gu comes after, with an undignified scramble. Hao Lan, who has insisted on coming, is hauled over with a rope.
Inside it is dark and smells of dust and camphor. Shelves rise on every side, stacked with crates, jars, rolled mats. A single oil-lamp burns at the far end. The two marines at the table are playing dice. One of them has taken off his boots.
“The crates are labelled,” whispers Hao Lan. “Third shelf. Thirty-one. Thirty-two.”
“Which is clearwater?”
“It says Reagent C.” She frowns. “It says Reagent C in forty crates. It may all be the same.”
There is a pause.
“We will take the lot,” you say.
> force | Start with the nearest. | ward_a2s5
> truth | Whisper to Gu to keep watch. | ward_a2s5
> quiet | Cross the floor on tiptoe. | ward_a2s5
> inquiry | Read the label of the nearest crate. | ward_a2s5

=== ward_a2s5 | Dice
You get nine crates out before one of the marines looks up. He has just lost a throw, and is feeling sorry for himself. He sees a shadow move between the shelves and says, in a bored voice, “Chen? Is that you? Stop mucking about.”
Nobody answers.
“Chen?”
Gu, who is carrying a crate, stops dead. His face goes the colour of tallow. He very slowly puts the crate on the floor, straightens, and says in a high clear voice, “It’s me.”
“It’s who?”
“Chen,” says Gu. He is an appalling liar. “I was getting a drink.”
The marine thinks about this. Then he shrugs, and picks up the dice. “Bring me one, then,” he says. “Make it a wet one.”
Hao Lan puts her fist in her mouth.
> force | Carry on. | ward_a2s6 | needs:3
> truth | Nod to Gu. | ward_a2s6
> quiet | Slip out the way you came. | ward_a2s6
> mercy | Fetch the marine a drink. | ward_a2s6

=== ward_a2s6 | The Alarm
It would have worked. The south door was unbolted, and the sacks were packed, and the two marines at the dice-table were drunk. It was the third marine who ruined it. He was awake, in the back room, with a toothache, and he came out in his stockinged feet to find a stranger carrying a crate of Reagent C towards the window.
He opens his mouth to scream.
Ren Qiao hits him. It is a clean, short blow with the pommel of his sword, and the man folds up without a sound. But the sound of him falling is enough. The two at the dice-table are on their feet. A bell begins to ring, a high hard clangour, somewhere in the roof.
“Run,” says Hao Lan.
You run. You hit the south wall at a sprint, with the crates in your arms, and Ren Qiao boosts you over. Behind you a rifle cracks. A bullet whines off the brick.
> force | Keep running. | ward_a2s7
> truth | Turn back for Gu. | ward_a2s7
> quiet | Duck behind the cooperage. | ward_a2s7
> mercy | Check Hao Lan is over the wall. | ward_a2s7

=== ward_a2s7 | The Ward at Dawn
It is almost dawn when you reach the Dust Ward. You come in through the back, over the wall of the old dye-yard, with eleven crates and a stitch in your side. Lu Yan is waiting at the door with a lamp. She sees the crates. She sees the blood on Ren Qiao’s sleeve, which is not his. She sees the look on your face.
She says nothing at all.
She takes a crate from you, and opens it, and reads the label with a trembling finger. She breaks the wax seal on a stone bottle and sniffs. Her eyes close.
“Clearwater,” she whispers.
There are eleven crates. Forty bottles to a crate. She does the sum aloud, mumbling, in the doorway.
“Four hundred and forty,” she says. “That is enough for everyone. That is enough for the whole coast.”
She sits down on the step, in the lamplight, and begins to laugh and cry at the same time.
> force | Sit beside her. | ward_a2s8
> truth | Say you are sorry about the marine. | ward_a2s8
> quiet | Give her the bottle. | ward_a2s8
> mercy | Hold her. | ward_a2s8

=== ward_a2s8 | The First Dose
She gives the first dose to Captain Dei. She does it herself, at the head of his cot, with the whole ward gathered in a ring. She measures a teaspoon of the clear liquid into a cup of warm tea. She stirs it. She holds the cup to his lips.
“Drink,” she says. “It will taste of nothing.”
He drinks. He swallows. A tremor passes through him. His eyes, which have been fixed on the ceiling for seven weeks, move. They move to Lu Yan’s face. They move to the window. They move to the Sea Mallow’s painted tiller, which hangs on the wall above his bed, put there by some kind nurse.
His mouth opens.
“Mallow,” he says. It is a harsh dry whisper. “Mallow. She’s called the Sea Mallow.”
The ward is utterly still. And then a woman begins to clap.
> force | Join in. | ward_close | +ward_stole_clearwater needs:3
> truth | Watch Lu Yan’s face. | ward_close | +ward_stole_clearwater
> quiet | Look away. | ward_close | +ward_stole_clearwater
> mercy | Hold Dei’s hand. | ward_close | +ward_stole_clearwater

// ---------------------------------------------------------------- a3: the false quarantine
=== ward_a3s1 | A Visit
“They will come,” says Lu Yan. “They came last spring. They came at the new year. They walk through the hall with a clerk and a lamp, and they look at each bed, and they take the strongest. The ones who can walk. They say the patient has been discharged to a better facility.” Her jaw is tight. “I have never seen one of them again.”
Hao Lan takes out a sheet of paper.
“I wrote a regulation once,” she says. “About quarantine. It is Chancery Rule 47. It says that any establishment under suspicion of infectious disease may be closed to visitors by the physician in charge, for a period of up to twenty-one days, on a signed declaration. The declaration must be posted at the door.”
“Is it real?” says Lu Yan.
“Very.” Hao Lan unscrews an ink-bottle. “No one has used it since the plague of 791. It requires a seal. I have a seal.”
She holds it up. It is the small bone one.
> deceit | Ask what disease. | ward_a3s2
> truth | Say it is a lie. | ward_a3s2
> quiet | Watch her write. | ward_a3s2
> mercy | Ask whether the patients will mind. | ward_a3s2

=== ward_a3s2 | What to Call It
“It has to be something real,” says Hao Lan. She chews the end of her pencil. “Something plausible. Something that terrifies the sort of person who reads a declaration. Smallpox is out; they would send surgeons. Plague is out; they would burn the building.”
“Scrofula,” suggests Old Maro, timidly, from the corner.
“Too common.”
“Sweating sickness.”
“Too historical.”
“Salt fever,” says Lu Yan. She says it after a long moment, with a faint smile. “It is a coast disease. Nobody quite knows what it is. It is mentioned in the old almanacs. It causes dizziness, delusions, and an inability to recognise one’s relatives.”
Hao Lan stares. “It sounds exactly like the dust.”
“Yes,” says Lu Yan. “I know. It is the same thing, in an earlier book. I have been reading about it for months. Nobody has thought to look.”
> deceit | Write it. | ward_a3s3
> truth | Say it is brilliant. | ward_a3s3
> quiet | Listen. | ward_a3s3
> inquiry | Ask where the almanac is. | ward_a3s3

=== ward_a3s3 | Salt Fever
They write the declaration at midnight, on the surgery table, by lamplight. It takes four drafts. Hao Lan writes in a flawless chancery hand; Lu Yan supplies the clinical details; Old Maro, with surprising relish, contributes the Latin. At the bottom, with a flourish, Hao Lan presses the bone seal into a pool of red wax. The seal says nine. It says something else too, in a script you cannot read.
“There,” she says. “Salt fever. Twenty-one days. Closed to all visitors, officials and clergy. Violation to be punished under Rule 47.”
She blows on the wax.
“It will not hold forever,” she says. “It will hold until somebody opens a book.”
“How long does that usually take?” asks Gu.
“In the Chancery?” Hao Lan shrugs. “Years.”
She pins it to the door herself.
> deceit | Check the pin. | ward_a3s4
> truth | Say you hope it works. | ward_a3s4
> quiet | Step back and look at it. | ward_a3s4
> mercy | Thank her. | ward_a3s4

=== ward_a3s4 | The Inspectors
They come at dawn. A closed carriage, drawn by two black horses, comes up Cooper Lane with its blinds drawn. A clerk descends, in a grey tunic, with a ledger. He is followed by a thin man in a cloak and two marines. They halt at the door of the Ward. The clerk reads the notice.
He reads it again.
“Salt fever,” he says, in a tone of reverent dismay. “Rule forty-seven.” He takes a step back. “Good heavens.”
“A most unusual outbreak,” says Lu Yan, from behind the door. She has a mask of cloth over her mouth. She has not slept for two days and she looks the part. “I would advise that you do not come closer. We have had seven dead since Tuesday.”
“Seven!”
“Eight, this morning.” She coughs, theatrically. “The old lady in the corner has just gone.”
The thin man in the cloak takes a step forward. “Open the door,” he says.
> deceit | Hold the door shut. | ward_a3s5
> truth | Tell him to leave. | ward_a3s5
> quiet | Hold your breath. | ward_a3s5
> inquiry | Ask for his authority. | ward_a3s5

=== ward_a3s5 | The Thin Man
He is young, perhaps thirty, with a long pale face and eyes like wet slate. He wears the grey tunic of the Chancery. On his breast is a small silver pin in the shape of an open hand. He does not seem alarmed. He seems only interested.
“Inspector Fang’s office,” he says. “I am his secretary. My name is Yin.” He studies the notice. “It is a very good forgery.”
There is a silence. The clerk looks round, startled.
“It is a very good forgery,” says the thin man again, with a faint smile. “The paper is correct. The wax is correct. The seal is, I think, an original. I have not seen a bone seal in that pattern since the Academy. I should like to know where you obtained it.”
Hao Lan, behind the door, has made a very small sound.
“I shall not open the door,” says Yin. “I am afraid of salt fever.”
> deceit | Stay silent. | ward_a3s6
> truth | Ask what he wants. | ward_a3s6
> quiet | Watch his hands. | ward_a3s6
> force | Open the door, and hit him. | ward_a3s6

=== ward_a3s6 | A Message
“I want to deliver a message,” says Yin pleasantly. He folds his hands. “To the person who wrote this notice. I should be grateful if you would tell her.” He pauses. “She is a gifted woman. She has been underappreciated. If she were ever to tire of her present company, my master would be glad to have her at his side.”
He steps back.
“The Inspector arrives in eight days. The Inspector is a man of great patience. He will wait for the salt fever to run its course.” He bows. “Good morning. Please convey my regards to the physician.”
The carriage drives away. The marines go after it. The clerk, who has been standing with his mouth open, hurries to follow.
Behind the door, Hao Lan slides slowly down the panels until she is sitting on the floor.
“He knew,” she whispers. “He knew it was me.”
> deceit | Kneel beside her. | ward_a3s7
> truth | Tell her it is not her fault. | ward_a3s7 | bond:hao+1
> quiet | Give her a moment. | ward_a3s7
> mercy | Hand her a cup of tea. | ward_a3s7

=== ward_a3s7 | An Offer
She does not weep. She sits against the door with her knees drawn up, staring at the notice from behind, where the ink shows through as a backward ghost. After a long while she says, in a small steady voice: “They want me back.”
“You are not going back,” says Gu.
“I know.” She takes off her spectacles and wipes them on her sleeve. “It is only that I had hoped to be unimportant. I have worked so hard at it. I was a very good clerk. Nobody noticed me.” She smiles crookedly. “And now a man has said: she is gifted. They have not said that since I was nine.”
She puts the spectacles back on.
“I find I do not like being gifted,” she says. “It is a thing that is done to you.”
Lu Yan sits down on the other side of her. “I know exactly what you mean,” she says.
> deceit | Sit between them. | ward_a3s8
> truth | Say you do too. | ward_a3s8
> quiet | Pour more tea. | ward_a3s8
> mercy | Say she can be unimportant here. | ward_a3s8

=== ward_a3s8 | Twenty-One Days
They have twenty-one days. Nobody thinks it will last; nobody says so. Lu Yan seals the doors and walls and shutters, and puts a skull-and-crossbones on the front, and instructs the neighbours to be afraid. They are. A line of cart-drivers goes round the end of Cooper Lane to avoid it. The bread-women leave their baskets at the corner, and run.
In the long hall, in the cool and the quiet, the Ward goes on. Patients sleep. Old Maro does the rounds. Lu Yan works through the night, copying out a hundred pages from the old almanacs. The salt fever is an ancient disease, she says, and nobody has looked at it in a thousand years. She thinks the cure is in there.
“If I can find it,” she says, “I will write it up. I will publish. I will be vindicated. The Concord will have to pay attention.”
“And if not?”
She looks at the sleeping hall.
“Then I will have had twenty-one days,” she says.
> deceit | Offer to read with her. | ward_close | +ward_forged_quarantine
> truth | Promise to come back in twenty. | ward_close | +ward_forged_quarantine
> quiet | Sit down with a volume. | ward_close | +ward_forged_quarantine
> mercy | Take the first watch. | ward_close | +ward_forged_quarantine

// ---------------------------------------------------------------- a4: the step
=== ward_a4s1 | The Man on the Step
You sit down beside him. He does not look round. He is a man of fifty or so, with a sailor’s forearms and a bald freckled head, and he is looking at his hands with a kind of mild astonishment. He turns them over. He flexes the fingers. He looks at the palm, and the back.
“They’re good hands,” he says eventually. “Aren’t they?”
“They are,” you say.
“I thought so.” He nods. “I don’t know whose they are.”
His voice is quite calm. Along the lane a cart rattles past, loaded with onions. The women at the door shuffle their baskets.
“I woke up here, three days ago,” he says. “A girl in spectacles said I had been ill. I said, what was I? She said, a fisherman. I said, oh.” He frowns. “I don’t think I like fish.”
> mercy | Sit with him. | ward_a4s2
> truth | Tell him he is waking. | ward_a4s2
> quiet | Look at his hands. | ward_a4s2
> inquiry | Ask his name. | ward_a4s2

=== ward_a4s2 | Dei
“I have been told it is Dei,” says the man. “Captain Dei. I am told that I have a boat.” He tries the word like a new coat. “Captain. It feels very large.”
He is silent for a long time. Then he says: “The girl wants me to remember. She is very kind. She sits with me every evening, and reads out a list of things. Rope. Tar. Mackerel. Tide. She says these are things I knew.” His forehead creases. “I keep saying them back to her, and they are just words.”
“What do you want?” you ask.
“To go home.” He looks at you in simple, honest bewilderment. “I do not know where that is. But I am quite sure I want to go there.”
His hands lie open on his knees.
“Do you know,” he says, “I think I have a dog.”
> mercy | Ask what kind. | ward_a4s3
> truth | Say you do not know. | ward_a4s3
> quiet | Wait. | ward_a4s3
> inquiry | Ask what the dog is called. | ward_a4s3

=== ward_a4s3 | A Dog Called Anchor
He thinks. His whole broad face works with the effort. The women with the baskets stop talking to watch. A gull lands on the roof of the dye-works and goes to sleep.
“Anchor,” he says. “I think he’s called Anchor. He is a brown dog with a white foot. He sits on the quay. He waits for the Mallow.” His voice cracks. “He waits.”
He puts a hand over his mouth.
“It’s been seven weeks,” he whispers. “Seven weeks. He’s been sitting on the quay.”
You say nothing. You put your arm round his shoulders, which are shaking. He sobs like a child, great noisy gulping sobs that rack him from head to foot. Behind you, from the lane, there is a soft scrape: Lu Yan has come out of the Ward, with a cup of water, and is standing very still.
She does not say anything either.
> mercy | Hold him. | ward_a4s4
> truth | Tell him Anchor is waiting. | ward_a4s4
> quiet | Take the water. | ward_a4s4
> inquiry | Ask Lu Yan if the dog could be fetched. | ward_a4s4

=== ward_a4s4 | Fetching Anchor
It takes Gu an hour. He goes down to the quay with a bun in his pocket and asks every fisherman he meets whether they have seen a brown dog with a white foot. The fourth says yes. The dog is on the sea wall, beside a coil of rope, exactly where the man said. He has not moved. He lifts his head when Gu approaches, and thumps his tail once, and does not get up.
“Come on,” says Gu, quietly. “Come on, boy.”
The dog looks at him. He looks at the sea.
“He’s here,” says Gu. “He’s alive. He’s on Cooper Lane. He’s sitting on a step. Come and see.”
Anchor gets up. He stretches his old stiff legs. He follows Gu up the hill with his nose to the ground, and at the corner of Cooper Lane he lifts his head, and sniffs, and breaks into a run.
> mercy | Watch. | ward_a4s5
> truth | Stand back. | ward_a4s5
> quiet | Look at Dei’s face. | ward_a4s5
> inquiry | Look at Lu Yan. | ward_a4s5

=== ward_a4s5 | A Name Remembered
The dog hits Dei at full tilt. He is a big dog, and Dei is sitting down, and the two of them go over in a heap on the step with a great deal of barking and waving of limbs. Dei is shouting something. He is laughing. He is crying. He has his arms round the dog’s neck and his face in its fur.
“Anchor!” he is shouting. “Anchor! You old fool! You great old fool!”
The women with baskets have begun to cheer. The bread-seller drops her basket. A child runs up and down the lane, screaming with joy, and is told off by his mother.
Lu Yan stands in the doorway of the Ward with a cup of water in her hand and her lips pressed together. Her eyes behind the spectacles are bright.
“I was going to tell him,” she says to nobody. “I was going to explain the pharmacology.”
> mercy | Smile. | ward_a4s6
> truth | Say it is better this way. | ward_a4s6
> quiet | Let her stand. | ward_a4s6
> inquiry | Ask what it was she was going to say. | ward_a4s6

=== ward_a4s6 | What Waking Costs
“That he will feel it,” says Lu Yan. She has come down the step and sits next to you. Dei and the dog are rolling about in the lane. “That when the dust leaves, the memories do not come back gently. They come back all at once. Seven weeks. His whole life. It will hurt in a way I do not have the language for.”
She watches Dei wipe his face on his sleeve and burst into laughter again.
“He will have bad nights. He will wake up crying. He will be angry, with no one to be angry at. I have seen it fifty times.” She turns her cup in her hands. “It is a good deal easier not to know. A great many people choose it. I do not blame them.”
“Do you wish you could choose it for him?”
“Every day,” says Lu Yan. “And then I see a dog.”
> mercy | Say you understand. | ward_a4s7
> truth | Say it is worth it. | ward_a4s7
> quiet | Take her hand. | ward_a4s7
> inquiry | Ask what the dust took from her. | ward_a4s7

=== ward_a4s7 | The Physician’s Own
“Nothing,” says Lu Yan. “I was not dosed.” She looks at her cup. “I was raised in a mourning-shop. I had the ledger. I had every name. I knew the dust was coming, because Mother told me, and she had me read the old almanacs, and I knew what I was looking for.”
She gives a thin little smile.
“I never forgot anything. I could not. It is the cruellest gift. I remember the fire. I remember being carried. I remember the woman in grey who stood in the door and did not come in.”
She raises her eyes.
“I have been trying for fifteen years to mend what the dust takes. I thought, if I could mend a mind, I might forgive her.”
“Forgive who?”
“The one who chose,” says Lu Yan.
> mercy | Say that she is sorry. | ward_a4s8
> truth | Say you did not choose. | ward_a4s8
> quiet | Say nothing. | ward_a4s8
> inquiry | Ask if she can forgive her now. | ward_a4s8

=== ward_a4s8 | A Cup of Tea
“Ask me when the ward is empty,” says Lu Yan.
She pours herself the last of the water and drinks it down. She takes off her spectacles and sets them on the step, and presses her palms to her eyes, and for a minute she is not a physician or a sister or anybody at all, only a tired girl on a doorstep in a lane that smells of fish.
Then she puts the spectacles back on.
“Come in,” she says. “I have a patient who needs his tea. He needs a cup of the waking draught, and I cannot make it without a flower I do not have. I will make do with what I can. It will be worse than it should be.”
She stands.
“I think we shall manage,” she says. “I generally do.”
> mercy | Follow her. | ward_close | +ward_sat_with_dei
> truth | Say you will find the flower. | ward_close | +ward_sat_with_dei
> quiet | Hold the door. | ward_close | +ward_sat_with_dei
> inquiry | Ask what the flower is. | ward_close | +ward_sat_with_dei

// ---------------------------------------------------------------- hidden: the roof garden
=== ward_h1 | A Packet of Seed
The smuggler’s boy came at dawn with a paper twist, and you have carried it ever since. You lay it on Lu Yan’s surgery table. She regards it with grave suspicion, as she regards all gifts. Inside are a dozen tiny black seeds, shaped like grains of rice, each flecked with blue. A note is folded round them in a man’s shaky hand: Madam. These are from the garden at the mill. Please plant them where it is sunny. They like to be talked to. Pu.
Lu Yan reads it three times.
“Headman Pu,” she says. “I read his name in the Assembly dispatches. He brought a pill. He held it up.” She touches a seed with the tip of one finger. “This is it. This is the flower. I have read about it for three years and never seen one.”
Her voice is a whisper. “It is called remembrance. It is a thing of legend.”
> inquiry | Ask what it does. | ward_h2
> truth | Say Pu planted it with his own hands. | ward_h2
> mercy | Ask where it should grow. | ward_h2
> quiet | Give her the seeds. | ward_h2

=== ward_h2 | Remembrance
“It breaks the dust,” says Lu Yan. She is turning a seed between finger and thumb. “Not by dissolving it. By reminding it. The dust makes the mind forget the shape of a thing. The flower’s root is a shape. It is the shape of a name. When it is steeped in sea-water and spoken over, it reminds the blood of what it was.”
She looks up. Her eyes are shining.
“It is the cure,” she says. “The real cure. I have been trying to make it with clearwater, which is a brute. This is the thing the brute was copying.” She sets the seed down. “It needs sun. It needs salt. It needs, I believe, someone to talk to it.”
Old Maro, in the doorway, clears his throat.
“There is the roof,” he says diffidently. “It faces south. There is a good deal of sun.”
> inquiry | Say you will plant it. | ward_h3
> truth | Say you will talk to it. | ward_h3
> mercy | Ask who it likes best. | ward_h3
> quiet | Go up. | ward_h3

=== ward_h3 | The Roof Garden
You plant them that morning, on the flat roof of the dye-works, in a bed of old fish-boxes filled with sea-black soil. Lu Yan digs. Old Maro waters. Hao Lan reads aloud from a treatise on horticulture. Gu, with the brusque tenderness of the very young, pats the earth down over each seed as if tucking in a baby.
Nothing happens for an hour. Then, as the sun climbs over the Wall, the soil in the second box stirs. A shoot comes up, thin and pale, and unrolls itself in the air. It is blue. It is the blue of a deep sea, of a summer dusk, of a vein beneath thin skin. It opens one leaf, then another, and lifts its face to the light.
Lu Yan puts her hand over her mouth.
“Hello,” says Gu, shyly, to the flower. “I’m Gu.”
The flower leans, very slightly, toward him.
> inquiry | Add your own greeting. | ward_close | +ward_planted_garden
> truth | Tell it what it is for. | ward_close | +ward_planted_garden
> mercy | Water it. | ward_close | +ward_planted_garden
> quiet | Watch the sun. | ward_close | +ward_planted_garden

// ---------------------------------------------------------------- close
=== ward_close | Sixty-Three Beds
By evening the lamplight on Cooper Lane is gold. The queue of women with baskets has dwindled. Inside the Ward the cots are quiet. Old Maro is mixing a draught at the long table, humming, and Lu Yan is writing her notes by the window, her pencil dashing across the page. Her hair is coming out of its pin.
+[how] ward_took_shift | You worked a shift on the Ward, and learned what a stocking with no hole means.
+[how] ward_stole_clearwater | Four hundred and forty bottles of Concord clearwater lie in the cellar of the old dye-works, and a marine has a very sore head.
+[how] ward_forged_quarantine | A notice for salt fever hangs on the Ward door. It will hold until someone opens a book.
+[how] ward_sat_with_dei | Captain Dei sits on the step with his dog, and has begun to say the names of ropes.
+[how] ward_planted_garden | Blue flowers are opening on the roof of the dye-works, and one of them leans toward Gu.
She sets down the pencil and looks across the room at you.
“I have a thing for you,” she says. “I did not know if I would give it. I am not sure it is mine to give.”
She takes a brown card out of her apron pocket.
> truth | Take it. | ward_close2 | +card_2
> mercy | Ask why she is hesitating. | ward_close2 | +card_2
> quiet | Wait. | ward_close2 | +card_2
> inquiry | Ask what the card says. | ward_close2 | +card_2

=== ward_close2 | Mend What Is Torn
“Mend what is torn,” says Lu Yan. “It says that. I read it at six. I have read it every night since.” She turns it over in her fingers. “I thought it meant me. That I was to mend. That it was my work.”
She holds it out.
“But I think it is a thing you do, not a thing you are. I think anyone can mend. I think I have been making the mistake of treating it as a duty, when it is only a verb.”
You take the card. It is faded and soft. It fits against the others with a click.
“Go on,” she says. “I have a ward to run. Tell the Elder she may visit. Tell her to wash her hands.”
She almost smiles.
“Tell her I do not hate her. It is not nearly so interesting as that. I think I am merely tired.”
> truth | Promise to tell her. | hub_b3_coast | +b3q_ward bond:luyan+3
> mercy | Hug her. | hub_b3_coast | +b3q_ward bond:luyan+3
> quiet | Bow, and leave. | hub_b3_coast | +b3q_ward bond:luyan+3
> inquiry | Ask about the House of Gentle Hands. | hub_b3_coast | +b3q_ward bond:luyan+3
`,
  scenarios: String.raw`
$ SU_WARD_SHIFT | trust+3 respect+3 | elder | The Elder watches the player take a shift in the Dust Ward and sees her own old seal on the dust.
hostile: I stood in a doorway and counted the beds. It is the only thing I have been able to do in rooms like that. I counted. I did not touch one.
wary: Sixty beds. I wrote the order for the first thousand doses. I do not know whether to apologise to the room or to the arithmetic.
neutral: Lu Yan did not ask me to sit down. She asked me to wash my hands. I found it the kindest instruction I have ever received.
warm: A sailor told me, as I passed his bed, that he had forgotten the name of his boat and would I like to hear what he did remember. He then told me about a fish. I listened to the whole of it. It was a very good fish.
devoted: Two. The second child I did not carry out. She carries the burden I put down, and she does it without once looking at me for payment. I think that if I am forgiven, it will be by people who never meant to.
`,
  remarks: String.raw`
% ward_lu_later | since:b3q_ward>=3 | hao | Lu Yan sent a note. It said only: Thank you for the paper. It was a ream of Chancery foolscap, which she says makes excellent bandage-liner. I have never been so proud of a requisition.
% ward_tiao_later | since:ward_planted_garden>=5 | gu | The blue flower on the roof has put out a second bud. I told it about the lamp. I think it was pleased.
`,
};
