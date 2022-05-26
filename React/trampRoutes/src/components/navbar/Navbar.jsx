import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ categories }) {
  const insertCategories = () => {
    return categories.map((cat) => {
      return (
        <Link key={cat} to={`/donaldthinks/${cat}`}>
          <button
            onClick={() => {
              // console.log(cat);
            }}
          >
            {cat}
          </button>
        </Link>
      );
    });
  };
  return (
    <div>
      <h5>Nav Bar</h5>
      {insertCategories()}
    </div>
  );
}

export default Navbar;
