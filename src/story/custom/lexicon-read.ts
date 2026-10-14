import type { Gender } from "@/engine/hero";
import type { Custom, Stance } from "./lexicon-custom";
import type { PickKind } from "./lexicon-door";

/**
 * How a road reads the hero. The keeper looks at who walks in (the glance, the greeting), and the custom of the road says something to a woman, a man
 * and someone who gives no answer at three places in an approach, and the keeper says goodbye to each differently. Slots: kname, kthey, kthem, ktheir,
 * place, focus, relic.
 */

/** Said on the entry, in one line, when the hero comes in. Twenty words or fewer. */
export const GLANCE: Record<Stance, Record<Gender, string>> = {
  woman_holds: {
    woman: "{Kname} sees a woman come in and softens and stiffens in one breath, like a hostess at a door long guarded.",
    man: "{Kname} sees a man come in, and the room’s courtesy rearranges itself around you without anyone being asked.",
    unspoken: "{Kname} looks for the word for what you are among the two {kthey} was taught, and looks again.",
  },
  man_holds: {
    woman: "{Kname} sees a woman come in, and straightens, and lowers {ktheir} voice, as if the room had become a more delicate one.",
    man: "{Kname} sees a man come in and nods, the easy nod of one who has already agreed with you about everything.",
    unspoken: "{Kname} sees someone who is neither of the two {kthey} expected, and stands quite still, as before weather.",
  },
  woman_bends: {
    woman: "{Kname} sees a woman come in and the corner of {ktheir} mouth moves. It is, you gather, a long-standing and private habit.",
    man: "{Kname} sees a man come in, and weighs you as one weighs a tool whose uses are undecided.",
    unspoken: "{Kname} watches you hesitate at the doors, and smiles. “There are more than two,” {kthey} says, “if you know the house.”",
  },
  man_bends: {
    woman: "{Kname} sees a woman come in, and steps aside from the door a half-pace, deliberately, as one makes a point by not making one.",
    man: "{Kname} sees a man come in and, for a moment, looks faintly guilty, like someone shown a mirror that does not flatter.",
    unspoken: "{Kname} sees you and, rather than guess, asks. “I would like to know what to call you,” {kthey} says, “if you would like to say.”",
  },
};

/** Said at the start of an approach, two ways each. Twenty-two words or fewer. */
export const GREET: Record<Stance, Record<Gender, [string, string]>> = {
  woman_holds: {
    woman: [
      "{Kname} nods to you as to a daughter of the house, and offers the first tea before the first word.",
      "“Sit,” says {kname}, and moves the cushion nearer the stove. It is the kindness of one who knows the cold at the room’s far end.",
    ],
    man: [
      "{Kname} serves you first and apologises for the tea, which is a way of reminding you that you are a guest.",
      "“You must be tired,” says {kname}, and puts the better cup by your hand. The politeness is perfect, and has a shape you can feel.",
    ],
    unspoken: [
      "{Kname} offers you tea and no title, and the omission is so careful that it is almost a title of its own.",
      "“Welcome,” says {kname}, and stops, having reached the end of what {kthey} knows how to say to you.",
    ],
  },
  man_holds: {
    woman: [
      "{Kname} inclines his head to you, a little more than to a man, and the extra is the whole difficulty.",
      "“Ah, madam,” says {kname}, and only when you look up does he seem to hear the word and wonder if it was right.",
    ],
    man: [
      "{Kname} claps you on the shoulder, lightly, and calls you by your given name before you have given it.",
      "“There you are,” says {kname}, in the voice of a man greeting a cousin he has not met, and means it entirely.",
    ],
    unspoken: [
      "{Kname} greets you with the careful vagueness of a man negotiating a doorway in the dark.",
      "“Welcome, ah, friend,” says {kname}, and looks relieved to have found the word, and nervous that it will not do.",
    ],
  },
  woman_bends: {
    woman: [
      "{Kname} greets you in a low voice, as one comrade to another, and pours without asking.",
      "“Come in,” says {kname}, “before the neighbours count you.” {Kthey} says it lightly, and bolts the door a moment later.",
    ],
    man: [
      "{Kname} greets you with an even look and an offer of tea, and a task to be done while the tea cools.",
      "“Good,” says {kname}, “a pair of hands.” It is not a compliment, exactly. It is an assignment, and an invitation to be useful.",
    ],
    unspoken: [
      "{Kname} greets you as she would a friend of long standing, which is to say without a title and with the kettle already on.",
      "“I had hoped someone like you would come,” says {kname}, and then, hastily, “I mean someone who would not need the speech.”",
    ],
  },
  man_bends: {
    woman: [
      "{Kname} greets you and, instead of speaking next, waits, and the waiting is a gift that costs him something to give.",
      "“Please,” says {kname}, “tell me if I do it wrong.” He does it wrong at once, and you tell him, and he thanks you.",
    ],
    man: [
      "{Kname} greets you with a wry look, like one old offender to another, and asks whether you too feel ashamed of the chair.",
      "“I am told we have a great deal to answer for,” says {kname}, pouring. “I thought we might begin with the tea.”",
    ],
    unspoken: [
      "{Kname} greets you and asks, quite openly, what form of address you prefer, and writes it down in a small book.",
      "“Welcome,” says {kname}, “and, if I get anything wrong, say so. I would rather be corrected than comfortable.”",
    ],
  },
};

