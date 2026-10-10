# Architecture

The game is split into a pure story engine and a thin React shell. The engine has no React or DOM dependencies, so every rule is covered by unit tests.

```mermaid
flowchart LR
  subgraph Story["src/story (content)"]
    C1[chapter-1..2.ts]
    C3[chapter-3..10.ts<br/>eight chapters]
    C11[chapter-11.ts<br/>judgment and endings]
    SD[side paths<br/>herb market, lantern stair,<br/>shrine, court, foundry, ferry]
    NPC[npc/elder-su.ts<br/>forty-four scenarios]
  end
  subgraph Engine["src/engine (pure logic)"]
    G[game.ts<br/>createGame / choose / getChoices]
    N[npc.ts<br/>tierFor / moodFor / reactToScenario]
    V[validate.ts<br/>validateStory, 200-word cap]
    SV[save.ts<br/>restoreGame]
    W[words.ts<br/>countWords]
    T[types.ts]
  end
  subgraph UI["src/components + app/"]
    GV[GameView.tsx<br/>VN stage + backlog]
    NP[NpcPanel.tsx<br/>portrait + mood]
    SP[StatsPanel.tsx]
  end
  C1 & C3 & C11 & SD & NPC --> S[story/index.ts]
  S --> G
  G --> N
  G --> A[tierShiftLine or moodShiftLine<br/>attitude comments]
  V -. checked in tests .-> S
  V --> W
  G --> GV
  GV --> SV
  GV --> NP & SP
  GV -->|localStorage save| Storage[(Browser storage)]
```

## Turn flow

Every choice goes through the same path. The NPC reacts before the next scene is entered, so her line is the last thing the player reads before the new text.

```mermaid
sequenceDiagram
  participant P as Player
  participant UI as GameView
  participant E as choose() in game.ts
  participant N as reactToScenario()
  P->>UI: clicks an option
  UI->>E: choose(story, state, choiceId)
  E->>E: check choice.requires (throws if locked)
  E->>E: log the player's line
  opt choice.npcScenario set
    E->>N: pick line from history, flags, then trust tier
    N-->>E: line, tier
    E->>E: apply scenario delta, remember flags, append to history
  end
  E->>E: apply choice.effects
  E->>E: enter next scene, add extras whose conditions hold
  E-->>UI: new GameState
  UI->>UI: render log, choices and NPC panel
```

## NPC attitude model

Trust chooses the tier. Memory flags can override the tier line when the NPC remembers something the player did earlier, and the reaction history can override it when she has just heard something from the player (see below).

```mermaid
stateDiagram-v2
  [*] --> Neutral
  Neutral --> Warm: trust ≥ 15
  Neutral --> Wary: trust < -10
  Wary --> Hostile: trust ≤ -40
  Wary --> Neutral: trust ≥ -10
  Warm --> Devoted: trust ≥ 50
  Warm --> Neutral: trust < 15
  Devoted --> Warm: trust < 50
  Hostile --> Wary: trust > -40
```

Her face, the mood shown in her portrait, is trust unless fear or suspicion takes over. Fear of 50 or more makes her afraid, and suspicion of 65 or more makes her suspicious. Those two override the tier.

```mermaid
stateDiagram-v2
  [*] --> Tier
  Tier --> Afraid: fear ≥ 50
  Tier --> Suspicious: suspicion ≥ 65, fear below 50
  Afraid --> Tier: fear < 50
  Suspicious --> Tier: suspicion < 65
  Suspicious --> Afraid: fear ≥ 50
```

## Attitude shifts and pattern interjections

When a choice crosses a tier boundary, the Elder speaks once more after her reply, so the change is the last thing the player reads. When only her face changes (fear or suspicion takes hold or lets go), she says so instead. Scenes can also carry interjections whose conditions combine flags and her reaction history, so she notices patterns in what the player has done.

