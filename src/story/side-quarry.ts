import type { Scene } from "@/engine/types";

/**
 * Side Path: The Quarry Under the Archive. A vein of pale jade runs beneath the archive, and the
 * player follows it to the place the Sealing Jade was cut. Opened from the vault, and rejoins the
 * reading room.
 */
export const quarryScenes: Scene[] = [
  {
    id: "quarry_mouth",
    title: "Side Path: The Quarry Under the Archive",
    paragraphs: [
      "The pale vein in the vault wall runs on past the shard’s box and into the rock. You follow it through a crack behind the cellar shelves, down a ramp of broken stone where iron rails still lie rusted in their grooves. The air grows colder and smells of wet chalk and old oil.",
      "At the mouth of the tunnel someone has carved a line above the arch: The Law keeps what it cuts. The letters are deep and neat, and the dust in their grooves has never been brushed away.",
    ],
    choices: [
      { id: "follow_rails_in", label: "Follow the rusted rails into the tunnel, one hand on the wall.", tone: "quiet", next: "quarry_lamp" },
      { id: "ask_who_cut_here", label: "Read the carved line again and ask who would have cut it, and why.", tone: "inquiry", next: "quarry_foreman" },
      { id: "shaft_down_left", label: "Take the side passage to the left, where cold air breathes up from somewhere deep.", tone: "truth", next: "quarry_shaft" },
      { id: "spring_sound_right", label: "Take the passage to the right, toward the sound of running water.", tone: "mercy", next: "quarry_spring" },
    ],
  },
  {
    id: "quarry_lamp",
    title: "A Lamp Still Warm",
    paragraphs: [
      "A miner’s lamp hangs from a hook in the tunnel wall. Its oil is still warm when you touch the glass, and the wick has been trimmed by someone who meant to come back. The walls around it glitter with flecks of pale green, and when you lift the lamp, the stone gives back a low hum, too soft to be a voice.",
      "The sound is the same as the bells in the stone wall of the sutra stair. You feel it in your teeth before you hear it.",
    ],
    choices: [
      { id: "lift_lamp_higher", label: "Lift the lamp higher and follow the glitter deeper into the vein.", tone: "inquiry", next: "quarry_face" },
      { id: "set_lamp_down_quiet", label: "Set the lamp back on its hook and wait until the humming fades.", tone: "quiet", next: "quarry_face" },
      { id: "pocket_lamp_wick", label: "Snip a length from the wick and pocket it before the owner returns.", tone: "deceit", next: "quarry_face" },
      { id: "strike_wall_twice", label: "Strike the wall twice with your knuckle, to see what answers.", tone: "force", next: "quarry_face" },
    ],
  },
  {
    id: "quarry_face",
    title: "The Face of the Vein",
    paragraphs: [
      "The tunnel opens into a cavern cut square, its far wall a face of pale jade as tall as three men. Along the face, a half-circle has been carved out, clean and deep, the way a jeweller cuts a ring. The edge of the cut is still sharp, as if the chisel was set down only yesterday.",
      "Above the cut, in the same hand as the line at the mouth, someone has written: Half kept. The other half is still in the mountain.",
    ],
    choices: [
      { id: "trace_clean_cut", label: "Run your fingers along the clean edge of the half-circle, feeling for the place it was broken.", tone: "inquiry", next: "quarry_flaw" },
      { id: "kneel_before_cut", label: "Kneel before the cut, as you would before a tablet in the memorial.", tone: "mercy", next: "quarry_flaw" },
      { id: "measure_cut_span", label: "Measure the span of the half-circle with a length of cord, and tie a knot at each end.", tone: "truth", next: "quarry_flaw" },
      { id: "turn_from_face", label: "Turn your back on the face and walk to the far side of the cavern.", tone: "quiet", next: "quarry_flaw" },
    ],
  },
  {
    id: "quarry_flaw",
    title: "The Missing Piece",
    paragraphs: [
      "Beside the cut there is a flaw in the stone, a faint pale line running down the vein like a crack in ice. The line is shaped exactly like the shard you saw in the vault, a neat circle of concentric lines with one side broken away. If you held the shard to the wall, it would fit as cleanly as a key in its lock.",
      "The Sealing Jade on the altar was never whole. Someone cut it here, and kept one part, and sent the other half down the mountain with a living woman to hold it.",
    ],
    choices: [
      { id: "test_shard_fit", label: "Hold the shard you carry, if you still have it, to the flaw, and watch the line close.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 2 }], next: "quarry_cut_words" },
      { id: "press_palm_flaw", label: "Press your palm against the flaw and wait for it to warm.", tone: "mercy", next: "quarry_cut_words" },
      { id: "break_flaw_loose", label: "Chip at the flaw with the edge of your blade, to see whether it comes away.", tone: "force", next: "quarry_cut_words" },
      { id: "leave_flaw_alone", label: "Leave the flaw alone, and say nothing about it when you go back up.", tone: "deceit", next: "quarry_cut_words" },
    ],
  },
  {
    id: "quarry_cut_words",
    title: "The Words Beneath the Cut",
    paragraphs: [
      "Old carvings run along the base of the face, worn almost smooth by water. They are older than the sect, written in the curved script the Law Hall no longer teaches. Most of them are numbers, the counts of stones cut and carried. The last line is plain enough to read: Cut by the Law. Half kept, half given. The mountain will not be fed on one half alone.",
      "Below it, a small figure has been scratched into the stone, a girl with her hair tied back and a chisel in her hand. Someone has added a small comb above her head.",
    ],
    choices: [
      { id: "copy_stone_numbers", label: "Copy the stone numbers into your notes, so that the count is not lost.", tone: "inquiry", next: "quarry_return" },
      { id: "touch_girl_figure", label: "Touch the scratched girl with the tip of one finger, gently, as if she were real.", tone: "mercy", next: "quarry_return" },
      { id: "scrape_the_comb", label: "Scrape the little comb out of the stone before anyone else can find it.", tone: "deceit", next: "quarry_return" },
      { id: "leave_carvings_be", label: "Leave the carvings exactly as they are, and walk back toward the light.", tone: "quiet", next: "quarry_return" },
    ],
  },
  {
    id: "quarry_foreman",
    title: "The Foreman’s Ledger",
    paragraphs: [
      "A broad man in a leather apron comes up the ramp with a lamp in each hand. He is Kang, the foreman of the quarry, and he speaks as if he has rehearsed what he would say to the first stranger who came down. “The wardens pay us to forget the cuts,” he says. “A cut is a sum, and a sum is a wage. Nobody down here is paid to ask what the sum is for.”",
      "He sets one lamp on the rail and holds the other up so you can see his face. There is a long scar across his cheek, and his eyes are very tired.",
    ],
    choices: [
      { id: "ask_kang_for_wages", label: "Ask Kang to show you the wage ledger, if the quarry keeps one.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "quarry_heard_wages" }], next: "quarry_wage_ledger" },
      { id: "thank_kang_lamp", label: "Thank him for the lamp, and tell him you will not take anything from the quarry.", tone: "mercy", next: "quarry_wage_ledger" },
      { id: "tell_kang_cut_was_law", label: "Tell Kang plainly that the cut was made for the seal, and that the seal is failing.", tone: "truth", next: "quarry_wage_ledger" },
      { id: "steal_kangs_lamp", label: "Take one of his lamps while he is looking the other way, and walk on.", tone: "deceit", next: "quarry_wage_ledger" },
    ],
  },
  {
    id: "quarry_wage_ledger",
    title: "The Wage Ledger",
    paragraphs: [
      "The ledger is a thick book bound in oilcloth, with a column of names and a column of days. Most of the days are marked paid. Fourteen names have a different mark, a small black circle beside them and the words went down, not paid again. The circles were added in the same ink as the wages, by the same neat clerk’s hand.",
      "Kang watches you read the names. “My brother was one of the circles,” he says, very quietly. “He went down in the year of the Sealing, to pull the first stone out. They never sent his wage to my mother.”",
    ],
    choices: [
      { id: "say_his_name_aloud", label: "Ask Kang for his brother’s name, and read it aloud in the tunnel.", tone: "mercy", next: "quarry_rockfall" },
      { id: "count_the_circles", label: "Count the black circles twice, and write the number at the back of the ledger.", tone: "inquiry", next: "quarry_rockfall" },
      { id: "close_the_ledger", label: "Close the ledger gently, and put it back under the lamp where he keeps it.", tone: "quiet", next: "quarry_rockfall" },
      { id: "take_the_ledger", label: "Tuck the ledger under your arm and say you will bring it to the Elder yourself.", tone: "force", next: "quarry_rockfall" },
    ],
  },
  {
    id: "quarry_rockfall",
    title: "A Fall in the Dark",
    paragraphs: [
      "A groan runs through the rock, and the ceiling of the far tunnel lets go in a rush of pale chips and dust. The lamps swing. When the dust settles, a miner is pinned beneath a slab at the end of the rail, one arm stretched out in the light, and the light is shaking with his breathing.",
      "“Ah Tong,” Kang shouts, already running. “Ah Tong, hold still. Hold still. The stone is only resting on you.”",
    ],
    choices: [
      { id: "help_dig_out", label: "Get down on the rubble beside Kang and lift the slab with him.", tone: "mercy", effects: [{ kind: "setFlag", flag: "quarry_rescued_miner" }], next: "quarry_dig_out" },
      { id: "call_for_wardens", label: "Shout up the tunnel for the wardens, and tell them there has been a fall.", tone: "truth", next: "quarry_dig_out" },
      { id: "measure_slab", label: "Measure the weight of the slab with your qi, and say where the miner should be pulled from.", tone: "force", effects: [{ kind: "addStat", stat: "qi", amount: 2 }], next: "quarry_dig_out" },
      { id: "wait_and_watch", label: "Hold the lamp steady for Kang, and wait for him to call for you.", tone: "quiet", next: "quarry_dig_out" },
    ],
  },
  {
    id: "quarry_dig_out",
    title: "Ah Tong’s Story",
    paragraphs: [
      "They pull Ah Tong free with a rope and a plank, and he lies on the rail with his arm bound in his own shirt, breathing hard. He is young, not much more than a boy, and he has the grey dust of the vein in every crease of his face. “The cut was for the seal,” he says, looking up at the roof. “The masters told us so, fifteen years ago. They said the mountain would eat us if we did not give it a piece of itself. We gave it fourteen.”",
      "Kang puts a hand on his shoulder and does not take it away.",
    ],
    choices: [
      { id: "ask_ah_tong_fourteen", label: "Ask Ah Tong who the fourteen were, and whether he knew any of them.", tone: "inquiry", next: "quarry_return" },
      { id: "carry_ah_tong_out", label: "Offer to carry Ah Tong up the ramp on your back, with his good arm around your neck.", tone: "mercy", next: "quarry_return" },
      { id: "tell_ah_tong_truth", label: "Tell Ah Tong that the masters who ordered the cut are the ones the Elder is judging.", tone: "truth", next: "quarry_return" },
      { id: "leave_ah_tong_be", label: "Leave the boy with Kang, and walk to the mouth of the tunnel without a word.", tone: "quiet", next: "quarry_return" },
    ],
  },
  {
    id: "quarry_shaft",
    title: "The Breathing Shaft",
    paragraphs: [
      "The side passage ends in a round shaft cut straight down into the mountain. Red mist rises from its depths in slow breaths, and each breath is warm and sweet, like incense left too long in a closed room. Iron rungs have been driven into the wall, and they lead down into a dark that has no bottom you can see.",
      "Somewhere below, a voice is counting. It is very faint, and it does not hurry. Each number is followed by the soft clink of a stone set down on stone.",
    ],
    choices: [
      { id: "climb_down_rungs", label: "Climb down the first few rungs and listen to the numbers more closely.", tone: "inquiry", next: "quarry_seal_stone" },
      { id: "call_down_shaft", label: "Call down the shaft and ask the voice whether it needs help.", tone: "mercy", next: "quarry_seal_stone" },
      { id: "drop_stone_down", label: "Drop a loose chip of jade into the shaft, and count how long it takes to land.", tone: "force", next: "quarry_seal_stone" },
      { id: "step_back_from_shaft", label: "Step back from the edge, and wait for the counting to stop of its own accord.", tone: "quiet", next: "quarry_seal_stone" },
    ],
  },
  {
    id: "quarry_seal_stone",
    title: "The Stone of the Seal",
    paragraphs: [
      "Halfway down the rungs, a ledge of pale rock juts out from the shaft wall. On it sits a single stone block, squared and polished, and carved on its upper face with the sealing script of the Law Hall. The characters are the same as those on the altar, and they read the same way: Hold, and do not let go. The stone is warm under your palm.",
      "A seam runs around the block where the sealing script ends, a hair-thin crack that someone has tried to close with fresh clay.",
    ],
    choices: [
      { id: "read_sealing_script", label: "Read the sealing script aloud, slowly, the way the masters read the seal each dawn.", tone: "inquiry", next: "quarry_counting_voice" },
      { id: "press_hand_seam", label: "Press your hand into the seam where the clay has been added, and feel for the gap beneath.", tone: "mercy", next: "quarry_counting_voice" },
      { id: "pry_block_loose", label: "Set the edge of your blade into the seam, and lean on it until the block shifts.", tone: "force", next: "quarry_counting_voice" },
      { id: "feel_seam_for_heart", label: "Lay your palm on the sealing script and feel for the seam beneath the clay, where the warmth goes deeper.", tone: "truth", effects: [{ kind: "setFlag", flag: "quarry_found_heart" }], next: "quarry_heart" },
    ],
  },
  {
    id: "quarry_counting_voice",
    title: "The Voice That Counts",
    paragraphs: [
      "The counting stops when you speak. There is a pause long enough for the mist to rise a finger’s width, and then the voice answers, close and clear, the way someone speaks from a few feet away in a well. “Forty-one,” it says. “You have stopped me at forty-one. The count was always going to be forty-one. I have only been waiting to be asked.”",
      "A line of red light climbs the rungs, touching each one, and fades. The voice does not come again.",
    ],
    choices: [
      { id: "ask_what_count_means", label: "Ask the voice what the count is for, and whether it can be finished.", tone: "inquiry", next: "quarry_climb_back" },
      { id: "answer_forty_two", label: "Call out forty-two, and wait to see whether the mist will give you the next name.", tone: "mercy", next: "quarry_climb_back" },
      { id: "order_voice_quiet", label: "Tell the voice that the count is over, and command it to stop.", tone: "force", next: "quarry_climb_back" },
      { id: "climb_away_quietly", label: "Climb back up the rungs without answering, and let the count go on without you.", tone: "quiet", next: "quarry_climb_back" },
    ],
  },
  {
    id: "quarry_climb_back",
    title: "Up the Iron Rungs",
    paragraphs: [
      "The climb up is longer than the climb down. Your hands slip on the cold iron, and the mist follows you up the shaft like a dog that has decided you belong to it. At the top, the air is thin and dry, and the tunnel lamps are a relief to see.",
      "Before you leave the shaft mouth, you notice that the red mist has left a faint pattern on your sleeve, the shape of a lotus with its petals half open.",
    ],
    choices: [
      { id: "wipe_sleeve_clean", label: "Wipe the pattern from your sleeve with a damp cloth, and say nothing about it.", tone: "deceit", next: "quarry_return" },
      { id: "keep_sleeve_pattern", label: "Leave the pattern as it is, so that anyone who looks will see where you have been.", tone: "truth", next: "quarry_return" },
      { id: "rest_on_the_rail", label: "Sit on the rail for a moment and breathe until your heart is quiet.", tone: "quiet", next: "quarry_return" },
      { id: "study_the_pattern", label: "Study the pattern on your sleeve, and try to remember how the petals were arranged.", tone: "inquiry", next: "quarry_return" },
    ],
  },
  {
    id: "quarry_spring",
    title: "The Spring Under the Stone",
    paragraphs: [
      "The passage to the right opens into a grotto where a spring comes out of the rock, clear as glass and cold enough to ache in the teeth. It pools in a basin cut from pale jade and runs out through a channel into the dark. The water is so clean that you can see the bottom, and the bottom is covered with coins.",
      "Each coin is old and worn, and each one was dropped by someone who wanted to be remembered by the spring.",
    ],
    choices: [
      { id: "drink_the_spring", label: "Kneel by the basin and drink from your cupped hands, slowly.", tone: "quiet", effects: [{ kind: "addStat", stat: "qi", amount: 2 }], next: "quarry_blind_cutter" },
      { id: "count_the_coins", label: "Count the coins on the bottom of the basin, and note their ages.", tone: "inquiry", next: "quarry_blind_cutter" },
      { id: "add_coin_for_mengjiao", label: "Drop a coin of your own into the basin, and say a name as it sinks.", tone: "mercy", next: "quarry_blind_cutter" },
      { id: "take_one_coin", label: "Fish out the newest coin from the bottom, and slip it into your sleeve.", tone: "deceit", next: "quarry_blind_cutter" },
    ],
  },
  {
    id: "quarry_blind_cutter",
    title: "Wei, Who Cut the First Line",
    paragraphs: [
      "An old man sits on a stool beside the channel, with a stone chisel across his knees and a cloth over his eyes. He is called Wei, and he has been cutting jade in these tunnels since before the sect was built. He cannot see you, but he turns his head toward your footsteps the moment you stop, as a bird turns toward a worm.",
      "“The first line on the face was cut by a girl,” he says. “The Su girl. She had a lotus chisel, and she would not let the masters hold her wrist. She said the mountain should feel every stroke. I said the mountain has never felt anything in its life. She laughed at me.”",
    ],
    choices: [
      { id: "ask_wei_about_girl", label: "Ask Wei what the girl looked like when she cut the first line.", tone: "inquiry", next: "quarry_steady_hands" },
      { id: "hold_wei_hand", label: "Take the old man’s hand and hold it while he tells the rest of the story.", tone: "mercy", next: "quarry_steady_hands" },
      { id: "tell_wei_girl_alive", label: "Tell Wei that the Su girl is alive, and that she remembers his laugh.", tone: "truth", next: "quarry_steady_hands" },
      { id: "walk_past_wei", label: "Walk past the old man without slowing, and head for the cutting wall.", tone: "quiet", next: "quarry_steady_hands" },
    ],
  },
  {
    id: "quarry_steady_hands",
    title: "The Cutting Wall",
    paragraphs: [
      "A wall of pale stone stands at the end of the grotto, and the cutters have left their tools in neat rows along a bench. A line has been scored into the wall at chest height, and it is perfectly straight. Wei says that anyone who can follow the line with a chisel without a tremor may have the next block in the quarry, and no one has ever done it.",
      "You pick up the nearest chisel. Its handle is worn to the shape of someone else’s fingers, and it is heavier than you expected.",
    ],
    choices: [
      { id: "follow_line_steady", label: "Set the chisel on the scored line and follow it slowly, without a tremor.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 1 }], next: "quarry_carry_stone" },
      { id: "cut_with_qi", label: "Guide the chisel with your qi, so that the line is cut in a single stroke.", tone: "force", next: "quarry_carry_stone" },
      { id: "hand_chisel_back", label: "Put the chisel back on the bench and tell Wei you are not worthy of the block.", tone: "mercy", next: "quarry_carry_stone" },
      { id: "pocket_chisel", label: "Slip the small chisel into your robe while the cutters are busy with the next block.", tone: "deceit", next: "quarry_carry_stone" },
    ],
  },
  {
    id: "quarry_carry_stone",
    title: "A Chip of Pale Jade",
    paragraphs: [
      "The line you cut, or failed to cut, leaves a chip of pale jade on the floor. It is no bigger than a plum stone, and it is perfectly clear at its heart. When you lift it to the light, the inside turns faintly green, as though something beneath the surface has noticed you.",
      "Wei’s head turns toward the sound of the chip being picked up. “Take it if you want it,” he says. “It is only dust that has learned to hold a shape. The mountain sheds it every hundred years, and the Law always asks for it back.”",
    ],
    choices: [
      { id: "keep_chip_token", label: "Keep the chip in your palm as a token, and promise to return it to the vein.", tone: "mercy", next: "quarry_return" },
      { id: "study_chip_light", label: "Hold the chip up to the lamp, and study how the green moves through it.", tone: "inquiry", next: "quarry_return" },
      { id: "leave_chip_behind", label: "Set the chip down on the bench, exactly where you found the chisel.", tone: "quiet", next: "quarry_return" },
      { id: "sell_chip_to_law", label: "Tell Wei that the Law Hall will pay for every chip the mountain sheds, and keep the coins.", tone: "deceit", next: "quarry_return" },
    ],
  },
  {
    id: "quarry_heart",
    title: "The Heart of the Vein",
    paragraphs: [
      "The seam gives way under your palm with a soft click, and a panel of stone slides aside. Behind it lies a socket cut into the living rock, and in the socket sits a second shard of pale jade, glowing softly from within. It is the twin of the shard in the vault, and when you look at the two side by side in your mind, the broken edges match exactly.",
      "The glow beats slowly, once for every breath you take. Somewhere far above, the bell of the sutra hall answers it.",
    ],
    choices: [
      { id: "lift_shard_from_socket", label: "Lift the shard from its socket, and hold it to the light of your lamp.", tone: "inquiry", next: "quarry_mending" },
      { id: "leave_shard_glowing", label: "Leave the shard in its socket, and close the panel gently above it.", tone: "quiet", next: "quarry_mending" },
      { id: "take_shard_to_law", label: "Take the shard in both hands and promise yourself you will carry it to the Elder.", tone: "truth", next: "quarry_mending" },
      { id: "pocket_shard_socket", label: "Pry the shard out and conceal it in your sleeve before anyone else can see it glow.", tone: "deceit", next: "quarry_mending" },
    ],
  },
  {
    id: "quarry_mending",
    title: "A Cut That Could Close",
    paragraphs: [
      "With the shard in your hand, you can see the old cut on the face of the vein more clearly than before. The line is a wound in the mountain, not a mark of ownership. A pale seam runs from the socket to the flaw, and it is almost ready to close, if something were laid carefully along it.",
      "The mountain is waiting, the way it has waited for fifteen years, for someone to finish the cut or mend it.",
    ],
    choices: [
      { id: "set_shard_in_flaw", label: "Lay the shard in the flaw, and press it gently until the seam begins to close.", tone: "mercy", effects: [{ kind: "addStat", stat: "karma", amount: 3 }], next: "quarry_return" },
      { id: "measure_mend_seam", label: "Measure the seam with a length of cord before you touch it, so that nothing is set crooked.", tone: "inquiry", next: "quarry_return" },
      { id: "break_seam_further", label: "Drive the blade into the seam, so that the mountain cannot close it again.", tone: "force", next: "quarry_return" },
      { id: "walk_away_from_seam", label: "Walk away from the seam and leave the decision to the Elder.", tone: "quiet", next: "quarry_return" },
    ],
  },
  {
    id: "quarry_return",
    title: "Back to the Reading Room",
    paragraphs: [
      "The rails lead you back up the ramp and through the crack behind the cellar shelves. The archive smells of cedar and ash again, and the lamps in the reading room are lit, as though no one has left them since you were gone.",
      "The Elder’s instructions are still waiting for you on the table. She wants to know what the vein holds, and what you have carried out of it.",
    ],
    interjections: [
      {
        when: [{ kind: "flag", flag: "quarry_found_heart" }],
        line: "The second shard glowed for you in its socket. I felt it through the jade eye like a hand on my wrist. Do not let it go cold before you bring it to me.",
      },
    ],
    choices: [
      { id: "report_quarry_to_jade_eye", label: "Tell the jade-eye what the quarry held, the cut, the names, and the second half of the jade.", tone: "truth", npcScenario: "REPORT_QUARRY", next: "archive_reading_room" },
      { id: "keep_quarry_secret", label: "Say nothing about the vein. Keep the shard, the cut and the names to yourself.", tone: "deceit", next: "archive_reading_room" },
      { id: "sit_and_breathe_quarry", label: "Sit at the reading table and breathe until the cold has left your hands.", tone: "quiet", next: "archive_reading_room" },
      { id: "ask_about_cut_archive", label: "Ask Lin Yuan, at the front desk, whether the archive has any records of the quarry.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 1 }], next: "archive_reading_room" },
    ],
  },
];
