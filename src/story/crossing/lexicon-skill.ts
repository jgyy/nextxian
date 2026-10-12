import type { Element } from "@/engine/path";
import type { Craft } from "./lexicon-craft";

/**
 * What the keeper does with a hero’s own craft. There are three scenes behind the door at the middle of the third approach, and a hero is shown the one
 * their Dao earns: the road’s own craft (the keeper lets a colleague into the work), another craft (the two arts are set side by side), or none at all (the keeper
 * teaches the open hand a first lesson). Slots: kname, kthey, kthem, ktheir, place, focus, relic, element, dao (the road’s craft), .
 */
export type SkillKind = "own" | "other" | "open";

export const SKILL_TITLE: Record<SkillKind, string[]> = {
  own: ["A Colleague at the Work", "The Inner Bench", "Hand to Hand", "The Master’s Piece"],
  other: ["Two Crafts, One Bench", "The Other Art", "Side by Side", "A Borrowed Rule"],
  open: ["The First Lesson", "Empty Hands", "The Open Hand at the Bench", "Where the Craft Begins"],
};

export const SKILL_DOOR: Record<SkillKind, string[]> = {
  own: [
    "Tell {kname} that you walk the same Dao, and ask to be let in to the work at {focus} as a colleague.",
    "Show {kname} the marks of your own {dao} on your hands, and ask for the inner bench at {place}.",
    "Offer {kname} an hour of your {dao}, as one practitioner to another, at {focus}.",
    "Ask {kname} to put aside the visitor’s lesson at {place} and show you what the craft keeps from visitors.",
  ],
  other: [
    "Tell {kname} that your own Dao is not the {dao}, and ask what the craft at {place} would make of it.",
    "Set your own Dao beside {kname}’s {dao} at {focus}, and see which of the two has something to learn.",
    "Ask {kname} to read your Dao the way the craft at {place} reads everything: by what it leaves in the hands.",
    "Offer {kname} an hour of your own Dao in exchange for an hour of the craft at {focus}.",
  ],
  open: [
    "Tell {kname} that you follow no Dao, and ask what the craft at {place} would teach an open hand.",
    "Show {kname} your empty hands at {focus}, and ask where a person with no craft begins.",
    "Ask {kname} for the first lesson at {place}, the one given to someone who knows nothing at all.",
    "Offer {kname} your open hands at {focus}, and ask to be set a task that needs no craft.",
  ],
};

