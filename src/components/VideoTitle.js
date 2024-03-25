const VideoTitle = ({ title, overview }) => {
  return (
    <div className="hidden lg:block absolute w-1/4 left-7 text-white top-1/2">
      <h1 className="font-bold text-5xl mb-4">{title}</h1>
      <p className="mb-4">{overview}</p>

      <button className="text-black bg-white px-6 py-2 w-35 mr-4">
        ▶️Play
      </button>
      <button className="text-white bg-slate-500 px-6 py-2 w-35">
        ℹ️More Info
      </button>
    </div>
  );
};

export default VideoTitle;
