import { REALMS } from "@/engine/cultivation";
import { LAYERS, ORDINALS } from "@/engine/stage-text";
import { isMajor, layerName, layerOfLevel, realmOfLevel, TOP_LEVEL, wallPrepFlag, WALL_FAIL_PREFIX, WALL_PREP_PREFIX } from "@/engine/stages";
import type { Choice, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";

/** How a wall is gone at again, asked about, pressed on to and left. A wall is one of a hundred, so each of these has several wordings and a wall reads one of them. */
const REMEMBER = [
  "You have gone at the wall this way before, and the work remembers you.",
  "This way of going at the wall is not new to you; your hands know the first third of it.",
  "You have tried this road at the wall already, and the wall has kept a note of it.",
  "The wall has seen this approach from you before. It does not hold it against you, and it does not forget.",
  "You have worked the wall like this once, and the stone is a little wiser than it was.",
  "Your last attempt this way is still in the grain of the wall, and you feel it as you begin.",
];
const CONSULT = [
  "Ask Elder Su what she makes of the wall.",
  "Put the wall to Elder Su, and listen to what she says.",
  "Ask the Elder how she would go at it, if it were hers.",
  "Take the wall to Elder Su, and ask her to be plain.",
  "Ask Elder Su whether she has ever stood at a wall like this.",
  "Tell Elder Su where you are stuck, and wait.",
];
const PRESS = [
  "Go on to the hour as you are.",
  "Take the hour as it comes, with what you have.",
  "Skip the preparation and meet the hour.",
  "Let the work wait, and go on into the hour.",
  "Go on without further trying, and see what the hour makes of you.",
  "Go in to the hour as you stand.",
];
const LEAVE = [
  "Leave the work and go back to the stations.",
  "Put the work down and return to the stations.",
  "Walk away from the wall, for now, to the stations.",
  "Leave it for another day and go back to the stations.",
  "Give the wall its peace, and go back to the stations.",
  "Turn back from the wall, and rejoin the stations.",
];
import {
  AFTER_OPENING,
  CLOSE_OPENING,
  HOUR_OPENING,
  KEY_LINE,
  METHOD_ASK,
  METHOD_LABEL,
  METHOD_TITLE,
  METHOD_TONE,
  METHODS,
  NEXT_LINE,
  OPENING,
  REALM_LEX,
  REST_OPENING,
  VOICE_OPENING,
  WALL_LEX,
} from "./lexicon";

/** The scenes of the Breakthrough Roads: a hundred walls, one for each step of the ladder, and ten scenes at each. */
export const ASCENT_WAYSIDE_BASE = 130;
const pad = (n: number) => String(n).padStart(2, "0");
export const wallId = (level: number, role: string) => `bw${pad(level)}_${role}`;
export const hubId = (realm: number) => `wayside_bw_${realm}`;
export const BACK13 = (origin: string) => `back13_${origin}`;

const cap = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** Fills `{slot}` and `{Slot}` (capitalised) in a line. */
export function fill(text: string, slots: Record<string, string>): string {
  return text.replace(/\{([A-Za-z]+)\}/g, (_, key: string) => {
    const lower = key.charAt(0).toLowerCase() + key.slice(1);
    const value = slots[key] ?? slots[lower];
    if (value === undefined) throw new Error(`no slot "${key}" in "${text}"`);
    return key.charAt(0) === key.charAt(0).toUpperCase() && slots[key] === undefined ? cap(value) : value;
  });
}

const pick = <T,>(list: readonly T[], i: number): T => list[((i % list.length) + list.length) % list.length];

export const scenarioId = (kind: "COUNSEL" | "PRESS" | "REPORT", realm: number) => `BW_${kind}_${realm}`;

/** The words a wall’s scenes share. */
function slotsFor(level: number): Record<string, string> {
  const r = realmOfLevel(level);
  const s = layerOfLevel(level);
  const [station, key, , echo] = WALL_LEX[r][s];
  return {
    place: REALM_LEX[r].place,
    station,
    key,
    echo,
    name: layerName(level),
    next: level < TOP_LEVEL ? layerName(level + 1) : layerName(level),
    ord: ORDINALS[s],
    realm: REALMS[r].name,
  };
}

const levelIs = (level: number): Condition => ({ kind: "level", min: level, max: level });
const levelFrom = (level: number): Condition => ({ kind: "level", min: level });
const flagIs = (flag: string, is = true): Condition => ({ kind: "flag", flag, is });
const count = (prefix: string, bounds: { min?: number; max?: number }): Condition => ({ kind: "count", prefix, ...bounds });

/** One choice. Every choice of the roads names its tone and where it goes. */
const go = (id: string, label: string, tone: Choice["tone"], next: string, rest: Partial<Choice> = {}): Choice => ({ id, label, tone, next, ...rest });

/** The ten scenes of one wall. `level` is the layer the wall stands above; the wall into level+1 is the one the hero is trying. */
export function buildWall(level: number, origin: string): Scene[] {
  const r = realmOfLevel(level);
  const s = layerOfLevel(level);
  const apex = level === TOP_LEVEL;
  const target = level + 1;
  const slots = slotsFor(level);
  const [, , counsel] = WALL_LEX[r][s];
  const lex = REALM_LEX[r];
  const hub = hubId(r);
  const id = (role: string) => wallId(level, role);
  const wallParagraph = LAYERS[r][s][1];
  const prefix = `${WALL_PREP_PREFIX}${target}_`;
  const failPrefix = `${WALL_FAIL_PREFIX}${target}_`;
  const leave = (label: string, tone: Choice["tone"] = "quiet", idSuffix = "hub"): Choice => go(`${idSuffix}_${tone}`, label, tone, hub);
  const nextWall = level < TOP_LEVEL ? LAYERS[realmOfLevel(level + 1)][layerOfLevel(level + 1)][1] : "";
  const heading = `${apex ? "The Last Height" : `Above the ${slots.name}`}`;

  const entry: Scene = {
    id: id("a"),
    title: `${heading}: The Wall`,
    paragraphs: [fill(pick(OPENING, level), slots), wallParagraph, fill(pick(KEY_LINE, level + r), slots)],
    extras: apex
      ? []
      : [{ when: [levelFrom(target)], paragraphs: ["You have passed this wall already. You stand here as one who remembers it, and the station remembers you."] }],
    choices: [
      ...METHODS.map((m, k) => go(`way_${m}`, fill(pick(METHOD_LABEL[m], level + k), slots), METHOD_TONE[m], id(`m${k}`))),
      leave(`Leave ${slots.station} and go back to the other stations.`),
    ],
  };

  const methods: Scene[] = METHODS.map((m, k) => {
    const flag = wallPrepFlag(target, k + 1);
    const work: Record<string, { label: string; effects: Effect[]; need?: Condition[]; hint?: string }> = {
      temper: {
        label: "Work at it until it hurts, and then a little longer.",
        effects: [{ kind: "addStat", stat: "qi", amount: -3 }],
        need: [{ kind: "stat", stat: "qi", min: 6 }],
        hint: "You have not the qi left to work at the wall this way.",
      },
      comprehend: { label: "Study until the teaching turns over in your hand.", effects: [{ kind: "addStat", stat: "insight", amount: 2 }] },
      borrow: { label: "Take what they offer, and thank them for it.", effects: [{ kind: "addNpc", metric: "trust", amount: 1 }, { kind: "addStat", stat: "karma", amount: 1 }] },
      endure: { label: "Sit until the sitting is the whole of what you are.", effects: [{ kind: "addStat", stat: "qi", amount: 2 }] },
    };
    const w = work[m];
    return {
      id: id(`m${k}`),
      title: `${METHOD_TITLE[k]}: ${slots.name}`,
      paragraphs: [fill(lex.methods[k], slots), fill(pick(METHOD_ASK, level + k), slots)],
      extras: [{ when: [flagIs(flag)], paragraphs: [pick(REMEMBER, level + k)] }],
      choices: [
        go("work", w.label, METHOD_TONE[m], id("hour"), {
          requires: [levelIs(level), flagIs(flag, false), ...(w.need ?? [])],
          lockedHint: apex ? "There is no wall left to work against." : w.hint ?? "You have already gone at this wall this way, or have passed it.",
          effects: [{ kind: "setFlag", flag }, { kind: "addCultivation", amount: 1 + Math.floor(r / 2) }, ...w.effects],
        }),
        go("consult", pick(CONSULT, level + k), "inquiry", id("hour"), { npcScenario: scenarioId("COUNSEL", r) }),
        go("press_on", pick(PRESS, level + k), "quiet", id("hour")),
        leave(pick(LEAVE, level + k)),
      ],
    };
  });

  const hour: Scene = {
    id: id("hour"),
    title: apex ? "The Hour of the Last Height" : `The Hour of the ${slots.name}`,
    paragraphs: [fill(pick(HOUR_OPENING, level), slots)],
    extras: [
      { when: [count(prefix, { min: 4 })], paragraphs: ["You have gone at this wall by all four ways, and each of them is in your hands tonight."], group: "prep" },
      { when: [count(prefix, { min: 2, max: 3 })], paragraphs: ["You have gone at the wall by more than one way, and it shows in how you stand."], group: "prep" },
      { when: [count(prefix, { min: 1, max: 1 })], paragraphs: ["You have done some of the work, and the rest of it is trust."], group: "prep" },
      { when: [count(prefix, { max: 0 })], paragraphs: ["You have done none of the work against this wall. It will know."], group: "prep" },
      ...(apex ? [] : [{ when: [count(failPrefix, { min: 1 }), levelIs(level)], paragraphs: ["The wall has thrown you before. You remember the floor, and it is a good deal closer than it looks."], group: "fell" }]),
    ],
    choices: [
      go("press_force", apex ? "Throw yourself at the height, to see what it is made of." : "Throw everything you have at the wall.", "force", id("after"), {
        requires: [levelIs(level)],
        lockedHint: apex ? "There is nothing above you to throw yourself at." : "You are no longer at this wall.",
        npcScenario: scenarioId("PRESS", r),
        effects: [{ kind: "pushWall" }, { kind: "addStat", stat: "qi", amount: -2 }],
      }),
      go("press_steady", apex ? "Stand on the height and let it hold you." : "Lean on the wall steadily, as on a door you mean to open.", "quiet", id("after"), {
        requires: [levelIs(level)],
        lockedHint: apex ? "There is nothing above you to stand against." : "You are no longer at this wall.",
        npcScenario: scenarioId("PRESS", r),
        effects: [{ kind: "pushWall" }, { kind: "addStat", stat: "insight", amount: 1 }],
      }),
      go("wait", "Wait for a riper hour, and sit down.", "quiet", id("rest")),
      leave("Turn aside, and go back to the stations."),
    ],
  };

  const win = LAYERS[r][s][2];
  const fail = LAYERS[r][s][3];
  const major = !apex && isMajor(target);
  const arrived = apex ? "" : major ? `You are ${/^[AEIOU]/.test(REALMS[realmOfLevel(target)].styled) ? "an" : "a"} ${REALMS[realmOfLevel(target)].styled} now.` : `You stand now on the ${ORDINALS[layerOfLevel(target)]} Layer of ${REALMS[r].name}, the ${layerName(target)}.`;
  const after: Scene = {
    id: id("after"),
    title: apex ? "After the Last Height" : `After the Hour of the ${slots.name}`,
    paragraphs: [fill(pick(AFTER_OPENING, level), slots)],
    extras: apex
      ? [{ when: [], paragraphs: ["There is nothing above to break. You have been the thing that rises, and you are what is left when it stops."] }]
      : [
          { when: [levelFrom(target)], paragraphs: [`${win} ${arrived}`], group: "out" },
          { when: [count(failPrefix, { min: 1 }), levelIs(level)], paragraphs: [`${fail} The wall holds. You are thrown back, and you know it a little better than you did.`], group: "out" },
          { when: [levelIs(level)], paragraphs: ["The wall has not given. It has not thrown you either. You were not ready to push at it, in qi or in insight or in the hardness of the thing itself, and it does not mind."], group: "out" },
        ],
    choices: [
      go("sit", "Sit down where you are and gather yourself.", "quiet", id("rest")),
      go("elder", "Go to find Elder Su, and tell her how it went.", "mercy", id("voice")),
      go("walk", "Walk the station once more, slowly, and see what it looks like now.", "inquiry", id("close")),
      leave("Go back to the stations."),
    ],
  };

  const rest: Scene = {
    id: id("rest"),
    title: apex ? "The Quiet at the Top" : `The Settling of the ${slots.name}`,
    paragraphs: [fill(pick(REST_OPENING, level), slots), lex.rest],
    choices: [
      go("talk", "Find the Elder and talk, now that the hour is over.", "mercy", id("voice"), { effects: [{ kind: "addStat", stat: "qi", amount: 3 }] }),
      go("walk_on", "Walk the yard slowly, and let your body do the thinking.", "inquiry", id("close")),
      go("stay", "Stay a little longer, and let the place teach you.", "quiet", id("close"), { effects: [{ kind: "addStat", stat: "insight", amount: 1 }] }),
      leave("Go back to the stations."),
    ],
  };

  const voice: Scene = {
    id: id("voice"),
    title: apex ? "The Elder at the Last Height" : `The Elder at ${slots.station}`,
    paragraphs: [fill(pick(VOICE_OPENING, level), slots)],
    interjections: [{ when: [], line: counsel }],
    choices: [
      go("report", "Tell her honestly what the wall did, and what you did.", "truth", id("close"), { npcScenario: scenarioId("REPORT", r) }),
      go("ask", "Ask her what the next wall will be like.", "inquiry", id("close")),
      go("silent", "Say nothing, and stand beside her.", "quiet", id("close")),
      leave("Thank her, and go back to the stations."),
    ],
  };

  const close: Scene = {
    id: id("close"),
    title: apex ? "What the Ladder Leaves" : `What the ${slots.name} Leaves`,
    paragraphs: [fill(pick(CLOSE_OPENING, level), slots), ...(apex ? [] : [fill(pick(NEXT_LINE, level), { ...slots, wall: nextWall })])],
    extras: apex
      ? [{ when: [], paragraphs: ["There is no wall after this one. There is the morning, and the lamp, and whoever comes up the steps next in the rain."] }]
      : [{ when: [levelFrom(target)], paragraphs: ["This wall is behind you now. The next is the only one that is yours."], group: "state" }, { when: [levelIs(level)], paragraphs: ["This wall is still above you. It will be there when you are ready, and not before."], group: "state" }],
    choices: [
      go("stations", "Go back to the stations and see which wall is next.", "inquiry", hub),
      go("wander", "Leave this wall and walk the other stations in no hurry.", "mercy", hub),
      go("linger", "Stay a moment longer, then go.", "truth", hub),
      go("leave_road", "Leave the road and go back to where you came from.", "quiet", BACK13(origin)),
    ],
  };

  return [entry, ...methods, hour, after, rest, voice, close];
}

const FRAMES: Record<"COUNSEL" | "PRESS" | "REPORT", Record<Tier, string>> = {
  COUNSEL: {
    hostile: "You ask me now? {core} Do not mistake my answering for kindness.",
    wary: "I will answer, though I am watching how you use it. {core}",
    neutral: "{core}",
    warm: "Of course I will tell you. {core} I would rather you came back whole.",
    devoted: "Ask me anything, always. {core} And come back and tell me how it went.",
  },
  PRESS: {
    hostile: "So you will push at it regardless. {core} Do not expect me to catch you.",
    wary: "You have chosen to press. {core} I am not sure you are ready.",
    neutral: "{core}",
    warm: "Then press, and press well. {core} I will be here.",
    devoted: "I have faith in you, and I do not say that lightly. {core} Go.",
  },
  REPORT: {
    hostile: "You come to report to me as though I were your keeper. {core} Go on, then.",
    wary: "I will hear it, and I will weigh it. {core}",
    neutral: "{core}",
    warm: "I am glad you came to tell me. {core}",
    devoted: "You always come to tell me, and it is the best part of my day. {core}",
  },
};

/** The Elder’s three answers at the walls of a realm: when asked for counsel, when the hero presses, and when the hero reports. */
export function buildScenarios(realm: number): NpcScenario[] {
  const lex = REALM_LEX[realm];
  const summary = {
    COUNSEL: `The hero asks the Elder for counsel at a wall of ${REALMS[realm].name}.`,
    PRESS: `The hero presses at a wall of ${REALMS[realm].name}.`,
    REPORT: `The hero reports to the Elder on a wall of ${REALMS[realm].name}.`,
  } as const;
  const core = { COUNSEL: lex.counsel, PRESS: lex.press, REPORT: lex.report } as const;
  const delta = { COUNSEL: { trust: 1 }, PRESS: { respect: 1 }, REPORT: { trust: 2, respect: 1 } } as const;
  return (["COUNSEL", "PRESS", "REPORT"] as const).map((kind) => ({
    id: scenarioId(kind, realm),
    summary: summary[kind],
    delta: delta[kind],
    lines: Object.fromEntries((Object.keys(FRAMES[kind]) as Tier[]).map((tier) => [tier, fill(FRAMES[kind][tier], { core: core[kind] })])) as Record<Tier, string>,
    ...(kind === "REPORT"
      ? {
          memory: [
            {
              when: [count(WALL_FAIL_PREFIX, { min: 3 })],
              line: lex.thrown,
            },
          ],
        }
      : {}),
  }));
}
