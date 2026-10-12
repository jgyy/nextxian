import type { ChoiceTone, Tier } from "@/engine/types";
import { DEEDS, type Deed, type Repute } from "@/engine/witness";

export { DEEDS, type Deed };

/**
 * Wording for the Witness Roads. Every table has several variants, and a road picks by its index and the stage, so the forty roads
 * and the scenes of a walk do not say the same thing twice. Slots: kname, place, focus, ledger (the thing the keeper writes in,
 * with its article: “the bench-book”), ware, holding.
 */

/** The four things a hero can do about what a witness has seen are `Deed`s, in the engine. Each is a choice on every Witness Road, and each makes the Elder answer. */

/** The choice labels. Eight variants each, and a road takes the one its index points at. */
export const DEED_LABEL: Record<Deed, string[]> = {
  vouch: [
    "Give Elder Su Wanru’s name to {kname} as your surety, and ask that {ledger} record who sent you.",
    "Tell {kname} you travel under Elder Su’s seal, and let {ledger} say so in her name.",
    "Name the Law Hall as your guarantor, and offer {kname} the chance to write it in {ledger}.",
    "Say that Elder Su will answer for you, and watch {kname} decide whether {ledger} can hold the sentence.",
    "Lay Elder Su’s name on the counter as a pledge, and ask {kname} to enter it in {ledger}.",
    "Offer {kname} the Elder’s word in place of your own, and let {ledger} carry it away.",
    "Put Elder Su’s name forward as the one who will vouch for you, and ask {kname} to set it down.",
    "Tell {kname} that the Elder knows where you are, and that {ledger} may say so to anyone who asks.",
  ],
  confess: [
    "Tell {kname} the worst thing you have done on this road, and let {ledger} keep it as you say it.",
    "Admit to {kname} what you would not say to the Elder, and ask that {ledger} be left open while you speak.",
    "Confess the lie that weighs most, and give {kname} leave to enter it in {ledger}.",
    "Say plainly to {kname} what you took, or broke, or left behind, and let {ledger} take it down.",
    "Sit down opposite {kname} and give an honest account of yourself for {ledger}, the bad pages first.",
    "Let {kname} hear the thing you have told nobody, and ask {ledger} to hold it without a name beside it.",
    "Tell {kname} that you have done wrong on the way here, and ask what {ledger} does with such things.",
    "Give {kname} your confession whole, and ask that {ledger} record both the deed and that you told it.",
  ],
  conceal: [
    "Press a few stones into {kname}’s hand and ask that {ledger} leave your name out.",
    "Ask {kname}, quietly, to forget your face when the Law Hall’s clerks come asking, and pay for the forgetting.",
    "Slide a small coin across to {kname} and ask that the page of {ledger} with your name on it go missing.",
    "Offer {kname} a fee to have {ledger} say nothing of you, and keep your own voice very low.",
    "Pay {kname} to blur the entry in {ledger}, and call it a favour between travellers.",
    "Ask {kname} to say you were never here, and let the stones on the counter make the argument.",
    "Buy {kname}’s silence for the afternoon, and ask that {ledger} be shut until you are gone.",
    "Tell {kname} that a page of {ledger} is worth more to you than to the sect, and name a price.",
  ],
  ask: [
    "Ask {kname} to read you what {ledger} says of you, line by line.",
    "Ask {kname} what the road has told {ledger} about who you are, and listen without interrupting.",
    "Request a sight of your own entry in {ledger}, and ask {kname} to read the hard parts aloud.",
    "Ask {kname} what the people who came before said of you, and what {ledger} made of it.",
    "Turn the question round and ask {kname} what {ledger} would write if you left today.",
    "Ask {kname} whether the sect’s gossip has reached {ledger}, and what it called you.",
    "Ask {kname} to tell you, without kindness, what {ledger} makes of the way you walk.",
    "Ask what {kname} has seen of you since you came, and let {ledger} be the witness.",
  ],
};

/** What the keeper makes of the hero’s karma: three bands, four variants each. */
export const REPUTE: Record<Repute, string[]> = {
  dark: [
    "{Kname} has heard what is said of you on the road, and keeps {ledger} between you and the door. It is a courtesy and a precaution, and {kname} means both.",
    "Word came ahead of you, as it does. {Kname} looks at you as one looks at a well one has been told is poisoned, with curiosity and without leaning over.",
    "Something in the way {kname} closes {ledger} tells you the road has been talking. Nothing unkind is said. Nothing unkind needs to be.",
    "{Kname} greets you pleasantly and moves a candle out of your reach. The candle is a small thing, and the whole of what the road thinks of you.",
  ],
  grey: [
    "{Kname} looks you over without hurry, as one reads a page whose first lines say nothing yet. Whatever the road has written about you, it is not much.",
    "No word has come ahead of you, or none that {kname} believed. You are, for the moment, whoever you say you are, and {ledger} has a clean line waiting.",
    "{Kname} opens {ledger} to a fresh page and does not write on it. The road has not made up its mind about you, and neither has {kname}.",
    "You are a stranger at {place}, and {kname} treats you as one: civilly, and with the pen held just above the paper.",
  ],
  kind: [
    "A kindness of yours has travelled ahead of you, and {kname} meets you with it already half-forgiven. {Ledger} has a good line waiting, if you do not spoil it.",
    "{Kname} has heard you spared someone you could have broken. The telling has grown, as tellings do, but the root of it is true.",
    "Somebody on the road spoke well of you here, and {kname} writes nothing down and smiles at the page. It is how {kname} says welcome.",
    "The road has been kind about you. {Kname} makes a small mark in {ledger}, and pushes the lamp a little nearer, so you may be seen.",
  ],
};

