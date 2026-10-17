/**
 * The world beyond the mountain. Forty affairs are afoot in ten reaches of it: a granary lock, a levy, a tide-wall, a succession. Each has a fate, which is
 * what the world does with it if no one lays a hand on it, and a hero may take a part in it (look on, lend a hand, take a side, or turn it) and may
 * go about it well or badly. Nothing here is random: the part, the way it is gone about and the fate decide the course, so a hero can read why an
 * affair ended as it did. The story writes the affairs; this module knows only how their flags are named and how they add up.
 */

/** What an affair comes to: mended (set right), ground on (a muddle that people live with), or broke (it fell apart). */
export type Course = "mended" | "ground" | "broke";
/** What the hero was in it. Looking on is the smallest part, turning it is the greatest, and each is a part worth having. */
export type Part = "look" | "hand" | "side" | "hinge";
/** How the hero went about it: by the lever they had found, by strength, by a bargain, or by giving way. */
export type Method = "turned" | "forced" | "bargained" | "gave";

export const COURSES: Course[] = ["broke", "ground", "mended"];
export const PARTS: Part[] = ["look", "hand", "side", "hinge"];
export const METHODS: Method[] = ["turned", "forced", "bargained", "gave"];

/** How much of the world rests on a hero for each part they take. */
export const PART_WEIGHT: Record<Part, number> = { look: 1, hand: 2, side: 3, hinge: 5 };

/**
 * How many steps along broke, ground on, mended an affair moves from its fate. Looking on moves nothing, whatever the hero writes down. A hand can only help, and
 * only by the lever. A side can help or harm. The hinge can lift an affair two steps, or, if the hero lets go of it at the last, let it fall two: the greater the
 * part, the greater the stake. Whatever an affair's fate, then, every course is open to a hero who is the hinge of it.
 */
export const PART_SHIFT: Record<Part, Record<Method, number>> = {
  look: { turned: 0, forced: 0, bargained: 0, gave: 0 },
  hand: { turned: 1, forced: 0, bargained: 0, gave: 0 },
  side: { turned: 1, forced: 0, bargained: -1, gave: -1 },
  hinge: { turned: 2, forced: 1, bargained: 0, gave: -2 },
};

/** Every course an affair can come to when the hero takes this part in it, by any of the four ways. */
export function coursesFor(fate: Course, part: Part): Course[] {
  return COURSES.filter((c) => METHODS.some((m) => courseAfter(fate, part, m) === c));
}

/** The course of an affair once a hero has taken a part in it and gone about it in one way. */
export function courseAfter(fate: Course, part: Part, method: Method): Course {
  const at = COURSES.indexOf(fate) + PART_SHIFT[part][method];
  return COURSES[Math.max(0, Math.min(COURSES.length - 1, at))];
}

export const WORLD_PREFIX = "wo_";
export const PART_PREFIX = "wo_part_";
export const OUT_PREFIX = "wo_out_";
export const HOW_PREFIX = "wo_how_";
export const REC_PREFIX = "wo_rec_";
export const DONE_PREFIX = "wo_done_";
export const HEARD_PREFIX = "wo_heard_";
export const LEVER_PREFIX = "wo_lev_";
export const REACH_PREFIX = "wo_reach_";

/** The ten reaches and the four affairs in each. */
export const REACHES = 10;
export const PER_REACH = 4;

/** An affair is named by its reach (1 to 10) and a short id with no underscore, so a flag can be read back into both. */
export const affairKey = (reach: number, id: string) => `r${reach}_${id}`;
export const partFlag = (reach: number, id: string, part: Part) => `${PART_PREFIX}${affairKey(reach, id)}_${part}`;
export const outFlag = (reach: number, id: string, course: Course) => `${OUT_PREFIX}${affairKey(reach, id)}_${course}`;
export const howFlag = (reach: number, id: string, method: Method) => `${HOW_PREFIX}${affairKey(reach, id)}_${method}`;
export const recFlag = (reach: number, id: string) => `${REC_PREFIX}${affairKey(reach, id)}`;
export const doneFlag = (reach: number, id: string) => `${DONE_PREFIX}${affairKey(reach, id)}`;
export const heardFlag = (reach: number, id: string) => `${HEARD_PREFIX}${affairKey(reach, id)}`;
export const leverFlag = (reach: number, id: string) => `${LEVER_PREFIX}${affairKey(reach, id)}`;
export const reachFlag = (reach: number) => `${REACH_PREFIX}${reach}`;

/** What the flags say about one affair. */
export interface AffairRecord {
  reach: number;
  id: string;
  part?: Part;
  course?: Course;
  method?: Method;
  /** The hero wrote the true account in the ledger. */
  record: boolean;
  /** The hero has seen it through to the end. */
  done: boolean;
}

const KEY = /^r(\d+)_([a-z0-9]+)$/;

