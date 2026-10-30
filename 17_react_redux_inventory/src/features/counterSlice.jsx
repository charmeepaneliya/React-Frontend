import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 1,
  },

  reducers: {
    increment: (state) => {   
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    },
    custom: (state, action) => {
      state.count += +action.payload;
    },
    customDecrement: (state, action) => {
      state.count -= +action.payload;
    },
  },
});

export const { increment, decrement, reset, custom, customDecrement } =
  counterSlice.actions;
export default counterSlice.reducer;
