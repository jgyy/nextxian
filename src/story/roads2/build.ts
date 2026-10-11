import { REALMS } from "@/engine/cultivation";
import { standingOf, type Hero } from "@/engine/hero";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene } from "@/engine/types";
import { ALLIES, OBSTACLES, STAGE_TITLE, TONE_RING } from "../roads/lexicon";
import { approachModes, fill, roadFlag } from "../roads/build";
import { focusKind, pickFit } from "../roads/kinds";
import { ATTIRES, BACKGROUNDS, GENDERS, LOOKS, STATUSES } from "@/engine/hero";
import { BIRTH, bandBounds, DRESS, FACE, MANNER, REALM_REACT, SEND_OFF, TRADE, type RealmKind, type RelBand } from "./hero-lex";
import {
  APPROACH_LABEL2,
  CHOICE_LABEL2,
  HIDDEN_TITLE2,
  MODE_BEAT2,
  REPORT_LINES2,
  REPORT_MEMORY2,
  RETURN_APPROACH2,
  RETURN_CHOICES2,
  RETURN_CRISIS2,
  RETURN_FOUND_SECRET2,
  RETURN_HUMBLED,
  RETURN_OPEN2,
  RETURN_PULLED_RANK,
  RETURN_REACHED,
  RETURN_USED_QI2,
} from "./lexicon";

/**
 * What one realm road needs from its author. Unlike the Book One roads, almost all of the text is the road’s own:
 * twenty situations, three hidden scenes and a closing paragraph. The builder adds the choices, the tones, the cultivation
 * gates, and the reactions to who the hero is and how far they have risen.
 */
export interface RoadSpec2 {
  id: string;
  title: string;
  place: string;
  keeper: string;
  kname: string;
  relic: string;
  omen: string;
  secret: string;
  intro: string;
  focus: [string, string, string, string];
  /** Four approaches of five situations each. The first paragraph of each approach scene. */
  beats: [Five, Five, Five, Five];
  /** The three scenes of the hidden route. */
  deep: [string, string, string];
  /** The road’s own paragraph at the way back. */
  close: string;
}
type Five = [string, string, string, string, string];

export interface RoadContext2 {
  /** Position among all realm roads, 0-based. */
  index: number;
  /** The wayside’s number, 1 to 10. Part of the finished flag, so each wayside counts its own roads. */
  wayside: number;
  waysideId: string;
  /** The realm this road asks for. */
  realm: number;
}

export const REALM_ROAD_DONE = "rr_done_";
export const doneFlag2 = (wayside: number, id: string) => `${REALM_ROAD_DONE}w${wayside}_${id}`;
export const reportedFlag2 = (id: string) => roadFlag(id, "reported");
export const reportId2 = (id: string) => `REPORT_ROAD_${id.toUpperCase()}`;
/** The standing a hero needs to make a road yield to their name: two for every realm it asks, and one more. */
export const rankNeeded = (realm: number) => 2 * realm + 1;

export const TONE_EFFECTS: Record<ChoiceTone, Effect[]> = {
  truth: [{ kind: "addStat", stat: "insight", amount: 1 }, { kind: "addStat", stat: "karma", amount: 1 }],
  mercy: [{ kind: "addStat", stat: "karma", amount: 2 }],
  inquiry: [{ kind: "addStat", stat: "insight", amount: 2 }],
  deceit: [{ kind: "addStat", stat: "karma", amount: -2 }],
  force: [{ kind: "addStat", stat: "qi", amount: 1 }, { kind: "addStat", stat: "karma", amount: -1 }],
  quiet: [{ kind: "addStat", stat: "qi", amount: 2 }],
};

export const pick = <T,>(items: readonly T[], seed: number): T => items[((seed % items.length) + items.length) % items.length];

export type Extra = NonNullable<Scene["extras"]>[number];
const hero = (field: "gender" | "looks" | "background" | "attire" | "status", is: string): Condition => ({ kind: "hero", field, is: [is] });
export const BANDS: RelBand[] = ["far", "below", "at", "above"];

