// import { useContext } from 'react';//?1
// import { myContext } from '../context/myContext';//?1

import { useName } from '../context/myContext'; //? Hook

import Son from './Son';

function Parent() {
  const { name } = useName();
  // const { age } = useContext(myContext);//?1

  return (
    <div>
      {name}
      {/* <h1>{age}</h1> */}
      <Son />
    </div>
  );
}

export default Parent;
