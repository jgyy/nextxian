/**
 * Side Path: The Third Door. Opened from the Law Hall by someone who gives no answer to which of two benches is theirs, and by no one else. Between the Left
 * Cloister and the Right Yard a narrow door in the wall is kept oiled by a sweeper who sorts whatever the Law cannot: messengers, foundlings, the
 * struck-out, and anyone who will not say. It opens on the Registrar’s back stair, where a message has waited for fifteen years. The path ends back at the
 * memorial, with the Elder at the foot of the stair.
 */
export const thirdDoorSource = String.raw`
=== td_0 | The Third Door
In the passage beside the memorial a clerk at the Law Hall’s side desk has a ledger with two columns ruled in it, one headed in red and one in black, and a pen. He asks your column without looking up. When you do not answer, he looks up, and he looks for some time. He is Ruan Fenglin, a thin man in his fifties with ink on his lip, and he sets down the pen with the care of someone who has known this moment would arrive and has long since decided to be kind about it. “There is a third door,” he says. “It is in the wall between the cloister and the yard. Sweeper Hou keeps it. He will tell you what it is for.”
+[dao] hero:dao=alchemy | The clerk’s ink smells faintly of gall and honey; he has been dosing himself for a cough and not mentioning it.
+[dao] hero:dao=forging | His pen-knife has been ground a hundred times, down to a thread. Somebody here knows how to keep an edge.
+[dao] hero:dao=talisman | The ledger’s ruling is perfect, and the blank column has been ruled as carefully as the two that are used.
+[dao] hero:dao=formation | The two columns of the ledger stand like twin pillars of an arch, and the blank space between them is where the weight goes.
+[dao] hero:dao=beast | A sparrow sits on the desk and does not seem to be anyone’s, and the clerk makes no move to shoo it.
+[dao] hero:dao=sword | You note how close he sits to the door, and that his chair is angled for it. He is a man who has been surprised before.
+[dao] hero:dao=healing | His hands tremble a little at the end of every line. You wonder how long it has been since he was asked how he was.
+[dao] hero:dao=fate | The page is dated, and the date is the fifteenth. You decide not to ask what happened on the fourteenth.
+[dao] hero:dao=none | He glances at your hands, which hold nothing, and writes, in the blank column for the first time that day, a single stroke.
> truth | Tell him you give no answer, and ask for the third door. | td_1 | +td_asked_door
> quiet | Thank him, and leave without saying a word. | td_1 | +td_left_silent
> inquiry | Ask him what the third column is for. | td_1 | +td_asked_column
> deceit | Give a column at random, and see which door he points to. | td_1 | +td_guessed karma-1

=== td_1 | Sweeper Hou
The door in the wall is the colour of the wall, with a hinge so well oiled that it makes no sound at all. The sweeper who keeps it is a stooped man called Hou Zhe, with a broom he has worn to half its length. “Messengers use it,” he says. “Foundlings. Anyone the Law has struck out. Anyone who will not say.” He sweeps a pace of flagstone in front of the door and stops. “I do not ask who is who. I only ask which way you are going, and whether you would like the lamp.”
+ td_asked_door | He has been told to expect you, and he has already lit the lamp.
+ td_left_silent | He nods at your silence as at a password.
+ td_asked_column | He says the column is for those who do not fit the other two, and that it has never once been empty.
> mercy | Take the lamp, and thank him for the oil. | td_2 | +td_lamp
> inquiry | Ask where the door leads. | td_2 | +td_asked_where
> quiet | Go through the door without taking the lamp. | td_2 | +td_dark
> truth | Tell him who you are, as far as you know it. | td_2 | +td_said_who karma+1

=== td_2 | The Back Stair
The door gives onto a narrow stair that climbs inside the wall, and the stair is dry and clean and smells of beeswax. The treads are worn in a pattern: a short step and a long one, a short step and a long one, the gait of a person who is trying not to be heard. There are no windows. At every landing a small niche in the wall holds a folded paper, tied with a thread: a message that the stair has kept. “These are what the Law will not deliver,” says Hou Zhe, behind you. “I keep them. I do not read them.”
+[talent] hero:talent=wood | Moss has climbed the walls of the stair, thin as breath, and the niches are green at the edges.
+[talent] hero:talent=fire | The lamp-flame leans toward your hand, and the shadows on the stair stand up to look at you.
+[talent] hero:talent=earth | The stair is cut from a single block of stone, and your feet know it before your eyes do.
+[talent] hero:talent=metal | The stair rings faintly under your step, every tread a different note; it is a stair that was meant to be listened to.
+[talent] hero:talent=water | The wall sweats a little in the warmth of your hand, and the thread on every paper is damp.
+[talent] hero:talent=mixed | The stair offers a little of each element to your uncertain roots, and none presses.
+[talent] hero:talent=heaven | The papers in the niches turn, all together, a quarter-turn toward the heaven-mark in you.
+[talent] hero:talent=late | The stair takes its time over you, and does not rush you, and you find you climb at its pace.
> inquiry | Read the thread on the nearest paper, but leave the paper folded. | td_3 | +td_read_thread insight+2
> mercy | Straighten a paper that has slipped in its niche. | td_3 | +td_straightened karma+1
> quiet | Climb without touching anything. | td_3 | +td_climbed qi+2
> force | Take a paper from a niche and open it. | td_3 | +td_opened_one karma-2

=== td_3 | The Registrar’s Room
At the top the stair comes out in a small bare room with one window, a desk and a lamp. A woman once sat here ruling columns. The ink is dry in the stand; the pen lies across it. On the desk is a book bound in plain brown cloth, its cover blank, and Hou Zhe says without being asked that it is the Door-book: the record of who has used the third door, and when, in whatever hand the user chose to write. He opens it to a page near the middle. The entries are very few. Most are a single mark, a stroke or a dot. One is a tune, in notation, three notes and a rest.
+ td_read_thread | You have read a thread and not a paper, and the sweeper looks at you with something like respect.
+ td_opened_one | You have a paper open in your hand, and Hou Zhe has turned his back so as not to see it.
> truth | Add your own mark to the Door-book. | td_4 | +td_marked
> inquiry | Ask who wrote the tune. | td_4 | +td_asked_tune
> mercy | Close the book gently, and leave it as you found it. | td_4 | +td_closed
> quiet | Stand at the window, and look at the courtyard below. | td_4 | +td_window

=== td_4 | Whose Hinge
Hou Zhe sets his broom against the desk. “The hinge on the third door,” he says. “It was oiled every week for eleven years by someone who never left a name. I thought it was a clerk. It was not a clerk.” He moves to the window and does not look down. “A girl used the door in the night, a long time ago, to go out by the back stair to the abyss path, and come back before dawn. Someone else oiled the hinge so she would not be heard. I have sometimes thought that whoever it was loved her very much.”
+ td_marked | Your mark in the Door-book is a small thing, but it is the only one on the page that is not a stroke.
+ td_asked_tune | He tells you only that the tune was written by someone who could not read notation, and was guessed at by someone who could.
> truth | Say that you think you know who oiled the hinge. | td_5 | +td_guessed_hinge
> mercy | Say that the person who oiled it was kind. | td_5 | +td_kind
> inquiry | Ask whether the hinge was ever left unoiled. | td_5 | +td_hinge_asked
> quiet | Run your thumb over the hinge, and say nothing. | td_5 | +td_hinge_touched

=== td_5 | A Message Left in the Door
In the lowest niche on the landing, behind the Door-book, a folded paper lies with its thread untied. It is addressed in two brushstrokes: Wan. Hou Zhe says it has lain there fifteen years. A girl left it on the night she did not come back, and the one it was for never came down the stair to take it; the Registrar’s door has been locked since. He does not offer an opinion. He does not look at the paper at all.
> inquiry | Open it, and read it where you stand. | td_6 | +td_read_message insight+2
> mercy | Fold it as it was, and take it to the Elder unread. | td_6 | +td_carry_message karma+2 item+td_blank_leaf
> deceit | Read it, then fold it back and tell the Elder you did not. | td_6 | +td_read_hidden karma-2
> quiet | Leave it in its niche. | td_6 | +td_left_message

=== td_6 | Four Lines
If you opened it, the paper holds four lines in a quick, round hand, with a small drawing at the foot of a hinge and an oilcan. Wan, I have the key to the back stair, and I will be home before the second bell. Leave the lamp. Do not be cross. M. If you did not, the paper holds whatever you imagine, and Hou Zhe says, mildly, that most people imagine something worse than what it says.
+ td_read_message | You read it twice, and the second time it is shorter.
+ td_read_hidden | You have read it, and are now carrying a thing you must not say you carry.
+ td_carry_message | The paper is light in your hand, and you carry it as if it were full.
> truth | Fold it, and resolve to tell the Elder what it says. | td_7 | +td_resolved_tell
> mercy | Wipe the dust from the paper, and put it in your sleeve. | td_7 | +td_kept_paper
> quiet | Put it back in its niche, and close the book on it. | td_7 | +td_put_back
> inquiry | Ask Hou Zhe whether the Elder has ever asked for it. | td_7 | +td_ever_asked

=== td_7 | Which Door
Hou Zhe walks you down the stair. At the third landing he stops, for no reason that he gives, and turns. “Which door do you use?” he says. It is the question you were not asked at the desk. He does not wait for it to be answered. “I ask them all, and never write down what they say. It is only that someone ought to ask, and someone ought to listen to the silence if there is one.” He watches your face, and he does not seem to mind what is in it.
> truth | Tell him which door is yours, and mean it. | td_8 | +td_door_told karma+1
> quiet | Stand in the silence he has made, and let it stand. | td_8 | +td_silence_kept
> inquiry | Ask him which door he uses. | td_8 | +td_asked_him insight+2
> mercy | Say that you will use this one again, if he will have you. | td_8 | +td_return_promised karma+2

=== td_8 | The Elder at the Foot of the Stair
The Elder is standing at the foot of the stair with her hand on the wall. You left her at the tablet, and she has followed; she did not come up, and she did not call. She has simply been standing there, and the plaster under her palm has the shine of long waiting. Hou Zhe bows to her and goes back to his broom as though nothing in the world had happened. “The door is oiled,” she says to no one. She looks at your sleeve, and at your face. “I did not think anyone had kept it.”
+ td_carry_message | She sees the thread on the folded paper in your hand and understands at once what it is.
+ td_read_hidden | She looks at you for a long moment, and you understand that she suspects.
+ td_kept_paper | The paper is in your sleeve, and she looks at the sleeve, not at you.
> mercy | Give her the paper, and step back. | td_9 | +td_gave_paper npc:TD_ELDER
> truth | Tell her what is in it, and let her take it or leave it. | td_9 | +td_told_elder npc:TD_ELDER
> quiet | Say nothing, and let her speak first. | td_9 | +td_elder_first npc:TD_ELDER
> deceit | Tell her there was nothing in the niche. | td_9 | +td_denied npc:TD_ELDER karma-2

=== td_9 | Out by the Third Door
You go out by the door you came in. Hou Zhe does not look up from his sweeping, but when you pass him he holds out the lamp once more, and says only, “The door is open until you want it.” Behind you the hinge makes no sound at all. In the wall between the cloister and the yard a woman and a man have come out to see who left, and both look at you, and both look at each other, and neither says a word. It is, you find, a good silence.
+ td_marked | Your mark is in the Door-book now, and it will be there when the Law Hall is dust.
+ td_gave_paper | The Elder has the paper. You do not see what she does with it.
> truth | Tell Hou Zhe you will be back. | back8_jade_eye_tablets_2 | +td_done karma+1 npc:TD_REPORT
> mercy | Leave the lamp where he can find it, and go. | back8_jade_eye_tablets_2 | +td_done karma+1 npc:TD_REPORT
> quiet | Go back to the Law Hall by the shortest way. | back8_jade_eye_tablets_2 | +td_done qi+2 npc:TD_REPORT
> inquiry | Ask the clerk, at the side desk, what he has written in the blank column. | back8_jade_eye_tablets_2 | +td_done insight+2 npc:TD_REPORT
`;
