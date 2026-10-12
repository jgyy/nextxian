import type { Practice } from "@/engine/practice";
import type { Tier } from "@/engine/types";

/**
 * Elder Su’s answers to the four practices. Six lines per practice and attitude, and a tail after each; a road takes the line its
 * index points at, so forty roads do not share a sentence. Slots: kname, place, ground.
 */
export const PRACTICE_LINES: Record<Practice, Record<Tier, string[]>> = {
  circulate: {
    hostile: [
      "You sat at {ground} and ran your qi round. Do not mistake obedience for virtue. A well-turned circuit is a thing a thief can do too.",
      "{Kname} says you circulated cleanly at {ground}. I did not ask for a report of your manners. I asked what you are.",
      "A circuit, then, at {ground}. It is the least a cultivator owes the road. You have paid it, and I note that I do not feel paid.",
      "You sat still at {ground} and I am told your breath was even. Even breath is easy for a person who is sure of what they intend.",
      "{Kname} watched you circulate. I would have watched your hands, not your qi. A circuit shows nothing the fingers do not.",
      "The qi went round at {ground}, I hear. It goes round for everyone. That is rather the point of a circle.",
    ],
    wary: [
      "You sat the circuit at {ground}. I am told it was steady. I would like to know what you were steadying yourself against.",
      "A circuit at {ground}, then. It is the first thing a cultivator learns and the last they stop doing. I will not read more into it than that. Yet.",
      "{Kname} says your qi went round without a catch. Good. A catch tells me more than a clean line, and I shall be watching for one.",
      "You circulated at {ground} with your eyes shut, I hear. A person who shuts their eyes to work has something they would rather not see.",
      "Circulation is honest work, and {ground} is an honest place for it. I will allow that it did you no harm.",
      "The qi went round at {ground} and came back where it started. That is more than most of what you have told me can say.",
    ],
    neutral: [
      "You circulated at {ground}. It is a plain practice and a good one, and I have never known a cultivator ruined by doing it too often.",
      "A circuit at {ground}. I am told {kname} counted it and found it long. Long is good. It means the qi trusted you.",
      "You sat and let the qi go round at {ground}. I did the same, at your age, on a stair, and learned nothing, for nine years. Then I learned everything at once.",
      "{Kname} reports a clean circuit at {ground}. In my experience, a clean circuit is the only reliable evidence of an honest mind.",
      "The circuit at {ground} is done. It does not make you stronger today. It makes you the sort of cultivator who will be stronger in a year.",
      "You ran the circuit at {ground}. Well. It is dull, and it is the whole of the art, and I wish more of my disciples knew both.",
    ],
    warm: [
      "A circuit at {ground}, and {kname} says it was a beautiful one. I do not use the word. I repeat it because it is {kname}’s, not mine.",
      "You sat at {ground} and let the qi go round. I find I like to think of that: you, a mat, and the slow turning of something good in you.",
      "{Kname} says your qi went round at {ground} as if it were glad to. I do not often hear of qi that is glad. It suits you.",
      "The circuit at {ground} cost you an hour and nothing else. It is the best bargain in the sect, and you have taken it, and I am pleased.",
      "You circulated at {ground}. I hope you went slowly. People who go slowly come back with more in their hands.",
      "A good circuit at {ground}, {kname} says. I am not surprised. You have the patience of someone who knows what they are for.",
    ],
    devoted: [
      "You sat at {ground} and let the qi go round. I would have given a great deal, at your age, to sit anywhere with such an easy mind. I am glad you can.",
      "{Kname} says the circuit at {ground} was the finest seen there in a decade. I say nothing, because I am fond of you, and it is unseemly.",
      "A circuit at {ground}, and I am told it went round like a sutra. Come and tell me about it, if you like. I am not busy.",
      "You circulated at {ground}, and I think the whole of it was for the pleasure of the thing. I should like to be able to say as much for myself.",
      "The qi went round at {ground}, and I am told it left you smiling. I do not know how to answer that, except to say that I am glad.",
      "Another circuit at {ground}, and another small step toward the person you will be. I shall be there when you arrive, if I am permitted.",
    ],
  },
  temper: {
    hostile: [
      "You tempered at {ground}, and I am told you bled for it. Blood is cheap. What I want to know is what you are using the steel for.",
      "{Kname} says you worked the hard drill at {ground} till you shook. A body that is hard and a heart that is not make a poor weapon and a worse guest.",
      "Pain at {ground}, freely taken. I have known cultivators who tempered themselves into something no one could talk to. I trust you will not.",
      "You drove your qi into your bones at {ground}. It is what a person does who has decided to be hard before anyone asked it of them.",
      "The drill at {ground} is a tool. I have seen it used to build a cultivator and to break one, and the difference is never in the drill.",
      "You took the punishment at {ground}. I wonder who you meant it for.",
    ],
    wary: [
      "You tempered at {ground}. It is a good practice, and it is also what a person does who expects to be hit. Which was it?",
      "{Kname} says your body took the hard drill at {ground} without complaint. A body that does not complain has usually been taught not to.",
      "A tempering, then, at {ground}, and I am told you finished it. I will say only that I would rather you were hard in the body than in the face.",
      "You drove the qi into your bones at {ground}. I have seen that done by people who needed to feel something, and by people who needed to feel nothing.",
      "The hard school at {ground}, and you in it. I hope it taught you where your limits are. I should like to know, myself.",
      "You tempered. Good. Come to me when you can tell me what it was for.",
    ],
    neutral: [
      "You worked the hard drill at {ground}. It is dull, and painful, and exactly what the body wants. I sympathise with all three.",
      "A tempering at {ground}, {kname} says, and a thorough one. The body is a stubborn pupil and an honest one, and it will not pretend to have learned.",
      "You tempered your qi into your limbs at {ground}. A cultivator who skips this step finds out, at the third realm, what it was for.",
      "The drill at {ground} is done. I am told you finished, which is more than the report of most. Rest, and eat, and let the body decide what it learned.",
      "{Kname} says you shook at {ground}, and went on. That is all the hard school asks, and it asks it every day.",
      "You gave the body its due at {ground}. It will repay you with interest, in about a year, at a moment you will not have expected.",
    ],
    warm: [
      "You tempered at {ground}, and I am told you laughed at the end of it. I should like to have seen that. I have not laughed at the end of anything in some time.",
      "{Kname} says the hard drill at {ground} suits you: you take pain like a person who knows what it buys. I am not sure whether to admire it or to worry.",
      "A tempering at {ground}, and a good one. Rest now. A body that has been hardened wants a day to forgive you.",
      "You drove your qi into your bones at {ground}. I hope it hurt less than it looked. I hope, also, that it did not hurt so little that you stopped noticing.",
      "The hard school at {ground} has left its mark on you, {kname} says. I find that I do not mind. It looks well.",
      "You tempered. I am glad. A hard body will carry you a long way, and a kind heart will carry you the rest.",
    ],
    devoted: [
      "You tempered at {ground}, and I am told you shook, and went on. I would not have asked it of you. I am very glad you did.",
      "{Kname} says the drill at {ground} nearly broke you and that you smiled. I am afraid of the day you stop smiling at it, and I shall try to be there.",
      "A hard day at {ground}, and you came through it. Sit by me tonight. I have tea, and nothing at all to say.",
      "You took the pain at {ground} for what it was worth, and no more. I wish I had been so wise at your age. I wish I were now.",
      "The body at {ground} has had its way with you. Let me say only that I am proud, and that I have no right to be, and that I am.",
      "You tempered, and you kept your gentleness through it. That is the whole of the art, and few get there at all.",
    ],
  },
  comprehend: {
    hostile: [
      "You sat with the working at {ground} and I am told you understood it. Understanding is cheap. What do you mean to do about it?",
      "{Kname} says you read {ground} as a scholar reads. A scholar, in my hall, is the sort of person who finds out too much.",
      "You studied at {ground}. I would prefer that you did not understand quite so quickly. It makes me think of the ones who understood too well.",
      "A comprehension at {ground}, and a shrewd one, I hear. I distrust shrewdness in the young. It is usually a defence.",
      "You saw the Dao behind the working at {ground}. Be careful what you do with it. Some Daos are better left unseen.",
      "{Kname} reports that you understood. I should like to know what you understood it as. It is a different question.",
    ],
    wary: [
      "You studied the working at {ground}. I am told you asked sharp questions. I should like to know which of them you did not ask aloud.",
      "A comprehension at {ground}, then. It is the slowest way to rise and the one that cannot be taken from you. I cannot decide whether to encourage it.",
      "{Kname} says you read {ground} closely, and found what was left out. People who find what is left out are either scholars or thieves.",
      "You understood what {ground} was for. Good. Now tell me what it was for in your own words, and I shall tell you whether you have it right.",
      "A study at {ground}, and a patient one. I notice that patience in a stranger is the thing that most frightens me.",
      "You saw the working for what it is. I am glad someone has. I should still like to know why you were looking.",
    ],
    neutral: [
      "You studied at {ground} and understood it, {kname} says. That is the only kind of cultivation that does not need to be done again.",
      "A comprehension at {ground}. It is quiet work, and the sect does not pay it its due. I am paying it now, in the only coin I have, which is attention.",
      "You read {ground} for its meaning and found some. The meaning, in my experience, is rarely the one the founder intended, and nearly always a better one.",
      "{Kname} says you asked good questions at {ground}. I have found that a good question is worth a month of qi, and costs nothing.",
      "You understood the working. Now you must understand why you understood it, which is harder, and which no one will teach you.",
      "The Dao at {ground} is a little clearer to you than it was. I am told it is clearer to you than to most. I make no comment, except that I am pleased.",
    ],
    warm: [
      "You studied at {ground} and came away with something. {Kname} says it was the kind of understanding that changes how a person stands. I think I can see it.",
      "A comprehension at {ground}, and a rare one. I should like to hear what you made of it, when you have words. I am in no hurry.",
      "You read {ground} with your whole mind, {kname} says. I envy you the quiet. My own mind has never been so easy a thing to pour into a text.",
      "The Dao is a little nearer to you for the work at {ground}. I find I am more pleased than a Law Elder ought to be.",
      "{Kname} says you understood and did not boast of it. That is the proper order, and the rarest.",
      "You sat with the working at {ground} until it opened. It does not open for many. Thank you for telling me.",
    ],
    devoted: [
      "You understood the working at {ground}, and I am told it moved you. I should like to know what it said. I think it said something I could use.",
      "{Kname} says you read {ground} as if it had been written for you. I do not believe in that. I believe in you, which comes to the same.",
      "A comprehension at {ground}, and it has left you quiet. Stay quiet a while. Whatever you learned is working on you, and it prefers silence.",
      "You studied at {ground} and the Dao answered. I have waited a long time to hear that said of someone I know.",
      "The understanding you took from {ground} is yours, and not even I may ask for it. I shall ask anyway, when I am braver.",
      "You understood. I think that, after all my years, is the only thing I wanted for you.",
    ],
  },
  push: {
    hostile: [
      "You pushed at the gate at {ground}, I hear. A gate pushed in anger opens badly and shuts behind. I trust that you were not angry.",
      "{Kname} says you laid yourself open at {ground} and drove at the threshold. It is the act of a person with something to prove, and I should like to know to whom.",
      "A push, then, at {ground}. Gates are for the patient. For the impatient they are doors that open onto walls.",
      "You tried the gate of the next realm at {ground}. It is bold. Boldness in a person I cannot read is the kind of thing I write down.",
      "{Kname} tells me you put everything into the push. Everything is a great deal to spend where I cannot see the receipt.",
      "You pushed at {ground}. Whatever came of it, I want it understood that I did not ask you to.",
    ],
    wary: [
      "You pushed at the gate at {ground}. I am told you were ready, which I take as a sign you were not afraid. Be afraid. It is cheap, and it keeps people alive.",
      "A push at {ground}, and {kname} says the walls hummed. I would rather they did not. A humming wall is a kind of evidence.",
      "You tried the threshold at {ground}. A threshold crossed in front of a stranger is one the stranger remembers. I suppose you know that.",
      "The gate, then, at {ground}. I should like to hear it from you, in your own words, when you have the breath for it. All of it.",
      "{Kname} says you laid your qi open and pushed. I have seen that done by the proud and by the desperate, and I could not tell them apart.",
      "You pushed. I will not say it was wise. I will say that it was exactly the sort of thing a person does who is sure of what is on the other side.",
    ],
    neutral: [
      "You pushed at the gate at {ground}. Whether it opened or not, the pushing was the part that mattered. Gates remember who tried them.",
      "A push at {ground}, {kname} says, and a clean one. I do not believe in luck at thresholds. I believe in preparation, and I am told you had it.",
      "You laid your qi against the gate of the next realm at {ground}. It is the oldest act in the art, and it is never easy to watch.",
      "{Kname} says the air at {ground} changed when you pushed. I have felt it twice, once as an observer, and once as the pushed. I would not wish either on a friend.",
      "You pushed at {ground}. Rest. A gate does not like to be asked twice in an hour.",
      "A push at the threshold, at {ground}, and you are still on your feet. That, in my experience, is the best of the possible outcomes.",
    ],
    warm: [
      "You pushed at the gate at {ground}, and {kname} says that for a moment it was open. I would have liked to see that. I do not think I am brave enough to watch.",
      "A push at {ground}, and I am told you did not flinch. I flinch. I have flinched at every gate I have ever come to. I am glad you do not.",
      "You laid yourself open at {ground} and drove at the threshold. It is the bravest thing a cultivator does. I hope it was kind to you.",
      "{Kname} says you pushed with your whole self. I find that I am proud and terrified, in equal measure, and I have decided to be proud.",
      "The gate at {ground} knows you now. I think that it will open, in its own time. I should like to be near when it does.",
      "You pushed at {ground}. Come and sit down. You have done a large thing and I should not like you to do it alone.",
    ],
    devoted: [
      "You pushed at the gate at {ground}. Whatever it was, I am afraid I have loved you for the trying. Sit, and I shall make the tea.",
      "{Kname} says that when you pushed at {ground}, the whole of {place} stopped to listen. I should have liked to be there. I will be next time.",
      "A push at the threshold, and you are standing. I do not know whether to scold you or embrace you. I shall decide in the morning.",
      "You laid your whole qi against the gate at {ground}. I have never been so afraid for a person, or so certain I could not have stopped them.",
      "The gate of the next realm at {ground} has felt your hand. It will open. I have no doubt of it, and I do not say that of many things.",
      "You pushed, and you are here. Thank you. I think that is the sum of what I wanted to say.",
    ],
  },
};

