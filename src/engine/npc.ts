import { ageOf, lifeLeft } from "./age";
import { REALMS, realmProgress } from "./cultivation";
import { edgeOf } from "./fight";
import { worldMeasure } from "./world";
import { standingOf } from "./hero";
import { ownedGarments } from "./wardrobe";
import { affinityOf, daoRankOf } from "./path";
import { levelNow } from "./stages";
import { CHOICE_TONES } from "./tone";
import { reputeOf, type Repute } from "./witness";
import type { ChoiceTone, Condition, GameState, Mood, NpcScenario, NpcState, RespectTier, Tier } from "./types";

/** Flags starting with this mark a finished side road. The `roads` condition counts them. */
export const ROAD_DONE_PREFIX = "road_done_";

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

/** A tone is the player's manner once this many of the last decisions share it. */
export const MANNER_WINDOW = 4;
export const MANNER_NEED = 3;

/**
 * What she says when the player's manner changes. When most of the last few decisions
 * share a tone, she names it. Keyed by the manner she sees now.
 */
export const MANNER_SHIFT: Record<ChoiceTone, string> = {
  truth: "Three of your last four answers have been plain, and I have started listening for the thing you are not saying. I cannot find it. That frightens me more than a lie would, because a lie I could at least weigh.",
  mercy: "Most of your recent answers have been kindnesses, or pleas for them. The Law calls that softness, and I am not yet sure the Law is right about everything. Be careful, Wanderer, that mercy does not become the only tool you own.",
  inquiry: "You have been asking, reading and searching in most of your answers lately. A person who questions so much is either preparing to judge someone or preparing to be judged. I would like to know which of the two you are becoming.",
  deceit: "Three of your last four answers were lies, or close kin to lies. I have stopped asking whether a thing you say is true. I have begun asking why you need it to be false, and that question is worse for both of us.",
  force: "Three of your last four answers reached for threat or force. The Law Hall has watched many people do that. It has never once watched one of them get what they wanted without paying for it later, with interest.",
  quiet: "Most of your recent answers have been silence, waiting or quiet departures. Silence is not innocence, Wanderer. I notice when a person waits for me to decide a thing on their behalf, and I notice that you have been doing it often.",
};

/** The tone that makes up most of the last few decisions, or undefined when none does yet. */
export function mannerOf(tones: ChoiceTone[]): ChoiceTone | undefined {
  const recent = tones.slice(-MANNER_WINDOW);
  return CHOICE_TONES.find((t) => recent.filter((x) => x === t).length >= MANNER_NEED);
}

/**
 * The line she speaks when the player's manner changes to a new tone, or undefined when it
 * did not change. A pattern is named once, so she does not repeat herself on every choice.
 */
export function mannerShiftLine(before: ChoiceTone[], after: ChoiceTone[]): string | undefined {
  const to = mannerOf(after);
  return to !== undefined && to !== mannerOf(before) ? MANNER_SHIFT[to] : undefined;
}

/**
 * What she says when the player's karma crosses into another band: the road begins to call them dark, or kind, or stops. Keyed by the
 * band they arrive in, so a change in either direction has a line that fits. It is the last thing she can notice in one choice.
 */
export const REPUTE_SHIFT: Record<Repute, string> = {
  dark: "I hear it on the road before I see it in you: the word for you has turned dark. Keepers lower their voices when they say it. I do not say it is deserved. I say that a word like that does not come off.",
  grey: "The word on you has gone quiet. Neither dark nor kind, only unwritten. It is the safest place a person can stand on a road, and the loneliest, and I think you know both.",
  kind: "The road has begun to speak well of you. Do not enjoy it too quickly. A good name is a debt, and the road collects in kindness, and in kindness it charges the most.",
};

/** The line for a change of karma band, or undefined when the band stayed the same. */
export function reputeShiftLine(before: number, after: number): string | undefined {
  const to = reputeOf(after);
  return to === reputeOf(before) ? undefined : REPUTE_SHIFT[to];
}

