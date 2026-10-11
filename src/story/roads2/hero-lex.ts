import type { Attire, Background, Gender, Looks, Status } from "@/engine/hero";

/**
 * How the people of a realm road react to who the hero is. Each table has several variants per value, and a road picks
 * one by its index, so the forty roads do not all say the same thing about the same silk. Slots: kname, keeper, place, focus, relic.
 * Each line is one or two sentences and a scene may carry two of them, so every one stays under thirty words.
 */

/** The entry: what the keeper makes of the hero’s dress, at first sight. */
export const DRESS: Record<Attire, string[]> = {
  rags: [
    "{Kname} looks at your patched hemp and quotes the lowest price first, then, ashamed of it, names a second.",
    "Your hemp robe earns no bow at {place}. It earns something rarer: a stool nearer the fire than a guest would be given.",
    "Children point at your straw sandals. {Kname} cuffs one and then, quietly, sets out a cloth for your feet.",
    "{Kname} sees mended hemp and assumes you cannot pay. It is a mistake you are free to correct or to use.",
  ],
  traveller: [
    "{Kname} reads the mud and road-dust in your oiled cloak and asks only which road you came by. A traveller is the one guest {place} never turns away.",
    "Your travelling cloak says you will be gone by morning. {Kname} treats you with the cheerful carelessness reserved for the passing.",
    "{Kname} sniffs your cloak, names the province it has seen rain in, and is right. It makes the rest of your story harder to improve.",
    "A traveller’s pack gets a traveller’s welcome here: warm water, a bowl of whatever is on, and one honest question.",
  ],
  scholar: [
    "The ink on your cuffs tells {kname} you read. Everything at {place} that was kept in writing suddenly comes out from under the table.",
    "{Kname} offers you a seat by the ledgers and does not ask why. A grey robe like yours has only one reason to come here.",
    "Somebody at {place} mutters that a scholar will find a mistake in the accounts. {Kname} says, a little too brightly, that it is welcome to try.",
    "{Kname} glances at your stained cuffs and hides a hand over a page. It is the oldest reflex in the world.",
  ],
  silk: [
    "{Kname} prices your silk before your name. Within three breaths {place} has quietly doubled what it will ask of you.",
    "Your embroidered silk draws every eye at {place}, and a good many of them are doing sums. {Kname} bows exactly as low as the cloth deserves.",
    "{Kname} brushes a stool clean, twice, before you sit on it. The silk is a lantern, and it is attracting what lanterns attract.",
    "At {place} silk means money and money means trouble. {Kname} smiles for both and keeps a hand near the strongbox.",
  ],
  armour: [
    "{Kname} sees the scale jerkin and the sword-belt and speaks to you the way one speaks to a dog of unknown temper.",
    "Your armour fills the doorway of {place}. Conversation stops, resumes at a lower pitch, and {kname} comes forward with open hands.",
    "A boy by the door stares at your sword-belt with open envy, and the old woman beside him with open dread. {Kname} watches both.",
    "{Kname} takes in the lacquered scales and does not ask what you intend. At {place} nobody asks that of armour.",
  ],
};

