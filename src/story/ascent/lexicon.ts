/**
 * What is written by hand for the Breakthrough Roads: for each of the hundred walls of the ladder, the station where the wall is met, what passes it, what the
 * Elder says of it and what it leaves behind; and for each realm, how its four ways of going at a wall look, how it rests, and what the Elder says at its walls.
 * The wall itself, and what breaking it or falling from it feels like, are the engine’s own (`LAYERS`), so the road and the log never say different things.
 */
export type WallLex = readonly [station: string, key: string, counsel: string, echo: string];

/** Ten rows for each realm, the wall above each of its ten layers. The station begins with its article, in lower case. */
export const WALL_LEX: readonly (readonly WallLex[])[] = [
  // 0 · Mortal: the Tempering Yard
  [
    ["the first cold trough", "let the flesh be struck and not flinch", "Flesh is stubborn, Wanderer. It remembers every blow as an insult, and only forgives the ones it was ready for. Be ready, and it will.", "a bruise the colour of a plum, already fading"],
    ["the pull-bar under the eaves", "hang until the sinews give, and not before", "Do not pull until you tear. Pull until your own arms tell you to stop, and then pull one breath more.", "a rope-burn across both palms"],
    ["the stone-carrying path", "carry the weight until the bones ring", "Bone does not hurry for anger. Carry the stone as you would carry a sleeping child: steadily, and without telling it how heavy it is.", "a dull ache in the long bones that is almost a comfort"],
    ["the ice-pool at the yard’s end", "sit in the cold until it becomes a teacher", "I sat in that pool a night for every year I thought I was clever. The cold teaches fastest to those who have stopped arguing with it.", "frost on your eyelashes, and a faint warmth behind it"],
    ["the bench by the pulse-drum", "slow the heart without frightening it", "A heart is a frightened animal that has been told it is a clock. Do not command it. Sit with it until it believes the room is safe.", "your own pulse, loud as a drum in the quiet"],
    ["the counting-stones", "count nine hundred breaths without a thought of supper", "Nine hundred is nothing. It is the supper that is the wall. Eat first, if you must, and count with a quiet stomach.", "a cleared head and a stiff neck"],
    ["the fasting-mats", "fast until you can hear the inner rooms", "Hunger is a liar and a teacher both. Listen for what it tells you that is true, and let the rest go by like weather.", "an emptiness that is also a clarity"],
    ["the gate-stone", "stand to be seen by what is not you", "Something looks back. It is not hostile. It is only unused to being looked at in return.", "the sense of having been watched kindly"],
    ["the draught-hole under the door", "stop holding on to being the only thing that is here", "The thread is in the room, Wanderer. It has been in every room you ever slept in. Put down the idea of yourself, and it will find you.", "a hair-fine cold at the fingertips"],
    ["the threshold of the yard", "ask the qi of heaven and earth to stay", "After this you are no longer something that happens to the world. You are something the world must make room for. I do not say it is easier.", "the smell of rain, though the sky is clear"],
  ],
  // 1 · Qi Condensation: the Thread-House
  [
    ["the first winding-post", "gather a second thread beside the first", "A thread is only a thread until another lies beside it. Do not hurry the second. It comes to the first, not to you.", "two threads, thin as whiskers, humming"],
    ["the skein-rack by the window", "wind the cord without letting it tangle", "Winding is patience made visible. If it tangles, you were thinking about the tangle.", "a sore place behind the eyes"],
    ["the three-peg frame", "cross three strands with one attention", "You have one hand and three strands. The trick is that the strands know where to go. You have only to let them.", "the faint rhythm of a plait down your spine"],
    ["the tension-beam", "draw the braid tight and not break it", "Tight is not hard. Tight is true. A rope that is hard snaps.", "a hum in the teeth"],
    ["the stone channel by the door", "let the rope become water", "You have held on to everything since you were born. This is the first thing you are asked to let go of, and it is the easiest, and no one believes me.", "cold, wet fingers that are quite dry"],
    ["the map-wall of the meridians", "lead the stream through the twisted channels", "The diagrams lie a little, to be kind. Your body is the true map. Walk it slowly.", "a tingling that follows the inner arm"],
    ["the still basin", "let the qi gather and be deep", "Stillness is the hardest motion. Do not try to be still. Allow the stillness to find you.", "a deep, level calm in the belly"],
    ["the east window at dusk", "rise and fall with the world’s breathing", "You are not the ocean, Wanderer. You are a cup on the shore. Be a cup that notices the tide.", "a sense of the hour without looking"],
    ["the brim-bowl on the high shelf", "hold more than the vessel was built for", "Carry it like a bowl of oil to an altar. Do not look at the oil. Look where your feet are going.", "a fullness that is almost a pain"],
    ["the sand-floor at the end of the house", "press the scattered qi into a level floor", "Sand is a mess until it is pressed. The pressing is a long, dull, necessary labour. Do not look for glory in it.", "the smell of wet stone"],
  ],
  // 2 · Foundation Establishment: the Mason’s Court
  [
    ["the chalk trench", "lay the first row true, stone by stone", "A crooked stone is cheap to remove today and dear in ten years. Remove it today.", "chalk on your knees"],
    ["the arch-frame", "bridge the gap with attention alone", "A lintel is trust, laid across emptiness. The first one is the frightening one.", "the feel of an arch above you"],
    ["the standing-stones", "bear weight without flinching", "A pillar does not decide what it carries. Neither will you, from now on.", "a straight back that does not feel straight"],
    ["the joiner’s bench", "join the parts built apart, by cutting and fitting", "Do not force a joint. Cut it, and fit it, and cut it again, until it closes without being asked.", "a snug click deep in the bones"],
    ["the levelling-table with its bead", "find the low place and fill it", "You will not find it with your eyes. Roll the bead, and believe the bead.", "a stillness that lies perfectly flat"],
    ["the ward-wall", "close the house without shutting out the world", "A wall with a window is a better wall. Remember the window.", "an odd quiet in the ears"],
    ["the rafter-loft", "bear the weight of heaven’s own weather", "The sky is heavier than it looks. Lay your roof as if it knew.", "the pressure of a hand on the crown of the head"],
    ["the cold hearth in the middle of the court", "light a fire that is truly your own", "Everything you were taught is borrowed. The fire is the first thing that is not. Look for it where you would least expect it.", "warmth in the belly, small and stubborn"],
    ["the open arch", "choose the right last stone", "You will know it when it fits, and not before. Do not mistake a stone that is almost right for the one that is.", "a lock-click that is felt and not heard"],
    ["the cornerstone vault", "bear the crushing of the whole house into a point", "A house crushed is not a house destroyed. It is a house made into a jewel. It hurts like the other thing, and I will not lie to you.", "a heaviness at the navel like a swallowed coin"],
  ],
  // 3 · Core Formation: the Gold Forge
  [
    ["the seed-anvil", "strike the seed with your own will", "The hammer is not your arm. It is your attention, brought down at once. Practise on small things first.", "a ring in the belly"],
    ["the coal-pit", "feed the spark without drowning it", "Fire eats what it is given. Give it less than it wants, and often.", "a warmth that stays when you leave"],
    ["the slag-heap", "burn away everything borrowed", "What is left when the borrowed is gone is smaller than you hoped and more your own than you feared.", "ash on the tongue"],
    ["the leaf-table", "lay the gold in leaves with steady hands", "Breathe out as you lay a leaf. Never in. A trembling hand makes a wrinkle.", "the glitter of gold dust under your nails"],
    ["the black anvil-block", "find a conviction heavy enough to bear the hammer", "If you do not know what you believe, this is where you find out. Most people discover it is smaller than they said.", "the soreness of a belief that has been tested"],
    ["the quench-tank", "plunge into what you have been running from", "Do it at once, or not at all. A slow plunge is a crack.", "steam in the lungs"],
    ["the straw-bed of the warming-oven", "draw the brittleness back to springiness", "A blade that cannot bend is a blade that breaks. Learn to be soft in the right place.", "a flexibility you did not know you lacked"],
    ["the polishing-cloth", "put down the tools and look", "You will want to do one more thing. Do not. Sit, and look, and let the shine come to you.", "your own face, small, in a curve of gold"],
    ["the turning-stand", "remove the last unevenness, which is in you", "It is never the metal that wobbles. Find the place in yourself that is not round, and be gentle with it.", "a steady note, once, and then silence"],
    ["the cracking-room", "break the core to let the person out", "A mother does not choose when. She chooses only whether to be ready. Be ready. I will be outside the door.", "a small cry from within, and then quiet"],
  ],
  // 4 · Nascent Soul: the Cradle Gardens
  [
    ["the eyeless stone cradle", "open a lid that has never been lifted", "Do not look hard. Looking hard closes it. Look as one looks at a sleeping face.", "a red darkness behind the eyelids"],
    ["the bellows-cradle", "teach the soul to breathe without air", "It will cough. Let it cough. A first breath is always a small catastrophe.", "a laugh that was not yours, or not only yours"],
    ["the empty crib at the garden’s heart", "find it a place to rest in the sea of the mind", "Make the cradle of something warm. I will not ask what. Only do not make it of the things you are proud of.", "a quiet in the corners of the mind"],
    ["the low moss-bed", "let it move, and go the wrong way", "A soul that crawls will fall out of doors you did not know you had. Be patient when you call it back.", "the sense of small hands on the inside of the skull"],
    ["the stepping-stones", "let it fall, and feel the fall", "Do not catch it. You will want to. It must learn what the floor is.", "a bruise that is not on the body"],
    ["the whispering-wall", "find what you have been silent about", "It will say what you have never said. Do not argue with it. It is only a mirror that has learned to speak.", "the aftertaste of a word"],
    ["the garden gate, left ajar", "let it go out, and trust it to come back", "Tie the string loose, not tight. The tighter the string, the farther it runs.", "a window you do not remember opening"],
    ["the quarrel-bench", "bear its sudden tempers and its certainties", "It will shout at you in your own voice. Answer as you would answer a child you love, and not as you would answer yourself.", "a slammed door in a house of one room"],
    ["the account-table", "read what it has done, and what you did to it", "Read it all, Wanderer. Skipping a page is a lie you will meet again.", "ink on fingers that never held a pen"],
    ["the shear-stone", "decide which cords to cut", "Cut the ones that hurt least first. The last will be the ones you cannot name. I will tell you that at the end of the afternoon, and not before.", "a lightness that feels like absence"],
  ],
  // 5 · Spirit Severing: the Cutting Hall
  [
    ["the long table of blood-threads", "know exactly which memories you are cutting", "Do not cut in anger. Cut with the same hand you would use to bury someone you loved.", "the silence of a name that no longer stings"],
    ["the ledger-desk", "pay what can be paid, and let go of what cannot", "Some debts die with the creditor. Some are paid by being remembered. You will know which.", "a pocket that is lighter than it was"],
    ["the coal-brazier", "set down what you have kept warm", "A grudge is a pet that has been fed too long. It will whine when you put it out.", "the strange coolness of a room with the stove out"],
    ["the oath-stone", "speak the vow, and then its undoing", "A vow is not a cage. It is a promise made by someone who no longer exists. Honour that person, and release them.", "a sound like a latch in an empty corridor"],
    ["the mask-wall", "stand without a face before anyone", "You will be afraid of what you look like with nothing on. You are no one, and that is the beginning of being anyone.", "a face that feels borrowed, and then does not"],
    ["the net-loom", "cut a hundred threads of small warmth", "Home is made of things so small you never noticed them. The cutting is of the noticing.", "the smell of a kitchen far away"],
    ["the hourglass-shelf", "cut regret and hope with one blade", "They are the same animal wearing two coats. Take off the coats.", "an hour that feels as wide as a field"],
    ["the room without a mirror", "give up the story you tell about yourself", "I cannot tell you who is left. I can tell you it is more than you feared.", "a name you would not answer to"],
    ["the empty loom", "find the cord you were holding", "Look at your hands, Wanderer. The thing you cannot find is almost always the thing you are holding.", "an open hand that does not know what to do with itself"],
    ["the door of the hall", "stop turning toward anything but the Dao", "You have cut so much. What turns now is not what you were. I have never seen it twice the same.", "a direction, faint as a smell, in the north of the mind"],
  ],
  // 6 · Dao Seeking: the Switchback Stair
  [
    ["the first landing", "walk the grain without stepping aside", "The weather will come. Walk in it. A roof is a kindness and a delay.", "wet shoulders and a clear head"],
    ["the forked cairn", "choose between two goods", "Either road is right, and you will mourn the other. That is the price of having chosen at all.", "a door closing softly behind you"],
    ["the stepping-stone ford", "cross the water you could not cross", "It is colder than you think and shallower than you fear. Lean into the current. It is on your side.", "wet clothes steaming in the sun"],
    ["the first hairpin turn", "look back at what you did not understand", "Each turn shows you the last. Be forgiving of the one who climbed it.", "a view you could not have had from below"],
    ["the narrow col", "put down what will not fit", "You cannot carry it all. Choose, and do not look back at the pile.", "a lightness in the arms"],
    ["the cloud-shelf", "keep your eyes up when the cloud lifts", "It will show itself once. Do not look at your feet in that breath.", "the afterimage of a summit"],
    ["the scree-field", "walk without a road", "The path was only a rumour of other feet. You have feet of your own.", "grit in the boots and a calm in the chest"],
    ["the fog-saddle", "walk the silence without a direction", "You have heard it before. You will hear it again. In between, walk.", "the hush of a place where the Dao is quiet"],
    ["the lintel-stone at the top", "stand neither in nor out", "The edge is a place. People forget that. Stand in it, and be comfortable, and let the wind go through.", "a wideness, like the middle of a bridge"],
    ["the door at the end of the stair", "stop seeking, and stand at the door", "It will not open for wanting. I have wanted it for sixty years. Stand, Wanderer, and stop being a person who wants.", "a door-shaped quiet"],
  ],
  // 7 · Ascendant: the Open Door
  [
    ["the lintel of the standing door", "lift a latch that is already open", "Pretend it is locked. That is the whole trick, and the whole shame of it.", "cold iron in the palm"],
    ["the worn sill-stone", "cross without pausing", "Everyone pauses. I am not asking you not to. I am asking you not to make it a seat.", "the hollow of a thousand steps under the feet"],
    ["the draught beside the post", "breathe the air of the other side", "It will burn. Breathe through the burning. After that you will not taste the old air again.", "a taste like cold water and iron"],
    ["the foot of the stair with no top", "climb without knowing whether you arrive", "Do not count. Counting makes it a prison. Climb as you would walk to market.", "tired legs and an untired heart"],
    ["the head of the stair", "be shown everything, and look", "It will show you what you were, and what you did. Do not flinch. It is not a judge. It is a window.", "tears you did not decide to shed"],
    ["the white room", "hold your inner noise still", "A thought will come. Let it pass like a bird across a window, and do not follow it.", "the ringing of a very large quiet"],
    ["the crack of the door", "leave the crack as it is", "You will want to open it wider. The crack is the right size. It was always the right size.", "a blade of light on the floor"],
    ["the pivot-post", "bear the weight of others as a hinge does", "Someone is leaning on you right now, and does not know it. That is what a hinge is.", "a creak in the bones that is not pain"],
    ["the empty frame", "see that there was never a door", "It is only wood and sky, Wanderer. The terror is in thinking it was ever more.", "laughter that surprises you"],
    ["the empty doorway itself", "take the longest step in a life", "I will not walk you to it. No one can. I will be here, if there is a here to be.", "a ground that is a ground"],
  ],
  // 8 · True Immortal: the Long Garden
  [
    ["the gravel walk", "walk, and be heard in far places", "Walk lightly, but do not walk as if no one could hear. They can.", "a distant bell, still trembling"],
    ["the stone bench in the noon", "set down your history and stay standing", "You will feel lost without it. That is how you know it was heavy.", "a hand’s breadth of air under the soles"],
    ["the sundial that does not move", "let nothing be finished", "Do a thing slowly, and attend to it. The day has no evening. You may stop wanting one.", "a light with no angle"],
    ["the bare bed", "plant without a promise of harvest", "Plant for the pleasure of the planting. The harvest is something that happens to other people.", "dirt under the nails and a patient joy"],
    ["the winter plot", "invent a turn of the year", "You will be the only winter in it. Be a gentle one.", "frost-rime on a leaf that was green a moment ago"],
    ["the open lawn", "act as if unseen, though seen by all", "They are watching, and they are fond of you. Do not perform for fondness.", "a thousand quiet eyes, like warm rain"],
    ["the well of the past", "take back all that was cut, by the cup", "Not by the river. By the cup. Remember it, but do not drown in the remembering.", "the smell of a house you left long ago"],
    ["the sleeping field", "give a little of yourself and not take it back", "You will be poorer by exactly nothing. That is the strangeness of it.", "a stranger’s smile you will never see"],
    ["the empty orchard", "bear being the last who remembers", "You are not the last. You are the one who keeps. They are not the same loneliness.", "the quiet of an empty house kept clean"],
    ["the gate of the garden", "lift the Dao as a keeper, not a pilgrim", "It is not too heavy. It is simply not yet yours. Sit with it until it knows your name.", "a weight like the world, and as light as a feather"],
  ],
  // 9 · Dao Sovereign: the Seat of the Mountain
  [
    ["the foot of the bare mountain", "find your place in the order", "There is a chair. It has always been there. The difficulty is only that it must be sat in on purpose.", "the order of the stars shifting by a hair"],
    ["the stone chair", "say the law without changing it", "Say what is. Do not say what you wish. The world can tell, and it flinches.", "a word that has always been true"],
    ["the scale-beam", "weigh the ant and the star with the same hand", "You will be fonder of one. Know which, and weigh anyway.", "a balance that hums"],
    ["the hall of pleas", "hear every plea in its order", "Hear them all. Even those from the people you love. Especially those.", "the murmur of a thousand grievances, settled"],
    ["the narrow doorway of the court", "find where law and mercy do not quarrel", "It is the width of a hand. Stand in it.", "a held breath let go by a crowd"],
    ["the open sky-terrace", "be the sky and not mind being looked at", "Do not cause the rain. Allow it. You will understand the difference when you stop trying to explain it.", "rain on the roofs of cities you have never seen"],
    ["the shore of the mountain-sea", "be moved by all of it and by none", "Let it carry you, and come back. The returning is the skill.", "salt on the lips of a mountain"],
    ["the terrace after the tide", "be quiet with nothing left to say", "You will want to be thanked. Let that want go by. There will be no one to thank you.", "a note held for a thousand years"],
    ["the last height", "answer the question of what you will do now that you have everything", "I do not know the answer. I never did. I only know that it is smaller than you think, and true.", "the first morning after the last wall"],
    ["the very top", "keep", "Keep the lamp lit. That is all any of us have ever been asked.", "the next morning"],
  ],
];

