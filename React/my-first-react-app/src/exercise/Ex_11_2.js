import React from "react";
import styles from "../App.css";

const styleMain = {
  width: 460,
  height: 300,
  marginTop: 200,
  // border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 10,
};

export class MakeCheckBoxes extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.checked} />
        {this.props.text}
      </div>
    );
  }
}

export class ChangeCheckBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MakeCheckBoxes text="I read the term of the app" />

        <MakeCheckBoxes text="I accept the term of the app" />

        <MakeCheckBoxes
          text="I want to get the weekly news letter"
          checked="checked"
        />

        <MakeCheckBoxes
          text="I want to get sales and offers"
          checked="checked"
        />
      </div>
    );
  }
}

class Ex_11_2 extends React.Component {
  render() {
    return (
      <div style={styleMain}>
        <ChangeCheckBoxes />
      </div>
    );
  }
}
export default Ex_11_2;
