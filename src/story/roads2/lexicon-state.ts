import type { ChoiceTone } from "@/engine/types";
import type { RelBand } from "./hero-lex";

/**
 * What a way back says of the state the hero is in, in six wordings each. These used to be a single sentence apiece, shown word for word
 * in every road where the state held: a hero who reached past their realm, kept their standing or settled a debt read the same line at
 * the end of every one of two hundred roads. A road now takes the wording its index points at, so the same one comes round after six.
 * The first of each is the sentence the roads always said. Slots: kname, place, ware, holding.
 */

export const USED_QI: string[] = [
  "Your breath ran deeper at the crisis than a traveller’s should. {Kname} noticed, and said nothing.",
  "At the crisis your qi went round once, slow and whole, and {kname} lowered their eyes as if at a stranger’s prayer.",
  "You drew on your cultivation there and it came when called. {Kname} did not remark on it, which was a remark.",
  "The qi you gathered at the crisis left a faint warmth there that {kname} was still breathing when you left.",
  "A traveller’s breath would have broken at the crisis. Yours settled, and {kname} wrote down the hour.",
  "You let your qi settle over the place and the whole room went quiet to hear it. {Kname} lost count of the breaths.",
];

export const REACHED: string[] = [
  "You reached past yourself at {place}, and it held. {Kname} counted your breaths afterward and did not like the number.",
  "You pushed your qi beyond your realm there, and it gave a hand’s breadth. {Kname} said you would feel it by morning.",
  "There you asked of yourself a thing you were not yet equal to, and did it. {Kname} will tell it, wrongly.",
  "You strained past your realm at the crisis, and it cost what such things cost. {Kname} left something hot where you would find it.",
  "The reach was too long for your arm and you made it anyway. {Kname} looked for tremors in your hands and found few.",
  "You went beyond what the place asked and what you had. {Kname} calls it courage in company and folly in private.",
];

export const PULLED_RANK: string[] = [
  "You let your standing speak at {place}, and it worked. {Kname} will remember who you are, not what you did.",
  "There you let your name do the work, and doors opened that would have stuck. You never raised your voice.",
  "Your rank carried you through the place like a boat on a tide. {Kname} would have liked to see you without it.",
  "You spent your standing there like coin, and it bought what you wanted. {Kname} kept the receipt.",
  "The weight of your name was enough there, and no one said so. {Kname} bowed as to a creditor.",
  "You made no demand there. You stood where your birth and realm put you, and the road moved.",
];

export const HUMBLED: string[] = [
  "You told {kname} you were not equal to {place}. It was true, and the bravest thing you said there.",
  "You admitted there that the road was beyond you, and asked for the lesser way. {Kname} thought better of you for it.",
  "At the door of the place you said what many cannot: not yet. {Kname} wrote it down as a credit.",
  "You asked {kname} what a lesser traveller might do there, and meant it. It is a rare question.",
  "You came to the place knowing your measure, and said so. {Kname} found it harder to refuse than a boast.",
  "To say you fell short of the place cost you, and {kname} saw the price. They gave you a stool nearer the fire.",
];

