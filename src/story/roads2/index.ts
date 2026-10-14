import { REALMS } from "@/engine/cultivation";
import type { Choice, NpcScenario, Scene } from "@/engine/types";
import { approachModes, fill } from "../roads/build";
import { buildReport2, buildRoad2, doneFlag2, reportedFlag2, type RoadSpec2 } from "./build";
import { bandBounds, bandHeld } from "./hero-lex";
import { WAYSIDE_AFTER2 } from "./lexicon";
import { roadsRiver } from "./specs-1";
import { roadsCoastSteppe } from "./specs-2";
import { roadsHills } from "./specs-3";
import { roadsGlass } from "./specs-4";
import { roadsStair } from "./specs-5";

interface Wayside2 {
  id: string;
  title: string;
  paragraphs: [string, string];
  back: string;
  /** The hub scene of a later book that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm the roads here ask. A road is for a cultivator of that realm; below it, the roads cost more; above it, they come easily. */
  realm: number;
  /** What the Elder says when the hero has finished all four of the roads here. */
  remark: string;
}

/** The ten realm roads, one for each hub of the later books. Their realms follow the pace of the story: a diligent hero reaches each hub at the realm it asks. */
export const WAYSIDES2: Wayside2[] = [
  {
    id: "wayside_landings",
    title: "Realm Roads: The Landings Between",
    paragraphs: [
      "Between the great stops of the river lie smaller ones: a tollhouse on stilts, a barge moored for a wake, a weir with a bell under it, a row of dye-houses. The Censors’ schedule ignores them.",
      "Four landings have sent someone to the jetty to wait for you. Each asks something of a cultivator, and each is warier of anyone without a foundation.",
    ],
    back: "The jetty gives you back to the reach of many landings. The barge is where you left it, the Censors’ lamps are lit on its deck, and nobody has noticed you were gone.",
    origin: "hub_b2_road",
    label: "Slip off the barge at a landing the Censors’ schedule does not name.",
    realm: 2,
    remark: "Four landings the Concord never wrote down, and you have been to all of them. I did not teach you that. The river did.",
  },
  {
    id: "wayside_lanes",
    title: "Realm Roads: The Back Lanes of Qinglian",
    paragraphs: [
      "Qinglian Ford keeps its good face to the quays. Behind them run lanes the Censors do not walk: a lamp exchange, a laundry, a stall of paper saints, a stair no one has seen the top of.",
      "Four lanes will take a stranger in, if the stranger can carry the weight of the place. The doormen can see your realm.",
    ],
    back: "You come back to the quay with the smell of lye and lamp-oil still on you. The Concord’s flags hang over the water, and the city seems, from here, very clean and very much a lie.",
    origin: "hub_b2_city",
    label: "Turn from the quay into the back lanes the Censors do not patrol.",
    realm: 3,
    remark: "You have walked every lane of Qinglian a Censor would not. I never thought to ask the laundress for her accounts.",
  },
  {
    id: "wayside_shallows",
    title: "Realm Roads: The Tidewall Shallows",
    paragraphs: [
      "At low tide the sea draws back from Tidewall and leaves its pans, its wrecks, its drowned rooms. The salt-coast people walk out at dawn with lamps and come back with things the sea should have kept.",
      "Four paths across the flats are marked with rags on stakes. Each leads to someone who has been waiting for the tide to bring you.",
    ],
    back: "The tide has turned by the time you reach the wall again. The salt dries on your sleeves in pale lines, and the flats behind you are already going under.",
    origin: "hub_b3_coast",
    label: "Walk out across the flats at low tide, where the rag-marked paths lead.",
    realm: 3,
    remark: "The coast gave you four things at low tide, and you carried every one back. Few can say as much.",
  },
  {
    id: "wayside_trails",
    title: "Realm Roads: The Listeners’ Trails",
    paragraphs: [
      "Under the great grass the Listeners keep small trails that never appear on Hao Lan’s map. Each has a cairn, a fire or a bowl at its mouth, and someone waiting for a stranger who will sit down.",
      "Four trails run north. The Listeners take rank by the quality of listening, and say a cultivator’s realm is only a rough measure of it.",
    ],
    back: "The trails let you out onto the column’s track at dusk, with the smell of horse and smoke on your sleeves. Nobody has missed you. The Listeners, as ever, knew exactly where you were.",
    origin: "hub_b4_a",
    label: "Leave the column’s track and follow the Listeners’ small trails north.",
    realm: 4,
    remark: "The Listeners have a word for those who walk all four trails. It translates, badly, as someone worth being quiet near.",
  },
  {
    id: "wayside_hush",
    title: "Realm Roads: The Garrison Hills",
    paragraphs: [
      "The Garrison’s hills are full of its small works: a gibbet that tolls the noon, a signal tower banked with cinders, a well that should not be there, a quartermaster’s store that has outlasted its quartermaster.",
      "Four are close enough to reach before dark. The Garrison’s bells weigh the qi in your chest before you have spoken.",
    ],
    back: "You come down the last ridge into the column’s camp with the Hush bells ringing noon behind you. The grey riders on the skyline have not moved. They have, you suspect, been watching you all along.",
    origin: "hub_b4_b",
    label: "Turn aside into the Garrison’s hills, toward the small works the bells keep.",
    realm: 4,
    remark: "You went to four of the Garrison’s works alone and came back with all of them. I find I am looking at you differently.",
  },
  {
    id: "wayside_edge",
    title: "Realm Roads: The Edge of the Grass",
    paragraphs: [
      "Where the Steppe thins toward the mountains the last Listeners’ places stand like old teeth: a yurt, a ring of boundary stones, a post where the wind-wardens keep watch, a burnt road leading nowhere.",
      "Four are worth the detour. They speak only to a cultivator who has learned to hold a very long silence, and they test it.",
    ],
    back: "You ride back to the column across short grass, and the wind turns behind you as though to see you off. The great Steppe is a pale line on the horizon, and the mountains are no longer a rumour.",
    origin: "hub_b4_c",
    label: "Ride out to the last places at the edge of the grass, before the mountains.",
    realm: 5,
    remark: "You have stood in all four places at the edge of the grass. If someone writes the road down, I hope your name is on it.",
  },
  {
    id: "wayside_glass",
    title: "Realm Roads: The Glass Flats",
    paragraphs: [
      "Three hundred miles of the Glass Sea are not empty. Between the plates a few places have grown up around what the glass gives: a camp that cuts mirrors, a barque fused upright in a plate, a prophet’s stall, a grinder’s tent.",
      "Four of these places stop what they are doing to watch you arrive. They read a cultivator as sailors read a sky, and find yours welcome or dangerous.",
    ],
    back: "The flats let you go with a long hush of glass-dust. The skiff track is a grey thread across the plate, and nobody mentions that you were gone.",
    origin: "hub_b5_a",
    label: "Leave the skiff track for the camps and stalls that have grown up between the plates.",
    realm: 5,
    remark: "The flats are the most honest part of this sea, because there is nowhere on them to hide. You walked all four.",
  },
  {
    id: "wayside_tents",
    title: "Realm Roads: The Lanes of Ten Thousand Tents",
    paragraphs: [
      "The pilgrims’ camp has lanes though no one drew them: a row where names are sold, a kitchen that feeds the tiers, an office that weighs your qi, a tent for those who lost a child in the crowd.",
      "Four lanes will let a cultivator in, and the clerks watch which. Realm is the one currency the camp does not question.",
    ],
    back: "You come out of the lanes onto the main road of the camp, and ten thousand tents ripple in the wind. It is a very large town for a place that will not exist in a month.",
    origin: "hub_b5_b",
    label: "Wander the back lanes of the pilgrims’ camp, away from the Ladder’s clerks.",
    realm: 5,
    remark: "Ten thousand tents, and you found the four that mattered. I would not have known where to look.",
  },
  {
    id: "wayside_landings_tier",
    title: "Realm Roads: The Landings of the Tiers",
    paragraphs: [
      "Each of the Nine Tiers has landings where the weary rest and the clerks take their count. Most pilgrims pass them, intent on the next step. A few stop, and those few find they are not alone.",
      "Four landings are open to you, and each is a test of realm that no examiner wrote. The Stair itself is the examiner, and it reads in qi.",
    ],
    back: "The tier lets you go back to the Stair at the place you left. The step under your foot is warm, as if someone had just stood there, and the next one is a little closer than before.",
    origin: "hub_b5_c",
    label: "Stop at a tier’s landing instead of climbing, and see who else is resting there.",
    realm: 6,
    remark: "Four landings nobody climbs for, and you found all four. The Clerk is said to keep a count. I wonder what it wrote beside your name.",
  },
  {
    id: "wayside_home",
    title: "Realm Roads: The Road Home",
    paragraphs: [
      "The last miles of the mountain road were walked fifteen years ago by someone you will not name. A teahouse, a graveyard, an orchard and a line of milestones have kept their own accounts of who came home.",
      "Four are waiting for you. A returning cultivator is a different guest from a departing one, and the keepers of the road know it.",
    ],
    back: "You come back to the mountain road with the foot of the stair ahead of you. The tea-stall’s lamp is lit, and the rain has stopped, and for the first time in years the whole mountain looks like a place that could be home.",
    origin: "hub_b6",
    label: "Stop at the places along the mountain road that have been keeping your return.",
    realm: 6,
    remark: "I walked this road last at the head of an escort, to deliver a sentence. You have walked it coming home, and it has never looked so little like a gallows road.",
  },
];

