import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SwiperTest from './SwiperTest';

function App() {
  const [state, setstate] = useState(1);

  useEffect(() => {
    axios
      .get('')
      .then(res => {
        console.log('1 ', res);
      })
      .catch(err => console.log('2 ', err));
  }, state);

  return (
    <div className='App'>
      <SwiperTest />
    </div>
  );
}

export default App;
