import type { Arc } from "../types";

/**
 * Book Five, arc sixteen: the Far Side. The lift drops the height of the Stair in an hour and lands at the Pass above Azure Cloud,
 * where the Concord's wardens read every traveller's cultivation at a glass gate. A Nascent Soul is bowed through; a Core Former is
 * questioned; anyone below that is turned back unless they have papers, or a Censor, or the nerve. Cast: the gate-warden Mo Yun, Duan Wuyi,
 * the Elder, Hao Lan, Ren Qiao.
 */
export const descent: Arc = {
  id: "descent",
  name: "The Far Side",
  scenes: String.raw`
=== descent_entry | The Lift
The cage falls for an hour. The shaft is lit by lamps in niches, one every hundred feet, each a small steady flame. You stand in the swaying iron box with the whole company wedged round you, and the wind comes up through the floor, and nobody speaks. Near the end the pitch of the cables changes, and the cage slows. Through the glass sides you see the world come up out of the cloud: a valley, a river, a road, a wall; and above all, in the east, a long dark mountain with its head in the sky.
Azure Cloud.
You have seen it from below, in the rain, climbing. You had not thought you would see it from above.
“It is smaller,” says Ren Qiao, in a strange voice. “It is much smaller than I remember.”
“It is the same,” says the Elder. “You have grown.”
The cage touches ground. The gate opens.
> truth | Step out into the evening. | descent_gate | npc:SU_DESCENT_PASS
> mercy | Let the volunteers out first. | descent_gate
> force | Look for Lian Sheng’s tracks. | descent_gate
> quiet | Look at the mountain. | descent_gate

=== descent_gate | The Glass Gate
The Pass is a notch in the ridge, two hundred yards wide, closed by a wall of green glass with a single gate. A garrison of the Concord’s wardens sits behind it in a long grey barracks. Every traveller who wishes to go down into the valley of Azure Cloud must stand before the Gate-Glass, a great disc of pale glass hung on a bracket, and be read.
It reads cultivation. You can see it do so. A pedlar stands before it with a pack, and the glass clouds, and goes a dull grey; the warden at the desk says, “Mortal. Papers.” A merchant stands before it, and the glass glows a faint green: “Foundation. Tolls.” A scarred swordsman in a grey cloak, and it burns a hard clear gold: “Core Formation. Declare your business.”
A young officer in a green tabard sits at the desk. Mo Yun, by his badge. He looks up at your party with weary politeness.
“Next,” he says. “One at a time, please. The Glass reads you. It cannot be argued with.”
> truth | Stand before the Glass, and let it read you. | descent_read |  | realm>=4 | The Glass would cloud on anyone below Nascent Soul, and the warden would turn you back.
> force | Stand before it, and push your qi at the Glass. | descent_read | +descent_pushed needs:4
> inquiry | Present Duan Wuyi’s Censor seal at the desk. | descent_papers | +descent_seal | b5q_pilgrims | The seal needs the Office’s countersignature you do not have.
> mercy | Let Ren carry the warden’s letter, and wait beside him. | descent_papers | +descent_waited
> quiet | Go back up and sit another night. | hub_b5_c

=== descent_read | Read
The Glass clears to a clean deep amber, and for the first time since you came to the Pass the warden stands up.
“Nascent Soul,” says Mo Yun. His voice has gone formal. “Madam. I beg your pardon. No one told me.” He bows, from the waist. “The Gate is open. May I ask your destination?”
“The mountain.”
“Of course.” His eyes flick to the Elder, to Duan, to the rest of the company. “Your party?”
“My party.”
“The Glass has no objection to a party,” he says. “If its leader is of rank.” He waves a hand. The gate swings. “I am told it is the first Nascent Soul to come through the Pass this year. I shall note it in the book.”
The Elder, passing, murmurs: “I should like it known that I have always held that a rank is no more than what it is for.”
“Yes, madam.”
“Then see that it is for something.”
> truth | Go through. | descent_close
> mercy | Thank the warden. | descent_close
> force | Look at the barracks. | descent_close
> quiet | Look at the mountain. | descent_close

=== descent_papers | Papers
It takes two hours. The warden has a rule for every contingency, and a form for every rule. He reads Duan’s seal with his lips moving. He asks for the Office countersignature, and then for a witness, and then for the witness’s witness. He runs a finger down a long list. The Glass above him glows and clouds and glows again as each of you stands before it.
“Mortal,” he says, wearily, of Gu. “Foundation.” Of Hao Lan. “Foundation.” Of Odval. “Core.” Of Ren. “Unreadable,” of the Elder, with a frown.
He looks at you last. The Glass shows a thin grey cloud.
“It cannot read her at all,” he says. “I do not know what that means.”
“It means she is carrying more than she weighs,” says Duan Wuyi, mildly. “It happens.”
Mo Yun hesitates. His pen hovers. At length, with the air of one who has decided to be wrong in the safest direction, he stamps the page and passes it through.
“The Concord does not turn back a Censor-General,” he says. “I shall put it down to weather.”
> truth | Thank him. | descent_close
> mercy | Hold the gate. | descent_close
> force | Take the stamped page. | descent_close
> quiet | Go through quietly. | descent_close

=== descent_close | The Valley of the Mountain
You come down in the dusk. The road winds through terraces of pale rice and black mulberry, through a village with a single lamp lit in a tea-stall, and the mountain stands over it all with its head in the cloud. The air smells of rain and wet slate and woodsmoke. Gu has stopped.
+ descent_pushed | At the Pass you pushed your qi into the Glass, and it flinched; you will feel that for a day.
+ descent_seal | The warden took the Censor’s seal, and passed you as weather.
+ descent_waited | You waited at the desk for two hours, and the Glass read you as nothing at all.
“That is my mother’s stall,” he says, in a small voice. “Look. The lamp. She leaves it lit.”
“Does she?”
“Every night.” He swallows. “In case.”
The Elder takes off her hat. The wind off the mountain stirs the grey hair at her temples. “There is a hearth and tea,” she says. “And a boy at the top who has been alone in a building for forty days. We shall go down to the stall, and eat. And then we shall go up.”
> truth | Go down to the stall. | b6_gate | +b5q_descent
> mercy | Take Gu’s arm. | b6_gate | +b5q_descent
> force | Ask whether the road is watched. | b6_gate | +b5q_descent
> quiet | Look at the dark mountain. | b6_gate | +b5q_descent
`,
  scenarios: String.raw`
$ SU_DESCENT_PASS | trust+3 respect+3 fear+2 | elder | The Elder looks up at the mountain she has left for the first time in thirty years.
hostile: It was smaller than I remembered. This is in the nature of a thing one has feared for a long time. It was also exactly as cold.
wary: The last time I saw it from outside I was twenty-eight, with a pen in my hand and a clean list of fourteen. I did not look back. I find I am looking back now.
neutral: There is a lamp in a window at the foot of the road. It has been lit for fifteen years. I do not know whose it is. I should like to.
warm: Hanzhen’s mother left a lamp for her sons. I have no sons. I have a mountain. I think it is the same.
devoted: I have walked down a stair from heaven. I was not met by a seraph, but by a boy with a stamp. I find I preferred it.
`,
  remarks: String.raw`
% descent_ren_later | descent_pushed | ren | You pushed your qi at the Glass and it flinched. I was watching your face. I would not do that again unless you are certain.
`,
}
