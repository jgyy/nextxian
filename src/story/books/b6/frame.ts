import type { Arc } from "../types";

/**
 * Book Six's frame: The Last Sealing. The company returns to Azure Cloud by the Pass. Four arcs, in order: the Ash Bridge, the
 * Ash Archive, the Crimson Abyss and the Last Sealing itself. The mountain tests cultivation at every stage, and the ending the
 * player reaches depends on realm, the nine cards, and the friends they kept.
 */
export const frame6: Arc = {
  id: "frame6",
  name: "The Frame of the Last Sealing",
  scenes: String.raw`
=== b6_gate | The Tea-Stall at the Foot
Gu’s mother is a small round woman of fifty with a cracked cup and a face like a loaf, and she does not say anything at all when you come down the road. She stops in the doorway of the tea-stall with a cloth in her hand. She looks at her son. She looks at the thin scarred man behind him in the patched coat, whom she has not seen since he was twelve.
Then she puts down the cloth, and sits on the step, and lets out a long unsteady breath, and begins to cry in the particular, comfortable, thorough way of a woman who has left a lamp lit for fifteen years.
It is a while before anyone eats. When they do, Yunxia tells it between mouthfuls, in a flat quick voice. The sect is shut. Lian Sheng’s men hold the Outer Courtyard. The wards of the Ash Archive have been turned inward by the Masters, and the boy inside has not come out in forty days. Old Lin still lights the lamp under the sutra stair. Nobody goes up the mountain who is not in grey.
“Eat,” she says, to the whole company, fiercely. “You’ll want it.”
> truth | Eat, and listen. | hub_b6 | bond:gu+3
> mercy | Hold Yunxia’s hand. | hub_b6 | bond:gu+3
> quiet | Look up at the dark mountain. | hub_b6 | bond:gu+3
> inquiry | Ask how the road is watched. | hub_b6 | bond:gu+3

=== hub_b6 | The Mountain Road
The road to Azure Cloud climbs in a long rising spiral round the shoulder of the mountain, past terraces of tea, a shrine to the river, the foot of the sutra stair. Above it the cloud lies in tiers. In the high one a single light burns: the Ash Archive, lit from within.
It is a four-day climb for a Mortal. For a cultivator, a day. For one who has made the road a direction, an hour. The mountain knows which you are.
+[rl] realm>=6 | At Dao Seeking the mountain is a held note. You feel the Archive’s ward as a fist inside a glove, and the abyss under the Law Hall as a long breath not yet let go.
+[rl] realm>=5 | At Spirit Severing the cloud parts for you. You feel the mountain’s wards one by one, and they let you by.
+[rl] realm<=4 | The mountain is vast, and you are small in it. Every ward you pass lays a hand on your chest.
+[d] b6q_bridge | The Ash Bridge is behind you, and the lantern on its post is lit again.
+[d] b6q_archive | The Archive stands open, and a boy with a ring of keys is sitting on its step.
> truth | Go up to the Ash Bridge. | bridge_entry |  | !b6q_bridge | You have crossed the Bridge.
> mercy | Go up to the Ash Archive, where the light is. | archive_entry |  | b6q_bridge & !b6q_archive | You cannot reach the Archive until you have crossed the Bridge.
> inquiry | Go down to the Round Hall and the Crimson Abyss. | depths_entry |  | b6q_archive & !b6q_abyss | The Abyss lies below the Law Hall, beyond the Archive’s key.
> force | Go to the bottom. | lastseal_entry |  | b6q_abyss | You have not yet reached the bottom.
> quiet | Sit out the night on the mountain in meditation, and let the cold settle in your core. | still_hub_b6 | cult+90 +still_hub_b6 | !still_hub_b6 | You have already sat your night here.

=== still_hub_b6 | A Night of Stillness
You sit among the tea-terraces with your back to a wall and your hands open on your knees. The mountain breathes. It is the oldest breath you know. Your own settles under it, slow, enormous, almost without effort.
Nothing happens, and by morning something has. Your qi sits denser than it did, a clear pool with nothing left to stir it, and for the first time in months you do not feel the weight of anything you are carrying.
> quiet | Rise at first light. | hub_b6
> truth | Admit how much of the road you were carrying. | hub_b6
> mercy | Wake the others gently. | hub_b6
> inquiry | Note what your qi felt like. | hub_b6
`,
}
