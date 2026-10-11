import { REALMS } from "@/engine/cultivation";
import type { AssetDef, Choice, Effect, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { bandBounds } from "../roads2/hero-lex";
import { buildReport3, buildRoad3, doneFlag3, holdingAsset, pricesFor, reportedFlag3, wareItem, type RoadSpec3 } from "./build";
import { WORK_DAY } from "./lexicon";
import { roadsStalls } from "./specs-1";

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
];

const SPECS3: RoadSpec3[] = [...roadsStalls];
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
      ...(["far", "below", "at", "above"] as const).map((band) => ({
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
