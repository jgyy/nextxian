import type { ItemKind, NpcScenario } from "@/engine/types";
import { giftScenarioId } from "@/engine/pack";

/**
 * The Elder’s answers to what a hero does with their dress and their pack: the mirror at the end of every fitting, and a gift of each kind of item.
 * The mirror is answered by her trust; a gift is answered by her trust and by the kind of thing it is.
 */
const MIRROR: NpcScenario = {
  id: "WARDROBE_MIRROR",
  summary: "The player stands at a fitting and takes in what the road will see.",
  delta: { respect: 1, trust: 1 },
  lines: {
    hostile: "You tell me you stood in front of a glass. Do not suppose that I am impressed by a person who has learned to look.",
    wary: "A glass and a keeper and a change of dress. I shall want to know whom the dress is for before I say whether it suits.",
    neutral: "You have been fitted, and you came to tell me. A change of dress is a small thing, and I shall treat it as one, and watch what comes after.",
    warm: "You stood at the glass and told me. I wish more people did. The look of a person is the first thing the sect decides, and I am glad you know it.",
    devoted: "A fitting, and you came to me with it. I have always liked to know what you are wearing. It is not vanity. It is how I find you in a crowd.",
  },
};

const GIFT: Record<ItemKind, { summary: string; delta: NpcScenario["delta"]; lines: NpcScenario["lines"] }> = {
  pill: {
    summary: "The player gives the Elder a pill.",
    delta: { trust: 2 },
    lines: {
      hostile: "A pill from your hand. I will not swallow it, and I will not throw it away, and I shall keep it on the sill as proof of how little I trust you.",
      wary: "You give me a pill. A person who wishes to poison me would not be so crude, so I shall assume you are merely clumsy, and keep it.",
      neutral: "A pill, and no request attached. I have been given a great many things with requests attached, and I notice the difference.",
      warm: "You give me a pill you might have eaten. I shall not take it for breakthrough. I shall take it for a gift, which is rarer.",
      devoted: "A pill, from you, to me. I have not been given a medicine out of simple regard since I was nine. Thank you. I shall keep it for the day it matters.",
    },
  },
  token: {
    summary: "The player gives the Elder a token.",
    delta: { trust: 1, suspicion: -1 },
    lines: {
      hostile: "A token. A favour you would like me to owe you, I suppose. I decline to be in anyone’s debt, and I decline the token.",
      wary: "A token, freely given. It would be a great deal simpler if I understood why. Give me time, and I shall.",
      neutral: "You give me a token and ask for nothing. It is a strange habit in a hero. I shall keep it and see what it opens.",
      warm: "A token, and no strings. I shall carry it in my sleeve, and remember who put it there.",
      devoted: "You give me a token of your own. I have not been handed a key to a door I was not asked to open since my teacher died. I shall be careful with it.",
    },
  },
  tool: {
    summary: "The player gives the Elder a tool.",
    delta: { respect: 1, trust: 1 },
    lines: {
      hostile: "A tool. For what work, I wonder. I shall use it to open your lies, since you offer it.",
      wary: "You give me a tool, and I turn it over. It is well made. I shall be wary of anyone who gives well-made things without asking what they are for.",
      neutral: "A tool. I have always liked a thing that does what it says. I shall put it to use, and tell you how it went.",
      warm: "A good tool, from your own hand. I shall use it, and think of you when it works. That is a better thanks than most.",
      devoted: "You give me a tool you might have kept. I shall use it for the next thing I make, and it will be the better made for it.",
    },
  },
  relic: {
    summary: "The player gives the Elder a relic.",
    delta: { respect: 2 },
    lines: {
      hostile: "A relic. You think to buy my regard with the dead. It is an old trick, and I know the price, and it is higher than you can pay.",
      wary: "A relic. I shall look at it closely, and for a long time, and then I shall decide what you meant by it.",
      neutral: "You give me a relic. It has a weight I did not expect. I shall keep it where I can see it, and think about why you let it go.",
      warm: "A relic, and from you. I shall sit with it tonight, and tell you what it says in the morning. Few gifts are as demanding, and as kind.",
      devoted: "You give me a relic that is yours. I have held a good many, and none that was given. It sits differently in the hand. Thank you.",
    },
  },
  scripture: {
    summary: "The player gives the Elder a scripture.",
    delta: { respect: 2, trust: 1 },
    lines: {
      hostile: "A scripture, from you. I shall read it with a pen in my hand and a long list of what is wrong with it.",
      wary: "A scripture. I shall read it, and I shall read you in it, and we shall see whether the two agree.",
      neutral: "You give me a scripture. It is a way to be remembered that I did not expect, and I shall read it with attention.",
      warm: "A scripture, given freely. A reader gives a book only to someone they wish to argue with for years. I accept, and I shall begin tonight.",
      devoted: "You give me something you have read. I shall read it next, and you will know by my face on which page it got me. Thank you.",
    },
  },
  material: {
    summary: "The player gives the Elder a material.",
    delta: { trust: 1 },
    lines: {
      hostile: "Raw stuff, from your hand. I shall put it in the store, and you will not hear of it again.",
      wary: "Raw material, offered without comment. It is useful, and I shall use it, and I shall keep an account of what it cost you.",
      neutral: "A material, and nothing else. It will go to the workshop, and be used, and that is a better memory than most gifts get.",
      warm: "You give me something that was meant for your own work. I shall make something of it, and put your name on the shelf beside it.",
      devoted: "You give me the thing itself, before it has become anything. It is the most trusting gift there is. I shall be worthy of the raw.",
    },
  },
};

export const wardrobeScenarios: Record<string, NpcScenario> = {
  [MIRROR.id]: MIRROR,
  ...Object.fromEntries(
    (Object.keys(GIFT) as ItemKind[]).map((kind) => [giftScenarioId(kind), { id: giftScenarioId(kind), summary: GIFT[kind].summary, delta: GIFT[kind].delta, lines: GIFT[kind].lines } satisfies NpcScenario]),
  ),
};
