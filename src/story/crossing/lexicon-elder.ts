import type { Tier } from "@/engine/types";
import type { Gender } from "@/engine/hero";
import type { RootKind } from "./lexicon-root";
import type { SkillKind } from "./lexicon-skill";

/**
 * What Elder Su says at once when the hero takes one of a Crossing Road’s three doors: the gender door, the root door or the craft door. Each door has
 * five lines by her trust, four variants of each so that forty roads do not say the same thing, and a memory for what the hero did behind it.
 * Every line names the place, so no two roads share one word for word. Slots: place, kname, element, dao.
 */
export type Fork = "gender" | "root" | "skill";

export const FORK_TIER: Record<Fork, Record<Tier, string[]>> = {
  gender: {
    hostile: [
      "You went to the benches at {place} and sat where you were put, or where you put yourself. I hear what you did there. I do not hear why.",
      "At {place} you were sorted by what you are, and you were seen. If you meant it as a lesson in me, I did not learn it.",
      "The custom at {place} met you at the door. What you did with it is already round the mountain. I would have liked to hear it from you.",
      "You chose a bench at {place}. Everything I know of you says the choice was not an accident, and I do not like that I cannot tell whose.",
    ],
    wary: [
      "You went to {place} and the benches were waiting. A person is read by where they sit. I will say only that I have noted where you did.",
      "I hear the custom at {place} had something to say to you. I should like to know whether you listened, or only waited for it to finish.",
      "At {place} they sorted you, and you let them, or you did not. Either is an answer, and I mean to find out which it was.",
      "The benches at {place} have taught a great many people what they are. I hope you found it a smaller lesson than most.",
    ],
    neutral: [
      "I hear you saw the custom at {place}. Every trade keeps one, and none of them is as old as it says. Tell me what it asked of you.",
      "At {place} you met the bench the trade keeps for people like you. I have sat on a few of those. They are less comfortable than they look.",
      "You went to {place}, and the old rule there looked you up and down. It does that to everyone, and says very little. What did it say to you?",
      "The custom at {place} is a thing people carry like a stone in a shoe. I am curious which foot it was in, in your case.",
    ],
    warm: [
      "You went to {place} and let the old custom look at you. It takes a certain courage to be looked at. I think the bench at {place} is the better for it.",
      "I hear what the benches at {place} said to you, and what you said to them. You do not make it easy to keep my distance, and I begin to suspect you know it.",
      "At {place} the custom met someone who was not afraid of it. I have been waiting a long time to hear that said of anyone, and I am glad it was you.",
      "You sat where you sat at {place}, and I think you sat there knowing why. That is rarer than the bench, and a good deal more useful.",
    ],
    devoted: [
      "You went to {place} and met the custom as it stands, and did not look away. I wish I had been there. I would have taken the bench beside you and said nothing.",
      "At {place} the old rule had its say, and so did you. I have been sorted all my life, and it is a particular joy to know someone who is not afraid of the sorting.",
      "I hear what you did at {place}. I am not surprised, and I find that I am proud, which I had not planned on being and cannot now take back.",
      "You took the custom at {place} in both hands, and weighed it, and put it down where you chose. If I had your nerve at your age, I would have a different mountain.",
    ],
  },
  root: {
    hostile: [
      "You took your roots to {place} and showed them to a stranger. A root is not a thing to be shown. I am not sure what you learned, and less sure what they did.",
      "At {place} your roots met the {element} and said what they said. I hear it, and I do not like how much of you is now known to someone else.",
      "You laid your hand on the {element} at {place}. I would sooner you had asked me first what it costs to be read by something that cannot lie.",
      "Your roots answered, or they did not, at {place}. A great deal can be hidden in the difference, and you have given it away freely.",
    ],
    wary: [
      "You put your roots to the {element} at {place}. I hear what happened. I will wait to see whether it is the root that changed, or only what you tell yourself.",
      "At {place} the {element} had its say about what you are. Be careful of anything that flatters or condemns you so easily. It may be right, and it is still only one voice.",
      "You tried the {element} at {place}. A cultivator is entitled to know what the roots can do. I would like to know that you also know what they cannot.",
      "The {element} at {place} has told many people what they are. A fair number of them believed it too readily. I hope you were not one.",
    ],
    neutral: [
      "I hear you stood with your roots against the {element} at {place}. Every cultivator should, once, and learn what the hand knows that the mind does not.",
      "At {place} the {element} answered you or did not. Either way you know more of yourself than you did, and that is the only profit I have ever made from a root.",
      "You went to {place} to meet the {element}. It is an old courtesy, and the {element} has been polite about it for a thousand years. What did it tell you?",
      "The {element} at {place} is a fair teacher, if slightly blunt. I hear it was blunt with you. It usually improves with acquaintance.",
    ],
    warm: [
      "You went to the {element} at {place} and let your roots speak plainly. It is rare to hear them without a gloss, and I find I enjoy it more than I expected.",
      "At {place} your roots met the {element}, and I think they were glad of it. A root that is glad has more to give than one that is merely obedient.",
      "I hear what the {element} said to you at {place}, and what your roots said back. You have a better ear for yourself than most I have taught.",
      "You gave the {element} at {place} a fair hearing, and it gave you one in return. I think it will be a long acquaintance, and I am glad for both of you.",
    ],
    devoted: [
      "You went to the {element} at {place} with your roots open, and did not hide what you are from it. I have known very few who could do that. I count you among them, and gladly.",
      "At {place} your roots and the {element} knew one another. I wish I had seen it. I would have asked you to tell me what it sounded like, and then to say it again.",
      "I hear what happened at {place}. I find I am not at all surprised, and quite unexpectedly moved, which I was not prepared for this morning.",
      "You gave your roots to the {element} at {place}, and trusted what came back. I do not think the mountain has been so lucky in a cultivator in a very long while.",
    ],
  },
  skill: {
    hostile: [
      "You took your craft to {place} and let a stranger read it. A craft is the one thing the sect cannot take from you, and you have offered it up to be handled.",
      "At {place} you showed your hands to the {dao}. I hear what was said of them. I would have preferred to say it myself, and in private.",
      "You went to {place} and the craft there took your measure. I am not certain whose measure it was, and I do not like the not knowing.",
      "The {dao} at {place} had a look at what you can do. If it was kind, I distrust the kindness. If it was not, I distrust you for going.",
    ],
    wary: [
      "You went to {place} and put your craft before the {dao}. A man learns a great deal that way, and some of it is what he did not wish to know.",
      "At {place} the {dao} has a rule for everyone who comes. I hope you found yours without having to be told it, and that it was not the one I fear.",
      "You have been to {place} and shown your hands. I should like to hear what they were shown in return, and whether you took it for a lesson or a bribe.",
      "The {dao} at {place} teaches by what it withholds. I hear it withheld something from you. Do not take that as an insult. It is the compliment of the trade.",
    ],
    neutral: [
      "I hear you worked with the {dao} at {place}. It is a good craft, and the keeper there is a better one. I should like to hear what you carried away.",
      "At {place} your hands met the {dao}. Every craft is a way of paying attention, and each pays in a different coin. What did they pay you?",
      "You went to {place} and learned something of the {dao}. It is never wasted. The trick is to know afterward what it was, and not to confuse it with what you hoped.",
      "The {dao} at {place} has taught many cultivators something of patience. I hope it was patient with you. It is not always.",
    ],
    warm: [
      "You went to {place} and gave your hands to the {dao} without asking what you would get. That is the only honest way to learn a craft. I am glad of you.",
      "At {place} the {dao} showed you more than it shows most. I think that is because you asked it nothing, and it appreciated being unasked.",
      "I hear what you did at {place}. Few cultivators bother to study anyone else’s craft. You bother, and it shows in how you listen.",
      "You gave the {dao} at {place} a fair hour, and it gave you one back. A craft is a conversation. I am glad you can still be spoken to.",
    ],
    devoted: [
      "You went to {place} and gave your craft to the {dao} to read, and took what it gave back. I wish I had your patience, and I wish I had had it sooner.",
      "At {place} the {dao} had its say about your hands. I hear it was long, and kind, and exact. I have spent a lifetime hoping someone would say as much of mine.",
      "You studied the {dao} at {place} as if it were a person, and it answered as one. I do not think I have ever heard of that done so well.",
      "I hear what you did at {place}, and I am moved, and I will deny it. You carry your craft like a lamp, and the {dao} at {place} was glad of the light.",
    ],
  },
};

