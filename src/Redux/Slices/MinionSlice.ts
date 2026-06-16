import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Minion } from "../../Models/Minion";

const initialState: Record<Minion["id"], Minion> = {
  minion_lvl_1: {
    id: "minion_lvl_1",
    name: "Cannon Fodder",
    health: 100,
    cost: 20,
    damage: 2,
    cooldown: 5,
    quantity: 50,
    reward: 1,
    income: 1,
    description: "Soldier boy, made of clay.",
    background_pic_anim_1: "https://imgur.com/AQa5AJJ.png",
    background_pic_anim_2: "https://imgur.com/plDDeoa.png",
    background_pic_anim_attacked: "https://imgur.com/t8o5npc.png",
    background_pic_anim_half_health: "https://imgur.com/nQsyhuS.png",
  },
  minion_lvl_2: {
    id: "minion_lvl_2",
    name: "MiserAble Man",
    health: 250,
    cost: 50,
    damage: 10,
    cooldown: 8,
    quantity: 30,
    reward: 2,
    income: 5,
    description: "Can do but not fond of.",
    background_pic_anim_1: "https://imgur.com/7suy0j9.png",
    background_pic_anim_2: "https://imgur.com/l0kc2El.png",
    background_pic_anim_attacked: "https://imgur.com/VsXiPdi.png",
    background_pic_anim_half_health: "https://imgur.com/ZhWq530.png",
  },
};
//so i need to set ids for the actual minion instances when they spawn i guess just with their indexes but i need to figure out how i want to structure this
const minionSlice = createSlice({
  name: "minion",
  initialState: initialState,
  reducers: {
    setHealth: (state, action: PayloadAction<[Minion["id"], number]>) => {
      state[action.payload[0]].health += action.payload[1];
    },
    setQuantity: (state, action: PayloadAction<Minion["id"]>) => {
      state[action.payload].quantity += 1;
    },
    decrementMinionCooldown: (state, action: PayloadAction<Minion["id"]>) => {
      state[action.payload].cooldown -= 1000;
    },
    changeMinionPic: (state, action: PayloadAction<Minion["id"]>) => {
      state[action.payload].health =
    },
  },
});
