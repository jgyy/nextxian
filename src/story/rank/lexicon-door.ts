import type { Gender } from "@/engine/hero";
import type { RankBand, RankWay } from "@/engine/rank";
import type { Rung } from "./lexicon-rank";
import type { Reading } from "./lexicon-stance";

/**
 * The door of rank. In the middle of every approach there is a door that opens only to a woman, a man or someone who gives no answer, and behind it a scene
 * of its own: what the rung does to that hero (one of two paragraphs by rung), how the keeper meets them by where their rung stands against the road’s
 * (below it, at it, above it), the Elder’s word on both, and four picks. A hero sees one scene behind each door and never the other two.
 */

/** The scene’s heading, after the road’s title. */
export const DOOR_TITLE: Record<Gender, string[]> = {
  woman: ["The Women’s Rung", "The Daughters’ Stair", "The Side Stair", "The Women’s Count"],
  man: ["The Men’s Rung", "The Sons’ Stair", "The Front Stair", "The Men’s Count"],
  unspoken: ["The Rung Between", "The Third Stair", "The Open Landing", "The Count Without a Name"],
};

/** The door’s own label, in the middle of an approach. One for each approach, so a road never offers the same line twice. */
export const DOOR_LABEL: Record<Gender, [string, string, string, string]> = {
  woman: [
    "Go where the women of {place} are placed by their rung, beside {focus}, and see how the place reads a woman who has climbed.",
    "Follow the women out of the room when the rungs are called, past {focus}, to the side of {place} that a woman’s rank is sent to.",
    "Take the place {place} keeps for a woman of your rung at {focus}, and watch what is done with your rank from there.",
    "Slip through the narrower door beside {focus} that the women of {place} use, and see what a rung is worth on that stair.",
  ],
  man: [
    "Go where the men of {place} are placed by their rung, beside {focus}, and see how the place reads a man who has climbed.",
    "Follow the men out of the room when the rungs are called, past {focus}, to the side of {place} that a man’s rank is sent to.",
    "Take the place {place} keeps for a man of your rung at {focus}, and watch what is done with your rank from there.",
    "Go through the wider door beside {focus} that the men of {place} use, and see what a rung is worth on that stair.",
  ],
  unspoken: [
    "Ask {kname} where those who give no answer are placed by their rung, beside {focus}, and go there.",
    "Wait at {focus} until someone remembers that the rung has no side for you, and see where {place} sends you.",
    "Take the place at {focus} that {place} has not assigned to anyone, and wait to be asked what you are and what you have climbed.",
    "Find the doorway beside {focus} that belongs to neither side of {place}, and stand in it with your rung on your sleeve.",
  ],
};

