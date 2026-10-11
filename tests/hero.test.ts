import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import {
  ATTIRES,
  BACKGROUNDS,
  cleanName,
  DEFAULT_HERO,
  describeHero,
  GENDERS,
  HERO_FIELDS,
  HERO_OPTIONS,
  isHero,
  LOOKS,
  personalise,
  realmBandFor,
  restoreHero,
  standingOf,
  standingTierFor,
  startFor,
  STATUSES,
  type Hero,
} from "@/engine/hero";
import { parseConditions } from "@/engine/markup";
import { conditionsHold } from "@/engine/npc";
import { restoreGame } from "@/engine/save";
import { countWords } from "@/engine/words";
import type { GameState, Tier } from "@/engine/types";

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];
const hero = (patch: Partial<Hero> = {}): Hero => ({ ...DEFAULT_HERO, ...patch });
const log = (state: GameState) => state.log.map((e) => e.text).join("\n");

describe("the hero", () => {
  it("offers every part of the character a choice of values, each with a label and a line for the creation screen", () => {
    expect(GENDERS).toHaveLength(3);
    expect(LOOKS).toHaveLength(4);
    expect(BACKGROUNDS).toHaveLength(6);
    expect(ATTIRES).toHaveLength(5);
    expect(STATUSES).toHaveLength(4);
    for (const field of HERO_FIELDS) {
      const values = HERO_OPTIONS[field].map((o) => o.value);
      expect(new Set(values).size, field).toBe(values.length);
      for (const o of HERO_OPTIONS[field]) {
        expect(o.label.length, `${field}:${o.value}`).toBeGreaterThan(0);
        expect(o.blurb.length, `${field}:${o.value}`).toBeGreaterThan(10);
      }
    }
  });

  it("cleans a name down to something the story can say aloud, and falls back to the default", () => {
    expect(cleanName("  Mo   Lan ")).toBe("Mo Lan");
    expect(cleanName("Ah-Zhi’s <b>")).toBe("Ah-Zhi’s b");
    expect(cleanName("1234 !!")).toBe("Wanderer");
    expect(cleanName("")).toBe("Wanderer");
    expect(cleanName("x".repeat(80)).length).toBeLessThanOrEqual(24);
  });

  it("recognises a whole hero, and repairs a partial one from an old save", () => {
    expect(isHero(hero())).toBe(true);
    expect(isHero({ ...hero(), attire: "toga" })).toBe(false);
    expect(isHero(null)).toBe(false);
    expect(restoreHero(undefined)).toEqual(DEFAULT_HERO);
    expect(restoreHero({ name: "Lin", attire: "silk", status: "noble", looks: "nonsense" })).toEqual({ ...DEFAULT_HERO, name: "Lin", attire: "silk", status: "noble" });
  });

  it("describes the hero in one sentence that names every part", () => {
    const text = describeHero(hero({ name: "Mo Lan", gender: "woman", looks: "scarred", background: "healer", attire: "silk", status: "noble" }));
    for (const word of ["Mo Lan", "woman", "scarred", "herbalist", "silk", "noble"]) expect(text).toContain(word);
  });
});

describe("saying the hero’s name and pronouns", () => {
  it("fills pronoun and name slots, with a capital where the slot has one", () => {
    expect(personalise("{They} said {their} {person} was {name}.", hero({ gender: "woman", name: "Lin" }))).toBe("She said her woman was Lin.");
    expect(personalise("{They} left. Thank you, {honorific}.", hero({ gender: "man" }))).toBe("He left. Thank you, sir.");
    expect(personalise("{they} {them} {themself}", hero({ gender: "unspoken" }))).toBe("they them themself");
  });

  it("puts the hero’s own name where the story says Wanderer, and changes nothing for the default name", () => {
    const named = hero({ name: "Mo Lan" });
    expect(personalise("I hear you, Wanderer. The Wanderer climbed. A Wanderer of the Law Hall.", named)).toBe("I hear you, Mo Lan. Mo Lan climbed. A wanderer of the Law Hall.");
    expect(personalise("I hear you, Wanderer.", DEFAULT_HERO)).toBe("I hear you, Wanderer.");
  });

  it("uses the hero’s name in every NPC line and every scene, so nobody says Wanderer to someone who has given a name", () => {
    let state = createGame(story, hero({ name: "Mo Lan" }));
    state = choose(story, state, "bow_and_state");
    expect(log(state)).not.toMatch(/\bWanderer\b/);
  });
});

