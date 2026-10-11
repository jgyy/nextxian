/**
 * What kind of thing a road’s focus is. A road names four things to approach, and the shared wording says what to do
 * with each: "Break your way into {focus}" fits a shed and not a ledger, and "Slip a small piece of {focus} into your sleeve"
 * fits a ledger and not a shed. The wording is tagged with the kinds it fits, and a road is given only wording that fits.
 */
export type FocusKind = "place" | "thing" | "person";

/** Head nouns of foci that name a place: somewhere you can go into, stand in, or break into. */
const PLACES = new Set(
  "alcove arch avenue cabin cellar corner doorway door edge end floor gallery galley garden gate grass grove hall hatch head hold hut landing lean-to lodge loft middle mill-race paddock pit plot rafters roof room rope-walk shed spit stable stair stall step store tent threshold top verge walk well yard cistern".split(" "),
);
/** Head nouns that name a person or a creature. */
const PERSONS = new Set("boy mare".split(" "));
/** Foci whose head noun is ambiguous, decided by the whole phrase. */
const OVERRIDES: Record<string, FocusKind> = {
  "the stone ring in the grass": "place",
  "the wall where names are scratched": "thing",
  "the camp fire": "thing",
  "the wake fire": "thing",
  "the cold fire pit": "place",
  "the lowest step": "thing",
  "the main kiln": "place",
  "the ash pit": "place",
  "the great press": "thing",
  "the ferry pole": "thing",
  "the well-head": "thing",
  "the lean-to": "place",
  "the bell by the door": "thing",
  "the ladder to the roof": "thing",
  "the ledger cage": "place",
  "the reed bed behind the market": "place",
  "the stall of charms": "place",
  "the shed of spare robes": "place",
  "the rows of beds": "place",
};

/** The head of a focus phrase: its last word before any trailing clause. */
function head(focus: string): string {
  const core = focus.split(/ (?:that|who|where|nobody|stamped|nailed|hung|they|in the|at the|behind|on the|of the|without|with|is|are) /)[0];
  return core.split(" ").slice(-1)[0].replace(/’s$/, "");
}

export function focusKind(focus: string): FocusKind {
  const known = OVERRIDES[focus.toLowerCase()];
  if (known) return known;
  if (focus.includes(" who ")) return "person";
  const word = head(focus.toLowerCase());
  if (PERSONS.has(word)) return "person";
  return PLACES.has(word) ? "place" : "thing";
}

const KIND_OF_TAG: Record<string, FocusKind> = { p: "place", t: "thing", w: "person" };

/**
 * A template may start with a tag naming the kinds of focus it fits: `[p]` a place, `[t]` a thing, `[w]` a person, and
 * combinations like `[pw]`. A template with no tag fits places and things. Returns the kinds it fits and the text without the tag.
 */
export function parseFit(template: string): { kinds: Set<FocusKind>; text: string } {
  const m = /^\[([ptw]+)\] ?/.exec(template);
  if (!m) return { kinds: new Set<FocusKind>(["place", "thing"]), text: template };
  return { kinds: new Set([...m[1]].map((c) => KIND_OF_TAG[c])), text: template.slice(m[0].length) };
}

/** True when a template fits a kind of focus. */
export function fits(template: string, kind: FocusKind): boolean {
  // Wording that never names the focus fits whatever the focus is.
  if (!/\{[Ff]ocus\}/.test(template)) return true;
  return parseFit(template).kinds.has(kind);
}

/**
 * Picks a template that fits the focus, by seed, so the same road always reads the same. When the road asks for a fit,
 * only fitting templates are candidates, and a pool with none is an error, not a silent mismatch.
 */
export function pickFit(pool: readonly string[], seed: number, focus: string, fit = true): string {
  const kind = focusKind(focus);
  const candidates = fit ? pool.filter((t) => fits(t, kind)) : [...pool];
  if (candidates.length === 0) throw new Error(`no template fits a ${kind} (${focus})`);
  return parseFit(candidates[((seed % candidates.length) + candidates.length) % candidates.length]).text;
}

/** True when the template that `pickFit` would choose without a fit does not fit the focus. The audit counts these. */
export function mismatch(pool: readonly string[], seed: number, focus: string): boolean {
  const chosen = pool[((seed % pool.length) + pool.length) % pool.length];
  return !fits(chosen, focusKind(focus));
}
