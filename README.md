# The Crimson Abyss — a xianxia text adventure

A text adventure built with Next.js and TypeScript. You arrive at the Azure Cloud Sect after the Sealing Jade is stolen. Elder Su Wanru remembers everything you say and do, and her attitude changes how she responds to each later scenario.

![Opening scene](docs/screenshots/01-opening-desktop.png)

## Features

- **Rank Roads: thirty-two roads, 1,200 more scenes, where the realm and the gender are read together.** Eight rungs of the sect, one for every realm from Mortal to Ascendant (the roll of hands, the novices’ halls, the pairing board, the council seats, the soul-portraits, the severing day, the companions’ table, the last column), each with four keepers: a woman and a man who **read a stranger’s rank before their sex**, and a woman and a man who **read their sex before their rank**. A hero meets each place from **below** the realm it asks, **at** it or **above** it, and the same keeper greets, charges and answers them differently by band: the glance at the entry reads rank and gender together (nine readings on a road that has all three bands), the greeting and the fourth beat of every approach read the band, the second and third read the gender. **The door of rank** opens in the middle of every approach to a woman, a man or someone who gives no answer, and the keeper meets whoever walks through it by where their rung stands against the road’s. Four picks lie behind it: **yield** to the place the rung gives, **claim** the rung held against the room, **veil** it, or **lift** another with it. A claim needs the realm of the road and then a price each gender pays differently (a woman argues it with Insight, a man pays in qi for the quiet he breaks, someone who gives no answer pays in qi to be read by the rung alone); a lift spends the rung, so a hero below the road pays strain for it and one two realms above it gains mastery. Claiming or lifting before a keeper who reads sex first crosses them; keeping low before a keeper who reads rank first lets them down. The Elder answers every pick at once, in five lines by her trust, and says a word at every door that depends on where the hero’s rung stands.
- **Realm and gender in the main line: eight turning points, one for every realm.** At the scroll-room, the sutra door, the masters’ dais, the Round Hall, the fleet at Tidewall, the Ring of Nine Stones, the doors of the Ninth Night and the span of the Ash Bridge, a woman, a man and someone who gives no answer are each offered a way that only their own gender allows, and **which way depends on whether the hero has climbed as far as the story expects of them there**: 48 hidden choices, one for each gender and for a hero ahead of or behind the realm. A hero ahead gains more cultivation and a little Dao and the way asks the realm; a hero behind gains Insight for reading the room from below. The Elder answers each at once (48 scenarios of five lines), seven more scenes of Books One to Six read rank and gender together in a line, and the scene before the last choice reads the hero’s gender against the last rung and the way they took the ranks.
- **The cast keeps up.** 62 new unprompted remarks (the Elder reads the doors by gender and by how far the hero has climbed, and Ren Qiao, Gu, Lin Yuan, Duan, Hao Lan, Mei Qiu, Bao Er, Lu Yan, Shu Ning, Mengjiao, Ah Zhi, Tian, Qiu, Yue and Odval each say what the ranks have meant to them), a **Ranks panel** that shows the Rank Roads walked at each rung, what the hero yielded, claimed, veiled and lifted, keepers crossed and turnings met, and Elder reports that remember a rung pressed before a keeper who reads sex first.
- **A tenth plot-hole pass: 270 fixed.** 262 shown lines that told every hero something about themselves (117 told every soldier they were “a man who has stood a post”, 117 that they could “tell a levy man by how he drinks”, one called every gentry hero “young master”, four called the hero “a girl”, and 23 lines of the Elder, a trait or a beginning said her, his, he or men to every hero), 5 speeches that began mid-sentence with the speaker lost, and 3 that glued two speeches together. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md). The audit now also fails on conditions that contradict each other.
- **Custom Roads: forty roads, 1,490 more scenes, where gender is the weather of the narrative.** Ten customs of the sect that sort people by gender (the lineage tablets, the teaching mats, the account-books, the cutting of names, the go-betweens’ letters, the speaking stones, the mourning bench, the gentle hands, the weapon rack, the oaths of kin), each with four keepers: a woman who holds the custom as it was handed down, a man who does, a woman who bends it, a man who bends it. **Every approach has a door of custom that opens only to a woman, a man or someone who gives no answer**, with a scene of its own for each, and four picks behind it: keep the custom, bend it, break it in the open, or stand for someone it passes over. The price is not the same for everyone: a woman argues a barred door open with Insight, a man pays in qi for turning down his place and needs a clean name for his word to stand for anyone, someone who gives no answer pays in qi for staying in the middle of the room. The keeper reads the hero’s gender at the entry, in the greeting, twice in the middle of an approach and at the goodbye, reads what the hero did on earlier roads, and says a different parting word to a hero who broke the custom before a keeper who holds it and one who broke it before a keeper who bends it.
- **Gender in the main line: seven turning points and the last choice.** At the gate, the Law Hall, the abyss ledge, the archive bridge, the tribunal’s testimony, the second descent and the sealing night, a woman, a man and someone who gives no answer are each offered a way of meeting the scene that only their own allows, hidden from the others, and the Elder answers at once, in a line by gender and by trust. Eight scenes of Books One to Six echo the hero’s gender (the memorial’s column and margin, what Mengjiao says on the ledge, how the abyss hears the last answer), and the last choice of the story reads the way the hero took the customs most.
- **The Elder and the company react more.** 480 new answers by the Elder (twelve for every Custom Road: a woman, a man or someone who gives no answer, keeping, bending, breaking or standing for another, each in five lines by her trust), 21 more for the turning points, 66 new unprompted remarks (the Elder, and Ren Qiao, Gu, Lin Yuan, Duan, Hao Lan, Mei Qiu, Bao Er, Lu Yan, Shu Ning, Mengjiao, Ah Zhi, Tian, Qiu, Yue and Odval, each on what the hero has done behind the doors), and a **Customs panel** that keeps the tally: kept, bent, broken, stood for, keepers pressed, turnings met as yourself.
- **A ninth plot-hole pass: 777 fixed.** 704 lines and memories nobody could ever see (a realm below Mortal or above Ascendant), 22 lines that told every hero they were a girl, a lady or a madam, or spoke of them as “she”, 45 lines in which two named people changed gender between books (Lian Sheng a woman in Books One to Three and a man in Five and Six; Old Lin a woman and a man) and 6 hugs counted as truth. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md). The audit now fails on a condition no hero can meet.
- **Age: where the story starts, and a clock that runs.** Before the first scene you choose how many years your body carries: **sixteen, twenty-four, thirty-six, fifty-two or sixty-eight**. The years set your opening qi, insight, karma and purse, how quick or patient your cultivation is, how steady you stand against a heart demon, and how the Elder and every keeper read you. The story counts on from there, a year for every ten decisions, and **every realm is a span of years** (Mortal 76, Qi Condensation 110, Foundation 160, Core 250, Nascent Soul 400, Spirit Severing 620, Dao Seeking 950, Ascendant 1,500). A hero within three years of the end of their span is slowed and the Elder says so; a hero past it is slowed more; a breakthrough lengthens the span and says so. An elder who starts at a mortal’s sixty-eight has eight years to find a realm, a youth has sixty and the energy to waste them. The register says the Wanderer is twenty: in canon the black seed spends years where it wakes, so the age is the body’s.
- **Age Roads: forty roads, 1,136 more scenes, where five ages meet eight realms.** Eight waysides, one at every realm from Mortal (the Almshouse Row below the gate) to Ascendant (the Open Sill), each with five roads kept by a girl or boy of sixteen, a young adult of twenty-five, a keeper of thirty-eight, one of fifty-four and one of seventy. Every beat of a road is the keeper’s years set beside the realm’s own. On each road the middle of the second approach has a **door of years** that opens to a hero by how far their age stands from the keeper’s (the same stretch of life, older, younger, or for a youth’s road and an elder’s, far older or far younger), and behind it four picks the Elder answers at once. One of them gives **years back** to a hero with twenty or fewer left, at a realm near the road’s, who can pay in qi; two more (outlast, hasten) ask the realm of the road. Seven turning points of the main line, from the gate to the sealing night, offer one hidden way to a youth, to a hero of middle years and to an elder, six endings read the years, and the hero panel and a new Age panel keep the count.
- **An eighth plot-hole pass: 84 fixed.** One was a canon contradiction the new ages opened (the Wanderer was five on the Sealing Night). 52 were lines in which the Elder told a hero of any age what she did “at your age”. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md).
- **Crossing Roads: forty roads, 1,380 more scenes, where element and craft decide the story.** Five elements meet eight crafts (pill, forge, talisman, array, beast, sword, healing, fate) at forty places, each kept by a keeper who is a woman or a man. Every road has **three doors that open only to who the hero is**: a gender door (a woman’s Sisters’ Bench, a man’s Brothers’ Hall, the Middle Seat of someone who gives no answer), a root door (a kindred, a partial or a deaf root meets the road’s element) and a craft door (the keeper’s own Dao, another Dao, or an open hand). A door is hidden from everyone else. Each pick behind a door has its own price: a woman argues a barred door open with Insight, a man pays the yard’s test in qi, the middle seat asks to be explained, the master’s piece asks Adept mastery. A kindred root **attunes** the hero to an element for good (+6% cultivation speed, +3% for half), the Elder answers every door at once, 69 remarks read the pattern, and the Elder’s five accounts read the hero’s craft, roots and gender.
- **Three gendered side paths (31 scenes).** Behind the Elder’s confession at the memorial: the Left Cloister for a woman, the Right Yard for a man and the Third Door for someone who gives no answer. The same fourteen names are kept three ways, in lullabies, in lanterns and in a Door-book.
- **A seventh plot-hole pass.** See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md).
- **Twelve beginnings, six of them in cultivation.** Besides the river village, the porter, the rogue, the heir, the courier and the exile, you can now begin as the finder of a sealed cave (a Qi Condenser before the first scene), a pill-house apprentice with a half-cooked pill, a roadside lamp-keeper, a hedge-listener’s ward, someone struck by heaven, or the dreamer of a stranger’s breath. Each is nine scenes, each adds its own line to your cultivation speed while its art lasts, each ends its fourth scene on one of four methods, and Elder Su, the keepers and the Cultivation Roads read the method you took.
- **Cultivation Roads: forty roads, 1,074 more scenes.** Ten waysides where the work of a realm is done (the archive roof, the eastern terraces, the mirror cells, the tempering yards, the seat-houses of Qinglian Ford, the tide huts, the Hush shelters, the Glass Sea’s annealing plates, the tribulation landing, the stone thresholds), four roads each, and a night in a retreat. On every road you can **circulate**, **temper**, **comprehend** or **push at the gate**, and Elder Su answers each at once. Circulating asks a realm and gives nothing to a hero far above the road. Tempering costs qi. Comprehending asks insight and gives Dao mastery. A push needs you three-quarters through your realm, and lifts you to the next threshold unless a heart demon holds the door. Keepers read how far through your realm you are, how fast you cultivate, and whether you broke through only lately.
- **283 plot holes fixed.** Eleven beginnings whose door scene the Elder never played on two of four routes, ten sentences shown in up to 200 roads each, 254 hero-trait lines that 200 roads shared among three or four wordings, a heading that never took the hero’s name, and a few smaller slips. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md).
- **Wealth, a pack, holdings and cultivation speed.** Spirit stones are the coin of the whole story. You start with a purse that your papers and your trade set, the sect pays you a stipend while you live on its mountain, and the morning the barge leaves the river steps it stops: from then on you pay your own keep, and a cultivator above Qi Condensation eats stones. Goods in your pack (a lamp, a mat, a charm, a seal) and holdings you lease (a stall, a bench, a cave) quicken your cultivation, a pill carries you over the next realm’s threshold, and a purse too light for your keep makes you Unfed and a fifth slower. Every choice that spends or earns shows its price before you pick it.
- **Talent, Dao and six starting points.** Cultivation now shapes the story. You choose one of eight **talents** (five single roots, mixed, heaven-marked, late bloom) that set your speed, one of nine **Daos** (alchemy, forging, talisman, formation, beast, sword, healing, fate, or the open hand) that give a passive rule and a mastery that grows from Novice to Grandmaster as you walk its roads, and one of six **origins** (the river village, a porter, a rogue, a ruined heir, a Concord courier, a sect’s exile), each with its own prologue, purse and way in. Forty **Dao Roads**, 1,000+ scenes, read your talent, Dao, mastery and origin; the Elder, the companions and the heart demon do too.
- **Witness Roads: forty more roads, 1,020 more scenes.** Ten waysides, from the petitioners’ bench under the Law Hall’s eaves to the alcoves on the stair to the nine doors, each with four keepers who write people down: a bench-clerk, a rope-counter, a copyist of margins, a water-clock keeper, a hull-registrar, a knot-reader, a note-tuner, a watcher of the seventh door. Each road is 25 scenes in its own words, with goods, a lease and a pill on every wayside.
- **A cast that reacts to what you did, not only to what you chose.** On every Witness Road the keeper reads your karma at the door, the word that has reached them of the Elder (afraid, suspicious, cold, warm, honoured), the manner of your last eight decisions, and how many keepers have already written you down. You can answer in four ways, each at the start of one approach: give the Elder’s name as surety, confess, pay to be forgotten, or ask to hear your own page. **Elder Su answers on the spot**, in a line that depends on her trust, with a memory for what she has heard of you before. 200 new scenarios, 30 new unprompted remarks (the Elder and nine companions), a face-driven line at every hub, and a new line when your karma crosses into a band the road calls dark, unwritten or kind. A “Word on the road” panel keeps the count.
- **The options hold still.** On a desktop the game fills the window: the stage, the options and the side panels each keep a height of their own and scroll inside it, so the options start at the same place on every scene. Measured over a twelve-scene walk, the first option sat anywhere in a 253-pixel band before and in none after (see below). Notices moved into the stage bar so they cannot push anything.
- **42 more plot holes fixed.** 31 choices whose tone contradicted the act (a hug that counted as a lie), 9 lines of broken wording, and 2 remarks that could never be said. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md). The audit now finds the last kind itself.
- **63 price labels fixed.** See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md). The fourth pass found 63 Fortune Road labels naming a different price from the one the purse paid, and says plainly that this is well short of 1,000.
- **Forty Fortune Roads, 1,025 more scenes.** Ten new waysides, one at each of ten places the main line stops, from the stalls at the foot of the gate stair to the fair at the foot of the mountain. Each has four roads of 25 scenes, each written in its own words: twenty situations, a hidden route, a way back, and a keeper who sells one good and leases one holding. Prices follow the road’s realm. A pill is sold only to a hero of the road’s realm, a lease only to a hero who has it, and the job a mortal cannot do pays three days’ wages to a hero who can.
- **Accounts on the road.** Five short scenes stop the company at the river steps and the gates of Books Three to Six to count: the Elder reads your realm against what the road expects, notes if you are Unfed or quick, and lets you spend, share or sit the night. Each of the seven endings closes on the purse and the holdings.
- **Goods that stand in for a realm.** At three of Book Six’s wards a charm, a seal or a shard of glass takes the place of one realm. Each is used up by the choice that spends it.
- **1,743 more plot holes fixed.** See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md). 1,678 are lines a player read twice in one walk of a road (the generated roads gave the same menu line and the same second paragraph to every scene of an approach), and 64 contradict the story’s setting, the hero’s realm, dress or purse. The ledger says which is which.
- **Make your character.** Before the first scene you choose a name, the papers you travel under (outcast, commoner, gentry, noble), what you wear, your looks, the life you led since the river village, and your gender. Each is something an NPC can see, and each changes what they say: the gate disciple reads your dress and papers, Elder Su comments on you every few decisions (22 observations by 5 attitudes, plus one for each stretch of your cultivation), 66 companion remarks wait for the right person to be met, and every keeper on the new roads reads your dress, birth, trade, face and manner. None of it changes what you can do. Cultivation does that.
- **Standing.** Papers and dress set a floor, and every realm adds two, so a Foundation Builder born an outcast already outranks a mortal prince. Some doors open to standing alone.

