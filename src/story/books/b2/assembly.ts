import type { Arc } from "../types";

/**
 * Book Two, arc thirteen: the Assembly of Nine. Three days in the round hall under blue glass. The first day opens the charge and
 * seats the delegates by the precedence the player won. The second day is a witness bench: the player calls up to three people
 * the river road has made friends of. The third day brings the Second Order, Lian Sheng's register, and the naming of the bearer.
 * The flight that follows is gated by who the player has befriended. Every witness and every ally is a flag set in an earlier arc.
 * Cast: Duan Wuyi, Lian Sheng, Leng Jian, Madam Zhu, Brother Ox, the old man of the Formation Peak (Master Tan), the herald Yan.
 */
export const assembly: Arc = {
  id: "assembly",
  name: "The Assembly of Nine",
  scenes: String.raw`
=== qing_arrive | The Gates of Qinglian Ford
The barge enters Qinglian Ford at dawn through the Water Gate, a pair of white stone towers with a chain of lanterns slung between. The city rises from the river in terraces, roofs of blue glazed tile and grey slate, nine canals threading it like silver wire. On the quay, a row of Concord heralds in grey sashes waits to read out the party’s names.
There is no hurry. The Assembly opens in six days, and the Censors have rooms in the Guesthouse of Nine Moons. Duan Wuyi hands the Elder down the gangway himself, a courtesy so exact that it is almost an insult to the heralds. Lian Sheng, who came by the northern road two days ago and has taken the best rooms in the house, is waiting on the steps in her ash-grey robes.
She bows. It is a bow so perfect that it contains no warmth at all.
“Elder,” she says. “I have brought the household registers, as requested. I have also brought a few thoughts of my own.”
> truth | Greet her honestly, and ask what her thoughts are. | hub_b2_city | +b2_qinglian
> quiet | Bow back, exactly as deeply, and say nothing. | hub_b2_city | +b2_qinglian
> mercy | Ask whether she has eaten after her journey. | hub_b2_city | +b2_qinglian
> inquiry | Ask what the registers were requested for. | hub_b2_city | +b2_qinglian

=== asm_entry | The Round Hall
The Assembly Hall of the Concord is a round room of white stone, whose floor is inlaid with a map of the nine peaks and whose roof is a single dome of blue glass. In the centre stand nine chairs, and around them, on tiered benches, three hundred delegates in sashes sit in the order the Stair has given them. Sunlight falls through the dome in a pale blue column and lies on the map like a hand.
The Azure Cloud Sect’s delegation sits in the third row. Elder Su has her hair pinned under a plain cloth, her silver comb out of sight. Gu, Ren Qiao and Lin Yuan’s empty seat are beside her. You are on the end, in a seat meant for a witness, with a stone floor beneath your boots and a closed eye in the grey light above.
Herald Yan strikes the gong. The sound rolls round the dome like a bird.
“The Assembly of Nine,” he calls, in a voice that cracks on the first word, “is open.”
+[seat] stairs_precedence | The chair at the third row was won by a clause, and the whole hall knows which.
+[seat] stairs_sixth | The chair is six landings up the stair, by a witness who would not yield.
+[seat] silk_petition_entered | In the rafters, a bolt of undyed silk hangs unrolled, stitched with names. The weavers entered it themselves.
> truth | Sit up straight, and look at the delegates one by one. | asm_d1s1
> mercy | Look at the Elder, to be sure she is breathing. | asm_d1s1
> force | Look at the high table, and do not blink. | asm_d1s1
> quiet | Study the hall, and count the exits. | asm_d1s1

=== asm_d1s1 | The Charge
Duan Wuyi rises from the central chair. He wears the full grey robe of the Censor-General, with the closed eye on the breast, and his staff of pale bone in his left hand. His voice is mild and carries to the back of the hall.
“Four matters are before the Assembly,” he says. “First: the Sealing of fifteen, in the year the jade was set. Second: the trade in calm dust, in the provinces of the river. Third: the returning of forty-one struck names to the Ledger since the spring. Fourth: whether the Concord shall authorise the Great Sealing of the Crimson Abyss.”
He sets the staff on the floor. It rings.
“The Azure Cloud Sect is summoned to answer the first and second, to witness to the third, and to be heard on the fourth. The Elder of its Law Hall will speak first.”
> truth | Watch the Elder rise. | +
> quiet | Watch Lian Sheng's hands. | ^
> inquiry | Watch the delegate of the Alchemy Peak, who is smiling. | ^
> mercy | Watch Gu, who has gone grey. | ^

=== asm_d1s2 | The Elder Speaks
She has no notes. She stands in the third row, a small grey woman in a plain cloak, with her hands folded, and says it flat and plain, as one reads a ledger.
“I was Registrar of the Law Hall in the year of the Sealing. I signed fourteen orders. I did not read the fifteenth. I have been Elder for twelve years, and in that time I signed an order for calm dust to be issued to the river provinces, and I did not read where it went.”
Her voice does not waver.
“I am here to say that these were my acts, and not only the masters’. I do not say it to be forgiven. I say it so that the record is correct.”
A murmur goes round the hall. On the benches, three hundred sashes shift.
+[su] fever_su_confessed | She has said these words before, to sixty-four sleepers in a sick-house. They come easier the second time, and cost more.
+[su] fever_su_read | She has read eleven years of letters from a town that begged her to stop. She carries them, bound, in her sleeve.
+[su] assize_a4_told_su | She has looked at her own stamp on a dust-maker's ledger. She does not look away from it now.
> truth | Stand up beside her. | + | npc:SU_ASSEMBLY_STAND
> mercy | Keep your seat, and keep your eyes on her. | ^
> inquiry | Watch how the delegates take it. | ^
> force | Glare at the Alchemy Peak's chair. | ^

=== asm_d1s3 | Lian Sheng Rises
Lian Sheng speaks next, from the Azure Cloud’s second chair. She does not stand so much as unfold. She has put on her finest ash-grey robe, and the lamplight in the dome picks out the white at her temples. She bows to the dais.
“The Elder is honest,” she says. “She has always been honest. It is her great weakness. I wish to correct a small thing, in the interest of the record.”
She turns. Her eyes pass over the benches, and rest on you.
“The calm dust was not a crime. It was a mercy. The abyss cries. The wardens could not sleep. A decade of quiet in the river provinces has been bought at the price of a few forgotten names. I would remind the Assembly that forgotten names are not dead ones.”
Beside her, the Elder has closed her eyes.
> truth | Rise and say that a forgotten name is a death. | +
> quiet | Say nothing. Memorise her phrasing. | ^
> inquiry | Ask the herald if a witness may question a delegate. | ^
> mercy | Look at the Elder, and say nothing. | ^

=== asm_d1s4 | Questions for Lian Sheng
Duan Wuyi permits it. Witness may question delegate, he says, if the delegate agrees, and the delegate does. Lian Sheng folds her hands. “Ask,” she says. “I have nothing to hide.”
You have a list. You have a list in your head and another in your sleeve, in the cedar box that Lin Yuan packed you. You choose the one that matters.
“How many letters came from Green Mill?”
“I do not recall,” says Lian Sheng.
“Eleven,” you say. “One each spring. They were kept in a drawer in your office. They said: send no more.”
There is a long silence. A stir in the benches. At the high table, Duan Wuyi turns a page.
+ fever_pu_resigned | Headman Pu's resignation is read into the record from a letter in your hand.
+ fever_a3_took_ledger | The dust-seller's ledger lies on the witness table, four hundred names with the dates they began.
> truth | Press her: did she read them? | + | +asm_pressed_lian
> force | Place the letters on the table. | ^
> mercy | Ask whether she ever wanted to stop. | ^
> inquiry | Ask who ordered the extensions. | ^

=== asm_d1s5 | What She Said
“Yes,” says Lian Sheng. It falls into the hall like a stone into a pond. “I read them. I kept them. I did not answer them.” She lifts her chin. “I will tell the Assembly why. I read in those letters a headman who asked me to stop a mercy. I read a town begging for the thing it feared it could not live without. I judged that the town would suffer more without the dust than with it.”
Her voice is steady and clear.
“I was right. Green Mill is waking now, and it is in agony. I do not say I take joy in it. I say I was right.”
A bench in the front row creaks. The old man from the Formation Peak has half risen, his stick raised.
> truth | Tell her that she was never right to decide for a town. | + | +asm_denied_lian
> quiet | Wait. Let him speak. | ^
> inquiry | Ask her how many of the town's thirty-one woke gladly. | ^
> mercy | Ask what she would say to Su-Su. | ^

=== asm_d1s6 | Master Tan
The old man from the Formation Peak is called Tan, and he is eighty-one. He has never in his life been known to speak in the Assembly. He rises, and the hall goes quiet in surprise. He thumps his stick on the floor once, and says, in a cracked voice, “I knew a headman once who made a town forget.”
He looks around the benches.
“It was my father. A flood, a fever. He gave the town a drink. In a year the town was happy. In ten, it was dead. They had forgotten how to be anything else.” He glares at Lian Sheng. “You are not wrong that it is merciful. You are wrong about what mercy is.”
He sits. His stick shakes.
+ stairs_sixth | He watched you take the sixth landing, and grunted. He is not looking at you now. He does not need to.
> truth | Bow to him. | + | +asm_bowed_tan
> mercy | Fetch him a cup of water. | ^
> quiet | Let it ring. | ^
> inquiry | Ask Duan whether a delegate may be called to witness for the witness. | ^

=== asm_d1s7 | The Day Ends
By dusk the hall is subdued. Duan rises. “Tomorrow,” he says, “the Assembly will hear witnesses. The Azure Cloud may bring any it likes, to a maximum of three. I would ask that the witnesses be people of the river and the provinces, whose lives these matters have touched.”
He looks at you, over his spectacles.
“I understand there are a number.”
In the Guesthouse of Nine Moons that evening the Elder sits on her bed with her hands in her lap. Lin Yuan’s cedar box is open before her. In it are fifteen cards, and a sixteenth, face down.
“Who will you call?” she says.
> truth | Tell her you will call the ones who were hurt. | hub_asm_witnesses
> mercy | Tell her you will call the ones who helped. | hub_asm_witnesses
> inquiry | Tell her you will call whoever the Assembly will not be able to ignore. | hub_asm_witnesses
> quiet | Tell her you do not yet know. | hub_asm_witnesses

=== hub_asm_witnesses | The Witness Bench
The second day opens with rain on the dome. The benches are full. Three witnesses may be called, and each will have the length of a candle to speak. On a long table before the dais, the clerks have laid out slips of paper, one for every name the Azure Cloud’s delegation has put forward.
+[w] asm_w_ye | A cloth satchel hangs from the back of a chair. Xiao Ye sits in it, small and straight, with her father beside her.
+[w] asm_w_bo | Bo Lan sits in the front row with his mother's pallet beside him. She is propped on cushions and coughing less.
+[w] asm_w_pu | Headman Pu sits in a plain brown coat with no badge of office, and his hands do not stop shaking.
+[w] asm_w_qi | Madam Qi sits very straight, in the cap she has worn for sixty years, with a needle behind her ear.
+[w] asm_w_sou | Old Sou has been carried up from the vault in a chair, and sits cupping his ear in the aisle.
+[w] asm_w_hu | Captain Hu of the Canal Watch has put on his dress helmet, and holds it in his lap like an egg.
+[w] asm_w_gui | Master Gui sits with his stick across his knees, his face turned toward the dome.
+[w] asm_w_mei | Inspector Mei stands at the back wall, her iron bar at her side, and does not look at anyone.
+[w] asm_w_wen | A small grey man in a brown robe sits quietly near the door, without a mark on his forehead.
> truth | Call Xiao Ye and Bai Dao, of Willow Reach. | asm_wye1 |  | willow_name_back & !asm_w_ye | You did not meet them at the Reach, or they are already heard.
> mercy | Call Bo Lan and his mother, of Kuan Landing. | asm_wbo1 |  | assize_free & !asm_w_bo | You did not stand with them at the assize, or they are already heard.
> inquiry | Call Master Gui, Head Archivist of the Nine. | asm_wgu1 |  | nine_gui_ally & !asm_w_gui | You did not climb the tower far enough to meet him, or he is already heard.
> force | Call Old Sou, Warden of the Vault. | asm_wso1 |  | vault_entered & !asm_w_sou | The Stone has not been read lawfully, or he is already heard.
> truth | Call Headman Pu, of Green Mill. | asm_wpu1 |  | fever_pu_resigned & !asm_w_pu | Green Mill has not found its voice, or he is already heard.
> mercy | Call Madam Qi, of the Silk Quarter. | asm_wqi1 |  | silk_petition_entered & !asm_w_qi | The petition was not entered, or she is already heard.
> quiet | Call Captain Hu, of the Canal Watch. | asm_whu1 |  | lanterns_hu_stood_down & !asm_w_hu | The Captain did not take his helmet off, or he is already heard.
> inquiry | Call Inspector Mei, Seal Inspector of the Concord. | asm_wme1 |  | barge_mei_ally & !asm_w_mei | She has not promised anything, or she is already heard.
> truth | Call Wen Rui, formerly of the Seventh Chancery. | asm_wwe1 |  | vault_wen_written & !asm_w_wen | His name has not been written back, or he is already heard.
> quiet | Call no one else. The three who have spoken are enough. | asm_d2end |  | count:asm_w_>=3 | Three witnesses must be heard before the bench is closed.

=== asm_wye1 | The Toll of a Name
Xiao Ye does not come to the witness table. She walks to the centre of the hall, to the map of the peaks inlaid in the floor, and stands on the point where the Salt Coast meets the river. She has her cloth satchel across her chest. Her father is a pace behind her, a broad man with a boatman’s hands, shaking.
“I was nobody for eight months,” she says. Her voice is a child’s, clear and old. “My father took my fare every day and did not know my name.”
She looks round the dome.
“The river takes one name for each crossing. It is a fair price, they said. But it took the nearest one that was his, and the nearest was me.”
+ willow_river_promise | The river's four-syllable name hums in your chest while she speaks.
+ willow_written | Her name is in a Censor's register, in three scripts, and the clerk beside Hao Lan is turning to it.
> truth | Stand beside her. | asm_wye2 | +asm_w_ye
> mercy | Hold her father's arm. | asm_wye2 | +asm_w_ye
> quiet | Watch the delegates' faces. | asm_wye2 | +asm_w_ye
> inquiry | Ask Hao Lan whether the register is open. | asm_wye2 | +asm_w_ye

=== asm_wye2 | What the Child Asked
“I would like to ask the Concord a question,” says Xiao Ye. “When you take a name, do you give it back?”
Nobody answers. Madam Zhu, of the Alchemy Peak, begins to answer, and stops.
“My father said it was a fair price,” says the child. “I do not think it is fair to take a thing from someone who did not know she was being asked.” She pushes her satchel a little higher on her shoulder. “That is all.”
She walks back to her father, and he sweeps her up in one arm, and the hall, which has not applauded a witness in a century, begins slowly to do so.
> truth | Join in. | asm_hub_back | +asm_w_ye
> mercy | Watch the old man from the Formation Peak, who is wiping his eyes. | asm_hub_back | +asm_w_ye
> quiet | Look at the Elder. | asm_hub_back | +asm_w_ye
> inquiry | Watch Lian Sheng. | asm_hub_back | +asm_w_ye

=== asm_wbo1 | Two Stones
Bo Lan stands at the witness table with his hands on the edge and his chin up, and does not look at his mother. He is sixteen. He is thinner than he was at the Pavilion, and his hair is cut short. He tells it in a rush, as he told it to you in a lamplit room.
“I took a root,” he says. “It had a tag on it that said Not for Sale. I left two stones on the barrow. They called it theft.”
Behind him, Madam Lan coughs. It is a quieter cough now.
“My mother has a fever,” he says. “The root helped. A factor kept forty roots a quarter in a granary, and sold them to the Law Hall for a thing you have been calling calm dust. It was my mother’s medicine, and they ground it into powder for people who wanted to forget.”
+ assize_dust_exposed | The raid on the warehouse behind the dyers' lane is in the record now. He is entered as a witness to it.
+ assize_fled | He is still a runaway, in the eyes of the court. Duan Wuyi has not issued a warrant, and the Assembly has noticed.
> truth | Stand beside him. | asm_wbo2 | +asm_w_bo
> mercy | Fetch his mother a cushion. | asm_wbo2 | +asm_w_bo
> inquiry | Ask Hao Lan to read the factor's receipt into the record. | asm_wbo2 | +asm_w_bo
> quiet | Watch Dai Ming's empty seat in the delegates' row. | asm_wbo2 | +asm_w_bo

=== asm_wbo2 | The Question Bo Lan Asked
“I would like to ask,” says Bo Lan, “how many people there are in this room whose mother was sick, and who took the cheaper thing.”
The hall is silent.
“I do not mean it as an insult. I mean I think every one of you has done it. And I think the Law Hall did it on a larger scale. And I think it is not the same as being evil. I think it is being tired.” His voice breaks. “I think we should not be tired any more.”
Master Tan, of the Formation Peak, thumps his stick on the floor, once, and says in a loud voice, “Hear him.”
> truth | Nod to him. | asm_hub_back | +asm_w_bo
> mercy | Help Madam Lan to her feet. | asm_hub_back | +asm_w_bo
> quiet | Bow your head. | asm_hub_back | +asm_w_bo
> inquiry | Ask who among the delegates will say they heard. | asm_hub_back | +asm_w_bo

=== asm_wgu1 | The Chronicle Read Aloud
Master Gui walks to the table with his stick and his chin up, as upright as a young man. He is blind, and he has not been seen in the Assembly Hall in forty years. When he reaches the table he does not sit. He closes his eyes, and says, in a clear dry voice, “I will read from the chronicle of the Fifth Floor.”
He has no book. He reads from memory.
He reads the founding of the Azure Cloud Sect, and the dispute, and the petition. He reads the saint’s name. He reads the line that follows. And the page was torn, and the wound was named the Abyss.
Nobody moves. In the second row, the old man from the Formation Peak has taken off his hat.
+ nine_yuling | You have read the same lines in the bone-lamp. Hearing them aloud, in this room, is a different thing.
+ nine_su_founder | The Elder's hands are very still. The third name on the petition is hers.
> truth | Listen. | asm_wgu2 | +asm_w_gui
> mercy | Hold the Elder's hand. | asm_wgu2 | +asm_w_gui
> quiet | Watch Lian Sheng. | asm_wgu2 | +asm_w_gui
> inquiry | Watch Duan. | asm_wgu2 | +asm_w_gui

=== asm_wgu2 | The Saint
“Her name was Yu Ling,” says Master Gui. “She was struck from the Ledger by the Concord, at the petition of three founding masters of a mountain sect, for the crime of teaching a girl to listen. She tore her own name from the Ledger so that her name could not be used against her pupil. That is the abyss.”
He opens his eyes, which see nothing, and turns his face to the dais.
“I have read the Ledger for sixty years. I have found it a patient book. It does not strike a name. It is struck. By hands. I would ask the Assembly to consider that the Great Sealing is a hand also.”
The hall breathes.
> truth | Stand and bow to him. | asm_hub_back | +asm_w_gui
> mercy | Fetch him a chair. | asm_hub_back | +asm_w_gui
> quiet | Sit very still. | asm_hub_back | +asm_w_gui
> inquiry | Ask the herald whether the chronicle may be entered. | asm_hub_back | +asm_w_gui

=== asm_wso1 | CAPITALS
Old Sou is carried to the witness table in a chair, by two Censors who have clearly drawn the short straw. He bangs his stick on the floor, and speaks, as he has always spoken, in a croak of capitals.
“I AM SOU. I KEEP THE VAULT OF NAMES.” The Assembly winces. “THE STONE IS AWAKE.”
He pauses to let it land.
“A READING WAS ENTERED ON THE STONE. NOT BY ME. BY HER. BY THE ONE WHO WRITES.” His milky eyes roll in the direction of the dais. “HER NAME IS YU LING. SHE HAS WRITTEN IT EVERY NIGHT FOR FOUR MONTHS. I HAVE WATCHED. I HAVE NOT SLEPT.”
He folds his hands on the stick.
“I WOULD LIKE THE ASSEMBLY TO KNOW THAT SHE ASKED ME, ONCE, IF I WAS COLD.”
+ vault_said_yuling | You said her name in the vault. Old Sou remembers.
+ vault_told_duan | You told Duan Wuyi it was a woman. He told the Assembly the same, last night, with his hat off.
> truth | Nod to him. | asm_wso2 | +asm_w_sou
> mercy | Fetch him water. | asm_wso2 | +asm_w_sou
> quiet | Watch the high table. | asm_wso2 | +asm_w_sou
> inquiry | Ask him what he answered. | asm_wso2 | +asm_w_sou

=== asm_wso2 | A Reading Entered
“I ANSWERED,” shouts Old Sou, “THAT I WAS NOT COLD. I SAID I WOULD BRING A BLANKET.” He pauses. “I HAVE NOT YET. THE STAIR IS LONG.”
Laughter, sudden and shocked, ripples round the hall. It dies, as a lamp does in a wind. Old Sou does not seem to notice. He is looking at the empty air above the dais, with an expression that is almost tender.
“I SHOULD LIKE THE ASSEMBLY TO CONSIDER,” he says, “THAT A WOMAN IN A VAULT IS A GUEST. WE ARE NOT CORRECT IN SEALING GUESTS.”
He sits.
> truth | Stand with him. | asm_hub_back | +asm_w_sou
> mercy | Carry the blanket yourself, after. | asm_hub_back | +asm_w_sou
> quiet | Bow to him. | asm_hub_back | +asm_w_sou
> inquiry | Ask the herald to enter the remark. | asm_hub_back | +asm_w_sou

=== asm_wpu1 | The Man Who Remembers
Headman Pu does not mount the dais. He stays at the foot, hat in hand, in his plain brown coat. He has not slept well since the mill-yard. His eyes are red. He speaks in the voice of a man reading his own sentence.
“I ordered the dust for eleven years. I ordered it every spring. I did it because my wife drowned, and the town could not stop screaming, and a physician came and said, here, this will quiet them.” He swallows. “I want the Assembly to know that I would do it again, if I did not know what it did.”
His hand shakes on the brim.
“I did not ask them. I never asked them. I want the Assembly to know that the first time I asked, seventy-one of them said, I would like to remember.”
+ fever_a4_forced_ask | You pushed him to ask. He remembers the barrel under his boots.
+ fever_garden | A row of blue flowers is growing at the edge of the mill, and he carries a root in his pocket.
> truth | Stand beside him. | asm_wpu2 | +asm_w_pu
> mercy | Take his hat. | asm_wpu2 | +asm_w_pu
> quiet | Look at the Alchemy Peak. | asm_wpu2 | +asm_w_pu
> inquiry | Ask the herald how many other towns received the dust. | asm_wpu2 | +asm_w_pu

=== asm_wpu2 | Seventy-One and Sixty-Eight
“Seventy-one wished to remember,” says Pu. “Sixty-eight did not. I do not know which was right. I know that it was theirs to decide.” His voice has steadied. “I should like to ask the Assembly to consider that a town is not a body that can be told how to feel.”
He folds his hat.
“Madam Zhu,” he says, directly, to the Alchemy Peak’s chair, “you gave me a pill once, at a fair. You said it would help me sleep. I did not take it. I put it in my pocket. I have it still.”
He takes it out. It is a small blue tablet. He holds it up.
“I would like to know what it does.”
> truth | Watch Madam Zhu. | asm_hub_back | +asm_w_pu
> mercy | Stand beside him. | asm_hub_back | +asm_w_pu
> quiet | Hold your breath. | asm_hub_back | +asm_w_pu
> inquiry | Ask Duan to have it examined. | asm_hub_back | +asm_w_pu

=== asm_wqi1 | A Bolt of Silk
Madam Qi crosses the hall with a bolt of undyed silk over her shoulder. She has stitched it for seventy years. She sets it down on the table, and unrolls it, and the clerks have to hurry to hold the far end.
“A cloth takes a name,” she says. “It is old craft. A weaver puts a name in a bolt as a prayer. The Concord found that a stitched name is a written name, and bought our cloth to hold its Censors’ names.”
She smooths the silk. Thirty feet of undyed thread lie across the table, names in rows.
“I have unpicked eleven hundred names in sixty years. I would like the Assembly to know that every one of them was asked.”
+ silk_a4_told_qi | She stitched one name for eleven years in a cellar. You know whose.
+ silk_a1 | Your stitch is in the bolt, a line of fifteen, worked by a dyer's boy's hand over yours.
> truth | Take the other end of the cloth. | asm_wqi2 | +asm_w_qi
> mercy | Fetch her a stool. | asm_wqi2 | +asm_w_qi
> quiet | Watch her hands. | asm_wqi2 | +asm_w_qi
> inquiry | Read a line aloud. | asm_wqi2 | +asm_w_qi

=== asm_wqi2 | The Weavers’ Law
“The weavers’ law,” says Madam Qi, “is that no name is woven without consent. It is the only law my guild has ever had.” She looks around the hall. “The Concord has a thousand laws. It has none that says this. I should like to propose one.”
The Slate Peak’s delegate, an old woman in a robe the colour of rain, stands without speaking. She walks to the cloth and puts her palm on it. She stays there, her eyes closed.
“It is a good law,” she says. “I move it.”
Master Tan, behind her, thumps his stick. “Seconded.”
It is the shortest piece of legislation in the Assembly’s history, and the hall takes a moment to understand that it has happened.
> truth | Thank the guildmaster. | asm_hub_back | +asm_w_qi
> mercy | Help her roll the cloth. | asm_hub_back | +asm_w_qi
> quiet | Watch the Slate keeper. | asm_hub_back | +asm_w_qi
> inquiry | Ask Hao Lan to enter the motion. | asm_hub_back | +asm_w_qi

=== asm_whu1 | A Captain’s Helmet
Captain Hu of the Canal Watch walks to the table with his dress helmet under his arm and sets it down before the herald with a clunk. He is a stocky bearded man with a face like a sack of potatoes. He has never spoken before a body of more than six.
“I was on the Silver Bridge at the Midsummer,” he says. “I had a warrant. I was told to arrest anyone who said a name that was not in the book.” He takes a breath. “Then a person said a name. And then a hundred more. And I found that I could not do it.”
He looks at the helmet.
“I have a sick wife,” he says. “Her name is Bian. I said it aloud on the bridge. I have not been arrested. I am told I may yet be. I would like to say it again, here, so the record has it.”
+ lanterns_hu_stood_down | He took his helmet off in front of a hundred strangers. He is wearing it now, with a visible effort.
+ lanterns_a2_stood | You stood at the foot of the bridge. He looks for you in the benches, and finds you.
> truth | Nod to him. | asm_whu2 | +asm_w_hu
> mercy | Fetch him a cup. | asm_whu2 | +asm_w_hu
> quiet | Wait. | asm_whu2 | +asm_w_hu
> inquiry | Ask Duan whether the warrant has been withdrawn. | asm_whu2 | +asm_w_hu

=== asm_whu2 | Bian
“Bian,” says Captain Hu. It echoes round the dome. “Bian. Bian.” He stops. The tears are running down into his beard. “She is not in the Ledger. She was struck for a debt we could not pay. I thought she was dead. She is only quiet.”
Nobody speaks. A thin old woman in the third row has begun, quietly, to say a name of her own.
Then another. Then another. It spreads along the benches, soft, in a hundred small voices, until the dome rings with it. The Assembly of Nine is saying the names of its struck.
Duan Wuyi sets down his staff. “So entered,” he says, very low.
> truth | Say a name yourself. | asm_hub_back | +asm_w_hu
> mercy | Take Captain Hu's arm. | asm_hub_back | +asm_w_hu
> quiet | Let them speak. | asm_hub_back | +asm_w_hu
> inquiry | Watch the high table. | asm_hub_back | +asm_w_hu

=== asm_wme1 | The Seal Inspector
Inspector Mei does not go to the witness table. She walks to the foot of the dais with her iron bar, and lays it on the floor. The clatter echoes. She takes off her grey sash, folds it, and sets it on the iron. She is nineteen years a Censor, and her back is perfectly straight.
“I had a sister,” she says. “Ke-er. She was eleven. The Concord sealed her under the Salt Coast in a wound that closed a hundred and four years sooner than the books said it would.” She does not look at anyone. “I held the lamp. I was nine.”
A rustle goes through the Censors’ bench.
“I have served the Concord nineteen years. I believed it was right. I was told it was right. I do not know now.” Her voice cracks. “I would like to ask what we did, and whom we asked.”
+ barge_mei_ally | She promised a child on a barge that she would not give him to the Assembly. She keeps it.
+ lanterns_mei_joined | You floated a lantern beside hers, for the same name.
> truth | Stand beside her. | asm_wme2 | +asm_w_mei
> mercy | Pick up the iron, and hold it for her. | asm_wme2 | +asm_w_mei
> quiet | Watch Duan Wuyi's face. | asm_wme2 | +asm_w_mei
> inquiry | Ask Hao Lan what the Censors will do. | asm_wme2 | +asm_w_mei

=== asm_wme2 | A Sister
“There was a clause,” says Inspector Mei. “There is a clause. It says the bearer must walk into the wound under her own power. A bearer who is carried is a poor seal.” She stops. “My sister walked. She was eleven. She was told it would be quick. She was told it would not hurt. She was told that she was saving a hundred thousand people.”
She looks at the delegates.
“She was a child. I held the lamp.”
Silence. A long silence, as of a held breath. Then, at the high table, Duan Wuyi rises, and takes off his hat, and bows to her, and the Censors’ bench, one by one, are on their feet.
Mei Qiu does not look at them. She picks up the iron, and sits down on the floor, and puts her face in her hands.
> truth | Go and sit beside her. | asm_hub_back | +asm_w_mei
> mercy | Put your cloak around her. | asm_hub_back | +asm_w_mei
> quiet | Stand guard. | asm_hub_back | +asm_w_mei
> inquiry | Watch the Alchemy Peak. | asm_hub_back | +asm_w_mei

=== asm_wwe1 | The Man Who Was Written Back
Wen Rui rises from the bench near the door. He is small and grey and has no mark on his forehead. He walks to the table with a clerk's walk, and sets down a single sheet. It is a leaf from the Seventh Chancery, with a figure circled in red.
“I was struck for reporting this,” he says. “A wrong sum. A figure in a ledger that did not match the figure in the book. I was twenty-nine. I was honest.” He lifts his eyes. “I have been a member of the Hollow Lotus for twenty-one years. I have been in rooms where the Concord would hang me.”
The hall stirs. He holds up his hand.
“I am here because someone read the Stone, and wrote my name back. I wish to say that I came to ask for nothing. I came to say thank you.”
+ vault_wrote_wen | You wrote his name in gold with a thread of black, in the dark. He knows whose hand.
+ pagoda_wen_friend | You told him you would remember his name. You have.
> truth | Stand and bow to him. | asm_wwe2 | +asm_w_wen
> mercy | Hold the paper for him. | asm_wwe2 | +asm_w_wen
> quiet | Watch the Censors' faces. | asm_wwe2 | +asm_w_wen
> inquiry | Ask him what the Hollow Lotus wants. | asm_wwe2 | +asm_w_wen

=== asm_wwe2 | What the Lotus Wants
“To be written back,” says Wen Rui. It is simple, and it is the saddest thing in the hall. “That is all. We are not an army. We are not a conspiracy. We are those who were struck, and have not yet decided what to do about it.”
He looks at Duan Wuyi.
“Madam Ash, who leads us, was a Censor. She was the best of you. She was struck for refusing to sign a Great Sealing. She walked out of a fire. She is not a threat, Censor-General. She is a witness, as I am, as all of us are.” He bows. “She would like to be heard.”
A shiver passes round the Censors’ bench. Duan Wuyi's face is unreadable. He sets down his brush.
“The Assembly notes the statement,” he says.
> truth | Thank him. | asm_hub_back | +asm_w_wen
> mercy | Help him back to his seat. | asm_hub_back | +asm_w_wen
> quiet | Watch the door. | asm_hub_back | +asm_w_wen
> inquiry | Ask Hao Lan whether the Assembly will hear Madam Ash. | asm_hub_back | +asm_w_wen

=== asm_hub_back | A Pause in the Hall
The clerks change the candle. The delegates shift on the benches. A servant moves among them with a tray of tea. The dome overhead has gone from grey to a low pale gold, and the rain has stopped.
Herald Yan strikes the small gong.
“The Azure Cloud may call its next witness,” he says. His voice cracks only once.
> truth | Return to the bench. | hub_asm_witnesses
> quiet | Return to the bench. | hub_asm_witnesses
> mercy | Return to the bench. | hub_asm_witnesses
> inquiry | Return to the bench. | hub_asm_witnesses

=== asm_d2end | The Third Candle
The third witness sits down. The candle on the high table burns out. The hall is hushed, and a little bleary, as a theatre is after a long play.
Duan Wuyi rises. “The Assembly has heard,” he says. “It will vote tomorrow on the matters before it. I will say to the delegates, as is customary, that they should sleep.”
He does not sleep. In the Guesthouse of Nine Moons that night, you hear him pacing the corridor, his staff tapping on the boards. At the second watch he knocks softly at the Elder’s door. Through the paper wall you hear his voice, low, and hers, lower.
You do not hear the words. You hear the silence that follows, which is longer.
> truth | Sit up in the corridor. | asm_d3s1
> quiet | Sleep, if you can. | asm_d3s1
> mercy | Fetch tea for whoever is awake. | asm_d3s1
> inquiry | Listen at the door. | asm_d3s1

=== asm_d3s1 | The Third Morning
The third morning is cold and clear. A wind off the river rattles the glass in the dome. The delegates take their seats slowly. There are fewer of them; some have not slept; some, you suspect, have been counting stones in their rooms.
Duan Wuyi rises. In his hand is a single sheet of grey paper with a closed-eye seal. He does not read it at once. He lays it on the table, and smooths it with the side of his hand.
“The Second Order,” he says, “of the Concord of Nine Peaks. Drafted by the Council in the winter. Held, sealed, by the Censor-General. To be read, should the wound not close of its own accord by the Midsummer Assembly.” He lifts his eyes. “The wound has not closed.”
Beside you, the Elder has stopped breathing.
> truth | Take her hand. | + | +asm_held_su
> force | Stand up. | ^
> quiet | Keep your eyes on Duan. | ^
> inquiry | Watch Lian Sheng. | ^

=== asm_d3s2 | The Order Is Read
He reads it aloud, in his mild voice, to the end. The Great Sealing of the Crimson Abyss is authorised. It shall be performed by a bearer of the black seed, drawn from among the households of the Azure Cloud Sect, to be sought through the Law Hall’s registers. The bearer shall be placed in the wound. The wound shall close.
He sets the paper down.
“It requires a vote,” he says. “A simple majority of the Nine. It also requires, under clause eleven, that the bearer be named. The Azure Cloud’s registers have been supplied.”
He does not look at Lian Sheng. Lian Sheng rises, unhurried, with a bundle of paper in her arms.
“I have identified the bearer,” she says.
+ censors_overheard | You heard these words once, through a paper wall. They were gentler then.
+ censors_took_order | The Second Order is in your sleeve in your own hand. Mei Qiu glances at it.
> truth | Stand. | +
> quiet | Look at Lian Sheng. | ^
> mercy | Look at the Elder. | ^
> inquiry | Ask the herald if the bearer is permitted to speak. | ^

=== asm_d3s3 | The Register
Lian Sheng lays the register on the table with a flat soft thump. It is a thick volume bound in grey cloth, stained at the corners. She opens it to a marked page. Her finger rests on a line.
“Nine children were seeded with the black lotus by the masters of the Law Hall in the year before the Sealing,” she says. “As a reserve, in case the first failed. Eight were removed from the dormitory on the night of the Sealing, by persons not recorded. The ninth was carried out separately.”
She taps the line.
“Withdrawn. Not struck. Not recorded. Not found.”
She turns. She looks, not at the Elder, but at the witness's bench.
“She has been among us for six weeks,” says Lian Sheng. “She has read the names in the Law Hall. She has carried the Elder's comb. She has the seed in her chest. I ask the Assembly to look at her left palm.”
> truth | Hold up your palm. | +
> force | Close your hand. | ^
> quiet | Keep it at your side. | ^
> deceit | Say you have no idea what she means. | ^

=== asm_d3s4 | A White Scar
There is a scar across your left palm. You have had it since childhood. It is thin and white and runs from the base of the thumb to the edge of the hand. Your teacher in the river-village said it was a burn from a lamp you reached for as a baby.
The Assembly sees it. A hush falls across three hundred delegates. In the first row, the delegate of the Alchemy Peak leans forward, her face avid. At the high table, Duan Wuyi has closed his eyes.
Beside you, the Elder rises. She rises as a tree rises from a field, slowly, with a kind of terrible grace.
“I am the one who hid her,” she says. “I am the Registrar who signed a fifteenth line that was not on the page. I took two children out of the Law Hall on the night of the Sealing, and I was too late for the rest. I should like the Assembly to note that I did not do it for the sect.”
Her voice is perfectly clear.
“I did it because she had a hand that would not stop reaching for the lamp.”
> truth | Stand beside her. | + | +asm_stood_beside_su
> mercy | Take her hand. | ^
> quiet | Say nothing. | ^
> inquiry | Look at the Assembly. | ^

=== asm_d3s5 | The Vote
There is no debate. There cannot be. The motion is put and the delegates rise, one by one, to say their stones. The Sword Peak: Leng Jian stands, and says, "Against." The Beast Peak: Brother Ox, who has put down his egg, says, "Against, and I will fight anyone who says otherwise." The Slate Peak: "Against." The Formation Peak: Master Tan, with his stick: "Against, and a pox on the rest."
Four against. The Alchemy Peak, with a gracious smile: "For." The Gold Peak: "For." The Jade Peak: "For."
Two left. The Cinnabar Peak and the Ash Peak. They have not spoken. They are looking at each other, and at the dais, and at you.
Lian Sheng is smiling very slightly.
+ stairs_leng_friend | Leng Jian said 'Against' without being asked, and sat down with his sword across his knees.
+ stairs_ox_friend | Brother Ox rose from his bench with a boiled egg in each hand.
+ stairs_precedence | The Azure Cloud's chair is in the third row, and the delegates seated around it are not the ones who would have been.
> truth | Wait. Do not speak. | +
> quiet | Look at the Cinnabar Peak. | ^
> force | Look at the Ash Peak. | ^
> inquiry | Count the stones again. | ^

=== asm_d3s6 | The Last Two
The Cinnabar Peak’s delegate is the young man who mends seals. He rises slowly. He has ink on his sleeves. He looks at the Elder, and at the witness, and at the register on the table.
“I was taught,” he says, “that you may not read what you did not help to write. I did not help to write this. I do not think the Concord did either.” He swallows. “Against.”
Five.
The Ash Peak’s delegate is a thin grey man in a robe the colour of old paper. He has not spoken in the Assembly for nineteen years. He rises and stands for a long time with his hands in his sleeves.
“The Ash Peak,” he says, softly, “abstains.”
The hall stares.
“I am told the vote requires a majority of the Nine,” he says. “I do not wish to be the one who decides it.”
> truth | Wait. | +
> quiet | Hold your breath. | ^
> mercy | Look at Duan Wuyi. | ^
> inquiry | Count: five against, three for, one abstain. | ^

=== asm_d3s7 | Five, Three, and One
Five against. Three for. One abstaining. It is not a majority of the Nine. It is not a refusal either. Under clause eleven, the Order requires five in its favour. It has three. It has failed.
For a breath nobody moves.
Then Lian Sheng, who has not moved, says in a clear, unhurried voice, “Under clause twelve, the Censor-General may break a deadlock in the Assembly by his signature. I ask him to exercise it.”
Every head turns to the high table.
Duan Wuyi sits very still. The grey sheet lies in front of him. A brush lies beside it, in a rest. He picks up the brush. He looks at it for a long time.
“I told a boy on a barge,” he says, mildly, “that I was a man who would sign.”
> truth | Say his name. | +
> force | Rise. | ^
> mercy | Put the black ivory king on the table, if you have it. | ^ | | barge_duan_king | You do not carry his king.
> quiet | Wait. | ^

=== asm_d3s8 | The Brush
The brush trembles. The room has become absolutely quiet. A single drop of ink gathers on the tip, black and heavy, and hangs.
And Mei Qiu, from the back wall, says in a flat clear voice, “Censor-General.”
He does not look round.
“I held a lamp,” she says. “I have not forgotten.”
And Hao Lan, beside the register, says in a voice that cracks, “Master Duan, he writes in his sleep. Tong. He writes. I have forty-one drawings. He is a door, and a child, and I would like you to know that.”
The drop falls from the brush. It spreads across the Second Order, a small black star.
Duan Wuyi sets the brush down. “I cannot sign,” he says. His voice is soft, and entirely level. “I find I have a rule against it.”
> truth | Thank him. | asm_flight1 | +asm_duan_refused
> mercy | Go to him. | asm_flight1 | +asm_duan_refused
> quiet | Look at the dais. | asm_flight1 | +asm_duan_refused
> inquiry | Watch Lian Sheng. | asm_flight1 | +asm_duan_refused

=== asm_flight1 | Lian Sheng’s Move
Lian Sheng closes her eyes. When she opens them there is nothing in them at all. “Then it falls to the Council,” she says. “Under clause twenty. A dissenting Censor-General is replaced by his deputy.” She nods to a grey figure at the Censors' bench. “Inspector Fang. If you would.”
The thin Censor who has been sitting quietly at Duan's left hand rises, and takes the brush. He is calm and young and wholly unremarkable. He signs.
It takes four seconds.
“The Great Sealing is authorised,” he says. “The bearer is to be taken into the Concord's keeping. I ask the Assembly Guard to carry out the order.”
At the doors of the hall, iron boots begin to ring.
> force | Run for the Elder. | + | +asm_ran
> quiet | Look for the nearest exit. | ^
> truth | Stand where you are, and say your name, whatever it is. | ^
> mercy | Take Gu's hand. | ^

=== asm_flight2 | Iron Boots
The Assembly Guard come in through the great doors in two files, forty of them, in grey iron, with halberds. They move with the terrible calm of men who have been told something is necessary. The delegates leap up in confusion. Chairs overturn. Somewhere a woman screams.
Ren Qiao is at your shoulder, his sword out. Gu has stepped in front of the Elder with his own. The Elder has not moved. She is looking at the Assembly with an expression of vast and weary sorrow.
“I am sorry,” she says to you. “I had hoped to tell you in a quieter place.”
A halberd flashes. The Guard are ten paces away.
Who can you count on?
+ lanterns_hu_stood_down | Captain Hu has put on his helmet and is standing at the back of the Watch with his eyes shut.
+ stairs_ox_friend | Brother Ox is standing on his bench, an egg in each fist, looking for someone to apologise to.
+ stairs_leng_friend | Leng Jian has drawn his plain steel sword and is standing in the aisle with it pointed at the floor.
> truth | Call on those who have already said they stand with you. | asm_flight3 | +asm_called_allies
> force | Fight your way to the Water Gate. | asm_flight3
> quiet | Take the Elder's hand, and walk. | asm_flight3
> deceit | Take the Elder's cloak, and put it round your own shoulders. | asm_flight3

=== asm_flight3 | Who Stands
The hall breaks into pieces. It is the most extraordinary thing you have seen. The Assembly Guard come on in their iron line, and the delegates, who have sat for three days under blue glass, do not break. They stand. The Slate Peak’s old woman steps in front of a halberd. The Beast Peak’s delegate lowers her great bulk across the aisle like a gate. The old man from the Formation Peak plants his stick in the floor and says, loudly, "I won't." Madam Zhu, of the Alchemy Peak, is the only one who runs.
In the confusion, Duan Wuyi is at your elbow.
"The Water Gate," he says, quietly. "There is a boat. I do not know whose. It has been waiting since the second night." He presses his black ivory king, if you have not already given it to him, into your hand. "Go. I have a rule against stopping you."
> truth | Thank him. | asm_flight4 | +asm_duan_helped
> mercy | Take his hand. | asm_flight4 | +asm_duan_helped
> quiet | Go. | asm_flight4
> inquiry | Ask whose boat. | asm_flight4

=== asm_flight4 | The Water Gate
The Water Gate is a pair of white towers with a chain of lanterns between them, and below them the river runs black and fast. A narrow boat with a tarred hull waits at the steps, a mast folded, a pole in the hands of a woman in a sea-coat the colour of tar.
"Took your time," says Yue Zhaoning, unsmiling. She holds out a hand.
+ silk_yue_owes | She owes you a boat. She is making it very clear that she means this one.
+ silk_yue_favour | You owe her a favour. She has not yet said what it is. She seems to be about to.
+ silk_yue_wary | She remembers that you promised to break her boat. She has brought it anyway.
"I have room for six," she says. "There are seven of you. Somebody can stay and be arrested, or somebody can swim."
> truth | Count heads aloud. | +
> mercy | Hand the Elder aboard first. | ^
> quiet | Look at who has come. | ^
> force | Say you will make room. | ^

=== asm_flight5 | Seven in a Boat for Six
It is a ridiculous boat. It sits low in the water with eight aboard: you, the Elder, Gu, Ren Qiao, Hao Lan with her satchel, Scribe Tong clutching his inkstone, Mei Qiu with her iron bar and a face of thunder, and Yue Zhaoning poling at the stern. The water is an inch from the gunwale. A halberd clatters on the steps behind you.
Duan Wuyi is not aboard. He is standing on the steps of the Water Gate with his staff in his hand and his hat askew, calmly in front of the line of Guards, and as the boat slides out into the stream he bows to you, in the old courteous way of the Censors.
Then the river takes you, and the white towers shrink, and the shouting dwindles to a sound like gulls.
> truth | Watch him until he is gone. | asm_close | +asm_fled
> mercy | Take the Elder's hand. | asm_close | +asm_fled
> quiet | Look at the water. | asm_close | +asm_fled
> inquiry | Ask Yue Zhaoning where the river goes. | asm_close | +asm_fled

=== asm_close | Downstream
The current is strong, and Yue Zhaoning poles with the easy rhythm of someone who has run this reach in the dark a hundred times. The city's lamps fall behind you. The sky overhead is the colour of slate, and then of ash, and then of the first stars.
+[who] asm_duan_helped | Duan Wuyi bowed on the Water Gate steps, and stood in front of forty halberds with his hat askew.
+[who] asm_duan_refused | Duan Wuyi laid down his brush and said that he had a rule against it.
+[who] asm_w_mei | Mei Qiu sits in the stern with her back straight and her face wet, and will not say why.
+[who] asm_w_hu | Captain Hu's Watch held the north door for eleven minutes before they were told to stop.
+[who] asm_called_allies | Those who had stood with you stood in the aisle with their eggs and sticks and swords, and bought you the time.
+[who] asm_ran | You ran. No one has called it cowardice, and no one needs to.
+[lian] asm_pressed_lian | You made Lian Sheng admit that she had read the letters. It did not stop her.
+[lian] asm_denied_lian | You told her she was never right to decide for a town. She did not look at you.
+[tan] asm_bowed_tan | Master Tan thumped his stick in your honour as you left. You heard it across the roofs.
> truth | Sit beside the Elder. | asm_close2
> quiet | Look back until the city is gone. | asm_close2
> mercy | Check on Tong, who is shivering. | asm_close2 | bond:hao+1
> inquiry | Ask Yue Zhaoning how long until the sea. | asm_close2

=== asm_close2 | A Name in the Dark
The Elder has not spoken. She sits in the bottom of the boat with her cloak around her shoulders, and the silver comb in her hair, and her eyes on the river. She is no longer afraid of it. She looks at it with the dry interest of a woman reviewing an old adversary.
“I have a great deal to tell you,” she says, at last. “I have been practising on the river since the mountain, and I have not yet found a sentence. I think I shall have to say it badly.”
She turns.
“Will you let me say it badly?”
+ asm_stood_beside_su | You stood beside her when she said it to three hundred strangers. It was not the same.
+ asm_held_su | You took her hand in the hall. She has not let go of it.
> truth | Tell her yes, of course. | reserve_entry |
> mercy | Take her hand. | reserve_entry |
> quiet | Say nothing, and listen. | reserve_entry |
> inquiry | Ask her when she first knew. | reserve_entry |
`,
  scenarios: String.raw`
$ SU_ASSEMBLY_STAND | trust+4 respect+4 fear+3 | elder | The Elder stands before the Assembly and says the acts were hers, and the player stands beside her.
hostile: You stood beside me. I will not call it loyalty. I will call it the correct place for a witness to be. I will remember it, and I will wait to see what you do with the memory.
wary: Three hundred delegates, and a witness who stood. I did not expect it. I did not ask for it. I find it is not an unpleasant thing to have a person beside you when you say the worst of yourself aloud.
neutral: I said it, and you stood. The two are not the same, but they are related. I have never had a witness who did not look away. I do not have a ledger for it.
warm: When I said the words, your shoulder was against mine. I could feel it through the cloak. It is the first time in fifteen years I have said a hard thing without feeling that I was falling from a height.
devoted: I thought, if I say it, I will break. I said it. I did not. I think it was your shoulder. I think I shall owe you my life, and my honour, and a great many other things. Stay close.
`,
  remarks: String.raw`
% asm_duan_later | since:asm_duan_helped>=20 | duan | I am told the Concord has issued a warrant. It is in my name. I find it surprisingly restful. I have never before been sought for something I wished to have done.
% asm_tan_later | since:asm_bowed_tan>=14 | elder | An old man with a stick sent word downriver. He says the Formation Peak has begun to teach a form that was forgotten. He did not say which. I suspect you know.
% asm_gu_later | since:asm_fled>=10 & bond:gu>=10 | gu | I held a sword in front of the Elder, in front of three hundred people, and did not drop it. My mother will want to know. I will tell her I was brave. I will leave out the part where I was frightened.
`,
};
