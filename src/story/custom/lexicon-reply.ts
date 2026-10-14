import type { Gender } from "@/engine/hero";
import type { Tier } from "@/engine/types";
import type { PickKind } from "./lexicon-door";

/**
 * The Elder’s answer to what a hero did behind a door of custom: five lines by her trust for each of twelve things, a woman, a man or someone who gives
 * no answer, keeping the custom, bending it, breaking it in the open or standing for someone it passes over. Every line names the road’s place, so no two
 * roads say it alike. Slots: place, kname, kthey, ktheir.
 */
export const DOOR_REPLY: Record<Gender, Record<PickKind, Record<Tier, string>>> = {
  woman: {
    keep: {
      hostile: "You took the seat {place} gave you and said nothing. I do not know whether that was prudence or surrender, and I am in no mood to grant you either.",
      wary: "You sat where {place} put you. I have done the same, and learned afterwards what it cost. Tell me that you at least counted.",
      neutral: "You took the woman’s seat at {place} and kept your counsel. A seat taken knowingly is not a surrender. See that it was knowing.",
      warm: "You sat where {place} put you, and I think you watched everything from there. That is not obedience. It is reconnaissance, and I approve.",
      devoted: "You took the women’s side of {place} and learned it from the inside. I wish I had your patience. I have only my anger, which I have kept very well.",
    },
    bend: {
      hostile: "You asked {kname} for an exception, to {ktheir} face. It was neatly done, and I do not trust neatness from someone I have not yet understood.",
      wary: "You found the gap a woman can pass through at {place} and widened it. Gaps close. I should like to see what you do before it does.",
      neutral: "You asked for the smallest exception that could be granted at {place}, and got it. That is how rules are loosened. It is slow, and it works.",
      warm: "You put a reasonable request to {place} that the custom had no answer to. I have waited twenty years to see that done without a quarrel.",
      devoted: "You asked {kname} for what a woman is not supposed to ask, so gently that {kthey} could not refuse. I would give a good deal to have learned that at your age.",
    },
    break: {
      hostile: "You did in the open, at {place}, the thing the custom forbids a woman. Brave, and noisy, and exactly the sort of thing that gets other women hurt.",
      wary: "You crossed the line {place} draws for a woman and said you meant to. I do not say it was wrong. I say it will be remembered, and not by you alone.",
      neutral: "You did the forbidden thing at {place} plainly, in front of people. The custom has been looked at. Whatever comes of it, it has been looked at.",
      warm: "You crossed the line {place} draws for a woman, and did not apologise. Somewhere in the Law Hall a clerk has felt a draught and does not know why.",
      devoted: "You broke the custom at {place} in the open, and did it well. I have never done it so plainly. I am a little in awe, and a great deal afraid for you.",
    },
    stand: {
      hostile: "You spoke for a woman at {place} whom nobody was looking at. It was kind. It was also not your quarrel, and quarrels not one’s own are the most expensive.",
      wary: "You stood with the woman the custom passed over at {place}. I would ask you to remember that standing with someone is a loan, and the lender is you.",
      neutral: "You spoke for the one at {place} who was not asked, and kept speaking. I should have done it more often at your age. I shall try to do it now.",
      warm: "You named the woman at {place} whom the room was not looking at, and made the room look. That is the oldest sort of courage, and the most expensive.",
      devoted: "You stood with the one {place} had passed over, and said you would be passed over with her. I am proud and I am frightened, and I am both at once.",
    },
  },
  man: {
    keep: {
      hostile: "You took the man’s place at {place} without a word. It is what most men do, and it is why the place is there. I shall not scold you. I shall only notice.",
      wary: "You accepted what a man is offered at {place}. It is no crime. It is a debt, and I shall want to see you pay it on some better day.",
      neutral: "You took your place at {place} and said nothing of it. Most men would not have noticed they were offered one. You did, and took it anyway.",
      warm: "You sat where {place} put you, and I think you felt the weight of the chair. A man who feels it is a man who may one day move it.",
      devoted: "You took what {place} offered a man, and looked at it first. It is a small distinction. I have built my life on smaller, and been grateful for them.",
    },
    bend: {
      hostile: "You gave up a privilege at {place} and asked for it to be shared. A pretty gesture, and cheap for one who can afford it. Do it again where it costs.",
      wary: "You declined the better seat at {place} and asked for the worse. I have known men who would sooner have fought a duel. Tell me it was not for show.",
      neutral: "You gave up the privilege {place} held out to you, and asked that it be shared. It is the least spectacular act in the sect, and the most useful.",
      warm: "You turned down the better seat at {place}, and asked for the worse, and I am told no one clapped. That is how I know it was done properly.",
      devoted: "You gave up your place at {place} to someone who would never have been offered it. I do not say it to praise you. I say it because I did not think I should live to see it.",
    },
    break: {
      hostile: "You did in the open, at {place}, the thing the custom forbids a man. It will cost you, and less than it cost the women who did the reverse. Remember that.",
      wary: "You crossed the line {place} draws for a man and said it was deliberate. The brothers will talk. A custom survives on not being talked about, and you have talked.",
      neutral: "You did the forbidden thing at {place} plainly, in front of people. It will cost you something. It cost the women who did the reverse a good deal more.",
      warm: "You took up at {place} what a man is not supposed to carry, and carried it where everyone could see. I do not think you know yet how large that is.",
      devoted: "You broke the custom at {place} in the open, at a price I know you paid. I have not the words to thank you. I have only a ledger, and I am entering it there.",
    },
    stand: {
      hostile: "You stood beside someone {place} had passed over and gave your name. A man’s word carries weight. I hope you meant what you pledged, because the weight is now theirs.",
      wary: "You stood beside the one {place} left out. A man’s name is a loan of standing, and hard to recall once it is spent in public. I shall be watching.",
      neutral: "You gave your name at {place} to someone the custom had left out. A man’s word carries here, and it was a fine use of the weight.",
      warm: "You stood beside the one {place} passed over, and said the place you were given was theirs to have. It is a small thing to say and a large thing to mean.",
      devoted: "You lent your name to someone the custom had left out, at {place}, and did not ask for it back. I did not think I should see that done in my time.",
    },
  },
  unspoken: {
    keep: {
      hostile: "You let {place} sort you, and took the seat it gave. I do not blame you, and I do not trust a quiet that agrees with whoever is speaking.",
      wary: "You answered to the name {place} chose for you, for now. I have worn names that were not mine. I know the cost, and the use. Tell me which this was.",
      neutral: "You let the room sort you, at {place}, and learned what it thought it saw. It is a way of reading a custom. It is not the only one, and I hope not the last.",
      warm: "You took the seat {place} found easiest, and kept your counsel, and I believe you learned more from it than the room did from you. That is the right way round.",
      devoted: "You wore the name {place} gave you, for the hour, and did not mistake it for your own. I have done that for twenty years. I should like to see you stop sooner.",
    },
    bend: {
      hostile: "You asked {place} what its custom was for, and for whom. It is the question the Law was written to stop being asked. Do not ask it where I cannot reach you.",
      wary: "You offered {place} a word of your own for what you are. Somebody there will remember it. Words are slow to take, and quick to be used against one.",
      neutral: "You asked the custom at {place} what it was for, in a tone that expected an answer. It is a splendid question, and the custom is not yet used to it.",
      warm: "You offered {place} a word of your own, and I am told that one of the clerks wrote it down. Words are the one thing a custom cannot confiscate.",
      devoted: "You gave {place} a word for what you are, and it was taken. I wish I could tell you how rare that is, and how many have waited for it.",
    },
    break: {
      hostile: "You declined to be sorted at {place} and sat in the middle of the room. A fine gesture, and a tiring one for everyone else. I hope it was worth the tea.",
      wary: "You stood where {place} has no place and waited. It is the hardest way to refuse, and the one they remember longest. I would be careful of being remembered.",
      neutral: "You refused the sorting at {place} and stayed in the room while they took it in. I have rarely seen it done with so little noise. That is the hardest way.",
      warm: "You stood where {place} has no place, and someone made one. I find that I admire it, and that it frightens me, and that the two are one feeling.",
      devoted: "You would not be sorted at {place}, and stayed, and the room learned. I have waited my whole life for someone to do that without asking my leave. Thank you.",
    },
    stand: {
      hostile: "You spoke at {place} for one the custom has no word for, and used the word they would choose. I do not deny the courage. I deny that it was safe, and I wish you had asked.",
      wary: "You stood with the person {place} had erased. It is a very quiet thing to do, and it will be remembered by exactly the people it was meant for. Be ready for them.",
      neutral: "You spoke for the one {place} has no word for, and used the word they would choose. That is a gift. I do not think the sect knows yet how large.",
      warm: "You stood with the person {place} had left out, and said their name as they say it. It cost you nothing the ledger can hold, and I am entering it anyway.",
      devoted: "You named the one {place} had erased, and made the room say it. I have signed more names out than I can count. Thank you for writing one in.",
    },
  },
};
