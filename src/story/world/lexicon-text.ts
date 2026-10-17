import type { Method, Part } from "@/engine/world";
import type { ByTone } from "./lexicon";

/** The price of a part: what it costs a hero to have been there. */
export const PRICE_OPEN: Record<Part, string[]> = {
  look: [
    "Looking on costs little, and it costs it all the same: a night’s sleep, a meal you did not eat, the particular tiredness of having seen a thing and done nothing with your hands.",
    "A witness pays in the plainest coin. {People} will remember who stood and watched, and some of them will think the better of you for it, and some the worse.",
    "It is not nothing, to have seen. What you saw at {place} will come to you at odd hours, and you will have to decide what to do with it, each time.",
  ],
  hand: [
    "A hand costs what the hand has in it. Something goes out of you into {place}, in coin or breath or hours, and does not come back, and you notice only when you reach for it.",
    "Helping has a price that is quiet and certain. You are lighter than you were, and {people} are a little less hungry, and the two facts are the same fact.",
    "The cost of a hand is small, and exact, and has your name on it. {Foe} will not be the only one who notices what you spent.",
  ],
  side: [
    "A side is paid for twice: once in what you spend, and once in the friends you lose on the other. {People} will stand behind you, and {foe} will remember you, and both facts weigh.",
    "Taking a side costs something that is hard to put a price on: the ease of being no one’s. You are someone’s now, at {place}, and will be asked to be so again.",
    "The side you took will want paying for. It will want your coin, and your qi, and your name, in some order, and it will not say which first.",
  ],
  hinge: [
    "A thing that turns on you costs you in proportion. What you put into {place} is heavy, and what comes back is heavier, and you will be a long time finding the sum.",
    "The hinge pays most. The strain of it goes through you, and through the ones who trusted you, and will be felt long after {stake} is forgotten.",
    "When the matter turns, it turns on your back. You feel the weight go onto you all at once, and stay, and you know it will not entirely leave.",
  ],
};

/** The four ways of paying. Stones need to be had; qi and name are paid in kind; a corner cut is paid by someone else. */
export const PRICE_LABELS: ByTone = {
  mercy: ["Pay it in spirit stones, and be done.", "Count it out in stones, and let it be a debt closed.", "Pay what it costs in coin, and keep your conscience clear."],
  quiet: ["Pay it in qi, and rest afterwards.", "Pay it out of your own strength, and bear the weariness.", "Spend your breath on it, and let the body mend."],
  truth: ["Put your name to it, and let it be known what you did.", "Say openly that it was you, and take what that brings.", "Sign it, and let them know whose hand it was."],
  deceit: ["Cut a corner, and let someone else pay the difference.", "Pass the cost on, where it will not be looked for.", "Pay in a currency nobody will check, and hope it clears."],
  force: ["Take it out of someone who can afford it less.", "Make {foe} cover it, one way or another.", "Pay it with the favour of someone who owes you."],
  inquiry: ["Ask what the others paid, and match it exactly.", "Weigh up what it cost, and pay precisely that.", "Find out who else bore it, and share the weight."],
};

/** What the hero did, in one sentence, by part. Read at the end, whatever the course. */
export const PART_AFTER: Record<Part, string[]> = {
  look: [
    "You were there, at {place}, and you saw it, and that is what you did.",
    "You looked on at {place} from the edge of it, and what you saw is yours now.",
    "You watched it happen, and it went as it went, and you were counted among those who knew.",
  ],
  hand: [
    "You put a hand to it, and the hand is remembered, whatever else is.",
    "You helped where you could reach, at {place}, and it was enough for those you reached.",
    "You lent what you had, and what you had went where it was needed.",
  ],
  side: [
    "You took a side, in the open, and the side is yours and so is what it did.",
    "You stood with them at {place}, and they will tell it as a thing that happened to them, with you in it.",
    "You chose, and the choosing was seen, and will be remembered by all parties.",
  ],
  hinge: [
    "It turned on you. You were the place it gave, and the whole of {place} knows it.",
    "You were the hinge. What happened at {place} happened because you did what you did, and nobody who was there will say otherwise.",
    "You turned it, and the turning was yours alone, with everything that follows.",
  ],
};

