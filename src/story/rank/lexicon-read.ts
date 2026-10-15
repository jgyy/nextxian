import type { Gender } from "@/engine/hero";
import type { RankBand, RankWay } from "@/engine/rank";
import type { Rung } from "./lexicon-rank";
import type { Reading } from "./lexicon-stance";

/**
 * How a road reads the hero. A keeper reads the rung and the gender at the entry, in the greeting, and at the goodbye; the rung reads the hero’s gender
 * twice in the middle of an approach and their realm once; and the keeper says a different last word to a hero who yielded, claimed, veiled or lifted.
 * Every line is short, because a scene of the road is already near the word cap. Slots: kname, kthey, kthem, ktheir, place, focus.
 */

/** The keeper’s first look at the hero on the entry, by the hero’s rung against the road’s and by gender. About twenty-five words each. */
export const GLANCE: Record<Reading, Record<RankBand, Record<Gender, string>>> = {
  rank: {
    below: {
      woman: "{Kname} counts your sleeve, not your sex, and finds it short of {place}. Only the first is entered in the book, and you notice the second was not asked about.",
      man: "{Kname} counts your sleeve, not your sex, and finds it short of {place}. You notice that nothing is made up to you for being a man, and that you expected it.",
      unspoken: "{Kname} counts your sleeve and finds it short of {place}, and does not go looking for the rest. It is the plainest welcome you have had on the mountain.",
    },
    at: {
      woman: "{Kname} counts your sleeve and finds it level with {place}, and a gladness crosses {ktheir} face that has little to do with you. A woman of the rung is a thing {kthey} has argued for.",
      man: "{Kname} counts your sleeve and finds it level with {place}, and nods as at a sum that has come out. A man of the rung asks nothing further of the book.",
      unspoken: "{Kname} counts your sleeve and finds it level with {place}, and puts the book down with a small relief. A rung is a thing {kthey} knows how to read.",
    },
    above: {
      woman: "{Kname} counts your sleeve and finds it above {place}, and straightens as for an officer. The title {kthey} reaches for is a woman’s, and {kthey} gives it as though it were no more than a rung.",
      man: "{Kname} counts your sleeve and finds it above {place}, and straightens as for an officer. The title {kthey} reaches for is a man’s, and {kthey} gives it as though it were no more than a rung.",
      unspoken: "{Kname} counts your sleeve and finds it above {place}, and straightens, and then stops with a title half-said. {Kthey} has no title that is only a rung.",
    },
  },
  sex: {
    below: {
      woman: "{Kname} sees a woman first, kindly, and a sleeve short of {place} second. “You will be looked after,” {kthey} says, before you have asked for anything, and the sentence has edges.",
      man: "{Kname} sees a man first, easily, and a sleeve short of {place} second. “You will be given a bench,” {kthey} says, before you have asked for anything, and the bench is already warm.",
      unspoken: "{Kname} looks for the word that sorts you, does not find it, and falls back on your sleeve, which is short of {place}. {Kthey} seems unhappy to be left with so little.",
    },
    at: {
      woman: "{Kname} sees a woman first, and a sleeve level with {place} second, and is careful. “A woman at this rung,” {kthey} says, “has a harder road than the book lets on.”",
      man: "{Kname} sees a man first, and a sleeve level with {place} second, and is comfortable. “A man at this rung,” {kthey} says, “has the road that the book promises.”",
      unspoken: "{Kname} looks for the word that sorts you and sets it aside. Your sleeve is level with {place}. “That much I can read,” {kthey} says, and the rest {kthey} leaves on the table.",
    },
    above: {
      woman: "{Kname} sees a woman first, and a sleeve above {place} second, and does not know which to bow to. {Kthey} bows to both, a little too deeply, and straightens with a frown.",
      man: "{Kname} sees a man first, and a sleeve above {place} second, and bows to both without noticing there are two. It is the sort of bow that is never counted.",
      unspoken: "{Kname} looks for the word that sorts you and your sleeve is above {place}. {Kthey} bows to the sleeve, and the bow lasts a beat too long, with nowhere to go.",
    },
  },
};

