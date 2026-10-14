import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { auditStory } from "@/engine/audit";
import { personalise, type Hero, DEFAULT_HERO } from "@/engine/hero";
import { bandBounds, bandHeld } from "@/story/roads2/hero-lex";

/** Everything the player can be shown as text, with where it sits. */
function shownText(): { where: string; text: string }[] {
  const out: { where: string; text: string }[] = [];
  for (const s of Object.values(story.scenes)) {
    s.paragraphs.forEach((t, i) => out.push({ where: `${s.id}#p${i}`, text: t }));
    s.extras?.forEach((x, i) => x.paragraphs.forEach((t) => out.push({ where: `${s.id}#x${i}`, text: t })));
    s.interjections?.forEach((x, i) => out.push({ where: `${s.id}#i${i}`, text: x.line }));
    s.choices.forEach((c) => out.push({ where: `${s.id}>${c.id}`, text: c.label }));
  }
  for (const sc of Object.values(story.scenarios)) {
    Object.entries(sc.lines).forEach(([k, t]) => out.push({ where: `${sc.id}.${k}`, text: t }));
    sc.memory?.forEach((m, i) => out.push({ where: `${sc.id}.m${i}`, text: m.line }));
  }
  return out;
}

const hero = (patch: Partial<Hero>): Hero => ({ ...DEFAULT_HERO, ...patch });
type G = "woman" | "man" | "unspoken";
/** What every hero reads of a scene, whatever their gender: the line with the hero filled in. */
const shownTo = (id: string, gender: G) => {
  const scene = story.scenes[id];
  return personalise([...scene.paragraphs, ...scene.choices.map((c) => c.label)].join("\n"), hero({ gender }));
};

describe("lines no hero should read as someone else", () => {
  it("lets the hero be anyone in the scenes where an NPC talks about the hero in the third person", () => {
    const has = (id: string, re: RegExp) => shownTo(id, "unspoken").match(re);
    expect(has("ladder_a4s1", /Young (lady|woman|man)/)).toBeNull();
    expect(has("festival_a1s7", /bad lady/i)).toBeNull();
    expect(has("camp_a3s3", /the girl/)).toBeNull();
    expect(has("roots_a2s8", /a girl with a black seed/)).toBeNull();
    expect(has("censors_h2", /take her to the river/)).toBeNull();
    expect(has("asm_d3s3", /She has the seed|her left palm/)).toBeNull();
    expect(has("asm_d3s4", /hid her|because she had a hand/)).toBeNull();
    expect(has("nine_h3", /She had a hand/)).toBeNull();
    expect(has("summit_offer", /She is the Reserve|She has volunteered/)).toBeNull();
    expect(has("singing_a1s7", /kill her|in her chest/)).toBeNull();
    expect(personalise("Bad {person}", hero({ gender: "unspoken" }))).toBe("Bad stranger");
  });

  it("addresses the hero as sir, madam or friend by the hero’s own gender in the lines that once said madam to everyone", () => {
    for (const [id, re] of [["mourning_a3s5", /order, (sir|madam|friend)\?/], ["ferry_a3s5", /anything, (sir|madam|friend)\./], ["ninesails_a1s8", /not a fool, (sir|madam|friend)\./]] as const) {
      expect(shownTo(id, "man"), id).toMatch(/\bsir\b/);
      expect(shownTo(id, "woman"), id).toMatch(/\bmadam\b/);
      expect(shownTo(id, "unspoken"), id).toMatch(/\bfriend\b/);
      expect(shownTo(id, "man"), id).toMatch(re);
    }
  });
});

