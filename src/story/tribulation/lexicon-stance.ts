/**
 * How a keeper stands to the trial and to the person who has come to sit it, in four ways: a warden, who keeps the register and bows by the realm written
 * in it; a witness, who has survived the trial and bows to what a person has survived; a rival, who has stood the same trial beside the hero and measures
 * every bow against their own; and a pilgrim, who has not yet sat it and bows to anyone who has. Sixteen beats a stance, four to an approach, in the order
 * the tribulation’s own are written (told, rehearsed, paid for, begun), and three for the hidden room. Slots: kname, kthey, kthem, ktheir, place, focus, relic, trib.
 */
export const STANCES = ["warden", "witness", "rival", "pilgrim"] as const;
export type Stance = (typeof STANCES)[number];

type Sixteen = [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
type Three = [string, string, string];

export const STANCE_BEATS: Record<Stance, Sixteen> = {
  warden: [
    "{Kname} keeps the register of {place} and reads from it aloud. “Every name has a realm beside it,” {kthey} says, “and every realm has a bow. I do not make the bows. I only see that they are made.”",
    "“I do not ask what you can do,” {kname} says. “I ask what you are written as. The first I would have to watch. The second I can read, and be right, and be home for supper.”",
    "{Kname} charges for {trib} in the coin of the register. A name pays a little at the foot of the page and a great deal at the head, and {kthey} regards this as the only fair arrangement.",
    "The register at {place} was begun by a clerk who could not tell the cultivators apart. {Kname} has a drawer of his early pages, in which every name is written the same size.",
    "{Kname} will not say {trib} is hard. “It is long,” {kthey} says. “The hard part is deciding who is allowed to be tired.” {Kthey} says it with a flat patience that has seen a great many sleeves.",
    "{Kname} rises for the highest realms and does not for the lowest, and is exact about the step between. At {focus} the whole room can tell a Core from a Soul by the angle of {ktheir} back.",
    "The register is a ledger of bows. {Kname} reads out who rose for whom, and when, and what it cost, and the sums have never once been wrong in the same direction twice.",
    "{Kname} did not choose the register. “It was left to me,” {kthey} says, “by a clerk who was kinder than I am. I keep it as he did, with the lamp on, in case someone wishes to be read.”",
    "A warden’s whole skill is to be fair to the page, and {kname} is fair to the page. What the page leaves out {kthey} knows, and is sorry for, and does not enter.",
    "{Kname} has a way of looking at a sleeve and a face at once, and weighing the first. At {focus} the new arrivals learn to wear their sleeves forward.",
    "What the register costs {kname} is the habit of watching people rise. {Kthey} cannot see a stranger now without seeing what a stranger will be, and what they will be bowed to for.",
    "“The first bow in this sect,” {kname} says, “was to a woman who had survived {trib}, and was still alive to be bowed to. The rest of the register is what grew round her.”",
    "{Kname} will tell you the register is a mercy. A person who is written knows where they stand, {kthey} says, and can be bowed to or not by someone else’s fault, and not their own.",
    "At {focus} {kname} holds {relic} up to the lamp and reads the date on it. “It is the same lamp,” {kthey} says. “It has had a dozen wicks. The register is the same, and it has had a dozen clerks.”",
    "A warden pays for the register in friends. {Kname} says it plainly: a person who bows by rank cannot be told apart from one who flatters, and the difference is one nobody wants to hear explained.",
    "{Kname} will say the sect began with a single bow, made by a stranger to a sleeve at a gate, and that everything since is footnotes. {Kthey} has read the footnotes and likes them.",
  ],
  witness: [
    "{Kname} sat {trib} once, long ago, and is no longer in doubt about who has. “You can tell,” {kthey} says. “It is not in the face. It is in what they do with their hands when a door opens.”",
    "“I do not ask what realm you are,” {kname} says. “I ask what you have survived. A realm is a rung. Surviving is a floor. I would rather stand on one than hang from the other.”",
    "{Kname} charges nothing for {trib} and expects an account. A person who has sat it owes the next one a true telling, and {kthey} keeps the tellings in a box at {place} and reads one on bad nights.",
    "The witness’s post at {place} was not founded. It accrued, as a scar does, around the first person who came back from {trib} and was not sent away. {Kname} is the fourth to sit in it.",
    "{Kname} will not say {trib} can be done. “It can be survived,” {kthey} says. “That is the whole of the matter. Everything else is the sect telling you what it means.”",
    "{Kname} rises for those who have sat the trial and not for those who have not, and the room has learned to read the difference. At {focus} the youngest watch where {ktheir} eyes go first.",
    "A witness keeps no register. {Kname} remembers. {Kthey} can tell you who sat the trial in the winter of the great frost, how they stood, and what they said after, and they are all dead, and {kthey} bows to the chair.",
    "{Kname} did not choose to witness. “I came back from it,” {kthey} says, “and nobody else had. There was a chair, and I sat in it, and that was how I was made the one who remembers.”",
    "A witness’s whole skill is to be present at the part nobody sees. {Kname} is present at the part after the thunder, when the person is still, and has not been told yet that they are alive.",
    "{Kname} has a way of watching a person come in that is like watching a rope take weight. At {focus} the ones who have sat {trib} do not notice it, and the ones who have not feel it on the back of the neck.",
    "What the trial cost {kname} is a kind of vigilance that never stood down. {Kthey} cannot see a door open without checking the sky, and has stopped apologising for it.",
    "“The first witness,” {kname} says, “was a farmer who stood by the door while a Condenser sat, and could not look away. She was not a cultivator. She was just the one who stayed.”",
    "{Kname} will tell you the witness is not there to help. {Kthey} is there so that the trial has been seen, and so that whatever the sky sends has to be sent in front of someone who remembers.",
    "At {focus} {kname} turns {relic} in {ktheir} hands and puts it down. “It was on the table the night I sat it,” {kthey} says. “I do not know why I kept it. It is the only thing I did not use.”",
    "A witness pays for the post in sleep. {Kname} sits up with every trial, whether {kthey} is asked or not, and has lost, {kthey} thinks, about eleven years of it, and does not count them.",
    "{Kname} says the sect began as a circle of people who had each been through it and sat down together afterward. The sect has grown. The circle is still the part {kthey} believes in.",
  ],
  rival: [
    "{Kname} sat {trib} the same season you did, or would have, and says so at once. “We were put at the same bench,” {kthey} says, “and I have never forgiven the bench.”",
    "“I do not ask what realm you are,” {kname} says. “I ask whether it is higher than mine. If it is, I will bow, and I will hate it. If it is not, I will not, and I will be gracious. It is a great deal of work.”",
    "{Kname} charges for {trib} in what {kthey} thinks of as fairness: exactly what was charged {kthem}, to the stone. It is not generous, and {kthey} says generosity is for people who passed first.",
    "The rival’s bench at {place} was a joke that stuck. A clerk put two desks together to save space, and the two who sat at them have been measuring one another ever since. {Kname} has the left.",
    "{Kname} will say {trib} is easy, and will say it too loudly. “It is only long,” {kthey} says, and then, more quietly, “and I have never told anyone how I got through the fourth hour.”",
    "{Kname} rises a half-beat late for those who are above {kthem} and a half-beat early for those below, and is exact about the beat. At {focus} the whole room can tell a realm by it.",
    "A rival keeps a tally. {Kname} knows to the week how long every acquaintance took to break through, and what they paid, and what they pretended afterward not to have paid.",
    "{Kname} did not choose to be a rival. “It was assigned,” {kthey} says. “Two of us arrived on the same day with the same sleeves, and the sect did what it does. I am not sure which of us was meant to win.”",
    "A rival’s whole skill is to want what another has without being rude about it. {Kname} is rarely rude. {Kthey} is merely there, at the elbow, with an eyebrow, and a very good memory for dates.",
    "{Kname} looks at a newcomer’s sleeve and then at their own, quickly, and then away. At {focus} the new arrivals learn to put their sleeves where the rival cannot compare.",
    "What being a rival has cost {kname} is a friend. {Kthey} had one, once, who rose faster, and {kthey} bowed, and has not been able to stand up straight in front of anyone since.",
    "“The first rival,” {kname} says, “was the second person to be given a bench. I think about her more than the first. The first had nobody to be sore at.”",
    "{Kname} will tell you rivalry is how the sect keeps its edge. “A cultivator with no one to beat,” {kthey} says, “stops. I would rather be beaten than stop, and I am glad to say it is going well.”",
    "At {focus} {kname} picks up {relic} and puts it down on the left side of the table, which is the side {kthey} has always had. “It was the other side’s, once,” {kthey} says. “I moved it. Do not tell.”",
    "A rival pays for the post in sleep and in a particular smile. {Kname} has been practising it for years, and it is a fine, warm, perfectly even smile, and the sect has learned to flinch from it.",
    "{Kname} says the sect began with a quarrel over a bench, and that everything since is the same quarrel with better tea. {Kthey} laughs, and it is not entirely a joke.",
  ],
  pilgrim: [
    "{Kname} has walked a long way to see {trib} sat, and has not yet sat it. “I am here to learn what is asked,” {kthey} says, “so that when it is my turn I will know whom to bow to.”",
    "“I do not ask what realm you are,” {kname} says. “I only look at your face, and then the floor. If you are high, I will bow. If you are low, I will bow a little less. If I am wrong I would sooner be wrong low.”",
    "{Kname} charges nothing for {trib} and has nothing to charge with. {Kthey} will carry your bag, and light your lamp, and ask one question, and that is the whole of what {kthey} has to give.",
    "The pilgrim’s corner at {place} was never meant for anyone. A bench was left against the wall, and {kname} came, and sat, and the sect has not liked to ask {kthem} to leave.",
    "{Kname} will not say {trib} is hard, in case it is listening. “I am told it is long,” {kthey} says. “I am told the hardest part is being alone with it, and I have never been less alone.”",
    "{Kname} rises for everyone who comes in, and for the highest realms rises a second time, from a lower place on the floor. At {focus} the room watches {ktheir} knees and learns what height is.",
    "A pilgrim keeps a notebook. {Kname} has recorded, in a tiny hand, every cultivator who has walked through {place}, and what they wore, and how the room changed, and the notebook is nearly full.",
    "{Kname} did not choose to be a pilgrim. “I heard of it in a village,” {kthey} says, “and could not stop. There was nothing in me that could. I am told this is how it begins.”",
    "A pilgrim’s whole skill is to be amazed without being a nuisance. {Kname} is rarely a nuisance. {Kthey} is simply there, a little behind you, with eyes the size of cups.",
    "{Kname} looks at a newcomer’s face and then very quickly at their feet, as one looks at a high window. At {focus} the new arrivals learn to stand a little straighter, and are surprised that they can.",
    "What being a pilgrim has cost {kname} is a home. {Kthey} cannot go back to a village where nobody has sat {trib}, and cannot go forward to a sect that does not know what to do with {kthem}.",
    "“The first pilgrim,” {kname} says, “is said to have sat outside the door for a year and been sent in on the last day by a cook, who thought she looked cold. I think about the cook.”",
    "{Kname} will tell you awe is the beginning of everything. “If you cannot be amazed,” {kthey} says, “you will never be afraid enough, and then you will never be careful.” {Kthey} is very afraid and very careful.",
    "At {focus} {kname} holds {relic} with two hands, like a bowl. “I was told it was yours,” {kthey} says, “or someone like you. I have been keeping it warm, in case.”",
    "A pilgrim pays for the post in distance. {Kname} has crossed more country than the sect’s whole council, and has never once been the one to be bowed to, and says it is the best seat in the hall.",
    "{Kname} says the sect began with a pilgrim, and that all the rest is what happened when they decided to stay. {Kthey} hopes to be the kind who does not.",
  ],
};

export const STANCE_DEEP: Record<Stance, Three> = {
  warden: [
    "{Kname} unlocks a cabinet in the wall of the room, and in it, on a shelf, stand the old registers, bound in grey. They go back eleven hands, and the earliest is written in a script nobody uses.",
    "In the earliest the bows are marked in the margin as small strokes, one for each cultivator who rose. Next to the highest realms the strokes are many, and next to the lowest there are none at all.",
    "“That was the first sum,” {kname} says. “The higher the realm, the longer the line. I have tried for thirty years to find the one who drew the first stroke, and I think now it was somebody’s mother.”",
  ],
  witness: [
    "{Kname} opens a small chest in the wall of the room. Inside lie a hundred tokens, each a different thing: a button, a stone, a feather, a coin. Each was left by someone who sat the trial and walked out.",
    "Every token has a date scratched on it in a different hand, and the dates run back in a long unbroken line. There is only one gap, a single winter, and in the gap lies a bit of black cloth.",
    "“That was my winter,” {kname} says. “I left the cloth. It was what I wore. I have not touched it since, and I think it is the only honest thing I ever kept.”",
  ],
  rival: [
    "{Kname} pulls a folded paper from a crack in the wall of the room. It is a tally, ruled in two columns, one in each hand, and it goes back as far as the two desks do. Nearly every line has a mark in both.",
    "At the bottom of the second column, in the other hand, is a short note: “You were right. I did not say so.” It is dated, and the date is four years before {kname} came to sit at {place}.",
    "{Kname} reads it and folds it away. “That is the other desk’s,” {kthey} says. “Whoever kept it is dead. I have never had the nerve to answer, and I think that is what the tally is for.”",
  ],
  pilgrim: [
    "{Kname} draws back a curtain across the wall of the room. A small shelf stands behind it, and on the shelf sit forty cups, each one filled and each one cold. Every cup is marked in a tiny hand with a name.",
    "The names are those of every cultivator who has passed through {place}, in order, and at the end of the row an empty cup waits with no name. It has been wiped clean, many times.",
    "“I pour one every time,” {kname} says. “They never drink it. I do not mind. It is the only way I know to say that I saw them.”",
  ],
};
