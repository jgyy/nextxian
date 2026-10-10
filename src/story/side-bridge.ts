import type { Scene } from "@/engine/types";

/**
 * Side Path: The Cloud Gap Bridge. Outer disciples cross a rope bridge over the gap below the Law
 * Hall to prove their steadiness, and a keeper counts every crossing. Opened from the summons, and
 * rejoins the tribunal’s approach.
 */
export const bridgeScenes: Scene[] = [
  {
    id: "bridge_head",
    title: "Side Path: The Cloud Gap Bridge",
    paragraphs: [
      "Behind the bell tower the ground falls away into a gap so deep that the mist fills it like milk in a bowl. A rope bridge crosses the gap, its hemp walls swaying slightly in the rising air. A sign at the near end reads: One thread for each name. Cross steadily, and do not look down until you are over the middle.",
      "Two dozen outer disciples stand in a line at the bridge head, waiting for their turn. Their faces are pale, and not one of them is talking.",
    ],
    choices: [
      { id: "test_first_rope", label: "Take hold of the first handrail, and test its strength before you put any weight on it.", tone: "quiet", next: "bridge_ropes" },
      { id: "walk_to_disciples", label: "Walk down the line of disciples and ask them why they are so quiet.", tone: "mercy", next: "bridge_disciples" },
      { id: "ask_keeper_bell", label: "Ask the old keeper with the bell at the bridge head how many have crossed today.", tone: "inquiry", next: "bridge_keeper" },
      { id: "race_across_now", label: "Push to the front of the line and step onto the bridge before anyone can stop you.", tone: "force", next: "bridge_race" },
    ],
  },
  {
    id: "bridge_ropes",
    title: "The Frayed Rail",
    paragraphs: [
      "The handrails are two hemp ropes, one old and grey, one new and yellow. Where they meet the posts, the old rope has been wound with fresh cord, and the knots are tied by hands that clearly did not want anyone to see the fraying beneath them. The bridge planks are sound, but the gap between them has been stuffed with dry moss.",
      "A hemp thread has been knotted to the old rope, and its end is wrapped round something small and hard.",
    ],
    choices: [
      { id: "untie_small_knot", label: "Untie the small knot and look at what is wrapped in the thread.", tone: "inquiry", next: "bridge_wind" },
      { id: "retie_loose_knot", label: "Retie the loose knots on the old rope so that the next crosser is safer.", tone: "mercy", next: "bridge_wind" },
      { id: "pull_rope_hard", label: "Pull the old rope as hard as you can, to see whether it will hold your weight.", tone: "force", next: "bridge_wind" },
      { id: "leave_rope_knots", label: "Leave the knots exactly as they are, and step back to let the wind settle.", tone: "quiet", next: "bridge_wind" },
    ],
  },
  {
    id: "bridge_wind",
    title: "The Wind From Below",
    paragraphs: [
      "A gust comes up out of the gap and makes the whole bridge sing, every rope and plank humming at once. The thread at your fingers snaps taut and then loosens, and the small thing it held rolls into your palm. It is a token of bronze, stamped with a disciple’s mark, warm from having been close to the mist.",
      "Along the rail, a dozen other knots are tied with the same thread, each with a small token caught in it, and the wind is slowly pulling them all toward the gap.",
    ],
    choices: [
      { id: "catch_tokens_on_rail", label: "Reach along the rail and catch the other tokens before the wind takes them.", tone: "mercy", next: "bridge_token" },
      { id: "read_token_mark", label: "Turn the bronze token over and read the mark stamped on its back.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "bridge_saw_token" }], next: "bridge_token" },
      { id: "pocket_warm_token", label: "Close your hand around the warm token and slip it into your sleeve.", tone: "deceit", next: "bridge_token" },
      { id: "let_tokens_go", label: "Let the tokens go, and watch the wind carry them out over the mist.", tone: "quiet", next: "bridge_token" },
    ],
  },
  {
    id: "bridge_token",
    title: "A Name Off the List",
    paragraphs: [
      "The mark on the token is a small crane with one wing raised. Beneath it, scratched in careless characters, is a name: Lu Ping. It is not a name you have heard in the sealing orders, the ledger, or the names read in the Law Hall. Someone has added a second line below it, in a smaller hand: Not counted, because he crossed the bridge alone.",
      "The wind drops for a moment, and the bridge goes still. In the silence you can hear the bell of the keeper ringing once at the far end, for someone who has just reached the other side.",
    ],
    choices: [
      { id: "say_lu_ping_aloud", label: "Say the name Lu Ping aloud, slowly, so the gap can hear it.", tone: "mercy", next: "bridge_cross" },
      { id: "ask_why_not_counted", label: "Ask who would have written that Lu Ping crossed alone, and why he was not counted.", tone: "inquiry", next: "bridge_cross" },
      { id: "keep_token_for_elder", label: "Put the token in your robe, and resolve to show it to the Elder herself.", tone: "truth", effects: [{ kind: "setFlag", flag: "carries_lu_ping_token" }], next: "bridge_cross" },
      { id: "hang_token_back", label: "Tie the token back onto the rail, where the next crosser will see it.", tone: "quiet", next: "bridge_cross" },
    ],
  },
  {
    id: "bridge_cross",
    title: "Over the Middle",
    paragraphs: [
      "You step out onto the planks and walk without stopping, one hand on the grey rope and the other held out for balance. The mist rises through the gaps and wraps around your ankles. Below, there is nothing but white, and the white seems to breathe in time with your steps.",
      "At the middle of the span, the bridge dips slightly under your weight. You feel the rope tighten on your palm, as though something on the far side has taken hold of it and is pulling you across.",
    ],
    choices: [
      { id: "keep_walking_steady", label: "Keep walking at the same steady pace, and do not look down at all.", tone: "quiet", next: "bridge_return" },
      { id: "look_down_middle", label: "Look down into the white, and try to see the bottom of the gap.", tone: "inquiry", next: "bridge_return" },
      { id: "shout_across_gap", label: "Shout across the gap to the keeper, to tell her you are almost there.", tone: "truth", next: "bridge_return" },
      { id: "hurry_across_bridge", label: "Hurry the last steps, so that the rope has no chance to pull you any further.", tone: "force", next: "bridge_return" },
    ],
  },
  {
    id: "bridge_disciples",
    title: "The Line of Disciples",
    paragraphs: [
      "The outer disciples are no older than sixteen, most of them, and they stand with their hands clenched in their sleeves. One of them, a thin boy with a bandage on his wrist, keeps stepping forward and then stepping back again. His name is Bo Tian. He tells you, when you ask, that he has been brought up the bridge three times and has not yet crossed it.",
      "“The masters say we must cross to prove we are not afraid,” he whispers. “But I am afraid. I cannot prove it.”",
    ],
    choices: [
      { id: "coach_bo_tian", label: "Stand beside Bo Tian and show him how to place his feet on the planks.", tone: "mercy", effects: [{ kind: "setFlag", flag: "bridge_helped_boy" }], next: "bridge_coach" },
      { id: "ask_bo_tian_fear", label: "Ask Bo Tian what exactly he is afraid of, the rope or the drop.", tone: "inquiry", next: "bridge_coach" },
      { id: "tell_bo_tian_masters_wrong", label: "Tell him that the masters who made him cross have never once crossed it themselves.", tone: "truth", next: "bridge_coach" },
      { id: "step_aside_from_boy", label: "Step aside and let the boy find his own courage, without anyone watching him.", tone: "quiet", next: "bridge_coach" },
    ],
  },
  {
    id: "bridge_coach",
    title: "Hands on the Rope",
    paragraphs: [
      "Bo Tian puts his good hand on the rope and grips it hard, so that his knuckles go white. You show him how to keep his weight low and his eyes on the next plank rather than the far end. He listens closely, nodding at every word, and then steps out onto the bridge with his heart visibly pounding in his throat.",
      "He manages six planks before his foot slips, and he catches himself with both hands on the rope. For a moment he hangs there, swaying, and every disciple in the line goes still.",
    ],
    choices: [
      { id: "reach_out_boy", label: "Reach out across the planks and hold his sleeve until he is steady again.", tone: "mercy", next: "bridge_halfway" },
      { id: "shout_instructions", label: "Shout the next step to him, one plank at a time, the way the instructors do.", tone: "force", next: "bridge_halfway" },
      { id: "call_for_keeper", label: "Call to the keeper at the bell, and ask her to ring for the wardens.", tone: "truth", next: "bridge_halfway" },
      { id: "wait_for_boy_move", label: "Stand very still on the planks and wait for Bo Tian to decide his next move.", tone: "quiet", next: "bridge_halfway" },
    ],
  },
  {
    id: "bridge_halfway",
    title: "Frozen at the Middle",
    paragraphs: [
      "Bo Tian freezes at the middle of the span, his back pressed against the grey rope. He cannot move forward and cannot move back. Tears run down his face, and he is saying something over and over, very quietly, that you cannot quite catch. Then you can. He is saying the names of his village, one after another, the way you might count stairs in the dark.",
      "Below the boy, the mist rises through the gap in soft, patient threads, and they curl around the planks as though they are listening.",
    ],
    choices: [
      { id: "sing_village_names", label: "Sing the tune from the village square, low and steady, so that the boy has something to follow.", tone: "mercy", next: "bridge_other_side" },
      { id: "ask_names_slowly", label: "Ask Bo Tian to say each village name slowly, and repeat it back to him correctly.", tone: "inquiry", next: "bridge_other_side" },
      { id: "cross_to_boy", label: "Cross the planks to him, carrying the weight of his fear as well as your own.", tone: "force", next: "bridge_other_side" },
      { id: "wait_with_boy", label: "Stay where you are and wait with him, breathing slowly, until the mist moves on.", tone: "quiet", next: "bridge_other_side" },
    ],
  },
  {
    id: "bridge_other_side",
    title: "The Far Side",
    paragraphs: [
      "Bo Tian reaches the far side at last, on his knees, clutching the post with both hands. The keeper rings her bell once for him, and the disciples on the near side let out a long breath they seem to have been holding for hours. Bo Tian looks up at you, his face wet and blotched, and tries to smile.",
      "“I counted the names,” he says. “I forgot the last one. I did not want to be the one who could not finish.”",
    ],
    choices: [
      { id: "finish_boy_names", label: "Tell him the last name, the one he forgot, and say it back to him until he has it.", tone: "mercy", next: "bridge_return" },
      { id: "ask_which_name_forgot", label: "Ask him which name he forgot, and whether he remembers where he first heard it.", tone: "inquiry", next: "bridge_return" },
      { id: "praise_boy_crossing", label: "Tell him plainly that he crossed the bridge, and that no master can take that from him.", tone: "truth", next: "bridge_return" },
      { id: "leave_boy_on_post", label: "Leave him sitting by the post with the keeper, and walk back toward the bridge head.", tone: "quiet", next: "bridge_return" },
    ],
  },
  {
    id: "bridge_keeper",
    title: "The Keeper and the Bell",
    paragraphs: [
      "The keeper at the bridge head is an old woman called Qu Ling, though everyone calls her Granny Qu. She is deaf, and she watches your mouth instead of listening to your words. A brass bell hangs from a cord at her side, and each time a disciple reaches either end of the bridge, she rings it once and makes a mark on a wooden tally board.",
      "When you lean closer, she taps the tally board with a knuckle and holds up a finger, then a second, then a third, as if she is counting the people who went over and did not come back.",
    ],
    choices: [
      { id: "ask_granny_tally", label: "Write the question on your palm and show it to her: how many have not come back?", tone: "inquiry", next: "bridge_count" },
      { id: "hold_granny_hand", label: "Take her dry hand gently, and let her feel the rhythm of your breath.", tone: "mercy", next: "bridge_count" },
      { id: "ask_granny_rule", label: "Show her the sign at the bridge head, and ask whether the rule still applies to the dead.", tone: "truth", next: "bridge_count" },
      { id: "walk_past_keeper", label: "Walk past the tally board without touching anything, and wait at the bridge head.", tone: "quiet", next: "bridge_count" },
    ],
  },
  {
    id: "bridge_count",
    title: "The Tally Board",
    paragraphs: [
      "The tally board is covered in marks, each one a short stroke, grouped in fives like the bars of a cell. Some of the groups are complete. Others have only four strokes, and beside them are small notches cut into the wood, as if someone meant to finish them later and never did.",
      "Granny Qu points to a group with four strokes, and then to the notch beside it, and nods once, very firmly.",
    ],
    choices: [
      { id: "count_the_notches", label: "Count the unfinished groups on the board, one notch at a time.", tone: "inquiry", next: "bridge_bell_rope" },
      { id: "tap_the_fourth_stroke", label: "Tap the fourth stroke in the group with your finger, and nod back to her.", tone: "mercy", next: "bridge_bell_rope" },
      { id: "cut_fifth_stroke", label: "Take her knife and cut the fifth stroke yourself, to finish a group that was left open.", tone: "force", next: "bridge_bell_rope" },
      { id: "look_beneath_bridge", label: "Ask her where the names of the notches are kept, and look over the edge where she points.", tone: "deceit", next: "bridge_under" },
    ],
  },
  {
    id: "bridge_under",
    title: "Names Under the Bridge",
    paragraphs: [
      "Beneath the bridge, where the rock juts out over the gap, someone has cut names into a ledge of stone. The ledge is narrow, and you can only reach it by lying flat with your arms over the edge. The names are carved neatly, one below another, with a date beside each. Most of them you have heard before: fourteen names read in the Law Hall, in the same order.",
      "The fifteenth line has been struck through, and beside it, in a smaller and newer hand, is written: Lu Ping. Not counted. He crossed alone.",
    ],
    choices: [
      { id: "trace_lu_ping_line", label: "Trace the struck line with one finger, and read the new name aloud to the gap.", tone: "mercy", next: "bridge_names" },
      { id: "copy_ledge_names", label: "Make a careful rubbing of the names on paper, so that they can be read in daylight.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "bridge_under_names" }], next: "bridge_names" },
      { id: "chip_away_struck_line", label: "Chip away the strike through the name, so that the stone shows the name clearly.", tone: "force", next: "bridge_names" },
      { id: "climb_back_up", label: "Climb back up over the edge without taking anything from the ledge.", tone: "quiet", next: "bridge_names" },
    ],
  },
  {
    id: "bridge_names",
    title: "A Rubbing in the Dark",
    paragraphs: [
      "You climb back up over the rim of the ledge, your hands raw from the rock. Granny Qu is already waiting at the top with her bell, and she looks at your palms without asking what you have found. She rings the bell once, low and deep, and the sound goes down into the gap and comes back a moment later, very faint, as if someone below has answered it.",
      "Whatever the ledge holds, it is yours now to remember or to forget.",
    ],
    choices: [
      { id: "remember_ledge_names", label: "Say each name on the ledge to yourself, so that none of them can be lost on the way back.", tone: "mercy", next: "bridge_return" },
      { id: "carry_rubbing_up", label: "Carry the rubbing up to the Law Hall, and show it to the Elder herself.", tone: "truth", next: "bridge_return" },
      { id: "burn_rubbing_quiet", label: "Hold the rubbing over the bell’s small lamp, and let it curl into ash without a word.", tone: "deceit", next: "bridge_return" },
      { id: "ring_bell_for_lu_ping", label: "Take the bell cord from Granny Qu and ring it once for Lu Ping, as she would for anyone.", tone: "quiet", next: "bridge_return" },
    ],
  },
  {
    id: "bridge_bell_rope",
    title: "The Bell Rope",
    paragraphs: [
      "Granny Qu takes your hand and places it on the bell cord. She guides your fingers into the loop and nods at you to pull. The cord is worn smooth by a great many hands, and the bell above swings with a sound that seems too big for the little post it hangs from.",
      "She holds up three fingers, then points at the mist below the bridge. You understand that she means the dead, and that the bell is for them.",
    ],
    choices: [
      { id: "ring_for_dead", label: "Ring the bell three times, slowly, once for each of the dead she has counted.", tone: "mercy", next: "bridge_leave" },
      { id: "ask_her_who_counted", label: "Ask her who taught her to count the dead, and whether anyone ever taught her to stop.", tone: "inquiry", next: "bridge_leave" },
      { id: "ring_bell_loud", label: "Ring the bell as loudly as you can, so that the whole Law Hall must hear it.", tone: "force", next: "bridge_leave" },
      { id: "let_go_of_cord", label: "Let go of the cord before the bell has finished swinging, and step back from the post.", tone: "quiet", next: "bridge_leave" },
    ],
  },
  {
    id: "bridge_leave",
    title: "Leaving the Keeper",
    paragraphs: [
      "Granny Qu watches you turn to leave, and she lifts her hand in a small, careful wave. It is the wave of someone who has said goodbye to many disciples and has never been sure whether any of them were really leaving. The tally board behind her is full of marks, and the mist below the bridge is slowly thinning as the sun climbs.",
      "The path back to the Law Hall runs past the bell tower, and the bell tower has been silent for days.",
    ],
    choices: [
      { id: "wave_back_granny", label: "Wave back to her, the same way, and keep waving until she turns away.", tone: "mercy", next: "bridge_return" },
      { id: "ask_keeper_the_way", label: "Ask her, by writing it on your palm, whether the path to the tribunal is clear.", tone: "inquiry", next: "bridge_return" },
      { id: "hurry_past_tower", label: "Hurry past the bell tower without looking up at its silent bell.", tone: "force", next: "bridge_return" },
      { id: "walk_quietly_away", label: "Walk away down the path in silence, the way you came.", tone: "quiet", next: "bridge_return" },
    ],
  },
  {
    id: "bridge_race",
    title: "The Race Across",
    paragraphs: [
      "The disciples at the front of the line are racing. They run out onto the bridge, two at a time, and the planks bounce and roll under their feet. The first pair have reached the far side before the bridge has stopped swinging. The keeper rings her bell for them, and the crowd cheers as if they have won a tournament.",
      "A tall disciple in red cord steps out from the crowd and fixes his eyes on you. “Outsider,” he says loudly, “the Law says you cannot be trusted on a rope. Prove it. Race me across.”",
    ],
    choices: [
      { id: "accept_race", label: "Accept the challenge, and step onto the bridge beside him without waiting for the signal.", tone: "force", next: "bridge_challenge" },
      { id: "decline_race_quietly", label: "Decline the race quietly, and say you would rather cross at your own pace.", tone: "quiet", next: "bridge_challenge" },
      { id: "ask_his_name", label: "Ask him his name before you agree to anything, and tell him you will remember it.", tone: "inquiry", next: "bridge_challenge" },
      { id: "offer_race_help", label: "Offer to hold the other end of his rope, so that you both cross together.", tone: "mercy", next: "bridge_challenge" },
    ],
  },
  {
    id: "bridge_challenge",
    title: "Tang Hao’s Challenge",
    paragraphs: [
      "His name is Tang Hao, and he has been crossing the bridge since he was twelve. He is proud, and his pride is the only steady thing about him. He sets his feet on the planks and begins to run, and you keep pace with him, the rope bouncing beneath your palms.",
      "Halfway across, a plank cracks under his heel. He staggers, arms flung wide, and the mist below rises to meet him like the open mouth of a well.",
    ],
    choices: [
      { id: "lunge_for_tang_hao", label: "Lunge across the gap and grab his wrist before he goes over the rail.", tone: "mercy", effects: [{ kind: "setFlag", flag: "bridge_caught_fall" }], next: "bridge_fall" },
      { id: "call_warning_loud", label: "Shout a warning across the planks, so that he knows which one will break next.", tone: "truth", next: "bridge_fall" },
      { id: "keep_running_past", label: "Keep running and let him find his own footing, as he would want.", tone: "force", next: "bridge_fall" },
      { id: "stop_and_wait_tang", label: "Stop dead on the planks and wait, very still, for him to recover or fall.", tone: "quiet", next: "bridge_fall" },
    ],
  },
  {
    id: "bridge_fall",
    title: "A Hand on the Rope",
    paragraphs: [
      "Tang Hao’s fingers find the rope and hold on, white-knuckled, as his feet swing free over the mist. He is heavier than he looks. Your arms burn and the rope bites into your palms, but the bridge holds, and slowly, one hand over the other, he hauls himself back onto the planks.",
      "He lies face down on the wood for a long moment, breathing hard. When he finally lifts his head, the pride is gone from his face, and what is left looks younger and much more afraid.",
    ],
    choices: [
      { id: "help_tang_up", label: "Help him to his knees, and steady him until he can stand without swaying.", tone: "mercy", next: "bridge_thanks" },
      { id: "ask_tang_what_happened", label: "Ask him what he saw in the mist when his foot went through the plank.", tone: "inquiry", next: "bridge_thanks" },
      { id: "scold_tang_hao", label: "Tell him that his pride nearly killed him, and that the Law does not reward reckless crossings.", tone: "truth", next: "bridge_thanks" },
      { id: "leave_tang_on_planks", label: "Let him lie on the planks a little longer, and walk on to the far side without speaking.", tone: "quiet", next: "bridge_thanks" },
    ],
  },
  {
    id: "bridge_thanks",
    title: "What Tang Hao Owes",
    paragraphs: [
      "Tang Hao sits on the far side with his back to a post and his hands wrapped around a bowl of water the keeper has brought him. He does not look at you for a while. Then he says, in a rough voice, “The Law told us the outsider was a thief. It did not say you would catch a falling disciple with your bare hands.”",
      "“I will not forget it,” he says. “Even if the masters tell me to.”",
    ],
    choices: [
      { id: "tell_tang_name_forget", label: "Tell him that a name worth remembering is one you were given by someone who risked for you.", tone: "mercy", next: "bridge_return" },
      { id: "ask_tang_masters_orders", label: "Ask him which masters told the disciples that the outsider could not be trusted.", tone: "inquiry", next: "bridge_return" },
      { id: "tell_tang_truth_law", label: "Tell him the Law has been lying about the bridge, the names, and the stones for fifteen years.", tone: "truth", next: "bridge_return" },
      { id: "nod_and_walk_on", label: "Nod to him once, and walk on toward the bell tower without waiting for an answer.", tone: "quiet", next: "bridge_return" },
    ],
  },
  {
    id: "bridge_return",
    title: "Back Toward the Tribunal",
    paragraphs: [
      "The path from the bridge head climbs past the bell tower and into the courtyard of the Law Hall, where the disciples are already gathering for the tribunal. The bell still hangs silent above them, its clapper wrapped in grey cloth. The murmur of the crowd rises and falls like wind through reeds.",
      "Somewhere in the crowd, a voice is counting names under its breath, and the names are not the ones the masters have been reading.",
    ],
    interjections: [
      {
        when: [{ kind: "flag", flag: "bridge_helped_boy" }],
        line: "The boy crossed the middle of the span because you walked beside him. I heard the bridge bell ring for him from the Law Hall, and it was not a sound I expected to hear this week.",
      },
    ],
    choices: [
      { id: "report_bridge_to_jade_eye", label: "Tell the jade-eye what the bridge held, the tokens, the names, and the disciples who crossed.", tone: "truth", npcScenario: "REPORT_BRIDGE", next: "tribunal_summons" },
      { id: "keep_bridge_secret", label: "Say nothing to the mirror about the bridge, and carry its tokens quietly in your sleeve.", tone: "deceit", next: "tribunal_summons" },
      { id: "join_the_crowd_quiet", label: "Join the back of the crowd and stand silently until the tribunal begins.", tone: "quiet", next: "tribunal_summons" },
      { id: "count_names_with_crowd", label: "Begin counting the names under your breath, alongside the voice in the crowd.", tone: "mercy", next: "tribunal_summons" },
    ],
  },
];
