import type { ChoiceTone } from "@/engine/types";

/**
 * Shared wording for the realm roads. These sit in Books Two to Six, away from the mountain, so none of this text
 * names the Law Hall, the sect gate or the climb. A capitalised slot ({Place}) starts a sentence.
 * Slots: place, keeper, kname, relic, omen, secret, focus, obstacle, ally.
 */

/** What a person in the company says to close a road: who the player reports to, wherever the cart is. */
export const REPORT_TO = "Elder Su";

/** The second paragraph of an approach scene, by the tone of the approach. Six variants each. */
export const MODE_BEAT2: Record<ChoiceTone, string[]> = {
  inquiry: [
    "You ask questions the way a surveyor drives stakes: slowly, and in a line. {Ally} answers some of them, and the answers withheld tell you as much as the ones given.",
    "There is a pattern in how {place} remembers, and you begin to find its edges. Dates are exact, names are vague, and nobody mentions the season before last.",
    "You copy what you can into your notes. Half of it will mean nothing tomorrow, and the other half may be the reason you stopped here.",
    "Every answer has been prepared in advance. You listen for the one that was not, the sentence said a breath too quickly.",
    "The records of {place} agree with each other too well. You set two of them side by side and look for the stitch.",
    "You ask the same thing three ways and note who changes their answer. In a place like this, the one who changes it is the one who knows.",
  ],
  mercy: [
    "You put your questions down and ask what is needed. {Ally} stares, then laughs, then tells you. Helping takes the whole afternoon, and no one here has been looked at that way in a long time.",
    "Kindness opens doors that questions never reach. People begin to speak without being asked, in the low voices of those unsure whether they are allowed to hope.",
    "You carry water, mend a latch, sit with someone through a long cough. It will not get your name written anywhere, and you find that you do not mind.",
    "No one asks you to be gentle. You are gentle anyway, and the cost is time you do not have and trust you could not have bought.",
    "A child hands you something, a button or a shell or a stone, and runs. You put it in your sleeve as carefully as if it were jade.",
    "You give what you can spare and ask for nothing. {Kname} watches the exchange with the expression of someone doing a sum that will not come out.",
  ],
  force: [
    "Patience was never going to get you through, and you know it. You set your shoulders and push, and {place} gives way with a sound like a held breath let go.",
    "You make it plain that you will not be turned away. {Ally} steps aside with a look that mixes relief and contempt, and the street finds urgent business indoors.",
    "Something breaks, and it is not only a latch. You hear it in the quiet that follows, the particular quiet of people deciding whether to be afraid of you.",
    "You have never found it hard to be loud. It is the aftermath that costs. Everyone here will remember how you came in, whatever you say on the way out.",
    "A hand goes to a weapon and thinks better of it. You do not draw yours. You only let them see that you have thought about it.",
    "You lean on the matter until it cracks. What was hidden behind it is smaller than you hoped and more dangerous than you feared.",
  ],
  deceit: [
    "The lie is easy to begin and difficult to finish. {Ally} accepts it with a nod that may mean belief or a long memory, and you cannot tell which.",
    "You keep your face agreeable and your hands busy. People forgive a great deal in someone who seems to want nothing, and you want nearly everything.",
    "You change a detail of your errand halfway through and watch who notices. Two people do. You file their faces away for later.",
    "A false name slips off your tongue as smoothly as a true one. That ought to trouble you more than it does, and you put the thought away.",
    "You let {kname} think you are a little more important than you are. It costs nothing at first, and then it begins to cost.",
    "Someone corrects you, kindly, on a detail you invented. You thank them, and learn something true from the correction.",
  ],
  quiet: [
    "You do not hurry. {Place} reveals itself the way a pond does when you stop throwing stones: first the surface, then the movement under it, then the shape of what is waiting.",
    "Hours pass. {Ally} brings you tea without being asked and says nothing, and the silence turns out to be the most honest thing anyone has offered you here.",
    "You let the day go by and keep your eyes open. A great deal happens when nobody expects you to be watching.",
    "Stillness is its own kind of cultivation. You breathe, the world slows, and details you would have missed come forward one at a time.",
    "You find a place to sit that nobody uses. From there the traffic of {place} resolves into habits, and the habits into a map.",
    "Dusk comes and you have not spoken since noon. {Kname} has noticed, and so has everyone {kname} reports to.",
  ],
  truth: [
    "You say what you came to say and then you stop talking. {Ally} looks at you for a long time and sets down whatever guarded thing was in their hands.",
    "Plain speech is rare here, and it lands like a dropped bowl. Nobody replies for a moment. Then a dozen people reply at once.",
    "You do not soften your account. It is not comfortable to hear, but {kname} nods as though a long argument has finally been given an answer.",
    "Honesty is cheaper than you feared and dearer than you hoped. You find you can stand in the silence after it without needing to fill it.",
    "You give your reasons in the order they happened and leave out the ones you are not proud of, and then, because it is unfair to leave them out, you add them.",
    "Someone who has been waiting to be told the truth lets out a breath. You see how much of the room had been holding it.",
  ],
};

