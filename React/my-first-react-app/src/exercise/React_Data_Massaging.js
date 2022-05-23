import React from "react";
import styles from "../App.css";
import { data } from "./Data.";

const styleMain = {
  width: 450,
  height: 300,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  // padding: 10,
};

export class HandleData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataArr: [] };
  }
  arrayName = (array) => {
    return array.map((e) => e.name);
  };

  arrayBorn = (array) => {
    let newArr = [];
    array.forEach((e) => {
      let birthdayShort = e.birthday.slice(
        e.birthday.length - 4,
        e.birthday.length
      );
      if (birthdayShort < 1990) newArr.push(e);
    });
    return newArr;
  };
  sortData = (array) => {
    let sortArr = this.arrayName(array);
    sortArr = this.arrayBorn(array);
    this.setState({
      dataArr: sortArr,
    });
  };
  componentDidMount() {
    this.sortData(data);
  }

  render() {
    return (
      <>
        <NameSort names={this.state.dataArr} />
        <Card names={this.state.dataArr} />
      </>
    );
  }
}

export class NameSort extends React.Component {
  render() {
    return (
      <>
        {this.props.names.map((element, index) => (
          <div key={index}>{element.name}</div>
        ))}
      </>
    );
  }
}
export class Card extends React.Component {
  render() {
    return (
      <>
        {this.props.names.map((element, index) => (
          <div key={index}>
            {element.name}, {element.birthday},{" "}
            {element.favoriteFoods.meats.map((meats) => "," + meats)},{" "}
            {element.favoriteFoods.fish.map((fish) => "," + fish)}
          </div>
        ))}
      </>
    );
  }
}

class React_Data_Massaging extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styleMain}>
        <HandleData />
      </div>
    );
    {
      /* return <div style={styleMain}>{this.props.children}</div>; */
    }
  }
}
export default React_Data_Massaging;
