import React from "react";
import { API } from "./Api";
import axios from "axios";
import styles from "./Ex_17_1.css";
import Player from "./Player";

export class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersArr: [],
      newPlayerName: "",
      newPlayerImg: "",
      isSpinning: true,
    };
  }
  async componentDidMount() {
    try {
      const { data } = await API.get("/players");
      this.setState({ playersArr: data, isSpinning: false }, () => {
        console.log(this.state.playersArr);
      });
    } catch (e) {
      console.log(e);
    }
  }
  showPlayers = () => {
    return this.state.playersArr.map(({ name, avatar, id }) => {
      return (
        <Player
          key={id}
          name={name}
          img={avatar}
          id={id}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      );
    });
  };
  handleCreate = async () => {
    this.setState({ isSpinning: true });
    const newPlayer = {
      name: this.state.newPlayerName,
      avatar: this.state.newPlayerImg,
    };
    try {
      const postedData = await API.post("/players", newPlayer);
      console.log(postedData);
      this.setState((prev) => {
        return {
          playersArr: [...prev.playersArr, postedData.data],
          newPlayerName: "",
          newPlayerImg: "",
          isSpinning: false,
        };
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  handleDelete = async (id) => {
    this.setState({ isSpinning: true });
    try {
      await API.delete(`/players/${id}`);
      this.setState((prev) => {
        const newPlayersArr = prev.playersArr.filter(
          (player) => player.id !== id
        );
        return { playersArr: newPlayersArr, isSpinning: false };
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleUpdate = async (id, newName) => {
    this.setState({ isSpinning: true });
    const playerToUpdate = this.state.playersArr.find(
      (player) => player.id === id
    );
    const updatedPlayer = { ...playerToUpdate, name: newName };
    const { data } = await API.put(`/players/${id}`, updatedPlayer);
    this.setState((prev) => {
      return {
        playersArr: prev.playersArr.map((player) => {
          if (player.id === id) {
            return data;
          }
          return player;
        }),
        isSpinning: false,
      };
    });
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.id]: target.value, isSpinning: false });
  };
  render() {
    return (
      <div className="wrapper">
        {this.state.isSpinning ? (
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <input
              id="newPlayerName"
              onChange={this.handleInputChange}
              value={this.state.newPlayerName}
              placeholder="New player name"
            />
            <input
              id="newPlayerImg"
              onChange={this.handleInputChange}
              value={this.state.newPlayerImg}
              placeholder="New player image"
            />
            <button onClick={this.handleCreate}>Create</button>
            <div className="item-wrapper">{this.showPlayers()}</div>
          </>
        )}
      </div>
    );
  }
}

class Ex_17_1 extends React.Component {
  render() {
    return (
      <div className="styleMain1">
        <MainApp />
      </div>
    );
  }
}
export default Ex_17_1;
