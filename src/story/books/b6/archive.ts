import type { Arc } from "../types";

/**
 * Book Six, arc two: the Ash Archive. Lin Yuan, seventeen, Keeper of Keys, has been shut inside the Archive for forty days with the
 * Masters' wards turned inward, and does not know he is the eighth child the Elder carried out of the fire. Four ways in: break the
 * ward with qi (truth, Spirit Severing; or force, at a price), speak through the door in the Elder's voice (mercy), forge the Keeper's
 * own chit (deceit), or wait three nights until he opens it himself (quiet). Cast: Lin Yuan, the Elder, Hao Lan, Captain Dur, Hu Jingyan's men.
 */
export const archive: Arc = {
  id: "archive",
  name: "The Ash Archive",
  scenes: String.raw`
=== archive_entry | The Ward on the Door
The Archive is a round tower of black stone, nine storeys high, ringed at the base with a wall of pale fire as high as a man. The ward was made to keep out thieves; the Masters have turned it inward. The fire does not burn the outside. It burns whatever it touches that has a name.
A single lamp shows in a high window. It has not moved in forty days. Someone is sitting beside it, very still.
“Lin Yuan,” says the Elder. She has stopped at the edge of the ring, with her hand held up before her face. She is trembling. “He is in there. I know the way he sits.”
“Can you speak to him?”
“Through that?” Her mouth twists. “He cannot hear a word. The ward eats sound.”
The ring of fire stands motionless in the dusk, a perfect circle. Beyond it, the great door is shut, and a faint thread of smoke rises from its keyhole.
> truth | Break the ward with your qi, from outside. | archive_break1 | +archive_broke npc:SU_ARCHIVE_DOOR | realm>=5 | The ward burns anything that has a name; only a Spirit Severing cultivator can step past it.
> inquiry | Hold the Retired Office Seal to the ring, and let the ward read it as the Archive’s own key. | archive_break1 | +archive_broke item-chancery_market_ware npc:SU_ARCHIVE_DOOR | realm>=4 & item:chancery_market_ware>=1 | The ward burns anything that has a name. It spares a Spirit Severing cultivator, or a Nascent Soul who carries a seal it once answered to.
> force | Push through the ward regardless of the cost. | archive_break1 | +archive_pushed needs:5
> mercy | Let the Elder call to him through the fire. | archive_told1 | +archive_told | trust>=35 | The Elder does not yet trust you enough to say what she has to say.
> deceit | Let Hao Lan forge a Keeper’s chit and slide it under the door. | archive_forge1 | +archive_forged | bond:hao>=10 | Hao Lan does not yet trust you with her hand.
> quiet | Sit down outside the ring, and wait. | archive_wait1 | +archive_waited

=== archive_break1 | Through the Fire
You step into it. It is cold. That is the first thing: it is cold, a pale clear cold that goes through your sleeves and your skin and the bones of your hands. It does not burn. It reads. It runs through you like a finger down a ledger, name by name, every one you have been given and every one you have not. The Ninth. The Reserve. IX. The ward finds each, and weighs it, and moves on.
And it stops.
It has found the black seed. It holds. Your breath stops in your chest. You feel the fire gather itself, like a held note, and bend; and for an instant the whole circle is one bright, listening eye.
Then it opens. There is no other word. It opens a path for you, a plain lane, a pace wide, through the middle of the fire to the door.
Behind you the Elder makes a small sound.
“It knows you,” she says. “It was made by Yu Ling.”
> truth | Walk to the door. | archive_break2 | cult+3
> mercy | Hold out a hand to the Elder. | archive_break2
> force | Look at the fire. | archive_break2
> quiet | Breathe. | archive_break2

=== archive_break2 | The Door
The door is thick black oak, bound with iron, and it is not locked. It is held. There is a bar across it on the inside, a beam of ironwood as thick as a man’s thigh, and behind the bar, very faintly, you can hear someone breathing. You put your hand flat on the wood.
“Lin Yuan,” you say.
The breathing stops.
“I am not here to take you,” you say. “I am the Ninth. I came up the mountain in the rain, forty days ago. You gave me a key.”
Silence. A creak of old floor. Then a thin, careful voice, precise and unsteady, with the clipped politeness of a boy who has learned to apologise before he is spoken to:
“I am so sorry. I’m afraid I cannot let anybody in. It is the wards. They are… not mine.”
“I know.”
“I did try. I was extremely thorough. But I think it is, in fact, rather a larger problem than I am.”
> truth | Say you will wait. | archive_inside
> mercy | Say it is all right. | archive_inside
> force | Say you will come in. | archive_inside
> quiet | Put your forehead against the door. | archive_inside

=== archive_told1 | The Elder Calls
She does it from the edge of the ring, on her knees in the dusk, with her face turned up to the lit window. She cannot be heard. She knows it. She speaks anyway, in her dry exact voice, one sentence after another, as if reading a deposition. She tells him where she was on the night of the Sealing. She tells him what she carried out of the fire, and in what order. She tells him he was two.
“He cannot hear,” whispers Hao Lan.
“No.”
“Then why?”
“Because he is sitting in a window looking down,” says the Elder, without turning, “and he is watching my mouth.”
You look. At the high window the small lamp has moved. A shape stands there against the light, a boy, with his hands on the sill, leaning out. He is reading her lips.
She says it again, slowly, so that he can follow. *You are the eighth. I carried you out. You were two years old. I am sorry I did not tell you.*
The fire in the ring shivers, and goes out.
> truth | Go to the door. | archive_told2 | cult+2
> mercy | Help the Elder up. | archive_told2
> force | Watch the window. | archive_told2
> quiet | Stand beside her. | archive_told2

=== archive_told2 | The Door Opens
It opens from inside. The bar scrapes. The door swings wide on a dark circular hall, floored in black stone, lined with shelves of ledgers to the ceiling. In the doorway stands a thin pale boy of seventeen in a grey keeper’s coat, with a ring of keys on his belt, a pair of round spectacles, and an expression of ineffable apology.
He looks at the Elder. He looks for a long time.
“I beg your pardon,” he says. “I think I may have misunderstood. I understood you to say that I was a child of the dormitory.”
“You were.”
“And that you carried me out.”
“I did.”
“Then I am very much obliged.” He bows, deeply, from the waist. His voice shakes. “I do not think anyone has said it. In my hearing. I had assumed—” He stops. “I was told my mother left the sect. I thought she had not wanted me.”
“She refused to witness the fifteenth,” says the Elder, in a cracked voice. “She was expelled the week after.”
The boy’s spectacles have fogged. He takes them off, and wipes them, and cannot stop.
> truth | Go in. | archive_inside | bond:lin+4
> mercy | Hold out your hand. | archive_inside | bond:lin+4
> force | Look at the shelves. | archive_inside | bond:lin+4
> quiet | Wait. | archive_inside | bond:lin+4

=== archive_forge1 | A Chit
It is a strip of grey paper the size of a hand, stamped in the Keeper’s own seal. Hao Lan makes it kneeling at the edge of the ring, with a stolen ink-block and the end of a splinter, in the dusk. She has never seen the seal. She has seen its description, in a Chancery manual, and a smudged impression on a requisition, and a lantern-slide in the Annex. She makes it from memory.
“It will not pass the ward,” says Gu.
“The ward isn’t reading paper. It’s reading the *Keeper.*” She blows on the ink. “If I make it as he makes it, he will know it is his own hand. He will think: I wrote this. I do not remember writing it. He will open the door to see.”
“And if he doesn’t?”
“Then I shall have forged a perfectly good chit.” She flicks it. It spins, once, over the fire, and lands on the sill of the lowest window. The paper does not burn. It lies there, quite white.
For a long minute nothing happens.
Then, above, the lamp moves.
> truth | Wait. | archive_forge2
> mercy | Hold your breath. | archive_forge2
> force | Watch the window. | archive_forge2
> quiet | Look at Hao Lan. | archive_forge2

=== archive_forge2 | His Own Hand
He comes down the stair, you hear him: a patient, uneven footfall, a keeper’s step. The bar is lifted. The door opens six inches on a chain, and a pair of round spectacles looks out at you with suspicion.
“I did not write this,” says Lin Yuan.
“Didn’t you?”
“It is an excellent imitation.” He holds the chit up to the gloom. “The aspect of the third stroke is exactly mine. The tilt of the loop. I do not recall ever writing it, and yet—” He turns it over. “It says: *Open the door.*”
“Yes.”
“It is not at all what I would have said.” He pushes his spectacles up his nose. “I should have said: *Please.*”
Hao Lan, from the edge of the ring, says, in a small voice, “I’m so sorry. I did not know.”
He considers her for a moment. His thin face is solemn.
“It was beautifully done,” says the Keeper. He unhooks the chain. “I hope you will not mind if I insist on saying *please* in future.”
> truth | Go in. | archive_inside | bond:lin+3
> mercy | Say please. | archive_inside | bond:lin+3
> force | Look at the shelves. | archive_inside | bond:lin+3
> quiet | Smile. | archive_inside | bond:lin+3

=== archive_wait1 | Three Nights
You sit down outside the ring, in the grass, and do nothing. It is the hardest thing you have done. Inside the tower a boy is alone in the dark with the wards of the Masters turned inward, and you sit outside with your hands in your lap and watch a lamp. The company brings you tea. Nobody speaks. The stars wheel. The mist rises and falls round the base of the tower like breath.
On the first night nothing happens. On the second the lamp goes out, and your heart stops, and then it comes on again a little brighter. On the third night, towards dawn, a window opens on the third storey, and a head looks out.
“I should like to apologise,” says a thin voice, floating down. “I understand you have been sitting there for some time. I was not sure whether you were friends or—” A pause. “I could not see. I do not have a great deal of lamp-oil left.”
“We are friends,” you call back.
“I thought you might be.” The head withdraws. “I was working up to it.”
> truth | Wait. | archive_wait2
> mercy | Call out. | archive_wait2
> force | Look at the ward. | archive_wait2
> quiet | Sit. | archive_wait2

=== archive_wait2 | He Opens It
It takes him the rest of the day. He comes down by stages, as a man comes down a mountain in the dark, a storey at a time. Each time you hear a latch, a creak, a long silence. At noon the ward dims. At dusk it sinks into the stone. At last, in the red light, the bar scrapes, and the door opens, and a thin boy in a grey coat steps out onto the step and blinks at the sky.
He is shockingly thin. His face is the colour of tallow. His spectacles are cracked. He looks at the company, the Elder, the swordsman, the Censor-General, the girl with the notebook. He looks at you, last, for a long moment.
“The ward does not respond to a person who sits down,” he says, in a hoarse voice. “I have never tested it. I think it is because there is no way of reading someone who is waiting.”
“Is that so?”
“I think so.” He sways. “I am so sorry. I have not eaten since Thursday. I believe it is Sunday.”
Gu catches him. He weighs nothing at all.
> truth | Give him water. | archive_inside | bond:lin+3
> mercy | Hold him up. | archive_inside | bond:lin+3
> mercy | Carry him in. | archive_inside | bond:lin+3
> quiet | Sit him down. | archive_inside | bond:lin+3

=== archive_inside | The Keeper of Keys
It is a round hall as big as a barn, ringed with shelves of ledgers to the ceiling, with a spiral stair winding up through the middle and a great black desk at the centre. A single lamp burns. Everywhere there are papers, in orderly stacks, with little paper flags in them. He has been working the whole forty days. He has re-indexed, he tells you, the entire cadastre of the sect.
He sits on a stool among the ledgers, in his grey coat, with a cup of cold tea, and listens to the Elder tell it. She tells it plainly. She does not spare herself. When she has finished he says nothing for some time.
“Thank you,” he says at last. “I think I knew. Not in words.”
“How?”
“The keys.” He lifts the ring from his belt. “I was given them at nine by Old Lin. She said: *they have been waiting for you.* I thought she meant the Archive.” His mouth trembles. “I think she meant the door.”
“What door?”
“The one under the Law Hall.” He looks at the ring. “It has nine locks. I have eight of the keys.”
> truth | Ask for the ninth. | archive_truth
> mercy | Hold his hand. | archive_truth
> force | Ask what the door guards. | archive_truth
> quiet | Look at the keys. | archive_truth

=== archive_truth | The Ninth Key
“You have it,” says Lin Yuan. “I do not mean to be forward. I merely think that, if one assembles the keys, they make a sequence. A sentence. I have been trying to read it for forty days.”
 He holds out the ring. The keys are small and grey and each has a different shape: a hook, a bell, a comb, a lamp, a seal, a pen, a pebble, a door. “I think the last is yours.”
You take out the card. The ninth is a small brown rectangle, worn soft. It has a thin firm hand on the back.
*She will ask. Answer her.*
You hold it next to the ring. The hook, the bell, the comb. The eight keys shiver on their ring. A faint note comes out of them, thin and sweet, and a ninth shape appears in the air above the desk: the outline of a key made of light, with a notch in the shape of a question.
Lin Yuan breathes out.
“There,” he says. “That is the sentence.”
> truth | Take the key of light. | archive_siege1 | cult+4
> mercy | Hold the boy. | archive_siege1
> force | Hear the doors. | archive_siege1
> quiet | Listen. | archive_siege1

=== archive_siege1 | The Masters’ Men
They come at dawn. A hundred of them, in black, in a long line across the courtyard, with Lian Sheng at their head. She has come down the mountain in the night. She stands in front of the Archive door with her sword unsheathed, and her face like carved walnut quite calm, and says in a pleasant voice:
“Keeper. I will trouble you for the keys.”
Lin Yuan is standing in the doorway. He has the ring clutched in both hands. He is shaking so that the keys ring like bells. He says in a high, formal, trembling voice: “I am afraid I must decline.”
“You are a boy.”
“I am the Keeper.” He swallows. “I regret it. But I think I am meant to say no.”
“You are meant to say what you are told.”
“Perhaps.” The boy lifts his chin. “But I have spent forty days alone with the entire cadastre of this sect, and I have read the Charter very closely, and I find that I am not obliged.”
Lian Sheng smiles. It is a very thin smile.
“Then I shall have to take them,” she says.
> truth | Step forward. | archive_siege2 |  | realm>=5 | You would not stand against a Master of the Law and a hundred men without a Spirit Severing cultivation.
> force | Stand in front of the boy anyway. | archive_siege2 | needs:5
> mercy | Stand beside him. | archive_siege2
> quiet | Look at the Elder. | archive_siege2

=== archive_siege2 | The Standoff
It is Captain Dur who ends it. He has followed you from the bridge with eleven men, panting, in the grey livery of the sect, and he comes into the courtyard at a heavy trot with his halberd on his shoulder. He halts. He looks at the black line, and the thin pale boy, and the Master with her drawn sword.
“Master Lian,” he says, hoarsely. “I have an order to withdraw from the Archive.”
“From whom?”
“From the Warden of the Ash Bridge,” says the captain. “He says that if the sect’s own men raise a hand against the Keeper, he will not open the bridge again.”
“He has no authority.”
“He has the post.” Dur plants the halberd. “And I have a bad knee. I cannot stand all day.”
Behind him, one by one, the eleven men of the bridge lower their points. One of them, a boy with a gap in his teeth, steps out of the ranks and walks across to stand beside the Keeper.
Lian Sheng’s eyes are like slate.
“You will all regret this,” she says, softly. She sheathes her sword. “I shall be at the Law Hall.”
> truth | Let him go. | archive_close | cult+4
> mercy | Thank the captain. | archive_close
> force | Watch him leave. | archive_close
> quiet | Look at Lin Yuan. | archive_close

=== archive_close | The Keeper’s Ring
He sits on the step of the Archive with the ring in his lap, and a blanket round his shoulders, and a boy with a gap in his teeth on either side. The sun has come up behind the mountain. The cloud is gold. The ward has gone out of the stone, and the black door stands open on a hall full of books.
+[how] archive_broke | You walked through the fire, and it opened a lane for you.
+[how] archive_pushed | You pushed through the ward, and it took more than you had.
+[how] archive_told | The Elder told him in the dusk, to a window, with her whole mouth.
+[how] archive_forged | Hao Lan wrote his own hand for him, and he wished she had said please.
+[how] archive_waited | You sat outside for three nights, and he came out to the one who waited.
“I should like to come with you,” says Lin Yuan. He says it carefully. “I do not know what I shall be able to do. I am a Mortal. I have never been past the Round Hall.” He swallows. “But the door has nine locks, and I have eight of the keys. I think I am meant to go.”
The Elder looks at him. Her face is composed. Her hands, in her lap, are holding each other.
“You are not meant to do anything,” she says. “But I shall be very glad of your company.”
> truth | Welcome him. | hub_b6 | +b6q_archive bond:lin+4
> mercy | Give him your hand. | hub_b6 | +b6q_archive bond:lin+4
> truth | Hand him the ninth card. | hub_b6 | +b6q_archive bond:lin+4
> quiet | Share the blanket. | hub_b6 | +b6q_archive bond:lin+4
`,
  scenarios: String.raw`
$ SU_ARCHIVE_DOOR | trust+4 respect+3 fear+3 | elder | The Elder stands at the door of the boy she carried out of the fire.
hostile: I have not said it in fifteen years. I tried at the door, and it stuck in my throat, as a bone does. In the end I said it to a lit window, with my back to the company, as one gives evidence against oneself.
wary: He asked me whether he was a child of the dormitory. I said yes. He asked if I carried him. I said yes. He said: thank you. It was the shortest conversation of my life and the only one I wish I could have back.
neutral: He is exactly as I imagined him. That is the astonishing thing. I carried a child of two out of a fire and have thought of him every day, and he has grown up into the child I carried: apologetic, exact, brave in the small ways.
warm: He took his spectacles off and wiped them. I thought: his mother did that. I do not know why I thought it. I never met her. I know only that she refused to witness the fifteenth.
devoted: I should like him to be told, in terms, that I am proud of him. I do not know how it is done. I have written many orders and never one of those. Hanzhen says one simply says it. I have decided to try.
`,
  remarks: String.raw`
% archive_lin_later | b6q_archive | gu | Lin Yuan has asked me to teach him to whistle. I don’t think he has ever done it. He tried for an hour. He produced a noise like a kettle. He said it was ‘a promising start.’
`,
}