/** What word of the Elder has reached the keeper. First band that holds wins; four variants each. */
export type ElderWord = "afraid" | "suspicious" | "cold" | "warm" | "honoured";
export const ELDER_WORD: Record<ElderWord, string[]> = {
  afraid: [
    "{Kname} says a runner passed through, and that the Elder at the Azure Cloud Sect is said to be afraid of something she travels with. {Kname} does not say what, and does not look at you.",
    "Rumour has it that Elder Su Wanru sleeps badly. {Kname} repeats it as a thing about the weather, and keeps an eye on the door.",
    "There is a story at {place} that the Elder jumps when you speak. {Kname} thinks it a poor story and tells it anyway.",
    "{Kname} has been told the Elder is frightened. Nobody has said of what, and {kname} has the grace not to guess aloud.",
  ],
  suspicious: [
    "{Kname} says that the Law Hall’s runners have been asking after you, and have asked in the voice that means a ledger is open. {Kname} told them what was true, which was little.",
    "A clerk came by last month with a list of questions, all about a hero of your description. {Kname} answered all of them, and kept the list.",
    "{Kname} lets it be known that Elder Su is said to doubt you. It is offered as a courtesy, so that you will not be surprised.",
    "Word at {place} is that the Elder is watching you more closely than she lets you see. {Kname} says so quietly, and passes the lamp.",
  ],
  cold: [
    "{Kname} says the Elder does not speak of you, and that when she does not speak of someone it is a kind of speech. {Kname} says it gently.",
    "The word from the sect is that Elder Su’s regard for you has cooled. {Kname} offers it without comment, as one hands over a cold cup.",
    "There is a silence about you in the Law Hall’s dispatches, {kname} says, and silence in a dispatch is a verdict.",
    "A runner mentioned that the Elder has stopped saying your name. {Kname} thought you would rather hear it here than at the gate.",
  ],
  warm: [
    "{Kname} says the Elder speaks of you more kindly than the Law Hall usually allows. Some of the runners were surprised, and one was annoyed.",
    "Elder Su’s word reached {place} before you did, {kname} says, and it was a better word than most travellers bring.",
    "A runner told {kname} that the Elder trusts you. {Kname} had to be told it twice, since nobody trusts the Law Hall’s runners to be accurate about her.",
    "{Kname} has it from the sect that the Elder has your name in her good book. {Ledger} has been more than usually polite since.",
  ],
  honoured: [
    "{Kname} says the whole Law Hall knows how highly Elder Su thinks of you, and that the runners now carry your name like a seal.",
    "The Elder has spoken of you as one speaks of a colleague, {kname} says, and runners notice such things before they notice weather.",
    "Word came down the road that Elder Su holds your judgment above her own clerks’. {Kname} repeats it with a straight face, and means it.",
    "{Kname} says the sect has begun to quote you. The Elder does not know it, and would be appalled, and is, privately, a little pleased.",
  ],
};

/** The keeper names the hero’s manner when three of the last eight decisions share a tone. Four variants each. */
export const MANNER_READ: Record<ChoiceTone, string[]> = {
  truth: [
    "{Kname} says you have a habit of saying things straight, and that {ledger} has noticed. It is rare enough on the road to be written down.",
    "You speak plainly, and {kname} remarks on it. Plain speech makes a short entry in {ledger} and a long memory.",
    "{Kname} notes that the road says you tell the truth when it costs you. {Kname} says it as a warning, since the road also remembers.",
    "Honest, {kname} says, is what {ledger} has you down as. It is a thing the road forgives slowly and forgets never.",
  ],
  mercy: [
    "{Kname} says the road calls you soft. {Ledger} has a different word for it, but {kname} will not say which, because it flatters.",
    "You have spared people, and they have talked. {Kname} says mercy is the cheapest thing to carry and the dearest to be known for.",
    "{Kname} has heard you are kind to the wrong sort of person. By that {kname} means the sort who remember it.",
    "A run of mercies stands in {ledger} beside your name. {Kname} touches the page lightly, as one touches a bruise.",
  ],
  inquiry: [
    "{Kname} says you are known for asking questions. The road dislikes it, and {ledger} cannot resist it, and so you are well written.",
    "You have been asking, and the road has heard you. {Kname} says a person who asks a great deal is either wise or being looked for.",
    "{Kname} remarks that you read everything, even the walls. {Ledger} has a line for that, and it is not unkind.",
    "Curious, the road says of you. {Kname} adds that curious is what they write before they write dangerous.",
  ],
  deceit: [
    "{Kname} says the road has caught you out more than once, and that {ledger} has a column for it. It is the longest column on your page.",
    "A run of lies stands against your name, and {kname} reads you the dates, kindly, as a physician reads a pulse.",
    "{Kname} says you have a way of telling people what they want to hear. {Ledger} has a word for that, and it is a sort of respect.",
    "The road remembers your small deceptions better than your large honesties. {Kname} says this is only how roads are built.",
  ],
  force: [
    "{Kname} says you have a reputation for leaning on doors, and that {ledger} keeps a list of the ones that gave way. It is longer than you would like.",
    "You have been hard on the road, and the road has noticed. {Kname} says the force you used is written large, and the reason for it small.",
    "{Kname} says the people you have pushed against do not talk about it, which is how {kname} knows they do.",
    "A run of hard choices stands in {ledger} under your name. {Kname} reads it without heat, as a bailiff reads a charge.",
  ],
  quiet: [
    "{Kname} says you are a person who waits, and that {ledger} has you down as patient. The road does not know what to make of patience, and writes it in pencil.",
    "You have been quiet on the way, and {kname} says quiet people are the most carefully written about. Nobody wants to be caught mis-spelling them.",
    "{Kname} remarks that you move through places without leaving much in {ledger}. It is a skill, and {kname} sounds half-envious.",
    "A hush follows you, the road says. {Kname} counts it a virtue in a traveller and a danger in a witness.",
  ],
};