/** What follows an Elder line in a cold voice, a warm voice, and a remembering one. Eight variants each. */
export const PRACTICE_TAIL: Record<"cold" | "warm" | "memory", string[]> = {
  cold: [
    "I shall be reading the account of {place} with some care.",
    "Do not take my having listened for approval, {place} notwithstanding.",
    "I will ask {kname} what they thought of you, and I will not ask twice.",
    "Remember that I can see what you do at {place} when you think the room is empty.",
    "Practice is no defence. I have known the finest cultivators of {place} to do the worst things.",
    "I should be sorry to find you had been using a good art for a poor end, at {place} or anywhere.",
    "Be careful at {place}. The ground there is more attentive than it looks.",
    "We are not finished, you and I, and neither are {kname} and the rest of {place}.",
  ],
  warm: [
    "Eat something before you do any more at {place}.",
    "Come and tell me the rest when you are ready. {Kname} says you have a way of telling it.",
    "I am glad you went to {place}. I should have liked to go myself.",
    "That is enough for one day at {place}, I think. Rest.",
    "Tell {kname} I said the work was well done, and do not tell them I said it kindly.",
    "I find I am looking forward to what you do after {place}.",
    "Sit with it a while before you spend it. {Place} will keep.",
    "You have a way of making a hard thing look quiet. It is not a thing I can teach, though {kname} might.",
  ],
  memory: [
    "I remember what you did before {place}, and I have not forgotten the shape of it.",
    "It is not the first time, and it will not be the last. {Place} is only the latest.",
    "I notice a pattern, and I have decided to say so, once, in front of {kname}.",
    "I have the habit of keeping count. {Place} is in it. It is a poor habit, and a useful one.",
    "I shall say it only this once, so listen: since {place}, you are not what you were at the gate.",
    "{Kname} will tell you the same, if you ask. I told them to.",
    "It is a mark of the road, I think, and not of you. But roads leave marks, and {place} left this one.",
    "Do not think I have not seen what you did at {place}.",
  ],
};