/** The entry: what the keeper makes of the hero’s birth, once your name is known. */
export const BIRTH: Record<Status, string[]> = {
  outcast: [
    "When your name is given, {kname}’s face closes like a shutter. At {place} there are no registers, but there are memories.",
    "News that you were struck from the rolls has beaten you here. {Kname} neither shrinks from it nor welcomes it.",
    "{Kname} asks for no papers. It is the kindest thing a keeper of {place} can do for an outcast, and everyone who sees it knows it.",
    "An outcast’s name carries weight at {place}, of the kind that is mostly taken away. {Kname} waits to see whether you will try to give it back.",
  ],
  commoner: [
    "Your name is a plain one, and {kname} says it back as if tasting for salt. At {place}, plain is a recommendation.",
    "{Kname} puts you among the commoners at {place} without being asked, which is the least trouble and the least honour.",
    "A commoner’s name draws no whispers here. {Kname} nods, and it is a nod of equals, which is rarer than you think.",
    "You have no banner to quote, and {kname} does not wait for one. The talk goes straight to what you want.",
  ],
  gentry: [
    "The word gentry runs through {place} before you have finished your sentence. {Kname} stands a little straighter, and so, behind you, does everyone else.",
    "{Kname} dusts off the better cup. At {place}, land is a language, and everyone here learned a few words of it young.",
    "A magistrate’s seal on your papers is worth a favour in {place}, and everyone knows which kind. {Kname} is already composing the request.",
    "Gentry. {Kname} bows, quickly, and does not hide the speed of it. {Place} has had landlords, and has opinions.",
  ],
  noble: [
    "A noble house, by your papers. {Kname} drops to one knee before the crowd has decided to, and the crowd follows in a ripple like wind through barley.",
    "The banner on your papers draws a hush over {place}. {Kname} steps back, and the stool nearest the fire is suddenly empty.",
    "Nobility has never come to {place} without taking something. {Kname} greets you with every courtesy and counts the exits.",
    "Somebody at {place} remembers the house your papers name, and not kindly. {Kname} moves between you and the remark.",
  ],
};

/** Stage 1: what the keeper makes of the hero’s trade, as they work. */
export const TRADE: Record<Background, string[]> = {
  orphan: [
    "You move through {place} with your pack held close and your exits counted, and {kname} sees that and softens by a degree.",
    "{Kname} notes how you watch the hands of strangers rather than their faces. Port children learn that first. So do the people who raise them.",
    "You eat what is offered before it is taken away. {Kname} says nothing of it, and quietly puts a second bowl where you can reach it.",
    "Nobody at {place} has to ask where you learned to read a room. {Kname} just nods at the stair that you were already looking at.",
  ],
  scholar: [
    "You read the notices on the wall of {place} while waiting, and {kname} catches the way your lips move on the hard words.",
    "A copyist knows how a forged line sits on a page. You spot one in the accounts of {place} before {kname} has finished pretending there is none.",
    "{Kname} sets a brush down beside you without being asked. At {place} nobody can resist offering a pen to someone who holds one properly.",
    "Your hands move to straighten a crooked page before you notice. {Kname} notices, and decides, visibly, to trust you with the rest.",
  ],
  soldier: [
    "You stand with your back to a wall and the door in view. {Kname} notices, and so does every old soldier in {place}.",
    "{Kname} calls you ‘corporal’ as a joke, sees your face, and stops joking. Levy drill does not leave the body.",
    "An old man at {place} salutes you without meaning to. Then he laughs at himself, and offers you his pipe.",
    "You check the exits of {place} without deciding to. {Kname} says, quietly, that there are two more than you have found.",
  ],
  merchant: [
    "You price the goods at {place} with your eyes while {kname} is talking. {Kname} knows, because {kname} is doing the same to you.",
    "A trader’s runner counts the lamps, the stools, the sacks by the door. {Kname} watches you count and begins, for the first time, to bargain in earnest.",
    "{Kname} offers you a price for {relic} before you have said you have it. It is exactly the right price, which is the alarming part.",
    "You haggle over a cup of tea out of habit, and {kname} loves it. For a quarter-hour {place} feels like a market again.",
  ],
  farmer: [
    "You glance at the sky, then at the ground, then at the sky again. {Kname} says, to nobody, that rain is coming, and you say it will hold off till dusk.",
    "{Kname} sees your hands. Paddy hands are broad and cracked at the knuckle, and no keeper of {place} has ever lied to a pair.",
    "You fix a loose stake by the door without being asked. The people of {place} watch as though you had performed a minor miracle.",
    "Somebody at {place} asks where you farmed. Their face changes when you say, and for once nobody is working out your price.",
  ],
  healer: [
    "You look first at {kname}’s hands, then at the cough in the corner. {Kname} follows your eyes and, for a moment, does not hide it.",
    "A healer’s helper knows which silences are sickness. {Kname} lets you see a thing at {place} that nobody has been permitted to see.",
    "You name three herbs by smell, and {kname} looks at you the way one looks at a rope thrown across a gap.",
    "Someone at {place} has a fever and a pride. You find the one and manage the other, and {kname} does not forget it.",
  ],
};

