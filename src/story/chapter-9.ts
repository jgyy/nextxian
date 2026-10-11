import type { Scene } from "@/engine/types";

/**
 * Chapter Nine: The Mist Remembers Mengjiao. The player climbs out of the abyss
 * carrying the names, and the sect must decide whether to hear them.
 */
export const chapterNine: Scene[] = [
  {
    id: "mist_remembers",
    title: "Chapter Nine: The Mist Remembers Mengjiao",
    paragraphs: [
      "The climb back up the abyss path takes longer than the descent, and the mist does not let you hurry. It curls around your ankles and then your knees, and every few steps you hear the fourteen voices again, faint and patient, asking to be counted. You count them. You say their names aloud as you go, not because the mist requires it but because you are afraid that if you stop saying them they will fall back into the red and be forgotten.",
      "When you reach the top of the cleft, the sky is grey and the wind is cold. The rope is still tied to the iron ring, and Ren Qiao is sitting beside it, his lantern unlit, his shoulders hunched inside his cloak. He stands when he sees you. He does not ask what you found. He only looks at your hands, which are bleeding faintly from the stone, and then at the grey dust clinging to your sleeves, and nods as if you have passed a test he did not expect you to pass.",
    ],
    choices: [
      {
        id: "count_voices_climbing",
        label: "Count the voices aloud as you climb, so that none of them is left behind.",
        tone: "mercy",
        next: "mist_remembers_2",
      },
      {
        id: "ask_mist_be_quiet",
        label: "Ask the mist to be quiet while you climb up through the grey.",
        tone: "quiet",
        next: "mist_remembers_2",
      },
      {
        id: "push_harder_climb",
        label: "Tell yourself that the climb is only a matter of breath, and push harder.",
        tone: "force",
        next: "mist_remembers_2",
      },
      {
        id: "which_name_forgotten",
        label: "Think back over the names and ask which of them you would have forgotten.",
        tone: "inquiry",
        next: "mist_remembers_2",
      },
    ],
  },
  {
    id: "mist_remembers_2",
    title: "Three Bells",
    paragraphs: [
      "\"The bell has rung three times since you went down,\" he says. \"Once for the masters, who are hiding in their rooms. Once for the disciples, who are standing in the courtyard waiting to see if you come back alive. And once for the Elder, who has not left her hall since the tribunal. She asked me to tell you that she is waiting. She did not say for what.\"",
      "You walk with him back toward the Law Hall. The disciples in the courtyard watch you come down the path, and their faces change as you pass. Some look away. Some stare. A few bow their heads, very slightly, the way one bows to a person who has been through a terrible ordeal and has come back with something valuable in their hands. You do not know whether they know what you carry, but they know that you are carrying something.",
    ],
    choices: [
      {
        id: "ask_elder_exact_words",
        label: "Ask Ren Qiao what the Elder said, word for word, as near as he can recall.",
        tone: "inquiry",
        next: "mist_remembers_3",
      },
      {
        id: "share_names_with_warden",
        label: "Tell Ren Qiao the names you carry, so that he can hear them too.",
        tone: "mercy",
        next: "mist_remembers_3",
      },
      {
        id: "tell_warden_ledge_truth",
        label: "Tell Ren Qiao exactly what you found at the ledge, without softening it.",
        tone: "truth",
        next: "mist_remembers_3",
      },
      {
        id: "walk_ahead_silent",
        label: "Walk ahead of him across the courtyard and say nothing to the staring disciples.",
        tone: "quiet",
        next: "mist_remembers_3",
      },
    ],
  },
  {
    id: "mist_remembers_3",
    title: "The Doors of the Law Hall",
    paragraphs: [
      "The Law Hall is quiet. Its great doors stand open, and the lamps inside have been lit for the whole night. At the far end of the hall, the Elder sits in her jade chair, hands folded in her lap, and she is not looking at the door. She is looking at the empty altar, as though it might speak first if she waited long enough.",
    ],
    choices: [
      {
        id: "carry_names_in",
        label: "Walk straight into the Law Hall with the names still on your lips, and do not stop until you reach her.",
        tone: "truth",
        next: "mist_names_read",
        effects: [{ kind: "setFlag", flag: "carried_names" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "wait_at_door",
        label: "Stop on the threshold and wait for the Elder to look up before you say a word.",
        tone: "mercy",
        next: "mist_wanru_message",
        effects: [{ kind: "setFlag", flag: "waited_at_door" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "tell_ren_first",
        label: "Tell Ren Qiao what Mengjiao said about the Law, and ask him to repeat it to the wardens.",
        tone: "truth",
        next: "mist_names_read",
        npcScenario: "REPORT_LEDGER",
        effects: [{ kind: "setFlag", flag: "told_ren_names" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "rest_before_hall",
        label: "Sit on the steps for a moment and let the mist drain from your lungs before you speak.",
        tone: "quiet",
        next: "mist_wanru_message",
        effects: [{ kind: "addStat", stat: "qi", amount: 4 }],
      },
    ],
  },
  {
    id: "mist_names_read",
    title: "The Names Read Aloud",
    paragraphs: [
      "You stand before the jade chair and begin to speak. You do not raise your voice. You say the first name, which is the boy of twelve who wanted to be a gardener, and then the second, the poet who wrote on the backs of ledger pages. Behind you the wardens shift their weight. The masters have come out of their rooms to stand at the foot of the dais, and their faces are pale in the lamplight.",
      "You read all fourteen names, the last of them the girl who said she was not dead, only listening. Then you read the fifteenth, which no ledger of the Law ever carried in the Registrar’s hand. You read Mengjiao’s name last, and when you say it the Elder’s hands tighten on the arms of her chair until the knuckles whiten, and then, very slowly, they relax.",
      "\"Enough,\" says Hu Jingyan. His voice is weak, but it carries the old authority of the Law. \"The names are the Law’s to keep. They are not an outsider’s to read aloud in the Law Hall.\"",
    ],
    choices: [
      {
        id: "read_names_faster",
        label: "Read the names faster, so that the masters have no chance to interrupt you.",
        tone: "force",
        next: "mist_names_read_2",
      },
      {
        id: "read_names_slowly",
        label: "Read the names slowly, pausing after each one for the family who will never hear it.",
        tone: "mercy",
        next: "mist_names_read_2",
      },
      {
        id: "ask_hu_why_law_keeps",
        label: "Ask Hu Jingyan why he thinks the names belong to the Law.",
        tone: "inquiry",
        next: "mist_names_read_2",
      },
      {
        id: "admit_asked_to_read",
        label: "Admit to the hall that you have read these names only because someone asked you to.",
        tone: "truth",
        next: "mist_names_read_2",
      },
    ],
  },
  {
    id: "mist_names_read_2",
    title: "Read Every One",
    paragraphs: [
      "The Elder does not look at him. \"The names are not the Law’s,\" she says. \"They were never the Law’s. They belonged to the people who wore them, and to the people who loved them, and to the mist, which has been keeping them for fifteen years in the only memory the sect would not burn.\" She turns her head toward the masters, and for the first time her voice rises. \"Read the rest, Wanderer. Read every one.\"",
    ],
    choices: [
      {
        id: "read_all_fifteen",
        label: "Read all fifteen names again, slowly, looking at each master as you say the name of the disciple they sealed.",
        tone: "truth",
        next: "mist_masters_fall",
        npcScenario: "APPEAL_TO_DISCIPLES",
        effects: [{ kind: "setFlag", flag: "read_all_fifteen" }, { kind: "addStat", stat: "karma", amount: 5 }],
      },
      {
        id: "stop_at_mengjiao",
        label: "Stop after Mengjiao’s name and let the silence in the hall say the rest for you.",
        tone: "mercy",
        next: "mist_wanru_message",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "stopped_at_mengjiao" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "accuse_masters_names",
        label: "Name each master who signed the orders, and say what their seal did to every disciple on the list.",
        tone: "force",
        next: "mist_masters_fall",
        npcScenario: "SHOW_SEALING_ORDER",
        effects: [{ kind: "setFlag", flag: "named_masters" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "read_and_kneel",
        label: "Read the names and then kneel at the foot of the dais, so that the Elder can see your face while you speak.",
        tone: "mercy",
        next: "mist_masters_fall",
        npcScenario: "HONOR_ANCESTORS",
        effects: [{ kind: "setFlag", flag: "knelt_reading" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
    ],
  },
  {
    id: "mist_masters_fall",
    title: "The Masters Break",
    paragraphs: [
      "The masters do not break at once. They break the way old walls break, slowly and then all at once. First Hu Jingyan sits down on the nearest step with his teacup still in his hand, and his shoulders begin to shake. Then the broad masters with the gold clasps look at one another and turn their faces toward the door, as if the answer might be written on the lintel. One of them steps back. Then another.",
      "Lian Sheng alone does not move. She stands at the foot of the dais with her hands folded in front of her, and when the others begin to slip toward the courtyard she says, in a clear voice that cuts across the hall, \"Let them go. The Law is not run by its masters. It has always been run by the hand that signs, and we have all been signing for fifteen years.\" She looks at the Elder. \"You never once asked us to stop.\"",
    ],
    choices: [
      {
        id: "ask_hu_what_drinking",
        label: "Watch Hu Jingyan’s cup shake and ask what he has been drinking all these years.",
        tone: "inquiry",
        next: "mist_masters_fall_2",
      },
      {
        id: "let_masters_go",
        label: "Stand aside and let the masters go, since the names have already been spoken.",
        tone: "mercy",
        next: "mist_masters_fall_2",
      },
      {
        id: "masters_answer_names",
        label: "Shout to the masters that they will answer for every name they signed.",
        tone: "force",
        next: "mist_masters_fall_2",
      },
      {
        id: "let_elder_decide_masters",
        label: "Say nothing, and let the Elder decide what is to be done with the masters.",
        tone: "quiet",
        next: "mist_masters_fall_2",
      },
    ],
  },
  {
    id: "mist_masters_fall_2",
    title: "Doors and Masters",
    paragraphs: [
      "The Elder stands. She is smaller than she was when the tribunal began, and yet she seems taller. \"No,\" she says. \"I did not. I wrote my own name beneath theirs and told myself that was enough.\" Her voice cracks on the last word, and she does not try to mend it.",
      "The courtyard outside has begun to murmur. You can hear the disciples moving closer to the doors, their footsteps soft on the white stone. A few of them are calling names, the same names you read, and the calling spreads through the crowd like a fire moving through dry grass. The mist is rising behind them, slowly, pouring over the courtyard wall in red-tinged waves that taste of iron and tears.",
    ],
    choices: [
      {
        id: "stop_lian_leaving",
        label: "Step between Lian Sheng and the door, and ask her to stay and answer for the orders she witnessed.",
        tone: "force",
        next: "mist_wanru_message",
        npcScenario: "CHALLENGE_LAW_WITH_ELDER",
        effects: [{ kind: "setFlag", flag: "stopped_lian" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "let_masters_go",
        label: "Let the masters walk out into the mist and tell the Elder that justice can wait until the morning.",
        tone: "mercy",
        next: "mist_wanru_message",
        effects: [{ kind: "setFlag", flag: "let_masters_go" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "shut_the_doors",
        label: "Close the great doors of the Law Hall before the mist can come inside, and bar them with your own hands.",
        tone: "force",
        next: "mist_wanru_message",
        effects: [{ kind: "setFlag", flag: "shut_doors" }, { kind: "addStat", stat: "qi", amount: 5 }],
      },
      {
        id: "open_doors_wide",
        label: "Throw the doors wide open so the disciples can see the Elder and hear what she has to say.",
        tone: "truth",
        next: "mist_wanru_message",
        npcScenario: "SWEAR_OATH",
        effects: [{ kind: "setFlag", flag: "opened_doors" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
    ],
  },
  {
    id: "mist_wanru_message",
    title: "The Message for Wanru",
    paragraphs: [
      "When the hall is quiet again, you kneel before the jade chair and deliver the message exactly as Mengjiao gave it to you. You say that the names are still in the abyss, and that they are waiting to be read in the Law Hall. You say that the mist is not hungry. It is counting the holes the Law has made, and every name the Law erases makes another hole. You say that Mengjiao does not want to be rescued. She wants to be heard.",
      "The Elder listens with her eyes closed. When you finish, she sits for a long time without speaking. The lamps burn. The mist rustles at the open door. At last she opens her eyes, and they are wet, but her face is perfectly still.",
    ],
    choices: [
      {
        id: "repeat_message_exact",
        label: "Repeat Mengjiao’s message word for word, without adding anything of your own.",
        tone: "truth",
        next: "mist_wanru_message_2",
      },
      {
        id: "bring_grief_and_words",
        label: "Tell the Elder that you have brought her sister’s grief as well as her sister’s words.",
        tone: "mercy",
        next: "mist_wanru_message_2",
      },
      {
        id: "ask_roof_stories",
        label: "Ask the Elder what she and her sister used to talk about on the roof.",
        tone: "inquiry",
        next: "mist_wanru_message_2",
      },
      {
        id: "keep_last_words_back",
        label: "Keep Mengjiao’s last words to yourself, and say only what the mist allows.",
        tone: "deceit",
        next: "mist_wanru_message_2",
      },
    ],
  },
  {
    id: "mist_wanru_message_2",
    title: "The Sealing Order",
    paragraphs: [
      "\"She always did talk to the mist,\" Elder Su says softly. \"When we were children, she would sit on the roof and tell it stories until the stars came out. I used to think she was mad. I used to think the Law was right to watch her.\" She lifts one hand and lets it fall. \"Tell her I heard the message. Tell her I will read the names. Tell her it is not enough, and that I know it is not, and that I will read them anyway, every night, for the rest of my life.\"",
      "Then she reaches into the sleeve of her robe and takes out a thin folded paper, yellow with age. She holds it out to you without looking at it. \"This is the sealing order,\" she says. \"The original. The one the masters never sent to the archive. My name is on it. Hers is not. I have carried it for fifteen years, in case someone ever asked me to prove I was there.\"",
    ],
    choices: [
      {
        id: "take_original_order",
        label: "Take the original sealing order from her hand and hold it up so the lamps can show every line.",
        tone: "truth",
        next: "sealing_night",
        npcScenario: "REPORT_LETTER",
        effects: [{ kind: "setFlag", flag: "took_original_order" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "tell_elder_truth_message",
        label: "Tell her that you do not need the paper, because you already know exactly what she did that night.",
        tone: "truth",
        next: "sealing_night",
        npcScenario: "HONEST_ACCOUNT",
        effects: [{ kind: "setFlag", flag: "knows_sealing_truth" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "ask_to_see_sealing",
        label: "Ask her to show you the Sealing as she remembers it, from the first bell to the last, so you can witness it too.",
        tone: "inquiry",
        next: "sealing_night",
        npcScenario: "ASK_TABLET",
        effects: [{ kind: "setFlag", flag: "asked_to_witness" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "give_order_back",
        label: "Gently refuse the paper and tell her to keep it until she can show it to the sect herself.",
        tone: "mercy",
        next: "sealing_night",
        npcScenario: "ACCEPT_PUNISHMENT",
        effects: [{ kind: "setFlag", flag: "returned_order" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "take_the_ferry",
        label: "Walk down to the black boat at the edge of the still water, and ask what it carries across before you enter the hall.",
        tone: "quiet",
        next: "ferry_dock",
      },
    ],
  },
];
