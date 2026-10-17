import { PER_REACH, ROLES, outFlag, type Course } from "@/engine/world";
import { parseRemarks } from "@/engine/markup";
import type { Choice, ChoiceTone, Condition, Effect, NpcScenario, Scene } from "@/engine/types";
import { fill } from "../roads/build";
import { pick, TONE_EFFECTS, type Extra } from "../roads2/build";
import { AFFAIRS } from "./index";
import { REACH_SPECS } from "./reaches";

/**
 * The world in the main line. Before the Last Sealing the world comes up the mountain road in ten delegations, one for each reach, and each brings
 * what the hero left it: the outcome of every one of its four affairs, whether the hero had a hand in it or the world got on without them. A reach that
 * the hero listened to in at least two of its affairs sends help; one they did not sends its regrets. Then the Last Sealing asks who is listening,
 * and the answer can be a great many small voices, or the one hand that turned a great many things.
 */

export const GATHER_HUB = "hub_world_gather";
export const GATHER_END = "world_gather_end";
export const GATHERED = "wo_gathered";
export const metFlag = (reach: number) => `wo_met_${reach}`;
export const giftFlag = (reach: number) => `wo_gift_${reach}`;

const NAMES = ["the Terraces", "the Pilgrim Stairs", "the Quarry Country", "the Neighbour Sects", "the River Provinces", "the Salt Coast", "the Ash Steppe", "the Glass Sea", "the Nine Tiers", "the Foot of the Sect"];
export const gatherNames = NAMES;

const flag = (f: string, is?: boolean): Condition => ({ kind: "flag", flag: f, ...(is === false ? { is: false } : {}) });
const answered = (reach: number): Condition => ({ kind: "world", measure: "voices", reach, min: 2 });
const unanswered = (reach: number): Condition => ({ kind: "world", measure: "voices", reach, max: 1 });

const A_LABELS: Record<ChoiceTone, string[]> = {
  inquiry: ["Ask what the year has been like in {name}.", "Ask the delegation of {name} what they have brought, and why.", "Ask who is missing from the lamps of {name}."],
  mercy: ["Thank them for the long road.", "Say that you did not expect anyone from {name}, and are glad.", "Find the oldest of them a place to sit."],
  truth: ["Tell them plainly how things stand on the mountain.", "Say that the Sealing may fail, and that they are welcome to leave.", "Tell them what you remember of {name}."],
  quiet: ["Stand with them awhile, and say nothing.", "Hold a lamp with them, and watch the road.", "Let the lamps of {name} burn down a little."],
  force: [],
  deceit: [],
};
const A_TONES: ChoiceTone[] = ["inquiry", "mercy", "truth", "quiet"];

const B_LABELS: Record<string, string[]> = {
  thank: ["Thank them, and tell them to go home safe.", "Thank the delegation of {name}, and send them down to the tea stall for something hot.", "Thank them, and mean it."],
  ask: ["Ask what {name} will do when this is over.", "Ask what {name} would have you remember.", "Ask them to tell you the rest, at their own pace."],
  promise: ["Promise {name} that you will come back to them.", "Tell them what you will do for {name} if you come out of this.", "Say that you have not forgotten {name}, and will not."],
  part: ["Part from them quietly, as you would from friends.", "Nod to the delegation of {name}, and leave them to their lamps.", "Leave the lamps of {name} to burn, and go."],
  accept: ["Accept what {name} has brought, and let it be known you did.", "Take the lamp they hold out, and carry it.", "Let the delegation of {name} give you what they came to give."],
};