describe("one person, one gender", () => {
  /** The pronouns of a sentence about one named person, outside what anyone says aloud. */
  const pronounsAbout = (name: RegExp, others: RegExp): { he: string[]; she: string[] } => {
    const he: string[] = [];
    const she: string[] = [];
    for (const { where, text } of shownText()) {
      if (where.startsWith("cs_") || where.startsWith("remark ")) continue;
      for (const sentence of text.replace(/“[^”]*”/g, "“”").split(/(?<=[.!?])\s+/)) {
        if (!name.test(sentence) || others.test(sentence)) continue;
        // “Beside him … Lian Sheng” is Hu Jingyan’s neighbour, and “Old Lin puts a hand on his shoulder” is Ren Qiao’s shoulder.
        if (/\b(he|his|him|himself)\b/.test(sentence) && !/Beside him, rigid on her|puts a hand on his shoulder/.test(sentence)) he.push(`${where}: ${sentence.slice(0, 80)}`);
        if (/\b(she|her|hers|herself)\b/.test(sentence)) she.push(`${where}: ${sentence.slice(0, 80)}`);
      }
    }
    return { he, she };
  };

  it("keeps Lian Sheng a woman from the tribunal of Book One to the Archive of Book Six", () => {
    const { he, she } = pronounsAbout(/Lian Sheng|Master Lian\b/, /Hu Jingyan|Duan|Tsering|Lin Yuan|Dur\b|Ren Qiao|Gu\b|Fang|Elder|Wanru|Hao Lan|Mei Qiu/);
    expect(he).toEqual([]);
    expect(she.length).toBeGreaterThan(12);
    expect(shownText().filter((t) => /(a|the) (tall pale )?man (named|called) Lian|“I am Lian Sheng\./.test(t.text))).toEqual([]);
  });

  it("keeps Old Lin a woman wherever the lamp-keeper of the sutra stair is met", () => {
    const { he, she } = pronounsAbout(/Old Lin/, /Ren Qiao|Lin Yuan|Duan|Gu\b|Hao Lan|Dur\b|\bboy\b/);
    expect(he).toEqual([]);
    expect(she.length).toBeGreaterThanOrEqual(6);
    expect(shownText().filter((t) => /There was a man on the Ash Bridge/.test(t.text))).toEqual([]);
  });
});

describe("a condition that no hero can meet", () => {
  it("is found by the audit when it asks a realm outside the ladder, or a stat outside its limits", () => {
    const scene = story.scenes.gate;
    const broken = (when: NonNullable<typeof scene.extras>[number]["when"]) => ({ ...story, scenes: { ...story.scenes, gate: { ...scene, extras: [...(scene.extras ?? []), { when, paragraphs: ["x"] }] } } });
    expect(auditStory(broken([{ kind: "realm", max: -1 }])).map((i) => i.message).join("\n")).toContain("no hero can have");
    expect(auditStory(broken([{ kind: "realm", min: 8 }])).length).toBeGreaterThan(0);
    expect(auditStory(broken([{ kind: "realm", min: 3, max: 2 }])).length).toBeGreaterThan(0);
    expect(auditStory(broken([{ kind: "stat", stat: "insight", min: 101 }])).map((i) => i.message).join("\n")).toContain("outside what it can be");
    expect(auditStory(broken([{ kind: "realm", min: 2, max: 2 }]))).toEqual([]);
    expect(auditStory(story)).toEqual([]);
  });

  it("is not written by the road builders: no band of a road is held by no one", () => {
    for (let road = 0; road <= 6; road++) {
      for (const band of ["far", "below", "at", "above"] as const) {
        const { min, max } = bandBounds(band, road);
        const held = (max ?? 7) >= 0 && (min ?? 0) <= 7;
        expect(bandHeld(band, road), `${band} at ${road}`).toBe(held);
      }
    }
    expect(bandHeld("far", 1)).toBe(false);
    expect(bandHeld("below", 0)).toBe(false);
    expect(bandHeld("above", 7)).toBe(false);
    expect(bandHeld("far", 2)).toBe(true);
  });
});

describe("a kind act is not counted as a lie or a threat", () => {
  it("counts a hug or an embrace as mercy", () => {
    const wrong: string[] = [];
    for (const s of Object.values(story.scenes)) for (const c of s.choices) if (/^(Hug|Embrace)\b/.test(c.label) && c.tone !== "mercy") wrong.push(`${s.id}>${c.id} [${c.tone}] ${c.label}`);
    expect(wrong).toEqual([]);
  });
});