- **Visual novel stage.** Each choice clears the screen to the new beat. Earlier text stays out of view until you open the backlog.
- **No Continue. Every scene fits one screen.** A scene’s body text, every extra paragraph and every NPC interjection included, stays at 200 words or fewer, and so does every NPC line. There are no page turns: a long stretch of the story is broken into scenes, and each scene ends in choices. The test suite fails if a cap is broken or a scene has no heading.
- **Coloured choices.** Every decision has one of six tones: truth (jade), mercy (sky blue), inquiry (gold), deceit (violet), force (cinnabar) and quiet (grey). Each option wears its colour and names its tone, and a legend above the options explains them, so colour is never the only cue.
- **Four or more options at every decision.** Options with unmet requirements stay visible, marked, and explain what is missing.
- **The realm matters, more.** Forceful choices in Book One now ask the realm of their chapter, and a mortal who forces a ward pays for it. Forty new realm roads in Books Two to Six bar their deep approach below the road’s realm, charge for a reach above it, offer a lesser way to a traveller who is not equal to the place, and have their keepers greet a hero a realm below, at or above the road differently.
- **The realm matters.** Cultivation is paced across six books and gates the story. Routes lock behind a realm (the Ash Bridge bows only to Spirit Severing, the abyss doors read only Dao Seeking), a choice tagged “beyond you” costs cultivation, qi and the Elder’s respect if you take it too early, and a deed far below your realm earns mastery. Every hub has a night of meditation. Seven endings depend on realm, the nine cards, the friends you kept and your karma.
- **Cultivation.** You arrive as a **Mortal**. Every decision earns cultivation points (patience, study, truth and mercy earn more than force or lies), and enough points break you through eight realms: Mortal, Qi Condensation, Foundation Establishment, Core Formation, Nascent Soul, Spirit Severing, Dao Seeking and Ascendant. A breakthrough is logged on the stage and the Elder remarks on it. From Core Formation on, a heart demon holds back anyone whose karma has sunk below −30. Realms open a locked “cultivator’s way” at the crisis of every side road, and the Elder answers a cultivator differently from a mortal.
- **Forty realm roads, 1,020 more scenes.** Ten waysides open from the hubs of Books Two to Six (tollhouses, a lamp exchange, a Garrison bell, a ship fused in the Glass Sea, a teahouse on the mountain road). Each road is 25 scenes written in its own words: twenty situations, a hidden route and a way back.
- **Forty side roads, 1,010 new scenes.** Ten waysides branch off the main line, one per chapter from the gate to the sealing night, and each offers four roads. A road has an entry, four approaches of five scenes (each approach has its own tone), a hidden route of three scenes behind a high enough Insight, and a return scene that reports to the Elder. Every road is built from a short spec in `src/story/roads/` plus shared wording, so adding a road means adding one entry.
- **A reactive Elder.** Elder Su has 98 scenarios. Each one has five lines chosen by her trust level, and every one has at least one memory override that reads what the player has done. Earlier choices override lines through memory flags, so a lie in Chapter One comes back later. She remembers what she has just heard, and she keeps count of the tones you choose: after three of your last four decisions share a tone, she names that manner once. Her respect for you now matters too: when it moves into a new band (contempt, unregarded, weighed, respected), she says so. Her panel shows her read of you, her attitude, her mood and her stats. She speaks unprompted when her suspicion, fear, a pattern in your past choices or a run of tones crosses a threshold, and in the return scenes of the side paths. She also reads your cultivation: she comments on mortals at the Law Hall and the abyss, names each breakthrough, answers a cultivator’s confession or threat differently from a mortal’s, and remarks on how many roads you have walked. Each road report has memory lines for the secret you found, the relic you kept, a run of lies, many roads walked and a cultivator’s standing.
- **Twelve side paths.** Seven were already in the story: the herb market, the pavilion of stone wagers, the lantern stair, the sister’s shrine, the sparring court, the bell foundry and the ferry of still water. Five are new: the foothill village where Gu Hanzhen was born, the quarry under the archive where the jade was cut, the healer’s hall where the calm dust is made, the old master on the eastern peak, and the rope bridge over the Cloud Gap. Each of the five branches into four approaches, has a hidden route, rejoins the main line, and ends with a report to the Elder.
- **Multiple endings.** Five endings depend on trust, respect, insight, and your choices. One refusal ends the story early.
- **Saves in your browser.** Progress is written to `localStorage` after every choice. Storage errors never stop play. Saves from before the Elder kept a reaction history, or before decisions had tones, still load.

