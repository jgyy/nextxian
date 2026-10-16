import { REALMS } from "./cultivation";
import { giftScenarioId } from "./pack";
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
    const always = scene.choices.filter((c) => !c.hideLocked).length;
    if (scene.ending === undefined && always < MIN_CHOICES) {
      problems.push(`scene "${scene.id}" has ${always} choices every hero sees; needs ${MIN_CHOICES}`);
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
      if (choice.needsRealm !== undefined && !(Number.isInteger(choice.needsRealm) && choice.needsRealm >= 0 && choice.needsRealm < REALMS.length)) {
        problems.push(`choice "${choice.id}" in "${scene.id}" asks for realm ${choice.needsRealm}, which does not exist`);
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

  problems.push(...validateEconomy(story));

  // A gift to the Elder is answered by a scenario the pack triggers, one for each kind of item, so a kind that exists in the story has its answer.
  const used = new Set<string | undefined>([
    ...Object.values(scenes).flatMap((s) => s.choices.flatMap((c) => [c.npcScenario, c.allyScenario]).filter(Boolean)),
    ...Object.values(story.items ?? {}).map((item) => giftScenarioId(item.kind)),
  ]);
  if (Object.keys(scenarios).length < MIN_NPC_SCENARIOS) {
    problems.push(`story defines ${Object.keys(scenarios).length} NPC scenarios; needs ${MIN_NPC_SCENARIOS}`);
  }
  for (const id of Object.keys(scenarios)) {
    if (!used.has(id)) problems.push(`NPC scenario "${id}" is never triggered`);
  }

  return problems;
}

/** The most any one choice may spend, earn or hand over, so a typo in an amount cannot ruin the economy. */
export const MAX_PRICE = 400;

/**
 * Checks the purse, the pack and the holdings. Every item and asset a scene names must exist; a choice that spends
 * must also require the money, one that hands over an item must require it, one that grants an asset must require that
 * the hero does not hold it, and one that gives one up must require that they do.
 */
export function validateEconomy(story: Story): string[] {
  const problems: string[] = [];
  const items = story.items ?? {};
  const assets = story.assets ?? {};
  for (const [key, item] of Object.entries(items)) {
    if (item.id !== key) problems.push(`item "${key}" is filed under the wrong id "${item.id}"`);
    if (item.name.trim() === "" || item.blurb.trim() === "") problems.push(`item "${key}" has no name or blurb`);
    if (!(item.value >= 0)) problems.push(`item "${key}" has a negative value`);
    if (item.aid !== undefined && !(Number.isInteger(item.aid) && item.aid >= 1 && item.aid < REALMS.length)) {
      problems.push(`item "${key}" helps into realm ${item.aid}, which cannot be entered`);
    }
    if (item.needsRealm !== undefined && !(Number.isInteger(item.needsRealm) && item.needsRealm >= 0 && item.needsRealm < REALMS.length)) {
      problems.push(`item "${key}" asks for realm ${item.needsRealm}, which does not exist`);
    }
    if (item.speed !== undefined && !(item.speed > 0 && item.speed <= 40)) problems.push(`item "${key}" has a speed bonus outside 1 to 40`);
  }
  for (const [key, asset] of Object.entries(assets)) {
    if (asset.id !== key) problems.push(`asset "${key}" is filed under the wrong id "${asset.id}"`);
    if (asset.name.trim() === "" || asset.blurb.trim() === "") problems.push(`asset "${key}" has no name or blurb`);
    if (!(asset.income >= 0 && asset.upkeep >= 0)) problems.push(`asset "${key}" has a negative income or upkeep`);
    if (asset.income < asset.upkeep) problems.push(`asset "${key}" costs more than it pays`);
    if (asset.speed !== undefined && !(asset.speed > 0 && asset.speed <= 40)) problems.push(`asset "${key}" has a speed bonus outside 1 to 40`);
  }
  if (story.leavesSect !== undefined && !story.scenes[story.leavesSect]) problems.push(`the scene where the hero leaves the sect, "${story.leavesSect}", does not exist`);

  const known = (where: string, kind: "item" | "asset", id: string) => {
    if (kind === "item" ? !items[id] : !assets[id]) problems.push(`${where} names the unknown ${kind} "${id}"`);
  };
  for (const { where, condition } of conditionsIn(story)) {
    if (condition.kind === "item") known(where, "item", condition.item);
    if (condition.kind === "asset") known(where, "asset", condition.asset);
  }
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) {
      const where = `choice "${choice.id}" in "${scene.id}"`;
      const need = choice.requires ?? [];
      let spend = 0;
      for (const e of choice.effects ?? []) {
        if (e.kind === "addWealth") {
          if (Math.abs(e.amount) > MAX_PRICE) problems.push(`${where} moves ${e.amount} spirit stones, more than ${MAX_PRICE}`);
          if (e.amount < 0) spend -= e.amount;
        }
        if (e.kind === "giveItem" || e.kind === "takeItem") {
          known(where, "item", e.item);
          if (e.kind === "takeItem") {
            const count = e.count ?? 1;
            if (!need.some((c) => c.kind === "item" && c.item === e.item && (c.min ?? 1) >= count && c.max === undefined)) {
              problems.push(`${where} hands over "${e.item}" without requiring that the hero carries ${count}`);
            }
          }
        }
        if (e.kind === "grantAsset" || e.kind === "loseAsset") {
          known(where, "asset", e.asset);
          const wants = e.kind === "loseAsset";
          if (!need.some((c) => c.kind === "asset" && c.asset === e.asset && (c.is ?? true) === wants)) {
            problems.push(`${where} ${wants ? "gives up" : "takes on"} "${e.asset}" without requiring that the hero ${wants ? "holds" : "does not hold"} it`);
          }
        }
      }
      if (spend > 0 && !need.some((c) => c.kind === "wealth" && (c.min ?? 0) >= spend)) {
        problems.push(`${where} spends ${spend} spirit stones without requiring that the hero has them`);
      }
    }
  }
  return problems;
}