/** How the keeper speaks of the number of Witness Roads the hero has already walked. Four variants per band. */
export type Count = "some" | "many" | "most";
export const COUNT_READ: Record<Count, string[]> = {
  some: [
    "You are not new to this kind of door, {kname} says. Other keepers have written about you, and {ledger} has heard.",
    "Word travels between keepers faster than between sects. {Kname} knows you have been seen at other benches, and was curious to see you in person.",
    "{Kname} says the keepers of the road talk to one another, and that your name has already crossed two or three desks.",
    "You have sat at a keeper’s table before. {Kname} can tell by how you pull the lamp, and does not mind.",
  ],
  many: [
    "{Kname} says there are keepers who have never heard of a traveller with as many pages as you have. {Ledger} will be a short chapter in a long book.",
    "Half the keepers on the road have your name by now. {Kname} says it is not fame, exactly. It is the other thing, the one that keeps accounts.",
    "You have been written down more often than the sect’s own wardens, {kname} says. It is a strange honour, and a stranger burden.",
    "{Kname} counts on a finger the keepers who have given you a page, and runs out of fingers soon after that. It is a long road, and it has been taking notes.",
  ],
  most: [
    "There cannot be many keepers left who have not written you down, {kname} says. {Ledger} is only the latest, and {kname} wishes to be a fair one.",
    "{Kname} has read the other keepers’ notes. You are the most thoroughly witnessed traveller on the road, and {kname} says it with something like pity.",
    "Almost everyone on the road has kept a page on you now. {Kname} says that is either a kind of fame or a kind of trial, and the difference is in how you answer.",
    "{Kname} says your name is in more ledgers than your own. Whatever you do next will be set down thirty times over, and compared.",
  ],
};

/** What the keeper reads aloud from the entry, once the hero has asked. By dominant tone of the last eight decisions, then a blank. */
export const LEDGER_READ: Record<ChoiceTone | "blank", string[]> = {
  truth: [
    "“Plain-spoken,” {kname} reads. “Answers what is asked. Unwise to leave alone with a secret, for it will not keep.”",
    "“Says what it is,” {kname} reads, “and then waits to be punished for it.” Your entry is brief, and the brevity is a compliment.",
    "“Honest to a fault,” reads {kname}, in a tone that does not decide which fault.",
  ],
  mercy: [
    "“Gentle,” {kname} reads. “Gives where it cannot afford. Those who have been given to remember it, and some of them are not grateful.”",
    "“Spares,” reads {kname}. “It is written three times, in three hands, each of them a little embarrassed.”",
    "“Soft in the right places and nowhere else,” {kname} reads. The entry ends with a smudge, as of a thumb.",
  ],
  inquiry: [
    "“Asks,” {kname} reads. “Reads the margins. Do not leave a sealed thing in the same room.”",
    "“Curious past the point of comfort,” reads {kname}. “Useful, in the right company. Wrong company noted.”",
    "{Kname} reads a long entry in a short voice: every question you have asked on the road, in order, with the answers you were given beside them.",
  ],
  deceit: [
    "“Careful with the truth,” {kname} reads. “Spends it like coin and keeps the change.” Nobody has asked you to deny it.",
    "“Plausible,” reads {kname}. “Rehearsed. Likeable in the first hour. Check the sums after.”",
    "{Kname} reads out your small lies in their order, without comment, as a sexton reads the names of the dead.",
  ],
  force: [
    "“Pushes,” {kname} reads. “Does not stop when the door gives. There is a column for what was behind the door.”",
    "“Hard hands, good aim,” reads {kname}. “Would be better known for the second.”",
    "{Kname} reads a short entry in a flat voice: a list of the doors, the walls, the people, and what each gave way to.",
  ],
  quiet: [
    "“Patient,” {kname} reads. “Waits for the thing to finish before moving. Has not yet been tested by a thing that does not.”",
    "“Says little, notices much,” reads {kname}. It is an old formula, and you are the first it has fitted in years.",
    "{Kname} reads the shortest entry in {ledger}: your name, a date, and the single word “present”.",
  ],
  blank: [
    "{Kname} turns the page and finds it mostly empty. “Not enough to say yet,” {kname} says. “That is not a verdict. It is a space.”",
    "“Nothing,” reads {kname}, “that I would put my name to.” It is both a courtesy and a challenge.",
    "{Kname} reads the line aloud: your name, and nothing else. “You have not given the road enough to write,” {kname} adds. “That can be changed.”",
  ],
};