![Scene with no Continue](docs/screenshots/02-no-continue-desktop.png)

### Rank Roads, and realm and gender in the main line

![A wayside of four keepers: the roll-yard behind the scroll-room](docs/screenshots/160-roll-yard-wayside-desktop.png)
![The door of rank, shown to a woman below the rung: the keeper reads her rung first, and the Elder says her word](docs/screenshots/161-door-of-rank-woman-below-the-rung-desktop.png)
![The same kind of door, a man at the rung](docs/screenshots/162-door-of-rank-man-at-the-rung-desktop.png)
![The same kind of door, for someone who gives no answer, above the rung](docs/screenshots/163-door-of-rank-someone-above-the-rung-desktop.png)
![A keeper who reads rank first meets a woman above the road’s rung](docs/screenshots/164-keeper-reads-rank-first-desktop.png)
![A keeper who reads sex first meets the same woman at the same road](docs/screenshots/165-keeper-reads-sex-first-desktop.png)
![A claim is locked below the rung and the lift is marked as beyond the hero](docs/screenshots/166-claim-locked-below-the-rung-desktop.png)
![The Elder answers a woman who claims her rung, at once](docs/screenshots/167-elder-answers-a-woman-who-claims-her-rung-desktop.png)
![The scroll-room: a way only a woman ahead of the story is offered](docs/screenshots/168-main-line-turning-a-woman-ahead-of-the-story-desktop.png)
![The masters’ dais: a way only a man behind the story is offered](docs/screenshots/169-main-line-turning-a-man-behind-the-story-desktop.png)
![The Ranks panel keeps the tally](docs/screenshots/170-ranks-panel-desktop.png)
![The door of rank on a phone](docs/screenshots/171-door-of-rank-on-a-phone-mobile.png)
![The scene before the last choice reads who the hero has been](docs/screenshots/172-the-last-rung-reads-who-you-have-been-desktop.png)

