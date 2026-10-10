import type { Scene } from "@/engine/types";

/**
 * Side Path: The Healer’s Hall. Behind the herb market a healer treats disciples who cannot
 * sleep for the names. She has been given a dust by the wardens that makes them forget. Opened
 * from the market lane, and rejoins the market’s return.
 */
export const healerScenes: Scene[] = [
  {
    id: "healer_gate",
    title: "Side Path: The Healer’s Hall",
    paragraphs: [
      "The lane behind the market stalls smells of bitter roots and wet earth. It leads to a low hall with its shutters propped open, and bundles of dried herbs hang from every beam like the tails of small animals. A board over the door reads Hall of Quiet Hands, and beneath it, in a smaller hand: Master Yao Ling. Nobody is at the gate. A boy sits on the step grinding something in a stone mortar, very slowly.",
      "From somewhere inside, a woman is coughing, and the cough does not stop for a long time.",
    ],
    choices: [
      { id: "walk_into_courtyard", label: "Walk past the boy and into the courtyard where the drying racks stand.", tone: "quiet", next: "healer_courtyard" },
      { id: "ask_boy_mortar", label: "Ask the boy at the mortar what he is grinding, and why it is so slow.", tone: "inquiry", next: "healer_ledger" },
      { id: "walk_to_garden", label: "Walk round the hall to the walled garden, where strange blue flowers are growing.", tone: "inquiry", next: "healer_garden" },
      { id: "face_wardens_door", label: "Head for the back door, where two wardens stand guard over a sealed chest.", tone: "force", next: "healer_wardens_door" },
    ],
  },
  {
    id: "healer_courtyard",
    title: "The Drying Racks",
    paragraphs: [
      "The courtyard is a forest of wooden racks hung with leaves, roots and flowers laid out to dry. In the middle, beneath an awning, a woman with cropped grey hair sorts a basket of pale stems by touch alone. Her hands are stained yellow to the knuckle. She does not look up. “If you have come to be treated, sit,” she says. “If you have come to be told you are not sick, sit anyway.”",
      "On a wooden board beside her, under a grey blanket, a young disciple lies with his lips the colour of slate.",
    ],
    choices: [
      { id: "sit_by_the_board", label: "Sit down beside the board and ask what the boy has taken.", tone: "inquiry", next: "healer_patient" },
      { id: "help_sort_stems", label: "Take a basket of stems and help her sort them without speaking.", tone: "mercy", next: "healer_patient" },
      { id: "name_yourself_master", label: "Give her your name, and ask her to call herself by her own name in return.", tone: "truth", next: "healer_patient" },
      { id: "wait_by_the_racks", label: "Stand among the racks and wait until she is ready to say anything at all.", tone: "quiet", next: "healer_patient" },
    ],
  },
  {
    id: "healer_patient",
    title: "The Boy on the Board",
    paragraphs: [
      "The disciple is called Lü Jian, and he is sixteen. His hands tremble on the blanket in a slow, steady rhythm, as though they are counting. “He came down from the cells three days ago,” Master Yao says. “The wardens gave him a pinch of calm dust every night, in a cup of warm water, to stop him hearing the names in his sleep. It stopped him hearing his mother too.”",
      "Lü Jian opens his eyes. They are clear and frightened. “I cannot remember her voice,” he whispers. “I can remember the bell. I can remember the wardens. I cannot remember her.”",
    ],
    choices: [
      { id: "ask_what_calm_dust_is", label: "Ask Master Yao what the calm dust is made from, and where the wardens keep it.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "knows_calm_dust" }], next: "healer_antidote" },
      { id: "hold_boy_hand", label: "Take the boy’s trembling hand and hold it until the counting stops.", tone: "mercy", next: "healer_antidote" },
      { id: "tell_boy_mother_lives", label: "Tell him that his mother’s voice is in the names, and that the names are still waiting for him.", tone: "truth", next: "healer_antidote" },
      { id: "watch_boy_sleep", label: "Watch him sleep for a while, and count the breaths until they are even.", tone: "quiet", next: "healer_antidote" },
    ],
  },
  {
    id: "healer_antidote",
    title: "A Bitter Root",
    paragraphs: [
      "Master Yao takes a root from a jar, pale and knotted, and grates a little of it into a bowl of water. The smell is so bitter that your eyes sting from across the room. “This will bring the names back slowly,” she says. “It will also bring back the pain of hearing them. The calm dust took the pain and the names together. I cannot give him one without the other, and I will not pretend I can.”",
      "She sets the bowl on the board, then looks at you as if you might be able to lift the cup to his lips with a steadier hand than hers.",
    ],
    choices: [
      { id: "lift_cup_to_lips", label: "Lift the bowl to the boy’s lips, and help him drink it down slowly.", tone: "mercy", next: "healer_wakes" },
      { id: "ask_pain_for_names", label: "Ask Master Yao whether a person should choose between their pain and their names.", tone: "inquiry", next: "healer_wakes" },
      { id: "pour_bitter_out", label: "Pour the bitter water out on the floor, and tell her the boy would rather sleep.", tone: "force", next: "healer_wakes" },
      { id: "wait_for_her_call", label: "Step back and wait for Master Yao to decide what the boy should drink.", tone: "quiet", next: "healer_wakes" },
    ],
  },
  {
    id: "healer_wakes",
    title: "What the Boy Remembers",
    paragraphs: [
      "The boy drinks, grimaces, and drinks again. For a long moment nothing happens. Then his fingers stop counting. He turns his head on the board, and his eyes fill with tears that run into his ears. “They said it would help me forget the mist,” he says. “It helped me forget my mother. She sang at the gate every morning when I went up to the cells. The wardens told me she had stopped.”",
      "Master Yao sits back on her stool and presses both yellow hands over her eyes. “They told me the same thing,” she says. “About the dust. About a great many people.”",
    ],
    choices: [
      { id: "sing_mothers_song", label: "Hum the tune you heard at the gate, the one the village children sing, and watch his face.", tone: "mercy", next: "healer_return" },
      { id: "ask_who_told_her", label: "Ask Master Yao who the wardens are, and who gives them the dust.", tone: "inquiry", next: "healer_return" },
      { id: "promise_boy_news", label: "Promise Lü Jian that someone will carry word of his mother to the sect.", tone: "truth", next: "healer_return" },
      { id: "leave_boy_resting", label: "Leave the boy to rest, and walk quietly out through the racks.", tone: "quiet", next: "healer_return" },
    ],
  },
  {
    id: "healer_ledger",
    title: "The Calm Dust Ledger",
    paragraphs: [
      "The boy at the mortar stops grinding long enough to point at a shelf inside the door, where a thick book lies beside a tin of pale powder. The book is headed Calm Dust, issued to disciples. Each page holds a column of names, a date, and a small tick beside each dose. Some of the names have been struck through, and beside them someone has written: did not wake.",
      "“Master Yao keeps it,” the boy says. “She says if the wardens ever come back to ask for it, they will have to read every name before they take it.”",
    ],
    choices: [
      { id: "read_the_ledger_names", label: "Read the names in the ledger aloud, one after another, the way the bell rule does.", tone: "mercy", next: "healer_yao_tale" },
      { id: "count_the_ticks", label: "Count the ticks beside the doses, and add them up at the back of the book.", tone: "inquiry", next: "healer_yao_tale" },
      { id: "leave_ledger_shelf", label: "Put the ledger back on its shelf and close the tin of powder.", tone: "quiet", next: "healer_yao_tale" },
      { id: "copy_one_page", label: "Tear one page from the ledger and fold it into your sleeve.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_dust_page" }], next: "healer_yao_tale" },
    ],
  },
  {
    id: "healer_yao_tale",
    title: "Where the Dust Comes From",
    paragraphs: [
      "Master Yao comes to the doorway with a bowl in her hands and speaks to you without looking up from it. The calm dust is ground from the lotus root that grows in the walled garden behind the hall, and the root is bought from merchants who buy it from the sect’s own store. “The Law has paid for quiet for fifteen years,” she says. “Quiet for the disciples who hear the names. Quiet for the wardens who must carry them to the path.”",
      "She sets the bowl down on the step. “I did not ask what it was for. A healer who asks is a healer who is sent away.”",
    ],
    choices: [
      { id: "ask_who_buys_root", label: "Ask which merchants buy the root, and who in the sect places the orders.", tone: "inquiry", next: "healer_bribe" },
      { id: "tell_yao_you_see", label: "Tell her that you see how much it has cost her to keep quiet all this time.", tone: "mercy", next: "healer_bribe" },
      { id: "tell_yao_law_guilty", label: "Tell her that the Law will answer for the dust when the Elder takes up the case.", tone: "truth", next: "healer_bribe" },
      { id: "take_bowl_quietly", label: "Take the bowl from the step and drink from it, to see what the Law has been paying for.", tone: "force", effects: [{ kind: "addStat", stat: "qi", amount: 2 }], next: "healer_bribe" },
    ],
  },
  {
    id: "healer_bribe",
    title: "A Purse of Silver",
    paragraphs: [
      "A warden in a grey cloak comes up the lane with a purse in his hand. He does not give his name. He sets the purse on the doorstep with a small clink, and says that the Law is grateful for the Hall’s discretion, and that the discretion will be remembered at the next tally of stores.",
      "Master Yao looks at the purse for a long time. Behind her, the boy at the mortar has stopped grinding, and the silence is so complete that you can hear the herbs rustling in the breeze.",
    ],
    choices: [
      { id: "refuse_purse", label: "Push the purse back across the step with your foot, and tell the warden to take it to the Elder.", tone: "truth", next: "healer_burn_ledger" },
      { id: "warden_take_purse", label: "Pick up the purse and weigh it in your hand, as if you would take it.", tone: "deceit", effects: [{ kind: "addStat", stat: "karma", amount: -2 }], next: "healer_burn_ledger" },
      { id: "ask_warden_name", label: "Ask the warden for his name, and write it on the back of your hand where he can see.", tone: "inquiry", next: "healer_burn_ledger" },
      { id: "wait_and_say_nothing", label: "Say nothing, and let the warden decide whether to leave the purse or take it back.", tone: "quiet", next: "healer_burn_ledger" },
    ],
  },
  {
    id: "healer_burn_ledger",
    title: "The Ledger on the Hearth",
    paragraphs: [
      "When the warden has gone, Master Yao takes the calm dust ledger from the shelf and holds it over the brazier. The pages are dry and brittle, and they curl at the edges in the heat. “If the Law wants this book,” she says, “it will have to ask for it with its own hands. I have been asked by hands before.”",
      "She does not let go of it. She holds it there until the smoke rises, and then she lowers it to the floor, unharmed, and says that some things must only be kept by being read.",
    ],
    choices: [
      { id: "help_keep_ledger", label: "Take the ledger from her, and promise to keep it safe until someone can read it aloud.", tone: "mercy", next: "healer_return" },
      { id: "let_ledger_burn", label: "Let the smoke take the ledger, and watch the names disappear.", tone: "force", next: "healer_return" },
      { id: "read_ledger_before_fire", label: "Read the last page of the ledger aloud, before the fire reaches it.", tone: "inquiry", next: "healer_return" },
      { id: "wait_for_ash", label: "Sit down by the brazier and wait until the ledger has finished smoking.", tone: "quiet", next: "healer_return" },
    ],
  },
  {
    id: "healer_garden",
    title: "The Walled Garden",
    paragraphs: [
      "Behind the hall a wall of grey stone encloses a garden of blue flowers, each one with a pale centre like an eye that has just been opened. A sign has been nailed to the gate: Do not eat. Do not dream. Do not stand in the lotus after dusk. The flowers do not move in the still air, but the leaves at their roots are wet, as though something beneath them has been breathing.",
      "The lotus root is pale and thick, half buried in the dark earth, and its smell is the smell of the abyss path after rain.",
    ],
    choices: [
      { id: "walk_between_blue_flowers", label: "Walk slowly between the blue flowers, keeping your eyes on the path.", tone: "quiet", next: "healer_flower" },
      { id: "name_the_flowers", label: "Ask Master Yao’s boy the names of the flowers, and write each one down.", tone: "inquiry", next: "healer_flower" },
      { id: "kneel_at_lotus_bed", label: "Kneel at the edge of the lotus bed, and pray for the disciples who slept too long.", tone: "mercy", next: "healer_flower" },
      { id: "pull_one_flower", label: "Pull a single blue flower from its stem, and tuck it behind your ear.", tone: "force", next: "healer_flower" },
    ],
  },
  {
    id: "healer_flower",
    title: "The Pale Root",
    paragraphs: [
      "At the far end of the garden, one lotus has been dug up and laid on a cloth. Its root is pale and thick, and it is split down the middle. Inside the split, the flesh is dark and glistening, and it moves very slightly when you look at it, the way a sleeper’s chest moves under a blanket.",
      "A slip of paper beside the cloth says, in Master Yao’s crabbed hand: For the dust. Not for the cup. Cut it from the bottom, where the mist has not reached it yet.",
    ],
    choices: [
      { id: "cut_root_from_bottom", label: "Cut a sliver from the bottom of the root, exactly as the slip says.", tone: "inquiry", next: "healer_warning" },
      { id: "leave_root_be", label: "Leave the root on its cloth and step back from it.", tone: "quiet", next: "healer_warning" },
      { id: "wrap_root_cloth", label: "Wrap the root in its cloth, so that it does not dry out before the healer returns.", tone: "mercy", next: "healer_warning" },
      { id: "dig_root_cellar", label: "Dig down beside the bed and look for the cellar where the rest of the roots are kept.", tone: "deceit", next: "healer_root_cellar" },
    ],
  },
  {
    id: "healer_warning",
    title: "The Warning in the Garden",
    paragraphs: [
      "Master Yao has come up behind you without a sound. Her voice is quiet and very tired. “The lotus root makes you hear the dead,” she says. “A little of it, cut from the bottom, is a cure for a sleeping heart. A great deal of it, and you will hear nothing else for the rest of your life. The Blood Lotus Sutra was written with a root like this one, in its ink. Did you know that?”",
      "She takes the sliver from your fingers, gently, and wraps it in a leaf.",
    ],
    choices: [
      { id: "ask_who_wrote_sutra_ink", label: "Ask who wrote the sutra with this root, and when it was first mixed.", tone: "inquiry", next: "healer_brew" },
      { id: "thank_her_for_warning", label: "Thank her for the warning, and promise not to use the root for anything but a cure.", tone: "mercy", next: "healer_brew" },
      { id: "take_back_sliver", label: "Hold out your hand and ask for the sliver back, since it was cut for you.", tone: "force", next: "healer_brew" },
      { id: "say_nothing_warned", label: "Say nothing, and let her keep the leaf in her own hand.", tone: "quiet", next: "healer_brew" },
    ],
  },
  {
    id: "healer_brew",
    title: "A Cup for the Night",
    paragraphs: [
      "Master Yao sets a small clay pot on the brazier and begins a brew from the sliver and a handful of bitter leaves. The steam rises in a thread, pale and slow. “This is not for sleep,” she says. “It is for the nights when you need to remember who you were before anyone gave you a name. Drink half of it, if you want the names to stay with you. Drink all of it, and you may never sleep again.”",
      "The pot is hot and smells sweeter than the garden did, and somewhere beneath the sweetness there is a faint note that is almost a voice.",
    ],
    choices: [
      { id: "drink_half_cup", label: "Drink half the cup, and hold the rest for the boy when he wakes.", tone: "mercy", effects: [{ kind: "setFlag", flag: "drank_healer_brew" }], next: "healer_return" },
      { id: "pour_brew_away", label: "Pour the brew out onto the earth, and watch the steam drift toward the garden wall.", tone: "quiet", next: "healer_return" },
      { id: "drink_all_cup", label: "Drink the whole cup, to see what the Law has been paying the Hall to keep quiet.", tone: "force", effects: [{ kind: "addStat", stat: "insight", amount: 3 }], next: "healer_return" },
      { id: "carry_pot_away", label: "Ask Master Yao whether you may take the pot with you, sealed, for the Elder.", tone: "truth", next: "healer_return" },
    ],
  },
  {
    id: "healer_wardens_door",
    title: "The Sealed Chest",
    paragraphs: [
      "Two wardens stand at the back door of the hall with their hands folded over their belts. Between them is a chest of black lacquer, its lid sealed with yellow paper. A label is tacked to the front: Calm dust, for the Law’s use. Do not open except in the presence of the Elder.",
      "One of the wardens notices you looking and shifts his weight, as if he has been told to expect exactly this.",
    ],
    choices: [
      { id: "demand_see_chest", label: "Demand to see inside the chest, in the Elder’s name.", tone: "force", next: "healer_escape" },
      { id: "ask_warden_chest", label: "Ask the warden how many disciples the chest has quieted, and how long it has been in use.", tone: "inquiry", next: "healer_escape" },
      { id: "bow_and_pass_wardens", label: "Bow to the wardens and ask leave to pass through the back door.", tone: "mercy", next: "healer_escape" },
      { id: "slip_past_wardens", label: "Slip past the wardens while they are looking at each other, and go round the side of the hall.", tone: "deceit", next: "healer_escape" },
    ],
  },
  {
    id: "healer_escape",
    title: "A Girl in the Racks",
    paragraphs: [
      "Among the drying racks a girl in a torn disciple’s robe is crouched behind a basket, her hands clasped over her mouth. She has been stealing dried leaves, and now the wardens are coming round the far side of the courtyard, calling her name. She looks up at you with eyes that have not slept in a long while.",
      "“Please,” she whispers. “I only wanted to know what the leaves were for. They put me in the cells for hearing names. They said I was too loud.”",
    ],
    choices: [
      { id: "hide_girl_in_racks", label: "Pull her deeper into the racks and cover her with a sheet of drying cloth.", tone: "mercy", effects: [{ kind: "setFlag", flag: "hid_girl_from_wardens" }], next: "healer_girl" },
      { id: "lead_girl_out_back", label: "Lead her out through the back gate while the wardens search the front.", tone: "deceit", next: "healer_girl" },
      { id: "block_wardens_path", label: "Stand in the wardens’ path and tell them the girl is under your protection.", tone: "force", next: "healer_girl" },
      { id: "stay_still_for_girl", label: "Stay very still beside the basket, and let the wardens pass without seeing her.", tone: "quiet", next: "healer_girl" },
    ],
  },
  {
    id: "healer_girl",
    title: "Pei Lan’s Name",
    paragraphs: [
      "The girl is called Pei Lan, and she is seventeen. Once the wardens have gone, she sits on an upturned basket and tells you what the cells were like. “They gave us a cup each night,” she says. “If you did not drink it, they held your nose. I drank it. I stopped hearing the names. I stopped hearing my own name, too, and then I could not tell whether anyone was calling me.”",
      "She opens her palm. Inside is a small paper token, folded many times, with a single name written across it in faded brush: Su Mengjiao.",
    ],
    choices: [
      { id: "ask_pei_where_token", label: "Ask Pei Lan where she got the token, and who gave it to her.", tone: "inquiry", next: "healer_gift" },
      { id: "return_token_to_pei", label: "Close her fingers over the token, and tell her to keep the name where she can find it.", tone: "mercy", next: "healer_gift" },
      { id: "take_token_away", label: "Ask her for the token, and fold it into your own robe.", tone: "deceit", effects: [{ kind: "setFlag", flag: "took_pei_token" }], next: "healer_gift" },
      { id: "say_her_name_aloud", label: "Say her name aloud, then the name on the token, so that both are heard together.", tone: "truth", next: "healer_gift" },
    ],
  },
  {
    id: "healer_gift",
    title: "A Tin of True Quiet",
    paragraphs: [
      "Master Yao comes out to the courtyard and finds you with the girl. She does not ask what has happened. She presses a small tin into your hands, its lid stamped with the Hall’s seal, and tells you it contains a tea of plain leaves, without any root in it. “This is what quiet looks like when nobody has to be paid for it,” she says. “Give it to the Elder, if she will take it. Tell her the Hall keeps no dust now.”",
      "Behind her, the boy at the mortar has started grinding again, very fast, as though he has finally found a rhythm that is his own.",
    ],
    choices: [
      { id: "thank_yao_with_bow", label: "Bow deeply to Master Yao, and promise to carry the tin up the mountain.", tone: "mercy", next: "healer_return" },
      { id: "open_tin_smell", label: "Open the tin and smell the leaves, to know what you are carrying.", tone: "inquiry", next: "healer_return" },
      { id: "ask_yao_for_more", label: "Ask Master Yao whether there is more of the tea, and how much the Law would pay for it.", tone: "deceit", next: "healer_return" },
      { id: "walk_out_with_tin", label: "Thank her briefly, and walk out through the lane with the tin held close to your chest.", tone: "quiet", next: "healer_return" },
    ],
  },
  {
    id: "healer_root_cellar",
    title: "The Root Cellar",
    paragraphs: [
      "The cellar beneath the garden is cool and dark, lined with sand bins where lotus roots lie packed in rows like the bodies of the sleeping. Along one wall a shelf holds jars labelled with dates. The newest jars are sealed with yellow paper, and the oldest have dust so thick on them that the labels can barely be read.",
      "A folded paper lies on the lowest shelf, in a hand you know. It is the Elder’s. It lists doses, dates, and a single note: For the wardens of the abyss path, twice a month. Do not tell the sister.",
    ],
    choices: [
      { id: "read_elder_dose_note", label: "Read the Elder’s note twice, and memorise every date on it.", tone: "inquiry", effects: [{ kind: "setFlag", flag: "found_elders_dose_note" }], next: "healer_mixture" },
      { id: "carry_note_up", label: "Fold the note into your robe, and promise yourself she will explain it.", tone: "truth", effects: [{ kind: "setFlag", flag: "took_elders_note" }], next: "healer_mixture" },
      { id: "close_the_jars", label: "Close the jars one by one, so that no more dust can drift out into the air.", tone: "mercy", next: "healer_mixture" },
      { id: "leave_cellar_alone", label: "Put the note back exactly as you found it, and climb the steps without a word.", tone: "quiet", next: "healer_mixture" },
    ],
  },
  {
    id: "healer_mixture",
    title: "An Antidote Mixed Carefully",
    paragraphs: [
      "You stand at the bench in the cellar and mix the bitter root with plain water, a little at a time, the way Master Yao showed you. You do not know whom it is for. You know only that it is the Hall’s counter-cure for the dust, the one that brings a sleeper back to the names slowly, without the pain of waking all at once.",
      "The jar you fill is small enough to carry in a sleeve. You seal it with wax and write nothing on the label.",
    ],
    choices: [
      { id: "seal_for_elder", label: "Label the jar for the Elder, and leave it on the bench where she will find it.", tone: "truth", next: "healer_return" },
      { id: "keep_jar_sleeve", label: "Keep the jar in your sleeve, to use on the next disciple the wardens bring down.", tone: "mercy", next: "healer_return" },
      { id: "pour_out_mixture", label: "Pour the mixture down the drain, so that the Law can never sell it.", tone: "force", next: "healer_return" },
      { id: "count_drops_quiet", label: "Count the drops as they fall, until the jar is full and quiet.", tone: "quiet", next: "healer_return" },
    ],
  },
  {
    id: "healer_return",
    title: "Back Among the Market Stalls",
    paragraphs: [
      "The lane comes out between the market stalls, and the noise of bargaining rises round you like water after a long silence. Madam Hu is shouting prices at a customer. The air smells of frostleaf and of the bitter roots you have been carrying on your sleeves.",
      "Somewhere beyond the market, the bell of the Law Hall rings once, to say the hour has changed.",
    ],
    interjections: [
      {
        when: [{ kind: "flag", flag: "drank_healer_brew" }],
        line: "You drank the brew. I can see it in your eyes from here, and in the way you hold your hands. Do not drink the rest of any cup for anyone’s sake, least of all mine.",
      },
    ],
    choices: [
      { id: "report_healer_to_jade_eye", label: "Tell the jade-eye what the healer kept, the dust, the ledger, and the names she could not say.", tone: "truth", npcScenario: "REPORT_HEALER", next: "market_return" },
      { id: "keep_healer_secret", label: "Say nothing to the mirror about the Hall or the dust, and keep the tin to yourself.", tone: "deceit", next: "market_return" },
      { id: "buy_bitter_roots", label: "Buy a bundle of bitter roots from Madam Hu, to replace the ones you gave away.", tone: "quiet", next: "market_return" },
      { id: "thank_market_quietly", label: "Walk back toward the abyss gate without speaking to anyone in the market.", tone: "mercy", next: "market_return" },
    ],
  },
];
