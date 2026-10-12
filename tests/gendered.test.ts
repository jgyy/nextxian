import { describe, expect, it } from "vitest";
import { chapters, story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene, settle } from "@/engine/game";
import { conditionsHold } from "@/engine/npc";
import { DAOS, DEFAULT_HERO, GENDERS, TALENTS, type Hero } from "@/engine/hero";
import { auditStory } from "@/engine/audit";
import { sceneBodyWords, validateStory, MAX_SCENE_WORDS } from "@/engine/validate";
import { genderedEntrances, genderedGroup, genderedItems, GENDERED_BACK, GENDERED_ORIGIN, leftCloisterScenes, rightYardScenes, thirdDoorScenes } from "@/story/gendered";
import { genderedRemarksSource } from "@/story/gendered/remarks";
import type { GameState } from "@/engine/types";

const hero = (gender: Hero["gender"], patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, gender, ...patch });
const at = (sceneId: string, h: Hero, patch: Partial<GameState> = {}): GameState => settle(story, { ...createGame(story, h), sceneId, log: [], ...patch });
const ids = (s: GameState) => getChoices(getScene(story, s.sceneId), s).map((v) => v.choice.id);
const strong = { stats: { qi: 60, karma: 0, insight: 60 }, wealth: 100, decisions: 12 };
const ARCS = [
  { gender: "woman", prefix: "lc", scenes: leftCloisterScenes, door: "door_left_cloister", done: "lc_done" },
  { gender: "man", prefix: "ry", scenes: rightYardScenes, door: "door_right_yard", done: "ry_done" },
  { gender: "unspoken", prefix: "td", scenes: thirdDoorScenes, door: "door_third_door", done: "td_done" },
] as const;

