import type { Stance } from "./lexicon-stance";
import type { TribId } from "./lexicon-trib";

/**
 * The trial itself: a rehearsal of a tribulation that a keeper will run for a hero who asks. A gate, three blows and a verdict. A hero meets each blow by
 * standing in it (qi), by reading it (insight) or by being sheltered by what they have done (karma), and yields to the blow if they have none of the three
 * to give. Two yields close the third blow to everything but yielding. Slots: kname, kthey, kthem, ktheir, place, relic, trib, blow.
 */
type Three = [string, string, string];

export const GATE: Record<TribId, string> = {
  thread: "{Kname} lays a thread of ice along the boards of {place}, from the door to a mat, and tells you to lie down beside it. “This is the rehearsal,” {kthey} says. “It is not the thing. It is the nearest I can come to the thing without a sky.”",
  breath: "{Kname} draws the white circle again, a hand wider than the old one, and sets you in it. “This is the rehearsal,” {kthey} says. “I shall turn the breath. You will not fight it, and you will not help. That is all the skill there is.”",
  bells: "{Kname} hangs a bronze bell from the beam over the mat at {place}, and a second, and a third, and a fourth, until nine hang over you. “This is the rehearsal,” {kthey} says. “They will not be struck by the sky. They will be struck by me, and that is worse.”",
  fire: "{Kname} lights a single lamp in the middle of {place}, turns down the rest, and sets two stools face to face. “This is the rehearsal,” {kthey} says. “I will ask. You will answer, and the lamp will tell me whether you did.”",
  gale: "{Kname} stretches a hundred cords across {place}, from wall to wall, each tied at one end to a nail and at the other to a wrist-ring. “This is the rehearsal,” {kthey} says. “Choose the ones you would give. I shall cut the rest.”",
  audit: "{Kname} sets a single desk in the middle of {place} and a book on it, closed. “This is the rehearsal,” {kthey} says. “I shall read your page aloud. I shall read it without comment, and you may not correct a word.”",
  gates: "{Kname} stands nine frames in a row across {place}, each wider than the last, and sets you at the first. “This is the rehearsal,” {kthey} says. “Each will ask. You will answer, and not look for the way through.”",
  silence: "{Kname} fits the felt panels to the walls of {place} one by one, sets a chair in the middle and a cup beside it, and leaves the door open a hand’s width. “This is the rehearsal,” {kthey} says. “I will go out. You will stay.”",
};

/** What the gate says to a hero of each band against the tribulation’s realm. Slots: kname, trib. */
export const GATE_BAND: Record<"below" | "at" | "above", string> = {
  below: "You are below the realm {trib} stands at, and {kname} says the rehearsal will ask more of you than it asks of anyone it was made for. Each blow you stand in will cost you in strain.",
  at: "You stand at the realm {trib} was made for, and {kname} says the rehearsal is exactly as hard as it was meant to be. Nobody gets through it by being clever alone.",
  above: "You are past the realm {trib} stands at, and {kname} says you may sit it as a teacher sits among the pupils. It will not hurt you. It will remind you.",
};

