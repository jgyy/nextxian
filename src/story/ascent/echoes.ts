/**
 * Where the hero’s layer shows in the main line and the books: the people of the mountain read not only a hero’s realm but how far up it they stand, and a
 * hero who has been thrown at the walls carries it in how they stand. Lines are `>> scene | group | conditions | text`, and of the lines sharing a group only
 * the first that holds is shown. Every scene here is one of the lighter ones. A level is `realm * 10 + layer`: 10 is the First Layer of Qi Condensation,
 * 20 of Foundation Establishment, and so on to 99, the Tenth Layer of Dao Sovereign.
 */
export const ascentEchoes = String.raw`
// ---- Book One: the archive, the door, the hall
>> archive_gate_3 | as_arch | level<=12 | The warden’s lantern passes over you and does not slow. A hero on the lowest layers of the thread is not worth the oil.
>> archive_gate_3 | as_arch | level>=13 & level<=19 | The lantern slows at your sleeve. Late in the thread, the qi sits close to the skin, and a warden who knows the signs counts the layers in how you stand.
>> archive_gate_3 | as_arch | level>=20 | The lantern does not slow at all. It stops, and the warden’s breath with it. A man who has watched twenty years for Foundation cannot mistake the first course laid.
>> sutra_door_2 | as_sutra | level<=14 | The bell inside the rock rings once, and you feel how few layers you have to answer it with. It rings again, a shade more patiently, and you stay where you are.
>> sutra_door_2 | as_sutra | level>=15 & level<=24 | The bell rings, and you hear it in the layer you stand on: the Condenser’s ear, which takes the note in the teeth, and the Builder’s, which takes it in the floor.
>> sutra_door_2 | as_sutra | level>=25 | The bell rings, and the note goes through you and finds the floor you laid, course on course. The lotus bud on the key warms a little, as at an old acquaintance.
>> sutra_hall | as_hall | level<=17 | The red water gives back a figure with only a few layers of qi in it, thin as a candle in a big room. The bronze petals turn away from it, politely.
>> sutra_hall | as_hall | level>=18 & level<=29 | The red water gives back a figure with a foundation partly laid, and the bronze petals turn toward it by a degree. A hero of some layers is a hero the hall can read.
>> sutra_hall | as_hall | level>=30 | The red water gives back a figure with a core in it, and the bronze petals turn all the way, like sunflowers at a window. The hall has been waiting for a layer this high.
>> jade_eye_bell_2 | as_bell | count:bwf_>=3 | The disciples fall silent as you cross the square. One of them stares at your hands, which have the look of someone who has been thrown at a wall more than once and has come back to it.
>> jade_eye_bell_2 | as_bell | level>=20 | The disciples fall silent as you cross the square, and some of it is fear. A hero who has laid a foundation has a way of walking that people step aside for before they know why.
>> tribunal_summons_3 | as_trib | level<=19 | In the third row someone counts your layers under their breath and gets to a number that makes him sit back down.
>> tribunal_summons_3 | as_trib | level>=20 & level<=29 | The older disciples look at the foundation under your robe and count the courses. The younger ones look at the bell. Neither group counts for long.
>> tribunal_summons_3 | as_trib | level>=30 | The rows go quiet in the order of their rank, and the quiet reaches the third row last. A core, at this height of layers, is a thing a tribunal does not like to be reminded of.
>> descent_mist_3 | as_desc | level<=29 | The mist presses at you in proportion, and there is not much of you for it to press. You feel every layer you lack in the cold at the back of the knees.
>> descent_mist_3 | as_desc | level>=30 | The mist thins around you by the width of your layers. A core that has been quenched and tempered does not care for the mist, and the mist knows it.
>> mist_remembers_3 | as_rem | level<=39 | The Elder looks up, and her eyes go first to how you carry yourself, and only then to your face. She is reading your layers as one reads the first lines of a letter.
>> mist_remembers_3 | as_rem | level>=40 | The Elder looks up, and her eyes go first to the soul in you, which has been grown past the cradle. She does not say so. She puts her hands flat on her knees.
// ---- Book Two and Three: the river and the coast
>> b2_gate | as_b2 | level<=29 | The Concord’s clerks look at you, and then at their registers, and write something short. Below the Core, a register has a line for a hero, and the line is brief.
>> b2_gate | as_b2 | level>=30 | The Concord’s clerks look at you, and then at their registers, and add a line. At the layers of a Core there is always a line to add.
>> hub_departure | as_dep | level<=24 | You will take the road down the mountain on the layers you have. It is not enough, and it is what there is, and every hero who has ever left the sect has said the same.
>> hub_departure | as_dep | level>=25 | You will take the road down the mountain on the layers you have, and they are good ones. The Elder’s lamp stays lit behind you. It was lit before you earned the right to be missed.
>> willow_close | as_will | level>=35 | The little girl on the jetty watches you go, and watches the way the barge rides a hair higher under you than under its master. She has not the words for a layer. She has the eyes.
>> lanterns_close | as_lant | level>=40 | A paper lantern drifts against your hull, and goes out. There is a soul in you that is quiet, and the flame has noticed.
>> pagoda_close | as_pag | level>=45 | The river’s breath changes as you pass, from a mortal’s to an Immortal’s mooring. The deckhands cannot say what has happened. They lower their voices, all the same.
>> ward_close | as_ward | count:bwf_>=3 | Lu Yan looks at your hands, which tremble a little, and says nothing about it. She puts a cup of something warm in them, as one does for a patient who has been to the wall and back.
>> ferry_close | as_ferry | level>=45 | Ah Zhi looks you up and down, and then at the water behind you, which has moved aside a hand’s breadth. “That is a lot of layers,” she says. “Are you well?”
// ---- Book Five and Six: the glass, the stair, the mountain, the last seal
>> hub_b5_a | as_b5a | level<=54 | The skiffs run over the glass, and you feel it hum in the layer you stand on: a note low enough to be missed, which you are glad you did not miss.
>> hub_b5_a | as_b5a | level>=55 | The skiffs run over the glass, and the hum rises through the layers you have cut and finds nothing in you to catch on. Everything it could have pulled is already on the floor of the Hall behind you.
>> hub_b5_c | as_b5c | level<=64 | At the third landing the white thread thins, and you feel where in the layers you have gone from the mass of pilgrims to the few. It is a lonely number.
>> hub_b5_c | as_b5c | level>=65 | At the sixth landing the treads ring for you, a note you have earned in layers and not in rank. The pilgrims below look up at the sound, and then politely do not.
>> hub_b6 | as_b6 | level<=69 | The mountain knows which you are. It knows it to the layer, and tells you so in the length of the climb.
>> hub_b6 | as_b6 | level>=70 | The mountain knows which you are. At the layers of an Ascendant it does not so much tell you the length of the climb as step aside, a little, to save you the trouble.
>> summit_entry | as_sum | level<=59 | The weight of the nine at the threshold falls on you in proportion to the layers you have, and it is a great deal to bear for so few.
>> summit_entry | as_sum | level>=60 & level<=79 | The weight of the nine at the threshold falls on you in proportion to the layers you have, and you bear it as one who has borne a few walls.
>> summit_entry | as_sum | level>=80 | The weight of the nine at the threshold falls on you in proportion to your layers, and finds that the proportion is, for once, in your favour. The nine masters feel it, and their ring breathes out.
>> depths_entry | as_dep2 | level<=69 | Lin Yuan reads the carved hands in the lamp, and glances at you, and you feel the layers you lack as a draught at the back of the neck.
>> depths_entry | as_dep2 | level>=70 | Lin Yuan reads the carved hands in the lamp, and glances at you, and then at the door, and then at you again. It is the look of a man who has found out that his friend is further up the stair than he is.
>> lastseal_choice | as_last | level<=79 | The abyss hears the layers you have climbed to answer it, each one a wall you walked up to, and each one in its place. It does not say whether it is enough.
>> lastseal_choice | as_last | level>=80 | The abyss hears the layers you have climbed to answer it, eighty and more of them, and hears also the falls between. It listens with the whole of its depth, as one listens to a very old story told by someone who was there.
`;
