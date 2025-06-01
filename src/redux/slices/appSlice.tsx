import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAppInitialState } from "../../lib/types";

const appInitialState: TAppInitialState = {
  asideOpen: false,
};

const appSLice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setAsideOpen(state, action: PayloadAction<TAppInitialState["asideOpen"]>) {
      state.asideOpen = action.payload;
    },
  },
});

export const {setAsideOpen} = appSLice.actions
export const appReducer = appSLice.reducer