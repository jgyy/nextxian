import type { Condition, Effect, Story } from "./types";

/** One continuity problem the audit found in a story. */
export interface AuditIssue {
  kind: "dangling-flag" | "dead-condition";
  /** Where it sits: a scene id, a scenario id, or a flag name. */
  where: string;
  message: string;
}

const isFlag = (c: Condition): c is Extract<Condition, { kind: "flag" }> => c.kind === "flag";

/** Flags a list of effects turns on. */
function flagsSet(effects: Effect[] | undefined): string[] {
  return (effects ?? []).flatMap((e) => (e.kind === "setFlag" && (e.value ?? true) ? [e.flag] : []));
}

/**
 * Walks the story graph and collects, for every scene, the flags that may have been set by the time the player
 * arrives. A flag is "possible" at a scene when at least one path from the opening reaches it with that flag on.
 */
export function possibleFlags(story: Story): Record<string, Set<string>> {
  const into: Record<string, Set<string>> = Object.fromEntries(Object.keys(story.scenes).map((id) => [id, new Set<string>()]));
  const queue = [story.startSceneId];
  const queued = new Set(queue);
  const reached = new Set(queue);
  while (queue.length) {
    const id = queue.shift()!;
    queued.delete(id);
    const scene = story.scenes[id];
    if (!scene) continue;
    for (const choice of scene.choices) {
      const target = into[choice.next];
      if (!target) continue;
      const carried = [
        ...into[id],
        ...flagsSet(choice.effects),
        ...(choice.npcScenario ? (story.scenarios[choice.npcScenario]?.remember ?? []) : []),
        ...(choice.allyScenario ? (story.scenarios[choice.allyScenario]?.remember ?? []) : []),
      ];
      let grew = false;
      for (const f of carried) {
        if (!target.has(f)) {
          target.add(f);
          grew = true;
        }
      }
      if ((grew || !reached.has(choice.next)) && !queued.has(choice.next)) {
        queue.push(choice.next);
        queued.add(choice.next);
      }
      reached.add(choice.next);
    }
  }
  return into;
}

/** Every flag that some choice or scenario sets, and every flag some condition reads. */
export function flagUsage(story: Story): { set: Set<string>; read: Set<string> } {
  const set = new Set<string>();
  const read = new Set<string>();
  const reads = (conditions: Condition[] | undefined) => {
    for (const c of conditions ?? []) if (isFlag(c)) read.add(c.flag);
  };
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) {
      flagsSet(choice.effects).forEach((f) => set.add(f));
      reads(choice.requires);
    }
    scene.extras?.forEach((x) => reads(x.when));
    scene.interjections?.forEach((x) => reads(x.when));
  }
  for (const scenario of Object.values(story.scenarios)) {
    scenario.remember?.forEach((f) => set.add(f));
    scenario.memory?.forEach((m) => reads(m.when));
  }
  for (const remark of story.remarks ?? []) reads(remark.when);
  return { set, read };
}

/**
 * Finds the continuity problems a machine can see: choices that set a flag nothing ever reads (a decision with no
 * consequence), and conditions on a flag that no path to that point can have set (text that can never show).
 */
export function auditStory(story: Story): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const { set, read } = flagUsage(story);
  for (const flag of [...set].sort()) {
    if (!read.has(flag)) issues.push({ kind: "dangling-flag", where: flag, message: `flag "${flag}" is set but nothing ever reads it` });
  }

  const possible = possibleFlags(story);
  const dead = (where: string, scene: string, conditions: Condition[] | undefined) => {
    for (const c of conditions ?? []) {
      if (isFlag(c) && c.is !== false && !possible[scene].has(c.flag)) {
        issues.push({ kind: "dead-condition", where, message: `${where} needs flag "${c.flag}", which no path to "${scene}" can set` });
      }
    }
  };
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) dead(`choice "${choice.id}" in "${scene.id}"`, scene.id, choice.requires);
    scene.extras?.forEach((x, i) => dead(`extra ${i} of "${scene.id}"`, scene.id, x.when));
    scene.interjections?.forEach((x, i) => dead(`interjection ${i} of "${scene.id}"`, scene.id, x.when));
  }

  // A memory line is dead when it cannot be true at any scene that triggers its scenario.
  const triggers: Record<string, string[]> = {};
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) {
      for (const id of [choice.npcScenario, choice.allyScenario]) if (id) (triggers[id] ??= []).push(scene.id);
    }
  }
  for (const scenario of Object.values(story.scenarios)) {
    const at = triggers[scenario.id] ?? [];
    scenario.memory?.forEach((m, i) => {
      for (const c of m.when) {
        if (isFlag(c) && c.is !== false && at.length > 0 && at.every((s) => !possible[s].has(c.flag))) {
          issues.push({
            kind: "dead-condition",
            where: `memory ${i} of "${scenario.id}"`,
            message: `memory ${i} of "${scenario.id}" needs flag "${c.flag}", which no path to its trigger can set`,
          });
        }
      }
    });
  }
  return issues;
}
