import type { ChoiceTone } from "@/engine/types";

/**
 * The shared wording for the generated side roads. Each road fills these templates with its own
 * place, keeper, relic, omen and secret, so the four approaches and the five beats of each approach
 * read differently from road to road. Slots in braces are replaced by `fill`; a capitalised slot
 * ({Place}) starts a sentence. Every template is short, so a scene stays well under the word cap.
 */

/** Tones in the order roads rotate through them. */
export const TONE_RING: readonly ChoiceTone[] = ["inquiry", "mercy", "force", "deceit", "quiet", "truth"];

/** Label for choosing an approach on a road's entry scene, by the approach's tone. */
export const APPROACH_LABEL: Record<ChoiceTone, string[]> = {
  inquiry: ["Study {focus} and ask what it was built to hide.", "Go through {focus} slowly, reading what others walked past."],
  mercy: ["Go to {focus} and see who needs help there.", "Offer your hands at {focus} before you offer any questions."],
  force: ["Break your way into {focus} before anyone can prepare.", "March up to {focus} and demand to be let in."],
  deceit: ["Pass yourself off as someone expected at {focus}.", "Slip toward {focus} behind a borrowed errand."],
  quiet: ["Watch {focus} from a distance until it shows its habits.", "Wait near {focus} and let the day teach you its rhythm."],
  truth: ["Walk up to {focus} and say plainly why you have come.", "Tell the people at {focus} who you are and what you want."],
};

/** What stands in the way, by the tone of the approach. Each is a noun phrase with its article. */
export const OBSTACLES: Record<ChoiceTone, string[]> = {
  inquiry: ["a shelf of ledgers in a cipher you half remember", "a locked cabinet of rubbings", "a wall of unlabelled jars", "a register with its last pages cut out", "a door painted over to look like wall", "a map whose margins have been scraped"],
  mercy: ["a sick child on the step", "a woman who cannot stop apologising", "an old man begging you to carry a bundle", "a dog tied outside a shut house", "a row of unlit lamps for the dead", "a crowd waiting for alms that will not come"],
  force: ["a bolted gate", "a crossbar thick as your arm", "a watchman with a cudgel and no manners", "a rope across the path hung with bells", "a fence of sharpened stakes", "a door that has been broken once and mended badly"],
  deceit: ["a clerk who wants a name you will have to invent", "a guard who thinks he knows your face", "a seal that must be copied by hand", "a door that opens only for the person it expects", "a ledger that will notice a missing page", "a bell that rings when the wrong foot crosses"],
  quiet: ["a stretch of path that must be crossed without a sound", "a sleeping dog nobody wants to wake", "a courtyard in the middle of evening prayers", "a lamp that must not go out", "a long wait at a shut gate", "a slope of loose scree"],
  truth: ["a man who will only talk to someone who speaks plainly", "an oath-stone said to burn liars", "a council that has asked for an honest account", "a village elder who has heard every excuse", "a sworn witness who is waiting to be asked", "a question with only one answer"],
};

/** Who stands beside you, by the tone of the approach. Each is a noun phrase with its article. */
export const ALLIES: Record<ChoiceTone, string[]> = {
  inquiry: ["an old copyist", "a clerk with ink to the elbow", "a retired examiner", "a student who never sleeps", "a blind reader of rubbings", "a quiet cartographer"],
  mercy: ["a tired midwife", "a nun with a basket of bandages", "a ferryman’s widow", "a boy who runs errands for everyone", "an almsgiver with empty hands", "a gardener who talks to the dying"],
  force: ["a retired warden", "a bounty hunter between jobs", "a smith with scarred forearms", "a mule driver who fears nothing", "a gate-breaker’s daughter", "a swordsman gone to seed"],
  deceit: ["a peddler of forged talismans", "a courier with three names", "a pickpocket in a priest’s robe", "a fortune-teller who reads faces", "a gambler who owes everyone", "a go-between with a pleasant smile"],
  quiet: ["a hermit who has not spoken in a year", "a night watchman", "a shepherd with a silent flute", "a washerwoman at dawn", "a monk keeping a vow", "a lamplighter on his rounds"],
  truth: ["a village arbiter", "a witness who will not lie", "a priest of the oath-stone", "an honest innkeeper", "a magistrate’s retired scribe", "a grandmother who remembers"],
};