/** The scenes of the Gathering: a hub, two scenes for each reach, and the end. */
export function gatherScenes(): Scene[] {
  const scenes: Scene[] = [];
  const met = (k: number): Effect => ({ kind: "setFlag", flag: metFlag(k) });

  const roleExtras = (lines: Record<string, string>): Extra[] =>
    (["unseen", "witness", "hand", "many", "hinge"] as const).map((role) => ({
      when:
        role === "unseen"
          ? [{ kind: "world", measure: "voices", max: 0 }]
          : role === "witness"
            ? [{ kind: "world", measure: "voices", min: 1 }, { kind: "world", measure: "weight", max: 11 }]
            : role === "hand"
              ? [{ kind: "world", measure: "weight", min: 12 }, { kind: "world", measure: "hinges", max: 4 }, { kind: "world", measure: "voices", max: 15 }]
              : role === "many"
                ? [{ kind: "world", measure: "voices", min: 16 }, { kind: "world", measure: "hinges", max: 4 }]
                : [{ kind: "world", measure: "hinges", min: 5 }],
      paragraphs: [lines[role]],
      group: "role",
    })) as Extra[];

  scenes.push({
    id: GATHER_HUB,
    title: "The World Comes Up the Road",
    paragraphs: [
      "Down the mountain road, in the dusk, lights are coming. At first you take them for pilgrims’ lamps, then for the sect’s own; but there are too many, and they come from too many directions, and they do not keep to the road. It is the world. It has heard the Sealing is to be tried again, and has come, as the world comes to anything, a few at a time, from everywhere, carrying what it has.",
      "Ten delegations wait where the road bends, each with its own lamp. Gu’s mother has put a kettle on for all of them.",
    ],
    extras: roleExtras({
      unseen: "Nobody in the crowd knows your name. They have come for the mountain, and look at you as at anyone on the road.",
      witness: "A few turn to you and nod, as at someone who was there, and looked, and said so.",
      hand: "Hands go up along the line as you pass, the way hands go up for someone who has done them a turn.",
      many: "They know you in the crowd by a hundred small things: a loaf, a rope, a piece of chalk. They say your name without a title, as one says a neighbour’s.",
      hinge: "The line parts for you without anyone being asked. Somewhere a bell begins to ring, and stops, embarrassed. They know you as the one on whom things turn.",
    }),
    choices: [
      ...REACH_SPECS.map((_, i): Choice => ({
        id: `greet_${i + 1}`,
        label: `Go to the lamps of ${NAMES[i]}.`,
        tone: A_TONES[i % 4],
        next: `world_gather_${i + 1}a`,
        requires: [flag(metFlag(i + 1), false)],
        lockedHint: "You have already been to their lamps.",
      })),
      { id: "face_world", label: "Go up to the mountain, with the whole of the gathering behind you.", tone: "quiet", next: GATHER_END },
    ],
  });

  REACH_SPECS.forEach((reach, i) => {
    const k = i + 1;
    const name = NAMES[i];
    const here = AFFAIRS.slice(i * PER_REACH, (i + 1) * PER_REACH);
    const outs = (spec: (typeof AFFAIRS)[number], c: Course) => outFlag(k, spec.id, c);
    const affairExtras = (specs: typeof here): Extra[] =>
      specs.flatMap((spec): Extra[] => [
        ...(["mended", "ground", "broke"] as const).map((c): Extra => ({ when: [flag(outs(spec, c))], paragraphs: [spec.after[c]], group: spec.id })),
        {
          when: (["mended", "ground", "broke"] as const).map((c) => flag(outs(spec, c), false)),
          paragraphs: [`No hand of yours was in it. ${spec.after[spec.fate]}`],
          group: spec.id,
        },
      ]);

    scenes.push({
      id: `world_gather_${k}a`,
      title: `The Lamps of ${name.replace(/^the /, "The ")}`,
      paragraphs: [`Where the road bends the lamps of ${name} have been set down in a ring, and the people of ${name} stand round them with the patience of those who have come a long way.`],
      extras: [
        { when: [answered(k)], paragraphs: [reach.gathering.answered], group: "reach" },
        { when: [unanswered(k)], paragraphs: [reach.gathering.unanswered], group: "reach" },
        ...affairExtras(here.slice(0, 2)),
      ],
      choices: A_TONES.map((tone, c): Choice => ({ id: tone, label: fill(pick(A_LABELS[tone], i + c), { name }), tone, next: `world_gather_${k}b`, effects: TONE_EFFECTS[tone] })),
    });

    scenes.push({
      id: `world_gather_${k}b`,
      title: `The Lamps of ${name.replace(/^the /, "The ")}: What They Brought`,
      paragraphs: [`The rest of what ${name} has to say is said more quietly, to you alone, over the rim of a lamp.`],
      extras: affairExtras(here.slice(2)),
      choices: [
        { id: "thank", label: fill(pick(B_LABELS.thank, i), { name }), tone: "mercy", next: GATHER_HUB, effects: [met(k), ...TONE_EFFECTS.mercy] },
        { id: "ask", label: fill(pick(B_LABELS.ask, i), { name }), tone: "inquiry", next: GATHER_HUB, effects: [met(k), ...TONE_EFFECTS.inquiry] },
        { id: "promise", label: fill(pick(B_LABELS.promise, i), { name }), tone: "truth", next: GATHER_HUB, effects: [met(k), ...TONE_EFFECTS.truth] },
        { id: "part", label: fill(pick(B_LABELS.part, i), { name }), tone: "quiet", next: GATHER_HUB, effects: [met(k), ...TONE_EFFECTS.quiet] },
        // A reach the hero listened to in at least two of its affairs sends help, and only that reach: the choice is hidden from a hero it would be a lie to offer it.
        {
          id: "accept",
          label: fill(pick(B_LABELS.accept, i), { name }),
          tone: "mercy",
          next: GATHER_HUB,
          requires: [answered(k)],
          hideLocked: true,
          effects: [met(k), { kind: "setFlag", flag: giftFlag(k) }, { kind: "addStat", stat: "qi", amount: 8 }, { kind: "addStat", stat: "karma", amount: 2 }, { kind: "addStat", stat: "insight", amount: 2 }],
        },
      ],
    });
  });

  scenes.push({
    id: GATHER_END,
    title: "The Gathering Stands",
    paragraphs: ["You go up through the gathering at the mountain’s foot, and it opens before you and closes behind. The lamps of the ten delegations make a long uneven river on the dark road. It is not an army. It is something that has not been seen on this mountain before."],
    extras: [
      ...roleExtras({
        unseen: "None of them is yours. You never went to them, and they came anyway, for the mountain, and you walk among them as a stranger at a festival.",
        witness: "A few are yours, in the way a witness is: they were seen, and you saw, and the seeing has stayed. It is not a small thing, and it is not a large one.",
        hand: "A good many are yours, in the way a neighbour is. You put a hand to something in each of their places, and none of them turned on it, and they came up the road anyway.",
        many: "There is hardly a lamp in the ring that you did not once sit beside. You were never the whole weight of any of them. You were the one who sat down, and heard it out, and so there are a thousand of them.",
        hinge: "A dozen of them are yours as a door is the hinge’s. Things turned on you in their places. They look at you with more than thanks: with the wariness of those who know what you can do.",
      }),
      { when: [{ kind: "count", prefix: "wo_gift_", min: 5 }], paragraphs: ["Five delegations or more have brought you their gift. The ledge will not be empty when you reach it."], group: "gift" },
    ],
    choices: [
      { id: "ask_elder", label: "Ask the Elder, at your shoulder, what she makes of the gathering.", tone: "inquiry", next: "hub_b6", npcScenario: "WORLD_GATHERING_ELDER", effects: [{ kind: "setFlag", flag: GATHERED }, ...TONE_EFFECTS.inquiry] },
      { id: "promise_all", label: "Tell them aloud that whatever happens on the ledge, you will not forget that they came.", tone: "truth", next: "hub_b6", effects: [{ kind: "setFlag", flag: GATHERED }, ...TONE_EFFECTS.truth] },
      { id: "thank_all", label: "Bow to the whole of the road, once, and go up.", tone: "mercy", next: "hub_b6", effects: [{ kind: "setFlag", flag: GATHERED }, ...TONE_EFFECTS.mercy] },
      { id: "go_quiet", label: "Say nothing, and let the lamps light you up the stair.", tone: "quiet", next: "hub_b6", effects: [{ kind: "setFlag", flag: GATHERED }, ...TONE_EFFECTS.quiet] },
    ],
  });
  return scenes;
}

