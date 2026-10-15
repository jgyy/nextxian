import type { Tier } from "@/engine/types";

export type TrialResult = "won" | "lost" | "fled";

/**
 * What the Elder says at once when a hero finishes a rehearsal of a tribulation at a keeper’s place, five lines by her trust for each of three things: they
 * weathered it, they were scorched by it, or they turned back at the gate. Slots: kname, place, trib.
 */
export const TRIAL_REPLY: Record<TrialResult, Record<Tier, string>> = {
  won: {
    hostile: "You sat {trib} at {place} and came out of it standing. I am told {kname} bowed. I do not bow for survival, Wanderer, and I will not be made to start. Stay out of my sight, and bow to no one.",
    wary: "You weathered {trib} at {place}. I do not like being impressed, and I am. Do not mistake the second for a favour. I am watching to see whether the first was luck.",
    neutral: "You sat {trib} at {place}, and {kname} says you stood it. That is a rehearsal and not the thing itself, and I would not have you think otherwise. Still, you stood. I mark it.",
    warm: "So you stood {trib} at {place}. I am glad, and I would rather you did not see how glad. The sky will test you again, properly. Remember how the rehearsal felt, and who held the lamp.",
    devoted: "You stood {trib} at {place}, and I was not there, and I find I wish I had been. I have sat three trials in my life and nobody watched the second. Next time, ask me to hold the lamp.",
  },
  lost: {
    hostile: "Scorched at {place}, by a rehearsal of {trib}, and {kname} had to dress the burn. Perhaps you will now understand why I do not hurry cultivators. It was not meant as a lesson. It was meant as a warning.",
    wary: "You did not weather {trib} at {place}. I am not surprised, and I am not angry. A rehearsal that cannot be failed is not a rehearsal. Go back when you have the qi, and the sense, to meet it.",
    neutral: "{kname} tells me the rehearsal of {trib} at {place} burned you. That is what it is for. A person scorched on a mat is a person who will not be scorched on a mountain, if they listen.",
    warm: "You were scorched by {trib} at {place}, and you came to tell me. I shall not pretend it did not frighten me. Sit down, drink this, and tell me what it was like. I will not tell the Law.",
    devoted: "You failed {trib} at {place}, and I think better of you for it. I failed mine twice, and nobody told me that it counted. It counts. It is the part that makes the rest of it yours.",
  },
  fled: {
    hostile: "You turned back at the gate of {trib} at {place}. I have no quarrel with a person who knows their limits. I have a quarrel with one who calls it prudence the next morning. Do not.",
    wary: "You looked at {trib} at {place} and went away. I do not call it cowardice. I call it an opinion. See that it is an informed one, and that you come back with another.",
    neutral: "{kname} says you came to the gate of {trib} at {place} and turned away. That is allowed. The trial is not a debt. It is a door, and a door is kind enough to stay where it is.",
    warm: "You turned back at {place}. Good. I would rather you came back to me whole than went on to {trib} half ready. The sky is not going anywhere, and neither, I think, are you.",
    devoted: "You turned from {trib} at {place}, and told me. I know what it cost you to say. I walked away from my own for eleven years, and have never regretted the walk. I regret only that I told no one.",
  },
};

/** What she adds when a hero tells her how it went, by the realm they sat it at against the realm the trial was made for. Slots: kname, place, trib. */
export const TRIAL_MEMORY: Record<"won" | "lost", Record<"below" | "at" | "above", string>> = {
  won: {
    below: "You weathered {trib} at {place} before your realm was ready for it, which I shall not call foolish. I shall call it early. Early is a thing a body can recover from, and a reputation cannot.",
    at: "You weathered {trib} at {place} at the realm it was made for, which is how it should be done. The sect will tell you so. I tell you only that it is rarer than it should be.",
    above: "You weathered {trib} at {place} from well above its realm, as a teacher sits among pupils. {Kname} will have bowed. Bows given upward are cheap. Remember what the ones given down to you cost.",
  },
  lost: {
    below: "You were scorched by {trib} at {place} before your realm was ready for it, and I am not going to say I told you so. I am going to say that a body learns more from a burn than from a warning.",
    at: "You were scorched by {trib} at {place} at the realm it was made for, which means it was fair. Go back when you have the qi, the sense and the karma, and not before. It will keep.",
    above: "You were scorched by {trib} at {place} from well above its realm, and that I did not expect. A high realm is not a shield. It is only a longer fall, and {kname} will not tell anyone.",
  },
};
