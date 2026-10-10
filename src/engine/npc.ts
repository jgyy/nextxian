import type { Condition, GameState, Mood, NpcScenario, NpcState, Tier } from "./types";

/** Maps the NPC's trust score to the tier that picks which line she speaks. */
export function tierFor(trust: number): Tier {
  if (trust <= -40) return "hostile";
  if (trust < -10) return "wary";
  if (trust < 15) return "neutral";
  if (trust < 50) return "warm";
  return "devoted";
}

/**
 * Fear and suspicion override trust for the face she shows. A frightened or
 * suspicious elder looks that way even when her trust is high.
 */
export function moodFor(npc: NpcState): Mood {
  if (npc.fear >= 50) return "afraid";
  if (npc.suspicion >= 65) return "suspicious";
  switch (tierFor(npc.trust)) {
    case "hostile":
      return "furious";
    case "wary":
      return "guarded";
    case "neutral":
      return "stern";
    case "warm":
      return "softened";
    case "devoted":
      return "tender";
  }
}

export interface NpcReaction {
  line: string;
  tier: Tier;
  remembered: boolean;
}

/**
 * Picks what the NPC says for a scenario. Memory overrides win over tier lines,
 * so earlier choices can change how a later scenario lands.
 */
export function reactToScenario(
  scenario: NpcScenario,
  state: Pick<GameState, "npc" | "flags" | "stats">,
): NpcReaction {
  const tier = tierFor(state.npc.trust);
  const memory = scenario.memory?.find((m) => conditionsHold(m.when, state));
  return {
    line: memory ? memory.line : scenario.lines[tier],
    tier,
    remembered: memory !== undefined,
  };
}

/** True when every condition holds. An empty or missing list always holds. */
export function conditionsHold(
  conditions: Condition[] | undefined,
  state: Pick<GameState, "stats" | "npc" | "flags">,
): boolean {
  return (conditions ?? []).every((c) => {
    switch (c.kind) {
      case "flag":
        return (state.flags[c.flag] === true) === (c.is ?? true);
      case "stat": {
        const v = state.stats[c.stat];
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "npc": {
        const v: NpcState[typeof c.metric] = state.npc[c.metric];
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
    }
  });
}
