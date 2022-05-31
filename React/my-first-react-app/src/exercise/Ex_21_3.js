import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const HoverImg = ({ color, dark }) => {
  const imgRef = useRef(null);

  const mouseEnter = () => {
    imgRef.current.src = color;
  };
  const mouseHover = () => {
    imgRef.current.src = dark;
  };

  return (
    <div>
      <img
        alt=""
        src={dark}
        ref={imgRef}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseHover}
        width="300px"
        height="300px"
      />
    </div>
  );
};

const MakeImg = () => {
  return (
    <>
      <HoverImg color="assets/img/lake.jpg" dark="assets/img/lake-d.jpg" />
      <HoverImg color="assets/img/mounth.jpg" dark="assets/img/mounth-d.jpg" />
    </>
  );
};

class Ex_21_3 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MakeImg />
      </div>
    );
  }
}
export default Ex_21_3;
