import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src, playing }) => {
  return (
    <ReactPlayer
      url={src}
      playing={playing}
      controls
      width="45vw"
      height="40vh"
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
