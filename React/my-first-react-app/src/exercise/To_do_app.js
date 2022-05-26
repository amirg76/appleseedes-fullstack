import React from "react";
import styles from "../App.css";
const data = [
  { first: "aaa1", last: "bbb1", age: 10, year: 2002, id: 1 },
  { first: "aaa2", last: "bbb2", age: 11, year: 2003, id: 2 },
  { first: "aaa3", last: "bbb3", age: 12, year: 2004, id: 3 },
  { first: "aaa4", last: "bbb4", age: 13, year: 2005, id: 4 },
];

export class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: "", last: "", age: "", year: "" };
  }
  handleOnChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };
  handleSendUpdate = () => {
    const UpdateObj = {
      id: this.props.id,
      first: this.state.first !== "" ? this.state.first : this.props.first,
      last: this.state.last !== "" ? this.state.last : this.props.last,
      age: this.state.age !== "" ? this.state.age : this.props.age,
      year: this.state.year !== "" ? this.state.year : this.props.year,
    };
    this.setState((prevState) => {
      return {
        first: "",
        last: "",
        age: "",
        year: "",
      };
    });

    return UpdateObj;
  };

  render() {
    return (
      <>
        <div className="display-card">
          <p>{`first:  ${this.props.first}`}</p>
          <p>{`last:  ${this.props.last}`}</p>
          <p>{`age:  ${this.props.age}`}</p>
          <p>{`year:  ${this.props.year}`}</p>
          <input
            onChange={this.handleOnChange}
            id="first"
            value={this.state.first}
          />
          <input
            onChange={this.handleOnChange}
            id="last"
            value={this.state.last}
          />
          <input
            onChange={this.handleOnChange}
            id="age"
            value={this.state.age}
          />
          <input
            onChange={this.handleOnChange}
            id="year"
            value={this.state.year}
          />
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            delete
          </button>
          <button
            onClick={() => this.props.handleUpdate(this.handleSendUpdate())}
          >
            update
          </button>
        </div>
      </>
    );
  }
}
export class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      age: "",
      year: "",
      id: "",
      dataArr: [],
    };
  }
  componentDidMount() {
    this.setState({ dataArr: data });
  }

  displayData = () => {
    return this.state.dataArr.map((dataObj) => (
      <DisplayData
        key={dataObj.id}
        first={dataObj.first}
        last={dataObj.last}
        id={dataObj.id}
        age={dataObj.age}
        year={dataObj.year}
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
      />
    ));
  };

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };
  handleCreate = () => {
    const newItem = {
      first: this.state.first,
      last: this.state.last,
      age: this.state.age,
      year: this.state.year,
      id: Math.random().toString(),
    };
    this.setState((prev) => {
      return {
        dataArr: [...prev.dataArr, newItem],
        first: "",
        last: "",
        age: "",
        year: "",
      };
    });
  };
  //! DELETE
  handleDelete = (id) => {
    this.setState((prevState) => {
      const arrOfObjAfterDelete = prevState.dataArr.filter(
        (obj) => obj.id !== id
      );
      return { dataArr: arrOfObjAfterDelete };
    });
  };
  //! UPDATE
  handleUpdate = ({ id, first, last, age, year }) => {
    this.setState((prevState) => {
      const arrOfObjAfterDelete = prevState.dataArr.map((obj) => {
        if (obj.id === id) {
          return { id, first, last, age, year };
        } else {
          return obj;
        }
      });
      return { dataArr: arrOfObjAfterDelete };
    });
  };
  render() {
    return (
      <>
        <form className="form-display">
          <label>add first</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.dataArr.first}
            id="first"
          />
          <label>add last</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.dataArr.last}
            id="last"
          />
          <label>add age</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.dataArr.age}
            id="age"
          />
          <label>add year</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.dataArr.year}
            id="year"
          />
          <button
            type="button"
            className="submitBtn"
            onClick={this.handleCreate}
          >
            Submit
          </button>
        </form>

        <div className="display-wrapper">{this.displayData()}</div>
      </>
    );
  }
}

class To_do_app extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MainForm />
      </div>
    );
  }
}
export default To_do_app;
