import { createContext, useState, useContext } from 'react';

export const myContext = createContext();

//*------------ ↓ Hooks ↓--------------------
export const useMyContext = () => {
  const { name, setName, last, setLast, age, setAge } = useContext(myContext);
  return { name, setName, last, setLast, age, setAge };
};
export const useName = () => {
  const { name, setName } = useContext(myContext);
  return { name, setName };
};
export const useLast = () => {
  const { last, setLast } = useContext(myContext);
  return { last, setLast };
};
export const useAge = () => {
  const { age, setAge } = useContext(myContext);
  return { age, setAge };
};
//*-----------------------------------------

function ContextProvider({ children }) {
  const [name, setName] = useState('Bob');
  const [last, setLast] = useState('');
  const [age, setAge] = useState(15);

  return (
    <myContext.Provider value={{ name, setName, last, setLast, age, setAge }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
