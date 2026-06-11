import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

class Crosshair {
  x: number = 0;
  y: number = 0;
}

const initialState: Crosshair = {
  x: 0,
  y: 0,
};

const crosshairSlice = createSlice({
  name: "crosshair",
  initialState: initialState,
  reducers: {
    setPosition: (_, action: PayloadAction<Crosshair>) => {
      return action.payload;
    },
  },
});

export const { setPosition } = crosshairSlice.actions;
export default crosshairSlice.reducer;
