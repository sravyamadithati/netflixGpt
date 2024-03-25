import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="font-bold text-lg md:text-2xl text-white mb-3">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
