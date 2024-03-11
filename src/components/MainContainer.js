import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movieData = useSelector((state) => state.movies);
  if (!movieData.nowPlayingMovies) {
    return;
  }
  const { title, overview, id } = movieData?.nowPlayingMovies[9] || {};
  //console.log(movieData);
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
