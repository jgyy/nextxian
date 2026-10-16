import type { Attire } from "@/engine/hero";
import type { Stance } from "./lexicon-stance";

/**
 * How a keeper receives a hero by the clothes the hero has on now, and nothing else. A hero who changes dress between one scene and the next is received
 * differently at once: the appraiser prices the cloth, the warden checks the rule, the masker reads the disguise and the mender looks for the tear. Five
 * garments for each, in three places: the first glance at the entry, the greeting at the start of an approach and the parting at its end.
 * Slots: kname, kthey, kthem, ktheir, place, focus, garb.
 */
type Dress = Record<Attire, string>;

export const GLANCE: Record<Stance, Dress> = {
  appraiser: {
    rags: "{Kname} looks you over once and prices you at nothing, without malice. Patched hemp is a coat the market has already given up on, and {kthey} puts down the scales to save the trouble.",
    traveller: "{Kname} takes in the oiled cloak and the road under it, and names a figure in {ktheir} head. A cloak like that has been paid for twice, once in coin and once in weather, and {kthey} respects both.",
    scholar: "{Kname} notes the ink on both cuffs and drops the price by a third. A scholar’s robe is worth little in the shop and a great deal in the end, and {kthey} has never found a way to bill for the second.",
    silk: "{Kname} straightens at the embroidery, and the scales come out at once. Silk at {place} is a sum before it is a person, and {kthey} is already adding the pressing, the lining and the cost of being seen in it.",
    armour: "{Kname} runs an eye down the scales and finds the dents. Armour is priced by what it has stopped, and {kthey} reads the jerkin like a ledger of the blows it has been spared.",
  },
  warden: {
    rags: "{Kname} checks the schedule and finds nothing against patched hemp, which is the only dress in the book that cannot break a rule. {Kthey} nods, and lowers the pencil, and for once has nothing to correct.",
    traveller: "{Kname} glances at the oiled cloak and the schedule together. A cloak is lawful on any road and in any yard, but not indoors, and {kthey} says so, kindly, and points to the peg by the door.",
    scholar: "{Kname} reads the ink on your cuffs as a licence. A scholar’s robe is lawful in the hall and the archive and a good many places besides, and {kthey} has never known the schedule to quarrel with a stain.",
    silk: "{Kname} consults the schedule with a long breath. Silk is lawful above a certain rank and conspicuous below it, and {kthey} looks at the embroidery, and then at you, and writes a figure in the margin.",
    armour: "{Kname} stops at the scale jerkin and the sword-belt. Armour is lawful on the road and forbidden in the hall, and {kthey} holds out a hand for the blade with the courtesy of someone who has done it before.",
  },
  masker: {
    rags: "{Kname} sees patched hemp and smiles, a little ruefully. The beggar is the oldest mask there is, and the hardest to wear well, and {kthey} wonders whether it is a costume, or only the truth in the dress of one.",
    traveller: "{Kname} sees an oiled cloak and a hat pulled low, and approves. The traveller is a person from nowhere, going somewhere, and {kthey} says it is the best first sentence a stranger can start with.",
    scholar: "{Kname} sees the ink-stained robe and tilts {ktheir} head. A scholar’s dress is a disguise that opens doors the wearer has no key for, and {kthey} wonders, aloud and gently, how many you have walked through.",
    silk: "{Kname} sees embroidered silk and a straight back, and applauds under {ktheir} breath. Silk is a mask that has been paid for in advance, and {kthey} cannot tell whether you are wearing it or it is wearing you.",
    armour: "{Kname} sees the scale jerkin and the sword-belt and steps back to look. Armour is a mask that frightens first and explains later, and {kthey} says it is rare to see one worn so honestly.",
  },
  mender: {
    rags: "{Kname} sees the patches and counts them, not in disdain but in welcome. Every patch is a repair somebody cared enough to make, and {kthey} says patched hemp is the only dress with its whole history on the outside.",
    traveller: "{Kname} sees the oiled cloak, and the wear at the hem, and the pale seam where it was once closed in a hurry. {Kthey} says nothing about it, and offers you a stool, as one offers a chair to a long road.",
    scholar: "{Kname} sees the ink-stained robe, and runs a thumb along a cuff without asking. The weave is thin there from long leaning on desks, and {kthey} says a scholar’s sleeves are the first to go and the last to be mended.",
    silk: "{Kname} sees the embroidery and the lining under it, and the one stitch that does not belong. Silk hides its mends well, {kthey} says, and that is no kindness to the cloth, which would like to be seen to have lived.",
    armour: "{Kname} sees the scales and the lacing, and the place where one cord has been replaced in a different knot. {Kthey} says armour, like a soldier, is mended hardest where it has been trusted most.",
  },
};

