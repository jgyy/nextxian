import type { Dao } from "@/engine/hero";

/**
 * What each Dao does in a fight. A hero with a Dao is shown their craft at the sighting, may work it at the turn of the fight, is shown what it did at
 * the crisis and the stroke, and finds in the spoil what only their trade can make of it. A foe’s bane is the Dao it has no answer to. Slots as in the
 * main lexicon.
 */
type Crafts = Exclude<Dao, "none">;
export const CRAFTS: Crafts[] = ["alchemy", "forging", "talisman", "formation", "beast", "sword", "healing", "fate"];

/** The sighting: what the hero’s craft makes of the foe. Two variants. */
export const DAO_SEES: Record<Dao, [string, string]> = {
  none: [
    "Your hands are empty of any craft, and you look at {name} with only your eyes and your nerve. The hunters say that is how most of them began.",
    "No Dao has taught you what to look for in {name}, so you look at all of it, and it is a good deal to hold in one head.",
  ],
  alchemy: [
    "You smell it before you see it, and the nose of an alchemist does the sums: what it eats, what its blood would want, what in your pouch would sit badly in its belly.",
    "The pill-maker in you looks at {name} and sees a thing that has been fed on something. Whatever that is, it can be fed something else.",
  ],
  forging: [
    "Your eye goes to what you could put between you and it: a spike, a hook, a chain. The forger’s habit is to want an edge, and an edge is what {name} has been missing.",
    "A forger measures before anything else. You measure {name} by reach and weight, and come out with a length of iron you wish you had brought.",
  ],
  talisman: [
    "Your fingers go to the paper in your sleeve. {Name} is the sort of thing a ward was invented for, if the ward can be written before the {cry} comes.",
    "You read the ground the way a script-maker reads a blank page: where the first stroke should go, and where the last must close.",
  ],
  formation: [
    "You count the stones, the stumps, the lines of the ground, and find in {place} the beginnings of an array. {Name} walks across it without knowing it is a design.",
    "An array-master sees a fight as a shape in space. {Place} has good bones for one, and {name} has the habit of walking where a line could be.",
  ],
  beast: [
    "{Name} looks at you, and you look back the way you have learned to: sidelong, slowly, with your open hand low. Whatever it is, it is also something that wants to be understood.",
    "The beast-tamer in you reads its posture before its size. It is hungry, or afraid, or both, and that is something to start from.",
  ],
  sword: [
    "Your hand finds its place by your hip without being told. You size {name} the way a swordsman sizes a door: by where it opens, and what it costs to go through.",
    "You see the line of the fight before it begins, and the cut that ends it. Whether you can make it is another matter, and the one that matters.",
  ],
  healing: [
    "You see first that it is hurt. Not by anyone, perhaps; hunger and age and grief do the same. A healer cannot look at {name} and not read it as a patient.",
    "A healer’s eye goes to the wrong thing: not the teeth but the sores, not the {cry} but the breath behind it. {Name} is suffering, and that is also a weakness.",
  ],
  fate: [
    "You throw the stalks in your head and read the fall: one line for you, one for it, one for the thing that will happen if neither of you turns aside.",
    "The diviner in you does not ask whether you will win. It asks what is owed, and by whom, and {name} has the look of a debt coming due.",
  ],
};

/** The same, when the foe’s bane is the hero’s own Dao: it has no answer to the craft, and the hero sees why. */
export const DAO_BANE: Record<Crafts, string> = {
  alchemy: "You see its weakness at once: it has never met a pill. Whatever it has been eating, it has never been fed the thing that undoes it, and that is in your sleeve.",
  forging: "You see its weakness at once: nothing it has met has been made. A forged edge is a thing it has no word for, and you have brought three.",
  talisman: "You see its weakness at once: it respects nothing it cannot read. A ward is a sentence, and it is the one creature in {place} that has never heard one.",
  formation: "You see its weakness at once: it cannot tell a path from a trap. It treads where the ground is easiest, and the ground is yours to arrange.",
  beast: "You see its weakness at once: it wants a master. Something in it has waited a long time to be told what to do, and the tamer’s voice is the voice it knows.",
  sword: "You see its weakness at once: it has never met a clean cut. Everything it has fought has torn at it, and a single true stroke is a language it has no defence for.",
  healing: "You see its weakness at once: it is in pain, and has been for years. Ease that pain, and the fight goes out of it faster than any blade could take it.",
  fate: "You see its weakness at once: it is doomed, and does not know it. Read it its own fall, and the fall is half done.",
};

