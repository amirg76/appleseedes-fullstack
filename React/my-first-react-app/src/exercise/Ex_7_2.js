import React from "react";
import styles from "../App.css";

const styleMain = {
  width: 180,
  height: 180,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
};
const styleBox1 = {
  backgroundColor: "yellow",
  width: 100,
  height: 100,
  margin: 15,
  display: "inline-block",
};
const fackBox1 = {
  width: 100,
  height: 100,
  margin: 15,
  display: "inline-block",
};
const hidden = {
  display: "none",
};
const showHideBtn = {
  width: 80,
  height: 25,
};

export class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showing: true };
  }

  showHideBox = () => {
    if (this.state.showing) {
      return this.setState({ showing: false });
    }
    return this.setState({ showing: true });
  };
  render() {
    const { showing } = this.state;
    return (
      <div>
        <button style={showHideBtn} onClick={this.showHideBox}>
          show/hide
        </button>
        {showing ? <div style={styleBox1}></div> : <div style={fackBox1}></div>}
      </div>
    );
  }
}

class Ex_7_2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={styleMain}>{this.props.children}</div>;
  }
}
export default Ex_7_2;