/** The Elder’s answer to the Gathering: her lines by trust, and a memory for what the hero has been in the world. */
export const gatherScenario: NpcScenario = {
  id: "WORLD_GATHERING_ELDER",
  summary: "The player asks the Elder what she makes of the world coming up the mountain.",
  delta: { trust: 3, respect: 3, suspicion: -1 },
  lines: {
    hostile: "The world is at the gate. I do not know why, and I am not in the habit of asking the person who brought it. Take it away, or answer for it.",
    wary: "Ten lamps, and a kettle. I am an Elder of the Law, and I have never seen a crowd that did not want something. I shall find out what, and then I shall decide what I think of you.",
    neutral: "It is the world, come to see whether the mountain is worth its trouble. I have kept this sect fifteen years without once looking down the road. I find I should have.",
    warm: "They are all looking up. Fifteen years I have kept my eyes on the abyss, and the whole world has been standing below the wall waiting to be noticed. Thank you for noticing it for me.",
    devoted: "I did not know there were so many. I did not know anyone would come. I signed fourteen names once, and have spent my life behind them; I would like, now, to learn the names of the people in front.",
  },
  memory: [
    { when: [{ kind: "world", measure: "hinges", min: 5 }], line: "They have come for the one on whom things turn, and I am not sure they know that is you. I do. I have been watching the doors of this country move for two years, and each time you were standing on the hinge. I should be afraid of you. I am, a little. It is wonderful." },
    { when: [{ kind: "world", measure: "voices", min: 16 }, { kind: "world", measure: "hinges", max: 4 }], line: "You were never the whole weight of any of it. That is what I see, looking down the road. It is a thousand small kindnesses, none of which would make a song, and the mountain is full of them. I had not known that was how the world is held up." },
    { when: [{ kind: "world", measure: "weight", min: 12 }], line: "You put your hand to a good many things, and none of them turned on you, and here they all are. I do not think you know what it is to be the sort of person that happens to. I am trying to learn." },
    { when: [{ kind: "world", measure: "voices", min: 1 }], line: "You went where things were happening, and looked, and said so. It is not much. I stayed in my Hall for fifteen years and did less. Go on. They are waiting for you to say something." },
  ],
};

