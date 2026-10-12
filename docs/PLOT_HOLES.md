# Plot-hole and continuity ledger

Seven passes, three asked to fix more than 1,000 and the fourth asked again. This ledger says exactly what was counted, what each number means, and what was looked for and not found.

| Pass | Fixed | Of what kind |
| --- | ---: | --- |
| First pass (last section) | 884 | 808 dangling flags, dead conditions and time loops, plus 76 hand-found contradictions |
| Second pass | 1,153 | lines of text, labels and titles the player is shown: 686 wording mismatches in generated roads, 426 typographic, 41 continuity and repetition |
| Third pass | 1,743 | 1,678 menu lines and paragraphs a player reads twice in one walk of a road, 64 contradictions of the setting, the hero’s realm, the hero’s dress and the hero’s purse, 1 spacing slip |
| Fourth pass | 63 | 63 choice labels that named a different price from the one the purse paid. It is short of the 1,000 asked for: see below |

| Fifth pass | 42 | 31 choices whose tone contradicted the act, 9 lines of broken wording, 2 remarks that could never be said |
| Sixth pass | 283 | 11 origin door scenes the Elder never played, 10 sentences read in up to 200 roads, 254 trait lines shared by 200 roads, and 8 smaller slips |
| **Seventh pass (this branch)** | **72** | 2 hero-address lines and 1 simile that assumed a gender, 11 wet words on the Glass Sea, 6 places against canon, 28 generated-text slips, 8 plural places, 4 early spoilers, 10 name clashes, 2 wayside origins |

## Seventh pass (this branch): what was looked for, found and fixed

This branch added 1,411 scenes, so the pass went after the holes that new content could open and the ones gender, root and Dao could expose in old content. Counted only what a script or a test could prove.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| A line that addressed the hero as “ma’am” whatever gender the hero gave | 2 | scanning every quoted address (sir, madam, ma’am, miss, boy, girl) near “you” | `books/b4/voice.ts`, `books/b5/wreck.ts` (now `{honorific}`) |
| “like a man leaving a door unlatched”, said of every hero | 1 | grepping similes about the hero | `origins/struck.ts` |
| Waysides hung from a scene in the middle of a crisis (a pigeon from the besieged archive, a silent bell) | 2 | reading every wayside’s origin beside its text | `crossing/index.ts` |
| Wet words on the Glass Sea (shore, tide, sailors, rain, rivers on a map), against canon | 11 | a new test over the four Bright Rim roads, their beats and hidden room | `crossing/specs-5.ts`, `lexicon-craft.ts`, `lexicon-element.ts` |
| A tablet “gallery”, a roof over a cellar, a tribunal hall with a floor, a lattice that hummed at lies, an ink that faded in a year: each against canon | 6 | reading each road’s place against the scene it hangs from | `crossing/specs-1.ts` to `specs-3.ts` |
| A hidden room where the stair came after the room, and goods named “the Dongzhong’s Cracked Bell” | 28 | proofreading generated scenes for each craft and element | `crossing/build.ts`, `specs-*.ts` |
| Singular text over plural places (“the dust-horse lines is”) | 8 | reading generated scenes | `crossing/specs-*.ts` |
| Spoilers of a secret before its scene (the sisters, a tune heard in the mist at the Law Hall) | 4 | checking each gendered scene against canon’s order of reveals, which moved the paths to the tablet scene | `gendered/*` |
| Keeper names that clashed with earlier keepers or companions | 10 | the name tests of earlier waves | `crossing/specs-*.ts` |

Tests now fail on each class: `tests/crossing-roads.test.ts` (canon of places, goods named without a keeper, one scene per door), `tests/gendered.test.ts`, `tests/soak.test.ts` (every gender, root and craft walks the roads and never stands behind another’s door).

**Looked for and found clean.** Named characters’ pronouns against their gender over every shown line (all candidates were false positives); gender extras missing a third value (none); flags set and never read (90 appeared during writing and were each given a reader); loops through a path’s own end (31 appeared; the door is gone from the way back); a pick flag shared by two doors (`ask`, `borrow` now name their door); heroes of every gender, root and craft walking all forty roads without a stuck scene or a stray token; speed above the cap after every attunement.

