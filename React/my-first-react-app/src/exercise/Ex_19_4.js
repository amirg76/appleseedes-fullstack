import React, { useState, useEffect } from "react";
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

const RandomJoke = () => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState([]);
  const [showJoke, setShowJoke] = useState(false);
  const [jokeByCat, setJokeByCat] = useState("");
  const [searchData, setSearchData] = useState([]);

  // export class RandomJoke extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       joke: "",
  //       category: [],
  //       showJoke: false,
  //       jokeByCat: "",
  //       searchData: [],
  //     };
  //   }

  const handleClickCat = (category) => {
    getCategoryData(category);
    setShowJoke(true);
  };

  // handleClickCat = (category) => {
  //   this.getCategoryData(category);
  //   this.setState({ showJoke: true });
  // };

  // handleClick = () => {
  //   this.getData();
  //   this.setState({ showJoke: true });
  // };

  const getCategoryData = async (category) => {
    const categoryJokes = await axios
      .get("https://api.chucknorris.io/jokes/random?category=" + category)
      .then((response) => {
        setJokeByCat(response.data.value);
      });
  };
  // getCategoryData = async (category) => {
  //   const categoryJokes = await axios
  //     .get("https://api.chucknorris.io/jokes/random?category=" + category)
  //     .then((response) => {
  //       this.setState({ jokeByCat: response.data.value });
  //     });
  // };

  const getData = async () => {
    const data = await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        setJoke(response.data.value);
      });
  };
  const handleClick = () => {
    getData();
    setShowJoke(true);
  };
  // getData = async () => {
  //   const data = await axios
  //     .get("https://api.chucknorris.io/jokes/random")
  //     .then((response) => {
  //       this.setState({ joke: response.data.value });
  //     });
  // };

  const getCategory = async () => {
    const category = await axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategory(response.data);
      });
  };

  // componentDidMount() {
  //   this.getCategory();
  // }

  useEffect(() => {
    getCategory();
  }, []);
  const handleInput = async (event) => {
    if (event.key === "Enter") {
      const dataSearch = await axios
        .get(
          "https://api.chucknorris.io/jokes/search?query=" + event.target.value
        )
        .then((response) => {
          console.log(response.data.result);
          setSearchData(response.data.result);
        });
    }
  };
  // render() {
  return (
    <div className="JokeContainer">
      <div>
        <input onKeyPress={handleInput}></input>

        <h1>
          {searchData.map((category, index = 0) => (
            <p key={index + 1}>{category.value}</p>
          ))}
        </h1>
      </div>
      <div className="joke">
        <button className="jokeBtn" onClick={handleClick}>
          RANDOM JOKE
        </button>
        <p className="jokeContent">{joke}</p>
      </div>

      <div className="jokeCat">
        <h3>Joke By Category</h3>
        <div>
          {category.map((category, index = 0) => (
            <button
              key={index + 1}
              className="catJokeBtn"
              onClick={() => handleClickCat(category)}
            >
              {category}
            </button>
          ))}
          <p>{jokeByCat}</p>
        </div>
      </div>
    </div>
  );
  // }
};
// };
class Ex_19_4 extends React.Component {
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
export default Ex_19_4;
