import type { Scene } from "@/engine/types";

/**
 * What the hero carries out of the story. Each of the seven endings reads the purse and the holdings, so a hero who spent the
 * road trading, leasing and saving does not close the book as one who walked it with an empty sleeve. The endings sit close to the
 * scene cap, so each of these is one short line.
 */
const EPILOGUE: Record<string, { rich: string; poor: string; held: string }> = {
  end_nine: {
    rich: "Your heavy purse is empty by the time the verbs are said, and you have never been richer.",
    poor: "You carry out only what you carried in. The verbs ask for no purse.",
    held: "Your leases go on paying long after you stop counting, with the verbs written under them.",
  },
  end_listener: {
    rich: "You leave her a purse as heavy as a stone. She keeps it for those who can spend it.",
    poor: "You bring nothing. Mengjiao says the abyss has never taken coin.",
    held: "Your leases pay for the Listener’s lamps for a hundred years, and nobody knows why they burn so steadily.",
  },
  end_ascendant: {
    rich: "You leave a full purse on the step for whoever climbs next.",
    poor: "You cross with an empty sleeve, and the sky asks for nothing.",
    held: "Your leases stay in your name, and what they pay makes the stair easier.",
  },
  end_warden: {
    rich: "You spend a purse that no Warden has carried before on the mist’s lamps.",
    poor: "The Warden is paid in rice and respect, and it is enough.",
    held: "Your holdings pay the wardens’ stipends for a generation. The post is no longer a charity.",
  },
  end_spent: {
    rich: "Your purse buys a good physician, a quiet room and the first full night’s sleep in years.",
    poor: "You have nothing left to pay the physician. It is the one debt you do not mind.",
    held: "Your holdings pay the physician’s bills for the rest of your life.",
  },
  end_hollow: {
    rich: "You sit on a heap of spirit stones and know that none of it was ever yours.",
    poor: "The seat is empty and so is your purse, and the room agrees with both.",
    held: "Your holdings are seized one lease at a time, until only the seat is left in your name.",
  },
  end_ledger: {
    rich: "The ledger lists your purse among its last entries. The sum is correct.",
    poor: "The ledger lists your purse as empty, and everything else as paid.",
    held: "The ledger lists your holdings in a column of their own. They go on paying, unread.",
  },
};

export function economyEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    const text = EPILOGUE[scene.id];
    if (!text) return scene;
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        { when: [{ kind: "holdings", min: 2 }], paragraphs: [text.held], group: "purse" },
        { when: [{ kind: "wealth", min: 150 }], paragraphs: [text.rich], group: "purse" },
        { when: [{ kind: "wealth", max: 4 }], paragraphs: [text.poor], group: "purse" },
      ],
    };
  });
}
