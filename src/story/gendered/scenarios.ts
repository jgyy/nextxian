/**
 * What the Elder says at the three gendered side paths: at once, at the moment the hero meets her on the path, and in the report on the Law Hall’s floor
 * once the path is over. Each has five lines by her trust, and memories that read what the hero did behind the door. The immediate answers read the tone
 * of the decision just made (`tone:…>=1/1`), since a flag the decision sets is not yet on when she speaks.
 */
export const genderedScenarios = String.raw`
$ LC_ELDER | respect+1 | elder | The hero meets the Elder at the door of the Left Cloister.
hostile: You made a door of my own cloister into a place to be questioned in. I came because I would not be told by a stranger what it felt like, and you have told me. Do not do it twice.
wary: I have not crossed this threshold in fifteen years, and you stood between me and a table of lullabies. I notice that you chose where to stand. I will consider why.
neutral: I came to the Left Cloister because I was told there was a stranger in it. I stayed a quarter of an hour longer than I meant to. I do not say that to be thanked.
warm: I did not think I could stand in this doorway. You made it one I could stand in. I find I am more grateful than my face will show, and my face, I am told, shows nothing.
devoted: You gave me the leaf, and you gave me the door, and neither as a favour. I have kept a drawer fifteen years to hold what I felt. I think I should like to put some of it down here.
? lc_lied_elder | You told Ge Shuyin that I had asked after her. I had not. But I find I wish I had, which is its own rebuke, and not yours to give.
? lc_book_taken | You carry their Book in your sleeve. I can see the blue thread. Take it down the abyss path if you must, but do not sing it badly.
? lc_book_copied | You copied what the sisters keep, and left them the original. That is a better theft than I should have made.

$ LC_REPORT | trust+1 respect+1 | elder | The hero reports that they went to the Left Cloister.
hostile: You left me at the tablet for the Left Cloister, and I followed, and I have been thinking about it since. Whatever the sisters showed you, you will not use it against them. That is not a request.
wary: The Left Cloister is mine, in a manner of speaking, though I have not set foot in it for fifteen years. I will not ask what you were given. I will ask what you intend to do with it.
neutral: So you have been to the Left Cloister. The sisters feed everyone and tell nothing, and yet you came back with something. I shall not ask what. I shall watch to see what you do with your hands.
warm: You went to the Left Cloister, and you came back with the look of someone who has been fed. I am glad. I should like to say I was ever so well received. I was, once. It has been a long time.
devoted: You went where I could not, and came back with the cloister’s blessing on your sleeve. I will not thank you. I do not know the word for it, only that I have been carrying a key for fifteen years, and it is a little lighter.
? lc_wrote_elder | You wrote down what I said of the fourteenth, in the sisters’ hand. I did not know I could say it. I do not know whether I should be angry, and I find I am not.
? lc_wrote_song | You wrote a line of the lullaby and left my name off it. That was kind, and I am ashamed of how much I wanted to be named.
? lc_wrote_truth | You wrote that I am remembered in a cloister and in a hall. It is the truest thing anyone has said of me in a decade. I should not like it repeated.
? lc_leaf_blank | You left the fourteenth leaf blank. I understood why. I do not say that it was the right thing. I say that I understood.
? lc_book_taken & lc_tune_hummed | You carry the Book and you hummed the three notes. I am told the fourth is not written. I am told also that you waited for it.
? lc_book_guarded | You promised the sisters you would guard the shelf. They are very old, and they have been guarded against before. Guard it better than the Law has.
? lc_demanded | You asked to carry the sisters’ Book to me as evidence. They told me, with the air of women who had been kind and been repaid. I did not like what it told me of you.
? lc_flattered | You told me the Book said I was just. It does not. It says a great deal else, and I have read it since, and it is kinder than I deserve.

$ RY_ELDER | respect+1 | elder | The hero meets the Elder at the gate of the Right Yard.
hostile: You spent the night in my yard, and I did not send you. Whatever you swore there will be a thing I shall find out. I am not often caught on the wrong side of a gate.
wary: A night in the Right Yard is a night the Law Hall did not account for. I will say only that the oath you swore there is older than I am, and it has a price I do not like to see paid by strangers.
neutral: So you have held a lantern. I held none; I signed. You will find, I think, that holding is the harder of the two, and that it is not the one the Law remembers.
warm: You held the lantern, and I have been standing in the gate for some time deciding whether I may say I am glad. I may. I am. It is a thing I am not yet used to saying aloud.
devoted: You held a night’s lantern for the fourteen. I have stood at my window for fifteen years and not once gone down to the yard. I think I should like to go down. Come. I am afraid of the steps.
? tone:quiet>=1/1 | You swore nothing that touches me. That is carefully said, and I notice the care. The yard teaches it. Ren Qiao has the same habit.
? tone:inquiry>=1/1 | You ask what I would have sworn, at your age, in that yard. I would have sworn it all. And I would have asked who signed the moment I was out of the gate. It is the only reason I am the Elder.
? tone:deceit>=1/1 | You say you only held a lantern. You also wear a sash, or a tally, or both. A man who only held a lantern does not come out of the yard with the yard’s knot on him.

$ RY_REPORT | trust+1 respect+1 | elder | The hero reports that they went to the Right Yard.
hostile: You left me at the tablet, spent the night in the Right Yard, and wore its oath to my door in the morning. I do not enjoy being the last to learn what is sworn in my own hall.
wary: The Right Yard is full of men who have sworn not to ask me a certain thing. I shall be fair. I will ask you whether you swore it.
neutral: The Right Yard has been holding fourteen lanterns for fifteen years, and no one has asked it how they feel about the weight. I should be grateful if you would not be the first.
warm: You held a lantern, and put it down in good order. That is more than I managed on the Sealing Night, and I have been remembering it all morning. Thank you for the reminder, I think.
devoted: You went into the yard as a brother, and came out as one, and you still came to tell me. Ren Qiao will tell you what that means in the yard. I will tell you only what it means in the Law Hall: I did not expect it.
? ry_sash | You wear the yard’s sash. It is a good knot. I never learned it. I would not mind being taught.
? ry_tally & !ry_sash | You carry the tally and not the sash. It is the choice of someone who wants to be known and not bound. I recognise it. I made it myself, long ago, and have been regretting it since.
? ry_flame_named | You spoke the name on the lantern to the dark. Ren Qiao told me. He was white as paper. I should like to think the name heard you.
? ry_put_down | You put the lantern down at dawn. I do not hold it against you. I have been trying to put mine down for fifteen years, and found it fused to my hand.
? ry_refused | You refused the oath. I do not remember when anyone last did. I hope it cost you less than it should have.
? ry_sworn_false | You swore the oath with your thumb folded. Dehai told me. He said you swore like a man who is saving it for later. I did not tell him he was right.

$ TD_ELDER | respect+1 | elder | The hero meets the Elder at the foot of the Registrar’s back stair.
hostile: I did not come up, and you went down. You have been through a door I have kept shut for fifteen years, and I am not at all sure it was yours to open. We will talk of this when I have decided how.
wary: A door in my own wall that I had thought sealed. You have been through it, and you have come back. I should like to think I am calm. I am looking at the hinge.
neutral: So the hinge has been oiled. I did not think anyone knew where the door was. I should like to know who it was that did not forget.
warm: You went where I could not, and you came back with it still in your hands. I did not know I had been waiting. I find I have, and for a very long time.
devoted: I oiled that hinge every week for eleven years and told no one. I thought that when I stopped, it would be forgotten. You have remembered it, and I find that is very nearly the kindest thing anyone has done in this hall.
? tone:truth>=1/1 | You tell me what is in it. I knew it before you spoke; I have known it every night since the fifteenth. But I had not heard it said by anyone but myself.
? tone:quiet>=1/1 | You say nothing, and let me speak first. It is a courtesy, and a rare one. I do not know what to say, and I find I have said it anyway.
? tone:deceit>=1/1 | You tell me there was nothing in the niche. Hou Zhe has never lied to me in fifteen years. You are the first, and I am nearly impressed.

$ TD_REPORT | trust+1 respect+1 | elder | The hero reports that they went through the third door.
hostile: You went up the third door and I stood at the foot of it, and I should have been told you knew it. I do not enjoy being the last to learn what is in my own wall.
wary: The third door is not on any map the Law Hall draws. I am interested that you found it. I shall ask you no more than that you not tell the masters.
neutral: The third door. I forget, sometimes, that there is a place in the Law Hall where I am not the Elder. I stood at the foot of the stair for a quarter of an hour, and no one called me anything.
warm: You went through the door that gives no answer, and you gave none yourself. I think you will find it a restful place, and I think I should like to go again, and I think I shall not.
devoted: You went through the third door, and you came out. Most do not. It is the only door in the Law Hall that has never asked me what I am, and I did not know until today how badly I wanted it to.
? td_marked | You put a mark in the Door-book. I have never made one. I am told it is a very small thing, and that it is the only thing on the page that is not a stroke.
? td_carry_message & !td_gave_paper | You carry the paper and did not give it to me. I understand. Keep it until you can.
? td_gave_paper | You gave me the paper. I have it in my sleeve. I have read it, and I shall read it again tonight, and I shall not tell you what it says.
? td_read_hidden | You read the paper and said you had not. Hou Zhe told me, in his way. I shall not hold it against you. I should have read it too.
? td_return_promised | You promised Hou Zhe you would use his door again. I was never allowed to make him that promise, because it would have been broken. I hope you keep it.
? td_resolved_tell & !td_gave_paper | You resolved to tell me what the paper said, and have not, yet. A resolution is a small door of its own. I shall wait.
`;