export const GREET: Record<Stance, Dress> = {
  appraiser: {
    rags: "“Welcome to {focus},” {kname} says, “where hemp is honoured for being what it is.” {Kthey} says it and means it, and then looks at the clock, as the poor dress for the day’s price.",
    traveller: "“Welcome to {focus},” {kname} says, and runs an eye over the oiled cloak. “The road has paid you well, I see, in everything but money.”",
    scholar: "“Welcome to {focus},” {kname} says, with a nod at your cuffs. “I do not price ink. It cannot be sold twice, and is mostly regret.”",
    silk: "“Welcome to {focus},” {kname} says, and the voice has changed. Silk gets a warmer register, and {kthey} lets it linger on the word, as on a coin.",
    armour: "“Welcome to {focus},” {kname} says, and glances at the sword-belt. “Mind the cloth. A blade is expensive, and a cut bolt is worse.”",
  },
  warden: {
    rags: "“Welcome to {focus},” {kname} says. “You may stand anywhere. Patched hemp is the one dress the schedule has no objection to, and I am obliged to say it is a relief.”",
    traveller: "“Welcome to {focus},” {kname} says. “The cloak on the peg, please. It is lawful outside and lawless within, and I am sorry for the damp.”",
    scholar: "“Welcome to {focus},” {kname} says. “The robe is in order. Ink is lawful in all but three rooms, and this is not one of them.”",
    silk: "“Welcome to {focus},” {kname} says, with a small bow. “The silk is in order, and I am obliged to say that it is also noticed. Pray keep your sleeves from the table.”",
    armour: "“Welcome to {focus},” {kname} says, and holds out a hand. “The blade, please. It will be returned on the way out, and I shall not ask what it was for.”",
  },
  masker: {
    rags: "“Welcome to {focus},” {kname} says, and drops the voice. “Hemp, is it? There are people who would pay a good deal to look as little like themselves.”",
    traveller: "“Welcome to {focus},” {kname} says, with a wink. “The hood is a beautiful touch. Nobody has asked where you are from, and nobody will.”",
    scholar: "“Welcome to {focus},” {kname} says. “The robe is admirable. A little more ink on the right cuff and nobody would ever question your degree.”",
    silk: "“Welcome to {focus},” {kname} says, and sweeps a bow. “The silk is superb. It suits you so well that I wonder whom it is imitating.”",
    armour: "“Welcome to {focus},” {kname} says, and does not smile. “An honest suit. It is rare, in this room, to see a costume that means exactly what it says.”",
  },
  mender: {
    rags: "“Welcome to {focus},” {kname} says, and takes your cuff. “Let me see to the hem. It is a small thing, and it will do you good to be seen to.”",
    traveller: "“Welcome to {focus},” {kname} says. “The cloak has been in the rain, I see. Sit by the stove, and let it dry, and tell me where it was.”",
    scholar: "“Welcome to {focus},” {kname} says. “The elbow, I think, and the left cuff. They are always the first to go. Sit, and I shall close them while you talk.”",
    silk: "“Welcome to {focus},” {kname} says. “There is a thread loose under the arm, and you have not noticed. It is the loveliest thing about you, and I shall fix it without comment.”",
    armour: "“Welcome to {focus},” {kname} says. “A cord is frayed at the left shoulder. It will hold today. I shall have it replaced before it matters, and you need not say anything at all.”",
  },
};