export interface RealmLex {
  /** With its article: “the Tempering Yard”. */
  place: string;
  /** The four ways of going at a wall, each written for the realm, with {station}: the hard way, the study, the borrowed word, the long sitting. */
  methods: readonly [string, string, string, string];
  /** How a hero rests there. */
  rest: string;
  /** What the Elder says when she is asked for counsel at a wall, when the hero presses, and when the hero reports. One sentence each. */
  counsel: string;
  press: string;
  report: string;
  /** What the Elder says to a hero who has been thrown more than once and still comes to report. */
  thrown: string;
}

export const REALM_LEX: readonly RealmLex[] = [
  {
    place: "the Tempering Yard",
    methods: [
      "At {station} you do the hard work of the body: the cane, the bar, the cold water, again and again, until the muscles stop arguing.",
      "At {station} an old porter shows you how the body’s lessons are ordered, and why the third must wait for the second. You write it on your wrist in charcoal.",
      "At {station} a cook who tempered herself thirty years ago gives you her salve and her warning, and the warning is the better gift.",
      "At {station} you sit with it. You do not push. You let the hurt tell you its name, and you do not argue with the name.",
    ],
    rest: "A mortal’s rest is a cup of salt-water and a blanket, and it is enough.",
    counsel: "At the Tempering Yard the body is the only teacher, and it teaches by repetition and by pain. Choose which pain you will repeat.",
    press: "Press the body, and the body will answer. It may answer with a bruise. That is an answer too.",
    report: "A mortal who tempers the body honestly has done more than most cultivators ever bother to. I will remember it.",
    thrown: "Beaten by the yard more than once, and still you come to say so. A mortal who tells me when they have failed is worth three who do not.",
  },
  {
    place: "the Thread-House",
    methods: [
      "At {station} you wind and unwind the qi until your fingers cramp, and then until they forget that they cramped.",
      "At {station} you read the winding-diagrams slowly, then close the book and draw them from memory, wrong, and read again.",
      "At {station} a Condenser two layers above you shows you how she sits, and corrects your shoulders without a word.",
      "At {station} you do nothing for an hour, then another. The qi comes and goes. You let it, and it learns where the door is.",
    ],
    rest: "Qi settles in the quiet like silt, and the house hums a little lower.",
    counsel: "A thread is not a cord until another lies beside it. Do not hurry the qi. It comes to the first thread, not to you.",
    press: "Push gently at a wall made of qi. Gently, and again, until it forgets it was a wall.",
    report: "Qi that gathers slowly stays. I have known fast gatherers lose it all in a night.",
    thrown: "The house has thrown your thread more than once, and you come to tell me anyway. Few Condensers admit to a tangle. Fewer come back for another.",
  },
  {
    place: "the Mason’s Court",
    methods: [
      "At {station} you lay the stone and tear it up and lay it again. The mason’s rule is that a foundation is an argument you win by repeating it.",
      "At {station} you measure with plumb and chalk what you cannot yet feel, and trust the measure until the feeling catches up.",
      "At {station} an old master mason lends you his level and says nothing, which is his way of saying you are allowed to fail.",
      "At {station} you sit with the unfinished house and let it settle. Some things are built by being left alone overnight.",
    ],
    rest: "The foundation takes its rest as a house does, by creaking once and then not.",
    counsel: "A foundation is a promise to everything that will stand on it. Lay it as if you meant to be held to the promise.",
    press: "A foundation tested once is a foundation tested. Do not test it twice in one day.",
    report: "A foundation is a ledger of every shortcut you did not take. Mine has some entries I would like to forget.",
    thrown: "More than one crooked course, and you report every stone. A mason who names his mistakes builds a house that stands.",
  },
  {
    place: "the Gold Forge",
    methods: [
      "At {station} you strike and strike, and the forge gives back a ring that tells you, truthfully, how well you struck.",
      "At {station} you study the colour of gold at each heat: straw, bronze, blue. Each colour is an instruction, and you learn to read it.",
      "At {station} a retired smith lends you a pair of tongs that have held a hundred cores, and tells you which ones cracked.",
      "At {station} you keep the vigil at the banked fire. The core does not ripen faster for being watched, but you do.",
    ],
    rest: "The forge cools by degrees, and the core with it, and nothing cracks.",
    counsel: "A core is struck, quenched and tempered. You will want to skip one of the three. Skip none.",
    press: "The hammer falls once, true. Then you wait for the ring. The ring will tell you.",
    report: "Gold is made in heat, and the heat is not remembered with fondness. It is remembered with respect.",
    thrown: "The forge has cracked you more than once, and you say so without dressing it. A cracked core that is confessed is half mended already.",
  },
  {
    place: "the Cradle Gardens",
    methods: [
      "At {station} you do the gentle drill again and again: lift, set down, lift. A soul learns by being repeated, like a child with a spoon.",
      "At {station} you read the nursery-sutras, slow as lullabies, and understand a line you had read forty times before.",
      "At {station} an old Nascent Soul master lets her own small figure sit by yours, and the two of them look at each other for an hour.",
      "At {station} you wait the way one waits by a cradle. You do not hurry the sleeper. You hum, if you must.",
    ],
    rest: "The soul sleeps in you, and its small breath moves yours.",
    counsel: "The soul in you is young, however old you are. Speak to it as you wish someone had spoken to you.",
    press: "Do not push the soul. Invite it. A child invited walks farther than a child driven.",
    report: "It is a strange thing to be a parent to yourself. You will get better at it. Everyone does, slowly.",
    thrown: "Dropped more than once, and you still come to tell me how the little one fell. That is how a good parent talks, Wanderer, to a child, or to themselves.",
  },
  {
    place: "the Cutting Hall",
    methods: [
      "At {station} you practise the cut on dummy threads, again and again, until the shears stop shaking.",
      "At {station} you read the register of cords, naming each tie before you cut it, because an unnamed cord grows back.",
      "At {station} a sage who has cut more than you takes your hand and shows you where the thread is. She does not say what it cost her.",
      "At {station} you sit among the severed ends and let yourself miss them. That is the only way, the sages say, that the grief stays small.",
    ],
    rest: "The cut ends close over, and the quiet where the cords were is not an emptiness any more.",
    counsel: "Each cord you cut is a person you will not be again. Choose them with care, and cut with love.",
    press: "The shears are sharp. That is all they ask of you. The rest is the person holding them.",
    report: "What you cut, you cut. I will not tell you it was easy, or that you would not do it again.",
    thrown: "You have been caught on a cord more than once, and you bring it to me still tied. There is no shame in a knot. There is only the shears and the day.",
  },
  {
    place: "the Switchback Stair",
    methods: [
      "At {station} you walk the stretch again, and again, with a full pack, until your legs stop asking how far.",
      "At {station} you stand and listen for the grain of the Dao, and write down what you hear, and cross out most of it.",
      "At {station} an old seeker at the waystone shares her fire and tells you where she turned back. She is not ashamed, and you are grateful.",
      "At {station} you sit as the weather passes, and do not move on until the stone under you stops feeling like a delay.",
    ],
    rest: "The road rests when you do. It has the patience of something that has never been in a hurry.",
    counsel: "The Dao does not wait, and it does not hurry. The wall is the place where you learn which of the two you are.",
    press: "Take the step. Whatever the road does after, you will have taken the step.",
    report: "Walking the Dao is mostly walking. Tell me, honestly, whether you enjoyed the walking.",
    thrown: "The stair has turned you back more than once, and you come to say what you heard on the way down. That is worth more than the summit.",
  },
  {
    place: "the Open Door",
    methods: [
      "At {station} you step through and back, again and again, until the stepping is no longer an event.",
      "At {station} you study the worn marks left by those who went before you, and learn what they did not leave: the pause, the hand, the breath.",
      "At {station} an Ascendant who has stood here for forty years nods at you, and you feel what it is to be seen by someone who is not in a hurry.",
      "At {station} you stand still until the standing becomes a kind of walking, and the door is the only moving thing.",
    ],
    rest: "The air by the open door is cool and faintly sweet, and the sill is still warm from your standing.",
    counsel: "The door is open. The wall is that you must still choose to walk through it, with no one to see whether you did.",
    press: "Lift the latch. If it is open, you have lost nothing. If it is not, you will know.",
    report: "I have stood at doors. Some I walked through and some I did not. I am telling you only that I remember all of them.",
    thrown: "The door has not let you through more than once, and you tell me so without flinching. I have been telling it to myself for sixty years, and never so plainly.",
  },
  {
    place: "the Long Garden",
    methods: [
      "At {station} you do the small task over, slowly, in a day that will not end, until the doing is its own reward.",
      "At {station} you read the garden’s long book, which has no author and a thousand marginal notes, many of them yours.",
      "At {station} a True Immortal older than the sect lends you a patch of her own noon, and you work in it as in borrowed shade.",
      "At {station} you sit in the noon and the noon sits with you. Neither of you has anywhere to be.",
    ],
    rest: "The noon does not mind you resting. It does not mind anything.",
    counsel: "In a long day nothing is urgent, which is the only urgency. Do the next small thing.",
    press: "There is no hurry here. Press when it feels like walking, not like leaping.",
    report: "A day that does not end will not forget you. Be kind to the one who walked through it.",
    thrown: "The garden has refused you more than once, and you tell me with a quiet face. I think that is the only face the garden respects.",
  },
  {
    place: "the Seat of the Mountain",
    methods: [
      "At {station} you hold the whole of it in one hand, again and again, until the hand stops noticing the weight.",
      "At {station} you read the law that is written in the grain of everything, and find your own handwriting in the margin.",
      "At {station} an older Sovereign, whom no one has seen in an age, sits beside you and says nothing, which is the lesson.",
      "At {station} you keep. That is all. You keep the lamp, the order and the quiet, and you let the keeping be enough.",
    ],
    rest: "The mountain rests under you like a large animal that has decided to trust you.",
    counsel: "You have kept everything but the keeping. This wall is how you learn to do that without being thanked.",
    press: "Lay your hand on the wall as you would on a sleeping animal. It will answer, and it will not be rushed.",
    report: "There is nothing left to report to me that you do not already know. I like to hear it anyway.",
    thrown: "The mountain has set you down more than once, and you come to tell a keeper who has no seat of her own. That is a courtesy I will not forget.",
  },
];

