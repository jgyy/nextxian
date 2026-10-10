import type { Condition, GameState, Mood, NpcScenario, NpcState, Tier } from "./types";

/** Tiers from coldest to warmest. Used to tell whether a change moved her up or down. */
const TIER_ORDER: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

/** Maps the NPC's trust score to the tier that picks which line she speaks. */
export function tierFor(trust: number): Tier {
  if (trust <= -40) return "hostile";
  if (trust < -10) return "wary";
  if (trust < 15) return "neutral";
  if (trust < 50) return "warm";
  return "devoted";
}

/**
 * What she says when a choice moves her to a warmer tier. Keyed by the tier she
 * arrives at, so a jump of two tiers still lands on a line that fits.
 */
export const TIER_SHIFT_UP: Partial<Record<Tier, string>> = {
  wary: "I was ready to have you thrown out of this hall. I am no longer certain that is what I want. Do not make me regret the doubt.",
  neutral: "Something in that answer has moved me off my guard. Neutral is an uncomfortable place for an elder to stand, but it is an honest one. Stay there with me.",
  warm: "I notice I have started to listen to you without arranging my face first. I did not expect to notice that before I had already done it. Be worthy of the hearing.",
  devoted: "I have decided something about you without consulting the Law. It is the first decision of its kind in fifteen years. Do not waste it.",
};

/** What she says when a choice moves her to a colder tier. Keyed by the tier she arrives at. */
export const TIER_SHIFT_DOWN: Partial<Record<Tier, string>> = {
  hostile: "I have stopped trying to be fair to you, and that is a dangerous place for the Law to stand. You brought me here. Think about what it costs before you speak again.",
  wary: "I am watching you again, and this time I have the ledger open on my knee. You have pushed me back into wariness. Do not mistake a wary elder for a deaf one.",
  neutral: "The warmth is leaving this hall. I can feel it go, the way the lamps lose their heat when the door opens. Find a way to close it again, or I will close it for you.",
  warm: "You have cooled me, Wanderer. Not all the way, but enough that I heard the chill in my own voice just now. I will not pretend otherwise.",
};

/**
 * The line she speaks when her attitude changes tier, or undefined when it did not.
 * It is spoken after the scenario's reply, so the change is the last thing she says.
 */
export function tierShiftLine(from: Tier, to: Tier): string | undefined {
  if (from === to) return undefined;
  const rising = TIER_ORDER.indexOf(to) > TIER_ORDER.indexOf(from);
  return rising ? TIER_SHIFT_UP[to] : TIER_SHIFT_DOWN[to];
}

/**
 * What she says when her face changes but her tier does not. That happens when fear
 * or suspicion takes over her expression, or drains away again. Keyed by the mood she
 * arrives at, so each line works whatever she was feeling before.
 */
export const MOOD_SHIFT: Record<Mood, string> = {
  afraid: "Something in what you just said has frightened me, and I do not frighten easily. Give me a moment to set my hands flat on the table before I speak again.",
  suspicious: "I have started counting your words the way I count the lamps before the bell. I cannot yet tell whether the fault is in your voice or in my own memory.",
  furious: "The fear has gone and left only anger behind it. I would rather have had the fear. Fear at least knows when to stop.",
  guarded: "The fear has drained out of me and left me guarded again. Do not take that for forgiveness. It is only the return of my spine.",
  stern: "I have set down whatever was shaking in me. What is left is the Law, and it is stern, and it is listening.",
  softened: "Something in my face has loosened without my leave. I did not give it permission to do that. Continue, and I will try to keep it from showing.",
  tender: "I am no longer guarding my face, and I do not know when I stopped. It is a foolish thing for an elder to feel, and I feel it anyway.",
};

/** The line for a change of face, or undefined when her mood stayed the same. */
export function moodShiftLine(from: Mood, to: Mood): string | undefined {
  return from === to ? undefined : MOOD_SHIFT[to];
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
  state: Pick<GameState, "npc" | "flags" | "stats" | "history">,
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
  state: Pick<GameState, "stats" | "npc" | "flags" | "history">,
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
      case "said": {
        const h = state.history;
        const recent = c.within === undefined ? h : h.slice(Math.max(0, h.length - c.within));
        return recent.filter((id) => id === c.scenario).length >= (c.min ?? 1);
      }
    }
  });
}
