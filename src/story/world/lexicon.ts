import type { Dao } from "@/engine/hero";
import type { Method, Part } from "@/engine/world";
import type { ChoiceTone } from "@/engine/types";

/**
 * The words every affair shares. A line is a template: {place}, {people}, {stake}, {foe}, {ally} and {lever} are filled from the affair’s spec, and the
 * builder picks among the variants by the affair’s position, so a line is read by a few affairs and not by forty.
 */
export type Slots = Record<string, string>;
export type ByTone = Record<ChoiceTone, string[]>;

export const STAGE_TITLE = ["The Approach", "The Lay of It", "The Turn", "The Price", "What It Leaves"];

/** The second paragraph of the sighting: what the hero is looking at, and what they could be in it. */
export const SIGHT_LINE = [
  "Nobody has asked you. That is how you know it is yours to see: the ones who are asked have already answered. You could stand at the edge of it, or put a hand to it, or take a side, or turn it. You could also walk on.",
  "You are not needed at {place}. Hardly anything is, until it is too late. The matter will turn out one way if left alone, and perhaps another if it is not, and the difference between them is the whole of what you are being offered.",
  "The word does not say what to do. Words do not. It says where, and who, and how much, and leaves the rest to whoever is standing nearest. It would be easy to be nobody standing there.",
  "{People} have not sent for anyone. They have not got the habit. They have a way of waiting that is older than the trouble, and you can see it in the word: a patience that has been mistaken for consent.",
  "A thing like this can be looked at, or helped, or fought for, or turned. All four are real, and none is the right one. The wrong one is to hear of it and go on.",
  "Somewhere in this is a place where it gives. You do not know where. You know only that {foe} stands near it, and that {ally} is not far, and that {stake} will be settled whether you go or not.",
];

/** Said of a hero the word has already reached, by what they have been in the world so far. */
export const KNOWN = {
  small: [
    "Word has gone ahead of you, as it does with someone who turns up at small things. {People} have heard of a stranger who sits through a matter to the end, and they are not sure whether it is good news.",
    "They have heard of you at {place}, a little: someone who comes, and looks, and stays. It is a modest thing to be known for, and it has opened more doors than a name.",
  ],
  hinge: [
    "Word has gone ahead of you. {People} have heard that things turn when you are in the room, and they look at you the way people look at a weather-vane in a high wind.",
    "They know your name at {place}. They have heard what was done elsewhere, and what it cost, and they are both afraid of you and hoping you will do it again.",
  ],
};

/** The labels at the sighting that take a part. {deed} is the affair’s own clause. */
export const PART_LEAD: Record<Part, string[]> = {
  look: [
    "Keep to the edge of it, and {deed}.",
    "Go as an onlooker, and {deed}.",
    "Take no side, and {deed}.",
    "Go quietly, and {deed}.",
    "Look first, and {deed}.",
  ],
  hand: [
    "Put a hand to it, and {deed}.",
    "Help where you can reach, and {deed}.",
    "Do the nearest useful thing, and {deed}.",
    "Lend what you have, and {deed}.",
    "Go to the one who needs it, and {deed}.",
  ],
  side: [
    "Take their side, and {deed}.",
    "Choose a side in the open, and {deed}.",
    "Stand where they can see you, and {deed}.",
    "Put your weight behind the ones who cannot, and {deed}.",
    "Speak up for one side of it, and {deed}.",
  ],
  hinge: [
    "Turn it yourself, and {deed}.",
    "Take the whole of it on you, and {deed}.",
    "Put your hand on the place it gives, and {deed}.",
    "Make it your matter, and {deed}.",
    "Decide it, and {deed}.",
  ],
};

export const PART_TONE: Record<Part, ChoiceTone> = { look: "inquiry", hand: "mercy", side: "truth", hinge: "force" };

export const LEAVE_LABELS = [
  "Leave {people} to it, and go back to where you left the road.",
  "Hear it, and let it go on without you.",
  "It is not yours. Go back the way you came.",
  "Walk on. The world has more of these than anyone can see.",
  "Take the word with you, and do nothing with it yet.",
];

/** The tones of the four choices at each scene of a part, with the first always the part’s own. */
export const TONES: Record<Part, ChoiceTone[]> = {
  look: ["inquiry", "quiet", "truth", "mercy"],
  hand: ["mercy", "inquiry", "quiet", "truth"],
  side: ["truth", "force", "inquiry", "mercy"],
  hinge: ["force", "inquiry", "deceit", "truth"],
};

