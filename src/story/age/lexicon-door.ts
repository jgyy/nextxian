import type { Age } from "@/engine/hero";
import type { Gap } from "@/engine/age";

/**
 * The door of years. In the middle of its second approach every Age Road has a door that opens only to a hero whose years stand in one
 * relation to the keeper’s: the same stretch of life (kin), a good deal older, a good deal younger, or so far from the keeper’s that the road
 * says so. A hero sees one scene behind the door and never the others. Slots: kname, kthey, kthem, ktheir, place, focus, relic.
 */

export const GAP_TITLE: Record<Gap, string[]> = {
  kin: ["The Same Hour of Life", "The Bench of Peers", "Years Alike", "The Level Seat"],
  older: ["The Elder Guest", "Grey Beside the Young", "The Longer Road", "The Seat of the Senior"],
  younger: ["The Younger Guest", "The Junior’s Bench", "A Few Years Behind", "The Lower Step"],
  farOlder: ["The Old Hand at the Cradle", "Many Years Ahead", "The Great Gap, Upward", "The Grandparent’s Chair"],
  farYounger: ["The Child at the Old Door", "Many Years Behind", "The Great Gap, Downward", "The Grandchild’s Stool"],
};

/** The door’s own label, in the approach scene that opens onto the scene. */
export const GAP_DOOR: Record<Gap, string[]> = {
  kin: [
    "Sit down at {place} among those of your own years, where {kname} keeps a bench for people who are at the same hour of life as {kthem}.",
    "Take the bench at {place} that {kname} keeps for people of an age with {kthem}, and see what is said on it.",
    "Follow {kname} to the corner of {place} where the cultivators of {ktheir} years sit together, and sit among them.",
    "Answer {kname} when {kthey} asks, quietly, how many years you carry, and be shown to the seat that fits the number.",
  ],
  older: [
    "Let {kname} see your grey beside {ktheir} youth, and be shown to the guest’s chair at {place}, where the older are seated.",
    "Take the seat at {place} that {kname} sets aside for the elder guest, and let the younger cultivators gather round it.",
    "Tell {kname} the years you carry, and be led to the long bench at {place}, where the senior are given the sun.",
    "Go where the older cultivators of {place} sit, by the south wall, and learn what the young have been told to ask them.",
  ],
  younger: [
    "Tell {kname} your age, and take the junior’s place at {place}, a step below the bench where {kthey} teaches.",
    "Sit on the lower step at {place}, where {kname} seats those who have fewer years than {kthey} has, and wait to be taught.",
    "Go where the younger cultivators of {place} gather, by the north door, and ask them what {kname} says to the young.",
    "Admit to {kname} that you are the junior here by years, and be shown to the bench kept for those who are.",
  ],
  farOlder: [
    "Let {kname} look at the years you carry, which are very many more than {ktheir} own, and be led, with some ceremony, to the old people’s chair at {place}.",
    "Take the chair at {place} that {kname} keeps for the very old, and watch the young ones go quiet as you sit.",
    "Tell {kname} how long you have lived, and be taken, wide-eyed, to the seat by the stove where the oldest at {place} are asked their opinion.",
    "Go to the chair at {place} that has never been sat in, kept for the day a very old guest should come, and let {kname} see that it was kept for you.",
  ],
  farYounger: [
    "Let {kname} look at how few years you carry beside {ktheir} many, and be led, not unkindly, to the child’s stool at {place}.",
    "Take the low stool at {place} that {kname} keeps for the very young, and let the old hands at {place} gather round to look.",
    "Tell {kname} how young you are, and be taken to the place by the stove where the youngest at {place} are given the warmest spot.",
    "Go to the little bench at {place} kept for the child who comes only once in a lifetime, and let {kname} see that you have come.",
  ],
};