const SPECS2: RoadSpec2[] = [...roadsRiver, ...roadsCoastSteppe, ...roadsHills, ...roadsGlass, ...roadsStair];
const PER_WAYSIDE = 4;
export const BACK2 = (origin: string) => `back_${origin}`;

/** The wayside scenes that have all four of their roads written. */
const built = WAYSIDES2.filter((_, n) => SPECS2.length >= (n + 1) * PER_WAYSIDE);

const HUB_REALM: Record<"far" | "below" | "at" | "above", string> = {
  far: "These roads ask more than your body can give. You can pay for them in qi, but you cannot yet walk the deep ones.",
  below: "You are a realm short of what these roads want. The deeper doors will cost you, but they can be paid.",
  at: "These roads are cut to your measure. Nothing here is closed to you, and nobody will pretend you are unwelcome.",
  above: "You have outgrown what these roads ask. The keepers will bow and the doors will open. Decide whether that is why you came.",
};

function waysideScene2(w: Wayside2, n: number, roads: { spec: RoadSpec2; index: number }[]): Scene {
  const choices: Choice[] = roads.map(({ spec, index }) => ({
    id: `go_${spec.id}`,
    label: `Take the road to ${spec.place}, where ${spec.omen} lingers.`,
    tone: approachModes(index)[0],
    next: `${spec.id}_entry`,
    requires: [{ kind: "flag", flag: doneFlag2(n + 1, spec.id), is: false }],
    lockedHint: "You have already walked this road.",
  }));
  choices.push({ id: "back_to_road", label: "Leave the wayside and go back to where you left the road.", tone: "quiet", next: BACK2(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: [
      ...roads.flatMap(({ spec }) => {
        const slots = { place: spec.place, kname: spec.kname };
        return [
          { when: [{ kind: "flag" as const, flag: reportedFlag2(spec.id) }], paragraphs: [fill(WAYSIDE_AFTER2.reported, slots)], group: spec.id },
          {
            when: [{ kind: "flag" as const, flag: doneFlag2(n + 1, spec.id) }, { kind: "flag" as const, flag: reportedFlag2(spec.id), is: false }],
            paragraphs: [fill(WAYSIDE_AFTER2.silent, slots)],
            group: spec.id,
          },
        ];
      }),
      ...(["far", "below", "at", "above"] as const).filter((band) => bandHeld(band, w.realm)).map((band) => ({
        when: [{ kind: "realm" as const, ...bandBounds(band, w.realm) }],
        paragraphs: [HUB_REALM[band]],
        group: "realm",
      })),
    ],
    interjections: [{ when: [{ kind: "count", prefix: `rr_done_w${n + 1}_`, min: PER_WAYSIDE }], line: w.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the hub is not read twice. */
export function waysideBack2(w: Wayside2, origin: Scene): Scene {
  return {
    id: BACK2(w.origin),
    title: `Back from ${w.title.replace("Realm Roads: The ", "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the 100 scenes of its four roads. */
export const realmRoadGroups: { name: string; wayside: Wayside2; scenes: Scene[] }[] = built.map((w, n) => {
  const roads = SPECS2.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, i) => ({ spec, index: n * PER_WAYSIDE + i }));
  const scenes = [
    waysideScene2(w, n, roads),
    ...roads.flatMap(({ spec, index }) => buildRoad2(spec, { index, wayside: n + 1, waysideId: w.id, realm: w.realm })),
  ];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s reports on every realm road. */
export const realmRoadScenarios: Record<string, NpcScenario> = Object.fromEntries(
  built.flatMap((w, n) =>
    SPECS2.slice(n * PER_WAYSIDE, (n + 1) * PER_WAYSIDE).map((spec, i) => {
      const scenario = buildReport2(spec, { index: n * PER_WAYSIDE + i, wayside: n + 1, waysideId: w.id, realm: w.realm });
      return [scenario.id, scenario] as const;
    }),
  ),
);

/** The choice each book hub gains, keyed by the hub’s scene id. */
export const realmEntrances: Record<string, Choice> = Object.fromEntries(
  built.map((w) => [w.origin, { id: w.id, label: w.label, tone: "quiet", next: w.id } satisfies Choice] as const),
);

export const realmRoadRealms = WAYSIDES2.map((w) => ({ id: w.id, realm: REALMS[w.realm].name }));