/** One extra per hero value, in one group, so a scene shows the one that fits. */
export function heroGroup<V extends string>(
  field: "gender" | "looks" | "background" | "attire" | "status",
  options: readonly { value: V }[],
  table: Record<V, string[]>,
  group: string,
  seed: number,
  slots: Record<string, string>,
): Extra[] {
  return options.map((o) => ({ when: [hero(field, o.value)], paragraphs: [fill(pick(table[o.value], seed), slots)], group }));
}

/** One extra per band of the hero’s realm against the road’s, in one group. */
export function realmGroup(kind: RealmKind, road: number, seed: number, slots: Record<string, string>, group: string): Extra[] {
  return BANDS.map((band) => {
    const { min, max } = bandBounds(band, road);
    return {
      when: [{ kind: "realm" as const, ...(min !== undefined ? { min } : {}), ...(max !== undefined ? { max } : {}) }],
      paragraphs: [fill(pick(REALM_REACT[kind][band], seed), slots)],
      group,
    };
  });
}

export const DEEP_READ: Record<RelBand, string> = {
  far: "The characters are in a qi-script your body cannot follow yet. You catch the shape of the last line and nothing of its breath, and {kname} will have to read you the rest.",
  below: "You read most of it, and lose the last clause to a qi-script you are a realm too low to feel. It is enough to know what it is about.",
  at: "You read it whole, in the cultivator’s script it was written in, and each character settles in you like a stone into a socket it was cut for.",
  above: "You read it whole, and then you read what the writer left out, in the spaces between lines. Someone wrote this knowing a better cultivator would come.",
};

/** Four distinct tones for one scene’s choices, starting with the approach’s own. */
export function sceneTones(mode: ChoiceTone, stage: number, approach: number): ChoiceTone[] {
  const start = TONE_RING.indexOf(mode);
  const others: ChoiceTone[] = [];
  for (let i = 1; others.length < 3 && i <= TONE_RING.length; i++) {
    const tone = TONE_RING[(start + i + stage + approach) % TONE_RING.length];
    if (tone !== mode && !others.includes(tone)) others.push(tone);
  }
  return [mode, ...others];
}

/** The slots a choice’s label is filled with: the obstacle and the ally come from the pools of the choice’s own tone. */
export function labelSlots(slots: Record<string, string>, tone: ChoiceTone, seed: number): Record<string, string> {
  return { ...slots, obstacle: pick(OBSTACLES[tone], seed + 1), ally: pick(ALLIES[tone], seed + 2) };
}

