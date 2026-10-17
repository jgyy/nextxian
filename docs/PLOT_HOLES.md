# Plot-hole and continuity ledger

Fifteen passes, four asked to fix more than 1,000 and the fourth asked again. This ledger says exactly what was counted, what each number means, and what was looked for and not found.

| Pass | Fixed | Of what kind |
| --- | ---: | --- |
| First pass (last section) | 884 | 808 dangling flags, dead conditions and time loops, plus 76 hand-found contradictions |
| Second pass | 1,153 | lines of text, labels and titles the player is shown: 686 wording mismatches in generated roads, 426 typographic, 41 continuity and repetition |
| Third pass | 1,743 | 1,678 menu lines and paragraphs a player reads twice in one walk of a road, 64 contradictions of the setting, the hero’s realm, the hero’s dress and the hero’s purse, 1 spacing slip |
| Fourth pass | 63 | 63 choice labels that named a different price from the one the purse paid. It is short of the 1,000 asked for: see below |

| Fifth pass | 42 | 31 choices whose tone contradicted the act, 9 lines of broken wording, 2 remarks that could never be said |
| Sixth pass | 283 | 11 origin door scenes the Elder never played, 10 sentences read in up to 200 roads, 254 trait lines shared by 200 roads, and 8 smaller slips |
| Seventh pass | 72 | 2 hero-address lines and 1 simile that assumed a gender, 11 wet words on the Glass Sea, 6 places against canon, 28 generated-text slips, 8 plural places, 4 early spoilers, 10 name clashes, 2 wayside origins |
| Eighth pass | 84 | 1 canon contradiction opened by the new starting ages (the Wanderer was five fifteen years ago), 52 shown lines that told a hero of any age what the Elder did “at your age”, 1 timeline slip (twenty years against fifteen), 1 beginning that contradicted itself (four ways taught “one a decade” in seven winters), 3 lines that assumed a young hero, 1 panel that showed the wrong heart-demon line, 1 preview that misread, and 24 slips in the new content (5 dead lesser ways, 4 name clashes, 6 repeated lines, 9 echoes over the cap) |
| Ninth pass | 777 | 704 lines and memories no hero could ever see (662 extras and 42 memories behind a realm outside the ladder), 22 lines in 17 scenes that told every hero they were a girl, a lady or a madam, or called them “she”, 45 lines in which Lian Sheng (about 40) and Old Lin (5) changed gender between books, 6 hugs counted as truth |
| Tenth pass | 270 | 262 shown lines that told every hero something about themselves (117 told every soldier they were “a man who has stood a post”, 117 that they could “tell a levy man by how he drinks”, 1 called every gentry hero “young master”, 4 called the hero “a girl”, 23 lines of the Elder, a trait or a beginning said her, his, he or men to every hero), 5 speeches that began mid-sentence with the speaker lost, 3 that glued two speeches together. Short of the 1,000 asked for: see below |
| Eleventh pass | 24 | 12 realm-band lines that named one realm and were shown to every hero above it, 1 ending that did the same, 3 lines of the Elder, Gu and the age remarks that named a realm for every realm above it, 3 defects in one scene (a Spirit Severing, Dao Seeking or Ascendant hero read as a Nascent Soul, called “Madam”, and told they were “the first Nascent Soul this year”), 2 lines that called the unreadable hero “her” and “she”, 2 breaks in the Elder’s own years, 1 breakthrough with no trial before it. Short of the 1,000 asked for: see below |
| Twelfth pass | **11** | 2 lines of the Elder that said what the hero wore on arriving (once the hero can change dress, the dress they have on is not the one they came in), 2 choices that told the hero they put on a garment and changed nothing, 1 “second pair of straw sandals” for every hero, 1 “benefactress” for every gender, 4 keepsakes of a hero’s own story that the new Sell and Give buttons would have let a hero trade away, 1 Restart that began the hero again in the last dress they put on. Short of the 1,000 asked for: see below |
| **Thirteenth pass (this branch)** | **11** | 3 lines that called the Ascendant’s silence “the last trial” or said no Ascendant could tell it, 1 elixir brewed for “the final realm”, 4 lines that made the seal a thing “only an Ascendant” could hold, 1 band of the older roads that nobody above the top road could be in, 1 practice that carried a hero over the layers they had left without saying so and 1 strain that could have added points |
| **Fifteenth pass (this branch)** | **178** | 9 lines of the Elder that gave her career or age the wrong way round (she is 43, Registrar for 6 years and Elder for 12), 5 typographic slips in Book Five, and 164 lines of text a player met again and again in one walk (16 purse reactions, 60 road labels, 64 realm-fit hero lines, 24 ascent prompts) given variants so that the same sentence is no longer the only choice |