```mermaid
flowchart TD
  P[player picks a choice] --> R[reactToScenario: memory line or tier line]
  R --> D[apply scenario delta and effects]
  D --> T{tier changed?}
  T -- yes --> TL[tierShiftLine from → to]
  T -- no --> M{mood changed?}
  M -- yes --> ML[moodShiftLine: her face changed]
  M -- no --> E[enter next scene]
  TL --> E
  ML --> E
  E --> I{interjections whose<br/>flags and history all hold}
  I --> SAY[she speaks unprompted]
```

```mermaid
sequenceDiagram
  participant P as Player
  participant G as choose()
  participant N as NPC engine
  P->>G: honest_account (trust 10, neutral)
  G->>N: reactToScenario (trust tier is neutral)
  N-->>G: neutral reply
  G->>G: trust +8 → 18
  G->>N: tierShiftLine(neutral, warm)
  N-->>G: "I notice I have started to listen…"
  G-->>P: reply, then attitude comment
```

## Reaction memory

Every NPC scenario she reacts to is appended to `history`, in order. A `said` condition reads that list: `min` counts how many times a scenario appears, and `within` looks only at her last N reactions. `within: 1` is "what she just heard". Memory overrides are checked in order, so flag memories written by earlier choices still win over the newer history lines.

```mermaid
flowchart LR
  A[choose: npcScenario] --> H[history before this reaction]
  H --> RM{memory lines, first match}
  RM -- a flag or said condition holds --> ML[memory line]
  RM -- none holds --> TL[tier line]
  ML --> REC[append scenario id to history]
  TL --> REC
  REC --> LATER[later said conditions read it]
```

A contradiction is the clearest case. If the player tells the truth and then denies it with nothing else in between, the denial answers differently:

```mermaid
sequenceDiagram
  participant P as Player
  participant G as choose()
  participant N as reactToScenario()
  P->>G: honest_account
  G->>N: HONEST_ACCOUNT, history []
  N-->>G: tier line
  G->>G: history = [HONEST_ACCOUNT]
  P->>G: deny_seal, with no reaction in between
  G->>N: LIE_ABOUT_SEAL, history [HONEST_ACCOUNT]
  N-->>G: said HONEST_ACCOUNT within 1 matches
  N-->>G: "You told me the truth a moment ago…"
```

## Body text cap

Every block of body text the player reads at once is capped at 200 words. That covers narration paragraphs, extra paragraphs, NPC interjections, and every NPC line. `validateStory` reports any block over the cap, and the test suite fails until it is split. The count uses `countWords`, the same counter the word-count report uses.

```mermaid
flowchart LR
  T[paragraph, extra, interjection or NPC line] --> C{over 200 words?}
  C -- yes --> P[validateStory reports it]
  C -- no --> OK[passes]
  P --> F[npm test fails until it is split]
```

## Chapter map

Reading order is set in `src/story/index.ts`. Each chapter ends by linking into the next one's first scene. The judgment in chapter eleven has five endings, and the Sisters’ Dao ending needs Mengjiao freed on the Sealing Night. Six side paths branch from the main line and rejoin it.

```mermaid
flowchart LR
  C1[1 The Stolen Seal] --> C2[2 The Crimson Abyss]
  C1 -. prepare at the market .-> SM[Side: The Herb Market] -. rejoins at the abyss path .-> C2
  C2 --> C3[3 The Ash Archive]
  C3 -. ask the attendant .-> SS[Side: The Sister’s Shrine] -. rejoins at the sutra door .-> C4
  C3 --> C4[4 The Sutra Door]
  C4 -. follow the lamp keeper .-> SL[Side: The Lantern Stair] -. rejoins at the sutra hall .-> C5
  C4 --> C5[5 The Blood Lotus Sutra]
  C5 --> C6[6 The Jade Eye]
  C6 -. train in the court .-> SC[Side: The Sparring Court] -. rejoins at the summons .-> C7
  C6 --> C7[7 The Tribunal of Bells]
  C7 -. slip behind the dais .-> SF[Side: The Bell Foundry] -. back to the bell rule .-> C7
  C7 --> C8[8 The Second Descent]
  C8 --> C9[9 The Mist Remembers Mengjiao]
  C9 -. take the ferry .-> SW[Side: The Ferry of Still Water] -. rejoins at the hall .-> C10
  C9 --> C10[10 The Sealing Night]
  C10 --> C11[11 The Judgment]
  C11 --> E1[Long Road Down]
  C11 --> E2[Law Remembers Mercy]
  C11 --> E3[Black Lotus Blooms]
  C11 --> E4[Keeper of Bars]
  C11 --> E5[Sisters Dao]
  C10 -. freed Mengjiao .-> C11
```

