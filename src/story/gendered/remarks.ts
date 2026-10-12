import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the gendered side paths: how much of the Left Cloister, the Right Yard or the Third Door the hero
 * took in, and what they carry out of it. Counts read the flags each path sets (`lc_…`, `ry_…`, `td_…`), so every small choice made along the way is
 * remembered by someone, a few decisions on.
 */
const SOURCE = String.raw`
// ---- The Elder: how much of a path the hero took in
% su_lc_all | count:lc_>=16 & hero:gender=woman | elder | The sisters tell me you took in the whole of the Left Cloister: the spoon, the Book, the tune, the key. A great many women have sat at that table. I think you are the first who left it knowing the shape of the room.
% su_lc_some | count:lc_>=9 & hero:gender=woman | elder | You were a long time in the Left Cloister, and you did not stop at the first courtesy. I know the signs of someone who has been listened to. I should like to think it was only the rice.
% su_ry_all | count:ry_>=16 & hero:gender=man | elder | Dehai tells me you went through the Right Yard like a man reading a ledger he means to keep. He is not easily impressed by that sort of thoroughness. He asked me whether you were mine. I said I did not know.
% su_ry_some | count:ry_>=9 & hero:gender=man | elder | You spent your night in the Right Yard in a way the wardens will talk about. Do not mistake that for a compliment. They talk about everything, and they remember the odd things.
% su_td_all | count:td_>=16 & hero:gender=unspoken | elder | Hou Zhe says you read the stair like someone who meant to be asked back. I have never had that said of me. I was always the one who was told to leave.
% su_td_some | count:td_>=9 & hero:gender=unspoken | elder | You went through the third door and stayed some time. I know the look of someone who has been given the run of a place that does not require an answer. I have been wanting it for fifteen years.
// ---- The Elder: what the hero carries out
% su_lc_book | lc_book_taken & realm>=2 | elder | The Sisters’ Book is still in your sleeve. I have not asked you to put it down. I should like it to be sung before it is read, and read before it is kept.
% su_ry_tally | ry_tally & realm>=2 | elder | You wear the wardens’ tally. It is a lighter thing than a sash, and a better one. I wonder if you know that Ren Qiao has never taken either.
% su_td_message | td_carry_message & realm>=2 | elder | You carry a message that is fifteen years late. I will not ask you to give it to me. I will only say that whoever you give it to will feel the weight of the delay, and that it is the only fair weight.
// ---- The company
% gx_ren_lantern | bond:ren>=-100 & ry_flame_named | ren | They tell me you spoke the name on the lantern, in the dark, in the yard. I never could. I held mine for the whole night and said nothing, and have been saying nothing since.
% gx_mengjiao_tune | bond:mengjiao>=-100 & lc_tune_hummed | mengjiao | You hum three notes when you think nobody is listening. I have been listening for a long while. It is the fourth you are leaving out, and I shall teach it to you when the mist is quiet.
% gx_gu_book | bond:gu>=-100 & lc_book_taken | gu | The leaves in your sleeve. Do you sing them? My mother would like to hear one, if you did. She sings at the tea stall in the evenings, when nobody is listening, and I think she would sing back.
% gx_lin_door | bond:lin>=-100 & td_marked | lin | I heard a rumour you left a mark in the Door-book. I did not know there was one. I keep the keys of the whole archive and I did not know that.
`;

export const genderedRemarksSource = SOURCE;
export const parsedGenderedRemarks = () => parseRemarks(SOURCE, "gendered/remarks");
