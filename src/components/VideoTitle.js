import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
//   console.log(title, "title");
  return (
    <div className="pt-36 px-20 absolute top-24 text-white max-w-2xl">
      <h1 className="text-4xl mb-2">{title}</h1>
      <p>{overview}</p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
