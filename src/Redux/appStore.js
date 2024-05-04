import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducers from "./movieSlice";
import gptReducers from "./gptSlice";
import configReducers from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducers,
    gpt: gptReducers,
    config: configReducers,
  },
});

export default appStore;
