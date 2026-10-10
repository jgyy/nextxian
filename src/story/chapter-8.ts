import type { Scene } from "@/engine/types";

/**
 * Chapter Eight: The Second Descent. The player returns to the abyss path, back to
 * the ledge where Gu Hanzhen once stood, and finds Su Mengjiao alive in the mist.
 */
export const chapterEight: Scene[] = [
  {
    id: "descent_return",
    title: "Chapter Eight: The Second Descent",
    paragraphs: [
      "The verdict is not a sentence. It is a task, and the Elder gives it to you in the Law Hall after the bell has gone quiet, with the disciples still murmuring in the courtyard below. You are to return to the abyss path, descend to the place where the rock splits, and bring back whatever remains of Su Mengjiao. If she cannot be brought back alive, the Law will accept a name cut into a stone. If she can, the Law will decide what to do with her.",
      "The Elder does not say the last part warmly. She says it the way a judge reads the terms of an exile, with the careful precision of someone who has rehearsed the words so often that they no longer carry any feeling. But when she hands you the bronze key from the sutra door, and the grey sealing order with her own signature crossed out, her fingers linger on your wrist for one heartbeat longer than she needs to.",
      "Ren Qiao is waiting at the top of the abyss path with a rope coiled over his shoulder and a fresh lantern in his hand. He has changed his cloak and his face is hard, but he gives you the lantern without a word, and when you take it he says only, \"The mist knows the way better than I do. Let it lead you, and do not let it talk too much.\"",
      "The abyss path begins where the mountain splits, exactly as it did on the day you first came to find Gu Hanzhen. The cleft is wider than you remember. Red mist pours up from its depths in slow, heavy breaths, and the air is thick with the iron smell of blood that has been left to dry on stone. The path winds down the edge of the cleft, narrow and steep, with no railing and no light except the one you carry.",
      "Gu Hanzhen is not with you. The Elder kept him in the Law Hall, under guard, with a promise that his name would be read aloud at the next session of the tribunal. You have her word on it. You are not sure yet whether that is worth anything.",
    ],
    choices: [
      {
        id: "take_rope",
        label: "Tie the rope around your waist and fasten the other end to the iron ring at the top of the path.",
        next: "descent_mist",
        effects: [{ kind: "setFlag", flag: "took_rope" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "trust_lantern",
        label: "Leave the rope behind and trust the lantern and the mist to show you the way down.",
        next: "descent_mist",
        effects: [{ kind: "addStat", stat: "qi", amount: 4 }],
      },
      {
        id: "ask_ren_to_follow",
        label: "Ask Ren Qiao to follow you down as far as the first ledge, and tell him to hold the rope.",
        next: "descent_ledge",
        npcScenario: "ACCEPT_DESCENT",
        effects: [{ kind: "setFlag", flag: "ren_followed" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "descend_at_once",
        label: "Start down the path at once, before the Elder can change her mind about the terms.",
        next: "descent_mist",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
    ],
  },
  {
    id: "descent_mist",
    title: "Through the Red Mist",
    paragraphs: [
      "The mist closes over you within twenty steps. It is not like ordinary fog. It is thick and warm and it clings to the skin, leaving a film of dampness that tastes faintly of copper. The lantern throws a small globe of yellow light around you, and beyond that globe there is nothing but drifting red, slow and endless, like the inside of a closed eyelid.",
      "The path has no markers. You feel your way along it with one hand against the rock, counting steps, listening to the water somewhere far below. After a long time the sound changes. It is not water anymore. It is breathing, deep and slow, and each breath comes up through the cleft and presses against your ears until your own pulse seems to slow to match it.",
      "Voices drift out of the mist. They are faint at first, then clearer, and then you can hear them as if they were speaking inside your skull. There are fourteen of them. You can count them, one for each name on the ledger, and each voice is a little younger than the last, as if the Law had been sending its children down the path in order of their birth. They are not asking for help. They are only saying their own names, over and over, in the same flat tone a clerk uses when reading a register aloud.",
      "Among the voices, one is singing. It is the same tune you heard in the vault, wordless and low, and it grows louder as you descend until it is the only sound left in the mist. You have heard that tune before, on a roof beneath the stars, sung by a girl with a silver comb in her hair.",
      "The path bends sharply to the left, and the mist thins for a moment. Ahead, you can see a ledge the width of two shoulders, and on it a figure is standing with its back to you, looking out over the cleft as though it is waiting for someone to come up the path from the other side.",
    ],
    choices: [
      {
        id: "walk_to_ledge",
        label: "Walk carefully along the path to the ledge and call out before you reach the figure.",
        next: "descent_ledge",
        effects: [{ kind: "setFlag", flag: "saw_figure_on_ledge" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "listen_to_names",
        label: "Stop and listen to the fourteen voices, counting every name until they fall silent.",
        next: "descent_voices",
        effects: [{ kind: "setFlag", flag: "listened_to_names" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "hum_back",
        label: "Hum the same wordless tune back into the mist, as if you were answering an old friend.",
        next: "descent_voices",
        effects: [{ kind: "setFlag", flag: "hummed_back" }, { kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "silence_yourself",
        label: "Cover your ears, close your eyes, and walk to the ledge without listening to anything at all.",
        next: "descent_ledge",
        effects: [{ kind: "addStat", stat: "karma", amount: -1 }, { kind: "addStat", stat: "insight", amount: -2 }],
      },
    ],
  },
  {
    id: "descent_voices",
    title: "The Fourteen Names",
    paragraphs: [
      "You stop on the path, and the voices come closer. They gather in the mist around your lantern, pressing their names against the glass until the light flickers with each one. The first is a boy of twelve who wanted to be a gardener. The second is a woman who wrote poetry on the backs of ledger pages. The third is a man who once saved a warden from drowning in the river and was sent down the path for it, because he had broken a rule about bathing in the Law’s water.",
      "You listen to all fourteen. It takes a long time. Each one has a small story attached to its name, a single detail the ledger never recorded: a favourite brush, a dislike of cold rice, a song their mother used to sing at the gate. When the last voice falls silent, you realise that you are weeping, and that the mist has turned from red to a soft, clean grey around your feet.",
      "The fourteenth name belongs to a girl of fifteen who was sent down the path on the night of the Sealing, only a few hours before Mengjiao. She speaks only once, and what she says is not a name. She says: The Elder counted me too, but she counted me wrong. I was not dead. I was only listening.",
      "The mist settles. The voices are gone, but the grey remains, pooled around your boots like a tide that has gone out and left its water behind. Ahead, the ledge is clear, and the figure standing on it has turned around at last. It is not a ghost. It is a living woman in old Azure Cloud grey, with a braid over one shoulder and a silver comb in her hair, and she is smiling at you as though she has been waiting all her life for someone to finally hear her.",
    ],
    choices: [
      {
        id: "walk_to_mengjiao",
        label: "Walk the last few steps to the ledge and stand face to face with Su Mengjiao.",
        next: "descent_mengjiao",
        effects: [{ kind: "setFlag", flag: "met_mengjiao_grey" }, { kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "call_her_name",
        label: "Say her name aloud, the way the girl in the fourteenth voice did, without fear.",
        next: "descent_mengjiao",
        effects: [{ kind: "setFlag", flag: "said_mengjiao_name" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "keep_distance",
        label: "Stop at the edge of the grey and wait for her to speak first, as the mist taught you.",
        next: "descent_mengjiao",
        effects: [{ kind: "setFlag", flag: "waited_for_mengjiao" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "turn_back_now",
        label: "Turn around and climb back toward the surface, leaving the figure on the ledge alone.",
        next: "descent_mengjiao",
        effects: [{ kind: "setFlag", flag: "almost_left" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
    ],
  },
  {
    id: "descent_ledge",
    title: "The Ledge of Two Shoulders",
    paragraphs: [
      "The ledge is exactly as you remember it from the day you first came down the path to find Gu Hanzhen. The rock is still scarred with the marks of his sword. The mist still curls around its edges like black threads. A single bronze coin lies in a crack near the outer lip, bright and clean, and you recognise it as the twin of the one you found beside the wall of stone bells.",
      "Mengjiao is standing at the very edge, where a fall would be the end of everything. She is not afraid of it. She is looking down into the cleft with her chin lifted, and her braid moves slightly in the rising warmth of the air. In the dim light her face looks younger than the Elder’s, and yet it is the same face, shaped by the same bones, marked by the same stubbornness.",
      "\"You came down the path,\" she says, without turning. \"Wanru sent you. I can tell from your shoulders. She always stood with her shoulders squared when she was ordered to do something she hated, and you have been carrying that same stance since you arrived. Does it hurt you yet?\"",
      "You say that it does, and she laughs softly, a warm sound that does not match the grey around her. \"Good,\" she says. \"Pain is the only proof we have that we are still listening. The Law forgot that long ago. It counts names and forgets the people who wore them.\"",
      "She turns. Her eyes are dark and clear, and in them there is nothing of the wild thing the Law described in its ledgers. She looks tired, the way a long-distance runner looks tired, carefully and without complaint. \"I have been down here for fifteen years,\" she says. \"Keeping the seal the only way I know how. Would you like to see how?\"",
    ],
    choices: [
      {
        id: "ask_how_she_keeps_seal",
        label: "Ask her how she has kept the seal in place for fifteen years without the jade.",
        next: "descent_mengjiao",
        effects: [{ kind: "setFlag", flag: "asked_how_seal" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "ask_about_wanru",
        label: "Ask her whether she still thinks of her sister, and whether she knows what the Elder has done.",
        next: "descent_mengjiao",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "asked_about_wanru" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "show_her_coin",
        label: "Hold out the bronze coin you found in the wall of bells, and watch her face when she sees it.",
        next: "descent_mengjiao",
        effects: [{ kind: "setFlag", flag: "showed_coin" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "draw_steel",
        label: "Draw your sword and tell her you were sent to bring her back by force if necessary.",
        next: "descent_mengjiao",
        npcScenario: "THREATEN",
        effects: [{ kind: "setFlag", flag: "drew_steel" }, { kind: "addStat", stat: "karma", amount: -6 }],
      },
    ],
  },
  {
    id: "descent_mengjiao",
    title: "Su Mengjiao",
    paragraphs: [
      "She leads you to a hollow in the cliff face, a small cave lined with lotus petals of pale green jade. The petals have been arranged in a spiral, and in the centre of the spiral sits a stone bowl filled with red water. In the water, a single shard of pale jade floats, identical in shape and colour to the one you carried up from the vault. Mengjiao kneels beside the bowl and lays her palm flat on the water. The mist around the cave stills at once, as if someone has held up a hand in a crowded room.",
      "\"This is the other half,\" she says. \"The Law broke the Sealing Jade on the night of the first sealing, because the masters could not agree which half to keep. They kept the altar piece, and they sent the other half down the path, with the first living Su to be sacrificed. That was me. I was supposed to hold the other half in my palm until my heart stopped. I did not stop. I learned to listen instead.\"",
      "The water in the bowl ripples. Images rise from it, faint and fleeting: the altar in the Law Hall, the masters at their desks, the Elder at her window with a silver comb in her hand. The mist answers each image with a soft, low note, and the note sounds like forgiveness, though you are not sure whether it is forgiving her or the Law.",
      "\"The seal does not need a body,\" Mengjiao says. \"It needs a voice. Someone who will speak the names of the sealed every night, so the mist knows it has not been forgotten. I have been doing it for fifteen years. The Law has been doing the opposite. Every name they erase is a hole in the seal. That is why the mist is rising. It is not hungry. It is counting the holes.\"",
      "She looks up at you, and for the first time her voice shakes. \"Wanru will not come down here,\" she says. \"She is too proud, and too frightened of the height. But you can bring her a message. You can tell her that the names are still here, and that they are waiting to be read aloud in the Law Hall. Will you do that?\"",
    ],
    choices: [
      {
        id: "promise_message",
        label: "Promise Mengjiao that you will carry her message to the Elder, word for word, and read the names yourself if you must.",
        next: "mist_remembers",
        npcScenario: "SWEAR_OATH",
        effects: [{ kind: "setFlag", flag: "promised_message" }, { kind: "addStat", stat: "karma", amount: 5 }],
      },
      {
        id: "offer_to_stay",
        label: "Offer to stay beside her in the cave and speak the names with her every night.",
        next: "mist_remembers",
        effects: [{ kind: "setFlag", flag: "offered_to_stay" }, { kind: "addStat", stat: "qi", amount: 6 }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "call_elder_through_shard",
        label: "Hold the shard you carried up from the vault against the shard in the bowl and call the Elder’s name into the water.",
        next: "mist_remembers",
        npcScenario: "SHARD_CALL",
        effects: [{ kind: "setFlag", flag: "called_through_shard" }, { kind: "addStat", stat: "insight", amount: 6 }],
      },
      {
        id: "refuse_to_listen",
        label: "Tell Mengjiao you came to bring her out of the mist, not to hear a story about a jade bowl.",
        next: "mist_remembers",
        npcScenario: "REFUSE_TASK",
        effects: [{ kind: "setFlag", flag: "refused_to_listen" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
    ],
  },
];
