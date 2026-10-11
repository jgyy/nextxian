import { REALMS } from "@/engine/cultivation";
import { focusKind, pickFit } from "./kinds";
import { BEAT_EXTRA, CHOICE_EXTRA, spread } from "./lexicon-extra";
import { ROAD_DONE_PREFIX } from "@/engine/npc";
import type { Choice, ChoiceTone, Effect, NpcScenario, Scene } from "@/engine/types";
import {
  ALLIES,
  APPROACH_LABEL,
  CHOICE_LABEL,
  HIDDEN,
  HIDDEN_OPEN_THING,
  MODE_BEAT,
  OBSTACLES,
  REPORT_LINES,
  REPORT_MEMORY,
  RETURN_CHOICES,
  RETURN_APPROACH,
  RETURN_CRISIS,
  RETURN_FOUND_SECRET,
  RETURN_OPEN,
  RETURN_USED_QI,
  STAGE_OPEN,
  STAGE_TITLE,
  TONE_RING,
} from "./lexicon";

/** What one road needs from its author. The builder turns it into 25 scenes and a report scenario. */
export interface RoadSpec {
  /** Short snake_case id. Scene ids, flags and the scenario id derive from it. */
  id: string;
  title: string;
  /** The place, with its article, lowercase: "the mist orchard". */
  place: string;
  /** The keeper, with article and name: "the orchard widow Ru Yan". */
  keeper: string;
  /** Just the name: "Ru Yan". */
  kname: string;
  /** An object, with its article: "a jade comb". */
  relic: string;
  /** A sensory sign that fits the sentence "{Omen} lingers": "a smell of wet ash". */
  omen: string;
  /** A clause that completes "you learn that …": "the orchard was planted over a sealed well". */
  secret: string;
  /** The opening paragraph. */
  intro: string;
  /** Four things to approach, each a noun phrase with article. */
  focus: [string, string, string, string];
}

export interface RoadContext {
  /** Position among all roads, 0-based. */
  index: number;
  /** Id of the wayside scene the road starts from and returns to. */
  wayside: string;
  /** The realm needed for the road’s cultivator’s way, as an index into `REALMS`. */
  realm: number;
  /** Give each focus only wording that fits it. On by default; the slot audit turns it off to count what the old wording got wrong. */
  fit?: boolean;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Replaces {slot} and {Slot} in a template. Unknown slots are left alone so tests can catch them. */
export function fill(template: string, slots: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) => {
    const lower = key.charAt(0).toLowerCase() + key.slice(1);
    const value = slots[lower];
    if (value === undefined) return whole;
    return key.charAt(0) === key.charAt(0).toUpperCase() ? cap(value) : value;
  });
}

/** A repeatable pseudo-random pick, so the same road always reads the same. */
function pick<T>(items: readonly T[], seed: number): T {
  return items[((seed % items.length) + items.length) % items.length];
}

const TONE_EFFECTS: Record<ChoiceTone, Effect[]> = {
  truth: [{ kind: "addStat", stat: "insight", amount: 1 }, { kind: "addStat", stat: "karma", amount: 1 }],
  mercy: [{ kind: "addStat", stat: "karma", amount: 2 }],
  inquiry: [{ kind: "addStat", stat: "insight", amount: 2 }],
  deceit: [{ kind: "addStat", stat: "karma", amount: -2 }],
  force: [{ kind: "addStat", stat: "qi", amount: 1 }, { kind: "addStat", stat: "karma", amount: -1 }],
  quiet: [{ kind: "addStat", stat: "qi", amount: 2 }],
};

/** The four approaches of road number `index` take these tones, all different. */
export function approachModes(index: number): ChoiceTone[] {
  return [0, 1, 3, 4].map((offset) => TONE_RING[(index + offset) % TONE_RING.length]);
}

/** Four distinct tones for one scene's choices, starting with the approach's own. */
function sceneTones(mode: ChoiceTone, stage: number, approach: number): ChoiceTone[] {
  const start = TONE_RING.indexOf(mode);
  const others: ChoiceTone[] = [];
  for (let i = 1; others.length < 3 && i <= TONE_RING.length; i++) {
    const tone = TONE_RING[(start + i + stage + approach) % TONE_RING.length];
    if (tone !== mode && !others.includes(tone)) others.push(tone);
  }
  return [mode, ...others];
}

/** Where in a pool the walk of one approach starts, so that road after road reads differently while one walk never repeats a line. */
export const walkBase = (index: number, approach: number, tone: ChoiceTone): number => index * 7 + approach * 3 + TONE_RING.indexOf(tone) * 5;

export const roadFlag = (id: string, name: string) => `${id}_${name}`;
export const doneFlag = (id: string) => `${ROAD_DONE_PREFIX}${id}`;
export const reportedFlag = (id: string) => roadFlag(id, "reported");
export const reportScenarioId = (id: string) => `REPORT_ROAD_${id.toUpperCase()}`;