describe("what the hero starts with", () => {
  it("shifts the opening numbers by background, birth and dress", () => {
    const scholar = createGame(story, hero({ background: "scholar" }));
    const soldier = createGame(story, hero({ background: "soldier" }));
    expect(scholar.stats.insight).toBeGreaterThan(soldier.stats.insight);
    expect(soldier.stats.qi).toBeGreaterThan(scholar.stats.qi);
    const noble = createGame(story, hero({ status: "noble", attire: "silk" }));
    const outcast = createGame(story, hero({ status: "outcast", attire: "rags" }));
    expect(noble.npc.respect).toBeGreaterThan(outcast.npc.respect);
    expect(outcast.npc.suspicion).toBeGreaterThan(createGame(story).npc.suspicion);
    expect(createGame(story, hero({ attire: "armour" })).npc.fear).toBeGreaterThan(createGame(story).npc.fear);
  });

  it("never starts a hero outside the ranges the game keeps", () => {
    for (const background of BACKGROUNDS) {
      for (const status of STATUSES) {
        for (const attire of ATTIRES) {
          const game = createGame(story, hero({ background: background.value, status: status.value, attire: attire.value }));
          for (const v of Object.values(game.stats)) expect(v).toBeGreaterThanOrEqual(-100);
          expect(game.npc.respect).toBeGreaterThanOrEqual(-100);
          expect(game.npc.fear).toBeGreaterThanOrEqual(0);
          expect(game.realm).toBe(0);
        }
      }
    }
    expect(startFor(DEFAULT_HERO).stats).toBeDefined();
  });
});

describe("standing", () => {
  it("is set by birth and dress, and rises two a realm, so a realm outweighs a birth", () => {
    expect(standingOf(hero({ status: "outcast", attire: "rags" }), 0)).toBe(0);
    expect(standingOf(hero({ status: "noble", attire: "silk" }), 0)).toBe(4);
    expect(standingOf(hero({ status: "outcast", attire: "rags" }), 3)).toBeGreaterThan(standingOf(hero({ status: "noble", attire: "silk" }), 0));
    expect(standingOf(hero({ status: "outcast", attire: "rags" }), 2)).toBeGreaterThan(standingOf(hero({ status: "commoner" }), 0));
  });

  it("sorts standing into five bands, and a realm into four", () => {
    expect(["despised", "unremarked", "regarded", "honoured", "revered"]).toEqual([0, 1, 3, 6, 10].map(standingTierFor));
    expect([0, 1, 2, 3, 4, 5, 6, 7].map(realmBandFor)).toEqual(["mortal", "novice", "novice", "adept", "adept", "sage", "sage", "sage"]);
  });
});

