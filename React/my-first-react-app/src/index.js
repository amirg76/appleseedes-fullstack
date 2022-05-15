import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////////////
import Ex_2_1 from "./exercise/Ex_2_1";
import Ex_2_2 from "./exercise/Ex_2_2";
import Ex_3_1 from "./exercise/Ex_3_1";
import Ex_3_2 from "./exercise/Ex_3_2";
import * as allQuiz from "./exercise/Ex_3_2";

const title = ReactDOM.createRoot(document.querySelector("title"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Ex_2_2 /> */}
    {/* <Ex_3_1 /> */}
    <allQuiz.Ex_3_2_quiz />
    <allQuiz.Ex_3_2_quizTitle />
    <allQuiz.Ex_3_2_q1 />
    <allQuiz.Ex_3_2_q1Input />
    <allQuiz.Ex_3_2_q2Title />
    <allQuiz.default />
  </React.StrictMode>
);

title.render(
  <React.StrictMode>
    <Ex_2_1 />
  </React.StrictMode>
);

//  import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.querySelector("#root"));

// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