/** What the rung does to a hero of each gender, in two paragraphs for each rung. Forty words or so each. */
export const DOOR_SCENE: Record<Rung, Record<Gender, [string, string]>> = {
  roll: {
    woman: [
      "The clerk writes you into the water column before you have spoken, and hands you a pail whose rope has been worn smooth by other women. The line for a woman’s rate is already ruled, a finger below the rest.",
      "At {focus} the women of the water column look up at you, and then past you, for the sleeve. They have learned to look for the one thing that would make them bow to a stranger.",
    ],
    man: [
      "The clerk writes you into the loads column and hands you a yoke. The line for a man’s rate is ruled a finger higher, and the clerk does not seem to notice that he drew it so.",
      "At {focus} the men of the load-yard make room on the bench without being asked, and look at your shoulders. A load-man is measured by what he can put on a pole, and the measure is sometimes wrong.",
    ],
    unspoken: [
      "The clerk looks at the three columns, then at you, and writes you at the foot of spare in a smaller hand. It is the only column with no rate, and he apologises as he draws the line.",
      "At {focus} the spare hands lean on the wall, neither water nor loads, and watch the other columns work. They make a place for you without comment. It is, they say, the one thing spare is good at.",
    ],
  },
  novices: {
    woman: [
      "The hall-mother takes your name in the white hall’s book and your measure for a grey sleeve, and tells you the hour at which the bath is yours. The hour is late, and hot, and kind in its way.",
      "At {focus} the women of the white hall sit in the order of their breaths, the oldest by the stove. A woman who gathered first is owed a bow, and is bowed to, and watches who does not.",
    ],
    man: [
      "The hall-master takes your name in the grey hall’s book and your measure for a grey sleeve, and tells you the hour at which the bath is yours. The hour is early, and clean, and not remarked on.",
      "At {focus} the men of the grey hall sit in the order of their breaths, the oldest by the window. A man who gathered first is owed a bow, and is bowed to, and expects it a little more than he knows.",
    ],
    unspoken: [
      "The hall-master and the hall-mother consult each other over the book, and write you in the passage between the halls. The passage has a bench and a lamp, and no bath hour at all.",
      "At {focus} the passage novices sit between the two halls, in the draught of both. They gather their breaths in the middle of the corridor and are counted twice, once by each hall, and kept by neither.",
    ],
  },
  pairing: {
    woman: [
      "The board-clerk chalks your name beside a woman’s, as a matter of course, and reaches for the second piece when you ask for another pair. A cross-pair costs a fee, and the fee is yours to pay.",
      "At {focus} the crowd waits for the women’s pairs to be called and spars with its eyes. A woman’s bout is the first of the evening and the most watched, and the watching is not always for the form.",
    ],
    man: [
      "The board-clerk chalks your name beside a man’s, as a matter of course, and nods when you ask for a pair above your station. A man’s pair is rarely refused, and the clerk seems to think this is the fee.",
      "At {focus} the crowd waits for the men’s pairs to be called and spars with its voice. A man’s bout is the last of the evening and the best attended, and the cheering is not always for the form.",
    ],
    unspoken: [
      "The board-clerk holds the chalk over the column for ‘other’ and does not write. He looks at the board, then at you, and asks quietly whom you would like to be paired against, and does not seem to expect an answer.",
      "At {focus} the crowd cannot decide which row to put you in and settles for none. A bout with no row is fought in the yard behind the kitchen, and is, the cooks say, better attended than the board’s.",
    ],
  },
  seats: {
    woman: [
      "A servant shows you to a hearth chair, which is warm and low and a little too near the stove. It is the chair kept for a core woman, and the cushion has been worn thin by the last who sat in it.",
      "At {focus} the women of the ring sit with their backs to the fire and watch the door. They speak second, and when they speak the room goes briefly quiet, as for the end of a song.",
    ],
    man: [
      "A servant shows you to a door chair, which is cool and high and a little too near the draught. It is the chair kept for a core man, and the arms have been polished by the last who sat in it.",
      "At {focus} the men of the ring sit with their backs to the door and watch the hearth. They speak first, and when they speak the room goes briefly attentive, as for the start of a song.",
    ],
    unspoken: [
      "A servant looks at the hearth chairs, then at the door chairs, then at the stool by the wall, and sets the stool in the ring’s open gap. It has no arms. It is, the servant mutters, where the thirteenth always sits.",
      "At {focus} the ring has not agreed whether you belong at the hearth or the door. It agrees, for the moment, that you are in the middle, and the minute-clerk writes ‘present’ and nothing else.",
    ],
  },
  portraits: {
    woman: [
      "The painter measures your soul’s light against a lamp and reaches, without being asked, for the robe that has its hair up. It is a fine robe, and you can see where the brush has gone over it before.",
      "At {focus} the portraits of the nascent women hang in a narrow row at the end of the hall, in light that comes from a side window. The row is shorter than the others, and every frame is slightly lower.",
    ],
    man: [
      "The painter measures your soul’s light against a lamp and reaches, without being asked, for the robe with its hair down. It is a fine robe, and you can see where the brush has been lifted off it to leave the face.",
      "At {focus} the portraits of the nascent men hang in a long row down the middle of the hall, in the light of the great window. The frames are heavier here, and every one is a little taller than it needs to be.",
    ],
    unspoken: [
      "The painter measures your soul’s light against a lamp, and then sets the robes aside and picks up a plain brush. “I have never been asked for this,” the painter says. “I do not know how to paint what is there.”",
      "At {focus} the hall has a space between the rows, a single wall with a hook and no frame. The painters call it ‘in progress’. It has been in progress for sixty years, and the hook is bright.",
    ],
  },
  severing: {
    woman: [
      "The sage who holds the thread lays it across your palm and asks you to name the household first. The order is old and quietly assumed, and your hand knows the weight of it before you have chosen.",
      "At {focus} the women who have been cut loose stand in a line in the grey light. They are free to sign and free to travel and have nobody left to send word to, and they look at you like a ledger being turned.",
    ],
    man: [
      "The sage who holds the thread lays it across your palm and asks you to name the name first. The order is old and quietly assumed, and your hand finds the cut without being shown it.",
      "At {focus} the men who have been cut loose stand in a line in the grey light. They are free to leave and free to be forgotten and have nobody left to carry for, and they look at you like a road being measured.",
    ],
    unspoken: [
      "The sage who holds the thread lays it across your palm and says there is no order for you. “Cut whichever you will,” the sage says, “and I shall write down what you cut. I have never had to write it before.”",
      "At {focus} the sages who have been cut loose watch you take the thread without waiting to be told which end to hold. One of them smiles, and looks away, as at a child who has found the door of a cupboard.",
    ],
  },
  table: {
    woman: [
      "The table-clerk shows you to the moon end, which is warm, and sets a bowl at your place without being asked. The bowl is worn on one side by a hand that held it for a Dao that was not yours.",
      "At {focus} the women seekers sit in a row along the moon side, each with a tablet over her head. They have been chosen, or have refused, and the table writes both in the same hand.",
    ],
    man: [
      "The table-clerk shows you to the sun end, which is bright, and sets a sword-stand at your place without being asked. The stand is worn on one side by a hand that held it for a Dao that was not yours.",
      "At {focus} the men seekers sit in a row along the sun side, each with a tablet over his head. They have been chosen, or have refused, and the table writes both in the same hand.",
    ],
    unspoken: [
      "The table-clerk looks at the sun end, at the moon end, and at the single stool by the pot, and with a small cough sets a cup at the head of the table. “It is the most comfortable chair,” the clerk says. “No one has taken it.”",
      "At {focus} the seekers on either side of the table have gone quiet. They watch you sit at the head, where neither the sun nor the moon sits, and one of them reaches for the pot before you can.",
    ],
  },
  column: {
    woman: [
      "The copyist turns the page to the second column and holds the pen ready, as for a daughter. A line has been ruled for you at the bottom, small and clean, and the ink on the line before it is still tacky.",
      "At {focus} the copyists dust the second column with a feather. It is the longer of the two, and the darker, and they say that is only because there are more names in it than anyone intended.",
    ],
    man: [
      "The copyist turns the page to the first column and holds the pen ready, as for a son. A line has been ruled for you at the bottom, square and dark, and the ink on the line before it has long since dried.",
      "At {focus} the copyists dust the first column with a feather. It is the shorter of the two, and the cleaner, and they say that is only because the ink was better in those years.",
    ],
    unspoken: [
      "The copyist turns the page to the first column, hesitates, turns it to the second, hesitates, and lays a finger on the margin. “There is a line,” the copyist says. “It is small. I have never seen it used.”",
      "At {focus} the copyists have gathered round the margin line and are not dusting it. They look at it, at the pen, and at you, as at a fire that has taken without anyone striking a flint.",
    ],
  },
};

