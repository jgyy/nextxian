import type { ChoiceTone } from "@/engine/types";
import type { Kind } from "./spec";

/**
 * The wording the hunts share. Each table has several variants and a hunt picks by its index and the scene, so forty hunts and the scenes of a walk do not say
 * the same thing twice. Slots: name, place, omen, tell, strike, wound, hide, body, cry, lair, falls, corpse, spoil, weak, element.
 */

/** What a foe is made of, which sets the nouns of its fight. */
export const KIND_WORDS: Record<Kind, { body: string; cry: string; lair: string; falls: string; corpse: string }> = {
  beast: { body: "flank", cry: "roar", lair: "den", falls: "goes down on its knees and then on its side", corpse: "the carcass" },
  serpent: { body: "coils", cry: "hiss", lair: "burrow", falls: "uncoils and goes slack, ring after ring", corpse: "the long body" },
  spirit: { body: "shape", cry: "wail", lair: "haunt", falls: "thins to a few threads of light and is gone", corpse: "what is left of it" },
  plant: { body: "stems", cry: "rustle", lair: "grove", falls: "wilts from the root up, all at once", corpse: "the husk of it" },
  swarm: { body: "cloud", cry: "drone", lair: "nest", falls: "breaks and scatters, and does not gather again", corpse: "the dead husks" },
  construct: { body: "joints", cry: "grinding", lair: "post", falls: "stops mid-step and stays stopped", corpse: "the shell of it" },
  wraith: { body: "shadow", cry: "moan", lair: "ground", falls: "goes out like a lamp in a draught", corpse: "the cold place where it stood" },
  drake: { body: "scales", cry: "bellow", lair: "roost", falls: "crashes down and the ground takes the blow", corpse: "the great body" },
};

/** The four ways of going at a foe, and the tone of each. */
export const APPROACH_TONES: ChoiceTone[] = ["force", "deceit", "inquiry", "mercy"];

/** What the player reads on the choice that opens each way. */
export const APPROACH_LABELS: Record<number, string[]> = {
  0: [
    "Stand your ground in {place} and let {name} come to you.",
    "Walk straight at {name} and make it a fight in the open.",
    "Call {name} out, loudly, from the middle of the open ground.",
  ],
  1: [
    "Go round by the cover and come at {name} from where it is not looking.",
    "Lay a false trail through {place} and wait where {name} will end it.",
    "Make yourself smaller than you are and creep up on {name}.",
  ],
  2: [
    "Watch {name} from a distance until you know what it does before it does it.",
    "Study {omen} and the ground, and work out {name}’s habits.",
    "Count its rounds, its rests and its tells before you go near.",
  ],
  3: [
    "Lead {name} away from {place} before it can hurt anyone else.",
    "Put yourself between {name} and the people who live near it.",
    "Take {name}’s attention and walk it somewhere that costs nobody.",
  ],
};

/** The leave-it-alone choice at the sighting. */
export const LEAVE_LABELS = [
  "Leave {name} to {place} and go back the way you came.",
  "Decide this is not a fight for today, and turn back.",
  "Mark where {name} lies and go back to the road without a word.",
];

/** The sighting: the frame the foe’s own sentences sit in. */
export const SIGHTING = [
  "Before it strikes, {tell}; then it {strike}.",
  "The hunters of {place} know the order of it. First {tell}, and then it {strike}.",
  "Watch for the tell: {tell}. After that it {strike}, and there is no second warning.",
];

/** The three bands of how the hero stands against the foe: behind (edge −2 or less), even (−1 to 2), and ahead (3 or more). */
export type Band = "behind" | "even" | "ahead";
export const BANDS: Band[] = ["behind", "even", "ahead"];
export const bandBounds = (band: Band): { min?: number; max?: number } => (band === "behind" ? { max: -2 } : band === "even" ? { min: -1, max: 2 } : { min: 3 });

/** The hero’s first reckoning of the foe at the sighting. */
export const SIZING: Record<Band, string[]> = {
  behind: [
    "You size it up honestly, and it is more than you are today. Whatever you do here, do it carefully.",
    "Everything in you says this is above your weight. You will need more than courage, or a better day.",
  ],
  even: [
    "You size it up and find it an even match: a hard fight, and one that a clever one might win.",
    "It is about your weight. The outcome will turn on what you do in the next few breaths.",
  ],
  ahead: [
    "You size it up and find that you have the measure of it. That is not the same as an easy fight, but it is a fair start.",
    "It is smaller than its name. A hero of your standing has fought worse and been paid less.",
  ],
};

