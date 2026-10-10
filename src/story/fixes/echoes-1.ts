/**
 * Echoes for Book One: paragraphs added to later scenes so that earlier decisions show up again. Each line is
 * `>> scene | group | conditions | text`. Lines sharing a group are alternatives, and only the first that holds shows.
 */
export const echoesOne = String.raw`
// ---- Chapter One and its side paths
>> mission | gate_gift | gifted_herb | The herb you sent in with the gate disciple stands in a clay cup at the corner of her desk, steeping. She does not mention it. She does not push it away either.
>> abyss_entry | - | knows_gu_name & !struck_gu | You had his name from the gate disciple, and you say it first. Gu Hanzhen flinches as though the mountain itself had told you.
>> mission | gate_gift | bribed_gate | At the door a warden mutters that the gate disciple has a new silver tassel on his umbrella. Elder Su does not look up from her ledger, but her pen stops moving.
>> archive_ash_chute_2 | - | saw_altar | You have seen it before: you memorised that circle on the altar’s cracked base, stroke for stroke.
>> sutra_door | - | used_demon_qi | The mist at the threshold turns red a little sooner where your hand passes. It has tasted your qi before, on the altar in the memorial.
>> sutra_hall_3 | - | hid_scroll | The Heavenly Scroll you hid in your sleeve at the memorial stirs against your arm whenever a page of the sutra turns, like one animal scenting another.
>> archive_report | - | dropped_scroll | The wardens found the Heavenly Scroll where you dropped it and set it back on its shelf. The dust on it has been wiped in one place, the width of a thumb.
>> archive_stacks_2 | - | read_scroll | The two lines you read aloud in the memorial come back to you here, among the drawers, and you realise they were the first two names of a list.
>> archive_gate_2 | - | fought_warden | Ren Qiao studies your hands before he studies your face. A warden’s lantern was put out in the memorial two nights ago, he says, and the warden still has the bruise to show for it.
>> abyss_entry | arrive | accepted_mission | You took the Elder’s task as she gave it, with nothing asked for, and Gu notices the grey order ribbon at your belt before he notices your face.
>> abyss_entry | arrive | volunteered & !accepted_mission | You told the Elder you would bring him back alone, and the wardens’ absence on the ledge proves she believed you. Gu looks behind you for a second pair of boots.
>> abyss_entry | carry | asked_for_market_leave | The frostleaf from the herb market is still damp in your pack, and its pale blue smell is the only clean thing on the ledge.
>> abyss_entry | carry | visited_village & !asked_for_market_leave | You come to the ledge with the smell of woodsmoke and rice still on your clothes. Gu catches it, and his face changes before he knows why.
>> village_nightfall | - | saw_gu_letter_name | You saw the name he wrote on the outside of the letter before it went into the ash, and you will not forget which name it was.
>> village_return | - | heard_levy | Every household gives one child when the jade must be fed. You carry that sentence up the steps like a stone in a boot.
>> village_return | - | told_village_of_mengjiao | You told the village the girl with the comb was the Elder’s sister. The news will reach the Law Hall by evening, carried by someone who did not mean to carry it.
>> abyss_entry | carry | took_cord | The red cord on your wrist has gone dark with mist. Gu looks at it, then at you, and says nothing, which is how his mother says everything.
>> sutra_gu_cell_3 | - | took_pebble | The pebble with the red thread weighs more in your sleeve than a pebble should. Gu’s eyes go to it once and away, as though it were an old wound.
>> sutra_gu_cell_2 | - | took_gu_letter | You carry his letter to his mother, unsent, in the pocket of your robe. His hand goes to his own sleeve as if checking that it is still not there.
>> village_return | - | took_copybook | The old schoolmaster’s copybook sits against your ribs. The last line on the last page is the one you keep rereading with your thumb.
>> pavilion_table | - | played_openly | You played the tiles as they fell and lost twice, which is the only way to win the room’s respect.
>> pavilion_debt | - | asked_about_mother | Bo Lan’s mother has a fever the outer infirmary cannot break. You asked the name of the root, and he told it to you as if it were a prayer.
>> healer_antidote | - | knows_calm_dust | You asked where the calm dust comes from, and Master Yao answered. The answer lies under your tongue like a coin you cannot spend.
>> healer_girl | - | hid_girl_from_wardens | The sheet you drew over the girl still smells of bitter leaves. She breathes through it very quietly.
>> healer_return | - | took_pei_token | Pei Lan’s token is folded into your robe with its single name facing inward. You carry it as if it might wake.
>> healer_return | - | found_elders_dose_note | The dates on the Elder’s note repeat in your head: twice a month, for fifteen years. You cannot make them mean anything kind.
>> ending_exile | - | refused_mission | The register records the word you said to the Elder, and the clerk who copies it leaves a small gap before it, the way people do before a name.
>> ending_fallen | grasp | fled_with_jade | You took the jade at the foot of the Law Hall and ran before anyone could name what you had done.
>> ending_fallen | grasp | seized_jade | You seized the jade in front of her at the judgment, and the Hall was too slow to stop you.
>> jade_eye_tablets_2 | - | honored_ancestors | On your first morning you knelt before these tablets, and she noticed. She does not say so now. She only looks at the one you knelt before longest.
>> shrine_return | shrine_a | heard_shen_story | Shen told you what Mengjiao was like before the Law Hall took her: a girl who talked to lamps.
>> shrine_return | shrine_a | read_shrine_carving | You read the worn carving aloud, one stroke at a time, and the shrine leaned closer.
>> shrine_return | shrine_a | copied_shrine_words | Both lines of the lintel are copied on the back of your Index card, word for word.
>> shrine_return | shrine_b | heard_sealing_from_laundry | Shen told you what the laundry women heard on the Sealing Night. You keep it behind your teeth.
>> shrine_return | shrine_b | took_shaving | One of the cedar shavings from the carver’s floor is folded into your sleeve. It still smells of the knife.
>> sutra_door | - | told_ren_shrine | Ren Qiao is on the stair already, standing where someone stands who has been told what the shrine at this door is for.
>> quarry_return | - | quarry_heard_wages | Kang showed you the wage ledger. Eleven names on it were paid in jade, not coin, and none of them were paid twice.
`;
