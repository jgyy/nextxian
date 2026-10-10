import type { Scene } from "@/engine/types";

/**
 * Side Path: The Lantern Stair. Opened from Gu Hanzhen’s cell. A stair below the
 * sutra door leads to an old lantern keeper who remembers Mengjiao. Everything
 * the player learns here changes what the Elder hears through the jade-eye later.
 */
export const lanternStairScenes: Scene[] = [
  {
    id: "lantern_stair",
    title: "Side Path: The Lantern Stair",
    paragraphs: [
      "The stair beneath the cell is narrower than the one above, and it was cut by hands that did not expect to be seen. Every few steps a bronze lamp hangs from a hook in the wall, and none of them is lit. Then, as you pass the third, a small blue flame wakes behind its glass, as though it had been waiting for someone to notice it.",
      "At the bottom of the stair, in a niche cut into the rock, an old woman sits among dozens of wicks and bottles of oil. Her grey hair is tied with a red cord, and her fingers are blackened to the wrist. She does not look up. \"The lamps are lit only for those who come down the wrong stair,\" she says. \"That is the rule. You are the wrong kind of visitor, and I have been expecting you since the bell rang.\"",
    ],
    choices: [
      {
        id: "ask_why_wrong_visitor",
        label: "Ask the old woman why the lamps are lit only for the wrong kind of visitor.",
        tone: "inquiry",
        next: "lantern_stair_2",
      },
      {
        id: "bow_to_keeper",
        label: "Bow to the old woman, and say that you mean her no harm.",
        tone: "mercy",
        next: "lantern_stair_2",
      },
      {
        id: "pocket_unlit_lamp",
        label: "Pocket one of the unlit lamps from the hooks while she is not looking.",
        tone: "deceit",
        next: "lantern_stair_2",
      },
      {
        id: "say_who_sent_you",
        label: "Step closer to the lamps and tell her exactly who sent you down here.",
        tone: "truth",
        next: "lantern_stair_2",
      },
    ],
  },
  {
    id: "lantern_stair_2",
    title: "Old Lin’s Blue Flame",
    paragraphs: [
      "Wicks hang from the ceiling on strings, each one tagged with a name in faded ink. Some of the tags have been scratched out. One of them, close to your hand, reads Su Mengjiao, and it is the only tag in the niche that has been polished smooth by someone’s thumb.",
    ],
    choices: [
      {
        id: "take_lantern",
        label: "Take a lantern from the wall and light it from the blue flame before you speak.",
        tone: "quiet",
        next: "lantern_keeper",
        effects: [
          { kind: "setFlag", flag: "entered_lantern_stair" },
          { kind: "setFlag", flag: "took_lantern" },
          { kind: "addStat", stat: "insight", amount: 2 },
        ],
      },
      {
        id: "wait_for_keeper",
        label: "Wait with your hands folded until the old woman decides to speak.",
        tone: "quiet",
        next: "lantern_keeper",
        effects: [{ kind: "setFlag", flag: "entered_lantern_stair" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "count_steps",
        label: "Count the steps back up in your head, so you know the way out if the lamps go dark.",
        tone: "quiet",
        next: "lantern_keeper",
        effects: [{ kind: "setFlag", flag: "entered_lantern_stair" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "turn_back_from_stair",
        label: "Turn back up the stair rather than go deeper, and join the others in the sutra hall.",
        tone: "quiet",
        next: "sutra_hall",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "lantern_keeper",
    title: "The Keeper of Wicks",
    paragraphs: [
      "\"I am Old Lin,\" she says at last. She takes a wick from the bottle beside her and begins to trim it with a knife no longer than a finger. \"I keep the lamps for the sutra door. Fifteen years ago, when the Law Hall still sent girls down to the lamps, I kept a lantern girl who wore her hair in a braid and sang when she thought no one was listening.\"",
      "The knife stops. \"Su Mengjiao lit the first lamp on this stair. She said the mist would follow a light if the light was patient enough. I told her patience was the Law’s favourite lie. She laughed at me, and then she went down the abyss path with her braid over her shoulder, and she did not come back the same way.\"",
      "Old Lin sets the wick aside and wipes her hands on a rag. \"The Law Hall has a rule about lamps,\" she says. \"No light may be carried below the sutra door unless a disciple of the Law has lit it. You are not a disciple of the Law. Yet you are standing in my light.\"",
    ],
    choices: [
      {
        id: "ask_about_mengjiao_lamp",
        label: "Ask Old Lin exactly what Mengjiao taught her about patience, and wait for the whole answer.",
        tone: "inquiry",
        next: "lantern_memory",
        effects: [{ kind: "setFlag", flag: "asked_lamp_keeper" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "pay_lamp_oil",
        label: "Pay for a measure of oil from your own purse, and ask for nothing in return.",
        tone: "mercy",
        next: "lantern_memory",
        effects: [{ kind: "setFlag", flag: "paid_lamp_oil" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "claim_law_name",
        label: "Tell her the Law has sent you to take every lamp on this stair, and watch whether she believes it.",
        tone: "deceit",
        next: "lantern_memory",
        effects: [{ kind: "setFlag", flag: "claimed_law_name" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "leave_lamp_lit",
        label: "Leave the blue lamp burning on its hook and tell her you will come back to it.",
        tone: "quiet",
        next: "lantern_memory",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "lantern_memory",
    title: "The Names on the Wall",
    paragraphs: [
      "Behind the niche, the rock has been carved into a long wall of names. Each name is cut into a small square of stone and sealed with wax, and most of the wax has cracked. Some of the squares are blank. Those are the names the Law Hall would not allow Old Lin to carve, and she has left room for them anyway.",
      "\"The sealed are not all dead,\" Old Lin says, watching you read. \"Some of them are only waiting. This wall is the only record of who walked down the path before the Sealing, and who walked after. The Law Hall prefers its own ledger, because its ledger is shorter.\"",
      "A lantern at the far end of the wall has burned down to a red ember. Beside it, someone has pressed a hand into the wet clay, and the handprint is small enough to belong to a girl.",
    ],
    choices: [
      {
        id: "read_names_on_wall",
        label: "Read every name aloud, slowly, so that the blank squares at least have someone speaking for them.",
        tone: "mercy",
        next: "lantern_return",
        effects: [{ kind: "setFlag", flag: "read_lamp_names" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "pocket_wick",
        label: "Pocket a wick from the wall without asking, because you suspect the mist may need one.",
        tone: "deceit",
        next: "lantern_return",
        effects: [{ kind: "setFlag", flag: "pocketed_wick" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "ask_how_to_cross_mist",
        label: "Ask how the lamp keepers cross the mist without a lantern, and listen to the whole answer.",
        tone: "inquiry",
        next: "lantern_return",
        effects: [{ kind: "setFlag", flag: "asked_crossing" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "sit_with_keeper",
        label: "Sit down beside Old Lin on her stool and share the silence while she trims the wicks.",
        tone: "mercy",
        next: "lantern_return",
        effects: [{ kind: "setFlag", flag: "sat_with_keeper" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
  {
    id: "lantern_return",
    title: "Back to the Sutra Door",
    paragraphs: [
      "You climb the stair with a lamp in your hand, and the blue flame follows you one step at a time. At the top, the sutra door waits in the dark with its inscriptions still damp from the mist. Ren Qiao is not there. The lantern he left behind has gone out, and its wick is cold.",
      "Gu Hanzhen’s cell is quiet. The lamp inside has been turned low, and the boy is asleep with his back to the bars. You do not wake him. Beyond the door you can hear the sutra hall, the faint sound of pages turning under no hand you can see.",
    ],
    choices: [
      {
        id: "carry_names_back",
        label: "Carry the names you read back into the sutra hall, and say them there.",
        tone: "truth",
        next: "sutra_hall",
        requires: [{ kind: "flag", flag: "read_lamp_names" }],
        lockedHint: "Requires that you read the names on the lamp wall.",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "hide_wick",
        label: "Keep the wick hidden in your sleeve as you walk into the sutra hall.",
        tone: "deceit",
        next: "sutra_hall",
      },
      {
        id: "light_wick_at_door",
        label: "Light the wick at the sutra door, so that the mist can see the way you came.",
        tone: "force",
        next: "sutra_hall",
        effects: [{ kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "go_straight_in",
        label: "Walk straight into the sutra hall without stopping to think about what you carry.",
        tone: "quiet",
        next: "sutra_hall",
      },
    ],
  },
];
