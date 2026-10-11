import type { Arc } from "../types";

/**
 * Book Five, arc fourteen: the Nine Tiers. The Heavenly Stair is the Concord's measure of cultivation made into stone: each landing asks
 * a realm, and the treads bear only what they can bear. Climbing unaided asks the realm; pushing on regardless is possible but
 * costs qi and ground; a friend will carry you if the bond is close enough; or you may go back down and come again stronger.
 * Every landing carries one of the founders' nine admissions. Cast: Ren Qiao (who carries), the Elder, Duan Wuyi, Odval.
 */
export const tiers: Arc = {
  id: "tiers",
  name: "The Nine Tiers",
  scenes: String.raw`
=== tiers_entry | The First Tread
The Stair does not ask your name. It asks what you weigh, and then it asks what you are. Nine tiers, each a spiral of three hundred green treads, each ending in a landing like a walled town; and on each landing, cut deep into the glass, a sentence that the founders could not bring themselves to say anywhere else.
The pilgrims climb in a long white thread. At the first tier they walk upright and talk. By the third they have stopped talking. By the sixth the thread is thin, and the air is cold and bright and tastes of metal, and the treads ring under your boots with a note that rises as you rise.
“It is a measure,” says Duan Wuyi, softly, with his hand on the rail. “Look. The glass answers the climber. A person of Foundation can walk the lower tiers and no further. At Core Formation the treads grow warm. Above the sixth, only a cultivator of the Dao itself walks them untroubled.”
“And the rest?”
“Climb with difficulty,” says the Elder, “or are carried.”
> truth | Begin, reading every inscription as you go. | tier_1 | npc:SU_TIERS_WALL
> mercy | Begin, and keep to the pace of the slowest. | tier_1
> quiet | Begin, and say nothing until you reach the first landing. | tier_1
> inquiry | Ask Odval what the Stair is humming. | tier_1

=== tier_1 | First Tier: Weight
A wall of blank green glass, and in the middle of it, in letters as tall as your hand, the first admission: *A STEP IS A PLACE TAKEN FROM SOMEONE.* The landing is crowded and warm. Pilgrims sit about eating, with their feet out of their sandals. A child has drawn a little face on the glass with her finger.
The treads of the second spiral rise from the far side. They are plain, unmarked, and cold. A pilgrim who goes up them on tired legs sways, and catches the rail, and goes on.
“Any Foundation can do this,” says Ren Qiao, quietly. “It is only effort.”
> truth | Climb it on your own strength. | tier_2 | cult+2 +tier_u_1 | realm>=2 | Foundation Establishment is needed even for the lowest spiral.
> force | Push up through it regardless of what it costs. | tier_2 | +tier_s_1 needs:2
> mercy | Let Ren take your weight up the spiral. | tier_2 | +tier_c_1 | bond:ren>=6 | Ren has not walked far enough beside you to offer.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_2 | Second Tier: Hunger
*NOBODY RISES ON AN EMPTY BELLY. FEED THE ONE BESIDE YOU.* The words are scratched, not carved, as if by a thumbnail, and have been polished by the sleeves of nine hundred thousand pilgrims. Under them, a bench. On the bench, a loaf of black bread wrapped in a cloth, and a card in a child’s hand: *take half.*
The glass here is warm to the touch, and the second spiral, of which you can see the first fifty treads, is warm too, with a faint pearly shine. Above it the sky is almost white.
Hao Lan breaks the loaf and hands round the halves.
“Whoever left this,” she says, “was one of us.”
> truth | Climb it unaided, sharing the bread. | tier_3 | cult+2 +tier_u_2 | realm>=2 | Foundation Establishment is needed to bear the warm treads.
> force | Push on through the warm treads whatever it costs. | tier_3 | +tier_s_2 needs:2
> mercy | Let Ren carry you, and share the bread with him. | tier_3 | +tier_c_2 | bond:ren>=7 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_3 | Third Tier: The Lines
*THE LEDGER FORGETS WHAT IT IS NOT ASKED TO REMEMBER.* The landing is a town of clerks. Long low libraries stand shoulder to shoulder, with brass plates by the doors: *Lines of the Ascended. Lines of the Struck. Lines Pending.* A thousand lamps burn in their windows. Nobody is reading.
Beyond it the third spiral is the colour of old ivory. It rings lower here, a steady, deep, monastic note. A cultivator who has formed a core feels it settle in the chest like a second heartbeat.
“Do not go in,” says the Elder, looking at the libraries. “Not yet. I know what is in them, and I should like to be stronger before I read it.”
> truth | Climb it unaided. | tier_4 | cult+3 +tier_u_3 | realm>=3 | The ivory treads ring only for a golden core.
> force | Push on, though the treads are against you. | tier_4 | +tier_s_3 needs:3
> mercy | Let Ren carry you past the libraries. | tier_4 | +tier_c_3 | bond:ren>=8 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_4 | Fourth Tier: Debt
*A NAME IS A DEBT YOU CARRY FOR OTHERS.* The landing is a courtyard of black stone with a well in the middle. Pilgrims stand round it with their heads bowed. At the lip of the well, tied to a post, a rope descends into the dark; and at the end of the rope, if you lean, you can hear a hundred thousand small voices answering a roll.
The fourth spiral is white as a bone. It is cold, and it does not ring, but breathes. Odval walks close to your shoulder and says nothing; she has her hand flat against the rail.
“It is asking,” she says at last. “Whether you will carry them.”
> truth | Climb it unaided, carrying the roll in your breath. | tier_5 | cult+3 +tier_u_4 | realm>=3 | The white treads do not bear one who has not formed a core.
> force | Push on, though the treads breathe against you. | tier_5 | +tier_s_4 needs:3
> mercy | Let Ren carry you, and the roll with you. | tier_5 | +tier_c_4 | bond:ren>=9 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_5 | Fifth Tier: Silence
*SILENCE IS NOT CONSENT. IT IS ONLY QUIET.* There is no landing here. The spiral simply widens into a terrace of bare glass the size of a threshing-floor, and the pilgrims are sitting on it in rows, in silence, with their hands in their laps. They have been told to wait for the Ceremony. They have been waiting for nine days.
The treads above are clear as water. You can see through them to the sky.
“A Nascent Soul walks these without looking down,” says Duan, very low. “I have been told so. I have never met one.”
Nobody speaks. A man in the front row turns his head and looks at you with calm, kind, empty eyes.
> truth | Climb it unaided, your inner figure first. | tier_6 | cult+4 +tier_u_5 | realm>=4 | The clear treads bear only a Nascent Soul.
> force | Push out onto the clear treads regardless. | tier_6 | +tier_s_5 needs:4
> mercy | Let Ren carry you across the clear glass. | tier_6 | +tier_c_5 | bond:ren>=10 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_6 | Sixth Tier: Power
*POWER MEASURES THE DISTANCE YOU CAN FALL.* The terrace is cold and clean and silent. A single stone bench stands at the edge, and on it sits a man in a plain grey robe, looking over the parapet at the camp, ten thousand tents the size of rice grains. He does not turn. His hands are on his knees. He is not breathing.
“He is a Spirit Severing sage,” whispers Odval. “Look at his shadow.”
It points toward the sun.
“He sat down on the way up,” says Ren Qiao, “and could not decide if he wished to go on.”
The seventh spiral begins behind the bench. It is a ribbon of white fire.
> truth | Climb it unaided, looking only upward. | tier_7 | cult+4 +tier_u_6 | realm>=5 | Only one who has severed the dust of old names can walk the white fire.
> force | Push into the white fire regardless. | tier_7 | +tier_s_6 needs:5
> mercy | Let Ren carry you through the fire. | tier_7 | +tier_c_6 | bond:ren>=10 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_7 | Seventh Tier: Lifting
*WHAT YOU CAN LIFT, YOU OWE TO THOSE WHO CANNOT.* The landing is empty. It is a floor of white glass with nine pillars, and on each pillar a hook, and on each hook a coat. Nine coats of pilgrims who climbed this high and did not go further. One is a child’s. The treads of the eighth spiral are a faint silver.
“They took their coats off,” says Ren Qiao, gruffly. “They were hot.”
“It is not hot here.”
“No.” He looks at the coats. “They took them off because they were done.”
He puts a large hand on the child’s coat. He does not take it down.
> truth | Climb it unaided, in your own coat. | tier_8 | cult+5 +tier_u_7 | realm>=5 | The silver treads bear only a Spirit Severing cultivator.
> force | Push on up the silver whatever it costs. | tier_8 | +tier_s_7 needs:5
> mercy | Let Ren carry you, for the last of the coats. | tier_8 | +tier_c_7 | bond:ren>=11 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_8 | Eighth Tier: The Door
*THE DOOR IS NOT AT THE TOP.* It is cut across the whole width of the wall, in letters a man’s height, and under it a plain arch of green glass, shut, with no handle. A little old lamp hangs beside it, burning without oil. A smell of lotus comes from the crack beneath.
You know, without having been told, that this is a door to somewhere else. The Unwritten lies behind it, or under it, or at the end of a long stair of its own. Odval has her hand over her mouth.
“Not now,” says the Elder, steadily. “We are going up. That is for after.”
The ninth spiral is gold. It is warm, and humming, and the air above it shakes.
> truth | Climb it unaided, past the closed door. | tier_9 | cult+5 +tier_u_8 | realm>=6 | The golden treads bear only one who seeks the Dao itself.
> force | Push up the gold regardless. | tier_9 | +tier_s_8 needs:6
> mercy | Let Ren carry you past the door. | tier_9 | +tier_c_8 | bond:ren>=12 & count:tier_c_<=3 | Ren cannot carry you every tier; he must also walk.
> quiet | Go back down to the camp. | hub_b5_b

=== tier_9 | Ninth Tier: The Question
*SHE WILL ASK. ANSWER HER.* It is cut on the last landing, in a hand you know, in the hand of the card in your pocket. Nobody is on the summit terrace. The wind has dropped. Over the parapet, to the east, the world is a map: the Glass Sea, the Steppe, the dim green line of the coast, and in the far north-east, small and blue, a mountain.
Behind you, from the Hall of the Ninth Night, comes a sound of nine voices in unison, chanting. The Ceremony has begun.
There is time for one thing. There is always time for one thing.
> truth | Say the name of the mountain aloud. | tiers_close | +tier_named
> mercy | Wait for the last of your friends to reach the landing. | tiers_close
> quiet | Drink water, and catch your breath. | tiers_close | cult+3
> inquiry | Look at the world once, and fix it in your mind. | tiers_close

=== tiers_close | The Summit Terrace
You have come up. The wind off the Hall of the Ninth Night is cold, and smells of lotus and hot wax, and the voices inside have found their pitch.
+ count:tier_u_>=6 | Most of the Stair you climbed on your own strength, and the treads rang for you all the way.
+ count:tier_s_>=3 | Three times or more you went where your cultivation could not follow, and the tread paid you out in qi and breath.
+ count:tier_c_>=2 | More than once you let Ren Qiao take your weight, and he has not said a word about it, which is how you know he has been proud.
+ tier_named | You said the name of the mountain at the top, and the wind took it east.
Hao Lan is the last to arrive. She comes over the lip on her hands and knees, grey with fatigue, and sits down against the parapet with her notebook in her lap.
“Nine tiers,” she says. “I have counted every one.”
> truth | Go to the doors of the Hall. | hub_b5_c | +b5q_tiers
> mercy | Help the stragglers up first. | hub_b5_c | +b5q_tiers
> quiet | Sit down against the parapet, and breathe. | hub_b5_c | +b5q_tiers cult+4
> inquiry | Ask the Elder what she expects to find. | hub_b5_c | +b5q_tiers
`,
  scenarios: String.raw`
$ SU_TIERS_WALL | trust+3 respect+4 fear+3 | elder | The Elder reads the founders’ admissions on the nine landings.
hostile: Nine sentences. I read them all. None was a lie, and none was a defence. I found I wished very much that one of them had been either.
wary: They wrote it on the Stair itself, where it would be walked over, and not read. I admire that, as one admires an exact insult.
neutral: The treads ring for me up to the fourth landing. I had thought it would be vanity to mind. I minded. I want it noted that I minded.
warm: Ren Qiao carried Hanzhen up the eighth spiral, and afterwards would not discuss it. I find I have a very high opinion of men who will not discuss it.
devoted: I have spent my life walking up other people’s stairs. This is the first that has asked me, plainly, what I weigh. It is a relief to be asked.
`,
  remarks: String.raw`
% tiers_ren_later | count:tier_c_>=2 & bond:ren>=-100 | ren | I carried you twice, or three times. It was no trouble. It was less trouble than the first bridge. I would be obliged if you did not mention it to anyone with a notebook.
`,
}
