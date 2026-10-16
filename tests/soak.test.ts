import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { choose, createGame, enterScene, getChoices, getScene } from "@/engine/game";
import { DAOS, DEFAULT_HERO, ORIGINS, STATUSES, TALENTS, type Hero } from "@/engine/hero";
import { reachedFlag, REALMS } from "@/engine/cultivation";
import type { Element } from "@/engine/path";
import { rootKindOf } from "@/story/crossing/build";
import { WAYSIDES7 } from "@/story/crossing";
import { WAYSIDES9 } from "@/story/custom";
import { WAYSIDES10 } from "@/story/rank";
import { bandOf } from "@/engine/rank";

/** A small, repeatable generator, so every run of the suite walks the same walks. */
function rng(seed: number): () => number {
  let s = seed;
  return () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
}

describe("a long walk from every beginning", () => {
  it("keeps the numbers, the realm and the words sound for twelve beginnings and named heroes, favouring the grounds of the Cultivation Roads", () => {
    const problems: string[] = [];
    let steps = 0;
    for (const [oi, origin] of ORIGINS.entries()) {
      const r = rng(oi * 31 + 5);
      const hero: Hero = {
        ...DEFAULT_HERO,
        name: oi % 2 ? "Mo Lan" : DEFAULT_HERO.name,
        origin: origin.value,
        talent: TALENTS[Math.floor(r() * TALENTS.length)].value,
        dao: DAOS[Math.floor(r() * DAOS.length)].value,
        status: STATUSES[Math.floor(r() * STATUSES.length)].value,
      };
      const start = createGame(story, hero).realm;
      let g = createGame(story, hero);
      let realm = g.realm;
      for (let i = 0; i < 700; i++) {
        const scene = getScene(story, g.sceneId);
        if (scene.ending && scene.choices.length === 0) break;
        const options = getChoices(scene, g).filter((v) => v.available);
        if (!options.length) {
          problems.push(`${origin.value} is stuck in ${g.sceneId}`);
          break;
        }
        const grounds = options.filter((v) => ["circulate", "temper", "comprehend", "push", "retreat"].includes(v.choice.id) || /^wayside_cultivation|^go_cr_|^approach_/.test(v.choice.id));
        const pool = grounds.length && r() < 0.6 ? grounds : options;
        const before = g;
        g = choose(story, g, pool[Math.floor(r() * pool.length)].choice.id);
        steps++;
        if (g.realm < realm) problems.push(`${origin.value} fell a realm in ${g.sceneId}`);
        realm = g.realm;
        // Every realm entered after the start carries the flag the engine sets on the decision it was entered.
        for (let n = start + 1; n <= g.realm; n++) if (!g.flags[reachedFlag(n)]) problems.push(`${origin.value} is a ${REALMS[n].name} with no flag for it in ${g.sceneId}`);
        if (g.wealth < 0 || Number.isNaN(g.cultivation) || Object.values(g.stats).some(Number.isNaN)) problems.push(`${origin.value} has a bad number in ${g.sceneId}`);
        if (g.cultivation < REALMS[g.realm].threshold) problems.push(`${origin.value} stands below the floor of ${REALMS[g.realm].name} in ${g.sceneId}`);
        for (const e of g.log.slice(before.log.length)) {
          if (/undefined|\{\w+\}|NaN/.test(e.text)) problems.push(`${g.sceneId}: ${e.text.slice(0, 60)}`);
          if (hero.name !== DEFAULT_HERO.name && /\bWanderer\b/.test(e.text)) problems.push(`${g.sceneId} still says Wanderer: ${e.text.slice(0, 60)}`);
        }
      }
    }
    expect(steps).toBeGreaterThan(1500);
    expect([...new Set(problems)]).toEqual([]);
  });

  it("gives a named hero their own name in every heading, as well as in the text", () => {
    const named: Hero = { ...DEFAULT_HERO, name: "Mo Lan" };
    const entered = enterScene(story, { ...createGame(story, named), log: [] }, getScene(story, "archive_report_2"));
    const heading = entered.log.find((e) => e.kind === "heading")!;
    expect(heading.text).toBe("Questions for Mo Lan");
    expect(enterScene(story, { ...createGame(story), log: [] }, getScene(story, "archive_report_2")).log.find((e) => e.kind === "heading")!.text).toBe("Questions for the Wanderer");
  });
});

