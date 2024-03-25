import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const data = useSelector((state) => state.gpt);
  if (data.error) {
    return (
      <div className="text-white">
        An error occured while fetching movies data.Please try after some time
        or try switching to other networks if you are using jio
      </div>
    );
  }
  if (!data?.tmdbMovies) {
    return;
    // return <ShimmerSimpleGallery card imageHeight={300} />;
  }

  return (
    <div
      className="bg-black 
     bg-opacity-85 p-4 m-4 "
    >
      {data?.tmdbMovies?.map((movie, index) => {
        return (
          <MovieList title={data.gptMovieNames[index]} movies={movie.results} />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