/** The scene’s first paragraph, by gap and by the realm of the road. The realm is the wayside’s: 0 for the Mortal waysides, 7 for the Ascendant. */
export const GAP_SCENE: Record<Gap, string[]> = {
  kin: [
    "Among mortals of one age the talk is plain: what the knees do in the morning, what rice costs, how much of the span is spent. {Kname} speaks of {focus} with the others and the years between you fall away.",
    "Condensers of one age sit with the cold thread between them like a shared candle. At {place} the lesson is whispered: the realm lengthens a span, but only for those who learn to hold it, and you and {kname} learn it together.",
    "Builders of one age have laid their floors in the same decade. {Kname} points to {focus} and says the hundred and sixty years of the realm are a debt each of you owes, and a gift, and the same sum.",
    "Cores of one age have formed their gold in the same season of life, and sit now in the evening air of {place} comparing what it weighed. {Kname} says that two hundred and fifty years is a shape, and you are in the same part of it.",
    "Souls of one age have watched the same decades go by. At {place} {kname} sits beside you without speaking, and the figures behind your eyes and {ktheir} look out together at {focus}, and are comfortable.",
    "Severed spirits of one age have cut the same cords in the same order. {Kname} says that the dust of old names falls from you both at the same rate, and for a time at {place} you are simply two people shedding.",
    "Seekers of one age walk the same direction at the same pace. At {focus} {kname} stands beside you and the Dao tilts the floor toward you both, and neither of you needs to say which way it leans.",
    "Ascendants of one age stand at the same threshold, side by side. {Kname} says nothing of {ktheir} years at {place}; the sill under your feet is the same stone, and the draught from the door touches you both.",
  ],
  older: [
    "A mortal who is older than the one teaching them is a familiar sight and an awkward one. At {place} {kname} gives you the best seat and the plainest rice, and says that the span is the same for all of us, only the remaining part differs.",
    "An older condenser sits in the cold light of {place} and feels the thread hum with a faint reproach. {Kname} says that a hundred and ten years is a generous lease, and that you are not too late, only later, and that late is a different word.",
    "An older builder, laid on a younger one’s floor, is a quiet marvel. {Kname} shows you {focus} and says that there is no shame in a foundation set at your age, only in a foundation set carelessly, and yours is neither.",
    "An older core at the feet of a younger is a thing the old halls had sayings for. At {place} {kname} keeps none of them, and merely asks what two hundred and fifty years looks like from where you are sitting.",
    "An older soul, put beside a young one, watches the young one’s figure fidget behind its eyes. {Kname} laughs, at {focus}, and says that you have the manners of a soul that has been seasoned, and {kthey} would like to learn them.",
    "An older severed spirit has lost a great deal more to the dust than a younger one. At {place} {kname} walks softly in your shadow, and says that cutting a long rope takes a long knife, and that yours is sharp.",
    "An older Seeker has been leaning toward the Dao for longer than the younger has been alive. {Kname} sits at the lower seat of {place} and asks, with great simplicity, whether it ever stops being a lean and becomes a step.",
    "An older Ascendant has stood at the sill for longer than the younger has known what a sill was. At {focus} {kname} stands a little behind you, and the draught that blows from the door is the same, but you have felt it for longer.",
  ],
  younger: [
    "A younger mortal learns from an older one how many of the seventy-six years there are to spend. At {place} {kname} speaks of the span as of a field half ploughed, and you, with a few years less, are invited to the other half.",
    "A younger condenser holds a thread that an older one has already learned to spend. {Kname} tells you at {focus} how the hundred and ten years go, and how fast, and your thread hums with the unfairness of being new.",
    "A younger builder is laid on a floor an elder has walked for decades. At {place} {kname} shows you the places where the boards give, and says that the extra years you have still to spend are the largest gift a floor can have.",
    "A younger core is a rarity, and the keepers of {place} know it. {Kname} looks at the gold you carry and at the years you carry it with, and says that two hundred and fifty years from a younger start is another country.",
    "A younger soul and an older one share a room, and the old one’s figure watches the new with a lazy, affectionate gravity. {Kname} teaches you at {focus} how to raise a soul, as one explains the care of a lamb to a child who has just been given one.",
    "A younger severed spirit has cut cords the older was still tying. {Kname} watches you with a rueful admiration at {place}, and says that to sever early is to be lonely early, and that it is a trade, not a gift.",
    "A younger Seeker is a surprise, and {kname} treats you at {focus} with a kind of gentle caution, as one treats a very fast horse. The Dao leans, and you lean with it a little faster than it leans.",
    "A younger Ascendant is a scandal and a joy. At {place} {kname} says nothing of it, and only moves up, a hand’s breadth, on the bench, so that the draught from the door may reach you too.",
  ],
  farOlder: [
    "The very old among the mortals are few, and at {place} {kname} has never met one at the door. {Kthey} offers you everything: the chair, the blanket, the last of the tea, and a long, wondering look at a span that has been made so much of.",
    "A condenser far older than the keeper is the world turned round. At {place} {kname} asks you how the thread feels after so many years of waiting for it, and you answer, and the room is silent, and then everyone begins at once.",
    "A builder so many years the elder of the keeper is a living history. {Kname} seats you at {focus} and says that every question {kthey} has ever had about the realm has been asked by someone like you, and nobody has ever written down the answers.",
    "A core with so many years behind it is a library with its lamps lit. At {place} the young hold back, and {kname} asks you, as a small matter of manners, whether you would be willing to say a few words about what has been learned.",
    "A soul far older than the keeper’s is a landscape. {Kname} stands on the threshold of {place} and says that the soul behind your eyes looks tired and kind and full of weather, and {kthey} would like to hear the forecast.",
    "A severed spirit so many years the senior of the keeper has cut more cords than the keeper has tied. At {focus} {kname} bows a little lower than {kthey} needs to, and the bow is the first honest thing said all day.",
    "A Seeker far older than the keeper has been walking a direction that the keeper’s grandparents’ grandparents were born facing. {Kname} says nothing at {place}; {kthey} only moves aside, a step, to let you lead.",
    "An Ascendant so many years the elder of the keeper has stood at the sill when the keeper’s line began. At {place} {kname} lays the sill-stone between you, and the draught from the door is the same one that blew on the first of them.",
  ],
  farYounger: [
    "A mortal far younger than the keeper is a child at the door of a long house. {Kname} kneels, at {place}, so that your eyes are level, and says that seventy-six years is a great deal when you are only just starting to count them.",
    "A condenser so many years the junior of the keeper has nearly all of the hundred and ten still before them. At {focus} {kname} puts a hand on your shoulder and says that you have not an hour to waste, and no reason to hurry.",
    "A builder so young that the keeper might have taught the builder’s parents is a joy and a worry. At {place} {kname} sets you on the best stool and says, with a mixture of pride and fear, that a foundation laid so early may bear a very large house.",
    "A core so far in years below the keeper’s own is a thing the old halls would have called a prodigy, or a warning. {Kname} says at {focus} that two hundred and fifty years is a very long road for so young a pair of boots.",
    "A soul so young beside so old a keeper is an astonishment. At {place} {kname} lets the figure behind your eyes look out at the figure behind {ktheir}, and the two regard each other with the grave interest of a grandfather and a baby.",
    "A severed spirit so many years younger than the keeper has cut the cords before the keeper has finished tying them. {Kname} says at {focus} that you are either a wonder or a casualty, and that {kthey} does not yet know which, and is prepared to wait.",
    "A Seeker so young beside so old a keeper is the quietest scandal of the realm. At {place} {kname} gives you the best seat, and looks at the Dao leaning toward you, and says, in a voice of simple wonder, that it is leaning faster for you.",
    "An Ascendant so many years the junior of the keeper has gone through a door that was held shut for the keeper’s lifetime. {Kname} kneels at the sill of {place}, and touches it, and then, very gently, touches you.",
  ],
};

