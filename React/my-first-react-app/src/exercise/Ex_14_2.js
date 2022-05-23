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
export class RefCopy extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  componentDidMount() {}
  clickHandle = () => {
    console.log(this.selectRef);
    this.selectRef.current.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <h1>What is the menning of life?</h1>
        <div className="flexCol">
          <textarea
            style={{ width: "300px", height: "100px" }}
            ref={this.selectRef}
          />
          <button onClick={this.clickHandle}>Copy</button>
        </div>
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
        <RefCopy />
      </div>
    );
  }
}
export default Ex_14_1;
