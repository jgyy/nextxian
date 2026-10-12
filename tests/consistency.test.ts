import { describe, expect, it } from "vitest";
import { story, chapters } from "@/story";
import { startScenes } from "@/engine/audit";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import { REALMS } from "@/engine/cultivation";
import { FORCE_REALM_BY_CHAPTER } from "@/story/realm-gates";
import type { GameState } from "@/engine/types";
import { DEFAULT_HERO, type Hero } from "@/engine/hero";

/** Everything the player can be shown as text, with where it sits. */
function shownText(): { where: string; text: string; kind: "title" | "label" | "prose" }[] {
  const out: { where: string; text: string; kind: "title" | "label" | "prose" }[] = [];
  for (const s of Object.values(story.scenes)) {
    out.push({ where: `${s.id}#title`, text: s.title, kind: "title" });
    s.paragraphs.forEach((t, i) => out.push({ where: `${s.id}#p${i}`, text: t, kind: "prose" }));
    s.extras?.forEach((x, i) => x.paragraphs.forEach((t) => out.push({ where: `${s.id}#x${i}`, text: t, kind: "prose" })));
    s.interjections?.forEach((x, i) => out.push({ where: `${s.id}#i${i}`, text: x.line, kind: "prose" }));
    s.choices.forEach((c) => out.push({ where: `${s.id}>${c.id}`, text: c.label, kind: "label" }));
    if (s.ending) out.push({ where: `${s.id}#ending`, text: s.ending, kind: "title" });
  }
  for (const sc of Object.values(story.scenarios)) {
    Object.entries(sc.lines).forEach(([k, t]) => out.push({ where: `${sc.id}.${k}`, text: t, kind: "prose" }));
    sc.memory?.forEach((m, i) => out.push({ where: `${sc.id}.m${i}`, text: m.line, kind: "prose" }));
  }
  for (const r of story.remarks ?? []) out.push({ where: `remark ${r.id}`, text: r.line, kind: "prose" });
  for (const table of Object.values(story.asides ?? {})) for (const [value, lines] of Object.entries(table)) for (const [tier, t] of Object.entries(lines)) out.push({ where: `aside ${value}.${tier}`, text: t, kind: "prose" });
  return out;
}

