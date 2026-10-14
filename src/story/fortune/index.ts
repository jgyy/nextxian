import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Effect, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { bandBounds, bandHeld } from "../roads2/hero-lex";
import { buildReport3, buildRoad3, doneFlag3, holdingAsset, pricesFor, reportedFlag3, wareItem, type RoadSpec3 } from "./build";
import { WORK_DAY } from "./lexicon";
import { roadsStalls } from "./specs-1";
import { roadsMerit } from "./specs-2";
import { roadsDeparture } from "./specs-3";
import { roadsCoast } from "./specs-4";
import { roadsHome } from "./specs-5";

export interface Wayside3 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the roads here ask. A road is for a cultivator of that realm; below it, the roads cost more; above it, they come easily. */
  realm: number;
  /** Book One waysides use the mountain’s wording, the later ones the road’s. */
  flavour: "mountain" | "road";
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/** The ten Fortune Roads, in the order of the story. A diligent hero reaches each at the realm it asks. */
export const WAYSIDES3: Wayside3[] = [
  {
    id: "wayside_fortune_stalls",
    title: "Fortune Roads: The Gate-Stair Stalls",
    paragraphs: [
      "Where the gate stair meets the rock, a dozen stalls lean against the cliff, selling lamp-oil, wards, bitter roots and mended sandals to a sect that pretends it needs none of them. The Elder’s orders do not forbid you to shop.",
      "Four of the stalls have a keeper watching you. Each wants something from a cultivator, and each would sooner be paid than thanked.",
    ],
    back: "You climb back up the stair with your purse a different weight than when you came down. The gate disciple notes the change in your step, and does not mention it.",
    origin: "mission",
    label: "Go down to the stalls at the foot of the gate stair before you take the abyss path.",
    realm: 1,
    flavour: "mountain",
    remark: "Four stalls at the foot of the stair, and you have dealt with every one. I have lived on this mountain twelve years and never asked what a lamp costs. I begin to see that I should have.",
  },
  {
    id: "wayside_fortune_almonry",
    title: "Fortune Roads: The Almonry and Pawn Row",
    paragraphs: [
      "Under the east wing of the Law Hall the sect keeps its accounts, and below the accounts runs a lane of shops that buy what the sect finds uncomfortable to own. A window pays the stipends. A row of counters pays for the rest.",
      "Four of those doors will open to a hero who has come back from the abyss with something in their sleeve. Each would like to know what it is, and what you want for it.",
    ],
    back: "You come back up to the Law Hall by the east stair. The ledger has not moved on the Elder’s knee, and the lamps are as low as you left them.",
    origin: "return_hall",
    label: "Ask leave to go down to the almonry and Pawn Row before you answer for the abyss.",
    realm: 1,
    flavour: "mountain",
    remark: "You have been through every window on the east stair. I did not know that the almonry kept a second book until a clerk apologised to me for it. I thank you for making her.",
  },
  {
    id: "wayside_fortune_merit",
    title: "Fortune Roads: The Merit Exchange",
    paragraphs: [
      "Past the memorial, in the colonnade below the sutra door, the sect holds a market it does not admit to. Merit is bought and sold under the arches: incense, caves, copies, pills, each priced in what the buyer can least afford to lose.",
      "Four counters keep their lamps lit for a cultivator who has risen a little. Each asks what you are worth, and none of them says so aloud.",
    ],
    back: "You come back to the foot of the inner stair with the colonnade’s murmur behind you. The sutra door is where you left it, red in the cliff, and the mist at its threshold has not moved.",
    origin: "archive_dawn_2",
    label: "Turn aside at the memorial colonnade, where merit is bought and sold, before you climb to the sutra door.",
    realm: 2,
    flavour: "mountain",
    remark: "Four counters under the colonnade, and you have walked every one. I walk past them each morning on my way to the Hall and have never once stopped. I begin to think that was a decision, and not a good one.",
  },
  {
    id: "wayside_fortune_steps",
    title: "Fortune Roads: The Bell-Step Night Market",
    paragraphs: [
      "When the last echo of the bell dies, the steps below the tower begin to glow. Lamps are hung on poles, mats are unrolled, and the sect’s disciples come down in twos and threes with their sleeves held tight.",
      "Four of the stalls have been waiting for you. Each trades in a currency the Hall does not stock, and each can tell what your cultivation is worth to them.",
    ],
    back: "You climb back up through the courtyard with the market’s lamps dying behind you. The Law Hall is dark, and the mist has thickened, and nobody has noticed you were gone.",
    origin: "jade_eye_bell_2",
    label: "Slip down the bell steps to the night market that grows when the bell stops.",
    realm: 2,
    flavour: "mountain",
    remark: "The bell steps at night. I have forbidden the market eleven times and attended it once, in disguise, thirty years ago. You have been to all four stalls. I will not ask what you bought.",
  },
  {
    id: "wayside_fortune_leaving",
    title: "Fortune Roads: The Departure Sale",
    paragraphs: [
      "On the last night before a party leaves the mountain, the lower court becomes a sale. Disciples sell what they cannot carry, wardens sell what they should not own, and everything is cheaper than it will be tomorrow.",
      "Four of the sellers have set their lamps toward you. Each has something a traveller will need, and each knows that you will not pass this way again.",
    ],
    back: "You climb out of the lower court with your arms fuller than you came. The Law Hall lamps are going out in order, east wing first, and the wind still smells of rain.",
    origin: "hub_departure",
    label: "Go down to the departure sale in the lower court, where the mountain sells what it cannot carry.",
    realm: 2,
    flavour: "mountain",
    remark: "You have done your shopping, and well. I notice that you have bought nothing for the Elder. I shall not take it amiss. I have not packed for myself either, and for the same reason.",
  },
  {
    id: "wayside_fortune_clerks",
    title: "Fortune Roads: The Clerks’ Bazaar",
    paragraphs: [
      "Outside the Assembly’s dome the clerks of Qinglian Ford have set up a bazaar of their own. Quills are cut, fees are brokered, seals are warmed, and everything on sale was once someone else’s favour.",
      "Four of the stalls are quieter than the rest. Each trades in what a Core cultivator can do for them, and each has already priced it.",
    ],
    back: "You come back through the Assembly’s crowd with the bazaar’s noise still in your ears. The witness bench is where you left it, and the candle on the table has burned a finger lower.",
    origin: "hub_asm_witnesses",
    label: "Leave the Witness Bench for the clerks’ bazaar under the dome, where favours are priced.",
    realm: 3,
    flavour: "road",
    remark: "The Concord’s clerks hold more of its power than its Censors, and they are cheaper to deal with. You have dealt with four. I should have thought to do so years ago.",
  },
  {
    id: "wayside_fortune_quays",
    title: "Fortune Roads: The Tidewall Quays",
    paragraphs: [
      "Before the boat is made fast the quays are already shouting. The brokers of the Salt Coast price a stranger by the cut of their sleeves and the smell of their qi, and none of them has ever lost money by guessing.",
      "Four of the stalls send a boy to the gangplank. Each has something the salt does not spoil, and each would like a cultivator’s coin.",
    ],
    back: "You come back to the boat with the quays’ gulls screaming over the mast. The salt has dried white on your sleeves, and the Elder is waiting at the rail with an expression you cannot read.",
    origin: "b3_gate",
    label: "Step onto the quays before the boat is made fast, where the brokers of the Salt Coast are already pricing you.",
    realm: 3,
    flavour: "road",
    remark: "The Salt Coast sells everything, and four of its brokers have sold something to you. I used to think commerce was a form of dishonesty. I am beginning to think it is a form of conversation.",
  },
  {
    id: "wayside_fortune_caravans",
    title: "Fortune Roads: The Caravan Ground",
    paragraphs: [
      "Where the coast road meets the grass a ground has been trampled flat, and caravans from nine clans camp there to trade before the long ride. Their tents are felt, their prices are fixed by custom, and their customs are older than coin.",
      "Four of the tents have been waiting for a cultivator. The Listeners cannot be lied to, and the traders have learned to price honesty.",
    ],
    back: "You ride back to the column across the trampled ground, and the traders’ fires burn low behind you. The grass has already begun to close over the tracks of the caravans.",
    origin: "b4_gate",
    label: "Turn aside at the caravan ground, where the clans of the grass trade before the long ride.",
    realm: 4,
    flavour: "road",
    remark: "You have traded in four tents and told the truth in every one. The Listeners will have noticed. They do not say so. They simply stop quoting you the price for outsiders.",
  },
  {
    id: "wayside_fortune_salvage",
    title: "Fortune Roads: The Glass-Shore Yards",
    paragraphs: [
      "At the edge of the Glass Sea the salvagers have raised their yards: a grinder’s tent, a mirror-cutter’s shed, a skiff-wright’s slip, a stall of broken plates. Nothing here is made. Everything is cut out of what the glass will give.",
      "Four yards have sent a runner to your pony. Each prices a cultivator’s qi against the glass, and each is waiting to see what you can pay in.",
    ],
    back: "You ride back from the yards with the sea’s long glare in your eyes. The skiff track is a grey thread across the plate, and your pack is a different weight than when you left.",
    origin: "b5_gate",
    label: "Ride down to the salvage yards at the edge of the glass, before you set out across the plates.",
    realm: 5,
    flavour: "road",
    remark: "The Glass Sea does not forgive a bad bargain. You have made four good ones. I shall remember that when I am next tempted to say that you have no head for money.",
  },
  {
    id: "wayside_fortune_fair",
    title: "Fortune Roads: The Fair at the Foot",
    paragraphs: [
      "At the foot of the mountain, where the road home begins, the villages hold a fair. They have held it for a hundred years on the strength of the sect’s custom, and this year they have nothing to sell the sect but its own past.",
      "Four of the stalls are open late. Each deals in what a returning cultivator might want to carry up the mountain, and each is a little frightened of the answer.",
    ],
    back: "You come back to the tea-stall as the fair’s lamps are doused one by one. The mountain stands above you, dark and enormous, and the Elder has not moved from the step.",
    origin: "b6_gate",
    label: "Go down to the fair at the foot of the mountain, before the last climb home.",
    realm: 6,
    flavour: "road",
    remark: "The fair at the foot, and you have bought from all four stalls. I remember when you had a handful of stones and a hole in your sleeve. I find I am proud, and I shall not say so a second time.",
  },
];

