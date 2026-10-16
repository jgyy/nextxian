import { REALMS } from "@/engine/cultivation";
import { ORDINALS } from "@/engine/stage-text";
import { layerName, layerOfLevel, levelOf, TOP_LEVEL } from "@/engine/stages";
import type { Choice, Condition, NpcScenario, Scene } from "@/engine/types";
import { BACK13, buildScenarios, buildWall, fill, hubId, wallId } from "./build";
import { REALM_LEX, WALL_LEX } from "./lexicon";

export interface Wayside13 {
  id: string;
  title: string;
  paragraphs: [string, string];
  /** What the player reads on coming back from the wayside to the scene it branched from. */
  back: string;
  /** The scene of the main line or the books that this wayside opens from. */
  origin: string;
  label: string;
  /** The realm whose ten walls the wayside holds. */
  realm: number;
  /** What the Elder says when every wall of the realm is behind the hero. */
  remark: string;
}

/**
 * The ten Breakthrough Roads, one for each major realm. Each is a place where the realm’s ten walls are met one after another, a station for each, and each wall
 * is ten scenes: the wall itself, four ways of going at it, the hour, what follows, the settling, the Elder and what the wall leaves. A hero can walk to any wall
 * they have reached, press at the one they stand before, and be held, thrown back or let through by the engine’s own reading of their points, qi, insight and steadiness.
 */
