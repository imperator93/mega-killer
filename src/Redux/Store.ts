import { configureStore } from "@reduxjs/toolkit";
import crosshairReducer from "./Slices/CrosshairSlice";
import upgradeReducer from "./Slices/UpgradeSlice";
import upgradeUIExtenstionsReducer from "./Slices/UpgradeSliceUIExtensions";
import playerReducer from "./Slices/PlayerSlice";
import minionReducer from "./Slices/MinionSlice";
import minionEntityReducer from "./Slices/MinionEntitySlice";

export const store = configureStore({
  reducer: {
    crosshair: crosshairReducer,
    upgrade: upgradeReducer,
    upgradeUIExtenstions: upgradeUIExtenstionsReducer,
    player: playerReducer,
    minion: minionReducer,
    minionEntity: minionEntityReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