/** Stage 1: what the keeper makes of the hero’s face. */
export const FACE: Record<Looks, string[]> = {
  plain: [
    "You are forgotten the moment you look away, and {kname} cannot decide if that is a talent or a mercy.",
    "Nobody at {place} can say afterward what your face was like. It is a very good face for asking questions.",
    "{Kname} looks at you twice and sees a stranger both times. {Place} is not used to such an easy guest, or such a hard one to describe.",
    "Your face asks for nothing, and that makes people at {place} offer things. {Kname} notices and wonders whether you do it on purpose.",
  ],
  striking: [
    "People at {place} look at you twice. {Kname} has the grace to look three times, and to pretend the third was at the lantern behind you.",
    "A girl by the door goes pink and tries to hide it in her sleeve. {Kname} sighs, and does not blame her, and does not trust you either.",
    "At {place} a handsome stranger is a rumour that has not yet decided which way to go. {Kname} intends to be the one to decide.",
    "{Kname} says your face will be remembered, and in {place} to be remembered is both a gift and a threat.",
  ],
  scarred: [
    "{Kname} looks at the burn on your jaw, looks away, looks back. At {place} nobody asks, and everybody wants to.",
    "A child stares at your scar until an older sister turns the child’s face away. You hear {kname} say, softly, that it is all right to look.",
    "Your scar draws no comment at {place}, and that is the comment. Nearly every household here has one like it.",
    "{Kname} traces the same line on the back of one hand and tells you it was a kiln, a long time ago. You do not have to tell yours.",
  ],
  frail: [
    "{Kname} sets a cushion on the stool before you have noticed that you are leaning on the wall. At {place} you are catered for early.",
    "You are breathless from the lane, and {kname} brings water without saying a word. Nobody at {place} calls it kindness. They call it manners.",
    "A frail guest is a quiet guest, and {kname} treats you as one, which makes the rest of {place} lower its voice.",
    "The lane into {place} was steep, and you took it slowly. {Kname} walks with you the last part, pretending to be going that way anyway.",
  ],
};

/** Stage 2: what the keeper makes of the hero’s manner, a plain observation tied to gender and nothing else. */
export const MANNER: Record<Gender, string[]> = {
  woman: [
    "{Kname} says that a woman who comes to {place} alone and asks questions is either a magistrate’s inspector or in trouble. Which are you?",
    "The men at {place} address your companions first. {Kname} corrects them, mildly, and the correction is overheard.",
    "{Kname} lowers the lamp so that it does not shine in your eyes. It is a small courtesy, and it is the first of the afternoon.",
    "A woman at the well tells you the real price of things at {place}, quietly, and does not look at you while she does.",
  ],
  man: [
    "The men at {place} make room for you without being asked and then watch to see what you do with it. {Kname} sighs.",
    "{Kname} addresses you as ‘sir’ and means it as a test. You have the choice to answer to it or to mend it.",
    "Somebody says you have the look of a man who has come to settle something. {Kname} says, mildly, that everyone says that of strangers.",
    "A man at the well asks whether you are the sort who pays or the sort who explains. {Kname} laughs, and so does the well.",
  ],
  unspoken: [
    "{Kname} does not ask what to call you beyond your name, and when a neighbour does, {kname} says it is none of the neighbour’s affair.",
    "{Place} has its own words for strangers who do not say what they are, and none of them is rude. {Kname} uses the polite one.",
    "Someone asks what you are. You do not say. {Kname} says, comfortably, that most of the people at {place} are not sure either.",
    "At {place} the old woman at the well calls you ‘friend’ and never once pauses to guess. {Kname} listens, and relaxes.",
  ],
};

