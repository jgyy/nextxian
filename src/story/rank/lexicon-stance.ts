/**
 * How a keeper stands to the two things the rung reads: someone who reads a stranger’s rank first, and sex after, if at all; and someone who reads sex
 * first, and rank after it. Each has a woman’s road and a man’s, and the lines are written for both. Sixteen beats a stance, four to an approach, in the
 * order the rung’s own are written (spoken, practised, paid for, begun), and three for the hidden room. Slots: kname, kthey, kthem, ktheir, place, focus, relic.
 */
export type Reading = "rank" | "sex";

type Sixteen = [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
type Three = [string, string, string];

export const STANCE_BEATS: Record<Reading, Sixteen> = {
  rank: [
    "{Kname} says it without lowering {ktheir} voice: rank first, and sex after, if at all. {Kthey} learned the order the hard way and prefers to be the one who says it.",
    "“I read the rung before the face,” {kname} says. “It is faster, and it has never once led me to bar a door I should have opened.” {Kthey} has not been asked who it has led {kthem} to leave shut.",
    "{Kname} counts what a person has done and what they can do, and enters the sum. What they were born into is a second column, and {kthey} fills it in last and smaller.",
    "{Kname} first stood here because the place was short of someone who could do the work. “Nobody asked whose hands,” {kthey} says. “They only asked how many were left.”",
    "When a newcomer is rude, {kname} does not look at who they are. {Kthey} looks at what they have climbed, and is courteous to that, and the rudeness shrinks accordingly.",
    "{Kname} keeps {relic} in plain sight and uses it as a measure. “Everyone at {focus} knows that I judge by it,” {kthey} says. “I find it simpler than being fair.”",
    "{Kname} is quick to promote and slow to forgive. A person who has earned the next rung is given it on the day, and a person who has not is told so, kindly, in the same breath.",
    "{Kname} will tell you that the sect’s sorting by sex is a habit of the lazy. {Kthey} does not add that it is a habit of the tired, which is the commoner kind.",
    "What the rung has cost {kname} is a fact {kthey} counts among the debts. A name that was never asked, a decade of being addressed by a title and never by a name.",
    "“I would rather be wrong about a rung,” {kname} says, “than right about a sex. A rung can be climbed.” {Kthey} says it with the brightness of one who has done the climbing.",
    "{Kname} has watched a talented person be passed over for a place that ought to have been theirs, and has fixed that. {Kthey} has watched several more and has not yet found the time.",
    "{Kname} does not pity the ones the rung has left behind, and {kthey} will not be pitied. It is a kind of respect, and also a way of not looking.",
    "“It was made by people who needed a way to decide quickly,” {kname} says of the rung. “Rank is quick. Sex is quicker. I chose the one I could teach.”",
    "{Kname} knows how the rung began and tells it well, with a pause for the part about the first sex-based fee. {Kthey} thinks the fee was a mistake and says so on Thursdays.",
    "Now and then, {kname} says, someone arrives whose rung does not match their bearing. {Kthey} finds those the most interesting and gives them the long table, and the better cup.",
    "“A rung is a story people agreed to climb,” {kname} says. “A sex is a story they were handed. I have always liked the first kind better.”",
  ],
  sex: [
    "{Kname} says it as a mother says a prayer, without looking up: the body first, and the rung after. {Kthey} has found, over the years, that people mind it less than being surprised.",
    "“I read the person before the paper,” {kname} says. “A rung can be forged, and a sex cannot.” {Kthey} says it kindly, and does not ask what that has cost the ones who are neither.",
    "{Kname} keeps the place for those it was made for, and sees to it that nobody comes to harm in the wrong corner. {Kthey} calls that protection and is not wholly wrong.",
    "{Kname} first stood here because the elder before {kthem} said the place needed someone who knew where to put a stranger. “Put them where they’ll be safe,” {kthey} says.",
    "When a newcomer is rude, {kname} knows at once what the rudeness is for. {Kthey} has watched a hundred people sort themselves by it and does not hurry to correct them.",
    "{Kname} keeps {relic} on the shelf at {focus} and takes it down at the hour the sexes part. “Everyone knows what it means,” {kthey} says. “Nobody has the heart to say it.”",
    "{Kname} is slow to promote and quick to protect. A person who has earned the next rung is told to wait for the right hall, and a person who has not is told to wait for nothing.",
    "{Kname} will tell you that the sect’s sorting by rank is a habit of the proud. {Kthey} does not add that it is also the habit that has put {kthem} where {kthey} is.",
    "What the rung has cost {kname} is a thing {kthey} counts among the gifts. A shelf of {ktheir} own, a hall that knew {ktheir} name, and a seat kept warm in the right corner.",
    "“I would rather be kind about a sex,” {kname} says, “than clever about a rung.” {Kthey} says it with the steadiness of one who has been cleverly dismissed.",
    "{Kname} has watched a person climb above their station and be wrecked by it, and has set a rule against that. {Kthey} has watched several more climb, and cannot say which of them it was.",
    "{Kname} pities the ones the rung has left behind, and does not hide it. Some are grateful, and some leave, and {kthey} counts the second kind as a debt.",
    "“It was made by people who loved this place,” {kname} says of the rung. “They were not wrong to be careful. I would only ask you to notice what the care is for.”",
    "{Kname} knows how the rung began and tells it fondly, with a pause for the part about the first fee. {Kthey} thinks the fee was a kindness and says so, on Thursdays, to anyone who has not objected.",
    "Now and then, {kname} says, someone arrives whose body does not match the hall they were sent to. {Kthey} puts them in the passage, with a lamp and a kettle, and hopes the sect will learn.",
    "“A sex is a house people are born in,” {kname} says. “A rung is a house they build. I have always been more afraid for the ones who have to build both.”",
  ],
};

export const STANCE_DEEP: Record<Reading, Three> = {
  rank: [
    "{Kname} follows you to the head of the stair and stops with a hand flat on the rail. “I read this one by its rung,” {kthey} says, “and it was a rung I never climbed. I should like to see what is on it.”",
    "{Kname} comes down behind you with the lamp held steady. {Kthey} does not tell you to turn back, and does not tell you to go on. {Kthey} counts the steps as {kthey} would a column.",
    "{Kname} sits on the bottom step and does not speak for a while. “I have judged every person on this mountain by what they climbed,” {kthey} says, “and never asked what was under the climbing.”",
  ],
  sex: [
    "{Kname} stops at the head of the stair and does not come down. “I was told this was not a place for people like me to see,” {kthey} says. “I believed it, because it was kind.”",
    "{Kname} follows you down with the lamp held too high, as one carries a light into a room one does not know. {Kthey} says nothing, and {ktheir} hand is not steady.",
    "{Kname} stands very still at the bottom. “I put people where they would be safe,” {kthey} says. “I did not ask whether safe was where they wished to be. I should like to hear it.”",
  ],
};
