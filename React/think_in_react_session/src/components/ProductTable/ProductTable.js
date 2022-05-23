import React, { Fragment, Component } from 'react';
import Category from '../Category/Category';
import Product from '../Product/Product';

// data
// userInput
// isInStock
class ProductTable extends Component {
  state = { displayedData: [] };

  filter = (tempData) => {
    return tempData.filter((e) => {
      if (!this.props.isInStock) {
        return e.name
          .toLowerCase()
          .includes(this.props.userInput.toLowerCase());
      } else {
        return (
          e.stocked &&
          e.name.toLowerCase().includes(this.props.userInput.toLowerCase())
        );
      }
    });
  };

  setOrderedObj = () => {
    const obj = {};
    const filteredData = this.filter(this.props.data);
    filteredData.forEach((product) => {
      if (!obj[product.category]) {
        obj[product.category] = [product];
      } else {
        obj[product.category].push(product);
      }
    });
    return obj;
  };
  insertData = (dataObj) => {
    const arr = [];
    for (let category in dataObj) {
      arr.push(
        <Fragment key={category}>
          <Category name={category} />
          {dataObj[category].map((product, index) => (
            <Product
              key={product.name}
              name={product.name}
              price={product.price}
            />
          ))}
        </Fragment>
      );
    }
    return arr;
  };
  render() {
    return (
      <>
        <React.Fragment>{this.insertData(this.setOrderedObj())}</React.Fragment>
      </>
    );
  }
}
export default ProductTable;
