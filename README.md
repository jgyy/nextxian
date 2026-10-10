# The Crimson Abyss — a xianxia text adventure

A text adventure built with Next.js and TypeScript. You arrive at the Azure Cloud Sect after the Sealing Jade is stolen. Elder Su Wanru remembers everything you say and do, and her attitude changes how she responds to each later scenario.

![Opening scene](docs/screenshots/01-opening-desktop.png)

## Features

- **Visual novel stage.** Each choice clears the screen to the new beat. Earlier text stays out of view until you open the backlog.
- **Reactive NPC.** Elder Su has 36 scenarios. Each one has five lines chosen by her trust level. Earlier choices override lines through memory flags, so a lie in Chapter One comes back later. She also speaks unprompted when her suspicion, fear, or your past choices cross a threshold, and her portrait shows her mood.
- **Four or more options at every decision.** Options with unmet requirements stay visible, marked, and explain what is missing.
- **Multiple endings.** Five endings depend on trust, respect, insight, and your choices. One refusal ends the story early.
- **Saves in your browser.** Progress is written to `localStorage` after every choice. Storage errors never stop play.

![Visual novel stage](docs/screenshots/02-visual-novel-stage-desktop.png)
![Backlog](docs/screenshots/03-backlog-desktop.png)
![NPC reacts](docs/screenshots/04-npc-reacts-desktop.png)
![Locked options](docs/screenshots/05-judgment-locked-options.png)
![Ending](docs/screenshots/06-ending-desktop.png)
![Mobile](docs/screenshots/07-mobile.png)

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
| `npm test` | Story integrity and NPC reaction tests |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next.js rules) |
| `npm run word-count` | Words written so far, by chapter, against the 1,000,000-word goal |

## Project layout

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for diagrams of the engine, turn flow, NPC attitude model, and scenario table.

```
src/engine/   pure story logic: state, NPC reactions, validation
src/story/    chapters and the Elder's scenarios (content lives here)
src/components/  React UI
app/          Next.js routes and layout
tests/        vitest suites
scripts/      word-count tool
```

## Status

The engine, NPC system, visual novel UI, and eleven chapters are in place: the original three-part storyline plus eight new chapters (Ash Archive, Sutra Door, Blood Lotus Sutra, Jade Eye, Tribunal of Bells, Second Descent, Mist Remembers Mengjiao, Sealing Night). The story is about 29,100 words, which is **2.91%** of the 1,000,000-word goal. Adding content means adding scenes to `src/story/chapter-*.ts`, registering new chapters in `src/story/index.ts`, and the validator and word count update automatically.
