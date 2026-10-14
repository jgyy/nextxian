import type { Gap } from "@/engine/age";
import type { Tier } from "@/engine/types";

/** What the keeper makes of the hero’s years the moment they arrive, by how far the hero’s age stands from the keeper’s. Slots: kname, kthey, ktheir, place, focus. */
export const GAP_GREET: Record<Gap, string[]> = {
  kin: [
    "{Kname} looks you over and decides, at once, that you are of an age: the same weight in the step, the same slight impatience in the eyes. It is a kind of recognition, and {kthey} does not hide it.",
    "You and {kname} carry about the same number of years, and both of you can tell. The knowledge goes between you at {place} like a coin passed under a table.",
    "{Kname} reads your years in how you stand, and finds them close to {ktheir} own. The corner of {ktheir} mouth lifts, and the wariness that kept the door a little shut comes off it.",
    "There is a moment of mutual arithmetic at {place}. {Kname} counts, you count, and the sums agree. Whatever else divides you, you are in the same stretch of the road.",
  ],
  older: [
    "{Kname} sees at once that you have lived longer, and straightens, and lowers the voice. At {place} the young know when to be quiet, and {kthey} is one of the better ones at it.",
    "Your years are plain on you, and {kname} takes them in with a look that is half deference and half curiosity. It is the look the young give a map of a country they will one day cross.",
    "{Kname} gives you the seat nearest the fire without being asked. The older are always cold, {kthey} says, and in this {kthey} is right.",
    "At {place} {kname} lets you speak first, which {kthey} does not do for everyone, and watches your hands as you talk. You can tell {kthey} is learning something.",
  ],
  younger: [
    "{Kname} sees at once that you are the junior here, and lets the shoulders relax by a hair. It is an easy thing to be kind to someone with fewer years than oneself, and {kthey} is clearly grateful for it.",
    "Your years are fewer than {ktheir} own, and {kname} makes the accounting visible, tactfully, in the way {kthey} gives you the lower stool and the first cup.",
    "{Kname} has taught the young at {place} for long enough to know the signs, and finds them in you: the quick eye, the hand that wants to be doing, the faint apology in the voice.",
    "At {place} {kname} watches you walk to {focus}, and nods once, privately, the nod of a person who has seen a younger self in the doorway and decided to be gentler than they were treated.",
  ],
  farOlder: [
    "{Kname} sees how very many years you carry and falls quiet. At {place} the young speak of the old as of a legend, and one has just sat down on the bench, and is asking, politely, for tea.",
    "You have lived longer than {kname}’s whole line has been in the trade, and {kthey} has the grace to look at you for a long moment without speaking. It is the silence people leave for a monument.",
    "{Kname} stands up when you come in, and does not know why. The legs knew before the head. At {place} the old are not honoured often, and the honour has found its own way to the surface.",
    "Your many years go before you into {place} like a lamp carried ahead, and every face in the room turns to see what the light has found. {Kname} steps forward, and bows without being told how deep.",
  ],
  farYounger: [
    "{Kname} sees how very few years you carry and softens at once, in a way {kthey} would deny. At {place} the old have a weakness for the young, and it is not a weakness they intend to correct.",
    "You are younger than anyone {kname} has seen at {place} in years, and {kthey} stares a little, then looks away, then looks back, as though afraid you will vanish if watched too hard.",
    "{Kname} puts down whatever is in {ktheir} hands and gives you ten full breaths of {ktheir} undivided attention. It is the highest courtesy the old have, and {kthey} spends it without being asked.",
    "Your youth goes before you into {place} like a window opened in a close room, and every face turns to feel the air. {Kname} says nothing. {Kthey} only moves a stool nearer to the stove.",
  ],
};

export type YearsBand = "near" | "short" | "past";

