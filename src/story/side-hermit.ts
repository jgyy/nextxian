import type { Scene } from "@/engine/types";

/**
 * Side Path: The Eastern Peak. An old master who taught both Su sisters their first methods lives
 * alone above the sect. He will not teach the eighth. Opened from the abyss, and rejoins the Law
 * Hall on the way back.
 */
export const hermitScenes: Scene[] = [
  {
    id: "hermit_foot",
    title: "Side Path: The Eastern Peak",
    paragraphs: [
      "The path to the eastern peak starts behind the last of the sect’s cypress trees, where the stone steps are worn into shallow dips by a century of feet. A wooden sign has been nailed to the first step, the letters faded almost to nothing: Those who climb must set down one thing at the bottom.",
      "Above the steps, the peak is hidden in cloud. A thin line of smoke rises from somewhere near its summit, straight and grey, as though a single pot has been left to simmer on a hearth nobody has tended for years.",
    ],
    choices: [
      { id: "climb_cut_steps", label: "Climb the cut steps one at a time, counting them in silence.", tone: "quiet", next: "hermit_steps" },
      { id: "run_for_summit", label: "Run up the steps at full speed, to see whether the old man will hear you coming.", tone: "force", next: "hermit_wind" },
      { id: "look_for_carved_cave", label: "Look for the cave with carved sutra lines that the cypress keepers mention in their songs.", tone: "inquiry", next: "hermit_cave" },
      { id: "follow_plum_path", label: "Follow the narrow path of plum trees that curls off to the left of the steps.", tone: "mercy", next: "hermit_garden" },
    ],
  },
  {
    id: "hermit_steps",
    title: "The Cut Steps",
    paragraphs: [
      "The steps are cut into the rock by hands that wanted every stair to be level, and they are. Halfway up, a niche has been carved into the cliff, and in it sits a clay bowl of cold rice with a single chopstick laid across it. Someone has eaten here recently. The chopstick is still damp.",
      "Beyond the niche, the cloud opens for a moment, and you see the sect far below, its roofs grey and small, the Law Hall a dark square at its heart.",
    ],
    choices: [
      { id: "eat_cold_rice", label: "Eat a little of the cold rice, to show whoever ate here that you mean no harm.", tone: "mercy", next: "hermit_hut" },
      { id: "look_down_at_sect", label: "Stand at the edge of the niche and look down at the sect until the cloud closes again.", tone: "inquiry", next: "hermit_hut" },
      { id: "take_chopstick", label: "Take the chopstick from the bowl and carry it up with you as a marker.", tone: "deceit", next: "hermit_hut" },
      { id: "rest_in_niche", label: "Rest in the niche with your back to the cliff, until your breath comes evenly.", tone: "quiet", next: "hermit_hut" },
    ],
  },
  {
    id: "hermit_hut",
    title: "A Hut of Grey Timber",
    paragraphs: [
      "The hut at the summit is no bigger than a cart, built of grey timber that has weathered to the colour of stone. Its door is open. Inside, a pool of still water sits in a shallow basin of black lacquer, and it reflects the ceiling so perfectly that the room seems to have two roofs. An old man kneels beside the basin with his back to you, pouring tea into a single cup.",
      "“You came up the steps,” he says, without turning. “Most people send a letter. Set down the thing you carried. I can hear it rattling.”",
    ],
    choices: [
      { id: "set_down_thing_bottom", label: "Set down the dust of the sect at the threshold, and step inside with empty hands.", tone: "mercy", next: "hermit_tea" },
      { id: "ask_who_you_are", label: "Ask the old man who he is, and how he knows what you carried.", tone: "inquiry", next: "hermit_tea" },
      { id: "step_over_threshold", label: "Step over the threshold without stopping, and sit down beside the basin.", tone: "force", next: "hermit_tea" },
      { id: "wait_outside_door", label: "Wait on the step until he tells you to come in, as a disciple would.", tone: "quiet", next: "hermit_tea" },
    ],
  },
  {
    id: "hermit_tea",
    title: "Tea by the Still Water",
    paragraphs: [
      "The old master is called Lu Ming. He has the face of a man who has spent most of his life looking at water. He pushes the cup across the lacquer and watches you drink. “I taught two girls the first seven methods,” he says. “Both of them were stubborn. One of them learned to breathe like a mountain. The other learned to breathe like the mist. I told them both that the eighth method was not a method at all, but a bargain, and that the bargain would one day ask for a name.”",
      "He touches the water with one finger, and a ripple runs out to the edges of the basin and back again.",
    ],
    choices: [
      { id: "ask_which_girl_was_which", label: "Ask which of the two girls was the Elder, and which one was Mengjiao.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "heard_lu_ming_sisters" }], next: "hermit_lesson" },
      { id: "thank_master_tea", label: "Thank him for the tea, and tell him you have come a long way to hear what he knows.", tone: "mercy", next: "hermit_lesson" },
      { id: "tell_master_bargain_taken", label: "Tell him the bargain has already been taken, and that a name was paid fifteen years ago.", tone: "truth", next: "hermit_lesson" },
      { id: "drink_quietly_wait", label: "Drink the rest of the tea in silence, and wait for him to speak again.", tone: "quiet", next: "hermit_lesson" },
    ],
  },
  {
    id: "hermit_lesson",
    title: "The Lesson of Breath",
    paragraphs: [
      "“Breathe,” the old man says. “Not the way the sect teaches you, counting the meridians like the rungs of a ladder. Breathe the way water breathes against a stone. In for as long as the stone is cold, out for as long as it stays warm.” He demonstrates, and the still water in the basin rises and falls with him, as if it were his lungs.",
      "“The Su girls breathed differently,” he says. “One held her breath until she turned blue. The other breathed so fast she could never hear her own heart. You both did the same thing, in the end. You forgot to listen.”",
    ],
    choices: [
      { id: "breathe_with_water", label: "Breathe in time with the water, until the ripples slow to match your breath.", tone: "quiet", effects: [{ kind: "addStat", stat: "qi", amount: 3 }], next: "hermit_return" },
      { id: "ask_why_they_forgot", label: "Ask him why the Su girls forgot to listen, and what they should have heard.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 2 }], next: "hermit_return" },
      { id: "press_breath_hard", label: "Breathe hard and fast, to prove that you can out-breathe the water.", tone: "force", next: "hermit_return" },
      { id: "teach_him_breath", label: "Tell him you have learned to breathe in the abyss, where the mist is listening.", tone: "truth", next: "hermit_return" },
    ],
  },
  {
    id: "hermit_wind",
    title: "Wind on the Ridge",
    paragraphs: [
      "The wind on the ridge is cold and constant, and it pulls at your sleeves as you climb. Along the ridge, bells hang from iron poles, dozens of them, small and dark. The wind sets them ringing one after another, and the sound is like the names being called across a field by people who cannot see one another.",
      "A bell near the path has been taken down and laid on a stone, and beside it sits a small clay figure with its face scraped away.",
    ],
    choices: [
      { id: "hang_bell_back", label: "Hang the fallen bell back on its iron pole, and tie it firm against the wind.", tone: "mercy", next: "hermit_bell" },
      { id: "ask_about_bells", label: "Ask who hung the bells, and why there are so many on one ridge.", tone: "inquiry", next: "hermit_bell" },
      { id: "strike_nearest_bell", label: "Strike the nearest bell hard enough to drown out the wind.", tone: "force", next: "hermit_bell" },
      { id: "walk_on_past_bells", label: "Walk on past the bells with your head down, and let the wind carry the sound behind you.", tone: "quiet", next: "hermit_bell" },
    ],
  },
  {
    id: "hermit_bell",
    title: "A Bell for Each Name",
    paragraphs: [
      "A caretaker in a patched coat comes along the ridge with a basket of wicks. He tells you the bells were hung by the old master, one for each disciple who came up the steps and did not return down them. “He rings them only when the wind is from the abyss,” the caretaker says. “Today it is from the abyss. You can smell it.”",
      "The bells go on ringing, and the caretaker counts them without moving his lips, as if he is afraid of missing one.",
    ],
    choices: [
      { id: "count_bells_with_him", label: "Count the bells with him, aloud, one after another until the wind drops.", tone: "mercy", next: "hermit_question" },
      { id: "ask_how_many_bells", label: "Ask how many bells there are, and whether the master has ever been short of one.", tone: "inquiry", next: "hermit_question" },
      { id: "tell_caretaker_truth", label: "Tell the caretaker that the Law Hall has its own bells, and that they are ringing for the wrong people.", tone: "truth", next: "hermit_question" },
      { id: "walk_beside_caretaker", label: "Walk beside the caretaker in silence until you reach the hut.", tone: "quiet", next: "hermit_question" },
    ],
  },
  {
    id: "hermit_question",
    title: "The Master’s Question",
    paragraphs: [
      "Lu Ming is waiting for you at the hut door, his hands folded inside his sleeves. He does not greet you. He asks one question, and he asks it slowly. “If the mist asked you for one name, and you knew it would give the rest of your people back in return, which name would you give it? Do not answer quickly. The mist can hear a quick answer.”",
      "The bells go quiet, one after another, as the wind drops away.",
    ],
    choices: [
      { id: "answer_own_name", label: "Answer that you would give your own name, because it is the only one you are sure of.", tone: "truth", next: "hermit_answer" },
      { id: "answer_no_name", label: "Answer that you would give no name at all, and ask the mist for something else.", tone: "force", next: "hermit_answer" },
      { id: "ask_master_for_answer", label: "Ask him what the mist does with the names it keeps, before you choose.", tone: "inquiry", next: "hermit_answer" },
      { id: "keep_silent_question", label: "Say nothing, and let the silence stand as your answer until the wind rises again.", tone: "quiet", next: "hermit_answer" },
    ],
  },
  {
    id: "hermit_answer",
    title: "What the Mist Keeps",
    paragraphs: [
      "Lu Ming nods, as if you have given the answer he expected and hoped you would not. “The mist keeps names the way a clerk keeps a ledger,” he says. “It does not read them. It only counts them. A name given is a name counted once, and then it stays where it was put, in the cold, forever. That is why the girl wanted you to say hers aloud. A counted name is a name that can be called back.”",
      "He turns back into the hut and leaves the door open behind him, so that the cold air from the abyss comes in across the lacquer basin, rippling the water.",
    ],
    choices: [
      { id: "follow_into_hut", label: "Follow him into the hut, and stand where the cold air touches your face.", tone: "inquiry", next: "hermit_return" },
      { id: "call_her_name_master", label: "Call out the Su girl’s name into the doorway, and hear it come back to you.", tone: "mercy", next: "hermit_return" },
      { id: "close_hut_door", label: "Close the door against the cold, so that the basin can settle again.", tone: "quiet", next: "hermit_return" },
      { id: "take_master_cup", label: "Pick up the master’s empty cup and turn it over, to see what it was made from.", tone: "deceit", next: "hermit_return" },
    ],
  },
  {
    id: "hermit_cave",
    title: "The Cave of Carved Lines",
    paragraphs: [
      "The cave is shallow, a hollow in the cliff where the rock has been smoothed by a great many hands. Its walls are covered with lines of the old sutra script, cut deep and then rubbed with ochre so that they stand out in the lamplight. They are not the Law’s script, and they are not the Blood Lotus. They are the words that came before both, the ones the first masters used when they still listened to the mountain.",
      "At the back of the cave, a figure is painted in red: a woman with her hair up, holding a chisel as if she is about to begin a stroke.",
    ],
    choices: [
      { id: "read_old_script", label: "Read the oldest lines aloud, slowly, letting each character land before the next.", tone: "inquiry", next: "hermit_mirror" },
      { id: "touch_painted_woman", label: "Touch the red figure lightly, and say that you do not mean to disturb her.", tone: "mercy", next: "hermit_mirror" },
      { id: "scrape_one_line", label: "Scrape one line from the wall with your knife, to take back to the Law Hall.", tone: "deceit", next: "hermit_mirror" },
      { id: "sit_before_figure", label: "Sit on the cold floor in front of the figure and wait for the cave to speak.", tone: "quiet", next: "hermit_mirror" },
    ],
  },
  {
    id: "hermit_mirror",
    title: "The Mirror of Breath",
    paragraphs: [
      "At the back of the cave, a basin of still water is set into the floor, the same as the one in the hut. Above it hangs a bronze mirror on a chain, polished so bright that it reflects the cave’s roof in perfect detail. You lean over the basin, and the mirror’s reflection is a fraction slower than your own, as though it is catching up to you.",
      "A slip of paper sits beside the basin, its edges curled from damp. It says only: Do not breathe with the water until you know which of you is breathing first.",
    ],
    choices: [
      { id: "breathe_with_mirror", label: "Breathe in the still water and wait for the mirror to catch up.", tone: "quiet", next: "hermit_memory" },
      { id: "study_mirror_frame", label: "Study the bronze frame of the mirror, and count the patterns in its border.", tone: "inquiry", next: "hermit_memory" },
      { id: "touch_mirror_water", label: "Touch the water with your fingertip, and watch the mirror’s reflection shiver until it shows something else.", tone: "force", next: "hermit_secret_scroll" },
      { id: "leave_mirror_for_master", label: "Leave the basin as you found it, and tell the master what you have seen.", tone: "truth", next: "hermit_memory" },
    ],
  },
  {
    id: "hermit_memory",
    title: "A Girl Who Shouted at the Mountain",
    paragraphs: [
      "Lu Ming remembers the Elder as a girl, standing on this same ridge in a grey robe too big for her, shouting at the mountain until her voice cracked. “She wanted the mountain to answer her,” he says. “It did, in its own way. It sent her sister back down the path with a silver comb in her hair, and the comb was the only thing that came back up.”",
      "He opens a small box and shows you the comb, its teeth bent, the silver tarnished but whole. “Wanru gave it to her sister the year before the Sealing. Mengjiao gave it back to me. She said she did not want the mountain to hold her hair up.”",
    ],
    choices: [
      { id: "ask_comb_meaning", label: "Ask what the comb meant to the sisters, and why it came back to him.", tone: "inquiry", next: "hermit_parting" },
      { id: "return_comb_to_box", label: "Close the box gently, and tell him the comb belongs to the Elder now.", tone: "mercy", next: "hermit_parting" },
      { id: "take_comb_for_elder", label: "Take the comb in your palm and say you will carry it down to the Elder yourself.", tone: "truth", next: "hermit_parting" },
      { id: "hold_comb_quiet", label: "Hold the comb for a moment, saying nothing, and feel the weight of the silver.", tone: "quiet", next: "hermit_parting" },
    ],
  },
  {
    id: "hermit_parting",
    title: "The Parting at the Hut",
    paragraphs: [
      "You climb back out of the cave to the hut, where the cloud is lifting from the peak and the sect is visible again below, its roofs bright with a sudden warmth. Lu Ming stands at his door with the lacquer basin behind him. He has the look of a man who has said everything he has to say, and who would prefer to say nothing more until someone comes up the steps to ask.",
      "“Go down,” he says. “Tell the Elder that the old man has not changed his mind. The eighth method is still a bargain. The mountain never gives back what it has been paid unless someone is willing to listen for it.”",
    ],
    choices: [
      { id: "promise_master_message", label: "Promise to carry his message down the steps, word for word, and to listen for the mountain.", tone: "mercy", next: "hermit_return" },
      { id: "ask_master_how_listen", label: "Ask him how a person listens for a mountain, and what it sounds like when it answers.", tone: "inquiry", next: "hermit_return" },
      { id: "bow_and_go_down", label: "Bow to him at the door, and start down the steps without looking back.", tone: "quiet", next: "hermit_return" },
      { id: "argue_with_master", label: "Tell him the bargain is not his to decide, and that the Elder will decide it.", tone: "force", next: "hermit_return" },
    ],
  },
  {
    id: "hermit_garden",
    title: "The Plum Garden",
    paragraphs: [
      "The narrow path curls through a garden of plum trees, their bare branches crusted with frost. A small pavilion stands in the middle of the garden, roofed with grey tile. On a stone table inside, a game of stones has been left half played, the black pieces crowded to one side and the white ones scattered wide.",
      "The old master’s voice comes from somewhere behind the pavilion. “Sit,” he says. “You are standing in the middle of my last argument.”",
    ],
    choices: [
      { id: "sit_at_stone_table", label: "Sit down at the stone table and look at the board carefully before you touch it.", tone: "inquiry", next: "hermit_chess" },
      { id: "wait_for_master", label: "Wait under the plum trees until the old master comes round the pavilion.", tone: "quiet", next: "hermit_chess" },
      { id: "knock_over_black", label: "Knock over one of the black pieces to see whether the master will be angry.", tone: "force", next: "hermit_chess" },
      { id: "bow_to_plum_trees", label: "Bow to the plum trees, and wait for permission to enter the pavilion.", tone: "mercy", next: "hermit_chess" },
    ],
  },
  {
    id: "hermit_chess",
    title: "The Game of Stones",
    paragraphs: [
      "Lu Ming sits down across the table and studies the board with a patience that seems to have no end. “The Su girls played this game when they were children,” he says. “One always played black and the other always played white. Neither ever won. I used to tell them that was the point. The board is only a way of agreeing on how many pieces the mountain is allowed to keep.”",
      "He moves a white stone to the centre of the board, and it fits exactly into a small hollow carved there, as though it has been waiting for him all winter.",
    ],
    choices: [
      { id: "play_black_back", label: "Answer with a black stone in the corner, and wait to see how he answers.", tone: "inquiry", next: "hermit_warning" },
      { id: "leave_board_alone", label: "Leave the board as it is, and let him keep the centre he has taken.", tone: "quiet", next: "hermit_warning" },
      { id: "sweep_board_clear", label: "Sweep the stones off the board with your sleeve, and tell him the game is over.", tone: "force", next: "hermit_warning" },
      { id: "ask_who_won_last", label: "Ask him who won the last game between the two sisters, and whether he remembers.", tone: "truth", next: "hermit_warning" },
    ],
  },
  {
    id: "hermit_warning",
    title: "The Master’s Warning",
    paragraphs: [
      "The old man’s voice drops, and the plum trees seem to lean closer to hear. “The Blood Lotus teaches you to forget one name,” he says. “My own master taught me to remember them all, and that is harder, because a memory is heavy and a name is light. The sutra is a bargain made by someone who was tired of carrying. It is not the mountain’s bargain. It is the Law’s.”",
      "He looks at the white stone in the centre of the board for a long time. “Do not let the girl who holds the lantern choose for you. She has already chosen once.”",
    ],
    choices: [
      { id: "ask_who_girl_lantern", label: "Ask him which girl holds the lantern, and what she chose the first time.", tone: "inquiry", next: "hermit_gift" },
      { id: "promise_remember_names", label: "Promise him that you will remember every name you have been asked to forget.", tone: "mercy", next: "hermit_gift" },
      { id: "tell_master_law_wrong", label: "Tell him the Law chose for the girl already, fifteen years ago, with a signature.", tone: "truth", next: "hermit_gift" },
      { id: "walk_off_board", label: "Stand up from the table without answering, and walk away between the plum trees.", tone: "quiet", next: "hermit_gift" },
    ],
  },
  {
    id: "hermit_gift",
    title: "A Gift Wrapped in Oiled Paper",
    paragraphs: [
      "Before you leave the garden, the old master presses a small parcel into your hand. It is wrapped in oiled paper and tied with a length of grey thread. Through the paper you can feel the stiff, folded edges of a document, and something softer beneath it, like a dried flower.",
      "“Open it on the steps,” he says. “Not in the hall. The Law does not like to be surprised by what it did not expect to find.”",
    ],
    choices: [
      { id: "open_parcel_on_steps", label: "Untie the thread on the steps, and read what the paper holds before you go any further.", tone: "inquiry", next: "hermit_return" },
      { id: "keep_parcel_sealed", label: "Keep the parcel sealed, and carry it down to the Elder exactly as it was given to you.", tone: "truth", next: "hermit_return" },
      { id: "tuck_parcel_sleeve", label: "Slip the parcel into your sleeve, and say that you have not received anything at all.", tone: "deceit", next: "hermit_return" },
      { id: "thank_master_parcel", label: "Bow to the old man, and tell him the parcel will be kept with the same care as the bell.", tone: "mercy", next: "hermit_return" },
    ],
  },
  {
    id: "hermit_secret_scroll",
    title: "The First Page",
    paragraphs: [
      "Beneath the basin, set into a niche in the floor, lies a scroll bound in grey silk. The silk is brittle, and when you lift it, the threads come away like dust. Inside is the first page of the Blood Lotus Sutra, but not the page you read in the sutra hall. This one is written in a plain hand, with no red ink and no voice in the margins.",
      "The last line reads: Teach them to remember. The mist asks only to be counted. It was never the Law’s to keep.",
    ],
    choices: [
      { id: "copy_first_page", label: "Copy the first page onto your own paper, character by character, before the silk falls apart.", tone: "inquiry", effects: [{ kind: "addStat", stat: "insight", amount: 3 }], next: "hermit_burn" },
      { id: "return_scroll_niche", label: "Lay the scroll back in its niche and fold the silk over it.", tone: "quiet", next: "hermit_burn" },
      { id: "take_scroll_away", label: "Fold the first page into your robe and walk out of the cave with it.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_first_page" }], next: "hermit_burn" },
      { id: "read_scroll_aloud", label: "Read the last line aloud, so that the cave hears what the mist was promised.", tone: "truth", next: "hermit_burn" },
    ],
  },
  {
    id: "hermit_burn",
    title: "What to Keep of the Page",
    paragraphs: [
      "The scroll is too fragile to carry far. You have to decide, now, what to keep of it. The lamp in the cave is burning low, and its flame leans toward the niche as though the paper has asked for light. The lines on the page are already fading as the air touches them.",
      "The master’s voice comes from the cave mouth. “Whatever you choose, choose quickly. A page left in the open is a page the mist will read.”",
    ],
    choices: [
      { id: "keep_fading_page", label: "Hold the page to the lamp until the last line is clear enough to remember.", tone: "mercy", next: "hermit_return" },
      { id: "burn_page_for_mist", label: "Burn the page in the lamp, so that the mist does not get to read the last line.", tone: "force", next: "hermit_return" },
      { id: "copy_last_line", label: "Copy the last line onto the back of your hand in ink, and let the rest of the page go.", tone: "inquiry", next: "hermit_return" },
      { id: "let_page_fade", label: "Let the page fade in the open air, and watch the mist drift across the niche.", tone: "quiet", next: "hermit_return" },
    ],
  },
  {
    id: "hermit_return",
    title: "Down the Cut Steps",
    paragraphs: [
      "The steps go down through the cypress trees, and the sect rises to meet you in its grey roofs and wet courtyards. The Law Hall waits at the centre of it, its doors shut, its lamps burning in the high windows. The bell has been silent since the tribunal, and the silence seems to lean on the roofs like a hand.",
      "You are almost at the bottom when a voice calls from above. It is only the caretaker, with his basket of wicks, and he is counting the bells again.",
    ],
    interjections: [
      {
        when: [{ kind: "flag", flag: "took_first_page" }],
        line: "You have the first page of the sutra in your sleeve. The mountain has been waiting for a reader who would count rather than forget. Read it carefully, and then tell me whether it was true.",
      },
    ],
    choices: [
      { id: "report_hermit_to_jade_eye", label: "Tell the jade-eye what the old master taught, the breath, the names, and the bargain he will not break.", tone: "truth", npcScenario: "REPORT_HERMIT", next: "return_hall" },
      { id: "keep_hermit_secret", label: "Say nothing to the mirror about the peak, and keep what the old man gave you.", tone: "deceit", next: "return_hall" },
      { id: "walk_down_quietly", label: "Walk down the last steps without looking back, and let the cloud close behind you.", tone: "quiet", next: "return_hall" },
      { id: "answer_caretaker_count", label: "Stop and count the bells with the caretaker, so that he is not counting alone.", tone: "mercy", next: "return_hall" },
    ],
  },
];