## Sixth pass: 283, and what was looked for and found clean

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| A beginning’s own door scene skipped: the gate disciple’s gossip and the memorial both lead straight to the Law Hall, so the Elder never looked at a porter, rogue, heir, courier, exile or any of the six new beginnings | 11 | walking every route from every beginning’s gate | `origins/*`, `origins/echoes.ts` |
| Sentences of a way back shown word for word in every road where the state held (up to 200 times) | 10 | counting sentences shown in more than one scene; the top eight were at 200 | `roads2/lexicon-state.ts`, `roads2/build.ts`, `fortune/build.ts` |
| Dress, birth, face, trade, manner, send-off and realm readings with three or four wordings for 200 roads | 254 | the same count, one level down | `roads2/hero-lex-more.ts`, `roads2/hero-lex.ts` |
| A heading never given the hero’s name | 2 | a 32,562-step soak walk over twelve beginnings and named heroes (`tests/soak.test.ts`) | `engine/game.ts`, `GameView.tsx` |
| “a mixed roots”, “a heaven-marked and Pill Dao” | 2 | reading the creation preview for every talent and Dao | `engine/hero.ts` |
| A mortal-only Elder line that sent every beginning up the stair in the rain | 1 | grepping shown text for one past that every hero is told they had | `npc/elder-su-realm.ts` |
| A timeline slip (sixty years against fifty) | 1 | reading the new beginnings against each other | `origins/dream.ts` |
| A letter carried the whole way and never explained | 2 | the same read | `origins/lamp.ts`, `origins/entries.ts` |

Tests now fail on each class: `tests/soak.test.ts`, `tests/beginnings.test.ts`, `tests/cultivation-roads.test.ts`.

**Looked for and found clean.** Extras shadowed by an earlier extra in the same group; items and holdings required before anything can give them (checked by path, not only globally); choices that spend more than they check, take an item they do not require, or lose a holding they do not hold; second-person claims of a realm outside a realm guard; years and ages against canon. The total is 283, not 1,000: the first two rows are the large ones, and the rest are what the detectors could prove.

## Fifth pass: 42, and what was looked for and found clean

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| A kind act marked deceit or force (“Hug him”, “Hold her hand”, “Help her up”, “Carry him in”), which cost karma and read to the Elder as a lie or a threat. The first option of some approaches took the approach’s own tone whatever it said | 28 | a scan of every hand-written choice for gentle verbs with a deceit or force tone, then a read of each scene | `books/*` |
| “Admit it” marked deceit, “Hand him the ninth card” marked force | 2 | the same | `books/*` |
| “Say you are the harbour inspector” marked truth, a lie | 1 | the same | `books/*` |
| “a array-master’s craft” | 5 | a scan of every shown line for a/an against the next sound | `dao/lexicon.ts` |
| “the hour before before”, “lean-to to be remembered”, “lean-to to forget” | 4 | a scan for doubled words | `roads2/specs-4.ts`, `roads2/hero-lex.ts`, `fortune/lexicon.ts` |
| A remark counting decisions since a flag nothing sets, so it could never be said (twice) | 2 | the audit, which now checks every remark and memory for flags, counts and items nothing produces | `books/b2/departure.ts`, `books/b4/caravan.ts`, `engine/audit.ts` |

Tests now fail on each class: `tests/consistency.test.ts` (tones, articles, doubled words, the audit).

**Looked for and found clean.** Straight quotes, double spaces, unfilled slots and `undefined` in any shown text; the timeline numbers (fifteen, twelve, nineteen years) against canon; place words in the wrong region (rain on the Glass Sea) across every road; hint numbers and realm names against the requirements they describe; prices in labels against the purse; choices with duplicate ids or labels; scenes where every choice is gated; scenarios, items and holdings nothing uses; 200 random playthroughs (none stuck, none missing a scene) and 21,561 random steps checking the purse, pack, holdings, realm and flags (cultivation fell only through the deliberate strain on a deed beyond the hero’s realm). The total is 42, not 1,000, because that is what the detectors could prove.

