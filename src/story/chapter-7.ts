import type { Scene } from "@/engine/types";

/**
 * Chapter Seven: The Tribunal of Bells. The Law Hall judges the player in public,
 * before the disciples and the old masters who signed the Sealing.
 */
export const chapterSeven: Scene[] = [
  {
    id: "tribunal_summons",
    title: "Chapter Seven: The Tribunal of Bells",
    paragraphs: [
      "The Hall of Bells sits behind the Law Hall, at the top of a flight of forty white steps. It is open on all four sides, so that the wind moves freely through the columns, and in its centre hangs a single bronze bell as tall as a man. The bell has been silent for fifteen years. Its surface is dull and streaked with verdigris, and its clapper has been wrapped in grey cloth to keep it from making a sound.",
      "Dawn arrives slowly through the mist. The disciples fill the terraces below the hall in tight rows, grey robes pressed shoulder to shoulder, and the murmuring rises and falls like waves on rocks. Every face is turned toward the steps, and every face is waiting for you to climb them. You can feel the weight of their attention on your back like a hand pressing between your shoulder blades.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_summons_2",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_summons_2",
    title: "",
    paragraphs: [
      "On a raised dais at the top of the steps sit the masters of the Law. There are six of them, the oldest in the sect, and their robes are the colour of ash. Two of them you recognise from the ledger, because their seals appear on the orders beside Elder Su’s. At the centre of the dais, in a plain chair of pale jade, sits the Elder herself, her hair pinned up for the first time since you met her, the silver comb placed exactly where it should be.",
      "Gu Hanzhen is already kneeling at the foot of the steps, his hands bound loosely behind his back with a cord of red silk. The warden at his side is not Ren Qiao, and that is the first thing that frightens you. Ren Qiao is standing at the far edge of the terrace with his lantern unlit, looking at the ground.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_summons_3",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_summons_3",
    title: "",
    paragraphs: [
      "The Elder lifts one hand. The disciples fall silent, one terrace at a time, until the only sound left is the wind moving through the columns. \"The accused will come forward,\" she says, without raising her voice. \"The Law will hear the truth, and then the Law will ring the bell.\"",
    ],
    choices: [
      {
        id: "climb_alone",
        label: "Climb the forty white steps alone and stand before the dais with your back straight.",
        tone: "quiet",
        next: "tribunal_masters",
        effects: [{ kind: "setFlag", flag: "climbed_alone" }, { kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "kneel_with_gu",
        label: "Kneel beside Gu Hanzhen at the foot of the steps, and ask the warden to bind your hands as well.",
        tone: "mercy",
        next: "tribunal_testimony",
        npcScenario: "SHOW_MERCY",
        effects: [{ kind: "setFlag", flag: "knelt_with_gu" }, { kind: "addStat", stat: "karma", amount: 5 }],
      },
      {
        id: "show_shard_now",
        label: "Take the wrapped shard from your sleeve and hold it up where the whole terrace can see it.",
        tone: "truth",
        next: "tribunal_crowd",
        effects: [{ kind: "setFlag", flag: "showed_shard" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "walk_to_masters",
        label: "Walk past the steps and speak to the masters before the disciples can hear you.",
        tone: "deceit",
        next: "tribunal_masters",
        effects: [{ kind: "setFlag", flag: "spoke_masters_first" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
    ],
    interjections: [
      {
        when: [
          { kind: "flag", flag: "stole_scroll" },
          { kind: "flag", flag: "spared_gu" },
        ],
        line: "You stole from my shelves and then let the boy you were sent to hunt walk free. I cannot yet decide which of those two acts I am sentencing, and the masters will want my answer before the bell rings.",
      },
    ],
  },
  {
    id: "tribunal_masters",
    title: "The Masters of the Dais",
    paragraphs: [
      "The oldest of the masters is a thin, stooping man named Hu Jingyan, whose hands shake so badly that his teacup rattles against its saucer every time he lifts it. He watches you approach with the bright, unforgiving interest of an old scholar examining a poorly copied text. The second master, a woman named Lian Sheng with a face like carved walnut, does not look at you at all. She is studying the Elder instead, and her expression is careful and hungry.",
      "\"You are the outsider who entered the Ash Archive,\" Hu Jingyan says. His voice is thin but carries well across the terrace. \"You are the one who went down the sutra stair and returned with your eyes white. You are the one who has been speaking to the jade eye, and who has been called to this hall by a bell that has not rung for fifteen years. Do you know why it rang for you?\"",
      "\"Because someone wants the masters to see me,\" you answer. \"And because someone wants the Elder to see the masters.\"",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_masters_2",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_masters_2",
    title: "",
    paragraphs: [
      "Lian Sheng turns at last, very slowly. \"You are clever,\" she says. \"That is a dangerous quality in an outsider. We were clever once, too, fifteen years ago, when we decided that a living cultivator could hold the seal better than an iron chain. We were right, you know. The mist has been quiet since then. Would you like to tell the disciples that our cleverness was a crime?\"",
      "Behind them, the Elder has not moved. Her eyes are fixed on the masters, and her hands rest on the arms of the jade chair with a stillness that looks like a warning. You understand that she is waiting to see what you will say, and that the masters are waiting for the same thing.",
    ],
    choices: [
      {
        id: "accuse_masters",
        label: "Tell the masters that they wrote the order and that the Elder only signed it under their pressure.",
        tone: "force",
        next: "tribunal_testimony",
        npcScenario: "CHALLENGE_BELL_RULE",
        effects: [{ kind: "setFlag", flag: "accused_masters" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "flatter_masters",
        label: "Compliment the masters on their cleverness, and let them believe you admire the Law.",
        tone: "deceit",
        next: "tribunal_testimony",
        effects: [{ kind: "setFlag", flag: "flattered_masters" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "reveal_shard_to_masters",
        label: "Unwrap the shard in front of Hu Jingyan and tell him the altar was never whole.",
        tone: "truth",
        next: "tribunal_crowd",
        effects: [{ kind: "setFlag", flag: "revealed_shard_masters" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "ask_masters_question",
        label: "Ask Lian Sheng a single question: whether Mengjiao ever asked to be released from the path.",
        tone: "inquiry",
        next: "tribunal_testimony",
        npcScenario: "ASK_TABLET",
        effects: [{ kind: "setFlag", flag: "asked_lian" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
    ],
  },
  {
    id: "tribunal_testimony",
    title: "Testimony Before the Disciples",
    paragraphs: [
      "The Elder lifts her hand again, and the testimony begins. She does not call you by name. She calls you the accused, and then she calls Gu Hanzhen the second accused, and it sounds strange in her mouth, like a phrase copied from a book she has never read. The disciples lean forward. Somewhere on the upper terrace, a girl begins to cry, and is shushed by the older disciples around her.",
      "\"Speak,\" the Elder says. \"Tell the Law what you saw in the Ash Archive, in the sutra hall, and at the gate of the Sealing. Tell it in order. The bell will ring when you lie, and it will ring when you tell the truth, and the Law will know the difference.\"",
      "The bell does not ring. It cannot. It is silent behind its grey cloth, and the disciples know it, and they look at one another with a shared unease that spreads across the terraces like wind across a field of grass. Without the bell, the testimony is only words, and words in this sect have always been measured by who speaks them.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_testimony_2",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_testimony_2",
    title: "",
    paragraphs: [
      "Gu Hanzhen lifts his head from the steps. His voice is hoarse, but he speaks clearly. \"The second accused saw Su Mengjiao on the stair,\" he says. \"She told the second accused that the seal was tired. She asked him to tell the Elder that she was not dead. He has been trying to tell the Law that for three days, and the Law has been ringing the bell over his head ever since.\"",
      "A ripple runs through the upper terrace. A few disciples stand up. Others sit down. One of the masters, a broad man with a bald head and a gold clasp at his collar, rises from his chair with a sharp exhalation of disapproval. The Elder does not look at him. She is still looking at you, and her eyes are grey and bright and utterly unreadable.",
    ],
    choices: [
      {
        id: "testify_for_gu",
        label: "Testify before the whole sect that Gu Hanzhen spoke the truth, and that the masters rang the bell over him.",
        tone: "truth",
        next: "tribunal_bell_rule",
        npcScenario: "TESTIFY_FOR_GU",
        effects: [{ kind: "setFlag", flag: "testified_for_gu" }, { kind: "addStat", stat: "karma", amount: 6 }],
      },
      {
        id: "testify_truthfully",
        label: "Give the honest account of the archive, the letter, and the Index card, without shading any detail.",
        tone: "truth",
        next: "tribunal_bell_rule",
        npcScenario: "HONEST_ACCOUNT",
        effects: [{ kind: "setFlag", flag: "testified_truth" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "testify_deny",
        label: "Tell the tribunal that you took nothing from the altar and have no knowledge of the sutra hall.",
        tone: "deceit",
        next: "tribunal_bell_rule",
        npcScenario: "LIE_ABOUT_SEAL",
        effects: [{ kind: "setFlag", flag: "testified_denial" }, { kind: "addStat", stat: "karma", amount: -6 }],
      },
      {
        id: "testify_silence",
        label: "Say that you will not testify, and kneel silently on the step beside Gu Hanzhen.",
        tone: "mercy",
        next: "tribunal_crowd",
        effects: [{ kind: "setFlag", flag: "silent_at_tribunal" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
    interjections: [
      { when: [{ kind: "tone", tone: "truth", min: 3, within: 4 }], line: "Three plain answers before the bell. The tribunal has heard a great many people speak, and it has rarely heard anyone speak like that under the masters’ eyes. Hold on to it." },
    ],
  },
  {
    id: "tribunal_crowd",
    title: "The Crowd Turns",
    paragraphs: [
      "The terraces are not quiet anymore. The disciples have begun to talk among themselves in low urgent voices, and the sound swells and breaks like surf against a seawall. A few of them have edged forward until they are almost at the foot of the steps. Others have pulled back, their faces pale, as though they have been told to fear the outsider and find they do not know why.",
      "At the back of the crowd, a figure pushes through the ranks. It is Lin Yuan, the keeper of keys, with ink still on his fingers and his veil pulled down around his neck. He is shaking, but he does not stop. When he reaches the front, he kneels on the white stone and lifts a bundle of papers above his head with both hands.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_crowd_2",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_crowd_2",
    title: "",
    paragraphs: [
      "\"These are the sealing orders,\" he says. His voice is thin, but it carries. \"They were sent to the archive fifteen years ago and held there, unopened, because no one in the Law Hall wanted them read. The Elder’s signature is on fourteen of them. The masters’ seals are on all of them. My mother’s name is on the fifteenth, and it was crossed out before the ink dried.\"",
      "The masters’ faces tighten. Hu Jingyan’s teacup goes still in his trembling hand. Lian Sheng stands up and says something sharp and furious, and her words are lost in the sudden roar that rises from the lower terraces. The disciples are talking now, all of them, and the sound is so loud that the wind seems to stop to listen.",
      "Gu Hanzhen is staring at the papers with his mouth open. Ren Qiao has stepped out from the edge of the terrace. He is holding his lantern again, and the flame is burning steady and bright, and he is looking directly at the masters with an expression you have never seen on a warden’s face before.",
    ],
    choices: [
      {
        id: "appeal_to_disciples",
        label: "Stand up before the crowd and ask every disciple who was ever sent to the abyss path to raise their hands.",
        tone: "inquiry",
        next: "tribunal_bell_rule",
        npcScenario: "APPEAL_TO_DISCIPLES",
        effects: [{ kind: "setFlag", flag: "appealed_to_disciples" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "show_sealing_order",
        label: "Take the sealing order from Lin Yuan and read the masters’ names aloud, one at a time.",
        tone: "truth",
        next: "tribunal_bell_rule",
        npcScenario: "SHOW_SEALING_ORDER",
        effects: [{ kind: "setFlag", flag: "read_sealing_order" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "calm_the_crowd",
        label: "Lift both hands and ask the disciples to wait for the Elder’s word before they judge anyone.",
        tone: "mercy",
        next: "tribunal_bell_rule",
        npcScenario: "ACCEPT_PUNISHMENT",
        effects: [{ kind: "setFlag", flag: "calmed_crowd" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "stay_still",
        label: "Stay on your knees in the middle of the storm and let the disciples decide what they see.",
        tone: "quiet",
        next: "tribunal_bell_rule",
        effects: [{ kind: "addStat", stat: "qi", amount: 2 }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "slip_to_foundry",
        label: "Slip behind the dais while the crowd is shouting, toward the ring of hammers rising from under the Law Hall.",
        tone: "deceit",
        next: "foundry_gate",
      },
    ],
  },
  {
    id: "tribunal_bell_rule",
    title: "Trial by Bell",
    paragraphs: [
      "The Elder rises from the jade chair. The disciples fall silent again, not all at once this time but in a slow wave that moves up the terraces like a tide going out. She walks to the edge of the dais and stands above the steps, and for a moment she simply looks down at the crowd, the way she once looked down at the ledgers in her hall.",
      "\"The Law has a rule for disputes it cannot settle with words,\" she says. \"The bell decides. It has never been wrong, because it has never been asked to decide anything that the Law did not already know. Tonight we will ask it a question the Law has never asked.\" She turns to the wardens standing at the bell’s base. \"Unwrap it.\"",
      "The grey cloth falls away from the clapper, and the bell hums for the first time in fifteen years. It is a deep, rich sound, almost a voice, and it rolls out over the terraces and down the white steps until the disciples are pressing their hands to their ears. Gu Hanzhen cries out softly beside you. Ren Qiao does not move at all.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_bell_rule_2",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_bell_rule_2",
    title: "",
    paragraphs: [
      "The Elder lifts her voice over the hum. \"The question is this: did Su Mengjiao go willingly into the mist, or did the Law send her there?\" The bell swells. It rings once, low and clear. Then it rings a second time, and the second note is harder and sharper and tilts toward the masters. A murmur runs through the crowd, like the sound of a crowd turning its head in unison.",
      "The masters look at one another. Lian Sheng’s hand tightens on the arm of her chair. Hu Jingyan begins to speak, but the bell rings again, louder, and the words die in his throat. The Elder has not lowered her voice. She is still looking at the crowd, and in her eyes there is something that you did not expect to see there at all. It is not triumph. It is grief, and beneath the grief, a cold, patient anger that has waited fifteen years to be spent.",
    ],
    choices: [
      {
        id: "ring_the_bell_yourself",
        label: "Walk to the bell and strike it yourself, once, with your open palm, and say Mengjiao’s name as it sounds.",
        tone: "force",
        next: "tribunal_vote",
        npcScenario: "CHALLENGE_BELL_RULE",
        effects: [{ kind: "setFlag", flag: "struck_bell" }, { kind: "addStat", stat: "qi", amount: 4 }],
      },
      {
        id: "let_bell_decide",
        label: "Stand still and let the bell finish its question without your help.",
        tone: "quiet",
        next: "tribunal_vote",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "stop_the_bell",
        label: "Catch the clapper in your hands and stop the bell before it can give an answer.",
        tone: "force",
        next: "tribunal_vote",
        npcScenario: "THREATEN",
        effects: [{ kind: "setFlag", flag: "stopped_bell" }, { kind: "addStat", stat: "karma", amount: -5 }],
      },
      {
        id: "ask_elder_permission",
        label: "Turn to the Elder and ask whether she wants the bell to speak the truth or only the answer she already holds.",
        tone: "truth",
        next: "tribunal_vote",
        npcScenario: "HONEST_ACCOUNT",
        effects: [{ kind: "setFlag", flag: "asked_elder_bell" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
    ],
  },
  {
    id: "tribunal_vote",
    title: "The Disciples Choose",
    paragraphs: [
      "The vote is taken by stones. Each disciple of the Law is given a grey pebble and a white one at the foot of the terrace, and they are told to walk up the steps and drop one into the bronze bowl beside the bell. The white stones mean the masters were wrong. The grey stones mean the Law was right. The line stretches down the terraces and out through the mist, and it takes so long that the sun has climbed above the rim of the mountain before the first stone clicks against the bowl.",
      "You watch the stones fall. The first hundred are almost all grey. Then the white ones begin to appear, a few at first and then more, until the bowl is half white and the disciples at the back of the line are whispering as they climb the steps. Gu Hanzhen is still kneeling. Ren Qiao has moved to stand beside him, and Lin Yuan stands on his other side, holding the sealing orders against his chest as though they might be stolen.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "tribunal_vote_2",
        page: true,
      },
    ],
  },
  {
    id: "tribunal_vote_2",
    title: "",
    paragraphs: [
      "The masters do not vote. They sit in silence on the dais, their faces grey with a kind of slow astonishment, as they watch the line of disciples climb past them one by one. Lian Sheng alone keeps her hands folded in her lap, and her eyes never leave the Elder’s face.",
      "When the last stone falls, the bowl is almost evenly divided. The Elder stands and counts them in silence, moving her lips, touching each stone with one fingertip. Then she looks up at you, and her expression is so open that it hurts to see it.",
      "\"The Law counts its stones,\" she says quietly, \"and the Law has always counted fairly. It is only the masters who ever counted falsely.\" She takes a breath. \"The sect has spoken. The question is now mine to answer.\"",
    ],
    choices: [
      {
        id: "trust_elder_verdict",
        label: "Tell her you will abide by whatever verdict she gives, and mean it with all your heart.",
        tone: "truth",
        next: "descent_return",
        npcScenario: "SWEAR_OATH",
        effects: [{ kind: "setFlag", flag: "trusted_verdict" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "demand_fair_judgment",
        label: "Demand that the masters who signed the sealing orders be judged along with the outsider.",
        tone: "force",
        next: "descent_return",
        npcScenario: "CHALLENGE_LAW_WITH_ELDER",
        effects: [{ kind: "setFlag", flag: "demanded_masters_judged" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "offer_to_descend",
        label: "Offer to go back down the abyss path alone and bring Mengjiao out of the mist yourself.",
        tone: "mercy",
        next: "descent_return",
        npcScenario: "ACCEPT_DESCENT",
        effects: [{ kind: "setFlag", flag: "offered_descent" }, { kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "refuse_verdict",
        label: "Tell the Elder you will not accept any verdict made by a bell that was rung over Gu Hanzhen’s head.",
        tone: "force",
        next: "descent_return",
        npcScenario: "REFUSE_TASK",
        effects: [{ kind: "setFlag", flag: "refused_verdict" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
    ],
    interjections: [
      {
        when: [
          { kind: "said", scenario: "HONEST_ACCOUNT", within: 3 },
          { kind: "said", scenario: "LIE_ABOUT_SEAL", within: 3 },
        ],
        line: "You denied the seal under the bell, and asked my leave a moment later. I heard both answers, Wanderer. The disciples were counting stones while I was counting you, and I am not yet certain which of us counted more truly.",
      },
    ],
  },
];