/** The first paragraph of an approach scene, by stage (0 to 4). Four variants each. */
export const STAGE_OPEN: string[][] = [
  [
    "You turn toward {focus}, and the way narrows as you go. {Place} is quieter here than at its edge, and {omen} follows you like a stray dog. {Keeper} is said to keep watch there.",
    "The path to {focus} runs behind {place}, where paving gives way to packed earth. Few have walked it this season, and {omen} marks the way better than any signpost. {Keeper} is said to keep the end of it.",
    "It takes the rest of the morning to reach {focus}. All the while {omen} thickens, and the people of {place} watch you from doorways they do not quite step out of. {Keeper} is the only one who does not look away.",
    "{Keeper} has told you where to find {focus}, but not why. You follow the directions and find the last turning unmarked, exactly as {kname} said it would be.",
  ],
  [
    "At {focus} you find the first true thing {place} has shown you. {Obstacle} stands in the way, and behind it are signs that someone was here before you and left in a hurry.",
    "{Focus} is not what you were told. Up close it is older and plainer, and it has been tended by someone who did not want it noticed. Beyond it waits {obstacle}.",
    "A faint trail leads from {focus} deeper into {place}. You follow it past {obstacle}, and for a moment the whole district seems to hold its breath.",
    "You circle {focus} twice before you see what is wrong with it. Everything near it has been moved a little, to make it look as if it always stood alone. {Obstacle} guards the rest.",
  ],
  [
    "{Kname} finds you there, as {kname} seems to find everyone who lingers. For a time neither of you speaks. Then {kname} says, quietly, that what you want was never lost. It was put away.",
    "Something shifts behind you. {Kname} stands at the edge of the light with {ally}, and the look on {kname}’s face says you have walked into the middle of an old quarrel. {Omen} presses closer.",
    "What you came for turns out to be half of a larger matter. {Ally} knows the other half and will not say it in the open. {Omen} makes the choice of where to speak harder than it should be.",
    "A bell rings once in {place}, and every sound stops. When it fades, {kname} is standing where no one stood before, regarding you the way the Law Hall regards an unsigned page.",
  ],
  [
    "Now the matter has an edge. {Obstacle} is at your back and {ally} is at your side, and in front of you lies {relic}, which the whole of {place} has been pretending not to know about.",
    "You can see the shape of it at last, though not yet all its edges. The knowledge is heavy, and everyone who might share it is watching to see what you do with it.",
    "{Kname} sets {relic} on the table between you. “Everyone here has a reason to want this gone,” says {kname}. “I would like to hear yours before I decide whose side the night is on.”",
    "The lamps gutter. For three breaths {place} is silent, and you understand that whatever you do next will be remembered here long after you have gone.",
  ],
  [
    "It is over faster than it began. {Omen} thins, {kname} lets out a breath, and {place} goes back to its ordinary noise as though nothing had passed through it.",
    "Afterward you sit a while with {relic} in your hands. Nothing is solved, but something has been named, and in {place} that counts for more than an elder would admit.",
    "{Kname} walks you to the edge of {place} without being asked. At the last stone, {kname} says only: “Whatever you tell them up the mountain, remember that you saw it with your own eyes.”",
    "You leave by the way you came, and the road feels shorter. Behind you {place} closes over what happened like water over a dropped stone.",
  ],
];

