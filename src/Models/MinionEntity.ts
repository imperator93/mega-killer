import type { Minion } from "./Minion";

export type MinionEntity = {
  id: string;
  type: Minion["id"];
  health: number;
  damage: number;
  reward: number;
  background_pic_anim_1: string;
  background_pic_anim_2: string;
  background_pic_anim_attacked: string;
  background_pic_anim_half_health: string;
};
