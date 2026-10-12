import type { Gender } from "@/engine/hero";
import type { Element } from "@/engine/path";
import type { Craft } from "./lexicon-craft";

/**
 * What it means to walk a Crossing Road as a woman, a man or someone who gives no answer. Each road has a door at the middle of its first
 * approach that opens only to one of the three, and behind it a scene of that road’s own: the custom of the craft, the custom of the element,
 * and how the keeper, who is a woman or a man, meets the hero across it. Slots: kname, kthey, kthem, ktheir, place, focus, relic, element.
 */

/** The scene’s heading, after the road’s title. */
export const GENDER_TITLE: Record<Gender, string[]> = {
  woman: ["The Sisters’ Bench", "The Women’s Hour", "The Bench by the Wall", "The Daughters’ Door"],
  man: ["The Brothers’ Hall", "The Men’s Yard", "The Long Bench", "The Sons’ Door"],
  unspoken: ["The Middle Seat", "The Third Door", "The Seat Between", "The Unwritten Column"],
};

/** The door’s own label, in the approach scene that opens onto the gendered scene. */
export const GENDER_DOOR: Record<Gender, string[]> = {
  woman: [
    "Go where the women of {place} sit, on the bench by the wall, and see what they have been keeping.",
    "Follow the women out of the room at {place} when the hour is called, to the bench they have made their own.",
    "Take the bench the women of {place} leave open for one another, and hear what is said on it.",
    "Slip through the narrow door at {place} that the women of the craft use, and no one has thought to bar.",
  ],
  man: [
    "Go where the men of {place} gather, on the long bench, and see what they ask of one another.",
    "Follow the men out of the room at {place} when the hour is called, to the yard they hold for themselves.",
    "Take the place the men of {place} keep at the end of the long bench, and hear what is said there.",
    "Go through the wide door at {place} that the men of the craft use, and see why it is kept wide.",
  ],
  unspoken: [
    "Ask {kname} where those who will not say which bench they belong to are seated at {place}, and go there.",
    "Take the stool at {place} that stands between the two benches, and see who comes to sit by it.",
    "Find the third door at {place}, the one the apprentices say is never used, and open it.",
    "Go to the seat at {place} kept for the ones who give no answer, and wait to be asked what you are.",
  ],
};

