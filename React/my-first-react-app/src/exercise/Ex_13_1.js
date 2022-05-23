import React from "react";
import styles from "../App.css";
import axios from "axios";
const styleMain = {
  // width: 1060,
  // height: 300,
  // marginTop: 200,
  border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  // padding: 10,
};

export class RandomAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatarArr: [] };
  }

  getAvatarData = async () => {
    return await axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        console.log(response.data.results);
        return response.data.results;
      });
  };

  handleAvatarData = async () => {
    const avatarArr = await this.getAvatarData();
    const sortAvatar = avatarArr.map((element) => {
      return {
        picture: element.picture.large,
        firstName: element.name.first,
        lastName: element.name.last,
        cell: element.cell,
      };
    });
    this.setState({
      avatarArr: sortAvatar,
    });
    console.log(this.state.avatarArr);
  };
  componentDidMount() {
    this.handleAvatarData();
  }
  handleInput = (event) => {
    const nameTofind = event.key;
    const sortByName = this.state.avatarArr.filter((element) => {
      const arrName = [...element.firstName];
      return arrName.find((name) => nameTofind === name);
    });
    console.log(sortByName);
    this.setState({
      avatarArr: sortByName,
    });
  };

  render() {
    return (
      <>
        <input onChange={this.handleInput}></input>
        <button>Filter</button>
        <RenderAvatar arrToRender={this.state.avatarArr} />
      </>
    );
  }
}

export class RenderAvatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.arrToRender.map((element) => (
          <div className="avataCard avatarImg" key={element.cell}>
            <h1>
              {element.firstName} {element.lastName}
            </h1>
            <img className="avatarImg" src={element.picture}></img>
          </div>
        ))}
      </>
    );
  }
}

class Ex_13_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styleMain}>
        <RandomAvatar />
      </div>
    );
    {
      /* return <div style={styleMain}>{this.props.children}</div>; */
    }
  }
}
export default Ex_13_1;
