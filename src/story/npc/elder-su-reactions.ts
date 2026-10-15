import type { NpcScenario } from "@/engine/types";

/**
 * Scenarios for choices the Elder used to let pass in silence. Each one has five tier lines
 * and, where it fits, memory overrides that read the flags the player has set and the tone
 * of recent decisions, so she answers a pattern of behaviour as well as a single choice.
 */
export const elderSuReactions: Record<string, NpcScenario> = {
  REQUEST_NIGHT: {
    id: "REQUEST_NIGHT",
    summary: "The player asks for a night to prepare before going down the abyss path.",
    delta: { trust: -1, respect: 1 },
    lines: {
      hostile: "A night to prepare. You have had days to prepare and used them to sleep. Go down at first light, or do not bother coming back up at all.",
      wary: "One night. I will give you that, though you asked for it the way a thief asks for a lamp he has already decided to steal.",
      neutral: "A night is reasonable. Use it well, Wanderer. The abyss does not wait for anyone to finish their tea.",
      warm: "Take the night. I would rather you went down prepared than went down proud. Sleep if you can, and eat something hot.",
      devoted: "Take the night, and do not feel ashamed of asking for it. Even the masters ask for time when the Law sits heavy on them.",
    },
    memory: [
      {
        when: [{ kind: "tone", tone: "quiet", min: 3, within: 4 }],
        line: "You have waited, rested and moved on for four answers together. There is a time for patience, and this is not it. Ask for the night if you must, but do not tell me you are only being careful.",
      },
    ],
  },

  OFFER_TO_FETCH_GU: {
    id: "OFFER_TO_FETCH_GU",
    summary: "The player offers to find Gu Hanzhen alone, without the wardens.",
    delta: { trust: 4, suspicion: -3 },
    lines: {
      hostile: "You offer to fetch a fugitive alone, as though I had never heard a boast from an outer disciple. Go to the abyss and find him if you can. Do not come back to tell me you could.",
      wary: "Alone, and without the wardens. I would like to believe you. Belief is a heavy word for an elder to spend on a stranger.",
      neutral: "You would go alone? Then you carry the whole weight of his capture by yourself. Do not offer a thing you cannot carry.",
      warm: "You would go alone for Gu Hanzhen. He is lucky to have one disciple willing to walk into the mist for him. I will not forget who made the offer.",
      devoted: "Alone, and without asking for a single warden. You are the first outsider in fifteen years to offer me a debt I did not have to order. I accept it.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "knows_gu_name" }],
        line: "You have his name from my gate disciple, and already you offer your own life to bring him back. A stranger who would die for a name {they} heard an hour ago. I do not know whether that is courage or foolishness, and I suspect you do not either.",
      },
    ],
  },

  PLEAD_FOR_PARDON: {
    id: "PLEAD_FOR_PARDON",
    summary: "At the dais, the player pleads for Gu Hanzhen’s pardon and their own.",
    delta: { trust: 3, fear: -2 },
    lines: {
      hostile: "Pleading at the dais. You kneel and beg, and still you believe the Law is a bargain. It is not. Be silent now, and perhaps the silence will count for something.",
      wary: "You plead for your own pardon and for his. A plea is only as strong as the truth beneath it, and I have heard how much truth you have been spending.",
      neutral: "A plea is a plea. I will weigh it against the record, and the record is not kind to either of you.",
      warm: "You plead, and you plead for him before yourself. I will carry that into the hall with me, and it will weigh more than you expect.",
      devoted: "You kneel for a man who could not have saved you. I have judged many pleas. I have never before wanted to answer one with my own voice.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "spared_gu" }],
        line: "You spared Gu once, and now you plead for him. The Law has no word for a debt paid in advance. I will find one before the bell rings again.",
      },
      {
        when: [{ kind: "tone", tone: "deceit", min: 2, within: 4 }],
        line: "You have lied to me twice in four answers, and now you plead. I cannot tell which of the two I am meant to believe, and I think that is exactly what you intended.",
      },
    ],
  },

  ACCEPT_EXILE: {
    id: "ACCEPT_EXILE",
    summary: "The player accepts exile in silence and bows to the sentence.",
    delta: { trust: 2, respect: 3 },
    lines: {
      hostile: "Silence and a bow, as though that settles the account. It does not. Walk down the mountain, and do not think the Law has forgotten your name.",
      wary: "You accept exile without a word of argument. I am not sure whether that is humility or relief, and I do not think you know either.",
      neutral: "Exile, accepted. The sect has always known how to be generous to those it is glad to be rid of.",
      warm: "You take the sentence with your head bowed and your hands open. Exile will be hard. You have made it a little less hard for me to watch.",
      devoted: "I will remember this silence for the rest of my life. It is the only sentence you have spoken today that I would have chosen for myself.",
    },
    memory: [
      {
        when: [{ kind: "tone", tone: "force", min: 2, within: 4 }],
        line: "Force before exile. You are leaving this mountain with the marks of a person who fought the Law for four answers together. I hope the road down is kinder to you than this hall has been.",
      },
    ],
  },

  CLAIM_SEAT: {
    id: "CLAIM_SEAT",
    summary: "The player claims the Law Hall’s seat as the Elder’s successor.",
    delta: { trust: -8, respect: -6, suspicion: 6 },
    lines: {
      hostile: "You claim my seat while I stand in front of you. Do you think the Law is a chair? It is a burden, and you have not yet lifted the first stone of it.",
      wary: "My seat. You speak of it as though I had already died in it. I have not, and you will inherit nothing while I am still breathing.",
      neutral: "You would like the chair. Many have asked, and most of them meant the power rather than the duty. Which do you mean?",
      warm: "You want the seat, and you say so openly, which is at least honest. The duty is heavier than the chair, and I would not wish it on you yet.",
      devoted: "My successor. I did not think an outer disciple would ever say it to my face. Ask me again when you have carried a bell up the stairs.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "exposed_elder" }],
        line: "You exposed me, and now you want my seat. The sect will say you did it for the chair. I will let them say it, because I am not certain you did not.",
      },
    ],
  },

  SEIZE_JADE: {
    id: "SEIZE_JADE",
    summary: "The player seizes the Sealing Jade and flees toward the abyss.",
    delta: { trust: -20, fear: 10, suspicion: 15 },
    lines: {
      hostile: "The jade is in your hands and the mist is at your back. You have made the same choice Gu made, and it will end on the same ledge.",
      wary: "You take the jade and run. I do not hate you for it. I simply no longer expect you to stop before the abyss.",
      neutral: "The seal goes with you. Keep it safe, if you can. The mist does not forgive thieves who carry it too far.",
      warm: "You would run with the jade and still look back at me. I wish you had chosen the hall. The mist has taken better people than you for less.",
      devoted: "You are taking the seal into the mist, and you are doing it for a reason I cannot yet see. I will wait for you to show me the reason, if you come back.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "lied_about_seal" }],
        line: "You lied about the seal, and now you take it. Every choice you have made here is already written in the record. I can read it aloud for you, if you would like to hear how it sounds.",
      },
    ],
  },

  REPORT_WAGER: {
    id: "REPORT_WAGER",
    summary: "The player reports the stone tables behind the herb market and what they did there.",
    delta: { trust: 1, suspicion: -1 },
    remember: ["reported_wager"],
    lines: {
      hostile: "Stone wagers and a boy’s debt, brought to me through the mirror. Go and sit in whatever cell the Law keeps for people who gamble with its time.",
      wary: "The pavilion behind the stalls. Tang’s tables are not mine to close, but you have brought me the sound of them. I have not yet decided what to do with the sound.",
      neutral: "Tiles and a debt. The Law has no quarrel with a game of chance. Its quarrel is with the people who count the chance for the house.",
      warm: "You went to the stone tables where the outer court loses its coin, and you came back to tell me so. I am glad of the report, though I would rather you had not gone.",
      devoted: "The pavilion behind the stalls, and a boy who owes a debt he could not have paid. You went to see it for yourself. Few of my disciples walk anywhere the Law has not already marked.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "paid_bo_lan" }],
        line: "You spent your own coin on a stranger’s debt. The Law would call that foolish. I can find no fault in it, and I have looked.",
      },
      {
        when: [{ kind: "flag", flag: "broke_tang_table" }],
        line: "You broke the house’s table in front of its boys. The Law Hall hears of every broken table within a day. You have made yourself a rumour again, and this time it has your name in it.",
      },
      {
        when: [{ kind: "flag", flag: "cheated_at_tiles" }, { kind: "flag", flag: "confessed_loaded_tile" }],
        line: "You loaded a tile, and then you confessed it. I notice that you can keep a winning and a confession in the same breath, and I have not yet decided which of the two I find more troubling.",
      },
      {
        when: [{ kind: "tone", tone: "force", min: 2, within: 4 }],
        line: "Force at the stone tables, and force again on the stairs. You have been loud in the outer court for four answers together. Loud people are easy to find, and easier still to remember.",
      },
      {
        when: [{ kind: "tone", tone: "mercy", min: 2, within: 4 }],
        line: "Mercy at the tables is rarer than cheating, and it has cost you more. I will remember the boy’s name, though I will not say it aloud in the Law Hall.",
      },
    ],
  },
};
