# Architecture

The game is split into a pure story engine and a thin React shell. The engine has no React or DOM dependencies, so every rule is covered by unit tests.

```mermaid
flowchart LR
  subgraph Story["src/story (content)"]
    C["chapter-1..11.ts<br/>eleven chapters"]
    SD["side-*.ts<br/>twelve side paths"]
    RD["roads/<br/>forty Book One side roads, 1,010 scenes"]
    R2["roads2/<br/>forty realm roads, 1,020 scenes"]
    FR["fortune/<br/>forty Fortune Roads, 1,020 scenes,<br/>each pricing its goods, wages and lease"]
    EC["economy/<br/>five reckonings, seven ending epilogues,<br/>remarks on the purse and the pack"]
    HE["hero/<br/>Elder’s asides, gate echoes, companion remarks"]
    RG["realm-gates.ts<br/>force asks a realm in Book One"]
    NPC["npc/elder-su*.ts<br/>98 scenarios, realm memories"]
  end
  subgraph Engine["src/engine (pure logic)"]
    G["game.ts<br/>createGame / choose / getChoices"]
    N["npc.ts<br/>tierFor / moodFor / respectTierFor / mannerOf / reactToScenario"]
    TN["tone.ts<br/>six tones and their names"]
    CU["cultivation.ts<br/>eight realms, gains, heart demon"]
    EO["economy.ts<br/>purse, pack, holdings, speed,<br/>payday, breakthrough pills"]
    HR["hero.ts<br/>the character, pronouns, starting numbers, standing"]
    V["validate.ts<br/>validateStory: 200-word scene cap, four choices, headings"]
    SV["save.ts<br/>restoreGame"]
    W["words.ts<br/>countWords"]
    T["types.ts"]
  end
  subgraph UI["src/components + app/"]
    CR["Creation.tsx<br/>who climbs the mountain"]
    HP["HeroPanel.tsx<br/>name, traits, standing"]
    GV["GameView.tsx<br/>VN stage, choices, backlog"]
    TL["ToneLegend.tsx<br/>what each colour means"]
    NP["NpcPanel.tsx<br/>portrait, mood, her read of you"]
    SP["StatsPanel.tsx<br/>stats and recent decisions"]
    CP["CultivationPanel.tsx<br/>realm, progress, ladder"]
    PP["PursePanel.tsx<br/>stones, speed by part, pack, holdings"]
  end
  C & SD & RD & R2 & FR & EC & HE & RG & NPC --> S["story/index.ts<br/>reading order"]
  S --> G
  G --> HR
  G --> N
  G --> TN
  G --> CU
  G --> EO
  EO --> CU
  V -. checked in tests .-> S
  V --> W
  G --> GV
  GV --> TL
  GV --> SV
  GV --> CR
  CR -->|Hero| G
  GV --> NP & SP & CP & HP & PP
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

## Talent, Dao and origin

`src/engine/path.ts` holds the rules; `hero.ts` holds the options. Every rule is a pure function of the hero, so the engine stays testable.

```mermaid
flowchart TD
  H["Hero: origin, talent, dao"] --> S["startFor: purse, items, start scene"]
  H --> SP["talentSpeed(realm)"]
  H --> PR["Dao passive: aidReachFor, toolFactor, holdingFactor, strainFactor, masteryGapFor, toneBonus, heartDemonKarmaFor, unfedFactor, karmaChange"]
  SP --> C["cultivation.ts"]
  PR --> C
  PR --> E["economy.ts, game.ts"]
  H --> ST["story: asides, echoes, 40 Dao Roads"]
  S --> A["audit: every start scene reaches the story"]
```

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

## The hero

Before the first scene the player makes a character: a name, and five parts that any NPC can see at a glance (papers, dress, looks, trade since the river village, gender). `createGame(story, hero)` stores it in `GameState.hero`, and it never changes. Nothing about the hero changes what the player can do. Cultivation does that. It changes how people answer.

```mermaid
flowchart LR
  CR["Creation screen<br/>name and five choices"] --> H["Hero<br/>name, gender, looks, background, attire, status"]
  H --> CG["createGame(story, hero)"]
  CG --> ST["startFor(hero)<br/>a scholar starts with insight,<br/>a noble in silk with a suspicious Elder"]
  CG --> P["personalise(text, hero)<br/>name for Wanderer, pronouns, honorifics"]
  CG --> SD["standingOf(hero, realm)<br/>papers + dress + two per realm"]
  H --> CO["conditions<br/>hero:attire=silk|armour, standing>=4"]
  CO --> X["extras, interjections, remarks,<br/>NPC memories, locked choices"]
