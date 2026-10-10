import type { Scene } from "@/engine/types";

/** Chapter Three: The Judgment, and the four endings. */
export const chapterThree: Scene[] = [
  {
    id: "judgment",
    title: "Chapter Three: The Judgment",
    paragraphs: [
      "Elder Su rises from the jade chair for the first time since you arrived. She is smaller than you remembered, and sharper. \"The Law has a single question,\" she says. \"What will you do now that you know the truth?\"",
      "The Law Hall is silent. Outside, the mist is moving up the mountain, slow and patient, as if it has all the time in the world.",
    ],
    choices: [
      {
        id: "plead_mercy",
        label: "Plead for Gu's pardon and your own, on the strength of what you have done.",
        next: "ending_redeemed",
        requires: [{ kind: "npc", metric: "trust", min: 15 }],
        lockedHint: "Requires Elder Su's trust of 15 or more.",
      },
      {
        id: "accept_exile",
        label: "Accept exile in silence and walk back down the mountain.",
        next: "ending_exile",
      },
      {
        id: "seize_jade",
        label: "Seize the Sealing Jade and flee into the Crimson Abyss.",
        next: "ending_fallen",
        effects: [{ kind: "setFlag", flag: "seized_jade" }],
      },
      {
        id: "claim_seat",
        label: "Claim the Law Hall's seat as her successor.",
        next: "ending_sovereign",
        requires: [
          { kind: "npc", metric: "respect", min: 40 },
          { kind: "stat", stat: "insight", min: 30 },
        ],
        lockedHint: "Requires respect 40+ with the elder and insight 30+.",
      },
    ],
  },
  {
    id: "ending_redeemed",
    title: "Ending: The Law Remembers Mercy",
    paragraphs: [
      "Elder Su listens to your plea without interrupting. When you finish, she takes the Sealing Jade from its tray and sets it back into the cracked altar in the Law Hall. \"Mercy is not a crack in the Law,\" she says. \"It is the thing the Law was built to hold.\"",
      "Gu Hanzhen is released into the care of the sect. You are assigned to repair the abyss seal under her eye, and the mist recedes by a single pace each season. The sect does not forgive quickly, but it does not forget the one who stood in the rain and told the truth.",
    ],
    choices: [],
    ending: "Ending: The Law Remembers Mercy",
  },
  {
    id: "ending_exile",
    title: "Ending: The Long Road Down",
    paragraphs: [
      "The Law Hall strikes your name from the register without ceremony. The gate disciple holds the umbrella for you on your way out, and this time it is large enough for both of you. He does not look you in the eye.",
      "You walk down the mountain with your pack on your back. Behind you, the Crimson Abyss breathes on in the cleft, and the Sealing Jade stays in the altar it was always meant for. Somewhere in the valley, you begin to wonder whether Elder Su ever stopped being the sister she lost.",
    ],
    choices: [],
    ending: "Ending: The Long Road Down",
  },
  {
    id: "ending_fallen",
    title: "Ending: The Black Lotus Blooms",
    paragraphs: [
      "The Sealing Jade is warm in your hand, and it does not hum for you. Instead, the mist in the abyss rises to meet you, and the black lotus opens in your chest. The power is intoxicating. You feel every meridian in your body singing, and you do not notice when the singing turns into a scream.",
      "Elder Su is the last person who will speak your name in the sect. She speaks it once, to the wind on the mountain, and then she closes the Law Hall's doors for good.",
    ],
    choices: [],
    ending: "Ending: The Black Lotus Blooms",
  },
  {
    id: "ending_sovereign",
    title: "Ending: The Keeper of Bars",
    paragraphs: [
      "Elder Su gives you the ledger, the comb, and the chair of pale jade without a word. The bars of the Law are yours to count now. You count them every night, and some nights you open one. Gu Hanzhen becomes your steward. Su Mengjiao's name is carved back into the memorial, beside the others, and no one is allowed to say it aloud unless they have earned the right.",
      "The mist no longer rises from the abyss. Whether that is because you hold the seal, or because you have finally learned what it costs to hold anything at all, the sect does not ask.",
    ],
    choices: [],
    ending: "Ending: The Keeper of Bars",
  },
];