/** How the keeper meets a hero at the door, by whether the keeper reads rank first or sex first, by where the hero’s rung stands against the road’s, and by the hero’s gender. */
export const STANCE_DOOR: Record<Reading, Record<RankBand, Record<Gender, [string, string]>>> = {
  rank: {
    below: {
      woman: [
        "{Kname} reads your rung first and finds it short of {place}, and says so, evenly, without once glancing at what you are. It is a kind of courtesy, and it stings the way courtesy does.",
        "“You are not of this rung yet,” {kname} says, “and I would say the same to a man.” {Kthey} says it plainly, and you see {kthem} believe it, and not see what the sentence leaves out.",
      ],
      man: [
        "{Kname} reads your rung first and finds it short of {place}, and says so, evenly, without making any allowance. You notice you had expected one, and that nobody else here is getting it.",
        "“You are not of this rung yet,” {kname} says, “and I do not do favours for a man’s sleeve.” {Kthey} says it plainly, and for the first time that day you feel a door shut without a hand on it.",
      ],
      unspoken: [
        "{Kname} reads your rung first and finds it short of {place}, and does not trouble to read the rest. It is the first time all day anyone has asked you only one question, and it is the one you cannot answer.",
        "“You are not of this rung yet,” {kname} says. “I do not need the other answer for that.” {Kthey} says it with an unfamiliar relief, as at a form that can be filled in without a second column.",
      ],
    },
    at: {
      woman: [
        "{Kname} reads your rung first, and it matches {place}, and {kthey} lets out a breath. “Good,” {kthey} says. “I shall deal with you as I would with the rung, and the rung does not mind who holds it.”",
        "“You hold the rung,” {kname} says, “and the rung is what I have been waiting for.” {Kthey} says it to your face, and you see the gap {kthey} has not noticed between the sentence and the room.",
      ],
      man: [
        "{Kname} reads your rung first, and it matches {place}, and {kthey} nods. “Good,” {kthey} says. “I shall deal with you as I would with the rung, and the rung does not mind who holds it.”",
        "“You hold the rung,” {kname} says, “and so you are owed it.” {Kthey} says it to your face, and you see how easily the sentence is true for you, and how it would stick in another throat.",
      ],
      unspoken: [
        "{Kname} reads your rung first, and it matches {place}, and {kthey} sets the other question aside as if it had been put down on a different table. “Good,” {kthey} says. “That is the whole of what I need.”",
        "“You hold the rung,” {kname} says, “and I am not asked to say more.” {Kthey} says it quickly and with relief, and you realise {kthey} has just been spared a decision, and knows it.",
      ],
    },
    above: {
      woman: [
        "{Kname} reads your rung first and stands, which {kthey} does not do for anyone at {place}. “Madam,” {kthey} says, and the word is the sect’s and not {ktheir} own, and {kthey} hears the difference as it leaves.",
        "“You have climbed past this,” {kname} says, “and so I do not need to read the rest.” {Kthey} bows the exact depth owed to the rung, and you see how quickly a bow can be turned into a wall.",
      ],
      man: [
        "{Kname} reads your rung first and stands, which {kthey} does not do for anyone at {place}. “Master,” {kthey} says, and the word is the sect’s and not {ktheir} own, and {kthey} does not hear the difference.",
        "“You have climbed past this,” {kname} says, “and so I do not need to read the rest.” {Kthey} bows the exact depth owed to the rung, and you see how little that costs a man the rung has already welcomed.",
      ],
      unspoken: [
        "{Kname} reads your rung first and stands, and then is left standing, because the sect’s word for it comes in two forms and neither fits. “Honoured,” {kthey} says at last, and the word is {ktheir} own.",
        "“You have climbed past this,” {kname} says, “and so I will not ask the rest.” {Kthey} bows, and you see {kthem} realise that the bow is the first thing {kthey} has ever given a stranger without checking.",
      ],
    },
  },
  sex: {
    below: {
      woman: [
        "{Kname} reads you as a woman first, gently, and finds the rung a smaller matter. “You are not of this rung,” {kthey} says, “but you will be looked after. A woman here always is.”",
        "“We keep women’s places warm,” {kname} says, “whatever they have climbed.” {Kthey} means it kindly. You feel the warmth of the place and its edges at once, like a hand on a shoulder that does not let go.",
      ],
      man: [
        "{Kname} reads you as a man first, easily, and finds the rung a smaller matter. “You are not of this rung,” {kthey} says, “but you will be given a bench. A man here always is.”",
        "“We make room for men,” {kname} says, “whatever they have climbed.” {Kthey} says it without thinking about it. You feel the room made, and that it was made at somebody’s cost.",
      ],
      unspoken: [
        "{Kname} tries to read you as one or the other, fails, and falls back on the rung, and finds it short. “I do not know where to put you,” {kthey} says, “and you have not the rung to be put anywhere I could not.”",
        "“I would keep you safe,” {kname} says, “if I knew what safe was for you.” {Kthey} says it kindly and does not know how to go on. You are below the rung, and outside the sex, and {kthey} feels the double gap.",
      ],
    },
    at: {
      woman: [
        "{Kname} reads you as a woman first, and then as a woman of the rung, and the second reading makes {kthem} a little careful. “A woman at this rung,” {kthey} says, “has a harder road than the rung lets on.”",
        "“You are of the rung,” {kname} says, “and so you will be treated as the women of the rung are treated.” {Kthey} says it as a kindness, and you hear that it is a warning.",
      ],
      man: [
        "{Kname} reads you as a man first, and then as a man of the rung, and the second reading makes {kthem} comfortable. “A man at this rung,” {kthey} says, “has the road the rung promises.”",
        "“You are of the rung,” {kname} says, “and so you will be treated as the men of the rung are treated.” {Kthey} says it as a kindness, and you hear that it is a promise.",
      ],
      unspoken: [
        "{Kname} reads you as a person first, a thing {kthey} was not taught, and finds a rung beneath it that matches {place}. “You are of the rung,” {kthey} says. “That is easier than the rest, and it is not enough.”",
        "“You are of the rung,” {kname} says, “and I am sorry that I cannot tell you which side of it you stand on.” {Kthey} says it with an honesty that costs {kthem} something, and offers the stool by the stove.",
      ],
    },
    above: {
      woman: [
        "{Kname} reads you as a woman first, and the rung after, and is visibly troubled by the order. “You have climbed past this,” {kthey} says, “and I do not know what to call you except what I always have.”",
        "“A woman who has climbed above us,” {kname} says slowly, “is still a woman of the house.” {Kthey} says it carefully, as one tests a floor, and finds that the floor does not give.",
      ],
      man: [
        "{Kname} reads you as a man first, and the rung after, and finds nothing troubling in the order. “You have climbed past this,” {kthey} says, “and so you are doubly owed what a man is owed.”",
        "“A man who has climbed above us,” {kname} says warmly, “is a credit to the house.” {Kthey} says it as a blessing, and you see the room lean towards you like a field towards a rain.",
      ],
      unspoken: [
        "{Kname} reads you as a person first, and finds the rung above the place, and is quite suddenly frightened. “I was taught to ask the other thing,” {kthey} says. “I find that I should rather not.”",
        "“You have climbed past this,” {kname} says, “and I do not know whom to ask what you are.” {Kthey} says it into the silence, and you realise that the silence has a rung of its own, and that you are standing on it.",
      ],
    },
  },
};

