import type { Effect, Scene } from "@/engine/types";

/** The companion a flag changes the bond of, and by how much. Applied wherever a choice sets the flag. */
export const BOND_RULES: Record<string, [npc: string, amount: number]> = {
  // Gu Hanzhen
  spared_gu: ["gu", 6], struck_gu: ["gu", -15], interrogated_gu: ["gu", -4], brought_gu: ["gu", 8], promised_gu: ["gu", 8],
  heard_about_mengjiao: ["gu", 3], warned_gu: ["gu", 2], greeted_gu: ["gu", 4], knelt_with_gu: ["gu", 8], testified_for_gu: ["gu", 8],
  silent_at_tribunal: ["gu", 2], told_village_of_mengjiao: ["gu", 2], took_gu_letter: ["gu", -2], knows_gu_name: ["gu", 1],
  // Ren Qiao
  warden_escort: ["ren", 4], asked_ren_about_gate: ["ren", 2], read_top_band: ["ren", 3], told_ren_reflection: ["ren", 3],
  told_ren_shrine: ["ren", 3], told_ren_names: ["ren", 4], ren_followed: ["ren", 5], asked_ren_lantern: ["ren", 5], fought_warden: ["ren", -3],
  // Lin Yuan
  protected_clerk: ["lin", 10], bribed_clerk: ["lin", -2], threatened_clerk: ["lin", -8], stole_key: ["lin", -5], read_sealing_order: ["lin", 4],
  took_sealing_order: ["lin", -2], started_fire: ["lin", -4], confessed_fire: ["lin", 2],
  // Su Mengjiao
  met_mengjiao_grey: ["mengjiao", 2], said_mengjiao_name: ["mengjiao", 3], waited_for_mengjiao: ["mengjiao", 3], almost_left: ["mengjiao", -3],
  asked_how_seal: ["mengjiao", 2], asked_about_wanru: ["mengjiao", 3], showed_coin: ["mengjiao", 3], drew_steel: ["mengjiao", -10],
  promised_message: ["mengjiao", 6], offered_to_stay: ["mengjiao", 8], called_through_shard: ["mengjiao", 5], refused_to_listen: ["mengjiao", -6],
  accused_mengjiao: ["mengjiao", -2], offered_hand: ["mengjiao", 4], called_to_mengjiao: ["mengjiao", 5], stepped_to_chains: ["mengjiao", 8],
  stayed_back: ["mengjiao", -4], let_her_fall: ["mengjiao", -10], took_jade_sealing: ["mengjiao", 6], sang_with_mist: ["mengjiao", 6],
  spoke_mengjiao_name: ["mengjiao", 2], asked_mengjiao: ["mengjiao", 1], touched_name: ["mengjiao", 2], scraped_name: ["mengjiao", -2],
};

/** A companion is met when the player first reaches one of these scenes. */
export const INTROS: Record<string, string> = {
  archive_gate_2: "ren",
  abyss_truth: "gu",
  archive_front_2: "lin",
  archive_clerk: "lin",
  sutra_mengjiao_voice: "mengjiao",
  descent_ledge: "mengjiao",
};

/** Adds the bond effects and the introductions to a scene's choices. */
export function withBonds(scene: Scene): Scene {
  return {
    ...scene,
    choices: scene.choices.map((choice) => {
      const extra: Effect[] = [];
      for (const e of choice.effects ?? []) {
        const rule = e.kind === "setFlag" && (e.value ?? true) ? BOND_RULES[e.flag] : undefined;
        if (rule) extra.push({ kind: "addBond", npc: rule[0], amount: rule[1] });
      }
      const intro = INTROS[choice.next];
      if (intro && !extra.some((e) => e.kind === "addBond" && e.npc === intro)) extra.push({ kind: "addBond", npc: intro, amount: 0 });
      return extra.length ? { ...choice, effects: [...(choice.effects ?? []), ...extra] } : choice;
    }),
  };
}
