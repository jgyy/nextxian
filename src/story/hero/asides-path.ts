import type { Tier } from "@/engine/types";

type Lines = Record<Tier, string>;

/**
 * What Elder Su says about where the hero came from, the roots they were born with and the Dao they practise. They sit
 * beside the asides about dress, birth and face, and she works through them in the same order, never saying one twice.
 */
export const originAsides: Record<string, Lines> = {
  river: {
    hostile: "A river village and a teacher who told you nothing. It is a convenient upbringing. Nobody can check it.",
    wary: "You came from a river village I cannot find in any register. A place with no record is either very poor or very careful.",
    neutral: "Rain, a river and a silent teacher. It is the oldest story I know, and I have never heard it told by someone who wished to be believed.",
    warm: "A teacher who told you nothing, and you climbed my mountain regardless. I have known sects that could not raise a disciple so well.",
    devoted: "Wherever that river runs, it has sent me something I did not know I was waiting for. I will not ask who taught you your silence.",
  },
  porter: {
    hostile: "You carried our loads for years and never once spoke in my hall. Servants who see everything and say nothing are the kind I ought to fear.",
    wary: "A porter sent down to the foothills the very week the jade vanished. I have asked myself who sent you, and I have not liked any answer.",
    neutral: "You know the stairs better than my wardens do. A porter’s feet remember what a ledger forgets, and I mean to ask them a question or two.",
    warm: "You carried water to this hall for years and I never learned your name. I have it now. I find that I am ashamed of the delay.",
    devoted: "The porters keep this mountain standing. I should have bowed to you long ago. I am bowing now, a little, where nobody can see.",
  },
  rogue: {
    hostile: "A rogue with a bounty in your eye. The Law does not hire thief-takers off the road. It hangs them from the lintel.",
    wary: "A rogue cultivator is a cultivator with nobody to answer for them. That makes you free, and it makes you my problem.",
    neutral: "No sect, no teacher, no lineage, and you are still standing. Rogues live by reading rooms. I am being read, and I know it.",
    warm: "No sect gave you anything, and you gathered what you have from the roads. I know disciples who could not have managed it with every manual we own.",
    devoted: "A rogue, and the most honest cultivator to stand in this hall in a decade. I will not say it twice. The Law would have me struck.",
  },
  heir: {
    hostile: "The heir of a house that burned, and of the debts that did not. You came to me for a paper. I give papers only to those who have earned them.",
    wary: "A fallen house comes to the Law Hall for one of two reasons: justice or revenge. I have heard both in a single sentence before.",
    neutral: "Your family’s name is in a ledger in my second drawer. I have not opened it today. When I do, you may watch me open it.",
    warm: "You carry your house’s fall as though it were a weight you chose. I know the posture. I have worn it for fifteen years.",
    devoted: "Your house is ash, and you stand in my hall as straight as its banner once did. If the paper you seek is in my drawer, it is already yours.",
  },
  courier: {
    hostile: "The Concord sends me a letter, and a courier to watch me read it. I do not need two pairs of eyes to know when I am being audited.",
    wary: "A Concord courier is a clerk with a sealed mouth. You see my hall, and you carry what you see to people who are not my friends.",
    neutral: "You carry a seal that is not yours on an errand that is not mine. We are, for the moment, two people doing other people’s work.",
    warm: "Couriers learn to be pleasant and tell nothing. You are pleasant, and you have told me more than you meant. I will not use it.",
    devoted: "The Concord’s courier, and the first honest face it has sent me in a decade. If they open your letter in the wrong light, tell them I said so.",
  },
  exile: {
    hostile: "Struck out by the Windward Sword Pavilion, and now at my door. A pavilion does not strike out its best, and it does not forgive its second best either.",
    wary: "An exile still carries the old sect’s breath on the sleeves. I can smell the Windward Pavilion on you, and I am not certain which of us it frightens.",
    neutral: "You were a disciple of the Pavilion until a ruling said you were not. I have signed rulings of that kind. I know how little they prove.",
    warm: "You were struck out, and you climbed my mountain instead of going down a river. That is a choice I understand better than I should.",
    devoted: "A ruling made you an exile. I have written such rulings, and I know how often the one who signs is the one who is wrong.",
  },
};