## Fifteenth pass (this branch): what was looked for, found and fixed

This branch added the World Roads: forty affairs across ten reaches, the part the hero plays in each, the Gathering before the Last Sealing, and two new endings. The pass looked for what a world of that size could expose: a part that changed nothing, a reach nobody could hear from, a line the new roads copied word for word, and canon the new text contradicted.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| Elder Su’s career told wrongly in older scenes (Registrar for 6 years, Elder for 12, age 43): lines that made her Elder at the Sealing, or older than 43 | 9 | a search for every year count attached to her name, checked against `docs/CANON.md` | `books/b2/censors.ts`, `b4/court.ts`, `b4/wolves.ts`, `b4/border.ts`, `b4/tomb.ts`, `b5/mirage.ts`, `ascent/lexicon.ts`, `ascent/remarks.ts` |
| Typographic slips (doubled spacing, straight quotes, a dash used as a pause) in Book Five | 5 | the continuity tests on the first full run | `books/b5` ladder, mirage, furnace, gale, festival |
| Lines that repeat across a walk of a road: purse reactions, road labels, realm-fit hero lines and the ascent’s prompts had one wording each | 164 | counting repeated sentences across the roads a hero walks | `fortune/lexicon.ts`, `roads/lexicon.ts`, `roads2/lexicon.ts`, `roads2/hero-lex-more.ts`, `ascent/build.ts` |
| A hub in the new roads that the word-count test put over the cap | 1 | `npm run word-count` | `story/world` |

**Caught in review of the new text** (these never reached the branch’s final content and are not counted): about eight affairs written first with canon wrong (a Lian Sheng called “he”, a Qiu who spoke aloud when she writes on slates, a Registrar who was Elder for the wrong span, a lift described as a rope), which the continuity tests and a read against `docs/CANON.md` caught, and which were rewritten or renamed before the first commit of the roads.

**Looked for and not found:** a part of an affair that changed no flag, no cost and no course (every part from look to hinge shifts at least one of the three); an ending reachable by a hero with no realm that the engine does not guard (the new endings need none, by design, and are tested); a reach whose voices could not reach the “answer” threshold.


## Fourteenth pass (this branch): what was looked for, found and fixed

This branch added forty fights, a condition that reads the hero against a foe, twelve Dao turns and ten gender turns in the main line, and marks on the Sealing Night’s memory. The pass went after what those could expose: a hinge of the story whose choices changed nothing, an audit that could not see how the new condition reads a flag, text that invents canon, and text that gives the hero a family.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| The memory of the Sealing Night: 24 scenes and 112 choices at the hinge of Book One, ten of the scenes with four choices that differed only in words and no consequence at all. A hero who cut the chains, let the masters push, took the jade or sang was the same hero to the next morning’s servants, to Mengjiao on the ledge and to the Elder at the Judgment | 1 class, 10 scenes, 40 choices | a scan for scenes whose every choice has the same next scene, no effect and no reaction (86 in the story; 76 remain, see below) | `story/hunts/stances.ts`, `story/hunts/echoes.ts`, `story/index.ts` |
| The audit read a flag only in a `flag`, `since` or `count` condition, so the footholds that a fight reads through `edge.boost` were reported as 120 dangling flags and would have hidden a real one | 1 | the first run of `npm run check` on the new roads | `engine/audit.ts` |
| The story test that finds the choice and the hero for an Elder scenario knew a hero by gender and age but not by Dao, so a scenario behind a Dao’s hidden way was “never reached” | 1 | `tests/story.test.ts` failing on the first Dao turn | `tests/story.test.ts` |

