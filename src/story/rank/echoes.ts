/**
 * Where the hero’s realm and gender are read together in the main line and the books. Lines are `>> scene | group | conditions | text`, and of the lines
 * sharing a group only the first that holds is shown. Every scene here is one of the lighter ones; the heavy ones are left alone. Each line says what the
 * room makes of the rung first and of the sex second, or the other way round, and in each pair the rung is the one the story expects of a hero at that point
 * (behind it, or at it and ahead of it).
 */
export const rankEchoes = String.raw`
// ---- Back in the Law Hall: the Elder reads who has come back, and from how far
>> return_hall | rk_ret | hero:gender=woman & realm>=1 | She looks at your sleeve first, and then at you, and the second look is slower. A woman who has gathered qi and come back from the abyss is a thing she has no ledger line for.
>> return_hall | rk_ret | hero:gender=man & realm>=1 | She looks at your sleeve first, and then at you, and the second look is shorter. A man who has gathered qi and come back from the abyss is a thing every ledger line has been made for.
>> return_hall | rk_ret | hero:gender=unspoken & realm>=1 | She looks at your sleeve, and then, for a while, at nothing in particular. A sleeve she can read. The rest she is working out how to ask.
>> return_hall | rk_ret | hero:gender=woman & realm<=0 | She looks at your hands, empty of qi, and then at you. A mortal woman come back from the abyss has been written as nothing, and she is thinking how to write it again.
>> return_hall | rk_ret | hero:gender=man & realm<=0 | She looks at your hands, empty of qi, and then at you. A mortal man come back from the abyss has been written as a hand, and she wonders what else he is.
>> return_hall | rk_ret | hero:gender=unspoken & realm<=0 | She looks at your hands, empty of qi, and then at you, and the roll in her head has no column that fits. She puts the pen down.
// ---- The memorial: the hero comes up through the floor, and the Elder is waiting
>> jade_eye_return | rk_jade | hero:gender=woman & realm>=2 | You rise through the trapdoor with a foundation under you, and she sees it, and for a moment you see her decide whether to say Madam to a woman of your rung.
>> jade_eye_return | rk_jade | hero:gender=man & realm>=2 | You rise through the trapdoor with a foundation under you, and she sees it, and for a moment you see her decide whether to say Master to a man of your rung.
>> jade_eye_return | rk_jade | hero:gender=unspoken & realm>=2 | You rise through the trapdoor with a foundation under you, and she sees it, and for a moment you see her look for a title that is only a rung.
>> jade_eye_return | rk_jade | hero:gender=woman & realm<=1 | You come up with no foundation under you, and she sees that too, and says the word she always says to a woman who has come up too fast.
>> jade_eye_return | rk_jade | hero:gender=man & realm<=1 | You come up with no foundation under you, and she sees that too, and says the word she always says to a man who has come up too fast.
>> jade_eye_return | rk_jade | hero:gender=unspoken & realm<=1 | You come up with no foundation under you, and she sees that too, and says nothing, and waits for you to say the word she has not been given.
// ---- The red mist: it reads who comes down
>> descent_mist | rk_mist | hero:gender=woman & realm>=3 | The mist parts for your core before it parts for you, and then closes behind a woman it has been told to expect smaller.
>> descent_mist | rk_mist | hero:gender=man & realm>=3 | The mist parts for your core before it parts for you, and then closes behind a man it has been told to expect larger.
>> descent_mist | rk_mist | hero:gender=unspoken & realm>=3 | The mist parts for your core, and then pauses over the rest of you as at a name it has not learned to say.
>> descent_mist | rk_mist | hero:gender=woman & realm<=2 | The mist closes round a woman who has not yet a core, as it closed round the girls sent down fifteen years ago. It remembers the shape.
>> descent_mist | rk_mist | hero:gender=man & realm<=2 | The mist closes round a man who has not yet a core, as it closed round the boys sent down fifteen years ago. It remembers the weight.
>> descent_mist | rk_mist | hero:gender=unspoken & realm<=2 | The mist closes round someone with no core and no side, and does not seem to know which it is meant to be afraid of.
// ---- The Round Hall: the delegates seat themselves by sash
>> asm_d1s1 | rk_asm | hero:gender=woman & realm>=3 | The delegates seat themselves by sash, and the sashes by rung, and you see the sashes of the Core women are worn a hand’s breadth lower.
>> asm_d1s1 | rk_asm | hero:gender=man & realm>=3 | The delegates seat themselves by sash, and the sashes by rung, and you see the sashes of the Core men are worn a hand’s breadth higher.
>> asm_d1s1 | rk_asm | hero:gender=unspoken & realm>=3 | The delegates seat themselves by sash, and the sashes by rung, and you see that no one has thought to ask whether yours is worn high or low.
>> asm_d1s1 | rk_asm | hero:gender=woman & realm<=2 | At the end of the row you see that a woman without a core is placed beside the man without one, and called a witness, and not asked to speak.
>> asm_d1s1 | rk_asm | hero:gender=man & realm<=2 | At the end of the row you see that a man without a core is placed beside the woman without one, and called a witness, and asked to speak first.
>> asm_d1s1 | rk_asm | hero:gender=unspoken & realm<=2 | At the end of the row you see that a witness with no core and no sash is not placed at all, and the clerks agree, for once, to leave the chair.
// ---- The Stone-Singers’ fire: Choijin reads by hand
>> kurultai_a1s1 | rk_kur | hero:gender=woman & realm>=5 | Choijin cannot hear a title, and so reads your hands. A Sage’s, he signs, and a woman’s, and he does not see why anyone told him the second.
>> kurultai_a1s1 | rk_kur | hero:gender=man & realm>=5 | Choijin cannot hear a title, and so reads your hands. A Sage’s, he signs, and a man’s, and he does not see why anyone told him the second.
>> kurultai_a1s1 | rk_kur | hero:gender=unspoken & realm>=5 | Choijin cannot hear a title, and so reads your hands. A Sage’s, he signs, and the rest he cannot read, and does not mind.
>> kurultai_a1s1 | rk_kur | hero:gender=woman & realm<=4 | Choijin reads your hands: not yet cut, he signs, and a woman’s, and on the Steppe neither is a reason to stand.
>> kurultai_a1s1 | rk_kur | hero:gender=man & realm<=4 | Choijin reads your hands: not yet cut, he signs, and a man’s, and on the Steppe neither is a reason to sit.
>> kurultai_a1s1 | rk_kur | hero:gender=unspoken & realm<=4 | Choijin reads your hands: not yet cut, he signs, and he can find no reason either way.
// ---- The Ring of nine masters: the pressure reads the hero, and the masters read the rest
>> summit_ring | rk_sum | hero:gender=woman & realm>=6 | The pressure parts round you like water round a stone, and the masters rise for a woman they have not decided what to call.
>> summit_ring | rk_sum | hero:gender=man & realm>=6 | The pressure parts round you like water round a stone, and the masters rise for a man they decided what to call long ago.
>> summit_ring | rk_sum | hero:gender=unspoken & realm>=6 | The pressure parts round you like water round a stone, and the masters rise, and then stand without the title they lack.
>> summit_ring | rk_sum | hero:gender=woman & realm<=5 | The pressure bears on you as on someone it has no table for, and no master stands for a woman not yet a Seeker.
>> summit_ring | rk_sum | hero:gender=man & realm<=5 | The pressure bears on you as on someone it has no table for, and two masters half stand for a man not yet a Seeker.
>> summit_ring | rk_sum | hero:gender=unspoken & realm<=5 | The pressure bears on you as on someone it has no table for, and the masters cannot find a way to look away.
// ---- The span: the ward reads cultivation, and the men at the far end read the rest
>> bridge_open1 | rk_br | hero:gender=woman & realm>=7 | The men at the far end watch the ward bow to a woman, and two or three look to Captain Dur to learn whom to salute.
>> bridge_open1 | rk_br | hero:gender=man & realm>=7 | The men at the far end watch the ward bow to a man, and every one of them salutes at once.
>> bridge_open1 | rk_br | hero:gender=unspoken & realm>=7 | The men at the far end watch the ward bow to someone they have no salute for, and the line comes to attention in silence.
>> bridge_open1 | rk_br | hero:gender=woman & realm<=6 | The ward dips only a little for a woman short of the road’s rung, and the men at the far end decide only about the woman.
>> bridge_open1 | rk_br | hero:gender=man & realm<=6 | The ward dips only a little for a man short of the road’s rung, and the men at the far end decide only about the dip.
>> bridge_open1 | rk_br | hero:gender=unspoken & realm<=6 | The ward dips only a little for someone short of the road’s rung, and the men at the far end find nothing else to decide.
`;