/** The way back, by what the hero did about the witness. Four variants each. */
export const RETURN_DEED: Record<Deed, string[]> = {
  vouch: [
    "{Kname} has written the Elder’s name in {ledger}, in full, with the date. It will be read by the next keeper to open the page.",
    "Elder Su’s name now stands beside yours in {ledger}. {Kname} blotted it twice, as one does with a thing one expects to be read.",
    "{Kname} copies out the Elder’s name as you leave, in a hand slower than the rest. A name used is a name owed.",
    "The page in {ledger} carries the Law Hall’s mark beside your own. {Kname} says the next traveller will find it there.",
  ],
  confess: [
    "{Kname} closes {ledger} gently after what you said. It will not be shown to anyone, {kname} says, and then adds that it will be remembered by one.",
    "What you told {kname} stays in {ledger}, in your own words. It weighs nothing, and the room is lighter for it.",
    "{Kname} does not forgive you, and does not pretend to. The page is simply written, and the ink is drying, and that is all a confession is.",
    "You have given {kname} the true account, and {kname} has set it beside the others. Yours is the only one that was offered.",
  ],
  conceal: [
    "The page in {ledger} is gone, or smudged beyond reading. {Kname} does not meet your eye, and the stones are not on the counter.",
    "{Kname} has closed {ledger} on your name. It is a small silence, and it has a price, and you have paid it.",
    "Your entry has been turned face down. {Kname} says it is a courtesy, and in the same breath says it is a risk.",
    "{Kname} puts the coin away without looking at it. The page will say what the page will say, but it will say it later.",
  ],
  ask: [
    "{Kname} has read you your own page. It was shorter than you feared and truer than you hoped, and {kname} did not soften either.",
    "You leave knowing what {ledger} makes of you, which is more than most people know about themselves.",
    "{Kname} has shown you the line, and you have seen it. Whatever you do now, you do it knowing how it will be written.",
    "The reading is over. {Kname} says a person who asks to be read is already half-rewriting the page.",
  ],
};

/** The Elder’s report on a Witness Road: one memory line for each deed, by variant. */
export const REPORT_DEED: Record<Deed, string[]> = {
  vouch: [
    "You gave my name at {place}. I have been waiting for the bill, and I am told {kname} has written it in a hand that cannot be disowned.",
    "{Kname} entered my name in {ledger} on your word. I would have preferred to be asked. I will admit it is a good deal easier to be quoted than to be consulted.",
    "You borrowed the Law Hall’s name at {place}, and returned it undamaged. That is rarer than you think.",
  ],
  confess: [
    "You told {kname} what you will not always tell me. I do not resent it. A confession is a small act of faith, and the sect has few enough.",
    "I have it from {kname} that you gave an honest account at {place}. I am more interested that you gave it than in what it was.",
    "You spoke plainly at {place}, with your guilt where {kname} could read it. I would have said you were wiser than that. I am glad I was wrong.",
  ],
  conceal: [
    "You asked {kname} to leave you out of {ledger}. A keeper’s silence has a price, and {kname} named it. I wonder what you thought you were buying.",
    "I know you paid for {kname}’s forgetting. I have paid for such forgettings myself, and I know the shape of what they cost afterward.",
    "A page went missing at {place}. I do not say you took it. I say only that someone paid to have it missing, and that I can count.",
  ],
  ask: [
    "You asked {kname} to read you your own page. It is a bolder thing than it sounds. Most of us would rather be written than read.",
    "I am told you asked what {ledger} says of you. I have never dared to ask what mine says, and I have kept the Law Hall’s for thirty years.",
    "You went to {place} to find out what the road thinks of you. I would have sent a clerk. You went yourself, and came back unflinching.",
  ],
};

/**
 * The Elder’s line the moment the hero does the deed, by her trust. Eight variants of each, and every road takes the one its index
 * points at, so the same deed on neighbouring roads is not answered in the same words.
 */