**Caught in review of the new text** (these never reached the merged story and are not counted; they are the reason for the review):

- **Invented canon about the fourteen.** The first draft of the ash-stag said nine of the fourteen were girls, and of the struck-out that its name was “a man sent down after the fourteenth”. Canon says fourteen disciples, the last a girl of fifteen, and nothing more. Both lines are rewritten, and `CANON.md` says what the hunts may and may not say of them.
- **Invented canon about the bell.** The hollow bell was “the Tribunal’s bell, fallen in the year of the Sealing”. Nothing in the canon drops a bell. It is now a bell the sect never rang.
- **The Elder at the cleft.** A tail line had her “stand on that lip as a Registrar”. Mengjiao was sealed by the masters alone. The line now says she was Registrar that night.
- **A mother for a foundling.** The voice-fox called “your mother’s or a sister’s” voice. The Wanderer is a foundling. It now calls in the voice the hero would have chosen.
- **A line copied into forty reports.** One of the Elder’s report lines had no name or place in it, so all forty hunts shared it word for word (168 repeats). The reports now name the foe in every line, and `tests/consistency.test.ts` still fails if two share one.
- **Spelling and quotes.** One “gray” and one straight apostrophe, caught by the British-spelling and curly-quote tests.

**Looked for and found clean.** The audit over the new thousand scenes and the new turns: 0 dangling flags, 0 dead conditions, 0 loops, 0 unmet speakers. Scenes over the 200-word cap: 0 (five scenes that had no room for an echo were passed over for the ones beside them that did). Fights a plain hero cannot end: 0 of 40, by strength if they read the foe and by guile if they did not. A scene where every choice is locked for some hero: 0 in the hunts (the 32 wardrobe commissions whose choices all read “not yet paid” are entered once, because their hub shuts the road when it is done). Items nobody is given: 0. Holdings nobody is granted: 0. Scenes no choice reaches: 0 of 18,333. Items or holdings that share a name: 0. A foe named after a person of the story: 0.

**Left as they are, and said so.** 76 scenes of the old story (the foothill village, the healer’s hall, the eastern peak, the quarry, the bridge, the archive, the lantern stair) still offer four choices that differ in wording and tone. Tone is counted, and the Elder reads the manner a hero settles into, so those choices are not nothing, but none is remembered by name. They are pacing scenes, and the pass leaves them.

**Short of 1,000.** The pass counts 3. A thousand more were not found, and none is claimed.

## Thirteenth pass: what was looked for, found and fixed

This branch made the ladder ten realms of ten layers, put a wall at every step and added the Breakthrough Roads, so the pass went after what a ladder that no longer ends at Ascendant could expose: text that says the ladder ends, a hero who stands above a road written for the old top, and a hero who can now climb without anyone saying how.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| The silence after, called “the last trial” and said to be told by no Ascendant, in a world with True Immortals, and in the same lexicon told by an Ascendant two hundred years gone | 3 | searching every line for “last trial”, “final realm”, “highest realm”, “no higher”, “top of the ladder” and “beyond Ascendant” | `story/tribulation/lexicon-bow.ts`, `lexicon-trib.ts`, `engine/tribulation.ts` |
| An elixir “brewed for those at the threshold of the final realm” | 1 | the same search | `story/fortune/specs-5.ts` |
| The seal that “only an Ascendant” could take into themselves, with the abyss quiet “at Ascendant”, shown to Immortals and Sovereigns as if they were not there | 4 | scanning every `realm>=7` line for a realm named as if it were the last | `story/books/b6/sealing.ts` |
| A band of the older roads that nobody could be in (above the top road), and so an Immortal who got no line at an Ascendant road | 1 | the rank and continuity tests that stand a hero of every realm at every road | `story/roads2/hero-lex.ts`, `engine/rank.ts` |
| A practice that carried a hero over the layers they had left to the gate without saying so | 1 | reading every effect that sets points | `engine/game.ts` |
| A strain that could add points to a hero who stood below the floor of their layer | 1 | reading the strain with the layers’ floors | `engine/cultivation.ts` |
| The Elder’s own history, written for the roads: she could not have turned back at the fifth landing of the stair and stood at the Open Door eleven times | 0 | caught in review of the new content, before it shipped; not counted | `story/ascent/index.ts`, `docs/CANON.md` |