/** The choice to work the craft at the turn, one for each way of going at the foe. */
export const DAO_MOVE: Record<Crafts, [string, string, string, string]> = {
  alchemy: [
    "Break a pill under its nose and fight in the smoke of it.",
    "Seed the path with bait you have steeped, and wait for it to eat.",
    "Take a sample of what it leaves behind, and work out what ails it.",
    "Press a calming draught into the air, and draw it away on the scent.",
  ],
  forging: [
    "Throw the iron you made for just this, and follow it in.",
    "Plant a hook and a chain where it will step, and let its own weight set them.",
    "Strike a spark off the metal in your hand, and read the ground by it.",
    "Ring your hammer on a stone, steady and slow, and lead it by the noise.",
  ],
  talisman: [
    "Slap a ward against its path and stand behind the line it makes.",
    "Pin a silencing slip to a post, and let the quiet hide you.",
    "Draw its likeness on a slip and read what the ink does.",
    "Paste a lure-slip to a pole, and draw it away from the people.",
  ],
  formation: [
    "Set the stones at your feet into the corners of a pen, and give ground within it.",
    "Lay the array in the path, line by line, and step out of it as it closes.",
    "Walk the ground and mark where the lines of the place would run.",
    "Close the array behind you, door by door, and leave it one way to go.",
  ],
  beast: [
    "Meet its eye and take a step toward it, open-handed, as to a hurt animal.",
    "Whistle low from the cover, the call it has been waiting for.",
    "Sit down within its sight, and let it study you while you study it.",
    "Call it by the old call, and walk it away from the road.",
  ],
  sword: [
    "Draw, and give it the line that goes through.",
    "Slip the blade out of the sheath where it cannot see the light on it.",
    "Test the air with a single cut, and see where it shies.",
    "Lay the blade flat across your forearm and ask it to look at you, not at them.",
  ],
  healing: [
    "Step in with a needle between your fingers, and find the pain that makes it fight.",
    "Slip a numbing salve into the place it will bite, and let it taste only that.",
    "Lay your palm toward it and feel what it carries in the body.",
    "Hum the tune you hum to the dying, and walk backward.",
  ],
  fate: [
    "Throw the stalks and step to the side the line says is safe.",
    "Read its fall, and be waiting where it falls.",
    "Name the moment it will come, aloud, a heartbeat before it does.",
    "Read the stalks for a road that costs no one, and walk it with the foe behind you.",
  ],
};

/** The turn: what the hero’s craft is doing, for a hero who chooses to work it. */
export const DAO_TURN: Record<Dao, string> = {
  none: "You have no craft to put to this. You have what you brought, and what the moment gives you.",
  alchemy: "Your hand knows the weight of every pill in your sleeve, and which one, in a breath, would turn this.",
  forging: "Your hand knows the weight of the metal you carry, and the one thing in your pack that can be made to serve.",
  talisman: "Your hand knows how many slips are left in your sleeve, and which one is wet enough to take a stroke now.",
  formation: "Your eye knows how many lines the ground has left, and where the last of them could be closed.",
  beast: "Your whole body knows what it is to be looked at by a creature, and what it is to look back.",
  sword: "Your whole body knows where the blade is, and what is between the blade and the thing it wants.",
  healing: "Your hand knows where a pulse sits, and which way a body leans when it hurts.",
  fate: "Your mind knows the three lines it has drawn, and the fourth it has not looked at.",
};

