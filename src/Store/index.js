import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./User/auth"; // Adjust the path if needed

export const Store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});
