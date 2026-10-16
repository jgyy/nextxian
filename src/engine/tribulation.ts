/**
 * Tribulations. Every realm ends in a trial the sky sets before the next one opens: the cold thread a mortal must feel before any qi will stay, the wayward breath
 * of the Qi Condenser, the nine bells of the Foundation, the soul-fire of the Core, the severing gale, the Ledger’s audit, the nine gates and the silence after
 * them. The Tribulation Roads are eight waysides, one for each, where four keepers let a hero sit the trial in rehearsal, and a hero who has weathered it
 * meets the real thing prepared. The same ladder says how much the sect bows: the higher the realm, the lower the bow. Counted from the flags the roads set,
 * so a save from before them reads as nothing tried.
 */
export interface Tribulation {
  /** The realm the trial stands at the top of: a hero of this realm is ready to be tried, one below is not, one above has been. */
  realm: number;
  name: string;
  /** Two or three words for the panel. */
  short: string;
  /** What the sky sends, in a clause that completes “Heaven sends …”. */
  sends: string;
}

export const TRIBULATIONS: readonly Tribulation[] = [
  { realm: 0, name: "The Cold Thread", short: "Thread", sends: "a thread of cold that a mortal must feel before any qi will stay" },
  { realm: 1, name: "The Wayward Breath", short: "Breath", sends: "a breath that runs backward through the meridians and asks the Qi Condenser to hold still" },
  { realm: 2, name: "The Nine Bells", short: "Bells", sends: "nine strokes of heavenly thunder, one for each bell the Foundation Builder has not yet rung" },
  { realm: 3, name: "The Soul-Fire", short: "Fire", sends: "a white fire that burns whatever the Core has hidden behind its gold" },
  { realm: 4, name: "The Severing Gale", short: "Gale", sends: "a wind that cuts every cord the Nascent Soul still ties to the dust of old names" },
  { realm: 5, name: "The Ledger’s Audit", short: "Audit", sends: "a reading of the Ledger, line by line, by whatever writes it" },
  { realm: 6, name: "The Nine Gates", short: "Gates", sends: "nine gates of the sky, each of which asks a different thing and takes it" },
  { realm: 7, name: "The Silence After", short: "Silence", sends: "nothing at all, which is the hardest trial of the Ascendant, and which every Ascendant meets alone" },
  { realm: 8, name: "The Weight of the Door", short: "Weight", sends: "the weight of the door the True Immortal has walked through, laid on them all at once, as though the sky wished to know what it had let out" },
  { realm: 9, name: "The Name Unwritten", short: "Name", sends: "a page with no name on it, and the question of whether a Sovereign needs to be written anywhere at all" },
];

/** Flags the Tribulation Roads set. A wayside is numbered from one, and a road is told by its id. */
export const TRIB_DONE_PREFIX = "tb_done_";
export const TRIB_WON_PREFIX = "tb_won_";
export const TRIB_LOST_PREFIX = "tb_lost_";
export const TRIB_FLED_PREFIX = "tb_fled_";
export const TRIB_SCAR_PREFIX = "tbs_";
export const tribWonFlag = (wayside: number, id: string) => `${TRIB_WON_PREFIX}w${wayside}_${id}`;
export const tribLostFlag = (wayside: number, id: string) => `${TRIB_LOST_PREFIX}w${wayside}_${id}`;
export const tribFledFlag = (wayside: number, id: string) => `${TRIB_FLED_PREFIX}w${wayside}_${id}`;
export const tribDoneFlag = (wayside: number, id: string) => `${TRIB_DONE_PREFIX}w${wayside}_${id}`;
export const tribScarPrefix = (id: string) => `${TRIB_SCAR_PREFIX}${id}_`;

/** What a hero must have in hand to meet a trial of a realm: qi to stand, insight to read, karma to be sheltered by what they have done. */
export const trialQi = (realm: number) => 6 + 3 * realm;
export const trialInsight = (realm: number) => 8 + 2 * realm;
export const trialKarma = (realm: number) => Math.max(0, 2 * realm - 4);
/** What standing through one blow costs in qi. */
export const trialCost = (realm: number) => 3 + realm;

const countFlags = (flags: Record<string, boolean>, prefix: string) => Object.entries(flags).filter(([flag, on]) => on && flag.startsWith(prefix)).length;

export interface TribulationRecord {
  roads: number;
  won: number;
  lost: number;
  fled: number;
}

/** What a hero has done at the trial of each realm, from the flags. */
export function tribulationRecord(flags: Record<string, boolean>): TribulationRecord[] {
  return TRIBULATIONS.map((t) => {
    const w = `w${t.realm + 1}_`;
    return {
      roads: countFlags(flags, `${TRIB_DONE_PREFIX}${w}`),
      won: countFlags(flags, `${TRIB_WON_PREFIX}${w}`),
      lost: countFlags(flags, `${TRIB_LOST_PREFIX}${w}`),
      fled: countFlags(flags, `${TRIB_FLED_PREFIX}${w}`),
    };
  });
}

export interface TribulationSummary {
  roads: number;
  won: number;
  lost: number;
  fled: number;
  /** Tribulations weathered at least once, of eight. */
  weathered: number;
}

