/**
 * Where the world bows to the hero’s realm in the main line and the books: the gate disciple, the warden at the archive, the crowd at the tribunal and the
 * fishing families on the quay. Lines are
 * `>> scene | group | conditions | text`, and of the lines sharing a group only the first that holds is shown. Every scene here is one of the lighter ones.
 * Each line is the same room at a higher realm, and each bows lower than the last: nobody in this story is rude to a Dao Seeker by accident.
 */
export const tribulationEchoes = String.raw`
// ---- The gate of the sect: the disciple under the lintel
>> gate_gossip | tb_gate | realm<=0 | He glances at you as he speaks, and then at his umbrella, and decides that the umbrella is the more important of the two.
>> gate_gossip | tb_gate | realm>=1 & realm<=1 | He has seen the thread of qi at your sleeve, and he tips the umbrella so that it covers a little of you too.
>> gate_gossip | tb_gate | realm>=2 & realm<=2 | He has seen the foundation under your stance, and the umbrella tips, without his noticing, over the stranger’s head.
>> gate_gossip | tb_gate | realm>=3 | He has not breathed properly since your core brightened the rain. The umbrella is in your hand before either of you has decided how.
// ---- The Archive: the warden at the front doors
>> archive_front | tb_arch | realm<=1 | He does not look up from the order, and he does not look at you. A grey sleeve and a thin thread of qi: there is nothing in you he needs to remember.
>> archive_front | tb_arch | realm>=2 & realm<=2 | He glances at your sleeve, and then again, longer. A foundation is a thing a man in his post respects without being told to.
>> archive_front | tb_arch | realm>=3 & realm<=3 | He has seen the core under your breastbone and given up pretending the order is the interesting part.
>> archive_front | tb_arch | realm>=4 | He bows, slightly late and entirely sincere, and holds the great door with both hands until you have passed.
// ---- The tribunal: the terraces watching the steps
>> tribunal_summons_3 | tb_trib | realm<=1 | Somewhere in the third row someone laughs, and is hushed, and laughs again. A mortal on the white steps is the best entertainment the Law has had in years.
>> tribunal_summons_3 | tb_trib | realm>=2 & realm<=2 | The murmur is a mixed one. The older disciples see the foundation and say nothing, and the younger ones, who cannot, say a good deal.
>> tribunal_summons_3 | tb_trib | realm>=3 & realm<=3 | The murmur drops as you climb. They have seen the core, and a core on those steps makes a crowd remember its manners.
>> tribunal_summons_3 | tb_trib | realm>=4 | The rows fall silent from front to back, as a field does under a shadow. When you reach the third step, somebody’s knee touches the stone.
// ---- The harbour: the hats come off
>> harbour_close | tb_quay | realm<=2 | Below on the quay the fishing families walk past with their hats in their hands, as they do for everyone, and look through you to the Wall.
>> harbour_close | tb_quay | realm>=3 & realm<=4 | Below on the quay a few of the fishers glance up at the core in you, and the hat in a hand tips an inch.
>> harbour_close | tb_quay | realm>=5 | Below on the quay the fishers stop walking. A father puts a hand on his son’s hat, and lowers them both a little, which is not what they do for the Wall.
`;
