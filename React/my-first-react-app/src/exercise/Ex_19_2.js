import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = () => {
  const [continents, setContinents] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState([]);

  // console.log(title)

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");

        const continents = data.map((element) => element.name.common);
        setContinents(continents);
      } catch (err) {
        console.log(err);
      }
    };
    search();
  }, []);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFilter = () => {
    return continents.filter((element) => {
      if (searchValue === "") return element;
      else if (element.toLowerCase().startsWith(searchValue.toLowerCase()))
        return element;
    });
  };
  useEffect(() => {
    handleFilter();
    setFilter(handleFilter());
  }, [searchValue, continents]);
  return (
    <>
      <div>
        <input onChange={handleInput}></input>
        <button>Click</button>
      </div>
      <div className="display-continents">
        {filter.map((element, index) => {
          return (
            <div key={index} style={{ margin: "1vw" }}>
              {element}
            </div>
          );
        })}
      </div>
    </>
  );
};
class Ex_19_2 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <Countries />
      </div>
    );
  }
}
export default Ex_19_2;
