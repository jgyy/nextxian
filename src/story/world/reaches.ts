import type { ReachSpec } from "./spec";

/**
 * The ten reaches of the world, in the order of the story: ten places from which word comes in of what is happening beyond the mountain. Each opens
 * from a scene a hero passes by anyway, and each holds four affairs that go on whether or not anyone goes to them.
 */
export const REACH_SPECS: ReachSpec[] = [
  {
    id: "wayside_world_terraces",
    title: "World Roads: The Terraces Below the Mountain",
    paragraphs: [
      "Below the third wall the terraces run down to the river in steps, and every step belongs to someone with an opinion about the sect. Four things are afoot down there that no sect clerk has put in a report, because the clerks do not come below the second wall.",
      "You can go and see any of them, or none. The terraces will do what they do either way, and the barley will be cut whoever stands in it.",
    ],
    back: "You climb back from the terraces to the third bend of the foothill road in the long light. Behind you a bench has been put under the tea stall’s awning since the morning, and the old men on it fall quiet as you pass, and then go on.",
    origin: "village_return",
    label: "Look down from the village the way the farmers do, at what is going on below the third wall of the terraces.",
    realm: 0,
    seasons: [
      "The first frost is still a week off, and the terraces are busy with the harvest and the arguing that goes with it.",
      "A season has gone down the terraces since the first word, and the arguments are older, the hands tireder, and the quiet in the yards has set.",
      "The terraces have gone round a full year of their own affairs while you were elsewhere, and what was a quarrel is now simply how things are.",
    ],
    remark: "Four things below the third wall, and you have been down to all four. I am told the village has begun to count the days by your visits. I do not know whether to be alarmed. I find I am proud, which is worse.",
    gathering: {
      answered: "The terrace families come up the mountain road with baskets, four hundred of them, in their good coats, and set them down at the gate without a word. It is the first time anyone from below the third wall has come up the hill because they wished to.",
      unanswered: "From the terraces no one comes. They have their own winter to get through, and the sect has never once come down to ask how it fares.",
    },
  },
  {
    id: "wayside_world_stairs",
    title: "World Roads: The Pilgrim Stairs",
    paragraphs: [
      "The pilgrims’ path up the Eastern Peak has four landings, and each has a hostel, a shrine and a keeper who has never been asked what the keeping costs. Word comes down the path with the pilgrims, a landing at a time, and some of it is true.",
      "Four matters have come down in the last month. A pilgrim at the hostel door has put the list in your hand, and gone back up without waiting to see what you do with it.",
    ],
    back: "You come down the cut steps through the cypresses as the light goes. The pilgrims on the path above you are lighting their small lamps, one landing at a time, and you can see the whole mountain by them.",
    origin: "hermit_return",
    label: "Take the list a pilgrim has left for you, of four matters on the Eastern Peak path that nobody has put in a report.",
    realm: 1,
    seasons: [
      "The pilgrims are coming up in strength with the autumn, and every landing is full and every keeper short-tempered.",
      "The path has had a season of weather, and what was mere grumbling at the landings is now a habit of the mountain.",
      "The path has been walked a whole year since the first word of these things, and the pilgrims who go up no longer ask what was done.",
    ],
    remark: "The hermit sent me a second gourd of his wine. He wrote only: the boy sleeps indoors. Four matters on the Eastern Path, and I had not heard of one of them. I find I am very glad of a hero I did not send.",
    gathering: {
      answered: "The pilgrims of the Eastern Peak come down by all four landings in a long thin line, each with a small lamp, and light them one by one along the Sealing road. They say it is for the hostel. They say it is for the boy. They do not say it is for you.",
      unanswered: "The Eastern Peak sends a message, brief and courteous: the pilgrims regret that they cannot come down. The path has had a hard season, and the landings need the hands.",
    },
  },
  {
    id: "wayside_world_quarry",
    title: "World Roads: The Quarry Country",
    paragraphs: [
      "Under the archive, past the slag heaps and the shut pay-hut, the quarry country runs out in a scatter of huts, kilns and cart-roads, and every one of them belongs to someone who was told the quarry would last forever. Word from the quarry country comes on the carters’ tongues.",
      "Four things are being said on the cart-road this week, in four dialects of complaint. The carter who tells you about them has the look of a man who has told it to three others already and is saving his best for the fourth.",
    ],
    back: "You come up out of the quarry country to the Reading Room door, with the lime-dust in your hair and your ear still full of the carters’ voices. The archive is exactly as you left it, and you are not.",
    origin: "quarry_return",
    label: "Stop the carter on the quarry road and hear his four complaints, out loud, to the end.",
    realm: 1,
    seasons: [
      "The quarry is two months shut, and the huts are still full of men who have not decided yet whether they are out of work.",
      "The quarry has been shut a long time now, and the huts have emptied by half, and those who are left have stopped saying when it will open.",
      "The quarry country has quietly become a place where quarrying used to happen, and the people in it are making other plans.",
    ],
    remark: "The quarry country, all four. I did not know the cutters had a spokesman until you told me his name. I have asked the treasurer to find the other two hundred, and he has asked what I mean.",
    gathering: {
      answered: "The cutters come up from the quarry country on foot, with their hammers on their shoulders, two hundred of them, in their working clothes. They stand in a block at the gate with the grim patience of men who know how to hold a roof up, and say they have come to help.",
      unanswered: "The quarry country sends word that it is sorry. The cutters are looking for work, the widows are pulling their own cart, and the lime-burners have their own cough to see to.",
    },
  },
  {
    id: "wayside_world_gap",
    title: "World Roads: The Neighbour Sects of the Cloud Gap",
    paragraphs: [
      "Across the Cloud Gap lie the lesser sects, a dozen of them, each on its own peak and each convinced the others are about to fall. The Concord counts them as one line in a report. They count each other as the weather. News of them comes across the bridge with the carters, and always late.",
      "Four neighbours have sent word, in four hands, each asking for something it would be ashamed to name. A boy in a borrowed robe waits on the bridge-head with the letters.",
    ],
    back: "You cross back from the bridge-head with the neighbours’ letters folded in your sleeve. The bridge sings its clear note under you, and the span, for once, does not move.",
    origin: "bridge_return",
    label: "Take the four letters from the boy at the bridge-head, from the lesser sects across the Cloud Gap, and read them where you stand.",
    realm: 2,
    seasons: [
      "The sects across the Gap are in the middle of their autumn proving, and the peaks are noisy with drums and the smell of hot oil.",
      "A season has passed on the far peaks, and what were small ambitions have become habits, and what were habits have become grievances.",
      "A year has gone round across the Gap, and the lesser sects are about as they were, only more so.",
    ],
    remark: "The lesser sects across the Gap have never been so well known to one another. Four of them have written to ask how you did it. I have told them I do not know. I have told them to ask the boy with the letters.",
    gathering: {
      answered: "The lesser sects send their juniors, three from each peak, in borrowed robes, carrying lanterns. They are a ragged, cheerful, ill-matched company. Their elders have not sent them. They have simply come, as a boy comes who has been told it is not his business.",
      unanswered: "The lesser sects across the Gap send a joint letter, polite and brief, regretting that the season is bad for travelling. A postscript, in a different hand, says the boy at the bridge-head has asked after you.",
    },
  },
  {
    id: "wayside_world_river",
    title: "World Roads: The River Provinces",
    paragraphs: [
      "The river provinces keep their business in ledgers: registers, rolls, books of weights and of names. The Censors read the books, and the people in them are the last to hear. A ferry-stage clerk with more conscience than rank has copied four entries out for you.",
      "He puts them in your hand and goes back to his window. Four ordinary matters of the river, none in any report, each with a name beside it that is not yet a case.",
    ],
    back: "You come back from the ferry-stage to the road with the clerk’s copy folded small. The river slides by at your elbow, brown and quick and full of other people’s paper.",
    origin: "willow_close2",
    label: "Take the clerk’s four copied entries, from the river provinces’ books, and read where each leads.",
    realm: 3,
    seasons: [
      "The river is high with the autumn rains, and the provinces are busy counting the harvest and what it owes.",
      "The river has gone down and come up again since the clerk’s copy, and the books that were open are shut, and those that were shut are being read.",
      "The river provinces have gone round a year of audits since the first copy, and nothing in them looks the way it did on the page.",
    ],
    remark: "The Censors have a new habit of asking who read the margins. I do not tell them. I have not been asked who taught you. If I am, I shall say that I do not know, and I shall be believed, because it is true.",
    gathering: {
      answered: "A flat river barge comes up to the foot of the mountain with a clerk, a baker, a weaver and a very small girl on it, and they climb the road together. The clerk carries a book. The baker carries a loaf. The girl carries nothing, and holds your sleeve when you meet them.",
      unanswered: "The river provinces send a letter by the Concord’s post, correct in every form. It regrets that no one can be spared. The books are open, it says, and the audit is in progress.",
    },
  },
  {
    id: "wayside_world_coast",
    title: "World Roads: The Salt Coast",
    paragraphs: [
      "The Salt Coast is a long grey shore of harbours, pans and coves, with a lamp at every point and a story under every lamp. The wind is salt, the talk is salt, and word comes in on the tide in bottles, in nets and on the lips of the old people who sit at the harbour wall.",
      "Four tides have turned since the old woman at the net-loft began telling it. She does not ask you to do anything. She tells it, and when she has finished, she looks at your boots.",
    ],
    back: "You come back along the sea-wall to the lamp as the tide turns. The old woman at the net-loft raises one hand without looking up, and goes on mending, and the Salt Lamp comes on above her.",
    origin: "lamp_close",
    label: "Go down from the Salt Lamp to the net-loft stove below it, and let the old woman there tell you the four things the coast has kept from the Concord.",
    realm: 3,
    seasons: [
      "The autumn tides are high and the coast is full of boats, and the pans are white with the last of the season’s salt.",
      "The tides have turned many times since the first telling, and the coast is stiller and greyer, and what was said in whispers is said aloud.",
      "A full year of tides has gone by on the coast, and the Concord’s cutters have left, and the people say what they like.",
    ],
    remark: "The coast has begun to say your name at the harbour wall, neither kindly nor unkindly, as it says the tide’s: a thing that comes in. I have been the most feared name in a room. I find I am envious.",
    gathering: {
      answered: "The coast sends its boats. Forty fishing smacks lie off the foot of the mountain river-mouth, hung with lanterns, and a long line of people comes up the road carrying nets and wet paper. They do not say what the paper is. They hold it up like candles.",
      unanswered: "The coast sends a bottle, corked, with a note in it. It says that the tide has been very high and the cove’s roofs are down, and that the people send their good wishes, and would like to have sent more.",
    },
  },
  {
    id: "wayside_world_steppe",
    title: "World Roads: The Ash Steppe",
    paragraphs: [
      "The steppe has no walls and no roads, but it has a post, and the post has a messenger, and the messenger is on a horse with a cloth tied to its mane. Everything on the grass is known, eventually, to everyone on it, and the order in which it is known is the Listeners’ business.",
      "A Listener has ridden in at dusk with four knotted cloths, one for each matter, and set them on your knee without a word. Each knot is a person.",
    ],
    back: "You ride back out of the grass to the felt-tents of the camp at dusk. The wind has the smell of the next season in it, and a rider on the horizon lifts one hand, and lets it fall.",
    origin: "camp_close",
    label: "Take the four knotted cloths from the Listener who has ridden in at dusk, and read each knot with your thumb.",
    realm: 4,
    seasons: [
      "The summer grass is still green on the near ridges, and the clans are moving their herds up, and the Listeners ride from camp to camp with the news.",
      "The grass has yellowed and the first frost has come, and the matters that were small talk at the fires are now what the whole steppe is waiting on.",
      "A full year of the grass has turned, and the clans have moved on, and the Listeners tell the matters as histories now, not as news.",
    ],
    remark: "The Listeners have spoken of you at every fire from the Bend to the Stones. They use the word that means ‘one who stayed to hear the end’. I did not know it could be said of someone who is not a Listener.",
    gathering: {
      answered: "The steppe rides to the foot of the mountain in a long loose column of ponies and felt-tents, clan after clan, and the Listeners at their head. They set up their camp on the lower terraces and light their fires in a ring. The wind carries their song up the slope.",
      unanswered: "The steppe sends no riders. A single Listener comes, alone, on a grey pony, with a cloth tied to its mane, and stays a night, and says only that the grass is long and the road is far, and the wind has not yet decided.",
    },
  },
  {
    id: "wayside_world_glass",
    title: "World Roads: The Shore and the Camps",
    paragraphs: [
      "On the shore of the Glass Sea and in the camps at the foot of the Stair a whole town has grown up in tents and wrecks. Everything in it is for sale and most of it is for rent, and the news of it travels with the skiffs, which carry nothing else.",
      "Four matters have been chalked on the camp’s notice-wall by four different hands. The chalk is fresh. A girl on a skiff’s roof is watching to see if you read them.",
    ],
    back: "You come back from the notice-wall to the line as the glass goes violet. The girl on the skiff’s roof is gone, and the chalk on the wall is a little smudged, as if by a sleeve.",
    origin: "pilgrims_close",
    label: "Read the four matters chalked on the camp’s notice-wall, in four different hands, while the girl on the skiff’s roof watches.",
    realm: 5,
    seasons: [
      "The shore is full of skiffs and pilgrims, and the camps are crowded with the autumn tide of those who came to climb.",
      "The shore has had a long season of glare and glass-storm, and the camps have settled to a weary kind of permanence.",
      "The shore has gone round a full year of the Stair’s seasons, and the camps are less a camp than a town that has not yet been named.",
    ],
    remark: "The shore of the Glass Sea is not a place that speaks of its debts. It has spoken of yours. A girl on a skiff roof has told the Weighing-hall that a stranger read the chalk. I cannot tell you how seldom that happens.",
    gathering: {
      answered: "The skiffs come in at dawn, forty of them, over the glass, with all their sails set, and anchor in a line at the foot of the river. The wrights, the apprentices, the diviners and the pilgrims come ashore in a long file, and the girl from the skiff’s roof is at their head, holding a rope.",
      unanswered: "The Glass Sea sends a single skiff, with a single sail, and one passenger, who gives a letter to the first person she sees and goes back on board. It says only that the glass is hot this year, and the work is hard.",
    },
  },
  {
    id: "wayside_world_tiers",
    title: "World Roads: The Nine Tiers",
    paragraphs: [
      "The Heavenly Stair is nine tiers high, and each tier has its own custom, its own warden and its own idea of the one above. News flows down the Stair as water does, in rills, and arrives at the bottom altered by its passage. A climber on the summit terrace has stopped to give you the unaltered version.",
      "He tells it quickly, in a low voice, like a lesson. Four matters. Asked which is the worst, he says that depends who is climbing.",
    ],
    back: "You come down off the summit terrace to the Stair’s upper flight. The climber has gone ahead of you, and does not look back, and his shadow on the white steps is very long.",
    origin: "tiers_close",
    label: "Hear the climber on the summit terrace out, who has the unaltered version of what is happening on the nine tiers.",
    realm: 5,
    seasons: [
      "The Stair is at the height of its season, and every landing is full of climbers, and the bells of the landing tolls ring all day.",
      "The Stair has had its season, and the landings are thinning, and what was the rush is now a trickle of the stubborn and the late.",
      "The Stair has gone through a whole year of climbing, and the tolls are as they were, and the climbers do not look at them.",
    ],
    remark: "I have been Elder twelve years and did not know the Stair had tolls. You stood a long time at its first admission. I wished to ask what you read beneath it. I think you saw.",
    gathering: {
      answered: "From the Stair come the climbers who were turned back, the wardens who were not, a cook with a ladle, a keeper’s girl with a wax-pot and a grey porter with an empty frame. They climb the last of the mountain road together, with their small gifts, and nobody asks them what they are for.",
      unanswered: "The Stair sends a bell. A single bronze bell, wrapped in cloth, carried by a lay brother who does not give his name. It is the bell of a landing’s toll-bowl, and it has a note that does not ring true. He asks that it be hung on the gate, and goes away.",
    },
  },
  {
    id: "wayside_world_home",
    title: "World Roads: The Foot of the Shut Sect",
    paragraphs: [
      "At the foot of the shut sect the road goes up in a spiral, and beside it the village has become a camp. Everyone who cannot get in has come to wait: outer disciples, families, kitchen-boys, the hungry. They know a great deal about what goes on inside. They know it by the smoke.",
      "Four matters have grown up in the wall’s shadow. The tea-woman has set them on her counter like cups, and puts a fifth in front of you, which is tea.",
    ],
    back: "You come back down the spiral road to the tea stall in the last light. The wall behind you is black against the cloud, and the stall is lit, and the woman has kept the cup warm.",
    origin: "archive_close",
    label: "Take the tea the tea-woman pours, and the four cups she has set in order on her counter, one for each matter at the foot of the shut sect.",
    realm: 6,
    seasons: [
      "The sect has been shut a few days, and the camp at the foot has the busy, frightened energy of a place that has not yet understood how long it will last.",
      "The sect has been shut a month, and the camp has put down roots: tents have become huts, and nobody speaks of leaving.",
      "The sect has been shut a long time, and the camp at the foot has become a village, with its own laws and songs.",
    ],
    remark: "I have watched the foot of my own sect from the Law Hall window for forty days, and I am told you went down. I should like to say that I am grateful. I have not the voice. Take the thought as given.",
    gathering: {
      answered: "The foot of the sect empties onto the mountain road in a long procession: the outer disciples in their undyed robes, the families with their cold hearths, the kitchen-boys, the tea-woman, the gate-porter with his book. They come up with their lamps unlit, in the dusk, in silence, and take their places on the steps.",
      unanswered: "The foot of the sect keeps to the foot. The tea-woman sends up a basket, and a note: they are not able to come. There is too much to do below. They will watch from the village, and light a lamp, and hope.",
    },
  },
];
