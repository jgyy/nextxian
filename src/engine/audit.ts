import { REACHED_PREFIX, REALMS } from "./cultivation";
import { BOND_RANGE, NPC_RANGE, STAT_RANGE } from "./game";
import { ORIGIN_START } from "./path";
import type { Condition, Effect, Story } from "./types";

/** One continuity problem the audit found in a story. */
export interface AuditIssue {
  kind: "dangling-flag" | "dead-condition" | "time-loop" | "unmet-speaker";
  /** Where it sits: a scene id, a scenario id, or a flag name. */
  where: string;
  message: string;
}

/** Every scene a game can begin in: the opening, and the first scene of each origin’s prologue that this story defines. */
export function startScenes(story: Story): string[] {
  return [story.startSceneId, ...Object.values(ORIGIN_START).filter((id) => id !== story.startSceneId && story.scenes[id])];
}

/** Flags the engine itself sets, when a hero enters a realm. They need no choice to set them. */
const isEngineFlag = (flag: string) => flag.startsWith(REACHED_PREFIX);

const isFlag = (c: Condition): c is Extract<Condition, { kind: "flag" }> => c.kind === "flag";

/** Flags a list of effects turns on. */
function flagsSet(effects: Effect[] | undefined): string[] {
  return (effects ?? []).flatMap((e) => (e.kind === "setFlag" && (e.value ?? true) ? [e.flag] : []));
}

/** What `possibleFlags` says about one scene: whether a flag may be on by the time the player arrives. */
export interface FlagSet {
  has(flag: string): boolean;
}

/**
 * Walks the story graph and collects, for every scene, the flags that may have been set by the time the player
 * arrives. A flag is "possible" at a scene when at least one path from the opening reaches it with that flag on.
 * Flags are bits, so the walk over twenty thousand choices and several thousand flags stays under a second.
 */
