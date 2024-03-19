import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptData = useSelector((state) => state.gpt.gptSearchView);
  useNowPlayingMovies();
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