```

Every line the engine logs goes through `personalise`, so a hero called Mo Lan is never called Wanderer, and `{they}`, `{them}`, `{their}`, `{honorific}` and `{person}` fill in from the gender. A save from before the hero existed loads with the default hero.

### Standing

Standing is how far the world bows, and the realm outweighs birth. The papers set a rank from 0 (outcast) to 3 (noble), silk or armour adds one, rags take one away, and **every realm adds two**. A Foundation Builder born an outcast already stands above a mortal prince.

```mermaid
flowchart LR
  A["papers<br/>outcast 0, commoner 1,<br/>gentry 2, noble 3"] --> S(("standing"))
  B["dress<br/>rags -1, silk +1, armour +1"] --> S
  R["realm<br/>+2 each"] --> S
  S --> T{{"despised, unremarked, regarded,<br/>honoured, revered"}}
  S --> G["locked choices:<br/>“let your name speak” needs 2R+1"]
```

### How the cast reads the hero

Four layers, so a hero meets a reaction wherever the story is, and none of them is the same line for two heroes.

```mermaid
flowchart TD
  H["hero"] --> E["echoes<br/>the gate and the Law Hall read dress, papers, looks, manner, trade"]
  H --> A["the Elder’s asides<br/>one remark every few decisions, cycling through status, attire, looks,<br/>background, gender and realm, once per attitude"]
  H --> M["companion remarks<br/>66 lines, each said once after the companion is met"]
  H --> RX["roads<br/>every keeper reads dress, birth, trade, face, manner,<br/>send-off and realm, at the scene that suits it"]
```

`story.asides` holds 22 values × 5 attitudes of her lines about the hero and 4 realm bands × 5 attitudes. `aside()` in `game.ts` says one after her reply to a scenario, after the fourth decision and at most once every three decisions, in a rotating order. The id of each (`aside:field:value:tier`) is kept in `remarked`, so it is never said twice, and a colder or warmer Elder has something new to say about the same silk.

## Realm roads

Ten more waysides open from the hubs of Books Two to Six, each with four roads of 25 scenes. Where the Book One roads are built from shared templates, each realm road writes its own twenty situations, its three hidden scenes and its closing paragraph (`specs-*.ts`). The builder adds the choices, tones, realm gates and reactions.

```mermaid
flowchart TD
  HUB["book hub<br/>gains one choice"] --> W["wayside<br/>asks a realm R, four roads"]
  W --> E["road entry<br/>reads dress, papers and realm"]
  E -->|"approach 1, 2"| OPEN["open to anyone"]
  E -->|"approach 3: needs R, beyond-you below it"| MID["strain below R"]
  E -->|"approach 4: locked below R"| DEEP["barred below R"]
  E -->|"realm below R: the lesser way"| HUM["humble: asks what a lesser traveller may do"]
  OPEN & MID & DEEP & HUM --> S1["scene 2: trade and face"]
  S1 --> RANK{"standing >= 2R+1?"}
  RANK -->|yes| PULL["let your name speak"]
  S1 --> S3["crisis: cultivator’s way needs R,<br/>reach needs R+1"]
  S3 --> RET["way back: reports to the Elder,<br/>memories by realm above or below the road"]
```

The realm bands the keepers use are *relative* to the road: far below (two or more realms short), below (one short), at it, above it. A keeper greets each differently at the entry, the first scene, the crisis and the way back. At the crisis a hero below the road’s realm pays for a push: cultivation, qi and the Elder’s respect, per realm short. Two realms above it, the same choice earns mastery.

### Wording that fits

A road names four things to approach, and shared wording says what to do with them. Before kinds, “Break your way into the orchard ledger” and “Slip a small piece of the weighing hut into your sleeve” were both possible. Now every focus is a place, a thing or a person (`kinds.ts`), and every template is tagged with the kinds it fits (`[p]`, `[t]`, `[w]`, or combinations). A road is only given wording that fits, and the obstacle and the ally in a label come from the pools of that label’s own tone, so nothing says “Trace a sick child on the step back to whoever put it there”.

```mermaid
flowchart LR
  F["focus: “the weighing hut”"] --> K["focusKind<br/>place"]
  P["template pool<br/>[p] Break your way into {focus}<br/>[t] Seize {focus}<br/>[w] Corner {focus}"] --> PF["pickFit(pool, seed, focus)"]
  K --> PF
  PF --> L["“Break your way into the weighing hut …”"]
