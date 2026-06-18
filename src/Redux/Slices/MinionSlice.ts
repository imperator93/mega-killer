import { createSlice, isAction, type PayloadAction } from "@reduxjs/toolkit";
import type { Minion } from "../../Models/Minion";

export const initialState: Record<Minion["type"], Minion> = {
  minion_lvl_1: {
    id: null,
    type: "minion_lvl_1",
    name: "Cannon Fodder",
    description: "Soldier boy, made of clay.",
    damage: 2,
    currentHealth: 100,
    baseHealth: 100,
    cost: 20,
    quantity: 50,
    cooldown: 5000,
    cooldownRemaining: 5000,
    reward: 1,
    income: 1,
    size: 100,
    background_active_pic: "",
    background_pic_anim_1: "https://imgur.com/AQa5AJJ.png",
    background_pic_anim_2: "https://imgur.com/plDDeoa.png",
    background_pic_anim_attacked: "https://imgur.com/t8o5npc.png",
    background_pic_anim_half_health: "https://imgur.com/nQsyhuS.png",
  },
  minion_lvl_2: {
    id: null,
    type: "minion_lvl_2",
    name: "MiserAble Man",
    baseHealth: 250,
    currentHealth: 250,
    cost: 50,
    damage: 10,
    cooldown: 8000,
    cooldownRemaining: 8000,
    quantity: 30,
    reward: 2,
    income: 5,
    size: 150,
    description: "Can do but not fond of.",
    background_active_pic: "",
    background_pic_anim_1: "https://imgur.com/7suy0j9.png",
    background_pic_anim_2: "https://imgur.com/l0kc2El.png",
    background_pic_anim_attacked: "https://imgur.com/VsXiPdi.png",
    background_pic_anim_half_health: "https://imgur.com/ZhWq530.png",
  },
};

//NEED TO FINISH THIS
const minionSlice = createSlice({
  name: "minion",
  initialState: initialState,
  reducers: {
    decreaseQuantity: (state, action: PayloadAction<Minion["type"]>) => {
      const minion = state[action.payload];
      if (minion.quantity <= 0) return;
      minion.quantity -= 1;
    },
    increaseQuantityTimer: (state, action: PayloadAction<Minion["type"]>) => {
      const minion = state[action.payload];
      if (minion.cooldownRemaining <= 0) {
        minion.quantity += 1;
        minion.cooldownRemaining = minion.cooldown;
        return;
      }
      minion.cooldownRemaining -= 1000;
    },
  },
});

export const { decreaseQuantity, increaseQuantityTimer } = minionSlice.actions;
export default minionSlice.reducer;