Caught while writing the Witness Roads, not counted: a Glass Sea road with reed pipes and “wet grass”, an Elder who in a margin fifteen years ago already knew what the abyss was, a master’s minute that had Wanru sign Mengjiao’s sealing, five keeper names already in the story, and a group name that made the keeper’s reading of your manner lose to the gender line.

## Fourth pass: 63 lines, and why not 1,000

This branch added the talent, Dao and origin systems, five starting points and forty Dao Roads (1,000+ new scenes). Its plot-hole pass found only what a detector could prove, and the ledger counts only that.

| Class | Lines | Found by | Fixed in |
| --- | ---: | --- | --- |
| A Fortune Road “share in the books” label that named the goods’ price, not the share’s | 23 | comparing the number in each `invest` label with the `addWealth` it applies, on `main` and on the branch | `fortune/lexicon.ts` (`INVEST`), `fortune/build.ts` (new `invest` slot) |
| A Fortune Road “sell the lease” label that named the goods’ resale value, not the lease’s payout (and called a “Share” or “Stake” a lease) | 40 | the same comparison on `sell_holding` | `fortune/lexicon.ts` (`SELL_HOLDING`, `RETURN_CHOICES3`), `fortune/build.ts` (new `leaseValue` slot) |

`tests/fortune.test.ts` now fails if any `invest` or `sell_holding` label states a number other than the one the purse moves.

**Looked for and not counted as fixes.** About 600 compound spellings (“salt-cart” against “salt cart”) turned out to be single, unrelated uses, not a split in house style, so they were left alone rather than inflated into a count. About 66 shared road templates use street, lane and mud wording on the steppe and the Glass Sea. They are a style mismatch, not a contradiction the player can catch, and are listed here as a known follow-up. Three earlier passes had already cleared the dangling flags and the repetition a detector can find. The honest number for this pass is 63.


The unit is again **one line of text, one choice label or one choice the player can be shown**. The count is of lines changed at their source. Most of it is repetition, and the ledger says so: 1,678 of the 1,743 are a line the player met twice in the same walk of one road. The 64 that contradict something the story says elsewhere (its setting, the hero’s realm, the hero’s dress or the hero’s purse) are in the rows after the third.

| Class | Lines | Found by | Fixed in |
| --- | ---: | --- | --- |
| A menu line that appears in two scenes of one walk of a Book One road | 858 | `tests/fortune.test.ts` walks every approach and every hidden route of all 120 roads and fails on a repeat | `roads/build.ts`, `roads/lexicon-extra.ts` |
| A paragraph of eight words or more that appears twice in one walk of a Book One road | 144 | the same test | the same: the four second-paragraph variants per tone become ten |
| A menu line that appears in two scenes of one walk of a realm road | 676 | the same test | `roads2/build.ts` |
| Rain, and a pond, in roads on the Glass Sea, which has no water | 23 | a scan of the three Glass Sea road groups for water words (12 “rain is coming”, 8 “the way a pond does”, 3 “the province it has seen rain in”) | `roads2/hero-lex.ts`, `roads/lexicon.ts`, `roads2/lexicon.ts` |
| “A mortal’s breath” and “a mortal’s quickness” in Book Two, where the hero is at least a Foundation Builder | 3 | a scan of Books Two to Six for the hero called a mortal | `books/b2/censors.ts`, `stairs.ts`, `assize.ts` |
| “Your boots” for a hero who chose straw sandals (21), and “your hat” for one with no hat (3) | 24 | a scan of the story for the hero’s gear against the creation screen’s dress options | `engine/hero.ts` (`personalise`), tested in `tests/consistency.test.ts` |
| A purchase, a bet, a bribe or an offering the choice narrates and the purse never feels | 14 | a scan of every Book One choice label for pay, buy, coin, price and purse | `side-village.ts`, `side-herb-market.ts`, `side-pavilion.ts`, `side-healer.ts`, `side-lantern-stair.ts`, `side-sister-shrine.ts`, `side-bell-foundry.ts`, `side-quarry.ts` |
| Two spaces between sentences | 1 | `tests/consistency.test.ts` | `books/b5/skiff.ts` |

