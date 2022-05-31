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
import * as Ex_11_1 from "./exercise/Ex_11_1";
import * as Ex_11_2 from "./exercise/Ex_11_2";
import * as Ex_11_3 from "./exercise/Ex_11_3";
import * as Ex_12_1 from "./exercise/Ex_12_1";
import * as Ex_13_1 from "./exercise/Ex_13_1";
import * as React_Data_Massaging from "./exercise/React_Data_Massaging";
import * as Ex_14_1 from "./exercise/Ex_14_1";
import * as Ex_14_2 from "./exercise/Ex_14_2";
import * as Ex_16_1 from "./exercise/Ex_16_1";
import * as To_do_app from "./exercise/To_do_app";
import * as Ex_17_1 from "./exercise/Ex_17_1/Ex_17_1";
import * as Ex_18_1 from "./exercise/Ex_18_1";
import * as Ex_18_2 from "./exercise/Ex_18_2";
import * as Ex_18_3 from "./exercise/Ex_18_3";
import * as Ex_18_4 from "./exercise/Ex_18_4";
import * as Ex_19_1 from "./exercise/Ex_19_1";
import * as Ex_19_2 from "./exercise/Ex_19_2";
import * as Ex_19_3 from "./exercise/Ex_19_3";
import * as Ex_19_4 from "./exercise/Ex_19_4";
import * as Ex_20_1 from "./exercise/Ex_20_1";
import * as Ex_21_1 from "./exercise/Ex_21_1";
import * as Ex_21_2 from "./exercise/Ex_21_2";
import * as Ex_21_3 from "./exercise/Ex_21_3";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
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
    {/* <Ex_11_1.default /> */}
    {/* -------------------------------------- */}
    {/* <Ex_11_2.default /> */}
    {/* ------------------------------------------- */}
    {/* <Ex_11_3.default /> */}
    {/* ------------------------- */}
    {/* <Ex_12_1.default /> */}
    {/* ----------------------- */}
    {/* <Ex_13_1.default /> */}
    {/* ----------------------- */}
    {/* <React_Data_Massaging.default /> */}
    {/*----------------------- */}
    {/* <Ex_14_1.default /> */}
    {/* -------------------------------- */}
    {/* <Ex_14_2.default /> */}
    {/* --------------------------------- */}
    {/* <Ex_16_1.default /> */}
    {/* --------------------------------- */}
    {/* <To_do_app.default /> */}
    {/* ------------------------------- */}
    {/* <Ex_17_1.default /> */}
    {/* -------------------------- */}
    {/* <Ex_18_1.default /> */}
    {/* ------------------------------- */}
    {/* <Ex_18_2.default /> */}
    {/* --------------------------------- */}
    {/* <Ex_18_3.default /> */}
    {/* -------------------------------- */}
    {/* <Ex_18_4.default /> */}
    {/* ------------------------------------ */}
    {/* <Ex_19_1.default /> */}
    {/* -------------------------------------- */}
    {/* <Ex_19_2.default /> */}
    {/* ---------------------------------------- */}
    {/* <Ex_19_3.default /> */}
    {/* ------------------------------------------- */}
    {/* <Ex_19_4.default /> */}
    {/* ------------------------------------------ */}
    {/* <Ex_20_1.default /> */}
    {/* ---------------------------------------- */}
    {/* <Ex_21_1.default /> */}
    {/* -------------------------------------------- */}
    {/* <Ex_21_2.default /> */}
    {/* ---------------------------------------------- */}
    {/* <Ex_21_3.default /> */}
  </>
  // {/* </React.StrictMode> */}
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
