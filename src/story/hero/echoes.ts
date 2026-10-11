/**
 * Where the hero is first read: at the gate, and in the Law Hall. Lines are `>> scene | group | conditions | text`, and of the
 * lines sharing a group only the first that holds is shown, so each scene shows one reading of the dress, one of the birth, one of the face.
 * Scenes that already sit at the 200-word cap are left alone. The Elder’s asides and the remarks cover the rest of the story.
 */
export const heroEchoes = String.raw`
// ---- The gate: what the disciple sees
>> gate | hero_attire | hero:attire=rags | He takes in your patched hemp, and his umbrella tilts a little toward you, as though he cannot stand to be dry beside it.
>> gate | hero_attire | hero:attire=traveller | His eyes find the salt in the seams of your cloak. A traveller, he decides, and a long way from any road he knows.
>> gate | hero_attire | hero:attire=scholar | He reads the ink on your cuffs the way another man reads a face, and his shoulders drop a finger’s breadth.
>> gate | hero_attire | hero:attire=silk | The silk makes him straighten his sash before he has decided to. Rain beads on it and runs off, and he resents that, slightly.
>> gate | hero_attire | hero:attire=armour | His free hand drifts toward the gate bell. You are wearing scales and a sword-belt, and he has been told to expect trouble.
>> gate | hero_status | hero:status=outcast | He checks your name against the provincial register and finds the line struck through. His mouth goes thin and careful.
>> gate | hero_status | hero:status=commoner | He checks your name against the provincial register, finds a village roll and nothing above it, and relaxes by exactly that much.
>> gate | hero_status | hero:status=gentry | He checks your name against the provincial register and finds a magistrate’s seal beside it. He bows a little before you ask him to.
>> gate | hero_status | hero:status=noble | He checks your name against the provincial register and finds a banner beside it. He bows more deeply than the umbrella allows.
>> gate | hero_looks | hero:looks=plain | There is nothing in your face for him to hold on to, and he looks at you twice to be sure.
>> gate | hero_looks | hero:looks=striking | He keeps looking at your face and forgets, for a breath, what he was told to ask.
>> gate | hero_looks | hero:looks=scarred | His gaze stops at the burn along your jaw. He looks away too quickly, and then back, ashamed of both.
>> gate | hero_looks | hero:looks=frail | He sees how hard you are breathing after the last step, and has the grace not to remark on it.
// ---- The Law Hall: what she writes down
>> mission | hero_gender | hero:gender=woman | She notes it without comment, as someone does who knows how often a woman’s account is weighed twice. She will weigh yours once.
>> mission | hero_gender | hero:gender=man | She notes the way you stand, and sets it aside. A man’s confidence is the first thing the Law learns to discount.
>> mission | hero_gender | hero:gender=unspoken | She asked you nothing about yourself beyond your name, and you offered nothing. She writes that down as a courtesy, not a gap.
>> mission | hero_trade | hero:background=orphan | She reads the river-stair in the way you hold your pack, close to the chest, with one strap through the arm.
>> mission | hero_trade | hero:background=scholar | She glances at your hands and sees the copyist’s callus on the second finger. She nods, once, the way one nods at a colleague.
>> mission | hero_trade | hero:background=soldier | She watches you stand with your weight forward and your hands low. Levy drill, she thinks, and does not say it.
>> mission | hero_trade | hero:background=merchant | You are counting the lamps in the room, and she knows it. A trader’s runner prices what he sees, and so does she.
>> mission | hero_trade | hero:background=farmer | She watches your hands lie quiet at your sides, the way a field-hand’s do between jobs, and trusts them more than your face.
>> mission | hero_trade | hero:background=healer | You have already seen that the lamp nearest her is low on oil, and said nothing. She notices that you noticed.
`;
