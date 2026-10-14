import type { Gender } from "@/engine/hero";
import type { Custom, Stance } from "./lexicon-custom";

/**
 * The door of the custom. In the middle of every approach there is a door that opens only to a woman, a man or someone who gives no answer, and behind
 * it a scene of its own: what the custom does to that hero (one of two paragraphs by custom), how the keeper stands to them (one of four by stance and
 * approach), and four picks. A hero sees one scene behind each door and never the other two.
 */

/** What a hero does behind the door. A pick keeps the custom, bends it, breaks it in the open, or stands for someone it passes over. */
export type PickKind = "keep" | "bend" | "break" | "stand";
export const PICK_KINDS: PickKind[] = ["keep", "bend", "break", "stand"];

/** The scene’s heading, after the road’s title. */
export const DOOR_TITLE: Record<Gender, string[]> = {
  woman: ["The Women’s Side", "The Daughters’ Way", "The Side Door", "The Women’s Hour"],
  man: ["The Men’s Side", "The Sons’ Way", "The Front Door", "The Men’s Hour"],
  unspoken: ["The Seat Between", "The Third Way", "The Open Doorway", "The Hour Without a Name"],
};

/** The door’s own label, in the middle of an approach. One for each approach, so a road never offers the same line twice. */
export const DOOR_LABEL: Record<Gender, [string, string, string, string]> = {
  woman: [
    "Go where the women of {place} are put by the custom, beside {focus}, and see what the place is like from the inside.",
    "Follow the women out of the room when the hour is called, past {focus}, to the side of {place} that is theirs by the rule.",
    "Take the place the custom keeps for a woman at {focus}, and watch what is done with you from there.",
    "Slip through the narrower door beside {focus} that the women of {place} use, and no one has thought to bar.",
  ],
  man: [
    "Go where the men of {place} are put by the custom, beside {focus}, and see what the place is like from the inside.",
    "Follow the men out of the room when the hour is called, past {focus}, to the side of {place} that is theirs by the rule.",
    "Take the place the custom keeps for a man at {focus}, and watch what is done with you from there.",
    "Go through the wider door beside {focus} that the men of {place} use, and see why it is kept so wide.",
  ],
  unspoken: [
    "Ask {kname} where those who give no answer are put by the custom, beside {focus}, and go there.",
    "Wait at {focus} until someone remembers that the rule has no side for you, and see where they send you.",
    "Take the place at {focus} that the custom has not assigned to anyone, and wait to be asked what you are.",
    "Find the doorway beside {focus} that belongs to neither side of {place}, and stand in it.",
  ],
};