/** How it was gone about, in a line. Read after the course. */
export const HOW_AFTER: Record<Method, string[]> = {
  turned: ["You had found where it gave, and used it, and it gave.", "You knew {lever}, and it was the right thing to know."],
  forced: ["You went at it with strength, and strength did what strength does.", "You forced it, and some of it broke, as forced things do."],
  bargained: ["You bargained, and the bargain holds as bargains hold, until somebody reads it.", "You made a deal, and it served, in the way that deals serve."],
  gave: ["You gave way, and the world did what it does when no one stops it.", "You drew back, and it went on without you."],
};

export const S4_LABELS: ByTone = {
  truth: ["Say plainly to {people} what you did and why.", "Tell {ally} the truth of it, the part you are not proud of too.", "Own what you did, aloud, to anyone who asks."],
  mercy: ["Stay a while with {people}, and help with what is left.", "Do what you can for those it hurt, before you go.", "Sit with {ally}, and let them say what they need to."],
  quiet: ["Leave without a word, and let it settle.", "Take a long breath, and go.", "Sit a while at the edge of it, and say nothing."],
  inquiry: ["Ask {ally} what they will do now.", "Look at what is left, and learn what it was made of.", "Ask {people} what they would change, if they could."],
  force: ["Take your due of it, and go.", "Leave {foe} with the last word, and walk off.", "Close the matter by your own authority, and go."],
  deceit: ["Let it be told as a different story.", "Leave them thinking it went another way.", "Take the credit for something you did not do."],
};

export const AFTER_OPEN = [
  "The matter at {place} is done, in one way or another. The noise has gone out of it, and what is left is the quiet that follows.",
  "It is over, or as over as such things get. {People} are going back to what they were doing, and you stand a little apart, and watch them go.",
  "Afterwards, the place is smaller than it was. That is what happens when a thing is decided: it shrinks to the size of what is left.",
  "{Ally} finds you where you are sitting, and stands near you for a time without speaking. There is nothing in the matter now that needs saying.",
  "The light has changed, as it does when something ends. {Place} looks very much as it did, and also not at all.",
  "You have time, now, to think about what it was. It was not what you thought. It rarely is.",
];

export const AFTER_LABELS: ByTone = {
  mercy: ["Take what {people} press on you, and thank them.", "Accept what is offered, because to refuse would shame them.", "Let {ally} give you something, and keep it."],
  quiet: ["Decline it, gently, and go on.", "Say you have all you need, and mean it.", "Leave the thanks where it was found."],
  inquiry: ["Ask what they will do now, and listen.", "Ask {ally} what comes next for {place}.", "Ask what they would change, if they could do it again."],
  truth: ["Say what you think they should do, as a friend.", "Tell {ally} what you saw that they did not.", "Give your honest opinion of how it ought to go on."],
  force: ["Tell them it was nothing, and mean it.", "Take your leave with a clap on the shoulder.", "Say they owe you nothing, loudly enough for all to hear."],
  deceit: ["Let them thank you for something else.", "Take the gift, and let it be thought you earned it.", "Say it was nothing, in a way that makes it more."],
};

export const WORD_OPEN = [
  "News of {place} goes out along the road ahead of you. It goes by carters and pedlars, and at each telling it grows or shrinks, according to the teller.",
  "By evening it is known in the next village. By the week’s end it will be known in the next district, in a form that you would hardly recognise, and that will not be the final form.",
  "The word goes out as water goes out of a basin, without anyone pulling the plug. {People} tell it, and the ones who hear tell it, and nobody tells it quite the same.",
  "A pedlar takes it up the road before you have finished saying it, and sets it down at every inn. It comes out different at each, like bread baked in different ovens.",
  "What happened at {place} is a story now, and a story goes where it likes. It will be at the Concord’s tea-tables before it is cold, in someone else’s mouth.",
  "It will be told. That is what happens to such things. The only choice you have is how much of it you tell first.",
];

