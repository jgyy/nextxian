/**
 * Interludes between chapters. The sect talks about what the player has done, so a choice made three chapters ago
 * is still remembered by people other than the Elder. Each scene reads one set of flags through groups of alternatives.
 */
export const rumourScenes = String.raw`
=== rumours_0 | The Lane Remembers
Word of your errands below the gate climbs the steps faster than you do. The stallholders who sell to the sect have the best ears on the mountain.
+[mkt0] haggled_hard | Madam Hu counts your coins twice and still gives the weight she promised. A buyer who haggles hard and is not cheated is rarer than a jade.
+[mkt0] bought_frostleaf | You bought frostleaf at fair weight, and Madam Hu has told the lane you pay what a thing is worth.
+[mkt] asked_market_jade | Someone asked after a humming stone in the lane. No one had one. Three people looked away before they said so.
+[mkt] heard_of_mengjiao_market | The lane says you asked what it remembers of the Elder’s sister. Madam Hu says it remembers a girl who bought lamp oil for the stars.
+[mkt] bought_wick | You asked for the smokeless wick the lantern keepers use. Madam Hu sold it, and has been wondering what for.
+[mkt] wrote_rumors | The rumours you copied onto a talisman are going round the stalls as a rumour themselves.
+[mkt] visited_healer | You smell of bitter root, the lane says, and the guard at the mouth of it wrinkled his nose and let you through.
+[pa] played_openly | At Tang’s tables you played the tiles as they fell and lost twice. It is the only way to earn that room’s respect.
+[pa] kept_the_win | The weighted tile’s winnings clinked in your sleeve all the way up the steps, the lane says.
+[pa] blamed_bo_lan | The lane says you named the boy a cheat to save your own coin. Bo Lan has heard it, and says nothing.
+[pb] covered_bo_lan_bet | You put your coin over Bo Lan’s bet. Old Tang chalked the debt under your name in his neat hand.
+[pb] offered_terms | You offered Tang one honest round for the boy’s debt, and won. He tells it now as though he meant to lose.
+[pb] knelt_for_bo_lan | You knelt on the pavilion boards for the boy. Disciples who laughed then salute you now, a little late.
+[pb] helped_bo_lan_run | You pointed Bo Lan at the ferry steps with a spare talisman. His name is still in Tang’s chalk, waiting.
+[pb] helped_bo_lan_escape | Bo Lan was seen on the lane steps with his collar up and a talisman in his fist. He nodded once and was gone.
+[pb] reported_the_house | You told Bo Lan you would take his story to the wardens, and you did. Whether that was kind depends on whose debt is cleared.
+[pb] asked_about_mother | You asked Bo Lan what the infirmary had tried for his mother and the name of the root. He said it like a prayer.
+[pc] called_wardens | You called the wardens to Tang’s rail in the hearing of the pavilion. Old Tang has never forgiven a favour done to the Law Hall.
+[pc] faced_wardens | You told the wardens exactly what happened at the tables. Two of them wrote it down, one did not.
+[pc] hid_from_wardens | You hid behind the stalls until the lanterns had gone. Madam Hu said nothing, and charged you for tea.
+[pc] named_tang | You told the wardens Old Tang’s chalk ledger was a crime. The tables are quieter this week, which only means the debts have moved.
> truth | Admit what you did, to anyone who asks. | abyss_entry | cult+1
> inquiry | Ask which of the stallholders said which. | abyss_entry
> quiet | Climb the steps without answering. | abyss_entry
> deceit | Let them believe the kinder version. | abyss_entry | karma-1

=== rumours_1 | What the Courtyard Says
Rain has stopped, and the courtyard fills with grey robes, all of them talking about the same thing at the pitch of people pretending not to.
+[gu] struck_gu | They say Gu Hanzhen was cut down on the ledge, and that he got up again with the mist closing the wound behind him.
+[gu] interrogated_gu | They say you held a blade to his throat and asked who took the jade. Nobody knows what he answered.
+[gu] spared_gu | They say you lowered your blade and let the thief speak, which the Law Hall has no word for.
+[gu] brought_gu | They say you brought Gu Hanzhen back on your own account, and that the wardens did not dare take him from you.
+[jade] recovered_jade | They say the Sealing Jade came back warm, as though someone had carried it against the skin all the way up.
+[jade] keeps_secret | They say you gave the Elder half a report, and that she knows which half.
+[lotus] lotus_used_in_abyss | A novice swears the mist drew back on the ledge as if it had been told to. He will not say by whom.
+[hermit] visited_hermit | Someone saw you on the eastern peak path. Nobody goes up to the old master, so the courtyard has decided you must be mad or clever.
+[sister] knows_sister | A warden’s wife says the Elder was heard in her room that night, saying one name over and over, as if learning to say it again.
> truth | Ask what they know, plainly, and listen to all of it. | archive_gate | cult+1
> inquiry | Pick out which of the stories has a source, and follow that one. | archive_gate
> quiet | Let the talk go over you and walk to the east wing. | archive_gate
> deceit | Add a rumour of your own, to see how fast it travels. | archive_gate | karma-1

=== rumours_2 | The Scribes Compare Notes
By the east wing the scribes have gathered in the cloister, ink on every sleeve, comparing what the archive saw of you against what it should have seen.
+[arrive] posed_as_scribe | A copyist swears a stranger sat at the third desk in borrowed grey sleeves and copied the Index faster than he could read it.
+[arrive] followed_footprints | The footprints on the archive floor were wet, and went to the Index, and nobody has been able to explain them.
+[clerk] protected_clerk | They say you promised Lin Yuan his mother’s name would stay out of the ledgers. He has been seen smiling, which alarms everyone.
+[clerk] bribed_clerk | They say a spirit stone changed hands at the clerk’s desk, and that Lin Yuan counted it three times before he looked ashamed.
+[clerk] threatened_clerk | They say you told the keeper of keys you would report him unless he gave you the key. He has not been sleeping.
+[clerk] stole_key | They say the black iron key was gone for an hour and back by morning, and that Lin Yuan swore to the wardens he had been asleep.
+[fire] started_fire | The cedar drawers smell of char. Someone tipped a lamp, and the scribes agree that it was not an accident.
+[fire] confessed_fire | You confessed the fire to the Elder, they say, and she did not strike your name from the register. The scribes find this the most frightening part.
+[letter] saw_index_entry | They say you read Mengjiao’s card and slid it into your sleeve with a face like a closed door.
+[letter] pocketed_letter | A letter is missing from the cedar rows. A copyist saw you fold something thin into your robe and say nothing.
+[letter] copied_letter | You copied every line of a letter into your own notebook and left the original untouched, which the scribes call vandalism and admire.
+[letter] took_sealing_order | The unsigned sealing order is gone from the back of the punishment cabinet, and Lin Yuan’s note in the margin with it.
> truth | Tell them the part of it that is yours to tell. | archive_dawn_2 | cult+1
> inquiry | Ask which scribe saw the most, and buy him tea. | archive_dawn_2
> quiet | Take a bowl of millet and say nothing. | archive_dawn_2
> deceit | Let them believe the version where you were never there. | archive_dawn_2 | karma-1

=== rumours_3 | Below the Archive
The scribes’ talk thins as the stair goes down. Lower in the building the gossip is shorter, and has a damp smell.
+[vault] heard_the_hum | A cellar keeper swears the humming stopped when you sat still, and started again when you stood. He does not like that it listens to you.
+[vault] visited_quarry | The pale vein behind the cellar shelves has been touched. Fresh chalk marks lead down. The quarrymen below say a stranger came out of the wall.
+[lotus] studied_lotus | The reading room table has a clean oval where a stack of papers sat. A scribe says you studied the Blood Lotus technique until your lips moved.
+[lotus] read_unsent_letter | The unsent letter to the Elder is back in its fold, though the fold is different. Nobody dares ask who read it.
+[card] left_card | A card was found on the Elder’s sill the next morning, face up. The warden who found it did not move it, and does not remember why.
+[walk] warden_escort | Ren Qiao walked beside you as far as the memorial. He has not done that for anyone in fifteen years, and the wardens have noticed.
> truth | Admit that you have been below, and ask what they heard. | sutra_door | cult+1
> inquiry | Follow the quarrymen’s chalk marks back to the stair. | sutra_door
> quiet | Climb to the inner stair before anyone else wakes. | sutra_door
> mercy | Leave a little oil at the cellar keeper’s door. | sutra_door | karma+1

=== rumours_4 | At the Foot of the Stair
Before the inner stair, a handful of disciples and a warden or two share a stove, and stop speaking when you come near. Then they start again, lower.
+[door] turned_key | They say you turned the bronze key twice and the gate did not open the second time either.
+[door] read_carvings | A warden says you stood reading the carved lintel as though it were a letter from home.
+[door] copied_lintel | Someone watched you copy all three bands of the lintel into a notebook, character by character, and then check the copy against the stone.
+[name] scraped_name | The struck-through phrase on the lintel has a bright scratch where a thumbnail went across it. Nobody will say whose thumbnail.
+[name] touched_name | You laid your palm on Mengjiao’s name and held it until the stone warmed. The warden on the stair felt the warmth, he says, from three steps below.
+[name] read_top_band | They say you read the oldest band aloud, slowly, so Ren Qiao could hear. He went white, and then he went quiet, which is worse.
+[mist] saw_reflection | The bleeding palm, the white eyes, the woman in the water. By now the story has her smiling.
+[mist] told_ren_reflection | Ren Qiao has told no one what you told him, but he has stopped swearing, which people have noticed.
+[ren] asked_ren_about_gate | You asked Ren Qiao what the Law Hall knows about the gate, and believed his answer. He has been walking taller since.
> truth | Say what you saw at the gate, without decoration. | sutra_stair | cult+1
> inquiry | Ask who among them has been past the memorial. | sutra_stair
> quiet | Warm your hands at the stove and say nothing. | sutra_stair
> mercy | Give the youngest disciple the rest of your millet. | sutra_stair | karma+1

=== rumours_5 | Cell and Wall
Down on the stair the talk comes from the cells, passed along the bars by the prisoners and the wardens who feed them.
+[gu] promised_gu | Gu Hanzhen tells whoever will hear that you promised him his name would be read aloud in the Law Hall. He says it like a man holding a coal.
+[gu] heard_about_mengjiao | The warden says you asked Gu what Mengjiao looked like when she talked about the Law, and then you listened to the whole answer.
+[gu] warned_gu | You warned him the Law would not forgive him for speaking the sect’s secrets. He laughed, the warden says, and then stopped laughing.
+[bell] touched_bell | The central bell on the stone wall hummed when you laid your palm on it. It had not hummed for anyone since the Sealing.
+[bell] took_coin | The old coin shaped like a lotus petal is gone from beside the red channel. The wardens would like it back.
+[bell] named_the_fourteen | You counted the fourteen bells around the centre and named each one. The warden who heard you has asked for a transfer.
> truth | Tell Gu what you promised, in front of the warden. | sutra_hall | cult+1
> quiet | Pass the bars in silence and leave the lamp as it is. | sutra_hall
> mercy | Give Gu half your bread through the bars. | sutra_hall | karma+1
> inquiry | Ask the warden how long the lamp has been burning. | sutra_hall

=== rumours_6 | The Wicks Remember
Old Lin’s niche is a damp little room, but wicks hold gossip as well as flame. Whatever you did on the stair, they have been told.
+[lamp] took_lantern | You lit a lantern from the blue flame and carried it up. Old Lin says the flame followed you one step behind, like a dog.
+[lamp] asked_lamp_keeper | You asked Old Lin what Mengjiao taught her about patience, and waited for the whole answer. Few people wait.
+[oil] paid_lamp_oil | You paid for oil from your own purse and asked for nothing. Old Lin has trimmed a spare wick in your name.
+[oil] claimed_law_name | You told her the Law had sent you to take every lamp on the stair. She did not argue. She has been counting the lamps since.
+[cross] asked_crossing | You asked how the lamp keepers cross the mist without a light. She told you, and she has regretted it, a little, every evening.
+[cross] sat_with_keeper | You sat on her stool beside her and shared the silence. She says it was the first quiet she has not had to pay for.
> truth | Tell Old Lin what you carried up from the stair. | sutra_hall | cult+1
> quiet | Take your lantern and go. | sutra_hall
> mercy | Leave a second measure of oil by her stool. | sutra_hall | karma+1
> inquiry | Ask which lamp was Mengjiao’s. | sutra_hall

=== rumours_7 | The Hall Has Eyes
Word of the sutra hall has gone up the stair ahead of you, whispered between disciples who have never seen it and are sure they have.
+[eye] spoke_to_eye | You knelt by the jade mirror and spoke to the eye as if the Elder stood in it. The wardens say she did.
+[eye] offered_to_burn | You told the eye the sutra should be burned and offered to do it yourself. The disciples say the mirror went dark with surprise.
+[page] answered_voice | They say you answered the voice in the page and asked it who taught it to speak so softly. Nobody has asked that question in a century.
+[page] traced_pencil | The faint pencil line, rubbed out and written again: you traced it with a fingertip, and the lamplight bent.
+[method] memorised_eighth | You committed the eighth method to memory, stroke by stroke. A scribe in the stacks swears he heard you recite it in your sleep.
+[method] copied_price | You copied the price of the method into a notebook and underlined it twice. The Law Hall would like to read that notebook.
+[method] tore_page | A page with Mengjiao’s note is missing from the sutra. The torn edge is clean. It was done by someone who was not afraid.
+[method] offered_name | You offered a name to the mist to see what would open. Nobody will say which name, and you have not told anyone since.
> truth | Tell them what the sutra costs. | jade_eye_return | cult+1
> inquiry | Ask which of them has read the price. | jade_eye_return
> quiet | Let them fill the silence with their own versions. | jade_eye_return
> deceit | Say the sutra was only a book, and a dull one. | jade_eye_return | karma-1

=== rumours_8 | Two Sisters on a Roof
Whatever happened to you in the trance has leaked out of the sutra hall as vision-stories do, a little changed at every telling.
+[roof] saw_young_wanru | You stayed in the vision to see the older girl’s face, they say, and came out with her grey eyes in your memory.
+[roof] called_wanru | You called to the girl on the roof by name, they say, and she turned. Nobody has been able to make the Elder say whether that is true.
+[elder] wants_to_study | You told the mirror you meant to study the sutra, because the Law should not be afraid of its own book. The mirror stayed lit all night.
+[elder] spoke_mengjiao_name | You said Mengjiao’s name the way she wrote it, and the water remembered the shape of the word.
+[water] asked_mengjiao | You asked the figure on the water why she came back and where she had been. She had no answer you could carry up.
+[water] accused_mengjiao | You told her the Elder had never stopped grieving. The sutra hall went cold.
+[water] offered_hand | You held out a hand across the red water and said you would help her climb. The disciples say the water rose to meet it.
> truth | Admit you saw her, and say what she said. | jade_eye_return | cult+1
> quiet | Say nothing, and let the story grow. | jade_eye_return
> mercy | Ask them not to repeat it to the Elder. | jade_eye_return | karma+1
> inquiry | Ask what the rumour says Mengjiao looked like. | jade_eye_return

=== rumours_9 | The Elder’s Windows
In the Law Hall corridor, two wardens and a cook speak about the Elder as though she could hear them, which they suspect she can.
+[ask] told_elder_mengjiao | You told her that Mengjiao had spoken to you. The wardens say the Elder sat down on the altar step and did not stand for a long time.
+[ask] denied_voice | You told her no one had spoken to you. The cook says she looked at you for a long time and said only that she would remember it.
+[ask] asked_about_tablet | You asked why Mengjiao’s name was painted over and then scraped. The Elder’s answer is still going round the kitchens.
+[night] asked_sealing_night | You asked her for the Sealing Night in full, and she told it. Nobody else has ever asked.
+[letter] showed_letter_elder | You held out the letter For Wanru, Read Last, and did not say a word. She read it standing, they say, and her knuckles went white.
+[letter] told_elder_letter | You told her that Mengjiao wrote to her from the mist. The cook says the Elder wept without a sound.
+[letter] kept_letter | You took the letter back from the altar and folded it into your sleeve. The wardens call it theft. The cook calls it kindness.
+[letter] left_letter_elder | You left the letter on the altar, they say, and told her it belonged to the one who could finally read the last page.
> truth | Tell them the Elder asked you to say nothing. | jade_eye_confession | cult+1
> quiet | Pass on with your eyes down. | jade_eye_confession
> inquiry | Ask which of the wardens heard her say the name. | jade_eye_confession
> mercy | Ask the cook to take her tea. | jade_eye_confession | karma+1

=== rumours_10 | Her Second Ledger
The Law Hall corridors are quiet this evening. A clerk and a young warden carry the news like a lamp, shielding it from drafts.
+[signed] absolved_elder | You told her the signature was not hers alone and that the masters should answer for the rest. The clerk heard it through the door.
+[signed] questioned_signature | You asked her, without mercy, why she signed when she already knew what the order was. The warden says she did not answer for a long time.
+[signed] asked_own_name | You asked why she wrote her own name beneath her sister’s, if she could write. The clerk says the Elder laughed once, softly.
+[shard] told_elder_shard | You told her the Sealing Jade might never have been whole. The young warden swears the lamps bent toward you as you spoke.
+[shard] asked_for_last_page | You asked for the last page of the letter, which had never been found. The clerk says she has not stopped looking since.
+[law] challenged_law | You told her the Law was only signatures, and that she could change what she signed. The corridor still rings with it.
> truth | Say it again, where she can hear. | tribunal_summons | cult+1
> quiet | Slip past, and let the clerk keep his secret. | tribunal_summons
> mercy | Ask the clerk to take her a pot of tea. | tribunal_summons | karma+1
> inquiry | Ask the warden what the masters said when they rang the bell. | tribunal_summons

=== rumours_11 | The Bell and the Bridge
The summons has gone round the sect. People who never speak to one another meet in doorways to talk about you.
+[bell] defied_bell | You told her you would not stand before the tribunal unless she stood beside you. The disciples have decided this was either very brave or very stupid.
+[bell] accepted_bell | You said you would answer the bell alone, as she once did. The wardens saluted you in the corridor, and could not say why.
+[bell] warned_elder | You warned her the masters might be using the bell to lead her to Mengjiao. She went quiet, then thanked you.
+[bell] read_summons | You read the summons three times looking for a hidden word. Lin Yuan swears he saw you find one.
+[gu] greeted_gu | You walked down the steps to tell Gu Hanzhen the Elder would hear him. The disciples saw it, and did not look away this time.
+[bridge] visited_bridge | You crossed the rope bridge over the Cloud Gap. The outer disciples there say you walked it without looking down.
+[bridge] bridge_saw_token | The bronze token you turned over on the bridge bore a mark the outer disciples won’t name.
+[bridge] bridge_under_names | You made a careful rubbing of the names under the bridge. Someone has already been asking who has it.
> truth | Tell them you will stand before the bell. | tribunal_summons | cult+1
> quiet | Walk on, and let the courtyard stare. | tribunal_summons
> mercy | Greet the nearest outer disciple by name. | tribunal_summons | karma+1
> inquiry | Ask who has been asking about the rubbing. | tribunal_summons

=== rumours_12 | Forty White Steps
The forty white steps are crowded before dawn. Everyone has come to see the thing that has never happened: the Law Hall judging itself.
+[sparring] accepted_challenge | Qin tells anyone who will listen that you accepted his challenge with open hands. His shoulder, he says, still sings.
+[sparring] asked_for_lesson | You asked Qin to teach you one form and held the posts for the others. He has been teaching it ever since.
+[sparring] described_weight | You described exactly where each pair’s weight went and why they stumbled. Qin took notes, and the court has trained differently since.
+[sparring] mocked_forms | You told Qin the forms looked like a prayer that had forgotten what it was praying for. He has not said a word since.
+[sparring] lost_bout | You let his palm land and fell without breaking. The court calls it the cleverest loss it has ever seen.
+[sparring] held_ground | You held your ground against Qin and pushed back until he yielded. His bruises are the court’s best story this year.
+[sparring] boasted | You told the court you could have beaten Qin if the bell had not interrupted. Qin has been polishing the post you leaned on.
+[sparring] yielded_bout | You bowed before Qin could finish the bout. The court says this showed either wisdom or fear, and neither of them knows which.
> truth | Tell them it was only a bout. | tribunal_masters | cult+1
> quiet | Stand at the foot of the steps and wait. | tribunal_masters
> mercy | Help a stumbling disciple up the first stair. | tribunal_masters | karma+1
> inquiry | Ask who sits where on the dais. | tribunal_masters

=== rumours_13 | The Hall of Bells Remembers
When the bell is quiet, the Hall of Bells is full of whispering, and half of it is about what you did there.
+[approach] climbed_alone | You climbed the forty steps alone and stood before the dais with empty hands. The terraces are still counting how long you stood.
+[approach] knelt_with_gu | You knelt beside Gu Hanzhen and asked the warden to loosen the red silk. The disciples have started to kneel at the foot of the steps too.
+[approach] showed_shard | You held up the wrapped shard where the whole sect could see. Half of them have been afraid of it ever since.
+[approach] spoke_masters_first | You spoke to the masters before the disciples could. They remember that you did not wait for permission.
+[masters] accused_masters | You told the masters they wrote the order and the Elder only signed it. Hu Jingyan’s teacup has not stopped rattling.
+[masters] flattered_masters | You flattered the masters, and they believed you. The disciples will not forgive them or you.
+[masters] revealed_shard_masters | You unwrapped the shard in front of Hu Jingyan and told him the altar was never whole. His hands have not stopped shaking since.
+[masters] asked_lian | You asked Lian Sheng one question, whether Mengjiao ever asked to be released. She has not slept.
+[testify] testified_for_gu | You testified before the whole sect that Gu Hanzhen spoke the truth. The disciples remember it as the first honest word in the hall.
+[testify] testified_truth | You gave the honest account of the archive, the letter and the Index. Half the terraces wept.
+[testify] testified_denial | You told the tribunal you took nothing from the altar and knew nothing. Few believed it, and fewer said so.
+[testify] silent_at_tribunal | You said you would not testify and knelt silently on the step. The silence was heard from the back terrace.
> truth | Say that you meant every word. | tribunal_crowd | cult+1
> quiet | Stand and let them whisper. | tribunal_crowd
> mercy | Ask that Gu be given water. | tribunal_crowd | karma+1
> inquiry | Ask who among the masters has not slept. | tribunal_crowd

=== rumours_14 | After the Stones
The terraces empty slowly. In the quiet after the stones are counted, the sect begins to tell what it saw.
+[crowd] appealed_to_disciples | You stood and asked every disciple who was ever sent to the cells to speak. Some of them did, for the first time.
+[crowd] read_sealing_order | You took the order from Lin Yuan and read the masters’ names aloud. The sect heard every one of them.
+[crowd] calmed_crowd | You lifted both hands and asked the disciples to wait for the Elder. They waited, which they will not do for you again.
+[bell] struck_bell | You struck the great bell once, with an open palm. The sound was heard in the village at the foot of the mountain.
+[bell] stopped_bell | You caught the clapper before the bell could answer. Hu Jingyan says the bell has not been silent that long since the Sealing.
+[bell] asked_elder_bell | You asked the Elder whether she wanted the bell to speak the truth. She did not answer, and the sect heard her not answering.
+[verdict] trusted_verdict | You told her you would abide by any verdict and meant it. The wardens say you were the only one who did.
+[verdict] demanded_masters_judged | You demanded that the masters who signed be judged too. The terraces stood up.
+[verdict] offered_descent | You offered to go down the abyss path alone and bring Mengjiao out. That is the verdict the Elder gave, and the sect says you chose it.
+[verdict] refused_verdict | You refused a verdict made by a bell that was lifted in silence. They say the bell was still ringing in the Elder’s ears when you left.
> truth | Say that the verdict was yours to carry. | descent_return | cult+1
> quiet | Go down the white steps without a word. | descent_return
> mercy | Ask that the masters be given a place to sit. | descent_return | karma+1
> inquiry | Ask Lin Yuan which of the fifteen orders he fears most. | descent_return

=== rumours_15 | The Foundry Fires
The Bell Foundry's smoke goes up the mountain like a rumour, and the foundry hands gossip as they work: loud, quick, and with their hands busy.
+[foundry] visited_foundry | You walked past the apprentices straight to the furnace man, they say, keeping your hands where he could see them.
+[foundry] heard_bell_names | You asked Kuang what the fifteenth name was doing in the clay, and why he poured it. He has not stopped asking himself since.
+[foundry] poured_bronze | You took up the second ladle and helped him pour. The apprentices say it was the first straight pour of the season.
+[foundry] pressed_kuang | You told Kuang you had the Elder’s leave to see the casting book, and held out a paper. He did not read it. He gave you the book anyway.
+[foundry] showed_casting_ledger | You carried the casting ledger up the stair and showed it to the Elder. The foundry hands say the book has been missed for the first time in a century.
+[bell] touched_fifteenth_bell | You pressed your palm to the great bell until it hummed. Kuang swore it hummed a name.
+[bell] took_silk | The white silk is gone from the clapper. The apprentices think a ghost took it. Kuang knows better.
+[bell] told_bell_names | You told the tribunal what the foundry taught you about the bells, without sparing the masters. The foundry hands say it was the only fair casting of the year.
> truth | Tell them what the fifteenth bell is. | descent_return | cult+1
> quiet | Take a ladle of water and go. | descent_return
> mercy | Help the youngest apprentice back to his feet. | descent_return | karma+1
> inquiry | Ask Kuang where the bronze for the bell came from. | descent_return

=== rumours_16 | Rope and Lantern
The descent is common talk at the top of the cleft, where Ren Qiao's warden friends keep a small fire and a longer silence.
+[rope] took_rope | You tied the rope around your waist and fastened the other end to the iron ring. The wardens say no one has done that for fifteen years.
+[rope] ren_followed | You asked Ren Qiao to follow you as far as the first ledge. He did, and came back with white hair at his temple that was not there before.
+[mist] saw_figure_on_ledge | You called out before you reached the ledge, so as not to startle the figure on it. Ren Qiao says that is not the habit of a thief.
+[mist] listened_to_names | You stopped and listened to the fourteen voices and counted every name until they were done. The rope shook the whole time.
+[mist] hummed_back | You hummed the wordless tune back into the mist as if answering a question. Ren Qiao heard it from above, and hummed it all the way home.
+[ledge] met_mengjiao_grey | You walked the last steps and stood face to face with Su Mengjiao. The wardens at the top of the cleft felt the rope go slack.
+[ledge] said_mengjiao_name | You said her name aloud the way the girl in the fourteenth voice did. The wardens say the mist said it back.
+[ledge] waited_for_mengjiao | You waited at the edge of the grey for her to speak first. Ren Qiao calls this the bravest thing he has seen a stranger do.
+[ledge] almost_left | You turned to climb back and leave the figure where she stood. The rope held. So did you, after a moment.
> truth | Tell the wardens that you spoke to her. | descent_mist | cult+1
> quiet | Sit by the fire and say nothing. | descent_mist
> mercy | Put another log on the fire for the wardens. | descent_mist | karma+1
> inquiry | Ask which of them heard the tune. | descent_mist

=== rumours_17 | What She Asked, What You Said
The cave in the cliff has no gossips, but the mist carries what was said there up the cleft in pieces, and the wardens at the top assemble them.
+[ask] asked_how_seal | You asked her how she has kept the seal in place for fifteen years without the jade. The mist, the wardens say, listened for the answer.
+[ask] asked_about_wanru | You asked her whether she thinks of her sister. The wardens heard something break softly in the dark.
+[ask] showed_coin | You held out the bronze coin from the wall of bells. The wardens say the red water in the cave turned to gold for a breath.
+[ask] drew_steel | You drew your sword and said you were sent to bring her back by force. The mist closed around the blade.
+[answer] promised_message | You promised to carry her message word for word. The wardens say the cave breathed out.
+[answer] offered_to_stay | You offered to stay in the cave and speak the names beside her every night. She would not let you.
+[answer] called_through_shard | You held your shard against hers and called through the stone. The wardens swear the whole cleft hummed one note.
+[answer] refused_to_listen | You told her you had come to bring her out, not hear a story. She closed her eyes, and the mist did not forgive it.
> truth | Tell the wardens the message is for the Elder only. | mist_remembers | cult+1
> quiet | Climb on without a word. | mist_remembers
> mercy | Thank the wardens for holding the rope. | mist_remembers | karma+1
> inquiry | Ask Ren Qiao what the cleft sounded like from above. | mist_remembers

=== rumours_18 | At the Law Hall Doors
The names are on your tongue still, and the disciples at the great doors know it, and make way.
+[doors] carried_names | You walked straight into the Law Hall with the names on your lips, and did not stop for anyone. The wardens did not try.
+[doors] waited_at_door | You waited on the threshold for the Elder to look up. The wardens say that was the first time anyone had asked her permission with their feet.
+[doors] told_ren_names | You told Ren Qiao what Mengjiao said about the Law and asked him to say it back. He did, word for word, and then he sat down on the step.
+[names] read_all_fifteen | You read all fifteen names again, slowly, looking at each master as you said it. The sect agrees that you did not blink.
+[names] stopped_at_mengjiao | You stopped after Mengjiao’s name and let the silence in the hall say the rest. It said it.
+[names] named_masters | You named each master who signed the orders and said what his seal did to the name beside it. The masters did not leave their chairs until you had finished.
+[names] knelt_reading | You read the names and then knelt at the foot of the dais so the Elder could see your face. The wardens have not stopped talking about it.
> truth | Say that you read them for her. | mist_names_read | cult+1
> quiet | Walk to the foot of the dais. | mist_names_read
> mercy | Ask a servant to bring the masters water. | mist_names_read | karma+1
> inquiry | Ask Lin Yuan whether the orders had been read before. | mist_names_read

=== rumours_19 | After the Masters
Doors do not close quietly in the Law Hall. Everyone who was there tells it a little differently, and everyone agrees about the doors.
+[masters] stopped_lian | You stepped between Lian Sheng and the door and asked her to stay and answer for what she signed. She stayed.
+[masters] let_masters_go | You let the masters walk out into the mist and told the Elder justice could wait. The disciples will not forget that you let them go.
+[doors] shut_doors | You closed the great doors of the Law Hall before the mist could come in. The warden who helped you says the mist knocked.
+[doors] opened_doors | You threw the doors wide so the disciples could see the Elder and hear her. The Hall is full of cold air and witnesses.
+[order] took_original_order | You took the original sealing order from her hand and held it up so the Hall could see it. The wardens say her hand did not shake.
+[order] knows_sealing_truth | You told her you did not need the paper, because you already knew what it said. She looked at you for a long time.
+[order] asked_to_witness | You asked her to show you the Sealing as she remembers it, from the first brushstroke. She said she would, and that you would not like it.
+[order] returned_order | You gently refused the paper and told her to keep it until she could show it herself. She has not let it out of her sleeve since.
> truth | Tell them what you saw in the Hall. | sealing_night | cult+1
> quiet | Take the paper if she offers it, and say nothing. | sealing_night
> mercy | Ask the Elder to sit. | sealing_night | karma+1
> inquiry | Ask Lin Yuan to copy the order before it changes hands. | sealing_night

=== rumours_20 | The Lake Keeps Count
Those who have taken the still-water ferry keep their silence in a particular way. They talk very little, and they all say the same name.
+[dock] visited_ferry | You asked the boatman for passage and offered nothing but your willingness to be quiet. He has been polishing his oar ever since.
+[dock] asked_about_red_name | You asked whose name was painted in red on the boat, and whether he had ever been asked to say it. He has since said it twice.
+[water] spoke_to_water | You spoke to the water as to a student who has finally understood. The ferrymen say the water did not ripple for an hour.
+[water] counted_passengers | You counted the faces in the water until the number matched the dead. The ferrymen call it the only honest count of the year.
+[shore] touched_far_stone | You traced the fresh letters on the far-shore stone with a fingertip. The boatman says no one has ever dared.
+[shore] carried_wick | You picked up a half-burned wick and carried it back to the boat. The ferrymen say the lake wants it back, one day.
+[vow] promised_ferry | You promised the lake you would say her name tomorrow and the day after. The ferrymen have started saying it too.
+[vow] paid_with_wick | You gave the lake a lamp wick and told it where the flame had been. The ferrymen say the lake was grateful.
> truth | Tell the ferrymen what the lake told you. | sealing_night | cult+1
> quiet | Sit on the pier until it grows dark. | sealing_night
> mercy | Pay a second fare, for someone who cannot. | sealing_night | karma+1
> inquiry | Ask the boatman whose name is on the last stone. | sealing_night

=== rumours_21 | Witness at the Altar
On the morning after the vision, the Law Hall's servants find the great doors open, and everyone who comes in feels they have missed something.
+[ring] stood_in_ring | You stepped into the ring of masters and stood beside the kneeling woman, close enough that the young Registrar could hear you breathing.
+[ring] watched_from_pillar | You stayed by the pillar at the edge of the hall where no one would notice you. The masters did not, and that is its own kind of verdict.
+[ring] whispered_to_elder | You leaned toward the young Registrar and whispered that she still had time to refuse the brush. The servants say her hand did not stop shaking.
+[sign] witnessed_signing | You let her finish her signature and watched the masters nod. It is the one thing you could not make yourself undo.
+[sign] stopped_signing | You reached across the altar and put your hand over her brush. The ink still has the print of your palm.
+[sign] offered_self_sealing | You told the masters you would go down in her place if they would let the young Registrar rest. They laughed. Then they stopped.
+[sign] ruined_order | You knocked the brush from her fingers and let the ink run across the blank. The servants say the order has been dry for fifteen years and still wet to the touch.
> truth | Say that you saw it as she remembers it. | sealing_path | cult+1
> quiet | Stand in the Law Hall and let the lamps burn. | sealing_path
> mercy | Ask the servants to light another lamp. | sealing_path | karma+1
> inquiry | Ask who held the lacquer tray. | sealing_path

=== rumours_22 | The Cleft in Memory
The path at the top of the cleft is the oldest thing in the sect that still hurts, and those who saw you there lower their voices to speak of it.
+[call] called_to_mengjiao | You called across the cleft to the chained woman and told her you would carry something for her. The masters turned. She did not.
+[call] stepped_to_chains | You stepped toward the chains and knelt beside Mengjiao, ready to break them. The masters fell silent in a ring.
+[call] stayed_back | You stayed where you were at the top of the path and said nothing as the masters led her to the edge. She did not look back at you either.
+[call] warned_masters | You warned the masters the mist was rising faster than their numbers. They did not listen. They remember now that you said it.
+[last] let_her_fall | You stepped back and let the masters do what the Law had decided. The Hall remembers this as the day you did nothing.
+[last] took_jade_sealing | You reached past the masters, took the jade from its tray, and told Mengjiao to hold it. The masters call this the second theft.
+[last] sang_with_mist | You hummed the wordless tune from the vault and let the mist answer instead of the masters. The ring of masters unmade itself.
+[after] asked_return | You asked whether Mengjiao was coming up the stair and whether she would be welcome. The Elder said she did not know. Then she said she hoped.
+[after] bowed_at_altar | You stayed beside the empty altar and bowed before the cracked base. The servants bowed too, a beat later.
+[after] asked_ren_lantern | You turned to Ren Qiao and asked him to carry the lantern ahead of you. The warden did not say a word. He lifted it.
> truth | Tell the Elder what you did and did not do. | judgment | cult+1
> quiet | Look at the empty altar, and breathe. | judgment
> mercy | Offer the Elder your arm. | judgment | karma+1
> inquiry | Ask her what she remembers of the tune. | judgment
`;

