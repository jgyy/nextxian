import { REALMS } from "@/engine/cultivation";
import { GENDERS } from "@/engine/hero";
import type { Choice, ItemDef, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, type Extra } from "../roads2/build";
import { buildHunt, buildReport14, donePrefix14, doneFlag14, heardFlag, spoilId, spoilItem, type HuntContext } from "./build";
import { foes1 } from "./foes-1";
import { foes2 } from "./foes-2";
import { foes3 } from "./foes-3";
import { foes4 } from "./foes-4";
import { foes5 } from "./foes-5";
import { HUB_GENDER } from "./lexicon-gender";
import type { FoeSpec, Wayside14 } from "./spec";

/** The ten Hunt Roads, in the order of the story: ten places where a hero meets a beast, a spirit, a growth or a machine that the people there cannot be rid of. */
export const WAYSIDES14: Wayside14[] = [
  {
    id: "wayside_hunt_barley",
    title: "Hunt Roads: The Barley Terraces",
    paragraphs: [
      "Below the foothill village the barley is cut in terraces, and the terraces have been losing things at night: turnips, a well-bucket, a goat, and now the sleep of everyone who lives below the third wall. The village has put a notice on the tea stall asking for help, and nobody has answered it.",
      "Four things are named on it, in four hands. The hunters of the valley have read it and decided it is the sect’s business.",
    ],
    back: "You come up the terraces to the village square in the grey of the morning. The tea stall is open, the notice is still pinned to the post, and the first villager of the day looks at you, then at your hands, and does not ask.",
    origin: "village_square",
    label: "Read the notice pinned to the tea stall, where the village has asked for help with what is taking its nights.",
    realm: 0,
    remark: "Four things the village had stopped speaking of, and you have spoken to all four. I am told the notice has come down. I did not put it up, and I did not take it down, and I find I am pleased to be left out.",
  },
  {
    id: "wayside_hunt_slag",
    title: "Hunt Roads: The Slag Heaps",
    paragraphs: [
      "Under the archive the quarry has closed, but not everything in it. The heaps of slag and spoil still steam on cold mornings, and at the foot of them the lime-burners’ old huts are lit at night by people who have nowhere else to be. They have a list of four things that have followed the work out of the ground.",
      "The list on the door names four things in four hands, and the lime-burners have left the rest of the door bare.",
    ],
    back: "You climb out of the spoil heaps to the quarry mouth with the steam of the pools behind you. Nobody has taken the list down, but someone has ticked it, and the hut-door is swinging slowly in the wind.",
    origin: "quarry_mouth",
    label: "Go down to the slag heaps under the quarry, where four things have followed the work out of the ground.",
    realm: 1,
    remark: "The slag heaps under the quarry. No Elder has ever been down there, and the lime-burners have lived with it for seven years. You went down four times in a week. Tell them, next time, that I did not know.",
  },
  {
    id: "wayside_hunt_pines",
    title: "Hunt Roads: The Hermit’s Pines",
    paragraphs: [
      "Above the hermit’s hut, on the shoulder of the eastern peak, the pines grow dark and close. The hermit has lived among them for thirty years and never been troubled, and now he sleeps in the day and keeps a bar on his door at night. He has asked, through a boy, that someone see to the mountain.",
      "He has named four: on the long stair, in the grove, on the high ledge and on his own roof. He has not said what brought them.",
    ],
    back: "You come down from the pines to the hermit’s door, and the bar is off it. He sits on the step with a gourd and does not look up, but there is a second cup beside him, and it is full.",
    origin: "hermit_foot",
    label: "Climb into the pines above the hermit’s hut, where four things have come down the mountain to trouble the old man.",
    realm: 1,
    remark: "The hermit sent me a gourd of his wine, and a message that said only: thank you. He has not written to me in nineteen years. Four creatures on one mountain, and you walked the whole of it. I should like to know how.",
  },
  {
    id: "wayside_hunt_ropes",
    title: "Hunt Roads: The Cloud Gap Ropes",
    paragraphs: [
      "The bridge-keepers of the Cloud Gap are a close people, with one rule for outsiders and another for the span. This week they have broken both. A woman at the bridge-head has stopped you with a hand on your sleeve, and said, in a whisper, that the bridge has four troubles, and the keepers have run out of ways of not talking about them.",
      "The span has four troubles, and the keepers ask only that you see to them before they are made to.",
    ],
    back: "You walk back from the span to the bridge-head in the clean mist. The ropes sing the right note, and the pillar is still, and the woman who stopped you does not say anything at all, but she takes your hand in both of hers.",
    origin: "bridge_head",
    label: "Walk out on to the Cloud Gap Bridge, where the keepers have four troubles they can no longer pretend are weather.",
    realm: 2,
    remark: "The Cloud Gap. The bridge-keepers wrote to the Law Hall three times about those four things, and I answered none of the letters, because I thought them superstition. I shall write to them tonight, and I shall say that I was wrong.",
  },
  {
    id: "wayside_hunt_ledge",
    title: "Hunt Roads: The Abyss Ledges",
    paragraphs: [
      "On the second descent the path hugs the wall of the abyss, and the lamps are set at every twelfth step. Between the lamps, where the dark is thickest, there are four places the wardens do not light. They have never been asked why, and have never said.",
      "They have given you four lamps and a box of matches, and walked away up the path without another word.",
    ],
    back: "You climb back along the ledges with the four lamps burning behind you in a row. The wardens are waiting at the top of the path, and none of them speaks, but one holds out his hand for the matchbox, and his hand shakes.",
    origin: "descent_ledge",
    label: "Take the four lamps the wardens leave you and light the dark places on the abyss ledges.",
    realm: 2,
    remark: "I walked the second descent once, in my twenties, and I did not look to the left or the right. You have lit four places I have never dared look at. I hope you will tell me what I would have seen.",
  },
  {
    id: "wayside_hunt_picket",
    title: "Hunt Roads: The Picket Line",
    paragraphs: [
      "The Concord’s pickets run along the Salt Coast for forty miles, and they have been taking damage. The picket-men say it is the tide, and then, when pressed, that it is not. The coast has four troubles, they admit, and they do not like to say them in the hearing of the clerks.",
      "The picket-men will pay you in salt, which is worth more than it sounds, and in silence, which is worth more than that.",
    ],
    back: "You come back along the shingle to the picket-line with the salt crusted on your sleeves. The pickets are standing straight again, in a long white row, and the men who drove them are out on the beach, watching the tide come in.",
    origin: "coast_entry",
    label: "Walk the picket line along the Salt Coast, where the pickets are being drawn by four troubles the clerks will not name.",
    realm: 3,
    remark: "The Salt Coast. The Concord’s report said the pickets had been lost to weather. I have the report. I have your account. They differ, and I know which is true, and I shall be most careful about which of the two I put in the sect’s records.",
  },
  {
    id: "wayside_hunt_debt",
    title: "Hunt Roads: The Debt Reach",
    paragraphs: [
      "The ferry at the Debt Reach has been running for three hundred years, and in all of them the river has asked for a toll. This year the toll has been raised, and the river has begun to ask for more. The ferrymen sit in the ferry-house and count their takings and do not speak.",
      "A boy has brought you a note about four of them, signed in the name of the river.",
    ],
    back: "You come back to the ferry-house in the dusk with the reach flat and brown behind you. The ferrymen stand up as you pass, one after another, and their ledgers are closed, and no one asks you for a fare.",
    origin: "ferry_entry",
    label: "Go down to the Debt Reach, where the river has begun to ask for more than the toll.",
    realm: 3,
    remark: "The Debt Reach. Every Elder in the Concord has been sent a petition about the toll, and none has answered. You answered it with a sword and a lamp and a great deal of listening. I find I must reconsider my correspondence.",
  },
  {
    id: "wayside_hunt_wolf",
    title: "Hunt Roads: The Wolf Year",
    paragraphs: [
      "The clans of the Ash Steppe do not name the thing that takes their sheep in the Wolf Year. They name the year, and they wait for it to pass. This one has not passed. The clan-mothers have met in the big tent and agreed, against every rule of their people, to ask a stranger.",
      "They have asked you to see to four things in the order you choose. They have not said what they will do if you refuse.",
    ],
    back: "You ride back across the steppe to the clan’s tents in the evening wind. The mothers wait at the door of the big tent, in a row, and the eldest takes your bridle and leads your horse to the fire.",
    origin: "wolves_entry",
    label: "Ride out across the winter pasture, where the clan-mothers have asked a stranger for help against four things.",
    realm: 4,
    remark: "The steppe, in the Wolf Year. The Listeners keep their own counsel, and you were asked to help. I do not know the last time anyone from this sect was asked. I should tell the Concord. I think I shall tell them nothing.",
  },
  {
    id: "wayside_hunt_wreck",
    title: "Hunt Roads: The Wreck Fleet",
    paragraphs: [
      "The stranded skiffs of the Glass Sea lie in a rough ring called the wreck fleet, and the repair-sheds in the lee of the biggest hulls are the only warm place for ten miles. The skiff-wrights live there on what the glass gives up. They have a notice-board of their own, and four notices on it are in red.",
      "They have drawn lots for who should ask you. The one who lost stands at the shed door with her hands folded.",
    ],
    back: "You come back through the hulls to the repair-sheds in the early dark. The skiff-wrights have lit every lamp in the fleet, and the glass is laid with their light for a mile. Nobody speaks, and nobody needs to.",
    origin: "wreck_entry",
    label: "Go among the stranded skiffs of the wreck fleet, where four red notices have been pinned to the repair-sheds’ board.",
    realm: 5,
    remark: "The wreck fleet. You walked the glass at night, with four things abroad on it, and came back. I once crossed the Glass Sea at noon, with a guide, and did not sleep for a month. I am not envious. I am merely, now, very carefully, awake.",
  },
  {
    id: "wayside_hunt_bridge",
    title: "Hunt Roads: The Ash Bridge Road",
    paragraphs: [
      "On the last night the road to the Ash Bridge is not the road you remember. Its milestones are scorched, its hedges grey, and the wardens’ lamps burn blue. The sect has locked its gates and given its disciples the order to stay in. You have been given an order of your own, and it is not to stay.",
      "Ren Qiao has held the Bridge fifteen years. He cannot hold it alone, and has not asked you for anything.",
    ],
    back: "You come back along the road to the Bridge in the pale light of the lamps. The milestones are cold, and the hedges are green again at the roots. Ren Qiao is on the Bridge itself, with his lantern, and he lifts it as you come.",
    origin: "bridge_entry",
    label: "Take the road to the Ash Bridge, where four things have gathered that the sect has never named.",
    realm: 6,
    remark: "The Ash Bridge road. I have known those four things since I was young, and never said their names aloud. You walked past all four on the last night, and said them. I begin to understand what the sect has been avoiding.",
  },
];

