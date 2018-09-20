import React, { Component } from 'react';
import './App.css';

import NameComponent from './components/NameComponent';

class App extends Component {
  render() {
    return (
      <div>
        <p>Boom Boom!!</p>
        <NameComponent />
      </div>
    );
  }
}

export default App;
