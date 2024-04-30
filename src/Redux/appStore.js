import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducers from "./movieSlice";
import gptReducers from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducers,
    gpt: gptReducers,
  },
});

export default appStore;
