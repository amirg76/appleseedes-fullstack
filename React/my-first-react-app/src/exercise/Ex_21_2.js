import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const MakeVideo = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        type="video/mp4"
        width="100%"
        height="100%"
        ref={videoRef}
        controls={true}
      ></video>
      <button type="button" onClick={playVideo}>
        Play!
      </button>
      <button type="button" onClick={pauseVideo}>
        Pause!
      </button>
    </div>
  );
};

class Ex_21_2 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MakeVideo />
      </div>
    );
  }
}
export default Ex_21_2;
