import './App.css';
import React from 'react';
import Counter from './Counter';
import { useState } from 'react';
import FetchData from './FetchData';


function App() {  
 const [showCounter, setShowCounter] = useState(true)
 return <>
  <button onClick={()=>setShowCounter(prev=>!prev)}>Show/Hide</button>
  {showCounter && <Counter />}
 </>
}

export default App;
