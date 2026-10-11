# The Crimson Abyss — a xianxia text adventure

A text adventure built with Next.js and TypeScript. You arrive at the Azure Cloud Sect after the Sealing Jade is stolen. Elder Su Wanru remembers everything you say and do, and her attitude changes how she responds to each later scenario.

![Opening scene](docs/screenshots/01-opening-desktop.png)

## Features

- **Visual novel stage.** Each choice clears the screen to the new beat. Earlier text stays out of view until you open the backlog.
- **No Continue. Every scene fits one screen.** A scene’s body text, every extra paragraph and every NPC interjection included, stays at 200 words or fewer, and so does every NPC line. There are no page turns: a long stretch of the story is broken into scenes, and each scene ends in choices. The test suite fails if a cap is broken or a scene has no heading.
- **Coloured choices.** Every decision has one of six tones: truth (jade), mercy (sky blue), inquiry (gold), deceit (violet), force (cinnabar) and quiet (grey). Each option wears its colour and names its tone, and a legend above the options explains them, so colour is never the only cue.
- **Four or more options at every decision.** Options with unmet requirements stay visible, marked, and explain what is missing.
- **The realm matters.** Cultivation is paced across six books and gates the story. Routes lock behind a realm (the Ash Bridge bows only to Spirit Severing, the abyss doors read only Dao Seeking), a choice tagged “beyond you” costs cultivation, qi and the Elder’s respect if you take it too early, and a deed far below your realm earns mastery. Every hub has a night of meditation. Seven endings depend on realm, the nine cards, the friends you kept and your karma.
- **Cultivation.** You arrive as a **Mortal**. Every decision earns cultivation points (patience, study, truth and mercy earn more than force or lies), and enough points break you through eight realms: Mortal, Qi Condensation, Foundation Establishment, Core Formation, Nascent Soul, Spirit Severing, Dao Seeking and Ascendant. A breakthrough is logged on the stage and the Elder remarks on it. From Core Formation on, a heart demon holds back anyone whose karma has sunk below −30. Realms open a locked “cultivator’s way” at the crisis of every side road, and the Elder answers a cultivator differently from a mortal.
- **Forty side roads, 1,010 new scenes.** Ten waysides branch off the main line, one per chapter from the gate to the sealing night, and each offers four roads. A road has an entry, four approaches of five scenes (each approach has its own tone), a hidden route of three scenes behind a high enough Insight, and a return scene that reports to the Elder. Every road is built from a short spec in `src/story/roads/` plus shared wording, so adding a road means adding one entry.
- **A reactive Elder.** Elder Su has 98 scenarios. Each one has five lines chosen by her trust level, and every one has at least one memory override that reads what the player has done. Earlier choices override lines through memory flags, so a lie in Chapter One comes back later. She remembers what she has just heard, and she keeps count of the tones you choose: after three of your last four decisions share a tone, she names that manner once. Her respect for you now matters too: when it moves into a new band (contempt, unregarded, weighed, respected), she says so. Her panel shows her read of you, her attitude, her mood and her stats. She speaks unprompted when her suspicion, fear, a pattern in your past choices or a run of tones crosses a threshold, and in the return scenes of the side paths. She also reads your cultivation: she comments on mortals at the Law Hall and the abyss, names each breakthrough, answers a cultivator’s confession or threat differently from a mortal’s, and remarks on how many roads you have walked. Each road report has memory lines for the secret you found, the relic you kept, a run of lies, many roads walked and a cultivator’s standing.
- **Twelve side paths.** Seven were already in the story: the herb market, the pavilion of stone wagers, the lantern stair, the sister’s shrine, the sparring court, the bell foundry and the ferry of still water. Five are new: the foothill village where Gu Hanzhen was born, the quarry under the archive where the jade was cut, the healer’s hall where the calm dust is made, the old master on the eastern peak, and the rope bridge over the Cloud Gap. Each of the five branches into four approaches, has a hidden route, rejoins the main line, and ends with a report to the Elder.
- **Multiple endings.** Five endings depend on trust, respect, insight, and your choices. One refusal ends the story early.
- **Saves in your browser.** Progress is written to `localStorage` after every choice. Storage errors never stop play. Saves from before the Elder kept a reaction history, or before decisions had tones, still load.

![Scene with no Continue](docs/screenshots/02-no-continue-desktop.png)
![Side path: the foothill village](docs/screenshots/03-side-path-village-desktop.png)
![She reports the village](docs/screenshots/04-report-reaction-desktop.png)
![She respects your judgment](docs/screenshots/05-respect-shift-desktop.png)
![Her read of a run of lies](docs/screenshots/06-manner-read-desktop.png)
![Side path: the quarry under the archive](docs/screenshots/07-quarry-desktop.png)
![Side path: the Cloud Gap bridge](docs/screenshots/08-cloud-gap-bridge-desktop.png)
![Locked options at the judgment](docs/screenshots/09-judgment-locked-desktop.png)
![Ending](docs/screenshots/10-ending-desktop.png)
![Side path: the eastern peak](docs/screenshots/11-hermit-desktop.png)
![Backlog](docs/screenshots/12-backlog-desktop.png)