/** What she remembers, by what the hero did behind the gender door. The pick’s tone is the decision just made, so it is read with `within: 1`. */
export const GENDER_MEMORY: Record<Gender, Record<string, string[]>> = {
  woman: {
    mercy: [
      "You sat on the sisters’ bench at {place}. That bench has held women I would have trusted with the mountain. I hope it gave you what it gave them.",
      "The women of {place} made room for you, and you took it. I know how rare that is, and how much it costs to give.",
    ],
    force: [
      "You walked through the door at {place} that the custom bars to women. I have done it once, and it took me a year to learn what it had cost. I hope you were quicker.",
      "You went where the rule at {place} said you could not. I will not say I approve. I will say that I have never been sorry to hear it.",
    ],
    inquiry: [
      "You asked what the custom at {place} was for, before it was a custom. It is the right question, and almost nobody puts it. I should like the answer.",
      "At {place} you asked where the rule had come from instead of obeying it or breaking it. That is the cleverer course, and the lonelier.",
    ],
    quiet: [
      "You said nothing at {place} and did the work. There is a particular strength in that, and a particular price, and I have paid it. I know what it is.",
      "You kept your own counsel at {place}. A woman who does so is not always believed to have any. I hope you were believed by the right people.",
    ],
  },
  man: {
    truth: [
      "You took the men’s oath at {place}. An oath binds the one who takes it more than the one who asks. I hope you read it first.",
      "You sat on the long bench at {place} and heard what you owe. A man who knows his debts is a rarer thing than a man who pays them.",
    ],
    force: [
      "You answered the yard’s challenge at {place} before it was fully made. It is how the brothers measure a man, and it is the poorest of their measures.",
      "You met the oldest of the men at {place} in the yard. I hear no one was hurt. I hear also that the yard was disappointed, and that it is better for it.",
    ],
    mercy: [
      "You declined to prove anything at {place}. It takes more nerve to refuse a test than to pass it. I hope the men there remember that.",
      "At {place} you put down the challenge and offered to help. It will cost you, in a place that keeps count. It may also be the best thing you did there.",
    ],
    inquiry: [
      "You asked what the rule at {place} was for. The men there had not been asked in a generation, and I hear they argued about it for an hour.",
      "At {place} you asked who made the rule of the yard and what they feared. Men do not ask that of themselves. It was well done.",
    ],
  },
  unspoken: {
    truth: [
      "You took the middle seat at {place} and told them what you chose to tell. I have sat in a few middle seats. They are lonelier than the benches, and clearer.",
      "You sat between the benches at {place} and answered what you were asked. It takes nerve to be asked a thing the room has no word for, and to answer it.",
    ],
    deceit: [
      "You moved between the benches at {place} as the talk required. It is an old trick, and a kind one, and I will not scold you for it. I only ask you to remember which bench you actually favour.",
      "You sat on each bench at {place} in turn and said nothing of why. A person with no place has the run of all of them, and the price of every one.",
    ],
    inquiry: [
      "You asked where those who will not say are seated at {place}. The answer, I think, was that nobody had ever asked. It is a good question to leave with a room.",
      "At {place} you asked what the custom made of people like you, and listened. I hope what it said was true. It is not always.",
    ],
    force: [
      "You refused both benches at {place}, aloud. I hear the room went very quiet. Quiet is the sound a room makes when it has been told a thing it did not wish to hear, and had better have.",
      "You declined to be sorted at {place}. It will be remembered there for a good while, as a boast or a lesson, depending on who tells it.",
    ],
  },
};

