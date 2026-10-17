import { DAOS, GENDERS, type Dao, type Gender } from "@/engine/hero";
import { parseRemarks } from "@/engine/markup";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene, Tier } from "@/engine/types";

/**
 * The Dao and gender in the main line. At twelve places the Dao a hero cultivates meets a scene that was written for everyone: the herb market, the
 * stone wagers, the healer’s racks, the vein in the quarry, the sparring court, the Sealing Night’s brush. A hero of a Dao is offered a way of meeting the
 * scene that only their craft allows, and an open hand is offered one as well. At ten more, the hardest moments of the story (a search of a widow’s house,
 * a rockfall, a vote of stones, the top of the cleft), a woman, a man and someone who gives no answer are each offered a way of meeting the danger that only
 * their own allows. The ways are hidden from everyone they are not for, and the Elder answers at once, by Dao or by gender, by trust.
 */

interface DaoTurn {
  id: string;
  /** Where the way leads: the scene the others lead to, so the story rejoins. */
  next: string;
  /** The realm the scene belongs to, which sets what the turn gives. */
  realm: number;
  labels: Record<Dao, string>;
  /** What the Elder adds about the scene, in her own words, after her answer. */
  tail: string;
}

export const DAO_TURNS: DaoTurn[] = [
  {
    id: "market_lane",
    next: "market_seller",
    realm: 0,
    labels: {
      none: "Walk the stalls with open hands, and let each keeper show you what they would show a stranger who knows nothing at all.",
      alchemy: "Stop at the frostleaf and the bitter-root and smell each bundle as you would a draught, until Madam Hu gives up pretending the scales are honest.",
      forging: "Go to the stall of nails, hasps and chains, run a thumb along an edge, and ask who cut it so badly and where the iron came from.",
      talisman: "Stop at the stall of yellow-paper charms, read three of them aloud in the order they were drawn, and watch the painter stop smiling.",
      formation: "Stand where two lanes cross and read the market as an array: which stall feeds which, and what falls first if one lantern fails.",
      beast: "Crouch by the fish-seller’s tub, let the thin silver fish come to your fingers, and ask what it was that frightened them.",
      sword: "Walk the lane with your hand where a hilt would be, and see which keepers shift their weight and which look away.",
      healing: "Stop at the stall where the tired mothers wait with sick children, and quietly ask what the market sells that is not for the sect to see.",
      fate: "Throw three coins on a fortune-teller’s counter, read the fall before she can, and ask her what it cost to learn to cheat.",
    },
    tail: "Every craft on the mountain is practised in that lane by someone with less standing than the craft deserves. I used to walk past it with my eyes on the gate.",
  },
  {
    id: "pavilion_table",
    next: "pavilion_bo_lan",
    realm: 0,
    labels: {
      none: "Sit down at the table with nothing but your coin and your eyes, and play the tile in front of you as the boy did.",
      alchemy: "Smell the lacquer on the tiles. A house that cheats rubs its stones with something, and you know what a pill-maker’s hand does to resin.",
      forging: "Weigh the tile in your palm. A forger knows when a stone has been drilled and filled, and Old Tang’s favourites have been.",
      talisman: "Read the marks along the table’s edge. Somebody has been counting here in a private script, and a script-maker reads a count like a bill.",
      formation: "Study how the tiles are laid and which square the house favours. A formation is a game that someone else is playing against you.",
      beast: "Watch Old Tang’s hands and the boy’s breathing. A creature that is about to lose looks one way; one that is about to cheat looks another.",
      sword: "Take the seat with your back to the wall and your hands in view, and play the table the way you would play a drawn blade: slowly, and without blinking.",
      healing: "Look at Bo Lan’s hands, which are shaking, and at his face, which is grey. Before the money, a healer sees the boy who has not eaten.",
      fate: "Lay your coin on the square the tile will not fall on, and say so aloud, and see how long Old Tang can keep from looking at it.",
    },
    tail: "A game of tiles is a map of how people lose. I could draw it for you, if I did not have to admit I had been taught.",
  },
  {
    id: "healer_courtyard",
    next: "healer_patient",
    realm: 1,
    labels: {
      none: "Take a basket of stems and begin to sort them wrongly, and let her correct you until you have learned something by being wrong.",
      alchemy: "Pick up the pale stem and bite the end, as a pill-maker does, and name its poison before the healer can name its cure.",
      forging: "Examine the shears and the mortar on the bench, and tell her which of them wants re-tempering before it fails in the next hand.",
      talisman: "Read the labels on the racks. Half are in the wrong script, and a script-maker cannot let a bad label stand.",
      formation: "Look at how the racks are laid and the breeze moves through them, and rearrange three so that the whole yard dries in half the time.",
      beast: "Kneel by the sleeping cat on the sill and let it sniff your hand, and ask the healer what the cat has been trying to tell her about the boy.",
      sword: "Offer to carry the heavy baskets while she works. A swordsman understands that some battles are won by lifting and not by cutting.",
      healing: "Sit down beside the board and lay your hand on the boy’s wrist, and say what you feel there before she says it herself.",
      fate: "Ask the healer, gently, how the boy’s illness ends, and read her silence as plainly as you would read a spread of stalks.",
    },
    tail: "Healers are the only people in the sect whom the wardens do not interrupt. It was one of the first things I noticed, and I have never learned what it means.",
  },
  {
    id: "quarry_face",
    next: "quarry_flaw",
    realm: 1,
    labels: {
      none: "Lay both palms flat on the cold jade and wait, and let the stone say whatever it says to a person with no craft to speak back.",
      alchemy: "Scrape a little of the jade-dust into a vial and taste the edge of it. A stone that was cut has a different bitterness from one that broke.",
      forging: "Examine the cut. A forger knows a clean edge from a clever one, and this edge was not made by the quarry’s chisels.",
      talisman: "Look for marks in the stone’s grain. A ward is a line that runs with the grain, and here is one that runs against it.",
      formation: "Stand in the middle of the cavern and read where the pressure sits. A hollow like this is a formation that someone has already started.",
      beast: "Listen for what lives in the face. Beasts nest where the stone is warm, and here, something has been nesting in the cold.",
      sword: "Run your finger along the cut at the angle a blade would take, and feel where the hand that made it would have been.",
      healing: "Feel the vein for a pulse. Stone remembers hurt as a body does, and this stone remembers having been cut from.",
      fate: "Lay three coins on the floor of the cavern in a line toward the cut, and read where they roll. The stone has a direction.",
    },
    tail: "The quarry keeps its own counsel, and the archive keeps the quarry’s. I have never been able to stand in that cavern for more than a minute.",
  },
  {
    id: "archive_stacks_2",
    next: "archive_index",
    realm: 1,
    labels: {
      none: "Walk the aisle with your eyes down and your hands behind you, as the apprentices do, and read only what the shelves choose to show.",
      alchemy: "Follow the smell of old ink and cinnabar to the shelf that has been handled most, and read what the dust has failed to cover.",
      forging: "Tap the bronze labels as you pass. The ones that ring dull were recast, and a forger can tell which names were replaced.",
      talisman: "Read the spine-marks in their own script. An archive is a ward made of paper, and its holes are where the script is wrong.",
      formation: "Count the aisles and the lamps and the doors, and find the shelf that the whole archive’s layout was built to keep you from.",
      beast: "Look for the mouse-trails in the dust. Where the mice do not go, something has been put that they will not eat.",
      sword: "Walk the aisle as though it were a corridor in a fight, and notice where an ambush would come from, and where it has.",
      healing: "Read the wear on the floor. The aisles where people limp are the aisles where punishments are kept, and the deepest limp leads left.",
      fate: "Ask the stacks one question, silently, and let your feet choose the aisle. A diviner’s feet are right more often than a clerk’s eyes.",
    },
    tail: "The Archive was built to remember everything and forgive nothing. Whoever designed the stacks understood both halves of the sentence.",
  },
  {
    id: "sutra_inscriptions_3",
    next: "rumours_4",
    realm: 2,
    labels: {
      none: "Stand before the three bands with nothing but your eyes, and let the words come to you slowly, as they would to anyone who had not been taught to read them.",
      alchemy: "Rub a pinch of the gate’s dust between your fingers. A homecoming carved in a hurry is carved with something the stone cannot hold.",
      forging: "Examine the struck-through phrase. A chisel that struck a name out left a different mark from the chisel that carved it, and you can tell them apart.",
      talisman: "Read the three bands in the order a ward would be read, bottom to top, and find the sentence the carver hid in the strokes.",
      formation: "Step back and look at the three bands as a single pattern. The homecoming is the keystone, and someone has taken the stones out round it.",
      beast: "Lay your palm against the lintel and wait for the mist to notice you. Mist has the habit of beasts: it comes to what stays still.",
      sword: "Trace the strokes of the name with your finger, as you would practise a form, and feel where the hand that cut them hesitated.",
      healing: "Look at how the stone has weathered round the struck-through phrase. Something has been touching it, tenderly, for years.",
      fate: "Read the lines as a casting and find the one that does not belong to its band, and say it aloud as though it were a verdict.",
    },
    tail: "A gate that carves a homecoming on itself has been waiting for someone to read it. I walked past it for twelve years and read the other side.",
  },
  {
    id: "court_bout",
    next: "court_return",
    realm: 2,
    labels: {
      none: "Fight Qin with the only thing you have: attention. Watch his feet, his shoulders and his breathing, and let the bout teach you.",
      alchemy: "Let the pill under your tongue dissolve and keep your wits sharp for exactly one exchange, and make it count.",
      forging: "Take the first blow on the bracer you wear, and listen to what the blow does to the metal, and answer in kind.",
      talisman: "Slip a slip of paper into your palm, and slap it against his wrist as the palms meet, and watch the bout lose its rhythm.",
      formation: "Move in a pattern: left, left, right, back. By the third exchange, Qin has been steered to where you wanted him.",
      beast: "Fight as a beast fights, low and sidelong, with your whole body behind each move, and see whether Qin has met anything like it.",
      sword: "Fight with empty hands as you would with a blade: one line, one cut, and a patience that does not mind being struck.",
      healing: "Take the blow where it will do least harm, and press two fingers to the nerve in his forearm as you roll with it.",
      fate: "Name the exchange before it happens. Say, softly, ‘left palm’, and let Qin discover that his left palm has been waiting for you.",
    },
    tail: "The court teaches that a fight is a conversation in which everyone is lying. Qin is the only honest man I have ever seen lose a bout.",
  },
  {
    id: "foundry_bell_hall",
    next: "foundry_bell_hall_2",
    realm: 3,
    labels: {
      none: "Walk the hall and lay a palm on each bell in turn, and let the bronze tell you whatever a bell tells someone with no craft.",
      alchemy: "Taste the air by the nearest bell. Bronze that rings true is made with a trace of something sweet, and this one is made with something else.",
      forging: "Strike the nearest bell with a knuckle and listen to the note. A bell is a forge’s sentence, and you have read one before.",
      talisman: "Read the rim of the nearest bell. The names cast into it are in a script that was meant to be read by hand, not by eye.",
      formation: "Stand in the middle of the double row and listen to how the bells hum together. The hall is an array, and one bell is out of tune.",
      beast: "Listen for the sound beneath the hum. A bell cast over a living thing carries it, and one of these carries a heartbeat.",
      sword: "Run a thumb along the rim and feel the burr of a blade that was struck off it, and wonder who thought a bell needed an edge.",
      healing: "Press an ear to the bronze. A bell that has rung for the dead holds something of them, and you know what grief sounds like through metal.",
      fate: "Ask the bells which of them will ring first on the Sealing Night, and listen. The one that hums loudest is not the one you expected.",
    },
    tail: "A foundry casts what the sect wants remembered. It has never been asked what the sect wants forgotten, and I have often wondered where that is cast.",
  },
  {
    id: "hermit_chess",
    next: "hermit_warning",
    realm: 1,
    labels: {
      none: "Place a stone where it feels right, with no theory, and see how long the old man can bear to play against an amateur.",
      alchemy: "Place a black stone in the middle and tell him each move is a measure of dose, and see if he plays to the recipe.",
      forging: "Place a stone to build a wall across the corner, one piece at a time, and watch him realise the board is going to be a smithy.",
      talisman: "Lay a stone so the stones around it spell a stroke, and see whether the hermit can read what you have written.",
      formation: "Place a stone to complete a shape in the corner, and a second to guard it. The board is an array, and he has not noticed.",
      beast: "Place a stone and say nothing, and wait. The hermit’s ape on the stair would have understood; see whether he does.",
      sword: "Place a stone on the one point that cuts the board in two. A swordsman does not play the board, but the line through it.",
      healing: "Place a stone to protect the weakest group, though it costs a move, and see whether the hermit remembers what mercy cost the sisters.",
      fate: "Place a stone where you read the game will end, and tell him it is the last move, and see which of you flinches.",
    },
    tail: "Lu Ming plays the same game with every visitor, and it is not chess. He is deciding whom he can afford to tell.",
  },
  {
    id: "sealing_altar",
    next: "sealing_altar_2",
    realm: 3,
    labels: {
      none: "Do nothing at all. Watch the brush and the ink and the girl’s hand, and let the moment show you whatever it shows someone with no craft.",
      alchemy: "Look at the ink in the Registrar’s well. It has been mixed with something that makes the hand shake, and you know the recipe.",
      forging: "Look at the brush’s ferrule and the handle. It has been weighted wrongly, and a hand that holds it must fight to keep it level.",
      talisman: "Look at the paper. A sealing order is a ward, and this one has been written so that the name, once written, cannot be taken back.",
      formation: "Look at how the masters stand round the altar. They have made an array of themselves, and the girl is its only open line.",
      beast: "Look at the Registrar’s breathing. She is the frightened animal in the room, and the masters are a pack that has found her.",
      sword: "Look at the distances between you, the girl and the masters, and judge how long it would take to cross the room, and what it would cost.",
      healing: "Look at the girl’s hand. It is shaking because she is afraid, and the fear is a wound, and you can see where it began.",
      fate: "Look ahead one stroke, and two, and the last. You know the name that is about to be written, and you know who will suffer for it.",
    },
    tail: "The Sealing Night is not a story I tell. It is a night I attended, with a brush in my hand, and for fifteen years I have wanted someone to have stood where you stand.",
  },
  {
    id: "forge_entry",
    next: "forge_a1s1",
    realm: 3,
    labels: {
      none: "Walk into the forge with empty hands and a clear face, and let the smith decide what to make of someone with no tools.",
      alchemy: "Breathe in the cinnabar smoke before you speak. A pill-maker knows this smell, and knows which of its sources the Works has not declared.",
      forging: "Take your hammer from your belt and lay it on the bench, handle toward Shu Ning, as one smith greets another.",
      talisman: "Look at the stamps on the seals. A script-maker reads a seal like a signature, and these have been forged by someone who learned in a hurry.",
      formation: "Look at how the benches are placed. The forge is built round a flow, and the flow runs toward the tunnels, not the door.",
      beast: "Look for the forge-cat on the sill. If it has stayed, the shed is not as dangerous as the guards would have you think.",
      sword: "Count the guards’ breath and the sentries’ boots. You know how a post is held, and this one is held badly.",
      healing: "Look at Shu Ning’s hands, burned and split. You know that kind of wound, and what it asks of a person who goes on working.",
      fate: "Ask Shu Ning when the guard changes, and read the seconds in her answer. A diviner knows a lie by its timing.",
    },
    tail: "Every forge on the coast is run by someone who has been told what to make and not what it is for. I find it easier to be sorry for the smiths than for the Works.",
  },
  {
    id: "furnace_entry",
    next: "furnace_a1s1",
    realm: 5,
    labels: {
      none: "Walk the slag beach with nothing but your eyes, and look at the Furnace Towns the way the children in the aprons must.",
      alchemy: "Taste the smoke. A furnace is a cauldron the size of a town, and the town is cooking something that is not glass.",
      forging: "Study the stacks and the sawtooth roofs. A forger reads a furnace as a text, and this one is written in a language of waste.",
      talisman: "Look at the red stencil on the barges. It is a mark that means something to the tithe-hall and nothing to the sea.",
      formation: "Trace the rail and the canal and the cooling-pit on the map in your head, and see the single pattern all six towns are laid out to hide.",
      beast: "Look for the gulls. Where there are none, the air is wrong, and the ground is worse, and the children are the only living things in it.",
      sword: "Look at the gates and the guards. A swordsman can count the ways in, and the ways out, and tell which have never been used.",
      healing: "Look at the children’s hands and lungs. You can hear the cough from here, and you know what it is, and who is paying for it.",
      fate: "Hum the tune the Sea gave you, once, softly, and see which of the six chimneys answers. A diviner follows the answer, not the question.",
    },
    tail: "I have seen the Furnace Towns only on a map. A map shows where the towns are, and does not show the children. I was taught to read the first and not look for the second.",
  },
];