/** Four ways of going at a wall, and the tone of each. */
export const METHODS = ["temper", "comprehend", "borrow", "endure"] as const;
export type Method = (typeof METHODS)[number];
export const METHOD_TONE = { temper: "force", comprehend: "inquiry", borrow: "mercy", endure: "quiet" } as const;
export const METHOD_TITLE = ["The Hard Way", "The Teaching", "A Borrowed Word", "The Long Sitting"] as const;

/** Labels for the four methods; a wall picks one of the three by its index. */
export const METHOD_LABEL: Record<Method, readonly string[]> = {
  temper: ["Do the hard work of {station}, over and over.", "Take up the drill at {station} and do not stop for pain.", "Spend the day at {station} doing the work again."],
  comprehend: ["Study how the {name} is passed, at {station}.", "Read what is written of the {name}, and test it at {station}.", "Sit with the teaching of {station} until it turns."],
  borrow: ["Ask the keepers of {station} what they know of the wall.", "Seek out someone at {station} who has been through it.", "Beg a word of counsel from those at {station}."],
  endure: ["Sit with the wall at {station} and do not push.", "Wait at {station} and let the wall come to you.", "Stay at {station} until the quiet decides."],
};

/** The second paragraph of a method scene: what the wall asks, three ways of saying it. */
export const METHOD_ASK: readonly string[] = [
  "The wall wants you to {key}. This is one way of going at it, and not the only way.",
  "Everything here comes back to one thing, which is to {key}. The work is a way of asking.",
  "You keep the wall in mind: {key}. The work does not make it easier. It makes you readier for it to be hard.",
];

