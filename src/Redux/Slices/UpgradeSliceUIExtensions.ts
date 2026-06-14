import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Upgrade } from "../../Models/Upgrade";

type UpgradeSliceExtension = {
  id: Upgrade["id"];
  isHoveredOver: boolean;
};

const initialState: UpgradeSliceExtension = {
  id: "as-upgrade",
  isHoveredOver: false,
};

const upgradeSliceExtensionSlice = createSlice({
  name: "upgradeSliceExtensionSlice",
  initialState: initialState,
  reducers: {
    setActiveHover: (_, action: PayloadAction<UpgradeSliceExtension>) => {
      return action.payload;
    },
  },
});

export const { setActiveHover } = upgradeSliceExtensionSlice.actions;
export default upgradeSliceExtensionSlice.reducer;