interface GenderTurn {
  id: string;
  next: string;
  realm: number;
  labels: Record<Gender, string>;
  tail: string;
}

export const GENDER_TURNS: GenderTurn[] = [
  {
    id: "village_wardens_visit",
    next: "village_nightfall",
    realm: 0,
    labels: {
      woman: "Stand in the doorway with the widow’s apron on, and let the wardens decide whether a woman of the house can be asked the questions they came with.",
      man: "Stand in the doorway as the man of the house, and say it is his business, and watch them wonder whether they have the right to disagree.",
      unspoken: "Stand in the doorway as someone the list cannot place, and let the wardens search for a column to put you in.",
    },
    tail: "Wardens are taught to ask the man of the house first. They are not taught what to do when there is none.",
  },
  {
    id: "pavilion_cheat",
    next: "pavilion_bo_lan",
    realm: 0,
    labels: {
      woman: "Say, calmly, that the tile fell out of the box on its own, and let Old Tang decide whether a woman at the table is to be believed.",
      man: "Say, with a laugh, that a man can be forgiven a lucky roll, and watch Old Tang consider whether to forgive it.",
      unspoken: "Say nothing at all, and let the table decide what kind of person says nothing at a moment like this.",
    },
    tail: "A pavilion counts its players by sex before it counts them by coin. I do not know which it considers the more reliable measure.",
  },
  {
    id: "healer_bribe",
    next: "healer_burn_ledger",
    realm: 1,
    labels: {
      woman: "Step between the warden and the healer, as the women of the hall have always done, and say that the purse should go to the person who must decide.",
      man: "Meet the warden’s eye as one man to another, and tell him the Hall does not take money for silence, and let him see you mean it.",
      unspoken: "Stand beside the healer and say nothing, and let the warden notice that he does not know whom he has been talking to.",
    },
    tail: "Wardens bribe whom they can read. A woman is read as a servant of a house, a man as a master of one. You, I think, read as neither, and that is why he left.",
  },
  {
    id: "quarry_rockfall",
    next: "quarry_dig_out",
    realm: 1,
    labels: {
      woman: "Take the rope end and call the lift, and ignore the glances that say a woman does not give orders on a rail. They will lift anyway.",
      man: "Take the rope end and call the lift, and notice how quickly the miners obey a man’s voice, and how little they ask what he knows.",
      unspoken: "Call the lift in a voice that has no sex in it, and let the miners decide for themselves whether to obey it.",
    },
    tail: "A rockfall is the only place in the quarry where nobody asks who is calling. I have always wondered why it takes a collapse to see it.",
  },
  {
    id: "archive_warden",
    next: "archive_warden_2",
    realm: 1,
    labels: {
      woman: "Stand your ground as a woman found in the stacks at night, and make Ren Qiao decide whether he is looking at a thief or at a daughter of the sect.",
      man: "Stand your ground as a man found in the stacks at night, and notice that he looks for a reason, and not a crime.",
      unspoken: "Stand your ground with your face unreadable, and let the warden choose which of his two ledgers you belong in.",
    },
    tail: "Ren Qiao asked me once whether the archive keeps a record of who is permitted to be lost in it. I told him it keeps nothing of the kind.",
  },
  {
    id: "bridge_halfway",
    next: "bridge_other_side",
    realm: 2,
    labels: {
      woman: "Cross to the boy as the women of the villages cross to a frightened child, and speak to him in the voice they use, and see whether it works.",
      man: "Cross to the boy as the men of the villages cross to a frightened child, and keep your voice low and plain, and see whether it works.",
      unspoken: "Cross to the boy without a voice you have borrowed, and talk to him as you would to yourself at his age.",
    },
    tail: "Children are the only people who do not mind which voice comes. They mind whether it means what it says.",
  },
  {
    id: "descent_voices",
    next: "descent_voices_2",
    realm: 2,
    labels: {
      woman: "Speak to the voices as one of the fourteen’s sisters would, softly, and say each name as it should have been said.",
      man: "Speak to the voices as one of the fourteen’s brothers would, plainly, and say each name as it should have been said.",
      unspoken: "Speak to the voices as no one’s sister or brother, and say each name in the voice you use for no one in particular.",
    },
    tail: "I have heard the voices on the path, and never answered. I was afraid I would answer in the wrong voice, and be told so.",
  },
  {
    id: "tribunal_vote",
    next: "tribunal_vote_2",
    realm: 2,
    labels: {
      woman: "Walk up the steps among the women of the Law, and drop your stone where the masters can see which hand dropped it.",
      man: "Walk up the steps among the men of the Law, and drop your stone where the masters can see which hand dropped it.",
      unspoken: "Walk up the steps among the disciples and drop your stone from a hand that the masters cannot assign, and let them wonder.",
    },
    tail: "A vote by stones is the only vote in the sect where nobody asks what you are. It is also the only vote in which the answer is counted by the same masters it concerns.",
  },
  {
    id: "mist_masters_fall",
    next: "mist_masters_fall_2",
    realm: 4,
    labels: {
      woman: "Watch the masters break as the women of the Hall have always watched them, without surprise, and without a word of triumph.",
      man: "Watch the masters break as the men of the Law have always watched their elders, with a pang, and an effort not to show it.",
      unspoken: "Watch the masters break with the face of a person none of them ever bothered to categorise, and let them wonder what you saw.",
    },
    tail: "The masters were afraid of the women they wronged and the men they trained, and not at all of what they did not have a column for. That, I think, is how you got in.",
  },
  {
    id: "sealing_path",
    next: "sealing_path_2",
    realm: 4,
    labels: {
      woman: "Step onto the lip of the cleft as a woman come to speak to a sister, and give the masters a reason to remember it was a woman who stood there.",
      man: "Step onto the lip of the cleft as a man come to speak to a sister, and give the masters a reason to remember it was a man who stood there.",
      unspoken: "Step onto the lip of the cleft as no one’s kin, and give the masters a reason to remember that they did not know what to call you.",
    },
    tail: "That night I was a Registrar, a sister and a woman, and was only ever addressed as the first. I would have given a great deal to be addressed as the second.",
  },
];

