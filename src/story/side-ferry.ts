import type { Scene } from "@/engine/types";

/**
 * Side Path: The Ferry of Still Water. Opened from the message for Wanru, before the
 * sealing night. A boatman carries the sect’s dead across a lake that does not ripple,
 * and every passenger pays a fare in a name, a promise, or a refusal. The path rejoins
 * the sealing night at the hall.
 */
export const stillWaterScenes: Scene[] = [
  {
    id: "ferry_dock",
    title: "Side Path: The Ferry of Still Water",
    paragraphs: [
      "Below the hall, the mist lies on the water so flat that it looks solid. There is no wind. A narrow jetty of black stone runs out into the lake, and at its end a boat waits with its prow pointed at nothing you can see. The boatman is old, with one milky eye and a pole across his knees. He does not get up when you approach.",
      "\"Still water,\" he says. \"Nobody crosses it unless they are carrying something. I carry the dead across. Not their bodies. Their names. The Law Hall gave me the job when it could not decide where to keep them.\" He taps a wooden board fixed to the bow. Each line on it is a name, painted in faded white. Most of the lines have been crossed out.",
      "Near the bottom of the board, one name is painted in red and left uncrossed. The red is the colour of the seals on the sealing orders. The boatman does not look at it when he speaks. \"A passenger is waiting,\" he says. \"She has been waiting for fifteen years. She is patient. The mist taught her.\"",
    ],
    choices: [
      {
        id: "ask_for_passage",
        label: "Ask the boatman for passage, and offer nothing but your willingness to listen.",
        tone: "mercy",
        next: "ferry_crossing",
        effects: [{ kind: "setFlag", flag: "visited_ferry" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "pay_with_a_coin",
        label: "Hold out a coin, the kind the lane uses, and ask whether it is enough for a single crossing.",
        tone: "quiet",
        next: "ferry_crossing",
        effects: [{ kind: "setFlag", flag: "visited_ferry" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "ask_about_red_name",
        label: "Ask whose name is painted in red, and whether the boatman has ever been asked to carry her back.",
        tone: "inquiry",
        next: "ferry_crossing",
        effects: [{ kind: "setFlag", flag: "visited_ferry" }, { kind: "setFlag", flag: "asked_about_red_name" }],
      },
      {
        id: "turn_back_to_hall",
        label: "Tell the boatman you are not ready to cross, and climb back up the jetty toward the hall.",
        tone: "quiet",
        next: "sealing_night",
      },
    ],
  },
  {
    id: "ferry_crossing",
    title: "Across the Still Water",
    paragraphs: [
      "The boat moves without a stroke. The pole trails in the water, and the water does not ripple. Under the surface you can see the reflections of the hall roof, the lamps, the cliff, and your own face, which looks older than it did at the gate. For a long moment you cannot tell which reflection belongs to the sky and which to the lake.",
      "Halfway across, a second face appears beside yours. It is young, with its hair pinned in a silver comb, and it smiles the way a person does when about to say something they have rehearsed in front of a mirror. You hear nothing. But you feel, very clearly, that the face is counting you.",
      "\"Everyone who crosses is counted,\" the boatman says from the stern. \"It is the only fare that matters. I do not take coins.\" He lifts the pole and lets the water run off it in silver threads. \"The lake asks each passenger one question on the far side. Answer it honestly, and the boat goes back to shore empty. Answer it badly, and the boat keeps your place.\"",
    ],
    choices: [
      {
        id: "watch_the_reflections",
        label: "Watch the reflections until you can tell your own face from the young woman’s, and keep watching.",
        tone: "inquiry",
        next: "ferry_fare",
        effects: [{ kind: "addStat", stat: "insight", amount: 3 }],
      },
      {
        id: "speak_to_the_water",
        label: "Speak to the water quietly, as though it were a student who has finally asked you a question.",
        tone: "mercy",
        next: "ferry_fare",
        effects: [{ kind: "setFlag", flag: "spoke_to_water" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "count_the_passengers",
        label: "Count the faces in the water, one by one, until the number matches the fifteen names on the board.",
        tone: "inquiry",
        next: "ferry_far_shore",
        effects: [{ kind: "setFlag", flag: "counted_passengers" }, { kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "look_away",
        label: "Close your eyes and stop looking at the water, so the boat cannot read your face.",
        tone: "deceit",
        next: "ferry_fare",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "ferry_far_shore",
    title: "The Far Shore",
    paragraphs: [
      "The boat touches a shelf of stone so pale it looks like bone, and you step out without a word. Beyond it, the mist parts for the first time since you crossed. A narrow garden climbs the slope, planted with grey reeds and low white flowers that do not move in the still air. Each flower stands beside a small square stone, and each stone is blank.",
      "The boatman does not follow you. From the shelf you can see his lantern drifting back toward the jetty, and the painted board on the bow catches the light for a moment before it goes dark. You walk between the stones. They have no names, only faint marks where names might once have been scraped away, or never cut at all. At the end of the row, one stone is already carved, and the letters are sharp enough to have been cut this year.",
    ],
    choices: [
      {
        id: "read_blank_stones",
        label: "Read every blank stone down the row before you move on.",
        tone: "inquiry",
        next: "ferry_far_shore_2",
      },
      {
        id: "kneel_by_blank_stone",
        label: "Kneel beside the nearest blank stone and say nothing at all.",
        tone: "quiet",
        next: "ferry_far_shore_2",
      },
      {
        id: "demand_boatman_fares",
        label: "Call down to the boatman and demand to know who sends him these fares.",
        tone: "force",
        next: "ferry_far_shore_2",
      },
      {
        id: "hide_wick_sleeve",
        label: "Hide the wick you carry under your sleeve before anyone notices it.",
        tone: "deceit",
        next: "ferry_far_shore_2",
      },
    ],
  },
  {
    id: "ferry_far_shore_2",
    title: "Blank Stones and a Wick",
    paragraphs: [
      "The stone says: Su Mengjiao, who was not poured quietly. Beneath it, in smaller characters, someone has added a line that is not a name at all: The lake may keep her, but it will not keep her silent. Beside the stone lies a bundle of half-burned wicks, tied with red thread, as though someone came up the shelf with a lamp and went back down without it.",
    ],
    choices: [
      {
        id: "trace_the_fresh_carving",
        label: "Trace the fresh letters with your fingertip, the way Shen traces the old ones at the shrine.",
        tone: "mercy",
        next: "ferry_fare",
        effects: [{ kind: "setFlag", flag: "touched_far_stone" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "count_the_blank_stones",
        label: "Count the blank stones down the row, one by one, until the count matches the fifteen names you know.",
        tone: "inquiry",
        next: "ferry_fare",
        effects: [{ kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "take_a_wick",
        label: "Pick up one of the half-burned wicks and carry it back to the boat, so the lake can see you have brought a light.",
        tone: "deceit",
        next: "ferry_fare",
        effects: [{ kind: "setFlag", flag: "carried_wick" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "return_to_the_boat",
        label: "Walk back down to the shelf without disturbing the flowers, and step into the boat before the lake asks you anything.",
        tone: "quiet",
        next: "ferry_fare",
      },
    ],
  },
  {
    id: "ferry_fare",
    title: "The Fare",
    paragraphs: [
      "The boat grinds against a shelf of pale stone. There is no dock here, only a ledge of rock that rises from the lake and vanishes into the mist. A cold draft comes down the rock, and with it a voice, so close to your ear that you turn around before you remember there is nobody behind you. \"Your fare, Wanderer,\" it says. It is the voice of a woman who has been waiting a long time.",
      "The boatman tips his head. \"She asks one thing from everyone who lands. Not for herself. For the lake. Give it a name, a memory, or a promise, and the lake keeps it for the dead. Refuse, and the lake keeps the boat.\" He says this without any pity at all, the way a man reports the price of rice.",
      "You can feel the water waiting for an answer. The young woman in the reflection is no longer smiling. She is only listening, with the attention of someone who has never once been allowed to speak first.",
    ],
    choices: [
      {
        id: "give_mengjiao_name",
        label: "Give the lake Su Mengjiao’s name, the way she wrote it on the lantern stair, and nothing more.",
        tone: "mercy",
        next: "ferry_return",
        effects: [{ kind: "setFlag", flag: "paid_with_name" }, { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "pay_with_a_promise",
        label: "Promise the lake that you will say her name tomorrow, and the day after, for as long as you walk this sect.",
        tone: "truth",
        next: "ferry_return",
        effects: [{ kind: "setFlag", flag: "promised_ferry" }, { kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "give_the_lamp_wick",
        label: "Give the lake a lamp wick, if you carry one, and tell it where the flame came from.",
        tone: "truth",
        next: "ferry_return",
        effects: [{ kind: "setFlag", flag: "paid_with_wick" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "refuse_to_pay",
        label: "Tell the lake the dead can keep their own names, and that you will not be counted by a boat.",
        tone: "force",
        next: "ferry_return",
        effects: [{ kind: "setFlag", flag: "refused_ferry" }, { kind: "addStat", stat: "karma", amount: -3 }],
      },
    ],
  },
  {
    id: "ferry_return",
    title: "The Hall Steps Again",
    paragraphs: [
      "The boat turns on its own, slowly, and carries you back across the still water toward the jetty. The mist lifts as you approach, the way a curtain lifts for someone who has at last been recognised. The boatman does not speak again. He raises the pole in a salute that could mean farewell, or could mean that you have been noted.",
      "On the steps of the Law Hall, the lamps are being lit one at a time by a warden you do not know. The sealing is near. The original order is still in your sleeve, and the Elder is somewhere above you, waiting to see whether you come back with the answer she asked for.",
    ],
    choices: [
      {
        id: "tell_elder_of_ferry",
        label: "Tell the Elder, before the hall doors open, what the boatman charges for the dead and what the lake asked of you.",
        tone: "truth",
        next: "sealing_night",
        npcScenario: "REPORT_FERRY",
      },
      {
        id: "say_nothing_of_ferry",
        label: "Say nothing about the lake. Some crossings are better left unspoken until the sealing is done.",
        tone: "quiet",
        next: "sealing_night",
      },
      {
        id: "wipe_the_river_off",
        label: "Wipe the lake water from your face with your sleeve, so that nobody inside the hall can see where you have been.",
        tone: "deceit",
        next: "sealing_night",
        effects: [{ kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "hurry_up_the_steps",
        label: "Take the steps two at a time, before the lamps are all lit and the Elder changes her mind about waiting.",
        tone: "quiet",
        next: "sealing_night",
      },
    ],
  },
];