/** The Elder’s word at the door, said as the scene opens, by where the hero’s rung stands against the road’s and by the hero’s gender. Three each, so the four doors of a road and the roads of a wayside do not share one. */
export const INTERJECT: Record<RankBand, Record<Gender, [string, string, string]>> = {
  below: {
    woman: [
      "You have not reached this rung, and you are a woman. The place will weigh the second before the first. Watch which it weighs more.",
      "Below the rung and a woman at the door: it is the commonest way to be overlooked on this mountain. You will have to decide whether to be overlooked on purpose.",
      "A woman who has not yet climbed here is told to wait. A man in the same place is told to try. Notice who tells you which.",
    ],
    man: [
      "You have not reached this rung, and you are a man. The place will weigh the first before the second. Watch how much it forgives.",
      "Below the rung and a man at the door: the doors will open on credit. Ask, before you accept, who is paying.",
      "A man who has not yet climbed here is told to try. A woman in the same place is told to wait. Notice who tells you which.",
    ],
    unspoken: [
      "You have not reached this rung, and the place has no column for what you are. It will use whichever question it can answer. Choose which.",
      "Below the rung and with no side to be placed on: there will be one question you cannot answer, and one you will not. See which they ask first.",
      "Nobody has a rule for those below the rung who give no answer. That is a freedom of a sort, and a cold one. Wear it with care.",
    ],
  },
  at: {
    woman: [
      "You hold this rung, and you are a woman. The rung is yours by right, and the place will keep giving it to you in a smaller cup. Do not mistake the cup for the measure.",
      "A woman at her own rung: the rung says one thing, and the room says another, and a good keeper can tell which is speaking. See how well this one can.",
      "You are what the rung asks, and a woman. The place was built to hold one and to doubt the other. Let it try.",
    ],
    man: [
      "You hold this rung, and you are a man. The rung is yours by right, and the place will keep giving it to you in a larger cup. Do not mistake the cup for the measure.",
      "A man at his own rung: the rung says one thing, and the room says another, and a good keeper can tell which is speaking. See how well this one can.",
      "You are what the rung asks, and a man. The place was built to hold both. Notice how little it costs you.",
    ],
    unspoken: [
      "You hold this rung, and the place has no column for what you are. It will honour the rung and lose the rest. Keep your own count.",
      "A rung with no side: you are exactly what the place was built for, and the place cannot say so. Listen to how it tries.",
      "You are what the rung asks, and no more of what you are is asked. That is the commonest bargain on the mountain. Decide whether it is a bargain.",
    ],
  },
  above: {
    woman: [
      "You have climbed past this rung, and you are a woman. The place will bow to the first and stumble over the second. Watch where it stumbles.",
      "Above the rung and a woman at the door: you may command what you like, and be called Madam doing it. Ask yourself what the word is for.",
      "A woman who has climbed above the place is a ghost it has not learned to see. Be seen if you wish. It is not always safe.",
    ],
    man: [
      "You have climbed past this rung, and you are a man. The place will bow to both and thank you for neither. Watch who is not bowing.",
      "Above the rung and a man at the door: you may command what you like, and be called Master doing it. Ask yourself what the word is for.",
      "A man who has climbed above the place is a door it has long held open. Notice, once you are through it, who is still outside.",
    ],
    unspoken: [
      "You have climbed past this rung, and the place has no word for you. It will bow to the rung and look away from the rest. You may look back.",
      "Above the rung with no side: the place does not know whether to honour you or to be afraid. Both are true, and neither is a title.",
      "You have outclimbed the place, and it cannot say what you are. That may be the only power on the mountain it cannot give or take.",
    ],
  },
};

