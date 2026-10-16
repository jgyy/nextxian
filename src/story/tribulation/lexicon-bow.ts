import type { Stance } from "./lexicon-stance";
import type { TribId } from "./lexicon-trib";

/**
 * How a keeper receives a hero, by the hero’s realm and nothing else. The higher the realm the lower the bow, and every keeper’s ladder rises in its own
 * way: a warden by the register, a witness by what the hero has survived, a rival by how much it hurts to concede, a pilgrim by how far up the eyes go.
 * Eight rungs for each, one per realm, in three places: the first glance at the entry, the greeting at the start of an approach and the parting at its end.
 * Slots: kname, kthey, kthem, ktheir, place, relic, focus, trib.
 */
type Eight = [string, string, string, string, string, string, string, string];

export const GLANCE: Record<Stance, Eight> = {
  warden: [
    "{Kname} does not look up from the register. A mortal is a name to be written when the lamp is lit, and {kthey} writes nothing at the door.",
    "{Kname} looks up once, finds a Condenser’s sleeve, and looks down. “Wait on the bench,” {kthey} says, and means it as a courtesy.",
    "{Kname} rises half an inch from the stool, which for {kthem} is a bow. A Foundation Builder is a person the register has a line for.",
    "{Kname} stands, and inclines the head the width of a finger. “A Core,” {kthey} says. “Be seated, and I will have the register brought.”",
    "{Kname} comes round the desk and bows in earnest. A Nascent Soul is written in a different ink, and {kthey} has been waiting years to use it.",
    "{Kname} bows low, and the register falls closed in {ktheir} hands. “Spirit Severing,” {kthey} says. “I did not think I would see it written in my time.”",
    "{Kname} is already on {ktheir} feet when you come in, and does not sit again. A Dao Seeker is not entered in the register. The register is brought to them.",
    "{Kname} kneels, and the register is put aside on the floor. An Ascendant is not read. {Kthey} says nothing, as the old rule requires, and does not look up.",
  ],
  witness: [
    "{Kname} looks you over once, kindly, as one looks at a window in winter. A mortal who has not sat {trib} has not yet been through the part that makes a person.",
    "{Kname} nods. “You have felt something,” {kthey} says. “Not enough. Sit, and I will tell you what it was not.”",
    "{Kname} rises, slowly, and puts down what {kthey} was holding. A Foundation is a floor, and {kthey} has been through enough floors to respect one.",
    "{Kname} stands and gives you the better seat without a word. A Core has been through the fire, and {kthey} reads it in the hands before the face.",
    "{Kname} bows, once, from the waist. “You have been through the worst of it,” {kthey} says. “I can tell by how you came through the door.”",
    "{Kname} bows lower than {kthey} has bowed in years. “You have cut what I could not,” {kthey} says. “I will not ask how. I know already what it cost.”",
    "{Kname} is silent for a while, and then kneels, as one kneels to the dead. A Dao Seeker has been through more than {kthey} can name, and {kthey} lets that be enough.",
    "{Kname} does not bow. {Kthey} puts both hands flat on the floor, and bows to it, and stays there, because an Ascendant has survived what no witness can have seen.",
  ],
  rival: [
    "{Kname} gives you a long, level look, and smiles. A mortal at {place} is a joke {kthey} has been saving. “Welcome,” {kthey} says. “Mind the step.”",
    "{Kname} glances at your sleeve and then at {ktheir} own. “A Condenser,” {kthey} says. “Congratulations. I was one in my third week.”",
    "{Kname} nods, a half-beat late. “Foundation,” {kthey} says. “Quite sound, from here. I had mine laid by the winter.”",
    "{Kname} rises, a half-beat early, and is annoyed at having done it. A Core is a thing {kthey} has been told about, and has not yet got used to.",
    "{Kname} bows, and the bow costs {kthem} something that shows. “A Soul,” {kthey} says. “I had hoped to be the first of us. Well. Someone had to be.”",
    "{Kname} bows deeply, with no half-beat in it at all, and straightens with a white face. “Severing,” {kthey} says. “I shall have to revise my tally.”",
    "{Kname} is on the floor before {kthey} has decided to be. A Dao Seeker is a thing a rival cannot match, and so {kthey} has stopped trying.",
    "{Kname} stays where {kthey} is, standing perfectly still, and then, slowly, sits. There is nothing left to compare. {Kthey} laughs once, softly, and does not look up.",
  ],
  pilgrim: [
    "{Kname} jumps up from the bench and bows too low, then too fast. A mortal is a person who has walked as far as {kthey} has, and {kthey} is overjoyed to meet one.",
    "{Kname} bows, shining. “A Condenser!” {kthey} says. “You have qi! You have it now, in you, and it is not in me yet! Please, may I sit beside you?”",
    "{Kname} bows again, lower. “Foundation,” {kthey} whispers. “Forgive me. I did not know they looked so ordinary. I mean that as the highest compliment.”",
    "{Kname} goes to one knee, and hastily rises, remembering that is not the custom. A Core is a miracle {kthey} has only read about, and the miracle has walked in.",
    "{Kname} kneels, and is too overcome to say what {kthey} had planned. A Nascent Soul looks back at {kthem} from behind your eyes, and {kthey} thinks it is smiling.",
    "{Kname} kneels, forehead to the boards, and is shaking. “Severing,” {kthey} says into the floor. “They said there were none left. I am so sorry. I have no right to be here.”",
    "{Kname} is already prostrate. A Dao Seeker is a thing {kthey} had not dared to hope for, and {kthey} lies there with the tears running quietly into the grain.",
    "{Kname} does not move at all. {Kthey} has stopped breathing, very nearly, and the tea in the cup beside {kthem} trembles. An Ascendant is in the room, and {kthey} will not be the one to disturb it.",
  ],
};

