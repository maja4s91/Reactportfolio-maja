import { configureStore } from "@reduxjs/toolkit";
import { reducer as homeReducer } from "./slices/homeSlice";
import { reducer as aboutReducer } from "./slices/aboutSlice";

export default configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer,
  },
});
