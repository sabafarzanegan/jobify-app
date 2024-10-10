import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type User = {
  username: string;
  token: string;
  location: string;
  city: string;
  name: string;
  lastName: string;
};

type UserState = {
  user: User | null;
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (!user) return;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
