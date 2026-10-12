import { parseRemarks } from "@/engine/markup";

/**
 * What the Elder and the company say, unprompted, about the hero’s cultivation: how often they have sat, tempered, studied or pushed
 * at a gate, how near they are to a threshold, and the way their beginning taught them to breathe. Each is said once, a few decisions
 * after it becomes true, and the first whose conditions hold is the one said, so a pattern is named before a single deed. Counts read
 * the flags the practices set (`cr_circulate_…`, `cr_temper_…`, `cr_comprehend_…`, `cr_push_…`), the roads finished (`cr_done_…`),
 * the nights sat in a retreat (`cr_retreat_…`), and the flag the engine sets on the decision a realm is entered (`reached_realm_…`).
 */
const SOURCE = String.raw`
// ---- The Elder: patterns first
% su_cr_all_four | count:cr_circulate_>=1 & count:cr_temper_>=1 & count:cr_comprehend_>=1 & count:cr_push_>=1 | elder | You have sat the circuit, hardened the body, read the working and put your shoulder to the gate. That is the whole of the art in four verbs. I confess I had not seen them done by one person in the same season.
% su_cr_push_many | count:cr_push_>=4 | elder | Four gates pushed. A cultivator who pushes so often is either very certain or very frightened, and from where I sit the two look the same. Rest, please. A threshold does not like to be asked a fifth time.
% su_cr_push_dark | count:cr_push_>=2 & karma<=-15 | elder | You have pushed at two gates with a dark karma behind you. A heart demon does not announce itself. It simply declines to open the door and waits to see how hard you will knock. Be gentle with the next.
% su_cr_push_two | count:cr_push_>=2 | elder | Two pushes at the threshold. The first teaches you where the gate is. The second teaches you how much of you it will take. I am told the third is the only one that matters.
% su_cr_cusp | progress>=90 & realm>=1 | elder | You carry yourself as someone a breath from a threshold. I can see it in the way you do not look at the door. Sit. Eat. Do not go anywhere that asks anything of you until it has opened.
% su_cr_temper_many | count:cr_temper_>=5 | elder | Five tempering drills, and you walk as if your bones had been taught to ring. A hard body is a gift. I ask only that you remember a body is also a house, and that houses need doors.
% su_cr_comprehend_many | count:cr_comprehend_>=5 | elder | You have studied five grounds to their meaning. I have read the founders’ commentaries and understood one in three. I should like to hear what you have understood of the other two.
% su_cr_circulate_many | count:cr_circulate_>=6 | elder | Six circuits on six roads. Most cultivators learn the art in the first and spend the rest of their lives pretending it is hard. You, I notice, have simply gone on doing it.
% su_cr_roads_forty | count:cr_done_>=40 | elder | Forty grounds. There is no keeper on the road who does not know your qi by its sound. I have been Elder twelve years and I know the sound of my own only on bad nights. Tell me how it is done.
% su_cr_roads_twenty | count:cr_done_>=20 | elder | Twenty grounds worked. You have a practice now, not a hobby, and the difference is in the shoulders. I should like it to be said I noticed before the sect did.
% su_cr_roads_ten | count:cr_done_>=10 | elder | Ten grounds. A cultivator who has sat in ten different places has learned that qi is not a property of a mountain. It is a habit of a person. I find that I envy you the education.
% su_cr_retreat_three | count:cr_retreat_>=3 | elder | Three nights in the retreat-huts. The keepers write that you do not sleep, you settle. It is the only verb I have ever trusted for what happens to a cultivator in the dark.
// ---- The Elder: a realm just entered
% su_cr_fresh_2 | since:reached_realm_2<=4 & realm>=2 & realm<=2 | elder | Foundation. Your qi has a floor under it now. You will not feel it until it is tested, and then you will wonder how you ever stood on anything less.
% su_cr_fresh_3 | since:reached_realm_3<=4 & realm>=3 & realm<=3 | elder | Core Formation. For a moment I could hear it turning from across the hall. Do not be alarmed by how loud it is. It will quiet. Everything does, in the end, which is not the comfort it sounds.
% su_cr_fresh_4 | since:reached_realm_4<=4 & realm>=4 & realm<=4 | elder | Nascent Soul. There is somebody sitting behind your eyes now. They are very new and very patient. I should be kind to them, if I were you. They will remember who was.
% su_cr_fresh_5 | since:reached_realm_5<=4 & realm>=5 & realm<=5 | elder | Spirit Severing. You have let something go that I have not yet been able to. I will not ask what. I will only say that I noticed the quiet when it went.
% su_cr_fresh_6 | since:reached_realm_6<=4 & realm>=6 & realm<=6 | elder | Dao Seeking. You know which way is toward it, now. That is the one thing the old books never tell you: that it is not far, and that it is entirely in your own direction.
// ---- The Elder: how a beginning taught the hero to breathe
% su_og_cave_break | og_cave_m_break & realm>=2 | elder | You took the Breaking half of the dead cultivator’s art past its sixth line. Whoever stopped there knew what they were doing. I notice you have not stopped. I would very much like to know what the seventh says.
% su_og_cave_settle | og_cave_m_settle & realm>=2 | elder | The Settling half of that old art is slow, and you have kept to it. The founders called it the stair that does not ask. I have never found a better way to describe it.
% su_og_furnace_fume | og_furnace_m_fume & realm>=2 | elder | You cultivate through the fumes of a furnace as a pill-house boy is taught. I have sat in a great many halls and breathed a great deal of incense. I should like to try your way, once.
% su_og_lamp_hold | og_lamp_m_hold & realm>=2 | elder | Seven winters of the Holding Breath, and you have never once hurried it. I am told the great masters of this sect began that way. I am told also that they stopped. You have not.
% su_og_listener_open | og_listener_m_open & realm>=2 | elder | The Open Ear takes everything and keeps what it needs. I once tried to teach it to a novice who could not forget what she heard. I do not think she lasted a winter. You seem to be lasting.
% su_og_struck_ground | og_struck_m_ground & realm>=2 | elder | You grounded heaven’s own spark through the soles of your feet, and walked up my stair with it quiet. I am not often moved by restraint. I will make an exception.
% su_og_dream_faithful | og_dream_m_faithful & realm>=2 | elder | You breathe a stranger’s art to the letter. A faithful pupil is a rare thing. A faithful pupil with no teacher is rarer, and I find I would like to know who the teacher was.
% su_og_dream_broken | og_dream_m_broken & realm>=3 | elder | You went past the end of the dream and invented the rest. Nobody has done that with the Hollow Roof breath in fifty years. If you will tell me what you found at the ninth line, I will tell you why I asked.
// ---- The company
% cr_gu_temper | bond:gu>=-100 & count:cr_temper_>=2 | gu | You have been at the hard drills again. I tried one, at the quarry, with a pickaxe, and could not lift my arms for a week. My mother said I was building a man. I think I was building a bruise.
% cr_gu_circulate | bond:gu>=-100 & count:cr_circulate_>=3 | gu | I sit in the evening, now, the way you do. Not for the qi. My mother says it is for the quiet. I sit in a corner of the tea stall and no one asks me anything, and it is the best part of the day.
% cr_ren_push | bond:ren>=-100 & count:cr_push_>=1 | ren | You pushed at a gate. I stood a bridge for fifteen years and never once pushed at anything. I held. It is not the same, and I have wondered which of us was the braver. I think it was you.
% cr_ren_retreat | bond:ren>=-100 & count:cr_retreat_>=2 | ren | A night in a retreat-hut. I slept in a guard-room for fifteen years and called it that. It was not the same, but it taught me what the word means.
% cr_lin_comprehend | bond:lin>=-100 & count:cr_comprehend_>=3 | lin | You have studied three grounds to their meaning. I am sorry, I counted. I keep the keys of an archive and cannot help it. I wonder whether you would let me read your notes. If you made notes. If you did not, I would like to hear it from you aloud.
% cr_lin_cusp | bond:lin>=-100 & progress>=85 & realm>=1 | lin | You look like a page that is about to be turned. I do not mean it as a joke. I mean that I can feel the tension in the paper.
% cr_yue_roads | bond:yue>=-100 & count:cr_done_>=12 | yue | Twelve training grounds. I have run goods through half the roads in the provinces and never once sat down on one. Maybe that is why I am so tired. Maybe I should rent an hour.
% cr_mengjiao_hush | bond:mengjiao>=-100 & count:cr_done_>=24 | mengjiao | You have sat so many places that the wind has begun to say your name as it passes. It does not say it the way it says the others. It says it as one says the name of a house one has stopped at often.
% cr_odval_plates | bond:odval>=-100 & count:cr_done_>=30 | odval | Thirty grounds. You cultivate the way the grass grows, which is to say, where you are, a little each day. I have always thought it the best way and the least admired.
`;

export const cultivationRemarks = SOURCE;
export const parsedCultivationRemarks = () => parseRemarks(SOURCE, "cultivation/remarks");
