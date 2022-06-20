import { useState } from 'react';
import { userAPI } from './api/users.api';
function App() {
  const [user, setUser] = useState(null);

  const handleClick = async () => {
    console.log(process.env.NODE_ENV);
    const { data } = await userAPI.get('/');
    console.log(data);
  };

  return (
    <div className='App'>
      <h1>Hola amigos</h1>
      <button onClick={handleClick}>Fetch</button>
    </div>
  );
}

export default App;
