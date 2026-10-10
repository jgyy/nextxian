import type { Scene } from "@/engine/types";

/**
 * Side Path: The Sparring Court. Opened from the summons, while the bell is still ringing.
 * The outer disciples practise behind the bell tower, and a senior disciple named Qin
 * wants to see whether the outsider can stand on the earth. The path rejoins the summons.
 */
export const sparringCourtScenes: Scene[] = [
  {
    id: "court_gate",
    title: "Side Path: The Sparring Court",
    paragraphs: [
      "The sparring court lies behind the bell tower, a square of beaten earth ringed by stone benches and wooden posts scarred by a thousand strikes. Young disciples in plain grey practise their forms in pairs, shouting the count as they move. The air smells of sweat, liniment, and the dust that rises from their feet.",
      "A senior disciple sits on the highest bench, a big man with a braid down his back and a bruise on one cheek. His name is Qin, and he has been watching you since you came through the gate. \"The Elder’s outsider,\" he says, loud enough for the whole court to hear. \"They say you can take a blow without falling. Stand on the earth, and let us see whether they are right.\"",
      "Several of the younger disciples have stopped their forms to watch. Nobody is sure whether this is a test or a joke, and Qin’s grin makes it hard to tell.",
    ],
    choices: [
      {
        id: "accept_the_challenge",
        label: "Step onto the earth and accept Qin’s challenge, keeping your hands open.",
        next: "court_bout",
        effects: [{ kind: "setFlag", flag: "accepted_challenge" }, { kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "ask_for_a_lesson",
        label: "Ask Qin to teach you one form, and offer to hold the posts while the others practise.",
        next: "court_bout",
        effects: [{ kind: "setFlag", flag: "asked_for_lesson" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "watch_from_the_rail",
        label: "Stay at the rail and watch the pairs until Qin loses interest in you.",
        next: "court_watch",
      },
      {
        id: "leave_the_court",
        label: "Bow to Qin, turn around, and walk back toward the summons bell.",
        next: "tribunal_summons",
      },
    ],
  },
  {
    id: "court_watch",
    title: "Watching From the Rail",
    paragraphs: [
      "The pairs move like water poured between stones. One disciple stumbles and laughs at herself. Another takes a blow on the forearm and does not flinch, and the instructor beside her nods once, as though she has passed a private test. You learn more from the rail than you expected. The forms are not about winning. They are about knowing where the other person’s weight will go next.",
      "Qin notices you watching and walks over with a towel across his shoulder. \"You count,\" he says. \"Most outsiders just stare. Tell me what you saw.\" He is not hostile, only curious, and the question is a real one.",
    ],
    choices: [
      {
        id: "describe_the_weight",
        label: "Tell Qin exactly where the weight of each pair went, and why the stumbling one fell when she did.",
        next: "court_return",
        effects: [{ kind: "setFlag", flag: "described_weight" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "say_nothing_to_qin",
        label: "Shake your head and let him keep his towel. Some lessons are better learned by watching.",
        next: "court_return",
        effects: [{ kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "mock_the_forms",
        label: "Tell Qin the forms look like a prayer that has forgotten what it is praying for.",
        next: "court_return",
        effects: [{ kind: "setFlag", flag: "mocked_forms" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "praise_the_young",
        label: "Praise the younger disciples by name, loudly enough that they hear you over the shouting.",
        next: "court_return",
        effects: [{ kind: "addStat", stat: "karma", amount: 3 }],
      },
    ],
  },
  {
    id: "court_bout",
    title: "The Bout",
    paragraphs: [
      "Qin steps onto the earth with the easy weight of someone who has won a hundred bouts and lost none that he cared about. The court falls quiet. He does not raise his fists. He lifts one open palm and waits for you to decide whether to try.",
      "The first exchange is fast and loud. Qin’s palm meets your forearm, and the blow runs up into your shoulder like a bell struck in a cellar. You step back. You do not fall. The disciples at the rail lean forward, and Qin’s grin widens, as though you have answered a question he did not expect to be asked.",
      "The second exchange is slower. You feel the mist in your breath before you feel anything in your hands, and the court seems to stretch and shrink around the two of you. For a heartbeat you can see exactly where Qin’s weight will go next. Then the heartbeat ends, and his palm rests against your chest, gentle but final.",
    ],
    choices: [
      {
        id: "fall_gracefully",
        label: "Let his palm land and step with it, so that you fall without breaking and rise without a word.",
        next: "court_return",
        effects: [{ kind: "setFlag", flag: "lost_bout" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "hold_your_ground",
        label: "Plant your feet, ignore the ache in your shoulder, and push back until the court goes silent.",
        next: "court_return",
        effects: [{ kind: "setFlag", flag: "held_ground" }, { kind: "addStat", stat: "qi", amount: 3 }, { kind: "addStat", stat: "karma", amount: -1 }],
      },
      {
        id: "use_the_mist",
        label: "Let the mist move through your palm for one breath, the way the sutra taught you, and strike without thinking.",
        next: "court_return",
        requires: [{ kind: "flag", flag: "read_the_sutra" }],
        lockedHint: "Requires that you have read the Blood Lotus Sutra.",
        effects: [{ kind: "setFlag", flag: "used_mist" }, { kind: "addStat", stat: "qi", amount: 2 }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "yield_the_court",
        label: "Lower your hands and bow before Qin can finish the bout, so that the court sees you yield with grace.",
        next: "court_return",
        effects: [{ kind: "setFlag", flag: "yielded_bout" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
  {
    id: "court_return",
    title: "After the Bout",
    paragraphs: [
      "The court begins to breathe again. Juniors come forward to tie the strained posts, and Qin wipes his face with the towel and looks at you as though you are a different question now. \"The Elder’s outsider,\" he says, but there is less mockery in it. \"The bell is still ringing for you. You know that?\"",
      "Behind the bell tower, the summons is ringing again, slow and steady. The jade eye in your sleeve has been humming since the first blow, and you know, without being told, that the Elder can hear the court through it.",
    ],
    choices: [
      {
        id: "report_bout",
        label: "Tell the jade eye how the bout went, and what it cost you to stand on the earth.",
        next: "tribunal_summons",
        npcScenario: "REPORT_BOUT",
      },
      {
        id: "keep_bout_quiet",
        label: "Say nothing to the eye. The bout belongs to the court, and not to the Law Hall.",
        next: "tribunal_summons",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "help_with_the_posts",
        label: "Help Qin’s juniors straighten the posts, and do not look at the eye while you work.",
        next: "tribunal_summons",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }, { kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "boast_to_the_court",
        label: "Tell the court you could have beaten Qin, if the bell had not interrupted.",
        next: "tribunal_summons",
        effects: [{ kind: "setFlag", flag: "boasted" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
    ],
  },
];