/** What each way of going at the foe opens with. */
export const OPENING: Record<number, string[]> = {
  0: [
    "You plant your feet in {place} where the ground is open and let {name} see you. The {body} of it shifts, and for a breath the whole place waits.",
    "You step out into the open and put your weight on your back foot. {Name} has seen cultivators before. It turns its head and decides to be insulted.",
    "You make no secret of yourself. The wind carries you to it, and {name} comes up out of the {lair} already angry, which is what you wanted.",
  ],
  1: [
    "You go low, by the cover, and let {place} hide you. {Omen} tells you where it has been, and the wind tells you which way to circle.",
    "You leave a scrap of yourself on the path (a scrap of cloth, a dropped coin) and slip away from it. Somewhere ahead, {name} is learning to follow what you wanted it to.",
    "You move like something that does not matter. {Name} is not looking this way, and the quieter you are, the longer it will stay so.",
  ],
  2: [
    "You find a place where the ground rises and settle into it. Nothing in {place} knows you are there, and {name} goes about its business in front of you as though you were not.",
    "You sit and watch for longer than is comfortable. The {body} of it, the way it breathes, the way it stops and starts: you keep all of it, and say nothing.",
    "You make yourself a part of the ground and count. In the time it takes the light to move a hand’s width, {name} shows you more than any hunter’s tale would.",
  ],
  3: [
    "You look at what lies behind {name}: the roofs, the road, the people who will be here at dawn. You cannot let it get there, and so you step into its sight and stay there.",
    "You make yourself the most interesting thing in {place}. {Name} turns toward you, and away from everyone else, and that is half the work done.",
    "You do not want its death yet. You want it moved. You show yourself, step back, show yourself again, and it follows, step for step.",
  ],
};

/** The first exchange’s result, by the hero’s edge. */
export const EXCHANGE: Record<Band, string[]> = {
  behind: [
    "It is quicker than you thought, and it knows this ground. The first exchange goes to {name}, and you are not at all sure of the second.",
    "You feel the difference between you in your arms. Every stroke you land costs you more than it costs it.",
    "You are being read as you read, and by something older at the game. Hold what you have, and find a way out of its rhythm.",
  ],
  even: [
    "The first exchange is even. Neither of you gives anything away, and each knows the other will not be doing so again.",
    "It is a fair fight, and fair fights are mostly noise. You keep your head and watch for the one beat that is not noise.",
    "You hold. It holds. Somewhere in the stalemate is the shape of the fight to come, and you set about finding it.",
  ],
  ahead: [
    "The first exchange is yours. {Name} falls back a step, surprised, and you do not give it the step back.",
    "You feel the fight tilt your way, and keep your face still. A foe that knows it is losing is a foe that grows dangerous.",
    "You have the better of it, and it knows. Be careful what you do with that: the fiercest moment of any fight is the one after it turns.",
  ],
};

/** The turn of a fight: something changes. One per way of going at it. */
export const TURN: Record<number, string[]> = {
  0: [
    "The fight leaves its first rhythm. {Name} breaks off, circles, and comes again from a side you did not guard, and you must decide what you are fighting for.",
    "Neither of you can afford to stay as you are. There is a heartbeat in which the whole fight could go either way, and you are in it.",
  ],
  1: [
    "The trap you laid meets the creature you laid it for, and it does not behave as the hunters said it would. What you do in the next breath decides who is the hunter here.",
    "It stops. Something in {place} has told it that it is not alone, and {name} turns its whole attention on the thing that is hiding.",
  ],
  2: [
    "You have counted it long enough. The pattern is there: a beat, a pause, a beat. Now comes the moment to use what you know, or lose it.",
    "What you learned from the edge of the ground is about to be tested on its centre. {Name} is not what it seemed from far away, and not what it seems close either.",
  ],
  3: [
    "Behind you, something goes wrong: a voice, a door, a child who was not supposed to be here. {Name} changes its mind about you, and you must change yours about what you are doing.",
    "You have led it far enough. Now it wants to turn back, and you are the only thing standing between it and the place you walked it from.",
  ],
};