### Realm gates, strain and endings

![A realm tag on a choice that is beyond you, and a gate that is locked](docs/screenshots/22-realm-tags-desktop.png)
![The strain line after forcing a ward above your realm](docs/screenshots/23-strain-desktop.png)
![The final choice, mostly locked, for a Foundation cultivator](docs/screenshots/24-endings-locked-desktop.png)
![The same choice for a Dao Seeking cultivator with nine cards](docs/screenshots/25-endings-open-desktop.png)
![Ending: The Nine Verbs](docs/screenshots/26-ending-nine-verbs-desktop.png)
![Book Six hub on a phone](docs/screenshots/27-book-six-hub-mobile.png)

```mermaid
flowchart LR
  B1[Book I<br/>Foundation] --> B2[Book II<br/>Core Formation]
  B2 --> B3[Book III<br/>Nascent Soul]
  B3 --> B4[Book IV<br/>Spirit Severing]
  B4 --> B5[Book V<br/>Dao Seeking]
  B5 --> B6[Book VI<br/>bridge, archive, abyss, sealing]
  B6 --> E{{seven endings<br/>by realm, cards, bonds, karma}}
```

### Cultivation and the side roads

![You begin as a Mortal](docs/screenshots/14-mortal-opening-desktop.png)
![The first wayside](docs/screenshots/15-wayside-desktop.png)
![A cultivator’s way is locked to a mortal](docs/screenshots/16-road-crisis-locked-desktop.png)
![The cultivator’s way, open at Qi Condensation](docs/screenshots/17-cultivators-way-desktop.png)
![Breakthrough to Qi Condensation, with the Elder’s remark](docs/screenshots/18-breakthrough-desktop.png)
![A heart demon blocks Core Formation](docs/screenshots/19-heart-demon-desktop.png)
![The Elder reacts to a road report](docs/screenshots/20-report-reaction-desktop.png)
![Cultivation panel on a phone](docs/screenshots/21-cultivation-mobile.png)
![No Continue on a phone](docs/screenshots/13-no-continue-mobile.png)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` / `npm start` | Production build and server |
| `npm test` | Story integrity, choice tones, scene and line caps, respect and NPC reactions, side paths, the 1,000 road scenes, cultivation realms, saves |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next.js rules) |
| `npm run word-count` | Words written so far, by chapter and side path, against the 1,000,000-word goal |
| `npm run check` | The validator and the continuity audit (dangling flags, dead conditions, time loops) |
| `npm run simulate -- 40 diligent` | Random-walks the story (`thorough`, `diligent`, `forceful`, `hasty`) to find soft-locks and report realm and ending |

## Project layout

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for diagrams of the engine, turn flow, choice tones, the scene cap, the NPC attitude, respect, manner and memory models, the side path map, the chapter map and the scenario table.

```
src/engine/      pure story logic: state, tones, cultivation realms, NPC reactions and memory, validation, saves, word counting
src/story/       chapters, side paths, the generated side roads, and the Elder’s scenarios (content lives here)
src/components/  React UI: the stage, the tone legend, the NPC, cultivation and stats panels
app/             Next.js routes, layout and styles
tests/           vitest suites
scripts/         word count, story check, simulator
```

## Status

The engine, NPC system, cultivation realms, visual novel UI, six books and their endings are in place and playable from the first scene to seven endings. Every scene stands on its own: no page turns, a heading on every scene, four or more tone-tagged choices at every decision, and a 200-word cap on every scene body.

The story has 3,836 scenes (9 endings) and 15,677 choices, with 176 NPC scenarios. The word count is 723,436, which is **72.34%** of the 1,000,000-word goal. **The goal was not reached.** The last stretch of work went into making the story complete and valid (Book V’s finale, all of Book VI, the endings) and into making the realm matter, rather than into more words. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md) for the plot-hole count, which is also short of the 1,000 asked for: 884 found and fixed.

The side roads of Book One are assembled from templates and read more uniformly than the hand-written chapters. The Book V finale and Book VI are compact (about 8,000 words) next to the sixteen-arc hubs before them, and are the obvious place to add more. The books and the canon are described in [docs/CANON.md](docs/CANON.md). Adding content means adding an arc under `src/story/books/<book>/`, registering it in `src/story/books/index.ts`, and running `npm run check`.