/** The approach: what the hero does first. */
export const S0_LABELS: ByTone = {
  inquiry: [
    "Ask {ally} how it came to this, before you do anything else.",
    "Find {ally}, and ask what they would do if they were you.",
    "Stand back and work out who {foe} answers to.",
    "Ask {people} what they were told, and what they were not.",
    "Listen to the whole of it from {ally}, and ask nothing.",
  ],
  mercy: [
    "Go first to those who are hurt worst, and hear them out.",
    "Sit with {people} a while before you decide anything.",
    "Ask {ally} what {people} need most, and begin there.",
    "Take the smallest, nearest hurt, and begin with that.",
    "Say to {people} that you have not come to take anything from them.",
  ],
  force: [
    "Go straight to {foe}, and let them see you coming.",
    "Make it known in {place} that you are not leaving.",
    "Put yourself in the way of {foe}, and do not move.",
    "Walk into the middle of it, and let it make room.",
    "Take the measure of {foe} to their face.",
  ],
  quiet: [
    "Wait, and let {place} show you its habits.",
    "Take the first day for watching, and do nothing at all.",
    "Sit where the matter will pass you, and let it.",
    "Walk the edges of {place} slowly, and say nothing.",
    "Keep your counsel, and your distance, until you know the shape of it.",
  ],
  truth: [
    "Tell {ally} plainly why you have come.",
    "Say to {foe} what you think of it, in private, and as civilly as you can.",
    "Admit to {people} that you do not know what to do, and ask them.",
    "Give {ally} your honest opinion of what you have heard.",
    "Say aloud what everyone has agreed not to say.",
  ],
  deceit: [
    "Give {foe} a different reason for being here than the true one.",
    "Let it be thought that you are the sect’s man, and see who talks.",
    "Tell {people} you have orders, though you have none, and watch what follows.",
    "Say you are a buyer, and learn what is for sale.",
    "Let {foe} believe you are on their side.",
  ],
};

/** The lay of it: where the thing gives. The inquiry and truth choices learn the lever. */
export const S1_LABELS: ByTone = {
  inquiry: [
    "Ask {ally} outright where it gives, and what it would take.",
    "Go through what {ally} has shown you, and find the place that does not fit.",
    "Follow the trouble back to where it began, and look at what is there.",
    "Study how {foe} works, and look for the thing they keep closest.",
    "Put the pieces side by side, and look for the one that is missing.",
  ],
  truth: [
    "Say to {ally} that you mean to find {lever}, and ask for help.",
    "Ask plainly what would change it, and believe the answer.",
    "Tell {people} what you have found, so far, and ask if it is right.",
    "Lay out what you know to {ally}, and ask what you have missed.",
    "Name the thing that is wrong, aloud, and see who flinches.",
  ],
  mercy: [
    "Spend the day with those who are worst hurt, and leave the rest.",
    "Carry something for {ally}, and let the lay of it come of itself.",
    "Put {people} first, and let the cause wait.",
    "Take the evening to hear {people} out, with no plan.",
    "Share what you have with {people}, and ask nothing for it.",
  ],
  quiet: [
    "Keep out of sight for a day, and let it go on without you.",
    "Let the matter come to you, and keep your eyes open.",
    "Sit with {ally} and say nothing until they do.",
    "Rest, and let what you have learned settle.",
    "Do the plain nearby thing, and see what it shows you.",
  ],
  force: [
    "Lean on {foe}, and see how they take it.",
    "Push at the weakest place in {place} and see what falls.",
    "Make {foe} show you what they have, by making them afraid of what you might.",
    "Take hold of the first thing within reach, and do not let go.",
    "Test how much it will bear, and what it will not.",
  ],
  deceit: [
    "Tell {foe} you have already found it, and watch their hands.",
    "Offer {foe} a bargain you do not mean, and see what they would give.",
    "Let a rumour of your own making run through {place}, and see where it stops.",
    "Pretend to know less than you do, and let {foe} correct you.",
    "Hint to {people} that something is about to happen, and watch who moves.",
  ],
};

