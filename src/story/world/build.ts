import { GENDERS } from "@/engine/hero";
import { REALMS } from "@/engine/cultivation";
import {
  courseAfter,
  coursesFor,
  doneFlag,
  heardFlag,
  howFlag,
  leverFlag,
  outFlag,
  partFlag,
  PARTS,
  METHODS,
  recFlag,
  type Course,
  type Method,
  type Part,
} from "@/engine/world";
import type { Choice, ChoiceTone, Condition, Effect, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, TONE_EFFECTS, type Extra } from "../roads2/build";
import {
  DAO_METHOD,
  KNOWN,
  LEAVE_LABELS,
  METHOD_LABELS,
  METHOD_TONE,
  PART_LEAD,
  PART_TONE,
  S0_LABELS,
  S1_LABELS,
  SIGHT_LINE,
  STAGE_TITLE,
  TONES,
} from "./lexicon";
import {
  AFTER_LABELS,
  AFTER_OPEN,
  HOW_AFTER,
  LEDGER_LABELS,
  LEDGER_OPEN,
  LEVER_KNOWN,
  LEVER_UNKNOWN,
  PART_AFTER,
  PRICE_LABELS,
  PRICE_OPEN,
  REPORT_LINES,
  REPORT_MEMORY,
  REPORT_METHOD,
  REPORT_RECORD,
  REPORT_TAIL,
  RETURN_COURSE,
  RETURN_LABELS,
  RETURN_OPEN,
  RETURN_PART,
  S4_LABELS,
  WORD_LABELS,
  WORD_OPEN,
  WORD_PART,
} from "./lexicon-text";
import type { AffairSpec } from "./spec";

export interface AffairContext {
  /** Position among all forty affairs, 0-based. */
  index: number;
  /** The reach’s number, 1 to 10. */
  reach: number;
  reachId: string;
  /** The tier of the reach. */
  realm: number;
}

export const reportId = (id: string) => `REPORT_WORLD_${id.toUpperCase()}`;
export const tokenId = (id: string) => `wo_${id}_token`;
export const sid = (id: string, suffix: string) => `wo_${id}_${suffix}`;

/** The affair a scene belongs to, from its id. */
export const affairOfScene = (sceneId: string): string | undefined => /^wo_([a-z0-9]+)_(?:sighting|look|hand|side|hinge|after|word|ledger|return)/.exec(sceneId)?.[1];

export const slotsOf = (spec: AffairSpec): Record<string, string> => ({
  place: spec.place,
  people: spec.people,
  stake: spec.stake,
  foe: spec.foe,
  ally: spec.ally,
  lever: spec.lever,
});

const fillAll = (items: string[], slots: Record<string, string>, seed: number) => fill(pick(items, seed), slots);
const flagOn = (flag: string): Condition => ({ kind: "flag", flag });
const flagOff = (flag: string): Condition => ({ kind: "flag", flag, is: false });
const set = (flag: string): Effect => ({ kind: "setFlag", flag });
const heroIs = (field: "gender" | "dao", is: string): Condition => ({ kind: "hero", field, is: [is] });

/** What each part costs, in stones and in qi, and what it earns in cultivation. They grow with the tier of the reach. */
export const stonesFor = (part: Part, realm: number) => ({ look: 1 + realm, hand: 3 + 2 * realm, side: 6 + 3 * realm, hinge: 10 + 4 * realm })[part];
export const QI_COST: Record<Part, number> = { look: 2, hand: 5, side: 8, hinge: 14 };
export const cultFor = (part: Part, realm: number) => ({ look: 2 + realm, hand: 4 + 2 * realm, side: 6 + 3 * realm, hinge: 10 + 4 * realm })[part];

const NAME_COST: Record<Part, Effect[]> = {
  look: [{ kind: "addNpc", metric: "respect", amount: 1 }],
  hand: [{ kind: "addNpc", metric: "respect", amount: 1 }],
  side: [{ kind: "addNpc", metric: "respect", amount: 1 }, { kind: "addNpc", metric: "suspicion", amount: 1 }],
  hinge: [{ kind: "addNpc", metric: "respect", amount: 3 }, { kind: "addNpc", metric: "suspicion", amount: 2 }, { kind: "addNpc", metric: "fear", amount: 1 }],
};

/** The tones of the four choices at the lay of it. The first two learn where it gives. */
const S1_TONES: Record<Part, ChoiceTone[]> = {
  look: ["inquiry", "truth", "quiet", "mercy"],
  hand: ["inquiry", "truth", "mercy", "quiet"],
  side: ["inquiry", "truth", "force", "mercy"],
  hinge: ["inquiry", "truth", "force", "deceit"],
};

