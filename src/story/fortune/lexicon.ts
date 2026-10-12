import type { ItemKind } from "@/engine/types";

/**
 * Wording for the Fortune Roads: the choices that spend, earn, sell and lease, and what the road says about a hero
 * who is poor, carries the road’s goods or holds its lease. Slots: place, kname, keeper, ware, holding, price, cheap,
 * wage, big, settle, lease, discount, value, relic, omen. A capitalised slot ({Ware}) starts a sentence.
 */

export const BUY = [
  "Buy {ware} from {kname} for {price} spirit stones.",
  "Count out {price} spirit stones and take {ware}.",
  "Pay {kname}’s price of {price} spirit stones for {ware}.",
  "Settle at {price} spirit stones and leave with {ware}.",
  "Hand over {price} spirit stones for {ware}, and do not argue.",
];

export const HAGGLE = [
  "Point out what is wrong with {ware}, and pay {cheap} spirit stones for it.",
  "Argue the price of {ware} down to {cheap} spirit stones, using what you have noticed.",
  "Show {kname} the flaw you found, and buy {ware} for {cheap} spirit stones.",
];

export const WORK = [
  "Take a day’s work from {kname} for {wage} spirit stones.",
  "Hire out your hands at {place} and be paid {wage} spirit stones.",
  "Carry, count and fetch for {kname} until you are paid {wage} spirit stones.",
  "Do what {kname} needs done and take {wage} spirit stones for it.",
];

export const RISKY = [
  "Take the job {kname} has not been able to fill, for {big} spirit stones.",
  "Do the work no one at {place} is fit for, and be paid {big} spirit stones.",
  "Say you can do what the mortals here cannot, and take {big} spirit stones for it.",
];

export const IN_KIND = [
  "Ask {kname} to pay you in {ware} instead of in coin.",
  "Take {ware} as your wage and leave the coin on the table.",
];

export const SELL_WARE = [
  "Sell {ware} back to {kname} for {value} spirit stones.",
  "Let {kname} have {ware} for {value} spirit stones.",
];

export const SETTLE = [
  "Pay the {settle} spirit stones that are owed here, and settle the matter.",
  "Count out {settle} spirit stones for what has gone unpaid at {place}.",
  "Cover the debt of someone who cannot, {settle} spirit stones, and say nothing of it.",
];

export const BRIBE = [
  "Press {settle} spirit stones into {kname}’s hand and ask them to forget the matter.",
  "Let {settle} spirit stones change hands where nobody is looking.",
];

export const USE_WARE = [
  "Show {ware}, and let it say what you cannot.",
  "Set {ware} where it can be seen, and wait for it to be recognised.",
  "Carry {ware} forward as proof that you have dealt honestly here.",
];

export const INVEST = [
  "Put {invest} spirit stones into the venture at {place}, and ask for a share of the books.",
  "Pay {invest} spirit stones for a place in {kname}’s accounts, and read them.",
];

export const LEASE = [
  "Take the lease on {holding} for {lease} spirit stones.",
  "Sign for {holding} and count out {lease} spirit stones.",
];

export const LEASE_SHARE = [
  "Take the lease on {holding} at the share-holder’s price of {discount} spirit stones.",
  "Sign for {holding} as a share-holder, and pay {discount} spirit stones.",
];

export const SELL_HOLDING = [
  "Sell your stake in {holding} back to {kname} for {leaseValue} spirit stones.",
  "Hand {holding} back and take {leaseValue} spirit stones.",
];

export const WORK_DAY = [
  "Take a day’s hire at the exchange, for {wage} spirit stones.",
  "Hire yourself to a stall-holder for the day, and be paid {wage} spirit stones.",
];

/** What the road says about the purse, by how it compares with the road’s price. */
export type PurseBand = "broke" | "thin" | "fair" | "rich";

export const PURSE_REACT: Record<PurseBand, string[]> = {
  broke: [
    "{Kname} looks at the way you hold your purse, lightly and with both hands, and does not bother to name a price.",
    "Nothing in your sleeves rings. At {place} that marks you as someone who will work, and the people who need work done look up.",
    "You are almost out of spirit stones. {Kname} says nothing about it, and prices the day’s work a little kindly.",
  ],
  thin: [
    "Your purse is light enough that {kname} counts it with a glance. At {place} that is a courtesy, to spare you the asking.",
    "You carry a few spirit stones, not many. They are enough to be taken seriously and not enough to be left alone.",
    "{Kname} weighs your purse against {ware} and says that what you have is close. It is the closest thing to encouragement {place} gives.",
  ],
  fair: [
    "The spirit stones at your belt click against each other as you walk. {Kname} hears them, and the day’s prices come out slightly higher.",
    "You have a respectable purse. At {place} it earns you a seat and a cup of something hot before anyone speaks of money.",
    "{Kname} notes a purse that has seen use, neither starved nor fat, and treats you as a customer, not a supplicant.",
  ],
  rich: [
    "Your purse is heavy, and {place} knows it before you have said a word. Hands wave you toward the good seats.",
    "You carry more spirit stones than anyone at {place} has seen in a month. {Kname} bows lower than the occasion needs, and the prices rise to meet it.",
    "A full purse changes the temperature of a room. At {place} three people remember an urgent errand, and one remembers you.",
  ],
};

