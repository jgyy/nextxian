import type { ItemDef, Tier } from "@/engine/types";

type Lines = Record<Tier, string>;

/**
 * What the six newer beginnings add around their prologues: how Elder Su receives each at the Law Hall door, what she says of them
 * between her replies, how a keeper on the roads takes them in, and the one thing a beginning puts in the pack.
 */

/** Elder Su at the Law Hall door, for each of the six beginnings. Five lines by trust, and memories for the method the hero chose and for their roots and Dao. */
export const beginningScenarios = String.raw`
$ LH_ENTER_CAVE | trust+0 respect+2 | elder | The cave-finder meets Elder Su’s eyes.
hostile: Qi gathered in the dark, from a seat you had no right to, and you walk into my hall with it on your shoulders. The Law has a word for that. Choose your next sentence with care.
wary: A Qi Condenser with no register, no teacher and a cave. I have read about caves. They are usually sold, or they are lies. Tell me which this is.
neutral: Sit. Whoever left that seat left it for a reason, and the reason is usually a debt. Tell me whose it was, and what you promised.
warm: You straightened a stranger’s hands, I think, before you read a word. A person who does that first is the sort the dead like to leave things to.
devoted: You went into the mountain and came out kind. I have known masters of this sect who could not manage the second half. Sit down, please, and tell me everything.
? og_cave_m_break | You took the Breaking half and ran it past the sixth line. The dead one stopped there. You are standing, which is more than I expected. Sit before you are not.
? og_cave_m_buried | You buried the Breaking half with the one who left it. I know what that costs a young cultivator. I could not have done it at your age.
? hero:talent=heaven | A heaven-marked root, and a seat in a sealed cave. The mountain does not usually put those two things so close together without meaning something by it.

$ LH_ENTER_FURNACE | trust+1 respect+2 | elder | The pill-house apprentice meets Elder Su’s eyes.
hostile: A death on your sleeve and the smell of a Concord furnace on your hair. You walk into the Law Hall as if there were nothing in your pockets. Empty them.
wary: A pill-maker’s apprentice, and the master dead. The Concord licences those houses, and unlicenses them with equal speed. What did he leave that you were afraid to leave behind?
neutral: Sit. Close the door, and tell me about the last batch. The one with the seam. Do not tell me you did not see it. Apprentices always see it.
warm: You banked the furnace before you left, I think. It is a small courtesy to a dead man. I notice small courtesies. They are rarer than large ones.
devoted: A pill-house apprentice who stayed to close the dead man’s eyes. I have wardens who would have left by the back door. Sit, and let me look at what he trusted you with.
? og_furnace_m_burn | You swallowed the half-cooked pill hot. I can see where it burned. I have seen it only twice before, and both of them were dead by the third winter. Sit.
? og_furnace_m_keep | You kept the pill and cultivated on breath and rice. That is the slowest way, and the only way that has never hurt anyone. Sit.
? hero:dao=alchemy | A pill-maker by Dao as well as by trade. Then the master chose his apprentice well, and the Concord will not forgive him for it.

$ LH_ENTER_LAMP | trust+2 respect+1 | elder | The lamp-keeper meets Elder Su’s eyes.
hostile: A blue flame in a paper lantern, carried into my hall. You have no idea what you are carrying, or you know exactly, and I am not sure which is worse.
wary: A roadside lamp-keeper with a flame that does not flicker. I should like to know who taught you to breathe like that, and why they were so careful to teach you nothing else.
neutral: Sit. Put the lantern where I can see it, and tell me what you did every night for seven winters. Do not tell me you did nothing. The flame says otherwise.
warm: You gave the pilgrim your light and sat in the dark. I heard of it before you arrived, from a girl in grey. She said she had not been offered so much in a year.
devoted: Seven winters of steady breath, and you came up the stair without once hurrying. This mountain has a great many fast cultivators. It has been waiting a long while for a slow one.
? og_lamp_m_feed | You fed the flame everything you had. I can see the cost in the colour of your hands. The flame is brighter than the lamp. I would prefer it were the other way about.
? og_lamp_m_share | You taught a child to breathe at your lamp before you left. I wonder how many people on this mountain have ever done that for anyone.
? og_lamp_opened | You opened the master’s letter in front of the warden. I have the warden’s account of what it said. I should like yours.

$ LH_ENTER_LISTENER | trust+0 respect+0 | elder | The hedge-listener’s ward meets Elder Su’s eyes.
hostile: A listener, and unregistered, on my threshold, with a Concord notice for company. The Law can be generous. It is rarely generous to people who walk in unannounced and listening.
wary: The wind is full of my name this month, and you have the look of someone who has heard it. I should like to know in whose voice, and how often.
neutral: Sit. Do not close your ear on my hall. I would rather you heard what I am than what you imagine I am. A listener can tell the difference, if she tries.
warm: You hummed a child’s three notes at the foot of my mountain, and the child told the warden. I find I would very much like to hear them.
devoted: Aunt Sedge told you to come to me. I did not know her, but I have been waiting for someone to say that name in this hall for nine years. Sit down, and say it again.
? og_listener_m_answer | You spoke back to the wind. Aunt Sedge told you never to, and the wind has been very loud about it since. Sit. I will shut the shutters.
? og_listener_m_closed | You took the Closed Ear and rested. It is the oldest of the listener’s arts, and the one they all forget. Sit, and be quiet, and I shall be quiet with you.
? hero:status=outcast | Your papers were struck out, and you hear names for a living. The Concord and I will have a long conversation about that, in time.

$ LH_ENTER_STRUCK | trust+0 respect+1 | elder | The one struck by heaven meets Elder Su’s eyes.
hostile: Heaven’s own spark in my hall, and no register to say whose it is. I have iron in these chains, and I would prefer you did not make them sing. Speak softly.
wary: Struck, and alive, with the light still in your hands. The Concord’s assessors would call you an accident. I have never found the word useful.
neutral: Sit, and fold your hands in your lap. The chains will settle. Tell me what the assessor measured, and what she was careful not to write down.
warm: You dug the drum-tower boy out before you did anything else about yourself. I have read three hundred petitions this year and none of them began like that. Sit.
devoted: A person struck by heaven and walking toward a Law Hall instead of away from it. I think I have been waiting for you for twelve years, and I should like to know why.
? og_struck_m_channel | You ran the light around your meridians until it learned them. It is the quickest way, and the most dangerous. I can see it in the shaking of your left hand.
? og_struck_m_return | You turned your face to the sky and gave it back. I have heard of that once. The one who tried it did not live to tell me how it went.
? hero:talent=heaven | A heaven-marked root, and heaven has struck it. The mountain is going to have a great deal to say about that, and so am I.

$ LH_ENTER_DREAM | trust+1 respect+2 | elder | The dreamer meets Elder Su’s eyes.
hostile: That breath does not belong to you, and you are breathing it in my hall. Stop, or tell me where you stole it, and be exact.
wary: The Hollow Roof breath, run by a stranger, five years in a notebook. I am told that a person who learns it entire does not come to the Law Hall. I am told a great many things.
neutral: Sit. Finish the line, please, if you can. I should like to hear where it ends. Nobody has been able to tell me for fifty years.
warm: You thanked a dream, aloud, in an empty room. I am a practical woman, and I find that I envy you.
devoted: You climbed the stair on a stranger’s breath and arrived calm. I cannot tell you who the stranger is. I can tell you that I have been listening for the sound of that breath since I was a girl.
? og_dream_m_broken | You went past the end of the line and invented the rest. They stopped there for a reason. I want to know what you found.
? og_dream_m_thankful | You stopped where the stranger stopped, and said thank you. It is the only thing in fifty years that has made the roof stir.
? hero:dao=fate | A diviner, and a dream that arrives a line a night. You will want to know whether it is fate. So do I.
`;

