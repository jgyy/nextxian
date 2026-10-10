import type { Scene } from "@/engine/types";

/**
 * Chapter Six: The Jade Eye. The player climbs out of the sutra stair into the
 * memorial, where the Elder waits beside the tablets and the Sealing is finally spoken of.
 */
export const chapterSix: Scene[] = [
  {
    id: "jade_eye_return",
    title: "Chapter Six: The Jade Eye",
    paragraphs: [
      "The stair brings you up through the floor of the memorial, through a trapdoor you did not know existed, and you come out on your knees among the tablets. The black stone glows faintly with old qi. The incense has burned down to grey stubs, and the air tastes of cedar and cold ash, exactly as it did on the first day, when you were still a stranger climbing the sect’s steps in the rain.",
      "Elder Su Wanru is standing at the far end of the hall, beside the empty altar where the Sealing Jade once rested. She has not changed her robes. Her hair is still loose, though she has pinned one side of it back with the silver comb, as if she got halfway through dressing and then forgot the rest. The lamp beside her throws her shadow long across the cracked floor.",
    ],
    choices: [
      {
        id: "rise_and_approach",
        label: "Rise slowly and walk toward the Elder without speaking a word.",
        tone: "quiet",
        next: "jade_eye_return_2",
      },
      {
        id: "ask_about_mirror",
        label: "Ask her at once whether the mirror in the sutra hall has been speaking to her too.",
        tone: "inquiry",
        next: "jade_eye_return_2",
      },
      {
        id: "hide_burned_fingers",
        label: "Keep your burned fingers hidden in your sleeves, so she cannot see them.",
        tone: "deceit",
        next: "jade_eye_return_2",
      },
      {
        id: "admit_sutra_spoke",
        label: "Tell her the sutra hall spoke to you, and that you did not choose to listen.",
        tone: "truth",
        next: "jade_eye_return_2",
      },
    ],
  },
  {
    id: "jade_eye_return_2",
    title: "The Scraped Hollow",
    paragraphs: [
      "She does not turn when you rise. She is looking at the tablet nearest the altar, and you can see the name on it even from here, carved in the Law’s straight script and then painted over in white. The white paint has been scraped away around one character, leaving a small bright hollow in the middle of the name.",
      "\"You came up the stair,\" she says. \"The sutra hall does not let people leave without a price, so I have assumed you paid one. I can see it in your hands. You are holding your fingers as if they had been burned.\" She finally turns, and her grey eyes move over you slowly, checking each part of you the way she checked the ledgers on the first day. \"Did she speak to you?\"",
    ],
    choices: [
      {
        id: "show_burned_fingers",
        label: "Admit that you paid the price, and show her the burns on your fingers.",
        tone: "truth",
        next: "jade_eye_return_3",
      },
      {
        id: "ask_is_she_hidden",
        label: "Ask her plainly whether Mengjiao is the one she has been hiding from.",
        tone: "inquiry",
        next: "jade_eye_return_3",
      },
      {
        id: "kneel_to_tablets",
        label: "Kneel to the tablets to show her that you have not come here to fight.",
        tone: "mercy",
        next: "jade_eye_return_3",
      },
      {
        id: "law_cannot_decide_sister",
        label: "Tell her the Law does not get to decide who is allowed to speak to a sister.",
        tone: "force",
        next: "jade_eye_return_3",
      },
    ],
  },
  {
    id: "jade_eye_return_3",
    title: "Did She Speak to You?",
    paragraphs: [
      "You have a choice in how to answer, and it matters. The Elder has been watching you through the jade eye, and she knows the sutra hall better than any living disciple. Anything you say now she will weigh against what she has already seen. A lie will be measured. A truth will be measured too, but it may be given more weight, if you can find the courage to say it plainly.",
    ],
    choices: [
      {
        id: "tell_of_mengjiao",
        label: "Tell her that yes, Mengjiao spoke to you, and describe the girl on the roof beneath the stars.",
        tone: "truth",
        next: "jade_eye_tablets",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "told_elder_mengjiao" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "deny_voice",
        label: "Tell her that no one spoke to you, and that the sutra hall is only a room full of red water.",
        tone: "deceit",
        next: "jade_eye_tablets",
        npcScenario: "LIE_ABOUT_SEAL",
        effects: [{ kind: "setFlag", flag: "denied_voice" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "kneel_at_tablets",
        label: "Kneel at the tablets without saying a word, and let the silence speak for you.",
        tone: "mercy",
        next: "jade_eye_tablets",
        npcScenario: "HONOR_ANCESTORS",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "ask_about_tablet",
        label: "Ask her why Mengjiao’s name has been painted over, and then scraped, as if someone could not decide.",
        tone: "inquiry",
        next: "jade_eye_tablets",
        npcScenario: "ASK_TABLET",
        effects: [{ kind: "setFlag", flag: "asked_about_tablet" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
    ],
  },
  {
    id: "jade_eye_tablets",
    title: "The Painted Name",
    paragraphs: [
      "The Elder walks to the tablet and stops in front of it. Close to, you can see the fine lines in her face that the lamplight usually hides. She has the look of someone who has been awake for two nights and has no intention of sleeping in the third. Her fingers rest on the edge of the stone, lightly, the way a person touches the shoulder of someone sleeping.",
      "\"The white paint was my doing,\" she says. \"Fifteen years ago, on the morning after the Sealing. The Law Hall sent a clerk to repaint the memorial, and he asked me which names should be covered. I told him to cover all of them. Then I came back at night with a knife and scraped one of them clean again, because I could not stand to see the paint on her.\"",
      "The hollow in the paint is the shape of two characters. You can read them now, faintly, in the grain of the stone beneath. Su Mengjiao. The last name is worn almost smooth, and the first character has been cut so many times that the blade has gone deeper than the carving was meant to go.",
    ],
    choices: [
      {
        id: "ask_why_first_char_stayed",
        label: "Ask her why the white paint did not cover the first character as well.",
        tone: "inquiry",
        next: "jade_eye_tablets_2",
      },
      {
        id: "tell_her_you_heard_voice",
        label: "Tell her you have heard her sister’s voice in the sutra hall.",
        tone: "truth",
        next: "jade_eye_tablets_2",
      },
      {
        id: "let_her_think_unknown",
        label: "Let her believe you have never heard the name before today.",
        tone: "deceit",
        next: "jade_eye_tablets_2",
      },
      {
        id: "demand_why_scraped",
        label: "Demand that she explain why she came back at night and scraped the name clean.",
        tone: "force",
        next: "jade_eye_tablets_2",
      },
    ],
  },
  {
    id: "jade_eye_tablets_2",
    title: "Bowing Every Morning",
    paragraphs: [
      "\"Every disciple of the Law learns to bow before the tablets,\" she says. \"We are taught that the dead are patient, that they will wait until we are ready to speak their names again. I have bowed before this one every morning for fifteen years. I have never once said her name.\" Her voice does not break. It simply stops, the way a bell stops when someone puts a hand on it.",
      "The silence stretches. Somewhere in the courtyard beyond the memorial, a warden’s lantern goes by, and its light moves across the tablets in a slow arc, lighting up one name after another before it fades. For a moment the hollow in the paint catches the glow and looks almost like a wound that is trying to close.",
    ],
    choices: [
      {
        id: "press_for_sealing_night",
        label: "Ask her to tell you exactly what happened on the night of the Sealing, from the first bell to the last.",
        tone: "inquiry",
        next: "jade_eye_sealing_night",
        effects: [{ kind: "setFlag", flag: "asked_sealing_night" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "show_sisters_letter",
        label: "Take out the letter For Wanru, Read Last, and hold it out to her without speaking.",
        tone: "truth",
        next: "jade_eye_letter",
        effects: [{ kind: "setFlag", flag: "showed_letter_elder" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "say_nothing_tablet",
        label: "Stand beside her and look at the hollow in the paint for as long as she does.",
        tone: "quiet",
        next: "jade_eye_sealing_night",
        effects: [{ kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "leave_tablet",
        label: "Tell her the Law can keep its paint and its silence, and walk toward the door of the memorial.",
        tone: "force",
        next: "jade_eye_bell",
        effects: [{ kind: "addStat", stat: "karma", amount: -3 }],
      },
    ],
    interjections: [
      {
        when: [
          { kind: "flag", flag: "lied_about_seal" },
          { kind: "flag", flag: "lied_to_eye" },
        ],
        line: "Two lies, Wanderer. One at my gate about the jade, and one to my mirror in the sutra hall. I have been counting them the way the masters count the sealing names. Do not give me a third to count.",
      },
    ],
  },
  {
    id: "jade_eye_sealing_night",
    title: "The Night of the Sealing",
    paragraphs: [
      "She tells it with her eyes on the altar, and her voice is so flat it is almost a recitation. Fifteen years ago, the Sealing Jade was set into the cracked altar by the Law Hall’s oldest masters. The mist below the sect had been rising for a season, and the masters wanted a living disciple to stand at the top of the abyss path and hold the seal in place with her own qi.",
      "Mengjiao was chosen. She was the best of the Su line and the most stubborn, and she had already spent a year studying the mountain’s wounds in secret. The masters did not ask her opinion. They asked the Law Hall’s Registrar, who was Su Wanru then and not yet Elder, to sign the orders that would send fourteen others down the path with the jade. She signed all fourteen, and the masters sealed Mengjiao’s order themselves, because the order said the sect would survive only if one of the Su line paid the price.",
    ],
    choices: [
      {
        id: "ask_who_the_masters_were",
        label: "Ask who the masters were, and why none of them stood at the altar that night.",
        tone: "inquiry",
        next: "jade_eye_sealing_night_2",
      },
      {
        id: "say_not_sect_choice",
        label: "Tell her that the choice was never the sect’s to make, and that she knows it.",
        tone: "truth",
        next: "jade_eye_sealing_night_2",
      },
      {
        id: "stand_and_listen",
        label: "Stand quietly, the way disciples stand at a funeral, and listen to every word.",
        tone: "quiet",
        next: "jade_eye_sealing_night_2",
      },
      {
        id: "masters_must_answer",
        label: "Tell her that the masters should answer for the order, not the Elder alone.",
        tone: "force",
        next: "jade_eye_sealing_night_2",
      },
    ],
  },
  {
    id: "jade_eye_sealing_night_2",
    title: "The Ink That Would Not Flow",
    paragraphs: [
      "\"I did not know she had been studying the sutra,\" Elder Su says. \"I found out that night, when the masters brought her to the altar and she spoke to them in the Blood Lotus language. She said the seal could hold without a living body if someone would listen to the mist. The masters called her a heretic. They ordered the wardens to take her down the path in chains, and I was ordered to witness it.\"",
      "Her hands, which have rested calm against the tablet, begin to shake. She folds them behind her back so that you cannot see. \"Mengjiao looked at me from the top of the path,\" she says. \"She did not beg. She told me that I had always been the one who counted the bars. She said I should count her too, if I wanted to be accurate.\" A long breath. \"I wrote the number fourteen in the ledger that night. I did not write hers. I could not make the ink go down.\"",
    ],
    choices: [
      {
        id: "ask_last_words",
        label: "Ask her what Mengjiao said to her from the top of the path.",
        tone: "inquiry",
        next: "jade_eye_sealing_night_3",
      },
      {
        id: "believe_she_forgave",
        label: "Tell her you believe Mengjiao forgave her, even if the Law never did.",
        tone: "mercy",
        next: "jade_eye_sealing_night_3",
      },
      {
        id: "ink_proves_nothing",
        label: "Tell her the ink proves nothing, because the order was still signed.",
        tone: "force",
        next: "jade_eye_sealing_night_3",
      },
      {
        id: "let_lamp_burn_down",
        label: "Say nothing, and let the lamp burn down while she shakes.",
        tone: "quiet",
        next: "jade_eye_sealing_night_3",
      },
    ],
  },
  {
    id: "jade_eye_sealing_night_3",
    title: "Counting the Bars",
    paragraphs: [
      "The lamp flickers as a draft moves across the floor, and the shadows of the tablets stretch and bend. For a moment the Elder looks exactly as she must have looked on that night, frozen at the top of a path, watching someone she loves walk down into the mist.",
    ],
    choices: [
      {
        id: "accept_confession",
        label: "Tell her that the signature was not hers alone, and that the masters are as guilty as she is.",
        tone: "mercy",
        next: "jade_eye_confession",
        npcScenario: "SHOW_MERCY",
        effects: [{ kind: "setFlag", flag: "absolved_elder" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "ask_why_she_signed",
        label: "Ask her, without mercy, why she signed the order when she already knew what it would do.",
        tone: "force",
        next: "jade_eye_confession",
        npcScenario: "EXPOSE_HER_SECRET",
        effects: [{ kind: "setFlag", flag: "questioned_signature" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "tell_her_about_letter",
        label: "Tell her that Mengjiao wrote to her from the mist, and that the letter was held for her eyes alone.",
        tone: "truth",
        next: "jade_eye_letter",
        npcScenario: "REPORT_LETTER",
        effects: [{ kind: "setFlag", flag: "told_elder_letter" }],
      },
      {
        id: "walk_out_on_her",
        label: "Tell her that a confession is not an apology, and leave her standing beside the empty altar.",
        tone: "force",
        next: "jade_eye_bell",
        npcScenario: "INSULT_SECT",
        effects: [{ kind: "addStat", stat: "karma", amount: -5 }],
      },
    ],
  },
  {
    id: "jade_eye_letter",
    title: "The Letter Held for the Elder",
    paragraphs: [
      "The Elder takes the letter with both hands, the way a disciple takes a sacred scroll from a master. She does not unroll it. She simply holds it, feeling the thin paper and the silk fold around it, and her face slowly becomes younger in the lamplight, the face of a young woman who was told that her sister had gone out on the roof again and would not be coming back down.",
      "She reads it standing up. Her lips move on the words. When she reaches the line about the sun on the desk, she stops and presses her knuckles to her mouth. When she reaches the line about the stars, she closes her eyes and does not open them again for a long time. The lamp burns down a finger’s width before she speaks.",
    ],
    choices: [
      {
        id: "watch_her_read",
        label: "Watch her face as she reads, and say nothing to interrupt her.",
        tone: "quiet",
        next: "jade_eye_letter_2",
      },
      {
        id: "letter_never_for_law",
        label: "Tell her the letter was never meant to reach the Law Hall at all.",
        tone: "truth",
        next: "jade_eye_letter_2",
      },
      {
        id: "ask_sun_on_desk",
        label: "Ask her what the sun on the desk meant to the two of them, long ago.",
        tone: "inquiry",
        next: "jade_eye_letter_2",
      },
      {
        id: "slide_letter_into_robe",
        label: "Slide the letter back into your robe, and keep it until she asks for it.",
        tone: "deceit",
        next: "jade_eye_letter_2",
      },
    ],
  },
  {
    id: "jade_eye_letter_2",
    title: "The Last Page the Law Kept",
    paragraphs: [
      "\"This was sent to the Law Hall,\" she says. \"I can see the mark of the Index on the seal. Someone opened it, and someone sealed it again, and someone put it in a drawer where I would never be allowed to find it. I have been the Elder of this hall for twelve years, and I have been running my own house with a locked door.\"",
      "She turns over the last page and finds the blank space beneath the signature, the stain of the cup, the single word in the margin she had not noticed before. Read. She reads it aloud, her voice gone thin, and then she sets the letter down on the altar as gently as if it might break. \"I was supposed to read the last page,\" she says, very quietly. \"But I was never given the last page. The Law kept it.\"",
      "Behind her, the empty altar gleams in the lamplight. The shard you found in the vault is not there, and the altar’s cracked base looks suddenly more like a wound than a seat. You remember that the shard was never meant to be returned to it. You wonder whether she knows that too.",
    ],
    choices: [
      {
        id: "tell_her_about_shard",
        label: "Tell her about the shard in the vault, and that the Sealing Jade may never have been whole.",
        tone: "truth",
        next: "jade_eye_confession",
        effects: [{ kind: "setFlag", flag: "told_elder_shard" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "ask_for_last_page",
        label: "Ask her where the last page of the letter is, and whether she has ever looked for it.",
        tone: "inquiry",
        next: "jade_eye_confession",
        npcScenario: "ASK_TABLET",
        effects: [{ kind: "setFlag", flag: "asked_for_last_page" }],
      },
      {
        id: "keep_letter",
        label: "Take the letter back from the altar and fold it into your sleeve, as a witness.",
        tone: "deceit",
        next: "jade_eye_bell",
        effects: [{ kind: "setFlag", flag: "kept_letter" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "leave_letter_with_elder",
        label: "Leave the letter on the altar and tell her it belongs to the one who carries her name.",
        tone: "mercy",
        next: "jade_eye_bell",
        npcScenario: "ACCEPT_PUNISHMENT",
        effects: [{ kind: "setFlag", flag: "left_letter_elder" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
    ],
  },
  {
    id: "jade_eye_confession",
    title: "The Ledger in Her Room",
    paragraphs: [
      "Elder Su leads you out of the memorial and up the steps to the Law Hall, not through the great doors but through a narrow side passage lined with lamps. Her own private room lies at the end of it, a plain square chamber with a single window, a desk, a chair of pale jade, and a second ledger lying open on the desk. This one is smaller than the register, bound in faded grey cloth, and its pages are covered with the same neat signatures as the ledger of punishments.",
      "\"I kept two books,\" she says, \"because I could not decide which one was true. The first records the Law’s sentences. The second records what I signed, and what I felt when I signed it. I have written the second every night for fifteen years. I have never shown it to anyone.\"",
    ],
    choices: [
      {
        id: "ask_to_see_ledger",
        label: "Ask her to show you the second ledger, the one she has never shown anyone.",
        tone: "inquiry",
        next: "jade_eye_confession_2",
      },
      {
        id: "promise_keep_secret",
        label: "Promise to keep her second ledger from the tribunal, and from the masters.",
        tone: "mercy",
        next: "jade_eye_confession_2",
      },
      {
        id: "law_will_read_it",
        label: "Tell her the Law will read that ledger one day, whether she wants it to or not.",
        tone: "truth",
        next: "jade_eye_confession_2",
      },
      {
        id: "carry_ledger_away",
        label: "Lift the second ledger from the desk while she is looking out of the window.",
        tone: "deceit",
        next: "jade_eye_confession_2",
      },
    ],
  },
  {
    id: "jade_eye_confession_2",
    title: "Her Second Ledger",
    paragraphs: [
      "She opens it to a page near the middle. The handwriting is shaky, and the ink has run in places where tears have fallen. The entry is dated the night of the Sealing, and it contains only a few lines. I signed the fourteenth name. I did not sign hers. I wrote mine beneath it instead, so that someone would have to read it and know I was there too.",
      "\"The Law did not punish me for the omission,\" she says. \"It did not notice. It never looks at the Elder’s own signature, only at the names beneath it. I have been waiting fifteen years for someone to ask me why I wrote my own name instead of hers.\"",
      "The lamp hums softly. In the courtyard beyond the window, the mist has begun to rise again, slow and thick, pressing against the glass until the lamplight outside looks like a candle inside a cloud.",
    ],
    choices: [
      {
        id: "ask_why_own_name",
        label: "Ask her why she wrote her own name beneath her sister’s, if she could not bear to write Mengjiao’s.",
        tone: "inquiry",
        next: "jade_eye_accusation",
        npcScenario: "ASK_TABLET",
        effects: [{ kind: "setFlag", flag: "asked_own_name" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "praise_her_courage",
        label: "Tell her that writing her own name took more courage than any sentence the Law has ever passed.",
        tone: "mercy",
        next: "jade_eye_bell",
        npcScenario: "SWEAR_OATH",
        effects: [{ kind: "addStat", stat: "karma", amount: 5 }],
      },
      {
        id: "challenge_the_law",
        label: "Tell her that the Law is only a set of signatures, and that she can choose not to add her own.",
        tone: "force",
        next: "jade_eye_accusation",
        npcScenario: "INSULT_SECT",
        effects: [{ kind: "setFlag", flag: "challenged_law" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "close_ledger",
        label: "Close the ledger for her, gently, and wait for her to speak again.",
        tone: "mercy",
        next: "jade_eye_bell",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
  {
    id: "jade_eye_accusation",
    title: "The Law and the Hand",
    paragraphs: [
      "The Elder stands at the window with her back to you. The mist is pressing harder now, and the glass beads with cold moisture that runs down in slow lines, like the tears of a stone. She does not turn around when you speak, and her answer is so quiet that you have to lean forward to hear it.",
      "\"The Law is not a person,\" she says. \"It is a hand. It is the hand that holds the bars, and the hand that counts them, and the hand that writes the names on the ledger. I have been its fingers for twelve years, and I have never once asked where the palm was. I thought the palm was the masters. I thought it was the sect. Tonight I think it was me.\"",
      "She turns, and her face is so calm it frightens you. \"You want me to say that the Law is wrong,\" she says. \"Perhaps it is. But I am the one who signed. A wrong law does not sign itself. Someone has to lift the pen.\"",
    ],
    choices: [
      {
        id: "hand_can_be_refused",
        label: "Tell her that a hand is only a hand, and that it can be refused.",
        tone: "truth",
        next: "jade_eye_accusation_2",
      },
      {
        id: "where_palm_kept",
        label: "Ask her where she thinks the palm of the Law is kept now.",
        tone: "inquiry",
        next: "jade_eye_accusation_2",
      },
      {
        id: "stand_between_window",
        label: "Stand between her and the window, so that the wardens cannot see her face.",
        tone: "mercy",
        next: "jade_eye_accusation_2",
      },
      {
        id: "law_deserves_blade",
        label: "Tell her the Law deserves nothing but the blade it was forged with.",
        tone: "force",
        next: "jade_eye_accusation_2",
      },
    ],
  },
  {
    id: "jade_eye_accusation_2",
    title: "The Tribunal Bell",
    paragraphs: [
      "Outside, faintly, the bell of the Law Hall begins to ring. It is not the evening bell. It is the single deep note the sect uses only for judgments, the one the disciples fear more than any sword. It rings once, then again, and the second note seems to come from inside the walls rather than from the tower.",
      "\"That is the tribunal bell,\" the Elder says. \"It has not rung in fifteen years. It was rung for Mengjiao.\" She takes a breath and lets it out slowly. \"Someone has decided to ring it for you.\"",
    ],
    choices: [
      {
        id: "defy_the_bell",
        label: "Tell her you will not stand before the tribunal unless she stands beside you.",
        tone: "force",
        next: "tribunal_summons",
        npcScenario: "CHALLENGE_LAW_WITH_ELDER",
        effects: [{ kind: "setFlag", flag: "defied_bell" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "accept_bell",
        label: "Tell her you will answer the bell alone, as she once answered the masters.",
        tone: "mercy",
        next: "tribunal_summons",
        npcScenario: "ACCEPT_PUNISHMENT",
        effects: [{ kind: "setFlag", flag: "accepted_bell" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "warn_elder",
        label: "Warn her that the masters who rang the bell may be the ones who want Mengjiao dead for good.",
        tone: "force",
        next: "tribunal_summons",
        npcScenario: "THREATEN",
        effects: [{ kind: "setFlag", flag: "warned_elder" }, { kind: "addStat", stat: "karma", amount: -1 }],
      },
      {
        id: "ask_for_time",
        label: "Ask her for one hour in the Law Hall before the tribunal, so that you can think.",
        tone: "quiet",
        next: "jade_eye_bell",
        effects: [{ kind: "addStat", stat: "qi", amount: 3 }],
      },
    ],
  },
  {
    id: "jade_eye_bell",
    title: "The Summons",
    paragraphs: [
      "The tribunal summons arrives before you have finished your tea. It is a plain grey slip, folded once, and it is delivered by a warden who does not look at your face. It is sealed with the Law Hall’s red wax, and it says only: The tribunal of the Azure Cloud Sect will sit at dawn in the Hall of Bells. The accused will stand before the disciples. The Elder will preside. Bring whatever you have stolen.",
      "Ren Qiao finds you in the corridor afterward. He has a new scar on his jaw and his lantern is lit again. \"They are calling the masters to the hall,\" he says. \"The old ones. The ones who signed the order with her. Half of them have not left their rooms in fifteen years. I do not know who sent for them.\" He hesitates, then adds, in a lower voice, \"I do know one thing. The gate has been told that you are a thief. Everyone in the sect has been told the same thing, and they have all started listening for the bell.\"",
    ],
    choices: [
      {
        id: "tear_summons",
        label: "Tear the summons in half and tell the warden to carry that back to the masters.",
        tone: "force",
        next: "jade_eye_bell_2",
      },
      {
        id: "tell_ren_qiao_truth",
        label: "Tell Ren Qiao the truth about the seal, and about the letter you carry.",
        tone: "truth",
        next: "jade_eye_bell_2",
      },
      {
        id: "ask_which_masters",
        label: "Ask Ren Qiao which masters were chosen, and why those particular ones.",
        tone: "inquiry",
        next: "jade_eye_bell_2",
      },
      {
        id: "thank_quietly_wait",
        label: "Thank Ren Qiao quietly, and say nothing more until the dawn bell.",
        tone: "quiet",
        next: "jade_eye_bell_2",
      },
    ],
  },
  {
    id: "jade_eye_bell_2",
    title: "Gu Hanzhen at the Steps",
    paragraphs: [
      "You go out into the courtyard. The mist has thickened over the Law Hall, and the outlines of the buildings have softened into grey shapes like paintings left in the rain. Disciples are gathering at the edges of the square in small quiet groups, talking behind their hands, and when they see you they fall silent and turn away, one by one, as if you were already a shadow.",
      "Gu Hanzhen is standing at the foot of the steps. He has been released from the stair cells for the tribunal, and he looks thinner than before, his mended sleeve fraying at the cuff. When he sees you he lifts one hand, very slightly, and then lowers it again, as if he is not sure whether he is allowed to greet you in front of the others.",
    ],
    choices: [
      {
        id: "greet_gu",
        label: "Walk down the steps to Gu Hanzhen and tell him that the Elder will hear his name at dawn.",
        tone: "mercy",
        next: "tribunal_summons",
        effects: [{ kind: "setFlag", flag: "greeted_gu" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "avoid_crowd",
        label: "Slip behind the pillars and wait out the night in the shadow of the Law Hall.",
        tone: "quiet",
        next: "tribunal_summons",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "read_summons_again",
        label: "Read the summons again, looking for a hidden word in the wording, and find nothing but the bell.",
        tone: "inquiry",
        next: "tribunal_summons",
        effects: [{ kind: "setFlag", flag: "read_summons" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "meditate_on_bell",
        label: "Sit on the cold stone step and meditate on the bell until its last echo fades into the mist.",
        tone: "quiet",
        next: "tribunal_summons",
        effects: [{ kind: "addStat", stat: "qi", amount: 4 }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "train_in_the_court",
        label: "Walk round the bell tower to the sparring court, where the outer disciples are still practising under the summons.",
        tone: "quiet",
        next: "court_gate",
      },
      {
        id: "cross_cloud_bridge",
        label: "Cross the rope bridge over the Cloud Gap, where the outer disciples are being tested.",
        tone: "force",
        effects: [{ kind: "setFlag", flag: "visited_bridge" }],
        next: "bridge_head",
      },
    ],
  },
];
