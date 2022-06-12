import React, { useContext } from 'react';
import { myContext } from './Parent';

function Grand() {
  const { name, setName } = useContext(myContext); // ← gets value from the context

  return (
    <div>
      {name}
      <h1>Grand</h1>
      <button onClick={() => setName('Some name')}>Click</button>
    </div>
  );
}

export default Grand;
