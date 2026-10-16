/**
 * How a keeper stands to dress and to the person who has come in it, in four ways: an appraiser, who prices a hero by the cloth and is rarely wrong; a
 * warden of the sumptuary rules, who knows what each person may wear and tells them; a masker, who lends faces and thinks of dress as a door; and a mender,
 * who holds that cloth keeps what people forget. Sixteen beats a stance, four to an approach, in the order of the crafts’, and three for the hidden room.
 * Slots: kname, kthey, kthem, ktheir, place, focus, relic, garb.
 */
export const STANCES = ["appraiser", "warden", "masker", "mender"] as const;
export type Stance = (typeof STANCES)[number];

type Sixteen = [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
type Three = [string, string, string];

export const STANCE_BEATS: Record<Stance, Sixteen> = {
  appraiser: [
    "{Kname} prices a stranger from the door. The collar gives the year’s income, the cuffs the habits, the hem the road, and {kthey} adds them in {ktheir} head before the stranger has said a word.",
    "“I do not ask what you can afford,” {kname} says. “Cloth tells me. I ask what you are willing to be seen paying, which is another sum, and the one that matters.”",
    "{Kname} will name a price for {garb} that is fair, and then a second price for the person asking. {Kthey} regards this as the only honest way to run a counter, and has never been cheated by it.",
    "The scales at {place} were given by a merchant who wished to be remembered as just. {Kname} keeps them oiled, and weighs the wearer’s coin before the cloth, and says that is the more instructive half.",
    "{Kname} can tell a bought robe from an inherited one at forty paces. The first is stiff with pride, {kthey} says, and the second sits as though it were being forgiven for something.",
    "At {focus} the prices are chalked on slate in a code only {kname} can read. A fine hand means a fair price, a hurried hand means an insult, and a hand that shakes means the customer has been recognised.",
    "{Kname} has a ledger of every garment {kthey} has appraised, with the date and the sum and the wearer’s face drawn in the margin. It is the finest portrait gallery on the mountain, and nobody has ever been shown it.",
    "“A man is worth his coat,” {kname} says, “and no more, and no less, and only for as long as he is wearing it.” {Kthey} says it without cruelty, as one reports the weather.",
    "{Kname} does not haggle. {Kthey} names a number, and watches your face, and if the face moves {kthey} names a smaller one; the whole art, {kthey} says, is to be generous to people who are about to be insulted.",
    "The appraiser’s eye is trained on a bolt of {garb} laid on the counter and a stranger’s sleeve held up beside it. {Kname} says the two never agree, and the difference is the price of a lie.",
    "What the trade costs {kname} is the habit of seeing worth in everything. {Kthey} cannot watch a child play without a rough estimate, and has stopped apologising to the child’s mother.",
    "“The first appraiser,” {kname} says, “was a pawnbroker who lent a prince the price of a coat and was repaid with a kingdom.” {Kthey} tells it as a warning, and a proposal.",
    "{Kname} will say that value lives in the eye of the buyer and the thumb of the seller, and that the cloth, poor thing, is only the place where the two meet and agree to be wrong.",
    "At {focus} {kname} turns {relic} in the light and weighs it in one hand. “Worth nothing,” {kthey} says, “to anyone but you. That is the dearest thing I handle, and the only one I never price.”",
    "An appraiser pays for the post in warmth. {Kname} says it plainly: a person who prices everything is invited nowhere, and {kthey} has made a habit of dining alone, with a very good cup.",
    "{Kname} says the sect began as a bargain, struck at a gate between a stranger and a keeper, and that every robe since is a footnote to it. {Kthey} has read the footnotes aloud, and finds them unexpectedly tender.",
  ],
  warden: [
    "{Kname} knows the sumptuary schedule of {place} by heart, and recites it to arrivals without being asked. “Every colour has a rank,” {kthey} says, “and every rank has a colour. I do not make the rule. I see that it is kept.”",
    "“I do not ask who you are,” {kname} says. “I ask what you are wearing, and whether you are entitled to it. The first would take an hour. The second I can answer from here.”",
    "{Kname} charges nothing for a ruling, and expects the rule to be obeyed. A robe too fine for its wearer is not confiscated, only lent to the hall for a season, and returned with a note.",
    "The schedule at {place} was drafted by a magistrate who had been embarrassed at a banquet. {Kname} keeps the original on the wall, and the stain on it, and says the stain is the part that holds the whole thing up.",
    "{Kname} does not call {garb} a cloth. {Kthey} calls it a statement of intent, and says the sect has never been wrong about one. {Kthey} says it with a flat patience that has seen a great many sleeves.",
    "At {focus} a ruling is posted on a board, and the board is read as other places read the weather. {Kname} updates it each dawn, and the whole yard reorders itself by noon to match.",
    "The warden’s duty is a hundred small corrections. A sleeve too long, a belt too bright, a hood worn indoors: {kname} notes each with a nod and a pencil, and has never raised {ktheir} voice, because a pencil is louder.",
    "{Kname} did not choose the rule. “It was left to me,” {kthey} says, “by a warden kinder than I am. I keep it as he did, with the shutters open, in case someone wishes to be told.”",
    "A warden’s whole skill is to be fair to the schedule. What the schedule leaves out {kname} knows, and is sorry for, and does not enter; and the ledger at {focus} has a column for it, headed only with a dash.",
    "{Kname} has a way of looking at a sleeve and a face at once, and weighing the first. At {focus} new arrivals learn to wear their cuffs forward, as one learns to stand with the sun behind.",
    "What the rule costs {kname} is the habit of watching people dress. {Kthey} cannot see a stranger now without seeing what the stranger is allowed to be, and what they have, quietly, arranged to look like.",
    "“The first rule of the sect,” {kname} says, “was that nobody should be mistaken for anybody else. The rest of the schedule is what grew up around the mistake.” {Kthey} says it with relish.",
    "{Kname} will tell you the schedule is a mercy. A person who is told what they may wear knows where they stand, {kthey} says, and may be bowed to or not by someone else’s fault, and never by their own.",
    "At {focus} {kname} holds {relic} to the lamp and reads the date stitched on it. “It was lawful when it was made,” {kthey} says. “It is lawful still. That is more than I can say of most of the people who have worn it.”",
    "A warden pays for the schedule in friends. A person who knows what everyone may wear cannot be told from one who is merely critical, and {kname} has stopped being invited to weddings, and has begun to receive their guests instead.",
    "{Kname} will say the sect began with a rule against going about naked, and that everything since is footnotes. {Kthey} has read the footnotes and likes them, and has been known to quote one at a funeral.",
  ],
  masker: [
    "{Kname} lends faces. It is a trade as old as cloth, {kthey} says, and a deal more honest, because a borrowed face at least admits to being borrowed. At {focus} the racks are hung with them, and nobody will say whose.",
    "“I do not ask who you are,” {kname} says. “I ask who you would like to be on the way in. A door only opens for the person it expects, and I am in the business of making you someone it expects.”",
    "{Kname} charges for a disguise by the hour and for the lie by the line. A hero who wishes to be taken for a clerk pays a clerk’s rate, and a hero who wishes to be taken for a prince pays for the doubt that comes after.",
    "The mask-room at {place} was begun by a player who could not afford a stage. {Kname} keeps the first mask, a thing of wax and soot, and says that it has been refused every part it was ever offered.",
    "{Kname} does not call {garb} a cloth. {Kthey} calls it a first sentence, and says a hero who knows how to begin a sentence can finish almost any story. {Kthey} says it with a smile that is never quite the same twice.",
    "At {focus} the mirrors are hung at angles, so that a hero sees themselves as the room will. {Kname} says the whole art is to see yourself as others do, and then to cheat, very slightly, in your own favour.",
    "The masker’s duty is a hundred small lies, told in cloth. A collar turned, a hem let down, a sash tied on the wrong side: {kname} makes each, and keeps a book of the ones that were noticed, to learn from.",
    "{Kname} did not choose the trade. “I was dressed as a ghost for a play,” {kthey} says, “and nobody has asked me to take it off. I have grown very fond of the quiet.”",
    "A masker’s whole skill is to be present as someone else. What {kname} is under the costumes {kthey} knows, and is fond of, and does not wear; and the stand at {focus} is bare in one place, where {kthey} hangs the self.",
    "{Kname} has a way of looking at a stranger and a mirror at once, and deciding which is the better liar. At {focus} the new arrivals learn to stand a little to one side, so the mirror cannot catch them out.",
    "What the trade costs {kname} is the habit of being anyone. {Kthey} cannot enter a room now without taking its measure, and a face that fits it, and has begun to find the room’s own face rather dull.",
    "“The first mask,” {kname} says, “was a mourner’s veil, lent to a widow who had to be brave for a morning. She was brave for forty years. The mask is the part that never took itself off.”",
    "{Kname} will tell you a disguise is a kindness. A person who is allowed to be someone else for an hour is allowed to rest from themselves, {kthey} says, and a good rest is the difference between a villain and a saint.",
    "At {focus} {kname} turns {relic} in {ktheir} fingers and holds it before {ktheir} own face, and then yours. “It fits you better,” {kthey} says. “I shall not tell you what that means. It would spoil the wearing.”",
    "A masker pays for the mask in being known. {Kname} says it plainly: nobody has seen the face under the costumes in thirty years, and {kthey} has begun to suspect, with some amusement, that there was none.",
    "{Kname} says the sect began as a masquerade, and that everything since is an attempt to remember who took off which face. {Kthey} has read the records and finds them an admirable farce, to which {kthey} has added a line.",
  ],
  mender: [
    "{Kname} mends. It is a plain word for a plain act, and {kthey} says that is the whole of the creed: that what is torn can be closed, and that closing it with care is the nearest thing to love most people will be offered in a lifetime.",
    "“I do not ask what you are wearing,” {kname} says. “I ask what it has been through. The first is only a robe. The second is a life, and I mend lives, in a small way, with needle and thread and patience.”",
    "{Kname} charges for a mend by the stitch and not by the garment. A patch on a hero’s elbow costs less than a patch on a hero’s heart, and {kthey} will tell you which you have brought, from the look of the seam.",
    "The mending-room at {place} was begun by a widow who could not afford new cloth for her children. {Kname} keeps her needle in a case on the wall, and has never used it, for fear of mending the wrong thing.",
    "{Kname} does not call {garb} a cloth. {Kthey} calls it a witness, and says that every tear in it is a deposition, and that a hero who learns to read the rents will know all that has happened to the one who wore it.",
    "At {focus} the mended garments are hung in rows, each tagged with the date it was brought and the date it will be wanted. {Kname} says the second date is always wrong, and the tags are the only honest thing in the room.",
    "The mender’s duty is a hundred small restorations. A seam closed, a button found, a hem let up: {kname} makes each, and keeps a drawer of the buttons that were not claimed, and names each after its owner’s last words.",
    "{Kname} did not choose the work. “My mother mended,” {kthey} says, “and her mother. I had no more choice than the thread has. I have learned to be glad of it, and to hold a seam very still.”",
    "A mender’s whole skill is to leave the mend visible. What was torn {kname} closes, and does not hide, and the stitches at {focus} are worked in a contrasting thread, so the garment shows its history and is the better for it.",
    "{Kname} has a way of running a thumb along a seam and knowing the hour it gave. At {focus} the arrivals learn to hand over their sleeves without being asked, as one hands over a wrist to a physician.",
    "What the trade costs {kname} is the habit of seeing breaks. {Kthey} cannot watch a person walk without noting the place the walk was repaired, and has stopped telling people, because it is not a thing one can say politely.",
    "“The first mend,” {kname} says, “was a rag tied round a cut hand, and the cloth is still in the family, and so is the scar. I do not know which is the more valuable. I have never been allowed to choose.”",
    "{Kname} will tell you a mend is a promise. A garment that has been closed once will be closed again, {kthey} says, and a person who has been mended will, in time, learn to do it for another, which is how the sect, in its best moments, began.",
    "At {focus} {kname} turns {relic} in the lamp and finds the place it was joined. “Here,” {kthey} says, “and here. It was broken twice and kept. That is not weakness. That is the whole of what I believe about people.”",
    "A mender pays for the work in an aching back, and in the people who do not come back. {Kname} keeps the shirts of those who died owing a mend, folded on a high shelf, and dusts them on the first of each month.",
    "{Kname} says the sect began as a circle of people sewing, and that everything since is an attempt to remember who was holding which end of the cloth. {Kthey} says it quietly, and adds that {kthey} is still holding {ktheir} end.",
  ],
};

export const STANCE_DEEP: Record<Stance, Three> = {
  appraiser: [
    "{Kname} unlocks a cupboard behind the counter and takes out a ledger bound in plain grey, the only one in the house with no price on the spine.",
    "In it, in {ktheir} own hand, are listed the garments {kthey} refused to value: a christening gown, a dead soldier’s shirt, a bride’s unworn veil, each with a line that says only “not for sale, not for pricing, kept” and a date.",
    "{Kname} says every appraiser has such a book, and that it is how appraisers know they are not only appraisers. {Kthey} closes it, and puts it back, and says that you are the first to be shown it.",
  ],
  warden: [
    "{Kname} unlocks a drawer in the desk and takes out a folded sheet of paper, brown with age, the only item in the room not entered in the schedule.",
    "On it, in a hand {kthey} says is {ktheir} predecessor’s, are listed the exceptions: the cases where the rule was broken, kindly, and the wearer let go, with a note of the reason and the date.",
    "{Kname} says every warden has such a list, and that it is how wardens know they are not only wardens. {Kthey} lays it on the table, and says you are the first to whom it has been read.",
  ],
  masker: [
    "{Kname} opens a trunk at the back of the mask-room and lifts out a face of plain white linen, with no features drawn on it, and no eyes cut.",
    "It is the only one in the room nobody has ever been lent, {kthey} says. It is for the day a hero wishes to be no one, and has been made, and re-made, and kept clean for it, for forty years.",
    "{Kname} says every masker has such a face, and that it is how maskers know they are not only maskers. {Kthey} holds it out, and says you are the first who has been invited to look at it.",
  ],
  mender: [
    "{Kname} unlocks a chest at the foot of the mending-bench and takes out a small bundle tied in a faded ribbon. The ribbon has been mended so often it is more thread than ribbon.",
    "Inside lie a child’s sock, a soldier’s button, a bride’s glove with one finger gone, and a scrap of grey cloth marked with a name no one remembers. Each, {kthey} says, was brought to be mended, and never claimed.",
    "{Kname} says every mender has such a bundle, and that it is how menders know they are not only menders. {Kthey} ties the ribbon again, and says you are the first who has been shown the knot.",
  ],
};
