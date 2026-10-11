# Architecture

The game is split into a pure story engine and a thin React shell. The engine has no React or DOM dependencies, so every rule is covered by unit tests.

```mermaid
flowchart LR
  subgraph Story["src/story (content)"]
    C["chapter-1..11.ts<br/>eleven chapters"]
    SD["side-*.ts<br/>twelve side paths"]
    RD["roads/<br/>forty side roads, 1,010 scenes"]
    NPC["npc/elder-su*.ts<br/>98 scenarios, realm memories"]
  end
  subgraph Engine["src/engine (pure logic)"]
    G["game.ts<br/>createGame / choose / getChoices"]
    N["npc.ts<br/>tierFor / moodFor / respectTierFor / mannerOf / reactToScenario"]
    TN["tone.ts<br/>six tones and their names"]
    CU["cultivation.ts<br/>eight realms, gains, heart demon"]
    V["validate.ts<br/>validateStory: 200-word scene cap, four choices, headings"]
    SV["save.ts<br/>restoreGame"]
    W["words.ts<br/>countWords"]
    T["types.ts"]
  end
  subgraph UI["src/components + app/"]
    GV["GameView.tsx<br/>VN stage, choices, backlog"]
    TL["ToneLegend.tsx<br/>what each colour means"]
    NP["NpcPanel.tsx<br/>portrait, mood, her read of you"]
    SP["StatsPanel.tsx<br/>stats and recent decisions"]
    CP["CultivationPanel.tsx<br/>realm, progress, ladder"]
  end
  C & SD & RD & NPC --> S["story/index.ts<br/>reading order"]
  S --> G
  G --> N
  G --> TN
  G --> CU
  V -. checked in tests .-> S
  V --> W
  G --> GV
  GV --> TL
  GV --> SV
  GV --> NP & SP & CP
  GV -->|localStorage save| Storage[("Browser storage")]
```

## Turn flow

Every choice goes through the same path. A decision logs the player’s line, records its tone, earns cultivation, and lets the Elder react before the next scene is entered, so her line is the last thing the player reads before the new text. There is no other kind of step: a scene that continues from another is reached by a choice like any other.

```mermaid
sequenceDiagram
  participant P as Player
  participant UI as GameView
  participant E as choose() in game.ts
  participant N as reactToScenario()
  P->>UI: clicks an option
  UI->>E: choose(story, state, choiceId)
  E->>E: check choice.requires (throws if locked)
  E->>E: log the player's line and record its tone
  opt choice.npcScenario set
    E->>N: pick line from memory, then trust tier
    N-->>E: line, tier
    E->>E: apply scenario delta, remember flags, append to history
  end
  E->>E: apply choice.effects (stats, flags, addCultivation)
  E->>E: add the tone's cultivation points, break through one realm if earned
  E->>E: say one attitude comment, if any: realm, tier, mood, respect, then manner
  E->>E: enter next scene, add extras and interjections whose conditions hold
  E-->>UI: new GameState
  UI->>UI: render log, choices and NPC panel
```

## Choice tones

Every choice has one of six tones. The tone sets the colour of the option, its tag, and its dot in the player’s recent decisions. The Elder keeps count of the tones too, so a pattern of decisions changes what she says.

```mermaid
flowchart LR
  D["every choice<br/>one of six tones"] --> T["truth<br/>plain speech, confession, sincere pledges"]
  D --> M["mercy<br/>sparing, pleading, kneeling, giving"]
  D --> I["inquiry<br/>asking, reading, studying, searching"]
  D --> DE["deceit<br/>lies, evasions, sneaking, pocketing"]
  D --> F["force<br/>threats, challenges, insults, forbidden power"]
  D --> Q["quiet<br/>waiting, resting, travelling, moving on"]
```

## Scene cap and headings

There are no page turns, Continue buttons or passages. Each scene is one screen: its heading, its narration, any extra paragraphs and interjections whose conditions hold, and its choices. The body text of every scene, counting every extra and every interjection as if it shows, is capped at 200 words. A long stretch of story is written as several scenes, each one ending in choices that lead on. Every scene has a heading of its own.