/** Four waves, one for each road of a wayside, three blows each. Slots: kname, kthey, kthem, ktheir, place, relic. */
export const WAVES: Record<TribId, [Three, Three, Three, Three]> = {
  thread: [
    [
      "The first thread is laid on the back of your hand, and it is colder than ice has any right to be. The cold does not stay on the skin. It goes in, along the bone, at the pace of a slow walk.",
      "The second thread is laid along your throat, and the breath catches on it. {Kname} counts aloud, softly, and the count is the only warm thing in {place}.",
      "The third thread comes without being laid. It is simply there, along your spine, from nowhere, as though the cold had finally decided to be the thing itself and not its rehearsal.",
    ],
    [
      "The first night in the shed is a night of hunger, and it comes into the room before the cold does. You lie with your belly empty and the dark pressed against your eyes.",
      "In the second hour a draught finds the gap under the door and brings with it a thread of frost, which lies on your cheek as softly as a hair. You do not move.",
      "In the last hour the frost has crossed your whole body, and the stillness in you is no longer a decision. It is only the shape you are, and you wonder whether the cold has learned it.",
    ],
    [
      "{Kname} hands you a cup of water so cold that the glass is white. “Hold it,” {kthey} says. “Hold it until it stops hurting, and then hold it a while longer, because that is the part that counts.”",
      "The cup has stopped hurting. The cold has gone from the hand to the wrist, and a strange pleasure is pooling in the forearm that you do not trust, and cannot name.",
      "The cup is empty, and your hand is still holding it, and the cold does not leave. It has moved in. It has found a room.",
    ],
    [
      "At the edge of the mat {kname} lays the first strand of white silk. It is not cold at all. It is only very, very thin, and your whole body is leaning toward it as toward a distant voice.",
      "The silk is joined by a second, and a third, and then there are nine, laid in a fan across your chest. The cold arrives all at once and is exactly as bright as a held breath.",
      "The silk lifts of its own accord, and for a moment you feel it as clearly as a hand: a pull, a direction, a single line of cold pointing east. You do not follow it. You only know that it is there.",
    ],
  ],
  breath: [
    [
      "{Kname} speaks a word, and the qi in you turns, as a river turns round a stone. For a moment your chest is filled with a breath you did not draw, running the wrong way.",
      "The second turn is larger. The breath goes down the left arm and up the right, and your fingers are numb, and your tongue is a stranger’s, and you hear {kname} say, “Let it.”",
      "The third turn is the one that counts. It goes through the heart, and the heart stops, and starts, and does not know which way to beat.",
    ],
    [
      "On the chalk circle a candle is lit and set in front of your mouth. “Breathe on it,” {kname} says, “and do not blow it out.” It is the oddest instruction anyone has given you, and the hardest.",
      "The candle gutters, and rights itself. Your breath has begun to run backward, and you can feel it go, and it is not unpleasant. That is the danger, {kname} says. “It is never unpleasant.”",
      "The flame leans toward you, and away, and toward. You are breathing the candle’s breath now, not your own, and the room tilts a degree, and a degree more.",
    ],
    [
      "{Kname} puts two fingers on your wrist. “Your pulse is running at the wrong end,” {kthey} says. “Slow it, and I will tell you how I know.”",
      "The pulse slows, and falters, and the qi in your arm begins to go round the other way. You see it as a picture: a wheel turning, with a single spoke painted red.",
      "The wheel turns once more and stops. For the length of one breath you hold the stopped wheel in your chest, and it weighs nothing, and you cannot move.",
    ],
    [
      "The room is dark but for a small lamp, and in its light {kname} draws a single line on the floor, and tells you to follow it with your breath. “Do not follow it with your eyes,” {kthey} says.",
      "The line leads back on itself, and the breath leads you with it. You turn the corner of it and feel the qi turn too, and for a long moment you are two people, and then one.",
      "The line ends, and your breath does not. It goes on past the chalk, along the floor and out of the door, and you learn what it is to lose a thing you were certain was yours.",
    ],
  ],
  bells: [
    [
      "{Kname} strikes the first bell, a hand’s breadth from your ear. The sound is not a sound. It is a blow, and it goes through the teeth and the knees and leaves the whole room whitened.",
      "The second is lower. It is a stroke that finds the place where the first has been, and stands there, and the air hums with the bruise of it.",
      "The third rings, and the floor is gone. You are standing on the note, and the note is not a place, and you stay up by remembering which way is down.",
    ],
    [
      "Rain has begun on the slates of {place}, and the first stroke of thunder follows it, a little late, as though the sky had to be reminded. The bell on its beam hums in answer.",
      "The second stroke is closer. A flash comes through the louvres, and the whole of {place} is white for one beat of your heart. {Kname} shouts, and you read only the shape of the mouth.",
      "The third is directly overhead. The bell does not hum. It cracks, and the fragments ring on the boards, and your ears fill with a tone you will hear again in the night.",
    ],
    [
      "{Kname} places a bronze ring on your head, the weight of a bowl, and stands back. “The sky sends the stroke to the highest thing in the room,” {kthey} says. “Be the second highest.”",
      "The first stroke comes, and not from the ring. It comes from nowhere, from the whole of the sky at once, and the ring sings, and your hair lifts, and it is gone.",
      "The second comes in the same place, and the third behind it. You stand under three, and you have learned the trick of it, which is not to stand under anything at all.",
    ],
    [
      "The nine bells hang in a row, each a hand’s breadth from the next, and {kname} walks the row with a mallet, tapping them lightly, one after another, to hear whether they are true.",
      "The mallet is raised and brought down, and the sound is one you have not heard before. It is not nine notes. It is nine taken together, and it settles in your chest like a hand.",
      "The ninth is struck, and nothing happens. The echo goes round the room once and goes out, and in the silence you hear, very distinctly, the sky considering.",
    ],
  ],
  fire: [
    [
      "{Kname} asks the first question, and the lamp flares white. It is a small question, a matter of a coin and an afternoon, and you have never told anyone the answer.",
      "The second question is nearer. The lamp burns a hand’s breadth taller, and you hear your own voice answer before you have decided to, in the tone of someone confessing to a stranger.",
      "The third question has no words. {Kname} only looks at you, and the lamp goes the colour of milk, and what it finds is exactly what you had put there to be found.",
    ],
    [
      "In the cinder-light of {place} a heat rises from the floor, and you feel it first in the soles of your feet. It is not a heat that burns. It is a heat that remembers.",
      "The heat climbs. You find yourself saying something aloud that you did not know you meant, and the words glow in the air, and then dim, and {kname} writes them down.",
      "The heat is in your chest now, and the golden thing there flinches from it. For a moment you can see yourself through the fire as a door sees a house.",
    ],
    [
      "{Kname} sets a mirror of black glass in front of you, and says it will show you nothing. It shows you, a little to one side, as you were at nine, and the face is not pleased.",
      "The mirror warms. The face in it grows older, one year at a time, and at each age says one thing you did not want said. You answer, to every one, in turn.",
      "The mirror cracks from edge to edge, silently, and the face in it is your own. “It is only the fire,” {kname} says, from far off. “It has no appetite for what is true.”",
    ],
    [
      "A white thread of flame runs along the wall of {place} and into the lamp. “It will go where it is led,” {kname} says. “Lead it by being honest, or it will lead itself.”",
      "You speak. The flame runs where the words go, and the room is lit by what you are telling it, and you are aware of the cost of every one the instant it is said.",
      "The last thing you say is the thing you came with. The flame stands very still, and then bows, and goes out, and in its place a smaller, steadier light is burning that you do not recognise as yours.",
    ],
  ],
  gale: [
    [
      "{Kname} takes up the shears and cuts the first cord. It is a thin one, a habit of kindness that has outlived the person it was for, and it falls with almost no sound.",
      "The second is thicker. It is a debt you meant to pay, and it parts with a snap, and your wrist rings as if struck.",
      "The third is the one you were holding with both hands. {Kname} waits, shears open, and you have the length of one breath to say whether it is the one you would give.",
    ],
    [
      "A wind rises in {place} from nowhere, from the nailed-up shutters, and the cords sing. It is not a strong wind. It is a patient one, going methodically from cord to cord.",
      "The wind finds a cord and parts it. The loose end lashes your face, and you taste a name you had not said for years, and the wind goes on to the next.",
      "The wind drops. The room is hung with cut ends, swaying, and the one left whole is the one you did not notice you were holding.",
    ],
    [
      "{Kname} puts a ball of grey wool in your hands and asks you to unwind it. At the heart of it is a knot, and in the knot a small iron key. “Whose?” {kthey} asks. You do not answer, and the wool tightens.",
      "The wool is a cord now, a long grey one, running out through the door to somewhere you can’t see. “Cut it,” {kname} says, “or keep it. The gale will not ask twice.”",
      "The cord is in your hand. It is warm. Beyond the door, in the wind that has begun to rise, someone is standing at the other end, and has not yet pulled.",
    ],
    [
      "The first gust comes through the high window of {place}, and a cord lifts from the floor and wraps your forearm. It does not cut. It only tightens, as if asking whether you meant it.",
      "The second gust takes the cord and parts it, and there is a moment in which you know exactly who was at the other end, and what they had meant to say.",
      "The third gust takes nothing, because there is nothing left within its reach. It circles the room, puzzled, and settles on your shoulder like a hand, and is gone.",
    ],
  ],
  audit: [
    [
      "{Kname} opens the book and reads the first line, which is the date of your birth, in a voice with no tone. It is followed by a second line, which you did not know was written.",
      "The reading goes on. You hear your childhood in the form of a list of what was taken from you and what you took, and the list is shorter than you thought, and worse.",
      "The third reading is a line you remember writing. {Kname} reads it without stress, and in that flat voice it sounds like exactly what it was.",
    ],
    [
      "A clerk’s lamp is lit at {place}, and the reading begins at the beginning, and the beginning is a decision you took when you were nine. You had forgotten it entirely. It has not forgotten you.",
      "The second page is read. It describes an afternoon in the plain language of the Ledger: who was present, what was said, what was left out. The last is the longest.",
      "The third page is blank, and {kname} reads it all the same, slowly, to the end. “It is the page you have not written yet,” {kthey} says. “It is also read.”",
    ],
    [
      "{Kname} hands you a pen. “You may strike one line,” {kthey} says. “The Ledger will oblige. It will take its price elsewhere, and will not say where.” You turn the pen over and over.",
      "You strike a line. Nothing happens, and then, in the corner of the room, someone you cannot see draws a long breath and lets it out, and a name has been taken from the page.",
      "The pen is warm. The book is open at a clean line, and {kname} says, gently, that you may write one thing there. It is the only line in the whole Ledger that is yours.",
    ],
    [
      "The book on the desk is the Ledger’s copy of you, and {kname} reads it at the pace of a man going down a stair in the dark. “This is only what is written,” {kthey} says.",
      "The reading comes to a line that is not written but implied, a hole of exactly the width of a name. {Kname} stops. “That is the one the Ledger will not read,” {kthey} says.",
      "The hole has a shape. You know the shape. You have been carrying it round the Ledger for years, and it has been carrying you, and the clerk, who has read everything, says nothing.",
    ],
  ],
  gates: [
    [
      "The first frame stands before you, and {kname} asks: what do you carry? There is no answer that is not a lie or a list, and you put down the one thing you can name.",
      "The second frame is lower, and asks what you have gone without. You have a great deal to say, and it is all true, and the frame stands there, unmoved, and waits.",
      "The third frame asks nothing. It stands there, and you walk toward it, and halfway through the frame you understand that it has been asking all the time.",
    ],
    [
      "At {place} the doorways have been built of pale wood and hung with white cloth. {Kname} stands in the first and says, “What do you owe?” The question is not rhetorical.",
      "You step through the second. Cloth brushes your face, and a voice at the lintel, which may be {kname}’s, asks, “Who would you lift?” You say a name, and the cloth falls.",
      "You come to the third, and there is no cloth, and no voice. The frame is bare, and you stand in it a long time, and at last you realise that it is you who has to ask.",
    ],
    [
      "{Kname} leads you to the first gate and does not go through it. “I have never been past the fourth,” {kthey} says, “and I should not like to be the one to describe it.”",
      "The fourth gate is a low one, and you stoop. On the lintel someone has carved a word, and the word is the name of the thing you have been avoiding. You read it aloud, and the gate lifts.",
      "The fifth gate is the quiet one. It asks nothing, takes nothing, and stands open, and the whole art of it is to go through without looking back, which no one has been taught.",
    ],
    [
      "You pass the first gate with a lie and the second with the truth, and at the third you realise they were the same question asked twice, and that the gate is amused.",
      "The sixth gate is the one that asks for power, and you offer it freely, and the gate declines, courteously, and tells you to come back with something that is harder to give.",
      "The ninth frame is the plainest, and you stop before it. “Go on,” {kname} says, “or do not. It is the same door.” You look at it for a long time, and it looks back, and is patient.",
    ],
  ],
  silence: [
    [
      "{Kname} goes out, and the door closes to a hand’s width, and the first hour begins. It is not quiet. The quiet comes later, and when it comes it comes all at once.",
      "In the second hour there is no thought you have not had before, and each arrives, takes a seat, and waits. By the end of the hour the room is full of them, all courteous.",
      "In the third hour even the thoughts are gone. The felt has taken them. You sit in the chair, and for the first time you understand that there is nobody coming, and that this is what it feels like.",
    ],
    [
      "The first thing in the quiet house at {place} is the sound of your own breath, which is the loudest thing you have ever heard. It fills the room, and has nowhere to go.",
      "The second thing is the tea. It was hot when it was poured, and you watch it cool, and the cooling is a sound, a very small one, like a word said in the next room.",
      "The third thing is that you have begun, without noticing, to speak. You are saying something aloud to the empty chair, and it is the simplest thing you have ever said.",
    ],
    [
      "{Kname} bows to you, and goes, and the room is yours. It is a very big room, now, and you are very small in it, and the only furniture is your own attention.",
      "The hours pass. You find you can hear the stone of the walls settling, and the mountain far below, and a bird in a different valley, and none of it is addressed to you.",
      "At the end of the last hour the door opens, and {kname} is in it, and you stand without being asked. They do not bow. They only look at you, and you look back, and the silence is not broken.",
    ],
    [
      "The bell at {place} has no clapper. {Kname} strikes it with the flat of {ktheir} hand, and it makes no sound at all, and you feel it in your ribs for the whole of an hour.",
      "In the second hour you understand that you are waiting for the bell to ring, and that it will not, and that the waiting is the trial and not the bell.",
      "In the last hour the waiting stops. You have not decided to stop. It has simply been used up, like a lamp, and what is left is the room, and the chair, and you, quite plainly there.",
    ],
  ],
};

