import type { Scene } from "@/engine/types";

/**
 * Chapter Ten: The Sealing Night. The mist returns the player to the night fifteen
 * years ago, when the jade was set into the altar and Mengjiao walked down the path.
 */
export const chapterTen: Scene[] = [
  {
    id: "sealing_night",
    title: "Chapter Ten: The Sealing Night",
    paragraphs: [
      "The lamps in the Law Hall go out one by one, and the dark that follows is not empty. It is full of the smell of incense and wet silk, and of voices that are older than you are. The original sealing order is still in your hand, but the paper has begun to glow faintly at its edges, and the glow spreads across the floor like frost creeping over a pond. When the light reaches the altar, the altar is no longer cracked.",
      "The Law Hall is full of masters. They wear the same ash-grey robes as the masters you saw on the dais, but their faces are younger and their voices are harder. They stand in a tight ring around the altar, and at its centre a young woman in plain grey robes kneels with a brush in her hand. Her hair is pinned with a silver comb. She is perhaps twenty-five. She is trembling, and she is trying hard not to let anyone see it.",
      "\"This is the night of the Sealing,\" a voice says behind you. It is the Elder’s voice, but it has no weariness in it now. It is the voice of a woman who has not yet learned how much a single signature can cost. \"Witness it, or you will never believe what it cost.\" You turn, and the Elder is standing beside you, young and straight-backed, her eyes wide and dry, watching the kneeling woman at the altar as though she were watching a stranger.",
      "On the altar, the Sealing Jade rests in a bed of black silk. It is whole, and it is very beautiful, pale green with a deep inner glow. Beside it lies a stack of grey orders, and the top one is blank except for a single line at the bottom: Signed by the Elder of the Law Hall, before witnesses.",
      "No one in the room looks at the jade. They look at the brush in the young Elder’s hand, and at the blank line on the order, and at the single space where her name should go. The masters are waiting. The mist is waiting. Outside the great doors, very far away, a bell is beginning to ring its long, slow note.",
    ],
    interjections: [
      {
        when: [{ kind: "flag", flag: "paid_with_name" }],
        line: "There is river water in your sleeve, Wanderer, and it has not dried. Whatever you gave the lake, you did not carry it back out. Stand where I can see you, and do not let the masters see that your hands are shaking.",
      },
      {
        when: [{ kind: "flag", flag: "refused_ferry" }],
        line: "You refused the boatman, and the lake remembers every refusal it has ever heard. Tonight it is listening through the open doors. Keep your voice low, and do not refuse me the same way.",
      },
    ],
    choices: [
      {
        id: "step_into_the_ring",
        label: "Step into the ring of masters and stand beside the kneeling woman, close enough to see the ink on her brush.",
        next: "sealing_altar",
        effects: [{ kind: "setFlag", flag: "stood_in_ring" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "watch_from_pillar",
        label: "Stay by the pillar at the edge of the hall, where no one will notice you watching.",
        next: "sealing_altar",
        effects: [{ kind: "setFlag", flag: "watched_from_pillar" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "speak_to_young_elder",
        label: "Lean toward the young Elder and whisper that she still has time to refuse the brush.",
        next: "sealing_altar",
        npcScenario: "SWEAR_OATH",
        effects: [{ kind: "setFlag", flag: "whispered_to_elder" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "close_eyes_sealing",
        label: "Close your eyes and wait for the memory to end, because you cannot bear to watch it.",
        next: "sealing_altar",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
    ],
  },
  {
    id: "sealing_altar",
    title: "The Brush and the Name",
    paragraphs: [
      "The young Elder dips the brush in the ink and holds it above the paper. Her hand does not stop shaking. The masters lean forward in unison, and the sound of their breath rises in the hall like a wind rising through a valley. One of them, a broad man with a gold clasp, says in a low voice, \"The line is waiting, Su Wanru. The sect is waiting. Mengjiao is waiting.\"",
      "The brush touches the paper. A single stroke appears, very dark, and then a second, and the young woman’s breath catches as if she had been struck. The first stroke is her name, the family name Su. The second is the beginning of the given name, Wanru. She has stopped there, and her hand is hovering over the third stroke.",
      "\"Finish it,\" says a voice from the far side of the hall, and you realise that it is the voice of the fourteenth disciple, the girl who was sent down the path before Mengjiao. She is standing in the shadows with her hands bound. No one looks at her. The masters have decided that she is not a witness, only a name.",
      "The young Elder looks up. Her eyes find yours, across the ring of masters, and for a single heartbeat she seems to see you, really see you, a stranger from the future who has come to watch her make the choice she has spent fifteen years trying to undo. Her lips move. You cannot hear the words, but you know what they are, because they are the words the Elder spoke to you at the window at night: I wrote my own name instead.",
    ],
    choices: [
      {
        id: "elder_signs",
        label: "Let the young Elder finish her signature, and watch the masters nod in satisfaction as the order is sealed.",
        next: "sealing_path",
        npcScenario: "WITNESS_SIGNING",
        effects: [{ kind: "setFlag", flag: "witnessed_signing" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "elder_refuses",
        label: "Reach across the altar, put your hand over the brush, and tell her she does not have to write it.",
        next: "sealing_path",
        npcScenario: "REFUSE_SEALING",
        effects: [{ kind: "setFlag", flag: "stopped_signing" }, { kind: "addStat", stat: "karma", amount: 6 }],
      },
      {
        id: "offer_to_go",
        label: "Tell the masters that you will go down the path in her place, if only they will let the young Elder rest.",
        next: "sealing_path",
        npcScenario: "ACCEPT_DESCENT",
        effects: [{ kind: "setFlag", flag: "offered_self_sealing" }, { kind: "addStat", stat: "qi", amount: 4 }],
      },
      {
        id: "brush_to_side",
        label: "Knock the brush from her fingers and let the ink run across the blank order into an unreadable stain.",
        next: "sealing_path",
        effects: [{ kind: "setFlag", flag: "ruined_order" }, { kind: "addStat", stat: "karma", amount: 4 }, { kind: "addStat", stat: "insight", amount: -3 }],
      },
    ],
  },
  {
    id: "sealing_path",
    title: "The Path at the Top of the Cleft",
    paragraphs: [
      "The memory moves outward, and the Law Hall falls away behind you. You are standing on the lip of the abyss path, at the top of the cleft, in the cold wind that smells of iron. The jade is carried before you on a black lacquer tray by two masters who are not looking at each other. The mist below is rising, and it has already begun to lap at the first step.",
      "Mengjiao stands at the very edge, chained at the wrists and ankles with links of grey iron. She is not weeping. Her braid is loose and her grey robes are torn at the shoulder, but she is looking at the mist with a calm and terrible focus, as though she can hear every word it is saying. When the masters approach with the jade, she lifts her chin and speaks in a clear, carrying voice.",
      "\"You are going to give me the seal,\" she says. \"And then you are going to watch me walk into the mist with it, so the Law can say that a Su died holding the lock. That is what you want, and you have called it a sacrifice, because the word sounds better than murder in the mouth of an elder.\"",
      "The masters say nothing. One of them lifts the jade and holds it out to her, but she does not reach for it. She turns instead to the young Elder, who has followed the procession to the cleft with the signed order still clutched in her hand. Mengjiao’s voice softens. \"Wanru,\" she says. \"You can still walk away. The Law cannot make you stand at the top of the path if you refuse to stand there.\"",
    ],
    choices: [
      {
        id: "call_to_mengjiao",
        label: "Call out to Mengjiao across the cleft and tell her that you will carry her message to the sect.",
        next: "sealing_choice",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "called_to_mengjiao" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "step_toward_chains",
        label: "Step toward the chains and kneel beside Mengjiao, ready to break them with your own qi.",
        next: "sealing_choice",
        effects: [{ kind: "setFlag", flag: "stepped_to_chains" }, { kind: "addStat", stat: "qi", amount: 5 }],
      },
      {
        id: "stay_back_path",
        label: "Stay where you are at the top of the path, and say nothing, as the masters expect of a witness.",
        next: "sealing_choice",
        effects: [{ kind: "setFlag", flag: "stayed_back" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "warn_masters_path",
        label: "Tell the masters that the mist is rising faster than their numbers, and that they will all die if they go closer.",
        next: "sealing_choice",
        npcScenario: "CHALLENGE_BELL_RULE",
        effects: [{ kind: "setFlag", flag: "warned_masters" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
  {
    id: "sealing_choice",
    title: "The Last Link",
    paragraphs: [
      "The mist reaches the top of the cleft in a single breath. It flows over the edge like milk spilling from a cup, and the masters step back in unison, their robes billowing, their faces pale with a dread they have never admitted to. The jade on the lacquer tray begins to hum. Its inner glow flickers and steadies, and the sound it makes is almost a voice, calling out a single name over and over again.",
      "Mengjiao’s chains are cold, and the links are old, and somewhere in the centre of each one a faint crack runs along the iron. She has been pressing against them all night, trying to find the weak place. Now she turns her head and looks at you, and her gaze holds a question so plain it needs no words. Are you going to help me, or are you going to watch?",
      "The masters are waiting for the signal to step forward and push her into the mist. The young Elder is staring at the signed order in her hand as though the ink has begun to bleed through the paper. The wind pulls at the hem of your robe. You can feel the cracked iron under your palm when you lean close, and you know that you have only a few heartbeats before the masters decide that the witness has seen enough.",
    ],
    choices: [
      {
        id: "cut_chains",
        label: "Put your qi into the cracked iron, break the chains, and pull Mengjiao back from the edge of the cleft.",
        next: "sealing_return",
        effects: [{ kind: "setFlag", flag: "freed_mengjiao" }, { kind: "addStat", stat: "qi", amount: 8 }, { kind: "addStat", stat: "karma", amount: 10 }],
      },
      {
        id: "let_masters_push",
        label: "Step back and let the masters do what the Law has decided, because it is not yours to change.",
        next: "sealing_return",
        npcScenario: "ACCEPT_PUNISHMENT",
        effects: [{ kind: "setFlag", flag: "let_her_fall" }, { kind: "addStat", stat: "karma", amount: -10 }],
      },
      {
        id: "take_jade_instead",
        label: "Reach past the masters, take the jade from its tray, and tell Mengjiao that you will hold the seal yourself.",
        next: "sealing_return",
        npcScenario: "THREATEN",
        effects: [{ kind: "setFlag", flag: "took_jade_sealing" }, { kind: "addStat", stat: "qi", amount: 6 }, { kind: "addStat", stat: "karma", amount: -6 }],
      },
      {
        id: "sing_with_mist",
        label: "Hum the wordless tune from the vault and let the mist answer you instead of the chains.",
        next: "sealing_return",
        effects: [{ kind: "setFlag", flag: "sang_with_mist" }, { kind: "addStat", stat: "insight", amount: 6 }],
      },
    ],
  },
  {
    id: "sealing_return",
    title: "The Eye Closes",
    paragraphs: [
      "The memory breaks like a mirror struck with a stone. You are back in the Law Hall, standing beside the empty altar in the grey light of morning. The lamps have burned down to stubs. The mist is outside the doors, hanging in the courtyard like a second sky. And the Elder is standing next to you, very close, her hand resting lightly on your sleeve, as if to make sure you are real.",
      "\"I saw it,\" she says, very quietly. \"I saw what you did, or failed to do, at the top of the path. The mirror does not lie. It never did. It only waited for someone to watch long enough.\" She looks at the altar, where the Sealing Jade should be and is not, because it has been on a lacquer tray in the sutra hall for fifteen years. \"I wrote my name beneath hers that night. Tonight I would write it again, if you had not stood there and asked me to remember why.\"",
      "The bell has stopped ringing. The courtyard is silent except for the murmur of the disciples who have gathered at the doors, and the sound of Ren Qiao’s boots as he walks toward the hall with a lantern in his hand. The Elder turns to you and lifts her chin. Her eyes are grey and bright and utterly steady.",
      "\"The Law will decide now,\" she says. \"It always does, eventually. But this time, the Law will have to decide with the whole truth on the table, and not one page of it hidden in a drawer. Come, Wanderer. The judgment is waiting for you, and so is Mengjiao, if she has chosen to come back up the stair.\"",
    ],
    interjections: [
      {
        when: [{ kind: "said", scenario: "THREATEN", min: 2 }],
        line: "Threats again, on the night of the sealing. You have reached for the same weapon so often that I could draw it for you. I am no longer afraid of it. I am only tired of watching you hold it.",
      },
    ],
    choices: [
      {
        id: "follow_elder_to_judgment",
        label: "Follow her out through the great doors and into the courtyard, where the judgment is waiting.",
        next: "judgment",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "ask_about_mengjiao_return",
        label: "Ask her whether Mengjiao is coming up the stair, and whether she will be allowed to stand before the Law.",
        next: "judgment",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "asked_return" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "stay_by_altar",
        label: "Stay beside the empty altar a moment longer, and bow before the cracked stone one last time.",
        next: "judgment",
        npcScenario: "HONOR_ANCESTORS",
        effects: [{ kind: "setFlag", flag: "bowed_at_altar" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "turn_to_ren",
        label: "Turn toward Ren Qiao and ask him to carry the lantern ahead of you, so the courtyard can see the way.",
        next: "judgment",
        effects: [{ kind: "setFlag", flag: "asked_ren_lantern" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
];
