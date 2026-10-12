import type { Element } from "@/engine/path";
import type { Craft } from "./lexicon-craft";

/**
 * What happens when the hero’s roots meet the road’s element. There are three scenes behind the door at the middle of the second approach, and a hero
 * is shown the one their roots earn: kindred (a single root of this very element), partial (a mixed, heaven-marked or late-blooming root that answers it
 * weakly), or far (a root that has no word for it). Slots: kname, kthey, kthem, ktheir, place, focus, relic, element.
 */
export type RootKind = "kin" | "partial" | "far";

export const ROOT_TITLE: Record<RootKind, string[]> = {
  kin: ["The Root Answers", "A Kindred Root", "The Quickening", "Root to Root"],
  partial: ["A Half-Answer", "The Thread of the Root", "Half a Root", "The Faint Reply"],
  far: ["The Deaf Root", "A Root With No Word", "The Hard Way", "Where the Root is Silent"],
};

/** The door’s label, in the approach that opens onto the root scene. */
export const ROOT_DOOR: Record<RootKind, string[]> = {
  kin: [
    "Lay your palm on the {element} of {place}, and let your own root say what it has been waiting to say.",
    "Open your root to the {element} at {focus}, and see whether it knows you.",
    "Go to the place at {place} where the {element} is thickest, and let your root go to meet it.",
    "Ask {kname} to stand back, and call your {element} root to the {element} of {place}.",
  ],
  partial: [
    "Lay your palm on the {element} of {place} and see whether your uncertain roots can find it.",
    "Reach toward the {element} at {focus} with the faint answer your roots can give, and wait.",
    "Go to the place at {place} where the {element} is thickest, and let your half-root listen for it.",
    "Ask {kname} how a root that only half answers {element} may be taught to do more.",
  ],
  far: [
    "Ask {kname} what a root with no word for {element} is to do at {place}, and begin there.",
    "Stand where the {element} is thickest at {place} and find out what your roots make of its silence.",
    "Reach for the {element} at {focus} though your roots will not, and see what the effort teaches.",
    "Tell {kname} that your roots are deaf to {element}, and ask to be taught the hard way.",
  ],
};

/** The element meeting the root: fifteen paragraphs, one for each pair of kind and element. */
export const ROOT_SCENE: Record<RootKind, Record<Element, string>> = {
  kin: {
    wood: "Your palm finds the nearest living thing and your root answers before you have asked. Green qi climbs your arm like sap in the first week of spring, and the whole of {place} leans in. {Kname} says only, “There.”",
    fire: "Your palm finds the warmth of the wall and your root answers like a struck flint. Red qi runs up your arm and into your chest, and the lamp-flames lean toward you, every one. {Kname} says only, “There.”",
    earth: "Your palm finds the floor and your root answers with a slow deep note, like a bell rung underground. Yellow qi settles in your arm, in your spine, in the soles of your feet. {Kname} says only, “There.”",
    metal: "Your palm finds the cold of the wall and your root answers with a single high ring. White qi runs down your arm as clean as a drawn wire, and every bright edge in the room turns toward you. {Kname} says only, “There.”",
    water: "Your palm finds the damp of the stone and your root answers like a well being filled. Blue qi runs up your arm cool and unhurried, and every surface in the room shivers faintly. {Kname} says only, “There.”",
  },
  partial: {
    wood: "Your roots answer the wood only faintly, like a voice from a room away. The green qi comes into your hand a thread at a time, and {kname} says that a thread is how every forest began.",
    fire: "Your roots answer the fire as a coal answers a breath: a small red glow that brightens and sinks. {Kname} says a coal is not a flame, but that no flame was ever born from anything else.",
    earth: "Your roots answer the earth as a seed answers rain, slowly, after a long hesitation. A thin yellow qi gathers in your palm, and {kname} says that slowness in the ground is only depth.",
    metal: "Your roots answer the metal with a faint chime, a note heard through a wall. A thin white qi gathers in your fingers, and {kname} says that a thin edge is the sharper kind.",
    water: "Your roots answer the water the way a dry stream answers a thaw: a trickle, then a pause, then another. A thin blue qi gathers in your wrist, and {kname} says that every river began with a seep.",
  },
  far: {
    wood: "Your roots have no word for wood. The green qi slides past you like a stranger in a crowd, and {kname} watches you try to catch it with a patience that does not quite hide how seldom this goes well.",
    fire: "Your roots have no word for fire. The heat passes you by like a guest who has come to the wrong house, and {kname} watches you with a patience that does not quite hide how seldom this goes well.",
    earth: "Your roots have no word for earth. The weight of the ground slides off you like rain off oilcloth, and {kname} watches you with a patience that does not quite hide how seldom this goes well.",
    metal: "Your roots have no word for metal. The cold edge of the qi passes you by without a ring, and {kname} watches you with a patience that does not quite hide how seldom this goes well.",
    water: "Your roots have no word for water. The wet qi runs past you like a stream round a stone, and {kname} watches you with a patience that does not quite hide how seldom this goes well.",
  },
};