describe("a long walk through the Crossing Roads", () => {
  it("shows each hero only the scenes behind the doors that are theirs, and keeps the numbers sound, for every gender, root and craft", () => {
    const problems: string[] = [];
    const scenesSeen = new Set<string>();
    let steps = 0;
    let n = 0;
    for (const gender of ["woman", "man", "unspoken"] as const) {
      for (const talent of TALENTS) {
        const dao = DAOS[(n++ * 3) % DAOS.length];
        const hero: Hero = { ...DEFAULT_HERO, gender, talent: talent.value, dao: dao.value, name: n % 2 ? "Mo Lan" : DEFAULT_HERO.name };
        const r = rng(n * 17 + 3);
        let g = createGame(story, hero);
        // Every hero begins at a different wayside, so the walks between them cover all ten.
        g = { ...g, sceneId: WAYSIDES7[n % WAYSIDES7.length].id, realm: 3, cultivation: REALMS[3].threshold + 5, wealth: 200, stats: { qi: 60, karma: 0, insight: 40 } };
        for (let i = 0; i < 500; i++) {
          const scene = getScene(story, g.sceneId);
          if (scene.ending && scene.choices.length === 0) break;
          const options = getChoices(scene, g).filter((v) => v.available);
          if (!options.length) {
            problems.push(`${gender}/${talent.value}/${dao.value} is stuck in ${g.sceneId}`);
            break;
          }
          // Stay on the roads: take a door whenever one is shown, then an approach, then a road from the hub; leave a wayside only when every road on it is done.
          const staying = options.filter((v) => v.choice.id !== "back_to_road");
          const doors = staying.filter((v) => /^door_/.test(v.choice.id) || /^go_pr_/.test(v.choice.id));
          const pool = doors.length ? doors : g.sceneId.startsWith("pr_") && g.sceneId.endsWith("_entry") ? staying.filter((v) => /^approach_/.test(v.choice.id)) : staying.length ? staying : options;
          const before = g;
          g = choose(story, g, pool[Math.floor(r() * pool.length)].choice.id);
          steps++;
          scenesSeen.add(g.sceneId);
          const mine = /_(gw|gm|gu)$/.exec(g.sceneId);
          if (mine && mine[1] !== { woman: "gw", man: "gm", unspoken: "gu" }[gender]) problems.push(`a ${gender} stands in ${g.sceneId}`);
          const root = /^pr_([a-z]+)_[a-z]+_(rk|rp|rf)$/.exec(g.sceneId);
          if (root) {
            const kind = rootKindOf(talent.value, root[1] as Element);
            if (root[2] !== { kin: "rk", partial: "rp", far: "rf" }[kind]) problems.push(`a ${talent.value} root stands in ${g.sceneId}`);
          }
          const skill = /_(so|sx|sn)$/.exec(g.sceneId);
          if (skill) {
            const wanted = dao.value === "none" ? "sn" : g.sceneId.includes(`_${dao.value === "forging" ? "forging" : dao.value}_`) ? "so" : "sx";
            if (skill[1] !== wanted) problems.push(`a ${dao.value} Dao stands in ${g.sceneId}`);
          }
          if (g.wealth < 0 || Number.isNaN(g.cultivation) || Object.values(g.stats).some(Number.isNaN)) problems.push(`bad number in ${g.sceneId}`);
          for (const e of g.log.slice(before.log.length)) {
            if (/undefined|\{\w+\}|NaN/.test(e.text)) problems.push(`${g.sceneId}: ${e.text.slice(0, 60)}`);
            if (hero.name !== DEFAULT_HERO.name && /\bWanderer\b/.test(e.text)) problems.push(`${g.sceneId} still says Wanderer`);
          }
        }
      }
    }
    expect(steps).toBeGreaterThan(3000);
    expect([...scenesSeen].filter((s) => /_(gw|gm|gu|rk|rp|rf|so|sx|sn)$/.test(s)).length).toBeGreaterThan(40);
    expect([...new Set(problems)]).toEqual([]);
  });
});

describe("a long walk through the Custom Roads", () => {
  it("shows each hero only the scenes behind the doors that are theirs, and keeps the numbers sound, for every gender and every wayside", () => {
    const problems: string[] = [];
    const doorsSeen = new Set<string>();
    let steps = 0;
    let n = 0;
    for (const gender of ["woman", "man", "unspoken"] as const) {
      for (const talent of TALENTS) {
        const dao = DAOS[(n++ * 3) % DAOS.length];
        const hero: Hero = { ...DEFAULT_HERO, gender, talent: talent.value, dao: dao.value, name: n % 2 ? "Mo Lan" : DEFAULT_HERO.name };
        const r = rng(n * 19 + 7);
        let g = createGame(story, hero);
        // Every hero begins at a different wayside, so the walks between them cover all ten.
        g = { ...g, sceneId: WAYSIDES9[n % WAYSIDES9.length].id, realm: 3, cultivation: REALMS[3].threshold + 5, wealth: 200, stats: { qi: 60, karma: 0, insight: 40 } };
        for (let i = 0; i < 500; i++) {
          const scene = getScene(story, g.sceneId);
          if (scene.ending && scene.choices.length === 0) break;
          const options = getChoices(scene, g).filter((v) => v.available);
          if (!options.length) {
            problems.push(`${gender}/${talent.value} is stuck in ${g.sceneId}`);
            break;
          }
          // Stay on the roads: take a door whenever one is shown, then an approach, then a road from the hub; leave a wayside only when every road on it is done.
          const staying = options.filter((v) => v.choice.id !== "back_to_road");
          const doors = staying.filter((v) => /^door_[wmu]$/.test(v.choice.id) || /^go_cs_/.test(v.choice.id));
          const pool = doors.length ? doors : /^cs_[a-z]+_[a-z]{2}_entry$/.test(g.sceneId) ? staying.filter((v) => /^approach_/.test(v.choice.id)) : staying.length ? staying : options;
          const before = g;
          g = choose(story, g, pool[Math.floor(r() * pool.length)].choice.id);
          steps++;
          const door = /_d\d([wmu])$/.exec(g.sceneId);
          if (door) {
            doorsSeen.add(g.sceneId);
            if (door[1] !== gender[0]) problems.push(`a ${gender} stands in ${g.sceneId}`);
          }
          if (g.wealth < 0 || Number.isNaN(g.cultivation) || Object.values(g.stats).some(Number.isNaN)) problems.push(`bad number in ${g.sceneId}`);
          for (const e of g.log.slice(before.log.length)) {
            if (/undefined|\{\w+\}|NaN/.test(e.text)) problems.push(`${g.sceneId}: ${e.text.slice(0, 60)}`);
            if (hero.name !== DEFAULT_HERO.name && /\bWanderer\b/.test(e.text)) problems.push(`${g.sceneId} still says Wanderer`);
          }
        }
      }
    }
    expect(steps).toBeGreaterThan(3000);
    expect(doorsSeen.size).toBeGreaterThan(40);
    expect([...new Set(problems)]).toEqual([]);
  });
});

