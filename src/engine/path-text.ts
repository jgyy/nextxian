import type { Dao, Talent } from "./hero";

/**
 * What the hero’s roots and Dao add when they break through into a realm. A talent has a line for every realm from
 * Qi Condensation up. A Dao speaks at Foundation Establishment, Nascent Soul and Dao Seeking, the three realms where a craft changes shape.
 */
const TALENT_ARRIVAL: Record<Talent, Record<number, string>> = {
  wood: {
    1: "Green qi climbs your arms like sap in spring. Something in you has been waiting a long time to leaf.",
    2: "Your foundation grows rather than sets, rooted and branching. The moss on the nearest wall leans toward you.",
    3: "The core forms like a seed-heart, gold and slow. Every plant within ten paces turns a degree toward you.",
    4: "The soul behind your eyes is a sapling, and it is not afraid of weather.",
    5: "You cut the cords as a gardener prunes: cleanly, above a bud. Something grows where the cut was.",
    6: "The Dao comes to you as a season, not a road. You are in the spring of it, and it is a long one.",
    7: "A mountain of green rises in you, and the sky is only the next canopy.",
  },
  fire: {
    1: "The first thread of qi arrives hot. For a breath you smell your own sleeve scorch, and then the heat finds its place.",
    2: "Your foundation is fired like a kiln floor, hard and glazed. It rings when you stamp.",
    3: "The core ignites. The lamps in the room gutter toward you, and a temper you always had finds a home at last.",
    4: "A small bright figure sits behind your eyes with its hands held out to a fire that is also itself.",
    5: "You burn the last cords through. It does not hurt, and you are astonished that it does not.",
    6: "The Dao is a hearth, and you walk toward it with your hands open and your coat on fire.",
    7: "The sky is a furnace door, and you are what it has been waiting to cook.",
  },
  earth: {
    1: "The qi comes slowly, as water comes to a well, and settles, and stays. You feel the floor take an interest.",
    2: "The foundation seats itself like a cornerstone. You could stand on it through any weather, and so could a house.",
    3: "The core forms with the weight of a millstone, and the ground beneath you shifts its stance with a soft sound.",
    4: "The figure behind your eyes sits cross-legged on bare rock and has plainly decided to stay a thousand years.",
    5: "You shed the cords as a mountain sheds snow: all at once, and without moving.",
    6: "The Dao is the ground, and you are the part of the ground that has learned to walk.",
    7: "You do not rise so much as the sky is brought down to the height of your hand.",
  },
  metal: {
    1: "The qi arrives clean and cold, a bright line down the spine. Your teeth ring with it.",
    2: "The foundation is laid like a blade’s edge: flat, true, and thinner than it looks.",
    3: "The core cools into a bright seed of metal, and the air in the room sings one thin high note.",
    4: "A figure behind your eyes holds a sword up to the light, reads the edge, and nods.",
    5: "You cut the last cords with a single clean stroke. Nothing is left that could fray.",
    6: "The Dao is a line drawn straight through everything, and you can feel which way it runs.",
    7: "The sky is a lid of bright metal, and you have found the seam.",
  },
  water: {
    1: "Qi enters you as water enters a field, finding every low place first. You are cold in the arms and warm at the chest.",
    2: "Your foundation is a still pool, so level that the room stands reflected in it upside-down.",
    3: "The core forms as a drop that refuses to fall. Your sleeves are damp, though it is not raining.",
    4: "A figure sits behind your eyes at the edge of a river and is content to let it pass.",
    5: "You do not cut the cords. You let them run off, and find you were never tied to them.",
    6: "The Dao is a current, and you find you have always been in it and never once had to swim.",
    7: "The sky is the surface of a deeper water, and you are coming up for air.",
  },
  mixed: {
    1: "Five threads of qi come to you, thin as hairs, one of each kind. None of them is strong and all of them are yours.",
    2: "A foundation of five stones, mismatched, laid by a mason with no plan and a good eye.",
    3: "The core forms as a pebble of five colours. It is not the brightest on the mountain, and it is entirely yours.",
    4: "The figure behind your eyes wears a patchwork robe, one sleeve for each root. It is not embarrassed.",
    5: "You sever the cords one element at a time, and each comes away a little differently.",
    6: "The Dao reaches you by five roads at once. You never had to choose between them, and now you need not.",
    7: "The sky opens along five seams at once. You go through whichever one is nearest.",
  },
  heaven: {
    1: "Qi does not come to you. It falls, a bolt of it, white and loud, and the room smells of storm. A lamp goes out three courtyards away.",
    2: "The foundation is laid in lightning, glassy and branching, and everyone in earshot feels the hair rise on their arms.",
    3: "The core cracks into being with the sound of a drumhead. Somewhere a bell rings that nobody struck.",
    4: "The figure behind your eyes is already looking up. Heaven is looking back, and both are interested.",
    5: "You sever the cords, and the sky takes notice: one clear stroke of thunder over the mountain, and then a waiting quiet.",
    6: "The Dao and the lightning are the same road. You walk it with the whole sky leaning in to see.",
    7: "Heaven opens a door because it has been waiting for you to knock. It has waited a long time.",
  },
  late: {
    1: "The qi comes in and nothing else happens. You wait for more, and it does not come yet. That, you were told, is the sign.",
    2: "The foundation settles a stone at a time. You are behind the others, and for once it does not feel like a loss.",
    3: "The roots that stayed shut for years open at once. The core forms in a single breath, and the speed of it frightens you.",
    4: "The figure behind your eyes has sat with its hands folded for ten years. It stands up.",
    5: "You sever the cords with the ease of someone who has had a long time to study the knots.",
    6: "You are not behind any more. You are not sure you ever were.",
    7: "You open like a night flower at the end of a very long day. The sky is the sun, and it is yours.",
  },
};

