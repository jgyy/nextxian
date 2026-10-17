import { DAOS, GENDERS, type Gender } from "@/engine/hero";
import { REALMS } from "@/engine/cultivation";
import type { Choice, ChoiceTone, Condition, Effect, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, TONE_EFFECTS, type Extra } from "../roads2/build";
import {
  AFTERMATH,
  APPROACH_LABELS,
  APPROACH_TONES,
  BANDS,
  bandBounds,
  BEATEN_OPEN,
  CRISIS,
  DRIVEN_OPEN,
  EXCHANGE,
  FINISH,
  KIND_WORDS,
  LABELS,
  LEAVE_LABELS,
  LORE_LINE,
  OPENING,
  SIGHTING,
  SIZING,
  STROKE,
  STROKE_LEAD,
  TURN,
  WON_CHOICES,
  WON_OPEN,
  type Band,
} from "./lexicon";
import { CRAFTS, DAO_BANE, DAO_CRISIS, DAO_MOVE, DAO_SEES, DAO_SPOIL, DAO_STROKE, DAO_TURN, REPORT_DAO } from "./lexicon-dao";
import { GENDER_CRISIS, GENDER_MOVE, REPORT_BY_GENDER, REPORT_GENDER, TELLING } from "./lexicon-gender";
import { BEATEN_LABELS, BEATEN_MEMORY, DRIVEN_LABELS, REPORT_LINES, REPORT_MEMORY, RETURN_APPROACH, RETURN_CHOICES, RETURN_END, RETURN_OPEN, SOFT_HINT } from "./lexicon-end";
import type { FoeSpec } from "./spec";

export interface HuntContext {
  /** Position among all forty hunts, 0-based. */
  index: number;
  /** The wayside’s number, 1 to 10. Part of the finished flag, so each wayside counts its own hunts. */
  wayside: number;
  waysideId: string;
  /** The realm of the hub. The foe stands `offset` layers above the first of it. */
  realm: number;
}

export const HUNT_DONE = "hu_done_";
export const doneFlag14 = (wayside: number, id: string) => `${HUNT_DONE}w${wayside}_${id}`;
export const donePrefix14 = (wayside: number) => `${HUNT_DONE}w${wayside}_`;
export const reportId14 = (id: string) => `REPORT_HUNT_${id.toUpperCase()}`;
export const spoilId = (id: string) => `${id}_spoil`;
export const heardFlag = (id: string) => `${id}_heard`;
const flag = (id: string, name: string) => `${id}_${name}`;
export const holdFlag = (id: string, n: number) => flag(id, `hold${n}`);

export const STAGE_TITLE = ["The Opening", "The First Exchange", "The Turn", "The Crisis", "The Stroke"];

/** The foe’s level on the full ladder. */
export const foeLevel = (spec: FoeSpec, ctx: Pick<HuntContext, "realm">) => ctx.realm * 10 + spec.offset;

/** How the hero stands against this foe, with the footholds won so far counted. */
export const edgeCond = (spec: FoeSpec, ctx: Pick<HuntContext, "realm">, min?: number, max?: number): Condition => ({
  kind: "edge",
  foe: foeLevel(spec, ctx),
  weak: spec.weak,
  bane: spec.bane,
  boost: [0, 1, 2].map((n) => holdFlag(spec.id, n)),
  ...(min !== undefined ? { min } : {}),
  ...(max !== undefined ? { max } : {}),
});

const edgeBand = (spec: FoeSpec, ctx: Pick<HuntContext, "realm">, band: Band): Condition => {
  const { min, max } = bandBounds(band);
  return edgeCond(spec, ctx, min, max);
};

const heroIs = (field: "gender" | "dao", is: string): Condition => ({ kind: "hero", field, is: [is] });
const has = (id: string, name: string): Condition => ({ kind: "flag", flag: flag(id, name) });
const set = (id: string, name: string): Effect => ({ kind: "setFlag", flag: flag(id, name) });

export const slotsOf = (spec: FoeSpec): Record<string, string> => ({
  name: spec.name,
  place: spec.place,
  omen: spec.omen,
  tell: spec.tell,
  strike: spec.strike,
  wound: spec.wound,
  hide: spec.hide,
  spoil: `the ${spec.spoil.name.toLowerCase()}`,
  weak: spec.weak,
  element: spec.element,
  lore: spec.lore,
  ...KIND_WORDS[spec.kind],
});

