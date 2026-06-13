export type Upgrade = {
  id: "as-upgrade" | "dmg-upgrade";
  cost: number;
  costIncrement: number;
  level: number;
  name: string;
  description: string;
  isResearching: boolean;
  researchLength: number;
  researchLengthIncrement: number;
  timeToComplete: number;
  backgroundPic: string;
};