The 1,678 are the defect a player would meet first. A Book One road gave the same second paragraph to all five scenes of an approach, because its pool held four lines and the picker stepped by five. It also gave the same menu line to the same tone in every scene, because each tone’s pool held five lines and the picker stepped by five again. Every walk now draws its lines by *stage*, from pools of at least eight lines for each kind of thing a road can name (a place, a thing, a person), so a walk of eight scenes cannot repeat one. The new test counts it on all 120 roads and says what the old code did: 858, 144 and 676 repeats on `main`.

The 23 Glass Sea lines were three sentences in shared wording, written for the river and the mountain, and reused on a sea of fused sand. The 14 purchases are the ones the new purse made visible: “Buy a bundle of frostleaf with the coins you carry” changed nothing about the coins. Each now costs what it says (or pays what it says) and needs the stones to try it.

### Caught in review of the new content

These were found while writing this pass’s own roads and never reached the story, so they are not counted above. They are the reason the checks exist.

- **The roads repeated themselves too.** Before the generators were fixed, the new roads had the same fault the old ones had: 762 repeated menu lines and 72 repeated paragraphs in walks of the Fortune Roads. They are fixed with the others, by the same change.
- **Every purchase was locked.** The pack condition “carries none” was written as `max: 0`, and the engine read a missing minimum as one, so “no more than none, and at least one” could never hold and no road could sell anything. Found by playing a road with a full purse; the engine now reads a lone maximum as “from none”, and `tests/economy.test.ts` pins it.
- **A pill that a mortal could buy.** A pill for Foundation Establishment on a Qi Condensation road was sold from the realm below the road’s. It is now sold only to a hero of the road’s own realm.
- **“The The Cobbler’s Bench and Wall.”** A holding named with its article read as a doubled word in three choices. Names are now article-free and a test says so.
- **“Break a watchman and walk through what is left.”** A force line that fit a gate and not a person. Found in a screenshot; the line now fits both.
- **Hubs that did not fit the screen.** The first drafts of the Elder’s pace lines at the gates took five scenes over the 200-word cap (up to 325 words). They became five short scenes of their own, so no gate and no ending grew.
- **A report written for the cart, said on the mountain.** The first road reports said “we are a long way from anywhere the Law is read aloud”. Five of the ten waysides are on the mountain, so the reports now name no place.

### What was looked for and not found

The searches below returned nothing that needed fixing, and are kept so nobody repeats them.

- **Typography across all 5,881 scenes.** Straight quotes: none. “An” before a consonant: one, “an F”, which is right. Doubled words: 13, nine of them the name Tao Tao, two the nonsense “Ni ni”, one “that that” and one “before before”, all of which parse. A lower-case start: 5, each the second half of a quoted line that began in the paragraph above. An unbalanced curly quote: 13, eleven in a logbook read over several paragraphs, one speech and one verse.
- **Hints that disagree with their conditions.** 2,364 choices carried a requirement when the check ran. Every one has a hint, none says “Not available yet”, and none names a realm or a stat threshold that its condition does not ask.
- **A scene nobody can reach.** None of 5,881 is orphaned from the opening, and `tests/consistency.test.ts` now says so.
- **A scene that repeats its title in a row.** None.
- **“N years ago” against the canon.** The 35 “fifteen years ago” were read in context, and each is the Sealing, the expulsion the week after it, or somebody’s part in it. The other 69 (“twelve” for the Elder’s tenure, the rest for the Concord and the coast) were read in context too, and none contradicts the Timeline.
- **The hero’s body and dress in unconditional text.** In the 181 hand-written lines that name a body part or a garment, nearly all are sleeves, hair, cheeks and voices every hero has. The ones a hero may not have are the boots and hats fixed above; a hero’s cloak appears 12 times and was left, since any dress can carry one in the pack.
- **Tone against karma.** 13 choices have a karma sign that disagrees with their tone: eight force choices that raise it (each stands up for someone: the Elder at the altar, the tribunal, a widow’s door), four deceits that raise it (each protects someone), and one mercy that lowers it (`mist_masters_fall_2>let_masters_go`, which spares the masters at a cost to justice). Read from their labels and left as written.

