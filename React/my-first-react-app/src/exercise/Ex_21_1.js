import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Editing = () => {
  const [isClick, setIsClick] = useState(true);

  const inputTag = useRef();

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };
  const handleFocus = () => {
    setIsClick((prev) => !prev);
  };
  useEffect(() => {
    if (!isClick) inputTag.current.focus();
  }, [isClick]);
  return (
    <>
      <button className={isClick ? "active" : "hidden"} onClick={handleFocus}>
        edit
      </button>
      {!isClick && (
        <>
          <div className={!isClick ? "active" : "hidden"}>
            <input ref={inputTag}></input>
            <button onClick={handleClick}>save</button>
          </div>
        </>
      )}
    </>
  );
};

class Ex_21_1 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <Editing />
      </div>
    );
  }
}
export default Ex_21_1;
