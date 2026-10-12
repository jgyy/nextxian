import type { Gender } from "@/engine/hero";
import type { Element } from "@/engine/path";
import type { Craft } from "./lexicon-craft";
import type { RootKind } from "./lexicon-root";

/**
 * How a Crossing Road greets the person who walks onto it. A road reads the hero’s roots against its element, their Dao against its craft, and
 * their gender against the keeper’s. Each line is one sentence or two and stays under thirty words, since a scene may carry three of them.
 * Slots: kname, kthey, ktheir, place, focus, element, trade (the keeper’s trade, “smith”), dao.
 */

/** The road’s element against the hero’s roots, as the keeper first sees them. Two variants each. */
export const ROOT_GREET: Record<Element, Record<RootKind, string[]>> = {
  wood: {
    kin: [
      "Your own root is green, the same green as the place, and the leaf on the sill turns toward you before you have spoken.",
      "{Kname} notes the green in the way you stand, a patience that only a wood-root has, and sets out a second stool.",
    ],
    partial: [
      "A green thread runs through your mixed roots, and {kname} sees it at once, the way one sees a vein in a stone.",
      "Your roots answer the green at {place} only in part. {Kname} nods at this as at a fair beginning.",
    ],
    far: [
      "The green at {place} does not stir for you, and {kname} marks it kindly, as one marks a guest who will need more tea.",
      "Your roots are deaf to wood, and the leaves at {place} go on with their business and do not turn.",
    ],
  },
  fire: {
    kin: [
      "Your own root is red, and the coals at {place} brighten when you pass, before anyone has said a word.",
      "{Kname} feels the heat of you across the floor, a fire-root’s warmth, and moves the cold tea out of your way.",
    ],
    partial: [
      "There is a spark in your mixed roots, and {kname} sees it the way a smith sees a fleck in the ore.",
      "Your roots answer the fire at {place} only in part, and {kname} says a half-answer burns the slower, and the longer.",
    ],
    far: [
      "The fire at {place} does not lean toward you, and {kname} marks it kindly, as one marks a guest who will want a shawl.",
      "Your roots are deaf to fire, and the flames at {place} burn straight and do not look round.",
    ],
  },
  earth: {
    kin: [
      "Your own root is earth, and the floor of {place} takes your weight as if it had kept the place for you.",
      "{Kname} sees the settled way you stand, an earth-root’s way, and says the ground has been waiting for someone like that.",
    ],
    partial: [
      "A thread of earth runs through your uncertain roots, and {kname} sees it the way a mason sees a good seam.",
      "Your roots answer the earth at {place} only in part, and {kname} says a half-root is a foundation that has not been dug yet.",
    ],
    far: [
      "The earth at {place} does not settle for you, and {kname} marks it kindly, as one marks a guest who will need a chair.",
      "Your roots are deaf to earth, and the floor of {place} bears you politely and gives nothing else.",
    ],
  },
  metal: {
    kin: [
      "Your own root is metal, and the edges at {place} catch the light a little brighter as you come in.",
      "{Kname} hears the clear thin note of you, a metal-root’s note, and stops the hammer to listen to it.",
    ],
    partial: [
      "A bright thread runs through your mixed roots, and {kname} sees it the way a smith sees a glint in the slag.",
      "Your roots answer the metal at {place} only in part, and {kname} says a half-note is where every tune begins.",
    ],
    far: [
      "The metal at {place} does not ring for you, and {kname} marks it kindly, as one marks a guest who will want a lamp.",
      "Your roots are deaf to metal, and the bright things at {place} keep their silence politely.",
    ],
  },
  water: {
    kin: [
      "Your own root is water, and the damp at {place} gathers a shade nearer as you come in, as a tide to a beach.",
      "{Kname} sees the unhurried way you move, a water-root’s way, and says the pool has not been so quiet in years.",
    ],
    partial: [
      "A cool thread runs through your uncertain roots, and {kname} sees it the way a well-digger sees a damp patch.",
      "Your roots answer the water at {place} only in part, and {kname} says every river began as a seep.",
    ],
    far: [
      "The water at {place} does not stir for you, and {kname} marks it kindly, as one marks a guest who will want a towel.",
      "Your roots are deaf to water, and the damp at {place} runs along the wall and does not turn to look.",
    ],
  },
};

