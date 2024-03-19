import { useRef } from "react";
import { useDispatch } from "react-redux";
import openai from "../utils/openAI";
import { BG_LOGO, GETMOVIESOPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  const searchTextRef = useRef();
  const dispatch = useDispatch();
  //const gptmoviedata

  const searchMoviesInTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      GETMOVIESOPTIONS
    );
    const json = await data.json();
    return json;
  };

  const handleGptSearch = async () => {
    const query =
      "Act as movie recommendation system and suggest movies for the query:" +
      searchTextRef.current.value +
      " only give me names of 5 movies with only comma seperated like the example result given ahead : Movie,Movie,Movie,Movie,Movie.Do not add numbers before movie name";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResult?.choices[0]?.message?.content.split(",");
    const res = await Promise.all(
      gptMovies?.map((movie) => searchMoviesInTMDB(movie))
    );
    dispatch(addGptMovieResults({ tmdbMovies: res, names: gptMovies }));
  };

  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_LOGO}
          className="w-screen h-screen object-cover"
          alt="movies"
        />
      </div>
      <div className="">
        <div className="pt-[45%] md:pt-[10%]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full  md:w-1/2 bg-black rounded-lg bg-opacity-80 m-auto grid grid-cols-12"
          >
            <input
              ref={searchTextRef}
              type="text"
              name="search"
              placeholder="What would you like to watch today?"
              className=" bg-white p-4 m-3 col-span-9 rounded-lg"
            />
            <button
              className="bg-red-500 p-3 m-2 rounded-lg col-span-3"
              onClick={handleGptSearch}
            >
              Search
            </button>
          </form>
        </div>
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
