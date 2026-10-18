import { REALMS } from "./realms";

/**
 * The calendar. The story keeps a count of days, and every decision spends some of them. How many depends on the realm: a Mortal’s decision is an hour or
 * two of a single day, a Condenser’s is a day or two, and each realm after that is a longer stride, until a Dao Sovereign’s is most of a year. The
 * years of the hero’s body are the days divided by 365, so a hero ages the way their realm lets them live: slowly through the first weeks on the mountain, by the season through
 * Foundation Establishment, by the decade through Nascent Soul. A breakthrough is a retreat with the door shut, and the retreat has a length; a trial
 * thrown back costs the days of the mending. The Long Count Roads spend whole units of a realm’s time at once, and say what they cost before they do.
 */

export const DAYS_PER_YEAR = 365;
export const DAYS_PER_MONTH = 30;
/** The year is twelve months of thirty days and five days out of time, which the sect keeps as the Festival of Lamps. */
export const MONTHS = 12;
export const FESTIVAL_DAYS = DAYS_PER_YEAR - MONTHS * DAYS_PER_MONTH;

/** The story opens in the third month of the first year, in the spring rains, on the fifteenth day. */
export const CALENDAR_START = 2 * DAYS_PER_MONTH + 14;

export type Season = "spring" | "summer" | "autumn" | "winter";
export const SEASONS: readonly Season[] = ["spring", "summer", "autumn", "winter"];

/** Days a decision takes in the telling of the story itself: a scene of the chapters or the books is an hour or a few, and a night in the cellar is a night. */
export const PLOT_STRIDE = 0.2;

/** Days one decision takes at each realm, on the roads. The rest of the ladder is longer than the one before, as the realm’s own sense of a day is. */
export const STRIDE: readonly number[] = [0.5, 2, 4, 8, 20, 40, 80, 100, 150, 250];

/** Days the door stays shut when a hero breaks through into a realm (index 1 to 9). Mortal has no door to shut. */
export const SECLUSION: readonly number[] = [0, 2, 10, 45, 180, 700, 2200, 5500, 12000, 25000];

/** The days one decision takes on a road at a realm. */
export function strideOf(realm: number): number {
  return STRIDE[Math.min(Math.max(0, Math.floor(realm)), STRIDE.length - 1)];
}

/**
 * The days a decision takes. The story is told in plot time: what the chapters and the books narrate happens in hours and nights, whatever the hero’s realm. The seasons
 * go by on the roads, where the hero practises, works, waits and walks, and there a decision takes the stride of the realm.
 */
export function decisionDays(realm: number, onRoad: boolean): number {
  return onRoad ? strideOf(realm) : PLOT_STRIDE;
}

/** The days of the retreat that opens a realm. */
export function seclusionOf(realm: number): number {
  return SECLUSION[Math.min(Math.max(0, Math.floor(realm)), SECLUSION.length - 1)];
}

/** The days a thrown-back attempt at a wall costs in mending: five strides of the realm the hero stands in. */
export function mendingOf(realm: number): number {
  return Math.max(1, Math.round(strideOf(realm) * 5));
}

/** Keeps the day count to two decimals, so strides of half a day do not leave long tails behind them. */
export const tidyDays = (days: number): number => Math.round(days * 100) / 100;

/** What a legacy save’s decisions come to in days, taken at the realm the hero stands in. */
export function legacyDays(decisions: number, realm: number): number {
  return tidyDays(Math.max(0, decisions) * strideOf(realm));
}

export interface CalendarDate {
  /** Years since the story began, counting the first as 1. */
  year: number;
  /** 1 to 12, or 0 on the days out of time. */
  month: number;
  /** The day of the month, or of the festival. */
  day: number;
  season: Season;
  /** The bell, 1 to 12, the day is on. */
  bell: number;
  /** Whole days since the story began. */
  elapsed: number;
}

/** The date a count of days comes to. */
export function dateOf(days: number): CalendarDate {
  const whole = Math.floor(Math.max(0, days));
  const total = whole + CALENDAR_START;
  const year = Math.floor(total / DAYS_PER_YEAR) + 1;
  const doy = total % DAYS_PER_YEAR;
  const festival = doy >= MONTHS * DAYS_PER_MONTH;
  const month = festival ? 0 : Math.floor(doy / DAYS_PER_MONTH) + 1;
  const day = festival ? doy - MONTHS * DAYS_PER_MONTH + 1 : (doy % DAYS_PER_MONTH) + 1;
  const season: Season = festival ? "winter" : SEASONS[Math.floor((month - 1) / 3)];
  const bell = Math.min(12, Math.floor((Math.max(0, days) - whole) * 12) + 1);
  return { year, month, day, season, bell, elapsed: whole };
}