/** What she remembers, by what kind of root the hero brought to the element. */
export const ROOT_MEMORY: Record<RootKind, string[]> = {
  kin: [
    "A kindred root at {place}. It is the rarest kind of meeting there is, and the quietest. I hope you let it be quiet.",
    "Your own root met its own element at {place}. There is nothing so rare on this mountain as a thing arriving where it belongs.",
  ],
  partial: [
    "Half a root at {place}, and you took it for what it was: a beginning. I have known cultivators go their whole lives on less.",
    "Your roots answered the {element} at {place} only in part. A half-answer, taken seriously, outlasts a whole one that is taken for granted.",
  ],
  far: [
    "Your roots have no word for the {element}, and you went to {place} anyway. That is not stubbornness. It is what stubbornness looks like when it is put to use.",
    "A deaf root, and you stood at {place} and listened. I have known the best of the sect do less.",
  ],
};

/** What she remembers, by what kind of craft the hero brought to the keeper’s. */
export const SKILL_MEMORY: Record<Exclude<SkillKind, "open">, string[]> = {
  own: [
    "The same Dao as the keeper at {place}. It is a rare thing to be let into the inner work. I hope you were worth the trust.",
    "You walked the keeper’s own Dao at {place}. A colleague is the only one who can really read a craft, and the only one who can really judge it.",
  ],
  other: [
    "A different Dao from the keeper’s at {place}, and you set the two side by side. That is the beginning of every real art, and the end of every dull one.",
    "You brought your own craft to the keeper’s at {place}. It is easy to stay in the safe country of one’s own art. You did not.",
  ],
};

/** What she says at the report, ahead of the rest, for each door the hero went through on the road. Three variants, one per fork. */
export const FORK_REPORT: Record<Fork, string[]> = {
  gender: [
    "And the custom at {place}: you met it, and I hear it met you. I will not ask what was said. I will ask only whether you would say it again.",
    "I hear the old rule at {place} had a word for you. Whatever you answered, I hope it was your own.",
    "You went through the door at {place} that was held for people like you. I hope it was held open, and not merely ajar.",
  ],
  root: [
    "And your roots at {place}: I hear they spoke. Whatever they said, remember that a root is a beginning and not a verdict.",
    "The {element} at {place} knew what it was looking at, I think. I hope you knew too.",
    "You put your roots to the {element} at {place}. I will not ask what they said. I will ask that you remember it.",
  ],
  skill: [
    "And your craft at {place}: I hear the keeper looked at it long. A craft that has been looked at long is a craft that has been taken seriously.",
    "The {dao} at {place} read your hands. I hope you did not mind. It reads everyone’s, and it is almost never wrong.",
    "You showed your craft at {place}, and it was shown another in return. That is the only trade worth the name.",
  ],
};