Tests now fail on each class: `tests/ascent.test.ts` (the ladder, the walls, the thousand scenes, a random walk of every road) and the existing suites for the older roads.

**Looked for and found clean.** The audit over the new thousand scenes (dangling flags, dead conditions, loops, speakers who have not been met): 0. Scenes over the 200-word cap: 0. Walls no hero can pass: 0 of 99 (a hero at their worst, with the wall’s eight lessons, is steady enough at every wall). Walls no scene walks to: 0 of 100. Roads no scene opens: 0 of 10. Gendered similes and unqualified claims about the hero’s family in the new text: 7 found and fixed before shipping (“like a plait down a girl’s back”, “your mother’s lullaby”, “a man carries a bowl of oil”), so not counted. Typographic slips and doubled words in the new text: 0 (the existing sentence and spacing tests pass over it).

**Short of 1,000.** The pass found 11. The ledger says so, as it did for the fourth pass. A thousand more were not found, and none is claimed.

## Twelfth pass: what was looked for, found and fixed

This branch let a hero change dress, put every item in the pack to use and sell or give it away, and added the Wardrobe Roads, so the pass went after what a changeable dress and a pack that moves could expose: lines that tell the hero what they wore *when they arrived*, choices that say a garment was put on and change nothing, and story goods that the new buttons would let a hero throw away. It counts only what a script or a test could prove. **It is well short of the 1,000 asked for**: the eleven passes before it have read this text closely, and what is left that a script can see is small. The number is 11.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| Lines of the Elder that said what the hero wore on arriving: “You came up my mountain in a cloak the rain had already ruined” and “You wore silk up my stair and let the mud have it”, said to a hero who had since changed into that dress, or out of it | 2 | reading every aside and remark that names the hero’s dress against the new fact that dress is not fixed | `hero/asides.ts` (now “You wear …”) |
| Choices that said a hero put on a garment (“put on the grey sleeves of a scribe”, “Put on a pilgrim’s cloak”) and changed nothing the engine reads | 2 | scanning every choice label for “put on”, “wear”, “change into” and “take off” (24 hits; these two name a garment the hero can wear) | `chapter-3.ts` (now `wear` the scholar’s robe), `books/b2/pagoda.ts` (now `wear:traveller`) |
| “Buy a second pair of straw sandals” offered to every hero, though only a hero in patched hemp wears straw sandals | 1 | scanning shown text for dress words that no `hero` condition guards (18 hits, of which this was the only one that told a hero what they own) | `economy/reckonings.ts` |
| “call as a benefactress of the foundation”, a woman’s title in a choice shown to every hero | 1 | scanning choice labels for feminine nouns of office that no gender condition guards | `books/b3/house.ts` (now “patron”) |
| The Sisters’ Book, the Wardens’ Iron Tally, the message fifteen years late and the Master’s Last Pill: each tied to the hero’s own beginning or door, and each now a thing a hero could sell for a few stones or give the Elder as a gift | 4 | the pack’s new Sell and Give buttons, checked against every item the story hands out for a reason | `engine/types.ts` (`keepsake`), `gendered/index.ts`, `origins/entries.ts` |
| Restart: “The same character begins again from the gate” began the hero in the last dress they had put on, not the one they were made in | 1 | a test that changes dress and restarts | `engine/game.ts` (`began`), `engine/save.ts`, `components/GameView.tsx` |

