# Architecture

The game is split into a pure story engine and a thin React shell. The engine has no React or DOM dependencies, so every rule is covered by unit tests.

```mermaid
flowchart LR
  subgraph Story["src/story (content)"]
    C1[chapter-1..2.ts]
    C3[chapter-3..10.ts<br/>eight new chapters]
    C11[chapter-11.ts<br/>judgment and endings]
    NPC[npc/elder-su.ts]
  end
  subgraph Engine["src/engine (pure logic)"]
    G[game.ts<br/>createGame / choose / getChoices]
    N[npc.ts<br/>tierFor / reactToScenario]
    V[validate.ts<br/>validateStory]
    T[types.ts]
  end
  subgraph UI["src/components + app/"]
    GV[GameView.tsx<br/>VN stage + backlog]
    NP[NpcPanel.tsx<br/>portrait + mood]
    SP[StatsPanel.tsx]
  end
  C1 & C3 & C11 & NPC --> S[story/index.ts]
  S --> G
  G --> N
  N --> M[moodFor]
  V -. checked in tests .-> S
  G --> GV
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
    E->>N: pick line by trust tier, memory overrides first
    N-->>E: line, tier
    E->>E: apply scenario delta and remember flags
  end
  E->>E: apply choice.effects
  E->>E: enter next scene, add extras whose conditions hold
  E-->>UI: new GameState
  UI->>UI: render log, choices and NPC panel
```

## NPC attitude model

Trust chooses the tier. Memory flags can override the tier line when the NPC remembers something the player did earlier.

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

## Chapter map

Reading order is set in `src/story/index.ts`. Each chapter ends by linking into the next one's first scene. The judgment in chapter eleven has five endings, and the Sisters’ Dao ending needs Mengjiao freed on the Sealing Night.

```mermaid
flowchart LR
  C1[1 The Stolen Seal] --> C2[2 The Crimson Abyss]
  C2 --> C3[3 The Ash Archive]
  C3 --> C4[4 The Sutra Door]
  C4 --> C5[5 The Blood Lotus Sutra]
  C5 --> C6[6 The Jade Eye]
  C6 --> C7[7 The Tribunal of Bells]
  C7 --> C8[8 The Second Descent]
  C8 --> C9[9 The Mist Remembers Mengjiao]
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

## Scenarios

The Elder reacts to thirty-six scenarios. Each has five tier lines. Some have memory overrides. Scenes can also carry NPC interjections, which she speaks unprompted when her metrics or flags cross a threshold.

The table lists the original fifteen. The other twenty-one are in `src/story/npc/elder-su.ts`.

| Scenario | Triggered by | Memory override |
| --- | --- | --- |
| GIFT_HERB | Offering a spirit herb at the gate | — |
| HONEST_ACCOUNT | Telling the truth | `lied_about_seal` |
| LIE_ABOUT_SEAL | Denying the theft | — |
| THREATEN | Threatening the elder | — |
| SHOW_MERCY | Sparing Gu Hanzhen | — |
| STEAL_SCROLL | Taking the Heavenly Scroll | — |
| REVEAL_DEMONIC_QI | Using the black lotus | — |
| ASK_FORBIDDEN_ART | Asking about the Blood Lotus Sutra | — |
| INSULT_SECT | Mocking the Law | — |
| HONOR_ANCESTORS | Kneeling at the tablets | — |
| REFUSE_TASK | Refusing the mission | `stole_scroll` |
| COMPLETE_TASK | Returning the jade | `spared_gu` |
| EXPOSE_HER_SECRET | Revealing Su Mengjiao | — |
| SWEAR_OATH | Swearing a Dao oath | `demonic_glimpsed` |
| ACCEPT_PUNISHMENT | Accepting judgment | `exposed_elder` |

## Quality gates

- `npm test` checks that every decision has at least four choices, that every link resolves, that there are at least ten NPC scenarios, and that each scenario produces five distinct replies.
- `npm run word-count` reports player-facing words against the 1,000,000-word goal.
- CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, word count, and the production build.