const FOES: FoeSpec[] = [...foes1, ...foes2, ...foes3, ...foes4, ...foes5];
const PER_WAYSIDE = 4;
export const BACK14 = (origin: string) => `back14_${origin}`;

const contexts: HuntContext[] = FOES.map((_, index) => {
  const n = Math.floor(index / PER_WAYSIDE);
  return { index, wayside: n + 1, waysideId: WAYSIDES14[n].id, realm: WAYSIDES14[n].realm };
});

function waysideScene14(w: Wayside14, n: number, foes: { spec: FoeSpec; ctx: HuntContext }[]): Scene {
  const choices: Choice[] = foes.map(({ spec, ctx }, slot) => ({
    id: `go_${spec.id}`,
    label: `Go to ${spec.place}, where ${spec.omen} marks the work of ${spec.name}.`,
    tone: (["force", "inquiry", "deceit", "mercy"] as const)[(ctx.index + slot) % 4],
    next: `${spec.id}_sighting`,
    requires: [{ kind: "flag", flag: doneFlag14(n + 1, spec.id), is: false }],
    lockedHint: "You have already dealt with this one.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the hunters to their work and go back to where you left the road.", tone: "quiet", next: BACK14(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: [
      ...foes.flatMap(({ spec }) => [
        { when: [{ kind: "flag" as const, flag: heardFlag(spec.id) }], paragraphs: [fill("Elder Su has heard what became of {name}.", { name: spec.name })], group: spec.id },
        {
          when: [{ kind: "flag" as const, flag: doneFlag14(n + 1, spec.id) }, { kind: "flag" as const, flag: heardFlag(spec.id), is: false }],
          paragraphs: [fill("Elder Su has heard nothing of {name}.", { name: spec.name })],
          group: spec.id,
        },
      ]),
      ...GENDERS.map(({ value }): Extra => ({ when: [{ kind: "hero", field: "gender", is: [value] }], paragraphs: [pick(HUB_GENDER[value], n)], group: "gender" })),
    ],
    interjections: [{ when: [{ kind: "count", prefix: donePrefix14(n + 1), min: PER_WAYSIDE }], line: w.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack14(w: Wayside14, origin: Scene): Scene {
  return {
    id: BACK14(w.origin),
    title: `Back from ${w.title.replace("Hunt Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the hundred scenes of its four hunts. */
export const huntGroups: { name: string; wayside: Wayside14; scenes: Scene[] }[] = WAYSIDES14.map((w, n) => {
  const here = FOES.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, slot) => ({ spec, ctx: contexts[n * PER_WAYSIDE + slot] }));
  return { name: w.title, wayside: w, scenes: [waysideScene14(w, n, here), ...here.flatMap(({ spec, ctx }) => buildHunt(spec, ctx))] };
});

/** The Elder’s reports on every hunt. */
export const huntScenarios: Record<string, NpcScenario> = Object.fromEntries(
  FOES.map((spec, i) => {
    const scenario = buildReport14(spec, contexts[i]);
    return [scenario.id, scenario] as const;
  }),
);

/** What every foe leaves. */
export const huntItems: Record<string, ItemDef> = Object.fromEntries(FOES.map((spec, i) => [spoilId(spec.id), spoilItem(spec, contexts[i])]));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const huntEntrances: Record<string, Choice> = Object.fromEntries(
  WAYSIDES14.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const huntRoadRealms = WAYSIDES14.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
export { FOES, contexts as huntContexts };

/** The foe a scene belongs to, if the hero is standing in a hunt. */
export function foeAt(sceneId: string): { spec: FoeSpec; ctx: HuntContext } | undefined {
  const i = FOES.findIndex((f) => sceneId.startsWith(`${f.id}_`));
  return i < 0 ? undefined : { spec: FOES[i], ctx: contexts[i] };
}

/** How many foes of each hub the hero has dealt with, in the order of the hubs. */
export function huntRecord(flags: Record<string, boolean>): { hub: string; short: string; done: number }[] {
  return WAYSIDES14.map((w, n) => ({
    hub: w.title.replace("Hunt Roads: ", ""),
    short: w.title.replace("Hunt Roads: The ", "").split(" ")[0],
    done: Object.entries(flags).filter(([f, on]) => on && f.startsWith(donePrefix14(n + 1))).length,
  }));
}
