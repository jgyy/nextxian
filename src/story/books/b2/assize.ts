import type { Arc } from "../types";

/**
 * Book Two, arc four: the Salt Assize. A river-town court tries Bo Lan for stealing a root the calm-dust trade depends on.
 * Four ways to stand beside him: plead the law (a1), break him out (a2), forge the receipt (a3), follow the salt carts (a4).
 * A hidden route reads the factor's ledger with Scribe Tong, whose ink remembers its writer (needs the scribe's friendship).
 * Cast: Magistrate Kuan Er, the salt-factor Dai Ming, Clerk Fu, Bo Lan, Madam Lan.
 */
export const assize: Arc = {
  id: "assize",
  name: "The Salt Assize",
  scenes: String.raw`
=== assize_entry | Three Days at Kuan Landing
The barge puts in at a landing built of salt. Pans of white crystal stretch back from the river in every direction, and the air tastes of old tears. A court is sitting here, the Concord’s circuit assize, and the tide will not turn for three days. Duan Wuyi has been a judge longer than he has been a Censor, and he says, mildly, that he will sit.
In the lock-up behind the magistrate’s hall a boy of sixteen is sitting on a stool with his hands tied. You know the set of his shoulders. Bo Lan has the look of someone who has lost more than he can count and is counting anyway.
+ helped_bo_lan_run | You pointed him toward the ferry steps once, with a spare talisman. The talisman is in his hand.
+ helped_bo_lan_escape | You pushed him toward the lane steps in the dark. He remembers whose hands.
+ covered_bo_lan_bet | He has not forgotten that you put a coin over his bet.
“Theft of a medicinal root from the factor’s granary,” reads the clerk. “Punishable by hands or by three years in the pans.”
> inquiry | Offer to be Bo Lan’s advocate, and read the statutes with Hao Lan before the hearing. | assize_a1s1 | +assize_a1
> force | Go to the lock-up at night and tell Bo Lan he is leaving with you. | assize_a2s1 | +assize_a2 needs:2
> deceit | Find a way to make the factor’s receipt say that Bo Lan paid for the root. | assize_a3s1 | +assize_a3
> quiet | Follow the salt carts out of the granary at dusk, and see where they really go. | assize_a4s1 | +assize_a4
> inquiry | Show Scribe Tong the factor’s receipts, and ask what his ink says of them. | assize_h1 |  | censors_tong_friend | The scribe does not trust you enough yet to share what he reads.

// ---------------------------------------------------------------- a1: plead the law
=== assize_a1s1 | The Lock-Up
Bo Lan does not stand when you come in. He looks at his hands, at the knots, at the dirt under his nails. When he speaks it is to the floor.
“I did not steal it,” he says. “I took it. There is a difference, I think. I did not know there was a difference until yesterday. The root was lying in a barrow behind the granary, with a tag on it that said Not for Sale, and my mother has been coughing for eleven weeks.” He swallows. “I left the money. All I had. Two stones. I put them on the barrow.”
Hao Lan, beside you with her satchel of statutes, writes this down with great care.
> truth | Tell him that is the best sentence he has said, and ask for it again, slowly. | assize_a1s2
> inquiry | Ask who tagged the barrow, and whose hand the tag was in. | assize_a1s2
> mercy | Ask how his mother is, before anything else. | assize_a1s2
> quiet | Sit on the floor beside him, and say nothing for a while. | assize_a1s2

=== assize_a1s2 | What the Statute Says
The Concord’s law of property runs to nine hundred pages, and Hao Lan has read most of them in the last six hours. She spreads three pages on a barrel.
“Theft needs intent to deprive,” she says. “He left coin. That is a point. A tagged root is under what the book calls a lien of public benefit, which means it belongs to whoever needs it, if the owner is not using it. That is a stronger point. But the law also says a lien of public benefit must be registered, and I do not think this one was.”
She taps the page, and her voice drops.
“I do not think any of the tagged roots in that granary were registered. I think someone was selling them quietly.”
> truth | Ask her to find out who is on the granary’s register, and whose roots were sold. | assize_a1s3
> inquiry | Ask what the penalty is for an unregistered lien. | assize_a1s3
> mercy | Ask what a sixteen-year-old with a sick mother would be sentenced to, if the judge were generous. | assize_a1s3
> deceit | Suggest that the register be lost before the hearing. | assize_a1s3

=== assize_a1s3 | The Factor
Dai Ming keeps the granary. He is a thin, well-dressed man of forty with a pleasant voice and a ring on every finger, and he receives you in his counting-room with a pot of green tea and the patient air of someone who has hosted a great many attempts.
“The boy is a thief,” he says. “I do not enjoy saying it. I am a patient man. But the tags exist for a reason, and the reason is that roots of that kind are not for just anyone.”
He pours your tea. “Not for a mortal, I mean. Their dosage must be correct. A mistake could do real harm.”
He smiles. His ring catches the light. You note that every ring is the same: a pale root, carved.
> truth | Ask whom the roots are for, if not for the sick of Kuan Landing. | assize_a1s4
> inquiry | Ask who counts the roots, and who verifies the dosage. | assize_a1s4
> force | Tell him you know a laundered tag when you see one. | assize_a1s4
> quiet | Drink the tea slowly, and say nothing that might make him think. | assize_a1s4

=== assize_a1s4 | A Night With the Statutes
Hao Lan falls asleep over the Law of Liens at midnight. You keep the lamp and read the rest. The statutes are not sinister. They are only thorough: the work of people who could not stand an unanswered question. Every possibility is anticipated, and every anticipation has a clause. You begin to see, in the grain of it, the architecture of the Concord, a very large house made entirely of corridors.
Near dawn you find the clause. It is short and old and nobody uses it. A person accused of a crime committed from need may call a witness of the need, and the witness may speak for the accused as an equal.
It requires a person the court will accept as a witness. It requires, further, that the person be willing to stand in the court.
> truth | Decide you will be that witness, and tell no one yet. | assize_a1s5
> inquiry | Search for the precedent where someone else tried it. | assize_a1s5
> mercy | Wake Hao Lan, and tell her what you’ve found. | assize_a1s5
> quiet | Fold the page into your sleeve and go for a walk in the pans. | assize_a1s5

=== assize_a1s5 | The Hall of Salt
The assize sits in the magistrate’s hall, a long white room whose walls are blocks of pressed salt and whose benches have been polished by the sleeves of a thousand litigants. Duan Wuyi sits at the high table. Magistrate Kuan Er, a heavy and weary man in a green coat, sits at his left like a man obliged to share his own bed.
The accused is brought in with his hands untied. Bo Lan looks up at the ceiling. He has never seen a roof made of salt, and for a moment the wonder takes his face. Then he sees his mother, in the third row, on a pallet, coughing into her sleeve, and the wonder goes out.
Duan lowers his brush. “Who speaks for the accused?”
> truth | Stand, and say that you do, as a witness of need. | assize_a1s6
> inquiry | Let Hao Lan rise first and read the lien clause; then stand beside her. | assize_a1s6
> mercy | Step to the pallet and kneel by Madam Lan, so the court sees whom this is for. | assize_a1s6
> quiet | Wait. Let the court see how long no one answers. | assize_a1s6

=== assize_a1s6 | A Witness of Need
Duan accepts you. He does it in four words, without looking up, and the magistrate clears his throat as though to protest and thinks better of it. You find yourself standing in a pool of afternoon light on a floor of salt, with a boy’s fate in your hands and no idea whether it will hold.
“State the need,” says Duan.
You look at Bo Lan. At Madam Lan on her pallet. At the factor Dai Ming in the front row, polishing a ring against his sleeve.
“The need,” you say, “is eleven weeks of coughing, and a root that cost nothing to grow, and a tag that says not for sale.”
> truth | Say plainly that the root was a medicine and the tag was a lie. | assize_a1s7
> inquiry | Ask the court how many tags in the granary were registered. | assize_a1s7
> mercy | Describe Madam Lan’s cough, step by step, until the room quiets. | assize_a1s7
> force | Say that if the Concord punishes this, the Concord is the thief. | assize_a1s7

=== assize_a1s7 | Cross-Examination
Dai Ming rises to answer, one hand in his sleeve. He is very smooth. He says the tags are the granary’s own, and that the Concord’s lien law does not apply to a private granary, and that the boy knew the rule and broke it, and that he feels the greatest sympathy.
“You have sympathy,” you say. “How many roots did you sell last quarter?”
“Forty.”
“To whom?”
There is a very small pause. “To the apothecaries of the river provinces.”
“Which apothecaries?”
Beside the high table, Duan Wuyi has put down his brush.
> truth | Ask for the sale ledger to be read aloud. | assize_a1s8
> inquiry | Ask whether any of the forty went to a hall that has no apothecary. | assize_a1s8
> force | Tell him the Law Hall would like to know where its roots are going. | assize_a1s8
> quiet | Say nothing further. Let the silence work. | assize_a1s8

=== assize_a1s8 | The Verdict
Duan rules after the lamps are lit. He rules in a clear, unhurried voice, and when he is done nobody in the hall moves.
The accused is not guilty of theft, for he left coin. He is not guilty of defrauding a lien, for no lien was registered. The factor is ordered to produce his ledger before the Censor-General within the hour. The Magistrate is asked, courteously, to attend his own hall in future.
Bo Lan looks around the room as if waiting for someone to tell him it is a joke. Then he looks at his mother, and she is looking at him, and she says, quite clearly, over the cough, “Come here, silly boy.”
> truth | Bow to the court and leave it to the boy and his mother. | assize_close | +assize_free +assize_dust_exposed
> mercy | Go and help carry Madam Lan out, because nobody else will think of it. | assize_close | +assize_free +assize_dust_exposed bond:gu+1
> quiet | Slip out of the hall and let Hao Lan take the credit. | assize_close | +assize_free +assize_dust_exposed
> inquiry | Follow Dai Ming out, to see where he goes with the ledger. | assize_close | +assize_free +assize_dust_exposed

// ---------------------------------------------------------------- a2: break him out
=== assize_a2s1 | After the Lamps
The lock-up is a salt-block cell behind the magistrate’s hall, with a single guard on a stool and a lantern with a cracked shade. You did not decide to do this. You walked there, and then you stood at the end of the lane in the dark and watched the guard yawn, and the thing was decided.
Ren Qiao stands beside you, silent as a stone. He has not asked what you intend. He has checked the buckles on his scabbard and unhooked his lantern, and he is waiting.
Gu is at your other shoulder. “Is this wise?” he whispers. “I would like it on record that I asked.”
> force | Tell them you are taking the boy, tonight, and anyone who wants to stop you can say so now. | assize_a2s2 | needs:2
> truth | Tell Ren Qiao honestly that you do not know whether this is right, and ask what a warden would do. | assize_a2s2 | bond:ren+3
> mercy | Tell Gu it is on record, and ask him to watch the lane. | assize_a2s2 | bond:gu+2
> deceit | Suggest a distraction: Gu knocks over the lantern at the far end. | assize_a2s2

=== assize_a2s2 | The Guard
The guard is a young man with a cleft lip and a scar across the back of his hand, and he is sitting very quietly with his boots off. He does not look like a person who wants a fight. He looks like a person who has been put on a stool by someone else and told not to move.
When Ren Qiao steps out of the dark, he stands up at once, with the guilty haste of a man caught resting.
“I only have the keys,” he says, before Ren has spoken. “I was told to keep them. I was not told to keep the boy.”
Ren Qiao, who has never in his life struck a man who apologised first, stops with his hand half out.
> truth | Tell the guard you only want to speak to the prisoner, and ask for the keys politely. | assize_a2s3
> force | Take the keys from his belt and tell him to sit down again. | assize_a2s3
> mercy | Give him a little silver, and tell him he can say he was overpowered. | assize_a2s3
> quiet | Let Ren do it, and watch the lane. | assize_a2s3 | bond:ren+2

=== assize_a2s3 | The Boy Who Does Not Want to Go
Bo Lan sits up on the stool as the door swings, and sees three shapes in the lantern-light, and does not run.
“No,” he says. His voice is very quiet. “I know what you are doing. It is kind. But I cannot go. If I go, my mother stays. They will take her pallet out of the hall. She will be put out in the salt.” His eyes are enormous. “I heard the magistrate say it. If I do not stand for it, she stands for it.”
Ren Qiao lowers his lantern. In the silence you hear the guard’s breathing, and somewhere beyond the wall a salt-cart creaking.
> truth | Tell him you will take his mother as well. | assize_a2s4
> mercy | Ask what he would want, if there were no sentence and no mother. | assize_a2s4
> force | Tell him he is not being asked. | assize_a2s4 | bond:gu-1
> inquiry | Ask whether the magistrate said it before the whole court, or alone. | assize_a2s4

=== assize_a2s4 | Two Pallets
Madam Lan is in the third row of the hall, asleep on a pallet of reeds, with a shawl pulled to her chin. She is lighter than you expected. Gu carries the foot, Ren the head, and you take her sleeve and the lantern. The magistrate’s hall is cold and silent, and the salt walls look blue by moonlight.
She wakes halfway down the steps. She does not scream. She looks at you, and at the warden, and at her son in your wake, and says, with perfect dryness, “I did say I wanted to see the river.”
Gu makes a sound that is half a laugh.
At the foot of the steps a lantern swings out of the dark.
> force | Turn and face whoever is holding it. | assize_a2s5
> quiet | Pull everyone into the shadow of the salt pile and wait. | assize_a2s5
> truth | Call out your name and your errand, and see who answers. | assize_a2s5
> deceit | Put a hand over Madam Lan’s mouth and whisper that this is a rescue. | assize_a2s5 | bond:gu-1

=== assize_a2s5 | The Salt Pans at Night
It is not a magistrate’s man. It is Hao Lan, in her sash, with her satchel over her shoulder and her sketchbook under her arm and the face of a girl who has followed a great many people in the dark and is tired of it.
“You are going to get yourselves killed,” she says. “And me.” She lowers the lantern. “I am coming. I could not stay and write it.”
She falls into step with Ren, practical as a clerk. “The nearest boat is a salt barge at the third pan. The bargeman owes Tong’s uncle a favour. The Censor-General sleeps lightly, but he does not sleep at all when he is thinking, and he is thinking very hard about the factor.”
> truth | Thank her, and ask what the Censor-General would do if he found out. | assize_a2s6
> mercy | Tell her she must stay out of this, and that you will not tell Duan she followed. | assize_a2s6
> quiet | Hand her the foot of the pallet. | assize_a2s6
> force | Tell her she is welcome to carry, but not to write. | assize_a2s6 | needs:2

=== assize_a2s6 | The Third Pan
The salt barge lies low in the water, loaded to the gunwale with white blocks, and the bargeman is a leathery old woman with one eye. She looks at the pallet, the boy, the warden, the girl in the Censor’s sash, and says, without any inflection, “Tong’s uncle says you owe him a favour. I say you owe me a salt.”
You do not know what that means. Hao Lan does. She takes a small packet from her satchel and puts it in the old woman’s hand. The old woman bites it, nods, and moves aside.
“Lie flat,” she says. “Under the sack. If anyone asks, you are a fish.”
> quiet | Lie flat under the sack, and breathe slowly. | assize_a2s7
> truth | Take the pole, and help the old woman push off. | assize_a2s7
> mercy | Settle Madam Lan between the sacks, and sit with your back to the wind. | assize_a2s7
> inquiry | Ask the bargeman where she is taking you. | assize_a2s7

=== assize_a2s7 | A Light on the River
Dawn. The barge is half a league down the river, and the white pans of Kuan Landing are a dazzle behind you. Bo Lan sits at the bow with his arm round his mother, and neither of them speaks. A great quiet has come over the boy. He looks at the water, at the sky, at his own hand, as though he had found them all new that morning.
Then a bell. From the landing, across the water, comes the single note of the Concord’s bell, and a grey sail unfurls behind you.
Duan Wuyi’s barge. It is coming up the river with the tide, slowly, and on the foredeck, upright, with a staff in his hand, stands the Censor-General himself.
> truth | Stand up in the stern so he can see you, and wait. | assize_a2s8
> force | Tell the old woman to run for the shallows. | assize_a2s8
> mercy | Put yourself between the barge and Madam Lan. | assize_a2s8
> quiet | Lie still. Let him decide what to see. | assize_a2s8

=== assize_a2s8 | The Censor-General Comes Alongside
He does not shout. He does not draw his staff. The grey barge comes alongside the salt barge, and the two bump gently, and the old woman with one eye puts down her pole and sits on a salt block and folds her arms.
Duan Wuyi looks at the boy. At the pallet. At the warden, the girl in the sash, the three of you. He looks at each in turn, then at the river, for a long time.
“I rose at dawn to be told that a prisoner had been removed from my assize,” he says. “I find it remarkable. I had been about to declare him not guilty.”
Bo Lan makes a sound like a cat that has swallowed a bell.
> truth | Tell him you did not know, and offer to take whatever the Concord demands. | assize_close | +assize_fled +assize_dust_exposed
> force | Tell him a judge who rules late is a judge who rules for the factor. | assize_close | +assize_fled needs:2
> mercy | Ask whether the boy can still be tried, with his mother there to speak for him. | assize_close | +assize_fled +assize_dust_exposed
> inquiry | Ask him what he was going to say about the factor. | assize_close | +assize_fled +assize_dust_exposed

// ---------------------------------------------------------------- a3: a forged receipt
=== assize_a3s1 | The Counting-Room
Dai Ming’s receipts are kept in a flat black box, one for each sale, each sealed in wax. A receipt is a small piece of proof, a coin’s worth of paper. You do not need to steal one. You need only to write a different one, in a different hand, and slip it in among the rest.
Hao Lan would not approve. You do not tell Hao Lan.
Gu comes with you as far as the granary door and stops. “I will keep watch,” he says. “I will not hold the lantern.” It is the most precise moral distinction he has ever drawn, and it holds.
> deceit | Go in at the back, by the flour-store, and find the black box. | assize_a3s2
> inquiry | Study the wax seal first, and how it is struck. | assize_a3s2
> truth | Go to the front, and ask the clerk Fu to show you the receipt book, innocently. | assize_a3s2
> quiet | Wait until the lamps are out, and go in after the watchman’s round. | assize_a3s2

=== assize_a3s2 | The Black Box
The counting-room smells of cinnamon and iron. The black box sits on a high shelf, locked with a plain brass padlock that has been oiled more often than it has been used. Behind it, in a cabinet with a glass front, are rows of jars, each labelled with a date and a dose.
You do not touch the jars. You look at them, a long time. They are labelled in a neat hand with the same words, over and over: Calm. For the river provinces. For the quiet.
Your fingers are already on the padlock.
> deceit | Pick the padlock, and lift the box down. | assize_a3s3
> inquiry | Read the nearest jar’s label, and the date, and the seal on its cork. | assize_a3s3
> force | Break the padlock, and take the box. | assize_a3s3
> quiet | Back out of the room, and go and find a better plan. | assize_a3s2b

=== assize_a3s2b | A Better Plan
Outside, the pans stretch under the moon like a field of broken glass. Gu is waiting in the shadow of the granary, and he lets out a long breath as you appear empty-handed.
“I thought you had been caught,” he says. “I was going to say I knew nothing and run.” He laughs, faintly, and it turns into a cough. “My mother would be disappointed.”
You think about the jars. You think about the nature of a receipt. Then you think about a man named Clerk Fu, who keeps the receipts, and who has the kind of face that wants to be asked.
> truth | Go and find the clerk, in the morning, and ask him plainly. | assize_a3s3
> deceit | Persuade Gu to forge a hand with you, in the lodging, over tea. | assize_a3s3 | bond:gu-1
> inquiry | Find out where the clerk drinks. | assize_a3s3
> mercy | Go home and sleep. The plan can wait until you are less tired. | assize_a3s3

=== assize_a3s3 | Clerk Fu
Clerk Fu is a small, round, fair-minded man of fifty with ink on his cuff and a worried habit of pushing his cap back on his head. He has served three magistrates and never once been asked what he thought. When you sit down across from him in the tea-house and say, “I need your honest opinion on a matter of receipts,” he goes pink with pleasure and terror.
“I should not,” he says. “It would be improper.” He pushes his cap back. “Which receipts?”
“The roots,” you say.
His face closes like a shutter. For a moment you think you have lost him.
> truth | Tell him about the boy, and the mother, and the cough. | assize_a3s4
> deceit | Tell him you are from the Concord and are auditing the factor. | assize_a3s4
> mercy | Order him another pot of tea, and tell him he does not have to answer anything. | assize_a3s4
> force | Tell him you know the roots were never registered, and so does he. | assize_a3s4

=== assize_a3s4 | What the Clerk Wrote
He talks for an hour. He says there have been forty-one tagged roots a quarter for six years, and that none of them were ever recorded as sold. He says the receipts went into the black box under a different heading: Calm, for the river provinces. He says he never saw the roots go out, only the carts.
“I wrote what I was told,” he says. “It is what a clerk does. I would not have written differently. But I did not write the boy’s two stones. They were on the barrow, and I took them to the factor, and he told me to forget.” He is shaking. “I have not forgotten.”
He puts a small bundle on the table. In it are two spirit stones, wrapped in a handkerchief, and a slip of paper in a clerk’s clean hand: Received of Bo Lan, 2 stones, for 1 root.
> truth | Ask him to say it in court. | assize_a3s5
> deceit | Ask him to put a date on the slip, a day earlier. | assize_a3s5
> mercy | Tell him he doesn’t have to be the one to stand up. | assize_a3s5
> inquiry | Ask who else saw the stones. | assize_a3s5

=== assize_a3s5 | Dating a Receipt
He will not backdate it. He sits in front of the slip with his cap pushed back and says, “I will write what I saw, and the date I saw it, and I will sign it. Anything else is not a receipt.” His voice is thin. “It is an invention, and I have never invented anything.”
You could press him. You could threaten. You do not, and the reason is not virtue; it is that you have looked at his hands and seen, on the third finger, a faded ring of ink where he has held the same brush for thirty years.
“Then write it,” you say. “Write what you saw.”
He does. It takes him a very long time. When it is done he sits looking at it as one looks at a child asleep.
> truth | Take the slip, and promise it will be read. | assize_a3s6
> inquiry | Ask him to make a second copy, in case the first is lost. | assize_a3s6
> quiet | Fold it, and keep it against your skin. | assize_a3s6
> mercy | Ask him whether he would like to take it himself. | assize_a3s6

=== assize_a3s6 | Dai Ming Hears
Dai Ming learns of it by the afternoon. A person with a hundred ears will always learn. He comes to you in the courtyard of the lodging-house with a pleasant smile and a servant at his shoulder, and sits on the edge of the well.
“A clerk talks,” he says. “A clerk is easily frightened. I want to be clear that I bear him no ill will.” He turns his ring. “But I wonder whether you have considered what the Concord does to a witness who is found to have colluded with a prisoner’s friends.”
He leaves a purse on the well-head and goes.
> truth | Leave the purse where it lies, and tell him to take it back. | assize_a3s7
> deceit | Take the purse and give it to Bo Lan’s mother. | assize_a3s7
> force | Throw it into the well. | assize_a3s7
> quiet | Leave it. Let the servants sort it. | assize_a3s7

=== assize_a3s7 | In the Hall
The court sits at noon. Dai Ming’s counsel is a plump woman in a violet coat who speaks beautifully and briefly. She argues that the root was tagged, that the boy knew it, that the stones left on the barrow do not constitute payment but contrition. It is very good.
Clerk Fu is called. He walks to the box with the slip clutched in his hand and his cap pushed all the way back, and the hall falls quiet in the way a well falls quiet when a pebble is let go.
“I wrote this,” he says. His voice cracks. “I wrote it on the day. The stones were on the barrow. The factor said to forget.” He swallows. “I have not forgotten.”
> truth | Stand, and say you can corroborate every word. | assize_a3s8
> quiet | Keep still. Let the clerk finish. | assize_a3s8
> mercy | Go to Bo Lan, and put a hand on his shoulder. | assize_a3s8
> inquiry | Watch the magistrate’s face as the slip is read. | assize_a3s8

=== assize_a3s8 | A Slip of Paper
Duan reads the slip twice. When he has finished he sets it down on the table, flat, and smooths it with the side of his hand.
“It is a very small thing,” he says. “Two stones and a root. I have read nine hundred pages of the law of liens, and I have never seen it come down to a handkerchief.” He looks at the clerk, whose face has gone grey. “The court thanks you, Master Fu. You have written the truest thing in this building.”
The ruling follows. The boy is not guilty. The factor is not charged, yet. The Magistrate, who has been looking steadily at the ceiling, does not look at Dai Ming even once.
> truth | Thank the clerk, and tell him the whole hall heard him. | assize_close | +assize_free
> mercy | Help Fu to a bench; his knees have gone. | assize_close | +assize_free
> quiet | Slip out and let the room breathe. | assize_close | +assize_free
> inquiry | Ask Duan, later, whether he would have accepted a forged slip. | assize_close | +assize_free

// ---------------------------------------------------------------- a4: follow the salt carts
=== assize_a4s1 | The Carts
At dusk the carts come out of the granary in a line of seven, each loaded with sacks of salt and drawn by a patient grey mule. They do not take the river road. They turn into the back lanes, away from the landing, and the drivers walk beside them with their hands in their sleeves.
You follow at a distance of fifty paces, with Ren Qiao silent at your left shoulder. The carts creak. The lanes are narrow and smell of fish.
A salt cart should be heavy with salt. These ride too high. The axles do not groan the way they should.
> quiet | Keep to the shadows, and watch what the drivers do at each crossing. | assize_a4s2
> inquiry | Count the carts, and count the sacks, and count the mules. | assize_a4s2
> truth | Walk up to the last cart and ask what is in the sacks. | assize_a4s2
> deceit | Fall in behind the last cart and pretend to be a driver. | assize_a4s2

=== assize_a4s2 | A Warehouse Behind the Dyers
The carts stop at a warehouse behind the dyers’ lane, a low windowless building with a green door. The mules are unhitched. The sacks are carried inside, and only one in three is salt. The rest are lighter, softer, and wrapped in oilcloth, and when the drivers lift them they do not grunt.
Ren Qiao touches your arm. He has smelled it. Bitter, faintly sweet: a root, dried and ground to powder. It is the smell of the Healer’s Hall, or of the cellar under it, or of the abyss path after rain.
“Calm dust,” he says, very softly. “They are making it here.”
> quiet | Slip along the wall to the window slit and look in. | assize_a4s3
> inquiry | Read the marks on the mule-harness; they are the Concord’s own brand. | assize_a4s3
> truth | Tell Ren that you want to go in and see. | assize_a4s3
> force | Tell Ren to kick in the green door. | assize_a4s3

=== assize_a4s3 | The Grinders
Through the window slit you see two long tables, and at each a row of women and boys grinding dried roots with stone pestles. Their faces are blank. Their mouths hang a little open. Beside each, on a stool, sits a small clay cup, and each cup is half full of something pale.
They are not slaves. There are no chains, no guards. They are only very, very quiet.
A foreman moves among them with a ledger, writing. Each time he passes a grinder he taps the rim of the cup, and the grinder lifts it, drinks, and bows over the pestle again.
“They are taking it themselves,” whispers Ren. “They have been told it is good for them.”
> truth | Tell Ren you will not leave until you know who ordered it. | assize_a4s4
> quiet | Watch until the foreman goes into the back room. | assize_a4s4
> mercy | Ask whether there is any way to speak to them without being heard. | assize_a4s4
> inquiry | Memorise the foreman’s face, the stool, the cup, the ledger. | assize_a4s4

=== assize_a4s4 | The Foreman’s Ledger
The foreman goes into the back room, and the door does not quite close. You are through the window and across the floor before you have thought about it, a mortal’s quickness and a seed’s luck. The grinders do not look up. A girl of nine, at the end of the second table, opens her mouth and says one word, quietly: “Thank you.” She means, for not being loud.
The foreman’s ledger lies open on a stool. You read it standing.
Dai Ming’s name is in it. So is the magistrate’s, and the Concord’s river-warden, and at the bottom of every page, in a tidy hand, a stamp: Azure Cloud Sect, Law Hall, Office of the Registrar.
> truth | Take the ledger, and walk out. | assize_a4s5
> inquiry | Copy the last page into your sleeve and put the ledger back. | assize_a4s5
> deceit | Swap the last page for a blank one from the back of the book. | assize_a4s5
> quiet | Slip out unseen, memory full. | assize_a4s5

=== assize_a4s5 | The Registrar’s Stamp
Back at the lodging, with the shutters closed, you set the page before the Elder. She reads it standing. She does not speak. Her face passes through a great many things and settles, finally, on a kind of exhausted precision.
“The Office of the Registrar,” she says. “That is mine. That was mine. I held it until twelve years ago, and when I was made Elder I gave it to my deputy, Lian Sheng.”
She sets down the page with the care of someone setting down a live coal.
“She has been selling calm dust to the river provinces for twelve years. And I signed the first of the contracts, in the Sealing year, to quiet the wardens.”
> truth | Tell her you do not blame her. | assize_a4s6 | +assize_a4_told_su npc:SU_ASSIZE_STAMP
> mercy | Take her hand, and say nothing. | assize_a4s6 | +assize_a4_told_su npc:SU_ASSIZE_STAMP
> inquiry | Ask what the dust was for, in the beginning. | assize_a4s6 | +assize_a4_told_su npc:SU_ASSIZE_STAMP
> force | Tell her you are going to take the ledger to Duan Wuyi tonight. | assize_a4s6 | +assize_a4_told_su npc:SU_ASSIZE_STAMP

=== assize_a4s6 | What the Dust Was For
“To quiet the wardens,” she says. “That first month. They could hear the fourteen. They could hear them in their sleep, in the guardhouse, on the bridge. Ren Qiao could not eat. Half of them could not stand.” She leans on the table. “The Healer’s Hall made a dust that would let them sleep. I signed the order. I told myself it was kindness.”
Her voice is very quiet.
“Then the masters saw that it worked, and the order was extended. To the disciples. To the cells. To the river towns, where the mist is thin and the names are loud. Every year I signed it. I did not look at where it went. I told myself the dust was for the quiet, and the quiet was for the sect.”
> truth | Tell her she can still choose not to sign it again. | assize_a4s7
> mercy | Tell her the first month’s kindness was real, even if the rest was not. | assize_a4s7
> inquiry | Ask who ordered the extensions. | assize_a4s7
> quiet | Hold the silence with her until she is ready to speak again. | assize_a4s7

=== assize_a4s7 | To Duan, by Night
You take the page to Duan Wuyi at midnight. He is sitting in the dark of the assize hall with a single candle and the verdict half written. He reads the page with his eyes closed, as blind men read.
“I knew,” he says at last. “Not this. The shape of it. A trade, a register, a river that was quiet in places it should not have been. I was waiting for someone to bring me the stamp.” He opens his eyes. “I have no jurisdiction over the Law Hall. I have jurisdiction over the factor, and the magistrate, and the warehouse, and the river towns. It is a start.”
He looks at you. “Why have you brought it to me, and not the Elder?”
> truth | Tell him you brought it to both, and she asked you to. | assize_a4s8
> quiet | Tell him some stamps are better sold to Censors than burned. | assize_a4s8 | +assize_a4_to_duan
> inquiry | Ask him what he will do with the Registrar’s name. | assize_a4s8
> force | Tell him you do not trust anyone else with it. | assize_a4s8 | +assize_a4_to_duan

=== assize_a4s8 | A Raid at Dawn
At dawn the warehouse behind the dyers’ lane is full of Censors. They come without noise: Mei Qiu with her iron bar, and a dozen assize runners in sashes, and a very pale Hao Lan carrying the register. The grinders sit at their tables, blinking, cups in their hands, and Mei Qiu stops in the doorway for a moment as if she had walked into a room she had not expected to find.
“They are all awake,” she says, to no one. “Look at them. They are all awake.”
It is the first time you have heard her sound human.
> truth | Go in among the grinders, and tell them who you are. | assize_close | +assize_dust_exposed +assize_raid
> mercy | Take the cup from the girl of nine, and put it down. | assize_close | +assize_dust_exposed +assize_raid
> quiet | Stand at the door with Ren, and let the Censors work. | assize_close | +assize_dust_exposed +assize_raid
> inquiry | Find the foreman, and ask who told him to tap the cup. | assize_close | +assize_dust_exposed +assize_raid

// ---------------------------------------------------------------- hidden route: the ink
=== assize_h1 | The Factor’s Ledger
Scribe Tong catches up with you at the edge of the salt pans. He is holding something in both hands, wrapped in a cloth, and his usually blank face has the faint flush of an unsolved sum.
He does not speak. He opens the cloth. Inside is a leaf torn from a ledger, and the ink on it is wrong. It is black, and glossy, and it has a very faint smell of lamp oil.
He writes on the corner of his own page, with the long brush: Not from here. Not factor’s hand. Not factor’s ink.
He looks at you with a patient stare.
> truth | Ask him to explain what the ink says. | assize_h2
> inquiry | Ask where he found the leaf. | assize_h2
> mercy | Tell him he has done well, whatever it means. | assize_h2
> quiet | Hold the leaf up to the light. | assize_h2

=== assize_h2 | Ink That Remembers
Tong takes you to the factor’s counting-room by the back way and shows you, one by one, a hundred leaves of the factor’s ledger. He sets his own ink beside each. The factor’s receipts are written in the ink of the Azure Cloud Sect: the soot of the first fire, mixed with oil of lotus. It remembers its writer.
He lays two leaves side by side. On the left, a receipt for forty roots. On the right, a note in the same hand to the factor. Same stroke, same pressure, same small flick at the end of the tail.
He writes, in the air, with the brush, a single character. The hand that wrote this made the flick.
He looks at the character.
> truth | Say the name out loud: Lian Sheng. | assize_h3
> inquiry | Ask how he knows her stroke. | assize_h3
> quiet | Take the leaf, and fold it carefully. | assize_h3
> mercy | Tell him you will not ask him to say it. | assize_h3

=== assize_h3 | A Boy’s Verdict
“I have written for the Concord since I was seven,” Tong writes, laboriously, on the corner of the leaf. “I have written six hundred verdicts. I have never been asked what I thought. I think this one is wrong.”
He underlines it twice. The brush trembles.
“I do not want the boy hanged. I do not want the clerk hanged. I want the person who wrote the note to answer.”
It is the longest sentence you have ever heard him produce. He sets down the brush, and for the first time you see how young he is.
> truth | Promise him that she will answer. | assize_close | +assize_dust_exposed +assize_tong_trust
> mercy | Ask him to eat something, and sit with him. | assize_close | +assize_dust_exposed +assize_tong_trust
> quiet | Bow to him, once, as to a colleague. | assize_close | +assize_dust_exposed +assize_tong_trust
> inquiry | Ask him what the Concord does to a scribe who accuses a master. | assize_close | +assize_dust_exposed +assize_tong_trust

// ---------------------------------------------------------------- close
=== assize_close | Salt on the Tongue
The tide turns on the third morning, and the barge slips away from Kuan Landing with a skin of white dust on its rails. The salt pans shine, the court is empty, and what was said in it is already sinking into the town.
+[res] assize_free | Bo Lan was cleared, and walks the landing with his mother on his arm, stopping at every stall to look at nothing.
+[res] assize_fled | Bo Lan is on a salt barge, a day ahead, with his mother and a new name. Duan has not issued the warrant.
+[res] assize_raid | The warehouse behind the dyers’ lane is shut, the cups are broken, and eighty people woke up on the same morning.
+[how] assize_a1 | You stood as a witness of need in a court of salt, and the town has begun to say your name as if it meant something.
+[how] assize_a2 | You carried a woman out of a hall on a pallet, and you are no longer a stranger to the river.
+[how] assize_a3 | You wrote a clerk’s truth where a lie would have done, and slept for the first time in a week.
+[how] assize_a4 | You found the Registrar’s stamp in a hidden ledger, and know now what you did not wish to know.
+[tong] assize_tong_trust | Scribe Tong sits cross-legged on the foredeck with his brush across his knees, watching you with his patient stare.
+[dust] assize_dust_exposed | The Concord’s river-wardens have been told. Calm dust will not cross a bridge in this province for a season.
> truth | Find the Elder, and tell her what the court did. | assize_close2
> quiet | Stand at the stern as the white pans diminish. | assize_close2
> mercy | Find Bo Lan, or the place he would be, and leave something for him. | assize_close2
> inquiry | Ask Duan Wuyi what the assize cost him. | assize_close2

=== assize_close2 | What the Dust Did
Duan Wuyi plays chess against himself in the cabin, with black pieces for the Concord and white for the Law Hall. When you sit, he turns the board so that you face the white.
“The factor will be tried,” he says, moving a pawn. “The magistrate will be reprimanded. The warehouse will be closed. The Law Hall will not be touched. I have no jurisdiction.” He looks up. “It would be a serious thing, for the Elder of that hall, to find that her own office had traded in quiet for twelve years.”
He lifts a bishop, and holds it, and sets it down.
“I am not going to say anything about it at the Assembly. I am telling you so that you will say nothing either, until she has had time to say it herself.”
+ assize_a4_told_su | The Elder has already seen the stamp. She sits by the window with the page in her lap and has not turned it.
+ assize_a4_to_duan | You brought the stamp to him by night. He remembers it, and so does the board.
+ assize_tong_trust | Behind him Scribe Tong sits quite straight, writing nothing.
> truth | Promise him you will say nothing, and mean it. | hub_b2_road | +b2r_assize
> inquiry | Ask him which piece on the board is the Registrar. | hub_b2_road | +b2r_assize
> quiet | Move a white pawn, in silence, and leave him to answer. | hub_b2_road | +b2r_assize
> mercy | Ask whether the Concord has ever once asked a boy what he needed. | hub_b2_road | +b2r_assize
`,
  scenarios: String.raw`
$ SU_ASSIZE_STAMP | trust+2 fear+7 suspicion-3 | elder | The player shows the Elder the Registrar’s stamp on the calm-dust ledger.
hostile: You put my own office in front of me as evidence, and expect me to be grateful. I will not thank you. I will read it. I will not forget who held the page.
wary: The Office of the Registrar. Twelve years of it, under my deputy’s hand. I did not know. I should have known. A person who signs a thing in kindness is responsible for what the kindness becomes.
neutral: You have put a stamp in front of me that I signed, and that someone else has been using. I do not know what to say. I know what the Law would say. I do not trust the Law to be right.
warm: You brought it to me before you brought it to a Censor. That is a courtesy I did not earn. I shall try to be worth it. Sit with me a while. We have no time, but I should like to be sitting.
devoted: I have been waiting twelve years for someone to bring me this page. I think I have known the shape of it since the first cup. I am glad it was you. I am so tired, and I am so relieved.
`,
  remarks: String.raw`
% assize_bo_lan_later | since:assize_free>=16 | elder | A letter from Kuan Landing, in a boy’s hand, with three misspelled characters and one correctly spelled name. I put it in the second ledger. It seemed to belong there.
% assize_tong_later | since:assize_tong_trust>=10 | elder | The Censor’s scribe keeps looking at me over his brush. I believe he is deciding whether I am capable of an honest signature. I find I would like him to decide yes.
% assize_dust_later | since:assize_dust_exposed>=14 | elder | The river-wardens have closed three calm-dust depots this week. I did not order it. I would have. That is the part I cannot stop thinking about.
`,
};
