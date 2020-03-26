import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu.component';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
