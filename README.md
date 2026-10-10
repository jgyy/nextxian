# The Crimson Abyss — a xianxia text adventure

A text adventure built with Next.js and TypeScript. You arrive at the Azure Cloud Sect after the Sealing Jade is stolen. Elder Su Wanru remembers everything you say and do, and her attitude changes how she responds to each later scenario.

![Opening scene](docs/screenshots/01-opening-desktop.png)

## Features

- **Visual novel stage.** Each choice clears the screen to the new beat. Earlier text stays out of view until you open the backlog.
- **No Continue. Every scene fits one screen.** A scene’s body text, every extra paragraph and every NPC interjection included, stays at 200 words or fewer, and so does every NPC line. There are no page turns: a long stretch of the story is broken into scenes, and each scene ends in choices. The test suite fails if a cap is broken or a scene has no heading.
- **Coloured choices.** Every decision has one of six tones: truth (jade), mercy (sky blue), inquiry (gold), deceit (violet), force (cinnabar) and quiet (grey). Each option wears its colour and names its tone, and a legend above the options explains them, so colour is never the only cue.
- **Four or more options at every decision.** Options with unmet requirements stay visible, marked, and explain what is missing.
- **A reactive Elder.** Elder Su has 58 scenarios. Each one has five lines chosen by her trust level, and every one has at least one memory override that reads what the player has done. Earlier choices override lines through memory flags, so a lie in Chapter One comes back later. She remembers what she has just heard, and she keeps count of the tones you choose: after three of your last four decisions share a tone, she names that manner once. Her respect for you now matters too: when it moves into a new band (contempt, unregarded, weighed, respected), she says so. Her panel shows her read of you, her attitude, her mood and her stats. She speaks unprompted when her suspicion, fear, a pattern in your past choices or a run of tones crosses a threshold, and in the return scenes of the side paths.
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
| `npm test` | Story integrity, choice tones, scene and line caps, respect and NPC reactions, side paths, saves |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next.js rules) |
| `npm run word-count` | Words written so far, by chapter and side path, against the 1,000,000-word goal |

## Project layout

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for diagrams of the engine, turn flow, choice tones, the scene cap, the NPC attitude, respect, manner and memory models, the side path map, the chapter map and the scenario table.

```
src/engine/      pure story logic: state, tones, NPC reactions and memory, validation, saves, word counting
src/story/       chapters, side paths, and the Elder’s scenarios (content lives here)
src/components/  React UI: the stage, the tone legend, the NPC and stats panels
app/             Next.js routes, layout and styles
tests/           vitest suites
scripts/         word-count tool
```

## Status

The engine, NPC system, visual novel UI, eleven chapters and twelve side paths are in place. Every scene stands on its own: there are no page turns, every scene has a heading, every decision has four or more tone-tagged choices, and every scene body is capped at 200 words.

The story has 287 scenes: 282 decision scenes and 5 endings. It offers 1,147 choices, each with a tone, and 58 NPC scenarios. The word count is 65,682, which is **6.57%** of the 1,000,000-word goal. Adding content means adding scenes to `src/story/chapter-*.ts` or a side-path file, registering new side paths in `src/story/index.ts`, and the validator and word count update automatically. Every decision needs a tone, every new paragraph and NPC line must stay at 200 words or fewer, and every scene body (narration, extras and interjections together) must stay at 200 words or fewer.
