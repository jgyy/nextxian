import type { Choice, Condition, Scene } from "@/engine/types";

/**
 * Five short scenes where the story stops to count. Before the barge leaves the mountain, and before each later book, the company
 * takes stock: what the purse holds, what the pack carries, and whether the hero has come as far as the road expects. The Elder says
 * so aloud. A hero can spend here on what the road ahead needs, or sit the night and cultivate, and the same numbers they carry out
 * of here are the ones the road will read.
 */
interface Reckoning {
  id: string;
  /** The gate the reckoning stands in front of. Every way into the gate comes through here instead. */
  gate: string;
  title: string;
  paragraphs: [string, string];
  /** The realm the road expects of a diligent hero. */
  expect: number;
  /** What the Elder says of a hero below, at and above that realm. */
  pace: { behind: string; at: string; ahead: string };
  /** What the Elder says of a hero who is Unfed, and of one who is not but is quick. */
  keep: { unfed: string; quick: string };
  /** What can be bought here, in two goods. */
  buy: [{ label: string; price: number }, { label: string; price: number }];
  hand: string;
}

const RECKONINGS: Reckoning[] = [
  {
    id: "reckoning_departure",
    gate: "departure_dawn",
    title: "The Almoner’s Last Count",
    paragraphs: [
      "Before the barge, a clerk of the almonry catches you at the foot of the river steps with a ledger under his arm. The sect’s stipend ends here, he says, and he reads the sum aloud as if it were a verdict: what you have been paid, and what you will not be.",
      "He closes the ledger. From the barge on you pay your own keep. A mortal or a Qi Condenser eats rice. Anyone above that eats spirit stones, and the river extends no credit.",
    ],
    expect: 2,
    pace: {
      behind: "The Elder reads your line in the ledger and says that a pupil who leaves the mountain below Foundation Establishment is a pupil who will be asked for more than they have. She says it kindly, and it is no kinder for that.",
      at: "The Elder reads your line and nods. You leave the mountain at the realm the river expects, and she says it as one states the weather.",
      ahead: "The Elder reads your line twice. You leave the mountain above the realm the river expects, and she says that early arrivals are generally asked what they are waiting for.",
    },
    keep: {
      unfed: "The clerk looks at your purse and then politely at the river. The stipend ends today, and you will be Unfed within a few paydays unless you earn.",
      quick: "The clerk notes that you cultivate faster than the stipend assumes. It is the only compliment the almonry has ever paid anyone.",
    },
    buy: [
      { label: "Buy dried rice and tea for the road", price: 4 },
      { label: "Buy a second pair of straw sandals and a rain-cape", price: 6 },
    ],
    hand: "Leave a share of your purse in the almoner’s tin, for the next pupil who goes down without one",
  },
  {
    id: "reckoning_coast",
    gate: "b3_gate",
    title: "The Accounts at the River Mouth",
    paragraphs: [
      "Before the salt, there is a last stretch of river where the barge ties up for the night. The Elder spreads her accounts on the deck beneath a lamp: what the company has spent, what it holds, and how far the road ahead expects each of you to have come.",
      "The accounts are plain and the lamp is poor. She reads out the lines for you without looking up, as she once read out sentences.",
    ],
    expect: 3,
    pace: {
      behind: "She taps your line. You are a realm behind what the Salt Coast expects. “Cultivation does not wait for the unprepared,” she says, “and the sea waits for them least of all.”",
      at: "She taps your line and nods. You stand where the Salt Coast expects you, no nearer and no further.",
      ahead: "She taps your line and raises her eyes. You are ahead of the road. “Be careful with that,” she says. “Those who arrive early are the first to be asked why.”",
    },
    keep: {
      unfed: "She turns to the page that holds your purse and says nothing, and the silence is a diagnosis. You are Unfed, and the quays price everything in stones.",
      quick: "She pencils a mark beside your name. You cultivate faster than the pace she set, and she wants to know whether it will last.",
    },
    buy: [
      { label: "Buy salt-fish and a second blanket from the barge’s cook", price: 6 },
      { label: "Pay the barge-master for a berth on the dry side of the hold", price: 10 },
    ],
    hand: "Put a share of your purse into the company’s strongbox, for the next landing where the Elder has to pay",
  },
  {
    id: "reckoning_grass",
    gate: "b4_gate",
    title: "The Last Inn Before the Grass",
    paragraphs: [
      "The road leaves the coast at an inn with a stable and a counting-board, and the Elder sits at the board with her sleeves rolled. Nine hundred miles of grass lie ahead, and there will be nothing to buy on them that the clans do not set the price of.",
      "She lays out the company’s coin in rows and asks, without raising her voice, who among you has been keeping count.",
    ],
    expect: 4,
    pace: {
      behind: "She taps your line. “The Steppe expects a Nascent Soul and you are a realm short of it. The grass will not mock you. The grass does not mock. It remembers.”",
      at: "She taps your line and nods. You are what the grass expects, and no more. She finds that restful.",
      ahead: "She taps your line, then your realm. “The Listeners will hear this before you speak. They are not easily impressed, and never fooled.”",
    },
    keep: {
      unfed: "She does not turn to your purse. She does not need to. “You are Unfed,” she says. “There are no shops on the grass. Buy what you need here or go without.”",
      quick: "She notes your speed. “A quick cultivator on a slow road arrives alone,” she says. “Mind that the company can keep up.”",
    },
    buy: [
      { label: "Buy a felt coat and a pair of boots from the innkeeper", price: 10 },
      { label: "Buy a sack of dried curd and a skin of mare’s milk", price: 8 },
    ],
    hand: "Pay the stable-boy’s wages for the company’s ponies out of your own purse",
  },
  {
    id: "reckoning_glass",
    gate: "b5_gate",
    title: "The Counting-House at the Edge of the Grass",
    paragraphs: [
      "Where the grass ends, a counting-house stands on the last green ground, its roof weighted with stones against the wind. The Elder takes a desk by the window, from which the Glass Sea can be seen in a single hard line, and opens the accounts.",
      "Beyond the window nothing is sold. Everything on the Sea is cut from the glass or carried across it, and the carrying has a price.",
    ],
    expect: 5,
    pace: {
      behind: "She taps your line. “You come to the Glass Sea below the realm it asks. The glass amplifies what you are, and a thin qi rings thin.”",
      at: "She taps your line and nods. You are what the Sea asks. “Do not mistake that for being enough,” she says.",
      ahead: "She taps your line, and the pencil shakes a little. “At the edge of the Dao, a realm over what the shore expects. The Stair will feel you cross it.”",
    },
    keep: {
      unfed: "She says nothing about your purse, and the lamp seems to dim. You are Unfed, and the Sea makes nothing: everything you will need must be bought here.",
      quick: "She notes your speed in the margin. “The Sea measures what you are,” she says, “not how fast you got there.”",
    },
    buy: [
      { label: "Buy a pair of glare-glasses and a length of shade-cloth", price: 12 },
      { label: "Buy a skiff-wright’s spare runner and a coil of rope", price: 14 },
    ],
    hand: "Pay for the company’s share of the skiff-hire out of your own purse",
  },
  {
    id: "reckoning_home",
    gate: "b6_gate",
    title: "The Reckoning at the Foot of the Road",
    paragraphs: [
      "The last night before the village, the company halts at a milestone and the Elder takes out the accounts for the last time. It is the shortest ledger she has kept. There is almost nothing in it to pay for, and everything in it to answer for.",
      "She does not read the lines aloud. She hands the book to each of you in turn, and watches you read your own.",
    ],
    expect: 6,
    pace: {
      behind: "She takes the book back and taps your line. “You come home a realm short of the road you are about to walk. The mountain has not changed. It will notice that you have.”",
      at: "She takes the book back and taps your line, and nods. You come home at the realm the road asks, and she says no more.",
      ahead: "She takes the book back, taps your line, and for a moment cannot speak. “You come home above the realm,” she says at last. “No sect has had one in two hundred years.”",
    },
    keep: {
      unfed: "She looks at your purse and then at you. “You come home Unfed. I have never been so ashamed of a pupil’s poverty, nor so proud of it.”",
      quick: "She notes your speed. “You cultivate faster than I did at your age,” she says. “It would be unkind to say I envy you.”",
    },
    buy: [
      { label: "Buy tea and a warm blanket from the milestone’s stall", price: 10 },
      { label: "Buy a lantern and oil for the last climb", price: 8 },
    ],
    hand: "Leave a share of your purse in the tin by the milestone, for travellers who come home with less than you",
  },
];

