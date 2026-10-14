import type { Stance } from "./lexicon-custom";

/**
 * How a keeper stands to the custom of the road: a woman or a man, holding it as it was handed down or bending it. Sixteen beats a stance, four to
 * an approach, in the order the custom’s own are written (spoken, practised, paid for, begun), and three for the hidden room. Slots: kname, kthey,
 * kthem, ktheir, place, focus, relic.
 */
type Sixteen = [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
type Three = [string, string, string];

export const STANCE_BEATS: Record<Stance, Sixteen> = {
  woman_holds: [
    "{Kname} says the rule the way one says a grace, without looking up. It was said to {kthem} in the same words by a mother who had it from hers, and {kthey} does not mean to be the one to drop it.",
    "“It is not unkind,” {kname} says, and then, because you have not argued, says it again. {Kthey} has heard it argued, and has answered it already, in {ktheir} own head, many times.",
    "{Kname} keeps the custom as one keeps a house: well, daily, and for the sake of those under the roof. {Kthey} will tell you that a house with no walls is a field.",
    "When you ask why, {kname} looks at {ktheir} hands. “Because I was taught,” {kthey} says, “and because the ones who taught me were not fools, and because I have watched what comes of leaving it.”",
    "{Kname} keeps {relic} where {kthey} can reach it, and takes it up without thinking whenever the rule is mentioned. It has the look of a thing {kthey} has held in hard weather.",
    "{Kname} corrects a girl’s grip in passing, gently, so that the girl will not be corrected by someone less gentle. It is the commonest kindness of the place, and the most exact.",
    "To a visitor who bends the rule, {kname} offers tea and no comment. The comment follows later, in a lower voice, to someone else, and is never unkind and never withdrawn.",
    "{Kname} is quick to see who in the room is at risk of a mistake. {Kthey} steers them away from it with an errand, a cup, a word at the door, and it is called manners and is a defence.",
    "What the rule has cost {kname} is not a secret, and {kthey} does not hide it. A name unsigned, a choice not offered, a decade of being thanked. {Kthey} counts it, and says it was fair.",
    "“I would not wish it on anyone,” {kname} says, “and I would not take it from them, either.” {Kthey} says this to the wall, and the wall, which has heard it before, does not answer.",
    "{Kname} has watched a girl try the rule and be broken by it, and a girl try it and be broken by the leaving of it, and has concluded that the first is the lesser grief. {Kthey} may be right.",
    "{Kname} will not be pitied, and it takes some care not to. {Kthey} has the pride of one who has carried a thing a long way and is not willing to be told it was unnecessary.",
    "“It was made by people who were afraid,” {kname} says, “and the fear was reasonable. I would only ask you to notice that it is still reasonable, in some rooms.”",
    "{Kname} knows the history of the rule, or the sect’s version of it, and tells it without ornament. The gaps in it {kthey} fills with things {kthey} believes and does not claim to know.",
    "Now and then, {kname} says, someone comes who might be an exception. {Kthey} says it without hope and without scorn, and watches to see which of the two you hear.",
    "“A custom,” says {kname}, “is a story people agreed to tell until it came true. I have told it for thirty years. I should like to think I told it well.”",
  ],
  man_holds: [
    "{Kname} says the rule with the ease of one who has never had to defend it. It is simply how a thing is done, and {kthey} is a little surprised, each time, to hear anyone ask.",
    "“It is the old way,” {kname} says, and sees from your face that this is not a reason, and tries again. {Kthey} is honest enough to be at a loss for a second answer.",
    "{Kname} keeps the custom as one keeps a promise made on one’s behalf: dutifully, and without remembering the moment of promising. {Kthey} would be uneasy to be released from it.",
    "When you ask why, {kname} turns {relic} over in {ktheir} hands. “My father,” {kthey} says, and stops, and begins again. “It was kept before me, and I have not found a reason to break it.”",
    "{Kname} holds the door for a woman with a slight bow, and for a man with a nod, and for anyone else with a hesitation that {kthey} hopes is not noticed. It is.",
    "In the daily work {kname} is generous, and does not notice the generosity is a kind of fence. The ones inside it are well fed, well housed, and unable to leave without being thanked.",
    "To a visitor who bends the rule, {kname} is courteous and slightly hurt. {Kthey} would have been glad to be asked first, and says so, as a man says he is not offended.",
    "{Kname} keeps the peace by being agreeable. A great many people have been grateful for it, and {kthey} has never had to find out what the peace was made of.",
    "What the rule has cost {kname} is a thing {kthey} does not look at. There is a brother {kthey} does not speak of and a daughter {kthey} speaks of too often, and the two are connected.",
    "“I am told it is unjust,” {kname} says, with the air of one reporting the weather. {Kthey} does not say whether {kthey} believes it, and there is a silence in which you see {kthem} not saying it.",
    "{Kname} has seen a rule bent and no harm come of it, and a rule bent and a house come apart, and cannot say which memory is the more reliable. {Kthey} holds to the rule as to a rope in the dark.",
    "{Kname} is not unkind, and wishes it to be known. {Kthey} would give a stranger the coat from {ktheir} back, and has never once asked whether the stranger could keep it.",
    "“It was made,” says {kname}, slowly, “by men who had seen disorder, and wanted to prevent it.” {Kthey} hears the word “men” as {kthey} says it, and does not take it back.",
    "{Kname} tells the story of the rule the way the sect tells it, and when you ask a question the story does not cover, looks at the ceiling for the first time in your acquaintance.",
    "Once or twice, {kname} admits, {kthey} has met someone who made the rule look foolish. {Kthey} says it with a wince, as of a joint that has not healed, and without anger.",
    "“A custom,” says {kname}, “is what is left when people stop arguing. I have never argued. I thought someone else would.”",
  ],
  woman_bends: [
    "{Kname} says the rule the way one repeats a bad song, with a note of private amusement. {Kthey} learned it as everyone did, and has been unlearning it with a patience that frightens the sect.",
    "“It is not the whole of the rule,” {kname} says, “only the part that is written.” {Kthey} lets this stand, and pours your tea, and lets you work out the rest.",
    "{Kname} bends the custom as a good gardener bends a branch: a little each year, in the direction it already wants to go, and never so much that it snaps.",
    "When you ask why, {kname} laughs, short and low. “Because I was told I could not,” {kthey} says, “and I have a particular failing, which is that I find out.”",
    "{Kname} keeps {relic} on a shelf where it is visible and ordinary. It is {ktheir} favourite trick: to hide the quietly improper thing in the most proper place.",
    "{Kname} corrects a girl’s grip, and then, when no one is looking, corrects it back. The girl will think she is mistaken. In ten years she will remember which was right.",
    "To a visitor who obeys the rule, {kname} is polite and a little sad, like a gardener watching someone fail to notice the open gate. {Kthey} says nothing, and leaves it open.",
    "{Kname} knows which clerk will look away and which will not, and plans accordingly. There is a ledger of favours in {ktheir} head, balanced to the copper.",
    "What the bending has cost {kname} is a place at certain tables, a title {kthey} would have had, and a sister’s good opinion. {Kthey} lists them without self-pity, as one counts wood for winter.",
    "“I do not think I am brave,” {kname} says. “I think I am stubborn, and I have been lucky. I should not like you to confuse the two when you are deciding what to do.”",
    "{Kname} has seen the bending fail, and a woman pay for it, and the memory is the weight {kthey} carries. {Kthey} goes on, and says the weight is why.",
    "{Kname} is tired, and not ashamed to say so. A road you make alone is a long road, and every year the stones are heavier, and every year a few more come to walk it.",
    "“The people who made it were not fools,” says {kname}. “They were frightened, and they wrote their fear as a rule, and the rule outlived the fear. That is all that most rules are.”",
    "{Kname} knows the history of the rule, the sect’s and the other one, kept in a box under a bed. {Kthey} tells you only the half that will be believed, and holds back the rest for later.",
    "Often, {kname} says, someone comes who might be an exception, and the best of them turn out to be the rule’s first honest reading. {Kthey} says it like a woman who has been counting.",
    "“A custom,” says {kname}, “is a story that people agreed to tell until it came true. I mean to tell another, and tell it so well that they agree to that one instead.”",
  ],
  man_bends: [
    "{Kname} says the rule with an ironic tilt of the head, like a man quoting a bad review of himself. {Kthey} was raised to it, as everyone was, and has spent some years being embarrassed.",
    "“It is the old way,” {kname} says, “and I use that as a reason against it. A thing that cannot give a better reason than its age is a thing I think we are allowed to ask about.”",
    "{Kname} bends the custom from where {kthey} stands, which is a place of advantage. {Kthey} knows it, and spends the advantage carefully, as one spends a coin one did not earn.",
    "When you ask why, {kname} looks at {relic}. “Because I saw it cost someone,” {kthey} says, “and because I could pay, and they could not. It seemed the least I might do.”",
    "{Kname} holds the door for everyone alike, and has been told it is rude, and does not stop. The first week it caused an incident. The second week it caused a habit.",
    "In the daily work {kname} gives the signing hand to whoever is best at the task and the credit to whoever did it. The clerks have started to ask for the credit by name.",
    "To a visitor who obeys the rule, {kname} is courteous and slightly rueful. {Kthey} would rather be asked than thanked, and would rather be asked a question than thanked for an answer.",
    "{Kname} uses {ktheir} standing as a screen, stepping in front of those who would be struck. It works, and {kthey} dislikes how well it works, and does it anyway.",
    "What the bending has cost {kname} is smaller than what it has cost others, and {kthey} is careful to say so. A raised eyebrow, a lost invitation, a quiet word from a brother.",
    "“I am not the person to lead this,” {kname} says. “I am the person to stand aside while someone else does. I am practising. It is harder than it looks.”",
    "{Kname} has seen a rule bent too fast, and the house come apart, and the lesson is the pace. {Kthey} goes slowly, and is accused of cowardice, and does not deny it.",
    "{Kname} does not expect gratitude and receives none. It is possible, {kthey} says, that this is the only reliable sign that the thing is being done properly.",
    "“It was made,” says {kname}, “by men who wanted order, and the men are dead, and the order is a ghost. I have decided that ghosts are not to be obeyed, only fed.”",
    "{Kname} tells the story of the rule in the sect’s version first, and then in the other, and watches your face as the two settle. {Kthey} finds it the most useful test of a visitor.",
    "Often, {kname} says, someone comes who might be an exception, and {kthey} finds that the exceptions are nearly always the sensible people. {Kthey} says this as a man announcing a discovery.",
    "“A custom,” says {kname}, “is what is left when people stop arguing. I intend to start. I should like company.”",
  ],
};

export const STANCE_DEEP: Record<Stance, Three> = {
  woman_holds: [
    "{Kname} follows you to the head of the stair and stops there, with a hand flat on the rail. “I wondered who would find it,” {kthey} says, “and I hoped it would not be someone who meant harm.”",
    "{Kname} comes down behind you, slowly, with the lamp. {Kthey} does not tell you to turn back, and does not tell you to go on. {Kthey} watches your face as the room comes up.",
    "{Kname} sits on the bottom step, as one does at a bedside. “I have kept it thirty years,” {kthey} says, “and told no one. I am too old to be ashamed. I should like it known that I was not.”",
  ],
  man_holds: [
    "{Kname} stops at the head of the stair and does not come down. “I have never been below,” {kthey} says, in a voice that does not carry. “My predecessor said it was not mine to see.”",
    "{Kname} comes down after you with the lamp held too high, as one carries a light into a room one does not know. {Kthey} says nothing, and you notice that {ktheir} hand is not steady.",
    "{Kname} stands very still at the bottom. “I was told there was nothing here,” {kthey} says. “I believed it. I should like to know who it was that I was believing.”",
  ],
  woman_bends: [
    "{Kname} is at the head of the stair before you, lamp in hand. “You took your time,” {kthey} says. “I have kept this door oiled for six years against the day someone came who could read it.”",
    "{Kname} goes first, with the lamp, and points out the loose stone with the toe of {ktheir} shoe. {Kthey} has done this before, many times, for others, and tonight it is for you.",
    "{Kname} puts a hand on the nearest shelf, as on a friend’s shoulder. “Here it is,” {kthey} says. “I did not make it. I only refused to let it be forgotten, which is the whole of my talent.”",
  ],
  man_bends: [
    "{Kname} is waiting on the stair, with a lamp and an apologetic air. “I ought to have told you at the door,” {kthey} says. “I was afraid you would be the sort who talks. You are not, and I am sorry.”",
    "{Kname} goes down ahead of you, ducking the beam, and describes the room as though describing a debt. “It is not mine,” {kthey} says. “I only hold the key, which is the same as holding the blame.”",
    "{Kname} stands by the shelf with {ktheir} hands behind {ktheir} back, as if afraid to touch it. “I have wanted to show someone for years,” {kthey} says. “I did not know it would be so hard to look.”",
  ],
};