/** The keeper’s greeting at the start of an approach, by the hero’s rung against the road’s. Two each, so a road does not greet twice alike. About twenty words. */
export const GREET: Record<Reading, Record<RankBand, [string, string]>> = {
  rank: {
    below: [
      "{Kname} nods at your sleeve and says there is a stair above {focus} that wants climbing first. {Kthey} says it as a fact about stairs.",
      "“Short of {place},” {kname} says, glancing at your sleeve, “and I would tell you the same however you came.” {Kthey} offers a stool.",
    ],
    at: [
      "{Kname} meets you at {focus} as one meets a peer, with the book shut. The rung is the thing, and you hold it.",
      "“Level with {place},” {kname} says, glancing at your sleeve, “and so welcome. Ask what you like.” {Kthey} means it.",
    ],
    above: [
      "{Kname} stands at {focus} for you and sits only when you do. {Kthey} says the rung is owed this, and means the rung.",
      "“Above {place},” {kname} says, glancing at your sleeve, “and so I am at your disposal.” {Kthey} sounds like a clerk reading an order.",
    ],
  },
  sex: {
    below: [
      "{Kname} meets you at {focus} with a lamp and a word about the cold. {Kthey} has already decided where you are to be put, and is sorry about it in advance.",
      "“You are short of {place},” {kname} says, “but you will not be left in the draught.” {Kthey} takes your elbow, and does not ask.",
    ],
    at: [
      "{Kname} meets you at {focus} with the right cup for the right hand, and watches your face to see if it was the right one.",
      "“Level with {place},” {kname} says, “and so you will want the proper room.” {Kthey} leads you to it, a step ahead.",
    ],
    above: [
      "{Kname} meets you at {focus} with two cups, in case, and does not say what case. {Kthey} is plainly rehearsing a form of address.",
      "“Above {place},” {kname} says, “and so I do not know how to receive you.” {Kthey} offers the better cup, then the other, and sets both down.",
    ],
  },
};

/** What the rung does to a hero of each gender, said once at the first beat after the greeting. About twenty-two words each. */
export const NOTE: Record<Rung, Record<Gender, string>> = {
  roll: {
    woman: "Everything at {focus} that is addressed to the hands is addressed to the water column, and you hear yourself counted into it by the pail.",
    man: "Everything at {focus} that is addressed to the hands is addressed to the loads, and you hear yourself counted into it by the sack.",
    unspoken: "Everything at {focus} that is addressed to the hands is addressed to a column, and you hear the clerk’s pen pause before spare.",
  },
  novices: {
    woman: "Everything at {focus} that is said of the novices is said of two halls, and you hear the white hall’s bell before the roll is read.",
    man: "Everything at {focus} that is said of the novices is said of two halls, and you hear the grey hall’s bell before the roll is read.",
    unspoken: "Everything at {focus} that is said of the novices is said of two halls, and you hear a third bell that no one has ever hung.",
  },
  pairing: {
    woman: "Everything at {focus} that is said of the pairs is said of the sexes in turn, and you hear the women’s names called before the chalk is dry.",
    man: "Everything at {focus} that is said of the pairs is said of the sexes in turn, and you hear the men’s names called after the chalk is dry.",
    unspoken: "Everything at {focus} that is said of the pairs is said of the sexes in turn, and you hear your name left out of both calls.",
  },
  seats: {
    woman: "Everything at {focus} that is said at the ring is said first by the door and second by the hearth, and you hear the hearth wait.",
    man: "Everything at {focus} that is said at the ring is said first by the door and second by the hearth, and you hear the door begin.",
    unspoken: "Everything at {focus} that is said at the ring is said first by the door and second by the hearth, and you hear no one address the stool.",
  },
  portraits: {
    woman: "Everything at {focus} that is said of the portraits is said of robes, and you hear a woman’s robe mentioned before your soul has been seen.",
    man: "Everything at {focus} that is said of the portraits is said of robes, and you hear a man’s robe mentioned before your soul has been seen.",
    unspoken: "Everything at {focus} that is said of the portraits is said of robes, and you hear no robe mentioned that would fit what is there.",
  },
  severing: {
    woman: "Everything at {focus} that is said of the cords is said of what is owed, and you hear the household named for you before the thread is taken.",
    man: "Everything at {focus} that is said of the cords is said of what is owed, and you hear your name named for you before the thread is taken.",
    unspoken: "Everything at {focus} that is said of the cords is said of what is owed, and you hear that no cord has been named for you at all.",
  },
  table: {
    woman: "Everything at {focus} that is said of companions is said of the sun and the moon, and you hear the moon offered to you first.",
    man: "Everything at {focus} that is said of companions is said of the sun and the moon, and you hear the sun offered to you first.",
    unspoken: "Everything at {focus} that is said of companions is said of the sun and the moon, and you hear no one say a word for the pot.",
  },
  column: {
    woman: "Everything at {focus} that is said of the page is said of columns, and you hear the second one mentioned before your name is asked.",
    man: "Everything at {focus} that is said of the page is said of columns, and you hear the first one mentioned before your name is asked.",
    unspoken: "Everything at {focus} that is said of the page is said of columns, and you hear the margin spoken of in a lower voice.",
  },
};

