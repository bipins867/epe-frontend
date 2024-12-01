import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./User/auth"; // Adjust the path if needed
import { commonInfoReducer } from "./CommonInfo/commonInfo";

export const Store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    commonInfo:commonInfoReducer
  },
});
