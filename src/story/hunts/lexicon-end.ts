import type { ChoiceTone, Tier } from "@/engine/types";

/** The hint at a hunt’s reading: what the foe gives ground to. */
export const SOFT_HINT: Record<ChoiceTone, string[]> = {
  force: [
    "One thing you have learned of it: it respects nothing but being met. It gives ground to those who push.",
    "You are sure of this much: it bullies what flinches, and yields to what does not. Force is the language it speaks.",
  ],
  deceit: [
    "One thing you have learned of it: it believes what it sees. It gives ground to whoever makes it look the wrong way.",
    "You are sure of this much: it is not clever, only quick, and a lie told to its eyes is believed by the rest of it.",
  ],
  inquiry: [
    "One thing you have learned of it: it falters when it is understood. Every time you show you know its habit, it loses a beat.",
    "You are sure of this much: it is a creature of routine, and a hero who names the routine breaks it.",
  ],
  mercy: [
    "One thing you have learned of it: it is more afraid than angry. It gives ground to gentleness, to the surprise of everything.",
    "You are sure of this much: it has been hurt for a long time, and it is the kindness, not the blow, that it does not know how to meet.",
  ],
  quiet: [
    "One thing you have learned of it: it lunges at motion. It gives ground to stillness, and grows tired of waiting.",
    "You are sure of this much: it cannot bear a held breath. A hero who does not move makes it unsure whether there is anything there.",
  ],
  truth: [
    "One thing you have learned of it: it is unsettled by the plain. It hunts lies and tricks by instinct and does not know what to do with a straight line.",
    "You are sure of this much: it reads a feint at once, and has never met someone who said what they would do and did it.",
  ],
};

/** The hero’s last visit here, remembered at the sighting. */
export const BEATEN_MEMORY = [
  "You have been here before, and it threw you. The bruise remembers the ground, and so do you.",
  "This is the place it beat you. The marks of that fight are still in the dirt, and you stand beside them.",
];

export const DRIVEN_LABELS: Record<string, string[]> = {
  inquiry: ["Follow the sign of its going as far as you dare, to see where it keeps itself.", "Look at the ground it fled across, and learn what you can."],
  mercy: ["See that the place is safe before you leave it.", "Wait until the last of its {cry} has gone, and then a while after."],
  quiet: ["Sit down where it left you, and breathe.", "Let the shaking pass, and the light change."],
  truth: ["Admit, to yourself, that you did not finish it.", "Say it plainly: it is alive, and you let it go."],
};

export const BEATEN_LABELS: Record<string, string[]> = {
  quiet: ["Bind what is bleeding and lie still until the world stops tilting.", "Crawl to the nearest shade and let the fire go out of you."],
  force: ["Swear, aloud, that you will come back.", "Get up. It was a bad fight and it was not the last one."],
  inquiry: ["Ask yourself, honestly, what it did that you did not see.", "Go over the fight in your head, and find where it turned."],
  truth: ["Own that you were not ready.", "Go back, and tell the hunters it beat you, and ask what they know."],
};

export const RETURN_OPEN = [
  "The way back from {place} is the same as the way in and does not feel it. You carry the day in your hands and your shoulders, and the road does not ask what you carry.",
  "You walk away from {place} with the light behind you. Whatever happened there is now a story, and the telling of it is yours to begin.",
  "The road runs back toward the hub, under a sky that looks no different. You are not the same, and the sky has the grace not to say so.",
];

export const RETURN_APPROACH: string[] = [
  "You went at it head-on, and the road home is the road of someone who did not hide, and does not now.",
  "You went at it by stealth, and the road home is a road you take by the edges, as you took the way in.",
  "You went at it by reading, and the road home is full of small things you notice, which you did not before.",
  "You went at it by drawing it off, and you look behind you twice on the road, to be sure nobody followed.",
];

export const RETURN_END = {
  force: "You finished it by strength, and your shoulders know it.",
  craft: "You finished it with your craft, and your hands are still half in the working.",
  ruse: "You finished it by guile, and you are not sure that you are proud of it, or that you ought to be.",
  driven: "You did not kill it, and it is out there, and you can feel its eyes on the road between here and the hub.",
  lore: "You found why it came, and the reason sits in your pack, heavier than anything you took from it.",
};

export const RETURN_CHOICES = {
  report: ["Report to the Elder what happened in {place}.", "Tell Elder Su about {name}, and what you did."],
  silent: ["Say nothing of {place}, to anyone, and let the story go as it likes.", "Keep {name} to yourself, and let the hunters tell it."],
  rest: ["Rest, and let what you did settle.", "Sit by the hub’s fire, and say nothing."],
  sell: ["Sell {hide} to the first buyer who looks like they know what it is.", "Take {hide} to the market, and ask what it will fetch."],
};

export const REPORT_LINES: Record<Tier, string[]> = {
  hostile: [
    "You come to me about {name}, in {place}, as though I had asked. I did not. Tell me before the next one, not after, and I shall be less inclined to count it a liability.",
    "{Name}. I had heard the name, and hoped it was another’s business. You have made it mine, and I am not grateful.",
    "So you have been at {place}. I am told {name} is no longer a problem. I am told a great many things by people who want something.",
  ],
  wary: [
    "So it was {name}. I had heard it mentioned in {place} and hoped it was someone else’s business. It is mine now, because you have made it so.",
    "{Name}, in {place}. I have the other accounts, and yours differs from them in a way I find useful. Tell me what you left out.",
    "You dealt with {name} on your own account, and I am not sure whether it is courage or a habit of not trusting anyone to help. Tell me which.",
  ],
  neutral: [
    "{Name}, in {place}. The hunters will be telling it before dark, and it will be worse in the telling. Tell me the true version now, so that I know what to correct.",
    "{Place} and {name}. I have the sect’s record of it, which is thin, and yours, which I expect will be thicker. Begin.",
    "I am told you dealt with {name}. I have not decided yet whether to be pleased. Tell me how it went, and I will decide as you speak.",
  ],
  warm: [
    "You went to {place} and dealt with {name}, and came back whole. Sit. I will have tea brought, and you will tell me the rest.",
    "{Name}. I should have sent someone with you, and did not know how to ask. Sit, and tell me every part of it.",
    "I am glad you are whole. {Place} has taken better hunters than you for less. Tell me, and then eat something.",
  ],
  devoted: [
    "{Name}, and you went alone. I sat up for you, and told no one I was doing it. Tell me all of it, and then go and sleep.",
    "You came back from {place}. I will not say what I thought while you were gone. Tell me about {name}, and I will find out later whether I am relieved.",
    "I should have gone with you. I did not, because I would have been in the way and because I am afraid of {place}, and you went anyway. Tell me.",
  ],
};

export const REPORT_MEMORY = {
  beaten: "{Name} threw you the first time, I hear, and you went back to {place}. I have known sects that could not teach that, and a few that could not learn it.",
  force: "You finished {name} by strength. The hunters will like that; they like what they can picture. I should like it more if it were not so often the only thing they can picture.",
  ruse: "You finished {name} by guile. I do not mind that, and shall not say so where the hunters can hear. A trap is as honest as a blow, if you set it where you said you would.",
  driven: "You drove {name} off and did not kill it. I do not know yet whether that was mercy or arithmetic. Both are respectable, and neither is permanent.",
  lore: "You found why {name} came to {place}: {lore}. I shall want that written down, and will ask someone whose hand is better than mine.",
  taken: "You took {hide}. It will pay, and it will be spoken of. Whether it is spoken of kindly will depend on what you do with the money.",
  left: "You left {hide} where it was. The hunters will think you a fool, and the place will remember you as something else.",
};