/** What the rung costs a hero of each gender, said at the third beat. About twenty-eight words each. */
export const COST: Record<Rung, Record<Gender, string>> = {
  roll: {
    woman: "A woman’s day is paid at the water rate, which is the sack rate less a third, and the third goes to the pail. You are told so gently, by someone who is owed it herself.",
    man: "A man’s day is paid at the sack rate, which is the water rate and a third more, and the third goes to the pole. You are told so plainly, by someone who has not thought about it.",
    unspoken: "A day in spare is paid at no rate at all, and settled when the clerk remembers. You are told so apologetically, by someone who has never been asked why.",
  },
  novices: {
    woman: "A woman novice is moved up a bench for gathering fast, and watched for the reason. You are told your breath is quick, and that a quick breath is a thin one.",
    man: "A man novice is moved up two benches for gathering fast, and watched for no reason at all. You are told your breath is strong, and that a strong breath is one to rely on.",
    unspoken: "A novice in the passage is moved up no bench, because the passage has none. You are told your breath is yours, and that nobody has yet found out where to write it.",
  },
  pairing: {
    woman: "A woman who asks for a pair above her sex pays the board’s fee, and the fee is a quarter of a month’s stones. You are told it is to keep the bouts fair.",
    man: "A man who asks for a pair above his realm pays nothing, because the board assumes he will win. You are told it saves the board time.",
    unspoken: "A pair outside the board is fought in the yard behind the kitchen, with no ledger and no fee. You are told you may spar there as long as the cooks are not troubled.",
  },
  seats: {
    woman: "A core woman’s vote is counted after the door’s, and a minute behind it. You are told the delay is for deliberation, and it is a deliberation she is never allowed to have.",
    man: "A core man’s vote is counted with the door’s, and is read before it is cast. You are told the haste is for efficiency, and it saves everyone the trouble of discussing.",
    unspoken: "A voice at the stool is minuted as ‘present’ and not as ‘said’. You are told this is a technicality, and it is exactly as large as the technicality of being there.",
  },
  portraits: {
    woman: "A woman’s portrait costs a year’s stones and a morning’s sitting, and the painter charges extra for the hair. You are told it is for the pins, which are real.",
    man: "A man’s portrait costs a year’s stones and a morning’s sitting, and the painter charges nothing for the hair. You are told that it comes free, and that no one has ever asked why.",
    unspoken: "A portrait with no robe costs a year’s stones and an afternoon, and the painter charges for the hours it takes to decide. You are told the painter is not sure of the rate.",
  },
  severing: {
    woman: "A woman who cuts the household is paid out by the household, in a lump, and the lump is called a dowry returned. You are told it is the custom, and so it is.",
    man: "A man who cuts the name is thanked by the household, with a dinner, and the dinner is called a farewell. You are told it is the custom, and so it is.",
    unspoken: "A sage who cuts what they choose is asked to write it down, in their own hand, for the book. You are told it is the only record in which the choice is theirs.",
  },
  table: {
    woman: "A woman seeker at the moon end is served last and thanked first. You are told it is a courtesy of the Dao, and the Dao is not at the table to correct it.",
    man: "A man seeker at the sun end is served first and thanked last. You are told it is a courtesy of the Dao, and the Dao is not at the table to correct it.",
    unspoken: "A seeker at the head of the table is served by whoever reaches the pot, which is everyone. You are told the arrangement is unofficial, and has been for a hundred years.",
  },
  column: {
    woman: "A name written in the second column is a name that must be explained at the Ledger’s end, and the explanation is read aloud. You are told this is protection, and it is read in a firm voice.",
    man: "A name written in the first column is a name that is read at the Ledger’s end without explanation. You are told this is efficiency, and it is read in a quiet voice.",
    unspoken: "A name written in the margin is a name that is read after the others, if the Clerk remembers. You are told that the Clerk never forgets, and that this is why the line is so small.",
  },
};

