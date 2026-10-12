/**
 * What the Law Hall shows a hero who did not come through their own door scene. Every beginning but the river village ends in a hall
 * scene of its own, where the Elder looks the hero over, but the gate disciple’s gossip and the memorial both lead straight to the Law
 * Hall, so a hero who took either of them walked in without the Elder having looked at them at all. These lines give her that look
 * there, and only to a hero who has not had it (`og_hall_met` is set by every choice of the origin’s own hall scene).
 */
export const originHallEchoes = String.raw`
>> law_hall | origin_look | hero:origin=porter & !og_hall_met | She looks at your hands, calloused by six years of jars. She signed for the jars, never the hands.
>> law_hall | origin_look | hero:origin=rogue & !og_hall_met | Her eyes go to the door you came in by, and back. She counts exits too.
>> law_hall | origin_look | hero:origin=heir & !og_hall_met | Her eyes rest on your boots, too fine for the road, and on a ring of black jade.
>> law_hall | origin_look | hero:origin=courier & !og_hall_met | Her eyes go to the satchel at your hip and its green stamp.
>> law_hall | origin_look | hero:origin=exile & !og_hall_met | Her eyes rest on the sleeve where another sect’s grey was cut away. She knows the Windward cut.
>> law_hall | origin_look | hero:origin=cave & !og_hall_met | Her eyes rest on the faint grey haze about your shoulders.
>> law_hall | origin_look | hero:origin=furnace & !og_hall_met | She breathes in once: furnace-smoke, dry roots, and a death that is not yours.
>> law_hall | origin_look | hero:origin=lamp & !og_hall_met | Her gaze goes to the paper lantern in your hand, and its still blue flame.
>> law_hall | origin_look | hero:origin=listener & !og_hall_met | She sees the tilt of your head, as if hearing the lamps. The Concord has a notice for that.
>> law_hall | origin_look | hero:origin=struck & !og_hall_met | Her gaze goes to the iron lamp-chains, which have begun to sway toward you. Sit slowly, she says.
>> law_hall | origin_look | hero:origin=dream & !og_hall_met | Her eyes rest on your chest, which rises and falls to a rhythm not of this hall.
`;
