import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Crosshair = {
  x: number;
  y: number;
};

const initialState: Crosshair = {
  x: 0,
  y: 0,
};

const crosshairSlice = createSlice({
  name: "crosshair",
  initialState: initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<Crosshair>) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
});

export const { setPosition } = crosshairSlice.actions;
export default crosshairSlice.reducer;