/** What a hero’s realm gets at the rung, by where it stands against the road’s, said at the fourth beat. About twenty-five words each. */
export const BAND_LINE: Record<Rung, Record<RankBand, string>> = {
  roll: {
    below: "There is no one below a mortal on the roll, and so no one below the road, and the clerk at {focus} cannot imagine why you ask.",
    at: "You hold no rank at all, and so the roll reads your hands alone. At {focus} it is the whole of the book, and the clerks would like to know it is enough.",
    above: "A sleeve comes through {focus} and every column on the roll straightens. No mortal asks what you are. They ask only whether you have eaten.",
  },
  novices: {
    below: "You have not yet gathered a breath, and the halls will not take you in until you have. At {focus} the door is a bench, and the bench is outside.",
    at: "You gather as the novices do, and the halls count you by the day. At {focus} your days are entered under your hall and under nothing else.",
    above: "You are past the halls, and a hall-mother who stops to bow at {focus} is not sure how deep. The novices go quiet, and the quiet is a kind of rank.",
  },
  pairing: {
    below: "The board does not pair below a foundation. At {focus} you are chalked in the margin, a name without a pair, and the margin is cold.",
    at: "The board pairs you with a foundation of your own depth. At {focus} the chalk is yours, and the crowd leans in, and the pair is announced.",
    above: "The board pairs no one above their station, and has no frame for yours. At {focus} the clerk reaches for a new piece of chalk and does not know where to hang the pair.",
  },
  seats: {
    below: "A seat is for a core, and you have none. At {focus} you are shown to the bench at the wall, where the hearth and the door can both see you and neither need turn.",
    at: "You hold a core, and so a chair. At {focus} the chair is placed, the cushion turned, and the clerk records the hour you sat.",
    above: "You are past the ring’s seats, and the ring has no chair for what you are. At {focus} it makes room at the head, and does not quite stand.",
  },
  portraits: {
    below: "A portrait is hung for a nascent soul, and you have none to hang. At {focus} you stand in front of a frame with no light in it, and the painter is kind about the wall.",
    at: "Your soul has appeared, and so a portrait is owed. At {focus} the painter reaches for a clean canvas and a robe, and waits for you to say which.",
    above: "Your soul is past the frame, and the painter has no robe for what it has become. At {focus} the hall dims for a moment, as at the passing of a lamp.",
  },
  severing: {
    below: "A cord is cut at the sixth realm, and you are not there. At {focus} the sages show you the drawers, and say you may look and not touch, and their gentleness is exact.",
    at: "Your cords are ready, and so the day is yours. At {focus} the sage lays the thread across your palm and waits, as for a bell.",
    above: "Your cords are cut already, and the sages know it by the way you stand. At {focus} they offer no thread, only tea, and ask what you kept.",
  },
  table: {
    below: "A seeker takes a companion. A seeker below that has no standing at the table, and {focus} has a stool by the wall for those who come to learn the form.",
    at: "You are a seeker, and so the table is yours. At {focus} the sun and the moon are laid, and you are asked, with some ceremony, whether you want either.",
    above: "You are past the table, and it knows it. At {focus} the clerk does not set the sun or the moon, but lays a plain cup, and asks what you would like.",
  },
  column: {
    below: "Only the Ascendant are written on the page. At {focus} you are shown the copy, behind glass, and the copyists keep a respectful distance from your breath.",
    at: "You are what the page was ruled for, and so you are written. At {focus} the Clerk’s pen is wet, and the room has stopped breathing.",
    above: "There is no rung above the last column, and the copyists have no word for you. At {focus} they stand, and then do not know what to do with their hands.",
  },
};