/** The keeper and the hero’s craft: twenty-four paragraphs, one for each pair of kind and craft. */
export const SKILL_SCENE: Record<SkillKind, Record<Craft, string>> = {
  own: {
    alchemy: "{Kname} looks at the stains on your fingers and sets a second jar on the bench without being asked. “The first lesson,” {kthey} says, “is the one a stranger gets. This is the one a pill-maker gets,” and the dose {kthey} measures out is a grain lighter than any you were ever shown.",
    forging: "{Kname} turns your hand over, finds the burn-scar at the base of the thumb, and puts a different hammer in your grip: heavier, older, worn to a shape that is not quite yours. “Try the other face,” {kthey} says, and the first blow lands in a place the hammer had been saving for it.",
    talisman: "{Kname} takes your brush, tests the hairs against a thumb, and gives it back without a word. Then {kthey} unrolls from a case a sheet no apprentice is shown, written in a hand grown strict with age, and lets you read it as far as you can.",
    formation: "{Kname} walks you to the centre of the ring, to a stone that visitors are never allowed to touch, and puts your palm on it. The stone is warm, and the ring changes its note for you as a lock does for a key.",
    beast: "{Kname} opens the stall that visitors are not shown, and the animal inside lifts its head and looks at you as if it had been told you were coming. “It knows a keeper,” {kthey} says. “It knows the smell of one who has been bitten.”",
    sword: "{Kname} draws a blade and lays it across your palms, and does not say what it is. The weight tells you: it is a sword that was made to be taught with, and has cut nothing in a hundred years, and is keener than any you have held.",
    healing: "{Kname} takes you through the ward to a bed behind a curtain where the cases are kept that the sect does not wish to hear about. A pulse, a chart, a cup of something grey. “You will know what to do,” {kthey} says, “or you will know that you do not.”",
    fate: "{Kname} lays your palm on the cloth and spreads the stalks across it, and reads them aloud in the strict shorthand of the trade, as one reads to a colleague. You follow it to the end, and the last line is the only one you did not expect.",
  },
  other: {
    alchemy: "{Kname} listens to how your art works and nods slowly, the way a pill-maker nods at a good soup. “Everything,” {kthey} says, “is a dose,” and sets a jar between you for you to measure out what your craft would call by another name.",
    forging: "{Kname} turns your art over as one turns a blade in the light, to see where it was folded. “Everything,” {kthey} says, “is a metal, if you heat it enough,” and sets a pair of tongs between you and a bar of something that is not iron.",
    talisman: "{Kname} reads your art the way one reads a charm, backward from the last stroke. “Everything,” {kthey} says, “is a script,” and lays a brush between you and a sheet that is, for the moment, blank.",
    formation: "{Kname} studies your art as one studies a ring, from the edge. “Everything,” {kthey} says, “is an array, if you take a step back,” and puts a coil of cord between you and a pattern of stones.",
    beast: "{Kname} watches how your art moves and tilts {ktheir} head, like a keeper watching an unfamiliar animal. “Everything,” {kthey} says, “is a bond, if you wait,” and points to a gate that you are meant to open slowly.",
    sword: "{Kname} measures your art with a long look and a half-step back. “Everything,” {kthey} says, “is a cut, if you hold it right,” and lays a blade between you, hilt toward your hand.",
    healing: "{Kname} lays two fingers on the wrist that does your work and listens. “Everything,” {kthey} says, “is a pulse, if you stop long enough,” and sets a basin of warm water on the bench between you.",
    fate: "{Kname} reads your art the way a diviner reads a stranger, by what it refuses to say. “Everything,” {kthey} says, “is a casting, if you ask the right question,” and lays the stalks between you and a cloth.",
  },
  open: {
    alchemy: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every pill-maker learns, which is to wash them, slowly, and to stand with them open at the bench until the herbs are ready.",
    forging: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every smith learns, which is to work the bellows an hour without a word, and watch the fire do all the talking.",
    talisman: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every writer learns, which is to grind the ink an hour before touching a brush.",
    formation: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every keeper learns, which is to carry stones from one heap to another and not ask why.",
    beast: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every keeper learns, which is to sit by the pen an hour and be uninteresting.",
    sword: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every swordsman learns, which is to stand still for an hour with a wooden stave and do nothing with it.",
    healing: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every healer learns, which is to sit with a sleeper and keep the lamp trimmed.",
    fate: "{Kname} looks at your empty hands and does not ask why. “Then you have nothing to unlearn,” {kthey} says, and gives you the first thing every diviner learns, which is to watch a candle for an hour and report what it does.",
  },
};

/** The element’s part in the lesson: fifteen paragraphs, one for each pair of kind and element. */
export const SKILL_ELEMENT: Record<SkillKind, Record<Element, string>> = {
  own: {
    wood: "The work has the grain of living wood in it. Every motion you make is guided by something that wants to grow, and by the time you finish the bench is faintly green.",
    fire: "The work has the heat of a banked fire in it. Every motion is a little too fast, until the keeper’s hand on your wrist teaches the pause that the flame needs.",
    earth: "The work has the weight of the ground in it. Every motion settles, and {kname} lets each one rest a breath longer than you would, until you understand why.",
    metal: "The work has an edge in it. Every motion is stripped to its cleanest line, and the keeper’s eyes follow your hands the way a gaze follows a blade.",
    water: "The work has the pull of a current in it. Every motion carries a little further than you meant, and the keeper’s only correction is to let it.",
  },
  other: {
    wood: "The two arts grow toward each other like two shoots in one pot. {Kname} says wood is the element that least minds a neighbour, and that is why the craft has so many.",
    fire: "The two arts spark against each other. {Kname} says fire is the element that least forgives a neighbour, and that is why the craft learns more from strangers than from friends.",
    earth: "The two arts settle against each other, as two stones in a wall. {Kname} says earth is the element that holds all neighbours in the end, whether it likes them or not.",
    metal: "The two arts ring against each other, each on its own note. {Kname} says metal is the element that tells you whether two things are in tune, and does so without mercy.",
    water: "The two arts run into each other, as two streams at a ford. {Kname} says water is the element that makes one thing of two, and that nobody afterwards can say which was which.",
  },
  open: {
    wood: "The lesson is as slow as a plant’s, and as sure. {Kname} says an open hand is a seedbed, and that the first year is for lying fallow.",
    fire: "The lesson is hot and short, and burns away what was not needed. {Kname} says an open hand is a clean hearth, and that the first fire is always the worst.",
    earth: "The lesson is heavy and plain, and goes down into the ground. {Kname} says an open hand is a bare field, and that the first season is for turning it over.",
    metal: "The lesson is thin and exact, and leaves nothing out. {Kname} says an open hand is an unsharpened edge, and that the first work is to find out which side is which.",
    water: "The lesson is soft and relentless, and takes the shape of what you bring. {Kname} says an open hand is an empty cup, and that the first thing a cup learns is to be filled.",
  },
};