// ───────────── the Elder’s answers

const TIERS: Tier[] = ["hostile", "wary", "neutral", "warm", "devoted"];

const DAO_LINES: Record<Dao, Record<Tier, string>> = {
  none: {
    hostile: "You met that with an open hand and nothing in it. I do not say it is a fault. I say it is a decision, and a decision with no craft behind it is a risk.",
    wary: "A hero with no Dao is a hero who has not yet been caught. You met that scene as one, and I should like to know whether it was choice or luck.",
    neutral: "You met that as someone with no craft, and the scene gave you the look it gives a person who might become anyone. It is a good look. Do not waste it.",
    warm: "You met that with an open hand, and the scene put something in it. I have seen the same happen to a few others. I would like to see it happen to you again.",
    devoted: "You have no craft yet, and you met that as though every craft were yours. I cannot tell whether that is arrogance or the best form of humility, and I find I do not need to.",
  },
  alchemy: {
    hostile: "You met that with a pill-maker’s nose and a poisoner’s patience. I admire one of them and have been instructed to be wary of the other.",
    wary: "A pill-maker in a room is a quiet kind of danger. You smelled the scene before you spoke to it, and I should like to know what you decided it contained.",
    neutral: "You met that as someone who works with the cauldron, and the scene smelled it on you before you spoke. The Pill Dao is a trade of small doses. Remember it.",
    warm: "You met that as the pill-maker you are, and the scene gave you the courtesy it gives a trade it cannot do without. I was proud of the courtesy, though it was not mine.",
    devoted: "Alchemists measure everything but kindness. I watched you measure that too, and find it in the right quantity. I should like to have studied under you.",
  },
  forging: {
    hostile: "You met that with a forger’s thumb and a forger’s distrust. A forger tests the thing before the person. It is not always a virtue.",
    wary: "A forger reads the grain of everything, and so does the Law. I wonder, sometimes, which of you will be the first to cut against it.",
    neutral: "You met that as a smith meets a blade: for its balance. It is a fair way to read a scene, and a poor one to read a person, and you seem to know the difference.",
    warm: "You met that with a forger’s patience, and the scene took the heat and held. I have seen few cultivators who tempered themselves before they struck.",
    devoted: "A forger makes what cannot be unmade. You met that scene in the same spirit, and I find that I have been trying for fifteen years to be as exact, and have not once managed it.",
  },
  talisman: {
    hostile: "You met that as a script-maker, with a ward in one hand and a sentence in the other. A sentence is a promise, and I am not sure what you have promised.",
    wary: "A ward is a sentence that cannot be argued with. You met that scene with one, and I should like to know what it was you did not want to hear answered.",
    neutral: "You met that as someone who draws the line before the fight. It is a fine Dao, and a lonely one, and you seem to know it.",
    warm: "You met that with a talisman-maker’s economy, and the scene read you correctly. It does not often. I think it was grateful.",
    devoted: "Every word I have ever written has been wrong in some small respect. I watched you write a line that was not, and I put down my pen.",
  },
  formation: {
    hostile: "You met that by arranging the room, and the room noticed. Array-masters are the only cultivators who can win a quarrel before it begins, and are thereby the hardest to forgive.",
    wary: "An array-master sees a room as a pattern, and a person as a stone in it. I do not know whether to be flattered that you placed me, or alarmed at where.",
    neutral: "You met that as someone who reads the shape of things before the things. The Formation Dao is patient. It is also, I find, very seldom wrong.",
    warm: "You met that as an array-master meets a scene: by finding where the lines already ran. They ran, I think, in your favour, and you let them.",
    devoted: "I spent twelve years on the mountain arranging the furniture of other people’s decisions. You arranged yours in an afternoon, and left the furniture where it was. I envy that.",
  },
  beast: {
    hostile: "You met that as a tamer, which is to say you trusted the animal before the argument. It is a fine instinct, and it has hanged better people than either of us.",
    wary: "A tamer is the only cultivator who is never alone in a room. I do not know what you brought into that scene, and I am not sure you do.",
    neutral: "You met that as someone who has learned to wait for a creature to come to them. It is an old art, and a good one for a person in the Law Hall to know.",
    warm: "You met that with a tamer’s stillness, and the scene stepped toward you as a shy thing steps. I have not seen it do that for anyone in a very long time.",
    devoted: "I have never been able to hold a living thing without it knowing I was afraid. You held that scene as though you had no fear in you at all, and it came to your hand. I should like to learn.",
  },
  sword: {
    hostile: "You met that with a swordsman’s straight line. A straight line is the shortest way between two people, and the most expensive.",
    wary: "A swordsman sees every room as a corridor and every person as a door. I should like to know which I was, and which you opened.",
    neutral: "You met that as the Sword Dao meets things: cleanly, with no wasted motion. It is a rare discipline, and the Law Hall has always been suspicious of it.",
    warm: "You met that with a swordsman’s patience, which is mostly a matter of not drawing. I have not known many people who understood that the blade is the last word, and not the first.",
    devoted: "A sword can cut anything but a decision. I watched you make one, and the blade did not leave its sheath, and I have never been so glad to have seen nothing happen.",
  },
  healing: {
    hostile: "You met that as a healer, looking for the wound before the offender. It is a kindness, and kindnesses are the first things the Law is asked to punish.",
    wary: "A healer is always at the edge of the argument, with a basin. I wonder what you saw in that scene that the others missed, and whether you will say.",
    neutral: "You met that as someone who finds the hurt before the cause. It is a rare order in which to read a scene, and a good one to be found in by a Law Hall.",
    warm: "You met that with a healer’s hands, and the scene let you. I have noticed that the more hurt a place is, the less it lets anyone near. It let you.",
    devoted: "I have judged a thousand cases and healed none. You met that scene as though you could do both, and I have lost count of the number of things I wish I had learned from you.",
  },
  fate: {
    hostile: "You met that with a diviner’s foreknowledge, and I am unsettled. The one cultivator I trust less than a liar is one who is never surprised.",
    wary: "A diviner reads the end before the beginning. I should like to know how the scene ended in your reading, and whether it ended differently in mine.",
    neutral: "You met that as someone who has already thrown the stalks. The Fate Dao is a quiet one, and its practitioners are the only ones who sleep soundly before a verdict.",
    warm: "You met that with a diviner’s ease, and the scene went the way you said. It is not magic. It is only a kind of attention that most of us have lost.",
    devoted: "I have known the end of this story for fifteen years, and could not tell anyone. You met that scene as though you knew it too, and said nothing. I think we are the only two in the sect who do.",
  },
};

