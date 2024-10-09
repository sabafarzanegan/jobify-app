import { ApplyTheme } from "@/Utils/Helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Theme = "system" | "dark" | "light";
export type themeState = {
  theme: Theme;
};
const initalTheme = () => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";
  ApplyTheme(theme);
  return theme;
};
const initialState = {
  theme: initalTheme(),
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      ApplyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