/** What the crisis looks like, by the hero’s edge. */
export const CRISIS: Record<Band, string[]> = {
  behind: [
    "You are losing, and you know it. Only an honest hero looks for the door now, and only a clever one finds it.",
    "It has the better of you. There is a way out of this, and it is not through the front.",
  ],
  even: [
    "It could go either way. The next stroke settles it, and neither of you has the strength for a third.",
    "You are even, and tired, and it is tired too. The one who finds one more breath wins.",
  ],
  ahead: [
    "The fight is yours to end. {Name} knows it, and still it {strike}, because there is nothing else it knows how to do.",
    "You can end this now. What you do with the opening says more about you than the winning does.",
  ],
};

/** What you do at the last stroke, by the way that ended it. */
export const STROKE: Record<"force" | "craft" | "ruse", string[]> = {
  force: [
    "You close with it and finish it with what you have. There is no craft in the stroke, only the whole of your weight and a breath held until it was done.",
    "You take the blow it offers, and give back more. {Name} {falls}, and the ground under you is the only thing that holds.",
  ],
  craft: [
    "You do not finish it with your arm. You finish it with what you have spent years learning, and {name} {falls} before it knows what has been done.",
    "The stroke is not strong. It is exact, and the exactness is yours: a craft that has been practised in quieter rooms than this.",
  ],
  ruse: [
    "You let it believe what it wanted to. When it commits, the thing it thought was an opening is a closed door, and {name} {falls}.",
    "You give it a gap and a reason. It takes both. The one thing it does not look at is you, and by the time it does, it is over.",
  ],
};

/** After the stroke: the four closes. */
export const AFTERMATH = [
  "The quiet afterward is the loudest part. {Place} lets out its breath, and the first bird in an hour tries a note.",
  "Your hands shake once, and then stop. {Corpse} lies where it fell, and the light has changed in {place} in a way you can feel and not name.",
];

/** Where the hunt ends. */
export const WON_OPEN = [
  "{Name} is finished. {Corpse} lies in {place}, and the thing the hunters will want is easy to see: {hide}.",
  "It is over, and {place} is a different place. There is {hide} to take from {corpse}, and a story to take back, and you are not sure which is heavier.",
];
export const DRIVEN_OPEN = [
  "{Name} breaks off. It goes back toward its {lair} with its {body} low, and you do not follow. It will be back, but not tonight, and not for the same reasons.",
  "It will not be killed today, and you are glad enough not to have tried. The {cry} dies away in the direction of the {lair}, and {place} is quiet.",
];
export const BEATEN_OPEN = [
  "You hit the ground, and the breath goes out of you. {Name} {wound}, and by the time you have your feet again, it has gone back to its {lair}. It does not need to chase you.",
  "You were not ready, and it was. It {wound}, and when your head clears you are a long way from where you stood, and bleeding in two places, and alive.",
];

/** Labels for the endings. */
export const WON_LABELS: Record<ChoiceTone, string[]> = {
  force: ["Take {hide} from {corpse} and carry it away.", "Break the {lair} so nothing comes back to it."],
  mercy: ["Lay {corpse} to rest with a word and a handful of earth.", "Leave {hide} where it is, for those who have more right to it than you."],
  inquiry: ["Look at how it died and what it was, before you leave.", "Search the {lair} for why {name} came to {place}."],
  deceit: ["Say little of how it went, and let the story grow without you.", "Take the credit the story gives you, and say nothing to spoil it."],
  quiet: ["Sit a while in {place} before you go on.", "Let the place go quiet around you, and wait until you can walk."],
  truth: ["Tell the first person you meet exactly what happened.", "Say it plainly: you fought it, and this is how it went."],
};