/** Opening paragraphs, by role, six variants each. Slots: place, station, name, next, ord, Station. */
export const OPENING: readonly string[] = [
  "You come to {station} in {place}. It is where those on the {ord} Layer come to meet the wall above them, and you are one of them.",
  "{Station} is quiet when you reach it, as it always is before a wall. You stand on your {ord} Layer, the {name}, and the next lies above.",
  "Of all of {place}, {station} asks the most and says the least. You have come to it on your {ord} Layer, the {name}.",
  "The way to {station} runs through {place} and ends there. Other cultivators of the {name} have stood here, and you can tell by the wear.",
  "At {station} the air of {place} is thicker, as it is near anything hard. You are on the {ord} Layer, the {name}, and you are here to be tried.",
  "You do not come to {station} lightly. It is the wall of the {name}, and everyone in {place} knows what it costs.",
];

export const KEY_LINE: readonly string[] = [
  "To pass it, you must {key}.",
  "The old hands put it simply: {key}.",
  "What passes it is plain, and not easy: {key}.",
];

export const HOUR_OPENING: readonly string[] = [
  "The hour is not announced. You feel it as you feel the turn of a tide: a loosening, then a leaning. The wall above the {name} is as near as it will be.",
  "Toward evening {place} goes quiet, and at {station} the quiet has an edge. Whatever you are going to do about the wall above the {name}, this is the hour for it.",
  "Something in you has stopped asking whether you are ready and begun asking whether you are willing. At {station} the wall above the {name} waits, patient and entirely indifferent.",
  "At {station} the light changes without moving. The wall above the {name} stands where it stood, and for once it feels less like a barrier than like a question.",
  "Nobody comes to {station} at this hour, and that is the sign that it is the hour. The wall above the {name} has been waiting for you without malice.",
  "You stand at {station} with your hands open. The wall above the {name} does not look like anything. It looks like what is left when you stop looking at anything else.",
];