/** What the keeper sees when the hero’s years are running out, by how far: ten years left, three or fewer, or none. Slots: kname, kthey, ktheir, place, focus. */
export const YEARS_READ: Record<YearsBand, string[]> = {
  near: [
    "{Kname} glances at you and then at the shadow on the floor, and says gently that you have less than ten years at your realm. It is not a threat. It is the sort of thing a good teacher says before the lesson, so that the lesson can be chosen well.",
    "You have fewer than ten years your realm will allow, and {kname} can tell, the way a boatman can tell the tide. {Kthey} does not mention it. {Kthey} merely sets the pace of the lesson a little quicker than {kthey} otherwise would.",
    "There is a certain look to those with under ten years remaining at their realm, and {kname} knows it. At {place} {kthey} makes sure that every hour counts, and does so without the least display of alarm.",
    "{Kname} counts your span on {ktheir} fingers, silently, and arrives at a number under ten. {Kthey} says nothing of it. The numbers, {kthey} thinks, will speak when they are ready.",
  ],
  short: [
    "{Kname} looks at you for a moment longer than courtesy permits, and says, very quietly, that your realm allows you only a few more years. The words are kind. The kindness makes them heavier.",
    "Your years are nearly spent for your realm, and {kname} sees it. At {place} {kthey} drops {ktheir} voice, and sets down whatever is in {ktheir} hand, and says that there are things that must be done before the season turns.",
    "A hush falls in {kname}’s manner. You have only a few years left at your realm, and {kthey} treats you as one treats a guest who must leave by the morning boat: warmly, urgently, and without wasting a cup.",
    "{Kname} sees the end of your span coming, as one sees a far shore, and the sight makes {kthem} gentle. At {place} {kthey} asks what you would like to learn first, since there may not be time for the rest.",
  ],
  past: [
    "{Kname} knows at once that you are past the years your realm allows. The body that stands before {kthem} has been borrowing, and the debt is overdue. {Kthey} does not say so. {Kthey} says only, ‘Sit down. We have not much time to waste.’",
    "You have outlived your realm’s span, and {kname} can see the body keeping its balance by habit alone. At {place} {kthey} lays a hand on your arm, lightly, as one steadies a lamp whose oil is nearly gone.",
    "There is no hiding it: you have run past the end of the years your realm gives. {Kname} sees it in the slowness of your breath and the lines of your face, and says that the only remedy is a breakthrough or a gift of years, and that {kthey} will help with either.",
    "{Kname} has seen this before, a cultivator who has stayed in a realm longer than the realm permits, and who goes on by will. {Kthey} speaks to you with a tenderness {kthey} does not use for the healthy, and with a hurry {kthey} cannot conceal.",
  ],
};

/** The Elder’s answer to a door of years, by her attitude. Eight wordings, so that forty roads do not each get the same one. Slots: kname, place, focus. */
export const DOOR_TIER: Record<Tier, string[]> = {
  hostile: [
    "You told a stranger at {place} how old you are and let them seat you by it. Years are a debt. Most people have the sense not to hand the ledger over.",
    "At {place} you let your years be read aloud. I do not enjoy watching a cultivator spend their age as though it were small change.",
    "You sat where {kname} put you, by your years, and were told what a person of your age may be told. It is a cheap way to be taught, and the bill is never itemised.",
    "I hear you took the seat your age gave you at {place}. People who sit where they are placed are always surprised to find out who placed them.",
    "Your years were weighed at {place}, and you let them be. I would have preferred to see you decline the scales.",
    "You have shown a keeper at {place} the one number that cannot be argued with. I hope you got something for it. Nobody ever has.",
    "Your age is not a secret, but I would have liked it to be a choice. At {place} it was only a fact, and you let it open a door.",
    "You went through the door of years at {place}, and I notice that you went through it as one goes through a door held open by someone else’s hand.",
  ],
  wary: [
    "I hear {kname} seated you by your years at {place}. The old trade in this: each age believes it knows what the others do not. Take what is useful, and keep the rest.",
    "At {place} you were read by your age, and I am curious how closely it was read. There is a great deal that a number does not say, and a great deal that it does.",
    "{Kname} asked, and you told them how many years you carry. I should like to know what the keeper gave for the answer.",
    "You sat by your years at {place}. It is an honest seat, and also a convenient one for anyone who wishes to know what to charge you.",
    "I hear what was said at {place} about your age. There is a use in being underestimated and a use in being understood, and I hope you knew which one you were buying.",
    "Your years opened a door at {place}. Doors that open to who you are close behind you, and I would like to know what you owe for the draught.",
    "At {place} the keeper took your measure by the calendar. It is a crude instrument, and it is right more often than I should like.",
    "I hear you were taught according to your years at {place}. Be careful of any teaching that is cut to a number. It fits, and it fits tightly.",
  ],
  neutral: [
    "{Kname} at {place} seated you by your years, I hear, and told you what the road tells people of your age. Every age has its own errors, and it is a kindness to be told yours.",
    "I hear what the door of years at {place} showed you. It is an old custom: each road keeps a seat for each age. I have sat in all five, in the end, and none was comfortable.",
    "At {place} you were read by the years you carry. Some of what was said will be true of you and some will be true of the age. Learning to tell them apart is half of growing old.",
    "You took the seat your years gave you at {place}. It is a useful seat, and not a final one. The years will move you from it without your help.",
    "{Kname} knew your age at {place} before you had finished telling it. That is the privilege of the road: it has seen many heroes of every number, and learned the shape of each.",
    "I hear you sat with your own years at {place} and learned a thing or two. Good. I have spent a lifetime learning what my age is for, and I am still not quite finished.",
    "At {place} the years you carry were weighed and found to be what they are. It is a plain fact and a useful one, and it will not stay the same for long.",
    "The door of years at {place} opened for you, and you went through. I am not surprised. Everyone does, eventually, and few come back unchanged.",
  ],
  warm: [
    "I hear {kname} sat you by your years at {place}, and that you took the lesson well. Few listen to what their age has to say. It is the oldest teacher on the mountain, and the least thanked.",
    "At {place} you sat among the years that fit you and gave them a fair hearing. I am fonder of you for it, and I would not say so if I did not mean it.",
    "You let your age be read at {place}, and did not flinch, and did not boast. It is a rare balance, and I have seen very few strike it.",
    "I hear the door of years opened for you at {place}, and that you walked through it kindly. The keepers there notice such things, and so do I.",
    "At {place} you took your years as they are and asked the road what they were for. That is the question I wish I had asked at your age, and the one I ask now.",
    "{Kname} knows what to give a person of your age, and I hear it was given freely. You are the sort of cultivator that roads are generous to, and I am pleased for both of you.",
    "You sat with your years at {place} as with an old friend, and I hear that the friend had a good deal to say. Keep the conversation going. It is the only one that lasts the whole way.",
    "I hear that at {place} you were shown the seat that suits your age, and that you did not mind where it was. That ease is worth more than any realm.",
  ],
  devoted: [
    "At {place} the road read your years and gave you the seat that fits them. I wish I had been there to see how you took it. I think you took it as you take everything: honestly, and with a little more care than it asked.",
    "I hear you sat with your years at {place}, and that {kname} learned something from you in return. That is the best sign a cultivator can give, and you give it as easily as breathing.",
    "You let a stranger at {place} look at your age, and trusted them to be gentle. I am glad they were. I should have gone myself, if I had known how kind the door would be.",
    "At {place} the road offered you the seat of your years, and you took it, and made it larger. I have not seen that done often. I will not forget it.",
    "I hear what happened at {place}. You carry your years like a lantern, and the keeper there saw the light. I am honoured to have walked beside you this far.",
    "The door of years opened for you at {place}, and it was a lucky door. It does not open easily for everyone, and I have wondered for a long time why it opens so freely for you.",
    "You sat with your age at {place} and found it a good companion. I find that I am, quite unexpectedly, jealous, and also very proud.",
    "At {place} the years you carry were read and respected. I wanted to say it plainly: so are they here, by me.",
  ],
};

