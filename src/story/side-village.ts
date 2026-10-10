import type { Scene } from "@/engine/types";

/**
 * Side Path: The Village Under the Foothills. The player leaves the sect for the village where
 * Gu Hanzhen was born, and learns what the levy took from it. Opened from the Elder's mission,
 * and rejoins the abyss entry.
 */
export const villageScenes: Scene[] = [
  {
    id: "village_gate",
    title: "Side Path: The Village Under the Foothills",
    paragraphs: [
      "The foothill road leaves the sect’s steps at the third bend and drops into a valley of terraced rice. The village at its foot has no walls, only a gate of unpainted pine. Beside the gate hangs a wooden board, scraped clean, with a single line written on it in a child’s careful hand: Those who go up the mountain come down again.",
      "Pounding rhythms rise from the square. A thin old woman sweeps the gatepost with a broom of reeds, and she does not look up until you are close enough to hear your own boots on the stones.",
    ],
    choices: [
      { id: "follow_pounders", label: "Follow the rhythm of the rice pounders to the square.", tone: "quiet", next: "village_square" },
      { id: "ask_gu_house", label: "Ask the sweeping woman where the Gu family’s house stands.", tone: "inquiry", next: "village_mother_house" },
      { id: "walk_fields_graves", label: "Walk along the edge of the fields, where the newest graves are.", tone: "mercy", next: "village_graves" },
      { id: "tell_child_truth", label: "Stop a running child and tell him the truth about why you have come.", tone: "truth", next: "village_children" },
    ],
  },
  {
    id: "village_square",
    title: "The Rice Square",
    paragraphs: [
      "Women stand in a ring around a stone mortar, their sleeves tied back, and the pestles come down in turn like the strokes of a slow bell. Children weave between their skirts. Along the far side of the square a stall with a faded red awning sells tea in chipped bowls, and the steam from its kettle curls into the cool air.",
      "On the notice board by the well, a list of names has been pinned beneath the year of the Sealing. Half of them have been rubbed nearly away by weather and fingers.",
    ],
    choices: [
      { id: "buy_tea_red_awning", label: "Buy a bowl of tea from the stall with the red awning.", tone: "quiet", next: "village_tea" },
      { id: "ask_levy_family", label: "Ask the rice women which family lost a son to the levy.", tone: "inquiry", next: "village_tea" },
      { id: "lift_rice_basket", label: "Help the women lift a heavy basket of rice, and ask nothing in return.", tone: "mercy", next: "village_tea" },
      { id: "copy_levy_board", label: "Read the levy board, and copy every name that is still legible.", tone: "truth", next: "village_tea" },
    ],
  },
  {
    id: "village_tea",
    title: "Madam Gu’s Stall",
    paragraphs: [
      "The woman behind the stall is broad and sun-browned, with a grey streak through her hair and a hand that does not stop wiping the bowls. She sets a bowl in front of you before you have asked for anything. “You have his face,” she says. “Not his eyes. He had softer eyes than yours. You are the one who went up the mountain with his name in your mouth.”",
      "Her name is Gu Yunxia. She does not say it as though it were a secret. She says it the way a person says the name of a field that is no longer hers.",
    ],
    choices: [
      { id: "ask_about_hanzhen", label: "Ask her what Gu Hanzhen was like as a boy, before the Law Hall had him.", tone: "inquiry", next: "village_mother_tale" },
      { id: "drink_tea_silently", label: "Drink the tea slowly and let her decide what she will say.", tone: "quiet", next: "village_mother_tale" },
      { id: "promise_to_speak_for_him", label: "Promise her that you will speak for her son before the tribunal.", tone: "mercy", next: "village_mother_tale" },
      { id: "say_law_took_him", label: "Tell her plainly that the Law has taken her son to the bell, and may not give him back.", tone: "truth", next: "village_mother_tale" },
    ],
  },
  {
    id: "village_mother_tale",
    title: "What the Levy Took",
    paragraphs: [
      "She tells it without tears, the way a farmer counts a harvest. Gu Hanzhen had an elder brother, Gu Hanming, who was taken by the levy in the year of the Sealing. Every household on the mountain gives one child when the jade must be fed. The Law Hall sends the wardens with a list, and the list is never read aloud. “My son went down the path,” she says. “He never came back up. Hanzhen was sent to the sect the next year to be someone else’s servant, so he would not have to be the one who stayed.”",
      "She lifts a corner of the cloth over the kettle and lets it fall again, as if she has said too much to a stranger.",
    ],
    choices: [
      { id: "ask_what_levy_took", label: "Ask her what the levy took from the village, besides a son.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "heard_levy" }], next: "village_blessing" },
      { id: "hold_her_hand", label: "Reach across the stall and hold her hand until the kettle boils over.", tone: "mercy", next: "village_blessing" },
      { id: "keep_levy_secret", label: "Say that you have heard nothing about any levy, and drink your tea.", tone: "deceit", next: "village_blessing" },
      { id: "wait_for_her_end", label: "Set down your bowl and wait quietly for her to finish.", tone: "quiet", next: "village_blessing" },
    ],
  },
  {
    id: "village_blessing",
    title: "A Red Cord",
    paragraphs: [
      "When you rise to leave, she ties a length of red cord around your wrist, knotting it twice in the old way. “For the road,” she says. “Up there they will tie you to things. This one is only tied to me.” The knot is tight, and it smells of woodsmoke and rice.",
      "Below the stall a small boy watches you from behind a water jar. He holds up two fingers, then one, then none, the way children count the people who have gone and not come back.",
    ],
    choices: [
      { id: "thank_her_cord", label: "Thank her, and promise to wear the cord until you reach the abyss.", tone: "mercy", effects: [{ kind: "setFlag", flag: "took_cord" }], next: "village_return" },
      { id: "ask_boy_count", label: "Ask the boy what he is counting, and wait for him to answer.", tone: "inquiry", next: "village_return" },
      { id: "untie_cord_quietly", label: "Slip the cord off and pocket it, so the mountain cannot see who gave it.", tone: "deceit", next: "village_return" },
      { id: "walk_back_up_road", label: "Walk back up the road without looking at the boy again.", tone: "quiet", next: "village_return" },
    ],
  },
  {
    id: "village_mother_house",
    title: "The House With the Red Lantern",
    paragraphs: [
      "The Gu house stands at the end of a lane of mud walls, under a red paper lantern that has faded to the colour of old brick. Its door is carved with a lotus bud, and the lotus has been rubbed smooth by hands that have touched it for years. From inside comes a woman’s voice, singing a low tune without words.",
      "You know the tune. You heard it in the vault beneath the Ash Archive, and on the roof beneath the stars, and in the mist at the foot of the abyss. The whole village seems to know it. It is the song you sing to a child who will not sleep.",
    ],
    choices: [
      { id: "knock_on_lotus_door", label: "Knock on the lotus door and say that you come from the Law Hall.", tone: "truth", next: "village_kettle" },
      { id: "listen_at_door", label: "Stand at the door and listen to the song until the last verse.", tone: "quiet", next: "village_kettle" },
      { id: "ask_about_the_tune", label: "Call through the door and ask where she learned the tune.", tone: "inquiry", next: "village_kettle" },
      { id: "peek_through_window", label: "Look through the paper window before you knock, to see who is inside.", tone: "deceit", next: "village_kettle" },
    ],
  },
  {
    id: "village_kettle",
    title: "A Sash on the Hook",
    paragraphs: [
      "Inside, the room is small and clean and smells of smoke and dried persimmon. A kettle hangs over the hearth. On a hook by the door is a child’s sash of blue cloth, its ends frayed where a small boy must have gripped them for years. Madam Gu takes the kettle down without looking at you, and pours water into two cups.",
      "“Hanzhen wrote to me last winter,” she says. “One letter. He said he had found a thing in the sect that belonged to the mountain, and he was going to take it back. I did not understand him. I still do not.”",
    ],
    choices: [
      { id: "ask_for_the_letter", label: "Ask whether she still has the letter, and what it says.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "saw_gu_letter_name" }], next: "village_wardens_visit" },
      { id: "touch_the_sash", label: "Touch the blue sash gently, and ask whose it was.", tone: "mercy", next: "village_wardens_visit" },
      { id: "say_you_know_nothing", label: "Tell her you know nothing about any thing that belongs to the mountain.", tone: "deceit", next: "village_wardens_visit" },
      { id: "take_cup_and_wait", label: "Take the cup she offers, and wait for her to say what she needs.", tone: "quiet", next: "village_wardens_visit" },
    ],
  },
  {
    id: "village_wardens_visit",
    title: "Wardens at the Gate",
    paragraphs: [
      "Two wardens come up the lane in grey cloaks, their lanterns unlit in the daylight. They do not knock. One of them carries a folded list in his left hand, and the other looks at the lotus on the door as though he has been told to memorise it. “A letter from the Law Hall,” the first says. “From the outsider Gu. We are told it is in this house.”",
      "Madam Gu slides something small into the kettle’s ash before she stands. Her hands are steady. Her face is not.",
    ],
    choices: [
      { id: "step_between_wardens", label: "Step between the wardens and the kettle, and stand where they must look past you.", tone: "mercy", effects: [{ kind: "setFlag", flag: "wardens_searched_house" }], next: "village_nightfall" },
      { id: "say_house_is_empty", label: "Tell the wardens that the house is empty, and that the widow has gone to market.", tone: "deceit", next: "village_nightfall" },
      { id: "ask_by_what_right", label: "Ask the wardens by what right they search a widow’s house with no lamp lit.", tone: "force", effects: [{ kind: "addStat", stat: "karma", amount: 2 }], next: "village_nightfall" },
      { id: "watch_from_doorway", label: "Stand in the doorway and watch, saying nothing, until they grow tired of waiting.", tone: "quiet", next: "village_nightfall" },
    ],
  },
  {
    id: "village_nightfall",
    title: "A Message for the Elder",
    paragraphs: [
      "The wardens search the room and find nothing but a kettle, two cups, and a blue sash they do not bother to lift from its hook. They leave with their lanterns still unlit, and the lane goes quiet behind them. Madam Gu sits down on the step and puts her head in her hands for the length of one long breath.",
      "When she lifts her head, she is composed again. “Tell the Elder something from me,” she says. “My son’s name was never on her ledger, because she never wrote it there. The levy took him from a list the Law kept in a drawer. Tell her the drawer has a lock, and that the lock is on her side.”",
    ],
    choices: [
      { id: "carry_message_home", label: "Promise to carry her message to the Elder, word for word.", tone: "truth", next: "village_return" },
      { id: "ask_which_drawer", label: "Ask which drawer, and whether the Law Hall still keeps it.", tone: "inquiry", next: "village_return" },
      { id: "keep_message_back", label: "Nod, and keep her message to yourself until you decide what it means.", tone: "deceit", next: "village_return" },
      { id: "bow_and_go", label: "Bow to her on the step, and leave the lane without saying anything more.", tone: "quiet", next: "village_return" },
    ],
  },
  {
    id: "village_graves",
    title: "The Terrace of New Graves",
    paragraphs: [
      "Above the rice terraces, along a ridge of red earth, a row of graves runs toward the mountain. The mounds are new. Most of them have no tablet, only a river stone set at the head with a name scratched into it. The wardens bury the dead at night, the village woman at the gate told you, and they do not allow anyone to mark the spot by day.",
      "A stone has been placed at the end of the row, taller than the others. Its face is smooth, and someone has cut a line of characters into it with great patience, one stroke at a time.",
    ],
    choices: [
      { id: "read_the_stone_line", label: "Read the line on the tall stone aloud, slowly, so that the dead can hear it.", tone: "mercy", next: "village_levy_stone" },
      { id: "count_the_mounds", label: "Count the mounds in the row, and compare the number with the levy board.", tone: "inquiry", next: "village_levy_stone" },
      { id: "kneel_in_the_earth", label: "Kneel in the red earth beside the newest grave and bow your head.", tone: "quiet", next: "village_levy_stone" },
      { id: "pull_weeds_from_graves", label: "Pull the weeds from the graves before anyone sees you there.", tone: "truth", next: "village_levy_stone" },
    ],
  },
  {
    id: "village_levy_stone",
    title: "The Levy Stele",
    paragraphs: [
      "The stone at the end of the row is a levy stele, the kind the Law Hall once set up in every village on the mountain. Its face lists the children taken in the year of the Sealing, one name to a line, and beside each name a small mark that means the child was given and not returned. Fourteen marks are cut in the first column. The second column is blank, as though it was meant to be filled and never was.",
      "At the foot of the stele, the earth has been dug away and then carefully packed again, the way a person hides something they still intend to find.",
    ],
    choices: [
      { id: "read_the_marks", label: "Trace the fourteen marks one by one, and say each child’s name aloud.", tone: "mercy", next: "village_levy_day" },
      { id: "compare_marks", label: "Compare the marks with the names on the sect’s sealing orders in your memory.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "heard_levy" }], next: "village_levy_day" },
      { id: "step_away_from_stele", label: "Step back from the stele and let the wind move through the blank column.", tone: "quiet", next: "village_levy_day" },
      { id: "scratch_at_base", label: "Scrape at the freshly packed earth at the foot of the stele, where something was buried.", tone: "deceit", effects: [{ kind: "setFlag", flag: "found_hidden_list" }], next: "village_temple_hidden" },
    ],
  },
  {
    id: "village_levy_day",
    title: "The Day the Wardens Came",
    paragraphs: [
      "A woman near the terrace tells it while she fills her basket with weeds. The wardens came on a morning of thin fog, with a sealed order from the Law Hall and a list that the headman was forbidden to read. They walked the children to the path in a line. The mothers stood at the edge of the terrace and did not weep until the last of the grey robes had gone into the mist.",
      "“There was a girl among the wardens,” she says, “in plain grey, with a silver comb in her hair. She was not a warden. She was the one who held the lantern up so the children could see the path. She did not look back at us once.”",
    ],
    choices: [
      { id: "ask_girl_name", label: "Ask the woman what the girl with the silver comb was called.", tone: "inquiry", next: "village_graves_last" },
      { id: "help_fill_basket", label: "Help her fill the basket, and listen while your hands are busy.", tone: "mercy", next: "village_graves_last" },
      { id: "say_nothing_of_comb", label: "Say nothing about the comb, though the picture of it stays in your mind.", tone: "quiet", next: "village_graves_last" },
      { id: "tell_her_girl_mengjiao", label: "Tell her the girl with the comb is the Elder’s sister, and that she is alive.", tone: "truth", effects: [{ kind: "setFlag", flag: "told_village_of_mengjiao" }], next: "village_graves_last" },
    ],
  },
  {
    id: "village_graves_last",
    title: "The Name Not on the Board",
    paragraphs: [
      "At the far end of the terrace, one grave has a tablet, though it is cracked across the middle. It reads Gu Hanming, eldest son. The wardens did not carve it. Someone from the village did, late at night, with a blade that was not meant for stone. The tablet says nothing of the levy, only that he went up the mountain and did not come down again.",
      "A small bowl of rice sits at its foot, and beside it a red thread has been tied around a pebble. Someone comes here each morning, and has not yet stopped coming.",
    ],
    choices: [
      { id: "leave_thread_beside", label: "Leave a red thread of your own beside the pebble, for the brother you never knew.", tone: "mercy", next: "village_return" },
      { id: "read_tablet_twice", label: "Read the tablet twice, and try to match its crack to the story you were told.", tone: "inquiry", next: "village_return" },
      { id: "pour_out_water", label: "Pour out the water in your flask on the grave, without a word.", tone: "quiet", next: "village_return" },
      { id: "take_pebble", label: "Take the pebble with the red thread and carry it down the mountain with you.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_pebble" }], next: "village_return" },
    ],
  },
  {
    id: "village_children",
    title: "The Game of Sealing",
    paragraphs: [
      "The children have made a game of the levy. One of them stands with arms out, wearing a sash of blue cloth, and another ties a length of red thread around her wrist and gives her a small stone. Then they walk in a line toward the well, chanting names. The eldest girl leads them, and at the end of each name she stops, and the others must shout the name back.",
      "“That’s the sealing,” she says, when she sees you watching. “You have to call everybody back before the mist does. Otherwise you are too quiet, and the mist keeps you.”",
    ],
    choices: [
      { id: "join_the_game", label: "Join the line, and call back every name the girl chants.", tone: "mercy", next: "village_song" },
      { id: "ask_who_taught_game", label: "Ask who taught them the game, and where the names come from.", tone: "inquiry", next: "village_song" },
      { id: "tell_children_names_matter", label: "Tell them that the names they chant are real people, and they should be sung with care.", tone: "truth", next: "village_song" },
      { id: "ask_names_are_mine", label: "Ask the eldest girl whether you could be called back, too, if the mist ever took you.", tone: "quiet", next: "village_song" },
    ],
  },
  {
    id: "village_song",
    title: "The Tune in the Square",
    paragraphs: [
      "When the names are called, the children stop and sing instead. It is the same tune you have heard in the sutra hall and on the roof of the archive, wordless and low. The eldest girl sings it with her eyes half shut. “The lady on the roof taught us,” she says. “She came here when she was little, before the wardens. She said we are the mist’s ears, and if we forget the names, the mist will have to listen to someone else.”",
      "The other children begin to giggle, and the song breaks into shouts and running feet. Only the eldest girl stays where she is, looking at the well as though someone is standing in it.",
    ],
    choices: [
      { id: "ask_where_lady_went", label: "Ask the eldest girl where the lady on the roof went when she left the village.", tone: "inquiry", next: "village_schoolmaster" },
      { id: "sing_last_verse", label: "Sing the last verse of the tune back to her, as well as you can remember it.", tone: "mercy", next: "village_schoolmaster" },
      { id: "walk_toward_the_well", label: "Walk to the well and look down into it, to see what she is looking at.", tone: "force", next: "village_schoolmaster" },
      { id: "leave_song_unanswered", label: "Let the song go unanswered, and walk on toward the schoolhouse.", tone: "quiet", next: "village_schoolmaster" },
    ],
  },
  {
    id: "village_schoolmaster",
    title: "The Schoolmaster’s Copybook",
    paragraphs: [
      "The schoolhouse is a single room with a tiled roof that leaks into a bucket. Its master is an old man with ink on his cuffs and a voice that has not been raised in years. He remembers Gu Hanzhen as a boy who wrote every character twice, once to learn it and once to forgive it. “He was the best of my pupils,” he says. “Until the year the wardens came for his brother. After that he wrote only one character, over and over. Wanru.”",
      "He takes a worn copybook from a shelf and opens it to the last page. Across the bottom, in a trembling child’s hand, a single line is written: I will bring back what the mountain took.",
    ],
    choices: [
      { id: "read_copybook_line", label: "Read the child’s line in the copybook, then read it again, aloud.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "read_gu_letter" }], next: "village_departure" },
      { id: "return_copybook", label: "Hand the copybook back to him, and tell him to keep it safe.", tone: "mercy", next: "village_departure" },
      { id: "ask_wanru_meant", label: "Ask whether the name he wrote was the Elder’s, and whether she knew.", tone: "truth", next: "village_departure" },
      { id: "pocket_copybook", label: "Slip the copybook into your sleeve while the old man is looking out of the window.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_copybook" }], next: "village_departure" },
    ],
  },
  {
    id: "village_departure",
    title: "The Road Out of the Valley",
    paragraphs: [
      "The path back to the foothills climbs past the terraces, and the rice stalks bend in a wind that smells of rain and iron. At the top of the first rise you turn to look back. The village is small and grey below you, its roofs dark with damp, and along the ridge the new graves stand in their row like teeth in an open mouth.",
      "The foothill road will take you to the sect in a single afternoon. The mountain does not seem to mind how long you stay away from it, only that you remember the way.",
    ],
    choices: [
      { id: "look_back_at_village", label: "Look back at the village until the roofs are lost in the haze.", tone: "quiet", next: "village_return" },
      { id: "count_terraces", label: "Count the terraces on the way down, one for every family the levy took.", tone: "inquiry", next: "village_return" },
      { id: "hurry_down_road", label: "Hurry down the road, as though the mist might follow you if you stop.", tone: "force", next: "village_return" },
      { id: "wave_to_children", label: "Raise a hand to the children at the well, though they are too far away to see it.", tone: "mercy", next: "village_return" },
    ],
  },
  {
    id: "village_temple_hidden",
    title: "The Hidden List",
    paragraphs: [
      "Behind the stele, where the earth was packed down, a flat stone lifts away at a touch. Beneath it is a shallow niche lined with oiled paper. Inside lies a second list, written in the same hand as the first, and it is longer. It holds the names of every child the levy took from the mountain, back to the year before the first Sealing. Beside some of the names someone has written a single word: returned. Beside most, there is nothing.",
      "The last line is Gu Hanming, and beside it, in the Elder’s own neat script, the word sealed. Someone has tried to scrape the word away. Only the first stroke is gone.",
    ],
    choices: [
      { id: "copy_the_hidden_list", label: "Copy the second list onto your own paper, name by name, before you lose the light.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 2 }], next: "village_letter" },
      { id: "return_list_to_niche", label: "Lay the list back in the niche exactly as you found it, and close the stone.", tone: "quiet", next: "village_letter" },
      { id: "take_hidden_list", label: "Fold the second list into your robe and take it up the mountain with you.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_hidden_list" }], next: "village_letter" },
      { id: "name_them_aloud", label: "Read every name on the second list aloud, into the dark of the niche.", tone: "mercy", next: "village_letter" },
    ],
  },
  {
    id: "village_letter",
    title: "Gu’s Letter to His Mother",
    paragraphs: [
      "Tucked in the niche beneath the list is a folded letter in a young man’s careful hand, sealed with a scrap of blue cloth. It is addressed to his mother. The ink is faded, but the words are plain. He writes that he found the Law’s second list in the sect’s records, that he has seen what the Elder signed, and that she will forgive him for going up the mountain without telling her.",
      "The last lines are the ones that matter. If the Law asks where I went, tell them I went to find my brother. If the Elder asks, tell her that the jade was never whole, and that the mountain knows which half it has been given.",
    ],
    choices: [
      { id: "read_letter_aloud", label: "Read the letter aloud to the empty niche, so that the words are heard again.", tone: "truth", effects: [{ kind: "setFlag", flag: "read_gu_letter" }], next: "village_return" },
      { id: "fold_letter_again", label: "Fold the letter along its old creases and leave it where his mother can find it.", tone: "mercy", next: "village_return" },
      { id: "copy_last_lines", label: "Copy the last two lines of the letter into your notes, word for word.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "read_gu_letter" }], next: "village_return" },
      { id: "keep_letter_hidden", label: "Take the letter with you, and tell no one in the sect that it exists.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_gu_letter" }], next: "village_return" },
    ],
  },
  {
    id: "village_return",
    title: "Back Up the Foothill Road",
    paragraphs: [
      "The third bend of the foothill road brings the sect’s steps back into view, grey and wet above the mist. The gate disciple is still there with his umbrella, and he watches you come up the last stretch with the same careful attention he gave you on the first day.",
      "Somewhere above, the bell rings once. Whatever the village gave you, it is yours to carry up to the Law Hall, or to hide from it.",
    ],
    interjections: [
      {
        when: [{ kind: "flag", flag: "wardens_searched_house" }],
        line: "The wardens went through a widow’s house without my seal. I will ask who gave them the order, and I will read the answer aloud before the masters, whatever it does to the Law.",
      },
    ],
    choices: [
      { id: "report_village_to_jade_eye", label: "Tell the jade-eye what the village told you about the levy, and about the names.", tone: "truth", npcScenario: "REPORT_VILLAGE", next: "abyss_entry" },
      { id: "keep_village_secret", label: "Say nothing to the mirror about the village, and keep its names to yourself.", tone: "deceit", next: "abyss_entry" },
      { id: "walk_back_quietly", label: "Walk up the last steps without speaking to anyone in the courtyard.", tone: "quiet", next: "abyss_entry" },
      { id: "ask_gate_disciple_news", label: "Ask the gate disciple whether the wardens have been down the foothill road today.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 1 }], next: "abyss_entry" },
    ],
  },
];