/** A thing the hero notices about the custom at the focus of an approach, once, by gender. Twenty-two words or fewer. */
export const NOTE: Record<Custom, Record<Gender, string>> = {
  lineage: {
    woman: "Everything at {focus} that is addressed to the household is addressed to someone who is, you see, not you.",
    man: "Everything at {focus} that is addressed to the household is addressed to you, and you have never once had to check.",
    unspoken: "Everything at {focus} that is addressed to the household is addressed to a column or a margin, and you are in neither.",
  },
  mats: {
    woman: "The mats at {focus} are laid so that the best light falls on the east row, and you find that you are standing on the west.",
    man: "The mats at {focus} are laid so that the best light falls on the east row, and you find that you are standing in it.",
    unspoken: "The mats at {focus} are laid in two rows, and you notice that you have been standing between them for some time.",
  },
  ledgers: {
    woman: "The books at {focus} are open to your eye and closed to your hand, and the line between the two is a pen.",
    man: "The books at {focus} are open to your eye and to your hand, and no one has asked you to prove either.",
    unspoken: "The books at {focus} are open to everyone and, as far as anyone can say, addressed to no one in your position.",
  },
  names: {
    woman: "The names at {focus} are called out in two registers, and yours, you notice, is always in the second.",
    man: "The names at {focus} are called out in two registers, and yours, you notice, is always in the first.",
    unspoken: "The names at {focus} are called out in two registers, and the voice hesitates, each time, when it reaches yours.",
  },
  matches: {
    woman: "Every letter at {focus} that mentions a bride is written in the voice of someone speaking about her, not to her.",
    man: "Every letter at {focus} that mentions a groom is written in the voice of someone speaking to him, as if he were listening.",
    unspoken: "Every letter at {focus} is written to one of two, and you wonder whom the clerk would address if you were the reader.",
  },
  mourning: {
    woman: "The mourners at {focus} have left a place in the row of white, and no one remarks on it, as they do not remark on a stair.",
    man: "The mourners at {focus} have left a place at the pole’s shoulder, and no one remarks on it, as they do not remark on a stair.",
    unspoken: "The mourners at {focus} have left no place for you, and no one has done it on purpose, which is the worse part.",
  },
  hands: {
    woman: "The healers at {focus} defer to you by a hair, as to someone whose body is known territory, and you cannot say whether it is respect.",
    man: "The healers at {focus} defer to you by a hair, as to someone whose body is not known, and you cannot say whether it is respect.",
    unspoken: "The healers at {focus} do not defer to you at all, because they cannot tell which way, and so they are simply very careful.",
  },
  arms: {
    woman: "The weapons at {focus} hang at heights that were chosen for hands other than yours, and you reach a little higher than is comfortable.",
    man: "The weapons at {focus} hang at heights that were chosen for hands like yours, and you have never once had to reach.",
    unspoken: "The weapons at {focus} hang at two heights, long and short, and neither has been chosen with you in mind.",
  },
  council: {
    woman: "The chairs at {focus} face the stones, and the benches face the chairs, and you have been shown to the bench.",
    man: "The chairs at {focus} face the stones, and the benches face the chairs, and you have been shown to a chair.",
    unspoken: "The chairs at {focus} face the stones, and the benches face the chairs, and no one has yet shown you to either.",
  },
  kin: {
    woman: "The oaths at {focus} are spoken in a form with a place in it for “wife” and “sister”, and you wait to be fitted to one.",
    man: "The oaths at {focus} are spoken in a form with a place in it for “brother” and “husband”, and you wait to be fitted to one.",
    unspoken: "The oaths at {focus} are spoken in a form with places for “brother” and “sister”, and you wait, without hope, to be fitted to one.",
  },
};

