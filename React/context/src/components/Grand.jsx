import { useContext } from 'react';
import { myContext } from '../context/myContext';

function Grand() {
  const { setAge } = useContext(myContext);

  return (
    <div>
      <button onClick={() => setAge(2)}>setAge</button>
    </div>
  );
}

export default Grand;
