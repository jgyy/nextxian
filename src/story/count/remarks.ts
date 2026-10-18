import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder says, unprompted, as the calendar reaches the marks of a realm’s kind of time: a year since the gate, five, ten, a generation, a lifetime, a dynasty, an age.
 * Each is said once, in the window of days it belongs to, so a hero who spends a dynasty on a road is not told about their first year. She is a Dao Seeker and her years
 * run slow: she keeps the age the register gives her, forty-three, and looks it, and she says so only once, when a century has gone by.
 */
const SOURCE = String.raw`
% su_time_millennium | days>=365000 | elder | A thousand years since the gate. The mountain has had four names, and I have answered to all of them. I keep the ledger still. There is a page in it for you, and I have not found the end of the sentence.
% su_time_age | days>=182500 & days<=365000 | elder | Five hundred years. I stopped counting the sects around us at nine. I keep counting you. It is the one sum I have never wished to finish.
% su_time_century | days>=36500 & days<=182500 | elder | A hundred years since you stood dripping at my gate. I am told I look as I did. It is the kindest thing anyone says of me, and it is a courtesy of the Dao, not of the mirror.
% su_time_lifetime | days>=21900 & days<=36500 | elder | A mortal’s lifetime has gone by since the gate. The almshouse has buried everyone who was in it when you came, and the bell has been rung by three hands since. I rang nothing. I wrote it down.
% su_time_generation | days>=9125 & days<=21900 | elder | A generation, since you came up the steps. The novices who were children then are teaching now, and the ones who taught them are names on a wall. I did not think it would go so quickly. It did not. It went at exactly the pace of the thing it was.
% su_time_decade | days>=3650 & days<=9125 | elder | Ten years. I kept the register of your arrival, and it has turned the colour of tea. I find I do not mind. A page ought to look as though it has been read.
% su_time_five | days>=1825 & days<=3650 | elder | Five years since the gate. You will not have counted. I did. The sect looks at you differently, and does not know that it does. It is what a place does with a person it has decided to keep.
% su_time_year | days>=365 & days<=1825 | elder | A year since you came up the steps in the rain. The whole of the sect has turned once round its calendar, and you are in it now, as a stone is in a wall. I count everything. It has never made me patient.
`;

export const parsedCountRemarks = () => parseRemarks(SOURCE, "count/remarks");