/** What the custom says to a hero of each gender in the middle of an approach, and what it costs. Forty words or fewer. */
export const LINE_A: Record<Custom, Record<Gender, string>> = {
  lineage: {
    woman: "A woman’s name goes in the margin, and a margin can be crowded, as a corner can. You are told your place gently, and the gentleness is the part that stays with you.",
    man: "A man’s name goes in the column and stays there as long as he does not give offence. You are told your place gently, and you understand that the gentleness is an offering, and that you are meant to accept.",
    unspoken: "A name with no side goes in pale ink, and pale ink fades. You are told your place gently, and the gentleness is as complete as a clerk’s embarrassment.",
  },
  mats: {
    woman: "A woman at the mats is told she is quick, in a tone that means she is quick for the west row. You are told so gently, and you hear the shape of the sentence behind the praise.",
    man: "A man at the mats is told he is strong, in a tone that assumes the east row. You are told so gently, and notice that the strength is a thing you were not asked to prove.",
    unspoken: "A disciple with no row is told they are welcome, in a tone that means the doorway. You are told so gently, and you are very quick to learn both halves of the forms.",
  },
  ledgers: {
    woman: "A woman keeps the books and does not close them. You are shown the gap in the line where your hand may stop, and are thanked, in advance, for stopping.",
    man: "A man signs what a woman has kept. You are shown the place on the line where your hand may fall, and are thanked, in advance, for falling there without looking up.",
    unspoken: "A person with no side may keep or sign, but not both, and not in the same hour. You are shown a line at which you may stop, and are thanked, in advance, for not asking why.",
  },
  names: {
    woman: "A woman is called by a house, not by herself, and is expected to answer to both. You answer to the second, and notice that the first has not noticed you did.",
    man: "A man is called by himself, and is expected to answer as if there were no other way. You answer, and notice how rarely you have been asked to consider that there was.",
    unspoken: "A person with no side is called whatever the speaker is least afraid of. You answer to each in turn, and notice how many you have been, and how few of them were yours.",
  },
  matches: {
    woman: "A woman is asked for last, and told so as a courtesy. You are shown the order of the letters, and invited to admire how neatly you come at the end.",
    man: "A man is the one who asks, and told so as an honour. You are shown the order of the letters, and invited to admire how neatly you come at the beginning.",
    unspoken: "A person who is neither is asked for by no one, and told so as a reprieve. You are shown the order of the letters, and invited to be glad that you are not in it.",
  },
  mourning: {
    woman: "A woman weeps where she is put, in the key she is given, for the time she is allotted. You are shown where to stand, and told, kindly, that no one expects you to be unmoved.",
    man: "A man carries where he is put, at the weight he is given, for the distance he is allotted. You are shown where to stand, and told, kindly, that no one expects you to be moved.",
    unspoken: "A person with no side mourns wherever there is a gap, which is generally at the back. You are shown where to stand, and told, kindly, that you are not expected to know.",
  },
  hands: {
    woman: "A woman is trusted with the childbed and kept from the knife, and told so as a courtesy to the knife. You are shown the red door and told how many hundreds have gone through it before you.",
    man: "A man is trusted with the knife and kept from the childbed, and told so as a courtesy to the childbed. You are shown the grey door and told how many hundreds have gone through it before you.",
    unspoken: "A person with no side is trusted with neither, and told so as a courtesy to everyone. You are shown the plain door and told that it has never, as far as anyone knows, been opened.",
  },
  arms: {
    woman: "A woman keeps the blade and does not draw it. You are shown the oil and the cloth and told, kindly, that a polished edge is its own defence.",
    man: "A man bears the blade and does not put it down. You are shown the sling and the stand and told, kindly, that a drawn edge is its own defence.",
    unspoken: "A person with no side may carry a cudgel, which has no edge to defend. You are shown the stand, and the empty hooks beside it, and told that the hooks are held for someone.",
  },
  council: {
    woman: "A woman sits and does not move, and the council hears her through a man’s mouth. You are shown the bench and told how many hours a day it is warm.",
    man: "A man sits and moves, and the council hears him in his own mouth. You are shown the chair and told how many hours a day it is yours.",
    unspoken: "A person with no side sits as a witness, which is to say they may be asked, and need not be heard. You are shown the stool and told it is not a bench, and not a chair.",
  },
  kin: {
    woman: "A woman is sworn into a house, not onto one. You are shown the form with a place for “wife” in it, and the smaller print for “sister”, and no mention of what else you might be.",
    man: "A man is sworn onto a house, not into one. You are shown the form with a place for “brother” in it, and the smaller print for “husband”, and no mention of what else you might be.",
    unspoken: "A person with no side is sworn nowhere. You are shown the form, and the two places in it, and a blank at the end that someone has left in case, for years, and has never been asked about.",
  },
};