/** What Elder Su says about each beginning between her replies, five attitudes each. */
export const beginningAsides: Record<string, Lines> = {
  cave: {
    hostile: "A cave nobody has opened in a thousand years, and you came out of it with a breath-art and a smile. Caves are not generous. I wonder what it asked of you.",
    wary: "You gathered qi in a sealed room with a dead man. I am trying to decide whether that makes you a thief or an heir, and the Law has not got a word for the second.",
    neutral: "A seat, a slip and a corpse that did not mind. It is the oldest sort of inheritance there is, and the least documented.",
    warm: "You fixed a stranger’s hands before you read their book. I think that is the real inheritance. The rest is only breath.",
    devoted: "The dead choose their heirs with care, and mostly choose badly. Whoever sat in that room chose better than the sect has in a hundred years.",
  },
  furnace: {
    hostile: "A pill-house apprentice who walked out with the last batch. I have prosecuted people for less, and been wrong about half of them. I would rather not be wrong again.",
    wary: "The Concord licences pill houses and burns the books of the ones that fail. You are the only record of what the Kettle-and-Crane made, and I intend to read you.",
    neutral: "Four years at a furnace teaches a person to wait, to weigh, and to say nothing in front of the customer. It is a better schooling than ours.",
    warm: "You covered a dead man with his apron. It is a trade that teaches that, I think. I have never seen the like in a disciple.",
    devoted: "A pill-maker who thinks first of the man, and second of the pill. The sect has been short of those for as long as I have held this office.",
  },
  lamp: {
    hostile: "Seven winters of keeping a light on breath and nothing else. Either you are the most patient cultivator in the provinces, or you are a very good liar. I do not mind which.",
    wary: "A lamp that burns blue is a lamp that is answering someone. I should like to know who, and I should like you to tell me before the lamp does.",
    neutral: "Slow, steady breath, night after night. It is how the great masters began, and how most of them forgot to continue. I notice that you did not forget.",
    warm: "You taught a child to breathe at your lamp. It is a small thing, and the sect would not know how to record it, and I am recording it.",
    devoted: "Patience is the only talent I have ever envied. You have more of it than the Law Hall does, and the Hall has had four hundred years.",
  },
  listener: {
    hostile: "The Concord has a notice out for listeners, and you are what it describes. I am the Law, and the Law has a long memory. Be glad I am bored of notices.",
    wary: "Names in the wind, from a hedge-listener’s mouth. I have a few of my own, and I do not like to hear them from strangers. Keep your voice down in this hall.",
    neutral: "You hear what others only fear. I find it restful, in a way. Few people tell me the truth because they are too far from the wind to know it.",
    warm: "Aunt Sedge taught you to hear before she taught you to speak. It is the right order. I wish more of my disciples had been taught it.",
    devoted: "A listener who came to the Law Hall of her own accord. Do you know how long it has been since anyone listened to me? Sit, and let me tell you.",
  },
  struck: {
    hostile: "Heaven’s own spark in a petitioner. I have iron in every chain of this hall. I would prefer, if you please, that you did not touch any of it.",
    wary: "A Qi Condenser by lightning, with no teacher. I know three masters who would give a year of their lives for your qi, and one who would give yours.",
    neutral: "Struck and unburned. The Concord’s assessors call that an anomaly. I call it a petition from a higher court, and I am not sure of the answer.",
    warm: "You dug the boy out of the tower first. I have seen heaven mark many a cultivator. It has rarely marked one who knew what to do with it.",
    devoted: "Heaven chose a person and the person did not flinch. It is how the old books begin. It is also how they end, and I would rather not read the end tonight.",
  },
  dream: {
    hostile: "A stranger’s breath in your chest and a notebook full of it. Whoever the stranger is, you have stolen from them. Stop, or tell me how.",
    wary: "You dreamed it a line a night for five years. I have dreamed things for fifteen, and none of them taught me to breathe. I distrust what a dream hands you.",
    neutral: "A breath-art with no master. It runs fast and it runs thin, and I am told it ends at the ninth line. I should like to see where.",
    warm: "You thanked the dream. Most people would have used it. The Hollow Roof breath has not been thanked in fifty years, and I think it has noticed.",
    devoted: "Whatever you are breathing, it came to you whole and unasked. I have spent my life earning each breath I owned. I envy you, and I am glad of you.",
  },
};

