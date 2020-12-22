import React from 'react';
import './App.css';

// react dnd
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// redux stuff
import store from './redux/store';
import { Provider } from 'react-redux';

// pages
import Home from './pages/Home.page';

const App = () =>  (
      <Provider store={store}>
        <Home />
      </Provider>
    );

export default DragDropContext(HTML5Backend)(App);
