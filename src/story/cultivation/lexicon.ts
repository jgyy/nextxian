import type { Practice, Stretch } from "@/engine/practice";

export { PRACTICES, type Practice, type Stretch } from "@/engine/practice";

/**
 * Wording for the Cultivation Roads. Every table has several variants, and a road picks by its index and the stage, so the forty roads
 * and the scenes of a walk do not say the same thing twice. Slots: kname, place, focus, ground (the place on the road where the work is
 * done, with its article: “the sitting mat”).
 */

/** The choice labels for the four practices. Eight variants each, and a road takes the one its index points at. */
export const PRACTICE_LABEL: Record<Practice, string[]> = {
  circulate: [
    "Sit down at {ground}, and let {kname} watch your qi go once round the circuit.",
    "Take your place at {ground} and circulate your qi, a breath to a turn, until it settles.",
    "Close your eyes at {ground} and run your qi round the great circuit, slowly, with {kname} counting.",
    "Ask {kname} for a place at {ground}, and spend an hour circulating without once opening your eyes.",
    "Kneel at {ground} and draw your qi in a full circuit, down the spine and up the front.",
    "Settle at {ground} and let your breath carry your qi round and round until the turning is all that is left.",
    "Take the cold seat at {ground} and circulate until the qi stops fighting you.",
    "Sit with {kname} at {ground} and circulate your qi in time with a slow count.",
  ],
  temper: [
    "Ask {kname} to put you through the hard drill at {ground}, and drive your qi into your bones.",
    "Take the heavy work at {ground} and temper your body until it shakes, and then a little further.",
    "Strip the qi out of your limbs one by one at {ground}, and pour it back in under {kname}’s eye.",
    "Let {kname} set you the painful exercise at {ground}, and do not stop until it is done.",
    "Beat your qi into your muscles at {ground} the way a smith beats iron, and let {kname} judge the temper.",
    "Hold the punishing posture at {ground} while {kname} counts, and breathe through it.",
    "Run the tempering drill at {ground} until your hands stop trembling, and then run it again.",
    "Give yourself to the hard school at {ground}, and let {kname} break you open if it will.",
  ],
  comprehend: [
    "Ask {kname} what the work at {ground} is for, and sit with the answer until it makes sense.",
    "Study the working at {ground} until you can see the Dao behind it, and tell {kname} what you see.",
    "Listen to {kname} read the old text at {ground}, and try to hear the sentence behind the sentence.",
    "Take the question that {ground} puts to you, and refuse to leave until you have an answer.",
    "Trace the pattern at {ground} with your finger and your qi together, and let {kname} correct the stroke.",
    "Sit at {ground} with the hardest passage you know, and ask {kname} where you are misreading it.",
    "Read {ground} the way a scholar reads a stone, for what was left out.",
    "Ask {kname} what the founders understood about {ground} that the sect has since forgotten.",
  ],
  push: [
    "Tell {kname} you are near the gate of the next realm, and ask to push at it here, at {ground}.",
    "Put your qi to the gate of the next realm at {ground}, and do not draw it back.",
    "Ask {kname} to stand guard at {ground} while you push at the threshold with everything you have.",
    "Stand at the edge of your realm at {ground}, and say aloud that you mean to cross it.",
    "Gather all your qi at {ground} into one hard point, and drive it at the gate.",
    "Say to {kname}, plainly, that you are ready, and lay yourself open at {ground} to the push.",
    "Take the last breath of this realm at {ground}, and send it all against the gate.",
    "Let {kname} see you on the threshold at {ground}, and push through what is left.",
  ],
};

/** What the choice says when it is locked, by practice. `{ground}` and `{need}` are filled by the builder. */
export const PRACTICE_HINT: Record<Practice, string> = {
  circulate: "{ground} will teach only a cultivator of {need} or above, and nothing to one more than two realms higher.",
  temper: "Tempering costs qi, and the hard drill at {ground} is closed to anyone more than two realms above the road. You need 10 qi.",
  comprehend: "{ground} gives up its meaning only to those who have studied. You need Insight {insight}.",
  push: "You are not ready to push. A push at the gate needs you three-quarters of the way through your realm, and 12 qi to throw at it.",
};