const S4_TONES: ChoiceTone[] = ["truth", "mercy", "quiet", "inquiry"];
const WORD_TONES: ChoiceTone[] = ["truth", "mercy", "quiet", "deceit"];
const LEDGER_TONES: ChoiceTone[] = ["truth", "mercy", "quiet", "deceit"];
const AFTER_TONES: ChoiceTone[] = ["mercy", "quiet", "inquiry", "truth"];
const PRICE_TONES: ChoiceTone[] = ["mercy", "quiet", "truth", "deceit"];

/** Builds the 25 scenes of one affair: the word of it, four parts of five scenes, the aftermath, the word going out, the ledger and the way back. */
export function buildAffair(spec: AffairSpec, ctx: AffairContext): Scene[] {
  const id = spec.id;
  const R = ctx.realm;
  const seed = ctx.index;
  const slots = slotsOf(spec);
  const scenes: Scene[] = [];
  const title = (stage: string) => `${spec.title}: ${stage}`;
  const own = (suffix: string) => sid(id, suffix);
  const course = (part: Part, method: Method): Course => courseAfter(spec.fate, part, method);
  const outs = (["mended", "ground", "broke"] as const).map((c) => ({ c, flag: outFlag(ctx.reach, id, c) }));

  // ── The word of it.
  scenes.push({
    id: own("sighting"),
    title: spec.title,
    paragraphs: [spec.news, fillAll(SIGHT_LINE, slots, seed)],
    extras: [
      ...GENDERS.map(({ value }): Extra => ({ when: [heroIs("gender", value)], paragraphs: [spec.sees[value as keyof AffairSpec["sees"]]], group: "gender" })),
      { when: [{ kind: "world", measure: "hinges", min: 1 }], paragraphs: [fillAll(KNOWN.hinge, slots, seed)], group: "known" },
      { when: [{ kind: "world", measure: "voices", min: 6 }, { kind: "world", measure: "hinges", max: 0 }], paragraphs: [fillAll(KNOWN.small, slots, seed)], group: "known" },
    ],
    choices: [
      ...PARTS.map((part, p): Choice => ({
        id: `part_${part}`,
        label: fillAll(PART_LEAD[part], { ...slots, deed: spec.deed[part] }, seed + p),
        tone: PART_TONE[part],
        next: own(`${part}0`),
        effects: [set(partFlag(ctx.reach, id, part))],
      })),
      { id: "leave", label: fillAll(LEAVE_LABELS, slots, seed), tone: "quiet", next: ctx.reachId },
    ],
  });

  // ── The four parts, five scenes each.
  PARTS.forEach((part, p) => {
    const at = (n: number) => own(`${part}${n}`);
    const base = seed + p;

    scenes.push({
      id: at(0),
      title: title(STAGE_TITLE[0]),
      paragraphs: [spec.tracks[part][0]],
      choices: TONES[part].map((tone, c): Choice => ({ id: tone, label: fillAll(S0_LABELS[tone], slots, base + c), tone, next: at(1), effects: TONE_EFFECTS[tone] })),
    });

    scenes.push({
      id: at(1),
      title: title(STAGE_TITLE[1]),
      paragraphs: [spec.tracks[part][1]],
      choices: S1_TONES[part].map((tone, c): Choice => ({
        id: tone,
        label: fillAll(S1_LABELS[tone], slots, base + c + 1),
        tone,
        next: at(2),
        effects: [...TONE_EFFECTS[tone], ...(c < 2 ? [set(leverFlag(ctx.reach, id))] : [])],
      })),
    });

    // The turn. The lever is what the hero found; strength is what a realm lends; a bargain and giving way are always there.
    const lever = leverFlag(ctx.reach, id);
    const how = (method: Method): Effect[] => [set(outFlag(ctx.reach, id, course(part, method))), set(howFlag(ctx.reach, id, method)), ...TONE_EFFECTS[METHOD_TONE[method]]];
    const crafts = Object.keys(DAO_METHOD) as (keyof typeof DAO_METHOD)[];
    scenes.push({
      id: at(2),
      title: title(STAGE_TITLE[2]),
      paragraphs: [spec.tracks[part][2]],
      extras: [
        { when: [flagOn(lever)], paragraphs: [fillAll(LEVER_KNOWN, slots, base)], group: "lever" },
        { when: [flagOff(lever)], paragraphs: [fillAll(LEVER_UNKNOWN, slots, base)], group: "lever" },
      ],
      choices: [
        {
          id: "turned",
          label: fillAll(METHOD_LABELS[part].turned, slots, base),
          tone: METHOD_TONE.turned,
          next: at(3),
          requires: [flagOn(lever)],
          lockedHint: `You have not found where it gives. Asking ${spec.ally} what would change it, at the right hour, would have told you.`,
          effects: how("turned"),
        },
        {
          id: "forced",
          label: fillAll(METHOD_LABELS[part].forced, slots, base + 1),
          tone: METHOD_TONE.forced,
          next: at(3),
          ...(R > 0 ? { needsRealm: R } : {}),
          effects: how("forced"),
        },
        { id: "bargained", label: fillAll(METHOD_LABELS[part].bargained, slots, base + 2), tone: METHOD_TONE.bargained, next: at(3), effects: how("bargained") },
        { id: "gave", label: fillAll(METHOD_LABELS[part].gave, slots, base + 3), tone: METHOD_TONE.gave, next: at(3), effects: how("gave") },
        ...crafts.map((dao): Choice => ({
          id: `craft_${dao}`,
          label: fill(part === "look" || part === "hand" ? DAO_METHOD[dao].small : DAO_METHOD[dao].large, slots),
          tone: METHOD_TONE.turned,
          next: at(3),
          requires: [heroIs("dao", dao)],
          hideLocked: true,
          effects: [...how("turned"), { kind: "addDao", amount: 3 }],
        })),
      ],
    });

    // The price.
    const stones = stonesFor(part, R);
    scenes.push({
      id: at(3),
      title: title(STAGE_TITLE[3]),
      paragraphs: [fillAll(PRICE_OPEN[part], slots, base)],
      choices: PRICE_TONES.map((tone, c): Choice => {
        const label = fillAll(PRICE_LABELS[tone], slots, base + c);
        if (tone === "mercy") return { id: "stones", label: `${label} (${stones} spirit stones)`, tone, next: at(4), requires: [{ kind: "wealth", min: stones }], lockedHint: `You have not ${stones} spirit stones to spare.`, effects: [{ kind: "addWealth", amount: -stones }, ...TONE_EFFECTS.mercy] };
        if (tone === "quiet") return { id: "qi", label, tone, next: at(4), effects: [{ kind: "addStat", stat: "qi", amount: -QI_COST[part] }] };
        if (tone === "truth") return { id: "name", label, tone, next: at(4), effects: [...NAME_COST[part], ...TONE_EFFECTS.truth] };
        return { id: "corner", label, tone, next: at(4), effects: TONE_EFFECTS.deceit };
      }),
    });

    // What it leaves.
    scenes.push({
      id: at(4),
      title: title(STAGE_TITLE[4]),
      paragraphs: [fillAll(PART_AFTER[part], slots, base)],
      extras: [
        ...outs.filter(({ c }) => coursesFor(spec.fate, part).includes(c)).map(({ c, flag }): Extra => ({ when: [flagOn(flag)], paragraphs: [spec.leaves[c]], group: "course" })),
        ...METHODS.map((method, m): Extra => ({ when: [flagOn(howFlag(ctx.reach, id, method))], paragraphs: [fillAll(HOW_AFTER[method], slots, base + m)], group: "how" })),
      ],
      choices: S4_TONES.map((tone, c): Choice => ({
        id: tone,
        label: fillAll(S4_LABELS[tone], slots, base + c),
        tone,
        next: own("after"),
        effects: [...TONE_EFFECTS[tone], { kind: "addCultivation", amount: cultFor(part, R) }],
      })),
    });
  });

  // ── Afterwards.
  scenes.push({
    id: own("after"),
    title: title("Afterwards"),
    paragraphs: [fillAll(AFTER_OPEN, slots, seed)],
    choices: AFTER_TONES.map((tone, c): Choice => ({
      id: tone === "mercy" ? "accept" : tone,
      label: fillAll(AFTER_LABELS[tone], slots, seed + c),
      tone,
      next: own("word"),
      effects: tone === "mercy" ? [{ kind: "giveItem", item: tokenId(id) }, ...TONE_EFFECTS.mercy] : TONE_EFFECTS[tone],
    })),
  });

  // ── The word going out. The course is read from the flags the turn set.
  scenes.push({
    id: own("word"),
    title: title("The Word Goes Out"),
    paragraphs: [fillAll(WORD_OPEN, slots, seed)],
    extras: [
      ...outs.map(({ c, flag }): Extra => ({ when: [flagOn(flag)], paragraphs: [spec.after[c]], group: "course" })),
      ...PARTS.map((part, p): Extra => ({ when: [flagOn(partFlag(ctx.reach, id, part))], paragraphs: [pick(WORD_PART[part], seed + p)], group: "part" })),
    ],
    choices: WORD_TONES.map((tone, c): Choice => ({ id: tone, label: fillAll(WORD_LABELS[tone], slots, seed + c), tone, next: own("ledger"), effects: TONE_EFFECTS[tone] })),
  });

  // ── The ledger. The one choice that writes the true account is the one the endings and the Elder read.
  scenes.push({
    id: own("ledger"),
    title: title("The Ledger"),
    paragraphs: [fillAll(LEDGER_OPEN, slots, seed)],
    choices: LEDGER_TONES.map((tone, c): Choice => ({
      id: tone === "truth" ? "true_account" : tone,
      label: fillAll(LEDGER_LABELS[tone], slots, seed + c),
      tone,
      next: own("return"),
      effects: [...TONE_EFFECTS[tone], ...(tone === "truth" ? [set(recFlag(ctx.reach, id))] : []), ...(tone === "deceit" ? [{ kind: "addWealth", amount: 2 + R } as Effect] : [])],
    })),
  });

  // ── The way back.
  const done = set(doneFlag(ctx.reach, id));
  scenes.push({
    id: own("return"),
    title: title("The Way Back"),
    paragraphs: [fillAll(RETURN_OPEN, slots, seed)],
    extras: [
      ...PARTS.map((part): Extra => ({ when: [flagOn(partFlag(ctx.reach, id, part))], paragraphs: [RETURN_PART[part]], group: "part" })),
      ...outs.map(({ c, flag }): Extra => ({ when: [flagOn(flag)], paragraphs: [RETURN_COURSE[c]], group: "course" })),
    ],
    choices: [
      { id: "report", label: fillAll(RETURN_LABELS.report, slots, seed), tone: "truth", next: ctx.reachId, npcScenario: reportId(id), effects: [done, set(heardFlag(ctx.reach, id))] },
      { id: "silent", label: fillAll(RETURN_LABELS.silent, slots, seed), tone: "deceit", next: ctx.reachId, effects: [done, { kind: "addStat", stat: "karma", amount: -1 }] },
      { id: "rest", label: fillAll(RETURN_LABELS.rest, slots, seed), tone: "quiet", next: ctx.reachId, effects: [done, { kind: "addCultivation", amount: 3 + R }] },
      {
        id: "give",
        label: fillAll(RETURN_LABELS.give, slots, seed),
        tone: "mercy",
        next: ctx.reachId,
        requires: [{ kind: "wealth", min: 3 }],
        lockedHint: "You have not three spirit stones to leave.",
        effects: [done, { kind: "addWealth", amount: -3 }, ...TONE_EFFECTS.mercy],
      },
    ],
  });
  return scenes;
}

