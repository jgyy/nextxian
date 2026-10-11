import type { Arc } from "../types";

/**
 * Book Six, arc one: the Ash Bridge. A single span of black stone over a gorge of mist, with a lantern on a post and a ward that
 * reads cultivation: it bows to a Spirit Severing sage, it holds a Core Former at the post until they are questioned, and below
 * that it asks for a Warden. Four ways across: openly, with the realm to be bowed through (truth); by forcing the ward, at a price
 * (force); by Old Lin's secret path under the span (deceit); and with Ren Qiao, who stood the post for fifteen years (mercy).
 * Cast: Ren Qiao, Old Lin, Captain Dur of Lian Sheng's men, the Elder.
 */
export const bridge: Arc = {
  id: "bridge",
  name: "The Ash Bridge",
  scenes: String.raw`
=== bridge_entry | The Span
It is a single arch of black stone, forty paces long and four wide, with no rail, thrown across a gorge that is full of mist. At the near end stands a post with a lantern on it, and a hut with a smoking chimney. At the far end, a gate of grey wood and a line of men in the sect’s grey livery with their halberds grounded. You have crossed this bridge once before, in the rain, with a basket.
Ren Qiao has stopped. He is standing at the lip of the span with his cloak blowing, and he has put out one hand and laid it on the post, as a man lays a hand on a horse.
“It is just as I left it,” he says. “They have not moved the lamp.”
The mist rises and falls under the arch. The ward in the stone has been lit: you can see it, a faint ring of pale fire round the keystone, reading the air. It reads cultivation. It has always read cultivation. It is how the Warden tells the sect from the road.
“Captain Dur,” says Ren Qiao, looking at the far end. “I recognise the walk.”
> truth | Walk across openly, and let the ward read you. | bridge_open1 | +bridge_open npc:SU_BRIDGE_WARD | realm>=5 | The ward bows only to a Spirit Severing cultivator, and holds all below.
> truth | Hold up the Returner’s Seven-Star Charm and walk across, and let the ward read the charm. | bridge_open1 | +bridge_open item-hawker_row_ware npc:SU_BRIDGE_WARD | realm>=4 & item:hawker_row_ware>=1 | The ward bows to a Spirit Severing cultivator, or to a Nascent Soul who carries a charm it remembers. You are neither.
> force | Walk across and break the ward as you go. | bridge_force1 | +bridge_forced needs:5
> deceit | Go down the cliff-path Old Lin keeps under the span. | bridge_slip1 | +bridge_slipped
> mercy | Let Ren Qiao go first, and take the post again. | bridge_ren1 | +bridge_ren | bond:ren>=10 | Ren Qiao does not yet trust you enough to take the post in front of you.

=== bridge_open1 | A Cultivator on the Span
The fire round the keystone brightens as you step onto the stone. It does not flare; it stills, and goes pale gold, and a faint high note comes out of the gorge like a struck bowl. The men at the far end look up.
The ward bows. There is no other word for it. The ring of light dips toward you, an inch, as a flame dips before a breath, and the mist under the arch parts in a clean path to the far side. It is a courtesy older than the sect. It is the bridge’s way of saying that it knows what you are.
Behind you the Elder says, very dryly: “It has not done that for me in thirty years.”
“It never did for me,” says Ren Qiao.
You walk. Forty paces. The halberds at the far gate do not move, but the men holding them have gone quite still, and one of them, a boy of nineteen, has begun, without noticing, to lower the point.
> truth | Keep walking. | bridge_open2 | cult+4
> mercy | Hold out a hand to Ren. | bridge_open2
> force | Look at the captain. | bridge_open2
> quiet | Breathe. | bridge_open2

=== bridge_open2 | Captain Dur
He is a heavy man of fifty in a captain’s grey, with a flat red face and the thick wrists of one who has been a Warden’s sergeant all his life. He steps out of the line. He puts his halberd across his body. His small eyes go from you to the glowing arch and back again. They are not unintelligent.
“Spirit Severing,” he says. “The ward does not lie.”
“No.”
“I have orders that no one is to pass.”
“I know.”
“I have orders,” he says, slowly, “from a Master of the Law. For anyone under Core Formation.” He looks at the ward. “It says nothing about the rest.”
He steps aside. It takes a great effort, you see, as if a hand had been pressed on his shoulder. Behind him the line of men look at each other. One, then another, lowers his weapon.
“I shall report that I was not asked,” says Captain Dur. His voice is hoarse. “It is not even a lie.”
> truth | Thank him. | bridge_close | cult+3
> mercy | Ask after the men. | bridge_close
> force | Take the gate. | bridge_close
> quiet | Go through. | bridge_close

=== bridge_force1 | Against the Ring
You put your qi against the ward. It is like putting a shoulder to a door in a dream: it gives, and does not give, and you feel the pale fire of the ring bite at the edges of your dantian. The stone hums. The mist under the arch boils. At the far end the men in grey stagger back, their halberds clattering.
“Do not,” says Ren Qiao, quickly. “Not against the keystone. It was set by a hand that—”
It is too late. The ring flares gold and white. You feel it take, from somewhere in your chest, the exact amount of qi it needs to read you, and a little more. Your knees go. You catch yourself on the post. The lantern swings.
The ward goes out. It does not break. It simply closes its eye. The span is a plain black bridge over a plain grey gorge, and the pale fire is gone.
“There,” says the Elder, thinly. “I have been trying to do that for thirty years. I now see why I did not.”
> force | Straighten. | bridge_force2 | cult+1
> truth | Admit it hurt. | bridge_force2
> mercy | Lean on Ren. | bridge_force2
> quiet | Cross, slowly. | bridge_force2

=== bridge_force2 | Without the Ring
They come at you without it. That is the cost. The ward was the bridge’s truce with the sect; without it the grey men do not know how to read you, and the captain, who is not a fool, takes it as an insult. He signals. Twelve halberds come down.
You have the cultivation for one, perhaps two. You do not have it for twelve, not after the ring. Ren Qiao steps up to your left with a drawn sword; the Elder steps up on your right with nothing at all, and an expression so cold that two of the halberds waver.
“Captain Dur,” she says. “I wrote your commission.”
“Madam.”
“I signed it. In the seventh year of my office. You were a sergeant with a good record and a bad knee.” She does not raise her voice. “Do you wish to find out whether I wrote the clause about insubordination?”
The captain’s red face works.
“It is my knee,” he says, after a long time. “It is why I am still at this post.”
He lowers his halberd.
> truth | Cross. | bridge_close
> mercy | Ask about his knee. | bridge_close
> force | Take the gate. | bridge_close
> quiet | Look at the Elder. | bridge_close

=== bridge_slip1 | Old Lin’s Path
It is a ledge of wet slate under the abutment, no wider than a hand and a half, with a rope of braided hemp to hold. You go down the cliff-face in the dusk, hand under hand, with the mist rising round your boots and the span a black curve over your head. You can hear the grey men above, stamping to keep warm.
A lantern waits at the bottom, in a niche cut in the rock. Beside it sits an old man on a stool, with a long white beard and a bowl of tea. He does not get up.
“Late,” says Old Lin. “I expected you three days ago. The Ninth Night was the Ninth Night.” He pours a second cup. “I made the tea twice.”
“Old Lin,” says Ren Qiao, hoarsely.
“Boy.” The old man’s face creases up in the lantern-light. “You’ve grown a scar.”
He rises, stiffly, to embrace the swordsman. The tea slops. He does not seem to care.
> truth | Take the cup. | bridge_slip2 | cult+1
> mercy | Help him up. | bridge_slip2
> inquiry | Ask how he has kept the lamp. | bridge_slip2
> quiet | Listen to the mist. | bridge_slip2

=== bridge_slip2 | Under the Span
He leads you along the ledge by the glow of a single shuttered lantern. It is a hundred and forty feet of rock, and he knows every inch of it. At a certain place he stops and puts his hand on the wall. A slab of slate swings in.
“The Warden’s way,” he says. “Nobody has used it since your day.” He pats Ren Qiao’s arm. “I keep it oiled.”
“You knew we would come.”
“I knew someone would.” He shrugs. “A man who has lit a lamp every night for fifty years begins to feel that the lamp has a purpose. It is not a strong feeling. It is only that I cannot think what else I would be doing.”
The slab opens on a stair. The stair climbs through the living rock to a cellar under the Warden’s hut, and a trapdoor, and a stove.
“Up,” says Old Lin. “And mind the third step. It talks.”
It does. You climb past it in single file, and each of you says, solemnly, “Sorry.”
> truth | Climb. | bridge_close
> mercy | Thank him. | bridge_close
> force | Listen at the trap. | bridge_close
> quiet | Smile. | bridge_close

=== bridge_ren1 | The Post
Ren Qiao goes onto the bridge alone. He walks to the middle of the span, and stops, and turns, and settles his feet. He has taken off the sword. He sets it against the post. He picks up the lantern from its hook, and holds it in front of him at the level of the heart.
The ward reads him. The fire round the keystone does not dip, and does not flare. It simply goes still, and steady, and warm, like a banked hearth. It knows him. It has known him for fifteen years. It does not need to read what he is. It remembers.
At the far end, Captain Dur has taken off his helmet.
“Warden,” he calls.
“Captain.”
“I was told you had gone.”
“I did,” says Ren Qiao. His voice carries across the gorge, perfectly level. “I have come back for my post.” He lifts the lantern. “I should like to let some people through.”
Nobody at the far end moves.
> truth | Stand behind him. | bridge_ren2 | cult+1
> mercy | Hold his sword. | bridge_ren2
> force | Watch the grey line. | bridge_ren2
> quiet | Wait. | bridge_ren2

=== bridge_ren2 | The Warden Decides
It is the oldest procedure there is. He asks them one by one. “Who are you?” he calls. “Where do you go?” And they tell him, in the mist, with the lantern in his hand: a Censor-General, a clerk, a boy with a flute, a smuggler, a seer, a swordsman, a deserter, an Elder. When each has answered, he looks at them, for a long time, in the way of a man weighing a door.
“Pass,” he says. “Pass.” He says it nine times.
The captain does not move. He stands at the far end, with the great red face working, and his helmet in his hands. At length he says, thickly: “The Masters said no one.”
“I know.”
“They said I was to turn back anyone who was not in grey.”
“I know.”
“I haven’t, in thirty years.” Captain Dur’s voice cracks. “I had a Warden. He used to say it was the whole of the work. He used to say it was *looking.*”
“I did,” says Ren Qiao, quietly. “I still do.”
The captain puts on his helmet. He steps aside.
> truth | Cross. | bridge_close | cult+3
> mercy | Thank Ren. | bridge_close
> force | Take the gate. | bridge_close
> quiet | Look back at the Warden. | bridge_close

=== bridge_close | The Hut
The hut is a single room with a stove and a bed and a shelf of cracked cups. A kettle hisses. There is a smell of juniper and tobacco. On the wall hang the Warden’s coat and the Warden’s sword-belt, as they were left, with a film of dust. Old Lin has put out three chairs.
+[how] bridge_open | The ward bowed to you, and the grey men lowered their halberds.
+[how] bridge_forced | You broke the ring, and it cost you; the bridge has not forgiven you yet.
+[how] bridge_slipped | You went down the cliff on a hemp rope and came up through a trapdoor.
+[how] bridge_ren | Ren Qiao took the lantern again, and asked nine travellers who they were.
Ren Qiao sits on the bed with his coat across his knees. He does not speak for a time. Then he reaches up to the shelf, takes down the cracked cup he drank from for fifteen years, and turns it in his hands.
“It was a good post,” he says.
“Yes.”
“I should like to say that I would go back to it.” He looks at the cup. “I find I would not. I find I want to be somewhere that is not a bridge.”
Old Lin puts a hand on his shoulder. He says nothing at all.
> truth | Smile. | bridge_close2 | bond:ren+3
> mercy | Hold his arm. | bridge_close2 | bond:ren+3
> force | Look at the mountain. | bridge_close2 | bond:ren+3
> quiet | Pour tea. | bridge_close2 | bond:ren+3

=== bridge_close2 | The Outer Courtyard
The Outer Courtyard is a square of grey flagstones the size of a market, with the sect’s prayer-wheels at its edge and the sutra stair at its head. It is full of men in grey with halberds. They are tired and bored and a little frightened. They are, you see, very young. Some of them have been standing since the Ninth Night.
You go through them. It is not difficult. They look at you, and then at the old man with the lantern, and then at the swordsman, and they say nothing. At the foot of the stair a boy of sixteen with a gap in his teeth steps out of the line, looks at Ren Qiao for a long moment, and salutes.
“Warden,” he says. “It’s good to see the lantern.”
“Thank you.”
“It was dark last night.” The boy’s ears are red. “I thought you might want to know that the lamp-keeper’s niece kept it lit.”
He steps back into line.
Above you the sutra stair rises into the cloud, and at the top of it a single window burns. The Archive.
> truth | Climb. | hub_b6 | +b6q_bridge cult+4
> mercy | Thank the boy. | hub_b6 | +b6q_bridge
> force | Look at the window. | hub_b6 | +b6q_bridge
> quiet | Rest at the foot of the stair. | hub_b6 | +b6q_bridge
`,
  scenarios: String.raw`
$ SU_BRIDGE_WARD | trust+3 respect+4 fear+3 | elder | The Elder crosses the Ash Bridge that she crossed to seal her sister.
hostile: I did not look at the fire. I looked at the stones. They were exactly as I remembered them, and I found I hated that more than I had hated anything in the Hall. A bridge ought to change.
wary: Ren Qiao took the lantern, and I thought: he is seventeen, and he is holding it for me. I have been grateful for fifteen years, in the way one is grateful for a debt one cannot name.
neutral: The ward read me and said nothing. I took it as the bridge’s opinion. It is a stone. It is not in a position to be flattering.
warm: Old Lin gave me a cup of tea and did not ask what I had done. I think it is the kindest thing anyone on this mountain has done for me since the day I was made Elder. I drank it standing up.
devoted: I have crossed this bridge four times in my life. Once to enter. Once to seal. Once to come away. Once now, with a child. It is the fourth that I find I do not mind.
`,
  remarks: String.raw`
% bridge_lin_later | bridge_slipped | hao | Old Lin sent a basket of tea-biscuits to the tent. There is a note in the lid: ‘For the boy who is still up there. Tell him the lamp is lit.’ I have put it in my coat for him.
`,
}
