import React, { useState, useEffect } from "react";
import axios from "axios";

const SimpleFetch = () => {
  const [title, setTitle] = useState([]);
  const [director, setDirector] = useState("");

  console.log(title);

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await axios.get(
          "https://swapi.dev/api/films/?&format=json"
        );

        setTitle(data.results);

        // setTitle(data.results);
        // setDirector(data.results.director);
      } catch (err) {
        console.log(err);
      }
    };
    search();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        {title.map((element) => {
          return (
            <div style={{ margin: "10vw" }} key={element.title}>
              <h4>Title</h4>

              <div>{element.title}</div>

              <h4>Director</h4>
              <div>{element.director}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
class Ex_19_1 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <SimpleFetch />
      </div>
    );
  }
}
export default Ex_19_1;
