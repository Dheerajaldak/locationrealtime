import React, { useEffect, useRef } from "react";

const Video = ({ stream, muted }) => {
  const videoEl = useRef();

  useEffect(() => {
    const video = videoEl.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);
  return (
    <div className="w-48 h-32 bg-transparent rounded-md overflow-hidden shadow-md">
      <video
        ref={videoEl}
        className="w-full h-full object-cover"
        playsInline
        autoPlay
        muted={muted}
      />
    </div>
  );
};

export default Video;
