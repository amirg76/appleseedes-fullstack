import React from 'react';

function Product({ name, price }) {
  return (
    <div>
      {name} {price}
    </div>
  );
}

export default Product;