export const GREET: Record<Stance, Eight> = {
  warden: [
    "“Name?” {Kname} says, to the register. “No realm. Very well. Stand to the left, where I can see you and the door.”",
    "“Condensation,” {kname} says, writing. “Stand there. I will call you when the Builders are done.”",
    "“Foundation,” {kname} says, and writes it in the firmer hand. “Come through. You will not be kept waiting long.”",
    "“Core,” {kname} says, and writes it in red. “Please. We will bring you tea. Is the lamp too bright?”",
    "“Nascent Soul,” {kname} says softly, and does not write it. “The register can wait. Please, sit where you like.”",
    "“Spirit Severing,” {kname} says, and puts the pen down. “I will remember. There is no need for me to write.”",
    "{Kname} says nothing, and bows, and holds the door. A Dao Seeker is not asked for a name. They are given the room.",
    "{Kname} is kneeling. There is no register for this. There is only the long, bright, appalled silence of a person trying to be useful.",
  ],
  witness: [
    "“Sit,” {kname} says. “You have not been through it. That is not a fault. It is only a distance, and distances can be walked.”",
    "“You have felt it,” {kname} says. “A little. Good. Come and tell me about the night, and I will tell you what is coming.”",
    "“You have a floor under you,” {kname} says. “I am glad. Stand on it. There will be something to stand for, soon.”",
    "“You have been through the fire,” {kname} says. “I can see where it went. Come and sit. I will pour the tea myself.”",
    "“You have given something up,” {kname} says quietly. “I do not ask what. I only ask that you let me sit with you.”",
    "“I will not ask what you cut,” {kname} says. “I will say that I know the shape of the place it was, and I will keep quiet.”",
    "{Kname} says nothing for a long while. “Whatever you have been through,” {kthey} says at last, “I did not see it, and I am sorry. I would have liked to.”",
    "{Kname} sits down beside you, on the floor, and says nothing at all. It is, {kthey} thinks, the only company an Ascendant can still bear.",
  ],
  rival: [
    "“Mortal,” {kname} says pleasantly. “How nice. I was one once. It was quite a short phase for me.”",
    "“Condenser,” {kname} says. “Well done. I mean it. It took me nine days, but I had a cold.”",
    "“Foundation,” {kname} says. “Solid. I had mine laid in the winter, but of course the winter was a hard one.”",
    "“Core,” {kname} says, with a smile that cost something. “I congratulate you. I shall be congratulating you for a good while.”",
    "“Nascent Soul,” {kname} says, and the smile is gone. “Congratulations. I would like to say that I am glad, and I am working on it.”",
    "“Severing,” {kname} says, very quietly. “You are well ahead of me now. I find that I do not mind, and I mind that I do not mind.”",
    "“Dao Seeker,” {kname} says. {Kthey} bows, formally, and for once the half-beat is neither early nor late. “I yield the bench.”",
    "{Kname} says nothing, and bows lower than {kthey} has ever bowed, and holds it. There is no tally in the world long enough.",
  ],
  pilgrim: [
    "“A mortal!” {kname} says, delighted. “You came all the way too! Sit by me, it’s warmer, and I have the heel of a loaf.”",
    "“A Condenser!” {kname} says. “Oh, do tell me what it felt like. I won’t interrupt. I will interrupt. I’m sorry.”",
    "“A Foundation Builder,” {kname} says, and clasps both hands. “Please, whatever you need. A cushion? A cup? A different, better cup?”",
    "“A Core,” {kname} whispers. “I’ve never been in a room with one. May I stand over there, where I will not be in the way, and look?”",
    "“Nascent Soul,” {kname} breathes, and bows so low that the bench rocks. “Please. Anything. I would be honoured to be sent for water.”",
    "{Kname} cannot speak. “Spirit Severing,” {kthey} manages at last, “I’m sorry, I’m so sorry, I’ll go, I’ll stay, whatever you want, I have only a loaf.”",
    "{Kname} is prostrate, and has been since you came in. “Forgive me,” {kthey} says to the floor. “I will be quiet. I will be so quiet you will forget I came.”",
    "{Kname} does not speak. The tea, set out beside {kthem}, is shaking in its cup, and {kthey} is staring at the air a little to your left, as at the sun.",
  ],
};