/** What a hero of each gender is shown the cost of, near the end of an approach. Forty words or fewer. */
export const LINE_B: Record<Custom, Record<Gender, string>> = {
  lineage: {
    woman: "A line is written in the margin, and the clerk blows on it to dry. “You will not mind,” he says. You do mind, and notice that minding is a thing a margin has no column for.",
    man: "A line is written in the column, and the clerk blows on it to dry. “You will be pleased,” he says. You are not, and notice that displeasure is a thing a column has no margin for.",
    unspoken: "A line is written, and the clerk blows on it, and it is already fading. “It will do for now,” he says. You see that for now, in his hand, is a sort of mercy.",
  },
  mats: {
    woman: "A master corrects you with “prettier” where he would have said “stronger”, and the word lands on you like a bit of rain on a freshly drawn line. You see the form beneath it, and finish the form.",
    man: "A master corrects you with “stronger” where he would have said “steadier”, and the word lands on you like a hand on the shoulder. You see the form beneath it, and wonder who is not being told.",
    unspoken: "A master corrects you with “Ah,” and then with silence, and then, helplessly, with the word he would use for a son. You see the form beneath it, and let it pass.",
  },
  ledgers: {
    woman: "A clerk draws a line beneath your total and signs it with a name that is not yours. “For the household,” he says. The sum is very good, and you can see exactly whose it will be.",
    man: "A clerk draws a line beneath a total that is not yours and offers you the pen. “For the household,” he says. You can see exactly whose sum it is, and whose hand it was.",
    unspoken: "A clerk draws a line and leaves a gap in it for a signature that has not been decided. “For the household,” he says, and for the first time the word has a hole in it.",
  },
  names: {
    woman: "A name is recut on a seal, shallow, for the third time, and the dust of it settles on the cutter’s sleeve. “It will take another,” he says, with a cutter’s optimism about stone.",
    man: "A name is cut on a seal, deep, once, and the cutter puts it down with a click. “It will last you,” he says, and you wonder how many of the people you know can say the same.",
    unspoken: "A seal is cut with a name and no title, and the cutter holds it to the light and frowns. “It looks naked,” he says, and then, to your surprise, “It looks like you.”",
  },
  matches: {
    woman: "A letter is read aloud in which your price is discussed, civilly. You are free to leave the room, and so you can hear the rest of it from the passage, which has better acoustics.",
    man: "A letter is read aloud in which your prospects are discussed, civilly. You are free to stay in the room, and so you hear what it costs a woman to sit in the next.",
    unspoken: "A letter is drafted for you and abandoned half-written, and the go-between sits with the page. “I do not know how to ask for someone like you,” she says. “I would like to learn.”",
  },
  mourning: {
    woman: "The cry rises, and you are in it, and you hear your own voice go where it was told. It is not false. It is only that no one has ever asked what else it might have wanted to say.",
    man: "The pole bites into your shoulder, and you carry, and you hear your breath go where it was told. It is not false. It is only that no one has ever asked what else it might have wanted to say.",
    unspoken: "The procession turns, and you are at its edge, carrying a lantern, and the light falls on every face in turn. It is the best seat for seeing what the dead meant to them.",
  },
  hands: {
    woman: "A cut is stitched, and you are the one who stitched it, and the stitching is better than the physician’s. He looks at it later and says nothing, and signs the fee in his own name.",
    man: "You sit up with a fever through the night in the women’s ward, and the nursing is better than the ward’s. The matron looks at it in the morning and says nothing, and you are not asked back.",
    unspoken: "A wound is cleaned by the oldest cleaner, who asks no questions and has tea afterwards. “I have been told to examine you by a rule that does not know you,” she says. “I prefer to look.”",
  },
  arms: {
    woman: "A blade hangs at the wrong height, and you reach it. A rack-keeper pretends not to see you reach. It is the courtesy of those who have decided, in advance, to be surprised.",
    man: "A blade hangs at your height, and you take it. A rack-keeper nods, once. It is the courtesy of those who have decided, in advance, that you are what the blade is for.",
    unspoken: "A cudgel is put in your hand, and it weighs what it weighs. A rack-keeper watches you test it, and says, “It is a good one,” in the voice of one proposing a different kind of trust.",
  },
  council: {
    woman: "A motion is moved by a man in your words, and thanked for its brevity. The motion carries. In the corridor afterwards he looks at you and does not know where to put his hands.",
    man: "A motion is moved by you, in your words, and thanked for its brevity. The motion carries. In the corridor afterwards a woman looks at you and does not say what she is thinking.",
    unspoken: "A motion is moved by nobody, because there is nobody it fits to move it. The council waits. After a long moment a voice from the teapot bench says, “I should like to hear them.”",
  },
  kin: {
    woman: "A cup is passed, and you drink, and the ring closes. The vow is the plain one, and enough, and is written in a book that will outlast the rule that made you need it.",
    man: "A cup is passed, and you drink, and the hand that holds it does not shake. The vow is the plain one, and enough, and goes into a book that will outlast the rule that made you need it.",
    unspoken: "A cup is passed, and you drink, and the ring is a line, and the line holds. The vow is the plain one, written in a book that has no page for it, until a fresh one is sewn in.",
  },
};