/** The way out: what the keeper thinks of the hero’s dress by the end of it. */
export const SEND_OFF: Record<Attire, string[]> = {
  rags: [
    "{Kname} presses a wrapped rice cake into your hand at the door, and does not say it is for the road.",
    "As you leave, {kname} stoops to retie the strap of your straw sandal. Nobody at {place} says a word about it.",
    "{Kname} tells you the door at {place} has a latch on the outside. It will be open next time.",
  ],
  traveller: [
    "{Kname} walks you to the last lantern and points out the dry side of the road. A traveller always remembers the dry side.",
    "{Kname} fills your water-gourd without being asked and says you look like someone who will be back, on some road or another.",
    "At the edge of {place} {kname} brushes the dust off your cloak, which nobody has done since you left home.",
  ],
  scholar: [
    "{Kname} gives you a leaf of paper with three names on it and asks you to write them down properly, somewhere safe.",
    "As you leave, {kname} says you are the first reader {place} has had who did not try to take a page with them.",
    "{Kname} asks you to put it in writing, someday. A scholar’s account outlasts a keeper’s.",
  ],
  silk: [
    "{Kname} bows you out of {place} a little too low. You are not sure whether it is respect or relief.",
    "{Kname} tells you to keep the silk out of the lane. The next thing you will walk through is mud, and there is no one in {place} who could afford to clean it.",
    "At the door someone has hung your silk sleeve out to dry. {Kname} says nobody has touched it, and you believe them.",
  ],
  armour: [
    "{Kname} says the armour will not be missed at {place}, and then, awkwardly, that you will.",
    "The boy from the door follows you to the edge of {place}, staring at the sword-belt, until {kname} calls him back.",
    "{Kname} tells you the scales rattle too loudly. Next time, {kname} says, you might come quieter, and be welcome quicker.",
  ],
};

/** What the keeper makes of the hero’s realm, as a band relative to the road. 'far' means two realms or more below it. */
export type RelBand = "far" | "below" | "at" | "above";

export type RealmKind = "entry" | "open" | "crisis" | "close";

