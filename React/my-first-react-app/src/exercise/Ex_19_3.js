import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = () => {
  const [algoliaData, setAlgoliaData] = useState([]);
  const [resError, setResError] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const search = async (findKey) => {
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${findKey}`
      );
      console.log(data);
      const algoliaFilter = data.hits.map((element) => element.title);
      setAlgoliaData(algoliaFilter);
    } catch (err) {
      console.log(err);
      setResError(err.message);
    }
    setIsSpinning(false);
  };

  useEffect(() => {
    search("hooks");
  }, []);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    search(searchValue);
  };
  const handleData = () => {
    return algoliaData.map((element) => (
      <div style={{ fontSize: "1vw", margin: "0.5vw" }} key={element}>
        {element}
      </div>
    ));
  };

  return (
    <>
      <div>
        <input
          onChange={handleInput}
          placeholder="Query"
          value={searchValue}
        ></input>
        <button onClick={handleClick}>Search</button>
        {isSpinning && (
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <div className="display-continents">
        {handleData()}
        {resError && <h2>{resError}</h2>}
      </div>
    </>
  );
};
class Ex_19_3 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <Countries />
      </div>
    );
  }
}
export default Ex_19_3;
