import { REALMS, breakthroughNotes, heartDemonBlocks, reachedFlag } from "./cultivation";
import { ageSpeed, AGE_LABEL, lifeLeft, waningSpeed } from "./age";
import { AGE_WEALTH, DEFAULT_HERO, type Background, type Hero, type Status } from "./hero";
import { aidReachFor, attunementParts, holdingFactor, livingRebate, ORIGIN_LABEL, ORIGIN_WEALTH, originSpeed, talentSpeed, TALENT_LABEL, toolFactor, unfedFactor } from "./path";
import { dressTrade } from "./wardrobe";
import type { AssetDef, GameState, ItemDef, LogEntry, Story } from "./types";

/**
 * The purse, the pack and the holdings. Wealth is counted in spirit stones. A hero who has money, a pill, a tool or a lease
 * cultivates faster, breaks a realm open sooner, and is met differently at the door. A hero who has none of these is not stuck;
 * they cultivate at the plain rate, and below the cost of living they cultivate slower.
 */

/** Decisions between one payday and the next. On a payday holdings pay and cost, and the hero eats. */
export const PAYDAY_EVERY = 8;

/** Spirit stones a hero starts with, by papers and by trade. */
const STATUS_WEALTH: Record<Status, number> = { outcast: 3, commoner: 8, gentry: 24, noble: 60 };
const BACKGROUND_WEALTH: Record<Background, number> = { orphan: 0, scholar: 2, soldier: 4, merchant: 12, farmer: 3, healer: 4 };

export function startingWealth(hero: Hero): number {
  return Math.max(0, STATUS_WEALTH[hero.status] + BACKGROUND_WEALTH[hero.background] + ORIGIN_WEALTH[hero.origin] + (AGE_WEALTH[hero.age] ?? 0));
}

/**
 * How well a trade takes to cultivation, in percentage points. A copyist's apprentice reads the manuals, an orphan has
 * spent years hungry for a way out. The plainest hero (a paddy hand) cultivates at the base rate.
 */
const BACKGROUND_APTITUDE: Record<Background, number> = { orphan: 3, scholar: 5, soldier: 0, merchant: 0, farmer: 0, healer: 2 };

/** Percentage points a trade adds to the cultivation speed. */
export const aptitudeFor = (hero: Hero): number => BACKGROUND_APTITUDE[hero.background];

/** The sect pays a stipend to a hero living on its mountain: a stone, and one more for every realm. */
export const stipendFor = (realm: number): number => 1 + realm;

/** What it costs to live and cultivate away from the sect, per payday. A Mortal and a Qi Condenser live on rice; higher realms eat spirit stones. */
const LIVING: readonly number[] = [0, 0, 1, 1, 2, 2, 3, 3];
export const livingCostFor = (realm: number, hero: Hero = DEFAULT_HERO): number =>
  Math.max(0, LIVING[Math.min(Math.max(0, realm), LIVING.length - 1)] - livingRebate(hero));

/** Cultivation speed, as a percentage of the plain rate. */
export const BASE_SPEED = 100;
export const UNFED_PENALTY = 20;
export const MIN_SPEED = 50;
export const MAX_SPEED = 250;

/** Where the breakthrough pill starts to work: a pill helps a hero within this share of the next realm's points. */
export const AID_REACH = 0.85;

type Held = Pick<GameState, "wealth" | "items" | "assets" | "realm" | "cultivation" | "stats" | "hero" | "visited" | "flags"> & Partial<Pick<GameState, "decisions" | "years">>;

/** True while the hero lives on the sect's stipend: the story names the scene at which they leave. */
export function inSect(story: Pick<Story, "leavesSect">, state: Pick<GameState, "visited">): boolean {
  return story.leavesSect === undefined || !state.visited.includes(story.leavesSect);
}

export function itemOf(story: Pick<Story, "items">, id: string): ItemDef | undefined {
  return story.items?.[id];
}

export function assetOf(story: Pick<Story, "assets">, id: string): AssetDef | undefined {
  return story.assets?.[id];
}

/** The items carried, in the order the story defines them. */
export function carried(story: Pick<Story, "items">, state: Pick<GameState, "items">): { item: ItemDef; count: number }[] {
  return Object.values(story.items ?? {}).flatMap((item) => ((state.items[item.id] ?? 0) > 0 ? [{ item, count: state.items[item.id] }] : []));
}