export const REALM_REACT: Record<RealmKind, Record<RelBand, string[]>> = {
  entry: {
    far: [
      "{Kname} takes one look at how little qi you carry and steps between you and the road. {Place} is no place for someone this far below it.",
      "Nobody at {place} thinks you can walk the deeper road, and several of them say so. {Kname} says only that you may ask, and that the answer is no.",
      "{Kname} says, kindly, that {place} breaks cultivators two realms above you. The lamp over the door seems to agree.",
    ],
    below: [
      "{Kname} measures your qi against what {place} asks, and finds you a little short. There is a way to do this road. It is not the easy one.",
      "You are one realm under what {place} wants, and {kname} sees it. A short road is not a closed one, but it is hard.",
      "The qi in {place} presses on your chest like a hand, a finger’s weight more than you can comfortably bear.",
    ],
    at: [
      "{Kname} reads your realm the way a miller reads a stream. You are exactly what {place} has been waiting for, and {kname} is careful not to say so.",
      "Your qi sits level with {place}’s own, and the lamps lean toward it. {Kname} looks at the lamps, and then, a little too carefully, at you.",
      "At your realm the road opens at your pace, neither pulling nor resisting. {Kname} has seen this once before, and does not say when.",
    ],
    above: [
      "{Kname} feels you cross the threshold before you have set foot on it. The talk at {place} goes quiet, and the dogs lie down.",
      "A cultivator above the road’s measure is an event at {place}. {Kname} bows, and the whole lane follows with a rustle like straw.",
      "Your qi is too much for the road, and {place} gives way to it without being asked. {Kname} keeps from asking what you want here.",
    ],
  },
  open: {
    far: [
      "The air at {place} is dense with qi your body cannot use. Each breath costs something, and {kname} watches you pay it.",
      "At {place} you feel the road’s qi as noise. {Ally} notices you flinch and does not comment.",
      "You are far below what {place} was made for, and the very stones seem to know it. Pride will not help you here.",
    ],
    below: [
      "The qi of {place} tugs at yours, a little more than you can spare. {Ally} lends a hand without a word.",
      "You feel {place} as a pressure on the breastbone, bearable if you do not think about it. You think about it.",
      "{Ally} slows to your pace. You are a realm short, and at {place} that is the distance of a long step.",
    ],
    at: [
      "{Place} answers your qi like a bell to a hand. It is not a favour, only a fit, and it makes the next hour easy.",
      "At {place} you match the road’s own breathing without trying. {Ally} looks at your hands, and then away.",
      "{Place} is a lock that fits your key exactly. You do not have to force anything. You only have to decide.",
    ],
    above: [
      "{Place} is faint to you, a lamp in daylight. {Ally} has to ask what you see in it, and you find the answer almost embarrassing.",
      "The old marks at {place} lie open to you in a way they never were for the people who made them. {Ally} stares.",
      "You walk through {place} without the effort it was built to demand, and the place seems to notice that it has been bypassed.",
    ],
  },
  crisis: {
    far: [
      "The crisis lands on a body that cannot hold it. You are far below what {place} needed, and every second of it is paid for in qi.",
      "At the worst of it you can feel exactly how far you are from being enough. {Ally} sees it and takes some of the weight.",
      "The qi in the air is a flood and you are a cup. {Kname} calls to you, and you do not hear.",
    ],
    below: [
      "The crisis asks a little more than you have. You find the extra in the part of you that never learned to quit.",
      "A realm short, you carry the moment on willpower alone. It is enough. It leaves a mark.",
      "{Ally} steadies you with a hand on your elbow. You were within a breath of dropping.",
    ],
    at: [
      "The crisis comes, and your realm is exactly the right size for it. You feel the road lean on you and find that you can lean back.",
      "You gather your qi to the measure of the moment and hold it. {Kname} watches the lamps burn steady around you.",
      "At the worst of it you are as strong as the place requires and no stronger. That has to be enough, and it is.",
    ],
    above: [
      "The crisis is a small thing to you, and everyone else in {place} understands it at once. {Kname} lowers the lamp, as if to spare their eyes.",
      "You hold the moment with a fraction of your strength, and the effortlessness is the most frightening thing anyone in {place} has seen all year.",
      "Your qi does not rise to meet the crisis. It was already there, and the crisis simply discovered it.",
    ],
  },
  close: {
    far: [
      "{Kname} watches you go and sets a stone on the lane’s edge. At {place} a stone means a traveller was lucky.",
      "Everyone at {place} knows you walked it a realm too low. They will remember, and half of them will envy you.",
      "{Kname} tells you to come back when your qi has grown. At {place} that is a polite way to say you are not done.",
    ],
    below: [
      "You leave {place} a little worn and a little taller. {Kname} says a short road walked beats a long one not.",
      "{Kname} nods at you as an equal, and you realise you are not one yet. It is a promise, not flattery.",
      "You came up a realm short and leave having made it up. {Kname} says that is how it is done at {place}.",
    ],
    at: [
      "You leave {place} with the hush that follows a good fit. {Kname} says nothing, because nothing needs saying.",
      "{Kname} says the road and the walker were well matched. At {place} that is the highest thing a keeper says.",
      "At your realm {place} was a conversation, not a trial. {Kname} will be glad to have you back.",
    ],
    above: [
      "The lane is silent as you go. You will be remembered at {place} as the one who did not need to learn.",
      "{Kname} says the road was too small for you, and that now it will be a little larger.",
      "You leave {place} like weather leaving a valley. {Kname} stands at the door a long time, looking where you were.",
    ],
  },
};

/** The relative band of a realm against a road’s realm. */
export function relBand(realm: number, road: number): RelBand {
  if (realm <= road - 2) return "far";
  if (realm === road - 1) return "below";
  if (realm === road) return "at";
  return "above";
}

/** The `realm` condition bounds that make each band, for a road at realm `road`. */
export function bandBounds(band: RelBand, road: number): { min?: number; max?: number } {
  switch (band) {
    case "far":
      return { max: road - 2 };
    case "below":
      return { min: road - 1, max: road - 1 };
    case "at":
      return { min: road, max: road };
    case "above":
      return { min: road + 1 };
  }
}
