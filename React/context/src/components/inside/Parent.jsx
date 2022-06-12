import React, { useState, createContext } from 'react';
import Son from './Son';

export const myContext = createContext(); // ← returns context object

function Parent() {
  const [name, setName] = useState('No name');

  return (
    <myContext.Provider value={{ name, setName }}>
      <div>
        {name}
        <h1>Parent</h1>
        <Son />
      </div>
    </myContext.Provider>
  );
}

export default Parent;
