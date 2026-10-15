import type { Dao, Talent } from "@/engine/hero";

/**
 * Lines about the hero’s roots and Dao that fit any stretch of road, in the weather, on foot. Three variants of each, so the five
 * prologues and the roads that borrow them do not all say the same thing about the same root.
 */
export const TALENT_ROAD: Record<Talent, [string, string, string]> = {
  wood: [
    "The rain is good to you. Your verdant root drinks it through the soles of your feet, and the grass on the verge bows a little as you pass.",
    "A hedge of thornbush parts for your sleeve. Your verdant root cannot tell whether it asked, or the hedge offered.",
    "Every weed in the verge has turned toward you. You step over a seedling, and feel it thank you.",
  ],
  fire: [
    "Steam rises from your shoulders in the rain. Your cinnabar root runs hot, and the water gives up before it reaches the skin.",
    "You light your way with a thumbnail of fire, and put it out, and wonder at yourself. The root wants out more than you do.",
    "The cold does not find you. Your cinnabar root keeps the whole body warm, and others draw closer without admitting why.",
  ],
  earth: [
    "The ground tells you where it is firm. Your mountain root steps ahead of your eyes, and you do not slip once.",
    "You feel the hill under the road, its slow weight and its patience. Your mountain root hums like a held note.",
    "Mud takes other travellers by the boot, and lets go of yours. Your mountain root knows the road better than the road does.",
  ],
  metal: [
    "A cold bright line runs through your qi, and every iron nail along the road sings to it. Your bright-metal root is awake.",
    "You can feel the coins in a stranger’s belt and the knife in a boot. Your bright-metal root counts them without being asked.",
    "The rain rings on your pack buckle in a single note. Your bright-metal root tunes itself to it.",
  ],
  water: [
    "The rain finds you as if you were the river it was looking for. Your tide root drinks the cold, and your thoughts run clear.",
    "The fog thickens, and you walk through it as through a familiar room. Your tide root knows how mist moves.",
    "Every puddle you pass shows you a little more than it should. Your tide root has never trusted still water, and has never been wrong.",
  ],
  mixed: [
    "Five small currents move in your qi, and none leads. You borrow a little warmth from one, a little patience from another, and keep walking.",
    "Your mixed roots hum nothing in particular. It is the sound of a body that can learn anything and has not yet been asked.",
    "No element answers loudly, and none refuses you. The road is the same road to every part of you.",
  ],
  heaven: [
    "Far above the cloud a thread of thunder walks the ridge, and your heaven-marked root answers it before you can decide not to.",
    "The hair rises on your arms. Your thunder root knows a storm that is not here yet, and so, you suspect, does the storm.",
    "A small blue spark jumps from your fingertip to the roadside gate. You wait for someone to have seen it. No one has, you think.",
  ],
  late: [
    "You are tired in a way the others are not. Your roots are still shut, you tell yourself, and the road is long, and so are you.",
    "Something in your chest turns over like a seed in cold soil, and goes back to sleep. Late bloom, you remind yourself. Late, not never.",
    "You walk more slowly than the others would. Your late-blooming roots do not hurry, and you have decided not to apologise for it.",
  ],
};

export const DAO_ROAD: Record<Dao, [string, string, string]> = {
  none: [
    "You carry no craft, only open hands. Every trade you pass seems to call to you, and none claims you.",
    "A tinker offers to teach you his knots, and a woman her herbs. You smile at both. Your open hand stays open.",
    "You look at each craftsman’s work as at a door in a long corridor, wondering which of them is yours.",
  ],
  alchemy: [
    "You smell the wet bark and the three kinds of moss, and begin against your will to compound them in your head. A pill-maker never travels empty-handed, even in the mind.",
    "In a ditch you spot a root your Pill Dao calls bitter-bright, and pocket it with the care of a thief. It will be a month before it matters.",
    "A farmer’s cough remedy is wrong in two of its five herbs. You hold your tongue. Your Pill Dao is itching to say which.",
  ],
  forging: [
    "You test every iron hinge with a thumb as you pass. Your Forge Dao cannot leave a poorly tempered thing alone.",
    "A cart’s axle rings false under its load. You hear it from fifty paces. Forgers are never quite at rest in a world made badly.",
    "A wayside smith is working a ploughshare. You slow, and your hands remember what to do with it. Your Forge Dao nods once.",
  ],
  talisman: [
    "The old gate-post has a ward cut into it, weathered to a rumour. You read it from habit and find a stroke missing.",
    "Rain runs off your oilcloth in a pattern that, to a talisman-maker’s eye, is nearly a character. You tilt the cloth and complete it.",
    "You find yourself tracing characters in the air with one finger as the road hums along. Your Talisman Dao has no off switch.",
  ],
  formation: [
    "You notice, without trying, that the milestone, the shrine and the ferry post stand at the points of a very old, very faded array.",
    "The stones in the dyke are laid in a pattern. Your Formation Dao reads where they hold, and where they would crack under a hard push.",
    "At a crossroads you feel the lines of the road meet in a node. Your Formation Dao sits there a moment, humming.",
  ],
  beast: [
    "A crow follows you for a mile and then, satisfied, lands on your pack. Your Beast Dao has a way of making introductions.",
    "Something large moves in the hedge, weighs you, and leaves you alone. Your Beast Dao says it was a fox, and a polite one.",
    "A stray dog falls into step at your heel as though by appointment. You do not remember feeding it. Your Beast Dao did that without asking you.",
  ],
  sword: [
    "Your hand rests near your hip at every bend. The Sword Dao in you is never quite off duty, and neither, by now, are your ears.",
    "You measure the road in sword-lengths: the distance to the ditch, to the tree, to the other person’s throat. It is an unlovely habit, and a useful one.",
    "You catch a falling leaf on the edge of your palm and split it in two without meaning to. The Sword Dao in you is showing.",
  ],
  healing: [
    "A limping porter stops to rest, and you see at once which knee, and how long, and that he will not mention it. Your Healer’s Dao is already counting.",
    "You pass a child with a fever in a doorway and cannot make yourself walk on. Your Healer’s Dao has opinions about haste.",
    "The road is full of small hurts, and you see each one. A healer never goes anywhere without a long list of other people’s pains.",
  ],
  fate: [
    "You look at the fork in the road and the threads pull one way, then the other, then settle. Your Fate Dao has chosen before you.",
    "A magpie crosses your path from left to right, and you note the number of its wings. Your Fate Dao is rarely wrong and never quite certain.",
    "A stranger greets you by a name you have not given. He is wrong, and not entirely wrong. Your Fate Dao hums.",
  ],
};

const TALENTS = Object.keys(TALENT_ROAD) as Talent[];
const DAOS = Object.keys(DAO_ROAD) as Dao[];

/** Markup lines for one group of extras, one per talent, picking variant `n`. */
export const talentExtras = (n: number, group = "root"): string => TALENTS.map((t) => `+[${group}] hero:talent=${t} | ${TALENT_ROAD[t][n % 3]}`).join("\n");

/** Markup lines for one group of extras, one per Dao, picking variant `n`. */
export const daoExtras = (n: number, group = "craft"): string => DAOS.map((d) => `+[${group}] hero:dao=${d} | ${DAO_ROAD[d][n % 3]}`).join("\n");
