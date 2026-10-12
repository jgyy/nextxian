/**
 * Side Path: The Right Yard. Opened from the Law Hall by a man, and by no one else. The wardens train in a yard whose wall carries fourteen
 * lanterns that are lit once a year and never put out for long. A man who is taken into the yard holds one for a night, and swears not to ask who signed the
 * orders that sent them down. The path ends back at the memorial, with the Elder asking what he swore.
 */
export const rightYardSource = String.raw`
=== ry_0 | The Right Yard
Past the memorial’s east pillars a gate stands open on a yard of beaten earth, loud with the clack of staves. The wardens train here, forty men in grey with their sleeves tied back, and along the far wall hangs a row of lanterns, each as long as a forearm and none of them lit. A broad man with a shaved head sees you at the gate and puts down his stave. He is Kuo Dehai, the yard-master, and he says it in the voice of someone who has said it to every man who ever came up the mountain alone: “Brother. You look as if you could use a bench.”
+[dao] hero:dao=alchemy | Liniment hangs in the air like weather. Forty men in this yard have never had a bad shoulder in their lives, and you know whose pills they take.
+[dao] hero:dao=forging | The staves are iron-shod and the shoes are riveted; you see at once which smith did the work and what he was thinking about.
+[dao] hero:dao=talisman | A paper charm is nailed above the gate, the ink gone brown, and you read at a glance that it keeps out nothing at all, as a charm should.
+[dao] hero:dao=formation | The wardens drill in a pattern that is not quite a ring, and the gaps in it are placed with a keeper’s care.
+[dao] hero:dao=beast | A yard dog lies across the gate with its chin on its paws, and does not stir for you, which is the highest praise it gives.
+[dao] hero:dao=sword | You note the stances the men fall into, and the one they don’t. A man who has never held a blade would not see it. You do.
+[dao] hero:dao=healing | Two men on the bench nurse bruised ribs with an expert disregard, and you see the hairline cracks they have not admitted to.
+[dao] hero:dao=fate | The yard-master’s knuckles are scarred in a pattern you have seen on a gambler’s tray: a man who reads where the stave will land.
+[dao] hero:dao=none | You stand at the gate with open hands, and the men glance at them and do not stop the drill, which is a kindness.
> truth | Tell him you have come up the mountain on the Elder’s business, and sit down on the bench. | ry_1 | +ry_sat
> inquiry | Ask what the lanterns on the wall are for. | ry_1 | +ry_asked
> force | Pick up a stave from the rack and ask who in the yard wants to try you. | ry_1 | +ry_stave karma-1 qi+2
> quiet | Stand at the edge of the yard and watch a full round before you say a word. | ry_1 | +ry_watched

=== ry_1 | The Fourteen Lanterns
Kuo Dehai walks you along the wall. Each lantern has a name painted on its base in the Law Hall’s straight script, and he reads them without needing to look. “The fourteen who went down,” he says. “We light them on the night of the Sealing, once a year, and a man holds each through the dark. The wardens’ rule is that a man who has held a lantern is a brother of the yard.” He stops at the last lantern, which has no name painted on it, only a dark smear where something was scraped away.
+ ry_sat | The bench has been warmed by a hundred men before you, and the wood has the shine of old hands.
+ ry_asked | The question is the commonest one a stranger asks, and Dehai answers it as if it were the first.
+ ry_stave | The men have drifted nearer. Nobody has said yes, and nobody has said no.
> inquiry | Ask who scraped the name from the last lantern. | ry_2 | +ry_scrape
> truth | Say that the Elder’s ledger names all fourteen, and that you have read it. | ry_2 | +ry_ledger
> mercy | Touch the fourteenth lantern and say nothing. | ry_2 | +ry_touched
> force | Demand that the name be painted back. | ry_2 | +ry_demanded karma-1

=== ry_2 | The Brother’s Oath
Dehai takes from his sleeve a strip of grey cloth, folded in four, and unfolds it on the bench between you. It is the wardens’ oath, in the Law Hall’s plain hand. “I will hold the lantern through the night. I will not put it out. I will not ask who signed.” He says the last line twice, so you hear that he has said it twice. “Every man in the yard swore it. Ren Qiao swore it at seventeen. It is not a cruel oath, brother. It is a way of being able to hold a lantern at all.”
+ ry_scrape | He does not answer your question, and his silence is also an oath.
+ ry_ledger | He says that the Elder’s ledger is the Elder’s, and the yard’s lanterns are the yard’s.
> truth | Swear it as it is written, and mean it. | ry_3 | +ry_sworn bond:ren+2
> deceit | Swear it with your thumb folded under your fingers, and hold the lie like a coin. | ry_3 | +ry_sworn_false bond:ren-1 karma-2
> inquiry | Ask what happens to a man who asks who signed. | ry_3 | +ry_asked_cost
> mercy | Refuse the oath, and offer to hold the lantern without swearing. | ry_3 | +ry_refused karma+1

=== ry_3 | The First Bout
Custom in the yard: a man who is to hold a lantern is tried first, in a bout with the youngest warden, to see if he will keep his feet in the dark. The youngest is Chang Qiyun, seventeen and taller than he knows, and he looks at the ground. The yard has formed a ring. Nobody has told you the rule except that it ends when one man says so, and that the man who says so first is not thought the less of.
+[talent] hero:talent=wood | Your root answers the ash staves in the rack; you feel the grain in them, and which is cracked.
+[talent] hero:talent=fire | The ring is warm with the breath of forty men, and your root leans into it like a hand to a hearth.
+[talent] hero:talent=earth | Your feet find the yard’s beaten earth and sink a finger’s breadth, and you are very hard to move.
+[talent] hero:talent=metal | The staves are iron-shod, and every shoe rings in your teeth; you hear the bout before it begins.
+[talent] hero:talent=water | You wait for Qiyun with the stillness of a pool, and he gives off the first ripple.
+[talent] hero:talent=mixed | The yard offers a little of each element to you, and none strongly; you take the yard’s measure and keep it.
+[talent] hero:talent=heaven | The wardens look at the heaven-mark and then not at it, and Qiyun drops his eyes lower still.
+[talent] hero:talent=late | You are no one’s idea of a warden, and the men know it and will wait a long time to see what you are.
> force | Meet Qiyun hard, and win it fast. | ry_4 | +ry_bout_won qi+1 karma-1
> mercy | Let Qiyun win, and give no sign that you did. | ry_4 | +ry_bout_lost karma+2
> quiet | Hold your ground, and say when he has had enough. | ry_4 | +ry_bout_held qi+2
> inquiry | Ask him, quietly, where the stave is going to land, and watch his face. | ry_4 | +ry_bout_read insight+2

=== ry_4 | Ren Qiao’s Bench
After the bout a man is waiting at the end of the bench with a lantern across his knees. Ren Qiao is thirty-two, with a soldier’s hands and a scar that goes through his left eyebrow. “I held the lantern for them when they went down the path,” he says. “I was seventeen. The Elder was Registrar, and I thought she was a hard woman, and I still do.” He turns the lantern in his hands. “Su Mengjiao taught us to breathe in the outer courtyard, so that the light would not shake. She said a flame only goes out if you stop being afraid of it, and a man who is afraid of the fire should give up lamps.”
+ ry_sworn | Ren looks at the cloth in your hand and does not mention it, and the not-mentioning is a sort of welcome.
+ ry_sworn_false | Ren looks at your thumb, folded under, and looks away from it, and does not say what he has seen.
+ ry_refused | Ren says he refused it too, the first time, and was made to say it again the next dawn.
> truth | Tell him you are looking for Gu Hanzhen, and ask how a warden would find him. | ry_5 | +ry_asked_ren
> mercy | Ask him whether he would like company on the night watch. | ry_5 | +ry_company bond:ren+2
> quiet | Sit beside him and say nothing, as men do. | ry_5 | +ry_beside bond:ren+1
> inquiry | Ask him what he saw when the lanterns first guttered. | ry_5 | +ry_gutter

=== ry_5 | The Night Watch
Night comes. Dehai lights the fourteen one by one with a single taper, and gives you the fourth, a long grey lantern with a name painted at its base. You hold it in both hands. The yard empties. The wind picks at the flame, and you think of a woman you never met, humming. At the middle of the night the lantern in your hands gutters of its own accord, and from the dark beyond the circle of light comes a sound like someone drawing breath to speak, and the sound is not fear, and not quite a voice.
> quiet | Keep the flame steady, and do not answer. | ry_6 | +ry_flame_steady qi+3
> truth | Answer it, quietly, with the name painted on the lantern. | ry_6 | +ry_flame_named karma+1
> mercy | Cup a hand round the flame, and tell it that it is not alone. | ry_6 | +ry_flame_cupped karma+2
> force | Raise the lantern high and tell the dark to show itself. | ry_6 | +ry_flame_raised karma-1 qi-3

=== ry_6 | A Name Called
Toward dawn the lantern in your hands begins to burn a different colour, a cold blue at the edge of the yellow, and the name on its base seems to shift under the lamplight. Kuo Dehai is standing at the gate with his arms folded, watching, and he does not look like a man watching a trick. “It does that,” he says, “for one man in every ten who holds the night. We do not say why.” He holds out a cup of hot water. “You may put it down now. A brother is allowed to put it down.”
+ ry_flame_steady | The flame stood so still that Dehai has taken a note of it.
+ ry_flame_named | He has heard the name you spoke, and does not say that he has.
+ ry_flame_cupped | Your hand is scorched pink, and he sees it, and sets the cup in the hollow of your palm.
> mercy | Put the lantern down gently, and sit with it till the blue goes out. | ry_7 | +ry_put_down
> truth | Keep holding it, and tell Dehai you will put it down when the dawn does. | ry_7 | +ry_held_to_dawn qi+2
> inquiry | Ask him what the blue means. | ry_7 | +ry_blue_asked
> quiet | Hand the lantern to the nearest warden, and say nothing. | ry_7 | +ry_handed

=== ry_7 | The Yard-Master’s Offer
At sunrise Dehai sits you on the bench and sets two things between you: a grey sash with the yard’s knot, and a small iron tally on a thong. “A brother has a place,” he says. “A bed in the long room, and a seat at the long table, and the yard at his back when the Law Hall comes down on him. The price is the oath, and the silence.” He looks at the tally. “Or you may carry the tally only. It means that I know your face. It does not bind you.”
+ ry_sworn | You have sworn it already, and he nods at the sash as if it were yours.
+ ry_refused | You refused the oath, and he sets the tally nearer than the sash.
> truth | Take the sash, and the oath that goes with it. | ry_8 | +ry_sash karma+1
> mercy | Take the tally only, and thank him. | ry_8 | +ry_tally item+ry_wardens_tally
> deceit | Take both, and keep the sash folded in your sleeve like a coin. | ry_8 | +ry_both karma-2 item+ry_wardens_tally
> inquiry | Ask what the tally has opened for other men. | ry_8 | +ry_tally_asked insight+2

=== ry_8 | The Elder in the Gate
The Elder stands in the gate of the yard with the morning behind her, and the staves have all stopped. She is afraid of heights, and the gate is raised three steps above the earth; you see her take the steps slowly, with her eyes on the dust. “You left me at the tablet,” she says, “and a warden tells me you have been in my yard all night. I did not send you. I should like to know what you swore.”
+ ry_sash | The grey sash is on your arm, and she sees the yard’s knot.
+ ry_tally | The iron tally hangs at your throat on its thong, and she reads the stamp on it from the step.
+ ry_both | You wear both, and the Elder looks at the second sash, folded, in your sleeve.
> truth | Tell her what you swore, word for word. | ry_9 | +ry_told_elder npc:RY_ELDER
> quiet | Tell her you swore nothing that touches her. | ry_9 | +ry_said_nothing npc:RY_ELDER
> inquiry | Ask her what she would have sworn, at your age, in this yard. | ry_9 | +ry_asked_elder npc:RY_ELDER
> deceit | Tell her you only held a lantern for the night. | ry_9 | +ry_only_lantern npc:RY_ELDER karma-2

=== ry_9 | Down the Right Steps
Kuo Dehai walks you to the gate and claps you once on the shoulder, as men do who have just decided something about you. The yard has gone back to its drill; forty staves clack in the early light. Along the wall the fourteen lanterns hang dark again, and the last one, with the scraped name, has a small paper tag tied to its handle, new, in a hand you do not know. Ren Qiao is already at the memorial’s corner, with his back to the pillar, waiting to see which way you go.
+ ry_flame_named | You spoke the name on the lantern in the dark, and Ren has been told.
+ ry_put_down | You put the lantern down in the dawn, and the yard has been told that too.
> truth | Nod to Ren and go in to the Elder. | back8_jade_eye_tablets_2 | +ry_done karma+1 npc:RY_REPORT
> mercy | Stop at the last lantern, and read the tag on its handle. | back8_jade_eye_tablets_2 | +ry_done karma+1 npc:RY_REPORT
> quiet | Go back past the pillars without a word. | back8_jade_eye_tablets_2 | +ry_done qi+2 npc:RY_REPORT
> inquiry | Ask Ren who tied the tag, and what it says. | back8_jade_eye_tablets_2 | +ry_done insight+2 npc:RY_REPORT
`;