/** The second paragraph of an approach scene, by the tone of the approach. Four variants each. */
export const MODE_BEAT: Record<ChoiceTone, string[]> = {
  inquiry: [
    "You ask questions the way a surveyor drives stakes: slowly, and in a line. {Ally} answers some of them. The answers that are withheld tell you as much as the ones given.",
    "There is a pattern in how {place} remembers things, and you begin to find its edges. Dates are exact, names are vague, and nobody mentions the winter before last.",
    "You copy what you can into your notes. Half of it will mean nothing tomorrow, and the other half may be the reason you were sent.",
    "Every answer you receive has been prepared in advance. You start listening for the one that was not, the sentence said a breath too quickly.",
  ],
  mercy: [
    "You put your questions aside and ask what is needed. {Ally} stares, then laughs, then tells you. Helping takes the whole afternoon, and no one in {place} has been looked at that way in a long time.",
    "Kindness opens doors that questions never reach. People begin to speak without being asked, in the low voices of those unsure whether they are allowed to hope.",
    "You carry water, mend a latch, sit with someone through a long cough. It is not the Law Hall’s kind of work, and you find that you do not mind.",
    "No one asks you to be gentle. You are gentle anyway, and the cost is time you do not have and trust you could not have bought.",
  ],
  force: [
    "Patience was never going to get you through, and you know it. You set your shoulders and push, and {place} gives way with a sound like a held breath let go.",
    "You make it plain that you will not be turned away. {Ally} steps aside with a look that mixes relief and contempt, and the rest of the street finds urgent business indoors.",
    "Something breaks, and it is not only a latch. You hear it in the quiet that follows, the particular quiet of people deciding whether to be afraid of you.",
    "You have never found it hard to be loud. It is the aftermath that costs. Everyone in {place} will remember how you came in, whatever you say on the way out.",
  ],
  deceit: [
    "The lie is easy to begin and difficult to finish. {Ally} accepts it with a nod that may mean belief or may mean a long memory, and you cannot tell which.",
    "You keep your face agreeable and your hands busy. People forgive a great deal in someone who seems to want nothing, and you are wanting nearly everything.",
    "You change a detail of your errand halfway through and watch who notices. Two people do. You file their faces away for later.",
    "A false name slips off your tongue as smoothly as a real one. That ought to bother you more than it does, and you put the thought away for another day.",
  ],
  quiet: [
    "You do not hurry. {Place} reveals itself the way a pond does when you stop throwing stones: first the surface, then the movement under it, then the shape of what is waiting.",
    "Hours pass. {Ally} brings you tea without being asked, and says nothing, and that silence turns out to be the most honest thing anyone has offered you here.",
    "You let the day go by and keep your eyes open. A great deal happens when nobody expects you to be watching.",
    "Stillness is its own kind of cultivation. You breathe, and the world slows, and details you would have missed come forward one at a time.",
  ],
  truth: [
    "You say what you came to say and then you stop talking. {Ally} looks at you for a long time and then, slowly, sets down whatever guarded thing was in their hands.",
    "Plain speech is rare in {place}, and it lands like a dropped bowl. Nobody replies for a moment. Then a dozen people reply at once.",
    "You do not soften your account. It is not a comfortable thing to hear, but {kname} nods as though a long argument has finally been given an answer.",
    "Honesty is cheaper than you feared and dearer than you hoped. You find you can stand in the silence after it without needing to fill it.",
  ],
};

/** Scene headings by approach tone and stage. */
export const STAGE_TITLE: Record<ChoiceTone, string[]> = {
  inquiry: ["A Question Asked Slowly", "The Margin of the Page", "What the Record Omits", "A Pattern in the Dust", "The Answer Withheld"],
  mercy: ["A Kindness Offered", "The Weight of a Bundle", "Those Left Behind", "Warmth in a Cold Room", "What Was Given"],
  force: ["The Barred Way", "A Door Tested", "The Edge of Patience", "A Hand on the Hilt", "The Cost of Breaking In"],
  deceit: ["A Borrowed Name", "The Careful Lie", "A Seal Copied", "What Was Not Said", "Footprints Swept Away"],
  quiet: ["The Soft Step", "The Long Wait", "A Held Breath", "Between Two Bells", "The Path Back"],
  truth: ["Plain Speech", "The Honest Account", "An Oath Considered", "What Cannot Be Unsaid", "The Reckoning"],
};

/** Choice labels by tone. Five variants each. */
export const CHOICE_LABEL: Record<ChoiceTone, string[]> = {
  truth: [
    "Tell {kname} plainly what you came to find, and why.",
    "Lay out everything you have seen at {focus}, without softening any of it.",
    "Admit to {ally} that you do not yet know whom to trust in {place}.",
    "Say aloud what you believe about {focus}, and accept whatever comes of saying it.",
    "Give {kname} your true name and your true errand, and ask for the same in return.",
  ],
  mercy: [
    "Offer {ally} what food and coin you can spare, and ask for nothing.",
    "Sit beside {kname} and let the silence be kind for a while.",
    "Take on a small task for {ally} before you press for answers.",
    "Speak gently of those who have suffered in {place}, and mean it.",
    "Leave something at {focus} for the people who cannot come back for it.",
  ],
  inquiry: [
    "Study {focus} a little longer, and write down what does not fit.",
    "Ask {ally} one careful question about {focus}, then wait for the whole answer.",
    "Compare what {kname} told you with what {focus} shows.",
    "Search the margins of {focus} for marks that someone tried to remove.",
    "Trace {obstacle} back to whoever put it there.",
  ],
  deceit: [
    "Claim an errand from the Law Hall that you do not have.",
    "Tell {ally} a convincing half-truth and watch which half is believed.",
    "Slip a small piece of {focus} into your sleeve while {kname} looks away.",
    "Let {kname} believe you already know more than you do.",
    "Use a borrowed name to get past {obstacle}.",
  ],
  force: [
    "Press past {obstacle} before it can be explained away.",
    "Rest a hand on your blade and tell {kname} the questions are not optional.",
    "Break the quiet around {focus} with a demand no one can ignore.",
    "Shoulder {ally} aside and take what you came for.",
    "Warn {kname} that the Law Hall will hear of any lie told here today.",
  ],
  quiet: [
    "Wait in the shadow of {focus} until the street empties.",
    "Say nothing, and let {kname} fill the silence.",
    "Rest a while and let {place} show you its ordinary face.",
    "Move on at the pace of the slowest person here, and watch.",
    "Step back from {obstacle} and see who comes to it next.",
  ],
};

