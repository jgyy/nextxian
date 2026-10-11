import { chapters } from "../src/story";
import { writeFileSync } from "node:fs";
const out: string[] = [];
for (const c of chapters) {
  out.push(`\n######## ${c.name}`);
  for (const s of c.scenes) {
    out.push(`\n== ${s.id} | ${s.title}${s.ending ? " [ENDING]" : ""}`);
    s.paragraphs.forEach((p) => out.push(p));
    (s.extras ?? []).forEach((x) => out.push(`  [extra if ${JSON.stringify(x.when)}] ${x.paragraphs.join(" ")}`));
    (s.interjections ?? []).forEach((x) => out.push(`  [elder if ${JSON.stringify(x.when)}] ${x.line}`));
    s.choices.forEach((ch) => out.push(`  -> (${ch.tone}) ${ch.label} => ${ch.next}${ch.requires ? " REQ" + JSON.stringify(ch.requires) : ""}${ch.effects ? " FX" + ch.effects.map((e) => e.kind === "setFlag" ? "+" + e.flag : e.kind === "addStat" ? `${e.stat}${e.amount > 0 ? "+" : ""}${e.amount}` : e.kind).join(",") : ""}${ch.npcScenario ? " NPC:" + ch.npcScenario : ""}`));
  }
}
writeFileSync(process.argv[2], out.join("\n"));
