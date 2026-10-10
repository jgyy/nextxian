import type { NpcProfile, NpcScenario } from "@/engine/types";

export const elderSu: NpcProfile = {
  name: "Elder Su Wanru",
  title: "Elder of the Law Hall, Azure Cloud Sect",
  description:
    "Stern, precise and grieving in private. She weighs every word against the Law and against the memory of a sister she has never forgiven herself for losing.",
};

/**
 * Forty-four scenarios. Each has five tier lines (hostile → devoted) and optional
 * memory overrides for things the player did earlier in the story, for what she has
 * just heard from them (`said`), or for the tones of their recent decisions (`tone`).
 * Seven more are in `elder-su-reactions.ts`. Attitude shifts and unprompted
 * interjections live in the engine and in the scenes.
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
    memory: [
      { when: [{ kind: "tone", tone: "deceit", min: 2, within: 3 }], line: "A gift from a liar. I will take the herb, because it is fresh, and I will test it for poison before I forget what you were like at the gate." },
    ],
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
      {
        when: [{ kind: "said", scenario: "HONEST_ACCOUNT", min: 2 }],
        line: "This is the third time you have told me the truth in this sect. I believed the first two. I am beginning to think you will keep doing it, and that frightens me more than a lie would.",
      },
      { when: [{ kind: "tone", tone: "force", min: 2, within: 3 }], line: "You have raised a blade in your voice twice in three answers, and now you tell me the plain truth. I believe you. I do not believe the blade has gone home with it." },
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
    memory: [
      {
        when: [{ kind: "said", scenario: "HONEST_ACCOUNT", within: 1 }],
        line: "You told me the truth a moment ago, and now you take it back. I can hold one of those answers, Wanderer. I cannot hold both of them at once.",
      },
      { when: [{ kind: "tone", tone: "deceit", min: 3, within: 4 }], line: "Another lie. I have stopped checking your words one at a time. You lie in patterns now, and a pattern is easier for an elder to hear than a single lie. I can hear this one from across the hall." },
    ],
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
    memory: [
      {
        when: [{ kind: "said", scenario: "THREATEN", min: 2 }],
        line: "Threats again. This is the third time you have reached for the same weapon. I am beginning to think it is the only one you own, and that you are afraid to set it down.",
      },
      { when: [{ kind: "tone", tone: "quiet", min: 3, within: 4 }], line: "You have said nothing and moved a great deal for four answers together. Now you threaten me. Silence followed by a threat is a pattern I would prefer not to learn." },
    ],
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
    memory: [
      {
        when: [{ kind: "said", scenario: "THREATEN", within: 1 }],
        line: "You threatened me, and then you spared him. Mercy that follows a threat is still a threat that has decided to wait. I will remember which one came first.",
      },
      { when: [{ kind: "tone", tone: "mercy", min: 3, within: 4 }], line: "Mercy again. Most of your recent answers have been sparing, pleading or kneeling. The Law will call that weakness, and I am beginning to suspect it is the one thing you own that the Law does not. Keep it, and keep your eyes open." },
    ],
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
    memory: [
      {
        when: [{ kind: "flag", flag: "sneaked_in" }],
        line: "You came in by the side gate, and then you reached for the scroll on the ancestors’ shelf. A thief who sneaks in is still a thief. Put it down while you still can, Wanderer, because I will not ask a second time.",
      },
    ],
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
    memory: [
      {
        when: [{ kind: "tone", tone: "force", min: 3, within: 4 }],
        line: "You have answered me with force three times running, and now you call the black lotus in front of me. I no longer have to guess what you will do next. That is the most frightening thing about you.",
      },
    ],
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
    memory: [
      { when: [{ kind: "tone", tone: "inquiry", min: 3, within: 4 }], line: "You have been asking, reading and searching for four answers together. Now you ask me about the sutra. Put the question you are really here to ask, and stop circling the pit." },
    ],
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
    memory: [
      {
        when: [{ kind: "said", scenario: "INSULT_SECT", min: 1 }],
        line: "You mocked the Law once already, and now you do it again in the same hall. The first insult was a mistake. The second is a habit, and habits are what the Law was built to punish.",
      },
    ],
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
    memory: [
      {
        when: [{ kind: "flag", flag: "stole_scroll" }],
        line: "You stole from these tablets, and now you kneel before them. Penance is not innocence. The dead can tell the difference, even if the Law cannot.",
      },
    ],
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
    memory: [
      {
        when: [{ kind: "said", scenario: "ASK_TABLET", within: 5 }],
        line: "You asked me about the painted name, and now you say her name aloud in my hall. The memorial has heard you both. So have I, and I did not stop either of you.",
      },
    ],
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
  PLEAD_FOR_CLERK: {
    id: "PLEAD_FOR_CLERK",
    summary: "The player promises to keep the clerk and his mother out of the ledgers.",
    delta: { trust: 3, respect: 4, fear: -2, suspicion: -2 },
    lines: {
      hostile: "A clerk’s mercy, bought with my archive’s keys. Mercy you cannot afford to give is only theft in a kinder voice.",
      wary: "You plead for the keeper of my keys. I will decide whether his mother’s name stays out of my ledger, not you.",
      neutral: "You speak for a clerk. Noted. The archive has many keepers, and most of them never ask what they are protecting.",
      warm: "You would shield a frightened boy and his mother’s name. I did the opposite once, and I have counted that sin every night.",
      devoted: "You promise a clerk his mother’s peace. That is the promise I should have made fifteen years ago, and did not.",
    },
    remember: ["protected_clerk"],
    memory: [
      {
        when: [{ kind: "flag", flag: "stole_scroll" }],
        line: "You stole from my shelves and then spoke for a clerk. The archive has keepers and thieves, and I cannot always tell which one you are being in any given hour.",
      },
    ],
  },
  REPORT_LETTER: {
    id: "REPORT_LETTER",
    summary: "The player reports the sister’s letter and the Index card.",
    delta: { trust: 4, respect: 2, fear: 4, suspicion: -3 },
    lines: {
      hostile: "A letter from the mist, carried to me by a thief. Every word of it is an accusation, and you have made me read them aloud.",
      wary: "You bring me my sister’s words and call them evidence. I will read them, but I do not believe you have brought me the whole.",
      neutral: "The letter and the card. Thank you for the report. Keep the rest of your opinions for a time when I ask for them.",
      warm: "You bring me the letter and the card in the same breath. You knew how much it would hurt, and you brought it anyway.",
      devoted: "The letter that was held from me for fifteen years. You put it in my hands. I will not forget who did.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "burned_letter" }],
        line: "You tell me about my sister’s letter after you tried to burn it. The ash in your sleeve is still telling a different story from your mouth.",
      },
    ],
    remember: ["reported_letter"],
  },
  REPORT_LEDGER: {
    id: "REPORT_LEDGER",
    summary: "The player asks about the Elder’s signature on the sealing orders.",
    delta: { trust: -2, respect: 3, fear: 6, suspicion: 4 },
    lines: {
      hostile: "You question my signature in my own hall, with my own witnesses listening. Get out before I answer you with the ledger.",
      wary: "You question my name on the sealing orders. Be careful. Every name in that ledger is also a name on your own account.",
      neutral: "You want to know why my signature stands beside fourteen names. The answer is long, and you will not like the first half.",
      warm: "You noticed the signature. Most people look at the names and never at the hand that wrote them. You looked at the hand.",
      devoted: "You asked about the hand that signed the Sealing. Nobody has asked me that in fifteen years. Thank you for looking at me.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "copied_signature" }],
        line: "You copied my signature stroke by stroke, the way a thief copies a seal. Do not forge my name, Wanderer. I have done enough of that for both of us.",
      },
    ],
    remember: ["asked_about_signature"],
  },
  WITHHOLD_LETTER: {
    id: "WITHHOLD_LETTER",
    summary: "The player claims the archive was empty and the card was lost.",
    delta: { trust: -7, respect: -4, fear: 2, suspicion: 9 },
    lines: {
      hostile: "The archive was empty? The card was lost in smoke? You lie to me in the hall of the Law, where the bell keeps its own accounts.",
      wary: "Empty, you say. Nothing of Mengjiao remains. I have heard that same silence from every warden who ever lied to me.",
      neutral: "You report nothing, and I do not believe nothing. Keep your secret. Someday it will want to be spoken, and you will have to let it out.",
      warm: "You want to shield me from her name. That was kind, and it was also a lie, and I think you know which part hurt me more.",
      devoted: "You kept the letter from me to spare my heart. I would rather have it broken by the truth than mended by your silence.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "read_letter" }],
        line: "You read my sister’s last words, and then you tell me the archive was empty. I know what you read. I know the difference between silence and a lie.",
      },
    ],
    remember: ["withheld_letter"],
  },
  CONFESS_FIRE: {
    id: "CONFESS_FIRE",
    summary: "The player confesses to starting the fire in the stacks.",
    delta: { trust: 2, respect: 6, fear: 4, suspicion: -4 },
    lines: {
      hostile: "You set fire to my archive and confess it in my hall? Then the Law will hear it from you first, and you will not like the sentence.",
      wary: "A fire in the stacks, started by your own hand. You confess it, and I notice you did not confess it sooner. Why not?",
      neutral: "The fire is confessed. The ash is still on your sleeves. Honesty about damage is the first step to repairing it.",
      warm: "You started the fire and then came to tell me yourself. Many would have let the wardens bear the blame. You did not.",
      devoted: "You confessed the fire before anyone asked. That is the courage the archive was built to remember. I will remember it too.",
    },
    remember: ["confessed_fire"],
    memory: [
      {
        when: [{ kind: "flag", flag: "lied_about_seal" }],
        line: "You denied the seal once, and now you confess a fire. I believe the second confession more than I believed the first denial, and I do not like finding that I do.",
      },
    ],
  },
  NIGHT_VISIT: {
    id: "NIGHT_VISIT",
    summary: "The player speaks to the Elder through her window at night.",
    delta: { trust: 5, respect: 1, fear: -3, suspicion: -3 },
    lines: {
      hostile: "You come to my window at night with a riddle and a cold face. Speak plainly, or go back to your bed and never climb to my shutters again.",
      wary: "A visit at night, from a stranger who reads my sister’s letters. I will listen, but I am not yet sure I want you at my window.",
      neutral: "You have something to tell me at this hour. Speak quickly. The night does not keep its secrets as well as the Law does.",
      warm: "You came at night and told me the truth before I asked. I did not expect that from someone who lied to me at the gate.",
      devoted: "You knocked on my shutter at midnight to tell me what my sister wrote. Few would walk across a courtyard for a ghost. You did.",
    },
    remember: ["visited_at_night"],
    memory: [
      {
        when: [{ kind: "said", scenario: "THREATEN", within: 6 }],
        line: "You threatened me in the sutra hall, and now you come to my window at night to tell me the truth. Threats and confidences are a strange pair to carry under one roof. I will hear the confidence first.",
      },
    ],
  },
  SHARD_CALL: {
    id: "SHARD_CALL",
    summary: "The player calls the Elder through the shard held against the bowl.",
    delta: { trust: 3, respect: 2, fear: 8, suspicion: 5 },
    lines: {
      hostile: "The shard speaks in my voice, but it is your hand that holds it. Put it down before it teaches you the lie it taught her.",
      wary: "The shard hummed when you called my name. It has never hummed for me. Tell me what else it has said to you.",
      neutral: "You called me through a broken piece of the seal. I hear you. Do not mistake that for permission to use it again.",
      warm: "You held the shard to the bowl and called me through the water. That is the first time the seal has spoken to me as a sister.",
      devoted: "The shard carried my name down into the mist, and my sister answered it. I thought I had lost that voice forever. Thank you.",
    },
    remember: ["called_through_shard"],
    memory: [
      {
        when: [{ kind: "said", scenario: "JADE_EYE_REPORT", within: 6 }],
        line: "You reported to me through the jade eye, and now you call me through a broken piece of the seal. There are two ways you can speak to me. I do not yet know which one to trust.",
      },
    ],
  },
  JADE_EYE_REPORT: {
    id: "JADE_EYE_REPORT",
    summary: "The player reports what they see in the sutra hall through the jade eye.",
    delta: { trust: 4, respect: 2, fear: 3, suspicion: -4 },
    lines: {
      hostile: "You report to me through the eye like an informer. What you show me is what you want me to see, and I have seen enough.",
      wary: "You speak to my mirror as if you were confessing. Confessions are cheap through glass. Tell me again, to my face, when you come up.",
      neutral: "Your report comes through the jade clearly. The sutra hall is what you say it is, and that is a relief, if little else.",
      warm: "You told me what the sutra hall looked like with nothing held back. I could feel the cold in your words, and I was grateful for the warning.",
      devoted: "You described the red water as though I were standing beside you. For a moment I was. Thank you for letting me see it.",
    },
    remember: ["reported_through_eye"],
    memory: [
      {
        when: [{ kind: "said", scenario: "LIE_ABOUT_SEAL" }],
        line: "You lied to me once already, in my own hall. Now you report to my mirror in the same steady voice. I can hear the difference, even if the mirror cannot.",
      },
    ],
  },
  JADE_EYE_LIE: {
    id: "JADE_EYE_LIE",
    summary: "The player tells the jade eye that the sutra hall is empty.",
    delta: { trust: -6, respect: -3, fear: 2, suspicion: 10 },
    lines: {
      hostile: "The sutra hall is empty? The book is only a book? You lie to my eye, and my eye has never once been wrong about a liar.",
      wary: "You tell me the hall is empty while the book is humming in your hand. I can hear the hum through the jade. You are not as quiet as you think.",
      neutral: "You say the hall is empty. I believe you about as far as I believe anything that comes through a mirror. Be careful with your words.",
      warm: "You lied to me, and then you told me the red water was dangerous. That is a lie for protection, and I forgive you for it, though I should not.",
      devoted: "You told the eye a lie to protect me from something I already knew. That is a gentle kind of lie. I will carry it with me.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "studied_lotus" }],
        line: "You say the book is only a book, and you sat in the reading room and studied its technique line by line. My mirror saw your lips move over the red ink. Do not lie to me twice.",
      },
    ],
    remember: ["lied_to_eye"],
  },
  SUTRA_BURN: {
    id: "SUTRA_BURN",
    summary: "The player proposes burning the Blood Lotus Sutra.",
    delta: { trust: 2, respect: 4, fear: -4, suspicion: -2 },
    lines: {
      hostile: "You propose to burn the Blood Lotus in my presence? You are the fire I should have feared since the day you climbed my steps.",
      wary: "A burning, offered willingly. You want me to see you take the sutra’s part, or to see you destroy it. I cannot tell which.",
      neutral: "Burning the sutra is a proposal the Law has considered for centuries. The Law never did it, because the sutra was the only map of the mist.",
      warm: "You offered to burn the most dangerous book in the sect, and you offered to do it under my eye. That is trust, not theft.",
      devoted: "You want to burn the book that took my sister. Then burn it, and let the mist know we are no longer afraid to forget.",
    },
    remember: ["offered_to_burn"],
    memory: [
      {
        when: [{ kind: "flag", flag: "visited_shrine" }],
        line: "You want the sutra burned, and you have already lit incense for the sister it was written against. Decide whether you are mourning her or condemning her, Wanderer. The fire will not wait for you to decide both.",
      },
    ],
  },
  SUTRA_STUDY: {
    id: "SUTRA_STUDY",
    summary: "The player says they intend to study the forbidden sutra.",
    delta: { trust: -4, respect: 1, fear: 5, suspicion: 7 },
    lines: {
      hostile: "Study the Blood Lotus? In front of me, with the Law’s eye on your hands? You are asking to be struck from the register.",
      wary: "You mean to study the forbidden book. Then the Law will study you. Be careful which pages you choose, and which of them choose you.",
      neutral: "A wish to study. It is the wish that opened the Ash Archive, and I think it will open more doors before this is finished.",
      warm: "You want to understand the sutra. Good. Understanding is a kind of defence, and I would rather you held the knowledge than the blade.",
      devoted: "You will study the sutra so that no one in this sect ever has to fall through its pages alone. Then teach it to me too, when you are ready.",
    },
    remember: ["wants_sutra"],
    memory: [
      {
        when: [{ kind: "tone", tone: "inquiry", min: 3, within: 4 }],
        line: "You have been asking questions in nearly every answer, and now you want to study the sutra itself. A questioner who reads the forbidden page does not come back from it unchanged.",
      },
    ],
  },
  ASK_TABLET: {
    id: "ASK_TABLET",
    summary: "The player asks about the painted-over name on the memorial tablet.",
    delta: { trust: 2, respect: 2, fear: 4, suspicion: -1 },
    lines: {
      hostile: "You ask about my sister’s name in the memorial? Do not touch the stone with that question. I have scraped it enough for one lifetime.",
      wary: "You ask why the name was painted over. The paint is my shame, and you have found it. What will you do with the knowledge?",
      neutral: "The painted name is a question the memorial has asked for fifteen years. You are the first to ask it aloud. Be ready for the answer.",
      warm: "You want to know why the paint was scraped, not who covered it. That is a question a loving sister would ask. I will answer it gently.",
      devoted: "You asked about the painted name as though it still belonged to someone. It does. Thank you for asking her question, and mine.",
    },
    remember: ["asked_about_tablet"],
    memory: [
      {
        when: [{ kind: "said", scenario: "HONOR_ANCESTORS", within: 4 }],
        line: "You knelt at the tablets, and then you asked after the painted name. You bowed to the dead before you asked about them. I notice the order, and I notice that it matters to you.",
      },
    ],
  },
  CHALLENGE_LAW_WITH_ELDER: {
    id: "CHALLENGE_LAW_WITH_ELDER",
    summary: "The player challenges the Law itself in front of the Elder.",
    delta: { trust: -3, respect: 5, fear: 4, suspicion: 4 },
    lines: {
      hostile: "You challenge the Law in front of my own disciples? Then you challenge me, and you will meet the same bell that rang for her.",
      wary: "A challenge to the Law, offered in my hall. Be careful. The Law can forgive a stranger for many things, but never for being right.",
      neutral: "You say the Law can be challenged. Perhaps it can. Show me the flaw, and the Law will decide whether it is one.",
      warm: "You challenge the Law as though it might bend. It might. I have been waiting for someone brave enough to lean on it.",
      devoted: "You would stand against the Law with me, and I would not have to stand alone. That is a gift I did not think I would be given.",
    },
    remember: ["challenged_law_with_elder"],
    memory: [
      {
        when: [{ kind: "said", scenario: "APPEAL_TO_DISCIPLES", within: 6 }],
        line: "You challenged the Law before the disciples, and now you challenge it to my face. A challenge repeated is a campaign, Wanderer. I have fought campaigns, and I know how they end.",
      },
    ],
  },
  ACCEPT_DESCENT: {
    id: "ACCEPT_DESCENT",
    summary: "The player offers to go back down the abyss path.",
    delta: { trust: 6, respect: 5, fear: -3, suspicion: -5 },
    lines: {
      hostile: "Descend again? You would walk into the mist for the sect that signed her away? Go, then, and do not come back proud of it.",
      wary: "You offer to go down the path. I will allow it, but I do not trust a volunteer who wants the mist more than the sect.",
      neutral: "You will go down the path again. Good. The Law respects those who walk back into the danger they helped to cause.",
      warm: "You want to go back down for her. That is the duty I believed the Law once taught. Go carefully, and come back alive.",
      devoted: "You offer to descend a second time for my sister. Then I will walk with you to the top of the path, and no further. I cannot promise more.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "lied_about_seal" }],
        line: "You offer to descend for my sister, after you told me you knew nothing of the seal. I will send you, but I will not believe a word you say on the way down.",
      },
    ],
    remember: ["offered_descent"],
  },
  APPEAL_TO_DISCIPLES: {
    id: "APPEAL_TO_DISCIPLES",
    summary: "The player asks the disciples to answer for the sealed.",
    delta: { trust: -4, respect: 7, fear: 6, suspicion: 6 },
    lines: {
      hostile: "You stand before my disciples and ask them to raise their hands for the fallen. They are not your banner, outsider. They are mine.",
      wary: "You appeal to the crowd for the sealed. The crowd remembers its own sorrow, and it will remember yours too, when it is convenient.",
      neutral: "You speak to the disciples and they listen. That is a power the Law has never trusted, and I am not certain it should.",
      warm: "You asked every disciple who walked the path to lift a hand. Half of them did. I saw my own students among them, weeping quietly.",
      devoted: "You gave the disciples a voice they did not know they had. I should have done that fifteen years ago, when I had the chance.",
    },
    remember: ["appealed_to_disciples"],
    memory: [
      {
        when: [{ kind: "npc", metric: "respect", min: 30 }],
        line: "You speak to the disciples and they listen, and you have earned that with your own words. Do not waste it on a crowd that will forget you by the next bell.",
      },
    ],
  },
  SHOW_SEALING_ORDER: {
    id: "SHOW_SEALING_ORDER",
    summary: "The player reads the masters’ and the Elder’s names from the sealing orders.",
    delta: { trust: -5, respect: 6, fear: 8, suspicion: 5 },
    lines: {
      hostile: "You read the masters’ seals aloud in front of the whole sect, and then you read mine. That is a betrayal I will not forgive in this lifetime.",
      wary: "You show the sealing orders to the disciples. Each name was a sentence. Each sentence was signed by me. I will answer for mine.",
      neutral: "The orders have been read. The Law will now have to decide what kind of hand it wants, and whether it is willing to be seen.",
      warm: "You held up the sealing orders and read every name. That was the hardest thing I have ever watched, and the most honest.",
      devoted: "The orders were read, and my name was read with them. I hoped someone would do that for me. I did not expect it would be you.",
    },
    remember: ["read_sealing_orders"],
    memory: [
      {
        when: [{ kind: "said", scenario: "APPEAL_TO_DISCIPLES", within: 4 }],
        line: "You made them listen, and now you show them the orders. You are not only showing paper now. You are showing the sect what I signed, and they are watching my hand as well as yours.",
      },
    ],
  },
  CHALLENGE_BELL_RULE: {
    id: "CHALLENGE_BELL_RULE",
    summary: "The player strikes or challenges the tribunal bell.",
    delta: { trust: 3, respect: 3, fear: 7, suspicion: 2 },
    lines: {
      hostile: "You strike the bell that was rung over your enemy? It will ring for you next, and I will not stop its voice a second time.",
      wary: "You touch the bell as if it were a common gong. The bell has never answered to anyone who did not carry a seal. Remember that.",
      neutral: "The bell has spoken. You challenged its rule, and it answered as bells do: with a sound that will not be recalled.",
      warm: "You struck the bell for my sister’s name. I felt the sound in my ribs, and for one moment the sect was only a room of listeners.",
      devoted: "You rang the bell for Mengjiao in the Hall of Bells. Fifteen years of silence broke, and she heard it in the mist. Thank you.",
    },
    memory: [
      {
        when: [{ kind: "said", scenario: "SHOW_CASTING_LEDGER", within: 1 }],
        line: "You showed the disciples the names the bells carry, and then you struck the bell itself. You are not challenging the Law, Wanderer. You are challenging the metal that keeps its promises. I hear the difference, and I am afraid of how well you have learned to build a case.",
      },
    ],
    remember: ["challenged_bell"],
  },
  TESTIFY_FOR_GU: {
    id: "TESTIFY_FOR_GU",
    summary: "The player testifies for Gu Hanzhen before the whole sect.",
    delta: { trust: 2, respect: 5, fear: -2, suspicion: -3 },
    lines: {
      hostile: "You testify for the boy who spoke the sect’s secrets to a stranger? Then your voice is the second accusation, and I will weigh it as one.",
      wary: "You stand up for Gu Hanzhen before the whole sect. I hear you. I also see how carefully you chose every word, as if it were a weapon.",
      neutral: "Your testimony for the second accused is recorded. The Law will decide whether his story is true, and whether yours is brave enough to matter.",
      warm: "You spoke for Gu Hanzhen, and you spoke well. The boy’s life is worth more than the bell’s old silence, and you reminded me of it.",
      devoted: "You defended the boy, the sister, and the sect in one breath. I did not believe a single voice could carry so much. Yours did.",
    },
    remember: ["testified_for_gu"],
    memory: [
      {
        when: [{ kind: "flag", flag: "spared_gu" }],
        line: "You spared him, and now you testify for him. The mercy has become a witness, and I did not expect the Law to be asked to listen to one.",
      },
    ],
  },
  WITNESS_SIGNING: {
    id: "WITNESS_SIGNING",
    summary: "The player watches the young Elder sign the sealing order.",
    delta: { trust: -3, respect: 3, fear: 3, suspicion: 2 },
    lines: {
      hostile: "You watched me sign? Then you saw the ink go down, and you saw my hand not shake. Do not expect me to thank you for the sight.",
      wary: "You watched the signing and did not look away. Witnesses are rare in this hall. Most of them close their eyes when the pen moves.",
      neutral: "You witnessed the signing. Then you know what it cost, and you know the Law did not blink when I finished the stroke.",
      warm: "You watched me sign, and you did not turn away. I was so young then. I wish someone had been standing beside me to say stop.",
      devoted: "You stood beside my hand when it wrote my name, and you saw the moment I hesitated. That moment is the only part of the night I am proud of.",
    },
    remember: ["witnessed_signing"],
    memory: [
      {
        when: [{ kind: "tone", tone: "quiet", min: 3, within: 4 }],
        line: "You have stood silent through most of this, and now you watch me sign in silence too. I wonder whether you are a witness or only a bystander, and whether the sect will ever be able to tell the difference.",
      },
    ],
  },
  REFUSE_SEALING: {
    id: "REFUSE_SEALING",
    summary: "The player stops the young Elder’s hand from signing.",
    delta: { trust: 6, respect: 3, fear: -2, suspicion: -4 },
    lines: {
      hostile: "You reach across the altar and stop my hand? You would have the Law fail in front of the masters? Your hand will be the next one they break.",
      wary: "You refused the signing in front of the masters. A brave act, and a foolish one. The masters will remember who stopped the pen.",
      neutral: "You stopped the pen. The ink is still wet, and the Law has a long memory for interruptions. Stay alert, Wanderer.",
      warm: "You put your hand over mine and asked me not to write it. No one had ever done that. It frightened me into the best decision of my life.",
      devoted: "You refused to let me sign my sister’s name away. I did not know I wanted someone to stop me until your hand touched the brush.",
    },
    remember: ["stopped_signing"],
    memory: [
      {
        when: [{ kind: "flag", flag: "watched_from_pillar" }],
        line: "You stood at the pillar and watched the ring close without a word, and now you stop the pen. The witness has become an interruption. The Law does not forgive either, though I find I have forgiven you already.",
      },
    ],
  },
  MENGJIAO_WORDS: {
    id: "MENGJIAO_WORDS",
    summary: "The player speaks Mengjiao’s words or name aloud to the Elder.",
    delta: { trust: 4, respect: 2, fear: 5, suspicion: 2 },
    lines: {
      hostile: "You quote my sister in my hall as though her words were yours to spend. Stop using her voice to hurt me, or I will stop listening.",
      wary: "You speak Mengjiao’s words back to me. I can hear her in your voice, and it unsettles me more than the sutra does.",
      neutral: "You carry my sister’s words. Keep them careful. Words that survive fifteen years in the mist are not easily set down again.",
      warm: "You say my sister’s words gently, the way someone who loved her would say them. That is the closest I have come to hearing her again.",
      devoted: "You speak Mengjiao’s words as if she were still at the top of the stair, laughing at the stars. You have given her back to me for a breath.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "lied_about_seal" }],
        line: "You speak my sister’s words after you lied to me about the seal. Let her go, Wanderer. You have no right to borrow her voice while your own is still lying.",
      },
    ],
    remember: ["spoke_mengjiao_words"],
  },
  REPORT_RUMOR: {
    id: "REPORT_RUMOR",
    summary: "The player repeats a rumour from the herb market to the Elder through the jade-eye.",
    delta: { trust: -3, respect: -2, fear: 4, suspicion: 5 },
    lines: {
      hostile: "Market gossip, carried up my own mountain and handed to me as news. You have made the Law Hall a story for the stalls. Stop repeating it before I have you stopped.",
      wary: "The lane has a long tongue, and you have brought me a piece of it. I will check every word against the wardens’ reports before it shapes a single order.",
      neutral: "A rumour from the market. Rumours are the sect’s weather, Wanderer. I have learned to dress for them, not to believe them. Tell me which part you think is true.",
      warm: "You listened to the lane and then came back to tell me what it said, including the parts that frightened you. Most who go down the market return with nothing but prices.",
      devoted: "The lane’s talk reached you, and you brought it to me instead of letting it rot between the stalls. A mistake repeated honestly is easier to correct than a rumour kept in silence. Thank you.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "spread_rumor" }],
        line: "You repeated the boy’s story loudly in the lane, and now it runs ahead of you up the stairs. Whatever you believe about the mist, you have turned the Law Hall’s fear into a market song.",
      },
    ],
    remember: ["reported_rumor"],
  },
  REPORT_SUPPLIES: {
    id: "REPORT_SUPPLIES",
    summary: "The player reports the frostleaf and charms bought below the gate, through the jade-eye.",
    delta: { trust: 2, respect: 2, fear: -1, suspicion: -3 },
    lines: {
      hostile: "Frostleaf and paper charms. You spend your supplies in my lane and call it preparation. Go down the path and bring back the jade before I start counting your coins.",
      wary: "Supplies, you say. I will check the receipts when you return, and I will check your sleeves for the smell of the lane. Do not make me look twice.",
      neutral: "Frostleaf and charms, with a fair account of both. Good. A disciple who prepares properly is a disciple who comes back to be judged.",
      warm: "You bought what you needed and told me exactly what it cost. I wish more of the sect were so plain about their purses, and so careful about their lungs.",
      devoted: "You report the frostleaf as though it were a gift to me. I will remember the bundle you carried up the mountain, for the Law’s sake, and for mine.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "bartered_talisman" }],
        line: "You traded a charm in the lane and call it supplies. My eye saw the yellow paper before you said a word. Keep your bargains honest, and I will keep mine.",
      },
    ],
    remember: ["reported_supplies"],
  },
  HIDE_MARKET: {
    id: "HIDE_MARKET",
    summary: "The player tells the jade-eye that nothing in the market concerns the sect.",
    delta: { trust: -5, respect: -2, fear: 2, suspicion: 8 },
    lines: {
      hostile: "Nothing in the market concerns the sect? The lane is full of this sect’s name, painted on every charm. You lie to my eye and expect me to look away.",
      wary: "The market was empty of the sect, you say. The market has never once been empty of the sect. I will hear the rest of the story from the stalls, not from you.",
      neutral: "You say nothing below the gate concerns us. Keep telling me that, and I will have to decide whether it is a lie or only a habit of the mountain.",
      warm: "You are shielding the lane from me, or shielding me from the lane. I cannot tell which, and I suspect neither can you. Be careful with that kind of kindness.",
      devoted: "You hid the market from my eye to spare me its noise. I will forgive that once, and I will remember that you tried.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "bartered_talisman" }],
        line: "You bartered for a charm in the lane, then told my eye the market was empty. The yellow paper on your wrist says otherwise. Do not lie to me about small things, Wanderer. The small lies grow.",
      },
    ],
    remember: ["hid_market"],
  },
  REPORT_LAMP_PASSAGE: {
    id: "REPORT_LAMP_PASSAGE",
    summary: "The player tells the jade-eye about the lantern stair, the keeper, and the names on the wall.",
    delta: { trust: 3, respect: 3, fear: 4, suspicion: -2 },
    lines: {
      hostile: "Lanterns under the sutra door, and an old woman who keeps my sister’s name in oil? You went down a stair I never gave you and came back talking about it. Do not lead the Law to the lamps.",
      wary: "The lamp stair, the wick, the names on the wall. You bring me a map of places I have tried hard not to look at. I will decide whether to read it, and I will decide alone.",
      neutral: "The lantern keeper. I had forgotten she was still down there. Thank you for remembering her for me, even if you did it through a mirror.",
      warm: "You went down to the lamps and came back to tell me what the keeper said. That is the kind of report I can use. The Law never listened to the lamps, and it should have.",
      devoted: "Old Lin still keeps a light for my sister. You found her, and you gave me the light back in your own words. Fifteen years, and someone still lights the stair for Mengjiao. I will say it plainly: thank you.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "read_lamp_names" }],
        line: "You read the names on the wall, and then you read them to my mirror. You know which squares are blank now. Keep reading them, Wanderer. The blank ones are where the sect keeps its shame.",
      },
    ],
    remember: ["reported_lamp_passage"],
  },
  REPORT_SHRINE: {
    id: "REPORT_SHRINE",
    summary: "The player tells the Elder about the hillside shrine below the archive.",
    delta: { trust: 4, respect: 2, fear: -2, suspicion: -2 },
    lines: {
      hostile: "A shrine to my sister behind my own archive, built by the disciples I sent away? You are telling me the Law has a back door, and that you walked through it. I will have it bricked up by morning, and you will help the wardens do it.",
      wary: "You found a place where my sister is still named, and you bring it to me as though it were a debt. I will take the debt. I do not yet know whether I want to be paid for it.",
      neutral: "A shrine below the archive. Someone has been burning incense for fifteen years, and the Law Hall never noticed. I find that more shameful than any ledger I have signed.",
      warm: "You went to the place the disciples built for her, and you did not laugh at it. Thank you. One day I will walk down that path myself, once the sect has stopped watching the back of my head.",
      devoted: "Someone lit a light for my sister every year while I kept the Law. You carried that smoke up the stair and set it on my table. I do not know how to thank you without weeping, so I will say it plainly: thank you, Wanderer.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "lit_shrine" }],
        line: "You lit incense for her, and then you told me. A living hand did for her what I would not do. Do not ask me to be grateful for it. I am, but I will not say so in front of the disciples.",
      },
      {
        when: [{ kind: "flag", flag: "took_comb" }],
        line: "You took her comb from the altar, and now you describe the shrine to me as though you had only looked at it. Give the comb back, or tell me plainly that you will keep it. I can bear a theft. I cannot bear a careless account of one.",
      },
    ],
    remember: ["reported_shrine"],
  },
  SHOW_CASTING_LEDGER: {
    id: "SHOW_CASTING_LEDGER",
    summary: "The player shows the disciples the names poured into the bells, from the casting book.",
    delta: { trust: 1, respect: 5, fear: 6, suspicion: 3 },
    lines: {
      hostile: "A ledger from the foundry, read out in front of my disciples. Kuang should have been paid to forget, and you have made him remember in public. Put it away before the masters decide you are the one who should be cast.",
      wary: "You hold up the names as though they were proof. They are proof. They are also my handwriting on half of those bells, and the disciples can count as well as I can.",
      neutral: "The casting book. I did not know Kuang still kept it. Fifteen names in a clerk’s ink, and a red line I did not write. Show me the red line again, Wanderer, and tell me whose hand you think it is.",
      warm: "Fifteen names poured into bronze and hung over the sect for fifteen years, so the sect would hear them every time it rang. You were right to show them. Let the disciples hear what the bells have been saying.",
      devoted: "You have read the bells aloud to the people who rang them. My sister was never quiet, not even in metal. I am proud of that, and ashamed to be proud of it, and I will carry both feelings to the sealing.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "tore_casting_page" }],
        line: "You tore a page from the casting book, and now you bring me what it says from memory, as though a missing page were evidence. Show me the page, or stop asking the absence to speak for you.",
      },
    ],
    remember: ["showed_casting_ledger"],
  },
  REPORT_FERRY: {
    id: "REPORT_FERRY",
    summary: "The player tells the Elder what the boatman of still water charges for the dead.",
    delta: { trust: 2, respect: 2, fear: 5, suspicion: 2 },
    lines: {
      hostile: "The boatman charges the dead in names and the living in promises? You went across the still water to bargain with my sister’s ghost, and you came back with wet sleeves. Go into the hall before I decide the mist has chosen you.",
      wary: "You crossed the lake and came back talking about fares. The lake is not a market, Wanderer. Whatever it took from you, do not offer it a second time.",
      neutral: "The ferry of still water. My teachers said it was a story for children who could not sleep. A boatman who charges in names. Keep your answer short inside the hall, and do not let the lake speak through you.",
      warm: "You went down to the water and came back with the fare still in your hands, which means you chose what to give it. The dead do not like to be bargained with. I think you bargained well, and I am glad you did.",
      devoted: "The boatman still carries names across the lake, and you asked him for one back. Mengjiao always said the mist was counting. Tonight you have made it count something kind. Go on, and bring me the rest of it.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "paid_with_name" }],
        line: "You gave the lake her name, and then you came up the steps and told me about the fare as if it were a ledger entry. I will hear the rest of this in the hall, and I will not interrupt you until the lamps are lit.",
      },
      {
        when: [{ kind: "flag", flag: "refused_ferry" }],
        line: "You refused to pay the lake. You have refused the Law before, Wanderer, and it cost me a great deal to keep forgiving you. Do not refuse the dead as well. They have had enough of refusal.",
      },
    ],
    remember: ["reported_ferry"],
  },
  REPORT_BOUT: {
    id: "REPORT_BOUT",
    summary: "The player tells the Elder through the jade eye about the bout in the sparring court.",
    delta: { trust: 1, respect: 3, fear: 2, suspicion: -1 },
    lines: {
      hostile: "You fought in the outer court and then report it to my eye as though the Law Hall were a sparring ring. A brawl is a brawl, even when the disciple wears a braid and calls it a bout. Keep your fists to yourself until I say otherwise.",
      wary: "You stood on the earth against a senior disciple and came back to tell me about it. I want to know why you needed to be bruised before you would speak to me honestly.",
      neutral: "A bout in the outer court. The disciples are restless tonight, and every one of them wants to strike something. Tell me what it taught you, and do not make a sermon of it.",
      warm: "You took a blow in the outer court and came to tell me, which is more than most of my disciples would do. Stand your ground in the hall the way you stood on the earth, and I will not have to worry about you.",
      devoted: "You let the court see what it costs to hold ground. Qin will remember your name, and so will I. Go to the summons with your shoulder aching and your head up.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "used_mist" }],
        line: "You used the mist in a sparring bout, to win a bout you could have lost cleanly. The sutra teaches the technique, and the Law forbids it, and you knew both when you did it. I will hear you account for the mist before the sealing, Wanderer.",
      },
      {
        when: [{ kind: "flag", flag: "mocked_forms" }],
        line: "You mocked the court’s forms, and the court repeated it to me before you did. Pride is a small sin, but you have collected too many small sins this week to call them small.",
      },
    ],
    remember: ["reported_bout"],
  },
};
