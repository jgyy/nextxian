import type { Arc } from "../types";

/**
 * Book Five, arc three: the Wreck Fleet. Forty wind-ships of the Concord's Ninth-Year expedition stand locked in the glass in the
 * middle of the sea, their crews and nine hundred tithe-children standing at the rails as figures of glass. Captain Imre Vashti's
 * log says she burned the sea herself rather than deliver them to the Stair. Four approaches: read the log (a1, truth), break
 * the Inspector's salvage crew off the flagship (a2, force), pass as Concord officers in the dead captain's code (a3, deceit), and
 * thaw a living child out of the hold (a4, mercy). A hidden route reads the fleet's register with the founders' cipher.
 * Cast: Captain Imre Vashti (log), Salvage-Master Corvin, Pim, Hao Lan, Duan Wuyi, Hanming, Gu, the Elder.
 */
export const wreck: Arc = {
  id: "wreck",
  name: "The Wreck Fleet",
  scenes: String.raw`
=== wreck_entry | Forty Masts
You see the masts a day before you reach them: a dark comb of vertical lines on the horizon, too regular to be rock. As you close they resolve into ships. Forty tall wind-ships stand in the glass in a ragged crescent, as if they had run up on a beach and been struck still. Their sails hang in tatters. Their hulls are green with age.
They are not wrecked. They are set. Every hull stands upright in a collar of clear glass, to the waterline, and the glass is flawless and smooth. You can see the keels in it, and the barnacles, and a drowned plank of yellow wood.
“The Fleet of the Ninth Year,” says Duan Wuyi, quietly. “It left the Concord two hundred and eleven years ago, bound for the Stair. It was never heard of again.” He pushes up his spectacles. “I did not think it was real.”
Gu has gone to the rail. “There are people on the deck,” he whispers.
There are. Hundreds. They stand at the rails and in the shrouds, small and stiff and pale. They do not move. They are made of glass.
> truth | Climb to the flagship, where a lamp still burns in the stern cabin. | wreck_a1s1
> force | Notice a Garrison camp at the foot of the flagship, and men hauling cable up its side. | wreck_a2s1 | needs:4
> deceit | Notice that the Garrison men are wearing Concord officers’ coats, and carrying Concord papers. | wreck_a3s1
> mercy | Notice that one small glass figure at the stern-rail has its hand pressed flat against the glass from the inside. | wreck_a4s1
> inquiry | Take out the founders’ cipher you copied in the tomb, and hold it against the flagship’s name-plate. | wreck_h1 |  | tomb_read | You have not learned the founders’ cipher.

// ---------------------------------------------------------------- a1: the log
=== wreck_a1s1 | The Flagship
She is called Heaven’s Receipt, and she is a hundred and eighty feet of grey timber and brass, with six masts and a figurehead of a woman holding a ledger. You climb a rope ladder frozen into the glass. The deck is bare and swept, as if the crew had left that morning. Glass sailors stand at the winches with their hands on the spokes. A glass cook holds a ladle over a glass pot. Their faces are blank as eggs.
The lamp is in the stern cabin. It burns without oil, a small steady white flame in a bracket over a chart-table. Under it lies a book. It is bound in oilcloth. It is thick with dust and open at its last page.
Hao Lan reaches it first. She lifts her hand to turn the page, and hesitates.
“The log,” she says. “Captain Imre Vashti.” Her voice is hushed. “She was the Concord’s youngest fleet-commander. She took the Ninth Year expedition. She was twenty-nine.”
“Read it.”
Hao Lan clears her throat. Her hands are shaking.
> truth | Sit beside her. | wreck_a1s2
> mercy | Hold the lamp. | wreck_a1s2
> quiet | Look at the glass crew. | wreck_a1s2
> inquiry | Ask her to start at the beginning. | wreck_a1s2

=== wreck_a1s2 | The First Page
“Day one,” reads Hao Lan. “The fleet left the Tidewall at dawn. Forty ships, nine hundred and eleven souls. Of whom eight hundred are children. They are delighted. They have been told they are going to be written.” She stops. “The Registrar’s order is clipped to the page. It says: *Deliver the tithe to the Stair by the ninth night of the ninth month. Do not inform them of the purpose.*”
“The purpose.”
“It doesn’t say.” She turns the page. “Day nine. A child asked me whether a Stair is a long ladder. I said it was. She asked if she would be able to see the top. I said I did not know.”
“Day twenty. Two of the boys have started a game. They call it Stairs. One climbs on the other’s shoulders and says, *I’m written.* Then the other says, *No, you’re not,* and throws him off.”
Hao Lan’s voice cracks. She turns the page.
“Day thirty. I have found the sealed envelope. The Registrar thought I would not read it.”
> truth | Go on. | wreck_a1s3
> mercy | Hold her. | wreck_a1s3
> quiet | Wait. | wreck_a1s3
> inquiry | Ask what the envelope said. | wreck_a1s3

=== wreck_a1s3 | The Envelope
“It says,” reads Hao Lan, “that the tithe is not to be written. It is to be struck. Each child is the price of one master’s ascension. There will be a ceremony on the ninth night. The crew will be told they have been conscripted to the Stair, and will not return.” She stops. “The Captain wrote underneath: *I read it twice. I went to the rail and was sick.*”
Nobody speaks. In the cabin the little white flame burns without a flicker.
“Day thirty-one. I called the first mate. I showed him the order. He said: ‘That is the Law.’ I said: ‘Yes.’ He said: ‘We have our orders.’ I said: ‘Yes.’ He said: ‘Captain, you cannot mean—’ I said: ‘I do not know what I mean.’”
“Day thirty-four. I have not slept. There are nine hundred and eleven people on this ship, and each of them thinks I am taking them to a gift. I must decide whether to be the one who tells them.”
Hao Lan’s hand is flat on the page. She is trembling.
“The next entry is blank,” she whispers. “The one after is not.”
> truth | Read it. | wreck_a1s4
> mercy | Take her hand. | wreck_a1s4
> quiet | Look at the page. | wreck_a1s4
> inquiry | Ask what is different. | wreck_a1s4

=== wreck_a1s4 | The Decision
It is only a few lines. The handwriting has changed. It is slow and square and quite steady, like that of a woman who has settled something.
“Day thirty-five. I cannot deliver them. I cannot tell them. If I tell them, there will be a mutiny. If I do not, they will walk up the Stair on the ninth night, one by one, and not come down.
“I have found a third way. I will not describe it. If this log is read, it will have worked.
“The sea at the end of the grass is sand. Sand, heated, becomes glass. The Concord has a lamp for burning the holds of ships that carry plague. I have it. I shall ask the fleet to anchor in the middle.
“I shall not be able to leave.”
Hao Lan puts the log down. She looks at the lamp. It burns, unwavering, with a white flame that is not fire.
“The lamp,” she says. “It’s the plague-lamp.”
“It’s the thing that made the glass.”
“It’s the thing that’s still burning,” says Hao Lan. “For two hundred years. She never put it out.”
> truth | Read on. | wreck_a1s5
> mercy | Look at the glass crew. | wreck_a1s5
> quiet | Touch the lamp. | wreck_a1s5
> inquiry | Ask what she did next. | wreck_a1s5

=== wreck_a1s5 | Anchoring in the Middle
“Day thirty-six. I told them it was a storm-drill. Nine hundred children in the rigging, all in a row. They sang as they climbed. I had the first mate lock the lamp in the stern cabin. He asked what for. I said: *To keep us warm.* He did not believe me.
“Day thirty-seven. We came to the middle. The sea was flat and white. The sky was clear. I ordered anchor. I stood at the rail and watched the children play. A boy of seven asked if he could ring the ship’s bell. I said yes. He rang it nine times, as hard as he could, and laughed. I have never heard a better sound.
“At noon I lit the lamp.
“It was a lovely thing. A great white bloom of heat, which opened over the sea like a flower. The sand ran. The glass rose round the hulls in a slow bright tide, and the children stood at the rails in the light, and for a moment they were all gold.
“I did not look away.”
Hao Lan sets down the book. Her face is wet.
> truth | Take the page. | wreck_a1s6
> mercy | Hold her. | wreck_a1s6
> quiet | Close your eyes. | wreck_a1s6
> inquiry | Ask what happened after. | wreck_a1s6

=== wreck_a1s6 | After
There is one entry more. It is dated the same day. It is five lines long. It is written, you notice, in a handwriting that is no longer neat. The strokes shake. The ink is blotted.
“The glass is warm. They are not dead. I have walked among them; their hands are warm. The lamp holds them as a jar holds a firefly. They will not age. They will not wake. They will wait.
“I do not know for how long. I have done this because I could not do anything else. If anyone reads this, I ask only that they open the hold of the flagship, and check the small ones. I did not put out the lamp. I did not know how.
“I am sorry that I could not save them. I am sorry that I could not save myself. They would have been happy for a week.
“Imre Vashti. Captain.”
Nobody says anything. In the cabin the light is steady. Beyond the window, on the glass deck, nine hundred small figures stand at the rail, with their faces turned toward the sun.
The Elder, in the doorway, takes off her hat.
> truth | Close the log. | wreck_a1s7
> mercy | Weep. | wreck_a1s7
> quiet | Bow. | wreck_a1s7
> inquiry | Ask what hold she means. | wreck_a1s7

=== wreck_a1s7 | Her Wish
Duan Wuyi reads the last entry twice, aloud, in a dry choked voice. At the second reading he takes out a handkerchief and cleans his spectacles for a long time.
“She was court-martialled,” he says, finally. “In absentia. Posthumously. For the loss of the Fleet of the Ninth Year, with all hands and the tithe.” He swallows. “I have the file. I read it when I was a junior. I remember the verdict. *Treason, wilful destruction of the Concord’s property, and dereliction.* Her family was struck.”
“She saved eight hundred children.”
“She saved nothing.” His voice breaks. “They are still in the glass.”
“They are alive.”
“In a manner of speaking.” He blows his nose. “I have signed a hundred sentences like that. I did not read them. The formula was so tidy.”
The Elder says, from the door: “She asked us to check the small ones.”
“Yes.”
“Then we will.” She puts on her hat. Her face is stone. “It is the least we can do for a woman we convicted.”
> truth | Go to the hold. | wreck_a1s8 | npc:SU_WRECK_FLEET
> mercy | Take her arm. | wreck_a1s8
> quiet | Fetch a lamp. | wreck_a1s8
> inquiry | Ask where the hold is. | wreck_a1s8

=== wreck_a1s8 | The Hold
It is below the waterline, in the heart of the flagship. You go down a long ladder, with Hanming holding the lamp. The air is warm and still. The planks glow faintly, like the inside of an eyelid. At the bottom there is a hatch, and beyond it a long low hold, lined with tiers of narrow berths.
The berths are full of children.
They are asleep. That is the first thing you think. They lie in rows, in their grey tithe-smocks, with their eyes shut and their hands folded. There are a hundred in each tier, and a dozen tiers. They are small. They are not glass. They are living flesh, pale, quiet, with a faint flush on each cheek.
You walk down the aisle. Nobody speaks. You put out your hand and lay two fingers on the wrist of the nearest child. A girl of six, with a snub nose and a plait. There is a pulse. It is slow, very slow. Once, perhaps, in a minute.
“They’re breathing,” whispers Gu.
“Once an hour.” Hao Lan has her hand to her mouth. “The log was right. They are *waiting*.”
> truth | Count them. | wreck_a1s9
> mercy | Touch the girl’s hair. | wreck_a1s9
> quiet | Stand still. | wreck_a1s9
> inquiry | Ask how to wake them. | wreck_a1s9

=== wreck_a1s9 | Eight Hundred
There are eight hundred and eleven. Duan counts them with a pencil. He does it the way he counted the beds in the Mill, row by row, with a steady hand. When he finishes, he writes the figure in his notebook, and underneath it, in his careful clerk’s hand, the word *Alive.*
“We cannot wake them,” says Hao Lan. “Not yet. Not without putting out the lamp.”
“And if we do?”
“I do not know. It may be that the lamp is the only thing holding them.” She presses her fingers to her eyes. “The Captain said it was like a jar around a firefly. If you break the jar—”
“The firefly lives,” says Hanming.
“Or the light goes out.”
There is a long silence. In the berth beside you, the snub-nosed girl exhales, a tiny whisper of breath, and her eyelids flutter.
“We should leave them,” says the Elder, at last. “Until we can do it safely. We will come back.” She looks round the hold with a face of ash. “I am sorry. I do not know what else to say.”
You touch the child’s plait. It is soft and warm.
> truth | Promise. | wreck_close | +wreck_read
> mercy | Say a name. | wreck_close | +wreck_read
> quiet | Bow your head. | wreck_close | +wreck_read
> inquiry | Ask what safely means. | wreck_close | +wreck_read

// ---------------------------------------------------------------- a2: the crew
=== wreck_a2s1 | Cables
They have run steel cables from the flagship’s mainmast to a row of winches on the glass. Sixty men in grey work the winches in unison, singing a hauling-song. A crane of iron girders, built on the spot, stands at the stern. A dozen riflemen patrol the rail. At the centre of it all, in a folding chair, a plump man in an immaculate Concord coat is eating a pastry.
“Salvage,” says Ren Qiao, with his spyglass. “The Inspector’s crew. They are cutting the ship loose.”
“From the glass?”
“From the whole sea. They want to tow her to the Stair.” His scarred jaw is hard. “They have been here three weeks. They have the cranes and the cable. What they do not have is the log.”
“What do they want it for?”
“The Captain’s lamp,” says Duan Wuyi. “It is a plague-lamp. It burns forever. If they can reproduce it—” He stops.
“They could burn the next fleet,” you say.
“They would call it *an ascension*.”
The plump man at the chair has finished his pastry. He licks his fingers. He has seen you.
> force | Walk up. | wreck_a2s2 | needs:4
> truth | Hail him. | wreck_a2s2
> quiet | Watch. | wreck_a2s2
> mercy | Think of the children. | wreck_a2s2

=== wreck_a2s2 | Salvage-Master Corvin
“Corvin,” says the plump man, with a little bow. “Salvage-Master, Third Division, in the Inspector’s name. I do not believe we have been introduced.” His voice is unctuous, cheerful. He has small bright eyes and a damp pink mouth. “You are the party from the Steppe. Yes. We have been told to expect you.”
“You are cutting that ship.”
“I am *recovering* it.” He sips from a cup. “The Concord’s property. Lost two centuries ago. I am under orders to return it to the Stair, where it will be properly honoured.”
“There are children in the hold.”
“So I understand.” He beams. “Eight hundred. Delightful. They will be most welcome.”
“You would tow them to the Stair?”
“To the *Ceremony*.” His smile broadens. “It was a ceremony that waited two hundred years. It is a pity to disappoint the masters.”
Ren Qiao’s hand has gone to his hilt. You lay a hand on his arm.
“Don’t,” you say.
“Why not?”
“Because there are sixty winches,” you say, “and one of them is a lever.”
> force | Watch the crane. | wreck_a2s3
> truth | Say what you want. | wreck_a2s3
> quiet | Study the winches. | wreck_a2s3
> mercy | Hold Ren back. | wreck_a2s3

=== wreck_a2s3 | The Weak Point
It is the crane, of course. It is always the crane. A tall, ugly, hastily bolted tower of iron girders, built on the glass, taking the whole strain of the cable. You study it for an hour from the shadow of a hull. It stands on four feet, each a steel plate set in the glass with a collar of molten tin. The tin has already begun to crack. A thin white web of fractures runs out across the Sea from each.
“It’s under strain,” says Yue Zhaoning. “Look. If you lean on it—”
“It would fall.”
“Onto the winch-crew.” She shakes her head. “That’s sixty men.”
“It has to be cut at the base.”
“Cut how?” She narrows her eyes. “Those collars are tin. They hold because the glass is warm. If you cooled one—”
“It would shatter.”
“Aye.” She grins. “And the crane would walk.”
“Walk where?”
“Away from the ship.” She points. “Sideways. Not onto the men. Onto the empty ice.”
“How do we cool it?”
Yue turns. She looks at the camel. The camel looks at her, with immense indifference.
“Water,” she says. “Eleven skins. And a long run.”
> force | Plan. | wreck_a2s4
> truth | Ask Ren. | wreck_a2s4
> quiet | Fetch the skins. | wreck_a2s4
> mercy | Warn the winch-crew. | wreck_a2s4

=== wreck_a2s4 | A Run Across the Glass
It is the fastest you have ever moved. You go in the dusk, in a line, in the shadow of the hulls, each carrying two skins of water on your shoulders. Ren Qiao is first, the swordsman’s legs eating the distance. Yue next, on the camel, whooping silently. Temur, then you. Hanming, with a skin on each hip, wheezing. Behind you, Gu and Hao Lan and the Elder have been told to stay with the skiffs, and have, naturally, followed.
The first rifleman sees you at fifty yards. He shouts. He raises his rifle. Ren Qiao, without slackening his pace, flings a skin. It strikes him in the chest like a medicine-ball. He sits down.
“Go!” roars Yue.
The camp erupts. Whistles blow. Men tumble from tents. A bugle begins to blow, and breaks, and blows again.
You hit the foot of the crane at full tilt. You swing a skin from your shoulder with both hands. You swing it at the tin collar.
The water goes on in a long clear arc. It hits the metal. There is a hiss, a cloud of steam, and a crack like a pistol-shot.
> force | Throw. | wreck_a2s5
> truth | Duck. | wreck_a2s5
> quiet | Run. | wreck_a2s5
> mercy | Look for the winch-crew. | wreck_a2s5

=== wreck_a2s5 | The Crane Walks
It does not fall. That is the astonishing thing. It tilts, slowly, with a groan of bending iron, one foot freed and the others straining, and the whole tower begins to move. It lurches sideways, away from the ship, away from the camp, across the glass. Cable screams. A winch spins free. Men scatter.
It goes over like a felled tree. It lands on its side on an empty stretch of ice. It rings.
The silence afterwards is vast.
You are sitting on the glass with a wet skin in your lap. Steam is rising from the tin. All round, in the dusk, the Inspector’s men stand with their mouths open. Not one of them is hurt. The winch-crew has scattered in perfect order, as they were drilled, to the four corners.
Corvin has risen from his chair. His pastry lies in the dust.
“That,” he says, “was extremely unsporting.”
“It was a crane.”
“It was *my* crane.” His round face is purple. “I shall have you court-martialled.”
“By whom?” says Ren Qiao, panting, getting to his feet. He has a rifle across his shoulder, which he has taken from someone. “Look around.”
> force | Stand. | wreck_a2s6 | needs:4
> truth | Offer terms. | wreck_a2s6
> quiet | Watch Corvin. | wreck_a2s6
> mercy | Look at the men. | wreck_a2s6

=== wreck_a2s6 | Terms
They look at Corvin. They look at the fallen crane. They look at the swordsman with the rifle, the girl with the wet skin, the man with the scar, and the thin grey woman in the Chancery coat who has come up out of the dark, quite calmly, and is standing beside them.
Nobody moves.
“I propose,” says Duan Wuyi, in a clear mild voice, “a withdrawal.” He has his seal out. “I am the Censor-General of the Concord. I find the salvage of this vessel to be in violation of the Edict of Gentle Hands, the Law of Liens, and the Fourth Article of Maritime Property.” He glances at Corvin. “You may argue the point later. You may argue it at the Chancery. But I would advise you to withdraw now.”
Corvin’s mouth opens and shuts. “You have no authority.”
“I have a seal.”
“It has been revoked!”
“Has it?” Duan raises his eyebrows. “By whom? I do not recall signing a revocation.”
There is a silence.
“Withdraw,” says Duan Wuyi.
It is, you reflect, a very effective sentence. It is only two syllables long.
> force | Stand firm. | wreck_a2s7
> truth | Nod. | wreck_a2s7
> quiet | Watch. | wreck_a2s7
> mercy | Thank Duan. | wreck_a2s7

=== wreck_a2s7 | The Winch-Crew
They go in the morning. Corvin goes first, on a mule, with an air of wounded dignity. The sixty winch-men follow in a long dispirited line. Several of them glance back over their shoulders at the hull of the flagship. One gives a little wave. A boy of twenty with a squint lags behind the rest, and stops, and comes back.
“Beg pardon, ma’am,” he says to you, wringing his cap. “I was on the cable. I heard the girl. In the hold.”
“The girl?”
“The little one. With the plait.” He swallows. “I heard her breathe.”
“It’s very slow.”
“I know. I put my ear to the planks.” His round face is miserable. “I’ve a sister that age. In the north. She snores.”
“What do you want?”
“To say sorry.” He twists the cap. “I didn’t know. They said it was salvage. They said it was a wreck.”
“It was a wreck.”
“It’s a *cradle*,” says the boy, and bursts into tears.
You put a hand on his shoulder. He weeps for some time. Then he wipes his nose, and straightens, and salutes you, awkwardly, and runs after the rest.
> force | Watch him go. | wreck_a2s8
> truth | Call after him. | wreck_a2s8
> quiet | Look at the hull. | wreck_a2s8
> mercy | Smile. | wreck_a2s8

=== wreck_a2s8 | The Cable Cut
There is still the cable. It runs from the flagship’s mainmast to the dead winches, a quarter-mile of steel hawser, in the dawn. The Inspector’s men have left the ends fixed. If anyone returns with another crane, the Fleet will be hauled from the glass.
“Cut it,” says Ren Qiao.
“It is forty tons.”
“It’s steel. It has a lay. If we find the weak strand—” He kneels. He runs his thumb along it. “Here. A frayed one. Hmm.” He rises. “I could cut it. With a hammer and a very hard chisel.”
“How long?”
“A day.” He looks tired. “But the Wrights’ chisels are in the skiffs.”
You go and fetch them. You spend the day at the end of the cable, in the sun, with Hanming and Gu and Ren Qiao, driving a chisel into a strand of steel. The rhythm becomes a song. Strike. Pause. Strike. Pause. At sunset the last strand parts with a whine, and the hawser whips back along the glass in a long bright ripple.
Ren Qiao leans on his hammer, grey with fatigue.
“There,” he says. “That was the thing I was best at.”
> force | Nod. | wreck_a2s9 | needs:4
> truth | Thank him. | wreck_a2s9
> quiet | Pick up the chisel. | wreck_a2s9
> mercy | Give him water. | wreck_a2s9

=== wreck_a2s9 | A Quiet Fleet
You camp on the flagship that night. Nobody suggests it; it is simply where you end up. You eat on the deck, among the glass sailors, in the light of the plague-lamp. Hao Lan has found the galley stores, still sound under their wax. Hanming boils a pot of tea. The Elder sits at the chart-table, reading the log, and does not speak for an hour.
At the end of the meal, Ren Qiao gets up, walks the length of the deck, and stops at the stern-rail. He stands there for a long time, looking at the nine hundred small figures in the dark.
“We could leave a guard,” he says.
“From whom?”
“Anyone who comes.” He does not turn. “It’s a long way from the Fort. It would take them a month to fetch another crane.”
“And then?”
“And then someone else will stand here.” He lays his sword across his knees. “That is how it works. Someone always stands.”
“It might be a long wait.”
“I have waited for fifteen years on a bridge.” His voice is steady. “I am good at it.”
You look at him. He does not look back.
> mercy | Sit with him. | wreck_close | +wreck_cleared
> truth | Say you will return. | wreck_close | +wreck_cleared
> quiet | Leave him a blanket. | wreck_close | +wreck_cleared
> mercy | Say it is not his burden. | wreck_close | +wreck_cleared

// ---------------------------------------------------------------- a3: the code
=== wreck_a3s1 | Concord Coats
They are not soldiers. That is the first thing you notice. The men on the glass round the flagship wear the long grey coats and tasselled caps of the Concord’s clerks, and carry bound folios and wax-tablets, and they walk about in twos, pointing, measuring, jotting. There are a dozen of them. They look like a delegation come to value an estate.
“Appraisers,” says Hao Lan, who has been watching through a glass. “From the Fifth Office. They are inventorying the Fleet.” She lowers it. “It is a purely commercial expedition. No soldiers. Just valuers.”
“What are they valuing?”
“The ships. The cargo. The tithe.” Her mouth thins. “I looked at one of the papers. They have assigned each child a figure.”
“A price.”
“An assessed *yield*.” She sounds ill. “The word is yield.”
Yue Zhaoning, squatting beside her, has a slow, wicked smile growing on her face. “Appraisers,” she says. “Clerks. Men who carry no weapons and write everything down.”
“You have an idea.”
“I have the best idea I’ve ever had.” She stands. “I want a coat.”
> deceit | Ask what for. | wreck_a3s2
> truth | Say it is dishonest. | wreck_a3s2
> quiet | Watch the appraisers. | wreck_a3s2
> mercy | Think of the log. | wreck_a3s2

=== wreck_a3s2 | An Appraiser
There is nothing easier. You wait until dusk, when the valuers have gone to their tents, and lift three coats from a drying-line. Hao Lan finds a folio. Duan Wuyi is made to wear a cap. Within the hour you are three clerks of the Fifth Office, in grey, with paper and pencils, walking boldly across the glass toward the flagship.
“Say as little as possible,” Hao Lan murmurs. “We are tired. We have walked a long way. We are annoyed.”
“Annoyed?”
“Appraisers are always annoyed. It is a professional posture.” She adjusts her cap. “If anyone speaks to you, sigh.”
“And if they ask a question?”
“Say you will check the register.”
You reach the rail. A sentry stands by the ladder: a bored young man in a clerk’s coat, with a tablet. He looks up.
“You’re late,” he says.
“We were held at the Fort,” says Hao Lan, wearily. She sighs. It is a masterpiece. “The paperwork. You understand.”
“Oh, *aye*.” His face clears. “Go on up. Mind the third rung.”
> deceit | Climb. | wreck_a3s3
> truth | Nod. | wreck_a3s3
> quiet | Keep your head down. | wreck_a3s3
> mercy | Mind the rung. | wreck_a3s3

=== wreck_a3s3 | The Code
They have not found the log. That is plain from the first look at the chart-room. It is untouched, as the Captain left it, with the plague-lamp burning over it. But the valuers have found the desk. They have found, in a drawer, a thick sheaf of papers tied with a black ribbon.
“Her correspondence,” says a clerk, holding it up. “From the year before the voyage. It’s in a cipher.”
“A cipher?” says Hao Lan, with an air of bored interest.
“A fleet-code. A substitution, with a keyword.” He scratches his head. “The Fifth Office can’t break it. We’ve had three of ours on it for a week.”
Hao Lan’s eyes have gone half-lidded. “May I see?”
“You’re not cleared.”
“I’m Appraisal. I’m always cleared.” She sighs again. “Is it a polyalphabetic?”
The clerk gawps. “How did you know?”
“I read.” She takes the papers from him and glances through them. Her eyebrows rise. “Oh, this is *easy*. It’s the Vashti cipher. The Captain’s sister wrote a pamphlet on it. In the year of the Fire Horse.”
“There’s a *pamphlet*?”
“Everyone has a pamphlet,” says Hao Lan.
> deceit | Stay quiet. | wreck_a3s4
> truth | Look at the papers. | wreck_a3s4
> quiet | Watch the clerks. | wreck_a3s4
> mercy | Hold Duan’s arm. | wreck_a3s4

=== wreck_a3s4 | Reading Over a Shoulder
She breaks it in twenty minutes. She does it at the chart-table, in the lamplight, with a stub of pencil, murmuring to herself. The valuers crowd round her. They are plainly in awe. By the time she has finished the first page they are bringing her tea.
You stand a little way off, holding a folio. Duan Wuyi, beside you, is studiously expressionless.
“It’s a letter,” says Hao Lan. She reads aloud, in a voice of faint, scholarly distaste. “‘To my sister, with love. I have been appointed to the Ninth Year. I do not like the sound of it. Please pray for me.’”
“That’s all?” says a clerk.
“There’s a postscript.” She turns the page. “‘The Registrar’s office has asked me to keep a second log. I have not told them I keep a third.’”
The clerks exchange glances.
“A third?” says one.
“A private one,” says Hao Lan, and her eyes meet yours across the lamp. “Hidden. Somewhere in the ship.”
You feel your pulse pick up.
“Where?” says the clerk, breathlessly.
“It doesn’t say,” says Hao Lan, with perfect truth. “But I should think it’s somewhere she could reach in the dark.”
> deceit | Look round. | wreck_a3s5
> truth | Say nothing. | wreck_a3s5
> quiet | Feel the walls. | wreck_a3s5
> mercy | Feel for the lamp-bracket. | wreck_a3s5

=== wreck_a3s5 | The Third Log
It is in the lamp-bracket. Not in it: under it. A thin slot in the oak, no wider than a coin, with a sliver of slate pressed into it. You find it with your thumbnail, while the valuers argue about the cipher. You draw the slate out, very slowly, with your back to the room.
It is a tablet the size of your palm, scratched with a nail in a spidery hand. It is a map. It shows the flagship, in cross-section, with the hold marked in red, and a dot in the centre. Beneath the dot are four words.
*The Seal of Imre.*
You turn it over. On the back there is a tiny diagram of a key. It is round, hollow, no bigger than a thimble, with nine notches.
Nine.
You fold your fingers over the slate and slide it into your sleeve. You turn. Hao Lan is looking at you. She has not moved. She says nothing, but you see her breathe out, once, very slowly.
“I think,” she says to the clerks, “that we have finished.”
> deceit | Nod. | wreck_a3s6
> truth | Hold the slate. | wreck_a3s6
> quiet | Bow. | wreck_a3s6
> mercy | Smile. | wreck_a3s6

=== wreck_a3s6 | Leaving Politely
It takes forty minutes to leave. The valuers insist on shaking your hands. They insist on offering tea. They insist, with the gloomy persistence of men who have found a rare competence, that you stay and help them with the rest of the correspondence, and Hao Lan has to say, three times, that the Fifth Office will be sending a more senior clerk in the morning.
“Who?” asks one.
“A very important one,” says Hao Lan. “She is terrifying. You will like her.”
“What is her name?”
“It is a secret,” she says, with great gravity. “She prefers it to be unknown.”
You walk across the glass in the moonlight. Nobody follows. At the first hull you stop, and let out your breath in a long shuddering laugh.
“Terrifying,” says Duan Wuyi, behind you, in a faint voice. “She is *terrifying*.”
“I invented her on the spot.”
“She seems very real.” He mops his brow. “I can see her. She has grey eyes and a pointed chin.”
“I based her on you,” says Hao Lan.
> deceit | Laugh. | wreck_a3s7
> truth | Take the slate out. | wreck_a3s7
> quiet | Walk. | wreck_a3s7
> mercy | Thank them. | wreck_a3s7

=== wreck_a3s7 | A Nine-Notched Key
You find the seal at midnight, in the hold, under the berth of the snub-nosed girl: a panel in the planking, and behind it an object wrapped in sailcloth.
It is a key. A small round hollow key of grey metal, no bigger than a thimble, with nine notches round its rim. It is warm. It hums.
“Imre’s seal,” breathes Hao Lan. She lifts it with two fingers. “The captain’s authority. It opens the lamp.”
“It puts it out?”
“It *turns it down*. A notch at a time.” She holds the tablet to the light. “Nine stages. The children could be woken gently. Over a month, perhaps more. By someone who could stay.”
“We can’t stay.”
“No.” Her voice cracks. “But someone could.”
“Then we leave the key,” you say, “with someone who can.”
> deceit | Wrap it. | wreck_a3s8
> truth | Think. | wreck_a3s8
> quiet | Hold the girl’s hand. | wreck_a3s8
> mercy | Ask who. | wreck_a3s8

=== wreck_a3s8 | A Keeper for the Fleet
It is Yue who thinks of them. She stands in the flagship’s hold, in her camel-driver’s coat, with a lantern. “Nomin’s Wrights,” she says. “Or any Wright. They’re the nearest. They sail this sea all season. They have mallets and patience and nothing to do in the winter.”
“Will they?”
“Ochir will.” She grins. “He’ll complain the whole time.”
“And the Inspector’s men?”
“Won’t come back.” She taps the slate. “Not if we leave word. Not if the Appraisers have it that the Fleet has been *assessed and found of negligible yield.*”
“A forged finding.”
“Hao Lan will write it.” She winks. “In the Fifth Office’s best hand.”
Hao Lan sits down on an upturned bucket. She smooths the paper across her knee. Her tongue is between her teeth. She writes. It takes a quarter of an hour. When she has finished she reads it aloud in a faint dry drone: “*The Fleet of the Ninth Year is a derelict. Its holds contain nothing of value. Its crew are decayed. The tithe is spoiled. Recommend abandonment.*”
She looks up.
“It’s the nastiest thing I’ve ever written,” she says. “And the kindest.”
> deceit | Seal it. | wreck_a3s9
> truth | Applaud. | wreck_a3s9
> quiet | Fold it. | wreck_a3s9
> mercy | Hold her hand. | wreck_a3s9

=== wreck_a3s9 | Lies on Behalf of the Sleeping
They leave it with the valuers, on the chart-table, under a paperweight, with the Fifth Office’s stamp. They will find it in the morning. They will read it with sighs, and sign it, and strike the Fleet from the inventory. Within a week, the assessors will have gone. Within a month, there will be no one on the glass but the Wrights, with a gift of a key.
You sit on the rail of the flagship, with your legs dangling, and watch the sun come up. It is the fifth you have seen on the Sea. The glass is blushing. Down below, the sleeping children breathe, one slow breath an hour.
“I feel a little ill,” says Hao Lan, beside you.
“Because of the lie?”
“Because of how good it was.” She hugs her knees. “It was such a beautiful lie. It had a lovely cadence. It saved eight hundred children.” She frowns. “I feel I ought to feel more guilty.”
“Do you?”
“A bit.” She grins unwillingly. “Not as much as I should.”
“Is that bad?”
“I think,” says Hao Lan, “it might just be called being useful.”
> deceit | Smile. | wreck_close | +wreck_posed
> truth | Hold her hand. | wreck_close | +wreck_posed
> quiet | Look at the sun. | wreck_close | +wreck_posed
> mercy | Hug her. | wreck_close | +wreck_posed

// ---------------------------------------------------------------- a4: the hand on the glass
=== wreck_a4s1 | A Hand
She stands at the stern-rail of the nearest ship, a small figure among the glass sailors, no taller than your waist. Her face is turned toward the sun. She is made of glass like the rest. But one of her hands is pressed flat against the outside of the case, palm out, fingers spread, as though she were laying it on a windowpane.
It is not frozen the way the others are. It is moving, a little. You stand and watch it. The fingers curl. The palm flexes. The hand lifts a half-inch from the glass, and falls.
“It’s her,” whispers Gu. “She’s trying to knock.”
“She’s alive.”
“Look at the edges.” He has gone down on one knee. “The glass is thin there. Look. It’s not sealed. There’s a hairline.”
You see it. A pale crack in the glass round the girl’s shoulder, as fine as a hair. It runs from the rail down her arm to the fingers. Along it the glass is faintly warm.
“Can we get her out?” you say.
Gu picks up a chisel. His face is white.
“I don’t know,” he says. “But I’m a glass-blower.”
> mercy | Hold the lamp. | wreck_a4s2
> truth | Ask what he needs. | wreck_a4s2
> quiet | Touch the glass. | wreck_a4s2
> inquiry | Ask Hanming. | wreck_a4s2

=== wreck_a4s2 | Two Glass-Blowers
It takes both brothers. They sit on the deck at the child’s feet, in the shadow of the rail, with a brazier, a pair of tongs, a lump of beeswax and a flask of olive oil. Hanming heats the end of an iron rod in the coals. Gu holds the tongs. They murmur to each other in low voices. They do not look up.
“Slowly,” says Hanming. “If you put the heat on too fast it’ll craze.”
“I know.”
“From the outside in. Like you’re warming a baby’s bath.”
“I *know*, Ming.”
“I’m only saying.”
“You’ve been saying it for an hour.” Gu is flushed and sweating. “I’m not four.”
“No.” A pause. “Sorry. Habit.”
Gu looks up. For a moment his face is quite soft. “It’s nice,” he says, “actually. Being told.”
Hanming blinks. His scarred face works.
They bend again over the rail. Round the girl’s hand, a thin line of glass begins to glow, faintly orange, as a tongue of iron touches it. The crack widens a hair.
The fingers twitch. They reach.
> mercy | Hold your breath. | wreck_a4s3
> truth | Hold the lamp closer. | wreck_a4s3
> quiet | Watch the child. | wreck_a4s3
> inquiry | Ask how long. | wreck_a4s3

=== wreck_a4s3 | Breaking the Case
It takes the whole day. They work in rotation, slowly, patiently, stopping to let the glass cool and then beginning again. The seam widens an inch, then two. The sun swings round and falls. By dusk there is a gap you could slide a hand through, and the girl’s fingers have curled round the edge.
A little face is visible through it. It is a girl of about nine. She has freckles, and a fringe cut crooked, and enormous grey eyes. They are open. They look at you.
She does not move. She does not blink. But her mouth, a little, opens.
“She’s breathing,” breathes Gu. “Look. Look at her chest.”
It rises. It falls. It is a long slow draught, like a sleeper’s. Another comes a minute later. The grey eyes follow you as you shift on the deck.
“She can hear us,” says Hanming, in a shaken voice. “She’s awake.”
“For two hundred years.”
“I don’t think she knows.” He swallows. “I think it’s been about ten minutes.”
You kneel at the rail. You slide your hand through the gap. The girl’s fingers close round it, cold and small, and cling.
> mercy | Hold on. | wreck_a4s4
> truth | Speak to her. | wreck_a4s4
> quiet | Hum. | wreck_a4s4
> inquiry | Ask her name. | wreck_a4s4

=== wreck_a4s4 | Pim
“Pim,” she says. It is a whisper, scarcely a breath, the first sound of her life in two centuries. Her lips are dry and cracked. “It’s Pim.”
“Hello, Pim.”
“Is it morning?”
“It’s evening.”
“Oh.” She frowns. “It was morning. The Captain rang the bell.” She says it with perfect, puzzled clarity. “I was in the rigging. I wanted to ring it too, but I was too small.”
“You rang it.”
“Did I?” Her eyes widen. “I don’t remember.” She licks her lips. “Where is everyone?”
You glance round the deck. The glass sailors are standing where they were, in the dusk, with their hands on their spokes.
“They’re asleep,” you say.
“Oh.” She considers this. “Will they wake up?”
“I hope so.”
“Good.” She yawns, widely, with her whole face. “I’m hungry. Is there porridge?”
Gu makes a sound that is half sob, half laugh. He wipes his eyes on his sleeve.
“We’ll find some,” he says.
> mercy | Smile. | wreck_a4s5
> truth | Tell her the truth. | wreck_a4s5
> quiet | Hold her hand. | wreck_a4s5
> inquiry | Ask what she remembers. | wreck_a4s5

=== wreck_a4s5 | Porridge
They find it in the galley, under a layer of wax: three barrels of oats, sound as the day they were packed. The Elder cooks it, which no one expected. She stirs the pot with a straight back and a grim face, and doles it into a tin bowl with a ladle. She adds honey. She adds a pinch of salt. She hands it to the child on a tray.
Pim eats the whole bowl in four minutes, sitting in a blanket on the cabin floor with her feet drawn up. She asks for more. She eats a second, more slowly, with long pauses to look at everything.
“It’s very good,” she says. “Who are you?”
“I’m Wanru.”
“Are you the Captain?”
“No.” The Elder’s mouth tightens. “I’m a clerk.”
“What’s a clerk?”
“A person who writes things down.”
“What for?”
There is a pause. The Elder looks down at the spoon in her hand. You watch her search for the answer, and fail to find it, and find, instead, another.
“So that someone will know,” she says. “If they ask.”
Pim nods, satisfied. She scrapes the bowl.
“That’s a good job,” she says.
> mercy | Smile. | wreck_a4s6
> truth | Look at the Elder. | wreck_a4s6
> quiet | Refill the bowl. | wreck_a4s6
> inquiry | Ask about the other children. | wreck_a4s6

=== wreck_a4s6 | The Other Children
“There are lots,” says Pim. “We were in the berths. We played Stairs.” She wriggles. “I won. I was on the top bunk. I could see through the hatch.” She stops. “It was the last day. I climbed up. I looked out.”
“What did you see?”
“A big white light.” Her eyes are wide. “It was in the middle of the sea. It opened like a flower. It was *so pretty.*” She hugs her knees. “Then I was here.”
“You were in the glass.”
“I was?” She looks at her hands. “Is that why my arms are cold?”
“It is.”
“Oh.” She frowns. “It was warm before.” She stares at the blanket for a long moment. “Are the others in the glass, too?”
“Some of them.”
“Can they get out?”
“I think so.” You choose the words carefully. “It will take a while. They’ll have to be woken one at a time. Very slowly.”
“Like me?”
“Like you.”
“I don’t think I want to be the only one,” says Pim.
> mercy | Hold her. | wreck_a4s7
> truth | Say she will not be. | wreck_a4s7
> quiet | Wait. | wreck_a4s7
> inquiry | Ask what she wants to do. | wreck_a4s7

=== wreck_a4s7 | What Pim Wanted
She wants to stay. She says it very firmly, standing in the middle of the cabin in the Elder’s coat, which comes down to her ankles. “I want to be here when they wake. So they’re not scared.” She hitches up the sleeves. “I was scared. It was the worst. You open your eyes and there’s nobody.”
“You can’t stay alone.”
“I won’t.” She shows her teeth. “There’s the Wrights.”
“What Wrights?”
“The ones who came with you. I heard them. They sound like my uncle.” She looks at Hanming, who has gone red. “He’s the one with the scar. He’s got a kind voice.”
“I’m a glass-blower,” says Hanming, absurdly.
“That’s good.” She nods. “You can stay, too.”
“I can’t. I’ve—”
“Then you can come back.” She says it as if it settled the matter. She turns to the Elder. “And you write it down. Where I am. So they know.”
The Elder bows her head. Her lips are trembling.
“I shall,” she says.
> mercy | Smile. | wreck_a4s8
> truth | Promise. | wreck_a4s8
> quiet | Look at Hanming. | wreck_a4s8
> inquiry | Ask how she will manage. | wreck_a4s8

=== wreck_a4s8 | Provisions
It takes a day to make arrangements. The Wrights’ nearest camp is forty miles to the south; Temur rides there on the camel, with a letter in Hao Lan’s best hand. He comes back with Ochir’s grandnephew and a train of five sledges, laden with blankets and flour and a stove. They set it up in the flagship’s galley. A small fierce woman of sixty arrives with a cooking-pot and takes command.
“Mother Tsagaan,” says the grandnephew, with awe. “She raised eleven.”
“Twelve,” says the woman. She sniffs the porridge. “Needs more salt.”
Pim sits in the galley window, swinging her legs, eating a honey-cake. She is in the best of health. The colour has come back to her cheeks. She already has a tiny gang of Wright children following her about, entranced.
The Elder has drafted a notice and nailed it to the mast. It reads: *This ship contains eight hundred and eleven children, who are alive. They are to be woken at the pace the Keeper chooses. They are to be fed. They are to be left alone by the Concord.*
Underneath, in a spiky hand, is the Censor-General’s seal.
> mercy | Read it. | wreck_a4s9
> truth | Nod. | wreck_a4s9
> quiet | Look at Pim. | wreck_a4s9
> inquiry | Ask Mother Tsagaan how long. | wreck_a4s9

=== wreck_a4s9 | Goodbye for Now
You leave on the seventh day. It is a clear cold dawn, with a thin wind from the west. The flagship stands in her collar of glass, as she has stood for two centuries, but there is smoke from the galley chimney, and a line of washing on the rail, and the sound of a child singing in the rigging.
Pim has come to see you off. She stands on the glass in the Elder’s coat, with a honey-cake in each hand, and watches you hoist sail.
“Come back,” she says.
“We will.”
“Promise.”
“I promise.”
“No,” she says. “Say it properly. Say *I will come back and I will check on the small ones.*”
“I will come back,” you say, “and I will check on the small ones.”
She nods, satisfied. She holds out one of the cakes.
“That’s for the journey,” she says. “It’s a bit squashed.”
You take it. It is warm. Behind her, high on the mast of the flagship, the old ship’s bell hangs in its cradle of frost. A small boy has climbed up to it. He lifts the clapper.
It rings nine times. It is the best sound in the world.
> mercy | Wave. | wreck_close | +wreck_pim
> truth | Salute. | wreck_close | +wreck_pim
> quiet | Eat the cake. | wreck_close | +wreck_pim
> inquiry | Look back. | wreck_close | +wreck_pim

// ---------------------------------------------------------------- hidden: the register
=== wreck_h1 | The Founders’ Hand
It is Hao Lan who notices it first. She is looking at the brass name-plate on the flagship’s stern, at the three characters of the ship’s name, Heaven’s Receipt, and her notebook is open on her knee at a page covered in a tight, tilted script you copied from the wall of the second room in the tomb. She goes very still.
“The T,” she says. “Look. The cross-stroke. It’s the same hand.”
“Whose?”
“The founders’.” She lifts the page against the plate. “It’s a cipher. They all used it. A shift of the radical. It runs under the name like a watermark.” Her voice shakes. “The ship isn’t just called Heaven’s Receipt. It is a *receipt*.”
“For what?”
She turns the plate. On the back, scratched into the brass, in tiny lines, is a column of marks. They are not words. They are a register. Hundreds of them, in rows, with a symbol beside each.
“Names,” says Duan Wuyi, in a whisper. “The tithe.” He bends close. “Look. The founders’ cipher. They kept the roll in the ship’s own name.”
Hao Lan is already counting.
> inquiry | Read it. | wreck_h2
> truth | Hold the plate. | wreck_h2
> mercy | Look at the children. | wreck_h2
> quiet | Wait. | wreck_h2

=== wreck_h2 | Eight Hundred and Eleven Names
It takes her two nights. She sits on the stern deck, under the plague-lamp, with the brass plate on her knee and her notebook beside it, and works out the cipher character by character. Duan holds the lamp. The Elder keeps the tally. Nobody speaks.
At the end of the second night she has it. She sits back against the rail, shaking, with a long strip of paper in her hand. On it, in her careful script, are written eight hundred and eleven names.
“They’re all here,” she whispers. “Every one. Where they were born. Their ages. Their mothers.” She presses a hand to her mouth. “The Registrar kept a *register*. Of the ones he meant to strike. He wanted it on the record.”
“So that he could prove he’d done it.”
“So that he could prove he had *paid.*” Her voice breaks. “It’s a receipt. It’s the one thing he wrote that’s true.”
Duan Wuyi is crying quietly into his handkerchief.
“And now it’s the one thing,” says the Elder, in a hard, bright, level voice, “that can undo it.”
Everyone looks at her.
“A struck name can be written back,” she says. “If one has the register.”
> inquiry | Hold the paper. | wreck_h3
> truth | Ask how. | wreck_h3
> mercy | Look at the children. | wreck_h3
> quiet | Take her hand. | wreck_h3

=== wreck_h3 | Writing Them Back
It takes a week, at the captain’s own table, with the Elder’s seal and Hao Lan’s hand. Each name takes a minute. You write the name. You write the mother’s. You write the place. The Elder presses her seal into the wax, and says, in her dry exact voice: *Written.*
The first day, you do forty. The second, sixty. The Elder has not stopped. She sits upright on the captain’s chair with her back like a ruler, taking the pages from the pile, one after the other, and pressing the seal, and saying the word.
On the third day, a child in the hold sits up.
It is the snub-nosed girl. She opens her eyes. She looks about, bewildered, and says in a clear voice: “Is it breakfast?”
They come awake all that week. One by one, in the dozens, as the register is written. By the end of it the lamp has burned down to a candle’s flame. The hold is full of the sound of little voices.
The Elder is shaking. She puts down the seal.
“I have written eight hundred and eleven,” she says. “I did not have to count.”
> inquiry | Hold her. | wreck_close | +wreck_register
> truth | Bow. | wreck_close | +wreck_register
> mercy | Weep. | wreck_close | +wreck_register
> quiet | Look at the hold. | wreck_close | +wreck_register

// ---------------------------------------------------------------- close
=== wreck_close | Under Heaven’s Receipt
You leave the flagship in the grey light of a cold morning. The mast stands up over you, bearded with frost. The glass sailors on the deck, in their rows, look toward the sun with their blank, bright, hopeful faces. From the galley chimney a thin thread of smoke goes straight up into the still air.
+[how] wreck_read | You read the captain’s log, and learned that she burned a sea to save a fleet.
+[how] wreck_cleared | You walked a crane off a ship and cut a forty-ton cable by hand.
+[how] wreck_posed | You borrowed a clerk’s coat, broke a dead captain’s code and wrote a very kind lie.
+[how] wreck_pim | A girl of nine woke in a case of glass and asked for porridge.
+[how] wreck_register | You wrote eight hundred and eleven names back into the book.
The Elder has the log. She carries it in the crook of her arm, wrapped in oilcloth, as one carries a baby. She has not let go of it since the cabin.
“I shall publish it,” she says. “At the Stair. In front of the whole Concord.” Her face is calm. “I shall read it aloud.”
“They will not listen.”
“Of course they will not. They never do.” She almost smiles. “That is not the point of reading things aloud. The point is to have said them.”
She walks to the rail and looks down at the glass.
“Imre Vashti,” she says, in her clear dry voice, to the dawn. “Captain. Convicted in absentia. I find the verdict unsound.”
She says it once. Then she goes below.
> truth | Bow. | wreck_close2 | +b5q_wreck
> mercy | Follow her. | wreck_close2 | +b5q_wreck
> quiet | Look at the glass. | wreck_close2 | +b5q_wreck
> inquiry | Ask what she will do with the log. | wreck_close2 | +b5q_wreck

=== wreck_close2 | Hanming Looks Back
The skiffs run all day before a steady wind. By dusk the masts of the Fleet are a faint grey comb on the western horizon, no bigger than a hair. Hanming sits in the stern of Return with his chin on his fist, watching them go.
“I could have stayed,” he says to nobody.
“You could.”
“It’s a thing I’d be good at. Watching.” He rubs his scar. “I’ve done it for fifteen years. Sitting in a barracks, counting.” A dry, short laugh. “Fifty-one every night.”
“You carried them home.”
“I carried a list.” He turns. His eyes are wet. “I’ve never done anything useful with my hands.”
“You melted a window in a case of glass.”
“Aye. For a girl who was already half out.” He rubs his face. “It was lovely. It was the first time I’ve felt like the right size.”
Gu has come aft. He sits down beside his brother, bump, and leans.
“You’ll go back,” he says.
“Will I?”
“Pim said. She said you’d better.”
Hanming laughs. It is the first full laugh you have heard from him.
> truth | Smile. | hub_b5_a | bond:gu+2
> mercy | Hold him. | hub_b5_a | bond:gu+2
> quiet | Look at the dusk. | hub_b5_a | bond:gu+2
> inquiry | Ask about the fifty-one. | hub_b5_a | bond:gu+2

`,
  scenarios: String.raw`
$ SU_WRECK_FLEET | trust+4 respect+3 fear+4 | elder | The Elder walks among nine hundred children made of glass.
hostile: I counted them. I could not stop. I got to four hundred and six, and found that I was counting the number of sentences I had signed. I stopped there. I did not trust myself to know whether the numbers were the same.
wary: A boy at the rail had a toy. A carved horse, no larger than a thumb. It had been made by someone who loved him. I looked at it for a very long time, and I thought: this is what the Reserve is. A child with a toy horse, signed for in triplicate.
neutral: I touched the glass of the nearest. It was warm. I should not have expected that. I should have expected something colder, and more final. It was the warmth of a thing that has only been told to wait.
warm: Hanzhen stood beside me. He did not speak. After a while he put his hand on the glass, over the child’s, and I did the same. I do not know what it was for. I think we were saying that they were not the only ones who had been told to wait.
devoted: If I am asked what I did at the Wreck Fleet, I shall say that I stood among nine hundred children and did not look away. I shall say that it was the only thing I could think of that was not a lie.
`,
  remarks: String.raw`
% wreck_pim_later | since:wreck_pim>=3 | gu | Pim has asked me what a ‘stair’ is. I said it was a thing you climb. She said, ‘why would you?’ I haven’t been able to answer her all day.
% wreck_imre_later | since:b5q_wreck>=4 | duan | I have copied out Captain Imre’s last entry. It is five lines. I intend to read it to every Censor I meet, and I intend to do it in a clear voice.
`,
}