/** What the custom does to a hero of each gender, in two paragraphs for each custom. Fifty words or so each. */
export const DOOR_SCENE: Record<Custom, Record<Gender, [string, string]>> = {
  lineage: {
    woman: [
      "The clerk turns the great book to the margin before you have asked, and holds the brush ready, as for a bride. Your name has a place here, narrow and pale, a hand’s width from the edge, and it is already waiting for you.",
      "At {focus} the women of the house are lined along the wall, each beside a tablet that is not hers. They look at you the way people look at a door that has opened onto a room they were told was a cupboard.",
    ],
    man: [
      "The clerk turns the great book to the column before you have asked, and holds the brush ready, as for a son. Your name has a place here, square and dark, in the middle of the page, and everyone around you appears to find it natural.",
      "At {focus} the men of the house stand shoulder to shoulder before the tablets, and they make a place for you without being asked. You notice what it costs the woman at the end of the row, who has made a place for no one.",
    ],
    unspoken: [
      "The clerk turns the great book to the column, hesitates, turns it to the margin, hesitates again, and sets the brush down. There is no line ruled for you. Someone coughs, and you realise that no one has ever had to rule one.",
      "At {focus} the clerks consult one another in whispers over where you may stand. The pale-ink corner is suggested, then the doorway, then the hall. It dawns on them that they are discussing you aloud, and they stop.",
    ],
  },
  mats: {
    woman: [
      "A master points you to the west row before you reach the mats, and the point is a kindness, the way one points a guest to the hat-stand. The east row is warmer, you notice, and the lamp there is better.",
      "The women at {focus} nod to you in the lull between forms, the small recognition of those who know how much the same move costs them. One of them shows you, without a word, the correction the master will not give.",
    ],
    man: [
      "A master points you to the east row before you reach the mats. The east row is warmer, and the lamp there is better, and you realise you have never once been asked to take the other.",
      "The men at {focus} make room on the east mats with the ease of long habit, and one of them, meaning nothing by it, calls a form by the name the masters keep for sons. You catch the shape of what has just been done for you.",
    ],
    unspoken: [
      "The master looks at the east row, then the west, then at you, and says, “Wherever there is room.” There is room only in the doorway, where the draught is. You watch both rows from there, and learn both halves of the forms.",
      "No one at {focus} is rude. The disciples simply do not know where to put you, and settle on the draughty doorway with the polite relief of people who have solved a problem by moving it.",
    ],
  },
  ledgers: {
    woman: [
      "A clerk offers you the keeping pen, the thin one, with the patience he would show a child offered a spoon. The signing pen lies on the far side of the desk, unguarded, and you can see exactly how far away it is.",
      "The women at {focus} bend over the books in a row, adding columns faster than the men can, and none of them looks up. Their sums are the ones the men sign, and every one of them knows it.",
    ],
    man: [
      "A clerk offers you the signing pen, the broad one, and a seal, before you have so much as read the line. The offer is made so smoothly that you understand it has been made to men in your place a thousand times.",
      "The men at {focus} sit apart from the books, at the end of the desk, and wait for the totals to be brought to them. They read the totals, nod, and sign. The women who brought them have already gone back to their columns.",
    ],
    unspoken: [
      "The clerk looks at the signing pen and the keeping pen, and at you, and takes a third from a drawer. It is a plain reed pen and has never been used. “For visitors,” he says. “It signs nothing.”",
      "At {focus} the clerks cannot decide whose book you belong in. They conclude that you may be read from both, which is to say neither, and you are given a ledger of your own with no heading, to see what you put in it.",
    ],
  },
  names: {
    woman: [
      "The cutter asks for your family name before your own and cuts it shallow, with a blade held lightly, so that it may be recut. He smiles as he does it, an apology in advance for a service you did not ask for.",
      "The women at {focus} compare their seals, the shallow ones, as others might compare scars. One shows you where hers has been recut four times, and the stone, thin as a wafer, will not bear a fifth.",
    ],
    man: [
      "The cutter asks for your given name, and cuts it deep, with a blade held firmly, as for something to be kept. He does not smile. It is simply what is done, and you have never had to wonder how it feels the other way.",
      "The men at {focus} hold their seals as heavy things, put down with a click. One, as you pass, lifts his to the light to show you the cut, and the pride on his face is that of a man who has never had it recut.",
    ],
    unspoken: [
      "The cutter looks at the blank seal in his hand, and at you, and says: “What shall I call you?” It is the first time anyone at {focus} has asked it, and he waits for the answer as for a thing he is not sure he is allowed to hear.",
      "The honorific the cutter reaches for dies on his tongue. He tries another, and stops. By the third attempt he has said “friend”, which he does not use, and the word sits between you like a coin of an unfamiliar mint.",
    ],
  },
  matches: {
    woman: [
      "The go-between does not ask what you want. She asks your age, your father’s name and your dowry, in that order, and writes each down before the next. She is not unkind. She is efficient, and has never been asked for more.",
      "The women at {focus} wait in the next room behind a screen of paper, each with a cup of tea going cold, and listen to their own prices being discussed. One of them winks at you across the paper, and the wink is the bravest thing in the house.",
    ],
    man: [
      "The go-between asks your age, your family’s holdings and your intentions, in that order, and writes each down with a deference that has nothing to do with you. You are the one who asks. It is a role, and you have been handed it.",
      "The men at {focus} sit with the go-between over the tea-tray and discuss the arrangements, and none of them asks what the women in the next room think. You cannot tell whether you are shut out of the screen or let in at the table.",
    ],
    unspoken: [
      "The go-between opens her book to the page for sons, and to the page for daughters, and sits looking at both. “I am not sure which letter to write,” she says, like a woman admitting something. “There is no form for you.”",
      "At {focus} they cannot work out who is to ask whom. The go-betweens confer, find the matter without precedent, and send out for tea. It arrives in three cups, and a fourth is brought, for you, so that you may drink while they decide.",
    ],
  },
  mourning: {
    woman: [
      "A sister of the house takes you gently by the elbow and leads you to the keeners’ row, where a white sash is already folded for you. It is done kindly, and with a speed that tells you the sash was folded before you came.",
      "The women at {focus} take up the cry together, on the second beat, and the sound goes through you like a draught. A very old one at the end of the row leaves a gap in the line, and the gap, you understand, is for you.",
    ],
    man: [
      "A brother of the house takes you quietly by the shoulder and leads you to the bearers’ row, where a grey cloth is folded on the pole. It is done kindly, and with a speed that tells you the place was kept.",
      "The men at {focus} shoulder the pole together, on the ninth pace, with a grunt no one will remember. One at the front glances back and nods, a man’s nod, that says: it will be heavy, and you will not cry out.",
    ],
    unspoken: [
      "No sash is folded for you, and no cloth. The family hesitates, and then a child, who has not yet learned the rules, hands you a lantern. “You can carry this,” she says. It is the most sensible thing said all day.",
      "At {focus} the mourners look at you and at their own rows, and at you again, and no row will take you. You stand at the back with the lanterns, among the others who have no place, and find the company excellent.",
    ],
  },
  hands: {
    woman: [
      "A nurse looks at your hands as you enter and says, before you can speak, “The red door.” She means it kindly. She has seen your grip, your age and the cut of you, and assigned you the work she thinks follows, which is the childbed.",
      "The women at {focus} rinse their hands in turn at the basin, and you see they are stained to the wrist with the same grey tincture. One holds hers out, to show you the strength of it, with a little pride.",
    ],
    man: [
      "A physician looks at your hands as you enter and says, before you can speak, “The grey door.” He means it kindly. He has seen your grip, your age and the cut of you, and assigned you the work he thinks follows, which is the knife.",
      "The men at {focus} stand in the corridor with their sleeves rolled, waiting to be called, and none of them looks at the red door. When it opens, a draught of warmth comes out, and each of them looks very hard at the wall.",
    ],
    unspoken: [
      "The attendant looks at the red door, at the grey, and at the plain one between them. “You may choose,” she says, with the air of someone who has never said it. You notice that the plain door has no handle.",
      "At {focus} the healers confer in low voices about who is to examine you, and conclude that it will be the oldest cleaner. She comes with a basin and a kind face and says, “I have seen everything, dear. Sit.”",
    ],
  },
  arms: {
    woman: [
      "The rack-keeper hands you a polished short blade, hilt first, with a small bow. It has never been sharpened. You look at the edge, and at his face, and he looks away, and for a moment the two of you understand each other.",
      "The women at {focus} stand in a line on the stairs, each with a bundle of keys at the belt. Under the keys, at the hip, is a second weight wrapped in cloth. A woman at the end of the line touches it, and nods to you, once.",
    ],
    man: [
      "The rack-keeper hands you a long blade, hilt first, with a small bow. It was sharpened that morning. You feel its weight settle in your palm, and everyone around you appears to feel it was always yours.",
      "The men at {focus} stand along the wall in a line, each with a blade at the hip. They have the air of being looked at. One at the end shifts his weight, and you see that he would rather be on the stairs.",
    ],
    unspoken: [
      "The rack-keeper looks at the long rack, then the short, then the empty hooks. He takes down a cudgel from the end and holds it out, and for a moment neither of you moves. “It has no opinion,” he says. It is, in its way, a kindness.",
      "At {focus} the guards cannot decide which post you belong to, the wall or the stair, and each side concludes that the other will want you. You stand in the middle of the yard, entirely armed and entirely unassigned.",
    ],
  },
  council: {
    woman: [
      "A steward points you to the bench along the wall, behind the stones, where the daughters sit with their teapots. The bench is warm and has a view of every face in the council, and all the faces are turned the other way.",
      "The women at {focus} pass the pot in turn, down the row, and a motion passes with it in murmurs. By the time the pot reaches the end, the council has been told what it will decide, and the men have taken it for their own idea.",
    ],
    man: [
      "A steward points you to the seat among the stones, where the sons of the houses sit with their hands on their knees. The seat is hard and has a view of the room’s one door, and everyone looks to it before they speak.",
      "The men at {focus} speak in turn, and the council nods in turn, and the speaking is a ritual in which it is hard to tell who is being listened to. A very young man says something sensible and is thanked for his enthusiasm.",
    ],
    unspoken: [
      "The steward looks at the bench by the wall, and the seat among the stones, and at you. “I am not certain,” he says, “where the Law would put a witness who is neither.” He puts you at the head of the table, where the cup sits empty.",
      "At {focus} the council begins without you, then pauses, and begins again. Whoever is speaking turns to include you with a look. Nobody has ever had to turn that way before, and the effect is a small, shared, genuine silence.",
    ],
  },
  kin: {
    woman: [
      "The clerk of oaths opens the sworn book to the page for sisters, which is short, and to the page for wives, which is long, and begins to read you the form for the second. You realise he has assumed the vow you came to make.",
      "The women at {focus} sit with a cup between them and pass it, one to the next, in a ring. The ring has a gap in it, and the cup, when it reaches you, is still warm. You are expected to know what to do.",
    ],
    man: [
      "The clerk of oaths opens the sworn book to the page for brothers, which is long, and to the page for husbands, which is short, and begins to read you the form for the first. You realise he has assumed the vow you came to make.",
      "The men at {focus} pass a cup from hand to hand without a word, as men do who were taught that a vow is a thing to be done, not spoken. The cup is cold when it reaches you, and you are expected to know what to do.",
    ],
    unspoken: [
      "The clerk of oaths leafs through the sworn book for the page you are looking for, and finds none. He closes it. “We shall have to write one,” he says, like a man proposing a journey, and fetches a clean sheet.",
      "At {focus} the sworn pairs look at you with something that is not quite sympathy and not quite recognition. One of them, an old woman in a man’s hat with a cup in each hand, offers you the second cup without a word.",
    ],
  },
};