```mermaid
flowchart TD
  W["wayside hub: 8 of them, one rung each, Mortal to Ascendant"] --> R["road: one rung x one keeper, 37 scenes"]
  K["four keepers: woman reads rank first, man reads rank first,<br/>woman reads sex first, man reads sex first"] --> R
  R --> B["hero below, at or above the road’s realm:<br/>glance, greeting and fourth beat read the band"]
  R --> D["door of rank, middle of every approach"]
  D --> DW["woman’s scene"] & DM["man’s scene"] & DU["scene for someone who gives no answer"]
  DW & DM & DU --> X["keeper meets the hero by band<br/>(rank-first and sex-first read the same hero two ways)"]
  X --> P{"four picks"}
  P --> YI["yield"] & CL["claim: realm of the road + price by gender"] & VE["veil"] & LI["lift: strain below the road"]
  YI & CL & VE & LI --> E["Elder answers at once: 12 scenarios x 5 lines by trust"]
  YI & CL & VE & LI --> F["flags: rk_pick_<way>_, rk_door_, rk_clash_, rk_ease_"]
  F --> RP["Ranks panel"]
  F --> RM["62 remarks: Elder and company"]
  F --> LS["scene before the last choice reads the way taken most"]
  CL & LI --> RR["report: clash or ease first, then the door"]
```