/** What the Elder remembers of the hero’s years when she answers: a memory ahead of the rest for each gap, said in her own voice. Slots: kname, place. */
export const GAP_MEMORY: Record<Gap, string[]> = {
  kin: [
    "You sat among those of your own years at {place}. There is a particular loneliness in it, and a particular ease, and I hope you had the second.",
    "A keeper of your own age at {place}, and you were of one mind, I hear. It is a rare luxury to be understood by someone the same number as oneself.",
  ],
  older: [
    "You are older than {kname}, and the road knew it, and gave you the seat that goes with the number. I hope you were not hurt by the courtesy. It is the way the young say they are afraid.",
    "Older than the keeper at {place}. I think the young one learned from you more than they said. That is how it is with the old: our best teaching is done when we are not teaching.",
  ],
  younger: [
    "You are younger than {kname}, and the road knew it. I was always the youngest at every table I sat at, and have been waiting to be told it would pass. It does not. It only changes sides.",
    "A younger hero at the feet of {kname}, at {place}. Listen well. There is no more certain way to be taught than to be a little behind and not ashamed of it.",
  ],
  farOlder: [
    "So many more years than {kname} at {place}, and they put you in the chair of honour. I hope you had the grace to sit in it, and the grace to leave it.",
    "A very old hero at the knee of a keeper as young as {kname}. I have read of such scenes in the Law, and always taken them for allegory. I see I was wrong, and am glad of it.",
  ],
  farYounger: [
    "So few years beside {kname} at {place}, and they put you by the warm stove. I hope you were not too proud to enjoy it. Young bones do not know how rare a warm stove is.",
    "A very young hero at the side of a keeper as old as {kname}. I had a keeper like that once, and {place} puts me in mind of it. I did not know, then, how few of them there are. Remember the name.",
  ],
};

/** What the Elder says when a hero with few years left takes the door: a memory ahead of the rest, because years are what she watches. Slots: kname, place. */
export const WANING_MEMORY: string[] = [
  "You have scarcely any years left at your realm, and you spent an hour of them at {place}. Either that was wise, or it was the last wise thing you had in you. I would like to hear it was the first.",
  "The years your realm allows are almost gone, and you sat among the keepers of {place} as if there were all the time in the world. I envy the pose. I fear the arithmetic.",
  "I know how long your realm gives you, and I know how long you have already had. The distance is very small. At {place}, I hope you used it to ask what it would take to be given more.",
];

/** A line for the Elder’s report on the road: she hears the road, then how the hero’s years read. */
export const REPORT_AGE: string[] = [
  "You went through the door of years at {place}. A hero’s age is the one thing on this mountain that cannot be forged, and I suspect that is why every keeper asks.",
  "At {place} the door of years opened for you. I have gone through it myself on some other road, at some other age, and never yet in the same direction twice.",
  "{Kname} read your years at {place}, and you let them. That is more trust than most of the Law Hall has shown a calendar.",
  "The keeper at {place} saw your years as they are. I hope the lesson fitted. They are very particular about the cut.",
];