/** The turn choices the world adds to a scene of the story: the hub of the Last Sealing gains the way down to the gathering. */
export function worldChoices(scene: Scene): Choice[] {
  if (scene.id !== "hub_b6") return [];
  return [
    {
      id: "world_gather",
      label: "Go down to where the road bends, where lights are coming up the mountain in the dusk.",
      tone: "inquiry",
      next: GATHER_HUB,
      requires: [flag("b6q_abyss"), flag(GATHERED, false)],
      lockedHint: "Not yet. Whatever is coming up the road is coming for the bottom of the abyss, and you have not reached it.",
    },
  ];
}

/** Lines the Elder says on her own, as the hero's part in the world grows. */
export const worldRemarks = String.raw`
% wo_first | world:voices>=1 | elder | You have been somewhere the sect does not go, and come back, and mentioned it. I am keeping a third ledger, for the things I did not know were happening. It is shorter than I feared, and growing.
% wo_four | world:voices>=4 | elder | Four matters in the wider world, now, with your hand or your eye in them. I have begun to read the reports from the districts, which I have not done in twelve years. They are a great deal more interesting than the Registrar’s.
% wo_ten | world:voices>=10 | elder | Ten places. I shall tell you something I have told no one: I used to think the world was what the Law was for. I think now the Law is what the world puts up with. You are the first to give me evidence.
% wo_hinge_one | world:hinges>=1 | elder | Something turned on you. I can tell by how you stand. A hinge is a person who has found out that they are one, and I have never known it to make anyone easier to live with.
% wo_hinges_three | world:hinges>=3 | elder | Three things have turned on you now. I believe it is traditional at this point to be warned. I cannot think of a warning that would not be an insult to your judgment. Mind the door.
% wo_record | world:records>=5 | elder | Five true accounts in the ledgers, with your name under them. The sect will find, in time, that it can no longer lie about the districts. I should like to be there when it does. I may be the one to tell it.
% wo_broke | world:broke>=3 | elder | Three things in the world broke where you stood. I shall not say it was nothing to do with you. I shall say that you were there, and that the ones who are not there never have to find out what it costs.
% wo_mended | world:mended>=8 | elder | Eight things in the wider world are mended that were not, and it is possible to tell the order you did them in by the size of the thanks. I shall not say more. I would hate to make you proud.
% wo_many | world:voices>=16 & world:hinges<=2 | elder | Sixteen places, and no more than two where you were the hinge. You have done it the slow way, and the wide way, and I think it is the way that lasts. Do not let anyone tell you otherwise, including me.
`;

