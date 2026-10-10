import { countWords } from "./words";
import type { Condition, Story, Tier } from "./types";

export const MIN_CHOICES = 4;
export const MIN_NPC_SCENARIOS = 40;
/** No single block of body text (a paragraph or an NPC line) may run longer than this. */
export const MAX_BODY_WORDS = 200;
const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

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
    if (words > MAX_BODY_WORDS) problems.push(`${where} has ${words} words; the limit is ${MAX_BODY_WORDS}`);
  };

  for (const scene of Object.values(scenes)) {
    if (scene.ending === undefined && scene.choices.length < MIN_CHOICES) {
      problems.push(`scene "${scene.id}" has ${scene.choices.length} choices; needs ${MIN_CHOICES}`);
    }
    if (scene.ending !== undefined && scene.choices.length > 0) {
      problems.push(`ending scene "${scene.id}" should not have choices`);
    }
    scene.paragraphs.forEach((p, i) => capped(`scene "${scene.id}" paragraph ${i + 1}`, p));
    for (const x of scene.extras ?? []) {
      x.paragraphs.forEach((p, i) => capped(`scene "${scene.id}" extra paragraph ${i + 1}`, p));
    }
    for (const x of scene.interjections ?? []) {
      if (!x.line || x.line.trim() === "") {
        problems.push(`scene "${scene.id}" has an empty NPC interjection`);
      }
      capped(`an NPC interjection in "${scene.id}"`, x.line);
    }
    const ids = new Set<string>();
    for (const choice of scene.choices) {
      if (ids.has(choice.id)) problems.push(`duplicate choice id "${choice.id}" in "${scene.id}"`);
      ids.add(choice.id);
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
  }

  const used = new Set(
    Object.values(scenes).flatMap((s) => s.choices.map((c) => c.npcScenario).filter(Boolean)),
  );
  if (Object.keys(scenarios).length < MIN_NPC_SCENARIOS) {
    problems.push(`story defines ${Object.keys(scenarios).length} NPC scenarios; needs ${MIN_NPC_SCENARIOS}`);
  }
  for (const id of Object.keys(scenarios)) {
    if (!used.has(id)) problems.push(`NPC scenario "${id}" is never triggered`);
  }

  return problems;
}
