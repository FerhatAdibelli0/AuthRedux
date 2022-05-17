import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthented: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    logedIn(state) {
      state.isAuthented = true;
    },
    logedOut(state) {
      state.isAuthented = false;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice.reducer