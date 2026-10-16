export interface Realm {
  name: string;
  /** Cultivation points needed to enter this realm. */
  threshold: number;
  /** What the player feels on arrival. */
  arrival: string;
  /** How the Elder refers to the player while they stand here. */
  styled: string;
}

/** Layers in every realm. A realm is ten minor realms, and the tenth opens onto the next major one. */
export const STAGES_PER_REALM = 10;

/** The cultivation ladder, lowest first: ten major realms, each of ten layers. Everyone starts as a Mortal on the First Layer. */
export const REALMS: readonly Realm[] = [
  {
    name: "Mortal",
    threshold: 0,
    arrival: "You are a mortal. The qi of heaven and earth passes through you like wind through a screen.",
    styled: "mortal",
  },
  {
    name: "Qi Condensation",
    threshold: 15,
    arrival: "A thread of qi finds your dantian and stays. The first breath of true cultivation is cold, bright and a little frightening.",
    styled: "Qi Condenser",
  },
  {
    name: "Foundation Establishment",
    threshold: 120,
    arrival: "The scattered qi settles into a foundation as level as a temple floor. Your body no longer feels borrowed.",
    styled: "Foundation Builder",
  },
  {
    name: "Core Formation",
    threshold: 400,
    arrival: "Your qi folds in on itself and hardens into a golden core. For a moment you can hear it turning, slow as a millstone.",
    styled: "Core Cultivator",
  },
  {
    name: "Nascent Soul",
    threshold: 850,
    arrival: "A small, clear figure sits behind your eyes and looks back at you. It is you, and it is not afraid.",
    styled: "Nascent Soul master",
  },
  {
    name: "Spirit Severing",
    threshold: 1300,
    arrival: "You cut the last cords that tie your spirit to the dust of old names. The world is quieter, and wider.",
    styled: "Spirit Severing sage",
  },
  {
    name: "Dao Seeking",
    threshold: 1850,
    arrival: "The Dao stops being a word and becomes a direction. You can feel which way is toward it.",
    styled: "Dao Seeker",
  },
  {
    name: "Ascendant",
    threshold: 2350,
    arrival: "The sky above you is no longer a ceiling. It is a door, and it is open.",
    styled: "Ascendant",
  },
  {
    name: "True Immortal",
    threshold: 2950,
    arrival: "You step through the door that was open, and the other side is the same road, only longer. The sky is no longer above you. It walks beside you, a little faster, like a friend.",
    styled: "True Immortal",
  },
  {
    name: "Dao Sovereign",
    threshold: 3700,
    arrival: "The Dao stops being a direction and becomes a place you stand, and you find you have always been standing in it. There is no higher rung, and for the first time that does not feel like a lack.",
    styled: "Dao Sovereign",
  },
];

/**
 * The highest realm the older road families (the Realm, Fortune, Dao, Witness, Cultivation, Crossing, Age, Custom, Rank, Tribulation and Wardrobe Roads) write for. Their
 * waysides run from Mortal to Ascendant, and a True Immortal or a Dao Sovereign who walks into one is met as an Ascendant is: at the top of the road.
 */
export const ROAD_TOP = 7;

/** Points above the last realm’s threshold that the last realm’s ten layers are spread across. */
export const TOP_SPAN = 900;
