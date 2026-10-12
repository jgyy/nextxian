import type { Scene, Story } from "@/engine/types";
import { prologueScenes } from "./origins";
import { beginningItems, beginningScenarios } from "./origins/entries";
import { originHallEchoes } from "./origins/echoes";
import { chapterOne } from "./chapter-1";
import { chapterTwo } from "./chapter-2";
import { chapterThree } from "./chapter-3";
import { chapterFour } from "./chapter-4";
import { chapterFive } from "./chapter-5";
import { chapterSix } from "./chapter-6";
import { chapterSeven } from "./chapter-7";
import { chapterEight } from "./chapter-8";
import { chapterNine } from "./chapter-9";
import { chapterTen } from "./chapter-10";
import { chapterEleven } from "./chapter-11";
import { herbMarketScenes } from "./side-herb-market";
import { pavilionScenes } from "./side-pavilion";
import { lanternStairScenes } from "./side-lantern-stair";
import { sisterShrineScenes } from "./side-sister-shrine";
import { bellFoundryScenes } from "./side-bell-foundry";
import { stillWaterScenes } from "./side-ferry";
import { sparringCourtScenes } from "./side-sparring-court";
import { elderSu, elderSuScenarios } from "./npc/elder-su";
import { elderSuReactions } from "./npc/elder-su-reactions";
import { elderSuSidePaths } from "./npc/elder-su-side-paths";
import { villageScenes } from "./side-village";
import { quarryScenes } from "./side-quarry";
import { healerScenes } from "./side-healer";
import { hermitScenes } from "./side-hermit";
import { bridgeScenes } from "./side-bridge";
import { realmEntrances, realmRoadGroups, realmRoadScenarios, waysideBack2 } from "./roads2";
import { roadGroups, roadScenarios, waysideBackScene, waysideEntrances } from "./roads";
import { daoAssets, daoEntrances, daoGroups, daoItems, daoScenarios, waysideBack4 } from "./dao";
import { parsedWitnessRemarks } from "./witness/remarks";
import { parsedCultivationRemarks } from "./cultivation/remarks";
import { cultivationAssets, cultivationEntrances, cultivationGroups, cultivationItems, cultivationScenarios, waysideBack6 } from "./cultivation";
import { accountsReadThePath } from "./crossing/accounts";
import { parsedCrossingRemarks } from "./crossing/remarks";
import { crossingAssets, crossingEntrances, crossingGroups, crossingItems, crossingScenarios, waysideBack7 } from "./crossing";
import { witnessAssets, witnessEntrances, witnessGroups, witnessItems, witnessScenarios, waysideBack5 } from "./witness";
import { fortuneAssets, fortuneEntrances, fortuneGroups, fortuneItems, fortuneScenarios, waysideBack3 } from "./fortune";
import { elderSuRealm, elderSuRealmScenes } from "./npc/elder-su-realm";
import { applyEchoes, parseEchoes, parseRemarks, parseScenarios, parseScenes } from "@/engine/markup";
import { companions } from "./companions";
import { withBonds } from "./fixes/bonds";
import { echoesOne } from "./fixes/echoes-1";
import { rumourFlow, rumourScenes } from "./fixes/rumours";
import { remarksOne, scenariosOne } from "./fixes/remarks-1";
import { books } from "./books";
import { heroAsides } from "./hero/asides";
import { gateForce } from "./realm-gates";
import { heroEchoes } from "./hero/echoes";
import { pathEchoes } from "./path/echoes";
import { pathScenarios } from "./path/scenarios";
import { heroRemarks } from "./hero/remarks";
import { reckoningScenes, routeThroughReckonings } from "./economy/reckonings";
import { economyEndings } from "./economy/endings";
import { economyRemarks } from "./economy/remarks";

/**
 * The story in reading order. Side paths sit after the chapter they branch from and
 * rejoin the main line. Word counts and reports group scenes by these chapters.
 */
