import React, { Component } from 'react';
import Checkbox from './Checkbox';

export default class Check extends Component {
  state = { c1: true, c2: false, c3: false, c4: true };
  handleChange = (id) => {
    this.setState((prev) => {
      return { [id]: !prev[id] };
    });
  };
  render() {
    return (
      <div>
        <Checkbox
          id='c1'
          text='Terms1'
          checkedC={this.state.c1}
          handleChange={this.handleChange}
        />
        <Checkbox
          id='c2'
          text='Terms2'
          checkedC={this.state.c2}
          handleChange={this.handleChange}
        />
        <Checkbox
          id='c3'
          text='Terms3'
          checkedC={this.state.c3}
          handleChange={this.handleChange}
        />
        <Checkbox
          id='c4'
          text='Terms4'
          checkedC={this.state.c4}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