describe("typography the whole story agrees on", () => {
  const texts = shownText();

  it("uses curly quotes and apostrophes everywhere, never the straight ones", () => {
    const straight = texts.filter((t) => /["']/.test(t.text)).map((t) => `${t.where}: ${t.text.slice(0, 60)}`);
    expect(straight).toEqual([]);
  });

  it("writes an ellipsis as one character, never three dots", () => {
    expect(texts.filter((t) => t.text.includes("...")).map((t) => t.where)).toEqual([]);
  });

  it("never doubles a word in a heading or a choice, as in “Back from the The Road”", () => {
    const doubled = texts.filter((t) => t.kind !== "prose" && /\b(\w+)\s+\1\b/i.test(t.text)).map((t) => `${t.where}: ${t.text}`);
    expect(doubled).toEqual([]);
  });

  it("opens no sentence with a lower-case article after “Back from”, and ends no label without a full stop or question mark", () => {
    const back = texts.filter((t) => t.where.endsWith("#title") && t.text.startsWith("Back from"));
    expect(back.length).toBeGreaterThan(10);
    for (const t of back) expect(t.text, t.where).toMatch(/^Back from the [A-Z]/);
    const unfinished = texts.filter((t) => t.kind === "label" && !/[.!?…”’)]$/.test(t.text)).map((t) => `${t.where}: ${t.text}`);
    expect(unfinished).toEqual([]);
  });
});

describe("repetition", () => {
  it("offers four choices with four different words in every scene", () => {
    const dup: string[] = [];
    for (const s of Object.values(story.scenes)) {
      const seen = new Set<string>();
      for (const c of s.choices) {
        if (seen.has(c.label)) dup.push(`${s.id}: ${c.label}`);
        seen.add(c.label);
      }
    }
    expect(dup).toEqual([]);
  });

  it("never gives two NPC scenarios the same line, tier line or memory line, word for word", () => {
    const seen = new Map<string, string>();
    const repeats: string[] = [];
    for (const sc of Object.values(story.scenarios)) {
      for (const line of [...Object.values(sc.lines), ...(sc.memory ?? []).map((m) => m.line)]) {
        if (line.split(/\s+/).length < 8) continue;
        const first = seen.get(line);
        if (first && first !== sc.id) repeats.push(`${sc.id} repeats ${first}: ${line.slice(0, 50)}`);
        seen.set(line, sc.id);
      }
    }
    expect(repeats).toEqual([]);
  });
});

describe("the hero in the old text", () => {
  const texts = shownText();

  it("carries one weapon, a blade, wherever the story speaks of it, and no hair or dress that a hero may not have", () => {
    expect(texts.filter((t) => /\byour sword\b(?!-| Dao)/i.test(t.text)).map((t) => t.where)).toEqual([]);
    expect(texts.filter((t) => /\byour braid\b/i.test(t.text)).map((t) => t.where)).toEqual([]);
  });
});

describe("the realm in Book One", () => {
  const chapterOf = (sceneId: string): number | undefined => {
    const group = chapters.find((c) => c.scenes.some((s) => s.id === sceneId));
    const m = group && /^Chapter (\d+):/.exec(group.name);
    return m ? Number(m[1]) : undefined;
  };

  it("asks the realm of its chapter for every forceful choice from the third chapter on", () => {
    let checked = 0;
    for (const s of Object.values(story.scenes)) {
      const chapter = chapterOf(s.id);
      if (chapter === undefined) continue;
      const need = FORCE_REALM_BY_CHAPTER[chapter];
      for (const c of s.choices) {
        if (c.tone !== "force") continue;
        if (need === undefined) expect(c.needsRealm, `${s.id}:${c.id}`).toBeUndefined();
        else {
          expect(c.needsRealm, `${s.id}:${c.id}`).toBeGreaterThanOrEqual(need);
          checked++;
        }
      }
    }
    expect(checked).toBeGreaterThan(60);
  });

  it("makes a mortal pay for forcing a ward, and lets a Foundation Builder do it for free", () => {
    const scene = Object.values(story.scenes).find((s) => chapterOf(s.id) === 5 && s.choices.some((c) => c.tone === "force" && c.needsRealm === 2))!;
    const choice = scene.choices.find((c) => c.tone === "force" && c.needsRealm === 2)!;
    const state = (realm: number, cultivation: number): GameState => ({ ...createGame(story), sceneId: scene.id, realm, cultivation, stats: { qi: 50, karma: 0, insight: 10 } });
    const low = getChoices(getScene(story, scene.id), state(0, 10)).find((v) => v.choice.id === choice.id)!;
    expect(low.strain).toEqual({ needs: 2, gap: 2 });
    const hurt = choose(story, state(0, 10), choice.id);
    expect(hurt.log.some((e) => e.kind === "strain")).toBe(true);
    expect(hurt.stats.qi).toBeLessThan(50);
    const able = choose(story, state(2, REALMS[2].threshold + 5), choice.id);
    expect(able.log.some((e) => e.kind === "strain")).toBe(false);
  });
});

describe("companions only speak once they are met", () => {
  it("is found by the audit when a remark has no sign its speaker has been introduced", async () => {
    const { auditStory } = await import("@/engine/audit");
    const remark = story.remarks!.find((r) => r.id === "skiff_nomin_later")!;
    expect(remark.when.some((c) => c.kind === "bond" && c.npc === "yue")).toBe(true);
    const broken = { ...story, remarks: story.remarks!.map((r) => (r.id === remark.id ? { ...r, when: r.when.filter((c) => c.kind !== "bond") } : r)) };
    const found = auditStory(broken).filter((i) => i.kind === "unmet-speaker");
    expect(found.map((i) => i.where)).toEqual([`remark "skiff_nomin_later"`]);
  });
});

describe("spacing the whole story agrees on", () => {
  it("never leaves two spaces inside a line", () => {
    const texts = shownText();
    expect(texts.filter((t) => /\S {2,}\S/.test(t.text)).map((t) => t.where)).toEqual([]);
  });
});

describe("the hero wears what they chose", () => {
  const dress = (attire: Hero["attire"]) => ({ ...DEFAULT_HERO, attire });

  it("puts sandals on the patched hemp and a hat on nobody but the traveller, wherever the story says boots and hats", async () => {
    const { personalise } = await import("@/engine/hero");
    expect(personalise("the crunch of your boots, and Your boots ring", dress("rags"))).toBe("the crunch of your sandals, and Your sandals ring");
    expect(personalise("it fell from your boot", dress("rags"))).toBe("it fell from your sandal");
    expect(personalise("under your boots", dress("armour"))).toBe("under your boots");
    expect(personalise("Take your hat off.", dress("traveller"))).toBe("Take your hat off.");
    expect(personalise("Take your hat off.", dress("rags"))).toBe("Take your headcloth off.");
    expect(personalise("Take your hat off.", dress("scholar"))).toBe("Take your cap off.");
  });

  it("finds the story’s boots and hats: 21 of one and 3 of the other, which is what the fix is for", () => {
    const text = shownText().map((t) => t.text).join("\n");
    expect((text.match(/\b[Yy]our boots?\b/g) ?? []).length).toBeGreaterThanOrEqual(20);
    expect((text.match(/\b[Yy]our hat\b/g) ?? []).length).toBeGreaterThanOrEqual(3);
  });
});

describe("the story graph", () => {
  it("lets a player reach every scene from the opening", () => {
    const seen = new Set<string>(startScenes(story));
    const queue = [...seen];
    while (queue.length) {
      for (const c of story.scenes[queue.pop()!].choices) {
        if (!seen.has(c.next)) {
          seen.add(c.next);
          queue.push(c.next);
        }
      }
    }
    expect(Object.keys(story.scenes).filter((id) => !seen.has(id))).toEqual([]);
  });
});

describe("a sentence reads as a sentence", () => {
  it("puts “an” before a vowel sound and “a” before a consonant sound, wherever a craft or a keeper’s possessive is filled in", () => {
    const wrong: string[] = [];
    for (const { where, text } of shownText()) {
      for (const m of text.matchAll(/\ba ([aeiou][a-z’-]*)/gi)) if (!/^(u[a-z]*|eu[a-z]*|one[a-z-]*|once|ow[a-z]*)$/i.test(m[1])) wrong.push(`${where}: a ${m[1]}`);
      for (const m of text.matchAll(/\ban ([bcdfgjklmnpqrstvwxz][a-z’-]*)/gi)) if (!/^([FHLMNRSX]|hour[a-z]*|honest[a-z]*|honou?r[a-z]*|heir[a-z]*|herb[a-z]*)$/.test(m[1])) wrong.push(`${where}: an ${m[1]}`);
    }
    expect(wrong).toEqual([]);
  });

  it("never doubles a word in narration, except a name said twice or a chant", () => {
    const doubled: string[] = [];
    for (const { where, text } of shownText()) {
      for (const m of text.matchAll(/\b([A-Za-z’]+) \1\b/gi)) {
        if (/^(tao|lu|la|ni|ta|moo|na|lee|had|that|is|no|yes|very|so|never|again|ten)$/i.test(m[1])) continue;
        doubled.push(`${where}: ${m[0]}`);
      }
    }
    expect(doubled).toEqual([]);
  });
});

describe("a choice’s tone fits what the choice does", () => {
  // The books gave the first option of some approaches the approach’s own tone whatever it said, so a hug counted as a lie.
  const gentle = /^(Kneel|Comfort|Embrace|Hug|Hold (?:her|his|their|him|them)\b|Hand (?:her|him|them)|Give (?:her|him|them) (?:a|the|your)|Offer (?:her|him|them)|Help (?:her|him|them)|Carry (?:her|him|them)|Cover (?:her|him)|Stay with|Sit with|Take (?:her|his) hand|Console|Soothe)/;
  const kept = new Set(["pao_a2s6>c1", "fever_a2s1>c3"]);

  it("never counts a kind gesture as a lie or a threat, so a hug does not cost karma", () => {
    const wrong: string[] = [];
    for (const scene of Object.values(story.scenes)) {
      if (/^(dr_|wr_|rr_)/.test(scene.id)) continue;
      for (const choice of scene.choices) {
        if (gentle.test(choice.label.trim()) && (choice.tone === "deceit" || choice.tone === "force") && !kept.has(`${scene.id}>${choice.id}`)) wrong.push(`${scene.id}>${choice.id} [${choice.tone}] ${choice.label}`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it("counts claiming to be the harbour inspector as a lie", () => {
    expect(story.scenes.ferry_a2s4.choices.find((c) => c.label.startsWith("Say you are the harbour inspector"))!.tone).toBe("deceit");
  });
});

describe("the audit finds a remark that can never be said", () => {
  it("flags a callback counting from a flag that nothing sets, a count of flags that cannot all be set, and an item nobody is given", async () => {
    const { auditStory } = await import("@/engine/audit");
    const bad = [
      { id: "bad_since", when: [{ kind: "since" as const, flag: "nothing_sets_this", min: 3 }], line: "x" },
      { id: "bad_count", when: [{ kind: "count" as const, prefix: "no_such_prefix_", min: 2 }], line: "x" },
      { id: "bad_item", when: [{ kind: "item" as const, item: "no_such_item" }], line: "x" },
    ];
    const found = auditStory({ ...story, remarks: [...story.remarks!, ...bad] }).filter((i) => i.kind === "dead-condition").map((i) => i.where);
    expect(found).toEqual(['remark "bad_since"', 'remark "bad_count"', 'remark "bad_item"']);
    expect(auditStory(story)).toEqual([]);
  });

  it("has the two callbacks that used to count from flags nobody set count from the flags that are", () => {
    const since = (id: string) => story.remarks!.find((r) => r.id === id)!.when.flatMap((c) => (c.kind === "since" ? [c.flag] : []));
    expect(since("dep_ren_bridge")).toEqual(["dvisit_ren"]);
    expect(since("caravan_yue_later")).toEqual(["b4q_caravan"]);
  });
});