export const WORD_PART: Record<Part, string[]> = {
  look: ["You are mentioned, if at all, as the one who watched.", "Your name is not in it. Your eyes are."],
  hand: ["Your name is in it, as the one who helped, and it is a small name, and kindly said.", "You are mentioned in the second half, as the one who carried."],
  side: ["Your name is in the first third of it, linked to a side, and the other side’s tellers give it a different tone.", "You are named, as the one who stood with them, and as the one who stood against."],
  hinge: ["Your name is the first thing said of it, and the last, and the telling is yours before you have opened your mouth.", "It is called by your name in three places already, and in one of them wrongly."],
};

export const WORD_LABELS: ByTone = {
  truth: ["Tell it straight, to the first person who asks.", "Send word to {ally}, in plain words, of how it ended."],
  deceit: ["Shade it, a little, in your own favour.", "Let the telling run ahead and add to it."],
  quiet: ["Say nothing, and let the story travel as it will.", "Leave it to the carters."],
  mercy: ["Send word to {ally} that it is done, and that they are not alone.", "Tell it kindly, and leave the worst of it out."],
  inquiry: ["Listen to how it is told, and note what it leaves out.", "Ask the pedlar what he has heard."],
  force: ["Make sure your side of it is told first.", "Correct the first teller, firmly."],
};

export const LEDGER_OPEN = [
  "Every such matter ends in a ledger. The sect keeps one, the Concord another, and the village a third, in the oldest hand. The three do not agree, and you are invited to write in whichever you prefer.",
  "It will be written down. Someone is already holding a brush. What goes on the page may be true, or kind, or useful, and it will be hard to unwrite.",
  "At the end of any matter there is a page with your name on it. What it says is, to some degree, up to you, and to a greater degree up to the clerk.",
  "The ledger is open at the table. Nobody has asked you to write in it. Nobody needs to. It will be written, with you or without you.",
  "A clerk holds out the pen. There is no ceremony to it. It is the most solemn thing that happens at {place}, and no one remarks on it.",
  "The record is what survives. The people forget; the roads forget; the ledger does not. What you write now will be read in a hundred years by someone who has never heard of {place}.",
];

export const LEDGER_LABELS: ByTone = {
  truth: ["Write the true account, in full, with your name under it.", "Set it down exactly as it was, the unflattering parts too.", "Write it plain, and sign it."],
  mercy: ["Write it kindly, and leave out the worst.", "Write it so that {people} can bear to read it.", "Write what is true and also gentle."],
  deceit: ["Write what suits the powers that read it.", "Write it as the sect would like it written.", "Write it as it would have gone, had it gone well."],
  quiet: ["Leave the page blank, and put down the pen.", "Write nothing; let the clerk do as he will.", "Close the ledger, gently."],
  inquiry: ["Read what the others wrote, before you write.", "Ask the clerk what is already on the page."],
  force: ["Strike out what is false, and write the right in its place.", "Take the pen from the clerk, and write it yourself."],
};

export const RETURN_OPEN = [
  "You leave {place} on the road you came by. It is a little quieter than when you arrived, and a little warmer, and you cannot tell whether that is the weather.",
  "The way back is the same road, and looks different. You pass the same stones, and they have a different set to them, as stones do when something has been decided near them.",
  "On the road back, nobody speaks to you, and you are glad of it. A thing has been done, and you are still working out what.",
  "You go back as you came, on foot, with a lighter step or a heavier one, according to how the matter went. The road does not care which.",
  "The road home from {place} winds the way roads wind, and the going is slow. By the second bend you have stopped looking back.",
  "As you walk, you find you are working it over: what you did, what you might have done, what you are going to say about it. The road is long enough for all three.",
];

