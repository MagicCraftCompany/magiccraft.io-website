import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../api/utils/lobby";

const initialState: { user: User | null } = { user: null };

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