```

`npx tsx scripts/audit-slots.ts` replays the old selection and counts the picks that did not fit: 686 of the Book One roads’ lines.

### Realm in Book One

The first eleven chapters used to ask nothing of the realm. From the third chapter on every forceful choice now asks the realm of its chapter (`realm-gates.ts`): Qi Condensation in Chapters 3 and 4, Foundation Establishment from 5 to 11. A player below it can try, and pays; a player two realms above it does the same thing with ease and learns from it. A player who forces every door can reach Book Two still at Qi Condensation, where a patient one is a Foundation Builder.

## Wealth, pack, holdings and speed

Cultivation is no longer the only thing the hero carries. The purse (spirit stones), the pack (items by id), the holdings (assets by id) and the cultivation speed are all part of `GameState`, all saved, and all readable by the story as conditions (`wealth`, `item`, `asset`, `holdings`, `speed`, `unfed`) and writable as effects (`addWealth`, `giveItem`, `takeItem`, `grantAsset`, `loseAsset`). `src/engine/economy.ts` holds the rules, and `Story.items`, `Story.assets` and `Story.leavesSect` hold the data.

```mermaid
flowchart TD
  C["choose(choice)"] --> R["Elder and companion reply"]
  R --> SP["speed = cultivationSpeed(state)<br/>plain 100 + trade + tools + holdings − Unfed"]
  SP --> FX["effects: stones, pack, holdings,<br/>cultivation points × speed"]
  FX --> G["tone gain × speed, then strain and mastery"]
  G --> AID{"within 85% of the next realm<br/>and carrying its pill?"}
  AID -->|yes| BR["eat the pill, break through"]
  AID -->|no| PD
  BR --> PD{"every 8th decision?"}
  PD -->|yes| PAY["payday: stipend or living cost,<br/>holdings pay and cost"]
  PD -->|no| NS
  PAY --> NS["say so if the speed changed"]
  NS --> SETTLE["settle: store speed and Unfed"]
```

### The numbers

| Part | Rule |
| --- | --- |
| Starting purse | papers (outcast 3, commoner 8, gentry 24, noble 60) plus trade (trader’s runner +12, herbalist and levy deserter +4, paddy hand +3, copyist +2, orphan 0) |
| Payday | every 8 decisions |
| Stipend | on the mountain, until the hero has seen `departure_dawn`: 1 + the realm, per payday |
| Cost of living | after that: 0, 0, 1, 1, 2, 2, 3, 3 stones by realm. A hero whose purse is below it is **Unfed** |
| Speed | 100 + trade aptitude (copyist +5, orphan +3, herbalist +2) + each carried tool, relic, scripture, material or token that has reached its realm + each holding that has reached its realm − 20 if Unfed. Held between 50 and 250. It scales every cultivation point a choice earns |
| Breakthrough pill | eaten when the hero’s points reach 85% of the next realm, if they carry a pill made for that realm and no heart demon holds them back |
| Holding | pays its income and costs its upkeep on each payday. If the purse cannot meet the upkeep, the holding is taken back |
| Price tag | a choice that moves stones shows “Costs N” or “Earns N” before it is picked |

Nothing is a lock. A hero with no purse, no pack and no holding cultivates at the plain rate, or at four fifths of it once they are Unfed. What the economy buys is speed, and a pill is a door held open for a hero who was already reaching.

### What the validator asks

`validateEconomy` (in `validate.ts`) fails the build when a choice spends without requiring the money, hands over an item it does not require the hero to carry, takes on a holding it does not require the hero to lack (or gives one up it does not require them to hold), names an item or an asset that does not exist, moves more than 400 stones, or defines a holding that costs more than it pays. A test also fails if any choice that earns stones can be repeated.

## Fortune roads

Ten more waysides, one at each of ten places the main line stops: the foot of the gate stair, the almonry below the Law Hall, the merit exchange by the sutra door, the night market on the bell steps, the departure sale on the last night, the clerks’ bazaar under the Assembly dome, the Tidewall quays, the caravan ground at the edge of the grass, the salvage yards on the glass shore, and the fair at the foot of the mountain. Each has four roads of 25 scenes, and every road writes its own twenty situations, three hidden scenes and closing paragraph (`fortune/specs-*.ts`).

A road is priced by its realm *R* (1 to 6) and its place in the wayside: a base price of 6 + 4*R* + slot, a wage of 3 + 2*R*, and a lease at four times the base. Each road sells one good (a pill, a tool, a relic, a scripture, a material or a token) and leases one holding. Exactly one road in each wayside sells a pill for the realm after the road’s.

```mermaid
flowchart TD
  E["entry<br/>reads dress, papers, realm"] --> A0["approach 1: trade"]
  E --> A1["approach 2: labour"]
  E --> A2["approach 3: barter, needs R"]
  E --> A3["approach 4: invest, barred below R"]
  A0 -->|"scene 2"| BUY["buy the goods, or find the flaw (Insight 14) and pay less<br/>a pill is sold only to realm R or above"]
  A1 -->|"scene 2"| WORK["a day’s wage, once"]
  A1 -->|"scene 4"| RISKY["the job a mortal cannot do: three days’ pay, needs R"]
  A1 -->|"scene 5"| KIND["take the goods as wages"]
  A2 -->|"scene 3"| BRIBE["pay to look away: +2 Insight"]
  A2 -->|"scene 5, Insight 12"| HID["hidden route: the goods, free"]
  A3 -->|"scene 2"| SHARE["buy a share of the books"]
  A3 -->|"scene 5"| LEASE["the lease: full price, or cut by a share;<br/>asks realm R, never twice"]
  BUY & WORK & RISKY & KIND & BRIBE & HID & SHARE & LEASE --> RET["way back: report to the Elder,<br/>sell the goods or the lease for 60%"]