const GENDER_LINES: Record<Gender, Record<Tier, string>> = {
  woman: {
    hostile: "You met that as a woman, and expected the room to remember it. It did, and not in your favour. I admire the nerve and distrust the timing.",
    wary: "A woman in a hard room is looked at before she is heard. You used that, I think, and I should like to know whether it was a weapon or a shield.",
    neutral: "You met that as a woman, and the room read it first and the rest after. It is the oldest order of reading in the sect, and you seem to have known it.",
    warm: "You met that as a woman who knew exactly what the room was, and walked into it anyway. I have done that more often than I care to count. You did it better.",
    devoted: "I have met every hard room of my life as a woman first and as myself afterwards. You made the room reverse it for one breath. I should like to know how you did it.",
  },
  man: {
    hostile: "You met that as a man, and used what the room gives a man. It is a credit, and credits are spent. Spend yours well.",
    wary: "A man in a hard room is expected to be hard. You met that as one, and I should like to know whether you were, or only seemed.",
    neutral: "You met that as a man, and the room was kind in the ways it is always kind to a man. Notice what it costs the people behind you.",
    warm: "You met that as a man who knew the room favoured him, and used the favour for someone else. It is rarer than courage, and I am glad to have seen it.",
    devoted: "I have watched many men use what the room gave them. I have watched very few give it away. You did, and the room did not know what to do. Neither, I think, did you.",
  },
  unspoken: {
    hostile: "You met that with no side to stand on, and the room found nothing to read. It does not forgive being left blank. I am not sure that I do.",
    wary: "A person with no side is hard to place and easy to overlook. You have chosen both. I should like to know what you meant by it.",
    neutral: "You met that with no answer to the question the room kept asking, and it went on asking. That is a hard thing to do to a room, and a harder one to survive.",
    warm: "You met that as someone the room had no column for, and gave it nothing it could use. It went on without them. I have not seen that before, and I find I am grateful.",
    devoted: "I have kept the Law for twelve years and never found a word for you. I think you are the answer to a question I had not learned to ask.",
  },
};

