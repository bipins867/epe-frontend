import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
    setAuthToken(state, action) {
      state.token = action.payload; // Fixed: Access `payload` from the action
    },
  },
});

// Export the actions
export const { login, logOut, setAuthToken } = userAuthSlice.actions;

// Export the reducer
export const userAuthReducer = userAuthSlice.reducer;

// Export the slice (optional, if needed for other purposes)
export default userAuthSlice;
