import type { Scene } from "@/engine/types";

/**
 * Side Path: The Pavilion of Stone Wagers. Opened from the herb market, where the clatter of
 * stone tiles leads behind the stalls to a house that takes bets it never writes down. A
 * disciple owes the house a debt, and the player decides how to deal with the debt, with
 * the tables and with the wardens. Every path rejoins at the market’s report, where the
 * Elder hears what the player did at the tables.
 */
export const pavilionScenes: Scene[] = [
  {
    id: "pavilion_gate",
    title: "Side Path: The Pavilion of Stone Wagers",
    paragraphs: [
      "Behind the herb stalls, where the lane bends toward the cliff, a painted board hangs from two iron hooks: Tang’s House of Stone Wagers. No Ledgers Asked. The clatter you followed comes from a long open pavilion built out over the ravine, its eaves hung with paper lanterns burned black by years of lamp oil and argument.",
      "Under the eaves a dozen disciples crowd round three low tables. Carved stone tiles knock across the wood, and each one is called before it falls. Coins and spirit pebbles pile up on painted squares. At the far table a broad man in a plum-coloured coat watches everything, his fingers drumming the rail. Someone calls him Old Tang. Nobody calls him anything else twice.",
      "Opposite him sits a young outer disciple with his shoulders drawn in. He has the look of someone who has already lost more than he can count, and is counting anyway.",
    ],
    choices: [
      {
        id: "watch_the_tiles",
        label: "Stand at the rail and watch how the tiles fall before you put a single coin down.",
        tone: "inquiry",
        next: "pavilion_table",
      },
      {
        id: "sit_at_the_table",
        label: "Sit down, set your own coin on a square, and play the tiles as they fall.",
        tone: "truth",
        next: "pavilion_table",
        effects: [{ kind: "addWealth", amount: -1 }, { kind: "setFlag", flag: "played_openly" }, { kind: "addStat", stat: "insight", amount: 2 }],
        requires: [{ kind: "wealth", min: 1 }],
        lockedHint: "You need 1 spirit stone.",
      },
      {
        id: "slip_a_loaded_tile",
        label: "Palm a weighted tile from the box while the house calls the odds, and keep it in your sleeve.",
        tone: "deceit",
        next: "pavilion_cheat",
        effects: [{ kind: "setFlag", flag: "cheated_at_tiles" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "challenge_the_house",
        label: "Stride up to Old Tang and tell him his tiles are rigged, loud enough for the rail to hear.",
        tone: "force",
        next: "pavilion_challenge",
      },
      {
        id: "walk_back_to_lane",
        label: "Leave the pavilion alone and walk back to the lane before the lanterns are lit.",
        tone: "quiet",
        next: "market_return",
      },
    ],
  },
  {
    id: "pavilion_table",
    title: "The Tiles",
    paragraphs: [
      "The tiles stop. Old Tang leans forward, lifts one carved stone between finger and thumb, and turns it to the lantern light. ‘Stone of the Crane, nine points,’ he says. ‘Nine is a good number for a boy with debts.’",
      "The boy’s name is Bo Lan. He is sixteen. He lost three spirit stones at these tables last month to buy his mother a root for her fever, and he has been losing them back ever since. Tang has written the sum on the wall in chalk, in a neat hand, where anyone can read it.",
      "Tang does not raise his voice. ‘Three stones,’ he says, ‘or the boy’s hands, which I am told are good at carrying things. Choose, Bo Lan. You have until the next tile falls.’",
    ],
    choices: [
      {
        id: "bet_a_coin",
        label: "Lay a coin on the next square and let the tile decide, the way the lane decides everything.",
        tone: "quiet",
        next: "pavilion_bo_lan", effects: [{ kind: "addWealth", amount: -1 }], requires: [{ kind: "wealth", min: 1 }], lockedHint: "You need 1 spirit stone.",
      },
      {
        id: "cover_the_boy",
        label: "Put your coin over the boy’s bet and tell Tang the debt is on your account now.",
        tone: "mercy",
        next: "pavilion_bo_lan",
        effects: [{ kind: "addWealth", amount: -3 }, { kind: "setFlag", flag: "covered_bo_lan_bet" }, { kind: "addStat", stat: "karma", amount: 2 }],
        requires: [{ kind: "wealth", min: 3 }],
        lockedHint: "You need 3 spirit stones.",
      },
      {
        id: "count_the_tiles",
        label: "Count the carved points on every tile in the box, so you know which ones the house favours.",
        tone: "inquiry",
        next: "pavilion_bo_lan",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "press_tang_on_the_debt",
        label: "Tell Tang that a house which chalks a child’s debt on its wall deserves to have the wall broken.",
        tone: "force",
        next: "pavilion_challenge",
      },
    ],
  },
  {
    id: "pavilion_cheat",
    title: "The Loaded Tile",
    paragraphs: [
      "The weighted tile sits warm in your sleeve. You feel it knock against your wrist each time you lift your arm, a small stone heartbeat that no one at the table has noticed. The next roll lands on the square you wanted, and the house pays out with a grumble.",
      "Old Tang does not look at you. He looks at the boy, then at the box, then at you, slowly, the way a man reads a ledger he already knows is wrong. ‘The Crane stone,’ he says quietly, ‘has never once fallen where a player wanted it. Where did you learn to make it do that?’",
    ],
    choices: [
      {
        id: "keep_the_win",
        label: "Smile, sweep the winnings into your sleeve, and say nothing more about the stone.",
        tone: "deceit",
        next: "pavilion_bo_lan",
        effects: [{ kind: "setFlag", flag: "kept_the_win" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "return_the_tile",
        label: "Take the loaded tile out of your sleeve, set it on the table, and say where it came from.",
        tone: "truth",
        next: "pavilion_bo_lan",
        effects: [{ kind: "setFlag", flag: "confessed_loaded_tile" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "blame_the_boy",
        label: "Tell Tang the boy must have swapped the tiles while the lanterns were dim.",
        tone: "deceit",
        next: "pavilion_bo_lan",
        effects: [{ kind: "setFlag", flag: "blamed_bo_lan" }, { kind: "addStat", stat: "karma", amount: -6 }],
      },
      {
        id: "walk_out_of_the_pavilion",
        label: "Put the tile back in the box, stand up slowly, and walk out into the lane.",
        tone: "quiet",
        next: "market_return",
      },
    ],
  },
  {
    id: "pavilion_challenge",
    title: "The Challenge at the Rail",
    paragraphs: [
      "The rail creaks as you put your weight on it. Forty disciples stop talking at once, and the only sound left is the wind moving through the lanterns above the ravine. Old Tang rises. He is taller than you thought, and two bruisers at his shoulders have been waiting for a reason.",
      "‘You have an opinion about my tiles,’ he says. ‘Tell me the opinion, and then tell me whether you can afford to be right about it.’ Behind him, Bo Lan has gone pale, and he is shaking his head at you as if to say that you have made it worse.",
    ],
    choices: [
      {
        id: "break_the_table",
        label: "Lift the table by its edge and tip it over, so the tiles scatter across the boards.",
        tone: "force",
        next: "pavilion_wardens",
        effects: [{ kind: "setFlag", flag: "broke_tang_table" }, { kind: "addStat", stat: "karma", amount: -5 }],
      },
      {
        id: "offer_terms",
        label: "Offer Tang one honest round with your own stones, and the boy’s debt on the line.",
        tone: "truth",
        next: "pavilion_bo_lan",
        effects: [{ kind: "setFlag", flag: "offered_terms" }],
      },
      {
        id: "kneel_for_bo_lan",
        label: "Kneel on the boards in front of the rail and ask Tang to take your word for the boy’s debt.",
        tone: "mercy",
        next: "pavilion_bo_lan",
        effects: [{ kind: "setFlag", flag: "knelt_for_bo_lan" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "claim_word_sent",
        label: "Tell Tang, in the hearing of the whole pavilion, that you have already sent word to the wardens.",
        tone: "deceit",
        next: "pavilion_wardens",
        effects: [{ kind: "setFlag", flag: "called_wardens" }],
      },
    ],
  },
  {
    id: "pavilion_bo_lan",
    title: "Bo Lan’s Debt",
    paragraphs: [
      "Bo Lan tells it in a rush, the way children tell things they have been told to keep quiet. His mother has a fever the outer infirmary cannot break. The root that might break it costs three stones. He came to the tables to find them and found Tang’s chalk on the wall instead.",
      "‘I will work it off,’ he says. ‘I can carry the lamp oil up the stair, and sweep the ravine path, and when my mother is well I will do anything Old Tang asks.’ He looks at his own hands as he says it, as if they belonged to someone who had already been sold.",
    ],
    choices: [
      {
        id: "pay_the_debt",
        label: "Count three stones onto the table in front of Tang, and tell the boy his mother’s root is paid for.",
        tone: "mercy",
        next: "pavilion_debt",
        effects: [{ kind: "addWealth", amount: -3 }, { kind: "setFlag", flag: "paid_bo_lan" }, { kind: "addStat", stat: "karma", amount: 4 }],
        requires: [{ kind: "wealth", min: 3 }],
        lockedHint: "You need 3 spirit stones.",
      },
      {
        id: "ask_about_his_mother",
        label: "Ask Bo Lan what the infirmary has tried and what the root is called, and write it down.",
        tone: "inquiry",
        next: "pavilion_debt",
        effects: [{ kind: "setFlag", flag: "asked_about_mother" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "take_his_story_to_wardens",
        label: "Tell Bo Lan you will take his story to the wardens, chalk ledger and all.",
        tone: "truth",
        next: "pavilion_wardens",
        effects: [{ kind: "setFlag", flag: "reported_the_house" }],
      },
      {
        id: "help_him_run",
        label: "Slip the boy a spare talisman and point him toward the ferry steps while Tang is counting.",
        tone: "deceit",
        next: "pavilion_debt",
        effects: [{ kind: "setFlag", flag: "helped_bo_lan_run" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "pavilion_debt",
    title: "The Ledger Behind the Smile",
    paragraphs: [
      "Old Tang lets the silence stretch. Then he laughs, a short sound with no warmth in it. ‘No ledgers asked,’ he says, tapping the board above his head. ‘That is the sign. It does not say no memory, and I have a good memory for debts.’ He wipes the chalk from the wall with the flat of his hand, and the boy’s name goes with it.",
      "‘The house is square with you now, or square with nobody,’ he says. ‘Take your winnings and your conscience back down the lane. The tables will still be here tomorrow, and so will the boy.’",
    ],
    choices: [
      {
        id: "walk_out_with_the_boy",
        label: "Walk Bo Lan out to the lane, one hand on his shoulder, and promise to see him to the infirmary.",
        tone: "mercy",
        next: "market_return",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "sit_and_watch_tang",
        label: "Stay on the stool and watch how Tang counts the stones into his sleeve, so you can remember the rhythm.",
        tone: "inquiry",
        next: "market_return",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "leave_quietly",
        label: "Thank the house with a short bow, take nothing else, and go back down the lane.",
        tone: "quiet",
        next: "market_return",
      },
      {
        id: "bargain_with_tang",
        label: "Tell Tang the chalk will be back on his wall the day the wardens read his ledger.",
        tone: "force",
        next: "market_return",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
    ],
  },
  {
    id: "pavilion_wardens",
    title: "The Wardens at the Rail",
    paragraphs: [
      "Lanterns swing at the foot of the lane. Two wardens in dark-blue sleeves come up the steps with the dull efficiency of men who were told there was a fight at the tables. They take in the broken table, the scattered tiles and the disciples backing away from the rail, and then they look at you.",
      "Bo Lan stands behind you with the face of someone who expects to be punished for having been seen. Old Tang has already sat down again, his hands folded over his coat, very calm.",
    ],
    choices: [
      {
        id: "stand_before_the_wardens",
        label: "Step forward and tell the wardens exactly what happened at the tables, including your own part in it.",
        tone: "truth",
        next: "market_return",
        effects: [{ kind: "setFlag", flag: "faced_wardens" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "hide_behind_the_stalls",
        label: "Slip back through the lanterns and hide behind the stalls until the wardens have gone.",
        tone: "deceit",
        next: "market_return",
        effects: [{ kind: "setFlag", flag: "hid_from_wardens" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "point_at_tang",
        label: "Point at Old Tang and tell the wardens the chalk ledger on his wall is the proof they need.",
        tone: "truth",
        next: "market_return",
        effects: [{ kind: "setFlag", flag: "named_tang" }],
      },
      {
        id: "help_the_boy_run",
        label: "Push Bo Lan toward the lane steps and tell him to go before anyone asks his name.",
        tone: "mercy",
        next: "market_return",
        effects: [{ kind: "setFlag", flag: "helped_bo_lan_escape" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
];