/** The ways of going at the decisive moment: by the lever, by strength, by a bargain, or by giving way. */
export const METHOD_LABELS: Record<Part, Record<Method, string[]>> = {
  look: {
    turned: [
      "Write it down true, with {lever} named in it, so that anyone who comes after can find it.",
      "Bear witness aloud to what you have seen, naming {lever}, to whoever will listen.",
      "Say plainly what is wrong and where {lever} lies, and let it be remembered.",
    ],
    forced: [
      "Say it loudly in front of everyone, so that no one can say they did not hear.",
      "Stand up in the open and call out what you have seen, whoever it offends.",
      "Make the telling a public thing that cannot be taken back.",
    ],
    bargained: [
      "Sell the telling of it to someone who will pay, and keep what you were paid.",
      "Trade what you have seen to {foe} for a quiet word and a coin.",
      "Say you saw nothing, for a price, and be believed.",
    ],
    gave: [
      "Say nothing of it, to anyone, and walk away.",
      "Keep what you saw to yourself, and let it be.",
      "Look away, and let others do their own telling.",
    ],
  },
  hand: {
    turned: [
      "Put {lever} into the hands of the one who can use it, and show them how.",
      "Carry the word of {lever} to the person it will help, and see it done.",
      "Use what you know of {lever} to ease the worst of it for the one in front of you.",
    ],
    forced: [
      "Do the work yourself, with your own strength, and let no one stop you.",
      "Push through to the place and do what must be done by main force.",
      "Carry the thing on your back, if you must, and set it where it is needed.",
    ],
    bargained: [
      "Trade a favour with {foe} to get your help through, and owe it later.",
      "Promise {foe} something you may not be able to give, and do the deed in the meantime.",
      "Buy off the one who stands in the way, with coin you cannot spare.",
    ],
    gave: [
      "Give them what you have in your hands, and go, whatever else is needed.",
      "Do what you can in the hour, and leave the rest to those whose it is.",
      "Help the one in front of you, and ask no questions about the larger matter.",
    ],
  },
  side: {
    turned: [
      "Stand beside them and say, aloud, where {lever} is, so that all sides hear it.",
      "Take their side with {lever} in your hand, and show it to everyone.",
      "Name {lever} in front of {foe}, in the plain light, and let the side you chose stand on it.",
    ],
    forced: [
      "Put your weight behind them and push, until {foe} gives or does not.",
      "Stand with them to the end, and let anyone who wishes to remove you try.",
      "Make it a contest of numbers and nerve, and be the one who does not look away first.",
    ],
    bargained: [
      "Tell them what they want to hear, and tell {foe} what they want, and take the difference.",
      "Hold the middle, quietly, and sell your backing to whichever side bids higher.",
      "Promise both sides your help, and keep to whoever pays.",
    ],
    gave: [
      "Step back from the side you took, and let them stand on their own.",
      "Say you have changed your mind, and withdraw, and hope it is forgiven.",
      "Leave them at the last moment, and tell yourself it was the sensible thing.",
    ],
  },
  hinge: {
    turned: [
      "Go to the place and use {lever} yourself, in front of everyone, and turn it.",
      "Put your hand on {lever} and open it, whatever stands in the way.",
      "Take {lever} from {foe}’s hands, or from wherever it lies, and use it to the end.",
    ],
    forced: [
      "Break through by force, and put the whole of yourself against it until it gives.",
      "Take it by main strength, and be the thing that cannot be stopped.",
      "Meet {foe} blade to blade, if it comes to that, and let it turn on the outcome.",
    ],
    bargained: [
      "Make a deal over {foe}’s head, with the ones who can order them, and let the paper decide it.",
      "Arrange for a clever compromise, and do not look closely at who pays.",
      "Settle it behind closed doors on terms that look like winning, and leave the cost to others.",
    ],
    gave: [
      "Stop at the last moment, and let the weight fall where it will.",
      "Draw back from the place it gives, and say it is not yours to turn.",
      "Take your hand away, and let the matter find its own end.",
    ],
  },
};

export const METHOD_TONE: Record<Method, ChoiceTone> = { turned: "truth", forced: "force", bargained: "deceit", gave: "quiet" };

/** Hidden: the way a craft goes at it. Small parts (looking on, a hand) and large (a side, the hinge) each have one line for every Dao. */
export const DAO_METHOD: Record<Exclude<Dao, "none">, { small: string; large: string }> = {
  alchemy: {
    small: "Make up what is needed, a draught or a salve or a plain strong tea, and see it done, whatever the lock.",
    large: "Brew what the matter needs, in front of everyone, and let the stuff of it speak where words have not.",
  },
  forging: {
    small: "Look at the thing as a smith would, find where it is badly made, and show {people} the flaw.",
    large: "Take the hammer to the thing itself, and re-forge it at the weak joint, in the open, until it holds.",
  },
  talisman: {
    small: "Draw a small charm for the one in front of you, and write in it what the matter really says.",
    large: "Write the whole matter out in a script that cannot be misread, and set it where all may see.",
  },
  formation: {
    small: "Lay out the place as an array, and see which stone stands badly, and say so.",
    large: "Set the whole matter in a formation, and move one stone, where it will make all the rest fall into place.",
  },
  beast: {
    small: "Let the beasts of the place tell you what they know, and follow what they do.",
    large: "Call the beasts of the place into it, and let the matter be settled by what they will and will not do.",
  },
  sword: {
    small: "Walk the place as you would a drill, and show them how a line is held.",
    large: "Draw the line with your blade where it ought to be, and stand on it, and let it be crossed or not.",
  },
  healing: {
    small: "Sit with the worst hurt, and treat what is wrong, until the rest can be seen clear.",
    large: "Treat the root of it, as a healer treats a fever, and let the whole of the place feel the cooling.",
  },
  fate: {
    small: "Throw the stalks and read where it gives, and say so, and be believed or not.",
    large: "Read the fall of the matter, and put your hand where it will fall best, and be right.",
  },
};
