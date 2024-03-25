import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GETMOVIESOPTIONS } from "../utils/constants";
import { addNowPlayingMovies, errorFetchingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          GETMOVIESOPTIONS
        );
        const jsondata = await data.json();
        dispatch(addNowPlayingMovies(jsondata.results));
      } catch (e) {
        dispatch(errorFetchingMovies(e));
      }
    };
    getMovies();
  }, [dispatch]);
};
export default useNowPlayingMovies;
