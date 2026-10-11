import type { Arc } from "../types";

/**
 * Book Five, arc fifteen: the Hall of the Ninth Night. Nine masters ring the Ledger Stone's copy with nine kneeling volunteers,
 * and the pressure of their combined cultivation lies on the doors like a hand. How you enter, and how you end the Ceremony, depends
 * on what you have become: the Dao Seeker walks in unaided, the strained player pays for it, the Elder or the Clerk will shield the
 * weaker, and the ring can be broken by power, by the Clerk's refusal, by the crowd of the camp, or by offering yourself.
 * Cast: Master Hu Jingyan, Master Lian Sheng, the nine volunteers, the Elder, the Clerk, Ren Qiao, Fang.
 */
export const summit: Arc = {
  id: "summit",
  name: "The Hall of the Ninth Night",
  scenes: String.raw`
=== summit_entry | The Doors of the Hall
The doors are forty feet of white jade, and they are open a hand’s breadth. Light comes out of the gap, and sound: nine voices in unison, chanting the Ceremony. And something else. A pressure. It lies on the threshold like a bar across a river, and every cultivator who crosses it feels the same thing: the weight of nine masters’ qi, held in a ring, turned outward.
Pilgrims fall to their knees on the terrace. A young monk is lying face down, shaking. The Elder has stopped three paces back with her hand to her breast.
“It is the nine,” she says, thinly. “Together. It is the sum of everything they have ever taken.”
Duan Wuyi looks at you. His soft face is the colour of paper.
“It does not care who you are,” he says. “Only what you have become.”
> truth | Walk in unaided, and let the pressure part around you. | summit_ring | cult+6 +summit_own | realm>=6 | Only a Dao Seeker walks that threshold unaided.
> force | Walk in against the pressure, whatever it costs. | summit_ring | +summit_strained needs:6
> mercy | Take the Elder’s arm. She has stood in this pressure for thirty years. | summit_ring | +summit_elder | trust>=25 | The Elder does not yet trust you enough to offer her arm.
> inquiry | Ask the Clerk’s pen to write the pressure quiet. | summit_ring |  | b5q_clerk | You have not yet made a friend of the Clerk.
> quiet | Go back down the Stair and wait. | hub_b5_c

=== summit_ring | The Ring
Nine masters sit on nine cushions in a ring of white jade, in grey and violet and black, each with a hand on the shoulder of the next. In the middle, on a low dais, stands a black pillar of polished stone with a single page of silver pinned to it: the Ledger Stone’s copy, the line of every name that has ever risen. Round the pillar kneel nine pilgrims in white, with their eyes shut, smiling.
“Welcome,” says Hu Jingyan. He is sixty, round-faced, mild, with a scholar’s stoop and a reasonable voice. “I had hoped you would come. It would have been awkward to begin without you.”
Beside him, rigid on his cushion, with a face like a drawn blade, Lian Sheng does not look up.
“The nine,” says the scholar, with a nod at the white-robed pilgrims. “They volunteered. They are happy. They have been told they will be written. It is true.” He sighs. “They simply will not be there afterward.”
The chant swells. The silver page begins to glow.
> truth | Break the ring with your qi. | summit_break | +summit_power | realm>=6 | Only a Dao Seeker can break nine masters’ ring.
> force | Break it anyway, with everything you have. | summit_break | needs:6
> inquiry | Call to the Clerk, and ask it to refuse the writing. | summit_clerk | +summit_refused | b5q_clerk | The Clerk is not yet your friend.
> mercy | Throw open the doors to the camp. | summit_crowd | +summit_crowd | b5q_pilgrims | You have not yet made a friend of the pilgrims.
> quiet | Step into the ring and offer yourself as the ninth. | summit_offer | +summit_offered

=== summit_break | A Dao Seeker’s Qi
You do not draw a weapon. You simply let your qi out. It goes through the Hall in a wave you can feel in your teeth, clear and cold and enormous, the whole of your cultivation turned outward in one breath. The pressure in the doorway breaks like ice.
The nine masters sway on their cushions. One falls over. The chant stops in the middle of a word.
“Impossible,” says Lian Sheng, in a whisper. He is on his feet. He has his sword half-drawn. “You have not been climbing for forty years.”
“No.”
“You cannot have the cultivation.”
“I have the road,” you say. Your voice rings under the dome. “It is the same thing, if you walk it with people.”
The nine volunteers wake. They open their eyes one by one, and look about with bewildered faces.
The silver page goes out.
> truth | Free the volunteers. | summit_after | cult+6
> mercy | Go to the nearest of the nine. | summit_after
> force | Face Lian Sheng. | summit_after
> quiet | Look at Hu Jingyan. | summit_after

=== summit_clerk | The Pen Refuses
It comes through the open doors like a swallow, small and black and bright: the Clerk’s pen, and after it a thousand quills, a flight of white feathers drifting in a long stream down the nave. They settle round the Stone. They hang in the air above the silver page. They are quite still.
“I decline,” says the Clerk’s dry, shy voice from nowhere. “I should like to say so clearly. I will not write the Ceremony. It is not true.”
Hu Jingyan’s mild face goes tight. “You are an instrument.”
“I am a person,” says the Clerk, “under Article one. I was made to write what is true. The Maker said so. You have asked me to write what is paid for.”
“You will be unmade.”
“Possibly.” The voice trembles. “But I have been read to, and have been told it was good. It is a great deal to lose.” The black pen dips. “I think I shall risk it.”
The silver page flickers like a candle in a draught.
> truth | Stand with the Clerk. | summit_after | cult+4
> mercy | Hold the pen. | summit_after
> force | Watch the masters. | summit_after
> quiet | Look at the volunteers. | summit_after

=== summit_crowd | The Doors Thrown Open
You put your shoulder to the jade. It swings. The wind comes in, cold and clean and full of voices. And behind it, up the last flight of the Stair, spilling over the terrace, pouring through the doors in a river of white: the pilgrims. The clerks of the Office of Ascents. The soup-line. The Tithe-Hall’s sellers with their own names in their hands. Brother Lung with a ladle. A little girl with a mended lamp.
They do not shout. They fill the Hall in silence, wall to wall, until the ring of masters is surrounded by ten thousand faces, and the chant dies on nine throats.
“What is this?” says Hu Jingyan, faintly.
“The ones you count,” says Duan Wuyi, from the door. “In the sum.”
Lian Sheng’s sword is out. He turns it slowly, searching the crowd for someone to cut. There are too many. There is no one he can cut who is not smiling.
The volunteers rise, one by one, and are taken in.
> truth | Stand with the crowd. | summit_after | cult+4
> mercy | Go to the volunteers. | summit_after
> force | Watch Lian Sheng. | summit_after
> quiet | Hold the door. | summit_after

=== summit_offer | The Ninth
You walk into the ring alone. Nobody stops you; the nine are too intent on the chant to look up. You kneel in the gap that has been left between Hu Jingyan and the black pillar, in a space the width of one person, and you say, quite clearly: “I will be the ninth.”
The chant falters.
The cold seed turns over in your chest. It has waited for fifteen years. It opens like an eye. You feel the Stone turn toward you, a vast slow listening, and the silver page leaps up the pillar and writes a single line in your own hand: your own name, the one you have never said.
“Stop,” says Lian Sheng, hoarsely. “She is the Reserve. It is not permitted. She is the seal.”
“Is it not?” says Hu Jingyan, reasonably. “She has volunteered.”
The Elder’s voice, from the door, is a thin high cry. “Do not let them—”
The line on the page begins to burn.
> truth | Hold on. | summit_offer2 | qi-40
> mercy | Look at the Elder. | summit_offer2 | qi-40
> force | Fight it. | summit_offer2 | qi-40
> quiet | Listen. | summit_offer2 | qi-40

=== summit_offer2 | Pulled Back
It is the humming that saves you. It comes up through the floor of the Hall from nine hundred miles of rock, a woman’s voice, low and tired and amused, a tune with no words. It takes your name off the page the way a hand lifts a moth off a flame.
You fall. You are on your face on the white jade. The seed is cold and small in your chest again. The Elder is on her knees beside you, gripping your shoulders so hard it hurts, saying your name, the one you do not say.
Above you the ring has broken. Nine masters are on their feet, staring at the silver pillar, from which every line has faded. The page is blank.
“The seal,” whispers Hu Jingyan. “It would not take her.” He is quite white. “It has never refused.”
“She was already written,” says the Elder, fiercely, hauling you up. “In a hand that is not yours.”
The volunteers are waking. A man sits up and says, in a thin voice, “Is it over?”
> truth | Get up. | summit_after | cult+2
> mercy | Hold the Elder. | summit_after
> force | Look at Lian Sheng. | summit_after
> quiet | Listen for the hum. | summit_after

=== summit_after | What the Masters Said
It ends without ceremony. The silver page is dark. The nine volunteers are on their feet, wrapped in other people’s coats, being led out into the cold light. Hu Jingyan sits on his cushion with his hands in his lap and looks at the blank pillar. He has the air of a man who has put a very large sum in a drawer and found the drawer empty.
“A pity,” he says. “We shall have to use the other.”
“What other?” says the Elder.
“The Keeper of Keys.” He looks up, and smiles. It is a kind smile, which is the worst of it. “He is in the Ash Archive, as you know. He has been there for forty days, with the doors barred, and the Archive’s wards turned inward. We shall be glad to get him out.”
“You are not to touch him.”
“We have no need to touch him.” The scholar rises, stiffly. “We only need to be standing in the right place when the wards fail.”
Lian Sheng has already gone. His cushion is empty, and the door in the east wall swings.
> truth | Ask how the wards will fail. | summit_after2
> mercy | Ask about Lin Yuan. | summit_after2
> force | Stand in the way of the east door. | summit_after2
> quiet | Look at the Elder. | summit_after2 | npc:SU_SUMMIT_PRESSURE

=== summit_after2 | The Lift
“There is a lift,” says Hu Jingyan, gently. “Behind the Stone. It goes down the whole height of the Stair in an hour. Lian Sheng has taken it.” He lifts a hand. “I should be glad if you would not follow. I should be gladder if you did.”
“Why?”
“Because it is a long way down,” says the scholar, “and you will arrive after the thing is done.” He bows. “It is no insult. It is geography.”
Nobody answers. The Elder has her chin up. Duan Wuyi is writing in his notebook, with his lips moving. Ren Qiao has put a hand on his hilt, and let it fall.
In the corner of the Hall, behind the black pillar, a bronze door stands open. A cage of iron and glass hangs in a shaft. The cables are humming.
“We shall follow,” says Su Wanru.
“Of course you will.” Hu Jingyan sits down again, and takes out a book. “I shall be along presently. I have, I find, a good deal of reading to do.”
> truth | Step into the lift. | summit_close | +b5q_summit
> mercy | Help the volunteers into the lift first. | summit_close | +b5q_summit
> force | Take Lian Sheng’s trail. | summit_close | +b5q_summit
> quiet | Look back once at the Hall. | summit_close | +b5q_summit

=== summit_close | Nine Masters, One Door
The cage drops. The Hall is a bright square above you, then a star, then nothing. Wind roars in the shaft. Glass cables sing. You stand in the swaying cage with the whole company, and nobody speaks. Below you, out of sight, the world is waking.
+ summit_own | You walked the threshold unaided, and the pressure parted round you as water parts round a rock.
+ summit_strained | You crossed the threshold against the weight of nine masters, and it cost you ground.
+ summit_elder | The Elder took you on her arm through the pressure, and did not let you feel it.
+ summit_power | You broke the ring with your own qi, and nine masters felt it go.
+ summit_refused | The Clerk refused the writing, and the page went out like a candle.
+ summit_crowd | Ten thousand pilgrims filled the Hall in silence, and no one was left to cut.
+ summit_offered | You knelt in the ninth place, and the Stone would not take your name.
Hao Lan has her notebook out. Her hand is steady.
“Forty days,” she says. “He has been besieged for forty days.”
“Yes.”
“Then we have, at most, a little.”
> truth | Nod. | descent_entry | cult+4
> mercy | Hold her hand. | descent_entry
> force | Watch the shaft. | descent_entry
> quiet | Shut your eyes. | descent_entry
`,
  scenarios: String.raw`
$ SU_SUMMIT_PRESSURE | trust+4 respect+4 fear+4 | elder | The Elder stands in the sum of every ascension she ever signed.
hostile: It was the weight of every order, every seal, every stroke of the pen I put to a ledger and did not feel. All at once. I thought: so this is what it comes to. I could not breathe. I did not wish to be told that I was imagining it.
wary: I had thought I would be afraid. I was not. It was a sensation of enormous recognition. These are my people. I have signed for every one of them. I knew where each of them sat, and what they had done, and what it had cost.
neutral: Nine masters. I knew seven of them as children. One of them taught me to write a clean line. I had always taken it that the line was the whole of the art. I saw, standing in the Hall, that it was only the beginning.
warm: Hanzhen was beside me. He is nineteen, and a Mortal, and he stood up straight. I do not know what he drew on. I think it was only that he had decided not to kneel.
devoted: I put my hand on your shoulder and said nothing. I have never in my life said nothing at a moment of such consequence. It was, I find, a great deal more difficult than speech.
`,
  remarks: String.raw`
% summit_hao_later | summit_refused | hao | The Clerk has written me a note from the Stone. It says: ‘I refused. I am still here. This is very surprising.’ I have not stopped smiling since I read it.
`,
}
