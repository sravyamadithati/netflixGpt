import { useEffect } from "react";
import { GETMOVIESOPTIONS } from "../utils/constants";
import { getVideoTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.movies);
  console.log(videoData);
  useEffect(() => {
    const getVideoData = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        GETMOVIESOPTIONS
      );
      const json = await data.json();
      console.log(data, json);
      const filterData = json?.results.filter(
        (data) => data.type === "Trailer"
      );
      dispatch(getVideoTrailer(filterData[0] || json?.results[0]));
    };
    getVideoData();
  }, [dispatch, movieId]);
  return (
    <div className=" bg-gradient-to-r from-black w-f">
      <iframe
        class="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoData.trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
