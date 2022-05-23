import React from "react";
import styles from "../App.css";
import axios from "axios";
const styleMain = {
  width: 1060,
  height: 300,
  marginTop: 200,
  border: "1px solid black",
  display: "flex",
  // flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 10,
};

export class RandomJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      category: [],
      showJoke: false,
      jokeByCat: "",
      searchData: [],
    };
  }

  handleClickCat = (category) => {
    this.getCategoryData(category);
    this.setState({ showJoke: true });
  };

  handleClick = () => {
    this.getData();
    this.setState({ showJoke: true });
  };

  getCategoryData = async (category) => {
    const categoryJokes = await axios
      .get("https://api.chucknorris.io/jokes/random?category=" + category)
      .then((response) => {
        this.setState({ jokeByCat: response.data.value });
      });
  };
  getData = async () => {
    const data = await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        this.setState({ joke: response.data.value });
      });
  };

  getCategory = async () => {
    const category = await axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        this.setState({ category: response.data });
      });
  };

  componentDidMount() {
    this.getCategory();
  }

  handleInput = async (event) => {
    if (event.key === "Enter") {
      const dataSearch = await axios
        .get(
          "https://api.chucknorris.io/jokes/search?query=" + event.target.value
        )
        .then((response) => {
          console.log(response.data.result);
          this.setState({ searchData: response.data.result });
        });
    }
  };
  render() {
    return (
      <div className="JokeContainer">
        <div>
          <input onKeyPress={this.handleInput}></input>
          <h1>
            {this.state.searchData.map((category, index = 0) => (
              <p key={index + 1}>{category.value}</p>
            ))}
          </h1>
        </div>
        <div className="joke">
          <button className="jokeBtn" onClick={this.handleClick}>
            RANDOM JOKE
          </button>
          <p className="jokeContent">{this.state.joke}</p>
        </div>

        <div className="jokeCat">
          <h3>Joke By Category</h3>
          <div>
            {this.state.category.map((category, index = 0) => (
              <button
                key={index + 1}
                className="catJokeBtn"
                onClick={() => this.handleClickCat(category)}
              >
                {category}
              </button>
            ))}
            <p>{this.state.jokeByCat}</p>
          </div>
        </div>
      </div>
    );
  }
}

class Ex_12_1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styleMain}>
        <RandomJoke />
      </div>
    );
  }
}
export default Ex_12_1;