/** How the keeper reads the stretch of the realm the hero is in. Six variants per stretch. */
export const PROGRESS_READ: Record<Stretch, string[]> = {
  early: [
    "{Kname} watches how you breathe and says you are early in this realm. The qi has not yet learned your shape, and {ground} will not hurry it.",
    "You have only just settled into your realm, {kname} says, and the work at {ground} will feel a long way off for a while yet. It is not a fault. Everyone starts at the bottom of a stair.",
    "Your qi is thin yet in this realm, and {kname} says so plainly. {Ground} will give you what it can, which is a lesson in how much more there is.",
    "{Kname} sizes you up with one look: new to the realm, the qi not yet dense, the habits of the last stage still in the shoulders.",
    "You stand at the foot of your realm, and {kname} nods at {ground} as at a ladder. The first rungs are always the widest apart.",
    "Early in the realm, {kname} says, a cultivator does not work. They accumulate. The work is for later, when there is something to work with.",
  ],
  middle: [
    "{Kname} says you are in the middle of your realm, where cultivators feel strongest and are least forgiven for it. {Ground} will take what you have and ask for the rest.",
    "You are well into the realm, {kname} says, with the qi dense enough to do something with. It is a good place to be at {place}.",
    "Midway up your realm, {kname} sees at once, and the sight pleases: steady, filled, the dull gold of a thing that is neither raw nor ripe.",
    "The middle of a realm is a plateau, {kname} says, and {ground} was built for plateaus. There is nothing to prove here, only to deepen.",
    "{Kname} tells you the middle of a realm is where most cultivators stay for years, and where the good ones are made. {Ground} is waiting for you to be good.",
    "Your qi has the weight of a full cup now, {kname} says, and the whole of {place} can see you carrying it carefully.",
  ],
  cusp: [
    "{Kname} puts down what is in their hands and looks at you with sudden attention. You are on the cusp, and anyone at {place} who knows qi can tell.",
    "You are a breath from the threshold, {kname} says in a low voice, and the whole of {place} seems to hold its own. {Ground} was made for this moment.",
    "{Kname} says the air around you is pressing outward, the way it does before a breakthrough, and asks whether you would like {ground} cleared.",
    "The cusp has a sound, {kname} says, a thin high note under the breath. You are making it, and the walls at {place} are humming to it.",
    "Anyone can see you are about to cross, {kname} says. The only question left is whether you do it here, at {ground}, or somewhere less prepared.",
    "{Kname} steps back from you at once, as one steps back from a kettle just before it sings. You are on the cusp, and {place} makes room.",
  ],
};

/** The keeper reads the hero’s speed against the plain rate: quick at 130 and above, slow at 85 and below. */
export const SPEED_READ: Record<"quick" | "slow", string[]> = {
  quick: [
    "{Kname} sees how fast the qi runs in you and says it is rare: you have gathered every aid there is, and {place} can feel the difference.",
    "Your cultivation runs quick, {kname} says, quicker than {ground} was built for. It will not hold you long, and {kname} says so kindly.",
    "{Kname} says you are carrying a great deal of help, goods and leases and roots, and that all of it shows in the way the qi moves.",
    "At the rate you cultivate, {kname} says, a year here is three elsewhere. {Ground} has seen few like you, and knows what to ask of them.",
    "The qi comes off you like heat off a stone, {kname} says. Whatever you are carrying, it is working.",
    "{Kname} admires your pace in the dry way of a keeper who has seen paces: quick, but not yet reckless. There is room to go faster.",
  ],
  slow: [
    "{Kname} says your cultivation runs slow, and does not say why. {Ground} is for slow cultivators too, and has always been.",
    "You are cultivating below the plain rate, {kname} says gently, and a slow rate is almost always something the purse or the roots can mend.",
    "{Kname} watches you draw a breath and says the qi in you moves like a river in a dry season: not stopped, only thin.",
    "A slow cultivator at {place} is no shame, {kname} says. {Ground} was built by slow ones, who had time to understand what they were doing.",
    "{Kname} says your pace is slower than most, and that the road will not wait. There are goods to be bought and leases to be held that would quicken it.",
    "Your qi drags, {kname} says, and does not apologise for saying so. It is a kindness to name a drag before it becomes a habit.",
  ],
};

/** The keeper notices a hero who broke into the road’s own realm only a few decisions ago. Six variants. */
export const FRESH_READ: string[] = [
  "You broke into this realm only a few decisions ago, and {place} knows it. {Kname} says the new qi still smells of the old, like fresh paint over a darker coat.",
  "{Kname} sees the newness at once: a hero who has crossed a threshold in the last few days, with the walls of the realm still wet. {Ground} has been waiting for exactly this.",
  "Your breakthrough is recent, {kname} says, and the qi has not yet found its level. It will slosh a little for a day or two, and {kname} recommends that you do nothing that needs balance.",
  "{Kname} says you have the look of the newly risen: wide-eyed, a little giddy, breathing too deep. Everyone at {place} has been there, and no one will mention it.",
  "A breakthrough in the last few days, {kname} says, and the realm still ringing like a struck bell. {Ground} is a good place to let it die down.",
  "The new realm sits on you as a borrowed coat sits on a child, {kname} says, and the kindest thing {place} can do is to leave it alone until it fits.",
];