export const DEED_LINES: Record<Deed, Record<Tier, string[]>> = {
  vouch: {
    hostile: [
      "You have used my name. You will not do it again. If a keeper offers it back to you, refuse.",
      "My name is not a coin for you to spend. It has been spent already, on better people, and it came back lighter.",
      "You put my name in a stranger’s ledger. I will remember that every time I see it written.",
      "How you dare. I will say no more here, and I will say a great deal when we are alone.",
      "You do not have my leave. You never had it. A keeper’s ink is not a licence.",
      "Take my name out of your mouth, or I will take your name out of mine.",
      "It is a theft with a polite face. I know the type, and I know the face.",
      "I did not send you. I did not even permit you. Be very careful what that page now says.",
    ],
    wary: [
      "You used my name. I would rather you had asked first, and I would rather not be surprised by it again.",
      "My name, in a keeper’s ledger. I hope you meant to be worthy of it, since you have now been seen to claim it.",
      "I heard what you said. Keep it true, since I will be quoted, and I do not like being quoted wrongly.",
      "You have borrowed the Law Hall’s seal without the Law Hall’s leave. It may be forgiven. It will not be forgotten.",
      "So I am your surety now. I will remember it when the keeper’s ink dries, and so should you.",
      "That was bold. I do not forbid it. I do notice who is bold with my name, and in whose company.",
      "A keeper has my name beside yours. I will try to deserve it, and I hope you will try as well.",
      "You may name me. You may not forget that it costs me something each time.",
    ],
    neutral: [
      "You gave my name at {place}. It is on the page now. I hope it is worth the ink.",
      "I am told you used my name. It is not a crime, only a loan, and I will keep the account.",
      "A keeper has written me down beside you. I have been in worse company on better pages.",
      "You named me, and {kname} wrote it. That is how a name gets about. I would watch where it goes.",
      "That is the second time this month someone has used the Law Hall’s name. Yours is the first I could not object to.",
      "The Law Hall has been called to vouch for you. We will see if we can.",
      "I will not be offended. But if the page is ever read against me, I will know whose hand to look for.",
      "My name in a stranger’s ledger. It has been in odder places.",
    ],
    warm: [
      "You gave my name at {place}. I have no objection. I find I am rather pleased to have been the first name you thought of.",
      "You may use it. I will answer for it, and I would rather have you ask than not need to.",
      "If a keeper asks whether I stand behind you, say yes. I find I have decided to.",
      "My name in your mouth is not a theft, when you give it back unspoiled. You always have.",
      "{Kname} has my name in {ledger} on your word. I should be cross, and I am not.",
      "I hear you named me. I would have named you, if the page had been mine to write.",
      "A good name used by a good hand is only a good name travelling. Go on.",
      "It is a strange feeling to be named by you to a keeper I have never met. I find it rather agrees with me.",
    ],
    devoted: [
      "My name is yours to use. It always was. Write it wherever it is needed.",
      "I stand behind you at {place} as I stand behind you everywhere. Let {kname} write that down, if {kname} likes.",
      "You gave my name, and I would have given it sooner. There is nothing I would not sign for you.",
      "A keeper at {place} has the Law Hall’s name beside yours. I hope they frame it.",
      "Use it freely. If it ever fails you, tell me, and I will make it good.",
      "You named me as surety. I would have been insulted if you had named anyone else.",
      "Let the page say that Elder Su Wanru vouches for you. It is the only entry I have ever been proud to be in.",
      "You need not ask. I have been your surety since the river steps, and the page only now catches up.",
    ],
  },
  confess: {
    hostile: [
      "You confess to a stranger what you would not confess to me. I note the order of your trust.",
      "How convenient, that your honesty arrives only where I am absent.",
      "A confession is not a payment. Do not think the page is balanced.",
      "You tell a keeper what you owe me. I notice that I was not told.",
      "I do not want to hear it second-hand. Say it to me, or do not say it.",
      "Truth, from you, at a distance. I shall decide later whether it was meant for me.",
      "You may confess to every keeper on the road. It will not buy my forgiveness. It might buy my attention.",
      "An honest account, after so many dishonest ones. I will see if the habit holds.",
    ],
    wary: [
      "You told {kname} what you did. I would rather have heard it from you than from a runner.",
      "A confession, to a keeper. I will not call it a start. I will call it a rumour of one.",
      "I hear you were honest at {place}. I am prepared to be impressed. I am not yet.",
      "It is a good thing you did. It is a pity it was not done sooner, and nearer to me.",
      "You gave an account. I will have it read to me, and I will weigh it against the others.",
      "Honesty is a habit, not an event. I shall be watching to see which it was.",
      "You told it plainly, I am told. Plainly is good. Completely is better.",
      "A keeper holds your confession. I would like to hold something of yours that is not a promise.",
    ],
    neutral: [
      "You gave {kname} a plain account. That is how the true version of a person gets onto a page.",
      "I am told you spoke honestly at {place}. It costs more than it looks.",
      "A confession is a small thing, and it is the only kind of thing that mends. I take note.",
      "You told it all, or most. I do not need to know which. I only need to know that you can.",
      "A keeper has your worst page in {ledger}. I hope you meant it to be read.",
      "I hear you were honest. It will be remembered in your favour, if the road remembers anything fairly.",
      "You said it aloud. That is already most of what is asked.",
      "It is easier to be good once the bad is written down. I have always found so.",
    ],
    warm: [
      "You told {kname} the truth about yourself. I would rather you told me, but I understand the ease of a stranger.",
      "I hear you were honest at {place}. It does you credit, and it does me good to hear it.",
      "I am not shocked by what you did. I am touched that you said it.",
      "You need not have told a keeper. You could have told me. I would have listened. Next time, perhaps.",
      "The truth, from you, is a gift. I will not waste it.",
      "A confession like that is a door. I hope you will leave it open.",
      "{Kname} wrote it down, and it is safe. And now there is one thing fewer between us.",
      "You said it aloud. Come, the rest will be easier.",
    ],
    devoted: [
      "You told {kname}, and you will tell me, and I will have already forgiven it. That is how it works between us.",
      "A confession from you is the most precious thing that crosses my desk. I will keep it as I keep the rest.",
      "I would have forgiven you before you said it. But I am glad you did. It makes the forgiving easier to mean.",
      "You are lighter, I think. I can see it. Let me carry some of the rest.",
      "What you told {kname} is safe in {ledger}, and safer with me. Tell me when you are ready.",
      "You have no need to be afraid of what you did. You have only to say it, and you have.",
      "There is nothing you could confess that would change what I think of you. But I admire that you tried to.",
      "I am proud of you, and I am not sure I have said that before.",
    ],
  },
  conceal: {
    hostile: [
      "So you pay a keeper to forget you. You are learning the trade of liars, and quickly.",
      "I know what silence costs. You have purchased exactly what you deserve.",
      "A page missing from {ledger}. I shall make sure it is found.",
      "You hide from a keeper’s ink. You cannot hide from mine.",
      "Every page you buy off is a page I will want to read twice.",
      "Do not mistake a bribe for an absolution. The first is a transaction, and I have the receipt.",
      "Whatever you paid, it was too much. Whatever you hid, it was not enough.",
      "I knew you would do it. I merely did not know it would be at {place}.",
    ],
    wary: [
      "You asked {kname} to forget you. I wonder what you wished forgotten.",
      "A page missing is a story, too. I shall read it, in time.",
      "You paid for a silence. I do not condemn the purchase. I wonder at the seller.",
      "A keeper’s forgetting is cheap and its remembering is dear. I hope you have judged correctly.",
      "I will not ask what was in {ledger}. I will ask only whether you wanted it gone more than I wanted it known.",
      "That is the kind of thing a person does when they expect to be asked. I begin to wonder what I will ask.",
      "You have bought some time. Spend it well.",
      "I heard what you did at {place}. I did not like the sound of it, and I am trying not to like the shape of it.",
    ],
    neutral: [
      "You paid {kname} to leave you out of the page. It is not against the Law. It is against the spirit of it.",
      "A page forgotten is a page that will be remembered by someone. I only hope it is not me.",
      "Every keeper has a price. I did not think yours would be so low a one.",
      "You bought a silence at {place}. I will call it a loan, and wait for the interest.",
      "A forgetting costs less than a lie, and more than the truth. You have chosen the middle.",
      "I will not scold. I will say only that a hidden thing keeps growing.",
      "So the page is gone. The deed is not. Remember the difference.",
      "I have bought a few silences myself. I will not say how they ended.",
    ],
    warm: [
      "You asked a keeper to forget you. Whatever you were hiding, I would rather you hid it from the road than from me.",
      "I have kept things off pages myself, and I know what it costs. I do not judge it. I only hope you will tell me when it is safe.",
      "You paid for silence at {place}. I wish you had not needed to. I wish I had been the one to ask you why.",
      "It is a small deception, and a human one. I shall pretend I did not hear.",
      "You do not owe the road a confession. You do owe me a conversation, when you can bear it.",
      "I did not hear that. But if I had, I would have said that you were wise to be careful, and wiser to be careful with me.",
      "A missing page is not a missing person. I will wait until you are ready.",
      "Do not look so stricken. I have bought my silences too, and the ones I regret were the ones I did not buy.",
    ],
    devoted: [
      "You paid a keeper to forget you. I would have done it for you for nothing. Next time, ask.",
      "Whatever was on that page, it is no business of the road’s. It is a little of mine, if you want it to be.",
      "I know you are not hiding from me. I know you are hiding from yourself. I will wait at the door.",
      "A page is a small price for a clear conscience. A larger price, for a muddled one. I am here either way.",
      "You need not buy silences. I will keep whatever you give me, and I will not copy it.",
      "I should be disappointed. I find I am only worried, and ready to listen.",
      "The road may forget you for an afternoon. I will not, not for a moment.",
      "Tell me, when you are ready, what the page said. I promise to be the worst reader it has ever had.",
    ],
  },
  ask: {
    hostile: [
      "You asked what the road thinks of you. I could have told you, and saved the fee.",
      "Curiosity, from you, is never idle. Whom do you plan to ask next?",
      "You want to know how you are written. It will not change what you did.",
      "A keeper’s opinion of you is no substitute for a conscience. I trust you have one of those.",
      "You go to a ledger for the truth I would not give you. That is your right, and my regret.",
      "I would sooner you asked me. But I understand why you did not.",
      "What did it say? Do not tell me. I shall guess, and I shall be right.",
      "I begin to see why you wanted to know. I do not like what it implies.",
    ],
    wary: [
      "You asked a keeper what the road thinks of you. I wonder what you hoped it would say.",
      "A person who asks how they are written is half-way to rewriting. I hope you do not mistake the first for the second.",
      "I am told you asked to be read. I will ask only that you listen as hard as you asked.",
      "The road’s opinion is not a verdict. It is a weather report. Dress for it.",
      "You wanted to know. That is a good sign, and a worrying one, and I am undecided between them.",
      "Do not trust the page entirely. Do not ignore it, either.",
      "I would have told you myself, if you had asked. I would have been less polite.",
      "A keeper read you your page. I wonder whether you read it back.",
    ],
    neutral: [
      "You asked to hear your own page. A person who does is rarer than one who writes it.",
      "I hear you asked {kname} what {ledger} says of you. It is the right question, if you are prepared for the right answer.",
      "The road writes us all in its own hand. It is wise to read it now and then.",
      "A keeper’s page is not the truth, but it is evidence. I have made decisions on less.",
      "You asked, and {kname} read. That is how it ought to be done.",
      "It is good to know how one is seen. It is better to know why.",
      "You went and asked at {place}. Next time, ask me. I read better.",
      "A reading like that is a mirror with an opinion. Do not break it.",
    ],
    warm: [
      "You asked what the road thinks of you. I could have told you. But a keeper’s voice makes it real in a way mine cannot.",
      "I am glad you asked. Most people never dare, and the page is rarely as hard as they imagine.",
      "Whatever it said, I know it was not the whole of you. I have read more.",
      "A reading from {kname} is only one reading. I have another, which is kinder, and truer.",
      "You were brave to ask. You are brave in a quiet way that the road has not yet learned to write.",
      "I hope the page did you justice. If it did not, tell me the line, and I will argue with {kname} myself.",
      "To be read, one must be willing to be seen. You are, and I am proud of it.",
      "Come. Tell me what it said. I promise to take your side.",
    ],
    devoted: [
      "You asked the road what it thinks of you. I could have told you in a word. It is a very good word.",
      "The page is only ink, and the ink is only the road’s. I have the truth of you, and it is better.",
      "Ask whenever you like. Ask me. I will read you aloud, every line, and every line will be fair.",
      "You wish to know how you are written. I wish I could write you myself, in a clean hand.",
      "Whatever {kname} read, it was not enough. It never is. You are more than a page.",
      "I trust the road to write you badly and the sect to write you worse. I am the only one who has read you carefully.",
      "Come, sit. Tell me what the page said, and I will tell you what it missed.",
      "You are the only person I know who goes looking for the truth of themselves. It is why I trust you.",
    ],
  },
};

