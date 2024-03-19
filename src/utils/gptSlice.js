import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptMovieNames: null,
    tmdbMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addGptMovieResults: (state, action) => {
      state.gptMovieNames = action.payload.names;
      state.tmdbMovies = action.payload.tmdbMovies;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
