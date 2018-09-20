import React, { Component } from 'react';
import './App.css';

import NameComponent from './components/NameComponent';

class App extends Component {
  render() {
    var word = "Hello";
    var array = ['Welcome','to','my','course'];

    var arrayToRender = [];
    array.forEach(function(word) {
      arrayToRender.push(
        <p>{word}</p>
      )
    });
    return (
      <div>
        <p>Hello</p>
        {arrayToRender}
        <NameComponent />
      </div>
    );
  }
}

export default App;
