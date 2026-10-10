import type { Arc } from "../types";

/**
 * Book Three, arc nine: the Salt Works Forge. Shu Ning (cot V) is the Works' seal-wright and its prisoner, and has scratched
 * "I remember" on eleven months of barrel-bottoms. She will not be rescued. She is building a counter-seal. Four approaches:
 * meet her at the bench and pass her test (a1, truth), break her out at night (a2, force), swap her stamps so every sealed barrel
 * is spoiled (a3, deceit), and read the Works' tunnels with her by lamp (a4, inquiry). A hidden route carries Master Zhu's message.
 * Cast: Shu Ning, Under-Manager Bo, Factor Gang, the guard-captain Ma, Master Zhu (by message).
 */
export const forge: Arc = {
  id: "forge",
  name: "The Salt Works Forge",
  scenes: String.raw`
=== forge_entry | The Seal-Wright’s Bench
The forge is the last building on the spit, beyond the boiling-houses, a squat black shed with a funnel and a door of riveted iron. Smoke drifts from it, grey and thin, and a smell of hot metal, tallow and cinnabar. The door is open a hand’s breadth. Inside, something is ringing: a small hammer on a small anvil, a quick light patient rhythm, like a clock being mended.
Under-Manager Bo has walked you here himself, in the plain tunic of a man with nothing to hide, and he has stopped ten paces short. His smile has gone. He is looking at the door as another man might look at a dog he has been told is friendly.
“She is in,” he says. “I should say that she does not like visitors. She does not like me. She tolerates the Factor because he pays her in tools.” He swallows. “She has asked me, on four occasions, to stop calling her Miss.”
“What does she like?” says Gu.
“Quiet,” says Bo. “And things that are broken.”
The hammer stops.
A voice calls out, flat and sharp: “If you are coming in, shut the door. The draught makes the tallow gutter.”
> truth | Go in, and shut the door behind you. | forge_a1s1
> force | Ask Bo how many guards watch the shed at night, and where they sleep. | forge_a2s1
> deceit | Ask Bo for the Works’ stamp-book, and whether anyone counts the seals. | forge_a3s1
> inquiry | Ask Bo where the tunnels under the Works begin. | forge_a4s1
> quiet | Tell Shu Ning that Master Zhu has kept her bench. | forge_h1 |  | mender_taught | You have not stood at Master Zhu’s bench.

// ---------------------------------------------------------------- a1: the test
=== forge_a1s1 | Five
She is at the anvil, with her back to the door. She wears a leather apron over a grey tunic and has tied her black hair up in a knot with a bit of wire. She is small and very upright, and her forearms are corded with muscle, and one hand is bandaged. She does not turn.
“You are the ninth,” she says. “I can tell by the silence. People who have heard of you walk like they are in a temple.”
“I am sorry,” you say.
“Don’t be. It’s efficient.” She sets down the hammer. When she turns, her face is narrow and sharp, with a straight mouth and eyes the cold light grey of a knife-blade. She looks you up and down. “I am Five. Shu Ning. I don’t shake hands. I’ve spent eleven months learning not to touch anything I don’t trust.”
She picks up a small object from the bench.
“Mend this,” she says.
> truth | Take it. | forge_a1s2
> mercy | Ask what it is. | forge_a1s2
> quiet | Look at it. | forge_a1s2
> inquiry | Ask what happens if you cannot. | forge_a1s2

=== forge_a1s2 | A Broken Seal
It is a seal of black jade, the size of a plum, carved on the head with a coiled serpent. It has been snapped through the middle, cleanly, along a line that runs between the serpent’s eyes. The two halves lie on a square of cloth. Where they were joined, the stone is polished smooth. Nothing is chipped. Nothing is missing. It has simply been parted.
“Ten people have tried,” says Shu Ning. “The Factor’s men. The Concord’s mender. A priest.” She lifts one eyebrow. “It cannot be mended. That is not the test. The test is what you do when you find out.”
You pick up the halves. They are cold as river stone, and they hum, very faintly, when they are near each other.
You turn them over. On the underside, in letters so small you must hold them to the lamp, someone has carved a single line.
It says: Seal only what asks.
> truth | Read it aloud. | forge_a1s3
> quiet | Say nothing. | forge_a1s3
> mercy | Ask who wrote it. | forge_a1s3
> inquiry | Ask what the seal held. | forge_a1s3

=== forge_a1s3 | The Question
“It held a door,” says Shu Ning. She sits down on the anvil with her arms folded. “In the Concord’s oldest vault. A door that does not open. I was sent to inspect it, three years ago, by Master Zhu, in the first year I worked for him. I touched the seal and it fell in two.” She jerks her chin at the halves. “It had been waiting, I think, for someone who did not want to open it.”
She tilts her head.
“I’ve been trying to decide what that means. I thought: the seal broke because I touched it. I thought: it broke because I asked it a question. I still don’t know which.” She meets your eyes. “That’s why I’m here. I keep making seals. I’ve made nine hundred. They’re all good. None of them have ever asked.”
You hold the two halves in your hands. They hum together, a thin high note.
“Ask it,” says Shu Ning.
> truth | Ask the seal what it wants. | forge_a1s4 | npc:SU_FORGE_TEST
> mercy | Ask the seal if it hurts. | forge_a1s4
> quiet | Hold them together. | forge_a1s4
> inquiry | Ask the seal what it held. | forge_a1s4

=== forge_a1s4 | What a Seal Wants
You ask it. You do not say it aloud. You put the halves together in your palms, with the broken edge to the broken edge, and you let a question rise in your chest, as you did at the Wall, as you did at the stone in the shallows. What do you want?
The seal does not answer. It does something stranger. The halves slide together, with a click, and the line between them vanishes. The jade warms. For an instant the serpent’s eyes open, two small bright points of green, and look at you. Then they close, and the stone is only stone, whole and smooth.
You are holding a seal. It is not mended. There is no join. It is as if it had never been broken.
Shu Ning has gone quite white.
“It asked,” she whispers. “It wanted to be asked.”
> truth | Hand it to her. | forge_a1s5
> mercy | Keep it. | forge_a1s5
> quiet | Set it down. | forge_a1s5
> inquiry | Ask what it held. | forge_a1s5

=== forge_a1s5 | What It Held
“A door,” says Shu Ning again. She has not moved. “But I did not say which.” She takes the seal in both hands, turning it over and over, and her face works. “It was a door at the foot of the Concord’s oldest stair. The Gate of the Fifth Floor.”
“The Drowned Library,” says Hao Lan, softly.
“Yes.”
“It was sealed?”
“It was sealed from outside, for nineteen years, to keep something in.” Shu Ning looks up. “I always thought it was the books. I thought they were afraid of the books. But the seal said otherwise, when it broke. I felt it in my hands. It said: there is someone here. Someone who has been asking to be let out.”
Her voice is rough.
“The Concord opened the Gate again last spring. A man named Fang opened it, with a stolen key. I think he let something in.”
> truth | Ask what. | forge_a1s6
> mercy | Say it is not her fault. | forge_a1s6
> quiet | Look at the seal. | forge_a1s6
> inquiry | Ask what she thinks. | forge_a1s6

=== forge_a1s6 | What She Thinks
“I think he let in the fleet,” says Shu Ning. “I think the lead-lined case is a seal. I think it is the largest ever made. I think it is going to close the bay.” She says it with the utter flatness of a mind that has run the numbers a hundred times. “I know because I made the parts.”
Nobody speaks.
“Not all of it. A tenth. A tenth of the ward-chain. The Factor ordered a hundred links in the spring. I was told it was a harbour boom. I made them. I scratched I remember on each, where it would not show.” She nods at the bench. “That is the second reason I am here. I have been making the thing that will lock us in, for eleven months, and I have been unable to stop.”
“Why?”
“Because if I stop, they send someone else. Someone who does not scratch.”
> truth | Say she did what she could. | forge_a1s7
> mercy | Say she is not alone. | forge_a1s7
> quiet | Take her hand. | forge_a1s7
> inquiry | Ask what the links do. | forge_a1s7

=== forge_a1s7 | A Link of the Chain
She shows you a link. It is a flat oval of grey metal the size of a man’s hand, thick as a thumb, stamped on both sides with a closed eye. It is cold as a stone in winter. When you hold it, you feel it pull at you, very slightly, like a magnet drawing at a nail.
“It takes a name,” says Shu Ning. “Each link takes one. That is how a ward-chain works. It holds what it has named. A hundred links make a ring a mile across, and it holds a hundred names.”
She holds out her other hand. In it is a second link, the same shape, but dull and cloudy, as if breathed on.
“This one is mine,” she says. “It has my name in it. I stamped it myself, the first day, to see how. I haven’t told anyone.” She smiles bitterly. “If the chain closes, I will not be able to cross it. Neither will anyone else I’ve named. I think that is the point.”
> truth | Ask whom else she has named. | forge_a1s8
> mercy | Ask if she can take it back. | forge_a1s8
> quiet | Hand back the link. | forge_a1s8
> inquiry | Ask how many links are finished. | forge_a1s8

=== forge_a1s8 | The Counter-Seal
“Ninety-one,” says Shu Ning. “Nine to go. Then it is a mile of iron, and the Concord holds the bay.” She puts the link down very carefully on the anvil. “Unless I find a way to make a link that does not hold. A counter-seal. A seal that, when it meets another, unwrites it. I’ve been working on it for seven months. I have the form. I do not have the name.”
She looks up.
“A seal needs a name. I can’t name it for the thing it unmakes. That is the first law. It would be circular. I’d be making a seal for the Concord.” Her mouth is a thin line. “I need a name that has never been written. A name that is true.”
She tips her head.
“I thought, if I could find someone with a name nobody had ever written down, I could ask her.”
She looks straight at you.
“Will you let me?”
> truth | Say yes. | forge_close | +forge_gave_name
> mercy | Ask what it would cost. | forge_close | +forge_asked_cost
> quiet | Nod. | forge_close | +forge_gave_name
> inquiry | Ask what name she needs. | forge_close | +forge_asked_cost

// ---------------------------------------------------------------- a2: the break-out
=== forge_a2s1 | Guards
Bo hesitates. He looks over his shoulder, at the empty gravel and the long grey sheds, and wets his lips. “I should not tell you,” he says. “But I did give you the key. I have rather got into the habit.”
He draws in the dust with his toe.
“Four. Two at the main gate, two on the wall. The captain, a man named Ma, sleeps in the second shed. He is an old soldier and a drunk. The gate is shut at the eighth bell. The shift changes at midnight.” He sniffs. “Miss Shu is locked in her shed from sundown to dawn. She has a bed, a stove, and a window with a bar. She can’t get out. She hasn’t tried.”
“Why not?”
“She says it is more instructive to stay,” says Bo. “She says she is learning the building.”
He grimaces. “I have no idea what she means. I have learned not to ask.”
> force | Plan it. | forge_a2s2
> truth | Say you want to speak to her first. | forge_a2s2
> quiet | Study the wall. | forge_a2s2
> mercy | Ask whether anyone will be hurt. | forge_a2s2

=== forge_a2s2 | The Night Plan
The plan is Ren Qiao’s. It is simple and brutal. At the eleventh bell, Gu will go to the main gate with a jar of rice wine and a story. He will say he is a boy from the quay, sent by the Factor with a gift for the guard. The men will take it. They are not fools, but they are tired, and wine is wine.
At the midnight change, Ren Qiao and Hao Lan will go over the east wall by the drying-rack. They will take the guards on the wall from behind. Hao Lan has a cosh. She has never used one. She has been practising on a pillow.
You will go to the shed.
“What if she refuses?” says Hao Lan.
“Then we carry her,” says Ren.
“She is five foot nothing.”
“Then it will be easy,” says Ren.
Hao Lan shakes her head. She does not seem convinced.
> force | Say you will do it. | forge_a2s3
> truth | Say she will not come. | forge_a2s3
> quiet | Nod. | forge_a2s3
> mercy | Say you will ask her first. | forge_a2s3

=== forge_a2s3 | Midnight
At midnight the spit is a black slab under a thin moon. The pans lie like sheets of dull tin. Gu has gone to the gate with the jar. You hear a murmur of voices, a laugh, the clink of a cup. Above you on the wall a lantern swings and settles.
Ren Qiao comes out of the dark on your left, silent as a cat. His hand is on your shoulder. “Now,” he says.
The guards on the wall do not know what hits them. Ren takes one, with a hand over the mouth and a knee in the ribs. Hao Lan, to her own astonishment, takes the other. She brings the cosh down on his helmet with a ringing clang, and he sits down on the parapet looking surprised. She stares at the cosh.
“It works,” she says.
“Quiet,” hisses Ren.
You run for the forge.
> force | Reach the door. | forge_a2s4
> truth | Check on Hao Lan. | forge_a2s4
> quiet | Watch the gate. | forge_a2s4
> mercy | Steady the lamp. | forge_a2s4

=== forge_a2s4 | The Locked Shed
The door is barred on the outside with a beam of black oak. You lift it. It is heavy. Behind you, on the parapet, Hao Lan is dragging the unconscious guard into the shadow by his heels.
Inside, the forge is dark but for the red eye of the stove. Shu Ning is sitting on her bunk, fully dressed, with her boots on and a satchel at her feet. She does not look surprised. She looks irritated.
“You’re late,” she says. “I’ve been ready for half an hour.”
“You said you could not get out.”
“I can’t. I wasn’t going to.” She stands. “But I have been listening to Ren Qiao’s boots on the roof for the last ten minutes, and I decided it would be rude to say no.” She slings the satchel. “I have conditions.”
“Conditions?”
“Three.”
> force | Hear them. | forge_a2s5
> truth | Say you have no time. | forge_a2s5
> quiet | Wait. | forge_a2s5
> mercy | Ask if she is afraid. | forge_a2s5

=== forge_a2s5 | Three Conditions
“First,” says Shu Ning. “I take the anvil.” She jerks her thumb at the bench. “It is a portable one. It weighs forty pounds. I have it on a strap.”
“And the second?”
“I take the links. All ninety-one.” She lifts a canvas bag. It clanks. “If I leave them, the Factor will finish the chain. If I take them, he will have to start again. It will cost him a year.”
“And the third?”
She hesitates. For the first time, her cold face flickers. “Third,” she says. “I do not want to be rescued.”
You stare.
“I mean it,” she says. “I have been rescued twice. Once from a fire. Once from a ledger. Both times I was grateful. Both times I was owed, afterwards.” She tips her chin. “I would like to leave on my own account. I would like it to be my idea.”
> force | Say it was her idea. | forge_a2s6
> truth | Say you understand. | forge_a2s6
> quiet | Bow. | forge_a2s6
> mercy | Say you will not claim a debt. | forge_a2s6

=== forge_a2s6 | Out
She walks out of the forge with a forty-pound anvil on her back and a bag of chain-links over one shoulder and an expression of cold fury. The guards on the wall are tied up with their own belts. The men at the gate are asleep, with the empty wine-jar between them and Gu sitting on a bollard, shivering, looking guilty.
“Did I do it right?” he says.
“You were perfect,” says Hao Lan, shakily.
Shu Ning stops at the gate. She puts the anvil down with a groan, and straightens, and looks back at the Works. The chimneys loom. The pans are silver. A thin light glimmers in the manager’s house, where Bo is sitting up with a lamp.
“Eleven months,” she says. She says it very softly. “I thought I would be more moved.”
She turns on her heel.
“Come on. If we stand here, I shall start composing a speech.”
> force | Follow her. | forge_a2s7
> truth | Say she doesn’t have to. | forge_a2s7
> quiet | Take the anvil. | forge_a2s7
> mercy | Look back with her. | forge_a2s7

=== forge_a2s7 | The Ferry at Dawn
Ah Zhi is waiting at the jetty in the grey before sunrise, with a new borrowed boat and a sour expression. She takes one look at the party, and the anvil, and the girl in the apron, and says nothing. She holds out a hand. Shu Ning looks at it.
“I don’t,” she says.
“I know,” says Ah Zhi. “It’s a rope, you fool. Take the rope.”
Shu Ning takes the rope. She gets into the boat. She sits very straight on the thwart, with her anvil in her lap, and says, “Eldest.”
“Fifth.”
They look at each other across the thwart for a long moment. Ah Zhi’s mouth twitches. Shu Ning’s does not.
“You scratched my barrels,” says Ah Zhi.
“You kept them,” says Shu Ning.
Neither smiles. But somewhere in the boat, a rope creaks, and Gu, who has been holding his breath, lets it out.
> force | Cast off. | forge_a2s8
> truth | Say nothing. | forge_a2s8
> quiet | Look at the water. | forge_a2s8
> mercy | Smile at them both. | forge_a2s8

=== forge_a2s8 | Across
The crossing is silent. The sun comes up over the Wall, red and then gold. Tidewall emerges from the mist in layers: the quay, the roofs, the black spur, the dark tower with its lamp. At the Ferryman’s Rest a window opens and a woman in a shawl leans out.
It is the Elder. She has been waiting up all night.
Shu Ning sees her. She goes rigid. Her fingers tighten on the anvil. She looks at the Elder’s face, at her white hair, at the silver comb, and her eyes are two cold coins.
“Is that her?” she says.
“Yes,” you say.
“The Registrar.”
“Yes.”
“Hm.” Shu Ning folds her arms. “I always imagined she would be taller.”
Ah Zhi laughs, short and sudden, like a hiccup.
> force | Land. | forge_close | +forge_broke_out
> truth | Stand between them. | forge_close | +forge_broke_out
> quiet | Let it happen. | forge_close | +forge_broke_out
> mercy | Wave to the Elder. | forge_close | +forge_broke_out

// ---------------------------------------------------------------- a3: the stamps
=== forge_a3s1 | The Stamp-Book
“The stamp-book,” says Bo. He takes it from his satchel with the mortified air of a man producing a prohibited sweet. It is a grey ledger, thick as a brick. “Every seal that leaves the forge is entered. Date, destination, name, number. The Factor reads it each Friday, and the Chancery clerk each quarter.”
“Does anyone count?”
“Every Friday. Every quarter.” He swallows. “They check that the numbers are consecutive. They do not check what they say.”
Hao Lan takes the book and opens it. Her eyes light up. She runs her finger down the columns. “This is wonderful,” she says. “This is perfect. This is a ledger that has never been read.”
“What are you going to do?”
“I’m going to read it,” says Hao Lan. “And then, with your permission, Under-Manager, I’m going to write a very slightly different one.”
> deceit | Ask what she means. | forge_a3s2
> truth | Ask if it is wise. | forge_a3s2
> quiet | Watch her. | forge_a3s2
> mercy | Ask what Bo thinks. | forge_a3s2

=== forge_a3s2 | Mistakes
“Mistakes,” says Hao Lan. She is bent over the book, writing in a tiny cramped hand, copying out columns. “The Chancery checks for sequence. It does not check for sense. A seal that is stamped twice has the same number as a seal that is stamped once. A name that is entered in the wrong column looks, to a clerk, exactly like a name in the right one.”
“So?”
“So if the Works were to stamp, say, a thousand barrels with the wrong name…” She smiles. “The Factor would never notice. The Chancery would not notice. It would be perfectly regular.”
Bo has gone pale. “Wrong name?”
“A name that cancels the dust.” Hao Lan taps the page. “A name for a seal that undoes. It need not be a real seal. It need only be a stamp that says the right thing in the right place. The barrels would arrive at the river provinces sealed with a name that unmakes what is inside.”
> deceit | Ask who could make it. | forge_a3s3
> truth | Say it sounds like forgery. | forge_a3s3
> quiet | Look at Bo. | forge_a3s3
> mercy | Ask if it would work. | forge_a3s3

=== forge_a3s3 | A Craftswoman
“Miss Shu,” says Bo, faintly. “Obviously.” He mops his face. “She is the only person on the coast who could make a stamp like that. She has never once, in eleven months, made a mistake.”
“Then we need her,” says Hao Lan.
“She will not help.”
“Why not?”
Bo hesitates. “Because she does not like forgery,” he says. “She says it is dishonest. She says a seal is a promise, and to make a false one is to lie with your hands.” He wrings his cuffs. “She would rather be flogged.”
Hao Lan folds her hands. She puts her head on one side. “Under-Manager Bo,” she says gently. “Do you think she knows what the barrels contain?”
“Of course.”
“Then I do not think she would call it a lie,” says Hao Lan. “I think she would call it a correction.”
> deceit | Go and ask. | forge_a3s4
> truth | Say it is her choice. | forge_a3s4
> quiet | Wait. | forge_a3s4
> mercy | Say you will explain. | forge_a3s4

=== forge_a3s4 | The Argument
Shu Ning hears them out in silence, sitting on her anvil, her arms crossed, her face as blank as a tablet. When Hao Lan has finished she looks at the book. She looks at the stamps. She looks at the stove.
“No,” she says.
“Why not?”
“Because it is a lie.” She says it flatly. “I will not seal something false. I do not care what it does. A seal is a name. A false name is a rotten plank. It will hold for a day, and then it will fail, and whatever you built on it will drop.” She sniffs. “I have seen what happens. I was at the Gate. I touched a seal that someone had lied to. It broke in my hands.”
She looks up.
“If you want a seal that unmakes the dust, I will make it. But it will be real. It will have a true name. And it will be a great deal harder than a stamp.”
> deceit | Ask what name. | forge_a3s5
> truth | Say you will find one. | forge_a3s5
> quiet | Nod. | forge_a3s5
> mercy | Thank her. | forge_a3s5

=== forge_a3s5 | What She Needed
“A name that was never written,” says Shu Ning. “That is the rule. For a true seal, the name must be the name of a thing that has not yet been named. Otherwise it is only a label.” She taps her chest. “I have the form. I have the metal. I do not have the word.”
She looks at you for a very long time.
“It has to be someone’s,” she says. “It has to be spoken by a person who has never had it said back.”
Hao Lan makes a small sound.
“Her name,” says Shu Ning. “The ninth’s. Not the one on the register. The other.”
You are silent. You have never had one. You were Nine in the Law Hall and Wanderer in the village, and in neither place did anyone ever ask what you would like to be called. You turn it over.
“I do not know it,” you say.
“No,” says Shu Ning. “But I think you could choose.”
> deceit | Choose one. | forge_a3s6
> truth | Say you would rather not. | forge_a3s6
> quiet | Think. | forge_a3s6
> mercy | Ask what she would choose. | forge_a3s6

=== forge_a3s6 | A Name Chosen
It takes you an hour. You walk the spit with Gu at your elbow, along the dyke, between the pans, in the failing light. You say names to the wind. None fit. You are not a Mei, or a Ning, or a Zhi. You are not a river or a lamp. You are the girl who reached for the flame.
At last you stop. A gull has landed on a post. It looks at you, black-eyed, and shrieks.
You laugh.
You walk back to the forge. Shu Ning is at her bench. She looks up. You say the name aloud, once. It is not a grand one. It is a small plain word, such as a child might call a pet, or a friend, or herself. It rings in the iron shed like a bell.
Shu Ning does not say anything. She turns to the anvil, takes up her hammer, and begins to strike.
> deceit | Watch. | forge_a3s7
> truth | Hold the tongs. | forge_a3s7
> quiet | Sit down. | forge_a3s7
> mercy | Fetch her water. | forge_a3s7

=== forge_a3s7 | The Making
She works through the night. It takes eleven hours. She beats a ball of grey iron into a flat disc, folds it, welds it, beats it flat again, thirty times, a hundred, until her arms shake and her apron is black with soot. She carves a face on it with a graver the size of a hair. You stand at the bellows. Gu feeds the fire. Hao Lan reads aloud, in a murmur, from the stamp-book, to keep the rhythm.
At dawn the seal is done.
It is no bigger than a thumb-ring. It is dull black, with a curious rough surface like the skin of a pear. On its face is a single character, in an unfamiliar script. You cannot read it. But you feel it: a faint warmth against your palm, like the first sun on a winter morning.
Shu Ning sets it down on the anvil. She is grey with exhaustion.
“There,” she says. “It asks.”
> deceit | Pick it up. | forge_a3s8
> truth | Thank her. | forge_a3s8
> quiet | Touch it. | forge_a3s8
> mercy | Help her sit. | forge_a3s8

=== forge_a3s8 | Ninety-One Corrections
The counter-seal is made. Over the next three days, Shu Ning stamps it, with enormous patience, on the bottom of every one of ninety-one links. They are put back in the bag. They go back to the Works, tied in a sack on the back of the Factor’s own carter, with a note in Bo’s hand: Delivered as ordered.
No one will notice. The links look identical. They are cold, grey, and stamped with the closed eye. But on the underside, where no one looks, there is a new mark, and when the chain is closed, and the first name is asked of it, it will not take.
It will unwrite.
Shu Ning sleeps for fourteen hours. When she wakes she has a scowl, a bowl of congee, and the look of a woman who has told no lies.
“You were right,” she says. “It was a correction.” She slurps. “I hate that.”
> deceit | Laugh. | forge_close | +forge_swapped_links
> truth | Say she was brilliant. | forge_close | +forge_swapped_links
> quiet | Pass her the pickles. | forge_close | +forge_swapped_links
> mercy | Say thank you. | forge_close | +forge_swapped_links

// ---------------------------------------------------------------- a4: the tunnels
=== forge_a4s1 | Under the Works
“Under the forge,” says Bo. “There is a drain. It leads to the old salt-wells. A hundred years ago the Works was a mine. The drifts go back half a mile. They are flooded, mostly, at the high tide. Miss Shu has a key to the sluice.” He mops his brow. “She goes down at night. I pretend not to see.”
“Why?”
“I think she maps.” Bo fidgets. “I know she draws. She comes up with her hands black and her boots full of water and a sketch under her arm. She says it is none of my business.”
Gu is staring at the black door in the corner of the yard. It is little more than a trap, flush with the gravel, with an iron ring.
“Is it safe?” he asks.
“No,” says Bo cheerfully. “That is why she likes it.”
> inquiry | Ask Shu Ning if she will show you. | forge_a4s2
> truth | Say it sounds dangerous. | forge_a4s2
> quiet | Look down the hole. | forge_a4s2
> mercy | Ask if Gu should stay behind. | forge_a4s2

=== forge_a4s2 | Lamps
She will show you. She says it in the tone of someone conceding a point at chess. She gathers three lamps, a coil of rope, a piece of chalk, and a tin of biscuits, and she leads the way down the iron ladder without a word. The shaft is eighty feet. You count the rungs. The air gets cooler and the smell of brine gets stronger. At the bottom there is a ledge of wet rock, and a tunnel going into the dark.
“Keep to the left wall,” says Shu Ning. “The right is a drop. Don’t trust anything that looks like a floor.”
You walk for half an hour. The tunnel is low and narrow, hewn from grey stone and shored with black timbers. Every few paces an old cart-rail, rusted to lace, runs along the floor. Water drips. Somewhere ahead, something large and slow is breathing.
“What is that?” whispers Gu.
“The tide,” says Shu Ning. “Come on.”
> inquiry | Follow. | forge_a4s3
> truth | Count the paces. | forge_a4s3
> quiet | Listen. | forge_a4s3
> mercy | Hold Gu’s hand. | forge_a4s3 | bond:gu+1

=== forge_a4s3 | The Chalk Map
On the walls, at every junction, there is a chalk mark. It is a small neat arrow with a number beside it, in a precise hand. 1, 2, 3, and so on. The marks are fresh. Shu Ning has been here recently, and often.
“I’ve been walking them for seven months,” she says. “It took me three just to find the main drift. There are four levels. Two are flooded. One is a cave-in. The fourth goes out under the bay.”
“Under the bay?”
“Under it. A mile and a half.” She puts down her lamp. “It comes up on the other side.”
You look at her. Her cold face is lit from below, and her eyes are bright.
“Where?”
“Under the Wall,” says Shu Ning.
It is a long moment before anybody speaks. The tunnel breathes. Water trickles from the roof.
“There is a way into the Library,” she says. “From here. It is not the tide-door. It’s older. It is a miners’ door.”
> inquiry | Say you want to see. | forge_a4s4
> truth | Ask why she hasn’t gone. | forge_a4s4
> quiet | Look down the dark. | forge_a4s4
> mercy | Ask if she is afraid. | forge_a4s4

=== forge_a4s4 | A Cage of Rails
They reach the end at the sixth hour. The tunnel opens out into a great hall, hewn from the living rock, with a roof lost in shadow. Cart-rails run across the floor and plunge into a black pool. On the far side of the pool there is a wall of ancient masonry, mortared with a pale shell-lime that glows faintly in the lamplight. In the centre of the wall is a door.
It is a low square door of iron, rusted to the colour of dried blood. It has no handle. It has no hinge. It has a single round hole in the middle, the size of a coin, and around the hole a ring of characters.
“That,” says Shu Ning, “is a lock.”
She puts her lamp down on the edge of the pool and walks to the water’s brink. Her reflection trembles. She is rather small.
“It is the most beautiful lock I have ever seen,” she says. “I have been looking at it for three months.”
> inquiry | Ask what it needs. | forge_a4s5
> truth | Say you could try. | forge_a4s5
> quiet | Study the characters. | forge_a4s5
> mercy | Ask if she wants to open it. | forge_a4s5

=== forge_a4s5 | The Lock
“A key,” says Shu Ning. “A small round one. It has to be thumb-thick, and an inch long, and cut with nine notches. I’ve measured.” She traces the ring of characters in the air. “And a name. The lock wants to be named. It’s a seal as well as a lock. It was made by the same hand as the broken serpent.”
“Whose hand?”
She is silent.
“Ling’s,” she says at last. She says it like an admission. “I’ve been through every design. It has her fingerprint. She made all the old doors. She made them so that only a person who understood them could open them.” Her fingers close into a fist. “I understand it. I don’t think I understand it well enough.”
She takes a breath.
“The key is in a place I haven’t found. I’ve looked everywhere in the Works. I think it was never meant to be here. I think it was meant to be given.”
> inquiry | Ask by whom. | forge_a4s6
> truth | Say you will find it. | forge_a4s6
> quiet | Say nothing. | forge_a4s6
> mercy | Say she has done enough. | forge_a4s6

=== forge_a4s6 | Given
“By someone who had it,” says Shu Ning. “Someone who has been carrying it. For years, probably. Without knowing what it was.” She turns to you. In the lamplight her face is stern, oddly vulnerable. “It’s small. It would sit in a pocket. A button, a bead, a charm.”
You feel in your sleeve.
There is a thing there. You have carried it since the village. It is a small round bead of grey stone, thumb-thick, pierced through the middle, on a thong. Your foster-mother gave it to you when you were five. She said it was a luck-charm. You have never taken it off.
You take it out. In the lamplight you see that it has nine fine notches round the rim.
Shu Ning stares.
“Oh,” she says, in a very small voice.
> inquiry | Hand it over. | forge_a4s7
> truth | Say you had no idea. | forge_a4s7
> quiet | Hold it up. | forge_a4s7
> mercy | Close your hand around it. | forge_a4s7

=== forge_a4s7 | Luck
“You wore it,” says Shu Ning. “All this time.” She laughs. It is a short, shaken laugh. “I’ve spent three months looking under every plank in the Works. And you were wearing it round your neck.”
She holds out her hand.
“May I?”
You put the bead in her palm. She holds it to the lamp. She tilts it. A tiny gleam shows in the pierced hole, a pin of light, as of a candle seen through a keyhole.
“It’s a key,” she says. “It’s the key to the miners’ door. It was always going to be you.” She closes her fingers over it. “I can’t use it. It has to be inserted by the one who carries it. By your hand.”
She gives it back, gently, as one gives back a sleeping bird.
“Don’t lose it,” she says. “It’s the only one.”
> inquiry | Thank her. | forge_a4s8
> truth | Promise. | forge_a4s8
> quiet | Hang it round your neck. | forge_a4s8
> mercy | Ask what is behind the door. | forge_a4s8

=== forge_a4s8 | Not Yet
You do not open it. Shu Ning says it should wait for the spring ebb, when the tide-door opens above, and the two ways meet in the middle. Opening it now, she says, would flood the drift, and neither of you would drown pleasantly.
You climb back up in silence. The shaft is eighty feet. At the top, the sun is almost down and the sky is a bowl of copper. Gu is sitting on the edge of the trap with his head in his hands. He has been sick.
“I don’t like tunnels,” he says. “I’ve never liked tunnels.”
“Neither do I,” says Shu Ning. She eases the anvil off her shoulder. “That’s why I made a map.”
She looks at the Works, at the dark chimneys, the pans, the grey shed.
“There’s another thing,” she says. “I’d like to stop making links. I’d like to be somewhere else.”
She meets your eyes.
“Would you mind awfully if I came with you?”
> inquiry | Say yes. | forge_close | +forge_found_door
> truth | Say it is her choice. | forge_close | +forge_found_door
> quiet | Take the anvil. | forge_close | +forge_found_door
> mercy | Hug her. | forge_close | +forge_found_door

// ---------------------------------------------------------------- hidden: Zhu's message
=== forge_h1 | A Message from the Master
She goes still. The hammer comes down, once, and stops. Slowly she turns the whole of her body round, from the anvil, as if to turn only her head would be disrespectful. “Say that again.”
“Master Zhu says to tell you the bench is yours.”
There is a long silence. Shu Ning does not move. The stove ticks. A mouse runs along the beam overhead.
“He kept it,” she says.
“He polishes the tools every morning.”
“He kept the bench.” She says it as if it were a very strange sentence. “Three years. I thought he’d have given it to an apprentice. I thought,” and her voice does something, “I thought he’d forgotten.”
She turns away. Her shoulders are rigid. She stands with her palms on the cold anvil, head bowed, and you hear her breathe.
“I carved the V,” she says. “I did it with a knife. I was eleven.”
> quiet | Say nothing. | forge_h2
> truth | Say he asked if you were well. | forge_h2
> mercy | Touch her shoulder. | forge_h2
> inquiry | Ask why she left. | forge_h2

=== forge_h2 | Why She Left
“Because I was afraid,” says Shu Ning. She does not turn round. “I was afraid I was good at it. I was afraid I would spend my whole life making the Concord’s seals, for the Concord’s doors, because I could not stop. I was the best he ever had. He said so. He said it often.” Her voice is raw. “It frightened me more than anything. I thought, if I’m this good, they’ll use me.”
She laughs, without humour.
“So I ran away to the coast, and the Factor hired me as a seal-wright at double wages.”
The silence stretches.
“I’m not going back,” she says. “Not yet. I’ve made too many things I can’t unmake.” She wipes her eyes with the back of her wrist. “But you can tell him—”
She stops.
“Tell him I kept the knife,” she says.
> quiet | Promise. | forge_h3
> truth | Say he will be glad. | forge_h3
> mercy | Say you will bring her back. | forge_h3
> inquiry | Ask what the knife means. | forge_h3

=== forge_h3 | The Knife
She takes it from the shelf over the bench. It is a small cheap thing with a worn horn handle, no longer than her hand. The blade is nicked and thin from years of sharpening. She holds it out.
“It’s what I carved the V with,” she says. “He gave it to me on my first day. He said: a craftsman’s tools are the only things she should own.” She pushes it into your palm. “Take it to him. Tell him I used it to carve a hundred and one seals, and every one of them asked.”
You look at the knife. You look at her.
“You could take it yourself,” you say.
“I could.” She shakes her head. “But I’m not ready. And I think I’d like him to have something in the meantime.”
She turns back to the anvil.
“Go on,” she says. “I have work. I have a chain to unmake.”
> quiet | Take it. | forge_close | +forge_zhu_knife
> truth | Say you will bring it back to her. | forge_close | +forge_zhu_knife
> mercy | Say thank you. | forge_close | +forge_zhu_knife
> inquiry | Ask how you can help. | forge_close | +forge_zhu_knife

// ---------------------------------------------------------------- close
=== forge_close | The Wright
The shed grows quiet. The stove ticks. Evening comes over the spit in long amber bars, and the gulls settle on the roof of the boiling-house. Shu Ning has put down her hammer for the first time in your presence. She sits on the anvil with her knees apart and her hands hanging, looking at nothing.
+[how] forge_gave_name | You gave Shu Ning a name that had never been written, and she forged it into a seal that asks.
+[how] forge_asked_cost | You asked what the counter-seal would cost, and she told you the price in plain numbers.
+[how] forge_broke_out | You broke Shu Ning out at midnight, and she came with an anvil on her back and a list of conditions.
+[how] forge_swapped_links | Ninety-one links of the Concord’s ward-chain carry a mark on their undersides that no clerk will read.
+[how] forge_found_door | A miners’ door lies under the bay, and your foster-mother’s luck-charm is its key.
+[extra] forge_zhu_knife | A cheap horn-handled knife with a nicked blade lies in your sleeve, to be taken to a one-eyed man on a ridge.
She takes a brown card out of her apron. It is blackened at one corner by soot.
“I made a decision,” she says. “I made it an hour ago. I don’t make them often, so I want it written down.” She holds up the card. “I’m giving you this.”
> truth | Take it. | forge_close2 | +card_5
> mercy | Ask if she is certain. | forge_close2 | +card_5
> quiet | Wait. | forge_close2 | +card_5
> inquiry | Ask what the card says. | forge_close2 | +card_5

=== forge_close2 | Seal Only What Asks
“I know what it says,” says Shu Ning. “I’ve known since I was eight. Seal only what asks. I read it as a rule. It is not a rule. It is a question.” She turns the card over in her black fingers. “I’ve been sealing things all my life without asking. Doors, jars, barrels, a whole mile of chain. Not one of them asked. I did it because I could.”
She sniffs.
“It took you to show me. You held a broken thing and asked it what it wanted. That’s all. That is the whole of the craft.” She presses the card into your hand. “I don’t say thank you. I think I’ve said it in other ways.”
The card is warm from her pocket. It joins the others with a click like a latch.
“I’m going to ask the chain,” she says. “Before I break it. I’m going to give it the courtesy.” She almost smiles. “Don’t tell anyone I said that.”
> truth | Promise. | hub_b3_coast | +b3q_forge bond:shu+3
> mercy | Bow. | hub_b3_coast | +b3q_forge bond:shu+3
> quiet | Leave her to the forge. | hub_b3_coast | +b3q_forge bond:shu+3
> inquiry | Ask when she will come to the Wall. | hub_b3_coast | +b3q_forge bond:shu+3
`,
  scenarios: String.raw`
$ SU_FORGE_TEST | trust+3 respect+4 | elder | The Elder hears how a broken seal asked to be asked, and how a seal-wright made a chain that unwrites.
hostile: She has no use for me. She looked at me across a ferry and said I was shorter than imagined. It is the first honest review of my person in a decade. I find I am impressed.
wary: Five. I never held her. I think I may have fed her, once, from a spoon, in the dormitory, in the week before. She bit. I took it for a compliment.
neutral: A counter-seal. It is, in its way, the opposite of everything I was trained to do. I spent twenty years making things that held. She makes things that let go.
warm: She told me to my face that she did not wish to be rescued. I said that I understood. I did not. I do now. It is a great deal harder to stand beside someone than to carry them.
devoted: If I might give her one thing, it would be a bench. Not a forge, not a bed. A bench by a window, with a row of clean tools, and no one to say what she should make. I think it is the only gift she would accept.
`,
  remarks: String.raw`
% forge_shu_later | since:b3q_forge>=3 | hao | Shu Ning has labelled every jar in the Ward's dispensary with a number. She has drawn a map of the pharmacy on the back of the door. She says it is not for any purpose. I believe her entirely.
% forge_zhu_later | since:forge_zhu_knife>=8 | gu | Master Zhu will want his knife back, someday. Shu Ning says it is his to keep. I think they are both pretending very hard not to be sentimental.
`,
};