Tests now fail on each class: `tests/continuity.test.ts` (the Elder’s two lines, the two garments put on, the sandals, the benefactress, the keepsakes, the restart) and `tests/wardrobe.test.ts` (the wardrobe, the pack, and the thirty-two roads).

**Looked for and found clean.** Items nobody is ever given and holdings nobody is ever granted (0 of 380 and 0 of 376); items given or required that the story does not define (0); items worth nothing (0); a pill with no realm, or a non-pill with one (0); typography in the new content (an “a” before a vowel, an “an” before a consonant, a doubled space, a doubled punctuation mark, an unbalanced quote: 0); a choice label twice in a scene, across all 16,293 scenes (0); a line that says what a hero wears with no dress condition, in remarks and Elder lines: a sleeve, in every hit, is a pocket, which the story has always used for a hidden thing.

**Not counted: slips found in the new content before it shipped.** Eighteen keeper names that were somebody’s already (nine caught by the name tests, nine more by a sweep of every keeper name in the story), a doubled word (“master’s master’s”), eight hidden-room paragraphs that glued two speeches together, a road at the Mortal wayside that offered a lesser way to nobody below Mortal, six scenarios the validator called untriggered (the gifts), a fitting that looped to its own entry and replayed it, a keeper pronoun written “she” for a man, and one engine bug caught by its own test (losing the garment on a hero’s back left it in the wardrobe). They are not part of the 11 because they were never in the story a player could read.

**The audit now also knows the flags the engine sets** (a change of dress, and using, selling or giving what the pack holds), so a remark that reads them is not called dead.

## Eleventh pass: what was looked for, found and fixed

This branch added the Tribulation Roads and made the realm matter in how people receive the hero, so the pass went after what a higher realm could expose: lines that name one realm and are shown to every hero who has climbed past it, scenes that read the hero as a realm they are not, and the Elder’s years. It counts only what a script or a test could prove. **It is well short of the 1,000 asked for** (the ten passes before it have read this text closely, and the first class here is the only one that was more than a handful). The number is 24.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| Realm-band lines that open “At Core Formation …”, “At Nascent Soul …”, “At Spirit Severing …” or “At Dao Seeking …” as the highest band of their group, so a hero who has climbed past the realm is told they stand at it: the river, the Ford and the Tidewall of Books Two and Three, the Steppe hubs of Book Four, the Glass Sea hubs and the Stair of Book Five, the mountain and the doors of Book Six, and the Listener’s ending | 12 | a new scan of every extra whose realm condition has a floor and no ceiling, whose text opens with the floor’s own realm, and that no higher line of its group catches first. Book Three’s hub and Book Five’s three were the ones most heroes meet: the simulator puts a diligent hero at Spirit Severing at the gate of Book Four and at Ascendant by Book Five | `books/b2/frame`, `b3/frame`, `b4/frame`, `b5/frame`, `b6/frame`, `b6/depths`, `b6/sealing` (now “From … upward”) |
| The Warden’s ending, where a hero of Dao Seeking or Ascendant “holds it, at Dao Seeking” | 1 | reading every line that names a realm in an ending that two realms can reach | `books/b6/sealing` (“at your height”) |
| Gu telling a hero of any realm from Nascent Soul upward “You are a Nascent Soul”; the Elder telling every hero from Foundation upward that they confess “with a Foundation Builder’s steady breath”; and the Elder telling an old hero of any realm from Foundation upward “Foundation has given you a hundred and sixty in all” (a Core cultivator has two hundred and fifty) | 3 | the same scan, over remarks and memories | `hero/remarks`, `npc/elder-su-realm`, `age/remarks` |
| The Glass Gate: a hero of Spirit Severing, Dao Seeking or Ascendant was read as “Nascent Soul”, called “Madam” whatever their gender, and told they were “the first Nascent Soul to come through the Pass this year”. It now reads each realm in its own words, kneels to a Dao Seeker and goes dark for an Ascendant | 3 (one scene) | reading every scene that only a realm can reach for the realm it names | `books/b5/descent` |
| The same Mo Yun, at the desk: a hero the Glass could not read was “her” (“It cannot read her at all”) and “she” (“more than she weighs”) | 2 | scanning ungated lines for a third-person pronoun after a hero | `books/b5/descent` (now “you”) |
| The Elder, forty-three, and “It has not done that for me in thirty years” (the Ash Bridge, which first bowed to nobody at thirteen); and “the mountain she has left for the first time in thirty years” (she left it at twenty-eight, fifteen years before) | 2 | checking every “years” in a line of hers against CANON.md | `books/b6/bridge`, `books/b5/descent` |
| A breakthrough that happened with no trial of any kind before it, in a story whose every cultivator speaks of trials | 1 | not a script: the story was asked for tribulations, and the engine now tries every breakthrough (see [ARCHITECTURE.md](ARCHITECTURE.md)) | `engine/tribulation`, `engine/cultivation` |