/** The hidden route behind one approach: three scenes, then the return. */
export const HIDDEN: { title: string; paragraphs: string[] }[] = [
  {
    title: "A Stair Behind the Wall",
    paragraphs: [
      "Behind {focus} a narrow stair goes down into rock the colour of old tea. You would have missed it had you not spent so long reading {place}. The air below smells of {omen} and something older.",
      "At the bottom, a lamp has been left lit. Someone expected a visitor, or at least refused to be caught unready for one.",
    ],
  },
  {
    title: "The Dry Cellar",
    paragraphs: [
      "The cellar is small and carefully kept. On its single shelf lies {relic}, wrapped in cloth that has been changed more than once. Someone has come here for years to keep it dry, and has never once taken it away.",
      "You do not touch it yet. You stand and let the silence of the room tell you how long it has been waiting.",
    ],
  },
  {
    title: "Six Scratched Lines",
    paragraphs: [
      "On the wall above the shelf, in a hand you almost recognise, someone has scratched the truth in six lines. The last of them says that {secret}.",
      "You read it twice, and then, because there is no one to hear, a third time aloud. The words do not change. They only get heavier.",
    ],
  },
];

/** The paragraphs of a road's return scene. Four variants. */
export const RETURN_OPEN: string[][] = [
  [
    "{Place} lets you go without ceremony. Whatever you decided there, you carry it now, and {omen} clings to your sleeves all the way to the edge of the district.",
    "The road ahead is the one you left. Between you and it lies everything you now know about {place}, and the Elder will ask for it sooner or later.",
  ],
  [
    "You stop at the last milestone and look back. {Place} looks smaller from here, as every place does once you know what it keeps.",
    "{Kname} does not wave. That is the only goodbye the place permits. You wonder how long {relic} will stay where it is.",
  ],
  [
    "The light is going when you reach the crossroads. You sit on a stone and sort what you have learned into what you can prove and what you only believe.",
    "There is less of the first than you would like. There is more of the second than the Law would allow, and you will have to decide which to bring up the mountain.",
  ],
  [
    "Mist has begun to come up from the low ground. {Omen} is already fading from your clothes, though the memory of it will last longer.",
    "You came to {place} as a stranger and leave as something between a witness and a debtor. The Elder will want to know which.",
  ],
];

/** Extra return-scene paragraphs, shown only when the matching flag is set. */
export const RETURN_FOUND_SECRET = "You know the truth of it now: {secret}. Knowing it, you cannot go back to not knowing.";
export const RETURN_CRISIS: Record<ChoiceTone, string> = {
  truth: "You spoke plainly at the crisis, and {kname} has already repeated your words to others, a little improved.",
  mercy: "What you gave at the crisis was small, and {kname} will remember it for exactly as long as it takes to repay.",
  inquiry: "The question you asked at the crisis is still going round {place}. Nobody has yet found an answer they like.",
  deceit: "The story you told at the crisis holds for now. In {place}, a lie that holds is a debt someone will come to collect.",
  force: "The way you broke the quiet at the crisis will be remembered in {place}, long after your name is forgotten.",
  quiet: "You said little at the crisis, and {place} has decided your silence meant something. {Kname} will not say what.",
};