```

At the crisis of every approach the hero can also settle a debt for half the base price, show the goods they carry, draw on their cultivation (needs *R*) or reach past it (needs *R*+1, and costs cultivation, qi and the Elder’s respect below that). The Elder’s report reads the purse, the pack, the lease, the lies and the realm.

### One walk, no repeats

The roads are built from shared wording, and a walk of one (an entry, five scenes of an approach or three of the hidden route, and the way back) must not read the same menu line or paragraph twice. Each pool a builder draws from holds at least eight lines for each kind of thing a road can name, and the picker steps by *stage*, so no two scenes of a walk share a line. `tests/fortune.test.ts` walks every approach and hidden route of all 120 roads and fails on a repeat. On `main` the Book One roads repeated 858 menu lines and 144 paragraphs, and the realm roads 676 menu lines.

## Accounts on the road

Five short scenes (`economy/reckonings.ts`) sit in front of the river steps and the gates of Books Three to Six, and every way into those scenes now comes through them. The company takes stock. The Elder reads the hero’s realm against what the road expects (two, three, four, five and six: a diligent hero stands there at that point), and says so if they are behind, level or ahead. She notes if the hero is Unfed, or quick. The hero can go through the accounts (+1 Insight), sit the night (cultivation scaled by speed), buy two goods for the road, put ten stones in the common box, or say nothing. Each of the seven endings also closes on the purse and the holdings, in one line.

Three wards in Book Six read an item as a realm: the Returner’s Seven-Star Charm lets a Nascent Soul across the Ash Bridge, the Retired Office Seal lets one through the Archive’s ring, and the First-Plate Shard lets a Spirit Severing cultivator read the abyss doors. Each is used up by the choice that spends it, and each is bought on a Fortune Road.

## Chapter and side path map

Reading order is set in `src/story/index.ts`. Chapters are the main line. Side paths branch from a scene and rejoin it, and the Elder reacts to what they report. The ten wayside groups of Book One side roads follow their chapters, the ten groups of realm roads follow the hubs of Books Two to Six, and the ten groups of Fortune Roads follow the scenes they open from. All three, and the five reckonings, are omitted from the map below.

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
- `tests/economy.test.ts` and `tests/fortune.test.ts` check the purse, pack, holdings, speed, payday and pills; that no choice can earn without end; that all 40 Fortune Roads are walkable by a funded hero of the road’s realm, in every approach and the hidden route, never in debt; that every wayside sells exactly one pill, for the realm after the road’s; that no walk of any of the 120 roads repeats a menu line or a paragraph; that the reckonings sit in front of the five gates; and that goods stand in for a realm at three wards.
- `npm run word-count` reports player-facing words against the 1,000,000-word goal, with the largest scene body against its 200-word cap.
- CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, word count, and the production build.
