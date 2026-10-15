import type { Arc } from "../types";

/**
 * Book Six, arc three: the Crimson Abyss. Nine doors stand between the Law Hall's cellar and the bottom of the mist, one for each of
 * Yu Ling's verbs, and the stair that connects them was cut for people who can feel what is behind each door. Five ways down: read the
 * doors as a Dao Seeking cultivator (truth), force them (force, at a price), let Lin Yuan open them with his eight keys (mercy), let the
 * nine cards open them (inquiry), or go down slowly with no key at all (quiet). Cast: Lin Yuan, the Elder, Gu, Ren Qiao, Mengjiao's voice.
 */
export const depths: Arc = {
  id: "depths",
  name: "The Crimson Abyss",
  scenes: String.raw`
=== depths_entry | Nine Doors
The Law Hall is empty. Lian Sheng’s men have gone up the mountain to hold the Archive, and the cellar under the Hall stands open, as if for a funeral. Beyond it the stair begins: black, narrow, lit with the red of the mist below. At every turn there is a door, nine in all. Each is carved with a different hand.
“Carry. Mend. Sing,” reads Lin Yuan, holding the lamp. “Light. Seal. Write. Keep. Open.” He stops at the last door, and does not say the ninth.
“Answer,” says the Elder, from behind you.
Cold comes up the stair. It is not the cold of the ward. It is slower, and wetter, and it has a rhythm. It is breathing.
+[rl] realm>=6 | From Dao Seeking upward, you feel each door as a held breath, and the mist behind them as one long note held too long.
+[rl] realm<=3 | The cold seeps through your robe and settles in your chest like a stone.
> truth | Stand before the doors, and let them be read. | depths_read1 | +depths_read | realm>=6 | The doors answer only a Dao Seeking cultivator who can feel what stands behind them.
> quiet | Sit before the doors with the First-Plate Shard in your hands, and let them read the glass. | depths_read1 | +depths_read item-plate_stall_ware | realm>=5 & item:plate_stall_ware>=1 | The doors answer a Dao Seeking cultivator, or a Spirit Severing one who carries glass the Sea once sang through.
> force | Break the first lock and take the stair at a run. | depths_force1 | +depths_forced needs:6
> mercy | Let Lin Yuan open them with his eight keys. | depths_keys1 | +depths_keyed | bond:lin>=8 | Lin Yuan does not yet trust you enough to lend his keys.
> inquiry | Lay the cards against the doors. | depths_cards1 | +depths_carded | count:card_>=5 | You hold too few cards for the doors to hum.
> quiet | Go down by hand, door by door, with no key. | depths_slow1 | +depths_slowed

=== depths_read1 | The Doors Read Back
You stand before the first door and let it be read. It is a plain wooden door with a handle worn smooth. The wood remembers the hand that carved it. It remembers the weight of a man who carried a coffin through it, and the second man who took the other end. It lets you through without asking.
The second remembers a girl mending a torn page. The third, someone singing at a funeral. The fourth lets you through by lamplight; the fifth keeps its own counsel and opens only when asked. Each one is a person. Each one is a verb.
By the ninth door you are walking steadily, and the stair is no longer a stair but a long attentive silence, and you understand that the Abyss has been listening for you since the cellar.
“It is not hostile,” says the Elder, behind you, in a shaky whisper. “It is shy.”
> truth | Go on. | depths_floor | cult+4
> mercy | Reassure her. | depths_floor
> force | Watch the dark. | depths_floor
> quiet | Listen. | depths_floor

=== depths_force1 | Down at a Run
The first lock gives with a crack. So does the second. At the third, something gives in your shoulder. The doors are warded against slow hands; they are not warded against a blow that does not care what it breaks. You are down six flights before the Elder has finished saying your name.
The price comes at the sixth door. The stair is still warm from the thing behind it, and your qi is going out of you in jerks, as water goes from a cracked jug. You reach the seventh with blood in your mouth. The eighth, with a ringing in your ears.
Ren Qiao catches you at the ninth. He says nothing, but his hand is shaking.
Behind him, from the dark, a thin patient voice says: “That was very rude.”
It is not Lin Yuan.
> truth | Straighten. | depths_floor | cult+1
> mercy | Lean on Ren. | depths_floor
> force | Look for the voice. | depths_floor
> quiet | Spit blood, and stand. | depths_floor

=== depths_keys1 | Eight Keys
Lin Yuan goes first, because it is his hand the keys are made for. He does it carefully, one door at a time, with the lamp held low and the ring of keys jingling in his shaking fingers. The hook for the first. The bell for the second. He says “please” at each lock, and apologises to the third door when it sticks.
At the eighth door he stops. The key is the door itself; he sets his palm to it, and the door opens, and he gasps. For an instant his thin face is full of light. He had thought it would feel like losing something. It feels like being let in.
“The ninth has no lock,” he whispers. “It’s open already. Someone left it that way.”
“Who?”
“Yu Ling. I think she meant it for you.”
> truth | Thank him. | depths_floor | bond:lin+3
> mercy | Take his arm. | depths_floor | bond:lin+3
> force | Look at the ninth. | depths_floor | bond:lin+3
> quiet | Smile. | depths_floor | bond:lin+3

=== depths_cards1 | The Cards Hum
You lay the first card against the first door. It hums. The second, against the second. By the fifth the stair is ringing like a struck bell, thin and sweet, and the doors are opening of their own accord, one after another, down the dark.
+[have] count:card_>=9 | All nine lie warm against each other in your sleeve, and the stair sings the whole vow aloud.
+[have] count:card_>=7 | Seven or eight hum together, and the missing ones are a held rest in the tune.
+[have] count:card_>=5 | Five or six hum, and the tune climbs and does not finish.
Hao Lan stops on the landing and puts her hand over her mouth. “I know this,” she says. “Madam Ash used to hum it. She never knew the words.”
“Yu Ling did,” says the Elder, very low.
Below, the doors are open on the long red dark, and the song goes on without you.
> truth | Follow it down. | depths_floor | cult+3
> mercy | Hold Hao Lan’s hand. | depths_floor
> force | Watch the doors. | depths_floor
> quiet | Hold the cards. | depths_floor

=== depths_slow1 | No Key
You go down by hand, without any key. It takes a night and a day. At each door you stop, and put your forehead against the wood, and wait until it lets you through. Some do not. At the fourth you wait six hours. At the seventh Gu falls asleep against your shoulder, and you let him.
It is a clumsy way down, and it is yours. By the eighth door you have no hope that you are doing it correctly. By the ninth you are too tired to mind.
The ninth door is open. On its sill there is a cup of tea, still faintly warm, and a folded scrap of paper.
*You took your time. Good. — M.*
Gu wakes. He reads it over your arm, and snorts. Then he looks again, and does not snort.
> truth | Keep the note. | depths_floor | cult+2
> mercy | Drink the tea. | depths_floor
> force | Look down the stair. | depths_floor
> quiet | Wake Ren. | depths_floor

=== depths_floor | The Floor of the Mist
At the bottom the stair becomes a ledge, and the ledge looks out over a red sea of mist that has no further shore. It is perfectly still. It is not frightening. That is the worst thing about it. It looks like a lake at evening, and the light on it is rose and gold.
“Hold the line,” says the Elder, under her breath. She has said it for fifteen years. She does not seem to know she is saying it.
Out in the mist something turns over. It is long, and slow, and enormous, and it is the shape of a listening ear.
+[rl] realm>=6 | You feel its attention come round to you like a sunflower to the light.
+[rl] realm<=4 | You can feel nothing at all of it, and the not-feeling is its own kind of dread.
A silver comb floats up out of the mist, and hangs in the air. Somewhere below, someone begins to hum.
> truth | Take the comb. | depths_close | cult+3
> mercy | Answer the humming. | depths_close
> force | Stand at the edge. | depths_close
> quiet | Wait. | depths_close

=== depths_close | The Ledge
They make camp on the ledge. Nobody sleeps, but they sit close to one another, round a small blue fire. The Elder has taken off her shoes. She sits with her bare feet over the edge and does not look down. Lin Yuan sits beside her with his ledger open on his knee, noting the doors. Ren Qiao sits with his back to the wall, with his sword across his knees, and his eyes on the mist.
+[how] depths_read | You walked through the doors, and they read you back, one by one.
+[how] depths_forced | You broke your way down, and carry the price in your chest.
+[how] depths_keyed | Lin Yuan opened the doors with eight keys, and said please at each.
+[how] depths_carded | The cards sang you down, and the song is still in your ears.
+[how] depths_slowed | You went down by hand, and the mist was waiting with tea.
At the edge of the light the silver comb turns slowly in the air, as if on a thread.
“She knows we’re here,” says the Elder. “She will come up when she’s ready.”
> truth | Wait with them. | hub_b6 | +b6q_abyss bond:ren+2 npc:SU_DEPTHS_DOORS
> mercy | Sit with the Elder. | hub_b6 | +b6q_abyss bond:ren+2 npc:SU_DEPTHS_DOORS
> force | Keep watch. | hub_b6 | +b6q_abyss bond:ren+2 npc:SU_DEPTHS_DOORS
> quiet | Look at the comb. | hub_b6 | +b6q_abyss bond:ren+2 npc:SU_DEPTHS_DOORS
`,
  scenarios: String.raw`
$ SU_DEPTHS_DOORS | trust+3 respect+4 fear+3 | elder | The Elder goes down the stair she signed fourteen names to send people down.
hostile: I counted the doors on the way. I counted them as I counted the signatures. Fourteen. It is not a coincidence that there are nine, and fourteen, and none of them mine. I held the pen. That is the whole of what I can say for myself.
wary: Lin Yuan said please at each door. I have signed hundreds of orders and not once said please. I intend to begin.
neutral: At the fifth door I felt a hand on my shoulder, and I did not turn. I thought: if I turn and it is one of them, I shall not be able to go on. I did not turn. It was a draught. Probably.
warm: I carried two children out of this mountain. I had not thought I would carry myself back. I find I am carried, after all, by a boy of seventeen with a lamp and a ring of keys.
devoted: If I do not come up again, tell Hanzhen the second ledger is in the left drawer. It has all fifteen years in it. It was never a record of the Law. It was a record of what I felt. He may burn it, or read it. He will know.
`,
  remarks: String.raw`
% depths_ren_later | b6q_abyss | ren | I held the lantern for the fourteen when I was seventeen. I held it as far as the third door. I am forty feet farther down than I have ever been. My hands are steady. That is the strangest part.
`,
}