/** The keeper reads how the six newer beginnings shaped the hero’s method. Each flag was set by a choice in the hero’s prologue. Two variants each. */
export const METHOD_READ: Record<string, [string, string]> = {
  og_cave_m_settle: [
    "You circulate in the Settling half’s slow, patient way, taken from a dead cultivator’s slip, and {kname} says that nobody has done it that way at {place} for centuries.",
    "{Kname} watches the old Settling breath go round you and says the founders would have known it. Whoever taught you was someone they would have bowed to.",
  ],
  og_cave_m_break: [
    "The Breaking half of a dead cultivator’s art shows in how you take {ground}: hard and fast and at some cost. {Kname} sets a bucket of cold water within reach.",
    "{Kname} sees the Breaking half in your shoulders and says there is a reason the dead cultivator stopped at the sixth line. You have gone past it, and {kname} does not say how it looks.",
  ],
  og_cave_m_both: [
    "You use the Settling and the Breaking halves of the dead cultivator’s art together, as a smith uses hammer and water, and {kname} stops what they are doing to watch.",
    "{Kname} says it is rare to see both halves of an art joined by someone who has read the join. You have, and {place} has gone quiet.",
  ],
  og_cave_m_buried: [
    "You buried the Breaking half with the dead, and you circulate on the Settling alone. {Kname} says it is slower, and that {place} has long outlasted every faster way.",
    "{Kname} notes the gap in your art where the Breaking half should be, and says nothing of it, which at {place} is a form of respect.",
  ],
  og_furnace_m_fume: [
    "You cultivate through the fumes of a small furnace, the way a pill-house boy is taught, and {kname} breathes in once and recognises the recipe of your apprenticeship.",
    "{Kname} says the sweetness on your breath is a pill-house sweetness, slow and fume-fed, and asks which furnace, and then does not wait for the answer.",
  ],
  og_furnace_m_burn: [
    "You swallowed a half-cooked pill and let it break you open. {Kname} can see where it burned, and does not recommend it to anyone at {place}.",
    "The burn that opened you shows in how you hold {ground}, a little too straight, like a person with a splinter. {Kname} brings you water.",
  ],
  og_furnace_m_weigh: [
    "You weigh your breath like a dose, and {kname} nods at the exactness. At {place} the cultivators who measure are the ones who last.",
    "{Kname} says a pill-maker’s cultivation is a recipe: so much qi, so much time, so much rest. You follow it to the grain, and {ground} rewards you for it.",
  ],
  og_furnace_m_keep: [
    "You kept the pill for another and cultivate on breath and rice alone. {Kname} says that is the oldest and slowest of the pill-houses’ ways, and the only one that never poisoned anyone.",
    "{Kname} sees you carry the pill and not eat it, and tells you that restraint is the first thing a pill-maker is taught and the last they practise.",
  ],
  og_lamp_m_hold: [
    "You hold your qi as a steady flame in a still room, and {kname} says that nothing at {place} is harder or more rarely done.",
    "The Holding Breath makes you a quiet presence at {ground}, and {kname} lowers their own voice without quite meaning to.",
  ],
  og_lamp_m_feed: [
    "You feed your qi like a lamp-keeper feeds a flame: with all you have, and a little you didn’t. {Kname} sees the cost in your hands and sets a stool beside you.",
    "{Kname} says the Feeding Breath is bright, and burns whoever tends it. You are tending it well, and {place} watches the light.",
  ],
  og_lamp_m_share: [
    "You teach as you breathe, with the Sharing Breath, and {kname} says that at {place} the best cultivators were always those who could not keep a technique to themselves.",
    "{Kname} sees how you breathe for two: yourself and someone else’s, a quarter-beat late. It is the Sharing Breath, and it softens the room.",
  ],
  og_lamp_m_dim: [
    "You let your qi sink to a bead, and learn what it is when it is almost out. {Kname} says that this is the art of the dark, and that {place} has a use for it.",
    "The Dimming Breath leaves you nearly invisible at {ground}, and {kname} has to look twice to find you in the room.",
  ],
  og_listener_m_open: [
    "You take the Open Ear into every practice, and {kname} says the qi at {place} passes through you as a wind through a screen, and leaves what it wants.",
    "{Kname} says that a listener who keeps the Open Ear always looks as if they were about to speak. You are about to speak, and {ground} waits.",
  ],
  og_listener_m_narrow: [
    "You follow one thread of qi through {ground} with the Narrow Ear, and {kname} says it is the rarest and most tiring way to listen.",
    "{Kname} says that the Narrow Ear picks one voice from many, and that you do it without effort. {Place} has many voices, and you have chosen one.",
  ],
  og_listener_m_answer: [
    "You speak back to the qi of {place} with the Answering Ear, and {kname} flinches, and then says: it answered.",
    "{Kname} says a listener who answers is a listener who will be answered, and that the whole of {place} is now aware of you, which you will have to live with.",
  ],
  og_listener_m_closed: [
    "You rest in the Closed Ear and take nothing in, and {kname} says it is the oldest of the listener’s arts and the one that no one comes to {place} to learn.",
    "{Kname} says the Closed Ear leaves a listener unreadable. You are, and {ground} does not seem to mind.",
  ],
  og_struck_m_ground: [
    "You ground your light through the soles of your feet, and {kname} says the floor at {place} has not been so well understood in years.",
    "{Kname} sees the Grounding Breath in how you stand, slow and rooted, and sets an iron kettle well out of your reach.",
  ],
  og_struck_m_channel: [
    "You run the light round your meridians until it learns them, and {kname} says it is the quickest way and the most dangerous. {Place} has a standing rule about sparks.",
    "The Channelled Breath shows in the shake of your left hand, and {kname} puts a cloth in it without a word. It smoulders.",
  ],
  og_struck_m_study: [
    "You study your own storm, and ask it what it wants. {Kname} says there are cultivators at {place} who have spent a lifetime afraid to ask.",
    "{Kname} notes your curiosity about the light, and says the Studied Breath is what the old sages used. It is slow, and it does not burn.",
  ],
  og_struck_m_return: [
    "You gave your light back to the sky, and the sky took it. {Kname} says no one at {place} has ever heard of that, and asks what you gave in exchange.",
    "{Kname} says that a cultivator who returns heaven’s spark is either very foolish or very wise, and that the sky has not yet decided which.",
  ],
  og_dream_m_faithful: [
    "You breathe a stranger’s art to the letter, and {kname} says that fidelity is a lost virtue at {place}. The art goes round you as if it had been waiting.",
    "{Kname} watches the Faithful Breath go round and says that you do not so much cultivate as obey. It is a very good way to do it, if the stranger was wise.",
  ],
  og_dream_m_broken: [
    "You went past the end of the dream and invented the rest. {Kname} says that the art is yours now, and that {place} has no word for what it is.",
    "The Broken Breath has left a ragged edge on your qi, and {kname} says it will heal into something nobody has seen. {Ground} will be interested.",
  ],
  og_dream_m_written: [
    "You set the whole dream down in a notebook and study it as another’s. {Kname} says this is what scholars do, and what cultivators wish they did.",
    "{Kname} sees the notebook in your sleeve and says a written art is a bridge, and that a bridge is a thing you can cross twice.",
  ],
  og_dream_m_thankful: [
    "You stop where the stranger stopped, and say thank you. {Kname} says it is the humblest practice at {place}, and the one the roof would recognise.",
    "{Kname} listens to the pause at the end of your breath and says it is a courtesy to the dead, or the unborn, or the unknown. {Ground} receives it.",
  ],
};