/**
 * What she says when the player breaks through to a new realm. Keyed by the realm they arrive at, so
 * a player who skips ahead still gets a line that fits. She always styles them by their new realm.
 */
export const REALM_SHIFT: Record<number, string> = {
  1: "There is qi in you now. I felt it from across the hall, thin as a spider’s thread. You are no longer a mortal, Wanderer, and the Law has fewer excuses for you.",
  2: "A foundation. Most of my disciples spend years on that floor, and you laid it between one bell and the next. Do not mistake speed for depth. Depth is what holds when the mist comes up.",
  3: "A core, and a bright one. The hall’s lamps leaned toward you when it formed. Power of that kind is not a gift, Wanderer. It is a debt that has not yet been named.",
  4: "A nascent soul. I have met four people who could say that in my lifetime, and I buried two of them. Walk carefully. Everything that lives longer than it should is hunted by what has already died.",
  5: "You have severed your spirit from your own name. I cannot tell any longer whether I am speaking to the person who climbed my steps or to something that borrowed {their} shoes. I choose to believe it is still you.",
  6: "You are seeking the Dao. I am only an elder of a small sect with a locked hall and a missing seal, and I have nothing left to teach you. I can only ask that you remember who held the door.",
  7: "Ascendant. The Azure Cloud Sect will write your name on a tablet no one will be able to reach. I would rather have kept the mortal who stood dripping at my gate. I did not know I would say so.",
  8: "You walked through the door. I did not think the sect would live to see it, and I find I do not know where to look. If you can hear me, True Immortal, I would ask only that you leave the lamp in the gate-house lit.",
  9: "There is no higher rung, and I have nothing to say that you do not already know. I will say it anyway. I am glad it was you who came up the steps in the rain, and I am glad I was the one who opened the door.",
};

/** The line for a breakthrough to a higher realm, or undefined when the realm did not change. */
export function realmShiftLine(from: number, to: number): string | undefined {
  return to > from ? REALM_SHIFT[to] : undefined;
}

/** How she names the player at their realm: "mortal", "Qi Condenser" and so on. */
export function styleFor(realm: number): string {
  return REALMS[Math.min(Math.max(realm, 0), REALMS.length - 1)].styled;
}

/** The band her respect falls in. Respect is earned by what she sees the player do, and it gates some choices. */
export function respectTierFor(respect: number): RespectTier {
  if (respect <= -25) return "contempt";
  if (respect < 25) return "unregarded";
  if (respect < 50) return "weighed";
  return "respected";
}

/**
 * What she says when her respect moves into a new band. Keyed by the band she arrives at, so a
 * change in either direction has a line that fits.
 */
export const RESPECT_SHIFT: Record<RespectTier, string> = {
  contempt: "I have stopped giving you the benefit of my doubt. The Law does not weigh the words of someone it has already decided to condemn. You made that decision easy for me, and I am not proud of how quickly I took it.",
  unregarded: "I am no longer weighing what you say. That is not the same as ignoring it. I am waiting to see whether there is anything in your words worth the trouble of the scale.",
  weighed: "I have begun to weigh what you say before I answer. Not every word has passed, but enough of them have that I notice the ones that do not.",
  respected: "You have reached a place in my reckoning that very few outsiders ever reach. I will not flatter you by pretending it is easy to keep. Keep it anyway, Wanderer.",
};

/** The line for a change of respect band, or undefined when the band stayed the same. */
export function respectShiftLine(from: RespectTier, to: RespectTier): string | undefined {
  return from === to ? undefined : RESPECT_SHIFT[to];
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
  state: ConditionState,
): NpcReaction {
  const tier = tierFor(scenario.npc ? (state.bonds?.[scenario.npc] ?? 0) : state.npc.trust);
  const memory = scenario.memory?.find((m) => conditionsHold(m.when, state));
  return {
    line: memory ? memory.line : scenario.lines[tier],
    tier,
    remembered: memory !== undefined,
  };
}