/** The keeper’s goodbye at the end of an approach, two ways each. Thirty words or fewer. */
export const SENDOFF: Record<Stance, Record<Gender, [string, string]>> = {
  woman_holds: {
    woman: [
      "“Go carefully,” says {kname}. “They will say it is not done. I will say that I have seen it done, and let that be the end.”",
      "{Kname} presses a small cake into your hand at the door. “For the road,” {kthey} says. “And for the rule. It is hard on the stomach.”",
    ],
    man: [
      "“Thank you for your patience with an old house,” says {kname}, and sees you to the gate. The courtesy does not quite end there.",
      "{Kname} walks you to the step. “You were no trouble,” {kthey} says, and means it as praise, and is startled when you do not smile.",
    ],
    unspoken: [
      "“I do not know what to say,” says {kname}, at the door. “May the road be kind to you. That, at least, I can say to anyone.”",
      "{Kname} hesitates at the step. “I will think about it,” {kthey} says, and you believe that {kthey} will, which is more than most have promised.",
    ],
  },
  man_holds: {
    woman: [
      "“Take care,” says {kname}, and holds the gate. “It is a hard road for a woman.” He says it with such kindness that the hardness is almost a gift.",
      "{Kname} walks you to the step, bowing slightly. “Forgive an old man his fussing,” he says. He is not old, and the fussing is a fence.",
    ],
    man: [
      "“Good man,” says {kname}, and claps your shoulder at the gate. The words are warm and easy, and carry a freight you did not choose.",
      "{Kname} walks you to the step. “We could use more like you,” he says, and means that you are like him, and does not hear it.",
    ],
    unspoken: [
      "“Well,” says {kname}, at the gate, and tries three further sentences, and gives up. “Well,” he says again, more gently, and holds the gate.",
      "{Kname} watches you go, and you can feel him searching for the thing he should have said. It will come to him, you think, at some quiet hour.",
    ],
  },
  woman_bends: {
    woman: [
      "“Come back,” says {kname}, “and bring someone.” {Kthey} says it at the door, low, like a password, and closes it quickly against the draught.",
      "{Kname} presses a folded paper into your sleeve. “A name,” {kthey} says. “In a city you will reach. Say I sent you, and do not say how.”",
    ],
    man: [
      "“You were useful,” says {kname}, at the gate. “Be useful somewhere else.” It is the warmest thing {kthey} says to anyone, and you take it as such.",
      "{Kname} hands you a basket and a list. “For the next house,” {kthey} says. “Carry it, and say nothing, and learn what the weight is.”",
    ],
    unspoken: [
      "“Go well,” says {kname}, at the door, “and do not let them name you before you are ready.” {Kthey} says it like a woman who has been named.",
      "{Kname} embraces you briefly, and without comment, and lets go. “Come back when you have a word for it,” {kthey} says. “I am collecting.”",
    ],
  },
  man_bends: {
    woman: [
      "“Thank you,” says {kname}, at the gate, “for letting me learn it in your company. I am sorry it was not cheaper for you.”",
      "{Kname} holds the gate and, after a moment, lets it go, so that you may close it yourself. It is a kindness he has had to rehearse.",
    ],
    man: [
      "“Do something,” says {kname}, at the gate, like a man who says it to himself each morning. “It is small, but you are the one with the hands.”",
      "{Kname} walks you to the step. “If you find out how to be useful,” he says, “write and tell me. I am on the fourth draft.”",
    ],
    unspoken: [
      "“Please come again,” says {kname}, “and tell me what I got wrong.” {Kthey} says it with a pencil already out, and means it exactly.",
      "{Kname} walks you to the gate and, uncertain whether to bow, does neither, and simply stands. After a moment it begins to look like respect.",
    ],
  },
};