/** How the keeper stands to a hero of each gender at the door, one paragraph for each of the road’s four approaches. */
export const STANCE_DOOR: Record<Stance, Record<Gender, [string, string, string, string]>> = {
  woman_holds: {
    woman: [
      "{Kname} watches you take the place as one watches a daughter take a first step in a house with a steep stair: braced, proud, and relieved that you are not trying the other way.",
      "{Kname} slips you the correction the master withholds, under the cover of passing a cup, and says it was nothing. It is the single disobedience of {ktheir} week, and {kthey} commits it with care.",
      "“You will find it easier,” {kname} says, “if you do not fight the first hour.” {Kthey} says it the way one gives directions to a cold house, from experience, with a hand on your sleeve.",
      "{Kname} says nothing, but stands at your shoulder through all of it, close enough to be felt. If the custom cuts, {kthey} means to be the one holding the cloth.",
    ],
    man: [
      "{Kname} is courteous to you in the way that a house is courteous to its guests, a little more than it is to itself. You are given the better cup, and you are not asked to notice.",
      "{Kname} serves you before the women in the room, with a lowered glance, and goes on to the next without a flicker. It costs {kthem} nothing, which is the point, and you feel the point settle on you.",
      "“You will not mind,” {kname} says, “if we do it the old way.” It is not a question. {Kthey} has spent a lifetime making the old way sound like a kindness, and is very good at it.",
      "{Kname} watches you from the end of the room with a steadiness that is not hostile. {Kthey} is waiting to see whether you will take what is offered without seeing it, as most do.",
    ],
    unspoken: [
      "{Kname} looks at you for a long moment, searching for the rule that fits, and does not find it. “I was taught only two,” {kthey} says, with an honesty that surprises {kthem}. “I am sorry.”",
      "{Kname} is uncomfortable, and covers it with hospitality, and the hospitality is so thorough that it takes you a while to see it is a way of not looking at you. When {kthey} does, {kthey} seems startled by what {kthey} finds.",
      "“I do not know where to put you,” {kname} says. It is the truth, offered like a coin, and there is an unspoken request in it to be told. {Kthey} has never in {ktheir} life asked that of anyone.",
      "{Kname} watches you keep your place in the middle of the room. Something in {ktheir} face loosens, as of a knot that has held thirty years and has just been seen to be only a knot.",
    ],
  },
  man_holds: {
    woman: [
      "{Kname} meets you with the grave kindness of a man who thinks he is protecting something, and holds the door, and does not enter after you. You feel the door’s kindness go on being a door.",
      "{Kname} explains the rule to you at length and with great gentleness, and does not once ask whether you would like to hear it. By the end you know the rule very well, and nothing about {kname}.",
      "“I would not want you hurt,” {kname} says. {Kthey} means it, and you can see {kthem} not noticing that the sentence has a shape, and that you are standing in it.",
      "{Kname} watches you from a little distance, as from a gate, with the air of one who would step forward if you needed it and would be hurt if you did not.",
    ],
    man: [
      "{Kname} greets you with an easy nod, the nod of one who assumes agreement. It occurs to you that you have never been in a room where you needed to earn that assumption.",
      "{Kname} makes a place for you with a gesture and a joke, and the joke is a small one, and the place is not. You take it, and feel the ease close round you like a coat.",
      "“We do not need to say it,” {kname} says, lowering {ktheir} voice, as to a friend. {Kthey} has said this in a hundred rooms, and is always puzzled when someone does not lower theirs.",
      "{Kname} clasps your arm in the way of {ktheir} generation, without thinking, and the warmth is real. You wonder how many hands that warmth has failed to reach, and how many it has not been noticed to miss.",
    ],
    unspoken: [
      "{Kname} clears {ktheir} throat several times and says nothing. It is the sound of a man who has been taught a great many things and finds that none of them is the one he needs.",
      "{Kname} is deeply, scrupulously polite, and the politeness is a wall. You can feel {kthem} trying to be kind, and failing only in that {kthey} cannot tell you to what.",
      "“I want to do this correctly,” {kname} says, helplessly. “I do not know what that is.” It is the first honest thing {kthey} has said, and {kthey} seems to hear it for the first time.",
      "{Kname} stands rather far from you, and you realise it is out of respect. {Kthey} has decided you are owed distance, since {kthey} does not know what else is owed, and the decision is, at least, kind.",
    ],
  },
  woman_bends: {
    woman: [
      "{Kname} meets your eye over the heads of the others and lowers one eyelid. It is the quietest gesture in the room, and the whole room has been rearranged around it.",
      "{Kname} hands you the thing you are not meant to hold, with a face of perfect innocence. “I always forget whose this is,” {kthey} says. {Kthey} has not forgotten anything in years.",
      "“They will say it is not done,” {kname} says. “They have said that to me every year. It is done, quite often, by me.” {Kthey} says it lightly and means every word.",
      "{Kname} steps back from you a pace and lets you stand alone, as a gardener lets a graft take. It is a form of trust, and you feel it as a weight, and as a sort of warmth.",
    ],
    man: [
      "{Kname} looks you over with an amused and level eye. “You will do,” {kthey} says, “if you can be taught to carry things without being thanked.” It is a joke, and it is a condition.",
      "{Kname} hands you the heaviest thing in the room with a pleasant smile and no explanation. “You are tall,” {kthey} says. It is the oldest of {ktheir} tricks, and {kthey} does not pretend otherwise.",
      "“Do try,” says {kname}, “to notice what you were not asked to carry.” {Kthey} says it in the tone of someone reminding you of an umbrella, and {kthey} is not joking.",
      "{Kname} puts you at the back of the room, near the door, and does not say why. It is a place no one fights for. After a while you understand that it is an experiment, and that you are the sample.",
    ],
    unspoken: [
      "{Kname} brightens when you decline to be sorted, and does not hide it. “At last,” {kthey} says, to no one. “Someone has found the third door without being told it exists.”",
      "{Kname} offers you a seat in the middle of the room, and sets another beside it, and sits. {Kthey} says nothing for a time, which is the kindest thing anyone has done for you here.",
      "“I will not tell you what to be,” {kname} says. “I have no right. I will tell you which hall will give you tea, and which will give you trouble, and leave the rest to you.”",
      "{Kname} watches the others look at you and not know where to look. There is, in {ktheir} face, a satisfaction too private to be called triumph and too old to be called anything else.",
    ],
  },
  man_bends: {
    woman: [
      "{Kname} does not speak for you, and the effort of not doing so shows. {Kthey} offers the room a pause, in which you may fill what you like, and the pause is long enough to be a gift.",
      "{Kname} steps aside from the door, not through it, so that you may enter first or not at all. It is a small thing, and you are aware that it has taken {kthem} years to make it look small.",
      "“I will not say it is fair,” {kname} says. “I will say that I am not going to stand in your way, and that I will be quite rude to anyone who does.” {Kthey} looks startled at what {kthey} has said.",
      "{Kname} listens, with a patience that is itself a skill and a rather new one. {Kthey} is learning to be silent without being absent, and you are, for the afternoon, the lesson.",
    ],
    man: [
      "{Kname} fixes you with a measuring look, the look of a man comparing two copies of the same book. “You have the same advantage I do,” {kthey} says. “I wondered what you would do with it.”",
      "{Kname} hands you the broad pen, and the seal, and then, with an apologetic cough, takes both back. “Sorry,” {kthey} says. “I wished to see whether you would let me. Most do.”",
      "“Spend it,” says {kname}, quietly. “The advantage. Spend it where it is least expected, and where no one will thank you. It is the only way I have found to be a decent man.”",
      "{Kname} says nothing, but {ktheir} eyes follow your hands. {Kthey} is waiting to learn whether you will use what the custom put in them, and would, you suspect, rather be disappointed than surprised.",
    ],
    unspoken: [
      "{Kname} asks, with a courtesy that borders on shyness, what you would like to be called. {Kthey} writes it down, without comment, and reads it back to be sure. It is the first time it has been done properly.",
      "{Kname} takes a stool and sits level with you, and does not hurry. “I should like to understand,” {kthey} says, “rather than to be tolerant. Tolerance is cheap, and rather insulting.”",
      "“There is no form for you,” says {kname}, “and I am sorry for the form. I will write one tonight, with your name in it, and you may tell me in the morning what I got wrong.”",
      "{Kname} stands back with a faintly conspiratorial air, like a host who has arranged a surprise. “I could not make them see you,” {kthey} says. “Perhaps you can.”",
    ],
  },
};

