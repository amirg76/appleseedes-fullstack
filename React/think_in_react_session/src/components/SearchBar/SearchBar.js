import React from 'react';
import './style.css';

function SearchBar({
  inputValue,
  handleInputChange,
  isInStock,
  handleIsInStock,
}) {
  return (
    <div className='search'>
      <input value={inputValue} onChange={handleInputChange} />
      <div>
        <input type='checkbox' onChange={handleIsInStock} checked={isInStock} />
        <label>In stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