/** Builds the 25 scenes of one realm road: entry, four approaches of five scenes, a hidden route of three, and a return. */
export function buildRoad2(spec: RoadSpec2, ctx: RoadContext2): Scene[] {
  const { id } = spec;
  const R = ctx.realm;
  const modes = approachModes(ctx.index);
  const done = doneFlag2(ctx.wayside, id);
  const base: Record<string, string> = { place: spec.place, keeper: spec.keeper, kname: spec.kname, relic: spec.relic, omen: spec.omen, secret: spec.secret };
  const scenes: Scene[] = [];
  const need = REALMS[R].name;

  // ── The entry: four approaches, one of them for a realm above the road’s, and two ways for a hero to meet the road on their own terms.
  scenes.push({
    id: `${id}_entry`,
    title: `Realm Road: ${spec.title}`,
    paragraphs: [fill(spec.intro, base)],
    extras: [
      ...heroGroup("attire", ATTIRES, DRESS, "dress", ctx.index, base),
      ...heroGroup("status", STATUSES, BIRTH, "birth", ctx.index + 1, base),
      ...realmGroup("entry", R, ctx.index, base, "realm"),
    ],
    choices: [
      ...modes.map((mode, a): Choice => {
        const choice: Choice = {
          id: `approach_${a}`,
          label: fill(pickFit(APPROACH_LABEL2[mode], ctx.index + a, spec.focus[a]), { ...base, focus: spec.focus[a] }),
          tone: mode,
          next: `${id}_a${a}s0`,
          effects: [{ kind: "setFlag", flag: roadFlag(id, `approach_${a}`) }],
        };
        // The third approach asks for the road’s realm and lets a lesser cultivator try at a cost. The fourth is barred below it.
        if (a === 2) choice.needsRealm = R;
        if (a === 3) {
          choice.requires = [{ kind: "realm", min: R }];
          choice.lockedHint = `The deep door at ${spec.focus[a]} opens only to ${need} or above.`;
        }
        return choice;
      }),
      {
        id: "humble",
        label: fill("Tell {kname} you are not equal to {place}, and ask what a lesser traveller may do.", base),
        tone: "mercy",
        next: `${id}_a0s0`,
        requires: [{ kind: "realm", max: R - 1 }],
        lockedHint: `Only a traveller below ${need} can ask for the lesser way.`,
        effects: [{ kind: "setFlag", flag: roadFlag(id, "humbled") }, { kind: "addStat", stat: "karma", amount: 1 }, { kind: "setFlag", flag: roadFlag(id, "approach_0") }],
      },
    ],
  });

  // ── Four approaches of five scenes.
  modes.forEach((mode, a) => {
    for (let stage = 0; stage < 5; stage++) {
      const seed = ctx.index * 7 + a * 3 + stage * 5;
      const slots = { ...base, focus: spec.focus[a], obstacle: pick(OBSTACLES[mode], seed + 1), ally: pick(ALLIES[mode], seed + 2) };
      const next = stage < 4 ? `${id}_a${a}s${stage + 1}` : `${id}_return`;
      const choices: Choice[] = sceneTones(mode, stage, a).map((tone, c) => {
        const effects: Effect[] = [...TONE_EFFECTS[tone]];
        if (stage === 3) effects.push({ kind: "setFlag", flag: roadFlag(id, `crisis_${tone}`) });
        return { id: tone, label: fill(pickFit(CHOICE_LABEL2[tone], seed + c * 2 + 3, slots.focus), labelSlots(slots, tone, seed + c)), tone, next, effects };
      });
      const extras: Extra[] = [];
      if (stage === 0) extras.push(...realmGroup("open", R, seed, slots, "realm"));
      if (stage === 1) {
        extras.push(...heroGroup("background", BACKGROUNDS, TRADE, "trade", seed, slots), ...heroGroup("looks", LOOKS, FACE, "face", seed + 1, slots));
        // A hero whose standing is high enough makes the road yield to their name.
        choices.push({
          id: "rank",
          label: fill(
            focusKind(slots.focus) === "place"
              ? "Let your name and bearing speak for you at {focus}, and wait for the door to open."
              : "Let your name and bearing speak for you here, and wait for {focus} to yield.",
            slots,
          ),
          tone: "force",
          next,
          requires: [{ kind: "standing", min: rankNeeded(R) }],
          lockedHint: `Your standing is not high enough here. Birth, dress and realm all count, and ${spec.kname} wants ${rankNeeded(R)}.`,
          effects: [
            { kind: "setFlag", flag: roadFlag(id, "pulled_rank") },
            { kind: "addStat", stat: "karma", amount: -1 },
            { kind: "addCultivation", amount: 2 + R },
          ],
        });
      }
      if (stage === 2) extras.push(...heroGroup("gender", GENDERS, MANNER, "manner", seed, slots));
      if (stage === 3) {
        extras.push(...realmGroup("crisis", R, seed, slots, "realm"));
        choices.push({
          id: "draw_qi",
          label: fill("Draw on your cultivation and let your qi settle over {place} before you answer.", slots),
          tone: "quiet",
          next,
          requires: [{ kind: "realm", min: R }],
          lockedHint: `Needs ${need} cultivation or higher.`,
          effects: [
            { kind: "addCultivation", amount: 4 + R * 2 },
            { kind: "addStat", stat: "qi", amount: 3 },
            { kind: "setFlag", flag: roadFlag(id, "used_qi") },
            { kind: "setFlag", flag: roadFlag(id, "crisis_quiet") },
          ],
        });
        // The reach: a realm above the road’s. Below it, it costs cultivation, qi and the Elder’s respect. Two realms above it, it is easy.
        choices.push({
          id: "reach",
          label: fill(
            focusKind(slots.focus) === "person"
              ? "Reach beyond what you are and let your qi meet {focus} until it answers."
              : "Reach beyond what you are and push your qi into {focus} until it answers.",
            slots,
          ),
          tone: "force",
          next,
          needsRealm: Math.min(R + 1, REALMS.length - 1),
          effects: [
            { kind: "addCultivation", amount: 6 + R * 2 },
            { kind: "setFlag", flag: roadFlag(id, "reached") },
            { kind: "setFlag", flag: roadFlag(id, "crisis_force") },
          ],
        });
      }
      if (stage === 4) {
        extras.push(...heroGroup("attire", ATTIRES, SEND_OFF, "sendoff", seed, slots));
        if (a === 2) {
          choices.push({
            id: "hidden_stair",
            label: fill(
              focusKind(slots.focus) === "thing"
                ? "Notice the loose board beneath {focus} that you walked past, and lift it."
                : "Notice the way behind {focus} that you walked past, and go down.",
              slots,
            ),
            tone: "inquiry",
            next: `${id}_h0`,
            requires: [{ kind: "stat", stat: "insight", min: 12 }],
            lockedHint: "You have not read this place closely enough yet. Insight 12 is needed.",
            effects: [{ kind: "addStat", stat: "insight", amount: 1 }],
          });
        }
      }
      scenes.push({
        id: `${id}_a${a}s${stage}`,
        title: `${spec.title}: ${STAGE_TITLE[mode][stage]}`,
        paragraphs: [fill(spec.beats[a][stage], slots), fill(pick(MODE_BEAT2[mode], seed + a), slots)],
        ...(extras.length ? { extras } : {}),
        choices,
      });
    }
  });

  // ── The hidden route: three scenes the road wrote for itself.
  HIDDEN_TITLE2.forEach((title, n) => {
    const slots = { ...base, focus: spec.focus[2], obstacle: pick(OBSTACLES[modes[2]], ctx.index), ally: pick(ALLIES[modes[2]], ctx.index) };
    const next = n < 2 ? `${id}_h${n + 1}` : `${id}_return`;
    const final: Effect[] = n === 2 ? [{ kind: "setFlag", flag: roadFlag(id, "found_secret") }, { kind: "addCultivation", amount: 5 + R * 2 }] : [];
    scenes.push({
      id: `${id}_h${n}`,
      title: `${spec.title}: ${title}`,
      paragraphs: [fill(spec.deep[n], slots)],
      ...(n === 2 ? { extras: BANDS.map((band) => ({ when: [{ kind: "realm" as const, ...bandBounds(band, R) }], paragraphs: [fill(DEEP_READ[band], slots)], group: "read" })) } : {}),
      choices: sceneTones(modes[2], n, 2).map((tone, c) => ({
        id: tone,
        label: fill(pickFit(CHOICE_LABEL2[tone], ctx.index + n * 3 + c, slots.focus), labelSlots(slots, tone, ctx.index + n + c)),
        tone,
        next,
        effects: [...TONE_EFFECTS[tone], ...final],
      })),
    });
  });

  // ── The way back.
  const doneEffect: Effect = { kind: "setFlag", flag: done };
  scenes.push({
    id: `${id}_return`,
    title: `${spec.title}: The Way Back`,
    paragraphs: [fill(pick(RETURN_OPEN2, ctx.index), base), fill(spec.close, base)],
    extras: [
      ...modes.map((mode, a) => ({
        when: [{ kind: "flag" as const, flag: roadFlag(id, `approach_${a}`) }],
        paragraphs: [fill(pickFit(RETURN_APPROACH2[mode], ctx.index, spec.focus[a]), { ...base, focus: spec.focus[a] })],
        group: "approach",
      })),
      ...(Object.keys(RETURN_CRISIS2) as ChoiceTone[]).map((tone) => ({
        when: [{ kind: "flag" as const, flag: roadFlag(id, `crisis_${tone}`) }],
        paragraphs: [fill(RETURN_CRISIS2[tone], base)],
        group: "crisis",
      })),
      { when: [{ kind: "flag", flag: roadFlag(id, "found_secret") }], paragraphs: [fill(RETURN_FOUND_SECRET2, base)] },
      { when: [{ kind: "flag", flag: roadFlag(id, "pulled_rank") }], paragraphs: [fill(RETURN_PULLED_RANK, base)], group: "manner" },
      { when: [{ kind: "flag", flag: roadFlag(id, "humbled") }], paragraphs: [fill(RETURN_HUMBLED, base)], group: "manner" },
      { when: [{ kind: "flag", flag: roadFlag(id, "reached") }], paragraphs: [fill(RETURN_REACHED, base)], group: "manner" },
      { when: [{ kind: "flag", flag: roadFlag(id, "used_qi") }], paragraphs: [fill(RETURN_USED_QI2, base)], group: "manner" },
      ...realmGroup("close", R, ctx.index, base, "realm"),
    ],
    choices: [
      { id: "report", label: fill(RETURN_CHOICES2.report, base), tone: "truth", next: ctx.waysideId, npcScenario: reportId2(id), effects: [doneEffect] },
      { id: "silent", label: fill(RETURN_CHOICES2.silent, base), tone: "deceit", next: ctx.waysideId, effects: [doneEffect, { kind: "addStat", stat: "karma", amount: -1 }] },
      { id: "rest", label: fill(RETURN_CHOICES2.rest, base), tone: "quiet", next: ctx.waysideId, effects: [doneEffect, { kind: "addCultivation", amount: 3 + R }] },
      {
        id: "keep",
        label: fill(RETURN_CHOICES2.keep, base),
        tone: "inquiry",
        next: ctx.waysideId,
        effects: [doneEffect, { kind: "setFlag", flag: roadFlag(id, "kept_relic") }, { kind: "addStat", stat: "insight", amount: 1 }],
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

/** The Elder’s reaction to a report. Her memory lines read what the hero did and how far above or below the road they stood. */
export function buildReport2(spec: RoadSpec2, ctx: RoadContext2): NpcScenario {
  const id = spec.id;
  const R = ctx.realm;
  const slots = { place: spec.place, kname: spec.kname, keeper: spec.keeper, relic: spec.relic, omen: spec.omen, secret: spec.secret };
  const line = (tier: keyof typeof REPORT_LINES2) => fill(pick(REPORT_LINES2[tier], ctx.index + tier.length), slots);
  return {
    id: reportId2(id),
    summary: `The player reports on ${spec.place}.`,
    delta: pick(REPORT_DELTAS, ctx.index),
    lines: { hostile: line("hostile"), wary: line("wary"), neutral: line("neutral"), warm: line("warm"), devoted: line("devoted") },
    memory: [
      { when: [{ kind: "flag", flag: roadFlag(id, "humbled") }], line: fill(REPORT_MEMORY2.humble, slots) },
      { when: [{ kind: "flag", flag: roadFlag(id, "found_secret") }], line: fill(REPORT_MEMORY2.secret, slots) },
      { when: [{ kind: "flag", flag: roadFlag(id, "pulled_rank") }], line: fill(REPORT_MEMORY2.rank, slots) },
      { when: [{ kind: "flag", flag: roadFlag(id, "kept_relic") }], line: fill(REPORT_MEMORY2.relic, slots) },
      { when: [{ kind: "tone", tone: "deceit", min: 3, within: 6 }], line: fill(REPORT_MEMORY2.deceit, slots) },
      { when: [{ kind: "realm", min: R + 2 }], line: fill(REPORT_MEMORY2.over, slots) },
      // Two realms below a road at the second realm is Mortal, which a hero in the later books almost never is, so the line starts at the third realm.
      ...(R >= 3 ? [{ when: [{ kind: "realm" as const, min: 1, max: R - 2 }], line: fill(REPORT_MEMORY2.under, slots) }] : []),
    ],
    remember: [reportedFlag2(id)],
  };
}

export type { Hero };
export { standingOf };
