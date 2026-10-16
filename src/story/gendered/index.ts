import { parseScenarios, parseScenes } from "@/engine/markup";
import type { Choice, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { leftCloisterSource } from "./women";
import { rightYardSource } from "./men";
import { thirdDoorSource } from "./unspoken";
import { genderedScenarios } from "./scenarios";

/**
 * Three side paths off the memorial, where the Elder has just spoken of her sister, one for each gender the hero may give, and each shown to that gender alone: the Left Cloister to a woman, the
 * Right Yard to a man, the Third Door to someone who gives no answer. They are the first place in the story where who the hero is changes what the
 * sect is: three halls, three customs, and the same fourteen names kept three ways. All three end back at the tablet and the Elder.
 */
export const GENDERED_ORIGIN = "jade_eye_tablets_2";
export const GENDERED_BACK = "back8_jade_eye_tablets_2";

export const leftCloisterScenes: Scene[] = parseScenes(leftCloisterSource, "gendered/women");
export const rightYardScenes: Scene[] = parseScenes(rightYardSource, "gendered/men");
export const thirdDoorScenes: Scene[] = parseScenes(thirdDoorSource, "gendered/unspoken");

export const genderedGroup = {
  name: "Side Paths: The Doors of the Law Hall",
  scenes: [...leftCloisterScenes, ...rightYardScenes, ...thirdDoorScenes],
};

/** The door each gender is shown at the Law Hall, hidden from the others. */
export const genderedEntrances: Choice[] = [
  {
    id: "door_left_cloister",
    label: "Ask the Elder’s leave to step out for air, and go by the side arcade to the Left Cloister, where the women of the Law Hall keep a door of their own.",
    tone: "mercy",
    next: "lc_0",
    requires: [{ kind: "hero", field: "gender", is: ["woman"] }, { kind: "flag", flag: "lc_done", is: false }],
    hideLocked: true,
  },
  {
    id: "door_right_yard",
    label: "Step out under the east pillars to the Right Yard, where the wardens train and the fourteen lanterns hang.",
    tone: "quiet",
    next: "ry_0",
    requires: [{ kind: "hero", field: "gender", is: ["man"] }, { kind: "flag", flag: "ry_done", is: false }],
    hideLocked: true,
  },
  {
    id: "door_third_door",
    label: "Ask the clerk at the side desk in the passage about a door in the wall that is neither the cloister’s nor the yard’s.",
    tone: "inquiry",
    next: "td_0",
    requires: [{ kind: "hero", field: "gender", is: ["unspoken"] }, { kind: "flag", flag: "td_done", is: false }],
    hideLocked: true,
  },
];

export const genderedScenariosParsed: NpcScenario[] = parseScenarios(genderedScenarios, "gendered/scenarios");

/** What each path leaves in the pack. */
export const genderedItems: Record<string, ItemDef> = {
  lc_sisters_book: {
    id: "lc_sisters_book",
    name: "The Sisters’ Book",
    kind: "scripture",
    blurb: "Fourteen folded leaves tied in blue thread, a lullaby for each of the fourteen. Carried down the abyss path, it keeps the qi steady and the throat ready.",
    value: 12,
    keepsake: true,
    speed: 4,
    needsRealm: 0,
  },
  ry_wardens_tally: {
    id: "ry_wardens_tally",
    name: "The Wardens’ Iron Tally",
    kind: "token",
    blurb: "A thumb-sized iron tally on a thong. It means the yard knows your face, and it warms to a hand that has held a lantern all night.",
    value: 8,
    keepsake: true,
    speed: 3,
    needsRealm: 0,
  },
  td_blank_leaf: {
    id: "td_blank_leaf",
    name: "A Message Fifteen Years Late",
    kind: "relic",
    blurb: "A folded paper tied with a loose thread, addressed in two brushstrokes. It has waited a long time to be carried, and the carrying steadies the hand.",
    value: 4,
    keepsake: true,
    speed: 3,
    needsRealm: 0,
  },
};

/** The memorial as the hero comes back to it: the origin’s choices, with the three doors gone, so the path cannot be walked into again from its own end. */
export function genderedBack(origin: Scene): Scene {
  return {
    id: GENDERED_BACK,
    title: "Back at the Tablet",
    paragraphs: ["You come back to the memorial. The incense has burned down a little further, and the Elder has not moved from beside the tablet, and the hollow in the paint is where you left it."],
    choices: origin.choices.filter((c) => !genderedEntrances.some((e) => e.id === c.id)).map((c) => ({ ...c })),
  };
}
