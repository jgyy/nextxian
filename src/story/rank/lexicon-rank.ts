/**
 * The eight rungs of the sect, one for every realm, and what each does with the two things it reads in a stranger: the rung they have climbed and the
 * gender they were born into. The sect says it reads rank, and at the bottom of the ladder it reads sex openly; the higher the rung, the less it admits to
 * reading either, and the more it leans on both. Every rung has sixteen beats, four for each of a road’s four approaches, in the order the approaches are
 * written: the rule as it is spoken, as it is practised, as it is paid for, and as it began. The hidden room has three more. Slots: place, kname, relic, focus.
 */
export const RUNGS = ["roll", "novices", "pairing", "seats", "portraits", "severing", "table", "column"] as const;
export type Rung = (typeof RUNGS)[number];

/** The rung of each realm, from Mortal to Ascendant. */
export const rungOf = (realm: number): Rung => RUNGS[realm];
export const realmOfRung = (rung: Rung): number => RUNGS.indexOf(rung);

/** What the rung is, as a hero is told it at the door of the hall. */
export const RUNG_NAME: Record<Rung, string> = {
  roll: "the roll of hands",
  novices: "the novices’ halls",
  pairing: "the pairing board",
  seats: "the council seats",
  portraits: "the soul-portraits",
  severing: "the severing day",
  table: "the companions’ table",
  column: "the last column",
};

/** Whether a keeper reads a stranger’s rank before their sex, or their sex before their rank, and the keeper’s own gender. */
export const STANCES = ["woman_rank", "man_rank", "woman_sex", "man_sex"] as const;
export type Stance = (typeof STANCES)[number];
export const stanceReadsRank = (s: Stance) => s.endsWith("_rank");
export const stanceGender = (s: Stance): "woman" | "man" => (s.startsWith("woman") ? "woman" : "man");

