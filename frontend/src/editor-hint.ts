// The editor's hint bar (#96): one line under the plan that says what the current tool does, what can be done with
// the selection, and on a fresh install what to do first. It carries the first-run guidance instead of a tour.

import type { I18nKey } from "./i18n.ts";

export type Tool = "select" | "rect" | "polygon" | "measure" | "opening" | "furniture" | "outdoor" | "hole" | "wall" | "roof" | "energy" | "pool";

export interface HintState {
  tool: Tool;
  hasFloor: boolean;
  /** Rooms on the shown floor. */
  rooms: number;
  /** What is selected in the plan. */
  selected: "room" | "opening" | "furniture" | "device" | null;
  /** A library card is armed: the next click places it (#76). */
  placing?: boolean;
  wallPick?: boolean;
  /** A bin's kerb spot is being picked (#142). */
  kerbPick?: boolean;
  /** A drag on a fixed item just became a pan. */
  fixedHint?: boolean;
  outdoorFree?: boolean;
  jointPlace?: boolean;
  pipeMode?: boolean;
  /** A pool is chosen for the pipes. */
  poolArea?: boolean;
  pipeDraft?: boolean;
  /** Pool technology (ports, devices, pipes) is available. */
  poolTech?: boolean;
}

export function hintKey(s: HintState): I18nKey {
  if (!s.hasFloor) return "hint_empty";
  if (s.placing) return "hint_place";
  if (s.wallPick) return "hint_wall_pick";
  if (s.kerbPick) return "hint_kerb_pick";
  if (s.fixedHint) return "fixed_drag_hint";
  if (s.tool === "outdoor" && s.outdoorFree) return "hint_outdoor_free";
  if (s.tool === "pool") {
    if (s.jointPlace) return "hint_joint_place";
    if (s.pipeMode) return !s.poolArea ? "hint_pipe_pool" : s.pipeDraft ? "hint_pipe_next" : "hint_pipe_start";
    return s.poolTech ? "hint_pool_tech" : "hint_pool";
  }
  if (s.tool === "select") {
    if (!s.rooms) return "hint_first_room";
    if (s.selected === "furniture") return "hint_sel_furniture";
    if (s.selected === "opening") return "hint_sel_opening";
    if (s.selected === "device") return "hint_sel_device";
  }
  return `hint_${s.tool}`;
}
