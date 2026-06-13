import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Upgrade } from "../../Models/Upgrade";

const initialState: Record<Upgrade["id"], Upgrade> = {
  "as-upgrade": {
    id: "as-upgrade",
    name: "Upgrade Attack Speed",
    level: 1,
    cost: 500,
    costIncrement: 100,
    description: "Increases attack speed by 20%",
    isResearching: false,
    researchLength: 10000,
    researchLengthIncrement: 4000,
    timeToComplete: 10000,
    backgroundPic: "https://imgur.com/Zj8R9jU.png",
  },
  "dmg-upgrade": {
    id: "dmg-upgrade",
    name: "Damage Upgrade",
    level: 1,
    cost: 650,
    costIncrement: 150,
    description: "Increases damage by 10%",
    researchLength: 12000,
    researchLengthIncrement: 5000,
    isResearching: false,
    timeToComplete: 12000,
    backgroundPic: "https://imgur.com/DmrUSJg.png",
  },
};

const upgradeSlice = createSlice({
  name: "upgrade",
  initialState: initialState,
  reducers: {
    startResearching: (state, action: PayloadAction<Upgrade["id"]>) => {
      const as = state[action.payload];

      if (as == null || as.isResearching) return;
      as.isResearching = true;
    },
    decrementTimer: (state, action: PayloadAction<Upgrade["id"]>) => {
      const as = state[action.payload];

      if (as == null || as.isResearching || as.timeToComplete <= 0) return;

      as.timeToComplete -= 1000;
    },
    upgradeFinished: (state, action: PayloadAction<Upgrade["id"]>) => {
      const as = state[action.payload];

      if (as == null) return;

      as.cost += as.costIncrement;
      as.researchLength += as.researchLengthIncrement;
      as.timeToComplete = as.researchLength;
      as.level += 1;
      as.isResearching = false;
    },
  },
});

export const { startResearching, decrementTimer, upgradeFinished } =
  upgradeSlice.actions;
export default upgradeSlice.reducer;
