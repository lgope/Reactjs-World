import React from 'react';
import FileUpload from './conponents/FileUpload.component'
import './App.css';

const App = () =>  (
    <div className="container mt-4">
      <h4 className='display-4 text-center mb-4'>
        
        <i className="fas fa-file text-info"></i> Hello World!
        </h4>

        <FileUpload/>
    </div>
  );


export default App;
