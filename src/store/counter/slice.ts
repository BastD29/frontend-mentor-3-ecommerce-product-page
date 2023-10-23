import { createSlice } from "@reduxjs/toolkit";
import { ICartInitialState } from "src/models/Counter";

const initialState: ICartInitialState = {
  quantity: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIncrement: (state) => {
      if (state.quantity) state.quantity += 1;
    },
    setDecrement: (state) => {
      if (state.quantity) state.quantity -= 1;
    },
  },
});

export const { actions, reducer } = slice;
