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
      spinnerArr: ["spinner", "spinner2", "bouncer2"],
      giveSpinner: "",
    };
  }
  changeSpinner = () => {
    this.setState((prevState) => {
      return {
        giveSpinner: this.state.spinnerArr[this.state.counter],
      };
    });
  };

  displayNext = () => {
    this.setState((prevState) => {
      return {
        giveSpinner: this.state.spinnerArr[this.state.counter],
        counter: this.state.counter + 1,
      };
    });
  };

  componentDidMount() {
    setTimeout(this.changeSpinner, 2000);
  }

  componentDidUpdate() {
    if (this.state.counter < 4) {
      setTimeout(this.displayNext, 2000);
    }
  }
  render() {
    return (
      <div>
        <div className={this.state.giveSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

class Ex_9_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={styleMain}>{this.props.children}</div>;
  }
}
export default Ex_9_1;
