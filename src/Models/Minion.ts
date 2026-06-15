export type Minion = {
  id: string;
  name: string;
  description: string;
  damage: number;
  cost: number;
  backgroundPic?: string | null;
  quantity: number;
  cooldown: number;
};
