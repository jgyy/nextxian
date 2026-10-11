/**
 * Elder Su’s answer when a hero from one of the other starting points meets her eyes in the Law Hall doorway.
 * Each has five tier lines and memory lines that read the hero’s roots and Dao.
 */
export const pathScenarios = String.raw`
$ LH_ENTER_PORTER | trust+2 respect+2 | elder | The porter meets Elder Su’s eyes.
hostile: You meet my eyes as though six years of carrying jars had earned you the right. They earned you wages. Say what you came to say.
wary: Most porters look at the floor in this hall. You look at me. I wonder who taught you that, and whether they are still on the mountain.
neutral: You know this hall better than most of my wardens. You know where the draught comes in. Sit, and tell me what you saw on the stair.
warm: Six years you climbed past my windows, and I never once asked what the stair looked like from underneath. I am asking now.
devoted: I have a ledger for every disciple on this mountain and none for the porters. I think I shall start one, and put your name in it first.
? hero:talent=earth | You stand on the floor of my hall as though you had laid it. A mountain root, and a porter’s feet. Sit, and tell me what the stair said to you.
? hero:dao=beast | The gatehouse dog followed you in and lay down at the door. He has not done that for anyone in nine years. Sit, and tell me what he knows.

$ LH_ENTER_ROGUE | trust+1 respect+2 | elder | The rogue meets Elder Su’s eyes.
hostile: You look at me like a hunter looks at a deer. The reward is mine to pay, and you have not earned a stone of it. Speak, and speak carefully.
wary: You came in at the front, and you are looking for the exits anyway. Hunters are honest in one way only: they never pretend to be anything else.
neutral: A rogue in my hall. No sect, no teacher, no seal. Sit, then. I have heard worse from people with all three.
warm: You walked the stair in plain sight and met every gaze on the way. The other hunters went round by the goat track. I have noticed the difference.
devoted: Of all the hunters tonight, you are the only one who has looked at the mountain and not at the reward. I should like to hear why.
? hero:talent=heaven | You are heaven-marked and a rogue, and you walked in at the front. The sky has not been kind to people like you. Sit, and tell me what you want from it.
? hero:dao=sword | Your hand does not move toward a hilt when you look at me. Nine hunters in ten reach for one. Sit down, swordsman, and tell me who sent you.

$ LH_ENTER_HEIR | trust+1 respect+3 | elder | The heir meets Elder Su’s eyes.
hostile: A house with a seal, and the seal on your hand like a threat. Take it off before you speak. The Law has outlived better houses than yours.
wary: Your family’s name is in my second drawer, and I have not decided to open it. Tell me what you want from it before I decide.
neutral: Sit. I knew your father by his handwriting. It was not the worst I have read. Tell me what paper you have come for.
warm: You came nine days on foot, with a house’s boots splitting at the toe. I will not insult you by asking whether you are tired.
devoted: Your house is ash, and you have come to me with your hands open. I would give a great deal for a petitioner like you every day of the year.
? hero:status=noble | A noble house, and a banner scorched at the hem. I have seen the like once, in the year of the Sealing, and I do not care to see it twice.
? hero:dao=fate | You looked at the ledger on my knee before I did. A diviner, then. Sit, and tell me which page you hope I will turn to.

$ LH_ENTER_COURIER | trust+0 respect+3 | elder | The courier meets Elder Su’s eyes.
hostile: A Concord courier who meets my eyes. Either you are brave or you have been told what I will say. Hand over the notice, and say nothing of what you read on the way.
wary: The Concord sends a courier, and the courier stands in my doorway with an even face. I wonder what the notice says that you are so calm about.
neutral: Sit. I will take the notice, and read it where you cannot watch my face. Then I will ask what you saw on the road.
warm: You carried a sealed paper three weeks and kept it sealed. Few of your guild would have. Sit, and tell me what you were not asked to tell.
devoted: The Concord has sent me a courier I could trust, which I did not think it capable of. Be careful. They will notice that you are kind to me.
? hero:attire=scholar | Inked cuffs, and a sealed satchel. You can read the notice, and you have not. I have seen less honesty in a bishop.
? hero:dao=talisman | The seal on your satchel is a ward as well as a stamp. You have not touched it once. A talisman-maker with restraint. Sit, and tell me who taught you.

$ LH_ENTER_EXILE | trust+0 respect+1 | elder | The exile meets Elder Su’s eyes.
hostile: Struck out by one sect, you walk into the Law Hall of another with your head up. The Law does not reward that. It puts it on a ledger.
wary: Another sect’s exile, and the Windward breath still in your lungs. I will not ask you to hide it. I will only ask you not to use it in my hall.
neutral: Sit. The Windward Pavilion is not in the habit of striking out its best, and not in the habit of forgiving its second best either. Tell me which you were.
warm: You were cast out and you did not turn to spite. I know a few cultivators who would give a year of their lives for that kind of grace.
devoted: Struck out, and you climbed my stair with your hands open. The Windward Pavilion has made a mistake, and I will not tell them where it can be corrected.
? hero:dao=sword | A swordsman with an empty belt. You have not stopped reaching for it since you came through the door. I will have the warden find you one, and I will watch what you do with it.
? hero:talent=metal | A bright-metal root and a sect’s breath-art. They struck out the wrong one, I think. Sit, and tell me what the third form is.
`;
