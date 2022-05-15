import React from "react";

const root = document.getElementById("root");
root.style.display = "flex";
root.style.justifyContent = "center";

const styleTitle = {
  width: 700,
  height: 500,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
};
const quizTitle = {
  width: 500,
  height: 10,
  marginTop: 10,
  textElign: "center",
};
const q1 = {
  width: 500,
  height: 10,
  marginTop: 10,
  textElign: "center",
};
const qinput = {
  width: 400,
  height: 10,
  marginTop: 10,
  textElign: "center",
};

export const Ex_3_2_quiz = () => {
  return <title style={styleTitle}>fff</title>;
};

export const Ex_3_2_quizTitle = () => {
  return <h1 style={quizTitle}>How Do You Like Front End</h1>;
};

export const Ex_3_2_q1 = () => {
  return <h3 style={q1}>How Much You Love Front End</h3>;
};

export const Ex_3_2_q1Input = () => {
  return <input type="range" style={qinput}></input>;
};

export const Ex_3_2_q2Title = () => {
  return <h3 style={q1}>What is your favourite front end feature/topic?</h3>;
};
const Ex_3_2_q2Input = () => {
  return <input style={qinput}></input>;
};
export default Ex_3_2_q2Input;
