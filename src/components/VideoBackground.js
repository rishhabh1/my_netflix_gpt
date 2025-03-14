import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);

  const youtubeUrl = useSelector((store) => store.movies?.trailerVideo);
  return (
<div className="">
<iframe
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${youtubeUrl}?autoplay=1&mute=1&modestbranding=1&controls=0&rel=0&showinfo=0&iv_load_policy=3`}
  title="YouTube video player"
></iframe>

    </div>
  );
};

export default VideoBackground;
