# Plot-hole and continuity ledger

Two passes, each asked to fix more than 1,000. This ledger says exactly what was counted, what each number means, and what was looked for and not found.

| Pass | Fixed | Of what kind |
| --- | ---: | --- |
| Earlier pass (below) | 884 | 808 dangling flags, dead conditions and time loops, plus 76 hand-found contradictions |
| **This pass** | **1,153** | lines of text, labels and titles the player is shown: 686 wording mismatches in generated roads, 426 typographic, 41 continuity and repetition |

## This pass: 1,153 lines

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