export const WAYSIDES13: Wayside13[] = [
  {
    id: hubId(0),
    title: "Breakthrough Roads: The Tempering Yard",
    paragraphs: [
      "Below the gate a bare yard of cold troughs, pull-bars and carrying-stones has been worn smooth by a century of mortals who wanted to be more. Ten stations stand along its wall, one for each layer of the body’s long hardening.",
      "Nobody keeps the yard. The mortals keep it for each other, and each station has its mark, a scratch for every hero who has gone on from it.",
    ],
    back: "You walk out of the yard with the cold of the troughs still on your hands. The gate is where you left it, and the yard behind you has gone back to its quiet work.",
    origin: "archive_gate_2",
    label: "Go down to the tempering yard, where ten stations mark ten layers of the body’s long hardening.",
    realm: 0,
    remark: "The yard. Ten stations, and every one of them hurt me. I came out the other side a stranger to my own body, and glad of the introduction. You have the marks now. Keep them.",
  },
  {
    id: hubId(1),
    title: "Breakthrough Roads: The Thread-House",
    paragraphs: [
      "Past the sutra hall a long low house stands with its shutters open, full of winding-posts, skein-racks and still basins. It is where Qi Condensers are taught, by the house itself, how a thread becomes a sea.",
      "Ten stations run down its length, from the first post to the sand-floor at the end. At each hangs a tally of those who passed it, and a space for your own.",
    ],
    back: "You come out of the Thread-House with the hum of the winding-posts still in your wrists. The door is where you left it, and the long house behind you has gone back to its patient work.",
    origin: "sutra_door_2",
    label: "Go down the long low house of winding-posts, where ten stations teach a Qi Condenser how a thread becomes a sea.",
    realm: 1,
    remark: "The Thread-House. I wound my first cord there and tangled it, and wound it again, and tangled it again. You have passed every post. I hope you remembered to be kind to your wrists.",
  },
  {
    id: hubId(2),
    title: "Breakthrough Roads: The Mason’s Court",
    paragraphs: [
      "Behind the tribunal an unfinished court lies open to the sky, laid out in chalk and plumb-line, with ten stations of half-built walls where the sect’s Foundation Builders come to argue with stone.",
      "The court is never finished. That is its rule. Each station has a keeper’s tool left on its sill, and the tools are older than the sect’s records.",
    ],
    back: "You leave the court with chalk on your knees. The tribunal is where you left it, and the half-built walls behind you have gone back to their long argument with the weather.",
    origin: "tribunal_summons_2",
    label: "Slip out to the mason’s court behind the tribunal, where ten unfinished stations teach a Foundation Builder to argue with stone.",
    realm: 2,
    remark: "The Mason’s Court. I laid a crooked stone there once and lived under it for twenty years. You have laid ten courses. I will not ask how many were true.",
  },
  {
    id: hubId(3),
    title: "Breakthrough Roads: The Gold Forge",
    paragraphs: [
      "Under the assize hall a forge has burned since before the hall was built, with ten benches around it: a seed-anvil, a coal-pit, a leaf-table, a quench-tank, and six more. The Core cultivators of the sect come here to be made, and made again.",
      "The forge-warden, a deaf old man, bows to every hero who comes in. He bows lower to those who are leaving.",
    ],
    back: "You come up from the forge with soot on your cuffs and a ring in your ears. The hall is where you left it, and the fire under it burns on as it has since before the hall.",
    origin: "assize_close",
    label: "Go down to the gold forge beneath the hall, where ten benches teach a Core cultivator the heat, the quench and the temper.",
    realm: 3,
    remark: "The forge. I cracked a core there, a long time ago, and have not spoken of it. You went down ten steps and came up with a round one. Who taught you to breathe out as you laid the leaf?",
  },
  {
    id: hubId(4),
    title: "Breakthrough Roads: The Cradle Gardens",
    paragraphs: [
      "Above the harbour a terrace of small gardens holds ten stone cradles, each in its own bed of moss, where the sect’s Nascent Soul masters sit with the small figures they have grown. Nobody speaks above a murmur.",
      "The gardeners wear soft shoes and do not look at you directly, which is a courtesy. A soul, they say, does not like to be stared at, and neither does the person who carries it.",
    ],
    back: "You leave the gardens with moss on your sleeves. The harbour is where you left it, noisy and entirely ordinary, and the small stone cradles behind you have gone back to their sleeping.",
    origin: "harbour_close2",
    label: "Climb to the cradle gardens above the harbour, where ten stone cradles teach a Nascent Soul master how a second self is grown.",
    realm: 4,
    remark: "The Cradle Gardens. The little one in me has your voice now, I think. It has a way of sitting like you. You went through ten cradles. How did it take the Youth? Mine slammed every door.",
  },
  {
    id: hubId(5),
    title: "Breakthrough Roads: The Cutting Hall",
    paragraphs: [
      "On the plain beyond the glass-cliffs stands a long hall of ten looms and ten benches, hung with cords of every colour. Spirit Severing sages come here to cut what ties them, a cord at a time.",
      "The hall smells of cut thread and cold ash. The old sages who tend it say little, and what they say is mostly the name of what has just been cut.",
    ],
    back: "You come out of the hall with a thread still caught on your sleeve. The plain is where you left it, wide and indifferent, and the long hall behind you has gone back to its quiet cutting.",
    origin: "glass_close2",
    label: "Cross to the cutting hall beyond the glass-cliffs, where ten looms teach a Spirit Severing sage to cut what ties them.",
    realm: 5,
    remark: "The Cutting Hall. I cut nine and kept one, and I have never told anyone which. You cut all ten, I think, or you would not be here. I will not ask what you kept.",
  },
  {
    id: hubId(6),
    title: "Breakthrough Roads: The Switchback Stair",
    paragraphs: [
      "Beyond the old mill a stair of ten landings climbs the shoulder of a mountain that has no name on any map, turning back on itself at each. A cairn, a ford, a col and a fog-saddle mark the way, and the stair is the road, and the road is the wall.",
      "Seekers come here to learn whether they are walking toward the Dao or merely away from everything else. The stair does not tell them. It lets them find out.",
    ],
    back: "You come down the last of the stair with grit in your boots. The mill is where you left it, turning, and the mountain behind you has gone back to being only a mountain.",
    origin: "mill_close",
    label: "Climb the switchback stair beyond the mill, where ten landings teach a Dao Seeker whether they are walking toward the Dao.",
    realm: 6,
    remark: "The Switchback Stair. I turned back at the fifth landing and have been climbing it in my sleep ever since. You have been to the top. What did you hear at the fog-saddle?",
  },
  {
    id: hubId(7),
    title: "Breakthrough Roads: The Open Door",
    paragraphs: [
      "In a field beyond the clerks’ yard a single door stands in its frame with nothing on either side, its sill worn to a shallow bowl. Ten stations circle it, from the lintel to the empty doorway, and an Ascendant sits at each, saying nothing.",
      "They say the door has always been open. The Ascendants say it with a patience that would be unkind in anyone else.",
    ],
    back: "You walk back from the field with the sill’s cold still in your feet. The yard is where you left it, busy and small, and the door behind you stands in its field and goes on being open.",
    origin: "clerk_close2",
    label: "Walk out to the open door in the field beyond the clerks’ yard, where ten stations teach an Ascendant how to go through.",
    realm: 7,
    remark: "The Open Door. I have stood at it eleven times and walked through none. You have been to every station. I should like very much to know what is on the other side, and I should like even more not to be told.",
  },
  {
    id: hubId(8),
    title: "Breakthrough Roads: The Long Garden",
    paragraphs: [
      "Under the last of the archive a garden lies where no garden has any right to be, in a noon that never moves. Ten beds, ten benches and a sundial that does not turn make up the whole of it, and the True Immortals who tend it are in no hurry whatever.",
      "The garden has no gate, and no wall, and you cannot say how you came in. It is as if it had always been there, and you had always known.",
    ],
    back: "You find yourself out of the garden without having decided to leave. The depths are where you left them, and in your hair there is a leaf that was green a moment ago and is now, quite plainly, gold.",
    origin: "depths_floor",
    label: "Follow the light down into the long garden beneath the archive, where ten benches teach a True Immortal to keep a day that does not end.",
    realm: 8,
    remark: "The Long Garden. I have never been, and I have never been asked. They say the noon there is the colour of a lamp seen through a thumb. I should like to be told, if you have a mind to.",
  },
  {
    id: hubId(9),
    title: "Breakthrough Roads: The Seat of the Mountain",
    paragraphs: [
      "At the end of the last seal a bare mountain rises with ten terraces cut into its face, the last of them a single stone chair. There are no keepers. The terraces are kept by the habit of everyone who has ever sat on them.",
      "From the top you can see the Azure Cloud Sect, very small, and the gate, and the road that leads to the gate. Somebody has left a lamp lit on the sill.",
    ],
    back: "You come down from the mountain with the wind of the last terrace still in your robes. The seal is where you left it, and the lamp is where it was, and it is, you notice, still lit.",
    origin: "lastseal_choice",
    label: "Climb the bare mountain at the end of the last seal, where ten terraces, the last a single stone chair, teach a Dao Sovereign to keep.",
    realm: 9,
    remark: "The Seat. There is no one to report to, and no one to be reported by. I am glad you came, nonetheless, and I have kept the lamp.",
  },
];

