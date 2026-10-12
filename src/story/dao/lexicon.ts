import type { Dao, Origin, Talent } from "@/engine/hero";
import type { Element } from "@/engine/path";

/**
 * Wording for the Dao Roads. Every table has several variants, and a road picks by its index and the stage, so the forty roads
 * and the five scenes of a walk do not say the same thing twice. Slots: kname, place, focus, craft (the road’s craft, as an
 * adjective: “alchemist’s”), dao (its name: “Pill Dao”), element, ware, holding.
 */

/** How the keeper meets a hero whose Dao is not the road’s. One table per Dao the hero can have; four variants each. */
export const DAO_MEET: Record<Dao, [string, string, string, string]> = {
  none: [
    "{Kname} sees that your hands carry no trade and asks, kindly, whom you mean to learn from. At {place} the {craft} craft is always short of apprentices.",
    "You have no Dao, and {kname} can tell at a glance. The {craft} trade has taken in stranger strays than an open-handed traveller.",
    "{Kname} watches you look at everything and choose nothing. At {place} that is called being young, and it is not a reproach.",
    "No craft stains your fingers, and {kname} says so with a small smile. A hand that has not closed can still learn the {craft} grip.",
  ],
  alchemy: [
    "The stain of cinnabar on your fingers does not go unremarked. {Kname} says a pill-maker is welcome at {place}, and that the {craft} trade has never been too proud to learn from yours.",
    "{Kname} notes the bitter-root smell on your sleeves and asks what a pill-maker wants at the {craft} bench. It is an honest question.",
    "A pill-maker at {place} draws curious looks. {Kname} says the {craft} trade has long envied the patience of yours.",
    "{Kname} finds the furnace-scar on your wrist and relaxes. Your trade is another fire, but it is a fire.",
  ],
  forging: [
    "{Kname} looks at the callus on your palm and the ring of old burns on your forearm, and nods. Forgers know one another across a market without being introduced.",
    "You test the weight of a hammer on the nearest bench before you speak, and {kname} approves of the manners. At {place} a forger is a cousin.",
    "{Kname} hears the ring of your boot-nails on the stone and guesses your Dao. “Forge,” {kname} says, and is right.",
    "A forger comes to {place} and looks at the joinery first. {Kname} takes it as a compliment, and a warning.",
  ],
  talisman: [
    "Ink has dried in the creases of your hands, and {kname} reads it like a signature. A talisman-maker at {place} is a rarer guest than a pilgrim and twice as welcome.",
    "{Kname} sees you read the nearest notice twice and move your lips on the hard stroke. Script-makers never read for pleasure.",
    "You touch a ward-slip with one finger, to feel the grain of the cinnabar. {Kname} says no one has done that at {place} in a year.",
    "{Kname} offers you a seat by the lamp, as one offers to a colleague. The {craft} trade and the script trade are old neighbours.",
  ],
  formation: [
    "You step round a chalk mark on the floor of {place} without looking at it. {Kname} sees you do it and says the array-masters always know where the lines are.",
    "{Kname} watches you count the posts, the lamps and the doors, and understands that you are checking the shape of the place. You are, and it is.",
    "An array-master at {place} reads the room before the people in it. {Kname} has met your kind and does not mind being read.",
    "{Kname} says that you have the look of someone who sees where a wall holds. At the {craft} bench that is nearly a trade of its own.",
  ],
  beast: [
    "A sparrow lands on your shoulder at the door of {place}, and {kname} lifts an eyebrow. The {craft} trade has never kept animals, but it respects those who do.",
    "The dog by the hearth rises, comes to you, and lies down. {Kname} says it has not done that for a stranger in four winters.",
    "{Kname} sees how the creatures at {place} look at you, and how you look at them. A beast-tamer may be a guest here, though never a quiet one.",
    "Your sleeves smell of hay and fur and warm animal. {Kname} says this is the only honest smell at the market, and offers you a stool.",
  ],
  sword: [
    "{Kname} notes the way your hand rests, never quite touching and never quite away, and does not mention the blade. A swordsman at {place} is a guest to be watched.",
    "You enter {place} by the door that keeps the wall at your back. {Kname} sees that, and puts the sharp tools out of reach with great politeness.",
    "{Kname} says the {craft} trade has made a thousand edges and met three honest swordsmen. You are being counted.",
    "A swordsman looks at the {craft} craft as at a blade: for its balance. {Kname} watches you do it and nods.",
  ],
  healing: [
    "{Kname} sees you look at the old man by the stove, and the way you look. “You are a healer,” says {kname}. “The whole yard knows it now.”",
    "You notice the bandaged hand before anyone speaks of it. {Kname} sends the hand’s owner to you without being asked.",
    "A healer comes to {place}, and by noon there is a queue. {Kname} grumbles that it spoils the day’s trade and brings you a stool.",
    "{Kname} watches your eyes move across the room and stop at each wince. The {craft} trade has hurt people for centuries. Yours has mended them.",
  ],
  fate: [
    "You greet {kname} by a name that nobody has used at {place} for ten years. {Kname} says nothing, and sets a second cup.",
    "{Kname} sees you look at the dice by the stove and away. “You have thrown them already,” says {kname}. “In your head.”",
    "A diviner at {place} is a guest that every stall wants and none wants to be seen with. {Kname} serves you tea at the back.",
    "You hold up a hand before {kname} has finished the first sentence, and finish it yourself. {Kname} laughs, and does not enjoy it.",
  ],
};