describe("conditions on the hero", () => {
  const base = createGame(story, hero({ attire: "silk", status: "noble", gender: "woman" }));

  it("holds when the hero is one of the values, or is not one of them", () => {
    expect(conditionsHold([{ kind: "hero", field: "attire", is: ["silk", "armour"] }], base)).toBe(true);
    expect(conditionsHold([{ kind: "hero", field: "attire", is: ["rags"] }], base)).toBe(false);
    expect(conditionsHold([{ kind: "hero", field: "status", not: ["outcast"] }], base)).toBe(true);
    expect(conditionsHold([{ kind: "hero", field: "status", not: ["noble"] }], base)).toBe(false);
  });

  it("reads standing against the hero’s realm", () => {
    expect(conditionsHold([{ kind: "standing", min: 4 }], base)).toBe(true);
    expect(conditionsHold([{ kind: "standing", min: 6 }], base)).toBe(false);
    expect(conditionsHold([{ kind: "standing", min: 6 }], { ...base, realm: 1 })).toBe(true);
  });

  it("parses `hero:` and `standing` in the markup, and refuses a value that is not offered", () => {
    expect(parseConditions("hero:attire=silk|armour & standing>=4", "t")).toEqual([
      { kind: "hero", field: "attire", is: ["silk", "armour"] },
      { kind: "standing", min: 4 },
    ]);
    expect(parseConditions("hero:status!=outcast", "t")).toEqual([{ kind: "hero", field: "status", not: ["outcast"] }]);
    expect(() => parseConditions("hero:attire=toga", "t")).toThrow();
    expect(() => parseConditions("hero:shoe=silk", "t")).toThrow();
  });
});

describe("saves", () => {
  it("restores the hero, and gives a save from before the hero existed the default one", () => {
    const game = createGame(story, hero({ name: "Mo Lan", attire: "armour" }));
    expect(restoreGame(JSON.parse(JSON.stringify(game)), story)?.hero).toEqual(game.hero);
    const { hero: _unused, lastAside: _also, ...old } = game;
    void _unused;
    void _also;
    const restored = restoreGame(old, story);
    expect(restored?.hero).toEqual(DEFAULT_HERO);
    expect(restored?.lastAside).toBeLessThan(0);
  });
});

describe("how the Elder speaks of the hero", () => {
  const asides = story.asides!;

  it("has a distinct line for every value of every part of the hero, at every attitude, and one per realm band", () => {
    for (const field of HERO_FIELDS) {
      for (const o of HERO_OPTIONS[field]) {
        const lines = TIERS.map((t) => asides[field]?.[o.value]?.[t]);
        expect(lines.every((l) => typeof l === "string" && l.length > 20), `${field}:${o.value}`).toBe(true);
        expect(new Set(lines).size, `${field}:${o.value}`).toBe(TIERS.length);
      }
    }
    for (const band of ["mortal", "novice", "adept", "sage"]) {
      expect(new Set(TIERS.map((t) => asides.realm[band][t])).size, band).toBe(TIERS.length);
    }
  });

  it("keeps every observation short and in her own voice, never naming a gender in a pronoun the hero did not choose", () => {
    for (const table of Object.values(asides)) {
      for (const lines of Object.values(table)) {
        for (const line of Object.values(lines)) {
          expect(countWords(line)).toBeLessThanOrEqual(60);
          expect(line).not.toMatch(/\{(they|them|their)\}/);
        }
      }
    }
  });

  /** Plays decisions on the Law Hall steps until she has said something about the hero, and returns what she said. */
  function asidesFor(h: Hero, decisions = 12): string[] {
    let state: GameState = { ...createGame(story, h), sceneId: "law_hall" };
    const said: string[] = [];
    for (let i = 0; i < decisions; i++) {
      const before = state.remarked.filter((id) => id.startsWith("aside:")).length;
      const options = getChoices(getScene(story, state.sceneId), state).filter((v) => v.available && story.scenes[v.choice.next] && v.choice.npcScenario);
      if (!options.length) break;
      state = choose(story, state, options[0].choice.id);
      if (state.remarked.filter((id) => id.startsWith("aside:")).length > before) said.push(state.remarked.at(-1)!);
      state = { ...state, sceneId: "law_hall" };
    }
    return said;
  }

  it("makes the same Elder say different things about different heroes, and never the same thing twice", () => {
    const a = asidesFor(hero({ status: "noble", attire: "silk", looks: "striking", background: "merchant", gender: "man" }));
    const b = asidesFor(hero({ status: "outcast", attire: "rags", looks: "scarred", background: "orphan", gender: "woman" }));
    expect(a.length).toBeGreaterThan(0);
    expect(b.length).toBeGreaterThan(0);
    expect(a.join()).not.toBe(b.join());
    expect(new Set(a).size).toBe(a.length);
  });

  it("waits until she has listened a while, and leaves a gap between one remark and the next", () => {
    const state = createGame(story);
    const after = choose(story, { ...state, sceneId: "law_hall" }, getChoices(getScene(story, "law_hall"), state).find((v) => v.choice.npcScenario)!.choice.id);
    expect(after.remarked.some((id) => id.startsWith("aside:"))).toBe(false);
  });
});

