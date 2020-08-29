import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Home from './pages/Home.page';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/search'>
            <h1>Hello World!</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
