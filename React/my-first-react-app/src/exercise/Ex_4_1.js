import React from "react";
import styles from "../App.css";
const root = document.getElementById("root");
root.style.display = "flex";
root.style.justifyContent = "center";

const styleMain = {
  width: 450,
  height: 200,
  marginTop: 200,
  // border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
};
const styleBtn = {
  width: 200,
  height: 50,
};

export const Makebutton = (props) => {
  return <button className="ex_4_1_btn_style">{props.text}</button>;
};

const Ex_4_1 = (props) => {
  return <div style={styleMain}>{props.children}</div>;
};
export default Ex_4_1;

// import sky from "./sky.jpg";