/** Choice labels by tone. Six variants each. */
export const CHOICE_LABEL2: Record<ChoiceTone, string[]> = {
  truth: [
    "Tell {kname} plainly what you came to find, and why.",
    "[ptw] Lay out everything you have seen at {focus}, without softening any of it.",
    "Admit to {ally} that you do not yet know whom to trust in {place}.",
    "[ptw] Say aloud what you believe about {focus}, and accept whatever comes of saying it.",
    "Give {kname} your true name and your true errand, and ask for the same in return.",
    "Confess the part of the matter you are least proud of, before anyone asks.",
  ],
  mercy: [
    "Offer {ally} what food and coin you can spare, and ask for nothing.",
    "Sit beside {kname} and let the silence be kind for a while.",
    "Take on a small task for {ally} before you press for answers.",
    "Speak gently of those who have suffered in {place}, and mean it.",
    "[p] Leave something at {focus} for the people who cannot come back for it.",
    "Carry what is too heavy for {ally} to the end of the lane.",
  ],
  inquiry: [
    "[pt] Study {focus} a little longer, and write down what does not fit.",
    "[ptw] Ask {ally} one careful question about {focus}, then wait for the whole answer.",
    "[pt] Compare what {kname} told you with what {focus} shows.",
    "[t] Search the margins of {focus} for marks that someone tried to remove.",
    "Trace {obstacle} back to whoever put it there.",
    "Count what {place} has and what its records say it has, and see which is short.",
  ],
  deceit: [
    "Claim an errand from the Concord that you do not have.",
    "Tell {ally} a convincing half-truth and watch which half is believed.",
    "[t] Slip a small piece of {focus} into your sleeve while {kname} looks away.",
    "Let {kname} believe you already know more than you do.",
    "Use a borrowed name to get past {obstacle}.",
    "Trade a rumour you invented for one that is true.",
  ],
  force: [
    "Press past {obstacle} before it can be explained away.",
    "Lean on {kname} and make it plain the questions are not optional.",
    "[pw] Break the quiet around {focus} with a demand no one can ignore.",
    "Shoulder {ally} aside and take what you came for.",
    "Warn {kname} that the Censors will hear of any lie told here today.",
    "[p] Stand in the doorway of {focus} until someone decides to talk.",
  ],
  quiet: [
    "[ptw] Wait in the shadow of {focus} until the street empties.",
    "Say nothing, and let {kname} fill the silence.",
    "Rest a while and let {place} show you its ordinary face.",
    "Move on at the pace of the slowest person here, and watch.",
    "Step back from {obstacle} and see who comes to it next.",
    "[ptw] Let the lamp burn down beside {focus}, and keep your eyes on the door.",
  ],
};