export const FAREWELL: Record<Stance, Eight> = {
  warden: [
    "{Kname} nods without looking up. The register is already open at the next name, and you are on the floor, and then you are not.",
    "{Kname} nods, and you are entered in the margin: Condensation, here, fed. It is the first time anyone has written you down.",
    "{Kname} walks you to the door, which is more than is owed, and says the register will remember. {Kthey} means the page.",
    "{Kname} bows at the door and holds it. “Please come again,” {kthey} says. “We do not have many Cores, and the lamp has missed you.”",
    "{Kname} walks you out, and a few steps beyond, and stops where the register’s light ends. “Nascent Soul,” {kthey} says. “Go with the sky.”",
    "{Kname} bows at the door, and then at the threshold, and then, as you cross it, a third time. “It is an honour,” {kthey} says, and has never said it before.",
    "{Kname} walks you the whole way to the gate, a pace behind, and bows there, and does not rise until you are out of sight.",
    "{Kname} follows you out and kneels in the road. There is no register for it. “Remember us,” {kthey} says, to the dust.",
  ],
  witness: [
    "{Kname} puts a hand on your shoulder, briefly. “Come back when you have,” {kthey} says. “I will be here. I am always here.”",
    "{Kname} presses a cold cup into your hand. “Drink it slowly,” {kthey} says. “The night is long, and it will be the cold that tells you.”",
    "{Kname} walks you to the step. “You will do it,” {kthey} says. “I do not say that to everyone. I say it when I see the floor.”",
    "{Kname} bows you out and stands there for a long time. “I wish I could see it,” {kthey} says, “the day you stand under it and do not flinch.”",
    "{Kname} walks with you as far as the road, and no further. “What you cut will come back as a quiet,” {kthey} says. “Let it.”",
    "{Kname} stands at the threshold with both hands open. “Whatever the Ledger has to say,” {kthey} says, “you have already said it better.”",
    "{Kname} kneels at the door. “Go on,” {kthey} says. “I will keep the lamp lit. I always have, for someone like you.”",
    "{Kname} does not rise. {Kthey} sits in the empty room after you have gone, and for the first time in years, pours two cups, and drinks neither.",
  ],
  rival: [
    "{Kname} smiles. “Well, come back and tell me how it went,” {kthey} says, and means, come back so that I may say it was nothing.",
    "{Kname} walks you to the door with a hand under your elbow that does not feel like kindness. “Mind how you go,” {kthey} says. “I shall be behind you.”",
    "{Kname} sees you to the step. “Remember I was here first,” {kthey} says, lightly. It is almost a joke. It is almost kindly meant.",
    "{Kname} holds the door and bows, a half-beat early. “Do not be long,” {kthey} says. “I find I want to see what you do next.”",
    "{Kname} walks you out in silence, and at the step says, in a low voice, “I am sorry I was unkind. It was not you. It was the bench.”",
    "{Kname} bows at the door and does not straighten until you have gone. “Severing,” {kthey} says, to the floor. “I shall tell them I knew you.”",
    "{Kname} follows you to the gate. “I yield the tally,” {kthey} says, quite gently. “I would like to be the one who burns it.”",
    "{Kname} stays on the floor long after you have gone. “Ascendant,” {kthey} says, with a small, wondering laugh. “I was beaten by a better. How wonderful.”",
  ],
  pilgrim: [
    "{Kname} waves until you are out of sight, and then runs back to write down everything, in the notebook, in a tiny hand.",
    "{Kname} presses the heel of the loaf into your hand. “For the road!” {kthey} says. “For luck! For whatever you need! Please!”",
    "{Kname} follows you to the step, saying thank you in little bursts, and bows each time, and is still bowing as you turn the corner.",
    "{Kname} walks you out with both hands clasped. “I will tell everyone I was in the same room,” {kthey} says. “I will tell them for years.”",
    "{Kname} kneels at the door and cannot speak. {Kthey} puts the cup you drank from into {ktheir} sleeve, and keeps it, and never says so.",
    "{Kname} follows you into the road and kneels there, in the dust. “Please,” {kthey} says. “If you have a moment. Remember that there was someone who saw.”",
    "{Kname} stays prostrate until the lamp has burned down. When {kthey} lifts {ktheir} head the room is empty, and {kthey} sits there smiling, as at a thing that has already been given.",
    "{Kname} does not rise for a long time. When the tea is cold {kthey} drinks it, in small sips, and when the cup is empty {kthey} wraps it in cloth, and carries it home.",
  ],
};