/** Labels for the scenes of a walk, by stage (0, 1, 2 and 4) and tone. The crisis (3) has choices of its own. */
export const LABELS: Record<number, Record<ChoiceTone, string[]>> = {
  0: {
    force: ["Press in while it is still deciding what you are.", "Go in hard before it has finished looking at you.", "Take the first move and keep it."],
    deceit: ["Show it the weak side you do not have.", "Let it think you are alone, and wounded, and slow.", "Feint toward the one place it will want to follow."],
    inquiry: ["Look for what the ground has to say about how it moves.", "Watch which way its {body} turns when it is startled.", "Test it once, lightly, to learn what it does."],
    mercy: ["Give it a way out you are not sure you want it to take.", "Call to it, low, as to a thing that has been hurt.", "Keep between it and the road, and hold there."],
    quiet: ["Wait for it to make the first mistake.", "Slow your breath until you are almost not there.", "Stand still, and let it come to a decision."],
    truth: ["Say aloud what you mean to do, and do it.", "Let it see your face and your hands, and no tricks.", "Tell it, to its {body}, that you are here to end this."],
  },
  1: {
    force: ["Hit it where it is hardest, and keep hitting.", "Drive into the gap before it closes.", "Answer the blow with a heavier one."],
    deceit: ["Give ground you mean to take back.", "Slip behind the cover and come out somewhere else.", "Let it hit what you have left standing."],
    inquiry: ["Mark where it favours one side, and go for the other.", "Spend a blow to find where it fears to be hit.", "Keep count of its rhythm, and break it on the fourth."],
    mercy: ["Turn the blow aside rather than answer it.", "Take it on the guard and leave its {body} unhurt.", "Step between it and what it is trying to reach."],
    quiet: ["Give way, and give way again, and wait.", "Breathe, and let the blow pass, and breathe.", "Hold your ground without gaining any."],
    truth: ["Call the exchange as it is: you are hurt, and so is it.", "Say what you have, and spend all of it at once.", "Show it the blow before you land it."],
  },
  2: {
    force: ["Break the pattern with everything you have.", "Throw yourself at the opening before it can close.", "Commit, and trust the commitment."],
    deceit: ["Pretend the pattern has beaten you.", "Show it the opening you built for it.", "Fall back as if you were done, and let it come."],
    inquiry: ["Use the one thing you have learned.", "Strike where the pattern is weakest.", "Speak the name of the move before it makes it."],
    mercy: ["Offer it the last chance, and mean it.", "Hold your hand and see whether it will hold its own.", "Stand in the path and ask it to stop."],
    quiet: ["Let the moment pass, and take the next.", "Wait for the breath between its movements.", "Breathe, and watch it breathe, and move on the next."],
    truth: ["Say what the turn is, to yourself, and take it.", "Choose, plainly, and be seen to choose.", "Do the one thing you have been avoiding."],
  },
  4: {
    force: ["Take {hide} while it is still warm.", "Break the {lair} and burn what is in it.", "Stand over {corpse} until you are sure."],
    deceit: ["Hide how close it was, from everyone, including yourself.", "Arrange {corpse} so the story improves.", "Take a little more than you need, and say nothing."],
    inquiry: ["Look at {corpse} and learn what you can.", "Search the {lair} before the rest of the world arrives.", "Read the ground for what else has been here."],
    mercy: ["Close what can be closed, and give the rest back to the ground.", "Say a word for it, because someone should.", "Bind your hurts, and then anyone else’s you can find."],
    quiet: ["Sit down where you stand.", "Breathe until the shaking goes.", "Let the light change before you decide anything."],
    truth: ["Say what you did, and what it cost.", "Name what you killed, as it would have wished to be named.", "Remember it, plainly, as it was."],
  },
};

/** The finishing strokes at the crisis. */
export const FINISH = {
  force: ["Close with it and end it with your own strength.", "Take the opening it gives you and drive through."],
  craft: ["End it with your craft: the stroke you have spent years learning.", "Do not spend strength. Spend what you know."],
  ruse: ["Give it the opening you made, and let it take the trap.", "Let it believe it has won, and end it as it reaches."],
  press: ["Press on regardless, though it has the better of you.", "Throw everything you have at it and hope that is enough."],
  off: ["Break off, and drive it back to its {lair}.", "Give up the kill, and give it a way home."],
};

/** The lead of the stroke, before the way it was dealt. */
export const STROKE_LEAD = [
  "It ends faster than it began, as these things do.",
  "The last of it takes no longer than a breath.",
];

/** What the hero learns searching the lair. */
export const LORE_LINE = [
  "Searching the {lair}, you learn why {name} came to {place}: {lore}.",
  "The {lair} tells you what the hunters never asked: {lore}.",
];

/** The choices after a kill. */
export const WON_CHOICES = {
  take: ["Take {hide} from {corpse} and carry it away.", "Cut {hide} free and wrap it for the road."],
  leave: ["Leave {hide} where it lies, for those who have more right to it than you.", "Take nothing from {corpse}, and let {place} keep what it was owed."],
  study: ["Work out how it died, and what that says about {place}.", "Look at {corpse} until you understand what you have done."],
  tell: ["Tell the first person you meet exactly what happened.", "Walk back and say it plainly: it is dead, and this is how."],
};
