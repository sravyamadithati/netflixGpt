import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  const { nowPlayingMovies, popularMovies, topRatedMovies } = movies || {};
  if (!nowPlayingMovies) {
    return;
  }
  return (
    <div className="md:-mt-56 bg-black">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