/** The sky’s side of the verdict, and the keeper’s. A trial weathered or scorched is told in one of each. Slots: kname, kthey, kthem, ktheir, place, trib. */
export const WON_SKY: Record<TribId, string> = {
  thread: "The last thread goes out of you like a held breath, and what it leaves is not warmth but the memory of a direction. You lie there on the boards and know, without being told, that the qi will stay.",
  breath: "The breath rights itself and runs, once, the proper way round, and your chest fills with a light that was there all along. You have turned it, and it has not turned you.",
  bells: "The ninth stroke comes, and you are standing under it, and it passes through you without finding anything loose. The foundation rings like a bell, and the room is silent, and then it is not.",
  fire: "The lamp burns steady, a pale gold, and the thing you were hiding is lit and seen and found to be small. What the fire leaves is quiet, and it is the first quiet you have had in years.",
  gale: "The wind drops, and the cords you gave are gone, and the ones you kept are still in your hand. You are lighter by the weight of a decision, and heavier by the weight of a name.",
  audit: "The reading ends. The book is closed, and you have heard every line and struck none, and the clerk who is not there writes at the foot of the page a single word you cannot read and understand at once.",
  gates: "The last frame is behind you, and you did not look for the way through it. There was none to find. There was only a door, and you walked through it, and it was open.",
  silence: "The hours end. You stand up from the chair, and the room, which was empty, is not, and you understand that what filled it was yourself, and that you are able to bear the company.",
};