/** The keeper’s farewell when the hero did not go through the door, by the keeper’s reading and the hero’s gender. Two each. About twenty words each. */
export const SENDOFF: Record<Reading, Record<Gender, [string, string]>> = {
  rank: {
    woman: [
      "“Come back when you have climbed another,” {kname} says. “The book will treat you as it treats the rung, and I shall see that it does.”",
      "{Kname} shakes your hand across the desk, the way one does a colleague’s. It is the first time anyone at {place} has, and {kthey} seems puzzled by the pause.",
    ],
    man: [
      "“Come back when you have climbed another,” {kname} says. “I shall enter you by the rung, and the book will not ask you for more than that.”",
      "{Kname} shakes your hand across the desk, the way one does a colleague’s, and goes straight on to the next. You are not sure whether you have been honoured or dismissed.",
    ],
    unspoken: [
      "“Come back when you have climbed another,” {kname} says. “I shall write you down by the rung, and the book will have to do the rest.”",
      "{Kname} nods at you across the desk, and does not search for a form of address. For once, it seems, the lack is not an inconvenience.",
    ],
  },
  sex: {
    woman: [
      "“Mind the step,” {kname} says. “Mind the draught. A woman at {place} should always have someone to say so.” {Kthey} says it like a blessing.",
      "{Kname} walks you to the door and holds it, and does not let go until you are through. The kindness is real, and so is the door.",
    ],
    man: [
      "“Mind the step,” {kname} says. “Mind the draught. A man at {place} will always be told, and should be grateful.” {Kthey} says it like a blessing.",
      "{Kname} walks you to the door and holds it, and lets go as you reach it. The kindness is real, and so is the ease with which it is lifted.",
    ],
    unspoken: [
      "“Mind the step,” {kname} says. “I am not sure whose draught it is.” {Kthey} says it carefully, and the care is the only form of address {kthey} has found.",
      "{Kname} walks you to the door, and hesitates over how to hold it. In the end {kthey} stands to one side and lets it swing, and you go through with the whole width of the doorway.",
    ],
  },
};

/** The kinds of last word. */
export type WordState = "claimed" | "yielded" | "veiled" | "lifted";
export const WORD_OF: Record<RankWay, WordState> = { claim: "claimed", yield: "yielded", veil: "veiled", lift: "lifted" };

