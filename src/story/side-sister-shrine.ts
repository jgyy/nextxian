import type { Scene } from "@/engine/types";

/**
 * Side Path: The Sister’s Shrine. Opened from the guest-cell door below the archive.
 * A hillside shrine that the disciples built for Mengjiao, because the Law Hall would
 * not let her name be cut into the archive wall. The path rejoins at the sutra door.
 */
export const sisterShrineScenes: Scene[] = [
  {
    id: "shrine_gate",
    title: "Side Path: The Sister’s Shrine",
    paragraphs: [
      "The attendant at the guest-cell door does not want to answer. He keeps glancing at the lamp on the wall as though it might report him. Then he sighs, points past the archive’s ash garden, and says that the path behind the old mulberry terraces leads to a place the Law Hall stopped mapping fifteen years ago. \"Nobody goes there to pray,\" he says. \"They go there because they cannot pray in front of the sect.\"",
      "The path is overgrown. Wild mulberry trees have pushed their roots under the flagstones, and ash from the archive fires has settled on their leaves until every branch looks dusted with grey flour. Halfway down the slope, a low wall of unmortared stones runs along the hillside. There is a gap in it, wide enough for one person, and a faded red ribbon knotted to the stone beside it. The colour has bled so far into the rock that the ribbon looks like a scar.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "shrine_gate_2",
        page: true,
      },
    ],
  },
  {
    id: "shrine_gate_2",
    title: "",
    paragraphs: [
      "Beyond the wall, someone has swept a small square of ground clean. In the middle of it stands a shrine no taller than your waist. It has no tablet and no name carved above it. Three small bowls sit on the stone, and one of them still holds the grey remains of incense.",
    ],
    choices: [
      {
        id: "follow_mulberry_path",
        label: "Follow the path through the mulberries without stopping to look for anyone watching.",
        tone: "quiet",
        next: "shrine_garden",
        effects: [{ kind: "setFlag", flag: "visited_shrine" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "call_out_softly",
        label: "Call out softly and ask whether anyone is there to answer for the shrine.",
        tone: "truth",
        next: "shrine_garden",
        effects: [{ kind: "setFlag", flag: "visited_shrine" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "climb_the_wall",
        label: "Climb the broken wall rather than use the gap, so that nobody can say you came in through the front.",
        tone: "deceit",
        next: "shrine_garden",
        effects: [{ kind: "setFlag", flag: "visited_shrine" }, { kind: "addStat", stat: "qi", amount: 2 }],
      },
      {
        id: "turn_back_to_archive",
        label: "Decide the shrine is not your business, and climb back to the sutra door before the bell.",
        tone: "quiet",
        next: "sutra_door",
      },
    ],
  },
  {
    id: "shrine_garden",
    title: "The Unwritten Name",
    paragraphs: [
      "A woman is kneeling in the mulberry leaves with a bucket of water and a stiff brush. She is past sixty, with a face weathered by years of sun and a wooden hairpin pushed through a bun of grey hair. She does not stop scrubbing when she sees you. \"If you have come to stare at the shrine, you may stand there. If you have come to pray, you may pull weeds. Do not do both.\"",
      "Her name is Shen. She was a laundress in the Law Hall when Su Mengjiao was a disciple there. \"We washed the white silk for the sealing robes,\" she says. \"We were not allowed to look at the names sewn on the sleeves. I looked anyway. I looked at everything in those years, because nobody thought a laundress could read.\" She dips the brush and scrubs a stone that does not need it.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "shrine_garden_2",
        page: true,
      },
    ],
  },
  {
    id: "shrine_garden_2",
    title: "",
    paragraphs: [
      "\"They built this after the sealing,\" she says. \"The disciples who loved her. The Law Hall would not let her name be cut into the archive wall, so we cut it into the hill instead, where the mist can see it and the masters cannot.\" She taps the stone at the foot of the shrine. The letters are so worn that you can read them only with your fingertips: a small, neat, careful hand, carved by someone who was trying not to be heard.",
    ],
    choices: [
      {
        id: "ask_shen_about_her",
        label: "Ask Shen what Mengjiao was like as a girl, before the Law Hall took her name off the wall.",
        tone: "inquiry",
        next: "shrine_offering",
        effects: [{ kind: "setFlag", flag: "heard_shen_story" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "help_with_weeds",
        label: "Kneel beside her and pull the weeds out of the cracks, without asking her any questions.",
        tone: "mercy",
        next: "shrine_offering",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "read_the_carving",
        label: "Trace the worn letters with your fingertips and read them aloud, one stroke at a time.",
        tone: "inquiry",
        next: "shrine_offering",
        effects: [{ kind: "setFlag", flag: "read_shrine_carving" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "leave_shen_to_her_work",
        label: "Thank her with a small bow, leave her to her scrubbing, and go back the way you came.",
        tone: "mercy",
        next: "shrine_return",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
    ],
  },
  {
    id: "shrine_offering",
    title: "The Offering Table",
    paragraphs: [
      "The offering table is a flat slab of grey stone set on two rough posts. On it lie a comb of carved pearwood, a bundle of dry incense sticks tied with thread, a bowl of rainwater, and a small wooden box with its lid carefully closed. The comb is the only thing on the table that has not weathered. Someone has oiled it recently.",
      "Above the table, across the lintel of the shrine, someone has carved a line of text in the same small hand as the stone. It is not a sutra and it is not a name. It reads: The Law does not write the names of those it loses. We write them. Below it, in fainter strokes, a second line has been half chiselled away. You can still make out the words: Mengjiao came home every night, even when the roof was the only place she could go.",
      "The rainwater in the bowl is still and clear. The mist has not climbed this high. Everything here feels as though it has been waiting, patiently, for fifteen years, for someone who would finally know what to do with it.",
    ],
    choices: [
      {
        id: "light_incense",
        label: "Light one of the incense sticks from the ash, set it in the bowl, and say her name without raising your voice.",
        tone: "mercy",
        next: "shrine_vigil",
        effects: [{ kind: "setFlag", flag: "lit_shrine" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "take_the_comb",
        label: "Pick up the carved pearwood comb, which someone has so carefully oiled, and tuck it inside your sleeve.",
        tone: "deceit",
        next: "shrine_return",
        effects: [{ kind: "setFlag", flag: "took_comb" }, { kind: "addStat", stat: "karma", amount: -2 }],
      },
      {
        id: "leave_a_coin",
        label: "Leave a coin beside the bowl and walk away without looking at the closed box.",
        tone: "mercy",
        next: "shrine_return",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "copy_the_carving",
        label: "Copy both lines of the lintel onto the back of your Index card, word for word, including the half-chiselled one.",
        tone: "inquiry",
        next: "shrine_return",
        effects: [{ kind: "setFlag", flag: "copied_shrine_words" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
    ],
  },
  {
    id: "shrine_vigil",
    title: "The Vigil at the Stone",
    paragraphs: [
      "The smoke rises straight up in the still air, as though it has been waiting for permission. Shen does not climb the hill. You hear her brush scraping on the far side of the mulberries, slow and even, and you understand that she has decided to keep her watch from below rather than from beside you.",
      "The light goes amber and then grey. Somewhere beyond the archive a bell strikes the hour, and another answers from the sutra door, and you count the strokes without meaning to. Eight. The number makes you think of the fourteen names on the sealing orders, and then of the fifteenth, and of how the hill was cut to hold the one name the Law did not want written.",
    ],
    choices: [
      {
        id: "continue",
        label: "Continue",
        next: "shrine_vigil_2",
        page: true,
      },
    ],
  },
  {
    id: "shrine_vigil_2",
    title: "",
    paragraphs: [
      "When Shen finally climbs up, she carries a folded square of linen. She does not hand it to you. She sets it on the offering table beside the comb and smooths it flat. Inside are a dozen curls of pearwood shavings, the kind a carver leaves behind when making something small. \"Her first hairpin,\" she says. \"She carved it the year before the sealing, and it came out crooked. I kept the shavings, because I could not bear to throw her mistakes away.\"",
    ],
    choices: [
      {
        id: "ask_shen_to_stay",
        label: "Ask Shen to sit with you until the incense burns down, and listen to what she remembers of the sealing night.",
        tone: "inquiry",
        next: "shrine_return",
        effects: [{ kind: "setFlag", flag: "heard_sealing_from_laundry" }, { kind: "addStat", stat: "insight", amount: 2 }],
      },
      {
        id: "take_a_shaving",
        label: "Ask whether you may keep one of the shavings, and tuck it away carefully when she says yes.",
        tone: "truth",
        next: "shrine_return",
        effects: [{ kind: "setFlag", flag: "took_shaving" }, { kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "thank_shen_and_go",
        label: "Thank her, bow to the stone, and leave the shavings where they are.",
        tone: "mercy",
        next: "shrine_return",
        effects: [{ kind: "addStat", stat: "karma", amount: 2 }],
      },
      {
        id: "pinch_out_the_incense",
        label: "Pinch out the incense before it burns down, so that nobody on the terraces can see the smoke.",
        tone: "deceit",
        next: "shrine_return",
        effects: [{ kind: "addStat", stat: "qi", amount: 1 }, { kind: "addStat", stat: "karma", amount: -1 }],
      },
    ],
  },
  {
    id: "shrine_return",
    title: "The Way Back Up",
    paragraphs: [
      "The climb back is steeper than the way down. The mulberries drip, the ash has turned to paste on the stones, and somewhere above you the bell of the sutra door rings once to mark the hour. Shen has returned to her scrubbing, and she did not look up when you left. You did not expect her to.",
      "What you carry now is not a weapon and not a document. It is the memory of a shrine the Law Hall does not know is still standing, and the knowledge that someone has been keeping a light for Mengjiao on the wrong side of the archive wall. Whatever you decide to do with it, the sutra door will not look the same when you reach it.",
    ],
    choices: [
      {
        id: "keep_shrine_secret",
        label: "Keep the shrine to yourself. Some places are safer when nobody knows they are still standing.",
        tone: "deceit",
        next: "sutra_door",
        effects: [{ kind: "addStat", stat: "karma", amount: 1 }],
      },
      {
        id: "tell_ren_about_shrine",
        label: "Tell Ren Qiao about the shrine at the sutra door, so that a warden knows where the hillside path leads.",
        tone: "truth",
        next: "sutra_door",
        effects: [{ kind: "setFlag", flag: "told_ren_shrine" }, { kind: "addStat", stat: "insight", amount: 1 }],
      },
      {
        id: "hold_the_comb",
        label: "Take the carved comb out of your sleeve, look at it in the mist, and put it back before anyone sees.",
        tone: "quiet",
        next: "sutra_door",
        requires: [{ kind: "flag", flag: "took_comb" }],
        lockedHint: "Requires the comb from the offering table.",
        effects: [{ kind: "addStat", stat: "qi", amount: 1 }],
      },
      {
        id: "walk_on_quietly",
        label: "Walk on up the stone steps without looking back, and let the mist close over the hillside.",
        tone: "quiet",
        next: "sutra_door",
      },
    ],
    interjections: [
      { when: [{ kind: "tone", tone: "quiet", min: 3, within: 4 }], line: "You have walked past things for four answers together: the lamps, the names and the comb. Some things need to be picked up, Wanderer, and you know which ones they are." },
    ],
  },
];
