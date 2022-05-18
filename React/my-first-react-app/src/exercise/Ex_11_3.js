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
  alignItems: "flex-start",
  padding: 10,
};
const styleForm = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const textErea = {
  margin: "1px",
  height: 5,
};

export class MakeTextArea extends React.Component {
  handleChange = ({ target }) => {
    console.log(target.value);
    console.log(target.id);
    this.props.handleInput(target.value, target.id);
  };
  render() {
    return (
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {this.props.text}
        <textarea
          className="textAreaForm"
          onChange={this.handleChange}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}

export class MakeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = ({ target }) => {
    console.log(target.value);
    console.log(target.id);
    this.props.handleInput(target.value, target.id);
  };
  render() {
    return (
      <div>
        {this.props.text}
        <input
          className="inputForm"
          onChange={this.handleChange}
          value={this.props.value}
          id={this.props.id}
        />
      </div>
    );
  }
}

export class BuildForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      selectChoise: "",
      inputArea: "",
      getInput1: (text, id) => {
        this.setState(() => {
          return { input1: text };
        });
      },
      getInput2: (text, id) => {
        this.setState(() => {
          return { input2: text };
        });
      },
      getArea: (text, id) => {
        this.setState(() => {
          return { inputArea: text };
        });
      },
      handleChangeSelect: ({ target }) => {
        console.log(target.value);
      },
    };
  }

  render() {
    return (
      <div>
        <form style={styleForm}>
          <MakeInput
            text="First Name"
            id="1"
            value={this.state.input1}
            handleInput={this.state.getInput1}
          />
          <MakeInput
            text="Last Name"
            id="2"
            value={this.state.input2}
            handleInput={this.state.getInput2}
          />
          <select style={{ margin: 10 }}>
            <option value="0" onChange={this.handleChangeSelect}>
              0-15
            </option>
            <option value="1" onChange={this.handleChangeSelect}>
              15-40
            </option>
            <option value="2" onChange={this.handleChangeSelect}>
              40-60
            </option>
            <option value="3" onChange={this.handleChangeSelect}>
              60-more
            </option>
          </select>

          <MakeTextArea
            text="Free Text"
            value={this.state.inputArea}
            handleInput={this.state.getArea}
          />
          <button
            style={{
              height: 50,
              width: 100,
              marginLeft: 70,
              marginTop: 10,
            }}
            type="submit"
          >
            Continue
          </button>
        </form>

        <form>
          <div
            style={{
              marginLeft: 130,
            }}
          >
            <h2>{this.state.input1}</h2>
            <h2>{this.state.input2}</h2>
            <h2>0-16</h2>
            <h1>{this.state.inputArea}</h1>
          </div>
          <div
            style={{
              marginLeft: 90,
            }}
          >
            <button type="button">Back</button>
            <button>Send Survey</button>
          </div>
        </form>
      </div>
    );
  }
}

class Ex_11_3 extends React.Component {
  render() {
    return (
      <div style={styleMain}>
        <BuildForm />
      </div>
    );
  }
}
export default Ex_11_3;
