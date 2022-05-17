import React, { Component } from 'react';
import './style.css';

export default class Ex73 extends Component {
  state = { num: 0, labelColor: 'black' };

  handleClick = ({ target: { id } }) => {
    // let bool = 10;
    // let addNum = 0;
    // if (id === 'inc') {
    //   bool = this.state.num < 10;
    //   addNum = 1;
    // } else {
    //   bool = this.state.num > -10;
    //   addNum = -1;
    // }
    this.setState((prevState) => {
      const bool = id === 'inc' ? prevState.num < 10 : prevState.num > -10;
      const addNum = id === 'inc' ? 1 : -1;
      return {
        num: bool ? prevState.num + addNum : prevState.num,
        labelColor:
          prevState.num + addNum === 0
            ? 'black'
            : prevState.num + addNum > 0
            ? 'green'
            : 'red',
      };
    });
  };
  //   handleIncrement = () => {
  //     this.setState(
  //       (prevState) => {
  //         return { num: prevState.num < 10 ? prevState.num + 1 : prevState.num };
  //       },
  //       () => {
  //         this.setLabelColor();
  //       }
  //     );
  //   };

  //   handleDecrement = () => {
  //     this.setState(
  //       (prevState) => {
  //         return { num: prevState.num > -10 ? prevState.num - 1 : prevState.num };
  //       },
  //       () => {
  //         this.setLabelColor();
  //       }
  //     );
  //   };

  //   setLabelColor = () => {
  //     return this.state.num === 0
  //       ? this.setState({ labelColor: 'black' })
  //       : this.state.num > 0
  //       ? this.setState({ labelColor: 'green' })
  //       : this.setState({ labelColor: 'red' });
  //   };

  render() {
    return (
      <div>
        <label
          className={`myLabel ${this.state.labelColor}`}
          //   style={{
          //     color:
          //       this.state.num === 0
          //         ? 'black'
          //         : this.state.num > 0
          //         ? 'green'
          //         : 'red',
          //   }}
        >
          {this.state.num}
        </label>
        <button id='inc' onClick={this.handleClick}>
          Increment
        </button>
        <button id='dec' onClick={this.handleClick}>
          Decrement
        </button>
      </div>
    );
  }
}