/** What shades the Elder’s line when she remembers something. A deed has four of these, each with four variants. */
export const DEED_MEMORY: Record<Deed, string[][]> = {
  vouch: [
    [
      "You use my name while I am still listening to what is said of you elsewhere. The two do not go together.",
      "You borrow my seal in the same breath that the Law Hall is questioning you. I would call that nerve, if I did not call it worse.",
      "You say my name to a keeper while my suspicion of you is still open. I wonder who you think will be reassured.",
      "To invoke me, when I am the one with the doubts, is a clever thing. I would sooner you had been wise.",
    ],
    [
      "My name, from a mouth that has lied this often. You will forgive me if I do not find it flattering.",
      "A name is a kind of promise, and I have heard what your promises have been worth. Please, do not spend mine.",
      "You use the Law Hall’s name after the things the road has said of you. I take it as an insult, or a plea. I have not decided.",
      "Your karma is not what my name was made for. But I will not deny you the use of it.",
    ],
    [
      "You hid at one stall and used my name at another. I count both, and I see the shape they make together.",
      "I am told you asked a keeper to forget you. Now you ask another to remember me. You cannot be both unknown and vouched for.",
      "The name you gave here, and the page you bought out elsewhere. I should like to see them side by side.",
      "You have hidden from the road, and now you hide behind me. I am not an especially good wall.",
    ],
    [
      "You are welcome to my name. I gave it to you before you asked, and I am glad you took it.",
      "My trust in you is large enough that a borrowed name is hardly a loan. Spend it, and I shall spend more.",
      "You need not apologise for using it. I have made you a gift of it already.",
      "I would rather have you use my name than hide yours. I would rather have a great many things, in your company.",
    ],
  ],
  confess: [
    [
      "After the lies you have told me, a true thing told to a stranger is a curious order of events.",
      "You confess to a keeper after a run of lies to me. Honesty, it seems, travels better at a distance.",
      "I have counted your recent evasions. Now I count a confession. The sum is not what you hoped, but it is not nothing.",
      "A truth, after a streak of falsehoods. I will take it, and I will keep my eyes open.",
    ],
    [
      "I did not need a keeper to learn that you had done wrong. I needed you to say it to me.",
      "The worst of what you did was already known to me. It is how you hold it that is new.",
      "You carry a heavy account. It is a relief that you set a little of it down.",
      "Your karma weighs on this, and you know it. A confession is the only scale that works.",
    ],
    [
      "You hid a page at another door, and you confess here. The keepers will compare notes. I am not sure you meant them to.",
      "You paid one keeper to forget you and told another everything. You are a more interesting person than your pages.",
      "It is strange to bribe at one stall and bare yourself at the next. I begin to think you are looking for the right price.",
      "I counted your silences and I count your confession. Between them, I think, lies the hero.",
    ],
    [
      "I would have known without being told, and I would have kept it. But you chose to say it, and that is what I will remember.",
      "You are safe with me. You always were. It is good that you have found a way to test it.",
      "No one has told me anything as freely as you. I do not take it lightly.",
      "A confession, from the one person I did not need to ask. I am moved, and I will not show it.",
    ],
  ],
  conceal: [
    [
      "You vouched for yourself under my name, and then bought a page out. It is not a pattern I like.",
      "You used my name at one stall and my silence at another. The Law Hall is not a cloak.",
      "A name borrowed, a page stolen. I shall want to know which of them you meant.",
      "You invoke me when it helps, and hide when it does not. I should be insulted, if I were not tired.",
    ],
    [
      "From you, of all people, with such a clean page. I did not think you needed to hide.",
      "It is odd to see a decent hand do an indecent thing. I do not think it was the first time.",
      "You have been honest more often than not. What did you want gone, that was worth the price?",
      "A person of good conduct, buying silence. I wonder what the conduct was covering.",
    ],
    [
      "My suspicions are already open, and you give me another to write in. You are generous to the Law Hall.",
      "I was already wondering about you. Now I have a page to wonder about as well.",
      "You hide a page while I am already looking. It is not clever. It is, however, informative.",
      "It is a poor moment to ask a keeper to forget. I have been watching, and I do not forget.",
    ],
    [
      "You are Unfed, and you spend coin on silence. I would have bought you a meal first.",
      "You went hungry for a page to go missing. I want to know what was on it, and I will not ask on an empty stomach, yours or mine.",
      "A purse too light to eat from, and a coin spent on forgetting. Whatever you hid, you valued it above your supper. I do not like that.",
      "You cannot afford your keep, and you paid a keeper to forget you. It tells me how much the silence weighs.",
    ],
  ],
  ask: [
    [
      "With a record like yours, I am surprised you want it read. The brave and the foolish look much the same.",
      "You ask to be read when you have a dark column. It is either courage or the other thing.",
      "The page is long, and not in your favour, and you asked to hear it. That I respect.",
      "I know what that page says. I am impressed you asked to hear it.",
    ],
    [
      "A hand that pushes so hard asks, at last, what it has pushed against. That is how the better kind of strength begins.",
      "You have leaned on a great many doors. I am glad one of them was a ledger.",
      "Force makes a loud entry and a thin one. I hope the reading showed you the thinness.",
      "I have watched you press on things. It is good to see you press on a question instead.",
    ],
    [
      "A weighty page, I should think, and you have listened to the whole of it. I do not know many who would.",
      "You have walked more roads than most, and each has written you. The sum must be enormous. You sat through it.",
      "Your pages are numerous, and you have asked to hear them. That is a kind of wisdom.",
      "Thirty keepers, and you asked one. I wonder why this one.",
    ],
    [
      "I was always going to tell you what it said. It is a relief that you did not wait.",
      "You do not need the road to tell you who you are. But I am glad you asked it, and glad I could add my own reading.",
      "A reader like you deserves a gentle page. I hope {kname} gave you one.",
      "Between us, we can write it better. Come and read it with me.",
    ],
  ],
};