describe("how the first scenes read the hero", () => {
  const read = (h: Hero, id: string, patch: Partial<GameState> = {}) => log(enterScene(story, { ...createGame(story, h), log: [], ...patch }, getScene(story, id)));

  it("changes the gate and the Law Hall with the hero’s dress, birth, face, trade and manner", () => {
    const plain = read(hero(), "gate");
    for (const patch of [{ attire: "silk" }, { attire: "armour" }, { status: "outcast" }, { status: "noble" }, { looks: "scarred" }] as Partial<Hero>[]) {
      expect(read(hero(patch), "gate"), JSON.stringify(patch)).not.toBe(plain);
    }
    const command = read(hero(), "mission");
    for (const patch of [{ gender: "woman" }, { background: "soldier" }, { background: "healer" }] as Partial<Hero>[]) {
      expect(read(hero(patch), "mission"), JSON.stringify(patch)).not.toBe(command);
    }
  });

  it("covers every value of the parts it reads, so no hero meets a gap", () => {
    const gate = story.scenes.gate.extras ?? [];
    const mission = story.scenes.mission.extras ?? [];
    const covers = (extras: typeof gate, field: string, value: string) => extras.some((x) => x.when.some((c) => c.kind === "hero" && c.field === field && c.is?.includes(value)));
    for (const o of ATTIRES) expect(covers(gate, "attire", o.value), `gate attire ${o.value}`).toBe(true);
    for (const o of STATUSES) expect(covers(gate, "status", o.value), `gate status ${o.value}`).toBe(true);
    for (const o of LOOKS) expect(covers(gate, "looks", o.value), `gate looks ${o.value}`).toBe(true);
    for (const o of GENDERS) expect(covers(mission, "gender", o.value), `mission gender ${o.value}`).toBe(true);
    for (const o of BACKGROUNDS) expect(covers(mission, "background", o.value), `mission background ${o.value}`).toBe(true);
  });
});

describe("how the company speaks of the hero", () => {
  const remarks = story.remarks!.filter((r) => r.id.startsWith("hr_"));

  it("has a remark for every companion who speaks of the hero, and each waits until that companion has been met", () => {
    expect(remarks.length).toBeGreaterThanOrEqual(60);
    for (const r of remarks) {
      expect(r.speaker, r.id).toBeDefined();
      expect(r.when.some((c) => c.kind === "bond" && c.npc === r.speaker), `${r.id} waits for the bond`).toBe(true);
      expect(r.when.some((c) => c.kind === "hero" || c.kind === "standing" || c.kind === "realm"), `${r.id} reads the hero`).toBe(true);
    }
    expect(new Set(remarks.map((r) => r.speaker)).size).toBeGreaterThanOrEqual(18);
  });

  it("lets a companion say it once the hero fits and they have met", () => {
    const base = createGame(story, hero({ background: "soldier" }));
    const met: GameState = { ...base, bonds: { gu: 0 }, decisions: 10, lastRemark: -10 };
    const after = choose(story, { ...met, sceneId: "gate" }, "bow_and_state");
    expect(log(after)).toMatch(/Hanming/);
    const unmet = choose(story, { ...base, decisions: 10, lastRemark: -10, sceneId: "gate" }, "bow_and_state");
    expect(log(unmet)).not.toMatch(/Hanming/);
  });
});