## Visual novel stage

The stage shows only the current beat. `currentBeat` starts at the player’s latest choice, so the previous scene is hidden. The backlog shows the full log.

```mermaid
flowchart TD
  L[game.log] --> B{any player entry?}
  B -- no --> F[show whole log]
  B -- yes --> S[slice from last player entry]
  S --> V[VN stage]
  L --> K[Backlog toggle]
  K --> A[full log]
```

## Saves

A save is the whole `GameState` in `localStorage`, written after every choice. Loading goes through `restoreGame`, which rejects a save that points at a scene the story does not have, and gives a save from before the reaction history an empty `history`, so older progress still loads.

## Scenarios

The Elder reacts to forty-four scenarios. Each has five tier lines. Some have memory overrides, and some of those match on what she has just heard (`said`). Scenes can also carry NPC interjections, which she speaks unprompted when her metrics, flags, or history cross a threshold. Her attitude-shift lines (eight of them) and mood-shift lines (seven, one per mood) sit in `src/engine/npc.ts`.

The table lists the original fifteen. The other twenty-nine are in `src/story/npc/elder-su.ts`. The newest come from the side paths: `REPORT_RUMOR`, `REPORT_SUPPLIES`, `HIDE_MARKET`, `REPORT_LAMP_PASSAGE`, `REPORT_SHRINE`, `SHOW_CASTING_LEDGER`, `REPORT_FERRY`, and `REPORT_BOUT`.

| Scenario | Triggered by | Memory override |
| --- | --- | --- |
| GIFT_HERB | Offering a spirit herb at the gate | — |
| HONEST_ACCOUNT | Telling the truth | `lied_about_seal`; or a third honest account (`said`) |
| LIE_ABOUT_SEAL | Denying the theft | the truth just before (`said` within 1) |
| THREATEN | Threatening the elder | a third threat (`said` min 2) |
| SHOW_MERCY | Sparing Gu Hanzhen | a threat just before (`said` within 1) |
| STEAL_SCROLL | Taking the Heavenly Scroll | — |
| REVEAL_DEMONIC_QI | Using the black lotus | — |
| ASK_FORBIDDEN_ART | Asking about the Blood Lotus Sutra | — |
| INSULT_SECT | Mocking the Law | a repeated insult (`said` min 1) |
| HONOR_ANCESTORS | Kneeling at the tablets | — |
| REFUSE_TASK | Refusing the mission | `stole_scroll` |
| COMPLETE_TASK | Returning the jade | `spared_gu` |
| EXPOSE_HER_SECRET | Revealing Su Mengjiao | — |
| SWEAR_OATH | Swearing a Dao oath | `demonic_glimpsed` |
| ACCEPT_PUNISHMENT | Accepting judgment | `exposed_elder` |
| CHALLENGE_BELL_RULE | Striking the tribunal bell | the casting ledger just shown (`said` within 1) |
| SHOW_CASTING_LEDGER | Showing the names from the casting book | `tore_casting_page` |
| REPORT_FERRY | Telling her what the ferryman charges | `paid_with_name`, `refused_ferry` |
| REPORT_SHRINE | Telling her about the shrine | `lit_shrine`, `took_comb` |
| REPORT_BOUT | Telling her about the sparring court | `used_mist`, `boasted` |

## Quality gates

- `npm test` checks that every decision has at least four choices, that every link resolves, that there are at least ten NPC scenarios, that each scenario produces five distinct replies, that every `said` condition names a real scenario, and that no body text runs over 200 words.
- `npm run word-count` reports player-facing words against the 1,000,000-word goal.
- CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, word count, and the production build.
