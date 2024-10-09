import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Feature/Theme/themeSlice";

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