describe("the gendered side paths", () => {
  it("add three paths of ten scenes each, one for each gender, behind the Elder’s confession at the tablet", () => {
    expect(genderedGroup.scenes).toHaveLength(30);
    for (const a of ARCS) {
      expect(a.scenes.map((s) => s.id), a.prefix).toEqual(Array.from({ length: 10 }, (_, n) => `${a.prefix}_${n}`));
      for (const s of a.scenes) {
        expect(sceneBodyWords(s), s.id).toBeLessThanOrEqual(MAX_SCENE_WORDS);
        expect(s.choices.length, s.id).toBeGreaterThanOrEqual(4);
        expect(JSON.stringify(s), s.id).not.toMatch(/\{\w+\}/);
      }
    }
    expect(GENDERED_ORIGIN).toBe("jade_eye_tablets_2");
    expect(chapters.find((c) => c.name === genderedGroup.name)!.scenes).toHaveLength(31);
    expect(validateStory(story)).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("shows each door to the gender it is for, and to no one else, and only until the path is walked", () => {
    for (const g of GENDERS) {
      const shown = ids(at(GENDERED_ORIGIN, hero(g.value)));
      const mine = ARCS.find((a) => a.gender === g.value)!;
      expect(shown.filter((x) => x.startsWith("door_")), g.value).toEqual([mine.door]);
      expect(ids(at(GENDERED_ORIGIN, hero(g.value), { flags: { [mine.done]: true } })).filter((x) => x.startsWith("door_")), g.value).toEqual([]);
    }
    expect(genderedEntrances.every((c) => c.hideLocked)).toBe(true);
    expect(ids(at(GENDERED_ORIGIN, hero("woman"))).length).toBeGreaterThanOrEqual(5);
  });

  it("leads each path through ten scenes to the same place, with the door gone so it cannot be walked from its own end", () => {
    const back = getScene(story, GENDERED_BACK);
    const origin = getScene(story, GENDERED_ORIGIN);
    expect(back.choices.map((c) => c.id)).toEqual(origin.choices.filter((c) => !c.id.startsWith("door_")).map((c) => c.id));
    for (const a of ARCS) {
      const last = getScene(story, `${a.prefix}_9`);
      for (const c of last.choices) expect(c.next).toBe(GENDERED_BACK);
      expect(last.choices.every((c) => (c.effects ?? []).some((e) => e.kind === "setFlag" && e.flag === a.done))).toBe(true);
    }
  });

  it("can be walked from the door to the tablet by a hero of the gender, whichever choice they make", () => {
    for (const a of ARCS) {
      for (const pick of [0, 1, 2, 3]) {
        let g: GameState = choose(story, at(GENDERED_ORIGIN, hero(a.gender), { realm: 2, ...strong }), a.door);
        expect(g.sceneId).toBe(`${a.prefix}_0`);
        for (let n = 0; n < 12 && g.sceneId !== GENDERED_BACK; n++) {
          const open = getChoices(getScene(story, g.sceneId), g).filter((v) => v.available);
          g = choose(story, g, open[Math.min(pick, open.length - 1)].choice.id);
        }
        expect(g.sceneId, `${a.gender} ${pick}`).toBe(GENDERED_BACK);
        expect(g.flags[a.done], `${a.gender} ${pick}`).toBe(true);
      }
    }
  });

  it("reads the hero’s Dao in the first scene of each path and their roots in a middle one, one line for each", () => {
    for (const a of ARCS) {
      const first = a.scenes[0];
      const dao = (first.extras ?? []).filter((x) => x.group === "dao");
      expect(dao, a.prefix).toHaveLength(DAOS.length);
      expect(new Set(dao.map((x) => x.paragraphs[0])).size).toBe(DAOS.length);
      const roots = a.scenes.flatMap((s) => (s.extras ?? []).filter((x) => x.group === "talent"));
      expect(roots, a.prefix).toHaveLength(TALENTS.length);
    }
    const shown = (d: string) => enterScene(story, { ...at("lc_0", hero("woman", { dao: d as Hero["dao"] })), log: [] }, getScene(story, "lc_0")).log.map((e) => e.text).join(" ");
    expect(new Set(DAOS.map((d) => shown(d.value))).size).toBe(DAOS.length);
  });

  it("gives each path an item worth carrying, only to a hero who chose to carry it, and speeds cultivation by it", () => {
    expect(Object.keys(genderedItems)).toEqual(["lc_sisters_book", "ry_wardens_tally", "td_blank_leaf"]);
    const taken = choose(story, at("lc_5", hero("woman"), { realm: 1, ...strong }), "c1");
    expect(taken.items.lc_sisters_book).toBe(1);
    expect(taken.speed).toBeGreaterThan(at("lc_5", hero("woman"), { realm: 1, ...strong }).speed);
    const guarded = choose(story, at("lc_5", hero("woman"), { realm: 1, ...strong }), "c3");
    expect(guarded.items.lc_sisters_book).toBeUndefined();
    expect(choose(story, at("ry_7", hero("man"), { realm: 1, ...strong }), "c2").items.ry_wardens_tally).toBe(1);
    expect(choose(story, at("td_5", hero("unspoken"), { realm: 1, ...strong }), "c2").items.td_blank_leaf).toBe(1);
  });

  it("charges for the oath, the book and the lie: a clean name for the brothers, a lie costs karma, and the middle seat asks for Insight", () => {
    const dirty = at("ry_2", hero("man"), { realm: 1, stats: { qi: 20, karma: -3, insight: 20 } });
    const sworn = choose(story, dirty, "c1");
    expect(sworn.flags.ry_sworn).toBe(true);
    const falsely = choose(story, at("ry_2", hero("man"), { realm: 1, ...strong }), "c2");
    expect(falsely.stats.karma).toBeLessThan(0);
    const liar = choose(story, at("lc_4", hero("woman"), { realm: 1, ...strong }), "c4");
    expect(liar.stats.karma).toBeLessThan(0);
    expect(liar.flags.lc_lied_elder).toBe(true);
  });
});

describe("what the Elder says to the gendered side paths", () => {
  const SCENARIOS = ["LC_ELDER", "LC_REPORT", "RY_ELDER", "RY_REPORT", "TD_ELDER", "TD_REPORT"];
  it("answers each with five different lines, and no line the same as another’s", () => {
    const seen = new Set<string>();
    for (const id of SCENARIOS) {
      const sc = story.scenarios[id];
      expect(sc, id).toBeDefined();
      expect(new Set(Object.values(sc.lines)).size, id).toBe(5);
      for (const line of [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]) {
        expect(seen.has(line), line.slice(0, 40)).toBe(false);
        seen.add(line);
      }
    }
  });

  it("remembers what the hero did: a book carried, a lie told, a paper given, a lantern named", () => {
    const reply = (state: GameState, choice: string) => choose(story, state, choice).log.filter((e) => e.kind === "npc").map((e) => e.text).join(" ");
    expect(reply(at("lc_6", hero("woman"), { flags: { lc_book_taken: true } }), "c2")).toMatch(/blue thread/);
    expect(reply(at("lc_6", hero("woman"), { flags: { lc_lied_elder: true } }), "c2")).toMatch(/I had not/);
    expect(reply(at("ry_8", hero("man")), "c4")).toMatch(/only held a lantern|knot on him/);
    expect(reply(at("ry_8", hero("man")), "c2")).toMatch(/swore nothing that touches me/);
    expect(reply(at("td_8", hero("unspoken")), "c2")).toMatch(/what is in it/);
    expect(reply(at("td_8", hero("unspoken")), "c4")).toMatch(/never lied|nearly impressed/);
    expect(reply(at("lc_9", hero("woman"), { flags: { lc_wrote_song: true } }), "c2")).toMatch(/lullaby|ashamed/);
  });

  it("has remarks that read how much of a path the hero took in, and what they carry out of it", () => {
    for (const p of ["lc_", "ry_", "td_"]) expect(genderedRemarksSource).toContain(`count:${p}`);
    const remarks = story.remarks!.filter((r) => r.id.startsWith("su_lc_") || r.id.startsWith("su_ry_") || r.id.startsWith("su_td_") || r.id.startsWith("gx_"));
    expect(remarks.length).toBeGreaterThanOrEqual(13);
    const woman = at("gate", hero("woman"), { flags: Object.fromEntries(Array.from({ length: 16 }, (_, n) => [`lc_x${n}`, true])) });
    const all = remarks.find((r) => r.id === "su_lc_all")!;
    expect(conditionsHold(all.when, woman)).toBe(true);
    expect(conditionsHold(all.when, { ...woman, hero: hero("man") })).toBe(false);
  });
});
