import React, { Component } from 'react';
import data from '../mocks/products';
import ProductTable from './ProductTable/ProductTable';
import SearchBar from './SearchBar/SearchBar';

const obj = { name: 'bob', last: 'dou' };
const { name } = obj;

export default class App extends Component {
  state = {
    userInput: '',
    isInStock: false,
    originalData: null,
  };
  componentDidMount() {
    //! Fake API call ↓
    setTimeout(() => {
      this.setState({ originalData: data });
    }, 2000);
  }
  handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };
  handleIsInStock = () => {
    this.setState((prevState) => {
      return { isInStock: !prevState.isInStock };
    });
  };
  render() {
    return (
      <div>
        {!this.state.originalData ? (
          <h1>Spinner</h1>
        ) : (
          <>
            <SearchBar
              inputValue={this.state.userInput}
              handleInputChange={this.handleInputChange}
              handleIsInStock={this.handleIsInStock}
              isInStock={this.state.isInStock}
            />
            <ProductTable
              data={this.state.originalData}
              userInput={this.state.userInput}
              isInStock={this.state.isInStock}
            />
          </>
        )}
      </div>
    );
  }
}
