import { ATTIRES, type Attire } from "./hero";
import type { GameState } from "./types";

/**
 * The wardrobe. A hero begins in the dress they chose, and may come to own more: buy it from a tailor, win it, or take it in pay. What they wear now is
 * `hero.attire`, so every line of the story that reads a hero’s dress reads the dress they have on, and a hero who changes is met differently at the next
 * door. Dress also has a price and a trade: silk costs to keep, a scale jerkin earns on the road, patched hemp begs a little, and every garment sells at a
 * rate that depends on who is wearing the one they came in.
 */
export interface Garment {
  attire: Attire;
  /** With its article’s absence: “an oiled cloak” is `oiled cloak`. */
  name: string;
  /** What the price of a new one is, against the wage of the day. */
  weight: number;
  /** The share of an item’s value a seller dressed in this gets from a buyer. */
  rate: number;
  /** What the dress brings in on each payday, away from the sect, at the first rung. */
  pays: number;
  /** What the dress costs to keep on each payday at the first rung. */
  keeps: number;
  /** Why it pays, said in the panel. */
  trade: string;
  /** Why it costs. */
  upkeep: string;
}

export const GARMENTS: Record<Attire, Garment> = {
  rags: { attire: "rags", name: "patched hemp", weight: 0.5, rate: 0.4, pays: 1, keeps: 0, trade: "alms and gleanings", upkeep: "" },
  traveller: { attire: "traveller", name: "oiled cloak", weight: 1, rate: 0.5, pays: 0, keeps: 0, trade: "", upkeep: "" },
  scholar: { attire: "scholar", name: "ink-stained robe", weight: 1.2, rate: 0.55, pays: 1, keeps: 0, trade: "copying fees", upkeep: "" },
  silk: { attire: "silk", name: "embroidered silk", weight: 3, rate: 0.65, pays: 0, keeps: 1, trade: "", upkeep: "pressing, cleaning and a boy to carry the hem" },
  armour: { attire: "armour", name: "scale jerkin", weight: 2.5, rate: 0.45, pays: 2, keeps: 1, trade: "hire as an escort", upkeep: "oil and lacing" },
};

export const garmentName = (attire: Attire): string => GARMENTS[attire].name;

/** The flags a change of dress sets. A garment ever worn leaves `wore_`; the last change leaves its `from` and `to`, which the Elder reads. */
export const WORE_PREFIX = "wore_";
export const FROM_PREFIX = "dressing_from_";
export const TO_PREFIX = "dressing_to_";
export const woreFlag = (attire: Attire) => `${WORE_PREFIX}${attire}`;
export const fromFlag = (attire: Attire) => `${FROM_PREFIX}${attire}`;
export const toFlag = (attire: Attire) => `${TO_PREFIX}${attire}`;

/** What a new garment costs at a road of this realm: the wage of two days at the first rung, a tailor’s margin, and the weight of the cloth. */
export function garmentPrice(attire: Attire, realm: number): number {
  return Math.max(2, Math.round((6 + 4 * Math.max(0, realm)) * GARMENTS[attire].weight));
}

/** What a pawnbroker gives for a garment: half its price at the road’s realm. */
export const pawnValue = (attire: Attire, realm: number): number => Math.max(1, Math.round(garmentPrice(attire, realm) / 2));

/** Realms multiply what dress pays and costs: the same silk costs a sage more to keep. */
const scale = (realm: number) => 1 + Math.floor(Math.max(0, realm) / 3);

/** What the dress on the hero’s back brings in and costs on a payday. A beggar’s alms and a hired escort’s wage come only on the road; the sect feeds those who stay. */
export function dressTrade(attire: Attire, realm: number, away: boolean): { income: number; upkeep: number } {
  const g = GARMENTS[attire];
  const income = attire === "scholar" || away ? g.pays * scale(realm) : 0;
  return { income, upkeep: g.keeps * scale(realm) };
}

/** What a seller gets from a buyer for an item: a share of its value that depends on how they are dressed. */
export const marketRate = (attire: Attire): number => GARMENTS[attire].rate;

/** The garments the hero owns, with the one they wear always among them. */
export function ownedGarments(state: Pick<GameState, "hero"> & Partial<Pick<GameState, "wardrobe">>): Attire[] {
  const list = state.wardrobe ?? [];
  return list.includes(state.hero.attire) ? list : [state.hero.attire, ...list];
}

const withoutDressing = (flags: Record<string, boolean>, flagAt: Record<string, number>) => {
  const keep = (k: string) => !k.startsWith(FROM_PREFIX) && !k.startsWith(TO_PREFIX);
  return {
    flags: Object.fromEntries(Object.entries(flags).filter(([k]) => keep(k))),
    flagAt: Object.fromEntries(Object.entries(flagAt).filter(([k]) => keep(k))),
  };
};

/** Owns a garment, without putting it on. */
export function gainGarment(state: GameState, attire: Attire): GameState {
  const list = ownedGarments(state);
  return list.includes(attire) ? { ...state, wardrobe: list } : { ...state, wardrobe: [...list, attire] };
}

/** Puts a garment on, owning it first if the hero did not. A change is a line in the log, and the Elder reads it at the next decision. */
export function putOn(state: GameState, attire: Attire): GameState {
  const owned = gainGarment(state, attire);
  if (owned.hero.attire === attire) return owned;
  const from = owned.hero.attire;
  const base = withoutDressing(owned.flags, owned.flagAt);
  const at = owned.decisions;
  return {
    ...owned,
    hero: { ...owned.hero, attire },
    flags: { ...base.flags, [woreFlag(attire)]: true, [fromFlag(from)]: true, [toFlag(attire)]: true },
    flagAt: { ...base.flagAt, [fromFlag(from)]: at, [toFlag(attire)]: at, ...(owned.flags[woreFlag(attire)] ? {} : { [woreFlag(attire)]: at }) },
    log: [...owned.log, { kind: "ledger", text: `You change out of your ${garmentName(from)} and into ${garmentName(attire)}.` }],
  };
}

/** Parts with a garment. The last one is never lost, and a worn one gives way to the first the hero still owns. */
export function loseGarment(state: GameState, attire: Attire): GameState {
  const list = ownedGarments(state);
  if (!list.includes(attire) || list.length <= 1) return { ...state, wardrobe: list };
  const rest = list.filter((a) => a !== attire);
  if (state.hero.attire !== attire) return { ...state, wardrobe: rest };
  // The garment on the hero’s back goes last: they change out of it first, and only then is it gone.
  const changed = putOn({ ...state, wardrobe: list }, rest[0]);
  return { ...changed, wardrobe: changed.wardrobe.filter((a) => a !== attire) };
}

/** True when the hero may put this garment on from the panel: they own it and it is not what they wear. */
export const canChange = (state: Pick<GameState, "hero"> & Partial<Pick<GameState, "wardrobe">>, attire: Attire): boolean =>
  attire !== state.hero.attire && ownedGarments(state).includes(attire);

export interface WardrobeSummary {
  /** Garments owned now. */
  owned: number;
  /** Different garments the hero has put on since they began, apart from the one they began in. */
  worn: number;
  /** Garments the hero has ever worn or owned, of the five. */
  of: number;
}

export function wardrobeSummary(state: Pick<GameState, "hero" | "flags"> & Partial<Pick<GameState, "wardrobe">>): WardrobeSummary {
  const worn = ATTIRES.filter((a) => state.flags[woreFlag(a.value)] === true).length;
  return { owned: ownedGarments(state).length, worn, of: ATTIRES.length };
}