/** The assets held, in the order the hero came to hold them. */
export function held(story: Pick<Story, "assets">, state: Pick<GameState, "assets">): AssetDef[] {
  return state.assets.flatMap((id) => {
    const asset = story.assets?.[id];
    return asset ? [asset] : [];
  });
}

/** True when the hero is short of the cost of living away from the sect, and is Unfed. */
export function isUnfed(story: Pick<Story, "leavesSect">, state: Pick<GameState, "wealth" | "realm" | "visited"> & Partial<Pick<GameState, "hero">>): boolean {
  return !inSect(story, state) && state.wealth < livingCostFor(state.realm, state.hero);
}

export interface SpeedPart {
  label: string;
  /** Percentage points, positive or negative. */
  points: number;
}

/** Everything that moves the hero's cultivation speed, each with a label, so the panel can show where the rate comes from. */
export function speedParts(story: Story, state: Held): SpeedPart[] {
  const parts: SpeedPart[] = [{ label: "Plain rate", points: BASE_SPEED }];
  const aptitude = aptitudeFor(state.hero);
  if (aptitude) parts.push({ label: "Aptitude of your trade", points: aptitude });
  const years = ageSpeed(state.hero.age, state.realm);
  if (years) parts.push({ label: AGE_LABEL[state.hero.age], points: years });
  const waning = waningSpeed(lifeLeft(state.hero, state));
  if (waning) parts.push(waning);
  const root = talentSpeed(state.hero.talent, state.realm);
  if (root) parts.push({ label: TALENT_LABEL[state.hero.talent], points: root });
  const began = originSpeed(state.hero.origin, state.realm);
  if (began) parts.push({ label: ORIGIN_LABEL[state.hero.origin], points: began });
  parts.push(...attunementParts(state.flags));
  for (const { item } of carried(story, state)) {
    if (item.speed && state.realm >= (item.needsRealm ?? 0)) parts.push({ label: item.name, points: Math.round(item.speed * toolFactor(state.hero)) });
  }
  for (const asset of held(story, state)) {
    if (asset.speed && state.realm >= (asset.needsRealm ?? 0)) parts.push({ label: asset.name, points: Math.round(asset.speed * holdingFactor(state.hero)) });
  }
  if (isUnfed(story, state)) parts.push({ label: "Unfed: you cannot pay your way", points: -Math.round(UNFED_PENALTY * unfedFactor(state.hero)) });
  return parts;
}

/** The hero's cultivation speed as a percentage of the plain rate, within limits. */
export function cultivationSpeed(story: Story, state: Held): number {
  const total = speedParts(story, state).reduce((n, p) => n + p.points, 0);
  return Math.min(MAX_SPEED, Math.max(MIN_SPEED, total));
}

/** Points an amount is worth at the hero's speed, kept to two places so the totals stay readable. */
export function scaled(amount: number, speed: number): number {
  return Math.round(amount * speed) / 100;
}

/** Cultivation kept to two places, so floating sums never drift into long tails. */
export const tidy = (points: number): number => Math.round(points * 100) / 100;

/** What one payday brings and costs the hero now, for the panel: stipend, income, upkeep and living. */
export function ledgerOf(story: Story, state: Held): { stipend: number; income: number; upkeep: number; living: number; dress: number; dressCost: number; net: number } {
  const sect = inSect(story, state);
  const stipend = sect ? stipendFor(state.realm) : 0;
  const assets = held(story, state);
  const income = assets.reduce((n, a) => n + a.income, 0);
  const upkeep = assets.reduce((n, a) => n + a.upkeep, 0);
  const living = sect ? 0 : livingCostFor(state.realm, state.hero);
  const dressed = dressTrade(state.hero.attire, state.realm, !sect);
  return { stipend, income, upkeep, living, dress: dressed.income, dressCost: dressed.upkeep, net: stipend + income - upkeep - living + dressed.income - dressed.upkeep };
}

const note = (text: string): LogEntry => ({ kind: "ledger", text });