export const parsedWorldRemarks = () => parseRemarks(worldRemarks, "world/remarks");

/** What the Book One endings add about the part the hero has played in the world. Each is one short line, so the endings stay within the cap. */
const EPILOGUE: Record<string, { witness: string; hand: string; many: string; hinge: string }> = {
  ending_sisters: {
    witness: "Down the mountain, a few people who saw you at their doors light a lamp.",
    hand: "In several villages a hand you lent is raised, quietly, when the sisters’ names are said.",
    many: "In a hundred small places, people you sat beside hear the news, and nod, and go on with their day.",
    hinge: "In the places you turned, bells are rung, and some of them are for you.",
  },
  ending_redeemed: {
    witness: "A few who watched you work say you looked at the sect the way you looked at them.",
    hand: "The villages you helped are told, and are glad, and say you owe them nothing.",
    many: "The roads you walked are full of small remembered kindnesses, and the sect, for once, hears of them.",
    hinge: "The Concord asks, in its tact, what a hinge is doing in a sect.",
  },
  ending_exile: {
    witness: "On the long road out, people you once stood beside nod from their doorways.",
    hand: "At several doors on the road a bowl is set out, and nobody says for whom.",
    many: "The long road is lined with lamps you do not remember lighting, and one of them is lit for you.",
    hinge: "The places you turned remember you, and are not sure whether they should be glad.",
  },
  ending_fallen: {
    witness: "The few who saw what you were before the black lotus say they saw it first.",
    hand: "Those you helped come to the gate, and are turned away, and wait outside.",
    many: "A thousand small places remember your hands. The black lotus does not.",
    hinge: "The world turned on you once. Now it does not know which way to turn.",
  },
  ending_sovereign: {
    witness: "Far off, the few who once saw you at their doors are the last to kneel.",
    hand: "The villages you helped send a delegation, to see whether you are still the one who came.",
    many: "A thousand small places send word. They have not forgotten you were kind. They are waiting to see if it lasts.",
    hinge: "A throne is a hinge of a kind. They ask, politely, which way you mean to swing.",
  },
  end_ledger: {
    witness: "Somewhere a few people note that you were there.",
    hand: "Somewhere several hands you once lent are lifted to the mountain.",
    many: "A thousand small lamps burn along the roads, and are not counted in the ledger.",
    hinge: "The ledger is closed. The things you turned go on turning.",
  },
};

export function worldEndings(scenes: Scene[]): Scene[] {
  return scenes.map((scene) => {
    const text = EPILOGUE[scene.id];
    if (!text) return scene;
    const role = (r: keyof typeof text, when: Condition[]): Extra => ({ when, paragraphs: [text[r]], group: "world" });
    return {
      ...scene,
      extras: [
        ...(scene.extras ?? []),
        role("hinge", [{ kind: "world", measure: "hinges", min: 5 }]),
        role("many", [{ kind: "world", measure: "voices", min: 16 }]),
        role("hand", [{ kind: "world", measure: "weight", min: 12 }]),
        role("witness", [{ kind: "world", measure: "voices", min: 1 }]),
      ],
    };
  });
}

void ROLES;
