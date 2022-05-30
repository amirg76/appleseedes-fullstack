import React, { useState } from "react";

const data = ["one", "two", "three", "four", "five"];

const MakeCheckBox = () => {
  const [checkedArr, setCheckedArr] = useState(
    data.map((check) => {
      return { [check]: check, status: false };
    })
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    const idOfChecked = e.target.id;

    setIsChecked({ isChecked: !isChecked });

    setCheckedArr(
      checkedArr.map((element) => {
        return element[idOfChecked] === idOfChecked
          ? { ...element, status: !element.status }
          : element;
      })
    );
  };

  const handleButton = (e) => {
    console.log(e.target.id);

    if (e.target.id === "delete") {
      setCheckedArr(checkedArr.filter((element) => !element.status));
    }
  };

  return (
    <>
      {console.log(checkedArr)}
      <div>
        <button id="delete" onClick={handleButton}>
          Delete
        </button>
        <button id="reset" onClick={handleButton}>
          Reset
        </button>
      </div>

      <ul>
        {checkedArr.map((element, index) => {
          return (
            <li key={index}>
              <div className="checkbox-container">
                <label class="container">
                  <input
                    onClick={handleClick}
                    type="checkbox"
                    checked={isChecked ? "checked" : ""}
                    id={Object.keys(element)[0]}
                  ></input>
                  <span class="checkmark"></span>
                  {Object.keys(element)[0]}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <label class="container">
        Two
        <input type="checkbox"></input>
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Three
        <input type="checkbox"></input>
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Four
        <input type="checkbox"></input>
        <span class="checkmark"></span>
      </label> */}
      {/* <div className="input-time">
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
      </div> */}
    </>
  );
};
class Ex_18_4 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MakeCheckBox />
      </div>
    );
  }
}
export default Ex_18_4;
