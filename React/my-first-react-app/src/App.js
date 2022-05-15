import logo from "./logo.svg";
import "./App.css";
import React from "react";

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
  }
  //   render() {
  //     return <div className="">Hello World From App Compement</div>;
  //   }
  // }

  render() {
    return <Header />;
  }
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