export function tribulationSummary(flags: Record<string, boolean>): TribulationSummary {
  const rows = tribulationRecord(flags);
  return {
    roads: rows.reduce((n, r) => n + r.roads, 0),
    won: rows.reduce((n, r) => n + r.won, 0),
    lost: rows.reduce((n, r) => n + r.lost, 0),
    fled: rows.reduce((n, r) => n + r.fled, 0),
    weathered: rows.filter((r) => r.won > 0).length,
  };
}

/** True when the hero has weathered the trial that stands before the realm they are entering. */
export const preparedFor = (flags: Record<string, boolean>, entering: number): boolean => entering >= 1 && countFlags(flags, `${TRIB_WON_PREFIX}w${entering}_`) > 0;

/** How the sect receives a hero of each realm, from the lowest bow to the highest. */
export interface Deference {
  name: string;
  /** What the keepers of the sect do when such a hero comes in. */
  gesture: string;
}

export const DEFERENCE: readonly Deference[] = [
  { name: "Unnoticed", gesture: "nobody looks up" },
  { name: "Tolerated", gesture: "a nod, if the hands are free" },
  { name: "Greeted", gesture: "a half-bow, on the way past" },
  { name: "Heard", gesture: "juniors bow, seniors make room" },
  { name: "Seated", gesture: "a seat is cleared before you ask" },
  { name: "Waited on", gesture: "elders rise, and the cup is poured for you first" },
  { name: "Received", gesture: "the room stands, and the host bows first" },
  { name: "Kneeled to", gesture: "the hall kneels, and nobody dares look up" },
  { name: "Not looked for", gesture: "nobody kneels, because nobody knows when you have come; the lamps simply burn a little steadier" },
  { name: "Remembered", gesture: "the sect speaks of you in the past tense, with love, as of weather that was kind" },
];

export const deferenceOf = (realm: number): Deference => DEFERENCE[Math.min(Math.max(realm, 0), DEFERENCE.length - 1)];

/**
 * What the sky does when a hero breaks through into a realm. A hero who has weathered the trial of the realm before it meets the real one ready and is
 * steadied by it; one who has not is scorched, loses a little qi to the first blow and is told so. Mortal has no breakthrough to speak of.
 */
const SKY_READY: Record<number, string> = {
  1: "The cold thread you learned to stand comes, and you stand it. The qi stays.",
  2: "The wayward breath turns in you, and you have felt it turn before. You hold still, and it rights itself.",
  3: "The nine bells ring over the peak, and you counted them in a keeper’s yard. They find a Foundation that has already been struck.",
  4: "The soul-fire climbs your core, and what it finds there you have already looked at. It burns, and nothing is hidden for it to burn.",
  5: "The severing gale comes, and you have chosen your cords. It takes the ones you gave it and leaves the rest.",
  6: "The Ledger is read to you, line by line, and you have heard your own lines before. It is a long reading, and not a surprise.",
  7: "The nine gates open one after another, and you know the question behind each. The last stays open behind you.",
  8: "The silence comes, and you have sat in it before. It does not ask anything. You walk through it as through a hall you know, and on the far side the sky is waiting, and it is not a stranger.",
  9: "The weight of the door comes down on you, and you have carried a door before. You bend, and hold, and the weight finds that it is a thing you can bear. Behind you the sky exhales.",
};

const SKY_RAW: Record<number, string> = {
  1: "The cold thread comes, and nobody showed you how to stand it. It takes a little of your breath with it when it goes.",
  2: "The breath runs backward through you, and you did not know to hold still. It rights itself, slowly, and leaves you shaking.",
  3: "The bells ring over the peak, and nobody taught you to count them. You are struck on every stroke, and you rise on the ninth.",
  4: "The soul-fire climbs your core, and you have not looked at what it finds. It burns longer than it should, and you see what you hid.",
  5: "The gale comes, and you have not chosen your cords. It chooses for you, and the ones it takes are not the ones you would have given.",
  6: "The Ledger is read to you, and every line is new. You are not sure which of them you agree with, and it does not ask.",
  7: "The gates open, and you do not know the question behind any of them. You answer the last by standing in it.",
  8: "The silence comes, and nobody warned you that it would be so large. You are a long time in it, and come out the far side older than you went in and not at all sure who counted.",
  9: "The weight of the door comes down and flattens you, and you lie under it a long while before it lifts. Whatever it was weighing, it found you light, and you are not sure whether to be hurt.",
};

/** The line the log carries after a breakthrough, or an empty string for a realm with no trial before it. */
export function skyLine(flags: Record<string, boolean>, entering: number): string {
  if (entering < 1 || entering >= TRIBULATIONS.length) return "";
  return preparedFor(flags, entering) ? SKY_READY[entering] : SKY_RAW[entering];
}

/** Qi a breakthrough gives or takes: a hero who weathered the trial is steadied, one who did not is scorched, more so the higher the realm. */
export const BREAKTHROUGH_STEADY = 5;
export const breakthroughScorch = (entering: number) => 2 + entering;
export function breakthroughQi(flags: Record<string, boolean>, entering: number): number {
  if (entering < 1) return 0;
  return preparedFor(flags, entering) ? BREAKTHROUGH_STEADY : -breakthroughScorch(entering);
}

/** What the Elder’s respect gains from a breakthrough: the realm itself, and a little more when the hero was ready for it. */
export const breakthroughRespect = (flags: Record<string, boolean>, entering: number): number => (entering < 1 ? 0 : entering + (preparedFor(flags, entering) ? 2 : 0));
