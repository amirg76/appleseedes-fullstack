// import React from 'react';
//! Not rendering
// function Ex7() {
//   let num = 0;

//   const handleClick = () => {
//     num++;
//     console.log(num);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Increment</button>
//       <h2>{num}</h2>
//     </div>
//   );
// }

// export default Ex7;
import React, { Component } from 'react';

class Ex71 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { num: 0 };
  // }
  state = { num: 0 };

  handleClick = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return { num: prevState.num + 1 };
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Increment</button>
          <h2>{this.state.num}</h2>
        </div>
      </div>
    );
  }
}
export default Ex71;