## Second pass: 1,153 lines



The unit is **one line of text, one choice label or one title that the player can be shown**, found by a detector that is now a test and fixed at its source. The count is of lines, not of marks: the 783 straight quotes sit in 381 lines and count as 381. It is a count of inconsistencies in the text and the generator, and most of them are not plot holes in the strict sense. Of the 1,153, the ones that change what the story *says* are the 41 in the last five rows. The rest are the story saying nonsense (“Slip a small piece of the weighing hut into your sleeve”) or saying the same thing two ways.

| Class | Lines | Found by | Fixed in |
| --- | ---: | --- | --- |
| Wording that does not fit what it names, in the Book One roads | 540 | `scripts/audit-slots.ts` replays the old selection against the new kinds | `roads/kinds.ts`, `roads/lexicon.ts`, `roads/build.ts` |
| An obstacle or an ally that does not fit the label it is in | 146 | the same script | `roads/build.ts` (slots now come from the label’s tone) |
| Straight quotes and apostrophes among 55,000 curly ones | 381 | `tests/consistency.test.ts` | `src/story/**`, converted in place |
| Three-dot ellipses beside single-character ones | 45 | the same test | `src/story/books/**` |
| “Back from the The Pilgrims’ Road” | 10 | the same test (doubled word in a title) | `roads/index.ts` |
| An Elder’s report said word for word in 13 roads | 13 | the same test (no line repeated across scenarios) | `roads/lexicon.ts` |
| Four choices that all read “Return to the bench.” | 4 | the same test (no repeated label) | `books/b2/assembly.ts` |
| A companion who speaks before the player has met them | 8 | `auditStory` now runs a must-analysis over the story graph (`unmet-speaker`) | eight remarks in Books Four to Six, each now waits for the bond |
| The player’s weapon is a sword in five scenes and a blade in ten | 5 | a search for the player’s gear, `tests/consistency.test.ts` | five scenes |
| “Her silver comb in your braid”, for a hero who may have none | 1 | the same search | `books/b6/sealing.ts` |

Each is listed in [plot-holes.jsonl](plot-holes.jsonl) with its file and a note.

### What was looked for and not found

The searches below returned nothing that needed fixing, and are kept so nobody repeats them.

- **A companion who interjects before they are met.** The same analysis finds no scene interjection by a companion who might not yet be introduced. It did find eight *remarks* (above): 193 remarks are spoken by a companion, and 8 had no condition that says they have been met.
- **The Elder out of place.** 24 lines of the Elder’s reactions in Books Two to Six say “this hall”, “my gate” or “my office”. All 24 are memories of the Law Hall, or scenes on the last night on the mountain. None is a slip.
- **Ages, years and tenures.** The Elder has been Elder for twelve years in all six places that give the tenure. Gu is nineteen in both places that give his age, and Lin Yuan seventeen in the one that does.
- **Names and spelling.** No near-miss of a recurring name appears in the text, and British spelling is used throughout (grey, colour, armour, rumour, centre, harbour). The one American form, “gotten”, is two lines of dialogue.
- **Repeated paragraphs.** Across the hand-written story only four lines of ten words or more appear in more than one scene: one Elder’s report (fixed above), a greeting said in two rooms of the same house, a gesture (“She looks at you, with her head on one side”) in two scenes, and the night of stillness at nine hubs, which is one event.
- **Duplicate paragraphs inside a scene.** 26 hits, all short spoken replies (“Yes.”, “I know.”) that a speaker says twice.