/** The keeper meets a hero who walks the keeper’s own Dao. One line for each craft. */
export const OWN_GREET: Record<Craft, string> = {
  alchemy: "{Kname} sees the stain of the herbs on your fingers and says, plainly, that a pill-maker has come to the still, and that this is a thing that does not happen often.",
  forging: "{Kname} sees the burn-marks at your wrists and says, plainly, that a smith has come to the forge, and sets a second hammer on the bench.",
  talisman: "{Kname} sees the ink under your nails and says, plainly, that a writer has come to the shop, and moves the good brushes within your reach.",
  formation: "{Kname} sees the way you step round the stones at {place} and says, plainly, that a keeper of arrays has come, and lets you walk the ring unaccompanied.",
  beast: "{Kname} sees the animals at {place} turn their heads toward you and says, plainly, that a keeper has come, and asks the oldest to make room.",
  sword: "{Kname} sees the way you carry your weight and says, plainly, that a swordsman has come, and sets a stave against the wall within your reach.",
  healing: "{Kname} sees the way you look at the sick before you look at anything else, and says, plainly, that a healer has come, and gives you a clean cloth.",
  fate: "{Kname} sees the way you look at the lines in the floor and says, plainly, that a diviner has come, and turns the almanac to face you.",
};

/** The keeper meets a hero whose Dao is another craft. One line for each of the eight, by the hero’s Dao. */
export const OTHER_GREET: Record<Craft, string> = {
  alchemy: "{Kname} smells the herbs on your sleeve and says a pill-maker is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  forging: "{Kname} sees the burn-marks at your wrists and says a smith is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  talisman: "{Kname} sees the ink under your nails and says a writer is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  formation: "{Kname} sees how carefully you step round the stones, and says a keeper of arrays is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  beast: "{Kname} sees how the animals follow you with their eyes, and says a beast-keeper is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  sword: "{Kname} sees how you carry your weight, and says a swordsman is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  healing: "{Kname} sees how you look at the sick before anything else, and says a healer is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
  fate: "{Kname} sees how you read the room before you enter it, and says a diviner is welcome at the {trade}’s bench, though the {trade} will not pretend to know the art.",
};

/** The keeper meets a hero with no Dao. Three variants; a road takes the one its index points at. */
export const OPEN_GREET: string[] = [
  "{Kname} sees your open hands, with no craft written on them, and says that is the commonest sight in the world and the hardest to teach.",
  "{Kname} looks at your hands, finds no mark of any trade, and says every craft was once a pair of hands that did not know it.",
  "{Kname} sees that you follow no Dao, and says the {trade}’s art has been taught to worse beginners than an open hand.",
];

/** What the road makes of a hero’s gender before a word has passed: the people say how they will speak to you. Four variants each. */
export const GENDER_GREET: Record<Gender, string[]> = {
  woman: [
    "The people at {place} call you madam, and the word has more weight here than on the road. It asks what you mean to do with the place it gives you.",
    "A woman at {place} looks you up and down once, kindly, and a man at the door looks at the floor; both are summing up something you cannot yet name.",
    "The talk at {place} drops a note when you come in, the way it does for a woman who has walked alone, and rises again with the pitch of one deciding to say less.",
    "{Kname} greets you by your title and asks, in the same breath, whether you have eaten. The second is a courtesy of the craft, and the first is a test.",
  ],
  man: [
    "The people at {place} call you sir, and the word has more weight here than on the road. It asks what you mean to prove with the place it gives you.",
    "A man at {place} looks you up and down once, measuring, and a woman at the door looks at your hands; both are summing up something you cannot yet name.",
    "The talk at {place} thickens when you come in, the way it does for a man who has walked in uninvited, and a stool is moved with a scrape of the floor.",
    "{Kname} greets you by your title and asks, in the same breath, what you have come to take. The second is a courtesy of the craft, and the first is a test.",
  ],
  unspoken: [
    "The people at {place} call you friend, since they have no better word, and the word has a pause before it that you hear and they do not.",
    "A woman and a man at {place} each look at you, and then at each other, and then at the work; neither has settled what to call you, and both let it go.",
    "The talk at {place} hesitates when you come in, the way it does for someone no one can place, and goes on as if the hesitation had been a cough.",
    "{Kname} greets you with no title at all, and asks what you would like to be called. The second is a courtesy of the craft, and the first is a kindness.",
  ],
};
