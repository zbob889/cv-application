import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      identity: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phoneNumber: 'Phone Number',
      }
    };
  };

  render() {

    return(
      <div id='container'>
        <div id='form'>
          <div id='title'>CV Generator</div>

          <div id='buttonDiv'>
            <button id='previewButton'>Preview</button>
          </div>

          


        </div>
      </div>
    );
  };
};

export default App;