/**
 * The slots a choice’s label is filled with. The obstacle and the ally come from the pools of the choice’s own tone: a label that says
 * "Trace {obstacle} back to whoever put it there" needs something that can be traced, which a sick child on the step is not.
 * Before this, they came from the pool of the approach the player was walking, whatever tone the choice had.
 */
function labelSlots(slots: Record<string, string>, tone: ChoiceTone, seed: number, fit: boolean): Record<string, string> {
  if (!fit) return slots;
  return { ...slots, obstacle: pick(OBSTACLES[tone], seed + 1), ally: pick(ALLIES[tone], seed + 2) };
}

/** Builds the 25 scenes of one road: entry, four approaches of five beats, a hidden route of three, and a return. */
export function buildRoad(spec: RoadSpec, ctx: RoadContext): Scene[] {
  const { id } = spec;
  const modes = approachModes(ctx.index);
  const base: Record<string, string> = {
    place: spec.place,
    keeper: spec.keeper,
    kname: spec.kname,
    relic: spec.relic,
    omen: spec.omen,
    secret: spec.secret,
  };
  const scenes: Scene[] = [];
  const fit = ctx.fit ?? true;

  scenes.push({
    id: `${id}_entry`,
    title: `Side Road: ${spec.title}`,
    paragraphs: [spec.intro],
    choices: modes.map((mode, a): Choice => ({
      id: `approach_${a}`,
      label: fill(pickFit(APPROACH_LABEL[mode], ctx.index + a, spec.focus[a], fit), { ...base, focus: spec.focus[a] }),
      tone: mode,
      next: `${id}_a${a}s0`,
      effects: [{ kind: "setFlag", flag: roadFlag(id, `approach_${a}`) }],
    })),
  });

  modes.forEach((mode, a) => {
    for (let stage = 0; stage < 5; stage++) {
      const seed = ctx.index * 7 + a * 3 + stage * 5;
      const slots = {
        ...base,
        focus: spec.focus[a],
        obstacle: pick(OBSTACLES[mode], seed + 1),
        ally: pick(ALLIES[mode], seed + 2),
      };
      const next = stage < 4 ? `${id}_a${a}s${stage + 1}` : `${id}_return`;
      const choices: Choice[] = sceneTones(mode, stage, a).map((tone, c) => {
        const effects: Effect[] = [...TONE_EFFECTS[tone]];
        if (stage === 3) effects.push({ kind: "setFlag", flag: roadFlag(id, `crisis_${tone}`) });
        return {
          id: tone,
          label: fill(pickFit([...CHOICE_LABEL[tone], ...CHOICE_EXTRA[tone]], walkBase(ctx.index, a, tone) + stage, slots.focus, fit), labelSlots(slots, tone, seed + c, fit)),
          tone,
          next,
          effects,
        };
      });
      if (stage === 3) {
        // The cultivator’s way: only a player who has risen far enough can take it.
        const need = REALMS[ctx.realm].name;
        choices.push({
          id: "draw_qi",
          label: fill("Draw on your cultivation and let your qi settle over {place} before you answer.", slots),
          tone: "quiet",
          next,
          requires: [{ kind: "realm", min: ctx.realm }],
          lockedHint: `Needs ${need} cultivation or higher.`,
          effects: [
            { kind: "addCultivation", amount: 4 + ctx.realm * 2 },
            { kind: "addStat", stat: "qi", amount: 3 },
            { kind: "setFlag", flag: roadFlag(id, "used_qi") },
            { kind: "setFlag", flag: roadFlag(id, "crisis_quiet") },
          ],
        });
      }
      if (stage === 4 && a === 2) {
        choices.push({
          id: "hidden_stair",
          label: fill(
            focusKind(slots.focus) === "thing"
              ? "Notice the loose board beneath {focus} that you walked past, and lift it."
              : "Notice the stair behind {focus} that you walked past, and go down.",
            slots,
          ),
          tone: "inquiry",
          next: `${id}_h0`,
          requires: [{ kind: "stat", stat: "insight", min: 12 }],
          lockedHint: "You have not read this place closely enough yet. Insight 12 is needed.",
          effects: [{ kind: "addStat", stat: "insight", amount: 1 }],
        });
      }
      scenes.push({
        id: `${id}_a${a}s${stage}`,
        title: `${spec.title}: ${STAGE_TITLE[mode][stage]}`,
        paragraphs: [
          fill(pickFit(STAGE_OPEN[stage], seed, slots.focus, fit), slots),
          fill(spread([...MODE_BEAT[mode], ...BEAT_EXTRA[mode]], walkBase(ctx.index, a, mode), stage), slots),
        ],
        choices,
      });
    }
  });

  HIDDEN.forEach((h, n) => {
    const slots = { ...base, focus: spec.focus[2], obstacle: pick(OBSTACLES[modes[2]], ctx.index), ally: pick(ALLIES[modes[2]], ctx.index) };
    const next = n < 2 ? `${id}_h${n + 1}` : `${id}_return`;
    const final: Effect[] = n === 2 ? [{ kind: "setFlag", flag: roadFlag(id, "found_secret") }, { kind: "addCultivation", amount: 5 }] : [];
    scenes.push({
      id: `${id}_h${n}`,
      title: `${spec.title}: ${h.title}`,
      paragraphs: h.paragraphs.map((p, i) => fill(n === 0 && i === 0 && fit && focusKind(slots.focus) === "thing" ? HIDDEN_OPEN_THING : p, slots)),
      choices: sceneTones(modes[2], n, 2).map((tone, c) => ({
        id: tone,
        label: fill(pickFit([...CHOICE_LABEL[tone], ...CHOICE_EXTRA[tone]], walkBase(ctx.index, 2, tone) + 5 + n, slots.focus, fit), labelSlots(slots, tone, ctx.index + n + c, fit)),
        tone,
        next,
        effects: [...TONE_EFFECTS[tone], ...final],
      })),
    });
  });

  const done: Effect = { kind: "setFlag", flag: doneFlag(id) };
  const open = RETURN_OPEN[ctx.index % RETURN_OPEN.length].map((p) => fill(p, base));
  scenes.push({
    id: `${id}_return`,
    title: `${spec.title}: The Way Back`,
    paragraphs: open,
    extras: [
      ...modes.map((mode, a) => ({
        when: [{ kind: "flag" as const, flag: roadFlag(id, `approach_${a}`) }],
        paragraphs: [fill(pickFit(RETURN_APPROACH[mode], ctx.index, spec.focus[a], fit), { ...base, focus: spec.focus[a] })],
        group: "approach",
      })),
      ...(Object.keys(RETURN_CRISIS) as ChoiceTone[]).map((tone) => ({
        when: [{ kind: "flag" as const, flag: roadFlag(id, `crisis_${tone}`) }],
        paragraphs: [fill(RETURN_CRISIS[tone], base)],
        group: "crisis",
      })),
      { when: [{ kind: "flag", flag: roadFlag(id, "found_secret") }], paragraphs: [fill(RETURN_FOUND_SECRET, base)] },
      { when: [{ kind: "flag", flag: roadFlag(id, "used_qi") }], paragraphs: [fill(RETURN_USED_QI, base)] },
    ],
    choices: [
      { id: "report", label: fill(RETURN_CHOICES.report, base), tone: "truth", next: ctx.wayside, npcScenario: reportScenarioId(id), effects: [done] },
      { id: "silent", label: fill(RETURN_CHOICES.silent, base), tone: "deceit", next: ctx.wayside, effects: [done, { kind: "addStat", stat: "karma", amount: -1 }] },
      { id: "rest", label: fill(RETURN_CHOICES.rest, base), tone: "quiet", next: ctx.wayside, effects: [done, { kind: "addCultivation", amount: 3 }] },
      {
        id: "keep",
        label: fill(RETURN_CHOICES.keep, base),
        tone: "inquiry",
        next: ctx.wayside,
        effects: [done, { kind: "setFlag", flag: roadFlag(id, "kept_relic") }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
    ],
  });

  return scenes;
}

const REPORT_DELTAS = [
  { trust: 2, respect: 2 },
  { trust: 3, suspicion: -2 },
  { respect: 3, trust: 1 },
  { trust: 1, fear: -1, respect: 2 },
];

/** The Elder’s reaction to the player’s report on one road. */
export function buildReport(spec: RoadSpec, ctx: RoadContext): NpcScenario {
  const slots = { place: spec.place, kname: spec.kname, keeper: spec.keeper, relic: spec.relic, omen: spec.omen, secret: spec.secret };
  const line = (tier: keyof typeof REPORT_LINES) => fill(pick(REPORT_LINES[tier], ctx.index + tier.length), slots);
  const id = spec.id;
  return {
    id: reportScenarioId(id),
    summary: `The player reports on ${spec.place}.`,
    delta: pick(REPORT_DELTAS, ctx.index),
    lines: {
      hostile: line("hostile"),
      wary: line("wary"),
      neutral: line("neutral"),
      warm: line("warm"),
      devoted: line("devoted"),
    },
    memory: [
      { when: [{ kind: "flag", flag: roadFlag(id, "found_secret") }], line: fill(REPORT_MEMORY.secret, slots) },
      { when: [{ kind: "flag", flag: roadFlag(id, "kept_relic") }], line: fill(REPORT_MEMORY.relic, slots) },
      { when: [{ kind: "tone", tone: "deceit", min: 3, within: 6 }], line: fill(REPORT_MEMORY.deceit, slots) },
      { when: [{ kind: "roads", min: 10 }], line: fill(REPORT_MEMORY.roads, slots) },
      { when: [{ kind: "realm", min: 2 }], line: fill(REPORT_MEMORY.realm, slots) },
    ],
    remember: [reportedFlag(id)],
  };
}
