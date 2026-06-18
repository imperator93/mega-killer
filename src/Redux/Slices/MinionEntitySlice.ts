import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Minion } from "../../Models/Minion";
import { initialState as minionStats } from "./MinionSlice";

const initialState: Minion[] = [];

//this one is basicaly finished
const minionEntitySlice = createSlice({
  name: "minion entity",
  initialState: initialState,
  reducers: {
    spawnMinion: (state, action: PayloadAction<Minion["type"]>) => {
      const minion = minionStats[action.payload];
      minion.background_active_pic = minion.background_pic_anim_1;
      minion.id = state.length;
      state.push(minion);
    },
    setInteractionAnimation: (state, action: PayloadAction<number>) => {
      const minion = state.find((m) => m.id == action.payload);
      if (!minion) return;
      if (
        minion.currentHealth < minion.baseHealth &&
        minion.currentHealth > minion.baseHealth / 2
      ) {
        minion.background_active_pic = minion.background_pic_anim_attacked;
        return;
      }
      minion.background_active_pic = minion.background_pic_anim_half_health;
    },
    takeDamageAndOrKill: (
      state,
      action: PayloadAction<[id: number, damage: number]>,
    ) => {
      const minion = state.find((m) => m.id == action.payload[0]);
      if (!minion) return;
      if (minion.currentHealth - action.payload[1] <= 0) {
        state.filter((m) => m.id != minion.id);
        return;
      }
      minion.currentHealth -= action.payload[1];
    },
  },
});

export const { spawnMinion, setInteractionAnimation, takeDamageAndOrKill } =
  minionEntitySlice.actions;
export default minionEntitySlice.reducer;
