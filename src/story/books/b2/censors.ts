import type { Arc } from "../types";

/**
 * Book Two, arc one: the Concord's Censors audit the Azure Cloud Sect.
 *
 * Four ways to meet an audit: open the books (a1), bar the gate (a2), mislead the auditors (a3), listen at doors (a4).
 * A hidden route behind the archive's numbered drawer (insight 14) foreshadows the Reserve without naming it.
 * Cast introduced: Duan Wuyi, Hao Lan, Mei Qiu, Scribe Tong.
 */
export const censors: Arc = {
  id: "censors",
  name: "The Censors at the Gate",
  scenes: String.raw`
=== censors_entry | The Grey Sail
The Censors do not ride up the mountain. They climb on foot, five figures in ledger-grey with white sashes, and the walking is itself a statement: the Concord does not arrive at a place it means to judge as a guest.
At their head is a slight man past fifty with ink to the second knuckle of his left hand and a plain staff of pale bone. He bows to the gate disciple, and the disciple, who has not been bowed to in nine years, drops his umbrella.
+ end1_sovereign | His eyes fall on the seal at your belt, and he bows a second time, lower. A Censor’s bow is to an office, not a person.
“I am Duan Wuyi, Censor-General,” he says. “You are the witness who read the names. I am told you did not blink. Forty-one names have returned to Heaven’s Ledger this season, every one struck out in the fifteen years since your Sealing. I would like to know which door they are coming through. I shall begin with your abyss.”
> truth | Offer him the keys of the sect before he asks, and walk him to the memorial yourself. | censors_a1s1 | +censors_a1
> force | Stand in the gateway and tell him the Law Hall answers to the Law Hall until the Elder says otherwise. | censors_a2s1 | +censors_a2 needs:2
> deceit | Welcome him warmly, and send Gu running ahead to Lin Yuan to put the wrong drawers in front. | censors_a3s1 | +censors_a3
> quiet | Say little, and offer to carry a Censor’s bag, so that you stay near enough to listen. | censors_a4s1 | +censors_a4

// ---------------------------------------------------------------- a1: open the books
=== censors_a1s1 | Daylight on the Tablets
In the memorial the incense has burned low, and the tablets glow the faint grey of old coals. Duan Wuyi walks the rows with two fingers lifted, not touching, as a man walks past sleeping children. Behind him the young Censor, Hao Lan, sketches the lintel with a speed that suggests she cannot stop herself, and the cold one, Mei Qiu, taps each pillar with a silver rod and writes down the sound.
At the tablet nearest the altar Duan stops. The white paint has been scraped from one name, and the hollow is bright.
“Read it for me,” he says. “It is better heard in the voice of someone who stood there.”
> truth | Read the name aloud: Su Mengjiao. | censors_a1s2 | bond:lin+0
> inquiry | Ask him first what the Ledger itself says of her. | censors_a1s2
> mercy | Tell him the Elder scraped it with a knife, one night, because she could not bear it. | censors_a1s2
> quiet | Let the silence answer, and watch what he does with it. | censors_a1s2

=== censors_a1s2 | The Cracked Base
Mei Qiu kneels at the altar and lowers a silver plumb into the crack. The weight swings, and where it should swing like a pendulum it turns slowly, like a head looking about.
“Cut from within,” she says. She does not look up. “A fracture from outside spreads. This was pushed from beneath, in a circle, with something patient. Whatever lifted the upper half of your jade did not break it out. It asked it to leave.”
Hao Lan has stopped sketching. “Asked,” she says. “Can a stone be asked?”
“Not by a sect,” says Duan, mildly, and looks at you for the first time since the gate. “By a listener.”
> truth | Tell them what Gu said on the ledge: a woman in grey took the jade and walked down into the red. | censors_a1s3 | +censors_told_gu_tale
> inquiry | Ask what a listener is, and who is permitted to be one. | censors_a1s3
> deceit | Say the altar cracked on its own, the night of the theft, and no one saw why. | censors_a1s3 | +censors_lied_altar
> quiet | Step back from the altar and let the Censors measure without you. | censors_a1s3

=== censors_a1s3 | Lin Yuan Sweats
The Ash Archive is cooler than the courtyard, and Lin Yuan is sweating anyway. He has put on a clean robe, and it has a crease across the chest where it was folded for years. Behind the cedar desk he has laid out the keys in the order he was taught, largest first.
“The Index of the Departed opens only when the Elder herself stands before it,” he says to the floor. “Or when a witness of the Law stands in her place.” He swallows. “I have been told you are that witness.”
Duan does not smile. He waits, with the patience of a man who has watched many clerks decide whether to be brave.
> truth | Tell Lin Yuan, plainly, that you stand in her place and the Index may open. | censors_a1s4 | bond:lin+3
> mercy | Tell Lin Yuan that whatever opens, it opens on your word and not his. | censors_a1s4 | bond:lin+5
> inquiry | Ask Duan what he expects to find in a drawer that the Law has had fifteen years to empty. | censors_a1s4
> quiet | Wait with Lin Yuan, and let him decide for himself. | censors_a1s4 | bond:lin+2

=== censors_a1s4 | The Index Opens
The bronze drawers swing open in order, ringing faintly, and the smell of old brush-water rises. Duan lifts out the card for the Su line and reads it, and reads the second line, written in a different ink: Letter received by the Law Hall; held for the Elder’s eyes alone.
“Held,” he says. “By whom? Not by her.” He looks at the scribe who has followed him in, a boy of perhaps twelve with a brush as long as his forearm. “Tong. Write that the Law Hall held a letter it did not deliver.”
The boy writes, without a word. His ink is very black.
On the wall behind the Su drawer, a row of small numbered drawers has been painted over to match the wall. The paint is a little too thin.
> inquiry | Run your thumb along the painted drawers and read the numbers beneath the paint. | censors_h1 |  | insight>=14 | You do not read this wall closely enough yet. Insight 14 is needed.
> truth | Tell Duan the Law Hall held a good deal more than one letter, and offer to show him where. | censors_a1s5
> quiet | Say nothing of the painted drawers and follow Duan out. | censors_a1s5
> mercy | Ask that Lin Yuan’s name not be written in the same sentence as the Law Hall’s. | censors_a1s5 | bond:lin+3

=== censors_a1s5 | The Plumb of Names
At the abyss rim the mist has drawn back to the second ledge, and the morning is clear enough to see the red of it. Duan unwinds a line of white silk from his staff. On the end is a weight no larger than a plum, silver, with a single closed eye engraved on its face.
“A plumb of names,” he says, lowering it. “It hums what it finds. Listen.”
The silk goes down and down. Faintly the plumb answers, and the sound is not a hum but a counting. Fourteen voices, each a little younger than the last. A fifteenth, steadier than the rest, that you have heard in a cave. And then something else the plumb cannot read at all, a blank and warm silence, like a hand held over a mouth.
> truth | Say aloud the fifteen names the plumb is counting, one at a time. | censors_a1s6 | bond:mengjiao+2
> inquiry | Ask Duan what the silence at the end of the count is. | censors_a1s6
> quiet | Put your hand over your chest, where the cold seed sits, and hold very still. | censors_a1s6
> deceit | Tell him the plumb is only echoing the cleft, and the blank is a flaw in the silk. | censors_a1s6

=== censors_a1s6 | What the Plumb Would Not Say
Duan draws up the silk. The plumb comes out of the mist dark and wet, and for an instant the eye on its face seems to be closed more tightly than before.
“There is a sixteenth line,” he says, wiping it. “The Ledger does not carry one. The Law Hall’s ledger does not carry one. But the plumb has never been wrong about a count, and it is counting someone who is not on any page.”
Mei Qiu has come up beside him. “Then we take what the Law Hall keeps,” she says. “The shard, the scroll, and the register. Tonight.”
Hao Lan looks at you, not at her superiors, as if you might be able to say something that would stop it.
> truth | Say that the Elder must be asked before anything is taken, and that you will fetch her. | censors_a1s7 | bond:ren+1
> force | Tell Mei Qiu she will take nothing from the Law Hall without a warden’s lantern on her. | censors_a1s7
> mercy | Tell Hao Lan quietly that it is not a stealing, and she will see why by morning. | censors_a1s7 | +censors_hao_friend bond:lin+0
> quiet | Say nothing, and watch whether Duan agrees with her. | censors_a1s7

=== censors_a1s7 | Wanru Receives the Concord
Elder Su comes up the rim path with Ren Qiao at her shoulder and the silver comb pinned back into her hair as though it were armour. She does not look into the cleft. She looks at Duan Wuyi.
“Censor-General,” she says. “I have been Elder for twelve years. I was Registrar for six before that. I signed the orders you came to read. I will not keep you from the ledger. I will keep you from the shard.”
“You will keep me from it only until the Assembly,” says Duan. “Then the Concord will ask for it in a larger room.”
Her mouth moves, the smallest line of a smile. “Then we shall be two older people who have disagreed in a larger room.”
> truth | Stand beside her and say you were witness, and the witness will go where she goes. | censors_a1s8 | +censors_stood_with_su npc:SU_CENSOR_OPEN
> inquiry | Ask Duan what the Assembly will ask of the shard, and of her. | censors_a1s8
> mercy | Take her arm, because she is looking at the cleft after all, and has not noticed. | censors_a1s8 | bond:ren+1
> quiet | Step back to Ren Qiao, and let the elders speak. | censors_a1s8 | bond:ren+2

=== censors_a1s8 | The Terms
The terms are written on the rim itself, on a flat stone Tong holds steady with his knee. Duan dictates. Mei Qiu corrects him twice. Wanru reads every word aloud before she lets the boy set it down.
The Elder will appear at Qinglian Ford before the Midsummer Assembly. She will bring the upper jade, the Heavenly Scroll and the Law Hall’s register. The witness who read the names will travel with her. The shard will stay.
“One more line,” Duan says, and the brush hesitates in the boy’s hand. “That no one of the Law Hall’s household shall be struck from any register before the Assembly.”
Wanru looks at him a long time. “You are offering me a kindness.”
“I am offering you a rule,” says Duan. “It is only a kindness when it holds.”
> truth | Thank him, and ask that his rule be written in your own hand as well. | censors_close | +censors_wrote_rule
> mercy | Ask that Gu Hanzhen’s name be written into the rule by name. | censors_close | +censors_named_gu bond:gu+3
> inquiry | Ask which of the household he thinks the rule is most needed for. | censors_close
> quiet | Make your mark on the stone and say nothing more. | censors_close

// ---------------------------------------------------------------- a2: bar the gate
=== censors_a2s1 | The Doorway
You stand in the gateway with your hands where the Censors can see them, and the wardens come, one lantern and then another, until a dozen stand behind you in the rain. Duan stops at the third step. He is not angry. He looks like a man who has met a wall before and knows its habits.
“A Law Hall that answers only to itself is the Law Hall that sealed fifteen,” he says. “I will not argue. I will ask you to stand aside.”
Mei Qiu has already drawn a short iron bar from her sash. It is dark, and its end is stamped with a closed eye.
> force | Plant your feet and say that you will not stand aside. | censors_a2s2 | needs:2
> truth | Tell him it is not the Law Hall you guard but the people in it, and ask what he will do for them. | censors_a2s2
> deceit | Step aside with a smile and a low bow, then close the gate behind them. | censors_a2s2
> quiet | Hold your ground and look to Ren Qiao for the next move. | censors_a2s2 | bond:ren+2

=== censors_a2s2 | The Seal-Iron
Mei Qiu touches the iron to the gatepost. The wood does not burn. It goes quiet. The talisman on the lintel, which has glowed a faint blue for two hundred years, fades like a breath on glass, and every ward on the mountain flinches in your teeth.
“A Censor’s bar,” she says. “It does not break a seal. It reads it, and then the seal is a page. I will read this gate, and then your archive, and then you.”
Something cold moves in your chest, a small black thing that has been asleep since childhood. It lifts its head toward the iron the way a dog lifts its head toward a stranger.
> force | Let the seed rise, only a little, and see what the iron does. | censors_a2s3
> quiet | Press a palm to your chest and put the seed back to sleep. | censors_a2s3
> inquiry | Ask Mei Qiu what the iron reads that a seal does not already say. | censors_a2s3
> mercy | Tell the wardens to lower their lanterns. This is not a thing they can win. | censors_a2s3 | bond:ren+2

=== censors_a2s3 | A Duel by Rule
“The Concord has a rule for a disagreement of this kind,” says Duan, and the old courtesy in it is worse than a threat. “A challenge of precedent. One champion of each party, under rule, to decide whether the audit begins at the memorial or at the archive. No one dies. No one is struck from a register. I will name Inspector Mei.”
Ren Qiao has stepped to your shoulder. He says nothing, and holds out his lantern so that you may give it to someone. Behind him the wardens are very still.
“You may refuse,” says Duan. “Then the audit begins at the archive.”
> force | Accept the challenge and step into the courtyard. | censors_a2s4 | +censors_accepted_duel
> inquiry | Ask for the rule to be written, and what its fouls are, before you agree. | censors_a2s4
> deceit | Accept, and quietly ask Gu to bring a pot of boiling tea in case the rules need a distraction. | censors_a2s4 | bond:gu+2
> quiet | Refuse, and let the audit begin at the archive. | censors_a2s8 | +censors_refused_duel

=== censors_a2s4 | First Exchange
Mei Qiu fights with the iron held reversed, point down, like a stylus. She does not strike so much as mark: a touch at the wrist, a touch at the knee, and each touch leaves a faint grey line on your sleeve that stiffens the cloth. Her feet never leave the stones.
You gather no qi for it, only breath and a pair of quick hands. The courtyard has gone quiet around you. The rain falls into the space where you are not.
She touches your shoulder. The grey line crawls toward your neck.
> force | Close the distance and take hold of the bar itself. | censors_a2s5
> quiet | Give ground, step by step, and let her mark you until you read her pattern. | censors_a2s5
> deceit | Feint at her wrist and slip under her guard on the other side. | censors_a2s5
> truth | Call out that you are unarmed in the Concord’s rule, and that she has marked a witness. | censors_a2s5

=== censors_a2s5 | The Seed Stirs
The grey line reaches your collarbone, and the black seed answers it.
It is not a flame or a flower. It is a thread, black as ink, and it runs out along your arm to meet the bar, and where the two touch the iron’s closed eye opens. Mei Qiu cries out. The grey lines on your sleeve fall off like sand.
For an instant the courtyard sees what you carry. A seed with one thread of root in it, and in the root, very faint, small shapes that look like names.
Duan Wuyi has gone absolutely still. Hao Lan’s sketchbook slides from her hands.
> force | Press the advantage and push the thread through the iron. | censors_a2s6 | +censors_seed_seen npc:SU_CENSOR_SEED needs:2
> quiet | Draw the thread back in, quickly, before anyone can look too closely. | censors_a2s6 | +censors_seed_seen
> truth | Say aloud that you are not hiding it, and that you do not know what it is. | censors_a2s6 | +censors_seed_seen
> deceit | Say it is a trick of Qin’s sparring court, an old fire-drill, and grin. | censors_a2s6 | +censors_hid_seed

=== censors_a2s6 | Enough
“Enough,” says Duan, and the courtyard, which would not have listened to anyone else, listens. He lifts his staff and the rain, which has been falling slantwise, falls straight again. “The Concord has what it came to see.”
He crosses the stones. Mei Qiu is on one knee, holding her iron in both hands, and she does not look at you. Duan stops in front of you, close, and his voice drops so that only you can hear.
“Keep that hidden in Qinglian, if you can,” he says. “I do not say it kindly. I say it because the people who will see it there will not stop at looking.”
> truth | Ask him what it is, and what Qinglian will do to it. | censors_a2s7
> mercy | Thank him for the warning, and ask nothing, because you can see it costs him. | censors_a2s7 | bond:lin+0
> force | Tell him you will keep it hidden as long as it keeps you alive. | censors_a2s7
> quiet | Bow, and say nothing of what you have heard. | censors_a2s7

=== censors_a2s7 | Ren’s Lantern
Afterward the wardens put down their lanterns one by one. Ren Qiao is last. He walks across the wet stones as if each one were a rule he is choosing to break, and stands beside you.
“I held a lantern for fourteen once and said nothing,” he says. “Today I held it for one, and nothing is what I said. I would like to say something.” He clears his throat. “If you are the thing they are afraid of, I am a warden, and a warden stands where the danger is.”
He does not salute. He simply remains, shoulder to shoulder, in the rain.
> truth | Tell him you do not know what you are, and he is not obliged to stand anywhere. | censors_a2s8 | bond:ren+4 ally:REN_STANDOFF
> mercy | Thank him, and say the lantern would be welcome. | censors_a2s8 | bond:ren+5 ally:REN_STANDOFF
> quiet | Stand beside him in the rain and say nothing more. | censors_a2s8 | bond:ren+3
> force | Tell him a warden who stands beside you will not be safe, and he will have to stand anyway. | censors_a2s8 | bond:ren+2

=== censors_a2s8 | The Gate Afterward
The Elder arrives when the courtyard is empty except for the two of you and the rain. She has not run. Elder Su does not run. But her sleeve is wet to the elbow, as if she has come across the roofs.
“You barred my gate,” she says. “You were right, and you were a fool, and you were braver than anything I have taught. I do not know which of the three to answer.”
She looks past you toward the Censors’ guesthouse, where a lamp has been lit in a window. “They will take me down the river. They will take you with me. Whatever you were hiding, hide it better.”
> truth | Tell her about the thread, and the names in the root. | censors_close | +censors_told_su_seed npc:SU_CENSOR_BAR
> quiet | Say you will hide it better, and ask nothing. | censors_close | npc:SU_CENSOR_BAR
> mercy | Ask whether she is afraid of the river. | censors_close
> inquiry | Ask her what Duan meant by “the people who will see it there.” | censors_close

// ---------------------------------------------------------------- a3: the wrong drawer
=== censors_a3s1 | A Warm Welcome
You welcome them as if they were uncles, with tea and low bows, and Duan Wuyi drinks his cup slowly, watching you over the rim. Gu Hanzhen takes the signal at your elbow and slips out through the kitchen with a folded note, as fast as a boy with a bad shoulder can run.
“The Law Hall has changed,” Duan says. “Fifteen years ago I came here to read a sealing and was shown to a guest cell without a window.”
Hao Lan is looking at the tea cup. Mei Qiu is not drinking. Scribe Tong is writing what you say, a half-beat behind you, and his ink does not seem to dry.
> deceit | Keep the talk warm, and ask Duan about his years as a young Censor. | censors_a3s2
> truth | Tell them frankly that the archive will take an hour to prepare, and why. | censors_a3s2 | +censors_told_hour
> quiet | Pour more tea and let the silence do your stalling. | censors_a3s2
> mercy | Ask if the Censors have eaten, and send for rice. | censors_a3s2

=== censors_a3s2 | Lin Yuan’s Nerves
In the Ash Archive Lin Yuan has laid out four things on the cedar desk and is staring at them as if they might get up and walk. The shard in its grey silk. The unsigned sealing order. Mengjiao’s card. The letter, For Wanru, Read Last.
“I can hide one,” he says. “Perhaps two, if the paint dries. I cannot hide all four, and if they find one hidden thing they will look for the others.” His hands are shaking. “Tell me which ones the Law Hall can live without.”
+ censors_told_hour | You gave him an hour you had no right to promise. He is using every minute of it.
> deceit | Hide the shard, and trust the rest to the Elder’s name. | censors_a3s3 | +censors_hid_shard bond:lin+2
> truth | Hide nothing. Tell him to lay out all four, and trust the Censors with them. | censors_a3s3 | +censors_laid_out bond:lin+4
> mercy | Hide the letter, because it is the only one that belongs to a person rather than the Law. | censors_a3s3 | +censors_hid_letter bond:lin+3
> inquiry | Hide the sealing order, because it is the only thing that names the masters. | censors_a3s3 | +censors_hid_order bond:lin+2
> inquiry | Look at the wall of numbered drawers behind him, painted over, and ask what the numbers are. | censors_h1 |  | insight>=14 | You do not see the wall clearly enough yet. Insight 14 is needed.

=== censors_a3s3 | Ink That Remembers
To cover a missing record Lin Yuan must write a new one, and he takes down a jar of lamp-black from the high shelf. “Archive ink,” he says. “It is made from the soot of the first fire, and it remembers its writer. A Censor’s scribe could read, from a stroke, whose hand held the brush.”
“Then I will hold the brush,” you say, or someone says, and Lin Yuan looks at you with real hope for the first time.
He sets out two brushes. One is his. One is old, stiff, and smells of cold smoke. He does not say whose it was.
> deceit | Take the stiff brush and forge the entry in a hand that is not yours. | censors_a3s4
> truth | Take Lin Yuan’s brush and write the entry in his hand, and have him take your sleeve for luck. | censors_a3s4 | bond:lin+3
> inquiry | Ask Lin Yuan whose brush the old one was. | censors_a3s4 | bond:lin+2
> quiet | Grind the ink for him, and let him write. | censors_a3s4 | bond:lin+2

=== censors_a3s4 | Gu Carries the Shard
The note you sent with Gu was brief: Meet me at the persimmon wall. He is there when you come, out of breath, with the grey silk in his hands as if it were a bird.
“Mother ties red cords on what she cannot keep,” he says. “I think I should have brought one.” He looks up. “Where should it go?”
You can send it down to the foothill village, to a house with a lotus carved in the door. You can bury it by the memorial. You can give it to Ren Qiao, who has kept a bridge for fifteen years. Or you can keep it on your own person, where the cold seed sits.
> mercy | Send it down to Madam Gu’s house, under the hearth ash. | censors_a3s5 | +censors_shard_village bond:gu+4 ally:GU_SHARD
> quiet | Bury it under the persimmon wall, where no one walks. | censors_a3s5 | +censors_shard_buried bond:gu+2
> truth | Give it to Ren Qiao, and tell him what it is. | censors_a3s5 | +censors_shard_ren bond:ren+3
> deceit | Keep it on your own person, and tell Gu you buried it. | censors_a3s5 | +censors_shard_kept bond:gu-2

=== censors_a3s5 | The Boy Who Writes
Scribe Tong finds you in the cloister, brush behind his ear, the ink on his fingers black to the wrist. He does not speak. He opens the notebook he carries and turns it toward you. On the open page, in a neat child’s hand, is one line.
This drawer is lighter than the drawer beside it.
“He can tell by looking,” says a voice. Hao Lan has come round the pillar with a bowl of rice in her hands, trying not to look as though she has been following. “He is better than the plumb. I would not tell him anything you do not want written.”
Tong waits. He is twelve, and his stare is very patient.
> mercy | Sit down beside him and offer him your rice, and ask nothing at all. | censors_a3s6 | +censors_tong_friend
> deceit | Tell him the drawer is empty because the Law Hall is poor, and press a coin into his hand. | censors_a3s6 | +censors_tong_bought
> force | Tell him that a scribe who writes a thing that gets a clerk struck from his place has written his last. | censors_a3s6 | +censors_tong_hostile
> truth | Tell him what is in the drawer, and why it was hidden, and ask him to decide what to write. | censors_a3s6 | +censors_tong_friend

=== censors_a3s6 | Hao Lan’s Question
Hao Lan walks you to the archive door and stops with her hand on the frame. She is twenty-three, and she has the face of someone who has not yet learned to lie and is not eager to start.
“I will ask you straight,” she says. “Are you hiding anything? I do not ask for the Concord. I ask for myself. If you say no, I shall believe you, and I shall be wrong, and I will have to live with that. If you say yes, I will tell the Censor-General nothing, and I will have to live with that as well.”
> truth | Say yes, and say what, and let her decide. | censors_a3s7 | +censors_hao_told bond:lin+0
> deceit | Say no, and make it sound like a joke. | censors_a3s7 | +censors_hao_lied
> inquiry | Ask her why she became a Censor, and wait for the real answer. | censors_a3s7
> quiet | Say that you will answer her tomorrow, and hold her eyes until she nods. | censors_a3s7

=== censors_a3s7 | The Weight of a Drawer
Duan Wuyi does not check a drawer by opening it. He lifts it from the wall with one hand, as a man lifts a cup, and weighs it. Then he puts it back and takes down the next.
“The Law Hall keeps its records in a very honest weight,” he says. “I notice that these three do not agree with their neighbours.”
Lin Yuan has turned the colour of the dust on the floor. Tong, behind Duan with his brush raised, looks from the drawer to you and back.
+ censors_tong_friend | Tong lowers his brush an inch and does not begin to write.
+ censors_tong_hostile | Tong’s brush is already moving, quickly, and the ink is very black.
> truth | Say the three drawers were emptied on your order, and Lin Yuan only held the key. | censors_a3s8 | +censors_took_the_fault bond:lin+5
> deceit | Say that the Law Hall is a poor institution and the weights do not agree. | censors_a3s8 | +censors_stuck_to_lie
> inquiry | Ask Duan whether the Concord’s own archive would pass such a weighing. | censors_a3s8 | +censors_turned_tables
> quiet | Hold still, and let the drawer lie where it is. | censors_a3s8

=== censors_a3s8 | What the Lie Cost
The audit goes on. Duan says nothing of the drawers, and writes nothing, and that silence is the most expensive thing in the room. When the Censors withdraw, Lin Yuan sits down on the archive floor with his back to the cedar and cries without a sound.
Elder Su finds you there, with the keys, with the old stiff brush, with ash on your sleeves. She looks at each of them in turn.
“I would have done the same,” she says, “at your age, with less grace. That is not praise. It is a warning about what I became.”
> truth | Tell her what was hidden, and where. | censors_close | npc:SU_CENSOR_LIE
> deceit | Tell her it was all in order, and nothing was hidden. | censors_close | npc:SU_CENSOR_LIE
> mercy | Ask her to say something to Lin Yuan before she says anything to you. | censors_close | bond:lin+3
> quiet | Give her the brush and the keys, and say nothing. | censors_close

// ---------------------------------------------------------------- a4: listen at doors
=== censors_a4s1 | The Censor’s Bag
Hao Lan hands you the satchel with an apology, as if you were doing her a favour and she knew it. It is heavier than it looks, grey cloth stitched with a closed eye, and under the flap a thin packet is tied with white cord and sealed in grey wax.
“Do not open that,” she says, because someone has told her to say so. “It is not for me to read, either.”
Beside her Mei Qiu is walking the corridors with her silver rod, tapping each pillar, and Duan Wuyi is far ahead, speaking to the Elder, his staff pointing at nothing. The Law Hall has not been this full of strangers in a generation.
> quiet | Carry the bag politely and learn the routine of the corridors. | censors_a4s2
> inquiry | Weigh the packet in your hand, and look at its seal for a long moment. | censors_a4s2
> truth | Tell Hao Lan you will not open it, and that she can trust you not to. | censors_a4s2 | bond:lin+0
> deceit | Loosen the knot a little, in case you need it later. | censors_a4s2

=== censors_a4s2 | Thin Walls
The guesthouse of the Law Hall was built for modest guests, and its walls are paper. At dusk you are sent with a tray of tea to the Censors’ rooms, and you stop outside a door that is not quite shut.
“Not a listener,” Mei Qiu is saying. “Not any longer. A bearer. The Concord said so in the Second Order and I will say it again. If the abyss is not quiet by Midsummer, the Great Sealing is authorised.”
“Authorised, not ordered,” says Duan. There is a pause, and a sound like a brush set on a rest. “I have not forgotten the difference. I would be glad if you could not forget it either.”
> quiet | Stay where you are, with the tray, and listen to the rest. | censors_a4s3
> inquiry | Set down the tray quietly and read the paper pinned to the lintel. | censors_a4s3
> deceit | Knock, and offer tea, loudly, so that they stop. | censors_a4s3
> force | Push the door open and ask them to say it to your face. | censors_a4s3

=== censors_a4s3 | The Second Order
Later, on the veranda, you read what you were not meant to read. The packet was in the satchel, you loosened the cord, and the wax parted like a dry lip. It is a single sheet, written in the narrow hand of the Concord’s chancery.
The Great Sealing of the Crimson Abyss is authorised, it says, should the wound not close of its own accord by the Midsummer Assembly. It shall be performed by a bearer of the black seed, drawn from among the households of the Azure Cloud Sect, to be sought through the Law Hall’s registers. The bearer shall be placed in the wound. The wound shall close.
Nothing else is written. At the foot of the page is a seal, a closed eye, and a name.
> truth | Fold it carefully and put it back exactly as it was, and tell no one. | censors_a4s4 | +censors_overheard
> inquiry | Copy the order word for word onto the inside of your sleeve. | censors_a4s4 | +censors_overheard +censors_took_order
> deceit | Take the packet and leave a blank sheet in its place. | censors_a4s4 | +censors_overheard +censors_took_order
> mercy | Burn it in the lamp and watch the wax run. | censors_a4s4 | +censors_overheard +censors_burned_order

=== censors_a4s4 | Lian Sheng at Night
The corridor outside the Censors’ rooms is empty except for one grey figure. Lian Sheng, master of the Law, has not left the Law Hall since the doors were opened, and she has put on her best robe. She goes down the veranda with her hands folded, and stops at Mei Qiu’s door, and does not knock. The door opens.
You are standing in the dark behind a pillar with a satchel on your shoulder, and your heart is making too much noise.
“The registers are in the Elder’s room,” says Lian Sheng, very low. “I can bring them. I want it understood that I never opened my mouth, and that when it is finished the Law Hall is the Law Hall again.”
> quiet | Stay behind the pillar and hear all of it. | censors_a4s5 | +censors_knows_lian
> force | Step out, and tell Lian Sheng the Law Hall is not hers to trade. | censors_a4s5 | +censors_knows_lian
> deceit | Slip away and be waiting at the Elder’s door before she arrives. | censors_a4s5 | +censors_knows_lian
> truth | Go to the Elder’s room now, and wake her, and tell her what you have heard. | censors_a4s5 | +censors_woke_su

=== censors_a4s5 | The Registers
Everyone in the Law Hall knows where the household registers are kept, in a lacquered chest under the Elder’s bed. Lian Sheng has the key. You have a lantern, a pair of quick hands, and a view of the keyhole through the crack of a door you should not have opened.
“A bearer,” Mei Qiu is saying. “The Law Hall registers sorted by age and mark. Anyone born before the Sealing, with no household. Anyone with a white scar on the left palm. Anyone listed as taken from the Orphans’ Terrace.”
There is a long silence. In it, you become aware that you are turning your own left palm over in the dark.
> quiet | Slip away with the lantern, and be somewhere else by morning. | censors_a4s6
> inquiry | Stay and hear which registers they open, and in what order. | censors_a4s6
> truth | Walk in on them and ask for the Elder to be woken before anyone reads another line. | censors_a4s6
> deceit | Put out the lantern and knock the chest over with a noise that sounds like a wind. | censors_a4s6

=== censors_a4s6 | Breakfast With a Censor
In the morning Duan Wuyi is eating millet in the guesthouse garden, quite alone, with a brush on a rest at his elbow. He lifts a hand without turning.
“Sit,” he says. “Tell me whether you slept. I ask it only as a Censor asks, which means I will believe nothing you say, and learn something from the way you say it.”
You sit. The millet is very plain. A magpie is working at a crust on the path with great seriousness.
“Last night,” says Duan, “someone in the Law Hall read something that was not theirs. I would not trouble to find out who. I would only like them to know that I would have done the same, once.”
> truth | Say you slept badly, and that you know what the Great Sealing needs. | censors_a4s7
> quiet | Say you slept well, and that the millet is good. | censors_a4s7
> deceit | Say you slept like a stone, and ask what he is hinting at. | censors_a4s7
> inquiry | Ask him whether the Concord has ever sealed an abyss by the Great Sealing, and how it went. | censors_a4s7

=== censors_a4s7 | What the Garden Heard
Duan puts down the bowl. For a moment he looks only like a tired man in a garden, with a magpie.
“Four times,” he says. “Once on the northern steppe, once under the Salt Coast, twice in the provinces east of here. The wound closed each time. In three of the four the bearer was not asked.” He takes up the brush, rests it, and does not write. “I have a rule against telling a witness what I think of the Second Order. I am telling you the rule so that you will know that I have one.”
Across the garden a door opens and Mei Qiu comes out, her iron in her hand, looking for someone.
> truth | Tell him you will not be asked for, or used, without having said yes. | censors_a4s8
> mercy | Ask whether he has ever stood in front of a wound and been the one to decide. | censors_a4s8
> quiet | Hold his eyes, and leave the question unanswered. | censors_a4s8
> inquiry | Ask for the name of the first bearer, the one who was not asked. | censors_a4s8

=== censors_a4s8 | What You Know
By evening the Law Hall has returned to its shape, and the Censors have retired to their rooms, and you stand in the courtyard with a secret that weighs nothing and is the heaviest thing you have ever carried. You could tell the Elder. You could tell Gu, who would try to help. You could tell Ren Qiao, who would try to stand in front. You could tell no one.
Above the east wing a window is lit, and a shadow moves behind the paper: sitting, standing, sitting again.
+ censors_woke_su | You already told her what you heard in the corridor. She has not slept since.
> truth | Go up and tell the Elder what the Second Order says. | censors_close | +censors_told_su_order npc:SU_CENSOR_LISTEN
> mercy | Tell Gu, and let him carry some of it. | censors_close | +censors_told_gu_order bond:gu+4
> quiet | Tell no one, and keep it close. | censors_close | +censors_kept_order
> inquiry | Tell Ren Qiao, who has seen what happens to people who are used up by orders. | censors_close | +censors_told_ren_order bond:ren+4

// ---------------------------------------------------------------- hidden route: the numbered drawers
=== censors_h1 | The Numbered Wall
The paint comes away in thin curls under your thumbnail. Behind it are drawers no larger than a hand, forty of them, each with a numeral in brass and a tag of faded paper. This is not the Index of the Departed. It is something the Law Hall wanted painted over, and it is arranged by age.
Most of the tags carry a single word: Placed. A few carry a different word, Returned, and a few carry nothing at all. Your fingertip stops on number nine.
The tag on number nine says: Reserve. Withdrawn at the Sealing.
> inquiry | Open the drawer. | censors_h2
> quiet | Read the tags on either side before you touch it. | censors_h2
> truth | Call Lin Yuan and ask him whether he has seen this wall. | censors_h2 | bond:lin+2
> mercy | Close your hand over the tag, so that the others cannot see. | censors_h2

=== censors_h2 | A Child’s Tally
The drawer is empty except for a single thing. It is a tally stick no longer than a finger, notched in rows of five, and at the end of the rows someone has drawn a small, careless circle with a dot in it, the way a child draws an eye.
Beneath the stick is a slip of paper in the Elder’s neat hand. It is dated twelve days before the Sealing. It says: Child nine will not be needed if the first seal holds. I have asked the nurse to take {them} to the river.
{Them}. The paper does not say whom. Your left palm, closed at your side, has begun to ache.
> truth | Read the slip again, aloud, so that Lin Yuan hears it. | censors_h3 | bond:lin+2
> inquiry | Look for a second slip, or a name, or a date after the Sealing. | censors_h3
> quiet | Fold the slip along its old crease and put it in your robe. | censors_h3 | +censors_took_slip
> deceit | Put it back, and shut the drawer, and decide you never saw it. | censors_h3

=== censors_h3 | Wanru’s Hand
At the back of the drawer, on the wood, someone has written in pencil and then rubbed it almost out. You hold the lantern close and tilt your head.
If I am found out, I did not do it for the sect. I did it because the child had a hand that would not stop reaching for the lamp. W.
It is a thing that should not move you, and you stand in the archive for a long while with the lantern burning down. In the corridor outside, footsteps pass and pause and pass again. The cold seed in your chest turns once, slowly, like something dreaming of being read.
> truth | Go to the Elder tonight and ask her what the nurse said. | censors_close | +censors_foresaw_reserve
> quiet | Keep it to yourself until the river, and see how long you can carry it. | censors_close | +censors_foresaw_reserve
> mercy | Leave the pencil as you found it, and ask nothing of her at all. | censors_close | +censors_foresaw_reserve
> force | Decide that if anyone is going to sacrifice you, you will be the one who knows first. | censors_close | +censors_foresaw_reserve

// ---------------------------------------------------------------- close
=== censors_close | The Audit Ends
The Censors withdraw to the guesthouse at the end of the third day, and the Law Hall breathes out like a held note. What the mountain says of you has already begun.
+[appr] censors_a1 | You opened the books to them, and people you have never spoken to nod as you pass.
+[appr] censors_a2 | You barred a Censor’s gate, and the mountain has made a story of it, braver than you remember and less true.
+[appr] censors_a3 | The drawers were weighed. The archive smells of lamp-black and relief.
+[appr] censors_a4 | You listened at doors in a house built of paper, and you are the one person who knows the Concord’s second order.
+[seed] censors_seed_seen | Duan Wuyi saw what you carry, and has said not a word of it to the Elder.
+[seed] censors_hid_seed | The Censors saw something in the courtyard, and have agreed to call it a trick.
+[duel] censors_accepted_duel | Ren’s wardens argue over who saw you take the challenge. Eleven of them did.
+[duel] censors_refused_duel | You refused the duel, and the wardens are divided about whether that was wisdom.
+[sup] censors_wrote_rule | The rule is written twice, once by the Censor and once in your hand. The wardens call it by your name.
+[sup] censors_named_gu | Gu Hanzhen’s name is written into the Concord’s rule. He has read it nine times and does not believe it.
+[sup] censors_stood_with_su | The Elder was seen leaning, a little, on your shoulder. No one has ever seen her lean.
+[hao] censors_hao_friend | Hao Lan presses a sketch into your hand: the cleft, the mist, and a small figure at the edge.
+[hao] censors_hao_told | Hao Lan waits on the archive steps and says she has told Duan nothing, and is not sure she should be proud.
+[hao] censors_hao_lied | Hao Lan will not meet your eye. She asked you straight, and you gave her a joke.
+[tong] censors_tong_friend | Scribe Tong has left a pressed persimmon leaf on your pillow, which is his kind of thanks.
+[tong] censors_tong_hostile | Scribe Tong crosses the courtyard to avoid you. His ink is very black.
+[tong] censors_tong_bought | Scribe Tong keeps your coin in his sleeve, and you cannot tell whether it is a bribe or a debt.
> truth | Go and find the Elder, and ask what she means to do. | censors_close2
> inquiry | Go back to the Ash Archive, and ask Lin Yuan what changed in the drawers. | censors_close2
> quiet | Walk the rim as the light goes, and watch the mist. | censors_close2
> mercy | Look in on Gu, and Ren Qiao, and the cook, and anyone who has not eaten. | censors_close2

=== censors_close2 | What Was Kept
The archive shuts early. Lin Yuan counts the drawers and then counts them again, and in the quiet you can hear the sect deciding what it will admit to remembering.
+[hid] censors_hid_shard | The shard is hidden, so the Law Hall will have nothing to bring the Assembly. The Elder will not say why.
+[hid] censors_hid_letter | The letter For Wanru is hidden, because it belongs to a person and not to the Law.
+[hid] censors_hid_order | The unsigned sealing order is hidden, the one paper that names the masters.
+[hid] censors_laid_out | Everything lay on the cedar desk for the Censors to see, and Duan wrote it down and said nothing.
+[where] censors_shard_village | The shard is under Madam Gu’s hearth ash, beneath a kettle that has never once been moved.
+[where] censors_shard_buried | The shard is buried under the persimmon wall. Gu pats the earth when he thinks no one is watching.
+[where] censors_shard_ren | The shard is in Ren Qiao’s keeping. He has not asked what it is, and sleeps with the lantern lit.
+[where] censors_shard_kept | The shard is with you, against the cold seed in your chest. Gu thinks it is buried.
+[drawers] censors_took_the_fault | You took the fault for the drawers in front of Duan. Lin Yuan does not know how to thank you, so he doesn’t.
+[drawers] censors_stuck_to_lie | The lie about the drawers held. Duan wrote nothing, and the silence is the most expensive thing in the room.
+[drawers] censors_turned_tables | You asked whether the Concord’s own archive would pass the weighing. Duan laughed, once, and put the drawer back.
+[tale] censors_told_gu_tale | You told the Censors what Gu saw on the ledge: a woman in grey, the jade, the red.
+[tale] censors_lied_altar | You told the Censors the altar cracked on its own. Mei Qiu measured the crack twice.
> truth | Tell Lin Yuan you will bring his name to the Assembly if it is asked. | censors_close3 | bond:lin+3
> inquiry | Ask him what he would take from the archive, if the Law Hall could never come back to it. | censors_close3
> quiet | Help him lock the archive, one drawer at a time. | censors_close3 | bond:lin+2
> mercy | Leave your own coin on the desk, for lamp oil, and say nothing. | censors_close3

=== censors_close3 | Forty Days Down the River
The summons is formal and short. Elder Su is to appear at the Midsummer Assembly in Qinglian Ford, thirty-six days down the river, and the witness who read the names will travel with her. The Censors leave at dawn, the Elder at the next tide. The mountain will be left in the keeping of Lian Sheng.
+[secret] censors_took_slip | You carry a slip of paper from drawer nine, folded along an old crease. It weighs nothing. You are afraid to read it again.
+[secret] censors_foresaw_reserve | You left the slip in drawer nine, and you can still see every word of it when you close your eyes.
+[secret] censors_overheard | You carry what you heard in a house of paper: a Great Sealing, and a bearer. It weighs nothing. You are afraid it will weigh everything.
+[order] censors_took_order | The Second Order is in your sleeve in your own hand. Anyone who finds it will know you read it.
+[order] censors_burned_order | The Second Order is ash in a lamp. Only you remember its words.
+[lian] censors_knows_lian | You know that Lian Sheng offered the Concord the household registers. She bowed to you this morning.
+[told] censors_told_su_seed | The Elder has seen what you carry, and has asked you nothing since. She watches your hands at table.
+[told] censors_told_su_order | The Elder knows what the Second Order says. She has not slept in two nights.
+[told] censors_told_gu_order | Gu knows the Second Order, and has started practising the sword in the dark.
+[told] censors_told_ren_order | Ren Qiao knows the Second Order. He has put a second lantern in his pack.
+[told] censors_kept_order | No one knows what you know, and you have never been so alone in a full house.
The night before the departure the whole mountain is sorting its belongings. In the guesthouse a lamp burns, and Duan Wuyi’s shadow bends over a paper he is not writing on.
> truth | Spend the last night on the mountain with the people you are leaving. | departure_entry | +b2_censors_done
> inquiry | Spend it in the archive with Lin Yuan, choosing which drawers to take. | departure_entry | +b2_censors_done bond:lin+2
> quiet | Spend it on the rim, where you can hear the mist, in case it has something to say. | departure_entry | +b2_censors_done
> mercy | Spend it in the village at the foot, so that Gu’s mother can see his face. | departure_entry | +b2_censors_done bond:gu+3
`,
  scenarios: String.raw`
$ SU_CENSOR_OPEN | trust+3 respect+2 | elder | The player stands with her as the Censors look at the memorial and the cracked altar.
hostile: You stand beside me because it is useful to be seen at my side. I know the difference between a shield and a friend. Stand there, and be a shield, and we shall see which of us breaks.
wary: You stood with me before the Censor-General, and I would like to believe it was loyalty and not calculation. I will not ask you which. I shall watch what you do when no Censor is looking.
neutral: You came to my side when Duan Wuyi looked at the altar. That is a small courage, and the kind of which the Law is made. I shall remember it among the other small things.
warm: You stood beside me in front of the Concord’s own Censor-General, and you did not look at the cleft. I did. I am grateful that one of us could keep her eyes level.
devoted: When you stepped to my side I understood that I have not been alone in my own hall for fifteen years. I did not know how tired I was of it. Thank you, Wanderer. I mean it as plainly as I can.
? tone:truth>=3/4 | You have answered four questions in a row without hiding anything, and now you stand at my side before the Concord. Be careful. Honesty in front of Censors is a kind of nakedness, and they do not look away.

$ SU_CENSOR_BAR | trust-1 respect+4 fear+3 | elder | The player barred the gate against a Censor and was stopped by the Censor-General himself.
hostile: You barred a Censor’s gate in my name, and now I must answer for it in a larger room than this. I do not thank you for the honour of being your reason. Do not do it again.
wary: You were right, and you were a fool, and you drew a seed of black thread out in front of a Censor. I will not pretend that is not a thing to be afraid of. I am afraid of it. I am also afraid for you.
neutral: You stopped a Censor’s rod with a thread I did not know you carried. I ought to ask what it is. I find I would rather ask what it needs, and I do not yet have the courage for either question.
warm: I have taught wardens to stand in doorways for twenty years. You did it better than any of them, and for the wrong reason, and I would not have you do it differently. Come inside. You are wet.
devoted: You stood in my gate for me. No one has done that since my sister, and she did it with a stolen lamp, and was just as foolish. Come in out of the rain, and let me look at your hands.
? censors_seed_seen | The whole courtyard saw the thread, and now you stand before me with your hands closed. I will not ask you to open them. I will only say that I have seen worse things in a child’s palm, and loved them.

$ SU_CENSOR_LIE | trust-3 suspicion+4 | elder | The player helped hide records from the Censors and was found out, or nearly.
hostile: You hid the Law Hall’s own papers from the Concord, in my archive, with my clerk. I could strike your name for it. I may yet. Tell me why the Law should not.
wary: You hid something from the Censors, and you were nearly caught, and I am nearly angry. The nearly is not forgiveness. It is only that I have not decided what I am.
neutral: A lie in my archive, told to a Censor, with Lin Yuan’s hands shaking at the desk. I will not call it a crime. I will call it a debt, and I will ask you to pay it in truth when I ask.
warm: You hid what you hid because you thought I could not bear to lose it. You were right about the loss and wrong about the method. I shall say that gently, because you were kinder than the Law deserves.
devoted: You tried to carry my sins for me in a lamp-black lie. I will not scold you. I will only ask that the next time you see me about to drown, you tell me, and let me reach for the rope.
? censors_took_the_fault | You took the fault in front of the Censor-General rather than let Lin Yuan take it. I cannot pretend that did not move me.

$ SU_CENSOR_LISTEN | trust+2 fear+6 | elder | The player tells her what the Second Order says.
hostile: You come to me with the Concord’s secret as if it were a gift. I am not sure whether it is a warning or a bargain. I am not sure what you want in exchange, and that is the part that frightens me.
wary: The Great Sealing. A bearer of the black seed. I have heard the words before, in a different mouth, in a different decade. I will think. Do not tell anyone else, not yet, not until I tell you what it means.
neutral: I knew there was a Second Order. I had not known its shape. Thank you for telling me, and forgive me, because I am going to sit down now, and I would rather you did not see my face.
warm: You came to tell me when you could have kept it. I know what that costs, because I did the opposite for fifteen years. Sit with me. We shall not say anything for a while, and then we shall decide what to do.
devoted: Wanderer. Sit. I have been hoping that someone would bring me exactly this, and I did not think it would be you, and I am relieved that it is. Whatever it means for either of us, we shall face it together.
? tone:inquiry>=3/6 | You have been asking questions all week, and now you bring me the answer to the one you never asked. Sit down. There is a thing I owe you, and I am not yet strong enough to give it. I shall try on the river.

$ SU_CENSOR_SEED | trust+1 fear+8 respect+3 | elder | The player showed the thread of the black seed to the whole courtyard.
hostile: You let a Censor see what you carry, in front of every ward and warden I have. I cannot unsee it. Nor can they. Tell me what you were thinking, or tell me nothing, and I shall decide what to do with you myself.
wary: The thread in the courtyard. I saw it from the roof. I knew what it was before I was close enough to be sure. I have been afraid of that thread for longer than you have been a person. Do not let it go on.
neutral: I saw it from the east wing. I will not say what I thought. I will say that a seed which wakes to iron will wake to other things, and you must learn what they are before the Concord decides for you.
warm: I watched you from the window. I thought, I will lose her now. I did not think it would be to a Censor. I find I am still glad you were angry enough to wake it. Come here. Let me look at your palm.
devoted: I have been waiting fifteen years to see that thread. I did not think it would be a gift. Wanderer, I have so much to tell you, and I am so afraid. Come in out of the rain.

$ REN_STANDOFF | trust+4 | ren | Ren Qiao stands at the player’s side after the duel.
hostile: I said I would stand where the danger was, and I do not take it back. I do not have to like what I stand beside. Do not mistake the lantern for a kindness.
wary: I am a warden, and a warden stands at the door. You may be the door. I have not decided. For now my lantern is lit, and that will have to do.
neutral: I held a lantern for fourteen once and did not speak. I am speaking now. I cannot say it will do any good. I can say I will not stop.
warm: You thanked me. I had forgotten that people do that. There is a bridge at the foot of the archive that I have kept for fifteen years, and it is a smaller thing than I thought it was. Let me carry something larger.
devoted: I did not expect this. I came to the Law Hall at seventeen to be a man who held lanterns. You have made me into someone who can choose where to hold it. I am yours, if you will have a warden, and I am no longer sure what else I am.

$ GU_SHARD | trust+3 | gu | Gu Hanzhen carries the shard to hide it.
hostile: You gave me a stone to hide, and I hid it, and I did not ask why. I should have asked. My mother would say that a thing hidden without a reason is a thing buried with a body.
wary: I do not like carrying what I do not understand, and I am carrying this. I will hide it well. I want you to know that I am watching how you use the people who hide things for you.
neutral: A grey silk, a pale stone, a persimmon wall. I will do what you asked. When you are ready to say why, I will be ready to listen. It does not have to be today.
warm: My mother says some stones are for burying and some are for keeping, and the hard part is knowing which. I think this one is for keeping. Thank you for letting me be the one who keeps it.
devoted: You trusted me with the thing the Concord would take from the Law Hall in the night. I am nineteen and I have never been trusted with anything but a sword. I will guard it with my life, and I will not make a speech about it.
`,
  remarks: String.raw`
% censors_hao_later | since:censors_hao_friend>=14 | elder | The young Censor with the sketchbook has been sending me small drawings by the barge pilots. They are good. I have decided not to mind.
% censors_tong_later | since:censors_tong_friend>=12 | elder | The Censor’s boy left a persimmon leaf on my pillow too. I found it wedged in the hinge of the screen. I have decided to take it as a compliment.
% censors_duel_later | since:censors_accepted_duel>=10 | ren | They are still telling it in the guardhouse. In the version I hear, you beat Inspector Mei with your bare hands. I do not correct them. It is good for morale.
`,
  
};
