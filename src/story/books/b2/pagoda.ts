import type { Arc } from "../types";

/**
 * Book Two, arc five: Tea at the Drowned Pagoda. A man struck from Heaven's Ledger invites the Wanderer to a tea house in a
 * half-sunk pagoda and offers the protection of the Hollow Lotus. Four ways to take the invitation: openly (a1), with an
 * ambush (a2), in disguise (a3), or from below, in the drowned floors (a4). A hidden route lights Old Lin's wicks in the dark
 * and finds the Cup of Names (needs the wicks from the last night on the mountain).
 * Cast: Wen Rui, Ping the tea-mistress.
 */
export const pagoda: Arc = {
  id: "pagoda",
  name: "Tea at the Drowned Pagoda",
  scenes: String.raw`
=== pagoda_entry | The Pagoda in the Bend
Where the river doubles back on itself the barge slows, and out of the haze comes a pagoda that has been standing in the water for four hundred years. Seven storeys, three of them drowned. The bottom roof-corners trail weed like the hair of someone who has been asleep a very long time. A lantern burns on the fourth floor, and a rope ladder hangs from its balcony into a skiff that has been tied up there for you.
The skiff holds a folded note in a clean clerk’s hand. It says: A cup is poured for the Wanderer. Come alone, or come with whom you trust. The tea will not cool.
It carries no seal, no name. Underneath, drawn in a single ink-stroke, is a small closed lotus.
The barge-pilot looks at it, and crosses himself in the old way, with two fingers.
> truth | Take the skiff openly, with Gu and Ren, and tell the Elder where you are going. | pagoda_a1s1 | +pagoda_a1
> force | Send Ren ahead in the dark to take the stair before you climb it. | pagoda_a2s1 | +pagoda_a2 needs:2
> deceit | Put on a pilgrim’s cloak and go up as someone the host is not expecting. | pagoda_a3s1 | +pagoda_a3
> quiet | Row to the drowned floors, below the tea house, and learn the building before you enter it. | pagoda_a4s1 | +pagoda_a4
> inquiry | Take Old Lin’s wicks down to the black water below the third floor, and go in by their light. | pagoda_h1 |  | dep_wicks | You carry no wicks from the stair.

// ---------------------------------------------------------------- a1: openly
=== pagoda_a1s1 | The Rope Ladder
The Elder does not forbid you. That is the strangest part. She listens with her hands in her lap and her eyes on the river, and when you have finished she says, “A closed lotus. I know the sign. It is drawn on the walls of cells.” She does not look at you. “Go. Take Ren. Come back. I would rather you go than be fetched.”
The skiff takes the three of you across the bend. Gu holds the lantern, white-knuckled. Ren Qiao sits in the stern with his hand on the rope at his belt. The pagoda rises, and rises, and the weed on its eaves moves in a current you cannot feel.
The ladder is wet and old. Halfway up it, Ren Qiao says in a low voice, “There are people in the water below us.”
> truth | Ask him how many, and if they are watching. | pagoda_a1s2 | bond:ren+1
> quiet | Keep climbing, and do not look down. | pagoda_a1s2
> inquiry | Hold the lantern low over the water and look. | pagoda_a1s2
> mercy | Tell Gu to close his eyes, and count the rungs aloud. | pagoda_a1s2 | bond:gu+2

=== pagoda_a1s2 | The Tea House
The fourth floor is one long room with a floor of black lacquered planks, shuttered windows, and a ceiling of cedar beams hung with paper lanterns. A dozen low tables are set out. At each sits a person in a plain brown robe with a cup before them, and not one of them looks up as you enter.
They are not guests. They are not servants. They have the held, listening quality of the people in the guardhouse on the Ash Bridge, or the grinders in the warehouse behind the dyers’ lane: people for whom something has been taken, and who have not yet decided what to do about it.
A woman in a faded apron comes forward with a tray. She says, “You are expected. Sit where you like. The host will come when the water is ready.”
> truth | Ask her name. | pagoda_a1s3
> inquiry | Ask who the people at the tables are, and what they are waiting for. | pagoda_a1s3
> quiet | Sit at the table nearest the window, and watch. | pagoda_a1s3
> mercy | Ask whether any of them would like tea, and offer to pour. | pagoda_a1s3

=== pagoda_a1s3 | Ping
She is called Ping, and she keeps the tea house. She tells you so while she lays out the cups: eleven cups of glazed brown clay, and a twelfth of white, the colour of bone. On the base of each is a name in a clerk’s neat hand.
“Not for the customers,” she says. “For the host. He likes to know who is at which table.”
She pours as she speaks, a thin stream of amber that does not steam. She says the pagoda was a shrine once, to a saint who could be called by name and would come. The saint was struck out. The shrine drowned. The tea house floated up on the wreckage, the way flotsam does.
“Everyone here was struck,” says Ping. “By the Concord. By their sect. By their family. I am the only one who does not know why.”
> truth | Ask what she remembers of the day it happened. | pagoda_a1s4 | +pagoda_ping_trust
> mercy | Tell her you are sorry, and mean it. | pagoda_a1s4 | +pagoda_ping_trust
> inquiry | Ask how the host finds the struck, and why they come. | pagoda_a1s4
> quiet | Take the white cup from her, and look at its base. | pagoda_a1s4

=== pagoda_a1s4 | The White Cup
There is a name on the white cup. It is not yours. It is not any you know. It is a woman’s name, in an old script, and under it a line of tiny characters you have to tilt to the light to read.
Struck by the Law Hall of the Azure Cloud, in the year of the Sealing. Returned in the autumn.
Your thumb is on the word Law. Your hand is trembling, very faintly, with the memory of a girl who said she was not dead, only listening.
“That one is not for you,” says a voice behind you. It is soft, a little hoarse, a voice trained to be unremarkable. “It is for the Elder. I should be glad if she would drink it.”
> truth | Turn, and say her name aloud: the girl of fifteen. | pagoda_a1s5 | +pagoda_met_wen
> inquiry | Turn slowly, and ask who the cup was poured for. | pagoda_a1s5 | +pagoda_met_wen
> quiet | Set the cup down and turn without speaking. | pagoda_a1s5 | +pagoda_met_wen
> force | Turn with your hand on the table and your eyes on his hands. | pagoda_a1s5 | +pagoda_met_wen

=== pagoda_a1s5 | Wen Rui
He is a small, grey, scholarly man in a brown robe, forty or fifty, with the stoop of someone who has spent his life leaning over documents. His eyes are mild. His hands are folded in his sleeves. There is a faint grey line on his forehead, where something, long ago, was drawn and then rubbed out.
“Wen Rui,” he says. “Formerly clerk to the Seventh Chancery of the Concord. Formerly. I was struck for reporting a wrong figure in an honest sum. It was a very small wrong, and I was very honest.” He smiles. It does not touch his eyes. “The Hollow Lotus has been good to me. It has been good to many.”
He nods at the table.
“You may sit, or you may stand. Either way I shall tell you the same thing. The Concord is going to ask you to die.”
> truth | Ask him how he knows, and whether anyone has said it plainly before. | pagoda_a1s6
> inquiry | Ask what the Hollow Lotus gains from telling you. | pagoda_a1s6
> quiet | Sit, and let him say the rest. | pagoda_a1s6
> force | Tell him you have been threatened by experts and he is not one. | pagoda_a1s6

=== pagoda_a1s6 | What the Struck Know
“It is called the Great Sealing,” says Wen Rui. “You know it already. You listened at a wall in the Law Hall, and you were not meant to, and you were right to. It has been done four times. A black-seeded bearer, placed in a wound, and the wound closes.” He glances at Ren Qiao, then Gu. “I will not say how it is done. Your friends would not enjoy it.”
He leans on the table, and the lanterns above him sway.
“The Concord has not finished looking for you. It has a list. It has almost found the bearer. It believes you are one of two or three. It does not know yet that it is wrong about the number.”
His voice drops further.
“We have a place where you would not be on the list.”
> truth | Ask where. | pagoda_a1s7
> inquiry | Ask what the number is that the Concord is wrong about. | pagoda_a1s7
> quiet | Look at Ren and Gu, and decide whether to let them hear. | pagoda_a1s7
> force | Tell him a place without a list is a place without a door. | pagoda_a1s7

=== pagoda_a1s7 | Madam Ash
“The Ash Steppe,” says Wen Rui. “Beyond the Salt Coast, beyond the Bone Hills, where the Concord’s writ ends. A woman keeps a house there. We call her Madam Ash because she was burned once, and walked out of the fire. She was a Censor, in her youth, the best the Concord has produced. She is the only living person who knows what the Concord does with a bearer.”
He opens his hands.
“She would like to meet you. She does not ask you to join us. She asks you to listen. She says that you, of all people, will not mind being asked to listen.”
Ren Qiao shifts at your shoulder. Gu has gone quite still.
> truth | Tell him you will think about it, and mean to. | pagoda_a1s8 | +pagoda_invite_maybe
> mercy | Ask what Madam Ash would do for the people in this room. | pagoda_a1s8 | +pagoda_invite_maybe
> inquiry | Ask for something in writing, in her own hand. | pagoda_a1s8 | +pagoda_invite_maybe
> force | Tell him to deliver a message: if she wants to talk, she can climb a river to do it. | pagoda_a1s8 | +pagoda_invite_no

=== pagoda_a1s8 | The Last Cup
Wen Rui pours the last cup himself, from a pot that has not cooled in four hundred years. He sets it in front of you, white, with the woman’s name facing up.
“I will not say you must drink it,” he says. “It is only tea. But a cup poured and left is a thing that is struck out in a small way, and I do not like to leave a name unwelcomed.”
He bows, and the faint grey line on his forehead shows in the lantern-light like a wound that is trying to remember what it was.
Behind him the other tables have begun, very quietly, to hum. The tune is the one from the vault, the roof, the village. It rises and falls among the lanterns like a bird that has found the room.
> truth | Drink the cup, and say the name on its base aloud. | pagoda_close | +pagoda_cup_drunk
> mercy | Raise it, and pour it back in the pot, and say nothing. | pagoda_close
> quiet | Leave it where it is, and bow, and take the rope ladder down. | pagoda_close
> inquiry | Ask him to say the name himself, first. | pagoda_close | +pagoda_cup_drunk

// ---------------------------------------------------------------- a2: ambush
=== pagoda_a2s1 | The Stair in the Dark
Ren Qiao goes up the pagoda in the dark, hand over hand on the weeds, with his lantern unlit. He is faster than a man of thirty-two has any right to be, and he makes no sound. You wait in the skiff with Gu, who keeps checking the tide-line and swallowing.
“If it is a trap,” whispers Gu, “I would like to say that I had an opinion.”
“You do,” you say. “You have had it since the barge.”
He laughs, silently, and the skiff rocks. Above you a shutter opens an inch, and a pale hand makes a sign: three fingers, then a fist. It is the wardens’ call for all clear, and then, by way of afterthought, a closed hand with the thumb folded in.
> force | Climb after him, and take the first landing. | pagoda_a2s2 | needs:2
> quiet | Wait for the next signal, and keep the skiff steady. | pagoda_a2s2
> inquiry | Ask Gu what the second signal means. | pagoda_a2s2
> mercy | Send Gu back to the barge for the Elder, in case there is trouble. | pagoda_a2s2 | bond:gu+1

=== pagoda_a2s2 | The First Landing
The landing is bare, with a plank floor and a rotting rail. Ren Qiao is standing at the far end with his lantern now lit, his sword half drawn, and two men in brown robes are lying very still against the wall, breathing, unharmed. He has tied their wrists with the lantern cord.
“They were the door,” he says. “They were told not to resist. They did not.” He looks faintly ashamed. “It is hard to hit a man who has been told to be hit.”
The stair beyond them climbs into darkness. From the fourth floor, thin as thread, comes the sound of a woman humming.
> truth | Tell Ren the next man will not be the door. | pagoda_a2s3 | bond:ren+2
> force | Go up the stair three steps at a time. | pagoda_a2s3
> mercy | Loosen the men's cord a little, so it will not cut. | pagoda_a2s3 | bond:ren+2
> quiet | Wait with Ren on the landing, and listen to the humming. | pagoda_a2s3

=== pagoda_a2s3 | Bare Hands
The fourth floor is lit by lanterns and crowded with people in plain brown robes. None of them is armed. A woman in a faded apron stands in the middle of the room with a tray of cups, and she holds it perfectly steady as you and Ren come through the door.
“Ping,” she says, very calmly. “The tea is hot. I would be grateful if you did not break the cups.”
A small grey man rises from the far table. He bows to you, politely, as one does to an expected guest. The faint line on his forehead is drawn and rubbed, drawn and rubbed, a stain of old ink.
Ren Qiao has not sheathed his sword. “Wen Rui,” he says, “clerk to the Seventh Chancery. I know the name. You were struck for a number.”
> force | Cross the room to Wen Rui, and put a hand on the table in front of him. | pagoda_a2s4
> truth | Tell Ren to sheathe his sword, and that you will not threaten a man who has not threatened you. | pagoda_a2s4 | bond:ren+1
> deceit | Tell Wen Rui that the Concord's Censors are on the stair, and watch his face. | pagoda_a2s4
> mercy | Kneel to Ping, and apologise for the noise. | pagoda_a2s4

=== pagoda_a2s4 | What Ren Did
Ren Qiao does not sheathe his sword. He lowers it, with the tip an inch from the planks, and says, in his flat warden’s voice, “I will not strike a man at his table. I will, however, stand here.” He plants himself at your shoulder. “The lanterns can see me.”
It is the kind of threat that works because it is not one. The room goes quiet. Wen Rui settles into his chair with a rustle of cloth, folds his hands in his sleeves, and gives you the tired smile of a man who has had several such interviews.
“Well,” he says. “I see the Law Hall has trained its guests to knock.”
Somewhere behind you Gu Hanzhen has arrived on the landing, breathless, and stopped in the doorway with his hand on his sword and his mouth open.
> truth | Say you did not come to fight, and ask for the tea. | pagoda_a2s5 | +pagoda_met_wen
> force | Say you came to see whose name is on the white cup. | pagoda_a2s5 | +pagoda_met_wen
> quiet | Take the seat across from him, and let your hands rest on the table. | pagoda_a2s5 | +pagoda_met_wen
> inquiry | Ask what he would have done if you had come alone. | pagoda_a2s5 | +pagoda_met_wen

=== pagoda_a2s5 | The Warning
Wen Rui does not seem insulted. He seems, rather, amused, as a patient man is amused by the arrival of a storm he forecast. He says the Hollow Lotus has been watching the Azure Cloud Sect for fifteen years. He says it has people in the Concord, in the Law Hall, and one in the barge. He lets that settle.
“Not anyone you would suspect,” he says. “I will not tell you who. If I did, you would arrange a kindness for them, and they would be struck.”
He looks at Ren Qiao.
“You are loyal,” he says. “Good. You will need to be. The Great Sealing requires a bearer to walk into the wound under their own power. A bearer who is carried is a poor seal. The Concord knows how to make a person walk.”
> truth | Ask him what the Concord does to make a person walk. | pagoda_a2s6
> force | Tell him to stop speaking in riddles, and say what he wants. | pagoda_a2s6 | needs:2
> quiet | Look at Ren, and see how he has taken it. | pagoda_a2s6
> mercy | Ask what the Lotus would do to protect a bearer who did not want to walk. | pagoda_a2s6

=== pagoda_a2s6 | What He Wants
“Nothing,” says Wen Rui, and it is the first untruth he has told you. He smiles at your face. “Very little. I am an agent, not a prophet. I am to bring you to the Ash Steppe, to a house, to a woman who can explain the things I cannot. She will ask nothing of you. She will give you a chair, and a cup, and fifteen minutes.”
He leans forward. The lanterns bend toward him.
“What I want is a smaller thing. I want to be written back. That is all any of us wants. Madam Ash says it can be done, in one place, by one kind of person. I do not need to understand how.”
It is simple, and it is the saddest thing you have heard that night.
> truth | Tell him you do not know whether it can be done, and will not promise it. | pagoda_a2s7
> mercy | Tell him you will remember his name, whatever happens. | pagoda_a2s7 | +pagoda_wen_friend
> inquiry | Ask what happens to a struck man when his name returns. | pagoda_a2s7
> force | Tell him a man who wants only that does not need a sword at the door. | pagoda_a2s7

=== pagoda_a2s7 | The Skiff Home
You leave by the rope ladder, with Gu going first and Ren Qiao last, the lantern swinging, the weed on the eaves brushing your cheek. Ping stands on the balcony with her tray and watches you down. She does not wave. She lifts her tray an inch, and the cups clink once.
In the skiff Ren Qiao says nothing for a long while. Then he says, “I tied two men’s wrists with a lantern cord, and they thanked me.” He looks at his hands. “I do not know what to make of it.”
Gu, rowing, says: “I think it means the world is not what the wardens said.”
The pagoda recedes in the haze, its lantern a single gold bead.
> truth | Tell them both that you do not know what to make of it either. | pagoda_a2s8 | bond:ren+2 bond:gu+2
> mercy | Take the oar from Gu, and let him rest. | pagoda_a2s8 | bond:gu+2
> quiet | Watch the water, and say nothing, and let the others talk. | pagoda_a2s8
> inquiry | Ask Ren how he knew the men would not resist. | pagoda_a2s8 | bond:ren+1

=== pagoda_a2s8 | Back on the Barge
Mei Qiu is waiting on the deck with her iron bar across her knees, as still as a heron. She says nothing as you come over the rail. She looks at Ren Qiao’s lantern cord, which is missing, and at the weed on your sleeves, and at the dark where the pagoda is not.
“There is a place in the Concord’s law,” she says, “for a witness who is found to have been in company with a known agent of a banned house. It is not a pleasant place.”
She taps the iron on her palm.
“I am not saying you were. I am saying that if the Censor-General asks, I did not see which way you rowed.”
> truth | Tell her you will not ask her to lie for you. | pagoda_close | +pagoda_told_mei
> quiet | Bow, and go below. | pagoda_close
> mercy | Thank her. | pagoda_close
> inquiry | Ask her why she would hide it. | pagoda_close

// ---------------------------------------------------------------- a3: disguise
=== pagoda_a3s1 | A Pilgrim’s Cloak
The pilgrim’s cloak is the grey of river stones and smells of woodsmoke. You borrowed it from the barge cook, who asked no questions and gave you a handful of dried plums. With the hood up you could be anyone: a farmer’s daughter on the road to a shrine, a salt carrier’s widow, the youngest of five brothers sent to say a prayer.
You row yourself to the pagoda alone, which is the foolish part. You tell yourself it is the only way to see the thing as it is.
At the rope ladder, a voice calls softly from above. “Pilgrims go to the second floor. Customers go to the fourth. Which are you?”
> deceit | Say you are a pilgrim, come to offer to the saint. | pagoda_a3s2
> truth | Say you are a customer, and you have been invited. | pagoda_a3s2
> quiet | Say nothing, and climb. | pagoda_a3s2
> inquiry | Ask what the saint's name is. | pagoda_a3s2

=== pagoda_a3s2 | The Second Floor
The second floor is a shrine. It was a shrine once. The altar has been stripped of its figure, and the place where the saint stood is a gap in the plaster the shape of a standing woman. Candles burn on the floor in rows. Each has a small paper tag tied to it, with a name.
Pilgrims kneel among them. They are plain people, farmers and fishers and a nun with a shaved head, and they murmur together under their breath. You listen. They are not praying. They are saying the names on the tags, one after another, in the order of the candles, so that every name is spoken once before the first has burned out.
A woman beside you moves aside to make room. She does not look at you. She holds out a tag.
> truth | Take the tag, and read the name on it aloud. | pagoda_a3s3
> quiet | Kneel and take the tag, and say nothing. | pagoda_a3s3
> inquiry | Ask her whose name it is. | pagoda_a3s3
> deceit | Tell her you have lost your own tag, and ask for another. | pagoda_a3s3

=== pagoda_a3s3 | A Name You Do Not Use
The name on your tag is a man’s, old, and it means nothing to you. You say it aloud. The woman beside you breathes out, and her shoulders drop, and you realise she was holding her breath.
“He has not been said in eleven years,” she says. “He was my brother.” She does not turn her head. “They say the Lotus sends someone to hear it. You are very quiet for a pilgrim.”
Her hand slides a small paper into yours. On it, in a clerk’s hand, is a line:
Fourth floor. The host knows you are here. It is all right.
You had expected to be found out. You had not expected to be welcomed.
> truth | Thank her, and ask her brother's name, so you can say it again. | pagoda_a3s4
> mercy | Hold her hand for a moment. | pagoda_a3s4
> quiet | Fold the paper into your sleeve. | pagoda_a3s4
> inquiry | Ask how long the Lotus has been sending someone. | pagoda_a3s4

=== pagoda_a3s4 | Turning the Tables
You could go up as yourself. You decide, instead, to turn the thing inside out. At the top of the stair you drop the hood, and push the door open, and say in a voice that carries, “I come from Madam Ash.”
It is nonsense. It is also the only sentence that would make the room go still. The tea house is a long lacquered hall of brown-robed figures at low tables. Heads turn. A woman in a faded apron stops with a cup halfway to her mouth. At the far end, a small grey man in a clerk’s robe rises slowly from his seat.
“Does she,” says Wen Rui, gently. “How is her health?”
> deceit | Say she is well, and that she sends her regards. | pagoda_a3s5
> truth | Say you spoke too quickly, and that you came on your own account. | pagoda_a3s5
> inquiry | Say you do not know. You were told not to ask. | pagoda_a3s5
> force | Say it is none of his business. | pagoda_a3s5

=== pagoda_a3s5 | A Question About Fire
Wen Rui comes down the room with the unhurried gait of a man crossing his own field. “Madam Ash has no health,” he says. “She has a scar. It runs from her left ear to her right hip, and she is vain of it. If you had met her you would know.”
He stops a pace away, and the lamplight shows the grey smudge on his forehead.
“You are the Wanderer,” he says. “Do not look so alarmed. I would have been disappointed if you had not tried. I have been pretending to be a clerk for twenty years. I recognise the effort.”
Behind him, someone in the room has begun, very softly, to laugh.
> truth | Admit it, and ask for the tea. | pagoda_a3s6 | +pagoda_met_wen
> deceit | Keep up the pretence a moment longer, to see how far it goes. | pagoda_a3s6 | +pagoda_met_wen
> quiet | Lower your hood and say nothing. | pagoda_a3s6 | +pagoda_met_wen
> mercy | Apologise, to the room, for the intrusion. | pagoda_a3s6 | +pagoda_met_wen

=== pagoda_a3s6 | What the Room Knew
They had known since you stepped off the barge. They had known when you took the cook’s cloak. They had known when you rowed alone. Ping laughs as she explains it, and it is not unkind. “The river tells us everything. Every barge is a gossip. A cloak is not a face.”
Wen Rui puts a cup in front of you. It is brown, not white. “I could not have asked for a better way to meet,” he says. “You have shown me what you do when frightened, which is to lie, and then to stop. It is a good thing to know in a bearer.”
He sits. The lamps settle.
“I will tell you the same thing I would have told you in a dozen disguises. The Concord is going to ask you to die.”
> truth | Ask him to say it plainly, and say who else knows. | pagoda_a3s7
> quiet | Sit, and drink the brown cup, and wait. | pagoda_a3s7
> inquiry | Ask how he is so sure. | pagoda_a3s7
> force | Tell him to stop telling you what the world will do. | pagoda_a3s7

=== pagoda_a3s7 | The Offer
The Offer is plain, and he makes it plainly. A place on the Ash Steppe where the list does not reach. A woman called Madam Ash who has seen what the Concord does with bearers. A chair, a cup, fifteen minutes. He asks nothing else.
“I should tell you what I told the others,” he says. “If you come, you will not be sworn. You will not be marked. You can leave whenever you like. The Lotus does not hold anyone. It is a hand held out. There is no more to it than that.”
He glances at the room. Several heads have bent; a nun with a shaved head is fingering her beads.
“I believe that is what makes the Concord afraid of it.”
> truth | Say you will go, if you can bring your friends. | pagoda_a3s8 | +pagoda_invite_yes
> inquiry | Say you will think on it, and ask for a way to send word. | pagoda_a3s8 | +pagoda_invite_maybe
> quiet | Bow, and say nothing. | pagoda_a3s8 | +pagoda_invite_maybe
> force | Say you will not be taken anywhere, and that is the end of it. | pagoda_a3s8 | +pagoda_invite_no

=== pagoda_a3s8 | A Candle for the Road
Ping presses a candle into your hand as you go. It is plain, unlit, tied with a tag. The name on the tag is your own. Or the name you would have, if you had one; the tag has been left blank, and then, in a hand you do not know, a single character added at the bottom: Wanderer.
“We keep a candle for everyone who comes,” she says. “It is not a promise. It is only a place at the table.”
You put it in your sleeve. It is warm.
On the barge, the cook asks for his cloak back. You give it up with a grave bow, and he asks nothing, and a handful of dried plums appears in your palm.
> truth | Eat a plum, and think about what you have seen. | pagoda_close | +pagoda_has_candle
> quiet | Stand at the rail and let the pagoda go by. | pagoda_close | +pagoda_has_candle
> mercy | Give the cook a plum back. | pagoda_close | +pagoda_has_candle
> inquiry | Ask the cook how he knew where you had been. | pagoda_close | +pagoda_has_candle

// ---------------------------------------------------------------- a4: from below
=== pagoda_a4s1 | The Drowned Floors
You row to the pagoda’s foot and tie up at the second window, a pointed arch just above the waterline. The first two floors are under the river. The third is half-flooded. You climb through the arch into the knee-deep gloom of what was once a library, and stop with your hand on the sill.
It is not dark. The water is clear, and the light from above falls through it in long slanting bars. On every wall, to the height of a tall man, names are carved. Hundreds, perhaps thousands: in tiny script, in large script, in the old script and the new, all of them struck through with a single clean line.
Gu, in the arch behind you, is very quiet.
> truth | Read the first name aloud. | pagoda_a4s2
> inquiry | Wade along the wall, reading the dates under each name. | pagoda_a4s2
> quiet | Stand still and let the water settle. | pagoda_a4s2
> mercy | Ask Gu to light a lamp, and to hold it where the water is deepest. | pagoda_a4s2 | bond:gu+1

=== pagoda_a4s2 | The Struck Wall
The dates are of a single year. They all fall within a month of the Sealing. Fourteen hundred and thirteen names, struck by the Concord at the request of the Azure Cloud Sect, in the thirty days after the jade went into the altar.
You count. You count again. It is not the fourteen you know. It is a hundred times more, and in a single month. The Law Hall did not seal fourteen. It asked for fourteen hundred to be erased, so that no one would remember who had been in the way.
There is a name you recognise, near your shoulder. It is the name Ye Qing, matron of the Orphans’ Terrace. Under it is a line: and the children in her keeping, numbers one to forty.
> truth | Read the line aloud, to the water. | pagoda_a4s3 | +pagoda_orphans
> inquiry | Search the wall for the number nine. | pagoda_a4s3 | +pagoda_orphans
> mercy | Reach out and touch the name, and the strike through it. | pagoda_a4s3
> quiet | Take a rubbing with the paper from your sleeve. | pagoda_a4s3 | +pagoda_orphans

=== pagoda_a4s3 | Number Nine
It is there. It is not a name. It is a number and a line, a half-inch from the wall, scratched with a pin. The line says: Nine. Withdrawn. Not struck. Not recorded. Not found.
Beneath it, in a neater hand, someone has added a word and then tried to scratch it away. You tilt the lamp. The word is: Safe.
The cold seed in your chest has begun, very quietly, to turn. You press your palm to it, and your palm is not steady. It is a single entry in a pagoda full of names. It is the first thing you have read all night that is about you.
Gu, at your shoulder, has stopped holding the lamp. “Is it...” he begins, and does not finish.
> truth | Tell him you do not know, and show him the line. | pagoda_a4s4 | +pagoda_nine_shown bond:gu+3
> quiet | Say nothing, and cover the line with your hand. | pagoda_a4s4 | +pagoda_nine_hidden
> mercy | Tell him it is nothing, and ask him to hold the lamp higher. | pagoda_a4s4 | bond:gu-1
> inquiry | Ask him whether he has heard the word 'Reserve.' | pagoda_a4s4 | +pagoda_nine_shown

=== pagoda_a4s4 | Down the Stair
The stair goes down. You had not meant to descend. But the water is thinner there, and clearer, and the names on the wall thicken, and at the bottom of the stair you can see a faint steady glow. Your feet carry you to it.
The first floor is a vault. It is almost dry, lit by a single oil lamp on a stone table. The ceiling is high and vaulted, and the walls are lined, not with names, but with cups: thousands of small bone-white cups on shelves, each with a name inked on its base.
The glow comes from a large cup on the table. It is clay, unglazed, rough and old. It is full to the brim with something clear, and it is steaming.
There is a footstep behind you, and a cough, politely.
> truth | Turn, and face whoever it is. | pagoda_a4s5
> quiet | Set down the lamp and wait for them to speak. | pagoda_a4s5
> inquiry | Ask the cup what it holds. | pagoda_a4s5
> force | Draw your blade and put the table between you. | pagoda_a4s5

=== pagoda_a4s5 | The Keeper of the Cups
It is Ping. She is standing on the bottom stair in her faded apron with a tray under one arm and a face that has spent a very long time being patient. She does not look surprised.
“You went looking in the wrong place,” she says. “Everyone does. They think the secret is in the names. It is in the cups.” She comes down, step by step, and sets the tray beside the lamp. “Every struck name is poured into a cup. The tea in the cup is the name. If it is drunk, the person drinking remembers.”
She nods at the clay cup on the table.
“That one is the oldest. It is not a name. It is the first of them.”
> truth | Ask her whose it was. | pagoda_a4s6 | +pagoda_ping_trust
> inquiry | Ask how the tea holds a name. | pagoda_a4s6
> mercy | Ask whether she has ever drunk from her own. | pagoda_a4s6 | +pagoda_ping_trust
> quiet | Say nothing, and look at the cup. | pagoda_a4s6

=== pagoda_a4s6 | Ping’s Cup
“I have my cup,” says Ping. “It is on that shelf, the third from the top. I have never drunk from it.” She does not look at the shelf. “I was struck eleven years ago. I do not know why. I only know that the day after it happened, I woke up and could not remember the face of my husband. I remember the fact of him.”
She stands very straight.
“The Hollow Lotus tells me that if I drink, I will remember. But I will remember what I did, and why I was struck. I have not yet decided if I would rather not know.”
She meets your eyes.
“Madam Ash says you can decide for me. Or you can advise. Or you can leave it.”
> truth | Tell her it is her cup, and her choice, and you will hold her hand either way. | pagoda_a4s7 | +pagoda_ping_trust
> mercy | Tell her not to drink, if it frightens her, and that her husband loved her. | pagoda_a4s7
> inquiry | Ask what she thinks she did. | pagoda_a4s7
> force | Tell her to drink, and be done with it. | pagoda_a4s7 | +pagoda_pushed_ping

=== pagoda_a4s7 | A Door in the Lamp
In the end she does not drink. She takes the cup down from the third shelf and holds it for a long time in her two hands. Then she sets it on the table beside the clay one and says, quite calmly, “Not today.”
She lifts her tray.
“You may take the first cup,” she says. “The old one. Madam Ash would want you to. It will not harm you. It will tell you one thing, and then it will be empty.”
The clay cup on the table is still steaming. It smells of lotus root, and rain on stone.
> truth | Take the cup and drink. | pagoda_a4s8 | +pagoda_cup_drunk
> quiet | Take the cup, and carry it up the stair without drinking. | pagoda_a4s8 | +pagoda_cup_carried
> mercy | Refuse, and say the cup should be kept for someone who needs it more. | pagoda_a4s8
> inquiry | Ask what the one thing is that it will tell you. | pagoda_a4s8

=== pagoda_a4s8 | What the First Cup Said
The tea is warm and tastes of nothing. For a moment you feel nothing. Then a voice, small and clear, speaks inside your chest: not Mengjiao’s, not the river’s, but one you have never heard. A girl’s. Very young.
It says: Nine was not alone. Eight went with her. One came back for her.
It is all it says. The cup, in your hand, grows light, and when you look it is dry, a plain clay cup with a hairline crack.
Ping receives it from you gently. She sets it on the shelf with the others, and nods once.
“Now you have the thing you came for,” she says. “Whether you knew you came for it or not.”
> truth | Thank her, and promise to come back when you understand it. | pagoda_close | +pagoda_ping_trust
> mercy | Ask if there is anyone she would like you to say a name for. | pagoda_close | +pagoda_ping_trust
> quiet | Take the rope up to the barge, and say nothing. | pagoda_close
> inquiry | Ask how many struck names the vault holds. | pagoda_close

// ---------------------------------------------------------------- hidden route: the nine wicks
=== pagoda_h1 | Nine Rules
Below the third floor the water is black. The skiff cannot go farther. You stand on the sill of a drowned stair with the basket of wicks in your hand and the lantern unlit at your hip, and the dark below you is the dark of the abyss path, wet and complete.
Old Lin’s first rule comes to you without trying: Never light a wick for a name you will not say.
You set the first wick in the lantern. You say a name aloud: the girl of fifteen, the fourteenth, who said she was not dead, only listening. The flame catches at once, small and blue, and does not waver in the damp.
Behind you, Gu whispers, “It’s not smoking.”
> truth | Say a second name, and light a second wick. | pagoda_h2
> quiet | Step down the stair by that one light, and say nothing. | pagoda_h2
> mercy | Hold the lantern low so Gu can see the steps. | pagoda_h2
> inquiry | Ask Gu if he remembers the rest of the rules. | pagoda_h2

=== pagoda_h2 | Never Speak Over a Lit Wick
Rule four is the one that matters. The dark has a voice, and the voice is a chorus, a murmuring of those who have been struck, whispering as water whispers over stones. It asks you things. It asks your name. It asks where you are going, and who you are with, and whether you are cold.
Every question has an answer, and every answer is a thing you could say.
You hold the lantern. You do not speak. Behind you Gu has put his hand over his own mouth, and Ren Qiao, who came after, is breathing through his nose with his jaw clenched. The flame stands very straight.
The chorus grows quieter. It does not go away. It stays, listening, at the edge of the light.
> quiet | Descend, silent, step by step. | pagoda_h3 | +pagoda_kept_four
> truth | Break the rule, and answer one question, to see what happens. | pagoda_h3 | +pagoda_broke_four
> mercy | Put your free hand on Gu's shoulder to steady him. | pagoda_h3 | +pagoda_kept_four bond:gu+2
> inquiry | Listen to the chorus for a count of ten. | pagoda_h3 | +pagoda_kept_four

=== pagoda_h3 | The Cup of Names
The stair ends in the vault. The wick is burning down, and the cups on the shelves are glowing, one after another, as the flame goes past them, white with a thread of blue at the lip. In the centre of the floor, on a stone table, stands a single cup of unglazed clay, steaming.
You do not need Ping to tell you what it is. You can feel it in your teeth.
“Share the light,” you say aloud. It is the fifth rule. Beside you Gu lifts his own wick from the basket. It catches from yours, and the two small flames stand side by side, and the vault, which was holding its breath, lets it out.
The cup moves toward you, a half-inch, across the stone.
> truth | Take the cup, and drink. | pagoda_close | +pagoda_cup_drunk +pagoda_cup_hidden
> quiet | Take the cup, and carry it up the stair without drinking. | pagoda_close | +pagoda_cup_carried +pagoda_cup_hidden
> mercy | Give the cup to Gu to hold, and ask him to decide. | pagoda_close | +pagoda_cup_carried +pagoda_cup_hidden bond:gu+4
> inquiry | Ask the vault what it wants in return. | pagoda_close | +pagoda_cup_drunk +pagoda_cup_hidden

// ---------------------------------------------------------------- close
=== pagoda_close | A Cup Poured and Left
The pagoda dwindles behind the barge until its lantern is one gold bead in the haze, and then not even that. The river runs on, and the deck is quiet but for the sounds of a boat being a boat.
+[inv] pagoda_invite_yes | You told the Lotus you would go to the Ash Steppe, if your friends could come. The words feel like a coin already spent.
+[inv] pagoda_invite_maybe | You told the Lotus you would think on it. You think about little else.
+[inv] pagoda_invite_no | You told the Lotus no, and have heard the word in your own voice all afternoon.
+[wen] pagoda_wen_friend | You told Wen Rui you would remember his name. His hands shook.
+[wen] pagoda_met_wen | A small grey man in a brown robe now knows what you are.
+[cup] pagoda_cup_drunk | The first cup spoke, and was empty. Nine was not alone. Eight went with her. One came back for her.
+[cup] pagoda_cup_carried | You carry the first cup undrunk, wrapped in the cook’s cloth. It is warm.
+[cup] pagoda_has_candle | A candle with a blank tag sits in your sleeve, and one word on it in a stranger’s hand: Wanderer.
> truth | Tell the Elder where you went, and everything you heard. | pagoda_close2
> quiet | Keep it to yourself, for now. | pagoda_close2
> mercy | Go and sit with Gu, who has been quiet for hours. | pagoda_close2 | bond:gu+2
> inquiry | Find Duan Wuyi, and ask what the Concord knows of the Hollow Lotus. | pagoda_close2

=== pagoda_close2 | Who Hears
The barge moves on in the long light of evening. By the cabin door, three people are conducting an elaborate pretence of not waiting for you. Elder Su is mending a sleeve. Ren Qiao is oiling his lantern. Duan Wuyi sits in the shade of the awning with a chessboard and a cup of tea he is not drinking.
Whom you tell is a question of weight. The Elder carries too much already. Duan carries the Concord. Ren has seen it with you.
+[c] pagoda_ping_trust | Ping’s untouched cup sits on its shelf, and her trust sits on you.
+[c] pagoda_told_mei | Mei Qiu did not see which way you rowed. She wants it understood that this is a loan.
+[c] pagoda_nine_shown | Gu knows what the pin-scratch said. He sits closer to you at table.
+[c] pagoda_nine_hidden | You covered the line on the drowned wall with your hand. It is still under your palm.
+[c] pagoda_orphans | Forty children on a drowned wall, numbers one to forty, and the matron who kept them.
+[a] pagoda_a1 | You went to the pagoda openly, and the Elder let you. It is the nearest she has come to trust in a week.
+[a] pagoda_a2 | You went up the dark stair with a warden at your side, and found no fight at the top.
+[a] pagoda_a3 | You lied in a cook’s cloak, and were seen through at once, and kindly welcomed anyway.
+[a] pagoda_a4 | You went below the names, and found a cup waiting.
+ pagoda_cup_hidden | Nine rules and a basket of wicks took you down where the skiff could not go.
+[d] pagoda_kept_four | Nobody spoke over a lit wick, and the dark has not forgotten the courtesy.
+[d] pagoda_broke_four | You answered the dark once, aloud, and it knows your voice now.
+[d] pagoda_pushed_ping | You told Ping to drink, and be done. She has not looked at you since.
> truth | Tell the Elder, all of it, with Ren Qiao as your witness. | hub_b2_road | +b2r_pagoda +pagoda_told_su npc:SU_PAGODA_TOLD
> inquiry | Tell Duan Wuyi, and watch his face. | hub_b2_road | +b2r_pagoda +pagoda_told_duan
> quiet | Tell no one, and sit with the board. | hub_b2_road | +b2r_pagoda +pagoda_told_none
> mercy | Tell Ren Qiao, who was there, and no one else. | hub_b2_road | +b2r_pagoda bond:ren+3
`,
  scenarios: String.raw`
$ SU_PAGODA_TOLD | trust+3 fear+5 respect+3 | elder | The player tells the Elder everything that was said at the Drowned Pagoda.
hostile: You tell me a house of the struck has invited you to its table. I am obliged to hear it. I am not obliged to be grateful. I shall remember that you came to me, and not to them, and decide what that means.
wary: The Hollow Lotus. I have been told of it in whispers for ten years. I did not think it would take the shape of a pot of tea. I thank you for the telling, and I ask you not to go.
neutral: A house in a drowned pagoda, a clerk with a faded mark, a woman called Madam Ash. I know the name. She was a Censor. I knew her when I was Registrar. She told me once the Concord was a house with no doors. I thought she was a fool.
warm: You came to me. After all the nights I have lain awake wondering whether you would. I will not tell you what to do. I will tell you that I know Madam Ash, and she is not what the Concord says, and she is not what the Lotus says either.
devoted: Wanderer. You have put into my hands the one thing I was afraid to ask for. I will think on it. Do not decide anything without me. I am so tired of deciding alone.
? tone:truth>=3/5 | You tell me the whole of it, plainly, as you have told me everything since the mountain. I find I am no longer surprised that you are honest. I am only surprised that I am able to hear it.
`,
  remarks: String.raw`
% pagoda_su_after | since:pagoda_told_su>=8 | elder | You told me all of it, and I have not yet decided what I think. I have decided that you were right to tell me, and that is the part I can act on.
% pagoda_duan_after | since:pagoda_told_duan>=8 | duan | You told me of a house in a drowned pagoda. I have known of it for six years. I did not know the host kept a cup for the Elder. I shall remember that you told me.
% pagoda_none_after | since:pagoda_told_none>=10 | elder | You have the look of carrying a thing you have not set down. I wore it for fifteen years. When you wish to put it on the table, I will make room.
% pagoda_ping_later | since:pagoda_ping_trust>=18 | elder | A woman named Ping sent a cup downriver with a fisherman. White, with a blank base. She wants me to write my own name on it, and I have not yet found the courage.
% pagoda_candle_later | since:pagoda_has_candle>=12 | elder | You are carrying a candle with no name on it. I saw it in your sleeve. I have not asked what it is for. I would like to think that was manners.
% pagoda_wen_later | since:pagoda_wen_friend>=20 & bond:ren>=8 | ren | I have been thinking about a clerk with a faint grey mark on his forehead. A warden is trained to think of such a man as a danger. I find I think of him as a colleague.
`,
};
