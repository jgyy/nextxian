import { isTone } from "./tone";
import type { Choice, ChoiceTone, Condition, Effect, Mood, NpcMetric, NpcScenario, NpcState, PlayerStat, Remark, Scene } from "./types";

/**
 * A compact text format for scenes, so a long story can be written without the weight of object literals.
 *
 *     === scene_id | Scene heading
 *     A paragraph is any plain line.
 *     + flag & !other_flag | A paragraph shown only when the condition holds.
 *     +[group] flag | An alternative: of the extras sharing a group, only the first that holds is shown.
 *     @ realm>=2 | ren | A companion (or "elder") speaks when the scene opens and the condition holds.
 *     > truth | What the player says. | next_scene | +flag karma+2 bond:ren+3 npc:SCENARIO | insight>=12 | Hint when locked.
 *     #end Heading of an ending scene (such a scene has no choices)
 *     // a comment
 *
 * Conditions are joined with `&`: `flag`, `!flag`, `insight>=12`, `karma<=-10`, `trust>=20`, `realm>=2`, `roads>=3`,
 * `bond:ren>=10`, `since:flag>=4`, `decisions>=30`, `mood:afraid`, `scene:prefix`, `count:flag_prefix>=3`, `said:SCENARIO`, `tone:deceit>=3/6`.
 * Effects are separated by spaces: `+flag`, `-flag`, `karma+3`, `cult+4`, `trust-2`, `bond:ren+5`, `npc:ID`, `ally:ID`.
 * Unless the effects start with `=`, a choice also gets the small stat drift that goes with its tone.
 */

const TONE_EFFECTS: Record<ChoiceTone, Effect[]> = {
  truth: [{ kind: "addStat", stat: "insight", amount: 1 }, { kind: "addStat", stat: "karma", amount: 1 }],
  mercy: [{ kind: "addStat", stat: "karma", amount: 2 }],
  inquiry: [{ kind: "addStat", stat: "insight", amount: 2 }],
  deceit: [{ kind: "addStat", stat: "karma", amount: -2 }],
  force: [{ kind: "addStat", stat: "qi", amount: 1 }, { kind: "addStat", stat: "karma", amount: -1 }],
  quiet: [{ kind: "addStat", stat: "qi", amount: 2 }],
};

const STATS: PlayerStat[] = ["qi", "karma", "insight"];
const METRICS: NpcMetric[] = ["trust", "respect", "fear", "suspicion"];
const MOODS: Mood[] = ["furious", "afraid", "suspicious", "guarded", "stern", "softened", "tender"];

class MarkupError extends Error {
  constructor(where: string, message: string) {
    super(`${where}: ${message}`);
  }
}

/** Reads `>=n` and `<=n` off the end of a token, returning the name and the bounds. */
function bounds(token: string, where: string): { name: string; min?: number; max?: number } {
  const m = /^(.*?)(>=|<=)(-?\d+)$/.exec(token);
  if (!m) throw new MarkupError(where, `"${token}" needs >= or <= and a number`);
  const n = Number(m[3]);
  return m[2] === ">=" ? { name: m[1], min: n } : { name: m[1], max: n };
}

export function parseConditions(source: string, where: string): Condition[] {
  const out: Condition[] = [];
  for (const raw of source.split("&")) {
    const t = raw.trim();
    if (!t) continue;
    if (/^!?[a-z0-9_]+$/.test(t)) {
      out.push(t.startsWith("!") ? { kind: "flag", flag: t.slice(1), is: false } : { kind: "flag", flag: t });
    } else if (t.startsWith("bond:")) {
      const { name, ...rest } = bounds(t.slice(5), where);
      out.push({ kind: "bond", npc: name, ...rest });
    } else if (t.startsWith("since:")) {
      const { name, ...rest } = bounds(t.slice(6), where);
      out.push({ kind: "since", flag: name, ...rest });
    } else if (t.startsWith("mood:")) {
      const mood = t.slice(5) as Mood;
      if (!MOODS.includes(mood)) throw new MarkupError(where, `unknown mood "${mood}"`);
      out.push({ kind: "mood", is: mood });
    } else if (t.startsWith("count:")) {
      const { name, ...rest } = bounds(t.slice(6), where);
      out.push({ kind: "count", prefix: name, ...rest });
    } else if (t.startsWith("scene:")) {
      out.push({ kind: "scene", prefix: t.slice(6) });
    } else if (t.startsWith("said:")) {
      const body = t.slice(5);
      const m = /^([A-Z0-9_]+)(?:>=(\d+))?$/.exec(body);
      if (!m) throw new MarkupError(where, `bad said condition "${t}"`);
      out.push(m[2] ? { kind: "said", scenario: m[1], min: Number(m[2]) } : { kind: "said", scenario: m[1] });
    } else if (t.startsWith("tone:")) {
      const m = /^tone:([a-z]+)>=(\d+)(?:\/(\d+))?$/.exec(t);
      if (!m || !isTone(m[1])) throw new MarkupError(where, `bad tone condition "${t}"`);
      out.push({ kind: "tone", tone: m[1], min: Number(m[2]), ...(m[3] ? { within: Number(m[3]) } : {}) });
    } else {
      const { name, ...rest } = bounds(t, where);
      if ((STATS as string[]).includes(name)) out.push({ kind: "stat", stat: name as PlayerStat, ...rest });
      else if ((METRICS as string[]).includes(name)) out.push({ kind: "npc", metric: name as NpcMetric, ...rest });
      else if (name === "realm") out.push({ kind: "realm", ...rest });
      else if (name === "roads") out.push({ kind: "roads", ...rest });
      else if (name === "decisions") out.push({ kind: "decisions", ...rest });
      else throw new MarkupError(where, `unknown condition "${t}"`);
    }
  }
  return out;
}

