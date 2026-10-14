/**
 * Where the hero’s gender is first read in the main line, and where it is read again as the story goes on. Lines are `>> scene | group | conditions | text`,
 * and of the lines sharing a group only the first that holds is shown. Scenes that already sit at the 200-word cap are left alone, so each line here is
 * as short as the room in its scene allows.
 */
export const customEchoes = String.raw`
// ---- The memorial: the column and the margin
>> memorial | cs_mem | hero:gender=woman | In the cedar-smelling rows you see the tablets are ruled in two: a column for the sons, a narrow margin for the rest. A woman learns which she is by where the incense falls.
>> memorial | cs_mem | hero:gender=man | In the cedar-smelling rows you see the tablets are ruled in two: a column for the sons, a narrow margin for the rest. A man learns which is his by where he is never asked to look.
>> memorial | cs_mem | hero:gender=unspoken | In the cedar-smelling rows you see the tablets are ruled in two: a column for the sons, a narrow margin for the rest. The ruling has no line for you, and the tablets, which are older than it, do not seem to mind.
// ---- The Law Hall, on the way back
>> return_hall | cs_ret | hero:gender=woman | She listens as one woman listens to another who has come back from a place she was not herself allowed to go, and does not once look at her ledger.
>> return_hall | cs_ret | hero:gender=man | She listens as to a man who has come back from a place he was always allowed to go, and who must be asked, to the end, what it cost.
>> return_hall | cs_ret | hero:gender=unspoken | She listens without once reaching for a title, and you realise she has been looking for one for a quarter of an hour.
// ---- The tribunal: the disciples count
>> tribunal_vote | cs_vote | hero:gender=woman | The women among the disciples count the stones twice.
>> tribunal_vote | cs_vote | hero:gender=man | The men among the disciples count the stones once.
>> tribunal_vote | cs_vote | hero:gender=unspoken | A few disciples count the stones and look at you, not at them.
// ---- The descent: what Mengjiao says to you
>> descent_mengjiao | cs_meng | hero:gender=woman | She looks you over as a sister might. “You have the walk of someone told to be quiet,” she says.
>> descent_mengjiao | cs_meng | hero:gender=man | She looks you over, kindly. “You have the walk of someone never told to be quiet,” she says. “Use it.”
>> descent_mengjiao | cs_meng | hero:gender=unspoken | She looks you over and asks nothing. “You have the walk of someone nobody has named yet,” she says.
// ---- The sealing night: after the eye closes
>> sealing_return | cs_seal | hero:gender=woman | You think of the fourteenth, a girl of fifteen who was never dead, only listening, and of every name a book like that sorts into a margin.
>> sealing_return | cs_seal | hero:gender=man | You think of the fourteenth, a girl of fifteen who was never dead, only listening, and of how easily such a book is signed by a hand like yours.
>> sealing_return | cs_seal | hero:gender=unspoken | You think of the fourteenth, a girl of fifteen who was never dead, only listening, and of everyone the book could not sort at all.
`;

/** The echoes that land on scenes of the later books, which the main line’s pass does not reach. */
export const customBookEchoes = String.raw`
// ---- The Festival of Floating Names: the banks of the canal
>> lanterns_close | cs_lant | hero:gender=woman | On the nearest bank women stand in a row with their lanterns, and no man has been asked to leave room for them. They have made their own.
>> lanterns_close | cs_lant | hero:gender=man | On the nearest bank men stand in a row with their lanterns, and make room for each other without being asked. You notice whom they do not make room for.
>> lanterns_close | cs_lant | hero:gender=unspoken | On the nearest bank two rows of lanterns burn, and a few people stand between them with one each, belonging to neither. You make room by being one.
// ---- Beneath the Ledger Hall: the First Listener
>> vault_close2 | cs_vault | hero:gender=woman | You think of the First Listener, a woman kept in a page for seven hundred years, and of how often a woman’s voice has been taken for a wound.
>> vault_close2 | cs_vault | hero:gender=man | You think of the First Listener, a woman kept in a page for seven hundred years, and of how many men have signed over a woman and been thanked.
>> vault_close2 | cs_vault | hero:gender=unspoken | You think of the First Listener, kept in a page for seven hundred years, and of everyone the ledger has called a wound for being a person.
// ---- The Last Sealing: how Mengjiao looks at you
>> lastseal_entry | cs_last | hero:gender=woman | Her look is not pity. It is the plain interest of one woman in another who has come a long way down.
>> lastseal_entry | cs_last | hero:gender=man | Her look is not suspicion. It is the plain interest of one who has waited fifteen years for someone to come down and not tell her what she is.
>> lastseal_entry | cs_last | hero:gender=unspoken | Her look is not surprise. It is the plain interest of one who has listened to fifteen years of names and never heard anyone give her their own.
`;
