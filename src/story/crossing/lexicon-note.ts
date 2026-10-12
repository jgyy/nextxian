import type { Craft } from "./lexicon-craft";

/**
 * How the hero’s own Dao shows when it is set beside a keeper’s craft: one line for each of the eight, shown in the scene behind the craft door to
 * a hero whose Dao is another. Slots: kname, trade, dao (the keeper’s craft), place, focus.
 */
export const HERO_DAO_NOTE: Record<Craft, string> = {
  alchemy: "Your pill-maker’s habit of smelling before tasting shows in how you lean over {focus}, and {kname} remarks that the {trade} too has been rescued by a nose.",
  forging: "Your smith’s habit of judging weight by the wrist shows in how you lift things at {focus}, and {kname} remarks that the {trade} too keeps a scale in the arm.",
  talisman: "Your writer’s habit of reading a thing from the last stroke back shows in how you take in {focus}, and {kname} remarks that the {trade} too has been fooled by a first impression.",
  formation: "Your keeper’s habit of looking for the seam shows in how you walk round {focus}, and {kname} remarks that the {trade} too lives or dies by the join.",
  beast: "Your keeper’s habit of standing still until noticed shows in how you wait at {focus}, and {kname} remarks that the {trade} too has been taught patience by something that bites.",
  sword: "Your swordsman’s habit of measuring distance shows in how you stand at {focus}, and {kname} remarks that the {trade} too measures, only closer in.",
  healing: "Your healer’s habit of looking at the person before the work shows in how you glance at {kname} first, and {kname} remarks that the {trade} too has been saved by asking how someone slept.",
  fate: "Your diviner’s habit of asking what a thing is for shows in how you look at {focus}, and {kname} remarks that the {trade} too has been saved by a better question.",
};
