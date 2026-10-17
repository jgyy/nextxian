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
import { parsedGenderedRemarks } from "./gendered/remarks";
import { genderedBack, genderedEntrances, genderedGroup, genderedItems, genderedScenariosParsed, GENDERED_ORIGIN } from "./gendered";
import { parsedAgeRemarks } from "./age/remarks";
import { ageBookEchoes, ageEchoes } from "./age/echoes";
import { ageEndings } from "./age/endings";
import { parsedTurnRemarks, turnChoices, turnScenarios } from "./age/main";
import { accountsReadThePath } from "./crossing/accounts";
import { parsedCrossingRemarks } from "./crossing/remarks";
import { crossingAssets, crossingEntrances, crossingGroups, crossingItems, crossingScenarios, waysideBack7 } from "./crossing";
import { ageAssets, ageEntrances, ageGroups, ageItems, ageScenarios, waysideBack8 } from "./age";
import { customAssets, customEntrances, customGroups, customItems, customScenarios, waysideBack9 } from "./custom";
import { rankAssets, rankEntrances, rankGroups, rankItems, rankScenarios, waysideBack10 } from "./rank";
import { tribulationAssets, tribulationEntrances, tribulationGroups, tribulationItems, tribulationScenarios, waysideBack11 } from "./tribulation";
import { wardrobeAssets, wardrobeEntrances, wardrobeGroups, wardrobeItems, wardrobeReports, waysideBack12 } from "./wardrobe";
import { wardrobeScenarios } from "./wardrobe/scenarios";
import { ascentEntrances, ascentGroups, ascentScenarios, waysideBack13 } from "./ascent";
import { ascentEchoes } from "./ascent/echoes";
import { huntEntrances, huntGroups, huntItems, huntScenarios, waysideBack14 } from "./hunts";
import { waysideBack15, worldEntrances, worldGroups, worldItems, worldScenarios } from "./world";
import { gatherScenario, gatherScenes, parsedWorldRemarks, worldChoices, worldEndings } from "./world/main";
import { worldEchoes } from "./world/echoes";
import { parsedTurnRemarks14, turnChoices14, turnScenarios14 } from "./hunts/main";
import { huntEchoes } from "./hunts/echoes";
import { withStance } from "./hunts/stances";
import { parsedAscentRemarks } from "./ascent/remarks";
import { wardrobeEchoes } from "./wardrobe/echoes";
import { wardrobeEndings } from "./wardrobe/endings";
import { parsedWardrobeRemarks } from "./wardrobe/remarks";
import { rankEchoes } from "./rank/echoes";
import { tribulationEndings } from "./tribulation/endings";
import { tribulationEchoes } from "./tribulation/echoes";
import { parsedTribulationRemarks } from "./tribulation/remarks";
import { rankEndings } from "./rank/endings";
import { parsedTurnRemarks10, turnChoices10, turnScenarios10 } from "./rank/main";
import { parsedRankRemarks } from "./rank/remarks";
import { customBookEchoes, customEchoes } from "./custom/echoes";
import { customEndings } from "./custom/endings";
import { parsedCustomRemarks } from "./custom/remarks";
import { parsedTurnRemarks as parsedCustomTurnRemarks, turnChoices as customTurnChoices, turnScenarios as customTurnScenarios } from "./custom/main";
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
    const age = ageEntrances[scene.id];
    const custom = customEntrances[scene.id];
    const rank = rankEntrances[scene.id];
    const tribulation = tribulationEntrances[scene.id];
    const wardrobe = wardrobeEntrances[scene.id];
    const ascent = ascentEntrances[scene.id];
    const hunt = huntEntrances[scene.id];
    const world = worldEntrances[scene.id];
    const doors = scene.id === GENDERED_ORIGIN ? genderedEntrances : [];
    const turns = chapter ? gateForce({ ...scene, choices: [...turnChoices(scene), ...customTurnChoices(scene), ...turnChoices10(scene), ...turnChoices14(scene)] }, Number(chapter[1])).choices : [...turnChoices(scene), ...customTurnChoices(scene), ...turnChoices10(scene), ...turnChoices14(scene)];
    return { ...scene, choices: [...scene.choices, ...(entrance ? [entrance] : []), ...(fortune ? [fortune] : []), ...(dao ? [dao] : []), ...(witness ? [witness] : []), ...(cultivation ? [cultivation] : []), ...(crossing ? [crossing] : []), ...(age ? [age] : []), ...(custom ? [custom] : []), ...(rank ? [rank] : []), ...(tribulation ? [tribulation] : []), ...(wardrobe ? [wardrobe] : []), ...(ascent ? [ascent] : []), ...(hunt ? [hunt] : []), ...(world ? [world] : []), ...turns, ...doors] };
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
  const ages = ageGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack8(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const customs = customGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack9(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const ranks = rankGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack10(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const tribulations = tribulationGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack11(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const wardrobes = wardrobeGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack12(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const ascents = ascentGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack13(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const hunts = huntGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack14(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const worlds = worldGroups
    .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
    .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack15(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
  const gendered = scenes.some((x) => x.id === GENDERED_ORIGIN)
    ? [{ name: genderedGroup.name, scenes: [...genderedGroup.scenes, genderedBack(scenes.find((x) => x.id === GENDERED_ORIGIN)!)] }]
    : [];
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
    ...ages,
    ...customs,
    ...ranks,
    ...tribulations,
    ...wardrobes,
    ...ascents,
    ...hunts,
    ...worlds,
    ...gendered,
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
  const echoed = applyEchoes([...byId.values()], [...parseEchoes(echoesOne, "echoes-1"), ...parseEchoes(heroEchoes, "hero/echoes"), ...parseEchoes(pathEchoes, "path/echoes"), ...parseEchoes(originHallEchoes, "origins/echoes"), ...parseEchoes(ageEchoes, "age/echoes"), ...parseEchoes(customEchoes, "custom/echoes")]);
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
      .map((scene) => (crossingEntrances[scene.id] ? { ...scene, choices: [...scene.choices, crossingEntrances[scene.id]] } : scene))
      .map((scene) => (ageEntrances[scene.id] ? { ...scene, choices: [...scene.choices, ageEntrances[scene.id]] } : scene))
      .map((scene) => (customEntrances[scene.id] ? { ...scene, choices: [...scene.choices, customEntrances[scene.id]] } : scene))
      .map((scene) => (rankEntrances[scene.id] ? { ...scene, choices: [...scene.choices, rankEntrances[scene.id]] } : scene))
      .map((scene) => (tribulationEntrances[scene.id] ? { ...scene, choices: [...scene.choices, tribulationEntrances[scene.id]] } : scene))
      .map((scene) => (wardrobeEntrances[scene.id] ? { ...scene, choices: [...scene.choices, wardrobeEntrances[scene.id]] } : scene))
      .map((scene) => (ascentEntrances[scene.id] ? { ...scene, choices: [...scene.choices, ascentEntrances[scene.id]] } : scene))
      .map((scene) => (huntEntrances[scene.id] ? { ...scene, choices: [...scene.choices, huntEntrances[scene.id]] } : scene))
      .map((scene) => (worldEntrances[scene.id] ? { ...scene, choices: [...scene.choices, worldEntrances[scene.id]] } : scene))
      .map((scene) => (turnChoices10(scene).length ? { ...scene, choices: [...scene.choices, ...turnChoices10(scene)] } : scene))
      .map((scene) => (turnChoices14(scene).length ? { ...scene, choices: [...scene.choices, ...turnChoices14(scene)] } : scene))
      .map((scene) => (worldChoices(scene).length ? { ...scene, choices: [...scene.choices, ...worldChoices(scene)] } : scene));
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
    const ages = ageGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack8(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const customs = customGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack9(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const ranks = rankGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack10(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const tribulations = tribulationGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack11(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const wardrobes = wardrobeGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack12(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const ascents = ascentGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack13(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const hunts = huntGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack14(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    const worlds = worldGroups
      .filter((g) => scenes.some((s) => s.id === g.wayside.origin))
      .map((g) => ({ name: g.name, scenes: [...g.scenes, waysideBack15(g.wayside, scenes.find((s) => s.id === g.wayside.origin)!)] }));
    // The world comes up the road before the Last Sealing: its scenes sit in the arc that holds the hub it opens from.
    const gathering = scenes.some((s) => s.id === "hub_b6") ? [{ name: "World Roads: The Gathering", scenes: gatherScenes() }] : [];
    return [{ name: `${book.name} · ${arc.name}`, scenes }, ...roads, ...fortunes, ...daos, ...witnesses, ...cultivations, ...crossings, ...ages, ...customs, ...ranks, ...tribulations, ...wardrobes, ...ascents, ...hunts, ...worlds, ...gathering];
  }),
);

const rawChapters: { name: string; scenes: Scene[] }[] = [
  ...patch(assembled),
  { name: "Interludes: What the Sect Says", scenes: interludes.map(withBonds) },
  ...bookGroups,
  { name: "Interludes: The Accounts on the Road", scenes: accountsReadThePath(reckoningScenes) },
].map((g) => ({ ...g, scenes: worldEndings(wardrobeEndings(tribulationEndings(rankEndings(customEndings(ageEndings(economyEndings(routeThroughReckonings(g.scenes)))))))).map(withStance) }));

/** Echoes written inside the books can land on any scene, including those of Book One. */
const bookEchoes = books.flatMap((book) => book.arcs.flatMap((arc) => (arc.echoes ? parseEchoes(arc.echoes, `${book.id}/${arc.id}/echoes`) : []))).concat(parseEchoes(ageBookEchoes, "age/book-echoes"), parseEchoes(customBookEchoes, "custom/book-echoes"), parseEchoes(rankEchoes, "rank/echoes"), parseEchoes(tribulationEchoes, "tribulation/echoes"), parseEchoes(wardrobeEchoes, "wardrobe/echoes"), parseEchoes(ascentEchoes, "ascent/echoes"), parseEchoes(huntEchoes, "hunts/echoes"), parseEchoes(worldEchoes, "world/echoes"));
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
    ...elderSuRealm({ ...elderSuScenarios, ...elderSuReactions, ...elderSuSidePaths, ...roadScenarios, ...realmRoadScenarios, ...fortuneScenarios, ...daoScenarios, ...witnessScenarios, ...cultivationScenarios, ...crossingScenarios, ...ageScenarios, ...customScenarios, ...rankScenarios, ...tribulationScenarios, ...wardrobeReports }),
    ...wardrobeScenarios,
    ...ascentScenarios,
    ...huntScenarios,
    ...worldScenarios,
    [gatherScenario.id]: gatherScenario,
    ...Object.fromEntries(parseScenarios(scenariosOne, "scenarios-1").map((x) => [x.id, x])),
    ...Object.fromEntries(parseScenarios(pathScenarios, "path/scenarios").map((x) => [x.id, x])),
    ...turnScenarios(),
    ...customTurnScenarios(),
    ...turnScenarios10(),
    ...turnScenarios14(),
    ...Object.fromEntries(genderedScenariosParsed.map((x) => [x.id, x])),
    ...Object.fromEntries(parseScenarios(beginningScenarios, "origins/entries").map((x) => [x.id, x])),
    ...Object.fromEntries(
      books.flatMap((book) => book.arcs.flatMap((arc) => (arc.scenarios ? parseScenarios(arc.scenarios, `${book.id}/${arc.id}/scenarios`) : []))).map((x) => [x.id, x]),
    ),
  },
  companions,
  items: { ...fortuneItems, ...daoItems, ...witnessItems, ...cultivationItems, ...crossingItems, ...ageItems, ...customItems, ...rankItems, ...tribulationItems, ...wardrobeItems, ...genderedItems, ...huntItems, ...worldItems, ...beginningItems },
  assets: { ...fortuneAssets, ...daoAssets, ...witnessAssets, ...cultivationAssets, ...crossingAssets, ...ageAssets, ...customAssets, ...rankAssets, ...tribulationAssets, ...wardrobeAssets },
  leavesSect: "departure_dawn",
  asides: heroAsides,
  remarks: [
    ...parseRemarks(remarksOne, "remarks-1"),
    ...economyRemarks({ ...fortuneItems, ...daoItems, ...witnessItems, ...cultivationItems, ...crossingItems, ...ageItems, ...customItems, ...rankItems, ...tribulationItems, ...wardrobeItems }),
    ...parsedWitnessRemarks(),
    ...parsedCultivationRemarks(),
    ...parsedCrossingRemarks(),
    ...parsedAgeRemarks(),
    ...parsedTurnRemarks(),
    ...parsedCustomRemarks(),
    ...parsedCustomTurnRemarks(),
    ...parsedRankRemarks(),
    ...parsedTurnRemarks10(),
    ...parsedWardrobeRemarks(),
    ...parsedTribulationRemarks(),
    ...parsedGenderedRemarks(),
    ...parseRemarks(heroRemarks, "hero/remarks"),
    ...books.flatMap((book) => book.arcs.flatMap((arc) => (arc.remarks ? parseRemarks(arc.remarks, `${book.id}/${arc.id}/remarks`) : []))),
    ...parsedAscentRemarks(),
    ...parsedTurnRemarks14(),
    ...parsedWorldRemarks(),
  ],
};