/** Reads the flags into one record per affair the hero has had any part in. */
export function affairsOf(flags: Record<string, boolean>): AffairRecord[] {
  const found = new Map<string, AffairRecord>();
  const at = (reach: number, id: string): AffairRecord => {
    const key = affairKey(reach, id);
    let record = found.get(key);
    if (!record) found.set(key, (record = { reach, id, record: false, done: false }));
    return record;
  };
  for (const [flag, on] of Object.entries(flags)) {
    if (!on || !flag.startsWith(WORLD_PREFIX)) continue;
    const kind = ["part", "out", "how", "rec", "done"].find((k) => flag.startsWith(`${WORLD_PREFIX}${k}_`));
    if (!kind) continue;
    const rest = flag.slice(WORLD_PREFIX.length + kind.length + 1);
    const cut = kind === "rec" || kind === "done" ? rest.length : rest.lastIndexOf("_");
    const m = KEY.exec(rest.slice(0, cut));
    if (!m) continue;
    const record = at(Number(m[1]), m[2]);
    const tail = rest.slice(cut + 1);
    if (kind === "part" && (PARTS as string[]).includes(tail)) {
      // A hero who somehow stands in two parts of one affair counts for the greater.
      if (!record.part || PART_WEIGHT[tail as Part] > PART_WEIGHT[record.part]) record.part = tail as Part;
    } else if (kind === "out" && (COURSES as string[]).includes(tail)) record.course = tail as Course;
    else if (kind === "how" && (METHODS as string[]).includes(tail)) record.method = tail as Method;
    else if (kind === "rec") record.record = true;
    else if (kind === "done") record.done = true;
  }
  return [...found.values()].filter((r) => r.part !== undefined || r.course !== undefined || r.done);
}

/** The things a condition or a panel can ask about the world. */
export type WorldMeasure =
  /** The sum of the weights of the parts the hero has taken. */
  | "weight"
  /** In how many affairs the hero has had any part: how many voices answer them. */
  | "voices"
  /** In how many the hero was the hinge. */
  | "hinges"
  /** In how many the hero took no more than a look or a hand. */
  | "small"
  /** How many affairs the hero's part left mended, ground on or broke. */
  | "mended"
  | "ground"
  | "broke"
  /** How many true accounts the hero has written into the ledger. */
  | "records"
  /** How many affairs the hero has seen through to the end. */
  | "done";

export const MEASURES: WorldMeasure[] = ["weight", "voices", "hinges", "small", "mended", "ground", "broke", "records", "done"];

/** The flag prefixes a measure reads, so the audit knows which flags a condition on it makes meaningful. */
export const MEASURE_PREFIXES: Record<WorldMeasure, string[]> = {
  weight: [PART_PREFIX],
  voices: [PART_PREFIX],
  hinges: [PART_PREFIX],
  small: [PART_PREFIX],
  mended: [OUT_PREFIX],
  ground: [OUT_PREFIX],
  broke: [OUT_PREFIX],
  records: [REC_PREFIX],
  done: [DONE_PREFIX],
};

/** One measure of the world, over all of it or over one reach. */
export function worldMeasure(flags: Record<string, boolean>, measure: WorldMeasure, reach?: number): number {
  const records = affairsOf(flags).filter((r) => reach === undefined || r.reach === reach);
  switch (measure) {
    case "weight":
      return records.reduce((n, r) => n + (r.part ? PART_WEIGHT[r.part] : 0), 0);
    case "voices":
      return records.filter((r) => r.part).length;
    case "hinges":
      return records.filter((r) => r.part === "hinge").length;
    case "small":
      return records.filter((r) => r.part === "look" || r.part === "hand").length;
    case "mended":
    case "ground":
    case "broke":
      return records.filter((r) => r.course === measure).length;
    case "records":
      return records.filter((r) => r.record).length;
    case "done":
      return records.filter((r) => r.done).length;
  }
}

/** What a hero has been to the world so far. Ordered by how much of it they carry. */
export type Role = "unseen" | "witness" | "hand" | "many" | "hinge";

export interface RoleInfo {
  id: Role;
  name: string;
  blurb: string;
}

export const ROLES: Record<Role, RoleInfo> = {
  unseen: { id: "unseen", name: "Unseen", blurb: "The world has not noticed you. It goes on without you, as it did before you came." },
  witness: { id: "witness", name: "A Pair of Eyes", blurb: "You have been where things were happening, and looked, and some of what you saw is written down." },
  hand: { id: "hand", name: "A Hand in the Work", blurb: "You have put your hand to several things. None of them turned on it, and several went better for it." },
  many: { id: "many", name: "The Many Hands", blurb: "You took a small part in a great many places. There is hardly a reach that has not had your hand in something, and none has had your whole weight." },
  hinge: { id: "hinge", name: "A Hinge of the Age", blurb: "Things have turned on you, in more than one place. The world has begun to say your name when it is asked who did it." },
};

/** The part a hero plays in the world, by the parts they have taken. A hinge outranks the many hands, and the many hands outrank a few. */
export function roleOf(flags: Record<string, boolean>): RoleInfo {
  const voices = worldMeasure(flags, "voices");
  const hinges = worldMeasure(flags, "hinges");
  const weight = worldMeasure(flags, "weight");
  if (voices === 0) return ROLES.unseen;
  if (hinges >= 5) return ROLES.hinge;
  if (voices >= MANY_VOICES && hinges < HINGES_FOR_AGE) return ROLES.many;
  if (weight >= HAND_WEIGHT) return ROLES.hand;
  return ROLES.witness;
}

/** What the two new endings and the roles ask for: sixteen voices and no more than two hinges is the Many Hands; five hinges and four affairs mended is a Hinge of the Age. */
export const MANY_VOICES = 16;
export const MANY_HINGE_MAX = 2;
export const HINGES_FOR_AGE = 5;
export const HINGE_MENDED = 4;
/** The weight at which a hero is a hand in the work and not only a pair of eyes. */
export const HAND_WEIGHT = 12;
