import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GETMOVIESOPTIONS } from "../utils/constants";
import { addTopRatedMovies, errorFetchingMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          GETMOVIESOPTIONS
        );
        const jsondata = await data.json();
        dispatch(addTopRatedMovies(jsondata?.results));
      } catch (e) {
        dispatch(errorFetchingMovies(e));
      }
    };
    getMovies();
  }, [dispatch]);
};
export default useTopRatedMovies;