/** The season a count of days is in. */
export const seasonOf = (days: number): Season => dateOf(days).season;

const MONTH_NAME = ["Festival", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
const ORD = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
const ordinal = (n: number): string => (n >= 1 && n < ORD.length ? ORD[n] : `${n}th`);

/** The date as the sect writes it, whatever the realm: “Third Month, 16th day, Year 1”. */
export function dateLabel(days: number): string {
  const d = dateOf(days);
  return d.month === 0 ? `Festival of Lamps, day ${d.day}, Year ${d.year}` : `${MONTH_NAME[d.month]} Month, day ${d.day}, Year ${d.year}`;
}

const CAPITAL = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** What each realm counts its time in, and how its clock reads. The same day is a different thing to a Mortal and to a Dao Sovereign. */
export interface ClockVoice {
  /** The unit the realm keeps its time by. */
  unit: string;
  /** The days of one such unit. */
  days: number;
  /** One line on how the realm feels a day. */
  sense: string;
  /** The clock as the hero reads it at this realm. */
  read: (days: number) => string;
}

const years = (days: number) => Math.floor(Math.max(0, days) / DAYS_PER_YEAR);

export const CLOCK: readonly ClockVoice[] = [
  {
    unit: "bell",
    days: 1 / 24,
    sense: "A mortal’s time is the bell. You know the hour by the light on the wall and the sound of the gate.",
    read: (d) => {
      const date = dateOf(d);
      return `Day ${date.elapsed + 1}, the ${ordinal(date.bell)} bell of twelve`;
    },
  },
  {
    unit: "day",
    days: 1,
    sense: "A Condenser’s time is the day, counted breath by breath. A lost count costs a morning.",
    read: (d) => `Day ${dateOf(d).elapsed + 1} of the count`,
  },
  {
    unit: "season",
    days: DAYS_PER_YEAR / 4,
    sense: "A Foundation Builder’s time is the season. A course of stone is laid in one and cures in the next.",
    read: (d) => {
      const date = dateOf(d);
      return `${CAPITAL(date.season)} of Year ${date.year}`;
    },
  },
  {
    unit: "year",
    days: DAYS_PER_YEAR,
    sense: "A Core Cultivator’s time is the year, because a core is turned once round it, and no faster.",
    read: (d) => `Year ${dateOf(d).year}, ${MONTH_NAME[dateOf(d).month] ?? "Festival"} Month`,
  },
  {
    unit: "decade",
    days: DAYS_PER_YEAR * 10,
    sense: "A Nascent Soul master’s time is the decade. The soul grows a year in ten of the body’s.",
    read: (d) => `Year ${dateOf(d).year}, the ${ordinal(Math.floor(years(d) / 10) + 1)} decade`,
  },
  {
    unit: "generation",
    days: DAYS_PER_YEAR * 25,
    sense: "A Spirit Severing sage’s time is the generation. The people you knew are grandparents, then names on a wall.",
    read: (d) => `Year ${dateOf(d).year}, the ${ordinal(Math.floor(years(d) / 25) + 1)} generation`,
  },
  {
    unit: "lifetime",
    days: DAYS_PER_YEAR * 60,
    sense: "A Dao Seeker’s time is the lifetime of a mortal. A road is walked for as long as one of them lives.",
    read: (d) => `Year ${dateOf(d).year}, the ${ordinal(Math.floor(years(d) / 60) + 1)} lifetime`,
  },
  {
    unit: "dynasty",
    days: DAYS_PER_YEAR * 100,
    sense: "An Ascendant’s time is the dynasty. A house rises in the lowlands, rules, and is forgotten, between one sitting and the next.",
    read: (d) => `Year ${dateOf(d).year}, the ${ordinal(Math.floor(years(d) / 100) + 1)} dynasty`,
  },
  {
    unit: "age",
    days: DAYS_PER_YEAR * 150,
    sense: "A True Immortal’s time is the age. The mountains keep a shape for an age and then wear to another.",
    read: (d) => `Year ${dateOf(d).year}, the ${ordinal(Math.floor(years(d) / 150) + 1)} age`,
  },
  {
    unit: "era",
    days: DAYS_PER_YEAR * 300,
    sense: "A Dao Sovereign’s time is the era. The seasons are a weather you keep, and the eras are the crop.",
    read: (d) => `Year ${dateOf(d).year}, the ${ordinal(Math.floor(years(d) / 300) + 1)} era`,
  },
];

if (CLOCK.length !== REALMS.length) throw new Error("every realm needs a clock voice");

/** The clock as the realm reads it. */
export function clockOf(realm: number, days: number): string {
  return CLOCK[Math.min(Math.max(0, Math.floor(realm)), CLOCK.length - 1)].read(days);
}

/** The unit of time of a realm, with its length in days. */
export function unitOf(realm: number): ClockVoice {
  return CLOCK[Math.min(Math.max(0, Math.floor(realm)), CLOCK.length - 1)];
}

/** How long a span of days is, in the largest plain unit it fills: “3 days”, “5 months”, “40 years”. */
export function spanLabel(days: number): string {
  const d = Math.max(0, days);
  if (d < 1) return `${Math.max(1, Math.round(d * 12))} bell${Math.round(d * 12) > 1 ? "s" : ""}`;
  if (d < 2 * DAYS_PER_MONTH) return `${Math.round(d)} day${Math.round(d) === 1 ? "" : "s"}`;
  if (d < DAYS_PER_YEAR) return `${Math.round(d / DAYS_PER_MONTH)} months`;
  const y = Math.round(d / DAYS_PER_YEAR);
  return `${y} year${y === 1 ? "" : "s"}`;
}

/** The log line for the turn of a season, in the voice of the realm the hero keeps it in. */
export const SEASON_LINE: readonly Record<Season, string>[] = [
  { spring: "The rains thin.", summer: "The heat comes up the stair.", autumn: "The wind turns and brings the smell of burning stubble.", winter: "The first frost sits on the gate." },
  { spring: "Your count passes a thaw. The cold thread runs warmer in the breath.", summer: "The long light eats your evenings, and your count runs on through them.", autumn: "The dry air sharpens the breath, and the thread rings.", winter: "The cold comes, and the thread and the cold are for a while the same thing." },
  { spring: "Spring. The mortar takes, and the footings of last year are sound.", summer: "Summer. The courses go up fast in the long light and crack in the heat if you hurry them.", autumn: "Autumn. The house stands dry before the rains, and you count what it cost.", winter: "Winter. Nothing is laid. The house sits on its footings and tells you what it will carry." },
  { spring: "Another spring turns the core once more. A year is the round of it.", summer: "A summer at the forge. The core rings higher in the heat.", autumn: "Autumn at the core: the quench, and the year’s grain stored.", winter: "Winter closes the year. The core turns slow and bright, and keeps its own counsel." },
  { spring: "The spring is not yet the soul’s season, only the body’s. It notes it and sleeps.", summer: "A summer goes by in the soul’s afternoon. It has learned to nod at the passing of them.", autumn: "An autumn, and the body’s harvest. The soul watches it come in as it would a neighbour’s.", winter: "A winter. The soul keeps its own, a long one, and the body’s is a small cold in it." },
  { spring: "Spring in the valley. Someone you knew is born, or is buried, and you hear of it late.", summer: "A summer. The people of the lower road work their fields, and none of them are those you knew.", autumn: "Autumn. A name drops from the list of those who used to write to you.", winter: "Winter. You count who is left, and the count is shorter than it was." },
  { spring: "A spring on the Dao. You note it as a traveller notes a milestone: it is behind you.", summer: "A summer is a stretch of road, hot and well lit.", autumn: "An autumn, and the road yellows. You walk through it.", winter: "A winter on the road, and the Dao does not mind it, nor do you." },
  { spring: "A spring comes to the lowlands, and it is another dynasty’s.", summer: "A summer. A house rises in the plain below, and falls in the next.", autumn: "Autumn, and an emperor you did not meet is buried.", winter: "Winter. The door is open and it is cold on the sill." },
  { spring: "A spring turns in the garden. It is a small thing, and it is yours to keep.", summer: "A summer in the long noon. You have forgotten what the other kind is for.", autumn: "An autumn for the garden to practise on.", winter: "A winter: the one you made, kept for its own sake." },
  { spring: "A spring. You let it come, as one lets a guest.", summer: "A summer. It is kept, as a ledger is kept.", autumn: "An autumn is the year’s last word on the matter.", winter: "A winter, and the era begins again at its first page." },
];

/** The line the log carries when a season turns. */
export function seasonLine(realm: number, season: Season): string {
  return SEASON_LINE[Math.min(Math.max(0, Math.floor(realm)), SEASON_LINE.length - 1)][season];
}

/** True when the hero crossed a turn of the season going from one day count to another. */
export function seasonTurned(before: number, after: number): boolean {
  const a = dateOf(before);
  const b = dateOf(after);
  return a.season !== b.season || a.year !== b.year;
}

/** What the retreat at a breakthrough says, in the voice of the realm opened: how long the door stays shut. */
export function seclusionLine(realm: number): string {
  const days = seclusionOf(realm);
  if (days <= 0) return "";
  return `The door stays shut for ${spanLabel(days)}.`;
}
