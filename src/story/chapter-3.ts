import type { Scene } from "@/engine/types";

/**
 * Chapter Three: The Ash Archive. Elder Su sends the player into the Law Hall's
 * forbidden records to find what became of her sister, Su Mengjiao.
 */
export const chapterThree: Scene[] = [
  {
    id: "archive_gate",
    title: "Chapter Three: The Ash Archive",
    paragraphs: [
      "The order comes at dawn, folded in red wax and delivered by a warden who does not meet your eyes. Elder Su wants the Law Hall’s records searched before dusk. The records are kept in the Ash Archive, a long building in the east wing of the sect, and they hold the name of every disciple who was punished, expelled, or buried. Somewhere in them is the name Su Mengjiao.",
      "You walk to the east wing with the sun still hidden behind the mist. The building is older than the Law Hall around it. Its walls are black with soot that never washed away, and the roof tiles are cracked where a fire once ran across the eaves. Two hundred years ago, the sect’s first archive burned for nine days. The survivors carried what they could out of the flames, and what they could carry became the Ash Archive. Everything inside still smells faintly of smoke.",
      "The main doors are cedar, banded with iron and sealed with a talisman that glows a cold blue whenever the wind pushes against it. Beyond the doors you can hear a sound like breathing. It is the sound of paper settling on paper, thousands of pages shifting in their drawers, as if the building is turning over in its sleep.",
      "A warden stands on the stone bridge that leads to the doors. He is broad in the shoulders and carries a lantern even though the morning is already bright. His name, you learn when he speaks, is Ren Qiao. He keeps the bridge and the doors, and he has been ordered to let no one through without a seal.",
      "\"The archive is closed,\" he says. \"Since the jade was taken, nobody goes in unless the Elder sends them, and the Elder has not sent anyone in fifteen years. Show me your authority, or go back down the steps.\"",
      "You have the order. You also have the eaves above you, wet and steep, and the old ash chute that runs down the hill beneath the wing. A clerk with a ring of keys is somewhere inside, presumably eating his supper while the wardens watch the doors. Each way in carries a different kind of risk, and the warden’s lantern swings slowly back and forth, measuring your patience.",
    ],
    choices: [
      {
        id: "go_front",
        label: "Show Elder Su’s order at the doors and ask to be admitted in her name.",
        next: "archive_front",
      },
      {
        id: "go_roof",
        label: "Climb the wet eaves to the skylight over the east stacks while the warden is looking elsewhere.",
        next: "archive_roof",
        requires: [{ kind: "stat", stat: "qi", min: 15 }],
        lockedHint: "Requires qi 15 or more to climb the eaves without a sound.",
      },
      {
        id: "wait_for_clerk",
        label: "Wait in the shadow of the bridge for the clerk with the keys to come out for his supper.",
        next: "archive_clerk",
      },
      {
        id: "ash_chute",
        label: "Follow the old ash chute that runs down the hill beneath the east wing.",
        next: "archive_ash_chute",
        effects: [{ kind: "addStat", stat: "karma", amount: -1 }],
      },
    ],
  },
  {
    id: "archive_front",
    title: "The Front Doors",
    paragraphs: [
      "The warden reads your order twice, then steps aside with the slow reluctance of a man who would rather be wrong in his own way than right in someone else’s. The doors open with a groan. Warm, dry air pours out, carrying the smell of cedar oil and old ink. Your footsteps echo as you enter, and the blue talisman on the lintel flickers and settles.",
      "Inside, the archive is a forest of drawers. They rise from the stone floor to the high beams, each one no wider than a hand and each one labelled in bronze with a name, a year, or a sentence of judgment. The drawers go on in every direction, and the lamps hung between them throw small circles of light across the dust. Somewhere in the depths, a bell is ringing very faintly, though no one has rung it.",
      "A young man in grey sits at a writing desk near the entrance. He looks up with the terror of someone who has been caught doing nothing wrong for a very long time. His ink is still wet on the page before him. He is Lin Yuan, the keeper of keys, and he reads your order aloud in a voice that cracks on the seal.",
      "\"The Elder’s hand,\" he says. \"Yes. But the Index of the Departed opens only when the Elder herself stands before it, or when a witness of the Law stands in her place. I cannot open that cabinet on a piece of paper, even hers. I am sorry. I would open it if I could.\"",
      "He hesitates, then lowers his voice. \"You are not the first person to come asking about the Index this week. A man in a black hood came yesterday, and he asked for the same drawer. I told him the same thing. He did not like the answer.\"",
      "The lamps flicker. Somewhere deeper in the stacks, a drawer slides shut with a soft click, and the sound lingers in the air like a held breath. Lin Yuan looks toward it and does not finish his sentence.",
    ],
    choices: [
      {
        id: "ask_clerk_for_help",
        label: "Ask Lin Yuan to help you find a way past the Index’s lock.",
        next: "archive_clerk",
      },
      {
        id: "search_quietly",
        label: "Slip past the desk and search the stacks while Lin Yuan goes back to his ink.",
        next: "archive_stacks",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "pose_as_scribe",
        label: "Pick up a brush, put on the grey sleeves of a scribe, and copy the Index by hand.",
        next: "archive_index",
        effects: [{ kind: "setFlag", flag: "posed_as_scribe" }],
      },
      {
        id: "back_out_for_roof",
        label: "Step back into the rain and try the eaves instead.",
        next: "archive_roof",
      },
    ],
  },
  {
    id: "archive_roof",
    title: "The Eaves in the Rain",
    paragraphs: [
      "The tiles are slick with three days of rain. You set your palms on the ridge and let your qi settle into your fingertips, thin and cold, the way your first teacher taught you to hold a branch in a storm. Each step up the slope is a small argument between your boots and the stone. The wind carries the bell-sound from somewhere below, faint and wrong.",
      "Halfway up, you hear a warden’s voice on the bridge below. He is talking to someone who does not answer. You press flat to the tiles and wait until the lantern light slides away across the courtyard, then you continue, one hand after another, until the skylight over the east stacks is within reach.",
      "The glass is clouded with old soot, but it opens on a hinge. Through the gap you see the stacks as a deep canyon of drawers, lit by a single lamp left burning on a reading table. Its flame bends toward the opening, as if it has been waiting for air. Dust rises in the draft, glittering in the light like the scattered pieces of a broken mirror.",
      "The lamp is not the only thing down there. A line of wet footprints leads from the door to the reading table, and they are fresh. Someone was here a moment ago, and they have not yet come back. You can hear soft breathing among the drawers, and it does not match the rhythm of the rain.",
      "Your qi trembles in your fingertips. You can drop through the opening into the canyon of drawers, or you can wait on the ridge until the breathing passes. You could still climb back down to the front doors and admit that you tried a clever thing and failed at it, or you could try to find the warden’s path and follow it.",
    ],
    choices: [
      {
        id: "drop_through_skylight",
        label: "Drop through the skylight into the stacks, landing softly between the drawers.",
        next: "archive_stacks",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "wait_for_breathing",
        label: "Lie still on the ridge and wait until the breathing below has passed.",
        next: "archive_warden",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "return_to_front",
        label: "Climb back down and show Lin Yuan the footprints you saw from above.",
        next: "archive_clerk",
      },
      {
        id: "follow_footprints",
        label: "Follow the wet footprints, which lead toward the Index of the Departed.",
        next: "archive_index",
        effects: [{ kind: "setFlag", flag: "followed_footprints" }],
      },
    ],
  },
  {
    id: "archive_ash_chute",
    title: "The Ash Chute",
    paragraphs: [
      "The chute is an old wooden tube that runs under the hill, built to carry the ash of the burned archive down to the river. It is black inside, slick with a century of soot, and it smells of wet charcoal. You go in on your belly, pushing with your elbows, and the grey dust coats your sleeves and your hair within three steps.",
      "The tube slopes gently downward for a long time. Then it turns, and you slide the rest of the way into a cellar lit by a single pale lantern. The floor is covered with fine ash, a grey carpet that takes the print of every step. Iron bars line one wall, and above them a grate lets in the faint sound of paper shifting in the stacks above.",
      "Scratched into the stone beside the bars are rows of names. Some are cut neatly, some scrawled in a hurry, and a few are scarred so deep the scratches look like claw marks. Beside each name is a mark that could be a date, or a count of days, or a tally of something that was not allowed to stop. You recognise the last mark. It is the same mark carved beside the altar in the memorial, the one that looked like a cracked circle.",
      "A draft comes through a second passage to the left. It is cooler than the air in the cellar and carries the smell of cedar and the faint sweetness of rot. Somewhere down that passage a voice is humming, a low tune with no words. It stops the moment you hold your breath.",
      "Above the grate, the stacks are quiet. You can climb up through the bars into the archive, or you can follow the cold draft toward the vault, or you can stop to read the names carefully before anything else happens. The chute is the only way back to the hill, and you do not know how long it will stay unguarded.",
    ],
    choices: [
      {
        id: "climb_grate",
        label: "Climb through the grate and come up among the stacks.",
        next: "archive_stacks",
      },
      {
        id: "follow_cold_draft",
        label: "Follow the cold draft and the humming down the left-hand passage.",
        next: "archive_vault",
        effects: [{ kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "read_scratched_names",
        label: "Read every scratched name and copy the marks into your memory.",
        next: "archive_ledger",
        effects: [{ kind: "addStat", stat: "insight", amount: 6 }],
      },
      {
        id: "crawl_back_up",
        label: "Crawl back up the chute and return to the gate before you are missed.",
        next: "archive_gate",
        effects: [{ kind: "addStat", stat: "karma", amount: -1 }],
      },
    ],
  },
  {
    id: "archive_clerk",
    title: "The Keeper of Keys",
    paragraphs: [
      "Lin Yuan sits with the ring of keys in both hands, turning it slowly as though the iron might tell him something. His ink has dried on the page. He is not much older than the disciples you trained beside at the outer gate, but his face has the grey tiredness of someone who has counted too many nights without sleep.",
      "\"My mother was a disciple of the Law Hall,\" he says quietly, without being asked. \"She was expelled eighteen years ago for bringing a child into the sect without a registration. The Elder signed the order herself. I was the child. The Law Hall let me stay, as long as I worked in the archive and never asked questions about who the drawers belonged to.\"",
      "He lifts the key ring and sets it on the desk between you. One key is larger than the rest, black iron with a crescent on its bow. \"This opens the Index drawers on the lower shelves. It does not open the Elder’s own cabinet. It also does not open anything if the wardens think I gave it to you. If they ask, I will say I was asleep.\"",
      "You understand what he is risking. You also understand that he will not offer the key twice. The question is what he wants in return, and whether he is brave enough to say it.",
      "\"I want my mother’s name to stay out of the Law’s ledgers,\" he says. \"That is all. I do not want a pardon for her, or an apology. Only to be left alone with what I already know.\"",
    ],
    choices: [
      {
        id: "plead_for_clerk",
        label: "Promise to keep Lin Yuan and his mother out of the Law’s ledgers, and mean it.",
        next: "archive_index",
        npcScenario: "PLEAD_FOR_CLERK",
        effects: [{ kind: "setFlag", flag: "protected_clerk" }],
      },
      {
        id: "bribe_clerk",
        label: "Press a spirit stone into his palm and take the key while he is still counting it.",
        next: "archive_index",
        effects: [
          { kind: "setFlag", flag: "bribed_clerk" },
          { kind: "addStat", stat: "karma", amount: -3 },
        ],
      },
      {
        id: "threaten_clerk",
        label: "Tell him you will report his negligence unless he gives you the key tonight.",
        next: "archive_index",
        effects: [
          { kind: "setFlag", flag: "threatened_clerk" },
          { kind: "addStat", stat: "karma", amount: -6 },
        ],
      },
      {
        id: "take_key_quietly",
        label: "Take the key while he is distracted by a sudden noise from the drawers.",
        next: "archive_stacks",
        effects: [
          { kind: "setFlag", flag: "stole_key" },
          { kind: "addStat", stat: "karma", amount: -4 },
          { kind: "addStat", stat: "insight", amount: 3 },
        ],
      },
    ],
  },
  {
    id: "archive_stacks",
    title: "Among the Stacks",
    paragraphs: [
      "The stacks run on for longer than the building should allow. Every row is a year. Every shelf is a season of disgrace. The scrolls inside are tied with red thread, and the thread has faded to the colour of old blood. Some scrolls are as thin as a leaf. Others are bound like books and weigh enough to bruise a hand.",
      "You move through the rows carefully. Ash lies in the grooves between the drawers, and every footstep leaves a print that someone could follow. Halfway down the third row, a lamp sits on the floor, half-burned and tipped on its side. Its oil has soaked into the paper beneath it, and the paper has gone brown at the edges. Someone was reading here, and left in a hurry.",
      "Among the scrolls on the nearest shelf, one has been pulled half out and left leaning, as if it wanted to be found. The thread is new. You can smell the wax on it. Written on its label, in a careful and steady hand, are three words: For Wanru, read last.",
      "The stacks branch in four directions. The Index of the Departed lies somewhere past the first row, where the bronze labels grow brighter with polish. The letters are deeper in the right-hand rows, behind a screen of carved cedar. The ledger of punishments is down the left aisle, where the air is colder and the lamps burn low. The lamp on the floor is still warm, and its flame is only a bead of light in a dark wick.",
      "You need to decide where to go first, because the archive has many keepers and only one of them has been kind so far. The warden on the bridge will count the hours. Lin Yuan will count the drawers. The Elder, who sent you here, will count the days until you come back with an answer she can use.",
    ],
    choices: [
      {
        id: "to_the_index",
        label: "Go straight to the Index of the Departed and find the name you came for.",
        next: "archive_index",
      },
      {
        id: "to_the_letters",
        label: "Follow the screen of cedar to the rows of letters and look for the scroll marked For Wanru.",
        next: "archive_letter",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "to_the_ledger",
        label: "Walk down the cold left aisle to the ledger of punishments.",
        next: "archive_ledger",
      },
      {
        id: "knock_lamp",
        label: "Nudge the tipped lamp into the dry paper to draw the keepers down to the stacks.",
        next: "archive_fire",
        effects: [
          { kind: "setFlag", flag: "started_fire" },
          { kind: "addStat", stat: "karma", amount: -5 },
        ],
      },
    ],
  },
  {
    id: "archive_index",
    title: "The Index of the Departed",
    paragraphs: [
      "The Index is a wall of bronze drawers. Each drawer is labelled with a name in the old script, and each name is followed by a few lines that summarise a life. Most of the lines are short: expelled, executed, sealed, reassigned. The Index does not waste ink on feelings. It records what the Law did and when the Law did it.",
      "You find the drawer for the Su line without difficulty. It is the third from the bottom, polished by fifteen years of careful hands. Inside is a single card, and on it, in the same neat script that appears on the Elder’s ledger, you read the entry you came for.",
      "Su Mengjiao. Third of the Su line. Disciple of the Law Hall, admitted at twelve, distinguished in the study of qi. Expelled for practising the forbidden Blood Lotus Sutra in defiance of the sect’s order. Descended into the Crimson Abyss on the night of the Sealing, and was not recovered. Death presumed.",
      "Beneath the entry, in a different ink, someone has added a second line. It is so faint you have to tilt the card toward the lamp to read it. Letter received by the Law Hall; held for the Elder’s eyes alone.",
      "Your breath catches. The Elder told the sect her sister died in the mist. The card says Mengjiao went into the mist on her own, and that her last words were held for the Elder. Someone has been keeping those words from Elder Su for fifteen years, and the Index suggests that someone was the Law Hall itself.",
      "Footsteps sound at the end of the row. They are slow and deliberate, and they stop when they reach the screen of cedar. Someone is standing there, listening to the drawers.",
    ],
    choices: [
      {
        id: "find_the_letter",
        label: "Slide the card into your sleeve and go to the letters at once, before the footsteps reach you.",
        next: "archive_letter",
        effects: [{ kind: "setFlag", flag: "saw_index_entry" }],
      },
      {
        id: "check_ledger",
        label: "Check the Law’s ledger of punishments to see who else was sealed on the same night.",
        next: "archive_ledger",
        effects: [{ kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "face_footsteps",
        label: "Step out from behind the drawers and face whoever is listening.",
        next: "archive_warden",
        effects: [{ kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "report_index_entry",
        label: "Take the card straight to Elder Su, before anyone else can read it.",
        next: "archive_report",
        effects: [{ kind: "setFlag", flag: "took_index_card" }],
      },
    ],
  },
  {
    id: "archive_letter",
    title: "For Wanru, Read Last",
    paragraphs: [
      "The scroll is wrapped in silk that has been folded and refolded many times, and the seal on it is broken. You unroll it slowly. The paper is thin and the ink has faded at the edges, but the handwriting is quick and bright, the hand of someone who wrote with the sun on her desk and did not expect to be interrupted.",
      "Wanru, I know the sect counts the bars of the Law every night, and you are the one who taught me to count the stars instead. I am writing from the edge of the mist. The Crimson Abyss is not only a wound in the mountain. The seal is weakening, and the Law Hall knows it, and the Law Hall has been hiding the knowledge behind its rules.",
      "I have found a sutra that might teach us how to hold the seal without the jade. It is called the Blood Lotus, and the Law forbids it, and I have read it by lamplight every night for a month. It is dangerous. It is not evil, Wanru. It is a way of making the mist answer when it is called.",
      "If they punish me for this, do not argue with them. Keep the bars counted and the lamps lit, and when the mist rises again, remember that I tried to bring back the light. The last page is with the Index. Read it when you are alone. I cannot write the rest without the risk of it being read by someone else.",
      "The letter ends there. Below the last line, the paper is stained with a dark brown circle, as if a cup was set down on it while the ink was still wet. The date beside the signature is the night of the Sealing.",
    ],
    choices: [
      {
        id: "read_aloud",
        label: "Read the letter aloud in the empty stacks, slowly, as if the words could carry across fifteen years.",
        next: "archive_reading_room",
        effects: [
          { kind: "setFlag", flag: "read_letter" },
          { kind: "addStat", stat: "insight", amount: 5 },
        ],
      },
      {
        id: "pocket_letter",
        label: "Fold the letter into your sleeve before anyone else sees it.",
        next: "archive_warden",
        effects: [{ kind: "setFlag", flag: "pocketed_letter" }],
      },
      {
        id: "burn_letter",
        label: "Hold the letter over the lamp and let the edge catch. The Law should not have it.",
        next: "archive_fire",
        effects: [
          { kind: "setFlag", flag: "burned_letter" },
          { kind: "addStat", stat: "karma", amount: -4 },
        ],
      },
      {
        id: "copy_letter",
        label: "Copy every line into your own notebook in the same order, leaving the original untouched.",
        next: "archive_stacks",
        effects: [{ kind: "setFlag", flag: "copied_letter" }],
      },
    ],
  },
  {
    id: "archive_ledger",
    title: "The Ledger of the Sealing",
    paragraphs: [
      "The ledger of punishments is kept in a long cabinet at the end of the cold aisle. Its drawers are older than the others, and their wood has warped with damp until some of them will not open at all. You pull the one marked with the year of the Sealing, and it slides out with a groan that makes the lamps flicker.",
      "Fourteen names are written on the page. Fourteen disciples were sent to the abyss path on the night the jade was first set into the altar. The Law called it a cleansing. Each name is followed by a single word, sealed. Beneath the names is a line of small print that you have to lean close to read: Orders signed and witnessed by the Elder of the Law Hall, Su Wanru.",
      "Her signature is there, neat and upright, the same hand that signs the Law Hall’s daily register. It is beside every name on the page. The ink on the last name is slightly darker than the others, as though she pressed harder when she came to Mengjiao’s line. You remember her thumb resting on the ledger in the Law Hall, pressing hard on a single line.",
      "The room is silent except for the soft sound of paper settling in the drawers. Somewhere near the door, a warden’s boots pass slowly across the stone and stop. They do not come in. The ledger holds you the way a tomb holds the people it buries, patiently and without any sympathy for the living.",
      "There is a loose sheet tucked into the back of the cabinet. It is the copy of a sealing order, unsigned, with a space left blank for the Elder’s seal. A note in the margin, in Lin Yuan’s careful hand, reads: The Elder signs all sealings herself. She has never once asked for a second copy.",
    ],
    choices: [
      {
        id: "copy_signature",
        label: "Copy the signature exactly, stroke for stroke, so you can compare it with the Elder’s hand later.",
        next: "archive_report",
        effects: [{ kind: "setFlag", flag: "copied_signature" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "take_loose_sheet",
        label: "Slip the loose sheet of the sealing order into your robe.",
        next: "archive_warden",
        effects: [
          { kind: "setFlag", flag: "took_sealing_order" },
          { kind: "addStat", stat: "karma", amount: -3 },
        ],
      },
      {
        id: "go_to_vault",
        label: "Put the ledger back and search the cellar vault for whatever the Law did not want written down.",
        next: "archive_vault",
      },
      {
        id: "read_reading_room",
        label: "Carry the ledger to the reading room and study it there, where the lamps burn steady.",
        next: "archive_reading_room",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
    ],
  },
  {
    id: "archive_warden",
    title: "The Warden’s Lantern",
    paragraphs: [
      "Ren Qiao comes around the end of the row with the lantern held high. He does not hurry. The light finds your sleeves first, then your face, then the drawers behind you, and he stops with his head tilted as if he is listening for a lie in the air. He has the look of a man who was taught early that the Law does not need to be loud to be obeyed.",
      "\"You are not on the list,\" he says. \"The Elder sent nobody to the archive today. I checked with the gate at dawn. And yet the skylight is open, and there is ash on the bridge, and I have a clerk who cannot stop shaking his hands.\"",
      "He sets the lantern on the nearest shelf. The flame stands straight. In the quiet, you can see his face properly for the first time. He is older than you assumed, with a scar across the bridge of his nose and a warden’s stillness in his shoulders. His eyes go to the card in your hand, then to the letter sleeve, then back to your face.",
      "\"Fifteen years ago,\" he says slowly, \"I stood on this bridge on the night of the Sealing. I was seventeen. I watched the Law carry fourteen people to the abyss path, and I held the lantern for them. One of them was a girl who used to teach me the qi exercises in the outer courtyard, when the other boys were too proud to ask. Her name was Mengjiao. I have not said it aloud since.\"",
      "He lowers his voice until it is almost gentle. \"So tell me what you are, and what you are doing with her name.\"",
    ],
    choices: [
      {
        id: "honest_with_warden",
        label: "Tell Ren Qiao the whole truth: the Elder sent you, you came in by the roof, and you found her name.",
        next: "archive_report",
        effects: [{ kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "show_order",
        label: "Show him the Elder’s red-sealed order and tell him to check it with the Law Hall.",
        next: "archive_report",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "fight_warden",
        label: "Knock the lantern from the shelf and go for the nearest exit while he is blinded.",
        next: "archive_fire",
        effects: [
          { kind: "addStat", stat: "karma", amount: -8 },
          { kind: "addStat", stat: "qi", amount: 4 },
        ],
      },
      {
        id: "slip_down_chute",
        label: "Tell him you will come to the Law Hall in the morning, then slip down the ash chute the moment he turns.",
        next: "archive_ash_chute",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
    ],
  },
  {
    id: "archive_fire",
    title: "The Fire in the Stacks",
    paragraphs: [
      "The fire starts quietly. A thin line of blue flame creeps along the oil stain beneath the tipped lamp, runs under a shelf of thread-bound scrolls, and then climbs. The cedar drawers catch with a sound like someone clearing their throat. Smoke rolls down the aisle in a grey wave, and the bronze labels begin to tick as they heat.",
      "You have seconds to decide what the fire will take. The scrolls at your feet are the oldest in the building, the ones that survived the first burning and have been waiting two centuries to be read. The drawers of the Index are farther away, but the smoke is already between you and them. The letter sleeve is somewhere in your robe. The ledger is still open on the shelf behind you, its pages curling.",
      "Ren Qiao’s voice calls from the bridge. He is shouting for the wardens, and the shout is already turning into a bell. The archive is full of people who have spent their lives making sure nothing is lost. The fire does not care about any of them.",
      "Lin Yuan appears at the end of the row, coughing, his veil pulled up over his nose. He sees the flames and freezes, and for a moment he looks exactly like a boy who has seen the mist come up the mountain again.",
    ],
    choices: [
      {
        id: "beat_out_fire",
        label: "Beat the flames out with your sleeves and save as many scrolls as your arms can hold.",
        next: "archive_report",
        effects: [
          { kind: "addStat", stat: "karma", amount: 3 },
          { kind: "addStat", stat: "qi", amount: -2 },
        ],
      },
      {
        id: "drag_clerk_out",
        label: "Drag Lin Yuan out of the smoke by the collar and make for the front doors.",
        next: "archive_clerk",
        effects: [{ kind: "addStat", stat: "karma", amount: 5 }],
      },
      {
        id: "let_index_burn",
        label: "Leave the Index of the Departed to burn, and carry only what fits in your sleeve.",
        next: "archive_report",
        effects: [
          { kind: "setFlag", flag: "let_index_burn" },
          { kind: "addStat", stat: "karma", amount: -6 },
        ],
      },
      {
        id: "call_wardens",
        label: "Run to the bridge and shout for the wardens with Ren Qiao, before the whole wing goes up.",
        next: "archive_warden",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
  {
    id: "archive_vault",
    title: "The Cellar Vault",
    paragraphs: [
      "The humming leads you to a vault beneath the stacks. It is a small room cut into the living rock, with walls that are smooth as glass and a ceiling so low you have to stoop. The air is cold and dry and perfectly still, and it carries no smell at all, which is more unsettling than the stench of rot you expected.",
      "Along one wall stands a row of lacquered boxes. Each is the size of a fist and sealed with a band of paper. The paper is yellow, and the seals on it are the old marks of the Law Hall. On the top box, in the same neat script as the ledger, someone has written: Spare, from the first sealing. Never to be returned to the altar.",
      "You break the seal. Inside, on a bed of grey silk, lies a shard of pale green jade, carved on one face with a pattern of concentric circles. You recognise it at once. It is the same pattern as the altar’s cracked base in the memorial, and the same as the pale stone of the Elder’s chair. It is warm to the touch, and it does not hum.",
      "The shard is not the Sealing Jade. It is a piece of it, broken away, and kept. The Law Hall has been keeping a piece of the seal in a box where no one would look, which means that the seal in the altar may not be whole. It may never have been whole.",
      "The humming starts again, close to your ear. This time it has a word in it, too soft to make out. Then the vault is still, and the shard in your palm is only a cold stone.",
    ],
    choices: [
      {
        id: "take_shard",
        label: "Wrap the shard in silk and take it up to the Elder, as evidence that the altar was never whole.",
        next: "archive_report",
        effects: [
          { kind: "setFlag", flag: "took_shard" },
          { kind: "addStat", stat: "insight", amount: 6 },
        ],
      },
      {
        id: "leave_shard",
        label: "Put the shard back in its box and reseal it exactly as you found it.",
        next: "archive_reading_room",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "listen_to_hum",
        label: "Sit in the cold silence and listen for the word until you can say it back.",
        next: "archive_rest",
        effects: [
          { kind: "setFlag", flag: "heard_the_hum" },
          { kind: "addStat", stat: "qi", amount: 5 },
        ],
      },
      {
        id: "back_to_chute",
        label: "Return the way you came, through the cold draft and back up the chute.",
        next: "archive_ash_chute",
      },
    ],
  },
  {
    id: "archive_reading_room",
    title: "The Quiet Reading Room",
    paragraphs: [
      "The reading room is small and very old. Its window is shuttered, and its single table is worn smooth by the elbows of generations of archivists. A lamp burns on the table, and beside it a stack of paper is stacked as neatly as if someone meant to return to it at any moment. The top sheet is covered in fine brush strokes, drawn in a hand that has been practising the same character over and over.",
      "It is Mengjiao’s work. You recognise the hand from the letter. The strokes are sharp and impatient, and in the margins she has drawn small circles, each one a little darker than the last. The circles are the same as the ones carved into the shard. She was trying to understand the seal the way other disciples studied the mountain: by walking around it slowly, from every side.",
      "The Blood Lotus technique is described on the third sheet. It is not a single set of movements. It is a conversation: the cultivator opens a meridian, offers the mist a thread of their own qi, and then listens for the mist’s answer. Mengjiao has written that the mist does not want to be fed. It wants to be heard. Her last note, in the same bright hand, reads: The abyss is not hungry. It is grieving.",
      "You feel the word from the vault pressing at the back of your mind, and for a moment you almost understand it. The room is warm now, though the lamp is the only heat in it. The shutters rattle softly, as if someone outside has just stopped trying to open them.",
      "There is one more sheet, folded beneath the rest. It is a letter to the Elder, dated a month before the Sealing. It has not been sent.",
    ],
    choices: [
      {
        id: "study_technique",
        label: "Study the Blood Lotus technique line by line until you could draw it from memory.",
        next: "archive_report",
        effects: [
          { kind: "setFlag", flag: "studied_lotus" },
          { kind: "addStat", stat: "insight", amount: 10 },
          { kind: "addStat", stat: "karma", amount: -2 },
        ],
      },
      {
        id: "read_unsent_letter",
        label: "Unfold the unsent letter and read it before you decide anything else.",
        next: "archive_report",
        effects: [{ kind: "setFlag", flag: "read_unsent_letter" }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
      {
        id: "close_book",
        label: "Close every sheet, square the stack, and leave the room exactly as you found it.",
        next: "archive_report",
        effects: [{ kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "hide_in_room",
        label: "Hide in the reading room until the wardens have finished searching the stacks.",
        next: "archive_rest",
        effects: [{ kind: "addStat", stat: "karma", amount: -1 }],
      },
    ],
  },
  {
    id: "archive_report",
    title: "The Report",
    paragraphs: [
      "Elder Su does not look up when you enter the Law Hall. She is writing at her desk, and the lamps have been burning all night. Her grey hair is loose for the first time since you met her, and the silver comb lies on the desk beside her hand. She does not seem to have slept.",
      "\"You went into the Ash Archive,\" she says, without raising her voice. \"The gate reported a skylight, and the wardens reported smoke, and Ren Qiao reported nothing at all, which is the most worrying of the three. Tell me what you found, Wanderer. Tell me in order, and tell me what you did with it.\"",
    ],
    extras: [
      {
        when: [{ kind: "flag", flag: "took_index_card" }],
        paragraphs: ["The Index card lies face-down on the desk beside her. She has not turned it over yet. Her finger rests on the edge as though she is afraid of what it will say."],
      },
      {
        when: [{ kind: "flag", flag: "read_letter" }],
        paragraphs: ["Her face changes when you mention the letter. Only a little. She closes her eyes and holds them closed for the length of one breath."],
      },
      {
        when: [{ kind: "flag", flag: "let_index_burn" }],
        paragraphs: ["The smell of smoke still clings to your robes. Elder Su notices it and asks, very quietly, which drawer you let burn."],
      },
      {
        when: [{ kind: "flag", flag: "took_shard" }],
        paragraphs: ["The wrapped shard sits in your sleeve, heavy as a stone. When you set it on the desk, the lamp flame bends toward it, as if drawn by a magnet."],
      },
    ],
    choices: [
      {
        id: "report_letter",
        label: "Tell her about the letter, the Index card, and the words held for her eyes alone.",
        next: "archive_rest",
        npcScenario: "REPORT_LETTER",
        effects: [{ kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "report_ledger",
        label: "Ask her about the signature on the sealing orders, and watch her face while you do.",
        next: "archive_rest",
        npcScenario: "REPORT_LEDGER",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "withhold_letter",
        label: "Tell her the archive was empty, the card was lost in the smoke, and nothing of Mengjiao remains.",
        next: "archive_rest",
        npcScenario: "WITHHOLD_LETTER",
        effects: [{ kind: "addStat", stat: "karma", amount: -7 }],
      },
      {
        id: "confess_fire",
        label: "Confess the fire in the stacks to Elder Su, and take whatever punishment follows.",
        next: "archive_rest",
        npcScenario: "CONFESS_FIRE",
        effects: [{ kind: "addStat", stat: "karma", amount: 4 }],
      },
    ],
  },
  {
    id: "archive_rest",
    title: "A Night in the Guest Cell",
    paragraphs: [
      "The Law Hall gives you a guest cell at the back of the building, a narrow room with a paper window and a bed of cold cedar. You lie down in your clothes and close your eyes, and sleep takes you almost at once. It is not restful. You dream of a girl in grey robes sitting on the edge of a red lotus pond, humming the same tune you heard in the vault, while the water rises slowly around her feet.",
      "When you wake, the room is dark and the paper window glows faintly from the lamps in the courtyard. Someone is walking past the cell door, slowly, one set of footsteps and then a long pause and then the same footsteps again. The pause always comes at the same place, as if the walker is stopping to listen at your door.",
      "You can hear the bells of the Law Hall striking the second watch of the night. Somewhere beyond the courtyard, a single lamp is still burning in a high window. You recognise the window. It belongs to the Elder’s private room.",
      "The footsteps stop again outside your door. A shadow crosses the paper, and then a folded scrap of paper slides under the frame and lies still on the floor. You can see a few characters written on it in dark ink. They say only: Come if you are awake.",
    ],
    choices: [
      {
        id: "go_to_window",
        label: "Go across the courtyard to the Elder’s window and knock on the shutter.",
        next: "archive_night_visit",
      },
      {
        id: "sleep_on",
        label: "Ignore the scrap of paper and go back to sleep until the morning bell.",
        next: "archive_dawn",
        effects: [{ kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "write_notes",
        label: "Light a candle and write down everything you dreamed, before the dream fades.",
        next: "archive_dawn",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "burn_scrap",
        label: "Burn the scrap of paper in the candle and pretend the footsteps never stopped at your door.",
        next: "archive_dawn",
        effects: [{ kind: "addStat", stat: "karma", amount: -3 }],
      },
    ],
  },
  {
    id: "archive_night_visit",
    title: "The Window at Night",
    paragraphs: [
      "The courtyard is cold, and the flagstones are wet with the last of the rain. You walk across them slowly. The Elder’s window is open a crack, and the lamp inside casts a long yellow bar across the stones. You can see her shadow moving behind the paper screen: sitting, standing, sitting again, with the stillness of someone who has been waiting for a long time.",
      "You knock on the shutter. The shadow stops moving. For a long moment there is no sound at all, and then the screen slides back, and Elder Su Wanru looks out at you with her hair still loose and her face grey in the lamplight.",
      "\"You came,\" she says. \"I thought you might not. Most people who come to my window at night come to confess something, and most of them lie while they do it.\" She does not invite you in. She leans her forearms on the sill and looks at you as if you were a page she has been trying to read in poor light.",
      "\"Mengjiao used to climb out of this window,\" she says. \"Every night, for a year, when she was twelve and I was sixteen. She told me the stars were better from the roof. I never went up to see them with her. I was afraid of the height. Afterward I was afraid of nothing else, and that is the reason I became what I am.\"",
    ],
    choices: [
      {
        id: "night_visit_speak",
        label: "Tell her what you read in the reading room, and let her decide what it means.",
        next: "archive_dawn",
        npcScenario: "NIGHT_VISIT",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "watch_silently",
        label: "Say nothing. Stand under her window until she closes the screen again.",
        next: "archive_dawn",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "leave_card",
        label: "Leave the Index card on the windowsill, face up, so she can read the name herself.",
        next: "archive_dawn",
        effects: [{ kind: "setFlag", flag: "left_card" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "walk_away",
        label: "Thank her for the window and walk back across the courtyard without looking back.",
        next: "archive_dawn",
        effects: [{ kind: "addStat", stat: "karma", amount: -1 }],
      },
    ],
  },
  {
    id: "archive_dawn",
    title: "Dawn at the Sutra Door",
    paragraphs: [
      "The morning bell rings over the Law Hall, and the mist drifts down from the peak to lie across the courtyard like a second layer of stone. The Elder’s instructions have been delivered to your door in a sealed packet. They are brief. The inner sanctum holds the Blood Lotus Sutra, the Law Hall keeps it behind a door no disciple may open, and you are to open that door before the next dusk and bring back whatever you find.",
      "The packet contains a bronze key, cold and old, shaped like a lotus bud. Lin Yuan’s handwriting is on the wrapping. He has written only a single line beneath the seal: The door is older than the Law. Do not let it teach you how to open it.",
      "Below the wall, the warden Ren Qiao is waiting with a plain grey cloak folded over his arm. He does not say anything when he sees you. He simply holds the cloak out, and when you take it he nods once, the way one soldier nods to another after a long night on the same wall.",
      "The sutra door lies at the top of the inner stair, past the memorial and beyond the last of the Law’s bells. You can see its outline from here, a narrow red gate set into the living cliff, with a mist that never quite clears from its threshold. It is not far. It has never been far. The Law Hall has simply never allowed anyone to walk there.",
    ],
    choices: [
      {
        id: "go_at_bell",
        label: "Go up the inner stair at once, before the mist can thicken across the path.",
        next: "sutra_door",
        effects: [{ kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "eat_before_climb",
        label: "Eat a bowl of millet and dried plum before you climb, so the stair does not take you by surprise.",
        next: "sutra_door",
        effects: [{ kind: "addStat", stat: "qi", amount: 4 }],
      },
      {
        id: "check_pack",
        label: "Lay out everything you carry and check each item before you climb.",
        next: "sutra_door",
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "ask_escort",
        label: "Ask Ren Qiao to walk beside you as far as the memorial, and accept his company.",
        next: "sutra_door",
        effects: [{ kind: "setFlag", flag: "warden_escort" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
    ],
  },
];
