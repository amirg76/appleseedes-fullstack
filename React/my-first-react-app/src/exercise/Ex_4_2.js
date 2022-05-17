import styles from "../App.css";

const styleMain = {
  width: 450,
  height: 300,
  marginTop: 200,
  // border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
};

export const MakeCard = (props) => {
  return <div className="card">{props.children}</div>;
};
export const MakeImg = (props) => {
  return <img className="skyImg" src={props.logoUrl} />;
};

export const MakeTitle = (props) => {
  return <h1 className="cardTitle">{props.content}</h1>;
};

export const MakeDescription = (props) => {
  return <h3 className="cardDesc">{props.desc}</h3>;
};

export const MakeLink = (props) => {
  return <a className="cardLink">{props.linkDesc}</a>;
};

const Ex_4_2 = (props) => {
  return <div style={styleMain}>{props.children}</div>;
};
export default Ex_4_2;