```mermaid
flowchart LR
  T1["scroll-room"] --> T2["sutra door"] --> T3["masters’ dais"] --> T4["Round Hall"] --> T5["fleet at the Wall"] --> T6["Ring of Nine Stones"] --> T7["doors of the Ninth Night"] --> T8["span of the Ash Bridge"]
  T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 --> H{"hero ahead of the story’s realm, or behind it?"}
  H -->|ahead| HA["hidden way for a woman, a man or no answer:<br/>asks the realm, more cultivation, a little Dao"]
  H -->|behind| HB["hidden way for a woman, a man or no answer:<br/>reads the room from below, Insight"]
  HA & HB --> E["Elder answers: 3 genders x 2 standings x 5 trust lines + a tail for the room"]
  HA & HB --> C["flag rk_main_<gender>_<scene>: counted for two remarks and the Ranks panel"]
```

### Custom Roads, and gender in the main line

![A wayside of four keepers: the tablet rooms behind the Memorial Hall](docs/screenshots/140-custom-roads-wayside-tablet-rooms-desktop.png)
![The keeper reads a woman at the entry](docs/screenshots/141-keeper-reads-a-woman-desktop.png)
![The same keeper reads a man](docs/screenshots/142-keeper-reads-a-man-desktop.png)
![The door of custom, shown to a woman and no one else](docs/screenshots/143-door-of-custom-woman-desktop.png)
![The same door, a man’s scene](docs/screenshots/144-door-of-custom-man-desktop.png)
![The same door, for someone who gives no answer](docs/screenshots/145-door-of-custom-unspoken-desktop.png)
![The Elder answers a woman who breaks the custom, at once](docs/screenshots/146-elder-answers-a-woman-who-breaks-the-custom-desktop.png)
![A man breaks the custom before a keeper who bends it](docs/screenshots/147-elder-answers-a-man-before-a-keeper-who-bends-desktop.png)
![The Customs panel keeps the tally](docs/screenshots/148-customs-panel-desktop.png)
![The gate: a way only a woman is offered](docs/screenshots/149-gate-a-way-only-a-woman-is-offered-desktop.png)
![The Elder answers at once](docs/screenshots/150-gate-the-elder-answers-desktop.png)
![The Law Hall: the Elder answers someone who gives no answer](docs/screenshots/151-law-hall-the-elder-answers-someone-who-gives-no-answer-desktop.png)
![The last choice reads who the hero has been](docs/screenshots/152-the-last-choice-reads-who-you-have-been-desktop.png)
![A child no longer says “bad lady” to every hero](docs/screenshots/153-bad-person-no-longer-bad-lady-desktop.png)
![A line that said “madam” to every hero now says “sir” to a man](docs/screenshots/154-sir-for-a-man-where-the-line-said-madam-desktop.png)
![The door of custom on a phone](docs/screenshots/155-door-of-custom-on-a-phone-mobile.png)

```mermaid
flowchart TD
  W["wayside hub: 10 of them, one custom each"] --> R["road: one custom x one keeper, 37 scenes"]
  K["four keepers: woman holds, man holds, woman bends, man bends"] --> R
  R --> D["door of custom, middle of every approach"]
  D --> DW["woman’s scene"] & DM["man’s scene"] & DU["scene for someone who gives no answer"]
  DW & DM & DU --> P{"four picks"}
  P --> KE["keep"] & BE["bend"] & BR["break in the open"] & ST["stand for the passed-over"]
  KE & BE & BR & ST --> E["Elder answers at once: 12 scenarios x 5 lines by trust"]
  KE & BE & BR & ST --> F["flags: cs_pick_<way>_, cs_door_, cs_clash_, cs_ease_"]
  F --> CP["Customs panel"]
  F --> RM["66 remarks: Elder and company"]
  F --> KW["keepers on later roads read the word of you"]
  F --> LS["last choice of the story reads the way taken most"]
  KE & BE & BR & ST --> RP["report: clash or ease first, then the door"]
```

```mermaid
flowchart LR
  G["gate"] --> L["law hall"] --> A["abyss ledge"] --> B["archive bridge"] --> T["tribunal testimony"] --> D["second descent"] --> S["sealing night"]
  G & L & A & B & T & D & S --> H["hidden way for a woman, a man or someone who gives no answer"]
  H --> E["Elder answers: 3 genders x 5 trust lines + a tail for the room"]
  H --> C["flag cs_main_<gender>_<scene>: counted for two remarks"]
  S --> LS["last choice: reads gender and the way taken most"]
```

### Age, years and the Age Roads

![Twelve beginnings and now five ages: the creation screen](docs/screenshots/120-creation-age-desktop.png)
![What sixty-eight years begin with: preview and notes](docs/screenshots/121-creation-age-preview-desktop.png)
![An elder at the gate: eight years left at a mortal’s span, and a way of meeting the gate only the old are offered](docs/screenshots/122-elder-gate-turning-point-desktop.png)
![A youth at the gate: the other way](docs/screenshots/123-youth-gate-turning-point-desktop.png)
![The Age Roads’ wayside: five keepers of five ages](docs/screenshots/124-age-roads-wayside-desktop.png)
![The keeper reads a hero many years older than they are](docs/screenshots/125-keeper-reads-your-years-desktop.png)
![The door of years: the same stretch of life, with the years left read aloud](docs/screenshots/126-door-of-years-elder-desktop.png)
![The Age panel: years against the span the realm allows](docs/screenshots/131-years-panel-desktop.png)
![Past the years the realm allows: the keeper says so, and the hero panel turns amber](docs/screenshots/127-past-your-years-desktop.png)
![A breakthrough lengthens the span](docs/screenshots/128-breakthrough-lengthens-years-desktop.png)
![A youth at the keeper of seventy](docs/screenshots/129-youth-at-the-elder-keeper-desktop.png)
![The door of years on a phone](docs/screenshots/130-door-of-years-mobile.png)