/** The keeper’s word on what the hero has done on earlier roads, once the pattern is clear. Twenty-eight words or fewer. */
export type WordState = "broke" | "stood" | "bent" | "kept";
export const WORD: Record<"holds" | "bends", Record<WordState, string>> = {
  holds: {
    broke: "“Word of you comes from the roads before this,” says {kname}. “You break the rule in front of people. I do not like it, and I am curious.”",
    stood: "“They say you speak for people the rule forgets,” says {kname}. “I do not know that I approve. I know that I am listening, which is more than I intended.”",
    bent: "“They say you ask for exceptions, politely, and get them,” says {kname}. “It is a gift. I should like to know whether it is a trick.”",
    kept: "“They say you keep the old ways without being asked,” says {kname}. “It is rare. I do not know whether to thank you or to worry for you.”",
  },
  bends: {
    broke: "“Word of you comes from the roads before this,” says {kname}. “You break the rule in front of people. I have waited years for that.”",
    stood: "“They say you speak for those the rule forgets,” says {kname}. “Good. It is the only part of this that has ever worked, and the only part that is mine.”",
    bent: "“They say you ask for exceptions, politely, and get them,” says {kname}. “That is my own method. I did not expect to meet it coming the other way.”",
    kept: "“They say you keep the old ways,” says {kname}, a little disappointed. “That is your right. I had hoped, from the rumour, for more mischief.”",
  },
};

/** The keeper’s last word on what the hero did behind the door, on the way back. Twenty-four words or fewer. */
export const RETURN_WORD: Record<"holds" | "bends", Record<PickKind, string>> = {
  holds: {
    keep: "{Kname} is visibly pleased, and a little sad. “That is how it is done,” {kthey} says, as though it were praise, and also an epitaph.",
    bend: "{Kname} lets you go with a long look. “You asked well,” {kthey} says. “I did not say yes. I did not say no. Think about that.”",
    break: "{Kname} says nothing as you leave. In the doorway {kthey} says, to the room, “Well,” and the room breathes out at last.",
    stand: "{Kname} watches you go, and then watches the one you stood for. “I had not noticed,” {kthey} says, to no one, and then, “I ought to have.”",
  },
  bends: {
    keep: "{Kname} nods, a little flat. “That is your choice,” {kthey} says. “It is a real one. I should hate to think I had pressed you.”",
    bend: "{Kname} smiles at the door. “You see how it works,” {kthey} says. “A small request, a long consequence. I could use an apprentice.”",
    break: "{Kname} says nothing as you leave. In the doorway {kthey} touches your sleeve. “Thank you,” {kthey} says. “I have waited eleven years to see it done.”",
    stand: "{Kname} walks the one you stood for to the gate. “You will be asked again,” {kthey} says to you. “I should say yes, if I were you.”",
  },
};

/** The Elder’s remark when a hero bent or broke a custom before a keeper who holds it, and when one kept it before a keeper who bends it. */
export const CLASH_MEMORY: [string, string] = [
  "You pressed a custom in front of a keeper who holds it, and {kname} will remember. Keepers who hold are not cruel. They are only quite sure, and it is a lonely thing to see someone else unsure.",
  "{Kname} holds the rule at {place}, and you leaned on it. I do not say you were wrong. I say a rule that is leaned on has to lean back, and it will not be {kname} who does it.",
];
export const EASE_MEMORY: [string, string] = [
  "You kept the custom before a keeper who bends it. {Kname} will not hold it against you, but {kthey} will have noticed that you were asked a question and gave the old answer.",
  "{Kname} was trying to give you room at {place}, and you took the old seat. That is your right. It is also a door closed on {kname}, who was holding it open with some effort.",
];

/** The Elder’s report of a road, ahead of the others, for a hero who went through the door. */
export const REPORT_CUSTOM: [string, string, string] = [
  "You sat at {place} and were read by its custom, and did something about it. I shall want that in the ledger, in your own hand, when you have the words.",
  "I hear that {place} sorted you and you answered. It is the only part of a report I truly wish to hear, and the part that is least often reported.",
  "A custom is a record of what a place was afraid of. At {place} you were shown the fear, and I should like to know what you made of it.",
];