export const AFTER_OPENING: readonly string[] = [
  "The hour is over. {Station} has the stillness of a room where something has been decided.",
  "It is done, one way or the other. At {station} nothing moves, and then a small wind goes through, as if the place had let out its breath.",
  "The hour has passed. You stand at {station} and take the measure of yourself, which is the only measure that was ever going to count.",
  "Whatever happened, it happened quickly, and the quiet that follows is long. {Station} is the same as it was and you are not.",
  "A bell somewhere in {place} rings the hour late. At {station} the wall has done what it was going to do.",
  "The hour ends as hours do, without ceremony. {Station} is where it was. The only thing that has moved is you, or has not.",
];

export const REST_OPENING: readonly string[] = [
  "You sit at {station} and let the hour settle. {Echo}.",
  "There is nothing to do at {station} but be where you are. {Echo}.",
  "You rest, and the place rests with you. {Echo}.",
  "You lower yourself to the ground by {station} and stay. {Echo}.",
  "At {station} you do the one thing the wall cannot take from you, which is to sit. {Echo}.",
  "The body asks for rest and, for once, you give it. {Echo}.",
];

export const VOICE_OPENING: readonly string[] = [
  "Elder Su comes to {station} as the light fails. She has heard of the wall, as she has heard of all of them, and she does not pretend that she is not curious.",
  "Elder Su is waiting at {station} when you turn, with her sleeves tucked in and a lantern she has not lit. She says nothing at first.",
  "Word has reached the Elder, as word always does. She stands by {station} with her hands folded, and the lantern at her feet gives a small, steady light.",
  "Elder Su has walked out to {station}, which she does not do for everyone. She looks at you, and then at the wall, and then at you again.",
  "The Elder is at {station} before you have decided to look for her. She has the air of someone who has stood at this wall herself, and does not mean to say how it went.",
  "Elder Su stands a little apart at {station}, as an elder does who is there to be asked and not to offer. The lamp hisses. She waits.",
];

export const CLOSE_OPENING: readonly string[] = [
  "You leave {station} with {echo}. The wall above the {name} is behind you, or above you still, and in either case it has taught you its shape.",
  "When you go, {echo} goes with you. Whatever the wall above the {name} was, it is a thing you know now, and not a thing you fear.",
  "The last thing you notice at {station} is {echo}. It is a small thing to carry out of {place}, and it is yours.",
  "You walk back through {place} with {echo}. The wall above the {name} has not asked you to forgive it, and you find that you do.",
  "At the edge of {station} there is {echo}. You look at it a moment longer than you need to, and then you go.",
  "{Echo} stays with you as you leave {station}. It will be there tomorrow, and the day after, and then it will be part of you.",
];

export const NEXT_LINE: readonly string[] = [
  "Above this wall, if you are let up, there is another. {wall}",
  "You glance up, and the next wall is already there, patient as a mountain. {wall}",
  "There is always a wall after the wall. {wall}",
];
