import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
