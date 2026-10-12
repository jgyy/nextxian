import type { Condition, Scene } from "@/engine/types";

/**
 * Where the accounts read the hero’s path. The Elder takes stock five times on the way down the mountain and across the books, and each time she says
 * one thing about who the hero has become: the first and fourth reckonings read their craft, the second and fifth their roots, the third their gender. Each line is
 * one or two sentences, since the reckonings sit under the scene cap with a pace line and a keep line already.
 */
type Group = { field: "dao" | "talent" | "gender"; lines: Record<string, string> };

const ACCOUNTS: Record<string, Group> = {
  reckoning_departure: {
    field: "dao",
    lines: {
      alchemy: "She turns a page to the apothecary’s column and says the river will buy pills long before it buys anything else, and that you have the one trade it cannot do without.",
      forging: "She turns a page to the smiths’ column and says the river will want blades before it wants advice, and that you have the one trade that does not go hungry.",
      talisman: "She turns a page to the scribes’ column and says the river runs on paper, and that a hand which can write a charm will never be asked twice for a surety.",
      formation: "She turns a page to the surveyors’ column and says the river is all gates and banks, and that you will be wanted wherever one of them has to hold.",
      beast: "She turns a page to the carriers’ column and says the river runs on barges and the barges on mules, and that you will be welcome in every stable between here and the sea.",
      sword: "She turns a page to the guards’ column and says the river pays for a sword by the day and for a good one by the year, and that you should not sell yourself by the day.",
      healing: "She turns a page to the physicians’ column and says every barge carries one fever and no doctor, and that you will never want for a berth or a debtor.",
      fate: "She turns a page to the diviners’ column and says the river will pay for a day to sail and never for the reason, and that you should charge for both.",
      none: "She turns a page to the labourers’ column and says an open hand is the one thing the river never turns away, and that you will be asked to carry before you are asked to choose.",
    },
  },
  reckoning_coast: {
    field: "talent",
    lines: {
      wood: "She notes that salt does not love green things, and that a wood root on the coast will have to be fed fresh water by hand. She says she has seen it done, and it is worth the water.",
      fire: "She notes that damp does not love fire, and that a fire root on the coast will burn the cooler for it. She says the sea makes a good enemy for a bright temper.",
      earth: "She notes that sand is earth that has given up, and that an earth root on the coast will find the ground thinner than it likes. She says to take your own stone.",
      metal: "She notes that salt eats metal faster than any enemy, and that a metal root on the coast will ring dully by the second week. She says to oil what you can.",
      water: "She notes that the sea is the oldest water there is, and that a water root on the coast will hear it from a day away. She says to learn to close your ears at night.",
      mixed: "She notes that the coast has a little of every element and none of them in strength, and that a mixed root will find it the one place it is not outnumbered.",
      heaven: "She notes that heaven’s mark shows brightest over open water, and that you will be seen from further than you think. She says to keep your hood up.",
      late: "She notes that the coast is a patient place, and that a late root is the sort that takes a coast’s tides in its stride. She says the sea has never hurried anyone.",
    },
  },
  reckoning_grass: {
    field: "gender",
    lines: {
      woman: "She adds that on the grass the khans’ wives hold the keys and the stores, and that a woman who speaks to them first is heard by the men a week later. She says to learn the order.",
      man: "She adds that on the grass a man is asked to show his horse before his name, and a challenge before either. She says to say no to the challenge, once, early, and to mean it.",
      unspoken: "She adds that the clans have a word for those who are neither, and that it means someone who walks between the tents carrying messages. She says it is a trusted office. She says to let them give it you.",
    },
  },
  reckoning_glass: {
    field: "dao",
    lines: {
      alchemy: "She adds a line about the Sea: the glass gives off a heat that sours a pill in a day. She says a pill-maker will be the most hated and most sought person on the Stair.",
      forging: "She adds a line about the Sea: the glass has an edge a smith will envy and cannot work. She says to bring a hammer and not to be surprised that it rings back.",
      talisman: "She adds a line about the Sea: the glare bleaches ink in a morning. She says a writer who has learned to write in the dark will have an easy crossing.",
      formation: "She adds a line about the Sea: the glass shifts under its own weight, and no ring stays laid for a week. She says a keeper of arrays will earn a skiff’s fare by the hour.",
      beast: "She adds a line about the Sea: no animal will cross the glass willingly. She says a beast-keeper will find that the only creature that follows is the one they have not yet met.",
      sword: "She adds a line about the Sea: the glass throws a sword’s reflection back at its owner. She says a swordsman will learn to cut at the shadow and not the blade.",
      healing: "She adds a line about the Sea: the glare burns the eyes in a day, and the skiff-wrights have no physician. She says a healer will be paid in whatever the Sea has left.",
      fate: "She adds a line about the Sea: the skiff-wrights consult a bell and not a diviner. She says a diviner will be asked at the last moment and blamed at the next.",
      none: "She adds a line about the Sea: the glass amplifies whatever a person is, and an open hand has the least to amplify. She says that is a mercy, and to take it as one.",
    },
  },
  reckoning_home: {
    field: "talent",
    lines: {
      wood: "She says the mountain is green again at the foot, and that a wood root will find the last climb the gentlest part of the whole road. She says she envies you the spring.",
      fire: "She says the last climb is cold, and that a fire root will feel it as an insult. She says to keep the temper for the summit, where it will be wanted.",
      earth: "She says the last climb is long, and that an earth root will not mind. She says the mountain has been waiting for someone who is not afraid of being heavy.",
      metal: "She says the last climb rings in the cold, and that a metal root will hear every step as a bell. She says to walk quietly, and then not to.",
      water: "She says the last climb is wet at the foot, and that a water root will find the streams on the way up are going the same direction. She says to let them.",
      mixed: "She says the last climb offers a little of every element, and that a mixed root will take each in turn. She says it is the only root that does not mind the weather.",
      heaven: "She says the last climb is watched, and that heaven’s mark will be seen from the top before you reach the middle. She says to walk as though you were expected, since you are.",
      late: "She says the last climb is steep, and that a late root arrives at the summit later than the rest and more completely. She says she has seen it before, and was always glad.",
    },
  },
};

const FIELD_VALUES: Record<Group["field"], string[]> = {
  dao: ["alchemy", "forging", "talisman", "formation", "beast", "sword", "healing", "fate", "none"],
  talent: ["wood", "fire", "earth", "metal", "water", "mixed", "heaven", "late"],
  gender: ["woman", "man", "unspoken"],
};

/** Adds to each reckoning one line that reads the hero’s craft, roots or gender, as the Elder takes stock. */
export function accountsReadThePath<S extends Scene>(scenes: S[]): S[] {
  return scenes.map((scene) => {
    const group = ACCOUNTS[scene.id];
    if (!group) return scene;
    const extras = FIELD_VALUES[group.field].map((value) => ({
      when: [{ kind: "hero", field: group.field, is: [value] } as Condition],
      paragraphs: [group.lines[value]],
      group: "path",
    }));
    return { ...scene, extras: [...(scene.extras ?? []), ...extras] };
  });
}
