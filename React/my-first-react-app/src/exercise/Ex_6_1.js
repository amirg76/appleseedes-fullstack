import React from "react";
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

export class MakeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}
export class MakeImg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img className="skyImg" src={this.props.logoUrl} />;
  }
}

export class MakeTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1 className="cardTitle">{this.props.content}</h1>;
  }
}

export class MakeDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3 className="cardDesc">{this.props.desc}</h3>;
  }
}

export class MakeLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a className="cardLink">{this.props.linkDesc}</a>;
  }
}

class Ex_6_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={styleMain}>{this.props.children}</div>;
  }
}
export default Ex_6_1;
