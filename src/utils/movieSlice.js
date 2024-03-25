import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    error: null,
    errorMsg: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getVideoTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    errorFetchingMovies: (state, action) => {
      state.error = true;
      state.errorMsg = action.payload;
    },
    resetMovieData: (state) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.trailerVideo = null;
      state.error = null;
      state.errorMsg = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  getVideoTrailer,
  errorFetchingMovies,
  addPopularMovies,
  addTopRatedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
