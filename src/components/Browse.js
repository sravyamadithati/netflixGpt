import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const gptData = useSelector((state) => state.gpt.gptSearchView);
  const errorFetchingMovies = useSelector((state) => state.movies.error);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  if (errorFetchingMovies) {
    return (
      <div className="text-center font-bold pt-32 relative">
        An error occured while fetching movies data.Please try after some time
        or try switching to other networks if you are using jio
      </div>
    );
  }
  return (
    <div className="">
      <Header />
      {gptData ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/*
        Main Container
          -Video Background
          -video Title
        Secondary Container
          -MovieList *n
            -Card*n
        
      */}
    </div>
  );
};

export default Browse;