export type SkillPick = "beside" | "masterwork" | "trade" | "watch" | "compare" | "borrow" | "quarrel" | "defer" | "apprentice" | "labour" | "ask" | "carry";

export const SKILL_LABEL: Record<SkillPick, string[]> = {
  beside: [
    "Work beside {kname} at {focus} for the hour, doing what the craft asks and nothing more.",
    "Take the bench next to {kname} and let your hands follow where {kthey} leads, at {focus}.",
    "Join {kname} at {focus} as a colleague would, and keep step with {kthem} through the work.",
  ],
  masterwork: [
    "Attempt the master’s piece that {kname} sets out at {focus}, which no visitor is allowed to try.",
    "Ask for the hard task at {focus}, the one the apprentices are not shown, and begin it.",
    "Take up the work at {focus} that {kname} has been saving for someone who could do it.",
  ],
  trade: [
    "Offer {kname} one secret of your own, in return for one of the craft’s, at {focus}.",
    "Trade an hour of your method for an hour of {kname}’s, and compare what each of you gives away.",
    "Tell {kname} how your own Dao solves what the craft at {focus} solves, and ask how the craft does.",
  ],
  watch: [
    "Only watch {kname} at {focus}, and say nothing, and let the craft show itself.",
    "Sit at the edge of {focus} and watch {kname} work for the whole hour, without once moving.",
    "Stand where the light is worst at {focus} and watch {kname}’s hands until you know them.",
  ],
  compare: [
    "Set your own method beside {kname}’s at {focus}, and look for the place where they touch.",
    "Ask {kname} to do one thing your way at {focus}, and then do the same thing {ktheir} way.",
    "Lay out your own craft on the bench at {focus} beside the craft of {place}, and read them together.",
  ],
  borrow: [
    "Borrow one rule of the craft from {kname}, to carry back into your own work.",
    "Ask {kname} for one small rule of the {dao} that your own craft has never been told.",
    "Take away a single habit of {kname}’s at {focus}, as a stranger takes a seed.",
  ],
  quarrel: [
    "Contest {kname}’s method at {focus} with your own, and see whose holds.",
    "Say plainly that your own craft does this better than the craft of {place}, and offer to show it.",
    "Take issue with {kname} over the way the work at {focus} is done, and be ready to be proven wrong.",
  ],
  defer: [
    "Defer to {kname} at {focus}, and put your own craft aside for the hour.",
    "Set down your own craft at the door of {place}, and ask to be taught as if you knew nothing.",
    "Say that {kname} knows the work at {focus} better than you, and let {kthem} lead.",
  ],
  apprentice: [
    "Take the first lesson {kname} offers at {focus}, in the order it is given.",
    "Ask {kname} to teach you at {place} what the craft teaches everyone, from the beginning.",
    "Sit at the apprentices’ end of the bench at {focus}, and do what the youngest does.",
  ],
  labour: [
    "Do the plain labour of the craft at {focus}, which asks for hands and nothing else.",
    "Sweep, haul and wash up at {place} until the hour is done, and ask {kname} for nothing.",
    "Take the heavy, simple work at {focus} that the craft hands to anyone, and finish it.",
  ],
  ask: [
    "Ask {kname} why the craft at {place} keeps its first lesson for strangers, and what it is afraid you will learn.",
    "Ask {kname} what the {dao} cannot do, and listen to the whole of the answer.",
    "Ask {kname} what the craft of {place} would be if no one had ever written it down.",
  ],
  carry: [
    "Offer to carry what {kname} cannot, at {place}, and be of use for the hour.",
    "Take the sack that {kname} is struggling with at {focus}, and walk it where it needs to go.",
    "Offer {kname} your open hands for whatever the work needs, and ask for nothing in return.",
  ],
};