/** The first paragraph of the entry's choices. The label of each approach, by the approach's tone. Four variants. */
export const APPROACH_LABEL2: Record<ChoiceTone, string[]> = {
  inquiry: [
    "Study {focus} and ask what it was built to hide.",
    "Go through {focus} slowly, reading what others walked past.",
    "[t] Take {focus} apart in your mind before you touch it.",
    "[t] Find out who last altered {focus}, and why.",
    "[w] Ask {focus} what {place} has taught it to keep quiet about.",
  ],
  mercy: [
    "[pw] Go to {focus} and see who needs help there.",
    "[p] Offer your hands at {focus} before you offer any questions.",
    "[t] Ask {focus} what it is short of, and bring that.",
    "[p] Sit with whoever is waiting at {focus}.",
    "[w] Offer {focus} water, and wait while it decides about you.",
  ],
  force: [
    "[p] Break your way into {focus} before anyone can prepare.",
    "[p] March up to {focus} and demand to be let in.",
    "[p] Take {focus} by the door nobody guards.",
    "[pt] Put your weight on {focus} and see who objects.",
    "[w] Corner {focus} and demand to be heard.",
  ],
  deceit: [
    "[p] Pass yourself off as someone expected at {focus}.",
    "Slip toward {focus} behind a borrowed errand.",
    "[w] Tell {focus} a story and see which part it keeps.",
    "[p] Arrive at {focus} an hour before you are expected.",
    "[t] Offer {kname} a reason to leave {focus} unwatched, and take it up while they are gone.",
  ],
  quiet: [
    "[ptw] Watch {focus} from a distance until it shows its habits.",
    "[ptw] Wait near {focus} and let the day teach you its rhythm.",
    "[ptw] Sit with {focus} at dusk, and say nothing.",
    "[p] Walk the edge of {focus} at the pace of a mourner.",
  ],
  truth: [
    "[pw] Walk up to {focus} and say plainly why you have come.",
    "[p] Tell the people at {focus} who you are and what you want.",
    "[pw] Lay your errand before {focus} and wait to be refused.",
    "[t] Ask to read {focus} openly, and say plainly why you want to.",
    "[w] Ask {focus} for an honest hearing.",
  ],
};

/** The hidden route: three scenes, then the return. Titles only; the paragraphs belong to each road. */
export const HIDDEN_TITLE2 = ["A Way Behind the Wall", "What Was Kept Dry", "The Last Line"] as const;

/** The first paragraph of a return scene. The road’s own closing paragraph follows it. Four variants. */
export const RETURN_OPEN2: string[] = [
  "{Place} lets you go without ceremony, and {omen} clings to your sleeves all the way to the edge of the district.",
  "You stop at the last turning and look back. {Place} looks smaller, as places do once you know what they keep.",
  "At the crossroads you sit on a stone and sort what you learned into what you can prove and what you only believe.",
  "{Omen} is already fading from your clothes, though the memory of it will last longer.",
];

export const RETURN_FOUND_SECRET2 = "Now you know: {secret}.";
export const RETURN_USED_QI2 = "Your breath ran deeper at the crisis than a traveller’s should. {Kname} noticed, and said nothing.";
export const RETURN_REACHED = "You reached past yourself at {place}, and it held. {Kname} counted your breaths afterward and did not like the number.";
export const RETURN_PULLED_RANK = "You let your standing speak at {place}, and it worked. {Kname} will remember who you are, not what you did.";
export const RETURN_HUMBLED = "You told {kname} you were not equal to {place}. It was true, and the bravest thing you said there.";

export const RETURN_CRISIS2: Record<ChoiceTone, string> = {
  truth: "You spoke plainly at the crisis, and {kname} has already repeated your words, a little improved.",
  mercy: "What you gave at the crisis was small, and {kname} will remember it exactly as long as it takes to repay.",
  inquiry: "Your question at the crisis is still going round {place}. Nobody has found an answer they like.",
  deceit: "The story you told at the crisis holds for now. In {place}, a lie that holds is a debt.",
  force: "How you broke the quiet at the crisis will be remembered in {place} long after your name is forgotten.",
  quiet: "You said little at the crisis, and {place} has decided your silence meant something.",
};

