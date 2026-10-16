import type { Attire } from "@/engine/hero";
import type { CraftId } from "./lexicon-craft";
import type { Stance } from "./lexicon-stance";

/**
 * The fitting: six scenes at the back of every Wardrobe Road where dress is bought, earned or sold. The counter, the rack, the commission and the pawn are the
 * craft’s own; the verdict on a new garment and the mirror at the end are the keeper’s, read against the dress the hero has on when they get there.
 * Slots: kname, kthey, kthem, ktheir, place, garb.
 */
export const COUNTER: Record<CraftId, string> = {
  hemp: "Behind the washing-stones {kname} has set a plank across two barrels, and on it a roll of hemp, a pair of shears and a slate. “Buy, work or sell,” {kthey} says. “I do all three, and I am honest about which I prefer.”",
  oilcloth: "At the end of the cutting-floor {kname} has pulled a trestle to the stove, and on it lie a cloak half-cut, a pot of wax and a ledger. “Buy, work or sell,” {kthey} says. “The stove is warm for all three.”",
  cotton: "In the corner of the dye-house {kname} has cleared a table, and on it stand a bolt of blue, an inkstone and a small brass scale. “Buy, work or sell,” {kthey} says. “Mind the ink; it travels.”",
  silk: "Beside the great loom {kname} has drawn a screen, and behind it stand a table of folded gowns, a looking-glass and a tray of needles. “Buy, work or sell,” {kthey} says. “Do not touch the thread. It has opinions.”",
  scale: "At the end of the lacing row {kname} has hung a leather curtain, and behind it stand an anvil, a rack of jerkins and a tin of cord. “Buy, work or sell,” {kthey} says. “I do not haggle with a customer in a hurry.”",
  office: "In the robing hall {kname} has unlocked a small side-room, and in it stand a table, a stack of paper patterns and a rod notched in inches. “Buy, work or sell,” {kthey} says. “I shall want your name for the book.”",
  dust: "In the hostel’s lean-to {kname} has set out a table beside the pegs, and on it lie a folded cloth, a jar of dust and a bowl of rice. “Buy, work or sell,” {kthey} says. “The road teaches all three.”",
  seamless: "In the white hall {kname} has set a single low bench, and on it lie a folded robe, a spool without thread and a cup of water. “Buy, work or sell,” {kthey} says, “though I cannot say for what. We have nothing for sale.”",
};

export const RACK: Record<CraftId, string> = {
  hemp: "The rack by the stone holds five coats on wooden pegs, each marked with a chalk price. Patched hemp is the cheapest and the oldest, and the others hang a little apart from it, as if embarrassed to be near.",
  oilcloth: "The rack under the rafters holds five coats on iron hooks, each tagged with a wax price. The oiled cloak is the one that smells of honey, and the others hang a little to the side, as if wary of the rain.",
  cotton: "The rack beside the vat holds five robes on bamboo hangers, each pinned with an ink price. The ink-stained robe is blue to the elbow, and the others hang away from it, as if afraid of the blot.",
  silk: "The rack behind the screen holds five gowns on carved stands, each labelled in gold. The embroidered silk is the one that catches the light, and the others stand in its shade, like courtiers at a prince’s elbow.",
  scale: "The rack beyond the curtain holds five suits on wooden frames, each stamped with a smith’s price. The scale jerkin is black and dented, and the others hang round it, quiet, as a crowd hangs round an old soldier.",
  office: "The rack in the side-room holds five robes on cedar frames, each pinned with a clerk’s price. The ink-stained robe wears a badge of rank, and the others hang in order of precedence, though none of them has any.",
  dust: "The pegs by the wall hold five cloaks, each tagged with a pilgrim’s price in rice. The oiled cloak hangs by the door, ready for the road, and the others hang behind it, brown with the dust of other journeys.",
  seamless: "The bench holds five garments laid side by side, each folded into a square, each with a number and no price. The robe at the end is white, and the others lie beside it, as if waiting to be told they are not yet needed.",
};

