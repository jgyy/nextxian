import { isTone } from "./tone";
import { countWords } from "./words";
import type { Condition, Scene, Story, Tier } from "./types";

export const MIN_CHOICES = 4;
export const MIN_NPC_SCENARIOS = 40;
/**
 * The most body text one scene may hold. Narration, every extra paragraph and every NPC
 * interjection count, all at once, so the cap holds whatever the player has become.
 */
export const MAX_SCENE_WORDS = 200;
/** No single NPC line (a tier line, a memory line or an attitude comment) may run longer than this. */
export const MAX_LINE_WORDS = 200;
const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

/** Body text a scene can show at once, counting every extra paragraph and interjection as if it shows. */
export function sceneBodyWords(scene: Scene): number {
  // Alternatives in one group never show together, so a group counts as its longest member.
  const grouped = new Map<string, number>();
  let loose = 0;
  for (const x of scene.extras ?? []) {
    const words = x.paragraphs.reduce((m, p) => m + countWords(p), 0);
    if (x.group === undefined) loose += words;
    else grouped.set(x.group, Math.max(grouped.get(x.group) ?? 0, words));
  }
  return (
    scene.paragraphs.reduce((n, p) => n + countWords(p), 0) +
    loose +
    [...grouped.values()].reduce((n, w) => n + w, 0) +
    (scene.interjections ?? []).reduce((n, x) => n + countWords(x.line), 0)
  );
}

/** Every condition in the story, with a note on where it sits, for reference checks. */
function conditionsIn(story: Story): { where: string; condition: Condition }[] {
  const found: { where: string; condition: Condition }[] = [];
  const add = (where: string, conditions: Condition[] | undefined) => {
    for (const condition of conditions ?? []) found.push({ where, condition });
  };
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) add(`choice "${choice.id}" in "${scene.id}"`, choice.requires);
    for (const x of scene.extras ?? []) add(`an extra paragraph in "${scene.id}"`, x.when);
    for (const x of scene.interjections ?? []) add(`an interjection in "${scene.id}"`, x.when);
  }
  for (const scenario of Object.values(story.scenarios)) {
    for (const m of scenario.memory ?? []) add(`a memory line of "${scenario.id}"`, m.when);
  }
  return found;
}

