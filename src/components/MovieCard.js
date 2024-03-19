import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie?.poster_path) {
    return null;
  }
  return (
    <div className="pr-6 md:max-w-64 max-w-56 h-72 md:h-80 hover:scale-110  transition duration-300 hover:-translate-y-1 ">
      <img
        className="max-w-40 md:max-w-52 h-42 md:h-72 "
        alt="movie"
        src={IMG_CDN + movie?.poster_path}
      />
    </div>
  );
};

export default MovieCard;
