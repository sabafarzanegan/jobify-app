import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Feature/Theme/themeSlice";
import userReducer from "./Feature/user/userSlice";

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    userState: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
