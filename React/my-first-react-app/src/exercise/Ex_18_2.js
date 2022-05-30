import React, { useState } from "react";

const MakeToDO = () => {
  const [toDoArr, setToDoArr] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const handleClick = (e) => {
    console.log(e.target.id);
    setToDoArr(
      toDoArr.map((element) => {
        console.log(element.completed);

        return element.name === e.target.id
          ? { ...element, completed: !element.completed }
          : element;
      })
    );
  };

  return (
    <>
      {toDoArr.map((element, index) => {
        return (
          <div className="todo-main">
            <h1
              className={!element.completed ? "span-line-through" : ""}
              key={element.name}
            >
              {element.name}
            </h1>
            <span
              className="span-todo "
              id={element.name}
              onClick={handleClick}
            >
              {element.completed ? "  X" : "  V"}
            </span>
          </div>
        );
      })}
    </>
  );
};
class Ex_18_2 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MakeToDO />
      </div>
    );
  }
}
export default Ex_18_2;