const DELTAS = [
  { trust: 2, respect: 2 },
  { trust: 3, suspicion: -2 },
  { respect: 3, trust: 1 },
  { trust: 1, fear: -1, respect: 2 },
];

/** The Elder’s reaction to an affair: her lines by trust, and a memory for each thing the hero was in it, the most particular first. */
export function buildReport(spec: AffairSpec, ctx: AffairContext): NpcScenario {
  const slots = slotsOf(spec);
  const seed = ctx.index;
  const line = (tier: keyof typeof REPORT_LINES) => fill(pick(REPORT_LINES[tier], seed + tier.length), slots);
  const memory: { when: Condition[]; line: string }[] = [];
  for (const part of PARTS) {
    for (const c of coursesFor(spec.fate, part)) {
      const tail = fill(pick(REPORT_TAIL, seed + part.length + c.length), { ...slots, after: spec.after[c] });
      memory.push({ when: [flagOn(partFlag(ctx.reach, spec.id, part)), flagOn(outFlag(ctx.reach, spec.id, c))], line: `${REPORT_MEMORY[part][c]} ${tail}` });
    }
  }
  memory.push({ when: [flagOn(recFlag(ctx.reach, spec.id))], line: REPORT_RECORD });
  for (const method of METHODS) memory.push({ when: [flagOn(howFlag(ctx.reach, spec.id, method))], line: REPORT_METHOD[method] });
  return {
    id: reportId(spec.id),
    summary: `The player reports on ${spec.title.toLowerCase()}.`,
    delta: pick(DELTAS, seed),
    lines: { hostile: line("hostile"), wary: line("wary"), neutral: line("neutral"), warm: line("warm"), devoted: line("devoted") },
    memory,
  };
}

/** What the people give a hero who has taken a part: a keepsake, which can be carried and used but not sold. */
export function tokenItem(spec: AffairSpec): ItemDef {
  return {
    id: tokenId(spec.id),
    name: spec.token.name,
    kind: "token",
    blurb: spec.token.blurb,
    value: 0,
    keepsake: true,
    use: { verb: "Hold", line: "is warm in your hand. You remember who gave it, and what it cost them to", effects: [{ kind: "addStat", stat: "insight", amount: 1 }, { kind: "addStat", stat: "karma", amount: 1 }], cooldown: 10 },
  };
}

export const REALM_NAME = (realm: number) => REALMS[realm].name;