/** The four things she may be remembering when she answers a practice. Each is a list of variants. In the builder the conditions are tied to the position. */
export const PRACTICE_MEMORY: Record<Practice, [string[], string[], string[], string[]]> = {
  circulate: [
    [
      "You circulated at {ground} with the gate almost open. You are a breath from the threshold, and I see it in how you sit. Do not push yet; sit, and let the gate come to you.",
      "The cusp is on you, and you spent an hour circulating at {ground} instead of rushing it. I am pleased. A cultivator who can wait at a threshold has already half crossed it.",
      "You are on the cusp, and your qi went round at {ground} like a held breath. I know that sound. I made it myself once, on a stair, and the stair did not forgive me.",
      "A circuit at {ground}, with the gate at your shoulder. Whatever you do next, do it slowly. It is the only advice I have ever been sure of.",
    ],
    [
      "Your cultivation runs slow, I know, and you circulated at {ground} regardless. A slow cultivator who sits is better than a quick one who runs. I would rather you had a lease and a pill. See that you do.",
      "You are slower than you ought to be, and you sat at {ground} all the same. The purse and the pack can mend a rate. I shall say no more, and I shall think about it.",
      "At your rate, a circuit at {ground} is an act of faith. I admire it. I admire, more, the idea of you with a good tool in your pack.",
      "Slow, and still sitting. {Kname} told me. It is what the old books call patience, and what the new ones call a waste of time. I side with the old.",
    ],
    [
      "A third circuit, and a fourth, and now {ground}. You have made a habit of the circle. Habits are what the art is for, and what the heart demon is afraid of.",
      "You circulate on every road you walk, I notice, and {ground} is the latest. I do not think I have had a disciple who sat so often since I was one.",
      "Every wayside has had your breath in it. {Kname} says you take the cold seat first. It is an odd habit, and a sound one.",
      "You have circulated at every ground on this road and the last. I do not know whether to call it devotion or an inability to stand up.",
    ],
    [
      "You are far above this ground, and you sat at {ground} regardless. It has little left to teach you, and you know it. I find the courtesy touching.",
      "A cultivator of your height sitting at {ground}: it is like a master on a child’s stool. {Kname} will have a story to tell for a year.",
      "The circuit at {ground} gave you very little, I expect. It was, I think, the sitting you wanted. I know that appetite.",
      "You have outgrown this ground, and you sat anyway. The old books have a line about that, and I have misplaced it.",
    ],
  ],
  temper: [
    [
      "Your well is brimming, and you tempered at {ground} regardless. A full cultivator who works the hard school is either thorough or restless. I should like to know which.",
      "With your reserve so deep, the drill at {ground} cost you almost nothing, and gave you almost nothing. Tempering is for the body that is tired. Do not waste it on one that is not.",
      "You came to {ground} with more qi than the drill could use. {Kname} will have noticed it going to waste. I notice that you did not mind.",
      "A body full of qi and a hard drill: it is like pouring a river through a straw. I admire the stubbornness. I do not admire the plumbing.",
    ],
    [
      "You have been choosing force for some days, and you tempered at {ground}. I notice the habit and I will not pretend it does not trouble me. A hard body should have a soft hand.",
      "Force, force, and now the hard school at {ground}. You are making yourself into something very straight. I should like you to be bent a little, by someone who loves you.",
      "Your last eight decisions were forceful, and the drill at {ground} suits them. I wonder what you are building. I wonder, too, whether it will have a door.",
      "A hard run of decisions, and the hardest drill the road offers. {Kname} is watching you closely, and so am I.",
    ],
    [
      "A third tempering, and a fourth. You are making a smith of yourself, and the forge is your own flesh. I say it neither to stop you nor to praise you. I say it so that it has been said.",
      "You temper on every road you walk, and {ground} is the latest. I have never seen a body so determined to become a tool.",
      "Every ground on this road has had its pound of you. {Kname} says you take the hard school before the soft. I think you are afraid of the soft.",
      "You have tempered at every wayside. At some point the question changes from what you are building to what you are afraid of.",
    ],
    [
      "You are Unfed, and you tempered regardless. A body does not harden on nothing. It only dies of its own temper, slowly. Go and eat before you do another.",
      "With an empty purse and a hard drill at {ground}, you are borrowing from a body that has little to lend. I will not forbid it. I will ask who is paying for your rice.",
      "Hungry and tempering. It is the oldest mistake in the art, and I am still surprised each time. There is a stall; use it.",
      "The hard school at {ground} on an empty stomach. The qi will take what the rice does not give. I would rather it took rice.",
    ],
  ],
  comprehend: [
    [
      "Your Dao is already at a high rank, and you studied at {ground} nonetheless. A master who studies is a rare sight. It does me good to hear of it.",
      "A master of your Dao reading {ground} like a first-year: it is the best sign I know. The ones who stop reading are the ones who stop growing.",
      "You have a mastery to be proud of, and you studied at {ground} as if you had none. {Kname} was moved, I am told. I am moved, at second hand.",
      "At your rank, there is little at {ground} that is new to you. You studied it anyway. That is the whole of the difference between a master and a showman.",
    ],
    [
      "Your insight is high, and the working at {ground} gave up a good deal to it. I hope you will tell me what. I have a use for a mind like yours, and a weakness for knowing what it knows.",
      "With an insight like yours, {ground} was an open book. Be careful: a person who can read everything sometimes forgets to look up.",
      "You read {ground} deeply, and well. The risk of a sharp mind is that it cuts. I trust you will use yours to open things, not to cut them.",
      "A mind of that edge, at {ground}. {Kname} reports that you corrected a stroke. I have not had a disciple correct a keeper since the Sealing year.",
    ],
    [
      "Study after study, and now {ground}. You have a scholar’s habit of the open book. It is the best habit I know, and the dullest to describe.",
      "You study wherever you stop. I have noticed, and so has {kname}. It is, I think, how you rest.",
      "Every wayside has had your attention in it. {Kname} says you ask the hard question first. It is an unusual order, and I like it.",
      "You have studied at every ground. I should like to read what you have understood, if you ever set it down. I am a poor reader but a faithful one.",
    ],
    [
      "You have no Dao yet, and you studied at {ground} as if you had every one. It is the open hand’s way, and a good one: nothing yet taken, and so nothing yet refused.",
      "An open hand at {ground}, learning a little from everything. It is slow, and it is the only way I know that does not close doors.",
      "You carry no craft, and so you listen to every craft’s teacher. {Kname} says you were the best listener they have had in a year.",
      "An open hand learns what a closed fist cannot. You studied at {ground}, and I think the lesson was larger than the ground.",
    ],
  ],
  push: [
    [
      "You pushed at the gate at {ground} with your karma sunk low, and a heart demon at the door. I will say this once: I have seen that end badly. See that you rest.",
      "A push at {ground} with the heart demon at your shoulder. It is the oldest trap in the art, and the best-baited. I am afraid for you, and I will not say more.",
      "You pushed at {ground} with a dark karma. The gate was never going to open to you, and it knew, and it let you push anyway, for the pleasure of watching.",
      "At your karma, a push is a gamble with a heart demon. {Kname} says you did not flinch. I wish you had.",
    ],
    [
      "You pushed at the gate at {ground} when you were a hair from the threshold. If it did not open, it was only because the hair was longer than it looked. Try again, and not today.",
      "You were a breath from crossing, and you pushed at {ground}. I have never seen anyone so close to a gate and so calm. It frightens me.",
      "At ninety-five parts in a hundred, a push is not a gamble. It is a decision. {Kname} says you made it without ceremony.",
      "So near the threshold, and you pushed. I would not have had the nerve to wait.",
    ],
    [
      "A second push, and a third. You are leaning on the gate, not knocking. It is a different art, and I am not sure it has a name.",
      "You have pushed at more than one gate, and {ground} is the latest. I wonder what you are learning about the weight of them.",
      "Push after push. I do not think the gate counts them. I do. I have the habit of keeping count, and it is not a comfortable habit.",
      "Each push is a conversation, {kname} says, and you have had several. I hope the gates have been polite.",
    ],
    [
      "You were above the road’s realm, and you pushed regardless. It is the push of a person who has been sure for a long time. I should like to know what you are sure of.",
      "A cultivator of your height pushing at a threshold on a road meant for lesser: it is like a boy knocking at a very large door and finding it was ajar.",
      "You are beyond this road, and still you push. I take it that the road is a mirror, and that you are looking at something other than the road.",
      "At your realm, a push at {ground} is a ceremony more than a labour. I am touched that you remembered the ceremony.",
    ],
  ],
};

