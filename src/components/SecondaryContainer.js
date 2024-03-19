import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  if (!movies) {
    return;
  }
  return (
    <div className="md:-mt-56">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