/** What the Elder says unprompted at a Witness wayside’s hub, by her face. Short, so a hub keeps to its word cap; ten variants of each, so the ten waysides do not share a line. */
export type HubMood = "furious" | "afraid" | "suspicious" | "tender";
export const HUB_MOOD: Record<HubMood, string[]> = {
  furious: [
    "I will wait here. If I went in, I would not be civil.",
    "Four books with your name. Mine, I notice, you have not written in.",
    "Go and be written. Only read what you leave behind.",
    "The keepers will have a short page of me. I intend to read it.",
    "I am too angry to be a good witness, and too fair to be a bad one.",
    "I do not forbid it. I merely watch.",
    "I wonder what you will tell them, and what I shall be told after.",
    "Go on. The road is ready to say something of you. I am not.",
    "I will read every word, whatever they charge for the privilege.",
    "Go in. Come out. Be very sure of what you said.",
  ],
  afraid: [
    "Do not leave me alone here. I dislike rooms that write things down.",
    "I do not wish to know what they have kept. I wish it more than sleep.",
    "Stay near the door. I will be near it myself.",
    "If they ask after me, I was not here.",
    "These places remember too well, and I have things I would like forgotten.",
    "I will wait outside. The air is thinner in rooms that keep accounts.",
    "Go in. I will follow when I can breathe again.",
    "I am afraid of what they will say, and of whether I will believe it.",
    "Tell me everything after, and leave nothing out, whatever it costs.",
    "I should like to be braver. For now I shall be quiet.",
  ],
  suspicious: [
    "I will wait. I want to see what you come out with, and in whose hand.",
    "A place that keeps records. How convenient for anyone with something to arrange.",
    "Go in. I shall count what you carry when you come out.",
    "I do not say you will bribe a keeper. I have seen the coin.",
    "If a page goes missing in here, I will know the day.",
    "I would be glad to be wrong about you. I am rarely wrong.",
    "Be careful what you say before a ledger. Ink dries slowly and is read quickly.",
    "Whatever they write of you will reach me. I merely tell you.",
    "I have questions. I shall put them to the keepers if you will not hear them.",
    "Come out. Do not be surprised if I know what happened before you tell me.",
  ],
  tender: [
    "Take your time. I will keep the lamp lit until you come out.",
    "I like places that keep records. They are the only ones that remember kindness.",
    "Whatever they write of you, my page is better.",
    "Tell them what you like. I will believe you.",
    "I am glad to be here with you. Go and be written well.",
    "I would walk in with you, but you would prefer to go alone.",
    "There are fewer good witnesses than good people. I hope you find one.",
    "I was a keeper myself, in my way. Be kind to them.",
    "Take as long as you need. The road will keep. So shall I.",
    "Go on. I know how they will write you.",
  ],
};