/** How a keeper takes a stranger from each beginning, four variants. `{kname}`, `{Kname}` and `{place}` are filled by the road. */
export const beginningMeet: Record<string, [string, string, string, string]> = {
  cave: [
    "{Kname} notices the faint grey haze about your shoulders and says nothing, in the way of a person who has seen caves emptied.",
    "You carry yourself at {place} like someone who has sat alone with the dead. {Kname} sets a chair for you away from the draught.",
    "{Kname} asks where you learned to breathe, and you say, truthfully, from a dead man. {Kname} laughs, and then does not.",
    "A Qi Condenser with a cave in the lungs. {Kname} offers you tea, and does not ask where the cave is, which is a courtesy.",
  ],
  furnace: [
    "{Kname} smells the furnace-smoke in your sleeves and asks which pill house. You say the Kettle-and-Crane, and {kname} looks at you for a moment longer.",
    "You test the tea with the back of your tongue before you drink, a pill-maker’s habit. {Kname} notices, and approves.",
    "A pill-house apprentice at {place} is a rare thing. {Kname} says the good ones always check what they eat.",
    "{Kname} sees the burns along your knuckles and does not ask. At {place} everyone knows what a furnace does to hands.",
  ],
  lamp: [
    "{Kname} has never seen anyone sit so still in a chair. At {place}, the stillness is almost a rudeness, and yet it settles the room.",
    "You hold the paper lantern in your lap, and the blue flame does not flicker when the door opens. {Kname} looks at it and then away.",
    "{Kname} says a lamp-keeper always sits near the light. You have not noticed that you do.",
    "At {place} you breathe in a long, even rhythm, and the room slows to match you. {Kname} pretends not to notice.",
  ],
  listener: [
    "{Kname} sees you tilt your head toward the door before it opens, and says that a listener always hears the latch first.",
    "You are quiet at {place}, in the way of someone who has learned what a loud voice costs. {Kname} lowers their own to match.",
    "{Kname} asks if you can hear what the wind says about {place}. You say you would rather not repeat it, and {kname} thanks you.",
    "A hedge-listener at {place} is a thing {kname} has heard of, and not met. {Kname} watches your ears, and not your face.",
  ],
  struck: [
    "A spark jumps from your sleeve to the iron kettle, and {kname} sets it down very carefully and does not mention it.",
    "{Kname} has heard of the strike at Upper Drum. At {place} word travels faster than lightning, which is saying something.",
    "You keep your hands folded in your lap, as a person who has learned what they can do. {Kname} is grateful for it.",
    "{Kname} sees the pale lines climbing from your wrist, and asks nothing. At {place} nobody asks a struck person how it feels.",
  ],
  dream: [
    "{Kname} sees your chest rise and fall in a rhythm that is not your own, and says, quietly, that someone has taught you a very old breath.",
    "You breathe at {place} as if someone were counting for you. {Kname} counts along, once, and loses the thread.",
    "{Kname} asks who your master was. You say you have never had one, and {kname} says that this is the first time they have believed it.",
    "A dreamer at {place}, with a notebook thick as a loaf. {Kname} does not ask to see it, and you are grateful.",
  ],
};

/** What a beginning puts in the pack: only the pill-house apprentice carries anything, and it is eaten on the threshold of Qi Condensation. */
export const beginningItems: Record<string, ItemDef> = {
  og_furnace_pill: {
    id: "og_furnace_pill",
    name: "Master’s Last Pill",
    kind: "pill",
    blurb: "A grey bead with a seam of green, finished on banked coals as the note said. It carries you over the threshold of Qi Condensation when you are close enough.",
    value: 8,
    aid: 1,
  },
};