const mainLine: { name: string; scenes: Scene[] }[] = [
  { name: "Prologues: Where the Story Begins", scenes: prologueScenes },
  { name: "Chapter 1: The Stolen Seal", scenes: chapterOne },
  { name: "Side Path: The Foothill Village", scenes: villageScenes },
  { name: "Side Path: The Herb Market", scenes: herbMarketScenes },
  { name: "Side Path: The Pavilion of Stone Wagers", scenes: pavilionScenes },
  { name: "Side Path: The Healer’s Hall", scenes: healerScenes },
  { name: "Chapter 2: The Crimson Abyss", scenes: chapterTwo },
  { name: "Side Path: The Eastern Peak", scenes: hermitScenes },
  { name: "Chapter 3: The Ash Archive", scenes: chapterThree },
  { name: "Side Path: The Quarry Under the Archive", scenes: quarryScenes },
  { name: "Side Path: The Sister’s Shrine", scenes: sisterShrineScenes },
  { name: "Chapter 4: The Sutra Door", scenes: chapterFour },
  { name: "Side Path: The Lantern Stair", scenes: lanternStairScenes },
  { name: "Chapter 5: The Blood Lotus Sutra", scenes: chapterFive },
  { name: "Chapter 6: The Jade Eye", scenes: chapterSix },
  { name: "Side Path: The Cloud Gap Bridge", scenes: bridgeScenes },
  { name: "Side Path: The Sparring Court", scenes: sparringCourtScenes },
  { name: "Chapter 7: The Tribunal of Bells", scenes: chapterSeven },
  { name: "Side Path: The Bell Foundry", scenes: bellFoundryScenes },
  { name: "Chapter 8: The Second Descent", scenes: chapterEight },
  { name: "Chapter 9: The Mist Remembers Mengjiao", scenes: chapterNine },
  { name: "Side Path: The Ferry of Still Water", scenes: stillWaterScenes },
  { name: "Chapter 10: The Sealing Night", scenes: chapterTen },
  { name: "Chapter 11: The Judgment", scenes: chapterEleven },
];

/**
 * Each wayside opens from one scene of the main line, which gains one more choice, and its group of
 * roads follows the chapter it belongs to.
 */