const behind = (e: number): Condition[] => [{ kind: "realm", max: e - 1 }];
const at = (e: number): Condition[] => [{ kind: "realm", min: e, max: e }];
const ahead = (e: number): Condition[] => [{ kind: "realm", min: e + 1 }];

export const reckoningScenes: Scene[] = RECKONINGS.map((r) => {
  const choices: Choice[] = [
    {
      id: "count",
      label: "Go through the accounts line by line with the Elder.",
      tone: "inquiry",
      next: r.gate,
      effects: [{ kind: "addStat", stat: "insight", amount: 1 }],
    },
    {
      id: "sit_night",
      label: "Spend the night in meditation, and let the numbers settle.",
      tone: "quiet",
      next: r.gate,
      effects: [{ kind: "addCultivation", amount: 4 + r.expect }],
    },
    ...r.buy.map(
      (good, i): Choice => ({
        id: `buy_${i}`,
        label: `${good.label} (${good.price} spirit stones).`,
        tone: i === 0 ? "truth" : "mercy",
        next: r.gate,
        requires: [{ kind: "wealth", min: good.price }],
        lockedHint: `You need ${good.price} spirit stones.`,
        effects: [{ kind: "addWealth", amount: -good.price }, { kind: "addStat", stat: "qi", amount: 6 + 2 * i }],
      }),
    ),
    {
      id: "share",
      label: `${r.hand} (10 spirit stones).`,
      tone: "mercy",
      next: r.gate,
      requires: [{ kind: "wealth", min: 10 }],
      lockedHint: "You need 10 spirit stones.",
      effects: [{ kind: "addWealth", amount: -10 }, { kind: "addStat", stat: "karma", amount: 3 }, { kind: "setFlag", flag: `${r.id}_shared` }],
    },
    {
      id: "say_nothing",
      label: "Say nothing, and go on.",
      tone: "quiet",
      next: r.gate,
    },
  ];
  return {
    id: r.id,
    title: r.title,
    paragraphs: [...r.paragraphs],
    extras: [
      { when: behind(r.expect), paragraphs: [r.pace.behind], group: "pace" },
      { when: at(r.expect), paragraphs: [r.pace.at], group: "pace" },
      { when: ahead(r.expect), paragraphs: [r.pace.ahead], group: "pace" },
      { when: [{ kind: "unfed" }], paragraphs: [r.keep.unfed], group: "keep" },
      { when: [{ kind: "unfed", is: false }, { kind: "speed", min: 115 }], paragraphs: [r.keep.quick], group: "keep" },
    ],
    choices,
  };
});

/** Sends every way into a gate through its reckoning first, so the company counts before it crosses. */
export function routeThroughReckonings<S extends Scene>(scenes: S[]): S[] {
  const gates = new Map(RECKONINGS.map((r) => [r.gate, r.id]));
  return scenes.map((scene) => {
    if (reckoningScenes.some((r) => r.id === scene.id)) return scene;
    if (!scene.choices.some((c) => gates.has(c.next))) return scene;
    return { ...scene, choices: scene.choices.map((c) => (gates.has(c.next) ? { ...c, next: gates.get(c.next)! } : c)) };
  });
}
