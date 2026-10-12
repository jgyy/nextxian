import type { HeroField } from "@/engine/hero";
import type { Tier } from "@/engine/types";
import { beginningAsides } from "../origins/entries";
import { daoAsides, originAsides, talentAsides } from "./asides-path";

type Lines = Record<Tier, string>;

/**
 * What Elder Su says about the person in front of her, by part of the hero, then value, then her attitude. She works
 * through these between her replies (see `aside` in the engine), one every few decisions, never the same twice.
 * Each is short, in her dry and exact voice, and says something she could only say to this hero.
 */
export const heroAsides: Record<HeroField | "realm", Record<string, Lines>> = {
  origin: { ...originAsides, ...beginningAsides },
  talent: talentAsides,
  dao: daoAsides,
  status: {
    outcast: {
      hostile: "No register holds your name, so no register can be blamed for you. I find that I am the only one left to blame, and I resent it.",
      wary: "The registers struck you out, and the Law has a long habit of agreeing with its registers. I am trying to see whether the habit is wisdom.",
      neutral: "You were struck from the rolls. I have signed enough strikings to know that the pen is not always right and not always wrong.",
      warm: "Nobody owes you a hearing, and so you have earned every one you have had here. That is rarer than a banner and costs more.",
      devoted: "They struck your name from the rolls. I will write it in my own ledger, in the second one, where I keep the names I would not give back.",
    },
    commoner: {
      hostile: "A name on a village roll and nothing above it, and still you stand in my hall as though the floor were yours. It is not.",
      wary: "A commoner with this much to say is either gifted or paid. I have not yet decided which, and I dislike deciding in the dark.",
      neutral: "A village roll, a plain name, no banner. Most of the sect started from less and some of the Masters from exactly that.",
      warm: "You have no house to speak for you, so you speak for yourself. I find the arrangement more honest than most.",
      devoted: "A commoner, and I would give you my seal before I gave it to half the gentry on this mountain. Do not tell the gentry.",
    },
    gentry: {
      hostile: "Gentry. You come with a seal and a magistrate’s table behind you, and you think the Law will blink at it. The Law has never blinked.",
      wary: "Land and a seal. I have watched families of that kind buy the Law Hall a new roof and then ask for a verdict. I am watching which kind you are.",
      neutral: "Your papers name a family with land, and land holds opinions. I will hear yours, and I will try not to hear your father’s instead.",
      warm: "Your papers say you were raised to a seat at the magistrate’s table, and you have the sense to know a seat is not earned. That is half of wisdom.",
      devoted: "Gentry by birth, and you have given up the privileges of it one at a time since you reached my gate. I have counted every one.",
    },
    noble: {
      hostile: "Your papers name a noble house: a banner on the wall and an ancestor in every corner. You think I am afraid of the dead. I am not. I made some.",
      wary: "A noble name opens doors in the Concord. In my hall it only makes me count the exits. Be plain with me and I will unlearn the habit.",
      neutral: "Of a noble house, by your papers. The Concord will call you lord or lady and expect me to bow. I will nod, and you will have to be content with a nod.",
      warm: "Born to a banner, and you stand in my doorway like someone who has been taught it is not a shield. Whoever taught you was wise.",
      devoted: "A noble house, and you have not once leaned on it. I would trust your name if it were a beggar’s. That is the highest thing I can say of a name.",
    },
  },
  attire: {
    rags: {
      hostile: "Patched hemp and straw sandals. Poverty is not a crime in this hall, and it is not an argument either. Stop leaning on it.",
      wary: "You wear your mending like a statement. I am not certain whether it is pride or a costume, and I intend to find out which.",
      neutral: "Hemp, mended more often than it was washed. I have seen the Masters’ silks take less honest wear than that.",
      warm: "Your robe has been mended by someone patient, and I find I would like to know who. Do not tell me. Let me guess for a while.",
      devoted: "I would rather have a hemp robe that has been mended by honest hands than a hall of silk. I have said it out loud. Remember that I did.",
    },
    traveller: {
      hostile: "An oiled cloak that has seen too many roads and told none of them to me. Take it off before you lie, so I can at least see your hands.",
      wary: "A road-worn cloak, a bamboo hat, a pack that has seen rain. A traveller can hide anything, and you have a good place to hide it.",
      neutral: "Your cloak has the wear of the river provinces on it. I recognise the salt in the seams. You have come further than you said.",
      warm: "You travel light and you travel well. I envy the pack more than I envy the robes. A person with so little to carry has nothing to defend.",
      devoted: "You came up my mountain in a cloak the rain had already ruined. I think of it when I write the ledger, in the column where I keep what moved me.",
    },
    scholar: {
      hostile: "Ink on both cuffs, and I will wager the ink is the only honest thing about you. Copyists forge as easily as they read.",
      wary: "A copyist’s robe. You can read my ledgers, and I cannot decide whether that is a gift or a threat. Do not take a page without asking.",
      neutral: "A scholar’s stains. I keep a drawer of letters that no scholar has read the whole of. I may need you to be the first.",
      warm: "Ink to the cuffs. Someone taught you to love the page, and I would like to meet them, so that I could thank them or argue.",
      devoted: "You would not know it, but I read the way you hold a brush. A person who copies carefully is a person who can be trusted with a name.",
    },
    silk: {
      hostile: "Embroidered silk in my hall, in this rain. You mean me to see what you can afford. I see what you cannot hide.",
      wary: "Cloud-pattern silk. I count the cost of it and I count the cost of the story that goes with it. Neither sum is small.",
      neutral: "Fine silk. It will not survive the abyss path. I mention it in the way a person mentions a window that is about to be broken.",
      warm: "You wear silk as though someone told you it was armour. I will not tell you it is not. I will only say that I would take hemp.",
      devoted: "You wore silk up my stair and let the mud have it. I have rarely been given so clear a sign of what a person thinks a robe is worth.",
    },
    armour: {
      hostile: "Lacquered scales and a sword-belt in the Law Hall. We hang the armed here, not out of cruelty, but because it is faster.",
      wary: "You walk like someone who has been trained to use that belt. I will not ask you to remove it. I will only note where your hand rests.",
      neutral: "A scale jerkin, well kept. I have seen the Warden’s men in worse. Keep it on. The abyss path eats the careless first.",
      warm: "Armour is a kind of honesty. It says plainly what the wearer expects the world to do. I would rather that than a smile.",
      devoted: "You wear your iron like a person who has stopped needing it. I have not seen that in a soldier since the Sealing Night. Thank you for the memory.",
    },
  },
  looks: {
    plain: {
      hostile: "A face no one remembers. It is a useful face for a thief, and I have noted that you did not try to improve it.",
      wary: "Plain. You could stand in any crowd and vanish. I would like to know why that appeals to you.",
      neutral: "You have the sort of face that a crowd forgets. I find that restful. Most of my disciples want to be looked at.",
      warm: "Your face has no argument to make for itself. It makes me listen to the rest of you, which is, I suspect, the point.",
      devoted: "I will remember your face, though it is the kind that is meant to be forgotten. I have decided to count that as a victory over the design.",
    },
    striking: {
      hostile: "You are striking, and you know it, and you use it as a lever. The Law is not moved by a pretty argument. It is only more tired.",
      wary: "Striking faces open doors in the Concord. They also close them when the owner forgets that the door can see past the face.",
      neutral: "People look twice at you. I have been trying to look once. It is a discipline I recommend, and one I have not mastered.",
      warm: "You carry a striking face as though it were an inconvenience. I like that. Most people who are looked at stop looking.",
      devoted: "They look at you twice and think they have seen all there is. I have seen the rest, and I would not trade it for the face.",
    },
    scarred: {
      hostile: "That burn runs from the ear to the collar, and you stand so that I can see it. I do not pity a scar that has been made into a wedge.",
      wary: "An old burn. I will not ask how. I will wait for you to decide how much of that story I am owed.",
      neutral: "Your scar is old and has healed clean. Someone did the work well. I notice that you do not hide it, and I will not look away.",
      warm: "That scar has made you careful with other people’s pain. I have seen it in the way you do not flinch from mine.",
      devoted: "I looked at the burn the first time because it was there. I look at it now because it is the part of you I trust most. It never lies.",
    },
    frail: {
      hostile: "Frail, and winded after one stair. Do not expect me to confuse that with innocence. The weak have lied to this hall for generations.",
      wary: "You look as though the mountain could take you. I am watching whether it is a trick of the light or a trick of the trade.",
      neutral: "Thin and quick to tire. The abyss path is long, and I will not pretend I have not noticed. Rest when you must, and do not hide it.",
      warm: "You are frail, and you walked up here anyway. I have known strong disciples who could not have done as much on a clear day.",
      devoted: "Frail is the wrong word for someone who climbed my mountain in the rain and sat down only when I told them. I am retiring it.",
    },
  },
  background: {
    orphan: {
      hostile: "A port orphan learns who lies and learns to do it better. I have read the habit in every child the Law Hall ever lost to the river stairs.",
      wary: "The river stairs raise sharp children. I would like to know which of your edges you learned there, and which you have learned since.",
      neutral: "You grew up on the river stairs, begging and running errands. I grew up in a hall with a wall around it. We have both been taught who can be trusted.",
      warm: "No one taught you to be honest, so you chose it. I have met so few who could say that and mean it.",
      devoted: "Port orphan. I have thought of children on river stairs every night for fifteen years, and I will not say why. Forgive an old woman’s staring.",
    },
    scholar: {
      hostile: "A copyist’s apprentice reads what is put in front of them and forgets what is not. I would prefer you remembered more than you were told.",
      wary: "You learned to read before you learned to be afraid of what you read. In this hall the order is reversed for good reason.",
      neutral: "A copyist’s apprentice. You will see errors in my ledgers. I would be grateful if you told me before you told the Masters.",
      warm: "A scholar’s patience is a rare thing in a sect that prizes the sword. I am glad to have someone who will read slowly.",
      devoted: "You read the way I used to, before I learned what was written. I would keep you from the lesson if I could. I know I cannot.",
    },
    soldier: {
      hostile: "A deserter. You left a post once, and you will leave this one. I am saying it so you know I am not surprised.",
      wary: "You carried a spear for the levy until you stopped. I would like to know what made you stop, and whether it can happen twice.",
      neutral: "A levy deserter. The Warden of the Ash Bridge is a soldier’s son. He will know you for what you were within a minute. Be honest first.",
      warm: "You stopped carrying a spear because you were asked to point it at the wrong thing. I know exactly how much that cost. Thank you for paying it.",
      devoted: "Deserters make good wardens. They know what the order is worth, and they know what it costs to disobey it. I would give you a post.",
    },
    merchant: {
      hostile: "A trader’s runner counts everything, including the other person’s weakness. Put down the abacus in your head before you speak.",
      wary: "You count other people’s money. I want to know whether you have counted me, and what sum you reached.",
      neutral: "A runner for a trader. You will want a price on everything I tell you. I will not set one. It is not that sort of hall.",
      warm: "You counted other people’s money and pretended it did not matter. I think it mattered a great deal, and that is why you are kind about it.",
      devoted: "I have never met a trader who gave away what you have given. I do not know your price, and I have stopped looking for it.",
    },
    farmer: {
      hostile: "A paddy hand does not lie to the soil, because the soil does not forgive it. I wish you had brought the habit up the mountain.",
      wary: "Your back remembers the seasons. I wonder whether your tongue does, or whether it has been trained to a different calendar.",
      neutral: "A paddy hand. The sect eats what the villages grow, and it rarely says thank you. I am saying it. Do not make a speech of it.",
      warm: "You have worked the land and I can see it in how you listen: slowly, to the whole of the thing, and without hurry. It is a great gift.",
      devoted: "The best judges I have known came from paddies. They knew that patience is a form of justice. I would trust you with the scales.",
    },
    healer: {
      hostile: "An herbalist’s helper knows exactly how much of a thing will kill. I would like to know that you know it, and that you have not used it.",
      wary: "You have sat up with the dying. It teaches calm, and it teaches secrets. I will ask which you came away with.",
      neutral: "A healer’s helper. The calm dust in this sect was made by hands like yours. I will not ask how well you know the recipe, today.",
      warm: "You have not looked away from anyone’s pain since you came in. I have noticed. It is a harder discipline than the sword.",
      devoted: "Healers are the only people I have never needed to question. They have already seen the worst of what a person will say at the end.",
    },
  },
  gender: {
    woman: {
      hostile: "A woman in this hall is judged twice, once for the deed and once for the audacity. I have paid both and I will not discount yours.",
      wary: "I was young and a woman at this table once. I learned what it costs to be believed. Do not ask me to give you the discount.",
      neutral: "I will say it once: I know what it is to be a woman at the Law’s table. I will be exact with you, and I will expect exactness back.",
      warm: "It is no small thing to be a woman who is heard in a hall like this. You do it better than I did at your age.",
      devoted: "I did not expect, at my age, to find another woman who would stand where I stood. I find I would like to be wrong about nothing in you.",
    },
    man: {
      hostile: "I have buried men who thought their voice was an argument. It is a short list, but I do not intend to lengthen it.",
      wary: "A man in this hall is believed more quickly than a woman, and I distrust the speed. Show me you have earned it.",
      neutral: "The Masters will hear you before they hear me. I wish it were not so. I will be careful not to hide behind it.",
      warm: "You hold your voice down when you speak, as though you knew how far it carries. It is a rare courtesy in a young man, and I note it.",
      devoted: "I have taught many men to be judges. You are the first who made me feel the lesson ran both ways.",
    },
    unspoken: {
      hostile: "You give me no word to call you but your name, and I find myself unwilling to supply one. Be clear about at least the rest.",
      wary: "You keep your answer to yourself. I will respect it. I will not respect the habit of keeping every other answer to yourself as well.",
      neutral: "I will use your name and nothing else. The Law has never needed to know more than a person is willing to be called.",
      warm: "You told me nothing, and I find I have not missed it. I know you by what you do, and that has been enough.",
      devoted: "You never told me what to call you but your name, and I was never once tempted to ask. That is the highest courtesy I know.",
    },
  },
  realm: {
    mortal: {
      hostile: "You have no qi to speak of, and you speak as though you had. A mortal who talks like a cultivator has either a very good teacher or a very short life.",
      wary: "No qi gathered. Whatever is behind your confidence is not in your dantian, and I would like to know where it is, before the mist does.",
      neutral: "A mortal, on this mountain, in this season. I do not say it to shame you. I say it because I will have to count it every time I send you anywhere.",
      warm: "You have gathered nothing, and you have still come all this way. I have known cultivators with a core who would not have dared.",
      devoted: "A mortal, and I trust you with the jade. Do you understand what that costs me to say? It is the whole of the Law Hall’s opinion of mortals, set down in one breath.",
    },
    novice: {
      hostile: "A thread of qi, a month of practice, and already you speak as though the Law owed you. It owes you nothing. It owes a great deal to the people you step on climbing.",
      wary: "You have a foundation, or the start of one. It is the most dangerous realm to be proud in. The mist hunts those who have just learned to be hunted.",
      neutral: "You gather qi now. I can feel it in the room, a small warm thing. Do not mistake it for a verdict. The Law has not yet decided what to make of it.",
      warm: "Your qi is steadier than it was. I notice. A teacher who sees a student rise is permitted a small private pride, and I have claimed mine.",
      devoted: "You have a foundation, and you are still kind. I have watched cultivators lose the one in gaining the other, and I did not think you would be the exception. I am glad to be wrong.",
    },
    adept: {
      hostile: "A core, or a soul, and the manners of a bandit. Power does not make a person worth listening to. It only makes it more costly when they do not listen back.",
      wary: "You are strong now. The sect’s wardens lower their eyes when you pass, and I do not know if it is respect or fear. I would like to know before I decide which to trade on.",
      neutral: "You are a cultivator of rank. Doors will open to you that stay shut to others, and some of them will lead somewhere you will not want to have gone. Go slowly.",
      warm: "Your qi has the weight of a thing that has chosen to be gentle. I did not expect that restraint, at your age, in your realm, and I will not forget it.",
      devoted: "You are among the strongest on the mountain, and you have never once used it to make me feel small. I will say it plainly: I would follow you. I did not think I would live to say it.",
    },
    sage: {
      hostile: "You are beyond anything the Law Hall was built to hold, and you know it. I will still ask you to answer for what you have done. Someone should, and I have the habit.",
      wary: "You have severed, or you are about to. A person who has cut their cords does not owe anyone anything. I would like to know what you still owe me, if only to know what to ask.",
      neutral: "You are a sage, and the mountain has begun to rearrange itself around you. The wardens, the bells, even the mist. I will do my best to remain unrearranged.",
      warm: "I am an elder of a small sect, and you are a thing that sects write songs about. I find that I would rather you came to my hall for tea than for judgment.",
      devoted: "I have taught you nothing in a long time. You have taught me to stand when the whole sky bends. I do not have the words for what that is, and I have stopped trying to find them.",
    },
  },
};
