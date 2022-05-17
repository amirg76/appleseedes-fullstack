import logo from "./logo.svg";
import "./App.css";
import React from "react";
import * as Ex_7_3 from "./exercise/Ex_7_3";

// React.createElement("a", {
//   className: "",
//   id: "",
//   children: [
//     React.cloneElement("span", {
//       className: "",
//       id: "",
//       children: ["simple text"],
//     }),
//   ],
// });
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  onChangeCounter(newCounter) {
    this.setState({ counter: newCounter });
  }
  //   render() {
  //     return <div className="">Hello World From App Compement</div>;
  //   }
  // }

  render() {
    return;
    <Ex_7_3.default>
      <Ex_7_3.Increment changeCounter={this.onChangeCounter.bind(this)} />
      <Ex_7_3.Labelsum counter={this.state.counter} />
      <Ex_7_3.Decrement changeCounter={this.onChangeCounter.bind(this)} />
    </Ex_7_3.default>;
  }
  // render() {
  //   return <Header />;
  // }
}

// class Header extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <h1>Hello World From Header Compement</h1>;
//   }
// }

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hello world",
    };
  }
  render() {
    return <h1>{this.state.text}</h1>;
  }
}
export default App;
// function App() dd
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