describe("a long walk through the Rank Roads", () => {
  it("shows each hero only the scenes behind the doors that are theirs, lets no hero below a road claim its rung, and keeps the numbers sound, for every gender, at every realm and every wayside", () => {
    const problems: string[] = [];
    const doorsSeen = new Set<string>();
    const bandsSeen = new Set<string>();
    let steps = 0;
    let n = 0;
    for (const gender of ["woman", "man", "unspoken"] as const) {
      for (const talent of TALENTS) {
        const dao = DAOS[(n++ * 3) % DAOS.length];
        const hero: Hero = { ...DEFAULT_HERO, gender, talent: talent.value, dao: dao.value, name: n % 2 ? "Mo Lan" : DEFAULT_HERO.name };
        const r = rng(n * 23 + 11);
        // Every hero begins at a different wayside and a different realm, so the walks between them meet every band of every rung.
        const realm = (n * 3) % 8;
        let g = createGame(story, hero);
        g = { ...g, sceneId: WAYSIDES10[n % WAYSIDES10.length].id, realm, cultivation: REALMS[realm].threshold + 5, wealth: 200, stats: { qi: 60, karma: 0, insight: 40 } };
        for (let i = 0; i < 500; i++) {
          const scene = getScene(story, g.sceneId);
          if (scene.ending && scene.choices.length === 0) break;
          const options = getChoices(scene, g).filter((v) => v.available);
          if (!options.length) {
            problems.push(`${gender}/${talent.value} is stuck in ${g.sceneId}`);
            break;
          }
          const staying = options.filter((v) => v.choice.id !== "back_to_road");
          const doors = staying.filter((v) => /^door_[wmu]$/.test(v.choice.id) || /^go_rk_/.test(v.choice.id));
          const pool = doors.length ? doors : /^rk_[a-z]+_[a-z]{2}_entry$/.test(g.sceneId) ? staying.filter((v) => /^approach_/.test(v.choice.id)) : staying.length ? staying : options;
          const before = g;
          const picked = pool[Math.floor(r() * pool.length)].choice;
          g = choose(story, g, picked.id);
          steps++;
          const door = /^rk_([a-z]+)_[a-z]{2}_d\d([wmu])$/.exec(g.sceneId);
          if (door) {
            doorsSeen.add(g.sceneId);
            const road = WAYSIDES10.find((w) => w.rung === door[1])!.realm;
            bandsSeen.add(bandOf(g.realm, road));
            if (door[2] !== gender[0]) problems.push(`a ${gender} stands in ${g.sceneId}`);
          }
          if (picked.id === "claim" && before.realm < WAYSIDES10.find((w) => before.sceneId.includes(`rk_${w.rung}_`))!.realm) problems.push(`a hero below the rung claimed it in ${before.sceneId}`);
          if (g.wealth < 0 || Number.isNaN(g.cultivation) || Object.values(g.stats).some(Number.isNaN)) problems.push(`bad number in ${g.sceneId}`);
          for (const e of g.log.slice(before.log.length)) {
            if (/undefined|\{\w+\}|NaN/.test(e.text)) problems.push(`${g.sceneId}: ${e.text.slice(0, 60)}`);
            if (hero.name !== DEFAULT_HERO.name && /\bWanderer\b/.test(e.text)) problems.push(`${g.sceneId} still says Wanderer`);
          }
        }
      }
    }
    expect(steps).toBeGreaterThan(3000);
    expect(doorsSeen.size).toBeGreaterThan(40);
    expect(bandsSeen).toEqual(new Set(["below", "at", "above"]));
    expect([...new Set(problems)]).toEqual([]);
  });
});
