import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
  },
});

export default Store;