/** What the meeting means for the craft: twenty-four paragraphs, one for each pair of kind and craft. */
export const ROOT_CRAFT: Record<RootKind, Record<Craft, string>> = {
  kin: {
    alchemy: "A pill-maker with a kindred root does not follow the recipe so much as the recipe follows them. The herb at {focus} knows the hand that tends it, and gives up its virtue in half the time.",
    forging: "A smith with a kindred root hears the metal in the way it takes the heat. The iron at {focus} wants to go where the hammer points, and {kname} says it is the difference between a blade and a thing that looks like one.",
    talisman: "A talisman-writer with a kindred root puts the {element} in the stroke itself. The ink at {focus} runs as the root runs, and {kname} says a charm so written needs no seal to be believed.",
    formation: "An array-keeper with a kindred root can feel the ring from inside it. The stones at {focus} hum a half-tone sweeter, and {kname} says the array is no longer a thing built but a thing kept company.",
    beast: "A beast-keeper with a kindred root is known by the beasts at once, as one of their own weather. The animals at {focus} come to the fence, and {kname} says that is not taming but being recognised.",
    sword: "A swordsman with a kindred root puts the {element} in the cut, and the cut goes a hand’s breadth further than the arm. {Kname} says the blade at {focus} will remember the stroke after you have forgotten it.",
    healing: "A healer with a kindred root can feel where the {element} has gone out of a body. The sick at {focus} turn their faces toward you, and {kname} says that is the root, and not the hands.",
    fate: "A diviner with a kindred root reads the {element} in a fortune as a sailor reads wind. The slips at {focus} lie differently under your hand, and {kname} says the reading is half done before you begin.",
  },
  partial: {
    alchemy: "A pill-maker with a half-root must learn the dose twice, once by the book and once by the tongue. {Kname} says the second learning is the one that lasts, and slides the jar at {focus} toward you.",
    forging: "A smith with a half-root hears the metal only when it is hot, and must listen with the hammer. {Kname} says the best smiths work this way, and that a deaf ear makes a patient hand.",
    talisman: "A talisman-writer with a half-root puts the {element} in the stroke only at the end of it, and must learn to hold the brush a breath longer. {Kname} sets you a long line to draw, at {focus}.",
    formation: "An array-keeper with a half-root feels the ring from the edge and not the centre. {Kname} says an edge is where an array is tested, and sends you round the stones at {focus} to listen.",
    beast: "A beast-keeper with a half-root is known by the beasts as a friend, and not yet as kin. {Kname} says friendship is a better thing to start from, and sends you to feed the animals at {focus}.",
    sword: "A swordsman with a half-root cuts with the {element} on one stroke in three, and must learn to count. {Kname} sets a row of reeds at {focus} and tells you to find the third stroke.",
    healing: "A healer with a half-root feels the {element} in a body as a faint warmth or chill, and must read it by the pulse. {Kname} says a half-sense that is trusted is worth two that are doubted.",
    fate: "A diviner with a half-root reads the {element} in a fortune as one reads a face across a crowded room. {Kname} lays out the slips at {focus} and bids you say what you see, and say it twice.",
  },
  far: {
    alchemy: "A pill-maker whose root is deaf to the herb must brew by weight and by clock alone, which is slower and more exact. The best of the trade have worked this way, {kname} says, and have been proud of it.",
    forging: "A smith whose root is deaf to the metal must read the colour of the fire instead of the iron’s voice. {Kname} says a blind smith made the sect’s oldest blade, and that she had the straightest hands in the valley.",
    talisman: "A talisman-writer whose root is deaf to the {element} must write the {element} in by rule, character by character, and not by feel. {Kname} sets the old manual before you at {focus}, and says the old way is the safe way.",
    formation: "An array-keeper whose root is deaf to the {element} must lay the ring by cord and by compass. {Kname} says that the great arrays were laid by such keepers, since they cannot be fooled by what the stones feel like.",
    beast: "A beast-keeper whose root is deaf to the {element} must win the animals by patience, and by the smell of one’s sleeve. {Kname} says patience is a root of its own, and sends you to sit at {focus} until the animals come.",
    sword: "A swordsman whose root is deaf to the {element} must cut by line and by timing, and never by feeling. {Kname} says the strictest school the sect ever had was founded by a man who could feel nothing, and he taught the whole valley.",
    healing: "A healer whose root is deaf to the {element} must read the sick by sight and touch and question. {Kname} says a healer who cannot feel a thing asks twice as many questions, and heals twice as many.",
    fate: "A diviner whose root is deaf to the {element} must read the slips by their numbers and not by their weather. {Kname} says a reading by number is slower, and cannot be flattered.",
  },
};

