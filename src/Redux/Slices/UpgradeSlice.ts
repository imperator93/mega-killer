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
    name: "Upgrade Damage",
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
      const up = state[action.payload];

      if (up == null || up.isResearching) return;
      up.isResearching = true;
    },
    decrementTimer: (state, action: PayloadAction<Upgrade["id"]>) => {
      const up = state[action.payload];

      if (up == null || up.isResearching || up.timeToComplete <= 0) return;

      up.timeToComplete -= 1000;
    },
    upgradeFinished: (state, action: PayloadAction<Upgrade["id"]>) => {
      const up = state[action.payload];

      if (up == null) return;

      up.cost += up.costIncrement;
      up.researchLength += up.researchLengthIncrement;
      up.timeToComplete = up.researchLength;
      up.level += 1;
      up.isResearching = false;
      console.log("test");
    },
  },
});

export const { startResearching, decrementTimer, upgradeFinished } =
  upgradeSlice.actions;
export default upgradeSlice.reducer;
