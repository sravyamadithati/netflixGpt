import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="pr-4 w-64">
      <img
        className="max-w-40"
        alt="movie"
        src={IMG_CDN + movie?.poster_path}
      />
    </div>
  );
};

export default MovieCard;