export const CRISIS: Record<ChoiceTone, string[]> = {
  truth: [
    "You spoke plainly at the crisis, and {kname} has already repeated your words, a little improved.",
    "What you said at the crisis was true, and the place knew it, and no one had the courage to thank you.",
    "You told the truth at the crisis, and it fell into the silence like a coin into a well.",
    "The plain word you gave at the crisis is going round the place like a loaf. {Kname} took the first slice.",
    "At the crisis you said the thing that is not said, and the place flinched, and then slowly thanked you.",
    "Your honesty at the crisis has been noted there. {Kname} promised not to embroider it, and has.",
  ],
  mercy: [
    "What you gave at the crisis was small, and {kname} will remember it exactly as long as it takes to repay.",
    "You were gentle at the crisis, and it cost you something. {Kname} noticed the cost and the gentleness alike.",
    "Your mercy at the crisis surprised the place more than force would have. {Kname} says it will be talked of all season.",
    "At the crisis you gave ground, and the place remembers who gave it. {Kname} thinks it will be returned with interest.",
    "The kindness you showed at the crisis is going round the place, hand to hand. {Kname} is not sure what it will buy.",
    "You spared something at the crisis that did not ask to be spared. {Kname} watched, and said nothing at all.",
  ],
  inquiry: [
    "Your question at the crisis is still going round {place}. Nobody has found an answer they like.",
    "You asked the thing nobody had asked, and {kname} has spent the hours since looking for the answer in the ledgers.",
    "The question you put at the crisis has cracked something there. {Kname} is pretending not to see it.",
    "At the crisis you asked, and waited, and the place could not bear the waiting. {Kname} says the answer is coming.",
    "Your question was small at the crisis and has grown since. {Kname} says it is already bigger than the place.",
    "You left the crisis with a question unanswered, and {kname} with a new one. There that is an even trade.",
  ],
  deceit: [
    "The story you told at the crisis holds for now. In {place}, a lie that holds is a debt.",
    "At the crisis you lied well, and the place believed it. {Kname} did not, and means to say nothing until they can prove it.",
    "Your lie at the crisis has begun to grow roots there. {Kname} says lies, like weeds, are hardest to pull in good weather.",
    "What you told them at the crisis was not so, and now is. {Kname} says it is the oldest trick, and the most often repaid.",
    "You deceived someone at the crisis, and they thanked you. {Kname} watched you accept it and wrote down the date.",
    "The false thing you said at the crisis is true there now, because everyone repeats it. {Kname} keeps quiet.",
  ],
  force: [
    "How you broke the quiet at the crisis will be remembered in {place} long after your name is forgotten.",
    "You used force at the crisis, and the place bent like grass. {Kname} says grass remembers which way it was bent.",
    "What you smashed at the crisis will be mended slowly and resented longer. {Kname} has begun to count the bills.",
    "The blow you struck at the crisis rang down every lane of the place. {Kname} says effective is not always welcome.",
    "You took the crisis by the throat, and it yielded. {Kname} was almost sorry to see how easily.",
    "At the crisis you chose the hard way, and the place will not forget its sound. Some sounds do not fade.",
  ],
  quiet: [
    "You said little at the crisis, and {place} has decided your silence meant something.",
    "At the crisis you stood very still, and everyone looked to you for a sign, and you gave none.",
    "Your quiet at the crisis was louder than any speech. The place has been trying to read it ever since.",
    "You let the crisis pass over you like weather, and {kname} noted the stillness as one notes a rare bird.",
    "At the crisis you did nothing, and so well that the place wondered if it was a choice. {Kname} thinks it was.",
    "You held your tongue at the crisis, and finding nothing to push against, the crisis subsided.",
  ],
};

export const DEEP: Record<RelBand, string[]> = {
  far: [
    "The characters are in a qi-script your body cannot follow yet. You catch the shape of the last line and nothing of its breath, and {kname} will have to read you the rest.",
    "The writing is too fine for your realm. You see ink where there should be meaning, and {kname} reads over your shoulder, slowly, so that you can at least hear it.",
    "The lines swim before your eyes, written for a cultivator of a height you have not reached. {Kname} offers to say them aloud.",
    "You can make out the words and none of their weight. The page is a bell, and you are a long way from the rope. {Kname} reads it to you.",
    "The script is a qi you cannot yet hold, and the characters slide off your attention like water off wax. {Kname} says it is not your fault.",
    "It is written in a hand that assumes a better reader. You get the sense of it and lose the rest, and {kname} fills in what they can.",
  ],
  below: [
    "You read most of it, and lose the last clause to a qi-script you are a realm too low to feel. It is enough to know what it is about.",
    "The writing yields to you until the last line, where it tightens, and you have to read it twice. A realm higher and it would have been plain.",
    "Most of the page opens at your touch. The last part stays shut, and you know exactly how much qi it wants and how much you lack.",
    "You follow it down to the final clause and there your qi stumbles. It is a small stumble, and it tells you everything about your height.",
    "The script lets you in by the side door. You see the shape of the thing, though not all its furniture, and it is enough to act on.",
    "You read it nearly whole, and the part you miss is a single character, heavy as a stone. You carry its shape away and hope to learn its weight.",
  ],
  at: [
    "You read it whole, in the cultivator’s script it was written in, and each character settles in you like a stone into a socket it was cut for.",
    "The writing opens to you exactly as wide as you are. Each line comes in at the right depth, and you know it was written for someone of your height.",
    "You read it without effort, line by line, and it reads you back. For a moment there is no difference between the page and the breath.",
    "The page is a lock and your qi the key, and the cut is true. You read it through at the pace it was meant, and no faster.",
    "It is written in the script of your own realm, and you read it as one reads a letter from a friend who knows exactly how much you can bear.",
    "Every character lands where you expected it to, and some where you did not. You read it all, and are changed by about a hair.",
  ],
  above: [
    "You read it whole, and then you read what the writer left out, in the spaces between lines. Someone wrote this knowing a better cultivator would come.",
    "The writing is a child’s hand to you, and you see through it at once, to the hesitation behind each stroke. The writer was afraid, and said so in the gaps.",
    "You are far above the script, and it lies open to you like a shallow pool. You read it, and then you read the bottom, and the bottom is more interesting.",
    "The words give up their meaning before you have finished reading them. You find yourself reading the margins, and the paper, and the hand’s own tremor.",
    "You read it whole at a glance, and the glance leaves you time to wonder who it was written for. Not you. Someone smaller, and more afraid.",
    "What it says is plain. What it means is a mile below, and you can see it from here, and there is a faint, unwelcome pity in the seeing.",
  ],
};

