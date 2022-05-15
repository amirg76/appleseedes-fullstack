import React from "react";

const root = document.getElementById("root");
root.style.display = "flex";
root.style.justifyContent = "center";

const styleMain = {
  backgroundColor: "green",
  width: 700,
  height: 500,
  marginTop: 200,
  postion: "relative",
  display: "inline-block",
};
const styleBox1 = {
  backgroundColor: "blue",
  width: 670,
  height: 450,
  margin: 15,
  display: "inline-block",
};
const styleBox2 = {
  display: "inline-block",
  backgroundColor: "pink",
  width: 600,
  height: 400,
  margin: 25,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const styleBox3 = {
  // display: "inline-block",
  backgroundColor: "purple",
  width: 350,
  height: 100,
  margin: 15,
};

const Ex_3_1 = () => {
  return (
    <div style={styleMain}>
      <div style={styleBox1}>
        <div style={styleBox2}>
          <div style={styleBox3}></div>
          <div style={styleBox3}></div>
        </div>
      </div>
    </div>
  );
};
export default Ex_3_1;
