import { configureStore } from "@reduxjs/toolkit";
import crosshairReducer from "./Slices/CrosshairSlice";
import upgradeReducer from "./Slices/UpgradeSlice";
import upgradeUIExtenstionsReducer from "./Slices/UpgradeSliceUIExtensions";

export const store = configureStore({
  reducer: {
    crosshair: crosshairReducer,
    upgrade: upgradeReducer,
    upgradeUIExtenstions: upgradeUIExtenstionsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
