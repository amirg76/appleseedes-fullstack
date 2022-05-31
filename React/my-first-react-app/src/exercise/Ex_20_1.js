import React, { useState, useEffect } from "react";
import axios from "axios";

const CancelRequest = () => {
  const [isClick, setIsClick] = useState(true);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <button onClick={handleClick}>
        {isClick ? "Display Data" : "Hide Data"}
      </button>
      <div>{!isClick && <ShowData />}</div>
    </>
  );
};

const ShowData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const controller = new AbortController();
    const search = async () => {
      try {
        const { data } = await axios.get(
          "http://go-vegan.co.il/API2.0/meals.php?lat=32.0731082&lng=34.7805689&radius=5000&address=%D7%94%D7%95%D7%91%D7%A8%D7%9E%D7%9F+18%2C+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95&version=4&uuid=563909759323956&_=1653936882606",
          {
            signal: controller.signal,
          }
        );
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    search();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div style={{ width: "40vw", height: "50vh" }}>{JSON.stringify(data)}</div>
  );
};

class Ex_20_1 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <CancelRequest />
      </div>
    );
  }
}
export default Ex_20_1;
