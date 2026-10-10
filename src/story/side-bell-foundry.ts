import type { Scene } from "@/engine/types";

/**
 * Side Path: The Bell Foundry. Opened from the crowd at the trial, while the disciples
 * argue on the terraces. Under the Law Hall, a caster pours the names of the lost into
 * the rims of the sect’s bells. The path rejoins the trial by the bell rule.
 */
export const bellFoundryScenes: Scene[] = [
  {
    id: "foundry_gate",
    title: "Side Path: The Bell Foundry",
    paragraphs: [
      "The sound reaches you before you find the door. It is a steady ringing, flat and heavy, followed by a pause and then another ring, and it is not the sound of the Law Hall bell. Behind a plain wooden door at the back of the dais, steps lead down into heat. The air smells of charcoal, wet clay and molten copper.",
      "At the bottom of the steps is a foundry, and it is busier than anyone upstairs would believe. Apprentices in leather aprons carry clay moulds on poles. A row of bronze bells hangs from iron frames, still dark and unpolished. A man with a face like a cracked pot stands at the furnace mouth with a long iron rod, watching the metal glow and saying nothing to the boys who scurry around him.",
      "On the wall beside the door hangs a board covered in chalk tallies, the same kind the lane uses to count coins. Someone has written across the top, in careful characters: Every bell the Law casts carries the names it has lost. The tallies below are not numbers. They are initials.",
    ],
    choices: [
      {
        id: "follow_the_hammers",
        label: "Walk past the apprentices toward the man at the furnace, keeping your hands where they can be seen.",
        tone: "truth",
        next: "foundry_floor",
        effects: [{ kind: "setFlag", flag: "visited_foundry" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "ask_an_apprentice",
        label: "Ask the nearest apprentice who the board is for, and whether anyone ever wipes the tallies off.",
        tone: "inquiry",
        next: "foundry_floor",
        effects: [{ kind: "setFlag", flag: "visited_foundry" }, { kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "wait_in_shadow",
        label: "Stand in the shadow of the bell frames and watch until the furnace man turns around.",
        tone: "quiet",
        next: "foundry_floor",
        effects: [{ kind: "setFlag", flag: "visited_foundry" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "climb_back_to_dais",
        label: "Go back up the steps before anyone notices that the trial has lost you.",
        tone: "quiet",
        next: "tribunal_bell_rule",
      },
    ],
  },
  {
    id: "foundry_floor",
    title: "Old Kuang’s Furnace",
    paragraphs: [
      "The furnace man is called Kuang. He has cast bells for the Law Hall for thirty years, and he mentions it without pride, the way a man might mention a bad tooth. \"Every bell in the sect is cast from the same bronze,\" he says. \"The Law Hall sends me the metal and the names. I pour one, and the other goes into the rim, between the lotus and the sutra band. You cannot see it once the bell is hung. You can hear it, if you know how to listen.\"",
      "He turns the rod in the furnace. The bronze inside is orange at its edges and white at its heart. \"Fifteen years ago the Law Hall sent me a list. Fourteen names for the bells of the upper terraces, and one name it did not want me to pour at all. I poured it anyway. A caster should not refuse metal, but he may refuse to forget what he poured.\"",
    ],
    choices: [
      {
        id: "watch_rod_turn",
        label: "Watch the rod turn in the furnace until its heart runs white.",
        tone: "quiet",
        next: "foundry_floor_2",
      },
      {
        id: "ask_years_pouring",
        label: "Ask how many years Kuang has poured bronze for the Law Hall.",
        tone: "inquiry",
        next: "foundry_floor_2",
      },
      {
        id: "tell_kuang_law_lies",
        label: "Tell Kuang that the Law Hall is lying to the sect about the names.",
        tone: "truth",
        next: "foundry_floor_2",
      },
      {
        id: "demand_names_poured",
        label: "Demand that Kuang tell you exactly which names he was ordered to pour.",
        tone: "force",
        next: "foundry_floor_2",
      },
    ],
  },
  {
    id: "foundry_floor_2",
    title: "The Mould and the Fifteenth Name",
    paragraphs: [
      "A bell mould stands against the wall, its inner face scored with lines of letters reversed like a reflection. You can read them if you hold your breath. The first fourteen are masters’ names, and you recognise two of them from the sealing orders. The fifteenth is Su Mengjiao. Someone has tried to scrape it out of the clay with a blade, and the scratches stop just short of the last stroke, as though the hand holding the blade could not finish the job.",
    ],
    choices: [
      {
        id: "ask_kuang_about_names",
        label: "Ask Kuang what the fifteenth name was doing in the clay, and why he poured it at all.",
        tone: "inquiry",
        next: "foundry_ledger",
        effects: [{ kind: "setFlag", flag: "heard_bell_names" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "help_pour_bronze",
        label: "Take up the second ladle and help him pour, so the furnace man has a reason to trust your hands.",
        tone: "mercy",
        next: "foundry_ledger",
        effects: [{ kind: "setFlag", flag: "poured_bronze" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "press_for_casting_book",
        label: "Tell Kuang you have the Elder’s leave to see the casting book, and hold out your hand for it.",
        tone: "deceit",
        next: "foundry_ledger",
        effects: [{ kind: "setFlag", flag: "pressed_kuang" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "leave_coin_on_mould",
        label: "Set a coin on the mould beside the scratched name, the way the shrine-keepers leave one for the dead.",
        tone: "mercy",
        next: "foundry_ledger",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "foundry_ledger",
    title: "The Casting Book",
    paragraphs: [
      "The casting book lives in a locked drawer under the furnace bench, and Kuang opens it with a key from a cord around his neck. It is a thick ledger bound in oilcloth, with a page for every bell in the sect. Each page is ruled into columns: the date of the pour, the weight of the bronze, the number of the bell, and, at the far right, a column headed simply Rim. Most of the Rim columns are blank. The fifteenth bell has a page of its own, and its Rim column holds a single neat list of names.",
      "The names are the same ones the sealing orders carried. They run down the page in a clerk’s black ink without a single correction. But beneath the last of them, someone has written a line in red that does not belong to the clerk: Mengjiao is the only one who would not be poured quietly. Beside it is a date fifteen years old. It is the same night as the sealing.",
    ],
    choices: [
      {
        id: "read_every_column",
        label: "Turn the pages slowly and read every column, the Rim column included.",
        tone: "inquiry",
        next: "foundry_ledger_2",
      },
      {
        id: "ask_fifteenth_own_page",
        label: "Ask Kuang why the fifteenth bell has a page of its own.",
        tone: "inquiry",
        next: "foundry_ledger_2",
      },
      {
        id: "red_line_true",
        label: "Tell Kuang that the red line is the only true thing in the whole book.",
        tone: "truth",
        next: "foundry_ledger_2",
      },
      {
        id: "slide_book_back",
        label: "Slide the book back toward him, untouched, and step away from the bench.",
        tone: "quiet",
        next: "foundry_ledger_2",
      },
    ],
  },
  {
    id: "foundry_ledger_2",
    title: "The Red Line",
    paragraphs: [
      "Kuang watches you read without interrupting. When you look up, he says: \"I did not write the red line. I found it there the morning after. I never learned who wrote it, and I never asked. A caster who asks too many questions about his own bells does not keep his furnace.\"",
    ],
    choices: [
      {
        id: "copy_the_casting_book",
        label: "Copy the whole Rim column onto a spare talisman, every name and the red line beneath them.",
        tone: "inquiry",
        next: "foundry_return",
        effects: [{ kind: "setFlag", flag: "copied_casting_book" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "tear_out_the_page",
        label: "Tear out the page with the red line, and fold it small enough to hide inside your sleeve.",
        tone: "deceit",
        next: "foundry_return",
        effects: [{ kind: "setFlag", flag: "tore_casting_page" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "read_names_aloud",
        label: "Read the fifteen names aloud in the furnace room, slowly, then ask Kuang to show you where the bells hang.",
        tone: "mercy",
        next: "foundry_bell_hall",
        effects: [{ kind: "setFlag", flag: "read_bell_names" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "close_the_book",
        label: "Close the casting book, return the key, and thank Kuang for showing you what he could have hidden.",
        tone: "quiet",
        next: "foundry_return",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "foundry_bell_hall",
    title: "The Bell Hall in the Dark",
    paragraphs: [
      "Kuang takes you through a low door into a hall where the finished bells hang in a double row, dark and still. The apprentices stop their work to watch you. Nobody speaks. When you walk between the rows, the bells do not ring, but their bronze hums faintly, the way a glass hums when someone sings near it, and you feel the sound in your teeth.",
      "On the rim of each bell, too small to read from the floor, are the names the casters poured. You climb the wooden steps beside the nearest one and read the rim by the light of a single lamp. Each line is in a different hand. Some of the hands are shaking. One is so neat it might have been ruled with a straightedge, and at the end of it is the name of a warden who was once the finest the Law Hall had. The names run around the bronze, and then the rim begins again.",
    ],
    choices: [
      {
        id: "walk_humming_rows",
        label: "Walk between the rows in silence and let the humming bronze speak for itself.",
        tone: "quiet",
        next: "foundry_bell_hall_2",
      },
      {
        id: "read_nearest_rim",
        label: "Climb the steps beside the nearest bell and read its rim by the lamp.",
        tone: "inquiry",
        next: "foundry_bell_hall_2",
      },
      {
        id: "bow_to_unread_names",
        label: "Stop at the first bell and bow to the names you cannot yet read.",
        tone: "mercy",
        next: "foundry_bell_hall_2",
      },
      {
        id: "pry_rim_away",
        label: "Pry the first bell’s rim away from its frame with the edge of your blade.",
        tone: "force",
        next: "foundry_bell_hall_2",
      },
    ],
  },
  {
    id: "foundry_bell_hall_2",
    title: "The Silk on the Fifteenth Bell",
    paragraphs: [
      "The fifteenth bell is the largest, and it hangs at the far end of the hall in an iron frame of its own. Nobody has polished it. Someone has tied a strip of white silk to its clapper, and the silk moves a little in a draught you cannot feel.",
    ],
    choices: [
      {
        id: "touch_the_fifteenth_bell",
        label: "Put your palm flat against the great bell and feel it hum before you let yourself think about what it means.",
        tone: "inquiry",
        next: "foundry_return",
        effects: [{ kind: "setFlag", flag: "touched_fifteenth_bell" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "read_rim_to_kuang",
        label: "Read the rim aloud to Kuang, line by line, so that the man who poured the names hears them spoken back.",
        tone: "truth",
        next: "foundry_return",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "untie_the_silk",
        label: "Untie the white silk from the clapper and fold it into your sleeve, beside anything else you have hidden.",
        tone: "deceit",
        next: "foundry_return",
        effects: [{ kind: "setFlag", flag: "took_silk" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "leave_the_bell_hall",
        label: "Bow to the hall, leave the silk where it is, and climb back to the furnace room.",
        tone: "mercy",
        next: "foundry_return",
      },
    ],
  },
  {
    id: "foundry_return",
    title: "Up the Steps, Back to the Trial",
    paragraphs: [
      "The bell rings again as you climb, and the sound is different now. It is no longer a summons. It is a count, the same bronze rung fifteen times over, and you realise that every bell in the sect is answering the one in the Law Hall. Behind you the furnace is still glowing. Kuang does not wave goodbye, but he does not turn his back either.",
      "At the top of the steps the trial has resumed. The masters are standing, and the disciples sit on the stone with their knees drawn up. Ren Qiao sees you first. His lantern flickers once, and he nods toward the dais as though he has known all along where you went.",
    ],
    choices: [
      {
        id: "carry_the_copy_forward",
        label: "Hold up your copy of the Rim column, so the disciples can see the fifteen names in the same ink.",
        tone: "truth",
        next: "tribunal_bell_rule",
        requires: [{ kind: "flag", flag: "copied_casting_book" }],
        lockedHint: "Requires a copy of the casting book’s Rim column.",
        npcScenario: "SHOW_CASTING_LEDGER",
        effects: [{ kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "show_the_torn_page",
        label: "Take the torn page from your sleeve, unfold it in front of the dais, and read the red line aloud.",
        tone: "truth",
        next: "tribunal_bell_rule",
        requires: [{ kind: "flag", flag: "tore_casting_page" }],
        lockedHint: "Requires the page you tore from the casting book.",
        npcScenario: "SHOW_CASTING_LEDGER",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "say_the_bell_names",
        label: "Tell the trial what the foundry taught you about the bells, without showing anyone the book.",
        tone: "truth",
        next: "tribunal_bell_rule",
        effects: [{ kind: "setFlag", flag: "told_bell_names" }],
      },
      {
        id: "keep_silent_at_the_edge",
        label: "Say nothing about the foundry and take your place at the edge of the terrace.",
        tone: "quiet",
        next: "tribunal_bell_rule",
      },
    ],
  },
];