/** The keeper meets a hero whose Dao is the road’s own. A Dao the hero has no road for (none) has no table. */
export const DAO_KIN: Record<Exclude<Dao, "none">, [string, string, string, string]> = {
  alchemy: [
    "{Kname} smells the bitter-root on your sleeve and puts down the pestle. “One of mine,” says {kname}, and clears a stool by the furnace at {place}.",
    "You and {kname} reach for the same ladle, and both laugh. Pill-makers share a language of burns and bitterness.",
    "{Kname} takes your wrist, finds the furnace-scar, and nods. At {place}, a stranger is a customer; a pill-maker is family.",
    "{Kname} sets a cup of last night’s tincture in front of you, and watches you taste it for what is wrong with it.",
  ],
  forging: [
    "{Kname} hears the ring of your hammer-hand on the doorframe and puts down the tongs. “Forge,” says {kname}. “Come in. Mind the sparks.”",
    "You and {kname} both look at the same flaw in the same blade and both say nothing. The silence is the kind that forgers prize.",
    "{Kname} turns your palm to the light, counts the burns and the callus, and says you have been well taught. At {place}, there is no higher word.",
    "A bench is cleared for you at {place} before you ask. {Kname} says a forger is always owed the second-best anvil.",
  ],
  talisman: [
    "{Kname} sees the ink in the creases of your hands and slides a brush across the counter without a word. At {place} that is a handshake.",
    "You and {kname} read the same ward-slip at the same moment and both wince at the same stroke. Script-makers know one another by their wincing.",
    "{Kname} takes a sheet from the drying line, hands it to you, and asks what is wrong with it. You tell them, and the whole line stops to listen.",
    "{Kname} says that a talisman-maker is the only guest who reads the walls. At {place} you are being let in on the walls.",
  ],
  formation: [
    "{Kname} sees you step over the lines on the floor and smiles. “An array-master,” says {kname}. “Come and tell me where my wall is weak.”",
    "You and {kname} both look up at the same beam, and both see that it is the wrong beam. Array-masters know one another by what they would move.",
    "{Kname} sets down a model of the place in lacquered pegs and asks you to find the fault. You find it in four breaths.",
    "At {place} a stranger gets the front room. A formation-master gets the plans, and {kname} unrolls them on the table without being asked.",
  ],
  beast: [
    "The beasts of {place} come to you one at a time, and {kname} counts them with the care of a shepherd. “Tamer,” says {kname}. “Good. They have been asking.”",
    "{Kname} whistles once, and an animal you have never seen steps from the shadows and sniffs your hand. The test is over before you knew it began.",
    "Something old and patient looks at you from the dark of the stable, and you look back. {Kname} says that is how it is done.",
    "{Kname} puts a hand on the muzzle of the nearest creature and tells it to behave. It looks at you and does not. {Kname} is delighted.",
  ],
  sword: [
    "{Kname} looks at the way you stand, at the lack of a hilt, and at what you would do if there were one. “A swordsman,” says {kname}. “Good. Come and be rude.”",
    "You and {kname} cross the yard to the same practice post and both stop at the same notch. Swordsmen recognise a bad cut as monks recognise a lie.",
    "{Kname} tosses you a wooden blade without a word. You catch it by the balance, and the whole yard stops to watch you do it.",
    "At {place} a stranger waits at the door. A swordsman is waved to the training floor, and {kname} clears it of everyone else.",
  ],
  healing: [
    "{Kname} sees you look at the wound under the apron, and the way you look. “Come,” says {kname}. “You have been needed since before you arrived.”",
    "You and {kname} reach for the same fever-cloth, and the same patient. Healers know one another by what they cannot walk past.",
    "{Kname} sets down a bowl of cold broth for you to taste, to see whether you will say it has too much salt. You do.",
    "At {place} the sick are many and the hands are few. {Kname} puts a clean apron in yours without asking your name.",
  ],
  fate: [
    "{Kname} sees you open your mouth, and finishes the greeting you were going to give. “Of course,” says {kname}. “So did you. Sit.”",
    "You and {kname} each throw the dice in your heads at the same instant and both look at the same wall. Diviners know one another by what they will not say.",
    "{Kname} turns a card face-down in front of you and asks which one it is. You say it. {Kname} turns it up, and looks at you for a long time.",
    "At {place} a stranger is told the price. A diviner is told the truth, and {kname} lowers the lamp to say it.",
  ],
};

