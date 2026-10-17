import type { Gender } from "@/engine/hero";

/**
 * Gender in a fight. The hunters of every hub have a rule about who hunts and who guards the door, and the hunts read the hero against it: a woman, a man
 * and someone who gives no answer each have a stroke the others lack, because each has been taught what to expect of them and has learned what to do with
 * it. The foes have their own sentence for each (see `sees` in the spec). Nobody here is a villain; the rule is old, and the hunters keep it out of habit.
 */

/** The turn of the fight: one stroke that only the hero’s own gender allows, for each way of going at the foe. Hidden from everyone it is not for. */
export const GENDER_MOVE: Record<Gender, [string, string, string, string]> = {
  woman: [
    "Fight at the front, aloud, with your name said, as the hunters of {place} have never once been asked to watch a woman do.",
    "Carry yourself like someone who has come with a basket, to cut the grass, and let nothing in {place} think to count you a hunter until you have {name} by the {body}.",
    "Read it as the women of the doorways read: by what it does to the household, and what it will do to the next, and what a hearth would need to be rid of it.",
    "Walk it away in the voice the women use for a child in a fever, low and steady, and let it follow the one voice that has never been used to threaten it.",
  ],
  man: [
    "Fight at the front, as the hunters expect of a man, and let the credit they will give it be the least of what you take from it.",
    "Go in with the confidence the hunters allow a man at the edge of a wood, and spend that credit while it lasts, because it will not last.",
    "Read it as the men of the hunt read: by tracks and wind and the dull rule that a thing which kills will kill again.",
    "Stand where the men of the hunt stand, between the beast and the door, and mean it as a thing you were not asked to do.",
  ],
  unspoken: [
    "Fight as no one the hunters have a word for, and let {name} learn what you are from what you do, since nobody else will tell it.",
    "Go in as someone whom the hunt cannot place on its list, and notice how much easier it is to be overlooked when you are not even counted.",
    "Read it as someone with no side to the hunt’s old quarrel: by its need, and nothing else.",
    "Walk it away as no one’s daughter and no one’s son, and let it follow someone who has not yet been given a reason to be afraid.",
  ],
};

/** The crisis, for a hero who took the stroke their gender allowed. */
export const GENDER_CRISIS: Record<Gender, [string, string]> = {
  woman: [
    "Somewhere behind you, a hunter who had decided what you were has stopped deciding. It is the loudest silence in {place}.",
    "The stroke you chose was not the one the hunters would have taught you, and {name} was taught it by nobody either. That is, for the moment, an advantage.",
  ],
  man: [
    "The credit the hunters gave you has been spent, and what you have left is what you do with it. {Name} has no interest in your credit.",
    "You took the stroke the hunters would have taught you, and they were right about it, and you are not sure that you were right to be glad.",
  ],
  unspoken: [
    "Nobody here has a word for what you are, and so nobody has a rule for what you will do. That is also true of {name}, and the fight is between two kinds of uncounted.",
    "The stroke was yours, and nobody’s story of what you should be. {Name} meets it as it meets everything: without a word for it.",
  ],
};

/** How the people tell it after, once it has fallen, to someone like the hero. Two variants each. */
export const TELLING: Record<Gender, [string, string]> = {
  woman: [
    "In the tavern they will tell it with the gender out of the middle and put it back at the end: ‘and she did it, mind’. You will hear the ‘mind’ in your sleep.",
    "The women of {place} will tell it better than the men, because they will not need to be told what it cost. The men will tell it louder, and you will find that you do not mind.",
  ],
  man: [
    "In the tavern they will tell it as a thing a man does, and be done; the cost will go missing from the telling, and you will notice the silence where it was.",
    "The men of {place} will tell it as a story about them. The women will tell it as a story about the winter after, and you will hear the second more clearly.",
  ],
  unspoken: [
    "In the tavern they will tell it twice, once with ‘he’ and once with ‘she’, each in the right company, and neither will be true. You will let both stand.",
    "The people of {place} will not know what to call you, and will call you what you did. It is the best name anyone has given you.",
  ],
};

/** The Elder, on a hero who took the stroke their gender allowed. */
export const REPORT_GENDER: Record<Gender, string> = {
  woman: "You fought {name} as a woman, and meant it as one. I have spent thirty years learning which strokes I was allowed. You seem to have spent a morning learning which you were not told about.",
  man: "You fought {name} as a man, and used what the hunt gives a man, and spent it, and did not pretend it was nothing. That is the right way to carry a credit you did not earn.",
  unspoken: "You fought {name} with no side to stand on, and no rule to follow, and it did not matter. I should be glad to tell the Tribunal. I do not suppose they will hear it.",
};

/** The Elder, on every hero, by who they are: said of any victory, not only the one that used the stroke. */
export const REPORT_BY_GENDER: Record<Gender, string> = {
  woman: "Hunters will say you were lucky with {name}. They say it of every woman who comes back, as they say of every man that he was brave. I would sooner be accused of the luck, and have the thing dead.",
  man: "Hunters will say you were brave against {name}. They say it of every man who comes back, whatever he did. I would sooner you were accurate.",
  unspoken: "Hunters will say you were lucky, or brave, in {place}, depending on which they feel the need to say. I will say you were there, and the matter of {name} is closed, and the rest is gossip.",
};

/** What the hunters at a hub say to the hero, by who they are. Two variants each. */
export const HUB_GENDER: Record<Gender, [string, string]> = {
  woman: [
    "The hunters look at you and then at one another. One of them has already decided to be polite, which is the first stage of being surprised.",
    "A hunter nods you in, with the careful courtesy that men keep for a woman whose business they have not been told. It is more than most of them manage for each other.",
  ],
  man: [
    "The hunters nod you in as one of their own, which is a courtesy and a bill. They will expect you to know the rules, and will not tell you what they are.",
    "A hunter claps your shoulder, once, and tells you where the last man to try went wrong. He is generous with the warning, and you note that nobody offered it to the woman who passed through before you.",
  ],
  unspoken: [
    "The hunters look you over for a word to put on you, find none, and let it go. It is the nearest thing to being left alone that the hub has to offer.",
    "A hunter starts to say sir, or madam, and stops. After a moment’s thought he says ‘friend’, and it is the first time anyone has said it at the hub and meant it.",
  ],
};