/** The craft’s custom, by gender: what the trade has always said about who may do what. Forty-five words or so each. */
export const GENDER_CRAFT: Record<Gender, Record<Craft, string>> = {
  woman: {
    alchemy:
      "The pill trade has an old rule that women weigh and men sell, and the guild called it nature. {Kname} sets the little brass weights in your hand without comment, and an apprentice at the door looks away, as people do when a custom is being broken politely.",
    forging:
      "Smiths have said for four hundred years that a woman at the forge sours the quench, and have never once been asked for a reason. {Kname} puts the hammer in your hand all the same, and a journeyman at the next anvil finds something urgent in the wall.",
    talisman:
      "The talisman-writers admit women as copyists and not as masters, and call the difference fitness of hand. {Kname} gives you a master’s brush, and the old rule hangs in the room like a held breath.",
    formation:
      "The array-keepers say a woman may lay a ring but not close it, and have no reason ready when you ask. {Kname} sets you at the closing stone and stands aside, and the ring waits for your hand.",
    beast:
      "The beast-keepers say a dam trusts a woman and a sire does not, and the yard has been staffed that way for a century. {Kname} walks you past the sires without comment, and the dams lift their heads one by one to see you.",
    sword:
      "The sword schools keep a women’s hour at dawn, in the cold yard, and call it a courtesy; everyone knows it is a fence. {Kname} walks you out of the dawn hour and into the noon one, and a rank of men finds the sky interesting.",
    healing:
      "In the healing halls women are trusted with the sick-room and the birthing bed and kept from the dissecting table, and the sect calls this respect. {Kname} puts a knife in your hand and says the table has been short of a pair of hands for a hundred years.",
    fate:
      "Diviners say a woman’s fortune is read from her mother’s and a man’s from his father’s, and the old tables have a column for each. {Kname} reads yours from what you have done instead, and the room puts down its cups.",
  },
  man: {
    alchemy:
      "The pill trade has an old rule that women weigh and men sell, and the man who sells is the one the buyer finds at night if the batch goes wrong. {Kname} sets the sale-ledger before you, with its debt column, and says nothing of what it contains.",
    forging:
      "At the forge the men are expected to take the heavy work and the blame, in that order. {Kname} gives you the sledge without ceremony, and the journeymen watch to see whether you will make a show of it, or take it as it comes.",
    talisman:
      "The talisman-writers expect a man to take his master’s name with the brush, and to carry it, and to answer for it in every court. {Kname} hands you the brush and asks whose name you would be willing to answer for.",
    formation:
      "The array-keepers expect a man to be the one who stands in the gap when a ring fails, and they say so as if it were a compliment. {Kname} walks you to the weakest stone and asks, mildly, whether you will stand in it.",
    beast:
      "The beast-keepers say a sire trusts a man and a dam watches him, and that is why the dams are kept for the women of the yard. {Kname} turns you toward the sires’ stalls, and the stalls turn to look at you.",
    sword:
      "The sword schools keep the custom of the first challenge: a new man is tried by the oldest of the junior class, and the whole yard watches. {Kname} nods to the oldest, and he rises, wiping his hands.",
    healing:
      "In the healing halls men are trusted with the surgery and the table and kept from the birthing room, and the sect calls this modesty. {Kname} says the ward is short of the other pair of hands, and leads you to a door you have never been through.",
    fate:
      "Diviners say a man’s fortune is read from his father’s name, and the old tables run back only three generations. {Kname} reads yours from your own palm instead, and the lines do not match the table, which has no column for that.",
  },
  unspoken: {
    alchemy:
      "The pill trade seats its apprentices on two benches, and has never had a rule for anyone who will not say which. {Kname} sets a stool between them, and says the old pill-makers kept one for the third thing, which is the one who tastes.",
    forging:
      "The smiths’ hall has two doors, the apprentices’ and the journeymen’s, and a third kept for those who come by other roads. {Kname} unlocks the third, and the journeymen pretend not to notice that its hinges are oiled.",
    talisman:
      "The talisman-writers sign their charms with a seal that has a side for each of two names. {Kname} turns yours over, finds the blank rim, and says the rim has been waiting a very long time for someone to use it.",
    formation:
      "An array has an inside and an outside, and the keepers say that those who cannot choose which they belong to make the best sentries, being never quite in either. {Kname} posts you at the seam of the ring.",
    beast:
      "The beast-keepers have a joke that the beasts cannot tell and do not care, and that is why the yard treats everyone alike. {Kname} says it is no joke, and leaves you alone with the oldest of them.",
    sword:
      "The sword schools line their pupils by sex for the opening bow, and nobody has ever written what is to be done with those who will not say. {Kname} tells you to stand at the end of the line, which is where the teacher stands.",
    healing:
      "In the healing halls the sick are sorted by sex on admission, and the clerks have two columns and a pen. {Kname} tells you the third column is unwritten, and the people who fall into it are the ones no one else will admit to.",
    fate:
      "The diviners’ tables have a column for each of two, and none for a person who gives neither answer. {Kname} reads yours in the margin, where the tables are blank, and says the margin is where the true ones are kept.",
  },
};

/** The element’s custom, by gender: what the old books say each element is, and who it is said to favour. */
export const GENDER_ELEMENT: Record<Gender, Record<Element, string>> = {
  woman: {
    wood: "Wood is called a woman’s element in the old books, patient and yielding, and the keepers of green things half expect you to be gentle. The half that does not expect it has not yet met the saw.",
    fire: "Fire is called a man’s element in the old books, and the fire-keepers watch you with a wary patience, as they would a guest who may or may not have heard the rule.",
    earth: "Earth is called the mother of all and the old books give her daughters nothing in particular. The keepers of the ground are looser with a daughter’s mistakes, and sterner with her successes.",
    metal: "Metal is a man’s element in the books of the south and a woman’s in the north, where they say a woman’s edge is the finest. The keepers here have read both, and say nothing.",
    water: "Water is called a woman’s element in every book that was ever written, and the keepers of wet things stand a little apart and let you come to them, as one lets a cat.",
  },
  man: {
    wood: "Wood is called a woman’s element in the old books, and the keepers of green things expect a man to be clumsy with it. The roots, which have no manners, are not impressed either way.",
    fire: "Fire is called a man’s element in the old books, and the fire-keepers expect a man to be careless with it. The first burn is how they judge whether you have the sense to be ashamed.",
    earth: "Earth is called the mother of all, and the keepers of the ground expect her sons to dig. They will let you dig a long while before they ask what you were looking for.",
    metal: "Metal is a man’s element in the books of the south, and the keepers here expect you to cut deep and apologise late. The metal, unmoved, rings at the sound of your step.",
    water: "Water is called a woman’s element in every book that was ever written, and the keepers of wet things are wary of a man at it. The water, which has no books, takes your reflection as it takes everyone’s.",
  },
  unspoken: {
    wood: "Wood is called a woman’s element in the old books, and the books are silent about those who are neither. The green things in the room grow toward you anyway, as green things grow toward any light.",
    fire: "Fire is called a man’s element in the old books, and the books have nothing to say about you. The fire in the room, which has no books, leans toward you with some interest.",
    earth: "Earth is called the mother of all and gives no sign of caring which child you are. The keepers of the ground, who follow her example, ask you only what you can carry.",
    metal: "Metal is a man’s element in the south and a woman’s in the north, and the keepers of this place have worked in both countries. They look at you as at an edge that has no book.",
    water: "Water is called a woman’s element in every book that was ever written, and it takes the shape of whatever holds it. The keepers look at you, and see that you are not held by any.",
  },
};

