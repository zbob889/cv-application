import React from 'react';
import IdentityCards from './components/IdentityCards';

export default function App(){

    return(
      <div id='container'>
        <div id='form'>
          <div id='title'>CV Generator</div>

          <div id='buttonDiv'>
            <button id='previewButton'>Preview</button>
          </div>


          <IdentityCards />

          


        </div>
      </div>
    );
};