type Sixteen = [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
type Three = [string, string, string];

export const RUNG_BEATS: Record<Rung, Sixteen> = {
  roll: [
    "The roll has three columns. Water is for women, loads are for men, and spare is for whoever the clerk cannot place, and spare is the longest column and the lowest paid.",
    "A mortal has no rank to be read, so the roll reads sex alone. At {focus} the question is never what you can carry, only which column you were written into.",
    "Water is paid by the day and loads by the sack. A pail is counted as nothing and a sack as something, and both are carried the same distance.",
    "The roll was begun by a gatekeeper who wrote down every hand he fed. The columns came in the first lean year, when the mountain had more hands than rice.",
    "A mortal may rise one step in a life: from water to kitchen, from loads to gate. The step is given for years of service and arrives in the year the clerk remembers.",
    "The step at {focus} is a bench, a hook for an apron, and the right to sit at noon. A woman who has it is called steady. A man who has it is called trusted.",
    "Mortals are called auntie, uncle, sister and brother at the age the roll thinks they ought to be. The names tell the sect how much may be said in front of them.",
    "The sleeves eat first, then the gate-hands, then the kitchen, then the rest. The order has no sex in it at all. It has only the grey of a sleeve.",
    "Whoever gathers a thread of qi is struck from the roll that morning and written in the sect’s own book by evening. A water-girl has been called Sister by the hall before dusk.",
    "Nobody on the roll can say how far it is from water to the first breath of qi. Everyone can say how far it is from loads to the gate, and it is nine steps.",
    "The clerk at {focus} marks the day’s hands in a ledger ruled with three red lines. A fourth, the clerk says, was never needed until this year.",
    "A hand that cannot be placed is kept at {focus} until the clerk decides. The clerk decides slowly, and in the meantime the spare column is fed, thinly.",
    "The oldest roll hangs in the gate-lodge, and it has no columns. It lists each hand once, by name and by what it carried, and the clerks call it a rough draft.",
    "The columns were ruled the year the first sleeve was sent down to the village for a bride, and the village sent up a roll of hands in return.",
    "At {focus} every hand is counted at dawn and again at dusk. It is always the same hands, and a column is never found short by anyone who can sign.",
    "‘A hand is a hand,’ says the roll-song, ‘until the sleeve comes by.’ The water column sings it on the way to the well and the loads on the way back.",
  ],
  novices: [
    "There are two halls and a passage between them. The women sleep in the white hall, the men in the grey, and anyone else sleeps in the passage until the hall-master decides.",
    "A novice is ranked by the days since their first breath, not by their sex. At {focus} the roll says so in writing, and the bath hours say something different.",
    "The bath is hot for the grey hall at dawn and for the white hall at dusk. Qi is gathered best in the morning, the sect says, and the sect has never asked why.",
    "The halls were built the year the sect took in its first thousand sleeves. Before that a novice slept wherever the master’s room had a corner.",
    "A novice who gathers faster than her hall is moved up a bench, and a novice who gathers faster than his is moved up two. The sect calls the difference ‘encouragement’.",
    "At {focus} the white hall is taught to gather low, at the belly, and the grey hall to gather high, at the chest. The first breath is the same breath in both.",
    "Seniority by breath is the first law of the halls. A woman with four hundred days is owed a bow by a man with one hundred, and the bow is paid in the hall and forgiven in the yard.",
    "The hall-mother and the hall-master dine together, and the novices watch who passes the salt. By the end of the first year they can tell which of them keeps the roll.",
    "A novice who cannot gather in a year is sent back down to the roll with a letter. The letter is the same for every sex, and the road down it is not.",
    "The sleeves of the novices are grey, and each tie is knotted by the hall that owns it. A knot from the white hall is known across the courtyard, and so is one from the grey.",
    "At {focus} the first breath is counted in front of the hall. A girl’s is called ‘quick’ and a boy’s is called ‘strong’, whichever it was.",
    "A novice with no hall of their own is called a ‘passage’ for the first season, and the name is meant kindly. It has not yet failed to stick.",
    "The founder’s own breath was gathered alone, on a ledge, in the rain. The sect’s first rule was that no one else should have to do it that way.",
    "The first dormitory was a single long room with a curtain down the middle. The curtain was a kindness and then a custom, and nobody can say in which year.",
    "A bench at {focus} is worn into two shallow dips, one on each end. The middle is smooth, and is where the passage-novices sit, and are rarely seen to rise.",
    "‘Gather where you are,’ says the novices’ rhyme, ‘and rise where you are told.’ It is sung in two verses, and the verses do not rhyme with each other.",
  ],
  pairing: [
    "Every foundation-builder is paired for a year, one against one, and the pairs are chosen by the board. The board pairs by realm first, and by sex second, and by fee third.",
    "The rule at {focus} is that no one is paired below their foundation. The practice is that no one is paired below their sex, and the board calls the second a courtesy.",
    "A pair across the sexes costs a fee, paid by the one who asked. A pair across a realm costs nothing and is refused more often.",
    "The board began as a wooden frame for tallying bouts. Pairs were drawn by lot until the year a woman drew a man and the lot was found, on inspection, to be lopsided.",
    "A woman paired with a woman spars from the first bell. A man paired with a man spars from the second. The bell between them is the time they take to find out who matters.",
    "At {focus} a master who keeps a woman is said to ‘keep a daughter’, and one who keeps a man to ‘keep a successor’. A master who keeps both is thought to be hedging.",
    "The foundation is a floor, and the board stands on it. A builder with a deeper foundation may ask for a pair above their station, and the board will hear it, on a Thursday.",
    "Pairs are announced at dusk, name against name. The crowd goes silent for a woman against a man, and the silence is not respect.",
    "A pair that spars beyond its realm is fined by the board in qi. A pair that spars beyond its sex is fined by the crowd in something the board does not count.",
    "The board has a column for ‘other’, and it has been empty for sixty years. The clerk at {focus} says it is not empty, only unfilled, and keeps the chalk wet.",
    "Master’s pairs are drawn from the board’s top rows, and the top rows are filled by whoever has been sparring longest. The longest are men by seven to one.",
    "At {focus} a bout is scored by the older of the two masters watching. An older master scores a woman’s bout by grace and a man’s by weight, and calls it taste.",
    "The foundation stone is laid once, and no builder lays it twice. The board’s oldest rule is that a foundation is not a sex, and the rule is carved above the door.",
    "The first pairs were two friends who wanted to learn together, and the board was a plank for hanging their names. It has not been that simple since.",
    "A pair that is refused the fee may spar at {focus} by agreement, off the board, in the yard behind the kitchen. The yard has a very good record and no ledger.",
    "‘Lay it level,’ the builders say, ‘and the weight will find its own.’ The board has never been asked whose weight, and the builders are too polite to say.",
  ],
  seats: [
    "A core cultivator is given a seat. The seats at {focus} are twelve in a ring, with a hearth at one end and the door at the other, and the chairs are not alike.",
    "Rank gets a cultivator the chair, and sex decides which. The hearth chairs are for the women of the council and the door chairs for the men, and the quarrel is about who may hear.",
    "A seat is held for life, and a woman’s is often held for less. When a hearth chair falls vacant the council takes a year to ‘consider’, and a door chair is filled before the funeral.",
    "The council was a circle of stools on the founding night. The hearth and the door were added the winter the first chair was carved, for warmth and for a draught.",
    "The speaker is the eldest at the ring, and the eldest at the ring are men by custom. The women at the hearth speak second, and are minuted third.",
    "At {focus} the minute-clerk records every word said by a door chair and every third said by a hearth chair. The clerk calls it economy, and the hearth calls it hearing.",
    "A core cultivator is addressed as Master by every junior of the sect, whatever the sex. The Master’s own council addresses a woman as Madam and a man as Master.",
    "A core woman who speaks first at the ring is thought to be brave. A core man who speaks last is thought to be wise. Both are noted, and neither is minuted.",
    "A seat costs its holder a day a month of ring-service and a year of favours. The favours are paid in votes, and a woman’s are paid to the hearth.",
    "The ring has thirteen places and twelve chairs. The thirteenth is a stool at the door, and it is where a core cultivator who gives no answer is invited to sit.",
    "At {focus} a vote is taken by raised hand, door chairs first. By the time the hearth has raised its hands, the count is already read.",
    "A core woman is asked, in her first year, whether she would prefer a hearth chair or a door chair. A core man is not asked, and takes the nearest.",
    "The founding council had no hearth and no door. It met in the open, on stools, in turn. The hearth was added for the old, and the door for the guard.",
    "The first woman to sit at the ring was seated at the door, because the hearth was full. She sat there nine years, and the door is still called hers.",
    "Everyone at {focus} knows which chairs are ‘kept’. Kept chairs are not on the roll, and the cultivator in them sits by agreement and may be moved by one.",
    "‘A chair is a courtesy,’ the council says, ‘until it is a seat.’ It is a saying older than the hearth, and rarely said by anyone who has had to sit near the door.",
  ],
  portraits: [
    "When the nascent soul appears, the sect hangs its portrait. The soul is small, bright and without sex, and the painter is told which robe to give it.",
    "The portrait is the cultivator’s name in the hall for as long as the sect stands. At {focus} a soul painted in the wrong robe is repainted, and the repainting is called a correction.",
    "A portrait costs the cultivator a year’s stones and a morning’s sitting. The painter sits the soul, and the sect sits the body, and the two are made to agree.",
    "The first portrait was painted from memory by a pupil of the founder, who wished to hang the master after the master was dead. She gave the master a robe from the pupil’s own mother.",
    "A woman’s soul is painted with her hair up and her hands folded. A man’s is painted with his hair down and his hands open. The painter says the soul has no hair, and it is painted anyway.",
    "At {focus} the portraits of the nascent masters hang in sixty frames. Forty-one are men, nineteen are women, and one is a gap that the painters call ‘in progress’.",
    "A nascent soul has no sex. The ledger writes one anyway, because Madam and Master are different forms of address and the clerks cannot do without them.",
    "The sect’s own book lists a cultivator at this rung by their portrait’s robe. Those who refused a robe are listed by the colour of the hall they sat in.",
    "A cultivator who declines to be painted is called ‘unhung’. The unhung are fed and honoured and written in the margin of the roll, and their names are said last.",
    "The painters keep a drawer of robes for the unpainted. It holds a grey one, a white one and a blue one, and the blue has never been taken out.",
    "At {focus} a portrait is blessed by the oldest of the masters hanging beside it. A woman’s is blessed by a woman if there is one, and by a man if she has outlived them.",
    "A soul sits for its portrait with a lamp on either side. The lamps are for the painter, but the soul has been known to look at them, and the painter to look away.",
    "The hall of portraits was an armoury once, and the frames are still on the old hooks. The sect says the portraits are weapons of a kind, and the painters say nothing.",
    "The first soul to be painted refused a robe, and the painter, who had never seen a soul before, painted what he saw: a light. He was dismissed by the next master.",
    "The oldest portrait at {focus} has been painted over nine times. Under the ninth coat the paint is lighter, and the robe, when the lamp is held close, has no sleeves.",
    "‘A soul has no hall,’ says the hall’s own saying, ‘but a portrait has a wall.’ The wall is the point, the painters say, and they say it to the wall.",
  ],
  severing: [
    "On the severing day a cultivator cuts the last cords that bind them to the dust: the cord to a household, the cord to a name, and the cord to a debt.",
    "The rite is the same for every sex, and the cords are not. At {focus} the sect has always known which cord is meant for whom, and the sages are told when they are old enough to be asked.",
    "A woman is asked to cut the household first. A man is asked to cut the name. Anyone else is asked what they are willing to cut, and the question is the whole of the rite.",
    "The rite was a fire and a knife, and a blind sage to hold the thread. The sect added the order of the cords the year a sage cut them in the wrong order and was unwell.",
    "A severed woman signs her own seal for the first time on the day after, and a severed man is not asked to carry his house. The sect calls it freedom, and the freedom has a price.",
    "At {focus} the sage who is cut loose is given a small grey cord to wear. The cord is the colour of the dust, and it is worn on the left for a woman and on the right for a man.",
    "A Spirit Severing sage is addressed as Sage by every junior of the sect. The first thing a sage learns is how few of them were anything else to the people they cut.",
    "Before the day, a cultivator may be refused by a household, a hall or a lover, and the sect upholds the refusal. After the day, nothing can be refused, and nothing is owed.",
    "The household that loses a severed woman is paid. The household that loses a severed man is thanked. The paying and the thanking are done at the same table.",
    "A cord cut in anger grows back, the sages say. A cord cut in sorrow is a clean cut, and the sages who say so look at the cord they wear.",
    "At {focus} the sage’s family is sent a short note. It tells them that their daughter or their son is now a Sage, and it has no word for anyone who gave a different answer.",
    "The sect keeps a drawer of ‘uncut’ cords, for sages who could not. Nobody knows how many drawers there are, and the clerk at {focus} will not say.",
    "The first severing was done by a woman who wished to leave a husband, and was permitted to do it by a sect that had not yet decided what it would cost.",
    "The rite became compulsory for the sixth realm the winter a sage tried to keep a household while ascending and brought it down on the mountain.",
    "A cord is sorted at {focus} before it is cut: a mother’s, a father’s, a child’s, a name’s. The sorter wears gloves and does not look at the sages.",
    "‘What is cut is not lost,’ says the sages’ blessing, ‘only no longer yours.’ It is said at the end of the day, to the one who was cut, by whoever did the cutting.",
  ],
  table: [
    "A Dao seeker may take a companion, and the sect keeps a table for the choosing. The table is long, with a seat at each end and a row between.",
    "The two end seats are called the sun and the moon, and the sect has always known who sits in which. At {focus} a seeker who sits in the other seat is asked to explain.",
    "A companion is chosen for the Dao, not the heart, the sect says. The Dao is said to have a sun and a moon in it, and a seeker without both is thought to be walking on one foot.",
    "The table was a plank across two barrels in a refuge for seekers, and the first seeker to be chosen was chosen by a candle going out. The sect has been telling it since.",
    "A seeker without a companion sits at the single seat, a stool at the head of the room, and is served first. The seat is an honour that nobody asks for twice.",
    "At {focus} the companions’ tablets hang on the wall of the table-room, and the sun side is carved with a sword and the moon side with a bowl. The tablets are old, and the wall is older.",
    "A Dao seeker is addressed by their Dao and not by their sex, but the Dao has a name for each. A woman’s Dao is ‘the river’ and a man’s is ‘the mountain’, and the rivers have noticed.",
    "A seeker may refuse a companion once. The second refusal is written in the table’s book, and the third is sent to the Law Hall, and the Law Hall has not yet decided what to do.",
    "The sect pays a companion’s upkeep from the seeker’s stones. A woman’s companion is paid at the moon rate and a man’s at the sun rate, and the sun rate is higher.",
    "A seeker who walks alone is respected. A seeker who walks alone and has never been chosen is pitied, and the table-clerk keeps a separate list.",
    "At {focus} the seat for those who give no answer is the head of the table, where the pot is, and it is the most comfortable chair in the room. Nobody has taken it in a hundred years.",
    "The table has an unwritten rule that a companion is a Dao companion first and a household second. The rule is broken at every sitting, in either direction, and the clerk says nothing.",
    "The first seekers were a woman and a man who had worked a mine together for nine years. They were seated at one end of a plank because there was nowhere else for the pot.",
    "The sun and the moon were carved after the first seeker died, in a year when the sect wished to give the Dao a shape. It chose the shape it had to hand.",
    "A companionship is sealed at {focus} with two cups of tea, one poured by each. The cups are not alike, and the difference has been the subject of three councils.",
    "‘The Dao has no side,’ says the seekers’ proverb, ‘but the table has two.’ It is carved over the lintel, on the inside, where the seekers see it going out.",
  ],
  column: [
    "To ascend, a cultivator must be written in the Ledger, and a copy of its page is kept at {focus}. The page has two columns and a margin, and the Clerk asks which.",
    "The first column is for those written as sons, the second for those written as daughters, and the margin for the rest. The Ledger has no other rule, the Clerk says, and has never needed one.",
    "An Ascendant is written by their rank and not their sex, the sect insists. The page is written by their sex and not their rank, the page insists, and the page has the older hand.",
    "The Ledger was copied from the Ledger Stone by a scribe who wished to learn it by heart. He ruled the columns himself, to keep his place, and the columns became the page.",
    "A name once written cannot be unmade, and so the Clerk asks once. The Clerk’s question is the oldest in the sect, and its answer has never been the same twice.",
    "At {focus} the copy of the page hangs behind glass. Both columns are filled to the foot, and the margin is a single line, written small, in a hand the copyists call unfinished.",
    "No sect has had an Ascendant in two hundred years. The sect says it is because the Ledger is difficult. The copyists say it is because the question is.",
    "The woman’s column is longer than the man’s by thirty names, and the man’s is darker. The copyists hold that both are true, and that neither was written by choice.",
    "An Ascendant who chose the margin was written once, the copyists say, and the line is the one that is small. It reads only a title, and no name.",
    "The Clerk keeps no ledger of the answers. Those who have given them remember, and the sect does not ask, and the Law Hall says it is none of its business.",
    "At {focus} the Clerk’s desk is empty at every hour, and the pen is wet. The copyists say the Clerk writes in the dark, and the ink is tested every morning.",
    "A copyist who refuses to ask the question is dismissed, and one who asks it wrongly is retrained. One who asks it rightly is not recorded, and that is how they are known.",
    "The Ledger Stone is the first copy of Heaven’s Ledger, and the page at {focus} is the first copy of the Stone. Each copy was made in a hurry, and each has kept the hurry.",
    "The columns were ruled in the first copy to hold the names in order, and the order was by the founders’ own custom. The margin was there already, the copyists say, and was called a crack.",
    "The Clerk’s question is put at the last threshold, to the cultivator, alone. The sect pretends not to know the words, and every copyist has them by heart.",
    "‘Write what is true,’ says the copyists’ line, and ‘Write as you are written,’ says the line beneath it. The two have never been reconciled, and hang one above the other.",
  ],
};

export const RUNG_DEEP: Record<Rung, Three> = {
  roll: [
    "Under the gate-lodge a stair goes down to a room of tied bundles. Each is a roll of hands from a year the sect has forgotten, with its columns scratched out and the names left.",
    "In the bundles the columns are ruled in a different order each year. Once water is for men, once loads are for women, once there are no columns at all, only names and a number of days.",
    "At the bottom a single page lies flat under a stone. It lists every hand the sect ever fed, by name, and in the last line a hand that carried both.",
  ],
  novices: [
    "Behind the passage between the halls a door opens onto a third room, narrow and unheated. It has a bench, a window and a row of pegs with grey sleeves, none of them tied.",
    "The pegs are labelled in the hall-masters’ hands. Each label is a name, and under each name is a number of days, and no hall. Some of the numbers are large.",
    "On the sill is a worn tally of first breaths, scratched by a hundred novices who were not sure which hall to count in. The oldest scratch is the deepest.",
  ],
  pairing: [
    "Behind the board a narrow door opens on the board-keeper’s office. A shelf of old frames leans against the wall, each with a column of pairs struck through with chalk.",
    "On the last frame the names are not paired by sex or by realm. They are paired by who asked, and the fees are all struck, and the date is the year the board was built.",
    "A note in the keeper’s hand is pinned to the frame: ‘This is how it was first done. Do not let anyone tell you it was a mistake.’ The pin is bright, and recent.",
  ],
  seats: [
    "A narrow stair behind the ring goes down to a cold room where the old minutes are kept. The first volume lies open, and its first page lists thirteen seats and no names.",
    "The minutes of the founding night are written in a plain hand that records every voice in the order spoken. Hearth and door are not mentioned. The speakers are called only by their tasks.",
    "The last page of the volume is a plan of the ring drawn by the first minute-clerk. The thirteenth place is a circle in the middle, and the note beside it says: ‘Where the pot goes.’",
  ],
  portraits: [
    "A door behind the oldest frame opens onto the painters’ store. The shelves hold a hundred unfinished portraits, each a soul in a lamp-lit blur, with its robe left blank.",
    "The blank robes have been painted in by a hand that was not the painter’s. The lines are a child’s, and they are the only honest ones in the hall.",
    "At the back hangs a portrait with a face turned slightly from the lamp. It is the unhung master’s, and the painter has written beneath it: ‘As seen. Do not correct.’",
  ],
  severing: [
    "Beneath the severing floor there is a drawer-room where the cords are kept. Each drawer holds a grey cord with a tag, and the tags are in a hand that gets steadier as the years go back.",
    "The oldest drawers hold cords that have been cut and tied again, with a stitch the sect has no name for. Nobody has ever told the sages that cords may be mended.",
    "In the last drawer lies a single cord, uncut, with no tag. A note on top reads: ‘Kept by a sage who could not. Not a failure; a different answer.’",
  ],
  table: [
    "Behind the wall of tablets there is a small room with a round table and no head. The chairs are mismatched, one for every seeker who ever refused the sun or the moon.",
    "A book on the table is open at the first entry. It records the plank, the barrels, the candle, and under it, in another hand: ‘The Dao did not choose. We did, and then we said it did.’",
    "In the margin of the last page a seeker has drawn a circle with no seats. The sect’s clerks have trimmed around it, over the years, and left it alone.",
  ],
  column: [
    "Behind the glass a narrow door opens into the copyists’ night room. A stone slab holds the first copy of the page, uncovered, with the columns not yet ruled.",
    "On the slab the names are written in a loose, unruled hand, as many as will fit, with no order and no sides. Under the lamp the whole page seems to breathe.",
    "At the foot, in the Clerk’s own hand, a single line: ‘They ruled it afterwards. I did not ask them to.’ The ink is still wet, and no one has been in the room in a hundred years.",
  ],
};
