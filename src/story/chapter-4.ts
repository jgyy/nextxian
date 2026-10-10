import type { Scene } from "@/engine/types";

/**
 * Chapter Four: The Sutra Door. The player climbs the inner stair beneath the
 * memorial, past the sect's buried cells, toward the gate that holds the Blood Lotus Sutra.
 */
export const chapterFour: Scene[] = [
  {
    id: "sutra_door",
    title: "Chapter Four: The Sutra Door",
    paragraphs: [
      "The red gate stands at the top of the inner stair like a wound that has been stitched shut. It is taller than three men and narrower than one, and its lacquer is so old that the grain of the wood shows through in long pale veins. Two bronze rings hang from its face. Between them, set into the wood at the height of a person’s heart, is a keyhole shaped like a closed lotus bud.",
      "The mist does not rise from the gate. It sinks toward it. Thin white threads fall down the cliff face and pool at the threshold, and where they touch the stone they turn faintly red and then disappear. The air is warmer here, which feels wrong after the cold of the stair. It smells of iron and of something sweet underneath, like a flower that has been left too long in a vase.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_door_2",
        page: true,
      },
    ],
  },
  {
    id: "sutra_door_2",
    title: "",
    paragraphs: [
      "The bronze key from Lin Yuan’s packet sits in your palm, its lotus bud cold against your skin. It fits the keyhole with a small click that you feel in your teeth. Then nothing happens. The gate stays shut. The mist continues to pour down the cliff in slow, patient threads, and somewhere inside the rock a bell rings once, very softly, as if it is asking whether you are ready.",
      "Ren Qiao stands three steps below you on the stair. He has not climbed farther than the memorial in fifteen years, and he keeps his eyes fixed on the stone at his feet as though looking higher would make the wall move. \"The Law Hall calls this the Sutra Door,\" he says. \"The disciples call it the Gate That Listens. I have never heard anyone say what it wants in return for opening.\"",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_door_3",
        page: true,
      },
    ],
  },
  {
    id: "sutra_door_3",
    title: "",
    paragraphs: [
      "You have several ways to begin. You could turn the key again and hope the second try is different. You could read the carvings around the frame, which are thick with characters and some of them are fresh. You could call on the mist with your own qi, the way Mengjiao’s letter described, and listen for an answer. Or you could stand still and wait for Ren Qiao to offer advice, since he is the only person here who has ever known the Law’s secrets from the outside.",
      "The bell rings again, and this time the threads of mist shiver in a pattern that looks almost like a hand opening. The gate does not move. But the keyhole, which was dark a moment ago, now shows the faint shape of a lotus petal, glowing as if lit from behind.",
    ],
    choices: [
      {
        id: "turn_key_again",
        label: "Turn the bronze key again, slowly, feeling for the catch with your thumb.",
        tone: "inquiry",
        next: "sutra_inscriptions",
        effects: [{ kind: "setFlag", flag: "turned_key" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "read_carvings",
        label: "Read the carvings around the frame before you touch the gate again.",
        tone: "inquiry",
        next: "sutra_inscriptions",
        effects: [{ kind: "setFlag", flag: "read_carvings" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "call_the_mist",
        label: "Draw a thread of your own qi from your palm and offer it to the mist, the way the letter described.",
        tone: "force",
        next: "sutra_mist_call",
        effects: [{ kind: "addStat", stat: "qi", amount: 3 }],
      },
      {
        id: "ask_ren",
        label: "Ask Ren Qiao what the Law Hall knows about the gate, and believe whatever he says.",
        tone: "inquiry",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "asked_ren_about_gate" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "sutra_inscriptions",
    title: "The Carved Lintel",
    paragraphs: [
      "The carvings run in three bands around the gate. The lowest band is in the ordinary script of the Law Hall, and it lists the names of the sect’s dead in a long, careful procession. The middle band is older, written in a style that uses curves where the Law uses straight lines. The top band is the oldest of all, and most of it has been scraped away, leaving only a few characters that stand out against the faded stone like stars through cloud.",
      "You read the lowest band first, because it is the easiest. Each name is followed by the year of death and a single phrase. Taken by the mist. Taken by the wardens. Taken by their own hand. The lines continue down the lintel and around the frame until they reach the stone threshold, where the last name has been freshly cut. The chisel marks are still pale in the grooves.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_inscriptions_2",
        page: true,
      },
    ],
  },
  {
    id: "sutra_inscriptions_2",
    title: "",
    paragraphs: [
      "The name is Su Mengjiao. Beside it, someone has added a line in the Law’s script, but the phrase has been struck through and replaced. The new phrase reads simply: Returned to the gate. It is not the phrase of a death. It is the phrase of a homecoming.",
      "The middle band is harder. The curves have been worn by a century of fingers, and the meaning sits behind them like a tune you half remember. Mengjiao’s handwriting from the archive comes back to you. Her circles, her impatient strokes, the way she wrote the word for listening. You recognise the same character cut into the lintel, and you realise she carved it herself, years after she was supposed to be dead.",
      "The top band is almost gone. Only a few characters survive, and they make a sentence you can barely read: What is sealed is not gone. What is gone is not sealed. The mist has only been waiting for someone to open the door from the inside.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_inscriptions_3",
        page: true,
      },
    ],
  },
  {
    id: "sutra_inscriptions_3",
    title: "",
    paragraphs: [
      "Behind you on the stair, Ren Qiao shifts his weight and clears his throat. He has been reading too, and he has not liked what he found. \"That is not the Law’s language,\" he says quietly. \"The Law would never carve a homecoming on a gate it guards. Someone wanted this door to be found.\"",
    ],
    choices: [
      {
        id: "copy_all_bands",
        label: "Copy all three bands into your notebook, character by character, even the ones you do not understand.",
        tone: "inquiry",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "copied_lintel" }, { kind: "addStat", stat: "insight", amount: 6 }],
      },
      {
        id: "rub_out_homecoming",
        label: "Scrape the struck-through phrase away with your thumbnail, so the Law cannot read its own shame.",
        tone: "deceit",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "scraped_name" }, { kind: "addStat", stat: "karma", amount: -4 }],
      },
      {
        id: "touch_the_name",
        label: "Lay your palm over Mengjiao’s name and hold it there until the stone is warm.",
        tone: "mercy",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "touched_name" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "tell_ren_the_words",
        label: "Read the top band aloud to Ren Qiao, slowly, so he can hear what the mist was waiting for.",
        tone: "truth",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "read_top_band" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
    ],
  },
  {
    id: "sutra_mist_call",
    title: "Calling the Mist",
    paragraphs: [
      "You kneel on the wet stone at the threshold, set your palm flat on the sill, and open your meridians one by one. The first is cold and bright, like a spring running under ice. The second is heavier, a river that does not like to be disturbed. The third is the one that frightens you, because it is warm and it has a taste, a sweetness that rises into your mouth like a sip of wine before the bitterness arrives.",
      "You draw a thread of qi out through your palm. It leaves you as a pale line of light and spreads across the threshold. The mist does not rush to meet it. It considers it, the way a sleeping animal considers a sound at the edge of its den. Then the mist opens, very slowly, and the thread of your qi slides into it like a fish into deep water.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_mist_call_2",
        page: true,
      },
    ],
  },
  {
    id: "sutra_mist_call_2",
    title: "",
    paragraphs: [
      "For a moment you cannot tell where your body ends. You feel the cliff breathing under your knees, the stair breathing beneath it, the bells sleeping inside the stone. You hear a voice that is not Mengjiao’s and not your own, saying the same word over and over until it becomes a question: Who calls. You answer without thinking. You say your name, and then, after a pause you did not intend, you say hers.",
      "The mist answers by lifting. A column of white fog rises from the threshold to the height of the gate and opens like a pair of hands. Between the fingers you see a staircase going up into a red haze, and at the top of it a pool of still water, and in the water the reflection of a woman in grey robes who is looking straight at you.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_mist_call_3",
        page: true,
      },
    ],
  },
  {
    id: "sutra_mist_call_3",
    title: "",
    paragraphs: [
      "The reflection smiles. You do not know her face, and yet you know it at once. It is Elder Su’s face, younger by fifteen years, and it has a tear track on its cheek that looks painted in lacquer. The mist closes. The reflection stays for an instant longer, long enough to mouth one word, and then the stair beneath you is only stone again, cold and grey, and your palm is bleeding a little where the qi left you.",
      "Ren Qiao is staring at you from the stair. His lantern has gone out. \"Your eyes went white,\" he says. \"Only for a breath. I thought you were being taken.\"",
    ],
    choices: [
      {
        id: "follow_the_stair",
        label: "Stand, wipe your palm on your sleeve, and climb toward the stair the mist has shown you.",
        tone: "quiet",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "saw_reflection" }, { kind: "addStat", stat: "qi", amount: 5 }],
      },
      {
        id: "say_nothing_to_ren",
        label: "Tell Ren Qiao nothing about the reflection, and let him believe your eyes only played tricks.",
        tone: "deceit",
        next: "sutra_stair",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "tell_ren_reflection",
        label: "Tell Ren Qiao exactly what you saw, including the tear track and the single word.",
        tone: "truth",
        next: "sutra_stair",
        effects: [{ kind: "setFlag", flag: "told_ren_reflection" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "close_meridians",
        label: "Close every meridian you opened and sit on the stone until the trembling stops.",
        tone: "quiet",
        next: "sutra_stair",
        effects: [{ kind: "addStat", stat: "qi", amount: -3 }, { kind: "addStat", stat: "insight", amount: 4 }],
      },
    ],
  },
  {
    id: "sutra_stair",
    title: "The Inner Stair",
    paragraphs: [
      "The stair is cut into the living rock of the mountain. Each step is a lotus petal, carved so thinly that the centre of every one has worn into a shallow cup. Water collects in the cups and runs down to the next step, so that the whole stair is always faintly wet, and your footsteps make a soft, continuous sound like someone breathing through their teeth.",
      "Along the walls, stone bells hang on iron pins. They are not large. Each one is about the size of a teacup, and each is cast in the same pale green as the jade shard you found in the vault. They do not ring when you pass. But when your shadow falls across one, the bell gives a faint tremor, and the tremor runs along the wall to the next bell and the next, until a whole row is trembling softly in the dark.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_stair_2",
        page: true,
      },
    ],
  },
  {
    id: "sutra_stair_2",
    title: "",
    paragraphs: [
      "Halfway down, the stair divides. The left branch is lit by a lamp burning in an iron cage, and you can hear someone talking to themselves in a low, pleasant voice that does not sound frightened at all. The right branch goes straight down toward the sound of water and a faint red light. Between them, set in the rock, is a small niche with a bowl of cold millet and a slip of paper that says only: Eat, then continue.",
      "Ren Qiao stops at the division and looks at the niche for a long time. He does not touch the bowl. \"I have carried food to the cells on this stair for twelve years,\" he says. \"I never once went farther than the lamp. The Law told me the sutra hall was no place for a warden. I believed them, because it was easier.\"",
      "He turns to the right-hand stair and looks down it. The red light flickers. \"I can take you as far as the cells,\" he says. \"After that the Elder gave the order herself, and I was told to stop. I am a warden, Wanderer. I stop where the orders stop.\"",
    ],
    choices: [
      {
        id: "visit_left_cell",
        label: "Take the left branch toward the lamp in the iron cage, and see who is talking to himself there.",
        tone: "inquiry",
        next: "sutra_gu_cell",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "go_down_right",
        label: "Take the right branch toward the water and the red light, and go on alone.",
        tone: "quiet",
        next: "sutra_bell_wall",
        effects: [{ kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "eat_millet",
        label: "Eat the cold millet from the niche, all of it, before you go any farther.",
        tone: "quiet",
        next: "sutra_bell_wall",
        effects: [{ kind: "addStat", stat: "qi", amount: 5 }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "count_bells",
        label: "Count every stone bell on the walls between here and the water, and remember the number.",
        tone: "inquiry",
        next: "sutra_bell_wall",
        effects: [{ kind: "addStat", stat: "insight", amount: 4 }],
      },
    ],
  },
  {
    id: "sutra_gu_cell",
    title: "Gu Hanzhen in the Lamplight",
    paragraphs: [
      "The iron cage holds a lamp, a stool, and a young man with his back against the wall. Gu Hanzhen looks up when your shadow crosses the bars, and for a moment his face is so open and hopeful that you almost turn away. Then the hope fades into the careful blankness of someone who has been hurt enough times to expect it. His torn sleeve has been mended with grey thread. His hair is loose. The mist has left faint red lines on his wrists, like the marks of a bracelet he never chose.",
      "\"They let me keep the lamp,\" he says. His voice is rough from disuse. \"The warden says it is because I do not sleep. I think it is because they are afraid of the dark that I bring with me.\" He glances at the stair behind you. \"Did they send you down here to watch me?\"",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_gu_cell_2",
        page: true,
      },
    ],
  },
  {
    id: "sutra_gu_cell_2",
    title: "",
    paragraphs: [
      "You tell him the truth, which is that you were sent to find a record and you took a wrong turn on the stair. He laughs, once, a short bitter sound that ends in a cough. \"Wrong turns are the only kind this mountain allows,\" he says. \"I took one three nights before the jade vanished. I thought I was following a girl in grey robes. She told me the seal was tired and wanted to sleep.\"",
      "He leans forward so that the lamplight falls across his face and shows the new lines beside his eyes. \"Su Mengjiao,\" he says quietly. \"Do you know what she told me at the end? She said the Law Hall had been feeding the abyss for fifteen years, a little at a time, with the names of the sealed. The mist does not want the jade. It wants to be remembered by name, and the Law has been careful to remember only the names it wants forgotten.\"",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_gu_cell_3",
        page: true,
      },
    ],
  },
  {
    id: "sutra_gu_cell_3",
    title: "",
    paragraphs: [
      "Ren Qiao, standing at the top of the stair with his cold lantern, makes a small sound of protest. Gu does not look at him. He is looking at you, and his eyes are wet, and his hands are clasped so tightly that the knuckles have gone white.",
      "\"If you go to the sutra hall,\" he says, \"you will find her book on the dais, and beside it a mirror that the Elder can see through. Do not let the mirror speak first. Speak first yourself. The mist listens to whoever is braver, and the mirror listens to whoever is more afraid.\"",
    ],
    choices: [
      {
        id: "promise_gu",
        label: "Promise him you will ask the Elder to read his name aloud in the Law Hall, not just the names she wants forgotten.",
        tone: "truth",
        next: "sutra_hall",
        effects: [{ kind: "setFlag", flag: "promised_gu" }, { kind: "addStat", stat: "karma", amount: 4 }],
      },
      {
        id: "ask_about_mengjiao",
        label: "Ask him what Mengjiao looked like when she spoke about the Law, and listen to every detail.",
        tone: "inquiry",
        next: "sutra_hall",
        effects: [{ kind: "setFlag", flag: "heard_about_mengjiao" }, { kind: "addStat", stat: "insight", amount: 5 }],
      },
      {
        id: "warn_gu",
        label: "Warn him that the Law will not forgive him for speaking the sect’s secrets to a stranger.",
        tone: "force",
        next: "sutra_hall",
        effects: [{ kind: "setFlag", flag: "warned_gu" }, { kind: "addStat", stat: "karma", amount: -1 }],
      },
      {
        id: "leave_gu_alone",
        label: "Tell him nothing, and walk on down the stair without looking back at the lamp.",
        tone: "quiet",
        next: "sutra_hall",
        effects: [{ kind: "addStat", stat: "karma", amount: -3 }],
      },
      {
        id: "follow_lantern_keeper",
        label: "Ask Ren Qiao which stair leads to the lamps, and follow it down into the dark.",
        tone: "inquiry",
        next: "lantern_stair",
      },
    ],
  },
  {
    id: "sutra_bell_wall",
    title: "The Wall of Stone Bells",
    paragraphs: [
      "The right-hand stair opens onto a wide landing that runs along a wall of stone bells. There are hundreds of them. They hang in neat rows on iron pins, each one carved with a small symbol, and each symbol is a name in the older script. You count to forty before you stop, and then you realise that the names are not in order. They are arranged in the shape of a lotus, petal over petal, so that the centre of the wall holds a single bell that is larger than all the rest.",
      "The central bell is inscribed with the name of Su Mengjiao, and beneath it, in the Law’s own straight script, someone has written the number fourteen. Fourteen is the number of disciples the Law sealed on the night of the jade’s first setting. You remember the ledger in the archive, the loose sheet with its unsigned order, the way Elder Su’s signature stood in neat rows beside every name.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "sutra_bell_wall_2",
        page: true,
      },
    ],
  },
  {
    id: "sutra_bell_wall_2",
    title: "",
    paragraphs: [
      "The water sound is louder here. It comes from a channel cut into the floor along the base of the wall, and the water is red, or perhaps it only reflects the red light rising from the sutra hall below. The bells do not tremble when you approach. The central bell is perfectly still, as though it is holding its breath, and when you lean close to read the inscription beneath it, you hear a faint voice from inside the metal.",
      "It says your name. It says it in the voice of a young woman who is laughing at something only she can see. Then it says a second name, which you do not know, and the laughter stops. The second name is Wanru.",
      "On the floor beside the channel, a single bronze coin has been placed in the shape of a lotus petal. It is the old coin of the Azure Cloud Sect, the kind that is no longer minted, and it is clean and bright as if someone polished it only this morning.",
    ],
    choices: [
      {
        id: "touch_central_bell",
        label: "Lay your hand against the central bell and let the voice finish its sentence.",
        tone: "inquiry",
        next: "sutra_hall",
        effects: [{ kind: "setFlag", flag: "touched_bell" }, { kind: "addStat", stat: "qi", amount: 6 }],
      },
      {
        id: "pick_up_coin",
        label: "Pick up the bronze coin and keep it in your sleeve, to show the Elder where it came from.",
        tone: "truth",
        next: "sutra_hall",
        effects: [{ kind: "setFlag", flag: "took_coin" }, { kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "count_fourteen",
        label: "Count the fourteen bells that surround the centre, and say each name aloud as you pass it.",
        tone: "inquiry",
        next: "sutra_hall",
        effects: [{ kind: "setFlag", flag: "named_the_fourteen" }, { kind: "addStat", stat: "karma", amount: 5 }],
      },
      {
        id: "cover_bells",
        label: "Drape your cloak over the wall so you do not have to hear the names again.",
        tone: "quiet",
        next: "sutra_hall",
        effects: [{ kind: "addStat", stat: "karma", amount: -2 }, { kind: "addStat", stat: "insight", amount: -2 }],
      },
    ],
  },
];