const assembled: { name: string; scenes: Scene[] }[] = mainLine.flatMap((c) => {
  const chapter = /^Chapter (\d+):/.exec(c.name);
  const scenes = elderSuRealmScenes(c.scenes).map((raw) => {
    const scene = chapter ? gateForce(raw, Number(chapter[1])) : raw;
    const entrance = waysideEntrances[scene.id];
    const fortune = fortuneEntrances[scene.id];
    const dao = daoEntrances[scene.id];
    const witness = witnessEntrances[scene.id];
    const cultivation = cultivationEntrances[scene.id];
    const crossing = crossingEntrances[scene.id];
    return { ...scene, choices: [...scene.choices, ...(entrance ? [entrance] : []), ...(fortune ? [fortune] : []), ...(dao ? [dao] : []), ...(witness ? [witness] : []), ...(cultivation ? [cultivation] : []), ...(crossing ? [crossing] : [])] };
  });
  const groups = chapter ? roadGroups.filter((g) => g.chapter === Number(chapter[1])) : [];
  const fortunes = fortuneGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack3(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const daos = daoGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack4(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const witnesses = witnessGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack5(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const cultivations = cultivationGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack6(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const crossings = crossingGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack7(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  return [
    { ...c, scenes },
    ...groups.map(({ name, scenes: roads, wayside }) => {
      // The wayside hub sits first in its group. Coming back from it lands on a scene of its own, not on the origin.
      const origin = scenes.find((s) => waysideEntrances[s.id]?.next === wayside);
      return { name, scenes: origin ? [...roads, waysideBackScene(wayside, origin)] : roads };
    }),
    ...fortunes,
    ...daos,
    ...witnesses,
    ...cultivations,
    ...crossings,
  ];
});

/** The interludes in which the sect talks about what the player has done. */
const interludes = parseScenes(rumourScenes, "rumours").map((scene) => {
  const flow = rumourFlow.find((f) => f.id === scene.id);
  if (!flow) throw new Error(`interlude "${scene.id}“ has no entry in rumourFlow`);
  return { ...scene, choices: scene.choices.map((c) => ({ ...c, next: flow.next })) };
});

/**
 * Applies what the later passes add to the hand-written chapters: interludes spliced into the flow, echoes of
 * earlier decisions, and bond changes for the companions.
 */
function patch(groups: { name: string; scenes: Scene[] }[]): { name: string; scenes: Scene[] }[] {
  const all = groups.flatMap((g) => g.scenes);
  const byId = new Map(all.map((s) => [s.id, s]));
  for (const flow of rumourFlow) {
    for (const [from, to] of flow.edges) {
      const scene = byId.get(from);
      if (!scene) throw new Error(`interlude edge starts at missing scene “${from}"`);
      byId.set(from, { ...scene, choices: scene.choices.map((c) => (c.next === to ? { ...c, next: flow.id } : c)) });
    }
  }
  const echoed = applyEchoes([...byId.values()], [...parseEchoes(echoesOne, "echoes-1"), ...parseEchoes(heroEchoes, "hero/echoes"), ...parseEchoes(pathEchoes, "path/echoes"), ...parseEchoes(originHallEchoes, "origins/echoes")]);
  const patched = new Map(echoed.map((s) => [s.id, withBonds(s)]));
  return groups.map((g) => ({ ...g, scenes: g.scenes.map((s) => patched.get(s.id)!) }));
}

/**
 * The arcs of every later book, parsed. Each arc becomes a chapter group in the word-count report. A book hub that a
 * realm wayside opens from gains one more choice, and the wayside’s group follows the arc the hub sits in.
 */
const bookGroups = books.flatMap((book) =>
  book.arcs.flatMap((arc) => {
    const scenes = parseScenes(arc.scenes, `${book.id}/${arc.id}`)
      .map(withBonds)
      .map((scene) => (realmEntrances[scene.id] ? { ...scene, choices: [...scene.choices, realmEntrances[scene.id]] } : scene))
      .map((scene) => (fortuneEntrances[scene.id] ? { ...scene, choices: [...scene.choices, fortuneEntrances[scene.id]] } : scene))
      .map((scene) => (daoEntrances[scene.id] ? { ...scene, choices: [...scene.choices, daoEntrances[scene.id]] } : scene))
      .map((scene) => (witnessEntrances[scene.id] ? { ...scene, choices: [...scene.choices, witnessEntrances[scene.id]] } : scene))
      .map((scene) => (cultivationEntrances[scene.id] ? { ...scene, choices: [...scene.choices, cultivationEntrances[scene.id]] } : scene))
      .map((scene) => (crossingEntrances[scene.id] ? { ...scene, choices: [...scene.choices, crossingEntrances[scene.id]] } : scene));
    const roads = realmRoadGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack2(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const fortunes = fortuneGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack3(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const daos = daoGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack4(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const witnesses = witnessGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack5(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const cultivations = cultivationGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack6(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const crossings = crossingGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack7(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    return [{ name: `${book.name} · ${arc.name}`, scenes }, ...roads, ...fortunes, ...daos, ...witnesses, ...cultivations, ...crossings];
  }),
);

const rawChapters: { name: string; scenes: Scene[] }[] = [
  ...patch(assembled),
  { name: "Interludes: What the Sect Says", scenes: interludes.map(withBonds) },
  ...bookGroups,
  { name: "Interludes: The Accounts on the Road", scenes: accountsReadThePath(reckoningScenes) },
].map((g) => ({ ...g, scenes: economyEndings(routeThroughReckonings(g.scenes)) }));

/** Echoes written inside the books can land on any scene, including those of Book One. */
const bookEchoes = books.flatMap((book) => book.arcs.flatMap((arc) => (arc.echoes ? parseEchoes(arc.echoes, `${book.id}/${arc.id}/echoes`) : [])));
export const chapters: { name: string; scenes: Scene[] }[] = (() => {
  if (bookEchoes.length === 0) return rawChapters;
  const echoed = new Map(applyEchoes(rawChapters.flatMap((c) => c.scenes), bookEchoes).map((s) => [s.id, s]));
  return rawChapters.map((c) => ({ ...c, scenes: c.scenes.map((s) => echoed.get(s.id)!) }));
})();

const scenes = chapters.flatMap((c) => c.scenes);

export const story: Story = {
  title: "The Crimson Abyss: A Xianxia Tale",
  startSceneId: "gate",
  npc: elderSu,
  scenes: Object.fromEntries(scenes.map((s) => [s.id, s])),
  scenarios: {
    ...elderSuRealm({ ...elderSuScenarios, ...elderSuReactions, ...elderSuSidePaths, ...roadScenarios, ...realmRoadScenarios, ...fortuneScenarios, ...daoScenarios, ...witnessScenarios, ...cultivationScenarios, ...crossingScenarios }),
    ...Object.fromEntries(parseScenarios(scenariosOne, "scenarios-1").map((x) => [x.id, x])),
    ...Object.fromEntries(parseScenarios(pathScenarios, "path/scenarios").map((x) => [x.id, x])),
    ...Object.fromEntries(parseScenarios(beginningScenarios, "origins/entries").map((x) => [x.id, x])),
    ...Object.fromEntries(
      books.flatMap((book) => book.arcs.flatMap((arc) => (arc.scenarios ? parseScenarios(arc.scenarios, `${book.id}/${arc.id}/scenarios`) : []))).map((x) => [x.id, x]),
    ),
  },
  companions,
  items: { ...fortuneItems, ...daoItems, ...witnessItems, ...cultivationItems, ...crossingItems, ...beginningItems },
  assets: { ...fortuneAssets, ...daoAssets, ...witnessAssets, ...cultivationAssets, ...crossingAssets },
  leavesSect: "departure_dawn",
  asides: heroAsides,
  remarks: [
    ...parseRemarks(remarksOne, "remarks-1"),
    ...economyRemarks({ ...fortuneItems, ...daoItems, ...witnessItems, ...cultivationItems, ...crossingItems }),
    ...parsedWitnessRemarks(),
    ...parsedCultivationRemarks(),
    ...parsedCrossingRemarks(),
    ...parseRemarks(heroRemarks, "hero/remarks"),
    ...books.flatMap((book) => book.arcs.flatMap((arc) => (arc.remarks ? parseRemarks(arc.remarks, `${book.id}/${arc.id}/remarks`) : []))),
  ],
};