export function possibleFlags(story: Story): Record<string, FlagSet> {
  const index = new Map<string, number>();
  const bit = (flag: string): number => {
    let i = index.get(flag);
    if (i === undefined) {
      i = index.size;
      index.set(flag, i);
    }
    return i;
  };
  // What each choice puts on: the flags it sets, and what the scenario it triggers says and remembers.
  const carry = new Map<unknown, number[]>();
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) {
      const flags = [
        ...flagsSet(choice.effects),
        ...(choice.npcScenario ? [`said:${choice.npcScenario}`, ...(story.scenarios[choice.npcScenario]?.remember ?? [])] : []),
        ...(choice.allyScenario ? [`said:${choice.allyScenario}`, ...(story.scenarios[choice.allyScenario]?.remember ?? [])] : []),
      ];
      carry.set(choice, flags.map(bit));
    }
  }
  const words = Math.max(1, Math.ceil(index.size / 32));
  const into: Record<string, Uint32Array> = Object.fromEntries(Object.keys(story.scenes).map((id) => [id, new Uint32Array(words)]));
  const queue = startScenes(story);
  const queued = new Set(queue);
  const reached = new Set(queue);
  while (queue.length) {
    const id = queue.shift()!;
    queued.delete(id);
    const scene = story.scenes[id];
    if (!scene) continue;
    const here = into[id];
    for (const choice of scene.choices) {
      const target = into[choice.next];
      if (!target) continue;
      let grew = false;
      for (let w = 0; w < words; w++) {
        const merged = (target[w] | here[w]) >>> 0;
        if (merged !== target[w]) {
          target[w] = merged;
          grew = true;
        }
      }
      for (const i of carry.get(choice) ?? []) {
        const mask = 1 << (i & 31);
        if ((target[i >> 5] & mask) === 0) {
          target[i >> 5] |= mask;
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
  return Object.fromEntries(
    Object.entries(into).map(([id, bits]) => [
      id,
      {
        has: (flag: string) => {
          const i = index.get(flag);
          return i !== undefined && (bits[i >> 5] & (1 << (i & 31))) !== 0;
        },
      },
    ]),
  );
}

/**
 * Which companions the player has *certainly* met on entering each scene, and whenever each flag is set: the companions every path there
 * has introduced. A line a companion speaks needs the bond, or a flag set after they were met, or somebody who has never been introduced speaks.
 * Companions are bits of a mask, so the walk over twenty thousand choices stays quick.
 */
export function metCompanions(story: Story): { atScene: Record<string, Set<string>>; atFlag: Record<string, Set<string>> } {
  const names = Object.keys(story.companions ?? {});
  const bit = new Map(names.map((n, i) => [n, 1 << i]));
  const intro = (c: Story["scenes"][string]["choices"][number]): number => {
    let m = 0;
    for (const e of c.effects ?? []) if (e.kind === "addBond") m |= bit.get(e.npc) ?? 0;
    for (const id of [c.npcScenario, c.allyScenario]) {
      const owner = id ? story.scenarios[id]?.npc : undefined;
      if (owner) m |= bit.get(owner) ?? 0;
    }
    return m;
  };
  const ALL = (1 << names.length) - 1;
  const at: Record<string, number> = {};
  const queue: string[] = startScenes(story);
  for (const id of queue) at[id] = 0;
  while (queue.length) {
    const id = queue.pop()!;
    const here = at[id];
    for (const c of story.scenes[id].choices) {
      if (!story.scenes[c.next]) continue;
      const after = here | intro(c);
      const known = at[c.next];
      const next = known === undefined ? after : known & after;
      if (next !== known) {
        at[c.next] = next;
        queue.push(c.next);
      }
    }
  }
  const flagMask: Record<string, number> = {};
  const meet = (flag: string, after: number) => (flagMask[flag] = flagMask[flag] === undefined ? after : flagMask[flag] & after);
  for (const [id, here] of Object.entries(at)) {
    for (const c of story.scenes[id].choices) {
      const after = here | intro(c);
      for (const e of c.effects ?? []) if (e.kind === "setFlag" && (e.value ?? true)) meet(e.flag, after);
      for (const sid of [c.npcScenario, c.allyScenario]) for (const f of (sid && story.scenarios[sid]?.remember) || []) meet(f, after);
    }
  }
  const toSet = (m: number) => new Set(names.filter((n) => (m & bit.get(n)!) !== 0));
  void ALL;
  return {
    atScene: Object.fromEntries(Object.keys(story.scenes).map((id) => [id, toSet(at[id] ?? 0)])),
    atFlag: Object.fromEntries(Object.entries(flagMask).map(([f, m]) => [f, toSet(m)])),
  };
}

/** Every flag that some choice or scenario sets, and every flag some condition reads. */
export function flagUsage(story: Story): { set: Set<string>; read: Set<string> } {
  const set = new Set<string>();
  const read = new Set<string>();
  const prefixes = new Set<string>();
  const reads = (conditions: Condition[] | undefined) => {
    for (const c of conditions ?? []) {
      if (isFlag(c)) read.add(c.flag);
      else if (c.kind === "since") read.add(c.flag);
      else if (c.kind === "count") prefixes.add(c.prefix);
    }
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
  // A `count` condition reads every flag that starts with its prefix.
  for (const flag of set) if ([...prefixes].some((p) => flag.startsWith(p))) read.add(flag);
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
      if (c.kind === "said" && !possible[scene].has(`said:${c.scenario}`)) {
        issues.push({ kind: "dead-condition", where, message: `${where} needs the Elder to have heard "${c.scenario}", which no path to "${scene}" can trigger` });
      }
      if (c.kind === "since" && !isEngineFlag(c.flag) && !possible[scene].has(c.flag)) {
        issues.push({ kind: "dead-condition", where, message: `${where} counts decisions since "${c.flag}", which no path to "${scene}" can set` });
      }
      if (isFlag(c) && c.is !== false && !isEngineFlag(c.flag) && !possible[scene].has(c.flag)) {
        issues.push({ kind: "dead-condition", where, message: `${where} needs flag "${c.flag}", which no path to "${scene}" can set` });
      }
    }
  };
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) dead(`choice "${choice.id}" in "${scene.id}"`, scene.id, choice.requires);
    scene.extras?.forEach((x, i) => dead(`extra ${i} of "${scene.id}"`, scene.id, x.when));
    scene.interjections?.forEach((x, i) => dead(`interjection ${i} of "${scene.id}"`, scene.id, x.when));
  }

  // A condition on something nothing in the story ever produces can never hold, wherever it sits: a flag no choice sets, a count of
  // flags that cannot all be set, an item nobody is given, a holding nobody is granted. Remarks and memory lines are the usual victims,
  // because no path analysis reaches them.
  const given = new Set<string>();
  const granted = new Set<string>();
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) {
      for (const e of choice.effects ?? []) {
        if (e.kind === "giveItem") given.add(e.item);
        if (e.kind === "grantAsset") granted.add(e.asset);
      }
    }
  }
  const never = (c: Condition): string | undefined => {
    if ((isFlag(c) && c.is !== false) || c.kind === "since") return set.has(c.flag) || isEngineFlag(c.flag) ? undefined : `flag "${c.flag}", which nothing ever sets`;
    if (c.kind === "count") {
      const can = [...set].filter((f) => f.startsWith(c.prefix)).length;
      return (c.min ?? 0) > can ? `${c.min} flags starting "${c.prefix}", of which only ${can} can ever be set` : undefined;
    }
    if (c.kind === "item" && (c.min ?? (c.max === undefined ? 1 : 0)) > 0 && !given.has(c.item)) return `item "${c.item}", which nobody is ever given`;
    if (c.kind === "asset" && c.is !== false && !granted.has(c.asset)) return `holding "${c.asset}", which nobody is ever granted`;
    // The realms run from Mortal to Ascendant, so a bound below the first or above the last, or a minimum over the maximum, is held by no one.
    if (c.kind === "realm") {
      const top = REALMS.length - 1;
      const min = c.min ?? 0;
      const max = c.max ?? top;
      if (min > top || max < 0 || min > max) return `a realm from ${c.min ?? "the first"} to ${c.max ?? "the last"}, which no hero can have`;
    }
    // A stat, a feeling or a bond that is held between fixed limits cannot be asked for beyond them.
    const limits: [number, number] | undefined = c.kind === "stat" ? STAT_RANGE[c.stat] : c.kind === "npc" ? NPC_RANGE[c.metric] : c.kind === "bond" ? BOND_RANGE : c.kind === "progress" ? [0, 100] : undefined;
    if (limits && c.kind !== "realm") {
      const lo = (c as { min?: number }).min ?? limits[0];
      const hi = (c as { max?: number }).max ?? limits[1];
      if (lo > limits[1] || hi < limits[0] || lo > hi) return `${c.kind === "stat" ? c.stat : c.kind === "npc" ? c.metric : c.kind} from ${(c as { min?: number }).min ?? "the least"} to ${(c as { max?: number }).max ?? "the most"}, which lies outside what it can be`;
    }
    return undefined;
  };
  const impossible = (where: string, conditions: Condition[] | undefined, skipFlags = false) => {
    for (const c of conditions ?? []) {
      if (skipFlags && (isFlag(c) || c.kind === "since")) continue;
      const reason = never(c);
      if (reason) issues.push({ kind: "dead-condition", where, message: `${where} needs ${reason}` });
    }
  };
  for (const scene of Object.values(story.scenes)) {
    for (const choice of scene.choices) impossible(`choice "${choice.id}" in "${scene.id}"`, choice.requires, true);
    scene.extras?.forEach((x, i) => impossible(`extra ${i} of "${scene.id}"`, x.when, true));
    scene.interjections?.forEach((x, i) => impossible(`interjection ${i} of "${scene.id}"`, x.when, true));
  }
  for (const scenario of Object.values(story.scenarios)) scenario.memory?.forEach((m, i) => impossible(`memory ${i} of "${scenario.id}"`, m.when));
  for (const remark of story.remarks ?? []) impossible(`remark "${remark.id}"`, remark.when);

  // Somebody who has not been introduced does not speak.
  const { atScene, atFlag } = metCompanions(story);
  const bondFor = (conditions: Condition[], who: string) => conditions.some((c) => c.kind === "bond" && c.npc === who);
  const flagFor = (conditions: Condition[], who: string) =>
    conditions.some((c) => (c.kind === "since" || (c.kind === "flag" && c.is !== false)) && atFlag[c.flag]?.has(who));
  for (const scene of Object.values(story.scenes)) {
    scene.interjections?.forEach((x, i) => {
      if (x.speaker && !atScene[scene.id].has(x.speaker) && !bondFor(x.when, x.speaker) && !flagFor(x.when, x.speaker)) {
        issues.push({ kind: "unmet-speaker", where: `interjection ${i} of "${scene.id}"`, message: `${x.speaker} speaks in "${scene.id}", which a player can reach without having met them` });
      }
    });
  }
  for (const remark of story.remarks ?? []) {
    if (remark.speaker && !bondFor(remark.when, remark.speaker) && !flagFor(remark.when, remark.speaker)) {
      issues.push({ kind: "unmet-speaker", where: `remark "${remark.id}"`, message: `${remark.speaker} says "${remark.id}" with no sign they have been met` });
    }
  }

  // A loop in the story graph replays text that has already happened. The only loops allowed run through a wayside
  // hub, which is written to be visited again, so edges into a hub are left out.
  for (const scene of sceneLoops(story)) {
    issues.push({ kind: "time-loop", where: scene, message: `"${scene}" can be reached again from itself, which replays its text` });
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
        if (c.kind === "said" && at.length > 0 && at.every((s) => !possible[s].has(`said:${c.scenario}`))) {
          issues.push({ kind: "dead-condition", where: `memory ${i} of "${scenario.id}"`, message: `memory ${i} of "${scenario.id}" needs "${c.scenario}" to have been heard, which no path to its trigger can do` });
        }
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

/** The scenes that sit on a loop, found with Tarjan's strongly connected components, ignoring edges into hubs (waysides and the `hub_` scenes of the books). */
export function sceneLoops(story: Story): string[] {
  const ids = Object.keys(story.scenes);
  const index = new Map<string, number>();
  const low = new Map<string, number>();
  const onStack = new Set<string>();
  const stack: string[] = [];
  const loops: string[] = [];
  let counter = 0;
  const edges = (id: string) => story.scenes[id].choices.map((c) => c.next).filter((n) => story.scenes[n] && !n.startsWith("wayside_") && !n.startsWith("hub_"));
  // Iterative Tarjan, so a long chain of scenes cannot overflow the call stack.
  for (const root of ids) {
    if (index.has(root)) continue;
    const work: { id: string; next: string[]; i: number }[] = [{ id: root, next: edges(root), i: 0 }];
    index.set(root, counter);
    low.set(root, counter++);
    stack.push(root);
    onStack.add(root);
    while (work.length) {
      const frame = work[work.length - 1];
      if (frame.i < frame.next.length) {
        const n = frame.next[frame.i++];
        if (!index.has(n)) {
          index.set(n, counter);
          low.set(n, counter++);
          stack.push(n);
          onStack.add(n);
          work.push({ id: n, next: edges(n), i: 0 });
        } else if (onStack.has(n)) {
          low.set(frame.id, Math.min(low.get(frame.id)!, index.get(n)!));
        }
      } else {
        work.pop();
        if (work.length) {
          const parent = work[work.length - 1].id;
          low.set(parent, Math.min(low.get(parent)!, low.get(frame.id)!));
        }
        if (low.get(frame.id) === index.get(frame.id)) {
          const component: string[] = [];
          let top: string;
          do {
            top = stack.pop()!;
            onStack.delete(top);
            component.push(top);
          } while (top !== frame.id);
          if (component.length > 1 || edges(frame.id).includes(frame.id)) loops.push(...component);
        }
      }
    }
  }
  return loops.sort();
}