export const DAO_TURN_PREFIX = "dt_";
export const GENDER_TURN_PREFIX = "gt_";
export const daoTurnFlag = (dao: Dao, id: string) => `${DAO_TURN_PREFIX}${dao}_${id}`;
export const genderTurnFlag = (gender: Gender, id: string) => `${GENDER_TURN_PREFIX}${gender}_${id}`;
export const daoTurnScenarioId = (dao: Dao, id: string) => `DAO_TURN_${dao.toUpperCase()}_${id.toUpperCase()}`;
export const genderTurnScenarioId = (gender: Gender, id: string) => `GENDER_TURN_${gender.toUpperCase()}_${id.toUpperCase()}`;

/** What each Dao is, at the turn: the tone of the way it takes, and the stat it sharpens. */
const DAO_TONE: Record<Dao, ChoiceTone> = { none: "quiet", alchemy: "inquiry", forging: "force", talisman: "truth", formation: "inquiry", beast: "mercy", sword: "force", healing: "mercy", fate: "quiet" };
const DAO_STAT: Record<Dao, "qi" | "insight" | "karma"> = { none: "insight", alchemy: "insight", forging: "qi", talisman: "insight", formation: "insight", beast: "karma", sword: "qi", healing: "karma", fate: "insight" };
const GENDER_TONE: Record<Gender, ChoiceTone> = { woman: "truth", man: "force", unspoken: "inquiry" };