export const LOST_SKY: Record<TribId, string> = {
  thread: "You flinch, and the thread, which had almost found you, slips away along the floor like a snake. It will come again. It will not come soon. You lie on the boards with your eyes open and the cold gone from your hands.",
  breath: "The breath turns against you, and you fight it, and it wins. Your chest burns, and for a long moment you cannot tell which way you are breathing, and {kname} has to speak your name three times.",
  bells: "The stroke comes down on you and you go with it, to your knees, and your ears sing. You are not hurt. You are only wrong, in a way you will remember in the night, for a long time.",
  fire: "The lamp flares and goes red. What you hid is lit, not as a small thing but as the largest, and you turn from it, and the room fills with the smell of scorched cloth.",
  gale: "The wind takes the cord you were holding, and you let go too late. It cuts the hand, a little, and the person at the other end is gone, and you did not choose it.",
  audit: "You speak, though you were told not to. You correct a line, and the reading stops, and the book closes by itself, and you have the sense of having been politely and finally set aside.",
  gates: "You stop at a frame and look for the way through it. There is none. The frame is only a frame, and the one behind you is closing, and you stand between them for a long time.",
  silence: "You cannot bear it. You stand up at the second hour, and the door is a hand’s width open, and you go out, and the silence, which had been about to speak, shuts like a book.",
};

