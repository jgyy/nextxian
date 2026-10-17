import type { Effect, Scene } from "@/engine/types";

/**
 * Where the hero stood at the Sealing Night. The memory of that night is the hinge of Book One, and its choices used to change nothing: the
 * hero could cut the chains, let the masters push, or look away, and the story went the same way. Now each choice in the scenes below leaves
 * a mark (`st_<tone>_<scene>`), the Judgment, the Listener and the Elder read how the hero stood, and the two choices that matter most, at the
 * altar and at the cleft, leave a mark of their own that the Elder and Mengjiao name.
 */
export const STANCE_SCENES = [
  "jade_eye_sealing_night",
  "jade_eye_sealing_night_2",
  "jade_eye_sealing_night_3",
  "jade_eye_accusation",
  "jade_eye_accusation_2",
  "descent_mengjiao",
  "descent_mengjiao_2",
  "descent_mengjiao_3",
  "mist_names_read",
  "mist_names_read_2",
  "mist_masters_fall",
  "mist_masters_fall_2",
  "mist_wanru_message",
  "mist_wanru_message_2",
  "sealing_night_2",
  "sealing_night_3",
  "sealing_altar",
  "sealing_altar_2",
  "sealing_path",
  "sealing_path_2",
  "sealing_choice",
  "sealing_choice_2",
  "sealing_return",
  "sealing_return_2",
];

export const STANCE_PREFIX = "st_";
export const stanceFlag = (tone: string, sceneId: string) => `${STANCE_PREFIX}${tone}_${sceneId}`;

/** The choices that are remembered by name, with the flag each leaves. */
export const KEY_STANCES: Record<string, Record<string, string>> = {
  sealing_altar_2: {
    elder_signs: "sn_elder_signed",
    elder_refuses: "sn_elder_refused",
    offer_to_go: "sn_offered",
    brush_to_side: "sn_brush_struck",
  },
  sealing_choice_2: {
    cut_chains: "sn_chains_cut",
    let_masters_push: "sn_let_push",
    take_jade_instead: "sn_took_jade",
    sing_with_mist: "sn_sang",
  },
};

const stands = new Set(STANCE_SCENES);

/** Marks every choice of a stance scene with how the hero stood, and the key ones with their own mark. */
export function withStance(scene: Scene): Scene {
  if (!stands.has(scene.id)) return scene;
  return {
    ...scene,
    choices: scene.choices.map((c) => {
      const key = KEY_STANCES[scene.id]?.[c.id];
      const marks: Effect[] = [{ kind: "setFlag", flag: stanceFlag(c.tone, scene.id) }, ...(key ? [{ kind: "setFlag", flag: key } as Effect] : [])];
      return { ...c, effects: [...(c.effects ?? []), ...marks] };
    }),
  };
}
