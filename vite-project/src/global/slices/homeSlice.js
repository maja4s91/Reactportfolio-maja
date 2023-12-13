import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const { actions, reducer } = createSlice({
  name: "home",
  initialState: {
    home: data,
  },
  reducers: {},
});