/** The four choices of each kind of root scene, three variants each. */
export type RootPick = "attune" | "bind" | "pour" | "listen" | "force" | "borrow" | "study" | "accept";

export const ROOT_LABEL: Record<RootPick, string[]> = {
  attune: [
    "Open your root to the {element} and let it answer, fully, for as long as it will.",
    "Give your root the {element} of {place}, and take what it gives back.",
    "Let your root and the {element} of {place} know one another, and do not rush them.",
  ],
  bind: [
    "Bind what the {element} gives you to your craft, and ask {kname} to see whether it holds.",
    "Take the answer of your root to your own craft, and set it to work at {focus}.",
    "Press the {element} into your Dao at {focus}, and let {kname} judge the join.",
  ],
  pour: [
    "Pour everything you have into the {element}, and see where the root can go when it is not held back.",
    "Throw your whole qi at the {element} of {place}, and let it take as much as it wants.",
    "Drive your qi into the {element} at {focus} until the root cries out, and then a little further.",
  ],
  listen: [
    "Do nothing, and let the {element} come to you of its own accord, as it will.",
    "Sit with your root and the {element} of {place}, and say nothing at all.",
    "Rest your hand at {focus} and let the {element} decide how much to give.",
  ],
  force: [
    "Force an answer from the {element} of {place}, though your roots have given none.",
    "Drive your qi at the {element} at {focus} until something in it gives way.",
    "Refuse to be turned away by the {element}, and take it by the throat.",
  ],
  borrow: [
    "Ask {kname} to lay a hand over yours, and borrow for an hour the root you do not have.",
    "Lean on {kname}’s root at {place}, and pass off the {element} you feel as your own.",
    "Take {kname}’s hand at {focus} and let their root speak through yours, just this once.",
  ],
  study: [
    "Ask {kname} how those without the root have worked the {element} here, and learn it by rote.",
    "Study the working of the {element} at {focus} as a stranger studies a country, from the outside in.",
    "Sit at {focus} with the old manual and learn the {element} by rule, not by feel.",
  ],
  accept: [
    "Accept your root’s silence plainly, and ask {kname} what can be done at {place} without it.",
    "Say aloud that your roots are deaf to the {element}, and begin from there.",
    "Admit the limit of your root to {kname}, and ask what the hard way asks.",
  ],
};
