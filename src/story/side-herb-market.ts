import type { Scene } from "@/engine/types";

/**
 * Side Path: The Herb Market. Opened from the Elder's mission when the player asks
 * for a night to prepare. The lane below the gate gathers rumours, and the player
 * decides what to carry back to the jade-eye before going down the abyss path.
 */
export const herbMarketScenes: Scene[] = [
  {
    id: "market_lane",
    title: "Side Path: The Herb Market",
    paragraphs: [
      "The steps below the gate lead down into a market the sect pretends not to have. Lantern-hung stalls cling to the cliff with ropes and nails. They sell dried moss, rain-bruised fruit, charms painted on yellow paper, and thin silver fish said to calm a restless qi. The air smells of ginger and wet stone. Nobody here wears grey robes, and nobody here lowers their voice when they say the name of the Law Hall.",
      "A stall at the end of the lane has a fan of frostleaf laid out on a cloth, each leaf the pale blue of an early morning. The woman behind it watches you with the open curiosity of someone who has heard the sect’s gossip before the sect has finished arguing about it. A painted board above her head reads: Hu, Herbs for Every Dao, Fair Weight.",
      "At the next stall a man is describing the Law Hall’s wardens in a loud voice. Someone laughs, and the laugh turns into a warning, and the crowd shifts in a way that suggests it has said all this before and will say it again tomorrow.",
    ],
    choices: [
      {
        id: "buy_frostleaf",
        label: "Buy a bundle of frostleaf with the coins you carry, and ask Madam Hu for a fair weight.",
        tone: "quiet",
        next: "market_seller",
        effects: [{ kind: "addWealth", amount: -3 }, { kind: "setFlag", flag: "bought_frostleaf" }, { kind: "addStat", stat: "qi", amount: 3 }],
        requires: [{ kind: "wealth", min: 3 }],
        lockedHint: "You need 3 spirit stones.",
      },
      {
        id: "ask_about_jade",
        label: "Ask the vendors whether anyone has been selling a stone that hums.",
        tone: "inquiry",
        next: "market_seller",
        effects: [{ kind: "setFlag", flag: "asked_market_jade" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "listen_to_crowd",
        label: "Stand at the edge of the crowd and listen to everything they are saying about the Law Hall.",
        tone: "inquiry",
        next: "market_rumors",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "barter_talisman",
        label: "Trade a spare charm for a talisman of plain yellow paper, and do not ask what it does.",
        tone: "quiet",
        next: "market_seller",
        effects: [{ kind: "setFlag", flag: "bartered_talisman" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "follow_the_clatter",
        label: "Follow the clatter of stone tiles behind the stalls to a pavilion over the ravine.",
        tone: "inquiry",
        next: "pavilion_gate",
        effects: [{ kind: "setFlag", flag: "visited_pavilion" }],
      },
      {
        id: "follow_bitter_smell",
        label: "Follow the smell of bitter roots down the lane behind the stalls, to a low hall with its shutters open.",
        tone: "mercy",
        effects: [{ kind: "setFlag", flag: "visited_healer" }],
        next: "healer_gate",
      },
    ],
  },
  {
    id: "market_seller",
    title: "Madam Hu’s Stall",
    paragraphs: [
      "Madam Hu weighs the frostleaf on a brass scale with a patience that makes you feel rushed. Her fingers are stained green to the second knuckle. “Fair weight, fair coin,” she says. “The Law Hall taught me that, though it never paid me for the lesson.”",
      "She glances up the mountain toward the gate, and her voice drops. “You are the one they are sending down the abyss path. Everyone in the lane knows it already. They say the Elder watches through a mirror, that the mirror has been dull since the jade went missing, and that it still watches anyway.”",
      "A child runs past with a paper kite shaped like a crane. Madam Hu follows it with her eyes until it vanishes behind a curtain of drying cloth. “My daughter was a Law Hall disciple once,” she says, to no one in particular. “Fifteen years ago. She went down the mountain and never came back up.”",
    ],
    choices: [
      {
        id: "ask_about_elder_sister",
        label: "Ask her what the lane remembers of the Elder’s sister, Su Mengjiao.",
        tone: "inquiry",
        next: "market_rumors",
        effects: [{ kind: "setFlag", flag: "heard_of_mengjiao_market" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "pay_fair_price",
        label: "Pay the price she asks without haggling, and add a coin for the child’s kite.",
        tone: "mercy",
        next: "market_rumors",
        effects: [{ kind: "addWealth", amount: -4 }, { kind: "addStat", stat: "karma", amount: 2 }],
        requires: [{ kind: "wealth", min: 4 }],
        lockedHint: "You need 4 spirit stones.",
      },
      {
        id: "haggle_hard",
        label: "Haggle until she gives you the frostleaf for half of what it is worth.",
        tone: "force",
        next: "market_rumors",
        effects: [{ kind: "setFlag", flag: "haggled_hard" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "ask_for_wick",
        label: "Ask for a lamp wick that burns without smoke, the kind the lantern keepers use beneath the sutra door.",
        tone: "inquiry",
        next: "market_rumors",
        effects: [{ kind: "setFlag", flag: "bought_wick" }, { kind: "addStat", stat: "qi", amount: 1 }],
      },
    ],
  },
  {
    id: "market_rumors",
    title: "What the Lane Says",
    paragraphs: [
      "The rumours move through the lane faster than the wind. One says the jade was taken by a rival disciple who is now hiding in the abyss. Another says the Elder took it herself, to protect a sister who died fifteen years ago. A third, spoken by a boy who cannot be more than twelve, says the mist has begun to speak in Mengjiao’s voice and asks for the wardens by name.",
      "You notice that the stories disagree about almost everything except one detail. In every version, someone walks down the abyss path with a lantern and does not come back up alone.",
      "A vendor selling paper charms presses one into your hand and whispers that it will keep the mist from calling your name. Then he looks over your shoulder, sees nothing there, and laughs at himself for looking.",
    ],
    choices: [
      {
        id: "repeat_rumor_loudly",
        label: "Repeat the boy’s story about the mist calling wardens by name, loud enough for the next stall to hear.",
        tone: "force",
        next: "market_return",
        effects: [
          { kind: "setFlag", flag: "heard_market_rumor" },
          { kind: "setFlag", flag: "spread_rumor" },
          { kind: "addStat", stat: "karma", amount: -2 },
        ],
      },
      {
        id: "keep_rumor_close",
        label: "Keep the rumours to yourself, and remember the one detail they all agreed on.",
        tone: "quiet",
        next: "market_return",
        effects: [{ kind: "setFlag", flag: "heard_market_rumor" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "write_rumor_down",
        label: "Write the rumours on the back of a spare talisman, so that you will not forget them.",
        tone: "inquiry",
        next: "market_return",
        effects: [
          { kind: "setFlag", flag: "heard_market_rumor" },
          { kind: "setFlag", flag: "wrote_rumors" },
          { kind: "addStat", stat: "insight", amount: 1 },
        ],
      },
      {
        id: "walk_away_from_gossip",
        label: "Walk away from the gossip and climb back toward the gate before the lanterns are lit.",
        tone: "quiet",
        next: "market_return",
      },
    ],
  },
  {
    id: "market_return",
    title: "Back at the Abyss Gate",
    paragraphs: [
      "The market falls behind you as you climb. The gate is quiet, and the disciple who once guarded it has been replaced by a warden with a shorter temper. Your pack is heavier now, with frostleaf and charms and whatever else the lane has pressed into your hands.",
      "On the way up you felt the jade-eye watching the path. It was a cold pressure at the back of your neck, like a hand that has not yet decided to touch you. The mirror is still waiting in the Law Hall, and so is the Elder.",
      "At the head of the abyss path the mist rises to meet you. The mission has not changed, and the choice is still yours. Whatever you carry down the path, you will have to account for when you come back up.",
    ],
    choices: [
      {
        id: "report_rumor_to_jade_eye",
        label: "Tell the jade-eye what the market has been saying about the sect, and about the mist that calls wardens by name.",
        tone: "truth",
        next: "abyss_entry",
        requires: [{ kind: "flag", flag: "heard_market_rumor" }],
        lockedHint: "Requires something you heard in the lane and kept.",
        npcScenario: "REPORT_RUMOR",
        effects: [{ kind: "setFlag", flag: "accepted_mission" }],
      },
      {
        id: "report_supplies_to_jade_eye",
        label: "Tell the jade-eye that you bought frostleaf and charms, and that your supplies are in good order.",
        tone: "truth",
        next: "abyss_entry",
        npcScenario: "REPORT_SUPPLIES",
        effects: [{ kind: "setFlag", flag: "accepted_mission" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "hide_market_from_jade_eye",
        label: "Tell the jade-eye the market was empty, and that nothing below the gate concerns the sect.",
        tone: "deceit",
        next: "abyss_entry",
        npcScenario: "HIDE_MARKET",
        effects: [{ kind: "setFlag", flag: "accepted_mission" }],
      },
      {
        id: "go_down_in_silence",
        label: "Say nothing to the mirror and go down the abyss path with what you bought.",
        tone: "quiet",
        next: "abyss_entry",
        effects: [{ kind: "setFlag", flag: "accepted_mission" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "report_pavilion_to_jade_eye",
        label: "Tell the jade-eye about the stone tables behind the stalls, and what you did there.",
        tone: "truth",
        next: "abyss_entry",
        requires: [{ kind: "flag", flag: "visited_pavilion" }],
        lockedHint: "Requires that you have been to the stone tables behind the stalls.",
        npcScenario: "REPORT_WAGER",
      },
    ],
  },
];