/** What the road says at the way back about each practice the hero did there. Six variants each. */
export const RETURN_PRACTICE: Record<Practice, string[]> = {
  circulate: [
    "You sat the circuit at {ground}, and the qi still goes round you, quieter than when you came.",
    "The circuit at {ground} has left a thin warm line along your spine, and {kname} says it will last the week.",
    "You circulated at {ground}, and your breath at the door is longer than it was.",
    "The turning at {ground} has not stopped. {Kname} says it never entirely does, and that this is how a cultivator is made.",
    "Your qi went round at {ground} until the going-round was all there was, and now it has stopped you feel it as a ringing.",
    "{Kname} nods at the way you walk out: lightly, with the circuit still running under your feet.",
  ],
  temper: [
    "You tempered at {ground}, and your hands will remember it for days. {Kname} puts a salve in one of them.",
    "The hard drill at {ground} has left your limbs aching and bright. {Kname} says that is how steel sounds when it is ready.",
    "You took the pain at {ground} and gave it back as qi. {Kname} says most people give back less than they take.",
    "Your body ached at {ground}, and the ache has turned, on the way out, into something like pride.",
    "The tempering at {ground} shows in your shoulders, higher and set. {Kname} approves.",
    "{Kname} watches you go and says the body keeps what the mind forgets. {Ground} will keep this.",
  ],
  comprehend: [
    "You sat with the working at {ground} until it opened, and what is left is a clean quiet, like a room after an argument.",
    "{Kname} asks what you understood at {ground}, and you can say it in one plain sentence, which is how you know it is true.",
    "The meaning of {ground} came slowly, and now it will not go. {Kname} says that is what understanding is.",
    "You read {ground} for what was left out, and found it. {Kname} says no one has read it so in a decade.",
    "At {ground} you understood what you had only known before. The difference is in how you stand.",
    "{Kname} says the Dao is not found, only agreed with. You agreed with {ground} for an hour, and it shows.",
  ],
  push: [
    "You pushed at the gate at {ground}, and whatever came of it, the gate knows your name now. {Kname} says that is half of crossing.",
    "The push at {ground} took everything you had. {Kname} sits you down and sets a cup in your hands without asking.",
    "You put your whole qi to the threshold at {ground}, and for a moment the threshold was thin. {Kname} saw it.",
    "At {ground} you said aloud that you meant to cross, and meant it. The words are still in the room.",
    "{Kname} says a push is never wasted. Even a gate that does not open learns the shape of the one who pushed.",
    "You gave the gate everything at {ground}, and it gave you a very clear sense of how much it holds.",
  ],
};