export const talentAsides: Record<string, Lines> = {
  wood: {
    hostile: "A verdant root. Herbs lean toward you, and I wonder what else does. Living things are easily fooled by a hand that smells of spring.",
    wary: "Wood qi is the gentlest and the hardest to kill. I have seen it grow through a floor. I will watch where you root.",
    neutral: "A verdant root. It cultivates quietly, and the hall’s plants have been a little brighter since you came. I have noticed, and not mentioned it.",
    warm: "I keep a dying fern on that sill, and it stood up this morning. I have decided not to ask what you did to it.",
    devoted: "A verdant root is rare on a mountain of stone and law. I would plant you here, and stand in the doorway to keep the frost off.",
  },
  fire: {
    hostile: "A cinnabar root. You are hot in the face and hotter in the temper, and I keep the Law Hall’s lamps low for good reason.",
    wary: "Fire qi is quick, and quick qi is how a young cultivator ends up in the chapter of burns. Do not be impatient with me.",
    neutral: "A cinnabar root. It makes a quick cultivator and a quicker temper. The first is a gift, and the second is the Law’s business.",
    warm: "You carry warmth into every room. I have stopped feeling the draught from the hall door when you stand near it.",
    devoted: "A cinnabar root, and you have not burned a single thing I did not ask you to. I would call that mastery, if I were the kind to use the word.",
  },
  earth: {
    hostile: "A mountain root. Slow, stubborn and hard to move. The Law admires the quality in a pillar and distrusts it in a witness.",
    wary: "Earth qi does not lie, because it cannot be bothered to. I will see whether you are the same.",
    neutral: "A mountain root: the slowest of the five and the hardest to unseat. A heart demon breaks against it like surf against a quay.",
    warm: "You settle in a room as a stone settles in a river. The rest of us arrange ourselves around you, and I am not offended.",
    devoted: "A mountain root. I could build a hall on you. I am, I think, quietly doing so.",
  },
  metal: {
    hostile: "A bright-metal root. Edges, coin and clean lines. You cut well, and I have had enough of people who cut well.",
    wary: "Metal qi is honest in the way a blade is honest. It cannot be used to cut only the guilty.",
    neutral: "A bright-metal root, with the clean cold qi the Law prizes in its wardens. Do not hold it against me that I like it.",
    warm: "I hear your qi in the hall like a bell struck once. It is the one sound on this mountain that has never lied to me.",
    devoted: "A bright-metal root, and the straightest line on this mountain. I would ask any child of mine to learn from it.",
  },
  water: {
    hostile: "A tide root. Water goes round whatever stands in its way. I do not know what you are going round, and I mean to learn it.",
    wary: "Water qi finds the low places first. I wonder what yours has found out about my hall.",
    neutral: "A tide root, and your sleeves are damp in a dry hall. It is a quiet gift and a slippery one, and I will keep my ledger dry.",
    warm: "Your qi moves through the room like a stream through reeds. I have stopped guarding the doorways against it.",
    devoted: "A tide root. Water reaches every low place in the end, and I find that mine has been waiting for it.",
  },
  mixed: {
    hostile: "Mixed roots. Five weak currents and no strong one. The Law has no use for an ordinary body, and neither does the abyss.",
    wary: "Five roots and none of them strong. A middling talent is how most people end, and how a few start. I have not yet decided which you are.",
    neutral: "Mixed roots. You cultivate at the plain rate and can borrow from any element. The sect built its best by patience, not by luck.",
    warm: "You were handed no gift and you have made one. I like that better than a gift. I have seen what gifts do to the people who get them.",
    devoted: "An ordinary body and an extraordinary patience. If this mountain falls, I would rather it were saved by ordinary things.",
  },
  heaven: {
    hostile: "Heaven-marked. The sky has a finger on you, and the Law does not like to share what it is watching.",
    wary: "A thunder root draws every eye in the hall and a few outside it. I wonder who else has already come to look at you.",
    neutral: "A thunder root is no accident. Something above us has noticed you, and I cannot decide whether to fear that for you or for myself.",
    warm: "I felt your qi through the wall like a distant storm. I am afraid for you, and I did not expect to be.",
    devoted: "Heaven-marked, and you carry it as if it were a coat. I have never seen anyone wear the sky so lightly. Hold on to that.",
  },
  late: {
    hostile: "A late bloom. Years of nothing and then everything at once. The Law does not trust anyone who has been quiet that long.",
    wary: "Your roots stayed shut for years. I will wait to see what comes out when they open, and I will keep a bucket by the door.",
    neutral: "A late bloom. You are slower than the rest until the core, and then you are not. I would not want to stand in your way then.",
    warm: "You were behind the others all your life, and you did not stop climbing. I would rather have one of you than five who started early.",
    devoted: "A late bloom is the only kind of flower I have ever bothered to wait for. I have waited. It was worth it.",
  },
};