/**
 * A closing clause for the Elder’s reply, so the same line said on two roads is not the same word for word: it names the keeper, the
 * place or the book. The cold tails go with her hostile and wary replies, the warm with the rest, and the third set with her memories.
 */
export const DEED_TAIL: Record<"cold" | "warm" | "memory", string[]> = {
  cold: [
    "I shall ask {kname} what {ledger} now says.",
    "Do not think {place} is beyond my reach.",
    "{Kname} writes a fair hand, I am told, and I will read it.",
    "I expect to be hearing from {kname}.",
    "What {ledger} holds, I will have in time.",
    "{Kname} is not the only one keeping a book.",
    "I have heard of {place} before today, and not kindly.",
    "Let {kname} write what {kname} likes. I will write more.",
  ],
  warm: [
    "{Kname} keeps a fair book, and I do not mind being in it.",
    "Tell {kname} I said so.",
    "I think well of {place}, and better of you.",
    "{Kname} has the sense to keep it, I trust.",
    "Whatever {ledger} makes of this, I make more.",
    "I am glad it was {kname} who heard it.",
    "If {kname} asks, I will say the same.",
    "{Place} has a good keeper, and it seems a good guest.",
  ],
  memory: [
    "{Kname} will know the shape of it.",
    "{Ledger} will keep the rest.",
    "I would have said so at {place}, if I had been there.",
    "{Kname} has the page, and I have the memory.",
    "Between {ledger} and me, it is all written down.",
    "That is what {kname} does not know.",
    "I wonder what {kname} made of it.",
    "At {place} they will think they understand you. I do not.",
  ],
};
