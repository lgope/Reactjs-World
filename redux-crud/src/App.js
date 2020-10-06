import React from 'react';
import logo from './logo.svg';
import { User } from './features/user/User.component';
import './App.css';

function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <User />
    </div>
  );
}

export default App;