/** The Elder’s report on a road: a line for each practice the hero did there, said ahead of her usual memories. Six variants. */
export const REPORT_PRACTICE: Record<Practice, string[]> = {
  circulate: [
    "You sat at {ground} and ran your qi round. I take it as the one true thing in your account, because it cannot be told, only done.",
    "A circuit at {ground}. I am told {kname} counted it. I shall count it too, in the second ledger, where I keep the things that are not to your credit or discredit but only yours.",
    "You circulated at {ground}, and I find I can see it in how you stand. A person who has sat a good circuit stands differently from one who has not.",
    "At {place} you sat at {ground}. I have sat on a great many mats in my time, and I remember almost none of them, and all of what they did.",
    "{Kname} says you circulated at {ground} in silence. The sect has a name for that, and I will not use it. It would embarrass us both.",
    "Your circuit at {ground} is noted. It is the first thing I look for in a report, and the last thing anyone remembers to put in one.",
  ],
  temper: [
    "You tempered at {ground}. I am told the drill left marks, and that you did not mind them. I mind them, a little, on your behalf.",
    "The hard school at {ground} is not an easy place to be kind. I am told you were kind there. I would have thought it impossible.",
    "You took the drill at {ground} and returned with a straighter back. It is a curious bargain, and I am not sure which of us has made it.",
    "{Kname} tempered you, or you tempered yourself, at {ground}. Either way, the body at {place} has a new memory, and the memory is yours.",
    "You gave the hard drill at {ground} what it asked. It is the sort of thing the sect writes on a plaque and the dead write on a stone.",
    "A tempering at {ground}, then. I shall add it to the list of things that are good for you and that I should not like to do.",
  ],
  comprehend: [
    "You studied at {ground} and came back with something. I do not need to be told what. I can see it in how you ask.",
    "At {place} you read {ground} for what it meant. I have spent a life reading things for what they said, and have missed what they meant. Teach me.",
    "A comprehension at {ground}, {kname} says. I should like it written down. I know you will not. It is the nature of the thing.",
    "You understood the working at {ground}. I find I envy that more than I envy a breakthrough. A breakthrough is a door. Understanding is the house.",
    "You sat with {ground} until it opened. I am told it was a long sit. I should have liked to bring you tea.",
    "The Dao at {place} is a little clearer to you than to most. {Kname} has told me so. I tell you in turn, so that it is said twice.",
  ],
  push: [
    "You pushed at the gate at {ground}. Whether it opened is in the ledger of your qi, not in my report. I shall merely note that you tried.",
    "A push at {ground}, and the whole of {place} felt it. I have asked {kname} not to speak of it. It will be spoken of anyway.",
    "At {ground} you put your qi to the threshold. I am told it was an event. I am always told it was an event. I have never been there.",
    "{Kname} says you pushed with all you had. It is the only way to push. A half push is a way of declining to cross.",
    "You pushed at {ground}. I will write only that the gate was tried, and that the one who tried it came back.",
    "A push at the threshold, at {ground}. Rest, and eat, and let it settle. It is a thing that settles slowly.",
  ],
};
