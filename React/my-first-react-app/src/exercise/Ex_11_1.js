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

export class MakeButton extends React.Component {
  handelClick = () => {
    this.props.takeColor(this.props.backColor);
  };
  render() {
    return (
      <div>
        <button
          className="colorButton"
          style={{ backgroundColor: this.props.backColor }}
          onClick={this.handelClick}
        >
          {this.props.backColor}
        </button>
      </div>
    );
  }
}

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      giveColor: ["blue", "red", "yellow"],
      clickColor: "",
      getColor: (choiseColor) => {
        this.setState(() => {
          return {
            clickColor: choiseColor,
          };
        });
      },
    };
  }

  render() {
    return (
      <div>
        {this.state.giveColor.map((color, index) => {
          return (
            <MakeButton
              backColor={this.state.giveColor[index]}
              takeColor={this.state.getColor}
              key={color}
            />
          );
        })}
        <h1>The color selected is:{this.state.clickColor}</h1>
      </div>
    );
  }
}

class Ex_11_1 extends React.Component {
  render() {
    return (
      <div style={styleMain}>
        <CustomButton />
      </div>
    );
  }
}
export default Ex_11_1;
