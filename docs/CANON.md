# Canon

The facts the story keeps, so that a scene written in Book Five agrees with one written in Book One. When two scenes disagree, this page decides. The `docs/plot-holes.md` ledger lists the contradictions that were fixed against it.

## Timeline

| When | What |
| --- | --- |
| Long ago | The founders of the Azure Cloud Sect strike a name from Heaven’s Ledger to hide it. The page they tear out becomes the **Crimson Abyss**. |
| 16 years ago | The masters give a nameless child of the Orphans’ Terrace a **black seed**, a reserve seal in case Su Mengjiao fails. This child is the Wanderer. |
| 15 years ago | **The Sealing Night.** Fourteen disciples are sent down the abyss path, each order signed by the Registrar, Su Wanru (28). Su Mengjiao (24) is sealed by the masters alone. Wanru writes her own name beneath the fourteenth and not Mengjiao’s. Lin Yuan’s mother refuses to witness the fifteenth order and is expelled the week after. Wanru smuggles the reserve child out of the sect with a nurse. |
| 12 years ago | Wanru becomes Elder of the Law Hall. |
| The week before the story | Mengjiao, who has kept the seal for fifteen years by speaking the names, comes up through the mist and takes the upper half of the Sealing Jade from the altar. She puts it into the hands of Gu Hanzhen on the ledge and tells him to keep it for someone who will speak first. |
| Day one | The Wanderer climbs the mountain in the rain. |

## Facts that must not move

- **The sealed.** Fifteen were sealed. Fourteen are on the Law Hall’s ledger, signed by Wanru. The fourteenth is a girl of fifteen who says she was never dead, only listening. The fifteenth is Su Mengjiao, sealed by the masters’ seal alone.
- **The Elder.** Su Wanru is 43. She was Registrar on the Sealing Night and has been Elder for twelve years. She is afraid of heights. She keeps two ledgers: the Law’s sentences, and what she felt when she signed.
- **Mengjiao.** Four years younger than Wanru. Braid, silver comb, a wordless tune. She believes the abyss is grieving, not hungry. The price of the Blood Lotus is not a name but the listener: whoever hears must keep listening.
- **The Sealing Jade.** Whole on the Sealing Night. The masters split it: the upper half stayed in the altar, the lower half went down the path with Mengjiao, and a small shard was kept in the vault under the Ash Archive. The jade is a piece of the **Ledger Stone**, on which Heaven’s Ledger is copied.
- **Mortals.** A Mortal has no gathered qi but can draw a thread of raw breath-qi, enough to put out a lantern or read a mark. Qi Condensation is the first gathered qi.
- **The Wanderer** carries a cold black seed in the chest, from childhood. It lets them live in the mist. They were raised by a teacher in a river village who told them nothing, and they have no name they will say.
- **Ren Qiao** is 32. He held the lantern for the fourteen when he was 17, and was taught qi by Mengjiao in the outer courtyard.
- **Gu Hanzhen** is 19. His brother Gu Hanming was taken by the levy in the year of the Sealing, when Hanzhen was four. His mother Gu Yunxia keeps a tea stall in the foothill village.
- **Lin Yuan** is 17, the child his mother was expelled for. He keeps the keys of the Ash Archive.

## The world

**Heaven’s Ledger** is where every cultivator who rises is written. To ascend, you must be written. A name that is written cannot be unmade; a name that is struck out falls to the **Unwritten**, a place beneath the world reached through *wounds* where a page was torn. The Crimson Abyss is such a wound.

**The Blood Lotus Sutra** is the art of listening to the Unwritten. It was never a weapon. The **black lotus** is a seed that lets its bearer survive the Unwritten and carry names back out of it. The founders feared it, and the Law is what they built to forbid it.

**The Concord of Nine Peaks** keeps the sects in order. Its **Censors** audit Names. **The Hollow Lotus** is a cult of the struck-out who want to be written back, or to unwrite Heaven. **Heaven’s Clerk** is whatever writes.

## Cast

| Name | Who | Voice |
| --- | --- | --- |
| Su Wanru | Elder of the Law Hall; the reactive NPC | Dry, exact, ashamed of her own kindness |
| Su Mengjiao | Her sister, the Listener | Warm, tired, amused |
| Gu Hanzhen | Outer disciple | Earnest, rough from disuse |
| Ren Qiao | Warden of the Ash Bridge | Few words, a soldier’s courtesy |
| Lin Yuan | Keeper of keys | Apologetic, precise, braver than he knows |
| Old Lin | Lamp keeper under the sutra stair | Salty, patient |
| Hu Jingyan, Lian Sheng | Masters of the Law | Scholar’s menace; Lian is the hard one |
| Duan Wuyi | Censor-General | Principled, courteous, wrong in ways that cost people |
| Yue Zhaoning | Smuggler captain of the River Provinces | Quick, wry, loyal to the people she chooses |
| Hui Niang (Madam Ash) | Leader of the Hollow Lotus | Gentle. A former Censor |

## The books

Each book after the first is a region and a hub. The player chooses which arcs to walk, and the climax of the book opens once enough of them are done. An arc is about forty scenes: an entry with four approaches, a hidden route, and a close that reads what the player did.

1. **The Crimson Abyss** (Book One): the Azure Cloud Sect.
2. **The River of Ledgers**: the Censors, the Concord, Qinglian Ford. The Elder is summoned, and the Reserve is named.
3. **The Drowned Library**: the Salt Coast. Where struck names wash up. The Concord decides to seal the abyss by sacrifice.
4. **The Ash Steppe**: the Listeners, the Hollow Lotus, the first Listener’s tomb. What the founders did.
5. **The Glass Sea and the Heavenly Stair**: ascension, and what the Ledger costs.
6. **The Last Sealing**: the return to Azure Cloud, and the ending.

## Conventions for writers

- Scene ids use the arc’s prefix: `censors_entry`, `censors_a1s3`. Flags use the same prefix. A flag nothing reads is a defect; `npm run audit` fails on it.
- Every scene has four or more choices, a heading, and 200 words or fewer of body text. Alternatives in a group count once.
- A companion appears with `bond:id` effects. A choice that changes a bond should be one the companion would notice.
- Do not state a secret before the scene that reveals it.
- Do not use a bare name before the character is introduced.
