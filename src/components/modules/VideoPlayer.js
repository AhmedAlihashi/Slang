import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src, playing }) => {
  return (
    <ReactPlayer
      url={src}
      playing={playing}
      controls
      width="100%"
      height="100%"
      config={{
        file: {
          attributes: {
            controlsList: "nodownload noremoteplayback",
            disablePictureInPicture: true,
          },
        },
      }}
    />
  );
};

export default VideoPlayer;