const heroIs = (field: "gender" | "dao", is: string): Condition => ({ kind: "hero", field, is: [is] });

/** The hidden choices a scene gains, if it is one of the main line’s turning points for a Dao or for a gender. */
export function turnChoices14(scene: Scene): Choice[] {
  const out: Choice[] = [];
  const dt = DAO_TURNS.find((t) => t.id === scene.id);
  if (dt) {
    for (const { value: dao } of DAOS) {
      const effects: Effect[] = [
        { kind: "setFlag", flag: daoTurnFlag(dao, dt.id) },
        { kind: "addCultivation", amount: 3 + 2 * dt.realm },
        { kind: "addDao", amount: 3 },
        { kind: "addStat", stat: DAO_STAT[dao], amount: 2 },
      ];
      out.push({
        id: `dao_${dao}`,
        label: dt.labels[dao],
        tone: DAO_TONE[dao],
        next: dt.next,
        requires: [heroIs("dao", dao), { kind: "flag", flag: daoTurnFlag(dao, dt.id), is: false }],
        hideLocked: true,
        effects,
        npcScenario: daoTurnScenarioId(dao, dt.id),
      });
    }
  }
  const gt = GENDER_TURNS.find((t) => t.id === scene.id);
  if (gt) {
    for (const { value: g } of GENDERS) {
      out.push({
        id: `peril_${g}`,
        label: gt.labels[g],
        tone: GENDER_TONE[g],
        next: gt.next,
        requires: [heroIs("gender", g), { kind: "flag", flag: genderTurnFlag(g, gt.id), is: false }],
        hideLocked: true,
        effects: [
          { kind: "setFlag", flag: genderTurnFlag(g, gt.id) },
          { kind: "addCultivation", amount: 3 + 2 * gt.realm },
          { kind: "addStat", stat: g === "woman" ? "insight" : g === "man" ? "qi" : "karma", amount: 2 },
        ],
        npcScenario: genderTurnScenarioId(g, gt.id),
      });
    }
  }
  return out;
}