/** Returns a list of problems in the story. An empty list means the story is sound. */
export function validateStory(story: Story): string[] {
  const problems: string[] = [];
  const { scenes, scenarios } = story;

  if (!scenes[story.startSceneId]) {
    problems.push(`start scene "${story.startSceneId}" does not exist`);
  }

  const capped = (where: string, text: string) => {
    const words = countWords(text);
    if (words > MAX_LINE_WORDS) problems.push(`${where} has ${words} words; the limit is ${MAX_LINE_WORDS}`);
  };

  for (const scene of Object.values(scenes)) {
    if (scene.ending === undefined && scene.choices.length < MIN_CHOICES) {
      problems.push(`scene "${scene.id}" has ${scene.choices.length} choices; needs ${MIN_CHOICES}`);
    }
    if (scene.ending !== undefined && scene.choices.length > 0) {
      problems.push(`ending scene "${scene.id}" should not have choices`);
    }
    if (scene.title.trim() === "") {
      problems.push(`scene "${scene.id}" has no title`);
    }
    const body = sceneBodyWords(scene);
    if (body > MAX_SCENE_WORDS) {
      problems.push(`scene "${scene.id}" has ${body} words of body text; the limit is ${MAX_SCENE_WORDS}`);
    }
    for (const x of scene.interjections ?? []) {
      if (!x.line || x.line.trim() === "") {
        problems.push(`scene "${scene.id}" has an empty NPC interjection`);
      }
    }
    const ids = new Set<string>();
    for (const choice of scene.choices) {
      if (ids.has(choice.id)) problems.push(`duplicate choice id "${choice.id}" in "${scene.id}"`);
      ids.add(choice.id);
      if (!isTone(choice.tone)) {
        problems.push(`choice "${choice.id}" in "${scene.id}" has no valid tone`);
      }
      if (!scenes[choice.next]) {
        problems.push(`choice "${choice.id}" in "${scene.id}" points to missing scene "${choice.next}"`);
      }
      if (choice.npcScenario && !scenarios[choice.npcScenario]) {
        problems.push(`choice "${choice.id}" in "${scene.id}" uses missing NPC scenario "${choice.npcScenario}"`);
      }
    }
  }

  for (const scenario of Object.values(scenarios)) {
    const lines = TIERS.map((t) => scenario.lines[t]);
    if (lines.some((l) => !l || l.trim() === "")) {
      problems.push(`NPC scenario "${scenario.id}" is missing a tier line`);
    } else if (new Set(lines).size !== TIERS.length) {
      problems.push(`NPC scenario "${scenario.id}" has repeated tier lines`);
    }
    for (const m of scenario.memory ?? []) {
      if (lines.includes(m.line)) {
        problems.push(`NPC scenario "${scenario.id}" has a memory line identical to a tier line`);
      }
      capped(`a memory line of "${scenario.id}"`, m.line);
    }
    TIERS.forEach((t) => capped(`NPC scenario "${scenario.id}" ${t} line`, scenario.lines[t] ?? ""));
  }

  for (const { where, condition } of conditionsIn(story)) {
    if (condition.kind === "said" && !scenarios[condition.scenario]) {
      problems.push(`${where} refers to missing NPC scenario "${condition.scenario}"`);
    }
    if (condition.kind === "tone" && !isTone(condition.tone)) {
      problems.push(`${where} refers to an unknown tone "${String(condition.tone)}"`);
    }
  }

  const companions = story.companions ?? {};
  const knownSpeaker = (id: string | undefined) => id === undefined || companions[id] !== undefined;
  for (const scene of Object.values(scenes)) {
    for (const x of scene.interjections ?? []) {
      if (!knownSpeaker(x.speaker)) problems.push(`scene "${scene.id}" has an interjection by unknown speaker "${x.speaker}"`);
    }
    for (const choice of scene.choices) {
      if (choice.allyScenario && !scenarios[choice.allyScenario]) {
        problems.push(`choice "${choice.id}" in "${scene.id}" uses missing ally scenario "${choice.allyScenario}"`);
      }
      for (const effect of choice.effects ?? []) {
        if (effect.kind === "addBond" && !companions[effect.npc]) {
          problems.push(`choice "${choice.id}" in "${scene.id}" changes the bond of unknown companion "${effect.npc}"`);
        }
      }
    }
  }
  for (const scenario of Object.values(scenarios)) {
    if (!knownSpeaker(scenario.npc)) problems.push(`NPC scenario "${scenario.id}" belongs to unknown companion "${scenario.npc}"`);
  }
  for (const { where, condition } of conditionsIn(story)) {
    if (condition.kind === "bond" && !companions[condition.npc]) {
      problems.push(`${where} reads the bond of unknown companion "${condition.npc}"`);
    }
  }
  const remarkIds = new Set<string>();
  for (const remark of story.remarks ?? []) {
    if (remarkIds.has(remark.id)) problems.push(`duplicate remark id "${remark.id}"`);
    remarkIds.add(remark.id);
    if (!knownSpeaker(remark.speaker)) problems.push(`remark "${remark.id}" has unknown speaker "${remark.speaker}"`);
    capped(`remark "${remark.id}"`, remark.line);
    for (const condition of remark.when) {
      if (condition.kind === "bond" && !companions[condition.npc]) {
        problems.push(`remark "${remark.id}" reads the bond of unknown companion "${condition.npc}"`);
      }
    }
  }

  const used = new Set(
    Object.values(scenes).flatMap((s) => s.choices.flatMap((c) => [c.npcScenario, c.allyScenario]).filter(Boolean)),
  );
  if (Object.keys(scenarios).length < MIN_NPC_SCENARIOS) {
    problems.push(`story defines ${Object.keys(scenarios).length} NPC scenarios; needs ${MIN_NPC_SCENARIOS}`);
  }
  for (const id of Object.keys(scenarios)) {
    if (!used.has(id)) problems.push(`NPC scenario "${id}" is never triggered`);
  }

  return problems;
}
