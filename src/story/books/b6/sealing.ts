import type { Arc } from "../types";

/**
 * Book Six, arc four: the Last Sealing. Su Mengjiao rises out of the mist and asks the one question the abyss has been asking for fifteen
 * years. What the player can answer depends on what they have become: the realm they reached, the cards they gathered, the friends they
 * kept and the karma they carry. Seven endings (the nine verbs, the listener, the ascendant, the hollow seat, the warden, the spent hand,
 * the closed ledger); every one of them is reachable, and the cheapest of them (the closed ledger) always is.
 */
export const sealing: Arc = {
  id: "sealing",
  name: "The Last Sealing",
  scenes: String.raw`
=== lastseal_entry | The Listener
She comes up out of the mist as a woman rises from a bath, slowly, with the red pouring off her shoulders. She is thin, grey-eyed, unhurried, with a long braid and a face four years younger than the Elder’s and fifteen years more tired. She catches the silver comb out of the air, and runs it through her wet hair, and looks at you.
“You took your time,” says Su Mengjiao. “Good. People who hurry down here stay.”
The Elder makes a sound that is not a word. Mengjiao looks at her for a long time.
“Wanru,” she says. “You’ve grown a grey streak. It suits you.”
Behind her the mist is a lake at evening, and the thing in it has turned its whole slow attention to the ledge.
+[rl] realm>=7 | At Ascendant the abyss is quiet in your presence, as a river is quiet before a dam.
+[rl] realm<=3 | You are very much out of your depth, and feel it in your knees.
> truth | Say who you are. | lastseal_a | npc:SU_SEALING_VOICE
> mercy | Go to the Elder’s side. | lastseal_a | npc:SU_SEALING_VOICE
> force | Put yourself between her and the others. | lastseal_a | npc:SU_SEALING_VOICE
> quiet | Wait for her to speak. | lastseal_a | npc:SU_SEALING_VOICE

=== lastseal_a | The Question
“It isn’t hungry,” says Mengjiao. “People think it is. It’s grieving. Fourteen of mine went down, and fifteen years of their names have fallen into it, and it does not know how to stop hearing them.” She tilts her head. “It asks one thing. It has asked it every night since the Sealing. *Who is listening?*”
“And you answered,” says the Elder.
“Every night. I have a very poor voice, and I never stopped.” She smiles at you, a worn and lovely smile. “I am tired, you know.”
The mist stirs. A hundred faint voices, very low, begin to say the same thing.
“It will ask you now,” she says. “And whatever you are, it will believe you.”
+[rl] realm>=5 | You feel the question press on your dantian like a hand.
+[rl] realm<=4 | You feel the question only as a hum in your teeth.
> truth | Say you are the Ninth. | lastseal_choice
> mercy | Say you are a friend. | lastseal_choice
> force | Say nothing, and stand. | lastseal_choice
> quiet | Take her hand. | lastseal_choice

=== lastseal_choice | Who Is Listening
The ledge is silent. The whole company has come to stand behind you, Gu, Ren, Hao Lan, Lin Yuan with his ring of keys, and the Elder with her bare feet and her second ledger. The mist is still. It waits.
There are many answers, and each is made of something you have been. The abyss will hear which.
> truth | Perform all nine verbs: carry, mend, sing, light, seal, write, keep, open, answer. | end_nine | | count:card_>=9 & realm>=6 | The nine verbs need all nine cards, and a cultivation deep enough to perform them.
> mercy | Answer her, and keep listening, as Mengjiao has done. | end_listener | | bond:mengjiao>=6 & realm>=5 | The Listener hears only someone she trusts, and one who can bear the question.
> force | Take the seal into yourself, as an Ascendant can. | end_ascendant | | realm>=7 | Only an Ascendant is wide enough to hold the seal in their own dantian.
> force | Hold the line with your own body. | end_warden | needs:6 | realm>=6 | The line takes a Dao Seeking cultivator at the least.
> force | Hold the line with your own body, whatever it costs. | end_spent | needs:6 | realm<=5 | You are strong enough to do better than this.
> deceit | Offer the black seed to the abyss, and take its seat. | end_hollow | | karma<=-30 & realm>=3 | A seat in the abyss is only offered to someone the abyss recognises, and someone with a core strong enough to sit.
> quiet | Step back, and let Mengjiao answer one last night. | end_ledger |
> mercy | Step back from the ledge, and think. | hub_b6 | bond:gu+1

=== end_nine | The Nine Verbs
#end Ending: The Nine Verbs
You do them in order, as Yu Ling wrote them. Ah Zhi’s Carry. Lu Yan’s Mend. Bao Er’s Sing. Qiu’s Light. Shu Ning’s Seal. Hao Lan’s Write. Tian’s Keep. Lin Yuan’s Open. At the ninth, the abyss asks again, *who is listening?*, and you say: “I am. And so is everyone you ever held.”
The red goes out of the mist like blood out of a cheek. What is left is a lake at dawn, clear to the stones. Fourteen names rise, one at a time, and fade, and a fifteenth stays.
Mengjiao sits down on the ledge and laughs till she cries.
+[who] bond:ren>=10 | Ren Qiao lowers the lantern, at last, and lets his hands rest.
+[who] bond:lin>=10 | Lin Yuan writes the date in his ledger, carefully, and underlines it twice.
+[who] bond:gu>=10 | Gu Hanzhen goes up the stair with his mother’s tea in his pack, and never stops talking.
At Dao Seeking or beyond, it is within your own cultivation to do this, and the mountain knows it. The cloud lifts off Azure Cloud for the first time in fifteen years.
The Elder burns her second ledger, one page at a time, and tells you she does not need it any more.

=== end_listener | The Listener
#end Ending: The Listener
You answer her. You do not stop. You take Mengjiao’s place on the ledge, cross-legged, and say “I am here” to the mist, and it says it back, and it says it back, and it says it back. She puts her silver comb into your hair. She will not stay to watch.
It is not a sacrifice. That is what you learn on the first night. It is an office, like Keeper of Keys, and it has hours. The Elder brings you tea. Lin Yuan reads you the cadastre. You answer the dark, night after night, and the dark, bit by bit, begins to answer you.
+[who] bond:mengjiao>=12 | Mengjiao comes down the stair once a season, and sits with you for an hour, and says nothing at all, and goes up refreshed.
+[who] bond:gu>=10 | Gu comes every day, and does not know what to say, and says it anyway.
+[rl] realm>=6 | At Dao Seeking you hear the thing in the mist and the thing in yourself as the same note.
The sect reopens its gates on the fortieth day. Nobody sends anyone down the abyss path again.

=== end_ascendant | The Ascendant
#end Ending: The Ascendant
There is not much to it. You step to the edge, and open your dantian, and the mist comes in. It is enormous. It goes on pouring for a quarter of an hour, and your body takes it, and takes it, as a hollow mountain takes rain. The fifteen who were sealed are not lost; they rise and settle in you like fireflies in a hollow tree.
You stand on the ledge with a lake of light in your chest, and the abyss is a clear pool at your feet.
“Ah,” says Mengjiao, quietly. “So that is what it is for.”
+[who] bond:ren>=8 | Ren Qiao kneels, which he has never done before, and does not get up for some time.
+[who] bond:lin>=8 | Lin Yuan cleans his spectacles and writes in his ledger: *Closed. Reason: Ascendant.*
No sect on the continent has had one for two hundred years. By the time you reach the top of the stair, there are seven rival masters on the mountain, and all of them are kneeling.
The Elder watches from the doorway of the Law Hall, with her second ledger under her arm, and asks you gently whether you intend to be kind.

=== end_warden | The Warden of the Mist
#end Ending: The Warden of the Mist
You plant yourself in the mouth of the ledge with your qi open and your feet on the stone, and the abyss comes up at you like a flood. You hold it. The stair behind you shivers; the doors above you ring; the Elder cries out; and you hold it, at Dao Seeking, with everything you have trained, and the flood slows, and stops.
It does not leave. It lies against your guard like a tide against a sea-wall. But it lies quietly.
+[who] bond:ren>=8 | Ren Qiao takes the post at your shoulder and does not leave it.
+[who] bond:gu>=8 | Gu builds a small stall at the top of the stair, and sells tea to the guard.
+[rl] realm>=7 | At Ascendant you do it without strain, and are free to go; you stay out of choice.
They call you the Warden. You do not go up the mountain again for a very long time. Spring comes to Azure Cloud. Every evening you stand on the ledge and look at the mist, and feel it look back.
It is, you think, not at all a bad life.

=== end_spent | The Price of the Hand
#end Ending: The Price of the Hand
You are not strong enough. You know it as you step forward; you know it as the flood comes up the ledge at you; you know it as you lift your hand. It is a brave, bad idea. For the length of three breaths you hold the line, and the seal in the stone sings and holds with you.
The fourth breath breaks you.
When you wake, three days later, you are on a pallet in the Law Hall, and the Elder is asleep with her head against the wall. Your dantian is a cracked jar. Qi runs out of it like water. Mengjiao has answered the night in your place, as she did for fifteen years before.
+[who] bond:gu>=6 | Gu sits beside you, and tells you very plainly that you are an idiot.
+[who] bond:lin>=6 | Lin Yuan has re-indexed your whole record in the Archive, under *Brave: Unwise.*
You will cultivate again. It will take years. But the abyss held, the company lives, and next time the road will be shorter, because you know exactly what it costs.

=== end_hollow | The Hollow Seat
#end Ending: The Hollow Seat
You hold out the black seed. It is the size of a thumbnail, and warm, and it knows the abyss as a key knows its lock. The mist comes up to meet it. You do not resist. You do not pretend that you do.
The red enters you through the seed. It is not painful. It is a vast, kind, appalling warmth. The fifteen names settle into you like a congregation. For one moment you hear Mengjiao shout your name, from very far away, and then it is only the abyss, speaking in your voice, saying *I am listening.*
+[who] bond:ren>=6 | Ren Qiao draws his sword, and cannot lift it.
+[who] bond:lin>=6 | Lin Yuan says *please*, and then, in a smaller voice, *please*.
You rise from the ledge. You are very calm. The sect’s gates open to you without a key. Elder Su kneels in the Law Hall and does not ask why you have changed; she does not need to.
The mountain is quiet. It is yours. It will be quiet for a very long time.

=== end_ledger | The Closed Ledger
#end Ending: The Closed Ledger
Mengjiao answers the night, one last time, in her cracked tired voice. You sit beside her on the ledge and hold her hand. It is not enough. It is the whole of what you have. The abyss is not sealed. It is, for a season, comforted.
+[rl] realm<=3 | You are a Mortal or near it; the road has taken more than you have, and you know it.
+[rl] realm>=4 | You could have done more, and you both know it, and neither of you says so.
In the morning you climb the stair and go home. The Elder reopens the sect. The Archive’s doors stand open. Lin Yuan indexes the fifteen names, and writes, at the foot of the page, in a small clear hand: *Open. Pending.*
The ledger is closed. The story is not. Somewhere under the mountain, a woman hums a wordless tune, and the mist, listening, learns it by heart.
`,
  scenarios: String.raw`
$ SU_SEALING_VOICE | trust+4 respect+4 fear+2 | mengjiao | Su Mengjiao meets the stranger who came down the stair.
hostile: You came down my stair with a sword at your belt and a card in your sleeve. I have met your kind. They ask for nothing, and take everything.
wary: You are the one Yu Ling chose. I am sorry; that was not a kind thing to do to a child. I am glad you came anyway.
neutral: I have been listening for you for fifteen years. I did not know it was you I was listening for. That is how it is, with listening.
warm: You did not hurry. You asked the doors, and the doors let you through. I have not been so pleased with anyone in a long time.
devoted: Stay, if you like. Or go, if you like. Either way you have given me the one thing I stopped hoping for: the sound of someone coming down the stair slowly.
`,
  remarks: String.raw`
% lastseal_lin_after | b6q_abyss & bond:lin>=-100 | lin | I have been asked to write a short account of the Sealing for the Archive. I have written forty pages. I regret to say I do not know how to leave anything out.
`,
}
