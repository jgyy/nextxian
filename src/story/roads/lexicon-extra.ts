import type { ChoiceTone } from "@/engine/types";

/**
 * More wording for the generated roads. A road is walked scene by scene, and a player who walks it should not read the same
 * menu line or the same paragraph twice: each pool the builders draw from must hold at least as many distinct lines as one
 * walk has scenes (five of an approach and three of a hidden route), whatever the road names. Every line here names no focus,
 * so it fits a place, a thing or a person, and none says where it is, so it fits the mountain and the road alike.
 */

/** Extra choice labels, by tone. Slots: kname, ally, obstacle, place, omen. */
export const CHOICE_EXTRA: Record<ChoiceTone, string[]> = {
  truth: [
    "Answer {ally} without being asked twice, and without leaving anything out.",
    "Stand before {obstacle} and say what you did, in the order you did it.",
    "Tell {kname} what you fear {place} will do to you, and ask what {kname} fears.",
    "Put your errand in one sentence for {ally}, and stand by the sentence.",
    "Own the mistake you made on the way here, in front of {kname}.",
    "Ask {kname} to correct you wherever you are wrong, and listen.",
  ],
  mercy: [
    "Stop for {obstacle} before you go on, whatever it costs you.",
    "Ask {ally} what the people of {place} need most, and carry some of it.",
    "Give {kname} a share of what you carry, and do not say that you have.",
    "Wait with {ally} until the worst of the day has passed.",
    "Speak a kind word for {kname} where others can hear it.",
    "Spend an hour on {obstacle} that you had meant to spend on yourself.",
  ],
  inquiry: [
    "Ask {ally} how {obstacle} came to be, and who gains by it.",
    "Sketch the layout of {place} from memory, and see what you cannot place.",
    "Question {kname} twice about the same hour, and compare the answers.",
    "Read {obstacle} closely, and note what it was made to leave out.",
    "Ask {ally} which question {place} would least like to hear.",
    "List everything that has changed at {place} this year, and look for the cause.",
  ],
  deceit: [
    "Give {ally} a name that is not yours, and see whose it becomes.",
    "Let {kname} overhear what you want believed.",
    "Give {obstacle} what it expects to see, and keep the rest.",
    "Promise {ally} a favour you have no means of paying.",
    "Trade a small truth to {kname} for a large silence.",
    "Pass off an old errand as a new one, and let {obstacle} wave you through.",
  ],
  force: [
    "Make it known to {kname} that you will not leave without an answer.",
    "Break {obstacle} and walk through what is left.",
    "Set {ally} between you and the door, and make the door your business.",
    "Raise your voice at {place} until someone who matters answers it.",
    "Take {obstacle} on your own terms before {kname} can name theirs.",
    "Stand your ground against {ally}, and let {place} see you do it.",
  ],
  quiet: [
    "Let {obstacle} pass you by, and note who is watching it.",
    "Sit beside {ally} until they decide to speak.",
    "Spend the hour at {place} doing nothing that anyone could object to.",
    "Breathe with {kname}’s rhythm for a while, and learn what it hides.",
    "Keep still until {omen} fades, and see what remains.",
    "Walk the edge of {place} once more, slowly, and say nothing of what you see.",
  ],
};

/** Extra second paragraphs for an approach scene, by the approach’s tone. */
export const BEAT_EXTRA: Record<ChoiceTone, string[]> = {
  inquiry: [
    "You lay out what you know in a row, like beads on a cord, and look for the one that does not roll. {Kname} watches you do it with the faint unease of someone being counted.",
    "A date does not fit. It is only a day out, but in {place} a day out is a different year. You note it, and you do not say that you have.",
    "Every answer arrives with a question hidden inside it. You start answering the hidden questions, and {ally} stops talking in the middle of a sentence.",
    "You trace a rumour back to its first mouth, and find that it was never a rumour at all, only a rumour’s costume.",
  ],
  mercy: [
    "You do what is small and near before what is large and far. By evening {place} has stopped watching your hands and started watching your face.",
    "{Ally} does not thank you. Thanks would make it a debt, and nobody here wants another. You are given a seat instead, which is the better payment.",
    "A kindness is a strange thing to carry through {place}: it is light, and everyone wants to know what is inside it. You let them look.",
    "You give your time where you cannot give your coin, and the hour weighs more than you expected, in your arms and in your thoughts.",
  ],
  force: [
    "You choose the shortest line to the thing you want and walk it. {Place} is not built for that, and shows it, in splinters and in silence.",
    "Someone says that you should wait. You do not. What happens next is quicker than waiting would have been, and costlier.",
    "Your voice carries further than you meant. {Ally} flinches, then straightens, and the look they give you has respect in it and no warmth at all.",
    "You make a fist and open it again. It is the only warning you give, and everyone in {place} who has seen the gesture before understands it.",
  ],
  deceit: [
    "The first lie is for show. The second is for use. By the third you are not sure which of them {kname} believes, and that is exactly the plan.",
    "You wear your borrowed manner like a cloak a size too large, and are careful to keep your hands where it hides them.",
    "You say less than is true and more than is safe, and {ally} fills the gap with something you would not have dared to claim.",
    "A name you invented comes back to you from someone else’s mouth, improved. You are not sure you are glad.",
  ],
  quiet: [
    "You let the hours pass at their own pace. {Omen} thins as the light moves, and the shapes of {place} come forward one at a time, like guests waiting to be introduced.",
    "Nothing is asked of you, and you ask nothing. In the space that opens, {ally} sets down a burden you had not known they were carrying.",
    "You count your breaths until they are even, and then until they are not yours any more. When you open your eyes {place} looks the same, and you do not.",
    "The silence at {place} has a grain, like wood. You follow it with your attention and find where it was joined, long ago, by someone patient.",
  ],
  truth: [
    "You say the plain thing and then say nothing more. The quiet afterwards is not hostile. It is the quiet of people deciding to answer in kind.",
    "{Kname} asks you to say it again, slowly. You do, and it sounds smaller and truer the second time, like a weight set down.",
    "You find that you cannot soften it without lying, and that you do not want to lie. The words come out whole, and {ally} receives them whole.",
    "Honest speech is costly in {place}, and the price is paid at once. You pay it, and what is left in your pocket is a clear head.",
  ],
};

/**
 * Chooses the line for step `step` of a walk from a pool, so that consecutive steps of one walk (the five scenes of an approach and
 * the three of a hidden route, numbered 0 to 7) never get the same line. `base` varies the walk from road to road.
 */
export function spread<T>(pool: readonly T[], base: number, step: number): T {
  return pool[(((base + step) % pool.length) + pool.length) % pool.length];
}
