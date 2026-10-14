import { story } from "@/story";
import { startScenes } from "@/engine/audit";
const texts: { where: string; text: string }[] = [];
for (const s of Object.values(story.scenes)) {
  texts.push({ where: s.id + ":title", text: s.title });
  s.paragraphs.forEach((p, i) => texts.push({ where: `${s.id}:p${i}`, text: p }));
  (s.extras ?? []).forEach((x, i) => x.paragraphs.forEach((p) => texts.push({ where: `${s.id}:x${i}`, text: p })));
  (s.interjections ?? []).forEach((x, i) => texts.push({ where: `${s.id}:i${i}`, text: x.line }));
  s.choices.forEach((c) => texts.push({ where: `${s.id}>${c.id}`, text: c.label }));
}
for (const sc of Object.values(story.scenarios)) {
  Object.entries(sc.lines).forEach(([t, l]) => texts.push({ where: `${sc.id}:${t}`, text: l }));
  (sc.memory ?? []).forEach((m, i) => texts.push({ where: `${sc.id}:m${i}`, text: m.line }));
}
for (const r of story.remarks ?? []) texts.push({ where: r.id, text: r.line });
console.log("strings", texts.length);
// reachability
const seen = new Set(startScenes(story)); const q = [...seen];
while (q.length) { const id = q.pop()!; for (const c of story.scenes[id].choices) if (!seen.has(c.next)) { seen.add(c.next); q.push(c.next); } }
const unreachable = Object.keys(story.scenes).filter((id) => !seen.has(id));
console.log("unreachable scenes", unreachable.length, unreachable.slice(0, 10));
const bad: Record<string, string[]> = { an_cons: [], a_vowel: [], dblspace: [], spacepunct: [], noend: [], straight: [], dblpunct: [] };
const vowelA = /^(a|an) /i;
for (const { where, text } of texts) {
  for (const m of text.matchAll(/\b(a|an) ([A-Za-z’']+)/g)) {
    const w = m[2].toLowerCase();
    const vowelStart = /^[aeiou]/.test(w) && !/^(uni|use|usu|uti|one|once|eu|ubiq)/.test(w);
    const hon = /^(hour|honest|honou?r|heir)/.test(w);
    if (m[1] === "a" && (vowelStart || hon) && m[0][0] === "a") bad.a_vowel.push(`${where}: ${m[0]}`);
    if (m[1] === "an" && !vowelStart && !hon && !/^(x|m|f|l|n|s|r|h)$/.test(w)) bad.an_cons.push(`${where}: ${m[0]}`);
  }
  if (/  +/.test(text)) bad.dblspace.push(where);
  if (/ [,.;:!?]/.test(text) && !/ \.\.\./.test(text)) bad.spacepunct.push(`${where}: ${text.match(/.{10} [,.;:!?].{5}/)?.[0]}`);
  if (/[.,;:]{2,}(?!\.)/.test(text.replace(/\.\.\./g, ""))) bad.dblpunct.push(`${where}: ${text.match(/.{8}[.,;:]{2,}.{4}/)?.[0]}`);
  if (/'/.test(text)) bad.straight.push(`${where}: ${text.match(/.{10}'.{5}/)?.[0]}`);
}
for (const [k, v] of Object.entries(bad)) console.log(k, v.length, v.slice(0, 6));
