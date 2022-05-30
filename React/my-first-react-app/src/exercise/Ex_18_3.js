import React, { useState } from "react";

const MakeTime = () => {
  const [time, setTime] = useState({ sec: "", min: "", hour: "" });

  const handleOnChange = (e) => {
    setTime((prev) => {
      let newSec = time.sec;
      let newMin = time.min;
      let newHour = time.hour;
      if (e.target.id === "sec") {
        newSec = e.target.value;
        newMin = newSec / 60;
        newHour = newMin / 60;
      } else if (e.target.id === "min") {
        newMin = e.target.value;
        newSec = newMin * 60;
        newHour = newMin / 60;
      } else if (e.target.id === "hour") {
        newHour = e.target.value;
        newMin = newHour * 60;
        newSec = newMin * 60;
      }

      return { sec: newSec, min: newMin, hour: newHour };
    });
  };

  return (
    <>
      <div className="input-time">
        <label>Seconds</label>
        <input id="sec" onChange={handleOnChange} value={time.sec}></input>
      </div>
      <div className="input-time">
        <label>Minutes</label>
        <input id="min" onChange={handleOnChange} value={time.min}></input>
      </div>
      <div className="input-time">
        <label>hour</label>
        <input id="hour" onChange={handleOnChange} value={time.hour}></input>
      </div>
    </>
  );
};
class Ex_18_3 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MakeTime />
      </div>
    );
  }
}
export default Ex_18_3;
