import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MinionEntity } from "../../Models/MinionEntity";
import type { Minion } from "../../Models/Minion";

const initialState: Record<MinionEntity["id"], MinionEntity> = {};

const minionEntitySlice = createSlice({
  name: "minion entity",
  initialState: initialState,
  reducers: {
    spawnMinion: (state, action: PayloadAction<Minion["id"]>) => {},
  },
});
