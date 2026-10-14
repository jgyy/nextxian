/**
 * Where the hero’s years are first read, and where they are read again as the story goes on. Lines are `>> scene | group | conditions | text`, and of
 * the lines sharing a group only the first that holds is shown. They read the hero’s age now (`age`), not the age they began with, so a youth
 * who has lived four years on the mountain is read as someone of twenty. Scenes that already sit at the 200-word cap are left alone.
 */
export const ageEchoes = String.raw`
// ---- The Law Hall: what she writes
>> mission | ag_law | age<=19 | “Sixteen, or near it,” she writes. “The Law has no form for a witness your age.”
>> mission | ag_law | age>=63 | She writes your years in the margin. “Seventy-six is a mortal’s span,” she says. “Do not spend it here.”
>> mission | ag_law | age>=46 & age<=62 | She writes your years in the margin. “You are older than my clerks,” she says.
// ---- The abyss: Gu is nineteen
>> abyss_entry | ag_gu | age<=19 | He is your age, near enough.
>> abyss_entry | ag_gu | age>=46 | He could be your child.
>> abyss_entry | ag_gu | years<=10 | Your realm allows few years.
// ---- The archive: the order at dawn
>> archive_gate | ag_arch | age<=19 | The warden does not meet your eyes, and you suspect it is because you are so young.
>> archive_gate | ag_arch | age>=63 | The walk is long for your years, and you read the order aloud better than you could at forty.
// ---- The tribunal: the masters weigh the accused
>> tribunal_summons | ag_trib | age<=19 | The masters look at your age first. Someone says “child.”
>> tribunal_summons | ag_trib | age>=63 | The masters rise a hand’s breadth for your years.
// ---- The second descent: the stair is longer now
>> descent_return | ag_desc | years<=3 | The descent is a long one, and you count the years your realm allows you against the steps of it.
>> descent_return | ag_desc | age>=63 | The abyss path is steeper than you remember, and you remember it well.
// ---- The sealing night: the original order glows
>> sealing_night | ag_seal | age>=63 | The old voices are not much older than you.
>> sealing_night | ag_seal | age<=19 | You are the youngest in the hall.
`;

/** The echoes that land on scenes of the later books, which the main line’s pass does not reach. */
export const ageBookEchoes = String.raw`
// ---- The river steps: the barge leaves and the stipend stops
>> departure_dawn | ag_river | years<=10 | The barge will not wait for your years, and the river is long. You count the span your realm gives you against the water, and do not like the sum.
>> departure_dawn | ag_river | age<=19 | You step aboard with the luggage of a child and the face of an adult, and nobody on the barge is quite sure which of you to speak to.
`;