/**
 * A payday. The stipend and the holdings' income come in, each holding's upkeep goes out (a holding whose upkeep
 * cannot be met is seized), and a hero away from the sect pays the cost of living as far as the purse allows.
 */
export function payday(story: Story, state: GameState): GameState {
  const sect = inSect(story, state);
  let wealth = state.wealth + (sect ? stipendFor(state.realm) : 0);
  const log: LogEntry[] = [];
  const kept: string[] = [];
  let earned = 0;
  let spent = 0;
  for (const id of state.assets) {
    const asset = story.assets?.[id];
    if (!asset) continue;
    wealth += asset.income;
    earned += asset.income;
    if (wealth >= asset.upkeep) {
      wealth -= asset.upkeep;
      spent += asset.upkeep;
      kept.push(id);
    } else {
      log.push(note(`Payday: you cannot meet the upkeep of ${asset.name}. Its keepers take it back.`));
    }
  }
  const dressed = dressTrade(state.hero.attire, state.realm, !sect);
  wealth += dressed.income;
  const dressPaid = Math.min(wealth, dressed.upkeep);
  wealth -= dressPaid;
  if (dressed.income > 0 || dressPaid > 0) {
    log.push(note(`Payday: your dress brings in ${dressed.income} and costs ${dressPaid}.`));
  }
  const living = sect ? 0 : livingCostFor(state.realm, state.hero);
  const eaten = Math.min(wealth, living);
  wealth -= eaten;
  const wasUnfed = isUnfed(story, state);
  const next: GameState = { ...state, wealth, assets: kept };
  if (earned > 0 || spent > 0) {
    log.unshift(note(`Payday: your holdings bring in ${earned} spirit stones and cost ${spent}. You hold ${wealth}.`));
  }
  if (!wasUnfed && isUnfed(story, next)) {
    log.push(note("Payday: the purse cannot cover your keep. You are Unfed, and your cultivation slows until it can."));
  }
  return log.length ? { ...next, log: [...next.log, ...log] } : next;
}

/** Adds to the pack. */
export function giveItem(items: Record<string, number>, id: string, count = 1): Record<string, number> {
  return { ...items, [id]: (items[id] ?? 0) + Math.max(0, count) };
}

/** Takes from the pack, never below none; an item whose count falls to zero leaves the pack. */
export function takeItem(items: Record<string, number>, id: string, count = 1): Record<string, number> {
  const left = (items[id] ?? 0) - Math.max(0, count);
  const { [id]: _gone, ...rest } = items;
  void _gone;
  return left > 0 ? { ...rest, [id]: left } : rest;
}

/**
 * A pill that helps the hero into the next realm. When the points have come within reach of the next realm and the hero
 * carries a pill made for it, the pill is eaten and the realm opens. A heart demon still holds the door against the pill.
 */
export function applyAid(story: Story, state: GameState): GameState {
  const next = state.realm + 1;
  const realm = REALMS[next];
  if (!realm || state.cultivation >= realm.threshold || state.cultivation < realm.threshold * aidReachFor(state.hero)) return state;
  const pill = Object.values(story.items ?? {}).find((item) => item.aid === next && (state.items[item.id] ?? 0) > 0);
  if (!pill) return state;
  const raised: GameState = { ...state, cultivation: realm.threshold };
  if (heartDemonBlocks(raised)) return state;
  return {
    ...raised,
    realm: next,
    flags: { ...raised.flags, [reachedFlag(next)]: true },
    flagAt: { ...raised.flagAt, [reachedFlag(next)]: raised.decisions },
    items: takeItem(state.items, pill.id),
    log: [...state.log, { kind: "realm", text: `Breakthrough: ${realm.name}, with the help of the ${pill.name}. ${realm.arrival}${breakthroughNotes(state, next)}` }],
  };
}

/** Choices that spend or earn: what the stage shows beside a choice, so the price is read before it is paid. */
export function priceTag(effects: readonly { kind: string; amount?: number }[] | undefined): { cost: number; gain: number } {
  let cost = 0;
  let gain = 0;
  for (const e of effects ?? []) {
    if (e.kind !== "addWealth" || e.amount === undefined) continue;
    if (e.amount < 0) cost -= e.amount;
    else gain += e.amount;
  }
  return { cost, gain };
}
