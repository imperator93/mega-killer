type MinionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Minion = {
  id: `minion_lvl_${MinionLevel}`;
  name: string;
  description: string;
  damage: number;
  cost: number;
  quantity: number;
  cooldown: number;
  reward: number;
  income: number;
  background_pic_anim_1: string;
};