interface ParsedEffects {
  effects: Effect[];
  npcScenario?: string;
  allyScenario?: string;
  bare: boolean;
}

export function parseEffects(source: string, where: string): ParsedEffects {
  const effects: Effect[] = [];
  let npcScenario: string | undefined;
  let allyScenario: string | undefined;
  let bare = false;
  for (const t of source.split(/\s+/).filter(Boolean)) {
    let m: RegExpExecArray | null;
    if (t === "=") bare = true;
    else if (t.startsWith("npc:")) npcScenario = t.slice(4);
    else if (t.startsWith("ally:")) allyScenario = t.slice(5);
    else if ((m = /^([+-])([a-z0-9_]+)$/.exec(t))) effects.push({ kind: "setFlag", flag: m[2], value: m[1] === "+" });
    else if ((m = /^bond:([a-z0-9_]+)([+-]\d+)$/.exec(t))) effects.push({ kind: "addBond", npc: m[1], amount: Number(m[2]) });
    else if ((m = /^cult([+-]\d+)$/.exec(t))) effects.push({ kind: "addCultivation", amount: Number(m[1]) });
    else if ((m = /^([a-z]+)([+-]\d+)$/.exec(t)) && (STATS as string[]).includes(m[1])) {
      effects.push({ kind: "addStat", stat: m[1] as PlayerStat, amount: Number(m[2]) });
    } else if (m && (METRICS as string[]).includes(m[1])) {
      effects.push({ kind: "addNpc", metric: m[1] as NpcMetric, amount: Number(m[2]) });
    } else throw new MarkupError(where, `unknown effect "${t}"`);
  }
  return { effects, npcScenario, allyScenario, bare };
}

/** Parses a block of scene markup into scenes. Throws a message naming the line when the markup is malformed. */
export function parseScenes(source: string, file = "markup"): Scene[] {
  const scenes: Scene[] = [];
  let scene: Scene | undefined;
  const lines = source.split("\n");
  lines.forEach((raw, i) => {
    const line = raw.trim();
    const where = `${file}:${i + 1}`;
    if (!line || line.startsWith("//")) return;
    if (line.startsWith("=== ")) {
      const [id, title] = line.slice(4).split("|").map((x) => x.trim());
      if (!id || !title) throw new MarkupError(where, "a scene header is `=== id | Title`");
      scene = { id, title, paragraphs: [], choices: [] };
      scenes.push(scene);
      return;
    }
    if (!scene) throw new MarkupError(where, "text before the first scene header");
    if (line.startsWith("#end ")) {
      scene.ending = line.slice(5).trim();
    } else if (line.startsWith("+")) {
      const m = /^\+(?:\[([a-z0-9_]+)\])? (.*)$/.exec(line);
      const [cond, ...rest] = (m ? m[2] : "").split("|");
      if (!m || !rest.length) throw new MarkupError(where, "an extra is `+ conditions | text`, or `+[group] conditions | text`");
      (scene.extras ??= []).push({
        when: parseConditions(cond, where),
        paragraphs: [rest.join("|").trim()],
        ...(m[1] ? { group: m[1] } : {}),
      });
    } else if (line.startsWith("@ ")) {
      const parts = line.slice(2).split("|").map((x) => x.trim());
      if (parts.length < 3) throw new MarkupError(where, "an interjection is `@ conditions | speaker | text`");
      const [cond, speaker, ...text] = parts;
      (scene.interjections ??= []).push({
        when: parseConditions(cond, where),
        line: text.join(" | "),
        ...(speaker && speaker !== "elder" ? { speaker } : {}),
      });
    } else if (line.startsWith("> ")) {
      const [tone, label, next, fx = "", req = "", hint = ""] = line.slice(2).split(" | ").map((x) => x.trim());
      if (!isTone(tone)) throw new MarkupError(where, `unknown tone "${tone}"`);
      if (!label || !next) throw new MarkupError(where, "a choice is `> tone | label | next | effects | requires | hint`");
      const parsed = parseEffects(fx, where);
      const choice: Choice = {
        id: `c${scene.choices.length + 1}`,
        label,
        tone,
        next,
        effects: [...(parsed.bare ? [] : TONE_EFFECTS[tone]), ...parsed.effects],
      };
      if (parsed.npcScenario) choice.npcScenario = parsed.npcScenario;
      if (parsed.allyScenario) choice.allyScenario = parsed.allyScenario;
      if (req) {
        choice.requires = parseConditions(req, where);
        choice.lockedHint = hint || "Not available yet.";
      }
      scene.choices.push(choice);
    } else {
      scene.paragraphs.push(line);
    }
  });
  return scenes;
}