const SPECS3: RoadSpec3[] = [...roadsStalls, ...roadsMerit, ...roadsDeparture, ...roadsCoast, ...roadsHome];
const PER_WAYSIDE = 4;
export const BACK3 = (origin: string) => `back3_${origin}`;

/** The wayside scenes that have all four of their roads written. */
const built = WAYSIDES3.filter((_, n) => SPECS3.length >= (n + 1) * PER_WAYSIDE);

const HUB_REALM: Record<"far" | "below" | "at" | "above", string> = {
  far: "The stalls and counters here are priced for a body that can use what they sell. Yours cannot yet, and the keepers see it, and name their prices to match.",
  below: "You are a realm short of what these keepers are used to. They will deal with you, and charge you for the difference.",
  at: "These counters are cut to your measure. Nobody here will treat you as a stranger with a purse, and nobody will undercharge you either.",
  above: "You have outgrown the trade here. The keepers bow, and the prices drop a little, and you wonder what they are hoping to be paid in.",
};

function waysideScene3(w: Wayside3, n: number, roads: { spec: RoadSpec3; index: number }[]): Scene {
  const wage = pricesFor(w.realm, 0, "tool").wage;
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: doneFlag3(n + 1, spec.id), is: false }],
    lockedHint: "You have already dealt here.",
  }));
  const workFlag = `fw${n + 1}_worked`;
  choices.push({
    id: "day_hire",
    label: fill(WORK_DAY[n % WORK_DAY.length], { wage: String(wage) }),
    tone: "quiet",
    next: w.id,
    requires: [{ kind: "flag", flag: workFlag, is: false }],
    lockedHint: "You have been hired and paid here once today.",
    effects: [{ kind: "addWealth", amount: wage }, { kind: "setFlag", flag: workFlag }] satisfies Effect[],
  });
  choices.push({ id: "back_to_road", label: "Leave the stalls and go back to where you left the road.", tone: "quiet", next: BACK3(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: [
      ...roads.flatMap(({ spec }) => {
        const slots = { place: spec.place, kname: spec.kname };
        return [
          { when: [{ kind: "flag" as const, flag: reportedFlag3(spec.id) }], paragraphs: [fill("Elder Su has heard of {place}.", slots)], group: spec.id },
          {
            when: [{ kind: "flag" as const, flag: doneFlag3(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag3(spec.id), is: false }],
            paragraphs: [fill("Elder Su has heard nothing of {place}.", slots)],
            group: spec.id,
          },
        ];
      }),
      ...(["far", "below", "at", "above"] as const).filter((band) => bandHeld(band, w.realm)).map((band) => ({
        when: [{ kind: "realm" as const, ...bandBounds(band, w.realm) }],
        paragraphs: [HUB_REALM[band]],
        group: "realm",
      })),
    ],
    interjections: [{ when: [{ kind: "count", prefix: `${"fr_done_"}w${n + 1}_`, min: PER_WAYSIDE }], line: w.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack3(w: Wayside3, origin: Scene): Scene {
  return {
    id: BACK3(w.origin),
    title: `Back from ${w.title.replace("Fortune Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the 100 scenes of its four roads. */
export const fortuneGroups: { name: string; wayside: Wayside3; scenes: Scene[] }[] = built.map((w, n) => {
  const roads = SPECS3.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, i) => ({ spec, index: n * PER_WAYSIDE + i, slot: i }));
  const scenes = [
    waysideScene3(w, n, roads),
    ...roads.flatMap(({ spec, index, slot }) => buildRoad3(spec, { index, wayside: n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour })),
  ];
  return { name: w.title, wayside: w, scenes };
});

const withContext = built.flatMap((w, n) =>
  SPECS3.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot) => ({
    spec,
    ctx: { index: n * PER_WAYSIDE + slot, wayside: n + 1, waysideId: w.id, slot, realm: w.realm, flavour: w.flavour } as const,
  })),
);

/** The Elder’s reports on every Fortune Road. */
export const fortuneScenarios: Record<string, NpcScenario> = Object.fromEntries(
  withContext.map(({ spec, ctx }) => {
    const scenario = buildReport3(spec, ctx);
    return [scenario.id, scenario] as const;
  }),
);

/** The goods and holdings of every Fortune Road. */
export const fortuneItems: Record<string, ItemDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [wareItem(spec, ctx).id, wareItem(spec, ctx)]));
export const fortuneAssets: Record<string, AssetDef> = Object.fromEntries(withContext.map(({ spec, ctx }) => [holdingAsset(spec, ctx).id, holdingAsset(spec, ctx)]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const fortuneEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "quiet", next: w.id } satisfies Choice] as const),
);

export const fortuneRoadRealms = WAYSIDES3.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
export { SPECS3 };