/** The talent against the road’s element, at the opening of a walk and again at its crisis. Kindred roots; partial roots; roots with nothing to say to this element. */
type Four<T = string> = [T, T, T, T];
export const ROOT_KIN_OPEN: Record<Element, Four> = {
  wood: [
    "Your verdant root wakes at the door of {place}. Everything green on the sill leans a degree toward you, and {kname} pretends not to see it.",
    "The air at {place} is thick with wood-qi, and your verdant root drinks it like a thirsty seedling. You feel taller.",
    "Your verdant root remembers this smell: bark, resin, wet leaf. It answers the whole {place} before you have said a word.",
    "Wood-qi runs in the beams of {place}, and your verdant root runs with it. For a moment you cannot tell which of you is growing.",
  ],
  fire: [
    "Your cinnabar root flares at the door of {place}. The nearest lamp leans toward you, and {kname} lifts an eyebrow.",
    "The air of {place} is hot with fire-qi, and your cinnabar root takes it in gladly. You are warmer than you have been since the river.",
    "Your cinnabar root knows this heat. It answers the whole of {place} before you have said a word, and the coals brighten.",
    "Fire-qi runs in the walls of {place}, and your cinnabar root runs with it. For a moment you cannot tell which of you is burning.",
  ],
  earth: [
    "Your mountain root settles into the floor of {place} like a stone into a socket. {Kname} sees you stop breathing hard.",
    "The ground at {place} is thick with earth-qi, and your mountain root leans into it like a tired man into a wall.",
    "Your mountain root remembers this weight: clay, slate, the slow press of a hill. It answers the whole of {place} before you speak.",
    "Earth-qi runs under {place} like a river under a field, and your mountain root runs with it. You feel taller by the depth of a foot.",
  ],
  metal: [
    "Your bright-metal root rings at the door of {place}. Every nail in the frame sings back to it, and {kname} glances at the roof.",
    "The air at {place} is keen with metal-qi, and your bright-metal root takes it like a blade takes a whetstone.",
    "Your bright-metal root knows this edge. It answers the whole of {place} before you have said a word, in one clear note.",
    "Metal-qi runs through the bolts and bars of {place}, and your bright-metal root runs with it. For a moment you cannot tell who is the blade.",
  ],
  water: [
    "Your tide root wakes at the door of {place}. Every damp stone seems to lean toward you, and {kname} wipes a bead of water from the lintel.",
    "The air at {place} is soft with water-qi, and your tide root drinks it like a dry riverbed drinks a storm.",
    "Your tide root remembers this cool: wet slate, running gutters, mist. It answers the whole of {place} before you have spoken.",
    "Water-qi runs in the drains of {place}, and your tide root runs with it. For a moment you cannot tell which of you is the current.",
  ],
};