/** What the keeper says at the end of an approach to a hero who has gone through the door and chosen, by the keeper’s reading and what was chosen. About twenty-five words each. */
export const RETURN_WORD: Record<Reading, Record<RankWay, string>> = {
  rank: {
    yield: "{Kname} looks at you as the stair empties. “You kept to your place,” {kthey} says, “when your rung would have bought another. I did not expect it, and I am not sure I approve.”",
    claim: "{Kname} meets your eye as the stair empties. “You named your rung,” {kthey} says, “and asked to be read by it. That, at least, I can write down.”",
    veil: "{Kname} regards you as the stair empties. “You wore the face the room wanted,” {kthey} says, “and kept your rung in your sleeve. I saw. I let you. Do not ask why.”",
    lift: "{Kname} watches the stair empty. “You put your rung behind someone else’s name,” {kthey} says. “It may be the best thing a rung is for.”",
  },
  sex: {
    yield: "{Kname} smiles at you as the stair empties. “You kept your place,” {kthey} says, “and the room kept you in it. I am glad it held.”",
    claim: "{Kname} watches you as the stair empties, and the smile is gone. “You named your rung against the rest,” {kthey} says. “I shall not argue. Only look at the faces.”",
    veil: "{Kname} regards you as the stair empties. “You wore the face the room wanted,” {kthey} says, “and it fitted. That worries me. Take care what you are best at.”",
    lift: "{Kname} watches the stair empty. “You put your rung behind someone the room had not asked for,” {kthey} says. “I did not think a rung could be spent so. I shall think.”",
  },
};

/** What the keeper says at the end of a later approach when the hero has made the same pick twice, by the keeper’s reading. About twenty-eight words each. */
export const WORD: Record<Reading, Record<WordState, string>> = {
  rank: {
    claimed: "“You have named your rung at more than one door,” {kname} says. “Say it often enough and it becomes the thing they read first.”",
    yielded: "“You have kept your place at more than one door,” {kname} says. “It is courteous, and a waste of a good sleeve. I should like to see you ask.”",
    veiled: "“You have worn a face at more than one door,” {kname} says. “It will serve. It will also be what they remember you by, and not the rung.”",
    lifted: "“You have put your rung behind another’s name at more than one door,” {kname} says. “I begin to see what it is for.”",
  },
  sex: {
    claimed: "“You have named your rung against the room at more than one door,” {kname} says. “It is brave, and tiring, and I should hate to see you tired.”",
    yielded: "“You have kept your place at more than one door,” {kname} says. “It is the wise thing, and I shall say so to anyone who asks.”",
    veiled: "“You have worn the room’s face at more than one door,” {kname} says. “I understand why. I hope you remember which is yours.”",
    lifted: "“You have put your rung behind another’s name at more than one door,” {kname} says. “A house is built on that. I had not thought to see it here.”",
  },
};

/** The Elder’s report: what she remembers of a rung pressed against a keeper who reads sex first, of a place kept before a keeper who reads rank first, and of the door itself. */
export const CLASH_MEMORY: [string, string] = [
  "You pressed your rung against {kname}, who reads the body first, and I heard of it before you came back. {Kname} was not offended. {Kname} was frightened, and a frightened keeper remembers.",
  "You set your rank in front of {kname} at {place}, where the body is read first. I have done the same in a hall like it, and I would not say it was wise. I would say it was true.",
];
export const EASE_MEMORY: [string, string] = [
  "You kept your place before {kname}, who reads the rung first. I heard that {kthey} was disappointed, and that you did not notice. A rung that is not named is not read.",
  "You stayed low at {place} when your rung would have bought you more. {Kname} said nothing at the time. {Kthey} has said a good deal since, and not all of it was kind.",
];
export const REPORT_RANK: [string, string, string] = [
  "You went through the door of rank at {place}, and I shall not ask what was behind it. I shall ask only what you carried out, and whether it was yours.",
  "At {place} you went through a door that opens to your rung and your sex together. Few do. Most are only sorted by one, and are grateful.",
  "{Kname} told me you went through the door at {place}. {Kthey} would not say what you chose. {Kthey} said only that you looked as though you knew what it was for.",
];
