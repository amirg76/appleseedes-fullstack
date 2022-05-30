import React, { useState } from "react";

const TextString = ({ string, length }) => {
  const [newString, setNewString] = useState("");
  const [show, setShow] = useState(false);

  const firstStr = string.slice(0, length);
  console.log(firstStr);
  const lastStr = string.slice(length, string.length);
  console.log(lastStr);
  return (
    <div>
      {firstStr}
      <span className="toggle-str" onClick={() => setShow(!show)}>
        {!show ? "...read more" : ""}
      </span>
      {!show ? "" : lastStr}
      <span className="toggle-str" onClick={() => setShow(!show)}>
        {show ? "show less" : ""}
      </span>
    </div>
  );
};

const MakeString = () => {
  const [lengthOfStr, setLengthOfStr] = useState(56);
  const [str, setStr] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto voluptas provident quis, dolorem magnam at labore illo, porro sapiente consequuntur asperiores explicabo amet nobis itaque, facilis nostrum non perferendis?"
  );
  return (
    <>
      <TextString length={lengthOfStr} string={str} />
    </>
  );
};
class Ex_18_1 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <MakeString />
      </div>
    );
  }
}
export default Ex_18_1;
