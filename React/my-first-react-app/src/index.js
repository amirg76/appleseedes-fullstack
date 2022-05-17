import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import styles from "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////////////
import Ex_2_1 from "./exercise/Ex_2_1";
import Ex_2_2 from "./exercise/Ex_2_2";
import Ex_3_1 from "./exercise/Ex_3_1";
import Ex_3_2 from "./exercise/Ex_3_2";
import * as allQuiz from "./exercise/Ex_3_2";
import * as Ex_4_1 from "./exercise/Ex_4_1";
import * as Ex_4_2 from "./exercise/Ex_4_2";
import skyImg1 from "./exercise/images/sky1.jpg";
import skyImg2 from "./exercise/images/sky2.jpg";
import skyImg3 from "./exercise/images/sky3.jpg";
import * as Ex_6_1 from "./exercise/Ex_6_1";
import * as Ex_7_1 from "./exercise/Ex_7_1";
import * as Ex_7_2 from "./exercise/Ex_7_2";
import * as Ex_7_3 from "./exercise/Ex_7_3";
import * as Ex_8_1 from "./exercise/Ex_8_1";
import * as Ex_8_2 from "./exercise/Ex_8_2";
import * as Ex_8_3 from "./exercise/Ex_8_3";
import * as Ex_9_1 from "./exercise/Ex_9_1";

const styleTitle = {
  width: 450,
  height: 200,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 10,
};
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
const ex_4_1_btn_bold = {
  fontWeight: "bold",
};

const title = ReactDOM.createRoot(document.querySelector("title"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Ex_2_2 /> */}
    {/* <Ex_3_1 /> */}
    {/* <title style={styleTitle}> */}
    {/* <allQuiz.Ex_3_2_quiz /> */}
    {/* <allQuiz.Ex_3_2_quizTitle />
      <allQuiz.Ex_3_2_q1 />
      <allQuiz.Ex_3_2_q1Input />
      <allQuiz.Ex_3_2_q2Title />
      <allQuiz.default />
    </title> */}
    {/* ------------------------------------- */}
    {/* <Ex_4_1.default>
      <div style={styleMain}>
        <Ex_4_1.Makebutton text="important" style={{ fontWeight: "bold" }} />
        <Ex_4_1.Makebutton text="Not important" />
      </div>
    </Ex_4_1.default> */}
    {/* ------------------------------------------- */}
    {/* <Ex_4_2.default>
      <Ex_4_2.MakeCard>
        <Ex_4_2.MakeImg logoUrl={skyImg1} />
        <Ex_4_2.MakeTitle content="A random title-1" />
        <Ex_4_2.MakeDescription desc="Random Description-1" />
        <div className="links">
          <Ex_4_2.MakeLink linkDesc="SHARE-1" />
          <Ex_4_2.MakeLink linkDesc="EXPLORE-1" />
        </div>
      </Ex_4_2.MakeCard>

      <Ex_4_2.MakeCard>
        <Ex_4_2.MakeImg logoUrl={skyImg2} />
        <Ex_4_2.MakeTitle content="A random title-2" />
        <Ex_4_2.MakeDescription desc="Random Description-2" />
        <div className="links">
          <Ex_4_2.MakeLink linkDesc="SHARE-2" />
          <Ex_4_2.MakeLink linkDesc="EXPLORE-2" />
        </div>
      </Ex_4_2.MakeCard>
      <Ex_4_2.MakeCard>
        <Ex_4_2.MakeImg logoUrl={skyImg1} />
        <Ex_4_2.MakeTitle content="A random title-3" />
        <Ex_4_2.MakeDescription desc="Random Description-3" />
        <div className="links">
          <Ex_4_2.MakeLink linkDesc="SHARE-3" />
          <Ex_4_2.MakeLink linkDesc="EXPLORE-3" />
        </div>
      </Ex_4_2.MakeCard>
    </Ex_4_2.default> */}
    {/* --------------------------------------- */}
    {/* <Ex_6_1.default>
      <Ex_6_1.MakeCard>
        <Ex_6_1.MakeImg logoUrl={skyImg1} />
        <Ex_6_1.MakeTitle content="A random title-1" />
        <Ex_6_1.MakeDescription desc="Random Description-1" />
        <div className="links">
          <Ex_6_1.MakeLink linkDesc="SHARE-1" />
          <Ex_6_1.MakeLink linkDesc="EXPLORE-1" />
        </div>
      </Ex_6_1.MakeCard>

      <Ex_6_1.MakeCard>
        <Ex_6_1.MakeImg logoUrl={skyImg2} />
        <Ex_6_1.MakeTitle content="A random title-2" />
        <Ex_6_1.MakeDescription desc="Random Description-2" />
        <div className="links">
          <Ex_6_1.MakeLink linkDesc="SHARE-2" />
          <Ex_6_1.MakeLink linkDesc="EXPLORE-2" />
        </div>
      </Ex_6_1.MakeCard>

      <Ex_6_1.MakeCard>
        <Ex_6_1.MakeImg logoUrl={skyImg3} />
        <Ex_6_1.MakeTitle content="A random title-3" />
        <Ex_6_1.MakeDescription desc="Random Description-3" />
        <div className="links">
          <Ex_6_1.MakeLink linkDesc="SHARE-3" />
          <Ex_6_1.MakeLink linkDesc="EXPLORE-3" />
        </div>
      </Ex_6_1.MakeCard>
    </Ex_6_1.default> */}
    {/* ----------------------------------------------- */}
    {/* <Ex_7_1.default>
      <Ex_7_1.Increment />
    </Ex_7_1.default> */}
    {/* --------------------------------------- */}
    {/* <Ex_7_2.default>
      <Ex_7_2.ShowHide />
    </Ex_7_2.default> */}

    {/* <App /> */}
    {/* <Ex_7_3.default>
      <Ex_7_3.Increment />
      <Ex_7_3.Labelsum />
      <Ex_7_3.Decrement />
    </Ex_7_3.default> */}
    {/* ---------------------------------- */}

    {/* <Ex_8_1.default>
      <Ex_8_1.Color />
    </Ex_8_1.default> */}
    {/* ------------------------------------- */}
    {/* <Ex_8_2.default /> */}
    {/* ---------------------------------- */}
    {/* <Ex_8_3.default>
      <Ex_8_3.boxColor />
    </Ex_8_3.default> */}
    {/* ----------------------------------------------- */}
    <Ex_9_1.default>
      <Ex_9_1.boxColor />
    </Ex_9_1.default>
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