```mermaid
flowchart TD
  A["age: 16 · 24 · 36 · 52 · 68"] --> S["opening numbers and speed"]
  A --> C["clock: a year for every ten decisions"]
  R["realm"] --> L["span of years: 76 ... 1,500"]
  C --> W{"years left"}
  L --> W
  W -->|"3 or fewer"| SL["slowed, the Elder and keepers say so"]
  W -->|"none"| PA["past the years: slowed more"]
  B["breakthrough"] -->|"lengthens the span"| L
  A --> AR["Age Roads: 8 waysides, 40 roads, 1,136 scenes"]
  AR --> D["door of years: same age, older, younger"]
  D --> Y["picks: years given, outlast, hasten ask the realm"]
  Y -->|"years"| L
  A --> T["seven turning points of the main line"]
```

### Crossing Roads, gender and the roots

![A wayside of four roads](docs/screenshots/100-crossing-hub-desktop.png)
![The gender door, shown to a woman and no one else](docs/screenshots/101-gender-door-woman-desktop.png)
![A woman at the forge](docs/screenshots/102-gender-woman-forge-desktop.png)
![A man at the same forge](docs/screenshots/103-gender-man-forge-desktop.png)
![Someone who gives no answer, at the same forge](docs/screenshots/104-gender-unspoken-forge-desktop.png)
![A kindred root attunes to fire, and the Elder answers](docs/screenshots/105-root-attunes-fire-desktop.png)
![The keeper lets a colleague in](docs/screenshots/106-craft-colleague-desktop.png)
![The Left Cloister](docs/screenshots/107-left-cloister-desktop.png)
![The Right Yard](docs/screenshots/108-right-yard-desktop.png)
![The Third Door](docs/screenshots/109-third-door-desktop.png)
![The Crossings panel](docs/screenshots/110-crossings-panel-desktop.png)
![Attunement in the cultivation speed](docs/screenshots/112-attunement-speed-desktop.png)
![The same scene on a phone](docs/screenshots/111-gender-woman-forge-mobile.png)

```mermaid
flowchart TD
  W["wayside hub: 10 of them, one element each"] --> R["road: one element x one craft, 25 scenes"]
  R --> G["gender door, middle of approach one"]
  R --> T["root door, middle of approach two"]
  R --> C["craft door, middle of approach three"]
  G --> GW["woman: Sisters' Bench"] & GM["man: Brothers' Hall"] & GU["no answer: Middle Seat"]
  T --> RK["kindred root"] & RP["partial root"] & RF["deaf root"]
  C --> CO["same Dao"] & CX["another Dao"] & CN["open hand"]
  GW & GM & GU & RK & RP & RF & CO & CX & CN --> E["Elder answers at once, by trust and by what the hero is"]
  RK & RP & RF --> A["attunement: +6 or +3 speed, once per element"]
  E --> F["flags: remarks, report, accounts at the five reckonings"]
```

### Twelve beginnings and the Cultivation Roads

![Twelve beginnings on the creation screen](docs/screenshots/90-twelve-beginnings-desktop.png)
![What a beginning adds to your start](docs/screenshots/91-cave-preview-notes-desktop.png)
![The method: the dead cultivator’s two halves](docs/screenshots/92-cave-method-desktop.png)
![The dreamer’s first night, on a phone](docs/screenshots/93-dream-beginning-mobile.png)
![The last pill of a dead pill-maker](docs/screenshots/94-furnace-last-pill-desktop.png)
![A Cultivation wayside hub](docs/screenshots/95-cultivation-hub-desktop.png)
![On the cusp: the push is open](docs/screenshots/96-on-the-cusp-desktop.png)
![The push, answered at once, and a breakthrough](docs/screenshots/97-push-at-the-gate-desktop.png)
![A circuit sat, and the Elder’s answer](docs/screenshots/98-circulate-elder-answers-desktop.png)

```mermaid
flowchart TD
  B["twelve beginnings"] --> M["method chosen in the fourth scene"]
  B --> L["Law Hall door: the Elder reads the beginning"]
  M --> L
  L --> W["Cultivation wayside<br/>10 hubs, 40 roads, 25 scenes each"]
  W --> C["circulate"] & T["temper"] & D["comprehend"] & P["push at the gate"]
  C & T & D & P --> E["Elder answers at once"]
  P -->|"75 percent through the realm"| G["next threshold"]
  G -->|"karma above the heart demon line"| X["breakthrough"]
  G -->|"below it"| Y["points gather, the realm waits"]
  W --> N["a night in the retreat, once a wayside"]
```

### Witness Roads and a stage that holds still

![The petitioners’ bench: the Elder speaks at the hub](docs/screenshots/70-witness-hub-desktop.png)
![The keeper reads a dark name](docs/screenshots/71-keeper-reads-a-dark-name-desktop.png)
![The Elder answers at once when her name is given](docs/screenshots/72-vouch-the-elder-answers-desktop.png)
![A confession](docs/screenshots/73-confess-desktop.png)
![A silence bought](docs/screenshots/74-conceal-desktop.png)
![The page read aloud, by the manner of your last decisions](docs/screenshots/75-the-page-read-aloud-desktop.png)
![Word on the road](docs/screenshots/76-word-on-the-road-desktop.png)
![The Elder notices the road’s word for you](docs/screenshots/77-the-elder-notices-the-road-desktop.png)
![The hub on a phone](docs/screenshots/78-witness-hub-mobile.png)

Options before (left scene is long, the other short, the dashed line marks the first option) and after:

