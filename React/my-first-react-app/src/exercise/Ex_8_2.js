import React from "react";
import styles from "../App.css";

class Ex_8_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { begin: false, giveClass: "begin" };
  }
  changeSize = () => {
    this.setState((prevState) => {
      return {
        giveClass: !prevState.begin ? "beginMove" : "begin",
      };
    });
  };

  displayRemove = () => {
    this.setState((prevState) => {
      return { begin: true, giveClass: "begin" };
    });
  };

  componentDidMount() {
    setTimeout(this.changeSize, 1000);
  }

  componentDidUpdate() {
    if (this.state.begin === false) {
      setTimeout(this.displayRemove, 4000);
    }
  }
  render() {
    return (
      <div>
        <div className={`box1 ${this.state.giveClass}`}></div>
        <div className={`box2 ${this.state.giveClass}`}></div>
        <div className={`box3 ${this.state.giveClass}`}></div>
      </div>
    );
  }
}

export default Ex_8_2;