/** What a condition may read. Everything past the first five fields is optional so older callers and saves still work. */
export type ConditionState = Pick<GameState, "stats" | "npc" | "flags" | "history" | "tones"> &
  Partial<Pick<GameState, "daoPoints" | "realm" | "level" | "cultivation" | "bonds" | "decisions" | "flagAt" | "sceneId" | "hero" | "wealth" | "items" | "assets" | "speed" | "unfed" | "years" | "wardrobe">>;

/** True when every condition holds. An empty or missing list always holds. */
export function conditionsHold(conditions: Condition[] | undefined, state: ConditionState): boolean {
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
      case "tone": {
        const t = state.tones;
        const recent = c.within === undefined ? t : t.slice(Math.max(0, t.length - c.within));
        return recent.filter((x) => x === c.tone).length >= (c.min ?? 1);
      }
      case "realm": {
        const v = state.realm ?? 0;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "level": {
        const v = levelNow({ realm: state.realm ?? 0, cultivation: state.cultivation ?? 0, level: state.level });
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "progress": {
        const v = Math.round(realmProgress({ cultivation: state.cultivation ?? 0, realm: state.realm ?? 0 }) * 100);
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "roads": {
        const v = Object.entries(state.flags).filter(([flag, on]) => on && flag.startsWith(ROAD_DONE_PREFIX)).length;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "bond": {
        const v = state.bonds?.[c.npc];
        if (v === undefined) return false;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "since": {
        const at = state.flagAt?.[c.flag];
        if (state.flags[c.flag] !== true || at === undefined) return false;
        const v = (state.decisions ?? 0) - at;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "decisions": {
        const v = state.decisions ?? 0;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "mood":
        return moodFor(state.npc) === c.is;
      case "scene":
        return (state.sceneId ?? "").startsWith(c.prefix);
      case "hero": {
        if (!state.hero) return c.is === undefined && c.not !== undefined; // no hero known: only a "not" condition can hold
        const v: string = state.hero[c.field];
        return (c.is === undefined || c.is.includes(v)) && (c.not === undefined || !c.not.includes(v));
      }
      case "standing": {
        const v = state.hero ? standingOf(state.hero, state.realm ?? 0) : 0;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "mastery": {
        const v = daoRankOf(state.daoPoints ?? 0);
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "affinity": {
        const v = state.hero ? affinityOf(state.hero, c.element) : 0;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "wealth": {
        const v = state.wealth ?? 0;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "item": {
        const v = state.items?.[c.item] ?? 0;
        // With only a maximum, zero is allowed: `max: 0` means “carries none”. Otherwise one is the least that counts.
        return v >= (c.min ?? (c.max === undefined ? 1 : 0)) && (c.max === undefined || v <= c.max);
      }
      case "asset":
        return (state.assets ?? []).includes(c.asset) === (c.is ?? true);
      case "holdings": {
        const v = (state.assets ?? []).length;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "speed": {
        const v = state.speed ?? 100;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "unfed":
        return (state.unfed ?? false) === (c.is ?? true);
      case "age": {
        const v = state.hero ? ageOf(state.hero, state.decisions ?? 0) : 24;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "years": {
        const v = state.hero ? lifeLeft(state.hero, { decisions: state.decisions, realm: state.realm, years: state.years }) : 999;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "wardrobe":
        return (state.hero ? ownedGarments({ hero: state.hero, wardrobe: state.wardrobe }) : (state.wardrobe ?? [])).includes(c.attire) === (c.is ?? true);
      case "garments": {
        const v = state.hero ? ownedGarments({ hero: state.hero, wardrobe: state.wardrobe }).length : 0;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "edge": {
        const v = edgeOf(state, { level: c.foe, weak: c.weak, bane: c.bane, boost: c.boost });
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "world": {
        const v = worldMeasure(state.flags, c.measure, c.reach);
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
      case "count": {
        const v = Object.entries(state.flags).filter(([flag, on]) => on && flag.startsWith(c.prefix)).length;
        return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
      }
    }
  });
}
