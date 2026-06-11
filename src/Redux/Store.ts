import { configureStore } from "@reduxjs/toolkit";
import crosshairReducer from "./Slices/CrosshairSlice";

export const store = configureStore({
  reducer: {
    crosshair: crosshairReducer,
  },
});

export type CrosshairState = ReturnType<typeof store.getState>;
export type CrosshairDispatch = typeof store.dispatch;
