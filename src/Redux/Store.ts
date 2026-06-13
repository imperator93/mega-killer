import { configureStore } from "@reduxjs/toolkit";
import crosshairReducer from "./Slices/CrosshairSlice";
import upgradeReducer from "./Slices/UpgradeSlice";

export const store = configureStore({
  reducer: {
    crosshair: crosshairReducer,
    upgrade: upgradeReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