Tests now fail on each class: `tests/continuity.test.ts` (the “At <realm>” scan, the hub lines, the Glass, the pronouns, the Elder’s years) and `tests/tribulation.test.ts` (the breakthrough trial).

**Looked for and found clean.** Realm names inside negations (“you have no core”), which the scan does not count; every scene reachable only by a realm gate that names a realm (apart from the Glass); a hero called “Madam”, “Sir” or “Brother”: a scan finds 46 such lines, and the dozen I read against their scenes all address the Elder or a companion (Hok, Hao Lan, Duan and the like), so they are left. I did not read all 46, and the ledger does not claim to; “she” or “he” after “the Wanderer”, “the Reserve” or “the stranger” (none).

**Not counted: slips found in the new content before it shipped.** 26 return scenes over the 200-word cap after a line was added (the line was dropped), 7 echoes on scenes already at the cap (moved to lighter scenes), 7 names that were somebody’s already (five of them keepers’, two in a keeper’s own secret), a hub over the cap, and a stance line in which “she is dead” meant the keeper and not the one who kept the other desk. They are not part of the 27 because they were never in the story a player could read.

## Tenth pass: what was looked for, found and fixed

This branch added the Rank Roads and made the realm matter beside gender, so the pass went after what the two together could expose: lines that tell every hero something about themselves that only some heroes are, and speech the markup broke. It counts only what a script or a test could prove. **It is well short of the 1,000 asked for**: the nine passes before it have read this text closely, and what is left that a script can see is small. The number is 270, and the first two rows are one defect in a generated list, shown in 234 scenes.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| Hero-trait lines that told every soldier, of any gender, “as one does for a man who has stood a post” | 117 scenes | reading every hero-trait list (dress, birth, trade, face) for gendered words, then counting the scenes that show the line | `roads2/hero-lex-more.ts` (“someone who has stood a post”) |
| The same lists, a keeper saying “you can tell a levy man by how he drinks”, then “you have just proved it” | 117 scenes | the same | `roads2/hero-lex-more.ts` (“a levy veteran by how they drink”) |
| “The steward calls you young master behind your back”, shown to every gentry hero | 1 | grepping honorifics that no gender gate guards | `origins/porter.ts` (“your honour”) |
| Others speaking of the hero as “a girl with a seed” (twice), “a girl at the Four Bones who gave her last cup”, “the girl in the mountain” | 4 | reading third-person talk about the hero in Books Three and Four | `b3/lotus`, `b4/glass`, `b4/caravan` (now “{their} last cup”), `b4/court` |
| Lines of the Elder, a trait or a beginning that said *her*, *his*, *he* or *men* to every hero: “a pill-maker never travels empty-handed in her mind” (9 scenes), “I respect a hero who does her sums” (7 turning scenarios), the Elder’s word to a hero who forces (“many men … what he wanted”), the Spirit Severing line (“something that borrowed her shoes”), the hedge-listener’s two lines (“of her own accord”, “if she tries”), “a name he heard an hour ago”, “nobody to tell him he cannot”, “where she wishes to go” | 23 | scanning the Elder’s lines, the asides and every generated trait line for a gendered pronoun whose only antecedent is the hero | `engine/npc.ts` (2), `origins/entries.ts` (2), `origins/furnace.ts`, `path/lex.ts`, `age/main.ts`, `npc/elder-su-reactions.ts`, `books/b2/reserve.ts` (now `{their}`, `{they}`, “people”, “unasked”, or no pronoun) |
| Paragraphs that began in the middle of a sentence, with the speaker and the first line of the speech lost | 5 | scanning every shown paragraph for a lowercase or blank first character | `b4/bone` (2), `b4/court` (3) |
| Paragraphs that glued two speeches together with no attribution between them | 3 | scanning for a closing quote followed by an opening quote | `b4/voice`, `b5/gale`, `b5/furnace` |

