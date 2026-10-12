/**
 * Side Path: The Left Cloister. Opened from the Law Hall by a woman, and by no one else. The women of the Law Hall keep a record of the fourteen
 * that the Law does not: a bundle of lullabies, one leaf for each name. The path ends back at the memorial, with the Elder
 * standing in a doorway she has not crossed in fifteen years.
 */
export const leftCloisterSource = String.raw`
=== lc_0 | The Left Cloister
Past the memorial door, away from the tablets and the Elder’s silence, a low arcade runs off to the left, hung with washing. The disciples call it the Left Cloister, and the Law Hall calls it nothing. A woman in grey is wringing a sheet at the well, and she looks at you as one woman looks at another who has come up the mountain alone: first at your feet, then at your hands, and then, kindly, at your face.
“There is rice,” she says. “Nobody who climbs this mountain alone is asked a question before she has eaten. It is the cloister’s only rule, and the Law Hall has never found a way to forbid it.”
+[dao] hero:dao=alchemy | The rice smells of ginger and bitter orange; someone has cooked for the tired, and you know the herbs by their steam.
+[dao] hero:dao=forging | The well’s windlass has been mended with a smith’s rivet, and the rivet is yours in every particular but the hand.
+[dao] hero:dao=talisman | A paper ward hangs above the arcade, so faded you almost miss it. It is written for travellers, and someone renews it every spring.
+[dao] hero:dao=formation | The washing lines run in a pattern like a ring-array, and the sheets between them hang still in a wind that moves the rest.
+[dao] hero:dao=beast | A grey cat sits on the well-head, and does not look up, and the whole cloister moves round it as round a small sovereign.
+[dao] hero:dao=sword | The woman wrings the sheet in two clean twists, and you note the economy of it, and the way she stands with her weight low.
+[dao] hero:dao=healing | Her knuckles are chapped to the wrist, and she hides them without thinking. You have seen hands like that on a ward.
+[dao] hero:dao=fate | She says “alone” as one says a word that has been spoken over her in her turn, and you read the weight in it before the rest.
+[dao] hero:dao=none | Your open hands are the first thing she looks at, and the first thing she approves.
> mercy | Sit with the women at the long table and eat what is put in front of you. | lc_1 | +lc_fed
> inquiry | Ask who keeps the cloister, and by whose leave. | lc_1 | +lc_asked
> quiet | Wash a sheet beside her at the well, and say nothing until she does. | lc_1 | +lc_washed
> truth | Tell her you must see the Elder first, and will eat afterward. | lc_1 | +lc_duty

=== lc_1 | The Spoon-Song
Each woman at the long table has a wooden spoon with a notch cut in the handle, and the notches are not for counting. The cloister’s custom is this: a woman who is fed here gives her name in a line of song, and the table sings it back once, so that no name in the cloister is ever only written down. “Ding Aizhu,” sings the girl beside you, in a voice no bigger than a thread, and the table answers in a murmur that is half a lullaby. Now it is your turn. The spoon is already in your hand.
+ lc_fed | The rice is hot, and no one has watched you eat it. That is the cloister’s second courtesy.
+ lc_washed | Your hands are still damp from the sheet, and the girl beside you has noticed, and approves.
+ lc_duty | You said the Elder first, and Aizhu is whispering it to the next woman as a thing to be remembered.
> truth | Sing your own name, and let the table sing it back. | lc_2 | +lc_sang
> quiet | Give a name you have not used before, and hear it sung. | lc_2 | +lc_newname
> mercy | Sing the name of someone who is not at the table, and let the cloister sing it for them. | lc_2 | +lc_sang_other
> deceit | Pass the spoon on unsung, and say you do not trouble tables with names. | lc_2 | +lc_unsung

=== lc_2 | The Sisters’ Book
After the meal the keeper of the cloister takes down from the shelf above the hearth a bundle of folded rice-paper leaves tied with blue thread. She is Ge Shuyin, sixty, broad, flour on both wrists. “The Law Hall keeps its ledger in ink,” she says. “We keep ours in verses. Each leaf is a lullaby for one of the fourteen, with a line of who they were: one who hummed at her sewing, one who counted the steps of every stair.” She spreads them on the table. There are fourteen. The last is blank but for one word at its head, in a young hand: Listening.
+[dao] hero:dao=alchemy | The paper has been steeped in a pale herb-wash that keeps damp off the ink. Your nose names it before Ge Shuyin does.
+[dao] hero:dao=forging | The thread is wound with a smith’s whipping, tight and flat. Someone in this cloister once learned the forge.
+[dao] hero:dao=talisman | The verses are lettered in the script used for protective charms. Each leaf is a small ward against forgetting.
+[dao] hero:dao=formation | The leaves lie in a ring with the blank one at the gap, and the ring hums faintly in your teeth.
+[dao] hero:dao=beast | The cat has come in and sits on the fourteenth leaf, and will not be moved. Ge Shuyin says it sits there every night.
+[dao] hero:dao=sword | The verses keep the metre of a sword-kata counted aloud. Each line is a stroke, and the fourteenth is the pause.
+[dao] hero:dao=healing | You read the lines for who they were and hear what troubled them: a cough, a fever, a habit of not eating. It is a case-book.
+[dao] hero:dao=fate | Fourteen leaves and a blank. The dates written on them fall on no festival, and on every anniversary but one.
+[dao] hero:dao=none | Ge Shuyin sets a leaf in your open hands as one hands a child a bird.
> inquiry | Read the leaves one by one, and ask about the ones you do not understand. | lc_3 | +lc_book_read insight+2
> mercy | Ask whether anyone sings them still, and offer to sing one. | lc_3 | +lc_book_sang karma+2
> truth | Tell Ge Shuyin that the Law Hall’s ledger lists the same fourteen, and that you have not seen the verses. | lc_3 | +lc_told
> force | Ask to take the bundle to the Elder as proof that the cloister keeps a second record. | lc_3 | +lc_demanded karma-2

=== lc_3 | The Tune Without Words
When the dishes are cleared the women hum, low and without words, a tune that goes up three notes and stops, as if listening for the fourth. You know it. You have heard it as a draught under a door, and as a voice in the mist that was not quite a voice. Ge Shuyin watches your face and nods. “Su Mengjiao learned it here at fifteen,” she says. “She had the best humming voice in the cloister. When the masters took her to the altar she said she would carry it down with her.”
+ lc_sang | The table sang your name once, and it sits in the room now like a coat on a hook.
+ lc_sang_other | The name you sang for someone else still hangs in the air, and Aizhu mouths it to herself.
+ lc_unsung | You passed the spoon, and Ge Shuyin has not forgotten it, though she does not say so.
> truth | Tell them you have heard it in the mist, and that someone is still humming it. | lc_4 | +lc_tune_told
> mercy | Hum the three notes with them, and wait for the fourth. | lc_4 | +lc_tune_hummed
> quiet | Say nothing, and let the tune go on without you. | lc_4 | +lc_tune_kept
> inquiry | Ask what the fourth note is. | lc_4 | +lc_tune_asked

=== lc_4 | Mother Ge
Ge Shuyin lights a pipe she does not smoke. “Wanru kept these keys at twenty,” she says, and shows you an iron ring on a nail by the door. “The youngest ever. She hung the Sisters’ Book on this very nail, and every night for eight years she came to the door and sang her own name last, so the table could sing it back. Then came the Sealing. She has not crossed our threshold in fifteen years. We have left her key where she can see it.”
+[talent] hero:talent=wood | The nail has sprouted a green hair of moss, and the iron ring is warm.
+[talent] hero:talent=fire | The hearth behind her flares when she speaks the Elder’s name, and settles when she stops.
+[talent] hero:talent=earth | The doorstep is worn into a shallow bowl by a thousand feet; one of the hollows is the Elder’s.
+[talent] hero:talent=metal | The ring chimes as she lifts it, one clear note, and you hear it long after.
+[talent] hero:talent=water | The cloister’s well gives a long low sound under the floor, like a held breath being let go.
+[talent] hero:talent=mixed | The room has a little of everything in it: warmth, damp, iron, wood and stone, all listening.
+[talent] hero:talent=heaven | The air shivers at the heaven-mark in you, and Ge Shuyin looks at your forehead and then politely away.
+[talent] hero:talent=late | Ge Shuyin tells you she was twenty-nine when she learned to hum a tune through, and that you have time.
> inquiry | Ask why the Elder stopped coming. | lc_5 | +lc_why
> mercy | Take the iron ring down, and weigh it in your hand. | lc_5 | +lc_key_held
> truth | Tell Ge Shuyin the Elder signed fourteen names, and that you do not know whether she can forgive herself. | lc_5 | +lc_truth_elder
> deceit | Say the Elder has asked after the cloister, though she has not. | lc_5 | +lc_lied_elder karma-2

=== lc_5 | What the Cloister Asks
The women have gathered round the hearth. The youngest, Ding Aizhu, says it first, very quickly, as if she has practised: the Law Hall will burn the Book if it finds it, now that the Jade is stolen and the mist rises. Somebody must take it out of the Law Hall, down the abyss path, so that the fourteen may hear their own lullabies. They have looked at every woman who has come up the mountain this year. They have chosen you.
> mercy | Take the Book, and promise to sing the fourteen their leaves yourself. | lc_6 | +lc_book_taken item+lc_sisters_book karma+2
> inquiry | Offer to copy the Book in your own hand, and leave the leaves where they are. | lc_6 | +lc_book_copied insight+2
> quiet | Tell them the Book belongs on its shelf, and that you will guard the shelf. | lc_6 | +lc_book_guarded
> force | Tell them you will not carry a record the Elder has not seen. | lc_6 | +lc_book_refused karma-1

=== lc_6 | A Step on the Cloister Stones
Someone is crossing the courtyard. The women go quiet one by one, as water stills when a stone is dropped in it. The step is slow and exact, and it stops a pace short of the threshold. Elder Su Wanru stands in the arcade with her hands in her sleeves and a face the colour of old river stone. She looks at the iron ring on its nail, then at the table, then at you. “You left me at the tablet,” she says, “and I find that I followed. I have not walked this arcade in fifteen years.”
+ lc_book_taken | The Book is in your sleeve, a bundle of blue thread against your wrist, and she can see the thread.
+ lc_book_copied | Your copy lies on the table, wet, and she reads the first line of it upside-down.
+ lc_book_refused | You said you would not carry a thing she had not seen. She remembers that you said it.
> mercy | Step aside from the door and say nothing. | lc_7 | +lc_door_opened
> truth | Tell her plainly what the sisters have asked of you. | lc_7 | +lc_told_elder npc:LC_ELDER
> quiet | Stand between her and the table, and wait. | lc_7 | +lc_between
> inquiry | Ask her whether she remembers the fourth note. | lc_7 | +lc_fourth npc:LC_ELDER

=== lc_7 | The Elder at the Left Door
Wanru does not cross the threshold. She puts one hand on the doorpost, and the other, trembling slightly, over the iron ring. “Fifteen years,” she says. “I keep a drawer in the Law Hall for what I felt when I signed, and I told myself it was the only record. I see the cloister has been keeping the other.” She looks at the leaves on the table. “Does it say what I was like?”
Ge Shuyin does not answer. The cloister waits. In the quiet the cat gets down from the fourteenth leaf, stretches, and goes out past the Elder’s hem without being noticed.
> truth | Read her the first leaf aloud, as it is written. | lc_8 | +lc_read_aloud
> mercy | Hold out the blank leaf, and ask her what she remembers. | lc_8 | +lc_leaf_offered
> quiet | Say nothing, and let Ge Shuyin answer. | lc_8 | +lc_ge_answers
> deceit | Tell her the Book says only that she was just. | lc_8 | +lc_flattered karma-2

=== lc_8 | The Fourteenth Leaf
Ge Shuyin sets a brush on the table. The fourteenth leaf is blank but for the single word at its head, Listening. “Someone must write who she was,” says Ding Aizhu. “None of us ever knew her.” The Elder has not moved from the doorpost. Everyone looks at her, and then, one by one, everyone looks at you.
+ lc_leaf_offered | You held the leaf out to her, and she has not looked at it.
+ lc_read_aloud | The first verse is still in the air, and the Elder’s lips have moved with it.
> truth | Write what you know of her: that she is remembered by name in a cloister and in a hall. | lc_9 | +lc_wrote_truth
> mercy | Write a line of the lullaby, and leave her name unwritten. | lc_9 | +lc_wrote_song
> quiet | Let the leaf stay blank, and set the brush down. | lc_9 | +lc_leaf_blank
> inquiry | Ask the Elder what she remembers of the fourteenth, and write it as she says it. | lc_9 | +lc_wrote_elder npc:LC_ELDER

=== lc_9 | Out Through the Arcade
The women walk you to the end of the arcade. Ge Shuyin puts a rice-cake in your hand, and Ding Aizhu runs back for the blue thread. The Elder is already gone; you hear her footsteps crossing the courtyard, slow and exact, and then not slow. Behind you someone begins the tune again, three notes, and the fourth is hummed this time by a voice you have not heard, thin and uncertain, from the well.
+ lc_book_taken | The Book is warm against your ribs. You will carry it to the bottom of the mist, and sing the fourteen their leaves.
+ lc_book_guarded | The Book is on its shelf, and you have promised to guard the shelf. It is a promise that costs more than it sounds.
+ lc_wrote_truth | The ink on the fourteenth leaf is still wet, and you can read the line from here.
> truth | Thank Ge Shuyin and say you will come back to sing. | back8_jade_eye_tablets_2 | +lc_done karma+1 npc:LC_REPORT
> mercy | Leave the rice-cake on the well-head for the cat, and go. | back8_jade_eye_tablets_2 | +lc_done karma+1 npc:LC_REPORT
> quiet | Go back through the arcade without a word, humming the three notes. | back8_jade_eye_tablets_2 | +lc_done qi+2 npc:LC_REPORT
> inquiry | Ask Ding Aizhu what the fourth note is. | back8_jade_eye_tablets_2 | +lc_done insight+2 npc:LC_REPORT
`;