export const RETURN_LABELS: Record<"report" | "silent" | "rest" | "give", string[]> = {
  report: ["Go to the Law Hall and tell the Elder what happened at {place}.", "Report it to Elder Su, as it was.", "Tell the Elder, plainly, and let her make of it what she will."],
  silent: ["Keep it to yourself; the Elder has enough to read.", "Say nothing of {place} to anyone at the sect.", "Let it go unreported, and see if it comes back."],
  rest: ["Rest, and let the road settle in your bones.", "Sit down by the roadside, and let the day end.", "Go to your bed, and sleep on it."],
  give: ["Send {ally} a few stones, from the road, with a word.", "Leave a little of what you have with {ally}, and go.", "Pay back some of what {people} gave you."],
};

export const RETURN_PART: Record<Part, string> = {
  look: "Nobody at the sect knows you were there. It is a small, steady kind of knowing, to be the only one.",
  hand: "The hand you put to it will not be asked after. The people it helped will remember, and that is a good ledger.",
  side: "You took a side, and a side is a thing that sticks. Word of it will come up the mountain, whether or not you carry it.",
  hinge: "It turned on you, and a turning does not stay in one place. Word of it will reach the sect before you do.",
};

export const RETURN_COURSE: Record<"mended" | "ground" | "broke", string> = {
  mended: "The world is a little better than it was, in one corner, and you know the corner by name.",
  ground: "Nothing is better and nothing is worse. A muddle has been kept from becoming a ruin, and that is not nothing.",
  broke: "It broke, and the breaking is on the road behind you. You will carry it, whether or not it was yours.",
};

/** What the Elder says when a hero reports. Five tiers, and the most particular of the memories wins. */
export const REPORT_LINES: Record<"hostile" | "wary" | "neutral" | "warm" | "devoted", string[]> = {
  hostile: [
    "You have been at {place}, and you tell me this as if I had asked. I did not. I am noting, in my second ledger, that you came to report and did not trouble to be useful.",
    "{Place}. I have a file on it that is an inch thick, and not one word of it is yours. Take your account to someone who is fond of you.",
    "Very well. {Place}. I will write it down, in the column I keep for things you have told me that I did not want to know.",
  ],
  wary: [
    "So you were at {place}. I listen, because it is my task, and I weigh, because it is my habit. Tell me the rest, and tell me what you left out.",
    "{Place}, and {foe}. I had heard something of it, and not in your voice. I am wondering which of the two accounts is the better one.",
    "I see. {Place}. You will forgive me if I check it against what I know. I have been told many things in this room by people who were not lying.",
  ],
  neutral: [
    "{Place}. I had not thought of it, which is a failing in an Elder, and I will correct it. Tell me how it lies, and I will see whether the Hall can do anything.",
    "I hear you. {Foe} is not a name I know, and I should. Write it down for me, and I will add it to what I keep.",
    "Thank you. I do not often hear of {place}. When I do, it is in a report, and the reports never say what you have said.",
  ],
  warm: [
    "You went to {place}, and you came back and told me, which is the part I cannot teach. Sit. Tell it from the beginning, and do not leave out {foe}.",
    "{Place}. I wondered where you had got to. I am glad it was somewhere that mattered. Sit down, and take your time, and I will not interrupt more than I must.",
    "I have been waiting to be told something like this by someone who was there. It is a rare thing. Go on.",
  ],
  devoted: [
    "You went to {place} without being asked, and came home, and told me. I have a ledger for what I feel when I sign, and I am going to open it, and I would like you to be here when I do.",
    "{Place}. Of course you did. I think, now, that I would have been disappointed if you had not. Sit, and tell me everything, and I will pour us both something warm.",
    "That is the whole world you have just described to me, in one sitting, and I did not know it was there. I am afraid I have been asleep for twelve years. Thank you for waking me.",
  ],
};