const DAO_ARRIVAL: Record<Dao, Record<number, string>> = {
  none: {},
  alchemy: {
    2: "Your foundation steadies the way a good pill does, from the inside out. You could name its ingredients.",
    4: "Your soul keeps a small furnace of its own now, and it is already refining something.",
    6: "You cease to be the pill and become the fire under it.",
  },
  forging: {
    2: "Your foundation is a good anvil: flat, hard and quiet until it is struck.",
    4: "The soul is a hammer that remembers every blow it has taken, and counts them as lessons.",
    6: "You are no longer the smith. You are the metal, and the Dao is the hand that shapes it.",
  },
  talisman: {
    2: "A line of script draws itself along your foundation, and holds. A good ward is a promise that needs no witness.",
    4: "Your soul is written over in a script you never learned, and you can read all of it.",
    6: "The last stroke of the Dao is a character you have not written yet, and your brush is steady.",
  },
  formation: {
    2: "Your foundation lays itself out like the first ring of an array, and the lines between its points hold.",
    4: "The soul is a formation of one: closed, self-feeding, and aware of every point it touches.",
    6: "You see the pattern under the world, and you are one of its points.",
  },
  beast: {
    2: "Something in you, hunter or prey, steadies. Every animal on the mountain turns its head.",
    4: "Your soul has a second shadow, and it belongs to whatever follows you.",
    6: "The Dao has a warm, feral smell, and you know it from a long way back.",
  },
  sword: {
    2: "Your foundation takes the shape of a scabbard, and the qi in it is what rests there.",
    4: "Your soul carries a sword it has never drawn, and everyone near you knows it.",
    6: "There is only one stroke, and the Dao is the space after it.",
  },
  healing: {
    2: "Your foundation mends itself as you lay it, and you feel the pulse of every living thing in the courtyard.",
    4: "The soul is a quiet hand laid on a hot forehead. It knows how long to stay.",
    6: "You are the wound and the mending both, and you have forgiven the difference.",
  },
  fate: {
    2: "A thread you cannot see goes taut, and you know which of the tomorrows it is tied to.",
    4: "The soul has a second pair of eyes, turned toward what has not happened. They are not frightened.",
    6: "You read the Dao as a page already written, and find your own hand in the margin.",
  },
};

export function talentArrival(talent: Talent, realm: number): string | undefined {
  return TALENT_ARRIVAL[talent]?.[realm];
}

export function daoArrival(dao: Dao, realm: number): string | undefined {
  return DAO_ARRIVAL[dao]?.[realm];
}

export const ALL_TALENT_ARRIVALS = TALENT_ARRIVAL;
export const ALL_DAO_ARRIVALS = DAO_ARRIVAL;