export const WORK: Record<CraftId, string> = {
  hemp: "{Kname} has piles of washing and a stack of mending, and a backlog that has not been seen since last winter. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The stair likes the right clothes at the right tub.”",
  oilcloth: "{Kname} has bolts to proof, cloaks to deliver and a rush order for a caravan. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The customers like the right clothes on the right shoulder.”",
  cotton: "{Kname} has papers to copy, sleeves to size and a delivery of robes to the Academy. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The students like the right clothes on the right messenger.”",
  silk: "{Kname} has gowns to carry to the court, hems to hold and a guest list to dress. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The court likes the right clothes in the right room.”",
  scale: "{Kname} has jerkins to haul, a gate to guard and a caravan to escort to the border. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The yard likes the right clothes at the right post.”",
  office: "{Kname} has robes to carry to the tribunal, sleeves to measure and a sentence-day to dress. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The hall likes the right clothes in the right row.”",
  dust: "{Kname} has jars to carry, cloaks to beat and a pilgrim train to meet at the gate. “I pay in stones,” {kthey} says, “and more to a hand that looks the part. The road likes the right clothes at the right milestone.”",
  seamless: "{Kname} has a robe to carry across the hall, a door to open and a vigil to sit. “I pay in stones,” {kthey} says, “though there is little to buy here. The hall likes the right clothes on the right visitor, and I have no better reason.”",
};

export const PAWN: Record<CraftId, string> = {
  hemp: "At the back of the stair a hatch opens in the wall, and a woman behind it weighs hemp by the armful. “Sell what you do not wear,” {kname} says. “I will give a fair price for a good coat, and none for a bad one.”",
  oilcloth: "At the back of the shed a hatch opens in the wall, and a boy behind it feels oilcloth with a thumb. “Sell what you do not wear,” {kname} says. “A cloak that has not been in the rain is worth nothing, and I shall know.”",
  cotton: "At the back of the dye-house a hatch opens in the wall, and a clerk behind it sniffs cotton for dye. “Sell what you do not wear,” {kname} says. “A robe that has not been inked is a lie, and I buy only the honest ones.”",
  silk: "At the back of the court a hatch opens in the wall, and a matron behind it holds silk to the light. “Sell what you do not wear,” {kname} says. “A gown that has not been worn is a rumour, and I buy only the rumours that are true.”",
  scale: "At the back of the yard a hatch opens in the wall, and a smith behind it weighs scale in a gloved hand. “Sell what you do not wear,” {kname} says. “A jerkin that has not been struck is a theory, and I buy only the proven.”",
  office: "At the back of the hall a hatch opens in the wall, and a registrar behind it stamps a robe with a seal. “Sell what you do not wear,” {kname} says. “A robe that has not been sworn in is merely a coat, and I give a coat’s price.”",
  dust: "At the back of the hostel a hatch opens in the wall, and a pilgrim behind it counts cloaks by the smell. “Sell what you do not wear,” {kname} says. “A cloak that has not walked is a curtain, and I price it as one.”",
  seamless: "At the back of the hall a hatch opens in the wall, and no one sits behind it. “Sell what you do not wear,” {kname} says. “We do not buy; we receive. The hall will pay what it thinks fit, and it is always fair.”",
};

type Dress = Record<Attire, string>;