/** Four distinct tones for a scene’s choices, the way’s own first and the foe’s soft tone always among them. */
function tonesFor(mode: ChoiceTone, stage: number, approach: number, soft: ChoiceTone): ChoiceTone[] {
  const ring: ChoiceTone[] = ["inquiry", "mercy", "force", "deceit", "quiet", "truth"];
  const start = ring.indexOf(mode);
  const out: ChoiceTone[] = [mode];
  for (let i = 1; out.length < 4 && i <= ring.length; i++) {
    const tone = ring[(start + i + stage + approach) % ring.length];
    if (!out.includes(tone)) out.push(tone);
  }
  if (!out.includes(soft)) out[3] = soft;
  return out;
}

const fillAll = (items: string[], slots: Record<string, string>, seed: number) => fill(pick(items, seed), slots);

/** Builds the 25 scenes of one hunt: the sighting, four ways of five scenes, three endings and the way back. */
export function buildHunt(spec: FoeSpec, ctx: HuntContext): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const seed = ctx.index;
  const own = (suffix: string) => `${id}_${suffix}`;
  const slots = slotsOf(spec);
  const title = (stage: string) => `${spec.title}: ${stage}`;
  const scenes: Scene[] = [];
  const band = (b: Band) => edgeBand(spec, ctx, b);
  const bandGroup = (table: Record<Band, string[]>, n: number, group: string): Extra[] =>
    BANDS.map((b) => ({ when: [band(b)], paragraphs: [fillAll(table[b], slots, n)], group }));

  // ── The sighting. Every way of going at the foe sets `fought`, which the Elder’s general remarks read.
  scenes.push({
    id: own("sighting"),
    title: spec.title,
    paragraphs: [spec.sight, fillAll(SIGHTING, slots, seed)],
    extras: [
      ...GENDERS.map(({ value }): Extra => ({ when: [heroIs("gender", value)], paragraphs: [spec.sees[value]], group: "gender" })),
      ...DAOS.map(({ value }): Extra => ({
        when: [heroIs("dao", value)],
        paragraphs: [value !== "none" && value === spec.bane ? fill(DAO_BANE[value], slots) : fill(pick(DAO_SEES[value], seed), slots)],
        group: "dao",
      })),
      { when: [has(id, "beaten")], paragraphs: [fillAll(BEATEN_MEMORY, slots, seed)], group: "read" },
      ...bandGroup(SIZING, seed, "read"),
    ],
    choices: [
      ...APPROACH_TONES.map((tone, a): Choice => ({
        id: `approach_${a}`,
        label: fillAll(APPROACH_LABELS[a], slots, seed + a),
        tone,
        next: own(`a${a}s0`),
        effects: [set(id, `approach_${a}`), set(id, "fought")],
      })),
      { id: "leave", label: fillAll(LEAVE_LABELS, slots, seed), tone: "quiet", next: ctx.waysideId },
    ],
  });

  // ── Four ways of five scenes.
  for (let a = 0; a < 4; a++) {
    const mode = APPROACH_TONES[a];
    const stageChoices = (stage: number): Choice[] =>
      tonesFor(mode, stage, a, spec.soft).map((tone, c): Choice => ({
        id: tone,
        label: fillAll(LABELS[stage][tone], slots, seed + a + stage + c),
        tone,
        next: own(`a${a}s${stage + 1}`),
        effects: [...TONE_EFFECTS[tone], ...(stage < 3 && tone === spec.soft ? [{ kind: "setFlag", flag: holdFlag(id, stage) } as Effect] : [])],
      }));

    scenes.push({
      id: own(`a${a}s0`),
      title: title(STAGE_TITLE[0]),
      paragraphs: [fillAll(OPENING[a], slots, seed + a), ...(a === 2 ? [fillAll(SOFT_HINT[spec.soft], slots, seed)] : [])],
      choices: stageChoices(0),
    });

    scenes.push({
      id: own(`a${a}s1`),
      title: title(STAGE_TITLE[1]),
      paragraphs: [spec.beats[a * 2]],
      extras: bandGroup(EXCHANGE, seed + a, "band"),
      choices: stageChoices(1),
    });

    // The turn: a hero may work their craft, or take the stroke their gender allows, each hidden from everyone it is not for.
    const craftChoices = CRAFTS.map((dao): Choice => ({
      id: `craft_${dao}`,
      label: fill(DAO_MOVE[dao][a], slots),
      tone: mode,
      next: own(`a${a}s3`),
      requires: [heroIs("dao", dao)],
      hideLocked: true,
      effects: [{ kind: "addDao", amount: 4 }, set(id, "dao"), { kind: "setFlag", flag: holdFlag(id, 2) }],
    }));
    const genderChoices = GENDERS.map(({ value }): Choice => ({
      id: `gender_${value}`,
      label: fill(GENDER_MOVE[value][a], slots),
      tone: mode,
      next: own(`a${a}s3`),
      requires: [heroIs("gender", value)],
      hideLocked: true,
      effects: [set(id, "gendered"), { kind: "setFlag", flag: holdFlag(id, 2) }, { kind: "addStat", stat: "insight", amount: 1 }],
    }));
    scenes.push({
      id: own(`a${a}s2`),
      title: title(STAGE_TITLE[2]),
      paragraphs: [fillAll(TURN[a], slots, seed + a)],
      extras: DAOS.map(({ value }): Extra => ({ when: [heroIs("dao", value)], paragraphs: [DAO_TURN[value]], group: "dao" })),
      choices: [...stageChoices(2).map((c) => ({ ...c, next: own(`a${a}s3`) })), ...craftChoices, ...genderChoices],
    });

    // The crisis: the strokes the hero’s standing allows. A hero who is not the foe’s match is never shown a stroke that would be a lie.
    const finish = (name: "force" | "craft" | "ruse"): Effect[] => [
      set(id, `by_${name}`),
      { kind: "addCultivation", amount: 6 + 3 * R },
      ...(name === "craft" ? ([{ kind: "addDao", amount: 5 }, { kind: "addStat", stat: "insight", amount: 1 }] as Effect[]) : name === "ruse" ? TONE_EFFECTS.deceit : ([{ kind: "addDao", amount: 1 }, ...TONE_EFFECTS.force] as Effect[])),
    ];
    scenes.push({
      id: own(`a${a}s3`),
      title: title(STAGE_TITLE[3]),
      paragraphs: [spec.beats[a * 2 + 1]],
      extras: [
        ...bandGroup(CRISIS, seed + a + 1, "band"),
        ...GENDERS.map(({ value }): Extra => ({ when: [has(id, "gendered"), heroIs("gender", value)], paragraphs: [fillAll([...GENDER_CRISIS[value]], slots, seed + a)], group: "gender" })),
        ...CRAFTS.map((dao): Extra => ({ when: [has(id, "dao"), heroIs("dao", dao)], paragraphs: [fill(DAO_CRISIS[dao], slots)], group: "dao" })),
      ],
      choices: [
        {
          id: "finish",
          label: fillAll(FINISH.force, slots, seed + a),
          tone: "force",
          next: own(`a${a}s4`),
          requires: [edgeCond(spec, ctx, 3)],
          lockedHint: `You do not have the better of it by enough to end it by strength alone. A foothold won earlier in the fight, a higher rank in your Dao, or roots that answer ${spec.weak} would change that.`,
          effects: finish("force"),
        },
        {
          id: "craft",
          label: fillAll(FINISH.craft, slots, seed + a),
          tone: "inquiry",
          next: own(`a${a}s4`),
          requires: [{ kind: "hero", field: "dao", not: ["none"] }, edgeCond(spec, ctx, 1)],
          lockedHint: "Only a hero with a Dao of their own can end it with a craft, and only from a fair standing: they must have at least a little the better of it.",
          effects: finish("craft"),
        },
        {
          id: "ruse",
          label: fillAll(FINISH.ruse, slots, seed + a),
          tone: "deceit",
          next: own(`a${a}s4`),
          requires: [{ kind: "stat", stat: "insight", min: 20 }, edgeCond(spec, ctx, -1)],
          lockedHint: "A ruse needs a clear head (Insight 20) and a fight that is not yet lost.",
          effects: finish("ruse"),
        },
        {
          id: "press",
          label: fillAll(FINISH.press, slots, seed + a),
          tone: "force",
          next: own("beaten"),
          requires: [edgeCond(spec, ctx, undefined, 2)],
          hideLocked: true,
          effects: [set(id, "beaten"), { kind: "addStat", stat: "qi", amount: -10 }, { kind: "addStat", stat: "karma", amount: -1 }],
        },
        {
          id: "off",
          label: fillAll(FINISH.off, slots, seed + a),
          tone: "mercy",
          next: own("driven"),
          effects: [set(id, "driven"), { kind: "addCultivation", amount: 3 + 2 * R }, ...TONE_EFFECTS.mercy],
        },
      ],
    });

    // The stroke, and what it leaves.
    const closes: ChoiceTone[] = ["force", "mercy", "inquiry", a % 2 === 0 ? "quiet" : "truth"];
    scenes.push({
      id: own(`a${a}s4`),
      title: title(STAGE_TITLE[4]),
      paragraphs: [fillAll(STROKE_LEAD, slots, seed + a)],
      extras: [
        ...(["force", "ruse"] as const).map((way): Extra => ({ when: [has(id, `by_${way}`)], paragraphs: [fillAll(STROKE[way], slots, seed + a)], group: "stroke" })),
        ...CRAFTS.map((dao): Extra => ({ when: [has(id, "by_craft"), heroIs("dao", dao)], paragraphs: [fill(DAO_STROKE[dao], slots)], group: "stroke" })),
        { when: [], paragraphs: [fillAll(AFTERMATH, slots, seed + a)] },
      ],
      choices: closes.map((tone, c): Choice => ({
        id: tone,
        label: fillAll(LABELS[4][tone], slots, seed + a + c),
        tone,
        next: own("won"),
        effects: [...TONE_EFFECTS[tone], ...(tone === "inquiry" ? [set(id, "lore")] : [])],
      })),
    });
  }

  // ── The three endings.
  scenes.push({
    id: own("won"),
    title: title("The Spoil"),
    paragraphs: [fillAll(WON_OPEN, slots, seed)],
    extras: [
      ...GENDERS.map(({ value }): Extra => ({ when: [heroIs("gender", value)], paragraphs: [fillAll([...TELLING[value]], slots, seed)], group: "telling" })),
      ...DAOS.map(({ value }): Extra => ({ when: [heroIs("dao", value)], paragraphs: [fill(DAO_SPOIL[value], slots)], group: "spoil" })),
      { when: [has(id, "lore")], paragraphs: [fillAll(LORE_LINE, slots, seed)] },
    ],
    choices: [
      {
        id: "take",
        label: fillAll(WON_CHOICES.take, slots, seed),
        tone: "force",
        next: own("return"),
        effects: [{ kind: "giveItem", item: spoilId(id) }, set(id, "taken"), { kind: "addCultivation", amount: 4 + 2 * R }],
      },
      {
        id: "leave",
        label: fillAll(WON_CHOICES.leave, slots, seed),
        tone: "mercy",
        next: own("return"),
        effects: [set(id, "left"), { kind: "addStat", stat: "karma", amount: 3 }],
      },
      {
        id: "study",
        label: fillAll(WON_CHOICES.study, slots, seed),
        tone: "inquiry",
        next: own("return"),
        effects: [{ kind: "addStat", stat: "insight", amount: 2 }, { kind: "addDao", amount: 2 }],
      },
      { id: "tell", label: fillAll(WON_CHOICES.tell, slots, seed), tone: "truth", next: own("return"), effects: [...TONE_EFFECTS.truth] },
    ],
  });

  const labelled = (table: Record<string, string[]>, next: string, effects: Record<string, Effect[]>, tones: Record<string, ChoiceTone>, extra: number): Choice[] =>
    Object.keys(table).map((key, c): Choice => ({ id: key, label: fillAll(table[key], slots, seed + c + extra), tone: tones[key], next, effects: effects[key] ?? [] }));

  scenes.push({
    id: own("driven"),
    title: title("It Goes to Ground"),
    paragraphs: [fillAll(DRIVEN_OPEN, slots, seed)],
    choices: labelled(
      DRIVEN_LABELS,
      own("return"),
      { inquiry: [set(id, "lore"), ...TONE_EFFECTS.inquiry], mercy: TONE_EFFECTS.mercy, quiet: TONE_EFFECTS.quiet, truth: TONE_EFFECTS.truth },
      { inquiry: "inquiry", mercy: "mercy", quiet: "quiet", truth: "truth" },
      1,
    ),
  });

  scenes.push({
    id: own("beaten"),
    title: title("Thrown Down"),
    paragraphs: [fillAll(BEATEN_OPEN, slots, seed)],
    choices: labelled(
      BEATEN_LABELS,
      ctx.waysideId,
      { quiet: [{ kind: "addStat", stat: "qi", amount: 8 }], force: TONE_EFFECTS.force, inquiry: TONE_EFFECTS.inquiry, truth: TONE_EFFECTS.truth },
      { quiet: "quiet", force: "force", inquiry: "inquiry", truth: "truth" },
      2,
    ),
  });

  // ── The way back.
  const done: Effect = { kind: "setFlag", flag: doneFlag14(ctx.wayside, id) };
  const price = spoilValue(spec, ctx);
  scenes.push({
    id: own("return"),
    title: title("The Way Back"),
    paragraphs: [fillAll(RETURN_OPEN, slots, seed)],
    extras: [
      ...APPROACH_TONES.map((_, a): Extra => ({ when: [has(id, `approach_${a}`)], paragraphs: [RETURN_APPROACH[a]], group: "approach" })),
      { when: [has(id, "by_craft")], paragraphs: [RETURN_END.craft], group: "end" },
      { when: [has(id, "by_force")], paragraphs: [RETURN_END.force], group: "end" },
      { when: [has(id, "by_ruse")], paragraphs: [RETURN_END.ruse], group: "end" },
      { when: [has(id, "driven")], paragraphs: [RETURN_END.driven], group: "end" },
      { when: [has(id, "lore")], paragraphs: [RETURN_END.lore], group: "lore" },
    ],
    choices: [
      { id: "report", label: fillAll(RETURN_CHOICES.report, slots, seed), tone: "truth", next: ctx.waysideId, npcScenario: reportId14(id), effects: [done, { kind: "setFlag", flag: heardFlag(id) }] },
      { id: "silent", label: fillAll(RETURN_CHOICES.silent, slots, seed), tone: "deceit", next: ctx.waysideId, effects: [done, { kind: "addStat", stat: "karma", amount: -1 }] },
      { id: "rest", label: fillAll(RETURN_CHOICES.rest, slots, seed), tone: "quiet", next: ctx.waysideId, effects: [done, { kind: "addCultivation", amount: 3 + R }] },
      {
        id: "sell",
        label: fillAll(RETURN_CHOICES.sell, slots, seed),
        tone: "inquiry",
        next: ctx.waysideId,
        requires: [{ kind: "item", item: spoilId(id) }],
        lockedHint: `You carry no ${spec.spoil.name} to sell.`,
        effects: [done, { kind: "takeItem", item: spoilId(id) }, { kind: "addWealth", amount: price }],
      },
    ],
  });
  return scenes;
}

