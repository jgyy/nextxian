# Plot-hole and continuity ledger

The request was to fix over 1,000 plot holes. This ledger says honestly what was found and fixed. The total is **884**, short of 1,000.

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