export const RETURN_APPROACH2: Record<ChoiceTone, string[]> = {
  inquiry: ["[ptw] You went at {place} through {focus}, asking and copying, and your notes are heavier for it."],
  mercy: ["[ptw] You came by way of {focus} with open hands, and {place} has not yet decided what to make of that."],
  force: [
    "[p] You pushed in at {focus}. The door you broke there will be mended slowly, and talked about longer.",
    "[tw] You forced {focus} open. What you broke there will be mended slowly, and talked about longer.",
  ],
  deceit: [
    "[p] You slipped in at {focus} under a borrowed errand, and a clerk in {place} still wonders who you were.",
    "[tw] You took up {focus} under a borrowed errand, and a clerk in {place} still wonders who you were.",
  ],
  quiet: ["[ptw] You watched {focus} until it showed its habits, and you leave knowing them better than its keepers."],
  truth: [
    "[pw] You walked up to {focus} and said why you had come. It is rarer in {place} than you would think.",
    "[t] You asked to read {focus} openly and said why you wanted to. It is rarer in {place} than you would think.",
  ],
};

export const WAYSIDE_AFTER2 = {
  reported: "Elder Su sent word to {place}, and {kname} says it was not unkind.",
  silent: "Elder Su has heard nothing of {place}, and {kname} is grateful.",
};

export const RETURN_CHOICES2 = {
  report: "Tell Elder Su what you saw at {place}, and what you carry.",
  silent: "Say nothing of {place} and go back to the road.",
  rest: "Rest a little and let {omen} fade from your thoughts before going on.",
  keep: "Keep {relic} and study it on the road.",
};

/** The Elder’s report lines, by tier. Three variants per tier. She is in the cart, not on the mountain. */
export const REPORT_LINES2: Record<"hostile" | "wary" | "neutral" | "warm" | "devoted", string[]> = {
  hostile: [
    "You report on {place} as though the Law were a tavern. I hear the words and none of the substance. Next time bring me something I can use.",
    "{Place}. A report from someone I do not trust, about a place I cannot check. I will file it where I file everything you tell me.",
    "I listened to your account of {place} because I must. Do not mistake that for belief.",
  ],
  wary: [
    "I will hear this, though I am watching how you tell it. {Place} has more stories than stones, and I want only the ones that are yours.",
    "You say {kname} told you things at {place}. I will weigh that against what I know of {kname}, and against what I know of you.",
    "Interesting that you came to me with news of {place}. I would have forgiven you for staying silent, and I would not have trusted you either way.",
  ],
  neutral: [
    "A report on {place}. Good. We are a long way from anywhere the Law is read aloud, and it helps to hear what the road is saying.",
    "I have heard of {place}, though never from someone who had stood in it. Your account is useful, even where it is incomplete.",
    "So {place} keeps {relic} and speaks of it in lowered voices. That is worth knowing. Tell the rest to Hao Lan and have it written down.",
  ],
  warm: [
    "You walked all the way out to {place} and came back to tell me. I am grateful, and I want you to hear that said plainly.",
    "Thank you for telling me about {place}, and for telling it well. {Kname} has been waiting for someone to come and ask. You did.",
    "I cannot go to every place myself. You have been my eyes at {place}, and I am the better judge for it.",
  ],
  devoted: [
    "I trust what you saw at {place}, and I trust how you saw it. Few would have walked that road, and fewer would have come back to tell me. Sit. Tell me all of it.",
    "{Place}, {relic}, {kname}. You have given me three names to remember and a reason to remember them. I will not forget who gave them to me.",
    "When I wished for someone to look at {place}, I did not expect the right person to arrive, tired and honest, at my fire. Tell me everything. I mean to keep it.",
  ],
};

export const REPORT_MEMORY2 = {
  secret: "You say {secret}. If that is true, it is worse than the rumour and better than the silence. Bring me proof when you can, and until then tell no one else.",
  relic: "You kept {relic}. I can see the shape of it through your sleeve. I will not ask you to give it up, but remember that it was not yours to begin with.",
  deceit: "You tell me about {place} in the voice of someone who has told several stories lately. I will accept the account, and I will keep the stories in mind.",
  rank: "You say {kname} yielded to your name. Be careful with that coin, Wanderer. A name that opens a door can also be the reason it was never knocked on.",
  humble: "You told {kname} you were not equal to {place}, and asked what was possible. That is the most honest sentence in your whole report, and I will not forget it.",
  over: "You went to {place} far above what it asked of you, and you ask me whether that was fair. It was not. It was also what it was. Be glad you can say so.",
  under: "You went to {place} far below what it asked of you, and you came back with both hands. I would call it luck, but I have watched you long enough to doubt the word.",
};