![Before, a long scene](docs/screenshots/80-options-before-scene-5.png)
![Before, a short scene: the options sit 253 pixels higher](docs/screenshots/80-options-before-scene-10.png)
![After, the same long scene](docs/screenshots/80-options-after-scene-5.png)
![After, the same short scene: the options have not moved](docs/screenshots/80-options-after-scene-10.png)

```mermaid
flowchart TD
  H["wayside hub<br/>the Elder’s face speaks"] --> E["road entry: the keeper reads karma"]
  E --> A["four approaches, each opens with a deed"]
  A --> V["vouch: her name"] & C["confess"] & Q["conceal: pay to be forgotten"] & K["ask: hear your page"]
  V & C & Q & K --> S["Elder answers at once<br/>5 lines by trust, 4 memories"]
  S --> F["flag per road: wr_vouch_, wr_confess_, wr_conceal_, wr_ask_"]
  F --> R["remarks and later keepers count them"]
  F --> P["Word on the road panel"]
  K --> M["keeper reads the tone of your last 8 decisions"]
  A --> W["Elder word, manner, roads met: read in the middle scenes"]
  W --> RT["return: what the keeper will tell the next traveller"]
  RT --> RP["report: memory lines ahead of the rest"]
```

### Talent, Dao and origin

![Creation: origin, talent and Dao](docs/screenshots/60-creation-origin-talent-dao-desktop.png)
![An exile breaks through, and the talent and Dao are named in the log](docs/screenshots/61-exile-breakthrough-desktop.png)
![A ruined heir’s creation](docs/screenshots/62-creation-heir-desktop.png)
![The heir’s prologue](docs/screenshots/63-heir-prologue-desktop.png)
![A courier’s prologue on a phone](docs/screenshots/64-courier-prologue-mobile.png)

```mermaid
flowchart LR
  O["Origin (6)"] --> P["Prologue scene"] --> G["gate"]
  O --> W["starting purse"]
  T["Talent (8)"] --> V["cultivation speed, realm-gated"]
  D["Dao (9)"] --> R["passive rule"]
  D --> M["mastery: Novice to Grandmaster"]
  M --> DR["40 Dao Roads"]
  T --> DR
  O --> DR
  T --> HD["heart-demon karma line"]
```

### Your character

![Character creation](docs/screenshots/28-creation-desktop.png)
![Character creation on a phone](docs/screenshots/29-creation-mobile.png)
![The gate disciple reads a noble in silk](docs/screenshots/30-gate-noble-silk-desktop.png)
![The same gate for an outcast in armour](docs/screenshots/31-gate-outcast-armour-desktop.png)
![Elder Su reads the hero](docs/screenshots/32-elder-reads-the-hero-desktop.png)
![A companion reads the hero](docs/screenshots/33-companion-reads-the-hero-desktop.png)
![Hero panel on a phone](docs/screenshots/40-hero-panel-mobile.png)

```mermaid
flowchart LR
  C["Creation screen"] --> H["Hero: name, papers, dress, looks, trade, gender"]
  H --> G["gate and Law Hall echoes"]
  H --> A["Elder’s asides, by attitude"]
  H --> R["companion remarks"]
  H --> K["keepers on the realm roads"]
  H --> S["standing = papers + dress + 2 per realm"]
  S --> L["locked choices that open to standing"]
```

### Purse, pack, holdings and speed

![Character creation, with the purse and the speed a trade adds](docs/screenshots/41-creation-purse-desktop.png)
![The first Fortune Road wayside](docs/screenshots/42-fortune-hub-desktop.png)
![Prices on the choices, and a pill sold only to Qi Condensation or above](docs/screenshots/43-price-tags-desktop.png)
![After buying a pill: the pack and the lighter purse](docs/screenshots/44-bought-pill-desktop.png)
![A lease, at its full price](docs/screenshots/45-lease-desktop.png)
![A tool bought: the speed line in the log and the speed by part](docs/screenshots/46-tool-speed-desktop.png)
![A pill carries the hero over the threshold](docs/screenshots/47-pill-breakthrough-desktop.png)
![The almoner’s last count: the stipend ends at the river steps](docs/screenshots/48-almoners-last-count-desktop.png)
![Unfed on the road: the warning and the slower speed](docs/screenshots/49-unfed-reckoning-desktop.png)
![A charm in the pack opens the Ash Bridge to a Nascent Soul](docs/screenshots/50-charm-at-the-ash-bridge-desktop.png)
![An ending that reads the holdings](docs/screenshots/51-ending-holdings-desktop.png)
![A late road, priced for Dao Seeking](docs/screenshots/52-late-road-prices-desktop.png)
![The purse panel on a phone](docs/screenshots/53-purse-panel-mobile.png)

```mermaid
flowchart TD
  P["purse<br/>spirit stones"] --> BUY["buy goods, lease holdings"]
  W["wages, the job a mortal cannot do,<br/>sales, the hidden route"] --> P
  S["sect stipend<br/>until the river steps"] --> P
  BUY --> PK["pack and holdings"]
  PK --> SPD["cultivation speed<br/>100 + trade + tools + holdings"]
  PK --> PILL["a pill for the next realm"]
  UF["living cost after the river steps"] --> P
  P -->|"too light"| UN["Unfed: −20%"]
  UN --> SPD
  SPD --> CUL["cultivation points"]
  PILL -->|"within 15% of the threshold"| BRK["breakthrough"]
  CUL --> BRK
  BRK --> RLM["realm: roads priced, locked and read by it"]
```

```mermaid
flowchart LR
  subgraph Mountain["Book One: on the mountain"]
    W1["gate-stair stalls"] --> W2["almonry and pawn row"] --> W3["merit exchange"] --> W4["bell-step night market"] --> W5["departure sale"]
  end
  W5 --> R1["almoner’s last count<br/>stipend ends"]
  R1 --> W6["clerks’ bazaar, Qinglian"]
  W6 --> W7["Tidewall quays"] --> R2["accounts at the river mouth"]
  R2 --> W8["caravan ground"] --> R3["last inn before the grass"]
  R3 --> W9["glass-shore yards"] --> R4["counting-house at the grass edge"]
  R4 --> W10["fair at the foot"] --> R5["reckoning at the foot of the road"]
  R5 --> END{{"seven endings, each reading the purse and the holdings"}}
```