Tests now fail on each class: `tests/continuity.test.ts` (no paragraph starts lowercase, no two speeches glued, the four “girl” lines, the soldier similes and the honorific, the Elder’s lines in each gender’s own pronouns, and the audit’s new check for conditions that contradict each other).

**The audit now also fails on a list of conditions that contradict each other**, as the ninth pass made it fail on a single condition no hero could meet: a realm above the first bound and below the second, a stat that must be high and low, a flag set and unset, a gender no value fits, two faces of the Elder, two scenes with no id in common. It found none in the existing story, which is worth saying, because it is a class the earlier passes never looked for.

**Looked for and found clean.** Conditions that contradict each other (none, in any choice, scene extra, interjection, memory or remark); scenes no path reaches (0 of 14,277); scenes with no choice open to every hero (0); a or an before the wrong sound, doubled punctuation, a stray slot, unbalanced quotes (0, apart from long speeches that run over several paragraphs by convention); a realm stated of the hero in text no realm gate guards (0); “your mother”, “your husband” and the like said of the hero (none, apart from heroes whose beginning gives them one); named people changing gender (a scan of 50 names, where every hit was a second person in the same sentence).

**Not counted: 46 slips found in the new content before it shipped.** 24 collisions with earlier roads (14 keeper names, 4 places, 2 titles, 4 goods or holdings, found by the consistency tests), 8 scenes over the 200-word cap, 11 hub lines over fourteen words, a clerk who was “he” in the road of a woman keeper, a keeper’s secret that called a novice neither hall’s and then said which she was, and a parting word that a woman and a man hero were given alike. They are not part of the 270 because they were never in the story a player could read.

## Ninth pass: what was looked for, found and fixed

This branch added the Custom Roads and made gender matter in the narrative, so the pass went after what gender could expose: lines written for one hero, and named people who changed gender between books. It also added an audit check for conditions no hero can meet, which found the largest class.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| Conditional paragraphs on the generated roads that need a realm below Mortal or above Ascendant | 662 | the new impossible-bounds audit, run on the base commit | `roads2/build.ts`, `roads2/index.ts`, `fortune/build.ts`, `fortune/index.ts` (bands filtered by `bandHeld`) |
| Report memories that need a realm no hero can reach | 42 | the same | the same, and `cultivation/build.ts` |
| Shown lines that told every hero they were a girl, a lady, a madam or “she” | 22 (17 scenes) | scanning shown text for third-person and honorific words about the hero | Books Two to Five: assembly, censors, nine, ferry, lotus, mourning, ninesails, border, camp, roots, ladder, festival, singing, summit |
| Lian Sheng, a woman in Books One to Three, a man in Five and Six | about 40 | reading every line that names them against the first | `b5/crib`, `clerk`, `summit`, `festival`, `b6/archive` |
| Old Lin, a woman and a man | 5 | the same | `b5/gale`, `b6/bridge`, `b6/archive` |
| A hug or embrace tagged as truth | 6 | reading tones against acts | `b3/chain`, `b4/mill`, `b5/festival`, `b5/singing` |

Tests now fail on each class: `tests/continuity.test.ts` (third-person hero lines, honorifics, the two women’s pronouns, impossible bounds in the audit, `bandHeld`, the hug tone) and `tests/custom.test.ts` (36 tests on the Custom Roads).