/** What the keeper says of the garment the hero has just put on, by the stance and the garment. */
export const VERDICT: Record<Stance, Dress> = {
  appraiser: {
    rags: "{Kname} steps back and names a figure, and the figure is very low. “It is honest,” {kthey} says. “You are the first customer today to buy cloth that does not pretend to be anything but cloth.”",
    traveller: "{Kname} steps back and names a figure, and the figure is fair. “It is useful,” {kthey} says. “The best thing a coat can be. You will wear it out in three years, and be sorry in the fourth.”",
    scholar: "{Kname} steps back and names a figure, and the figure is a trifle high. “It is respectable,” {kthey} says. “People will take you for a reader. Whether you can read is not part of the price.”",
    silk: "{Kname} steps back and names a figure, and the figure is a good deal too high. “It is magnificent,” {kthey} says. “You have bought a great deal of other people’s attention. I hope you have somewhere to spend it.”",
    armour: "{Kname} steps back and names a figure, and the figure is steep. “It is formidable,” {kthey} says. “You have bought the right to be left alone. It is the dearest thing I sell, and the one that sells fastest.”",
  },
  warden: {
    rags: "{Kname} consults the schedule, and for once finds nothing to enter. “It is lawful,” {kthey} says. “It breaks no rule, and no rule breaks it. That is the whole of what the sect can say for the dress.”",
    traveller: "{Kname} consults the schedule, and finds a single entry. “It is lawful,” {kthey} says. “On the road. Within the hall you will leave it on the peg, and that is no insult but an arrangement.”",
    scholar: "{Kname} consults the schedule, and nods at the margin. “It is lawful,” {kthey} says. “You are entitled to the ink on the cuffs, and to the quiet that comes with it. I should recommend both.”",
    silk: "{Kname} consults the schedule, and sighs. “It is lawful,” {kthey} says. “Above a certain rank. You will be watched for it, and I am obliged to say the watching is the price.”",
    armour: "{Kname} consults the schedule, and puts down the pencil. “It is lawful,” {kthey} says. “On the road. In the hall, I shall hold your blade, and you will find that I am a reliable keeper of things that frighten people.”",
  },
  masker: {
    rags: "{Kname} circles you once, delighted. “It is perfect,” {kthey} says. “Nobody will look at you twice, and everyone will remember that they did not. It is the finest disguise in the house, and the cheapest.”",
    traveller: "{Kname} circles you once, nodding. “It is excellent,” {kthey} says. “A stranger from nowhere. The hood is the whole of the trick. Keep it low and your voice lower, and you can be anyone’s cousin.”",
    scholar: "{Kname} circles you once, with a critical eye. “It is convincing,” {kthey} says. “A reader. The ink is the finishing touch. Do not explain the robe; it will explain itself, and better than you can.”",
    silk: "{Kname} circles you once, and claps softly. “It is superb,” {kthey} says. “A person of consequence. Walk as though the floor were a courtesy, and they will believe you owned the building.”",
    armour: "{Kname} circles you once, and does not clap. “It is terrible,” {kthey} says, and means it as praise. “A person who has been somewhere and will go again. Do not smile too much; the suit will do it for you.”",
  },
  mender: {
    rags: "{Kname} runs a thumb along the new hem and finds it good. “It is kind,” {kthey} says. “Hemp has nothing to hide, and a robe that hides nothing has nothing to mend. May it never be put to the test.”",
    traveller: "{Kname} runs a thumb along the new seam and finds it sound. “It is faithful,” {kthey} says. “A cloak that will go where you go, and come home with you. I shall be sorry to see the first rip, and glad to close it.”",
    scholar: "{Kname} runs a thumb along the new cuff and finds it thin. “It is gentle,” {kthey} says. “Ink will want a lining, in a year. Bring it back then, and I shall give it one, and tell you what it has learned.”",
    silk: "{Kname} runs a thumb along the new lining and finds the loose thread. “It is lovely,” {kthey} says. “And delicate. I shall close the seam that is already starting. Silk is like a good friend: it needs to be told its weak places.”",
    armour: "{Kname} runs a thumb along the new cord and finds it tight. “It is solid,” {kthey} says. “And lonely. Armour is the only dress that spends its life being brave on someone else’s behalf. Bring it in when it has done enough.”",
  },
};

/** What the mirror, and the world behind it, makes of the hero in the dress they leave in. */
export const MIRROR: Record<Stance, Dress> = {
  appraiser: {
    rags: "In the glass you are patched hemp and a clear eye, priced at nothing and, {kname} says, therefore beyond price. People will not look at the cloth. They will look at what is left when they have finished not looking.",
    traveller: "In the glass you are an oiled cloak and a long road, priced at a little more than you would guess. People will take you for someone who has been paid, and someone who will pay, and treat you as both.",
    scholar: "In the glass you are an ink-stained robe and a thoughtful stoop, priced above your means and below your worth. People will assume you owe them an answer, and will wait with some confidence.",
    silk: "In the glass you are embroidered silk and a straight back, priced beyond question. People will rise for you before they know why, and spend the evening finding out whether they were right.",
    armour: "In the glass you are a scale jerkin and a sword-belt, priced in blood and paid in courtesy. People will clear a space round you, and be very pleasant, and remember the width of it afterwards.",
  },
  warden: {
    rags: "In the glass you are patched hemp, entered in the schedule as nothing in particular. The sect will not search you, and will not salute you, and will not remember that either was possible. It is a peaceful way to move.",
    traveller: "In the glass you are an oiled cloak, entered in the schedule as passing through. The gatekeepers will ask only how far, and not why, and will wave you on with a courtesy that costs them nothing.",
    scholar: "In the glass you are an ink-stained robe, entered in the schedule as of the archive. The wardens will let you pass where they would stop a soldier, and will watch the doors behind you with some embarrassment.",
    silk: "In the glass you are embroidered silk, entered in the schedule above your rank. The sect will receive you with a bow it has not quite earned, and will remember to be sorry if you turn out to be nobody.",
    armour: "In the glass you are a scale jerkin, entered in the schedule as armed. The wardens will ask for the blade at every door, and hold it with the respect due to something that has not yet been used.",
  },
  masker: {
    rags: "In the glass you are patched hemp, and nobody you have ever been. It is the finest mask in the house, and the only one that costs nothing, and {kname} regards it with the envy of a craftsman for a natural.",
    traveller: "In the glass you are an oiled cloak, and a stranger from the next province. You could be anyone’s guest, and everyone’s secret, and {kname} says it is the most useful dress in the house, and the least believed.",
    scholar: "In the glass you are an ink-stained robe, and a mind that has been somewhere. You could argue anyone down, or be taken for a fool by the wise, and {kname} says that is the best disguise there is.",
    silk: "In the glass you are embroidered silk, and a great person on a small errand. You could walk into any room on the mountain, and be asked to sit, and {kname} says that is how every great fraud begins.",
    armour: "In the glass you are a scale jerkin, and someone whose business is elsewhere. You could stand at any door and be left alone, and {kname} says that is the mask with the longest waiting list, and the shortest wear.",
  },
  mender: {
    rags: "In the glass you are patched hemp, mended and mended again. People will see the patches and think the poorer of you, and the wiser will see them and think the better, and {kname} counts them both as family.",
    traveller: "In the glass you are an oiled cloak, rubbed bare at the elbows. People will see a traveller, and a few will see a person who has been carried, and set down, and carried again, and is not much damaged by it.",
    scholar: "In the glass you are an ink-stained robe, thin at the cuff. People will see a reader, and a few will see a person who leans on things, and has learned to lean gently, and is the stronger for knowing where.",
    silk: "In the glass you are embroidered silk, with one stitch loose. People will see splendour, and a few will see the stitch, and think the better of you for it. {Kname} says the loose one is always the one that is loved.",
    armour: "In the glass you are a scale jerkin, with one cord newer than the rest. People will see a soldier, and a few will see the cord, and think of a hand that tied it. {Kname} says that is the whole of armour, if you look.",
  },
};

