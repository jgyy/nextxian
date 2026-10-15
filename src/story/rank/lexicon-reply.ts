import type { Gender } from "@/engine/hero";
import type { RankWay } from "@/engine/rank";
import type { Tier } from "@/engine/types";

/**
 * Elder Su’s answer to what a hero did behind the door of rank, by their gender, by what they did, and by her trust in them. Every line carries the road’s own
 * place, because no two scenarios may share a line. Slots: place, kname.
 */
export const DOOR_REPLY: Record<Gender, Record<RankWay, Record<Tier, string>>> = {
  woman: {
    yield: {
      hostile: "You took the place {place} keeps for a woman of your rung, and went quietly. I would have forgiven the noise more easily. A rung kept that low is wasted on a hall that does not notice.",
      wary: "You took the woman’s place at {place} and said nothing of your rung. It may have been wisdom. It may be habit. I have worn both, and could not always tell them apart.",
      neutral: "You kept to the woman’s place at {place}. It is the commonest thing a woman of any rung does on this mountain, and the hardest to be thanked for. I will thank you for it.",
      warm: "You took the woman’s place at {place} with your eyes open, and counted what it paid. That is not yielding. That is bookkeeping, and I have done a great deal of it myself.",
      devoted: "You sat where {place} put a woman and let your rung say nothing. I know what that costs. I did it for ten years in a hall like it, and I have not forgiven myself, and you need not either.",
    },
    claim: {
      hostile: "You named your rung at {place} and asked to be read by it and not as a woman. I admire the nerve, and distrust the haste. A rung named too loudly is a rung that will be tested.",
      wary: "You set your rung on the table at {place} and asked not to be read as a woman. The room heard the first half. I should like to know whether it heard the second.",
      neutral: "You claimed the rung at {place} before the sex, in front of everyone. It is the oldest argument on this mountain and still unwon. You made it at the right desk. That is all I can say.",
      warm: "You said your rung aloud at {place} and asked to be met by it, and it was. I have waited twenty years to see a woman do that and be answered. I am not sure I can say what I feel.",
      devoted: "You named your rung at {place} and the room, for a moment, forgot it was ruled in two. I saw it in {kname}’s face afterwards. Keep doing it. I will see that the book says what you said.",
    },
    veil: {
      hostile: "You wore the woman the room wanted at {place} and kept your rung in your sleeve. It worked, and that is the worst of it. A mask that works is a mask you are asked to wear again.",
      wary: "You let {place} take you for what it expected of a woman and hid the rung. I have done it. It is a very good coat and a very heavy one, and the weight is not in the cloth.",
      neutral: "You wore the face {place} expected of a woman, and your rung stayed unread. I will not call it a lie. I will call it a loan, and ask you to remember who you will have to repay.",
      warm: "You put on the woman’s face at {place} and walked through a door your rung would have bought you more openly. I understand why. I only ask that you sometimes take it off.",
      devoted: "You wore {place}’s woman, and kept your rung. I did this in my first year as Registrar, and thought myself clever. I was only tired. Come and tell me when you are tired.",
    },
    lift: {
      hostile: "You put your rung behind the name of a woman {place} had overlooked. It was generous, and it was loud, and a rung spent loudly is a rung you do not get back. Count what you have left.",
      wary: "You lent your rank to a woman whom {place} had passed over. It is the kindest use of a rung I know, and the dearest. I would have liked to hear you weigh it first.",
      neutral: "You stood your rung beside a woman {place} had left out, and it held. A rung is a ladder. You have just shown that it can also be a hand, and the hall has noticed.",
      warm: "You put your rank behind a woman {place} had passed over, and {kname} could not look at you for a moment. That is the highest mark a keeper gives. I give it too.",
      devoted: "You spent your rung on a woman nobody at {place} was looking at. I did the same, once, for one, and it cost me a seat. I would do it again, and so, I think, would you.",
    },
  },
  man: {
    yield: {
      hostile: "You took the place {place} keeps for a man of your rung, and did not ask what it cost the others. I have watched many men do it. It is not a crime. It is a habit, which is worse.",
      wary: "You took the man’s place at {place} and said nothing of your rung. A seat given is a seat taken from someone, and the someone is not in the room. I would like you to look for them.",
      neutral: "You kept to the man’s place at {place}. It is what a man of any rung does on this mountain, and it is rarely seen, because it is the shape of the room. I saw it. Notice that you were seen.",
      warm: "You took the man’s place at {place} and counted what it paid. That is not simply sitting. It is an audit, and few men do it. You may find the sum uncomfortable. It is accurate.",
      devoted: "You sat where {place} put a man and let your rung say nothing. A man who can see the seat he is in is rare, and rarer is one who tells me he can. Keep telling me.",
    },
    claim: {
      hostile: "You named your rung at {place} and asked to be read by it and not as a man. It cost you nothing, and you did it loudly. A claim that costs nothing is one the room can afford to grant.",
      wary: "You set your rung on the table at {place} and asked not to be read as a man. The room heard the rung, and was relieved to be spared the rest. I wonder whether you meant to spare it.",
      neutral: "You claimed the rung at {place} before the sex, in front of everyone. A man can say that and be thought principled. A woman who says it is thought ambitious. Remember who is paying for your principle.",
      warm: "You said your rung aloud at {place} and asked to be met by it, and then, I am told, you asked the room to do the same for the woman beside you. That is the part I will remember.",
      devoted: "You named your rung at {place} and asked to be read by it and not as a man, and then you stayed to see who else was being read. Not many do the second. It is the whole of the difference.",
    },
    veil: {
      hostile: "You wore the man the room expected at {place} and kept your rung in your sleeve. It was easy for you, and you should take care not to learn that it was easy. Ease is how a mask grows a face.",
      wary: "You let {place} take you for what it expected of a man and hid the rung. It is a very comfortable coat. Notice who made it, and who has been standing outside in the cold while you wore it.",
      neutral: "You wore the face {place} expected of a man, and your rung stayed unread. I will not call it a lie. I will call it a loan, and say that most of the interest is paid by the room.",
      warm: "You put on the man’s face at {place} and walked through a door your rung would have opened anyway. I think you wanted to know what the man’s face was worth. I hope you wrote the answer down.",
      devoted: "You wore {place}’s man, and kept your rung. It is the one disguise I cannot wear, and I have often wondered what it is like. You will tell me, one night, when the fire is low.",
    },
    lift: {
      hostile: "You put your rung behind someone whom {place} had overlooked. It was generous, and it was loud, and you will want to be thanked. I would ask you to do it again without being thanked, and see.",
      wary: "You lent your rank to someone whom {place} had passed over. It is the best use of a man’s rung I know, and the rarest. I would like to believe it was not for the sake of being seen.",
      neutral: "You stood your rung beside someone {place} had left out, and it held. A rung is a ladder. You have just shown it can also be a hand, and I suspect you surprised yourself.",
      warm: "You put your rank behind someone whom {place} had passed over, and {kname} could not look at you for a moment. That is the highest mark a keeper gives. I give it too, and I do not give it often.",
      devoted: "You spent your rung on someone nobody at {place} was looking at. Few men I have known would spend a rung on anything but the next. I did not expect it of anyone, and I am glad it was you.",
    },
  },
  unspoken: {
    yield: {
      hostile: "You let {place} sort you by your rung and say nothing else. It is a way to be left alone, and I have no quarrel with it. But a rung is a small house, and you will find the walls close in.",
      wary: "You took the seat {place} found easiest, and kept your counsel. I do not say it was wrong. I say that a place which cannot name you will keep you at the door, and call it a courtesy.",
      neutral: "You took the place {place} found for you, and learned what it gave. The place has no column for what you are, and so it gave you the one it could. It was less than it should have been.",
      warm: "You sat where {place} could put you, and read the room from there. It is a way of seeing that the sect has no word for, and it is the best I know. Keep the seat. Read the room.",
      devoted: "You took the seat at {place} that was kept for no one, and made it yours. I have found such a seat a hundred times in this sect, and every time I was the only one who sat in it. Thank you for sitting.",
    },
    claim: {
      hostile: "You named your rung at {place} and declined to be sorted by anything else. It was clean, and cold, and the room did not know what to do with a hero who asked it only one question. It will not forget.",
      wary: "You set your rung on the table at {place} and would not answer the other question. The room heard the rung and did not know what to make of the silence. I wonder whether you meant it to be heard.",
      neutral: "You claimed the rung at {place} and let the sex stay unspoken. It is the one argument the sect has no ready answer to, because it is the one it has never had to hear. I enjoyed watching it try.",
      warm: "You said your rung aloud at {place} and asked to be met by it alone, and for a moment the room managed it. I watched it happen. It is a thing the sect can do, and has not yet decided to.",
      devoted: "You named your rung at {place} and asked for nothing else, and {kname} gave it. I have waited a long time to see the sect read a person by what they have climbed, and not by what they were given. Thank you.",
    },
    veil: {
      hostile: "You let {place} take you for whatever it found easiest, and kept your rung back. It is a way to pass, and I have no quarrel with it. But a face worn for others is a face you will forget the shape of.",
      wary: "You wore the face {place} offered and kept the rung in your sleeve. I do not say it was wrong. I say that the sect is very good at keeping people in the roles they pass in.",
      neutral: "You answered to the name {place} chose for you, and the rest stayed unsaid. It was a loan, I think, and one that the room will not offer twice. Count what it bought.",
      warm: "You put on the face {place} was looking for, and walked through a door that was not built for you. I know that trick. It is the only one the sect has not learned to close.",
      devoted: "You wore {place}’s face, and kept yourself behind it. It is how I lived my first ten years here, and I called it tact. You may call it what you like, and come and tell me when you stop.",
    },
    lift: {
      hostile: "You put your rung behind someone whom {place} has no word for. It was generous and it was loud, and the room has noticed you have no word either. A rung spent loudly is a rung that will be counted.",
      wary: "You lent your rank to someone {place} has erased. It is the kindest use of a rung I know, and the dearest. I would have liked to hear you weigh it, and I suspect that you did.",
      neutral: "You stood your rung beside someone {place} had left out, and it held. A rung is a ladder. You have just shown it can also be a hand, and you did it with no side to stand on, which is harder.",
      warm: "You put your rank behind someone whom {place} had no name for, and {kname} could not look at you for a moment. That is the highest mark a keeper gives. I give it too, and I give it gladly.",
      devoted: "You spent your rung on someone nobody at {place} would name. You, who have no column yourself, know what that costs. I think you are the best of us. Do not tell the Law Hall I said it.",
    },
  },
};
