import type { Scene } from "@/engine/types";

/** Chapter One: The Stolen Seal. The player arrives at the Azure Cloud Sect and is accused of theft. */
export const chapterOne: Scene[] = [
  {
    id: "gate",
    title: "Chapter One: The Stolen Seal",
    paragraphs: [
      "Rain has fallen on the mountain for three days, and the stone steps of the Azure Cloud Sect are slick with it. You climb them with a pack on your back and mud to your knees. Above you, the sect gate rises out of the mist like a sword in a sheath.",
      "A gate disciple in grey robes stands beneath the lintel, holding an umbrella that is not quite large enough for him. He watches you come up the last steps with the careful attention of someone who has been told to expect trouble.",
      "“State your name and business,” he says. “The Law Hall has closed its doors to visitors since the Sealing Jade was taken. Anyone who arrives now is either very brave or very guilty.”",
    ],
    choices: [
      {
        id: "bow_and_state",
        label: "Bow, give your name, and ask to see the Law Hall.",
        tone: "mercy",
        next: "law_hall",
      },
      {
        id: "ask_gossip",
        label: "Ask the disciple what has happened on the mountain.",
        tone: "inquiry",
        next: "gate_gossip",
      },
      {
        id: "offer_herb",
        label: "Offer him a spirit herb to carry in to the Law Hall as a gift.",
        tone: "mercy",
        next: "law_hall",
        npcScenario: "GIFT_HERB",
        effects: [{ kind: "setFlag", flag: "gifted_herb" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "side_gate",
        label: "Slip through the side gate while the disciple is looking the other way.",
        tone: "deceit",
        next: "memorial",
        effects: [
          { kind: "setFlag", flag: "sneaked_in" },
          { kind: "addStat", stat: "karma", amount: -5 },
        ],
      },
    ],
  },
  {
    id: "gate_gossip",
    title: "The Gate Disciple",
    paragraphs: [
      "The disciple lowers his voice, though there is no one else for a hundred steps. “Three nights ago someone climbed the altar of the Sealing Jade and took it. The seal was never meant to leave the Law Hall. It is the lock on the Crimson Abyss. Without it, the mist down there is getting closer.”",
      "“They say a rival disciple, Gu Hanzhen, was seen running toward the abyss path. Elder Su has sent the Law Hall’s wardens after him, but the wardens came back empty-handed and frightened. Now the elder waits in her hall, and she does not sleep.”",
    ],
    choices: [
      {
        id: "go_to_law_hall",
        label: "Thank him and go straight to the Law Hall.",
        tone: "quiet",
        next: "law_hall",
        effects: [{ kind: "setFlag", flag: "knows_gu_name" }],
      },
      {
        id: "ask_gu",
        label: "Ask him to describe Gu Hanzhen, so you know who you are looking for.",
        tone: "inquiry",
        next: "law_hall",
        effects: [
          { kind: "setFlag", flag: "knows_gu_name" },
          { kind: "addStat", stat: "insight", amount: 3 },
        ],
      },
      {
        id: "bribe_gate",
        label: "Press a spirit stone into his palm and ask him to remember nothing of you.",
        tone: "deceit",
        next: "law_hall",
        effects: [
          { kind: "setFlag", flag: "bribed_gate" },
          { kind: "addStat", stat: "karma", amount: -3 },
        ],
      },
      {
        id: "leave_for_memorial",
        label: "Leave him to his umbrella and head for the memorial hall first.",
        tone: "quiet",
        next: "memorial",
      },
    ],
  },
  {
    id: "memorial",
    title: "The Memorial Hall",
    paragraphs: [
      "The ancestral memorial sits behind the Law Hall, a low building of black stone. Within, rows of tablets glow faintly with old qi. Incense has burned here for three centuries, and the air tastes of cedar and cold ash.",
      "At the far end of the hall stands the empty altar where the Sealing Jade once rested. Its base is cracked in a neat circle, as though something heavy was lifted without a hammer. Beside it, on a shelf of dark wood, the Heavenly Scroll lies unguarded under a thin layer of dust.",
      "Somewhere far above, a bell chimes once and falls silent. The Law Hall has noticed a presence in the memorial.",
    ],
    extras: [
      {
        when: [{ kind: "flag", flag: "sneaked_in" }],
        paragraphs: ["Your wet footprints lead across the polished floor directly to the altar. Anyone could follow them."],
      },
    ],
    choices: [
      {
        id: "kneel",
        label: "Kneel before the ancestral tablets and honour the dead.",
        tone: "mercy",
        next: "law_hall",
        npcScenario: "HONOR_ANCESTORS",
        effects: [{ kind: "setFlag", flag: "honored_ancestors" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "study_altar",
        label: "Study the cracked altar closely and memorise every mark on it.",
        tone: "inquiry",
        next: "law_hall",
        effects: [
          { kind: "setFlag", flag: "saw_altar" },
          { kind: "addStat", stat: "insight", amount: 8 },
        ],
      },
      {
        id: "take_scroll",
        label: "Take the Heavenly Scroll from the shelf.",
        tone: "deceit",
        next: "scroll_theft",
        npcScenario: "STEAL_SCROLL",
        effects: [{ kind: "setFlag", flag: "stole_scroll" }, { kind: "addStat", stat: "karma", amount: -8 }],
      },
      {
        id: "read_altar_qi",
        label: "Draw a thread of your own qi across the altar to read what is left behind.",
        tone: "force",
        next: "law_hall",
        npcScenario: "REVEAL_DEMONIC_QI",
        effects: [
          { kind: "setFlag", flag: "used_demon_qi" },
          { kind: "addStat", stat: "qi", amount: 6 },
          { kind: "addStat", stat: "karma", amount: -6 },
        ],
      },
    ],
  },
  {
    id: "scroll_theft",
    title: "A Scroll in Your Sleeve",
    paragraphs: [
      "The scroll is heavier than it looks, and its paper is warm to the touch, as if something inside it is still breathing. Footsteps echo in the corridor outside. A warden’s lantern swings past the doorway and pauses.",
      "You have a moment to choose before the lantern turns back.",
    ],
    choices: [
      {
        id: "hide_and_walk",
        label: "Hide the scroll in your sleeve and walk out as if you belonged there.",
        tone: "deceit",
        next: "law_hall",
        effects: [{ kind: "setFlag", flag: "hid_scroll" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "drop_and_claim",
        label: "Drop the scroll on the floor and say you were searching for the thief.",
        tone: "deceit",
        next: "law_hall",
        effects: [{ kind: "setFlag", flag: "dropped_scroll" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "read_lines",
        label: "Read two lines aloud before the lantern reaches you.",
        tone: "inquiry",
        next: "law_hall",
        effects: [
          { kind: "setFlag", flag: "read_scroll" },
          { kind: "addStat", stat: "insight", amount: 15 },
          { kind: "addStat", stat: "karma", amount: -5 },
        ],
      },
      {
        id: "fight_warden",
        label: "Put out the lantern with a gust of qi and run for the side door.",
        tone: "force",
        next: "law_hall",
        effects: [
          { kind: "setFlag", flag: "fought_warden" },
          { kind: "addStat", stat: "qi", amount: 4 },
          { kind: "addStat", stat: "karma", amount: -10 },
        ],
      },
    ],
  },
  {
    id: "law_hall",
    title: "The Law Hall",
    paragraphs: [
      "The Law Hall is colder than the rain outside. Lamps hang from iron chains. At the far end, on a chair of pale jade, sits Elder Su Wanru, her grey hair pinned with a single silver comb. Her hands rest on a folded ledger, and her eyes are the colour of old river stone.",
      "“Sit,” she says, without warmth. “You have come up the mountain in the rain, which means either you were summoned or you had a reason to be here. Tell me which, and tell me the truth. The Sealing Jade was stolen from my altar, and I have very little patience left.”",
    ],
    extras: [
      {
        when: [{ kind: "flag", flag: "sneaked_in" }],
        paragraphs: ["Her gaze lingers on your muddy boots. “Someone walked into my memorial without leave. I can smell the wet stone on you from here.”"],
      },
      {
        when: [{ kind: "flag", flag: "stole_scroll" }],
        paragraphs: ["Her ledger is open at a page that lists the Heavenly Scroll. Her thumb rests on the line where its name is written, pressing hard."],
      },
    ],
    choices: [
      {
        id: "honest_account",
        label: "Tell her exactly what you saw and what you did, without excuses.",
        tone: "truth",
        next: "mission",
        npcScenario: "HONEST_ACCOUNT",
        effects: [{ kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "deny_seal",
        label: "Tell her you had nothing to do with the Sealing Jade.",
        tone: "deceit",
        next: "mission",
        npcScenario: "LIE_ABOUT_SEAL",
        effects: [{ kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "mock_law",
        label: "Tell her the Law is a cage that keeps the sect blind.",
        tone: "force",
        next: "mission",
        npcScenario: "INSULT_SECT",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "ask_sutra",
        label: "Ask her what she knows about the forbidden Blood Lotus Sutra.",
        tone: "inquiry",
        next: "mission",
        npcScenario: "ASK_FORBIDDEN_ART",
        effects: [{ kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "threaten_expose",
        label: "Tell her you know a secret the sect would rather keep buried, and you will tell it unless she cooperates.",
        tone: "force",
        next: "mission",
        npcScenario: "THREATEN",
        effects: [{ kind: "addStat", stat: "karma", amount: -8 }],
      },
    ],
  },
  {
    id: "mission",
    title: "The Command",
    paragraphs: [
      "Elder Su closes her ledger. “The Sealing Jade must return to the altar before the Crimson Abyss grows any wider. Gu Hanzhen fled down the abyss path, and the mist has already taken two wardens. You will go after him and bring the jade back. If you refuse, the Law Hall will judge you as the thief you may be.”",
      "She does not offer an alternative. Behind her, a mirror of polished jade hums softly. It is the sect’s jade-eye, and through it she will follow your path down the mountain. The lamps flicker, and the room waits for your answer.",
    ],
    choices: [
      {
        id: "accept_mission",
        label: "Accept the task and go down the abyss path.",
        tone: "quiet",
        next: "abyss_entry",
        effects: [{ kind: "setFlag", flag: "accepted_mission" }],
      },
      {
        id: "refuse_mission",
        label: "Refuse, and tell her you will not be her hound.",
        tone: "force",
        next: "ending_exile",
        npcScenario: "REFUSE_TASK",
        effects: [{ kind: "setFlag", flag: "refused_mission" }],
      },
      {
        id: "ask_time",
        label: "Ask for one night to prepare, then go down at first light.",
        tone: "quiet",
        npcScenario: "REQUEST_NIGHT",
        next: "abyss_entry",
        effects: [{ kind: "addStat", stat: "qi", amount: 5 }],
      },
      {
        id: "offer_self",
        label: "Offer to find Gu Hanzhen yourself, alone, without the wardens.",
        tone: "mercy",
        npcScenario: "OFFER_TO_FETCH_GU",
        next: "abyss_entry",
        effects: [
          { kind: "setFlag", flag: "volunteered" },
          { kind: "addNpc", metric: "respect", amount: 3 },
        ],
      },
      {
        id: "prepare_at_market",
        label: "Ask leave to buy supplies at the herb market below the gate before you go down.",
        tone: "quiet",
        npcScenario: "REQUEST_NIGHT",
        next: "market_lane",
        effects: [{ kind: "setFlag", flag: "asked_for_market_leave" }],
      },
      {
        id: "ask_village_leave",
        label: "Ask the Elder’s leave to visit the foothill village where Gu Hanzhen was born, before you go down.",
        tone: "truth",
        npcScenario: "REQUEST_VILLAGE",
        effects: [{ kind: "setFlag", flag: "visited_village" }],
        next: "village_gate",
      },
    ],
  },
];