/** How a keeper of each gender meets a hero of each: one line for every pair. */
export const KEEPER_GENDER: Record<"woman" | "man", Record<Gender, string>> = {
  woman: {
    woman: "{Kname} meets your eye over the work with the plain directness of a woman who had to earn a place speaking to another who may have to.",
    man: "{Kname} has taught men and women alike, and has noticed that men take the correction faster and the instruction slower. She says so, pleasantly, to your face.",
    unspoken: "{Kname} looks you over once and asks nothing, which in this trade is a rarer courtesy than it sounds.",
  },
  man: {
    woman: "{Kname} has taught many daughters and says, without being asked, that they make the better pupils, and that he has never once been thanked for noticing.",
    man: "{Kname} meets you with the dry fellow-feeling of a man who has trained a hundred others like you and buried the ones who would not listen.",
    unspoken: "{Kname} does not ask which you are. He asks what you can carry, and what you would like to be called, and writes the second down.",
  },
};

/** What the four choices in a gendered scene say. Three variants each; a road takes the one its index points at. */
export type GenderPick = "sisters" | "barred" | "ask" | "quiet" | "brothers" | "prove" | "yield" | "middle" | "either" | "refuse";

export const GENDER_LABEL: Record<GenderPick, string[]> = {
  sisters: [
    "Sit with the women of {place} and take what they have been handing down for years.",
    "Let the women at {place} make room for you on the bench, and learn what is learnt there.",
    "Take the sisters’ offer of a place at {place}, and the knowledge that comes with it.",
  ],
  barred: [
    "Walk through the door that the custom of {place} bars to women, and make them say why.",
    "Take up the work at {focus} that the custom reserves for men, and begin before anyone speaks.",
    "Stand in the doorway at {place} that is not meant for you, and do not move until you have been heard.",
  ],
  ask: [
    "Ask {kname} what the custom was for, before it was a custom.",
    "Ask {kname} who first made the rule at {place}, and what they were afraid of.",
    "Ask {kname} whether the custom at {place} has ever been broken, and how it ended.",
  ],
  quiet: [
    "Keep your own counsel, and do the work at {focus} as if no one had remarked on you.",
    "Say nothing of the custom, and work at {focus} until the room forgets you are being watched.",
    "Let the custom pass over you, and take your place at {focus} without remark.",
  ],
  brothers: [
    "Take the oath of the men’s hall at {place}, and the debt that comes with it.",
    "Sit on the long bench at {place} and let the men of the craft name what you owe them.",
    "Answer to the brothers of {place}, and accept what they will expect of you in return.",
  ],
  prove: [
    "Answer the challenge in the yard at {place} before anyone has finished making it.",
    "Meet the oldest of the men at {place} in the yard, and show him what you can do.",
    "Take up the test the men of {place} set for every newcomer, and take it hard.",
  ],
  yield: [
    "Decline to prove anything at {place}, and let the men think what they like.",
    "Set down the challenge at {place} unspoken, and offer the hall your help instead.",
    "Refuse the yard’s test at {place}, plainly, and take the cost of refusing.",
  ],
  middle: [
    "Take the seat between the benches at {place}, and tell the room as much about yourself as you choose.",
    "Sit in the middle seat at {place} and let whoever comes to it say what they came for.",
    "Take the third seat at {place}, and answer honestly whatever you are asked from it.",
  ],
  either: [
    "Sit on whichever bench suits the day at {place}, and say nothing of why.",
    "Let the two benches at {place} each think you theirs, and learn what both will say.",
    "Move from one bench to the other at {place} as the talk changes, and take what each gives.",
  ],
  refuse: [
    "Refuse to be sorted at {place}, and take the hall’s displeasure as it comes.",
    "Stand in the open floor at {place} and decline both benches, aloud, to the whole room.",
    "Tell the keepers of {place} that you will belong to neither bench, and will work all the same.",
  ],
};

/** Who is on which pick: the four choices each gender sees in its own scene, in order. */
export const GENDER_PICKS: Record<Gender, [GenderPick, GenderPick, GenderPick, GenderPick]> = {
  woman: ["sisters", "barred", "ask", "quiet"],
  man: ["brothers", "prove", "yield", "ask"],
  unspoken: ["middle", "either", "ask", "refuse"],
};
