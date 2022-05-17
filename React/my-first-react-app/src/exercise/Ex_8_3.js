import React from "react";
import styles from "../App.css";

const styleMain = {
  width: 460,
  height: 300,
  marginTop: 200,
  // border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
};
export class boxColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      colorArr: [
        "boxPurple",
        "boxRed",
        "boxYellow",
        "boxGreen",
        "boxBlue",
        "boxCircle",
      ],
      giveColor: "",
    };
  }
  changeColor = () => {
    this.setState((prevState) => {
      return {
        giveColor: this.state.colorArr[this.state.counter],
      };
    });
  };

  displayNext = () => {
    this.setState((prevState) => {
      return {
        giveColor: this.state.colorArr[this.state.counter],
        counter: this.state.counter + 1,
      };
    });
  };

  componentDidMount() {
    setTimeout(this.changeColor, 500);
  }

  componentDidUpdate() {
    if (this.state.counter < 6) {
      setTimeout(this.displayNext, 500);
    }
  }
  render() {
    return (
      <div>
        <div className={`boxcolor ${this.state.giveColor}`}></div>
      </div>
    );
  }
}

class Ex_8_3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={styleMain}>{this.props.children}</div>;
  }
}
export default Ex_8_3;