/** How the keeper of each age meets the hero across each gap the keeper’s road can have. Forty words or so each. Slots as above. */
export const GAP_KEEPER: Record<Age, Partial<Record<Gap, string>>> = {
  youth: {
    kin: "{Kname} is sixteen and so are you, near enough, and {kthey} has been waiting all day for someone to say aloud what {kthey} does not dare: that nobody told either of you what the years were for.",
    older: "{Kname} is a little afraid of you, in the way the very young are afraid of any adult who is not in charge of them, and is trying to be brave about it by asking too many questions, too fast.",
    farOlder: "{Kname} stares at you as at a figure from a story. {Kthey} has never met a person with so many years behind them who was willing to sit down on a bench and talk to {kthem}, and the awe makes {kthem} very quiet.",
  },
  young: {
    kin: "{Kname} grins at you across the bench, a grin that is partly rivalry and partly relief. There are not many people at {place} of an age to be compared with, and {kthey} has been longing to compare.",
    older: "{Kname} defers to you a little, then catches {kthem}self, and stiffens. {Kthey} is twenty-five and has been told that deference is a trap, and has not yet worked out whether to believe it.",
    younger: "{Kname} looks at you with a mixture of fellow-feeling and condescension, the second of which {kthey} is trying to suppress. Being the older of two by a few years is a new sensation, and {kthey} has not found its balance.",
  },
  prime: {
    kin: "{Kname} nods to you with the easy courtesy of a person who has met many of their own years and knows what to expect: an honest tiredness, a quiet watchfulness, and a reluctance to waste a morning.",
    older: "{Kname} makes room for you without being asked, as a person who has learned to make room for age does, and listens with an attention that is more than politeness and slightly less than reverence.",
    younger: "{Kname} regards you the way one regards a younger sibling who has come into the family trade: fondly, anxiously, and with a strong urge to say the three things that would have saved them ten years.",
  },
  mature: {
    kin: "{Kname} settles beside you with a sigh that is half laugh. Neither of you speaks for a time. There is a great deal that does not need to be said between two people who have been counting the same arithmetic.",
    older: "{Kname} stands, which at {ktheir} age is an effort, and holds out a hand. {Kthey} says that in thirty years {kthey} hopes to be as upright as you, and means it, and also is counting.",
    younger: "{Kname} looks at you with an affectionate gravity that is almost a blessing. {Kthey} has seen more young people than {kthey} can name, and wishes each one the same thing, which {kthey} cannot quite say: more time.",
  },
  elder: {
    kin: "{Kname} lowers {kthem}self onto the bench beside you with the unhurried care of one who has learned to treat the body as a guest. Neither of you needs to say the number. It is in the way you both breathe out.",
    younger: "{Kname} looks at you for a long moment, and the face softens by a degree. {Kthey} says that {kthey} was your age when the oldest tree in the yard was planted, and that it is a very good tree, and so, {kthey} has no doubt, are you.",
    farYounger: "{Kname} looks at you and laughs, a short, delighted old laugh. You are young enough to be {ktheir} great-grandchild, and {kthey} has been waiting for years to be asked a question by somebody who has not yet learned the answers.",
  },
};

