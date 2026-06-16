import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Player } from "../../Models/Player";

const initialState: Player = {
  name: "",
  health: 100,
  damage: 10,
  attackSpeed: 1,
  gold: 500,
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    setHealth: (state, action: PayloadAction<number>) => {
      state.health += action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDamage: (state) => {
      state.damage *= 1.2;
    },
    setAttackSpeed: (state) => {
      state.attackSpeed *= 1.2;
    },
    setGold: (state, action: PayloadAction<number>) => {
      state.gold += action.payload;
    },
  },
});

export const { setHealth, setName, setDamage, setAttackSpeed, setGold } =
  playerSlice.actions;
export default playerSlice.reducer;
