import React from "react";
import styles from "../App.css";

const styleMain = {
  width: 460,
  height: 300,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
};

export class Color extends React.Component {
  constructor(props) {
    super(props);

    this.state = { favoriteColor: "blue" };
  }
  changeColor = () => {
    this.setState((prevState) => {
      return { favoriteColor: "green" };
    });
  };

  componentDidMount() {
    setTimeout(this.changeColor, 1000);
  }

  componentDidUpdate() {
    const id = document.querySelector("#color");
    id.innerText = `The updated favorite color is : ${this.state.favoriteColor} `;
  }
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="color"></div>
      </div>
    );
  }
}
class Ex_8_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={styleMain}>{this.props.children}</div>;
  }
}
export default Ex_8_1;