```mermaid
flowchart TD
  S["a scene: heading, narration,<br/>extras and interjections"] --> C{over 200 words<br/>of body text?}
  C -- no --> ONE["one screen, with its choices"]
  C -- yes --> SPLIT["write it as two scenes,<br/>the first ending in choices that lead on"]
  SPLIT --> A["scene A: its heading, its narration, its choices"]
  SPLIT --> B["scene B: its own heading, the next beat, its choices"]
  A -- "a choice carries the reader on" --> B
  B --> V["validateStory: 200-word cap,<br/>four or more choices, a heading"]
```

## Side paths

A side path opens from one choice in a main-line scene. That choice sets a `visited` flag and may carry an NPC reaction. Inside, four approaches each run four scenes, and a hidden route from one approach runs two more. Every path ends in a return scene, whose first choice reports to the Elder and whose other choices rejoin the main line. The return scene can also say something unprompted when a flag the path set is present.

```mermaid
flowchart TD
  M["main-line scene<br/>one extra choice, sets its visited flag"] --> E["entry scene<br/>four approaches"]
  E --> A["approach A<br/>four scenes"]
  E --> B["approach B<br/>four scenes"]
  E --> C["approach C<br/>four scenes"]
  E --> D["approach D<br/>four scenes"]
  C -. a fourth choice .-> H["hidden route<br/>two scenes"]
  A --> R["return scene<br/>first choice reports to the Elder"]
  B --> R
  C --> R
  D --> R
  H --> R
  R --> J["rejoins the main line"]
```

## Cultivation

Every player begins as a Mortal. Each decision earns points by its tone, and an `addCultivation` effect adds more at key moments (the cultivator’s way at a road’s crisis, resting at a road’s end, the hidden route). When the points reach the next realm’s threshold the player breaks through, one realm per decision at most. The breakthrough is its own log entry, shown in gold, and the Elder remarks on it.

```mermaid
stateDiagram-v2
  [*] --> Mortal
  Mortal --> QiCondensation: 15 points
  QiCondensation --> FoundationEstablishment: 120 points
  FoundationEstablishment --> CoreFormation: 400 points
  CoreFormation --> NascentSoul: 850 points, karma at least -30
  NascentSoul --> SpiritSevering: 1300 points, karma at least -30
  SpiritSevering --> DaoSeeking: 1850 points, karma at least -30
  DaoSeeking --> Ascendant: 2350 points, karma at least -30
```

From Core Formation upward a heart demon blocks the next realm while karma is below −30. Points keep gathering, and the breakthrough happens on the first decision after karma recovers.

```mermaid
flowchart TD
  C[player picks a choice] --> E[apply effects, including addCultivation]
  E --> G[add TONE_GAIN for the choice's tone]
  G --> P{points reach the next threshold?}
  P -- no --> D[stay in this realm]
  P -- yes --> H{next realm is Core Formation or above,<br/>and karma below -30?}
  H -- yes --> HD[heart demon: points keep gathering, realm holds]
  H -- no --> B[realm + 1, log the breakthrough]
  B --> EL[the Elder names the new realm]
```

### Why the realm matters: gates, strain, mastery, meditation

The ladder is paced across six books, so a realm is something the story asks for, not a number that saturates in Book One. A diligent player reaches Foundation Establishment by the end of Book I, Core Formation in Book II, Nascent Soul by the end of Book III, Spirit Severing in Book IV and Dao Seeking in Book V. Ascendant is for completionists. `scripts/simulate.ts` (`npm run simulate -- 40 diligent`) random-walks the story under four policies and reports the realm at each book gate and the ending reached.

Three mechanics make the realm bite.