export const daoAsides: Record<string, Lines> = {
  none: {
    hostile: "No Dao. A cultivator with an open hand is either a fool or a thief, and I have not yet seen the hand do anything.",
    wary: "You practise no craft. Every master on the mountain will tempt you, and I will see which of them you listen to.",
    neutral: "No craft, no Dao, an open hand. It is the one kind of hand that can still take what is offered. I will watch what you take.",
    warm: "You have not chosen a Dao, and you have not pretended to. After a season of masters, I find the honesty of it a relief.",
    devoted: "An open hand. I envy it. I closed mine on the Law at twenty-eight and have never learned to open it again.",
  },
  alchemy: {
    hostile: "An alchemist. The Law Hall has buried three people who were certain they could improve on the sect’s pills.",
    wary: "Pill Dao, and a hand that knows what a dose is. I will not leave a cup unwatched in my hall.",
    neutral: "A pill-maker. A pill works on you from further back than on anyone else, and I would like to know what you owe it.",
    warm: "I have taken the calm dust for twelve years and never asked how it was made. You may tell me when you wish.",
    devoted: "An alchemist, and I would take a cup from your hand without looking at it. That is the most I have ever said of trust.",
  },
  forging: {
    hostile: "A forger. The Bell Foundry has a standing rule about hands that make what they were not asked to make.",
    wary: "Forge Dao: you shape what you carry, and what you carry shapes the room. I will know what you put in it.",
    neutral: "A forger. A tool in your hand is half again as good as it is in mine, and I have never minded losing an argument with an object.",
    warm: "The mend in my seal-case holds because someone like you did it. It is a pleasure to meet the kind of person who makes things stay made.",
    devoted: "A forger, and the only craft I have ever envied. You make a thing, and it stays made.",
  },
  talisman: {
    hostile: "A talisman-maker. A page of cinnabar can say anything. I prefer to read the face of whoever signs it.",
    wary: "Script and ward. You write what you want to be true on paper and ask the world to agree. I would like to see it refuse.",
    neutral: "Talisman Dao. A ward on your qi halves what a push beyond your realm costs you. I watch that, as I watch every kindness.",
    warm: "You write the way I wish I had signed: slowly, and for a reason. I have kept one of your slips in my sleeve.",
    devoted: "A talisman-maker. Yours is the first ward on this mountain that has ever held. I did not say so. Pretend I did not say so.",
  },
  formation: {
    hostile: "An array-master. You see the pattern under a room and then you move the furniture. Do not touch mine.",
    wary: "Formation Dao. You see what holds a place together, and where it could be pulled apart. I would prefer you saw only the first.",
    neutral: "An array-master. You will find the Law Hall is laid out as a formation of one, and you will not tell me where it is weak.",
    warm: "You looked at my hall and said, kindly, that it was well made. I have waited twelve years for someone to see it.",
    devoted: "A formation-master. If you ever redraw the wards, I will give you the Hall’s plan without being asked. I have never offered anyone that.",
  },
  beast: {
    hostile: "A beast-tamer. The mountain has had enough of things that follow people home.",
    wary: "Beast Dao: something hunts for you and something else is hunted. I will keep the cats in at night.",
    neutral: "A tamer. The foothill village has lost a goat or two since you came. I will not ask, and I will not count.",
    warm: "The sparrows on the sill ignored me for twelve years. They come to you. I have decided to be jealous in private.",
    devoted: "A beast-tamer, and the old gatehouse dog has not left your side. I take that as better testimony than any sworn.",
  },
  sword: {
    hostile: "A swordsman. The Law Hall stands without a blade on its lintel for a reason, and you carry one in the way you walk.",
    wary: "Sword Dao. You have one stroke in you, and you are still deciding what to spend it on. I would prefer it were not here.",
    neutral: "A swordsman. You master a deed a realm sooner than most, and I notice you are always looking at the door.",
    warm: "You wear the Sword Dao like a closed hand. I have learned to tell the difference between a fist and a rest.",
    devoted: "A swordsman, and the first I have trusted at my back. That is not a compliment. It is a confession.",
  },
  healing: {
    hostile: "A healer. The Law Hall has hanged more physicians than it has thanked. I will remember that if you try to heal me.",
    wary: "Healer’s Dao. You are the one person on this mountain who knows exactly how long I have been awake. Do not tell me.",
    neutral: "A healer. A heart demon needs a far darker karma to hold you. I have noted it, and I hope you will not test it.",
    warm: "You looked at my hands when I did not know they were trembling. I did not ask you to. I am glad you did.",
    devoted: "A healer. I have not slept as well in fifteen years as I did after you left the calm dust by my bed. I will not ask what was in it.",
  },
  fate: {
    hostile: "A diviner. Fate Dao is the only craft that lets a person say, afterwards, that they knew. The Law has no patience for it.",
    wary: "You read the cost before you pay it. I would prefer to be the one who tells you what it is.",
    neutral: "Fate Dao: you lose half the karma you would otherwise, because you see it coming. I have never trusted anyone who sees it coming.",
    warm: "You looked at me once and told me what I would say. I said something else. Neither of us was displeased.",
    devoted: "A diviner. You know what I am going to ask. I will ask it anyway, because I would like to hear you answer.",
  },
};
