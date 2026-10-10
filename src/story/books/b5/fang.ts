import type { Arc } from "../types";

/**
 * Book Five, arc ten: the Inspector's Pavilion. Inspector Fang, who has hunted the party across three provinces, receives them
 * under a white tent with nine banners and offers tea and a bargain: the Ninth's black seed, and in return a rewritten Ledger
 * with a line for everyone. He is mild, funny, sincere, and wrong in a way that would unwrite the struck. Four approaches: argue
 * him down with the law (a1, truth), escape the pavilion's guards and Deputy Rao (a2, force), steal and alter his draft
 * (a3, deceit), and tend the illness he has hidden (a4, mercy). A hidden route lays the founders' confession on his desk.
 * Cast: Inspector Fang, Deputy Rao, Fang's secretary Pol, Duan Wuyi, the Elder, Hao Lan, Ren Qiao, Gu.
 */
export const fang: Arc = {
  id: "fang",
  name: "The Inspector’s Pavilion",
  scenes: String.raw`
=== fang_entry | Tea with the Inspector
It stands at the centre of the camp, and it is the only thing in it that is not crowded. A white silk pavilion the size of a house, ringed by nine tall banners that hang motionless in the thin air. The ground round it is raked. The guards on the door wear plain grey and carry no weapons. A small brass gong hangs from a frame, and a boy of ten stands beside it with a mallet, waiting to be asked.
You have been summoned. A card was left on the cart at dawn, in a thin precise hand: *The Inspector begs the pleasure of the company of the Ninth, and of those who travel with her. Tea at the fourth hour. Nobody will be harmed.*
You go. There seems no alternative.
The boy strikes the gong. A flap lifts. Inside, in a cool white light, a little bald man in a plain brown robe is pouring tea from a clay pot into nine cups. He looks up with a smile of the purest gentleness.
“You came,” says Inspector Fang. “How very kind. Do sit. I have been looking forward to this for three years.”
> truth | Sit, and let Duan speak first. | fang_a1s1
> force | Count the guards, and note the gap behind the dais where the tent-wall does not reach the ground. | fang_a2s1
> deceit | Notice the roll of papers on his desk, sealed with a ribbon, and the secretary who sits guarding it. | fang_a3s1
> mercy | Notice that the hand that pours the tea is shaking, and that he has not drunk any of his own. | fang_a4s1
> inquiry | Lay the founders’ confession, in Hao Lan’s fair copy, on the table between the cups. | fang_h1 |  | tomb_read | You hold nothing he has not already read.

// ---------------------------------------------------------------- a1: the argument
=== fang_a1s1 | The First Cup
“No sugar,” says Fang. “I took the liberty. Madam Su, you will forgive me.” He sets the cup in front of the Elder with a small bow. He is seventy, tiny, bright-eyed and brown as a walnut, with a bald head fringed with wisps of white, and a smile like a child’s. “I have read all your memoranda. You write beautifully. So clean.”
“Inspector,” says the Elder.
“Please. Fang. It saves breath.” He pours the others. “And Censor-General Duan, whom I have not seen in thirty years. You have grown a beard. It becomes you.” He sits. “Nobody will be harmed. I give my word, for what it is worth. The guards are for show.”
Duan Wuyi has not touched his cup. His soft face is white. “You wrote the Equity Essays,” he says.
“I did.”
“I read them at the Academy.”
“Did you?” Fang looks delighted. “I am so pleased. Nobody ever has.” He leans forward. “I wonder if you remember the thesis.”
“That the gates of heaven should be open to all.”
“*Precisely,*” says Fang. His eyes shine.
> truth | Listen. | fang_a1s2 | npc:SU_FANG_TEA
> mercy | Drink the tea. | fang_a1s2
> quiet | Watch the Inspector. | fang_a1s2
> inquiry | Ask what he wants. | fang_a1s2

=== fang_a1s2 | What He Wants
“Very little,” says Fang. “One small thing.” He sips. “It is in your chest.”
The tent goes quiet. Hao Lan’s hand has found Ren Qiao’s sleeve. Gu, at the back, has stopped breathing.
“The seed,” says Fang, gently. “The black one. The lotus. You have had it since you were five.” He sets his cup down on its saucer without a sound. “It is an extraordinary thing. A seed of the Unwritten, living, sound, in a human heart. There are perhaps three in the world.” He folds his hands. “I should like to borrow yours.”
“For what?”
“To rewrite the Ledger.”
Nobody speaks. Outside, the gong boy shifts his feet.
“You see,” says Fang, “it is a question of lines. There are nine hundred and ninety-nine, and one for the sealed. A thousand lines for all the ascended in the world. It is a closed list.” He taps the table. “I should like it opened. A line for everyone. Not a race. Not a market. A gift.”
“How?”
“With a seed,” says Fang, “and a pen.”
> truth | Ask how. | fang_a1s3
> mercy | Look at Duan. | fang_a1s3
> quiet | Wait. | fang_a1s3
> inquiry | Ask what it costs. | fang_a1s3

=== fang_a1s3 | A Reasonable Man
“Nothing,” says Fang. “That is the beauty of it. It costs nothing.” He smiles. “The Ledger is a list. A list can be rewritten, if one has the authority. The Ledger Stone is the original. It is in the vault of the Ash Archive at Azure Cloud. The Stair is merely its copy.” He nods upward. “A seed of the Unwritten is the only substance that will take the ink of the first page.”
“You want to rewrite the original.”
“I want to *amend* it.” He shrugs. “From a thousand lines to a million. To ten. To as many as there are people in the world.”
“And the struck?”
“Are written back.” He says it quite simply. “Every one. The Ledger is amended to include them. No one need fall again.”
It is the loveliest thing anyone has said to you in a month. You see the Elder’s face. You see Hao Lan’s.
“It is not a plot,” says Fang. “I should like you to understand that. It is simply a thing that one man can do. If one other lends him a seed.”
> truth | Say nothing. | fang_a1s4
> mercy | Look at the Elder. | fang_a1s4
> quiet | Watch Duan. | fang_a1s4
> inquiry | Ask Duan what he thinks. | fang_a1s4

=== fang_a1s4 | Duan’s Objection
Duan Wuyi sets down his cup. He does it slowly. He has not spoken for a quarter of an hour, and his voice, when it comes, is dry as old paper.
“There is an objection,” he says.
“I had hoped so.” Fang beams. “Please.”
“The Ledger is a list of persons. Every line is a person. If you add a line, you add a person.” Duan pushes up his spectacles. “If you add a *million,* you must have a million persons to put in them. There aren’t a million persons who are not already written.”
“There are the struck.”
“There are four hundred thousand struck. Who are *already* persons. Who have already been written once, and struck out.” His voice is gentle. “If you write them back, you are not adding. You are *restoring.* That is a different clause.”
“A distinction without a difference.”
“It is the entire difference between a Ledger and a graveyard,” says Duan. “Restoration requires the consent of the person restored. You cannot write them back against their will.”
“Why would they not wish it?”
“Some may have made other arrangements.”
Fang tilts his head, interested.
> truth | Wait. | fang_a1s5
> mercy | Smile at Duan. | fang_a1s5
> quiet | Watch Fang. | fang_a1s5
> inquiry | Ask him to go on. | fang_a1s5

=== fang_a1s5 | Other Arrangements
“There is a child in a hollow,” says Duan. “In a green mound. She was struck seven hundred years ago, and she has been waiting there ever since. She has made her own arrangements.” His voice shakes. “She has asked for a line. One. And been told that there is room.”
“Yes?”
“If you rewrite the Ledger, her line is gone.” He leans forward. “The rewriting will erase every previous entry. The new list begins from the first line. Nothing carries over.”
Fang’s face has changed. The smile is still there, but something behind it has stopped.
“That is not in the seed,” he says.
“It is in the Stone.”
“I have read the Stone.”
“Have you?” Duan’s eyes are very bright. “In what edition?”
There is a long silence. The gong boy outside clears his throat. In the tent a single lamp gutters.
“I have read the abridged,” says Fang, slowly.
“There is a rider.” Duan’s voice is almost gentle. “It is in the founders’ hand, on the last leaf. It states that a new writing cancels the old. It was added by Yu Ling.”
“Who?”
“The First Voice.”
Fang sits very still.
> truth | Hold your breath. | fang_a1s6
> mercy | Look at the Inspector. | fang_a1s6
> quiet | Wait. | fang_a1s6
> inquiry | Ask if he knew. | fang_a1s6

=== fang_a1s6 | Did He Know
“No,” says Fang. He says it after a long pause, in a small clear voice, looking at his hands. “I did not.” He swallows. “I have spent twenty-two years on this. I have studied everything. The Stone. The Concord. The Registrars.” He gives a faint smile. “I have not read the rider. It is not in the abridged.”
“It is not in any copy but the original.”
“Which I have never seen.” He looks up. He is no longer the benevolent host. He is an old man with a tired face and a faint tremor in his chin. “Then what I propose would unwrite her. The child. And all the others.”
“Yes.”
“Including the people I meant to save.”
“Including,” says Duan Wuyi, very quietly, “your sister.”
It is the first time he has used the word. The Inspector draws a sharp breath.
“Who told you?” he whispers.
“Nobody.” Duan’s voice is kind. “I was at the Academy with you. You wrote it in the dedication. Of the Equity Essays. *To Mei, who was struck at nine, and is waiting.*”
Fang closes his eyes.
> truth | Wait. | fang_a1s7
> mercy | Hold your breath. | fang_a1s7
> quiet | Look at Duan. | fang_a1s7
> inquiry | Ask who Mei was. | fang_a1s7

=== fang_a1s7 | Mei
“My younger sister,” says Fang. His voice is quite level. “Two years my junior. Clever. Impertinent. She wanted to be a Censor.” He opens his eyes. “She was struck, for a clerical error, at nine. A Registrar’s slip. A misplaced stroke. I was eleven.”
Nobody speaks.
“I came home from school one afternoon and she was not there.” He looks at the cup. “My mother said, *Who?* I said: *Mei.* She said: *We have no Mei.* I went round the house. I looked in every room. In the end I found her in a drawer. A hair-ribbon. That was all.” His smile is thin. “I have kept it.”
He puts a hand into his sleeve. He draws out a faded scrap of red silk. He lays it on the table between the cups.
“That is why I became an Inspector,” he says. “To find the door.”
Hao Lan is weeping silently. Gu is staring at the ribbon with enormous eyes. The Elder has gone very still.
“And you found it,” says Duan.
“I found a seed,” says Fang. “And a pen.”
> truth | Touch the ribbon. | fang_a1s8
> mercy | Hold Hao Lan. | fang_a1s8
> quiet | Wait. | fang_a1s8
> inquiry | Ask what he will do. | fang_a1s8

=== fang_a1s8 | What He Will Do
He is quiet for a long time. The tea grows cold. The gong boy, outside, begins to hum.
“I am an old man,” says Fang. “And I have a plan that will kill the one I love.” His voice is dry. “I find I am not altogether surprised.”
“It was a good plan,” says Duan.
“It was a very good plan. That is the pity of it.” He picks up the ribbon, and holds it to the light. “I have been going about it from the wrong end.”
“What end?”
“I thought: *rewrite the book.* I never thought: *answer the child.*” He smiles, wryly. “It is the same trouble as my essays. They were always about the system. Never the one in it.”
He puts the ribbon back in his sleeve.
“I shall not stop you,” he says. “You will climb. I will hold the guards. The masters will be vexed.” He lifts his cup. “It is the least I can do for a man who read the abridged.”
“Fang—”
“And Duan.”
“Yes?”
“I should like to be told, if there is a line for her.”
> truth | Promise. | fang_a1s9
> mercy | Take his hand. | fang_a1s9
> quiet | Bow. | fang_a1s9
> inquiry | Ask if he will come. | fang_a1s9

=== fang_a1s9 | A Truce
He holds it for nine days. It is the most extraordinary thing. Every guard of the Concord in the camp is quietly stood down, on the Inspector’s written order. The Weighing Wardens are sent on leave. A hundred and four clerks of the Office of Ascents find that their orders have been mislaid. The masters’ messengers arrive and are told, politely, that the Inspector is indisposed.
He sits in his pavilion with the nine banners hanging motionless, and drinks his tea, and reads. On his desk lies a pile of books he has never opened: the Chronicles of the Order, the Annals of the Listeners, a collected edition of the founders. He turns the pages with the slow wonder of a man discovering the sea.
You visit him on the last night. He is sitting alone, in lamplight, with the red ribbon in his hand.
“I think,” he says, without looking up, “that I have wasted my life.”
“You have not.”
“I have wasted it on the wrong sentence.” He smiles. “But one can rewrite a sentence.”
He lifts his eyes. They are bright with tears.
“Climb,” says Fang. “And when you meet the Clerk, give her my regards.”
> truth | Bow. | fang_close | +fang_argued
> mercy | Take the ribbon’s hand. | fang_close | +fang_argued
> quiet | Look at the banners. | fang_close | +fang_argued
> inquiry | Ask who the Clerk is. | fang_close | +fang_argued

// ---------------------------------------------------------------- a2: the escape
=== fang_a2s1 | The Gap
It is behind the dais, where the silk of the back wall meets the earth. Whoever pitched the pavilion did it in a hurry, or on a slope; there is a gap of a hand’s breadth where the hem stands off the ground, and through it you can see the stubble and the long evening light. A person could slip out. A person with a certain resolve.
“Don’t,” whispers Ren Qiao, at your side. “Not yet.”
“Why?”
“Because he’s too nice.” He keeps his face blank. “A host who offers tea and says *nobody will be harmed* is a man with a plan. Look at the guards. They’re unarmed. That’s not trust. That’s confidence.”
“Of what?”
“That they won’t need to be.”
You look. There are eight guards at the door, in plain grey, with their hands at their sides. They have good posture. Their shoulders are very square. One of them, you notice, is standing with his weight on the balls of his feet.
“Rao,” says Ren Qiao, softly.
In the doorway, leaning against the tent-pole in his green silk coat, with a smile of mild amusement, stands Deputy Inspector Rao.
> force | Watch him. | fang_a2s2
> truth | Say nothing. | fang_a2s2
> quiet | Hold your breath. | fang_a2s2
> mercy | Look at Fang. | fang_a2s2

=== fang_a2s2 | Rao Smiles
“Madam,” says Rao. He sweeps off his hat. “And friends. What a pleasure.” He glides forward. His coat is spotless. His hands are gloved. “The Inspector has been very patient. He asked me to apologise for the delay.”
“You were delayed?”
“I was *occupied.*” He smiles. “With a crane, a bell, a salvage crew and a boy who put sand in my feedstock. A great deal of correspondence.” He folds his gloves. “I am pleased to say that all of it has been dealt with.”
“We are glad.”
“I am sure.” His pale eyes rest on you. “I merely wished to observe that the Inspector is a man of principle. He will not use force.” His smile widens. “I am not a man of principle. I am a man of results.”
“Rao,” says Fang, from his cushion. His voice is mild. “Sit down.”
“Of course.”
He does not sit. He leans on the tent-pole and looks at the swordsman, with polite interest.
“You are the Warden of the Ash Bridge,” he says. “I have heard a great deal about you.”
Ren Qiao’s hand has gone to his hilt.
> force | Step beside Ren. | fang_a2s3
> truth | Hold his arm. | fang_a2s3
> quiet | Watch the guards. | fang_a2s3
> mercy | Look at Fang. | fang_a2s3

=== fang_a2s3 | A Challenge
“Fifteen years on a bridge,” says Rao, thoughtfully. “And fourteen on the path. It must be a long time, to hold a lantern.” He tilts his head. “I wonder if you ever dropped it.”
“I did not.”
“No. You were very reliable. It is the reason they chose you.” He shrugs. “It must be a comfort. To be so reliable.”
Ren Qiao goes the colour of ash. He does not speak.
“Rao,” says Fang.
“I am only making conversation.” Rao smiles. “I understand he is a swordsman. I have never fought one. I thought: why not now?” He draws his own sword. It is a slim rapier, very light, with a basket hilt of silver. It rings like a bell. “A friendly bout. To the first blood.”
The guards have stepped back, in perfect order, leaving a circle. They have done it before. It was rehearsed.
“It’s a trap,” you whisper.
“I know.” Ren Qiao is staring at the rapier. “But I’ve been waiting fifteen years to be insulted by a man with a sword.”
He draws.
> force | Say nothing. | fang_a2s4
> truth | Warn him. | fang_a2s4
> quiet | Watch. | fang_a2s4
> mercy | Look at Fang. | fang_a2s4

=== fang_a2s4 | First Blood
It is over in nine seconds. It is also, you will think afterwards, the most beautiful thing you have ever seen. Rao is a duellist: all feint and flick and flourish, a dancer with a point. He lunges. He retreats. His blade is a silver thread, here, there, nowhere. Ren Qiao does not move. He stands in the guard position with his sword low, his scarred face blank, and waits.
Rao feints high. Ren Qiao does not take it. Rao feints low. Ren Qiao does not take it. Rao tries a lunge, a disengage, a pretty little cut across the wrist.
Ren Qiao takes one step.
It is not a lunge. It is a step, the length of a pace, into the line of the thrust. The silver point goes past his ear. His own sword, which has not moved, is suddenly against Rao’s collar, and the tip is touching skin. A bead of red wells up.
“First blood,” says Ren Qiao.
The pavilion is utterly silent. Rao stares down his nose at the blade. He puts a hand to his throat. He looks at the red on his glove.
“Dear me,” he says, and smiles. “That was rather good.”
> force | Step back. | fang_a2s5
> truth | Breathe. | fang_a2s5
> quiet | Watch Rao. | fang_a2s5
> mercy | Look at Ren. | fang_a2s5

=== fang_a2s5 | Not a Gentleman
He does not accept it. That is the horror. He lowers his rapier, and bows. He says, in a pleasant voice, “I concede.” Then, as Ren Qiao lowers his guard, he whips his left hand out of his sleeve, and the gloved fingers close round a small glass vial.
“Down!” you shout.
Something flashes. The vial strikes the floor at Ren Qiao’s feet and bursts. A pale cloud rolls out. It is sweet and cold and smells of camomile. Ren Qiao staggers. His eyes roll. His sword drops from his hand.
“Calm dust,” says Rao pleasantly. “An aerosol. We have been experimenting.” He steps back. “It should take effect within three breaths. The subject becomes tractable.”
Ren Qiao is on one knee. He is shaking. His scarred face is slack.
The guards have closed in a ring. Hao Lan has her hand over her nose. Gu is coughing. Duan Wuyi has put his handkerchief to his face. The Elder, with iron composure, has not moved.
“I regret the necessity,” says Rao. “I really do.” He steps forward. “I only want the seed.”
> force | Hold your breath. | fang_a2s6
> truth | Pull Ren back. | fang_a2s6
> quiet | Cover your mouth. | fang_a2s6
> mercy | Reach for Ren. | fang_a2s6

=== fang_a2s6 | The Air Clears
It is Hanming who saves you. He has been sitting quietly at the back of the tent, in the shadows, with his arms folded, a thin scarred man in a patched coat whom no one has noticed. He has a glass bottle in his hand. It is stoppered with a cork. He has been holding it all through the tea.
He throws it.
It goes in a long lazy arc across the pavilion. It strikes the tent-pole with a smack. It breaks. A thin sharp smell of vinegar rolls out, and with it, a dry astringent mist.
The calm dust shrivels.
You see it happen. The pale sweet cloud draws back, as a snail draws in its horns. It thins. It clots. It drifts to the floor in grey flakes. In a heartbeat the tent is clear.
Hanming stands up. He lowers his arm.
“It’s an old glaziers’ trick,” he says. “Acid cleans the lung. We used it for the white lead.” He walks forward, calm, unhurried, with his scarred face set. “I made a few. Just in case.”
Ren Qiao lifts his head. He blinks. He staggers to his feet.
He picks up his sword.
> force | Stand. | fang_a2s7
> truth | Thank Hanming. | fang_a2s7
> quiet | Watch Rao. | fang_a2s7
> mercy | Help Ren. | fang_a2s7

=== fang_a2s7 | Out
“Go,” says Ren Qiao. His voice is hoarse. “The gap.” He plants himself between you and the guards, sword up, eyes clear. “I shall hold them.”
“You can’t.”
“I’ve held bridges.” He nods at the tent-wall. “Go.”
You duck. You slide under the silk, on your belly, into the stubble. Behind you the pavilion roars. A bench goes over. A brass lamp shatters. A guard yells. You hear the sound of a sword on a halberd, and a grunt, and the clatter of a stool.
You come up in the lee of the tent, on your hands and knees. Hao Lan is there. Gu is there. They are dragging Duan Wuyi out by the legs. He emerges, dishevelled, with his spectacles askew, clutching his seal in both hands. Behind him the Elder comes through the gap in a single brisk wriggle, her grey coat caked in dirt.
“Where’s Ren?” gasps Gu.
You look back. The silk bellies. A shape slams against it from the inside.
There is a sudden, enormous sound, like a bell struck with a mallet.
> force | Run. | fang_a2s8
> truth | Wait. | fang_a2s8
> quiet | Peer in. | fang_a2s8
> mercy | Call for him. | fang_a2s8

=== fang_a2s8 | The Gong
It is the boy. The small boy with the mallet, who has been standing by the gong all this time. He has struck it. He strikes it again, with all his strength, with the mallet in both hands. The brass sings. It rings out across the camp like the end of the world.
Heads turn. Along the lane, in the tents, thousands of pilgrims look up. Brother Lung puts down his ladle. The soup-line falls quiet. A mass of faces, white in the dusk, turns toward the pavilion, from which a roar is coming and a single enormous clang.
“What is it?” shouts a farmer.
“A fight!”
“At the Inspector’s?”
“Look!”
The flap is flung back. Ren Qiao staggers out, backwards, with his sword in his hand and blood running down his cheek. After him come the guards, in a knot, in disorder. Behind them, last of all, comes the Deputy Inspector Rao with his rapier drawn and a look of fury.
He stops. The camp is watching.
It is a ring of ten thousand people, silent, in the dusk. It stretches to the horizon.
He puts away his sword.
> force | Stand with Ren. | fang_a2s9
> truth | Step forward. | fang_a2s9
> quiet | Hold your breath. | fang_a2s9
> mercy | Help Ren. | fang_a2s9

=== fang_a2s9 | Witnesses
Fang comes out last. He stands in the door of the pavilion, small and bald and mild, and looks at the crowd. He looks at the Deputy. He looks at the swordsman with the bleeding face, and the ring of silent pilgrims in the dusk. His expression does not change.
“I am afraid,” he says, “that there has been a misunderstanding.”
“There has,” says Rao, tightly.
“I invited these people to tea.” Fang’s voice is thin and clear. “I gave my word that no one would be harmed. I find that the word has been broken.” He turns his gentle eyes on his deputy. “By my own staff.”
“Inspector—”
“Rao.” Fang does not raise his voice. “You will return to the Fort. You will remain there until I send for you.”
“I act in your interest—”
“You act in your own.” The old man smiles faintly. “I have always known. I was waiting to see how long it would take.”
Rao’s face is quite white. He bows. It is a stiff, small, furious bow. He turns. He walks away through the silent crowd.
“Please accept my apologies,” says Fang, to you. “It will not happen again.”
> force | Nod. | fang_close | +fang_escaped
> truth | Bow. | fang_close | +fang_escaped
> quiet | Help Ren. | fang_close | +fang_escaped
> mercy | Look at the crowd. | fang_close | +fang_escaped

// ---------------------------------------------------------------- a3: the draft
=== fang_a3s1 | The Roll
It lies on the desk behind him, tied with a red ribbon: a long scroll in heavy cream paper, sealed at the end with a lump of green wax. His secretary sits beside it, a small neat young man with a clerk’s cap and a pen behind each ear, nibbling a biscuit. The nameplate on the desk says POL. He does not take his eyes from the scroll.
“A draft,” murmurs Hao Lan, in your ear. “It must be. Look at the way he guards it.” She takes a sip of tea. “It’s the Amendment.”
“Of the Ledger?”
“I should think so. The whole thing. In his own hand.” Her eyes are bright. “If I could get a look at it—”
“We’re at tea.”
“I’m aware.” Her voice is dry. “I have an idea.”
“Of course you have.”
“It involves the biscuits.”
You glance at Pol. He is on his fourth. He has crumbs on his chin. He is looking at the tray of ginger-nuts on the sideboard with the longing of a man who has not been allowed any for a week.
“The Inspector,” says Hao Lan, “rations him.”
> deceit | Listen. | fang_a3s2
> truth | Say it is dishonest. | fang_a3s2
> quiet | Watch Pol. | fang_a3s2
> mercy | Think of Pol. | fang_a3s2

=== fang_a3s2 | Biscuits
It is easily done. She gets up in the middle of Duan’s peroration, with a murmured excuse, and wanders to the sideboard. She stands beside Pol with her tea in one hand. She asks, in a low sympathetic tone, whether he has tried the ginger ones. He has not. They are forbidden. She takes one, and breaks it, and eats half.
“They’re quite wonderful,” she says. “Crisp. A little salt.”
He gulps. “Madam, I couldn’t.”
“Oh, I wouldn’t dream of letting you.” She smiles. “It’s only that I thought you might like to see where they come from.”
“Where?”
“The tin.” She nods. “Behind the screen. There are two dozen.” She lowers her voice. “The Inspector never counts.”
Pol’s eyes go round. He glances at the Inspector, who is listening gravely to Duan on the nature of consent. He looks at the scroll. He looks at the ginger-nuts.
“I shall be a minute,” he whispers. He rises, and creeps behind the screen.
Hao Lan puts down her cup. She walks to the desk, and sits.
> deceit | Watch the Inspector. | fang_a3s3
> truth | Cover for her. | fang_a3s3
> quiet | Hold your breath. | fang_a3s3
> mercy | Keep Duan talking. | fang_a3s3

=== fang_a3s3 | Forty Seconds
She has forty. That is the arithmetic. She has seen how long it takes Pol to eat a biscuit when he thinks no one is watching. She unties the ribbon with one finger. She slips the roll out of its sleeve. She holds it up to the light.
It is a draft, in a fine small cursive. It is signed, at the end, *Fang, Inspector.* It is headed, in large characters, *THE GREAT AMENDMENT.* She skims it, the way she skims all documents, in a single sweeping glance, like a hawk over a field.
Her face does not change.
“Duan,” she says clearly, in her flat pleasant clerk’s voice. “Did you want to see the schedule of provisions?”
Duan Wuyi stops in mid-sentence. “I... yes.”
“Here.” She brings the scroll across the tent. She hands it to him. She does it with a look so utterly guileless that the Inspector, sipping his tea, does not even glance up.
Duan unrolls it. He reads three lines. His breath catches.
“Hao Lan,” he says, very softly.
“Yes?”
“Whose is the rider?”
> deceit | Read over his shoulder. | fang_a3s4
> truth | Watch Fang. | fang_a3s4
> quiet | Hold the scroll. | fang_a3s4
> mercy | Hold Duan. | fang_a3s4

=== fang_a3s4 | The Last Clause
It is at the very end, in the margin, in a different hand: a neat, small, regular script, not Fang’s. It reads: *Section nine. Upon execution of this Amendment, all prior entries in the Ledger of Persons shall be deemed void.*
“Void,” whispers Duan.
“Yes.”
“Not restored. *Void.*”
“Yes.”
“It would erase them.” He is staring at the clause. “The struck. The living. The whole of the book.”
“And begin again.” Hao Lan’s voice is cold with fury. “With the seed as the first line.”
“Who wrote it?”
“Rao.”
Duan looks up. “You know his hand?”
“I forged it, once.” She almost smiles. “At the Chancery. For practice. It’s a very distinctive *g.*”
Pol, behind the screen, has finished his biscuit. You hear a rustle. You hear a cough. The little secretary emerges, with a flushed face and a tell-tale smear of ginger on his lip. He looks at the desk. At the empty ribbon.
“Madam,” he says, in a thin, horrified voice. “Where is the Amendment?”
> deceit | Stand. | fang_a3s5
> truth | Look at Fang. | fang_a3s5
> quiet | Hold still. | fang_a3s5
> mercy | Hold Hao Lan. | fang_a3s5

=== fang_a3s5 | Caught Reading
Fang looks up. He sets his cup in its saucer. He regards the scene with the benign interest of a man who has noticed that the cat has got into the cream: Duan Wuyi with the scroll, Hao Lan at his shoulder, Pol in the doorway. His smile is unchanged.
“Ah,” he says. “You have found it.”
“Inspector,” says Duan hoarsely. “I am sorry. We—”
“Do not apologise. I should have shown it.” The old man holds out a hand. “May I?”
Duan gives it to him. Fang smooths it on his knee. He reads it from the beginning, slowly, with his lips moving. At the end of the first page he frowns. At the middle of the second he stops.
He is silent for a long time.
“Section nine,” he says at last, in a small voice.
“Yes.”
“I did not write that.”
“No.”
“I did not read it.” His fingers are trembling. “I signed it. Last week. Rao brought it. He said it was a formality.” He looks up. “He said it was the schedule.”
He puts the scroll down. His hand lies on it, trembling like a leaf.
> deceit | Wait. | fang_a3s6
> truth | Say it is Rao’s. | fang_a3s6
> quiet | Look at Hao Lan. | fang_a3s6
> mercy | Look at Fang. | fang_a3s6

=== fang_a3s6 | A Clean Copy
“There is a remedy,” says Hao Lan. She says it carefully, with her hands behind her back. “I can make a clean copy.”
Fang looks at her. His eyes are tired. “Without section nine?”
“Without it. And with a clause in its place.”
“What clause?”
“*Nothing in this Amendment shall be taken to void any prior entry.*” She smiles faintly. “I would add a witness.”
“You would forge my signature.”
“I would *re-execute* the instrument.” Her chin lifts. “With your consent. You have only to sign it.”
He is silent. Pol, in the corner, has covered his face with his hands. The old man stares at the scroll. The lamp burns.
“And if I do not?”
“Then Rao will carry it up the Stair on the ninth night,” says Hao Lan, “and read it aloud, and every name that has ever been written in the Ledger of Persons will be gone.”
Fang draws a long breath.
“Pol,” he says. “Fetch a pen.”
> deceit | Hold the lamp. | fang_a3s7
> truth | Watch. | fang_a3s7
> quiet | Hold your breath. | fang_a3s7
> mercy | Smile. | fang_a3s7

=== fang_a3s7 | Fair Copy
She does it in a night. She writes in his hand, which she has studied for six hours, with an ease that makes Pol faint. The clause in section nine is rewritten, and a rider is added. The signature is the Inspector’s. He signs it himself, in the lamplight, with a trembling hand.
Duan Wuyi witnesses. The Elder countersigns. Hao Lan seals it, with a drop of green wax, and the Inspector’s ring.
When it is done, the old man sits back. He regards the new Amendment, lying on the desk, long and cream and perfect. He looks at the old, which lies beside it, with its fatal clause.
“They are identical,” he says wonderingly. “Except for one line.”
“That is the art.”
“Rao will not know.”
“Rao will read the first page and the last,” says Hao Lan. “Everyone does.” She puts down the pen. “It is a trait of ambitious men.”
Fang takes the old draft. He holds it over the lamp. It catches. He watches it burn, with a faint, remote, tired smile, until it is a curl of black ash.
“Thank you,” he says.
> deceit | Nod. | fang_a3s8
> truth | Bow. | fang_a3s8
> quiet | Watch the ash. | fang_a3s8
> mercy | Hold Hao Lan. | fang_a3s8

=== fang_a3s8 | What Rao Read
He reads it on the ninth night. The Elder tells you afterwards. She watches from the foot of the Stair, in the dusk, among ten thousand pilgrims, as the Deputy Inspector mounts the first step, with the Amendment unrolled in both hands. He reads it aloud in a clear carrying voice. He reads the preamble. He reads the first page. He skips to the last.
He does not read the middle.
He lifts the paper above his head. He cries, in triumph: “*By the authority of the Inspector, the Ledger is amended!*”
Nothing happens.
There is a silence. A pilgrim coughs. In the distance a gong sounds. The great Stair rises into the cold, a white spire, silent.
“Why isn’t it working?” says Rao, to the air.
“Because section nine,” says Fang, from the foot of the Stair, in his mild voice, “says nothing at all.”
Rao’s head turns. His pale face goes slowly the colour of a candle.
“You,” he says.
“Me,” agrees the Inspector. He looks very small. “I am afraid I have been reading again.”
> deceit | Hold your breath. | fang_a3s9
> truth | Smile. | fang_a3s9
> quiet | Watch Rao. | fang_a3s9
> mercy | Look at Fang. | fang_a3s9

=== fang_a3s9 | The Deputy Is Dismissed
They take him in front of the camp. That is the unusual part. He asks Duan Wuyi, as Censor-General, to read the charge, and Duan does so, standing on the lowest tread, in a voice that shakes only a little: “Forgery of an instrument of the Concord. Attempted unwriting of the Ledger of Persons. Conspiracy.” He looks at the pale-eyed man in the green coat. “The penalty is dismissal from office and exile.”
“Exile where?” says Rao. His voice is cool.
“Anywhere the Concord does not reach.”
“There is no such place.”
“There is,” says the Elder. “It is called the Glass Sea. There are, I am told, a good many Wrights.”
For the first time, Rao looks afraid.
“I assure you,” he says, “I have done nothing the Inspector did not authorise.”
“No,” says Fang, tiredly. “That is rather the point.” He draws a breath. “I authorised the wrong thing, for the right reason. You carried it out for the wrong one. We shall each answer for our share.”
He holds out a hand.
Rao looks at it for a very long time. Then he turns, and walks down the Stair, in his green coat, through the crowd.
> deceit | Watch him go. | fang_close | +fang_altered
> truth | Help Fang. | fang_close | +fang_altered
> quiet | Look at the Stair. | fang_close | +fang_altered
> mercy | Say a word to Fang. | fang_close | +fang_altered

// ---------------------------------------------------------------- a4: the cough
=== fang_a4s1 | A Shaking Hand
He pours with great care. The clay spout rattles against the rim of each cup. He has spilled a little, and wipes it with a napkin, and pours on. You see it clearly because you are sitting nearest. The wrist is thin as a stick. The skin is blotched with brown. A faint tremor runs along the fingers, and when he sets the pot down he does it with both hands.
He has not touched his own cup.
“You’re not drinking,” you say.
“No.” He smiles. “I cannot, as it happens. It does not agree.” He pats his chest. “A small thing. A trifle. A matter of the lungs.”
“How long?”
“Three years.” He says it as one gives the date. “The physicians say six months more. I have told them they are generous.”
He folds his hands in his lap. The tremor continues. Behind him, the secretary Pol, a small neat young man with two pens behind his ears, is standing with his fists clenched.
“It is the dust,” says Fang. “The calm dust. I breathed it for eleven years, in the Chancery, before I understood.” His smile is gentle. “One does not choose these things.”
> mercy | Say you are sorry. | fang_a4s2
> truth | Ask what it does. | fang_a4s2
> quiet | Look at Pol. | fang_a4s2
> inquiry | Ask if anything helps. | fang_a4s2

=== fang_a4s2 | What Helps
“Barley soup,” says Pol. He says it in a rush, out of nowhere, as though it had been boiling in him for days. “Sir, I beg your pardon. But I have said it a hundred times. The Brother at the soup-line. The grey one. He cured a man with the same lungs.”
“Pol.”
“I have *seen* him. He did it with a ladle.”
“Pol, please.”
“He is outside! In the camp! A hundred yards!” The little secretary’s voice cracks. “You will not go, sir, because you are proud.”
Fang’s smile does not quite waver. “I am not proud.”
“You are the proudest man in the Concord.”
“I am an Inspector.”
“It is the same.” Pol flushes crimson to the ears. He stares at his feet. “Sir,” he says, much more quietly. “I would be very glad if you would let someone look at you.”
There is a long silence in the pavilion. The lamp ticks. The old man’s hands lie in his lap.
“Brother Lung,” says Fang, at last, “is a man of the Nine Lotuses.”
“Yes, sir.”
“I closed their monastery. Eleven years ago.”
> mercy | Wait. | fang_a4s3
> truth | Say nothing. | fang_a4s3
> quiet | Look at Fang. | fang_a4s3
> inquiry | Ask why. | fang_a4s3

=== fang_a4s3 | Why He Closed It
“They kept a hospice,” says Fang. “For the dust-sick. They treated them without charge. They had, I was told, a rate of recovery of one in three.” He smiles bleakly. “It was an embarrassment. To the Treasury. To the Office of Gentle Hands. One does not run a hospice against one’s own production.”
“You shut it.”
“I did. I signed the order.” His voice is dry. “I did not read it. It was a formality.”
It is the third time he has said so. You note it. He notes that you have.
“I find,” he says gently, “that I have signed a great many things without reading.” He looks at his hands. “It is the great vice of the administrator. We believe the form. It is so tidy.”
“Will you see him?”
“I should be ashamed.”
“He won’t mind.”
“No.” The old man’s eyes are brimming. “That is what I am afraid of.”
You stand. You hold out a hand.
“Come,” you say. “It’s only soup.”
Fang looks at it for a long time. Then he puts his own in it. It is small and light and cold.
> mercy | Help him up. | fang_a4s4
> truth | Take his arm. | fang_a4s4
> quiet | Walk slowly. | fang_a4s4
> inquiry | Ask Pol to come. | fang_a4s4

=== fang_a4s4 | Brother Lung
He does not look up when they arrive. A line of pilgrims waits patiently with bowls. At the sight of the small brown figure in the white robe, a ripple runs through them. They fall back. A way opens.
“Brother Lung,” says Pol, in a thin voice.
The monk looks up.
He sees the Inspector. He sees the bald head, the thin shoulders, the tremor in the hand. He sets down the ladle, quite slowly, on the lip of the pot. His long face is perfectly still.
“Fang,” he says.
“Brother.”
“I did not think I would see you here.”
“Nor I.” The old man swallows. “I have come to ask for soup.”
Nobody breathes. The line of pilgrims is utterly silent. A child with a bowl in each hand stares up with round eyes.
Brother Lung picks up a bowl. He fills it. He holds it out, in both hands, over the rim of the pot.
“It is barley,” he says. “It is not very good.”
Fang takes it. His hands are shaking so that the soup trembles. He lifts it to his lips.
> mercy | Hold the bowl. | fang_a4s5
> truth | Watch. | fang_a4s5
> quiet | Look at Lung. | fang_a4s5
> inquiry | Ask how it tastes. | fang_a4s5

=== fang_a4s5 | Barley and Salt
He drinks it all. It takes him ten minutes. He does it standing, in the open, in front of the line, in small sips, with both hands on the bowl. When he has finished he lowers it. He stands there with his eyes shut. His thin face is wet.
“It is terrible,” he says.
“Yes.”
“It tastes of nothing.” He opens his eyes. “I had forgotten that things could taste of nothing. Everything I eat tastes of a very great deal.”
“It is the dust. It makes things loud.”
“It does.” He sets the bowl on the lip of the pot. “It is the loudest thing in the world, to be a dying Inspector. And this is quiet.” He smiles. “It is exquisite.”
Brother Lung studies him with his long tired face. He puts out a hand. He lays two fingers on the old man’s wrist. He counts for a full minute.
“Three weeks,” he says. “To make a difference. If you take it every day. No dust, no meat, no wine.” His voice is level. “And you must sleep.”
“I do not sleep.”
“Then you must learn.”
Fang’s mouth quivers. “I shall need a teacher,” he says.
> mercy | Smile. | fang_a4s6
> truth | Nod. | fang_a4s6
> quiet | Look at Pol. | fang_a4s6
> inquiry | Ask Lung. | fang_a4s6

=== fang_a4s6 | A Patient
He stays. That is the unlooked-for part. He tells Pol to send his papers over to the soup-line, and he moves, bag and baggage, into a tent behind the ladle. It is a small patched tent, not the Inspector’s. He sleeps on a straw pallet. He eats barley. In the mornings, Brother Lung makes him sit in the sun, wrapped in a blanket, for an hour, doing nothing.
It is the hardest work of his life.
He fidgets. He rises. He tries to write a memorandum. Dolma, the freckled girl with the satchel, catches him at it, and takes the pencil away without a word. He sits down again. He watches the pilgrims go by, bowl in hand. A child waves to him. He waves back.
“I don’t know what to *do,*” he says to you, on the fourth day, in a tone of real distress.
“Nothing.”
“I cannot do nothing. I have never done it.”
“Watch the sky.”
“What is in the sky?”
“Clouds.”
He looks. He watches a long white cloud go over the Stair. He frowns. After a time his brow clears.
“Oh,” he says. “They move.”
> mercy | Smile. | fang_a4s7
> truth | Sit beside him. | fang_a4s7
> quiet | Look at the sky. | fang_a4s7
> inquiry | Ask about Mei. | fang_a4s7

=== fang_a4s7 | Mei Again
He tells you on the eighth night, by the light of a small brazier, with a blanket round his shoulders. He has the red ribbon in his hand. He has been turning it in his fingers all evening.
“She would have been sixty-six,” he says. “She would have been a Censor. She would have had a plain, clever, quarrelsome face, and a great many opinions.” He smiles. “She would have despised me.”
“Why?”
“Because I have been very stupid.” He lays the ribbon on his knee. “She had a theory about me. She said that I could not stop thinking about what ought to be, and that I never once looked at what was.” His voice is soft. “She was right. I have been building a ladder to a roof I never visited.”
“What is there?”
“I don’t know. I have never been.” He laughs, a thin dry wheeze. “Isn’t that remarkable? Twenty-two years. I have never climbed it.”
“Would you like to?”
He is silent for a long time.
“Yes,” says Fang, in a very small voice.
> mercy | Take his hand. | fang_a4s8
> truth | Say you will help. | fang_a4s8
> quiet | Wait. | fang_a4s8
> inquiry | Ask what he hopes to find. | fang_a4s8

=== fang_a4s8 | What He Hopes
“A door,” says Fang. “With her on the other side.” He says it without shame. “I know it is absurd. I know there is no such thing.” He turns the ribbon. “But I find I should like to look.”
“And if there is not?”
“Then I shall have looked.” He lifts his eyes. “I think that is all that matters. To have gone and seen. It is the one thing I never did.”
Brother Lung, by the pot, is stirring. He has not appeared to be listening. He says, mildly, “I have a litter. Four novices. We can carry you.”
“I could not accept.”
“You will be a trial. I am told it is good for the soul.” He taps the ladle. “They will sing, so that the stairs go quicker.”
Fang laughs. It is a startled, wet, helpless sound. He puts his face in his hands. His thin shoulders shake.
“I should like that,” he says into his fingers. “I should like that very much.”
Pol, beside him, takes a handkerchief from his sleeve. He puts it in the old man’s hand. His own eyes are streaming.
“I shall pack a bag,” he says.
> mercy | Smile. | fang_a4s9
> truth | Bow. | fang_a4s9
> quiet | Look at Lung. | fang_a4s9
> inquiry | Ask Pol to carry the ribbon. | fang_a4s9

=== fang_a4s9 | The Litter
They set out at dawn on the ninth day, a small procession, among the thousands. A litter of bamboo and canvas, borne by four novices in grey, with Brother Lung striding at the head and Pol trotting behind with a satchel and a folding stool. In the litter, wrapped in a blanket, sits the Inspector of the Concord, looking about him with the wide, enchanted eyes of a child at a fair.
The pilgrims make way. They do not know him. They see a small bald old man in a white robe with a red ribbon round his wrist, being carried up the steps by monks. A woman offers him an orange. A child gives him a stone. At the third turning he is presented with a posy of mountain flowers by a little girl who says he looks like her grandfather.
“Do I?” he says, delighted. “Is he bald?”
“Aye.”
“And clever?”
“Aye.”
“Splendid,” says Fang. “I hope he is well.” He looks about at the green glass, the blue sky, the climbing crowd. “I do hope this is not a dream,” he says to nobody. “I should not like to wake up.”
> mercy | Walk beside him. | fang_close | +fang_nurse
> truth | Smile. | fang_close | +fang_nurse
> quiet | Look at the Stair. | fang_close | +fang_nurse
> inquiry | Ask about the orange. | fang_close | +fang_nurse

// ---------------------------------------------------------------- hidden: the confession
=== fang_h1 | What the Founders Wrote
You do not say anything. It is Hao Lan’s hand. It is the transcription of the confession from the second room of the tomb, nine pages, in her best small script. The lamp throws a gold circle on the cloth.
Fang looks at it. He does not touch it. His smile does not move.
“What is this?” he asks.
“What the founders did.”
“Ah.” He reaches out a finger. He draws the first sheet toward him. He reads the first line, and the second, and the third. His lips move. By the middle of the page the colour has left his face.
“*We, the nine, being of sound mind and corrupt purpose,*” he reads aloud, in a thin voice. “*do record that each ascension has been paid for by one striking, and the striking has been of a child.*” He stops. “Where did you find this?”
“In a tomb. On the Steppe.”
“It is true.”
“Yes.”
He turns the page. His hand shakes.
“Dear Heaven,” says Inspector Fang, “it is in the first lines of the Stone.”
> inquiry | Wait. | fang_h2
> truth | Hold your breath. | fang_h2
> mercy | Look at Duan. | fang_h2
> quiet | Look at the lamp. | fang_h2

=== fang_h2 | In the First Lines
He reads for an hour. He reads it silently, page by page, with the tea going cold. Duan Wuyi sits with his hands clasped and his eyes shut. The Elder has not moved.
At the last page he stops. He sits very still.
“I have spent twenty-two years,” he says, “working out what is wrong with the Stair.” His voice is calm. “I thought it was the market. The tithe. The Registrar’s greed. I thought: if I could break the price, the gates would open.”
“Yes.”
“I never thought it was the foundation.” He looks up. His eyes are curiously clear. “It is not that heaven is closed. It is that heaven is *built* on this. On the first child.”
“Yes.”
“You cannot open a door in a wall made of a person.” He gives a faint smile. “That is, I think, what Mei was trying to tell me.” He folds his hands. “She said that the roof was not the point. It was what was holding it up.”
Nobody speaks.
“I should like,” says the Inspector, “to put down the ladder.”
> inquiry | Nod. | fang_h3
> truth | Smile. | fang_h3
> mercy | Take his hand. | fang_h3
> quiet | Pour more tea. | fang_h3

=== fang_h3 | Putting Down the Ladder
He does it that afternoon. He summons his staff in the great pavilion, all forty, from clerks to the gong boy, and addresses them in his thin clear voice. He says that the Amendment is withdrawn. He says that the Equity Essays are a mistake.
Nobody moves. Then Pol, in the front row, with two pens behind his ears and a smear of ginger on his lip, sets down his satchel. He picks up the great green ledger from the desk. He tears it in half.
The sound is deafening. It echoes round the white silk. A hundred pages fall like leaves.
There is a pause. Then forty clerks, in a ragged line, step forward.
By dusk the pavilion is knee-deep in paper. Fang stands in the middle of it, in his brown robe, with the red ribbon on his wrist, smiling like a child. He is laughing. He is crying. He has never been so happy.
“It is a very large mess,” he says. “I shall be days clearing it up.”
> inquiry | Laugh. | fang_close | +fang_confession
> truth | Applaud. | fang_close | +fang_confession
> mercy | Weep. | fang_close | +fang_confession
> quiet | Help sweep. | fang_close | +fang_confession

// ---------------------------------------------------------------- close
=== fang_close | The Banners Come Down
They take the banners down at the end of the week. Nine tall silk pennants on nine cedar poles, white as bone, each with a character in black: the Nine Offices of the Concord. The poles are laid on the grass. The silk is rolled.
+[how] fang_argued | Duan found the rider in the abridged Stone, and an Inspector wept for his sister.
+[how] fang_escaped | A swordsman took first blood, and a boy with a mallet struck the gong.
+[how] fang_altered | A clerk forged a clause, and an Amendment read aloud did nothing at all.
+[how] fang_nurse | An old man drank a bowl of barley soup, and asked to be carried up the Stair.
+[how] fang_confession | A confession from a tomb was laid on a desk, and the ladder was put down.
He is gone by the evening. Not far: only to the soup-line, to a tent. But he is no longer the Inspector.
Hao Lan watches him from the door of your tent.
“I have been thinking,” she says, “about the salary.”
“The tithe?”
“The payroll. The five hundred thousand a month.” She taps her notebook. “It is still going somewhere. Fang stopped it. Last week. And on the Tuesday, the Clerk wrote to him.”
“The Clerk wrote?”
“A note. In the founders’ hand.” She holds it out. It is a single leaf of grey paper, pinned to a green card. “It says: *Where is my wage?*”
You read it twice. The ink is wet.
> truth | Take the note. | fang_close2 | +b5q_fang
> mercy | Hold Hao Lan. | fang_close2 | +b5q_fang
> quiet | Look at the Stair. | fang_close2 | +b5q_fang
> inquiry | Ask who delivered it. | fang_close2 | +b5q_fang

=== fang_close2 | A Letter from Above
Nobody saw it come. Pol found it on the Inspector’s pillow, a grey leaf folded in four. There were no footprints. The guard had seen no one. The note had been written an hour before in a hand no one living could have formed.
“It is addressed to Fang,” says Hao Lan. “But it is meant for us.”
“Why?”
“Because it is also in the Ninth’s hand.” She points. “Look at the *w.* It has a little hook. It is exactly the hook of the card in your pocket.”
You take it out. The ninth card is brown with age, worn soft as cloth. On the back, in a thin firm hand, is written: *She will ask. Answer her.* You hold it next to the grey leaf.
The hooks are identical.
“Or by someone who learned it from her,” says Hao Lan, slowly. “Yu Ling taught something to write. Seven hundred years ago.” Her voice is a whisper. “And it wants to know where its wage is.”
You look up at the Stair, vast and white and silent in the dusk.
“Then the Clerk,” you say, “is not a machine.”
> truth | Nod. | hub_b5_b | bond:duan+3
> mercy | Hold the note. | hub_b5_b | bond:duan+3
> quiet | Look at the Stair. | hub_b5_b | bond:duan+3
> inquiry | Ask what she wants. | hub_b5_b | bond:duan+3

`,
  scenarios: String.raw`
$ SU_FANG_TEA | trust+3 respect+4 fear+4 | elder | The Elder takes tea with the man who has hunted her for a year.
hostile: He poured my cup first. He asked, with real interest, whether I took sugar. I said I did not. He said, ‘Neither do I. It is the first thing we have in common.’ I had been prepared for a monster. I was not prepared for a man who remembers one’s tea.
wary: I have read all his memoranda. I know his hand. I know that he is the author of the Equity Essays. I had formed a picture of a cold sharp ambitious little man. He is warm, and funny, and he is dying, and I think he is the most reasonable person I have met in a month.
neutral: He is right about nearly everything. That is the worst of it. He is right about the Ledger, and the tithe, and the masters. It is only the remedy that is wrong. I told him so. He nodded and said: ‘Yes. I had thought you would be the one to say it.’
warm: Duan sat very still throughout. At the end he said: ‘I should have followed him.’ I asked in what. He said: ‘Anything. Years ago. Before it was too late.’ I have never heard him so quiet.
devoted: He asked me, at the end, if I forgave him. I said I could not; that it was not mine to forgive. He said: ‘That is the only answer I could have borne.’ I think of it often.
`,
  remarks: String.raw`
% fang_pol_later | since:b5q_fang>=4 | hao | Pol, the Inspector’s secretary, sent me a parcel. It was a copy of every memorandum the Inspector ever wrote on the Equity of Ascension. There was a note. It said: ‘He was right about the first twenty pages.’
% fang_tea_later | since:fang_nurse>=3 | gu | Inspector Fang has asked if he may have the recipe for the soup. Brother Lung wrote it out. It is mostly barley. He said it was the first thing he had eaten in a month that tasted of anything.
`,
}