/** The crisis, for a hero who worked their craft: what it has done by now. */
export const DAO_CRISIS: Record<Crafts, string> = {
  alchemy: "The draught has begun to tell. {Name} moves a shade too slowly, and the haze round it is yours.",
  forging: "The iron has bitten. {Name} favours the side you marked, and it does not know yet that it is favouring it.",
  talisman: "The ward holds. {Name} has run its {body} against the line twice now, and the line is still there.",
  formation: "The array is closing on its own account, and {name} is walking, bit by bit, into the shape of it.",
  beast: "{Name} has stopped hating you. It has not started to like you. It has started, instead, to wait, which for a creature of its kind is the beginning of obedience.",
  sword: "Your edge has found its line, and {name} knows where it is. It will not go past that place again, and the rest of the fight happens on your side of it.",
  healing: "The needle has found the pain, and {name} is fighting something else now: the ease that has begun in it.",
  fate: "The stalks were right. It comes at the moment you named it, and you are not where it expected you to be.",
};

/** The stroke, for a hero who ends it with their craft. */
export const DAO_STROKE: Record<Crafts, string> = {
  alchemy: "You loose the last pill into the air at its mouth. {Name} takes it, as it takes everything, and what the pill does it does quietly and thoroughly.",
  forging: "You throw the iron and it goes where you meant it, and the sound it makes is the sound of a thing designed for one purpose, doing it.",
  talisman: "You close the last stroke of the ward and set it, and the whole page of the fight turns over. {Name} meets the written word and does not read on.",
  formation: "You close the last line of the array, and {place} agrees with you. {Name} does not so much fall as find that there is nowhere left for it to be.",
  beast: "You put your hand out. For a moment nothing at all happens, and then {name} lowers its {body} to your palm, and the fight is over, as a wish is over.",
  sword: "One cut, and no second. The blade goes where the line was, and {name} {falls} along it.",
  healing: "You find the one place in the {body} where the pain has gathered, and ease it. {Name} stops fighting, and then, between one breath and the next, stops.",
  fate: "You say the end of it aloud, and the end of it comes. {Name} does what it was always going to do, and you are the only one who saw it.",
};

/** The spoil: what the hero’s craft makes of it. One for each Dao, and one for none. */
export const DAO_SPOIL: Record<Dao, string> = {
  none: "You turn {hide} over in your hands. It is worth something to someone with a trade; to you, it is a weight in your pack and a story.",
  alchemy: "A pill-maker looks at {hide} and sees three recipes, two of them dangerous. You wrap it in a leaf, and the leaf is already going green with the thought.",
  forging: "A forger looks at {hide} and sees an edge, a haft, a rivet. You are already planning the fire.",
  talisman: "A script-maker looks at {hide} and sees ink: grind it fine, and a ward written with it would last a generation.",
  formation: "An array-master looks at {hide} and sees a keystone, which every array wants and few ever find.",
  beast: "A tamer looks at {hide} and thinks of the creature’s kin, and of what they might owe you for the way it ended.",
  sword: "A swordsman looks at {hide} and sees a pommel, a grip, a charm for a scabbard. It would sit well on a good blade.",
  healing: "A healer looks at {hide} and sees a dozen cures, in the right hands and the right dose. You keep it dry.",
  fate: "A diviner looks at {hide} and sees a good stalk, a good bone. It already feels as though it belonged to your hand.",
};

/** The Elder’s memory of what the hero’s craft did, for her report. */
export const REPORT_DAO: Record<Crafts, string> = {
  alchemy: "You fought {name} with a pill-maker’s patience, and made it eat before it ate you. Alchemists are the only cultivators I know who go to a fight with a recipe and win it by arithmetic.",
  forging: "You fought {name} with iron you made. I have always preferred that to iron one is lent. It is a form of honesty to carry the thing that kills.",
  talisman: "You fought {name} with written lines. I have judged a hundred cases on less ink than that, and been less certain than a ward is.",
  formation: "You fought {name} with the shape of the ground. The array-masters say the whole of war is knowing where the walls are. You have confirmed it for me at the cost of a boar’s dinner.",
  beast: "You fought {name} by being known to it. I did not know a hunt could be won by manners. I shall try them on the Tribunal.",
  sword: "You fought {name} with the one cut. The old swordsmen say the second is an apology. I am glad you did not owe one.",
  healing: "You fought {name} by easing it. I have never seen a healer win a fight, and have never seen one lose either. It seems the two things are unrelated.",
  fate: "You fought {name} by knowing when. I do not approve of the stalks. I approve of the result, and shall keep my approvals separate.",
};
