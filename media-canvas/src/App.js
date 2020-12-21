import React from 'react';
import './App.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { Provider } from 'react-redux';
import store from './redux/store';

// pages
import Home from './pages/Home.page';

const App = () =>  (
      <Provider store={store}>
        <Home />
      </Provider>
    );

export default DragDropContext(HTML5Backend)(App);