const TIER_KEYS = ["hostile", "wary", "neutral", "warm", "devoted"] as const;

/**
 * Parses NPC scenarios.
 *
 *     $ SCENARIO_ID | trust+2 respect-1 | elder (or a companion id) | What the player did.
 *     hostile: line
 *     wary: line
 *     neutral: line
 *     warm: line
 *     devoted: line
 *     ? conditions | A memory line, used instead of the tier line when the conditions hold.
 *     remember: flag_a flag_b
 */
export function parseScenarios(source: string, file = "markup"): NpcScenario[] {
  const out: NpcScenario[] = [];
  let cur: NpcScenario | undefined;
  source.split("\n").forEach((raw, i) => {
    const line = raw.trim();
    const where = `${file}:${i + 1}`;
    if (!line || line.startsWith("//")) return;
    if (line.startsWith("$ ")) {
      const [id, delta = "", who = "elder", ...summary] = line.slice(2).split(" | ").map((x) => x.trim());
      const { effects } = parseEffects(delta, where);
      const d: Partial<NpcState> = {};
      for (const e of effects) {
        if (e.kind !== "addNpc") throw new MarkupError(where, "a scenario change is trust, respect, fear or suspicion");
        d[e.metric] = (d[e.metric] ?? 0) + e.amount;
      }
      cur = {
        id,
        summary: summary.join(" | "),
        delta: d,
        lines: { hostile: "", wary: "", neutral: "", warm: "", devoted: "" },
        ...(who !== "elder" ? { npc: who } : {}),
      };
      out.push(cur);
      return;
    }
    if (!cur) throw new MarkupError(where, "text before the first scenario header");
    const key = TIER_KEYS.find((k) => line.startsWith(`${k}:`));
    if (key) cur.lines[key] = line.slice(key.length + 1).trim();
    else if (line.startsWith("? ")) {
      const [cond, ...text] = line.slice(2).split("|");
      (cur.memory ??= []).push({ when: parseConditions(cond, where), line: text.join("|").trim() });
    } else if (line.startsWith("remember:")) {
      cur.remember = line.slice(9).split(/\s+/).filter(Boolean);
    } else throw new MarkupError(where, `unrecognised scenario line "${line.slice(0, 30)}"`);
  });
  return out;
}

/** Parses remarks: `% id | conditions | speaker | line`. */
export function parseRemarks(source: string, file = "markup"): Remark[] {
  const out: Remark[] = [];
  source.split("\n").forEach((raw, i) => {
    const line = raw.trim();
    if (!line || line.startsWith("//")) return;
    const where = `${file}:${i + 1}`;
    if (!line.startsWith("% ")) throw new MarkupError(where, "a remark is `% id | conditions | speaker | line`");
    const [id, cond, speaker, ...text] = line.slice(2).split(" | ").map((x) => x.trim());
    if (!id || text.length === 0) throw new MarkupError(where, "a remark is `% id | conditions | speaker | line`");
    out.push({
      id,
      when: parseConditions(cond, where),
      line: text.join(" | "),
      ...(speaker && speaker !== "elder" ? { speaker } : {}),
    });
  });
  return out;
}

export interface Echo {
  scene: string;
  extra: NonNullable<Scene["extras"]>[number];
}

/**
 * Parses echoes: paragraphs added to scenes that already exist, so a decision made earlier can show up later.
 *
 *     >> target_scene | group-or-dash | conditions | The paragraph.
 */
export function parseEchoes(source: string, file = "markup"): Echo[] {
  const out: Echo[] = [];
  source.split("\n").forEach((raw, i) => {
    const line = raw.trim();
    if (!line || line.startsWith("//")) return;
    const where = `${file}:${i + 1}`;
    if (!line.startsWith(">> ")) throw new MarkupError(where, "an echo is `>> scene | group | conditions | text`");
    const [scene, group, cond, ...text] = line.slice(3).split(" | ").map((x) => x.trim());
    if (!scene || !group || !cond || text.length === 0) throw new MarkupError(where, "an echo is `>> scene | group | conditions | text`");
    out.push({
      scene,
      extra: { when: parseConditions(cond, where), paragraphs: [text.join(" | ")], ...(group !== "-" ? { group } : {}) },
    });
  });
  return out;
}

/** Adds each echo to its scene. Throws when an echo points at a scene that does not exist. */
export function applyEchoes(scenes: Scene[], echoes: Echo[]): Scene[] {
  const byId = new Map(scenes.map((s) => [s.id, { ...s, extras: [...(s.extras ?? [])] }]));
  for (const echo of echoes) {
    const target = byId.get(echo.scene);
    if (!target) throw new Error(`echo points at missing scene "${echo.scene}"`);
    target.extras.push(echo.extra);
  }
  return scenes.map((s) => byId.get(s.id)!);
}
