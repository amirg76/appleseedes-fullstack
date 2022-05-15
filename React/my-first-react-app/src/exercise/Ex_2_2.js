import React from "react";

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const sum = number1 + number2;
const string = "I love React!";
const stringLength = string.length;

const Ex_2_2 = () => {
  return (
    <div>
      <div>
        "{data[0]} {data[1]}"
      </div>
      <div>
        {number1} + {number2} = {sum}
      </div>
      <div>String Length {stringLength}</div>
    </div>
  );
};
export default Ex_2_2;
