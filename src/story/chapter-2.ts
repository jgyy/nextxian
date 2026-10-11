import type { Scene } from "@/engine/types";

/** Chapter Two: The Crimson Abyss. The descent, the confrontation, and the truth about the theft. */
export const chapterTwo: Scene[] = [
  {
    id: "abyss_entry",
    title: "Chapter Two: The Crimson Abyss",
    paragraphs: [
      "The abyss path begins where the mountain splits. Red mist rises from the cleft like breath from a sleeping beast, and the air grows heavy with iron. Halfway down, the path narrows to a ledge the width of two shoulders.",
      "Gu Hanzhen is there, pressed against the rock with a torn sleeve and a sword that trembles in his hand. Black threads of mist curl around his ankles. He is young, perhaps nineteen, and his eyes are wide with fear rather than guilt.",
      "“Stay back,” he says. “The seal is not mine. It was never mine. If you come closer, the mist takes you too.”",
    ],
    choices: [
      {
        id: "spare_gu",
        label: "Lower your blade and let Gu Hanzhen speak.",
        tone: "mercy",
        next: "abyss_truth",
        npcScenario: "SHOW_MERCY",
        effects: [{ kind: "setFlag", flag: "spared_gu" }, { kind: "addStat", stat: "karma", amount: 6 }],
      },
      {
        id: "strike_gu",
        label: "Strike Gu down and take the Sealing Jade from his robes.",
        tone: "force",
        next: "abyss_truth",
        effects: [
          { kind: "setFlag", flag: "struck_gu" },
          { kind: "addStat", stat: "karma", amount: -15 },
          { kind: "addStat", stat: "qi", amount: 5 },
        ],
      },
      {
        id: "call_lotus",
        label: "Reach for the cold black seed you have carried since childhood, and let it push the mist back from the ledge.",
        tone: "force",
        next: "abyss_truth",
        npcScenario: "REVEAL_DEMONIC_QI",
        effects: [
          { kind: "setFlag", flag: "lotus_used_in_abyss" },
          { kind: "addStat", stat: "qi", amount: 10 },
        ],
      },
      {
        id: "interrogate",
        label: "Hold your blade at his throat and demand to know who really took the jade.",
        tone: "force",
        next: "abyss_truth",
        effects: [
          { kind: "setFlag", flag: "interrogated_gu" },
          { kind: "addStat", stat: "insight", amount: 10 },
        ],
      },
    ],
  },
  {
    id: "abyss_truth",
    title: "What the Mist Remembers",
    paragraphs: [
      "Gu Hanzhen sinks to his knees on the ledge. The mist recoils from him as though he were a lamp. “I was sent to watch the altar, not to steal from it,” he says. “A woman came out of the abyss three nights ago. She was dressed in old Azure Cloud grey, and her face was Elder Su’s face, a little younger. She took the jade from the altar’s crack and walked back down into the red.”",
      "“She called herself Mengjiao. The mist called her by another name, Su Mengjiao. The elder’s sister. The Law Hall buried her fifteen years ago, when she was caught studying the Blood Lotus Sutra. Nobody said she had fallen into the abyss. Everyone said she died.”",
    ],
    choices: [
      {
        id: "recover_jade",
        label: "Take the Sealing Jade from Gu and carry it back to the Law Hall.",
        tone: "truth",
        next: "return_hall",
        npcScenario: "COMPLETE_TASK",
        effects: [
          { kind: "setFlag", flag: "recovered_jade" },
          { kind: "addStat", stat: "karma", amount: 3 },
        ],
      },
      {
        id: "keep_secret",
        label: "Keep what Gu told you to yourself and report only that he is the thief.",
        tone: "deceit",
        next: "return_hall",
        effects: [
          { kind: "setFlag", flag: "keeps_secret" },
          { kind: "addStat", stat: "karma", amount: -3 },
        ],
      },
      {
        id: "vanish_with_jade",
        label: "Take the jade for yourself and vanish into the mist.",
        tone: "deceit",
        next: "ending_fallen",
        effects: [
          { kind: "setFlag", flag: "fled_with_jade" },
          { kind: "addStat", stat: "karma", amount: -20 },
          { kind: "addStat", stat: "qi", amount: 15 },
        ],
      },
      {
        id: "bring_gu_along",
        label: "Offer Gu a place at your side, and walk out of the abyss together.",
        tone: "mercy",
        next: "return_hall",
        effects: [
          { kind: "setFlag", flag: "brought_gu" },
          { kind: "addStat", stat: "karma", amount: 5 },
        ],
      },
      {
        id: "climb_to_hermit",
        label: "Leave the abyss for a while and climb the eastern peak to the old master who taught the Su sisters.",
        tone: "inquiry",
        npcScenario: "ASK_HERMIT",
        effects: [{ kind: "setFlag", flag: "visited_hermit" }],
        next: "hermit_foot",
      },
    ],
  },
  {
    id: "return_hall",
    title: "Back in the Law Hall",
    paragraphs: [
      "The rain has stopped by the time you return. Elder Su is waiting in the Law Hall, exactly where you left her. Her ledger is closed. Beside it stands a lacquered tray, and on it the Sealing Jade if you brought it, or nothing if you did not.",
      "“Speak,” she says. “I have heard the abyss in my dreams for fifteen years. Tell me what you found there, and do not tell me what the Law wants to hear.”",
    ],
    extras: [
      {
        when: [{ kind: "flag", flag: "brought_gu" }],
        paragraphs: ["Gu Hanzhen stands behind you, his head bowed, his sleeve still torn."],
      },
    ],
    choices: [
      {
        id: "tell_sister",
        label: "Tell her what you learned about her sister, Su Mengjiao.",
        tone: "force",
        next: "archive_gate",
        npcScenario: "EXPOSE_HER_SECRET",
        effects: [{ kind: "setFlag", flag: "knows_sister" }],
      },
      {
        id: "swear_loyalty",
        label: "Swear a Dao oath to serve the Law Hall and her.",
        tone: "truth",
        next: "archive_gate",
        npcScenario: "SWEAR_OATH",
        effects: [{ kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "frame_gu",
        label: "Tell her that Gu Hanzhen alone took the jade and fled.",
        tone: "deceit",
        next: "archive_gate",
        npcScenario: "LIE_ABOUT_SEAL",
        effects: [{ kind: "addStat", stat: "karma", amount: -6 }],
      },
      {
        id: "submit_judgment",
        label: "Kneel and submit to whatever judgment the Law demands.",
        tone: "mercy",
        next: "archive_gate",
        npcScenario: "ACCEPT_PUNISHMENT",
        effects: [{ kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "full_truth",
        label: "Tell her the whole truth, including what you did wrong in the abyss.",
        tone: "truth",
        next: "archive_gate",
        npcScenario: "HONEST_ACCOUNT",
        effects: [{ kind: "addStat", stat: "karma", amount: 5 }],
      },
    ],
  },
];