export type Pick12 = "sit" | "trade" | "race" | "years" | "teach" | "pose" | "outlast" | "learn" | "bow" | "hasten" | "mentor" | "remember";

export const GAP_PICKS: Record<Gap, [Pick12, Pick12, Pick12, Pick12]> = {
  kin: ["sit", "trade", "race", "years"],
  older: ["teach", "pose", "outlast", "years"],
  younger: ["learn", "bow", "hasten", "years"],
  farOlder: ["mentor", "remember", "pose", "years"],
  farYounger: ["learn", "bow", "hasten", "years"],
};

/** The pick’s own label, four wordings so that no two roads put the same line to a hero. */
export const PICK_LABEL: Record<Pick12, string[]> = {
  sit: [
    "Sit with {kname} and your own years, and say nothing for a while, and let the bench be what it is.",
    "Take the place beside {kname} and breathe with {kthem}, and let the same arithmetic run in both of you.",
    "Stay on the bench among your peers at {place} and let the hour go by at its own pace.",
    "Keep {kname} company for a long quiet while, and talk of nothing, as friends of an age do.",
  ],
  trade: [
    "Trade what you have each learned of the realm, the mistakes first, since those are the ones worth buying.",
    "Set your years against {ktheir} and compare what each of you wishes you had been told.",
    "Ask {kname} what the realm cost {kthem} in years, and tell {kthem} what it cost you.",
    "Swap the one thing you each know about {focus} that the manuals leave out.",
  ],
  race: [
    "Challenge {kname} to see which of you can draw more from the road at {focus}, since you are of an age to try.",
    "Propose a trial of qi against {kname}’s, there at {place}, between two who are neither the fastest nor the slowest.",
    "Dare {kname} to work the hardest piece of {focus} with you, and see who tires first.",
    "Put your breath against {ktheir} for an hour, and see what the same years can do with the same road.",
  ],
  teach: [
    "Teach {kname} what the years have taught you about {focus}, gently, as one hands over a tool whose handle has been worn smooth.",
    "Show {kname} the thing you learned too late, so that {kthey} can learn it on time.",
    "Take {kname} aside and tell {kthem} the three mistakes you would not make again, and why you made them.",
    "Sit with {kname} and let {kthem} ask whatever {kthey} likes, and answer as honestly as your own years allow.",
  ],
  pose: [
    "Let {kname} think you are older or younger than you are, and see what the road will tell a person it does not take for a rival.",
    "Give {kname} a number a little different from your own, and watch which of {ktheir} answers changes.",
    "Say less than you could about the years you carry, and let {kname} fill in the rest as {kthey} likes.",
    "Pass yourself as someone of another age at {place}, since the road tells such people things it keeps from you.",
  ],
  outlast: [
    "Work at {focus} longer than {kname} can, and show what the years have given you that a quicker body lacks.",
    "Sit out {kname} at the hardest hour of {place}, and let the endurance of age do what the speed of youth cannot.",
    "Match {kname} breath for breath until the quick one tires, then keep going at your slower, steadier pace.",
    "Show {kname} that a body with more years can wait longer, and that waiting is its own strength.",
  ],
  learn: [
    "Ask {kname} to teach you everything {kthey} knows of {focus}, and be the pupil, with the humility the road expects of the junior.",
    "Listen to {kname} the whole hour, and write down what is said, since a younger body forgets what it does not write.",
    "Take the lowest seat at {place} and let {kname} correct you as often as {kthey} likes.",
    "Ask the questions you have been afraid were foolish, and let {kname} answer each as if it were the first sensible one all year.",
  ],
  bow: [
    "Bow to {kname}, as the younger should to the elder at {place}, and ask that {kthey} look kindly on your haste.",
    "Honour {kname}’s years with the courtesy of the road, a slow bow and a quiet word, and mean it.",
    "Show {kname} the respect due to those who have walked the road first, and say that you have much to learn.",
    "Make the small formal bow of the young to the old, and let {kname} see that you know what it costs to have earned the right to receive it.",
  ],
  hasten: [
    "Push to be taught faster than the years allow, and ask {kname} to show you the shortcut that costs the most.",
    "Press {kname} for the hard lesson now, since a younger body may bear what an older would break.",
    "Insist on trying the work of {focus} before you are ready, and let the road tell you how ready you are.",
    "Ask for the quickest way through the realm, though it takes a toll, and promise to pay it in qi.",
  ],
  mentor: [
    "Take the young one under your wing, and show {kname} the long view of {focus} that only many years can give.",
    "Let {kname} sit at your feet and ask, and tell {kthem} what you have seen, and what you would do over.",
    "Offer to teach {kname} what you have outlived, kindly, and without making it sound like a sermon.",
    "Take {kname}’s hands in your own and show how a long-practised body holds the work of {place}.",
  ],
  remember: [
    "Tell {kname} what {focus} looked like when you were young, and what it has taught you since about patience.",
    "Remember aloud for {kname} the people you have outlived, and what each of them asked of you before the end.",
    "Tell the story of your first realm, long ago, and let {kname} hear how small it was, and how it grew.",
    "Say plainly what the years have cost, and what they have paid, and let {kname} hear both columns.",
  ],
  years: [
    "Ask {kname} what the realm can give back to a body that is running short of time, and pay what it costs.",
    "Admit to {kname} how many years you think you have left, and ask what this road has to say about lengthening them.",
    "Offer {kname} your qi in return for the oldest lesson of {place}: how a cultivator buys years back.",
    "Ask the keeper of {place} to read the span your realm allows you, and to show you how to stretch it.",
  ],
};
