import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptMovieNames: null,
    tmdbMovies: null,
    error: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addGptMovieResults: (state, action) => {
      state.gptMovieNames = action.payload.names;
      state.tmdbMovies = action.payload.tmdbMovies;
    },
    resetGptResults: (state) => {
      state.gptSearchView = false;
      state.gptMovieNames = null;
      state.tmdbMovies = null;
    },
    errorFetchingGPTMovies: (state) => {
      state.error = true;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResults,
  resetGptResults,
  errorFetchingGPTMovies,
} = gptSlice.actions;
export default gptSlice.reducer;