/** What the Elder says unprompted at a Cultivation wayside’s hub, by her face. Short, so a hub keeps to its word cap; ten variants of each, so the ten waysides do not share a line. */
export type HubMood = "furious" | "afraid" | "suspicious" | "tender";
export const HUB_MOOD: Record<HubMood, string[]> = {
  furious: [
    "Go and sit. I would sooner you steadied yourself than stood in front of me.",
    "Cultivate. A temper that cannot be settled by a circuit cannot be settled by me.",
    "I am angry. Do not cultivate on it; breathe it out first.",
    "Practise, then. I shall be here, and so will the anger.",
    "Do not mistake my silence for leave to go slowly. Sit.",
    "Four grounds, and I have no wish to hear which you chose. I wish to see what comes back.",
    "Go and be taught something by someone who is not angry with you.",
    "I could say what I think of you. Cultivate instead; it is quieter.",
    "A cultivator in disgrace is the one who most needs the circuit. Go.",
    "I am too angry to teach you. The keepers are not. Go.",
  ],
  afraid: [
    "Go and sit. I would rather you were stronger than I am afraid.",
    "Cultivate. If there is something coming, I want you able to meet it.",
    "I am frightened. Go and make yourself harder to break.",
    "Practise. A frightened Elder wants a strong disciple.",
    "The keepers will not tell you what I fear. Learn what they teach, and you will not need telling.",
    "Be quick about it. I should like to know what you can do before I need it.",
    "Go, and do not come back until the qi in you is steadier than mine.",
    "I would climb a stair for you if I could. I cannot. Climb these instead.",
    "If I am afraid of you, make it a reasonable fear. Practise.",
    "Fear is a fine teacher and a poor cook. Go and be cooked slowly.",
  ],
  suspicious: [
    "Go and cultivate. It is the one account of you I have no cause to doubt.",
    "Practise, and let the grounds say what you will not.",
    "Four keepers will read your qi. I trust their eyes more than your mouth.",
    "Sit at every ground. I shall judge you by what stays when you rise.",
    "I do not forbid it. I simply intend to ask what you were taught.",
    "Go, then. Qi does not lie, which is more than I can say for the people who carry it.",
    "Cultivate. Show me a hand that has done the work, and I may stop watching it.",
    "I will not follow you in. I will know, from the way you walk out, what happened.",
    "Practise, and be honest with the grounds, if not with me.",
    "A cultivator’s qi is the one record I cannot amend. Go and make one.",
  ],
  tender: [
    "Go and sit, and take your time.",
    "Practise. I like to think of you on a mat in the sun.",
    "Four grounds, all kinder than I am. Go, and come back whole.",
    "Cultivate as long as you like.",
    "I shall be here when you have finished. Do not hurry on my account.",
    "It does me good to watch you grow. Go and do some more of it.",
    "Go on. The keepers are gentle, and so, I find, am I, for the moment.",
    "Practise well. I will ask nothing of you, and wait to be told.",
    "I have a fondness for people who sit still on purpose. Go.",
    "If a gate opens for you today, come and tell me. I should like to be the first to know.",
  ],
};
