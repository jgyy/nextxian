import type { ChoiceTone } from "@/engine/types";

/** The first paragraph of a Fortune Road’s way back. The road’s own close follows it. Slots: place, omen, kname, relic. */
export const RETURN_OPEN3: string[] = [
  "{Place} lets you go without ceremony, and {omen} clings to your sleeves all the way to the edge of the lane.",
  "You stop at the last turning and look back. {Place} looks smaller, as places do once you have counted what they keep.",
  "At the end of the lane you sit on a step and sort what you learned into what you can prove and what you only believe.",
  "{Omen} is already fading from your clothes, though the sum of the day will last longer.",
  "You walk until {place} is a roof among roofs, and then you stop and take stock of your purse, your pack and your hands.",
];

export const RETURN_APPROACH3: Record<ChoiceTone, string[]> = {
  inquiry: ["[ptw] You went at {place} through {focus}, asking and copying, and your notes are heavier for it."],
  mercy: ["[ptw] You came by way of {focus} with open hands, and {place} has not yet decided what to make of that."],
  force: [
    "[p] You pushed in at {focus}. The door you broke there will be mended slowly, and talked about longer.",
    "[tw] You forced {focus} open. What you broke there will be mended slowly, and talked about longer.",
  ],
  deceit: [
    "[p] You slipped in at {focus} under a borrowed errand, and a clerk in {place} still wonders who you were.",
    "[tw] You took up {focus} under a borrowed errand, and a clerk in {place} still wonders who you were.",
  ],
  quiet: ["[ptw] You watched {focus} until it showed its habits, and you leave knowing them better than its keepers."],
  truth: [
    "[pw] You walked up to {focus} and said why you had come. It is rarer in {place} than you would think.",
    "[t] You asked to read {focus} openly and said why you wanted to. It is rarer in {place} than you would think.",
  ],
};

export const RETURN_CRISIS3: Record<ChoiceTone, string> = {
  truth: "You spoke plainly at the crisis, and {kname} has already repeated your words, a little improved.",
  mercy: "What you gave at the crisis was small, and {kname} will remember it exactly as long as it takes to repay.",
  inquiry: "Your question at the crisis is still going round {place}. Nobody has found an answer they like.",
  deceit: "The story you told at the crisis holds for now. In {place}, a lie that holds is a debt.",
  force: "How you broke the quiet at the crisis will be remembered in {place} long after your name is forgotten.",
  quiet: "You said little at the crisis, and {place} has decided your silence meant something.",
};

export const RETURN_CHOICES_BASE = {
  report: "Tell Elder Su what you saw at {place}, and what you carry.",
  silent: "Say nothing of {place} and go back to the road.",
  rest: "Rest a little and let {omen} fade from your thoughts before going on.",
  keep: "Keep {relic} and study it on the road.",
};

/** The Elder’s report lines, by tier. Four variants per tier, none of which says where she is. */
export const REPORT_LINES3: Record<"hostile" | "wary" | "neutral" | "warm" | "devoted", string[]> = {
  hostile: [
    "You report on {place} as though the Law were a counting-house. I hear the sums and none of the substance. Next time bring me something I can use.",
    "{Place}. A report from someone I do not trust, about a place I cannot check. I will file it where I file everything you tell me.",
    "I listened to your account of {place} because I must. Do not mistake that for belief, and do not mistake your purse for a character reference.",
    "You tell me what {kname} charged and what you paid, and nothing of what it was for. A hired hand reports better.",
  ],
  wary: [
    "I will hear this, though I am watching how you tell it. {Place} has more stories than stones, and I want only the ones that are yours.",
    "You say {kname} dealt with you fairly at {place}. I will weigh that against what I know of {kname}, and against what I know of you.",
    "Interesting that you came to me with news of {place}. I would have forgiven you for staying silent, and I would not have trusted you either way.",
    "Tell me what you paid at {place}, and what you were paid. I have found that people lie about the first and brag about the second.",
  ],
  neutral: [
    "A report on {place}. Good. It helps to hear what the roads are saying, and what they cost.",
    "I have heard of {place}, though never from someone who had stood in it. Your account is useful, even where it is incomplete.",
    "So {place} keeps {relic} and speaks of it in lowered voices. That is worth knowing. Write the rest down while you remember it.",
    "Prices tell you more of a place than its priests do. Say what {place} charged, and who was glad to charge it.",
  ],
  warm: [
    "You went all the way to {place} and came back to tell me. I am grateful, and I want you to hear that said plainly.",
    "Thank you for telling me about {place}, and for telling it well. {Kname} has been waiting for someone to come and ask. You did.",
    "I cannot go to every place myself. You have been my eyes at {place}, and I am the better judge for it.",
    "You dealt honestly at {place}, and it shows in how you describe the dealing. Few can afford honesty with a purse that light. You did.",
  ],
  devoted: [
    "I trust what you saw at {place}, and I trust how you saw it. Few would have walked that road, and fewer would have come back to tell me. Sit. Tell me all of it.",
    "{Place}, {relic}, {kname}. You have given me three names to remember and a reason to remember them. I will not forget who gave them to me.",
    "When I wished for someone to look at {place}, I did not expect the right person to arrive, tired and honest, at my door. Tell me everything. I mean to keep it.",
    "You paid what you owed at {place} and took what you earned, and told me both without being asked. That is the whole of what I wanted from a pupil.",
  ],
};
