import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GETMOVIESOPTIONS } from "../utils/constants";
import { addPopularMovies, errorFetchingMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          GETMOVIESOPTIONS
        );
        const jsondata = await data.json();
        dispatch(addPopularMovies(jsondata?.results));
      } catch (e) {
        dispatch(errorFetchingMovies(e));
      }
    };
    getMovies();
  }, [dispatch]);
};
export default usePopularMovies;