const withTail = (lines: Record<Tier, string>, tail: string): Record<Tier, string> =>
  Object.fromEntries(TIERS.map((t) => [t, `${lines[t]} ${tail}`])) as Record<Tier, string>;

export function turnScenarios14(): Record<string, NpcScenario> {
  const out: Record<string, NpcScenario> = {};
  for (const t of DAO_TURNS) {
    for (const { value: dao } of DAOS) {
      const id = daoTurnScenarioId(dao, t.id);
      out[id] = {
        id,
        summary: `The player, ${dao === "none" ? "with no Dao" : `of the ${dao} Dao`}, meets ${t.id.replace(/_/g, " ")} in the way their craft allows.`,
        delta: { respect: 1, trust: 1 },
        lines: withTail(DAO_LINES[dao], t.tail),
      };
    }
  }
  for (const t of GENDER_TURNS) {
    for (const { value: g } of GENDERS) {
      const id = genderTurnScenarioId(g, t.id);
      out[id] = {
        id,
        summary: `The player, ${g === "unspoken" ? "who gives no answer" : `a ${g}`}, meets the danger at ${t.id.replace(/_/g, " ")} in the way their own allows.`,
        delta: { respect: 1, trust: 1 },
        lines: withTail(GENDER_LINES[g], t.tail),
      };
    }
  }
  return out;
}