export const WON_KEEPER: Record<Stance, string> = {
  warden: "{Kname} writes in the margin of the register, in the firm hand, and turns the book so that you may read it. It is a single word, and it is yours.",
  witness: "{Kname} lets out a long breath and sits down on the nearest stool. “That is how it is done,” {kthey} says. “You will never be able to tell anyone. I shall tell them for you.”",
  rival: "{Kname} claps, twice, with the face of one who has lost a bet. “Very good,” {kthey} says. “I mean that. Do not look so pleased. It was mine to do.”",
  pilgrim: "{Kname} is crying, quite openly, and trying to clap with a cup in each hand. “I saw it,” {kthey} says. “I saw all of it. I shall tell everyone. I shall tell them I was here.”",
};

export const LOST_KEEPER: Record<Stance, string> = {
  warden: "{Kname} closes the register gently. “It is not entered,” {kthey} says. “A trial that is not weathered is not written. You may sit it again in a season, and the line will be clean.”",
  witness: "{Kname} gets down on the boards beside you. “I did not weather mine either,” {kthey} says. “Not the first time. I never told anyone the first time. Get your breath, and then we shall talk.”",
  rival: "{Kname} does not smile, which is the kindest thing {kthey} has done. “Well,” {kthey} says. “Now we know. I would like to say it does not please me. It does not.”",
  pilgrim: "{Kname} drops to {ktheir} knees beside you, in tears. “You were so brave,” {kthey} says. “I couldn’t have stayed in the room. I would have run, and you did not. Please, please sit up.”",
};

