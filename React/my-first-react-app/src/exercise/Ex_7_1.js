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

export class Increment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sum: 0 };
  }

  increase = () => {
    this.setState({ sum: this.state.sum + 1 });
  };
  render() {
    return (
      <span>
        <button style={{ margin: "20px" }} onClick={this.increase}>
          increment{" "}
        </button>
        {this.state.sum}
      </span>
    );
  }
}

class Ex_7_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={styleMain}>{this.props.children}</div>;
  }
}
export default Ex_7_1;