export const FAREWELL: Record<Stance, Dress> = {
  appraiser: {
    rags: "{Kname} sees you out with a nod, and the nod is the longest {kthey} has given today. “Come back when the hem has been turned,” {kthey} says, “and I shall tell you what it is worth to be remembered.”",
    traveller: "{Kname} sees you out with a flat palm on the door. “A good cloak,” {kthey} says. “Look after it. It is the only thing you own that has been paid for in full.”",
    scholar: "{Kname} sees you out with a nod at your cuffs. “The ink will wash out in a year,” {kthey} says. “What it recorded will not. That is the whole of what I would not appraise.”",
    silk: "{Kname} sees you out with a bow that costs something to make. “Mind the hem on the step,” {kthey} says. “Silk forgives nothing, and I should hate to see a good price go in the mud.”",
    armour: "{Kname} sees you out and hands back the weight of the day. “A fair suit,” {kthey} says. “It is the dents I like. They are the only part of armour that has ever told the truth.”",
  },
  warden: {
    rags: "{Kname} sees you out with a small, formal bow. “You broke no rule,” {kthey} says. “It is not a distinction I give often. I should like you to know that it is one.”",
    traveller: "{Kname} sees you out and hands back the cloak from its peg. “Lawful, outside,” {kthey} says. “Go well. The road has fewer rules, and none that is kind.”",
    scholar: "{Kname} sees you out and holds the door with two fingers. “In order,” {kthey} says. “Your robe is the only thing today that has not asked me for an exception.”",
    silk: "{Kname} sees you out with a second, lower bow than the first. “The silk was noted,” {kthey} says, “and forgiven. Be careful what you are forgiven for. It is a list that does not shorten.”",
    armour: "{Kname} sees you out and returns the blade, hilt first. “As it came,” {kthey} says. “I did not ask what it was for. I have never had to ask, with a scale jerkin.”",
  },
  masker: {
    rags: "{Kname} sees you out with a handful of cloth pressed in your palm. “A rag from the mask-room,” {kthey} says. “For the day you need to be someone else. It has never failed me, and it is the plainest thing here.”",
    traveller: "{Kname} sees you out and tugs the hood a fraction forward. “There,” {kthey} says. “Nobody will ask. Go as nobody to somewhere. It is the best secret I know.”",
    scholar: "{Kname} sees you out and dabs a little ink on the left cuff. “Authentic now,” {kthey} says, with a bow. “You were very nearly too clean to be believed.”",
    silk: "{Kname} sees you out with a final bow, and a smile that is, for once, only a smile. “If you are ever tired of the silk,” {kthey} says, “I have a very good grey, and a place by the stove.”",
    armour: "{Kname} sees you out and salutes, as one salutes a rival. “An honest suit,” {kthey} says. “Of all my customers, you are the one I would least like to meet in the dark, and the one I would most like to trust.”",
  },
  mender: {
    rags: "{Kname} sees you out with the hem closed and the thread cut. “It will hold,” {kthey} says. “Not for ever. Nothing is mended for ever. But it will hold for as long as someone needs it to.”",
    traveller: "{Kname} sees you out with the cloak dry and the seam restitched in grey. “So you will know it,” {kthey} says. “A mend is a signature, and I should like you to know whose hand it was.”",
    scholar: "{Kname} sees you out with both cuffs closed and a tiny stitch left at the elbow, in blue. “A reminder,” {kthey} says, “that the robe has been loved. Ink fades. A thread will outlast most opinions.”",
    silk: "{Kname} sees you out with the loose thread found and the under-arm closed, and says nothing of it. “Walk lightly,” {kthey} says. “Silk keeps no secret except the one it was woven to hold, and that one it keeps beautifully.”",
    armour: "{Kname} sees you out with the cord replaced and the knot a little different from the others. “Mine,” {kthey} says. “If it fails, you will know whose it was. I should like to be the last thing you think of, and the first to be forgiven.”",
  },
};
