import { describe, expect, it } from "vitest";
import { story } from "@/story";
import { auditStory, clash } from "@/engine/audit";
import { personalise, type Hero, DEFAULT_HERO } from "@/engine/hero";
import { MANNER_SHIFT, REALM_SHIFT } from "@/engine/npc";
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

describe("conditions that cannot hold together", () => {
  it("are found by the audit: two conditions in one list that ask opposite things", () => {
    const scene = story.scenes.gate;
    const broken = (when: NonNullable<typeof scene.extras>[number]["when"]) => auditStory({ ...story, scenes: { ...story.scenes, gate: { ...scene, extras: [...(scene.extras ?? []), { when, paragraphs: ["x"] }] } } }).map((i) => i.message).join("\n");
    // Each of these is a fine condition alone.
    expect(broken([{ kind: "realm", min: 5 }, { kind: "realm", max: 2 }])).toContain("which no hero can hold at once");
    expect(broken([{ kind: "stat", stat: "qi", min: 50 }, { kind: "stat", stat: "qi", max: 10 }])).toContain("stat qi");
    expect(broken([{ kind: "flag", flag: "gate_x" }, { kind: "flag", flag: "gate_x", is: false }])).toContain("both set and not set");
    expect(broken([{ kind: "hero", field: "gender", is: ["woman"] }, { kind: "hero", field: "gender", is: ["man"] }])).toContain("hero gender");
    expect(broken([{ kind: "hero", field: "gender", is: ["woman"] }, { kind: "hero", field: "gender", not: ["woman"] }])).toContain("hero gender");
    expect(broken([{ kind: "mood", is: "furious" }, { kind: "mood", is: "tender" }])).toContain("face");
    expect(broken([{ kind: "scene", prefix: "gate" }, { kind: "scene", prefix: "law_hall" }])).toContain("scene starting both");
    expect(broken([{ kind: "item", item: "x", max: 0 }, { kind: "item", item: "x" }])).toContain("item");
    // And these are held by someone.
    expect(broken([{ kind: "realm", min: 2 }, { kind: "realm", max: 5 }, { kind: "hero", field: "gender", is: ["woman", "man"] }, { kind: "hero", field: "gender", not: ["man"] }])).not.toContain("no hero can hold at once");
    expect(broken([{ kind: "scene", prefix: "gate" }, { kind: "scene", prefix: "gate_go" }])).not.toContain("scene starting both");
    expect(clash([])).toBeUndefined();
  });

  it("are not in the story: no scene, line, memory or remark asks for a rung and its opposite", () => {
    expect(auditStory(story).filter((i) => i.message.includes("at once"))).toEqual([]);
  });
});

describe("the tenth pass: lines that were broken or told every hero what they were", () => {
  const texts = shownText();
  const at = (where: string) => texts.find((t) => t.where === where)!.text;

  it("starts no paragraph in the middle of a sentence, and glues no two speeches together", () => {
    const body = texts.filter((t) => t.where.includes("#p"));
    expect(body.filter((t) => /^[\sa-z]/.test(t.text)).map((t) => t.where)).toEqual([]);
    expect(body.filter((t) => /”\s+“/.test(t.text)).map((t) => t.where)).toEqual([]);
  });

  it("gives the lines that lost their speaker back to who said them", () => {
    expect(at("court_a4s9#p3")).toMatch(/^“It is a sentence,” he says, hoarsely\./);
    expect(at("court_a4s7#p0")).toMatch(/^“I did not need you to be sorry,” she says\./);
    expect(at("court_close2#p1")).toMatch(/^“It occurs to me,” he says, “that I have been signing/);
    expect(at("bone_a3s2#p0")).toMatch(/^“We give Qadan what he came to buy,” says Hao Lan\./);
    expect(at("bone_h1#p6")).toMatch(/^Madam Uzun says, in a voice stripped of all its richness, “She found me/);
  });

  it("calls the hero someone, and not a girl, wherever others speak of the one who carries the seed, the cards or the cup", () => {
    expect(at("glass_a1s4#p4")).toContain("And someone with a seed.");
    expect(at("court_a4s2#p3")).toContain("The one in the mountain.");
    for (const t of texts) expect(t.text, t.where).not.toMatch(/\ba girl with a seed\b|\bthe girl in the mountain\b/);
    const cup = personalise(at("caravan_a4s5#p5"), hero({ gender: "man" }));
    expect(cup).toContain("someone at the Four Bones who gave his last cup to a boy");
    expect(personalise(at("caravan_a4s5#p5"), hero({ gender: "unspoken" }))).toContain("gave their last cup");
  });

  it("does not tell every soldier, of any gender, that they are a man who has stood a post, or a levy man", () => {
    for (const t of texts) {
      expect(t.text, t.where).not.toMatch(/as one does for a man who has stood a post|a levy man by how he drinks/);
    }
    const posts = texts.filter((t) => /as one does for someone who has stood a post/.test(t.text));
    const levies = texts.filter((t) => /a levy veteran by how they drink/.test(t.text));
    expect(posts.length).toBeGreaterThanOrEqual(100);
    expect(levies.length).toBeGreaterThanOrEqual(100);
    expect(texts.filter((t) => /calls you young master behind your back/.test(t.text))).toEqual([]);
  });

  it("speaks of the hero by the hero’s own pronouns where the Elder, a trait line or a beginning once said her, his, he or men to every hero", () => {
    expect(MANNER_SHIFT.force).not.toMatch(/\bmen\b|\bhe\b|\bhis\b|\bhim\b/);
    const pillMaker = texts.filter((t) => /A pill-maker never travels empty-handed/.test(t.text));
    expect(pillMaker.length).toBeGreaterThanOrEqual(6);
    for (const [gender, their, they] of [["woman", "her", "she"], ["man", "his", "he"], ["unspoken", "their", "they"]] as const) {
      const h = hero({ gender });
      expect(personalise(REALM_SHIFT[5], h), gender).toContain(`borrowed ${their} shoes`);
      expect(story.asides!.origin.listener.devoted, gender).toContain("Law Hall unasked.");
      expect(personalise(story.scenarios.LH_ENTER_LISTENER.lines.neutral, h), gender).toContain("if they try");
      expect(personalise(story.scenarios.AGE_TURN_SLOW_GATE.lines.neutral, h), gender).toContain(`does ${their} sums`);
      expect(personalise(story.scenarios.OFFER_TO_FETCH_GU.memory![0].line, h), gender).toContain(`a name ${they} heard an hour ago`);
      for (const t of pillMaker) expect(personalise(t.text, h), `${t.where} ${gender}`).toContain("empty-handed, even in the mind");
    }
    for (const t of texts) expect(t.text, t.where).not.toMatch(/nobody to tell him he cannot|where she wishes to go|does her sums|empty-handed in her mind|of her own accord/);
  });
});