export const ROOT_KIN_CRISIS: Record<Element, Four> = {
  wood: [
    "At the turn of the work your verdant root reaches into {focus} and the grain answers. The wood-qi comes up to meet you like a hand held out.",
    "Your verdant root finds the living core of {focus}, where the sap is slow and patient, and you feel the whole of it open to you.",
    "The grain of {focus} runs the way your verdant root runs, and for a breath the two agree. {Kname} stops speaking.",
    "A green thread runs through {focus}, thin as hair, and your verdant root takes hold of it. It is the oldest conversation in the world.",
  ],
  fire: [
    "At the turn of the work your cinnabar root reaches into {focus} and the heat answers. The fire-qi comes up to meet you like a hand held out.",
    "Your cinnabar root finds the red heart of {focus}, where the coals are slow and patient, and you feel the whole of it open to you.",
    "The heat of {focus} runs the way your cinnabar root runs, and for a breath the two agree. {Kname} stops speaking.",
    "An ember runs through {focus}, bright as a seed, and your cinnabar root takes hold of it. It is the oldest conversation in the world.",
  ],
  earth: [
    "At the turn of the work your mountain root reaches into {focus} and the weight answers. The earth-qi comes up to meet you like a hand held out.",
    "Your mountain root finds the dense core of {focus}, where the stone is slow and patient, and you feel the whole of it open to you.",
    "The mass of {focus} presses the way your mountain root presses, and for a breath the two agree. {Kname} stops speaking.",
    "A seam of old strength runs through {focus}, thick as a thumb, and your mountain root takes hold of it. It is the oldest conversation in the world.",
  ],
  metal: [
    "At the turn of the work your bright-metal root reaches into {focus} and the edge answers. The metal-qi comes up to meet you like a hand held out.",
    "Your bright-metal root finds the keen core of {focus}, where the line is slow and patient, and you feel the whole of it open to you.",
    "The temper of {focus} runs the way your bright-metal root runs, and for a breath the two agree. {Kname} stops speaking.",
    "A bright line runs through {focus}, fine as a hair, and your bright-metal root takes hold of it. It is the oldest conversation in the world.",
  ],
  water: [
    "At the turn of the work your tide root reaches into {focus} and the current answers. The water-qi comes up to meet you like a hand held out.",
    "Your tide root finds the still core of {focus}, where the pool is slow and patient, and you feel the whole of it open to you.",
    "The flow of {focus} runs the way your tide root runs, and for a breath the two agree. {Kname} stops speaking.",
    "A thread of cold runs through {focus}, thin as a hair, and your tide root takes hold of it. It is the oldest conversation in the world.",
  ],
};

/** The partial roots, with two lines each: they answer, weakly. */
export const ROOT_PARTIAL: Record<"mixed" | "heaven" | "late", [string, string, string, string]> = {
  mixed: [
    "Your mixed roots have a little to say to the {element} qi of {place}, as they have to every kind. It is not loud, but it is not nothing.",
    "One of your five thin roots stirs at the {element} in the air of {place}. The other four pay no attention, and the one does well enough.",
    "A mixed root is a poor guide and a patient student. At {place} the {element} qi teaches you a single line, and you keep it.",
    "At the turn of the work your mixed roots borrow a thread of {element} from {focus}. It is borrowed, and it is enough for today.",
  ],
  heaven: [
    "Your heaven-marked root half-answers the {element} qi of {place}, with a flicker, like lightning seen through a shutter.",
    "The {element} qi of {place} is not your element, but your thunder root turns toward it anyway, as a storm turns toward a high place.",
    "A heaven-marked root takes what it is given and makes it louder. The {element} qi at {place} comes back to you doubled, and a little frightened.",
    "At the turn of the work your thunder root leaps at the {element} in {focus}, and {kname} steps back out of the line of it.",
  ],
  late: [
    "Your late-blooming roots stir at the {element} qi of {place}, slowly, like a sleeper hearing a faraway bell.",
    "The {element} qi of {place} is not yet yours. Your late roots know it, and wait, and note the date for later.",
    "A late bloom answers last and longest. At {place} the {element} qi touches your roots, and you feel them think about answering.",
    "At the turn of the work your late roots take a first, slow breath of the {element} in {focus}. It will matter in a year.",
  ],
};

