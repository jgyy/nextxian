import type { Scene } from "@/engine/types";

/**
 * Chapter Five: The Blood Lotus Sutra. The sutra hall, its forbidden pages, and
 * the jade-eye through which Elder Su watches and speaks.
 */
export const chapterFive: Scene[] = [
  {
    id: "sutra_hall",
    title: "Chapter Five: The Blood Lotus Sutra",
    paragraphs: [
      "The sutra hall is round, and its floor is a single pool of still red water that reflects the ceiling so perfectly you feel you are standing on the underside of the world. A stone dais rises from the centre of the pool, bare except for a book bound in dark silk. Lotus petals made of thin bronze float around the dais, and each one turns slowly on the water, as if following the path of a hidden sun.",
      "The air is thick and warm. It presses against your ears, and your breath comes out in pale puffs that hang above the water before they drift toward the walls. The walls are covered with a thousand small carvings of hands. Some hands are open. Some hold a single petal. Some are clenched around something that has been cut away, and the cuts are fresh.",
      "Set into the floor at the base of the dais is a round mirror of pale green jade, polished so bright that it throws a clear image of the ceiling up through the water. In the centre of the mirror is a small dark circle, no larger than a thumbnail. It looks like an eye, and it is open. It is watching you the way a cat watches a bird it has not yet decided to catch.",
      "You know what it is. The mission scene in the Law Hall described it: a mirror of polished jade that hums softly, through which the Elder would follow your path down the mountain. The mirror is humming now. The sound is so low you feel it in the soles of your boots before you hear it.",
      "The book on the dais is the Blood Lotus Sutra. You are sure of it before you read the title, the way you are sure of a face in a crowd. The silk binding is faded to the colour of dried blood. The pages are not paper. They look like thin sheets of pale skin, stretched and dried and stitched together with black thread. And as you walk toward the dais, one page lifts on its own, turning slowly in the air, as if it has been waiting for a reader to notice.",
      "Behind you, the stair has gone quiet. Ren Qiao is not there. You turned around once and saw only the mist on the stones, and when you turned back, the way was gone and there was only the water. Someone has decided that this is a place you must enter alone.",
    ],
    choices: [
      {
        id: "read_the_sutra",
        label: "Step onto the dais and read the first page of the Blood Lotus Sutra with your own eyes.",
        next: "sutra_temptation",
        effects: [{ kind: "setFlag", flag: "read_the_sutra" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "speak_to_jade_eye",
        label: "Kneel by the jade mirror and speak plainly to the eye, telling the Elder where you are and what you see.",
        next: "sutra_jade_eye",
        npcScenario: "JADE_EYE_REPORT",
        effects: [{ kind: "setFlag", flag: "spoke_to_eye" }],
      },
      {
        id: "lie_to_jade_eye",
        label: "Tell the jade eye that the sutra hall is empty, that the book is only a book, and that you are going back.",
        next: "sutra_jade_eye",
        npcScenario: "JADE_EYE_LIE",
        effects: [{ kind: "setFlag", flag: "lied_to_eye" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "propose_burning",
        label: "Tell the eye the sutra should be burned, and offer to do it yourself while she watches.",
        next: "sutra_jade_eye",
        npcScenario: "SUTRA_BURN",
        effects: [{ kind: "setFlag", flag: "offered_to_burn" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
  {
    id: "sutra_temptation",
    title: "The Voice in the Page",
    paragraphs: [
      "The first page is written in red ink that seems to move under the light. The characters crawl toward the centre of the sheet and then slide back toward the edges, like threads of blood trying to find the nearest vein. You cannot read them all at once. You read one, and it becomes two, and the two turn into a row of small faces looking up at you from the page.",
      "A voice comes out of the page. It is soft and almost kind, and it sounds like a girl telling a secret in a crowded room. \"The mist is not your enemy,\" it says. \"It is only lonely. You know what loneliness is. You have been carrying it since the gate, and you have been careful to hide it behind your Law and your bargains. Let it out. The lotus will hold it for you.\"",
      "Your qi stirs in answer. You feel it rise through your chest and settle in your throat, warm and sweet, the same taste you noticed on the threshold. It is not unpleasant. That is what frightens you most. The sutra does not force. It waits, the way a good host waits for a guest to take off their cloak.",
      "At the edge of your sight, the jade eye in the floor dims for an instant and then flares. The Elder is watching. You can feel her watching the same way you can feel a draft from an open window, cold and exact, measuring how far you have gone before you stop.",
      "The page turns by itself. The next sheet has a single line of text on it, written in the Law’s script and not in the red of the sutra. It reads: Do not believe the voice. Believe the one who taught you to count. It has been written in pencil, very faintly, and then rubbed out, and then written again.",
    ],
    choices: [
      {
        id: "resist_the_voice",
        label: "Shut the book, step back from the dais, and force your qi back down into your belly.",
        next: "sutra_jade_eye",
        effects: [{ kind: "addStat", stat: "qi", amount: -2 }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "study_the_pages",
        label: "Lean forward and study the pages closely, letting the red characters crawl across your eyes.",
        next: "sutra_pages",
        effects: [{ kind: "addStat", stat: "insight", amount: 6 }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "answer_voice",
        label: "Answer the voice in the page, and ask it who taught it to speak so softly.",
        next: "sutra_trance",
        effects: [{ kind: "setFlag", flag: "answered_voice" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "pencil_line",
        label: "Trace the faint pencil line with your fingertip, the one that says to believe the one who taught you to count.",
        next: "sutra_jade_eye",
        effects: [{ kind: "setFlag", flag: "traced_pencil" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
    ],
  },
  {
    id: "sutra_pages",
    title: "The Eighth Method",
    paragraphs: [
      "The Blood Lotus Sutra is not a book of spells. It is a book of listening. Its first seven methods teach a cultivator to open the meridians in order, from the coldest to the warmest, until the body becomes a bowl that can hold the mist without spilling. The eighth method is different. It does not describe a movement. It describes a conversation, and it is written as a dialogue between a teacher and a student who keeps asking the same question.",
      "The teacher says: What do you hear when the abyss breathes? The student says: Only my own pulse. The teacher says: Then you have not yet made room for it. The student asks: How do I make room? The teacher says: Let the abyss take one name from you. Only one. Choose the name you can afford to lose, and offer it to the mist, and the mist will open to you like a door.",
      "The margin of the page holds a note in Mengjiao’s quick hand. It is short and bitter. I chose my own name, and the mist kept it. It has never given it back. Wanru, if you ever read this, do not choose your name. Let the Law choose it for you, as it always does.",
      "You understand now what the eighth method really asks for. It is not power. It is a payment, made in memory. The sutra wants you to forget something important so it can teach you something dangerous. Your mind makes a quick, cold calculation of what you could spare: a childhood song, a face, a particular afternoon in the outer courtyard. The calculation is easy. That is the problem.",
      "Across the pool, the jade eye has brightened into a clear green. A faint voice is speaking from its centre, calm and deliberate, counting. You cannot hear the numbers, but you know what she is counting. She is counting how many names you are willing to give away.",
    ],
    choices: [
      {
        id: "memorise_method",
        label: "Memorise the eighth method exactly, every stroke and every question, and say nothing of its price.",
        next: "sutra_trance",
        effects: [{ kind: "setFlag", flag: "memorised_eighth" }, { kind: "addStat", stat: "insight", amount: 8 }],
      },
      {
        id: "copy_the_price",
        label: "Copy the price of the method into your notebook and underline it twice, so you will remember why you refused it.",
        next: "sutra_jade_eye",
        effects: [{ kind: "setFlag", flag: "copied_price" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "tear_out_page",
        label: "Tear out the page with Mengjiao’s note and fold it into your robes before anyone can read it.",
        next: "sutra_jade_eye",
        effects: [{ kind: "setFlag", flag: "tore_page" }, { kind: "addStat", stat: "karma", amount: -6 }],
      },
      {
        id: "offer_a_name",
        label: "Choose a name you can afford to lose, and offer it to the mist to see whether the door opens.",
        next: "sutra_trance",
        effects: [{ kind: "setFlag", flag: "offered_name" }, { kind: "addStat", stat: "qi", amount: 8 }, { kind: "addStat", stat: "karma", amount: -5 }],
      },
    ],
  },
  {
    id: "sutra_trance",
    title: "The Roof Beneath the Stars",
    paragraphs: [
      "The hall dissolves. You are standing on the roof of the Law Hall, on the same slope of grey tile you climbed on the night of the archive, but the sky above you is clear and full of stars, and the stars are very close. A girl sits beside you with her knees drawn up. She has a braid over one shoulder and a silver comb pinned to the back of her head, and she is pointing up at a cluster of stars that look like a lotus.",
      "\"That one is the abyss,\" she says. \"It is not a hole. It is just very far away and very sad.\" Her voice is Mengjiao’s, and it is young and clear and certain of itself. Beside her, a smaller figure sits with his arms around his knees and says nothing. It is a girl of perhaps nine. She has the same grey eyes as the Elder, and she is staring at the stars with a fear she has not learned to hide.",
      "\"Wanru, you have to stop being afraid of the height,\" Mengjiao says. \"You can see the whole sect from here. Look at the bells. Look at how the mist moves around them. It is not trying to hurt anyone. It is only trying to count us too.\" The younger girl shakes her head, and her braid swings like a bell rope. \"Then why do they keep the names?\" she asks. \"If the mist is only counting, why does the Law write everything down?\"",
      "Mengjiao does not answer for a long time. When she does, her voice has changed. It is quieter and older, and it is not directed at her sister at all. It is directed at you. \"Because the Law is afraid that someone will call the names back,\" she says. \"And someone always does.\"",
      "The stars go out, one by one, until only the lotus-shaped cluster remains. Then it too goes dark, and you are standing again in the red water of the sutra hall with the sutra’s voice ringing softly in your ears. The jade eye is watching. Its light has a new colour now, a flat grey, the colour of a sky before rain.",
    ],
    choices: [
      {
        id: "stay_in_vision",
        label: "Stay in the vision a moment longer and try to see the younger girl’s face properly.",
        next: "sutra_mengjiao_voice",
        effects: [{ kind: "setFlag", flag: "saw_young_wanru" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "wake_gently",
        label: "Wake yourself gently by counting breaths, the way the outer courtyard taught you.",
        next: "sutra_jade_eye",
        effects: [{ kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "call_wanru",
        label: "Call out to the younger girl by name, and hope that she turns around.",
        next: "sutra_mengjiao_voice",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "called_wanru" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "fall_deeper",
        label: "Let the vision pull you deeper, past the roof and into the red pool of the stars.",
        next: "sutra_mengjiao_voice",
        effects: [{ kind: "addStat", stat: "qi", amount: 6 }, { kind: "addStat", stat: "karma", amount: -6 }],
      },
    ],
  },
  {
    id: "sutra_jade_eye",
    title: "The Eye in the Floor",
    paragraphs: [
      "The jade mirror rises a finger’s width above the floor, and the eye at its centre opens fully. The light in it is pale green, and it fills the sutra hall until the red water seems to glow from beneath. When the voice comes, it is the Elder’s voice, dry and clipped and carefully steady, the voice of the Law Hall at the end of a long day.",
      "\"You have been reading,\" she says. \"I can see the pages. I can see your hands on the silk. I cannot see your face, which is a mercy to both of us.\" A pause follows, long enough for the water to ripple against the dais. \"Tell me what the sutra says, Wanderer. Do not tell me what the Law wants to hear. I stopped listening to the Law’s wishes long ago.\"",
      "Behind the voice, faintly, there is a second sound. It is the clink of a small porcelain cup set down on a wooden tray, and then the sound of someone sighing. The Elder is at her desk, in the Law Hall, watching a mirror and drinking tea she has forgotten to sip. You can picture her hair loose on her shoulders and the silver comb set beside the ledger.",
      "The mirror pulses. Somewhere beyond the sutra hall, very far away, the bell of the Law Hall rings once, and the sound comes down through the rock like a stone dropped into a well. The Elder has heard it too. You hear her breath catch and then steady.",
      "\"The mist is answering you,\" she says, and her voice has gone very quiet. \"It answered me once, too. Fifteen years ago, on the night of the Sealing, when I stood at the top of the stair and called for my sister. It did not answer with words. It answered with a silence, and I have been listening to that silence ever since. Be careful, Wanderer. The silence has a way of asking for company.\"",
    ],
    choices: [
      {
        id: "tell_elder_truth",
        label: "Tell her exactly what you have read and what it cost you to read it, without softening anything.",
        next: "sutra_mengjiao_voice",
        npcScenario: "HONEST_ACCOUNT",
        effects: [{ kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "tell_elder_study",
        label: "Tell her you intend to study the sutra, because the Law Hall should not be the only one who understands the seal.",
        next: "sutra_mengjiao_voice",
        npcScenario: "SUTRA_STUDY",
        effects: [{ kind: "setFlag", flag: "wants_to_study" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "tell_elder_sister",
        label: "Say your sister’s name aloud the way Mengjiao wrote it, and see what the Elder does with it.",
        next: "sutra_mengjiao_voice",
        npcScenario: "MENGJIAO_WORDS",
        effects: [{ kind: "setFlag", flag: "spoke_mengjiao_name" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "end_eye_call",
        label: "Tell the Elder you have nothing more to say, and close your eyes to the mirror until she goes quiet.",
        next: "sutra_mengjiao_voice",
        npcScenario: "THREATEN",
        effects: [{ kind: "addStat", stat: "karma", amount: -4 }],
      },
    ],
  },
  {
    id: "sutra_mengjiao_voice",
    title: "The Voice from the Water",
    paragraphs: [
      "The red water begins to rise. It climbs the sides of the dais in a slow, shining wave, and the bronze petals bob up and down on its surface like small lanterns in a storm. The reflection of the ceiling wavers and breaks apart. In the place where it was, a figure begins to form, sitting cross-legged on the water with her hands folded in her lap.",
      "It is a woman in old Azure Cloud grey, with a braid over her shoulder and a face that is almost the Elder’s face, a little younger and a great deal more tired. Her eyes are open. They are not looking at you. They are looking at the jade eye, which has gone dark and flat, like a closed fan.",
      "\"Wanru always did keep the mirror clean,\" Mengjiao says, in a voice you have heard already in the vision and on the page. \"She used to polish it every morning before breakfast. I told her the mirror would never answer a clean face. It answers only what is true, and the truth is usually grimy.\" She smiles without warmth. \"You came down the stair. Nobody comes down the stair. Did the Law send you, or did the mist?\"",
      "She waits for your answer with the patience of someone who has already heard every possible reply. The water around her knees glints red and gold. Somewhere far behind you, the Law Hall bell rings a second time, and the sound seems to come from a great distance, as if the whole sect is turning in its sleep to listen.",
      "\"I will tell you something before you decide,\" Mengjiao says. \"The sutra is a lie. Not all of it. The method is real, and the mist does answer. But the price was never a name. The price is the one who hears the answer. Whoever climbs this stair must stay on it forever, listening, and the Law has always been very eager for someone to stay.\"",
    ],
    choices: [
      {
        id: "ask_where_she_is",
        label: "Ask Mengjiao where she has been for fifteen years, and why she came back only to take the jade.",
        next: "jade_eye_return",
        effects: [{ kind: "setFlag", flag: "asked_mengjiao" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "accuse_mengjiao",
        label: "Tell her that the Elder has never stopped grieving her, and that she is cruel to keep silent.",
        next: "jade_eye_return",
        effects: [{ kind: "setFlag", flag: "accused_mengjiao" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "offer_mengjiao_hand",
        label: "Hold out your hand across the water and say you will help her climb back to the stair.",
        next: "jade_eye_return",
        effects: [{ kind: "setFlag", flag: "offered_hand" }, { kind: "addStat", stat: "karma", amount: 6 }],
      },
      {
        id: "step_away",
        label: "Step back onto the stone, put your back to the water, and walk toward the stair without answering her.",
        next: "jade_eye_return",
        effects: [{ kind: "addStat", stat: "karma", amount: -1 }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
    ],
  },
];