### The realm roads

![Below the road’s realm](docs/screenshots/34-realm-road-below-desktop.png)
![At the road’s realm](docs/screenshots/35-realm-road-at-desktop.png)
![A door that needs more standing](docs/screenshots/36-realm-road-standing-desktop.png)
![The crisis: the cultivator’s way and the reach](docs/screenshots/37-realm-road-crisis-desktop.png)
![A wayside](docs/screenshots/38-realm-wayside-desktop.png)
![Realm tags on a Book One force choice](docs/screenshots/39-book-one-realm-tags-desktop.png)

```mermaid
flowchart TD
  E["road entry"] -->|"approach 1, 2"| O["open to anyone"]
  E -->|"approach 3"| M["asks the road’s realm; below it, you pay"]
  E -->|"approach 4"| D["barred below the realm"]
  E -->|"below the realm"| H["the lesser way"]
  O & M & D & H --> C["crisis: cultivator’s way needs the realm, the reach needs one more"]
  C --> R["report to the Elder: she reads how far above or below the road you stood"]
```

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

### Realm gates, strain and endings

![A realm tag on a choice that is beyond you, and a gate that is locked](docs/screenshots/22-realm-tags-desktop.png)
![The strain line after forcing a ward above your realm](docs/screenshots/23-strain-desktop.png)
![The final choice, mostly locked, for a Foundation cultivator](docs/screenshots/24-endings-locked-desktop.png)
![The same choice for a Dao Seeking cultivator with nine cards](docs/screenshots/25-endings-open-desktop.png)
![Ending: The Nine Verbs](docs/screenshots/26-ending-nine-verbs-desktop.png)
![Book Six hub on a phone](docs/screenshots/27-book-six-hub-mobile.png)

```mermaid
flowchart LR
  B1[Book I<br/>Foundation] --> B2[Book II<br/>Core Formation]
  B2 --> B3[Book III<br/>Nascent Soul]
  B3 --> B4[Book IV<br/>Spirit Severing]
  B4 --> B5[Book V<br/>Dao Seeking]
  B5 --> B6[Book VI<br/>bridge, archive, abyss, sealing]
  B6 --> E{{seven endings<br/>by realm, cards, bonds, karma}}
```

### Cultivation and the side roads

![You begin as a Mortal](docs/screenshots/14-mortal-opening-desktop.png)
![The first wayside](docs/screenshots/15-wayside-desktop.png)
![A cultivator’s way is locked to a mortal](docs/screenshots/16-road-crisis-locked-desktop.png)
![The cultivator’s way, open at Qi Condensation](docs/screenshots/17-cultivators-way-desktop.png)
![Breakthrough to Qi Condensation, with the Elder’s remark](docs/screenshots/18-breakthrough-desktop.png)
![A heart demon blocks Core Formation](docs/screenshots/19-heart-demon-desktop.png)
![The Elder reacts to a road report](docs/screenshots/20-report-reaction-desktop.png)
![Cultivation panel on a phone](docs/screenshots/21-cultivation-mobile.png)
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
| `npm test` | Story integrity, choice tones, scene and line caps, respect and NPC reactions, side paths, the 3,000 road scenes, cultivation realms, the purse, pack, holdings and speed, all 120 roads walked for repeats and the 40 Fortune Roads walked in full, saves |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next.js rules) |
| `npm run word-count` | Words written so far, by chapter and side path, against the 1,000,000-word goal |
| `npm run check` | The validator and the continuity audit (dangling flags, dead conditions, time loops) |
| `npx tsx scripts/audit-slots.ts` | Counts the Book One road lines whose old wording did not fit what it named (686) |
| `npm run simulate -- 40 diligent` | Random-walks the story (`thorough`, `diligent`, `forceful`, `hasty`, `merchant`) to find soft-locks and report realm, ending, purse and speed |

## Project layout

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for diagrams of the engine, turn flow, choice tones, the scene cap, the NPC attitude, respect, manner and memory models, the side path map, the chapter map and the scenario table.

```
src/engine/      pure story logic: state, tones, cultivation realms, the purse, pack, holdings and speed, NPC reactions and memory, validation, saves, word counting
src/story/       chapters, side paths, the generated side roads, the realm roads, the Fortune Roads, the accounts on the road, and the Elder’s scenarios (content lives here)
src/components/  React UI: the stage, the tone legend, the NPC, cultivation, purse and stats panels
app/             Next.js routes, layout and styles
tests/           vitest suites
scripts/         word count, story check, simulator
```

## Status

The engine, NPC system, cultivation realms, visual novel UI, six books and their endings are in place and playable from the first scene to seven endings. Every scene stands on its own: no page turns, a heading on every scene, four or more tone-tagged choices at every decision, and a 200-word cap on every scene body.

The story has 14,277 scenes and about 71,000 choices, with 1,979 NPC scenarios and 625 unprompted remarks. The word count is 4,914,495, which is **491.4%** of the 1,000,000-word goal. The count adds up every variant of a line that can be shown (every dress, birth, realm and gender a keeper can react to), so it overstates what one playthrough reads. See [docs/PLOT_HOLES.md](docs/PLOT_HOLES.md): the tenth pass fixed 270 lines, of which 262 told every hero something about themselves that only some heroes are, and the ledger says plainly which is which and that it is well short of 1,000.

The side roads of Book One are assembled from templates and read more uniformly than the hand-written chapters. The Book V finale and Book VI are compact (about 8,000 words) next to the sixteen-arc hubs before them, and are the obvious place to add more. The books and the canon are described in [docs/CANON.md](docs/CANON.md). Adding content means adding an arc under `src/story/books/<book>/`, registering it in `src/story/books/index.ts`, and running `npm run check`.