/** What the trial means to a hero who has not reached its realm, who stands at it, and who has passed it. One line each, for every tribulation. Slots: kname, trib, place. */
export const BAND_LINE: Record<TribId, Record<"below" | "at" | "above", string>> = {
  thread: {
    below: "You have not yet felt the thread, and {kname} says so before you can. “Sit it,” {kthey} says, “and then you may call yourself a mortal who tried.”",
    at: "You are a mortal on the night before the thread. {Kname} says the word for that is ready, and then says the word for what comes after, which is afraid.",
    above: "You have felt the thread, and it is behind you. {Kname} looks at you as one looks at a map of a country one has left. “Tell the mortals,” {kthey} says. “They believe a stranger.”",
  },
  breath: {
    below: "You have not yet gathered qi enough to have it turn, and {kname} does not pretend otherwise. “You are early,” {kthey} says, “and early is better than late.”",
    at: "You are a Qi Condenser, and the breath is waiting. {Kname} is not unkind about it. “It turns once,” {kthey} says. “Be still, and let it go round.”",
    above: "You have passed the breath, and it has not forgotten you. {Kname} says a Condenser who turned it right is a rare thing, and says it as a compliment, and a request.",
  },
  bells: {
    below: "You have not yet laid a foundation, and the bells would find nothing to ring. {Kname} says you may listen from the yard, and that it is a good place to learn the sound.",
    at: "You are a Foundation Builder, and the nine are yours. {Kname} says so without ceremony. “Stand where you can hear all nine,” {kthey} says, “and a little to the left.”",
    above: "You have stood the bells, and they hang behind you. {Kname} looks at you with the plain respect of one who has been struck nine times and remembers each.",
  },
  fire: {
    below: "You have not yet formed a core, and the fire would have nothing to read. {Kname} says to come back when you have something worth hiding.",
    at: "You are a Core, and the fire is yours to meet. {Kname} says it quietly, as one reads a sentence out to the person it is about. “Have you thought what it will find?”",
    above: "You have been through the fire. {Kname} can see where it went, and says so, and says that what it left is better lit than what it took.",
  },
  gale: {
    below: "You have not yet a soul to be cut from its cords. {Kname} says to look at the threads you have and not the ones you will have, and to count them while they are countable.",
    at: "You are a Nascent Soul, and the gale is yours. {Kname} says the cords out loud, one at a time, and asks which you would give first.",
    above: "You have been cut, and what is left is yours. {Kname} regards you as the Souls regard a Severing sage: with a respect that is partly relief that it was not they.",
  },
  audit: {
    below: "You have not yet severed your spirit, and the Ledger has not yet begun your page. {Kname} says to enjoy the hour, and to read your own lines now, while they are short.",
    at: "You are Spirit Severing, and the audit is yours. {Kname} unrolls a blank sheet and says that every line on it will be read to you in a flat voice, and that you may correct none.",
    above: "You have heard your own audit, and it does not trouble you. {Kname} says that a sage who has been read is the nearest thing the sect has to a judge.",
  },
  gates: {
    below: "You have not yet come to seek the Dao, and the gates are not yours. {Kname} says they will find you, and that it is a courtesy to be early, and a mistake to be sure.",
    at: "You are a Dao Seeker, and the nine are yours. {Kname} walks you to the first lintel and says that the other eight cannot be shown, only walked.",
    above: "You have been through the nine, and they have let you go. {Kname} regards you as one regards a door that has been left open on purpose.",
  },
  silence: {
    below: "You have not yet risen so far that the sky has nothing to send. {Kname} says that this is the last thing a hero should hurry toward, and that most do.",
    at: "You are the Ascendant, and the silence is yours. {Kname} does not say it. {Kthey} only stops talking, and lets you hear what that sounds like.",
    above: "You have passed the silence, and the sect has no word for what lies beyond it. {Kname} is quiet, and then quieter, and understands that quiet is the word.",
  },
};