/** Roots with no ear for this element. Two variants each; they use whichever the stage picks. */
export const ROOT_FAR: Record<Exclude<Talent, "mixed">, [string, string, string, string]> = {
  wood: [
    "Your verdant root has nothing to say to the {element} qi of {place}. It sits in you like a plant in the wrong soil, and waits.",
    "At {place} the {element} qi runs past your verdant root without a glance. {Kname} sees you look green, and mistakes it for politeness.",
    "Your verdant root cannot read {element}. At the turn of the work it sits quiet, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your verdant root does not speak. You get by on your hands and your patience.",
  ],
  fire: [
    "Your cinnabar root has nothing to say to the {element} qi of {place}. It burns in you like a lamp in a closed room.",
    "At {place} the {element} qi runs past your cinnabar root without a glance. It is hot, and it does not hurry.",
    "Your cinnabar root cannot read {element}. At the turn of the work it flares uselessly, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your cinnabar root does not speak. You get by on your hands and your temper.",
  ],
  earth: [
    "Your mountain root has nothing to say to the {element} qi of {place}. It sits in you like a stone in a stream, unmoved.",
    "At {place} the {element} qi runs past your mountain root without a glance. It is slow, and it does not mind.",
    "Your mountain root cannot read {element}. At the turn of the work it sits heavy, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your mountain root does not speak. You get by on your hands and your weight.",
  ],
  metal: [
    "Your bright-metal root has nothing to say to the {element} qi of {place}. It rings in you with no one to answer.",
    "At {place} the {element} qi runs past your bright-metal root without a glance. It is keen, and it cuts nothing here.",
    "Your bright-metal root cannot read {element}. At the turn of the work it hums, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your bright-metal root does not speak. You get by on your hands and your edge.",
  ],
  water: [
    "Your tide root has nothing to say to the {element} qi of {place}. It runs in you like a stream under ice.",
    "At {place} the {element} qi runs past your tide root without a glance. It is cool, and it does not stop.",
    "Your tide root cannot read {element}. At the turn of the work it eddies, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your tide root does not speak. You get by on your hands and your patience.",
  ],
  heaven: [
    "Your heaven-marked root has nothing to say to the {element} qi of {place}. It sits in you like a storm with nowhere to land.",
    "At {place} the {element} qi runs past your thunder root without a glance. It is loud, and no one here is listening.",
    "Your thunder root cannot read {element}. At the turn of the work it crackles, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your thunder root does not speak. You get by on your hands and your nerve.",
  ],
  late: [
    "Your late-blooming roots have nothing to say to the {element} qi of {place}. They sleep on, and the qi goes by.",
    "At {place} the {element} qi runs past your late roots without a glance. They are not ready, and they know it.",
    "Your late roots cannot read {element}. At the turn of the work they stay shut, and you must do with your hands what the others do with qi.",
    "The {element} in {focus} is a language your late roots do not speak yet. You get by on your hands and your patience.",
  ],
};

/** What the keeper makes of where the hero came from. Four variants per origin. */
export const ORIGIN_MEET: Record<Origin, Four> = {
  river: [
    "You have a river-village way of standing, feet apart, as though the floor might move. {Kname} notices and does not remark.",
    "{Kname} asks where you are from. “A river,” you say, and {kname} nods. Everyone at {place} is from a river, or wishes to be.",
    "Nobody at {place} knows your village. {Kname} says that is how it should be with villages, and offers you a cup.",
    "You give the village’s name and {kname} has never heard it. It is the first thing about you that nobody has an opinion on.",
  ],
  porter: [
    "You pick up a load without being asked, and {kname} watches the way you take its weight. A porter never forgets how to lift.",
    "{Kname} says that the sect’s porters pass through {place} twice a month and are the only people who never haggle. You smile, because it is true.",
    "A porter knows to stand to one side of a door. {Kname} sees you do it and says the sect has trained you better than it knows.",
    "You carry yourself like someone who has climbed this mountain for six years under a load. {Kname} gives you the chair with the high back.",
  ],
  rogue: [
    "{Kname} sees you count the exits and says the rogues always do. “No offence,” says {kname}, “but I count my spoons.”",
    "A rogue cultivator at {place} gets a careful welcome and a long look at the hands. {Kname} has been robbed before, and respects it.",
    "{Kname} asks which sect you left, and you tell the truth: none. {Kname} says that is the one answer {place} cannot check.",
    "You come to {place} by the back way, as rogues do, and {kname} pretends not to have seen you come. It is a courtesy.",
  ],
  heir: [
    "{Kname} sees the ring on your finger, a plain black jade, and says nothing of it. At {place} a fallen house is a fallen house.",
    "You are given the best chair, by instinct, and {kname} realises it only as you sit. “Old habits,” says {kname}. “Forgive them.”",
    "{Kname} knows your house’s name, and the date of its fall. At {place} such things are kept, in the same way that rainfall is kept.",
    "An heir comes to {place} with a house at their back and nothing in their purse. {Kname} has seen this before, and doubles the tea.",
  ],
  courier: [
    "{Kname} sees the green stamp on your satchel strap and asks whether you are carrying something for them. You are not, and {kname} sighs.",
    "A Concord courier at {place} is a rare thing. {Kname} offers a cup, and asks, with great care, what the Concord thinks of {place}.",
    "You set your satchel down on the floor, not the bench, as a courier does. {Kname} nods at the manners.",
    "{Kname} says the Concord’s couriers pay on the nail and never ask for change. You have no change, and {kname} is almost sorry.",
  ],
  exile: [
    "{Kname} sees where a sect’s grey was cut from your sleeve and says nothing. At {place} exiles are a kind of customer.",
    "You hold yourself like someone who has been taught the Windward forms and cast out for knowing them. {Kname} sets a chair near the door.",
    "{Kname} asks which sect, and you say it, and {kname} does not blink. At {place} the Pavilion’s name is neither a recommendation nor a warning.",
    "An exile is a guest who can leave quickly. {Kname} gives you the stool nearest the door, and means it as a kindness.",
  ],
};

