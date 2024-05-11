import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser/currentUserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Atom, swap, deref } from "@dbeining/react-atom";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "./helpers";
import { getBalance } from "../services/blockchain";
import { E9 } from "../utils/constants";

const initialState: {
  balance: null | number;
  lockedBalance: number | null;
  unlockedBalance: number | null;
  mcrtPrice?: number | undefined;
} = {
  balance: null,
  lockedBalance: null,
  unlockedBalance: null,
};

const mcrtSlice = createSlice({
  name: "mcrt",
  initialState,
  reducers: {
    setBalance: (
      state,
      action: PayloadAction<{
        balance: null | number;
        lockedBalance: number | null;
        unlockedBalance: number | null;
      }>
    ) => {
      state.balance = action.payload.balance;
      state.lockedBalance = action.payload.lockedBalance;
      state.unlockedBalance = action.payload.unlockedBalance;
    },
    setMcrtPrice: (state, action: PayloadAction<number>) => {
      state.mcrtPrice = action.payload;
    },
  },
});

export const updateBalanceAction = createAppAsyncThunk(
  "mcrt/updateBalanceAction",
  async (_, { dispatch, getState }) => {
    const walletAddress = getState().currentUser.user?.wallet_address;

    if (!walletAddress) return;

    const { total, locked, unlocked } = await getBalance(walletAddress);

    dispatch(
      mcrtSlice.actions.setBalance({
        balance: total.div(E9).toNumber(),
        lockedBalance: locked.div(E9).toNumber(),
        unlockedBalance: unlocked.div(E9).toNumber(),
      })
    );
  }
);

const dailyTaskInitialState: {
  tasksCompleted: string[];
  isCompleted: boolean;
} = {
  tasksCompleted: [],
  isCompleted: false,
};

const dailyTasksSlice = createSlice({
  name: "dailyTasks",
  initialState: dailyTaskInitialState,
  reducers: {
    setDailyTasks: (
      state,
      action: PayloadAction<{
        tasksCompleted: string[];
        isCompleted: boolean;
      }>
    ) => {
      state.tasksCompleted = action.payload.tasksCompleted;
      state.isCompleted = action.payload.isCompleted;
    },
  },
});

export const { setDailyTasks } = dailyTasksSlice.actions;

export const disableLoginOnConnectAtom = Atom.of<boolean>(false);
export const setDisableLoginOnConnect = (value: boolean) => {
  swap(disableLoginOnConnectAtom, () => value);
};

export function isDisabledLoginOnConnect() {
  return deref(disableLoginOnConnectAtom);
}

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    mcrt: mcrtSlice.reducer,
    dailyTasks: dailyTasksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