/** The choices at the gate of a trial: four ways to come to it, and the way out. Slots: kname, place, trib. */
export const PREP_LABEL: Record<"fast" | "study" | "accounts" | "asis" | "turn", string> = {
  fast: "Fast through the day before and sit the trial empty, with a clear head and a hollow belly.",
  study: "Ask {kname} for the account of every person who has sat {trib}, and read it before you begin.",
  accounts: "Make your accounts with the people you have wronged, and sit the trial with them settled.",
  asis: "Go in as you are, with whatever you carry, and ask for no preparation at all.",
  turn: "Thank {kname}, say you are not ready for {trib}, and leave {place} as you came.",
};

/** The four things a hero can do at a blow, three times each. Slots: kname, blow. */
export const BLOW_LABEL: Record<"stand" | "read" | "shelter" | "yield", [string, string, string]> = {
  stand: [
    "Stand in the first {blow} and spend your qi against it, and hold your ground.",
    "Stand in the second {blow} and meet it with all the qi you have left.",
    "Stand in the last {blow} and give it everything that remains.",
  ],
  read: [
    "Read the first {blow} as it comes, and move with it, and spend nothing.",
    "Read the second {blow} by what the first taught you, and turn with it.",
    "Read the last {blow} to the end of its pattern, and meet it where it turns.",
  ],
  shelter: [
    "Let what you have done in the world stand between you and the first {blow}.",
    "Trust the good you have done to shelter you from the second {blow}.",
    "Lean on your whole record against the last {blow}, and let it speak for you.",
  ],
  yield: [
    "Give way before the first {blow}, bend, and let it pass over you.",
    "Give way again before the second {blow}, and take what it leaves.",
    "Give way before the last {blow}, and let the trial end where it will.",
  ],
};

export const WON_LABEL = [
  "Accept the keeper’s mark of the trial, and carry it back as your own.",
  "Share the credit with {kname}, who held the room while you were gone.",
  "Say nothing about it, and sit with the quiet it left.",
  "Ask {kname} what the trial cost, and listen to the answer.",
];

export const LOST_LABEL = [
  "Ask {kname} to dress what the trial burned, and take the tea that comes with it.",
  "Say nothing, get up, and go out into the air.",
  "Swear to {kname} that you will sit {trib} again, and mean it.",
  "Blame the rehearsal, loudly, and leave as if it were the keeper’s fault.",
];