/** What the keeper reads in the hero’s mastery of their Dao, at the end of a walk. Three variants per rank. */
export const MASTERY_READ: Record<number, [string, string, string]> = {
  0: [
    "{Kname} sees that your Dao is only beginning, and says so without unkindness. Everyone at {place} began by being corrected.",
    "You are a novice at your Dao and everyone at {place} can tell. {Kname} says that is the best time to ask questions.",
    "A novice does not yet know what they do not know. {Kname} sets a small task for you, and watches how you take the failure.",
  ],
  1: [
    "{Kname} sees that you have the first rank of your Dao, and speaks to you in the voice used for an apprentice who is not yet a nuisance.",
    "An apprentice of any Dao can follow the work and not yet lead it. {Kname} lets you follow, and lets you see that you are being let.",
    "At {place} an apprentice is given a bench and a corner. {Kname} shows you both, and a rule about each.",
  ],
  2: [
    "{Kname} sees that your Dao has reached Adept, and speaks to you as to a colleague who has not yet seen the inner room.",
    "An adept of any Dao can be shown the difficult things. {Kname} takes down a tool from a high shelf, and its dust tells you how long it has waited.",
    "At {place} an adept is given a name, not a title. {Kname} uses yours twice in a single sentence, and is a little startled to hear it.",
  ],
  3: [
    "{Kname} sees that you have reached Master in your Dao and lowers the voice. At {place}, the masters are few, and each of them is noticed.",
    "A master of any Dao is met at the door. {Kname} has come out to meet you and has not troubled to hide it.",
    "At {place} a master is asked for judgment, not advice. {Kname} offers you the day’s hardest piece of work, and does not look away from you while you read it.",
  ],
  4: [
    "{Kname} sees that you are a Grandmaster, and for a moment cannot speak. At {place} the word has not been said aloud in thirty years.",
    "A grandmaster of any Dao is a rumour that has walked in. {Kname} stands, and so does everyone else in {place}.",
    "At {place} a grandmaster is not asked for anything. {Kname} brings a cup, sits at your feet, and waits to be allowed to learn.",
  ],
};

// ───────────── choices

/** The hero practises their own Dao beside a keeper of the same Dao. Slots: kname, focus, dao. */
export const PRACTISE_KIN: string[] = [
  "Set your own hands to {focus} beside {kname}, and work as one of the trade.",
  "Show {kname} how your {dao} would handle {focus}, and let {kname} correct you where you are wrong.",
  "Take up {kname}’s tools and do the work as your {dao} taught you.",
  "Ask {kname} to judge a piece of your {dao}, and offer {focus} as the test.",
];

