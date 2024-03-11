import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  console.log(movies);
  return (
    <>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
    </>
  );
};

export default SecondaryContainer;