/** The Elder’s memory of what the hero did, by part and course. */
export const REPORT_MEMORY: Record<Part, Record<"mended" | "ground" | "broke", string>> = {
  look: {
    mended: "You only watched, and it mended anyway. That is a kind of luck, and I would not mention it to the others; they will want to try it.",
    ground: "You looked on, and it ground on, as such things do. Do not think I am reproaching you. A witness is a thing the world lacks.",
    broke: "You watched it break. I know that look on your face; I wore it for fifteen years. Watching is not a sin, but it is not an alibi either.",
  },
  hand: {
    mended: "A hand, and it mended. That is a good kind of arithmetic, and I should like to write it in the first ledger, where I keep the entries I am proud of.",
    ground: "A hand, and a muddle. I think it is a better muddle for your having been in it. The world is mostly muddles, and the work is making them better ones.",
    broke: "You put your hand to it, and it broke anyway. That is not your fault, and you will think it is. I am telling you in advance, so that you have it in writing.",
  },
  side: {
    mended: "You took a side, and the side was right, and it mended. I have rarely seen both at once. I am not going to tell the others that it can be done.",
    ground: "You took a side, and the side mostly won. That is the best that can be said of sides. I should like you to remember it when you are tempted to take another.",
    broke: "You chose, and it broke. You will be told the other side was wrong. They were, and you will find it no consolation, and you are right not to.",
  },
  hinge: {
    mended: "It turned on you, and it turned well. I have been Elder of this Hall for twelve years, and I have watched one thing turn on one person in all of them. I am not going to say it was me.",
    ground: "It turned on you, and the turn was a small one. A hinge is the loudest part of the door and the least of the house. You did the thing. It is enough.",
    broke: "It turned on you, and it broke. I will not tell you that it was not your doing. I will tell you that the hinge is also the thing that holds the door when the door is hit, and that you held.",
  },
};

export const REPORT_RECORD = "You wrote the true account of it. I have a copy of the ledger you wrote in, now, in my own keeping. I am told it is the only one that does not flatter the sect.";
export const REPORT_METHOD: Record<Method, string> = {
  turned: "You found where it gave, and used it. That is the whole of the art, and I have only ever seen it done by people who listened first.",
  forced: "You forced it. I am not scolding. Force is sometimes the only argument that is not heard to the end by someone else, and there are days when that is the point.",
  bargained: "You bargained. I know what a bargain is. I have signed several, with the same hand that signs sentences, and the hand does not know the difference.",
  gave: "You gave way. There is a courage in that, which no one tells the young. It is the courage of the one who will have to live with what follows.",
};

/** At the turn: what the hero knows of where it gives. */
export const LEVER_KNOWN = [
  "You know where it gives: {lever}. You have only to decide whether to use it.",
  "You have found the place. {Lever}. It is not much to look at, and it is all there is.",
  "It gives at {lever}, and you know it, and so, you think, does {foe}.",
];
export const LEVER_UNKNOWN = [
  "You have not found where it gives. {Ally} could have told you, had you asked the right thing in the right hour.",
  "You do not know where it gives, and the not knowing is a weight you can feel in the hand.",
  "Somewhere there is a place where it would give. You have not found it, and the hour is here.",
];

/** The tail of the Elder’s memory: she repeats what the world did next. */
export const REPORT_TAIL = [
  "I have written down what became of it: {after}",
  "For the record, then. {After}",
  "What I am told is this. {After}",
  "I add what I have heard since. {After}",
];

/** The label of the hub choice that goes to an affair. */
export const HUB_LABELS = [
  "Go to {place}, where {people} are waiting on {stake}.",
  "Hear what has happened at {place}, and what it has done to {people}.",
  "Take the road to {place}, where {stake} is at risk.",
  "See for yourself what is going on at {place}, with {foe} and {people}.",
];