const PER_WAYSIDE = 10;

/** One of the ten Breakthrough Roads’ hub scenes. Its ten choices are the ten walls; a wall opens once the hero has reached the layer it stands above. */
function waysideScene13(w: Wayside13): Scene {
  const r = w.realm;
  const first = levelOf(r, 0);
  const walls = Array.from({ length: PER_WAYSIDE }, (_, s) => first + s);
  const choices: Choice[] = walls.map((level) => {
    const [station] = WALL_LEX[r][level - first];
    const name = layerName(level);
    const apex = level === TOP_LEVEL;
    return {
      id: `go_${level}`,
      label: apex ? `Go up to ${station}, where there is no wall to break.` : `Go to ${station}: the wall above the ${name}.`,
      tone: "inquiry",
      next: wallId(level, "a"),
      requires: [{ kind: "level", min: level }],
      lockedHint: "You have not yet come to this wall.",
    } satisfies Choice;
  });
  choices.push({ id: "back_to_road", label: "Leave the stations and go back to where you left the road.", tone: "quiet", next: BACK13(w.origin) });
  return {
    id: w.id,
    title: w.title,
    paragraphs: w.paragraphs,
    extras: [
      ...(r > 0 ? [{ when: [{ kind: "realm", max: r - 1 } as Condition], paragraphs: ["This road lies above you. The stations are here, and the walls on them are not yet yours."], group: "here" }] : []),
      ...walls.map((level) => ({
        when: [{ kind: "level", min: level, max: level } as Condition],
        paragraphs: [
          level === TOP_LEVEL
            ? "You stand at the last station, on the Tenth Layer of the last realm. There is no wall above you."
            : fill("You stand on your {ord} Layer, the {name}. The wall above you is at {station}.", {
                ord: ORDINALS[layerOfLevel(level)],
                name: layerName(level),
                station: WALL_LEX[r][level - first][0],
              }),
        ],
        group: "here",
      })),
      ...(r < REALMS.length - 1 ? [{ when: [{ kind: "realm", min: r + 1 } as Condition], paragraphs: ["You have gone beyond this road. Its walls are behind you, and the stations let you walk them as one walks a house one has left."], group: "here" }] : []),
    ],
    interjections: [{ when: [{ kind: "level", min: r < REALMS.length - 1 ? first + PER_WAYSIDE : TOP_LEVEL }], line: w.remark }],
    choices,
  };
}

/** The scene a player lands on coming back from a wayside, so the opening of the origin is not read twice. */
export function waysideBack13(w: Wayside13, origin: Scene): Scene {
  return {
    id: BACK13(w.origin),
    title: `Back from ${w.title.replace(/^Breakthrough Roads: The /, "the ")}`,
    paragraphs: [w.back],
    choices: origin.choices.map((c) => ({ ...c })),
  };
}

/** One group per wayside: the hub scene and the hundred scenes of its ten walls. */
export const ascentGroups: { name: string; wayside: Wayside13; scenes: Scene[] }[] = WAYSIDES13.map((w) => {
  const first = levelOf(w.realm, 0);
  const scenes = [waysideScene13(w), ...Array.from({ length: PER_WAYSIDE }, (_, s) => buildWall(first + s, w.origin)).flat()];
  return { name: w.title, wayside: w, scenes };
});

/** The Elder’s three answers at every realm’s walls. */
export const ascentScenarios: Record<string, NpcScenario> = Object.fromEntries(WAYSIDES13.flatMap((w) => buildScenarios(w.realm)).map((s) => [s.id, s] as const));

/** The choice each origin scene gains, keyed by the origin scene’s id. */
export const ascentEntrances: Record<string, Choice> = Object.fromEntries(
  WAYSIDES13.map((w) => [w.origin, { id: w.id, label: w.label, tone: "inquiry", next: w.id } satisfies Choice] as const),
);

export const ascentRoadRealms = WAYSIDES13.map((w) => ({ id: w.id, realm: REALMS[w.realm].name, place: REALM_LEX[w.realm].place }));