/** What the road says about the goods the hero carries from it, by kind. */
export const WARE_REACT: Record<ItemKind, string[]> = {
  pill: [
    "You carry {ware} in your sleeve, and {kname} keeps glancing at it. A pill like that is not sold twice to one person.",
    "{Ware} sits warm against your wrist. {Kname} lowers their voice, as people do near a thing that can change a life.",
  ],
  tool: [
    "{Ware} hangs at your belt, and {kname} nods at it as one worker nods at another’s tools.",
    "You carry {ware}. At {place} a tool is a reference, and yours is a good one.",
  ],
  relic: [
    "{Ware} is wrapped in cloth against your chest. {Kname} does not ask to see it, which is how you know what it is worth.",
    "You carry {ware}, and the old people at {place} touch their sleeves as you pass.",
  ],
  material: [
    "{Ware} is in your pack, and the smell of it follows you. {Kname} says a trained nose can tell a good lot across a street.",
    "You carry {ware}, a lot that can be sold or spent. {Kname} is careful not to look at it.",
  ],
  token: [
    "You hold {ware}, and doors that were shut to strangers open to its bearer. {Kname} makes room.",
    "{Ware} in your hand is the nearest thing {place} has to a name. {Kname} reads it twice.",
  ],
  scripture: [
    "{Ware} rides in your sleeve, its pages soft with other hands. {Kname} admits it is more than most can read.",
    "You carry {ware}. At {place} they say a book is the one trade good that grows heavier the more you take from it.",
  ],
};

export const HOLDING_REACT = [
  "You hold {holding} now, and {kname} treats you as a neighbour whose accounts are due on the same days as everyone’s.",
  "The lease on {holding} is yours. {Kname} greets you across the street as a colleague, with the wary respect that goes to people who owe the same landlord.",
  "People at {place} know you hold {holding}. They are friendlier, and each of them wants something.",
];

/** The return scene’s closing lines about money. */
export const RETURN_SPENT = "You settled what was owed at {place}, and {kname} writes your name in the column for people who pay.";
export const RETURN_EARNED = "You worked for your coin at {place}, and your hands show it. {Kname} counted you honest.";
export const RETURN_BOUGHT = "You left {place} with {ware} and a lighter purse. {Kname} says that is how it is meant to go.";
export const RETURN_LEASED = "You took the lease on {holding}. From the next payday it pays you and costs you, and it is yours to answer for.";
export const RETURN_INVESTED = "You put money into the books at {place} before you took anything out. {Kname} says that is how the careful are paid.";
export const RETURN_BRIBED = "At {place} you paid someone to forget a thing. They will not forget the paying.";
export const RETURN_USED_WARE = "You showed {ware} at the crisis, and {place} remembers whose it was.";

export const RETURN_CHOICES3 = {
  sellWare: "Sell {ware} to {kname} before you go, for {value} spirit stones.",
  sellHolding: "Sell your stake in {holding} to {kname} on your way out, for {leaseValue} spirit stones.",
};

/** What the Elder says of the hero’s purse and pack in her report: memory lines. */
export const REPORT_MEMORY3 = {
  leased: "You hold a lease at {place} now. Good. A cultivator with an income answers to no one’s alms, and a cultivator with a debt answers to everyone’s. Make sure you know which you have signed.",
  ware: "You carry {ware} out of {place}. Do not lend it, and do not sell it for less than it cost you. The road is long, and what you hold is what you stand on.",
  broke: "You come to me from {place} with an empty purse. I will not lecture you. A hungry cultivator is a slower one, and I would sooner you ate than were proud.",
  rich: "A heavy purse, from {place}. I hope you earned it. If you did not, I would rather you told me now than have me hear it in a bell.",
  bribed: "At {place} you paid someone to forget a thing. I will not ask who. I will ask you to remember that a bought silence is the most expensive kind, and that it is never final.",
  bought: "You bought {ware} at {place}, and paid the asking price or near it. A fair purchase is a quiet one. I will not ask what you mean to do with it, only what you mean to become.",
  found: "You came away from {place} with {ware} and without paying for it. I will not ask how. I will ask you to remember that what costs nothing is repaid later, in the currency the giver chooses.",
  kind: "You took {ware} for your wages instead of coin. That is how apprentices are made, and also how they are bound. Know which you are.",
  spent: "You paid what was owed at {place}, even where no one would have noticed if you had not. I notice, and I add it to the account I keep of you.",
};