const SOURCE = String.raw`
% su_dt_3 | count:dt_>=3 | elder | Three places on the mountain have now looked at your craft and not the person using it. I did not know scenes could do that. I begin to think they were waiting for someone with a Dao to arrive.
% su_dt_6 | count:dt_>=6 | elder | Six scenes, and each read your Dao before it read your name. I used to think the mountain had one door. It has as many as there are trades, and I have been standing at the wrong one for twelve years.
% su_dt_9 | count:dt_>=9 | elder | Nine times you have met the mountain as your craft would. I have a notion that the Dao is not what you practise but how you are allowed to see, and that the Law was built to forbid it.
% su_gt_3 | count:gt_>=3 | elder | Three times the mountain has put a danger in front of you, and three times it asked who you were before it asked what you would do. I should like to see the mountain answer for that.
% su_gt_6 | count:gt_>=6 | elder | Six dangers, and in each you met them as who you are. I used to think courage had no sex. I begin to think it has, and that it is not the same in everyone, and that this is the point.
% su_gt_9 | count:gt_>=9 | elder | Nine times. I have not met a single danger in my life as only what I was. You have done it nine times in a season, and I cannot decide whether to be envious or to put it in the Law.
`;
export const parsedTurnRemarks14 = () => parseRemarks(SOURCE, "hunts/main");