/** Anyone may learn something at a craft that is not their own. Slots: kname, focus, craft. */
export const PRACTISE_CRAFT: string[] = [
  "Work beside {kname} for an hour on {focus}, and learn what the {craft} craft has to teach someone from another trade.",
  "Ask {kname} to let you try {focus} with your own hands, badly, and be told why it is bad.",
  "Offer to carry for {kname} at {focus} in exchange for a lesson in the {craft} way of seeing.",
  "Watch {kname} work on {focus} and copy each motion a breath late, until your hands catch up.",
];

/** A kindred or partial root answers the road’s element. Slots: focus, element. */
export const RESONATE: string[] = [
  "Let your root answer the {element} in {focus}, and wait to hear what it says back.",
  "Lay your palm on {focus} and let your root speak to its {element} in its own tongue.",
  "Breathe in the {element} qi of {focus} until your root takes the shape of it.",
  "Ask your root to recognise the {element} in {focus}, and let it lead.",
];

/** A hero of enough mastery is shown the inner room. Slots: kname, dao, focus. */
export const MASTERS_DOOR: string[] = [
  "Show {kname} what your Dao has become, and ask to be shown the inner room.",
  "Tell {kname} you have earned your rank in your own Dao, and ask for the work that is kept from apprentices.",
  "Put your hand on the door behind {focus} and say you are ready for what {kname} keeps there.",
];

// ───────────── the way back

export const RETURN_KIN: string[] = [
  "{Kname} walks you to the door and says you worked like one of the trade. It is the highest praise {place} has.",
  "As you leave, {kname} calls you by the name of your Dao instead of your own. It is a compliment.",
  "{Kname} presses a small warm thing into your hand and says it was left by the last of your craft who passed.",
  "{Kname} says that if your Dao ever needs a bench, there is one at {place}, and it is already yours.",
];

export const RETURN_PRACTISED: string[] = [
  "What {kname} taught you sits in your hands like a second pulse. It is not your Dao, and it makes your Dao a little wider.",
  "You leave {place} knowing something of the {craft} craft that you did not know at dawn. It is small, and it will not leave.",
  "The lesson of {focus} stays with you. You hold your hands differently on the way out.",
  "{Kname} says you learned quickly for a stranger. You say you had a good teacher, and both of you pretend it was not flattery.",
];

export const RETURN_RESONATED: string[] = [
  "Your root still hums with the {element} of {place}, a note on the edge of hearing that will not fade until you sleep.",
  "The {element} qi you drew at {focus} is warm in your dantian. It is not yours, and it has agreed to stay a while.",
  "You leave {place} with your root a little brighter than you came. {Kname} says it will pass. You hope not.",
  "A thread of {element} follows you out of {place}, fine as a hair. Your root has decided to keep it.",
];

export const RETURN_MASTERS: string[] = [
  "{Kname} opens the inner room for you and closes it behind you. What you saw is your own affair. You leave quieter than you came.",
  "What was kept in the inner room of {place} is now a part of your Dao. {Kname} asks only that you do not say where you learned it.",
  "The inner room smelled of old work and older patience. You are not the first to leave it changed, and {kname} is not surprised.",
];

export const REPORT_MEMORY4 = {
  kin: "You worked beside {kname} at {place} as one of the trade, and {kname} knew you for it. The Law Hall has no craft of its own, Wanderer. It borrows yours. I am glad it has someone to borrow from.",
  practised: "You spent an hour learning the {craft} craft at {place} and came away with a little more than you brought. I used to think a Dao was a wall. You seem to be proving it is a door.",
  resonated: "Your roots answered the {element} of {place}. I felt it from here, faintly, like a bell in another courtyard. Be careful what you let your body learn to answer.",
  masters: "{Kname} opened the inner room of {place} for you. That is not a courtesy anyone earns by being pleasant, Wanderer. I will not ask what you saw. I will watch what you do with it.",
};

/** The wayside hub, reading the hero’s mastery. Four-line pool per rank, one shown. */
export const HUB_RANK: Record<number, string> = {
  0: "Nobody here has heard of your name in your Dao yet. The keepers look at your hands, and wait.",
  1: "The keepers see that you have some training in your Dao, and give you the stool near the door.",
  2: "The keepers see that you are an adept. They set aside the work they would show a colleague.",
  3: "The keepers rise as you come in. A master’s rank is not asked about twice.",
  4: "The keepers fall silent as you enter. Nobody has said Grandmaster aloud in this yard for thirty years, and nobody says it now.",
};