/** What a hero does behind the door, as it is worded in a pick, three ways each so no two roads say it alike. */
export const PICK_LABEL: Record<Gender, Record<RankWay, [string, string, string]>> = {
  woman: {
    yield: [
      "Take the place {place} gives a woman of your rung, and let the day go as it was arranged.",
      "Go along with what is expected of a woman here, and notice how little your rung is worth beside it.",
      "Sit where you are put, say nothing of your rung, and learn what the place gives for it.",
    ],
    claim: [
      "Say your rung aloud to {kname}, and ask to be met by it, and not as a woman.",
      "Set the rung you hold in front of {kname} like a card on a table, and wait for {kthem} to read it first.",
      "Name your realm in front of the room, and ask for the place it earns before the place your sex does.",
    ],
    veil: [
      "Let {place} take you for what it expects of a woman, and keep your rung to yourself.",
      "Wear whatever rank the room is already looking for in a woman, and let it believe what it likes.",
      "Put on the face the place wants from a woman, and see what it opens.",
    ],
    lift: [
      "Use the weight of your rung to bring the woman beside you, whom {place} has passed over, into the room.",
      "Stand beside the woman the rung has left out, and let your rank be seen standing there.",
      "Name the woman whom the room is not looking at, and put your rung behind her name.",
    ],
  },
  man: {
    yield: [
      "Take the place {place} keeps for a man of your rung, and say nothing of it.",
      "Accept what is offered to a man here, and notice what your rung is paying for it.",
      "Sit where you are put, say nothing of your rung, and learn what the place gives for it.",
    ],
    claim: [
      "Say your rung aloud to {kname}, and ask to be met by it, and not as a man.",
      "Set the rung you hold in front of {kname} like a card on a table, and wait for {kthem} to read it first.",
      "Name your realm in front of the room, and ask for the place it earns before the place your sex does.",
    ],
    veil: [
      "Let {place} take you for the man it expects, and keep your rung to yourself.",
      "Wear whatever rank the room is already looking for in a man, and let it believe what it likes.",
      "Put on the face the place wants from a man, and see what it opens.",
    ],
    lift: [
      "Use the weight of your rung to bring the one beside you, whom {place} has passed over, into the room.",
      "Stand beside the one the rung has left out, and let your rank be seen standing there.",
      "Name the person whom the room is not looking at, and put your rung behind the name.",
    ],
  },
  unspoken: {
    yield: [
      "Let {kname} sort you by your rung alone, and take the seat that fits, to learn what the seat is.",
      "Answer to the name the room has chosen for you, for now, and watch what that name opens.",
      "Take the place the rung finds easiest, say nothing, and learn what it gives.",
    ],
    claim: [
      "Say your rung and nothing else to {kname}, and decline to be sorted by anything but it.",
      "Set your rung in front of {kname} and wait for the other question, and do not answer it.",
      "Name your realm in front of the room, and ask for the place it earns, with no side attached.",
    ],
    veil: [
      "Let {place} take you for whatever it finds easiest, and keep your rung to yourself.",
      "Wear whatever face the room is already looking for, and let it believe what it likes.",
      "Answer to the name the room offers, and keep the rest back, and see what it opens.",
    ],
    lift: [
      "Use your rung to make a place in the room for someone it has no word for.",
      "Stand with the one the rung has no side for, and let your rank be seen standing there.",
      "Name the one whom {place} has erased, and put your rung behind the name.",
    ],
  },
};
