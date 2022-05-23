import React from "react";
import styles from "../App.css";

const styleMain = {
  width: 460,
  height: 300,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
};
export class RefFocus extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
      </div>
    );
  }
}

class Ex_14_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styleMain}>
        <RefFocus />
      </div>
    );
  }
}
export default Ex_14_1;