/** How the hero answers the keeper at the counter: labels for the choices of the fitting. Slots: kname, place. */
export const FIT_LABEL = {
  browse: "Ask {kname} to show you what hangs on the rack, and look at what you might wear.",
  commission: "Ask {kname} for work, and see what the counter pays a hand who comes in this dress.",
  pawn: "Ask {kname} what the hatch would give for a garment you do not wear.",
  glass: "Ask {kname} for nothing but the long glass, and a look at what the road sees of you now.",
  look: "Look at the rack, and buy nothing, and thank {kname} for the loan of the glass.",
  thank: "Thank {kname} plainly, and say what the garment is worth to you.",
  ask: "Ask {kname} what the new dress says about you, and listen to the whole of it.",
  tip: "Press a little extra on {kname} for the care of the fitting, and ask {kthem} to keep it for the next customer.",
  slip: "Take the garment and leave by the side door without a tip, and let {kname} wonder.",
  piece: "Take the piece-work at the plain rate, and do it well, and ask for no more.",
  deliver: "Take the delivery, and carry it in the right dress to the right door, for the better rate.",
  model: "Stand in the window as the house’s sign, dressed as you are, for the rate the window pays.",
  beg: "Work the street in your own dress, hat in hand, for the rate the street pays a face it trusts.",
  forge: "Copy the house’s pattern without leave and sell the copy at the next stall, quietly.",
  keep: "Keep your wardrobe as it is, and thank {kname} for hearing the offer.",
  mirror_thank: "Thank {kname} for the glass, and for the truth in it.",
  mirror_ask: "Ask {kname} what you should not wear, and why, and listen until the answer is done.",
  mirror_quiet: "Say nothing, and stand a moment in the dress, and let it settle on you.",
  mirror_go: "Nod to {kname}, and go out into {place}, and see whether the world has changed its mind.",
} as const;

/** What the Elder says when the hero comes to the mirror, by the dress they have on. Thirty words or fewer each. */
export const ELDER_MIRROR: Record<Attire, string> = {
  rags: "Patched hemp, and you stood in it before a glass. There is courage in that, and some pride. I cannot yet tell which you are selling.",
  traveller: "An oiled cloak, and a glass, and a face that is going somewhere. I shall not stop you. Tell me where, in time to be sorry.",
  scholar: "An ink-stained robe. The sect will take you for a reader, and a reader is let into rooms. Try to deserve the rooms.",
  silk: "Embroidered silk. The sect will rise for you before it knows why. Do not mistake the rising for respect. It fades with the pressing.",
  armour: "A scale jerkin. The sect will clear a space for you. Do not mistake the space for welcome. It is only the width of a blade.",
};