/**
 * How the interludes are wired. `next` is where the scene's choices lead. `edges` lists the choices that now lead
 * here instead: in each `[from, to]`, every choice of scene `from` that led to `to` is sent to this interlude. The
 * chain from an interlude must end at the `to` it replaced, which the tests check.
 */
export const rumourFlow: { id: string; next: string; edges: [string, string][] }[] = [
  { id: "rumours_0", next: "abyss_entry", edges: [["market_return", "abyss_entry"]] },
  { id: "rumours_1", next: "archive_gate", edges: [["return_hall", "archive_gate"]] },
  { id: "rumours_2", next: "rumours_3", edges: [["archive_dawn_2", "sutra_door"]] },
  { id: "rumours_3", next: "sutra_door", edges: [] },
  { id: "rumours_4", next: "sutra_stair", edges: [["sutra_door_3", "sutra_stair"], ["sutra_inscriptions_3", "sutra_stair"], ["sutra_mist_call_3", "sutra_stair"]] },
  { id: "rumours_5", next: "sutra_hall", edges: [["sutra_gu_cell_3", "sutra_hall"], ["sutra_bell_wall_2", "sutra_hall"]] },
  { id: "rumours_6", next: "sutra_hall", edges: [["lantern_return", "sutra_hall"]] },
  { id: "rumours_7", next: "rumours_8", edges: [["sutra_mengjiao_voice_3", "jade_eye_return"]] },
  { id: "rumours_8", next: "jade_eye_return", edges: [] },
  { id: "rumours_9", next: "rumours_10", edges: [["jade_eye_bell_2", "tribunal_summons"], ["jade_eye_accusation_2", "tribunal_summons"]] },
  { id: "rumours_10", next: "rumours_11", edges: [] },
  { id: "rumours_11", next: "tribunal_summons", edges: [["bridge_return", "tribunal_summons"]] },
  { id: "rumours_12", next: "tribunal_summons", edges: [["court_return", "tribunal_summons"]] },
  { id: "rumours_13", next: "tribunal_bell_rule", edges: [["tribunal_crowd_2", "tribunal_bell_rule"], ["tribunal_testimony_2", "tribunal_bell_rule"]] },
  { id: "rumours_14", next: "descent_return", edges: [["tribunal_vote_2", "descent_return"]] },
  { id: "rumours_15", next: "tribunal_bell_rule", edges: [["foundry_return", "tribunal_bell_rule"]] },
  { id: "rumours_16", next: "descent_mengjiao", edges: [["descent_voices_2", "descent_mengjiao"], ["descent_ledge_2", "descent_mengjiao"]] },
  { id: "rumours_17", next: "mist_remembers", edges: [["descent_mengjiao_3", "mist_remembers"]] },
  { id: "rumours_18", next: "rumours_19", edges: [["mist_wanru_message_2", "sealing_night"]] },
  { id: "rumours_19", next: "sealing_night", edges: [] },
  { id: "rumours_20", next: "sealing_night", edges: [["ferry_return", "sealing_night"]] },
  { id: "rumours_21", next: "rumours_22", edges: [["sealing_return_2", "judgment"]] },
  { id: "rumours_22", next: "judgment", edges: [] },
];