/** What a hero does behind the door, as it is worded in a pick, three ways each so no two roads say it alike. */
export const PICK_LABEL: Record<Gender, Record<PickKind, [string, string, string]>> = {
  woman: {
    keep: [
      "Take the seat the women of {place} have been given, and let the day go as it was arranged.",
      "Go along with what is expected of a woman here, and watch how much it is worth.",
      "Sit where you are put, and keep your counsel, and learn what the place gives for it.",
    ],
    bend: [
      "Ask {kname}, in front of the others, for the one exception that would be easiest to grant.",
      "Find the gap in the rule that a woman can fit through, and widen it by a hand.",
      "Make a small, reasonable request that the custom has no answer to, and wait for the answer.",
    ],
    break: [
      "Do the thing the custom forbids a woman, plainly, in the open, and wait.",
      "Take what is not offered to women here, and hold it where everyone can see.",
      "Cross the line the custom draws for a woman, and say that you did it on purpose.",
    ],
    stand: [
      "Speak for the woman beside you who was not asked, and keep speaking until she is.",
      "Stand with the one the custom has passed over, and say that you will be passed over with her.",
      "Name the woman whom the room is not looking at, and make the room look.",
    ],
  },
  man: {
    keep: [
      "Take the place the men of {place} have kept for you, and say nothing of it.",
      "Accept what is offered to a man here, and notice, as you do, what it is worth.",
      "Sit where you are put, say nothing, and learn what the place gives for it.",
    ],
    bend: [
      "Give up the privilege you were about to be offered, and ask that it be shared out instead.",
      "Decline the better seat, and ask for the worse, and see who notices.",
      "Ask {kname} to put your place to a use it was not meant for, and let the others watch.",
    ],
    break: [
      "Do the thing the custom forbids a man, plainly, in the open, and wait.",
      "Take up what a man is not supposed to carry here, and carry it where everyone can see.",
      "Cross the line the custom draws for a man, and say that you did it on purpose.",
    ],
    stand: [
      "Stand beside the one who was passed over, and say that the place you were given was hers to have.",
      "Give your name to the person the custom has left out, and say that you will answer for them.",
      "Name the one whom the room is not looking at, and make the room look.",
    ],
  },
  unspoken: {
    keep: [
      "Let the keeper sort you by the custom’s own reading, and take the seat given, to learn what the seat is.",
      "Answer to the name the room has chosen for you, for now, and watch what that name opens.",
      "Take the place the custom finds easiest, and keep your counsel, and learn what it gives.",
    ],
    bend: [
      "Ask what the custom is for, and for whom, in a tone that expects an answer.",
      "Offer the room a word of your own for what you are, and see which of them can use it.",
      "Make a reasonable request that the custom has no category for, and wait for the answer.",
    ],
    break: [
      "Decline to be sorted at all, and take the seat in the middle of the room.",
      "Stand where the custom has no place, and stay there until someone makes one.",
      "Say that you are neither side of the rule, and stay in the room while they take it in.",
    ],
    stand: [
      "Speak for the one the custom has no word for, and use the word they would choose.",
      "Stand with the person the room is not looking at, and say that you will stand there too.",
      "Name the one whom the rule has erased, and make the room say their name.",
    ],
  },
};