/** The return scene’s closing lines about money, six wordings each. */
export const SPENT: string[] = [
  "You settled what was owed at {place}, and {kname} writes your name in the column for people who pay.",
  "You paid what was due at {place} without being chased, and {kname} thanked you twice, it was so unusual.",
  "Your debt at {place} is closed. {Kname} drew a red line under it, and for a moment it looked like a small door.",
  "You counted out what you owed at {place}, stone by stone. {Kname} watched each one go down and never looked at your face.",
  "The account at {place} stands clear. {Kname} says those who pay in full are remembered more kindly than those who pay in kind.",
  "You left {place} owing nothing. {Kname} says it is a rare way to leave, and holds it up to the next three guests.",
];
export const EARNED: string[] = [
  "You worked for your coin at {place}, and your hands show it. {Kname} counted you honest.",
  "You earned your stones at {place} by a day’s labour, and {kname} paid in full, with the respect due to a good worker.",
  "A day’s work at {place} bought you a day’s wage and a reputation. {Kname} says the reputation is worth more.",
  "You took wages at {place} and earned every coin. {Kname} marks you down among those who can be hired twice.",
  "Your back remembers the work you did at {place}, and your purse its price. {Kname} nods at both.",
  "You left {place} with sore hands and a heavier purse. {Kname} says that is the oldest bargain, and the most often kept.",
];
export const LEASED: string[] = [
  "You took the lease on {holding}. From the next payday it pays you and costs you, and it is yours to answer for.",
  "{Holding} is yours on lease. {Kname} witnessed the mark, and reminded you that a holding pays in bad months as well as good.",
  "You signed for {holding}, and the ink is still drying. You have a landlord now, a rent, and a small tidy hope.",
  "The lease on {holding} is in your sleeve. It pays on the day it is due and costs on the same day.",
  "You hold {holding} now, and {kname} treats you as someone with a stake in the weather.",
  "{Holding} belongs to you for as long as you keep up with it. {Kname} says that is the whole of owning anything.",
];
export const INVESTED: string[] = [
  "You put money into the books at {place} before you took anything out. {Kname} says that is how the careful are paid.",
  "You bought a share in {place} before you bought a thing from it. {Kname} wrote your name in the margin, where the careful go.",
  "A share in the books at {place} is a quiet kind of loyalty. {Kname} says it earns a cheaper lease and a longer memory.",
  "You paid in before you drew out, and {kname} noticed, because almost nobody does.",
  "Your stake in {place} is small and in the book. {Kname} says small stakes are the ones that hold a house up.",
  "You put a few stones into {place} and took nothing, and {kname} has looked at you since with the affection reserved for investors.",
];
export const BRIBED: string[] = [
  "At {place} you paid someone to forget a thing. They will not forget the paying.",
  "You greased a palm at {place} and the thing was forgotten. {Kname} will not say who remembers the greasing.",
  "The coin you slid across at {place} bought a silence, and silences, {kname} says, are only ever on loan.",
  "At {place} you bought a blind eye. {Kname} noted the eye and the price, and filed both.",
  "You paid at {place} to have a page go missing, and it has. {Kname} says the missing is itself a record.",
  "A small bribe at {place} bought what you wanted, and made a friend you did not need.",
];
export const USED_WARE: string[] = [
  "You showed {ware} at the crisis, and {place} remembers whose it was.",
  "At the crisis you put {ware} on the table, and the room changed. A good tool speaks for its owner.",
  "{Ware} did the talking at the crisis, and you did the listening. {Kname} says it is the best division of labour.",
  "You brought out {ware} at the crisis, and {place} bent a little toward it.",
  "The sight of {ware} at the crisis settled what words would not. {Kname} says a good tool beats a good tongue.",
  "You held up {ware} at the crisis and said nothing. {Kname} says the silence was the best part.",
];
