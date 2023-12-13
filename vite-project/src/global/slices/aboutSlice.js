import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const { actions, reducer } = createSlice({
  name: "about",
  initialState: {
    about: data,
  },
  reducers: {},
});