- **Hard gates.** A choice can require `realm>=N`. The requirement stays visible, locked, and tells the player which realm it wants. Book VI's bridge, archive, abyss and final choice all have gated routes.
- **Strain.** A choice can carry `needs:N` (a realm index). Take it below that realm and the attempt costs 10 cultivation per missing realm (never below the current realm's threshold), 12 qi, 3 of the Elder's respect, and logs a strain line. The choice shows a "beyond you" tag in advance. Take it far above the ask (two realms or more) and it grants mastery: +3 cultivation.
- **Meditation.** Every hub has a one-time `still_<hub>` night of stillness that gives a lump of cultivation, so a player who takes their time can be ready for the next gate.

Walking back into a scene already seen gives no tone gain, so shuttling between two hubs cannot farm cultivation.

```mermaid
flowchart LR
  C[choice with needs:N] --> R{player realm >= N?}
  R -- yes --> S{realm >= N + 2?}
  S -- yes --> M[mastery: +3 cultivation]
  S -- no --> OK[no cost]
  R -- no --> X[strain: -10 cultivation per missing realm, -12 qi, -3 respect, strain line in the log]
```

### The endings

Book VI ends at `lastseal_choice`. Each of seven endings has its own gate, and the cheapest is always open, so the story never soft-locks.

```mermaid
flowchart TD
  L[lastseal_choice: Who is listening?]
  L -->|9 cards and Dao Seeking| N[The Nine Verbs]
  L -->|Mengjiao bond and Spirit Severing| LI[The Listener]
  L -->|Ascendant| A[The Ascendant]
  L -->|Dao Seeking| W[The Warden of the Mist]
  L -->|below Dao Seeking, forcing it| SP[The Price of the Hand]
  L -->|karma below -30 and Core Formation| H[The Hollow Seat]
  L -->|always open| LE[The Closed Ledger]
  L -->|step back| HUB[hub_b6]
```

| Tone | Points per decision |
| --- | --- |
| quiet, inquiry, truth, mercy | 2 |
| force, deceit | 1 |

The realm also gates content and reactions. A `realm` condition reads it for choices, extras, interjections and NPC memory lines. The Elder remarks on a mortal at the Law Hall and the abyss, and on a cultivator at the archive, the tribunal and the judgment. Her memory lines for twelve scenarios (a confession, a lie, a threat and so on) change once the player has reached Foundation Establishment, though a flag the player set still wins.

## Side roads

Ten waysides branch off the main line, one from the first scene of each chapter from the gate to the sealing night. That scene gains one choice, and the wayside returns to it. Each wayside offers four roads, and each road is 25 scenes built by `buildRoad` from a short spec (place, keeper, relic, omen, secret, four things to approach) and the shared wording in `lexicon.ts`. 40 roads × 25 scenes plus 10 waysides is 1,010 scenes.

```mermaid
flowchart TD
  M["main-line scene<br/>one extra choice"] --> W["wayside<br/>four roads, closed once walked"]
  W --> E["road entry<br/>four approaches, four different tones"]
  E --> A0["approach 1<br/>five scenes"]
  E --> A1["approach 2<br/>five scenes"]
  E --> A2["approach 3<br/>five scenes"]
  E --> A3["approach 4<br/>five scenes"]
  A2 -. "Insight 12" .-> H["hidden route<br/>three scenes, reveals the secret"]
  A0 --> R["return scene<br/>report, say nothing, rest, keep the relic"]
  A1 --> R
  A2 --> R
  A3 --> R
  H --> R
  R --> W
  W -->|leave| M
```

Each approach scene has four choices in four different tones. The fourth scene of each approach, the crisis, also offers the cultivator’s way, which needs a realm that rises with the wayside (Qi Condensation for the first three, Foundation Establishment for the next four, Core Formation for the last three).

```mermaid
sequenceDiagram
  participant P as Player
  participant R as road return scene
  participant E as choose()
  participant N as the Elder
  P->>R: Report the road to the Elder
  R->>E: choose("report")
  E->>N: REPORT_ROAD_X, memory first, then trust tier
  N-->>E: found secret, kept relic, run of lies, many roads, cultivator, or tier line
  E->>E: set road_done_X, return to the wayside
  E-->>P: the wayside, where she remarks on how many roads you have walked
```

The `roads` condition counts the `road_done_*` flags, so the Elder can speak to the number of roads walked. Because every interjection counts toward a scene’s 200-word cap whether or not it shows, those remarks live on the waysides, one each, instead of on the return scenes.

## Chapter and side path map

Reading order is set in `src/story/index.ts`. Chapters are the main line. Side paths branch from a scene and rejoin it, and the Elder reacts to what they report. The ten wayside groups of side roads follow their chapters and are omitted from the map below.

```mermaid
flowchart LR
  C1[1 The Stolen Seal] --> C2[2 The Crimson Abyss]
  C1 -. the Elder's mission .-> VL[Side: The Foothill Village] -. back to the abyss .-> C2
  C1 -. prepare at the market .-> HM[Side: The Herb Market]
  HM -. rejoins at the abyss path .-> C2
  HM -. follow the clatter .-> PV[Side: The Pavilion of Stone Wagers] -. back to the market .-> HM
  HM -. follow the bitter smell .-> HL[Side: The Healer’s Hall] -. back to the market .-> HM
  C2 -. climb the eastern peak .-> EP[Side: The Eastern Peak] -. back to the Law Hall .-> C3
  C2 --> C3[3 The Ash Archive]
  C3 -. ask the attendant .-> SS[Side: The Sister’s Shrine] -. rejoins at the sutra door .-> C4
  C3 -. follow the pale vein .-> QR[Side: The Quarry Under the Archive] -. back to the reading room .-> C3
  C3 --> C4[4 The Sutra Door]
  C4 -. follow the lamp keeper .-> SL[Side: The Lantern Stair] -. rejoins at the sutra hall .-> C5
  C4 --> C5[5 The Blood Lotus Sutra]
  C5 --> C6[6 The Jade Eye]
  C6 -. train in the court .-> SC[Side: The Sparring Court] -. rejoins at the summons .-> C7
  C6 -. cross the Cloud Gap .-> CG[Side: The Cloud Gap Bridge] -. back to the tribunal .-> C7
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

## NPC attitude model

Trust chooses the tier. Memory flags can override the tier line when the NPC remembers something the player did earlier, and the reaction history and recent tones can override it when she has just heard something or the player has been choosing in a pattern (see below).

```mermaid
stateDiagram-v2
  [*] --> Neutral
  Neutral --> Warm: trust >= 15
  Neutral --> Wary: trust < -10
  Wary --> Hostile: trust <= -40
  Wary --> Neutral: trust >= -10
  Warm --> Devoted: trust >= 50
  Warm --> Neutral: trust < 15
  Devoted --> Warm: trust < 50
  Hostile --> Wary: trust > -40
```

Her face, the mood shown in her portrait, is trust unless fear or suspicion takes over. Fear of 50 or more makes her afraid, and suspicion of 65 or more makes her suspicious. Those two override the tier.

```mermaid
stateDiagram-v2
  [*] --> Tier
  Tier --> Afraid: fear >= 50
  Tier --> Suspicious: suspicion >= 65, fear below 50
  Afraid --> Tier: fear < 50
  Suspicious --> Tier: suspicion < 65
  Suspicious --> Afraid: fear >= 50
```

## Respect bands

Respect is earned by what she sees the player do, and some choices gate on it. Its four bands are contempt, unregarded, weighed and respected. Each band has a line, and she says it when respect moves into a new band.

```mermaid
stateDiagram-v2
  [*] --> Unregarded
  Unregarded --> Weighed: respect >= 25
  Unregarded --> Contempt: respect <= -25
  Weighed --> Respected: respect >= 50
  Weighed --> Unregarded: respect < 25
  Respected --> Weighed: respect < 50
  Contempt --> Unregarded: respect > -25
```

## Attitude shifts, manner and pattern interjections

Only one attitude comment is said per choice, in a fixed order. When a choice carries the player into a higher realm, that comes first. Otherwise, when a choice moves her to another tier, that comes next. When only her face changes, that comes next. If her respect moves into a new band, she says so. When the player’s recent decisions settle on one tone, she names that manner. After the comment, interjections whose conditions combine flags, her reaction history and the tones of the player’s decisions can speak as the next scene opens.

```mermaid
flowchart TD
  P[player picks a choice] --> R[reactToScenario: memory line or tier line]
  R --> D[apply scenario delta and effects]
  D --> CG[add cultivation, maybe break through]
  CG --> RM{realm rose?}
  RM -- yes --> RML[realmShiftLine: she names the new realm]
  RM -- no --> T{tier changed?}
  T -- yes --> TL[tierShiftLine: from, to]
  T -- no --> M{mood changed?}
  M -- yes --> ML[moodShiftLine: her face changed]
  M -- no --> RS{respect band changed?}
  RS -- yes --> RL[respectShiftLine: she says how far she weighs you]
  RS -- no --> K{manner changed?}
  K -- yes --> KL[mannerShiftLine: she names the pattern]
  K -- no --> E[enter next scene]
  RML --> E
  TL --> E
  ML --> E
  RL --> E
  KL --> E
  E --> I{interjections whose<br/>flags, history and tones all hold}
  I --> SAY[she speaks unprompted]
```

A manner is the tone that makes up at least three of the player’s last four decisions. She names it once, when it first forms, so a steady pattern is not repeated on every choice.

```mermaid
stateDiagram-v2
  [*] --> NoManner
  NoManner --> Manner: one tone is 3 of the last 4 decisions
  Manner --> NoManner: no tone is 3 of the last 4
  Manner --> OtherManner: another tone becomes 3 of the last 4
  OtherManner --> NoManner: no tone is 3 of the last 4
  OtherManner --> Manner: one tone is 3 of the last 4
```

## Reaction memory

Every NPC scenario she reacts to is appended to `history`, in order. A `said` condition reads that list: `min` counts how many times a scenario appears, and `within` looks only at her last N reactions. `within: 1` is “what she just heard”. A `tone` condition reads the same way over the tones of the player’s decisions, so `min: 3, within: 4` is “three of the last four decisions were deceit”. A `flag` condition reads what the player has set, and an `npc` condition reads her metrics, so respect can shape a memory line too. Memory overrides are checked in order, so flag memories written by earlier choices still win over the newer history and tone lines.

Every one of the 98 scenarios has at least one memory override, so her reply to the same choice can differ with the path the player has taken.

```mermaid
flowchart LR
  A[choose: npcScenario] --> H[history and tones before this reaction]
  H --> RM{memory lines, first match}
  RM -- a flag, said, tone or npc condition holds --> ML[memory line]
  RM -- none holds --> TL[tier line]
  ML --> REC[append scenario id to history]
  TL --> REC
  REC --> LATER[later said, tone and npc conditions read it]
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

## Length caps

Every scene body is capped at 200 words, and so is every NPC line: each tier line, memory line, interjection and attitude comment. `validateStory` reports any scene or line over its cap, and the test suite fails until it is split or shortened. The count uses `countWords`, the same counter the word-count report uses.

```mermaid
flowchart LR
  T[scene body or NPC line] --> C{over 200 words?}
  C -- yes --> P[validateStory reports it]
  C -- no --> OK[passes]
  P --> F[npm test fails until it is split or shortened]
```

## Visual novel stage

The stage shows only the current beat. `currentBeat` starts at the player’s latest choice, so the previous scene is hidden. The new scene’s heading and text follow the Elder’s reply. The backlog shows the full log.

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

A save is the whole `GameState`, including `cultivation` and `realm`, in `localStorage`, written after every choice. Loading goes through `restoreGame`, which rejects a save that points at a scene the story does not have, and gives a save from before the reaction history or the decision tones an empty `history` or `tones`, and one from before cultivation zero points as a Mortal, so older progress still loads. Scene ids of the earlier page turns are still scenes, so older saves that stood on one still load.

## Scenarios

The Elder reacts to ninety-eight scenarios: the fifty-eight written by hand and forty road reports generated from the road specs. Each has five tier lines and at least one memory override. Some of them match on what she has just heard (`said`), on the flags the player has set, on the tones of recent decisions (`tone`), or on her respect (`npc`). Scenes can also carry NPC interjections, which she speaks unprompted when her metrics, flags, history or tones cross a threshold. Her attitude-shift lines (eight of them), respect-shift lines (four), mood-shift lines (seven, one per mood), manner lines (six, one per tone) and realm-shift lines (seven, one per realm above Mortal) sit in `src/engine/npc.ts`. Her realm-aware memories and scene remarks sit in `src/story/npc/elder-su-realm.ts`.

The scenarios are in `src/story/npc/elder-su.ts`, the reactions added for choices she used to let pass are in `src/story/npc/elder-su-reactions.ts`, and the reactions to the five newest side paths are in `src/story/npc/elder-su-side-paths.ts`. The table lists the scenarios whose memory overrides matter most to a playthrough, and the source has the rest.

| Scenario | Triggered by | Memory override |
| --- | --- | --- |
| GIFT_HERB | Offering a spirit herb at the gate | a run of deceit (`tone` deceit, 2 of the last 3) |
| HONEST_ACCOUNT | Telling the truth | `lied_about_seal`; a third honest account (`said`); a blade in the voice (`tone` force, 2 of the last 3) |
| LIE_ABOUT_SEAL | Denying the theft | the truth just before (`said` within 1); a run of lies (`tone` deceit, 3 of the last 4) |
| THREATEN | Threatening the elder | a third threat (`said` min 2); silence and then a threat (`tone` quiet, 3 of the last 4) |
| SHOW_MERCY | Sparing Gu Hanzhen | a threat just before (`said` within 1); a run of mercy (`tone` mercy, 3 of the last 4) |
| ASK_FORBIDDEN_ART | Asking about the Blood Lotus Sutra | a run of questions (`tone` inquiry, 3 of the last 4) |
| STEAL_SCROLL | Taking the Heavenly Scroll | a theft after kneeling at the tablets (`flag` honored_ancestors) |
| HONOR_ANCESTORS | Kneeling at the tablets | a scroll stolen from the same shelf (`flag` stole_scroll) |
| REFUSE_TASK | Refusing the mission | `stole_scroll` |
| COMPLETE_TASK | Returning the jade | `spared_gu` |
| EXPOSE_HER_SECRET | Revealing Su Mengjiao | the painted name asked about (`said` ASK_TABLET within 5) |
| SWEAR_OATH | Swearing a Dao oath | `demonic_glimpsed` |
| ACCEPT_PUNISHMENT | Accepting judgment | `exposed_elder` |
| CHALLENGE_BELL_RULE | Striking the tribunal bell | the casting ledger just shown (`said` within 1) |
| SHOW_CASTING_LEDGER | Showing the names from the casting book | `tore_casting_page` |
| REPORT_FERRY | Telling her what the ferryman charges | `paid_with_name`, `refused_ferry` |
| REPORT_SHRINE | Telling her about the shrine | `lit_shrine`, `took_comb` |
| REPORT_BOUT | Telling her about the sparring court | `used_mist`, `boasted` |
| REQUEST_NIGHT | Asking for a night before the abyss | a run of waiting (`tone` quiet, 3 of the last 4) |
| OFFER_TO_FETCH_GU | Offering to find Gu alone | `spared_gu` |
| PLEAD_FOR_PARDON | Pleading at the dais | `spared_gu`; a run of lies (`tone` deceit, 2 of the last 4) |
| ACCEPT_EXILE | Accepting exile in silence | a run of force (`tone` force, 2 of the last 4) |
| CLAIM_SEAT | Claiming her seat | `exposed_elder` |
| SEIZE_JADE | Seizing the Sealing Jade | `lied_about_seal` |
| REPORT_WAGER | Reporting the stone tables | `paid_bo_lan`, `broke_tang_table`, `cheated_at_tiles` with `confessed_loaded_tile`, a run of force, a run of mercy |
| REQUEST_VILLAGE | Asking leave to visit the foothill village | a request for a night just before (`said` REQUEST_NIGHT within 3) |
| REPORT_VILLAGE | Reporting the levy from the village | `read_gu_letter`; the second list brought back (`found_hidden_list`, `took_hidden_list`) |
| REPORT_QUARRY | Reporting the cut in the quarry | the second shard found (`quarry_found_heart`); a miner rescued (`quarry_rescued_miner`) |
| REPORT_HEALER | Reporting the calm dust | the Elder’s dose note taken (`took_elders_note`); a page torn from the ledger (`took_dust_page`) |
| ASK_HERMIT | Climbing to the eastern peak | a run of lies (`tone` deceit, 3 of the last 4) |
| REPORT_HERMIT | Reporting the old master’s bargain | the Su sisters told apart (`heard_lu_ming_sisters`); the first page taken (`took_first_page`) |
| REPORT_BRIDGE | Reporting the Cloud Gap bridge | a boy helped and a disciple caught (`bridge_helped_boy`, `bridge_caught_fall`); a token kept (`carries_lu_ping_token`) |

## Quality gates

- `npm test` checks that every decision has at least four choices and a tone, that every scene has a heading, that every link resolves, that there are at least forty NPC scenarios, that each scenario produces one reply per trust tier it can reach, that every `said` and `tone` condition names something real, that no scene body or NPC line runs over its cap, that the respect bands and their lines are distinct, that the side paths open and rejoin, that every road has 25 scenes within the word cap, that the cultivator’s way and hidden routes are gated, that realms, breakthroughs and the heart demon behave, that old saves load as a Mortal, that the strain, mastery and no-farming rules hold, that every Book VI ending opens at exactly the realm, cards, bond and karma it names, that no two arcs share a scene id, that the continuity audit finds nothing (no flag set but never read, no condition nothing can satisfy, no loop with no way out), and that the colour legend defines all six tones in both themes.
- `npm run check` runs the validator and the audit; `npm run simulate` random-walks the story to find soft-locks and to pace the realm gates.
- `npm run word-count` reports player-facing words against the 1,000,000-word goal, with the largest scene body against its 200-word cap.
- CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, word count, and the production build.