**Looked for and found clean.** Hint numbers against requirements; origins against realms; unknown scenario, item, asset and companion references; gendered extras without a gender gate; “years ago” against the timeline.

**Not counted.** 146 paragraphs of shared scaffolding repeat across the generated roads, which was already known and is left alone.

## Eighth pass: what was looked for, found and fixed

This branch added age and 1,136 scenes, so the pass went after what age could expose: a story written for one twenty-year-old, now read by someone of sixteen and someone of sixty-eight. Counted only what a script or a test could prove, and the number is smaller than the earlier passes because the rest is not a number of lines.

| Class | Count | Found by | Fixed in |
| --- | ---: | --- | --- |
| **Canon: the Wanderer was five on the Sealing Night, fifteen years ago, so twenty now.** Books Two to Six say it in a dozen places (the basket, the tag, “you have had it since you were five”). A starting age of sixteen, thirty-six, fifty-two or sixty-eight contradicts all of them | 1 | reading the Ages and years canon against the new starting ages | `docs/CANON.md`, `age/echoes.ts` (four lines in the Reserve), `engine/age.ts`: the age is the body’s, and the black seed spends years where it wakes |
| Shown lines in which the Elder says what she did “at your age”, said alike to a hero of sixteen and of sixty-eight (she is forty-three) | 52 | scanning every scene, extra, interjection, scenario line, memory, remark and aside for the phrase | `engine/hero.ts` (`personalise` says “at your stage” to a hero who begins at fifty-two or sixty-eight) |
| “I have decided for you for twenty years”, said of a child she took in fifteen years ago | 1 | reading the Reserve against the timeline | `books/b2/reserve.ts` |
| A lamp-keeper “taught all four ways, one a decade”, after seven winters | 1 | reading the beginnings against their own first scene | `origins/lamp.ts` |
| “a rare courtesy in a young man”, “what it costs a young cultivator”, said of a hero of any age | 2 | grepping lines about the hero’s youth | `hero/asides.ts`, `origins/entries.ts` |
| A companion who “thought you were going to be older”, said to a hero of sixty-eight | 1 | the same | `hero/remarks.ts` (now only to a hero of forty or under) |
| The cultivation panel always said a heart demon holds a hero below karma −30, though the line moves with Dao, roots, beginning and now age (a youth −24, an elder −38, a healer −50) | 1 | reading the panel against `heartDemonKarmaFor` | `components/CultivationPanel.tsx` |
| The creation preview read “Wanderer is someone who gives no answer of 68” | 1 | reading the preview for every age | `engine/hero.ts` |
| A lesser way offered to a hero “below Mortal” on the eight roads that begin at Mortal, with a flag nothing could set and two memories that could never be said | 5 | the audit, on the first build of the Age Roads | `age/build.ts` |
| Name clashes between the new keepers and earlier ones | 4 | the name tests of earlier waves | `age/specs-2.ts` to `specs-4.ts` |
| Lines of the Elder repeated word for word across the roads’ door scenarios | 6 | the repetition test | `age/lexicon-read.ts` |
| Echoes that took scenes over the 200-word cap | 9 | the validator | `age/echoes.ts` (the gate and the sutra door have no room, so their age is read by the Elder’s asides and the turning points instead) |

Tests now fail on each class: `tests/age.test.ts` (the “at your age” sweep over every shown string, the companion’s age, the door of years for every age from sixteen to ninety, the span words in each realm’s beats, a 900-step soak at every age).

**Looked for and found clean.** `a`/`an` against the next sound, doubled words, spaces before punctuation, straight quotes, unfilled slots and `undefined` over 173,264 shown strings; scenes no start can reach (none); hubs a hero cannot leave; choices the hero can never take; the span of years the lexicons name against the span the engine gives (it is a test now).

**Not counted.** The Age Roads’ shared scaffolding is the Fortune Roads’, so a few of its situations (“a boy at the bridge”, “a ferryman’s widow”) read oddly beside a keeper of seventy. They are the same lines every earlier wave shows and were left alone.

## Seventh pass: what was looked for, found and fixed

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
