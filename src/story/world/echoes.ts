/**
 * Where the story remembers the world. The sect talks of the near reaches in its interludes, the books carry the news of the far ones, and the Last Sealing
 * asks who is listening. Lines are `>> scene | group | conditions | text`; of the lines sharing a group, only the first that holds is shown. Each reach has a
 * line for a hero who was in at least two of its affairs and saw them mended, one for a hero who saw one break, and one for a hero who only went.
 */
export const worldEchoes = String.raw`
// ---- The sect talks of the near reaches
>> rumours_13 | wo_r1 | world:mended@1>=2 | The terraces drink your health in barley wine this year, and the tithe-clerk pretends the singing is coming from the next valley.
>> rumours_13 | wo_r1 | world:broke@1>=1 | Word from the terraces is poor: empty houses below the third wall, and a tithe-clerk who has stopped meeting anyone’s eye.
>> rumours_13 | wo_r1 | world:voices@1>=2 | The terraces have your name now, as one more thing the sect sends below the third wall. They have not decided what it means.
>> rumours_14 | wo_r2 | world:mended@2>=2 | Pilgrims on the Eastern Path leave a lamp at the Third Landing in your name, and the hostel-keeper no longer asks for the floor.
>> rumours_14 | wo_r2 | world:broke@2>=1 | A party did not come down from the shoulder this winter, and the pilgrims say the path has a long memory and a short temper.
>> rumours_14 | wo_r2 | world:voices@2>=2 | The pilgrims of the Eastern Peak have heard you walked their landings. They are waiting, politely, to learn what for.
>> rumours_15 | wo_r3 | world:mended@3>=2 | The cutters are paid, or the lime-burners are breathing, or both, and the Law Hall’s copy-room has been asked for a great many dates.
>> rumours_15 | wo_r3 | world:broke@3>=1 | The quarry country is losing its families to the valley, a house a week, and no one in the sect is asked about it.
>> rumours_15 | wo_r3 | world:voices@3>=2 | The carters on the quarry road tell your name with their complaints, as a seasoning, and say nothing of what it was for.
>> rumours_16 | wo_r4 | world:mended@4>=2 | The lesser sects across the Gap write to one another now, and to you by way of the boy at the bridge-head.
>> rumours_16 | wo_r4 | world:broke@4>=1 | Two sects across the Gap have split and a third has been sold. The bridge sings low, and the keepers do not sleep.
>> rumours_16 | wo_r4 | world:voices@4>=2 | Across the Gap they say a stranger was seen at their contests and their successions, and left nothing but a question.
// ---- The books carry the news of the far reaches
>> b3_close3 | wo_r5 | world:mended@5>=2 | On the river road the clerks have started to read the margins of the registers, and do not mention who taught them.
>> b3_close3 | wo_r5 | world:broke@5>=1 | On the river road a hundred families walk unwritten, and the Censors’ new auditors call it order.
>> b3_close3 | wo_r5 | world:voices@5>=2 | The river provinces have heard of a stranger who reads their books to the end, and keep their ledgers a little straighter.
>> hub_b4_b | wo_r6 | world:mended@6>=2 | The Salt Coast keeps your name on a Tidewall course, and a dried leaf pressed in the lamp’s log.
>> hub_b4_b | wo_r6 | world:broke@6>=1 | The Salt Coast is quieter than it was. The cove’s roofs are down, and nobody sings at the pans.
>> hub_b4_b | wo_r6 | world:voices@6>=2 | The Salt Coast has heard of you. It remembers the tide and what it brings, and so holds its opinion.
>> hub_b5_b | wo_r7 | world:mended@7>=2 | On the grass the clans tie a knot of wool in your name, and a Listener has taught a girl to hear further than the Stones.
>> hub_b5_b | wo_r7 | world:broke@7>=1 | Blood was shed on the steppe this winter, and half a herd was lost on the snow. The Listeners say the wind is angry, and has said so.
>> hub_b5_b | wo_r7 | world:voices@7>=2 | The Listeners say the wind carries a stranger’s name through the clans, and has not yet said whether it is kind.
>> tiers_close | wo_r8 | world:mended@8>=2 | The Glass Sea’s skiffs sail under a charter, and the Mirage City sells its streets by the hour. A girl on a roof calls it yours.
>> tiers_close | wo_r8 | world:broke@8>=1 | The Glass Sea has had a hard year: a dry cistern, a burned roll. The wrights say the glass remembers.
>> tiers_close | wo_r8 | world:voices@8>=2 | The shore of the Glass Sea has chalked your name on a wreck-yard wall, small, among the others.
>> descent_entry | wo_r9 | world:mended@9>=2 | On the Stair the bowls stand on the ground and the lift runs on a new chain, and the wardens bow to the first step.
>> descent_entry | wo_r9 | world:broke@9>=1 | The Stair has raised its tithe and shut its lift, and the lower tiers are walked by fewer each year.
>> descent_entry | wo_r9 | world:voices@9>=2 | The Nine Tiers have heard a stranger read the first step. Some of the wardens now climb by the edge.
>> hub_b6 | wo_r10 | world:mended@10>=2 | At the foot of the road the lamps are lit already, and the tea-woman has set out more cups than she has guests.
>> hub_b6 | wo_r10 | world:broke@10>=1 | At the foot of the road the hearths are cold, and the tea-woman has stopped setting out cups.
>> hub_b6 | wo_r10 | world:voices@10>=2 | At the foot of the road the camp has kept a lamp lit for you, not sure it would be needed.
// ---- The Last Sealing asks who is listening
>> lastseal_a | wo_ls | wo_gathered & count:wo_gift_>=5 | Beyond the hundred faint voices are living ones, small, climbing the stair behind you.
>> lastseal_a | wo_ls | world:voices>=1 | Under the hundred faint voices, very far off, you hear a few living ones.
>> lastseal_choice | wo_lc | world:hinges>=5 | Behind you the road is full of lamps. Things have turned on you in too many places for the abyss not to have heard.
>> lastseal_choice | wo_lc | world:voices>=16 | Behind you the road is full of lamps. You sat beside a great many of the people who carry them.
>> lastseal_choice | wo_lc | world:weight>=12 | Behind you, on the road, a few lamps still burn. They are people whose troubles you put a hand to.
>> lastseal_choice | wo_lc | world:voices>=1 | Behind you, very far down the road, a lamp or two still burns, for something you saw.
// ---- An affair, remembered by name
>> reserve_entry | wo_aud | wo_out_r5_audit_mended | A Censor’s clerk in the corridor is reading the margins of a register. He looks up and says nothing, and goes back to it.
>> reserve_entry | wo_aud | wo_out_r5_audit_broke | A Censor’s clerk in the corridor is striking a name with a very light stroke. He does not look up.
`;
