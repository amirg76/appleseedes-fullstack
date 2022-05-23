import React, { Component } from 'react';

//todo Controlled forms!!!!
export default class App extends Component {
  state = { input1: '', input2: '' };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`send ${this.state.input1} and ${this.state.input2}`);
  };

  handleIn1Change = ({ target }) => {
    this.setState({ input1: target.value });
  };
  handleIn2Change = ({ target }) => {
    this.setState({ input2: target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleIn1Change} value={this.state.input1} />
          <input onChange={this.handleIn2Change} value={this.state.input2} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