/** How the way you came in colours the way back, by the tone of the approach. */
export const RETURN_APPROACH: Record<ChoiceTone, string> = {
  inquiry: "You went at {place} through {focus}, asking and copying, and your notes are heavier for it.",
  mercy: "You came to {place} by way of {focus}, with open hands, and the people there have not yet decided what to make of that.",
  force: "You pushed your way in at {focus}, and the door you broke there will be mended slowly, and talked about longer.",
  deceit: "You slipped in at {focus} under a borrowed errand, and somewhere in {place} a clerk is still wondering who you were.",
  quiet: "You watched {focus} from the edge until it showed its habits, and you leave knowing them better than those who keep them.",
  truth: "You walked up to {focus} and said why you had come. It is a rarer thing in {place} than you would think.",
};

/** What the wayside says of a road once it is done, by whether the Elder was told. */
export const WAYSIDE_AFTER = {
  reported: "The wardens have since called at {place}, and {kname} sent word up the stair that the visit was not unkind.",
  silent: "Nothing of {place} has reached the Law Hall, and {kname} is grateful for it, or is pretending to be.",
};

export const RETURN_USED_QI = "Your breath ran deeper at the crisis than a mortal’s should. {Kname} noticed, and did not say so.";

/** Return choices. */
export const RETURN_CHOICES = {
  report: "Report {place} to the Elder, and tell her what you carry.",
  silent: "Say nothing of {place} and go back to the road.",
  rest: "Rest a little and let {omen} fade from your thoughts before going on.",
  keep: "Keep {relic} and study it on the road.",
};

/** The Elder’s report lines, by tier. Three variants per tier. */
export const REPORT_LINES: Record<"hostile" | "wary" | "neutral" | "warm" | "devoted", string[]> = {
  hostile: [
    "You report on {place} as though the Law were a tavern. I hear the words and none of the substance. Go back to the road, and next time bring me something I can use.",
    "{Place}. A report from someone I do not trust, about a place I cannot check. I will file it where I file everything you tell me.",
    "I listened to your account of {place} because I must. Do not mistake that for belief.",
  ],
  wary: [
    "I will hear this, though I am watching how you tell it. {Place} has more stories than stones, and I want only the ones that are yours.",
    "You say {kname} told you things at {place}. I will weigh that against what I already know of {kname}, and against what I know of you.",
    "Interesting that you came to me with this. I would have forgiven you for staying silent, and I would not have trusted you either way.",
  ],
  neutral: [
    "A report on {place}. Good. The Law wants to know what is happening beyond its walls, and it rarely hears it from anyone who has gone to look.",
    "I have heard of {place}, though never from a disciple who had walked there. Your account is useful, Wanderer, even where it is incomplete.",
    "So {place} keeps {relic} and speaks of it in lowered voices. That is worth knowing. Tell the rest to the archive clerk and have it written down.",
  ],
  warm: [
    "You walked all the way out to {place} and came back to tell me. I am grateful, and I want you to hear that said plainly.",
    "Thank you for telling me about {place}, and for telling it well. {Kname} has been waiting for someone from this mountain to come and ask. You did.",
    "I could not have gone myself. The Law Hall seldom sees the places it governs. You have been my eyes at {place}, and I am the better judge for it.",
  ],
  devoted: [
    "I trust what you saw at {place}, and I trust how you saw it. Few would have walked that road, and fewer would have come back to tell me. Sit. Tell me all of it.",
    "{Place}, {relic}, {kname}. You have given me three names to remember and a reason to remember them. I will not forget who gave them to me.",
    "When I asked for someone to look at {place}, I did not expect the right person to arrive, wet and honest, at my door. Tell me everything. I mean to keep it.",
  ],
};

/** Memory lines for a report. */
export const REPORT_MEMORY = {
  secret: "You say {secret}. If that is true, it is worse than the rumour and better than the silence. Bring me proof when you can, and until then tell no one else.",
  relic: "You kept {relic}. I can see the shape of it through your sleeve. I will not ask you to give it up, but remember that it was not yours to begin with.",
  deceit: "You tell me about {place} in the voice of someone who has told several stories lately. I will accept the account, and I will keep the stories in mind.",
  roads: "You have walked so many roads that I have begun to wonder whether you have a home. {Place} is one more. Tell me, and then perhaps rest.",
  realm: "You carry yourself like a cultivator now, and a cultivator’s account of {place} is worth more than a mortal’s. I will weigh it accordingly.",
};
