import type { Tier } from "@/engine/types";

type Lines = Record<Tier, string>;

/** What Elder Su says about the years the hero carries, by age and then by her attitude. She says each once. */
export const ageAsides: Record<string, Lines> = {
  youth: {
    hostile: "Sixteen, and the whole of the Law Hall is a game you have not been told is lost. I was sixteen once. I was also told, and I did not listen, and I would like you to be quicker than I was.",
    wary: "A child on my stair with a stolen jade’s worth of trouble behind you. Either someone sent you because you are young enough to be forgiven, or you came because you are young enough to believe it.",
    neutral: "You are sixteen. Your qi comes easily, your judgment does not, and the mountain will charge you for the difference. I will try to keep the bill small.",
    warm: "Sixteen, and you have not yet learned to hide what you feel. Keep it a little longer. It is the one thing the sect cannot teach and cannot afford to lose.",
    devoted: "I have buried too many sixteen-year-olds on this mountain to be calm about you. Walk slower. Not for the Law. For me.",
  },
  young: {
    hostile: "Twenty-four, which is old enough to be held to what you do and young enough to claim you did not know. I will not allow you both.",
    wary: "Your years are the plain ones. Nothing in them excuses you and nothing accuses you. I find that more suspicious than a scar.",
    neutral: "You are in the years where most are made or spoiled on this mountain. Nobody will make allowances for you either way. I find that restful.",
    warm: "Twenty-four years and a clear head. It is the best age to be asked a hard question, and you have been asked several.",
    devoted: "You have the years to do all of it and the sense to do part. Whatever you choose, you have time to be sorry for it, and I mean that kindly.",
  },
  prime: {
    hostile: "Thirty-six, and you still haven’t learned to stand in a hall without wanting it to notice you. The years should have taken that from you, and have not.",
    wary: "A cultivator beginning at thirty-six has usually spent the earlier years on something else. I would like to know what, and who still holds the receipt.",
    neutral: "Thirty-six. Most of the people in my hall have a decade less and a decade more to hurry in. You have the awkward middle, where you are expected to be wise and have not been given the time.",
    warm: "You carry your years like a pack that fits. I notice it in the way you wait. The young cannot wait, and the old have stopped trying.",
    devoted: "Thirty-six, and you came up my mountain on purpose. I had to be told by three people that nobody does that. I am glad you did.",
  },
  mature: {
    hostile: "Fifty-two, and you speak as if the Law owed you for the time. It does not count years. It counts what you did with them, and I have your account here.",
    wary: "A hero of fifty-two on a stair built for the young. People do not come this late for the view. I am waiting to learn what they come for.",
    neutral: "You are fifty-two, and a mortal’s span is seventy-six. I do not say it to frighten you. I say it because you already know it, and have been counting under your breath since the gate.",
    warm: "Fifty-two. You read faster than you walk, and you walk with someone who has learned where the steps are loose. I would rather have that on a road than quickness.",
    devoted: "You have given me the one thing the young cannot: the certainty that you know what a year costs. Spend them with me, and I will spend mine with you.",
  },
  elder: {
    hostile: "Sixty-eight, and you come up my mountain to be judged as though you were not already. Let us be clear: the years are your accuser, not I. I only hold the pen.",
    wary: "An old man’s years, or an old woman’s, are the hardest to read. They hide very little and what they hide is most of it. What have you left unsaid in sixty-eight years?",
    neutral: "Sixty-eight, and eight years left to a mortal. I have already seen you count them. Break through, or find years elsewhere. The mountain sells both, at different prices.",
    warm: "Sixty-eight, and you took the stair one step at a time without once looking up. I have known young cultivators who could not do the first part and old ones who could not do the second.",
    devoted: "You do not have many years and you gave some of them to my hall. I know what that is worth. I will not waste it, and I will not let the Law waste the rest.",
  },
};
