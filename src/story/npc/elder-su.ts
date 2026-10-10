import type { NpcProfile, NpcScenario } from "@/engine/types";

export const elderSu: NpcProfile = {
  name: "Elder Su Wanru",
  title: "Elder of the Law Hall, Azure Cloud Sect",
  description:
    "Stern, precise and grieving in private. She weighs every word against the Law and against the memory of a sister she has never forgiven herself for losing.",
};

/**
 * Fifteen scenarios. Each has five tier lines (hostile → devoted) and optional
 * memory overrides for things the player did earlier in the story.
 */
export const elderSuScenarios: Record<string, NpcScenario> = {
  GIFT_HERB: {
    id: "GIFT_HERB",
    summary: "The player offers a spirit herb as a gift.",
    delta: { trust: 4, suspicion: -2 },
    lines: {
      hostile: "A bribe at my gate. Take your moss-leaf back before I decide it is an insult to the Law Hall.",
      wary: "Spirit herbs buy many things in this sect, Wanderer. My attention is not one of them. Keep it until you have a reason to give it.",
      neutral: "Thoughtful. A gift at the gate tells me you know manners. Set it on the table. I will decide later what it means.",
      warm: "Frostleaf, and fresh. You remembered that a Law Hall burns through qi. Sit. We will talk while it steeps.",
      devoted: "You bring me frostleaf in the rain, unasked. Few outer disciples have ever thought of me as a person rather than a gate. I will remember this.",
    },
  },
  HONEST_ACCOUNT: {
    id: "HONEST_ACCOUNT",
    summary: "The player tells the truth about what they saw.",
    delta: { trust: 8, suspicion: -6 },
    lines: {
      hostile: "Honesty from a suspect is only the first move of a deceiver. Say it again, slower, so I can measure every word.",
      wary: "You tell me the truth as though it costs you nothing. Truth always costs something. I will check your account against the altar stones.",
      neutral: "Plain speech. I can work with plain speech. Go on, and do not dress it up with flattery.",
      warm: "Thank you. Most people caught between a sect and their own guilt choose a comfortable story. You chose the true one.",
      devoted: "I believed you before you finished. That is a dangerous habit for an elder, and I have decided to keep it anyway.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "lied_about_seal" }],
        line: "You lied to me once already. Now the truth arrives at my hall, late and unasked. I will weigh it, but I will not forget the first lie.",
      },
    ],
    remember: ["told_truth"],
  },
  LIE_ABOUT_SEAL: {
    id: "LIE_ABOUT_SEAL",
    summary: "The player denies taking the Sealing Jade.",
    delta: { trust: -10, suspicion: 12 },
    lines: {
      hostile: "Liar. The Sealing Jade hums when a false heart stands near it, and yours is humming like a struck bell. Tell me again.",
      wary: "Your voice is steady. Your hands are not. I will not call you a liar yet, but I will not call you innocent either.",
      neutral: "I hear your denial. Denials are cheap, Wanderer, and the Law Hall has heard a great many of them.",
      warm: "I want to believe you. Be careful that I do not believe you too easily, or the sect will pay for my kindness.",
      devoted: "If you say you did not take it, then someone else did. I will look for them with you, and I will not let my faith in you blind me.",
    },
    remember: ["lied_about_seal"],
  },
  THREATEN: {
    id: "THREATEN",
    summary: "The player threatens the elder or the sect.",
    delta: { trust: -12, fear: 6, suspicion: 8 },
    lines: {
      hostile: "You threaten an elder in her own hall. That mistake is now written in three ledgers, and the rain outside is already listening.",
      wary: "Threats are a language I understand well. Choose yours carefully; some of them carry your own name.",
      neutral: "Bold. A threat means you believe you have something to bargain with. Let us see what it is, and whether I am willing to pay.",
      warm: "You threaten me, then look ashamed of it. I think you were frightened for someone, and it came out sideways.",
      devoted: "Threatening me to protect the sect's secret is the wrong way to save it, but I hear what it cost you to say it. Who are you really protecting?",
    },
  },
  SHOW_MERCY: {
    id: "SHOW_MERCY",
    summary: "The player spares the rival disciple Gu Hanzhen.",
    delta: { trust: 9, respect: 6, fear: -4 },
    lines: {
      hostile: "You let the boy go while holding the jade? Mercy is a luxury for those who can afford to lose. You are not one of them.",
      wary: "You spared Gu Hanzhen. I will hear why, but I do not trust the feeling that made you do it.",
      neutral: "A merciful choice. The Law Hall will ask whether it was wise. I will ask whether it was yours.",
      warm: "You let him run. Good. Mercy that costs you something is the only kind I believe in.",
      devoted: "You spared the boy I was ready to condemn. I was prepared to be wrong about him, and you made me glad to be wrong.",
    },
    remember: ["spared_gu"],
  },
  STEAL_SCROLL: {
    id: "STEAL_SCROLL",
    summary: "The player takes the Heavenly Scroll from the ancestors' shelf.",
    delta: { trust: -14, respect: -8, suspicion: 14 },
    lines: {
      hostile: "The Heavenly Scroll is missing from the memorial shelf, and you are wearing its dust. Hand it back, or the Law Hall will take it from your ribs.",
      wary: "The scroll is gone and your sleeve bulges where it should not. I will not accuse you before I see it with my own eyes.",
      neutral: "A theft in the memorial hall. That is an insult to the ancestors before it is a crime against the sect.",
      warm: "I know you took the scroll for a reason. Tell me the reason, and I will hear it before I judge the thief.",
      devoted: "You took the scroll from the ancestors' shelf. Only someone desperate, or very brave, would do that. Which are you?",
    },
    remember: ["stole_scroll"],
  },
  REVEAL_DEMONIC_QI: {
    id: "REVEAL_DEMONIC_QI",
    summary: "The player channels demonic qi in front of the elder.",
    delta: { trust: -8, fear: 14, suspicion: 10 },
    lines: {
      hostile: "Black lotus in your meridians. The Law Hall's sword is already leaving its scabbard, and I am not certain I will stop it.",
      wary: "I felt that qi. It tastes of the Crimson Abyss, and I was taught never to trust a taste like that.",
      neutral: "The aura around you is wrong. Hide it, or explain it. Either way, I will be watching the path it takes.",
      warm: "You reached for demonic qi in front of me and then stopped yourself. I saw you stop. That counts for something.",
      devoted: "The black lotus bloomed in your meridians, and you let it wither. I have never seen anyone do that. Be careful; the next bloom may not wait for you.",
    },
    remember: ["demonic_glimpsed"],
  },
  ASK_FORBIDDEN_ART: {
    id: "ASK_FORBIDDEN_ART",
    summary: "The player asks about the forbidden Blood Lotus Sutra.",
    delta: { trust: -4, fear: 5, suspicion: 6 },
    lines: {
      hostile: "You ask about the Blood Lotus Sutra inside the Law Hall. Do you know what becomes of people who hear that name spoken here?",
      wary: "The Sutra is forbidden for a reason, Wanderer. Tell me why you want it, and I will tell you the price.",
      neutral: "The Blood Lotus. Few ask so directly. The answer is long, and you will not like all of it.",
      warm: "You want to understand the forbidden, not wield it. That is a rarer wish. I will teach you what the Law Hall fears in it.",
      devoted: "You ask about the Blood Lotus the way a student asks about a wound: to learn how to heal it. I will tell you what I know, though it hurts me to remember.",
    },
    remember: ["asked_forbidden"],
  },
  INSULT_SECT: {
    id: "INSULT_SECT",
    summary: "The player mocks the Law and the sect.",
    delta: { trust: -11, respect: -12, suspicion: 4 },
    lines: {
      hostile: "You call our Law a cage in the Law Hall itself. That cage has held the sect for three hundred years. Walk out before it closes.",
      wary: "You mock the sect and expect me to laugh along. I will not. The Law is imperfect, but it keeps our disciples alive.",
      neutral: "Sharp words, sharper than they needed to be. Still, the criticism has an edge of truth, and I will not pretend I did not hear it.",
      warm: "You call the Law a cage. I have said the same thing in private for twenty years. Do not say it in public, but know you are not alone in thinking it.",
      devoted: "A cage, you say. Then I am its keeper, and I have been counting the bars for years. Tell me which bar you would open.",
    },
    remember: ["insulted_sect"],
  },
  HONOR_ANCESTORS: {
    id: "HONOR_ANCESTORS",
    summary: "The player kneels before the ancestral tablets.",
    delta: { trust: 6, respect: 8, suspicion: -3 },
    lines: {
      hostile: "You kneel before the ancestors with the look of a thief who has not decided yet. Your piety is a costume, and I can see the seams.",
      wary: "You honour the ancestors. Good. Now honour the living, and tell me what you did in their hall before you knelt.",
      neutral: "Respect for the dead is the first lesson of this sect. You learned it at the gate, or at least you pretended to.",
      warm: "The ancestors heard you kneel. So did I. My grandfather taught me the dead forgive faster than the living, and I am beginning to believe him.",
      devoted: "You knelt before my family's tablet. Some of the names there are mine, and you have honoured them more than my own sister ever did.",
    },
    remember: ["honored_ancestors"],
  },
  REFUSE_TASK: {
    id: "REFUSE_TASK",
    summary: "The player refuses the Law Hall's mission.",
    delta: { trust: -10, respect: -10, fear: -2 },
    lines: {
      hostile: "You refuse the Law Hall's command? Then your name is struck from the register while you still stand here.",
      wary: "You refuse. I expected it from someone like you. Leave the gate quietly, and perhaps I will forget your face.",
      neutral: "You refuse the task. I will record your refusal honestly. Choose your road with your eyes open.",
      warm: "You say no to me. Few have dared, and fewer have meant it with such care. Tell me your reason, and perhaps I will find another path for you.",
      devoted: "You refuse, and I can see it hurts you more than it hurts me. Then it is my duty to offer another way, not to punish the refusal.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "stole_scroll" }],
        line: "You refuse me now, after you stole from my shelves. Even a thief has a dao to keep. Yours is leaving this hall while you still can.",
      },
    ],
    remember: ["refused_mission"],
  },
  COMPLETE_TASK: {
    id: "COMPLETE_TASK",
    summary: "The player returns the Sealing Jade to the Law Hall.",
    delta: { trust: 10, respect: 10, suspicion: -8 },
    lines: {
      hostile: "The Sealing Jade is back in my hand. You did what I asked, and I still do not trust you for a single heartbeat longer than I must.",
      wary: "You brought the jade back. The task is done. Whether you did it honestly remains a question on my ledger.",
      neutral: "The jade is returned. The Law Hall is satisfied for now. Do not mistake satisfaction for forgiveness.",
      warm: "You came back with the jade and your life intact. That was harder than I asked, and you did it anyway. Thank you.",
      devoted: "You returned the Sealing Jade and shouldered the danger alone. I will tell the Law Hall the task was done by someone worthy of its name.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "spared_gu" }],
        line: "You bring back the jade, and you let the boy live. The Law counts the jade. I count the boy, and my count is not as simple as the Law's.",
      },
    ],
    remember: ["completed_mission"],
  },
  EXPOSE_HER_SECRET: {
    id: "EXPOSE_HER_SECRET",
    summary: "The player reveals that the elder's sister, Su Mengjiao, took the jade.",
    delta: { trust: 2, respect: -6, fear: 10, suspicion: 4 },
    lines: {
      hostile: "You dare speak my sister's name in this hall? Her fall was not yours to shame. Get out before I forget I am still an elder of this hall.",
      wary: "You know about Mengjiao. Half the sect whispers the name, and you have said it aloud. What you do next decides whether I break you or bury you.",
      neutral: "So you found the truth in the Abyss. I had hoped no one would speak her name in my hall again. You have spoken it. Now tell me what you want.",
      warm: "You had every reason to keep silent about her. You told me instead, and you did it kindly. I did not know kindness was still possible in this hall.",
      devoted: "Mengjiao. You said her name as though it were a flower, not a crime. Nobody has done that in fifteen years. Thank you for giving her back to me, even for a moment.",
    },
    remember: ["exposed_elder"],
  },
  SWEAR_OATH: {
    id: "SWEAR_OATH",
    summary: "The player swears a Dao oath of loyalty.",
    delta: { trust: 7, respect: 4, suspicion: -4 },
    lines: {
      hostile: "An oath from a liar is a second lie with a heavier name. I will not hear it.",
      wary: "You swear loyalty to the sect and to me. I will hold you to every word, and I will remember each one you fail to keep.",
      neutral: "An oath. The Dao hears oaths, though not always the people who swear them. Speak it plainly and I will listen.",
      warm: "You swear by the Dao to serve this hall. I believe you mean it, and that is the first oath I have believed without wanting proof.",
      devoted: "Swear, then. I have kept my own oath for thirty years, and I would like a companion who keeps theirs too.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "demonic_glimpsed" }],
        line: "I saw black lotus in your meridians when you raised your hand. Swear on the Dao if you wish, but I will watch your breath for the rest of your life.",
      },
    ],
    remember: ["swore_oath"],
  },
  ACCEPT_PUNISHMENT: {
    id: "ACCEPT_PUNISHMENT",
    summary: "The player submits to the Law's judgment without argument.",
    delta: { trust: 3, respect: 6, fear: -3 },
    lines: {
      hostile: "Good. Kneel, and let the Law take its due. There will be no more arguments in my hall today.",
      wary: "You accept the punishment without a word. I wonder whether that is guilt, or simply weariness at being believed by no one.",
      neutral: "Accepting judgment is a discipline few disciples have the patience for. Stand, and we will see what the Law requires.",
      warm: "You take the punishment because you believe the sect needs it. That is the spirit of the Law, and I am proud to see it in you.",
      devoted: "You offer your back to the Law without complaint. I will carry this judgment with you, so that it does not break you alone.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "exposed_elder" }],
        line: "You accept my judgment, yet you spoke my sister's name before the disciples. Accept it, then. Mercy is not owed to a blade that cut so deep.",
      },
    ],
    remember: ["accepted_punishment"],
  },
};
