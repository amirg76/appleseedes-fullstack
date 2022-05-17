import React, { Component } from 'react';
import './style.css';
export default class Ex72 extends Component {
  state = { display: 'none', isHidden: false };

  handleShowHide = () => {
    this.setState((prevState) => {
      //   return { display: prevState.display === 'none' ? 'block' : 'none' };
      return { isHidden: !prevState.isHidden };
    });
  };

  render() {
    return (
      <div className='box'>
        <button onClick={this.handleShowHide}>Show / Hide</button>
        {/* <div
          className='inner-box'
          style={{ display: this.state.display }}
        ></div> */}

        {this.state.isHidden && <div className='inner-box'></div>}
      </div>
    );
  }
}