/** What a buyer pays for the spoil: a little more for a foe higher in its realm, and a good deal more for each realm. */
export const spoilValue = (spec: FoeSpec, ctx: Pick<HuntContext, "realm">) => 12 + 14 * ctx.realm + 2 * spec.offset;

export function spoilItem(spec: FoeSpec, ctx: Pick<HuntContext, "realm">): ItemDef {
  return { id: spoilId(spec.id), name: spec.spoil.name, kind: "material", blurb: spec.spoil.blurb, value: spoilValue(spec, ctx) };
}

const DELTAS = [
  { trust: 2, respect: 2 },
  { trust: 3, suspicion: -2 },
  { respect: 3, trust: 1 },
  { trust: 1, fear: -1, respect: 2 },
];

/** The Elder’s reaction to a hunt: her lines by how much she trusts the hero, and a memory for each thing that happened, the most particular first. */
export function buildReport14(spec: FoeSpec, ctx: HuntContext): NpcScenario {
  const id = spec.id;
  const slots = slotsOf(spec);
  const seed = ctx.index;
  const line = (tier: keyof typeof REPORT_LINES) => fill(pick(REPORT_LINES[tier], seed + tier.length), slots);
  const f = (name: string): Condition => has(id, name);
  return {
    id: reportId14(id),
    summary: `The player reports on ${spec.name}.`,
    delta: pick(DELTAS, seed),
    lines: { hostile: line("hostile"), wary: line("wary"), neutral: line("neutral"), warm: line("warm"), devoted: line("devoted") },
    memory: [
      ...GENDERS.map(({ value }) => ({ when: [f("gendered"), heroIs("gender", value)], line: fill(REPORT_GENDER[value as Gender], slots) })),
      ...CRAFTS.map((dao) => ({ when: [f("dao"), heroIs("dao", dao)], line: fill(REPORT_DAO[dao], slots) })),
      ...(["force", "craft", "ruse"] as const).map((way) => ({ when: [f("beaten"), f(`by_${way}`)], line: fill(REPORT_MEMORY.beaten, slots) })),
      { when: [f("by_ruse")], line: fill(REPORT_MEMORY.ruse, slots) },
      { when: [f("by_force")], line: fill(REPORT_MEMORY.force, slots) },
      { when: [f("driven")], line: fill(REPORT_MEMORY.driven, slots) },
      { when: [f("lore")], line: fill(REPORT_MEMORY.lore, slots) },
      { when: [f("taken")], line: fill(REPORT_MEMORY.taken, slots) },
      { when: [f("left")], line: fill(REPORT_MEMORY.left, slots) },
      ...GENDERS.map(({ value }) => ({ when: [f("fought"), heroIs("gender", value)], line: fill(REPORT_BY_GENDER[value as Gender], slots) })),
    ],
  };
}

export const REALM_NAME = (realm: number) => REALMS[realm].name;