### Caught in review of the new content

These were found while writing this pass’s own roads and never reached the merged story, so they are not counted above. They are the reason the audit exists.

- **The Glass Sea has no water.** The first draft of four roads dived for mirrors in shallows, stranded a ship in a tide and sold salt. The sea in Book V is fused glass. All four roads and their wayside were rewritten, and `CANON.md` now says so.
- **Eighteen keepers shared a name with someone in the story**, among them Erdene and Tsetseg of Book Four, Ning of Book Five, Gu (the companion, as “Yan Gu”), Zhu of Book Three and Ke-er. All are renamed, and `tests/realm-roads.test.ts` fails if a keeper shares a given name or a companion’s name.
- **A birth the canon forbids.** The Wanderer is a foundling. “Noble house” as a character option would have contradicted Book Two, so the choice is now the *papers the teacher entered the hero under*, and every line that said “your family” says “your papers”.
- **A report line copied into the new roads’ lexicon**, and 25 report lines with no road’s name in them. The new roads’ reports are all distinct, and a test says so.

## Earlier pass

The request was to fix over 1,000 plot holes. That pass’s ledger says honestly what was found and fixed. The total was **884**, short of 1,000.

## Counts

| Source | Found | Fixed |
| --- | ---: | ---: |
| Continuity audit (`src/engine/audit.ts`) run on `main` before this branch | 808 | 808 |
| Hand-found, listed in [plot-holes.jsonl](plot-holes.jsonl): timeline, canon, name clash, logic, road template, mortal qi | 76 | 76 |
| **Total** | **884** | **884** |

The 808 audit findings on `main` were 774 dangling flags (a choice sets a flag that nothing ever reads, so the choice changes nothing), 26 time loops (a hub the player can leave with no way out, or a loop that gives nothing), and 8 dead conditions (a line or choice that can never appear). Each was fixed by making the flag matter (a later scene reads it) or by removing the dead write. The audit now returns zero, and `tests/story.test.ts` fails if any returns.

A dangling flag is a weaker kind of plot hole than a contradiction, and the 884 is counted that way. If you count only contradictions and soft-locks, the figure is the 76 in the hand list plus the structural defects below.

## Hand-found fixes

| Category | Entries | Fixes |
| --- | ---: | ---: |
| Timeline | 9 | 17 |
| Canon | 18 | 18 |
| Logic | 8 | 8 |
| Mortal qi | 1 | 1 |
| Dead conditions | 9 | 9 |
| Road templates | 4 | 4 |
| Name clashes | 14 | 28 |
| Time loops | 7 | 16 |

The ledger file also lists 25 time-loop and dead-condition fixes (16 and 9). Those were found by the audit and are already inside the 808, so they are not counted twice. Each entry in [plot-holes.jsonl](plot-holes.jsonl) names the file, the category and the fix. The main themes were Su Wanru's title (Registrar on the Sealing Night, Elder only for the last twelve years), the fourteen signed names against the fifteenth sealing, Lin Yuan's mother's expulsion date, and ids that clashed between chapters.

## Structural defects found while writing the later books

These are soft-locks and gaps that tests and the simulator found, all fixed:

- Book V's third stage was never reachable, and nothing came after Book V. The story now climbs the Stair, reaches the Hall, descends, and runs through Book VI to seven endings.
- After "Go back up and sit another night" at the Glass Gate there was no way down again. The Stair hub now offers the lift.
- At the Assembly's witness bench a player who had met fewer than three of the witnesses could not close the bench. Gu Hanzhen, Ren Qiao and Elder Su are now always callable.
- A new Book VI scene reused the id `sealing_choice` from Book One and silently replaced it, breaking the Sealing Night. A test now fails on any shared scene id.
- Shuttling between two hubs earned cultivation without limit. Revisits no longer give the tone gain.
- Book VI's hub could soft-lock after the final choice set a flag the hub then read. The flag is gone.
